import { LitElement } from 'lit';
import { UploadFile } from '../store/store.types';
import { SourceDef } from '../types/source.types';
export declare class SfxFileList extends LitElement {
    static styles: import('lit').CSSResult;
    files: UploadFile[];
    showDropTile: boolean;
    sources: SourceDef[];
    accept: string;
    /** 'upload' (default): full controls; 'review': read-only post-upload review
     *  with status badges, Open links, and a Local-edit pill on edited files. */
    mode: 'upload' | 'review';
    /** Forwarded to each file-item for the Locate button URL override. */
    getLocateUrl?: (file: UploadFile) => string | null | undefined;
    showLocateButton: boolean;
    showCopyCdnButton: boolean;
    private _moreOpen;
    private _dropTileMaxVisible;
    private _portalContainer;
    private _outsideClickHandler;
    private _onDropTileClick;
    private _onFileInput;
    private _onSourceClick;
    private _onScrollOrResize;
    private _onKeyDown;
    private _addGlobalListeners;
    private _removeGlobalListeners;
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
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=file-list.d.ts.map