import type {
  ProviderId,
  CompanionItem,
  CompanionListResponse,
  CompanionSearchResponse,
} from './connector.types';

function buildHeaders(token: string): Record<string, string> {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'uppy-auth-token': token,
  };
}

/** Strip trailing slashes from a URL. */
function stripSlash(url: string): string {
  return url.replace(/\/+$/, '');
}

/**
 * Map our ProviderId to the Companion URL path segment.
 * e.g. 'google-drive' → 'drive' (Companion uses 'drive', not 'google-drive')
 */
const COMPANION_PROVIDER_ID: Record<ProviderId, string> = {
  'google-drive': 'drive',
  'dropbox': 'dropbox',
  'onedrive': 'onedrive',
  'box': 'box',
  'instagram': 'instagram',
  'facebook': 'facebook',
  'unsplash': 'unsplash',
};

function companionId(provider: ProviderId): string {
  return COMPANION_PROVIDER_ID[provider] ?? provider;
}

/**
 * Build the OAuth connect URL that should be opened in a popup.
 */
export function getAuthUrl(companionUrl: string, provider: ProviderId): string {
  const base = stripSlash(companionUrl);
  const state = btoa(JSON.stringify({ origin: window.location.origin }));
  const pid = companionId(provider);
  return `${base}/${pid}/connect?state=${encodeURIComponent(state)}`;
}

/**
 * List files/folders in a directory.
 * Note: directory path is NOT encoded — v5 passes it raw and Companion expects it that way.
 */
export async function listFiles(
  companionUrl: string,
  provider: ProviderId,
  token: string,
  directory = '',
): Promise<CompanionListResponse> {
  const base = stripSlash(companionUrl);
  const path = directory ? `/${directory}` : '';
  const pid = companionId(provider);
  const res = await fetch(`${base}/${pid}/list${path}`, {
    method: 'GET',
    headers: buildHeaders(token),
    credentials: 'same-origin',
  });

  if (res.status === 401) {
    throw new AuthExpiredError();
  }
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message || `Companion list failed (HTTP ${res.status})`);
  }

  return res.json();
}

/**
 * Load the next page of results using the nextPagePath from a previous response.
 */
export async function listNextPage(
  companionUrl: string,
  token: string,
  nextPagePath: string,
): Promise<CompanionListResponse> {
  const base = stripSlash(companionUrl);
  const res = await fetch(`${base}/${nextPagePath}`, {
    method: 'GET',
    headers: buildHeaders(token),
    credentials: 'same-origin',
  });

  if (res.status === 401) {
    throw new AuthExpiredError();
  }
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message || `Companion list failed (HTTP ${res.status})`);
  }

  return res.json();
}

/**
 * Recursively collect all files under a folder by repeatedly calling
 * {@link listFiles} (and paginating via {@link listNextPage}). Each returned
 * file is annotated with `relativeFolder` — its path relative to the root
 * folder the caller started at, so the consumer can preserve hierarchy on
 * the upload side.
 *
 * The root folder's own name is included as the first path segment, so a file
 * at `myFolder/sub/image.png` ends up with `relativeFolder = "myFolder/sub"`.
 */
export async function listFolderRecursive(
  companionUrl: string,
  provider: ProviderId,
  token: string,
  rootRequestPath: string,
  rootFolderName: string,
  signal?: AbortSignal,
): Promise<Array<CompanionItem & { relativeFolder: string }>> {
  const out: Array<CompanionItem & { relativeFolder: string }> = [];

  async function walk(path: string, relativeFolder: string): Promise<void> {
    let nextPagePath: string | null = null;
    let firstPage = true;
    do {
      if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
      const res: CompanionListResponse = firstPage
        ? await listFiles(companionUrl, provider, token, path)
        : await listNextPage(companionUrl, token, nextPagePath as string);
      firstPage = false;
      nextPagePath = res.nextPagePath;
      for (const item of res.items) {
        if (item.isFolder) {
          const childFolder = relativeFolder
            ? `${relativeFolder}/${item.name}`
            : item.name;
          await walk(item.requestPath, childFolder);
        } else {
          out.push({ ...item, relativeFolder });
        }
      }
    } while (nextPagePath);
  }

  await walk(rootRequestPath, rootFolderName);
  return out;
}

/**
 * Search a search-based provider (e.g. Unsplash).
 * GET /search/{provider}/list?q={query}&{nextPageQuery}
 */
