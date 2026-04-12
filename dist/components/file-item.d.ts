import { LitElement, nothing } from 'lit';
import { UploadFile } from '../store/store.types';
export declare class SfxFileItem extends LitElement {
    static styles: import('lit').CSSResult;
    file: UploadFile;
    /** 'upload' (default): full controls; 'review': read-only post-upload
     *  view with status badges and hover actions (Locate / Copy CDN). */
    mode: 'upload' | 'review';
    /** Optional host-supplied builder for the Locate button URL. When set,
     *  takes precedence over the default `response.file.url.public`. Lets
     *  host apps point Locate at their own dashboard / file manager. */
    getLocateUrl?: (file: UploadFile) => string | null | undefined;
    /** Whether to show the "Locate" hover action on completed review tiles. */
    showLocateButton: boolean;
    /** Whether to show the "Copy CDN" hover action on completed review tiles. */
    showCopyCdnButton: boolean;
    private _dims;
    /** Brief flash on the Copy CDN button after a successful copy. */
    private _copied;
    private _copiedTimer;
    updated(changed: Map<string, unknown>): void;
    disconnectedCallback(): void;
    private _emit;
    private _remove;
    private _retry;
    private _pause;
    private _resume;
    private _rename;
    private _preview;
    private _locate;
    private _copyCdn;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
    private _formatDuration;
}
//# sourceMappingURL=file-item.d.ts.map