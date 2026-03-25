---
name: integrate-uploader
description: Integrate @scaleflex/uploader into any project — install, configure auth,
  wire events, theme, and add restrictions. Works with vanilla JS, React, Vue, Angular, Svelte.
user_invocable: true
metadata:
  category: integration
  tags:
  - scaleflex
  - uploader
  - file-upload
  - web-component
  status: ready
  version: 1
---

# Scaleflex Uploader Integration Skill

## When to Use

- User says "add uploader", "integrate uploader", "file upload widget", "upload component"
- User wants to let users upload files to Scaleflex VXP / Filerobot
- User asks how to use `@scaleflex/uploader` in their project

## Step 1 — Detect the Target Framework

Read the project's `package.json` to determine:
- **React** (18+): use the React wrapper (`@scaleflex/uploader/react`)
- **Vue / Angular / Svelte / vanilla JS**: use the Web Component (`@scaleflex/uploader/define`)

## Step 2 — Install

```bash
npm install @scaleflex/uploader
```

`lit` is bundled — no extra peer deps for vanilla JS / Vue / Angular / Svelte.
For React, `react` and `react-dom` (v18+) must already be installed (they're optional peer deps).

### CDN (no bundler)

```html
<script src="https://scaleflex.cloudimg.io/v7/plugins/scaleflex/uploader/0.2.1/sfx-uploader.min.js"></script>
```

This registers `<sfx-uploader>` and all sub-components automatically. Replace `0.2.1` with the desired version.

## Step 3 — Add the Uploader

### Vanilla JS / Web Component

```js
import '@scaleflex/uploader/define';

const uploader = document.querySelector('sfx-uploader')
  || document.createElement('sfx-uploader');
document.body.appendChild(uploader);

uploader.config = {
  auth: {
    mode: 'security-template',
    container: 'YOUR_CONTAINER',
    securityTemplateId: 'SECU_YOUR_TEMPLATE_ID',
  },
};

uploader.addEventListener('sfx-all-complete', (e) => {
  const { successful, failed } = e.detail;
  console.log('Uploaded:', successful.map(f => f.response.file.url.cdn));
});

uploader.open();
```

### React

```tsx
import { useRef } from 'react';
import { Uploader, type UploaderRef } from '@scaleflex/uploader/react';

function MyComponent() {
  const uploaderRef = useRef<UploaderRef>(null);

  return (
    <>
      <button onClick={() => uploaderRef.current?.open()}>Upload files</button>
      <Uploader
        ref={uploaderRef}
        config={{
          auth: {
            mode: 'security-template' as const,
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_YOUR_TEMPLATE_ID',
          },
        }}
        onUploadComplete={(file, response) => {
          console.log('Uploaded:', response.file.url.cdn);
        }}
        onAllComplete={(successful, failed) => {
          console.log(`Done: ${successful.length} ok, ${failed.length} failed`);
        }}
      />
    </>
  );
}
```

**React controlled mode** (open state managed by parent):

```tsx
const [isOpen, setIsOpen] = useState(false);

<Uploader
  config={config}
  open={isOpen}
  onAllComplete={(successful) => { handleFiles(successful); setIsOpen(false); }}
  onCancel={() => setIsOpen(false)}
/>
```

### Vue

```vue
<template>
  <sfx-uploader ref="uploader"></sfx-uploader>
  <button @click="openUploader">Upload files</button>
</template>

<script setup>
import '@scaleflex/uploader/define';
import { ref, onMounted } from 'vue';

const uploader = ref(null);

onMounted(() => {
  const el = uploader.value;
  el.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_YOUR_TEMPLATE_ID',
    },
  };

  el.addEventListener('sfx-all-complete', (e) => {
    console.log('Uploaded:', e.detail.successful);
  });
});

function openUploader() {
  uploader.value?.open();
}
</script>
```

## Step 4 — Authentication

Ask the user which auth mode they need:

### Security template (recommended for client-side)

The uploader auto-exchanges the template ID for a SASS key on init. Safer for client-side code.

```ts
auth: {
  mode: 'security-template',
  container: string,              // Scaleflex container name
  securityTemplateId: string,     // From Scaleflex dashboard (SECU_...)
  airboxPuid?: string,            // Optional: airbox user ID
}
```

### SASS key (direct)

Use when you already have a SASS key (e.g. from your backend or inside Scaleflex Hub).

```ts
auth: {
  mode: 'sass-key',
  container: string,
  sassKey: string,                // X-Filerobot-Key value
  airboxPuid?: string,
}
```

## Step 5 — Configure (Optional)

All options beyond `auth` are optional. Add only what the user needs:

```ts
uploader.config = {
  auth: { /* ... */ },

  // Upload target
  targetFolder: '/user-uploads/',       // Filerobot folder path (default: '/')

  // Display
  mode: 'modal',                        // 'modal' (default) or 'inline'
  headerButton: 'close',                // 'none' | 'close' | 'back'
                                        //   modal default: 'close'
                                        //   inline default: 'none'
                                        //   'back': for wizard/step flows
  sourcesLayout: 'pills',               // 'pills' (default) or 'cards'

  // Upload behavior
  concurrency: 3,                       // Max concurrent uploads (default: 3)
  autoProceed: false,                    // Auto-start upload on file add (default: false)

  // File restrictions
  restrictions: {
    maxFileSize: 10 * 1024 * 1024,       // 10 MB per file
    maxTotalFilesSize: 500 * 1024 * 1024, // 500 MB total
    maxNumberOfFiles: 50,
    minNumberOfFiles: 1,
    allowedFileTypes: ['image/*', 'video/*', 'application/pdf'],
    blockedFileTypes: ['application/exe'],
  },

  // Cloud connectors (Google Drive, Dropbox, etc.)
  connectors: {
    companionUrl: 'https://eu-on-24001.connector.filerobot.com',
    providers: ['google-drive', 'dropbox', 'onedrive', 'box'],
  },

  // UI options
  showFillMetadata: false,               // Show "Fill Metadata" button (default: false)
  clearOnClose: true,                    // Clear files on modal close (default: true)
  clearOnComplete: true,                 // Clear files on "Done" action (default: true)
  rejectedFileAutoRemoveDelay: 4000,     // ms before auto-removing rejected files
                                         // Set to 0 or false to disable
};
```

## Events Reference

All events bubble and cross Shadow DOM (`composed: true`):

| Event | Detail | When |
|---|---|---|
| `sfx-file-added` | `{ file: UploadFile }` | File added to queue |
| `sfx-file-removed` | `{ file: UploadFile }` | File removed from queue |
| `sfx-file-rejected` | `{ file: UploadFile, reason: string }` | File rejected by restrictions |
| `sfx-upload-started` | `{ files: UploadFile[] }` | Upload batch started |
| `sfx-upload-progress` | `{ file: UploadFile, progress: number, speed: number }` | Per-file progress update |
| `sfx-upload-complete` | `{ file: UploadFile, response: UploadResponse }` | Single file uploaded |
| `sfx-upload-error` | `{ file: UploadFile, error: Error }` | Single file failed |
| `sfx-upload-retry` | `{ file: UploadFile, attempt: number }` | File being retried |
| `sfx-all-complete` | `{ successful: UploadFile[], failed: UploadFile[] }` | All files finished |
| `sfx-total-progress` | `{ percentage: number, speed: number, eta: number }` | Aggregate progress |
| `sfx-before-upload` | `{ files: UploadFile[] }` | Before upload starts (cancelable) |
| `sfx-open` | `{}` | Uploader opened |
| `sfx-close` | `{}` | Uploader closed |
| `sfx-cancel` | `{}` | Upload cancelled |
| `sfx-fill-metadata` | `{ files: UploadFile[] }` | "Fill Metadata" button clicked |

## Public Methods

| Method | Returns | Description |
|---|---|---|
| `open()` | `void` | Open the modal |
| `close()` | `void` | Close the modal (respects `clearOnClose`) |
| `upload()` | `void` | Start uploading all queued files |
| `addFiles(files: File[])` | `void` | Programmatically add files |
| `resumeUpload(files?: UploadFile[])` | `void` | Resume paused upload with optional metadata updates |
| `cancelUpload()` | `void` | Cancel active uploads |
| `getFiles()` | `UploadFile[]` | Get snapshot of all files |
| `getFile(fileId)` | `UploadFile \| undefined` | Get single file by ID |
| `updateFileMeta(fileId, meta?, tags?)` | `void` | Update metadata on a queued file |
| `updateFilesMeta(updates)` | `void` | Batch update metadata |

## Config Callbacks (Web Component)

For Web Component usage, callbacks can be passed via `config.callbacks`:

```ts
uploader.config = {
  auth: { /* ... */ },
  callbacks: {
    onFileAdded: (file) => { /* ... */ },
    onAllComplete: (successful, failed) => { /* ... */ },
    onBeforeUpload: (files) => {
      // Return false to cancel the upload
      return true;
    },
    onFillMetadata: (files) => {
      // Called when "Fill Metadata" button is clicked
    },
    onFilePreview: (file) => {
      // Called when a file preview is clicked
    },
    // ... all other callbacks from the Events table
  },
};
```

`onBeforeUpload`, `onFillMetadata`, and `onFilePreview` are only available via `config.callbacks` (not as React props).

## React Wrapper Props

```ts
interface UploaderProps {
  config: UploaderConfig;            // Required
  open?: boolean;                    // Controlled open state

  // All event callbacks (mirror DOM events)
  onFileAdded?: (file: UploadFile) => void;
  onFileRemoved?: (file: UploadFile) => void;
  onFileRejected?: (file: UploadFile, reason: string) => void;
  onUploadStarted?: (files: UploadFile[]) => void;
  onUploadProgress?: (file: UploadFile, progress: number, speed: number) => void;
  onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
  onUploadError?: (file: UploadFile, error: Error) => void;
  onUploadRetry?: (file: UploadFile, attempt: number) => void;
  onAllComplete?: (successful: UploadFile[], failed: UploadFile[]) => void;
  onTotalProgress?: (percentage: number, speed: number, eta: number) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onCancel?: () => void;

  className?: string;
  style?: CSSProperties;
}
```

React ref exposes: `open()`, `close()`, `upload()`, `addFiles()`, `resumeUpload()`, `cancelUpload()`, and `element` (direct Web Component access).

## UploadResponse Shape

```ts
interface UploadResponse {
  status: 'success' | 'error';
  file: {
    uuid: string;
    name: string;
    extension: string;
    type: string;
    size: number;
    url: { public: string; cdn: string };
    meta: Record<string, unknown>;
    tags: string[];
    info: { img_w?: number; img_h?: number };
    created_at: string;
    modified_at: string;
  };
  msg?: string;
}
```

## Theming

Override CSS custom properties on the element or any ancestor. All use `--sfx-up-` prefix:

```css
sfx-uploader {
  /* Colors */
  --sfx-up-primary: #2563eb;
  --sfx-up-primary-hover: #1d4ed8;
  --sfx-up-primary-bg: #eff6ff;
  --sfx-up-success: #16a34a;
  --sfx-up-error: #dc2626;

  /* Text */
  --sfx-up-text: #1e293b;
  --sfx-up-text-secondary: #475569;
  --sfx-up-text-muted: #94a3b8;

  /* Background & borders */
  --sfx-up-bg: #ffffff;
  --sfx-up-surface: #f8fafc;
  --sfx-up-border: #e8edf5;
  --sfx-up-backdrop: rgba(0, 0, 0, 0.45);

  /* Typography & shape */
  --sfx-up-font: 'Inter', system-ui, sans-serif;
  --sfx-up-radius: 16px;
  --sfx-up-max-height: 88vh;
}
```

## Cloud Connectors

Supported providers:

| Provider ID | Service |
|---|---|
| `'google-drive'` | Google Drive |
| `'dropbox'` | Dropbox |
| `'onedrive'` | Microsoft OneDrive |
| `'box'` | Box |
| `'instagram'` | Instagram |
| `'facebook'` | Facebook |
| `'unsplash'` | Unsplash (search-based) |

## Common Patterns

### Image-only uploader

```ts
config = {
  auth: { /* ... */ },
  restrictions: {
    allowedFileTypes: ['image/*'],
    maxFileSize: 5 * 1024 * 1024,
  },
  autoProceed: true,
};
```

### Inline mode (embedded in page)

```ts
config = {
  auth: { /* ... */ },
  mode: 'inline',
};
```

### Step/wizard flow (modal with back button)

```ts
config = {
  auth: { /* ... */ },
  mode: 'modal',
  headerButton: 'back',
  clearOnClose: false,  // preserve files across open/close
};
```

### With cloud connectors

```ts
config = {
  auth: { /* ... */ },
  connectors: {
    companionUrl: 'https://eu-on-24001.connector.filerobot.com',
    providers: ['google-drive', 'dropbox'],
  },
};
```

### Intercept before upload (metadata dialog)

```js
uploader.addEventListener('sfx-before-upload', (e) => {
  e.preventDefault(); // pause upload
  showMetadataDialog(e.detail.files).then((updatedFiles) => {
    uploader.resumeUpload(updatedFiles);
  });
});
```

## Troubleshooting

- **"customElements is not defined"** — SSR environment. The React wrapper handles this automatically. For vanilla JS, guard the import: `if (typeof customElements !== 'undefined') import('@scaleflex/uploader/define');`
- **Styles not showing** — The component uses Shadow DOM; external CSS won't penetrate. Use `--sfx-up-*` CSS custom properties for theming.
- **Auth errors** — Check that the security template ID or SASS key is valid and the container name matches.
- **`open()` does nothing** — `config` must be set before calling `open()`. Ensure `auth` is provided.
- **Files rejected silently** — Check `restrictions` config. Listen to `sfx-file-rejected` for the reason.
