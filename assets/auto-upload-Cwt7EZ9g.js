import{b as d}from"./index-JQBgdY4i.js";import{r as i}from"./code-block-C_3oxnLY.js";let o=!1,n=0;function c(){const t=document.getElementById("code-container");if(!t)return;t.innerHTML="";const e=o?`
    closeOnComplete: ${n},`:"";i("#code-container",[{label:"HTML",lang:"markup",code:`
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
/>`}])}const u={render(){return`
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
          <div class="form-group" id="close-delay-group" style="display: none;">
            <label for="close-delay-input">Close delay (ms)</label>
            <input type="number" id="close-delay-input" min="0" step="100" value="0" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){c();const e=document.getElementById("close-on-complete-cb"),s=document.getElementById("close-delay-group"),l=document.getElementById("close-delay-input");e.checked=o,l.value=String(n),s.style.display=o?"":"none",e.addEventListener("change",()=>{o=e.checked,s.style.display=o?"":"none",c()}),l.addEventListener("input",()=>{const a=Number(l.value);n=Number.isFinite(a)&&a>=0?a:0,c()}),document.getElementById("open-btn").addEventListener("click",()=>{t.config=d({autoProceed:!0,closeOnComplete:o?n:!1}),t.open()})}};export{u as default};
