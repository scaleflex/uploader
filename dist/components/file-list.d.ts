import { LitElement } from 'lit';
import { UploadFile, TFunction } from '../store/store.types';
import { SourceDef } from '../types/source.types';
export declare class SfxFileList extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    files: UploadFile[];
    showDropTile: boolean;
    sources: SourceDef[];
    accept: string;
    /** Whether the drop-tile file picker allows multiple selection. */
    multi: boolean;
    /** When true, the drop-tile renders both a file picker and a `webkitdirectory` folder picker. */
    directory: boolean;
    /** 'upload' (default): full controls; 'review': read-only post-upload review
     *  with status badges, Open links, and a Local-edit pill on edited files. */
    mode: 'upload' | 'review';
    showLocateButton: boolean;
    showCopyCdnButton: boolean;
    /** Show the per-tile "Check similar" button (images only, when enabled). */
    showCheckSimilar: boolean;
    /** When true, tiles show selection checkboxes for the similarity check. */
    selectMode: boolean;
    /** Ids of images currently picked in selection mode. */
    selectedIds: Set<string>;
    /** Whether every selectable image is currently picked (for "Select all"). */
    allSelected: boolean;
    /** Selection has hit the cap — unselected tiles can't be picked. */
    selectionFull: boolean;
    /** Max images selectable for a similarity check (0 = no cap shown). */
    maxSelection: number;
    /** Preview side-panel is open — tiles suppress their hover similar popover. */
    previewOpen: boolean;
    /** Ids of all images in the active similarity-search run (empty = no search). */
    searchRunIds: string[];
    /** Ids currently being searched (spinner). */
    searchActiveIds: Set<string>;
    /** Results per checked image id (presence = checked). Value length = badge count. */
    searchResults: Map<string, unknown[]>;
    private _moreOpen;
    private _dropTileMaxVisible;
    private _portalContainer;
    private _outsideClickHandler;
    private _onDropTileClick;
    private _onDropTileFolderClick;
    private _onFileInput;
    private _onSourceClick;
    private _onScrollOrResize;
    private _onKeyDown;
    private _addGlobalListeners;
    private _removeGlobalListeners;
    updated(changed: Map<string, unknown>): void;
    private _toggleMore;
    private _openPortal;
    private _positionPortal;
    private _closePortal;
    private _injectTileDropdownStyles;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Drop-tile source slots based on viewport width (not host width).
        Host width can be small on desktop in preview mode, but the drop-tile
        should still expose 3 sources because the modal is wide. */
    private _updateDropTileMaxVisible;
    private _onMoreSourceClick;
    private _renderDropTile;
    private _onSelectAll;
    private _onSearchCancel;
    /** Per-tile similarity-search status (done is shown via the result badge,
     *  not a status here). */
    private _statusFor;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=file-list.d.ts.map