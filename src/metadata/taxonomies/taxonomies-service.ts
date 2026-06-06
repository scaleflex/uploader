import type { AuthHeaders } from '../../auth/auth.types';
import type {
  Taxonomy,
  TaxonomyAutocompleteTag,
  TaxonomyNodesResponse,
} from './taxonomies.types';

export interface TaxonomyService {
  /**
   * Catalogue of all taxonomies in the project. Used to resolve a field's
   * `taxonomy_suid` into the `uuid` the `/nodes` endpoint expects. Cached
   * per-service-instance after the first call.
   */
  fetchTaxonomies(): Promise<Taxonomy[]>;
  fetchNodes(
    taxonomyUuid: string,
    baseLtree?: string,
    limit?: number,
  ): Promise<TaxonomyNodesResponse>;
  autocomplete(
    fieldCkey: string,
    query: string,
    callback: (results: TaxonomyAutocompleteTag[]) => void,
  ): void;
  cancel(): void;
}

const EMPTY_RESPONSE: TaxonomyNodesResponse = { base_node: null, nodes: [] };

export function createTaxonomyService(
  apiBase: string,
  headers: AuthHeaders,
): TaxonomyService {
  const base = apiBase.replace(/\/$/, '');
  let _autocompleteTimer: ReturnType<typeof setTimeout> | null = null;
  let _autocompleteAbort: AbortController | null = null;
  let _autocompleteCancelled = false;
  let _fetchAbort: AbortController | null = null;
  let _taxonomiesPromise: Promise<Taxonomy[]> | null = null;

  return {
    fetchTaxonomies(): Promise<Taxonomy[]> {
      if (_taxonomiesPromise) return _taxonomiesPromise;
      _taxonomiesPromise = (async () => {
        const url = `${base}/v5/taxonomies`;
        try {
          const resp = await fetch(url, { headers });
          if (!resp.ok) {
            console.warn(`[sfx-uploader] /v5/taxonomies returned ${resp.status}`);
            return [];
          }
          const json = await resp.json();
          const list = json?.taxonomies ?? json?.data?.taxonomies ?? json?.data ?? json;
          if (!Array.isArray(list)) {
            console.warn(
              '[sfx-uploader] /v5/taxonomies returned unexpected shape',
              json,
            );
            return [];
          }
          return list as Taxonomy[];
        } catch (err) {
          console.warn('[sfx-uploader] /v5/taxonomies request failed', err);
          return [];
        }
      })();
      // Reset cache on empty/failure so a future open can retry.
      _taxonomiesPromise.then(
        (list) => {
          if (list.length === 0) _taxonomiesPromise = null;
        },
        () => {
          _taxonomiesPromise = null;
        },
      );
      return _taxonomiesPromise;
    },

    async fetchNodes(
      taxonomyUuid: string,
      baseLtree = '',
      limit = 10,
    ): Promise<TaxonomyNodesResponse> {
      if (_fetchAbort) _fetchAbort.abort();
      _fetchAbort = new AbortController();
      try {
        const params = new URLSearchParams();
        if (baseLtree) params.set('base', baseLtree);
        params.set('limit', String(limit));
        const url = `${base}/v5/taxonomy/${encodeURIComponent(taxonomyUuid)}/nodes?${params.toString()}`;
        const resp = await fetch(url, { headers, signal: _fetchAbort.signal });
        if (!resp.ok) return EMPTY_RESPONSE;
        const json = await resp.json();
        const data = json?.data ?? json;
        return {
          base_node: data?.base_node ?? null,
          nodes: Array.isArray(data?.nodes) ? data.nodes : [],
        };
      } catch {
        return EMPTY_RESPONSE;
      }
    },

    autocomplete(
      fieldCkey: string,
      query: string,
      callback: (results: TaxonomyAutocompleteTag[]) => void,
    ): void {
      if (_autocompleteTimer) clearTimeout(_autocompleteTimer);
      if (_autocompleteAbort) _autocompleteAbort.abort();
      _autocompleteCancelled = false;

      if (!query.trim()) {
        callback([]);
        return;
      }

      _autocompleteTimer = setTimeout(async () => {
        _autocompleteAbort = new AbortController();
        try {
          const url = `${base}/v5/metadata/autocomplete?q=${encodeURIComponent(query.trim())}&meta_key=_${encodeURIComponent(fieldCkey)}`;
          const resp = await fetch(url, {
            headers,
            signal: _autocompleteAbort.signal,
          });
          if (_autocompleteCancelled) return;
          if (!resp.ok) {
            callback([]);
            return;
          }
          const json = await resp.json();
          if (_autocompleteCancelled) return;
          const tags = json?.data?.tags ?? json?.tags ?? [];
          callback(
            tags.map((t: Record<string, unknown>) => ({
              tag: String(t.tag ?? t.path ?? ''),
              path: String(t.path ?? t.tag ?? ''),
              suid: String(t.suid ?? ''),
              uuid: String(t.uuid ?? ''),
              approx_count:
                typeof t.approx_count === 'number'
                  ? (t.approx_count as number)
                  : undefined,
            })),
          );
        } catch {
          if (!_autocompleteCancelled) callback([]);
        }
      }, 200);
    },

    cancel(): void {
      _autocompleteCancelled = true;
      if (_autocompleteTimer) clearTimeout(_autocompleteTimer);
      if (_autocompleteAbort) _autocompleteAbort.abort();
      if (_fetchAbort) _fetchAbort.abort();
    },
  };
}
