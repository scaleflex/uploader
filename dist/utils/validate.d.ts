import { UploadRestrictions, UploadFile } from '../store/store.types';
/** Minimal file info needed for validation (works for both File objects and remote imports). */
export interface FileInfo {
    name: string;
    size: number;
    type: string;
}
/**
 * Detect whether a validation error is the "max number of files" cap. Used by
 * `_processIncomingFiles` to short-circuit a folder drop that's over the limit
 * into a single aggregate message instead of N per-file rejection cards.
 *
 * Kept as a string-prefix check so the helper stays in lockstep with
 * `validateFileInfo` without leaking a structured error type into every
 * caller.
 */
export declare function isMaxFilesError(error: string | null | undefined): boolean;
/**
 * Validate file info against restrictions. Returns error message or null.
 * Works for local File objects, URL imports, and connector imports.
 */
export declare function validateFileInfo(file: FileInfo, restrictions: UploadRestrictions, existingFiles: Map<string, UploadFile>): string | null;
/** Validate a File against restrictions. Returns error message or null. */
export declare function validateFile(file: File, restrictions: UploadRestrictions, existingFiles: Map<string, UploadFile>): string | null;
/** Build accept string for file input from restrictions. */
export declare function buildAcceptString(restrictions: UploadRestrictions): string;
//# sourceMappingURL=validate.d.ts.map