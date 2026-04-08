"use strict";const a=require("lit"),C=require("lit/decorators.js"),ee=require("lit/directives/unsafe-svg.js"),ne=require("lit/directives/unsafe-html.js");class fr{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(r=>r(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const r=this._pendingState;this._pendingState=null,this.setState(r)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function B(o,e,t){const r=o.getState().files,i=r.get(e);if(!i)return;const n=new Map(r);n.set(e,{...i,...t}),o.setState({files:n})}function pe(o,e){const t=new Map(o.getState().files);t.set(e.id,e),o.setState({files:t})}function Lt(o,e){const t=o.getState().files;if(!t.has(e))return;const r=new Map(t);r.delete(e),o.setState({files:r})}function hr(){return new fr({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class Hr{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function qr(o,e){const t=new XMLHttpRequest;let r=!1;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;t.open("POST",n);for(const[l,d]of Object.entries(e.authHeaders))t.setRequestHeader(l,d);t.upload.addEventListener("progress",l=>{l.lengthComputable&&!r&&e.onProgress(l.loaded,l.total)}),t.addEventListener("load",()=>{if(r)return;let l;try{l=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&l.status==="success"?e.onComplete(l):e.onError(new Error(l.hint||l.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))});const s=new FormData;if(o.file){const l={name:o.name,type:o.type};s.append("info[files[]]",JSON.stringify(l)),Object.keys(o.meta).length>0&&s.append("meta[files[]]",JSON.stringify(o.meta)),o.tags.length>0&&s.append("tags[files[]]",JSON.stringify(o.tags)),s.append("files[]",o.file,o.name)}return t.timeout=6e4,t.send(s),{abort(){r=!0,t.abort()}}}function Nr(o,e){const t=new XMLHttpRequest;let r=!1;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;t.open("POST",n);for(const[l,d]of Object.entries(e.authHeaders))t.setRequestHeader(l,d);if(t.setRequestHeader("Content-Type","application/json"),t.addEventListener("load",()=>{if(r)return;let l;try{l=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&l.status==="success"?e.onComplete(l):e.onError(new Error(l.hint||l.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))}),!o.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const s={files_urls:[{url:o.remoteUrl,name:o.name}],dir:e.folder};return t.timeout=6e4,t.send(JSON.stringify(s)),{abort(){r=!0,t.abort()}}}function Ze(o){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":o}}function we(o){return o.replace(/\/+$/,"")}const Yr={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Le(o){return Yr[o]??o}function Vr(o,e){const t=we(o),r=btoa(JSON.stringify({origin:window.location.origin})),i=Le(e);return`${t}/${i}/connect?state=${encodeURIComponent(r)}`}async function Gr(o,e,t,r=""){const i=we(o),n=r?`/${r}`:"",s=Le(e),l=await fetch(`${i}/${s}/list${n}`,{method:"GET",headers:Ze(t),credentials:"same-origin"});if(l.status===401)throw new Je;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Xr(o,e,t){const r=we(o),i=await fetch(`${r}/${t}`,{method:"GET",headers:Ze(e),credentials:"same-origin"});if(i.status===401)throw new Je;if(!i.ok){const n=await i.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${i.status})`)}return i.json()}async function Kr(o,e,t,r){const i=we(o),n=Le(e),s=r?`q=${encodeURIComponent(t)}&${r}`:`q=${encodeURIComponent(t)}`,l=await fetch(`${i}/search/${n}/list?${s}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Search failed (HTTP ${l.status})`)}return l.json()}async function Wr(o,e,t,r,i,n=!1){const s=we(o),l=Le(e),d=n?`${s}/search/${l}/get/${r}`:`${s}/${l}/get/${r}`,u=n?{Accept:"application/json","Content-Type":"application/json"}:Ze(t),g=await fetch(d,{method:"POST",headers:u,credentials:"same-origin",body:JSON.stringify({...i,httpMethod:i.httpMethod??"POST",useFormData:i.useFormData??!0,fieldname:i.fieldname??"files[]"})});if(g.status===401)throw new Je;if(!g.ok){const k=await g.json().catch(()=>null);throw new Error((k==null?void 0:k.message)||`Companion upload failed (HTTP ${g.status})`)}return g.json()}async function Zr(o,e,t){const r=we(o),i=Le(e),n=await fetch(`${r}/${i}/logout`,{method:"GET",headers:Ze(t),credentials:"same-origin"});return n.ok?n.json():{ok:!1,revoked:!1}}function Jr(o){var i;const t=((i=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(o))==null?void 0:i[1])??o;return`${location.protocol==="https:"?"wss":"ws"}://${t}`}class Je extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Qr(o,e){const t=o.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let r=!1,i=null;const s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,l={};o.meta&&Object.keys(o.meta).length>0&&Object.assign(l,o.meta),o.tags&&o.tags.length>0&&(l.tags=o.tags);const d=!t.token;return Wr(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:Object.keys(l).length>0?l:void 0},d).then(u=>{if(r)return;const k=`${Jr(t.companionUrl)}/api/${u.token}`;try{i=new WebSocket(k)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}i.onmessage=P=>{var S,R,_;if(!r)try{const E=JSON.parse(P.data);switch(E.action){case"progress":{const T=E.payload,m=T.bytesUploaded??0,v=T.bytesTotal??(t.size||1);e.onProgress(m,v);break}case"success":{const T=E.payload;if(i==null||i.close(),(S=T.response)!=null&&S.responseText)try{const m=JSON.parse(T.response.responseText);if(m.status==="success"){e.onComplete(m);return}e.onError(new Error(m.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{i==null||i.close();const T=E.payload;let m=((R=T.error)==null?void 0:R.message)||"Upload failed";if((_=T.response)!=null&&_.responseText)try{const v=JSON.parse(T.response.responseText);m=v.hint||v.msg||v.message||m}catch{}e.onError(new Error(m));break}}}catch{}},i.onerror=()=>{r||e.onError(new Error("Upload progress connection failed"))},i.onclose=()=>{i=null}}).catch(u=>{r||e.onError(u instanceof Error?u:new Error(String(u)))}),{abort(){if(r=!0,i){try{i.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}i.close(),i=null}}}}function nt(o){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nt(o)}function eo(o,e,t){return Object.defineProperty(o,"prototype",{writable:!1}),o}function to(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function ro(o,e,t){return e=Ee(e),oo(o,xt()?Reflect.construct(e,t||[],Ee(o).constructor):e.apply(o,t))}function oo(o,e){if(e&&(nt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return io(o)}function io(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function no(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&Ue(o,e)}function st(o){var e=typeof Map=="function"?new Map:void 0;return st=function(r){if(r===null||!ao(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return so(r,arguments,Ee(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Ue(i,r)},st(o)}function so(o,e,t){if(xt())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(o.bind.apply(o,r));return t&&Ue(i,t.prototype),i}function xt(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(xt=function(){return!!o})()}function ao(o){try{return Function.toString.call(o).indexOf("[native code]")!==-1}catch{return typeof o=="function"}}function Ue(o,e){return Ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ue(o,e)}function Ee(o){return Ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ee(o)}var ke=(function(o){function e(t){var r,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(to(this,e),r=ro(this,e,[t]),r.originalRequest=n,r.originalResponse=s,r.causingError=i,i!=null&&(t+=", caused by ".concat(i.toString())),n!=null){var l=n.getHeader("X-Request-ID")||"n/a",d=n.getMethod(),u=n.getURL(),g=s?s.getStatus():"n/a",k=s?s.getBody()||"":"n/a";t+=", originated from request (method: ".concat(d,", url: ").concat(u,", response code: ").concat(g,", response text: ").concat(k,", request id: ").concat(l,")")}return r.message=t,r}return no(e,o),eo(e)})(st(Error));function Pe(o){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(o)}function lo(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function co(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,uo(r.key),r)}}function po(o,e,t){return e&&co(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function uo(o){var e=fo(o,"string");return Pe(e)=="symbol"?e:e+""}function fo(o,e){if(Pe(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(Pe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var ho=(function(){function o(){lo(this,o)}return po(o,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,r){return Promise.resolve(null)}}])})();const gr="3.7.8",go=gr,_e=typeof Buffer=="function",Ft=typeof TextDecoder=="function"?new TextDecoder:void 0,At=typeof TextEncoder=="function"?new TextEncoder:void 0,mo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Se=Array.prototype.slice.call(mo),He=(o=>{let e={};return o.forEach((t,r)=>e[t]=r),e})(Se),vo=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,H=String.fromCharCode.bind(String),Bt=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):o=>new Uint8Array(Array.prototype.slice.call(o,0)),mr=o=>o.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),vr=o=>o.replace(/[^A-Za-z0-9\+\/]/g,""),xr=o=>{let e,t,r,i,n="";const s=o.length%3;for(let l=0;l<o.length;){if((t=o.charCodeAt(l++))>255||(r=o.charCodeAt(l++))>255||(i=o.charCodeAt(l++))>255)throw new TypeError("invalid character found");e=t<<16|r<<8|i,n+=Se[e>>18&63]+Se[e>>12&63]+Se[e>>6&63]+Se[e&63]}return s?n.slice(0,s-3)+"===".substring(s):n},bt=typeof btoa=="function"?o=>btoa(o):_e?o=>Buffer.from(o,"binary").toString("base64"):xr,at=_e?o=>Buffer.from(o).toString("base64"):o=>{let t=[];for(let r=0,i=o.length;r<i;r+=4096)t.push(H.apply(null,o.subarray(r,r+4096)));return bt(t.join(""))},Ne=(o,e=!1)=>e?mr(at(o)):at(o),xo=o=>{if(o.length<2){var e=o.charCodeAt(0);return e<128?o:e<2048?H(192|e>>>6)+H(128|e&63):H(224|e>>>12&15)+H(128|e>>>6&63)+H(128|e&63)}else{var e=65536+(o.charCodeAt(0)-55296)*1024+(o.charCodeAt(1)-56320);return H(240|e>>>18&7)+H(128|e>>>12&63)+H(128|e>>>6&63)+H(128|e&63)}},bo=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,br=o=>o.replace(bo,xo),It=_e?o=>Buffer.from(o,"utf8").toString("base64"):At?o=>at(At.encode(o)):o=>bt(br(o)),xe=(o,e=!1)=>e?mr(It(o)):It(o),Mt=o=>xe(o,!0),yo=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,wo=o=>{switch(o.length){case 4:var e=(7&o.charCodeAt(0))<<18|(63&o.charCodeAt(1))<<12|(63&o.charCodeAt(2))<<6|63&o.charCodeAt(3),t=e-65536;return H((t>>>10)+55296)+H((t&1023)+56320);case 3:return H((15&o.charCodeAt(0))<<12|(63&o.charCodeAt(1))<<6|63&o.charCodeAt(2));default:return H((31&o.charCodeAt(0))<<6|63&o.charCodeAt(1))}},yr=o=>o.replace(yo,wo),wr=o=>{if(o=o.replace(/\s+/g,""),!vo.test(o))throw new TypeError("malformed base64.");o+="==".slice(2-(o.length&3));let e,t,r,i=[];for(let n=0;n<o.length;)e=He[o.charAt(n++)]<<18|He[o.charAt(n++)]<<12|(t=He[o.charAt(n++)])<<6|(r=He[o.charAt(n++)]),t===64?i.push(H(e>>16&255)):r===64?i.push(H(e>>16&255,e>>8&255)):i.push(H(e>>16&255,e>>8&255,e&255));return i.join("")},yt=typeof atob=="function"?o=>atob(vr(o)):_e?o=>Buffer.from(o,"base64").toString("binary"):wr,_r=_e?o=>Bt(Buffer.from(o,"base64")):o=>Bt(yt(o).split("").map(e=>e.charCodeAt(0))),kr=o=>_r(Sr(o)),_o=_e?o=>Buffer.from(o,"base64").toString("utf8"):Ft?o=>Ft.decode(_r(o)):o=>yr(yt(o)),Sr=o=>vr(o.replace(/[-_]/g,e=>e=="-"?"+":"/")),lt=o=>_o(Sr(o)),ko=o=>{if(typeof o!="string")return!1;const e=o.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Cr=o=>({value:o,enumerable:!1,writable:!0,configurable:!0}),$r=function(){const o=(e,t)=>Object.defineProperty(String.prototype,e,Cr(t));o("fromBase64",function(){return lt(this)}),o("toBase64",function(e){return xe(this,e)}),o("toBase64URI",function(){return xe(this,!0)}),o("toBase64URL",function(){return xe(this,!0)}),o("toUint8Array",function(){return kr(this)})},Ur=function(){const o=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Cr(t));o("toBase64",function(e){return Ne(this,e)}),o("toBase64URI",function(){return Ne(this,!0)}),o("toBase64URL",function(){return Ne(this,!0)})},So=()=>{$r(),Ur()},Co={version:gr,VERSION:go,atob:yt,atobPolyfill:wr,btoa:bt,btoaPolyfill:xr,fromBase64:lt,toBase64:xe,encode:xe,encodeURI:Mt,encodeURL:Mt,utob:br,btou:yr,decode:lt,isValid:ko,fromUint8Array:Ne,toUint8Array:kr,extendString:$r,extendUint8Array:Ur,extendBuiltins:So};var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $o(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var tt,qt;function Uo(){return qt||(qt=1,tt=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),tt}var qe={},Nt;function Eo(){if(Nt)return qe;Nt=1;var o=Object.prototype.hasOwnProperty,e;function t(s){try{return decodeURIComponent(s.replace(/\+/g," "))}catch{return null}}function r(s){try{return encodeURIComponent(s)}catch{return null}}function i(s){for(var l=/([^=?#&]+)=?([^&]*)/g,d={},u;u=l.exec(s);){var g=t(u[1]),k=t(u[2]);g===null||k===null||g in d||(d[g]=k)}return d}function n(s,l){l=l||"";var d=[],u,g;typeof l!="string"&&(l="?");for(g in s)if(o.call(s,g)){if(u=s[g],!u&&(u===null||u===e||isNaN(u))&&(u=""),g=r(g),u=r(u),g===null||u===null)continue;d.push(g+"="+u)}return d.length?l+d.join("&"):""}return qe.stringify=n,qe.parse=i,qe}var rt,Yt;function Po(){if(Yt)return rt;Yt=1;var o=Uo(),e=Eo(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,r=/[\n\r\t]/g,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=/:\d+$/,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,l=/^[a-zA-Z]:/;function d(m){return(m||"").toString().replace(t,"")}var u=[["#","hash"],["?","query"],function(v,h){return P(h.protocol)?v.replace(/\\/g,"/"):v},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};function k(m){var v;typeof window<"u"?v=window:typeof Ht<"u"?v=Ht:typeof self<"u"?v=self:v={};var h=v.location||{};m=m||h;var x={},O=typeof m,$;if(m.protocol==="blob:")x=new _(unescape(m.pathname),{});else if(O==="string"){x=new _(m,{});for($ in g)delete x[$]}else if(O==="object"){for($ in m)$ in g||(x[$]=m[$]);x.slashes===void 0&&(x.slashes=i.test(m.href))}return x}function P(m){return m==="file:"||m==="ftp:"||m==="http:"||m==="https:"||m==="ws:"||m==="wss:"}function S(m,v){m=d(m),m=m.replace(r,""),v=v||{};var h=s.exec(m),x=h[1]?h[1].toLowerCase():"",O=!!h[2],$=!!h[3],j=0,D;return O?$?(D=h[2]+h[3]+h[4],j=h[2].length+h[3].length):(D=h[2]+h[4],j=h[2].length):$?(D=h[3]+h[4],j=h[3].length):D=h[4],x==="file:"?j>=2&&(D=D.slice(2)):P(x)?D=h[4]:x?O&&(D=D.slice(2)):j>=2&&P(v.protocol)&&(D=h[4]),{protocol:x,slashes:O||P(x),slashesCount:j,rest:D}}function R(m,v){if(m==="")return v;for(var h=(v||"/").split("/").slice(0,-1).concat(m.split("/")),x=h.length,O=h[x-1],$=!1,j=0;x--;)h[x]==="."?h.splice(x,1):h[x]===".."?(h.splice(x,1),j++):j&&(x===0&&($=!0),h.splice(x,1),j--);return $&&h.unshift(""),(O==="."||O==="..")&&h.push(""),h.join("/")}function _(m,v,h){if(m=d(m),m=m.replace(r,""),!(this instanceof _))return new _(m,v,h);var x,O,$,j,D,V,J=u.slice(),ce=typeof v,U=this,W=0;for(ce!=="object"&&ce!=="string"&&(h=v,v=null),h&&typeof h!="function"&&(h=e.parse),v=k(v),O=S(m||"",v),x=!O.protocol&&!O.slashes,U.slashes=O.slashes||x&&v.slashes,U.protocol=O.protocol||v.protocol||"",m=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||l.test(m))||!O.slashes&&(O.protocol||O.slashesCount<2||!P(U.protocol)))&&(J[3]=[/(.*)/,"pathname"]);W<J.length;W++){if(j=J[W],typeof j=="function"){m=j(m,U);continue}$=j[0],V=j[1],$!==$?U[V]=m:typeof $=="string"?(D=$==="@"?m.lastIndexOf($):m.indexOf($),~D&&(typeof j[2]=="number"?(U[V]=m.slice(0,D),m=m.slice(D+j[2])):(U[V]=m.slice(D),m=m.slice(0,D)))):(D=$.exec(m))&&(U[V]=D[1],m=m.slice(0,D.index)),U[V]=U[V]||x&&j[3]&&v[V]||"",j[4]&&(U[V]=U[V].toLowerCase())}h&&(U.query=h(U.query)),x&&v.slashes&&U.pathname.charAt(0)!=="/"&&(U.pathname!==""||v.pathname!=="")&&(U.pathname=R(U.pathname,v.pathname)),U.pathname.charAt(0)!=="/"&&P(U.protocol)&&(U.pathname="/"+U.pathname),o(U.port,U.protocol)||(U.host=U.hostname,U.port=""),U.username=U.password="",U.auth&&(D=U.auth.indexOf(":"),~D?(U.username=U.auth.slice(0,D),U.username=encodeURIComponent(decodeURIComponent(U.username)),U.password=U.auth.slice(D+1),U.password=encodeURIComponent(decodeURIComponent(U.password))):U.username=encodeURIComponent(decodeURIComponent(U.auth)),U.auth=U.password?U.username+":"+U.password:U.username),U.origin=U.protocol!=="file:"&&P(U.protocol)&&U.host?U.protocol+"//"+U.host:"null",U.href=U.toString()}function E(m,v,h){var x=this;switch(m){case"query":typeof v=="string"&&v.length&&(v=(h||e.parse)(v)),x[m]=v;break;case"port":x[m]=v,o(v,x.protocol)?v&&(x.host=x.hostname+":"+v):(x.host=x.hostname,x[m]="");break;case"hostname":x[m]=v,x.port&&(v+=":"+x.port),x.host=v;break;case"host":x[m]=v,n.test(v)?(v=v.split(":"),x.port=v.pop(),x.hostname=v.join(":")):(x.hostname=v,x.port="");break;case"protocol":x.protocol=v.toLowerCase(),x.slashes=!h;break;case"pathname":case"hash":if(v){var O=m==="pathname"?"/":"#";x[m]=v.charAt(0)!==O?O+v:v}else x[m]=v;break;case"username":case"password":x[m]=encodeURIComponent(v);break;case"auth":var $=v.indexOf(":");~$?(x.username=v.slice(0,$),x.username=encodeURIComponent(decodeURIComponent(x.username)),x.password=v.slice($+1),x.password=encodeURIComponent(decodeURIComponent(x.password))):x.username=encodeURIComponent(decodeURIComponent(v))}for(var j=0;j<u.length;j++){var D=u[j];D[4]&&(x[D[1]]=x[D[1]].toLowerCase())}return x.auth=x.password?x.username+":"+x.password:x.username,x.origin=x.protocol!=="file:"&&P(x.protocol)&&x.host?x.protocol+"//"+x.host:"null",x.href=x.toString(),x}function T(m){(!m||typeof m!="function")&&(m=e.stringify);var v,h=this,x=h.host,O=h.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var $=O+(h.protocol&&h.slashes||P(h.protocol)?"//":"");return h.username?($+=h.username,h.password&&($+=":"+h.password),$+="@"):h.password?($+=":"+h.password,$+="@"):h.protocol!=="file:"&&P(h.protocol)&&!x&&h.pathname!=="/"&&($+="@"),(x[x.length-1]===":"||n.test(h.hostname)&&!h.port)&&(x+=":"),$+=x+h.pathname,v=typeof h.query=="object"?m(h.query):h.query,v&&($+=v.charAt(0)!=="?"?"?"+v:v),h.hash&&($+=h.hash),$}return _.prototype={set:E,toString:T},_.extractProtocol=S,_.location=k,_.trimLeft=d,_.qs=e,rt=_,rt}var Oo=Po();const Ro=$o(Oo);function zo(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var e=Math.random()*16|0,t=o==="x"?e:e&3|8;return t.toString(16)})}function dt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */dt=function(){return e};var o,e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(f,c,p){f[c]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",d=n.toStringTag||"@@toStringTag";function u(f,c,p){return Object.defineProperty(f,c,{value:p,enumerable:!0,configurable:!0,writable:!0}),f[c]}try{u({},"")}catch{u=function(p,b,w){return p[b]=w}}function g(f,c,p,b){var w=c&&c.prototype instanceof T?c:T,y=Object.create(w.prototype),z=new W(b||[]);return i(y,"_invoke",{value:V(f,p,z)}),y}function k(f,c,p){try{return{type:"normal",arg:f.call(c,p)}}catch(b){return{type:"throw",arg:b}}}e.wrap=g;var P="suspendedStart",S="suspendedYield",R="executing",_="completed",E={};function T(){}function m(){}function v(){}var h={};u(h,s,function(){return this});var x=Object.getPrototypeOf,O=x&&x(x(ie([])));O&&O!==t&&r.call(O,s)&&(h=O);var $=v.prototype=T.prototype=Object.create(h);function j(f){["next","throw","return"].forEach(function(c){u(f,c,function(p){return this._invoke(c,p)})})}function D(f,c){function p(w,y,z,L){var F=k(f[w],f,y);if(F.type!=="throw"){var N=F.arg,M=N.value;return M&&ae(M)=="object"&&r.call(M,"__await")?c.resolve(M.__await).then(function(Y){p("next",Y,z,L)},function(Y){p("throw",Y,z,L)}):c.resolve(M).then(function(Y){N.value=Y,z(N)},function(Y){return p("throw",Y,z,L)})}L(F.arg)}var b;i(this,"_invoke",{value:function(y,z){function L(){return new c(function(F,N){p(y,z,F,N)})}return b=b?b.then(L,L):L()}})}function V(f,c,p){var b=P;return function(w,y){if(b===R)throw Error("Generator is already running");if(b===_){if(w==="throw")throw y;return{value:o,done:!0}}for(p.method=w,p.arg=y;;){var z=p.delegate;if(z){var L=J(z,p);if(L){if(L===E)continue;return L}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(b===P)throw b=_,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);b=R;var F=k(f,c,p);if(F.type==="normal"){if(b=p.done?_:S,F.arg===E)continue;return{value:F.arg,done:p.done}}F.type==="throw"&&(b=_,p.method="throw",p.arg=F.arg)}}}function J(f,c){var p=c.method,b=f.iterator[p];if(b===o)return c.delegate=null,p==="throw"&&f.iterator.return&&(c.method="return",c.arg=o,J(f,c),c.method==="throw")||p!=="return"&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+p+"' method")),E;var w=k(b,f.iterator,c.arg);if(w.type==="throw")return c.method="throw",c.arg=w.arg,c.delegate=null,E;var y=w.arg;return y?y.done?(c[f.resultName]=y.value,c.next=f.nextLoc,c.method!=="return"&&(c.method="next",c.arg=o),c.delegate=null,E):y:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,E)}function ce(f){var c={tryLoc:f[0]};1 in f&&(c.catchLoc=f[1]),2 in f&&(c.finallyLoc=f[2],c.afterLoc=f[3]),this.tryEntries.push(c)}function U(f){var c=f.completion||{};c.type="normal",delete c.arg,f.completion=c}function W(f){this.tryEntries=[{tryLoc:"root"}],f.forEach(ce,this),this.reset(!0)}function ie(f){if(f||f===""){var c=f[s];if(c)return c.call(f);if(typeof f.next=="function")return f;if(!isNaN(f.length)){var p=-1,b=function w(){for(;++p<f.length;)if(r.call(f,p))return w.value=f[p],w.done=!1,w;return w.value=o,w.done=!0,w};return b.next=b}}throw new TypeError(ae(f)+" is not iterable")}return m.prototype=v,i($,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,d,"GeneratorFunction"),e.isGeneratorFunction=function(f){var c=typeof f=="function"&&f.constructor;return!!c&&(c===m||(c.displayName||c.name)==="GeneratorFunction")},e.mark=function(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,v):(f.__proto__=v,u(f,d,"GeneratorFunction")),f.prototype=Object.create($),f},e.awrap=function(f){return{__await:f}},j(D.prototype),u(D.prototype,l,function(){return this}),e.AsyncIterator=D,e.async=function(f,c,p,b,w){w===void 0&&(w=Promise);var y=new D(g(f,c,p,b),w);return e.isGeneratorFunction(c)?y:y.next().then(function(z){return z.done?z.value:y.next()})},j($),u($,d,"Generator"),u($,s,function(){return this}),u($,"toString",function(){return"[object Generator]"}),e.keys=function(f){var c=Object(f),p=[];for(var b in c)p.push(b);return p.reverse(),function w(){for(;p.length;){var y=p.pop();if(y in c)return w.value=y,w.done=!1,w}return w.done=!0,w}},e.values=ie,W.prototype={constructor:W,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(U),!c)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=o)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var p=this;function b(N,M){return z.type="throw",z.arg=c,p.next=N,M&&(p.method="next",p.arg=o),!!M}for(var w=this.tryEntries.length-1;w>=0;--w){var y=this.tryEntries[w],z=y.completion;if(y.tryLoc==="root")return b("end");if(y.tryLoc<=this.prev){var L=r.call(y,"catchLoc"),F=r.call(y,"finallyLoc");if(L&&F){if(this.prev<y.catchLoc)return b(y.catchLoc,!0);if(this.prev<y.finallyLoc)return b(y.finallyLoc)}else if(L){if(this.prev<y.catchLoc)return b(y.catchLoc,!0)}else{if(!F)throw Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return b(y.finallyLoc)}}}},abrupt:function(c,p){for(var b=this.tryEntries.length-1;b>=0;--b){var w=this.tryEntries[b];if(w.tryLoc<=this.prev&&r.call(w,"finallyLoc")&&this.prev<w.finallyLoc){var y=w;break}}y&&(c==="break"||c==="continue")&&y.tryLoc<=p&&p<=y.finallyLoc&&(y=null);var z=y?y.completion:{};return z.type=c,z.arg=p,y?(this.method="next",this.next=y.finallyLoc,E):this.complete(z)},complete:function(c,p){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&p&&(this.next=p),E},finish:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.finallyLoc===c)return this.complete(b.completion,b.afterLoc),U(b),E}},catch:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.tryLoc===c){var w=b.completion;if(w.type==="throw"){var y=w.arg;U(b)}return y}}throw Error("illegal catch attempt")},delegateYield:function(c,p,b){return this.delegate={iterator:ie(c),resultName:p,nextLoc:b},this.method==="next"&&(this.arg=o),E}},e}function Vt(o,e,t,r,i,n,s){try{var l=o[n](s),d=l.value}catch(u){t(u);return}l.done?e(d):Promise.resolve(d).then(r,i)}function Do(o){return function(){var e=this,t=arguments;return new Promise(function(r,i){var n=o.apply(e,t);function s(d){Vt(n,r,i,s,l,"next",d)}function l(d){Vt(n,r,i,s,l,"throw",d)}s(void 0)})}}function Er(o,e){return Lo(o)||jo(o,e)||Pr(o,e)||To()}function To(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jo(o,e){var t=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r,i,n,s,l=[],d=!0,u=!1;try{if(n=(t=t.call(o)).next,e!==0)for(;!(d=(r=n.call(t)).done)&&(l.push(r.value),l.length!==e);d=!0);}catch(g){u=!0,i=g}finally{try{if(!d&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function Lo(o){if(Array.isArray(o))return o}function ae(o){"@babel/helpers - typeof";return ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae(o)}function Fo(o,e){var t=typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(!t){if(Array.isArray(o)||(t=Pr(o))||e){t&&(o=t);var r=0,i=function(){};return{s:i,n:function(){return r>=o.length?{done:!0}:{done:!1,value:o[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,s=!1,l;return{s:function(){t=t.call(o)},n:function(){var u=t.next();return n=u.done,u},e:function(u){s=!0,l=u},f:function(){try{!n&&t.return!=null&&t.return()}finally{if(s)throw l}}}}function Pr(o,e){if(o){if(typeof o=="string")return Gt(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Gt(o,e)}}function Gt(o,e){(e==null||e>o.length)&&(e=o.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=o[t];return r}function Xt(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,r)}return t}function ue(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xt(Object(t),!0).forEach(function(r){Ao(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Xt(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function Ao(o,e,t){return e=Or(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Bo(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Kt(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Or(r.key),r)}}function Io(o,e,t){return e&&Kt(o.prototype,e),t&&Kt(o,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function Or(o){var e=Mo(o,"string");return ae(e)=="symbol"?e:e+""}function Mo(o,e){if(ae(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(ae(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Ye="tus-v1",Ve="ietf-draft-03",Ce="ietf-draft-05",Ho={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Rr,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Ye},Ge=(function(){function o(e,t){Bo(this,o),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Io(o,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(r){return t._urlStorage.findUploadsByFingerprint(r)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,r=this.file;if(!r){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Ye,Ve,Ce].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var i=this.options.retryDelays;if(i!=null&&Object.prototype.toString.call(i)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var n=0,s=["uploadUrl","uploadSize","uploadLengthDeferred"];n<s.length;n++){var l=s[n];if(this.options[l]){this._emitError(new Error("tus: cannot use the ".concat(l," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(r,this.options).then(function(d){return t._fingerprint=d,t._source?t._source:t.options.fileReader.openFile(r,t.options.chunkSize)}).then(function(d){if(t._source=d,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(d){t._emitError(d)})}},{key:"_startParallelUpload",value:function(){var t,r=this,i=this._size,n=0;this._parallelUploads=[];var s=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,l=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:No(this._source.size,s);this._parallelUploadUrls&&l.forEach(function(g,k){g.uploadUrl=r._parallelUploadUrls[k]||null}),this._parallelUploadUrls=new Array(l.length);var d=l.map(function(g,k){var P=0;return r._source.slice(g.start,g.end).then(function(S){var R=S.value;return new Promise(function(_,E){var T=ue(ue({},r.options),{},{uploadUrl:g.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:r.options.metadataForPartialUploads,headers:ue(ue({},r.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:_,onError:E,onProgress:function(h){n=n-P+h,P=h,r._emitProgress(n,i)},onUploadUrlAvailable:function(){r._parallelUploadUrls[k]=m.url,r._parallelUploadUrls.filter(function(h){return!!h}).length===l.length&&r._saveUploadInUrlStorage()}}),m=new o(R,T);m.start(),r._parallelUploads.push(m)})})}),u;Promise.all(d).then(function(){u=r._openRequest("POST",r.options.endpoint),u.setHeader("Upload-Concat","final;".concat(r._parallelUploadUrls.join(" ")));var g=Wt(r.options.metadata);return g!==""&&u.setHeader("Upload-Metadata",g),r._sendRequest(u,null)}).then(function(g){if(!ge(g.getStatus(),200)){r._emitHttpError(u,g,"tus: unexpected response while creating upload");return}var k=g.getHeader("Location");if(k==null){r._emitHttpError(u,g,"tus: invalid or missing Location header");return}r.url=er(r.options.endpoint,k),"Created upload at ".concat(r.url),r._emitSuccess(g)}).catch(function(g){r._emitError(g)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var r=this;if(this._parallelUploads!=null){var i=Fo(this._parallelUploads),n;try{for(i.s();!(n=i.n()).done;){var s=n.value;s.abort(t)}}catch(l){i.e(l)}finally{i.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():o.terminate(this.url,this.options).then(function(){return r._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,r,i,n){this._emitError(new ke(i,n,t,r))}},{key:"_emitError",value:function(t){var r=this;if(!this._aborted){if(this.options.retryDelays!=null){var i=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(i&&(this._retryAttempt=0),Qt(t,this._retryAttempt,this.options)){var n=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){r.start()},n);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,r){typeof this.options.onProgress=="function"&&this.options.onProgress(t,r)}},{key:"_emitChunkComplete",value:function(t,r,i){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,r,i)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var r=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?r.setHeader("Upload-Defer-Length","1"):r.setHeader("Upload-Length","".concat(this._size));var i=Wt(this.options.metadata);i!==""&&r.setHeader("Upload-Metadata",i);var n;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,n=this._addChunkToRequest(r)):((this.options.protocol===Ve||this.options.protocol===Ce)&&r.setHeader("Upload-Complete","?0"),n=this._sendRequest(r,null)),n.then(function(s){if(!ge(s.getStatus(),200)){t._emitHttpError(r,s,"tus: unexpected response while creating upload");return}var l=s.getHeader("Location");if(l==null){t._emitHttpError(r,s,"tus: invalid or missing Location header");return}if(t.url=er(t.options.endpoint,l),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(s),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(r,s):(t._offset=0,t._performUpload())})}).catch(function(s){t._emitHttpError(r,null,"tus: failed to create upload",s)})}},{key:"_resumeUpload",value:function(){var t=this,r=this._openRequest("HEAD",this.url),i=this._sendRequest(r,null);i.then(function(n){var s=n.getStatus();if(!ge(s,200)){if(s===423){t._emitHttpError(r,n,"tus: upload is currently locked; retry later");return}if(ge(s,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(r,n,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var l=Number.parseInt(n.getHeader("Upload-Offset"),10);if(Number.isNaN(l)){t._emitHttpError(r,n,"tus: invalid or missing offset value");return}var d=Number.parseInt(n.getHeader("Upload-Length"),10);if(Number.isNaN(d)&&!t.options.uploadLengthDeferred&&t.options.protocol===Ye){t._emitHttpError(r,n,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(l===d){t._emitProgress(d,d),t._emitSuccess(n);return}t._offset=l,t._performUpload()})}).catch(function(n){t._emitHttpError(r,null,"tus: failed to resume upload",n)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var r;this.options.overridePatchMethod?(r=this._openRequest("POST",this.url),r.setHeader("X-HTTP-Method-Override","PATCH")):r=this._openRequest("PATCH",this.url),r.setHeader("Upload-Offset","".concat(this._offset));var i=this._addChunkToRequest(r);i.then(function(n){if(!ge(n.getStatus(),200)){t._emitHttpError(r,n,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(r,n)}).catch(function(n){t._aborted||t._emitHttpError(r,null,"tus: failed to upload chunk at offset ".concat(t._offset),n)})}}},{key:"_addChunkToRequest",value:function(t){var r=this,i=this._offset,n=this._offset+this.options.chunkSize;return t.setProgressHandler(function(s){r._emitProgress(i+s,r._size)}),this.options.protocol===Ye?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Ce&&t.setHeader("Content-Type","application/partial-upload"),(n===Number.POSITIVE_INFINITY||n>this._size)&&!this.options.uploadLengthDeferred&&(n=this._size),this._source.slice(i,n).then(function(s){var l=s.value,d=s.done,u=l!=null&&l.size?l.size:0;r.options.uploadLengthDeferred&&d&&(r._size=r._offset+u,t.setHeader("Upload-Length","".concat(r._size)));var g=r._offset+u;return!r.options.uploadLengthDeferred&&d&&g!==r._size?Promise.reject(new Error("upload was configured with a size of ".concat(r._size," bytes, but the source is done after ").concat(g," bytes"))):l===null?r._sendRequest(t):((r.options.protocol===Ve||r.options.protocol===Ce)&&t.setHeader("Upload-Complete",d?"?1":"?0"),r._emitProgress(r._offset,r._size),r._sendRequest(t,l))})}},{key:"_handleUploadResponse",value:function(t,r){var i=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(i)){this._emitHttpError(t,r,"tus: invalid or missing offset value");return}if(this._emitProgress(i,this._size),this._emitChunkComplete(i-this._offset,i,this._size),this._offset=i,i===this._size){this._emitSuccess(r),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,r){var i=Zt(t,r,this.options);return this._req=i,i}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r){t._emitError(r)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var r={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?r.parallelUploadUrls=this._parallelUploadUrls:r.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,r).then(function(i){t._urlStorageKey=i})}},{key:"_sendRequest",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return Jt(t,r,this.options)}}],[{key:"terminate",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=Zt("DELETE",t,r);return Jt(i,null,r).then(function(n){if(n.getStatus()!==204)throw new ke("tus: unexpected response while terminating upload",null,i,n)}).catch(function(n){if(n instanceof ke||(n=new ke("tus: failed to terminate upload",n,i,null)),!Qt(n,0,r))throw n;var s=r.retryDelays[0],l=r.retryDelays.slice(1),d=ue(ue({},r),{},{retryDelays:l});return new Promise(function(u){return setTimeout(u,s)}).then(function(){return o.terminate(t,d)})})}}])})();function Wt(o){return Object.entries(o).map(function(e){var t=Er(e,2),r=t[0],i=t[1];return"".concat(r," ").concat(Co.encode(String(i)))}).join(",")}function ge(o,e){return o>=e&&o<e+100}function Zt(o,e,t){var r=t.httpStack.createRequest(o,e);t.protocol===Ve?r.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Ce?r.setHeader("Upload-Draft-Interop-Version","6"):r.setHeader("Tus-Resumable","1.0.0");for(var i=t.headers||{},n=0,s=Object.entries(i);n<s.length;n++){var l=Er(s[n],2),d=l[0],u=l[1];r.setHeader(d,u)}if(t.addRequestId){var g=zo();r.setHeader("X-Request-ID",g)}return r}function Jt(o,e,t){return ct.apply(this,arguments)}function ct(){return ct=Do(dt().mark(function o(e,t,r){var i;return dt().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(typeof r.onBeforeRequest!="function"){s.next=3;break}return s.next=3,r.onBeforeRequest(e);case 3:return s.next=5,e.send(t);case 5:if(i=s.sent,typeof r.onAfterResponse!="function"){s.next=9;break}return s.next=9,r.onAfterResponse(e,i);case 9:return s.abrupt("return",i);case 10:case"end":return s.stop()}},o)})),ct.apply(this,arguments)}function qo(){var o=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(o=!1),o}function Qt(o,e,t){return t.retryDelays==null||e>=t.retryDelays.length||o.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(o,e,t):Rr(o)}function Rr(o){var e=o.originalResponse?o.originalResponse.getStatus():0;return(!ge(e,400)||e===409||e===423)&&qo()}function er(o,e){return new Ro(e,o).toString()}function No(o,e){for(var t=Math.floor(o/e),r=[],i=0;i<e;i++)r.push({start:t*i,end:t*(i+1)});return r[e-1].end=o,r}Ge.defaultOptions=Ho;var zr=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Yo(o){return new Promise(function(e,t){var r=new XMLHttpRequest;r.responseType="blob",r.onload=function(){var i=r.response;e(i)},r.onerror=function(i){t(i)},r.open("GET",o),r.send()})}var Vo=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Go(o){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){var i=new Uint8Array(r.result);e({value:i})},r.onerror=function(i){t(i)},r.readAsArrayBuffer(o)})}function Oe(o){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oe(o)}function Xo(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Ko(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Zo(r.key),r)}}function Wo(o,e,t){return e&&Ko(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Zo(o){var e=Jo(o,"string");return Oe(e)=="symbol"?e:e+""}function Jo(o,e){if(Oe(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(Oe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var tr=(function(){function o(e){Xo(this,o),this._file=e,this.size=e.size}return Wo(o,[{key:"slice",value:function(t,r){if(Vo())return Go(this._file.slice(t,r));var i=this._file.slice(t,r),n=r>=this.size;return Promise.resolve({value:i,done:n})}},{key:"close",value:function(){}}])})();function Re(o){"@babel/helpers - typeof";return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(o)}function Qo(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function ei(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,ri(r.key),r)}}function ti(o,e,t){return e&&ei(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function ri(o){var e=oi(o,"string");return Re(e)=="symbol"?e:e+""}function oi(o,e){if(Re(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(Re(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}function rr(o){return o===void 0?0:o.size!==void 0?o.size:o.length}function ii(o,e){if(o.concat)return o.concat(e);if(o instanceof Blob)return new Blob([o,e],{type:o.type});if(o.set){var t=new o.constructor(o.length+e.length);return t.set(o),t.set(e,o.length),t}throw new Error("Unknown data type")}var ni=(function(){function o(e){Qo(this,o),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return ti(o,[{key:"slice",value:function(t,r){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,r)}},{key:"_readUntilEnoughDataOrDone",value:function(t,r){var i=this,n=r<=this._bufferOffset+rr(this._buffer);if(this._done||n){var s=this._getDataFromBuffer(t,r),l=s==null?this._done:!1;return Promise.resolve({value:s,done:l})}return this._reader.read().then(function(d){var u=d.value,g=d.done;return g?i._done=!0:i._buffer===void 0?i._buffer=u:i._buffer=ii(i._buffer,u),i._readUntilEnoughDataOrDone(t,r)})}},{key:"_getDataFromBuffer",value:function(t,r){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var i=rr(this._buffer)===0;return this._done&&i?null:this._buffer.slice(0,r-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function le(o){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(o)}function pt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */pt=function(){return e};var o,e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(f,c,p){f[c]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",d=n.toStringTag||"@@toStringTag";function u(f,c,p){return Object.defineProperty(f,c,{value:p,enumerable:!0,configurable:!0,writable:!0}),f[c]}try{u({},"")}catch{u=function(p,b,w){return p[b]=w}}function g(f,c,p,b){var w=c&&c.prototype instanceof T?c:T,y=Object.create(w.prototype),z=new W(b||[]);return i(y,"_invoke",{value:V(f,p,z)}),y}function k(f,c,p){try{return{type:"normal",arg:f.call(c,p)}}catch(b){return{type:"throw",arg:b}}}e.wrap=g;var P="suspendedStart",S="suspendedYield",R="executing",_="completed",E={};function T(){}function m(){}function v(){}var h={};u(h,s,function(){return this});var x=Object.getPrototypeOf,O=x&&x(x(ie([])));O&&O!==t&&r.call(O,s)&&(h=O);var $=v.prototype=T.prototype=Object.create(h);function j(f){["next","throw","return"].forEach(function(c){u(f,c,function(p){return this._invoke(c,p)})})}function D(f,c){function p(w,y,z,L){var F=k(f[w],f,y);if(F.type!=="throw"){var N=F.arg,M=N.value;return M&&le(M)=="object"&&r.call(M,"__await")?c.resolve(M.__await).then(function(Y){p("next",Y,z,L)},function(Y){p("throw",Y,z,L)}):c.resolve(M).then(function(Y){N.value=Y,z(N)},function(Y){return p("throw",Y,z,L)})}L(F.arg)}var b;i(this,"_invoke",{value:function(y,z){function L(){return new c(function(F,N){p(y,z,F,N)})}return b=b?b.then(L,L):L()}})}function V(f,c,p){var b=P;return function(w,y){if(b===R)throw Error("Generator is already running");if(b===_){if(w==="throw")throw y;return{value:o,done:!0}}for(p.method=w,p.arg=y;;){var z=p.delegate;if(z){var L=J(z,p);if(L){if(L===E)continue;return L}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(b===P)throw b=_,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);b=R;var F=k(f,c,p);if(F.type==="normal"){if(b=p.done?_:S,F.arg===E)continue;return{value:F.arg,done:p.done}}F.type==="throw"&&(b=_,p.method="throw",p.arg=F.arg)}}}function J(f,c){var p=c.method,b=f.iterator[p];if(b===o)return c.delegate=null,p==="throw"&&f.iterator.return&&(c.method="return",c.arg=o,J(f,c),c.method==="throw")||p!=="return"&&(c.method="throw",c.arg=new TypeError("The iterator does not provide a '"+p+"' method")),E;var w=k(b,f.iterator,c.arg);if(w.type==="throw")return c.method="throw",c.arg=w.arg,c.delegate=null,E;var y=w.arg;return y?y.done?(c[f.resultName]=y.value,c.next=f.nextLoc,c.method!=="return"&&(c.method="next",c.arg=o),c.delegate=null,E):y:(c.method="throw",c.arg=new TypeError("iterator result is not an object"),c.delegate=null,E)}function ce(f){var c={tryLoc:f[0]};1 in f&&(c.catchLoc=f[1]),2 in f&&(c.finallyLoc=f[2],c.afterLoc=f[3]),this.tryEntries.push(c)}function U(f){var c=f.completion||{};c.type="normal",delete c.arg,f.completion=c}function W(f){this.tryEntries=[{tryLoc:"root"}],f.forEach(ce,this),this.reset(!0)}function ie(f){if(f||f===""){var c=f[s];if(c)return c.call(f);if(typeof f.next=="function")return f;if(!isNaN(f.length)){var p=-1,b=function w(){for(;++p<f.length;)if(r.call(f,p))return w.value=f[p],w.done=!1,w;return w.value=o,w.done=!0,w};return b.next=b}}throw new TypeError(le(f)+" is not iterable")}return m.prototype=v,i($,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,d,"GeneratorFunction"),e.isGeneratorFunction=function(f){var c=typeof f=="function"&&f.constructor;return!!c&&(c===m||(c.displayName||c.name)==="GeneratorFunction")},e.mark=function(f){return Object.setPrototypeOf?Object.setPrototypeOf(f,v):(f.__proto__=v,u(f,d,"GeneratorFunction")),f.prototype=Object.create($),f},e.awrap=function(f){return{__await:f}},j(D.prototype),u(D.prototype,l,function(){return this}),e.AsyncIterator=D,e.async=function(f,c,p,b,w){w===void 0&&(w=Promise);var y=new D(g(f,c,p,b),w);return e.isGeneratorFunction(c)?y:y.next().then(function(z){return z.done?z.value:y.next()})},j($),u($,d,"Generator"),u($,s,function(){return this}),u($,"toString",function(){return"[object Generator]"}),e.keys=function(f){var c=Object(f),p=[];for(var b in c)p.push(b);return p.reverse(),function w(){for(;p.length;){var y=p.pop();if(y in c)return w.value=y,w.done=!1,w}return w.done=!0,w}},e.values=ie,W.prototype={constructor:W,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(U),!c)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=o)},stop:function(){this.done=!0;var c=this.tryEntries[0].completion;if(c.type==="throw")throw c.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var p=this;function b(N,M){return z.type="throw",z.arg=c,p.next=N,M&&(p.method="next",p.arg=o),!!M}for(var w=this.tryEntries.length-1;w>=0;--w){var y=this.tryEntries[w],z=y.completion;if(y.tryLoc==="root")return b("end");if(y.tryLoc<=this.prev){var L=r.call(y,"catchLoc"),F=r.call(y,"finallyLoc");if(L&&F){if(this.prev<y.catchLoc)return b(y.catchLoc,!0);if(this.prev<y.finallyLoc)return b(y.finallyLoc)}else if(L){if(this.prev<y.catchLoc)return b(y.catchLoc,!0)}else{if(!F)throw Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return b(y.finallyLoc)}}}},abrupt:function(c,p){for(var b=this.tryEntries.length-1;b>=0;--b){var w=this.tryEntries[b];if(w.tryLoc<=this.prev&&r.call(w,"finallyLoc")&&this.prev<w.finallyLoc){var y=w;break}}y&&(c==="break"||c==="continue")&&y.tryLoc<=p&&p<=y.finallyLoc&&(y=null);var z=y?y.completion:{};return z.type=c,z.arg=p,y?(this.method="next",this.next=y.finallyLoc,E):this.complete(z)},complete:function(c,p){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&p&&(this.next=p),E},finish:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.finallyLoc===c)return this.complete(b.completion,b.afterLoc),U(b),E}},catch:function(c){for(var p=this.tryEntries.length-1;p>=0;--p){var b=this.tryEntries[p];if(b.tryLoc===c){var w=b.completion;if(w.type==="throw"){var y=w.arg;U(b)}return y}}throw Error("illegal catch attempt")},delegateYield:function(c,p,b){return this.delegate={iterator:ie(c),resultName:p,nextLoc:b},this.method==="next"&&(this.arg=o),E}},e}function or(o,e,t,r,i,n,s){try{var l=o[n](s),d=l.value}catch(u){t(u);return}l.done?e(d):Promise.resolve(d).then(r,i)}function si(o){return function(){var e=this,t=arguments;return new Promise(function(r,i){var n=o.apply(e,t);function s(d){or(n,r,i,s,l,"next",d)}function l(d){or(n,r,i,s,l,"throw",d)}s(void 0)})}}function ai(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function li(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,ci(r.key),r)}}function di(o,e,t){return e&&li(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function ci(o){var e=pi(o,"string");return le(e)=="symbol"?e:e+""}function pi(o,e){if(le(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(le(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var ui=(function(){function o(){ai(this,o)}return di(o,[{key:"openFile",value:(function(){var e=si(pt().mark(function r(i,n){var s;return pt().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!(zr()&&i&&typeof i.uri<"u")){d.next=11;break}return d.prev=1,d.next=4,Yo(i.uri);case 4:return s=d.sent,d.abrupt("return",new tr(s));case 8:throw d.prev=8,d.t0=d.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(d.t0));case 11:if(!(typeof i.slice=="function"&&typeof i.size<"u")){d.next=13;break}return d.abrupt("return",Promise.resolve(new tr(i)));case 13:if(typeof i.read!="function"){d.next=18;break}if(n=Number(n),Number.isFinite(n)){d.next=17;break}return d.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return d.abrupt("return",Promise.resolve(new ni(i,n)));case 18:return d.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return d.stop()}},r,null,[[1,8]])}));function t(r,i){return e.apply(this,arguments)}return t})()}])})();function fi(o,e){return zr()?Promise.resolve(hi(o,e)):Promise.resolve(["tus-br",o.name,o.type,o.size,o.lastModified,e.endpoint].join("-"))}function hi(o,e){var t=o.exif?gi(JSON.stringify(o.exif)):"noexif";return["tus-rn",o.name||"noname",o.size||"nosize",t,e.endpoint].join("/")}function gi(o){var e=0;if(o.length===0)return e;for(var t=0;t<o.length;t++){var r=o.charCodeAt(t);e=(e<<5)-e+r,e&=e}return e}function ze(o){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ze(o)}function wt(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function mi(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,vi(r.key),r)}}function _t(o,e,t){return e&&mi(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function vi(o){var e=xi(o,"string");return ze(e)=="symbol"?e:e+""}function xi(o,e){if(ze(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(ze(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var bi=(function(){function o(){wt(this,o)}return _t(o,[{key:"createRequest",value:function(t,r){return new yi(t,r)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),yi=(function(){function o(e,t){wt(this,o),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return _t(o,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,r){this._xhr.setRequestHeader(t,r),this._headers[t]=r}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(r){r.lengthComputable&&t(r.loaded)})}},{key:"send",value:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(i,n){t._xhr.onload=function(){i(new wi(t._xhr))},t._xhr.onerror=function(s){n(s)},t._xhr.send(r)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),wi=(function(){function o(e){wt(this,o),this._xhr=e}return _t(o,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function De(o){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(o)}function _i(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function ki(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Ci(r.key),r)}}function Si(o,e,t){return e&&ki(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Ci(o){var e=$i(o,"string");return De(e)=="symbol"?e:e+""}function $i(o,e){if(De(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(De(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var ut=!1;try{ut="localStorage"in window;var ot="tusSupport",ir=localStorage.getItem(ot);localStorage.setItem(ot,ir),ir===null&&localStorage.removeItem(ot)}catch(o){if(o.code===o.SECURITY_ERR||o.code===o.QUOTA_EXCEEDED_ERR)ut=!1;else throw o}var Ui=ut,Ei=(function(){function o(){_i(this,o)}return Si(o,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var r=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(r)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,r){var i=Math.round(Math.random()*1e12),n="tus::".concat(t,"::").concat(i);return localStorage.setItem(n,JSON.stringify(r)),Promise.resolve(n)}},{key:"_findEntries",value:function(t){for(var r=[],i=0;i<localStorage.length;i++){var n=localStorage.key(i);if(n.indexOf(t)===0)try{var s=JSON.parse(localStorage.getItem(n));s.urlStorageKey=n,r.push(s)}catch{}}return r}}])})();function be(o){"@babel/helpers - typeof";return be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be(o)}function Pi(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Oi(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Tr(r.key),r)}}function Ri(o,e,t){return t&&Oi(o,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function zi(o,e,t){return e=Xe(e),Di(o,Dr()?Reflect.construct(e,t||[],Xe(o).constructor):e.apply(o,t))}function Di(o,e){if(e&&(be(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ti(o)}function Ti(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Dr(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Dr=function(){return!!o})()}function Xe(o){return Xe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xe(o)}function ji(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&ft(o,e)}function ft(o,e){return ft=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ft(o,e)}function nr(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,r)}return t}function me(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?nr(Object(t),!0).forEach(function(r){Li(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):nr(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function Li(o,e,t){return e=Tr(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Tr(o){var e=Fi(o,"string");return be(e)=="symbol"?e:e+""}function Fi(o,e){if(be(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(be(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}var sr=me(me({},Ge.defaultOptions),{},{httpStack:new bi,fileReader:new ui,urlStorage:Ui?new Ei:new ho,fingerprint:fi}),Ai=(function(o){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Pi(this,e),r=me(me({},sr),r),zi(this,e,[t,r])}return ji(e,o),Ri(e,null,[{key:"terminate",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i=me(me({},sr),i),Ge.terminate(r,i)}}])})(Ge);const Bi=10*1024*1024,Ii=5*1024*1024,Mi="https://eu-on-24001.connector.filerobot.com/files",Hi="https://eu-on-24001.connector.filerobot.com/json";function qi(o,e){if(!e||!o.file)return!1;const t=e.sizeThreshold??Bi;return o.size>=t}function Ni(o,e){const{tusConfig:t}=e,r=e.apiBase.replace(/\/+$/,""),i=t.endpoint||Mi,n=t.chunkSize??Ii,s=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],u=r.split("/").pop()||"";let g=!1,k=!1,P=!1;const S={name:o.name,type:o.type,"filerobot-folder":e.folder},R=async()=>`tus-${o.id}-${i}`,_=new Ai(o.file,{endpoint:i,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:s,removeFingerprintOnSuccess:!0,headers:{},metadata:S,fingerprint:R,onBeforeRequest(h){const x=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[O,$]of Object.entries(x))h.setHeader(O,$);h.setHeader("X-Filerobot-Token",u)},onUploadUrlAvailable(){_.url&&e.onUploadUrlAvailable&&!P&&(P=!0,e.onUploadUrlAvailable(_.url))},onProgress(h,x){!k&&!g&&e.onProgress(h,x)},onSuccess(){var O;if(k)return;m();const h=_.url||"",x=(O=h.match(/files\/([^/?]+)/))==null?void 0:O[1];x?Vi(x,o.size).then($=>{k||e.onComplete($)}).catch($=>{k||e.onError($)}):e.onComplete({status:"success",file:{uuid:"",name:o.name,extension:o.name.split(".").pop()||"",type:o.type,size:o.size,url:{public:h,cdn:h},meta:o.meta,tags:o.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(h){k||(m(),Yi(h)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(h instanceof Error?h:new Error(String(h))))},onShouldRetry(h,x,O){var j;const $=(j=h.originalResponse)==null?void 0:j.getStatus();return $===429?!0:!($&&$>400&&$<500&&$!==409)}});let E=null,T=null;typeof window<"u"&&(E=()=>{var h;!g&&!k&&(g=!0,_.abort(!1),(h=e.onPause)==null||h.call(e))},T=()=>{var h;g&&!k&&(g=!1,_.start(),(h=e.onResume)==null||h.call(e))},window.addEventListener("offline",E),window.addEventListener("online",T));const m=()=>{E&&window.removeEventListener("offline",E),T&&window.removeEventListener("online",T)},v=()=>{try{_.start()}catch(h){m(),e.onError(h instanceof Error?h:new Error(String(h)))}};return s?_.findPreviousUploads().then(h=>{h.length>0&&!k&&_.resumeFromPreviousUpload(h[0]),k||v()}):v(),{abort(){k=!0,g=!1,m(),_.abort(!0)},pause(){!g&&!k&&(g=!0,_.abort(!1))},resume(){g&&!k&&(g=!1,_.start())},isPaused(){return g}}}function Yi(o){var e;if(o instanceof ke){const t=(e=o.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:o.originalResponse==null&&o.causingError!=null}return!1}async function Vi(o,e){const t=`${Hi}/${o}`,r=e>1e8?13e3:6e3,i=3;for(let n=0;n<=i;n++){n>0&&await new Promise(d=>setTimeout(d,r));const s=await fetch(t);if(s.status===404&&n<i)continue;if(!s.ok)throw new Error(`Failed to fetch file record (HTTP ${s.status})`);const l=await s.json();if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<i))throw new Error(l.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class jr{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const r of e.values())r.status==="idle"?(B(this.store,r.id,{status:"queued"}),t=!0):r.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(B(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&B(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),B(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:r}=this.store.getState().queueConfig;this.activeUploads.size<r?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),B(this.store,e,{status:"uploading"})):B(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!ar(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),B(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())ar(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),B(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,r=this.activeUploads.size,i=t-r;if(i<=0)return;const s=[...e.files.values()].filter(l=>l.status==="queued").sort((l,d)=>l.retryCount!==d.retryCount?d.retryCount-l.retryCount:l.addedAt-d.addedAt).slice(0,i);for(const l of s){const d=this.pausedUploads.get(l.id);d?(this.pausedUploads.delete(l.id),d.resume(),this.activeUploads.set(l.id,d),B(this.store,l.id,{status:"uploading"})):this.startUpload(l)}}startUpload(e){const t=!e.remoteInfo&&!e.remoteUrl&&qi(e,this.config.tusConfig);B(this.store,e.id,{status:"uploading",error:null,isTus:t});let r=0,i=Date.now(),n=0;const s={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:u=>this.handleComplete(e.id,u),onError:u=>this.handleError(e.id,u)},l=(u,g)=>{const k=Date.now(),P=(k-i)/1e3;if(P>0){const R=(u-r)/P;n=n===0?R:.3*R+.7*n}r=u,i=k;const S=g>0?Math.min(u/g*100,100):0;B(this.store,e.id,{progress:S,bytesUploaded:u,speed:n}),this.updateTotalProgress()};let d;if(e.remoteInfo)d=Qr(e,{...s,onProgress:l});else if(e.remoteUrl)d=Nr(e,s);else if(t){const u=Ni(e,{...s,onProgress:l,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:g=>{B(this.store,e.id,{tusUploadUrl:g})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,u),B(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,u),B(this.store,e.id,{status:"uploading"})}});d=u}else d=qr(e,{...s,onProgress:l});this.activeUploads.set(e.id,d)}handleComplete(e,t){this.activeUploads.delete(e),B(this.store,e,{status:"complete",progress:100,response:t}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const r=this.store.getState().files.get(e);if(!r)return;const{retryConfig:i}=this.store.getState().queueConfig,n=r.retryCount+1;if(n<=i.maxRetries){const s=Math.min(i.baseDelay*Math.pow(i.backoffFactor,r.retryCount),i.maxDelay);B(this.store,e,{status:"retrying",error:t.message,retryCount:n});const l=setTimeout(()=>{this.retryTimers.delete(e),B(this.store,e,{status:"queued"}),this.processQueue()},s);this.retryTimers.set(e,l)}else B(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,r=0,i=0;for(const n of e.values())(n.status==="queued"||n.status==="uploading"||n.status==="paused"||n.status==="retrying"||n.status==="complete"||n.status==="failed")&&(t+=n.size,r+=n.status==="complete"?n.size:n.bytesUploaded),n.status==="uploading"&&(i+=n.speed);this.store.setState({totalBytes:t,totalBytesUploaded:r,totalSpeed:i,totalProgress:t>0?Math.min(r/t*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying"||r.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function ar(o){return o==="queued"||o==="uploading"||o==="retrying"||o==="paused"}function Qe(o){return`https://api.filerobot.com/${o}`}async function Lr(o,e){const t=`${Qe(o)}/key/${encodeURIComponent(e)}`,r=new AbortController,i=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(t,{signal:r.signal});if(clearTimeout(i),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const s=await n.json();if(s.status==="error")throw new Error(`SASS key exchange failed: ${s.msg||"Unknown error"}`);return s.key}catch(n){throw clearTimeout(i),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function Ke(o,e){const t={};switch(o.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=o.sassKey;break}return o.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=o.airboxPuid),t}async function Fr(o){const e=Qe(o.container);if(o.mode==="security-template"){const t=await Lr(o.container,o.securityTemplateId);return{apiBase:e,headers:Ke(o,t),sassKey:t}}return{apiBase:e,headers:Ke(o)}}const A={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata"};let Gi=0;function fe(){return`file-${Date.now()}-${++Gi}`}function se(o){if(o<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(o)/Math.log(1024)),e.length-1),r=o/Math.pow(1024,t);return`${t===0?r:r.toFixed(1)} ${e[t]}`}function it(o){if(!isFinite(o)||o<=0)return"0s";const e=Math.round(o);if(e<60)return`${e}s`;const t=Math.floor(e/60),r=e%60;return r>0?`${t}m ${r}s`:`${t}m`}function $e(o){var t;const e=((t=o.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return o.type.startsWith("image/")?"image":o.type.startsWith("video/")||["mp4","mov","avi","webm","mkv"].includes(e)?"vid":o.type==="application/pdf"||e==="pdf"?"pdf":["doc","docx","xls","xlsx","ppt","pptx","txt","rtf","odt"].includes(e)?"doc":["zip","rar","7z","tar","gz","bz2"].includes(e)?"zip":"gen"}function Xi(o){const e=o.lastIndexOf(".");return e>=0?o.slice(e+1).toUpperCase():""}const Ki={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Wi(o){var t;const e=((t=o.split(".").pop())==null?void 0:t.toLowerCase())??"";return Ki[e]||""}function Zi(o){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const r=URL.createObjectURL(o);let i=!1;const n=()=>{i||(i=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r)};t.addEventListener("seeked",()=>{try{const s=document.createElement("canvas");s.width=t.videoWidth||320,s.height=t.videoHeight||240;const l=s.getContext("2d");if(l){l.drawImage(t,0,0,s.width,s.height),s.toBlob(d=>{i||(i=!0,e(d?URL.createObjectURL(d):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r))},"image/jpeg",.7);return}}catch{}n()},{once:!0}),t.addEventListener("error",()=>n(),{once:!0}),setTimeout(()=>n(),5e3),t.src=r,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function ht(o,e,t){var r,i;if(e.maxFileSize!=null&&o.size>0&&o.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&o.size>0){let n=o.size;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&(n+=s.size);if(n>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let n=0;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&n++;if(n>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const n=e.allowedFileTypes,s="."+(((r=o.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(!n.some(d=>d.startsWith(".")?s===d.toLowerCase():d.endsWith("/*")?o.type.startsWith(d.slice(0,-1)):o.type===d))return"File type not allowed"}if(e.blockedFileTypes!=null){const n=e.blockedFileTypes,s="."+(((i=o.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(n.some(d=>d.startsWith(".")?s===d.toLowerCase():d.endsWith("/*")?o.type.startsWith(d.slice(0,-1)):o.type===d))return"File type is blocked"}return null}function Ji(o,e,t){return ht(o,e,t)}function lr(o){return o.allowedFileTypes?o.allowedFileTypes.join(","):""}const dr={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function Ar(o){return o.filter(e=>e in dr).map(e=>dr[e])}var Qi=Object.defineProperty,en=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Qi(e,t,i),i};const tn='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',rn='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',on='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',nn='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',ve=[{id:"device",label:"My Device",icon:tn,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:rn,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:on,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:nn,iconColor:"#ea580c"}],Ct=class Ct extends a.LitElement{constructor(){super(...arguments),this.sources=ve}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return a.html`
      ${this.sources.map(e=>a.html`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ne.unsafeHTML(e.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ee.unsafeSVG(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};Ct.styles=a.css`
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
  `;let We=Ct;en([C.property({type:Array})],We.prototype,"sources");function Br(o){let e=o;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var sn=Object.defineProperty,Z=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&sn(e,t,i),i};const cr=3,gt=new CSSStyleSheet;gt.replaceSync(`
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
`);const $t=class $t extends a.LitElement{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this._dragOver=!1,this._moreOpen=!1,this._visiblePills=cr,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{var r;e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._emitFiles(t)},this._onClick=e=>{const t=this.shadowRoot.querySelector(".drop-zone");if(t&&this._rippleEl){const r=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-r.left}px`,this._rippleEl.style.top=`${e.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,r=Array.from(t.files??[]);r.length>0&&this._emitFiles(r),t.value=""},this._onPaste=e=>{var i;if(!this.isConnected||this.offsetWidth===0)return;const t=(i=e.clipboardData)==null?void 0:i.items;if(!t)return;const r=[];for(const n of t)if(n.kind==="file"){const s=n.getAsFile();s&&r.push(s)}r.length>0&&(e.preventDefault(),this._emitFiles(r))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var e;(e=this.fileInput)==null||e.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Br(this).appendChild(this._portalContainer),this._injectDropdownStyles()),a.render(a.html`<div class="sfx-more-dropdown open">
          ${e.map(t=>a.html`
              <button class="sfx-more-item" @click=${r=>this._onMoreItemClick(t,r)}>
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?ne.unsafeHTML(t.brandHtml):t.iconColor?a.html`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${ee.unsafeSVG(t.icon)}</svg>`:a.svg`<svg viewBox="0 0 24 24">${ee.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(gt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,gt]))}_positionDropdown(){var k,P;const e=(k=this.shadowRoot)==null?void 0:k.querySelector(".more-wrap > button"),t=(P=this._portalContainer)==null?void 0:P.querySelector(".sfx-more-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),i=8,n=t.scrollHeight,s=t.offsetWidth,l=r.top,d=window.innerHeight-r.bottom;l>=n+i||l>d?t.style.top=`${r.top-n-i}px`:t.style.top=`${r.bottom+i}px`;let g=r.right-s;g=Math.max(8,Math.min(g,window.innerWidth-s-8)),t.style.left=`${g}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=480?this._visiblePills=1:e<=768?this._visiblePills=2:this._visiblePills=cr}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills()}updated(e){e.has("sourcesLayout")&&this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return a.html`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?ne.unsafeHTML(e.brandHtml):a.html`<span class="pill-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${a.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ee.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `}_renderCard(e){return a.html`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?a.html`<span class="card-ico">${ne.unsafeHTML(e.brandHtml)}</span>`:a.html`<span class="card-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${a.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ee.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `}_renderMoreCard(){return a.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="src-card" @click=${e=>this._toggleMore(e)}>
          <span class="card-ico" style="color: var(--sfx-up-text-muted, #94a3b8)">
            <svg viewBox="0 0 24 24" style="fill: currentColor; stroke: none">
              <circle cx="5" cy="12" r="2.5"/>
              <circle cx="12" cy="12" r="2.5"/>
              <circle cx="19" cy="12" r="2.5"/>
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
      </div>
    `}_renderMoreDropdown(){return a.html`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          More
          <svg class="more-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
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
        ${this.compact?a.nothing:a.html`<div class="subtitle">Drop files anywhere on this page</div>`}

        ${!this.compact&&this.sources.length>0?a.html`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout==="cards"?a.html`
                    <div class="sources-cards">
                      ${t.map(i=>this._renderCard(i))}
                      ${r.length>0?this._renderMoreCard():a.nothing}
                    </div>
                  `:a.html`
                    <div class="sources-grid">
                      ${t.map(i=>this._renderPill(i))}
                      ${r.length>0?this._renderMoreDropdown():a.nothing}
                    </div>
                  `}
            `:a.nothing}

        ${this.compact&&this.sources.length>0?a.html`
              <div class="sources-row">
                ${this.sources.map(i=>a.html`
                    <button
                      class="src-ico"
                      style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                      data-tip=${i.label}
                      aria-label=${i.label}
                      @click=${n=>{n.stopPropagation(),this._onSourceIconClick(i)}}
                    >
                      ${i.brandHtml?ne.unsafeHTML(i.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ee.unsafeSVG(i.icon)}</svg>`}
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
    `}};$t.styles=a.css`
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
  `;let X=$t;Z([C.property({type:Boolean,reflect:!0})],X.prototype,"compact");Z([C.property({type:Boolean,attribute:"external-drag-over"})],X.prototype,"externalDragOver");Z([C.property({type:String})],X.prototype,"accept");Z([C.property({type:Array})],X.prototype,"sources");Z([C.property({type:String,attribute:"sources-layout"})],X.prototype,"sourcesLayout");Z([C.state()],X.prototype,"_dragOver");Z([C.state()],X.prototype,"_moreOpen");Z([C.state()],X.prototype,"_visiblePills");Z([C.query(".ripple")],X.prototype,"_rippleEl");Z([C.query('input[type="file"]')],X.prototype,"fileInput");const Ut=class Ut extends a.LitElement{render(){return a.html`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};Ut.styles=a.css`
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
  `;let mt=Ut;var an=Object.defineProperty,Fe=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&an(e,t,i),i};const vt=new CSSStyleSheet;vt.replaceSync(`
  [data-sfx-tile-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; }
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
`);const Et=class Et extends a.LitElement{constructor(){super(...arguments),this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this._moreOpen=!1,this._portalContainer=null,this._outsideClickHandler=e=>{var i;if((i=this._portalContainer)!=null&&i.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),r=e.composedPath();t&&r.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const t=e.target,r=Array.from(t.files??[]);r.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:r},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const r=this.renderRoot.querySelector('input[type="file"]');r==null||r.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(3);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Br(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),a.render(a.html`<div class="sfx-tile-dropdown">
        ${e.map(t=>a.html`
          <button
            class="sfx-tile-dropdown-item"
            @click=${r=>this._onMoreSourceClick(r,t)}
          >
            <span class="sfx-tile-dropdown-ico" style=${t.iconColor&&!t.brandHtml?`color:${t.iconColor}`:""}>
              ${t.brandHtml?ne.unsafeHTML(t.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ee.unsafeSVG(t.icon)}</svg>`}
            </span>
            ${t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var k;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(k=this._portalContainer)==null?void 0:k.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),i=6,n=t.scrollHeight,s=t.offsetWidth,l=r.top,d=window.innerHeight-r.bottom;l>=n+i||l>d?t.style.top=`${r.top-n-i}px`:t.style.top=`${r.bottom+i}px`;let g=r.right-s;g=Math.max(8,Math.min(g,window.innerWidth-s-8)),t.style.left=`${g}px`}_closePortal(){this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(vt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,vt]))}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners()}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const t=this.sources.slice(0,3),r=this.sources.slice(3);return a.html`
      <div class="drop-tile" @click=${this._onDropTileClick}>
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
        <div class="drop-tile-text">Drop files or<br>click to <span>browse</span></div>
        ${t.length>0?a.html`
          <div class="drop-tile-sources">
            ${t.map(i=>a.html`
              <button
                class="drop-tile-src"
                style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                title=${i.label}
                @click=${n=>this._onSourceClick(n,i)}
              >
                ${i.brandHtml?ne.unsafeHTML(i.brandHtml):a.svg`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ee.unsafeSVG(i.icon)}</svg>`}
              </button>
            `)}
            ${r.length>0?a.html`
              <div class="drop-tile-more-wrap">
                <button class="drop-tile-more" title="More sources" @click=${i=>this._toggleMore(i)}>···</button>
              </div>
            `:a.nothing}
          </div>
        `:a.nothing}
        <input type="file" multiple accept=${this.accept||a.nothing} @change=${this._onFileInput} />
      </div>
    `}render(){return a.html`
      <div class="grid">
        ${this.showDropTile?this._renderDropTile():a.nothing}
        ${this.files.map((e,t)=>a.html`<sfx-file-item .file=${e} style="--tile-index:${t}"></sfx-file-item>`)}
      </div>
    `}};Et.styles=a.css`
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
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, max(24%, 170px)), 1fr));
      gap: 12px;
      padding: 0 var(--sfx-grid-pad-r, 12px) 16px var(--sfx-grid-pad-l, 16px);
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }

    /* --- Drop tile (first card in grid) --- */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      transition: all 0.18s ease;
      padding: 12px 10px;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drop-tile-rings {
      width: clamp(40px, 6vw, 60px);
      height: clamp(40px, 6vw, 60px);
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
      width: clamp(24px, 4vw, 34px);
      height: clamp(24px, 4vw, 34px);
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
      width: 16px;
      height: 16px;
    }

    .drop-tile-text {
      font-size: 11px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.3;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-sources {
      display: flex;
      gap: 3px;
      margin-top: 2px;
    }

    .drop-tile-src {
      width: 28px;
      height: 28px;
      border-radius: 6px;
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
      width: 14px;
      height: 14px;
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

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 28px;
      height: 28px;
      border-radius: 6px;
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
  `;let te=Et;Fe([C.property({attribute:!1})],te.prototype,"files");Fe([C.property({type:Boolean})],te.prototype,"showDropTile");Fe([C.property({attribute:!1})],te.prototype,"sources");Fe([C.property({type:String})],te.prototype,"accept");Fe([C.state()],te.prototype,"_moreOpen");var ln=Object.defineProperty,Ir=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&ln(e,t,i),i};const Pt=class Pt extends a.LitElement{constructor(){super(...arguments),this._dims=""}updated(e){var t;if(e.has("file")&&(this._dims="",(t=this.file)!=null&&t.previewUrl)){const r=this.file.previewUrl,i=new Image;i.onload=()=>{var n;((n=this.file)==null?void 0:n.previewUrl)===r&&(this._dims=`${i.naturalWidth}×${i.naturalHeight}`)},i.src=r}}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}render(){const e=this.file;if(!e)return a.nothing;const t=$e(e),r=e.status==="complete",i=e.status==="uploading",n=e.status==="paused",s=e.status==="error"||e.status==="failed",l=e.status==="rejected",d=Xi(e.name),u=["tile",r?"done":"",i?"uploading":"",n?"paused":"",l?"rejected":""].filter(Boolean).join(" ");return a.html`
      <div class=${u} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?a.html`<img class="preview-img" src=${e.previewUrl} alt="" />`:a.html`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <div class="type-icon-inner ${t}">
                    ${this._renderTypeIcon(t)}
                    ${d?a.html`<div class="ext-label">${d}</div>`:a.nothing}
                  </div>
                </div>
              `}

          <!-- Preview button -->
          ${!r&&!i&&!n&&!s&&e.status!=="rejected"?a.html`
                <button class="preview-btn" @click=${this._preview} aria-label="Details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Details
                </button>
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

          <!-- Progress bar (visible during upload and when paused) -->
          ${e.status==="uploading"||e.status==="paused"?a.html`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress,100)/100})"></div>
                </div>
              `:a.nothing}

          <!-- Error / rejected badge -->
          ${(s||l)&&e.error?a.html`<div class="error-badge" title=${e.error}>${e.error}</div>`:a.nothing}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(s||l)&&e.duration!=null&&e.duration>0?a.html`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:a.nothing}
        </div>

        <!-- Action buttons -->
        <div class="actions">
          ${i&&e.isTus?a.html`
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

        <!-- Info bar -->
        <div class="info">
          <input class="name-input" type="text" .value=${e.name} title=${e.name}
            aria-label="File name"
            @change=${this._rename} @click=${g=>g.stopPropagation()} />
          <div class="meta">${d||""}${e.size?` · ${se(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r.toString().padStart(2,"0")}`}_renderTypeIcon(e){switch(e){case"pdf":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;case"doc":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;case"vid":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;case"zip":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;default:return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`}}};Pt.styles=a.css`
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
    }

    .name-input {
      margin-bottom: 2px;
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 1px 4px;
      background: transparent;
      font-family: inherit;
      outline: none;
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
  `;let Te=Pt;Ir([C.property({attribute:!1})],Te.prototype,"file");Ir([C.state()],Te.prototype,"_dims");const Ae=a.css`
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
`,Be=a.css`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var dn=Object.defineProperty,Ie=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&dn(e,t,i),i};const pr=7,Ot=class Ot extends a.LitElement{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[]}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,pr),t=this.thumbnails.length-pr,r=this.fileCount>0,i=this.failedFiles.length>0,n=i&&!r;return a.html`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${n?"error":i?"warning":""}">
          ${n?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:i?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${n?"Upload failed":i?"Partially uploaded":"Uploaded successfully!"}</div>
        <div class="subtitle">${n?`${this.failedFiles.length===1?"File":"Files"} could not be uploaded`:i?`${this.fileCount} ${this.fileCount===1?"file":"files"} uploaded, ${this.failedFiles.length} failed`:"All files are ready for use"}</div>

        ${e.length>0?a.html`
              <div class="thumbs">
                ${e.map(s=>a.html`<img class="thumb" src=${s} alt="" />`)}
                ${t>0?a.html`<div class="thumb-more">+${t}</div>`:a.nothing}
              </div>
            `:a.nothing}

        ${r?a.html`<div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${se(this.totalSize)} uploaded</div>`:a.nothing}

        ${i?a.html`
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
          ${i?a.html`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>`:a.nothing}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Ot.styles=[Ae,Be,a.css`
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
  `];let re=Ot;Ie([C.property({type:Number})],re.prototype,"fileCount");Ie([C.property({type:Number})],re.prototype,"totalSize");Ie([C.property({type:Array})],re.prototype,"thumbnails");Ie([C.property({type:String})],re.prototype,"primaryLabel");Ie([C.property({type:Array})],re.prototype,"failedFiles");var cn=Object.defineProperty,Q=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&cn(e,t,i),i};const Rt=class Rt extends a.LitElement{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.uploadDisabled=!1,this.uploadDisabledReason="",this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return a.html`
      ${e?a.html`
            <div class="progress-row">
              <div class="progress-track" role="progressbar" aria-valuenow=${Math.round(this.uploadProgress)} aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
                <div class="progress-fill" style="width:${this.uploadProgress}%"></div>
              </div>
              <span class="progress-label">${this.completedCount}/${this.fileCount} files</span>
            </div>
          `:a.nothing}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?a.html`
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
              `:a.nothing}
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
          ${this.failedCount>0?a.html`
                <button class="btn-retry" @click=${this._retryAll}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  Retry all (${this.failedCount})
                </button>
              `:a.nothing}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",r=["btn-primary",t?"done-state":""].filter(Boolean).join(" ");return a.html`
      <button
        class=${r}
        @click=${this._upload}
        ?disabled=${e||this.uploadDisabled}
        title=${this.uploadDisabled?this.uploadDisabledReason:""}
      >
        ${e?a.html`<span class="btn-spin"></span> Uploading\u2026`:t?a.html`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Done!
              `:a.html`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                </svg>
                Upload
              `}
      </button>
    `}};Rt.styles=[Ae,Be,a.css`
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
  `];let K=Rt;Q([C.property({type:String})],K.prototype,"uploadState");Q([C.property({type:Number})],K.prototype,"fileCount");Q([C.property({type:Number})],K.prototype,"totalSize");Q([C.property({type:Number})],K.prototype,"failedCount");Q([C.property({type:Boolean})],K.prototype,"showFillMetadata");Q([C.property({type:Boolean})],K.prototype,"uploadDisabled");Q([C.property({type:String})],K.prototype,"uploadDisabledReason");Q([C.property({type:Number})],K.prototype,"completedCount");Q([C.property({type:Number})],K.prototype,"uploadProgress");const pn='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function kt(o,e){return t=>{if(t.key!=="Tab")return;const r=o();if(!r)return;const i=r.querySelector(e);if(!i)return;const n=Array.from(i.querySelectorAll(pn));if(n.length===0)return;const s=n[0],l=n[n.length-1],d=r.activeElement;t.shiftKey?(d===s||!i.contains(d))&&(t.preventDefault(),l.focus()):(d===l||!i.contains(d))&&(t.preventDefault(),s.focus())}}var un=Object.defineProperty,St=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&un(e,t,i),i};const zt=class zt extends a.LitElement{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=kt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),r=t[t.length-1];if(r){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");i&&(i.placeholder=r)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let t=this._name.trim();if(!t)try{const r=new URL(e).pathname.split("/");t=r[r.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return a.html`
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
    `}};zt.styles=[Ae,Be,a.css`
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

  `];let ye=zt;St([C.state()],ye.prototype,"_url");St([C.state()],ye.prototype,"_name");St([C.state()],ye.prototype,"_error");var fn=Object.defineProperty,et=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&fn(e,t,i),i};const Dt=class Dt extends a.LitElement{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=kt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var i,n;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("video"),t=(n=this.shadowRoot)==null?void 0:n.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(s=>{s&&(this._captured=s,this._previewUrl=URL.createObjectURL(s),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return a.html`
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
    `}};Dt.styles=[Ae,Be,a.css`
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
  `];let de=Dt;et([C.state()],de.prototype,"_stream");et([C.state()],de.prototype,"_error");et([C.state()],de.prototype,"_captured");et([C.state()],de.prototype,"_previewUrl");var hn=Object.defineProperty,Me=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&hn(e,t,i),i};const Tt=class Tt extends a.LitElement{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=kt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const r=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:r}),this._recorder.ondataavailable=i=>{i.data.size>0&&this._chunks.push(i.data)},this._recorder.onstop=()=>{var n;const i=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=i,this._previewUrl=URL.createObjectURL(i),(n=this._stream)==null||n.getTracks().forEach(s=>s.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return a.html`
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
    `}};Tt.styles=[Ae,Be,a.css`
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
  `];let oe=Tt;Me([C.state()],oe.prototype,"_stream");Me([C.state()],oe.prototype,"_recording");Me([C.state()],oe.prototype,"_error");Me([C.state()],oe.prototype,"_recordedBlob");Me([C.state()],oe.prototype,"_previewUrl");var gn=Object.defineProperty,Mr=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&gn(e,t,i),i};const jt=class jt extends a.LitElement{constructor(){super(...arguments),this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const r=++this._nextId;this._toasts=[...this._toasts,{id:r,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(r),this.duration)}_dismiss(e){const t=this._toasts.findIndex(i=>i.id===e);if(t===-1)return;const r=[...this._toasts];r[t]={...r[t],leaving:!0},this._toasts=r,setTimeout(()=>{this._toasts=this._toasts.filter(i=>i.id!==e)},200)}_iconForType(e){return e==="error"?a.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
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
    `}};jt.styles=a.css`
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
  `;let je=jt;Mr([C.property({type:Number})],je.prototype,"duration");Mr([C.state()],je.prototype,"_toasts");customElements.define("sfx-toast",je);var mn=Object.defineProperty,q=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&mn(e,t,i),i};const ur=new Set(["unsplash"]),he={isTus:!1,tusUploadUrl:null};var G;const I=(G=class extends a.LitElement{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._engine=null,this._cachedSources=ve,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:r,value:i}=e.detail,n=this._store.getState().files.get(t);if(!n)return;const s=new Map(this._store.getState().files);s.set(t,{...n,meta:{...n.meta,[r]:i}}),this._store.setState({files:s})},this._onFilesSelected=e=>{this._processIncomingFiles(e.detail.files)},this._onDropTileSourceClick=e=>{this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var i,n;const t=this._mergedSources.find(s=>s.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(s){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,s)}return}if(e==="device"){const s=this.shadowRoot.querySelector("sfx-drop-zone");s==null||s.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((n=(i=this.config)==null?void 0:i.connectors)==null?void 0:n.providers)??[]).includes(e)){if(ur.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await Promise.resolve().then(()=>require("./search-provider-browser-CFCKzFv4.cjs"));customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await Promise.resolve().then(()=>require("./provider-browser-DlnjPqY9.cjs"));customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var g,k,P;this._showUrlDialog=!1;const{url:t,name:r}=e.detail,i=(g=this.config)==null?void 0:g.callbacks,n=Wi(r),s=n.startsWith("image/"),l=this._store.getState(),d=ht({name:r,size:0,type:n},l.restrictions,l.files);if(d){const S={id:fe(),status:"rejected",file:null,remoteUrl:t,name:r,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...he};pe(this._store,S),this._dispatchPublic(A.FILE_REJECTED,{file:S,reason:d}),(k=i==null?void 0:i.onFileRejected)==null||k.call(i,S,d);return}const u={id:fe(),status:"idle",file:null,remoteUrl:t,name:r,size:0,type:n,previewUrl:s?t:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...he};pe(this._store,u),this._dispatchPublic(A.FILE_ADDED,{file:u}),(P=i==null?void 0:i.onFileAdded)==null||P.call(i,u),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var r,i,n;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(A.FILE_PREVIEW,{file:t}),(n=(i=(r=this.config)==null?void 0:r.callbacks)==null?void 0:i.onFilePreview)==null||n.call(i,t))},this._onFillMetadata=()=>{var t,r,i,n;const e=[...this._store.getState().files.values()].filter(s=>G._MODIFIABLE_STATUSES.has(s.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataOpen=!0),this._dispatchPublic(A.FILL_METADATA,{files:e}),(n=(i=(r=this.config)==null?void 0:r.callbacks)==null?void 0:i.onFillMetadata)==null||n.call(i,e)},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const r=new Map(this._store.getState().files);for(const{fileId:i,meta:n}of t){const s=r.get(i);s&&r.set(i,{...s,meta:{...s.meta,...n}})}this._store.setState({files:r})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var r,i,n;const e=(r=this.config)==null?void 0:r.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(i=this._engine)==null||i.cancelAll();const t=[...this._store.getState().files.values()];for(const s of t)s.previewUrl&&URL.revokeObjectURL(s.previewUrl),this._dispatchPublic(A.FILE_REMOVED,{file:s}),(n=e==null?void 0:e.onFileRemoved)==null||n.call(e,s);this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var i;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),r=(i=t==null?void 0:t.shadowRoot)==null?void 0:i.querySelector('input[type="file"]');r==null||r.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onConnectorFilesSelected=e=>{var r,i,n;const t=(r=this.config)==null?void 0:r.callbacks;for(const s of e.detail.files){const l=this._store.getState(),d=ht({name:s.name,size:s.size,type:s.mimeType},l.restrictions,l.files);if(d){const g={id:fe(),status:"rejected",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:d,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...he};pe(this._store,g),this._dispatchPublic(A.FILE_REJECTED,{file:g,reason:d}),(i=t==null?void 0:t.onFileRejected)==null||i.call(t,g,d);continue}const u={id:fe(),status:"idle",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...he};pe(this._store,u),this._dispatchPublic(A.FILE_ADDED,{file:u}),(n=t==null?void 0:t.onFileAdded)==null||n.call(t,u)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t,r,i,n;this._dispatchPublic(A.COMPLETE_ACTION,{}),(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCompleteAction)==null||r.call(t),((i=this.config)==null?void 0:i.mode)==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(A.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,r,i;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(A.COMPLETE_ACTION,{}),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCompleteAction)==null||i.call(r),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,r,i;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||i.call(r),this._dispatchPublic(A.CANCEL,{}),this.close()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var e,t,r,i;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||i.call(r),this._dispatchPublic(A.CANCEL,{}),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{var r;e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t}}))},this._onKeyDown=e=>{var t,r;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const i=((t=this.config)==null?void 0:t.mode)??"modal",n=((r=this.config)==null?void 0:r.header)??(i==="modal"?"close":!0);(n==="close"||n==="back")&&(i==="modal"&&this._isOpen?this._onModalDismiss():i==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var r;e.preventDefault(),this._isResizing=!0;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var s;this._splitRafId=0;const r=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-layout");if(!r)return;const i=r.getBoundingClientRect(),n=(t-i.left)/i.width*100;this._splitPct=Math.max(25,Math.min(75,n))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,r=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(!this._fullscreenZoomed||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],r=t.clientX-this._fsDragStartX,i=t.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+i,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=hr(),this._storeCtrl=new Hr(this,this._store)}open(){var e,t,r;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onOpen)==null||r.call(t),this._dispatchPublic(A.OPEN,{}),this.requestUpdate())}close(){var e,t,r,i;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onClose)==null||i.call(r),this._dispatchPublic(A.CLOSE,{}),this.requestUpdate())}upload(){var i,n,s,l,d,u,g;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(k=>k.status==="idle"||k.status==="queued");if((n=(i=this.config)==null?void 0:i.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(A.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(A.UPLOAD_STARTED,{files:e}),(d=(l=(s=this.config)==null?void 0:s.callbacks)==null?void 0:l.onUploadStarted)==null||d.call(l,e),this._engine.uploadAll(),(u=this.config)!=null&&u.minimizeOnUpload&&((g=this.config)==null?void 0:g.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const r=this._store.getState().files,i=new Map(r);let n=!1;for(const s of e){const l=r.get(s.id);l&&(i.set(s.id,{...l,...s}),n=!0)}n&&this._store.setState({files:i})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,r){const i=this._store.getState().files,n=i.get(e);if(!n||!G._MODIFIABLE_STATUSES.has(n.status))return;const s=new Map(i);s.set(e,{...n,meta:t!=null?{...n.meta,...t}:n.meta,tags:r??n.tags}),this._store.setState({files:s})}updateFilesMeta(e){const t=this._store.getState().files,r=new Map(t);let i=!1;for(const{fileId:n,meta:s,tags:l}of e){const d=t.get(n);!d||!G._MODIFIABLE_STATUSES.has(d.status)||(r.set(n,{...d,meta:s!=null?{...d.meta,...s}:d.meta,tags:l??d.tags}),i=!0)}i&&this._store.setState({files:r})}updated(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,r=this._store.getState().files.get(t);r?this._getImageDimensions(r).then(i=>{this._previewFileId===t&&(this._previewDims=i?`${i.w} × ${i.h}`:"—")}):this._previewDims="—"}this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];this._isMinimized&&e.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),a.render(this._renderFloatingPill(e),this._portalContainer)):this._portalContainer&&(a.render(a.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange())}disconnectedCallback(){var e,t,r,i;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(t=this._portalContainer)==null||t.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(i=this._engine)==null||i.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.targetFolder&&(t.targetFolder=e.targetFolder),e.restrictions&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions}),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var i,n;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=Qe(t.container),this._authHeaders=Ke(t),this._ensureEngine(),(i=this._engine)==null||i.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(e);return}const r=++this._authResolveId;try{const s=await Fr(t);if(r!==this._authResolveId)return;this._apiBase=s.apiBase,this._authHeaders=s.headers,this._ensureEngine(),(n=this._engine)==null||n.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(e)}catch(s){if(r!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",s),this._showToast(this._formatAuthError(s))}}_formatAuthError(e){var r,i;const t=e instanceof Error?e.message:String(e);return(i=(r=this.config)==null?void 0:r.auth)!=null&&i.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var i;const r=(i=this.shadowRoot)==null?void 0:i.querySelector("sfx-toast");r==null||r.show(e,t)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new jr(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:r,createTagsAutocomplete:i}=await Promise.resolve().then(()=>require("./index-ZNX436Kx.cjs"));this._metadataSchema=await r(this._apiBase,this._authHeaders,t.projectUuid,t),this._metadataAutocomplete=i(this._apiBase,this._authHeaders)}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(e,t){const r=t.trim();if(!r)return;const i=this._store.getState().files.get(e);if(!i||i.name===r)return;const n=new Map(this._store.getState().files);n.set(e,{...i,name:r}),this._store.setState({files:n})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:e.enforceRequiredBeforeUpload===!0?!0:e.enforceRequiredBeforeUpload==="auto"?this._metadataSchema.forceFillingOnUpload:!1}get _hasUnfilledRequiredMetadata(){if(!this._metadataEnforcing||!this._metadataSchema)return!1;const e=this._metadataSchema.fields.filter(r=>{var n;const i=(n=this.config)==null?void 0:n.metadataConfig;return i!=null&&i.requiredFields?i.requiredFields.includes(r.ckey):r.required===1});if(e.length===0)return!1;const t=[...this._store.getState().files.values()].filter(r=>r.status==="idle"||r.status==="queued"||r.status==="rejected");return e.some(r=>t.some(i=>{const n=i.meta[r.key];return n==null?!0:Array.isArray(n)||typeof n=="string"?n.length===0:!n}))}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_onStoreChange(){var i,n,s,l,d,u,g,k,P,S;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;const r=(i=this.config)==null?void 0:i.callbacks;for(const[R,_]of e.files){const E=t.files.get(R);if(E){if(E.status!==_.status)switch(_.status){case"uploading":E.status==="paused"&&(this._dispatchPublic(A.UPLOAD_RESUMED,{file:_}),(n=r==null?void 0:r.onUploadResumed)==null||n.call(r,_));break;case"complete":_.response&&(this._dispatchPublic(A.UPLOAD_COMPLETE,{file:_,response:_.response}),(s=r==null?void 0:r.onUploadComplete)==null||s.call(r,_,_.response));break;case"error":case"failed":{const T=new Error(_.error??"Upload failed");this._dispatchPublic(A.UPLOAD_ERROR,{file:_,error:T}),(l=r==null?void 0:r.onUploadError)==null||l.call(r,_,T),_.status==="failed"&&this._showToast(`${_.name}: ${_.error??"Upload failed"}`);break}case"retrying":this._dispatchPublic(A.UPLOAD_RETRY,{file:_,attempt:_.retryCount}),(d=r==null?void 0:r.onUploadRetry)==null||d.call(r,_,_.retryCount);break;case"paused":this._dispatchPublic(A.UPLOAD_PAUSED,{file:_}),(u=r==null?void 0:r.onUploadPaused)==null||u.call(r,_);break}_.status==="uploading"&&E.progress!==_.progress&&(this._dispatchPublic(A.UPLOAD_PROGRESS,{file:_,progress:_.progress,speed:_.speed}),(g=r==null?void 0:r.onUploadProgress)==null||g.call(r,_,_.progress,_.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const R=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:0;this._dispatchPublic(A.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:R}),(k=r==null?void 0:r.onTotalProgress)==null||k.call(r,e.totalProgress,e.totalSpeed,R)}if(t.isUploading&&!e.isUploading){const R=[...e.files.values()];if(!R.some(E=>E.status==="cancelled")){const E=R.filter(v=>v.status==="complete"),T=R.filter(v=>v.status==="failed"||v.status==="error");this._dispatchPublic(A.ALL_COMPLETE,{successful:E,failed:T}),(P=r==null?void 0:r.onAllComplete)==null||P.call(r,E,T);const m=(S=this.config)==null?void 0:S.closeOnComplete;if(m){const v=typeof m=="number"?m:1500;this._closeOnCompleteTimer=setTimeout(()=>{var h,x,O;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(A.COMPLETE_ACTION,{}),(O=(x=(h=this.config)==null?void 0:h.callbacks)==null?void 0:x.onCompleteAction)==null||O.call(x),this.close())},v)}}}}get _mergedSources(){var d;const e=(d=this.config)==null?void 0:d.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=ve,this._cachedSources;const t=e.providers.length>0?Ar(e.providers):[],r=e.customSources??[],i=ve.filter(u=>u.id==="device"||u.id==="url"),n=ve.filter(u=>u.id!=="device"&&u.id!=="url"),s=new Set,l=[];for(const u of[...i,...t,...n,...r])if(!s.has(u.id)){if(G._RESERVED_IDS.has(u.id)&&u.onActivate){console.warn(`[sfx-uploader] Custom source id "${u.id}" conflicts with a built-in source and was skipped.`);continue}s.add(u.id),l.push(u)}return this._cachedSources=l,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return t.every(i=>r.has(i.status))&&t.some(i=>i.status==="complete"||i.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var r,i,n,s;const t=(r=this.config)==null?void 0:r.callbacks;for(const l of e){const d=this._store.getState(),u=Ji(l,d.restrictions,d.files);if(u){const P=l.type.startsWith("image/")?URL.createObjectURL(l):null,S={id:fe(),status:"rejected",file:l,remoteUrl:null,name:l.name,size:l.size,type:l.type,previewUrl:P,duration:null,progress:0,speed:0,bytesUploaded:0,error:u,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...he};pe(this._store,S),this._dispatchPublic(A.FILE_REJECTED,{file:S,reason:u}),(i=t==null?void 0:t.onFileRejected)==null||i.call(t,S,u);const R=(n=this.config)==null?void 0:n.rejectedFileAutoRemoveDelay,_=R===!1||R===0||R===void 0?0:R;if(_>0){const E=S.id,T=setTimeout(()=>{this._rejectedTimers.delete(E);const m=this._store.getState().files.get(E);m&&m.status==="rejected"&&Lt(this._store,E)},_);this._rejectedTimers.set(E,T)}continue}let g=null;l.type.startsWith("image/")&&(g=URL.createObjectURL(l));const k={id:fe(),status:"idle",file:l,remoteUrl:null,name:l.name,size:l.size,type:l.type,previewUrl:g,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...he};if(pe(this._store,k),this._dispatchPublic(A.FILE_ADDED,{file:k}),(s=t==null?void 0:t.onFileAdded)==null||s.call(t,k),l.type.startsWith("video/")){Zi(l).then(S=>{if(!S)return;const R=this._store.getState(),_=R.files.get(k.id);if(_){const E=new Map(R.files);E.set(k.id,{..._,previewUrl:S}),this._store.setState({files:E})}else URL.revokeObjectURL(S)});const P=document.createElement("video");P.preload="metadata",P.src=URL.createObjectURL(l),P.onerror=()=>{URL.revokeObjectURL(P.src)},P.onloadedmetadata=()=>{const S=P.duration;if(URL.revokeObjectURL(P.src),!isFinite(S))return;const R=this._store.getState(),_=R.files.get(k.id);if(_){const E=new Map(R.files);E.set(k.id,{..._,duration:S}),this._store.setState({files:E})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(e){var n,s,l,d;const t=this._store.getState().files.get(e);if(!t)return;const r={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const u=this._videoBlobUrls.get(t.file);u&&(URL.revokeObjectURL(u),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((n=this._engine)==null||n.cancelFile(e)),Lt(this._store,e),this._dimCache.delete(e);const i=this._rejectedTimers.get(e);if(i&&(clearTimeout(i),this._rejectedTimers.delete(e)),this._previewFileId===e){const u=[...this._store.getState().files.values()];this._previewFileId=u.length>0?u[0].id:null}this._dispatchPublic(A.FILE_REMOVED,{file:r}),(d=(l=(s=this.config)==null?void 0:s.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,r)}render(){var t;const e=((t=this.config)==null?void 0:t.mode)??"modal";return[...this._storeCtrl.state.files.values()],e==="modal"?a.html`
        ${this._isOpen&&!this._isMinimized?a.html`
          <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
            <div class="modal-card">
              ${this._renderHeader()}
              ${this._renderBody()}
              <sfx-toast></sfx-toast>
            </div>
          </div>
        `:a.nothing}
      `:a.html`
      <div class="inline">
        ${this._renderHeader()}
        ${this._renderBody()}
        <sfx-toast></sfx-toast>
      </div>
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
    `}_renderHeader(){var s,l,d;if(this._phase==="complete")return a.nothing;const e=((s=this.config)==null?void 0:s.mode)??"modal";if(this._phase==="uploading"){const u=this._storeCtrl.state,g=[...u.files.values()],k=g.filter(S=>S.status==="complete").length,P=u.totalSpeed>0?(u.totalBytes-u.totalBytesUploaded)/u.totalSpeed:0;return a.html`
        <div class="header upload-header">
          <div class="float-header-left">
            <div class="float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
            </div>
            <div>
              <div class="float-title">Uploading ${g.length} ${g.length===1?"file":"files"}</div>
              <div class="float-subtitle">${k} of ${g.length}${P>0?` · ~${it(P)} left`:""}</div>
            </div>
          </div>
        </div>
      `}if(e==="inline"&&((l=this.config)!=null&&l.inlineHeader))return a.nothing;const t=((d=this.config)==null?void 0:d.header)??(e==="modal"?"close":!0);if(t===!1)return a.nothing;const r=e==="modal"?this._onModalDismiss:this._onInlineDismiss,i=t==="back"?a.html`<button class="header-btn header-btn-back" aria-label="Back to Asset Picker" @click=${r}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>`:a.nothing,n=t==="close"?a.html`<button class="header-btn header-btn-close" aria-label="Close" @click=${r}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>`:a.nothing;return a.html`
      <div class="header">
        ${i}
        ${t!=="back"?a.html`
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
          </svg>
        </div>`:a.nothing}
        <div class="header-title">Upload Files</div>
        ${n}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const r=new Image;r.onload=()=>{const i={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(e.id,i),t(i)},r.onerror=()=>{this._dimCache.set(e.id,null),t(null)},r.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var s;const t=this._storeCtrl.state,r=Math.round(t.totalProgress??0),i=e.filter(l=>l.status==="complete").length,n=t.totalSpeed>0?(t.totalBytes-t.totalBytesUploaded)/t.totalSpeed:0;return a.html`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${r}%</div>
        <div class="upload-overlay-title">Uploading ${e.length} ${e.length===1?"file":"files"}</div>
        <div class="upload-overlay-subtitle">${i} of ${e.length} complete${n>0?a.html` · ~${it(n)} left`:a.nothing}</div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${r}%"></div>
        </div>
        ${(s=this.config)!=null&&s.minimizeOnUpload?a.html`<button class="upload-overlay-minimize" @click=${this._onMinimize}>Minimize & continue in background</button>`:a.nothing}
      </div>
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,r=Math.round(t.totalProgress??0),i=this._phase==="complete",n=e.filter(d=>d.status==="complete").length,s=e.filter(d=>d.status==="failed").length,l=t.totalSpeed>0?(t.totalBytes-t.totalBytesUploaded)/t.totalSpeed:0;return this._isPillExpanded===!1?a.html`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${i?s>0?n>0?a.html`<div class="float-collapsed-icon warn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>`:a.html`<div class="float-collapsed-icon error"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>`:a.html`<div class="float-collapsed-icon done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>`:a.html`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${i?s>0?n>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${e.length} ${e.length===1?"file":"files"}`}</span>
            ${i?a.nothing:a.html`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            <button title="Open uploader" @click=${this._onPillExpand}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
            </button>
            <button title="Expand" @click=${this._onPillClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
            <button title="Close" @click=${this._onPillDismiss}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      `:a.html`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${i?s>0?n>0?"warn":"error":"done":""}">
              ${i?s>0?n>0?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>`}
            </div>
            <div>
              <div class="float-title">${i?s>0?n>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${e.length} ${e.length===1?"file":"files"}`}</div>
              <div class="float-subtitle">${i?`${n} ${n===1?"file":"files"} uploaded${s>0?`, ${s} failed`:""}`:`${n} of ${e.length}${l>0?` · ~${it(l)} left`:""}`}</div>
            </div>
          </div>
          <div class="float-actions">
            <button title="Expand" @click=${this._onPillExpand}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
            </button>
            <button title="Collapse" @click=${this._onPillClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button title="Close" @click=${this._onPillDismiss}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">Overall progress</span>
            <span class="float-progress-pct ${i?s>0?n>0?"warn":"error":"done":""}">${i?"Done":`${r}%`}</span>
          </div>
          <div class="float-bar"><div class="float-bar-fill ${i?s>0?n>0?"warn":"error":"done":""}" style="width:${i?100:r}%"></div></div>
        </div>
        <div class="float-items">
          ${e.map(d=>{const u=d.status==="failed"||d.status==="error";return a.html`
            <div class="float-item">
              <div class="float-item-thumb" style=${d.previewUrl?`background-image:url(${d.previewUrl});background-size:cover;background-position:center`:""}>
                ${d.previewUrl?a.nothing:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`}
              </div>
              <div class="float-item-info">
                <div class="float-item-name">${d.name}</div>
                <div class="float-item-size">${se(d.size)}</div>
              </div>
              <div class="float-item-status">
                ${d.status==="complete"?a.html`<div class="float-item-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>`:u?a.html`
                        <div class="float-item-error-wrap">
                          <svg class="float-item-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          <span class="float-item-tooltip">${d.error||"Upload failed"}</span>
                        </div>
                        <button class="float-item-retry" @click=${()=>{var g;this._ensureEngine(),(g=this._engine)==null||g.retryFile(d.id)}}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                        </button>`:d.status==="paused"?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" width="16" height="16"><rect x="6" y="4" width="4" height="16" rx="1" fill="#d97706"/><rect x="14" y="4" width="4" height="16" rx="1" fill="#d97706"/></svg>`:a.html`<div class="float-item-spinner"></div>`}
              </div>
            </div>
          `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var n,s,l,d;if(e.length===0)return a.nothing;const t=e.find(u=>u.id===this._previewFileId)??e[0],r=((n=t.name.split(".").pop())==null?void 0:n.toUpperCase())||"";new Date(t.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const i=e.reduce((u,g)=>u+(g.size||0),0);return a.html`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&((l=this.config)!=null&&l.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):a.nothing}
          <div class="file-grid-header">
            <span class="file-grid-header-text">${e.length} ${e.length===1?"asset":"assets"} · ${se(i)}</span>
          </div>
          <sfx-file-list
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${lr(this._storeCtrl.state.restrictions)}
            @source-click=${this._onDropTileSourceClick}
          ></sfx-file-list>
        </div>
        <div class="preview-divider"
          @pointerdown=${this._onSplitPointerDown}
          @pointermove=${this._onSplitPointerMove}
          @pointerup=${this._onSplitPointerUp}
          @lostpointercapture=${this._onSplitPointerUp}
        ></div>
        <div class="preview-panel" style="flex:${100-this._splitPct}">
          <div class="preview-panel-header">
            <input class="preview-header-name" type="text"
              .value=${t.name}
              title=${t.name}
              aria-label="File name"
              @change=${u=>this._onPreviewRename(t.id,u.target.value)}
            />
            <div class="preview-header-actions">
              ${t.previewUrl||t.type.startsWith("video/")&&t.file?a.html`
                <button @click=${()=>{this._fullscreenPreviewUrl=t.previewUrl,this._fullscreenVideoFile=t.type.startsWith("video/")&&t.file?t.file:null,this._fullscreenZoomed=!1}} title="Fullscreen">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
              `:a.nothing}
              <button @click=${()=>{this._previewFileId=null}} title="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          ${t.type.startsWith("video/")&&t.file?a.html`
                <div class="preview-img-wrap">
                  <video class="preview-image" src=${this._getVideoBlobUrl(t.file)} controls playsinline></video>
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `:t.previewUrl?a.html`
                <div class="preview-img-wrap">
                  <img class="preview-image" src=${t.previewUrl} alt=${t.name} />
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `:a.html`
                <div class="preview-doc-wrap ${$e(t)}">
                  <div class="preview-doc-icon ${$e(t)}">
                    ${this._renderDocTypeIcon($e(t))}
                    <span class="preview-doc-ext ${$e(t)}">${r}</span>
                  </div>
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `}
          <div class="preview-meta-list">
            <div class="preview-file-info">${r}${t.size?` · ${se(t.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}</div>
          </div>
          ${this._metadataSchema&&((d=this.config)!=null&&d.metadataConfig)?a.html`
                <div class="preview-metadata" @field-blur=${this._onPreviewMetadataBlur}>
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${t.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:a.nothing}
        </div>
      </div>
    `}_renderDocTypeIcon(e){switch(e){case"pdf":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;case"doc":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;case"vid":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;case"zip":return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;default:return a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`}}_navigatePreview(e,t){var n;const i=e.findIndex(s=>s.id===this._previewFileId)+t;if(i>=0&&i<e.length){const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-image[controls]");s&&(s.pause(),s.removeAttribute("src"),s.load()),this._previewFileId=e[i].id}}_renderBody(){var s,l,d,u,g,k,P;const e=this._storeCtrl.state,t=[...e.files.values()],r=this._phase,i=lr(e.restrictions),n=t.length>0;return a.html`
      <div class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
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
          class="body ${n?"has-files":""} ${this._bodyDragOver?"body-drag-over":""}"
          @dragenter=${n?this._onBodyDragEnter:a.nothing}
          @dragover=${n?this._onBodyDragOver:a.nothing}
          @dragleave=${n?this._onBodyDragLeave:a.nothing}
          @drop=${n?this._onBodyDrop:a.nothing}
        >
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&((l=this.config)!=null&&l.inlineHeader)&&!this._previewFileId&&r!=="uploading"&&r!=="complete"?this._renderInlineHeader(this.config.inlineHeader):a.nothing}
          ${r==="complete"?a.html`
                  <sfx-success-card
                    .fileCount=${t.filter(S=>S.status==="complete").length}
                    .totalSize=${t.filter(S=>S.status==="complete").reduce((S,R)=>S+(R.size||0),0)}
                    .thumbnails=${t.filter(S=>S.status==="complete"&&S.previewUrl).map(S=>S.previewUrl)}
                    .failedFiles=${t.filter(S=>S.status==="failed").map(S=>({id:S.id,name:S.name,error:S.error||"Upload failed"}))}
                    @close-uploader=${this._onSuccessCardClose}
                    @file-retry=${this._onFileRetry}
                    @retry-all=${this._onRetryAll}
                  ></sfx-success-card>
                `:r==="uploading"?this._renderUploadOverlay(t):a.html`
                  ${n?a.nothing:a.html`<sfx-drop-zone
                        .compact=${n}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${i}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((d=this.config)==null?void 0:d.sourcesLayout)??"pills"}
                      ></sfx-drop-zone>`}

                  ${n?this._previewFileId?this._renderPreviewLayout(t):a.html`
                          <div class="asset-count">${t.length} ${t.length===1?"file":"files"} · ${se(t.reduce((S,R)=>S+(R.size||0),0))}</div>
                          <sfx-file-list
                            .files=${t}
                            .showDropTile=${!0}
                            .sources=${this._mergedSources}
                            .accept=${i}
                            @source-click=${this._onDropTileSourceClick}
                          ></sfx-file-list>
                        `:a.nothing}
                `}
        </div>

        ${n&&r!=="complete"&&r!=="uploading"?a.html`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((S,R)=>S+(R.size||0),0)}
                .failedCount=${t.filter(S=>S.status==="failed"||S.status==="error").length}
                .completedCount=${t.filter(S=>S.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((u=this.config)==null?void 0:u.showFillMetadata)??((g=this.config)==null?void 0:g.metadataConfig))}
                .uploadDisabled=${this._hasUnfilledRequiredMetadata}
                .uploadDisabledReason=${this._hasUnfilledRequiredMetadata?"Fill required metadata first":""}
              ></sfx-actions-bar>
            `:a.nothing}

        ${this._showUrlDialog?a.html`<sfx-url-dialog></sfx-url-dialog>`:a.nothing}
        ${this._showCameraDialog?a.html`<sfx-camera-dialog></sfx-camera-dialog>`:a.nothing}
        ${this._showScreenCastDialog?a.html`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:a.nothing}
        ${this._activeConnector&&((k=this.config)!=null&&k.connectors)?a.html`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${ur.has(this._activeConnector)?a.html`
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
                .config=${((P=this.config)==null?void 0:P.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:a.nothing}

        ${this._fullscreenPreviewUrl||this._fullscreenVideoFile?a.html`
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
                <div class="fs-toolbar" @click=${S=>S.stopPropagation()}>
                  <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
                    ${this._fullscreenZoomed?a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:a.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
                  </button>
                  <button class="fs-btn" @click=${this._onFsClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                ${this._fullscreenVideoFile?a.html`<video
                      class="fs-img"
                      src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
                      controls playsinline
                      draggable="false"
                      @click=${S=>S.stopPropagation()}
                    ></video>`:a.html`<img
                      class="fs-img"
                      src=${this._fullscreenPreviewUrl}
                      alt=""
                      style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""}
                      draggable="false"
                    />`}
                <button class="fs-nav prev" @click=${S=>{S.stopPropagation(),this._navigateFs(-1)}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button class="fs-nav next" @click=${S=>{S.stopPropagation(),this._navigateFs(1)}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                </button>
              </div>
            `:a.nothing}
      </div>
    `}_navigateFs(e){const t=[...this._store.getState().files.values()].filter(n=>n.previewUrl||n.type.startsWith("video/")&&n.file),r=t.findIndex(n=>n.id===this._previewFileId);if(r===-1)return;const i=r+e;if(i>=0&&i<t.length){const n=t[i];this._fullscreenPreviewUrl=n.previewUrl,this._fullscreenVideoFile=n.type.startsWith("video/")&&n.file?n.file:null,this._previewFileId=n.id,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},G.styles=a.css`
    :host {
      display: block;
      height: inherit;
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
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
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
      max-width: 1100px;
      min-height: var(--sfx-up-min-height, 660px);
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
      border-radius: 8px;
      position: relative;
    }

    .body.body-drag-over::after {
      content: '';
      position: absolute;
      inset: 4px;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      padding: 0 0 0 8px;
      animation: bodyReveal 0.35s ease both;
    }

    .body.has-files:has(.preview-layout) {
      padding-right: 0;
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
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 0;
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
      max-width: 1600px;
      align-self: center;
      width: 100%;
    }

    /* Inline horizontal alignment — driven by --sfx-inline-pad */
    .inline .body.has-files {
      padding-left: 0;
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
      --sfx-up-grid-min: max(30%, 140px);
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
      left: 4px;
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

    .preview-panel::-webkit-scrollbar { width: 5px; }
    .preview-panel::-webkit-scrollbar-track { background: transparent; }
    .preview-panel::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 16px 24px 16px 16px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
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
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 2px 6px;
      background: transparent;
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s, background 0.15s;
    }
    .preview-header-name:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .preview-header-name:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 0 0 3px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.15));
    }


    .preview-panel-header button {
      width: 28px;
      height: 28px;
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
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    .file-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0 10px;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      border-top: 1px solid var(--sfx-up-border, #e8edf5);
      margin-top: 4px;
      flex-shrink: 0;
    }

    .file-info-header svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #9ca3af);
    }

    .preview-doc-wrap {
      position: relative;
      min-height: 200px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-doc-wrap.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-doc-wrap.doc { background: linear-gradient(135deg, var(--sfx-up-primary-bg, #eff6ff), var(--sfx-up-primary-bg, #dbeafe)); }
    .preview-doc-wrap.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-doc-wrap.zip { background: linear-gradient(135deg, var(--warning-10, #fffbeb), var(--warning-10, #fef3c7)); }
    .preview-doc-wrap.gen { background: linear-gradient(135deg, var(--sfx-up-border-light, #f8fafc), var(--sfx-up-border-light, #f1f5f9)); }

    .preview-doc-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .preview-doc-icon svg {
      width: 48px;
      height: 48px;
      stroke-width: 1.5;
    }

    .preview-doc-icon.pdf svg { color: var(--sfx-up-error, #dc2626); }
    .preview-doc-icon.doc svg { color: var(--sfx-up-primary, #1d4ed8); }
    .preview-doc-icon.vid svg { color: #7c3aed; }
    .preview-doc-icon.zip svg { color: var(--warning-foreground, #b45309); }
    .preview-doc-icon.gen svg { color: var(--sfx-up-text-muted, #64748b); }

    .preview-doc-ext {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .preview-doc-ext.pdf { color: var(--sfx-up-error, #dc2626); }
    .preview-doc-ext.doc { color: var(--sfx-up-primary, #1d4ed8); }
    .preview-doc-ext.vid { color: #7c3aed; }
    .preview-doc-ext.zip { color: var(--warning-foreground, #b45309); }
    .preview-doc-ext.gen { color: var(--sfx-up-text-muted, #64748b); }

    .preview-img-wrap {
      position: relative;
      min-height: 200px;
      max-height: 380px;
      flex-shrink: 0;
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
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }

    .preview-image {
      display: block;
      max-width: 100%;
      max-height: 380px;
      border: none;
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
      flex-shrink: 0;
      padding: 0 16px 4px;
    }

    .preview-metadata {
      padding: 0 12px 16px;
      border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
    }

    .preview-file-info {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 2px 0;
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

    .upload-header .float-actions button svg { width: 16px; height: 16px; }

    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
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
      box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
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

    .float-icon svg { width: 14px; height: 14px; }

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

    .float-actions button svg { width: 14px; height: 14px; }

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

    .float-progress-pct.done { color: #22c55e; }
    .float-progress-pct.warn { color: #f59e0b; }
    .float-progress-pct.error { color: #ef4444; }

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

    .float-bar-fill.done { background: #22c55e; }
    .float-bar-fill.warn { background: #f59e0b; }
    .float-bar-fill.error { background: #ef4444; }

    .float-items {
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.1) transparent;
    }

    .float-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px;
      border-bottom: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .float-item:last-child { border-bottom: none; }

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

    .float-item-thumb svg { width: 16px; height: 16px; }

    .float-item-info { flex: 1; min-width: 0; overflow: hidden; }

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

    .float-item-done svg { width: 12px; height: 12px; }

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
      box-shadow: 0 2px 12px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08);
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

    .float-item-retry svg { width: 16px; height: 16px; }

    .float-item-retry:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-primary-hover, #1d4ed8); }

    @keyframes floatSlideIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
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
      z-index: 10001;
      transition: background 0.15s;
      padding: 0;
    }

    .fs-nav:hover { background: rgba(255, 255, 255, 0.3); }
    .fs-nav:disabled { opacity: 0.3; cursor: default; }
    .fs-nav:disabled:hover { background: rgba(255, 255, 255, 0.15); }
    .fs-nav svg { width: 22px; height: 22px; }
    .fs-nav.prev { left: 20px; }
    .fs-nav.next { right: 20px; }

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
      .modal-card { border-radius: 12px; max-height: 92vh; min-height: auto; }
      .header { padding: 12px 16px; }
      .header-icon { width: 28px; height: 28px; margin-right: 10px; }
      .header-icon svg { width: 14px; height: 14px; }
      .header-title { font-size: 14px; }
      .body { padding: 16px; }
      .body.has-files { padding: 0 0 12px 8px; }

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

      .inline { --sfx-inline-pad: 16px; min-height: auto; }

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
      .body.has-files { padding: 0 0 8px 8px; }

      .preview-layout .file-grid-side { max-height: 100px; }
      .preview-panel { padding: 0 0 12px; }

      .inline { --sfx-inline-pad: 12px; max-height: 100vh; box-shadow: none; }
      .inline-header-title { font-size: 18px; }

      .connector-modal-backdrop { padding: 0; }
      .connector-modal {
        border-radius: 0;
        height: 100vh;
        min-height: auto;
      }
    }

    /* --- Responsive: Landscape / short viewports --- */
    @media (max-height: 700px) {
      .modal-card { min-height: auto; }
      .inline { min-height: auto; }
    }
  `,G._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),G._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),G);q([C.property({attribute:!1})],I.prototype,"config");q([C.state()],I.prototype,"_isOpen");q([C.state()],I.prototype,"_activeConnector");q([C.state()],I.prototype,"_showUrlDialog");q([C.state()],I.prototype,"_showCameraDialog");q([C.state()],I.prototype,"_showScreenCastDialog");q([C.state()],I.prototype,"_previewFileId");q([C.state()],I.prototype,"_previewDims");q([C.state()],I.prototype,"_splitPct");q([C.state()],I.prototype,"_fullscreenPreviewUrl");q([C.state()],I.prototype,"_fullscreenVideoFile");q([C.state()],I.prototype,"_fullscreenZoomed");q([C.state()],I.prototype,"_bodyDragOver");q([C.state()],I.prototype,"_isMinimized");q([C.state()],I.prototype,"_isPillExpanded");q([C.state()],I.prototype,"_metadataSchema");q([C.state()],I.prototype,"_bulkMetadataOpen");let vn=I;exports.AuthExpiredError=Je;exports.CORE_SOURCES=ve;exports.PublicEvents=A;exports.SfxActionsBar=K;exports.SfxCameraDialog=de;exports.SfxDropZone=X;exports.SfxFileItem=Te;exports.SfxFileList=te;exports.SfxImportDivider=mt;exports.SfxScreenCastDialog=oe;exports.SfxSourcePills=We;exports.SfxSuccessCard=re;exports.SfxUploader=vn;exports.SfxUrlDialog=ye;exports.Store=fr;exports.UploadEngine=jr;exports.buildAuthHeaders=Ke;exports.createStore=hr;exports.exchangeSassKey=Lr;exports.formatFileSize=se;exports.getApiBase=Qe;exports.getAuthUrl=Vr;exports.getProviderSources=Ar;exports.listFiles=Gr;exports.listNextPage=Xr;exports.logout=Zr;exports.resolveAuth=Fr;exports.searchProvider=Kr;
