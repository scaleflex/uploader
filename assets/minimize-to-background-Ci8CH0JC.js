import{b as t}from"./index-C7yrGp-_.js";import{r as a}from"./code-block-C_3oxnLY.js";let o=!0;function i(){const n=document.getElementById("code-container");if(!n)return;n.innerHTML="";const e=o?`
    minimizeOnUpload: true,`:"";a("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },${e}
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },${e}
  }}
  onClose={() => setOpen(false)}
/>`}])}const d={render(){return`
      <div class="page-header">
        <h1>Minimize to background</h1>
        <p>Set <code>minimizeOnUpload: true</code> to show a "Minimize & continue in background" button during uploads. The modal collapses into a floating progress pill so the user can keep working.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <label class="toggle-control">
            <input type="checkbox" id="minimize-cb" />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">minimizeOnUpload</span>
          </label>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(n){i();const e=document.getElementById("minimize-cb");e.checked=o,e.addEventListener("change",()=>{o=e.checked,i()}),document.getElementById("open-btn").addEventListener("click",()=>{n.config=t({minimizeOnUpload:o}),n.open()})}};export{d as default};
