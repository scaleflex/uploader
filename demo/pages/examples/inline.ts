import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Inline display</h1>
        <p>Embed the uploader directly in the page flow instead of as a modal overlay. Use <code>mode: 'inline'</code> to render inline.</p>
      </div>

      <section class="page-section">
        <p>The uploader below is rendered inline. It sizes to its container and does not use a backdrop overlay.</p>
        <div id="inline-container" style="height: 500px; margin-top: 16px; border: 1px solid var(--sf-light-border); border-radius: var(--sf-radius);">
          <sfx-uploader id="inline-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(_uploader: SfxUploader) {
    const inlineUploader = document.getElementById('inline-uploader') as SfxUploader;

    inlineUploader.config = buildConfig({ mode: 'inline' });

    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<div style="height: 500px;">
  <sfx-uploader id="uploader"></sfx-uploader>
</div>

<script type="module">
  import '@scaleflex/uploader/define';

  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_...',
    },
    mode: 'inline',
  };
  // No need to call open() — inline mode renders immediately
</script>`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
import { Uploader } from '@scaleflex/uploader/react';

export function App() {
  return (
    <div style={{ height: 500 }}>
      <Uploader
        config={{
          auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_...',
          },
          mode: 'inline',
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
      />
    </div>
  );
}`,
      },
    ]);
  },

  destroy() {
    const inlineUploader = document.getElementById('inline-uploader') as SfxUploader | null;
    if (inlineUploader) inlineUploader.close();
  },
};

export default page;
