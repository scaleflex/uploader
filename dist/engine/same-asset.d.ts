import { UploadFile, UploadResponse } from '../store/store.types';
/**
 * Backend status codes returned when an upload is skipped because a file with
 * the *same content* already exists. Neither is a real failure — the asset is
 * already on Filerobot — so the UI treats both as a successful upload (with a
 * neutral "already uploaded" note) rather than an error.
 *
 * - `SAME_ASSET_EXISTS_SKIP_UPLOAD`: identical content exists in the requested
 *   directory.
 * - `ERROR_SHA1_CONFLICT`: identical content (matching SHA1) exists somewhere
 *   in the project. `similar_file_path` points to its location.
 *
 * Both response bodies share the same shape:
 * ```json
 * { "status": "error", "code": "…",
 *   "existing_file_uuid": "e176a9d7-…", "similar_file_path": "", "info": { … } }
 * ```
 * Note there is NO `file` object — only `existing_file_uuid` references the
 * pre-existing asset, so `buildSameAssetResponse` synthesizes a `file` from it.
 */
export declare const SAME_ASSET_EXISTS_CODE = "SAME_ASSET_EXISTS_SKIP_UPLOAD";
export declare const SHA1_CONFLICT_CODE = "ERROR_SHA1_CONFLICT";
/** True when the backend reported the identical content already exists. */
export declare function isSameAssetExists(body: Pick<UploadResponse, 'code'> | null | undefined): boolean;
/**
 * Normalize a `SAME_ASSET_EXISTS_SKIP_UPLOAD` body into a success response.
 *
 * The error body has no `file` object, so we synthesize one from the original
 * upload — using `existing_file_uuid` as the asset uuid. No URL is returned by
 * the backend in this case, so `url` is left empty and the locally-generated
 * preview blob is kept by `handleComplete`. The original `code`,
 * `existing_file_uuid`, `similar_file_path` and `info` are preserved so the
 * engine can flag the file and host consumers can still read them off
 * `file.response`.
 */
export declare function buildSameAssetResponse(body: UploadResponse, uploadFile: UploadFile): UploadResponse;
//# sourceMappingURL=same-asset.d.ts.map