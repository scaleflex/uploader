import{b as r}from"./index-DvQFj97E.js";import{r as c}from"./code-block-C_3oxnLY.js";let s=null;const d=[];function i(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function o(n,t){if(!s)return;const e=new Date().toLocaleTimeString(),l=document.createElement("div"),a=t?` <span class="log-data">${i(JSON.stringify(t,null,0))}</span>`:"";l.innerHTML=`<span class="log-time">${i(e)}</span> <span class="log-event">${i(n)}</span>${a}`,s.appendChild(l),s.scrollTop=s.scrollHeight}const g={render(){return`
      <div class="page-header">
        <h1>Event handling</h1>
        <p>The uploader fires events for file additions, upload progress, completion, and errors. Use callback props or DOM event listeners.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open uploader</button>
      </section>

      <section class="page-section">
        <h2>Event log</h2>
        <div class="event-log" id="event-log">
          <div><span class="log-time">--:--:--</span> Waiting for events...</div>
        </div>
        <button class="btn-outline btn-sm" id="clear-log">Clear log</button>
      </section>

      <section class="page-section">
        <h2>Callback props</h2>
        <div id="code-callbacks"></div>
      </section>

      <section class="page-section">
        <h2>DOM events</h2>
        <div id="code-events"></div>
      </section>
    `},init(n){s=document.getElementById("event-log"),c("#code-callbacks",[{label:"JavaScript",lang:"javascript",code:`
uploader.config = {
  auth: { /* ... */ },
  callbacks: {
    onFileAdded: (file) => console.log('Added:', file.name),
    onUploadProgress: (file, progress) => {
      console.log(\`\${file.name}: \${progress}%\`);
    },
    onUploadComplete: (file, response) => {
      console.log('Uploaded:', response.file.url.cdn);
    },
    onAllComplete: (ok, failed) => {
      console.log(\`Done: \${ok.length} ok, \${failed.length} failed\`);
    },
  },
};`}]),c("#code-events",[{label:"JavaScript",lang:"javascript",code:`
// DOM custom events (alternative to callbacks)
uploader.addEventListener('sfx-file-added', (e) => {
  console.log('Added:', e.detail.file.name);
});

uploader.addEventListener('sfx-upload-complete', (e) => {
  console.log('Uploaded:', e.detail.file.name);
});

uploader.addEventListener('sfx-all-complete', (e) => {
  console.log('All done:', e.detail.successful.length, 'ok');
});

uploader.addEventListener('sfx-upload-error', (e) => {
  console.error('Failed:', e.detail.file.name, e.detail.error);
});`}]),[["sfx-file-added",e=>{var l;return o("sfx-file-added",{name:(l=e.detail.file)==null?void 0:l.name})}],["sfx-file-removed",e=>{var l;return o("sfx-file-removed",{name:(l=e.detail.file)==null?void 0:l.name})}],["sfx-file-rejected",e=>{var l;return o("sfx-file-rejected",{name:(l=e.detail.file)==null?void 0:l.name,reason:e.detail.reason})}],["sfx-upload-started",e=>{var l;return o("sfx-upload-started",{count:(l=e.detail.files)==null?void 0:l.length})}],["sfx-upload-progress",e=>{var l;return o("sfx-upload-progress",{name:(l=e.detail.file)==null?void 0:l.name,progress:e.detail.progress})}],["sfx-upload-complete",e=>{var l;return o("sfx-upload-complete",{name:(l=e.detail.file)==null?void 0:l.name})}],["sfx-upload-error",e=>{var l,a;return o("sfx-upload-error",{name:(l=e.detail.file)==null?void 0:l.name,error:(a=e.detail.error)==null?void 0:a.message})}],["sfx-all-complete",e=>{var l,a;return o("sfx-all-complete",{ok:(l=e.detail.successful)==null?void 0:l.length,failed:(a=e.detail.failed)==null?void 0:a.length})}],["sfx-open",()=>o("sfx-open")],["sfx-close",()=>o("sfx-close")],["sfx-cancel",()=>o("sfx-cancel")],["sfx-file-locate",e=>{var l;o("sfx-file-locate",{name:(l=e.detail.file)==null?void 0:l.name,url:e.detail.url}),e.preventDefault()}],["sfx-file-copy-cdn",e=>{var l;return o("sfx-file-copy-cdn",{name:(l=e.detail.file)==null?void 0:l.name,cdnUrl:e.detail.cdnUrl})}]].forEach(([e,l])=>{const a=l;n.addEventListener(e,a),d.push([e,a])}),document.getElementById("clear-log").addEventListener("click",()=>{s&&(s.innerHTML='<div><span class="log-time">--:--:--</span> Log cleared.</div>')}),document.getElementById("open-btn").addEventListener("click",()=>{o("open"),n.config=r({callbacks:{onFileAdded:e=>o("onFileAdded callback",{name:e.name}),onAllComplete:(e,l)=>o("onAllComplete callback",{ok:e.length,failed:l.length})}}),n.open()})},destroy(){const n=document.getElementById("uploader");n&&d.forEach(([t,e])=>n.removeEventListener(t,e)),d.length=0,s=null}};export{g as default};
