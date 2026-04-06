import { LitElement } from 'lit';
import { TusConfig } from './engine';
import { UploadFile, UploadRestrictions, UploadResponse } from './store/store.types';
import { AuthConfig } from './auth/auth.types';
import { ConnectorConfig } from './connectors/connector.types';
import { MetadataConfig } from './metadata/schema/schema.types';
export interface UploaderCallbacks {
    onFileAdded?: (file: UploadFile) => void;
    onFileRemoved?: (file: UploadFile) => void;
    onFileRejected?: (file: UploadFile, reason: string) => void;
    onUploadStarted?: (files: UploadFile[]) => void;
    onUploadProgress?: (file: UploadFile, progress: number, speed: number) => void;
    onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
    onUploadError?: (file: UploadFile, error: Error) => void;
    onUploadRetry?: (file: UploadFile, attempt: number) => void;
    onUploadPaused?: (file: UploadFile) => void;
    onUploadResumed?: (file: UploadFile) => void;
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
export interface InlineHeaderConfig {
    /** Small uppercase accent label (e.g. "Airbox"). */
    accent?: string;
    /** Main heading (e.g. "Q1 Marketing Assets"). */
    title?: string;
    /** Description text below the title. */
    description?: string;
}
export interface UploaderConfig {
    auth: AuthConfig;
    targetFolder?: string;
    mode?: 'modal' | 'inline';
    /** Header displayed above the uploader in inline mode. All fields are optional. */
    inlineHeader?: InlineHeaderConfig;
    /**
     * Controls the standard header bar.
     * - `'close'` — header with X close button (default for modal)
     * - `'back'`  — header with back arrow (wizard / step flows)
     * - `true`    — header visible, no button (default for inline without inlineHeader)
     * - `false`   — no header at all
     */
    header?: boolean | 'close' | 'back';
    restrictions?: Partial<UploadRestrictions>;
    concurrency?: number;
    autoProceed?: boolean;
    callbacks?: UploaderCallbacks;
    connectors?: ConnectorConfig;
    /** Show "Fill Metadata" button in the actions bar. */
    showFillMetadata?: boolean;
    /** Metadata editing configuration. When provided, enables the built-in metadata form. */
    metadataConfig?: MetadataConfig;
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
    /**
     * Enable resumable uploads via the tus protocol for large files.
     * When set, files exceeding `sizeThreshold` (default 10 MB) are uploaded
     * using chunked, resumable tus uploads instead of a single XHR POST.
     * Set to `true` for defaults, or pass a TusConfig object for fine-grained control.
     */
    tusConfig?: TusConfig | boolean;
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
    private _metadataSchema;
    private _bulkMetadataOpen;
    private _metadataAutocomplete;
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
    /** Pause a specific file's tus upload. Only works for files using resumable upload. */
    pauseFile(fileId: string): void;
    /** Resume a specific paused tus upload. */
    resumeFile(fileId: string): void;
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
    private _formatAuthError;
    private _showToast;
    private _normalizeTusConfig;
    private _ensureEngine;
    private _preloadMetadataSchema;
    private _onFileRename;
    /** Handle file rename from the preview sidebar or thumbnail. */
    private _onPreviewRename;
    /** Handle field-blur from inline metadata form in the preview sidebar. */
    private _onPreviewMetadataBlur;
    private get _metadataEnforcing();
    private get _hasUnfilledRequiredMetadata();
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
    private _onBulkMetadataSaveBatch;
    private _onBulkMetadataClose;
    private _onFileRetry;
    private _onFilePause;
    private _onFileResume;
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
    private _bodyLeaveTimer;
    private _onBodyDragEnter;
    private _onBodyDragOver;
    private _onBodyDragLeave;
    private _onBodyDrop;
    private _onKeyDown;
    render(): import('lit-html').TemplateResult<1>;
    private _renderInlineHeader;
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