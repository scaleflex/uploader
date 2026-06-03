import { Upload, DetailedError } from 'tus-js-client';
import type { UploadFile, UploadResponse } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import { isSameAssetExists, fetchSameAssetResponse } from './same-asset';

export interface TusConfig {
  /** Files larger than this (bytes) use tus. Default: 10 MB. Set to 0 to always use tus. */
  sizeThreshold?: number;
  /** Chunk size in bytes. Default: 5 MB. */
  chunkSize?: number;
  /**
   * Override the tus endpoint.
   * Default: Scaleflex Companion (`https://eu-on-24001.connector.filerobot.com/files`).
   */
  endpoint?: string;
  /** Persist upload fingerprints for cross-session resume. Default: true. */
  resumable?: boolean;
  /** Number of parallel chunk uploads. Default: 1. */
  parallelChunks?: number;
  /** tus retry delays in ms. Default: [0, 1000, 3000, 5000]. */
  retryDelays?: number[];
}

const DEFAULT_SIZE_THRESHOLD = 10 * 1024 * 1024; // 10 MB
const DEFAULT_CHUNK_SIZE = 5 * 1024 * 1024;      // 5 MB
const COMPANION_ENDPOINT = 'https://eu-on-24001.connector.filerobot.com/files';
const COMPANION_JSON_BASE = 'https://eu-on-24001.connector.filerobot.com/json';

export interface TusUploadOptions {
  apiBase: string;
  authHeaders: AuthHeaders;
  /** Returns the latest auth headers — called before each chunk request so renewed SASS keys are picked up. */
  getAuthHeaders?: () => AuthHeaders;
  folder: string;
  tusConfig: TusConfig;
  onProgress: (bytesUploaded: number, bytesTotal: number) => void;
  onComplete: (response: UploadResponse) => void;
  onError: (error: Error) => void;
  /** Called when the tus upload is paused externally (e.g. network offline). */
  onPause?: () => void;
  /** Called when the tus upload is resumed externally (e.g. network back online). */
  onResume?: () => void;
  /** Called when the tus upload URL is assigned — allows storing it for cross-session resume. */
  onUploadUrlAvailable?: (url: string) => void;
}

export interface TusUploadHandle {
  abort: () => void;
  pause: () => void;
  resume: () => void;
  isPaused: () => boolean;
}

/**
 * Should this file use tus instead of regular XHR?
 */
export function shouldUseTus(file: UploadFile, tusConfig: TusConfig | undefined): boolean {
  if (!tusConfig || !file.file) return false;
  const threshold = tusConfig.sizeThreshold ?? DEFAULT_SIZE_THRESHOLD;
  return file.size >= threshold;
}

/**
 * Upload a local File via the tus resumable upload protocol.
 * Returns a handle with abort/pause/resume.
 */
