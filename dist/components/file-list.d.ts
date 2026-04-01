import { LitElement } from 'lit';
import { UploadFile } from '../store/store.types';
import { SourceDef } from '../types/source.types';
export declare class SfxFileList extends LitElement {
    static styles: import('lit').CSSResult;
    files: UploadFile[];
    showDropTile: boolean;
    sources: SourceDef[];
    accept: string;
    private _moreOpen;
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
    disconnectedCallback(): void;
    private _onMoreSourceClick;
    private _renderDropTile;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=file-list.d.ts.map