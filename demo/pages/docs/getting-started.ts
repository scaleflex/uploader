import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Getting started</h1>
        <p class="doc-lead">Add a production-ready file upload widget to any web app in minutes.</p>

        <h2>Features</h2>
        <ul>
          <li>Drag &amp; drop, paste, URL import, webcam, and screen capture</li>
          <li>Cloud connectors — Google Drive, Dropbox, OneDrive, Box, Instagram, Facebook, Unsplash</li>
          <li>Concurrent uploads with retry &amp; exponential backoff</li>
          <li>Real-time progress, speed, and ETA tracking</li>
          <li>File restrictions — type, size, and count limits</li>
          <li>Modal or inline display modes</li>
          <li>Theming via CSS custom properties (<code>--sfx-up-*</code>)</li>
          <li>React wrapper with controlled <code>open</code> prop and imperative ref</li>
          <li>Zero dependencies beyond <a href="https://lit.dev">Lit 3</a></li>
          <li>ESM + CJS dual build, tree-shakeable</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>A <a href="https://www.scaleflex.com">Scaleflex</a> account with a container</li>
          <li>A <strong>security template ID</strong> (recommended) or session credentials</li>
          <li>Any modern browser (Chrome, Firefox, Safari, Edge — last 2 versions)</li>
        </ul>

        <h2>Installation</h2>
        ${code('bash', `npm install @scaleflex/uploader`)}
        <p>Or with yarn / pnpm:</p>
        ${code('bash', `yarn add @scaleflex/uploader\npnpm add @scaleflex/uploader`)}

        <h2>Package exports</h2>
        <table>
          <thead><tr><th>Specifier</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>@scaleflex/uploader</code></td><td>Core <code>SfxUploader</code> class (use with <code>customElements.define</code>)</td></tr>
            <tr><td><code>@scaleflex/uploader/define</code></td><td>Auto-registers <code>&lt;sfx-uploader&gt;</code> — import for side-effect</td></tr>
            <tr><td><code>@scaleflex/uploader/react</code></td><td>React wrapper component</td></tr>
          </tbody>
        </table>

        <h2>Quick start</h2>

        <h3>Vanilla JS / Web Component</h3>
        ${code(
          'html',
          `<script type="module">
  import '@scaleflex/uploader/define';

  const uploader = document.querySelector('sfx-uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'your-container',
      securityTemplateId: 'SECU_...',
    },
  };
  uploader.open();
</script>

<sfx-uploader></sfx-uploader>`,
        )}

        <h3>React</h3>
        ${code(
          'tsx',
          `import { Uploader } from '@scaleflex/uploader/react';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Upload files</button>
      <Uploader
        open={open}
        config={{
          auth: {
            mode: 'security-template',
            container: 'your-container',
            securityTemplateId: 'SECU_...',
          },
        }}
        onClose={() => setOpen(false)}
        onAllComplete={(ok, failed) => console.log('Done', ok, failed)}
      />
    </>
  );
}`,
        )}

        <h2>Browser support</h2>
        <table>
          <thead><tr><th>Browser</th><th>Version</th></tr></thead>
          <tbody>
            <tr><td>Chrome / Edge</td><td>90+</td></tr>
            <tr><td>Firefox</td><td>100+</td></tr>
            <tr><td>Safari</td><td>15.4+</td></tr>
          </tbody>
        </table>

        ${docNav(
          undefined,
          { href: '#/docs/configuration', label: 'Configuration' },
        )}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
