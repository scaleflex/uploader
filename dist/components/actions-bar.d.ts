import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
export type UploadButtonState = "idle" | "uploading" | "done";
export declare class SfxActionsBar extends LitElement {
    static styles: import('lit').CSSResult[];
    t: TFunction;
    uploadState: UploadButtonState;
    fileCount: number;
    totalSize: number;
    failedCount: number;
    showFillMetadata: boolean;
    /**
     * When true, the Fill Metadata button is rendered as primary (prominent),
     * and clicking Upload dispatches `require-metadata` instead of `upload-start`
     * so the host can open the metadata editor first.
     */
    requireMetadataFirst: boolean;
    completedCount: number;
    uploadProgress: number;
    private _clear;
    private _addMore;
    private _fillMetadata;
    private _upload;
    private _retryAll;
    render(): import('lit-html').TemplateResult<1>;
    private _renderUploadButton;
}
//# sourceMappingURL=actions-bar.d.ts.map