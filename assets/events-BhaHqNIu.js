import{b as r}from"./index-B64bO1U5.js";import{r as c}from"./code-block-Bk3NnwHF.js";let s=null;const d=[];function i(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function o(n,t){if(!s)return;const l=new Date().toLocaleTimeString(),e=document.createElement("div"),a=t?` <span class="log-data">${i(JSON.stringify(t,null,0))}</span>`:"";e.innerHTML=`<span class="log-time">${i(l)}</span> <span class="log-event">${i(n)}</span>${a}`,s.appendChild(e),s.scrollTop=s.scrollHeight}const g={render(){return`
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
});`}]),[["sfx-file-added",l=>{var e;return o("sfx-file-added",{name:(e=l.detail.file)==null?void 0:e.name})}],["sfx-file-removed",l=>{var e;return o("sfx-file-removed",{name:(e=l.detail.file)==null?void 0:e.name})}],["sfx-file-rejected",l=>{var e;return o("sfx-file-rejected",{name:(e=l.detail.file)==null?void 0:e.name,reason:l.detail.reason})}],["sfx-upload-started",l=>{var e;return o("sfx-upload-started",{count:(e=l.detail.files)==null?void 0:e.length})}],["sfx-upload-progress",l=>{var e;return o("sfx-upload-progress",{name:(e=l.detail.file)==null?void 0:e.name,progress:l.detail.progress})}],["sfx-upload-complete",l=>{var e;return o("sfx-upload-complete",{name:(e=l.detail.file)==null?void 0:e.name})}],["sfx-upload-error",l=>{var e,a;return o("sfx-upload-error",{name:(e=l.detail.file)==null?void 0:e.name,error:(a=l.detail.error)==null?void 0:a.message})}],["sfx-all-complete",l=>{var e,a;return o("sfx-all-complete",{ok:(e=l.detail.successful)==null?void 0:e.length,failed:(a=l.detail.failed)==null?void 0:a.length})}],["sfx-open",()=>o("sfx-open")],["sfx-close",()=>o("sfx-close")],["sfx-cancel",()=>o("sfx-cancel")],["sfx-file-locate",l=>{var e;return o("sfx-file-locate",{name:(e=l.detail.file)==null?void 0:e.name})}],["sfx-file-copy-cdn",l=>{var e;return o("sfx-file-copy-cdn",{name:(e=l.detail.file)==null?void 0:e.name,cdnUrl:l.detail.cdnUrl})}]].forEach(([l,e])=>{const a=e;n.addEventListener(l,a),d.push([l,a])}),document.getElementById("clear-log").addEventListener("click",()=>{s&&(s.innerHTML='<div><span class="log-time">--:--:--</span> Log cleared.</div>')}),document.getElementById("open-btn").addEventListener("click",()=>{o("open"),n.config=r({callbacks:{onFileAdded:l=>o("onFileAdded callback",{name:l.name}),onAllComplete:(l,e)=>o("onAllComplete callback",{ok:l.length,failed:e.length})}}),n.open()})},destroy(){const n=document.getElementById("uploader");n&&d.forEach(([t,l])=>n.removeEventListener(t,l)),d.length=0,s=null}};export{g as default};
