import{b as o}from"./index-BIQyzLcq.js";import{r as t}from"./code-block-Bk3NnwHF.js";const n={render(){return`
      <div class="page-header">
        <h1>Auto upload</h1>
        <p>Set <code>autoProceed: true</code> to start uploading immediately after files are added — no manual "Upload" step required.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){t("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    autoProceed: true,
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },
    autoProceed: true,
  }}
  onClose={() => setOpen(false)}
/>`}]),document.getElementById("open-btn").addEventListener("click",()=>{e.config=o({autoProceed:!0}),e.open()})}};export{n as default};
