import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let closeOnComplete = false;
let closeDelay = 0;

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const closeLine = closeOnComplete ? `\n    closeOnComplete: ${closeDelay},` : '';

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
          <div class="form-group" id="close-delay-group" style="display: none;">
            <label for="close-delay-input">Close delay (ms)</label>
            <input type="number" id="close-delay-input" min="0" step="100" value="0" />
          </div>
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
    const delayGroup = document.getElementById('close-delay-group') as HTMLDivElement;
    const delayInput = document.getElementById('close-delay-input') as HTMLInputElement;

    cb.checked = closeOnComplete;
    delayInput.value = String(closeDelay);
    delayGroup.style.display = closeOnComplete ? '' : 'none';

    cb.addEventListener('change', () => {
      closeOnComplete = cb.checked;
      delayGroup.style.display = closeOnComplete ? '' : 'none';
      updateCode();
    });

    delayInput.addEventListener('input', () => {
      const n = Number(delayInput.value);
      closeDelay = Number.isFinite(n) && n >= 0 ? n : 0;
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({
        autoProceed: true,
        closeOnComplete: closeOnComplete ? closeDelay : false,
      });
      uploader.open();
    });
  },
};

export default page;
