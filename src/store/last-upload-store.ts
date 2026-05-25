/**
 * Last-upload store — persists the most recently uploaded batch (successful
 * + failed files) to sessionStorage as a fallback for the review screen
 * when no live files are present (e.g. the user re-opened the uploader
 * after closing it within the same tab session).
 *
 * Scope: ONE batch per key. Each call to `save()` overwrites the previous one.
 * Persistence: sessionStorage (per-tab; survives reloads, lost on tab close).
 *
 * The storage key is scoped by a caller-supplied `id` so that multiple
 * uploader instances (different containers / airboxes / purposes) each
 * get their own slot: `sfx-uploader:last-upload:{id}`.
 */
import type { UploadFile } from './store.types';

const KEY_PREFIX = 'sfx-uploader:last-upload:';
const SCHEMA_VERSION = 1;

/** Persisted file shape — drops the unserializable File blob and the
 *  per-page-life objectURL previewUrl (substituted with the CDN URL on
 *  serialize so thumbnails survive a page reload). */
type StoredFile = Omit<UploadFile, 'file' | 'previewUrl'> & {
  previewUrl: string | null;
};

interface StoredPayload {
  __schemaVersion: number;
  savedAt: number;
  files: StoredFile[];
}

/** Strip non-serializable fields and substitute previewUrl for completed files
 *  with a server-side URL so thumbnails survive page reloads. Prefers the
 *  engine-resolved `file.previewUrl` (already runs through `cdn_permalink`
 *  preference + the host's `transformRemoteThumbnail` hook), falling back to
 *  the raw response URLs for non-image files where `previewUrl` is a blob
 *  poster or null. */
function serialize(file: UploadFile): StoredFile {
  const { file: _blob, previewUrl: _objUrl, ...rest } = file;
  let cdnPreview: string | null = null;
  if (file.status === 'complete') {
    if (file.previewUrl && !file.previewUrl.startsWith('blob:')) {
      cdnPreview = file.previewUrl;
    } else {
      cdnPreview =
        file.response?.file?.url?.cdn_permalink ??
        file.response?.file?.url?.cdn ??
        null;
    }
  }
  return { ...rest, previewUrl: cdnPreview };
}

/** sessionStorage may throw (quota, privacy mode); never crash the host. */
function safeRead(id: string): StoredPayload | null {
  try {
    const raw = sessionStorage.getItem(KEY_PREFIX + id);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredPayload;
    if (parsed?.__schemaVersion !== SCHEMA_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function safeWrite(id: string, payload: StoredPayload): void {
  try {
    sessionStorage.setItem(KEY_PREFIX + id, JSON.stringify(payload));
  } catch {
    // Quota exceeded or storage unavailable — silently ignore.
  }
}

export const lastUploadStore = {
  /** Overwrite the stored batch. Pass only complete + failed files. */
  save(id: string, files: UploadFile[]): void {
    if (files.length === 0) {
      this.clear(id);
      return;
    }
    const payload: StoredPayload = {
      __schemaVersion: SCHEMA_VERSION,
      savedAt: Date.now(),
      files: files.map(serialize),
    };
    safeWrite(id, payload);
  },

  /** Returns the stored files (rehydrated back to UploadFile shape) or null.
   *  The `file` blob and `remoteUrl` are not serializable — they are set to
   *  null on restore. Downstream code must null-check `file.file` before use. */
  load(id: string): UploadFile[] | null {
    const payload = safeRead(id);
    if (!payload) return null;
    return payload.files.map((f): UploadFile => ({
      ...f,
      file: null,
      previewUrl: f.previewUrl ?? null,
    }));
  },

  /** Check whether a stored batch exists without deserializing it. */
  exists(id: string): boolean {
    try {
      return sessionStorage.getItem(KEY_PREFIX + id) != null;
    } catch {
      return false;
    }
  },

  /** Drop the stored batch entirely. */
  clear(id: string): void {
    try {
      sessionStorage.removeItem(KEY_PREFIX + id);
    } catch {
      // ignore
    }
  },
};
