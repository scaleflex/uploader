"use strict";const a=require("lit"),k=require("lit/decorators.js"),oe=require("lit/directives/unsafe-svg.js"),ce=require("lit/directives/unsafe-html.js");class wr{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(r=>r(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const r=this._pendingState;this._pendingState=null,this.setState(r)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function M(i,e,t){const r=i.getState().files,o=r.get(e);if(!o)return;const n=new Map(r);n.set(e,{...o,...t}),i.setState({files:n})}function ve(i,e){const t=new Map(i.getState().files);t.set(e.id,e),i.setState({files:t})}function Nt(i,e){const t=i.getState().files;if(!t.has(e))return;const r=new Map(t);r.delete(e),i.setState({files:r})}function _r(){return new wr({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class Jr{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Qr(i,e){const t=new XMLHttpRequest;let r=!1;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;t.open("POST",n);for(const[l,d]of Object.entries(e.authHeaders))t.setRequestHeader(l,d);t.upload.addEventListener("progress",l=>{l.lengthComputable&&!r&&e.onProgress(l.loaded,l.total)}),t.addEventListener("load",()=>{if(r)return;let l;try{l=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&l.status==="success"?e.onComplete(l):e.onError(new Error(l.hint||l.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))});const s=new FormData;if(i.file){const l={name:i.name,type:i.type};s.append("info[files[]]",JSON.stringify(l)),Object.keys(i.meta).length>0&&s.append("meta[files[]]",JSON.stringify(i.meta)),i.tags.length>0&&s.append("tags[files[]]",JSON.stringify(i.tags)),s.append("files[]",i.file,i.name)}return t.timeout=6e4,t.send(s),{abort(){r=!0,t.abort()}}}function ei(i,e){const t=new XMLHttpRequest;let r=!1;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;t.open("POST",n);for(const[l,d]of Object.entries(e.authHeaders))t.setRequestHeader(l,d);if(t.setRequestHeader("Content-Type","application/json"),t.addEventListener("load",()=>{if(r)return;let l;try{l=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&l.status==="success"?e.onComplete(l):e.onError(new Error(l.hint||l.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))}),!i.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const s={files_urls:[{url:i.remoteUrl,name:i.name}],dir:e.folder};return t.timeout=6e4,t.send(JSON.stringify(s)),{abort(){r=!0,t.abort()}}}function rt(i){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":i}}function $e(i){return i.replace(/\/+$/,"")}const ti={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Ie(i){return ti[i]??i}function ri(i,e){const t=$e(i),r=btoa(JSON.stringify({origin:window.location.origin})),o=Ie(e);return`${t}/${o}/connect?state=${encodeURIComponent(r)}`}async function ii(i,e,t,r=""){const o=$e(i),n=r?`/${r}`:"",s=Ie(e),l=await fetch(`${o}/${s}/list${n}`,{method:"GET",headers:rt(t),credentials:"same-origin"});if(l.status===401)throw new it;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function oi(i,e,t){const r=$e(i),o=await fetch(`${r}/${t}`,{method:"GET",headers:rt(e),credentials:"same-origin"});if(o.status===401)throw new it;if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${o.status})`)}return o.json()}async function ni(i,e,t,r){const o=$e(i),n=Ie(e),s=r?`q=${encodeURIComponent(t)}&${r}`:`q=${encodeURIComponent(t)}`,l=await fetch(`${o}/search/${n}/list?${s}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Search failed (HTTP ${l.status})`)}return l.json()}async function si(i,e,t,r,o,n=!1){const s=$e(i),l=Ie(e),d=n?`${s}/search/${l}/get/${r}`:`${s}/${l}/get/${r}`,f=n?{Accept:"application/json","Content-Type":"application/json"}:rt(t),g=await fetch(d,{method:"POST",headers:f,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(g.status===401)throw new it;if(!g.ok){const w=await g.json().catch(()=>null);throw new Error((w==null?void 0:w.message)||`Companion upload failed (HTTP ${g.status})`)}return g.json()}async function ai(i,e,t){const r=$e(i),o=Ie(e),n=await fetch(`${r}/${o}/logout`,{method:"GET",headers:rt(t),credentials:"same-origin"});return n.ok?n.json():{ok:!1,revoked:!1}}function li(i){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(i))==null?void 0:o[1])??i;return`${/^https:\/\//i.test(i)?"wss":"ws"}://${t}`}class it extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function di(i,e){const t=i.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let r=!1,o=null;const s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,l={};i.meta&&Object.keys(i.meta).length>0&&Object.assign(l,i.meta),i.tags&&i.tags.length>0&&(l.tags=i.tags);const d=!t.token;return si(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:Object.keys(l).length>0?l:void 0},d).then(f=>{if(r)return;const w=`${li(t.companionUrl)}/api/${f.token}`;try{o=new WebSocket(w)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}o.onmessage=P=>{var R,z,C;if(!r)try{const E=JSON.parse(P.data);switch(E.action){case"progress":{const S=E.payload,v=S.bytesUploaded??0,x=S.bytesTotal??(t.size||1);e.onProgress(v,x);break}case"success":{const S=E.payload;if(o==null||o.close(),(R=S.response)!=null&&R.responseText)try{const v=JSON.parse(S.response.responseText);if(v.status==="success"){e.onComplete(v);return}e.onError(new Error(v.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{o==null||o.close();const S=E.payload;let v=((z=S.error)==null?void 0:z.message)||"Upload failed";if((C=S.response)!=null&&C.responseText)try{const x=JSON.parse(S.response.responseText);v=x.hint||x.msg||x.message||v}catch{}e.onError(new Error(v));break}}}catch{}},o.onerror=()=>{r||e.onError(new Error("Upload progress connection failed"))},o.onclose=()=>{o=null}}).catch(f=>{r||e.onError(f instanceof Error?f:new Error(String(f)))}),{abort(){if(r=!0,o){try{o.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}o.close(),o=null}}}}function ct(i){"@babel/helpers - typeof";return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ct(i)}function ci(i,e,t){return Object.defineProperty(i,"prototype",{writable:!1}),i}function pi(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function fi(i,e,t){return e=Te(e),ui(i,Ct()?Reflect.construct(e,t||[],Te(i).constructor):e.apply(i,t))}function ui(i,e){if(e&&(ct(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hi(i)}function hi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function gi(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&Re(i,e)}function pt(i){var e=typeof Map=="function"?new Map:void 0;return pt=function(r){if(r===null||!xi(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,o)}function o(){return vi(r,arguments,Te(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Re(o,r)},pt(i)}function vi(i,e,t){if(Ct())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(i.bind.apply(i,r));return t&&Re(o,t.prototype),o}function Ct(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ct=function(){return!!i})()}function xi(i){try{return Function.toString.call(i).indexOf("[native code]")!==-1}catch{return typeof i=="function"}}function Re(i,e){return Re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Re(i,e)}function Te(i){return Te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Te(i)}var Pe=(function(i){function e(t){var r,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(pi(this,e),r=fi(this,e,[t]),r.originalRequest=n,r.originalResponse=s,r.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),n!=null){var l=n.getHeader("X-Request-ID")||"n/a",d=n.getMethod(),f=n.getURL(),g=s?s.getStatus():"n/a",w=s?s.getBody()||"":"n/a";t+=", originated from request (method: ".concat(d,", url: ").concat(f,", response code: ").concat(g,", response text: ").concat(w,", request id: ").concat(l,")")}return r.message=t,r}return gi(e,i),ci(e)})(pt(Error));function De(i){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(i)}function mi(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function bi(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,wi(r.key),r)}}function yi(i,e,t){return e&&bi(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function wi(i){var e=_i(i,"string");return De(e)=="symbol"?e:e+""}function _i(i,e){if(De(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(De(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var ki=(function(){function i(){mi(this,i)}return yi(i,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,r){return Promise.resolve(null)}}])})();const kr="3.7.8",Ci=kr,Ue=typeof Buffer=="function",Yt=typeof TextDecoder=="function"?new TextDecoder:void 0,Vt=typeof TextEncoder=="function"?new TextEncoder:void 0,Si="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ze=Array.prototype.slice.call(Si),Ye=(i=>{let e={};return i.forEach((t,r)=>e[t]=r),e})(ze),$i=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,q=String.fromCharCode.bind(String),Gt=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):i=>new Uint8Array(Array.prototype.slice.call(i,0)),Cr=i=>i.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Sr=i=>i.replace(/[^A-Za-z0-9\+\/]/g,""),$r=i=>{let e,t,r,o,n="";const s=i.length%3;for(let l=0;l<i.length;){if((t=i.charCodeAt(l++))>255||(r=i.charCodeAt(l++))>255||(o=i.charCodeAt(l++))>255)throw new TypeError("invalid character found");e=t<<16|r<<8|o,n+=ze[e>>18&63]+ze[e>>12&63]+ze[e>>6&63]+ze[e&63]}return s?n.slice(0,s-3)+"===".substring(s):n},St=typeof btoa=="function"?i=>btoa(i):Ue?i=>Buffer.from(i,"binary").toString("base64"):$r,ft=Ue?i=>Buffer.from(i).toString("base64"):i=>{let t=[];for(let r=0,o=i.length;r<o;r+=4096)t.push(q.apply(null,i.subarray(r,r+4096)));return St(t.join(""))},We=(i,e=!1)=>e?Cr(ft(i)):ft(i),Ui=i=>{if(i.length<2){var e=i.charCodeAt(0);return e<128?i:e<2048?q(192|e>>>6)+q(128|e&63):q(224|e>>>12&15)+q(128|e>>>6&63)+q(128|e&63)}else{var e=65536+(i.charCodeAt(0)-55296)*1024+(i.charCodeAt(1)-56320);return q(240|e>>>18&7)+q(128|e>>>12&63)+q(128|e>>>6&63)+q(128|e&63)}},Ei=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Ur=i=>i.replace(Ei,Ui),Wt=Ue?i=>Buffer.from(i,"utf8").toString("base64"):Vt?i=>ft(Vt.encode(i)):i=>St(Ur(i)),ke=(i,e=!1)=>e?Cr(Wt(i)):Wt(i),Xt=i=>ke(i,!0),Pi=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,zi=i=>{switch(i.length){case 4:var e=(7&i.charCodeAt(0))<<18|(63&i.charCodeAt(1))<<12|(63&i.charCodeAt(2))<<6|63&i.charCodeAt(3),t=e-65536;return q((t>>>10)+55296)+q((t&1023)+56320);case 3:return q((15&i.charCodeAt(0))<<12|(63&i.charCodeAt(1))<<6|63&i.charCodeAt(2));default:return q((31&i.charCodeAt(0))<<6|63&i.charCodeAt(1))}},Er=i=>i.replace(Pi,zi),Pr=i=>{if(i=i.replace(/\s+/g,""),!$i.test(i))throw new TypeError("malformed base64.");i+="==".slice(2-(i.length&3));let e,t,r,o=[];for(let n=0;n<i.length;)e=Ye[i.charAt(n++)]<<18|Ye[i.charAt(n++)]<<12|(t=Ye[i.charAt(n++)])<<6|(r=Ye[i.charAt(n++)]),t===64?o.push(q(e>>16&255)):r===64?o.push(q(e>>16&255,e>>8&255)):o.push(q(e>>16&255,e>>8&255,e&255));return o.join("")},$t=typeof atob=="function"?i=>atob(Sr(i)):Ue?i=>Buffer.from(i,"base64").toString("binary"):Pr,zr=Ue?i=>Gt(Buffer.from(i,"base64")):i=>Gt($t(i).split("").map(e=>e.charCodeAt(0))),Or=i=>zr(Rr(i)),Oi=Ue?i=>Buffer.from(i,"base64").toString("utf8"):Yt?i=>Yt.decode(zr(i)):i=>Er($t(i)),Rr=i=>Sr(i.replace(/[-_]/g,e=>e=="-"?"+":"/")),ut=i=>Oi(Rr(i)),Ri=i=>{if(typeof i!="string")return!1;const e=i.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Tr=i=>({value:i,enumerable:!1,writable:!0,configurable:!0}),Dr=function(){const i=(e,t)=>Object.defineProperty(String.prototype,e,Tr(t));i("fromBase64",function(){return ut(this)}),i("toBase64",function(e){return ke(this,e)}),i("toBase64URI",function(){return ke(this,!0)}),i("toBase64URL",function(){return ke(this,!0)}),i("toUint8Array",function(){return Or(this)})},Lr=function(){const i=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Tr(t));i("toBase64",function(e){return We(this,e)}),i("toBase64URI",function(){return We(this,!0)}),i("toBase64URL",function(){return We(this,!0)})},Ti=()=>{Dr(),Lr()},Di={version:kr,VERSION:Ci,atob:$t,atobPolyfill:Pr,btoa:St,btoaPolyfill:$r,fromBase64:ut,toBase64:ke,encode:ke,encodeURI:Xt,encodeURL:Xt,utob:Ur,btou:Er,decode:ut,isValid:Ri,fromUint8Array:We,toUint8Array:Or,extendString:Dr,extendUint8Array:Lr,extendBuiltins:Ti};var Kt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Li(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var st,Zt;function ji(){return Zt||(Zt=1,st=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),st}var Ve={},Jt;function Fi(){if(Jt)return Ve;Jt=1;var i=Object.prototype.hasOwnProperty,e;function t(s){try{return decodeURIComponent(s.replace(/\+/g," "))}catch{return null}}function r(s){try{return encodeURIComponent(s)}catch{return null}}function o(s){for(var l=/([^=?#&]+)=?([^&]*)/g,d={},f;f=l.exec(s);){var g=t(f[1]),w=t(f[2]);g===null||w===null||g in d||(d[g]=w)}return d}function n(s,l){l=l||"";var d=[],f,g;typeof l!="string"&&(l="?");for(g in s)if(i.call(s,g)){if(f=s[g],!f&&(f===null||f===e||isNaN(f))&&(f=""),g=r(g),f=r(f),g===null||f===null)continue;d.push(g+"="+f)}return d.length?l+d.join("&"):""}return Ve.stringify=n,Ve.parse=o,Ve}var at,Qt;function Ai(){if(Qt)return at;Qt=1;var i=ji(),e=Fi(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,r=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=/:\d+$/,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,l=/^[a-zA-Z]:/;function d(v){return(v||"").toString().replace(t,"")}var f=[["#","hash"],["?","query"],function(x,h){return P(h.protocol)?x.replace(/\\/g,"/"):x},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};function w(v){var x;typeof window<"u"?x=window:typeof Kt<"u"?x=Kt:typeof self<"u"?x=self:x={};var h=x.location||{};v=v||h;var m={},O=typeof v,$;if(v.protocol==="blob:")m=new C(unescape(v.pathname),{});else if(O==="string"){m=new C(v,{});for($ in g)delete m[$]}else if(O==="object"){for($ in v)$ in g||(m[$]=v[$]);m.slashes===void 0&&(m.slashes=o.test(v.href))}return m}function P(v){return v==="file:"||v==="ftp:"||v==="http:"||v==="https:"||v==="ws:"||v==="wss:"}function R(v,x){v=d(v),v=v.replace(r,""),x=x||{};var h=s.exec(v),m=h[1]?h[1].toLowerCase():"",O=!!h[2],$=!!h[3],L=0,D;return O?$?(D=h[2]+h[3]+h[4],L=h[2].length+h[3].length):(D=h[2]+h[4],L=h[2].length):$?(D=h[3]+h[4],L=h[3].length):D=h[4],m==="file:"?L>=2&&(D=D.slice(2)):P(m)?D=h[4]:m?O&&(D=D.slice(2)):L>=2&&P(x.protocol)&&(D=h[4]),{protocol:m,slashes:O||P(m),slashesCount:L,rest:D}}function z(v,x){if(v==="")return x;for(var h=(x||"/").split("/").slice(0,-1).concat(v.split("/")),m=h.length,O=h[m-1],$=!1,L=0;m--;)h[m]==="."?h.splice(m,1):h[m]===".."?(h.splice(m,1),L++):L&&(m===0&&($=!0),h.splice(m,1),L--);return $&&h.unshift(""),(O==="."||O==="..")&&h.push(""),h.join("/")}function C(v,x,h){if(v=d(v),v=v.replace(r,""),!(this instanceof C))return new C(v,x,h);var m,O,$,L,D,V,te=f.slice(),ge=typeof x,U=this,Z=0;for(ge!=="object"&&ge!=="string"&&(h=x,x=null),h&&typeof h!="function"&&(h=e.parse),x=w(x),O=R(v||"",x),m=!O.protocol&&!O.slashes,U.slashes=O.slashes||m&&x.slashes,U.protocol=O.protocol||x.protocol||"",v=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||l.test(v))||!O.slashes&&(O.protocol||O.slashesCount<2||!P(U.protocol)))&&(te[3]=[/(.*)/,"pathname"]);Z<te.length;Z++){if(L=te[Z],typeof L=="function"){v=L(v,U);continue}$=L[0],V=L[1],$!==$?U[V]=v:typeof $=="string"?(D=$==="@"?v.lastIndexOf($):v.indexOf($),~D&&(typeof L[2]=="number"?(U[V]=v.slice(0,D),v=v.slice(D+L[2])):(U[V]=v.slice(D),v=v.slice(0,D)))):(D=$.exec(v))&&(U[V]=D[1],v=v.slice(0,D.index)),U[V]=U[V]||m&&L[3]&&x[V]||"",L[4]&&(U[V]=U[V].toLowerCase())}h&&(U.query=h(U.query)),m&&x.slashes&&U.pathname.charAt(0)!=="/"&&(U.pathname!==""||x.pathname!=="")&&(U.pathname=z(U.pathname,x.pathname)),U.pathname.charAt(0)!=="/"&&P(U.protocol)&&(U.pathname="/"+U.pathname),i(U.port,U.protocol)||(U.host=U.hostname,U.port=""),U.username=U.password="",U.auth&&(D=U.auth.indexOf(":"),~D?(U.username=U.auth.slice(0,D),U.username=encodeURIComponent(decodeURIComponent(U.username)),U.password=U.auth.slice(D+1),U.password=encodeURIComponent(decodeURIComponent(U.password))):U.username=encodeURIComponent(decodeURIComponent(U.auth)),U.auth=U.password?U.username+":"+U.password:U.username),U.origin=U.protocol!=="file:"&&P(U.protocol)&&U.host?U.protocol+"//"+U.host:"null",U.href=U.toString()}function E(v,x,h){var m=this;switch(v){case"query":typeof x=="string"&&x.length&&(x=(h||e.parse)(x)),m[v]=x;break;case"port":m[v]=x,i(x,m.protocol)?x&&(m.host=m.hostname+":"+x):(m.host=m.hostname,m[v]="");break;case"hostname":m[v]=x,m.port&&(x+=":"+m.port),m.host=x;break;case"host":m[v]=x,n.test(x)?(x=x.split(":"),m.port=x.pop(),m.hostname=x.join(":")):(m.hostname=x,m.port="");break;case"protocol":m.protocol=x.toLowerCase(),m.slashes=!h;break;case"pathname":case"hash":if(x){var O=v==="pathname"?"/":"#";m[v]=x.charAt(0)!==O?O+x:x}else m[v]=x;break;case"username":case"password":m[v]=encodeURIComponent(x);break;case"auth":var $=x.indexOf(":");~$?(m.username=x.slice(0,$),m.username=encodeURIComponent(decodeURIComponent(m.username)),m.password=x.slice($+1),m.password=encodeURIComponent(decodeURIComponent(m.password))):m.username=encodeURIComponent(decodeURIComponent(x))}for(var L=0;L<f.length;L++){var D=f[L];D[4]&&(m[D[1]]=m[D[1]].toLowerCase())}return m.auth=m.password?m.username+":"+m.password:m.username,m.origin=m.protocol!=="file:"&&P(m.protocol)&&m.host?m.protocol+"//"+m.host:"null",m.href=m.toString(),m}function S(v){(!v||typeof v!="function")&&(v=e.stringify);var x,h=this,m=h.host,O=h.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var $=O+(h.protocol&&h.slashes||P(h.protocol)?"//":"");return h.username?($+=h.username,h.password&&($+=":"+h.password),$+="@"):h.password?($+=":"+h.password,$+="@"):h.protocol!=="file:"&&P(h.protocol)&&!m&&h.pathname!=="/"&&($+="@"),(m[m.length-1]===":"||n.test(h.hostname)&&!h.port)&&(m+=":"),$+=m+h.pathname,x=typeof h.query=="object"?v(h.query):h.query,x&&($+=x.charAt(0)!=="?"?"?"+x:x),h.hash&&($+=h.hash),$}return C.prototype={set:E,toString:S},C.extractProtocol=R,C.location=w,C.trimLeft=d,C.qs=e,at=C,at}var Bi=Ai();const Ii=Li(Bi);function Mi(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){var e=Math.random()*16|0,t=i==="x"?e:e&3|8;return t.toString(16)})}function ht(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ht=function(){return e};var i,e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(u,c,p){u[c]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",d=n.toStringTag||"@@toStringTag";function f(u,c,p){return Object.defineProperty(u,c,{value:p,enumerable:!0,configurable:!0,writable:!0}),u[c]}try{f({},"")}catch{f=function(p,b,_){return p[b]=_}}function g(u,c,p,b){var _=c&&c.prototype instanceof S?c:S,y=Object.create(_.prototype),T=new Z(b||[]);return o(y,"_invoke",{value:V(u,p,T)}),y}function w(u,c,p){try{return{type:"normal",arg:u.call(c,p)}}catch(b){return{type:"throw",arg:b}}}e.wrap=g;var P="suspendedStart",R="suspendedYield",z="executing",C="completed",E={};function S(){}function v(){}function x(){}var h={};f(h,s,function(){return this});var m=Object.getPrototypeOf,O=m&&m(m(de([])));O&&O!==t&&r.call(O,s)&&(h=O);var $=x.prototype=S.prototype=Object.create(h);function L(u){["next","throw","return"].forEach(function(c){f(u,c,function(p){return this._invoke(c,p)})})}function D(u,c){function p(_,y,T,F){var A=w(u[_],u,y);if(A.type!=="throw"){var N=A.arg,H=N.value;return H&&pe(H)=="object"&&r.call(H,"__await")?c.resolve(H.__await).then(function(Y){p("next",Y,T,F)},function(Y){p("throw",Y,T,F)}):c.resolve(H).then(function(Y){N.value=Y,T(N)},function(Y){return p("throw",Y,T,F)})}F(A.arg)}var b;o(this,"_invoke",{value:function(y,T){function F(){return new c(function(A,N){p(y,T,A,N)})}return b=b?b.then(F,F):F()}})}function V(u,c,p){var b=P;return function(_,y){if(b===z)throw Error("Generator is already running");if(b===C){if(_==="throw")throw y;return{value:i,done:!0}}for(p.method=_,p.arg=y;;){var T=p.delegate;if(T){var F=te(T,p);if(F){if(F===E)continue;return F}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(b===P)throw b=C,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);b=z;var A=w(u,c,p);if(A.type==="normal"){if(b=p.done?C:R,A.arg===E)continue;return{value:A.arg,done:p.done}}A.type==="throw"&&(b=C,p.method="throw",p.arg=A.arg)}}}function te(u,c){var p=c.method,b=u.iterator[p];if(b===i)return c.delegate=null,p==="throw"&&u.iterator.return&&(c.method="return",c.arg=i,te(u,c),c.method==="throw")||p!=="return"&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+p+"' method")),E;var _=w(b,u.iterator,c.arg);if(_.type==="throw")return c.method="throw",c.arg=_.arg,c.delegate=null,E;var y=_.arg;return y?y.done?(c[u.resultName]=y.value,c.next=u.nextLoc,c.method!=="return"&&(c.method="next",c.arg=i),c.delegate=null,E):y:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,E)}function ge(u){var c={tryLoc:u[0]};1 in u&&(c.catchLoc=u[1]),2 in u&&(c.finallyLoc=u[2],c.afterLoc=u[3]),this.tryEntries.push(c)}function U(u){var c=u.completion||{};c.type="normal",delete c.arg,u.completion=c}function Z(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(ge,this),this.reset(!0)}function de(u){if(u||u===""){var c=u[s];if(c)return c.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var p=-1,b=function _(){for(;++p<u.length;)if(r.call(u,p))return _.value=u[p],_.done=!1,_;return _.value=i,_.done=!0,_};return b.next=b}}throw new TypeError(pe(u)+" is not iterable")}return v.prototype=x,o($,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:v,configurable:!0}),v.displayName=f(x,d,"GeneratorFunction"),e.isGeneratorFunction=function(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===v||(c.displayName||c.name)==="GeneratorFunction")},e.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,x):(u.__proto__=x,f(u,d,"GeneratorFunction")),u.prototype=Object.create($),u},e.awrap=function(u){return{__await:u}},L(D.prototype),f(D.prototype,l,function(){return this}),e.AsyncIterator=D,e.async=function(u,c,p,b,_){_===void 0&&(_=Promise);var y=new D(g(u,c,p,b),_);return e.isGeneratorFunction(c)?y:y.next().then(function(T){return T.done?T.value:y.next()})},L($),f($,d,"Generator"),f($,s,function(){return this}),f($,"toString",function(){return"[object Generator]"}),e.keys=function(u){var c=Object(u),p=[];for(var b in c)p.push(b);return p.reverse(),function _(){for(;p.length;){var y=p.pop();if(y in c)return _.value=y,_.done=!1,_}return _.done=!0,_}},e.values=de,Z.prototype={constructor:Z,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(U),!c)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=i)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var p=this;function b(N,H){return T.type="throw",T.arg=c,p.next=N,H&&(p.method="next",p.arg=i),!!H}for(var _=this.tryEntries.length-1;_>=0;--_){var y=this.tryEntries[_],T=y.completion;if(y.tryLoc==="root")return b("end");if(y.tryLoc<=this.prev){var F=r.call(y,"catchLoc"),A=r.call(y,"finallyLoc");if(F&&A){if(this.prev<y.catchLoc)return b(y.catchLoc,!0);if(this.prev<y.finallyLoc)return b(y.finallyLoc)}else if(F){if(this.prev<y.catchLoc)return b(y.catchLoc,!0)}else{if(!A)throw Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return b(y.finallyLoc)}}}},abrupt:function(c,p){for(var b=this.tryEntries.length-1;b>=0;--b){var _=this.tryEntries[b];if(_.tryLoc<=this.prev&&r.call(_,"finallyLoc")&&this.prev<_.finallyLoc){var y=_;break}}y&&(c==="break"||c==="continue")&&y.tryLoc<=p&&p<=y.finallyLoc&&(y=null);var T=y?y.completion:{};return T.type=c,T.arg=p,y?(this.method="next",this.next=y.finallyLoc,E):this.complete(T)},complete:function(c,p){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&p&&(this.next=p),E},finish:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.finallyLoc===c)return this.complete(b.completion,b.afterLoc),U(b),E}},catch:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.tryLoc===c){var _=b.completion;if(_.type==="throw"){var y=_.arg;U(b)}return y}}throw Error("illegal catch attempt")},delegateYield:function(c,p,b){return this.delegate={iterator:de(c),resultName:p,nextLoc:b},this.method==="next"&&(this.arg=i),E}},e}function er(i,e,t,r,o,n,s){try{var l=i[n](s),d=l.value}catch(f){t(f);return}l.done?e(d):Promise.resolve(d).then(r,o)}function Hi(i){return function(){var e=this,t=arguments;return new Promise(function(r,o){var n=i.apply(e,t);function s(d){er(n,r,o,s,l,"next",d)}function l(d){er(n,r,o,s,l,"throw",d)}s(void 0)})}}function jr(i,e){return Yi(i)||Ni(i,e)||Fr(i,e)||qi()}function qi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ni(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var r,o,n,s,l=[],d=!0,f=!1;try{if(n=(t=t.call(i)).next,e!==0)for(;!(d=(r=n.call(t)).done)&&(l.push(r.value),l.length!==e);d=!0);}catch(g){f=!0,o=g}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(f)throw o}}return l}}function Yi(i){if(Array.isArray(i))return i}function pe(i){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(i)}function Vi(i,e){var t=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=Fr(i))||e){t&&(i=t);var r=0,o=function(){};return{s:o,n:function(){return r>=i.length?{done:!0}:{done:!1,value:i[r++]}},e:function(f){throw f},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,s=!1,l;return{s:function(){t=t.call(i)},n:function(){var f=t.next();return n=f.done,f},e:function(f){s=!0,l=f},f:function(){try{!n&&t.return!=null&&t.return()}finally{if(s)throw l}}}}function Fr(i,e){if(i){if(typeof i=="string")return tr(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tr(i,e)}}function tr(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function rr(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,r)}return t}function xe(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?rr(Object(t),!0).forEach(function(r){Gi(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):rr(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Gi(i,e,t){return e=Ar(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Wi(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function ir(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,Ar(r.key),r)}}function Xi(i,e,t){return e&&ir(i.prototype,e),t&&ir(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function Ar(i){var e=Ki(i,"string");return pe(e)=="symbol"?e:e+""}function Ki(i,e){if(pe(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(pe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var Xe="tus-v1",Ke="ietf-draft-03",Oe="ietf-draft-05",Zi={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Br,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Xe},Ze=(function(){function i(e,t){Wi(this,i),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Xi(i,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(r){return t._urlStorage.findUploadsByFingerprint(r)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,r=this.file;if(!r){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Xe,Ke,Oe].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var n=0,s=["uploadUrl","uploadSize","uploadLengthDeferred"];n<s.length;n++){var l=s[n];if(this.options[l]){this._emitError(new Error("tus: cannot use the ".concat(l," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(r,this.options).then(function(d){return t._fingerprint=d,t._source?t._source:t.options.fileReader.openFile(r,t.options.chunkSize)}).then(function(d){if(t._source=d,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(d){t._emitError(d)})}},{key:"_startParallelUpload",value:function(){var t,r=this,o=this._size,n=0;this._parallelUploads=[];var s=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,l=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Qi(this._source.size,s);this._parallelUploadUrls&&l.forEach(function(g,w){g.uploadUrl=r._parallelUploadUrls[w]||null}),this._parallelUploadUrls=new Array(l.length);var d=l.map(function(g,w){var P=0;return r._source.slice(g.start,g.end).then(function(R){var z=R.value;return new Promise(function(C,E){var S=xe(xe({},r.options),{},{uploadUrl:g.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:r.options.metadataForPartialUploads,headers:xe(xe({},r.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:C,onError:E,onProgress:function(h){n=n-P+h,P=h,r._emitProgress(n,o)},onUploadUrlAvailable:function(){r._parallelUploadUrls[w]=v.url,r._parallelUploadUrls.filter(function(h){return!!h}).length===l.length&&r._saveUploadInUrlStorage()}}),v=new i(z,S);v.start(),r._parallelUploads.push(v)})})}),f;Promise.all(d).then(function(){f=r._openRequest("POST",r.options.endpoint),f.setHeader("Upload-Concat","final;".concat(r._parallelUploadUrls.join(" ")));var g=or(r.options.metadata);return g!==""&&f.setHeader("Upload-Metadata",g),r._sendRequest(f,null)}).then(function(g){if(!ye(g.getStatus(),200)){r._emitHttpError(f,g,"tus: unexpected response while creating upload");return}var w=g.getHeader("Location");if(w==null){r._emitHttpError(f,g,"tus: invalid or missing Location header");return}r.url=lr(r.options.endpoint,w),"Created upload at ".concat(r.url),r._emitSuccess(g)}).catch(function(g){r._emitError(g)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var r=this;if(this._parallelUploads!=null){var o=Vi(this._parallelUploads),n;try{for(o.s();!(n=o.n()).done;){var s=n.value;s.abort(t)}}catch(l){o.e(l)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():i.terminate(this.url,this.options).then(function(){return r._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,r,o,n){this._emitError(new Pe(o,n,t,r))}},{key:"_emitError",value:function(t){var r=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),ar(t,this._retryAttempt,this.options)){var n=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){r.start()},n);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,r){typeof this.options.onProgress=="function"&&this.options.onProgress(t,r)}},{key:"_emitChunkComplete",value:function(t,r,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,r,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var r=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?r.setHeader("Upload-Defer-Length","1"):r.setHeader("Upload-Length","".concat(this._size));var o=or(this.options.metadata);o!==""&&r.setHeader("Upload-Metadata",o);var n;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,n=this._addChunkToRequest(r)):((this.options.protocol===Ke||this.options.protocol===Oe)&&r.setHeader("Upload-Complete","?0"),n=this._sendRequest(r,null)),n.then(function(s){if(!ye(s.getStatus(),200)){t._emitHttpError(r,s,"tus: unexpected response while creating upload");return}var l=s.getHeader("Location");if(l==null){t._emitHttpError(r,s,"tus: invalid or missing Location header");return}if(t.url=lr(t.options.endpoint,l),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(s),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(r,s):(t._offset=0,t._performUpload())})}).catch(function(s){t._emitHttpError(r,null,"tus: failed to create upload",s)})}},{key:"_resumeUpload",value:function(){var t=this,r=this._openRequest("HEAD",this.url),o=this._sendRequest(r,null);o.then(function(n){var s=n.getStatus();if(!ye(s,200)){if(s===423){t._emitHttpError(r,n,"tus: upload is currently locked; retry later");return}if(ye(s,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(r,n,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var l=Number.parseInt(n.getHeader("Upload-Offset"),10);if(Number.isNaN(l)){t._emitHttpError(r,n,"tus: invalid or missing offset value");return}var d=Number.parseInt(n.getHeader("Upload-Length"),10);if(Number.isNaN(d)&&!t.options.uploadLengthDeferred&&t.options.protocol===Xe){t._emitHttpError(r,n,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(l===d){t._emitProgress(d,d),t._emitSuccess(n);return}t._offset=l,t._performUpload()})}).catch(function(n){t._emitHttpError(r,null,"tus: failed to resume upload",n)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var r;this.options.overridePatchMethod?(r=this._openRequest("POST",this.url),r.setHeader("X-HTTP-Method-Override","PATCH")):r=this._openRequest("PATCH",this.url),r.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(r);o.then(function(n){if(!ye(n.getStatus(),200)){t._emitHttpError(r,n,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(r,n)}).catch(function(n){t._aborted||t._emitHttpError(r,null,"tus: failed to upload chunk at offset ".concat(t._offset),n)})}}},{key:"_addChunkToRequest",value:function(t){var r=this,o=this._offset,n=this._offset+this.options.chunkSize;return t.setProgressHandler(function(s){r._emitProgress(o+s,r._size)}),this.options.protocol===Xe?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Oe&&t.setHeader("Content-Type","application/partial-upload"),(n===Number.POSITIVE_INFINITY||n>this._size)&&!this.options.uploadLengthDeferred&&(n=this._size),this._source.slice(o,n).then(function(s){var l=s.value,d=s.done,f=l!=null&&l.size?l.size:0;r.options.uploadLengthDeferred&&d&&(r._size=r._offset+f,t.setHeader("Upload-Length","".concat(r._size)));var g=r._offset+f;return!r.options.uploadLengthDeferred&&d&&g!==r._size?Promise.reject(new Error("upload was configured with a size of ".concat(r._size," bytes, but the source is done after ").concat(g," bytes"))):l===null?r._sendRequest(t):((r.options.protocol===Ke||r.options.protocol===Oe)&&t.setHeader("Upload-Complete",d?"?1":"?0"),r._emitProgress(r._offset,r._size),r._sendRequest(t,l))})}},{key:"_handleUploadResponse",value:function(t,r){var o=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,r,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(r),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,r){var o=nr(t,r,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r){t._emitError(r)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var r={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?r.parallelUploadUrls=this._parallelUploadUrls:r.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,r).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return sr(t,r,this.options)}}],[{key:"terminate",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=nr("DELETE",t,r);return sr(o,null,r).then(function(n){if(n.getStatus()!==204)throw new Pe("tus: unexpected response while terminating upload",null,o,n)}).catch(function(n){if(n instanceof Pe||(n=new Pe("tus: failed to terminate upload",n,o,null)),!ar(n,0,r))throw n;var s=r.retryDelays[0],l=r.retryDelays.slice(1),d=xe(xe({},r),{},{retryDelays:l});return new Promise(function(f){return setTimeout(f,s)}).then(function(){return i.terminate(t,d)})})}}])})();function or(i){return Object.entries(i).map(function(e){var t=jr(e,2),r=t[0],o=t[1];return"".concat(r," ").concat(Di.encode(String(o)))}).join(",")}function ye(i,e){return i>=e&&i<e+100}function nr(i,e,t){var r=t.httpStack.createRequest(i,e);t.protocol===Ke?r.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Oe?r.setHeader("Upload-Draft-Interop-Version","6"):r.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},n=0,s=Object.entries(o);n<s.length;n++){var l=jr(s[n],2),d=l[0],f=l[1];r.setHeader(d,f)}if(t.addRequestId){var g=Mi();r.setHeader("X-Request-ID",g)}return r}function sr(i,e,t){return gt.apply(this,arguments)}function gt(){return gt=Hi(ht().mark(function i(e,t,r){var o;return ht().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(typeof r.onBeforeRequest!="function"){s.next=3;break}return s.next=3,r.onBeforeRequest(e);case 3:return s.next=5,e.send(t);case 5:if(o=s.sent,typeof r.onAfterResponse!="function"){s.next=9;break}return s.next=9,r.onAfterResponse(e,o);case 9:return s.abrupt("return",o);case 10:case"end":return s.stop()}},i)})),gt.apply(this,arguments)}function Ji(){var i=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(i=!1),i}function ar(i,e,t){return t.retryDelays==null||e>=t.retryDelays.length||i.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(i,e,t):Br(i)}function Br(i){var e=i.originalResponse?i.originalResponse.getStatus():0;return(!ye(e,400)||e===409||e===423)&&Ji()}function lr(i,e){return new Ii(e,i).toString()}function Qi(i,e){for(var t=Math.floor(i/e),r=[],o=0;o<e;o++)r.push({start:t*o,end:t*(o+1)});return r[e-1].end=i,r}Ze.defaultOptions=Zi;var Ir=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function eo(i){return new Promise(function(e,t){var r=new XMLHttpRequest;r.responseType="blob",r.onload=function(){var o=r.response;e(o)},r.onerror=function(o){t(o)},r.open("GET",i),r.send()})}var to=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function ro(i){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){var o=new Uint8Array(r.result);e({value:o})},r.onerror=function(o){t(o)},r.readAsArrayBuffer(i)})}function Le(i){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Le(i)}function io(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function oo(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,so(r.key),r)}}function no(i,e,t){return e&&oo(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function so(i){var e=ao(i,"string");return Le(e)=="symbol"?e:e+""}function ao(i,e){if(Le(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(Le(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var dr=(function(){function i(e){io(this,i),this._file=e,this.size=e.size}return no(i,[{key:"slice",value:function(t,r){if(to())return ro(this._file.slice(t,r));var o=this._file.slice(t,r),n=r>=this.size;return Promise.resolve({value:o,done:n})}},{key:"close",value:function(){}}])})();function je(i){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},je(i)}function lo(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function co(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,fo(r.key),r)}}function po(i,e,t){return e&&co(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function fo(i){var e=uo(i,"string");return je(e)=="symbol"?e:e+""}function uo(i,e){if(je(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(je(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}function cr(i){return i===void 0?0:i.size!==void 0?i.size:i.length}function ho(i,e){if(i.concat)return i.concat(e);if(i instanceof Blob)return new Blob([i,e],{type:i.type});if(i.set){var t=new i.constructor(i.length+e.length);return t.set(i),t.set(e,i.length),t}throw new Error("Unknown data type")}var go=(function(){function i(e){lo(this,i),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return po(i,[{key:"slice",value:function(t,r){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,r)}},{key:"_readUntilEnoughDataOrDone",value:function(t,r){var o=this,n=r<=this._bufferOffset+cr(this._buffer);if(this._done||n){var s=this._getDataFromBuffer(t,r),l=s==null?this._done:!1;return Promise.resolve({value:s,done:l})}return this._reader.read().then(function(d){var f=d.value,g=d.done;return g?o._done=!0:o._buffer===void 0?o._buffer=f:o._buffer=ho(o._buffer,f),o._readUntilEnoughDataOrDone(t,r)})}},{key:"_getDataFromBuffer",value:function(t,r){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=cr(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,r-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function fe(i){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(i)}function vt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */vt=function(){return e};var i,e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(u,c,p){u[c]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",d=n.toStringTag||"@@toStringTag";function f(u,c,p){return Object.defineProperty(u,c,{value:p,enumerable:!0,configurable:!0,writable:!0}),u[c]}try{f({},"")}catch{f=function(p,b,_){return p[b]=_}}function g(u,c,p,b){var _=c&&c.prototype instanceof S?c:S,y=Object.create(_.prototype),T=new Z(b||[]);return o(y,"_invoke",{value:V(u,p,T)}),y}function w(u,c,p){try{return{type:"normal",arg:u.call(c,p)}}catch(b){return{type:"throw",arg:b}}}e.wrap=g;var P="suspendedStart",R="suspendedYield",z="executing",C="completed",E={};function S(){}function v(){}function x(){}var h={};f(h,s,function(){return this});var m=Object.getPrototypeOf,O=m&&m(m(de([])));O&&O!==t&&r.call(O,s)&&(h=O);var $=x.prototype=S.prototype=Object.create(h);function L(u){["next","throw","return"].forEach(function(c){f(u,c,function(p){return this._invoke(c,p)})})}function D(u,c){function p(_,y,T,F){var A=w(u[_],u,y);if(A.type!=="throw"){var N=A.arg,H=N.value;return H&&fe(H)=="object"&&r.call(H,"__await")?c.resolve(H.__await).then(function(Y){p("next",Y,T,F)},function(Y){p("throw",Y,T,F)}):c.resolve(H).then(function(Y){N.value=Y,T(N)},function(Y){return p("throw",Y,T,F)})}F(A.arg)}var b;o(this,"_invoke",{value:function(y,T){function F(){return new c(function(A,N){p(y,T,A,N)})}return b=b?b.then(F,F):F()}})}function V(u,c,p){var b=P;return function(_,y){if(b===z)throw Error("Generator is already running");if(b===C){if(_==="throw")throw y;return{value:i,done:!0}}for(p.method=_,p.arg=y;;){var T=p.delegate;if(T){var F=te(T,p);if(F){if(F===E)continue;return F}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(b===P)throw b=C,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);b=z;var A=w(u,c,p);if(A.type==="normal"){if(b=p.done?C:R,A.arg===E)continue;return{value:A.arg,done:p.done}}A.type==="throw"&&(b=C,p.method="throw",p.arg=A.arg)}}}function te(u,c){var p=c.method,b=u.iterator[p];if(b===i)return c.delegate=null,p==="throw"&&u.iterator.return&&(c.method="return",c.arg=i,te(u,c),c.method==="throw")||p!=="return"&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+p+"' method")),E;var _=w(b,u.iterator,c.arg);if(_.type==="throw")return c.method="throw",c.arg=_.arg,c.delegate=null,E;var y=_.arg;return y?y.done?(c[u.resultName]=y.value,c.next=u.nextLoc,c.method!=="return"&&(c.method="next",c.arg=i),c.delegate=null,E):y:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,E)}function ge(u){var c={tryLoc:u[0]};1 in u&&(c.catchLoc=u[1]),2 in u&&(c.finallyLoc=u[2],c.afterLoc=u[3]),this.tryEntries.push(c)}function U(u){var c=u.completion||{};c.type="normal",delete c.arg,u.completion=c}function Z(u){this.tryEntries=[{tryLoc:"root"}],u.forEach(ge,this),this.reset(!0)}function de(u){if(u||u===""){var c=u[s];if(c)return c.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var p=-1,b=function _(){for(;++p<u.length;)if(r.call(u,p))return _.value=u[p],_.done=!1,_;return _.value=i,_.done=!0,_};return b.next=b}}throw new TypeError(fe(u)+" is not iterable")}return v.prototype=x,o($,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:v,configurable:!0}),v.displayName=f(x,d,"GeneratorFunction"),e.isGeneratorFunction=function(u){var c=typeof u=="function"&&u.constructor;return!!c&&(c===v||(c.displayName||c.name)==="GeneratorFunction")},e.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,x):(u.__proto__=x,f(u,d,"GeneratorFunction")),u.prototype=Object.create($),u},e.awrap=function(u){return{__await:u}},L(D.prototype),f(D.prototype,l,function(){return this}),e.AsyncIterator=D,e.async=function(u,c,p,b,_){_===void 0&&(_=Promise);var y=new D(g(u,c,p,b),_);return e.isGeneratorFunction(c)?y:y.next().then(function(T){return T.done?T.value:y.next()})},L($),f($,d,"Generator"),f($,s,function(){return this}),f($,"toString",function(){return"[object Generator]"}),e.keys=function(u){var c=Object(u),p=[];for(var b in c)p.push(b);return p.reverse(),function _(){for(;p.length;){var y=p.pop();if(y in c)return _.value=y,_.done=!1,_}return _.done=!0,_}},e.values=de,Z.prototype={constructor:Z,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(U),!c)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=i)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var p=this;function b(N,H){return T.type="throw",T.arg=c,p.next=N,H&&(p.method="next",p.arg=i),!!H}for(var _=this.tryEntries.length-1;_>=0;--_){var y=this.tryEntries[_],T=y.completion;if(y.tryLoc==="root")return b("end");if(y.tryLoc<=this.prev){var F=r.call(y,"catchLoc"),A=r.call(y,"finallyLoc");if(F&&A){if(this.prev<y.catchLoc)return b(y.catchLoc,!0);if(this.prev<y.finallyLoc)return b(y.finallyLoc)}else if(F){if(this.prev<y.catchLoc)return b(y.catchLoc,!0)}else{if(!A)throw Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return b(y.finallyLoc)}}}},abrupt:function(c,p){for(var b=this.tryEntries.length-1;b>=0;--b){var _=this.tryEntries[b];if(_.tryLoc<=this.prev&&r.call(_,"finallyLoc")&&this.prev<_.finallyLoc){var y=_;break}}y&&(c==="break"||c==="continue")&&y.tryLoc<=p&&p<=y.finallyLoc&&(y=null);var T=y?y.completion:{};return T.type=c,T.arg=p,y?(this.method="next",this.next=y.finallyLoc,E):this.complete(T)},complete:function(c,p){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&p&&(this.next=p),E},finish:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.finallyLoc===c)return this.complete(b.completion,b.afterLoc),U(b),E}},catch:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.tryLoc===c){var _=b.completion;if(_.type==="throw"){var y=_.arg;U(b)}return y}}throw Error("illegal catch attempt")},delegateYield:function(c,p,b){return this.delegate={iterator:de(c),resultName:p,nextLoc:b},this.method==="next"&&(this.arg=i),E}},e}function pr(i,e,t,r,o,n,s){try{var l=i[n](s),d=l.value}catch(f){t(f);return}l.done?e(d):Promise.resolve(d).then(r,o)}function vo(i){return function(){var e=this,t=arguments;return new Promise(function(r,o){var n=i.apply(e,t);function s(d){pr(n,r,o,s,l,"next",d)}function l(d){pr(n,r,o,s,l,"throw",d)}s(void 0)})}}function xo(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function mo(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,yo(r.key),r)}}function bo(i,e,t){return e&&mo(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function yo(i){var e=wo(i,"string");return fe(e)=="symbol"?e:e+""}function wo(i,e){if(fe(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(fe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var _o=(function(){function i(){xo(this,i)}return bo(i,[{key:"openFile",value:(function(){var e=vo(vt().mark(function r(o,n){var s;return vt().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(Ir()&&o&&typeof o.uri<"u")){d.next=11;break}return d.prev=1,d.next=4,eo(o.uri);case 4:return s=d.sent,d.abrupt("return",new dr(s));case 8:throw d.prev=8,d.t0=d.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(d.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){d.next=13;break}return d.abrupt("return",Promise.resolve(new dr(o)));case 13:if(typeof o.read!="function"){d.next=18;break}if(n=Number(n),Number.isFinite(n)){d.next=17;break}return d.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return d.abrupt("return",Promise.resolve(new go(o,n)));case 18:return d.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return d.stop()}},r,null,[[1,8]])}));function t(r,o){return e.apply(this,arguments)}return t})()}])})();function ko(i,e){return Ir()?Promise.resolve(Co(i,e)):Promise.resolve(["tus-br",i.name,i.type,i.size,i.lastModified,e.endpoint].join("-"))}function Co(i,e){var t=i.exif?So(JSON.stringify(i.exif)):"noexif";return["tus-rn",i.name||"noname",i.size||"nosize",t,e.endpoint].join("/")}function So(i){var e=0;if(i.length===0)return e;for(var t=0;t<i.length;t++){var r=i.charCodeAt(t);e=(e<<5)-e+r,e&=e}return e}function Fe(i){"@babel/helpers - typeof";return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fe(i)}function Ut(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function $o(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,Uo(r.key),r)}}function Et(i,e,t){return e&&$o(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Uo(i){var e=Eo(i,"string");return Fe(e)=="symbol"?e:e+""}function Eo(i,e){if(Fe(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(Fe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var Po=(function(){function i(){Ut(this,i)}return Et(i,[{key:"createRequest",value:function(t,r){return new zo(t,r)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),zo=(function(){function i(e,t){Ut(this,i),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return Et(i,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,r){this._xhr.setRequestHeader(t,r),this._headers[t]=r}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(r){r.lengthComputable&&t(r.loaded)})}},{key:"send",value:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,n){t._xhr.onload=function(){o(new Oo(t._xhr))},t._xhr.onerror=function(s){n(s)},t._xhr.send(r)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Oo=(function(){function i(e){Ut(this,i),this._xhr=e}return Et(i,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Ae(i){"@babel/helpers - typeof";return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae(i)}function Ro(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function To(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,Lo(r.key),r)}}function Do(i,e,t){return e&&To(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Lo(i){var e=jo(i,"string");return Ae(e)=="symbol"?e:e+""}function jo(i,e){if(Ae(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(Ae(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var xt=!1;try{xt="localStorage"in window;var lt="tusSupport",fr=localStorage.getItem(lt);localStorage.setItem(lt,fr),fr===null&&localStorage.removeItem(lt)}catch(i){if(i.code===i.SECURITY_ERR||i.code===i.QUOTA_EXCEEDED_ERR)xt=!1;else throw i}var Fo=xt,Ao=(function(){function i(){Ro(this,i)}return Do(i,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var r=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(r)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,r){var o=Math.round(Math.random()*1e12),n="tus::".concat(t,"::").concat(o);return localStorage.setItem(n,JSON.stringify(r)),Promise.resolve(n)}},{key:"_findEntries",value:function(t){for(var r=[],o=0;o<localStorage.length;o++){var n=localStorage.key(o);if(n.indexOf(t)===0)try{var s=JSON.parse(localStorage.getItem(n));s.urlStorageKey=n,r.push(s)}catch{}}return r}}])})();function Ce(i){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(i)}function Bo(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Io(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,Hr(r.key),r)}}function Mo(i,e,t){return t&&Io(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function Ho(i,e,t){return e=Je(e),qo(i,Mr()?Reflect.construct(e,t||[],Je(i).constructor):e.apply(i,t))}function qo(i,e){if(e&&(Ce(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return No(i)}function No(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Mr(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Mr=function(){return!!i})()}function Je(i){return Je=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Je(i)}function Yo(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&mt(i,e)}function mt(i,e){return mt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},mt(i,e)}function ur(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,r)}return t}function we(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ur(Object(t),!0).forEach(function(r){Vo(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):ur(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function Vo(i,e,t){return e=Hr(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function Hr(i){var e=Go(i,"string");return Ce(e)=="symbol"?e:e+""}function Go(i,e){if(Ce(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e);if(Ce(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}var hr=we(we({},Ze.defaultOptions),{},{httpStack:new Po,fileReader:new _o,urlStorage:Fo?new Ao:new ki,fingerprint:ko}),Wo=(function(i){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Bo(this,e),r=we(we({},hr),r),Ho(this,e,[t,r])}return Yo(e,i),Mo(e,null,[{key:"terminate",value:function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=we(we({},hr),o),Ze.terminate(r,o)}}])})(Ze);const Xo=10*1024*1024,Ko=5*1024*1024,Zo="https://eu-on-24001.connector.filerobot.com/files",Jo="https://eu-on-24001.connector.filerobot.com/json";function Qo(i,e){if(!e||!i.file)return!1;const t=e.sizeThreshold??Xo;return i.size>=t}function en(i,e){const{tusConfig:t}=e,r=e.apiBase.replace(/\/+$/,""),o=t.endpoint||Zo,n=t.chunkSize??Ko,s=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],f=r.split("/").pop()||"";let g=!1,w=!1,P=!1;const R={name:i.name,type:i.type,"filerobot-folder":e.folder},z=async()=>`tus-${i.id}-${o}`,C=new Wo(i.file,{endpoint:o,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:s,removeFingerprintOnSuccess:!0,headers:{},metadata:R,fingerprint:z,onBeforeRequest(h){const m=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[O,$]of Object.entries(m))h.setHeader(O,$);h.setHeader("X-Filerobot-Token",f)},onUploadUrlAvailable(){C.url&&e.onUploadUrlAvailable&&!P&&(P=!0,e.onUploadUrlAvailable(C.url))},onProgress(h,m){!w&&!g&&e.onProgress(h,m)},onSuccess(){var O;if(w)return;v();const h=C.url||"",m=(O=h.match(/files\/([^/?]+)/))==null?void 0:O[1];m?rn(m,i.size).then($=>{w||e.onComplete($)}).catch($=>{w||e.onError($)}):e.onComplete({status:"success",file:{uuid:"",name:i.name,extension:i.name.split(".").pop()||"",type:i.type,size:i.size,url:{public:h,cdn:h},meta:i.meta,tags:i.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(h){w||(v(),tn(h)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(h instanceof Error?h:new Error(String(h))))},onShouldRetry(h,m,O){var L;const $=(L=h.originalResponse)==null?void 0:L.getStatus();return $===429?!0:!($&&$>400&&$<500&&$!==409)}});let E=null,S=null;typeof window<"u"&&(E=()=>{var h;!g&&!w&&(g=!0,C.abort(!1),(h=e.onPause)==null||h.call(e))},S=()=>{var h;g&&!w&&(g=!1,C.start(),(h=e.onResume)==null||h.call(e))},window.addEventListener("offline",E),window.addEventListener("online",S));const v=()=>{E&&window.removeEventListener("offline",E),S&&window.removeEventListener("online",S)},x=()=>{try{C.start()}catch(h){v(),e.onError(h instanceof Error?h:new Error(String(h)))}};return s?C.findPreviousUploads().then(h=>{h.length>0&&!w&&C.resumeFromPreviousUpload(h[0]),w||x()}):x(),{abort(){w=!0,g=!1,v(),C.abort(!0)},pause(){!g&&!w&&(g=!0,C.abort(!1))},resume(){g&&!w&&(g=!1,C.start())},isPaused(){return g}}}function tn(i){var e;if(i instanceof Pe){const t=(e=i.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:i.originalResponse==null&&i.causingError!=null}return!1}async function rn(i,e){const t=`${Jo}/${i}`,r=e>1e8?13e3:6e3,o=3;for(let n=0;n<=o;n++){n>0&&await new Promise(d=>setTimeout(d,r));const s=await fetch(t);if(s.status===404&&n<o)continue;if(!s.ok)throw new Error(`Failed to fetch file record (HTTP ${s.status})`);const l=await s.json();if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<o))throw new Error(l.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class qr{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const r of e.values())r.status==="idle"?(M(this.store,r.id,{status:"queued"}),t=!0):r.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(M(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&M(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),M(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:r}=this.store.getState().queueConfig;this.activeUploads.size<r?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),M(this.store,e,{status:"uploading"})):M(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!gr(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),M(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())gr(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),M(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,r=this.activeUploads.size,o=t-r;if(o<=0)return;const s=[...e.files.values()].filter(l=>l.status==="queued").sort((l,d)=>l.retryCount!==d.retryCount?d.retryCount-l.retryCount:l.addedAt-d.addedAt).slice(0,o);for(const l of s){const d=this.pausedUploads.get(l.id);d?(this.pausedUploads.delete(l.id),d.resume(),this.activeUploads.set(l.id,d),M(this.store,l.id,{status:"uploading"})):this.startUpload(l)}}startUpload(e){const t=!e.remoteInfo&&!e.remoteUrl&&Qo(e,this.config.tusConfig);M(this.store,e.id,{status:"uploading",error:null,isTus:t});let r=0,o=Date.now(),n=0;const s={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:f=>this.handleComplete(e.id,f),onError:f=>this.handleError(e.id,f)},l=(f,g)=>{const w=Date.now(),P=(w-o)/1e3;if(P>0){const z=(f-r)/P;n=n===0?z:.3*z+.7*n}r=f,o=w;const R=g>0?Math.min(f/g*100,100):0;M(this.store,e.id,{progress:R,bytesUploaded:f,speed:n}),this.updateTotalProgress()};let d;if(e.remoteInfo)d=di(e,{...s,onProgress:l});else if(e.remoteUrl)d=ei(e,s);else if(t){const f=en(e,{...s,onProgress:l,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:g=>{M(this.store,e.id,{tusUploadUrl:g})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,f),M(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,f),M(this.store,e.id,{status:"uploading"})}});d=f}else d=Qr(e,{...s,onProgress:l});this.activeUploads.set(e.id,d)}handleComplete(e,t){this.activeUploads.delete(e),M(this.store,e,{status:"complete",progress:100,response:t}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const r=this.store.getState().files.get(e);if(!r)return;const{retryConfig:o}=this.store.getState().queueConfig,n=r.retryCount+1;if(n<=o.maxRetries){const s=Math.min(o.baseDelay*Math.pow(o.backoffFactor,r.retryCount),o.maxDelay);M(this.store,e,{status:"retrying",error:t.message,retryCount:n});const l=setTimeout(()=>{this.retryTimers.delete(e),M(this.store,e,{status:"queued"}),this.processQueue()},s);this.retryTimers.set(e,l)}else M(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,r=0,o=0;for(const n of e.values())(n.status==="queued"||n.status==="uploading"||n.status==="paused"||n.status==="retrying"||n.status==="complete"||n.status==="failed")&&(t+=n.size,r+=n.status==="complete"?n.size:n.bytesUploaded),n.status==="uploading"&&(o+=n.speed);this.store.setState({totalBytes:t,totalBytesUploaded:r,totalSpeed:o,totalProgress:t>0?Math.min(r/t*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying"||r.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function gr(i){return i==="queued"||i==="uploading"||i==="retrying"||i==="paused"}function ot(i){return`https://api.filerobot.com/${i}`}async function Nr(i,e){const t=`${ot(i)}/key/${encodeURIComponent(e)}`,r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(t,{signal:r.signal});if(clearTimeout(o),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const s=await n.json();if(s.status==="error")throw new Error(`SASS key exchange failed: ${s.msg||"Unknown error"}`);return s.key}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function Qe(i,e){const t={};switch(i.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=i.sassKey;break}return i.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=i.airboxPuid),t}async function Yr(i){const e=ot(i.container);if(i.mode==="security-template"){const t=await Nr(i.container,i.securityTemplateId);return{apiBase:e,headers:Qe(i,t),sassKey:t}}return{apiBase:e,headers:Qe(i)}}const et="sfx-uploader:last-upload:",Vr=1;function on(i){var n,s,l;const{file:e,previewUrl:t,...r}=i,o=i.status==="complete"&&((l=(s=(n=i.response)==null?void 0:n.file)==null?void 0:s.url)!=null&&l.cdn)?i.response.file.url.cdn:null;return{...r,previewUrl:o}}function nn(i){try{const e=sessionStorage.getItem(et+i);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==Vr?null:t}catch{return null}}function sn(i,e){try{sessionStorage.setItem(et+i,JSON.stringify(e))}catch{}}const Ge={save(i,e){if(e.length===0){this.clear(i);return}const t={__schemaVersion:Vr,savedAt:Date.now(),files:e.map(on)};sn(i,t)},load(i){const e=nn(i);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(i){try{return sessionStorage.getItem(et+i)!=null}catch{return!1}},clear(i){try{sessionStorage.removeItem(et+i)}catch{}}},j={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let an=0;function me(){return`file-${Date.now()}-${++an}`}function ne(i){if(i<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),e.length-1),r=i/Math.pow(1024,t);return`${t===0?r:r.toFixed(1)} ${e[t]}`}function dt(i){if(!isFinite(i)||i<=0)return"0s";const e=Math.round(i);if(e<60)return`${e}s`;const t=Math.floor(e/60),r=e%60;return r>0?`${t}m ${r}s`:`${t}m`}function Gr(i){var t;const e=((t=i.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return i.type.startsWith("image/")?"image":i.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":i.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":i.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function ln(i){const e=i.lastIndexOf(".");return e>=0?i.slice(e+1).toUpperCase():""}const dn="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Wr={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function bt(i){const e=i==="_default"?"GENERIC":i.toUpperCase();return`${dn}${e}.svg?vh=${Wr[i]}`}function Pt(i){const e=(i==null?void 0:i.toLowerCase().replaceAll(".",""))||"";return e in Wr?bt(e):bt("_default")}function zt(){return bt("_default")}const cn={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function pn(i){var t;const e=((t=i.split(".").pop())==null?void 0:t.toLowerCase())??"";return cn[e]||""}function fn(i){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const r=URL.createObjectURL(i);let o=!1;const n=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r)};t.addEventListener("seeked",()=>{try{const s=document.createElement("canvas");s.width=t.videoWidth||320,s.height=t.videoHeight||240;const l=s.getContext("2d");if(l){l.drawImage(t,0,0,s.width,s.height),s.toBlob(d=>{o||(o=!0,e(d?URL.createObjectURL(d):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r))},"image/jpeg",.7);return}}catch{}n()},{once:!0}),t.addEventListener("error",()=>n(),{once:!0}),setTimeout(()=>n(),5e3),t.src=r,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function yt(i,e,t){var r,o;if(e.maxFileSize!=null&&i.size>0&&i.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&i.size>0){let n=i.size;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&(n+=s.size);if(n>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let n=0;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&n++;if(n>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const n=e.allowedFileTypes,s="."+(((r=i.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(!n.some(d=>d.startsWith(".")?s===d.toLowerCase():d.endsWith("/*")?i.type.startsWith(d.slice(0,-1)):i.type===d))return"File type not allowed"}if(e.blockedFileTypes!=null){const n=e.blockedFileTypes,s="."+(((o=i.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(n.some(d=>d.startsWith(".")?s===d.toLowerCase():d.endsWith("/*")?i.type.startsWith(d.slice(0,-1)):i.type===d))return"File type is blocked"}return null}function un(i,e,t){return yt(i,e,t)}function vr(i){return i.allowedFileTypes?i.allowedFileTypes.join(","):""}const xr={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function Xr(i){return i.filter(e=>e in xr).map(e=>xr[e])}var hn=Object.defineProperty,gn=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&hn(e,t,o),o};const vn='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',xn='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',mn='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',bn='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',_e=[{id:"device",label:"My Device",icon:vn,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:xn,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:mn,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:bn,iconColor:"#ea580c"}],Tt=class Tt extends a.LitElement{constructor(){super(...arguments),this.sources=_e}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return a.html`
      ${this.sources.map(e=>a.html`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ce.unsafeHTML(e.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${oe.unsafeSVG(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};Tt.styles=a.css`
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
  `;let tt=Tt;gn([k.property({type:Array})],tt.prototype,"sources");function Kr(i){let e=i;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var yn=Object.defineProperty,J=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&yn(e,t,o),o};const mr=3,wt=new CSSStyleSheet;wt.replaceSync(`
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
`);var se;const K=(se=class extends a.LitElement{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=mr,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{var r;e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._emitFiles(t)},this._onClick=e=>{const t=this.shadowRoot.querySelector(".drop-zone");if(t&&this._rippleEl){const r=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-r.left}px`,this._rippleEl.style.top=`${e.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,r=Array.from(t.files??[]);r.length>0&&this._emitFiles(r),t.value=""},this._onPaste=e=>{var o;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const r=[];for(const n of t)if(n.kind==="file"){const s=n.getAsFile();s&&r.push(s)}r.length>0&&(e.preventDefault(),this._emitFiles(r))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var e;(e=this.fileInput)==null||e.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Kr(this).appendChild(this._portalContainer),this._injectDropdownStyles()),a.render(a.html`<div class="sfx-more-dropdown open">
          ${e.map(t=>a.html`
              <button
                class="sfx-more-item"
                @click=${r=>this._onMoreItemClick(t,r)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?ce.unsafeHTML(t.brandHtml):t.iconColor?a.html`<svg
                        viewBox="0 0 24 24"
                        style="color:${t.iconColor}"
                      >
                        ${oe.unsafeSVG(t.icon)}
                      </svg>`:a.svg`<svg viewBox="0 0 24 24">${oe.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(wt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,wt]))}_positionDropdown(){var w,P;const e=(w=this.shadowRoot)==null?void 0:w.querySelector(".more-wrap > button"),t=(P=this._portalContainer)==null?void 0:P.querySelector(".sfx-more-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),o=8,n=t.scrollHeight,s=t.offsetWidth,l=r.top,d=window.innerHeight-r.bottom;l>=n+o||l>d?t.style.top=`${r.top-n-o}px`:t.style.top=`${r.bottom+o}px`;let g=r.right-s;g=Math.max(8,Math.min(g,window.innerWidth-s-8)),t.style.left=`${g}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=mr}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const r=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=se._WIDE_THRESHOLD_PX;r&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!r&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){e.has("sourcesLayout")&&this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return a.html`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?ce.unsafeHTML(e.brandHtml):a.html`<span
              class="pill-ico"
              style=${e.iconColor?`color:${e.iconColor}`:""}
            >
              ${a.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${oe.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `}_renderCard(e){return a.html`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?a.html`<span class="card-ico">${ce.unsafeHTML(e.brandHtml)}</span>`:a.html`<span
              class="card-ico"
              style=${e.iconColor?`color:${e.iconColor}`:""}
            >
              ${a.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${oe.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `}_renderMoreCard(){return a.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="src-card"
          @click=${e=>this._toggleMore(e)}
        >
          <span
            class="card-ico"
            style="color: var(--sfx-up-text-muted, #94a3b8)"
          >
            <svg viewBox="0 0 24 24" style="fill: currentColor; stroke: none">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return a.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="more-pill"
          @click=${e=>this._toggleMore(e)}
        >
          More
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills);return a.html`
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

        <div class="title">Drag & Drop or click to <span>browse</span></div>
        ${this.compact?a.nothing:a.html`<div class="subtitle">Drop files anywhere on this page</div>`}
        ${!this.compact&&this.sources.length>0?a.html`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout==="cards"?a.html`
                    <div class="sources-cards">
                      ${t.map(o=>this._renderCard(o))}
                      ${r.length>0?this._renderMoreCard():a.nothing}
                    </div>
                  `:a.html`
                    <div class="sources-grid">
                      ${t.map(o=>this._renderPill(o))}
                      ${r.length>0?this._renderMoreDropdown():a.nothing}
                    </div>
                  `}
            `:a.nothing}
        ${this.compact&&this.sources.length>0?a.html`
              <div class="sources-row">
                ${this.sources.map(o=>a.html`
                    <button
                      class="src-ico"
                      style=${o.iconColor&&!o.brandHtml?`color:${o.iconColor}`:""}
                      data-tip=${o.label}
                      aria-label=${o.label}
                      @click=${n=>{n.stopPropagation(),this._onSourceIconClick(o)}}
                    >
                      ${o.brandHtml?ce.unsafeHTML(o.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${oe.unsafeSVG(o.icon)}</svg>`}
                    </button>
                  `)}
              </div>
            `:a.nothing}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept||a.nothing}
          @change=${this._onFileChange}
        />
      </div>
    `}},se.styles=a.css`
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
      background: var(--sfx-up-bg, #fff);
      padding: 50px 40px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: auto;
      transition: background 0.22s;
      user-select: none;
      flex: 1;
    }

    :host([mode="inline"]) .drop-zone {
      height: 100%;
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
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
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
    }

    .drop-zone:not(.compact) .rings::before {
      content: "";
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
      transition:
        font-size 0.3s,
        margin 0.3s;
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
      content: "";
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
    input[type="file"] {
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
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) {
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
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .rings {
      width: 140px;
      height: 140px;
      margin-bottom: 28px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core {
      width: 68px;
      height: 68px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core svg {
      width: 30px;
      height: 30px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .title {
      font-size: 22px;
      margin-bottom: 8px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .subtitle {
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
  `,se._WIDE_THRESHOLD_PX=1200,se);J([k.property({type:Boolean,reflect:!0})],K.prototype,"compact");J([k.property({type:Boolean,attribute:"external-drag-over"})],K.prototype,"externalDragOver");J([k.property({type:String})],K.prototype,"accept");J([k.property({type:Array})],K.prototype,"sources");J([k.property({type:String,attribute:"sources-layout"})],K.prototype,"sourcesLayout");J([k.property({type:String,reflect:!0})],K.prototype,"mode");J([k.state()],K.prototype,"_dragOver");J([k.state()],K.prototype,"_moreOpen");J([k.state()],K.prototype,"_visiblePills");J([k.query(".ripple")],K.prototype,"_rippleEl");J([k.query('input[type="file"]')],K.prototype,"fileInput");let wn=K;const Dt=class Dt extends a.LitElement{render(){return a.html`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};Dt.styles=a.css`
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
  `;let _t=Dt;var _n=Object.defineProperty,ee=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&_n(e,t,o),o};const kt=new CSSStyleSheet;kt.replaceSync(`
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
`);const Lt=class Lt extends a.LitElement{constructor(){super(...arguments),this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),r=e.composedPath();t&&r.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const t=e.target,r=Array.from(t.files??[]);r.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:r},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const r=this.renderRoot.querySelector('input[type="file"]');r==null||r.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Kr(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),a.render(a.html`<div class="sfx-tile-dropdown">
        ${e.map(t=>a.html`
          <button
            class="sfx-tile-dropdown-item"
            @click=${r=>this._onMoreSourceClick(r,t)}
          >
            <span class="sfx-tile-dropdown-ico" style=${t.iconColor&&!t.brandHtml?`color:${t.iconColor}`:""}>
              ${t.brandHtml?ce.unsafeHTML(t.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${oe.unsafeSVG(t.icon)}</svg>`}
            </span>
            ${t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var w;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(w=this._portalContainer)==null?void 0:w.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),o=6,n=t.scrollHeight,s=t.offsetWidth,l=r.top,d=window.innerHeight-r.bottom;l>=n+o||l>d?t.style.top=`${r.top-n-o}px`:t.style.top=`${r.bottom+o}px`;let g=r.right-s;g=Math.max(8,Math.min(g,window.innerWidth-s-8)),t.style.left=`${g}px`}_closePortal(){this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(kt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,kt]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),r=this.sources.slice(e);return a.html`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
          <div class="drop-tile-rings">
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-core">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">Drop or click to <span>browse</span></div>
          ${t.length>0?a.html`
            <div class="drop-tile-sources">
              ${t.map(o=>a.html`
                <button
                  class="drop-tile-src"
                  style=${o.iconColor&&!o.brandHtml?`color:${o.iconColor}`:""}
                  title=${o.label}
                  @click=${n=>this._onSourceClick(n,o)}
                >
                  ${o.brandHtml?ce.unsafeHTML(o.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${oe.unsafeSVG(o.icon)}</svg>`}
                </button>
              `)}
              ${r.length>0?a.html`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title="More sources" @click=${o=>this._toggleMore(o)}>···</button>
                </div>
              `:a.nothing}
            </div>
          `:a.nothing}
        </div>
        <input type="file" multiple accept=${this.accept||a.nothing} @change=${this._onFileInput} />
      </div>
    `}render(){return a.html`
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():a.nothing}
        ${this.files.map((e,t)=>a.html`<sfx-file-item .file=${e} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} style="--tile-index:${t}"></sfx-file-item>`)}
      </div>
    `}};Lt.styles=a.css`
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
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 200px), 1fr));
      gap: 12px;
      padding: 0 var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
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
        padding: 0 12px 16px;
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
       container-type lets the inner rings/icon scale with tile width via cqi. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — wider bottom padding so the source pills don't hug the
       card edge. Natural height stays close to the file-card .info area. */
    .drop-tile-info {
      padding: 12px 12px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    .drop-tile-rings {
      width: clamp(48px, 24cqi, 100px);
      height: clamp(48px, 24cqi, 100px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
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
      to { transform: rotate(360deg); }
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
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
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

    input[type="file"] {
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
  `;let W=Lt;ee([k.property({attribute:!1})],W.prototype,"files");ee([k.property({type:Boolean})],W.prototype,"showDropTile");ee([k.property({attribute:!1})],W.prototype,"sources");ee([k.property({type:String})],W.prototype,"accept");ee([k.property({type:String})],W.prototype,"mode");ee([k.property({attribute:!1})],W.prototype,"getLocateUrl");ee([k.property({type:Boolean})],W.prototype,"showLocateButton");ee([k.property({type:Boolean})],W.prototype,"showCopyCdnButton");ee([k.state()],W.prototype,"_moreOpen");ee([k.state()],W.prototype,"_dropTileMaxVisible");var kn=Object.defineProperty,he=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&kn(e,t,o),o};const jt=class jt extends a.LitElement{constructor(){super(...arguments),this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._dims="",this._copied=!1,this._copiedTimer=null}updated(e){var t,r,o,n,s;if(e.has("file")){if(this._dims="",(r=(t=this.file)==null?void 0:t.previewUrl)!=null&&r.startsWith("blob:")){const l=this.file.previewUrl,d=new Image;d.onload=()=>{var f;((f=this.file)==null?void 0:f.previewUrl)===l&&(this._dims=`${d.naturalWidth}×${d.naturalHeight}`)},d.src=l}else if((s=(n=(o=this.file)==null?void 0:o.response)==null?void 0:n.file)!=null&&s.info){const l=this.file.response.file.info;l.img_w&&l.img_h&&(this._dims=`${l.img_w}×${l.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var r,o,n,s;e.stopPropagation();const t=(s=(n=(o=(r=this.file)==null?void 0:r.response)==null?void 0:o.file)==null?void 0:n.url)==null?void 0:s.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var w,P;const e=this.file;if(!e)return a.nothing;const t=Gr(e),r=e.status==="complete",o=e.status==="uploading",n=e.status==="paused",s=e.status==="error"||e.status==="failed",l=e.status==="rejected",d=this.mode==="review",f=ln(e.name),g=["tile",r?"done":"",o?"uploading":"",n?"paused":"",l?"rejected":"",d?"review":""].filter(Boolean).join(" ");return a.html`
      <div class=${g} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?a.html`<img class="preview-img" src=${e.previewUrl} alt="" />`:a.html`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Pt(f)}
                    alt="${f?`${f} file`:"File"}"
                    @error=${R=>{const z=R.target,C=zt();!z.dataset.fallback&&z.src!==C&&(z.dataset.fallback="1",z.src=C)}}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!d&&!r&&!o&&!n&&!s&&e.status!=="rejected"?a.html`
                <button class="preview-btn" @click=${this._preview} aria-label="Details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Details
                </button>
              `:a.nothing}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${d&&r&&((P=(w=e.response)==null?void 0:w.file)!=null&&P.url)&&(this.showLocateButton||this.showCopyCdnButton)?a.html`
                <div class="review-actions">
                  ${this.showLocateButton?a.html`<button class="review-action secondary" @click=${this._locate} aria-label="Locate file in storage">
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        Locate
                      </button>`:a.nothing}
                  ${this.showCopyCdnButton&&e.response.file.url.cdn?a.html`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title="Copy CDN link" aria-label="Copy CDN link to clipboard">
                        ${this._copied?a.html`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:a.html`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?"Copied":"Copy CDN"}
                      </button>`:a.nothing}
                </div>
              `:a.nothing}

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
          ${r?a.html`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:a.nothing}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${d&&s?a.html`<div class="failed-badge" title=${e.error||"Upload failed"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:a.nothing}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!d&&(e.status==="uploading"||e.status==="paused")?a.html`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress,100)/100})"></div>
                </div>
              `:a.nothing}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(s||l)&&e.error&&!d?a.html`<div class="error-badge" title=${e.error}>${e.error}</div>`:a.nothing}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(s||l)&&e.duration!=null&&e.duration>0?a.html`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:a.nothing}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${d?a.nothing:a.html`
        <div class="actions">
          ${o&&e.isTus?a.html`
                <button class="act-btn pause" @click=${this._pause} title="Pause" aria-label="Pause upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:a.nothing}
          ${n?a.html`
                <button class="act-btn resume" @click=${this._resume} title="Resume" aria-label="Resume upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:a.nothing}
          ${s?a.html`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:a.nothing}
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
        `}

        <!-- Info bar -->
        <div class="info">
          <input class="name-input" type="text" .value=${e.name} title=${e.name}
            aria-label="File name"
            ?readonly=${d}
            @change=${d?a.nothing:this._rename} @click=${R=>R.stopPropagation()} />
          <div class="meta">${f||""}${e.size?` · ${ne(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r.toString().padStart(2,"0")}`}};jt.styles=a.css`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      will-change: transform, opacity;
      transition: box-shadow 0.15s, transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 0;
      overflow: hidden;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
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

    .preview-bg.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-bg.doc { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.audio { background: linear-gradient(135deg, #fdf4ff, #fae8ff); }
    .preview-bg.sheet { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .preview-bg.slide { background: linear-gradient(135deg, #fff7ed, #ffedd5); }
    .preview-bg.zip { background: linear-gradient(135deg, #fffbeb, #fef3c7); }
    .preview-bg.code { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); }
    .preview-bg.markup { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); }
    .preview-bg.font { background: linear-gradient(135deg, #faf5ff, #f3e8ff); }
    .preview-bg.design { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }
    .preview-bg.binary { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }
    .preview-bg.data { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
    .preview-bg.gen { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }

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
      transition: border-color 0.15s, background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
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
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
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

    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions {
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
      transition: transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
                  box-shadow 0.18s ease,
                  background 0.15s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18),
                  0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22),
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
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
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
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring { display: none; }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon { display: flex; }

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
  `;let Q=jt;he([k.property({attribute:!1})],Q.prototype,"file");he([k.property({type:String})],Q.prototype,"mode");he([k.property({attribute:!1})],Q.prototype,"getLocateUrl");he([k.property({type:Boolean})],Q.prototype,"showLocateButton");he([k.property({type:Boolean})],Q.prototype,"showCopyCdnButton");he([k.state()],Q.prototype,"_dims");he([k.state()],Q.prototype,"_copied");const Me=a.css`
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
`,He=a.css`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Cn=Object.defineProperty,Ee=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&Cn(e,t,o),o};const br=7,Sn=4,Ft=class Ft extends a.LitElement{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this._maxThumbs=br,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?Sn:br;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),t=this.thumbnails.length-this._maxThumbs,r=this.fileCount>0,o=this.failedFiles.length>0,n=o&&!r;return a.html`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${n?"error":o?"warning":""}">
          ${n?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:o?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${n?"Upload failed":o?"Partially uploaded":"Uploaded successfully!"}</div>
        <div class="subtitle">${n?`${this.failedFiles.length===1?"File":"Files"} could not be uploaded`:o?`${this.fileCount} ${this.fileCount===1?"file":"files"} uploaded, ${this.failedFiles.length} failed`:"All files are ready for use"}</div>

        ${e.length>0?a.html`
              <div class="thumbs">
                ${e.map(s=>a.html`<img class="thumb" src=${s} alt="" />`)}
                ${t>0?a.html`<div class="thumb-more">+${t}</div>`:a.nothing}
              </div>
            `:a.nothing}

        ${r?a.html`<div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${ne(this.totalSize)} uploaded</div>`:a.nothing}

        ${o?a.html`
            <div class="failed-list">
              ${this.failedFiles.map(s=>a.html`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${s.name}</div>
                    <div class="failed-reason">${s.error}</div>
                  </div>
                  <button class="failed-retry" title="Retry" @click=${()=>this._retryFile(s.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `:a.nothing}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${r||o?a.html`<button class="btn-ghost" @click=${this._reviewFiles}>Review files (${this.fileCount+this.failedFiles.length})</button>`:a.nothing}
          ${o?a.html`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>`:a.nothing}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Ft.styles=[Me,He,a.css`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
      position: relative;
      overflow-y: auto;
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
      background: #f0fdf4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: #22c55e;
      box-shadow: none;
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .icon.warning {
      background: #fffbeb;
      color: #f59e0b;
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

    .actions .btn-primary {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      box-shadow: 0 2px 10px rgba(34, 197, 94, 0.28);
    }

    .actions .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #16a34a, #15803d);
      box-shadow: 0 4px 16px rgba(34, 197, 94, 0.38);
    }

    /* --- Failed files list --- */
    .failed-list {
      width: 100%;
      max-width: 400px;
      max-height: 200px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e8eaed);
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.15) transparent;
    }

    .failed-list::-webkit-scrollbar {
      width: 6px;
    }

    .failed-list::-webkit-scrollbar-track {
      background: transparent;
      margin: 6px 0;
    }

    .failed-list::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 3px;
    }

    .failed-list::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.25);
    }

    .failed-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid var(--sfx-up-border, #f1f5f9);
      margin-right: 8px;
    }

    .failed-item:last-child {
      border-bottom: none;
    }

    .failed-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #ef4444;
      margin-top: 1px;
    }

    .failed-info {
      flex: 1;
      min-width: 0;
    }

    .failed-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .failed-reason {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.4;
    }

    .failed-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin-top: -2px;
    }

    .failed-retry svg { width: 14px; height: 14px; }

    .failed-retry:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-primary-hover, #1d4ed8); }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0;
    }

    .close-btn svg { width: 16px; height: 16px; }

    .close-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

    .btn-retry-all {
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: #fff;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .btn-retry-all:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
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

    @media (max-width: 768px) {
      :host {
        padding: 16px 12px;
        align-items: flex-start;
      }
      .card {
        width: 100%;
        max-width: 100%;
        padding-top: 8px;
      }
      .icon { width: 56px; height: 56px; margin-bottom: 14px; }
      .icon svg { width: 26px; height: 26px; }
      .title { font-size: 18px; }
      .subtitle { font-size: 13px; max-width: 100%; padding: 0 8px; }
      .thumb, .thumb-more { width: 48px; height: 48px; }
      .failed-list { max-width: 100%; }

      /* Stack action buttons two-up on mobile so labels don't wrap. */
      .actions {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        padding: 0 8px;
        box-sizing: border-box;
      }
      .actions > button {
        flex: 1 1 calc(50% - 8px);
        min-width: 0;
        white-space: nowrap;
      }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 17px; }
      .subtitle { max-width: 90vw; padding: 0 4px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    /* Galaxy Z Fold / S8+ — extra narrow: tighten thumb grid so 5+
       thumbs don't force horizontal overflow. */
    @media (max-width: 380px) {
      .thumbs { gap: 4px; }
      .thumb, .thumb-more { width: 40px; height: 40px; }
      .failed-list { max-width: calc(100vw - 24px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];let re=Ft;Ee([k.property({type:Number})],re.prototype,"fileCount");Ee([k.property({type:Number})],re.prototype,"totalSize");Ee([k.property({type:Array})],re.prototype,"thumbnails");Ee([k.property({type:String})],re.prototype,"primaryLabel");Ee([k.property({type:Array})],re.prototype,"failedFiles");Ee([k.state()],re.prototype,"_maxThumbs");var $n=Object.defineProperty,qe=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&$n(e,t,o),o};const At=class At extends a.LitElement{constructor(){super(...arguments),this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return a.html`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title="Back">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <span class="title">Last upload <span class="count">— ${t} ${t===1?"file":"files"}</span></span>
        <div class="filters">
          <button class="chip ${this._filter==="all"?"active":""}" @click=${this._setFilter("all")}>
            All (${t})
          </button>
          <button class="chip ${this._filter==="success"?"active":""}" @click=${this._setFilter("success")}>
            ✓ Uploaded (${this._successCount})
          </button>
          ${this._failedCount>0?a.html`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ Failed (${this._failedCount})
              </button>`:a.nothing}
          <button class="clear-btn" @click=${this._onClear} title="Clear last upload from this browser">Clear</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?a.html`<div class="empty">No files match this filter.</div>`:a.html`<sfx-file-list .files=${e} mode="review" .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};At.styles=a.css`
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
      .topbar { padding: 12px 16px; }
    }
  `;let ae=At;qe([k.property({attribute:!1})],ae.prototype,"files");qe([k.property({attribute:!1})],ae.prototype,"getLocateUrl");qe([k.property({type:Boolean})],ae.prototype,"showLocateButton");qe([k.property({type:Boolean})],ae.prototype,"showCopyCdnButton");qe([k.state()],ae.prototype,"_filter");customElements.define("sfx-last-upload-review",ae);var Un=Object.defineProperty,ie=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&Un(e,t,o),o};const Bt=class Bt extends a.LitElement{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.uploadDisabled=!1,this.uploadDisabledReason="",this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return a.html`
      ${e?a.html`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Upload progress"
              >
                <div
                  class="progress-fill"
                  style="width:${this.uploadProgress}%"
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} files</span
              >
            </div>
          `:a.nothing}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?a.html`
                <button class="btn-sec" @click=${this._fillMetadata} aria-label="Fill Metadata">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">Fill Metadata</span>
                </button>
              `:a.nothing}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label="Clear">
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
            <span class="btn-label">Clear</span>
          </button>
          <button class="btn-sec" @click=${this._addMore} aria-label="Add more">
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
            <span class="btn-label">Add more</span>
          </button>
          ${this.failedCount>0?a.html`
                <button
                  class="btn-retry"
                  @click=${this._retryAll}
                  aria-label="Retry all (${this.failedCount})"
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
                  <span class="btn-label">Retry all (${this.failedCount})</span>
                </button>
              `:a.nothing}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",r=["btn-primary",t?"done-state":""].filter(Boolean).join(" "),o=e?"Uploading":t?"Done":"Upload";return a.html`
      <button
        class=${r}
        @click=${this._upload}
        ?disabled=${e||this.uploadDisabled}
        title=${this.uploadDisabled?this.uploadDisabledReason:""}
        aria-label=${o}
      >
        ${e?a.html`<span class="btn-spin"></span
              ><span class="btn-label">Uploading…</span>`:t?a.html`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="btn-label">Done!</span>
            `:a.html`
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
              <span class="btn-label">Upload</span>
            `}
      </button>
    `}};Bt.styles=[Me,He,a.css`
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
        content: "";
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

      /* --- Progress row --- */
      .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 24px 0;
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
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
    `];let X=Bt;ie([k.property({type:String})],X.prototype,"uploadState");ie([k.property({type:Number})],X.prototype,"fileCount");ie([k.property({type:Number})],X.prototype,"totalSize");ie([k.property({type:Number})],X.prototype,"failedCount");ie([k.property({type:Boolean})],X.prototype,"showFillMetadata");ie([k.property({type:Boolean})],X.prototype,"uploadDisabled");ie([k.property({type:String})],X.prototype,"uploadDisabledReason");ie([k.property({type:Number})],X.prototype,"completedCount");ie([k.property({type:Number})],X.prototype,"uploadProgress");const En='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function Ot(i,e){return t=>{if(t.key!=="Tab")return;const r=i();if(!r)return;const o=r.querySelector(e);if(!o)return;const n=Array.from(o.querySelectorAll(En));if(n.length===0)return;const s=n[0],l=n[n.length-1],d=r.activeElement;t.shiftKey?(d===s||!o.contains(d))&&(t.preventDefault(),l.focus()):(d===l||!o.contains(d))&&(t.preventDefault(),s.focus())}}var Pn=Object.defineProperty,Rt=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&Pn(e,t,o),o};const It=class It extends a.LitElement{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=Ot(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),r=t[t.length-1];if(r){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=r)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let t=this._name.trim();if(!t)try{const r=new URL(e).pathname.split("/");t=r[r.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return a.html`
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
            ${this._error?a.html`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};It.styles=[Me,He,a.css`
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

  `];let Se=It;Rt([k.state()],Se.prototype,"_url");Rt([k.state()],Se.prototype,"_name");Rt([k.state()],Se.prototype,"_error");var zn=Object.defineProperty,nt=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&zn(e,t,o),o};const Mt=class Mt extends a.LitElement{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Ot(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,n;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(n=this.shadowRoot)==null?void 0:n.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(s=>{s&&(this._captured=s,this._previewUrl=URL.createObjectURL(s),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return a.html`
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
            ${this._error?a.html`<div class="error">${this._error}</div>`:this._captured?a.html`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `:a.html`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Mt.styles=[Me,He,a.css`
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
  `];let ue=Mt;nt([k.state()],ue.prototype,"_stream");nt([k.state()],ue.prototype,"_error");nt([k.state()],ue.prototype,"_captured");nt([k.state()],ue.prototype,"_previewUrl");var On=Object.defineProperty,Ne=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&On(e,t,o),o};const Ht=class Ht extends a.LitElement{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Ot(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const r=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:r}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var n;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(n=this._stream)==null||n.getTracks().forEach(s=>s.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return a.html`
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
            ${this._error?a.html`<div class="error">${this._error}</div>`:this._recordedBlob?a.html`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `:this._recording?a.html`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `:a.html`
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
    `}};Ht.styles=[Me,He,a.css`
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
  `];let le=Ht;Ne([k.state()],le.prototype,"_stream");Ne([k.state()],le.prototype,"_recording");Ne([k.state()],le.prototype,"_error");Ne([k.state()],le.prototype,"_recordedBlob");Ne([k.state()],le.prototype,"_previewUrl");var Rn=Object.defineProperty,Zr=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&Rn(e,t,o),o};const qt=class qt extends a.LitElement{constructor(){super(...arguments),this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const r=++this._nextId;this._toasts=[...this._toasts,{id:r,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(r),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const r=[...this._toasts];r[t]={...r[t],leaving:!0},this._toasts=r,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?a.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?a.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:a.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?a.html``:a.html`
      <div class="toast-stack">
        ${this._toasts.map(e=>a.html`
            <div class="toast toast--${e.type} ${e.leaving?"leaving":""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button class="toast-close" @click=${()=>this._dismiss(e.id)} aria-label="Dismiss">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `)}
      </div>
    `}};qt.styles=a.css`
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
      from { opacity: 0; transform: translateY(8px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(8px) scale(0.96); }
    }
  `;let Be=qt;Zr([k.property({type:Number})],Be.prototype,"duration");Zr([k.state()],Be.prototype,"_toasts");customElements.define("sfx-toast",Be);var Tn=Object.defineProperty,I=(i,e,t,r)=>{for(var o=void 0,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=s(e,t,o)||o);return o&&Tn(e,t,o),o};const yr=new Set(["unsplash"]),be={isTus:!1,tusUploadUrl:null};var G;const B=(G=class extends a.LitElement{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=_e,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:r,value:o}=e.detail,n=this._store.getState().files.get(t);if(!n)return;const s=new Map(this._store.getState().files);s.set(t,{...n,meta:{...n.meta,[r]:o}}),this._store.setState({files:s})},this._onFilesSelected=e=>{this._processIncomingFiles(e.detail.files)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,n;const t=this._mergedSources.find(s=>s.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(s){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,s)}return}if(e==="device"){const s=this.shadowRoot.querySelector("sfx-drop-zone");s==null||s.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((n=(o=this.config)==null?void 0:o.connectors)==null?void 0:n.providers)??[]).includes(e)){if(yr.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await Promise.resolve().then(()=>require("./search-provider-browser-4WOfCzXK.cjs"));customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await Promise.resolve().then(()=>require("./provider-browser-BtiWQKFS.cjs"));customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var w,P,R;this._showUrlDialog=!1;const{url:t,name:r}=e.detail,o=(w=this.config)==null?void 0:w.callbacks,n=pn(r),s=n.startsWith("image/"),l=this._store.getState();if([...l.files.values()].some(z=>z.name===r&&z.status!=="rejected"&&z.status!=="cancelled"))return;const f=yt({name:r,size:0,type:n},l.restrictions,l.files);if(f){const z={id:me(),status:"rejected",file:null,remoteUrl:t,name:r,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:f,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...be};ve(this._store,z),this._dispatchPublic(j.FILE_REJECTED,{file:z,reason:f}),(P=o==null?void 0:o.onFileRejected)==null||P.call(o,z,f);return}const g={id:me(),status:"idle",file:null,remoteUrl:t,name:r,size:0,type:n,previewUrl:s?t:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...be};ve(this._store,g),this._dispatchPublic(j.FILE_ADDED,{file:g}),(R=o==null?void 0:o.onFileAdded)==null||R.call(o,g),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var r,o,n;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(j.FILE_PREVIEW,{file:t}),(n=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFilePreview)==null||n.call(o,t))},this._onFillMetadata=()=>{var t,r,o,n;const e=[...this._store.getState().files.values()].filter(s=>G._MODIFIABLE_STATUSES.has(s.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataOpen=!0),this._dispatchPublic(j.FILL_METADATA,{files:e}),(n=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFillMetadata)==null||n.call(o,e)},this._onFileLocate=e=>{var r,o,n;const t=e.detail.file;t&&(this._dispatchPublic(j.FILE_LOCATE,{file:t}),(n=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFileLocate)==null||n.call(o,t))},this._onFileCopyCdn=e=>{var o,n,s;const t=e.detail.file,r=e.detail.cdnUrl;!t||!r||(this._dispatchPublic(j.FILE_COPY_CDN,{file:t,cdnUrl:r}),(s=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileCopyCdn)==null||s.call(n,t,r))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const r=new Map(this._store.getState().files);for(const{fileId:o,meta:n}of t){const s=r.get(o);s&&r.set(o,{...s,meta:{...s.meta,...n}})}this._store.setState({files:r})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var r,o,n;const e=(r=this.config)==null?void 0:r.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(o=this._engine)==null||o.cancelAll();const t=[...this._store.getState().files.values()];for(const s of t)s.previewUrl&&URL.revokeObjectURL(s.previewUrl),this._dispatchPublic(j.FILE_REMOVED,{file:s}),(n=e==null?void 0:e.onFileRemoved)==null||n.call(e,s);this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),r=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');r==null||r.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=e,this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const r=Ge.load(t);!r||r.length===0||(this._reviewFiles=r,this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&Ge.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var r,o,n;const t=(r=this.config)==null?void 0:r.callbacks;for(const s of e.detail.files){const l=this._store.getState();if([...l.files.values()].some(w=>w.name===s.name&&w.size===s.size&&w.status!=="rejected"&&w.status!=="cancelled"))continue;const f=yt({name:s.name,size:s.size,type:s.mimeType},l.restrictions,l.files);if(f){const w={id:me(),status:"rejected",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:f,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...be};ve(this._store,w),this._dispatchPublic(j.FILE_REJECTED,{file:w,reason:f}),(o=t==null?void 0:t.onFileRejected)==null||o.call(t,w,f);continue}const g={id:me(),status:"idle",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...be};ve(this._store,g),this._dispatchPublic(j.FILE_ADDED,{file:g}),(n=t==null?void 0:t.onFileAdded)==null||n.call(t,g)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t,r,o,n;this._dispatchPublic(j.COMPLETE_ACTION,{}),(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCompleteAction)==null||r.call(t),((o=this.config)==null?void 0:o.mode)==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(j.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,r,o;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(j.COMPLETE_ACTION,{}),(o=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCompleteAction)==null||o.call(r),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,r,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(j.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,r,o;(e=this._engine)==null||e.cancelAll(),(o=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(j.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var e,t,r,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(j.CANCEL,{}),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{var r;e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t}}))},this._onKeyDown=e=>{var t,r;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const o=((t=this.config)==null?void 0:t.mode)??"modal",n=((r=this.config)==null?void 0:r.header)??(o==="modal"?"close":!0);(n==="close"||n==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var r;e.preventDefault(),this._isResizing=!0;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var s;this._splitRafId=0;const r=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-layout");if(!r)return;const o=r.getBoundingClientRect(),n=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,n))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,r=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(!this._fullscreenZoomed||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],r=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=_r(),this._storeCtrl=new Jr(this,this._store)}get _lastUploadId(){var r,o;const e=(r=this.config)==null?void 0:r.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}open(){var e,t,r;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onOpen)==null||r.call(t),this._dispatchPublic(j.OPEN,{}),this.requestUpdate())}close(){var e,t,r,o;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(o=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onClose)==null||o.call(r),this._dispatchPublic(j.CLOSE,{}),this.requestUpdate())}upload(){var o,n,s,l,d,f,g;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(w=>w.status==="idle"||w.status==="queued");if((n=(o=this.config)==null?void 0:o.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(j.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(j.UPLOAD_STARTED,{files:e}),(d=(l=(s=this.config)==null?void 0:s.callbacks)==null?void 0:l.onUploadStarted)==null||d.call(l,e),this._engine.uploadAll(),(f=this.config)!=null&&f.minimizeOnUpload&&((g=this.config)==null?void 0:g.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const r=this._store.getState().files,o=new Map(r);let n=!1;for(const s of e){const l=r.get(s.id);l&&(o.set(s.id,{...l,...s}),n=!0)}n&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,r){const o=this._store.getState().files,n=o.get(e);if(!n||!G._MODIFIABLE_STATUSES.has(n.status))return;const s=new Map(o);s.set(e,{...n,meta:t!=null?{...n.meta,...t}:n.meta,tags:r??n.tags}),this._store.setState({files:s})}updateFilesMeta(e){const t=this._store.getState().files,r=new Map(t);let o=!1;for(const{fileId:n,meta:s,tags:l}of e){const d=t.get(n);!d||!G._MODIFIABLE_STATUSES.has(d.status)||(r.set(n,{...d,meta:s!=null?{...d.meta,...s}:d.meta,tags:l??d.tags}),o=!0)}o&&this._store.setState({files:r})}updated(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,r=this._store.getState().files.get(t);r?this._getImageDimensions(r).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._applyDefaultPreviewWidth(),this._updateFloatingPortal()}_applyDefaultPreviewWidth(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-layout");if(!e){this._previewDefaultApplied=!1;return}this._previewDefaultApplied||e.getBoundingClientRect().width<=0||(this._splitPct=62.5,this._previewDefaultApplied=!0)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:24px; right:24px; z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-title { font-size:13px; font-weight:600; color:#1e293b; }
      [data-sfx-upload-float] .float-subtitle { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-actions button:hover { background:#f8fafc; color:#374151; }
      [data-sfx-upload-float] .float-actions button svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-progress { padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-progress-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
      [data-sfx-upload-float] .float-progress-label { font-size:12px; color:#475569; }
      [data-sfx-upload-float] .float-progress-pct { font-size:12px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-progress-pct.done { color:#22c55e; }
      [data-sfx-upload-float] .float-progress-pct.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-progress-pct.error { color:#ef4444; }
      [data-sfx-upload-float] .float-bar { height:4px; background:#e8edf5; border-radius:2px; overflow:hidden; }
      [data-sfx-upload-float] .float-bar-fill { height:100%; background:#2563eb; border-radius:2px; transition:width .3s ease; }
      [data-sfx-upload-float] .float-bar-fill.done { background:#22c55e; }
      [data-sfx-upload-float] .float-bar-fill.warn { background:#f59e0b; }
      [data-sfx-upload-float] .float-bar-fill.error { background:#ef4444; }
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
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }
      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }
      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }
      [data-sfx-upload-float] .float-collapsed-icon.done { color:#22c55e; }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:#ef4444; }
      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }
      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }
      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }
      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sfxSpin { to{transform:rotate(360deg)} }
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];this._isMinimized&&e.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),a.render(this._renderFloatingPill(e),this._portalContainer)):this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&Ge.exists(e)}disconnectedCallback(){var e,t,r,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(t=this._portalContainer)==null||t.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.targetFolder&&(t.targetFolder=e.targetFolder),e.restrictions&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions}),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,n;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=ot(t.container),this._authHeaders=Qe(t),this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(e);return}const r=++this._authResolveId;try{const s=await Yr(t);if(r!==this._authResolveId)return;this._apiBase=s.apiBase,this._authHeaders=s.headers,this._ensureEngine(),(n=this._engine)==null||n.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(e)}catch(s){if(r!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",s),this._showToast(this._formatAuthError(s))}}_formatAuthError(e){var r,o;const t=e instanceof Error?e.message:String(e);return(o=(r=this.config)==null?void 0:r.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const r=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");r==null||r.show(e,t)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new qr(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:r,createTagsAutocomplete:o}=await Promise.resolve().then(()=>require("./index-BpTfwkwD.cjs"));this._metadataSchema=await r(this._apiBase,this._authHeaders,t.projectUuid,t),this._metadataAutocomplete=o(this._apiBase,this._authHeaders)}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(e,t){const r=t.trim();if(!r)return;const o=this._store.getState().files.get(e);if(!o||o.name===r)return;const n=new Map(this._store.getState().files);n.set(e,{...o,name:r}),this._store.setState({files:n})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:e.enforceRequiredBeforeUpload===!0?!0:e.enforceRequiredBeforeUpload==="auto"?this._metadataSchema.forceFillingOnUpload:!1}get _hasUnfilledRequiredMetadata(){if(!this._metadataEnforcing||!this._metadataSchema)return!1;const e=this._metadataSchema.fields.filter(r=>{var n;const o=(n=this.config)==null?void 0:n.metadataConfig;return o!=null&&o.requiredFields?o.requiredFields.includes(r.ckey):r.required===1});if(e.length===0)return!1;const t=[...this._store.getState().files.values()].filter(r=>r.status==="idle"||r.status==="queued"||r.status==="rejected");return e.some(r=>t.some(o=>{const n=o.meta[r.key];return n==null?!0:Array.isArray(n)||typeof n=="string"?n.length===0:!n}))}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_onStoreChange(){var o,n,s,l,d,f,g,w,P,R;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0);const r=(o=this.config)==null?void 0:o.callbacks;for(const[z,C]of e.files){const E=t.files.get(z);if(E){if(E.status!==C.status)switch(C.status){case"uploading":E.status==="paused"&&(this._dispatchPublic(j.UPLOAD_RESUMED,{file:C}),(n=r==null?void 0:r.onUploadResumed)==null||n.call(r,C));break;case"complete":C.response&&(this._dispatchPublic(j.UPLOAD_COMPLETE,{file:C,response:C.response}),(s=r==null?void 0:r.onUploadComplete)==null||s.call(r,C,C.response));break;case"error":case"failed":{const S=new Error(C.error??"Upload failed");this._dispatchPublic(j.UPLOAD_ERROR,{file:C,error:S}),(l=r==null?void 0:r.onUploadError)==null||l.call(r,C,S);break}case"retrying":this._dispatchPublic(j.UPLOAD_RETRY,{file:C,attempt:C.retryCount}),(d=r==null?void 0:r.onUploadRetry)==null||d.call(r,C,C.retryCount);break;case"paused":this._dispatchPublic(j.UPLOAD_PAUSED,{file:C}),(f=r==null?void 0:r.onUploadPaused)==null||f.call(r,C);break}C.status==="uploading"&&E.progress!==C.progress&&(this._dispatchPublic(j.UPLOAD_PROGRESS,{file:C,progress:C.progress,speed:C.speed}),(g=r==null?void 0:r.onUploadProgress)==null||g.call(r,C,C.progress,C.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const z=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=z),this._dispatchPublic(j.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:z}),(w=r==null?void 0:r.onTotalProgress)==null||w.call(r,e.totalProgress,e.totalSpeed,z)}if(t.isUploading&&!e.isUploading){const z=[...e.files.values()];if(!z.some(E=>E.status==="cancelled")){const E=z.filter(h=>h.status==="complete"),S=z.filter(h=>h.status==="failed"||h.status==="error"),v=this._lastUploadId;if(v!=null){const h=[...E,...S];Ge.save(v,h),this._hasStoredReview=h.length>0}this._dispatchPublic(j.ALL_COMPLETE,{successful:E,failed:S}),(P=r==null?void 0:r.onAllComplete)==null||P.call(r,E,S);const x=(R=this.config)==null?void 0:R.closeOnComplete;if(x){const h=typeof x=="number"?x:1500;this._closeOnCompleteTimer=setTimeout(()=>{var m,O,$;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(j.COMPLETE_ACTION,{}),($=(O=(m=this.config)==null?void 0:m.callbacks)==null?void 0:O.onCompleteAction)==null||$.call(O),this.close())},h)}}}}get _mergedSources(){var d;const e=(d=this.config)==null?void 0:d.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=_e,this._cachedSources;const t=e.providers.length>0?Xr(e.providers):[],r=e.customSources??[],o=_e.filter(f=>f.id==="device"||f.id==="url"),n=_e.filter(f=>f.id!=="device"&&f.id!=="url"),s=new Set,l=[];for(const f of[...o,...t,...n,...r])if(!s.has(f.id)){if(G._RESERVED_IDS.has(f.id)&&f.onActivate){console.warn(`[sfx-uploader] Custom source id "${f.id}" conflicts with a built-in source and was skipped.`);continue}s.add(f.id),l.push(f)}return this._cachedSources=l,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>r.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var r,o,n,s;const t=(r=this.config)==null?void 0:r.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);for(const l of e){const d=this._store.getState();if([...d.files.values()].some(R=>R.name===l.name&&R.size===l.size&&R.status!=="rejected"&&R.status!=="cancelled"))continue;const g=un(l,d.restrictions,d.files);if(g){const R=l.type.startsWith("image/")?URL.createObjectURL(l):null,z={id:me(),status:"rejected",file:l,remoteUrl:null,name:l.name,size:l.size,type:l.type,previewUrl:R,duration:null,progress:0,speed:0,bytesUploaded:0,error:g,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...be};ve(this._store,z),this._dispatchPublic(j.FILE_REJECTED,{file:z,reason:g}),(o=t==null?void 0:t.onFileRejected)==null||o.call(t,z,g);const C=(n=this.config)==null?void 0:n.rejectedFileAutoRemoveDelay,E=C===!1||C===0||C===void 0?0:C;if(E>0){const S=z.id,v=setTimeout(()=>{this._rejectedTimers.delete(S);const x=this._store.getState().files.get(S);x&&x.status==="rejected"&&Nt(this._store,S)},E);this._rejectedTimers.set(S,v)}continue}let w=null;l.type.startsWith("image/")&&(w=URL.createObjectURL(l));const P={id:me(),status:"idle",file:l,remoteUrl:null,name:l.name,size:l.size,type:l.type,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...be};if(ve(this._store,P),this._dispatchPublic(j.FILE_ADDED,{file:P}),(s=t==null?void 0:t.onFileAdded)==null||s.call(t,P),l.type.startsWith("video/")){fn(l).then(z=>{if(!z)return;const C=this._store.getState(),E=C.files.get(P.id);if(E){const S=new Map(C.files);S.set(P.id,{...E,previewUrl:z}),this._store.setState({files:S})}else URL.revokeObjectURL(z)});const R=document.createElement("video");R.preload="metadata",R.src=URL.createObjectURL(l),R.onerror=()=>{URL.revokeObjectURL(R.src)},R.onloadedmetadata=()=>{const z=R.duration;if(URL.revokeObjectURL(R.src),!isFinite(z))return;const C=this._store.getState(),E=C.files.get(P.id);if(E){const S=new Map(C.files);S.set(P.id,{...E,duration:z}),this._store.setState({files:S})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(e){var n,s,l,d;const t=this._store.getState().files.get(e);if(!t)return;const r={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const f=this._videoBlobUrls.get(t.file);f&&(URL.revokeObjectURL(f),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((n=this._engine)==null||n.cancelFile(e)),Nt(this._store,e),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const f=[...this._store.getState().files.values()];this._previewFileId=f.length>0?f[0].id:null}this._dispatchPublic(j.FILE_REMOVED,{file:r}),(d=(l=(s=this.config)==null?void 0:s.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,r)}render(){var r;const e=((r=this.config)==null?void 0:r.mode)??"modal",t=[...this._storeCtrl.state.files.values()];return e==="modal"?a.html`
        ${this._isOpen&&!this._isMinimized?a.html`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast></sfx-toast>
                </div>
              </div>
            `:a.nothing}
        ${this._renderFsOverlay()}
      `:a.html`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return a.nothing;const e=[...this._store.getState().files.values()].filter(r=>r.previewUrl||r.type.startsWith("video/")&&r.file),t=e.findIndex(r=>r.id===this._previewFileId);return a.html`
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
        ${this._fullscreenVideoFile?a.html`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${r=>r.stopPropagation()}></video>`:a.html`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${r=>r.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
          ${this._fullscreenZoomed?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${t<=0} @click=${r=>{r.stopPropagation(),this._navigateFs(-1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${t>=e.length-1} @click=${r=>{r.stopPropagation(),this._navigateFs(1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `}_renderInlineHeader(e){return a.html`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?a.html`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:a.nothing}
          ${e.title?a.html`<h2 class="inline-header-title">${e.title}</h2>`:a.nothing}
        </div>
        ${e.description?a.html`<div class="inline-header-desc">${e.description}</div>`:a.nothing}
      </div>
    `}_renderHeader(){var s,l,d;if(this._phase==="complete")return a.nothing;const e=((s=this.config)==null?void 0:s.mode)??"modal";if(this._phase==="uploading"){const g=[...this._storeCtrl.state.files.values()],w=g.filter(P=>P.status==="complete").length;return a.html`
        <div class="header upload-header">
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
                Uploading ${g.length}
                ${g.length===1?"file":"files"}
              </div>
              <div class="float-subtitle">
                ${w} of
                ${g.length}${this._lastEta>0?` · ~${dt(this._lastEta)} left`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(e==="inline"&&((l=this.config)!=null&&l.inlineHeader))return a.nothing;const t=((d=this.config)==null?void 0:d.header)??(e==="modal"?"close":!0);if(t===!1)return a.nothing;const r=e==="modal"?this._onModalDismiss:this._onInlineDismiss,o=t==="back"?a.html`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
            @click=${r}
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
          </button>`:a.nothing,n=t==="close"?a.html`<button
            class="header-btn header-btn-close"
            aria-label="Close"
            @click=${r}
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
          </button>`:a.nothing;return a.html`
      <div class="header">
        ${o}
        ${t!=="back"?a.html` <div class="header-icon">
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
            </div>`:a.nothing}
        <div class="header-title">Upload Files</div>
        ${n}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const r=new Image;r.onload=()=>{const o={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(e.id,o),t(o)},r.onerror=()=>{this._dimCache.set(e.id,null),t(null)},r.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var n;const t=this._storeCtrl.state,r=Math.round(t.totalProgress??0),o=e.filter(s=>s.status==="complete").length;return a.html`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${r}%</div>
        <div class="upload-overlay-title">
          Uploading ${e.length} ${e.length===1?"file":"files"}
        </div>
        <div class="upload-overlay-subtitle">
          ${o} of ${e.length}
          complete${this._lastEta>0?a.html` · ~${dt(this._lastEta)} left`:a.nothing}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${r}%"></div>
        </div>
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            Cancel upload
          </button>
          ${(n=this.config)!=null&&n.minimizeOnUpload?a.html`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                Minimize & continue in background
              </button>`:a.nothing}
        </div>
      </div>
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,r=Math.round(t.totalProgress??0),o=this._phase==="complete",n=e.filter(l=>l.status==="complete").length,s=e.filter(l=>l.status==="failed").length;return this._isPillExpanded===!1?a.html`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?s>0?n>0?a.html`<div class="float-collapsed-icon warn">
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
                    </div>`:a.html`<div class="float-collapsed-icon error">
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
                    </div>`:a.html`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>`:a.html`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${o?s>0?n>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${e.length} ${e.length===1?"file":"files"}`}</span
            >
            ${o?a.nothing:a.html`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            <button title="Open uploader" @click=${this._onPillExpand}>
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
            <button title="Expand" @click=${this._onPillClick}>
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
            <button title="Close" @click=${this._onPillDismiss}>
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
      `:a.html`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${o?s>0?n>0?"warn":"error":"done":""}"
            >
              ${o?s>0?n>0?a.html`<svg
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
                      </svg>`:a.html`<svg
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
                      </svg>`:a.html`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>`:a.html`<svg
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
              <div class="float-title">
                ${o?s>0?n>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${e.length} ${e.length===1?"file":"files"}`}
              </div>
              <div class="float-subtitle">
                ${o?`${n} ${n===1?"file":"files"} uploaded${s>0?`, ${s} failed`:""}`:`${n} of ${e.length}${this._lastEta>0?` · ~${dt(this._lastEta)} left`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            <button title="Expand" @click=${this._onPillExpand}>
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
            <button title="Collapse" @click=${this._onPillClick}>
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
            <button title="Close" @click=${this._onPillDismiss}>
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
            <span class="float-progress-label">Overall progress</span>
            <span
              class="float-progress-pct ${o?s>0?n>0?"warn":"error":"done":""}"
              >${o?"Done":`${r}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${o?s>0?n>0?"warn":"error":"done":""}"
              style="width:${o?100:r}%"
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${e.map(l=>{const d=l.status==="failed"||l.status==="error";return a.html`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  style=${l.previewUrl?`background-image:url(${l.previewUrl});background-size:cover;background-position:center`:""}
                >
                  ${l.previewUrl?a.nothing:a.html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>`}
                </div>
                <div class="float-item-info">
                  <div class="float-item-name">${l.name}</div>
                  <div class="float-item-size">${ne(l.size)}</div>
                </div>
                <div class="float-item-status">
                  ${l.status==="complete"?a.html`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>`:d?a.html` <div class="float-item-error-wrap">
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
                            >${l.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var f;this._ensureEngine(),(f=this._engine)==null||f.retryFile(l.id)}}
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
                        </button>`:l.status==="paused"?a.html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d97706"
                        stroke-width="2"
                        width="16"
                        height="16"
                      >
                        <rect
                          x="6"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                        <rect
                          x="14"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                      </svg>`:a.html`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var n,s,l,d,f;if(e.length===0)return a.nothing;const t=e.find(g=>g.id===this._previewFileId)??e[0],r=((n=t.name.split(".").pop())==null?void 0:n.toUpperCase())||"";new Date(t.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const o=e.reduce((g,w)=>g+(w.size||0),0);return a.html`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&((l=this.config)!=null&&l.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):a.nothing}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${e.length} ${e.length===1?"asset":"assets"} ·
              ${ne(o)}</span
            >
          </div>
          <sfx-file-list
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${vr(this._storeCtrl.state.restrictions)}
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
        <div class="preview-panel" style="flex:${100-this._splitPct}">
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${()=>{this._previewFileId=null}}
              aria-label="Back to file list"
              title="Back"
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
            <span class="preview-header-name" title=${t.name}
              >${t.name}</span
            >
            <div class="preview-header-actions">
              ${t.previewUrl||t.type.startsWith("video/")&&t.file?a.html`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=t.previewUrl,this._fullscreenVideoFile=t.type.startsWith("video/")&&t.file?t.file:null,this._fullscreenZoomed=!1,requestAnimationFrame(()=>this.requestUpdate())}}
                      title="Fullscreen"
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
                  `:a.nothing}
              <button
                @click=${()=>{this._previewFileId=null}}
                title="Close"
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
          ${t.type.startsWith("video/")&&t.file?a.html`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(t.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(t)===0}
                    @click=${()=>this._navigatePreview(e,-1)}
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
                    ?disabled=${e.indexOf(t)===e.length-1}
                    @click=${()=>this._navigatePreview(e,1)}
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
              `:t.previewUrl?a.html`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${t.previewUrl}
                      alt=${t.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(t)===0}
                    @click=${()=>this._navigatePreview(e,-1)}
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
                    ?disabled=${e.indexOf(t)===e.length-1}
                    @click=${()=>this._navigatePreview(e,1)}
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
              `:a.html`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${Gr(t)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Pt(r)}
                      alt="${r?`${r} file`:"File"}"
                      @error=${g=>{const w=g.target,P=zt();!w.dataset.fallback&&w.src!==P&&(w.dataset.fallback="1",w.src=P)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(t)===0}
                    @click=${()=>this._navigatePreview(e,-1)}
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
                    ?disabled=${e.indexOf(t)===e.length-1}
                    @click=${()=>this._navigatePreview(e,1)}
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
          ${this._metadataSchema&&((d=this.config)!=null&&d.metadataConfig)?a.html`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${r}${t.size?` · ${ne(t.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:a.nothing}
          ${this._metadataSchema&&((f=this.config)!=null&&f.metadataConfig)?a.html`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${t.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:a.html`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                    @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                  >
                    <span>File info</span>
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
                      <div class="preview-file-info-key">File name</div>
                      <div class="preview-file-info-val">
                        ${t.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">Type</div>
                      <div class="preview-file-info-val">${r}</div>
                    </div>
                    ${t.size?a.html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Size</div>
                            <div class="preview-file-info-val">
                              ${ne(t.size)}
                            </div>
                          </div>
                        `:a.nothing}
                    ${this._previewDims!=="—"?a.html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Dimensions</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:a.nothing}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_navigatePreview(e,t){var n;const o=e.findIndex(s=>s.id===this._previewFileId)+t;if(o>=0&&o<e.length){const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-image[controls]");s&&(s.pause(),s.removeAttribute("src"),s.load()),this._previewFileId=e[o].id}}_renderBody(){var s,l,d,f,g,w,P,R,z,C,E;const e=this._storeCtrl.state,t=[...e.files.values()],r=this._phase,o=vr(e.restrictions),n=t.length>0;return a.html`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
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
          class="body ${n?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId?"has-preview":""}"
          @dragenter=${n?this._onBodyDragEnter:a.nothing}
          @dragover=${n?this._onBodyDragOver:a.nothing}
          @dragleave=${n?this._onBodyDragLeave:a.nothing}
          @drop=${n?this._onBodyDrop:a.nothing}
        >
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&((l=this.config)!=null&&l.inlineHeader)&&!this._previewFileId&&r!=="uploading"&&r!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):a.nothing}
          ${this._isReviewing?a.html`
                <sfx-last-upload-review
                  .files=${this._reviewFiles}
                  .getLocateUrl=${(d=this.config)==null?void 0:d.getLocateUrl}
                  .showLocateButton=${((f=this.config)==null?void 0:f.showLocateButton)??!1}
                  .showCopyCdnButton=${((g=this.config)==null?void 0:g.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:r==="complete"?a.html`
                <sfx-success-card
                  .fileCount=${t.filter(S=>S.status==="complete").length}
                  .totalSize=${t.filter(S=>S.status==="complete").reduce((S,v)=>S+(v.size||0),0)}
                  .thumbnails=${t.filter(S=>S.status==="complete"&&S.previewUrl).map(S=>S.previewUrl)}
                  .failedFiles=${t.filter(S=>S.status==="failed").map(S=>({id:S.id,name:S.name,error:S.error||"Upload failed"}))}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:r==="uploading"?this._renderUploadOverlay(t):a.html`
                ${n?a.nothing:a.html`<sfx-drop-zone
                        .compact=${n}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${o}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((w=this.config)==null?void 0:w.sourcesLayout)??"pills"}
                        .mode=${((P=this.config)==null?void 0:P.mode)??"modal"}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?a.html`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title="View last upload batch"
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            View last upload
                          </button>`:a.nothing}`}
                ${n?this._previewFileId?this._renderPreviewLayout(t):a.html`
                        <div class="asset-count">
                          ${t.length}
                          ${t.length===1?"file":"files"} ·
                          ${ne(t.reduce((S,v)=>S+(v.size||0),0))}
                        </div>
                        <sfx-file-list
                          .files=${t}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${o}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:a.nothing}
              `}
        </div>

        ${n&&r!=="complete"&&r!=="uploading"?a.html`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((S,v)=>S+(v.size||0),0)}
                .failedCount=${t.filter(S=>S.status==="failed"||S.status==="error").length}
                .completedCount=${t.filter(S=>S.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((R=this.config)==null?void 0:R.showFillMetadata)??((z=this.config)==null?void 0:z.metadataConfig))}
                .uploadDisabled=${this._hasUnfilledRequiredMetadata}
                .uploadDisabledReason=${this._hasUnfilledRequiredMetadata?"Fill required metadata first":""}
              ></sfx-actions-bar>
            `:a.nothing}
        ${this._showUrlDialog?a.html`<sfx-url-dialog></sfx-url-dialog>`:a.nothing}
        ${this._showCameraDialog?a.html`<sfx-camera-dialog></sfx-camera-dialog>`:a.nothing}
        ${this._showScreenCastDialog?a.html`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:a.nothing}
        ${this._activeConnector&&((C=this.config)!=null&&C.connectors)?a.html`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${yr.has(this._activeConnector)?a.html`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `:a.html`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:a.nothing}
        ${this._bulkMetadataOpen&&this._metadataSchema?a.html`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(S=>G._MODIFIABLE_STATUSES.has(S.status))}
                .config=${((E=this.config)==null?void 0:E.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:a.nothing}
      </div>
    `}_navigateFs(e){const t=[...this._store.getState().files.values()].filter(n=>n.previewUrl||n.type.startsWith("video/")&&n.file),r=t.findIndex(n=>n.id===this._previewFileId);if(r===-1)return;const o=r+e;if(o>=0&&o<t.length){const n=t[o];this._fullscreenPreviewUrl=n.previewUrl,this._fullscreenVideoFile=n.type.startsWith("video/")&&n.file?n.file:null,this._previewFileId=n.id,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},G.styles=a.css`
    :host {
      display: block;
      height: inherit;
      font-family: var(
        --sfx-up-font,
        "Inter",
        system-ui,
        -apple-system,
        sans-serif
      );
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
      --sfx-up-font: "Inter", system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
      /* Fullscreen overlay z-index stack — single source of truth so
         mobile overrides don't drift out of sync with base values. */
      --sfx-fs-z: 10000;
      --sfx-fs-controls-z: 10001;
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
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 1100px;
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
      content: "Back to Asset Picker";
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
      position: relative;
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
      content: "";
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
      content: "";
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
      bottom: 16px;
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

    /* Only scroll inline when showing drop-zone (no files) */
    .inline.no-files {
      overflow-y: auto;
      overflow-x: hidden;
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
      flex: 1 0 auto;
    }

    /* Inline: body grows so .inline itself can scroll.
       padding: 0 in both states so the header never jumps;
       children use --sfx-inline-pad for horizontal spacing. */
    .inline .body {
      flex: 1 0 auto;
      overflow: visible;
      padding: 0;
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
      --sfx-up-grid-min: 170px;
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
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 4px;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: "";
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

    .preview-panel::-webkit-scrollbar {
      width: 12px;
    }
    .preview-panel::-webkit-scrollbar-track {
      background: transparent;
    }
    .preview-panel::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 6px;
    }
    .preview-panel::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
      background-clip: padding-box;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 24px 16px 12px;
      flex-shrink: 0;
      box-sizing: border-box;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
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
      gap: 4px;
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
      color: var(--sfx-up-text-muted, #94a3b8);
      transition:
        background 0.15s,
        color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f3f4f6);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
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
      background-image: linear-gradient(
          45deg,
          var(--sfx-up-checker-tile) 25%,
          transparent 25%
        ),
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

    /* --- Upload overlay (in-modal) --- */
    .upload-overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      gap: 8px;
      padding: 32px 24px;
      position: relative;
      animation: fadeUp 0.3s ease both;
    }

    .upload-overlay-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid var(--sfx-up-border, #e2e8f0);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 8px;
    }

    .upload-overlay-percent {
      font-size: 40px;
      font-weight: 700;
      color: var(--sfx-up-primary, #2563eb);
      line-height: 1;
    }

    .upload-overlay-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-subtitle {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
    }

    .upload-overlay-bar {
      width: 240px;
      height: 6px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .upload-overlay-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    .upload-overlay-minimize {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-minimize:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .upload-overlay-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .upload-overlay-cancel {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-cancel:hover {
      border-color: var(--sfx-up-error, #dc2626);
      color: var(--sfx-up-error, #dc2626);
    }

    .upload-header {
      justify-content: space-between;
    }

    .upload-header .float-actions button {
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .upload-header .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .upload-header .float-actions button svg {
      width: 16px;
      height: 16px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
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

    /* --- Floating upload card (Variant 3 style) --- */
    .upload-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
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
    }

    .float-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
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

    .float-icon.done {
      background: #f0fdf4;
      color: #22c55e;
    }

    .float-icon.error {
      background: #fef2f2;
      color: #ef4444;
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

    .float-actions {
      display: flex;
      gap: 4px;
    }

    .float-actions button {
      width: 26px;
      height: 26px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .float-actions button svg {
      width: 14px;
      height: 14px;
    }

    .float-progress {
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-progress-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .float-progress-label {
      font-size: 12px;
      color: var(--sfx-up-text-secondary, #475569);
    }

    .float-progress-pct {
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
    }

    .float-progress-pct.done {
      color: #22c55e;
    }
    .float-progress-pct.warn {
      color: #f59e0b;
    }
    .float-progress-pct.error {
      color: #ef4444;
    }

    .float-bar {
      height: 4px;
      background: var(--sfx-up-border, #e8edf5);
      border-radius: 2px;
      overflow: hidden;
    }

    .float-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .float-bar-fill.done {
      background: #22c55e;
    }
    .float-bar-fill.warn {
      background: #f59e0b;
    }
    .float-bar-fill.error {
      background: #ef4444;
    }

    .float-items {
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
    }

    .float-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px;
      border-bottom: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .float-item:last-child {
      border-bottom: none;
    }

    .float-item-thumb {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      flex-shrink: 0;
    }

    .float-item-thumb svg {
      width: 16px;
      height: 16px;
    }

    .float-item-info {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .float-item-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .float-item-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-item-done {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #f0fdf4;
      color: #22c55e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-item-done svg {
      width: 12px;
      height: 12px;
    }

    .float-item-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    .float-item-error-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .float-item-error-icon {
      width: 16px;
      height: 16px;
      color: #ef4444;
      flex-shrink: 0;
      cursor: pointer;
    }

    .float-item-tooltip {
      display: none;
      position: absolute;
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: #1e293b;
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
      box-shadow:
        0 2px 12px rgba(0, 0, 0, 0.12),
        0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .float-item-error-wrap:hover .float-item-tooltip {
      display: block;
    }

    .float-item-status {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .float-item-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .float-item-retry svg {
      width: 16px;
      height: 16px;
    }

    .float-item-retry:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-primary-hover, #1d4ed8);
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
      box-shadow:
        0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
        0 4px 16px oklch(0 0 0 / 0.06);
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

    .fs-nav {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
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
         looked tiny; relying on max-width/max-height lets the wrap
         fill whatever vertical space the layout gives it. */
      .preview-img-wrap {
        width: auto;
        height: auto;
        max-width: min(420px, 60vw);
        max-height: min(280px, 55vh);
      }
    }
  `,G._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),G._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),G);I([k.property({attribute:!1})],B.prototype,"config");I([k.state()],B.prototype,"_isOpen");I([k.state()],B.prototype,"_activeConnector");I([k.state()],B.prototype,"_showUrlDialog");I([k.state()],B.prototype,"_showCameraDialog");I([k.state()],B.prototype,"_showScreenCastDialog");I([k.state()],B.prototype,"_previewFileId");I([k.state()],B.prototype,"_previewDims");I([k.state()],B.prototype,"_fileInfoOpen");I([k.state()],B.prototype,"_splitPct");I([k.state()],B.prototype,"_fullscreenPreviewUrl");I([k.state()],B.prototype,"_fullscreenVideoFile");I([k.state()],B.prototype,"_fullscreenZoomed");I([k.state()],B.prototype,"_bodyDragOver");I([k.state()],B.prototype,"_isMinimized");I([k.state()],B.prototype,"_isPillExpanded");I([k.state()],B.prototype,"_metadataSchema");I([k.state()],B.prototype,"_bulkMetadataOpen");I([k.state()],B.prototype,"_isReviewing");I([k.state()],B.prototype,"_reviewFiles");I([k.state()],B.prototype,"_hasStoredReview");let Dn=B;exports.AuthExpiredError=it;exports.CORE_SOURCES=_e;exports.PublicEvents=j;exports.SfxActionsBar=X;exports.SfxCameraDialog=ue;exports.SfxDropZone=wn;exports.SfxFileItem=Q;exports.SfxFileList=W;exports.SfxImportDivider=_t;exports.SfxScreenCastDialog=le;exports.SfxSourcePills=tt;exports.SfxSuccessCard=re;exports.SfxUploader=Dn;exports.SfxUrlDialog=Se;exports.Store=wr;exports.UploadEngine=qr;exports.buildAuthHeaders=Qe;exports.createStore=_r;exports.exchangeSassKey=Nr;exports.formatFileSize=ne;exports.getApiBase=ot;exports.getAuthUrl=ri;exports.getDefaultFileTypeIconUrl=zt;exports.getFileTypeIconUrl=Pt;exports.getProviderSources=Xr;exports.listFiles=ii;exports.listNextPage=oi;exports.logout=ai;exports.resolveAuth=Yr;exports.searchProvider=ni;
