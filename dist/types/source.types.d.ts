/** Minimal public interface exposed to custom source onActivate callbacks. */
export interface UploaderHandle extends HTMLElement {
    addFiles(files: File[]): void;
}
export interface SourceDef {
    id: string;
    label: string;
    icon: string;
    fillIcon?: boolean;
    iconColor?: string;
    /** Complete HTML for brand icons that need custom rendering (multi-color SVGs, colored containers). When set, used instead of wrapping `icon` in an SVG tag. */
    brandHtml?: string;
    onActivate?: (uploader: UploaderHandle) => void;
}
//# sourceMappingURL=source.types.d.ts.map