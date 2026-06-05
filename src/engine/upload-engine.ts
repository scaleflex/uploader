import type { Store } from '../store/store';
import type { UploaderState, UploadFile, FileStatus } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import { updateFile } from '../store/helpers';
import { xhrUploadFile, type XhrUploadHandle } from './xhr-upload';
import { companionUploadFile, companionUploadUrl } from './companion-upload';
import { tusUploadFile, shouldUseTus, type TusConfig, type TusUploadHandle } from './tus-upload';
import { isSameAssetExists } from './same-asset';

export interface UploadEngineConfig {
  apiBase: string;
  authHeaders: AuthHeaders;
  tusConfig?: TusConfig;
  /**
   * Companion connector base URL. Required for "Upload from URL" — the URL
   * import flow routes through Companion's `url` provider (matches the
   * legacy Hub behavior) so the connector handles remote fetch, redirects,
   * and streaming into `/v4/files`. When omitted, URL import is disabled.
   */
  companionUrl?: string;
  /**
   * Resolve extra query-string parameters (e.g. Filerobot `opt_*` flags)
   * for a given file's upload request. Returning a non-empty object also
   * forces the XHR path — tus is bypassed because Companion's tus relay
   * does not support `opt_force_name` reliably and these flows are
   * single-asset by design.
   */
  resolveUploadParams?: (file: UploadFile) => Record<string, string> | undefined;
  /**
   * Rewrite the post-upload preview URL (defaulting to `cdn_permalink ??
   * cdn` from the upload response) before it replaces a file's preview.
   * Hosts with CSPs that disallow a project's custom CDN CNAME can route
   * the URL through a Filerobot/Cloudimage proxy here.
   */
  transformPreviewUrl?: (url: string) => string;
}

export class UploadEngine {
  private store: Store<UploaderState>;
  private config: UploadEngineConfig;
  private activeUploads = new Map<string, XhrUploadHandle | TusUploadHandle>();
  private pausedUploads = new Map<string, TusUploadHandle>();
  private retryTimers = new Map<string, ReturnType<typeof setTimeout>>();
  private unsubscribe: (() => void) | null = null;

  constructor(store: Store<UploaderState>, config: UploadEngineConfig) {
    this.store = store;
    this.config = config;
  }

  /**
   * Start processing the queue. Subscribes to store changes to
   * automatically pick up newly queued files.
   */
  start(): void {
    if (this.unsubscribe) return;
    this.unsubscribe = this.store.subscribe(() => this.processQueue());
    this.processQueue();
  }

  /**
   * Upload all queued files. Transitions idle files → queued, then processes.
   */
  uploadAll(): void {
    const { files } = this.store.getState();
    let hasQueued = false;
    for (const file of files.values()) {
      if (file.status === 'idle') {
        updateFile(this.store, file.id, { status: 'queued' });
        hasQueued = true;
      } else if (file.status === 'queued') {
        hasQueued = true;
      }
    }
    if (hasQueued) {
      this.store.setState({ isUploading: true });
      this.processQueue();
    }
  }

  /**
   * Retry a single failed/errored file.
   */
  retryFile(fileId: string): void {
    const file = this.store.getState().files.get(fileId);
    if (!file || (file.status !== 'error' && file.status !== 'failed')) return;

    updateFile(this.store, fileId, {
      status: 'queued',
      error: null,
      progress: 0,
      bytesUploaded: 0,
      speed: 0,
    });
    this.processQueue();
  }

  /**
   * Retry all failed/errored files.
   */
  retryAll(): void {
    const { files } = this.store.getState();
    for (const file of files.values()) {
      if (file.status === 'error' || file.status === 'failed') {
        updateFile(this.store, file.id, {
          status: 'queued',
          error: null,
          progress: 0,
          bytesUploaded: 0,
          speed: 0,
        });
      }
    }
    this.processQueue();
  }

  /**
   * Pause a single tus upload.
   * Removes from active slots so another queued file can start (v5 pattern).
   */
  pauseFile(fileId: string): void {
    const handle = this.activeUploads.get(fileId);
    if (handle && 'pause' in handle) {
      handle.pause();
      // Move from active → paused so the slot is freed for another file
      this.activeUploads.delete(fileId);
      this.pausedUploads.set(fileId, handle);
      updateFile(this.store, fileId, { status: 'paused' });
      // Let a queued file fill the freed slot
      this.processQueue();
    }
  }