export function tusUploadFile(
  uploadFile: UploadFile,
  opts: TusUploadOptions,
): TusUploadHandle {
  const { tusConfig } = opts;
  const base = opts.apiBase.replace(/\/+$/, '');
  const endpoint = tusConfig.endpoint || COMPANION_ENDPOINT;
  const chunkSize = tusConfig.chunkSize ?? DEFAULT_CHUNK_SIZE;
  const resumable = tusConfig.resumable !== false;
  const parallelChunks = tusConfig.parallelChunks ?? 1;
  const retryDelays = tusConfig.retryDelays ?? [0, 1000, 3000, 5000];

  // Extract container from apiBase (https://api.filerobot.com/{container})
  const container = base.split('/').pop() || '';

  let paused = false;
  let aborted = false;
  let uploadUrlNotified = false;

  // --- Build tus metadata ---
  // Companion expects exactly: { name, type, filerobot-folder }
  // This matches v5's format (upload-orchestrator.ts:503-506 spreads file.info + filerobot-folder).
  // User metadata (meta/tags) is NOT sent via tus metadata — it's handled separately by the API.
  const metadata: Record<string, string> = {
    name: uploadFile.name,
    type: uploadFile.type,
    'filerobot-folder': opts.folder,
  };

  // --- Custom fingerprint (matches v5's getFingerprint.js) ---
  // Uses file ID + endpoint to avoid collisions between:
  // - Same-sized files with same mtime
  // - Same file uploaded to different folders/endpoints
  const tusFingerprint = async () => `tus-${uploadFile.id}-${endpoint}`;

  // Don't pass auth headers in the constructor — XHR.setRequestHeader appends
  // on duplicate calls, so onBeforeRequest would produce "key, key" values.
  // Instead, onBeforeRequest is the single source of auth headers.
  const upload = new Upload(uploadFile.file!, {
    endpoint,
    chunkSize,
    retryDelays,
    parallelUploads: parallelChunks,
    storeFingerprintForResuming: resumable,
    removeFingerprintOnSuccess: true,
    headers: {},
    metadata,
    fingerprint: tusFingerprint,

    // --- Dynamic auth headers (v5 pattern: onBeforeRequest) ---
    // Single source of auth headers for every tus request.
    // Uses getAuthHeaders() for latest SASS key, falls back to initial headers.
    onBeforeRequest(req) {
      const h = opts.getAuthHeaders ? opts.getAuthHeaders() : opts.authHeaders;
      for (const [key, value] of Object.entries(h)) {
        req.setHeader(key, value);
      }
      req.setHeader('X-Filerobot-Token', container);
    },

    // --- Store upload URL for cross-session resume (v5's onReceiveUploadUrl) ---
    // Only notify once to avoid redundant store updates (v5 checks uploadUrl !== existing).
    onUploadUrlAvailable() {
      if (upload.url && opts.onUploadUrlAvailable && !uploadUrlNotified) {
        uploadUrlNotified = true;
        opts.onUploadUrlAvailable(upload.url);
      }
    },

    onProgress(bytesUploaded, bytesTotal) {
      if (!aborted && !paused) {
        opts.onProgress(bytesUploaded, bytesTotal);
      }
    },

    onSuccess() {
      if (aborted) return;
      cleanupListeners();

      // tus protocol doesn't return file metadata in the response body.
      // After upload completes, fetch the file record from the Companion JSON endpoint
      // (same pattern as filerobot v5). The upload URL contains the file ID.
      const uploadUrl = upload.url || '';
      const fileId = uploadUrl.match(/files\/([^/?]+)/)?.[1];

      if (fileId) {
        // v5 fetches JSON with no auth headers — Companion identifies
        // the upload by file ID alone. Custom headers trigger a CORS preflight
        // that the /json/ endpoint doesn't support.
        fetchFileJson(fileId, uploadFile.size)
          .then((response) => {
            if (aborted) return;
            if (isSameAssetExists(response)) {
              // Identical content already exists — fetch the existing file
              // record so consumers get a real URL rather than empty strings.
              return fetchSameAssetResponse(response, uploadFile, opts.apiBase, opts.authHeaders)
                .then((r) => { if (!aborted) opts.onComplete(r); });
            }
            opts.onComplete(response);
          })
          .catch((err) => {
            if (!aborted) opts.onError(err);
          });
      } else {
        // Fallback: construct a synthetic response with what we have
        opts.onComplete({
          status: 'success',
          file: {
            uuid: '',
            name: uploadFile.name,
            extension: uploadFile.name.split('.').pop() || '',
            type: uploadFile.type,
            size: uploadFile.size,
            url: { public: uploadUrl, cdn: uploadUrl },
            meta: uploadFile.meta as Record<string, unknown>,
            tags: uploadFile.tags,
            info: {},
            created_at: new Date().toISOString(),
            modified_at: new Date().toISOString(),
          },
        });
      }
    },

    onError(error) {
      if (!aborted) {
        cleanupListeners();
        // Detect network errors for better user messaging (v5 pattern)
        if (isNetworkError(error)) {
          opts.onError(new Error(
            'Network error during upload — check your connection or firewall settings',
          ));
        } else {
          opts.onError(error instanceof Error ? error : new Error(String(error)));
        }
      }
    },

    // --- 429 rate-limit and retry handling (matches v5's defaultOnShouldRetry) ---
    onShouldRetry(error, _retryAttempt, _options) {
      const status = (error as DetailedError).originalResponse?.getStatus();

      if (status === 429) {
        // Too Many Requests — let tus-js-client retry with its retryDelays
        return true;
      }

      if (status && status > 400 && status < 500 && status !== 409) {
        // Non-retryable 4xx (auth failures, bad request, etc.) — abort
        return false;
      }

      // Network errors and 5xx — retry
      return true;
    },
  });

  // --- Offline detection ---
  // Pause upload when browser goes offline, auto-resume when back online (v5 pattern).
  let offlineHandler: (() => void) | null = null;
  let onlineHandler: (() => void) | null = null;

  if (typeof window !== 'undefined') {
    offlineHandler = () => {
      if (!paused && !aborted) {
        paused = true;
        upload.abort(false);
        opts.onPause?.();
      }
    };
    onlineHandler = () => {
      if (paused && !aborted) {
        paused = false;
        upload.start();
        opts.onResume?.();
      }
    };
    window.addEventListener('offline', offlineHandler);
    window.addEventListener('online', onlineHandler);
  }

  const cleanupListeners = () => {
    if (offlineHandler) window.removeEventListener('offline', offlineHandler);
    if (onlineHandler) window.removeEventListener('online', onlineHandler);
  };

  // Attempt to resume a previous upload if fingerprinting is enabled.
  // Wrapped in try-catch to ensure listener cleanup on early errors.
  const safeStart = () => {
    try {
      upload.start();
    } catch (err) {
      cleanupListeners();
      opts.onError(err instanceof Error ? err : new Error(String(err)));
    }
  };

  if (resumable) {
    upload.findPreviousUploads().then((previousUploads) => {
      if (previousUploads.length > 0 && !aborted) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }
      if (!aborted) safeStart();
    });
  } else {
    safeStart();
  }

  return {
    abort() {
      aborted = true;
      paused = false;
      cleanupListeners();
      upload.abort(true);
    },
    pause() {
      if (!paused && !aborted) {
        paused = true;
        upload.abort(false); // abort without terminating — allows resume
      }
    },
    resume() {
      if (paused && !aborted) {
        paused = false;
        upload.start(); // tus-js-client resumes from where it left off
      }
    },
    isPaused() {
      return paused;
    },
  };
}

