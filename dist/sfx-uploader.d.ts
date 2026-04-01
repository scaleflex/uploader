import { LitElement } from 'lit';
import { UploadFile, UploadRestrictions, UploadResponse } from './store/store.types';
import { AuthConfig } from './auth/auth.types';
import { ConnectorConfig } from './connectors/connector.types';
export interface UploaderCallbacks {
    onFileAdded?: (file: UploadFile) => void;
    onFileRemoved?: (file: UploadFile) => void;
    onFileRejected?: (file: UploadFile, reason: string) => void;
    onUploadStarted?: (files: UploadFile[]) => void;
    onUploadProgress?: (file: UploadFile, progress: number, speed: number) => void;
    onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
    onUploadError?: (file: UploadFile, error: Error) => void;
    onUploadRetry?: (file: UploadFile, attempt: number) => void;
    onAllComplete?: (successful: UploadFile[], failed: UploadFile[]) => void;
    onTotalProgress?: (percentage: number, speed: number, eta: number) => void;
    onBeforeUpload?: (files: UploadFile[]) => boolean | void;
    onOpen?: () => void;
    onClose?: () => void;
    onCancel?: () => void;
    onFilePreview?: (file: UploadFile) => void;
    onFillMetadata?: (files: UploadFile[]) => void;
    onCompleteAction?: () => void;
}
export interface UploaderConfig {
    auth: AuthConfig;
    targetFolder?: string;
    mode?: 'modal' | 'inline';
    /**
     * Controls the header navigation button.
     * - `'none'`  — no button (default for inline)
     * - `'close'` — X icon on the right (default for modal)
     * - `'back'`  — back arrow on the left (use with modal for step/wizard flows)
     */
    headerButton?: 'none' | 'close' | 'back';
    restrictions?: Partial<UploadRestrictions>;
    concurrency?: number;
    autoProceed?: boolean;
    callbacks?: UploaderCallbacks;
    connectors?: ConnectorConfig;
    /** Show "Fill Metadata" button in the actions bar. */
    showFillMetadata?: boolean;
    /** Layout for the import-from sources section: horizontal pills (default) or cards grid. */
    sourcesLayout?: 'pills' | 'cards';
    /** Whether closing the modal clears all files. Default: true. Set to false to preserve files across open/close. */
    clearOnClose?: boolean;
    /** Whether the "Done" action clears all files (inline mode resets, modal mode closes). Default: true. */
    clearOnComplete?: boolean;
    /**
     * Show the "Minimize & continue in background" button during uploads.
     * When clicked, the modal collapses to a floating progress pill in the corner
     * so the user can keep working while uploads finish.
     * Default: false (button hidden).
     */
    minimizeOnUpload?: boolean;
    /**
     * Automatically close the uploader when all uploads complete.
     * - `true`  — closes after a 1.5 s delay so the user briefly sees the success state.
     * - number — custom delay in milliseconds (e.g. `2000` for 2 s).
     * - `false` / omitted — disabled (default).
     *
     * Fires `onCompleteAction` + `onClose` callbacks and the corresponding public
     * events before closing, same as if the user clicked "Done".
     */
    closeOnComplete?: boolean | number;
    /**
     * Auto-remove rejected files after this delay in milliseconds.
     * Default: 4000 (4 seconds). Set to 0 or false to disable auto-removal.
     */
    rejectedFileAutoRemoveDelay?: number | false;
}
export declare class SfxUploader extends LitElement {
    static styles: import('lit').CSSResult;
    config: UploaderConfig | null;
    private _isOpen;
    private _activeConnector;
    private _showUrlDialog;
    private _showCameraDialog;
    private _showScreenCastDialog;
    private _previewFileId;
    private _previewDims;
    private _splitPct;
    private _isResizing;
    private _splitRafId;
    private _fullscreenPreviewUrl;
    private _fullscreenVideoFile;
    private _fullscreenZoomed;
    private _fsPanX;
    private _fsPanY;
    private _fsDragging;
    private _fsDragStartX;
    private _fsDragStartY;
    private _fsPanStartX;
    private _fsPanStartY;
    private _bodyDragOver;
    private _isMinimized;
    private _isPillExpanded;
    private _bodyDragCounter;
    private _videoBlobUrls;
    private _store;
    private _storeCtrl;
    private _engine;
    private _cachedSources;
    private _cachedSourcesConfig;
    private _rejectedTimers;
    private _closeOnCompleteTimer;
    private _apiBase;
    private _authHeaders;
    private _authResolveId;
    private _prevStoreState;
    private _unsubStoreEvents;
    constructor();
    /** Open the uploader (modal mode). */
    open(): void;
    /** Close the uploader (modal mode). Optionally clears all files (controlled by clearOnClose config). */
    close(): void;
    /** Start uploading all queued files. */
    upload(): void;
    /** Programmatically add files. */
    addFiles(files: File[]): void;
    /** Resume a paused upload (spec §13.2). */
    resumeUpload(files?: UploadFile[]): void;
    /** Cancel a paused upload (spec §13.2). */
    cancelUpload(): void;
    /** Get a snapshot of all current files. */
    getFiles(): UploadFile[];
    /** Get a single file by ID. */
    getFile(fileId: string): UploadFile | undefined;
    /** Statuses where meta/tags can still be modified before upload. */
    private static readonly _MODIFIABLE_STATUSES;
    /** Update metadata and/or tags for a single file. */
    updateFileMeta(fileId: string, meta?: Record<string, unknown>, tags?: string[]): void;
    /** Batch-update metadata and/or tags for multiple files. */
    updateFilesMeta(updates: Array<{
        fileId: string;
        meta?: Record<string, unknown>;
        tags?: string[];
    }>): void;
    updated(changed: Map<string, unknown>): void;
    private _injectFloatStyles;
    private _updateFloatingPortal;
    private _portalContainer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _applyConfig;
    private _resolveAuthAndEngine;
    private _ensureEngine;
    private _dispatchPublic;
    /**
     * React to store changes and dispatch public events + callbacks
     * for file status transitions.
     */
    private _onStoreChange;
    /** Reserved source IDs that cannot be overridden by custom sources. */
    private static readonly _RESERVED_IDS;
    private get _mergedSources();
    private get _phase();
    private _processIncomingFiles;
    private _onFilesSelected;
    private _onDropTileSourceClick;
    private _onSourceClick;
    private _handleSourceActivation;
    private _onUrlSubmit;
    private _onUrlCancel;
    private _onCameraCapture;
    private _onCameraCancel;
    private _onScreenCastCapture;
    private _onScreenCastCancel;
    private _removeFile;
    private _onFileRemove;
    private _onFilePreview;
    private _onFillMetadata;
    private _onFileRetry;
    private _onRetryAll;
    private _onClearAll;
    private _onAddMore;
    private _onUploadStart;
    private _onUploadMore;
    private _onConnectorFilesSelected;
    private _onConnectorClose;
    private _onConnectorBackdropClick;
    private _onPrimaryAction;
    /** Dismiss handler for inline mode X button */
    private _onInlineDismiss;
    /** Close button on the success card — route to the right dismiss based on mode */
    private _onSuccessCardClose;
    /** Shared dismiss handler for X button, backdrop click, Escape */
    private _onModalDismiss;
    private _onMinimize;
    private _onPillClick;
    private _onPillExpand;
    private _onPillDismiss;
    private _onModalBackdropClick;
    private _onBodyDragEnter;
    private _onBodyDragOver;
    private _onBodyDragLeave;
    private _onBodyDrop;
    private _onKeyDown;
    render(): import('lit-html').TemplateResult<1>;
    private _renderHeader;
    private _dimCache;
    private _getImageDimensions;
    private _renderUploadOverlay;
    private _renderFloatingPill;
    private _onSplitPointerDown;
    private _onSplitPointerMove;
    private _onSplitPointerUp;
    private _renderPreviewLayout;
    private _renderDocTypeIcon;
    private _navigatePreview;
    private _renderBody;
    private _onFsToggleZoom;
    private _onFsOverlayClick;
    private _fsDragDidMove;
    private _onFsPanStart;
    private _onFsPanMove;
    private _onFsPanEnd;
    private _onFsTouchStart;
    private _onFsTouchMove;
    private _navigateFs;
    private _onFsClose;
    private _getVideoBlobUrl;
    private _revokeVideoBlobUrls;
}
declare global {
    interface HTMLElementTagNameMap {
        'sfx-uploader': SfxUploader;
    }
}
//# sourceMappingURL=sfx-uploader.d.ts.map