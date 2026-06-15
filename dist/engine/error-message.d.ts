import { UploadResponse } from '../store/store.types';
/**
 * Extract the most useful, human-readable failure reason from a backend error
 * body.
 *
 * Filerobot error responses look like:
 * ```json
 * {
 *   "status": "error",
 *   "code": "ERR_REFUSED_UPLOAD",
 *   "hint": "Please contact support for more information.",
 *   "info": { "msg": "File … is not allowed due to postprocess rule – …" }
 * }
 * ```
 *
 * `info.msg` carries the specific, actionable reason (e.g. which postprocess
 * rule refused the file), whereas the top-level `hint` is usually a generic
 * "contact support" placeholder. We therefore prefer `info.msg`, then the
 * top-level `msg`, then `hint`, before falling back to a caller-supplied
 * default.
 */
export declare function extractUploadErrorMessage(body: (Pick<UploadResponse, 'msg' | 'hint' | 'info'> & {
    message?: string;
}) | null | undefined, fallback: string): string;
//# sourceMappingURL=error-message.d.ts.map