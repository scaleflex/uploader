import{b as d}from"./index-BCsEt58D.js";import{r as l}from"./code-block-Bk3NnwHF.js";let e="/uploads";const r={render(){return`
      <div class="page-header">
        <h1>Target folder</h1>
        <p>Set <code>targetFolder</code> to specify the destination folder in Scaleflex where uploaded files will be stored.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="folder-input">Target folder</label>
            <input type="text" id="folder-input" value="/uploads" placeholder="/path/to/folder" class="mono-input" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(o){e="/uploads",l("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    targetFolder: '/uploads',
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },
    targetFolder: '/uploads',
  }}
  onClose={() => setOpen(false)}
/>`}]),document.getElementById("folder-input").addEventListener("input",t=>{e=t.target.value.trim()||"/"}),document.getElementById("open-btn").addEventListener("click",()=>{o.config=d({targetFolder:e}),o.open()})}};export{r as default};
