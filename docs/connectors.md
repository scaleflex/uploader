# Cloud Connectors — Implementation Plan

## Context

The uploader needs cloud connector support (Google Drive, Dropbox, OneDrive, Box, Instagram, Facebook, Unsplash) matching what exists in `js-admin-react-filerobot-v5`. The v5 project uses a **Companion server** (`https://eu-on-24001.connector.filerobot.com`) that handles OAuth, file listing, and proxy uploading for all providers. The new uploader (Lit + TypeScript) needs to integrate with this same Companion infrastructure.

**Critical detail**: Remote files don't use simple URL uploads. The flow is: Companion downloads from provider → Companion uploads to Filerobot. This requires a dedicated upload path (POST to Companion with Filerobot endpoint info), not the existing `xhrUploadUrl`.

## Bundle Strategy: Lazy Loading

All connector code is **lazy-loaded via dynamic `import()`** so it adds zero bytes to the core uploader bundle. The connector chunk (~12–18 KB min, ~4–6 KB gzip) is only fetched on first connector click.

```typescript
// In sfx-uploader.ts _onSourceClick:
if (isConnectorSource) {
  const { SfxProviderBrowser } = await import('./components/provider-browser');
  if (!customElements.get('sfx-provider-browser')) {
    customElements.define('sfx-provider-browser', SfxProviderBrowser);
  }
  this._activeConnector = source;
}
```

Vite handles code splitting automatically — no separate package needed.

---

## Architecture

### End-to-End Flow

```
User clicks "Google Drive" pill
  → Lazy-load connector chunk
  → Show <sfx-provider-browser> component
  → Check localStorage for existing OAuth token
  → If no token: show "Connect to Google Drive" button
    → Opens popup to Companion OAuth URL
    → Companion handles OAuth with Google
    → Token returned via postMessage → stored in localStorage
  → Load root folder listing from Companion
  → User browses folders, selects files via checkboxes
  → User clicks "Add Selected"
  → For each file: POST to Companion's /{provider}/get/{requestPath}
    → Companion downloads file from Google Drive
    → Companion uploads file to Filerobot API
    → Returns success/error
  → Files appear in upload queue with progress
```

### Companion API Endpoints

All providers use the same endpoint pattern:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/{provider}/connect?state=...` | GET | OAuth authorization URL (opened in popup) |
| `/{provider}/list/{directory}` | GET | List files/folders in a directory |
| `/{provider}/get/{requestPath}` | POST | Proxy upload: download from provider → upload to Filerobot |
| `/{provider}/logout` | GET | Revoke authorization token |

**Request headers**: `{ 'uppy-auth-token': <token>, 'Content-Type': 'application/json' }`

### Companion Proxy Upload (POST `/{provider}/get/{requestPath}`)

This is the key mechanism. The request body tells Companion where to upload:

```json
{
  "fileId": "abc123",
  "endpoint": "https://api.filerobot.com/{container}/v4/files?folder=/Documents",
  "headers": { "X-Filerobot-Key": "SASS__..." },
  "httpMethod": "POST",
  "useFormData": true,
  "fieldname": "files[]"
}
```

Companion returns `{ "token": "socket-token" }`. The socket token can be used for WebSocket progress tracking (v2 enhancement).

---

## New Files

### `src/connectors/connector.types.ts` — Types

```typescript
type ProviderId = 'google-drive' | 'dropbox' | 'onedrive' | 'box'
                | 'instagram' | 'facebook' | 'unsplash';

interface ConnectorConfig {
  companionUrl: string;        // e.g. 'https://eu-on-24001.connector.filerobot.com'
  providers: ProviderId[];
}

interface CompanionItem {
  id: string;
  name: string;
  mimeType: string;
  isFolder: boolean;
  thumbnail: string | null;
  size: number;
  requestPath: string;
}

interface CompanionListResponse {
  items: CompanionItem[];
  nextPagePath: string | null;
}

