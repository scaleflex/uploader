import{b as a}from"./index--f_ahlMs.js";import{r as l}from"./code-block-C_3oxnLY.js";import{i as c}from"./custom-select-CZ_fVHDR.js";let t=!0,i="mid";function n(){const e=document.getElementById("code-container");e&&(e.innerHTML="",l("#code-container",[{label:"JavaScript",lang:"javascript",code:`
uploader.config = {
  auth: { /* ... */ },
  similarityCheck: {
    enabled: ${t},${t?`
    confidence: '${i}', // 'low' | 'mid' | 'high'`:""}
  },
};`},{label:"HTML attribute",lang:"html",code:`
<!-- config is set via JS; the element itself stays declarative -->
<sfx-uploader id="uploader"></sfx-uploader>`}]))}const r={render(){return`
      <div class="page-header">
        <h1>Similar asset check</h1>
        <p>Let users check uploaded images against visually similar assets already in the library <strong>before</strong> they finish uploading — avoiding duplicates. Enable it with the <code>similarityCheck</code> config.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="similar-enabled">Feature</label>
            <select id="similar-enabled">
              <option value="true" selected>Enabled</option>
              <option value="false">Disabled</option>
            </select>
          </div>
          <div class="form-group">
            <label for="similar-confidence">Confidence</label>
            <select id="similar-confidence">
              <option value="low">Low · 0.60</option>
              <option value="mid" selected>Mid · 0.75</option>
              <option value="high">High · 0.90</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>How it works</h2>
        <ol class="doc-list">
          <li>Add a few <strong>images</strong> to the uploader (the check is image-only; HEIC/HEIF are excluded).</li>
          <li>Click <strong>Check similar</strong> on a single tile (under <em>Details</em>), or use the toolbar <strong>Check similar</strong> button to enter <strong>selection mode</strong> and check up to <strong>10</strong> images at once.</li>
          <li>While searching, each tile shows a spinner; batches show an <em>"X of N done"</em> progress banner you can cancel.</li>
          <li>When a match is found, open the preview and switch to the <strong>Similar</strong> tab to review the matched library assets and their similarity scores.</li>
        </ol>
        <p class="doc-note"><strong>Confidence</strong> maps to the backend similarity threshold: <code>'low'</code> → 0.60 (loosest, more results), <code>'mid'</code> → 0.75 (default), <code>'high'</code> → 0.90 (strictest, fewest results). Omit it to use <code>'mid'</code>.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){t=!0,i="mid",n();const s=c();document.getElementById("similar-enabled").addEventListener("change",o=>{t=o.target.value==="true",n()}),document.getElementById("similar-confidence").addEventListener("change",o=>{i=o.target.value,n()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=a({...t?{similarityCheck:{enabled:!0,confidence:i}}:{similarityCheck:{enabled:!1}}}),e.open()}),r.destroy=()=>s()}};export{r as default};
