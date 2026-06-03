import type { UploadFile, UploadResponse } from '../store/store.types';

/**
 * Backend status code returned when an upload is skipped because a file with
 * the *same content* already exists in the requested directory. This is not a
 * real failure — the asset is already on Filerobot — so the UI treats it as a
 * successful upload (with a neutral "already uploaded" note) rather than an error.
 *
 * The response body looks like:
 * ```json
 * { "status": "error", "code": "SAME_ASSET_EXISTS_SKIP_UPLOAD",
 *   "existing_file_uuid": "e176a9d7-…", "similar_file_path": "", "info": { … } }
 * ```
 * Note there is NO `file` object — only `existing_file_uuid` references the
 * pre-existing asset, so `buildSameAssetResponse` synthesizes a `file` from it.
 */
export const SAME_ASSET_EXISTS_CODE = 'SAME_ASSET_EXISTS_SKIP_UPLOAD';

/** True when the backend reported the identical content already exists. */
export function isSameAssetExists(
  body: Pick<UploadResponse, 'code'> | null | undefined,
): boolean {
  return body?.code === SAME_ASSET_EXISTS_CODE;
}

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
export function buildSameAssetResponse(
  body: UploadResponse,
  uploadFile: UploadFile,
): UploadResponse {
  return {
    ...body,
    status: 'success',
    file: body.file ?? {
      uuid: body.existing_file_uuid ?? '',
      name: uploadFile.name,
      extension: uploadFile.name.split('.').pop() ?? '',
      type: uploadFile.type,
      size: uploadFile.size,
      url: { public: '', cdn: '' },
      meta: {},
      tags: [],
      info: {},
      created_at: '',
      modified_at: '',
    },
  };
}
