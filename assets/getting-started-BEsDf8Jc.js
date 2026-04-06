import{h as t,c as e,d as o}from"./doc-utils-XkOyWBCy.js";const a={render(){return`
      <div class="doc-content">
        <h1>Getting started</h1>
        <p class="doc-lead"><code>@scaleflex/uploader</code> is a drop-in modal component that connects to a <a href="https://www.scaleflex.com">Scaleflex VXP</a> DAM project and lets users drag &amp; drop, paste, import from URL, capture from webcam, and upload files to their cloud storage.</p>

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
          <li>A <a href="https://www.scaleflex.com">Scaleflex VXP</a> DAM account with a project token</li>
          <li>Either a <strong>security template key</strong> or a <strong>SASS key</strong> for authentication</li>
          <li>Any modern browser (Chrome, Firefox, Safari, Edge — last 2 versions)</li>
        </ul>

        <h2>Installation</h2>
        ${e("bash","npm install @scaleflex/uploader")}
        <p>Or with yarn:</p>
        ${e("bash","yarn add @scaleflex/uploader")}
        <p>Or with pnpm:</p>
        ${e("bash","pnpm add @scaleflex/uploader")}

        <h3>CDN (no bundler)</h3>
        <p>Load the self-contained bundle via script tag. All custom elements are registered automatically.</p>
        ${e("html",'<script src="https://cdn.scaleflex.com/uploader/0.2.5/sfx-uploader.min.js"><\/script>')}

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
        ${e("html",`<script type="module">
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
<\/script>

<sfx-uploader></sfx-uploader>`)}

        <h3>React</h3>
        ${e("tsx",`import { Uploader } from '@scaleflex/uploader/react';
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
}`)}

        <h2>Browser support</h2>
        <table>
          <thead><tr><th>Browser</th><th>Version</th></tr></thead>
          <tbody>
            <tr><td>Chrome / Edge</td><td>90+</td></tr>
            <tr><td>Firefox</td><td>100+</td></tr>
            <tr><td>Safari</td><td>15.4+</td></tr>
          </tbody>
        </table>

        ${o(void 0,{href:"#/docs/configuration",label:"Configuration"})}
      </div>
    `},init(){t()}};export{a as default};
