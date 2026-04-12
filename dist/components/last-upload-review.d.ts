import { LitElement } from 'lit';
import { UploadFile } from '../store/store.types';
/**
 * Read-only review screen for the most recently uploaded batch (success +
 * failed). Renders <sfx-file-list mode="review">, plus a top bar with
 * filter chips, Back, and Clear. Tile click does not open anything —
 * each tile exposes its own hover actions (Locate / Copy CDN).
 */
export declare class SfxLastUploadReview extends LitElement {
    static styles: import('lit').CSSResult;
    files: UploadFile[];
    /** Forwarded to file-list → file-item for the Locate button URL override. */
    getLocateUrl?: (file: UploadFile) => string | null | undefined;
    private _filter;
    private get _filtered();
    private get _successCount();
    private get _failedCount();
    private _setFilter;
    private _onBack;
    private _onClear;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=last-upload-review.d.ts.map