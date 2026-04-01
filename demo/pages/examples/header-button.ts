import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let selectedHeaderButton: 'none' | 'close' | 'back' = 'close';

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';

  const headerButtonLine = selectedHeaderButton === 'close'
    ? '\n    // headerButton: \'close\' // default for modal, can be omitted'
    : `\n    headerButton: '${selectedHeaderButton}',`;

  renderCodeBlock('#code-container', [
    {
      label: 'HTML (modal)',
      lang: 'markup',
      code: `
<sfx-uploader id="uploader"></sfx-uploader>

<script type="module">
  import '@scaleflex/uploader/define';

  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_...',
    },${headerButtonLine}
  };
  uploader.open();
</script>`,
    },
    {
      label: 'HTML (inline)',
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
    headerButton: 'back', // 'none' (default for inline), 'close', or 'back'
  };
</script>`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
import { useState } from 'react';
import { Uploader } from '@scaleflex/uploader/react';

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open uploader</button>
      <Uploader
        open={open}
        config={{
          auth: {
            mode: 'security-template',
            container: 'YOUR_CONTAINER',
            securityTemplateId: 'SECU_...',
          },${headerButtonLine}
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Header button</h1>
        <p>Control the header navigation button with <code>headerButton</code>. Use <code>'close'</code> (default for modal) to show an X icon, <code>'back'</code> for a back arrow in wizard/step flows, or <code>'none'</code> to hide the button entirely.</p>
      </div>

      <section class="page-section">
        <h2>Modal with header button</h2>
        <p>Select a header button variant and open the uploader to see the result.</p>
        <div class="config-controls">
          <label class="radio-control">
            <input type="radio" name="header-button" value="close" checked />
            <span class="radio-text"><code>close</code> — X icon (default for modal)</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="header-button" value="back" />
            <span class="radio-text"><code>back</code> — back arrow (wizard / step flows)</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="header-button" value="none" />
            <span class="radio-text"><code>none</code> — no button; Escape is also disabled (click backdrop to close)</span>
          </label>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-modal-btn">Open uploader in modal</button>
      </section>

      <section class="page-section" style="margin-top: 40px;">
        <h2>Inline with header button</h2>
        <p>The same <code>headerButton</code> option works in inline mode. By default inline has no button (<code>'none'</code>), but you can add one.</p>
        <div class="config-controls">
          <label class="radio-control">
            <input type="radio" name="inline-header-button" value="none" checked />
            <span class="radio-text"><code>none</code> — no button (default for inline)</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="inline-header-button" value="close" />
            <span class="radio-text"><code>close</code> — X icon</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="inline-header-button" value="back" />
            <span class="radio-text"><code>back</code> — back arrow</span>
          </label>
        </div>
        <div id="inline-container" style="min-height: 560px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="inline-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    updateCode();

    // Modal controls — sync checked state with persisted value
    const modalRadios = document.querySelectorAll<HTMLInputElement>('input[name="header-button"]');
    modalRadios.forEach((radio) => {
      radio.checked = radio.value === selectedHeaderButton;
      radio.addEventListener('change', () => {
        selectedHeaderButton = radio.value as 'none' | 'close' | 'back';
        updateCode();
      });
    });

    document.getElementById('open-modal-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({ headerButton: selectedHeaderButton });
      uploader.open();
    });

    // Inline controls
    const inlineUploader = document.getElementById('inline-uploader') as SfxUploader;
    let inlineHeaderButton: 'none' | 'close' | 'back' = 'none';
    inlineUploader.config = buildConfig({ mode: 'inline', headerButton: inlineHeaderButton });

    const inlineRadios = document.querySelectorAll<HTMLInputElement>('input[name="inline-header-button"]');
    inlineRadios.forEach((radio) => {
      radio.addEventListener('change', () => {
        inlineHeaderButton = radio.value as 'none' | 'close' | 'back';
        inlineUploader.config = buildConfig({ mode: 'inline', headerButton: inlineHeaderButton });
      });
    });
  },

  destroy() {
    const inlineUploader = document.getElementById('inline-uploader') as SfxUploader | null;
    if (inlineUploader) inlineUploader.close();
    const uploader = document.getElementById('uploader') as SfxUploader | null;
    if (uploader) uploader.close();
  },
};

export default page;
