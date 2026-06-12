import { Store } from '../store/store';
import { UploaderState, UploadFile, FileStatus, UploadResponseUrls } from '../store/store.types';
import { AuthHeaders } from '../auth/auth.types';
import { TusConfig } from './tus-upload';
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
     * Rewrite the post-upload preview URL (defaulting to `cdn ??
     * cdn_permalink ?? permalink` from the upload response) before it
     * replaces a file's preview. Hosts with CSPs that disallow a project's
     * custom CDN CNAME can route the URL through a Filerobot/Cloudimage
     * proxy here. `urls` carries the complete `response.file.url` map so the
     * host can pick a different variant outright (e.g. `permalink`, which
     * carries the version hash, when the `cdn` path is cached stale).
     * Called only when the swap will actually apply — image MIME type and no
     * local `blob:` preview — never for results the engine would discard.
     */
    transformPreviewUrl?: (url: string, urls?: UploadResponseUrls) => string;
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
     * Recompute aggregate totals and re-check completion. Call after the host
     * mutates the file set outside the engine (e.g. removing a file mid-upload),
     * since neither cancel nor a store-level delete on its own triggers a
     * recalc — leaving totalProgress/isUploading stale against the new set.
     */
    recompute(): void;
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
export declare function isActive(status: FileStatus): boolean;
//# sourceMappingURL=upload-engine.d.ts.map