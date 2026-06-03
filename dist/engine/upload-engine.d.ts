import { Store } from '../store/store';
import { UploaderState, UploadFile } from '../store/store.types';
import { AuthHeaders } from '../auth/auth.types';
import { TusConfig } from './tus-upload';
export interface UploadEngineConfig {
    apiBase: string;
    authHeaders: AuthHeaders;
    tusConfig?: TusConfig;
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