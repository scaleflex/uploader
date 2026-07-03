import { LitElement } from 'lit';
import { TusConfig } from './engine';
import { UploadFile, UploadRestrictions, UploadResponse } from './store/store.types';
import { AuthConfig } from '@scaleflex/dam-core';
import { ConnectorConfig } from './connectors/connector.types';
import { MetadataConfig, TaxonodeEntry, Product } from '@scaleflex/dam-metadata';
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
    /**
     * Fires once per dropped/picked folder when every file inside that folder
     * has reached a terminal status (complete / failed / cancelled / rejected).
     * Useful for incrementally refreshing a folder view in the host app
     * without waiting for the whole batch (`onAllComplete`) to finish.
     *
     * `folder` is the file's `relativeFolder` value — the path relative to the
     * uploader's `targetFolder` (e.g. `"myFolder/sub"`). Root-level files
     * (empty `relativeFolder`) never trigger this callback; use
     * `onUploadComplete` for those.
     *
     * Fires at most once per `(folder, upload batch)` pair. A fresh batch (i.e.
     * the user clicking "Upload more" or starting a new upload after reset)
     * re-arms it so the same folder path can fire again later.
     */
    onFolderComplete?: (folder: string, successful: UploadFile[], failed: UploadFile[]) => void;
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
    /**
     * Locate-button click handler. Fires before the uploader navigates to the
     * resolved Locate URL — return `false` to suppress that navigation and
     * route the user yourself (e.g. via your SPA router) so the page does not
     * reload. The resolved `url` is the same value the uploader would have
     * navigated to (see `getLocateUrl` / `adminUrl`); it may be `null` when the
     * file has no UUID yet, in which case the uploader would have done
     * nothing.
     *
     * @example
     * onFileLocate: (file, url) => {
     *   if (url) router.push(url); // your client-side router
     *   return false;              // skip uploader's full-page navigate
     * }
     */
    onFileLocate?: (file: UploadFile, url: string | null) => boolean | void;
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
    /**
     * The complete `response.file.url` map from the upload response when
     * `source === 'cdn-complete'` (`public`, `cdn`, `cdn_permalink`,
     * `permalink`). Lets the host pick a different variant outright — e.g.
     * return `urls.permalink` (which carries the `?vh=` version hash) when
     * uploading a new version of an existing asset, where the `cdn` URL
     * points at the same path and the CDN still serves the previous
     * version's cached image.
     */
    urls?: import('./store/store.types').UploadResponseUrls;
}
/** One similar asset returned by the embedding/similarity endpoint. The
 *  response is a tuple `[uuid, score, url]`; the display name is derived from
 *  the URL filename. */
