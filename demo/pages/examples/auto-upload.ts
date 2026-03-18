import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Auto upload</h1>
        <p>Set <code>autoProceed: true</code> to start uploading immediately after files are added — no manual "Upload" step required.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    autoProceed: true,
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
    autoProceed: true,
  }}
  onClose={() => setOpen(false)}
/>`,
      },
    ]);

    document.getElementById('open-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({ autoProceed: true });
      uploader.open();
    });
  },
};

export default page;
