/**
 * Last-upload store — persists the most recently uploaded batch (successful
 * + failed files) to sessionStorage as a fallback for the review screen
 * when no live files are present (e.g. the user re-opened the uploader
 * after closing it within the same tab session).
 *
 * Scope: ONE batch only. Each call to `save()` overwrites the previous one.
 * Persistence: sessionStorage (per-tab; survives reloads, lost on tab close).
 */
import type { UploadFile } from './store.types';

const STORAGE_KEY = 'sfx-uploader:last-upload';
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
 *  with the server-side CDN URL so thumbnails survive page reloads. */
function serialize(file: UploadFile): StoredFile {
  const { file: _blob, previewUrl: _objUrl, ...rest } = file;
  const cdnPreview =
    file.status === 'complete' && file.response?.file?.url?.cdn
      ? file.response.file.url.cdn
      : null;
  return { ...rest, previewUrl: cdnPreview };
}

/** sessionStorage may throw (quota, privacy mode); never crash the host. */
function safeRead(): StoredPayload | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredPayload;
    if (parsed?.__schemaVersion !== SCHEMA_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function safeWrite(payload: StoredPayload): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Quota exceeded or storage unavailable — silently ignore.
  }
}

export const lastUploadStore = {
  /** Overwrite the stored batch. Pass only complete + failed files. */
  save(files: UploadFile[]): void {
    if (files.length === 0) {
      this.clear();
      return;
    }
    const payload: StoredPayload = {
      __schemaVersion: SCHEMA_VERSION,
      savedAt: Date.now(),
      files: files.map(serialize),
    };
    safeWrite(payload);
  },

  /** Returns the stored files (cast back to UploadFile shape) or null. */
  load(): UploadFile[] | null {
    const payload = safeRead();
    if (!payload) return null;
    // Re-cast: file blob is gone (null), previewUrl is now the cdn URL (or null).
    return payload.files.map(
      (f) => ({ ...f, file: null }) as unknown as UploadFile,
    );
  },

  /** Drop the stored batch entirely. */
  clear(): void {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  },
};
