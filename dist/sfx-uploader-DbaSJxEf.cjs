"use strict";const n=require("lit"),p=require("lit/decorators.js"),U=require("lit/directives/unsafe-svg.js"),O=require("lit/directives/unsafe-html.js");class we{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(r=>r(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const r=this._pendingState;this._pendingState=null,this.setState(r)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function k(a,e,t){const r=a.getState().files,i=r.get(e);if(!i)return;const s=new Map(r);s.set(e,{...i,...t}),a.setState({files:s})}function L(a,e){const t=new Map(a.getState().files);t.set(e.id,e),a.setState({files:t})}function ge(a,e){const t=a.getState().files;if(!t.has(e))return;const r=new Map(t);r.delete(e),a.setState({files:r})}function _e(){return new we({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class Ee{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Ue(a,e){const t=new XMLHttpRequest;let r=!1;const s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;t.open("POST",s);for(const[l,c]of Object.entries(e.authHeaders))t.setRequestHeader(l,c);t.upload.addEventListener("progress",l=>{l.lengthComputable&&!r&&e.onProgress(l.loaded,l.total)}),t.addEventListener("load",()=>{if(r)return;let l;try{l=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&l.status==="success"?e.onComplete(l):e.onError(new Error(l.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))});const o=new FormData;if(a.file){const l={name:a.name,type:a.type};Object.keys(a.meta).length>0&&(l.meta=a.meta),a.tags.length>0&&(l.tags=a.tags),o.append("info[files[]]",JSON.stringify(l)),o.append("files[]",a.file,a.name)}return t.timeout=6e4,t.send(o),{abort(){r=!0,t.abort()}}}function Pe(a,e){const t=new XMLHttpRequest;let r=!1;const s=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;t.open("POST",s);for(const[l,c]of Object.entries(e.authHeaders))t.setRequestHeader(l,c);if(t.setRequestHeader("Content-Type","application/json"),t.addEventListener("load",()=>{if(r)return;let l;try{l=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&l.status==="success"?e.onComplete(l):e.onError(new Error(l.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))}),!a.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const o={files_urls:[{url:a.remoteUrl,name:a.name}],dir:e.folder};return t.timeout=6e4,t.send(JSON.stringify(o)),{abort(){r=!0,t.abort()}}}function G(a){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":a}}function A(a){return a.replace(/\/+$/,"")}const De={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function B(a){return De[a]??a}function ze(a,e){const t=A(a),r=btoa(JSON.stringify({origin:window.location.origin})),i=B(e);return`${t}/${i}/connect?state=${encodeURIComponent(r)}`}async function Fe(a,e,t,r=""){const i=A(a),s=r?`/${r}`:"",o=B(e),l=await fetch(`${i}/${o}/list${s}`,{method:"GET",headers:G(t),credentials:"same-origin"});if(l.status===401)throw new J;if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Te(a,e,t){const r=A(a),i=await fetch(`${r}/${t}`,{method:"GET",headers:G(e),credentials:"same-origin"});if(i.status===401)throw new J;if(!i.ok){const s=await i.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Companion list failed (HTTP ${i.status})`)}return i.json()}async function Le(a,e,t,r){const i=A(a),s=B(e),o=r?`q=${encodeURIComponent(t)}&${r}`:`q=${encodeURIComponent(t)}`,l=await fetch(`${i}/search/${s}/list?${o}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Search failed (HTTP ${l.status})`)}return l.json()}async function Re(a,e,t,r,i,s=!1){const o=A(a),l=B(e),c=s?`${o}/search/${l}/get/${r}`:`${o}/${l}/get/${r}`,d=s?{Accept:"application/json","Content-Type":"application/json"}:G(t),u=await fetch(c,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...i,httpMethod:i.httpMethod??"POST",useFormData:i.useFormData??!0,fieldname:i.fieldname??"files[]"})});if(u.status===401)throw new J;if(!u.ok){const f=await u.json().catch(()=>null);throw new Error((f==null?void 0:f.message)||`Companion upload failed (HTTP ${u.status})`)}return u.json()}async function Oe(a,e,t){const r=A(a),i=B(e),s=await fetch(`${r}/${i}/logout`,{method:"GET",headers:G(t),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function Me(a){var i;const t=((i=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(a))==null?void 0:i[1])??a;return`${location.protocol==="https:"?"wss":"ws"}://${t}`}class J extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function je(a,e){const t=a.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let r=!1,i=null;const o=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,l={};a.meta&&Object.keys(a.meta).length>0&&Object.assign(l,a.meta),a.tags&&a.tags.length>0&&(l.tags=a.tags);const c=!t.token;return Re(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:o,headers:e.authHeaders,size:t.size,metadata:Object.keys(l).length>0?l:void 0},c).then(d=>{if(r)return;const f=`${Me(t.companionUrl)}/api/${d.token}`;try{i=new WebSocket(f)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}i.onmessage=h=>{var g,m,v;if(!r)try{const T=JSON.parse(h.data);switch(T.action){case"progress":{const y=T.payload,E=y.bytesUploaded??0,I=y.bytesTotal??(t.size||1);e.onProgress(E,I);break}case"success":{const y=T.payload;if(i==null||i.close(),(g=y.response)!=null&&g.responseText)try{const E=JSON.parse(y.response.responseText);if(E.status==="success"){e.onComplete(E);return}e.onError(new Error(E.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{i==null||i.close();const y=T.payload;let E=((m=y.error)==null?void 0:m.message)||"Upload failed";if((v=y.response)!=null&&v.responseText)try{const I=JSON.parse(y.response.responseText);E=I.hint||I.msg||I.message||E}catch{}e.onError(new Error(E));break}}}catch{}},i.onerror=()=>{r||e.onError(new Error("Upload progress connection failed"))},i.onclose=()=>{i=null}}).catch(d=>{r||e.onError(d instanceof Error?d:new Error(String(d)))}),{abort(){if(r=!0,i){try{i.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}i.close(),i=null}}}}class ke{constructor(e,t){this.activeUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const r of e.values())r.status==="idle"?(k(this.store,r.id,{status:"queued"}),t=!0):r.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(k(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&k(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}cancelFile(e){const t=this.store.getState().files.get(e);!t||!xe(t.status)||(this.abortUpload(e),k(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())xe(t.status)&&(this.abortUpload(t.id),k(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,r=this.activeUploads.size,i=t-r;if(i<=0)return;const o=[...e.files.values()].filter(l=>l.status==="queued").sort((l,c)=>l.retryCount!==c.retryCount?c.retryCount-l.retryCount:l.addedAt-c.addedAt).slice(0,i);for(const l of o)this.startUpload(l)}startUpload(e){k(this.store,e.id,{status:"uploading",error:null});let t=0,r=Date.now(),i=0;const s={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:c=>this.handleComplete(e.id,c),onError:c=>this.handleError(e.id,c)},o=(c,d)=>{const u=Date.now(),f=(u-r)/1e3;if(f>0){const g=(c-t)/f;i=i===0?g:.3*g+.7*i}t=c,r=u;const h=d>0?c/d*100:0;k(this.store,e.id,{progress:h,bytesUploaded:c,speed:i}),this.updateTotalProgress()};let l;e.remoteInfo?l=je(e,{...s,onProgress:o}):e.remoteUrl?l=Pe(e,s):l=Ue(e,{...s,onProgress:o}),this.activeUploads.set(e.id,l)}handleComplete(e,t){this.activeUploads.delete(e),k(this.store,e,{status:"complete",progress:100,response:t}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const r=this.store.getState().files.get(e);if(!r)return;const{retryConfig:i}=this.store.getState().queueConfig,s=r.retryCount+1;if(s<=i.maxRetries){const o=Math.min(i.baseDelay*Math.pow(i.backoffFactor,r.retryCount),i.maxDelay);k(this.store,e,{status:"retrying",error:t.message,retryCount:s});const l=setTimeout(()=>{this.retryTimers.delete(e),k(this.store,e,{status:"queued"}),this.processQueue()},o);this.retryTimers.set(e,l)}else k(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,r=0,i=0;for(const s of e.values())(s.status==="queued"||s.status==="uploading"||s.status==="retrying"||s.status==="complete"||s.status==="failed")&&(t+=s.size,r+=s.status==="complete"?s.size:s.bytesUploaded),s.status==="uploading"&&(i+=s.speed);this.store.setState({totalBytes:t,totalBytesUploaded:r,totalSpeed:i,totalProgress:t>0?r/t*100:0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function xe(a){return a==="queued"||a==="uploading"||a==="retrying"}function Z(a){return`https://api.filerobot.com/${a}`}async function Ce(a,e){const t=`${Z(a)}/key/${encodeURIComponent(e)}`,r=new AbortController,i=setTimeout(()=>r.abort(),3e4);try{const s=await fetch(t,{signal:r.signal});if(clearTimeout(i),!s.ok)throw new Error(`SASS key exchange failed (HTTP ${s.status})`);const o=await s.json();if(o.status==="error")throw new Error(`SASS key exchange failed: ${o.msg||"Unknown error"}`);return o.key}catch(s){throw clearTimeout(i),s instanceof DOMException&&s.name==="AbortError"?new Error("SASS key exchange timed out"):s}}function N(a,e){const t={};switch(a.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=a.sassKey;break;case"session":t["X-Filerobot-Session"]=a.sessionToken,a.companyToken&&(t["X-Company-Token"]=a.companyToken),a.projectToken&&(t["X-Project-Token"]=a.projectToken);break}return a.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=a.airboxPuid),t}async function $e(a){const e=Z(a.container);if(a.mode==="security-template"){const t=await Ce(a.container,a.securityTemplateId);return{apiBase:e,headers:N(a,t),sassKey:t}}return{apiBase:e,headers:N(a)}}const x={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata"};let Ae=0;function R(){return`file-${Date.now()}-${++Ae}`}function V(a){if(a<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(a)/Math.log(1024)),e.length-1),r=a/Math.pow(1024,t);return`${t===0?r:r.toFixed(1)} ${e[t]}`}function Ie(a){var t;const e=((t=a.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return a.type.startsWith("image/")?"image":a.type.startsWith("video/")||["mp4","mov","avi","webm","mkv"].includes(e)?"vid":a.type==="application/pdf"||e==="pdf"?"pdf":["doc","docx","xls","xlsx","ppt","pptx","txt","rtf","odt"].includes(e)?"doc":["zip","rar","7z","tar","gz","bz2"].includes(e)?"zip":"gen"}function Be(a){const e=a.lastIndexOf(".");return e>=0?a.slice(e+1).toUpperCase():""}const He={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function qe(a){var t;const e=((t=a.split(".").pop())==null?void 0:t.toLowerCase())??"";return He[e]||""}function Ye(a){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const r=URL.createObjectURL(a);let i=!1;const s=()=>{i||(i=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r)};t.addEventListener("seeked",()=>{try{const o=document.createElement("canvas");o.width=t.videoWidth||320,o.height=t.videoHeight||240;const l=o.getContext("2d");if(l){l.drawImage(t,0,0,o.width,o.height),o.toBlob(c=>{i||(i=!0,e(c?URL.createObjectURL(c):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),t.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),t.src=r,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function te(a,e,t){var r,i;if(e.maxFileSize!=null&&a.size>0&&a.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&a.size>0){let s=a.size;for(const o of t.values())o.status!=="rejected"&&o.status!=="cancelled"&&(s+=o.size);if(s>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let s=0;for(const o of t.values())o.status!=="rejected"&&o.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,o="."+(((r=a.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(!s.some(c=>c.startsWith(".")?o===c.toLowerCase():c.endsWith("/*")?a.type.startsWith(c.slice(0,-1)):a.type===c))return"File type not allowed"}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,o="."+(((i=a.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(s.some(c=>c.startsWith(".")?o===c.toLowerCase():c.endsWith("/*")?a.type.startsWith(c.slice(0,-1)):a.type===c))return"File type is blocked"}return null}function Ne(a,e,t){return te(a,e,t)}function Ve(a){return a.allowedFileTypes?a.allowedFileTypes.join(","):""}const ve={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function Se(a){return a.filter(e=>e in ve).map(e=>ve[e])}var Xe=Object.defineProperty,We=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&Xe(e,t,i),i};const Ke='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Ge='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Je='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Ze='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',M=[{id:"device",label:"My Device",icon:Ke,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:Ge,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:Je,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:Ze,iconColor:"#ea580c"}],oe=class oe extends n.LitElement{constructor(){super(...arguments),this.sources=M}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return n.html`
      ${this.sources.map(e=>n.html`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?O.unsafeHTML(e.brandHtml):n.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${U.unsafeSVG(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};oe.styles=n.css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 24px;
      border-radius: 50px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    button:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0) scale(0.98);
    }

    :host > button > svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    :host > button > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }
  `;let X=oe;We([p.property({type:Array})],X.prototype,"sources");var Qe=Object.defineProperty,S=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&Qe(e,t,i),i};const me=3,ae=class ae extends n.LitElement{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this._dragOver=!1,this._moreOpen=!1,this._visiblePills=me,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{var r;e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._emitFiles(t)},this._onClick=e=>{const t=this.shadowRoot.querySelector(".drop-zone");if(t&&this._rippleEl){const r=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-r.left}px`,this._rippleEl.style.top=`${e.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,r=Array.from(t.files??[]);r.length>0&&this._emitFiles(r),t.value=""},this._onPaste=e=>{var i;if(!this.isConnected||this.offsetWidth===0)return;const t=(i=e.clipboardData)==null?void 0:i.items;if(!t)return;const r=[];for(const s of t)if(s.kind==="file"){const o=s.getAsFile();o&&r.push(o)}r.length>0&&(e.preventDefault(),this._emitFiles(r))},this._onDocClick=()=>{this._moreOpen&&(this._moreOpen=!1)},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1)},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var e;(e=this.fileInput)==null||e.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen&&requestAnimationFrame(()=>this._positionDropdown())}_positionDropdown(){var f,h;const e=(f=this.shadowRoot)==null?void 0:f.querySelector(".more-wrap > button"),t=(h=this.shadowRoot)==null?void 0:h.querySelector(".more-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),i=8,s=t.scrollHeight,o=t.offsetWidth,l=r.top,c=window.innerHeight-r.bottom;l>=s+i||l>c?(t.classList.add("above"),t.classList.remove("below"),t.style.top=`${r.top-s-i}px`):(t.classList.add("below"),t.classList.remove("above"),t.style.top=`${r.bottom+i}px`);let u=r.right-o;u=Math.max(8,Math.min(u,window.innerWidth-o-8)),t.style.left=`${u}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=480?this._visiblePills=1:e<=768?this._visiblePills=2:this._visiblePills=me}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer)}_renderPill(e){return n.html`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?O.unsafeHTML(e.brandHtml):n.html`<span class="pill-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${n.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${U.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `}_renderCard(e){return n.html`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?n.html`<span class="card-ico">${O.unsafeHTML(e.brandHtml)}</span>`:n.html`<span class="card-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${n.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${U.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `}_renderMoreCard(e){return n.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="src-card" @click=${t=>this._toggleMore(t)}>
          <span class="card-ico" style="color: var(--sfx-up-text-muted, #94a3b8)">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <circle cx="5" cy="12" r="2.5"/>
              <circle cx="12" cy="12" r="2.5"/>
              <circle cx="19" cy="12" r="2.5"/>
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
        <div class="more-dropdown">
          ${e.map(t=>n.html`
              <button class="more-item" @click=${r=>this._onMoreItemClick(t,r)}>
                <div class="more-item-ico">
                  ${t.brandHtml?O.unsafeHTML(t.brandHtml):t.iconColor?n.html`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${U.unsafeSVG(t.icon)}</svg>`:n.svg`<svg viewBox="0 0 24 24">${U.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>
      </div>
    `}_renderMoreDropdown(e){return n.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${t=>this._toggleMore(t)}>
          <svg class="more-dots" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
          More
          <svg class="more-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="more-dropdown">
          ${e.map(t=>n.html`
              <button class="more-item" @click=${r=>this._onMoreItemClick(t,r)}>
                <div class="more-item-ico">
                  ${t.brandHtml?O.unsafeHTML(t.brandHtml):t.iconColor?n.html`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${U.unsafeSVG(t.icon)}</svg>`:n.svg`<svg viewBox="0 0 24 24">${U.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills);return n.html`
      <div
        class=${e}
        role="button"
        tabindex="0"
        aria-label="Drop files here or click to browse"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <div class="dz-glow"></div>
        <div class="rings">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="core">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
            </svg>
          </div>
        </div>

        <div class="title">
          Drag & Drop or click to <span>browse</span>
        </div>
        ${this.compact?n.nothing:n.html`<div class="subtitle">Drop files anywhere on this page</div>`}

        ${!this.compact&&this.sources.length>0?n.html`
              <div class="import-divider"><span>Or import from</span></div>
              ${this.sourcesLayout==="cards"?n.html`
                    <div class="sources-cards">
                      ${t.map(i=>this._renderCard(i))}
                      ${r.length>0?this._renderMoreCard(r):n.nothing}
                    </div>
                  `:n.html`
                    <div class="sources-grid">
                      ${t.map(i=>this._renderPill(i))}
                      ${r.length>0?this._renderMoreDropdown(r):n.nothing}
                    </div>
                  `}
            `:n.nothing}

        ${this.compact&&this.sources.length>0?n.html`
              <div class="sources-row">
                <span class="src-divider"></span>
                ${this.sources.map(i=>n.html`
                    <button
                      class="src-ico"
                      style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                      data-tip=${i.label}
                      aria-label=${i.label}
                      @click=${s=>{s.stopPropagation(),this._onSourceIconClick(i)}}
                    >
                      ${i.brandHtml?O.unsafeHTML(i.brandHtml):n.svg`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${U.unsafeSVG(i.icon)}</svg>`}
                    </button>
                  `)}
              </div>
            `:n.nothing}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept||n.nothing}
          @change=${this._onFileChange}
        />
      </div>
    `}};ae.styles=n.css`
    :host {
      display: flex;
      flex-shrink: 0;
      flex: 1;
      min-height: 0;
    }

    :host([compact]) {
      flex: 0 0 auto;
    }

    .drop-zone {
      border: none;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      padding: 50px 40px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: visible;
      transition: background 0.22s;
      user-select: none;
      flex: 1;
    }

    .drop-zone:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drag-over .ring {
      border-color: var(--sfx-up-primary, #2563eb);
      animation-duration: 3s;
    }

    .drag-over .ring:nth-child(2) {
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.4));
      animation-duration: 2s;
    }

    .drag-over .core {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      transform: scale(1.12);
      box-shadow: 0 8px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    /* Compact state when files exist */
    .drop-zone.compact {
      padding: 14px 0;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 0;
      animation: compactIn 0.3s ease both;
    }

    @keyframes compactIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Radial glow --- */
    .dz-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: radial-gradient(circle at center, rgba(37, 99, 235, 0.04) 0%, rgba(37, 99, 235, 0.02) 40%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }

    .compact .dz-glow {
      display: none;
    }

    /* --- Rings --- */
    .rings {
      width: 120px;
      height: 120px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      flex-shrink: 0;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-border, #e2e8f0);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-border-light, #f1f5f9);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    .compact .rings {
      display: none;
    }

    /* --- Core icon --- */
    .core {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
      box-shadow: 0 3px 12px rgba(37, 99, 235, 0.15);
    }

    .core svg {
      width: 26px;
      height: 26px;
    }

    .drop-zone:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      margin-bottom: 6px;
      transition: font-size 0.3s, margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: opacity 0.15s;
      margin-bottom: 24px;
    }

    .compact .title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact .subtitle {
      display: none;
    }

    /* --- "or Import From" divider --- */
    .import-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      max-width: 420px;
      margin-bottom: 20px;
    }

    .import-divider::before,
    .import-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border, #e2e8f0);
    }

    .import-divider span {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      letter-spacing: 0.3px;
    }

    .compact .import-divider {
      display: none;
    }

    /* --- Source pills grid (expanded mode) --- */
    .sources-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      min-height: 92px;
    }

    .compact .sources-grid {
      display: none;
    }

    .src-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    .src-pill:active {
      transform: translateY(0) scale(0.98);
    }

    .src-pill .pill-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .src-pill .pill-ico svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-pill .pill-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-pill .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source cards grid (expanded mode, cards layout) --- */
    .sources-cards {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 700px;
    }

    .compact .sources-cards {
      display: none;
    }

    .sources-cards > .more-wrap {
      display: contents;
    }

    .sources-cards > .more-wrap > .src-card {
      /* restore flex item behaviour lost by display:contents on the wrapper */
      flex: 1;
      min-width: 88px;
      max-width: 130px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 12px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 130px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-card:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 4px 14px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-2px);
    }

    .src-card:active {
      transform: translateY(0) scale(0.97);
    }

    .src-card .card-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
    }

    .src-card .card-ico svg {
      width: 28px;
      height: 28px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-card .card-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-card .card-label {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .src-card .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 7px;
    }

    .src-card .brand-ico svg {
      width: 24px;
      height: 24px;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* Google Drive has transparent background — show SVG at full card-ico size */
    .src-card .brand-ico[style*="transparent"] {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico[style*="transparent"] svg {
      width: 28px;
      height: 28px;
    }

    .src-card .canva-ico {
      width: 32px;
      height: 32px;
    }

    .src-card .canva-ico svg {
      width: 32px;
      height: 32px;
    }

    /* --- "More" pill + dropdown --- */
    .more-wrap {
      position: relative;
    }

    .more-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .more-pill:hover,
    .more-wrap.open .more-pill {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .more-pill:hover {
      transform: translateY(-1px);
    }

    .more-pill svg {
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
    }

    .more-dots {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-secondary, #475569);
      fill: currentColor;
      stroke: none;
    }

    .more-wrap.open .more-dots,
    .more-pill:hover .more-dots {
      color: currentColor;
    }

    .more-chevron {
      width: 12px;
      height: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }

    .more-wrap.open .more-chevron {
      transform: rotate(180deg);
      color: currentColor;
    }

    /* Dropdown uses position:fixed to escape overflow:hidden ancestors */
    .more-dropdown {
      position: fixed;
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.18s ease, visibility 0.18s ease, transform 0.18s ease;
    }

    .more-dropdown.above {
      transform: translateY(-6px);
    }

    .more-dropdown.below {
      transform: translateY(6px);
    }

    .more-wrap.open .more-dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateY(0);
    }

    .more-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 6px;
      border: none;
      background: none;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      transition: background 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }

    .more-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-item .more-item-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .more-item-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .more-item .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* --- Brand icon container (for provider logos) --- */
    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .src-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }

    .src-ico .brand-ico svg {
      width: 12px;
      height: 12px;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico .canva-ico,
    .more-item .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-ico .canva-ico svg,
    .more-item .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source icons row (compact mode) --- */
    .sources-row {
      display: none;
    }

    .compact .sources-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      flex-shrink: 0;
      position: relative;
      z-index: 20;
    }

    .src-divider {
      width: 1px;
      height: 24px;
      background: var(--sfx-up-border, #e5e7eb);
      margin-right: 4px;
      flex-shrink: 0;
    }

    .src-ico {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-surface, #f8fafc);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      position: relative;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #6b7280);
      padding: 0;
      font-family: inherit;
    }

    .src-ico > svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-ico > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      color: var(--sfx-up-primary, #2563eb);
    }

    .src-ico::after {
      content: attr(data-tip);
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text, #374151);
      font-size: 10px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-border, #e5e7eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      padding: 3px 8px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s, visibility 0.15s;
      pointer-events: none;
      z-index: 50;
      font-family: inherit;
    }

    .src-ico:hover::after {
      opacity: 1;
      visibility: visible;
    }

    /* --- Ripple --- */
    .ripple {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0);
    }

    .ripple.go {
      animation: ripple 0.55s ease-out forwards;
    }

    /* --- Hidden input --- */
    input[type='file'] {
      display: none;
    }

    @keyframes slowSpin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ripple {
      from {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.18;
      }
      to {
        transform: translate(-50%, -50%) scale(12);
        opacity: 0;
      }
    }

    .drop-zone:focus-visible,
    .src-pill:focus-visible,
    .src-card:focus-visible,
    .more-pill:focus-visible,
    .src-ico:focus-visible,
    .more-item:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (max-width: 480px) {
      .drop-zone:not(.compact) {
        padding: 32px 20px;
      }
      .title { font-size: 16px; }
      .rings { width: 90px; height: 90px; }
      .core { width: 44px; height: 44px; }
      .core svg { width: 20px; height: 20px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ring {
        animation: none;
      }
      .ripple.go {
        animation: none;
      }
      .drop-zone.compact {
        animation: none;
      }
    }
  `;let b=ae;S([p.property({type:Boolean,reflect:!0})],b.prototype,"compact");S([p.property({type:Boolean,attribute:"external-drag-over"})],b.prototype,"externalDragOver");S([p.property({type:String})],b.prototype,"accept");S([p.property({type:Array})],b.prototype,"sources");S([p.property({type:String,attribute:"sources-layout"})],b.prototype,"sourcesLayout");S([p.state()],b.prototype,"_dragOver");S([p.state()],b.prototype,"_moreOpen");S([p.state()],b.prototype,"_visiblePills");S([p.query(".ripple")],b.prototype,"_rippleEl");S([p.query('input[type="file"]')],b.prototype,"fileInput");const ne=class ne extends n.LitElement{render(){return n.html`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};ne.styles=n.css`
    :host {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px 0;
    }

    .line {
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .label {
      font-size: 11px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #cbd5e1);
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
    }
  `;let re=ne;var et=Object.defineProperty,tt=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&et(e,t,i),i};const le=class le extends n.LitElement{constructor(){super(...arguments),this.files=[]}render(){return n.html`
      <div class="grid">
        ${this.files.map((e,t)=>n.html`<sfx-file-item .file=${e} style="--tile-index:${t}"></sfx-file-item>`)}
      </div>
    `}};le.styles=n.css`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    :host::-webkit-scrollbar {
      width: 6px;
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
      gap: 12px;
      padding: 2px;
      padding-bottom: 16px;
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }
  `;let W=le;tt([p.property({attribute:!1})],W.prototype,"files");var rt=Object.defineProperty,it=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&rt(e,t,i),i};const ce=class ce extends n.LitElement{_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_retry(){this.dispatchEvent(new CustomEvent("file-retry",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_preview(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("file-preview",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}render(){const e=this.file;if(!e)return n.nothing;const t=Ie(e),r=e.status==="complete",i=e.status==="uploading",s=e.status==="error"||e.status==="failed",o=e.status==="rejected",l=Be(e.name),c=["tile",r?"done":"",i?"uploading":"",o?"rejected":""].filter(Boolean).join(" ");return n.html`
      <div class=${c} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?n.html`<div class="preview-bg" style="background-image:url(${e.previewUrl})"></div>`:n.html`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <div class="type-icon-inner ${t}">
                    ${this._renderTypeIcon(t)}
                    ${l?n.html`<div class="ext-label">${l}</div>`:n.nothing}
                  </div>
                </div>
              `}

          <!-- Preview button -->
          ${!r&&!i&&!s&&e.status!=="rejected"?n.html`
                <button class="preview-btn" @click=${this._preview} aria-label="Preview file">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Preview
                </button>
              `:n.nothing}

          <!-- Spinner overlay -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
          </div>

          <!-- Done badge -->
          ${r?n.html`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:n.nothing}

          <!-- Progress bar -->
          ${e.status==="uploading"?n.html`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress,100)/100})"></div>
                </div>
              `:n.nothing}

          <!-- Error / rejected badge -->
          ${(s||o)&&e.error?n.html`<div class="error-badge" title=${e.error}>${e.error}</div>`:n.nothing}
        </div>

        <!-- Action buttons -->
        <div class="actions">
          ${s?n.html`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:n.nothing}
          <button class="act-btn del" @click=${this._remove} title="Remove" aria-label="Remove file">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>

        <!-- Info bar -->
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
          <div class="meta">${e.size?V(e.size):""}${e.type?`${e.size?" · ":""}${e.type}`:""}</div>
        </div>
      </div>
    `}_renderTypeIcon(e){switch(e){case"pdf":return n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;case"doc":return n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;case"vid":return n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;case"zip":return n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;default:return n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`}}};ce.styles=n.css`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: none;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      will-change: transform, opacity;
      transition: box-shadow 0.15s, transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background: var(--sfx-up-border-light, #f3f4f6);
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.4s ease;
    }

    .tile:hover .preview-bg {
      transform: scale(1.03);
    }

    .preview-bg.pdf { background: linear-gradient(135deg, var(--destructive-10, #fef2f2), var(--destructive-10, #fee2e2)); }
    .preview-bg.doc { background: linear-gradient(135deg, var(--sfx-up-primary-bg, #eff6ff), var(--sfx-up-primary-bg, #dbeafe)); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.zip { background: linear-gradient(135deg, var(--warning-10, #fffbeb), var(--warning-10, #fef3c7)); }
    .preview-bg.gen { background: linear-gradient(135deg, var(--sfx-up-border-light, #f8fafc), var(--sfx-up-border-light, #f1f5f9)); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-inner {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(0, 0, 0, 0.08));
    }

    .type-icon-inner svg {
      width: 22px;
      height: 22px;
    }

    .type-icon-inner.pdf { color: var(--sfx-up-error, #dc2626); }
    .type-icon-inner.doc { color: var(--sfx-up-primary, #1d4ed8); }
    .type-icon-inner.vid { color: #7c3aed; }
    .type-icon-inner.zip { color: var(--warning-foreground, #b45309); }
    .type-icon-inner.gen { color: var(--sfx-up-text-muted, #64748b); }

    .ext-label {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      margin-top: 2px;
    }

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
    }

    .name {
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #9ca3af);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* --- Action buttons --- */
    .actions {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 10;
    }

    .tile:hover .actions,
    .tile:focus-within .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions { opacity: 1; }
    }

    .act-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 4px var(--sfx-up-shadow, rgba(0, 0, 0, 0.15));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, transform 0.15s;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 0;
    }

    .act-btn:hover {
      background: var(--sfx-up-border-light, #f3f4f6);
      transform: scale(1.08);
    }

    .act-btn.del:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--sfx-up-error, #dc2626);
    }

    .act-btn.retry:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .act-btn svg {
      width: 11px;
      height: 11px;
    }

    /* --- Preview button --- */
    .preview-btn {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      padding: 6px 16px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      opacity: 0;
      transition: all 0.15s ease;
      color: var(--sfx-up-primary, #2563eb);
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      z-index: 5;
    }

    .tile:hover .preview-btn,
    .tile:focus-within .preview-btn {
      opacity: 1;
    }

    @media (hover: none) {
      .preview-btn { opacity: 1; }
    }

    .preview-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-bg, #fff);
    }

    .preview-btn svg {
      width: 13px;
      height: 13px;
    }

    /* --- Progress bar --- */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.06);
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transform-origin: left;
      transition: transform 0.32s ease;
    }

    /* --- Uploading spinner overlay --- */
    .spinner-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    .tile.uploading .spinner-overlay {
      opacity: 1;
    }

    .spin-ring {
      width: 28px;
      height: 28px;
      border: 2.5px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Done badge --- */
    .done-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
    }

    .done-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Error / rejected state --- */
    .error-badge {
      position: absolute;
      bottom: 28px;
      left: 6px;
      right: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      background: var(--sfx-up-error, #dc2626);
      border-radius: 4px;
      padding: 3px 6px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    @keyframes tileIn {
      0% {
        opacity: 0;
        transform: scale(0.92) translateY(14px);
      }
      60% {
        opacity: 1;
      }
      80% {
        transform: scale(1.02) translateY(-2px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    .tile:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .act-btn:focus-visible,
    .preview-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { animation: none; }
      .spin-ring { animation: none; }
    }
  `;let K=ce;it([p.property({attribute:!1})],K.prototype,"file");const H=n.css`
  .btn,
  .btn-ghost,
  .btn-primary,
  .btn-sec,
  .btn-retry,
  .btn-upload,
  .btn-danger {
    height: 36px;
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .btn svg,
  .btn-ghost svg,
  .btn-primary svg,
  .btn-sec svg,
  .btn-retry svg,
  .btn-upload svg,
  .btn-danger svg {
    width: 14px;
    height: 14px;
  }

  .btn-ghost {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: 1.5px solid var(--sfx-up-border, #e2e8f0);
  }

  .btn-ghost:hover {
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text-secondary, #64748b);
    border-color: var(--sfx-up-border, #d1dff0);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: var(--primary-foreground, #fff);
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,q=n.css`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var st=Object.defineProperty,Q=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&st(e,t,i),i};const be=7,de=class de extends n.LitElement{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done"}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,be),t=this.thumbnails.length-be;return n.html`
      <div class="card" role="status" aria-live="polite">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div class="title">Uploaded successfully!</div>
        <div class="subtitle">All files are ready for use</div>

        ${e.length>0?n.html`
              <div class="thumbs">
                ${e.map(r=>n.html`<img class="thumb" src=${r} alt="" />`)}
                ${t>0?n.html`<div class="thumb-more">+${t}</div>`:n.nothing}
              </div>
            `:n.nothing}

        <div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${V(this.totalSize)} uploaded</div>

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};de.styles=[H,q,n.css`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      animation: fadeUp 0.4s ease both;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 18px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.12));
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #0f172a);
      letter-spacing: -0.4px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.6;
      max-width: 320px;
      margin-bottom: 20px;
    }

    /* --- Thumbnail strip --- */
    .thumbs {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 14px;
    }

    .thumb {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .thumb-more {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      border: 1px solid var(--sfx-up-border, #e8eaed);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Summary chip --- */
    .summary {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-surface, #f8fafc);
      border-radius: 8px;
      padding: 6px 14px;
      margin-bottom: 22px;
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 18px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];let D=de;Q([p.property({type:Number})],D.prototype,"fileCount");Q([p.property({type:Number})],D.prototype,"totalSize");Q([p.property({type:Array})],D.prototype,"thumbnails");Q([p.property({type:String})],D.prototype,"primaryLabel");var ot=Object.defineProperty,F=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&ot(e,t,i),i};const pe=class pe extends n.LitElement{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return n.html`
      ${e?n.html`
            <div class="progress-row">
              <div class="progress-track" role="progressbar" aria-valuenow=${Math.round(this.uploadProgress)} aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
                <div class="progress-fill" style="width:${this.uploadProgress}%"></div>
              </div>
              <span class="progress-label">${this.completedCount}/${this.fileCount} files</span>
            </div>
          `:n.nothing}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?n.html`
                <button class="btn-sec" @click=${this._fillMetadata}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <line x1="10" y1="9" x2="8" y2="9"/>
                  </svg>
                  Fill Metadata
                </button>
              `:n.nothing}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            Clear
          </button>
          <button class="btn-sec" @click=${this._addMore}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add more
          </button>
          ${this.failedCount>0?n.html`
                <button class="btn-retry" @click=${this._retryAll}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  Retry all (${this.failedCount})
                </button>
              `:n.nothing}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",r=["btn-primary",t?"done-state":""].filter(Boolean).join(" ");return n.html`
      <button
        class=${r}
        @click=${this._upload}
        ?disabled=${e}
      >
        ${e?n.html`<span class="btn-spin"></span> Uploading\u2026`:t?n.html`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Done!
              `:n.html`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                </svg>
                Upload
              `}
      </button>
    `}};pe.styles=[H,q,n.css`
    :host {
      display: flex;
      flex-direction: column;
      background: var(--sfx-up-bg, #ffffff);
      border-top: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      box-shadow: none;
      animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
    }

    @keyframes barSlideUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Progress row --- */
    .progress-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 24px 0;
    }

    .progress-track {
      flex: 1;
      height: 4px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .progress-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      flex-shrink: 0;
    }

    /* --- Buttons row --- */
    .buttons-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 24px;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* --- Button overrides (base in shared-styles) --- */

    .btn-sec {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      border: 1.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
    }

    .btn-sec:hover {
      background: var(--sfx-up-primary-bg, #dbeafe);
    }

    .btn-retry {
      background: var(--destructive-10, #fef2f2);
      color: var(--sfx-up-error, #dc2626);
      border: 1.5px solid var(--sfx-up-error, rgba(220, 38, 38, 0.2));
    }

    .btn-retry:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--destructive-foreground, #b91c1c);
      border-color: var(--sfx-up-error, rgba(220, 38, 38, 0.35));
    }

    .btn-primary {
      min-width: 110px;
    }

    .btn-primary.done-state {
      background: var(--sfx-up-success, #16a34a);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(22, 163, 74, 0.28));
    }

    /* --- Spinner --- */
    .btn-spin {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Count --- */
    .count {
      font-size: 14px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    .count span {
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 480px) {
      .buttons-row {
        padding: 10px 12px;
        flex-wrap: wrap;
        gap: 8px;
      }
      button {
        height: 32px;
        font-size: 12px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host { animation: none; }
      .btn-spin { animation: none; }
    }
  `];let $=pe;F([p.property({type:String})],$.prototype,"uploadState");F([p.property({type:Number})],$.prototype,"fileCount");F([p.property({type:Number})],$.prototype,"totalSize");F([p.property({type:Number})],$.prototype,"failedCount");F([p.property({type:Boolean})],$.prototype,"showFillMetadata");F([p.property({type:Number})],$.prototype,"completedCount");F([p.property({type:Number})],$.prototype,"uploadProgress");const at='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function ie(a,e){return t=>{if(t.key!=="Tab")return;const r=a();if(!r)return;const i=r.querySelector(e);if(!i)return;const s=Array.from(i.querySelectorAll(at));if(s.length===0)return;const o=s[0],l=s[s.length-1],c=r.activeElement;t.shiftKey?(c===o||!i.contains(c))&&(t.preventDefault(),l.focus()):(c===l||!i.contains(c))&&(t.preventDefault(),o.focus())}}var nt=Object.defineProperty,se=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&nt(e,t,i),i};const he=class he extends n.LitElement{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=ie(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),r=t[t.length-1];if(r){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");i&&(i.placeholder=r)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let t=this._name.trim();if(!t)try{const r=new URL(e).pathname.split("/");t=r[r.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return n.html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">Import from URL</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">File URL</label>
              <input
                id="urlInput"
                type="url"
                placeholder="https://example.com/file.pdf"
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput">File name <span class="optional">(optional)</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder="document.pdf"
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?n.html`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};he.styles=[H,q,n.css`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 480px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: translateY(18px) scale(0.97);
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1a1a1a);
      flex: 1;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-border-light, #f0f0f0);
      color: var(--sfx-up-text-muted, #888);
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e4e4e4);
      color: var(--sfx-up-text, #333);
    }

    .body {
      padding: 18px 20px 20px;
    }

    .field {
      margin-bottom: 14px;
    }

    label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #aaa);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    label .optional {
      color: var(--sfx-up-border, #ccc);
      font-weight: 400;
      text-transform: none;
      letter-spacing: 0;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #ebebeb);
      border-radius: 6px;
      padding: 0 14px;
      font-size: 14px;
      font-family: inherit;
      color: var(--sfx-up-text, #1a1a1a);
      background: var(--sfx-up-border-light, #fafafa);
      transition: border-color 0.15s, background 0.15s;
      outline: none;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    input::placeholder {
      color: var(--sfx-up-text-muted, #ccc);
      text-align: center;
    }

    .error {
      font-size: 12px;
      color: var(--sfx-up-error, #dc2626);
      margin-top: -6px;
      margin-bottom: 8px;
    }

    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 18px;
    }



    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(18px) scale(0.97); }
      to { transform: translateY(0) scale(1); }
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    input:focus-visible {
      outline: none;
    }

  `];let j=he;se([p.state()],j.prototype,"_url");se([p.state()],j.prototype,"_name");se([p.state()],j.prototype,"_error");var lt=Object.defineProperty,ee=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&lt(e,t,i),i};const ue=class ue extends n.LitElement{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ie(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var i,s;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("video"),t=(s=this.shadowRoot)==null?void 0:s.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(o=>{o&&(this._captured=o,this._previewUrl=URL.createObjectURL(o),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">Camera</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?n.html`<div class="error">${this._error}</div>`:this._captured?n.html`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `:n.html`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};ue.styles=[H,q,n.css`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 520px;
      height: 520px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; flex: 1; min-height: 0; justify-content: center; }

    video, canvas {
      width: 100%; flex: 1; min-height: 0; border-radius: 12px;
      background: #000; object-fit: cover;
    }

    canvas { display: none; }

    .preview-img {
      width: 100%; max-height: 320px; border-radius: 12px;
      object-fit: contain; background: #000;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-capture {
      width: 52px; height: 52px; border-radius: 50%; padding: 0;
      background: var(--sfx-up-error, #dc2626); border: 4px solid var(--sfx-up-bg, #fff);
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626), 0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
      cursor: pointer; transition: all 0.15s;
    }
    .btn-capture:hover { background: var(--destructive-foreground, #b91c1c); transform: scale(1.05); }

    .close-btn:focus-visible,
    .btn-capture:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
  `];let z=ue;ee([p.state()],z.prototype,"_stream");ee([p.state()],z.prototype,"_error");ee([p.state()],z.prototype,"_captured");ee([p.state()],z.prototype,"_previewUrl");var ct=Object.defineProperty,Y=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&ct(e,t,i),i};const fe=class fe extends n.LitElement{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ie(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const r=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:r}),this._recorder.ondataavailable=i=>{i.data.size>0&&this._chunks.push(i.data)},this._recorder.onstop=()=>{var s;const i=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=i,this._previewUrl=URL.createObjectURL(i),(s=this._stream)==null||s.getTracks().forEach(o=>o.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 21h10"/>
              </svg>
            </div>
            <div class="title">Screen cast</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?n.html`<div class="error">${this._error}</div>`:this._recordedBlob?n.html`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `:this._recording?n.html`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `:n.html`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 21h10"/>
                          </svg>
                        </div>
                        <div class="start-text">Share your screen to record a video that will be added to your uploads.</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>Start recording</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};fe.styles=[H,q,n.css`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 560px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; }

    video {
      width: 100%; max-height: 320px; border-radius: 12px;
      background: #000; object-fit: contain;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .status {
      font-size: 13px; color: var(--sfx-up-text-secondary, #475569);
      display: flex; align-items: center; gap: 8px;
    }

    .rec-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--sfx-up-error, #dc2626); animation: pulse 1s ease-in-out infinite;
    }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-danger {
      background: var(--sfx-up-error, #dc2626); color: var(--primary-foreground, #fff);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
    }
    .btn-danger:hover { background: var(--destructive-foreground, #b91c1c); }

    .start-view {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 30px 20px; text-align: center;
    }

    .start-icon {
      width: 56px; height: 56px; border-radius: 16px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex; align-items: center; justify-content: center;
    }

    .start-icon svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .start-text {
      font-size: 14px; color: var(--sfx-up-text-secondary, #475569); max-width: 300px;
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  `];let P=fe;Y([p.state()],P.prototype,"_stream");Y([p.state()],P.prototype,"_recording");Y([p.state()],P.prototype,"_error");Y([p.state()],P.prototype,"_recordedBlob");Y([p.state()],P.prototype,"_previewUrl");var dt=Object.defineProperty,C=(a,e,t,r)=>{for(var i=void 0,s=a.length-1,o;s>=0;s--)(o=a[s])&&(i=o(e,t,i)||i);return i&&dt(e,t,i),i};const ye=new Set(["unsplash"]);var w;const _=(w=class extends n.LitElement{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fullscreenPreviewUrl=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._bodyDragCounter=0,this._engine=null,this._cachedSources=M,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._onFilesSelected=e=>{this._processIncomingFiles(e.detail.files)},this._onSourceClick=async e=>{var s,o;const t=e.detail.source,r=this._mergedSources.find(l=>l.id===t);if(r!=null&&r.onActivate){try{r.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${t}" threw:`,l)}return}if(t==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(t==="url"){this._showUrlDialog=!0;return}if(t==="camera"){this._showCameraDialog=!0;return}if(t==="screen-cast"){this._showScreenCastDialog=!0;return}if((((o=(s=this.config)==null?void 0:s.connectors)==null?void 0:o.providers)??[]).includes(t)){if(ye.has(t)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:c}=await Promise.resolve().then(()=>require("./search-provider-browser-uDZrkDBZ.cjs"));customElements.define("sfx-search-provider-browser",c)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:c}=await Promise.resolve().then(()=>require("./provider-browser-D7G2wcFH.cjs"));customElements.define("sfx-provider-browser",c)}this._activeConnector=t}},this._onUrlSubmit=e=>{var u,f,h;this._showUrlDialog=!1;const{url:t,name:r}=e.detail,i=(u=this.config)==null?void 0:u.callbacks,s=qe(r),o=s.startsWith("image/"),l=this._store.getState(),c=te({name:r,size:0,type:s},l.restrictions,l.files);if(c){const g={id:R(),status:"rejected",file:null,remoteUrl:t,name:r,size:0,type:s,previewUrl:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};L(this._store,g),this._dispatchPublic(x.FILE_REJECTED,{file:g,reason:c}),(f=i==null?void 0:i.onFileRejected)==null||f.call(i,g,c);return}const d={id:R(),status:"idle",file:null,remoteUrl:t,name:r,size:0,type:s,previewUrl:o?t:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};L(this._store,d),this._dispatchPublic(x.FILE_ADDED,{file:d}),(h=i==null?void 0:i.onFileAdded)==null||h.call(i,d),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var r,i,s;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(x.FILE_PREVIEW,{file:t}),(s=(i=(r=this.config)==null?void 0:r.callbacks)==null?void 0:i.onFilePreview)==null||s.call(i,t))},this._onFillMetadata=()=>{var t,r,i;const e=[...this._store.getState().files.values()].filter(s=>w._MODIFIABLE_STATUSES.has(s.status));this._dispatchPublic(x.FILL_METADATA,{files:e}),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onFillMetadata)==null||i.call(r,e)},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var r,i,s;const e=(r=this.config)==null?void 0:r.callbacks;(i=this._engine)==null||i.cancelAll();const t=[...this._store.getState().files.values()];for(const o of t)o.previewUrl&&URL.revokeObjectURL(o.previewUrl),this._dispatchPublic(x.FILE_REMOVED,{file:o}),(s=e==null?void 0:e.onFileRemoved)==null||s.call(e,o);for(const o of this._rejectedTimers.values())clearTimeout(o);this._rejectedTimers.clear(),this._dimCache.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{const e=this.shadowRoot.querySelector("sfx-drop-zone");e==null||e.browse()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onConnectorFilesSelected=e=>{var r,i,s;const t=(r=this.config)==null?void 0:r.callbacks;for(const o of e.detail.files){const l=this._store.getState(),c=te({name:o.name,size:o.size,type:o.mimeType},l.restrictions,l.files);if(c){const u={id:R(),status:"rejected",file:null,remoteUrl:null,name:o.name,size:o.size,type:o.mimeType,previewUrl:o.thumbnail,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:o};L(this._store,u),this._dispatchPublic(x.FILE_REJECTED,{file:u,reason:c}),(i=t==null?void 0:t.onFileRejected)==null||i.call(t,u,c);continue}const d={id:R(),status:"idle",file:null,remoteUrl:null,name:o.name,size:o.size,type:o.mimeType,previewUrl:o.thumbnail,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:o};L(this._store,d),this._dispatchPublic(x.FILE_ADDED,{file:d}),(s=t==null?void 0:t.onFileAdded)==null||s.call(t,d)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t;this._dispatchPublic(x.COMPLETE_ACTION,{}),((e=this.config)==null?void 0:e.mode)==="modal"?this.close():((t=this.config)==null?void 0:t.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(x.CANCEL,{})},this._onModalDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(x.CANCEL,{}),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyDragCounter++,this._bodyDragCounter===1&&(this._bodyDragOver=!0)},this._onBodyDragOver=e=>{e.preventDefault()},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyDragCounter--,this._bodyDragCounter<=0&&(this._bodyDragCounter=0,this._bodyDragOver=!1)},this._onBodyDrop=e=>{var r;e.preventDefault(),this._bodyDragCounter=0,this._bodyDragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t}}))},this._onKeyDown=e=>{var t,r;if(e.key==="Escape"){if(this._fullscreenPreviewUrl){this._onFsClose();return}this._isOpen&&((t=this.config)==null?void 0:t.mode)==="modal"&&(((r=this.config)==null?void 0:r.headerButton)??"close")!=="none"&&this._onModalDismiss()}},this._dimCache=new Map,this._onFsToggleZoom=e=>{e==null||e.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,r=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(!this._fullscreenZoomed||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],r=t.clientX-this._fsDragStartX,i=t.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+i,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=_e(),this._storeCtrl=new Ee(this,this._store)}open(){var e,t,r;this._isOpen||(this._isOpen=!0,(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onOpen)==null||r.call(t),this._dispatchPublic(x.OPEN,{}),this.requestUpdate())}close(){var e,t,r,i;this._isOpen&&(this._isOpen=!1,((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onClose)==null||i.call(r),this._dispatchPublic(x.CLOSE,{}),this.requestUpdate())}upload(){var i,s,o,l,c;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(d=>d.status==="idle"||d.status==="queued");if((s=(i=this.config)==null?void 0:i.callbacks)!=null&&s.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(x.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(x.UPLOAD_STARTED,{files:e}),(c=(l=(o=this.config)==null?void 0:o.callbacks)==null?void 0:l.onUploadStarted)==null||c.call(l,e),this._engine.uploadAll())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const r=this._store.getState().files,i=new Map(r);let s=!1;for(const o of e){const l=r.get(o.id);l&&(i.set(o.id,{...l,...o}),s=!0)}s&&this._store.setState({files:i})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,r){const i=this._store.getState().files,s=i.get(e);if(!s||!w._MODIFIABLE_STATUSES.has(s.status))return;const o=new Map(i);o.set(e,{...s,meta:t!=null?{...s.meta,...t}:s.meta,tags:r??s.tags}),this._store.setState({files:o})}updateFilesMeta(e){const t=this._store.getState().files,r=new Map(t);let i=!1;for(const{fileId:s,meta:o,tags:l}of e){const c=t.get(s);!c||!w._MODIFIABLE_STATUSES.has(c.status)||(r.set(s,{...c,meta:o!=null?{...c.meta,...o}:c.meta,tags:l??c.tags}),i=!0)}i&&this._store.setState({files:r})}updated(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._store.getState().files.get(this._previewFileId);t?this._getImageDimensions(t).then(r=>{this._previewDims=r?`${r.w} × ${r.h}`:"—"}):this._previewDims="—"}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange())}disconnectedCallback(){var e,t;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null;for(const r of this._rejectedTimers.values())clearTimeout(r);this._rejectedTimers.clear();for(const r of this._store.getState().files.values())r.previewUrl&&URL.revokeObjectURL(r.previewUrl);(t=this._engine)==null||t.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.targetFolder&&(t.targetFolder=e.targetFolder),e.restrictions&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions}),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var i,s;const t=e.auth;if(t.mode==="sass-key"||t.mode==="session"){this._apiBase=Z(t.container),this._authHeaders=N(t),this._ensureEngine(),(i=this._engine)==null||i.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders});return}const r=++this._authResolveId;try{const o=await $e(t);if(r!==this._authResolveId)return;this._apiBase=o.apiBase,this._authHeaders=o.headers,this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders})}catch(o){if(r!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",o)}}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new ke(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders}),this._engine.start())}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_onStoreChange(){var i,s,o,l,c,d,u;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;const r=(i=this.config)==null?void 0:i.callbacks;for(const[f,h]of e.files){const g=t.files.get(f);if(g){if(g.status!==h.status)switch(h.status){case"uploading":break;case"complete":h.response&&(this._dispatchPublic(x.UPLOAD_COMPLETE,{file:h,response:h.response}),(s=r==null?void 0:r.onUploadComplete)==null||s.call(r,h,h.response));break;case"error":case"failed":{const m=new Error(h.error??"Upload failed");this._dispatchPublic(x.UPLOAD_ERROR,{file:h,error:m}),(o=r==null?void 0:r.onUploadError)==null||o.call(r,h,m);break}case"retrying":this._dispatchPublic(x.UPLOAD_RETRY,{file:h,attempt:h.retryCount}),(l=r==null?void 0:r.onUploadRetry)==null||l.call(r,h,h.retryCount);break}h.status==="uploading"&&g.progress!==h.progress&&(this._dispatchPublic(x.UPLOAD_PROGRESS,{file:h,progress:h.progress,speed:h.speed}),(c=r==null?void 0:r.onUploadProgress)==null||c.call(r,h,h.progress,h.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const f=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:0;this._dispatchPublic(x.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:f}),(d=r==null?void 0:r.onTotalProgress)==null||d.call(r,e.totalProgress,e.totalSpeed,f)}if(t.isUploading&&!e.isUploading){const f=[...e.files.values()];if(!f.some(g=>g.status==="cancelled")){const g=f.filter(v=>v.status==="complete"),m=f.filter(v=>v.status==="failed"||v.status==="error");this._dispatchPublic(x.ALL_COMPLETE,{successful:g,failed:m}),(u=r==null?void 0:r.onAllComplete)==null||u.call(r,g,m)}}}get _mergedSources(){var c;const e=(c=this.config)==null?void 0:c.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=M,this._cachedSources;const t=e.providers.length>0?Se(e.providers):[],r=e.customSources??[],i=M.filter(d=>d.id==="device"||d.id==="url"),s=M.filter(d=>d.id!=="device"&&d.id!=="url"),o=new Set,l=[];for(const d of[...i,...t,...s,...r])if(!o.has(d.id)){if(w._RESERVED_IDS.has(d.id)&&d.onActivate){console.warn(`[sfx-uploader] Custom source id "${d.id}" conflicts with a built-in source and was skipped.`);continue}o.add(d.id),l.push(d)}return this._cachedSources=l,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return t.every(i=>r.has(i.status))&&t.some(i=>i.status==="complete")?"complete":"ready"}_processIncomingFiles(e){var r,i,s,o;const t=(r=this.config)==null?void 0:r.callbacks;for(const l of e){const c=this._store.getState(),d=Ne(l,c.restrictions,c.files);if(d){const h={id:R(),status:"rejected",file:l,remoteUrl:null,name:l.name,size:l.size,type:l.type,previewUrl:null,progress:0,speed:0,bytesUploaded:0,error:d,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};L(this._store,h),this._dispatchPublic(x.FILE_REJECTED,{file:h,reason:d}),(i=t==null?void 0:t.onFileRejected)==null||i.call(t,h,d);const g=(s=this.config)==null?void 0:s.rejectedFileAutoRemoveDelay,m=g===!1||g===0?0:g??4e3;if(m>0){const v=h.id,T=setTimeout(()=>{this._rejectedTimers.delete(v);const y=this._store.getState().files.get(v);y&&y.status==="rejected"&&ge(this._store,v)},m);this._rejectedTimers.set(v,T)}continue}let u=null;l.type.startsWith("image/")&&(u=URL.createObjectURL(l));const f={id:R(),status:"idle",file:l,remoteUrl:null,name:l.name,size:l.size,type:l.type,previewUrl:u,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};L(this._store,f),this._dispatchPublic(x.FILE_ADDED,{file:f}),(o=t==null?void 0:t.onFileAdded)==null||o.call(t,f),l.type.startsWith("video/")&&Ye(l).then(h=>{if(!h)return;const g=this._store.getState(),m=g.files.get(f.id);if(m){const v=new Map(g.files);v.set(f.id,{...m,previewUrl:h}),this._store.setState({files:v})}else URL.revokeObjectURL(h)})}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(e){var i,s,o,l;const t=this._store.getState().files.get(e);if(!t)return;const r={...t};t.previewUrl&&URL.revokeObjectURL(t.previewUrl),(t.status==="uploading"||t.status==="queued"||t.status==="retrying")&&((i=this._engine)==null||i.cancelFile(e)),ge(this._store,e),this._dimCache.delete(e),this._dispatchPublic(x.FILE_REMOVED,{file:r}),(l=(o=(s=this.config)==null?void 0:s.callbacks)==null?void 0:o.onFileRemoved)==null||l.call(o,r)}render(){var t;return(((t=this.config)==null?void 0:t.mode)??"modal")==="modal"?this._isOpen?n.html`
        <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
          <div class="modal-card">
            ${this._renderHeader()}
            ${this._renderBody()}
          </div>
        </div>
      `:n.nothing:n.html`
      <div class="inline">
        ${this._renderHeader()}
        ${this._renderBody()}
      </div>
    `}_renderHeader(){var l,c;const e=((l=this.config)==null?void 0:l.mode)??"modal",t=((c=this.config)==null?void 0:c.headerButton)??(e==="modal"?"close":"none"),r=this._phase==="complete",i=e==="modal"?this._onModalDismiss:this._onInlineDismiss,s=t==="back"?n.html`<button class="header-btn header-btn-back" aria-label="Back to Asset Picker" @click=${i}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>`:n.nothing,o=t==="close"?n.html`<button class="header-btn header-btn-close" aria-label="Close" @click=${i}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>`:n.nothing;return n.html`
      <div class="header">
        ${s}
        <div class="header-icon ${r?"header-icon-done":""}">
          ${r?n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>`:n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>`}
        </div>
        <div class="header-title">${r?"Upload Complete":"Upload Files"}</div>
        ${o}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const r=new Image;r.onload=()=>{const i={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(e.id,i),t(i)},r.onerror=()=>{this._dimCache.set(e.id,null),t(null)},r.src=e.previewUrl}):Promise.resolve(null)}_renderPreviewLayout(e){var s;if(e.length===0)return n.nothing;const t=e.find(o=>o.id===this._previewFileId)??e[0],r=((s=t.name.split(".").pop())==null?void 0:s.toUpperCase())||"",i=new Date(t.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return n.html`
      <div class="preview-topbar">
        <div class="asset-count" style="padding:0">${e.length} ${e.length===1?"asset":"assets"}</div>
        <div class="preview-panel-header">
          <button @click=${()=>this._onFileRemoveById(t.id)} title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <button @click=${()=>{t.previewUrl&&(this._fullscreenPreviewUrl=t.previewUrl,this._fullscreenZoomed=!1)}} title="Fullscreen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
          <button @click=${()=>{this._previewFileId=null}} title="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div class="preview-layout">
        <div class="file-grid-side">
          <sfx-file-list .files=${e}></sfx-file-list>
        </div>
        <div class="preview-panel">
          ${t.previewUrl?n.html`
                <div class="preview-img-wrap">
                  <img class="preview-image" src=${t.previewUrl} alt=${t.name} />
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `:n.nothing}
          <div class="preview-meta-list">
            <div class="preview-meta-row">
              <span class="preview-meta-label">Type</span>
              <span class="preview-meta-value">${r}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Size</span>
              <span class="preview-meta-value">${V(t.size)}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Dimensions</span>
              <span class="preview-meta-value">${this._previewDims}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Name</span>
              <span class="preview-meta-value">${t.name}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Added</span>
              <span class="preview-meta-value">${i}</span>
            </div>
          </div>
        </div>
      </div>
    `}_navigatePreview(e,t){const i=e.findIndex(s=>s.id===this._previewFileId)+t;i>=0&&i<e.length&&(this._previewFileId=e[i].id)}_onFileRemoveById(e){this._removeFile(e);const t=[...this._store.getState().files.values()];t.length===0?this._previewFileId=null:this._previewFileId===e&&(this._previewFileId=t[0].id)}_renderBody(){var o,l,c;const e=this._storeCtrl.state,t=[...e.files.values()],r=this._phase,i=Ve(e.restrictions),s=t.length>0;return n.html`
      <div class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-retry=${this._onFileRetry}
        @fill-metadata=${this._onFillMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @primary-action=${this._onPrimaryAction}
        @connector-files-selected=${this._onConnectorFilesSelected}
        @connector-close=${this._onConnectorClose}
        @url-submit=${this._onUrlSubmit}
        @url-cancel=${this._onUrlCancel}
        @camera-capture=${this._onCameraCapture}
        @camera-cancel=${this._onCameraCancel}
        @screencast-capture=${this._onScreenCastCapture}
        @screencast-cancel=${this._onScreenCastCancel}
      >
        <div
          class="body ${s?"has-files":""} ${this._bodyDragOver?"body-drag-over":""}"
          @dragenter=${s?this._onBodyDragEnter:n.nothing}
          @dragover=${s?this._onBodyDragOver:n.nothing}
          @dragleave=${s?this._onBodyDragLeave:n.nothing}
          @drop=${s?this._onBodyDrop:n.nothing}
        >
          ${r==="complete"?n.html`
                  <sfx-success-card
                    .fileCount=${t.filter(d=>d.status==="complete").length}
                    .totalSize=${t.filter(d=>d.status==="complete").reduce((d,u)=>d+(u.size||0),0)}
                    .thumbnails=${t.filter(d=>d.status==="complete"&&d.previewUrl).map(d=>d.previewUrl)}
                  ></sfx-success-card>
                `:n.html`
                  <sfx-drop-zone
                    .compact=${s}
                    .externalDragOver=${this._bodyDragOver}
                    .accept=${i}
                    .sources=${this._mergedSources}
                    .sourcesLayout=${((o=this.config)==null?void 0:o.sourcesLayout)??"pills"}
                  ></sfx-drop-zone>

                  ${s?this._previewFileId?this._renderPreviewLayout(t):n.html`
                          <div class="asset-count">${t.length} ${t.length===1?"file":"files"} · ${V(t.reduce((d,u)=>d+(u.size||0),0))}</div>
                          <sfx-file-list .files=${t}></sfx-file-list>
                        `:n.nothing}
                `}
        </div>

        ${s&&r!=="complete"?n.html`
              <sfx-actions-bar
                .uploadState=${r==="uploading"?"uploading":"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((d,u)=>d+(u.size||0),0)}
                .failedCount=${t.filter(d=>d.status==="failed"||d.status==="error").length}
                .completedCount=${t.filter(d=>d.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!((l=this.config)!=null&&l.showFillMetadata)}
              ></sfx-actions-bar>
            `:n.nothing}

        ${this._showUrlDialog?n.html`<sfx-url-dialog></sfx-url-dialog>`:n.nothing}
        ${this._showCameraDialog?n.html`<sfx-camera-dialog></sfx-camera-dialog>`:n.nothing}
        ${this._showScreenCastDialog?n.html`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:n.nothing}
        ${this._activeConnector&&((c=this.config)!=null&&c.connectors)?n.html`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${ye.has(this._activeConnector)?n.html`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `:n.html`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:n.nothing}

        ${this._fullscreenPreviewUrl?n.html`
              <div
                class="fs-overlay ${this._fullscreenZoomed?"zoomed":""} ${this._fsDragging?"panning":""}"
                @click=${this._onFsOverlayClick}
                @mousedown=${this._onFsPanStart}
                @mousemove=${this._onFsPanMove}
                @mouseup=${this._onFsPanEnd}
                @mouseleave=${this._onFsPanEnd}
                @touchstart=${this._onFsTouchStart}
                @touchmove=${this._onFsTouchMove}
                @touchend=${this._onFsPanEnd}
              >
                <div class="fs-toolbar" @click=${d=>d.stopPropagation()}>
                  <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
                    ${this._fullscreenZoomed?n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:n.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
                  </button>
                  <button class="fs-btn" @click=${this._onFsClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <img
                  class="fs-img"
                  src=${this._fullscreenPreviewUrl}
                  alt=""
                  style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""}
                  draggable="false"
                />
                <div class="fs-filename">${this._getFullscreenFilename()}</div>
              </div>
            `:n.nothing}
      </div>
    `}_getFullscreenFilename(){if(!this._previewFileId)return"";const e=this._store.getState().files.get(this._previewFileId);return(e==null?void 0:e.name)??""}},w.styles=n.css`
    :host {
      display: block;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-error: var(--destructive, #dc2626);
      --sfx-up-text: var(--foreground, #1e293b);
      --sfx-up-text-secondary: var(--secondary-foreground, #475569);
      --sfx-up-text-muted: var(--muted-foreground, #94a3b8);
      --sfx-up-border: var(--border, #e8edf5);
      --sfx-up-border-light: var(--muted, #f1f5f9);
      --sfx-up-bg: var(--background, #ffffff);
      --sfx-up-radius: 16px;
      --sfx-up-font: 'Inter', system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
      --sfx-up-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
      --sfx-up-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.06);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 912px;
      max-height: var(--sfx-up-max-height, 88vh);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      animation: modalIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    }

    /* --- Header --- */
    .header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      background: var(--sfx-up-bg, #fff);
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .header-icon-done {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .header-icon svg {
      width: 16px;
      height: 16px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      flex: 1;
    }

    .header-btn {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
    }

    .header-btn svg {
      width: 16px;
      height: 16px;
    }

    .header-btn:hover {
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .header-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .header-btn-back {
      margin-right: 12px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      width: 32px;
      height: 32px;
      position: relative;
    }

    .header-btn-back:hover {
      background: #dbeafe;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .header-btn-back::after {
      content: 'Back to Asset Picker';
      position: absolute;
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: var(--sfx-up-text, #1e293b);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      padding: 6px 12px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      z-index: 10;
    }

    .header-btn-back:hover::after {
      opacity: 1;
    }

    .header-btn-close {
      margin-left: auto;
    }

    /* --- Responsive header buttons --- */
    @media (max-width: 768px) {
      .header-btn { width: 28px; height: 28px; }
      .header-btn svg { width: 14px; height: 14px; }
    }
    @media (max-width: 480px) {
      .header-btn { width: 26px; height: 26px; }
    }

    /* --- Content wrapper (holds body + actions bar) --- */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    /* --- Body --- */
    .body {
      flex: 1;
      overflow: hidden;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      gap: 4px;
      min-height: 0;
      background: var(--sfx-up-bg, #fff);
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      outline: 2px dashed var(--sfx-up-primary, #2563eb);
      outline-offset: -4px;
      border-radius: 8px;
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      animation: bodyReveal 0.35s ease both;
    }

    @keyframes bodyReveal {
      from { opacity: 0.5; }
      to { opacity: 1; }
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    .asset-count {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 24px 0 8px;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: var(--sfx-up-radius, 16px);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
      transition: box-shadow 0.25s ease;
      animation: inlineIn 0.25s ease;
    }

    .inline:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03);
    }

    /* --- Preview split layout --- */
    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 54;
      min-width: 0;
      overflow-y: auto;
      padding-right: 12px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .preview-layout .file-grid-side::-webkit-scrollbar { width: 5px; }
    .preview-layout .file-grid-side::-webkit-scrollbar-track { background: transparent; }
    .preview-layout .file-grid-side::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 12px 0;
    }

    .preview-panel {
      flex: 46;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0 20px 20px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .preview-panel::-webkit-scrollbar { width: 5px; }
    .preview-panel::-webkit-scrollbar-track { background: transparent; }
    .preview-panel::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 0;
      flex-shrink: 0;
    }

    .preview-panel-header button {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #9ca3af);
      transition: background 0.15s, color 0.15s;
      padding: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 18px;
      height: 18px;
    }

    .preview-img-wrap {
      position: relative;
      flex-shrink: 0;
    }

    .preview-image {
      width: 100%;
      height: 320px;
      border-radius: 6px;
      object-fit: contain;
      display: block;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text, #1e293b);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 18px;
      height: 18px;
    }

    .preview-nav.prev { left: 10px; }
    .preview-nav.next { right: 10px; }

    .preview-nav:disabled {
      opacity: 0.35;
      cursor: default;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-nav:disabled:hover {
      transform: translateY(-50%);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-meta-list {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      flex-shrink: 0;
      gap: 2px;
    }

    .preview-meta-row {
      display: flex;
      align-items: baseline;
      padding: 7px 0;
    }

    .preview-meta-label {
      width: 110px;
      flex-shrink: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-meta-value {
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #1e293b));
      word-break: break-all;
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 520px;
      height: 75vh;
      max-height: 640px;
      min-height: 400px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes modalIn {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes inlineIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.92);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s ease;
      cursor: zoom-in;
    }

    .fs-overlay.zoomed {
      cursor: grab;
      overflow: hidden;
    }

    .fs-overlay.zoomed.panning {
      cursor: grabbing;
    }

    .fs-overlay.zoomed .fs-img {
      max-width: none;
      max-height: none;
      width: auto;
      height: auto;
    }

    .fs-img {
      max-width: 92vw;
      max-height: 88vh;
      object-fit: contain;
      border-radius: 4px;
      user-select: none;
      -webkit-user-drag: none;
      transition: transform 0.25s ease;
    }

    .fs-overlay.panning .fs-img {
      transition: none;
    }

    .fs-toolbar {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      gap: 8px;
      z-index: 10001;
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
    }

    .fs-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .fs-btn svg {
      width: 20px;
      height: 20px;
    }

    .fs-filename {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
      padding: 6px 16px;
      border-radius: 8px;
      white-space: nowrap;
      z-index: 10001;
    }

    .preview-nav:focus-visible,
    .fs-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop { animation: none; }
      .modal-card { animation: none; }
      .inline { animation: none; }
      .fs-overlay { animation: none; }
      .body.has-files { animation: none; }
    }

    /* --- Responsive: Tablet (≤ 768px) --- */
    @media (max-width: 768px) {
      .modal-backdrop { padding: 12px; }
      .modal-card { border-radius: 12px; max-height: 92vh; }
      .header { padding: 12px 16px; }
      .header-icon { width: 28px; height: 28px; margin-right: 10px; }
      .header-icon svg { width: 14px; height: 14px; }
      .header-title { font-size: 14px; }
      .body { padding: 16px; }
      .body.has-files { padding: 16px; padding-bottom: 12px; }
      .asset-count { padding: 12px 0 6px; font-size: 12px; }

      .preview-layout { flex-direction: column; }
      .preview-layout .file-grid-side {
        width: 100%;
        max-height: 140px;
        overflow-x: auto;
        overflow-y: hidden;
        flex-shrink: 0;
      }
      .preview-panel { padding: 0 0 16px; }

      .preview-topbar { padding: 8px 0; }

      .inline { border-radius: 12px; }

      .connector-modal-backdrop { padding: 8px; }
      .connector-modal {
        max-width: 100%;
        height: 85vh;
        max-height: none;
        border-radius: 14px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) --- */
    @media (max-width: 480px) {
      .modal-backdrop { padding: 0; }
      .modal-card {
        border-radius: 0;
        max-height: 100vh;
        max-width: 100%;
        height: 100%;
      }
      .header { padding: 10px 14px; }
      .header-icon { width: 26px; height: 26px; margin-right: 8px; }
      .header-title { font-size: 14px; }
      .body { padding: 12px; }
      .body.has-files { padding: 12px; padding-bottom: 8px; }
      .asset-count { padding: 8px 0 4px; font-size: 11px; }

      .preview-layout .file-grid-side { max-height: 100px; }
      .preview-panel { padding: 0 0 12px; }
      .preview-meta-row { padding: 6px 0; }
      .preview-meta-label { width: 90px; font-size: 12px; }
      .preview-meta-value { font-size: 12px; }

      .inline { max-height: 100vh; border-radius: 8px; box-shadow: none; }

      .connector-modal-backdrop { padding: 0; }
      .connector-modal {
        border-radius: 0;
        height: 100vh;
        max-height: none;
        min-height: auto;
      }
    }
  `,w._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),w._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),w);C([p.property({attribute:!1})],_.prototype,"config");C([p.state()],_.prototype,"_isOpen");C([p.state()],_.prototype,"_activeConnector");C([p.state()],_.prototype,"_showUrlDialog");C([p.state()],_.prototype,"_showCameraDialog");C([p.state()],_.prototype,"_showScreenCastDialog");C([p.state()],_.prototype,"_previewFileId");C([p.state()],_.prototype,"_previewDims");C([p.state()],_.prototype,"_fullscreenPreviewUrl");C([p.state()],_.prototype,"_fullscreenZoomed");C([p.state()],_.prototype,"_bodyDragOver");let pt=_;exports.AuthExpiredError=J;exports.CORE_SOURCES=M;exports.PublicEvents=x;exports.SfxActionsBar=$;exports.SfxCameraDialog=z;exports.SfxDropZone=b;exports.SfxFileItem=K;exports.SfxFileList=W;exports.SfxImportDivider=re;exports.SfxScreenCastDialog=P;exports.SfxSourcePills=X;exports.SfxSuccessCard=D;exports.SfxUploader=pt;exports.SfxUrlDialog=j;exports.Store=we;exports.UploadEngine=ke;exports.buildAuthHeaders=N;exports.createStore=_e;exports.exchangeSassKey=Ce;exports.getApiBase=Z;exports.getAuthUrl=ze;exports.getProviderSources=Se;exports.listFiles=Fe;exports.listNextPage=Te;exports.logout=Oe;exports.resolveAuth=$e;exports.searchProvider=Le;
