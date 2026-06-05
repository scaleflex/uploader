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
    /** Fires when the uploader is collapsed to the floating pill (auto on upload start, manual via the minimize button). */
    onMinimize?: () => void;
    /** Fires when the uploader is restored from the floating pill back to the modal. */
    onRestore?: () => void;
    onFilePreview?: (file: UploadFile) => void;
    onFillMetadata?: (files: UploadFile[]) => void;
    onCompleteAction?: () => void;
    onFileLocate?: (file: UploadFile) => void;
    onFileCopyCdn?: (file: UploadFile, cdnUrl: string) => void;
}
export interface InlineHeaderConfig {
    /** Small uppercase accent label (e.g. "Airbox"). */
    accent?: string;
    /** Main heading (e.g. "Q1 Marketing Assets"). */
    title?: string;
    /** Description text below the title. */
    description?: string;
}
/**
 * Context passed to {@link UploaderConfig.transformRemoteThumbnail} so the
 * host can decide how to rewrite a third-party thumbnail URL (e.g. proxy it
 * through Filerobot for CSP compliance, append a token, …).
 */
export interface RemoteThumbnailContext {
    /**
     * Where the URL came from:
     * - `'url-import'` — pasted into the "Import from URL" dialog.
     * - `'connector'` — listing/selection result from a Companion provider.
     * - `'cdn-complete'` — post-upload CDN URL from the Filerobot response,
     *   used to replace the file tile's preview after upload finishes. Fires
     *   when the project's `cdn` URL is on a custom CNAME (e.g. a branded
     *   domain) that isn't in the host CSP allowlist; rewrite it to a
     *   Filerobot/Cloudimage proxy URL so the preview renders.
     */
    source: 'url-import' | 'connector' | 'cdn-complete';
    /** Provider id when `source === 'connector'`. */
    providerId?: import('./connectors/connector.types').ProviderId;
}
export interface UploaderConfig {
    auth: AuthConfig;
    targetFolder?: string;
    mode?: "modal" | "inline";
    /** Header displayed above the uploader in inline mode. All fields are optional. */
    inlineHeader?: InlineHeaderConfig;
    /**
     * Controls the standard header bar.
     * - `'close'` — header with X close button (default for modal)
     * - `'back'`  — header with back arrow (wizard / step flows)
     * - `true`    — header visible, no button (default for inline without inlineHeader)
     * - `false`   — no header at all
     */
    header?: boolean | "close" | "back";
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
    sourcesLayout?: "pills" | "cards";
    /**
     * Override the URL opened by the "Locate" button in the last-upload review
     * screen. Receives the completed file and should return the URL the host
     * wants Locate to open (typically a dashboard / file-manager URL pointing
     * at the file's containing folder). Return `null` / `undefined` to fall
     * back to the file's own public URL (default behaviour).
     *
     * Example:
     * ```ts
     * getLocateUrl: (file) =>
     *   `https://app.scaleflex.com/projects/${PROJECT_ID}/files?id=${file.response?.file?.uuid}`
     * ```
     */
    getLocateUrl?: (file: UploadFile) => string | null | undefined;
    /**
     * Show the "Locate" button on completed file tiles in the review screen.
     * When clicked, fires the `sfx-file-locate` event and the `onFileLocate` callback.
     * Default: false (hidden).
     */
    showLocateButton?: boolean;
    /**
     * Show the "Copy CDN" button on completed file tiles in the review screen.
     * When clicked, copies the CDN URL to the clipboard and fires the
     * `sfx-file-copy-cdn` event and the `onFileCopyCdn` callback.
     * Default: false (hidden).
     */
    showCopyCdnButton?: boolean;
    /**
     * Enable the "last upload review" feature that persists the most recent
     * upload batch to `sessionStorage` so the user can review it after
     * closing and re-opening the uploader within the same browser tab.
     *
     * - `false` (default) — disabled; no data is written to sessionStorage.
     * - `true`  — enabled; the storage key is automatically scoped by the
     *   `auth.container` (and `auth.airboxPuid` when present), so different
     *   airboxes never collide.
     * - `string` — enabled with an explicit ID used as the storage key suffix.
     *   Use this when you have multiple uploaders targeting the **same** airbox
     *   but serving different purposes (e.g. `'product-photos'` vs `'avatars'`).
     *
     * Storage key format: `sfx-uploader:last-upload:{id}`
     *
     * @example
     * // Auto-scoped by container + airboxPuid
     * lastUploadReview: true
     *
     * @example
     * // Explicit ID for same-airbox disambiguation
     * lastUploadReview: 'product-photos'
     */
    lastUploadReview?: boolean | string;
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
     * Set to 0, false, or omit to disable auto-removal.
     */
    rejectedFileAutoRemoveDelay?: number | false;
    /**
     * Enable resumable uploads via the tus protocol for large files.
     * When set, files exceeding `sizeThreshold` (default 10 MB) are uploaded
     * using chunked, resumable tus uploads instead of a single XHR POST.
     * Set to `true` for defaults, or pass a TusConfig object for fine-grained control.
     */
    tusConfig?: TusConfig | boolean;
    /**
     * Force every uploaded file to be saved under this exact name in
     * `targetFolder`, overwriting any existing file with the same name.
     * Use for single-asset slots (watermark, default image, folder icon)
     * where the host always wants one file at a stable path.
     *
     * Translates to `&opt_force_name=<value>` on the upload request and
     * works across every source — local file, URL import, Google Drive,
     * Unsplash, etc. Setting this implicitly clamps
     * `restrictions.maxNumberOfFiles` to `1`, disables multi-select on
     * the file picker, and forces the XHR upload path regardless of file
     * size (tus is bypassed because Companion's tus relay does not
     * propagate `opt_force_name` reliably).
     *
     * Pass a function if the name needs to be derived per-session.
     *
     * @example
     * forceName: `project-${projectUuid}`
     */
    forceName?: string | (() => string);
    /**
     * Append arbitrary query parameters (typically Filerobot `opt_*` flags)
     * to every upload request. Called once per file just before its
     * request is sent and merged into the URL of whichever upload path
     * runs (XHR, URL, or Companion). Return `undefined` for no extras.
     * Returning a non-empty object also forces the XHR path — tus is
     * bypassed since its Companion relay does not propagate `opt_*` flags
     * reliably.
     *
     * If a key collides with one produced by `forceName`, the value
     * returned here wins.
     *
     * @example
     * getUploadParams: (file) => ({
     *   opt_force_name: deriveNameFor(file),
     *   opt_overwrite_meta: 'true',
     * })
     */
    getUploadParams?: (file: UploadFile) => Record<string, string> | undefined;
    /**
     * Rewrite thumbnail URLs before they are rendered as `<img src>`. Use this
     * when the host page enforces a Content-Security-Policy that disallows the
     * URL's origin (e.g. Hub allowing only `*.filerobot.com` and
     * `*.cloudimg.io`). The function receives the original URL and a
     * {@link RemoteThumbnailContext} describing where it came from, and should
     * return a CSP-allowed URL (typically a Filerobot/Cloudimage proxy).
     *
     * Applies to:
     *  - URL imports — pasted URL used as the pre-upload preview
     *    (`source: 'url-import'`).
     *  - Connector listing/selection thumbnails — Google Drive, Unsplash, etc.
     *    (`source: 'connector'`).
     *  - Post-upload preview swap — when the upload response's `cdn` URL is on
     *    a custom CNAME that isn't CSP-allowed (`source: 'cdn-complete'`). The
     *    engine already defaults to `permalink` (`api.filerobot.com/.../v4/get`
     *    — always on `*.filerobot.com`), then falls back to `cdn_permalink` and
     *    `cdn`. This branch usually only fires for hosts whose CSP is even
     *    tighter than that.
     *
     * @example
     * transformRemoteThumbnail: (url) =>
     *   `https://demo.cloudimg.io/v7/${encodeURIComponent(url)}?w=200`
     */
    transformRemoteThumbnail?: (url: string, ctx: RemoteThumbnailContext) => string;
    /**
     * BCP 47 locale tag for the UI language (e.g. `'fr'`, `'de'`, `'en-US'`).
     * Defaults to `navigator.language`. Translations are loaded lazily from the
     * Wordplex CDN; English defaults are shown for any untranslated keys.
     */
    locale?: string;
}
export type UploaderPhase = "empty" | "ready" | "uploading" | "complete";
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
    private _fileInfoOpen;
    private _splitPct;
    private _isResizing;
    private _splitRafId;
    /** Has the default split (3/8 panel) been applied for the current preview session? */
    private _previewDefaultApplied;
    private _fullscreenPreviewUrl;
    private _fullscreenVideoFile;
    private _fsZoom;
    private static readonly _FS_ZOOM_LEVELS;
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
    /** When non-null, the bulk modal opens with this field active. */
    private _bulkMetadataInitialFieldKey;
    /** True when the user has clicked "Review files" on the success-card or
     *  the "View last upload" pill on the drop-zone screen. Renders the
     *  read-only last-upload-review screen instead of the normal phase view. */
    private _isReviewing;
    /** Files loaded from sessionStorage for the review screen. */
    private _reviewFiles;
    /** Resolved storage key suffix for the last-upload review feature, or
     *  `null` when the feature is disabled (`lastUploadReview` is falsy). */
    private get _lastUploadId();
    /** Whether sessionStorage has a stored last-upload batch. Checked on
     *  connectedCallback and updated when batches are saved/cleared. */
    private _hasStoredReview;
    private _metadataAutocomplete;
    private _videoBlobUrls;
    /** Persisted ETA — holds the last computed value so the display doesn't flicker when speed momentarily drops to 0. */
    private _lastEta;
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
    /** Current upload phase: 'empty' | 'ready' | 'uploading' | 'complete'.
     *  Use to decide whether it's safe to call dismissPanel() without cancelling uploads. */
    getStatus(): UploaderPhase;
    /** Hide the panel in any state (modal, floating card, or minimized pill).
     *  If uploads are in progress they are cancelled and `sfx-cancel` fires before `sfx-close`.
     *  Check getStatus() first if you only want to dismiss after completion. */
    dismissPanel(): void;
    /** Shared cleanup for `close()` and `dismissPanel()` — clears the auto-close
     *  timer, honors `clearOnClose`, resets preview state, fires `sfx-close`. */
    private _runCloseCleanup;
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
    /**
     * The preview panel opens at 3/8 (~37.5%) of the modal width by default,
     * giving the grid 5/8. On first appearance of the preview layout we set
     * _splitPct once; after that the user's own divider drag wins until the
     * preview layout is dismissed.
     */
    private _applyDefaultPreviewWidth;
    private _injectFloatStyles;
    private _updateFloatingPortal;
    private _portalContainer;
    private _hostStyleObserver;
    connectedCallback(): void;
    private _initI18n;
    disconnectedCallback(): void;
    private _applyConfig;
    private _resolveAuthAndEngine;
    private _formatAuthError;
    private _showToast;
    private _normalizeTusConfig;
    /**
     * Whether the file picker should allow multi-select. False when
     * `forceName` is set (single-asset slot) or when restrictions cap to 1.
     */
    private get _remainingSlots();
    private get _allowMulti();
    /**
     * Build the per-file upload-params resolver from `forceName` and
     * `getUploadParams`. Host-supplied `getUploadParams` keys win on collision.
     * Returns `undefined` when neither is configured.
     */
    private _buildUploadParamsResolver;
    private _ensureEngine;
    private _preloadMetadataSchema;
    private _onFileRename;
    /** Handle file rename from the preview sidebar or thumbnail. */
    private _onPreviewRename;
    /** Handle field-blur from inline metadata form in the preview sidebar. */
    private _onPreviewMetadataBlur;
    private get _metadataEnforcing();
    private _firstMissingRequiredFieldKey;
    private get _hasUnfilledRequiredMetadata();
    private _dispatchPublic;
    /** True once `PANEL_SHOWN` has fired for the current minimize session. */
    private _floatShownDispatched;
    /** Read width/height of the rendered floating panel, and the current mode. */
    private _measureFloatGeometry;
    /** Dispatch a panel-lifecycle event with geometry after the next paint. */
    private _dispatchFloatGeometryEvent;
    /** Mirror `--sfx-up-float-offset-x/y` from the host onto the portal container.
     *  The portalled pill lives in `document.body` and doesn't inherit CSS variables
     *  set on `<sfx-uploader>`, so we copy them whenever they change. */
    private _syncPortalOffsetVars;
    /**
     * Run the host-supplied {@link UploaderConfig.transformRemoteThumbnail}
     * over a third-party thumbnail URL, falling back to the original URL when
     * no transform is configured or the transform throws.
     */
    private _transformRemoteThumbnail;
    /**
     * Stable bound transform passed to the connector browser components, so
     * inline-arrow churn in the template doesn't force the children to re-render
     * on every parent update.
     */
    private _connectorThumbnailTransform;
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
    private _onFileLocate;
    private _onFileCopyCdn;
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
    /** Enter review mode. Prefers live files from the store (they still have
     *  objectURL previewUrls for both successful AND failed files); falls
     *  back to sessionStorage when no live files are present (e.g. the user
     *  re-opened the uploader after closing). */
    private _onEnterReview;
    private _onExitReview;
    private _onClearReview;
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
    private _onCancelUpload;
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
    /** Fullscreen image/video overlay. Rendered at the top level (sibling
        of modal-backdrop) so it never inherits a containing block from the
        modal-card on mobile, where modal-card is position:fixed itself and
        its overflow:hidden was clipping the overlay. The toolbar + nav
        buttons are rendered as SIBLINGS of the overlay (not children) so
        their position:fixed always resolves to the viewport, even if some
        ancestor of fs-overlay establishes a containing block on first paint. */
    private _renderFsOverlay;
    private _renderInlineHeader;
    private _renderHeader;
    private _dimCache;
    private _getImageDimensions;
    private _renderUploadOverlay;
    private _renderOverlayFiles;
    private _renderFloatingPill;
    private _onSplitPointerDown;
    private _onSplitPointerMove;
    private _onSplitPointerUp;
    private _renderPreviewLayout;
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
        "sfx-uploader": SfxUploader;
    }
}
//# sourceMappingURL=sfx-uploader.d.ts.map