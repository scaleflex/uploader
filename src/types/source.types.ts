/** Minimal public interface exposed to custom source onActivate callbacks. */
export interface UploaderHandle extends HTMLElement {
  addFiles(files: File[]): void;
}

export interface SourceDef {
  id: string;
  label: string;
  /** i18n key for the label. When provided, used with t(labelKey, label) for translation. */
  labelKey?: string;
  icon: string;        // inner SVG content (without outer <svg> tag)
  fillIcon?: boolean;  // true for brand icons that use fill instead of stroke
  iconColor?: string;  // CSS color for the icon (e.g. '#2563eb')
  /** Inner HTML content for brand icons (SVG or text). Rendered inside a `.brand-ico` span. When set, used instead of wrapping `icon` in an SVG tag. */
  brandHtml?: string;
  /** CSSOM styles applied to the `.brand-ico` wrapper span via cspStyle (CSP-safe). Built-in providers always set this. */
  brandStyle?: Record<string, string>;
  onActivate?: (uploader: UploaderHandle) => void;  // custom click handler for external integrations
}
