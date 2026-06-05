import type { UploadFile } from '../store/store.types';

/** Subset of `UploaderConfig` the resolver needs. Declared locally so this
 *  util can be imported by `sfx-uploader.ts` without a circular dep. */
export interface LocateUrlConfig {
  getLocateUrl?: (file: UploadFile) => string | null | undefined;
  adminUrl?: string;
}

/**
 * Build the URL the "Locate" button should open for a completed file.
 *
 * Resolution order:
 *   1. `config.getLocateUrl(file)` — host-supplied builder; wins if it
 *      returns a non-empty string.
 *   2. `${config.adminUrl}/library?lf=<base64(uuid)>` — canonical
 *      Filerobot admin DAM deep-link. The admin reads `?lf=…` on load
 *      and scrolls to / selects the asset.
 *
 * Returns `null` when neither path can produce a URL — i.e. no custom
 * builder, no `adminUrl` configured, or the file has no UUID (e.g. an
 * already-existed response that didn't include `existing_file_uuid`).
 * Callers should treat `null` as "do nothing".
 *
 * The base64 is URL-encoded since standard `btoa` output can contain
 * `+`, `/`, `=` which are reserved in query strings (`+` decodes to
 * space, breaking the parameter). Canonical 36-char UUIDs happen to
 * avoid these chars but encoding keeps the URL robust against
 * non-canonical inputs.
 */
export function resolveLocateUrl(
  file: UploadFile,
  config: LocateUrlConfig | undefined,
): string | null {
  const custom = config?.getLocateUrl?.(file);
  if (custom) return custom;
  const adminUrl = config?.adminUrl;
  if (!adminUrl) return null;
  const uuid = file.response?.file?.uuid;
  if (!uuid) return null;
  const base = adminUrl.replace(/\/+$/, '');
  return `${base}/library?lf=${encodeURIComponent(btoa(uuid))}`;
}
