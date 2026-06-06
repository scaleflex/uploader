import type { Page } from '../../lib/router';
import type { SfxUploader, UploaderConfig } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';
import { initCustomSelects } from '../../lib/custom-select';

type UploadDefaults = NonNullable<NonNullable<UploaderConfig['uploadSettings']>['defaults']>;

let resize = false;
let maxWidth: number | undefined;
let maxHeight: number | undefined;
let transcode = false;
let resolution: 'Auto' | '1080p' | '720p' | '480p' = 'Auto';
let protocol: 'HLS' | 'DASH' = 'HLS';
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
    defaults.protocol = protocol;
  }
  if (resumable) defaults.resumable = true;
  return defaults;
}

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const defaults = buildDefaults();
  const hasDefaults = Object.keys(defaults).length > 0;

  const defaultsBody = Object.entries(defaults)
    .map(([k, v]) => `      ${k}: ${typeof v === 'string' ? `'${v}'` : v},`)
    .join('\n');

  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: hasDefaults
        ? `
// The settings panel is always available — the gear icon appears
// in the header once files are added. \`uploadSettings\` is optional
// and only changes the panel's starting values.
uploader.config = {
  auth: { /* ... */ },
  uploadSettings: {
    defaults: {
${defaultsBody}
    },
  },
};`
        : `
// The settings panel is always available — no config needed.
// The gear icon appears in the header once files are added,
// opening Image / Video / Resume-uploads controls with built-in defaults.
uploader.config = {
  auth: { /* ... */ },
};`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Upload settings</h1>
        <p>The uploader ships with a built-in <strong>settings panel</strong> — a gear icon appears in the header once files are added, letting users tune <strong>image resizing</strong>, <strong>video transcoding</strong>, and <strong>resumable uploads</strong> before uploading. It is <strong>always available</strong>; no config flag turns it on. Use the optional <code>uploadSettings.defaults</code> to change the panel's starting values.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
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
              <option value="Auto" selected>Auto</option>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-protocol">Protocol</label>
            <select id="us-protocol">
              <option value="HLS" selected>HLS</option>
              <option value="DASH">DASH</option>
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
          <li>Add a file to the uploader — the <strong>gear icon</strong> then appears in the header.</li>
          <li>Click it to open the settings panel in the preview side area.</li>
          <li>Adjust the controls before uploading. The panel has three sections:</li>
        </ol>
        <ul>
          <li><strong>Image settings</strong> — toggle <em>Resize Images</em> and set Max Width / Max Height (px).</li>
          <li><strong>Video settings</strong> — shown only when the queue contains a video: toggle <em>Transcode video</em>, pick a Resolution (Auto / 1080p / 720p / 480p) and a Protocol (HLS / DASH).</li>
          <li><strong>Resume uploads</strong> — toggle resumable (tus) uploads. Marked <strong>Beta</strong>.</li>
        </ol>
        <p><code>uploadSettings</code> is entirely optional — omit it and the panel still appears with built-in defaults. Setting <code>defaults</code> only changes the controls' initial values.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    resize = false;
    maxWidth = undefined;
    maxHeight = undefined;
    transcode = false;
    resolution = 'Auto';
    protocol = 'HLS';
    resumable = false;
    updateCode();
    const cleanupSelects = initCustomSelects();

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
      resolution = (e.target as HTMLSelectElement).value as typeof resolution;
      updateCode();
    });
    document.getElementById('us-protocol')!.addEventListener('change', (e) => {
      protocol = (e.target as HTMLSelectElement).value as typeof protocol;
      updateCode();
    });
    document.getElementById('us-resumable')!.addEventListener('change', (e) => {
      resumable = (e.target as HTMLSelectElement).value === 'true';
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      const defaults = buildDefaults();
      uploader.config = buildConfig({
        ...(Object.keys(defaults).length ? { uploadSettings: { defaults } } : {}),
      });
      uploader.open();
    });

    page.destroy = () => cleanupSelects();
  },
};

export default page;
