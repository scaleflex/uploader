# Changelog

All notable changes to `@scaleflex/uploader` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Sizing CSS custom properties so hosts can enlarge (or shrink) the modals without forking styles:
  - `--sfx-up-modal-max-width` — main uploader modal max width (default `1100px`).
  - `--sfx-up-bulk-modal-width` — bulk metadata edit modal width (default `980px`).
  - `--sfx-up-bulk-modal-height` — bulk metadata edit modal height (default `82vh`).
  - Existing `--sfx-up-max-height` (main modal height, default `88vh`) and `--sfx-up-content-max-width` (inner content max width, default `1600px`) are documented in the README alongside these. The bulk modal continues to clamp to `calc(100vw - 40px)` / `calc(100vh - 40px)` so it never overflows the viewport.
- Coexistence hooks for hosting apps that show their own floating progress panel alongside the uploader's float card / pill:
  - `--sfx-up-float-offset-x` / `--sfx-up-float-offset-y` CSS custom properties — additive offset (in px) applied to the float panel's bottom-right anchor. Positive `offset-x` adds to `right` (so the panel moves *leftward*); positive `offset-y` adds to `bottom` (so the panel moves *upward*). Default `0px`. Setting them via `el.style.setProperty(...)` on `<sfx-uploader>` is mirrored onto the portalled pill via a MutationObserver. The slide is animated (0.25s ease).
  - `sfx-panel-shown` public event — fires once on first mount of the floating panel (pill/card), payload `{ width, height, mode: 'pill' | 'card' }` so the host can measure the neighbour it needs to make room for.
  - `sfx-minimize` event now carries `{ width, height, mode }` of the floating panel (was empty `{}`).
  - `sfx-restore` event now carries `{ mode: 'modal' }` so the host knows the float has been torn down.
  - `getStatus(): 'empty' | 'ready' | 'uploading' | 'complete'` — read the current upload phase, e.g. to decide whether dismissing the panel would cancel in-flight uploads. Exposed as `UploaderStatus` / `UploaderPhase` type from the package entry and on the React `UploaderRef`.
  - `dismissPanel()` — close the panel from any visible state (modal, floating card, pill). Cancels in-flight uploads and fires `sfx-cancel` before `sfx-close` if called mid-upload. Honors the `clearOnClose` config the same way `close()` does. Exposed on the React `UploaderRef`.
- `tusConfig.jsonBase` config option — overrides the host that serves `/json/{fileId}` after a tus upload completes (the post-upload metadata fetch). When omitted, defaults to `{connectors.companionUrl}/json`, then to the hardcoded `eu-on-24001` fallback. Pair with `tusConfig.endpoint` when pinning tus to a non-default connector that uses a different host for the JSON metadata endpoint.
- "Already uploaded" handling for duplicate content. When the backend reports that
  identical content already exists in the target directory
  (`code: "SAME_ASSET_EXISTS_SKIP_UPLOAD"`), the upload is now treated as a
  **success** instead of showing the red "Upload failed" card. The pre-existing
  asset's `existing_file_uuid` is mapped into `response.file.uuid`, so `onUploadComplete`
  / `sfx-upload-complete` fire normally with the existing asset reference. A neutral
  "Already uploaded" note is shown on the file tile and a summary line on the success
  card. Applies to all upload paths (direct file, URL import, and cloud connectors).
