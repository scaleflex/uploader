import{b as o}from"./index-DiBLSo6t.js";import{r as t}from"./code-block-Bk3NnwHF.js";const l={render(){return`
      <div class="page-header">
        <h1>Basic usage</h1>
        <p>The minimal configuration to open the uploader. Only authentication is required.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){t("#code-container",[{label:"HTML",lang:"markup",code:`
<script type="module">
  import '@scaleflex/uploader/define';
<\/script>

<sfx-uploader id="uploader"></sfx-uploader>

<script>
  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_...',
    },
    callbacks: {
      onAllComplete: (ok, failed) => console.log('Done:', ok, failed),
    },
  };
  uploader.open();
<\/script>`},{label:"React",lang:"tsx",code:`
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
          },
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`}]),document.getElementById("open-btn").addEventListener("click",()=>{e.config=o(),e.open()})}};export{l as default};
