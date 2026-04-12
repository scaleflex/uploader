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
    private _maxThumbs;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** 7 thumbs on desktop, 4 on mobile — larger thumbnails overflow the
        narrow viewport otherwise. Overflow count ("+N") updates to match. */
    private _updateMaxThumbs;
    private _uploadMore;
    private _reviewFiles;
    private _primaryAction;
    private _retryFile;
    private _retryAll;
    private _close;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=success-card.d.ts.map