  /**
   * Resume a single paused tus upload.
   * Re-queues through processQueue so it respects concurrency limits (v5 pattern).
   */
  resumeFile(fileId: string): void {
    const handle = this.pausedUploads.get(fileId);
    if (!handle) return;

    const { concurrency } = this.store.getState().queueConfig;
    if (this.activeUploads.size < concurrency) {
      // Slot available — resume immediately
      this.pausedUploads.delete(fileId);
      handle.resume();
      this.activeUploads.set(fileId, handle);
      updateFile(this.store, fileId, { status: 'uploading' });
    } else {
      // No slot — mark as queued so processQueue picks it up when a slot opens.
      // Keep the handle in pausedUploads so we can resume the actual tus upload later.
      updateFile(this.store, fileId, { status: 'queued' });
    }
  }

  /**
   * Cancel a single file upload.
   */
  cancelFile(fileId: string): void {
    const file = this.store.getState().files.get(fileId);
    if (!file || !isActive(file.status)) return;

    // Safe even if both maps contain the file — tus abort() is idempotent
    this.abortPausedUpload(fileId);
    this.abortUpload(fileId);
    updateFile(this.store, fileId, { status: 'cancelled' });
  }

  /**
   * Cancel all active/queued uploads.
   */
  cancelAll(): void {
    const { files } = this.store.getState();
    for (const file of files.values()) {
      if (isActive(file.status)) {
        this.abortPausedUpload(file.id);
        this.abortUpload(file.id);
        updateFile(this.store, file.id, { status: 'cancelled' });
      }
    }
    this.store.setState({ isUploading: false });
  }

  /**
   * Update auth config (e.g. after SASS key renewal).
   */
  updateConfig(patch: Partial<UploadEngineConfig>): void {
    Object.assign(this.config, patch);
  }

  /**
   * Clean up: abort all uploads, clear timers, unsubscribe.
   */
  destroy(): void {
    for (const fileId of this.activeUploads.keys()) {
      this.abortUpload(fileId);
    }
    for (const fileId of [...this.pausedUploads.keys()]) {
      this.abortPausedUpload(fileId);
    }
    for (const timer of this.retryTimers.values()) {
      clearTimeout(timer);
    }
    this.retryTimers.clear();
    this.unsubscribe?.();
    this.unsubscribe = null;
  }

  // --- Private ---

  private processQueue(): void {
    const state = this.store.getState();
    if (state.isPaused) return;

    const { concurrency } = state.queueConfig;
    const activeCount = this.activeUploads.size;
    const slotsAvailable = concurrency - activeCount;
    if (slotsAvailable <= 0) return;

    // Collect queued files, retries first then by addedAt
    const queued = [...state.files.values()]
      .filter((f) => f.status === 'queued')
      .sort((a, b) => {
        // Retries (retryCount > 0) get priority
        if (a.retryCount !== b.retryCount) {
          return b.retryCount - a.retryCount;
        }
        return a.addedAt - b.addedAt;
      });

    const toStart = queued.slice(0, slotsAvailable);
    for (const file of toStart) {
      // Check if this file has a paused tus handle that can be resumed
      const pausedHandle = this.pausedUploads.get(file.id);
      if (pausedHandle) {
        this.pausedUploads.delete(file.id);
        pausedHandle.resume();
        this.activeUploads.set(file.id, pausedHandle);
        updateFile(this.store, file.id, { status: 'uploading' });
      } else {
        this.startUpload(file);
      }
    }
  }

