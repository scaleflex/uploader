import { CSSProperties } from 'react';
import { SfxUploader as SfxUploaderElement, UploaderConfig, UploaderPhase } from './sfx-uploader';
import { UploadFile, UploadResponse } from './store/store.types';
export interface UploaderRef {
    element: SfxUploaderElement | null;
    open(): void;
    close(): void;
    upload(): void;
    addFiles(files: File[]): void;
    resumeUpload(files?: UploadFile[]): void;
    cancelUpload(): void;
    getFiles(): UploadFile[];
    getFile(fileId: string): UploadFile | undefined;
    updateFileMeta(fileId: string, meta?: Record<string, unknown>, tags?: string[]): void;
    updateFilesMeta(updates: Array<{
        fileId: string;
        meta?: Record<string, unknown>;
        tags?: string[];
    }>): void;
    getStatus(): UploaderPhase;
    dismissPanel(): void;
}
export interface UploaderProps {
    config: UploaderConfig;
    open?: boolean;
    onFileAdded?: (file: UploadFile) => void;
    onFileRemoved?: (file: UploadFile) => void;
    onFileRejected?: (file: UploadFile, reason: string) => void;
    onUploadStarted?: (files: UploadFile[]) => void;
    onUploadProgress?: (file: UploadFile, progress: number, speed: number) => void;
    onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
    onUploadError?: (file: UploadFile, error: Error) => void;
    onUploadRetry?: (file: UploadFile, attempt: number) => void;
    onAllComplete?: (successful: UploadFile[], failed: UploadFile[]) => void;
    onTotalProgress?: (percentage: number, speed: number, eta: number) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onCancel?: () => void;
    onBeforeUpload?: (files: UploadFile[]) => boolean | void;
    onFilePreview?: (file: UploadFile) => void;
    onFillMetadata?: (files: UploadFile[]) => void;
    onCompleteAction?: () => void;
    onFileLocate?: (file: UploadFile) => void;
    onFileCopyCdn?: (file: UploadFile, cdnUrl: string) => void;
    className?: string;
    style?: CSSProperties;
}
export declare const Uploader: import('react').ForwardRefExoticComponent<UploaderProps & import('react').RefAttributes<UploaderRef>>;
//# sourceMappingURL=react.d.ts.map