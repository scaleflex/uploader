# Cloud Connectors — Specification

How the uploader integrates with external cloud storage and social media providers, and how it compares to the previous approach in `js-admin-react-filerobot-v5`.

---

## Supported Providers

| Provider | ID | Type | Auth |
|----------|-----|------|------|
| Google Drive | `google-drive` | OAuth file browser | OAuth 2.0 |
| Dropbox | `dropbox` | OAuth file browser | OAuth 2.0 |
| OneDrive | `onedrive` | OAuth file browser | OAuth 2.0 |
| Box | `box` | OAuth file browser | OAuth 2.0 |
| Instagram | `instagram` | OAuth image browser | OAuth 2.0 |
| Facebook | `facebook` | OAuth image browser | OAuth 2.0 |
| Unsplash | `unsplash` | Search-based browser | None (public API) |

---

## How It Worked in v5 (js-admin-react-filerobot-v5)

The v5 project used **Uppy** (the library sometimes referred to as "appy connectors") — a full-featured file upload framework with per-provider companion plugins:

- **Dependencies**: `@uppy/core`, `@uppy/dashboard`, `@uppy/google-drive`, `@uppy/dropbox`, `@uppy/onedrive`, `@uppy/box`, `@uppy/instagram`, `@uppy/facebook`, `@uppy/unsplash`, `@uppy/companion-client`, `@uppy/tus`, etc.
- **Companion server**: Uppy's `@uppy/companion` protocol — the same server at `https://eu-on-24001.connector.filerobot.com`
- **Architecture**: React components wrapping Uppy's Dashboard plugin; each provider was a separate npm package with its own Uppy plugin class, state management, and UI
- **Bundle cost**: Heavy — Uppy core + dashboard + all provider plugins added significant bundle size (~80-120 KB min+gzip depending on enabled providers)
- **Customization**: Limited — Uppy's opinionated Dashboard UI was hard to theme or deeply customize

---

## How It Works Now

The new uploader has a **custom-built connector system** — no Uppy dependency. It speaks the same Companion server protocol but with our own lightweight client code.

### Architecture

```
User clicks provider source pill/card
  → Lazy-load connector chunk (dynamic import)
  → Render <sfx-provider-browser> or <sfx-search-provider-browser>
  → Check localStorage for cached OAuth token
  → If no token: show "Connect" button → OAuth popup
    → Companion handles OAuth dance with provider
    → Token returned via postMessage → validated → stored in localStorage
  → Browse/search files from provider via Companion API
  → User selects files → clicks "Add Selected"
  → Files added to upload queue with remoteInfo metadata
  → Upload engine routes to companion-upload path:
    → POST to Companion /{provider}/get/{requestPath}
    → Companion downloads from provider, uploads to Filerobot
    → WebSocket for real-time progress tracking
  → Files appear in upload queue with progress
```

### File Structure

```
src/connectors/
  connector.types.ts      — Type definitions (ProviderId, ConnectorConfig, CompanionItem, etc.)
  companion-client.ts     — Stateless HTTP client (getAuthUrl, listFiles, searchProvider, uploadRemoteFile, logout)
  token-store.ts          — localStorage token persistence + OAuth postMessage listener
  provider-registry.ts    — Maps ProviderId → SourceDef with branded SVG icons
  index.ts                — Barrel export

src/components/
  provider-browser.ts     — OAuth-based file browser (Google Drive, Dropbox, OneDrive, Box, Instagram, Facebook)
  search-provider-browser.ts — Search-based browser (Unsplash)

src/engine/
  companion-upload.ts     — Proxy upload via Companion + WebSocket progress
  upload-engine.ts        — Routes to companionUploadFile() when file has remoteInfo
```

### Configuration

```typescript
const uploader = document.querySelector('sfx-uploader');
uploader.config = {
  // ... other config
  connectors: {
    companionUrl: 'https://eu-on-24001.connector.filerobot.com',
    providers: ['google-drive', 'dropbox', 'onedrive', 'box'],
    customSources: [
      {
        id: 'canva',
        label: 'Canva',
        brandHtml: '<span class="brand-ico">...</span>',
        onActivate: (uploader) => { /* custom SDK integration */ },
      },
    ],
  },
};
```

### Companion API Endpoints

