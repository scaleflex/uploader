import { UploadRestrictions, UploadFile } from '../store/store.types';
/** Minimal file info needed for validation (works for both File objects and remote imports). */
export interface FileInfo {
    name: string;
    size: number;
    type: string;
}
export type FileValidationErrorCode = 'max-file-size' | 'max-total-size' | 'max-files' | 'type-not-allowed' | 'type-blocked';
/**
 * Structured validation result: `code` is the stable machine-readable
 * classification, `message` the localized user-facing text (resolved at
 * creation time). Callers store/display `message` and branch on `code` —
 * never on the message text, which varies by locale.
 */
export interface FileValidationError {
    code: FileValidationErrorCode;
    message: string;
}
/**
 * Detect whether a validation error is the "max number of files" cap. Used by
 * `_processIncomingFiles` to short-circuit a folder drop that's over the limit
 * into a single aggregate message instead of N per-file rejection cards.
 */
export declare function isMaxFilesError(error: FileValidationError | null | undefined): boolean;
/**
 * Validate file info against restrictions. Returns a structured error or null.
 * Works for local File objects, URL imports, and connector imports.
 */
export declare function validateFileInfo(file: FileInfo, restrictions: UploadRestrictions, existingFiles: Map<string, UploadFile>): FileValidationError | null;
/** Validate a File against restrictions. Returns a structured error or null. */
export declare function validateFile(file: File, restrictions: UploadRestrictions, existingFiles: Map<string, UploadFile>): FileValidationError | null;
/** Build accept string for file input from restrictions. */
export declare function buildAcceptString(restrictions: UploadRestrictions): string;
//# sourceMappingURL=validate.d.ts.map