- `connectors.coreSources` config option — allowlist of built-in sources to render in the More menu. When omitted, all four core sources (`device`, `url`, `camera`, `screen-cast`) are shown; set e.g. `coreSources: ['device', 'url']` to hide Camera and Screen capture.
- `forceName` config option — forces every uploaded file to be saved under a fixed name in `targetFolder`, overwriting any existing file with the same name. Translates to `&opt_force_name=…` on the upload request and works across every source (local file, URL import, Google Drive, Unsplash, tus). Implicitly clamps `restrictions.maxNumberOfFiles` to `1` and disables multi-select. Use for single-asset slots like watermarks, default images, or folder icons. Accepts a string or a thunk for per-session derivation.
- `getUploadParams` config option — appends arbitrary query parameters (typically Filerobot `opt_*` flags) to every upload request. Called per file just before its request is sent and merged into the URL of whichever upload path runs (XHR, URL, tus, or Companion). Wins on key collision against `forceName`.
- `transformRemoteThumbnail` config option — host apps with restrictive CSPs (e.g. Hub allowing only `*.filerobot.com` / `*.cloudimg.io`) can rewrite thumbnail URLs into a CSP-allowed proxy URL before they're rendered. Applies to URL imports (`source: 'url-import'`), connector listings (`source: 'connector'`, Google Drive / Unsplash / …), and the post-upload preview swap (`source: 'cdn-complete'`) for projects whose CDN uses a custom CNAME outside the host CSP allowlist.
- Internationalisation (i18n) support via i18next — all UI strings are now translatable
  - `locale` config option accepts any BCP 47 locale string (e.g. `'fr'`, `'de'`, `'en-US'`); defaults to `navigator.language`
  - Translations loaded lazily from Wordplex CDN; English defaults used as fallback when a key is not yet translated
  - Missing-key debug helper: set `localStorage.sfxUploaderTranslationsMissingKeysEnabled = 'true'` to log untranslated keys to the console
  - `scripts/extract-i18n-keys.mjs` — static extractor that generates `up-keys.json` for submission to the Wordplex TMS grid

- Configurable "Locate" and "Copy CDN" buttons on review-screen file tiles — hidden by default, opt-in via `showLocateButton` and `showCopyCdnButton` config options
  - Locate dispatches `sfx-file-locate` event and `onFileLocate` callback, then opens the resolved Locate URL in a new tab when one is configured (via `adminUrl` or `getLocateUrl`). Call `event.preventDefault()` on `sfx-file-locate` to suppress the auto-navigation and handle it yourself.
  - Copy CDN copies the CDN URL to clipboard and dispatches `sfx-file-copy-cdn` event and `onFileCopyCdn` callback
- `adminUrl` config option — base URL of the Filerobot admin / DAM app used to build the default Locate target. The uploader navigates to `${adminUrl}/library?lf=<base64(uuid)>`, the same deep-link the admin uses internally to scroll to and select a file in its library tree. Works for both freshly-uploaded files and "already in library" duplicates (both expose `response.file.uuid`). Defaults to `window.location.origin` (correct when the uploader is embedded inside the admin itself); set explicitly for cross-origin embeds, custom domains, or whitelabel deployments.
- Bulk metadata editing modal — click "Fill Metadata" to open a full-screen overlay for editing metadata across multiple files at once
  - Sidebar field navigator with schema groups, active highlight, and filled/required indicators
  - Operation bar with SET, ADD, DELETE operations (ADD/DELETE available for array fields: multi-select, tags)
  - Per-file table with inline click-to-edit and sortable name column
  - Staged changes with diff-only save (only modified fields are persisted)
  - Select-all / deselect-all with three-state checkbox
- `sfx-metadata-field-edit` dispatcher component for rendering the correct field editor by type
- `sfx-metadata-field-view` read-only value display component

### Changed

