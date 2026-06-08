import{b as n}from"./index--2GW6fFX.js";import{r as s}from"./code-block-C_3oxnLY.js";let e="/uploads",t=!0;function r(){s("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    targetFolder: '${e}',
    preserveFolderStructure: ${t},
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },
    targetFolder: '${e}',
    preserveFolderStructure: ${t},
  }}
  onClose={() => setOpen(false)}
/>`}])}const i={render(){return`
      <div class="page-header">
        <h1>Target folder</h1>
        <p>Set <code>targetFolder</code> to choose the destination path in Scaleflex. When users drag or pick a folder, <code>preserveFolderStructure</code> controls whether the nested folder layout is recreated under that target.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="folder-input">Target folder</label>
            <input type="text" id="folder-input" value="/uploads" placeholder="/path/to/folder" class="mono-input" />
          </div>
          <label class="toggle-control">
            <input type="checkbox" id="preserve-cb" checked />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">Preserve folder structure</span>
          </label>
          <p class="step-note">
            With this on, dropping a folder <code>photos/</code> into the target <code>/uploads</code> uploads each file to <code>/uploads/photos/&lt;subpath&gt;/&lt;file&gt;</code>. Turn it off to flatten everything into <code>targetFolder</code>.
          </p>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(d){e="/uploads",t=!0,r();const a=document.getElementById("folder-input"),l=document.getElementById("preserve-cb");a.addEventListener("input",o=>{e=o.target.value.trim()||"/",r()}),l.addEventListener("change",o=>{t=o.target.checked,r()}),document.getElementById("open-btn").addEventListener("click",()=>{d.config=n({targetFolder:e,preserveFolderStructure:t}),d.open()})}};export{i as default};
