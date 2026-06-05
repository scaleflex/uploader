import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>API</h1>
        <p class="doc-lead">Public methods, events, and the React wrapper API.</p>

        <h2>Public methods</h2>
        <table>
          <thead><tr><th>Method</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>open()</code></td><td>Open the uploader (modal mode) or activate it (inline mode)</td></tr>
            <tr><td><code>close()</code></td><td>Close the modal / deactivate the uploader</td></tr>
            <tr><td><code>addFiles(files: File[])</code></td><td>Programmatically add files to the queue</td></tr>
            <tr><td><code>upload()</code></td><td>Start uploading all queued files</td></tr>
            <tr><td><code>resumeUpload(files?)</code></td><td>Resume uploading failed/cancelled files</td></tr>
            <tr><td><code>cancelUpload()</code></td><td>Cancel all in-progress uploads</td></tr>
            <tr><td><code>pauseFile(fileId: string)</code></td><td>Pause a tus upload (only works for resumable uploads)</td></tr>
            <tr><td><code>resumeFile(fileId: string)</code></td><td>Resume a paused tus upload</td></tr>
            <tr><td><code>getFiles(): UploadFile[]</code></td><td>Get a snapshot of all current files</td></tr>
            <tr><td><code>getFile(fileId: string): UploadFile | undefined</code></td><td>Get a single file by ID</td></tr>
            <tr><td><code>updateFileMeta(fileId, meta?, tags?)</code></td><td>Update metadata and/or tags for a single file</td></tr>
            <tr><td><code>updateFilesMeta(updates)</code></td><td>Batch-update metadata and/or tags for multiple files</td></tr>
          </tbody>
        </table>

        ${code(
          'typescript',
          `const uploader = document.querySelector('sfx-uploader');

// Programmatically add files
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', () => {
  uploader.addFiles(Array.from(input.files));
});

// Start upload
uploader.upload();

// Listen for completion
uploader.addEventListener('sfx-all-complete', (e) => {
  console.log('Successful:', e.detail.successful);
  console.log('Failed:', e.detail.failed);
});`,
        )}

        <h2>Events</h2>
        <p>All events are dispatched on the <code>&lt;sfx-uploader&gt;</code> element with a <code>sfx-</code> prefix.</p>
        <table>
          <thead><tr><th>Event</th><th>Detail</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>sfx-file-added</code></td><td><code>{ file: UploadFile }</code></td><td>A file was added to the queue</td></tr>
            <tr><td><code>sfx-file-removed</code></td><td><code>{ file: UploadFile }</code></td><td>A file was removed from the queue</td></tr>
            <tr><td><code>sfx-file-rejected</code></td><td><code>{ file: UploadFile, reason: string }</code></td><td>A file was rejected (restrictions)</td></tr>
            <tr><td><code>sfx-upload-started</code></td><td><code>{ files: UploadFile[] }</code></td><td>Upload batch started</td></tr>
            <tr><td><code>sfx-upload-progress</code></td><td><code>{ file, progress, speed }</code></td><td>Upload progress update</td></tr>
            <tr><td><code>sfx-upload-complete</code></td><td><code>{ file, response }</code></td><td>A single file upload completed</td></tr>
            <tr><td><code>sfx-upload-error</code></td><td><code>{ file, error }</code></td><td>A single file upload failed</td></tr>
            <tr><td><code>sfx-upload-retry</code></td><td><code>{ file, attempt }</code></td><td>A file upload is being retried</td></tr>
            <tr><td><code>sfx-upload-paused</code></td><td><code>{ file }</code></td><td>A tus upload was paused</td></tr>
            <tr><td><code>sfx-upload-resumed</code></td><td><code>{ file }</code></td><td>A paused tus upload was resumed</td></tr>
            <tr><td><code>sfx-all-complete</code></td><td><code>{ successful, failed }</code></td><td>All uploads finished</td></tr>
            <tr><td><code>sfx-total-progress</code></td><td><code>{ percentage, speed, eta }</code></td><td>Aggregate progress across all files</td></tr>
            <tr><td><code>sfx-open</code></td><td>—</td><td>Uploader was opened</td></tr>
            <tr><td><code>sfx-close</code></td><td>—</td><td>Uploader was closed</td></tr>
            <tr><td><code>sfx-cancel</code></td><td>—</td><td>User cancelled the upload</td></tr>
            <tr><td><code>sfx-before-upload</code></td><td><code>{ files: UploadFile[] }</code></td><td>Fired before upload starts (cancelable via <code>preventDefault()</code>)</td></tr>
            <tr><td><code>sfx-file-preview</code></td><td><code>{ file: UploadFile }</code></td><td>User opened a file preview</td></tr>
            <tr><td><code>sfx-fill-metadata</code></td><td><code>{ files: UploadFile[] }</code></td><td>User clicked "Fill Metadata"</td></tr>
            <tr><td><code>sfx-complete-action</code></td><td><code>{}</code></td><td>User clicked the primary action on the completion screen (e.g. "Done")</td></tr>
            <tr><td><code>sfx-file-locate</code></td><td><code>{ file: UploadFile }</code></td><td>User clicked "Locate" on a completed file tile (requires <code>showLocateButton: true</code>). Cancelable — call <code>event.preventDefault()</code> to suppress the default open of <code>\${adminUrl}/library?lf=…</code>.</td></tr>
            <tr><td><code>sfx-file-copy-cdn</code></td><td><code>{ file, cdnUrl }</code></td><td>User clicked "Copy CDN" and the URL was copied to clipboard (requires <code>showCopyCdnButton: true</code>)</td></tr>
          </tbody>
        </table>

        <h2>Callbacks</h2>
        <p>As an alternative to events, you can use config callbacks:</p>
        ${code(
          'typescript',
          `uploader.config = {
  auth: { /* ... */ },
  callbacks: {
    onFileAdded: (file) => console.log('Added:', file.name),
    onFileRemoved: (file) => console.log('Removed:', file.name),
    onFileRejected: (file, reason) => console.log('Rejected:', reason),
    onUploadStarted: (files) => console.log('Started:', files.length),
    onUploadProgress: (file, progress, speed) => {
      console.log(\`\${file.name}: \${progress}% @ \${speed} B/s\`);
    },
    onUploadComplete: (file, response) => console.log('Done:', file.name),
    onUploadError: (file, error) => console.error('Error:', error),
    onUploadRetry: (file, attempt) => console.log('Retry #' + attempt),
    onAllComplete: (successful, failed) => {
      console.log(\`Done: \${successful.length} ok, \${failed.length} failed\`);
    },
    onTotalProgress: (percentage, speed, eta) => {
      console.log(\`Total: \${percentage}% — ETA \${eta}s\`);
    },
    onBeforeUpload: (files) => {
      // Return false to prevent the upload
      return files.length > 0;
    },
    onOpen: () => console.log('Uploader opened'),
    onClose: () => console.log('Uploader closed'),
    onCancel: () => console.log('Upload cancelled'),
    onFilePreview: (file) => console.log('Preview:', file.name),
    onFillMetadata: (files) => console.log('Fill metadata for', files.length),
    onCompleteAction: () => console.log('User clicked Done'),
    onFileLocate: (file) => console.log('Locate:', file.name),
    onFileCopyCdn: (file, cdnUrl) => console.log('Copied CDN:', cdnUrl),
  },
};`,
        )}

        <h2>React API</h2>
        <p>The React wrapper provides a declarative API with controlled props and callback props.</p>

        <h3>Props</h3>
        <table>
          <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>config</code></td><td><code>UploaderConfig</code></td><td>Configuration object (required)</td></tr>
            <tr><td><code>open</code></td><td><code>boolean</code></td><td>Controlled open state</td></tr>
            <tr><td><code>onFileAdded</code></td><td><code>(file) =&gt; void</code></td><td>File added callback</td></tr>
            <tr><td><code>onFileRemoved</code></td><td><code>(file) =&gt; void</code></td><td>File removed callback</td></tr>
            <tr><td><code>onFileRejected</code></td><td><code>(file, reason) =&gt; void</code></td><td>File rejected by restrictions</td></tr>
            <tr><td><code>onUploadStarted</code></td><td><code>(files) =&gt; void</code></td><td>Upload batch started</td></tr>
            <tr><td><code>onUploadProgress</code></td><td><code>(file, progress, speed) =&gt; void</code></td><td>Progress callback</td></tr>
            <tr><td><code>onUploadComplete</code></td><td><code>(file, response) =&gt; void</code></td><td>Single file complete callback</td></tr>
            <tr><td><code>onUploadError</code></td><td><code>(file, error) =&gt; void</code></td><td>Single file error callback</td></tr>
            <tr><td><code>onUploadRetry</code></td><td><code>(file, attempt) =&gt; void</code></td><td>File retry callback</td></tr>
            <tr><td><code>onUploadPaused</code></td><td><code>(file) =&gt; void</code></td><td>Tus upload paused by user</td></tr>
            <tr><td><code>onUploadResumed</code></td><td><code>(file) =&gt; void</code></td><td>Paused tus upload resumed</td></tr>
            <tr><td><code>onAllComplete</code></td><td><code>(successful, failed) =&gt; void</code></td><td>All uploads finished callback</td></tr>
            <tr><td><code>onTotalProgress</code></td><td><code>(percentage, speed, eta) =&gt; void</code></td><td>Aggregate progress callback</td></tr>
            <tr><td><code>onOpen</code></td><td><code>() =&gt; void</code></td><td>Uploader opened callback</td></tr>
            <tr><td><code>onClose</code></td><td><code>() =&gt; void</code></td><td>Uploader closed callback</td></tr>
            <tr><td><code>onCancel</code></td><td><code>() =&gt; void</code></td><td>Upload cancelled callback</td></tr>
            <tr><td><code>onBeforeUpload</code></td><td><code>(files) =&gt; boolean | void</code></td><td>Fired before upload starts; return <code>false</code> to prevent</td></tr>
            <tr><td><code>onFilePreview</code></td><td><code>(file) =&gt; void</code></td><td>User opened a file preview</td></tr>
            <tr><td><code>onFillMetadata</code></td><td><code>(files) =&gt; void</code></td><td>User clicked "Fill Metadata"</td></tr>
            <tr><td><code>onCompleteAction</code></td><td><code>() =&gt; void</code></td><td>User clicked "Done" on the completion screen</td></tr>
            <tr><td><code>onFileLocate</code></td><td><code>(file) =&gt; void</code></td><td>User clicked "Locate" on a review tile</td></tr>
            <tr><td><code>onFileCopyCdn</code></td><td><code>(file, cdnUrl) =&gt; void</code></td><td>CDN URL copied to clipboard from a review tile</td></tr>
            <tr><td><code>className</code></td><td><code>string</code></td><td>CSS class for the host element</td></tr>
            <tr><td><code>style</code></td><td><code>CSSProperties</code></td><td>Inline styles for the host element</td></tr>
          </tbody>
        </table>

        <h3>Ref methods</h3>
        <p>Access imperative methods via a React ref:</p>
        ${code(
          'tsx',
          `import { useRef } from 'react';
import { Uploader, type UploaderRef } from '@scaleflex/uploader/react';

function App() {
  const ref = useRef<UploaderRef>(null);

  return (
    <>
      <button onClick={() => ref.current?.open()}>Open</button>
      <button onClick={() => ref.current?.upload()}>Upload</button>
      <Uploader ref={ref} config={{ /* ... */ }} />
    </>
  );
}`,
        )}

        ${docNav(
          { href: '#/docs/configuration', label: 'Configuration' },
          { href: '#/docs/theming', label: 'Theming' },
        )}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
