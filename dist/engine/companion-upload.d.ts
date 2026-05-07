import { UploadFile, UploadResponse } from '../store/store.types';
import { AuthHeaders } from '../auth/auth.types';
import { XhrUploadHandle } from './xhr-upload';
export interface CompanionUploadOptions {
    apiBase: string;
    authHeaders: AuthHeaders;
    folder: string;
    /** Extra query-string parameters appended to the Scaleflex endpoint URL Companion forwards to (e.g. `opt_force_name`). */
    extraParams?: Record<string, string>;
    onProgress: (bytesUploaded: number, bytesTotal: number) => void;
    onComplete: (response: UploadResponse) => void;
    onError: (error: Error) => void;
}
/**
 * Upload a file via the Companion proxy: Companion downloads from the
 * cloud provider and uploads to Scaleflex on our behalf.
 *
 * Flow:
 * 1. POST to Companion /{provider}/get/{requestPath} with Scaleflex endpoint info
 * 2. Companion returns immediately with { token } (async upload)
 * 3. Connect to WebSocket at wss://{companionHost}/api/{token}
 * 4. Receive 'progress', 'success', 'error' events via WebSocket
 */
export declare function companionUploadFile(uploadFile: UploadFile, opts: CompanionUploadOptions): XhrUploadHandle;
//# sourceMappingURL=companion-upload.d.ts.map