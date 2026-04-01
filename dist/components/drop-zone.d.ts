import { LitElement } from 'lit';
import { SourceDef } from './source-pills';
export declare class SfxDropZone extends LitElement {
    static styles: import('lit').CSSResult;
    compact: boolean;
    externalDragOver: boolean;
    accept: string;
    sources: SourceDef[];
    sourcesLayout: 'pills' | 'cards';
    private _dragOver;
    private _moreOpen;
    private _visiblePills;
    private _rippleEl;
    fileInput: HTMLInputElement;
    private _dragCounter;
    /** Programmatically open file browser. */
    browse(): void;
    private _onDragEnter;
    private _onDragOver;
    private _onDragLeave;
    private _onDrop;
    private _onClick;
    private _onKeyDown;
    private _onFileChange;
    private _onPaste;
    private _onSourceIconClick;
    private _emitFiles;
    private _portalContainer;
    private _toggleMore;
    private _updateDropdownPortal;
    private _injectDropdownStyles;
    /** Position the fixed dropdown, choosing above or below based on available space. */
    private _positionDropdown;
    private _onMoreItemClick;
    private _onDocClick;
    private _onDocKeyDown;
    private _resizeTimer;
    private _onScrollOrResize;
    private _updateVisiblePills;
    connectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    disconnectedCallback(): void;
    private _renderPill;
    private _renderCard;
    private _renderMoreCard;
    private _renderMoreDropdown;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=drop-zone.d.ts.map