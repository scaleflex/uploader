/**
 * Last-upload store — persists the most recently uploaded batch (successful
 * + failed files) to sessionStorage so the user can re-open the uploader,
 * review what was uploaded, edit metadata locally, and follow links to the
 * destination URLs.
 *
 * Scope: ONE batch only. Each call to `save()` overwrites the previous one.
 * Persistence: sessionStorage (per-tab; survives reloads, lost on tab close).
 *
 * Note: this is intentionally NOT a multi-session history. There is no
 * server sync for metadata edits — see the `__hasLocalMetaEdit` flag and
 * the `markLocalEdit()` API. Once a backend PATCH endpoint exists, the
 * `_onReviewMetaSave` handler in sfx-uploader.ts can wire up the actual
 * sync and the badge can be removed.
 */
import type { UploadFile } from './store.types';

const STORAGE_KEY = 'sfx-uploader:last-upload';
const SCHEMA_VERSION = 1;

/** Internal flag added to persisted files to mark un-synced local edits. */
type StoredFile = Omit<UploadFile, 'file' | 'previewUrl'> & {
  previewUrl: string | null; // overridden: only ever a remote URL after load
  __hasLocalMetaEdit?: boolean;
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

  /** Patch a stored file's metadata + tags and mark it as locally edited. */
  updateMeta(
    fileId: string,
    meta: Record<string, unknown>,
    tags?: string[],
  ): void {
    const payload = safeRead();
    if (!payload) return;
    const idx = payload.files.findIndex((f) => f.id === fileId);
    if (idx === -1) return;
    payload.files[idx] = {
      ...payload.files[idx],
      meta,
      ...(tags !== undefined ? { tags } : {}),
      __hasLocalMetaEdit: true,
    };
    safeWrite(payload);
  },

  /** Set the local-edit flag without changing meta (used by the host). */
  markLocalEdit(fileId: string): void {
    const payload = safeRead();
    if (!payload) return;
    const idx = payload.files.findIndex((f) => f.id === fileId);
    if (idx === -1) return;
    payload.files[idx] = { ...payload.files[idx], __hasLocalMetaEdit: true };
    safeWrite(payload);
  },

  /** Drop the stored batch entirely. */
  clear(): void {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  },

  /** Whether a stored batch exists. */
  has(): boolean {
    return safeRead() !== null;
  },

  /** Number of files in the stored batch (0 if none). */
  count(): number {
    return safeRead()?.files.length ?? 0;
  },
};