All providers use the same endpoint pattern on the Companion server:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/{provider}/connect?state=...` | GET | OAuth authorization URL (opened in popup) |
| `/{provider}/list/{directory}` | GET | List files/folders in a directory |
| `/{provider}/get/{requestPath}` | POST | Proxy upload: download from provider → upload to Filerobot |
| `/{provider}/logout` | GET | Revoke OAuth token |
| `/search/{provider}/list?q={query}` | GET | Search (Unsplash) |
| `/search/{provider}/get/{requestPath}` | POST | Proxy upload for search providers |

**Auth header**: `uppy-auth-token: <token>` (kept for backward compat with Companion server)

### Provider ID Mapping

Internal `ProviderId` maps to Companion URL path segments:

| ProviderId | Companion path |
|------------|---------------|
| `google-drive` | `drive` |
| `dropbox` | `dropbox` |
| `onedrive` | `onedrive` |
| `box` | `box` |
| `instagram` | `instagram` |
| `facebook` | `facebook` |
| `unsplash` | `unsplash` |

### Token Storage

OAuth tokens are persisted in `localStorage` with key prefix `sfx-uploader-token:{provider}`. On 401 from Companion the token is cleared and the auth view is shown again.

### Companion Proxy Upload

Remote files don't use direct URL uploads. The flow is:

1. **POST** to Companion `/{provider}/get/{requestPath}` with body:
   ```json
   {
     "fileId": "abc123",
     "endpoint": "https://api.filerobot.com/{container}/v4/files?folder=/path",
     "headers": { "X-Filerobot-Key": "SASS__..." },
     "httpMethod": "POST",
     "useFormData": true,
     "fieldname": "files[]"
   }
   ```
2. Companion returns `{ "token": "socket-token" }` immediately (async operation)
3. Client connects to WebSocket at `wss://{companionHost}/api/{token}`
4. Receives real-time events: `progress` (bytesUploaded/bytesTotal), `success`, `error`
5. On `success`, the Scaleflex API response is relayed through Companion's WebSocket

### Custom Sources

Beyond built-in providers, integrators can add custom external sources via `connectors.customSources`. Each custom source provides:

- `id`, `label`, `brandHtml` — for UI rendering in the source pills/cards
- `onActivate(uploader: UploaderHandle)` — callback invoked on click; the integrator handles their own UI/SDK and calls `uploader.addFiles()` when ready

This enables third-party SDK integrations (Canva, Figma, etc.) that v5 didn't support cleanly.

---

## Key Differences: v5 (Uppy) vs New Uploader

| Aspect | v5 (Uppy) | New Uploader |
|--------|-----------|-------------|
| **Framework** | Uppy core + per-provider plugins (React) | Custom Lit components, no Uppy dependency |
| **Bundle** | ~80-120 KB min+gzip (Uppy core + dashboard + plugins) | ~12-18 KB min / ~4-6 KB gzip (lazy-loaded) |
| **Loading** | All providers bundled upfront | Lazy-loaded on first connector click (zero cost if unused) |
| **Companion server** | Same (`eu-on-24001.connector.filerobot.com`) | Same — protocol-compatible |
| **OAuth flow** | Uppy companion-client plugin handles popup + token | Custom: `window.open()` popup + `postMessage` + localStorage |
| **File browsing UI** | Uppy Dashboard's provider views | Custom `<sfx-provider-browser>` with breadcrumbs, grid, checkboxes |
| **Search (Unsplash)** | Uppy Unsplash plugin | Custom `<sfx-search-provider-browser>` with infinite scroll |
| **Upload progress** | Uppy managed internally | WebSocket to Companion for real-time progress |
| **Custom sources** | Not supported natively | `customSources` with `onActivate` callback |
| **Theming** | Uppy Dashboard CSS (hard to override) | CSS custom properties (`--sfx-up-*`), fully themeable |
| **Source layout** | Fixed Uppy Dashboard layout | Configurable: `pills` or `cards` layout |
| **Token storage** | Uppy companion-client internal | `localStorage` with `sfx-uploader-token:` prefix |
| **Auth header** | `uppy-auth-token` | `uppy-auth-token` (same — Companion expects it) |

### Why We Moved Away from Uppy

1. **Bundle size** — Uppy added significant weight even when connectors weren't used
2. **Customization** — Uppy's Dashboard was opinionated and difficult to deeply theme or restructure
3. **Control** — Own code means we can fix bugs, add features, and optimize without waiting for upstream releases
4. **Simplicity** — The Companion protocol is straightforward; a thin client is all we need
5. **Custom sources** — Native support for third-party SDK integrations (Canva, Figma) via `onActivate`

---

## Exported Types

The following types are part of the public API (`src/index.ts`):

```typescript
export type ProviderId =
  | 'google-drive' | 'dropbox' | 'onedrive' | 'box'
  | 'instagram' | 'facebook' | 'unsplash';

export interface ConnectorConfig {
  companionUrl: string;
  providers: ProviderId[];
  customSources?: SourceDef[];
}

export interface RemoteFileInfo {
  companionUrl: string;
  provider: ProviderId;
  token: string;
  requestPath: string;
  fileId: string;
  name: string;
  mimeType: string;
  size: number;
  thumbnail: string | null;
}
```

---

## Events

| Event | Detail | Emitted by |
|-------|--------|-----------|
| `connector-files-selected` | `{ files: RemoteFileInfo[] }` | `provider-browser`, `search-provider-browser` |
| `connector-close` | — | `provider-browser`, `search-provider-browser` |
