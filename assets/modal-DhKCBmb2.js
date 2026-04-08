import{b as t}from"./index-DvqKfEVw.js";import{r as a}from"./code-block-Bk3NnwHF.js";const n={render(){return`
      <div class="page-header">
        <h1>Modal display</h1>
        <p>Open the uploader as a modal overlay (the default mode). Call <code>.open()</code> to show it.</p>
      </div>

      <section class="page-section">
        <p>Click the button below to open the uploader as a modal overlay.</p>
        <button class="btn-primary" id="open-modal-btn" style="margin-top: 8px;">Open uploader in modal</button>
        <sfx-uploader id="modal-uploader"></sfx-uploader>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){const o=document.getElementById("modal-uploader");document.getElementById("open-modal-btn").addEventListener("click",()=>{o.config=t(),o.open()}),a("#code-container",[{label:"HTML",lang:"markup",code:`
<button id="open-modal">Open uploader in modal</button>
<sfx-uploader id="modal-uploader"></sfx-uploader>

<script type="module">
  import '@scaleflex/uploader/define';

  const auth = {
    mode: 'security-template',
    container: 'YOUR_CONTAINER',
    securityTemplateId: 'SECU_...',
  };

  const uploader = document.getElementById('modal-uploader');
  uploader.config = { auth };
  document.getElementById('open-modal').addEventListener('click', () => {
    uploader.open();
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open uploader in modal</button>
      <Uploader
        open={open}
        config={{ auth }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`}])},destroy(){const e=document.getElementById("modal-uploader");e&&e.close()}};export{n as default};
