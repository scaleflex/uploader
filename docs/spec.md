# Scaleflex Uploader Widget — Product & Technical Specification

> Version: 1.0.0-draft
> Date: 2026-03-09
> Status: Design Phase

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Goals & Non-Goals](#2-goals--non-goals)
3. [Architecture Overview](#3-architecture-overview)
4. [Package Strategy](#4-package-strategy)
5. [Core Upload Engine](#5-core-upload-engine)
6. [Upload Sources](#6-upload-sources)
7. [UI/UX Design](#7-uiux-design)
8. [Authentication](#8-authentication)
9. [API Integration (Filerobot)](#9-api-integration-filerobot)
10. [Web Components Architecture](#10-web-components-architecture)
11. [Framework Integration](#11-framework-integration)
12. [Configuration API](#12-configuration-api)
13. [Event System](#13-event-system)
14. [Theming & Styling](#14-theming--styling)
15. [Animations](#15-animations)
16. [Accessibility](#16-accessibility)
17. [Internationalization](#17-internationalization)
18. [Performance Budget](#18-performance-budget)
19. [Integration Scenarios](#19-integration-scenarios)
20. [Competitive Positioning](#20-competitive-positioning)
21. [Implementation Phases](#21-implementation-phases)
22. [Open Questions](#22-open-questions)

---

## 1. Executive Summary

**What**: A lightweight, framework-agnostic file upload widget purpose-built for Filerobot/Scaleflex. Ships as Web Components with optional framework wrappers.

**Why**: The current upload experience in `js-admin-react-filerobot-v5` is tightly coupled to React/Redux and the full DAM admin. We need a standalone, embeddable uploader that can be dropped into Portals (as a dropdown section), Hub (replacing the pre-metadata upload step), and any third-party integration — with zero framework dependency.

**How**: A plugin-based architecture inspired by FilePond (small core, smooth animations) and Uppy (modular sources, resumable uploads), built with Lit Web Components following the patterns established in `asset-picker`.

**Key differentiators vs. competitors**:
- Purpose-built for Filerobot API (not generic)
- Filerobot folder targeting, metadata, and CDN delivery built-in
- Two-tier packaging: lightweight core vs. full connectors bundle
- FilePond-quality animations with Uppy-level source support
- Web Components for universal framework compatibility

---

## 2. Goals & Non-Goals

### Goals
- **Lightweight core** (<15 KB gzipped) for basic device upload with drag-drop, paste, browse
- **Plugin architecture** for optional sources (Google Drive, Dropbox, webcam, etc.)
- **Full bundle** (<50 KB gzipped) with all first-party plugins
- **Framework-agnostic** via Web Components, with React/Vue wrappers
- **Filerobot-native**: Upload to folders, attach metadata, get CDN URLs back
- **Polished UX**: FilePond-level animations, instant previews, clear progress
- **Resumable uploads** via tus protocol for large files
- **Embeddable anywhere**: modal, inline, dropdown panel, or headless
- **Follow asset-picker patterns**: Lit, custom Store, CSS custom properties, same build pipeline

### Non-Goals
- **Not a DAM browser** — asset-picker handles that; uploader is upload-only
- **Not a file manager** — no rename, move, delete post-upload
- **Not a generic uploader** — Filerobot API is the only target backend
- **No server-side processing UI** — no image editor, video transcoder controls (hand off to Filerobot)
- **No legacy browser support** — modern browsers only (Chrome 90+, Firefox 90+, Safari 15+, Edge 90+)

---

## 3. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    @scaleflex/uploader                       │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                   Uploader Core                       │   │
│  │                                                      │   │
│  │  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │   │
│  │  │  Store    │  │  Queue   │  │  Upload Engine     │  │   │
│  │  │ (State)  │  │ Manager  │  │  (XHR + tus)      │  │   │
│  │  └──────────┘  └──────────┘  └───────────────────┘  │   │
│  │                                                      │   │
│  │  ┌──────────┐  ┌──────────┐  ┌───────────────────┐  │   │
│  │  │Validator │  │  Events  │  │  Plugin Registry   │  │   │
│  │  │(restrict)│  │  (bus)   │  │                    │  │   │
│  │  └──────────┘  └──────────┘  └───────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │   UI Layer (Lit)    │  │    Source Plugins             │  │
│  │                     │  │                              │  │
│  │  <sfx-uploader>     │  │  ┌─────────┐ ┌───────────┐  │  │
│  │  <sfx-drop-zone>    │  │  │ Device  │ │  URL      │  │  │
│  │  <sfx-file-list>    │  │  └─────────┘ └───────────┘  │  │
│  │  <sfx-file-item>    │  │  ┌─────────┐ ┌───────────┐  │  │
│  │  <sfx-progress-bar> │  │  │ Webcam  │ │  Screen   │  │  │
│  │  <sfx-source-pills> │  │  └─────────┘ └───────────┘  │  │
│  │  <sfx-success-card> │  │  ┌─────────┐ ┌───────────┐  │  │
│  │                     │  │  │ G.Drive │ │  Dropbox  │  │  │
│  │                     │  │  └─────────┘ └───────────┘  │  │
│  │                     │  │  ┌─────────┐ ┌───────────┐  │  │
│  │                     │  │  │OneDrive │ │  CSV      │  │  │
│  │                     │  │  └─────────┘ └───────────┘  │  │
│  │                     │  │  ┌─────────┐ ┌───────────┐  │  │
│  │                     │  │  │  Box    │ │ Unsplash  │  │  │
│  │                     │  │  └─────────┘ └───────────┘  │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Framework Wrappers                       │   │
│  │   React (forwardRef)  │  Vue  │  Angular  │  Vanilla │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

External Dependencies:
  ┌────────────────────┐     ┌──────────────────────┐
  │ Filerobot API      │     │ Companion Server     │
  │ (upload, folders,  │     │ (OAuth proxy for     │
  │  metadata, CDN)    │     │  Drive/Dropbox/etc.) │
  └────────────────────┘     └──────────────────────┘
```

### Design Principles

1. **Core is headless** — the upload engine works without any UI; UI is a layer on top
2. **Plugins are lazy** — source plugins loaded on-demand, not bundled in core
3. **State is centralized** — single Store (following asset-picker pattern) drives all UI
4. **Events are the API** — external consumers interact via custom events + methods
5. **Filerobot-first** — API integration is not an afterthought, it's the default

---

## 4. Package Strategy

### Recommendation: Two packages (core + connectors), one repo

```
@scaleflex/uploader              # Core: device upload, drag-drop, paste, URL, progress UI
@scaleflex/uploader-connectors   # Plugins: Google Drive, Dropbox, OneDrive, Box, Webcam, Screen, CSV, Unsplash
```

**Rationale**:
- Core stays lightweight (<15 KB gz) for simple "upload from device" use cases
- Connectors add ~25-35 KB gz but are tree-shakeable — import only what you need
- Single monorepo (like asset-picker, not a multi-package monorepo) keeps things simple
- Connectors depend on core as a peer dependency

**Alternative considered**: Single package with tree-shaking
**Why rejected**: Even with tree-shaking, bundlers often can't eliminate unused Web Component registrations. Two packages guarantee the lightweight path.

### Package Exports

```jsonc
// @scaleflex/uploader
{
  ".":        { "import": "./dist/index.js", "require": "./dist/index.cjs", "types": "./dist/index.d.ts" },
  "./react":  { "import": "./dist/react.js",  "require": "./dist/react.cjs",  "types": "./dist/react.d.ts" },
  "./define": { "import": "./dist/define.js",  "require": "./dist/define.cjs",  "types": "./dist/define.d.ts" },
  "./headless": { "import": "./dist/headless.js", "types": "./dist/headless.d.ts" }
}

// @scaleflex/uploader-connectors
{
  "./google-drive": { "import": "./dist/google-drive.js", "types": "./dist/google-drive.d.ts" },
  "./dropbox":      { "import": "./dist/dropbox.js",      "types": "./dist/dropbox.d.ts" },
  "./onedrive":     { "import": "./dist/onedrive.js",     "types": "./dist/onedrive.d.ts" },
  "./box":          { "import": "./dist/box.js",          "types": "./dist/box.d.ts" },
  "./webcam":       { "import": "./dist/webcam.js",       "types": "./dist/webcam.d.ts" },
  "./screen":       { "import": "./dist/screen.js",       "types": "./dist/screen.d.ts" },
  "./csv":          { "import": "./dist/csv.js",          "types": "./dist/csv.d.ts" },
  "./unsplash":     { "import": "./dist/unsplash.js",     "types": "./dist/unsplash.d.ts" }
}
```

---

## 5. Core Upload Engine

### 5.1 File Lifecycle States

```
IDLE → VALIDATING → QUEUED → PREPARING → UPLOADING → PROCESSING → COMPLETE
                                 │              │
                                 ▼              ▼
                              REJECTED       ERROR ──→ RETRYING ──→ UPLOADING
                                                           │
                                                           ▼
                                                        FAILED (max retries)
```

| State | Description |
|-------|-------------|
| `idle` | File added to UI but not yet validated |
| `validating` | Running restriction checks (type, size, count) |
| `queued` | Passed validation, waiting for upload slot |
| `preparing` | Pre-processing (client-side compression, thumbnail generation) |
| `uploading` | Active upload in progress |
| `processing` | Upload complete, server-side processing (Filerobot generates thumbnails, metadata) |
| `complete` | Fully uploaded and processed; CDN URL available |
| `error` | Upload failed (network, server, validation) |
| `retrying` | Automatic or manual retry in progress |
| `failed` | Max retries exhausted |
| `rejected` | Failed validation (wrong type, too large, etc.) |
| `cancelled` | User cancelled the upload |

### 5.2 Upload Engine (Headless)

The engine works independently of any UI:

```typescript
interface UploaderEngine {
  // Lifecycle
  addFiles(files: FileDescriptor[]): UploadFile[]
  removeFile(id: string): void
  upload(): Promise<UploadResult>
  cancelAll(): void
  retryFile(id: string): void
  retryAll(): void
  pause(): void    // tus only
  resume(): void   // tus only
  destroy(): void

  // State
  getFiles(): UploadFile[]
  getFile(id: string): UploadFile | undefined
  getState(): UploaderState

  // Plugins
  use(plugin: UploaderPlugin): void

  // Events
  on(event: string, handler: Function): void
  off(event: string, handler: Function): void
}
```

### 5.3 Upload Methods

**Standard XHR Upload** (default):
- Multipart form-data POST to Filerobot `/v4/files`
- Concurrent upload limit (configurable, default: 3)
- Per-file progress via XMLHttpRequest `progress` event
- Automatic retry (configurable, default: 3 retries with exponential backoff)

**Resumable Upload via tus** (for large files):
- Activated automatically when file exceeds threshold (configurable, default: 10 MB)
- Uses `tus-js-client` with Filerobot tus endpoints
- Chunk size: 5 MB (configurable)
- Fingerprint-based resume across sessions (IndexedDB)
- Pause/resume support
- Fastest server selection (ping multiple endpoints, pick lowest latency)

**URL Upload** (server-side fetch):
- POST to Filerobot `/v4/files/upload_url` with `files_urls` array
- Server fetches the file — no client bandwidth used
- Progress via polling or WebSocket (if available)

### 5.4 Queue Manager

```typescript
interface QueueConfig {
  concurrency: number        // Max simultaneous uploads (default: 3)
  autoProceed: boolean       // Start upload immediately after adding (default: false)
  retryConfig: {
    maxRetries: number       // Default: 3
    baseDelay: number        // Default: 1000ms
    maxDelay: number         // Default: 30000ms
    backoffFactor: number    // Default: 2
  }
}
```

The queue:
1. Respects concurrency limits
2. Prioritizes retries over new uploads
3. Supports pause/resume of the entire queue
4. Emits batch-level events (all-complete, all-error)

### 5.5 Restrictions & Validation

```typescript
interface UploadRestrictions {
  maxFileSize?: number              // Bytes. Default: null (no limit)
  maxTotalFilesSize?: number        // Bytes. Default: null
  maxNumberOfFiles?: number         // Default: null (unlimited)
  minNumberOfFiles?: number         // Default: null
  allowedFileTypes?: string[]       // MIME types or extensions: ['image/*', '.pdf', 'video/mp4']
  blockedFileTypes?: string[]       // Explicitly blocked: ['.exe', '.bat', '.sh']
}
```

Validation runs in `validating` state before queuing. Failed files transition to `rejected` with a human-readable reason.

### 5.6 Client-Side Pre-Processing

Optional, runs in `preparing` state:

- **Image compression**: Resize/compress images before upload using OffscreenCanvas or canvas
- **EXIF orientation fix**: Auto-rotate based on EXIF data
- **Thumbnail generation**: Create preview thumbnails via `URL.createObjectURL()` for instant display
- **Metadata extraction**: Read EXIF, dimensions, duration (for video/audio)

---

## 6. Upload Sources

### 6.1 Core Sources (included in `@scaleflex/uploader`)

| Source | Trigger | Implementation |
|--------|---------|----------------|
| **My Device** | Click "Browse" button | `<input type="file" multiple>` with configurable `accept` |
| **Drag & Drop** | Drop files on drop zone | HTML5 Drag and Drop API with visual feedback |
| **Paste** | Ctrl+V / Cmd+V | `document.addEventListener('paste')` — handles images from clipboard |
| **URL/Link** | Enter URL in text input | POST to Filerobot `/v4/files/upload_url` |

### 6.2 Connector Sources (in `@scaleflex/uploader-connectors`)

| Source | Auth | Implementation | Companion Required |
|--------|------|----------------|-------------------|
| **Google Drive** | OAuth 2.0 | Google Picker API | Yes |
| **Dropbox** | OAuth 2.0 | Dropbox Chooser or Companion | Yes |
| **OneDrive** | OAuth 2.0 (Microsoft Entra) | Microsoft Graph API | Yes |
| **Box** | OAuth 2.0 | Box Content Picker | Yes |
| **Webcam** | `getUserMedia` permission | MediaDevices API — photo + video | No |
| **Screen Capture** | `getDisplayMedia` permission | Screen Capture API — video | No |
| **CSV Bulk Import** | None | Parse CSV, extract URLs, batch upload | No |
| **Unsplash** | API key | Unsplash API search + download | No |

### 6.3 Companion Server

Third-party cloud sources (Google Drive, Dropbox, OneDrive, Box) require a **Companion server** to handle OAuth flows and proxy file downloads without exposing tokens to the client.

**Current infrastructure**: Filerobot already runs Companion at `https://eu-on-24001.connector.filerobot.com` (and regional variants).

The uploader will connect to Companion via:
```
GET  /companion/{provider}/list?dir=/          # Browse folders
GET  /companion/{provider}/list?dir=/folder    # List files
POST /companion/{provider}/get                 # Initiate server-side download
```

**Remote folder import limits** (matching current js-admin behavior):
- Max 500 files per import
- Max 10 GB total size
- Max 5 folder depth levels

---

## 7. UI/UX Design

### 7.1 Display Modes

The uploader supports three display modes:

**Modal** (default):
```
┌──────────────────────────────────────────┐
│  Upload to Filerobot              [×]    │
│──────────────────────────────────────────│
│                                          │
│  ┌──────────────────────────────────┐    │
│  │         (animated rings)         │    │
│  │         ☁ upload icon            │    │
│  │  Drag & Drop or click to browse  │    │
│  │  Drop files anywhere on this page│    │
│  └──────────────────────────────────┘    │
│                                          │
│  ─────── or import from ───────          │
│                                          │
│  [My Device] [Camera] [URL link]         │
│  [G.Drive] [Dropbox] [Box] [OneDrive]    │
│                                          │
│  ┌──────────────────────────────────┐    │
│  │ file1.jpg  ████████░░  80%      │    │
│  │ file2.png  ██████████ Done      │    │
│  │ file3.pdf  Queued...            │    │
│  └──────────────────────────────────┘    │
│                                          │
│  ┌──────────────────────────────────┐    │
│  │ [Clear] [Add more]    [Upload ⬆]│    │
│  └──────────────────────────────────┘    │
└──────────────────────────────────────────┘
```

**Inline** (embedded in page):
- Same layout without modal chrome
- Fits within a container div
- Useful for dedicated upload pages

**Dropdown** (for Portals integration):
- Compact version that expands from a trigger button
- Popover positioning (similar to `<ap-popover>` in asset-picker)
- File list scrolls within fixed height

**Headless** (no UI):
- Just the engine — bring your own UI
- All state available via Store subscription
- Useful for deep custom integrations

### 7.2 Drop Zone States

```
IDLE:        Animated rings decoration, cloud upload icon,
             "Drag & Drop or click to browse",
             "Drop files anywhere on this page"
DRAG_OVER:   Highlighted border (primary color), ripple animation, "Drop to upload"
PROCESSING:  Files being validated, shimmer animation
UPLOADING:   File list visible, progress bars active
COMPLETE:    Success card displayed (see §7.6)
ERROR:       Error state with retry options
```

The drop zone includes animated concentric ring decorations and a ripple effect on drag-over.
Transitions between states use spring-physics animations (see Section 15).

### 7.3 File List Item

Each file in the list displays:

```
┌──────────────────────────────────────────────┐
│ [thumb]  filename.jpg                   [×]  │
│          2.4 MB • image/jpeg                 │
│          ████████████░░░░░░  67%  1.2 MB/s   │
└──────────────────────────────────────────────┘
```

- **Thumbnail**: Instant preview via `createObjectURL` (images), type icon (other files)
- **File info**: Name (truncated with tooltip), size, MIME type
- **Progress bar**: Animated, shows percentage + speed
- **Status icon**: Queued (clock), uploading (spinner), complete (checkmark), error (warning)
- **Actions**: Remove (×), retry (on error)

### 7.4 Source Pills

Below the drop zone, an "or import from" divider separates the drop zone from a row of source pill buttons:

```
─────────── or import from ───────────

[🖥 My Device] [📷 Camera] [🔗 URL link]
[G.Drive] [Dropbox] [Box] [OneDrive]
```

- Each pill has an icon + label
- Core sources (My Device, Camera, URL) are always visible
- Connector sources (Google Drive, Dropbox, Box, OneDrive) appear when their plugins are registered
- Clicking a pill either triggers the source action directly (e.g., My Device opens file picker) or opens a source-specific panel/modal
- Pills wrap responsively on smaller screens

### 7.5 Actions Bar (Footer)

A persistent footer bar at the bottom of the uploader:

```
┌──────────────────────────────────────────────┐
│ [Clear]                [Add more]  [Upload ⬆]│
└──────────────────────────────────────────────┘
```

- **Clear**: Remove all files from the queue (trash icon)
- **Add more**: Open file picker to add additional files (plus icon)
- **Upload button**: Primary action with three visual states:
  - **Idle**: Upload icon + "Upload"
  - **Uploading**: Spinner + "Uploading…"
  - **Done**: Checkmark + "Done!"
- The actions bar appears once files are added to the queue

### 7.6 Success Card (Post-Upload)

After all files complete, a success card replaces the file list:

```
┌──────────────────────────────────────┐
│            ✓ (checkmark icon)        │
│                                      │
│     Uploaded successfully!           │
│  All files have been uploaded and    │
│  are ready for review.              │
│                                      │
│     [Upload more]  [View in DAM]     │
└──────────────────────────────────────┘
```

- Animated checkmark icon
- Title + descriptive subtitle
- Two actions: "Upload more" (resets to drop zone) and a configurable primary action (e.g., "View in Airbox", "View in DAM")

### 7.7 Folder Picker (Future Phase)

> **Note**: Folder picker is deferred to a later phase. The `targetFolder` is set via configuration only in Phase 1.

Optional inline folder selector for future implementation:

```
📁 Upload to: /Marketing/Campaign-2026  [Change]
```

Clicking "Change" opens a compact folder tree (fetched from Filerobot `/v4/dirs`). Supports:
- Folder browsing with breadcrumb
- Create new folder inline
- Remember last-used folder (localStorage)

---

## 8. Authentication

Two authentication methods, matching Filerobot API:

### 8.1 Security Template (recommended for client-side)

```typescript
{
  auth: {
    mode: 'security-template',
    container: 'my-container',
    securityTemplateId: 'st-xxxx-xxxx',
  }
}
```

- Security template defines allowed operations, IP restrictions, expiration
- Token exchanged via `auth.service.exchangeSassKey()` (same pattern as asset-picker)
- Safe to expose in frontend code
- Template controls: allowed folders, file types, max size, etc.

### 8.2 SASS Key (for server-side / trusted contexts)

```typescript
{
  auth: {
    mode: 'sass-key',
    container: 'my-container',
    sassKey: 'sk-xxxx-xxxx',
  }
}
```

- Direct API key passed as `X-Filerobot-Key` header
- Should only be used in server-side or trusted environments
- Supports automatic renewal on expiration (visibility change detection)

---

## 9. API Integration (Filerobot)

### 9.1 Upload Endpoints

| Action | Method | Endpoint | Body |
|--------|--------|----------|------|
| Upload file | POST | `/v4/files` | `multipart/form-data` with `file`, `dir`, `name`, `meta`, `tags` |
| Upload from URL | POST | `/v4/files/upload_url` | `{ files_urls: [...], dir: "..." }` |
| Upload via tus | POST | tus endpoint | tus protocol headers + binary chunks |
| List folders | GET | `/v4/dirs?dir=/path` | — |
| Create folder | POST | `/v4/dirs` | `{ name: "...", dir: "/parent/" }` |
| Get upload status | GET | `/v4/files/{uuid}` | — |

### 9.2 Upload Request Shape

```typescript
// Standard upload
const formData = new FormData()
formData.append('file', blob, filename)
formData.append('dir', '/target-folder/')
formData.append('name', 'custom-name.jpg')  // optional
formData.append('meta', JSON.stringify({ key: 'value' }))  // optional
formData.append('tags', JSON.stringify(['tag1', 'tag2']))   // optional
formData.append('visibility', 'PUBLIC')  // optional

POST https://api.filerobot.com/{container}/v4/files
Headers:
  X-Filerobot-Key: {sassKey}
  Content-Type: multipart/form-data
```

### 9.3 Upload Response Shape

```typescript
interface FilerobotUploadResponse {
  status: 'success' | 'error'
  file: {
    uuid: string
    name: string
    extension: string
    type: string       // MIME
    size: number
    url: {
      public: string   // CDN URL
      cdn: string
    }
    meta: Record<string, unknown>
    tags: string[]
    info: {
      img_w?: number
      img_h?: number
    }
    created_at: string
    modified_at: string
  }
  msg?: string         // Error message
}
```

### 9.4 API Client

Reuse the `ApiClient` pattern from asset-picker:
- Abstract auth layer (security template vs SASS key)
- 30-second timeout with `AbortController`
- Automatic error parsing
- Geo-replicated endpoint support (matching js-admin's `client-georeplicated.js`)

---

## 10. Web Components Architecture

### 10.1 Technology Stack

Following asset-picker conventions:

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Web Components | **Lit 3** | Same as asset-picker. Minimal (~5KB), great TS, Reactive Controllers |
| Bundler | **Vite 6** | Same as asset-picker. Fast dev, native ESM |
| Language | **TypeScript** | Strict mode, ES2022 target |
| Styling | **CSS-in-JS + CSS Custom Properties** | Shadow DOM encapsulation + external theming |
| State | **Custom Store** | Same pub-sub Store class as asset-picker |

### 10.2 Component Tree

```
<sfx-uploader>                        # Root host component
├── <sfx-uploader-modal>              # Dialog wrapper (when mode=modal)
│   ├── <sfx-uploader-header>         # Title + close button
│   ├── <sfx-uploader-body>           # Main content area
│   │   ├── <sfx-drop-zone>           # Drag-drop area (animated rings, cloud icon, browse)
│   │   ├── <sfx-import-divider>      # "or import from" separator
│   │   ├── <sfx-source-pills>        # Row of source pill buttons
│   │   │   └── <sfx-source-pill>     # Individual pill (icon + label)
│   │   ├── <sfx-source-panel>        # Active source plugin UI (opened by pill click)
│   │   │   ├── <sfx-source-url>      # URL input (core)
│   │   │   ├── <sfx-source-webcam>   # Camera UI (connector)
│   │   │   ├── <sfx-source-screen>   # Screen capture UI (connector)
│   │   │   ├── <sfx-source-drive>    # Google Drive browser (connector)
│   │   │   ├── <sfx-source-dropbox>  # Dropbox browser (connector)
│   │   │   └── ...                   # Other source plugins
│   │   ├── <sfx-file-list>           # Upload queue
│   │   │   └── <sfx-file-item>       # Individual file row (multiple)
│   │   │       └── <sfx-progress-bar># Animated progress
│   │   └── <sfx-success-card>        # Post-upload success view
│   └── <sfx-actions-bar>             # Footer: Clear, Add more, Upload button
│       └── <sfx-upload-button>       # Primary action (idle/uploading/done states)
└── Shared:
    ├── <sfx-icon>                    # SVG icon (reuse Lucide, same as asset-picker)
    ├── <sfx-spinner>                 # Loading indicator
    ├── <sfx-tooltip>                 # Hover tooltip
    └── <sfx-badge>                   # Status badge
```

### 10.3 Element Prefix

Use `sfx-` prefix (Scaleflex) to avoid collision with asset-picker's `ap-` prefix and other libraries.

### 10.4 Controllers

Following asset-picker's Reactive Controller pattern:

| Controller | Purpose |
|------------|---------|
| `StoreController` | Subscribe to Store, trigger re-renders |
| `DragDropController` | Handle drag enter/leave/drop with debouncing |
| `PasteController` | Listen for paste events, extract files/URLs |
| `KeyboardController` | Escape to close, Enter to upload |
| `UploadController` | Bridge between UI and upload engine |

### 10.5 Store Shape

```typescript
interface UploaderState {
  // Config
  config: UploaderConfig

  // Auth
  sassKey: string | null
  isAuthenticated: boolean

  // UI State
  isOpen: boolean
  displayMode: 'modal' | 'inline' | 'dropdown'
  activeSource: string           // 'device' | 'url' | 'webcam' | 'drive' | etc.
  isDragOver: boolean

  // Files
  files: Map<string, UploadFile>
  fileOrder: string[]            // Ordered list of file IDs

  // Upload State
  isUploading: boolean
  isPaused: boolean
  totalProgress: number          // 0-100
  totalSpeed: number             // bytes/sec
  totalETA: number               // seconds

  // Folder
  targetFolder: string           // e.g., '/Marketing/'
  folders: Folder[]              // Cached folder list

  // Completion
  uploadedFiles: FilerobotUploadResponse[]
  errors: UploadError[]

  // Plugins
  registeredSources: SourcePlugin[]
}
```

---

## 11. Framework Integration

### 11.1 React Wrapper

Following asset-picker's pattern exactly:

```typescript
// @scaleflex/uploader/react
import { forwardRef, useRef, useLayoutEffect, useImperativeHandle } from 'react'

export interface UploaderRef {
  open(): void
  close(): void
  upload(): Promise<UploadResult>
  addFiles(files: File[]): void
}

export const Uploader = forwardRef<UploaderRef, UploaderProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null)

  useImperativeHandle(ref, () => ({
    open: () => elementRef.current?.open(),
    close: () => elementRef.current?.close(),
    upload: () => elementRef.current?.upload(),
    addFiles: (files) => elementRef.current?.addFiles(files),
  }))

  useLayoutEffect(() => {
    if (elementRef.current) {
      elementRef.current.config = props.config
    }
  }, [props.config])

  return <sfx-uploader
    ref={elementRef}
    onsfx-upload-complete={props.onComplete}
    onsfx-upload-error={props.onError}
    onsfx-cancel={props.onCancel}
  />
})
```

### 11.2 Vue Wrapper

```typescript
// @scaleflex/uploader/vue (future)
// Thin wrapper that maps props to element properties and events
```

### 11.3 Vanilla JS

```html
<script type="module">
  import '@scaleflex/uploader/define'
  // Optional: import connectors
  import '@scaleflex/uploader-connectors/google-drive'
</script>

<sfx-uploader id="uploader"></sfx-uploader>

<script>
  const uploader = document.getElementById('uploader')
  uploader.config = {
    auth: { mode: 'security-template', container: 'my-container', securityTemplateId: 'st-xxx' },
    targetFolder: '/uploads/',
    restrictions: { maxFileSize: 10 * 1024 * 1024, allowedFileTypes: ['image/*'] }
  }

  uploader.addEventListener('sfx-upload-complete', (e) => {
    console.log('Uploaded:', e.detail.files)
  })

  uploader.open()
</script>
```

---

## 12. Configuration API

```typescript
interface UploaderConfig {
  // --- Authentication (required) ---
  auth: SecurityTemplateAuth | SassKeyAuth

  // --- Display ---
  mode?: 'modal' | 'inline' | 'dropdown'     // Default: 'modal'
  locale?: string                              // Default: 'en'

  // --- Upload behavior ---
  targetFolder?: string                        // Default: '/'
  autoProceed?: boolean                        // Default: false
  allowMultipleUploads?: boolean               // Default: true
  concurrency?: number                         // Default: 3
  tusThreshold?: number                        // Bytes. Default: 10MB. Files above this use tus.
  tusChunkSize?: number                        // Bytes. Default: 5MB

  // --- Restrictions ---
  restrictions?: UploadRestrictions

  // --- Features ---
  showFolderPicker?: boolean                   // Default: true
  showUploadSummary?: boolean                  // Default: true
  enablePaste?: boolean                        // Default: true
  enableDragDrop?: boolean                     // Default: true

  // --- Sources (core) ---
  sources?: {
    device?: boolean | DeviceSourceConfig      // Default: true
    url?: boolean | UrlSourceConfig            // Default: true
  }

  // --- Pre-processing ---
  imageCompression?: {
    enabled: boolean                           // Default: false
    maxWidth?: number
    maxHeight?: number
    quality?: number                           // 0-1
  }

  // --- Retry ---
  retry?: {
    maxRetries?: number                        // Default: 3
    baseDelay?: number                         // Default: 1000
    maxDelay?: number                          // Default: 30000
  }

  // --- Companion (for cloud connectors) ---
  companion?: {
    url?: string                               // Default: Filerobot's companion
    headers?: Record<string, string>
  }

  // --- Pre-upload hook ---
  onBeforeUpload?: (files: PreparedFile[]) => Promise<EnrichedFile[] | false>

  // --- Callbacks (alternative to events) ---
  onComplete?: (result: UploadResult) => void
  onError?: (error: UploadError) => void
  onProgress?: (progress: ProgressInfo) => void
  onFileAdded?: (file: UploadFile) => void
  onCancel?: () => void
}

// --- Pre-upload hook types ---

interface PreparedFile {
  id: string
  name: string
  size: number
  type: string              // MIME type
  blob: File | Blob         // raw file object — host can extract EXIF, generate previews
  preview?: string          // thumbnail data URL (generated by uploader)
  source: string            // 'device' | 'url' | 'google-drive' | etc.
}

interface EnrichedFile extends PreparedFile {
  meta?: Record<string, unknown>                              // custom metadata fields
  tags?: { lang: string; existing?: string[]; new?: string[] }
  info?: { name?: string; description?: string }
}
```

### 12.1 `onBeforeUpload` Hook Behavior

The `onBeforeUpload` hook is an async, batch-level interception point between "user clicks Upload" (after validation passes) and "upload actually starts." It lets host applications inject their own metadata/tagging step without the uploader needing built-in metadata UI.

**Flow:**
1. User clicks "Upload" → validation runs
2. If `onBeforeUpload` is provided, the uploader enters a **waiting state** (spinner overlay, upload button disabled)
3. Hook is called with the full batch of `PreparedFile[]`
4. **Resolves with `EnrichedFile[]`** → upload proceeds, enriched metadata included in the Filerobot API call
5. **Resolves with `false` or rejects** → upload is cancelled, user returns to the file list
6. **Not provided** → upload starts immediately (current default behavior)

**Upload API integration:** Enriched metadata is included in the Filerobot upload request:

```typescript
const formData = new FormData()
formData.append('files[]', file.blob, file.info?.name || file.name)
if (file.meta) formData.append('meta', JSON.stringify(file.meta))
// Tags handled via separate API call post-upload if needed
```

---

## 13. Event System

### 13.1 Public Events (composed, bubble through Shadow DOM)

```typescript
// File lifecycle
'sfx-file-added'          → { file: UploadFile }
'sfx-file-removed'        → { file: UploadFile }
'sfx-file-rejected'       → { file: UploadFile, reason: string }

// Upload lifecycle
'sfx-upload-started'      → { files: UploadFile[] }
'sfx-upload-progress'     → { file: UploadFile, progress: number, speed: number }
'sfx-upload-complete'     → { file: UploadFile, response: FilerobotUploadResponse }
'sfx-upload-error'        → { file: UploadFile, error: Error }
'sfx-upload-retry'        → { file: UploadFile, attempt: number }

// Batch events
'sfx-all-complete'        → { successful: UploadFile[], failed: UploadFile[] }
'sfx-total-progress'      → { percentage: number, speed: number, eta: number }

// Pre-upload hook (cancelable)
'sfx-before-upload'       → { files: PreparedFile[] }  // call e.preventDefault() to pause

// UI events
'sfx-open'                → {}
'sfx-close'               → {}
'sfx-cancel'              → {}
'sfx-minimize'            → { width: number, height: number, mode: 'pill' | 'card' }
'sfx-restore'             → { mode: 'modal' }
'sfx-panel-shown'         → { width: number, height: number, mode: 'pill' | 'card' }
'sfx-source-change'       → { source: string }
'sfx-folder-change'       → { folder: string }
```

**Panel-coexistence hooks** (for hosts that show their own floating progress panel beside the uploader's float card / pill):

- `sfx-panel-shown` fires once on first mount of the floating panel — measure its width to position your own neighbour panel.
- `sfx-minimize` fires every time the float panel appears (manual or `minimizeOnUpload`). Payload mirrors `sfx-panel-shown`.
- `sfx-restore` fires when the float panel is torn down and the modal returns.
- Shift the float panel horizontally / vertically with the `--sfx-up-float-offset-x` and `--sfx-up-float-offset-y` CSS custom properties on `<sfx-uploader>`. Positive values move the panel *inward* from its bottom-right anchor (offset-x adds to `right`, so positive = leftward; offset-y adds to `bottom`, so positive = upward). Setting them via `el.style.setProperty(...)` is mirrored onto the portalled pill automatically. The slide is animated.
- Use `el.getStatus()` to check the current phase (`'empty' | 'ready' | 'uploading' | 'complete'`) before calling `el.dismissPanel()` if you only want to dismiss after completion. `dismissPanel()` closes the panel from *any* state (modal, floating card, pill); mid-upload it cancels the engine and fires `sfx-cancel` before `sfx-close`.

### 13.2 `sfx-before-upload` Event & Imperative API

The `sfx-before-upload` event is the Web Component equivalent of the `onBeforeUpload` callback. It enables DOM-based integrations (where passing async callbacks isn't idiomatic) to pause the upload, collect metadata externally, and then resume or cancel.

**Usage:**

```typescript
const uploader = document.querySelector('sfx-uploader')

uploader.addEventListener('sfx-before-upload', (e) => {
  e.preventDefault() // pauses upload — uploader enters waiting state

  showMetadataUI(e.detail.files).then(enrichedFiles => {
    uploader.resumeUpload(enrichedFiles)
  }).catch(() => {
    uploader.cancelUpload()
  })
})
```

**Imperative API methods:**

| Method | Description |
|--------|-------------|
| `resumeUpload(files: EnrichedFile[])` | Resume a paused upload with enriched files. Upload proceeds with metadata included in the API call. |
| `cancelUpload()` | Cancel a paused upload. Returns user to the file list. |

**Internal mechanism:** Both the `onBeforeUpload` callback and the `sfx-before-upload` event use the same internal pause/resume mechanism. If both are provided, the callback takes precedence.

### 13.3 Internal Events (component-to-component, not composed)

```
drop-zone-enter, drop-zone-leave, drop-zone-drop
file-item-remove, file-item-retry
source-pill-click
upload-more, clear-all
```

---

## 14. Theming & Styling

### 14.1 CSS Custom Properties

Following asset-picker's `--ap-*` pattern, with `--sfx-up-*` prefix:

```css
sfx-uploader {
  /* Colors */
  --sfx-up-primary: oklch(0.65 0.19 258);
  --sfx-up-primary-foreground: #fff;
  --sfx-up-primary-hover: oklch(0.60 0.19 258);
  --sfx-up-background: #fff;
  --sfx-up-foreground: #0f172a;
  --sfx-up-muted: #f1f5f9;
  --sfx-up-muted-foreground: #64748b;
  --sfx-up-border: #e2e8f0;
  --sfx-up-error: #ef4444;
  --sfx-up-success: #22c55e;
  --sfx-up-warning: #f59e0b;

  /* Drop zone */
  --sfx-up-dropzone-border: var(--sfx-up-border);
  --sfx-up-dropzone-border-active: var(--sfx-up-primary);
  --sfx-up-dropzone-bg: var(--sfx-up-muted);
  --sfx-up-dropzone-bg-active: oklch(0.65 0.19 258 / 0.05);

  /* Progress bar */
  --sfx-up-progress-bg: var(--sfx-up-muted);
  --sfx-up-progress-fill: var(--sfx-up-primary);
  --sfx-up-progress-height: 4px;

  /* Typography */
  --sfx-up-font-family: inherit;
  --sfx-up-font-size-sm: 0.75rem;
  --sfx-up-font-size-base: 0.875rem;

  /* Spacing & Shape */
  --sfx-up-radius: 0.5rem;
  --sfx-up-radius-sm: 0.25rem;

  /* Modal */
  --sfx-up-modal-max-width: 640px;
  --sfx-up-modal-max-height: 80vh;
  --sfx-up-modal-backdrop: rgba(0, 0, 0, 0.5);
}
```

### 14.2 Dark Mode

Automatic via `prefers-color-scheme` or manual via `data-theme="dark"` attribute:

```css
sfx-uploader[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  sfx-uploader:not([data-theme="light"]) {
    --sfx-up-background: #0f172a;
    --sfx-up-foreground: #f8fafc;
    --sfx-up-muted: #1e293b;
    --sfx-up-border: #334155;
    /* ... */
  }
}
```

### 14.3 Brand Color Propagation

For Portals/Hub integration, accept a `brandColor` property that auto-derives the color system:

```typescript
config = {
  brandColor: '#6366f1'  // Automatically derives primary, hover, active, etc.
}
```

---

## 15. Animations

### 15.1 Philosophy

FilePond's #1 differentiator is animation quality. We should match or exceed it:

- **Spring-physics** for natural motion (no linear easing)
- **Staggered entrances** for file list items (50ms delay per item)
- **Smooth progress** bars (interpolated, not jumpy)
- **Micro-interactions**: hover states, button presses, icon transitions

### 15.2 Implementation

Use **Web Animations API** (WAAPI) + CSS transitions:

```typescript
// Spring-physics interpolation for file list enter/exit
const springKeyframes = [
  { transform: 'translateY(20px) scale(0.95)', opacity: 0 },
  { transform: 'translateY(-2px) scale(1.01)', opacity: 1, offset: 0.7 },
  { transform: 'translateY(0) scale(1)', opacity: 1 },
]

element.animate(springKeyframes, {
  duration: 400,
  easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  fill: 'forwards',
})
```

### 15.3 Key Animations

| Element | Enter | Exit | Interaction |
|---------|-------|------|-------------|
| Drop zone | Fade in | Fade out | Pulse on drag-over |
| File item | Spring slide-in from bottom | Slide out + fade | Hover lift |
| Progress bar | Width transition (smooth) | Color shift on complete | — |
| Status icon | Scale pop | — | Spin (uploading), bounce (complete) |
| Modal | Scale + fade (200ms) | Scale down + fade | — |
| Source pills | Hover scale + lift | Press scale-down | — |
| Success card | Scale + fade in | — | — |
| Actions bar | Slide up from bottom | — | — |
| Error shake | — | — | Horizontal shake (3 oscillations) |

### 15.4 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 16. Accessibility

### 16.1 Requirements (WCAG 2.1 AA)

- **Keyboard navigation**: All interactive elements reachable via Tab, activated via Enter/Space
- **Focus management**: Modal traps focus; focus returns to trigger on close
- **Screen reader announcements**: Live regions for upload progress and status changes
- **ARIA roles**: `role="button"` on drop zone, `role="progressbar"` with `aria-valuenow`
- **Color contrast**: All text meets 4.5:1 ratio; UI elements meet 3:1
- **Touch targets**: Minimum 44x44px

### 16.2 Specific Patterns

```html
<!-- Drop zone -->
<div role="button" tabindex="0" aria-label="Upload files. Drag and drop or press Enter to browse.">

<!-- File item -->
<div role="listitem" aria-label="file.jpg, 2.4 megabytes, uploading, 67 percent complete">

<!-- Progress -->
<div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">

<!-- Live region for announcements -->
<div aria-live="polite" class="sr-only">3 files added. Upload started.</div>
```

---

## 17. Internationalization

### 17.1 Approach

Locale strings passed via config, with English defaults:

```typescript
config = {
  locale: 'en',
  strings: {
    // Override any string
    'dropzone.title': 'Drop files here',
    'dropzone.subtitle': 'or click to browse',
    'button.upload': 'Upload',
    'button.cancel': 'Cancel',
    'status.uploading': 'Uploading...',
    'status.complete': 'Complete',
    'status.error': 'Upload failed',
    // ...
  }
}
```

### 17.2 Built-in Locales

Ship with English. Additional locales can be contributed or loaded:

```typescript
import { fr } from '@scaleflex/uploader/locales/fr'

config = { locale: 'fr', strings: fr }
```

---

## 18. Performance Budget

| Metric | Target | Rationale |
|--------|--------|-----------|
| Core JS (gzipped) | <15 KB | Competitive with FilePond (21 KB) |
| Core + all UI (gzipped) | <25 KB | Without connectors |
| Full bundle with all connectors | <50 KB | Matches Uppy Dashboard + common plugins |
| First paint (modal open) | <100ms | Perceived instant |
| Time to interactive | <200ms | After modal opens |
| Memory per 100 files | <20 MB | Thumbnails use ObjectURLs, revoked after display |
| Concurrent uploads | 3 (configurable) | Balances speed vs. browser connection limits |

### 18.1 Bundle Optimization

- **Lit** as peer dependency (not bundled) — ~5 KB shared with asset-picker
- **tus-js-client** lazy-loaded only when tus upload is triggered
- **Connector plugins** each in separate entry point — no dead code
- **Icons** as inline SVG templates (no icon font)
- **No runtime CSS framework** — Tailwind compiled at build time

---

## 19. Integration Scenarios

### 19.1 Portals — Dropdown Upload Section (Tags-Only Hook)

```typescript
// In Portals, render as a dropdown panel attached to an "Upload" button
import '@scaleflex/uploader/define'

const uploader = document.createElement('sfx-uploader')
uploader.config = {
  auth: { mode: 'security-template', container: 'my-container', securityTemplateId: 'SECU_XXX' },
  mode: 'dropdown',
  targetFolder: '/portals/campaign-assets/',
  restrictions: { allowedFileTypes: ['image/*', 'video/*'] },
  sources: { device: true, url: true },
  onBeforeUpload: async (files) => {
    // Portals only needs tags — show a simple tag picker
    const tags = await showTagPicker()
    if (!tags) return false // user cancelled
    return files.map(f => ({ ...f, tags }))
  },
}

// Attach to a trigger button
document.getElementById('upload-btn').addEventListener('click', () => {
  uploader.open()
})

uploader.addEventListener('sfx-all-complete', (e) => {
  refreshAssetList()
  uploader.close()
})
```

### 19.2 Hub — Replace Pre-Metadata Upload (Full Metadata Hook)

```typescript
// In Hub, render inline replacing the current upload step.
// Metadata UI lives in Hub (js-admin), NOT in the uploader.
// The onBeforeUpload hook bridges the two: uploader pauses,
// Hub shows its MetadataTab / FormTagsField, then resumes.
import { Uploader } from '@scaleflex/uploader/react'
import '@scaleflex/uploader-connectors/google-drive'
import '@scaleflex/uploader-connectors/dropbox'
import '@scaleflex/uploader-connectors/webcam'

function HubUploadStep({ folder, projectMetadataModel, requiredFields, onUploaded }) {
  return (
    <Uploader
      config={{
        auth: { mode: 'security-template', container: 'my-container', securityTemplateId: 'SECU_XXX' },
        mode: 'inline',
        targetFolder: folder,
        showFolderPicker: true,
        onBeforeUpload: async (files) => {
          // Show Hub's existing metadata dialog (MetadataTab, FormTagsField, etc.)
          const result = await showMetadataDialog(files, {
            metadataModel: projectMetadataModel,
            requiredFields,
          })
          if (result.cancelled) return false
          return result.enrichedFiles
        },
      }}
      onComplete={(result) => onUploaded(result.files)}
    />
  )
}
```

### 19.3 Third-Party Website — Simple Widget (with Optional Pre-Upload Event)

```html
<!-- CDN usage for quick integration -->
<script type="module" src="https://cdn.scaleflex.com/uploader/latest/define.js"></script>

<sfx-uploader
  id="my-uploader"
  style="--sfx-up-primary: #6366f1;"
></sfx-uploader>

<button onclick="document.getElementById('my-uploader').open()">
  Upload Files
</button>

<script>
  const uploader = document.getElementById('my-uploader')

  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'my-container',
      securityTemplateId: 'st-xxxx',
    },
    targetFolder: '/user-uploads/',
  }

  // Optional: intercept upload to add metadata via DOM event
  uploader.addEventListener('sfx-before-upload', (e) => {
    e.preventDefault() // pause upload

    // Show your own metadata form, then resume or cancel
    myMetadataForm.show(e.detail.files).then(enriched => {
      uploader.resumeUpload(enriched)
    }).catch(() => {
      uploader.cancelUpload()
    })
  })

  uploader.addEventListener('sfx-all-complete', (e) => {
    const urls = e.detail.successful.map(f => f.response.file.url.cdn)
    console.log('Uploaded CDN URLs:', urls)
  })
</script>
```

### 19.4 Combined with Asset Picker

```typescript
// Use uploader + asset-picker together: user can upload new OR pick existing
import '@scaleflex/uploader/define'
import '@scaleflex/asset-picker/define'

// "Upload New" button → opens uploader
// "Choose Existing" button → opens asset-picker
// Both return Filerobot file references
```

---

## 20. Competitive Positioning

### How We Compare

| Capability | Us | FilePond | Uppy | Uploadcare |
|------------|-----|----------|------|------------|
| Bundle (core) | **<15 KB** | 21 KB | 25 KB | ~40 KB |
| Filerobot integration | **Native** | None | None | None |
| Cloud sources | **Via connectors** | None | Via Companion | Built-in |
| Animations | **Spring-physics** | Spring-physics | Basic | Moderate |
| Web Components | **Yes (Lit)** | No | No (Preact) | Yes |
| Framework wrappers | **React, Vue** | React, Vue, Angular, Svelte | React, Vue | React, Vue |
| Resumable uploads | **tus (auto)** | Manual config | tus | Proprietary |
| DAM integration | **Folder picker, pre-upload hook** | None | None | None |
| Cost | **Free (MIT)** | Free (MIT) | Free (MIT) | $25+/mo |
| Headless mode | **Yes** | No | Yes | No |

### Our Unique Value

1. **Zero-config Filerobot upload** — point at a container, get CDN URLs back
2. **Smallest core** with full DAM awareness (folders, pre-upload metadata hook)
3. **Same tech as asset-picker** — consistent look/feel, shared Lit dependency
4. **Two-tier packaging** — lightweight for simple, full-featured for complex
5. **Embeddable anywhere** — modal, inline, dropdown, headless

---

## 21. Implementation Phases

### Phase 1: Core Foundation (2-3 weeks)
- [ ] Project setup: Vite, Lit, TypeScript, build pipeline (mirror asset-picker)
- [ ] Store + state management
- [ ] Upload engine (XHR to Filerobot `/v4/files`)
- [ ] File validation and restriction checks
- [ ] `<sfx-uploader>`, `<sfx-drop-zone>`, `<sfx-source-pills>`, `<sfx-file-list>`, `<sfx-file-item>`
- [ ] `<sfx-actions-bar>` with 3-state upload button, clear, add more
- [ ] `<sfx-success-card>` post-upload view
- [ ] Drag & drop + browse + paste support
- [ ] Progress tracking (per-file + total)
- [ ] Basic modal display mode
- [ ] Auth: security template + SASS key
- [ ] React wrapper
- [ ] CSS custom properties theming

### Phase 2: Polish & Upload URL (1-2 weeks)
- [ ] Spring-physics animations (file add/remove, progress, states)
- [ ] URL source (text input + server-side fetch)
- [ ] Error handling + retry logic (auto + manual)
- [ ] Success card (post-upload view)
- [ ] Folder picker (browse + create) — deferred, config-only for now
- [ ] Dark mode
- [ ] Accessibility audit (keyboard, ARIA, screen reader)
- [ ] Inline + dropdown display modes

### Phase 3: Resumable Uploads (1-2 weeks)
- [ ] tus integration (`tus-js-client`)
- [ ] Auto-switch based on file size threshold
- [ ] Pause/resume support
- [ ] Fastest server selection
- [ ] Cross-session resume via IndexedDB fingerprints
- [ ] Chunked upload progress

### Phase 4: Connectors Package (2-3 weeks)
- [ ] Plugin registration system
- [ ] Source pills UI
- [ ] Webcam source (photo + video capture)
- [ ] Screen capture source
- [ ] Google Drive source (via Companion)
- [ ] Dropbox source (via Companion)
- [ ] OneDrive source (via Companion)
- [ ] CSV bulk import source
- [ ] Unsplash source

### Phase 5: Advanced Features (1-2 weeks)
- [ ] Client-side image compression (pre-upload)
- [ ] `onBeforeUpload` hook + `sfx-before-upload` event + `resumeUpload`/`cancelUpload` imperative API
- [ ] Waiting state UI (spinner overlay while hook is pending)
- [ ] Enriched metadata inclusion in Filerobot upload request
- [ ] Batch operations (select all, remove all, retry all)
- [ ] I18n with locale loading
- [ ] Vue wrapper
- [ ] CDN distribution (publish to npm + Scaleflex CDN)

### Phase 6: Integration & Testing (1-2 weeks)
- [ ] Integration into Portals (dropdown mode)
- [ ] Integration into Hub (inline mode, replace existing upload step)
- [ ] E2E tests (Playwright)
- [ ] Unit tests (Vitest)
- [ ] Performance benchmarking against budget
- [ ] Documentation site

---

## 22. Open Questions

### Architecture
1. **Should connectors be in the same repo or a separate repo?** Recommendation: Same repo with separate build entry points (simpler maintenance). Can split later if needed.
2. **Should we share components with asset-picker?** E.g., `<sfx-icon>`, `<sfx-spinner>`, `<sfx-tooltip>`. Could extract to `@scaleflex/ui-primitives`. Or just duplicate — they're small.
3. **Companion server**: Use existing Filerobot Companion infrastructure or deploy a separate one? Recommendation: Use existing.

### UX
4. **`onBeforeUpload` timeout?** Should the uploader enforce a timeout on the `onBeforeUpload` hook (e.g., 5 minutes) to prevent indefinite waiting states? Recommendation: No built-in timeout — the host app controls this. The uploader shows a "Cancel" button in the waiting state so users can bail out manually.
5. **Max file count default**: Should there be a default limit? Recommendation: No limit by default, configurable.
6. **Auto-proceed**: Should files upload immediately on add, or wait for "Upload" button click? Recommendation: Default to manual (`autoProceed: false`), configurable.

### Technical
7. **tus endpoint**: What's the current Filerobot tus endpoint URL pattern? Need to confirm with backend team.
8. **WebSocket progress**: js-admin uses WebSocket for real-time progress. Should we support this? Recommendation: Yes, with XHR `progress` event as fallback.
9. **Filerobot API version**: Targeting v4. Is there a v5 planned that we should account for?
10. **Security template scope**: Can security templates restrict upload folder paths? Need to verify to avoid client-side-only enforcement.

### Business
11. **License**: MIT (like asset-picker and FilePond) or proprietary?
12. **npm scope**: `@scaleflex/uploader` (consistent with asset-picker)?
13. **CDN hosting**: Host on Scaleflex CDN for `<script>` tag usage?

---

## Appendix A: Learnings from Existing Projects

### From js-admin-react-filerobot-v5
- Upload orchestrator pattern (state machine) is solid — adopt for our engine
- Redux upload slice structure maps well to our Store approach
- `uploadFilesData` pattern (storing Blobs outside Redux) is important — Blobs shouldn't be in Store
- Companion integration patterns for cloud sources are proven
- XHR upload service with rate-limited queue works well
- WebSocket progress fallback to XHR events is a good pattern
- SASS key renewal on visibility change prevents stale auth

### From asset-picker
- Lit + custom Store + Reactive Controllers = clean, minimal architecture
- CSS custom properties with `--ap-*` prefix = easy theming
- React wrapper with `forwardRef` + `useImperativeHandle` = clean integration
- `display: contents` on host element = transparent composition
- Dual ESM/CJS output with conditional exports = broad compatibility
- Staggered animation via CSS custom properties (`--ap-stagger-index`) = elegant
- IntersectionObserver for scroll-based loading = efficient
- `composedPath()` for cross-Shadow-DOM event handling = necessary for complex interactions

### From FilePond (competitor)
- Spring-physics animations create a premium feel — invest in this
- Plugin system keeps core small — our two-package approach achieves this
- CSS custom properties for theming — already planned
- Compact/circle display variants are nice for constrained spaces — consider for dropdown mode

### From Uppy (competitor)
- Headless mode is essential for custom UIs — include from day one
- Crash recovery (Golden Retriever) is unique — consider for Phase 5
- i18n with 30+ locales — start with string injection, add locale packs over time
- Companion server pattern for OAuth — leverage existing Filerobot infrastructure

---

## Appendix B: File Upload UX Best Practices

1. **Always provide both drag-drop AND click-to-browse** — never only one
2. **Full-page drop target** detection (not just the drop zone) reduces missed drops
3. **Instant preview** via `URL.createObjectURL()` — no server round-trip needed
4. **Per-file progress bars** (not just global) — users want individual status
5. **Speed + ETA display** for large files reduces anxiety
6. **Optimistic UI**: Show file in list immediately, upload in background
7. **Per-file retry** on error — don't lose other successful uploads
8. **Clear error messages**: "File too large (10 MB limit)" not "Upload failed"
9. **Mobile-first**: Camera as primary source, large touch targets (44px min), client-side compression
10. **Paste support** for screenshots — surprisingly common workflow
11. **Remember last folder** in localStorage — reduces repetitive navigation
12. **Batch operations**: Select all, remove all, retry all failed
13. **Chunked/resumable by default** for files over 5-10 MB
14. **Progress bar animation** should be smooth (interpolated), not jumpy (raw events)
15. **Success state** should provide actionable next steps (copy URLs, upload more, done)
