import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';
import { initCustomSelects } from '../../lib/custom-select';

let sizeThreshold = 10;
let chunkSize = 5;
let enabled = true;
let minimizeOnUpload = false;

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  const tusBlock = enabled
    ? `
  tusConfig: {
    sizeThreshold: ${sizeThreshold} * 1024 * 1024, // ${sizeThreshold} MB
    chunkSize: ${chunkSize} * 1024 * 1024,          // ${chunkSize} MB chunks
  },`
    : `
  // tusConfig not set — all uploads use standard XHR`;
  const minimizeBlock = minimizeOnUpload ? `
  minimizeOnUpload: true,  // show "Minimize & continue in background" button` : '';
  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `uploader.config = {
  auth: { /* ... */ },${tusBlock}${minimizeBlock}
};`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `import { Uploader } from '@scaleflex/uploader/react';

<Uploader
  config={{
    auth: { /* ... */ },${enabled ? `
    tusConfig: {
      sizeThreshold: ${sizeThreshold} * 1024 * 1024,
      chunkSize: ${chunkSize} * 1024 * 1024,
    },` : ''}${minimizeOnUpload ? `
    minimizeOnUpload: true,` : ''}
  }}
  onUploadPaused={(file) => console.log('Paused:', file.name)}
  onUploadResumed={(file) => console.log('Resumed:', file.name)}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Resumable upload (tus)</h1>
        <p>
          Enable chunked, resumable uploads via the
          <a href="https://tus.io" target="_blank" rel="noopener">tus protocol</a>
          for large files. Uploads can be paused, resumed, and even survive page refreshes.
        </p>
      </div>

      <section class="page-section">
        <div class="config-controls" style="flex-direction: column; align-items: stretch; gap: 16px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <input type="checkbox" id="tus-enabled" checked
              style="width: 18px; height: 18px; margin: 0; cursor: pointer; accent-color: var(--sf-primary); flex-shrink: 0;" />
            <label for="tus-enabled"
              style="font-size: 14px; font-weight: 500; color: var(--sf-text-primary); cursor: pointer; margin: 0;">Enable resumable upload</label>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <input type="checkbox" id="minimize-on-upload"
              style="width: 18px; height: 18px; margin: 0; cursor: pointer; accent-color: var(--sf-primary); flex-shrink: 0;" />
            <label for="minimize-on-upload"
              style="font-size: 14px; font-weight: 500; color: var(--sf-text-primary); cursor: pointer; margin: 0;">Show "Minimize &amp; continue in background" button</label>
          </div>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <div class="form-group" id="threshold-group" style="margin-bottom: 0; min-width: 200px;">
              <label for="threshold-select">Size threshold</label>
              <select id="threshold-select">
                <option value="0">0 MB (always use tus)</option>
                <option value="5">5 MB</option>
                <option value="10" selected>10 MB (default)</option>
                <option value="50">50 MB</option>
                <option value="100">100 MB</option>
              </select>
            </div>
            <div class="form-group" id="chunk-group" style="margin-bottom: 0; min-width: 200px;">
              <label for="chunk-select">Chunk size</label>
              <select id="chunk-select">
                <option value="1">1 MB</option>
                <option value="2">2 MB</option>
                <option value="5" selected>5 MB (default)</option>
                <option value="10">10 MB</option>
              </select>
            </div>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>How it works</h2>
        <ul>
          <li>Files <strong>larger</strong> than the size threshold are uploaded via tus (chunked &amp; resumable).</li>
          <li>Files <strong>smaller</strong> than the threshold use standard XHR (fast, single request).</li>
          <li>During a tus upload you can <strong>pause</strong> and <strong>resume</strong> individual files with the buttons on each tile.</li>
          <li>Upload fingerprints are stored in IndexedDB so an interrupted upload can <strong>resume across page refreshes</strong>.</li>
          <li>The uploader automatically <strong>pauses on network loss</strong> and resumes when connectivity returns.</li>
        </ul>
      </section>

      <section class="page-section">
        <h2>TusConfig options</h2>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>sizeThreshold</code></td><td><code>number</code></td><td><code>10485760</code> (10 MB)</td><td>Files &ge; this size (bytes) use tus. Set to <code>0</code> to always use tus.</td></tr>
            <tr><td><code>chunkSize</code></td><td><code>number</code></td><td><code>5242880</code> (5 MB)</td><td>Size of each upload chunk in bytes.</td></tr>
            <tr><td><code>endpoint</code></td><td><code>string</code></td><td>Companion URL</td><td>Override the tus server endpoint.</td></tr>
            <tr><td><code>resumable</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Persist upload fingerprints for cross-session resume.</td></tr>
            <tr><td><code>parallelChunks</code></td><td><code>number</code></td><td><code>1</code></td><td>Number of chunks uploaded in parallel.</td></tr>
            <tr><td><code>retryDelays</code></td><td><code>number[]</code></td><td><code>[0, 1000, 3000, 5000]</code></td><td>Retry delays in ms after a chunk fails.</td></tr>
          </tbody>
        </table>
      </section>

      <section class="page-section">
        <h2>Pause &amp; resume events</h2>
        <table>
          <thead><tr><th>Event / Callback</th><th>Detail</th></tr></thead>
          <tbody>
            <tr><td><code>sfx-upload-paused</code> / <code>onUploadPaused</code></td><td>Fired when a file upload is paused. <code>{ file }</code></td></tr>
            <tr><td><code>sfx-upload-resumed</code> / <code>onUploadResumed</code></td><td>Fired when a paused upload resumes. <code>{ file }</code></td></tr>
          </tbody>
        </table>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    enabled = true;
    sizeThreshold = 10;
    chunkSize = 5;
    minimizeOnUpload = false;
    updateCode();
    const cleanupSelects = initCustomSelects();

    const enabledCheckbox = document.getElementById('tus-enabled') as HTMLInputElement;
    const minimizeCheckbox = document.getElementById('minimize-on-upload') as HTMLInputElement;
    const thresholdGroup = document.getElementById('threshold-group')!;
    const chunkGroup = document.getElementById('chunk-group')!;

    enabledCheckbox.addEventListener('change', () => {
      enabled = enabledCheckbox.checked;
      thresholdGroup.style.opacity = enabled ? '1' : '0.4';
      chunkGroup.style.opacity = enabled ? '1' : '0.4';
      updateCode();
    });

    minimizeCheckbox.addEventListener('change', () => {
      minimizeOnUpload = minimizeCheckbox.checked;
      updateCode();
    });

    document.getElementById('threshold-select')!.addEventListener('change', (e) => {
      sizeThreshold = Number((e.target as HTMLSelectElement).value);
      updateCode();
    });

    document.getElementById('chunk-select')!.addEventListener('change', (e) => {
      chunkSize = Number((e.target as HTMLSelectElement).value);
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      const cfg = buildConfig({
        ...(enabled
          ? {
              tusConfig: {
                sizeThreshold: sizeThreshold * 1024 * 1024,
                chunkSize: chunkSize * 1024 * 1024,
              },
            }
          : {}),
        ...(minimizeOnUpload ? { minimizeOnUpload: true } : {}),
      });
      uploader.config = cfg;
      uploader.open();
    });

    page.destroy = () => cleanupSelects();
  },
};

export default page;
