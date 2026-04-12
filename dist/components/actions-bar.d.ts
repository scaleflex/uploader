import { LitElement } from 'lit';
export type UploadButtonState = "idle" | "uploading" | "done";
export declare class SfxActionsBar extends LitElement {
    static styles: import('lit').CSSResult[];
    uploadState: UploadButtonState;
    fileCount: number;
    totalSize: number;
    failedCount: number;
    showFillMetadata: boolean;
    uploadDisabled: boolean;
    uploadDisabledReason: string;
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