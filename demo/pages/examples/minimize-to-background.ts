import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let minimizeOnUpload = true;

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const minimizeLine = minimizeOnUpload ? '\n    minimizeOnUpload: true,' : '';

  renderCodeBlock('#code-container', [
    {
      label: 'HTML',
      lang: 'markup',
      code: `
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },${minimizeLine}
  };
</script>`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },${minimizeLine}
  }}
  onClose={() => setOpen(false)}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Minimize to background</h1>
        <p>Set <code>minimizeOnUpload: true</code> to show a "Minimize & continue in background" button during uploads. The modal collapses into a floating progress pill so the user can keep working.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <label class="toggle-control">
            <input type="checkbox" id="minimize-cb" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">minimizeOnUpload</span>
          </label>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    updateCode();

    const cb = document.getElementById('minimize-cb') as HTMLInputElement;
    cb.checked = minimizeOnUpload;

    cb.addEventListener('change', () => {
      minimizeOnUpload = cb.checked;
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({ minimizeOnUpload });
      uploader.open();
    });
  },
};

export default page;