export interface SimilarAsset {
    uuid: string;
    /** Similarity score 0..1. */
    score: number;
    /** CDN url of the similar asset (preview + open target). */
    url: string;
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
    /**
     * Custom Filerobot API host to use instead of the default "https://api.filerobot.com".
     * Use this when the project is hosted on a dedicated infrastructure (e.g. Akamai/Linode).
     * Example: "https://akli.api.filerobot.com"
     * The container token is appended automatically: "https://akli.api.filerobot.com/{container}"
     *
     * Note: strip any trailing `/{token}` segment from `settings.domains.api` before passing here —
     * only the bare host is expected.
     *
     * Note: large files (≥10 MB) use tus resumable uploads via a separate Companion endpoint
     * (`connector.filerobot.com`). To route those to isolated infrastructure as well, also set
     * `tusConfig.endpoint` to the appropriate Companion URL.
     */
    apiDomain?: string;
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
    /**
     * Enable the "Check similar assets" feature (gated). When enabled, a
     * "Check similar" button appears in the actions bar and on image tiles,
     * letting the user check uploaded images against similar assets in the
     * library. The settings screen and similarity-confidence docs are handled
     * separately; `confidence` maps to the backend similarity threshold.
     */
    similarityCheck?: {
        enabled: boolean;
        confidence?: 'low' | 'mid' | 'high';
        /** Override the embedding service base URL. Defaults to
         *  `https://ai.scaleflex.com`. Useful for staging environments. */
        endpoint?: string;
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
     * contains processable files (images, PDFs, or videos), or whenever the
     * host opted into `showResumableSwitcher: true` (which applies to any
     * file type). The resumable switcher is hidden by default and only
     * appears when `showResumableSwitcher` is true (mirrors admin v5).
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
    sourcesLayout?: 'pills' | 'cards';
    /**
     * Host-supplied builder for the "Locate" button URL. Receives the
     * completed file and returns the URL Locate should open. Return
     * `null` / `undefined` to fall back to the `adminUrl`-based default
     * (see `adminUrl`), which itself defaults to `window.location.origin`
     * when not set — so in practice Locate will navigate as long as the
     * uploader is running in a browser and the file has a UUID.
     *
     * To suppress the auto-navigation even when a URL would be resolved
     * (e.g. route the URL through the host's SPA router instead of doing
     * a full-page navigation), either call `event.preventDefault()` on
     * the cancelable `sfx-file-locate` public event or return `false`
     * from the `onFileLocate(file, url)` callback.
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
     * When clicked, fires the `sfx-file-locate` event (detail
     * `{ file, url }`) and the `onFileLocate(file, url)` callback, then
     * navigates the current tab to the resolved Locate URL (see
     * `getLocateUrl` / `adminUrl`). Hosts can suppress the navigation by
     * calling `event.preventDefault()` on the event or returning `false`
     * from `onFileLocate`, and route the URL themselves (e.g. via their
     * SPA router) to avoid the full-page reload.
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
     * Allow users to edit file names in the pre-upload list. Defaults to
     * `true`. Set to `false` when the stored name must not change — e.g.
     * uploading a new version of an existing asset, where the name decides
     * which asset gets versioned. Treated as `false` whenever `forceName`
     * is set, since the server overrides the name anyway and an editable
     * field would be misleading.
     */
    allowFileRename?: boolean;
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
     *  - Post-upload preview swap (`source: 'cdn-complete'`) — the engine
     *    prefers `cdn`, then falls back to `cdn_permalink` and `permalink`.
     *    `ctx.urls` carries the complete `response.file.url` map so the host
     *    can pick a different variant outright — e.g. return
     *    `ctx.urls.permalink` for "new version" uploads, where the `cdn` URL
     *    points at the unchanged path and the CDN still serves the previous
     *    version's cached image.
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
export type UploaderPhase = 'empty' | 'ready' | 'uploading' | 'complete';
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
    /** Pending timer that auto-dismisses the post-batch progress banner. */
    private _similarDismissTimer;
    /** AbortController for in-flight similarity requests of the active run. */
    private _similarAbort;
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
     * Field-label and option-label translations for the active regional
     * language. `null` until loaded (or when the project has no LANGUAGES
     * regional group). Drives `_localizedMetadataSchema`.
     */
    private _metadataTranslations;
    /** Language `_metadataTranslations` was loaded for (active LANGUAGES variant). */
    private _metadataTranslationsLang;
    /** Monotonic counter to discard stale translation fetches on rapid switches. */
    private _translationsRequestId;
    private _fieldI18nService;
    /** Memo for `_localizedMetadataSchema` keyed by (base schema, translations). */
    private _localizedSchemaCache;
    /**
     * Pre-upload metadata dependencies fetched from the Hub. Drives hide /
     * require / allow_values / set_values for each queued file. Empty array
     * when the project has no rules or when fetch failed (uploader degrades to
     * dep-less behavior).
     */
    private _metadataDependencies;
    /**
     * Once-per-instance guards for the missing-Hub-auth warnings — the preload
     * runs on every config assignment (per parent render with inline config
     * objects in React), and the condition + remedy don't change between runs.
     */
    private _warnedHubSchemaSkip;
    private _warnedHubDepsSkip;
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
    /** True when the user has clicked the "View last upload" pill on the
     *  drop-zone screen. Renders the read-only last-upload-review screen
     *  instead of the normal phase view. */
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
    /**
     * The metadata schema with field titles and select/multi-select option
     * labels swapped to the active-language translations (falling back to the
     * default-language strings). Passed to the rendering components only; all
     * logic keeps using the untranslated `_metadataSchema`. Memoized so repeated
     * renders don't rebuild the localized copy.
     */
    private get _localizedMetadataSchema();
    /**
     * Fetch field-label + option-label translations for the active regional
     * language and store them in `_metadataTranslations` (triggering a re-render
     * with localized labels). No-op when the project has no LANGUAGES regional
     * group, when there's no active language, or when the active language is
     * already loaded. Failures degrade gracefully to default-language labels.
     */
    private _loadMetadataTranslations;
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
    private _metadataSchemaResolveId;
    private _prevStoreState;
    private _unsubStoreEvents;
    /**
     * Relative-folder paths for which `sfx-folder-complete` has already fired
     * during the current upload batch. Cleared at the start of each new batch
     * (isUploading false → true) so the same folder path can fire again if the
     * user uploads it a second time.
     */
    private _firedFolders;
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
    /**
     * Patch `set_values` from firing dependencies onto empty fields. Idempotent
     * — only writes to empty fields.
     *
     * When `targetFileId` is supplied, only that file is re-evaluated (used by
     * the blur cascade — a blur on one file can't change what fires on a
     * different file). Without it, every modifiable file is scanned (used after
     * deps load or after a batch of new files arrives).
     */
    private _applyDependencySetValuesPrefill;
    /**
     * Strip values from fields hidden by a firing dependency on each queued file.
     * Called right before `upload()` hands off to the engine so the API payload
     * doesn't include data for fields the user couldn't even see.
     *
     * No-op when no deps or no schema. Only touches modifiable-status files —
     * fields on already-uploaded files are left alone.
     */
    private _stripHiddenFieldsForUpload;
    private _onFileRename;
    /**
     * Whether users may edit file names in the pre-upload list. Off when the
     * host sets `allowFileRename: false`, and always off under `forceName`
     * (the server overrides the name anyway).
     */
    private get _renameAllowed();
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
    /**
     * Per-file dependency resolution for the preview pane. Returns null when no
     * rules apply, so the form falls back to schema defaults.
     */
    private _resolvedSchemaFor;
    /**
     * Initial `meta` for a newly added file — seeded from
     * `metadataConfig.defaults` (backend-format values under the same keys as
     * `file.meta` / the upload `meta` payload, i.e. `field.key`). Seeded values
     * pre-fill the metadata form and are sent with the upload; the user can
     * still edit them beforehand. Rejected files are not seeded. Cloned per
     * file so nested values (regional maps, arrays) are never shared across
     * files or with the host's config object.
     */
    private _initialFileMeta;
    private get _metadataEnforcing();
    private _firstMissingRequiredFieldKey;
    private get _hasUnfilledRequiredMetadata();
    /**
     * Returns the field key of the first dep-conflict (allow_values / set_values
     * mismatch). The gate blocks uploads while such a value is unresolved, since
     * shipping it would store data the project's rules forbid.
     */
    private _firstConflictedFieldKey;
    private get _hasMetadataConflicts();
    /**
     * Aggregate gate — true when either a required field is empty or a value
     * conflicts with a dep rule. Both ask the user to open the editor, so we
     * combine them behind one boolean and one initial-field for the button to
     * route to.
     */
    private get _hasMetadataIssues();
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
    /**
     * Fire `sfx-folder-complete` for `folder` if every file in it has reached
     * a terminal status. No-op when the folder still has in-flight files, when
     * it has already been announced this batch, or when no file in it succeeded
     * or failed (purely cancelled/rejected — nothing meaningful to announce,
     * mirrors the `onAllComplete` guard).
     */
    private _maybeDispatchFolderComplete;
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
    /** Resolves auth credentials for the embedding endpoint. Returns `null` when
     *  auth hasn't been resolved yet (the caller logs + bails). */
    private _similarityAuth;
    /** Mark a file as no longer in flight. */
    private _similarMarkInactive;
    /** Persist a per-file result (presence = checked → badge renders). */
    private _similarSetResults;
    /**
     * Single (per-tile) check: processes one image independently and
     * accumulatively — clicking several tiles spins them all, no click cancels
     * another, and there is no batch progress banner (that's only for the
     * select-all-and-Check batch).
     */
    private _checkSimilarSingleFile;
    /**
     * Runs the similarity check for the given images and drives the loading UI
     * (per-tile spinner + batch progress banner). Per-image requests run with a
     * concurrency cap of SIMILARITY_CONCURRENCY. Cancellation (via Cancel button
     * or _clearSimilarRun) aborts in-flight requests through an AbortController.
     */
    private _runSimilarityCheck;
    /** Clears only the current run (timers, run/active ids, abort in-flight).
     *  Keeps the persistent checked set so finished images stay marked. Used by
     *  Cancel / Done. */
    private _clearSimilarRun;
    private _onSimilarSearchCancel;
    /** Remove all similarity-check references to a file id (on file removal). */
    private _purgeSimilarState;
    /** Open the similar results for an image (from its tile badge) in the side
     *  panel: switch to its preview and select the "Similar" tab. */
    private _onSimilarOpenResults;
    /** Open a similar asset in a new window. */
    private _openSimilarAsset;
    /** Display name for a similar asset: the filename extracted from its URL
     *  (decoded, query stripped), falling back to the uuid. */
    private _simAssetName;
    /** Meta line for a similar asset card: just the file extension. The BE
     *  response only carries [uuid, score, url] — size/dimensions aren't known. */
    private _simAssetMeta;
    private _onRequireMetadata;
    /** The single completed file the collapsed floating pill can offer a Locate
     *  shortcut for, or `null` when there isn't exactly one. Locating a whole
     *  batch has no meaningful single destination, so multi-file batches locate
     *  per-row on the completed tiles instead. Mirrors the per-row gate: requires
     *  `showLocateButton` and a resolved UUID. */
    private _soleLocatableFile;
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
    /** Shared dismiss handler for X button, backdrop click, Escape */
    private _onModalDismiss;
    private _onCancelUpload;
    private _onMinimize;
    /** Toggle the floating pill between the collapsed bar and the expanded card. */
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
    render(): import('lit').TemplateResult<1>;
    /** Fullscreen image/video overlay. Rendered at the top level (sibling
        of modal-backdrop) so it never inherits a containing block from the
        modal-card on mobile, where modal-card is position:fixed itself and
        its overflow:hidden was clipping the overlay. The toolbar + nav
        buttons are rendered as SIBLINGS of the overlay (not children) so
        their position:fixed always resolves to the viewport, even if some
        ancestor of fs-overlay establishes a containing block on first paint. */
    private _renderFsOverlay;
    /** Right-aligned header controls shown during the uploading / complete phases:
     *  Minimize-to-pill (when enabled) and Close. The standard idle header builds
     *  its own buttons, so this only serves the progress headers. */
    private _renderProgressHeaderActions;
    private _renderInlineHeader;
    private _renderHeader;
    private _dimCache;
    private _getImageDimensions;
    /**
     * Derive the shared outcome model for a batch — icon, title, breakdown
     * summary and segmented-bar shares. Used by both the dialog header (during
     * the uploading / complete phases) and the minimized floating pill so the
     * two never disagree on counts, colour or wording.
     */
    private _batchOutcome;
    private _renderFloatingPill;
    /**
     * One row in the expanded floating card's item list — shared by the failed /
     * active / completed buckets so all three render identically. `t` is threaded
     * in so the row stays a pure function of (file, translator).
     */
    private _renderFloatItem;
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
    /** Files eligible for fullscreen prev/next: images with a previewUrl or
     *  playable videos. Returned newest-first so navigation matches the visual
     *  order of the file grid. Single source of truth — both the overlay's
     *  disabled-arrow state and the actual navigation step read from this. */
    private _getFullscreenNavigableFiles;
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
export {};
//# sourceMappingURL=sfx-uploader.d.ts.map