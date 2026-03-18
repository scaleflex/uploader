/** Minimal public interface exposed to custom source onActivate callbacks. */
export interface UploaderHandle extends HTMLElement {
  addFiles(files: File[]): void;
}

export interface SourceDef {
  id: string;
  label: string;
  icon: string;        // inner SVG content (without outer <svg> tag)
  fillIcon?: boolean;  // true for brand icons that use fill instead of stroke
  onActivate?: (uploader: UploaderHandle) => void;  // custom click handler for external integrations
}
