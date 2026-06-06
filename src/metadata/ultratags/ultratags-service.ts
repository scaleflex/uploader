import type { AuthHeaders } from '../../auth/auth.types';
import {
  ULTRATAGS_SEARCH_DEBOUNCE_MS,
} from './ultratags.constants';
import type {
  UltratagsBySidsParams,
  UltratagsCreateRequest,
  UltratagsCreateResponse,
  UltratagsListParams,
  UltratagsListResponse,
  UltratagsServiceLike,
} from './ultratags.types';

const ULTRATAGS_PATH = '/v5/meta/ultratags';

const buildListUrl = (apiBase: string, params: UltratagsListParams): string => {
  const search = new URLSearchParams();
  if (params.meta) search.set('meta', params.meta);
  if (params.q) search.set('q', params.q);
  if (params.sort) search.set('sort', params.sort);
  if (typeof params.limit === 'number') search.set('limit', String(params.limit));
  if (params.after) search.set('after', params.after);
  if (params.format) search.set('format', params.format);
  if (params.lang) search.set('lang', params.lang);
  const qs = search.toString();
  return `${apiBase}${ULTRATAGS_PATH}${qs ? `?${qs}` : ''}`;
};

const buildBySidsUrl = (apiBase: string, params: UltratagsBySidsParams): string => {
  const search = new URLSearchParams();
  if (params.format) search.set('format', params.format);
  if (params.lang) search.set('lang', params.lang);
  const qs = search.toString();
  return `${apiBase}${ULTRATAGS_PATH}${qs ? `?${qs}` : ''}`;
};

/**
 * Build a service against the Filerobot georeplicated API for ultratags.
 * Uses the same `apiBase` + auth headers wired for `/v5/metadata/autocomplete`.
 *
 * - `list` debounces 300ms and aborts any prior in-flight request so the input
 *   never races; the returned Promise resolves with the latest valid response
 *   or rejects with the AbortError when cancelled by a subsequent call.
 * - `getBySids` and `create` fire immediately (no debounce).
 */
export function createUltratagsService(
  apiBase: string,
  headers: AuthHeaders,
): UltratagsServiceLike {
  let _listTimer: ReturnType<typeof setTimeout> | null = null;
  let _listAbort: AbortController | null = null;

  const cancelListInFlight = () => {
    if (_listTimer) {
      clearTimeout(_listTimer);
      _listTimer = null;
    }
    if (_listAbort) {
      _listAbort.abort();
      _listAbort = null;
    }
  };

  return {
    list(params: UltratagsListParams): Promise<UltratagsListResponse> {
      cancelListInFlight();
      return new Promise<UltratagsListResponse>((resolve, reject) => {
        _listTimer = setTimeout(async () => {
          _listTimer = null;
          _listAbort = new AbortController();
          try {
            const url = buildListUrl(apiBase, params);
            const resp = await fetch(url, {
              method: 'GET',
              headers,
              signal: _listAbort.signal,
            });
            if (!resp.ok) {
              reject(new Error(`ultratags list failed: HTTP ${resp.status}`));
              return;
            }
            const json = (await resp.json()) as UltratagsListResponse;
            resolve(json);
          } catch (err) {
            reject(err);
          }
        }, ULTRATAGS_SEARCH_DEBOUNCE_MS);
      });
    },

    async getBySids(params: UltratagsBySidsParams): Promise<UltratagsListResponse> {
      if (!params.sids || params.sids.length === 0) {
        return { items: [], stats: { count: 0, total_count: 0 } };
      }
      const url = buildBySidsUrl(apiBase, params);
      const resp = await fetch(url, {
        method: 'QUERY',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify({ ultratags_sids: params.sids }),
      });
      if (!resp.ok) throw new Error(`ultratags getBySids failed: HTTP ${resp.status}`);
      return (await resp.json()) as UltratagsListResponse;
    },

    async create(req: UltratagsCreateRequest): Promise<UltratagsCreateResponse> {
      const url = `${apiBase}${ULTRATAGS_PATH}`;
      const resp = await fetch(url, {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
      });
      if (!resp.ok) throw new Error(`ultratags create failed: HTTP ${resp.status}`);
      return (await resp.json()) as UltratagsCreateResponse;
    },

    cancel(): void {
      cancelListInFlight();
    },
  };
}
