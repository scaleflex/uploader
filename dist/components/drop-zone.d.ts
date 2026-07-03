import { LitElement } from 'lit';
import { SourceDef } from './source-pills';
import { TFunction } from '../store/store.types';
export declare class SfxDropZone extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    compact: boolean;
    externalDragOver: boolean;
    accept: string;
    /** Whether the file picker allows multiple selection. Set to false for single-asset slots. */
    multi: boolean;
    /**
     * When true, exposes an additional "or upload a folder" affordance next to
     * the "browse" link and renders a second hidden input with
     * `webkitdirectory`, so users can pick a directory tree from the OS file
     * dialog. Drag-and-drop of folders is recursively walked regardless of this
     * flag — `directory` only controls the file-picker UI. Implicitly forced to
     * false when `multi` is false (single-asset slots can't accept a folder).
     */
    directory: boolean;
    sources: SourceDef[];
    sourcesLayout: 'pills' | 'cards';
    /** Set by sfx-uploader to scope the wide-host frame to inline mode only.
     *  Modal mode is excluded (no dashed card frame even on big modals). */
    mode: 'modal' | 'inline';
    /** Threshold (px) at which the host is considered "wide enough" for the
     *  inline-fullscreen bordered-card layout. Tuned to fire on the actual
     *  full-screen demo (1400+) while skipping embedded inline uploaders
     *  (Home demo ~912, Sources Layout ~824, inline example ~824). */
    private static readonly _WIDE_THRESHOLD_PX;
    private _resizeObserver;
    private _dragOver;
    private _moreOpen;
    private _visiblePills;
    private _rippleEl;
    fileInput: HTMLInputElement;
    folderInput?: HTMLInputElement;
    private _dragCounter;
    /**
     * Programmatically open the file browser. Defaults to the file picker;
     * pass `'folder'` (only honored when `directory` is enabled) to open the
     * directory picker instead.
     */
    browse(mode?: 'files' | 'folder'): void;
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
    render(): import('lit').TemplateResult<1>;
}
//# sourceMappingURL=drop-zone.d.ts.map