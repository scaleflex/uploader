import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let logEl: HTMLElement | null = null;
const listeners: Array<[string, EventListener]> = [];

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function log(event: string, data?: unknown) {
  if (!logEl) return;
  const time = new Date().toLocaleTimeString();
  const line = document.createElement('div');
  const dataStr = data ? ` <span class="log-data">${escapeHtml(JSON.stringify(data, null, 0))}</span>` : '';
  line.innerHTML = `<span class="log-time">${escapeHtml(time)}</span> <span class="log-event">${escapeHtml(event)}</span>${dataStr}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Event handling</h1>
        <p>The uploader fires events for file additions, upload progress, completion, and errors. Use callback props or DOM event listeners.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Event log</h2>
        <div class="event-log" id="event-log">
          <div><span class="log-time">--:--:--</span> Waiting for events...</div>
        </div>
        <button class="btn-outline btn-sm" id="clear-log">Clear log</button>
      </section>

      <section class="page-section">
        <h2>Callback props</h2>
        <div id="code-callbacks"></div>
      </section>

      <section class="page-section">
        <h2>DOM events</h2>
        <div id="code-events"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    logEl = document.getElementById('event-log');

    renderCodeBlock('#code-callbacks', [
      {
        label: 'JavaScript',
        lang: 'javascript',
        code: `
uploader.config = {
  auth: { /* ... */ },
  callbacks: {
    onFileAdded: (file) => console.log('Added:', file.name),
    onUploadProgress: (file, progress) => {
      console.log(\`\${file.name}: \${progress}%\`);
    },
    onUploadComplete: (file, response) => {
      console.log('Uploaded:', response.file.url.cdn);
    },
    onAllComplete: (ok, failed) => {
      console.log(\`Done: \${ok.length} ok, \${failed.length} failed\`);
    },
  },
};`,
      },
    ]);

    renderCodeBlock('#code-events', [
      {
        label: 'JavaScript',
        lang: 'javascript',
        code: `
// DOM custom events (alternative to callbacks)
uploader.addEventListener('sfx-file-added', (e) => {
  console.log('Added:', e.detail.file.name);
});

uploader.addEventListener('sfx-upload-complete', (e) => {
  console.log('Uploaded:', e.detail.file.name);
});

uploader.addEventListener('sfx-all-complete', (e) => {
  console.log('All done:', e.detail.successful.length, 'ok');
});

uploader.addEventListener('sfx-upload-error', (e) => {
  console.error('Failed:', e.detail.file.name, e.detail.error);
});`,
      },
    ]);

    // Register DOM event listeners
    const events: Array<[string, (e: CustomEvent) => void]> = [
      ['sfx-file-added', (e) => log('sfx-file-added', { name: e.detail.file?.name })],
      ['sfx-file-removed', (e) => log('sfx-file-removed', { name: e.detail.file?.name })],
      ['sfx-file-rejected', (e) => log('sfx-file-rejected', { name: e.detail.file?.name, reason: e.detail.reason })],
      ['sfx-upload-started', (e) => log('sfx-upload-started', { count: e.detail.files?.length })],
      ['sfx-upload-progress', (e) => log('sfx-upload-progress', { name: e.detail.file?.name, progress: e.detail.progress })],
      ['sfx-upload-complete', (e) => log('sfx-upload-complete', { name: e.detail.file?.name })],
      ['sfx-upload-error', (e) => log('sfx-upload-error', { name: e.detail.file?.name, error: e.detail.error?.message })],
      ['sfx-all-complete', (e) => log('sfx-all-complete', { ok: e.detail.successful?.length, failed: e.detail.failed?.length })],
      ['sfx-open', () => log('sfx-open')],
      ['sfx-close', () => log('sfx-close')],
      ['sfx-cancel', () => log('sfx-cancel')],
    ];

    events.forEach(([name, handler]) => {
      const fn = handler as EventListener;
      uploader.addEventListener(name, fn);
      listeners.push([name, fn]);
    });

    document.getElementById('clear-log')!.addEventListener('click', () => {
      if (logEl) logEl.innerHTML = '<div><span class="log-time">--:--:--</span> Log cleared.</div>';
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      log('open');
      uploader.config = buildConfig({
        callbacks: {
          onFileAdded: (file) => log('onFileAdded callback', { name: file.name }),
          onAllComplete: (ok, failed) => log('onAllComplete callback', { ok: ok.length, failed: failed.length }),
        },
      });
      uploader.open();
    });
  },

  destroy() {
    const uploader = document.getElementById('uploader');
    if (uploader) {
      listeners.forEach(([event, fn]) => uploader.removeEventListener(event, fn));
    }
    listeners.length = 0;
    logEl = null;
  },
};

export default page;