  private startUpload(file: UploadFile): void {
    const extraParams = this.config.resolveUploadParams?.(file);
    const hasExtraParams = !!extraParams && Object.keys(extraParams).length > 0;
    // Tus is bypassed when extra params are in play (e.g. opt_force_name) —
    // Companion's tus relay does not propagate those reliably, and the
    // canonical use case (single named asset, small image) doesn't need
    // resumable uploads anyway.
    const isTus =
      !hasExtraParams &&
      !file.remoteInfo &&
      !file.remoteUrl &&
      shouldUseTus(file, this.config.tusConfig);
    updateFile(this.store, file.id, { status: 'uploading', error: null, isTus });

    let lastLoaded = 0;
    let lastTime = Date.now();
    let smoothedSpeed = 0;

    const baseOpts = {
      apiBase: this.config.apiBase,
      authHeaders: this.config.authHeaders,
      folder: this.store.getState().targetFolder,
      extraParams: hasExtraParams ? extraParams : undefined,
      onComplete: (response: import('../store/store.types').UploadResponse) =>
        this.handleComplete(file.id, response),
      onError: (error: Error) => this.handleError(file.id, error),
    };

    const onProgress = (bytesUploaded: number, bytesTotal: number) => {
      const now = Date.now();
      const elapsed = (now - lastTime) / 1000;
      if (elapsed > 0) {
        const instantSpeed = (bytesUploaded - lastLoaded) / elapsed;
        // Exponential moving average (α=0.3) to smooth out speed fluctuations
        smoothedSpeed = smoothedSpeed === 0 ? instantSpeed : 0.3 * instantSpeed + 0.7 * smoothedSpeed;
      }
      lastLoaded = bytesUploaded;
      lastTime = now;

      const progress = bytesTotal > 0 ? Math.min((bytesUploaded / bytesTotal) * 100, 100) : 0;
      updateFile(this.store, file.id, { progress, bytesUploaded, speed: smoothedSpeed });
      this.updateTotalProgress();
    };

    let handle: XhrUploadHandle | TusUploadHandle;

    if (file.remoteInfo) {
      // Companion proxy upload (cloud connector files)
      handle = companionUploadFile(file, { ...baseOpts, onProgress });
    } else if (file.remoteUrl) {
      // URL import via Companion's `url` provider (matches legacy Hub).
      // Requires `companionUrl` to be configured — guarded at submission
      // time (the URL source pill is hidden), but fail terminally here as a
      // safety net. Skip the retry loop: this is a config error, not a
      // transient failure, so retrying can never succeed.
      if (!this.config.companionUrl) {
        updateFile(this.store, file.id, {
          status: 'failed',
          error: 'URL import requires connectors.companionUrl to be configured',
        });
        this.checkAllComplete();
        this.processQueue();
        return;
      }
      handle = companionUploadUrl(file, {
        ...baseOpts,
        onProgress,
        companionUrl: this.config.companionUrl,
        onMeta: (meta) => {
          updateFile(this.store, file.id, {
            size: meta.size,
            // Trust Companion's resolved MIME over our extension guess
            type: meta.type || file.type,
          });
        },
      });
    } else if (isTus) {
      // Resumable tus upload for large files
      const tusHandle = tusUploadFile(file, {
        ...baseOpts,
        onProgress,
        tusConfig: this.config.tusConfig!,
        // Supply a getter so tus picks up renewed SASS keys mid-upload
        getAuthHeaders: () => this.config.authHeaders,
        // Store the tus upload URL on file state for cross-session resume
        onUploadUrlAvailable: (url) => {
          updateFile(this.store, file.id, { tusUploadUrl: url });
        },
        // Sync UI state when tus pauses/resumes internally (e.g. network offline/online)
        onPause: () => {
          this.activeUploads.delete(file.id);
          this.pausedUploads.set(file.id, tusHandle);
          updateFile(this.store, file.id, { status: 'paused' });
          this.processQueue();
        },
        onResume: () => {
          this.pausedUploads.delete(file.id);
          this.activeUploads.set(file.id, tusHandle);
          updateFile(this.store, file.id, { status: 'uploading' });
        },
      });
      handle = tusHandle;
    } else {
      // Standard XHR upload
      handle = xhrUploadFile(file, { ...baseOpts, onProgress });
    }

    this.activeUploads.set(file.id, handle);
  }

