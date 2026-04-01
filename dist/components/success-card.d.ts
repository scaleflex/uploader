import { LitElement } from 'lit';
export declare class SfxSuccessCard extends LitElement {
    static styles: import('lit').CSSResult[];
    fileCount: number;
    totalSize: number;
    thumbnails: string[];
    primaryLabel: string;
    failedFiles: {
        id: string;
        name: string;
        error: string;
    }[];
    private _uploadMore;
    private _primaryAction;
    private _retryFile;
    private _retryAll;
    private _close;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=success-card.d.ts.map