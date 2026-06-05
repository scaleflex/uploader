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
export interface CompanionUrlUploadOptions extends CompanionUploadOptions {
    /** Companion connector base URL (from `connectors.companionUrl`). */
    companionUrl: string;
    /** Called once `/url/meta` resolves so the store can update size/type before upload. */
    onMeta?: (meta: {
        name: string;
        type: string;
        size: number;
    }) => void;
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
/**
 * Upload a remote URL via the Companion proxy. Matches the legacy Hub flow:
 * 1. POST to `{companionUrl}/url/meta` to resolve the file's size/name/type
 * 2. POST to `{companionUrl}/url/get` with the Scaleflex endpoint — Companion
 *    streams the URL into our `/v4/files` endpoint
 * 3. Open the same WebSocket progress channel as cloud-provider uploads
 */
export declare function companionUploadUrl(uploadFile: UploadFile, opts: CompanionUrlUploadOptions): XhrUploadHandle;
//# sourceMappingURL=companion-upload.d.ts.map