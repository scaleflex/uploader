import type { Store } from '../store/store';
import type { UploaderState, UploadFile, FileStatus } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import { updateFile } from '../store/helpers';
import { xhrUploadFile, xhrUploadUrl, type XhrUploadHandle } from './xhr-upload';
import { companionUploadFile } from './companion-upload';

export interface UploadEngineConfig {
  apiBase: string;
  authHeaders: AuthHeaders;
}

export class UploadEngine {
  private store: Store<UploaderState>;
  private config: UploadEngineConfig;
  private activeUploads = new Map<string, XhrUploadHandle>();
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
   * Cancel a single file upload.
   */
  cancelFile(fileId: string): void {
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
      this.startUpload(file);
    }
  }

  private startUpload(file: UploadFile): void {
    updateFile(this.store, file.id, { status: 'uploading', error: null });

    let lastLoaded = 0;
    let lastTime = Date.now();

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
      const speed = elapsed > 0 ? (bytesUploaded - lastLoaded) / elapsed : 0;
      lastLoaded = bytesUploaded;
      lastTime = now;

      const progress = bytesTotal > 0 ? (bytesUploaded / bytesTotal) * 100 : 0;
      updateFile(this.store, file.id, { progress, bytesUploaded, speed });
      this.updateTotalProgress();
    };

    let handle: XhrUploadHandle;

    if (file.remoteInfo) {
      // Companion proxy upload (cloud connector files)
      handle = companionUploadFile(file, { ...baseOpts, onProgress });
    } else if (file.remoteUrl) {
      // Direct URL upload
      handle = xhrUploadUrl(file, baseOpts);
    } else {
      // Local file upload
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

    // Duplicate file — server already has it, treat as success
    if (error.message.toLowerCase().includes('same file')) {
      updateFile(this.store, fileId, { status: 'complete', progress: 100 });
      this.checkAllComplete();
      this.processQueue();
      return;
    }

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
      if (file.status === 'uploading' || file.status === 'complete') {
        totalBytes += file.size;
        totalUploaded += file.bytesUploaded;
      }
      if (file.status === 'uploading') {
        totalSpeed += file.speed;
      }
    }

    this.store.setState({
      totalBytes,
      totalBytesUploaded: totalUploaded,
      totalSpeed,
      totalProgress: totalBytes > 0 ? (totalUploaded / totalBytes) * 100 : 0,
    });
  }

  private checkAllComplete(): void {
    const { files } = this.store.getState();
    const hasActive = [...files.values()].some((f) =>
      f.status === 'queued' ||
      f.status === 'uploading' ||
      f.status === 'retrying' ||
      f.status === 'preparing',
    );

    if (!hasActive && this.store.getState().isUploading) {
      this.store.setState({ isUploading: false });
    }
  }
}

function isActive(status: FileStatus): boolean {
  return status === 'queued' || status === 'uploading' || status === 'retrying' || status === 'preparing';
}
