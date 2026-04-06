import type { Page } from '../../lib/router';
import type { SfxUploader } from '../../../src/sfx-uploader';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let selectedHeader: boolean | 'close' | 'back' = 'close';
let selectedInlineHeader: boolean | 'close' | 'back' = true;

function headerValueToCode(v: boolean | 'close' | 'back'): string {
  return typeof v === 'string' ? `'${v}'` : String(v);
}

function updateModalCode() {
  const container = document.getElementById('modal-code-container');
  if (!container) return;
  container.innerHTML = '';

  const headerLine = selectedHeader === 'close'
    ? '\n  // header: \'close\' — default for modal, can be omitted'
    : `\n  header: ${headerValueToCode(selectedHeader)},`;

  renderCodeBlock('#modal-code-container', [
    {
      label: 'HTML',
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
    },${headerLine}
  };
  uploader.open();
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
          },${headerLine}
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

function updateInlineCode() {
  const container = document.getElementById('inline-code-container');
  if (!container) return;
  container.innerHTML = '';

  const headerLine = selectedInlineHeader === true
    ? '\n    // header: true — default for inline, can be omitted'
    : `\n    header: ${headerValueToCode(selectedInlineHeader)},`;

  renderCodeBlock('#inline-code-container', [
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
    mode: 'inline',${headerLine}
  };
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
          mode: 'inline',${headerLine}
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
      />
    </div>
  );
}`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Header</h1>
        <p>Control the standard header bar with the <code>header</code> option.</p>
      </div>

      <section class="page-section">
        <h2>Modal</h2>
        <p>Select a header variant and open the uploader to see the result.</p>
        <div class="config-controls">
          <label class="radio-control">
            <input type="radio" name="header" value="close" checked />
            <span class="radio-text"><code>'close'</code> — X icon (default)</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="header" value="back" />
            <span class="radio-text"><code>'back'</code> — back arrow</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="header" value="true" />
            <span class="radio-text"><code>true</code> — header visible, no button</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="header" value="false" />
            <span class="radio-text"><code>false</code> — no header</span>
          </label>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-modal-btn">Open modal</button>
        <div id="modal-code-container" style="margin-top: 24px;"></div>
      </section>

      <section class="page-section" style="margin-top: 40px;">
        <h2>Inline</h2>
        <p>The same <code>header</code> option works in inline mode. Default is <code>true</code> (header with no button).</p>
        <div class="config-controls">
          <label class="radio-control">
            <input type="radio" name="inline-header" value="true" checked />
            <span class="radio-text"><code>true</code> — header visible, no button (default)</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="inline-header" value="close" />
            <span class="radio-text"><code>'close'</code> — X icon</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="inline-header" value="back" />
            <span class="radio-text"><code>'back'</code> — back arrow</span>
          </label>
          <label class="radio-control">
            <input type="radio" name="inline-header" value="false" />
            <span class="radio-text"><code>false</code> — no header</span>
          </label>
        </div>
        <div id="inline-container" style="min-height: 560px; margin-top: 16px;">
          <sfx-uploader id="inline-uploader"></sfx-uploader>
        </div>
        <div id="inline-code-container" style="margin-top: 24px;"></div>
      </section>
    `;
  },

  init(uploader: SfxUploader) {
    updateModalCode();
    updateInlineCode();

    // Modal controls
    const modalRadios = document.querySelectorAll<HTMLInputElement>('input[name="header"]');
    modalRadios.forEach((radio) => {
      radio.checked = radio.value === String(selectedHeader);
      radio.addEventListener('change', () => {
        selectedHeader = radio.value === 'true' ? true : radio.value === 'false' ? false : radio.value as 'close' | 'back';
        updateModalCode();
      });
    });

    document.getElementById('open-modal-btn')!.addEventListener('click', () => {
      uploader.config = buildConfig({ header: selectedHeader });
      uploader.open();
    });

    // Inline controls
    const inlineUploader = document.getElementById('inline-uploader') as SfxUploader;
    inlineUploader.config = buildConfig({ mode: 'inline', header: selectedInlineHeader });

    const inlineRadios = document.querySelectorAll<HTMLInputElement>('input[name="inline-header"]');
    inlineRadios.forEach((radio) => {
      radio.checked = radio.value === String(selectedInlineHeader);
      radio.addEventListener('change', () => {
        selectedInlineHeader = radio.value === 'true' ? true : radio.value === 'false' ? false : radio.value as 'close' | 'back';
        inlineUploader.config = buildConfig({ mode: 'inline', header: selectedInlineHeader });
        updateInlineCode();
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