- Floating panel per-file rows now show a "Locate" icon button next to the success checkmark for completed files when `showLocateButton: true` is configured and the response carries a `uuid`. Clicking it fires the same `sfx-file-locate` event / `onFileLocate` callback (cancelable) and opens the resolved Locate URL — matching the existing Locate action on review tiles, so users can deep-link to the asset in the admin DAM without expanding back to the review screen.
- **URL import flow rerouted through the Companion connector** to match the legacy Hub uploader. Previously the uploader POSTed `{ files_urls: [{ url, name }] }` directly to `{apiBase}/v4/files`, letting the Filerobot API fetch the remote URL server-side. The new path mirrors the legacy Hub: POST `{companionUrl}/url/meta` to resolve the file's real size/name/type, then POST `{companionUrl}/url/get` which returns a WebSocket token used to stream progress and the final response from the connector. Benefits: accurate progress totals (the old path had a `size: 0` placeholder until completion), accurate `type` resolution from server-side content sniffing, and consistent behavior with cloud-provider uploads which already used Companion. **Requires `connectors.companionUrl` to be configured** — the "URL link" source pill is now hidden when it isn't, since there's nothing for the dialog to talk to.
- **Tus uploads now follow `connectors.companionUrl` for endpoint routing.** When `tusConfig` is enabled but `tusConfig.endpoint`/`tusConfig.jsonBase` aren't explicitly set, both default to `{companionUrl}/files` and `{companionUrl}/json` instead of the hardcoded `eu-on-24001` host. This means Hub-style region-optimal connector routing (the "fastest connector" logic Hub uses to pick e.g. `connector-p003-fr-ov-rbx8.airstore.scal3fl3x.com` per project) now flows through to large-file resumable uploads — previously a Hub project would correctly route cloud-provider uploads to its assigned connector but still hit `eu-on-24001` for tus chunks and the post-upload JSON fetch. Explicit overrides on `tusConfig.endpoint`/`jsonBase` still win, and the `eu-on-24001` fallback remains as the last resort when no companionUrl is configured at all.
- Removed the 60-second timeout on direct XHR uploads (`xhrUploadFile`). Large file uploads on slow connections were being killed before completing — the timeout originated from an early conservative default and never aligned with how long real-world Filerobot uploads can take. All upload paths (XHR, tus, Companion URL, Companion cloud-provider) now run as long as the network and server allow, matching the legacy Hub behavior. Network errors and abort still fire onError immediately; only the artificial wall-clock ceiling is gone.
- **Breaking:** Last-upload review is now **disabled by default**. Set `lastUploadReview: true` (auto-scoped by `container` + `airboxPuid`) or pass an explicit string ID to enable it. Previously the feature was always on with a single global `sessionStorage` key, causing different airboxes to overwrite each other's review data.
- Required-metadata enforcement is now on by default. `metadataConfig.enforceRequiredBeforeUpload` defaults to `'auto'` (was effectively `false`), and `'auto'` now also enforces when any schema field has `required: 1` or `metadataConfig.requiredFields` is provided — previously it only honored the `force_filling_metadata_on_upload` flag from the API store. Set `enforceRequiredBeforeUpload: false` to opt out.
- Clicking **Upload** with required metadata still missing no longer leaves the button silently disabled. Instead, the bulk metadata editor opens positioned on the first missing required field (Airbox-parity behavior). The "Fill Metadata" button is promoted to primary in this state so the next action is obvious.
- `integer-list` metadata fields are now treated as unsupported during upload (same as `ultratags`, `taxonomy-node`, `asset-attachments`, `attachments-assets`). They render the read-only "Not editable during upload" placeholder and are excluded from bulk operations — users can edit them in the asset library after ingest.

### Fixed

