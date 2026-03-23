import { RemoteFileInfo } from '../connectors/connector.types';
export type FileStatus = 'idle' | 'queued' | 'uploading' | 'complete' | 'error' | 'retrying' | 'failed' | 'rejected' | 'cancelled';
export interface UploadFile {
    id: string;
    status: FileStatus;
    file: File | null;
    remoteUrl: string | null;
    name: string;
    size: number;
    type: string;
    previewUrl: string | null;
    progress: number;
    speed: number;
    bytesUploaded: number;
    error: string | null;
    retryCount: number;
    response: UploadResponse | null;
    addedAt: number;
    meta: Record<string, unknown>;
    tags: string[];
    remoteInfo: RemoteFileInfo | null;
}
export interface UploadResponse {
    status: 'success' | 'error';
    file: {
        uuid: string;
        name: string;
        extension: string;
        type: string;
        size: number;
        url: {
            public: string;
            cdn: string;
        };
        meta: Record<string, unknown>;
        tags: string[];
        info: {
            img_w?: number;
            img_h?: number;
        };
        created_at: string;
        modified_at: string;
    };
    msg?: string;
}
export interface RetryConfig {
    maxRetries: number;
    baseDelay: number;
    maxDelay: number;
    backoffFactor: number;
}
export interface QueueConfig {
    concurrency: number;
    autoProceed: boolean;
    retryConfig: RetryConfig;
}
export interface UploadRestrictions {
    maxFileSize: number | null;
    maxTotalFilesSize: number | null;
    maxNumberOfFiles: number | null;
    minNumberOfFiles: number | null;
    allowedFileTypes: string[] | null;
    blockedFileTypes: string[] | null;
}
export interface UploaderState {
    files: Map<string, UploadFile>;
    queueConfig: QueueConfig;
    isPaused: boolean;
    restrictions: UploadRestrictions;
    targetFolder: string;
    totalProgress: number;
    totalSpeed: number;
    totalBytesUploaded: number;
    totalBytes: number;
    isUploading: boolean;
}
//# sourceMappingURL=store.types.d.ts.map