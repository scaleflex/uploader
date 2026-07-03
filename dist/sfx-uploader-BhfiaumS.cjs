"use strict";var Er=Object.create;var ti=Object.defineProperty;var Pr=Object.getOwnPropertyDescriptor;var Ur=Object.getOwnPropertyNames;var Rr=Object.getPrototypeOf,Tr=Object.prototype.hasOwnProperty;var Fr=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Ur(e))!Tr.call(r,o)&&o!==t&&ti(r,o,{get:()=>e[o],enumerable:!(i=Pr(e,o))||i.enumerable});return r};var Ir=(r,e,t)=>(t=r!=null?Er(Rr(r)):{},Fr(e||!r||!r.__esModule?ti(t,"default",{value:r,enumerable:!0}):t,r));const l=require("lit"),oe=require("@scaleflex/dam-ui/i18n"),x=require("lit/decorators.js"),De=require("lit/directives/repeat.js"),K=require("@scaleflex/dam-ui"),N=require("@scaleflex/dam-metadata"),nt=require("@scaleflex/dam-core"),he=require("lit/directives/unsafe-svg.js"),ii=require("lit/directives/unsafe-html.js"),Or=require("lit/directives/class-map.js");require("@scaleflex/bulk-edit");const ji="f7b2366e-fcb6-4f1a-8f23-8de48422989a",zr="https://i18n-fastly.ultrafast.io",Ar="https://neo.wordplex.io",Bi="uploader",We=oe.createI18n({gridUuid:ji,namespace:Bi,cdnUrl:zr}),Dr=We.initI18n;We.getInstance;We.onChange;const xe=We.t,Lr=We.I18nController,Mr=oe.createMissingKeysHelper({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:Bi,gridUuid:ji,prodUrl:Ar,logPrefix:"[uploader]"});function jr(r,e){var n,a,c;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,r);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const o=(c=(a=r.response)==null?void 0:a.file)==null?void 0:c.uuid;return o?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(o))}`:null}const Hi=l.svg`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,xt=l.html`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${Hi}
</svg>`;class Ni{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function X(r,e,t){const i=r.getState().files,o=i.get(e);if(!o)return;const s=new Map(i);s.set(e,{...o,...t}),r.setState({files:s})}function ke(r,e){const t=new Map(r.getState().files);t.set(e.id,e),r.setState({files:t})}function ri(r,e){const t=r.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),r.setState({files:i})}function qi(){return new Ni({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:oe.fallbackT})}class Br{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Hr="SAME_ASSET_EXISTS_SKIP_UPLOAD",Nr="ERROR_SHA1_CONFLICT";function Xe(r){return(r==null?void 0:r.code)===Hr||(r==null?void 0:r.code)===Nr}function Dt(r,e){return{...r,status:"success",file:r.file??{uuid:r.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function at(r,e){var t,i,o,s,n;return((i=(t=r==null?void 0:r.info)==null?void 0:t.msg)==null?void 0:i.trim())||((o=r==null?void 0:r.msg)==null?void 0:o.trim())||((s=r==null?void 0:r.hint)==null?void 0:s.trim())||((n=r==null?void 0:r.message)==null?void 0:n.trim())||e}function qr(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function Vr(r,e){const t=new XMLHttpRequest;let i=!1;const o=qr(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):Xe(n)?e.onComplete(Dt(n,r)):e.onError(new Error(at(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const s=new FormData;if(r.file){const n={name:r.name,type:r.type};s.append("info[files[]]",JSON.stringify(n)),Object.keys(r.meta).length>0&&s.append("meta[files[]]",JSON.stringify(r.meta)),r.tags.length>0&&s.append("tags[files[]]",JSON.stringify(r.tags)),N.hasProductData(r.product)&&s.append("product[files[]]",JSON.stringify(N.compactProduct(r.product))),s.append("files[]",r.file,r.name)}return t.send(s),{abort(){i=!0,t.abort()}}}function ht(r){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":r}}function ve(r){return r.replace(/\/+$/,"")}const Kr={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Ze(r){return Kr[r]??r}function Yr(r,e){const t=ve(r),i=btoa(JSON.stringify({origin:window.location.origin})),o=Ze(e);return`${t}/${o}/connect?state=${encodeURIComponent(i)}`}async function Vi(r,e,t,i="",o){const s=ve(r),n=i?`/${i}`:"",a=Ze(e),c=await fetch(`${s}/${a}/list${n}`,{method:"GET",headers:ht(t),credentials:"same-origin",signal:o});if(c.status===401)throw new ut;if(!c.ok){const d=await c.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${c.status})`)}return c.json()}async function Ki(r,e,t,i){const o=ve(r),s=await fetch(`${o}/${t}`,{method:"GET",headers:ht(e),credentials:"same-origin",signal:i});if(s.status===401)throw new ut;if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${s.status})`)}return s.json()}async function Gr(r,e,t,i,o,s){const n=[];async function a(c,d){let p=null,b=!0;do{if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");const f=b?await Vi(r,e,t,c,s):await Ki(r,t,p,s);b=!1,p=f.nextPagePath;for(const k of f.items){if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");if(k.isFolder){const C=d?`${d}/${k.name}`:k.name;await a(k.requestPath,C)}else n.push({...k,relativeFolder:d})}}while(p)}return await a(i,o),n}async function Wr(r,e,t,i){const o=ve(r),s=Ze(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${o}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const c=await a.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function Xr(r,e,t,i,o,s=!1){const n=ve(r),a=Ze(e),c=s?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,d=s?{Accept:"application/json","Content-Type":"application/json"}:ht(t),p=await fetch(c,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(p.status===401)throw new ut;if(!p.ok){const b=await p.json().catch(()=>null);throw new Error((b==null?void 0:b.message)||`Companion upload failed (HTTP ${p.status})`)}return p.json()}async function Zr(r,e,t){const i=ve(r),o=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!o.ok){const s=await o.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Could not fetch URL metadata (HTTP ${o.status})`)}return o.json()}async function Jr(r,e,t,i){const o=ve(r),s=await fetch(`${o}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${s.status})`)}return s.json()}async function Qr(r,e,t){const i=ve(r),o=Ze(e),s=await fetch(`${i}/${o}/logout`,{method:"GET",headers:ht(t),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function eo(r){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r))==null?void 0:o[1])??r;return`${/^https:\/\//i.test(r)?"wss":"ws"}://${t}`}class ut extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Yi(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function Gi(r,e){const t={name:r.name,type:r.type,"filerobot-folder":e};return r.meta&&Object.keys(r.meta).length>0&&(t.meta=JSON.stringify(r.meta)),r.tags&&r.tags.length>0&&(t.tags=JSON.stringify(r.tags)),N.hasProductData(r.product)&&(t.product=JSON.stringify(N.compactProduct(r.product))),t}function Wi(r){const t=`${eo(r.companionUrl)}/api/${r.token}`;let i;try{i=new WebSocket(t)}catch{return r.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const s=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,c,d;if(!o)try{const p=JSON.parse(n.data);switch(p.action){case"progress":{const b=p.payload,f=b.bytesUploaded??0,k=b.bytesTotal??(r.expectedSize||1);r.onProgress(f,k);break}case"success":{const b=p.payload;if(s(),i.close(),(a=b.response)!=null&&a.responseText)try{const f=JSON.parse(b.response.responseText);if(f.status==="success"){r.onComplete(f);return}if(Xe(f)){r.onComplete(Dt(f,r.uploadFile));return}r.onError(new Error(at(f,"Upload failed")));return}catch{}r.onError(new Error("Upload completed but no valid response received"));break}case"error":{const b=p.payload;s(),i.close();let f=((c=b.error)==null?void 0:c.message)||"Upload failed";if((d=b.response)!=null&&d.responseText)try{const k=JSON.parse(b.response.responseText);f=at(k,f)}catch{}r.onError(new Error(f));break}}}catch{}},i.onerror=()=>{o||(s(),r.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(s(),r.onError(new Error("Upload progress connection closed unexpectedly")))},i}function Xi(r){if(r){r.onmessage=null,r.onerror=null,r.onclose=null;try{r.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}r.close()}}async function to(r,e,t,i,o,s,n){const a=r.replace(/\/+$/,""),c=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:o,size:s,metadata:n})});if(!c.ok){const d=await c.text().catch(()=>"");throw new Error(`Google Picker upload failed (${c.status}): ${d}`)}return c.json()}function io(r,e){const t=r.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,o=null;const s=Yi(e.apiBase,e.folder,e.extraParams),n=Gi(r,e.folder);return(t.pickerAccessToken?to(t.companionUrl,t.pickerAccessToken,t.fileId,s,e.authHeaders,t.size,n):Xr(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(c=>{i||(o=Wi({companionUrl:t.companionUrl,token:c.token,uploadFile:r,expectedSize:t.size,onProgress:(d,p)=>{i||e.onProgress(d,p)},onComplete:d=>{i||e.onComplete(d)},onError:d=>{i||e.onError(d)}}))}).catch(c=>{i||e.onError(c instanceof Error?c:new Error(String(c)))}),{abort(){i=!0,Xi(o),o=null}}}function ro(r,e){const t=r.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,o=null;const s=new AbortController,n=Yi(e.apiBase,e.folder,e.extraParams);return Zr(e.companionUrl,t,s.signal).then(a=>{var d;if(i)return null;(d=e.onMeta)==null||d.call(e,{name:a.name,type:a.type,size:a.size});const c=Gi(r,e.folder);return a.name&&(c.name=a.name),a.type&&(c.type=a.type),Jr(e.companionUrl,t,{fileId:r.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:c},s.signal).then(p=>({result:p,size:a.size}))}).then(a=>{i||!a||(o=Wi({companionUrl:e.companionUrl,token:a.result.token,uploadFile:r,expectedSize:a.size,onProgress:(c,d)=>{i||e.onProgress(c,d)},onComplete:c=>{i||e.onComplete(c)},onError:c=>{i||e.onError(c)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,s.abort(),Xi(o),o=null}}}function $t(r){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(r)}function oo(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function so(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function no(r,e,t){return e=He(e),ao(r,Lt()?Reflect.construct(e,t||[],He(r).constructor):e.apply(r,t))}function ao(r,e){if(e&&($t(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lo(r)}function lo(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function co(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Be(r,e)}function Ct(r){var e=typeof Map=="function"?new Map:void 0;return Ct=function(i){if(i===null||!ho(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return po(i,arguments,He(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Be(o,i)},Ct(r)}function po(r,e,t){if(Lt())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(r.bind.apply(r,i));return t&&Be(o,t.prototype),o}function Lt(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lt=function(){return!!r})()}function ho(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function Be(r,e){return Be=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Be(r,e)}function He(r){return He=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},He(r)}var Le=(function(r){function e(t){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(so(this,e),i=no(this,e,[t]),i.originalRequest=s,i.originalResponse=n,i.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),s!=null){var a=s.getHeader("X-Request-ID")||"n/a",c=s.getMethod(),d=s.getURL(),p=n?n.getStatus():"n/a",b=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(c,", url: ").concat(d,", response code: ").concat(p,", response text: ").concat(b,", request id: ").concat(a,")")}return i.message=t,i}return co(e,r),oo(e)})(Ct(Error));function Ne(r){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(r)}function uo(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function fo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,go(i.key),i)}}function mo(r,e,t){return e&&fo(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function go(r){var e=vo(r,"string");return Ne(e)=="symbol"?e:e+""}function vo(r,e){if(Ne(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ne(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var bo=(function(){function r(){uo(this,r)}return mo(r,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Zi="3.7.8",xo=Zi,Oe=typeof Buffer=="function",oi=typeof TextDecoder=="function"?new TextDecoder:void 0,si=typeof TextEncoder=="function"?new TextEncoder:void 0,yo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Me=Array.prototype.slice.call(yo),et=(r=>{let e={};return r.forEach((t,i)=>e[t]=i),e})(Me),wo=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,J=String.fromCharCode.bind(String),ni=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):r=>new Uint8Array(Array.prototype.slice.call(r,0)),Ji=r=>r.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Qi=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),er=r=>{let e,t,i,o,s="";const n=r.length%3;for(let a=0;a<r.length;){if((t=r.charCodeAt(a++))>255||(i=r.charCodeAt(a++))>255||(o=r.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|o,s+=Me[e>>18&63]+Me[e>>12&63]+Me[e>>6&63]+Me[e&63]}return n?s.slice(0,n-3)+"===".substring(n):s},Mt=typeof btoa=="function"?r=>btoa(r):Oe?r=>Buffer.from(r,"binary").toString("base64"):er,Et=Oe?r=>Buffer.from(r).toString("base64"):r=>{let t=[];for(let i=0,o=r.length;i<o;i+=4096)t.push(J.apply(null,r.subarray(i,i+4096)));return Mt(t.join(""))},it=(r,e=!1)=>e?Ji(Et(r)):Et(r),_o=r=>{if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?J(192|e>>>6)+J(128|e&63):J(224|e>>>12&15)+J(128|e>>>6&63)+J(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return J(240|e>>>18&7)+J(128|e>>>12&63)+J(128|e>>>6&63)+J(128|e&63)}},ko=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,tr=r=>r.replace(ko,_o),ai=Oe?r=>Buffer.from(r,"utf8").toString("base64"):si?r=>Et(si.encode(r)):r=>Mt(tr(r)),Te=(r,e=!1)=>e?Ji(ai(r)):ai(r),li=r=>Te(r,!0),So=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,$o=r=>{switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return J((t>>>10)+55296)+J((t&1023)+56320);case 3:return J((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return J((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},ir=r=>r.replace(So,$o),rr=r=>{if(r=r.replace(/\s+/g,""),!wo.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let e,t,i,o=[];for(let s=0;s<r.length;)e=et[r.charAt(s++)]<<18|et[r.charAt(s++)]<<12|(t=et[r.charAt(s++)])<<6|(i=et[r.charAt(s++)]),t===64?o.push(J(e>>16&255)):i===64?o.push(J(e>>16&255,e>>8&255)):o.push(J(e>>16&255,e>>8&255,e&255));return o.join("")},jt=typeof atob=="function"?r=>atob(Qi(r)):Oe?r=>Buffer.from(r,"base64").toString("binary"):rr,or=Oe?r=>ni(Buffer.from(r,"base64")):r=>ni(jt(r).split("").map(e=>e.charCodeAt(0))),sr=r=>or(nr(r)),Co=Oe?r=>Buffer.from(r,"base64").toString("utf8"):oi?r=>oi.decode(or(r)):r=>ir(jt(r)),nr=r=>Qi(r.replace(/[-_]/g,e=>e=="-"?"+":"/")),Pt=r=>Co(nr(r)),Eo=r=>{if(typeof r!="string")return!1;const e=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},ar=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),lr=function(){const r=(e,t)=>Object.defineProperty(String.prototype,e,ar(t));r("fromBase64",function(){return Pt(this)}),r("toBase64",function(e){return Te(this,e)}),r("toBase64URI",function(){return Te(this,!0)}),r("toBase64URL",function(){return Te(this,!0)}),r("toUint8Array",function(){return sr(this)})},cr=function(){const r=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,ar(t));r("toBase64",function(e){return it(this,e)}),r("toBase64URI",function(){return it(this,!0)}),r("toBase64URL",function(){return it(this,!0)})},Po=()=>{lr(),cr()},Uo={version:Zi,VERSION:xo,atob:jt,atobPolyfill:rr,btoa:Mt,btoaPolyfill:er,fromBase64:Pt,toBase64:Te,encode:Te,encodeURI:li,encodeURL:li,utob:tr,btou:ir,decode:Pt,isValid:Eo,fromUint8Array:it,toUint8Array:sr,extendString:lr,extendUint8Array:cr,extendBuiltins:Po};var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ro(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var yt,di;function To(){return di||(di=1,yt=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),yt}var tt={},pi;function Fo(){if(pi)return tt;pi=1;var r=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function o(n){for(var a=/([^=?#&]+)=?([^&]*)/g,c={},d;d=a.exec(n);){var p=t(d[1]),b=t(d[2]);p===null||b===null||p in c||(c[p]=b)}return c}function s(n,a){a=a||"";var c=[],d,p;typeof a!="string"&&(a="?");for(p in n)if(r.call(n,p)){if(d=n[p],!d&&(d===null||d===e||isNaN(d))&&(d=""),p=i(p),d=i(d),p===null||d===null)continue;c.push(p+"="+d)}return c.length?a+c.join("&"):""}return tt.stringify=s,tt.parse=o,tt}var wt,hi;function Io(){if(hi)return wt;hi=1;var r=To(),e=Fo(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function c(w){return(w||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function(y,g){return f(g.protocol)?y.replace(/\\/g,"/"):y},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function b(w){var y;typeof window<"u"?y=window:typeof ci<"u"?y=ci:typeof self<"u"?y=self:y={};var g=y.location||{};w=w||g;var m={},U=typeof w,S;if(w.protocol==="blob:")m=new _(unescape(w.pathname),{});else if(U==="string"){m=new _(w,{});for(S in p)delete m[S]}else if(U==="object"){for(S in w)S in p||(m[S]=w[S]);m.slashes===void 0&&(m.slashes=o.test(w.href))}return m}function f(w){return w==="file:"||w==="ftp:"||w==="http:"||w==="https:"||w==="ws:"||w==="wss:"}function k(w,y){w=c(w),w=w.replace(i,""),y=y||{};var g=n.exec(w),m=g[1]?g[1].toLowerCase():"",U=!!g[2],S=!!g[3],T=0,F;return U?S?(F=g[2]+g[3]+g[4],T=g[2].length+g[3].length):(F=g[2]+g[4],T=g[2].length):S?(F=g[3]+g[4],T=g[3].length):F=g[4],m==="file:"?T>=2&&(F=F.slice(2)):f(m)?F=g[4]:m?U&&(F=F.slice(2)):T>=2&&f(y.protocol)&&(F=g[4]),{protocol:m,slashes:U||f(m),slashesCount:T,rest:F}}function C(w,y){if(w==="")return y;for(var g=(y||"/").split("/").slice(0,-1).concat(w.split("/")),m=g.length,U=g[m-1],S=!1,T=0;m--;)g[m]==="."?g.splice(m,1):g[m]===".."?(g.splice(m,1),T++):T&&(m===0&&(S=!0),g.splice(m,1),T--);return S&&g.unshift(""),(U==="."||U==="..")&&g.push(""),g.join("/")}function _(w,y,g){if(w=c(w),w=w.replace(i,""),!(this instanceof _))return new _(w,y,g);var m,U,S,T,F,B,M=d.slice(),ne=typeof y,O=this,ae=0;for(ne!=="object"&&ne!=="string"&&(g=y,y=null),g&&typeof g!="function"&&(g=e.parse),y=b(y),U=k(w||"",y),m=!U.protocol&&!U.slashes,O.slashes=U.slashes||m&&y.slashes,O.protocol=U.protocol||y.protocol||"",w=U.rest,(U.protocol==="file:"&&(U.slashesCount!==2||a.test(w))||!U.slashes&&(U.protocol||U.slashesCount<2||!f(O.protocol)))&&(M[3]=[/(.*)/,"pathname"]);ae<M.length;ae++){if(T=M[ae],typeof T=="function"){w=T(w,O);continue}S=T[0],B=T[1],S!==S?O[B]=w:typeof S=="string"?(F=S==="@"?w.lastIndexOf(S):w.indexOf(S),~F&&(typeof T[2]=="number"?(O[B]=w.slice(0,F),w=w.slice(F+T[2])):(O[B]=w.slice(F),w=w.slice(0,F)))):(F=S.exec(w))&&(O[B]=F[1],w=w.slice(0,F.index)),O[B]=O[B]||m&&T[3]&&y[B]||"",T[4]&&(O[B]=O[B].toLowerCase())}g&&(O.query=g(O.query)),m&&y.slashes&&O.pathname.charAt(0)!=="/"&&(O.pathname!==""||y.pathname!=="")&&(O.pathname=C(O.pathname,y.pathname)),O.pathname.charAt(0)!=="/"&&f(O.protocol)&&(O.pathname="/"+O.pathname),r(O.port,O.protocol)||(O.host=O.hostname,O.port=""),O.username=O.password="",O.auth&&(F=O.auth.indexOf(":"),~F?(O.username=O.auth.slice(0,F),O.username=encodeURIComponent(decodeURIComponent(O.username)),O.password=O.auth.slice(F+1),O.password=encodeURIComponent(decodeURIComponent(O.password))):O.username=encodeURIComponent(decodeURIComponent(O.auth)),O.auth=O.password?O.username+":"+O.password:O.username),O.origin=O.protocol!=="file:"&&f(O.protocol)&&O.host?O.protocol+"//"+O.host:"null",O.href=O.toString()}function E(w,y,g){var m=this;switch(w){case"query":typeof y=="string"&&y.length&&(y=(g||e.parse)(y)),m[w]=y;break;case"port":m[w]=y,r(y,m.protocol)?y&&(m.host=m.hostname+":"+y):(m.host=m.hostname,m[w]="");break;case"hostname":m[w]=y,m.port&&(y+=":"+m.port),m.host=y;break;case"host":m[w]=y,s.test(y)?(y=y.split(":"),m.port=y.pop(),m.hostname=y.join(":")):(m.hostname=y,m.port="");break;case"protocol":m.protocol=y.toLowerCase(),m.slashes=!g;break;case"pathname":case"hash":if(y){var U=w==="pathname"?"/":"#";m[w]=y.charAt(0)!==U?U+y:y}else m[w]=y;break;case"username":case"password":m[w]=encodeURIComponent(y);break;case"auth":var S=y.indexOf(":");~S?(m.username=y.slice(0,S),m.username=encodeURIComponent(decodeURIComponent(m.username)),m.password=y.slice(S+1),m.password=encodeURIComponent(decodeURIComponent(m.password))):m.username=encodeURIComponent(decodeURIComponent(y))}for(var T=0;T<d.length;T++){var F=d[T];F[4]&&(m[F[1]]=m[F[1]].toLowerCase())}return m.auth=m.password?m.username+":"+m.password:m.username,m.origin=m.protocol!=="file:"&&f(m.protocol)&&m.host?m.protocol+"//"+m.host:"null",m.href=m.toString(),m}function I(w){(!w||typeof w!="function")&&(w=e.stringify);var y,g=this,m=g.host,U=g.protocol;U&&U.charAt(U.length-1)!==":"&&(U+=":");var S=U+(g.protocol&&g.slashes||f(g.protocol)?"//":"");return g.username?(S+=g.username,g.password&&(S+=":"+g.password),S+="@"):g.password?(S+=":"+g.password,S+="@"):g.protocol!=="file:"&&f(g.protocol)&&!m&&g.pathname!=="/"&&(S+="@"),(m[m.length-1]===":"||s.test(g.hostname)&&!g.port)&&(m+=":"),S+=m+g.pathname,y=typeof g.query=="object"?w(g.query):g.query,y&&(S+=y.charAt(0)!=="?"?"?"+y:y),g.hash&&(S+=g.hash),S}return _.prototype={set:E,toString:I},_.extractProtocol=k,_.location=b,_.trimLeft=c,_.qs=e,wt=_,wt}var Oo=Io();const zo=Ro(Oo);function Ao(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function Ut(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Ut=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(v,h,u){v[h]=u.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function d(v,h,u){return Object.defineProperty(v,h,{value:u,enumerable:!0,configurable:!0,writable:!0}),v[h]}try{d({},"")}catch{d=function(u,$,R){return u[$]=R}}function p(v,h,u,$){var R=h&&h.prototype instanceof I?h:I,P=Object.create(R.prototype),z=new ae($||[]);return o(P,"_invoke",{value:B(v,u,z)}),P}function b(v,h,u){try{return{type:"normal",arg:v.call(h,u)}}catch($){return{type:"throw",arg:$}}}e.wrap=p;var f="suspendedStart",k="suspendedYield",C="executing",_="completed",E={};function I(){}function w(){}function y(){}var g={};d(g,n,function(){return this});var m=Object.getPrototypeOf,U=m&&m(m(be([])));U&&U!==t&&i.call(U,n)&&(g=U);var S=y.prototype=I.prototype=Object.create(g);function T(v){["next","throw","return"].forEach(function(h){d(v,h,function(u){return this._invoke(h,u)})})}function F(v,h){function u(R,P,z,j){var H=b(v[R],v,P);if(H.type!=="throw"){var ee=H.arg,Z=ee.value;return Z&&ye(Z)=="object"&&i.call(Z,"__await")?h.resolve(Z.__await).then(function(te){u("next",te,z,j)},function(te){u("throw",te,z,j)}):h.resolve(Z).then(function(te){ee.value=te,z(ee)},function(te){return u("throw",te,z,j)})}j(H.arg)}var $;o(this,"_invoke",{value:function(P,z){function j(){return new h(function(H,ee){u(P,z,H,ee)})}return $=$?$.then(j,j):j()}})}function B(v,h,u){var $=f;return function(R,P){if($===C)throw Error("Generator is already running");if($===_){if(R==="throw")throw P;return{value:r,done:!0}}for(u.method=R,u.arg=P;;){var z=u.delegate;if(z){var j=M(z,u);if(j){if(j===E)continue;return j}}if(u.method==="next")u.sent=u._sent=u.arg;else if(u.method==="throw"){if($===f)throw $=_,u.arg;u.dispatchException(u.arg)}else u.method==="return"&&u.abrupt("return",u.arg);$=C;var H=b(v,h,u);if(H.type==="normal"){if($=u.done?_:k,H.arg===E)continue;return{value:H.arg,done:u.done}}H.type==="throw"&&($=_,u.method="throw",u.arg=H.arg)}}}function M(v,h){var u=h.method,$=v.iterator[u];if($===r)return h.delegate=null,u==="throw"&&v.iterator.return&&(h.method="return",h.arg=r,M(v,h),h.method==="throw")||u!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+u+"' method")),E;var R=b($,v.iterator,h.arg);if(R.type==="throw")return h.method="throw",h.arg=R.arg,h.delegate=null,E;var P=R.arg;return P?P.done?(h[v.resultName]=P.value,h.next=v.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,E):P:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,E)}function ne(v){var h={tryLoc:v[0]};1 in v&&(h.catchLoc=v[1]),2 in v&&(h.finallyLoc=v[2],h.afterLoc=v[3]),this.tryEntries.push(h)}function O(v){var h=v.completion||{};h.type="normal",delete h.arg,v.completion=h}function ae(v){this.tryEntries=[{tryLoc:"root"}],v.forEach(ne,this),this.reset(!0)}function be(v){if(v||v===""){var h=v[n];if(h)return h.call(v);if(typeof v.next=="function")return v;if(!isNaN(v.length)){var u=-1,$=function R(){for(;++u<v.length;)if(i.call(v,u))return R.value=v[u],R.done=!1,R;return R.value=r,R.done=!0,R};return $.next=$}}throw new TypeError(ye(v)+" is not iterable")}return w.prototype=y,o(S,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:w,configurable:!0}),w.displayName=d(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(v){var h=typeof v=="function"&&v.constructor;return!!h&&(h===w||(h.displayName||h.name)==="GeneratorFunction")},e.mark=function(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,y):(v.__proto__=y,d(v,c,"GeneratorFunction")),v.prototype=Object.create(S),v},e.awrap=function(v){return{__await:v}},T(F.prototype),d(F.prototype,a,function(){return this}),e.AsyncIterator=F,e.async=function(v,h,u,$,R){R===void 0&&(R=Promise);var P=new F(p(v,h,u,$),R);return e.isGeneratorFunction(h)?P:P.next().then(function(z){return z.done?z.value:P.next()})},T(S),d(S,c,"Generator"),d(S,n,function(){return this}),d(S,"toString",function(){return"[object Generator]"}),e.keys=function(v){var h=Object(v),u=[];for(var $ in h)u.push($);return u.reverse(),function R(){for(;u.length;){var P=u.pop();if(P in h)return R.value=P,R.done=!1,R}return R.done=!0,R}},e.values=be,ae.prototype={constructor:ae,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!h)for(var u in this)u.charAt(0)==="t"&&i.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=r)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var u=this;function $(ee,Z){return z.type="throw",z.arg=h,u.next=ee,Z&&(u.method="next",u.arg=r),!!Z}for(var R=this.tryEntries.length-1;R>=0;--R){var P=this.tryEntries[R],z=P.completion;if(P.tryLoc==="root")return $("end");if(P.tryLoc<=this.prev){var j=i.call(P,"catchLoc"),H=i.call(P,"finallyLoc");if(j&&H){if(this.prev<P.catchLoc)return $(P.catchLoc,!0);if(this.prev<P.finallyLoc)return $(P.finallyLoc)}else if(j){if(this.prev<P.catchLoc)return $(P.catchLoc,!0)}else{if(!H)throw Error("try statement without catch or finally");if(this.prev<P.finallyLoc)return $(P.finallyLoc)}}}},abrupt:function(h,u){for(var $=this.tryEntries.length-1;$>=0;--$){var R=this.tryEntries[$];if(R.tryLoc<=this.prev&&i.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var P=R;break}}P&&(h==="break"||h==="continue")&&P.tryLoc<=u&&u<=P.finallyLoc&&(P=null);var z=P?P.completion:{};return z.type=h,z.arg=u,P?(this.method="next",this.next=P.finallyLoc,E):this.complete(z)},complete:function(h,u){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&u&&(this.next=u),E},finish:function(h){for(var u=this.tryEntries.length-1;u>=0;--u){var $=this.tryEntries[u];if($.finallyLoc===h)return this.complete($.completion,$.afterLoc),O($),E}},catch:function(h){for(var u=this.tryEntries.length-1;u>=0;--u){var $=this.tryEntries[u];if($.tryLoc===h){var R=$.completion;if(R.type==="throw"){var P=R.arg;O($)}return P}}throw Error("illegal catch attempt")},delegateYield:function(h,u,$){return this.delegate={iterator:be(h),resultName:u,nextLoc:$},this.method==="next"&&(this.arg=r),E}},e}function ui(r,e,t,i,o,s,n){try{var a=r[s](n),c=a.value}catch(d){t(d);return}a.done?e(c):Promise.resolve(c).then(i,o)}function Do(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(c){ui(s,i,o,n,a,"next",c)}function a(c){ui(s,i,o,n,a,"throw",c)}n(void 0)})}}function dr(r,e){return jo(r)||Mo(r,e)||pr(r,e)||Lo()}function Lo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mo(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,o,s,n,a=[],c=!0,d=!1;try{if(s=(t=t.call(r)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(p){d=!0,o=p}finally{try{if(!c&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(d)throw o}}return a}}function jo(r){if(Array.isArray(r))return r}function ye(r){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(r)}function Bo(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=pr(r))||e){t&&(r=t);var i=0,o=function(){};return{s:o,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,n=!1,a;return{s:function(){t=t.call(r)},n:function(){var d=t.next();return s=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function pr(r,e){if(r){if(typeof r=="string")return fi(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fi(r,e)}}function fi(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function mi(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Se(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mi(Object(t),!0).forEach(function(i){Ho(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):mi(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Ho(r,e,t){return e=hr(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function No(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function gi(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,hr(i.key),i)}}function qo(r,e,t){return e&&gi(r.prototype,e),t&&gi(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function hr(r){var e=Vo(r,"string");return ye(e)=="symbol"?e:e+""}function Vo(r,e){if(ye(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(ye(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var rt="tus-v1",ot="ietf-draft-03",je="ietf-draft-05",Ko={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:ur,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:rt},lt=(function(){function r(e,t){No(this,r),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return qo(r,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![rt,ot,je].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var s=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];s<n.length;s++){var a=n[s];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(c){return t._fingerprint=c,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(c){if(t._source=c,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(c){t._emitError(c)})}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,s=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Go(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(p,b){p.uploadUrl=i._parallelUploadUrls[b]||null}),this._parallelUploadUrls=new Array(a.length);var c=a.map(function(p,b){var f=0;return i._source.slice(p.start,p.end).then(function(k){var C=k.value;return new Promise(function(_,E){var I=Se(Se({},i.options),{},{uploadUrl:p.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Se(Se({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:_,onError:E,onProgress:function(g){s=s-f+g,f=g,i._emitProgress(s,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[b]=w.url,i._parallelUploadUrls.filter(function(g){return!!g}).length===a.length&&i._saveUploadInUrlStorage()}}),w=new r(C,I);w.start(),i._parallelUploads.push(w)})})}),d;Promise.all(c).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var p=vi(i.options.metadata);return p!==""&&d.setHeader("Upload-Metadata",p),i._sendRequest(d,null)}).then(function(p){if(!Ee(p.getStatus(),200)){i._emitHttpError(d,p,"tus: unexpected response while creating upload");return}var b=p.getHeader("Location");if(b==null){i._emitHttpError(d,p,"tus: invalid or missing Location header");return}i.url=wi(i.options.endpoint,b),"Created upload at ".concat(i.url),i._emitSuccess(p)}).catch(function(p){i._emitError(p)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var o=Bo(this._parallelUploads),s;try{for(o.s();!(s=o.n()).done;){var n=s.value;n.abort(t)}}catch(a){o.e(a)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():r.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,o,s){this._emitError(new Le(o,s,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),yi(t,this._retryAttempt,this.options)){var s=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},s);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=vi(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var s;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,s=this._addChunkToRequest(i)):((this.options.protocol===ot||this.options.protocol===je)&&i.setHeader("Upload-Complete","?0"),s=this._sendRequest(i,null)),s.then(function(n){if(!Ee(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=wi(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(s){var n=s.getStatus();if(!Ee(n,200)){if(n===423){t._emitHttpError(i,s,"tus: upload is currently locked; retry later");return}if(Ee(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,s,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(s.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,s,"tus: invalid or missing offset value");return}var c=Number.parseInt(s.getHeader("Upload-Length"),10);if(Number.isNaN(c)&&!t.options.uploadLengthDeferred&&t.options.protocol===rt){t._emitHttpError(i,s,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===c){t._emitProgress(c,c),t._emitSuccess(s);return}t._offset=a,t._performUpload()})}).catch(function(s){t._emitHttpError(i,null,"tus: failed to resume upload",s)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(s){if(!Ee(s.getStatus(),200)){t._emitHttpError(i,s,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,s)}).catch(function(s){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),s)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,o=this._offset,s=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(o+n,i._size)}),this.options.protocol===rt?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===je&&t.setHeader("Content-Type","application/partial-upload"),(s===Number.POSITIVE_INFINITY||s>this._size)&&!this.options.uploadLengthDeferred&&(s=this._size),this._source.slice(o,s).then(function(n){var a=n.value,c=n.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&c&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var p=i._offset+d;return!i.options.uploadLengthDeferred&&c&&p!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(p," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===ot||i.options.protocol===je)&&t.setHeader("Upload-Complete",c?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var o=bi(t,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return xi(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=bi("DELETE",t,i);return xi(o,null,i).then(function(s){if(s.getStatus()!==204)throw new Le("tus: unexpected response while terminating upload",null,o,s)}).catch(function(s){if(s instanceof Le||(s=new Le("tus: failed to terminate upload",s,o,null)),!yi(s,0,i))throw s;var n=i.retryDelays[0],a=i.retryDelays.slice(1),c=Se(Se({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,n)}).then(function(){return r.terminate(t,c)})})}}])})();function vi(r){return Object.entries(r).map(function(e){var t=dr(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(Uo.encode(String(o)))}).join(",")}function Ee(r,e){return r>=e&&r<e+100}function bi(r,e,t){var i=t.httpStack.createRequest(r,e);t.protocol===ot?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===je?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},s=0,n=Object.entries(o);s<n.length;s++){var a=dr(n[s],2),c=a[0],d=a[1];i.setHeader(c,d)}if(t.addRequestId){var p=Ao();i.setHeader("X-Request-ID",p)}return i}function xi(r,e,t){return Rt.apply(this,arguments)}function Rt(){return Rt=Do(Ut().mark(function r(e,t,i){var o;return Ut().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(o=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,o);case 9:return n.abrupt("return",o);case 10:case"end":return n.stop()}},r)})),Rt.apply(this,arguments)}function Yo(){var r=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(r=!1),r}function yi(r,e,t){return t.retryDelays==null||e>=t.retryDelays.length||r.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(r,e,t):ur(r)}function ur(r){var e=r.originalResponse?r.originalResponse.getStatus():0;return(!Ee(e,400)||e===409||e===423)&&Yo()}function wi(r,e){return new zo(e,r).toString()}function Go(r,e){for(var t=Math.floor(r/e),i=[],o=0;o<e;o++)i.push({start:t*o,end:t*(o+1)});return i[e-1].end=r,i}lt.defaultOptions=Ko;var fr=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Wo(r){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var o=i.response;e(o)},i.onerror=function(o){t(o)},i.open("GET",r),i.send()})}var Xo=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Zo(r){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var o=new Uint8Array(i.result);e({value:o})},i.onerror=function(o){t(o)},i.readAsArrayBuffer(r)})}function qe(r){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qe(r)}function Jo(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Qo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ts(i.key),i)}}function es(r,e,t){return e&&Qo(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ts(r){var e=is(r,"string");return qe(e)=="symbol"?e:e+""}function is(r,e){if(qe(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(qe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var _i=(function(){function r(e){Jo(this,r),this._file=e,this.size=e.size}return es(r,[{key:"slice",value:function(t,i){if(Xo())return Zo(this._file.slice(t,i));var o=this._file.slice(t,i),s=i>=this.size;return Promise.resolve({value:o,done:s})}},{key:"close",value:function(){}}])})();function Ve(r){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ve(r)}function rs(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function os(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ns(i.key),i)}}function ss(r,e,t){return e&&os(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ns(r){var e=as(r,"string");return Ve(e)=="symbol"?e:e+""}function as(r,e){if(Ve(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ve(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function ki(r){return r===void 0?0:r.size!==void 0?r.size:r.length}function ls(r,e){if(r.concat)return r.concat(e);if(r instanceof Blob)return new Blob([r,e],{type:r.type});if(r.set){var t=new r.constructor(r.length+e.length);return t.set(r),t.set(e,r.length),t}throw new Error("Unknown data type")}var cs=(function(){function r(e){rs(this,r),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return ss(r,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var o=this,s=i<=this._bufferOffset+ki(this._buffer);if(this._done||s){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(c){var d=c.value,p=c.done;return p?o._done=!0:o._buffer===void 0?o._buffer=d:o._buffer=ls(o._buffer,d),o._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=ki(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function we(r){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(r)}function Tt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Tt=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(v,h,u){v[h]=u.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function d(v,h,u){return Object.defineProperty(v,h,{value:u,enumerable:!0,configurable:!0,writable:!0}),v[h]}try{d({},"")}catch{d=function(u,$,R){return u[$]=R}}function p(v,h,u,$){var R=h&&h.prototype instanceof I?h:I,P=Object.create(R.prototype),z=new ae($||[]);return o(P,"_invoke",{value:B(v,u,z)}),P}function b(v,h,u){try{return{type:"normal",arg:v.call(h,u)}}catch($){return{type:"throw",arg:$}}}e.wrap=p;var f="suspendedStart",k="suspendedYield",C="executing",_="completed",E={};function I(){}function w(){}function y(){}var g={};d(g,n,function(){return this});var m=Object.getPrototypeOf,U=m&&m(m(be([])));U&&U!==t&&i.call(U,n)&&(g=U);var S=y.prototype=I.prototype=Object.create(g);function T(v){["next","throw","return"].forEach(function(h){d(v,h,function(u){return this._invoke(h,u)})})}function F(v,h){function u(R,P,z,j){var H=b(v[R],v,P);if(H.type!=="throw"){var ee=H.arg,Z=ee.value;return Z&&we(Z)=="object"&&i.call(Z,"__await")?h.resolve(Z.__await).then(function(te){u("next",te,z,j)},function(te){u("throw",te,z,j)}):h.resolve(Z).then(function(te){ee.value=te,z(ee)},function(te){return u("throw",te,z,j)})}j(H.arg)}var $;o(this,"_invoke",{value:function(P,z){function j(){return new h(function(H,ee){u(P,z,H,ee)})}return $=$?$.then(j,j):j()}})}function B(v,h,u){var $=f;return function(R,P){if($===C)throw Error("Generator is already running");if($===_){if(R==="throw")throw P;return{value:r,done:!0}}for(u.method=R,u.arg=P;;){var z=u.delegate;if(z){var j=M(z,u);if(j){if(j===E)continue;return j}}if(u.method==="next")u.sent=u._sent=u.arg;else if(u.method==="throw"){if($===f)throw $=_,u.arg;u.dispatchException(u.arg)}else u.method==="return"&&u.abrupt("return",u.arg);$=C;var H=b(v,h,u);if(H.type==="normal"){if($=u.done?_:k,H.arg===E)continue;return{value:H.arg,done:u.done}}H.type==="throw"&&($=_,u.method="throw",u.arg=H.arg)}}}function M(v,h){var u=h.method,$=v.iterator[u];if($===r)return h.delegate=null,u==="throw"&&v.iterator.return&&(h.method="return",h.arg=r,M(v,h),h.method==="throw")||u!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+u+"' method")),E;var R=b($,v.iterator,h.arg);if(R.type==="throw")return h.method="throw",h.arg=R.arg,h.delegate=null,E;var P=R.arg;return P?P.done?(h[v.resultName]=P.value,h.next=v.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,E):P:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,E)}function ne(v){var h={tryLoc:v[0]};1 in v&&(h.catchLoc=v[1]),2 in v&&(h.finallyLoc=v[2],h.afterLoc=v[3]),this.tryEntries.push(h)}function O(v){var h=v.completion||{};h.type="normal",delete h.arg,v.completion=h}function ae(v){this.tryEntries=[{tryLoc:"root"}],v.forEach(ne,this),this.reset(!0)}function be(v){if(v||v===""){var h=v[n];if(h)return h.call(v);if(typeof v.next=="function")return v;if(!isNaN(v.length)){var u=-1,$=function R(){for(;++u<v.length;)if(i.call(v,u))return R.value=v[u],R.done=!1,R;return R.value=r,R.done=!0,R};return $.next=$}}throw new TypeError(we(v)+" is not iterable")}return w.prototype=y,o(S,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:w,configurable:!0}),w.displayName=d(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(v){var h=typeof v=="function"&&v.constructor;return!!h&&(h===w||(h.displayName||h.name)==="GeneratorFunction")},e.mark=function(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,y):(v.__proto__=y,d(v,c,"GeneratorFunction")),v.prototype=Object.create(S),v},e.awrap=function(v){return{__await:v}},T(F.prototype),d(F.prototype,a,function(){return this}),e.AsyncIterator=F,e.async=function(v,h,u,$,R){R===void 0&&(R=Promise);var P=new F(p(v,h,u,$),R);return e.isGeneratorFunction(h)?P:P.next().then(function(z){return z.done?z.value:P.next()})},T(S),d(S,c,"Generator"),d(S,n,function(){return this}),d(S,"toString",function(){return"[object Generator]"}),e.keys=function(v){var h=Object(v),u=[];for(var $ in h)u.push($);return u.reverse(),function R(){for(;u.length;){var P=u.pop();if(P in h)return R.value=P,R.done=!1,R}return R.done=!0,R}},e.values=be,ae.prototype={constructor:ae,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!h)for(var u in this)u.charAt(0)==="t"&&i.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=r)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var u=this;function $(ee,Z){return z.type="throw",z.arg=h,u.next=ee,Z&&(u.method="next",u.arg=r),!!Z}for(var R=this.tryEntries.length-1;R>=0;--R){var P=this.tryEntries[R],z=P.completion;if(P.tryLoc==="root")return $("end");if(P.tryLoc<=this.prev){var j=i.call(P,"catchLoc"),H=i.call(P,"finallyLoc");if(j&&H){if(this.prev<P.catchLoc)return $(P.catchLoc,!0);if(this.prev<P.finallyLoc)return $(P.finallyLoc)}else if(j){if(this.prev<P.catchLoc)return $(P.catchLoc,!0)}else{if(!H)throw Error("try statement without catch or finally");if(this.prev<P.finallyLoc)return $(P.finallyLoc)}}}},abrupt:function(h,u){for(var $=this.tryEntries.length-1;$>=0;--$){var R=this.tryEntries[$];if(R.tryLoc<=this.prev&&i.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var P=R;break}}P&&(h==="break"||h==="continue")&&P.tryLoc<=u&&u<=P.finallyLoc&&(P=null);var z=P?P.completion:{};return z.type=h,z.arg=u,P?(this.method="next",this.next=P.finallyLoc,E):this.complete(z)},complete:function(h,u){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&u&&(this.next=u),E},finish:function(h){for(var u=this.tryEntries.length-1;u>=0;--u){var $=this.tryEntries[u];if($.finallyLoc===h)return this.complete($.completion,$.afterLoc),O($),E}},catch:function(h){for(var u=this.tryEntries.length-1;u>=0;--u){var $=this.tryEntries[u];if($.tryLoc===h){var R=$.completion;if(R.type==="throw"){var P=R.arg;O($)}return P}}throw Error("illegal catch attempt")},delegateYield:function(h,u,$){return this.delegate={iterator:be(h),resultName:u,nextLoc:$},this.method==="next"&&(this.arg=r),E}},e}function Si(r,e,t,i,o,s,n){try{var a=r[s](n),c=a.value}catch(d){t(d);return}a.done?e(c):Promise.resolve(c).then(i,o)}function ds(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(c){Si(s,i,o,n,a,"next",c)}function a(c){Si(s,i,o,n,a,"throw",c)}n(void 0)})}}function ps(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function hs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,fs(i.key),i)}}function us(r,e,t){return e&&hs(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function fs(r){var e=ms(r,"string");return we(e)=="symbol"?e:e+""}function ms(r,e){if(we(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(we(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var gs=(function(){function r(){ps(this,r)}return us(r,[{key:"openFile",value:(function(){var e=ds(Tt().mark(function i(o,s){var n;return Tt().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(fr()&&o&&typeof o.uri<"u")){c.next=11;break}return c.prev=1,c.next=4,Wo(o.uri);case 4:return n=c.sent,c.abrupt("return",new _i(n));case 8:throw c.prev=8,c.t0=c.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(c.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){c.next=13;break}return c.abrupt("return",Promise.resolve(new _i(o)));case 13:if(typeof o.read!="function"){c.next=18;break}if(s=Number(s),Number.isFinite(s)){c.next=17;break}return c.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return c.abrupt("return",Promise.resolve(new cs(o,s)));case 18:return c.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return c.stop()}},i,null,[[1,8]])}));function t(i,o){return e.apply(this,arguments)}return t})()}])})();function vs(r,e){return fr()?Promise.resolve(bs(r,e)):Promise.resolve(["tus-br",r.name,r.type,r.size,r.lastModified,e.endpoint].join("-"))}function bs(r,e){var t=r.exif?xs(JSON.stringify(r.exif)):"noexif";return["tus-rn",r.name||"noname",r.size||"nosize",t,e.endpoint].join("/")}function xs(r){var e=0;if(r.length===0)return e;for(var t=0;t<r.length;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Ke(r){"@babel/helpers - typeof";return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ke(r)}function Bt(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ys(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ws(i.key),i)}}function Ht(r,e,t){return e&&ys(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ws(r){var e=_s(r,"string");return Ke(e)=="symbol"?e:e+""}function _s(r,e){if(Ke(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ke(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var ks=(function(){function r(){Bt(this,r)}return Ht(r,[{key:"createRequest",value:function(t,i){return new Ss(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),Ss=(function(){function r(e,t){Bt(this,r),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return Ht(r,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,s){t._xhr.onload=function(){o(new $s(t._xhr))},t._xhr.onerror=function(n){s(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),$s=(function(){function r(e){Bt(this,r),this._xhr=e}return Ht(r,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Ye(r){"@babel/helpers - typeof";return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ye(r)}function Cs(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Es(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Us(i.key),i)}}function Ps(r,e,t){return e&&Es(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Us(r){var e=Rs(r,"string");return Ye(e)=="symbol"?e:e+""}function Rs(r,e){if(Ye(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ye(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Ft=!1;try{Ft="localStorage"in window;var _t="tusSupport",$i=localStorage.getItem(_t);localStorage.setItem(_t,$i),$i===null&&localStorage.removeItem(_t)}catch(r){if(r.code===r.SECURITY_ERR||r.code===r.QUOTA_EXCEEDED_ERR)Ft=!1;else throw r}var Ts=Ft,Fs=(function(){function r(){Cs(this,r)}return Ps(r,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var o=Math.round(Math.random()*1e12),s="tus::".concat(t,"::").concat(o);return localStorage.setItem(s,JSON.stringify(i)),Promise.resolve(s)}},{key:"_findEntries",value:function(t){for(var i=[],o=0;o<localStorage.length;o++){var s=localStorage.key(o);if(s.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(s));n.urlStorageKey=s,i.push(n)}catch{}}return i}}])})();function Fe(r){"@babel/helpers - typeof";return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fe(r)}function Is(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Os(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,gr(i.key),i)}}function zs(r,e,t){return t&&Os(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function As(r,e,t){return e=ct(e),Ds(r,mr()?Reflect.construct(e,t||[],ct(r).constructor):e.apply(r,t))}function Ds(r,e){if(e&&(Fe(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ls(r)}function Ls(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function mr(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mr=function(){return!!r})()}function ct(r){return ct=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ct(r)}function Ms(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&It(r,e)}function It(r,e){return It=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},It(r,e)}function Ci(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Ue(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ci(Object(t),!0).forEach(function(i){js(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Ci(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function js(r,e,t){return e=gr(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function gr(r){var e=Bs(r,"string");return Fe(e)=="symbol"?e:e+""}function Bs(r,e){if(Fe(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Fe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var Ei=Ue(Ue({},lt.defaultOptions),{},{httpStack:new ks,fileReader:new gs,urlStorage:Ts?new Fs:new bo,fingerprint:vs}),Hs=(function(r){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Is(this,e),i=Ue(Ue({},Ei),i),As(this,e,[t,i])}return Ms(e,r),zs(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=Ue(Ue({},Ei),o),lt.terminate(i,o)}}])})(lt);const Ns=10*1024*1024,qs=5*1024*1024,Vs="https://eu-on-24001.connector.filerobot.com/files",Ks="https://eu-on-24001.connector.filerobot.com/json";function Ys(r,e){if(!e||!r.file)return!1;const t=e.sizeThreshold??Ns;return r.size>=t}function Gs(r,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),o=t.endpoint||Vs,s=t.jsonBase||Ks,n=t.chunkSize??qs,a=t.resumable!==!1,c=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],p=i.split("/").pop()||"";let b=!1,f=!1,k=!1;const C={name:r.name,type:r.type,"filerobot-folder":e.folder};N.hasProductData(r.product)&&(C.product=JSON.stringify(N.compactProduct(r.product)));const _=async()=>`tus-${r.id}-${o}`,E=new Hs(r.file,{endpoint:o,chunkSize:n,retryDelays:d,parallelUploads:c,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:C,fingerprint:_,onBeforeRequest(m){const U=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[S,T]of Object.entries(U))m.setHeader(S,T);m.setHeader("X-Filerobot-Token",p)},onUploadUrlAvailable(){E.url&&e.onUploadUrlAvailable&&!k&&(k=!0,e.onUploadUrlAvailable(E.url))},onProgress(m,U){!f&&!b&&e.onProgress(m,U)},onSuccess(){var S;if(f)return;y();const m=E.url||"",U=(S=m.match(/files\/([^/?]+)/))==null?void 0:S[1];U?Xs(s,U,r.size).then(T=>{f||e.onComplete(Xe(T)?Dt(T,r):T)}).catch(T=>{f||e.onError(T)}):e.onComplete({status:"success",file:{uuid:"",name:r.name,extension:r.name.split(".").pop()||"",type:r.type,size:r.size,url:{public:m,cdn:m},meta:r.meta,tags:r.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(m){f||(y(),Ws(m)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(m instanceof Error?m:new Error(String(m))))},onShouldRetry(m,U,S){var F;const T=(F=m.originalResponse)==null?void 0:F.getStatus();return T===429?!0:!(T&&T>400&&T<500&&T!==409)}});let I=null,w=null;typeof window<"u"&&(I=()=>{var m;!b&&!f&&(b=!0,E.abort(!1),(m=e.onPause)==null||m.call(e))},w=()=>{var m;b&&!f&&(b=!1,E.start(),(m=e.onResume)==null||m.call(e))},window.addEventListener("offline",I),window.addEventListener("online",w));const y=()=>{I&&window.removeEventListener("offline",I),w&&window.removeEventListener("online",w)},g=()=>{try{E.start()}catch(m){y(),e.onError(m instanceof Error?m:new Error(String(m)))}};return a?E.findPreviousUploads().then(m=>{m.length>0&&!f&&E.resumeFromPreviousUpload(m[0]),f||g()}):g(),{abort(){f=!0,b=!1,y(),E.abort(!0)},pause(){!b&&!f&&(b=!0,E.abort(!1))},resume(){b&&!f&&(b=!1,E.start())},isPaused(){return b}}}function Ws(r){var e;if(r instanceof Le){const t=(e=r.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:r.originalResponse==null&&r.causingError!=null}return!1}async function Xs(r,e,t){const i=`${r.replace(/\/+$/,"")}/${e}`,o=t>1e8?13e3:6e3,s=3;for(let n=0;n<=s;n++){n>0&&await new Promise(d=>setTimeout(d,o));const a=await fetch(i);if(a.status===404&&n<s)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const c=await a.json();if(Xe(c))return c;if(c.file)return{status:"success",file:c.file};if(c.status==="success")return c;if(!(n<s))throw new Error(at(c,"File record not available after upload"))}throw new Error("File record not available after upload")}const st="_sfxRelativePath",Pi=8,Zs=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function Js(r){return r?r.startsWith(".")?!0:Zs.has(r):!1}function ft(r,e){if(e){try{Object.defineProperty(r,st,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(r,st,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{r[st]=e}}}function vr(r){const e=r[st];if(typeof e=="string"&&e)return e;const t=r.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=r.relativePath;return typeof i=="string"?i:""}function Qs(r){if(!r)return"";const e=r.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function en(r,e){const t=(r??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:r??""}async function br(r){var n;const e=r.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(r.files??[]),hadDirectories:!1};const i=[];let o=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const c=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);c&&(c.isDirectory&&(o=!0),i.push(c))}if(i.length===0)return{files:Array.from(r.files??[]),hadDirectories:!1};const s=[];return await xr(i,"",s),{files:s,hadDirectories:o}}async function xr(r,e,t){for(let i=0;i<r.length;i+=Pi){const o=r.slice(i,i+Pi);await Promise.all(o.map(s=>tn(s,e,t)))}}async function tn(r,e,t){try{if(r.isFile){const i=await rn(r);if(!i)return;const o=e?`${e}/${i.name}`:i.name;ft(i,o),t.push(i);return}if(r.isDirectory){if(Js(r.name))return;const i=e?`${e}/${r.name}`:r.name,o=await on(r);await xr(o,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(r==null?void 0:r.name)??r,i)}}function rn(r){return new Promise(e=>{r.file(t=>e(t),()=>e(null))})}function on(r){return new Promise(e=>{const t=r.createReader(),i=[],o=()=>{t.readEntries(s=>{if(s.length===0){e(i);return}i.push(...s),o()},s=>{console.warn("[sfx-uploader] directory read failed for",r==null?void 0:r.name,s),e(i)})};o()})}class yr{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let o=!1;for(const[s,n]of this.pendingProgress){const a=i.get(s);a&&a.status==="uploading"&&(i.set(s,{...a,...n}),o=!0)}this.pendingProgress.clear(),o&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(X(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(X(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&X(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),X(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),X(this.store,e,{status:"uploading"})):X(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Ui(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),X(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Ui(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),X(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,o=t-i;if(o<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,c)=>a.retryCount!==c.retryCount?c.retryCount-a.retryCount:a.addedAt-c.addedAt).slice(0,o);for(const a of n){const c=this.pausedUploads.get(a.id);c?(this.pausedUploads.delete(a.id),c.resume(),this.activeUploads.set(a.id,c),X(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var f,k;this.pendingProgress.delete(e.id);const t=(k=(f=this.config).resolveUploadParams)==null?void 0:k.call(f,e),i=!!t&&Object.keys(t).length>0,o=!i&&!e.remoteInfo&&!e.remoteUrl&&Ys(e,this.config.tusConfig);X(this.store,e.id,{status:"uploading",error:null,isTus:o});let s=0,n=Date.now(),a=0;const c=en(this.store.getState().targetFolder,e.relativeFolder),d={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:c,extraParams:i?t:void 0,onComplete:C=>this.handleComplete(e.id,C),onError:C=>this.handleError(e.id,C)},p=(C,_)=>{const E=Date.now(),I=(E-n)/1e3;if(I>0){const y=(C-s)/I;a=a===0?y:.3*y+.7*a}s=C,n=E;const w=_>0?Math.min(C/_*100,100):0;this.pendingProgress.set(e.id,{progress:w,bytesUploaded:C,speed:a}),this.scheduleProgressFlush()};let b;if(e.remoteInfo)b=io(e,{...d,onProgress:p});else if(e.remoteUrl){if(!this.config.companionUrl){X(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}b=ro(e,{...d,onProgress:p,companionUrl:this.config.companionUrl,onMeta:C=>{X(this.store,e.id,{size:C.size,type:C.type||e.type})}})}else if(o){const C=Gs(e,{...d,onProgress:p,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:_=>{X(this.store,e.id,{tusUploadUrl:_})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,C),this.pendingProgress.delete(e.id),X(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,C),X(this.store,e.id,{status:"uploading"})}});b=C}else b=Vr(e,{...d,onProgress:p});this.activeUploads.set(e.id,b)}handleComplete(e,t){var b,f,k,C,_,E,I,w,y,g,m;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),o=((b=i==null?void 0:i.previewUrl)==null?void 0:b.startsWith("blob:"))??!1,s=((k=(f=t.file)==null?void 0:f.url)==null?void 0:k.cdn)??((_=(C=t.file)==null?void 0:C.url)==null?void 0:_.cdn_permalink)??((I=(E=t.file)==null?void 0:E.url)==null?void 0:I.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:Xe(t)};if(i&&s&&i.type.startsWith("image/")&&!o){const U=((g=(y=this.config).transformPreviewUrl)==null?void 0:g.call(y,s,(w=t.file)==null?void 0:w.url))??s;U&&(n.previewUrl=U)}const a=(m=t.file)==null?void 0:m.size,c=typeof a=="number"?a:a==null?void 0:a.bytes;typeof c=="number"&&(n.size=c);const d=this.store.getState().files,p=d.get(e);if(p){const U=new Map(d);U.set(e,{...p,...n}),this.store.setState({files:U,...this.computeTotals(U)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,s=i.retryCount+1;if(s<=o.maxRetries){const n=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);X(this.store,e,{status:"retrying",error:t.message,retryCount:s});const a=setTimeout(()=>{this.retryTimers.delete(e),X(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else X(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,o=0,s=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),s+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(o+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:n>0?Math.min(s/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Ui(r){return r==="queued"||r==="uploading"||r==="retrying"||r==="paused"}const sn=3e4,nn=2,an=400;function ln(r){return r===404||r===408||r===429||r>=500}const cn=r=>new Promise(e=>setTimeout(e,r));function mt(r,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${r}`}async function wr(r,e,t,i={}){const o=`${mt(r,t)}/key/${encodeURIComponent(e)}`,s=i.retries??nn,n=i.retryDelayMs??an;let a=new Error("SASS key exchange failed");for(let c=0;c<=s;c++){c>0&&await cn(n*c);const d=new AbortController,p=setTimeout(()=>d.abort(),sn);try{const b=await fetch(o,{signal:d.signal,cache:"no-store"});if(clearTimeout(p),!b.ok){if(a=new Error(`SASS key exchange failed (HTTP ${b.status})`),ln(b.status)&&c<s)continue;throw a}const f=await b.json();if(f.status==="error")throw new Error(`SASS key exchange failed: ${f.msg||"Unknown error"}`);return f.key}catch(b){if(clearTimeout(p),b instanceof DOMException&&b.name==="AbortError")throw new Error("SASS key exchange timed out");if(b instanceof TypeError&&c<s){a=b;continue}throw b}}throw a}function dt(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}async function _r(r,e){const t=mt(r.container,e);if(r.mode==="security-template"){const i=await wr(r.container,r.securityTemplateId,e);return{apiBase:t,headers:dt(r,i),sassKey:i}}return{apiBase:t,headers:dt(r)}}const dn="https://ai.scaleflex.com",Ri=300,pn=.85,hn=3e4;function Ti(r){return r==="low"?.6:r==="high"?.85:.75}async function un(r,e){var o,s,n;if(r.file)return r.file;const t=r.previewUrl||((n=(s=(o=r.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn)||r.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function fn(r){return`${(r||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function mn(r){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(r);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,o=URL.createObjectURL(r);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(o)})},i.onerror=()=>{URL.revokeObjectURL(o),t(new Error("Image decode failed"))},i.src=o})}async function gn(r){const e=await mn(r);try{const t=e.width>Ri?Ri/e.width:1,i=Math.max(1,Math.round(e.width*t)),o=Math.max(1,Math.round(e.height*t)),s=document.createElement("canvas");s.width=i,s.height=o;const n=s.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,o),await new Promise((a,c)=>{s.toBlob(d=>d?a(d):c(new Error("Canvas toBlob failed")),"image/jpeg",pn)})}finally{e.close()}}async function Fi(r,e){var a,c;const t=new AbortController,i=setTimeout(()=>t.abort(),hn),o=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",o);const s=t.signal,n=()=>{if(s.aborted)throw new DOMException("Aborted","AbortError")};try{n();const d=await un(r,s);n();const p=await gn(d);n();const f=`${(e.endpoint||dn).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,k=new FormData;k.append("file",p,fn(r.name));const C=await fetch(f,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:k,signal:s});if(!C.ok)throw new Error(`Similarity check failed (HTTP ${C.status})`);const _=await C.json();if(_.status==="error")throw new Error(`Similarity check failed: ${_.msg||"Unknown error"}`);return(_.similar_assets??[]).map(([E,I,w])=>({uuid:E,score:I,url:w}))}finally{clearTimeout(i),(c=e.signal)==null||c.removeEventListener("abort",o)}}const pt="sfx-uploader:last-upload:",kr=1;function vn(r){var s,n,a,c,d,p,b,f,k;const{file:e,previewUrl:t,...i}=r;let o=null;return r.status==="complete"&&(r.previewUrl&&!r.previewUrl.startsWith("blob:")?o=r.previewUrl:o=((a=(n=(s=r.response)==null?void 0:s.file)==null?void 0:n.url)==null?void 0:a.permalink)??((p=(d=(c=r.response)==null?void 0:c.file)==null?void 0:d.url)==null?void 0:p.cdn_permalink)??((k=(f=(b=r.response)==null?void 0:b.file)==null?void 0:f.url)==null?void 0:k.cdn)??null),{...i,previewUrl:o}}function bn(r){try{const e=sessionStorage.getItem(pt+r);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==kr?null:t}catch{return null}}function xn(r,e){try{sessionStorage.setItem(pt+r,JSON.stringify(e))}catch{}}const Ae={save(r,e){if(e.length===0){this.clear(r);return}const t={__schemaVersion:kr,savedAt:Date.now(),files:e.map(vn)};xn(r,t)},load(r){const e=bn(r);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(r){try{return sessionStorage.getItem(pt+r)!=null}catch{return!1}},clear(r){try{sessionStorage.removeItem(pt+r)}catch{}}},D={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let yn=0;function $e(){return`file-${Date.now()}-${++yn}`}function Pe(r){if(!Number.isFinite(r)||r<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(r)/Math.log(1024)),e.length-1),i=r/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function Ii(r){if(!isFinite(r)||r<=0)return"0s";const e=Math.round(r);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const o=Math.floor(t/60),s=t%60;return s>0?`${o}h ${s}m`:`${o}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function se(r){var t;const e=((t=r.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return r.type.startsWith("image/")?"image":r.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":r.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":r.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function wn(r){const e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toUpperCase():""}const _n=new Set([".ds_store","thumbs.db","desktop.ini"]);function kt(r){const e=(r.split(/[\\/]/).pop()??r).toLowerCase();return e.startsWith(".ds_store")?!0:_n.has(e)}const kn={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Oi(r){var t;const e=((t=r.split(".").pop())==null?void 0:t.toLowerCase())??"";return kn[e]||""}function pe(r){return r==="image/heic"||r==="image/heif"}function Sn(r){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(r);let o=!1;const s=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(c=>{o||(o=!0,e(c?URL.createObjectURL(c):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),t.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function $n(r){return(r==null?void 0:r.code)==="max-files"}function St(r,e,t){var i,o;if(e.maxFileSize!=null&&r.size>0&&r.size>e.maxFileSize){const s=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:xe("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:s})}}if(e.maxTotalFilesSize!=null&&r.size>0){let s=r.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(s+=n.size);if(s>e.maxTotalFilesSize)return{code:"max-total-size",message:xe("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let s=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return{code:"max-files",message:xe("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,n="."+(((i=r.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!s.some(c=>c.startsWith(".")?n===c.toLowerCase():c.endsWith("/*")?r.type.startsWith(c.slice(0,-1)):r.type===c))return{code:"type-not-allowed",message:xe("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,n="."+(((o=r.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(s.some(c=>c.startsWith(".")?n===c.toLowerCase():c.endsWith("/*")?r.type.startsWith(c.slice(0,-1)):r.type===c))return{code:"type-blocked",message:xe("fileTypeBlocked","File type is blocked")}}return null}function zi(r){return r.allowedFileTypes?r.allowedFileTypes.join(","):""}const Ai={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function Sr(r){return r.filter(e=>e in Ai).map(e=>Ai[e])}function ue(r){return r.brandStyle?l.html`<span
    class=${Or.classMap({"brand-ico":!0,"brand-ico--transparent":r.brandStyle.background==="transparent"})}
    ${K.cspStyle(r.brandStyle)}
    >${ii.unsafeHTML(r.brandHtml)}</span
  >`:ii.unsafeHTML(r.brandHtml)}var Cn=Object.defineProperty,$r=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Cn(e,t,o),o};const En='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Pn='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Un='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Rn='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Re=[{id:"device",labelKey:"myDevice",label:"My Device",icon:En,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:Pn,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:Un,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:Rn,iconColor:"#ea580c"}],Vt=class Vt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.sources=Re}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return l.html`
      ${this.sources.map(e=>l.html`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ue(e):l.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${he.unsafeSVG(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Vt.styles=l.css`
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
  `;let Ge=Vt;$r([x.property({attribute:!1})],Ge.prototype,"t");$r([x.property({type:Array})],Ge.prototype,"sources");function Cr(r){let e=r;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Tn=Object.defineProperty,ie=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Tn(e,t,o),o};const Di=3,Ot=new CSSStyleSheet;Ot.replaceSync(`
  [data-sfx-more-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-more-dropdown] .sfx-more-dropdown { position:fixed; background:#fff; border-radius:12px; box-shadow:0 12px 40px rgba(0,0,0,0.14),0 2px 8px rgba(0,0,0,0.06); border:1px solid #e8edf5; padding:6px; min-width:210px; max-height:340px; overflow-y:auto; z-index:99999; opacity:0; visibility:hidden; pointer-events:none; transition:opacity .18s ease,visibility .18s ease,transform .18s ease; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
  [data-sfx-more-dropdown] .sfx-more-dropdown.open { opacity:1; visibility:visible; pointer-events:all; }
  [data-sfx-more-dropdown] .sfx-more-item { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:6px; border:none; background:none; width:100%; font-size:13px; font-weight:500; color:#1e293b; cursor:pointer; transition:background .15s; font-family:inherit; white-space:nowrap; }
  [data-sfx-more-dropdown] .sfx-more-item:hover { background:#f5f7fa; }
  [data-sfx-more-dropdown] .sfx-more-item-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-more-dropdown] .sfx-more-item-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; }
  [data-sfx-more-dropdown] .sfx-more-item .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-more-dropdown] .sfx-more-item .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
  [data-sfx-more-dropdown] .sfx-more-item .canva-ico { width:22px; height:22px; }
  [data-sfx-more-dropdown] .sfx-more-item .canva-ico svg { width:22px; height:22px; }
`);var fe;const Q=(fe=class extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Di,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&br(t).then(({files:i,hadDirectories:o})=>{i.length>0?this._emitFiles(i,o):o&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&ft(o,s)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var o;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const i=[];for(const s of t)if(s.kind==="file"){const n=s.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(e="files"){var t,i;if(e==="folder"&&this.directory&&this.multi){(t=this.folderInput)==null||t.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Cr(this).appendChild(this._portalContainer),this._injectDropdownStyles()),l.render(l.html`<div class="sfx-more-dropdown open">
          ${e.map(t=>l.html`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?ue(t):t.iconColor?l.html`<svg viewBox="0 0 24 24" ${K.cspStyle({color:t.iconColor})}>
                          ${he.unsafeSVG(t.icon)}
                        </svg>`:l.svg`<svg viewBox="0 0 24 24">${he.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(l.render(l.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Ot)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Ot]))}_positionDropdown(){var b,f;const e=(b=this.shadowRoot)==null?void 0:b.querySelector(".more-wrap > button"),t=(f=this._portalContainer)==null?void 0:f.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=8,s=t.scrollHeight,n=t.offsetWidth,a=i.top,c=window.innerHeight-i.bottom;a>=s+o||a>c?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=Di}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const i=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=fe._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(l.render(l.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return l.html`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?ue(e):l.html`<span class="pill-ico" ${K.cspStyle(e.iconColor?{color:e.iconColor}:null)}>
              ${l.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${he.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return l.html`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?l.html`<span class="card-ico">${ue(e)}</span>`:l.html`<span class="card-ico" ${K.cspStyle(e.iconColor?{color:e.iconColor}:null)}>
              ${l.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${he.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return l.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="src-card" @click=${e=>this._toggleMore(e)}>
          <span class="card-ico muted">
            <svg class="fill-icon" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">${this.t("more","More")}</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return l.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return l.html`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role="button"
          tabindex="0"
          aria-label=${this.t("dropFilesHere","Drop files here or click to browse")}
          @click=${this._onClick}
          @keydown=${this._onKeyDown}
        >
          <div class="dz-glow"></div>
          <div class="rings">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="core">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>

          ${!this.compact&&this.directory&&this.multi?l.html`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${o=>{o.stopPropagation(),this.browse("folder")}}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:l.html`<div class="title">
                ${this.t("dragAndDrop","Drag & Drop or click to")}
                <span>${this.t("browse","browse")}</span>
              </div>`}
          ${!this.compact&&this.sources.length>0?l.html`
                <div class="import-divider">
                  <span>${this.t("orImportFrom","or import from")}</span>
                </div>
                ${this.sourcesLayout==="cards"?l.html`
                      <div class="sources-cards">
                        ${t.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():l.nothing}
                      </div>
                    `:l.html`
                      <div class="sources-grid">
                        ${t.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():l.nothing}
                      </div>
                    `}
              `:l.nothing}
          ${this.compact&&this.sources.length>0?l.html`
                <div class="sources-row">
                  ${this.sources.map(o=>l.html`
                      <button
                        class="src-ico"
                        ${K.cspStyle(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${s=>{s.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?ue(o):l.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${he.unsafeSVG(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:l.nothing}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||l.nothing}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?l.html`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:l.nothing}
      </div>
    `}},fe.styles=l.css`
    :host {
      display: flex;
      flex-shrink: 1;
      flex: 1;
      min-height: 0;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
    }

    :host([compact]) {
      flex: 0 0 auto;
    }

    .drop-zone {
      border: none;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: auto;
      transition: background 0.22s;
      flex: 1;
    }

    :host([mode='inline']) .drop-zone {
      height: 100%;
    }

    /* Inner clickable content area — only this triggers file browse on click */
    .dz-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      padding: 50px 40px;
      border-radius: 12px;
      user-select: none;
      background: var(--sfx-up-bg, #fff);
      position: relative;
      outline: none;
      transition: background 0.22s;
    }

    .dz-content:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over .dz-content {
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
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
      animation: compactIn 0.3s ease both;
    }

    .drop-zone.compact .dz-content {
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      background: none;
      border-radius: 0;
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

    /* Legacy radial glow element — kept hidden for back-compat.
       The real glow is now drawn as a pseudo-element of .rings so
       it is always centered on the cloud icon regardless of the
       drop-zone's size (previously .dz-glow was pinned to top: 20px
       which misaligned when the drop-zone stretched vertically). */
    .dz-glow {
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
      overflow: visible;
    }

    .drop-zone:not(.compact) .rings::before {
      content: '';
      position: absolute;
      width: 260px;
      height: 260px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(
        circle at center,
        rgba(37, 99, 235, 0.04) 0%,
        rgba(37, 99, 235, 0.02) 40%,
        transparent 70%
      );
      border-radius: 50%;
      pointer-events: none;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
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

    .dz-content:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      /* Match the icon's 24px bottom margin so the title has equal breathing
         room above (icon → title) and below (title → divider). */
      margin-bottom: 24px;
      transition:
        font-size 0.3s,
        margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    /* "folder" link merged into the title — styled like the "browse" span. */
    .title button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }
    .title button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    .folder-pick {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
      transition: opacity 0.15s;
    }
    .folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }
    .compact .folder-pick {
      display: none;
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
      height: 38px;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
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
      max-width: 760px;
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
      max-width: 140px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 8px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 140px;
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

    .src-card .card-ico.muted {
      color: var(--sfx-up-text-muted, #94a3b8);
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
      font-size: 10px;
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
    .src-card .brand-ico--transparent {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico--transparent svg {
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
      background: #fff;
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
      box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.14),
        0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition:
        opacity 0.18s ease,
        visibility 0.18s ease,
        transform 0.18s ease;
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
      transition:
        opacity 0.15s,
        visibility 0.15s;
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
      .title {
        font-size: 16px;
      }
      .rings {
        width: 90px;
        height: 90px;
      }
      .core {
        width: 44px;
        height: 44px;
      }
      .core svg {
        width: 20px;
        height: 20px;
      }
    }

    /* Inline mode on a TRULY wide host (e.g. full-screen) — frame the empty
       drop-zone as a bounded bordered card so it doesn't float lost in a
       sea of whitespace. The data-wide attribute is set imperatively by a
       ResizeObserver in the component (see _onHostResize). Threshold is
       1200px of host width, which only the full-screen example reliably
       hits — embedded inline uploaders (Home demo, Sources Layout, plain
       inline) are all narrower and stay untouched. Modal mode is always
       excluded via the [mode="inline"] selector. */
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) {
      flex: 1 1 auto;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      align-self: center;
      margin-inline: auto;
      padding: 64px 48px;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 24px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .rings {
      width: 140px;
      height: 140px;
      margin-bottom: 28px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .core {
      width: 68px;
      height: 68px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .core svg {
      width: 30px;
      height: 30px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .title {
      font-size: 22px;
      margin-bottom: 8px;
    }
    :host([mode='inline'][data-wide]) .drop-zone:not(.compact) .subtitle {
      font-size: 15px;
      margin-bottom: 28px;
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

    /* Mobile responsive — placed at the END of the stylesheet so these
       overrides win the cascade against the base .src-pill, .title,
       .drop-zone rules declared earlier above. */
    @media (max-width: 768px) {
      :host {
        max-width: 100vw;
      }
      .drop-zone:not(.compact) {
        padding: 32px 16px;
      }
      .import-divider {
        max-width: 100%;
        margin-bottom: 14px;
      }
      .sources-grid {
        max-width: 100%;
        min-height: 0;
      }
      .src-pill {
        padding: 9px 14px;
        font-size: 13px;
      }
      .title {
        font-size: 18px;
      }
    }

    /* Galaxy Z Fold / Samsung S8+ / iPhone SE — extra narrow. */
    @media (max-width: 400px) {
      .drop-zone:not(.compact) {
        padding: 24px 12px;
      }
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `,fe._WIDE_THRESHOLD_PX=1200,fe);ie([x.property({attribute:!1})],Q.prototype,"t");ie([x.property({type:Boolean,reflect:!0})],Q.prototype,"compact");ie([x.property({type:Boolean,attribute:"external-drag-over"})],Q.prototype,"externalDragOver");ie([x.property({type:String})],Q.prototype,"accept");ie([x.property({type:Boolean})],Q.prototype,"multi");ie([x.property({type:Boolean})],Q.prototype,"directory");ie([x.property({type:Array})],Q.prototype,"sources");ie([x.property({type:String,attribute:"sources-layout"})],Q.prototype,"sourcesLayout");ie([x.property({type:String,reflect:!0})],Q.prototype,"mode");ie([x.state()],Q.prototype,"_dragOver");ie([x.state()],Q.prototype,"_moreOpen");ie([x.state()],Q.prototype,"_visiblePills");ie([x.query(".ripple")],Q.prototype,"_rippleEl");ie([x.query("input[data-sfx-dz-files]")],Q.prototype,"fileInput");ie([x.query("input[data-sfx-dz-folder]")],Q.prototype,"folderInput");let Fn=Q;const Kt=class Kt extends l.LitElement{constructor(){super(...arguments),this._i18nController=new Lr(this)}render(){return l.html`
      <div class="line"></div>
      <div class="label">${xe("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Kt.styles=l.css`
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
  `;let zt=Kt;var In=Object.defineProperty,G=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&In(e,t,o),o};const At=new CSSStyleSheet;At.replaceSync(`
  [data-sfx-tile-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; pointer-events:all; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item { display:flex; align-items:center; gap:10px; width:100%; padding:8px 12px; border:none; background:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; transition:background .15s; font-family:inherit; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item:hover { background:#f5f7fa; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg.fill-icon { fill:currentColor; stroke:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico { width:22px; height:22px; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico svg { width:22px; height:22px; }
  @keyframes sfxTileDropIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }
`);const Yt=class Yt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&ft(o,s)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Cr(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),l.render(l.html`<div class="sfx-tile-dropdown">
        ${e.map(t=>l.html`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${K.cspStyle(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?ue(t):l.svg`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${he.unsafeSVG(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var b;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(b=this._portalContainer)==null?void 0:b.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=6,s=t.scrollHeight,n=t.offsetWidth,a=i.top,c=window.innerHeight-i.bottom;a>=s+o||a>c?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_closePortal(){this._portalContainer&&(l.render(l.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(At)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,At]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return l.html`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
          <div class="drop-tile-rings">
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-core">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">
            ${this.t("dropOrClickTo","Drop or click to")}
            <span>${this.t("browse","browse")}</span>
          </div>
          ${this.directory&&this.multi?l.html`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:l.nothing}
          ${t.length>0?l.html`
                <div class="drop-tile-sources">
                  ${t.map(o=>l.html`
                      <button
                        class="drop-tile-src"
                        ${K.cspStyle(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        title=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${s=>this._onSourceClick(s,o)}
                      >
                        ${o.brandHtml?ue(o):l.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${he.unsafeSVG(o.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?l.html`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            @click=${o=>this._toggleMore(o)}
                          >
                            ···
                          </button>
                        </div>
                      `:l.nothing}
                </div>
              `:l.nothing}
        </div>
        <input
          data-sfx-fl-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||l.nothing}
          @change=${this._onFileInput}
        />
        ${this.directory&&this.multi?l.html`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:l.nothing}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(o=>o.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(s=>this.searchResults.has(s)).length,i=e?Math.round(t/e*100):0,o=e>0&&t===e;return l.html`
      ${e>1&&!this.previewOpen?l.html`
            <div class="similar-banner search">
              ${o?l.html`<span class="search-done-ico"
                    ><svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" /></svg
                  ></span>`:l.html`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b
                  >${o?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${K.cspStyle({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${o?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:l.nothing}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():l.nothing}
        ${De.repeat(this.files,s=>s.id,(s,n)=>{const a=this.searchResults.get(s.id);return l.html`<sfx-file-item
              .t=${this.t}
              .store=${this.store}
              .fileId=${s.id}
              .file=${s}
              .mode=${this.mode}
              .allowRename=${this.allowRename}
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
              .showCheckSimilar=${this.showCheckSimilar}
              .selectMode=${this.selectMode}
              .isSelected=${this.selectedIds.has(s.id)}
              .selectionActive=${this.selectedIds.size>0}
              .selectionFull=${this.selectionFull}
              .previewOpen=${this.previewOpen}
              .similarStatus=${this._statusFor(s.id)}
              .similarCount=${(a==null?void 0:a.length)??-1}
              .similarResults=${a??[]}
              ${K.cspStyle({"--tile-index":String(n)})}
            ></sfx-file-item>`})}
      </div>
    `}};Yt.styles=l.css`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
      scrollbar-gutter: stable;
    }

    :host::-webkit-scrollbar {
      width: var(--sfx-scrollbar-w, 12px);
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      border-left: var(--sfx-scrollbar-inset-left, 3px) solid transparent;
      border-right: var(--sfx-scrollbar-inset-right, 3px) solid transparent;
      background-clip: padding-box;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 224px), 1fr));
      gap: 12px;
      padding: 4px var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    /* Instruction / progress banner. Sticky to the top of the scrolling grid so
       it stays reachable (Select all / Check / Cancel / progress) when there are
       many assets and the list is long. Two-layer background so the banner
       stays fully opaque even when the host project sets --accent to a
       translucent colour: solid bg underneath, primary tint on top. z-index
       must clear in-tile overlays (max z-index inside a tile is 11). */
    .similar-banner {
      position: sticky;
      top: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 var(--sfx-grid-pad-r, 8px) 12px var(--sfx-grid-pad-l, 16px);
      padding: 8px 16px;
      border-radius: 10px;
      background-color: var(--sfx-up-bg, #fff);
      background-image: linear-gradient(
        var(--sfx-up-primary-bg, #eff6ff),
        var(--sfx-up-primary-bg, #eff6ff)
      );
      border: 1px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .similar-banner-ico {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .similar-banner-ico svg {
      width: 16px;
      height: 16px;
    }

    .similar-banner-txt {
      flex: 1;
      min-width: 0;
    }
    .similar-banner-txt b {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #37414b;
    }
    .similar-banner-txt span {
      font-size: 12px;
      font-weight: 400;
      color: #5b6e82;
    }

    .similar-select-count {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 24px;
      padding: 0 8px;
      border-radius: 999px;
      background: var(--sfx-up-surface, #eef2ff);
      color: var(--sfx-up-primary, #2563eb);
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
    }
    .similar-select-count.full {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .similar-select-all {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
    }

    .similar-select-all input {
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      margin: 0;
      border: none;
      border-radius: 6px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: inset 0 0 0 1.5px #ccd6de;
      cursor: pointer;
      position: relative;
      top: 1px;
      transition:
        background-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .similar-select-all input:checked {
      background: var(--sfx-up-primary, #2563eb);
      box-shadow: inset 0 0 0 1.5px var(--sfx-up-primary, #2563eb);
    }

    .similar-select-all input:checked::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 3.5px;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* --- Similarity search progress banner --- */
    .search-ring {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      border-top-color: var(--sfx-up-primary, #2563eb);
      animation: simBannerSpin 0.7s linear infinite;
    }

    @keyframes simBannerSpin {
      to {
        transform: rotate(360deg);
      }
    }

    .search-done-ico {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--sfx-up-success, #16a34a);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .search-done-ico svg {
      width: 14px;
      height: 14px;
    }

    .search-bar {
      height: 6px;
      border-radius: 3px;
      background: var(--sfx-up-bg, #fff);
      overflow: hidden;
      margin-top: 7px;
    }
    .search-bar-fill {
      height: 100%;
      border-radius: 3px;
      background: var(--sfx-up-primary, #2563eb);
      transition: width 0.3s ease;
    }

    .search-cancel {
      flex: 0 0 auto;
      height: 32px;
      padding: 0 14px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-secondary, #475569);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .search-cancel:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    /* Mobile: 2 cols at <=768, 1 col at <=440. Use viewport @media not
       container queries — container queries fire on local file-list width
       which is narrow in desktop preview mode, breaking desktop layout. */
    @media (max-width: 768px) {
      :host {
        scrollbar-gutter: auto;
        padding-bottom: 0;
      }
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 4px 12px 16px;
      }
    }

    @media (max-width: 440px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }

    /* --- Drop tile (first card in grid) — mirrors file-item structure
       so its natural height matches a file card at any column width */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.18s ease;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover,
    :host([drag-active]) .drop-tile {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    /* Preview area — flex:1 absorbs remaining row height so drop-tile total
       always matches the file-card height (info bar handles its own size).
       container-type lets the inner rings/icon scale with tile width via cqi.
       Padding-block gives the rings breathing room so they never hug the
       top edge even when the cell is short. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 14px 8px 6px;
      box-sizing: border-box;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — natural height stays close to the file-card .info area.
       Bottom padding is trimmed so the preview has more room for the rings
       when the cell is short. */
    .drop-tile-info {
      padding: 8px 12px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    /* Rings scale with tile width (cqi) and shrink if the preview area is
       too short — that's why we drop flex-shrink and use max-height. */
    .drop-tile-rings {
      width: clamp(40px, 22cqi, 100px);
      height: clamp(40px, 22cqi, 100px);
      max-height: 100%;
      aspect-ratio: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: tileSpin 20s linear infinite;
    }

    .drop-tile-ring:nth-child(2) {
      inset: 8px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    @keyframes tileSpin {
      to {
        transform: rotate(360deg);
      }
    }

    .drop-tile-core {
      width: clamp(32px, 14cqi, 52px);
      height: clamp(32px, 14cqi, 52px);
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
      transition: all 0.2s ease;
    }

    .drop-tile:hover .drop-tile-core {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    .drop-tile-core svg {
      width: clamp(16px, 7cqi, 26px);
      height: clamp(16px, 7cqi, 26px);
    }

    .drop-tile-text {
      font-size: clamp(12px, 3.5cqi, 15px);
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.2;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-folder-pick {
      font-size: clamp(11px, 3cqi, 13px);
      color: var(--sfx-up-text-muted, #94a3b8);
      text-align: center;
      margin-top: 2px;
    }
    .drop-tile-folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color 0.15s;
    }
    .drop-tile-folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    .drop-tile-sources {
      display: flex;
      gap: clamp(3px, 1.2cqi, 8px);
      margin-top: 8px;
    }

    .drop-tile-src {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .drop-tile-src:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .drop-tile-src svg {
      width: clamp(20px, 6cqi, 24px);
      height: clamp(20px, 6cqi, 24px);
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .drop-tile-src svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .drop-tile-src .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-src .brand-ico svg {
      width: 20px;
      height: 20px;
      stroke: none;
      stroke-width: 0;
    }

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .drop-tile-more:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .more-dropdown {
      position: absolute;
      top: 36px;
      right: 0;
      background: #fff;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 10;
      min-width: 180px;
      animation: dropIn 0.15s ease;
    }

    @keyframes dropIn {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .more-dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      transition: background 0.15s;
      font-family: inherit;
    }

    .more-dropdown-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-dropdown-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-dropdown-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .more-dropdown-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .more-dropdown-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .more-dropdown-ico .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .more-dropdown-ico .canva-ico {
      width: 22px;
      height: 22px;
    }

    .more-dropdown-ico .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    input[type='file'] {
      display: none;
    }

    /* Single full-width drop-tile (mobile, 1-col grid): base clamp() rules
       already size rings/core/svg smoothly (max caps are tight enough that
       the full-width tile doesn't balloon). We only bump the source buttons
       here so they're tappable on a large card. */
    @media (max-width: 440px) {
      .drop-tile-info {
        padding: 16px 12px 24px;
        gap: 6px;
      }
      .drop-tile-src,
      .drop-tile-more {
        width: 48px;
        height: 48px;
        border-radius: 10px;
      }
      .drop-tile-src svg {
        width: 22px;
        height: 22px;
      }
      .drop-tile-src .brand-ico {
        width: 32px;
        height: 32px;
      }
      .drop-tile-src .brand-ico svg {
        width: 24px;
        height: 24px;
      }
      .drop-tile-sources {
        gap: 10px;
        margin-top: 12px;
      }
    }
  `;let q=Yt;G([x.property({attribute:!1})],q.prototype,"t");G([x.property({attribute:!1})],q.prototype,"files");G([x.property({attribute:!1})],q.prototype,"store");G([x.property({type:Boolean})],q.prototype,"showDropTile");G([x.property({attribute:!1})],q.prototype,"sources");G([x.property({type:String})],q.prototype,"accept");G([x.property({type:Boolean})],q.prototype,"multi");G([x.property({type:Boolean})],q.prototype,"directory");G([x.property({type:Boolean})],q.prototype,"allowRename");G([x.property({type:String})],q.prototype,"mode");G([x.property({type:Boolean})],q.prototype,"showLocateButton");G([x.property({type:Boolean})],q.prototype,"showCopyCdnButton");G([x.property({type:Boolean})],q.prototype,"showCheckSimilar");G([x.property({type:Boolean})],q.prototype,"selectMode");G([x.property({attribute:!1})],q.prototype,"selectedIds");G([x.property({type:Boolean})],q.prototype,"allSelected");G([x.property({type:Boolean})],q.prototype,"selectionFull");G([x.property({type:Number})],q.prototype,"maxSelection");G([x.property({type:Boolean})],q.prototype,"previewOpen");G([x.property({attribute:!1})],q.prototype,"searchRunIds");G([x.property({attribute:!1})],q.prototype,"searchActiveIds");G([x.property({attribute:!1})],q.prototype,"searchResults");G([x.state()],q.prototype,"_moreOpen");G([x.state()],q.prototype,"_dropTileMaxVisible");var On=Object.defineProperty,W=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&On(e,t,o),o};const Gt=class Gt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let o=e.right+12;o+t>window.innerWidth-8&&(o=e.left-t-12),this._simPopLeft=Math.max(8,o),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),o=140;this._tipLeft=Math.max(o+8,Math.min(i.left+i.width/2,window.innerWidth-o-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var o;i.some(s=>s.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(o=this._io)==null||o.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",o=e.status==="complete"&&!!e.alreadyExisted;return i||o}_maybeProbeDims(){var i,o;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const s=new Image;s.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${s.naturalWidth}×${s.naturalHeight}`)},s.src=t}else if((o=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&o.info){const s=e.response.file.info;s.img_w&&s.img_h&&(this._dims=`${s.img_w}×${s.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,o,s,n;e.stopPropagation();const t=(n=(s=(o=(i=this._file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var w,y,g;const e=this._file;if(!e)return l.nothing;const t=se(e),i=e.status==="complete",o=e.status==="uploading",s=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",c=this.mode==="review",d=c||this.reviewPick||!this.allowRename,p=wn(e.name),b=t==="image"&&!pe(e.type),f=this.selectMode&&b&&!c,k=this.similarCount>=0,C=f&&!k&&!i&&this.similarStatus==="",_=!c&&!i&&!o&&!s&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,E=_,I=["tile",i?"done":"",o?"uploading":"",s?"paused":"",a?"rejected":"",c?"review":"",C?"selectable":"",C&&this.isSelected?"selected":"",this.selectionActive&&!b&&!c?"select-dimmed":"",E?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return l.html`
      <div
        class=${I}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:C?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?l.html`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:l.html`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${nt.getFileTypeIconUrl(p)}
                    alt="${p?this.t("extFile","{{ext}} file",{ext:p}):this.t("file","File")}"
                    @error=${m=>{const U=m.target,S=nt.getDefaultFileTypeIconUrl();!U.dataset.fallback&&U.src!==S&&(U.dataset.fallback="1",U.src=S)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?l.html`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:l.nothing}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?l.html`
                  <span class="sim-result-badge">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar","{{count}} similar",{count:this.similarCount})}
                  </span>
                `:l.html`<span class="sim-result-badge none"
                  >${this.t("noSimilar","No similar")}</span
                >`:l.nothing}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${C?l.html`
                <span
                  class="similar-cb ${this.isSelected?"checked":""} ${this.selectionFull&&!this.isSelected?"disabled":""}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected?"true":"false"}
                  aria-disabled=${this.selectionFull&&!this.isSelected?"true":"false"}
                  aria-label=${this.t("selectImage","Select image")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              `:l.nothing}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${_?l.html`
                <div class="center-actions">
                  <button
                    class="preview-btn"
                    @click=${this._preview}
                    aria-label=${this.t("details","Details")}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span class="cs-label">${this.t("details","Details")}</span>
                  </button>
                  ${this.similarCount>0?l.html`
                        <button
                          class="check-similar-btn"
                          @click=${this._openResults}
                          @mouseenter=${this._simPopoverShow}
                          @mouseleave=${this._simScheduleHide}
                          aria-label=${this.t("viewSimilar","View similar assets")}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.2"
                            stroke-linecap="round"
                          >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          <span class="cs-label"
                            >${this.t("viewNSimilar","View {{count}} similar",{count:this.similarCount})}</span
                          >
                        </button>
                      `:this.similarCount===0?l.html`
                          <button
                            class="check-similar-btn no-similar"
                            @click=${this._openResults}
                            aria-label=${this.t("noSimilarFound","No similar assets found")}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.2"
                              stroke-linecap="round"
                            >
                              <circle cx="11" cy="11" r="7" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <span class="cs-label">${this.t("noSimilar","No similar")}</span>
                          </button>
                        `:this.showCheckSimilar&&b?l.html`
                            <button
                              class="check-similar-btn"
                              @click=${this._checkSimilarSingle}
                              aria-label=${this.t("checkSimilar","Check similar")}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.2"
                                stroke-linecap="round"
                              >
                                <circle cx="11" cy="11" r="7" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              </svg>
                              <span class="cs-label"
                                >${this.t("checkSimilar","Check similar")}</span
                              >
                            </button>
                          `:l.nothing}
                </div>
              `:l.nothing}

          <!-- Locate / Copy-CDN hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Shown on any completed tile (the single-view upload list and the
               review screen) that has a response.file and the host enabled the
               feature. Each inner button has its own gate — Locate needs uuid,
               Copy CDN needs url.cdn — so an already-existed-but-missing-uuid
               edge case won't render a dead button. The outer gate mirrors the
               two inner gates so we never render (and hover-reveal) an empty
               overlay when neither button qualifies. -->
          ${i&&((w=e.response)!=null&&w.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&((y=e.response.file.url)!=null&&y.cdn))?l.html`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?l.html`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${Hi}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:l.nothing}
                  ${this.showCopyCdnButton&&((g=e.response.file.url)!=null&&g.cdn)?l.html`<button
                        class="review-action primary ${this._copied?"copied":""}"
                        @click=${this._copyCdn}
                        title=${this.t("copyCdn","Copy CDN")}
                        aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}
                      >
                        ${this._copied?l.html`<svg viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>`:l.html`<svg viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:l.nothing}
                </div>
              `:l.nothing}

          <!-- Spinner overlay (uploading = spinner, paused = pause icon) -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
            <div class="pause-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>

          <!-- Done badge -->
          ${i?l.html`<div class="done-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:l.nothing}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${c&&n?l.html`<div
                class="failed-badge"
                title=${e.error||this.t("uploadFailed","Upload failed")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </div>`:l.nothing}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!c&&(e.status==="uploading"||e.status==="paused")?l.html`
                <div class="progress">
                  <div
                    class="progress-fill"
                    ${K.cspStyle({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
                  ></div>
                </div>
              `:l.nothing}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!c?l.html`<div
                class="error-badge"
                @mouseenter=${m=>this._showTip(e.error??"",m)}
                @mouseleave=${this._hideTip}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span class="error-badge-text">${e.error}</span>
              </div>`:l.nothing}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?l.html`<div
                class="exists-badge"
                @mouseenter=${m=>this._showTip(this.t("alreadyUploaded","Already uploaded"),m)}
                @mouseleave=${this._hideTip}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:l.nothing}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?l.html`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:l.nothing}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${c||this.reviewPick?l.nothing:l.html`
              <div class="actions">
                ${o&&e.isTus?l.html`
                      <button
                        class="act-btn pause"
                        @click=${this._pause}
                        title=${this.t("pause","Pause")}
                        aria-label=${this.t("pauseUpload","Pause upload")}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:l.nothing}
                ${s?l.html`
                      <button
                        class="act-btn resume"
                        @click=${this._resume}
                        title=${this.t("resume","Resume")}
                        aria-label=${this.t("resumeUpload","Resume upload")}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:l.nothing}
                ${n?l.html`
                      <button
                        class="act-btn retry"
                        @click=${this._retry}
                        title=${this.t("retry","Retry")}
                        aria-label=${this.t("retryUpload","Retry upload")}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="23 4 23 10 17 10" />
                          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                        </svg>
                      </button>
                    `:l.nothing}
                <button
                  class="act-btn del"
                  @click=${this._remove}
                  title=${this.t("remove","Remove")}
                  aria-label=${this.t("removeFile","Remove file")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            `}

        <!-- Info bar -->
        <div class="info">
          <input
            class="name-input"
            type="text"
            .value=${e.name}
            title=${e.name}
            aria-label=${this.t("fileName","File name")}
            ?readonly=${d}
            @change=${d?l.nothing:this._rename}
            @click=${m=>m.stopPropagation()}
          />
          <div class="meta">
            ${p||""}${e.size?` · ${Pe(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?l.html`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${K.cspStyle({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:l.nothing}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return l.nothing;const e=[...this.similarResults].sort((c,d)=>d.score-c.score),t=e[0],i=e.length,o=e.slice(1),s=o.slice(0,3),n=o.length-s.length,a=Math.round(t.score*100);return l.html`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${K.cspStyle({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?l.html`<img src=${t.url} alt="" />`:l.nothing}
          <span class="pop-best ${t.score>=.85?"high":""}"
            >${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span
          >
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${o.length?l.html`<div class="pop-thumbs">
                ${s.map(c=>l.html`<img src=${c.url} alt="" />`)}
                ${n>0?l.html`<span class="pop-more">+${n}</span>`:l.nothing}
              </div>`:l.html`<span></span>`}
          <span class="pop-open">
            ${i===1?this.t("open","Open"):this.t("openAllN","Open all {{count}}",{count:i})}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};Gt.styles=l.css`
    :host {
      display: block;
    }

    .tile {
      /* Large-batch perf: the tile is the heavy part of each grid item, so let
         the browser skip its layout/style/paint while scrolled out of view
         (500+ assets render only what's near the viewport). Applied to .tile,
         NOT :host, on purpose — content-visibility:auto also turns on
         layout+paint containment while the tile is on-screen, which would make
         the element a containing block for (and clip) position:fixed
         descendants. The .sim-popover (position:fixed) is a SIBLING of .tile,
         not a descendant, so keeping containment on .tile leaves the popover
         free to position against the viewport. contain-intrinsic-size supplies
         a placeholder block size for skipped tiles; its "auto" keyword makes
         the browser remember each tile's real size after first render so
         scrollbar sizing stays accurate. ~260px ≈ a 16:10 preview at the
         default 224px column plus the body (name / meta / progress). */
      content-visibility: auto;
      contain-intrinsic-size: auto 260px;
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      transition:
        box-shadow 0.15s,
        transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 0;
      overflow: hidden;
    }

    .tile:hover {
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.06),
        0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      /* Query container so the hover actions can adapt to the TILE width (not
         the viewport). On .preview — never on .tile — because container-type
         makes the element a containing block for fixed-positioned descendants,
         which would break the .sim-popover (position: fixed) living on .tile. */
      container-type: inline-size;
      container-name: sfx-tile-media;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
    }

    .preview-img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .preview-bg.pdf {
      background: linear-gradient(135deg, #fef2f2, #fee2e2);
    }
    .preview-bg.doc {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
    .preview-bg.vid {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    }
    .preview-bg.audio {
      background: linear-gradient(135deg, #fdf4ff, #fae8ff);
    }
    .preview-bg.sheet {
      background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    }
    .preview-bg.slide {
      background: linear-gradient(135deg, #fff7ed, #ffedd5);
    }
    .preview-bg.zip {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
    }
    .preview-bg.code {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    .preview-bg.markup {
      background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
    }
    .preview-bg.font {
      background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    }
    .preview-bg.design {
      background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    }
    .preview-bg.binary {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }
    .preview-bg.data {
      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
    }
    .preview-bg.gen {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-img {
      max-width: 72px;
      max-height: 72px;
      object-fit: contain;
    }

    .duration-badge {
      position: absolute;
      bottom: 6px;
      right: 6px;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1.3;
      pointer-events: none;
      z-index: 2;
    }

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }

    .name-input {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin-bottom: 2px;
      min-width: 0;
      font-size: 12px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 1px 4px;
      background: transparent;
      font-family: inherit;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition:
        border-color 0.15s,
        background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input[readonly] {
      cursor: default;
    }
    .name-input[readonly]:hover,
    .name-input[readonly]:focus {
      border-color: transparent;
      background: transparent;
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 5px;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* In review mode every tile is complete — the per-tile blue ring would
       turn the whole grid into a wall of borders, so suppress it. The status
       badge in the corner already conveys "uploaded successfully". */
    .tile.review.done {
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
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

    /* Reveal on hover or KEYBOARD focus only (:has(:focus-visible)) — a mouse
       click sets :focus but not :focus-visible, so actions don't linger/stick
       after clicking the tile. */
    .tile:hover .actions,
    .tile:focus-visible .actions,
    .tile:has(:focus-visible) .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions {
        opacity: 1;
      }
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
      transition:
        background 0.15s,
        transform 0.15s;
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
    /* Centered hover actions wrapper (Details + optional Check similar).
       Flex column with stretch so both buttons share one width. */
    .center-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: stretch;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 5;
    }

    .tile:hover .center-actions,
    .tile:focus-visible .center-actions,
    .tile:has(:focus-visible) .center-actions {
      opacity: 1;
    }

    @media (hover: none) {
      .center-actions {
        opacity: 1;
      }
    }

    .preview-btn,
    .check-similar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      box-sizing: border-box;
      /* Fixed height so both buttons match regardless of border width. */
      height: 32px;
      padding: 0 16px;
      /* Fixed width so every button is identical across ALL tiles, regardless
         of how short the label is ("No similar" / "Details") — extra empty
         space is intentional, by design. Sized to fit the longest label
         ("View N similar"). max-width keeps it inside genuinely narrow tiles,
         where the container query below collapses it to an icon. */
      width: 160px;
      max-width: 100%;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      transition:
        background-color 0.15s ease,
        color 0.15s ease,
        border-color 0.15s ease,
        transform 0.15s ease,
        box-shadow 0.15s ease;
    }

    .cs-label {
      /* Don't grow: keep the label at its natural width so the icon + text sit
         together as one group, centered in the button (rather than the icon
         pinned left with the text floating). Still shrinks + ellipsizes in
         narrow tiles. */
      flex: 0 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* In narrow tiles the fixed 160px button can be wider than the media area.
       Let the button shrink to the container width minus a small inset so it
       doesn't reach the tile edges and the label can still ellipsize. */
    @container sfx-tile-media (max-width: 208px) {
      .preview-btn,
      .check-similar-btn {
        width: calc(100% - 24px);
        padding: 0 8px;
      }
    }

    /* Details — white, borderless (transparent border keeps the same box
       height as Check similar), blue text. On hover it stays white and scales
       up slightly (no blue fill, no darkening). Same look in both modes. */
    .preview-btn {
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
    }

    /* Hover feedback via shadow, NOT scale — scaling one button would make it
       wider than its sibling; both must stay the same width. */
    .preview-btn:hover {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-primary, #2563eb);
    }

    /* Check similar — filled primary, visually distinct from Details */
    .check-similar-btn {
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    /* Hover feedback via a stronger glow, NOT scale, so width stays identical
       to the Details button. */
    .check-similar-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 12px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.45));
    }

    /* "No similar found" — muted/neutral, NOT an action to re-run; clicking it
       just opens the panel's empty-state message. */
    .check-similar-btn.no-similar,
    .check-similar-btn.no-similar:hover {
      background: var(--sfx-up-bg, #fff);
      border-color: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text-muted, #94a3b8);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .preview-btn svg,
    .check-similar-btn svg {
      width: 13px;
      height: 13px;
    }

    /* Asset-picker style: on hover a dark semi-transparent overlay covers the
       preview, with the Details / Check similar buttons sitting on top. Only
       when the feature is enabled (cs-overlay) — normal mode is untouched. */
    .tile.cs-overlay .preview::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s ease;
      pointer-events: none;
      z-index: 2;
    }

    .tile.cs-overlay:hover .preview::after {
      background: rgba(0, 0, 0, 0.45);
    }

    /* --- Similar-image selection mode (asset-picker look) --- */
    .tile.selectable {
      cursor: pointer;
    }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed {
      opacity: 0.5;
    }

    /* Checkbox: hidden by default, revealed on tile hover/keyboard focus so the
       UI stays clean until the user is ready to pick. Always visible once
       checked — selected state must remain glanceable. */
    .similar-cb {
      position: absolute;
      top: 8px;
      left: 8px;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 1.5px solid #cbd5e1;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;
      opacity: 0;
      transition:
        background-color 0.15s ease,
        border-color 0.15s ease,
        opacity 0.15s ease;
    }

    .tile:hover .similar-cb,
    .tile:focus-visible .similar-cb,
    .tile:has(:focus-visible) .similar-cb,
    .similar-cb.checked {
      opacity: 1;
    }

    /* Touch devices have no hover — always reveal so picking remains possible. */
    @media (hover: none) {
      .similar-cb {
        opacity: 1;
      }
    }

    .similar-cb svg {
      width: 16px;
      height: 16px;
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg {
      opacity: 1;
    }

    /* Selection cap reached: unselected checkboxes are muted on hover and not
       clickable. Stays hidden when not hovered like the rest. */
    .similar-cb.disabled {
      cursor: not-allowed;
    }
    .tile:hover .similar-cb.disabled,
    .tile:focus-visible .similar-cb.disabled,
    .tile:has(:focus-visible) .similar-cb.disabled {
      opacity: 0.4;
    }
    @media (hover: none) {
      .similar-cb.disabled {
        opacity: 0.4;
      }
    }

    /* --- Similarity search loading states --- */
    /* Queued (waiting its turn): just dimmed, no badge. */
    .tile.sim-queued {
      opacity: 0.55;
      transition: opacity 0.15s ease;
    }
    /* On hover a queued tile un-dims so its Details button is clearly visible. */
    .tile.sim-queued:hover {
      opacity: 1;
    }

    /* Searching: dark overlay + spinner over the preview. */
    .sim-search-overlay {
      position: absolute;
      inset: 0;
      z-index: 8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: rgba(15, 23, 42, 0.55);
      color: #fff;
    }
    .sim-search-overlay .sim-spinner {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      animation: spinRing 0.7s linear infinite;
    }
    .sim-search-overlay .sim-label {
      font-size: 11px;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Checked: result badge "N similar" / "No similar" (top-left). Doubles as
       the "checked" indicator — no separate green check. */
    .sim-result-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 8;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 24px;
      padding: 0 10px;
      border-radius: 999px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      box-shadow: 0 2px 6px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.22));
      pointer-events: none;
      transition: opacity 0.15s ease;
    }
    .sim-result-badge svg {
      width: 12px;
      height: 12px;
    }
    .sim-result-badge.none {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      box-shadow: none;
    }
    /* Hide the resting badge whenever the centered Details / View-similar
       buttons show (hover OR keyboard focus) so they never overlap. */
    .tile:hover .sim-result-badge,
    .tile:focus-visible .sim-result-badge,
    .tile:has(:focus-visible) .sim-result-badge {
      opacity: 0;
    }

    /* Review-pick tile (results modal left list): plain selectable card. */
    .tile.review-pick {
      cursor: pointer;
    }
    .tile.review-pick:hover .sim-result-badge {
      opacity: 1;
    }
    .tile.review-pick .name-input {
      pointer-events: none;
    }

    /* --- Hover preview popover (best match) --- */
    .sim-popover {
      position: fixed;
      width: 240px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
      z-index: 10000;
      overflow: hidden;
      cursor: pointer;
      animation: simPopIn 0.12s ease;
    }
    @keyframes simPopIn {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }

    /* Styled hover tooltip for the status badges (replaces the native title).
       Fixed-position bubble whose coords are set in JS; the arrow points at the
       badge — down when above it, up when flipped below (.below). */
    .hover-tip {
      position: fixed;
      z-index: 10001;
      transform: translate(-50%, -100%);
      max-width: 280px;
      padding: 6px 9px;
      border-radius: 6px;
      background: var(--sfx-up-tooltip-bg, #1e293b);
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      text-align: center;
      white-space: normal;
      overflow-wrap: anywhere;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
      pointer-events: none;
      animation: tipIn 0.12s ease both;
    }
    .hover-tip.below {
      transform: translate(-50%, 0);
    }
    .hover-tip::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border: 5px solid transparent;
      border-top-color: var(--sfx-up-tooltip-bg, #1e293b);
    }
    .hover-tip.below::after {
      top: auto;
      bottom: 100%;
      border-top-color: transparent;
      border-bottom-color: var(--sfx-up-tooltip-bg, #1e293b);
    }
    @keyframes tipIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .sim-popover .pop-hero {
      position: relative;
      aspect-ratio: 16 / 10;
      background: var(--sfx-up-surface, #eef);
    }
    .sim-popover .pop-hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .sim-popover .pop-best {
      position: absolute;
      top: 8px;
      left: 8px;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 9px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-best.high {
      color: var(--sfx-up-success, #16a34a);
    }
    .sim-popover .pop-body {
      padding: 11px 13px 8px;
    }
    .sim-popover .pop-t {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }
    .sim-popover .pop-s {
      font-size: 11.5px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sim-popover .pop-foot {
      padding: 0 13px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sim-popover .pop-thumbs {
      display: inline-flex;
    }
    .sim-popover .pop-thumbs img {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      border: 2px solid #fff;
      object-fit: cover;
      margin-left: -8px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-thumbs img:first-child {
      margin-left: 0;
    }
    .sim-popover .pop-more {
      width: 22px;
      height: 22px;
      border-radius: 5px;
      border: 2px solid #fff;
      margin-left: -8px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 9.5px;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-open {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .sim-popover .pop-open svg {
      width: 12px;
      height: 12px;
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

    /* --- Review mode: failed badge (mirrors done-badge) --- */
    .failed-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-error, #dc2626);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
      color: #fff;
    }

    .failed-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: stacked hover actions (Locate / Copy CDN) --- */
    .review-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 6;
      pointer-events: none;
    }

    /* Reveal on hover/focus for completed tiles in BOTH the dedicated review
       screen (.tile.review) and the single-screen upload flow (.tile.done) —
       the latter renders the actions inline once a file finishes uploading. */
    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions,
    .tile.done:hover .review-actions,
    .tile.done:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions,
      .tile.done .review-actions {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .review-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 10px;
      border: none;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition:
        transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
        box-shadow 0.18s ease,
        background 0.15s ease;
      box-shadow:
        0 4px 12px rgba(15, 23, 42, 0.18),
        0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow:
        0 6px 18px rgba(15, 23, 42, 0.22),
        0 1px 3px rgba(15, 23, 42, 0.1);
    }

    .review-action:active {
      transform: scale(1.02);
    }

    .review-action svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Secondary — white card style (matches Preview in design system) */
    .review-action.secondary {
      background: rgba(255, 255, 255, 0.96);
      color: var(--sfx-up-text, #1e293b);
    }

    /* Primary — solid blue (matches + Select in design system) */
    .review-action.primary {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .review-action.primary:hover {
      background: var(--sfx-up-primary-hover, #1d4ed8);
    }

    /* Brief green flash after a successful clipboard copy */
    .review-action.copied {
      background: #16a34a !important;
      color: #fff;
    }

    /* --- Error / rejected state --- */
    .error-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .error-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }

    /* Truncate long error messages to a single line with an ellipsis; the full
       text is shown in the styled hover tooltip (.hover-tip). */
    .error-badge-text {
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- "Already uploaded" note (warning, not an error — content was a
       duplicate already on the server) --- */
    .exists-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.3;
      color: #fff;
      /* Deepened amber (#e07b00) so white text stays legible, with the same
         85% transparency the error chip uses so the thumbnail shows through. */
      background: color-mix(in srgb, #e07b00 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .exists-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
    }

    .exists-badge span {
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring {
      display: none;
    }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon {
      display: flex;
    }

    .act-btn.pause:hover {
      background: var(--warning-10, #fef3c7);
      color: var(--sfx-up-warning, #d97706);
    }

    .act-btn.resume:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
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

    @keyframes spinRing {
      to {
        transform: rotate(360deg);
      }
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
      .tile {
        animation: none;
      }
      .spin-ring {
        animation: none;
      }
    }
  `;let Y=Gt;W([x.property({attribute:!1})],Y.prototype,"t");W([x.property({attribute:!1})],Y.prototype,"store");W([x.property({type:String})],Y.prototype,"fileId");W([x.property({attribute:!1})],Y.prototype,"file");W([x.property({type:String})],Y.prototype,"mode");W([x.property({type:Boolean})],Y.prototype,"allowRename");W([x.property({type:Boolean})],Y.prototype,"showLocateButton");W([x.property({type:Boolean})],Y.prototype,"showCopyCdnButton");W([x.property({type:Boolean})],Y.prototype,"showCheckSimilar");W([x.property({type:Boolean})],Y.prototype,"selectMode");W([x.property({type:Boolean})],Y.prototype,"isSelected");W([x.property({type:Boolean})],Y.prototype,"selectionActive");W([x.property({type:Boolean})],Y.prototype,"selectionFull");W([x.property({type:Boolean})],Y.prototype,"previewOpen");W([x.property({type:String})],Y.prototype,"similarStatus");W([x.property({type:Number})],Y.prototype,"similarCount");W([x.property({attribute:!1})],Y.prototype,"similarResults");W([x.property({type:Boolean})],Y.prototype,"reviewPick");W([x.state()],Y.prototype,"_dims");W([x.state()],Y.prototype,"_simPopover");W([x.state()],Y.prototype,"_copied");W([x.state()],Y.prototype,"_tip");var zn=Object.defineProperty,Je=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&zn(e,t,o),o};const Wt=class Wt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return l.html`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t("back","Back")}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          ${this.t("back","Back")}
        </button>
        <span class="title"
          >${this.t("lastUpload","Last upload")}
          <span class="count"
            >—
            ${this.t("fileCount",{count:t,defaultValue_one:"{{count}} file",defaultValue_other:"{{count}} files"})}</span
          ></span
        >
        <div class="filters">
          <button
            class="chip ${this._filter==="all"?"active":""}"
            @click=${this._setFilter("all")}
          >
            ${this.t("all","All")} (${t})
          </button>
          <button
            class="chip ${this._filter==="success"?"active":""}"
            @click=${this._setFilter("success")}
          >
            ✓ ${this.t("uploaded","Uploaded")} (${this._successCount})
          </button>
          ${this._failedCount>0?l.html`<button
                class="chip ${this._filter==="failed"?"active":""}"
                @click=${this._setFilter("failed")}
              >
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:l.nothing}
          <button
            class="clear-btn"
            @click=${this._onClear}
            title=${this.t("clearLastUpload","Clear last upload from this browser")}
          >
            ${this.t("clear","Clear")}
          </button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?l.html`<div class="empty">
              ${this.t("noFilesMatchFilter","No files match this filter.")}
            </div>`:l.html`<sfx-file-list
              .t=${this.t}
              .files=${e}
              mode="review"
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
            ></sfx-file-list>`}
      </div>
    `}};Wt.styles=l.css`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
      position: relative;
    }

    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 24px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
    }

    .back-btn:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #0f172a);
      margin-right: 8px;
    }

    .count {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 400;
    }

    .filters {
      display: flex;
      gap: 6px;
      margin-left: auto;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .chip:hover {
      background: var(--sfx-up-surface, #f8fafc);
    }

    .chip.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .clear-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-error, #dc2626);
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--sfx-up-error, #dc2626) 30%, transparent);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .clear-btn:hover {
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 8%, transparent);
    }

    .back-btn:focus-visible,
    .chip:focus-visible,
    .clear-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 16px 0 0;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .topbar {
        padding: 12px 16px;
      }
    }
  `;let me=Wt;Je([x.property({attribute:!1})],me.prototype,"t");Je([x.property({attribute:!1})],me.prototype,"files");Je([x.property({type:Boolean})],me.prototype,"showLocateButton");Je([x.property({type:Boolean})],me.prototype,"showCopyCdnButton");Je([x.state()],me.prototype,"_filter");K.defineElement("sfx-last-upload-review",me);const gt=l.css`
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
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary, #2563eb),
      var(--sfx-up-primary-mid, #3b82f6)
    );
    color: var(--primary-foreground, #fff);
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary-hover, #1d4ed8),
      var(--sfx-up-primary, #2563eb)
    );
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
`,vt=l.css`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var An=Object.defineProperty,le=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&An(e,t,o),o};const Xt=class Xt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?l.nothing:l.html`
      <button
        class="btn-retry"
        @click=${this._retryAll}
        aria-label=${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
        >
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
        <span class="btn-label"
          >${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}</span
        >
      </button>
    `}_renderUploadingBar(){return l.html`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          <button
            class="btn-ghost"
            @click=${this._cancelUpload}
            aria-label=${this.t("cancelUpload","Cancel upload")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
        </div>
      </div>
    `}_renderDoneBar(){return l.html`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          ${this._renderRetryAllButton()}
          <button
            class="btn-sec"
            @click=${this._uploadMore}
            aria-label=${this.t("uploadMore","Upload more")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">${this.t("uploadMore","Upload more")}</span>
          </button>
          <button class="btn-primary" @click=${this._close} aria-label=${this.t("close","Close")}>
            <span class="btn-label">${this.t("close","Close")}</span>
          </button>
        </div>
      </div>
    `}_renderIdleBar(){return l.html`
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?l.html`
                <button
                  class=${this.requireMetadataFirst?"btn-primary":"btn-sec"}
                  @click=${this._fillMetadata}
                  aria-label=${this.t("fillMetadata","Fill Metadata")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">${this.t("fillMetadata","Fill Metadata")}</span>
                </button>
              `:l.nothing}
          ${this.showCheckSimilar&&this.uploadState==="idle"?l.html`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t("checkSimilar","Check similar")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
                </button>
              `:l.nothing}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label=${this.t("clear","Clear")}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            <span class="btn-label">${this.t("clear","Clear")}</span>
          </button>
          <button
            class="btn-sec"
            @click=${this._addMore}
            aria-label=${this.t("addMore","Add more")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">${this.t("addMore","Add more")}</span>
          </button>
          ${this._renderRetryAllButton()} ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return l.html`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t("selectImagesToCheck","Select images to check for similar assets")}</b>
            <span
              >${t>0?this.t("selectImagesHintMax","Pick up to {{max}}, then click Check",{max:t}):this.t("selectImagesHint","Pick one or more, then click Check")}</span
            >
          </div>
        </div>
        <div class="right">
          ${t>0?l.html`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
                >${e}/${t}</span
              >`:l.nothing}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
          </button>
          <button
            class="btn-ghost"
            @click=${this._checkSimilarCancel}
            aria-label=${this.t("cancel","Cancel")}
          >
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${e===0}
            aria-label=${this.t("checkSimilar","Check similar")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
          </button>
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return l.html`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?l.html`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?l.html`
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="btn-label">${this.t("done","Done")}!</span>
              `:l.html`
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.2"
                  stroke-linecap="round"
                >
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                </svg>
                <span class="btn-label">${this.t("upload","Upload")}</span>
              `}
      </button>
    `}};Xt.styles=[gt,vt,l.css`
      :host {
        display: flex;
        flex-direction: column;
        background: var(--sfx-up-bg, #ffffff);
        flex-shrink: 0;
        box-shadow: none;
        position: relative;
        animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        container-type: inline-size;
        container-name: actions-bar;
      }

      /* Full-column-width divider above the actions bar.
       The bar sits inside .content which is capped at
       --sfx-up-content-max-width (1600px), so a plain :host border-top
       would leave visible gaps on ultra-wide viewports. Instead we
       draw the line as a pseudo-element on the first child and push
       it 100vw to each side — the outer .inline { overflow: hidden }
       clips it back to the column width. */
      :host > :first-child {
        position: relative;
      }

      :host > :first-child::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100vw;
        right: -100vw;
        height: 1px;
        background: var(--sfx-up-border, #e2e8f0);
        pointer-events: none;
        z-index: 1;
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

      /* --- Buttons row --- */
      .buttons-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 24px;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
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

      /* --- Always-on similarity selection toolbar --- */
      .sim-ico {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sim-ico svg {
        width: 16px;
        height: 16px;
      }

      .sim-text {
        min-width: 0;
        display: flex;
        flex-direction: column;
        line-height: 1.25;
      }
      .sim-text b {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .sim-text span {
        font-size: 12px;
        font-weight: 400;
        color: var(--sfx-up-text-muted, #64748b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .count-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--sfx-up-surface, #eef2ff);
        color: var(--sfx-up-primary, #2563eb);
        font-size: 13px;
        font-weight: 700;
      }
      .count-pill.full {
        background: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }

      .select-all {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-primary, #2563eb);
        padding: 0 6px;
        height: 28px;
        border-radius: 6px;
        transition: background 0.15s ease;
      }
      .select-all:hover {
        background: var(--sfx-up-primary-bg, #eff6ff);
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

      /* --- Spinner --- */
      .btn-spin {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spinRing 0.7s linear infinite;
      }

      @keyframes spinRing {
        to {
          transform: rotate(360deg);
        }
      }

      /* Collapse the right group to icon-only when the actions bar
         itself is narrow — not when the viewport is. @container beats
         @media here because inline uploaders can live inside a column
         narrower than the browser window. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right .btn-ghost,
        .right .btn-sec,
        .right .btn-retry,
        .right .btn-primary {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .right .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
      }

      /* Very narrow: also collapse the left Fill Metadata pill. */
      @container actions-bar (max-width: 380px) {
        .left .btn-sec {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .left .btn-label {
          display: none;
        }
        .left svg {
          width: 16px;
          height: 16px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `];let re=Xt;le([x.property({attribute:!1})],re.prototype,"t");le([x.property({type:String})],re.prototype,"uploadState");le([x.property({type:Number})],re.prototype,"fileCount");le([x.property({type:Number})],re.prototype,"failedCount");le([x.property({type:Boolean})],re.prototype,"showFillMetadata");le([x.property({type:Boolean})],re.prototype,"requireMetadataFirst");le([x.property({type:Boolean})],re.prototype,"showCheckSimilar");le([x.property({type:Boolean})],re.prototype,"selectMode");le([x.property({type:Number})],re.prototype,"selectedCount");le([x.property({type:Number})],re.prototype,"maxSelection");le([x.property({type:Boolean})],re.prototype,"allSelected");const Dn='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function Nt(r,e){return t=>{if(t.key!=="Tab")return;const i=r();if(!i)return;const o=i.querySelector(e);if(!o)return;const s=Array.from(o.querySelectorAll(Dn));if(s.length===0)return;const n=s[0],a=s[s.length-1],c=i.activeElement;t.shiftKey?(c===n||!o.contains(c))&&(t.preventDefault(),a.focus()):(c===a||!o.contains(c))&&(t.preventDefault(),n.focus())}}var Ln=Object.defineProperty,bt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ln(e,t,o),o};const Zt=class Zt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=Nt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return l.html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">${this.t("importFromUrl","Import from URL")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">${this.t("fileUrl","File URL")}</label>
              <input
                id="urlInput"
                type="url"
                placeholder=${this.t("fileUrlPlaceholder","https://example.com/file.pdf")}
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput"
                >${this.t("fileName","File name")}
                <span class="optional">(${this.t("optional","optional")})</span></label
              >
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t("fileNamePlaceholder","document.pdf")}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?l.html`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>
                ${this.t("cancel","Cancel")}
              </button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};Zt.styles=[gt,vt,l.css`
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.18s ease both;
      }

      .card {
        background: var(--sfx-up-bg, #fff);
        border-radius: 12px;
        box-shadow:
          0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
          0 4px 16px rgba(0, 0, 0, 0.06);
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
        transition:
          background 0.15s,
          color 0.15s;
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
        transition:
          border-color 0.15s,
          background 0.15s;
        outline: none;
        box-sizing: border-box;
      }

      input:focus {
        border-color: var(--sfx-up-primary, #2563eb);
        background: var(--sfx-up-bg, #fff);
      }

      input::placeholder {
        color: var(--sfx-up-text-muted, #ccc);
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
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes slideUp {
        from {
          transform: translateY(18px) scale(0.97);
        }
        to {
          transform: translateY(0) scale(1);
        }
      }

      .close-btn:focus-visible {
        outline: 2px solid var(--sfx-up-primary, #2563eb);
        outline-offset: 2px;
      }

      input:focus-visible {
        outline: none;
      }
    `];let _e=Zt;bt([x.property({attribute:!1})],_e.prototype,"t");bt([x.state()],_e.prototype,"_url");bt([x.state()],_e.prototype,"_name");bt([x.state()],_e.prototype,"_error");var Mn=Object.defineProperty,Qe=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Mn(e,t,o),o};const Jt=class Jt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Nt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,s;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(s=this.shadowRoot)==null?void 0:s.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return l.html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div class="title">${this.t("camera","Camera")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            ${this._error?l.html`<div class="error">${this._error}</div>`:this._captured?l.html`
                    <img
                      class="preview-img"
                      src=${this._previewUrl}
                      alt=${this.t("capturedPhoto","Captured photo")}
                    />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>
                        ${this.t("retake","Retake")}
                      </button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>
                        ${this.t("usePhoto","Use photo")}
                      </button>
                    </div>
                  `:l.html`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Jt.styles=[gt,vt,l.css`
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.18s ease both;
      }

      .card {
        background: var(--sfx-up-bg, #fff);
        border-radius: 12px;
        box-shadow:
          0 28px 80px rgba(0, 0, 0, 0.18),
          0 4px 16px rgba(0, 0, 0, 0.06);
        width: 100%;
        max-width: 520px;
        height: 520px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
        transition:
          background 0.15s,
          color 0.15s;
        flex-shrink: 0;
        line-height: 1;
      }
      .close-btn:hover {
        background: var(--sfx-up-border, #e4e4e4);
        color: var(--sfx-up-text, #333);
      }

      .body {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        flex: 1;
        min-height: 0;
        justify-content: center;
      }

      video,
      canvas {
        width: 100%;
        flex: 1;
        min-height: 0;
        border-radius: 12px;
        background: #000;
        object-fit: cover;
      }

      canvas {
        display: none;
      }

      .preview-img {
        width: 100%;
        max-height: 320px;
        border-radius: 12px;
        object-fit: contain;
        background: #000;
      }

      .error {
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
        text-align: center;
        padding: 40px 20px;
      }

      .actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        width: 100%;
      }

      .btn-capture {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        padding: 0;
        background: var(--sfx-up-error, #dc2626);
        border: 4px solid var(--sfx-up-bg, #fff);
        box-shadow:
          0 0 0 2px var(--sfx-up-error, #dc2626),
          0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
        cursor: pointer;
        transition: all 0.15s;
      }
      .btn-capture:hover {
        background: var(--destructive-foreground, #b91c1c);
        transform: scale(1.05);
      }

      .close-btn:focus-visible,
      .btn-capture:focus-visible {
        outline: 2px solid var(--sfx-up-primary, #2563eb);
        outline-offset: 2px;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translateY(18px) scale(0.97);
        }
        to {
          transform: translateY(0) scale(1);
        }
      }
    `];let ge=Jt;Qe([x.property({attribute:!1})],ge.prototype,"t");Qe([x.state()],ge.prototype,"_stream");Qe([x.state()],ge.prototype,"_error");Qe([x.state()],ge.prototype,"_captured");Qe([x.state()],ge.prototype,"_previewUrl");var jn=Object.defineProperty,ze=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&jn(e,t,o),o};const Qt=class Qt extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Nt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var s;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(s=this._stream)==null||s.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return l.html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 21h10" />
              </svg>
            </div>
            <div class="title">${this.t("screenCast","Screen cast")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>
              ✕
            </button>
          </div>
          <div class="body">
            ${this._error?l.html`<div class="error">${this._error}</div>`:this._recordedBlob?l.html`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>
                        ${this.t("discard","Discard")}
                      </button>
                      <button class="btn btn-primary" @click=${this._useRecording}>
                        ${this.t("useRecording","Use recording")}
                      </button>
                    </div>
                  `:this._recording?l.html`
                      <video autoplay playsinline muted></video>
                      <div class="status">
                        <div class="rec-dot"></div>
                        ${this.t("recording","Recording")}...
                      </div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>
                          ${this.t("stopRecording","Stop recording")}
                        </button>
                      </div>
                    `:l.html`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M7 21h10" />
                          </svg>
                        </div>
                        <div class="start-text">
                          ${this.t("screenCastPrompt","Share your screen to record a video that will be added to your uploads.")}
                        </div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>
                            ${this.t("cancel","Cancel")}
                          </button>
                          <button class="btn btn-primary" @click=${this._startRecording}>
                            ${this.t("startRecording","Start recording")}
                          </button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};Qt.styles=[gt,vt,l.css`
      :host {
        display: block;
      }

      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeIn 0.18s ease both;
      }

      .card {
        background: var(--sfx-up-bg, #fff);
        border-radius: 12px;
        box-shadow:
          0 28px 80px rgba(0, 0, 0, 0.18),
          0 4px 16px rgba(0, 0, 0, 0.06);
        width: 100%;
        max-width: 560px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
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
        transition:
          background 0.15s,
          color 0.15s;
        flex-shrink: 0;
        line-height: 1;
      }
      .close-btn:hover {
        background: var(--sfx-up-border, #e4e4e4);
        color: var(--sfx-up-text, #333);
      }

      .body {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }

      video {
        width: 100%;
        max-height: 320px;
        border-radius: 12px;
        background: #000;
        object-fit: contain;
      }

      .error {
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
        text-align: center;
        padding: 40px 20px;
      }

      .status {
        font-size: 13px;
        color: var(--sfx-up-text-secondary, #475569);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .rec-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--sfx-up-error, #dc2626);
        animation: pulse 1s ease-in-out infinite;
      }

      .actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        width: 100%;
      }

      .btn-danger {
        background: var(--sfx-up-error, #dc2626);
        color: var(--primary-foreground, #fff);
        box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
      }
      .btn-danger:hover {
        background: var(--destructive-foreground, #b91c1c);
      }

      .start-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 30px 20px;
        text-align: center;
      }

      .start-icon {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .start-icon svg {
        width: 28px;
        height: 28px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
      }

      .start-text {
        font-size: 14px;
        color: var(--sfx-up-text-secondary, #475569);
        max-width: 300px;
      }

      .close-btn:focus-visible {
        outline: 2px solid var(--sfx-up-primary, #2563eb);
        outline-offset: 2px;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translateY(18px) scale(0.97);
        }
        to {
          transform: translateY(0) scale(1);
        }
      }
      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
      }
    `];let ce=Qt;ze([x.property({attribute:!1})],ce.prototype,"t");ze([x.state()],ce.prototype,"_stream");ze([x.state()],ce.prototype,"_recording");ze([x.state()],ce.prototype,"_error");ze([x.state()],ce.prototype,"_recordedBlob");ze([x.state()],ce.prototype,"_previewUrl");var Bn=Object.defineProperty,qt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Bn(e,t,o),o};const ei=class ei extends l.LitElement{constructor(){super(...arguments),this.t=oe.fallbackT,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?l.html`<svg
        class="toast-icon"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      >
        <circle cx="8" cy="8" r="6.5" />
        <line x1="8" y1="5" x2="8" y2="8.5" />
        <circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none" />
      </svg>`:e==="warning"?l.html`<svg
        class="toast-icon"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 1.5l6.5 12H1.5z" />
        <line x1="8" y1="6.5" x2="8" y2="9.5" />
        <circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>`:l.html`<svg
      class="toast-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <line x1="8" y1="7" x2="8" y2="11" />
      <circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none" />
    </svg>`}render(){return this._toasts.length===0?l.html``:l.html`
      <div class="toast-stack">
        ${this._toasts.map(e=>l.html`
            <div class="toast toast--${e.type} ${e.leaving?"leaving":""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button
                class="toast-close"
                @click=${()=>this._dismiss(e.id)}
                aria-label=${this.t("dismiss","Dismiss")}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <line x1="4" y1="4" x2="12" y2="12" />
                  <line x1="12" y1="4" x2="4" y2="12" />
                </svg>
              </button>
            </div>
          `)}
      </div>
    `}};ei.styles=l.css`
    :host {
      display: block;
      position: absolute;
      bottom: 12px;
      right: 12px;
      z-index: 1050;
      pointer-events: none;
      font-family: var(--sfx-up-font, inherit);
    }

    .toast-stack {
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      align-items: flex-end;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      max-width: 360px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.4;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: toast-in 0.25s ease forwards;
      word-break: break-word;
    }
    .toast.leaving {
      animation: toast-out 0.2s ease forwards;
    }

    .toast--error {
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }
    .toast--warning {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }
    .toast--info {
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }

    .toast-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-top: 1px;
    }

    .toast-msg {
      flex: 1;
      min-width: 0;
    }

    .toast-close {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.5;
      transition: opacity 0.12s;
    }
    .toast-close:hover {
      opacity: 1;
    }

    @keyframes toast-in {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    @keyframes toast-out {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(8px) scale(0.96);
      }
    }
  `;let Ie=ei;qt([x.property({attribute:!1})],Ie.prototype,"t");qt([x.property({type:Number})],Ie.prototype,"duration");qt([x.state()],Ie.prototype,"_toasts");K.defineElement("sfx-toast",Ie);var Hn=Object.defineProperty,L=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Hn(e,t,o),o};const Li=new Set(["unsplash"]),de=10,Nn=3,qn=["auto","mobile","tablet","desktop","hq","sample"],Vn=["hls"],Ce={isTus:!1,tusUploadUrl:null,relativeFolder:""},Mi=new Set(["complete","failed","error","cancelled","rejected"]);var V;const A=(V=class extends l.LitElement{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Re,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail;if(N.isProductFieldKey(i)){const a=N.productKeyOf(i);if(!a)return;const c=o===""||o==null,d=a==="position"?{position:c?void 0:Number(o)}:{ref:c?void 0:String(o)};this.updateFileProduct(t,d);return}const s=this._store.getState().files.get(t);if(!s)return;const n=new Map(this._store.getState().files);n.set(t,{...s,meta:{...s.meta,[i]:o}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var o;const i=(o=this.config)==null?void 0:o.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(s){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",s),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,s,n,a;const t=this._mergedSources.find(c=>c.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(c){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,c)}return}if(e==="device"){const c=this.shadowRoot.querySelector("sfx-drop-zone");c==null||c.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((s=(o=this.config)==null?void 0:o.connectors)==null?void 0:s.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:c}=await Promise.resolve().then(()=>require("./google-picker-view-OoYAaMK4.cjs"));customElements.define("sfx-google-picker-view",c)}}else if(Li.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:c}=await Promise.resolve().then(()=>require("./search-provider-browser-DDaD9Wzw.cjs"));customElements.define("sfx-search-provider-browser",c)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:c}=await Promise.resolve().then(()=>require("./provider-browser-SO93e0pO.cjs"));customElements.define("sfx-provider-browser",c)}this._activeConnector=e}},this._onUrlSubmit=e=>{var b,f,k;this._showUrlDialog=!1;const{url:t,name:i}=e.detail,o=(b=this.config)==null?void 0:b.callbacks,s=Oi(i),n=s.startsWith("image/");if(kt(i))return;const a=this._store.getState();if([...a.files.values()].some(C=>C.name===i&&C.status!=="rejected"&&C.status!=="cancelled"))return;const d=St({name:i,size:0,type:s},a.restrictions,a.files);if(d){const C={id:$e(),status:"rejected",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Ce};ke(this._store,C),this._dispatchPublic(D.FILE_REJECTED,{file:C,reason:d.message}),(f=o==null?void 0:o.onFileRejected)==null||f.call(o,C,d.message);return}const p={id:$e(),status:"idle",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:n?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:null,...Ce};ke(this._store,p),this._dispatchPublic(D.FILE_ADDED,{file:p}),(k=o==null?void 0:o.onFileAdded)==null||k.call(o,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,o,s;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(D.FILE_PREVIEW,{file:t}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFilePreview)==null||s.call(o,t))},this._onFillMetadata=()=>{var t,i,o,s;const e=[...this._store.getState().files.values()].filter(n=>V._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(D.FILL_METADATA,{files:e}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFillMetadata)==null||s.call(o,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=de)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,de).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var o,s,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(D.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onFileCopyCdn)==null||n.call(s,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:s}of t){const n=i.get(o);n&&i.set(o,{...n,meta:{...n.meta,...s}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,o=new Map(i);for(const{fileId:s,taxonodes:n}of t){const a=i.get(s);if(!a||!V._MODIFIABLE_STATUSES.has(a.status))continue;const c={...a.taxonodes??{}};for(const[d,p]of Object.entries(n))p==null?delete c[d]:c[d]=p;o.set(s,{...a,taxonodes:c})}this._store.setState({files:o})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var o,s,n;const t=(o=this.config)==null?void 0:o.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(s=this._engine)==null||s.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(D.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=Ae.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&Ae.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,c,d;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,o=(p,b,f)=>`${p}\0${b}\0${f}`,s=new Set;for(const p of this._store.getState().files.values())p.status!=="rejected"&&p.status!=="cancelled"&&s.add(o(p.name,p.size,p.relativeFolder??""));for(const p of e.detail.files){if(kt(p.name))continue;const b=i?p.relativeFolder??"":"",f=this._store.getState(),k=o(p.name,p.size,b);if(s.has(k))continue;const C=p.thumbnail?this._transformRemoteThumbnail(p.thumbnail,{source:"connector",providerId:p.provider}):null,_=St({name:p.name,size:p.size,type:p.mimeType},f.restrictions,f.files);if(_){const I={id:$e(),status:"rejected",file:null,remoteUrl:null,name:p.name,size:p.size,type:p.mimeType,previewUrl:C,duration:null,progress:0,speed:0,bytesUploaded:0,error:_.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:p,...Ce,relativeFolder:b};ke(this._store,I),this._dispatchPublic(D.FILE_REJECTED,{file:I,reason:_.message}),(c=t==null?void 0:t.onFileRejected)==null||c.call(t,I,_.message);continue}const E={id:$e(),status:"idle",file:null,remoteUrl:null,name:p.name,size:p.size,type:p.mimeType,previewUrl:C,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:p,...Ce,relativeFolder:b};ke(this._store,E),s.add(k),this._dispatchPublic(D.FILE_ADDED,{file:E}),(d=t==null?void 0:t.onFileAdded)==null||d.call(t,E)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,o,s,n;this._dispatchPublic(D.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),(((s=this.config)==null?void 0:s.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(D.CANCEL,{})},this._onModalDismiss=()=>{var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(D.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,o;(e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(D.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(D.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(D.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(D.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&br(t).then(({files:i,hadDirectories:o})=>{if(i.length===0){o&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:o}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const o=((t=this.config)==null?void 0:t.mode)??"modal",s=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(s==="close"||s==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),s=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,s))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=V._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=i===-1?1:(i+1)%t.length;this._fsZoom=t[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=qi(),this._storeCtrl=new Br(this,this._store)}get _lastUploadId(){var i,o;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,o;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(s=>s.type===N.REGIONAL_VARIANT_TYPE.LANGUAGES);return((o=t==null?void 0:t.variants.find(Boolean))==null?void 0:o.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,o,s;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((o=this.config)==null?void 0:o.locale)??void 0;return{...N.buildDefaultRegionalFilters((s=this._metadataSchema)==null?void 0:s.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var o,s,n;const t=(((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups)??[]).find(a=>a.type===N.REGIONAL_VARIANT_TYPE.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(s=this.config)==null?void 0:s.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var o;const e=(o=this.config)==null?void 0:o.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const o=N.localizeSchema(e,t);return this._localizedSchemaCache={base:e,translations:t,result:o},o}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(c=>c.type===N.REGIONAL_VARIANT_TYPE.LANGUAGES)))return;const o=this._activeLanguage;if(!o||this._metadataTranslationsLang===o&&this._metadataTranslations)return;this._metadataTranslationsLang=o;const s=++this._translationsRequestId,n=e.peek(o);if(n){this._metadataTranslations=n;return}e.getTranslations(o).then(c=>{s===this._translationsRequestId&&(this._metadataTranslations=c)})}open(){var t,i,o,s,n,a,c,d,p;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||o.call(i),this._dispatchPublic(D.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(D.OPEN,{}),e&&((p=(d=(c=this.config)==null?void 0:c.callbacks)==null?void 0:d.onRestore)==null||p.call(d),this._dispatchPublic(D.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(D.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(D.CLOSE,{}),this.requestUpdate()}upload(){var s,n,a,c,d,p,b,f,k,C;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(_=>_.status==="idle"||_.status==="queued");if((n=(s=this.config)==null?void 0:s.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(D.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const o=[...this._store.getState().files.values()].filter(_=>_.status==="idle"||_.status==="queued");this._dispatchPublic(D.UPLOAD_STARTED,{files:o}),(d=(c=(a=this.config)==null?void 0:a.callbacks)==null?void 0:c.onUploadStarted)==null||d.call(c,o),this._engine.uploadAll(),(p=this.config)!=null&&p.minimizeOnUpload&&((b=this.config)==null?void 0:b.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(C=(k=(f=this.config)==null?void 0:f.callbacks)==null?void 0:k.onMinimize)==null||C.call(k),this._dispatchFloatGeometryEvent(D.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,o=new Map(i);let s=!1;for(const n of e){const a=i.get(n.id);a&&(o.set(n.id,{...a,...n}),s=!0)}s&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!V._MODIFIABLE_STATUSES.has(s.status))return;const n=new Map(o);n.set(e,{...s,meta:t!=null?{...s.meta,...t}:s.meta,tags:i??s.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,meta:n,tags:a}of e){const c=t.get(s);!c||!V._MODIFIABLE_STATUSES.has(c.status)||(i.set(s,{...c,meta:n!=null?{...c.meta,...n}:c.meta,tags:a??c.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!V._MODIFIABLE_STATUSES.has(s.status))return;const n={...s.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(o);a.set(e,{...s,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const o=this._store.getState().files,s=new Map(o);let n=!1;for(const a of e){const c=o.get(a);if(!c||!V._MODIFIABLE_STATUSES.has(c.status))continue;const d={...c.taxonodes??{}};i==null?delete d[t]:d[t]=i,s.set(a,{...c,taxonodes:d}),n=!0}n&&this._store.setState({files:s})}updateFileProduct(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!V._MODIFIABLE_STATUSES.has(o.status))return;const s=new Map(i);s.set(e,{...o,product:N.mergeProductPatch(o.product,t)}),this._store.setState({files:s})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,product:n}of e){const a=t.get(s);!a||!V._MODIFIABLE_STATUSES.has(a.status)||(i.set(s,{...a,product:N.mergeProductPatch(a.product,n)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:calc(24px + var(--sfx-up-float-offset-y, 0px)); right:calc(24px + var(--sfx-up-float-offset-x, 0px)); z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; transition:bottom .25s ease, right .25s ease; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-title { font-size:13px; font-weight:600; color:#1e293b; }
      [data-sfx-upload-float] .float-subtitle { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-actions button:hover { background:#f8fafc; color:#374151; }
      [data-sfx-upload-float] .float-actions button svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-progress { padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-progress-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
      [data-sfx-upload-float] .float-progress-label { font-size:12px; color:#475569; }
      [data-sfx-upload-float] .float-progress-pct { font-size:12px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-bar { height:4px; background:#e8edf5; border-radius:2px; overflow:hidden; }
      [data-sfx-upload-float] .float-bar-fill { height:100%; background:#2563eb; border-radius:2px; transition:width .3s ease; }
      [data-sfx-upload-float] .float-bar.segmented { display:flex; }
      [data-sfx-upload-float] .float-bar-seg { height:100%; min-width:2px; }
      [data-sfx-upload-float] .float-bar-seg.ok { background:#22c55e; }
      [data-sfx-upload-float] .float-bar-seg.dup { background:#f59e0b; }
      [data-sfx-upload-float] .float-bar-seg.fail { background:#ef4444; }
      [data-sfx-upload-float] .float-items { max-height:200px; overflow-y:auto; }
      [data-sfx-upload-float] .float-item { display:flex; align-items:center; gap:10px; padding:8px 14px; border-bottom:1px solid #f1f5f9; overflow:hidden; }
      [data-sfx-upload-float] .float-item:last-child { border-bottom:none; }
      [data-sfx-upload-float] .float-item-thumb { width:32px; height:32px; border-radius:6px; background:#f8fafc; display:flex; align-items:center; justify-content:center; color:#94a3b8; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-thumb svg { width:16px; height:16px; }
      [data-sfx-upload-float] .float-item-info { flex:1; min-width:0; overflow:hidden; }
      [data-sfx-upload-float] .float-item-name { font-size:12px; font-weight:500; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      [data-sfx-upload-float] .float-item-size { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-item-done { width:18px; height:18px; border-radius:50%; background:#f0fdf4; color:#22c55e; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-done svg { width:12px; height:12px; }
      [data-sfx-upload-float] .float-item-done.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-item-done.warn svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-tip { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-tip:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }
      [data-sfx-upload-float] .float-item-act { width:24px; height:24px; border:none; background:none; color:#64748b; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-act svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-act:hover { background:#f1f5f9; color:#1e293b; }
      [data-sfx-upload-float] .float-item-act.del:hover { color:#ef4444; }
      [data-sfx-upload-float] .float-item-act.paused { color:#d97706; }
      [data-sfx-upload-float] .float-item-act.paused:hover { color:#d97706; background:#fef3c7; }
      [data-sfx-upload-float] .float-item-act.locate { color:#2563eb; }
      [data-sfx-upload-float] .float-item-act.locate:hover { color:#1d4ed8; background:#eff6ff; }
      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }
      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }
      [data-sfx-upload-float] .float-collapsed-icon.done { color:var(--success, #22c55e); }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:var(--warning, #f59e0b); }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:var(--destructive, #ef4444); }
      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }
      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }
      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }
      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sfxSpin { to{transform:rotate(360deg)} }
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),l.render(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(D.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(l.render(l.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&Ae.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Dr(e||"en");i&&t.on("missingKey",(s,n,a,c,d,p)=>{const b=a.match(/_(?:zero|one|two|few|many|other)$/),f=b&&(p!=null&&p[`defaultValue${b[0]}`])?String(p[`defaultValue${b[0]}`]):c;Mr.handleMissingKey(a,f,n)});const o=(s,n,a)=>xe(s,n,a);this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o,s;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._hostStyleObserver)==null||e.disconnect(),this._hostStyleObserver=null,(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(s=this._engine)==null||s.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const s=this._store.getState().queueConfig;t.queueConfig={...s,concurrency:e.concurrency}}if(e.autoProceed!=null){const s=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...s,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const s=i.defaults;s.resize!==void 0&&(this._setResize=s.resize),s.maxWidth!==void 0&&(this._setMaxW=s.maxWidth),s.maxHeight!==void 0&&(this._setMaxH=s.maxHeight),s.transcode!==void 0&&(this._setTranscode=s.transcode),s.resolution!==void 0&&(this._setResolution=s.resolution),s.protocol!==void 0&&(this._setProtocol=s.protocol),s.resumable!==void 0&&(this._setResumable=s.resumable)}const o=this._lastUploadId;this._hasStoredReview=o!=null&&Ae.exists(o),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,s,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=mt(t.container,e.apiDomain),this._authHeaders=dt(t),this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(o=e.connectors)==null?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const c=await _r(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=c.apiBase,this._authHeaders=c.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(c){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",c),this._showToast(this._formatAuthError(c))}}_formatAuthError(e){var i,o;const t=e instanceof Error?e.message:String(e);return(o=(i=this.config)==null?void 0:i.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var a,c,d,p;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(c=this.config)==null?void 0:c.tusConfig;let o=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;o||(o={})}if(!o)return;const s=(p=(d=this.config)==null?void 0:d.connectors)==null?void 0:p.companionUrl;if(!s)return o;const n=s.replace(/\/+$/,"");return{...o,endpoint:o.endpoint??`${n}/files`,jsonBase:o.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return o=>{const s={},n=se(o);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(s.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(s.postprocess="transcode",s["video-resolution"]=this._setResolution,s.video_protocols=this._setProtocol),t!=null){const c=typeof t=="function"?t():t;c&&(s.opt_force_name=c)}const a=i==null?void 0:i(o);return a&&Object.assign(s,a),Object.keys(s).length>0?s:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new yr(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,o)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:o})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,o=this._storeCtrl.state.t;try{const{fetchMetadataSchema:s,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:c,hasCachedDependencies:d,canReachHub:p,HUB_HEADERS_HINT:b,createTagsAutocomplete:f,createTaxonomyService:k,createUltratagsService:C,createFieldI18nService:_}=await import("@scaleflex/dam-metadata");if(i!==this._metadataSchemaResolveId)return;const E=p(t),I=E||!!t.rawMetadata||c(t.projectUuid),w=E||d(t.projectUuid)||!!t.rawDependencies;if(!I){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig is set but no usable Hub auth is configured — skipping metadata schema and dependencies. ${b}`),this._showToast(o("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let y;t.rawDependencies?y=Promise.resolve(a(t.rawDependencies)):w?y=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(S=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",S),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${b}`)),y=Promise.resolve([]));const[g,m]=await Promise.all([s(this._apiBase,this._authHeaders,t.projectUuid,t),y]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=m,this._metadataAutocomplete=f(this._apiBase,this._authHeaders),this._taxonomyService=k(this._apiBase,this._authHeaders),this._ultratagsService=C(this._apiBase,this._authHeaders),this._fieldI18nService=_(this._apiBase,this._authHeaders),this._metadataSchema=g.productsEnabled?N.injectProductGroup(g,this._storeCtrl.state.t):g;const U=this._metadataSchema.fields.filter(S=>N.isFieldRequired(S,t)).map(S=>S.key);this._dispatchPublic(D.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:U}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(s){console.error("[sfx-uploader] Failed to load metadata schema:",s),this._showToast(o("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let o=!1;const s=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!V._MODIFIABLE_STATUSES.has(a.status))continue;const c=N.resolveForFileWithSchema({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(c.size===0)continue;const d={};for(const p of t.fields){const b=c.get(p.ckey);(b==null?void 0:b.setValue)!==void 0&&(b.hidden||N.isEmpty(a.meta[p.key])&&(d[p.key]=N.coerceSetValueForField(p,b.setValue)))}Object.keys(d).length!==0&&(s.set(a.id,{...a,meta:{...a.meta,...d}}),o=!0)}o&&this._store.setState({files:s})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const o=new Map(t);for(const s of t.values()){if(!V._MODIFIABLE_STATUSES.has(s.status))continue;const n=N.resolveForFileWithSchema({mime:s.type??"",meta:s.meta},e,this._metadataDependencies),a=N.stripHiddenFieldsFromMeta(s.meta,e,n);a!==s.meta&&(o.set(s.id,{...s,meta:a}),i=!0)}i&&this._store.setState({files:o})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const s=new Map(this._store.getState().files);s.set(e,{...o,name:i}),this._store.setState({files:s})}_previewMeta(e){var t;return(t=this._metadataSchema)!=null&&t.productsEnabled?{...e.meta,[N.PRODUCT_REF_FIELD_KEY]:e.product.ref,[N.PRODUCT_POSITION_FIELD_KEY]:e.product.position}:e.meta}_resolvedSchemaFor(e){return!this._metadataSchema||this._metadataDependencies.length===0?null:N.resolveForFileWithSchema({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies)}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:N.shouldEnforceRequiredMetadata(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:N.firstMissingRequiredFieldKey(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?N.firstConflictedFieldKey(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var o;const e=this._isPillExpanded?"card":"pill",t=(o=this._portalContainer)==null?void 0:o.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var o,s,n,a,c,d,p,b,f,k;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(o=this.config)==null?void 0:o.callbacks;for(const[C,_]of e.files){const E=t.files.get(C);if(!E){_.relativeFolder&&this._firedFolders.delete(_.relativeFolder);continue}if(E.status!==_.status)switch(_.status){case"uploading":E.status==="paused"&&(this._dispatchPublic(D.UPLOAD_RESUMED,{file:_}),(s=i==null?void 0:i.onUploadResumed)==null||s.call(i,_));break;case"complete":_.response&&(this._dispatchPublic(D.UPLOAD_COMPLETE,{file:_,response:_.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,_,_.response));break;case"error":case"failed":{const I=new Error(_.error??"Upload failed");this._dispatchPublic(D.UPLOAD_ERROR,{file:_,error:I}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,_,I);break}case"retrying":this._dispatchPublic(D.UPLOAD_RETRY,{file:_,attempt:_.retryCount}),(c=i==null?void 0:i.onUploadRetry)==null||c.call(i,_,_.retryCount);break;case"paused":this._dispatchPublic(D.UPLOAD_PAUSED,{file:_}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,_);break}_.status==="uploading"&&E.progress!==_.progress&&(this._dispatchPublic(D.UPLOAD_PROGRESS,{file:_,progress:_.progress,speed:_.speed}),(p=i==null?void 0:i.onUploadProgress)==null||p.call(i,_,_.progress,_.speed)),_.relativeFolder&&E.status!==_.status&&Mi.has(_.status)&&!this._firedFolders.has(_.relativeFolder)&&this._maybeDispatchFolderComplete(_.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const C=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=C),this._dispatchPublic(D.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:C}),(b=i==null?void 0:i.onTotalProgress)==null||b.call(i,e.totalProgress,e.totalSpeed,C)}if(t.isUploading&&!e.isUploading){const C=[...e.files.values()];if(!C.some(E=>E.status==="cancelled")){const E=C.filter(g=>g.status==="complete"),I=C.filter(g=>g.status==="failed"||g.status==="error");if(E.length===0&&I.length===0)return;const w=this._lastUploadId;if(w!=null){const g=[...E,...I];Ae.save(w,g),this._hasStoredReview=g.length>0}this._dispatchPublic(D.ALL_COMPLETE,{successful:E,failed:I}),(f=i==null?void 0:i.onAllComplete)==null||f.call(i,E,I);const y=(k=this.config)==null?void 0:k.closeOnComplete;if(y!==!1&&y!=null){const g=typeof y=="number"?y:1500;this._closeOnCompleteTimer=setTimeout(()=>{var m,U,S;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(D.COMPLETE_ACTION,{}),(S=(U=(m=this.config)==null?void 0:m.callbacks)==null?void 0:U.onCompleteAction)==null||S.call(U),this.close())},g)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const o=[...t.files.values()].filter(c=>c.relativeFolder===e);if(o.length===0||o.some(c=>!Mi.has(c.status)))return;const s=o.filter(c=>c.status==="complete"),n=o.filter(c=>c.status==="failed"||c.status==="error");s.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(D.FOLDER_COMPLETE,{folder:e,successful:s,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,s,n))}get _mergedSources(){var b;const e=(b=this.config)==null?void 0:b.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Re.filter(f=>f.id!=="url"),this._cachedSources;const t=e.providers.length>0?Sr(e.providers):[],i=e.customSources??[],o=e.coreSources?new Set(e.coreSources):null,s=o?Re.filter(f=>o.has(f.id)):Re,n=e.companionUrl?s:s.filter(f=>f.id!=="url"),a=n.filter(f=>f.id==="device"||f.id==="url"),c=n.filter(f=>f.id!=="device"&&f.id!=="url"),d=new Set,p=[];for(const f of[...a,...t,...c,...i])if(!d.has(f.id)){if(V._RESERVED_IDS.has(f.id)&&f.onActivate){console.warn(`[sfx-uploader] Custom source id "${f.id}" conflicts with a built-in source and was skipped.`);continue}d.add(f.id),p.push(f)}return this._cachedSources=p,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>i.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var c,d,p,b,f;const t=(c=this.config)==null?void 0:c.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((d=this.config)==null?void 0:d.preserveFolderStructure)!==!1;let o=0,s=!1;const n=(k,C,_)=>`${k}\0${C}\0${_}`,a=new Set;for(const k of this._store.getState().files.values())k.status!=="rejected"&&k.status!=="cancelled"&&a.add(n(k.name,k.size,k.relativeFolder??""));for(const k of e){if(kt(k.name))continue;if(s){o++;continue}const C=i?Qs(vr(k)):"",_=this._store.getState(),E=n(k.name,k.size,C);if(a.has(E))continue;const I=k.type||Oi(k.name),w=St({name:k.name,size:k.size,type:I},_.restrictions,_.files);if(w){if($n(w)){s=!0,o++;continue}const m=I.startsWith("image/")&&!pe(I)?URL.createObjectURL(k):null,U={id:$e(),status:"rejected",file:k,remoteUrl:null,name:k.name,size:k.size,type:I,previewUrl:m,duration:null,progress:0,speed:0,bytesUploaded:0,error:w.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Ce,relativeFolder:C};ke(this._store,U),this._dispatchPublic(D.FILE_REJECTED,{file:U,reason:w.message}),(p=t==null?void 0:t.onFileRejected)==null||p.call(t,U,w.message);const S=(b=this.config)==null?void 0:b.rejectedFileAutoRemoveDelay,T=S===!1||S===0||S===void 0?0:S;if(T>0){const F=U.id,B=setTimeout(()=>{this._rejectedTimers.delete(F);const M=this._store.getState().files.get(F);M&&M.status==="rejected"&&ri(this._store,F)},T);this._rejectedTimers.set(F,B)}continue}let y=null;I.startsWith("image/")&&!pe(I)&&(y=URL.createObjectURL(k));const g={id:$e(),status:"idle",file:k,remoteUrl:null,name:k.name,size:k.size,type:I,previewUrl:y,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:null,...Ce,relativeFolder:C};if(ke(this._store,g),a.add(E),this._dispatchPublic(D.FILE_ADDED,{file:g}),(f=t==null?void 0:t.onFileAdded)==null||f.call(t,g),k.type.startsWith("video/")){Sn(k).then(U=>{if(!U)return;const S=this._store.getState(),T=S.files.get(g.id);if(T){const F=new Map(S.files);F.set(g.id,{...T,previewUrl:U}),this._store.setState({files:F})}else URL.revokeObjectURL(U)});const m=document.createElement("video");m.preload="metadata",m.src=URL.createObjectURL(k),m.onerror=()=>{URL.revokeObjectURL(m.src)},m.onloadedmetadata=()=>{const U=m.duration;if(URL.revokeObjectURL(m.src),!isFinite(U))return;const S=this._store.getState(),T=S.files.get(g.id);if(T){const F=new Map(S.files);F.set(g.id,{...T,duration:U}),this._store.setState({files:F})}}}}if(o>0){const k=this._storeCtrl.state.t,C=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(k("tooManyFilesSkipped",{count:o,max:C,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var s,n,a,c,d;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const p=this._videoBlobUrls.get(t.file);p&&(URL.revokeObjectURL(p),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((s=this._engine)==null||s.cancelFile(e)),ri(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const p=[...this._store.getState().files.values()];this._previewFileId=p.length>0?p[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(D.FILE_REMOVED,{file:i}),(d=(c=(a=this.config)==null?void 0:a.callbacks)==null?void 0:c.onFileRemoved)==null||d.call(c,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>se(e)==="image"&&!pe(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,o,s;const e=(o=(i=this.config)==null?void 0:i.auth)==null?void 0:o.container,t=(s=this._authHeaders)==null?void 0:s["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var s,n,a,c;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Ti((n=(s=this.config)==null?void 0:s.similarityCheck)==null?void 0:n.confidence),o=(c=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:c.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Fi(e,{...t,threshold:i,endpoint:o}).then(d=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,d)}).catch(d=>{console.error("[sfx-uploader] Similarity check failed for",e.name,d),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var f,k,C,_;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(E=>E.id);const i=Ti((k=(f=this.config)==null?void 0:f.similarityCheck)==null?void 0:k.confidence),o=(_=(C=this.config)==null?void 0:C.similarityCheck)==null?void 0:_.endpoint,s=new AbortController;this._similarAbort=s;const n=[...e];let a=0,c=0;const d=e.length,p=()=>{if(!s.signal.aborted){if(!this._previewFileId){const E=e.find(I=>{var w;return(((w=this._similarResults.get(I.id))==null?void 0:w.length)??0)>0});E&&(this._previewFileId=E.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},b=()=>{if(!s.signal.aborted)for(;a<Nn&&n.length>0;){const E=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(E.id),Fi(E,{...t,threshold:i,endpoint:o,signal:s.signal}).then(I=>{s.signal.aborted||(this._similarMarkInactive(E.id),this._similarSetResults(E.id,I))}).catch(I=>{s.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",E.name,I),this._similarMarkInactive(E.id),this._similarSetResults(E.id,[]))}).finally(()=>{s.signal.aborted||(a-=1,c+=1,c===d?p():b())})}};b()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),o=i>0?t.slice(i+1).toUpperCase():"";return o&&o.length<=5?o:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(o=>{var s,n;return o.status==="complete"&&!!((n=(s=o.response)==null?void 0:s.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var s,n,a;if(!e)return;const t=jr(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(D.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),o=(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||o===!1)&&t&&window.location.assign(t)}render(){var o;const e=((o=this.config)==null?void 0:o.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?l.html`
        ${this._isOpen&&!this._isMinimized?l.html`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:l.nothing}
        ${this._renderFsOverlay()}
      `:l.html`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return l.nothing;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);return l.html`
      <div
        class="fs-overlay ${this._fsZoom>1?"zoomed":""} ${this._fsDragging?"panning":""}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile?l.html`<video
              class="fs-img"
              src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
              controls
              playsinline
              draggable="false"
              @click=${o=>o.stopPropagation()}
            ></video>`:l.html`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${K.cspStyle(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=V._FS_ZOOM_LEVELS[V._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=V._FS_ZOOM_LEVELS[V._FS_ZOOM_LEVELS.length-1]?l.html`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`:l.html`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${e("close","Close")}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <button
        class="fs-nav prev"
        ?disabled=${i<=0}
        @click=${o=>{o.stopPropagation(),this._navigateFs(-1)}}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        class="fs-nav next"
        ?disabled=${i>=t.length-1}
        @click=${o=>{o.stopPropagation(),this._navigateFs(1)}}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>
    `}_renderProgressHeaderActions(){var a,c,d;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((c=this.config)==null?void 0:c.header)??(t==="modal"?"close":!0),o=!!((d=this.config)!=null&&d.minimizeOnUpload)&&t!=="inline",s=i==="close";if(!o&&!s)return l.nothing;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return l.html`
      <div class="header-actions">
        ${o?l.html`<button
              class="header-btn"
              aria-label=${this._phase==="uploading"?e("minimizeAndContinue","Minimize & continue in background"):e("minimize","Minimize")}
              title=${e("minimize","Minimize")}
              @click=${this._onMinimize}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>`:l.nothing}
        ${s?l.html`<button
              class="header-btn"
              aria-label=${e("close","Close")}
              title=${e("close","Close")}
              @click=${n}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>`:l.nothing}
      </div>
    `}_renderInlineHeader(e){return l.html`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?l.html`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:l.nothing}
          ${e.title?l.html`<h2 class="inline-header-title">${e.title}</h2>`:l.nothing}
        </div>
        ${e.description?l.html`<div class="inline-header-desc">${e.description}</div>`:l.nothing}
      </div>
    `}_renderHeader(){var I,w,y,g,m,U;const e=this._storeCtrl.state.t,t=((I=this.config)==null?void 0:I.mode)??"modal";if(this._phase==="uploading"){const S=this._storeCtrl.state,F=[...S.files.values()].filter(O=>O.status!=="rejected"&&O.status!=="cancelled"),B=F.length,M=F.filter(O=>O.status==="complete").length,ne=S.totalProgress??0;return l.html`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
            <div>
              <div class="float-title">
                ${e("uploadingFiles",{count:B,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:M,total:B})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:Ii(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(ne)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${K.cspStyle({width:`${ne}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const S=[...this._storeCtrl.state.files.values()].filter(F=>F.status!=="rejected"&&F.status!=="cancelled"),T=this._batchOutcome(S,!0);return l.html`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon ${T.outcomeClass}">${T.outcomeIcon}</div>
            <div>
              <div class="float-title">${T.title}</div>
              <div class="float-subtitle">${T.doneSummary}</div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          ${T.segTotal>0?l.html`<div class="header-progress">
                <div class="header-overall-bar" aria-hidden="true">
                  ${T.newCount>0?l.html`<div
                        class="header-seg ok"
                        ${K.cspStyle({width:T.segPct(T.newCount)})}
                      ></div>`:l.nothing}
                  ${T.alreadyExistedCount>0?l.html`<div
                        class="header-seg dup"
                        ${K.cspStyle({width:T.segPct(T.alreadyExistedCount)})}
                      ></div>`:l.nothing}
                  ${T.failed>0?l.html`<div
                        class="header-seg fail"
                        ${K.cspStyle({width:T.segPct(T.failed)})}
                      ></div>`:l.nothing}
                </div>
              </div>`:l.nothing}
        </div>
      `}if(t==="inline"&&((w=this.config)!=null&&w.inlineHeader))return l.nothing;const i=((y=this.config)==null?void 0:y.header)??(t==="modal"?"close":!0);if(i===!1)return l.nothing;const o=t==="modal"?this._onModalDismiss:this._onInlineDismiss,s=i==="back"?l.html`<button
            class="header-btn header-btn-back"
            aria-label=${e("backToAssetPicker","Back to Asset Picker")}
            @click=${o}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>`:l.nothing,n=(g=this.config)==null?void 0:g.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),c=n!==!1&&n!=null&&n.showResumableSwitcher===!0,d=[...this._storeCtrl.state.files.values()],p=d.some(S=>se(S)==="image"&&!pe(S.type)),b=d.some(S=>se(S)==="pdf"),f=d.some(S=>se(S)==="vid"),C=a&&(p||b||f||c)?l.html`<button
            class="header-btn header-btn-settings ${this._showSettings?"on":""}"
            aria-label=${e("uploadSettings","Upload settings")}
            title=${e("uploadSettings","Upload settings")}
            @click=${()=>{this._showSettings=!this._showSettings}}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </button>`:l.nothing,_=(U=(m=this._metadataSchema)==null?void 0:m.regionalVariantsGroups)!=null&&U.length?l.html`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:l.nothing,E=i==="close"?l.html`<button
            class="header-btn header-btn-close"
            aria-label=${e("close","Close")}
            @click=${o}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>`:l.nothing;return l.html`
      <div class="header">
        ${s}
        ${i!=="back"?l.html` <div class="header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>`:l.nothing}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${_} ${C} ${E}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,o=e.filter(y=>y.status==="complete").length,s=e.filter(y=>y.status==="failed"||y.status==="error").length,n=e.filter(y=>y.status==="complete"&&y.alreadyExisted).length,a=Math.max(o-n,0),c=o>0&&s===0&&n>=o,d=t?s>0?"error":n>0?"warn":"done":"",p=l.html`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>`,b=l.html`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>`,f=l.html`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>`,k=s>0?o>0?p:b:n>0?p:f,C=t?s>0?o>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):c?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),_=[];a>0&&_.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&_.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),s>0&&_.push(i("nFailed","{{count}} failed",{count:s}));const E=_.length>0?_.join(" · "):i("allDone","All done"),I=a+n+s;return{completed:o,failed:s,alreadyExistedCount:n,newCount:a,allAlreadyExisted:c,outcomeClass:d,outcomeIcon:k,title:C,doneSummary:E,segTotal:I,segPct:y=>I>0?`${y/I*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:c,newCount:d,outcomeClass:p,outcomeIcon:b,title:f,doneSummary:k,segPct:C}=this._batchOutcome(e,s),_=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return l.html`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s?l.html`<div class="float-collapsed-icon ${p}">${b}</div>`:l.html`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${f}</span>
            ${s?l.nothing:l.html`<span class="float-collapsed-pct">${o}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${s&&_?l.html`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(_)}
                >
                  ${xt}
                </button>`:l.nothing}
            <button title=${i("openUploader","Open uploader")} @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${i("expand","Expand")} @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      `;const E=e.filter(g=>g.status==="failed"||g.status==="error"),I=e.filter(g=>g.status==="complete"&&g.alreadyExisted),w=e.filter(g=>g.status!=="failed"&&g.status!=="error"&&g.status!=="complete"),y=e.filter(g=>g.status==="complete"&&!g.alreadyExisted);return l.html`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${p}">
              ${s?b:l.html`<svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                  </svg>`}
            </div>
            <div>
              <div class="float-title">${f}</div>
              <div class="float-subtitle">
                ${s?k:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Ii(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${s&&_?l.html`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(_)}
                >
                  ${xt}
                </button>`:l.nothing}
            <button title=${i("expand","Expand")} @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${i("collapse","Collapse")} @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">${i("overallProgress","Overall progress")}</span>
            ${s?l.nothing:l.html`<span class="float-progress-pct">${o}%</span>`}
          </div>
          ${s?l.html`<div class="float-bar segmented" role="img" aria-label=${k}>
                ${d>0?l.html`<div
                      class="float-bar-seg ok"
                      ${K.cspStyle({width:C(d)})}
                    ></div>`:l.nothing}
                ${c>0?l.html`<div
                      class="float-bar-seg dup"
                      ${K.cspStyle({width:C(c)})}
                    ></div>`:l.nothing}
                ${a>0?l.html`<div
                      class="float-bar-seg fail"
                      ${K.cspStyle({width:C(a)})}
                    ></div>`:l.nothing}
              </div>`:l.html`<div class="float-bar">
                <div class="float-bar-fill" ${K.cspStyle({width:`${o}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${De.repeat(E,g=>g.id,g=>this._renderFloatItem(g,i))}
          ${De.repeat(I,g=>g.id,g=>this._renderFloatItem(g,i))}
          ${De.repeat(w,g=>g.id,g=>this._renderFloatItem(g,i))}
          ${De.repeat(y,g=>g.id,g=>this._renderFloatItem(g,i))}
        </div>
      </div>
    `}_renderFloatItem(e,t){var o,s,n;const i=e.status==="failed"||e.status==="error";return l.html`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${K.cspStyle(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
        >
          ${e.previewUrl?l.nothing:l.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${Pe(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status==="complete"?l.html`${(o=this.config)!=null&&o.showLocateButton&&((n=(s=e.response)==null?void 0:s.file)!=null&&n.uuid)?l.html`<button
                    class="float-item-act locate"
                    title=${t("locate","Locate")}
                    aria-label=${t("locate","Locate")}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${xt}
                  </button>`:l.nothing}
              ${e.alreadyExisted?l.html`<div class="float-item-tip">
                    <div
                      class="float-item-done warn"
                      aria-label=${t("alreadyInYourLibrary","Already in your library")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <span class="float-item-tooltip"
                      >${t("alreadyInYourLibrary","Already in your library")}</span
                    >
                  </div>`:l.html`<div class="float-item-tip">
                    <div class="float-item-done" aria-label=${t("uploaded","Uploaded")}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span class="float-item-tooltip">${t("uploaded","Uploaded")}</span>
                  </div>`}`:i?l.html`<button
                    class="float-item-retry"
                    title=${t("retry","Retry")}
                    aria-label=${t("retry","Retry")}
                    @click=${()=>{var a;this._ensureEngine(),(a=this._engine)==null||a.retryFile(e.id)}}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 2v6h-6" />
                      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                      <path d="M3 22v-6h6" />
                      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                    </svg>
                  </button>
                  <div class="float-item-error-wrap">
                    <svg
                      class="float-item-error-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span class="float-item-tooltip"
                      >${e.error||t("uploadFailed","Upload failed")}</span
                    >
                  </div>`:e.status==="paused"?l.html` <button
                      class="float-item-act paused"
                      title=${t("resume","Resume")}
                      aria-label=${t("resumeUpload","Resume upload")}
                      @click=${()=>{var a;return(a=this._engine)==null?void 0:a.resumeFile(e.id)}}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                    <button
                      class="float-item-act del"
                      title=${t("remove","Remove")}
                      aria-label=${t("removeFile","Remove file")}
                      @click=${()=>this._removeFile(e.id)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>`:l.html`
                    ${e.status==="uploading"&&e.isTus?l.html`<button
                          class="float-item-act"
                          title=${t("pause","Pause")}
                          aria-label=${t("pauseUpload","Pause upload")}
                          @click=${()=>{var a;return(a=this._engine)==null?void 0:a.pauseFile(e.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </button>`:l.nothing}
                    ${e.status==="uploading"||e.status==="queued"||e.status==="retrying"?l.html`<button
                          class="float-item-act del"
                          title=${t("remove","Remove")}
                          aria-label=${t("removeFile","Remove file")}
                          @click=${()=>this._removeFile(e.id)}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:l.nothing}
                    <div class="float-item-spinner"></div>
                  `}
        </div>
      </div>
    `}_renderPreviewLayout(e){var E,I,w,y,g,m,U,S,T;if(e.length===0)return l.nothing;const t=this._storeCtrl.state.t,i=e,o=i.find(F=>F.id===this._previewFileId)??i[0],s=((E=o.name.split(".").pop())==null?void 0:E.toUpperCase())||"";new Date(o.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((F,B)=>F+(B.size||0),0),c=!!((w=(I=this.config)==null?void 0:I.similarityCheck)!=null&&w.enabled)&&this._phase==="ready",d=c?i.filter(F=>se(F)==="image"&&!pe(F.type)&&!this._similarResults.has(F.id)).map(F=>F.id):[],p=Math.min(d.length,de),b=p>0&&this._similarSelectedIds.size>=p,f=this._similarSelectedIds.size>=de,k=this._similarResults.get(o.id),C=k!==void 0,_=C?this._previewPanelTab:"details";return l.html`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${K.cspStyle({flex:String(this._splitPct)})}>
          ${((y=this.config)==null?void 0:y.mode)==="inline"&&((g=this.config)!=null&&g.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):l.nothing}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${Pe(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${zi(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((m=this.config)==null?void 0:m.showLocateButton)??!1}
            .showCopyCdnButton=${((U=this.config)==null?void 0:U.showCopyCdnButton)??!1}
            .showCheckSimilar=${c}
            .selectMode=${c}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${b}
            .selectionFull=${f}
            .maxSelection=${de}
            .previewOpen=${!0}
            .searchRunIds=${this._similarRunIds}
            .searchActiveIds=${this._similarActiveIds}
            .searchResults=${this._similarResults}
            .directory=${this._allowFolderUpload}
            ?drag-active=${this._bodyDragOver}
            @source-click=${this._onDropTileSourceClick}
          ></sfx-file-list>
        </div>
        <div
          class="preview-divider"
          @pointerdown=${this._onSplitPointerDown}
          @pointermove=${this._onSplitPointerMove}
          @pointerup=${this._onSplitPointerUp}
          @lostpointercapture=${this._onSplitPointerUp}
        ></div>
        <div class="preview-panel" ${K.cspStyle({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():l.html`
                <div class="preview-panel-header">
                  <button
                    class="preview-back-btn"
                    @click=${()=>{this._previewFileId=null}}
                    aria-label=${t("backToFileList","Back to file list")}
                    title=${t("back","Back")}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </button>
                  <span class="preview-header-name" title=${o.name}
                    >${o.name}</span
                  >
                  <div class="preview-header-actions">
                    ${o.previewUrl||o.type.startsWith("video/")&&o.file?l.html`
                          <button
                            @click=${()=>{this._fullscreenPreviewUrl=o.previewUrl,this._fullscreenVideoFile=o.type.startsWith("video/")&&o.file?o.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
                            title=${t("fullscreen","Fullscreen")}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="15 3 21 3 21 9" />
                              <polyline points="9 21 3 21 3 15" />
                              <line x1="21" y1="3" x2="14" y2="10" />
                              <line x1="3" y1="21" x2="10" y2="14" />
                            </svg>
                          </button>
                        `:l.nothing}
                    <button
                      @click=${()=>{this._previewFileId=null}}
                      title=${t("close","Close")}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
                ${C?l.html`
                      <div class="preview-tabs" role="tablist">
                        <button
                          class="preview-tab ${_==="details"?"active":""}"
                          role="tab"
                          aria-selected=${_==="details"}
                          @click=${()=>{this._previewPanelTab="details"}}
                        >
                          ${t("details","Details")}
                        </button>
                        <button
                          class="preview-tab ${_==="similar"?"active":""}"
                          role="tab"
                          aria-selected=${_==="similar"}
                          @click=${()=>{this._previewPanelTab="similar"}}
                        >
                          <span>${t("similarTab","Similar")}</span>${k&&k.length>0?l.html`<span class="preview-tab-count">${k.length}</span>`:l.nothing}
                        </button>
                      </div>
                    `:l.nothing}
                ${_==="similar"?this._renderSimilarPanel(o,k??[]):l.html`
                      <div class="preview-details-body">
                        ${o.type.startsWith("video/")&&o.file?l.html`
                              <div class="preview-media-area">
                                <div class="preview-img-wrap">
                                  <video
                                    class="preview-image"
                                    src=${this._getVideoBlobUrl(o.file)}
                                    controls
                                    playsinline
                                  ></video>
                                </div>
                                <button
                                  class="preview-nav prev"
                                  ?disabled=${i.indexOf(o)===0}
                                  @click=${()=>this._navigatePreview(i,-1)}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                  >
                                    <polyline points="15 18 9 12 15 6" />
                                  </svg>
                                </button>
                                <button
                                  class="preview-nav next"
                                  ?disabled=${i.indexOf(o)===i.length-1}
                                  @click=${()=>this._navigatePreview(i,1)}
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                    stroke-linecap="round"
                                  >
                                    <polyline points="9 6 15 12 9 18" />
                                  </svg>
                                </button>
                              </div>
                            `:o.previewUrl?l.html`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${o.previewUrl}
                                      alt=${o.name}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(o)===0}
                                    @click=${()=>this._navigatePreview(i,-1)}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2.5"
                                      stroke-linecap="round"
                                    >
                                      <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                  </button>
                                  <button
                                    class="preview-nav next"
                                    ?disabled=${i.indexOf(o)===i.length-1}
                                    @click=${()=>this._navigatePreview(i,1)}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2.5"
                                      stroke-linecap="round"
                                    >
                                      <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                  </button>
                                </div>
                              `:l.html`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${se(o)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${nt.getFileTypeIconUrl(s)}
                                      alt="${s?t("extFile","{{ext}} file",{ext:s}):t("file","File")}"
                                      @error=${F=>{const B=F.target,M=nt.getDefaultFileTypeIconUrl();!B.dataset.fallback&&B.src!==M&&(B.dataset.fallback="1",B.src=M)}}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(o)===0}
                                    @click=${()=>this._navigatePreview(i,-1)}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2.5"
                                      stroke-linecap="round"
                                    >
                                      <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                  </button>
                                  <button
                                    class="preview-nav next"
                                    ?disabled=${i.indexOf(o)===i.length-1}
                                    @click=${()=>this._navigatePreview(i,1)}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2.5"
                                      stroke-linecap="round"
                                    >
                                      <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                  </button>
                                </div>
                              `}
                        ${this._metadataSchema&&((S=this.config)!=null&&S.metadataConfig)?l.html`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${s}${o.size?` · ${Pe(o.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                              </div>
                            </div>`:l.nothing}
                        ${this._metadataSchema&&((T=this.config)!=null&&T.metadataConfig)?l.html`
                              <div
                                class="preview-metadata"
                                @field-blur=${this._onPreviewMetadataBlur}
                                @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                              >
                                <sfx-metadata-form
                                  .schema=${this._localizedMetadataSchema}
                                  .meta=${this._previewMeta(o)}
                                  .config=${this._effectiveMetadataConfig}
                                  .autocomplete=${this._metadataAutocomplete}
                                  .taxonomyService=${this._taxonomyService}
                                  .ultratags=${this._ultratagsService}
                                  .defaultLanguage=${this._metadataDefaultLanguage}
                                  .taxonodes=${o.taxonodes??null}
                                  .resolvedSchema=${this._resolvedSchemaFor(o)}
                                  .dependencies=${this._metadataDependencies}
                                ></sfx-metadata-form>
                              </div>
                            `:l.html`
                              <div class="preview-file-info-panel">
                                <div
                                  class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                                  @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                                >
                                  <span>${t("fileInfo","File info")}</span>
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                  >
                                    <polyline points="6 9 12 15 18 9" />
                                  </svg>
                                </div>
                                <div
                                  class="preview-file-info-body ${this._fileInfoOpen?"open":""}"
                                >
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">
                                      ${t("fileName","File name")}
                                    </div>
                                    <div class="preview-file-info-val">${o.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${s}</div>
                                  </div>
                                  ${o.size?l.html`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${Pe(o.size)}
                                          </div>
                                        </div>
                                      `:l.nothing}
                                  ${this._previewDims!=="—"?l.html`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("dimensions","Dimensions")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${this._previewDims}
                                          </div>
                                        </div>
                                      `:l.nothing}
                                </div>
                              </div>
                            `}
                      </div>
                    `}
              `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return t.length===0?l.html`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound","No similar assets found")}</b>
          <span>${i("noSimilarHint","This image looks unique in your library.")}</span>
        </div>
      `:l.html`
      <div class="psim-body">
        ${t.map(o=>{const s=Math.round(o.score*100);return l.html`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score>=.85?"high":""}">${s}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(o.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                ${o.url?l.html`<img src=${o.url} alt="" />`:l.nothing}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(o)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(o)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var b;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(f=>se(f)==="image"&&!pe(f.type)),o=t.some(f=>se(f)==="pdf"),s=t.some(f=>se(f)==="vid"),n=(b=this.config)==null?void 0:b.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,c=f=>{switch(f){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},d=f=>{switch(f){case"hls":return e("protocolHls","HLS")}},p=f=>k=>{const C=parseInt(k.target.value,10);f(Number.isFinite(C)?C:0)};return l.html`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name">${e("uploadSettings","Upload settings")}</span>
        <div class="preview-header-actions">
          <button
            @click=${()=>{this._showSettings=!1}}
            title=${e("close","Close")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div class="settings-body">
        ${i||o?l.html`
              <!-- Image settings (only when the queue contains an image or PDF) -->
              <div class="sgroup-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
                </svg>
                ${e("imageSettings","Image settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("resizeImages","Resize Images")}</span>
                <span
                  class="info-i"
                  data-tip=${e("resizeImagesInfo","Scale down large images to the maximum dimensions below before uploading.")}
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" /></svg
                ></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResize?"on":""}"
                  role="switch"
                  aria-checked=${this._setResize}
                  aria-label=${e("resizeImages","Resize Images")}
                  @click=${()=>{this._setResize=!this._setResize}}
                ></button>
              </div>
              <div class="sfields ${this._setResize?"":"dep-off"}">
                <div class="sfield">
                  <label>${e("maxWidth","Max Width")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxW)}
                      @input=${p(f=>this._setMaxW=f)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
                <div class="sfield">
                  <label>${e("maxHeight","Max Height")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxH)}
                      @input=${p(f=>this._setMaxH=f)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:l.nothing}
        ${s?l.html`
              <!-- Video settings (only when the queue contains a video) -->
              <div class="sgroup-title sgroup-title-spaced">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m22 8-6 4 6 4V8Z" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
                ${e("videoSettings","Video settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("transcodeVideo","Transcode video")}</span>
                <span
                  class="info-i"
                  data-tip=${e("transcodeVideoInfo","Re-encode videos into adaptive streaming formats for smoother playback.")}
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" /></svg
                ></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setTranscode?"on":""}"
                  role="switch"
                  aria-checked=${this._setTranscode}
                  aria-label=${e("transcodeVideo","Transcode video")}
                  @click=${()=>{this._setTranscode=!this._setTranscode,this._setTranscode||(this._setResolutionOpen=!1)}}
                ></button>
              </div>
              <div
                class="sfield sfield-block ${this._setTranscode?"":"dep-off"} ${this._setResolutionOpen?"open":""}"
              >
                <label>${e("resolution","Resolution")}</label>
                <div
                  class="ssel"
                  @click=${()=>{this._setResolutionOpen=!this._setResolutionOpen}}
                >
                  <span>${c(this._setResolution)}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                ${this._setResolutionOpen&&this._setTranscode?l.html`
                      <div class="smenu">
                        ${qn.map(f=>l.html`
                            <div
                              class="sopt ${f===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=f,this._setResolutionOpen=!1}}
                            >
                              ${c(f)}
                              ${f===this._setResolution?l.html`<svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>`:l.nothing}
                            </div>
                          `)}
                      </div>
                    `:l.nothing}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${Vn.map(f=>l.html`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=f}}
                    >
                      <span class="sradio ${this._setProtocol===f?"on":""}"></span>
                      <span class="sradio-lbl">${d(f)}</span>
                    </div>
                  `)}
              </div>
            `:l.nothing}
        ${a?l.html`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${e("resumeUploads","Resume uploads")}</span>
                <span
                  class="info-i"
                  data-tip=${e("resumeUploadsInfo","Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go")}
                  ><svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" /></svg
                ></span>
                <span
                  class="sbeta"
                  data-tip=${e("betaInfo","Beta functionality — you may experience performance issues in some cases")}
                  >${e("beta","Beta")}</span
                >
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable?"on":""}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${e("resumeUploads","Resume uploads")}
                  @click=${()=>{var f;this._setResumable=!this._setResumable,(f=this._engine)==null||f.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:l.nothing}
      </div>
    `}_navigatePreview(e,t){var s;const o=e.findIndex(n=>n.id===this._previewFileId)+t;if(o>=0&&o<e.length){const n=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[o].id}}_renderBody(){var C,_,E,I,w,y,g,m,U,S,T,F,B;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],o=i.filter(M=>M.status==="idle"||M.status==="queued"||M.status==="error"||M.status==="failed"),s=this._phase,n=zi(e.restrictions),a=i.length>0,d=!!((_=(C=this.config)==null?void 0:C.similarityCheck)!=null&&_.enabled)&&s==="ready",p=d?i.filter(M=>se(M)==="image"&&!pe(M.type)&&!this._similarResults.has(M.id)).map(M=>M.id):[],b=Math.min(p.length,de),f=b>0&&this._similarSelectedIds.size>=b,k=this._similarSelectedIds.size>=de;return l.html`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-locate=${this._onFileLocate}
        @file-copy-cdn=${this._onFileCopyCdn}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
        @fill-metadata=${this._onFillMetadata}
        @require-metadata=${this._onRequireMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @check-similar-enter=${this._onCheckSimilarEnter}
        @check-similar-cancel=${this._onCheckSimilarCancel}
        @check-similar-run=${this._onCheckSimilarRun}
        @check-similar-single=${this._onCheckSimilarSingle}
        @similar-toggle=${this._onSimilarToggle}
        @similar-select-all=${this._onSimilarSelectAll}
        @check-similar-search-cancel=${this._onSimilarSearchCancel}
        @similar-open-results=${this._onSimilarOpenResults}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @cancel-upload=${this._onCancelUpload}
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
          class="body ${a?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${a?this._onBodyDragEnter:l.nothing}
          @dragover=${a?this._onBodyDragOver:l.nothing}
          @dragleave=${a?this._onBodyDragLeave:l.nothing}
          @drop=${a?this._onBodyDrop:l.nothing}
        >
          ${((E=this.config)==null?void 0:E.mode)==="inline"&&((I=this.config)!=null&&I.inlineHeader)&&!this._previewFileId&&s!=="uploading"&&s!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):l.nothing}
          ${this._isReviewing?l.html`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((w=this.config)==null?void 0:w.showLocateButton)??!1}
                  .showCopyCdnButton=${((y=this.config)==null?void 0:y.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:l.html`
                ${a?l.nothing:l.html`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((g=this.config)==null?void 0:g.sourcesLayout)??"pills"}
                        .mode=${((m=this.config)==null?void 0:m.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?l.html`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:l.nothing}`}
                ${a?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):l.html`
                        <div class="asset-count">
                          ${i.length} ${i.length===1?"file":"files"} ·
                          ${Pe(i.reduce((M,ne)=>M+(ne.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${s!=="uploading"&&s!=="complete"}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((U=this.config)==null?void 0:U.showLocateButton)??!1}
                          .showCopyCdnButton=${((S=this.config)==null?void 0:S.showCopyCdnButton)??!1}
                          .showCheckSimilar=${d}
                          .selectMode=${d}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${f}
                          .selectionFull=${k}
                          .maxSelection=${de}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:l.nothing}
              `}
        </div>

        ${a?l.html`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${s==="uploading"?"uploading":s==="complete"?"done":"idle"}
                .fileCount=${s==="uploading"||s==="complete"?i.filter(M=>M.status!=="rejected"&&M.status!=="cancelled").length:o.length}
                .failedCount=${i.filter(M=>M.status==="failed"||M.status==="error").length}
                .showFillMetadata=${!!(((T=this.config)==null?void 0:T.showFillMetadata)??((F=this.config)==null?void 0:F.metadataConfig))}
                .requireMetadataFirst=${s==="ready"?this._hasMetadataIssues:!1}
                .showCheckSimilar=${!1}
                .selectMode=${d&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${b}
                .allSelected=${f}
              ></sfx-actions-bar>
            `:l.nothing}
        ${this._showUrlDialog?l.html`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:l.nothing}
        ${this._showCameraDialog?l.html`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:l.nothing}
        ${this._showScreenCastDialog?l.html`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:l.nothing}
        ${this._activeConnector&&((B=this.config)!=null&&B.connectors)?l.html`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${this._activeConnector==="google-drive"&&this.config.connectors.googlePicker?l.html`
                        <sfx-google-picker-view
                          .t=${t}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:Li.has(this._activeConnector)?l.html`
                          <sfx-search-provider-browser
                            .t=${t}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:l.html`
                          <sfx-provider-browser
                            .t=${t}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-provider-browser>
                        `}
                </div>
              </div>
            `:l.nothing}
        ${this._bulkMetadataOpen&&this._metadataSchema?l.html`
              <sfx-bulk-metadata-modal
                .schema=${this._localizedMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(M=>V._MODIFIABLE_STATUSES.has(M.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:l.nothing}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(s=>s.id===this._previewFileId);if(i===-1)return;const o=i+e;if(o>=0&&o<t.length){const s=t[o];this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._previewFileId=s.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},V.styles=l.css`
    :host {
      display: block;
      height: inherit;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      /* Literal blue defaults first: browsers without color-mix keep a valid
         gradient/glow (a var() fallback would NOT kick in here, since these
         custom props are defined). The @supports block below upgrades them to
         shades derived from --sfx-up-primary so a host that sets only --primary
         (or --sfx-up-primary) gets a cohesive single-hue button. Hosts can
         still override --primary-hover/--primary-mid/--accent explicitly. */
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-warning: var(--warning, #f59e0b);
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
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-modal-max-width: 1100px;
      --sfx-up-bulk-modal-width: 980px;
      --sfx-up-bulk-modal-height: 82vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
      /* Fullscreen overlay z-index stack — single source of truth so
         mobile overrides don't drift out of sync with base values. */
      --sfx-fs-z: 10000;
      --sfx-fs-controls-z: 10001;
    }

    /* Derive the hover/mid/bg/glow shades from --sfx-up-primary so a single
       custom --primary produces a cohesive button. Gated on color-mix support
       so the literal-blue defaults above stay intact on older browsers. Hosts
       that set --primary-hover/--primary-mid/--accent still win via the var()
       fallbacks. */
    @supports (color: color-mix(in srgb, red, blue)) {
      :host {
        --sfx-up-primary-hover: var(
          --primary-hover,
          color-mix(in srgb, var(--sfx-up-primary) 82%, #000)
        );
        --sfx-up-primary-mid: var(
          --primary-mid,
          color-mix(in srgb, var(--sfx-up-primary) 80%, #fff)
        );
        --sfx-up-primary-bg: var(--accent, color-mix(in srgb, var(--sfx-up-primary) 10%, #fff));
        --sfx-up-primary-glow: color-mix(in srgb, var(--sfx-up-primary) 28%, transparent);
      }
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      overflow: hidden;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: var(--sfx-up-modal-max-width, 1100px);
      height: var(--sfx-up-max-height, 88vh);
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
      /* Lift the header (and its overflowing children, e.g. the regional
         settings dropdown) above the body. The body is position:relative,
         so without this its subtree — including the "View last upload" pill
         — would paint on top of the dropdown regardless of the dropdown's
         own z-index. */
      position: relative;
      z-index: 2;
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
      /* Transparent by default — the filled background appears only on hover. */
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background 0.15s,
        color 0.15s;
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
      /* 8px gap from the settings gear to its left (when present). The button
         group is right-aligned by .header-title's flex:1, not by an auto
         margin — so this fixed margin only adds the gap, keeping the close
         button flush to the right padding edge. */
      margin-left: 8px;
    }

    /* Regional-settings sits to the left of the gear; same 8px gap rule. */
    .header-regional {
      margin-right: 8px;
    }

    /* Settings gear sits just left of the close button (title's flex:1 pushes
       the button group to the right). No right margin so that in inline mode —
       where there is no close button — the gear lines up with the right padding
       edge, matching the preview panel's close button below it. The gap to the
       close button (when present) comes from .header-btn-close's margin-left. */
    .header-btn-settings {
      margin-right: 0;
    }
    /* Active (settings open): only the icon turns brand-blue — no persistent
       background fill. The fill still appears on hover, like every other icon. */
    .header-btn-settings.on {
      background: none;
      color: var(--sfx-up-primary, #2563eb);
    }
    .header-btn-settings.on:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    /* --- Responsive header buttons --- */
    @media (max-width: 768px) {
      .header-btn {
        width: 28px;
        height: 28px;
      }
      .header-btn svg {
        width: 14px;
        height: 14px;
      }
    }
    @media (max-width: 480px) {
      .header-btn {
        width: 26px;
        height: 26px;
      }
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
      min-width: 0;
      background: var(--sfx-up-bg, #fff);
      /* Establish a stacking context so descendants like the
         .last-upload-pill (z-index: 10) stay contained beneath the
         header (z-index: 2) instead of leaking into the modal-level
         stack and painting over the regional-settings dropdown. */
      position: relative;
      z-index: 0;
    }

    .file-grid-side {
      min-width: 0;
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-radius: 8px;
      position: relative;
    }

    .body.body-drag-over::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    /* In preview mode, keep body blue but mask the preview side white */
    .body.body-drag-over.has-preview::after {
      display: none;
    }

    .body.body-drag-over .file-grid-side {
      position: relative;
    }

    .body.body-drag-over .file-grid-side::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    .body.body-drag-over .file-grid-header {
      background: transparent;
    }

    .body.body-drag-over .preview-divider,
    .body.body-drag-over .preview-panel {
      background: var(--sfx-up-bg, #fff);
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      padding: 0 0 0 8px;
      animation: bodyReveal 0.35s ease both;
    }

    .body.has-files.has-preview {
      padding-right: 0;
    }

    @keyframes bodyReveal {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    /* "View last upload" pill — shown on the drop-zone screen when
       sessionStorage contains a previous batch */
    .last-upload-pill {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
    .last-upload-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }
    .last-upload-pill:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .last-upload-pill svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .asset-count {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      --sfx-inline-pad: 24px;
      border: none;
      border-radius: 0;
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      height: 100%;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: none;
      animation: inlineIn 0.25s ease;
    }

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 24px;
    }
    .inline-header-top {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .inline-header-accent {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .inline-header-accent .accent-line {
      width: 32px;
      height: 3px;
      border-radius: 2px;
      background: var(--sfx-up-primary);
    }
    .inline-header-accent span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: var(--sfx-up-primary);
    }
    .inline-header-title {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      letter-spacing: -0.4px;
      max-width: 770px;
    }
    .inline-header-desc {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #6b7280);
      line-height: 1.5;
      max-width: 770px;
    }

    .inline .content {
      max-width: var(--sfx-up-content-max-width, 1600px);
      align-self: center;
      width: 100%;
    }

    /* When the preview sidebar is open, let the layout use the full
       browser width so the panel sits flush against the right edge. */
    .inline .content:has(.has-preview) {
      max-width: none;
    }

    .inline.no-files .content {
      flex: 1;
      min-height: 0;
    }

    /* Inline: body fits within the remaining space after the header;
       padding: 0 in both states so the header never jumps;
       children use --sfx-inline-pad for horizontal spacing. */
    .inline .body {
      flex: 1;
      overflow: hidden;
      padding: 0;
      min-height: 0;
    }
    .inline .body.has-files {
      flex: 1;
      overflow: hidden;
    }
    .inline .asset-count {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .file-grid-header {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .body > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
      --sfx-grid-pad-r: var(--sfx-inline-pad);
    }
    .inline .file-grid-side > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
    }

    /* --- Preview split layout --- */
    /* Modal grid view: bigger tiles (≈4 per row at the 1100px modal width) so
       the Details / Check similar buttons fit with their text labels instead of
       collapsing to icons (a tile must stay wider than the 208px icon cutoff in
       file-item.ts). Scoped to the non-preview modal grid only — inline mode and
       the preview split layout keep their own grid-min, and the file-list
       ≤768/≤440 column breakpoints override grid-template-columns entirely, so
       they're unaffected. */
    .modal-card .body > sfx-file-list {
      --sfx-up-grid-min: 220px;
    }

    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 68;
      min-width: 0;
      min-height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .preview-layout .file-grid-side::after {
      display: none;
    }

    .preview-layout sfx-file-list {
      padding-right: 6px;
      --sfx-scrollbar-w: 14px;
      --sfx-scrollbar-inset-left: 2px;
      --sfx-scrollbar-inset-right: 6px;
    }

    /* NOTE: scrollbar border-radius is hardcoded to 6px in sfx-file-list */

    .file-grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--sfx-up-bg, #fff);
    }

    .file-grid-header-text {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
    }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 0;
    }

    .preview-divider {
      width: 9px;
      flex-shrink: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-divider::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      /* Sit flush against the panel's left edge so the header's
         border-bottom continues from this line without a gap. */
      right: 0;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: '';
      width: 3px;
      height: 28px;
      border-radius: 2px;
      background: var(--sfx-up-border, #d0d7e2);
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 1;
    }

    .preview-divider:hover::after,
    .preview-layout.resizing .preview-divider::after {
      opacity: 1;
    }

    .preview-layout.resizing {
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-layout.resizing * {
      pointer-events: none;
    }

    .preview-layout.resizing .preview-divider {
      pointer-events: auto;
    }

    .preview-panel {
      flex: 32;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
    }

    .preview-panel::-webkit-scrollbar,
    .preview-details-body::-webkit-scrollbar {
      width: 12px;
    }
    .preview-panel::-webkit-scrollbar-track,
    .preview-details-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .preview-panel::-webkit-scrollbar-thumb,
    .preview-details-body::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 6px;
    }
    .preview-panel::-webkit-scrollbar-thumb:hover,
    .preview-details-body::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
      background-clip: padding-box;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      /* Symmetric vertical padding so the row is evenly centered; right
         padding matches the main header's (24px) so the panel's close
         button lines up vertically with the header's close-all button. */
      padding: 12px 24px 12px 16px;
      flex-shrink: 0;
      box-sizing: border-box;
      min-height: 54px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }
    /* Settings panel only: right padding 16px so the close ✕ lines up with the
       toggles below it (settings-body padding is 16px). The file-preview header
       keeps 24px. */
    .preview-panel-header.settings-header {
      padding-right: 16px;
    }

    /* Mobile back-arrow — hidden by default, shown at <=768px to give
       a clear "return to file list" affordance on small screens.
       Use !important because .preview-panel-header button below has
       higher specificity and would otherwise force display: flex. */
    .preview-panel-header button.preview-back-btn {
      display: none;
    }
    @media (max-width: 768px) {
      .preview-panel-header button.preview-back-btn {
        display: inline-flex;
      }
    }

    .preview-header-actions {
      display: flex;
      align-items: center;
      /* 8px to match the header's gear↔close gap, so the second icon
         (fullscreen) lines up vertically with the header's gear. */
      gap: 8px;
      flex-shrink: 0;
    }

    .preview-header-name {
      flex: 1;
      min-width: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      font-family: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Mirror the main header's close-all button (.header-btn) so the panel's
       close button matches it exactly and aligns on the same vertical line. */
    .preview-panel-header button {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      /* Transparent by default — filled background appears only on hover. */
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition:
        background 0.15s,
        color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    /* --- Details / Similar tab switcher (preview side-panel) --- */
    .preview-tabs {
      display: flex;
      align-items: center;
      gap: 4px;
      /* Symmetric vertical padding so the row is evenly centered. */
      padding: 8px 16px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
    }
    .preview-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 30px;
      padding: 0 12px;
      border: none;
      background: none;
      border-bottom: 2px solid transparent;
      color: var(--sfx-up-text-muted, #5b6e82);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition:
        color 0.15s,
        border-color 0.15s;
    }
    .preview-tab:hover {
      color: var(--sfx-up-text, #37414b);
    }
    .preview-tab.active {
      color: var(--sfx-up-primary, #2563eb);
      border-bottom-color: var(--sfx-up-primary, #2563eb);
    }
    .preview-tab-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* Equal width + height so single-digit counts render as a perfect
         circle. Padding stays out of the way; for ≥4-digit counts the
         min-width grows but the radius keeps the ends rounded. */
      box-sizing: border-box;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 999px;
      /* Filled chip: brand-blue background with white text. Stays the same
         on the active tab — only the underline and tab text colour change. */
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 10.5px;
      font-weight: 600;
      line-height: 1;
    }

    /* --- Details tab body --- */
    /* Mirrors .psim-body's layout role: takes the remaining height in the
       .preview-panel flex column and scrolls internally, so the header +
       tabs stay pinned. Keeps Details and Similar behaviour identical.
       Scrollbar styling is shared with .preview-panel above. */
    .preview-details-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
    }

    /* --- Similar-assets panel body --- */
    /* Always exactly 2 cards per row, regardless of how many similar there are
       or how wide the panel is dragged — consistent, never a lone ballooned
       card or a single column. minmax(0, 1fr) lets columns shrink cleanly. */
    .psim-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 4px 16px 16px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: max-content;
      gap: 12px;
      align-content: start;
    }
    /* Identical to .tile in file-item.ts. */
    .psim-card {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: box-shadow 0.15s;
    }
    .psim-card:hover {
      box-shadow:
        0 2px 6px rgba(0, 0, 0, 0.06),
        0 6px 16px rgba(0, 0, 0, 0.08);
    }
    /* Identical to .preview in file-item.ts (checker bg + 16/10). */
    .psim-iw {
      position: relative;
      aspect-ratio: 16 / 10;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 10px 10px 0 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
    }
    .psim-iw img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .psim-score {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 2;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .psim-score.high {
      color: var(--sfx-up-success, #15803d);
    }
    .psim-open {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 2;
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* Revealed on card hover (keyboard focus also reveals it). */
      opacity: 0;
      transform: scale(0.92);
      transition:
        opacity 0.15s ease,
        transform 0.15s ease;
    }
    .psim-card:hover .psim-open,
    .psim-open:focus-visible {
      opacity: 1;
      transform: scale(1);
    }
    .psim-open svg {
      width: 13px;
      height: 13px;
    }
    /* Identical to .info in file-item.ts. */
    .psim-foot {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }
    .psim-foot-name {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text, #111827);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .psim-foot-meta {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #5b6e82);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }
    .psim-empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: var(--sfx-up-text-muted, #94a3b8);
      padding: 40px;
      text-align: center;
    }
    .psim-empty-ic {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .psim-empty-ic svg {
      width: 22px;
      height: 22px;
    }
    .psim-empty b {
      color: var(--sfx-up-text-secondary, #475569);
      font-size: 16px;
      font-weight: 500;
    }
    .psim-empty span {
      font-size: 14px;
    }

    /* --- Upload settings panel (global) --- */
    /* overflow:visible (not auto) so a first-row [data-tip] tooltip can extend
       above the row without being clipped — vertical scrolling, when the
       content is taller than the panel, is handled by the parent .preview-panel
       (which already scrolls). Horizontal overflow is bounded by the tooltip's
       own max-width (≤ row width), so nothing escapes the panel sideways. */
    .settings-body {
      flex: 1;
      min-height: 0;
      overflow: visible;
      padding: 8px 16px 16px 16px;
    }
    .sgroup-title {
      display: flex;
      align-items: center;
      gap: 8px;
      /* Design token: font-medium · 16/24, color main/foreground. */
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      margin: 12px 0 16px;
    }
    .sgroup-title-spaced {
      margin-top: 28px;
    }
    .sgroup-title svg {
      width: 20px;
      height: 20px;
      color: #8b9cae;
    }
    .srow {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      /* Positioning context for the [data-tip] tooltip so it centres inside the
         row (never wider than the row → never clipped by the panel edges). */
      position: relative;
    }
    .srow-spaced {
      margin-top: 24px;
    }
    .srow-lbl {
      font-size: 16px;
      color: var(--sfx-up-text, #1e293b);
    }
    .srow-spacer {
      flex: 1;
    }
    /* Info icon (circle-"i" SVG) — hover shows a styled tooltip (see [data-tip]
       below). Per design: 18.33×18.33, fill #8B9CAE. */
    .info-i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18.33px;
      height: 18.33px;
      color: #8b9cae;
      cursor: help;
      flex-shrink: 0;
    }
    .info-i svg {
      width: 100%;
      height: 100%;
    }
    /* "Beta" badge next to the Resume uploads label — per design-system specs
       (corner-radius-15, status-success-15 border, emerald-100 bg, spacers
       05/2 padding). Token fallbacks are hardcoded since those CSS vars aren't
       defined in this project. */
    .sbeta {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 24px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid rgba(0, 167, 82, 0.15);
      background: #d0fae5;
      color: #00a752;
      /* Design token: font-normal · 14/20. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      cursor: help;
      flex-shrink: 0;
    }
    /* Styled hover tooltip for any [data-tip] in the settings panel (info "i"
       chips and the Beta pill). Matches the design-system tooltip: light
       "main/secondary" surface, dark "main/foreground" text, shadow-sm — a
       plain rounded rectangle (no arrow). Wraps long text. Replaces the native
       title so it shows instantly and reads the same everywhere there's an info
       icon. */
    .settings-body [data-tip]::after {
      content: attr(data-tip);
      position: absolute;
      bottom: calc(100% + 8px);
      /* Anchored to the row (not the icon) and centred within it, capped at the
         row width — so it can never overflow the panel's left/right edges and
         get clipped by the scroll container. */
      left: 0;
      right: 0;
      margin-inline: auto;
      width: max-content;
      max-width: min(100%, 320px);
      white-space: normal;
      text-align: left;
      line-height: 1.5;
      background: var(--sfx-up-surface, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      font-size: 11.5px;
      font-weight: 500;
      font-style: normal;
      padding: 9px 12px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.15s,
        visibility 0.15s;
      pointer-events: none;
      z-index: 60;
    }
    .settings-body [data-tip]:hover::after {
      opacity: 1;
      visibility: visible;
    }
    /* Switch toggle (matches the global brand primary). */
    .sw-toggle {
      width: 42px;
      height: 24px;
      border: none;
      padding: 0;
      border-radius: 999px;
      background: var(--sfx-up-border, #cbd5e1);
      position: relative;
      cursor: pointer;
      transition: background 0.15s;
      flex: 0 0 42px;
    }
    .sw-toggle::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: left 0.15s;
    }
    .sw-toggle.on {
      background: var(--sfx-up-primary, #2563eb);
    }
    .sw-toggle.on::after {
      left: 21px;
    }
    /* Dependent fields fade + disable when their parent toggle is off. */
    .dep-off {
      opacity: 0.45;
      pointer-events: none;
    }
    /* Input controls stay a fixed width, left-aligned (the toggles, by contrast,
       span the full width and pin to the right edge). */
    .sfields {
      display: flex;
      gap: 16px;
      margin: 4px 0;
      max-width: 520px;
    }
    .sfield {
      flex: 1;
      min-width: 0;
      position: relative;
    }
    .sfield-block {
      margin-bottom: 24px;
      max-width: 520px;
    }
    .sfield label {
      display: block;
      /* Design token: font-normal · 14/20, color main/secondary-foreground. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #475569);
      margin-bottom: 6px;
    }
    /* The Protocols label sits 16px above its radio list (matches the 16px gap
       between the radio rows); all other field labels use the 6px base above. */
    .sfield-radios label {
      margin-bottom: 16px;
    }
    .sinp {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      transition: border-color 0.12s;
    }
    .sinp:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sinp input {
      border: none;
      background: none;
      outline: none;
      font: inherit;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      width: 100%;
      min-width: 0;
    }
    .sinp .sfx {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 600;
    }
    .ssel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
      transition: border-color 0.12s;
    }
    .ssel svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.15s;
    }
    .sfield.open .ssel {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sfield.open .ssel svg {
      transform: rotate(180deg);
    }
    .smenu {
      position: absolute;
      left: 0;
      right: 0;
      margin-top: 6px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      z-index: 10;
    }
    .sopt {
      padding: 10px 14px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--sfx-up-text, #1e293b);
    }
    .sopt:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
    }
    .sopt.cur {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }
    .sopt svg {
      width: 15px;
      height: 15px;
    }
    .sradio-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .sradio {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1.5px solid var(--sfx-up-border, #cbd5e1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 20px;
      transition: border-color 0.12s;
    }
    .sradio.on {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sradio.on::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
    }
    .sradio-lbl {
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
    }

    .preview-doc-wrap {
      position: relative;
      height: 332px;
      width: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-doc-wrap.pdf {
      background: linear-gradient(135deg, #fef2f2, #fee2e2);
    }
    .preview-doc-wrap.doc {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
    .preview-doc-wrap.vid {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    }
    .preview-doc-wrap.audio {
      background: linear-gradient(135deg, #fdf4ff, #fae8ff);
    }
    .preview-doc-wrap.sheet {
      background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    }
    .preview-doc-wrap.slide {
      background: linear-gradient(135deg, #fff7ed, #ffedd5);
    }
    .preview-doc-wrap.zip {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
    }
    .preview-doc-wrap.code {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    .preview-doc-wrap.markup {
      background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
    }
    .preview-doc-wrap.font {
      background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    }
    .preview-doc-wrap.design {
      background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    }
    .preview-doc-wrap.binary {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }
    .preview-doc-wrap.data {
      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
    }
    .preview-doc-wrap.gen {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }

    .preview-doc-type-img {
      max-width: 120px;
      max-height: 120px;
      object-fit: contain;
    }

    .preview-img-wrap {
      position: relative;
      width: 420px;
      height: 332px;
      max-width: 100%;
      flex-shrink: 0;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--sfx-up-checker-bg);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
    }

    .preview-image {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border: none;
    }

    .preview-media-area {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: #fff;
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.08),
        0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
      color: var(--sfx-up-text, #374151);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 20px;
      height: 20px;
    }

    .preview-nav.prev {
      left: 10px;
    }
    .preview-nav.next {
      right: 10px;
    }

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
      flex-shrink: 0;
      padding: 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .preview-metadata {
      padding: 0 0 16px;
    }

    .preview-file-info {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- File info table (no-metadata fallback) --- */
    .preview-file-info-panel {
      padding: 0 16px;
    }

    .preview-file-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
    }

    .preview-file-info-header svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.2s ease;
    }

    .preview-file-info-header.open svg {
      transform: rotate(180deg);
    }

    .preview-file-info-body {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.25s ease;
    }

    .preview-file-info-body.open {
      max-height: 300px;
    }

    .preview-file-info-row {
      display: flex;
      align-items: baseline;
      padding: 10px 0;
    }

    .preview-file-info-key {
      width: 110px;
      flex-shrink: 0;
      font-size: 13px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-file-info-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .upload-header {
      justify-content: space-between;
    }

    /* Right-aligned Minimize / Close controls in the progress headers. */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    /* When the header carries a progress bar, the bar IS the bottom edge —
       drop the 1px border so the two don't stack into a faint double line.
       Transparent (not removed) keeps the box height stable. */
    .header.has-progress {
      border-bottom-color: transparent;
    }

    /* Progress bar pinned to the header's bottom edge — a full-bleed line that
       sits over the header's bottom border. Used during the uploading phase
       (determinate blue fill) and the complete phase (segmented ok/dup/fail).
       The header is position:relative, so the bar anchors to it. */
    .header-progress {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      height: 4px;
    }

    .header-progress-track {
      flex: 1;
      height: 100%;
      background: var(--sfx-up-border, #e2e8f0);
      overflow: hidden;
    }

    .header-progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transition: width 0.3s ease;
    }

    .header-overall-bar {
      flex: 1;
      display: flex;
      height: 100%;
      background: var(--sfx-up-border, #e2e8f0);
      overflow: hidden;
    }

    .header-overall-bar .header-seg {
      height: 100%;
      min-width: 2px;
    }

    .header-seg.ok {
      background: var(--sfx-up-success, #16a34a);
    }

    .header-seg.dup {
      background: var(--sfx-up-warning, #f59e0b);
    }

    .header-seg.fail {
      background: var(--sfx-up-error, #dc2626);
    }

    /* --- Floating upload card (Variant 3 style) --- */
    .upload-float {
      position: fixed;
      bottom: calc(24px + var(--sfx-up-float-offset-y, 0px));
      right: calc(24px + var(--sfx-up-float-offset-x, 0px));
      z-index: 10000;
      width: 470px;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.12),
        0 2px 8px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      font-family: inherit;
      animation: floatSlideIn 0.3s ease both;
      transition:
        bottom 0.25s ease,
        right 0.25s ease;
    }

    .float-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .float-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-icon svg {
      width: 14px;
      height: 14px;
    }

    /* Outcome tints for the complete-state header icon (green = clean upload,
       amber = duplicates, red = failures). Mirrors the floating pill's portal
       stylesheet; needed here too because the dialog header lives in the
       shadow DOM, which the portal rules don't reach. */
    .float-icon.done {
      background: var(--sfx-up-success-bg, #f0fdf4);
      color: var(--sfx-up-success, #16a34a);
    }
    .float-icon.warn {
      background: var(--sfx-up-warning-bg, #fffbeb);
      color: var(--sfx-up-warning, #f59e0b);
    }
    .float-icon.error {
      background: var(--sfx-up-error-bg, #fef2f2);
      color: var(--sfx-up-error, #dc2626);
    }

    .float-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .float-subtitle {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    @keyframes floatSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow:
        0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
        0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 760px;
      height: 78vh;
      max-height: 720px;
      min-height: 420px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
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
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: var(--sfx-fs-z);
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
      z-index: var(--sfx-fs-controls-z);
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
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

    .fs-nav {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--sfx-fs-controls-z);
      transition: background 0.15s;
      padding: 0;
    }

    .fs-nav:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .fs-nav:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .fs-nav:disabled:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .fs-nav svg {
      width: 22px;
      height: 22px;
    }
    .fs-nav.prev {
      left: 20px;
    }
    .fs-nav.next {
      right: 20px;
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
      .modal-backdrop {
        animation: none;
      }
      .modal-card {
        animation: none;
      }
      .inline {
        animation: none;
      }
      .fs-overlay {
        animation: none;
      }
      .body.has-files {
        animation: none;
      }
    }

    /* --- Responsive: Tablet & Mobile (≤ 768px) ---
       Take modal-card OUT of backdrop's flex centering and pin it
       directly to viewport. This bypasses any min-width:auto issues
       in the flex layout that were leaving content overflowing. */
    @media (max-width: 768px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-width: 0;
        min-height: 0;
        border-radius: 0;
        overflow: hidden;
      }
      .inline {
        max-width: 100%;
        min-width: 0;
      }
      .connector-modal-backdrop {
        padding: 0;
        display: block;
      }
      .connector-modal {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-height: 0;
        border-radius: 0;
      }
      .header {
        padding: 12px 16px;
      }
      .header-icon {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
      .header-icon svg {
        width: 14px;
        height: 14px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 16px;
      }
      .body.has-files {
        padding: 0 0 12px;
      }
      .body > sfx-file-list,
      .file-grid-side > sfx-file-list {
        --sfx-grid-pad-l: 12px;
        --sfx-grid-pad-r: 12px;
      }

      /* Mobile preview = fullscreen takeover. When a file is selected
         the file grid + divider get hidden and preview-panel fills the
         whole modal. Tapping close (X) in preview-header returns to
         the grid. */
      .preview-layout {
        flex-direction: column;
      }
      .preview-layout .file-grid-side,
      .preview-layout .preview-divider {
        display: none !important;
      }
      .preview-layout .preview-panel {
        flex: 1 1 100% !important;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        padding: 0;
      }

      .preview-topbar {
        padding: 8px 0;
      }

      .inline {
        --sfx-inline-pad: 16px;
        min-height: auto;
      }

      /* Bump fullscreen z-index stack on mobile: modal-card is now
         position:fixed which creates a new stacking context, so the
         overlay + controls must sit above it. */
      :host {
        --sfx-fs-z: 100000;
        --sfx-fs-controls-z: 100001;
      }

      /* Force fs-overlay to viewport-fill on mobile. Without these the
         shadow-DOM stacking + sibling modal-card was clipping it. */
      .fs-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
      }
      .fs-img {
        max-width: 92vw;
        max-height: 80vh;
      }
      /* Brighter, larger, tappable nav arrows + close toolbar on mobile.
         Default styling is too subtle (12% white) and gets lost over the
         dark overlay. */
      .fs-toolbar {
        top: 16px;
      }
      .fs-btn {
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-btn svg {
        width: 22px;
        height: 22px;
      }
      .fs-nav {
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-nav:disabled {
        opacity: 0.18;
        pointer-events: none;
      }
      .fs-nav svg {
        width: 24px;
        height: 24px;
      }
      .fs-nav.prev {
        left: 12px;
      }
      .fs-nav.next {
        right: 12px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) — tighter spacing on top of
       the fullscreen rules already applied at ≤768. */
    @media (max-width: 480px) {
      .header {
        padding: 10px 14px;
      }
      .header-icon {
        width: 26px;
        height: 26px;
        margin-right: 8px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 12px;
      }
      .body.has-files {
        padding: 0 0 8px;
      }

      .inline {
        --sfx-inline-pad: 12px;
        box-shadow: none;
      }
      .inline-header-title {
        font-size: 18px;
      }
    }

    /* --- Responsive: Landscape / short viewports (Nest Hub 1024×600,
       iPad mini landscape, laptops with address bar visible etc) ---
       Modal min-height 660 exceeds viewport; drop the min and expand the
       max so content gets every pixel available. Trim header/body padding
       so the available space is actually usable. */
    @media (max-height: 700px) {
      .modal-card {
        height: 96vh;
        max-height: 96vh;
      }
      .inline {
        min-height: auto;
      }
      .header {
        padding: 10px 20px;
      }
      .body {
        padding: 16px 20px;
      }
      /* Let the preview image scale down instead of forcing a
         340×240 crop — on a 1920×600 kiosk that hardcoded size
         looked tiny. Use a definite height so the inner image's
         max-height: 100% actually resolves; otherwise tall images
         (e.g. 52×984) render at intrinsic height and escape the
         panel. */
      .preview-img-wrap {
        width: min(420px, 60vw);
        height: min(280px, 55vh);
        max-width: 100%;
      }
    }
  `,V._FS_ZOOM_LEVELS=[1,2,3,4],V._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),V._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),V);L([x.property({attribute:!1})],A.prototype,"config");L([x.state()],A.prototype,"_isOpen");L([x.state()],A.prototype,"_activeConnector");L([x.state()],A.prototype,"_showUrlDialog");L([x.state()],A.prototype,"_showCameraDialog");L([x.state()],A.prototype,"_showScreenCastDialog");L([x.state()],A.prototype,"_similarSelectMode");L([x.state()],A.prototype,"_similarSelectedIds");L([x.state()],A.prototype,"_similarRunIds");L([x.state()],A.prototype,"_similarActiveIds");L([x.state()],A.prototype,"_similarResults");L([x.state()],A.prototype,"_previewPanelTab");L([x.state()],A.prototype,"_previewFileId");L([x.state()],A.prototype,"_previewDims");L([x.state()],A.prototype,"_fileInfoOpen");L([x.state()],A.prototype,"_splitPct");L([x.state()],A.prototype,"_showSettings");L([x.state()],A.prototype,"_setResize");L([x.state()],A.prototype,"_setMaxW");L([x.state()],A.prototype,"_setMaxH");L([x.state()],A.prototype,"_setTranscode");L([x.state()],A.prototype,"_setResolution");L([x.state()],A.prototype,"_setResolutionOpen");L([x.state()],A.prototype,"_setProtocol");L([x.state()],A.prototype,"_setResumable");L([x.state()],A.prototype,"_fullscreenPreviewUrl");L([x.state()],A.prototype,"_fullscreenVideoFile");L([x.state()],A.prototype,"_fsZoom");L([x.state()],A.prototype,"_bodyDragOver");L([x.state()],A.prototype,"_isMinimized");L([x.state()],A.prototype,"_isPillExpanded");L([x.state()],A.prototype,"_metadataSchema");L([x.state()],A.prototype,"_metadataTranslations");L([x.state()],A.prototype,"_metadataDependencies");L([x.state()],A.prototype,"_regionalFilters");L([x.state()],A.prototype,"_bulkMetadataOpen");L([x.state()],A.prototype,"_bulkMetadataInitialFieldKey");L([x.state()],A.prototype,"_isReviewing");L([x.state()],A.prototype,"_reviewFiles");L([x.state()],A.prototype,"_hasStoredReview");let Kn=A;exports.AuthExpiredError=ut;exports.CORE_SOURCES=Re;exports.PublicEvents=D;exports.SfxActionsBar=re;exports.SfxCameraDialog=ge;exports.SfxDropZone=Fn;exports.SfxFileItem=Y;exports.SfxFileList=q;exports.SfxImportDivider=zt;exports.SfxScreenCastDialog=ce;exports.SfxSourcePills=Ge;exports.SfxUploader=Kn;exports.SfxUrlDialog=_e;exports.Store=Ni;exports.UploadEngine=yr;exports.attachRelativePath=ft;exports.brandIcon=ue;exports.buildAuthHeaders=dt;exports.createStore=qi;exports.exchangeSassKey=wr;exports.getApiBase=mt;exports.getAuthUrl=Yr;exports.getProviderSources=Sr;exports.getRelativePath=vr;exports.listFiles=Vi;exports.listFolderRecursive=Gr;exports.listNextPage=Ki;exports.logout=Qr;exports.resolveAuth=_r;exports.searchProvider=Wr;
