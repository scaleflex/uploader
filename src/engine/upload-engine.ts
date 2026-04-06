import type { Store } from '../store/store';
import type { UploaderState, UploadFile, FileStatus } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import { updateFile } from '../store/helpers';
import { xhrUploadFile, xhrUploadUrl, type XhrUploadHandle } from './xhr-upload';
import { companionUploadFile } from './companion-upload';
import { tusUploadFile, shouldUseTus, type TusConfig, type TusUploadHandle } from './tus-upload';

export interface UploadEngineConfig {
  apiBase: string;
  authHeaders: AuthHeaders;
  tusConfig?: TusConfig;
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
    const isTus = !file.remoteInfo && !file.remoteUrl && shouldUseTus(file, this.config.tusConfig);
    updateFile(this.store, file.id, { status: 'uploading', error: null, isTus });

    let lastLoaded = 0;
    let lastTime = Date.now();
    let smoothedSpeed = 0;

    const baseOpts = {
      apiBase: this.config.apiBase,
      authHeaders: this.config.authHeaders,
      folder: this.store.getState().targetFolder,
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
      // Direct URL upload
      handle = xhrUploadUrl(file, baseOpts);
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
    updateFile(this.store, fileId, {
      status: 'complete',
      progress: 100,
      response,
    });
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

function isActive(status: FileStatus): boolean {
  return status === 'queued' || status === 'uploading' || status === 'retrying' || status === 'paused';
}
