import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let closeOnComplete = false;

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const closeLine = closeOnComplete ? '\n    closeOnComplete: true,' : '';

  renderCodeBlock('#code-container', [
    {
      label: 'HTML',
      lang: 'markup',
      code: `
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    autoProceed: true,${closeLine}
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
    auth: { /* ... */ },
    autoProceed: true,${closeLine}
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
        <h1>Auto upload</h1>
        <p>Set <code>autoProceed: true</code> to start uploading immediately after files are added — no manual "Upload" step required.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <label class="toggle-control">
            <input type="checkbox" id="close-on-complete-cb" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">Auto-close after upload</span>
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

    const cb = document.getElementById('close-on-complete-cb') as HTMLInputElement;
    cb.checked = closeOnComplete;

    cb.addEventListener('change', () => {
      closeOnComplete = cb.checked;
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({ autoProceed: true, closeOnComplete });
      uploader.open();
    });
  },
};

export default page;
