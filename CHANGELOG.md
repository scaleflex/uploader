# Changelog

All notable changes to `@scaleflex/uploader` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

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

### Fixed

- Dropdown fields (select, multi-select, boolean) closing immediately when clicking options inside Shadow DOM — fixed outside-click detection to use `composedPath()` instead of `e.target`

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
