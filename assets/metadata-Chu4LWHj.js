import{b as z}from"./index-DGHTKvsv.js";import{r as A}from"./code-block-Bk3NnwHF.js";const C="sfx-uploader-demo-meta",M={projectUuid:"",enforceRequired:"auto",sessionToken:"",companyToken:"",projectToken:""};function B(){try{const t=localStorage.getItem(C);if(t)return{...M,...JSON.parse(t)}}catch{}return{...M}}function D(t){localStorage.setItem(C,JSON.stringify(t))}let l=null;function m(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function p(t,n){if(!l)return;const r=new Date().toLocaleTimeString(),d=document.createElement("div"),c=n?` <span class="log-data">${m(JSON.stringify(n,null,0))}</span>`:"";d.innerHTML=`<span class="log-time">${m(r)}</span> <span class="log-event">${m(t)}</span>${c}`,l.appendChild(d),l.scrollTop=l.scrollHeight}const g={render(){return`
      <div class="page-header">
        <h1>Metadata editing</h1>
        <p>
          Enable the built-in metadata form by providing a <code>metadataConfig</code> with the project UUID.
          The uploader fetches the project's metadata schema and renders a form for editing per-file metadata before upload.
        </p>
      </div>

      <section class="page-section">
        <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end; margin-bottom: 12px;">
          <div>
            <label style="display: block; font-size: 13px; color: #64748b; margin-bottom: 4px;">Project UUID</label>
            <input id="project-uuid" type="text" placeholder="Enter project UUID"
              style="width: 340px; height: 36px; padding: 0 10px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 14px; font-family: inherit;" />
          </div>
          <div>
            <label style="display: block; font-size: 13px; color: #64748b; margin-bottom: 4px;">Enforce required</label>
            <div class="meta-select" id="enforce-required-wrap" data-value="auto" style="position: relative; width: 140px;">
              <button type="button" class="meta-select-trigger" style="width: 100%; height: 36px; padding: 0 12px; border: 1px solid #e2e8f0; border-radius: 6px; background: #fff; font-size: 14px; font-family: inherit; color: #1e293b; cursor: pointer; display: flex; align-items: center; gap: 8px; box-sizing: border-box; text-align: left;">
                <span class="meta-select-label" style="flex: 1;">auto</span>
                <svg class="meta-select-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; transition: transform 0.18s ease;"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="meta-select-menu" style="display: none; position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 20; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 4px 0;">
                <button type="button" class="meta-select-option" data-value="false" style="display: block; width: 100%; padding: 10px 12px; border: none; background: none; font-size: 14px; font-family: inherit; color: #1e293b; cursor: pointer; text-align: left;">false</button>
                <button type="button" class="meta-select-option" data-value="true" style="display: block; width: 100%; padding: 10px 12px; border: none; background: none; font-size: 14px; font-family: inherit; color: #1e293b; cursor: pointer; text-align: left;">true</button>
                <button type="button" class="meta-select-option" data-value="auto" style="display: block; width: 100%; padding: 10px 12px; border: none; background: none; font-size: 14px; font-family: inherit; color: #2563eb; background: #eff6ff; font-weight: 500; cursor: pointer; text-align: left;">auto</button>
              </div>
            </div>
          </div>
        </div>
        <details style="margin-bottom: 12px;">
          <summary style="cursor: pointer; font-size: 13px; color: #64748b; margin-bottom: 8px;">Hub auth tokens (required for schema fetch)</summary>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: end; margin-top: 8px;">
            <div>
              <label style="display: block; font-size: 12px; color: #94a3b8; margin-bottom: 2px;">x-session-token</label>
              <input id="hub-session" type="text" placeholder="session UUID"
                style="width: 320px; height: 32px; padding: 0 8px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 13px; font-family: inherit;" />
            </div>
            <div>
              <label style="display: block; font-size: 12px; color: #94a3b8; margin-bottom: 2px;">x-company-token</label>
              <input id="hub-company" type="text" placeholder="company UUID"
                style="width: 320px; height: 32px; padding: 0 8px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 13px; font-family: inherit;" />
            </div>
            <div>
              <label style="display: block; font-size: 12px; color: #94a3b8; margin-bottom: 2px;">x-project-token</label>
              <input id="hub-project" type="text" placeholder="project UUID (same as above)"
                style="width: 320px; height: 32px; padding: 0 8px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 13px; font-family: inherit;" />
            </div>
          </div>
        </details>
        <button class="btn-primary" id="open-btn">Open uploader with metadata</button>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px; align-items: flex-start;">
          <label style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #475569; cursor: pointer;">
            <input type="checkbox" id="main-modal-large" style="width: 16px; height: 16px; cursor: pointer;" />
            Wider main modal (min(90vw, 1600px) × 92vh)
          </label>
          <label style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: #475569; cursor: pointer;">
            <input type="checkbox" id="bulk-modal-large" style="width: 16px; height: 16px; cursor: pointer;" />
            Larger bulk modal (90vw × 90vh)
          </label>
        </div>
      </section>

      <section class="page-section">
        <h2>Event log</h2>
        <div class="event-log" id="event-log">
          <div><span class="log-time">--:--:--</span> Waiting for events...</div>
        </div>
        <button class="btn-outline btn-sm" id="clear-log">Clear log</button>
      </section>

      <section class="page-section">
        <h2>How it works</h2>
        <ol style="font-size: 14px; line-height: 1.8; color: #475569; padding-left: 20px;">
          <li>The uploader loads the metadata schema in one of two ways:
            <ul style="margin: 4px 0 4px 16px; list-style: disc;">
              <li><strong>Hub API fetch</strong> &mdash; calls <code>hub.scaleflex.com/api/project/{projectUuid}</code> using <code>hubHeaders</code>.</li>
              <li><strong>Pre-fetched (rawMetadata)</strong> &mdash; if your app already has the schema (e.g. from the airbox/sharebox API response), pass it via <code>rawMetadata</code> and no extra fetch is made.</li>
            </ul>
          </li>
          <li>A "Fill Metadata" button appears in the actions bar (auto-enabled when <code>metadataConfig</code> is set).</li>
          <li>Click a file to open the preview sidebar &mdash; edit that file's metadata inline.</li>
          <li>Click "Fill Metadata" to open the bulk editing modal &mdash; apply metadata across multiple files at once using SET, ADD, or DELETE operations.</li>
          <li>In the bulk modal, use the sidebar to navigate fields, the operation bar to bulk-apply values, or click individual cells to edit per-file.</li>
          <li>When required fields are missing, clicking <strong>Upload</strong> opens the bulk metadata editor positioned on the first missing field, and the "Fill Metadata" button is promoted to primary. Enforcement is on by default (<code>enforceRequiredBeforeUpload: 'auto'</code>) whenever a field has <code>required: 1</code>, the API sets <code>force_filling_metadata_on_upload</code>, or you pass an explicit <code>requiredFields</code> list. Set it to <code>false</code> to opt out.</li>
          <li>Metadata is included in the upload request automatically &mdash; no changes to the upload flow needed.</li>
        </ol>
        <div style="margin-top: 12px; padding: 12px 16px; background: #eff6ff; border-radius: 8px; font-size: 13px; color: #1e40af;">
          <strong>Finding your project UUID:</strong> In the Filerobot Hub, the project UUID is available from the session data
          at <code>session_company.projects_roles[].project_uuid</code>.
          Your app should pass it from the authenticated user's session context.
        </div>
        <div style="margin-top: 8px; padding: 12px 16px; background: #f0fdf4; border-radius: 8px; font-size: 13px; color: #166534;">
          <strong>Airbox / Sharebox integration:</strong> The airbox API response (<code>GET /v3/a/{puid}/{title}?format=json</code>)
          already includes the full metadata schema at <code>airbox.metadata</code>. Pass it as <code>rawMetadata</code>
          to avoid an extra Hub API call and the need for Hub session tokens.
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>

      <section class="page-section">
        <h2>MetadataConfig options</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="border-bottom: 2px solid #e2e8f0; text-align: left;">
              <th style="padding: 8px 12px;">Option</th>
              <th style="padding: 8px 12px;">Type</th>
              <th style="padding: 8px 12px;">Default</th>
              <th style="padding: 8px 12px;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>projectUuid</code></td>
              <td style="padding: 8px 12px;"><code>string</code></td>
              <td style="padding: 8px 12px;">&mdash;</td>
              <td style="padding: 8px 12px;"><strong>Required.</strong> The Filerobot project UUID. Used as cache key and for Hub API fetch (when <code>rawMetadata</code> is not provided).</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>rawMetadata</code></td>
              <td style="padding: 8px 12px;"><code>RawMetadata</code></td>
              <td style="padding: 8px 12px;">&mdash;</td>
              <td style="padding: 8px 12px;">Pre-fetched metadata schema object (e.g. <code>airboxResponse.airbox.metadata</code>). When provided, the Hub API call is skipped entirely &mdash; no <code>hubHeaders</code> needed.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>hubHeaders</code></td>
              <td style="padding: 8px 12px;"><code>Record&lt;string, string&gt;</code></td>
              <td style="padding: 8px 12px;">&mdash;</td>
              <td style="padding: 8px 12px;">Hub API session auth headers: <code>x-session-token</code>, <code>x-company-token</code>, <code>x-project-token</code>. Required when <code>rawMetadata</code> is not provided.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>hubApiBase</code></td>
              <td style="padding: 8px 12px;"><code>string</code></td>
              <td style="padding: 8px 12px;"><code>'https://hub.scaleflex.com/api'</code></td>
              <td style="padding: 8px 12px;">Hub API base URL. Override for dev/staging environments.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>fields</code></td>
              <td style="padding: 8px 12px;"><code>'all' | string[]</code></td>
              <td style="padding: 8px 12px;"><code>'all'</code></td>
              <td style="padding: 8px 12px;">Which fields to show. Pass an array of field ckeys to show a subset.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>requiredFields</code></td>
              <td style="padding: 8px 12px;"><code>string[]</code></td>
              <td style="padding: 8px 12px;">&mdash;</td>
              <td style="padding: 8px 12px;">Override which field ckeys are required. If not set, uses the schema's required flag.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>enforceRequiredBeforeUpload</code></td>
              <td style="padding: 8px 12px;"><code>boolean | 'auto'</code></td>
              <td style="padding: 8px 12px;"><code>'auto'</code></td>
              <td style="padding: 8px 12px;">When the user clicks Upload with a missing required field, the bulk metadata editor opens at the first missing field instead of starting the upload. <code>'auto'</code> (default) enforces when the schema has <code>force_filling_metadata_on_upload</code> set, any field has <code>required: 1</code>, or <code>requiredFields</code> is provided. Set to <code>false</code> to opt out, <code>true</code> to force enforcement.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>showTags</code></td>
              <td style="padding: 8px 12px;"><code>boolean</code></td>
              <td style="padding: 8px 12px;"><code>true</code></td>
              <td style="padding: 8px 12px;">Show tags field with autocomplete.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>language</code></td>
              <td style="padding: 8px 12px;"><code>string</code></td>
              <td style="padding: 8px 12px;"><code>'en'</code></td>
              <td style="padding: 8px 12px;">Language key for tags and regional variants.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 12px;"><code>defaults</code></td>
              <td style="padding: 8px 12px;"><code>Record&lt;string, unknown&gt;</code></td>
              <td style="padding: 8px 12px;">&mdash;</td>
              <td style="padding: 8px 12px;">Default metadata values applied to every new file.</td>
            </tr>
          </tbody>
        </table>
      </section>
    `},init(t){l=document.getElementById("event-log"),A("#code-container",[{label:"Basic",lang:"javascript",code:`
uploader.config = {
  auth: {
    mode: 'security-template',
    container: 'YOUR_CONTAINER',
    securityTemplateId: 'SECU_...',
  },
  metadataConfig: {
    projectUuid: 'YOUR_PROJECT_UUID',
    enforceRequiredBeforeUpload: 'auto',
    // Hub API uses session auth (not the SASS key)
    hubHeaders: {
      'x-session-token': sessionUuid,
      'x-company-token': companyUuid,
      'x-project-token': projectUuid,
    },
  },
  // showFillMetadata is auto-enabled when metadataConfig is set
};`},{label:"Airbox / rawMetadata",lang:"javascript",code:`
// Fetch airbox config — metadata schema is included
const res = await fetch(airboxUrl + '?format=json');
const { airbox } = await res.json();

uploader.config = {
  auth: {
    mode: 'sass-key',
    container: airbox.token,
    sassKey: airbox.filerobotKey,
  },
  targetDir: airbox.targetDir,
  metadataConfig: {
    projectUuid: airbox.token,            // any stable key for caching
    rawMetadata: airbox.metadata,         // pass the schema directly
    enforceRequiredBeforeUpload: 'auto',
  },
};`},{label:"Specific fields",lang:"javascript",code:`
metadataConfig: {
  projectUuid: 'YOUR_PROJECT_UUID',
  fields: ['title', 'description', 'category'],
  requiredFields: ['title'],
  enforceRequiredBeforeUpload: true,
}`},{label:"With callbacks",lang:"javascript",code:`
uploader.config = {
  auth: { /* ... */ },
  metadataConfig: {
    projectUuid: 'YOUR_PROJECT_UUID',
  },
  callbacks: {
    // Still fires when "Fill Metadata" is clicked (backward compat)
    onFillMetadata: (files) => {
      console.log('Fill metadata for', files.length, 'files');
    },
    onAllComplete: (ok, failed) => {
      // Metadata is included in each file's upload response
      ok.forEach(f => console.log(f.name, f.response?.file?.meta));
    },
  },
};`},{label:"Resize modals",lang:"css",code:`
/* Both modals are sized independently. Change either, both, or neither. */
sfx-uploader {
  /* Main uploader modal (default: 1100px × 88vh) */
  --sfx-up-modal-max-width: min(90vw, 1600px);
  --sfx-up-max-height: 92vh;

  /* Bulk metadata edit modal (default: 980px × 82vh) */
  --sfx-up-bulk-modal-width: 90vw;
  --sfx-up-bulk-modal-height: 90vh;
}

/* Or set inline right before opening: */
/*
uploader.style.setProperty('--sfx-up-modal-max-width', 'min(90vw, 1600px)');
uploader.style.setProperty('--sfx-up-bulk-modal-width', '90vw');
uploader.open();
*/`}]);const n=[["sfx-file-added",e=>{var o;return p("file-added",{name:(o=e.detail.file)==null?void 0:o.name})}],["sfx-fill-metadata",e=>{var o;return p("fill-metadata",{files:(o=e.detail.files)==null?void 0:o.length})}],["sfx-metadata-schema",e=>{var a,s;const o=((a=e.detail.schema)==null?void 0:a.fields)??[];p("metadata-schema",{totalFields:o.length,requiredFieldKeys:e.detail.requiredFieldKeys??[],forceFillingOnUpload:(s=e.detail.schema)==null?void 0:s.forceFillingOnUpload})}],["sfx-upload-complete",e=>{var o,a,s;return p("upload-complete",{name:(o=e.detail.file)==null?void 0:o.name,meta:(s=(a=e.detail.response)==null?void 0:a.file)==null?void 0:s.meta})}],["sfx-all-complete",e=>{var o,a;return p("all-complete",{ok:(o=e.detail.successful)==null?void 0:o.length,failed:(a=e.detail.failed)==null?void 0:a.length})}]],r=[];n.forEach(([e,o])=>{const a=o;t.addEventListener(e,a),r.push([e,a])}),g._listeners=r,document.getElementById("clear-log").addEventListener("click",()=>{l&&(l.innerHTML='<div><span class="log-time">--:--:--</span> Log cleared.</div>')});const d=B(),c=document.getElementById("project-uuid"),i=document.getElementById("enforce-required-wrap"),R=i.querySelector(".meta-select-trigger"),S=i.querySelector(".meta-select-label"),h=i.querySelector(".meta-select-chevron"),y=i.querySelector(".meta-select-menu"),b=i.querySelectorAll(".meta-select-option"),v=document.getElementById("hub-session"),k=document.getElementById("hub-company"),w=document.getElementById("hub-project"),f=e=>{i.dataset.value=e,S.textContent=e,b.forEach(o=>{const a=o.dataset.value===e;o.style.color=a?"#2563eb":"#1e293b",o.style.background=a?"#eff6ff":"transparent",o.style.fontWeight=a?"500":"400"})};let u=!1;const x=()=>{u=!1,y.style.display="none",h.style.transform="rotate(0deg)"},_=()=>{u=!0,y.style.display="block",h.style.transform="rotate(180deg)"};R.addEventListener("click",e=>{e.stopPropagation(),u?x():_()}),b.forEach(e=>{e.addEventListener("mouseenter",()=>{e.dataset.value!==i.dataset.value&&(e.style.background="#f1f5f9")}),e.addEventListener("mouseleave",()=>{e.dataset.value!==i.dataset.value&&(e.style.background="transparent")}),e.addEventListener("click",()=>{f(e.dataset.value||"auto"),x()})}),document.addEventListener("click",e=>{i.contains(e.target)||x()}),d.projectUuid&&(c.value=d.projectUuid),d.enforceRequired?f(d.enforceRequired):f("auto"),d.sessionToken&&(v.value=d.sessionToken),d.companyToken&&(k.value=d.companyToken),d.projectToken&&(w.value=d.projectToken),document.getElementById("open-btn").addEventListener("click",()=>{var P,T;const e=c.value.trim(),o=i.dataset.value||"auto",a=v.value.trim(),s=k.value.trim(),U=w.value.trim()||e;if(D({projectUuid:e,enforceRequired:o,sessionToken:a,companyToken:s,projectToken:U}),!e){alert("Please enter a project UUID");return}const E=o==="true"?!0:o==="auto"?"auto":!1,j=a&&s?{"x-session-token":a,"x-company-token":s,"x-project-token":U}:void 0,I=((P=document.getElementById("main-modal-large"))==null?void 0:P.checked)??!1;I?(t.style.setProperty("--sfx-up-modal-max-width","min(90vw, 1600px)"),t.style.setProperty("--sfx-up-max-height","92vh")):(t.style.removeProperty("--sfx-up-modal-max-width"),t.style.removeProperty("--sfx-up-max-height"));const q=((T=document.getElementById("bulk-modal-large"))==null?void 0:T.checked)??!1;q?(t.style.setProperty("--sfx-up-bulk-modal-width","90vw"),t.style.setProperty("--sfx-up-bulk-modal-height","90vh")):(t.style.removeProperty("--sfx-up-bulk-modal-width"),t.style.removeProperty("--sfx-up-bulk-modal-height")),p("config",{projectUuid:e,enforce:E,hasHubHeaders:!!j,largeMain:I,largeBulk:q}),t.config=z({metadataConfig:{projectUuid:e,enforceRequiredBeforeUpload:E,hubHeaders:j}}),t.open()})},destroy(){const t=document.getElementById("uploader"),n=g._listeners;t&&n&&n.forEach(([r,d])=>t.removeEventListener(r,d)),t&&(t.style.removeProperty("--sfx-up-modal-max-width"),t.style.removeProperty("--sfx-up-max-height"),t.style.removeProperty("--sfx-up-bulk-modal-width"),t.style.removeProperty("--sfx-up-bulk-modal-height")),g._listeners=void 0,l=null}};export{g as default};
