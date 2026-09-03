import{b as c}from"./index-BRdlKkfd.js";import{r as p}from"./code-block-C_3oxnLY.js";let t="/uploads",o=!0,l=!0;function d(){p("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-uploader id="uploader"></sfx-uploader>

<script>
  uploader.config = {
    auth: { /* ... */ },
    targetFolder: '${t}',
    allowFolderUpload: ${l},
    preserveFolderStructure: ${o},
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<Uploader
  open={open}
  config={{
    auth: { /* ... */ },
    targetFolder: '${t}',
    allowFolderUpload: ${l},
    preserveFolderStructure: ${o},
  }}
  onClose={() => setOpen(false)}
/>`}])}const g={render(){return`
      <div class="page-header">
        <h1>Target folder</h1>
        <p>Set <code>targetFolder</code> to choose the destination path in Scaleflex. <code>allowFolderUpload</code> controls whether whole folders can be uploaded at all; when they can, <code>preserveFolderStructure</code> controls whether the nested folder layout is recreated under that target.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="folder-input">Target folder</label>
            <input type="text" id="folder-input" value="/uploads" placeholder="/path/to/folder" class="mono-input" />
          </div>
          <label class="toggle-control">
            <input type="checkbox" id="allow-folder-cb" checked />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">Allow folder upload</span>
          </label>
          <p class="step-note">
            With this off, the "or upload a folder" link is hidden everywhere and folders dragged, dropped or pasted onto the drop zone are rejected (loose files alongside them still upload).
          </p>
          <label class="toggle-control">
            <input type="checkbox" id="preserve-cb" checked />
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-text">Preserve folder structure</span>
          </label>
          <p class="step-note">
            With this on, dropping a folder <code>photos/</code> into the target <code>/uploads</code> uploads each file to <code>/uploads/photos/&lt;subpath&gt;/&lt;file&gt;</code>. Turn it off to flatten everything into <code>targetFolder</code>. Has no effect when folder upload is disabled.
          </p>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(a){t="/uploads",o=!0,l=!0,d();const r=document.getElementById("folder-input"),n=document.getElementById("preserve-cb"),s=document.getElementById("allow-folder-cb");r.addEventListener("input",e=>{t=e.target.value.trim()||"/",d()}),n.addEventListener("change",e=>{o=e.target.checked,d()}),s.addEventListener("change",e=>{l=e.target.checked,d()}),document.getElementById("open-btn").addEventListener("click",()=>{a.config=c({targetFolder:t,preserveFolderStructure:o,allowFolderUpload:l}),a.open()})}};export{g as default};
