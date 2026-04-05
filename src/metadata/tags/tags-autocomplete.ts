import type { AuthHeaders } from '../../auth/auth.types';
import type { TagOption } from '../schema/schema.types';

export function createTagsAutocomplete(apiBase: string, headers: AuthHeaders) {
  let _timer: ReturnType<typeof setTimeout> | null = null;
  let _abortController: AbortController | null = null;
  let _cancelled = false;

  return {
    search(fieldCkey: string, query: string, callback: (results: TagOption[]) => void): void {
      if (_timer) clearTimeout(_timer);
      if (_abortController) _abortController.abort();
      _cancelled = false;

      if (!query.trim()) {
        callback([]);
        return;
      }

      _timer = setTimeout(async () => {
        _abortController = new AbortController();
        try {
          const url = `${apiBase}/v5/metadata/autocomplete?q=${encodeURIComponent(query.trim())}&meta_key=_${encodeURIComponent(fieldCkey)}&limit=20`;
          const resp = await fetch(url, { headers, signal: _abortController.signal });
          if (_cancelled) return;
          if (!resp.ok) { callback([]); return; }
          const json = await resp.json();
          if (_cancelled) return;
          const tags = json.data?.tags ?? json.tags ?? [];
          callback(
            tags.map((t: any) => ({
              sid: t.sid || undefined,
              value: t.tag || t.value || t.label || '',
              label: t.tag || t.label || t.value || '',
            })),
          );
        } catch {
          if (!_cancelled) callback([]);
        }
      }, 200);
    },

    cancel(): void {
      _cancelled = true;
      if (_timer) clearTimeout(_timer);
      if (_abortController) _abortController.abort();
    },
  };
}
