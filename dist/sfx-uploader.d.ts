import { LitElement } from 'lit';
import { TusConfig } from './engine';
import { UploadFile, UploadRestrictions, UploadResponse } from './store/store.types';
import { AuthConfig } from './auth/auth.types';
import { ConnectorConfig } from './connectors/connector.types';
import { MetadataConfig } from './metadata/schema/schema.types';
import { TaxonodeEntry } from './metadata/taxonomies/taxonomies.types';
import { Product } from './product/product.types';
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
/** One similar asset returned by the embedding/similarity endpoint. */
export interface SimilarAsset {
    uuid: string;
    /** Similarity score 0..1. */
    score: number;
    /** CDN url of the similar asset (preview + open target). */
    url: string;
    /** Display name (defaults to the filename derived from `url`). */
    name?: string;
    /** File size in bytes. */
    size?: number;
    /** Pixel dimensions. */
    width?: number;
    height?: number;
}
/** Resolution options for the video-transcode setting (Upload settings panel).
 *  Mirrors admin v5's vocabulary (`auto / mobile / tablet / desktop / hq / sample`).
 *  The selected value is forwarded as the `video-resolution` query param. */
declare const SETTINGS_RESOLUTIONS: readonly ["auto", "mobile", "tablet", "desktop", "hq", "sample"];
type SettingsResolution = (typeof SETTINGS_RESOLUTIONS)[number];
/** Streaming protocols available for video transcoding. Currently HLS only —
 *  DASH was removed for parity with admin v5 (FRA-5131: DASH transcoding broken). */
