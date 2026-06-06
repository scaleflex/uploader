/** Generate a unique file ID. */
export declare function generateFileId(): string;
/** Format bytes into human-readable string. */
export declare function formatFileSize(bytes: number): string;
/** Format seconds into a human-readable ETA string. */
export declare function formatEta(seconds: number): string;
/** Detect file type category for icon/color styling. */
export declare function getFileCategory(file: {
    name: string;
    type: string;
}): string;
/** Get file extension for display. */
export declare function getFileExtension(name: string): string;
/** OS-generated metadata files (e.g. .DS_Store, Thumbs.db) that should be silently skipped on upload. */
export declare function isSystemFile(name: string): boolean;
/** Get the CDN-hosted file type icon URL for a given extension. */
export declare function getFileTypeIconUrl(extension: string): string;
/** Get the default/generic file type icon URL. */
export declare function getDefaultFileTypeIconUrl(): string;
/** Guess MIME type from a filename. */
export declare function guessMimeType(name: string): string;
/** Returns true for image MIME types that browsers cannot render natively as <img>. */
export declare function isBrowserUnrenderableImage(mimeType: string): boolean;
/** Generate a thumbnail from the first frame of a video file. Returns a blob URL or null. */
export declare function generateVideoThumbnail(file: File): Promise<string | null>;
//# sourceMappingURL=file-utils.d.ts.map