- Success card (and any other size readout) no longer renders `"NaN undefined"` instead of the uploaded file size. Recent Filerobot `/v4/files` responses ship `size` as a structured `{ bytes, pretty }` object rather than a plain number, but `handleComplete` was assigning the object straight into `UploadFile.size` — the total-size reduce on the success card then string-concatenated `0 + {object}` into `"0[object Object]"`, which `formatFileSize` could not parse. The completion handler now extracts `.bytes` when the response uses the structured shape and falls back to the numeric shape for older endpoints (and the synthesized same-asset response). `formatFileSize` also gained a non-finite guard so any future stray `NaN` / `undefined` falls back to `"0 B"` rather than rendering literally.
- Decimal (`decimal2`) and Number (`numeric`) metadata fields no longer accept the exponent characters `e` / `E`. `<input type="number">` natively allows them, which previously meant users could type values like `"34e"` (caught only on blur for decimal2 by the regex check) or `"34e2"` on a numeric field (which silently parsed as `3400` and passed both the `isFinite` and `isInteger` checks). The number field now blocks `e`/`E` at keydown; post-blur validation remains as a backstop.
- Removing an in-progress file mid-upload no longer leaves the overall progress stuck (e.g. the float card showing "3 of 3 complete" but the bar frozen at 11% and never transitioning to "Done"). Cancelling a file via the engine and deleting it from the store did not trigger a recompute, so `totalProgress` / `isUploading` remained based on the pre-removal file set. The engine now exposes a `recompute()` hook that `_removeFile` calls after the file is removed, refreshing the aggregate totals and re-evaluating completion. Coupled fix: the ALL_COMPLETE detection previously relied on cancelled files staying in the store to suppress the event — the per-file remove flow violated that assumption, so `sfx-all-complete` / `onAllComplete` would now spuriously fire with empty arrays when the user removed the last in-flight file. ALL_COMPLETE is now also suppressed when neither successful nor failed has any entries (nothing meaningful to announce).
- GPU-bound lag / "frozen" UI / step-by-step cursor reported on Chrome + macOS (especially Apple Silicon with 4K Retina displays, worsening across tabs and over time, only resolved by a laptop reboot or toggling Chrome's graphics acceleration). Root cause: heavy use of `backdrop-filter: blur()` across modal backdrops, drop-zone source pills/cards, per-file overlay buttons, fullscreen preview controls, and bulk-metadata overlays — every blurred surface forced the GPU compositor to allocate a device-pixel-sized texture and re-blur it each paint, with the cost scaling 4× on Retina and accumulating per tab. Combined with a permanent `will-change: transform, opacity` on every file tile (which kept each tile's compositor layer alive indefinitely), the GPU process retained an unbounded number of large surfaces. All `backdrop-filter` rules have been removed and the always-on `will-change` hint dropped; backgrounds keep their existing colors with negligible visual change (modal dim layers retain their `rgba(0,0,0,0.45)` overlay; drop-zone source pills move from translucent white to solid white over the white panel they sit on; bulk-metadata overlays bump alpha by 0.05 to compensate for the lost blur softening; fullscreen preview controls keep their original white-translucent look). The Uploader now renders entirely on the compositor fast path on high-DPI displays.
- Thumbnails for device / camera / screen / paste uploads no longer flash the Filerobot "Missing origin image" placeholder right after upload. Their local `blob:` preview (always renderable and CSP-safe) is now kept instead of being swapped to the just-uploaded `cdn` URL, which can serve a placeholder until processing/caching catches up. URL imports and cloud-connector previews (remote http origins a host CSP may block) are still swapped to a server URL as before.
- Clicking anywhere in the modal body (outside the visual drop-zone widget) no longer opens the OS file picker. The clickable browse area is now scoped to the visual drag-and-drop widget only; the full modal area continues to accept drag-and-drop events.
- Google Drive connector now enforces single-file selection when `forceName` is set or `restrictions.maxNumberOfFiles: 1` is configured — previously users could select multiple files regardless. The "Select all" button is also hidden in single-select mode.
- HEIC/HEIF files are no longer incorrectly rejected when `allowedFileTypes: ['image/*']` is configured. Browsers report an empty MIME type for these formats; the uploader now infers the correct type from the file extension before validation. File previews are intentionally omitted for HEIC/HEIF since browsers cannot render them natively.
- Upload button is now disabled when all added files have been rejected by `allowedFileTypes` or other restrictions, rather than remaining active with no uploadable files.
- Upload progress overlay ("Uploading N files") no longer counts rejected or cancelled files toward the total, so the displayed count matches the number of files actually being uploaded.
- Total file size shown in the actions bar no longer includes rejected files.
- Required-metadata enforcement was a no-op for every Hub project: the schema parser typed `MetadataField.required` as `0 | 1` and every consumer compared with strict `=== 1`, but the Hub `/project/{uuid}` endpoint actually returns it as a JSON boolean. Switched to truthy checks (via a new `isFieldRequired` helper) and broadened the type to `boolean | 0 | 1`. The asterisk indicator now renders correctly, and clicking Upload with a missing required field now opens the bulk editor as intended.
- Dropdown fields (select, multi-select, boolean) closing immediately when clicking options inside Shadow DOM — fixed outside-click detection to use `composedPath()` instead of `e.target`
- Success-card and file-list thumbnails for URL-imported / connector-imported files no longer break under host CSPs that disallow the original origin — once the upload completes, `previewUrl` is automatically swapped to a server URL from the upload response. Preference order: `permalink` (canonical `api.filerobot.com/.../v4/get/{uuid}` — always `*.filerobot.com`, the most stable choice), then `cdn_permalink`, then `cdn` (which may be a project's custom CNAME like `qa-hub.scaleflex-cloud.com` that the host CSP doesn't allow). Hosts with tighter CSPs can also rewrite the chosen URL through `transformRemoteThumbnail` with `source: 'cdn-complete'`.

