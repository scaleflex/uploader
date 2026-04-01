import{b as l}from"./index-DiBLSo6t.js";import{r as d}from"./code-block-Bk3NnwHF.js";const i={render(){return`
      <div class="page-header">
        <h1>Inline &amp; modal display</h1>
        <p>Embed the uploader directly in the page flow with <code>mode: 'inline'</code>, or open it as a modal overlay (the default). Both can coexist on the same page.</p>
      </div>

      <section class="page-section">
        <h2>Inline</h2>
        <p>The uploader below is rendered inline. It sizes to its container and does not use a backdrop overlay.</p>
        <div id="inline-container" style="min-height: 560px; margin-top: 16px; margin-bottom: 32px;">
          <sfx-uploader id="inline-uploader"></sfx-uploader>
        </div>
      </section>

      <section class="page-section" style="margin-top: 40px;">
        <h2>Modal</h2>
        <p>Click the button below to open a second uploader instance as a modal overlay.</p>
        <button class="btn-primary" id="open-modal-btn" style="margin-top: 8px;">Open uploader in modal</button>
        <sfx-uploader id="modal-uploader"></sfx-uploader>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(o){const e=document.getElementById("inline-uploader");e.config=l({mode:"inline"});const n=document.getElementById("modal-uploader");document.getElementById("open-modal-btn").addEventListener("click",()=>{n.config=l(),n.open()}),d("#code-container",[{label:"HTML",lang:"markup",code:`
<!-- Inline uploader -->
<div style="height: 500px;">
  <sfx-uploader id="inline-uploader"></sfx-uploader>
</div>

<!-- Modal uploader -->
<button id="open-modal">Open uploader in modal</button>
<sfx-uploader id="modal-uploader"></sfx-uploader>

<script type="module">
  import '@scaleflex/uploader/define';

  const auth = {
    mode: 'security-template',
    container: 'YOUR_CONTAINER',
    securityTemplateId: 'SECU_...',
  };

  // Inline — renders immediately, no open() needed
  const inlineUploader = document.getElementById('inline-uploader');
  inlineUploader.config = { auth, mode: 'inline' };

  // Modal — call open() to show
  const modalUploader = document.getElementById('modal-uploader');
  modalUploader.config = { auth };
  document.getElementById('open-modal').addEventListener('click', () => {
    modalUploader.open();
  });
<\/script>`},{label:"React",lang:"tsx",code:`
import { useState } from 'react';
import { Uploader } from '@scaleflex/uploader/react';

const auth = {
  mode: 'security-template' as const,
  container: 'YOUR_CONTAINER',
  securityTemplateId: 'SECU_...',
};

export function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Inline uploader */}
      <div style={{ height: 500 }}>
        <Uploader
          config={{ auth, mode: 'inline' }}
          onAllComplete={(ok, failed) => console.log('Inline done:', ok, failed)}
        />
      </div>

      {/* Modal uploader */}
      <button onClick={() => setModalOpen(true)}>Open uploader in modal</button>
      <Uploader
        open={modalOpen}
        config={{ auth }}
        onAllComplete={(ok, failed) => console.log('Modal done:', ok, failed)}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}`}])},destroy(){const o=document.getElementById("inline-uploader");o&&o.close();const e=document.getElementById("modal-uploader");e&&e.close()}};export{i as default};
