import { RemoteFileInfo } from '../connectors/connector.types';
import { Product } from '../product/product.types';
export type FileStatus = 'idle' | 'queued' | 'uploading' | 'paused' | 'complete' | 'error' | 'retrying' | 'failed' | 'rejected' | 'cancelled';
export interface UploadFile {
    id: string;
    status: FileStatus;
    file: File | null;
    remoteUrl: string | null;
    name: string;
    size: number;
    type: string;
    previewUrl: string | null;
    duration: number | null;
    progress: number;
    speed: number;
    bytesUploaded: number;
    error: string | null;
    retryCount: number;
    response: UploadResponse | null;
    alreadyExisted?: boolean;
    addedAt: number;
    meta: Record<string, unknown>;
    tags: string[];
    product: Product;
    remoteInfo: RemoteFileInfo | null;
    isTus: boolean;
    tusUploadUrl: string | null;
}
export interface UploadResponse {
    status: 'success' | 'error';
    file: {
        uuid: string;
        name: string;
        extension: string;
        type: string;
        /**
         * Filerobot `/v4/files` returns `{ bytes, pretty }` on recent API versions
         * and a plain number on older endpoints / synthesized same-asset responses.
         */
        size: number | {
            bytes: number;
            pretty?: string;
        };
        url: {
            public: string;
            cdn: string;
            cdn_permalink?: string;
            permalink?: string;
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
    hint?: string;
    /** Machine-readable status code (e.g. `SAME_ASSET_EXISTS_SKIP_UPLOAD`). */
    code?: string;
    /** UUID of the pre-existing asset when the same content already exists. */
    existing_file_uuid?: string;
    /** Path of a similar (not necessarily identical) existing file, if any. */
    similar_file_path?: string;
    /** Backend context returned alongside status codes. */
    info?: {
        version?: number;
        uniq_id?: string;
        project_uuid?: string;
        company_uuid?: string;
    };
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
export type TFunction = (key: string, defaultValueOrOptions?: string | Record<string, unknown>, options?: Record<string, unknown>) => string;
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
    t: TFunction;
}
//# sourceMappingURL=store.types.d.ts.map