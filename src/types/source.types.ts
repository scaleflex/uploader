/** Minimal public interface exposed to custom source onActivate callbacks. */
export interface UploaderHandle extends HTMLElement {
  addFiles(files: File[]): void;
}

export interface SourceDef {
  id: string;
  label: string;
  icon: string;        // inner SVG content (without outer <svg> tag)
  fillIcon?: boolean;  // true for brand icons that use fill instead of stroke
  iconColor?: string;  // CSS color for the icon (e.g. '#2563eb')
  /** Complete HTML for brand icons that need custom rendering (multi-color SVGs, colored containers). When set, used instead of wrapping `icon` in an SVG tag. */
  brandHtml?: string;
  onActivate?: (uploader: UploaderHandle) => void;  // custom click handler for external integrations
}
