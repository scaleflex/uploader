import type { Page } from '../../lib/router';
import type { SfxUploader, UploaderConfig } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';
import { initCustomSelects } from '../../lib/custom-select';

type UploadSettingsObject = Exclude<UploaderConfig['uploadSettings'], false | undefined>;
type UploadDefaults = NonNullable<UploadSettingsObject['defaults']>;
type Resolution = 'auto' | 'mobile' | 'tablet' | 'desktop' | 'hq' | 'sample';

const RESOLUTION_LABELS: Record<Resolution, string> = {
  auto: 'Auto',
  mobile: 'Mobile',
  tablet: 'Tablet',
  desktop: 'Desktop',
  hq: 'HQ',
  sample: 'Sample',
};

let panelEnabled = true;
let showResumableSwitcher = false;
let resize = false;
let maxWidth: number | undefined;
let maxHeight: number | undefined;
let transcode = false;
let resolution: Resolution = 'auto';
let resumable = false;

function buildDefaults(): UploadDefaults {
  const defaults: UploadDefaults = {};
  if (resize) {
    defaults.resize = true;
    if (maxWidth != null) defaults.maxWidth = maxWidth;
    if (maxHeight != null) defaults.maxHeight = maxHeight;
  }
  if (transcode) {
    defaults.transcode = true;
    defaults.resolution = resolution;
    defaults.protocol = 'hls';
  }
  if (resumable) defaults.resumable = true;
  return defaults;
}