## [0.2.0] - 2026-03-22

### Added

- Cards layout for import-from sources (`sourcesLayout: 'cards'`) — responsive grid of square cards with large icons
- Video thumbnail generation from first frame
- Configurable `header` option (`'close'`, `'back'`, `true`, `false`)
- Screen capture source
- Prev/next navigation arrows on preview image
- Custom dropdown selects replacing native selects with preview panel scroll
- Clear files on modal close so next open starts fresh
- Asset count label and total file size display in upload view
- Extended drag-and-drop to entire body when drop zone is compact

### Changed

- Design polishing: normalized CSS tokens, aligned with UIKit design system
- Preview panel redesigned: inline tags, two-column metadata table, fullscreen zoom
- Uploader max-width set to 912px
- File grid widened to 440px for two-column layout in preview mode
- Responsive source pills on mobile viewports
- Paddings normalized to 24px throughout body and asset count

### Fixed

- Drag-and-drop adding files twice
- File restrictions: proper counting, rejected styling, auto-dismiss
- Duplicate file errors and Done button in non-modal mode
- Done badge appearing on non-uploaded files
- File tile borders
- Fullscreen zoom and scroll issues
- Various logic bugs, config options, and accessibility improvements

### Removed

- Canva SDK integration

## [0.1.0] - 2026-03-18

Initial release.

### Added

- `<sfx-uploader>` web component built with Lit 3 and Shadow DOM
- Reactive store-based state management with centralised file collection (Map-based for O(1) lookups)
- Modal and inline display modes
- Drag & drop zone with animated ring feedback
- Clipboard paste support for file uploads
- URL upload dialog for importing files from direct HTTP links
- Webcam capture dialog (photo and video via MediaRecorder API)
- Screen capture dialog for recording screen content
- Native file picker via device source
- File queue with thumbnail previews, progress bars, and status indicators
- Source pill buttons for switching between upload sources
- Concurrent upload queue with configurable concurrency (default: 3)
- Auto-proceed mode — start uploading as soon as files are added
- Retry logic with exponential backoff for failed uploads
- Per-file and aggregate progress tracking with speed and ETA calculations
- File validation: type, size, total size, and file count restrictions
- Per-file metadata and tag management (`updateFileMeta`, `updateFilesMeta`)
- "Fill metadata" button support for external metadata workflows
- Post-upload success card with file details
- Abort and cancel operations for individual and batch uploads
- Cloud provider connectors via Companion proxy server:
  - Google Drive
  - Dropbox
  - OneDrive
  - Box
  - Instagram
  - Facebook
  - Unsplash
- OAuth token management with `localStorage` caching for cloud providers
- Provider browser UI with folder navigation and file selection
- Custom source plugin architecture (`connectors.customSources`)
- Two authentication modes: security template and SASS key
- SASS key exchange for security template mode
- Auth header generation and API base URL derivation
- 20+ custom DOM events (`sfx-*`) with `bubbles` and `composed` for shadow DOM crossing
- Config-based callback alternative (`UploaderCallbacks`) for all events
- Cancelable `sfx-before-upload` event to intercept and prevent uploads
- React wrapper with `forwardRef` support, controlled `open` prop, and imperative ref methods
- CSS custom properties theming with `--sfx-up-*` prefix
- Package exports: `.`, `./react`, `./define`
- Vite 6 library build (ESM + CJS) with TypeScript declarations
- Full TypeScript type exports for all public APIs