/**
 * Detect network-level errors (connection refused, timeout, offline).
 * Matches v5's isNetworkError() — checks for incomplete requests OR status 0.
 */
function isNetworkError(error: unknown): boolean {
  if (error instanceof DetailedError) {
    const xhr = error.originalRequest?.getUnderlyingObject();
    if (xhr && typeof xhr.readyState === 'number' && typeof xhr.status === 'number') {
      // v5 logic: (readyState !== 0 && readyState !== 4) || status === 0
      // Catches: in-flight aborts (readyState 1-3) and completed-but-no-response (status 0)
      return (xhr.readyState !== 0 && xhr.readyState !== 4) || xhr.status === 0;
    }
    // No response at all — likely network error
    return error.originalResponse == null && error.causingError != null;
  }
  return false;
}

/**
 * Fetch the file record from the Companion JSON endpoint after tus upload.
 * Retries up to 3 times with increasing delays to handle processing lag
 * (same pattern as filerobot v5's getFileJson — 13s delay for >100 MB files).
 */
async function fetchFileJson(
  fileId: string,
  fileSize: number,
): Promise<UploadResponse> {
  const url = `${COMPANION_JSON_BASE}/${fileId}`;
  // Match v5 delays: 13s for large files (>100 MB), 6s for smaller files
  const baseDelay = fileSize > 100_000_000 ? 13_000 : 6_000;
  const maxRetries = 3;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => setTimeout(r, baseDelay));
    }

    // No auth headers — v5 does the same. Companion identifies the upload by file ID.
    const res = await fetch(url);
    if (res.status === 404 && attempt < maxRetries) continue;

    if (!res.ok) {
      throw new Error(`Failed to fetch file record (HTTP ${res.status})`);
    }

    const body = await res.json();
    // Identical content already exists — return as-is so the caller can
    // normalize it into a success response (not a real failure).
    if (isSameAssetExists(body)) return body as UploadResponse;
    // Companion returns { file: {...} } directly
    if (body.file) {
      return { status: 'success', file: body.file } as UploadResponse;
    }
    if (body.status === 'success') return body as UploadResponse;
    if (attempt < maxRetries) continue;
    throw new Error(body.msg || 'File record not available after upload');
  }

  throw new Error('File record not available after upload');
}
