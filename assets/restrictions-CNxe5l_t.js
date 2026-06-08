import{b as c}from"./index--f_ahlMs.js";import{r as d}from"./code-block-C_3oxnLY.js";import{i as r}from"./custom-select-CZ_fVHDR.js";let l=5,i=5*1024*1024,e=["image/*"];function s(){const a=document.getElementById("code-container");if(!a)return;a.innerHTML="";const n=[];l!=null&&n.push(`    maxNumberOfFiles: ${l},`),i!=null&&n.push(`    maxFileSize: ${i}, // ${i/1024/1024} MB`),e!=null&&e.length&&n.push(`    allowedFileTypes: [${e.map(t=>`'${t}'`).join(", ")}],`),d("#code-container",[{label:"JavaScript",lang:"javascript",code:`
uploader.config = {
  auth: { /* ... */ },
  restrictions: {
${n.join(`
`)}
  },
};`}])}const p={render(){return`
      <div class="page-header">
        <h1>Restrictions</h1>
        <p>Limit which files users can add via the <code>restrictions</code> config. Files that violate restrictions are rejected with a reason.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="max-files">Max files</label>
            <select id="max-files">
              <option value="">Unlimited</option>
              <option value="1">1</option>
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div class="form-group">
            <label for="max-size">Max file size</label>
            <select id="max-size">
              <option value="">Unlimited</option>
              <option value="1048576">1 MB</option>
              <option value="5242880" selected>5 MB</option>
              <option value="10485760">10 MB</option>
              <option value="52428800">50 MB</option>
            </select>
          </div>
          <div class="form-group">
            <label for="allowed-types">Allowed types</label>
            <select id="allowed-types">
              <option value="">All types</option>
              <option value="image/*" selected>Images only</option>
              <option value="video/*">Videos only</option>
              <option value="image/*,video/*">Images & videos</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(a){l=5,i=5*1024*1024,e=["image/*"],s();const n=r();document.getElementById("max-files").addEventListener("change",t=>{const o=t.target.value;l=o?Number(o):void 0,s()}),document.getElementById("max-size").addEventListener("change",t=>{const o=t.target.value;i=o?Number(o):void 0,s()}),document.getElementById("allowed-types").addEventListener("change",t=>{const o=t.target.value;e=o?o.split(","):void 0,s()}),document.getElementById("open-btn").addEventListener("click",()=>{a.config=c({restrictions:{...l!=null&&{maxNumberOfFiles:l},...i!=null&&{maxFileSize:i},...(e==null?void 0:e.length)&&{allowedFileTypes:e}}}),a.open()}),p.destroy=()=>n()}};export{p as default};
