import type { ProviderId, CompanionListResponse, CompanionSearchResponse } from './connector.types';

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
