import{b as c}from"./index-B-iL5lQT.js";import{r as a}from"./code-block-Bk3NnwHF.js";let t=!1;function n(){const o=document.getElementById("code-container");if(!o)return;o.innerHTML="";const e=t?`
    closeOnComplete: true,`:"";a("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    autoProceed: true,${e}
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },
    autoProceed: true,${e}
  }}
  onClose={() => setOpen(false)}
/>`}])}const d={render(){return`
      <div class="page-header">
        <h1>Auto upload</h1>
        <p>Set <code>autoProceed: true</code> to start uploading immediately after files are added — no manual "Upload" step required.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <label class="toggle-control">
            <input type="checkbox" id="close-on-complete-cb" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">Auto-close after upload</span>
          </label>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(o){n();const e=document.getElementById("close-on-complete-cb");e.checked=t,e.addEventListener("change",()=>{t=e.checked,n()}),document.getElementById("open-btn").addEventListener("click",()=>{o.config=c({autoProceed:!0,closeOnComplete:t}),o.open()})}};export{d as default};