export async function searchProvider(
  companionUrl: string,
  provider: ProviderId,
  query: string,
  nextPageQuery?: string,
): Promise<CompanionSearchResponse> {
  const base = stripSlash(companionUrl);
  const pid = companionId(provider);
  const qs = nextPageQuery
    ? `q=${encodeURIComponent(query)}&${nextPageQuery}`
    : `q=${encodeURIComponent(query)}`;
  const res = await fetch(`${base}/search/${pid}/list?${qs}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message || `Search failed (HTTP ${res.status})`);
  }

  return res.json();
}

/**
 * Tell Companion to download the file from the provider and upload it to
 * the Scaleflex endpoint. Returns a socket token for WebSocket progress.
 *
 * This is ASYNC on Companion's side — it returns immediately with a token.
 * The actual upload progress and completion come via WebSocket.
 */
export async function uploadRemoteFile(
  companionUrl: string,
  provider: ProviderId,
  token: string,
  requestPath: string,
  body: {
    fileId: string;
    endpoint: string;
    headers: Record<string, string>;
    size?: number;
    metadata?: Record<string, unknown>;
    httpMethod?: string;
    useFormData?: boolean;
    fieldname?: string;
  },
  /** Search providers use /search/{provider}/get/ instead of /{provider}/get/ */
  isSearchProvider = false,
): Promise<{ token: string }> {
  const base = stripSlash(companionUrl);
  const pid = companionId(provider);
  const urlPath = isSearchProvider
    ? `${base}/search/${pid}/get/${requestPath}`
    : `${base}/${pid}/get/${requestPath}`;
  const headers = isSearchProvider
    ? { Accept: 'application/json', 'Content-Type': 'application/json' }
    : buildHeaders(token);
  const res = await fetch(urlPath, {
    method: 'POST',
    headers,
    credentials: 'same-origin',
    body: JSON.stringify({
      ...body,
      httpMethod: body.httpMethod ?? 'POST',
      useFormData: body.useFormData ?? true,
      fieldname: body.fieldname ?? 'files[]',
    }),
  });

  if (res.status === 401) {
    throw new AuthExpiredError();
  }
  if (!res.ok) {
    const errBody = await res.json().catch(() => null);
    throw new Error(errBody?.message || `Companion upload failed (HTTP ${res.status})`);
  }

  return res.json();
}

/** Metadata returned by Companion `/url/meta` for a remote URL. */
export interface UrlMeta {
  url: string;
  name: string;
  type: string;
  size: number;
}

/**
 * Ask Companion to HEAD/GET the remote URL and return basic metadata.
 * Used before the actual upload so we can validate size against restrictions
 * and show a real progress total.
 *
 * Companion's `url` provider has no OAuth token — public endpoint.
 */
export async function fetchUrlMeta(
  companionUrl: string,
  url: string,
  signal?: AbortSignal,
): Promise<UrlMeta> {
  const base = stripSlash(companionUrl);
  const res = await fetch(`${base}/url/meta`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify({ url }),
    signal,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message || `Could not fetch URL metadata (HTTP ${res.status})`);
  }

  return res.json();
}

/**
 * Tell Companion to download the remote URL and upload it to the Scaleflex
 * endpoint. Returns a socket token for WebSocket progress.
 *
 * Mirrors {@link uploadRemoteFile} but uses the `url` pseudo-provider —
 * no auth token, no requestPath, and `url` is included in the body.
 */
export async function uploadFromUrl(
  companionUrl: string,
  url: string,
  body: {
    fileId: string;
    endpoint: string;
    headers: Record<string, string>;
    size?: number;
    metadata?: Record<string, unknown>;
  },
  signal?: AbortSignal,
): Promise<{ token: string }> {
  const base = stripSlash(companionUrl);
  const res = await fetch(`${base}/url/get`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      url,
      ...body,
      httpMethod: 'POST',
      useFormData: true,
      fieldname: 'files[]',
    }),
    signal,
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => null);
    throw new Error(errBody?.message || `Companion URL upload failed (HTTP ${res.status})`);
  }

  return res.json();
}

/**
 * Revoke the provider's OAuth token on Companion.
 * Caller should also call removeToken() to clear local storage.
 */
export async function logout(
  companionUrl: string,
  provider: ProviderId,
  token: string,
): Promise<{ ok: boolean; revoked: boolean }> {
  const base = stripSlash(companionUrl);
  const pid = companionId(provider);
  const res = await fetch(`${base}/${pid}/logout`, {
    method: 'GET',
    headers: buildHeaders(token),
    credentials: 'same-origin',
  });

  if (!res.ok) {
    return { ok: false, revoked: false };
  }

  return res.json();
}

/**
 * Convert a Companion HTTP URL to a WebSocket URL.
 * e.g. https://eu-on-24001.connector.filerobot.com → wss://eu-on-24001.connector.filerobot.com
 *
 * Derives ws/wss from the companion URL's own scheme (not location.protocol)
 * so that wss:// is used when Companion is served over HTTPS — even when
 * the page itself is on plain http://localhost during development.
 */
export function getSocketHost(companionUrl: string): string {
  const regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  const host = regex.exec(companionUrl)?.[1] ?? companionUrl;
  const protocol = /^https:\/\//i.test(companionUrl) ? 'wss' : 'ws';
  return `${protocol}://${host}`;
}

/** Thrown when Companion returns 401 — the OAuth token has expired. */
export class AuthExpiredError extends Error {
  constructor() {
    super('Authentication expired');
    this.name = 'AuthExpiredError';
  }
}
