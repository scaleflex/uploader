import { Store } from '../store/store';
import { UploaderState } from '../store/store.types';
import { AuthHeaders } from '../auth/auth.types';
export interface UploadEngineConfig {
    apiBase: string;
    authHeaders: AuthHeaders;
}
export declare class UploadEngine {
    private store;
    private config;
    private activeUploads;
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
    private abortUpload;
    private updateTotalProgress;
    private checkAllComplete;
}
//# sourceMappingURL=upload-engine.d.ts.map