function buildUploadSettings(): UploaderConfig['uploadSettings'] | undefined {
  if (!panelEnabled) return false;
  const defaults = buildDefaults();
  const hasDefaults = Object.keys(defaults).length > 0;
  if (!showResumableSwitcher && !hasDefaults) return undefined;
  const out: UploadSettingsObject = {};
  if (showResumableSwitcher) out.showResumableSwitcher = true;
  if (hasDefaults) out.defaults = defaults;
  return out;
}

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const us = buildUploadSettings();

  let snippet: string;
  if (us === false) {
    snippet = `
// Disable the Upload settings panel — the gear icon never appears.
uploader.config = {
  auth: { /* ... */ },
  uploadSettings: false,
};`;
  } else if (us === undefined) {
    snippet = `
// The settings panel is available by default — no config needed.
// The gear icon appears in the header once the queue contains an
// image, PDF, or video, opening the panel with built-in defaults.
uploader.config = {
  auth: { /* ... */ },
};`;
  } else {
    const lines: string[] = [];
    if (us.showResumableSwitcher) lines.push(`    showResumableSwitcher: true,`);
    if (us.defaults) {
      const defaultsBody = Object.entries(us.defaults)
        .map(([k, v]) => `      ${k}: ${typeof v === 'string' ? `'${v}'` : v},`)
        .join('\n');
      lines.push(`    defaults: {\n${defaultsBody}\n    },`);
    }
    snippet = `
// Seed the panel's starting values and optionally expose the
// resumable (tus) switcher (mirrors admin v5's behavior).
uploader.config = {
  auth: { /* ... */ },
  uploadSettings: {
${lines.join('\n')}
  },
};`;
  }

  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: snippet,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Upload settings</h1>
        <p>The uploader ships with a built-in <strong>settings panel</strong> — a gear icon appears in the header once the queue contains an image, PDF, or video, letting users tune <strong>image resizing</strong>, <strong>video transcoding</strong>, and (optionally) <strong>resumable uploads</strong> before uploading. Pass <code>uploadSettings: false</code> to disable the panel entirely, or use <code>uploadSettings.defaults</code> / <code>uploadSettings.showResumableSwitcher</code> to tune its behavior.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="us-panel">Settings panel</label>
            <select id="us-panel">
              <option value="true" selected>Enabled</option>
              <option value="false">Disabled</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resumable-switcher">Resumable switcher</label>
            <select id="us-resumable-switcher">
              <option value="false" selected>Hidden</option>
              <option value="true">Shown</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resize">Resize images</label>
            <select id="us-resize">
              <option value="false" selected>Off</option>
              <option value="true">On</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-max-width">Max width</label>
            <select id="us-max-width">
              <option value="" selected>—</option>
              <option value="1024">1024 px</option>
              <option value="2048">2048 px</option>
              <option value="4096">4096 px</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-max-height">Max height</label>
            <select id="us-max-height">
              <option value="" selected>—</option>
              <option value="1024">1024 px</option>
              <option value="2048">2048 px</option>
              <option value="4096">4096 px</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-transcode">Transcode video</label>
            <select id="us-transcode">
              <option value="false" selected>Off</option>
              <option value="true">On</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resolution">Resolution</label>
            <select id="us-resolution">
              <option value="auto" selected>Auto</option>
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
              <option value="desktop">Desktop</option>
              <option value="hq">HQ</option>
              <option value="sample">Sample</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resumable">Resumable</label>
            <select id="us-resumable">
              <option value="false" selected>Off</option>
              <option value="true">On</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>How it works</h2>
        <ol>
          <li>Add a file to the uploader — the <strong>gear icon</strong> appears in the header when at least one image, PDF, or video is queued.</li>
          <li>Click it to open the settings panel in the preview side area.</li>
          <li>Adjust the controls before uploading. The panel has up to three sections:</li>
        </ol>
        <ul>
          <li><strong>Image settings</strong> — shown when the queue contains images or PDFs. Toggle <em>Resize Images</em> and set Max Width / Max Height (px). When enabled, the upload request gets <code>&amp;resize=W,H</code>.</li>
          <li><strong>Video settings</strong> — shown when the queue contains a video. Toggle <em>Transcode video</em>, pick a Resolution (${Object.values(RESOLUTION_LABELS).join(' / ')}). Protocol is HLS (DASH was removed). When enabled, the upload request gets <code>&amp;postprocess=transcode&amp;video-resolution=…&amp;video_protocols=hls</code>.</li>
          <li><strong>Resume uploads</strong> — only shown when the host sets <code>uploadSettings.showResumableSwitcher: true</code>. Toggles the resumable (tus) upload path on/off. Marked <strong>Beta</strong>.</li>
        </ul>
        <p>Pass <code>uploadSettings: false</code> to disable the gear button entirely. Otherwise the panel is available by default; <code>defaults</code> only changes the controls' initial values.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    panelEnabled = true;
    showResumableSwitcher = false;
    resize = false;
    maxWidth = undefined;
    maxHeight = undefined;
    transcode = false;
    resolution = 'auto';
    resumable = false;
    updateCode();
    const cleanupSelects = initCustomSelects();

    document.getElementById('us-panel')!.addEventListener('change', (e) => {
      panelEnabled = (e.target as HTMLSelectElement).value === 'true';
      updateCode();
    });
    document.getElementById('us-resumable-switcher')!.addEventListener('change', (e) => {
      showResumableSwitcher = (e.target as HTMLSelectElement).value === 'true';
      updateCode();
    });
    document.getElementById('us-resize')!.addEventListener('change', (e) => {
      resize = (e.target as HTMLSelectElement).value === 'true';
      updateCode();
    });
    document.getElementById('us-max-width')!.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      maxWidth = val ? Number(val) : undefined;
      updateCode();
    });
    document.getElementById('us-max-height')!.addEventListener('change', (e) => {
      const val = (e.target as HTMLSelectElement).value;
      maxHeight = val ? Number(val) : undefined;
      updateCode();
    });
    document.getElementById('us-transcode')!.addEventListener('change', (e) => {
      transcode = (e.target as HTMLSelectElement).value === 'true';
      updateCode();
    });
    document.getElementById('us-resolution')!.addEventListener('change', (e) => {
      resolution = (e.target as HTMLSelectElement).value as Resolution;
      updateCode();
    });
    document.getElementById('us-resumable')!.addEventListener('change', (e) => {
      resumable = (e.target as HTMLSelectElement).value === 'true';
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      const us = buildUploadSettings();
      uploader.config = buildConfig({
        ...(us !== undefined ? { uploadSettings: us } : {}),
      });
      uploader.open();
    });

    page.destroy = () => cleanupSelects();
  },
};

export default page;
