import { UploadFile, UploadResponse } from '../store/store.types';
import { AuthHeaders } from '@scaleflex/dam-core';
export interface TusConfig {
    /** Files larger than this (bytes) use tus. Default: 10 MB. Set to 0 to always use tus. */
    sizeThreshold?: number;
    /** Chunk size in bytes. Default: 5 MB. */
    chunkSize?: number;
    /**
     * Override the tus upload endpoint (the `POST .../files` URL).
     * Defaults are resolved in this priority:
     *   1. This explicit `endpoint`
     *   2. `{connectors.companionUrl}/files` (Hub-style region-optimal connector)
     *   3. `https://eu-on-24001.connector.filerobot.com/files` (last-resort fallback)
     */
    endpoint?: string;
    /**
     * Override the post-upload JSON metadata base URL — the host that serves
     * `/json/{fileId}` after a tus upload completes. Same fallback chain as
     * `endpoint`, with `/json` instead of `/files`.
     */
    jsonBase?: string;
    /** Persist upload fingerprints for cross-session resume. Default: true. */
    resumable?: boolean;
    /** Number of parallel chunk uploads. Default: 1. */
    parallelChunks?: number;
    /** tus retry delays in ms. Default: [0, 1000, 3000, 5000]. */
    retryDelays?: number[];
}
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
export declare function shouldUseTus(file: UploadFile, tusConfig: TusConfig | undefined): boolean;
/**
 * Upload a local File via the tus resumable upload protocol.
 * Returns a handle with abort/pause/resume.
 */
export declare function tusUploadFile(uploadFile: UploadFile, opts: TusUploadOptions): TusUploadHandle;
//# sourceMappingURL=tus-upload.d.ts.map