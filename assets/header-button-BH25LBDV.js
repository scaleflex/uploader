import{b as l}from"./index-B2xh3pMk.js";import{r as c}from"./code-block-C_3oxnLY.js";let t="close",n=!0;function s(e){return typeof e=="string"?`'${e}'`:String(e)}function i(){const e=document.getElementById("modal-code-container");if(!e)return;e.innerHTML="";const o=t==="close"?`
  // header: 'close' — default for modal, can be omitted`:`
  header: ${s(t)},`;c("#modal-code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script type="module">
  import '@scaleflex/uploader/define';

  const uploader = document.getElementById('uploader');
  uploader.config = {
    auth: {
      mode: 'security-template',
      container: 'YOUR_CONTAINER',
      securityTemplateId: 'SECU_...',
    },${o}
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
          },${o}
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
        onClose={() => setOpen(false)}
      />
    </>
  );
}`}])}function r(){const e=document.getElementById("inline-code-container");if(!e)return;e.innerHTML="";const o=n===!0?`
    // header: true — default for inline, can be omitted`:`
    header: ${s(n)},`;c("#inline-code-container",[{label:"HTML",lang:"markup",code:`
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
    mode: 'inline',${o}
  };
<\/script>`},{label:"React",lang:"tsx",code:`
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
          mode: 'inline',${o}
        }}
        onAllComplete={(ok, failed) => console.log('Done:', ok, failed)}
      />
    </div>
  );
}`}])}const f={render(){return`
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
    `},init(e){i(),r(),document.querySelectorAll('input[name="header"]').forEach(a=>{a.checked=a.value===String(t),a.addEventListener("change",()=>{t=a.value==="true"?!0:a.value==="false"?!1:a.value,i()})}),document.getElementById("open-modal-btn").addEventListener("click",()=>{e.config=l({header:t}),e.open()});const d=document.getElementById("inline-uploader");d.config=l({mode:"inline",header:n}),document.querySelectorAll('input[name="inline-header"]').forEach(a=>{a.checked=a.value===String(n),a.addEventListener("change",()=>{n=a.value==="true"?!0:a.value==="false"?!1:a.value,d.config=l({mode:"inline",header:n}),r()})})},destroy(){const e=document.getElementById("inline-uploader");e&&e.close();const o=document.getElementById("uploader");o&&o.close()}};export{f as default};