declare const SETTINGS_PROTOCOLS: readonly ["hls"];
type SettingsProtocol = (typeof SETTINGS_PROTOCOLS)[number];
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
    /**
     * Enable the "Check similar assets" feature (gated). When enabled, a
     * "Check similar" button appears in the actions bar and on image tiles,
     * letting the user check uploaded images against similar assets in the
     * library. The settings screen and similarity-confidence docs are handled
     * separately; `confidence` maps to the backend similarity threshold.
     */
    similarityCheck?: {
        enabled: boolean;
        confidence?: "low" | "mid" | "high";
    };
    /**
     * The "Upload settings" panel — a gear button in the header opens a global
     * settings panel in the preview side area, letting the user configure image
     * resizing, video transcoding and (optionally) resumable (tus) uploads
     * before uploading. The selected values are wired into the upload flow:
     *
     *   - `resize` + `maxWidth`/`maxHeight` → `&resize={w},{h}` (image / PDF)
     *   - `transcode` + `resolution` + `protocol` → `&postprocess=transcode&
     *     video-resolution={res}&video_protocols={proto}` (video)
     *   - `resumable` → toggles the resumable (tus) upload path on/off
     *
     * Pass `uploadSettings: false` to disable the panel entirely (the gear
     * button never appears). Otherwise the gear shows whenever the queue
     * contains processable files (images, PDFs, or videos). The resumable
     * switcher is hidden by default and only appears when
     * `showResumableSwitcher` is true (mirrors admin v5).
     * See mockups/FRA-10365-dev-handoff.md.
     */
    uploadSettings?: false | {
        /** Show the gear icon that opens the settings panel. Default true.
         *  Pass `uploadSettings: false` as shorthand to disable entirely. */
        enabled?: boolean;
        /** Show the "Resume uploads" (tus) switcher inside the panel.
         *  Mirrors admin v5's `showResumableUploadSwitcher`. Default false. */
        showResumableSwitcher?: boolean;
        /** Initial values for the panel controls. */
        defaults?: {
            resize?: boolean;
            maxWidth?: number;
            maxHeight?: number;
            transcode?: boolean;
            resolution?: SettingsResolution;
            protocol?: SettingsProtocol;
            resumable?: boolean;
        };
    };
    /** Metadata editing configuration. When provided, enables the built-in metadata form. */
    metadataConfig?: MetadataConfig;
    /** Layout for the import-from sources section: horizontal pills (default) or cards grid. */
    sourcesLayout?: "pills" | "cards";
    /**
     * Host-supplied builder for the "Locate" button URL. Receives the
     * completed file and returns the URL Locate should open. Return
     * `null` / `undefined` to fall back to the `adminUrl`-based default
     * (see `adminUrl`), which itself defaults to `window.location.origin`
     * when not set — so in practice Locate will navigate as long as the
     * uploader is running in a browser and the file has a UUID.
     *
     * To suppress the auto-navigation even when a URL would be resolved
     * (e.g. open it via the host's client-side router instead of a new
     * tab), call `event.preventDefault()` on the `sfx-file-locate` public
     * event.
     *
     * Pairs with `showLocateButton: true`.
     *
     * Example:
     * ```ts
     * getLocateUrl: (file) =>
     *   `https://app.example.com/dam?asset=${file.response?.file?.uuid}`
     * ```
     */
    getLocateUrl?: (file: UploadFile) => string | null | undefined;
    /**
     * Base URL of the Filerobot admin / DAM app — used to build the
     * default Locate target when `getLocateUrl` is not provided. The
     * uploader navigates to `${adminUrl}/library?lf=<base64(uuid)>`, the
     * same deep-link the admin uses internally to scroll to and select a
     * file in its library tree. Trailing slashes are ignored.
     *
     * Defaults to `window.location.origin`, which is correct when the
     * uploader is embedded inside the admin itself (the common case).
     * Set explicitly for cross-origin embeds, custom domains, or
     * whitelabel deployments where the admin lives on a different host.
     */
    adminUrl?: string;
    /**
     * Show the "Locate" button on completed files. Renders in two places:
     *   - As a full-width labelled button on the review-screen tile.
     *   - As a compact icon in the floating-panel per-file row, next to
     *     the success checkmark.
     * When clicked, fires the `sfx-file-locate` event and the `onFileLocate`
     * callback, then opens the resolved Locate URL (see `getLocateUrl` /
     * `adminUrl`) in a new tab unless the event's default is prevented or
     * the file has no UUID to deep-link to.
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
     * - number — custom delay in milliseconds (e.g. `2000` for 2 s, `0` for immediate).
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
    /**
     * Preserve nested folder hierarchy when a user drags a folder onto the drop
     * zone or selects a directory in the file picker. When `true` (default),
     * each file's path relative to the dropped/selected root is captured and
     * appended to `targetFolder` on upload — so dropping `photos/2026/jan/x.png`
     * into a `targetFolder` of `assets` uploads to `assets/photos/2026/jan`.
     *
     * Set to `false` to flatten everything into `targetFolder`, ignoring the
     * source structure (legacy behavior). Drag-drop of a folder still ingests
     * the files in either mode; only the destination path differs.
     *
     * Also surfaces a small "or upload a folder" affordance next to the
     * "browse" link, letting users pick a folder from the OS picker (in
     * addition to the existing file picker). Folder picking from the OS
     * dialog requires browser support for `webkitdirectory` (all modern
     * Chromium/WebKit/Firefox builds).
     *
     * Default: `true`.
     */
    preserveFolderStructure?: boolean;
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
    /** "Check similar assets": whether the image-selection mode is active. */
    private _similarSelectMode;
    /** "Check similar assets": ids of images picked for the similarity check. */
    private _similarSelectedIds;
    /** Similarity search: all ids in the active run (empty = no search running). */
    private _similarRunIds;
    /** Similarity search: ids currently being searched (spinner). */
    private _similarActiveIds;
    /** Similarity results per checked image id (presence = checked). The badge
     *  shows the count ("N similar" / "No similar"); accumulates across runs. */
    private _similarResults;
    /** Which tab the preview side-panel shows: file details or similar assets. */
    private _previewPanelTab;
    /** Pending timers for the simulated search progression (demo only). */
    private _similarSimTimers;
    /** Counter to vary the mock similar count across ad-hoc single checks. */
    private _simMockCounter;
    private _previewFileId;
    private _previewDims;
    private _fileInfoOpen;
    private _splitPct;
    /** Whether the global Upload settings panel is showing in the side area. */
    private _showSettings;
    private _setResize;
    private _setMaxW;
    private _setMaxH;
    private _setTranscode;
    private _setResolution;
    /** Whether the resolution custom-select dropdown is open. */
    private _setResolutionOpen;
    private _setProtocol;
    /** Resumable (tus) uploads toggle — maps to `tusConfig`. */
    private _setResumable;
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
    /**
     * Currently active variant per regional-variants group, keyed by group
     * UUID. Mirrors admin v5's `metadataRegionalFilters` slice. Lets a single
     * project mix LANGUAGES, CURRENCIES, and CUSTOM groups — each field is
     * wrapped/unwrapped under `regionalFilters[field.regional_variants_group_uuid]`.
     * Defaults are seeded from the schema (first variant of each group) and
     * the user can change any group via the regional-settings selector.
     */
    private _regionalFilters;
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
    private _taxonomyService;
    private _ultratagsService;
    /**
     * Default language for ultratags label fallback — first variant of the
     * regional-variants "LANGUAGES" group from the metadata schema, mirroring
     * admin's `selectMetadataRegionalVariantLanguagesGroup`. When no LANGUAGES
     * group is defined or the user hasn't set `config.language`, the field
     * component falls back to 'en'.
     */
    private get _metadataDefaultLanguage();
    /**
     * Effective per-group active variants: schema defaults merged with user
     * picks from `_regionalFilters`. The LANGUAGES-group default tries to match
     * the user's profile language (`metadataConfig.language`, falling back to
     * the UI `locale`) before the schema's first variant, so e.g. an FR profile
     * lands on the French variant instead of the schema's first language.
     * Built fresh on each access so newly-loaded schemas immediately seed defaults.
     */
    private get _effectiveRegionalFilters();
    /**
     * Backward-compat single-language getter. Returns the active LANGUAGES-group
     * variant if any, falling back to `config.metadataConfig.language`.
     * Preserves call sites that still think in terms of a single "current
     * editing language" — new code should use `_effectiveRegionalFilters` instead.
     */
    private get _activeLanguage();
    /**
     * `metadataConfig` with `regionalFilters` populated from the active
     * per-group picks and `language` mirrored from the active LANGUAGES-group
     * variant (when any). Passed to `<sfx-metadata-form>` and
     * `<sfx-bulk-metadata-modal>`; field components resolve their own slot key
     * via `resolveFieldRegionalKey(field, config)`.
     */
    private get _effectiveMetadataConfig();
    private _onRegionalChange;
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
    /** Persist or clear the display-side taxonomy entry for one file/field. */
    updateFileTaxonode(fileId: string, fieldKey: string, entry: TaxonodeEntry | null): void;
    /** Batch version of {@link updateFileTaxonode} — same entry for many files. */
    updateFilesTaxonode(fileIds: string[], fieldKey: string, entry: TaxonodeEntry | null): void;
    /**
     * Update product fields (ref + position) for a single file. The patch is
     * merged onto the existing `product` object. Passing `undefined` for a key
     * clears it. Only files in modifiable statuses are affected.
     */
    updateFileProduct(fileId: string, product: Partial<Product>): void;
    /** Batch-update product fields for multiple files. */
    updateFilesProduct(updates: Array<{
        fileId: string;
        product: Partial<Product>;
    }>): void;
    willUpdate(changed: Map<string, unknown>): void;
    updated(_changed: Map<string, unknown>): void;
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
     * Whether the drop-zone / drop-tile should expose the "browse folder"
     * affordance and render a `webkitdirectory` input. True when:
     *   - the host hasn't disabled it via `preserveFolderStructure: false`, and
     *   - multi-select is allowed (single-asset slots can't accept a folder).
     */
    private get _allowFolderUpload();
    /**
     * Build the per-file upload-params resolver. Layers four sources, with
     * later sources winning on key collision:
     *   1. Upload settings panel (resize / transcode) — wired here.
     *   2. `forceName` → `opt_force_name`.
     *   3. Host-supplied `getUploadParams(file)` — always wins so hosts can
     *      override anything the panel chose.
     * Returns `undefined` when no source contributed any params for the file.
     */
    private _buildUploadParamsResolver;
    private _ensureEngine;
    private _preloadMetadataSchema;
    private _onFileRename;
    /** Handle file rename from the preview sidebar or thumbnail. */
    private _onPreviewRename;
    /**
     * Handle field-blur from inline metadata form in the preview sidebar.
     * Routes synthetic product keys (`product.ref` / `product.position`) into
     * `file.product` via `updateFileProduct`; everything else lands in `meta`.
     */
    private _onPreviewMetadataBlur;
    /** Handle taxonomy-entry-change from the preview metadata form. */
    private _onPreviewTaxonomyEntry;
    /**
     * Build the meta-like dict the preview's `<sfx-metadata-form>` consumes,
     * merging product values under their synthetic keys so the same component
     * can render both metadata and product inputs.
     */
    private _previewMeta;
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
    private _onFolderEmpty;
    /** Surface the "dropped folder is empty" hint once per drop. */
    private _showEmptyFolderToast;
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
    /** Images eligible for the similarity check (renderable images only). */
    private _similarImageFiles;
    /** Eligible images not yet checked — the selectable pool. Already-checked
     *  images are "done", so selection/"Select all" skips them. */
    private _similarUncheckedFiles;
    private _onCheckSimilarEnter;
    private _onCheckSimilarCancel;
    private _onSimilarToggle;
    private _onSimilarSelectAll;
    private _onCheckSimilarRun;
    private _onCheckSimilarSingle;
    /**
     * Single (per-tile) check: processes one image independently and
     * accumulatively — clicking several tiles spins them all, no click cancels
     * another, and there is no batch progress banner (that's only for the
     * select-all-and-Check batch).
     *
     * TODO(dev): replace the simulated timeout with the real per-image API call
     * (render w=300 → POST embedding). Multiple of these may run concurrently;
     * add a sensible concurrency limit if needed.
     */
    private _checkSimilarSingleFile;
    /**
     * Runs the similarity check for the given images and drives the loading UI
     * (per-tile spinner + batch progress banner).
     *
     * TODO(dev): replace the simulated per-image progression below with the real
     * request. For each image: render a w=300 version, POST it to the embedding
     * endpoint (https://ai.scaleflex.com/images/embedding/...) with the threshold
     * derived from `this.config?.similarityCheck?.confidence` (low 0.60 / mid 0.75
     * / high 0.90), collect the returned `similar_assets`, and mark the image done.
     * Then surface the results in a panel (Open in new window / Discard from
     * upload) — that screen is the next step. The loading UI, selection mode,
     * per-tile button and events are already wired; only the network call and the
     * results rendering remain.
     */
    private _runSimilarityCheck;
    /**
     * TODO(dev): remove. Generates fake similar_assets for the demo so the
     * results UI is visible. Replace with the real `similar_assets` from the
     * embedding endpoint response.
     */
    private _mockSimilarAssets;
    /** Clears only the current run (timers, run/active ids). Keeps the persistent
     *  checked set so finished images stay marked. Used by Cancel / Done. */
    private _clearSimilarRun;
    private _onSimilarSearchCancel;
    /** Remove all similarity-check references to a file id (on file removal). */
    private _purgeSimilarState;
    /** Open the similar results for an image (from its tile badge) in the side
     *  panel: switch to its preview and select the "Similar" tab. */
    private _onSimilarOpenResults;
    /** Open a similar asset in a new window. */
    private _openSimilarAsset;
    /** Discard the previewed image from the upload; move to the next file (so the
     *  side panel stays open) or close the preview when none remain. */
    private _discardPreviewFile;
    /** Display name for a similar asset: the filename extracted from its URL
     *  (decoded, query stripped), falling back to an explicit name or the uuid. */
    private _simAssetName;
    /** Meta line for a similar asset card: format · size · resolution. Excludes the
     *  name itself — only a real file extension counts (avoids echoing the name). */
    private _simAssetMeta;
    private _onRequireMetadata;
    private _locateFile;
    private _onFileLocate;
    private _onFileCopyCdn;
    private _onBulkMetadataSaveBatch;
    private _onBulkProductSaveBatch;
    private _onBulkTaxonomySaveBatch;
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
    /** "Similar" tab body of the preview side-panel: the similar-asset cards for
     *  the previewed image, plus a discard action. Empty state when none. */
    private _renderSimilarPanel;
    /** Global "Upload settings" view shown in the preview side-panel when the
     *  header gear is active. Captures image/video/resumable upload preferences
     *  and forwards them to the upload flow (image resize → `&resize=w,h`,
     *  transcode → `&postprocess=transcode&video-resolution=…&video_protocols=…`,
     *  resumable → toggles the tus path on/off). See mockups/FRA-10365-dev-handoff.md. */
    private _renderSettingsPanel;
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
export {};
//# sourceMappingURL=sfx-uploader.d.ts.map