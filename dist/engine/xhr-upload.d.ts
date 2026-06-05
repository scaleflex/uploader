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
//# sourceMappingURL=xhr-upload.d.ts.map