interface RemoteFileInfo {
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

### `src/connectors/companion-client.ts` — HTTP Client

Stateless async functions (same pattern as `src/auth/auth.service.ts`):

- `getAuthUrl(companionUrl, provider)` → returns OAuth connect URL string
- `listFiles(companionUrl, provider, token, directory?)` → GET `/{provider}/list/{directory}`
- `uploadRemoteFile(...)` → POST `/{provider}/get/{requestPath}` with Filerobot endpoint + auth headers
- `logout(companionUrl, provider, token)` → GET `/{provider}/logout`

### `src/connectors/token-store.ts` — OAuth Token Storage

- `getToken(provider)` / `setToken(provider, token)` / `removeToken(provider)` — localStorage keyed by `sfx-uploader-token:{provider}`
- `listenForAuthToken(callback)` → attaches `window.message` listener for OAuth popup, validates origin, returns cleanup function

### `src/connectors/provider-registry.ts` — Provider Metadata

Maps `ProviderId` → `SourceDef` (label + SVG brand icon). Exports `getProviderSources(providers)` to merge with `CORE_SOURCES` for the source pills.

### `src/connectors/index.ts` — Barrel Export

### `src/components/provider-browser.ts` — File Browser Component

`<sfx-provider-browser>` Lit component with three views:

1. **Auth view**: "Connect to {Provider}" button → opens OAuth popup → stores token
2. **Browse view**: Breadcrumbs + file/folder list with checkboxes + "Load more" pagination + "Add N files" footer
3. **Error view**: Error message + retry button

**Props**: `provider: ProviderId`, `companionUrl: string`

**Events**: `connector-files-selected` (detail: `RemoteFileInfo[]`), `connector-close`

### `src/engine/companion-upload.ts` — Companion Upload Function

- `companionUploadFile(remoteFile, opts)` → POSTs to Companion proxy endpoint
- Uses `fetch()` (no local file to track upload progress)
- v1: indeterminate progress, fires `onComplete` when Companion responds
- v2 enhancement: WebSocket to `{companionUrl}/api/{token}` for real-time progress

---

## Modified Files

### `src/sfx-uploader.ts`
1. Add `connectors?: ConnectorConfig` to `UploaderConfig`
2. Add `@state() _activeConnector: ProviderId | null`
3. Expand `_onSourceClick` — lazy-load connector module, set `_activeConnector`
4. Add `_onConnectorFilesSelected` handler — creates `UploadFile` entries with `remoteInfo`, triggers companion upload
5. Add `_onConnectorClose` handler
6. In `_renderBody()`: render `<sfx-provider-browser>` when `_activeConnector` is set
7. Merge connector sources into `<sfx-source-pills .sources=${mergedSources}>`

### `src/components/source-pills.ts`
- CSS fix for brand icons that use `fill` instead of `stroke`

### `src/store/store.types.ts`
- Add optional `remoteInfo?: RemoteFileInfo` to `UploadFile`

### `src/engine/upload-engine.ts`
- Add companion upload routing: when `file.remoteInfo` is set, use `companionUploadFile`

### `src/define.ts` / `src/index.ts` / `src/events/public-events.ts`
- Register component, add exports, add `CONNECTOR_AUTH` / `CONNECTOR_FILES_ADDED` events

---

## Implementation Order

1. **Types + companion client + token store** — pure TS, no UI
2. **Provider registry** — SVG icons for each provider
3. **Provider browser component** — auth + file browsing UI
4. **Companion upload path** — `companion-upload.ts` + engine routing
5. **Integration** — wire into sfx-uploader with lazy loading
6. **Polish** — loading states, error handling, logout, empty folders

---

## Key Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Popup blockers | `window.open` must be in synchronous click handler (not after await) |
| Token expiry | 401 from Companion → clear stored token, show auth view again |
| postMessage injection | Validate `event.origin` matches `companionUrl` |
| Brand SVG icons | Use fills — fix source-pills CSS to not force `fill: none` |
| Large file lists | Pagination via `nextPagePath` + "Load more" button |

---

## Verification

1. Run `npx vite`, configure dev page with real credentials
2. Add `connectors: { companionUrl: 'https://eu-on-24001.connector.filerobot.com', providers: ['google-drive'] }` to dev config
3. Click Google Drive pill → auth view → Connect → OAuth popup → authenticated
4. Browse folders, select files, click "Add Selected"
5. Files appear in upload queue and upload via Companion proxy
6. `npx tsc --noEmit` passes clean
