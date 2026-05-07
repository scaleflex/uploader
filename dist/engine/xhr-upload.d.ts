import { UploadFile, UploadResponse } from '../store/store.types';
import { AuthHeaders } from '../auth/auth.types';
export interface XhrUploadOptions {
    apiBase: string;
    authHeaders: AuthHeaders;
    folder: string;
    /** Extra query-string parameters to append to the upload URL (e.g. `opt_force_name`). */
    extraParams?: Record<string, string>;
    onProgress: (bytesUploaded: number, bytesTotal: number) => void;
    onComplete: (response: UploadResponse) => void;
    onError: (error: Error) => void;
}
export interface XhrUploadHandle {
    abort: () => void;
}
/**
 * Upload a local File to Scaleflex /v4/files via XHR.
 * Returns a handle with an abort method.
 */
export declare function xhrUploadFile(uploadFile: UploadFile, opts: XhrUploadOptions): XhrUploadHandle;
/**
 * Upload a remote URL to Scaleflex /v4/files (with `?folder=` query string,
 * same endpoint as direct file upload — server distinguishes by Content-Type
 * and `files_urls` body shape).
 */
export declare function xhrUploadUrl(uploadFile: UploadFile, opts: Omit<XhrUploadOptions, 'onProgress'> & {
    onProgress?: never;
}): XhrUploadHandle;
//# sourceMappingURL=xhr-upload.d.ts.map