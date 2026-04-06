import { Store } from '../store/store';
import { UploaderState } from '../store/store.types';
import { AuthHeaders } from '../auth/auth.types';
import { TusConfig } from './tus-upload';
export interface UploadEngineConfig {
    apiBase: string;
    authHeaders: AuthHeaders;
    tusConfig?: TusConfig;
}
export declare class UploadEngine {
    private store;
    private config;
    private activeUploads;
    private pausedUploads;
    private retryTimers;
    private unsubscribe;
    constructor(store: Store<UploaderState>, config: UploadEngineConfig);
    /**
     * Start processing the queue. Subscribes to store changes to
     * automatically pick up newly queued files.
     */
    start(): void;
    /**
     * Upload all queued files. Transitions idle files → queued, then processes.
     */
    uploadAll(): void;
    /**
     * Retry a single failed/errored file.
     */
    retryFile(fileId: string): void;
    /**
     * Retry all failed/errored files.
     */
    retryAll(): void;
    /**
     * Pause a single tus upload.
     * Removes from active slots so another queued file can start (v5 pattern).
     */
    pauseFile(fileId: string): void;
    /**
     * Resume a single paused tus upload.
     * Re-queues through processQueue so it respects concurrency limits (v5 pattern).
     */
    resumeFile(fileId: string): void;
    /**
     * Cancel a single file upload.
     */
    cancelFile(fileId: string): void;
    /**
     * Cancel all active/queued uploads.
     */
    cancelAll(): void;
    /**
     * Update auth config (e.g. after SASS key renewal).
     */
    updateConfig(patch: Partial<UploadEngineConfig>): void;
    /**
     * Clean up: abort all uploads, clear timers, unsubscribe.
     */
    destroy(): void;
    private processQueue;
    private startUpload;
    private handleComplete;
    private handleError;
    private abortPausedUpload;
    private abortUpload;
    private updateTotalProgress;
    private checkAllComplete;
}
//# sourceMappingURL=upload-engine.d.ts.map