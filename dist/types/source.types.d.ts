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
    /** Inner HTML content for brand icons (SVG or text). Rendered inside a `.brand-ico` span. When set, used instead of wrapping `icon` in an SVG tag. */
    brandHtml?: string;
    /** CSSOM styles applied to the `.brand-ico` wrapper span via cspStyle (CSP-safe). Built-in providers always set this. */
    brandStyle?: Record<string, string>;
    onActivate?: (uploader: UploaderHandle) => void;
}
//# sourceMappingURL=source.types.d.ts.map