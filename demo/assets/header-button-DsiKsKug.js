import{b as l}from"./index-DiBLSo6t.js";import{r as c}from"./code-block-Bk3NnwHF.js";let t="close";function i(){const e=document.getElementById("code-container");if(!e)return;e.innerHTML="";const n=t==="close"?`
    // headerButton: 'close' // default for modal, can be omitted`:`
    headerButton: '${t}',`;c("#code-container",[{label:"HTML (modal)",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script type="module">
  import '@scaleflex/uploader/define';

  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_...',
    },${n}
  };
  uploader.open();
<\/script>`},{label:"HTML (inline)",lang:"markup",code:`
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
          },${n}
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`}])}const u={render(){return`
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
    `},init(e){i(),document.querySelectorAll('input[name="header-button"]').forEach(o=>{o.checked=o.value===t,o.addEventListener("change",()=>{t=o.value,i()})}),document.getElementById("open-modal-btn").addEventListener("click",()=>{e.config=l({headerButton:t}),e.open()});const d=document.getElementById("inline-uploader");let a="none";d.config=l({mode:"inline",headerButton:a}),document.querySelectorAll('input[name="inline-header-button"]').forEach(o=>{o.addEventListener("change",()=>{a=o.value,d.config=l({mode:"inline",headerButton:a})})})},destroy(){const e=document.getElementById("inline-uploader");e&&e.close();const n=document.getElementById("uploader");n&&n.close()}};export{u as default};