  private handleComplete(
    fileId: string,
    response: import('../store/store.types').UploadResponse,
  ): void {
    this.activeUploads.delete(fileId);

    // Swap previewUrl to a server URL once the file is on Filerobot — but ONLY
    // for previews that need it. URL imports / connector imports keep their
    // original third-party origin in previewUrl, which host CSPs would block, so
    // those must be replaced. Device / camera / screen / paste uploads already
    // have a local `blob:` preview that is CSP-safe and always renders — keeping
    // it avoids the CDN "missing origin image" placeholder that a just-uploaded
    // file's `cdn` URL serves until processing/caching catches up.
    //
    // Preference order for the (remote) swap: `cdn` (the project's delivery URL,
    // possibly a custom CNAME — fastest for the end user), then `cdn_permalink`
    // (CDN-cached `*.filerobot.com`), then `permalink` (canonical
    // `api.filerobot.com/.../v4/get/{uuid}` endpoint — always on
    // `*.filerobot.com`, the most stable fallback). Hosts can still rewrite the
    // chosen URL via `transformPreviewUrl` (e.g. to proxy through Cloudimage).
    // Restricted to image MIME types: a CDN URL for a video file is the video
    // itself, not a poster image, so the locally-generated poster blob stays.
    const file = this.store.getState().files.get(fileId);
    const hasLocalBlobPreview = file?.previewUrl?.startsWith('blob:') ?? false;
    const rawPreview =
      response.file?.url?.cdn ??
      response.file?.url?.cdn_permalink ??
      response.file?.url?.permalink ??
      null;
    const previewUrl = rawPreview
      ? (this.config.transformPreviewUrl?.(rawPreview) ?? rawPreview)
      : null;
    const update: Partial<UploadFile> = {
      status: 'complete',
      progress: 100,
      response,
      alreadyExisted: isSameAssetExists(response),
    };
    if (file && previewUrl && file.type.startsWith('image/') && !hasLocalBlobPreview) {
      update.previewUrl = previewUrl;
    }
    // Backfill the authoritative byte count from the server. Search providers
    // (Unsplash) ship `size: 0` in their list responses, so without this the
    // success card and final file list render `0 B`.
    if (response.file?.size != null) {
      update.size = response.file.size;
    }
    updateFile(this.store, fileId, update);

    this.updateTotalProgress();
    this.checkAllComplete();
    this.processQueue();
  }

  private handleError(fileId: string, error: Error): void {
    this.activeUploads.delete(fileId);

    const file = this.store.getState().files.get(fileId);
    if (!file) return;

    const { retryConfig } = this.store.getState().queueConfig;
    const nextRetry = file.retryCount + 1;

    if (nextRetry <= retryConfig.maxRetries) {
      // Schedule retry with exponential backoff
      const delay = Math.min(
        retryConfig.baseDelay * Math.pow(retryConfig.backoffFactor, file.retryCount),
        retryConfig.maxDelay,
      );

      updateFile(this.store, fileId, {
        status: 'retrying',
        error: error.message,
        retryCount: nextRetry,
      });

      const timer = setTimeout(() => {
        this.retryTimers.delete(fileId);
        updateFile(this.store, fileId, { status: 'queued' });
        this.processQueue();
      }, delay);

      this.retryTimers.set(fileId, timer);
    } else {
      updateFile(this.store, fileId, {
        status: 'failed',
        error: error.message,
      });
      this.checkAllComplete();
      this.processQueue();
    }
  }

  private abortPausedUpload(fileId: string): void {
    const handle = this.pausedUploads.get(fileId);
    if (handle) {
      handle.abort();
      this.pausedUploads.delete(fileId);
    }
  }

  private abortUpload(fileId: string): void {
    this.activeUploads.get(fileId)?.abort();
    this.activeUploads.delete(fileId);

    const timer = this.retryTimers.get(fileId);
    if (timer) {
      clearTimeout(timer);
      this.retryTimers.delete(fileId);
    }
  }

  private updateTotalProgress(): void {
    const { files } = this.store.getState();
    let totalBytes = 0;
    let totalUploaded = 0;
    let totalSpeed = 0;

    for (const file of files.values()) {
      // Include all files that are part of the upload pipeline (queued through complete)
      if (
        file.status === 'queued' ||
        file.status === 'uploading' ||
        file.status === 'paused' ||
        file.status === 'retrying' ||
        file.status === 'complete' ||
        file.status === 'failed'
      ) {
        totalBytes += file.size;
        totalUploaded += file.status === 'complete' ? file.size : file.bytesUploaded;
      }
      if (file.status === 'uploading') {
        totalSpeed += file.speed;
      }
    }

    this.store.setState({
      totalBytes,
      totalBytesUploaded: totalUploaded,
      totalSpeed,
      totalProgress: totalBytes > 0 ? Math.min((totalUploaded / totalBytes) * 100, 100) : 0,
    });
  }

  private checkAllComplete(): void {
    const { files } = this.store.getState();
    const hasActive = [...files.values()].some((f) =>
      f.status === 'queued' ||
      f.status === 'uploading' ||
      f.status === 'retrying' ||
      f.status === 'paused',
    );

    if (!hasActive && this.store.getState().isUploading) {
      this.store.setState({ isUploading: false });
    }
  }
}

export function isActive(status: FileStatus): boolean {
  return status === 'queued' || status === 'uploading' || status === 'retrying' || status === 'paused';
}
