import{b as f}from"./index--2GW6fFX.js";import{r as b}from"./code-block-C_3oxnLY.js";import{i as w}from"./custom-select-CZ_fVHDR.js";const S={auto:"Auto",mobile:"Mobile",tablet:"Tablet",desktop:"Desktop",hq:"HQ",sample:"Sample"};let r=!0,n=!1,d=!1,l,i,c=!1,p="auto",g=!1;function x(){const t={};return d&&(t.resize=!0,l!=null&&(t.maxWidth=l),i!=null&&(t.maxHeight=i)),c&&(t.transcode=!0,t.resolution=p,t.protocol="hls"),g&&(t.resumable=!0),t}function h(){if(!r)return!1;const t=x(),o=Object.keys(t).length>0;if(!n&&!o)return;const e={};return n&&(e.showResumableSwitcher=!0),o&&(e.defaults=t),e}function a(){const t=document.getElementById("code-container");if(!t)return;t.innerHTML="";const o=h();let e;if(o===!1)e=`
// Disable the Upload settings panel — the gear icon never appears.
uploader.config = {
  auth: { /* ... */ },
  uploadSettings: false,
};`;else if(o===void 0)e=`
// The settings panel is available by default — no config needed.
// The gear icon appears in the header once the queue contains an
// image, PDF, or video, opening the panel with built-in defaults.
uploader.config = {
  auth: { /* ... */ },
};`;else{const s=[];if(o.showResumableSwitcher&&s.push("    showResumableSwitcher: true,"),o.defaults){const m=Object.entries(o.defaults).map(([v,u])=>`      ${v}: ${typeof u=="string"?`'${u}'`:u},`).join(`
`);s.push(`    defaults: {
${m}
    },`)}e=`
// Seed the panel's starting values and optionally expose the
// resumable (tus) switcher (mirrors admin v5's behavior).
uploader.config = {
  auth: { /* ... */ },
  uploadSettings: {
${s.join(`
`)}
  },
};`}b("#code-container",[{label:"JavaScript",lang:"javascript",code:e}])}const y={render(){return`
      <div class="page-header">
        <h1>Upload settings</h1>
        <p>The uploader ships with a built-in <strong>settings panel</strong> — a gear icon appears in the header once the queue contains an image, PDF, or video, letting users tune <strong>image resizing</strong>, <strong>video transcoding</strong>, and (optionally) <strong>resumable uploads</strong> before uploading. Pass <code>uploadSettings: false</code> to disable the panel entirely, or use <code>uploadSettings.defaults</code> / <code>uploadSettings.showResumableSwitcher</code> to tune its behavior.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="us-panel">Settings panel</label>
            <select id="us-panel">
              <option value="true" selected>Enabled</option>
              <option value="false">Disabled</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resumable-switcher">Resumable switcher</label>
            <select id="us-resumable-switcher">
              <option value="false" selected>Hidden</option>
              <option value="true">Shown</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resize">Resize images</label>
            <select id="us-resize">
              <option value="false" selected>Off</option>
              <option value="true">On</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-max-width">Max width</label>
            <select id="us-max-width">
              <option value="" selected>—</option>
              <option value="1024">1024 px</option>
              <option value="2048">2048 px</option>
              <option value="4096">4096 px</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-max-height">Max height</label>
            <select id="us-max-height">
              <option value="" selected>—</option>
              <option value="1024">1024 px</option>
              <option value="2048">2048 px</option>
              <option value="4096">4096 px</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-transcode">Transcode video</label>
            <select id="us-transcode">
              <option value="false" selected>Off</option>
              <option value="true">On</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resolution">Resolution</label>
            <select id="us-resolution">
              <option value="auto" selected>Auto</option>
              <option value="mobile">Mobile</option>
              <option value="tablet">Tablet</option>
              <option value="desktop">Desktop</option>
              <option value="hq">HQ</option>
              <option value="sample">Sample</option>
            </select>
          </div>
          <div class="form-group">
            <label for="us-resumable">Resumable</label>
            <select id="us-resumable">
              <option value="false" selected>Off</option>
              <option value="true">On</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>How it works</h2>
        <ol>
          <li>Add a file to the uploader — the <strong>gear icon</strong> appears in the header when at least one image, PDF, or video is queued.</li>
          <li>Click it to open the settings panel in the preview side area.</li>
          <li>Adjust the controls before uploading. The panel has up to three sections:</li>
        </ol>
        <ul>
          <li><strong>Image settings</strong> — shown when the queue contains images or PDFs. Toggle <em>Resize Images</em> and set Max Width / Max Height (px). When enabled, the upload request gets <code>&amp;resize=W,H</code>.</li>
          <li><strong>Video settings</strong> — shown when the queue contains a video. Toggle <em>Transcode video</em>, pick a Resolution (${Object.values(S).join(" / ")}). Protocol is HLS (DASH was removed). When enabled, the upload request gets <code>&amp;postprocess=transcode&amp;video-resolution=…&amp;video_protocols=hls</code>.</li>
          <li><strong>Resume uploads</strong> — only shown when the host sets <code>uploadSettings.showResumableSwitcher: true</code>. Toggles the resumable (tus) upload path on/off. Marked <strong>Beta</strong>.</li>
        </ul>
        <p>Pass <code>uploadSettings: false</code> to disable the gear button entirely. Otherwise the panel is available by default; <code>defaults</code> only changes the controls' initial values.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){r=!0,n=!1,d=!1,l=void 0,i=void 0,c=!1,p="auto",g=!1,a();const o=w();document.getElementById("us-panel").addEventListener("change",e=>{r=e.target.value==="true",a()}),document.getElementById("us-resumable-switcher").addEventListener("change",e=>{n=e.target.value==="true",a()}),document.getElementById("us-resize").addEventListener("change",e=>{d=e.target.value==="true",a()}),document.getElementById("us-max-width").addEventListener("change",e=>{const s=e.target.value;l=s?Number(s):void 0,a()}),document.getElementById("us-max-height").addEventListener("change",e=>{const s=e.target.value;i=s?Number(s):void 0,a()}),document.getElementById("us-transcode").addEventListener("change",e=>{c=e.target.value==="true",a()}),document.getElementById("us-resolution").addEventListener("change",e=>{p=e.target.value,a()}),document.getElementById("us-resumable").addEventListener("change",e=>{g=e.target.value==="true",a()}),document.getElementById("open-btn").addEventListener("click",()=>{const e=h();t.config=f({...e!==void 0?{uploadSettings:e}:{}}),t.open()}),y.destroy=()=>o()}};export{y as default};
