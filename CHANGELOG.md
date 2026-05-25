# Changelog

All notable changes to `@scaleflex/uploader` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

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
  - Locate dispatches `sfx-file-locate` event and `onFileLocate` callback (no longer opens a URL directly — host app controls navigation)
  - Copy CDN copies the CDN URL to clipboard and dispatches `sfx-file-copy-cdn` event and `onFileCopyCdn` callback
- Bulk metadata editing modal — click "Fill Metadata" to open a full-screen overlay for editing metadata across multiple files at once
  - Sidebar field navigator with schema groups, active highlight, and filled/required indicators
  - Operation bar with SET, ADD, DELETE operations (ADD/DELETE available for array fields: multi-select, tags)
  - Per-file table with inline click-to-edit and sortable name column
  - Staged changes with diff-only save (only modified fields are persisted)
  - Select-all / deselect-all with three-state checkbox
- `sfx-metadata-field-edit` dispatcher component for rendering the correct field editor by type
- `sfx-metadata-field-view` read-only value display component

### Changed

- **Breaking:** Last-upload review is now **disabled by default**. Set `lastUploadReview: true` (auto-scoped by `container` + `airboxPuid`) or pass an explicit string ID to enable it. Previously the feature was always on with a single global `sessionStorage` key, causing different airboxes to overwrite each other's review data.
- Required-metadata enforcement is now on by default. `metadataConfig.enforceRequiredBeforeUpload` defaults to `'auto'` (was effectively `false`), and `'auto'` now also enforces when any schema field has `required: 1` or `metadataConfig.requiredFields` is provided — previously it only honored the `force_filling_metadata_on_upload` flag from the API store. Set `enforceRequiredBeforeUpload: false` to opt out.
- Clicking **Upload** with required metadata still missing no longer leaves the button silently disabled. Instead, the bulk metadata editor opens positioned on the first missing required field (Airbox-parity behavior). The "Fill Metadata" button is promoted to primary in this state so the next action is obvious.

### Fixed

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
