import { LitElement, nothing } from 'lit';
import { UploadFile, TFunction } from '../store/store.types';
import { SimilarAsset } from '../sfx-uploader';
export declare class SfxFileItem extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    file: UploadFile;
    /** 'upload' (default): full controls; 'review': read-only post-upload
     *  view with status badges and hover actions (Locate / Copy CDN). */
    mode: 'upload' | 'review';
    /** Whether the file name is editable (off under `forceName` / `allowFileRename: false`). */
    allowRename: boolean;
    /** Whether to show the "Locate" hover action on completed review tiles. */
    showLocateButton: boolean;
    /** Whether to show the "Copy CDN" hover action on completed review tiles. */
    showCopyCdnButton: boolean;
    /** Show the per-tile "Check similar" button (images only, when enabled). */
    showCheckSimilar: boolean;
    /** When true, the tile is in similar-image selection mode (shows a checkbox). */
    selectMode: boolean;
    /** Whether this tile is currently picked in selection mode. */
    isSelected: boolean;
    /** Any image in the list is currently picked — non-image tiles dim while
     *  a similarity selection is in progress to signal they can't be checked. */
    selectionActive: boolean;
    /** Selection has reached the max — unselected tiles can't be picked. */
    selectionFull: boolean;
    /** The preview side-panel is open — suppress the hover similar popover. */
    previewOpen: boolean;
    /** Similarity-search status for this tile: '' | 'searching' | 'queued'. */
    similarStatus: '' | 'searching' | 'queued';
    /** Number of similar assets found once checked (-1 = not checked yet → no badge). */
    similarCount: number;
    /** The similar assets found for this image (for the hover preview popover). */
    similarResults: SimilarAsset[];
    /** Review-pick mode: render as a plain selectable tile (used in the results
     *  review modal's left list) — no hover actions, delete, checkbox or popover;
     *  the result badge stays visible; clicking selects it. */
    reviewPick: boolean;
    private _dims;
    /** Hover-preview popover (View similar) state + fixed position. */
    private _simPopover;
    private _simPopLeft;
    private _simPopTop;
    private _simPopTimer;
    private _simHideTimer;
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
    /** Per-tile "Check similar" — check this single image against the library. */
    private _checkSimilarSingle;
    /** Toggle this image's selection while in similar-image selection mode. */
    private _toggleSimilar;
    /** Select this image in the results-review modal's left list. */
    private _reviewSelect;
    /** Open the similar-results review panel for this image. */
    private _openResults;
    /** Show the hover preview popover, positioned beside the tile (flips left
     *  when there isn't room on the right; clamped vertically to the viewport). */
    private _simPopoverShow;
    /** Cancel a pending hide (mouse entered the button or the popover). */
    private _simCancelHide;
    /** Schedule a hide with a small delay so the mouse can bridge the gap
     *  between the button and the popover without it closing. */
    private _simScheduleHide;
    private _simPopoverClose;
    private _locate;
    private _copyCdn;
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
    /** Hover preview popover (variant C: best match large + the rest stacked). */
    private _renderSimPopover;
    private _formatDuration;
}
//# sourceMappingURL=file-item.d.ts.map