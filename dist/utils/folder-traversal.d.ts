/**
 * Helpers for extracting a folder tree out of a DataTransfer (drag-drop) or a
 * `<input type="file" webkitdirectory>` change event, preserving each file's
 * relative path within the dropped/selected folder.
 *
 * The relative path is attached to the File via a non-enumerable
 * `_sfxRelativePath` property so existing code paths that operate on plain
 * `File[]` arrays keep working — only consumers that opt in read the path.
 *
 * Failure mode: traversal never rejects. Per-entry I/O errors (permission
 * denied, removed media, browser FS-API quirks) are caught and logged so
 * partial results can still flow through. The callers handle the empty-result
 * case via the `hadDirectories` hint.
 */
/** Symbol-ish key used to stash the relative path on a File without affecting JSON serialization. */
export declare const SFX_RELATIVE_PATH_KEY = "_sfxRelativePath";
/**
 * Attach a relative path (e.g. `"myFolder/sub/image.png"`) to a File object.
 * The path includes the filename so callers can derive both `relativeFolder`
 * (dirname) and `name` (basename) consistently. Falsy paths are ignored.
 *
 * The property is non-enumerable on both the happy path (defineProperty) and
 * the fallback (some test mocks reject defineProperty on File). This keeps
 * `Object.keys(file)` clean so JSON serializers don't pick it up.
 */
export declare function attachRelativePath(file: File, relativePath: string | undefined | null): void;
/** Read the relative path off a File, falling back to the browser-native `webkitRelativePath`. */
export declare function getRelativePath(file: File): string;
/**
 * Extract the dirname portion of a relative path. E.g. `"a/b/c.png"` → `"a/b"`,
 * `"file.png"` → `""`. Leading/trailing slashes are stripped.
 */
export declare function relativeFolderFromPath(relativePath: string): string;
/**
 * Join a base folder with a relative subfolder. Both sides are normalized to
 * collapse repeated/leading/trailing slashes. Returns the base when sub is
 * empty so the existing flat-upload behavior is preserved.
 */
export declare function joinFolder(base: string, sub: string): string;
export interface ExtractedFiles {
    /** Files in the drop — each carries `_sfxRelativePath` when extracted from a folder. */
    files: File[];
    /**
     * True when at least one dropped DataTransferItem was a directory entry.
     * Callers use this to differentiate "user dropped a folder" (so an empty
     * result is worth a "folder is empty" hint) from "user dropped no files at
     * all" (where silence is fine).
     */
    hadDirectories: boolean;
}
/**
 * Walk a DataTransferItemList recursively using the webkitGetAsEntry API and
 * return a flat array of Files, each carrying a `_sfxRelativePath` that
 * encodes its position in the dropped tree.
 *
 * Falls back to `dataTransfer.files` when the entries API is unavailable
 * (older browsers, programmatic drops without items).
 *
 * The returned promise never rejects: per-entry I/O failures are caught and
 * logged so callers always get a partial result.
 */
export declare function extractFilesFromDataTransfer(dataTransfer: DataTransfer): Promise<ExtractedFiles>;
//# sourceMappingURL=folder-traversal.d.ts.map