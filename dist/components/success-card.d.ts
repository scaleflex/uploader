import { LitElement } from 'lit';
import { TFunction } from '../store/store.types';
export declare class SfxSuccessCard extends LitElement {
    static styles: import('lit').CSSResult[];
    t: TFunction;
    fileCount: number;
    totalSize: number;
    thumbnails: string[];
    primaryLabel: string;
    failedFiles: {
        id: string;
        name: string;
        error: string;
    }[];
    /** How many of the successful files already existed (same content) on the server. */
    alreadyExistedCount: number;
    /** Show the minimize-to-pill button next to the close button. */
    showMinimize: boolean;
    /** Show a "Locate" shortcut. Set by the host only when there is exactly
     *  one completed, locatable file (single UUID) — locating a whole batch
     *  isn't meaningful, so multi-file batches locate per-row in the review
     *  screen instead. */
    canLocate: boolean;
    private _maxThumbs;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** 7 thumbs on desktop, 4 on mobile — larger thumbnails overflow the
        narrow viewport otherwise. Overflow count ("+N") updates to match. */
    private _updateMaxThumbs;
    private _uploadMore;
    private _reviewFiles;
    private _locate;
    /** The Locate action button. Rendered as the primary CTA in the
     *  "already in your library" info state (where locating the asset is the
     *  user's likely next step), otherwise as a ghost button alongside the
     *  other secondary actions. */
    private _locateButton;
    private _primaryAction;
    private _retryFile;
    private _retryAll;
    private _close;
    private _minimize;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=success-card.d.ts.map