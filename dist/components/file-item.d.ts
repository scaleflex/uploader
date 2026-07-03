import { LitElement, nothing } from 'lit';
import { UploadFile, TFunction, UploaderState } from '../store/store.types';
import { Store } from '../store/store';
import { SimilarAsset } from '../sfx-uploader';
export declare class SfxFileItem extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    /**
     * The store this tile reads its file from. When set together with `fileId`,
     * the tile becomes the source of truth for its own file: it subscribes to the
     * store and re-renders ONLY when its own file changes, so high-frequency
     * progress updates don't have to re-render the parent list. When unset (e.g.
     * in unit tests), the tile falls back to the pushed `file` property.
     */
    store?: Store<UploaderState>;
    /** Id of this tile's file in the store (used with `store`). */
    fileId: string;
    /** Fallback file when no `store`/`fileId` is wired (tests / standalone use). */
    file?: UploadFile;
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
    /** Rich hover tooltip for the status badges (full text + fixed position).
     *  Empty string = hidden. Replaces the native `title` so we control styling. */
    private _tip;
    private _tipLeft;
    private _tipTop;
    /** True when the tooltip is flipped below its badge (no room above). */
    private _tipBelow;
    /** Unsubscribe from the store's per-file subscription (store-driven mode). */
    private _unsubscribe?;
    /** Last file reference seen via the store, to skip no-op re-renders. */
    private _lastFile?;
    /** The previewUrl the dimension probe last ran for (dedupes the decode). */
    private _dimsForUrl;
    /** Whether this tile has been on-screen yet (gates the dimension probe). */
    private _tileRendered;
    /** Observer that triggers the deferred probe when the tile nears the viewport. */
    private _io?;
    /**
     * This tile's file. In store-driven mode (the live uploader) it's read from
     * the store by id so the tile always reflects the latest state without the
     * parent having to push it down; otherwise it's the `file` property.
     */
    private get _file();
    connectedCallback(): void;
    firstUpdated(): void;
    updated(): void;
    /** Whether a status badge (error/rejected or "already uploaded") — the only
     *  tooltip anchors — is currently rendered for this file. The error badge is
     *  suppressed in review mode (a failed-badge takes over there); the "already
     *  uploaded" badge shows in every mode. */
    private _hasBadge;
    /**
     * Read the image's natural dimensions for the meta line, at most once per
     * previewUrl. Only a fresh local objectURL is decoded - for restored/uploaded
     * files (CDN previewUrl) the natural dims could reflect a resized variant, so
     * we prefer the server-reported dims from response.file.info instead.
     */
    private _maybeProbeDims;
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
    /** Show the badge tooltip centered above the hovered badge (flipped below
     *  when there's no room above). Positioned in viewport coords (the bubble is
     *  position:fixed) and clamped horizontally so it can't run off-screen. */
    private _showTip;
    private _hideTip;
    /** The host must outrank sibling tiles whenever either of its fixed-position
     *  overlays (the badge tooltip or the similar-assets popover) is visible, so
     *  recompute from both — neither one's hide should clobber the other. */
    private _syncHostZIndex;
    private _locate;
    private _copyCdn;
    render(): import('lit').TemplateResult<1> | typeof nothing;
    /** Styled hover tooltip for the status badges — a fixed-position bubble
     *  rendered as a sibling of the tile so the tile's overflow/containment
     *  doesn't clip it. */
    private _renderTip;
    /** Hover preview popover (variant C: best match large + the rest stacked). */
    private _renderSimPopover;
    private _formatDuration;
}
//# sourceMappingURL=file-item.d.ts.map