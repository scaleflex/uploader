import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
export type UploadButtonState = 'idle' | 'uploading' | 'done';
export declare class SfxActionsBar extends LitElement {
    static styles: import('lit').CSSResult[];
    t: TFunction;
    uploadState: UploadButtonState;
    fileCount: number;
    failedCount: number;
    showFillMetadata: boolean;
    /**
     * When true, the Fill Metadata button is rendered as primary (prominent),
     * and clicking Upload dispatches `require-metadata` instead of `upload-start`
     * so the host can open the metadata editor first.
     */
    requireMetadataFirst: boolean;
    /** Show the "Check similar" button (gated by config.similarityCheck.enabled). */
    showCheckSimilar: boolean;
    /** When true, the bar shows the similar-image selection toolbar instead. */
    selectMode: boolean;
    /** Number of images currently picked for the similarity check. */
    selectedCount: number;
    /** Max images selectable for a similarity check (0 = no cap shown). */
    maxSelection: number;
    /** Whether all selectable images are currently picked (drives "Select all"). */
    allSelected: boolean;
    private _clear;
    private _addMore;
    private _fillMetadata;
    private _upload;
    private _retryAll;
    private _cancelUpload;
    private _uploadMore;
    private _close;
    private _checkSimilarEnter;
    private _checkSimilarCancel;
    private _checkSimilarRun;
    private _similarSelectAll;
    render(): import('lit').TemplateResult<1>;
    /** Retry-all button — shared by the done bar and the idle bar (with failures). */
    private _renderRetryAllButton;
    /** Live upload: Cancel only. Progress + the Minimize/Close affordances now
        live in the dialog header, so the bar only carries the Cancel action. */
    private _renderUploadingBar;
    /** Upload finished: Upload more / Close (Retry all on failures). The outcome
        summary + segmented progress bar now live in the dialog header, so the
        bar only carries actions. */
    private _renderDoneBar;
    private _renderIdleBar;
    private _renderSelectToolbar;
    private _renderUploadButton;
}
//# sourceMappingURL=actions-bar.d.ts.map