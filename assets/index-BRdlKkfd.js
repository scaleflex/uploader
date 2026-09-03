const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-tP-HBva9.js","assets/api-C3Pu2Ua4.js","assets/theming-DHk87o6W.js","assets/types-HFUEcb6v.js","assets/basic-Czixi-CV.js","assets/code-block-C_3oxnLY.js","assets/auto-upload-cw2eQwb8.js","assets/restrictions-BNQug3LD.js","assets/custom-select-mLCaw8r4.js","assets/target-folder-qBCYbwxT.js","assets/concurrency-g-HUQx-k.js","assets/events-BARSbsoM.js","assets/modal-D_mudUP4.js","assets/inline-B8ozEkZS.js","assets/sources-layout-XUoT0Vqu.js","assets/core-sources-DjQtaW7a.js","assets/custom-source-CutGEdUr.js","assets/header-button-DmXRO8e5.js","assets/minimize-to-background-Bsth6jjr.js","assets/resumable-upload-C_SoOicP.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-oN-SrTre.js","assets/similar-check-a15h9MC8.js","assets/upload-settings-BiyUSt1y.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const bd="modulepreload",xd=function(r){return"/uploader/"+r},dn={},J=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let n=function(d){return Promise.all(d.map(c=>Promise.resolve(c).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=n(t.map(d=>{if(d=xd(d),d in dn)return;dn[d]=!0;const c=d.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":bd,c||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((f,x)=>{h.addEventListener("load",f),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return s.then(n=>{for(const a of n||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=globalThis,Wr=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jr=Symbol(),cn=new WeakMap;let Ya=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Jr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=cn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&cn.set(t,e))}return e}toString(){return this.cssText}};const yd=r=>new Ya(typeof r=="string"?r:r+"",void 0,Jr),q=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Ya(t,r,Jr)},_d=(r,e)=>{if(Wr)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=us.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},un=Wr?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return yd(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wd,defineProperty:kd,getOwnPropertyDescriptor:$d,getOwnPropertyNames:Sd,getOwnPropertySymbols:Cd,getPrototypeOf:Ed}=Object,ct=globalThis,pn=ct.trustedTypes,Pd=pn?pn.emptyScript:"",Js=ct.reactiveElementPolyfillSupport,ki=(r,e)=>r,bs={toAttribute(r,e){switch(e){case Boolean:r=r?Pd:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Xr=(r,e)=>!wd(r,e),hn={attribute:!0,type:String,converter:bs,reflect:!1,useDefault:!1,hasChanged:Xr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ct.litPropertyMetadata??(ct.litPropertyMetadata=new WeakMap);let Gt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=hn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&kd(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=$d(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hn}static _$Ei(){if(this.hasOwnProperty(ki("elementProperties")))return;const e=Ed(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ki("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ki("properties"))){const t=this.properties,i=[...Sd(t),...Cd(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(un(s))}else e!==void 0&&t.push(un(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _d(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:bs).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o,n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:bs;this._$Em=s;const d=l.fromAttribute(t,a.type);this[s]=d??((n=this._$Ej)==null?void 0:n.get(s))??d,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){var n;if(e!==void 0){const a=this.constructor;if(s===!1&&(o=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Xr)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Gt.elementStyles=[],Gt.shadowRootOptions={mode:"open"},Gt[ki("elementProperties")]=new Map,Gt[ki("finalized")]=new Map,Js==null||Js({ReactiveElement:Gt}),(ct.reactiveElementVersions??(ct.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=globalThis,fn=r=>r,xs=$i.trustedTypes,gn=xs?xs.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ga="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wa="?"+lt,Td=`<${Wa}>`,Rt=document,Ei=()=>Rt.createComment(""),Pi=r=>r===null||typeof r!="object"&&typeof r!="function",Zr=Array.isArray,Ad=r=>Zr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Xs=`[ 	
\f\r]`,fi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mn=/-->/g,vn=/>/g,yt=RegExp(`>|${Xs}(?:([^\\s"'>=/]+)(${Xs}*=${Xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bn=/'/g,xn=/"/g,Ja=/^(?:script|style|textarea|title)$/i,Xa=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=Xa(1),Q=Xa(2),Le=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),yn=new WeakMap,Ct=Rt.createTreeWalker(Rt,129);function Za(r,e){if(!Zr(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return gn!==void 0?gn.createHTML(e):e}const Rd=(r,e)=>{const t=r.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",n=fi;for(let a=0;a<t;a++){const l=r[a];let d,c,p=-1,h=0;for(;h<l.length&&(n.lastIndex=h,c=n.exec(l),c!==null);)h=n.lastIndex,n===fi?c[1]==="!--"?n=mn:c[1]!==void 0?n=vn:c[2]!==void 0?(Ja.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=yt):c[3]!==void 0&&(n=yt):n===yt?c[0]===">"?(n=s??fi,p=-1):c[1]===void 0?p=-2:(p=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?yt:c[3]==='"'?xn:bn):n===xn||n===bn?n=yt:n===mn||n===vn?n=fi:(n=yt,s=void 0);const f=n===yt&&r[a+1].startsWith("/>")?" ":"";o+=n===fi?l+Td:p>=0?(i.push(d),l.slice(0,p)+Ga+l.slice(p)+lt+f):l+lt+(p===-2?a:f)}return[Za(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ti{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,c]=Rd(e,t);if(this.el=Ti.createElement(d,i),Ct.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Ct.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Ga)){const h=c[n++],f=s.getAttribute(p).split(lt),x=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:x[2],strings:f,ctor:x[1]==="."?Id:x[1]==="?"?Fd:x[1]==="@"?Ld:Is}),s.removeAttribute(p)}else p.startsWith(lt)&&(l.push({type:6,index:o}),s.removeAttribute(p));if(Ja.test(s.tagName)){const p=s.textContent.split(lt),h=p.length-1;if(h>0){s.textContent=xs?xs.emptyScript:"";for(let f=0;f<h;f++)s.append(p[f],Ei()),Ct.nextNode(),l.push({type:2,index:++o});s.append(p[h],Ei())}}}else if(s.nodeType===8)if(s.data===Wa)l.push({type:2,index:o});else{let p=-1;for(;(p=s.data.indexOf(lt,p+1))!==-1;)l.push({type:7,index:o}),p+=lt.length-1}o++}}static createElement(e,t){const i=Rt.createElement("template");return i.innerHTML=e,i}}function ii(r,e,t=r,i){var n,a;if(e===Le)return e;let s=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=Pi(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=ii(r,s._$AS(r,e.values),s,i)),e}class Od{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Rt).importNode(t,!0);Ct.currentNode=s;let o=Ct.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new ni(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new Ud(o,this,e)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=Ct.nextNode(),n++)}return Ct.currentNode=Rt,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ni{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ii(this,e,t),Pi(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ad(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Pi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rt.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ti.createElement(Za(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Od(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=yn.get(e.strings);return t===void 0&&yn.set(e.strings,t=new Ti(e)),t}k(e){Zr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new ni(this.O(Ei()),this.O(Ei()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=fn(e).nextSibling;fn(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Is{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(o===void 0)e=ii(this,e,t,0),n=!Pi(e)||e!==this._$AH&&e!==Le,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=ii(this,a[i+l],t,l),d===Le&&(d=this._$AH[l]),n||(n=!Pi(d)||d!==this._$AH[l]),d===v?e=v:e!==v&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Id extends Is{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Fd extends Is{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Ld extends Is{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=ii(this,e,t,0)??v)===Le)return;const i=this._$AH,s=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==v&&(i===v||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ud{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ii(this,e)}}const Dd={I:ni},Zs=$i.litHtmlPolyfillSupport;Zs==null||Zs(Ti,ni),($i.litHtmlVersions??($i.litHtmlVersions=[])).push("3.3.3");const Ze=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new ni(e.insertBefore(Ei(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis;let G=class extends Gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Le}};var Va;G._$litElement$=!0,G.finalized=!0,(Va=Pt.litElementHydrateSupport)==null||Va.call(Pt,{LitElement:G});const Qs=Pt.litElementPolyfillSupport;Qs==null||Qs({LitElement:G});(Pt.litElementVersions??(Pt.litElementVersions=[])).push("4.2.2");const er=(r,e)=>r.replace(/\{\{(\w+)\}\}/g,(t,i)=>String(e[i]??"")),Ue=(r,e,t)=>{if(typeof e=="string")return er(e,t??{});if(typeof e=="object"&&e!==null){const i=e,s=i.count;if(s!==void 0){const o=String((s===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??r);return er(o,i)}return er(String(i.defaultValue??r),i)}return r},j=r=>typeof r=="string",gi=()=>{let r,e;const t=new Promise((i,s)=>{r=i,e=s});return t.resolve=r,t.reject=e,t},_n=r=>r==null?"":""+r,zd=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Md=/###/g,wn=r=>r&&r.indexOf("###")>-1?r.replace(Md,"."):r,kn=r=>!r||j(r),Si=(r,e,t)=>{const i=j(e)?e.split("."):e;let s=0;for(;s<i.length-1;){if(kn(r))return{};const o=wn(i[s]);!r[o]&&t&&(r[o]=new t),Object.prototype.hasOwnProperty.call(r,o)?r=r[o]:r={},++s}return kn(r)?{}:{obj:r,k:wn(i[s])}},$n=(r,e,t)=>{const{obj:i,k:s}=Si(r,e,Object);if(i!==void 0||e.length===1){i[s]=t;return}let o=e[e.length-1],n=e.slice(0,e.length-1),a=Si(r,n,Object);for(;a.obj===void 0&&n.length;)o=`${n[n.length-1]}.${o}`,n=n.slice(0,n.length-1),a=Si(r,n,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=t},Bd=(r,e,t,i)=>{const{obj:s,k:o}=Si(r,e,Object);s[o]=s[o]||[],s[o].push(t)},ys=(r,e)=>{const{obj:t,k:i}=Si(r,e);if(t)return t[i]},jd=(r,e,t)=>{const i=ys(r,t);return i!==void 0?i:ys(e,t)},Qa=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?j(r[i])||r[i]instanceof String||j(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):Qa(r[i],e[i],t):r[i]=e[i]);return r},Bt=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Nd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const qd=r=>j(r)?r.replace(/[&<>"'\/]/g,e=>Nd[e]):r;class Hd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Vd=[" ",",","?","!",";"],Kd=new Hd(20),Yd=(r,e,t)=>{e=e||"",t=t||"";const i=Vd.filter(n=>e.indexOf(n)<0&&t.indexOf(n)<0);if(i.length===0)return!0;const s=Kd.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let o=!s.test(r);if(!o){const n=r.indexOf(t);n>0&&!s.test(r.substring(0,n))&&(o=!0)}return o},mr=function(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!r)return;if(r[e])return r[e];const i=e.split(t);let s=r;for(let o=0;o<i.length;){if(!s||typeof s!="object")return;let n,a="";for(let l=o;l<i.length;++l)if(l!==o&&(a+=t),a+=i[l],n=s[a],n!==void 0){if(["string","number","boolean"].indexOf(typeof n)>-1&&l<i.length-1)continue;o+=l-o+1;break}s=n}return s},_s=r=>r&&r.replace("_","-"),Gd={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){console&&console[r]&&console[r].apply(console,e)}};class ws{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Gd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,s){return s&&!this.debug?null:(j(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ws(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ws(this.logger,e)}}var Ge=new ws;class Fs{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const s=this.observers[i].get(t)||0;this.observers[i].set(t,s+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(n=>{let[a,l]=n;for(let d=0;d<l;d++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(n=>{let[a,l]=n;for(let d=0;d<l;d++)a.apply(a,[e,...i])})}}class Sn extends Fs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,n=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):j(i)&&o?a.push(...i.split(o)):a.push(i)));const l=ys(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!j(i)?l:mr(this.data&&this.data[e]&&this.data[e][t],i,o)}addResource(e,t,i,s){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.indexOf(".")>-1&&(a=e.split("."),s=t,t=a[1]),this.addNamespaces(t),$n(this.data,a,s),o.silent||this.emit("added",e,t,i,s)}addResources(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in i)(j(i[o])||Array.isArray(i[o]))&&this.addResource(e,t,o,i[o],{silent:!0});s.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,s,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),s=i,i=t,t=a[1]),this.addNamespaces(t);let l=ys(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Qa(l,i,o):l={...l,...i},$n(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(s=>t[s]&&Object.keys(t[s]).length>0)}toJSON(){return this.data}}var el={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,s){return r.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,t,i,s))}),e}};const Cn={};class ks extends Fs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),zd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ge.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return i&&i.res!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const s=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const n=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Yd(e,i,s);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:j(o)?[o]:o};const d=e.split(i);(i!==s||i===s&&this.options.ns.indexOf(d[0])>-1)&&(o=d.shift()),e=d.join(s)}return{key:e,namespaces:j(o)?[o]:o}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const s=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:n,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],d=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(c){const y=t.nsSeparator||this.options.nsSeparator;return s?{res:`${l}${y}${n}`,usedKey:n,exactUsedKey:n,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${y}${n}`}return s?{res:n,usedKey:n,exactUsedKey:n,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:n}const p=this.resolve(e,t);let h=p&&p.res;const f=p&&p.usedKey||n,x=p&&p.exactUsedKey||n,m=Object.prototype.toString.apply(h),C=["[object Number]","[object Function]","[object RegExp]"],E=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,S=!j(h)&&typeof h!="boolean"&&typeof h!="number";if(k&&h&&S&&C.indexOf(m)<0&&!(j(E)&&Array.isArray(h))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...t,ns:a}):`key '${n} (${this.language})' returned an object instead of string.`;return s?(p.res=y,p.usedParams=this.getUsedParamsDetails(t),p):y}if(o){const y=Array.isArray(h),w=y?[]:{},O=y?x:f;for(const A in h)if(Object.prototype.hasOwnProperty.call(h,A)){const U=`${O}${o}${A}`;w[A]=this.translate(U,{...t,joinArrays:!1,ns:a}),w[A]===U&&(w[A]=h[A])}h=w}}else if(k&&j(E)&&Array.isArray(h))h=h.join(E),h&&(h=this.extendTranslation(h,e,t,i));else{let y=!1,w=!1;const O=t.count!==void 0&&!j(t.count),A=ks.hasDefaultValue(t),U=O?this.pluralResolver.getSuffix(d,t.count,t):"",D=t.ordinal&&O?this.pluralResolver.getSuffix(d,t.count,{ordinal:!1}):"",H=O&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),Y=H&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${U}`]||t[`defaultValue${D}`]||t.defaultValue;!this.isValidLookup(h)&&A&&(y=!0,h=Y),this.isValidLookup(h)||(w=!0,h=n);const z=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,le=A&&Y!==h&&this.options.updateMissing;if(w||y||le){if(this.logger.log(le?"updateKey":"missingKey",d,l,n,le?Y:h),o){const _=this.resolve(n,{...t,keySeparator:!1});_&&_.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let K=[];const $=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&$&&$[0])for(let _=0;_<$.length;_++)K.push($[_]);else this.options.saveMissingTo==="all"?K=this.languageUtils.toResolveHierarchy(t.lng||this.language):K.push(t.lng||this.language);const b=(_,R,F)=>{const I=A&&F!==h?F:z;this.options.missingKeyHandler?this.options.missingKeyHandler(_,l,R,I,le,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(_,l,R,I,le,t),this.emit("missingKey",_,l,R,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?K.forEach(_=>{const R=this.pluralResolver.getSuffixes(_,t);H&&t[`defaultValue${this.options.pluralSeparator}zero`]&&R.indexOf(`${this.options.pluralSeparator}zero`)<0&&R.push(`${this.options.pluralSeparator}zero`),R.forEach(F=>{b([_],n+F,t[`defaultValue${F}`]||Y)})}):b(K,n,Y))}h=this.extendTranslation(h,e,t,p,i),w&&h===n&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${n}`),(w||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${n}`:n,y?h:void 0):h=this.options.parseMissingKeyHandler(h))}return s?(p.res=h,p.usedParams=this.getUsedParamsDetails(t),p):h}extendTranslation(e,t,i,s,o){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=j(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(d){const h=e.match(this.interpolator.nestingRegexp);c=h&&h.length}let p=i.replace&&!j(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(p={...this.options.interpolation.defaultVariables,...p}),e=this.interpolator.interpolate(e,p,i.lng||this.language||s.usedLng,i),d){const h=e.match(this.interpolator.nestingRegexp),f=h&&h.length;c<f&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&s&&s.res&&(i.lng=this.language||s.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,f=new Array(h),x=0;x<h;x++)f[x]=arguments[x];return o&&o[0]===f[0]&&!i.context?(n.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`),null):n.translate(...f,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=j(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=el.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,s,o,n,a;return j(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,t),c=d.key;s=c;let p=d.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const h=t.count!==void 0&&!j(t.count),f=h&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),x=t.context!==void 0&&(j(t.context)||typeof t.context=="number")&&t.context!=="",m=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(C=>{this.isValidLookup(i)||(a=C,!Cn[`${m[0]}-${C}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Cn[`${m[0]}-${C}`]=!0,this.logger.warn(`key "${s}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(E=>{if(this.isValidLookup(i))return;n=E;const k=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,c,E,C,t);else{let y;h&&(y=this.pluralResolver.getSuffix(E,t.count,t));const w=`${this.options.pluralSeparator}zero`,O=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(k.push(c+y),t.ordinal&&y.indexOf(O)===0&&k.push(c+y.replace(O,this.options.pluralSeparator)),f&&k.push(c+w)),x){const A=`${c}${this.options.contextSeparator}${t.context}`;k.push(A),h&&(k.push(A+y),t.ordinal&&y.indexOf(O)===0&&k.push(A+y.replace(O,this.options.pluralSeparator)),f&&k.push(A+w))}}let S;for(;S=k.pop();)this.isValidLookup(i)||(o=S,i=this.getResource(E,C,S,t))}))})}),{res:i,usedKey:s,exactUsedKey:o,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,s):this.resourceStore.getResource(e,t,i,s)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!j(e.replace);let s=i?e.replace:e;if(i&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const o of t)delete s[o]}return s}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}const tr=r=>r.charAt(0).toUpperCase()+r.slice(1);class En{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ge.create("languageUtils")}getScriptPartFromCode(e){if(e=_s(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=_s(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(j(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let s=Intl.getCanonicalLocales(e)[0];if(s&&this.options.lowerCaseLng&&(s=s.toLowerCase()),s)return s}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(s=>s.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=tr(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=tr(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=tr(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const s=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(s))&&(t=s)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(o=>{if(o===s)return o;if(!(o.indexOf("-")<0&&s.indexOf("-")<0)&&(o.indexOf("-")>0&&s.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===s||o.indexOf(s)===0&&s.length>1))return o})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),j(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),s=[],o=n=>{n&&(this.isSupportedCode(n)?s.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return j(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):j(e)&&o(this.formatLanguageCode(e)),i.forEach(n=>{s.indexOf(n)<0&&o(this.formatLanguageCode(n))}),s}}let Wd=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Jd={1:r=>+(r>1),2:r=>+(r!=1),3:r=>0,4:r=>r%10==1&&r%100!=11?0:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?1:2,5:r=>r==0?0:r==1?1:r==2?2:r%100>=3&&r%100<=10?3:r%100>=11?4:5,6:r=>r==1?0:r>=2&&r<=4?1:2,7:r=>r==1?0:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?1:2,8:r=>r==1?0:r==2?1:r!=8&&r!=11?2:3,9:r=>+(r>=2),10:r=>r==1?0:r==2?1:r<7?2:r<11?3:4,11:r=>r==1||r==11?0:r==2||r==12?1:r>2&&r<20?2:3,12:r=>+(r%10!=1||r%100==11),13:r=>+(r!==0),14:r=>r==1?0:r==2?1:r==3?2:3,15:r=>r%10==1&&r%100!=11?0:r%10>=2&&(r%100<10||r%100>=20)?1:2,16:r=>r%10==1&&r%100!=11?0:r!==0?1:2,17:r=>r==1||r%10==1&&r%100!=11?0:1,18:r=>r==0?0:r==1?1:2,19:r=>r==1?0:r==0||r%100>1&&r%100<11?1:r%100>10&&r%100<20?2:3,20:r=>r==1?0:r==0||r%100>0&&r%100<20?1:2,21:r=>r%100==1?1:r%100==2?2:r%100==3||r%100==4?3:0,22:r=>r==1?0:r==2?1:(r<0||r>10)&&r%10==0?2:3};const Xd=["v1","v2","v3"],Zd=["v4"],Pn={zero:0,one:1,two:2,few:3,many:4,other:5},Qd=()=>{const r={};return Wd.forEach(e=>{e.lngs.forEach(t=>{r[t]={numbers:e.nr,plurals:Jd[e.fc]}})}),r};class ec{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Ge.create("pluralResolver"),(!this.options.compatibilityJSON||Zd.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Qd(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=_s(e==="dev"?"en":e),s=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:s});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let n;try{n=new Intl.PluralRules(i,{type:s})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[o]=n,n}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(s=>`${t}${s}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((s,o)=>Pn[s]-Pn[o]).map(s=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${s}`):i.numbers.map(s=>this.getSuffix(e,s,t)):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=this.getRule(e,i);return s?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(t)}`:this.getSuffixRetroCompatible(s,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let s=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));const o=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?`_plural_${s.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Xd.includes(this.options.compatibilityJSON)}}const Tn=function(r,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=jd(r,e,t);return!o&&s&&j(t)&&(o=mr(r,t,i),o===void 0&&(o=mr(e,t,i))),o},ir=r=>r.replace(/\$/g,"$$$$");class tc{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ge.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:s,prefix:o,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:d,unescapeSuffix:c,unescapePrefix:p,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:x,nestingSuffixEscaped:m,nestingOptionsSeparator:C,maxReplaces:E,alwaysFormat:k}=e.interpolation;this.escape=t!==void 0?t:qd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=o?Bt(o):n||"{{",this.suffix=a?Bt(a):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=c?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=h?Bt(h):f||Bt("$t("),this.nestingSuffix=x?Bt(x):m||Bt(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=E||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t&&t.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,s){let o,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=f=>{if(f.indexOf(this.formatSeparator)<0){const E=Tn(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,i,{...s,...t,interpolationkey:f}):E}const x=f.split(this.formatSeparator),m=x.shift().trim(),C=x.join(this.formatSeparator).trim();return this.format(Tn(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),C,i,{...s,...t,interpolationkey:m})};this.resetRegExp();const c=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,p=s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>ir(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?ir(this.escape(f)):ir(f)}].forEach(f=>{for(a=0;o=f.regex.exec(e);){const x=o[1].trim();if(n=d(x),n===void 0)if(typeof c=="function"){const C=c(e,o,s);n=j(C)?C:""}else if(s&&Object.prototype.hasOwnProperty.call(s,x))n="";else if(p){n=o[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),n="";else!j(n)&&!this.useRawValueToEscape&&(n=_n(n));const m=f.safeValue(n);if(e=e.replace(o[0],m),p?(f.regex.lastIndex+=n.length,f.regex.lastIndex-=o[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,o,n;const a=(l,d)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const p=l.split(new RegExp(`${c}[ ]*{`));let h=`{${p[1]}`;l=p[0],h=this.interpolate(h,n);const f=h.match(/'/g),x=h.match(/"/g);(f&&f.length%2===0&&!x||x.length%2!==0)&&(h=h.replace(/'/g,'"'));try{n=JSON.parse(h),d&&(n={...d,...n})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${c}${h}`}return n.defaultValue&&n.defaultValue.indexOf(this.prefix)>-1&&delete n.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!j(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;let d=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){const c=s[1].split(this.formatSeparator).map(p=>p.trim());s[1]=c.shift(),l=c,d=!0}if(o=t(a.call(this,s[1].trim(),n),n),o&&s[0]===e&&!j(o))return o;j(o)||(o=_n(o)),o||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),o=""),d&&(o=l.reduce((c,p)=>this.format(c,p,i.lng,{...i,interpolationkey:s[1].trim()}),o.trim())),e=e.replace(s[0],o),this.regexp.lastIndex=0}return e}}const ic=r=>{let e=r.toLowerCase().trim();const t={};if(r.indexOf("(")>-1){const i=r.split("(");e=i[0].toLowerCase().trim();const s=i[1].substring(0,i[1].length-1);e==="currency"&&s.indexOf(":")<0?t.currency||(t.currency=s.trim()):e==="relativetime"&&s.indexOf(":")<0?t.range||(t.range=s.trim()):s.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();t[c]||(t[c]=d),d==="false"&&(t[c]=!1),d==="true"&&(t[c]=!0),isNaN(d)||(t[c]=parseInt(d,10))}})}return{formatName:e,formatOptions:t}},jt=r=>{const e={};return(t,i,s)=>{let o=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(o={...o,[s.interpolationkey]:void 0});const n=i+JSON.stringify(o);let a=e[n];return a||(a=r(_s(i),s),e[n]=a),a(t)}};class sc{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ge.create("formatter"),this.options=e,this.formats={number:jt((t,i)=>{const s=new Intl.NumberFormat(t,{...i});return o=>s.format(o)}),currency:jt((t,i)=>{const s=new Intl.NumberFormat(t,{...i,style:"currency"});return o=>s.format(o)}),datetime:jt((t,i)=>{const s=new Intl.DateTimeFormat(t,{...i});return o=>s.format(o)}),relativetime:jt((t,i)=>{const s=new Intl.RelativeTimeFormat(t,{...i});return o=>s.format(o,i.range||"day")}),list:jt((t,i)=>{const s=new Intl.ListFormat(t,{...i});return o=>s.format(o)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=jt(t)}format(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:d,formatOptions:c}=ic(l);if(this.formats[d]){let p=a;try{const h=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},f=h.locale||h.lng||s.locale||s.lng||i;p=this.formats[d](a,f,{...c,...s,...h})}catch(h){this.logger.warn(h)}return p}else this.logger.warn(`there was no format function for ${d}`);return a},e)}}const rc=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class oc extends Fs{constructor(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Ge.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,s.backend,s)}queueLoad(e,t,i,s){const o={},n={},a={},l={};return e.forEach(d=>{let c=!0;t.forEach(p=>{const h=`${d}|${p}`;!i.reload&&this.store.hasResourceBundle(d,p)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?n[h]===void 0&&(n[h]=!0):(this.state[h]=1,c=!1,n[h]===void 0&&(n[h]=!0),o[h]===void 0&&(o[h]=!0),l[p]===void 0&&(l[p]=!0)))}),c||(a[d]=!0)}),(Object.keys(o).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(o),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const s=e.split("|"),o=s[0],n=s[1];t&&this.emit("failedLoading",o,n,t),!t&&i&&this.store.addResourceBundle(o,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Bd(l.loaded,[o],n),rc(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{a[d]||(a[d]={});const c=l.loaded[d];c.length&&c.forEach(p=>{a[d][p]===void 0&&(a[d][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,n=arguments.length>5?arguments[5]:void 0;if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:s,wait:o,callback:n});return}this.readingCalls++;const a=(d,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(d&&c&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,s+1,o*2,n)},o);return}n(d,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,t);d&&typeof d.then=="function"?d.then(c=>a(null,c)).catch(a):a(null,d)}catch(d){a(d)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();j(e)&&(e=this.languageUtils.toResolveHierarchy(e)),j(t)&&(t=[t]);const o=this.queueLoad(e,t,i,s);if(!o.toLoad.length)return o.pending.length||s(),null;o.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),s=i[0],o=i[1];this.read(s,o,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${s} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${s}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,s,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...n,isUpdate:o},d=this.backend.create.bind(this.backend);if(d.length<6)try{let c;d.length===5?c=d(e,t,i,s,l):c=d(e,t,i,s),c&&typeof c.then=="function"?c.then(p=>a(null,p)).catch(a):a(null,c)}catch(c){a(c)}else d(e,t,i,s,a,l)}!e||!e[0]||this.store.addResource(e[0],t,i,s)}}}const An=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),j(r[1])&&(e.defaultValue=r[1]),j(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:r=>r,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Rn=r=>(j(r.ns)&&(r.ns=[r.ns]),j(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),j(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&r.supportedLngs.indexOf("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r),ts=()=>{},nc=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Ai extends Fs{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Rn(e),this.services={},this.logger=Ge,this.modules={external:[]},nc(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(j(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const s=An();this.options={...s,...this.options,...Rn(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const o=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?Ge.init(o(this.modules.logger),this.options):Ge.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=sc);const p=new En(this.options);this.store=new Sn(this.options.resources,this.options);const h=this.services;h.logger=Ge,h.resourceStore=this.store,h.languageUtils=p,h.pluralResolver=new ec(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===s.interpolation.format)&&(h.formatter=o(c),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new tc(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new oc(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var x=arguments.length,m=new Array(x>1?x-1:0),C=1;C<x;C++)m[C-1]=arguments[C];e.emit(f,...m)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new ks(this.services,this.options),this.translator.on("*",function(f){for(var x=arguments.length,m=new Array(x>1?x-1:0),C=1;C<x;C++)m[C-1]=arguments[C];e.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ts),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const l=gi(),d=()=>{const c=(p,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(p,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts;const s=j(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],n=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};s?n(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>n(l)),this.options.preload&&this.options.preload.forEach(a=>n(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,t,i){const s=gi();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ts),this.services.backendConnector.reload(e,t,o=>{s.resolve(),i(o)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&el.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const s=gi();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},n=(l,d)=>{d?(o(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,s.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const d=j(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);d&&(this.language||o(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,c=>{n(c,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),s}getFixedT(e,t,i){var s=this;const o=function(n,a){let l;if(typeof a!="object"){for(var d=arguments.length,c=new Array(d>2?d-2:0),p=2;p<d;p++)c[p-2]=arguments[p];l=s.options.overloadTranslationOptionHandler([n,a].concat(c))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||o.keyPrefix);const h=s.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(n)?f=n.map(x=>`${l.keyPrefix}${h}${x}`):f=l.keyPrefix?`${l.keyPrefix}${h}${n}`:n,s.t(f,l)};return j(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=i,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const d=this.services.backendConnector.state[`${a}|${l}`];return d===-1||d===0||d===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!s||n(o,e)))}loadNamespaces(e,t){const i=gi();return this.options.ns?(j(e)&&(e=[e]),e.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=gi();j(e)&&(e=[e]);const s=this.options.preload||[],o=e.filter(n=>s.indexOf(n)<0&&this.services.languageUtils.isSupportedCode(n));return o.length?(this.options.preload=s.concat(o),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new En(An());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Ai(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ts;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},o=new Ai(s);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i&&(o.store=new Sn(this.store.data,s),o.services.resourceStore=o.store),o.translator=new ks(o.services,s),o.translator.on("*",function(a){for(var l=arguments.length,d=new Array(l>1?l-1:0),c=1;c<l;c++)d[c-1]=arguments[c];o.emit(a,...d)}),o.init(s,t),o.translator.options=s,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const xe=Ai.createInstance();xe.createInstance=Ai.createInstance;xe.createInstance;xe.dir;xe.init;xe.loadResources;xe.reloadResources;xe.use;xe.changeLanguage;xe.getFixedT;xe.t;xe.exists;xe.setDefaultNamespace;xe.hasLoadedNamespace;xe.loadNamespaces;xe.loadLanguages;const tl=["__proto__","constructor","prototype"];function il(r){return!(typeof r!="string"||r.length===0||r.length>128||tl.indexOf(r)>-1||r.indexOf("..")>-1||r.indexOf("\\")>-1||/[?#%\s@]/.test(r)||/[\x00-\x1F\x7F]/.test(r))}function sl(r){return!(!il(r)||r.indexOf("/")>-1)}function ac(r){return il(r)}const lc={lng:sl,ns:ac};function is(r){return typeof r!="string"?r:r.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function dc(r){if(typeof r!="string"||r.length===0)return r;try{const e=new URL(r);return e.username||e.password?(e.username="",e.password="",e.toString()):r}catch{return r.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function rl(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function cc(r){return!!r&&typeof r.then=="function"}function uc(r){return cc(r)?r:Promise.resolve(r)}const pc=/\{\{(.+?)\}\}/g;function On(r,e){let t=!1;const i=r.replace(pc,(s,o)=>{const n=o.trim();if(tl.indexOf(n)>-1)return s;const a=e[n];if(a==null)return s;const l=lc[n]||sl,d=String(a).split("+");for(const c of d)if(!l(c))return t=!0,s;return d.join("+")});return t?null:i}const Tt=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let $s;typeof fetch=="function"?$s=fetch:Tt&&typeof Tt.fetch=="function"&&($s=Tt.fetch);const In=rl()&&Tt?Tt.XMLHttpRequest:void 0,hc=typeof ActiveXObject=="function"&&Tt?Tt.ActiveXObject:void 0,ol=["__proto__","constructor","prototype"],vr=(r,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))ol.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return r;r=r+(r.indexOf("?")!==-1?"&":"?")+t.slice(1)}return r},Fn=(r,e,t,i)=>{const s=o=>{if(!o.ok)return t(o.statusText||"Error",{status:o.status});o.text().then(n=>{t(null,{status:o.status,data:n})}).catch(t)};if(i){const o=i(r,e);if(o instanceof Promise){o.then(s).catch(t);return}}typeof fetch=="function"?fetch(r,e).then(s).catch(t):$s(r,e).then(s).catch(t)},fc=(r,e,t,i)=>{r.queryStringParams&&(e=vr(e,r.queryStringParams));const s={...typeof r.customHeaders=="function"?r.customHeaders():r.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(s["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(s["Content-Type"]="application/json");const o=typeof r.requestOptions=="function"?r.requestOptions(t):r.requestOptions,n={method:t?"POST":"GET",body:t?r.stringify(t):void 0,headers:s,...r._omitFetchOptions?{}:o},a=typeof r.alternateFetch=="function"&&r.alternateFetch.length>=1?r.alternateFetch:void 0;try{Fn(e,n,i,a)}catch(l){if(!o||Object.keys(o).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(o).forEach(d=>{delete n[d]}),Fn(e,n,i,a),r._omitFetchOptions=!0}catch(d){i(d)}}},gc=(r,e,t,i)=>{t&&typeof t=="object"&&(t=vr("",t).slice(1)),r.queryStringParams&&(e=vr(e,r.queryStringParams));try{const s=In?new In:new hc("MSXML2.XMLHTTP.3.0");s.open(t?"POST":"GET",e,1),r.crossDomain||s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.withCredentials=!!r.withCredentials,t&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.overrideMimeType&&s.overrideMimeType("application/json");let o=r.customHeaders;if(o=typeof o=="function"?o():o,o)for(const n of Object.keys(o))ol.indexOf(n)>-1||s.setRequestHeader(n,o[n]);s.onreadystatechange=()=>{s.readyState>3&&i(s.status>=400?s.statusText:null,{status:s.status,data:s.responseText})},s.send(t)}catch(s){console&&console.log(s)}},mc=(r,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),$s&&e.indexOf("file:")!==0)return fc(r,e,t,i);if(rl()||typeof ActiveXObject=="function")return gc(r,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},vc=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:r=>JSON.parse(r),stringify:JSON.stringify,parsePayload:(r,e,t)=>({[e]:t||""}),parseLoadPayload:(r,e)=>{},request:mc,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var nl=class{constructor(r,e={},t={}){this.services=r,this.options=e,this.allOptions=t,this.type="backend",this.init(r,e,t)}init(r,e={},t={}){if(this.services=r,this.options={...vc(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(r,e,t){this._readAny(r,r,e,e,t)}read(r,e,t){this._readAny([r],r,[e],e,t)}_readAny(r,e,t,i,s){let o=this.options.loadPath;typeof this.options.loadPath=="function"&&(o=this.options.loadPath(r,t)),o=uc(o),o.then(n=>{if(!n)return s(null,{});const a=On(n,{lng:r.join("+"),ns:t.join("+")});if(a==null){const l=r.map(is).join(", "),d=t.map(is).join(", ");return s(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+d+"]"),!1)}this.loadUrl(a,s,e,i)})}loadUrl(r,e,t,i){const s=typeof t=="string"?[t]:t,o=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(s,o),a=is(dc(r));this.options.request(this.options,r,n,(l,d)=>{if(d&&(d.status>=500&&d.status<600||!d.status))return e("failed loading "+a+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return e("failed loading "+a+"; status code: "+d.status,!1);if(!d&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(f=>h.indexOf(f)>-1))return e("failed loading "+a+": "+is(l.message),!0)}if(l)return e(l,!1);let c,p;try{typeof d.data=="string"?c=this.options.parse(d.data,t,i):c=d.data}catch{p="failed parsing "+a+" to json"}if(p)return e(p,!1);e(null,c)})}create(r,e,t,i,s){if(!this.options.addPath)return;typeof r=="string"&&(r=[r]);const o=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];r.forEach(d=>{let c=this.options.addPath;typeof this.options.addPath=="function"&&(c=this.options.addPath(d,e));const p=On(c,{lng:d,ns:e});if(p==null){n+=1,s&&n===r.length&&s(a,l);return}this.options.request(this.options,p,o,(h,f)=>{n+=1,a.push(h),l.push(f),n===r.length&&typeof s=="function"&&s(a,l)})})}reload(){const{backendConnector:r,languageUtils:e,logger:t}=this.services,i=r.language;if(i&&i.toLowerCase()==="cimode")return;const s=[],o=n=>{e.toResolveHierarchy(n).forEach(a=>{s.indexOf(a)<0&&s.push(a)})};o(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>o(n)),s.forEach(n=>{this.allOptions.ns.forEach(a=>{r.read(n,a,"read",null,null,(l,d)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&d&&t.log(`loaded namespace ${a} for language ${n}`,d),r.loaded(`${n}|${a}`,l,d)})})})}};nl.type="backend";const bc="https://i18n-fastly.ultrafast.io";function al(r){const e=r.cdnUrl??bc;let t=null;const i=new Set,s=()=>{for(const c of i)c()},o=c=>(i.add(c),()=>i.delete(c));async function n(c="en"){return t?(t.language!==c&&(await t.changeLanguage(c),s()),{i18n:t,isNew:!1}):(t=xe.createInstance(),await t.use(nl).init({lng:c,fallbackLng:"en",ns:[r.namespace],defaultNS:r.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${r.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(p,h){var m;const f=JSON.parse(p),x=Array.isArray(h)?h[0]:h;return x&&((m=f[x])!=null&&m.__without_namespace)?f[x].__without_namespace:f}}}),t.on("languageChanged",s),t.on("loaded",s),s(),{i18n:t,isNew:!0})}const a=()=>t,l=(c,p,h)=>!t||!t.isInitialized?Ue(c,p,h):typeof p=="string"?t.t(c,p,h??{}):t.t(c,p??{});class d{constructor(p){this._unsubscribe=null,this._host=p,p.addController(this)}hostConnected(){this._unsubscribe=o(()=>this._host.requestUpdate())}hostDisconnected(){var p;(p=this._unsubscribe)==null||p.call(this),this._unsubscribe=null}}return{initI18n:n,getInstance:a,onChange:o,t:l,fallbackT:Ue,I18nController:d}}function xc(r){const{lsKey:e,namespace:t,gridUuid:i,prodUrl:s,logPrefix:o}=r,n=typeof localStorage<"u"&&localStorage.getItem(e)==="true",a={};let l=null;const d=2e3;n&&console.log(`%c${o} TranslationMissingKeysHelper enabled`,"font-weight:600;");const c=()=>{console.group(`${o} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...a}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${s}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(a).map(([p,{value:h,ns:f}])=>({key:f&&p.startsWith(`${f}:`)?p.slice(f.length+1):p,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(p,h="",f=t){n&&(a[`${f}:${p}`]={value:h,ns:f},l&&clearTimeout(l),l=setTimeout(c,d))}}}const ll="f7b2366e-fcb6-4f1a-8f23-8de48422989a",yc="https://i18n-fastly.ultrafast.io",_c="https://neo.wordplex.io",dl="uploader",Qr=al({gridUuid:ll,namespace:dl,cdnUrl:yc}),wc=Qr.initI18n,$t=Qr.t,kc=Qr.I18nController,$c=xc({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:dl,gridUuid:ll,prodUrl:_c,logPrefix:"[uploader]"});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sc={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:Xr},Cc=(r=Sc,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(e,t)=>typeof t=="object"?Cc(r,e,t):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(r){return g({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ec=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ls(r,e){return(t,i,s)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(r))??null};return Ec(t,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai={ATTRIBUTE:1,CHILD:2,ELEMENT:6},li=r=>(...e)=>({_$litDirective$:r,values:e});let Ni=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Pc}=Dd,Ln=r=>r,Tc=r=>r.strings===void 0,Un=()=>document.createComment(""),mi=(r,e,t)=>{var o;const i=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(Un(),s),a=i.insertBefore(Un(),s);t=new Pc(n,a,r,r.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let d;(o=t._$AQ)==null||o.call(t,r),t._$AM=r,t._$AP!==void 0&&(d=r._$AU)!==a._$AU&&t._$AP(d)}if(n!==s||l){let d=t._$AA;for(;d!==n;){const c=Ln(d).nextSibling;Ln(i).insertBefore(d,s),d=c}}}return t},_t=(r,e,t=r)=>(r._$AI(e,t),r),Ac={},Rc=(r,e=Ac)=>r._$AH=e,Oc=r=>r._$AH,sr=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=(r,e,t)=>{const i=new Map;for(let s=e;s<=t;s++)i.set(r[s],s);return i},Zt=li(class extends Ni{constructor(r){if(super(r),r.type!==ai.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const s=[],o=[];let n=0;for(const a of r)s[n]=i?i(a,n):n,o[n]=t(a,n),n++;return{values:o,keys:s}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){const s=Oc(r),{values:o,keys:n}=this.dt(e,t,i);if(!Array.isArray(s))return this.ut=n,o;const a=this.ut??(this.ut=[]),l=[];let d,c,p=0,h=s.length-1,f=0,x=o.length-1;for(;p<=h&&f<=x;)if(s[p]===null)p++;else if(s[h]===null)h--;else if(a[p]===n[f])l[f]=_t(s[p],o[f]),p++,f++;else if(a[h]===n[x])l[x]=_t(s[h],o[x]),h--,x--;else if(a[p]===n[x])l[x]=_t(s[p],o[x]),mi(r,l[x+1],s[p]),p++,x--;else if(a[h]===n[f])l[f]=_t(s[h],o[f]),mi(r,s[p],s[h]),h--,f++;else if(d===void 0&&(d=Dn(n,f,x),c=Dn(a,p,h)),d.has(a[p]))if(d.has(a[h])){const m=c.get(n[f]),C=m!==void 0?s[m]:null;if(C===null){const E=mi(r,s[p]);_t(E,o[f]),l[f]=E}else l[f]=_t(C,o[f]),mi(r,s[p],C),s[m]=null;f++}else sr(s[h]),h--;else sr(s[p]),p++;for(;f<=x;){const m=mi(r,l[x+1]);_t(m,o[f]),l[f++]=m}for(;p<=h;){const m=s[p++];m!==null&&sr(m)}return this.ut=n,Rc(r,l),Le}}),Re=q`
  @media (hover: none) and (pointer: coarse) {
    input,
    textarea,
    select {
      font-size: 16px !important;
    }
  }
`,rr=r=>r.includes("-")?r:r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Ic extends Ni{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==ai.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return Le}update(e,[t]){if(t===this._lastStyles)return Le;this._lastStyles=t;const{style:i}=e.element,s=t??{};for(const o of this._appliedProps)(!(o in s)||s[o]==null||s[o]==="")&&(i.removeProperty(rr(o)),this._appliedProps.delete(o));for(const[o,n]of Object.entries(s))n!=null&&n!==""?(i.setProperty(rr(o),n),this._appliedProps.add(o)):this._appliedProps.has(o)&&(i.removeProperty(rr(o)),this._appliedProps.delete(o));return Le}}const te=li(Ic);function ie(r,e){customElements.get(r)||customElements.define(r,e)}function Fc(r,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,r);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const s=(l=(a=r.response)==null?void 0:a.file)==null?void 0:l.uuid;return s?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(s))}`:null}const cl=Q`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,or=u`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${cl}
</svg>`,ul=Q`<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />`,br=Q`<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />`,pl="(hover: none) and (pointer: coarse)";let nr=new Map,zn;function eo(r){if(typeof window>"u"||typeof window.matchMedia!="function")return null;zn!==window.matchMedia&&(zn=window.matchMedia,nr=new Map);const e=nr.get(r);if(e!==void 0)return e;let t;try{t=window.matchMedia(r)}catch{t=null}return nr.set(r,t),t}function Ne(){var r;return((r=eo(pl))==null?void 0:r.matches)??!1}let ar;function hl(){return typeof document>"u"||Ne()?!1:(ar===void 0&&(ar="webkitdirectory"in document.createElement("input")),ar)}function Lc(){var r;return typeof navigator>"u"||Ne()?!1:typeof((r=navigator.mediaDevices)==null?void 0:r.getDisplayMedia)=="function"}function Uc(){var r;return Ne()?!0:typeof navigator>"u"?!1:typeof((r=navigator.mediaDevices)==null?void 0:r.getUserMedia)=="function"}function Dc(){var r;return((r=eo("(prefers-reduced-motion: reduce)"))==null?void 0:r.matches)??!1}function to(r){const e=eo(pl);if(!e)return()=>{};const t=()=>r();return typeof e.addEventListener=="function"?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):typeof e.addListener=="function"?(e.addListener(t),()=>e.removeListener(t)):()=>{}}const xr=new Set;let Fe=null;function zc(r){if(typeof document>"u"||!document.body||(xr.add(r),Fe))return;const e=document.body,t=document.documentElement,i=window.scrollY||t.scrollTop||0;Fe={scrollY:i,overflow:e.style.overflow,position:e.style.position,top:e.style.top,left:e.style.left,right:e.style.right,paddingRight:e.style.paddingRight,scrollBehavior:t.style.scrollBehavior};const s=t.clientWidth||0,o=s>0?Math.max(0,(window.innerWidth||0)-s):0;if(e.style.position="fixed",e.style.top=`-${i}px`,e.style.left="0",e.style.right="0",e.style.overflow="hidden",o>0){const n=parseFloat(getComputedStyle(e).paddingRight)||0;e.style.paddingRight=`${n+o}px`}}function Mn(r){if(xr.delete(r),xr.size>0||!Fe)return;if(typeof document>"u"||!document.body){Fe=null;return}const e=document.body,t=document.documentElement,{scrollY:i}=Fe;if(e.style.overflow=Fe.overflow,e.style.position=Fe.position,e.style.top=Fe.top,e.style.left=Fe.left,e.style.right=Fe.right,e.style.paddingRight=Fe.paddingRight,i>0){t.style.scrollBehavior="auto";try{window.scrollTo(0,i)}catch{}t.style.scrollBehavior=Fe.scrollBehavior}Fe=null}class Mc{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function ue(r,e,t){const i=r.getState().files,s=i.get(e);if(!s)return;const o=new Map(i);o.set(e,{...s,...t}),r.setState({files:o})}function Nt(r,e){const t=new Map(r.getState().files);t.set(e.id,e),r.setState({files:t})}function Bn(r,e){const t=r.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),r.setState({files:i})}function Bc(){return new Mc({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},namingConvention:{regex:null,broken:!1},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:Ue})}class jc{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Nc="https://api.filerobot.com",qc=3e4,Hc=2,Vc=400;function Kc(r){return r===404||r===408||r===429||r>=500}const Yc=r=>new Promise(e=>setTimeout(e,r));function fl(r,e){return`${(e||Nc).replace(/\/+$/,"")}/${r}`}async function Gc(r,e,t,i={}){const s=`${fl(r,t)}/key/${encodeURIComponent(e)}`,o=i.retries??Hc,n=i.retryDelayMs??Vc;let a=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await Yc(n*l);const d=new AbortController,c=setTimeout(()=>d.abort(),qc);try{const p=await fetch(s,{signal:d.signal,cache:"no-store"});if(clearTimeout(c),!p.ok){if(a=new Error(`SASS key exchange failed (HTTP ${p.status})`),Kc(p.status)&&l<o)continue;throw a}const h=await p.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(p){if(clearTimeout(c),p instanceof DOMException&&p.name==="AbortError")throw new Error("SASS key exchange timed out");if(p instanceof TypeError&&l<o){a=p;continue}throw p}}throw a}function jn(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}function Wc(r){return r.mode==="securityTemplate"||r.mode==="sassKey"}function Jc(r){return Wc(r)?r.mode==="securityTemplate"?{mode:"security-template",container:r.projectToken,securityTemplateId:r.securityTemplateKey,airboxPuid:r.airboxPuid}:{mode:"sass-key",container:r.projectToken,sassKey:r.sassKey,airboxPuid:r.airboxPuid}:r}async function Nn(r,e){const t=Jc(r),i=fl(t.container,e);if(t.mode==="security-template"){const s=await Gc(t.container,t.securityTemplateId,e);return{apiBase:i,headers:jn(t,s),sassKey:s}}return{apiBase:i,headers:jn(t)}}const Xc=3e4;class io{constructor(e,t,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=t,this.apiDomain=i}static async create(e,t){const i=await Nn(e,t);return new io(i,e,t)}get(e,t){const i=new URL(`${this.baseUrl}${e}`);if(t)for(const[s,o]of Object.entries(t))o!=null&&i.searchParams.set(s,Array.isArray(o)?o.join(","):String(o));return this.send(i,{method:"GET"})}post(e,t){return this.sendJson("POST",e,t)}put(e,t){return this.sendJson("PUT",e,t)}delete(e,t){return this.sendJson("DELETE",e,t)}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,t,i){return this.send(new URL(`${this.baseUrl}${t}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,t,i=!1){var n;const s=new AbortController,o=setTimeout(()=>s.abort(),Xc);try{const a=await fetch(e.toString(),{...t,headers:{...this.headers,...t.headers},signal:s.signal});if(clearTimeout(o),a.status===401&&!i&&((n=this.auth)==null?void 0:n.mode)==="security-template"){const c=await Nn(this.auth,this.apiDomain);return this.headers=c.headers,this.send(e,t,!0)}if(!a.ok){let c=`API error: ${a.status} ${a.statusText}`;try{const p=await a.json();p!=null&&p.msg&&(c=`API error: ${a.status} - ${p.msg}`)}catch{}throw new Error(c)}if(a.status===204)return;const l=await a.text();if(!l)return;const d=JSON.parse(l);if((d==null?void 0:d.status)==="error")throw new Error(`API error: ${d.msg||"Unknown error"}`);return d}catch(a){throw clearTimeout(o),a instanceof DOMException&&a.name==="AbortError"?new Error("API request timed out"):a}}}const L="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Zc='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',Je=`data:image/svg+xml,${encodeURIComponent(Zc)}`,yr={_default:L+"GENERIC.svg?vh=9a518a",png:L+"PNG.svg?vh=96cd9a",jpg:L+"JPG.svg?vh=06e819",jpg2:L+"JPG2.svg?vh=f0eb7f",jpeg:L+"JPEG.svg?vh=6a65e9",gif:L+"GIF.svg?vh=c3c2c3",bmp:L+"BMP.svg?vh=d2243a",webp:L+"WEBP.svg?vh=fedd74",svg:L+"SVG.svg?vh=a15e46",tiff:L+"TIFF.svg?vh=1f30c3",tif:L+"TIF.svg?vh=b383c9",heic:L+"HEIC.svg?vh=84adfe",avif:L+"AVIF.svg?vh=536b30",ico:L+"ICO.svg?vh=79063d",psd:L+"PSD.svg?vh=be6140",psb:L+"PSB.svg?vh=678646",ai:L+"AI.svg?vh=84b254",dwg:L+"DWG.svg?vh=971fb3",mp4:L+"MP4.svg?vh=42f175",webm:L+"WEBM.svg?vh=26a84a",avi:L+"AVI.svg?vh=d22ba8",mpeg:L+"MPEG.svg?vh=ba93bb",ogv:L+"OGV.svg?vh=74d453","3gp":L+"3GP.svg?vh=f0d388","3g2":L+"3G2.svg?vh=04c652",swf:L+"SWF.svg?vh=3955e2",fla:L+"FLA.svg?vh=daf585",m3u8:L+"M3U8.svg?vh=7d5e62",mp3:L+"MP3.svg?vh=66bbef",wav:L+"WAV.svg?vh=d7a7d5",aac:L+"AAC.svg?vh=07f3f9",oga:L+"OGA.svg?vh=a5c622",opus:L+"OPUS.svg?vh=9548b1",weba:L+"WEBA.svg?vh=4dcf70",mid:L+"MID.svg?vh=3f0e29",midi:L+"MIDI.svg?vh=9fedec",cda:L+"CDA.svg?vh=85b83b",pdf:L+"PDF.svg?vh=18c5f7",doc:L+"DOC.svg?vh=d1b47c",docx:L+"DOCX.svg?vh=1eb6b0",txt:L+"TXT.svg?vh=307979",rtf:L+"RTF.svg?vh=978c5f",xls:L+"XLS.svg?vh=13b5f7",xlsx:L+"XLSX.svg?vh=79d64a",ppt:L+"PPT.svg?vh=4ee29b",pptx:L+"PPTX.svg?vh=8b1568",csv:L+"CSV.svg?vh=4add78",odt:L+"ODT.svg?vh=940781",ods:L+"ODS.svg?vh=9fbe9a",odp:L+"ODP.svg?vh=bf892d",dbf:L+"DBF.svg?vh=457bd4",vsd:L+"VSD.svg?vh=8a9ccb",abw:L+"ABW.svg?vh=313dc7",epub:L+"EPUB.svg?vh=15263d",azw:L+"AZW.svg?vh=a018b1",ics:L+"ICS.svg?vh=909f63",ogx:L+"OGX.svg?vh=f694d2",zip:L+"ZIP.svg?vh=84f98b",rar:L+"RAR.svg?vh=1d6423","7z":L+"7Z.svg?vh=e007e5",tar:L+"TAR.svg?vh=603aed",gz:L+"GZ.svg?vh=de13f7",bz:L+"BZ.svg?vh=0374ff",bz2:L+"BZ2.svg?vh=e14294",arc:L+"ARC.svg?vh=942fad",jar:L+"JAR.svg?vh=149796",mpkg:L+"MPKG.svg?vh=dea655",ttf:L+"TTF.svg?vh=d2e2c1",otf:L+"OTF.svg?vh=c904fd",woff:L+"WOFF.svg?vh=4b8177",woff2:L+"WOFF2.svg?vh=b532d3",eot:L+"EOT.svg?vh=a54980",js:L+"JS.svg?vh=524691",mjs:L+"MJS.svg?vh=d57921",ts:L+"TS.svg?vh=9af3ae",css:L+"CSS.svg?vh=287863",html:L+"HTML.svg?vh=fa7a87",htm:L+"HTM.svg?vh=21323d",xhtml:L+"XHTML.svg?vh=e6d6a9",xul:L+"XUL.svg?vh=6c9c71",json:L+"JSON.svg?vh=104c9e",jsonld:L+"JSONLD.svg?vh=f30c0f",xml:L+"XML.svg?vh=7f7194",php:L+"PHP.svg?vh=503e36",sh:L+"SH.svg?vh=3b820e",csh:L+"CSH.svg?vh=08c0cc",exe:L+"EXE.svg?vh=ccca53",iso:L+"ISO.svg?vh=064b8f",bin:L+"BIN.svg?vh=1e9618",glb:Je,gltf:Je,obj:Je,fbx:Je,stl:Je,usdz:Je,ply:Je,"3ds":Je,dae:Je};function so(){return yr._default}function ro(r){const e=(r.split(".").pop()||"").toLowerCase();return yr[e]||yr._default}function Qc(r){if(r==null||!Number.isFinite(r)||r<0)return"—";const e=["B","KB","MB","GB","TB"];let t=r,i=0;for(;t>=1024&&i<e.length-1;)t/=1024,i++;const s=(a,l)=>{const d=l>0&&Math.round(a*10)/10<10?1:0,c=a.toFixed(d);return{str:c,rounded:Number(c)}},o=s(t,i);let n=o.str;return o.rounded>=1024&&i<e.length-1&&(t/=1024,i++,n=s(t,i).str),`${n} ${e[i]}`}const eu="SAME_ASSET_EXISTS_SKIP_UPLOAD",tu="ERROR_SHA1_CONFLICT";function si(r){return(r==null?void 0:r.code)===eu||(r==null?void 0:r.code)===tu}function oo(r,e){return{...r,status:"success",file:r.file??{uuid:r.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Ss(r,e){var t,i,s,o,n;return((i=(t=r==null?void 0:r.info)==null?void 0:t.msg)==null?void 0:i.trim())||((s=r==null?void 0:r.msg)==null?void 0:s.trim())||((o=r==null?void 0:r.hint)==null?void 0:o.trim())||((n=r==null?void 0:r.message)==null?void 0:n.trim())||e}const iu=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function su(r){const e=new Set;if(!r)return e;const t=r.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),iu.has(t)&&e.add("archive"),e}function ru(r,e){if(r.formatMimetypes.length===0)return!0;const t=su(e);return r.formatMimetypes.some(i=>t.has(i))}function lr(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:!1}function qn(r){return typeof r=="boolean"?r:r==="true"?!0:r==="false"?!1:null}function ss(r){return r==null?[]:Array.isArray(r)?r.map(String):[String(r)]}function Hn(r,e){if(r.length!==e.length)return!1;const t=new Set(r);for(const i of e)if(!t.has(i))return!1;return!0}function Vn(r,e){if(r.length===0||e.length===0)return!1;const t=new Set(r);for(const i of e)if(t.has(i))return!0;return!1}function ou(r,e){const t=e[r.triggerCkey],i=r.triggerValues;switch(r.triggerCondition){case"is_true":return qn(t)===!0;case"is_false":return qn(t)===!1;case"is_empty":return lr(t);case"is_not_empty":return!lr(t);case"is_in":return Vn(ss(t),i);case"is_not_in":return lr(t)?!0:!Vn(ss(t),i);case"is":return Hn(ss(t),i);case"is_not":return!Hn(ss(t),i);default:return!1}}function nu(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function au(r,e){let t=r.get(e);return t||(t=nu(),r.set(e,t)),t}function lu(r,e){if(r.length===0||e.length===0)return[];const t=new Set(r);return e.filter(i=>t.has(i))}function du(r,e){r.contributingDependencyUuids.includes(e)||r.contributingDependencyUuids.push(e)}function cu(r,e,t){const i=au(r,t.targetCkey);switch(du(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"show":i.shown=!0;break;case"require":i.required=!0;break;case"allow_values":{const s=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...s]:lu(i.allowedValues,s);break}case"set_values":{const s=t.setValues??[];if(s.length===0)break;i.setValue===void 0&&(i.setValue=s.length===1?s[0]:s);break}default:t.type}}function uu(r,e){for(const t of e.actions)cu(r,e,t)}function pu(r,e){const t=new Map;for(const i of e)i.active&&ru(i,r.mime)&&ou(i,r.meta)&&uu(t,i);return t}function ei(r,e,t){const i={},s=new Set;for(const a of e.fields)s.add(a.ckey),a.key in r.meta&&(i[a.ckey]=r.meta[a.key]);const o=t.filter(a=>s.has(a.triggerCkey)),n=pu({mime:r.mime,meta:i},o);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const d of a.fields){const c=n.get(d.ckey);if(c){c.hidden=!0;for(const p of l.contributingDependencyUuids)c.contributingDependencyUuids.includes(p)||c.contributingDependencyUuids.push(p)}else n.set(d.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function hu(r,e){const t=Array.isArray(e)?e:[e];switch(r.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function Us(r,e,t){var i,s;return!!((i=t.get(r.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((s=t.get(e.ckey))!=null&&s.hidden))}function no(r,e,t){var i,s;return t?!!((i=t.get(r.ckey))!=null&&i.shown||e!=null&&e.ckey&&((s=t.get(e.ckey))!=null&&s.shown)):!1}function fu(r,e,t){if(t.size===0)return r;let i=null;for(const s of e.groups)for(const o of s.fields)Us(o,s,t)&&o.key in r&&(i||(i={...r}),delete i[o.key]);return i??r}function gu(r){return r==null?[]:Array.isArray(r)?r.map(String):[String(r)]}function mu(r,e){if(r.length!==e.length)return!1;const t=new Set(r);for(const i of e)if(!t.has(i))return!1;return!0}function gl(r,e){const t=[];for(const[i,s]of e){if(s.hidden)continue;const o=gu(r[i]);if(o.length!==0){if(s.allowedValues!==void 0){const n=new Set(s.allowedValues),a=o.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...s.contributingDependencyUuids]})}if(s.setValue!==void 0){const n=Array.isArray(s.setValue)?s.setValue:[s.setValue];mu(o,n)||t.push({ckey:i,kind:"set_values",conflictingValues:o,dependencyUuids:[...s.contributingDependencyUuids]})}}}return t}function vu(r,e,t){if(r.length===0||t.length===0)return new Map;const i=r.map(n=>ei({mime:n.mime,meta:n.meta},e,t)),s=new Map,o=new Set;for(const n of i)for(const a of n.keys())o.add(a);for(const n of o){const a=i.map(E=>E.get(n)),l=a.every(E=>(E==null?void 0:E.hidden)===!0),d=a.some(E=>(E==null?void 0:E.shown)===!0),c=a.some(E=>(E==null?void 0:E.required)===!0);let p;if(a.every(E=>Array.isArray(E==null?void 0:E.allowedValues))){let E;for(const k of a){const S=k.allowedValues;if(E=E===void 0?[...S]:E.filter(y=>S.includes(y)),E.length===0)break}p=E}let f;const x=a.map(E=>E==null?void 0:E.setValue).filter(E=>E!==void 0);x.length===r.length&&bu(x)&&(f=x[0]);const m=new Set;for(const E of a)if(E)for(const k of E.contributingDependencyUuids)m.add(k);const C={hidden:l,required:c,contributingDependencyUuids:[...m]};d&&(C.shown=!0),p!==void 0&&(C.allowedValues=p),f!==void 0&&(C.setValue=f),s.set(n,C)}return s}function bu(r){if(r.length<=1)return!0;const e=r[0];if(typeof e=="string")return r.every(i=>i===e);const t=new Set(e);return r.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const s of i)if(!t.has(s))return!1;return!0})}const ml=new Set(["asset-attachments","attachments-assets","integer-list"]),xu=new Set(["face_matcher"]);function yu(r){return ml.has(r)}function qi(r){return ml.has(r.type)||xu.has(r.ckey)}const ao=0,lo=100,_u=2;function _r(r){if(r==null||r==="")return null;const e=Number(r);return!Number.isFinite(e)||e<ao||e>lo?null:e}const jm=300,Kn=2,wu=50,Nm=5,dr="regvar:api",ku="#ut",$u={CREATE_ONLY:"create_only",UPSERT:"upsert"},Su=/^[a-z0-9_-]+$/,Cu=r=>typeof r=="string"&&r.startsWith(ku),ps=r=>`~${r.toUpperCase()}`,Eu=(r,e)=>{if(!(!r||!e))return r[e]??r[ps(e)]},Cs=(r,e,t)=>{var n,a,l;const i=(n=r.i18n)==null?void 0:n[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const s=(a=r.i18n)==null?void 0:a[ps(e)];if(s)return{value:s,isFallback:!0,sourceLang:ps(e)};const o=Eu(r.i18n,t);if(o){const d=(l=r.i18n)!=null&&l[t]?t:ps(t);return{value:o,isFallback:!0,sourceLang:d}}return{value:"",isFallback:!1,sourceLang:null}},Yn=r=>(typeof r=="string"?r:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),qm=r=>Su.test(r),Gn=r=>{const e={},t={};for(const i of r||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},Hm=(r,e)=>r.bySid[e]||r.bySlug[e],Wn=(r,e)=>({bySid:{...r.bySid,...e.bySid},bySlug:{...r.bySlug,...e.bySlug}}),Ri=r=>{const e=[],t=new Map,i=o=>o.sid||o.slug||"",s=(o,n)=>{if(typeof o=="string"){if(!o||t.has(o))return;t.set(o,e.length),e.push({slug:o});return}if(!o||typeof o!="object")return;const a=o,l=i(a);if(!l)return;const d=t.get(l),c=d!==void 0?{...e[d]}:{};a.slug&&(c.slug=a.slug),a.sid&&(c.sid=a.sid),a.uuid&&(c.uuid=a.uuid);const p={...c.i18n,...a.i18n||{}};n&&a.label&&(p[n]=a.label),Object.keys(p).length>0&&(c.i18n=p),d!==void 0?e[d]=c:(t.set(l,e.length),a.slug&&a.slug!==l&&t.set(a.slug,e.length),e.push(c))};if(Array.isArray(r))for(const o of r)s(o);else if(r&&typeof r=="object"){const o=r;for(const[n,a]of Object.entries(o))if(Array.isArray(a))for(const l of a)s(l,n)}return e},rs=r=>typeof r=="string"?[r]:!r||typeof r!="object"?[]:[r.sid,r.slug,r.uuid].filter(Boolean),wr=(r,e,t)=>{if(t){const o=new Set(e.flatMap(rs));return r.filter(n=>!rs(n).some(a=>o.has(a)))}const i=new Set(r.flatMap(rs)),s=e.filter(o=>!rs(o).some(n=>i.has(n)));return[...r,...s]},Pu=(r,e)=>r.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function vl(r,e,t){let i=e;switch(r.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),r.type){case"geopoint":return Tu(i);case"focus-point":return bl(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(s=>typeof s=="string"?{value:s,label:s}:s):[];case"ultratags":return Ri(e);case"multi-select":return i||[];default:return i??""}}function co(r,e,t,i){var o;let s;switch(r.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?s=null:s=`(${n.latitude},${n.longitude})`;break}case"focus-point":{const n=e,a=c=>{if(c==null||c==="")return;const p=Number(c);return Number.isFinite(p)?Number(p.toFixed(_u)):void 0},l=a(n==null?void 0:n.horizontal),d=a(n==null?void 0:n.vertical);s=l===void 0||d===void 0?null:`${l},${d}`;break}case"boolean":e==="true"?s=!0:e==="false"?s=!1:s=null;break;case"date":{if(!e)s=null;else{const n=e instanceof Date?e:new Date(e),a=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),d=String(n.getDate()).padStart(2,"0");s=`${a}-${l}-${d}`}break}case"tags":s=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":s=Array.isArray(e)?e.map(n=>typeof n=="string"?n:n.slug).filter(n=>!!n):[];break;case"select-one":s=e===""?null:e;break;case"numeric":{if(e===""||e==null){s=null;break}const n=Number(e);s=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){s=null;break}const n=Number(e);s=Number.isFinite(n)?n:null;break}default:s=e}if(r.regional_variants_group_uuid&&r.type!=="ultratags"){const n=i??"en";return{...((o=t==null?void 0:t.meta)==null?void 0:o[r.key])??{},[n]:s}}return s}function Tu(r){if(typeof r=="string"){const e=/\(([^)]+)\)/.exec(r);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function bl(r){var e;if(typeof r=="string"&&r!==""){const i=(((e=/\(([^)]+)\)/.exec(r))==null?void 0:e[1])??r).split(",");if(i.length===2)return{horizontal:i[0].trim(),vertical:i[1].trim()}}if(r!=null&&typeof r=="object"){const t=r;return{horizontal:t.horizontal??"",vertical:t.vertical??""}}return{horizontal:"",vertical:""}}const Ot="product.ref",It="product.position",Au="__product__",Ru=new Set([Ot,It]);function kr(r){return Ru.has(r)}function $r(r){return r===Ot?"ref":r===It?"position":null}function Ou(r){return[{key:Ot,ckey:Ot,uuid:"product-ref",title:r("productRefLabel","Product reference"),type:"text",placeholder:r("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:It,ckey:It,uuid:"product-position",title:r("productPositionLabel","Position"),type:"numeric",placeholder:r("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Iu(r){return{uuid:Au,isRoot:!1,name:r("productFieldsLabel","Product"),fields:Ou(r)}}function Fu(r,e){const t=Iu(e);let i=-1;for(let l=0;l<r.groups.length;l++)r.groups[l].isRoot&&(i=l);const s=i+1,o=[...r.groups.slice(0,s),t,...r.groups.slice(s)],n=o.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...r,groups:o,fields:n,fieldsByKey:a}}const xl=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Lu(r){return r==null||r===""?null:typeof r!="string"||xl.test(r)?"productRefInvalid":null}function Uu(r){if(r==null||r==="")return null;const e=typeof r=="number"?r:Number(r);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function uo(r){return r?r.ref!=null&&r.ref!==""||r.position!=null:!1}function po(r){const e={};return(r==null?void 0:r.ref)!=null&&r.ref!==""&&(e.ref=r.ref),(r==null?void 0:r.position)!=null&&(e.position=r.position),e}function Jn(r,e){const t={...r??{}};for(const i of Object.keys(e)){const s=e[i];s===void 0?delete t[i]:t[i]=s}return t}function yl(r,e,t){var s;if((((s=t==null?void 0:t.requiredFields)==null?void 0:s.includes(r.ckey))||!!r.required)&&qe(e))return`${r.title} is required`;if(qe(e))return null;if(r.key===Ot)return typeof e!="string"||xl.test(e)?"Reference contains invalid characters":null;if(r.key===It){const o=Number(e);return!Number.isFinite(o)||!Number.isInteger(o)?"Position must be an integer":null}switch(r.type){case"numeric":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!Number.isInteger(o))return"Must be an integer";if(o<-1999999999||o>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(o<-999999999999e-2||o>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const o=e,n=o.latitude!==""&&o.latitude!=null,a=o.longitude!==""&&o.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(o.latitude),d=Number(o.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"focus-point":{const o=e,n=o.horizontal!==""&&o.horizontal!=null,a=o.vertical!==""&&o.vertical!=null;if(n!==a)return"Both horizontal and vertical are required";if(n&&a){for(const l of[o.horizontal,o.vertical])if(_r(l)===null)return`Focus point must be between ${ao} and ${lo}`}break}case"attachment-uri":{try{const o=new URL(e);if(!["http:","https:"].includes(o.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(r.validation&&typeof e=="string")try{if(!new RegExp(r.validation).test(e))return"Value does not match expected format"}catch{}return null}function qe(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:typeof r=="object"?!Object.values(r).some(e=>e!=null&&e!==""):!r}const Du=new Set(["idle","queued","rejected"]);function Ds(r){return!qe(r)}function Oi(r,e){var t;return qi(r)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(r.ckey)?!0:!!r.required}function ho(r,e,t){var i;return(i=t==null?void 0:t.get(r.ckey))!=null&&i.required?!0:Oi(r,e)}function zt(r){return[...r.values()].filter(e=>Du.has(e.status))}function _l(r,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:r.forceFillingOnUpload!==void 0?r.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:r.fields.some(t=>!!t.required)}function Hi(r,e,t){if(!e)return Oi(r,t);const i=e.get(r.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:Oi(r,t)}function di(r,e,t){const i=new Map;if(!t||t.length===0){for(const s of r)i.set(s.id,null);return i}for(const s of r)i.set(s.id,ei({mime:s.type??"",meta:s.meta},e,t));return i}function zu(r,e,t,i){const s=zt(r);if(s.length===0)return{};const o=di(s,e,i),n={};for(const a of e.fields){const l=s.filter(d=>{const c=o.get(d.id)??null;return Hi(a,c,t)?!Ds(d.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function Mu(r,e,t,i){const s=zt(r);if(s.length===0)return new Set;const o=di(s,e,i),n=new Set;for(const a of e.fields)s.some(d=>{const c=o.get(d.id)??null;return Hi(a,c,t)})&&n.add(a.key);return n}function Bu(r,e,t,i){const s=zt(r);if(s.length===0)return null;const o=di(s,e,i);for(const n of e.fields)if(s.some(l=>{const d=o.get(l.id)??null;return Hi(n,d,t)?!Ds(l.meta[n.key]):!1}))return n.key;return null}function wl(r,e,t){var s;const i=r.get(e.id);return i&&i.has(t)?i.get(t):(s=e.meta)==null?void 0:s[t]}function fo(r,e,t){const i=e.get(r.id);if(!i||i.size===0)return r;const s={...r.meta};for(const o of t.fields)i.has(o.key)&&(s[o.key]=i.get(o.key));return{...r,meta:s}}function Vm(r,e,t,i,s){const o=zt(e);if(o.length===0)return null;const n=o.map(l=>fo(l,r,t)),a=di(n,t,s);for(const l of t.fields)if(o.some((c,p)=>{const h=a.get(n[p].id)??null;return Hi(l,h,i)?!Ds(wl(r,c,l.key)):!1}))return l.key;return null}function ju(r,e,t,i,s){const o=new Set,n=zt(e);if(n.length===0)return o;const a=n.map(d=>fo(d,r,t)),l=di(a,t,s);for(const d of t.fields)n.some((p,h)=>{const f=l.get(a[h].id)??null;return Hi(d,f,i)?!Ds(wl(r,p,d.key)):!1})&&o.add(d.key);return o}function kl(r,e,t){if(!t||t.length===0)return null;const i=zt(r);if(i.length===0)return null;const s=di(i,e,t),o=new Map;for(const n of i){const a=s.get(n.id);if(!a||a.size===0)continue;const l={};for(const c of e.fields)c.key in n.meta&&(l[c.ckey]=n.meta[c.key]);const d=gl(l,a);d.length!==0&&o.set(n.id,new Set(d.map(c=>c.ckey)))}if(o.size===0)return null;for(const n of e.fields)for(const a of o.values())if(a.has(n.ckey))return n.key;return null}function Nu(r,e,t,i){const s=zt(e);if(s.length===0)return null;const o=new Map(s.map(n=>[n.id,fo(n,r,t)]));return kl(o,t,i)}function Km(r,e){const t={...r};for(const i of Object.keys(e)){const s=e[i];if(s==null||s==="")continue;const o=r[i];if(Array.isArray(s))if(Array.isArray(o)){const n=new Set(o.map(l=>JSON.stringify(l))),a=[...o];for(const l of s){const d=JSON.stringify(l);n.has(d)||(n.add(d),a.push(l))}t[i]=a}else t[i]=s;else t[i]=s}return t}function qu(r,e){const t=e.fields[r.ckey];let i=!1;const s=(r.possible_values??[]).map(l=>{const d=e.options[l.internal_unique_value];return d&&d!==l.label?(i=!0,{...l,label:d}):l}),o=!!(t!=null&&t.name)&&t.name!==r.title,n=!!(t!=null&&t.placeholder)&&t.placeholder!==r.placeholder,a=!!(t!=null&&t.tooltip)&&t.tooltip!==r.hint;return!i&&!o&&!n&&!a?r:{...r,title:o?t.name:r.title,placeholder:n?t.placeholder:r.placeholder,hint:a?t.tooltip:r.hint,possible_values:i?s:r.possible_values}}function Hu(r,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return r;let t=!1;const i=r.groups.map(n=>{let a=!1;const l=n.fields.map(d=>{const c=qu(d,e);return c!==d&&(a=!0),c});return a?(t=!0,{...n,fields:l}):n});if(!t)return r;const s=i.flatMap(n=>n.fields),o=new Map(s.map(n=>[n.key,n]));return{...r,groups:i,fields:s,fieldsByKey:o}}const Vu="description",Xe="system.focusPoint",Ku="__focus_point__",Yu="sfx-meta-focus-point-field";function St(r){return r===Xe}function Gu(r){return{key:Xe,ckey:Xe,uuid:"system-focus-point",title:r("focusPointLabel","Focus point"),type:"focus-point",required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Wu(r,e){const t=Gu(e);let i=!1,s=r.groups.map(a=>{if(i||!a.isRoot)return a;i=!0;const l=a.fields.findIndex(c=>c.ckey===Vu),d=l===-1?a.fields.length:l+1;return{...a,fields:[...a.fields.slice(0,d),t,...a.fields.slice(d)]}});i||(s=[{uuid:Ku,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...s]);const o=s.flatMap(a=>a.fields),n=new Map(o.map(a=>[a.key,a]));return{...r,groups:s,fields:o,fieldsByKey:n}}function $l(r){if(!r.fields.some(s=>St(s.key)))return r;const e=r.groups.map(s=>({...s,fields:s.fields.filter(o=>!St(o.key))})).filter(s=>s.fields.length>0),t=e.flatMap(s=>s.fields),i=new Map(t.map(s=>[s.key,s]));return{...r,groups:e,fields:t,fieldsByKey:i}}function Sl(r=2){return u`<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width=${r}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>`}function go(r){return r.show===!1}const Ju="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Xu="https://i18n-fastly.ultrafast.io",Zu="uploader",mo=al({gridUuid:Ju,namespace:Zu,cdnUrl:Xu}),Qu=mo.initI18n,T=mo.t,We=mo.I18nController;var ep=Object.defineProperty,$e=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&ep(e,t,s),s};const tp=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,ip=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,sp=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,rp=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,Oo=class Oo extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.focusPointPicking=!1,this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=gl(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var o;const i=this.resolvedSchema;if(i&&e.ckey&&((o=i.get(e.ckey))!=null&&o.hidden))return[];let s=i?e.fields.filter(n=>!Us(n,e,i)):e.fields;return go(e)&&(s=s.filter(n=>ho(n,this.config??void 0,i)||no(n,e,i))),t&&!e.name.toLowerCase().includes(t)&&(s=s.filter(n=>n.title.toLowerCase().includes(t))),s}_renderFilter(e,t,i){if(this.hideFilter||!this.schema||this.schema.fields.length===0)return v;const s=this._filterQuery,o=this._isAllCollapsed(t),n=o?T("expandAll","Expand all"):T("collapseAll","Collapse all");return u`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${tp}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${T("searchFields","Search fields...")}
            .value=${s}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${T("searchMetadataFields","Search metadata fields")}
          />
          ${s?u`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${T("clearSearch","Clear search")}
                aria-label=${T("clearSearch","Clear search")}
                type="button"
              >
                ${ip}
              </button>`:v}
        </div>
        ${e?u`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?T("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${o?T("expandAllGroups","Expand all groups"):T("collapseAllGroups","Collapse all groups")}
              type="button"
            >
              ${o?rp:sp}
            </button>`:v}
      </div>
    `}_renderGroup(e,t,i,s,o){const n=o?!0:!this._collapsed.has(e.uuid);return u`
      <div class="group">
        <button
          class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${n}
        >
          <span>${e.name}</span>
          <svg
            class="chevron ${n?"open":""}"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
        ${n?u`
              <div class="group-content">
                ${t.map(a=>{var l,d,c;return u`
                    <sfx-metadata-field
                      .field=${a}
                      .value=${this.meta[a.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((l=this.taxonodes)==null?void 0:l[a.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${((d=this.schema)==null?void 0:d.regionalVariantsGroups)??[]}
                      .resolvedState=${((c=this.resolvedSchema)==null?void 0:c.get(a.ckey))??null}
                      .conflict=${i.get(a.ckey)??null}
                      .dependencyNames=${s}
                      .focusPointPicking=${this.focusPointPicking}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:v}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return u`<div class="empty" role="status" aria-live="polite">
        ${T("noMetadataFieldsConfigured","No metadata fields configured")}
      </div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),s=i.toLowerCase(),o=s!=="",n=[];for(const c of this.schema.groups){const p=this._visibleFieldsFor(c,s);p.length!==0&&n.push({group:c,fields:p})}const a=n.map(c=>c.group.uuid),l=this.schema.groups.length>1&&(o||n.length>0),d=this._renderFilter(l,a,o);if(n.length===0){const c=o?T("noFieldsMatch",'No fields match "{{query}}"',{query:i}):T("allMetadataFieldsHidden","All metadata fields are currently hidden");return u`
        ${d}
        <div class="empty" role="status" aria-live="polite">${c}</div>
      `}return u`
      ${d}
      ${n.map(({group:c,fields:p})=>this._renderGroup(c,p,e,t,o))}
    `}};Oo.styles=q`
    :host {
      display: block;
    }

    .form-filter {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px 12px;
    }
    .filter-input-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
      height: 36px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      transition:
        border-color 0.15s ease,
        box-shadow 0.15s ease;
      box-sizing: border-box;
    }
    .filter-input-wrap:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow:
        0 0 0 2px var(--sfx-up-bg, #fff),
        0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    }
    .filter-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 100%;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .filter-icon svg {
      width: 16px;
      height: 16px;
    }
    .filter-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      padding: 0 4px 0 0;
      border: none;
      background: transparent;
      outline: none;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
    }
    .filter-input::placeholder {
      color: var(--sfx-up-text-muted, #94a3b8);
      opacity: 1;
    }
    .filter-clear {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      margin-right: 4px;
      flex-shrink: 0;
      border-radius: 6px;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      transition:
        background 0.15s ease,
        color 0.15s ease;
    }
    .filter-clear:hover {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .filter-clear:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 1px;
    }
    .filter-clear svg {
      width: 12px;
      height: 12px;
    }
    .filter-collapse {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      flex-shrink: 0;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      transition:
        background 0.15s ease,
        color 0.15s ease,
        border-color 0.15s ease;
      box-sizing: border-box;
    }
    .filter-collapse:hover:not(:disabled) {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .filter-collapse:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .filter-collapse:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .filter-collapse svg {
      width: 16px;
      height: 16px;
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 48px;
      padding: 0 16px;
      box-sizing: border-box;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      transition: background-color 0.12s ease;
    }
    .group-header:hover {
      background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
    }
    .group-header:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
      border-radius: 4px;
    }

    .chevron {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }
    .chevron.open {
      transform: rotate(180deg);
    }

    .group-content {
      padding: 0 16px 8px;
    }

    .empty {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
  `;let pe=Oo;$e([g({attribute:!1})],pe.prototype,"schema");$e([g({attribute:!1})],pe.prototype,"meta");$e([g({attribute:!1})],pe.prototype,"config");$e([g({attribute:!1})],pe.prototype,"autocomplete");$e([g({attribute:!1})],pe.prototype,"taxonomyService");$e([g({attribute:!1})],pe.prototype,"ultratags");$e([g({attribute:!1})],pe.prototype,"defaultLanguage");$e([g({attribute:!1})],pe.prototype,"taxonodes");$e([g({attribute:!1})],pe.prototype,"resolvedSchema");$e([g({attribute:!1})],pe.prototype,"dependencies");$e([g({type:Boolean})],pe.prototype,"focusPointPicking");$e([g({type:Boolean})],pe.prototype,"disabled");$e([g({type:Boolean,attribute:"hide-filter"})],pe.prototype,"hideFilter");$e([P()],pe.prototype,"_collapsed");$e([P()],pe.prototype,"_filterQuery");ie("sfx-metadata-form",pe);const Mt=q`
  input,
  textarea,
  select {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    outline: none;
    transition:
      border-color 0.15s ease,
      box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input::placeholder,
  textarea::placeholder {
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    font-size: 14px;
    color: var(--sfx-up-text-muted, #94a3b8);
    opacity: 1;
  }
  input:focus,
  textarea:focus,
  select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
  }
  input:disabled,
  textarea:disabled,
  select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  ${Re}
`,Vi=q`
  :host {
    display: block;
    position: relative;
  }

  .trigger {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .trigger-clear {
    all: unset;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: pointer;
    transition:
      color 0.15s,
      background 0.15s;
  }
  .trigger-clear:hover {
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-surface, #f1f5f9);
  }
  .trigger-chevron {
    margin-left: auto;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
    pointer-events: none;
  }
  .trigger-chevron svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .trigger-chevron.open {
    transform: rotate(180deg);
  }
  .trigger:focus-visible {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline: none;
  }
  .placeholder,
  .trigger-value {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .placeholder {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 10;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }

  /* Scrollable option region used by the select fields, which override the
     dropdown to a fixed-height flex column so the search stays pinned while
     this region scrolls. Hosts both the plain map() options and, for long
     lists, a lit-virtualizer that uses this element as its scroll container.
     The flex-shrink on .search only takes effect in that flex layout. */
  .options-list {
    flex: 1;
    overflow-y: auto;
  }
  .options-list lit-virtualizer {
    display: block;
  }
  /* The virtualizer positions each option absolutely without setting a width, so
     an option would otherwise shrink to its label and the hover/active highlight
     would not span the dropdown. Force full width to match the plain options. */
  .options-list lit-virtualizer > .option {
    width: 100%;
  }

  .search {
    flex-shrink: 0;
    width: 100%;
    height: 34px;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    font-size: 13px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: transparent;
    outline: none;
    box-sizing: border-box;
  }

  .option {
    padding: 8px 10px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
  }
  .option:hover,
  .option.active {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .option.selected {
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .empty {
    padding: 8px 10px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  ${Re}
`,vo=q`
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-size: 12px;
    color: var(--sfx-up-text, #1e293b);
    line-height: 1.4;
  }
  .chip-x {
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
  }
  .chip-x:hover {
    color: var(--sfx-up-error, #dc2626);
  }

  ${Re}
`,Ym=q`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
  }

  .panel-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }

  .panel-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition:
      background 0.15s ease,
      color 0.15s ease;
    flex-shrink: 0;
  }
  .panel-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .panel-close:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  .progress-bar {
    flex-shrink: 0;
    padding: 8px 16px;
    border-bottom: 1px solid var(--sfx-up-border-light, #f8faff);
  }
  .progress-label {
    font-size: 12px;
    color: var(--sfx-up-text-secondary, #64748b);
    margin-bottom: 4px;
  }
  .progress-track {
    height: 3px;
    border-radius: 2px;
    background: var(--sfx-up-border-light, #f8faff);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sfx-up-primary, #2563eb);
    transition: width 0.25s ease;
  }

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0 24px;
  }

  .panel-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .panel-footer .spacer {
    flex: 1;
  }

  .panel-footer .page-counter {
    font-size: 12px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* Shared button styles */
  .btn,
  .btn-ghost,
  .btn-primary {
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
  .btn-primary svg {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary, #2563eb),
      var(--sfx-up-primary-mid, #3b82f6)
    );
    color: #fff;
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
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  ${Re}
`,Cl=q`
  :host {
    display: block;
  }

  .field-row {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 8px 0;
  }

  /* Textarea rows: label should top-align with the first line of text */
  .field-row--top {
    align-items: flex-start;
  }
  .field-row--top .field-label {
    padding-top: 6px;
  }

  .field-label {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 144px;
    flex-shrink: 0;
  }
  .field-label-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
  }
  /* Dependency-conflict marker. Surfaces when the field's current value
     violates an allow_values or set_values rule. The native title attribute
     is used as the tooltip so we don't need a separate popover element. */
  .field-conflict {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    color: var(--sfx-up-warning, #f59e0b);
    flex-shrink: 0;
    cursor: help;
  }
  .field-conflict svg {
    width: 14px;
    height: 14px;
  }
  .field-hint {
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: help;
    flex-shrink: 0;
  }
  .field-hint svg {
    width: 12px;
    height: 12px;
  }

  .field-content {
    flex: 1;
    min-width: 0;
  }

  .field-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* Per-field regional-variants hint, e.g. "Languages: English". Mirrors
     admin v5's useFieldRegionalVariantHint description text. */
  .field-regional-hint {
    font-size: 11px;
    color: var(--sfx-up-text-muted, #94a3b8);
    margin-top: 4px;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 960px) {
    .field-label {
      width: 125px;
    }
  }

  /* Mobile: stack label above the input full-width. The fixed 144px
     label column gets crushed on narrow viewports. */
  @media (max-width: 768px) {
    .field-row,
    .field-row--top {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
      padding: 10px 0;
    }
    .field-row--top .field-label {
      padding-top: 0;
    }
    .field-label {
      width: auto;
    }
  }

  ${Re}
`,hs={LANGUAGES:"FTYPE_LANGUAGES",CURRENCIES:"FTYPE_CURRENCIES",CUSTOM:"FTYPE_CUSTOM"};function At(r,e){if(!r.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&r.regional_variants_group_uuid in t?t[r.regional_variants_group_uuid]:e==null?void 0:e.language}function op(r,e,t,i){if(!r.regional_variants_group_uuid||!e)return;const s=e.find(a=>a.uuid===r.regional_variants_group_uuid);if(!s)return;const o=(t==null?void 0:t[s.uuid])??i,n=s.variants.find(a=>a.api_value===o);if(n)return`${s.label}: ${n.label}`}function np(r,e){var i;const t={};for(const s of r??[]){if(!((i=s.variants)!=null&&i.length))continue;const o=s.type===hs.LANGUAGES?ap(s.variants,e):void 0;t[s.uuid]=o??s.variants[0].api_value}return t}function ap(r,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let s,o;for(const a of r){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!s&&l===i&&(s=a.api_value),!o&&l.split("-")[0]===i&&(o=a.api_value)}}return s??o}var lp=Object.defineProperty,ye=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&lp(e,t,s),s};const Io=class Io extends G{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.focusPointPicking=!1,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:Oi(this.field,this.config??void 0)}_conflictTooltip(){var n,a;const e=this.conflict;if(!e)return"";const t=l=>{var d,c,p;return((p=(c=(d=this.field)==null?void 0:d.possible_values)==null?void 0:c.find(h=>h.internal_unique_value===l))==null?void 0:p.label)??l},i=(n=this.resolvedState)==null?void 0:n.allowedValues,s=(a=this.resolvedState)==null?void 0:a.setValue;let o;if(e.kind==="allow_values"&&i?o=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&s!==void 0?o=`Value should be: ${(Array.isArray(s)?s:[s]).map(t).join(", ")}`:o="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const l=e.dependencyUuids.map(d=>this.dependencyNames.get(d)).filter(d=>!!d);if(l.length>0){const d=l.length===1?"dependency":"dependencies";o+=`
Controlled by ${d}: ${l.join(", ")}`}}return o}_onFieldBlur(e){const{key:t,value:i}=e.detail,s=yl(this.field,i,this.config??void 0);if(s){this._error=s;return}this._error=null;const o={meta:{[this.field.key]:this.value}},n=At(this.field,this.config),a=co(this.field,i,o,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_emitRow(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}_onRowFocusIn(){this._emitRow("field-focus",{focused:!0})}_onRowFocusOut(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emitRow("field-focus",{focused:!1})}_renderField(e,t){var o,n;const i=this.disabled;if(qi(e))return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const s=((o=this.resolvedState)==null?void 0:o.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return u`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`;case"textarea":return u`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-textarea-field>`;case"select-one":return u`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${s}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return u`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${s}
          ?disabled=${i}
        ></sfx-meta-multi-select-field>`;case"tags":return u`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${i}
        ></sfx-meta-tags-field>`;case"ultratags":return u`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${(n=this.config)==null?void 0:n.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}
        ></sfx-meta-ultratags-field>`;case"taxonomy-node":return u`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${i}
        ></sfx-meta-taxonomy-node-field>`;case"boolean":return u`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return u`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-number-field>`;case"date":return u`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-date-field>`;case"geopoint":return u`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-geo-point-field>`;case"focus-point":return u`<sfx-meta-focus-point-field
          .field=${e}
          .value=${t}
          .picking=${this.focusPointPicking}
          ?disabled=${i}
        ></sfx-meta-focus-point-field>`;default:return u`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}render(){var l,d;const e=this.field;if(!e)return v;const t=At(e,this.config),i=vl(e,this.value,t),s=op(e,this.regionalVariantsGroups,(l=this.config)==null?void 0:l.regionalFilters,(d=this.config)==null?void 0:d.language),n=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return u`
      <div
        class=${n}
        aria-required=${this._isRequired?"true":"false"}
        @focusin=${this._onRowFocusIn}
        @focusout=${this._onRowFocusOut}
      >
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?u`<span class="field-required" aria-hidden="true">*</span>`:v}
          ${this.conflict?u`<span
                class="field-conflict"
                role="img"
                aria-label=${a}
                title=${a}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8 2 L14 13 L2 13 Z" />
                  <line x1="8" y1="6.5" x2="8" y2="9.5" />
                  <circle cx="8" cy="11.25" r="0.4" fill="currentColor" />
                </svg>
              </span>`:v}
        </div>
        <div class="field-content">
          ${this._renderField(e,i)}
          ${s?u`<div class="field-regional-hint" title=${s}>${s}</div>`:v}
          ${this._error?u`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:v}
        </div>
      </div>
    `}};Io.styles=[Cl];let de=Io;ye([g({attribute:!1})],de.prototype,"field");ye([g({attribute:!1})],de.prototype,"value");ye([g({attribute:!1})],de.prototype,"config");ye([g({attribute:!1})],de.prototype,"autocomplete");ye([g({attribute:!1})],de.prototype,"taxonomyService");ye([g({attribute:!1})],de.prototype,"taxonomyEntry");ye([g({attribute:!1})],de.prototype,"ultratags");ye([g({attribute:!1})],de.prototype,"defaultLanguage");ye([g({attribute:!1})],de.prototype,"ultratagsRestrictToItems");ye([g({attribute:!1})],de.prototype,"regionalVariantsGroups");ye([g({attribute:!1})],de.prototype,"resolvedState");ye([g({attribute:!1})],de.prototype,"conflict");ye([g({attribute:!1})],de.prototype,"dependencyNames");ye([g({type:Boolean})],de.prototype,"focusPointPicking");ye([g({type:Boolean})],de.prototype,"disabled");ye([P()],de.prototype,"_error");ie("sfx-metadata-field",de);var dp=Object.defineProperty,bo=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&dp(e,t,s),s};class Se extends G{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new We(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?T("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??T("selectAnOption","Select an option")}_emit(e,t){this._emitDetail(e,t!==void 0?{value:t}:{})}_emitDetail(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}}bo([g({attribute:!1})],Se.prototype,"field");bo([g({attribute:!1})],Se.prototype,"value");bo([g({type:Boolean})],Se.prototype,"disabled");const Fo=class Fo extends Se{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return u`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Fo.styles=[Mt];let Sr=Fo;ie("sfx-meta-text-field",Sr);const Lo=class Lo extends Se{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return u`
      <textarea
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};Lo.styles=[Mt,q`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Cr=Lo;ie("sfx-meta-textarea-field",Cr);function Ki(r,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(o=(s<3?n(o):s>3?n(e,t,o):n(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=(r,e)=>{var i;const t=r._$AN;if(t===void 0)return!1;for(const s of t)(i=s._$AO)==null||i.call(s,e,!1),Ci(s,e);return!0},Es=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while((t==null?void 0:t.size)===0)},El=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),pp(e)}};function cp(r){this._$AN!==void 0?(Es(this),this._$AM=r,El(this)):this._$AM=r}function up(r,e=!1,t=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)Ci(i[o],!1),Es(i[o]);else i!=null&&(Ci(i,!1),Es(i));else Ci(this,r)}const pp=r=>{r.type==ai.CHILD&&(r._$AP??(r._$AP=up),r._$AQ??(r._$AQ=cp))};class hp extends Ni{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),El(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),t&&(Ci(this,e),Es(this))}setValue(e){if(Tc(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zs extends Event{constructor(e){super(zs.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}zs.eventName="rangeChanged";class Ms extends Event{constructor(e){super(Ms.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ms.eventName="visibilityChanged";class Bs extends Event{constructor(){super(Bs.eventName,{bubbles:!1})}}Bs.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fp{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class gp extends fp{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:s}=this._destination;i=Math.min(i||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const o=Math.abs(i-e),n=Math.abs(s-t);o<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Xn=typeof window<"u"?window.ResizeObserver:void 0;const Er=Symbol("virtualizerRef"),os="virtualizer-sizer";let Zn;class mp{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Xn(()=>this._hostElementSizeChanged()),this._childrenRO=new Xn(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[Er]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=xp(this._hostElement,e),this._scrollerController=new gp(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,i,s;this._scrollEventListeners.forEach(o=>o.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(s=this._childrenRO)==null||s.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${os}]`);t||(t=document.createElement("div"),t.setAttribute(os,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(os,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||Zn;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const s={...e};delete s.type,t=s}else t=e;i===void 0&&(Zn=i=(await J(()=>import("./flow-DQ61c9Hr.js"),[])).FlowLayout),this._layout=new i(s=>this._handleLayoutMessage(s),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,n)=>o+n.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:s}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let s=0;s<t.length;s++){const o=t[s],n=this._first+s;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[n]=i.call(this,o,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},vp(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Bs)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(os)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var s;const e=this._hostElement,t=(s=this._scrollerController)==null?void 0:s.element,i=this._layout;if(e&&t&&i){let o,n,a,l;const d=e.getBoundingClientRect();o=0,n=0,a=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(k=>k.getBoundingClientRect());c.unshift(d);for(const k of c)o=Math.max(o,k.top),n=Math.max(n,k.left),a=Math.min(a,k.bottom),l=Math.min(l,k.right);const p=t.getBoundingClientRect(),h={left:d.left-p.left,top:d.top-p.top},f={width:t.scrollWidth,height:t.scrollHeight},x=o-d.top+e.scrollTop,m=n-d.left+e.scrollLeft,C=Math.max(0,a-o),E=Math.max(0,l-n);i.viewportSize={width:E,height:C},i.viewportScroll={top:x,left:m},i.totalScrollSize=f,i.offsetWithinScroller=h}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${s}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:s,height:o,xOffset:n,yOffset:a},l)=>{const d=this._children[l-this._first];d&&(d.style.position="absolute",d.style.boxSizing="border-box",d.style.transform=`translate(${i}px, ${t}px)`,s!==void 0&&(d.style.width=s+"px"),o!==void 0&&(d.style.height=o+"px"),d.style.left=n===void 0?null:n+"px",d.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:s,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-s})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new zs({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ms({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function vp(r){const e=window.getComputedStyle(r);return{marginTop:ns(e.marginTop),marginRight:ns(e.marginRight),marginBottom:ns(e.marginBottom),marginLeft:ns(e.marginLeft)}}function ns(r){const e=r?parseFloat(r):NaN;return Number.isNaN(e)?0:e}function Qn(r){if(r.assignedSlot!==null)return r.assignedSlot;if(r.parentElement!==null)return r.parentElement;const e=r.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function bp(r,e=!1){const t=[];let i=e?r:Qn(r);for(;i!==null;)t.push(i),i=Qn(i);return t}function xp(r,e=!1){let t=!1;return bp(r,e).filter(i=>{if(t)return!1;const s=getComputedStyle(i);return t=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pl=r=>r,Tl=(r,e)=>u`${e}: ${JSON.stringify(r,null,2)}`;class yp extends hp{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>Tl(t,i+this._first),this._keyFunction=(t,i)=>Pl(t,i+this._first),this._items=[],e.type!==ai.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return Zt(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?Le:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(s,o)=>t(s,o+this._first)),i&&(this._keyFunction=(s,o)=>i(s,o+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:s,items:o}=t;this._virtualizer=new mp({hostElement:e,layout:i,scroller:s}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const _p=li(yp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ci extends G{constructor(){super(...arguments),this.items=[],this.renderItem=Tl,this.keyFunction=Pl,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:i,layout:s,scroller:o}=this;return u`${_p({items:e,renderItem:t,keyFunction:i,layout:s,scroller:o})}`}element(e){var t;return(t=this[Er])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[Er])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var i;(i=this.element(e))==null||i.scrollIntoView({block:t})}}Ki([g({attribute:!1})],ci.prototype,"items",void 0);Ki([g()],ci.prototype,"renderItem",void 0);Ki([g()],ci.prototype,"keyFunction",void 0);Ki([g({attribute:!1})],ci.prototype,"layout",void 0);Ki([g({reflect:!0,type:Boolean})],ci.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",ci);const Al=50;function Rl(r,e){var i;const t=r.querySelector("lit-virtualizer");if(t){e>=0&&Promise.resolve(t.layoutComplete).then(()=>t.scrollToIndex(e,"nearest")).catch(()=>{});return}(i=r.querySelector(".option.active"))==null||i.scrollIntoView({block:"nearest"})}var wp=Object.defineProperty,js=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&wp(e,t,s),s},Qe;const Yi=(Qe=class extends Se{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>u` <div
      class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${i=>{i.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}get _options(){var i,s;const e=((i=this.field)==null?void 0:i.possible_values)??Qe._EMPTY;if(((s=this._optionsCache)==null?void 0:s.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var s;const e=this._options,t=this.allowedValues;if(((s=this._selectableCache)==null?void 0:s.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>Rl(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(e){return e.length?e.length<=Al?e.map(this._renderOption):u` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:u`<div class="empty">${T("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:Qe._EMPTY;return u`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._selectedLabel?u`<span class="trigger-value">${this._selectedLabel}</span>`:u`<span class="placeholder"
              >${((i=this.field)==null?void 0:i.placeholder)||e}</span
            >`}
        ${this._selectedLabel&&!this.disabled?u`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${T("clear","Clear")}
                @click=${this._clear}
                @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._clear(s))}}
                >&times;</span
              >
            `:v}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      ${this._open?u`
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${T("search","Search")}
                aria-label=${T("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
            </div>
          `:v}
    `}},Qe.styles=[Vi,q`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],Qe._EMPTY=[],Qe);js([g({attribute:!1})],Yi.prototype,"allowedValues");js([P()],Yi.prototype,"_open");js([P()],Yi.prototype,"_search");js([P()],Yi.prototype,"_activeIndex");let kp=Yi;ie("sfx-meta-select-field",kp);var $p=Object.defineProperty,Ns=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&$p(e,t,s),s},et;const Gi=(et=class extends Se{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{const i=this._selected;return u` <div
      class="option ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${i.includes(e.value)}
      @mousedown=${s=>{s.preventDefault(),this._toggle(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      <span class="check ${i.includes(e.value)?"checked":""}">
        ${i.includes(e.value)?"✓":""}
      </span>
      ${e.label}
    </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,s;const e=((i=this.field)==null?void 0:i.possible_values)??et._EMPTY;if(((s=this._optionsCache)==null?void 0:s.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var s;const e=this._options,t=this.allowedValues;if(((s=this._selectableCache)==null?void 0:s.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(s=>s!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i),this._emit("field-blur",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t),this._emit("field-blur",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e),this._emit("field-blur",e)}_clearAll(){this.value=[],this._emit("field-change",[]),this._emit("field-blur",[])}_scrollActive(){this.updateComplete.then(()=>Rl(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}_renderOptions(e){return e.length?e.length<=Al?e.map(this._renderOption):u` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:u`<div class="empty">${T("noOptions","No options")}</div>`}render(){var s;const e=this._selected,t=this._selectPlaceholder(),i=this._open?this._filtered:et._EMPTY;return u`
      <div
        class="trigger"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${e.length?e.map(o=>u` <span class="chip">
                  ${this._labelFor(o)}
                  <button
                    class="chip-x"
                    aria-label=${T("removeItem","Remove {{item}}",{item:this._labelFor(o)})}
                    @click=${n=>{n.stopPropagation(),this._remove(o)}}
                  >
                    &times;
                  </button>
                </span>`):u`<span class="placeholder"
              >${((s=this.field)==null?void 0:s.placeholder)||t}</span
            >`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>

      ${this._open?u`
            <div
              class="dropdown"
              role="listbox"
              aria-multiselectable="true"
              @keydown=${this._onKeydown}
            >
              <input
                class="search"
                type="text"
                placeholder=${T("search","Search")}
                aria-label=${T("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(i)}</div>
              ${this._options.length>0?u`
                    <div class="bulk-actions">
                      <button
                        type="button"
                        class="bulk-btn"
                        @mousedown=${o=>{o.preventDefault(),this._selectAll()}}
                      >
                        ${T("selectAll","Select all")}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${o=>{o.preventDefault(),this._clearAll()}}
                      >
                        ${T("clearAll","Clear all")}
                      </button>
                    </div>
                  `:v}
            </div>
          `:v}
    `}},et.styles=[Vi,vo,q`
      .trigger {
        min-height: 36px;
        height: auto;
        padding: 4px 8px;
        flex-wrap: wrap;
        gap: 4px;
      }
      .check {
        width: 16px;
        height: 16px;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 11px;
      }
      .check.checked {
        background: var(--sfx-up-primary, #2563eb);
        border-color: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 340px;
      }
      .dropdown .search {
        flex-shrink: 0;
        min-height: 34px;
      }
      .options-list {
        flex: 1;
        overflow-y: auto;
      }
      .bulk-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
        flex-shrink: 0;
      }
      .bulk-btn {
        all: unset;
        font-size: 12px;
        font-weight: 500;
        color: var(--sfx-up-primary, #2563eb);
        cursor: pointer;
      }
      .bulk-btn:hover {
        text-decoration: underline;
      }
      .bulk-btn--muted {
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `],et._EMPTY=[],et);Ns([g({attribute:!1})],Gi.prototype,"allowedValues");Ns([P()],Gi.prototype,"_open");Ns([P()],Gi.prototype,"_search");Ns([P()],Gi.prototype,"_activeIndex");let Sp=Gi;ie("sfx-meta-multi-select-field",Sp);function wt(r,e){var t,i;return((t=r.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Ol(r){return r.trim().replace(/\s+/g," ")}function Cp(r){return Ol(r).replace(/\s/g,"-")}function as(r){return{label:Ol(r),value:Cp(r)}}var Ep=Object.defineProperty,ui=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Ep(e,t,s),s};const Uo=class Uo extends Se{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,s;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(s=this.autocomplete)==null||s.search(this.field.ckey,t,o=>{this._results=o,this._loading=!1})}_addTag(e){if(this._tags.some(i=>wt(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!wt(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(as(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(as(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var o;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((o=this.field)==null?void 0:o.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!t.some(a=>wt(a,n))).filter(n=>!e||n.label.toLowerCase().includes(e)),s=this._results.filter(n=>!t.some(a=>wt(a,n))&&!i.some(a=>wt(a,n)));return[...i,...s]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=as(e);return!this._tags.some(i=>wt(i,t))&&!this._suggestions.some(i=>wt(i,t))}render(){var s,o;const e=this._tags,t=this._suggestions,i=t.length;return u`
      <div
        class="container"
        @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}
      >
        ${e.map(n=>u` <span class="chip">
              ${n.label}
              <button
                class="chip-x"
                aria-label=${T("removeItem","Remove {{item}}",{item:n.label})}
                @click=${a=>{a.stopPropagation(),this._removeTag(n)}}
              >
                &times;
              </button>
            </span>`)}
        <input
          class="input"
          type="text"
          .value=${this._query}
          role="combobox"
          aria-expanded=${this._dropdownOpen}
          aria-haspopup="listbox"
          aria-label=${((s=this.field)==null?void 0:s.title)??T("tags","Tags")}
          placeholder=${e.length?"":((o=this.field)==null?void 0:o.placeholder)||T("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?u`
            <div class="dropdown" role="listbox">
              ${this._loading?u`<div class="loading">${T("loading","Loading")}</div>`:v}
              ${t.map((n,a)=>u` <div
                    class="option ${a===this._activeIndex?"active":""}"
                    role="option"
                    @mousedown=${l=>{l.preventDefault(),this._addTag(n)}}
                    @mouseenter=${()=>{this._activeIndex=a}}
                  >
                    ${n.label}
                  </div>`)}
              ${this._canCreate?u` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${n=>{n.preventDefault(),this._addTag(as(this._query))}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${T("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
                  </div>`:v}
              ${!this._loading&&!t.length&&!this._canCreate?u`<div class="empty">${T("noResults","No results")}</div>`:v}
            </div>
          `:v}
    `}};Uo.styles=[vo,q`
      :host {
        display: block;
        position: relative;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover,
      .option.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }

      .loading,
      .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let it=Uo;ui([g({attribute:!1})],it.prototype,"autocomplete");ui([P()],it.prototype,"_query");ui([P()],it.prototype,"_results");ui([P()],it.prototype,"_loading");ui([P()],it.prototype,"_dropdownOpen");ui([P()],it.prototype,"_activeIndex");ie("sfx-meta-tags-field",it);var Pp=Object.defineProperty,Il=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Pp(e,t,s),s};const kt=()=>[{label:T("booleanTrue","True"),value:"true"},{label:T("booleanFalse","False"),value:"false"}],Do=class Do extends Se{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=kt().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(kt().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,kt().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=kt().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<kt().length&&(e.preventDefault(),this._onSelect(kt()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return u`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._currentLabel?u`<span class="trigger-value">${this._currentLabel}</span>`:u`<span class="placeholder"
              >${((i=this.field)==null?void 0:i.placeholder)||t}</span
            >`}
        ${this._currentLabel&&!this.disabled?u`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${T("clear","Clear")}
                @click=${this._clear}
                @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._clear(s))}}
                >&times;</span
              >
            `:v}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      ${this._open?u`
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${kt().map((s,o)=>u` <div
                    class="option ${s.value===e?"selected":""} ${o===this._activeIndex?"active":""}"
                    role="option"
                    aria-selected=${s.value===e}
                    @mousedown=${n=>{n.preventDefault(),this._onSelect(s)}}
                    @mouseenter=${()=>{this._activeIndex=o}}
                  >
                    ${s.label}
                  </div>`)}
            </div>
          `:v}
    `}};Do.styles=[Vi];let Ii=Do;Il([P()],Ii.prototype,"_open");Il([P()],Ii.prototype,"_activeIndex");ie("sfx-meta-boolean-field",Ii);const zo=class zo extends Se{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return u`
      <input
        type="number"
        step=${this._step}
        inputmode=${this._inputMode}
        .value=${String(this.value??"")}
        placeholder=${((e=this.field)==null?void 0:e.placeholder)??""}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};zo.styles=[Mt];let Pr=zo;ie("sfx-meta-number-field",Pr);const Mo=class Mo extends Se{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return u`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?u`<span class="date-placeholder">${T("pickADate","Pick a date")}</span>`:v}
        <span class="date-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};Mo.styles=[Mt,q`
      .date-wrap {
        position: relative;
        width: 100%;
      }

      .date-wrap input[type='date'] {
        padding-right: 32px;
        color: var(--sfx-up-text, #1e293b);
      }

      /* Hide native calendar indicator but keep it clickable across the field */
      .date-wrap input[type='date']::-webkit-calendar-picker-indicator {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      /* Empty state: hide the native dd/mm/yyyy text so the placeholder shows */
      .date-wrap input[type='date'].is-empty::-webkit-datetime-edit {
        opacity: 0;
      }

      .date-placeholder {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      }

      /* Firefox doesn't support ::-webkit-datetime-edit so it can't hide
         the native placeholder — hide the custom one to avoid overlap. */
      @supports (-moz-appearance: none) {
        .date-placeholder {
          display: none;
        }
      }

      .date-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
      }

      .date-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    `];let Tr=Mo;ie("sfx-meta-date-field",Tr);const Bo=class Bo extends Se{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,s={...this._geo,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_renderInput(e,t){return u`
      <div>
        <label for="geo-${e}" title=${t}>${t}</label>
        <input
          id="geo-${e}"
          type="number"
          step="any"
          inputmode="decimal"
          aria-label=${t}
          .value=${this._geo[e]}
          ?disabled=${this.disabled}
          @input=${i=>this._onInput(e,i)}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>
    `}render(){return u`
      <div class="grid">
        ${this._renderInput("latitude",T("latitude","Latitude"))}
        ${this._renderInput("longitude",T("longitude","Longitude"))}
      </div>
    `}};Bo.styles=[Mt,q`
      :host {
        display: block;
        container-type: inline-size;
        container-name: sfx-geo-point;
      }
      .grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 12px;
      }

      @container sfx-geo-point (max-width: 180px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }
      label {
        display: block;
        font-size: 12px;
        line-height: 1;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `];let Ar=Bo;ie("sfx-meta-geo-point-field",Ar);var Tp=Object.defineProperty,Ap=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Tp(e,t,s),s};const Rp={horizontal:"50",vertical:"50"},Op=Sl(),Ip=u`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M12 17v5" />
  <path
    d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
  />
</svg>`,jo=class jo extends Se{constructor(){super(...arguments),this.picking=!1,this._onZoneEnter=()=>this._emitDetail("field-hover",{hovering:!0}),this._onZoneLeave=()=>this._emitDetail("field-hover",{hovering:!1})}get _point(){const e=this.value;return{horizontal:(e==null?void 0:e.horizontal)??"",vertical:(e==null?void 0:e.vertical)??""}}get _hasValue(){const e=this._point;return e.horizontal!==""||e.vertical!==""}_onInput(e,t){const i=t.target.value,s={...this._point,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._point)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_onTogglePicking(){this._emitDetail("focus-point-pick-toggle",{picking:!this.picking})}_onResetToCenter(){this.value={...Rp},this._emit("field-change",this.value),this._emit("field-blur",this.value)}_renderInput(e,t){return u`
      <div
        class="coord"
        @mouseenter=${this._onZoneEnter}
        @mouseleave=${this._onZoneLeave}
      >
        <label for="fp-${e}" title=${t}>${t}</label>
        <div class="input-wrap">
          <input
            id="fp-${e}"
            type="number"
            step="any"
            min="0"
            inputmode="decimal"
            aria-label=${t}
            .value=${this._point[e]}
            ?disabled=${this.disabled}
            @input=${i=>this._onInput(e,i)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
          <span class="suffix" aria-hidden="true">%</span>
        </div>
      </div>
    `}render(){const e=this.picking?T("focusPointPicking","Picking on image"):this._hasValue?T("focusPointChange","Change the point"):T("focusPointSet","Set focal point");return u`
      <div class="grid">
        ${this._renderInput("horizontal",T("focusPointHorizontal","Horizontal"))}
        ${this._renderInput("vertical",T("focusPointVertical","Vertical"))}
      </div>

      <div class="actions">
        <button
          type="button"
          class="action"
          aria-pressed=${this.picking?"true":"false"}
          ?disabled=${this.disabled}
          @mouseenter=${this._onZoneEnter}
          @mouseleave=${this._onZoneLeave}
          @mousedown=${t=>t.preventDefault()}
          @click=${this._onTogglePicking}
        >
          ${this.picking?Ip:Op}
          <span class="action-label">${e}</span>
        </button>
        ${this._hasValue?u`<button
              type="button"
              class="action action-muted"
              ?disabled=${this.disabled}
              @mouseenter=${this._onZoneEnter}
              @mouseleave=${this._onZoneLeave}
              @mousedown=${t=>t.preventDefault()}
              @click=${this._onResetToCenter}
            >
              <span class="action-label">${T("focusPointResetCenter","Reset to center")}</span>
            </button>`:v}
      </div>

      ${this.picking?u`<div class="hint">
            ${T("focusPointPickingHint","Click the image preview to place the focus point.")}
          </div>`:v}
    `}};jo.styles=[Mt,q`
      :host {
        display: block;
        container-type: inline-size;
        container-name: sfx-focus-point;
      }
      .grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 12px;
      }

      @container sfx-focus-point (max-width: 180px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }
    
        .input-wrap input {
          -moz-appearance: textfield;
          appearance: textfield;
          padding-right: 26px;
        }
        .suffix {
          right: 10px;
        }
      }
      label {
        display: block;
        font-size: 12px;
        line-height: 1;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .input-wrap {
        position: relative;
      }

      .input-wrap input {
        padding-right: 26px;
      }

      .suffix {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
        background: var(--sfx-up-bg, #fff);
        padding-left: 2px;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px 12px;
        margin-top: 8px;
      }
      .action {
        all: unset;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
        color: var(--sfx-up-primary, #2563eb);
        min-width: 0;
      }
      .action-label {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .action:hover {
        opacity: 0.8;
      }
      .action:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        border-radius: 4px;
      }
      .action[disabled] {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .action svg {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
      }
      .action-muted {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-weight: 400;
      }

      .hint {
        margin-top: 6px;
        font-size: 11px;
        line-height: 1.3;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let Ps=jo;Ap([g({type:Boolean})],Ps.prototype,"picking");ie(Yu,Ps);var Fp=Object.defineProperty,He=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Fp(e,t,s),s};const qt={uuid:"__root__",name:"",ltree:""},No=class No extends Se{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[qt],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var s,o,n;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((s=this.field)==null?void 0:s.ckey)??((o=this.field)==null?void 0:o.key)}" model:`,(n=this.field)==null?void 0:n.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[qt];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[qt];const i=t.slice(0,-1),o=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),n=[qt];let a="";for(let l=0;l<i.length;l++)a=a?`${a}.${i[l]}`:i[l],n.push({uuid:`__seed_${a}`,name:o[l]??i[l],ltree:a});return n}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,s=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=s.nodes,this._loading=!1;const o=this._selectedScalar,n=o?this._currentNodes.findIndex(a=>a.uuid===o||a.slug===o):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){var s;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(s=this.taxonomyService)==null||s.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,o=>{i===this._searchSeq&&(this._searchResults=o,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(s=>s.uuid!==qt.uuid).map(s=>s.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const o=this._currentNodes[this._activeIndex];o.children.count_direct>0&&(e.preventDefault(),this._drillInto(o))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const o=this._searchResults[this._activeIndex];o&&this._selectAutocomplete(o)}else{const o=this._currentNodes[this._activeIndex];o&&this._selectTreeNode(o)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?v:u`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const s=i===e.length-1,o=t.uuid===qt.uuid?T("rootNode","Root"):t.name;return u`
            ${i>0?u`<span class="crumb-sep">›</span>`:v}
            <button
              class="crumb ${s?"current":""}"
              type="button"
              ?disabled=${s}
              @click=${()=>!s&&this._jumpToCrumb(i)}
            >
              ${o}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return u`<div class="empty">${T("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return u`<div class="empty">${T("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return u`<div class="empty">${T("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return u`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const s=t.children.count_direct>0,o=!!e&&(e===t.uuid||e===t.slug);return u`
            <div
              class="tree-row ${i===this._activeIndex?"active":""} ${o?"selected":""}"
              role="option"
              aria-selected=${o}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>s?this._drillInto(t):this._selectTreeNode(t)}
            >
              <span
                class="tree-radio ${o?"checked":""}"
                role="button"
                aria-label=${T("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${s?u`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:v}
              <span class="tree-chevron ${s?"":"hidden"}" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          `})}
      </div>
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?u`<div class="empty">${T("loading","Loading")}</div>`:this._searchResults.length===0?u`<div class="empty">${T("noResults","No results")}</div>`:u`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>u`
            <div
              class="ac-row ${t===this._activeIndex?"active":""}"
              role="option"
              @mouseenter=${()=>{this._activeIndex=t}}
              @click=${()=>this._selectAutocomplete(e)}
            >
              <span class="ac-tag">${e.tag}</span>
              ${e.path&&e.path!==e.tag?u`<span class="ac-path">${e.path}</span>`:v}
            </div>
          `)}
      </div>
    `}render(){var s;if(!this._taxonomySuid)return u`<div class="misconfigured" role="alert">
        ${T("missingTaxonomyConfig","Field is missing taxonomy config")}
      </div>`;const e=this._selectPlaceholder(T("selectANode","Select a node")),t=this._displayPath,i=!!t;return u`
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${o=>{!this._open&&(o.key==="ArrowDown"||o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._openDropdown())}}
      >
        ${i?u`<span class="trigger-value" title=${t}>${t}</span>`:u`<span class="placeholder"
              >${((s=this.field)==null?void 0:s.placeholder)||e}</span
            >`}
        ${i&&!this.disabled?u`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${T("clear","Clear")}
                @click=${this._clear}
                @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._clear(o))}}
                >&times;</span
              >
            `:v}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      ${this._open?u`
            <div class="dropdown taxo" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                aria-label=${T("searchTaxonomy","Search taxonomy")}
                placeholder=${T("search","Search")}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?v:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:v}
    `}};No.styles=[Vi,q`
      .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2px;
        padding: 8px 10px;
        border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .crumb {
        background: none;
        border: none;
        padding: 2px 4px;
        font-family: inherit;
        font-size: 12px;
        color: var(--sfx-up-text-secondary, #64748b);
        cursor: pointer;
        border-radius: 4px;
      }
      .crumb:hover {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .crumb.current {
        color: var(--sfx-up-text, #1e293b);
        font-weight: 500;
        cursor: default;
      }
      .crumb.current:hover {
        background: none;
      }
      .crumb-sep {
        color: var(--sfx-up-text-muted, #94a3b8);
        user-select: none;
      }

      .tree-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        font-size: 14px;
        color: var(--sfx-up-text, #1e293b);
        cursor: pointer;
      }
      .tree-row:hover,
      .tree-row.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .tree-row.selected {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }
      .tree-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tree-count {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 13px;
      }
      .tree-radio {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
      .tree-radio.checked {
        border-color: var(--sfx-up-primary, #2563eb);
      }
      .tree-radio.checked::after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--sfx-up-primary, #2563eb);
      }
      .tree-chevron {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .tree-chevron svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .tree-chevron.hidden {
        visibility: hidden;
      }

      .ac-row {
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .ac-row:hover,
      .ac-row.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .ac-tag {
        font-weight: 500;
      }
      .ac-path {
        font-size: 11px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .dropdown.taxo {
        max-height: 320px;
        display: flex;
        flex-direction: column;
      }
      .dropdown.taxo > .search,
      .dropdown.taxo > .breadcrumb {
        flex-shrink: 0;
      }
      .scroll {
        overflow-y: auto;
      }

      .misconfigured {
        padding: 8px 10px;
        border: 1px dashed var(--sfx-up-error, #dc2626);
        border-radius: 6px;
        font-size: 13px;
        color: var(--sfx-up-error, #dc2626);
      }
    `];let Pe=No;He([g({attribute:!1})],Pe.prototype,"taxonomyService");He([g({attribute:!1})],Pe.prototype,"entry");He([P()],Pe.prototype,"_open");He([P()],Pe.prototype,"_query");He([P()],Pe.prototype,"_drillStack");He([P()],Pe.prototype,"_currentNodes");He([P()],Pe.prototype,"_searchResults");He([P()],Pe.prototype,"_loading");He([P()],Pe.prototype,"_activeIndex");He([P()],Pe.prototype,"_resolvedTaxonomyUuid");He([P()],Pe.prototype,"_taxonomyResolutionFailed");ie("sfx-meta-taxonomy-node-field",Pe);var Lp=Object.defineProperty,Ve=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Lp(e,t,s),s};const Up=(r,e)=>!!(e.uuid&&r.uuid===e.uuid||e.sid&&r.sid===e.sid||e.slug&&r.slug===e.slug),qo=class qo extends Se{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set,this._resolvedLookup={bySid:{},bySlug:{}},this._resolvingKeys=new Set}get _items(){if(!Array.isArray(this.value))return[];const e=this.value.map(t=>typeof t=="string"?Cu(t)?{sid:t}:{slug:t}:t);return Pu(e,this._resolvedLookup)}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichMissingLabels()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichMissingLabels()}async _maybeEnrichMissingLabels(){var d;const e=this.ultratags,t=(d=this.field)==null?void 0:d.key;if(!e||!t)return;const i=this._items;if(i.length===0)return;const s=[],o=[];for(const c of i)c.i18n||(c.sid?this._enrichmentAttempted.has(c.sid)||s.push(c.sid):c.slug&&!this._enrichmentAttempted.has(c.slug)&&o.push(c.slug));if(s.length===0&&o.length===0)return;const n=[...s,...o];for(const c of n)this._enrichmentAttempted.add(c);this._resolvingKeys=new Set([...this._resolvingKeys,...n]);const a=[];if(s.length>0)try{const c=await e.getBySids({sids:s,format:dr});a.push(...c.items||[])}catch{}if(o.length>0)try{const c=await e.getBySlugs({slugs:o,meta:t,format:dr});a.push(...c.items||[])}catch{}const l=new Set(this._resolvingKeys);for(const c of n)l.delete(c);this._resolvingKeys=l,a.length!==0&&(this._resolvedLookup=Wn(this._resolvedLookup,Gn(a)))}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return Cs(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}_isResolving(e){return e.i18n?!1:!!e.sid&&this._resolvingKeys.has(e.sid)||!!e.slug&&this._resolvingKeys.has(e.slug)}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=o=>!!o.uuid&&e.has(o.uuid)||!!o.sid&&e.has(o.sid)||e.has(o.slug),s=(this._isRestricted?this._restrictedEntries:this._results).filter(o=>!t(o)).map(o=>({entry:o,label:Cs(o,this._currentLang,this._defaultLang).value||o.slug}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?s.filter(n=>n.label.toLowerCase().includes(o)):s}return s}get _isSearching(){return this._query.trim().length>=Kn}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=Yn(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(s=>s.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var o,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((o=this.field)!=null&&o.key)){this._results=[],this._loading=!1,(n=this.ultratags)==null||n.cancel();return}const i=this.ultratags;if(!i)return;const s=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:s,limit:wu,format:dr}).then(a=>{this._query.trim().toLowerCase()===s&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===s&&(this._results=[],this._loading=!1)})}_appendResolvedEntry(e){const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n};this._resolvedLookup=Wn(this._resolvedLookup,Gn([e]));const i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".input"))==null||s.focus()})}_addEntry(e){this._entryAlreadySelected(e)||this._appendResolvedEntry(e)}async _createFromQuery(){var o,n;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((o=this.field)!=null&&o.key))return;const i=Yn(e);if(!i)return;const s=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:$u.UPSERT,items:[{slug:i,i18n:{[s]:e}}]}),l=(n=a==null?void 0:a.output)==null?void 0:n[0],d={slug:(l==null?void 0:l.slug)||i,sid:l==null?void 0:l.sid,uuid:l==null?void 0:l.uuid,i18n:(l==null?void 0:l.i18n)||{[s]:e}};if(this._entryAlreadySelected({uuid:d.uuid||"",sid:d.sid,slug:d.slug||i}))return;this._appendResolvedEntry(d)}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!Up(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var n,a;const e=this._items,t=this._dropdownOptions,i=t.length,s=this._query.trim(),o=((n=this.field)==null?void 0:n.placeholder)||(this._isRestricted?T("searchTagsToRemove","Search tags to remove"):T("addCustomTags","Add custom tags"));return u`
      <div
        class="container"
        @click=${()=>{var l;return(l=this.renderRoot.querySelector(".input"))==null?void 0:l.focus()}}
      >
        ${e.map(l=>{const d=this._isResolving(l),c=d?"":this._labelForItem(l),p=l.uuid||l.sid||l.slug||c;return u` <span
            class="chip ${d?"chip-loading":""}"
            title=${d?T("loading","Loading"):c}
            aria-busy=${d}
          >
            ${d?u`<span class="chip-skeleton"></span>`:c}
            <button
              class="chip-x"
              aria-label=${T("removeItem","Remove {{item}}",{item:d?p:c})}
              @click=${h=>{h.stopPropagation(),this._removeItem(l)}}
            >
              &times;
            </button>
          </span>`})}
        <input
          class="input"
          type="text"
          .value=${this._query}
          role="combobox"
          aria-expanded=${this._dropdownOpen}
          aria-haspopup="listbox"
          aria-label=${((a=this.field)==null?void 0:a.title)??T("customTags","Custom tags")}
          placeholder=${e.length?"":o}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen?u`
            <div class="dropdown" role="listbox">
              ${!this._isRestricted&&!this._isSearching?u`<div class="hint">
                    ${T("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:Kn})}
                  </div>`:v}
              ${!this._isRestricted&&this._isSearching&&this._loading?u`<div class="loading">${T("loading","Loading")}</div>`:v}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((l,d)=>u` <div
                        class="option ${d===this._activeIndex?"active":""}"
                        role="option"
                        @mousedown=${c=>{c.preventDefault(),this._addEntry(l.entry)}}
                        @mouseenter=${()=>{this._activeIndex=d}}
                      >
                        ${l.label}
                      </div>`):v}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?u`<div class="empty">${T("noResults","No results")}</div>`:v}
              ${this._canCreate?u` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${l=>{l.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${T("createTag","Create '{{tag}}'",{tag:s})}
                  </div>`:v}
            </div>
          `:v}
    `}};qo.styles=[vo,q`
      :host {
        display: block;
        position: relative;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 240px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover,
      .option.active {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
        border-top: 1px solid var(--sfx-up-border, #e2e8f0);
      }
      .option .label-fallback {
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 12px;
        margin-left: 6px;
      }

      .loading,
      .empty,
      .hint {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .chip-loading {
        background: var(--sfx-up-hover, #f1f5f9);
      }
      .chip-skeleton {
        display: inline-block;
        width: 42px;
        height: 10px;
        border-radius: 4px;
        background: var(--sfx-up-text-muted, #94a3b8);
        opacity: 0.35;
        animation: sfx-chip-pulse 1.2s ease-in-out infinite;
      }
      @keyframes sfx-chip-pulse {
        0%,
        100% {
          opacity: 0.25;
        }
        50% {
          opacity: 0.5;
        }
      }
    `];let Te=qo;Ve([g({attribute:!1})],Te.prototype,"ultratags");Ve([g({attribute:!1})],Te.prototype,"language");Ve([g({attribute:!1})],Te.prototype,"defaultLanguage");Ve([g({attribute:!1})],Te.prototype,"restrictToItems");Ve([P()],Te.prototype,"_query");Ve([P()],Te.prototype,"_results");Ve([P()],Te.prototype,"_loading");Ve([P()],Te.prototype,"_dropdownOpen");Ve([P()],Te.prototype,"_activeIndex");Ve([P()],Te.prototype,"_resolvedLookup");Ve([P()],Te.prototype,"_resolvingKeys");ie("sfx-meta-ultratags-field",Te);const xo=()=>T("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Fl=u`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${Q`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,Ho=class Ho extends G{constructor(){super(...arguments),this._i18nController=new We(this)}render(){const e=xo();return u`
      <div class="unsupported" title=${e} aria-label=${e} aria-disabled="true" role="note">
        ${Fl}
        <span class="unsupported-text" aria-hidden="true"
          >${T("notEditableDuringUpload","Not editable during upload")}</span
        >
      </div>
    `}};Ho.styles=q`
    :host {
      display: block;
    }
    .unsupported {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 36px;
      padding: 0 10px;
      border: 1px dashed var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-surface, #f8fafc);
      box-sizing: border-box;
      cursor: not-allowed;
      user-select: none;
    }
    .unsupported svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .unsupported-text {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;let Rr=Ho;ie("sfx-meta-unsupported-field",Rr);var Dp=Object.defineProperty,Ke=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Dp(e,t,s),s};const Vo=class Vo extends G{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(qi(e))return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return u`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`;case"textarea":return u`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-textarea-field>`;case"select-one":return u`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return u`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${i}
        ></sfx-meta-multi-select-field>`;case"tags":return u`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${i}
        ></sfx-meta-tags-field>`;case"ultratags":return u`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}
        ></sfx-meta-ultratags-field>`;case"taxonomy-node":return u`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${i}
        ></sfx-meta-taxonomy-node-field>`;case"boolean":return u`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return u`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-number-field>`;case"date":return u`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-date-field>`;case"geopoint":return u`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-geo-point-field>`;case"focus-point":return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;default:return u`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}};Vo.styles=q`
    :host {
      display: block;
    }
  `;let Ae=Vo;Ke([g({attribute:!1})],Ae.prototype,"field");Ke([g({attribute:!1})],Ae.prototype,"value");Ke([g({attribute:!1})],Ae.prototype,"autocomplete");Ke([g({attribute:!1})],Ae.prototype,"taxonomyService");Ke([g({attribute:!1})],Ae.prototype,"taxonomyEntry");Ke([g({attribute:!1})],Ae.prototype,"ultratags");Ke([g({attribute:!1})],Ae.prototype,"language");Ke([g({attribute:!1})],Ae.prototype,"defaultLanguage");Ke([g({attribute:!1})],Ae.prototype,"ultratagsRestrictToItems");Ke([g({attribute:!1})],Ae.prototype,"allowedValues");Ke([g({type:Boolean})],Ae.prototype,"disabled");ie("sfx-metadata-field-edit",Ae);var zp=Object.defineProperty,Wi=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&zp(e,t,s),s};const Ko=class Ko extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.taxonomyEntry=null}_formatValue(){var i,s,o,n;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(s=this.field.possible_values)==null?void 0:s.find(l=>l.internal_unique_value===e||l.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var d;const l=(d=this.field.possible_values)==null?void 0:d.find(c=>c.internal_unique_value===a||c.api_value===a);return(l==null?void 0:l.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",l=this.defaultLanguage||a;return e.map(d=>typeof d=="string"?d:Cs({i18n:d.i18n,slug:d.slug||""},a,l).value||d.slug||d.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(o=this.taxonomyEntry)!=null&&o.path?this.taxonomyEntry.path:(n=this.taxonomyEntry)!=null&&n.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"focus-point":{const a=e;return!a||a.horizontal===""||a.horizontal==null||a.vertical===""||a.vertical==null?"":`${a.horizontal}% × ${a.vertical}%`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&qi(this.field))return u`
        <div class="value empty" title=${xo()}>
          ${T("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?u`
        <div class="value">
          <a
            class="link"
            href=${e}
            target="_blank"
            rel="noopener noreferrer"
            @click=${s=>s.stopPropagation()}
            >${e}</a
          >
        </div>
      `:u`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Ko.styles=q`
    :host {
      display: block;
    }
    .value {
      min-height: 28px;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
      word-break: break-word;
      line-height: 1.4;
    }
    .empty {
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .link {
      color: var(--sfx-up-primary, #2563eb);
      text-decoration: none;
      max-width: 100%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link:hover {
      text-decoration: underline;
    }
  `;let ft=Ko;Wi([g({attribute:!1})],ft.prototype,"field");Wi([g({attribute:!1})],ft.prototype,"value");Wi([g({attribute:!1})],ft.prototype,"taxonomyEntry");Wi([g({attribute:!1})],ft.prototype,"language");Wi([g({attribute:!1})],ft.prototype,"defaultLanguage");ie("sfx-metadata-field-view",ft);var Mp=Object.defineProperty,qs=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Mp(e,t,s),s};const Yo=class Yo extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const s of t.variants)e.push({groupUuid:t.uuid,value:s.api_value,label:s.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var s;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const o of t){const n=this.selectedFilters[o.uuid]??((s=o.variants[0])==null?void 0:s.api_value),a=o.variants.find(l=>l.api_value===n);a&&i.push(t.length===1?a.label:`${o.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return v;const t=this._options,i=T("regionalFiltersDropdownLabel","Regional settings"),s=this._triggerSummary(i);return u`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${i} — ${s}`}
        title=${s}
        @click=${this._toggle}
        @keydown=${this._onKeydown}
      >
        <span class="trigger-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path
              d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            />
          </svg>
        </span>
        <span class="trigger-label">${i}</span>
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      ${this._open?u`
            <div class="dropdown" role="listbox" aria-label=${i}>
              ${t.map((o,n)=>this._renderOption(o,n,o.value===this.selectedFilters[o.groupUuid]))}
            </div>
          `:v}
    `}_renderOption(e,t,i){const s=this._activeIndex===t;return u`
      ${e.isGroupStart?u`<div class="group-header">${e.groupLabel}</div>`:v}
      <div
        class="option ${i?"selected":""} ${s?"active":""}"
        role="option"
        aria-selected=${i}
        @mouseenter=${()=>{this._activeIndex=t}}
        @click=${()=>this._onSelect(e)}
      >
        <span class="option-check" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span>${e.label}</span>
      </div>
    `}};Yo.styles=[Vi,q`
      :host {
        display: inline-block;
        position: relative;
      }

      /* Borderless trigger — Globe icon + "Regional settings" label +
         chevron. Sits beside the other header buttons but is wider because
         the label needs room. Filled background only on hover. */
      .trigger {
        /* Use min-height — not a fixed height — so descenders (g, j, p, y)
           in the label aren't clipped at the bottom. Line-height stays
           normal so the line box can fit the full glyph + descender. */
        min-height: 30px;
        padding: 4px 10px;
        border: none;
        border-radius: 8px;
        background: none;
        color: var(--sfx-up-text-secondary, #64748b);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.4;
        cursor: pointer;
        white-space: nowrap;
        transition:
          background 0.15s,
          color 0.15s;
      }
      .trigger:hover {
        background: var(--sfx-up-border, #e2e8f0);
        color: var(--sfx-up-text, #1e293b);
      }
      .trigger:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        box-shadow: none;
      }
      .trigger-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        display: block;
        color: inherit;
      }
      .trigger-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-label {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .trigger-chevron {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .trigger-chevron svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-chevron.open {
        transform: rotate(180deg);
      }

      .dropdown {
        right: 0;
        left: auto;
        min-width: 220px;
        max-height: 320px;
      }
      .group-header {
        padding: 8px 10px 4px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option-check {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-primary, #2563eb);
        opacity: 0;
      }
      .option.selected .option-check {
        opacity: 1;
      }
      .option-check svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      /* Responsive — at narrow widths collapse to the icon only so the
         label doesn't crowd the close button. */
      @media (max-width: 768px) {
        .trigger {
          height: 28px;
          padding: 0 6px;
          gap: 4px;
          font-size: 12px;
        }
        .trigger-icon {
          width: 16px;
          height: 16px;
        }
      }
      @media (max-width: 480px) {
        .trigger {
          padding: 0 6px;
        }
        .trigger-label {
          display: none;
        }
        .trigger-chevron {
          display: none;
        }
      }
    `];let Ft=Yo;qs([g({attribute:!1})],Ft.prototype,"groups");qs([g({attribute:!1})],Ft.prototype,"selectedFilters");qs([P()],Ft.prototype,"_open");qs([P()],Ft.prototype,"_activeIndex");ie("sfx-regional-settings",Ft);const yo="system.tags",Bp="__tags__";function Or(r){return r===yo}function jp(r){return{key:yo,ckey:"",uuid:"system-tags",title:r("tagsLabel","Tags"),type:"tags",placeholder:r("addTags","Add tags"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Np(r,e){const t=jp(e);let i=!1,s=r.groups.map(a=>!i&&a.isRoot?(i=!0,{...a,fields:[...a.fields,t]}):a);i||(s=[{uuid:Bp,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...s]);const o=s.flatMap(a=>a.fields),n=new Map(o.map(a=>[a.key,a]));return{...r,groups:s,fields:o,fieldsByKey:n}}var qp=Object.defineProperty,Ji=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&qp(e,t,s),s};const Hp=(r,e)=>typeof e=="string"?e:r,Go=class Go extends G{constructor(){super(...arguments),this.product={},this.disabled=!1,this.t=Hp,this._collapsed=!1,this._errors={}}willUpdate(e){e.has("product")&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent("product-blur",{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;const t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError("ref")}_onRefBlur(e){const t=e.target.value,i=Lu(t);if(i){this._errors={...this._errors,ref:i};return}this._clearError("ref"),this._emit("ref",t===""?void 0:t)}_onPositionInput(){this._clearError("position")}_onPositionBlur(e){const t=e.target.value,i=Uu(t);if(i){this._errors={...this._errors,position:i};return}this._clearError("position"),t===""||t==null?this._emit("position",void 0):this._emit("position",Number(t))}_onKeydown(e){var t,i;if(e.key==="Enter")e.target.blur();else if(e.key==="Escape"){const s=e.target,o=s.dataset.key;o==="ref"&&(s.value=((t=this.product)==null?void 0:t.ref)??""),o==="position"&&(s.value=((i=this.product)==null?void 0:i.position)==null?"":String(this.product.position)),o&&this._clearError(o),s.blur()}}_renderRow(e,t,i){const s=this._errors[e],o=s?this.t(s,s):"";return u`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${i}
          ${s?u`<div class="field-error" role="alert">${o}</div>`:v}
        </div>
      </div>
    `}render(){var s,o;const e=!this._collapsed,t=((s=this.product)==null?void 0:s.ref)??"",i=((o=this.product)==null?void 0:o.position)==null?"":String(this.product.position);return u`
      <div class="group">
        <button class="group-header" @click=${this._toggle} aria-expanded=${e}>
          <span>${this.t("productFieldsLabel","Product")}</span>
          <svg
            class="chevron ${e?"open":""}"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
        ${e?u`
              <div class="group-content">
                ${this._renderRow("ref",this.t("productRefLabel","Product reference"),u`<input
                    type="text"
                    data-key="ref"
                    .value=${t}
                    placeholder=${this.t("productRefPlaceholder","e.g. SKU-12345")}
                    ?disabled=${this.disabled}
                    @input=${this._onRefInput}
                    @blur=${this._onRefBlur}
                    @keydown=${this._onKeydown}
                  />`)}
                ${this._renderRow("position",this.t("productPositionLabel","Position"),u`<input
                    type="number"
                    step="1"
                    inputmode="numeric"
                    data-key="position"
                    .value=${i}
                    placeholder=${this.t("productPositionPlaceholder","0")}
                    ?disabled=${this.disabled}
                    @input=${this._onPositionInput}
                    @blur=${this._onPositionBlur}
                    @keydown=${this._onKeydown}
                  />`)}
              </div>
            `:v}
      </div>
    `}};Go.styles=[Mt,Cl,q`
      :host {
        display: block;
      }

      .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 48px;
        padding: 0 16px;
        box-sizing: border-box;
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        color: var(--sfx-up-text, #1e293b);
        transition: background-color 0.12s ease;
      }
      .group-header:hover {
        background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
      }
      .group-header:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        border-radius: 4px;
      }
      .chevron {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .chevron.open {
        transform: rotate(180deg);
      }
      .group-content {
        padding: 0 16px 8px;
      }
    `];let gt=Go;Ji([g({attribute:!1})],gt.prototype,"product");Ji([g({type:Boolean})],gt.prototype,"disabled");Ji([g({attribute:!1})],gt.prototype,"t");Ji([P()],gt.prototype,"_collapsed");Ji([P()],gt.prototype,"_errors");ie("sfx-product-fields-form",gt);const ea={text:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${Q`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"focus-point":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><line x1="8" y1="4.5" x2="8" y2="6.5"/><line x1="8" y1="9.5" x2="8" y2="11.5"/><line x1="3.5" y1="8" x2="5.5" y2="8"/><line x1="10.5" y1="8" x2="12.5" y2="8"/><circle cx="8" cy="8" r="1.25"/>`}
  </svg>`,"integer-list":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${Q`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${Q`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Q`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Vp(r){return ea[r]??ea.text}function Kp(r,e,t){let s=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(s+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return s}function Yp(r,e){const t=new XMLHttpRequest;let i=!1;const s=Kp(e.apiBase,e.folder,e.extraParams);t.open("POST",s);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):si(n)?e.onComplete(oo(n,r)):e.onError(new Error(Ss(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const o=new FormData;if(r.file){const n={name:r.name,type:r.type};o.append("info[files[]]",JSON.stringify(n)),Object.keys(r.meta).length>0&&o.append("meta[files[]]",JSON.stringify(r.meta)),r.tags.length>0&&o.append("tags[files[]]",JSON.stringify(r.tags)),uo(r.product)&&o.append("product[files[]]",JSON.stringify(po(r.product))),o.append("files[]",r.file,r.name)}return t.send(o),{abort(){i=!0,t.abort()}}}function Hs(r){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":r}}function xt(r){return r.replace(/\/+$/,"")}const Gp={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Xi(r){return Gp[r]??r}function Gm(r,e){const t=xt(r),i=btoa(JSON.stringify({origin:window.location.origin})),s=Xi(e);return`${t}/${s}/connect?state=${encodeURIComponent(i)}`}async function Wp(r,e,t,i="",s){const o=xt(r),n=i?`/${i}`:"",a=Xi(e),l=await fetch(`${o}/${a}/list${n}`,{method:"GET",headers:Hs(t),credentials:"same-origin",signal:s});if(l.status===401)throw new _o;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Jp(r,e,t,i){const s=xt(r),o=await fetch(`${s}/${t}`,{method:"GET",headers:Hs(e),credentials:"same-origin",signal:i});if(o.status===401)throw new _o;if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${o.status})`)}return o.json()}async function Wm(r,e,t,i,s,o){const n=[];async function a(l,d){let c=null,p=!0;do{if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");const h=p?await Wp(r,e,t,l,o):await Jp(r,t,c,o);p=!1,c=h.nextPagePath;for(const f of h.items){if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");if(f.isFolder){const x=d?`${d}/${f.name}`:f.name;await a(f.requestPath,x)}else n.push({...f,relativeFolder:d})}}while(c)}return await a(i,s),n}async function Jm(r,e,t,i){const s=xt(r),o=Xi(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${s}/search/${o}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function Xp(r,e,t,i,s,o=!1){const n=xt(r),a=Xi(e),l=o?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,d=o?{Accept:"application/json","Content-Type":"application/json"}:Hs(t),c=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...s,httpMethod:s.httpMethod??"POST",useFormData:s.useFormData??!0,fieldname:s.fieldname??"files[]"})});if(c.status===401)throw new _o;if(!c.ok){const p=await c.json().catch(()=>null);throw new Error((p==null?void 0:p.message)||`Companion upload failed (HTTP ${c.status})`)}return c.json()}async function Zp(r,e,t){const i=xt(r),s=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!s.ok){const o=await s.json().catch(()=>null);throw new Error((o==null?void 0:o.message)||`Could not fetch URL metadata (HTTP ${s.status})`)}return s.json()}async function Qp(r,e,t,i){const s=xt(r),o=await fetch(`${s}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${o.status})`)}return o.json()}async function Xm(r,e,t){const i=xt(r),s=Xi(e),o=await fetch(`${i}/${s}/logout`,{method:"GET",headers:Hs(t),credentials:"same-origin"});return o.ok?o.json():{ok:!1,revoked:!1}}function eh(r){var s;const t=((s=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r))==null?void 0:s[1])??r;return`${/^https:\/\//i.test(r)?"wss":"ws"}://${t}`}class _o extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Ll(r,e,t){let s=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(s+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return s}function Ul(r,e){const t={name:r.name,type:r.type,"filerobot-folder":e};return r.meta&&Object.keys(r.meta).length>0&&(t.meta=JSON.stringify(r.meta)),r.tags&&r.tags.length>0&&(t.tags=JSON.stringify(r.tags)),uo(r.product)&&(t.product=JSON.stringify(po(r.product))),t}function Dl(r){const t=`${eh(r.companionUrl)}/api/${r.token}`;let i;try{i=new WebSocket(t)}catch{return r.onError(new Error("Failed to connect to upload progress channel")),null}let s=!1;const o=()=>{s=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,d;if(!s)try{const c=JSON.parse(n.data);switch(c.action){case"progress":{const p=c.payload,h=p.bytesUploaded??0,f=p.bytesTotal??(r.expectedSize||1);r.onProgress(h,f);break}case"success":{const p=c.payload;if(o(),i.close(),(a=p.response)!=null&&a.responseText)try{const h=JSON.parse(p.response.responseText);if(h.status==="success"){r.onComplete(h);return}if(si(h)){r.onComplete(oo(h,r.uploadFile));return}r.onError(new Error(Ss(h,"Upload failed")));return}catch{}r.onError(new Error("Upload completed but no valid response received"));break}case"error":{const p=c.payload;o(),i.close();let h=((l=p.error)==null?void 0:l.message)||"Upload failed";if((d=p.response)!=null&&d.responseText)try{const f=JSON.parse(p.response.responseText);h=Ss(f,h)}catch{}r.onError(new Error(h));break}}}catch{}},i.onerror=()=>{s||(o(),r.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{s||(o(),r.onError(new Error("Upload progress connection closed unexpectedly")))},i}function zl(r){if(r){r.onmessage=null,r.onerror=null,r.onclose=null;try{r.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}r.close()}}async function th(r,e,t,i,s,o,n){const a=r.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:s,size:o,metadata:n})});if(!l.ok){const d=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${d}`)}return l.json()}function ih(r,e){const t=r.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,s=null;const o=Ll(e.apiBase,e.folder,e.extraParams),n=Ul(r,e.folder);return(t.pickerAccessToken?th(t.companionUrl,t.pickerAccessToken,t.fileId,o,e.authHeaders,t.size,n):Xp(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:o,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(l=>{i||(s=Dl({companionUrl:t.companionUrl,token:l.token,uploadFile:r,expectedSize:t.size,onProgress:(d,c)=>{i||e.onProgress(d,c)},onComplete:d=>{i||e.onComplete(d)},onError:d=>{i||e.onError(d)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,zl(s),s=null}}}function sh(r,e){const t=r.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,s=null;const o=new AbortController,n=Ll(e.apiBase,e.folder,e.extraParams);return Zp(e.companionUrl,t,o.signal).then(a=>{var d;if(i)return null;(d=e.onMeta)==null||d.call(e,{name:a.name,type:a.type,size:a.size});const l=Ul(r,e.folder);return a.name&&!r.nameIsUserDefined&&(l.name=a.name),a.type&&(l.type=a.type),Qp(e.companionUrl,t,{fileId:r.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},o.signal).then(c=>({result:c,size:a.size}))}).then(a=>{i||!a||(s=Dl({companionUrl:e.companionUrl,token:a.result.token,uploadFile:r,expectedSize:a.size,onProgress:(l,d)=>{i||e.onProgress(l,d)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,o.abort(),zl(s),s=null}}}function Ir(r){"@babel/helpers - typeof";return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ir(r)}function rh(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function oh(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function nh(r,e,t){return e=Li(e),ah(r,wo()?Reflect.construct(e,t||[],Li(r).constructor):e.apply(r,t))}function ah(r,e){if(e&&(Ir(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return lh(r)}function lh(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function dh(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Fi(r,e)}function Fr(r){var e=typeof Map=="function"?new Map:void 0;return Fr=function(i){if(i===null||!uh(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,s)}function s(){return ch(i,arguments,Li(this).constructor)}return s.prototype=Object.create(i.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Fi(s,i)},Fr(r)}function ch(r,e,t){if(wo())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var s=new(r.bind.apply(r,i));return t&&Fi(s,t.prototype),s}function wo(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wo=function(){return!!r})()}function uh(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function Fi(r,e){return Fi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Fi(r,e)}function Li(r){return Li=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Li(r)}var xi=(function(r){function e(t){var i,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(oh(this,e),i=nh(this,e,[t]),i.originalRequest=o,i.originalResponse=n,i.causingError=s,s!=null&&(t+=", caused by ".concat(s.toString())),o!=null){var a=o.getHeader("X-Request-ID")||"n/a",l=o.getMethod(),d=o.getURL(),c=n?n.getStatus():"n/a",p=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(c,", response text: ").concat(p,", request id: ").concat(a,")")}return i.message=t,i}return dh(e,r),rh(e)})(Fr(Error));function Ui(r){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ui(r)}function ph(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function hh(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,gh(i.key),i)}}function fh(r,e,t){return e&&hh(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function gh(r){var e=mh(r,"string");return Ui(e)=="symbol"?e:e+""}function mh(r,e){if(Ui(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ui(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var vh=(function(){function r(){ph(this,r)}return fh(r,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Ml="3.7.8",bh=Ml,pi=typeof Buffer=="function",ta=typeof TextDecoder=="function"?new TextDecoder:void 0,ia=typeof TextEncoder=="function"?new TextEncoder:void 0,xh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",yi=Array.prototype.slice.call(xh),ls=(r=>{let e={};return r.forEach((t,i)=>e[t]=i),e})(yi),yh=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,ge=String.fromCharCode.bind(String),sa=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):r=>new Uint8Array(Array.prototype.slice.call(r,0)),Bl=r=>r.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),jl=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),Nl=r=>{let e,t,i,s,o="";const n=r.length%3;for(let a=0;a<r.length;){if((t=r.charCodeAt(a++))>255||(i=r.charCodeAt(a++))>255||(s=r.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|s,o+=yi[e>>18&63]+yi[e>>12&63]+yi[e>>6&63]+yi[e&63]}return n?o.slice(0,n-3)+"===".substring(n):o},ko=typeof btoa=="function"?r=>btoa(r):pi?r=>Buffer.from(r,"binary").toString("base64"):Nl,Lr=pi?r=>Buffer.from(r).toString("base64"):r=>{let t=[];for(let i=0,s=r.length;i<s;i+=4096)t.push(ge.apply(null,r.subarray(i,i+4096)));return ko(t.join(""))},fs=(r,e=!1)=>e?Bl(Lr(r)):Lr(r),_h=r=>{if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?ge(192|e>>>6)+ge(128|e&63):ge(224|e>>>12&15)+ge(128|e>>>6&63)+ge(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return ge(240|e>>>18&7)+ge(128|e>>>12&63)+ge(128|e>>>6&63)+ge(128|e&63)}},wh=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ql=r=>r.replace(wh,_h),ra=pi?r=>Buffer.from(r,"utf8").toString("base64"):ia?r=>Lr(ia.encode(r)):r=>ko(ql(r)),ti=(r,e=!1)=>e?Bl(ra(r)):ra(r),oa=r=>ti(r,!0),kh=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,$h=r=>{switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return ge((t>>>10)+55296)+ge((t&1023)+56320);case 3:return ge((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return ge((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},Hl=r=>r.replace(kh,$h),Vl=r=>{if(r=r.replace(/\s+/g,""),!yh.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let e,t,i,s=[];for(let o=0;o<r.length;)e=ls[r.charAt(o++)]<<18|ls[r.charAt(o++)]<<12|(t=ls[r.charAt(o++)])<<6|(i=ls[r.charAt(o++)]),t===64?s.push(ge(e>>16&255)):i===64?s.push(ge(e>>16&255,e>>8&255)):s.push(ge(e>>16&255,e>>8&255,e&255));return s.join("")},$o=typeof atob=="function"?r=>atob(jl(r)):pi?r=>Buffer.from(r,"base64").toString("binary"):Vl,Kl=pi?r=>sa(Buffer.from(r,"base64")):r=>sa($o(r).split("").map(e=>e.charCodeAt(0))),Yl=r=>Kl(Gl(r)),Sh=pi?r=>Buffer.from(r,"base64").toString("utf8"):ta?r=>ta.decode(Kl(r)):r=>Hl($o(r)),Gl=r=>jl(r.replace(/[-_]/g,e=>e=="-"?"+":"/")),Ur=r=>Sh(Gl(r)),Ch=r=>{if(typeof r!="string")return!1;const e=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Wl=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),Jl=function(){const r=(e,t)=>Object.defineProperty(String.prototype,e,Wl(t));r("fromBase64",function(){return Ur(this)}),r("toBase64",function(e){return ti(this,e)}),r("toBase64URI",function(){return ti(this,!0)}),r("toBase64URL",function(){return ti(this,!0)}),r("toUint8Array",function(){return Yl(this)})},Xl=function(){const r=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Wl(t));r("toBase64",function(e){return fs(this,e)}),r("toBase64URI",function(){return fs(this,!0)}),r("toBase64URL",function(){return fs(this,!0)})},Eh=()=>{Jl(),Xl()},Ph={version:Ml,VERSION:bh,atob:$o,atobPolyfill:Vl,btoa:ko,btoaPolyfill:Nl,fromBase64:Ur,toBase64:ti,encode:ti,encodeURI:oa,encodeURL:oa,utob:ql,btou:Hl,decode:Ur,isValid:Ch,fromUint8Array:fs,toUint8Array:Yl,extendString:Jl,extendUint8Array:Xl,extendBuiltins:Eh};var na=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Th(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cr,aa;function Ah(){return aa||(aa=1,cr=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),cr}var ds={},la;function Rh(){if(la)return ds;la=1;var r=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function s(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(n);){var c=t(d[1]),p=t(d[2]);c===null||p===null||c in l||(l[c]=p)}return l}function o(n,a){a=a||"";var l=[],d,c;typeof a!="string"&&(a="?");for(c in n)if(r.call(n,c)){if(d=n[c],!d&&(d===null||d===e||isNaN(d))&&(d=""),c=i(c),d=i(d),c===null||d===null)continue;l.push(c+"="+d)}return l.length?a+l.join("&"):""}return ds.stringify=o,ds.parse=s,ds}var ur,da;function Oh(){if(da)return ur;da=1;var r=Ah(),e=Rh(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,s=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,o=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(k){return(k||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function(S,y){return h(y.protocol)?S.replace(/\\/g,"/"):S},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function p(k){var S;typeof window<"u"?S=window:typeof na<"u"?S=na:typeof self<"u"?S=self:S={};var y=S.location||{};k=k||y;var w={},O=typeof k,A;if(k.protocol==="blob:")w=new m(unescape(k.pathname),{});else if(O==="string"){w=new m(k,{});for(A in c)delete w[A]}else if(O==="object"){for(A in k)A in c||(w[A]=k[A]);w.slashes===void 0&&(w.slashes=s.test(k.href))}return w}function h(k){return k==="file:"||k==="ftp:"||k==="http:"||k==="https:"||k==="ws:"||k==="wss:"}function f(k,S){k=l(k),k=k.replace(i,""),S=S||{};var y=n.exec(k),w=y[1]?y[1].toLowerCase():"",O=!!y[2],A=!!y[3],U=0,D;return O?A?(D=y[2]+y[3]+y[4],U=y[2].length+y[3].length):(D=y[2]+y[4],U=y[2].length):A?(D=y[3]+y[4],U=y[3].length):D=y[4],w==="file:"?U>=2&&(D=D.slice(2)):h(w)?D=y[4]:w?O&&(D=D.slice(2)):U>=2&&h(S.protocol)&&(D=y[4]),{protocol:w,slashes:O||h(w),slashesCount:U,rest:D}}function x(k,S){if(k==="")return S;for(var y=(S||"/").split("/").slice(0,-1).concat(k.split("/")),w=y.length,O=y[w-1],A=!1,U=0;w--;)y[w]==="."?y.splice(w,1):y[w]===".."?(y.splice(w,1),U++):U&&(w===0&&(A=!0),y.splice(w,1),U--);return A&&y.unshift(""),(O==="."||O==="..")&&y.push(""),y.join("/")}function m(k,S,y){if(k=l(k),k=k.replace(i,""),!(this instanceof m))return new m(k,S,y);var w,O,A,U,D,H,Y=d.slice(),ce=typeof S,z=this,le=0;for(ce!=="object"&&ce!=="string"&&(y=S,S=null),y&&typeof y!="function"&&(y=e.parse),S=p(S),O=f(k||"",S),w=!O.protocol&&!O.slashes,z.slashes=O.slashes||w&&S.slashes,z.protocol=O.protocol||S.protocol||"",k=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||a.test(k))||!O.slashes&&(O.protocol||O.slashesCount<2||!h(z.protocol)))&&(Y[3]=[/(.*)/,"pathname"]);le<Y.length;le++){if(U=Y[le],typeof U=="function"){k=U(k,z);continue}A=U[0],H=U[1],A!==A?z[H]=k:typeof A=="string"?(D=A==="@"?k.lastIndexOf(A):k.indexOf(A),~D&&(typeof U[2]=="number"?(z[H]=k.slice(0,D),k=k.slice(D+U[2])):(z[H]=k.slice(D),k=k.slice(0,D)))):(D=A.exec(k))&&(z[H]=D[1],k=k.slice(0,D.index)),z[H]=z[H]||w&&U[3]&&S[H]||"",U[4]&&(z[H]=z[H].toLowerCase())}y&&(z.query=y(z.query)),w&&S.slashes&&z.pathname.charAt(0)!=="/"&&(z.pathname!==""||S.pathname!=="")&&(z.pathname=x(z.pathname,S.pathname)),z.pathname.charAt(0)!=="/"&&h(z.protocol)&&(z.pathname="/"+z.pathname),r(z.port,z.protocol)||(z.host=z.hostname,z.port=""),z.username=z.password="",z.auth&&(D=z.auth.indexOf(":"),~D?(z.username=z.auth.slice(0,D),z.username=encodeURIComponent(decodeURIComponent(z.username)),z.password=z.auth.slice(D+1),z.password=encodeURIComponent(decodeURIComponent(z.password))):z.username=encodeURIComponent(decodeURIComponent(z.auth)),z.auth=z.password?z.username+":"+z.password:z.username),z.origin=z.protocol!=="file:"&&h(z.protocol)&&z.host?z.protocol+"//"+z.host:"null",z.href=z.toString()}function C(k,S,y){var w=this;switch(k){case"query":typeof S=="string"&&S.length&&(S=(y||e.parse)(S)),w[k]=S;break;case"port":w[k]=S,r(S,w.protocol)?S&&(w.host=w.hostname+":"+S):(w.host=w.hostname,w[k]="");break;case"hostname":w[k]=S,w.port&&(S+=":"+w.port),w.host=S;break;case"host":w[k]=S,o.test(S)?(S=S.split(":"),w.port=S.pop(),w.hostname=S.join(":")):(w.hostname=S,w.port="");break;case"protocol":w.protocol=S.toLowerCase(),w.slashes=!y;break;case"pathname":case"hash":if(S){var O=k==="pathname"?"/":"#";w[k]=S.charAt(0)!==O?O+S:S}else w[k]=S;break;case"username":case"password":w[k]=encodeURIComponent(S);break;case"auth":var A=S.indexOf(":");~A?(w.username=S.slice(0,A),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=S.slice(A+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(S))}for(var U=0;U<d.length;U++){var D=d[U];D[4]&&(w[D[1]]=w[D[1]].toLowerCase())}return w.auth=w.password?w.username+":"+w.password:w.username,w.origin=w.protocol!=="file:"&&h(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString(),w}function E(k){(!k||typeof k!="function")&&(k=e.stringify);var S,y=this,w=y.host,O=y.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var A=O+(y.protocol&&y.slashes||h(y.protocol)?"//":"");return y.username?(A+=y.username,y.password&&(A+=":"+y.password),A+="@"):y.password?(A+=":"+y.password,A+="@"):y.protocol!=="file:"&&h(y.protocol)&&!w&&y.pathname!=="/"&&(A+="@"),(w[w.length-1]===":"||o.test(y.hostname)&&!y.port)&&(w+=":"),A+=w+y.pathname,S=typeof y.query=="object"?k(y.query):y.query,S&&(A+=S.charAt(0)!=="?"?"?"+S:S),y.hash&&(A+=y.hash),A}return m.prototype={set:C,toString:E},m.extractProtocol=f,m.location=p,m.trimLeft=l,m.qs=e,ur=m,ur}var Ih=Oh();const Fh=Th(Ih);function Lh(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function Dr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Dr=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,s=Object.defineProperty||function($,b,_){$[b]=_.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d($,b,_){return Object.defineProperty($,b,{value:_,enumerable:!0,configurable:!0,writable:!0}),$[b]}try{d({},"")}catch{d=function(_,R,F){return _[R]=F}}function c($,b,_,R){var F=b&&b.prototype instanceof E?b:E,I=Object.create(F.prototype),N=new le(R||[]);return s(I,"_invoke",{value:H($,_,N)}),I}function p($,b,_){try{return{type:"normal",arg:$.call(b,_)}}catch(R){return{type:"throw",arg:R}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",x="executing",m="completed",C={};function E(){}function k(){}function S(){}var y={};d(y,n,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(K([])));O&&O!==t&&i.call(O,n)&&(y=O);var A=S.prototype=E.prototype=Object.create(y);function U($){["next","throw","return"].forEach(function(b){d($,b,function(_){return this._invoke(b,_)})})}function D($,b){function _(F,I,N,W){var X=p($[F],$,I);if(X.type!=="throw"){var we=X.arg,fe=we.value;return fe&&Lt(fe)=="object"&&i.call(fe,"__await")?b.resolve(fe.__await).then(function(ke){_("next",ke,N,W)},function(ke){_("throw",ke,N,W)}):b.resolve(fe).then(function(ke){we.value=ke,N(we)},function(ke){return _("throw",ke,N,W)})}W(X.arg)}var R;s(this,"_invoke",{value:function(I,N){function W(){return new b(function(X,we){_(I,N,X,we)})}return R=R?R.then(W,W):W()}})}function H($,b,_){var R=h;return function(F,I){if(R===x)throw Error("Generator is already running");if(R===m){if(F==="throw")throw I;return{value:r,done:!0}}for(_.method=F,_.arg=I;;){var N=_.delegate;if(N){var W=Y(N,_);if(W){if(W===C)continue;return W}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(R===h)throw R=m,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);R=x;var X=p($,b,_);if(X.type==="normal"){if(R=_.done?m:f,X.arg===C)continue;return{value:X.arg,done:_.done}}X.type==="throw"&&(R=m,_.method="throw",_.arg=X.arg)}}}function Y($,b){var _=b.method,R=$.iterator[_];if(R===r)return b.delegate=null,_==="throw"&&$.iterator.return&&(b.method="return",b.arg=r,Y($,b),b.method==="throw")||_!=="return"&&(b.method="throw",b.arg=new TypeError("The iterator does not provide a '"+_+"' method")),C;var F=p(R,$.iterator,b.arg);if(F.type==="throw")return b.method="throw",b.arg=F.arg,b.delegate=null,C;var I=F.arg;return I?I.done?(b[$.resultName]=I.value,b.next=$.nextLoc,b.method!=="return"&&(b.method="next",b.arg=r),b.delegate=null,C):I:(b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,C)}function ce($){var b={tryLoc:$[0]};1 in $&&(b.catchLoc=$[1]),2 in $&&(b.finallyLoc=$[2],b.afterLoc=$[3]),this.tryEntries.push(b)}function z($){var b=$.completion||{};b.type="normal",delete b.arg,$.completion=b}function le($){this.tryEntries=[{tryLoc:"root"}],$.forEach(ce,this),this.reset(!0)}function K($){if($||$===""){var b=$[n];if(b)return b.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var _=-1,R=function F(){for(;++_<$.length;)if(i.call($,_))return F.value=$[_],F.done=!1,F;return F.value=r,F.done=!0,F};return R.next=R}}throw new TypeError(Lt($)+" is not iterable")}return k.prototype=S,s(A,"constructor",{value:S,configurable:!0}),s(S,"constructor",{value:k,configurable:!0}),k.displayName=d(S,l,"GeneratorFunction"),e.isGeneratorFunction=function($){var b=typeof $=="function"&&$.constructor;return!!b&&(b===k||(b.displayName||b.name)==="GeneratorFunction")},e.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,S):($.__proto__=S,d($,l,"GeneratorFunction")),$.prototype=Object.create(A),$},e.awrap=function($){return{__await:$}},U(D.prototype),d(D.prototype,a,function(){return this}),e.AsyncIterator=D,e.async=function($,b,_,R,F){F===void 0&&(F=Promise);var I=new D(c($,b,_,R),F);return e.isGeneratorFunction(b)?I:I.next().then(function(N){return N.done?N.value:I.next()})},U(A),d(A,l,"Generator"),d(A,n,function(){return this}),d(A,"toString",function(){return"[object Generator]"}),e.keys=function($){var b=Object($),_=[];for(var R in b)_.push(R);return _.reverse(),function F(){for(;_.length;){var I=_.pop();if(I in b)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=K,le.prototype={constructor:le,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(z),!b)for(var _ in this)_.charAt(0)==="t"&&i.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=r)},stop:function(){this.done=!0;var b=this.tryEntries[0].completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var _=this;function R(we,fe){return N.type="throw",N.arg=b,_.next=we,fe&&(_.method="next",_.arg=r),!!fe}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],N=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var W=i.call(I,"catchLoc"),X=i.call(I,"finallyLoc");if(W&&X){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(W){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!X)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(b,_){for(var R=this.tryEntries.length-1;R>=0;--R){var F=this.tryEntries[R];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(b==="break"||b==="continue")&&I.tryLoc<=_&&_<=I.finallyLoc&&(I=null);var N=I?I.completion:{};return N.type=b,N.arg=_,I?(this.method="next",this.next=I.finallyLoc,C):this.complete(N)},complete:function(b,_){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&_&&(this.next=_),C},finish:function(b){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.finallyLoc===b)return this.complete(R.completion,R.afterLoc),z(R),C}},catch:function(b){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.tryLoc===b){var F=R.completion;if(F.type==="throw"){var I=F.arg;z(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(b,_,R){return this.delegate={iterator:K(b),resultName:_,nextLoc:R},this.method==="next"&&(this.arg=r),C}},e}function ca(r,e,t,i,s,o,n){try{var a=r[o](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,s)}function Uh(r){return function(){var e=this,t=arguments;return new Promise(function(i,s){var o=r.apply(e,t);function n(l){ca(o,i,s,n,a,"next",l)}function a(l){ca(o,i,s,n,a,"throw",l)}n(void 0)})}}function Zl(r,e){return Mh(r)||zh(r,e)||Ql(r,e)||Dh()}function Dh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zh(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,s,o,n,a=[],l=!0,d=!1;try{if(o=(t=t.call(r)).next,e!==0)for(;!(l=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(c){d=!0,s=c}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(d)throw s}}return a}}function Mh(r){if(Array.isArray(r))return r}function Lt(r){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(r)}function Bh(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=Ql(r))||e){t&&(r=t);var i=0,s=function(){};return{s,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(d){throw d},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,n=!1,a;return{s:function(){t=t.call(r)},n:function(){var d=t.next();return o=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function Ql(r,e){if(r){if(typeof r=="string")return ua(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ua(r,e)}}function ua(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function pa(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function Ht(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pa(Object(t),!0).forEach(function(i){jh(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):pa(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function jh(r,e,t){return e=ed(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Nh(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ha(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ed(i.key),i)}}function qh(r,e,t){return e&&ha(r.prototype,e),t&&ha(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function ed(r){var e=Hh(r,"string");return Lt(e)=="symbol"?e:e+""}function Hh(r,e){if(Lt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Lt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var gs="tus-v1",ms="ietf-draft-03",_i="ietf-draft-05",Vh={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:td,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:gs},Ts=(function(){function r(e,t){Nh(this,r),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return qh(r,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![gs,ms,_i].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var s=this.options.retryDelays;if(s!=null&&Object.prototype.toString.call(s)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var o=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];o<n.length;o++){var a=n[o];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,s=this._size,o=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Yh(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(c,p){c.uploadUrl=i._parallelUploadUrls[p]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(c,p){var h=0;return i._source.slice(c.start,c.end).then(function(f){var x=f.value;return new Promise(function(m,C){var E=Ht(Ht({},i.options),{},{uploadUrl:c.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Ht(Ht({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:m,onError:C,onProgress:function(y){o=o-h+y,h=y,i._emitProgress(o,s)},onUploadUrlAvailable:function(){i._parallelUploadUrls[p]=k.url,i._parallelUploadUrls.filter(function(y){return!!y}).length===a.length&&i._saveUploadInUrlStorage()}}),k=new r(x,E);k.start(),i._parallelUploads.push(k)})})}),d;Promise.all(l).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var c=fa(i.options.metadata);return c!==""&&d.setHeader("Upload-Metadata",c),i._sendRequest(d,null)}).then(function(c){if(!Wt(c.getStatus(),200)){i._emitHttpError(d,c,"tus: unexpected response while creating upload");return}var p=c.getHeader("Location");if(p==null){i._emitHttpError(d,c,"tus: invalid or missing Location header");return}i.url=ba(i.options.endpoint,p),"Created upload at ".concat(i.url),i._emitSuccess(c)}).catch(function(c){i._emitError(c)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var s=Bh(this._parallelUploads),o;try{for(s.s();!(o=s.n()).done;){var n=o.value;n.abort(t)}}catch(a){s.e(a)}finally{s.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():r.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,s,o){this._emitError(new xi(s,o,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var s=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(s&&(this._retryAttempt=0),va(t,this._retryAttempt,this.options)){var o=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},o);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,s){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,s)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var s=fa(this.options.metadata);s!==""&&i.setHeader("Upload-Metadata",s);var o;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,o=this._addChunkToRequest(i)):((this.options.protocol===ms||this.options.protocol===_i)&&i.setHeader("Upload-Complete","?0"),o=this._sendRequest(i,null)),o.then(function(n){if(!Wt(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=ba(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),s=this._sendRequest(i,null);s.then(function(o){var n=o.getStatus();if(!Wt(n,200)){if(n===423){t._emitHttpError(i,o,"tus: upload is currently locked; retry later");return}if(Wt(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,o,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(o.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,o,"tus: invalid or missing offset value");return}var l=Number.parseInt(o.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===gs){t._emitHttpError(i,o,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(o);return}t._offset=a,t._performUpload()})}).catch(function(o){t._emitHttpError(i,null,"tus: failed to resume upload",o)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var s=this._addChunkToRequest(i);s.then(function(o){if(!Wt(o.getStatus(),200)){t._emitHttpError(i,o,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,o)}).catch(function(o){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),o)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,s=this._offset,o=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(s+n,i._size)}),this.options.protocol===gs?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===_i&&t.setHeader("Content-Type","application/partial-upload"),(o===Number.POSITIVE_INFINITY||o>this._size)&&!this.options.uploadLengthDeferred&&(o=this._size),this._source.slice(s,o).then(function(n){var a=n.value,l=n.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var c=i._offset+d;return!i.options.uploadLengthDeferred&&l&&c!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(c," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===ms||i.options.protocol===_i)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var s=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(s)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(s,this._size),this._emitChunkComplete(s-this._offset,s,this._size),this._offset=s,s===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var s=ga(t,i,this.options);return this._req=s,s}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(s){t._urlStorageKey=s})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return ma(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=ga("DELETE",t,i);return ma(s,null,i).then(function(o){if(o.getStatus()!==204)throw new xi("tus: unexpected response while terminating upload",null,s,o)}).catch(function(o){if(o instanceof xi||(o=new xi("tus: failed to terminate upload",o,s,null)),!va(o,0,i))throw o;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Ht(Ht({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,n)}).then(function(){return r.terminate(t,l)})})}}])})();function fa(r){return Object.entries(r).map(function(e){var t=Zl(e,2),i=t[0],s=t[1];return"".concat(i," ").concat(Ph.encode(String(s)))}).join(",")}function Wt(r,e){return r>=e&&r<e+100}function ga(r,e,t){var i=t.httpStack.createRequest(r,e);t.protocol===ms?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===_i?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var s=t.headers||{},o=0,n=Object.entries(s);o<n.length;o++){var a=Zl(n[o],2),l=a[0],d=a[1];i.setHeader(l,d)}if(t.addRequestId){var c=Lh();i.setHeader("X-Request-ID",c)}return i}function ma(r,e,t){return zr.apply(this,arguments)}function zr(){return zr=Uh(Dr().mark(function r(e,t,i){var s;return Dr().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(s=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,s);case 9:return n.abrupt("return",s);case 10:case"end":return n.stop()}},r)})),zr.apply(this,arguments)}function Kh(){var r=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(r=!1),r}function va(r,e,t){return t.retryDelays==null||e>=t.retryDelays.length||r.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(r,e,t):td(r)}function td(r){var e=r.originalResponse?r.originalResponse.getStatus():0;return(!Wt(e,400)||e===409||e===423)&&Kh()}function ba(r,e){return new Fh(e,r).toString()}function Yh(r,e){for(var t=Math.floor(r/e),i=[],s=0;s<e;s++)i.push({start:t*s,end:t*(s+1)});return i[e-1].end=r,i}Ts.defaultOptions=Vh;var id=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Gh(r){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var s=i.response;e(s)},i.onerror=function(s){t(s)},i.open("GET",r),i.send()})}var Wh=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Jh(r){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var s=new Uint8Array(i.result);e({value:s})},i.onerror=function(s){t(s)},i.readAsArrayBuffer(r)})}function Di(r){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Di(r)}function Xh(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Zh(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ef(i.key),i)}}function Qh(r,e,t){return e&&Zh(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ef(r){var e=tf(r,"string");return Di(e)=="symbol"?e:e+""}function tf(r,e){if(Di(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Di(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var xa=(function(){function r(e){Xh(this,r),this._file=e,this.size=e.size}return Qh(r,[{key:"slice",value:function(t,i){if(Wh())return Jh(this._file.slice(t,i));var s=this._file.slice(t,i),o=i>=this.size;return Promise.resolve({value:s,done:o})}},{key:"close",value:function(){}}])})();function zi(r){"@babel/helpers - typeof";return zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zi(r)}function sf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function rf(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,nf(i.key),i)}}function of(r,e,t){return e&&rf(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function nf(r){var e=af(r,"string");return zi(e)=="symbol"?e:e+""}function af(r,e){if(zi(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(zi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function ya(r){return r===void 0?0:r.size!==void 0?r.size:r.length}function lf(r,e){if(r.concat)return r.concat(e);if(r instanceof Blob)return new Blob([r,e],{type:r.type});if(r.set){var t=new r.constructor(r.length+e.length);return t.set(r),t.set(e,r.length),t}throw new Error("Unknown data type")}var df=(function(){function r(e){sf(this,r),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return of(r,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var s=this,o=i<=this._bufferOffset+ya(this._buffer);if(this._done||o){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var d=l.value,c=l.done;return c?s._done=!0:s._buffer===void 0?s._buffer=d:s._buffer=lf(s._buffer,d),s._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var s=ya(this._buffer)===0;return this._done&&s?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function Ut(r){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(r)}function Mr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Mr=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,s=Object.defineProperty||function($,b,_){$[b]=_.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d($,b,_){return Object.defineProperty($,b,{value:_,enumerable:!0,configurable:!0,writable:!0}),$[b]}try{d({},"")}catch{d=function(_,R,F){return _[R]=F}}function c($,b,_,R){var F=b&&b.prototype instanceof E?b:E,I=Object.create(F.prototype),N=new le(R||[]);return s(I,"_invoke",{value:H($,_,N)}),I}function p($,b,_){try{return{type:"normal",arg:$.call(b,_)}}catch(R){return{type:"throw",arg:R}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",x="executing",m="completed",C={};function E(){}function k(){}function S(){}var y={};d(y,n,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(K([])));O&&O!==t&&i.call(O,n)&&(y=O);var A=S.prototype=E.prototype=Object.create(y);function U($){["next","throw","return"].forEach(function(b){d($,b,function(_){return this._invoke(b,_)})})}function D($,b){function _(F,I,N,W){var X=p($[F],$,I);if(X.type!=="throw"){var we=X.arg,fe=we.value;return fe&&Ut(fe)=="object"&&i.call(fe,"__await")?b.resolve(fe.__await).then(function(ke){_("next",ke,N,W)},function(ke){_("throw",ke,N,W)}):b.resolve(fe).then(function(ke){we.value=ke,N(we)},function(ke){return _("throw",ke,N,W)})}W(X.arg)}var R;s(this,"_invoke",{value:function(I,N){function W(){return new b(function(X,we){_(I,N,X,we)})}return R=R?R.then(W,W):W()}})}function H($,b,_){var R=h;return function(F,I){if(R===x)throw Error("Generator is already running");if(R===m){if(F==="throw")throw I;return{value:r,done:!0}}for(_.method=F,_.arg=I;;){var N=_.delegate;if(N){var W=Y(N,_);if(W){if(W===C)continue;return W}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(R===h)throw R=m,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);R=x;var X=p($,b,_);if(X.type==="normal"){if(R=_.done?m:f,X.arg===C)continue;return{value:X.arg,done:_.done}}X.type==="throw"&&(R=m,_.method="throw",_.arg=X.arg)}}}function Y($,b){var _=b.method,R=$.iterator[_];if(R===r)return b.delegate=null,_==="throw"&&$.iterator.return&&(b.method="return",b.arg=r,Y($,b),b.method==="throw")||_!=="return"&&(b.method="throw",b.arg=new TypeError("The iterator does not provide a '"+_+"' method")),C;var F=p(R,$.iterator,b.arg);if(F.type==="throw")return b.method="throw",b.arg=F.arg,b.delegate=null,C;var I=F.arg;return I?I.done?(b[$.resultName]=I.value,b.next=$.nextLoc,b.method!=="return"&&(b.method="next",b.arg=r),b.delegate=null,C):I:(b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,C)}function ce($){var b={tryLoc:$[0]};1 in $&&(b.catchLoc=$[1]),2 in $&&(b.finallyLoc=$[2],b.afterLoc=$[3]),this.tryEntries.push(b)}function z($){var b=$.completion||{};b.type="normal",delete b.arg,$.completion=b}function le($){this.tryEntries=[{tryLoc:"root"}],$.forEach(ce,this),this.reset(!0)}function K($){if($||$===""){var b=$[n];if(b)return b.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var _=-1,R=function F(){for(;++_<$.length;)if(i.call($,_))return F.value=$[_],F.done=!1,F;return F.value=r,F.done=!0,F};return R.next=R}}throw new TypeError(Ut($)+" is not iterable")}return k.prototype=S,s(A,"constructor",{value:S,configurable:!0}),s(S,"constructor",{value:k,configurable:!0}),k.displayName=d(S,l,"GeneratorFunction"),e.isGeneratorFunction=function($){var b=typeof $=="function"&&$.constructor;return!!b&&(b===k||(b.displayName||b.name)==="GeneratorFunction")},e.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,S):($.__proto__=S,d($,l,"GeneratorFunction")),$.prototype=Object.create(A),$},e.awrap=function($){return{__await:$}},U(D.prototype),d(D.prototype,a,function(){return this}),e.AsyncIterator=D,e.async=function($,b,_,R,F){F===void 0&&(F=Promise);var I=new D(c($,b,_,R),F);return e.isGeneratorFunction(b)?I:I.next().then(function(N){return N.done?N.value:I.next()})},U(A),d(A,l,"Generator"),d(A,n,function(){return this}),d(A,"toString",function(){return"[object Generator]"}),e.keys=function($){var b=Object($),_=[];for(var R in b)_.push(R);return _.reverse(),function F(){for(;_.length;){var I=_.pop();if(I in b)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=K,le.prototype={constructor:le,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(z),!b)for(var _ in this)_.charAt(0)==="t"&&i.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=r)},stop:function(){this.done=!0;var b=this.tryEntries[0].completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var _=this;function R(we,fe){return N.type="throw",N.arg=b,_.next=we,fe&&(_.method="next",_.arg=r),!!fe}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],N=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var W=i.call(I,"catchLoc"),X=i.call(I,"finallyLoc");if(W&&X){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(W){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!X)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(b,_){for(var R=this.tryEntries.length-1;R>=0;--R){var F=this.tryEntries[R];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(b==="break"||b==="continue")&&I.tryLoc<=_&&_<=I.finallyLoc&&(I=null);var N=I?I.completion:{};return N.type=b,N.arg=_,I?(this.method="next",this.next=I.finallyLoc,C):this.complete(N)},complete:function(b,_){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&_&&(this.next=_),C},finish:function(b){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.finallyLoc===b)return this.complete(R.completion,R.afterLoc),z(R),C}},catch:function(b){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.tryLoc===b){var F=R.completion;if(F.type==="throw"){var I=F.arg;z(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(b,_,R){return this.delegate={iterator:K(b),resultName:_,nextLoc:R},this.method==="next"&&(this.arg=r),C}},e}function _a(r,e,t,i,s,o,n){try{var a=r[o](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,s)}function cf(r){return function(){var e=this,t=arguments;return new Promise(function(i,s){var o=r.apply(e,t);function n(l){_a(o,i,s,n,a,"next",l)}function a(l){_a(o,i,s,n,a,"throw",l)}n(void 0)})}}function uf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function pf(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ff(i.key),i)}}function hf(r,e,t){return e&&pf(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ff(r){var e=gf(r,"string");return Ut(e)=="symbol"?e:e+""}function gf(r,e){if(Ut(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ut(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var mf=(function(){function r(){uf(this,r)}return hf(r,[{key:"openFile",value:(function(){var e=cf(Mr().mark(function i(s,o){var n;return Mr().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(id()&&s&&typeof s.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Gh(s.uri);case 4:return n=l.sent,l.abrupt("return",new xa(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof s.slice=="function"&&typeof s.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new xa(s)));case 13:if(typeof s.read!="function"){l.next=18;break}if(o=Number(o),Number.isFinite(o)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new df(s,o)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,s){return e.apply(this,arguments)}return t})()}])})();function vf(r,e){return id()?Promise.resolve(bf(r,e)):Promise.resolve(["tus-br",r.name,r.type,r.size,r.lastModified,e.endpoint].join("-"))}function bf(r,e){var t=r.exif?xf(JSON.stringify(r.exif)):"noexif";return["tus-rn",r.name||"noname",r.size||"nosize",t,e.endpoint].join("/")}function xf(r){var e=0;if(r.length===0)return e;for(var t=0;t<r.length;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Mi(r){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mi(r)}function So(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function yf(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_f(i.key),i)}}function Co(r,e,t){return e&&yf(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function _f(r){var e=wf(r,"string");return Mi(e)=="symbol"?e:e+""}function wf(r,e){if(Mi(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Mi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var kf=(function(){function r(){So(this,r)}return Co(r,[{key:"createRequest",value:function(t,i){return new $f(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),$f=(function(){function r(e,t){So(this,r),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return Co(r,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(s,o){t._xhr.onload=function(){s(new Sf(t._xhr))},t._xhr.onerror=function(n){o(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Sf=(function(){function r(e){So(this,r),this._xhr=e}return Co(r,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Bi(r){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bi(r)}function Cf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ef(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Tf(i.key),i)}}function Pf(r,e,t){return e&&Ef(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Tf(r){var e=Af(r,"string");return Bi(e)=="symbol"?e:e+""}function Af(r,e){if(Bi(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Bi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Br=!1;try{Br="localStorage"in window;var pr="tusSupport",wa=localStorage.getItem(pr);localStorage.setItem(pr,wa),wa===null&&localStorage.removeItem(pr)}catch(r){if(r.code===r.SECURITY_ERR||r.code===r.QUOTA_EXCEEDED_ERR)Br=!1;else throw r}var Rf=Br,Of=(function(){function r(){Cf(this,r)}return Pf(r,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var s=Math.round(Math.random()*1e12),o="tus::".concat(t,"::").concat(s);return localStorage.setItem(o,JSON.stringify(i)),Promise.resolve(o)}},{key:"_findEntries",value:function(t){for(var i=[],s=0;s<localStorage.length;s++){var o=localStorage.key(s);if(o.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(o));n.urlStorageKey=o,i.push(n)}catch{}}return i}}])})();function ri(r){"@babel/helpers - typeof";return ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ri(r)}function If(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ff(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,rd(i.key),i)}}function Lf(r,e,t){return t&&Ff(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Uf(r,e,t){return e=As(e),Df(r,sd()?Reflect.construct(e,t||[],As(r).constructor):e.apply(r,t))}function Df(r,e){if(e&&(ri(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zf(r)}function zf(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sd(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sd=function(){return!!r})()}function As(r){return As=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},As(r)}function Mf(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&jr(r,e)}function jr(r,e){return jr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},jr(r,e)}function ka(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function Qt(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ka(Object(t),!0).forEach(function(i){Bf(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ka(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Bf(r,e,t){return e=rd(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function rd(r){var e=jf(r,"string");return ri(e)=="symbol"?e:e+""}function jf(r,e){if(ri(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(ri(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var $a=Qt(Qt({},Ts.defaultOptions),{},{httpStack:new kf,fileReader:new mf,urlStorage:Rf?new Of:new vh,fingerprint:vf}),Nf=(function(r){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return If(this,e),i=Qt(Qt({},$a),i),Uf(this,e,[t,i])}return Mf(e,r),Lf(e,null,[{key:"terminate",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s=Qt(Qt({},$a),s),Ts.terminate(i,s)}}])})(Ts);const qf=10*1024*1024,Hf=5*1024*1024,Vf="https://eu-on-24001.connector.filerobot.com/files",Kf="https://eu-on-24001.connector.filerobot.com/json";function Yf(r,e){if(!e||!r.file)return!1;const t=e.sizeThreshold??qf;return r.size>=t}function Gf(r,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),s=t.endpoint||Vf,o=t.jsonBase||Kf,n=t.chunkSize??Hf,a=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],c=i.split("/").pop()||"";let p=!1,h=!1,f=!1;const x={name:r.name,type:r.type,"filerobot-folder":e.folder};uo(r.product)&&(x.product=JSON.stringify(po(r.product)));const m=async()=>`tus-${r.id}-${s}`,C=new Nf(r.file,{endpoint:s,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:x,fingerprint:m,onBeforeRequest(w){const O=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[A,U]of Object.entries(O))w.setHeader(A,U);w.setHeader("X-Filerobot-Token",c)},onUploadUrlAvailable(){C.url&&e.onUploadUrlAvailable&&!f&&(f=!0,e.onUploadUrlAvailable(C.url))},onProgress(w,O){!h&&!p&&e.onProgress(w,O)},onSuccess(){var A;if(h)return;S();const w=C.url||"",O=(A=w.match(/files\/([^/?]+)/))==null?void 0:A[1];O?Jf(o,O,r.size).then(U=>{h||e.onComplete(si(U)?oo(U,r):U)}).catch(U=>{h||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:r.name,extension:r.name.split(".").pop()||"",type:r.type,size:r.size,url:{public:w,cdn:w},meta:r.meta,tags:r.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(w){h||(S(),Wf(w)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(w instanceof Error?w:new Error(String(w))))},onShouldRetry(w,O,A){var D;const U=(D=w.originalResponse)==null?void 0:D.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let E=null,k=null;typeof window<"u"&&(E=()=>{var w;!p&&!h&&(p=!0,C.abort(!1),(w=e.onPause)==null||w.call(e))},k=()=>{var w;p&&!h&&(p=!1,C.start(),(w=e.onResume)==null||w.call(e))},window.addEventListener("offline",E),window.addEventListener("online",k));const S=()=>{E&&window.removeEventListener("offline",E),k&&window.removeEventListener("online",k)},y=()=>{try{C.start()}catch(w){S(),e.onError(w instanceof Error?w:new Error(String(w)))}};return a?C.findPreviousUploads().then(w=>{w.length>0&&!h&&C.resumeFromPreviousUpload(w[0]),h||y()}):y(),{abort(){h=!0,p=!1,S(),C.abort(!0)},pause(){!p&&!h&&(p=!0,C.abort(!1))},resume(){p&&!h&&(p=!1,C.start())},isPaused(){return p}}}function Wf(r){var e;if(r instanceof xi){const t=(e=r.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:r.originalResponse==null&&r.causingError!=null}return!1}async function Jf(r,e,t){const i=`${r.replace(/\/+$/,"")}/${e}`,s=t>1e8?13e3:6e3,o=3;for(let n=0;n<=o;n++){n>0&&await new Promise(d=>setTimeout(d,s));const a=await fetch(i);if(a.status===404&&n<o)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(si(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<o))throw new Error(Ss(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const vs="_sfxRelativePath",Sa=8,Xf=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function Zf(r){return r?r.startsWith(".")?!0:Xf.has(r):!1}function Eo(r,e){if(e){try{Object.defineProperty(r,vs,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(r,vs,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{r[vs]=e}}}function Qf(r){const e=r[vs];if(typeof e=="string"&&e)return e;const t=r.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=r.relativePath;return typeof i=="string"?i:""}function eg(r){if(!r)return"";const e=r.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function tg(r,e){const t=(r??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:r??""}async function od(r,e){var d;const t=(e==null?void 0:e.allowDirectories)!==!1,i=r.items;if(!(i&&i.length>0&&typeof i[0].webkitGetAsEntry=="function"))return{files:Array.from(r.files??[]),hadDirectories:!1,rejectedDirectories:!1};const o=[];let n=!1,a=!1;for(const c of Array.from(i)){if(c.kind!=="file")continue;const p=(d=c.webkitGetAsEntry)==null?void 0:d.call(c);if(p){if(p.isDirectory&&(n=!0,!t)){a=!0;continue}o.push(p)}}if(o.length===0)return a?{files:[],hadDirectories:n,rejectedDirectories:!0}:{files:Array.from(r.files??[]),hadDirectories:!1,rejectedDirectories:!1};const l=[];return await nd(o,"",l),{files:l,hadDirectories:n,rejectedDirectories:a}}async function nd(r,e,t){for(let i=0;i<r.length;i+=Sa){const s=r.slice(i,i+Sa);await Promise.all(s.map(o=>ig(o,e,t)))}}async function ig(r,e,t){try{if(r.isFile){const i=await sg(r);if(!i)return;const s=e?`${e}/${i.name}`:i.name;Eo(i,s),t.push(i);return}if(r.isDirectory){if(Zf(r.name))return;const i=e?`${e}/${r.name}`:r.name,s=await rg(r);await nd(s,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(r==null?void 0:r.name)??r,i)}}function sg(r){return new Promise(e=>{r.file(t=>e(t),()=>e(null))})}function rg(r){return new Promise(e=>{const t=r.createReader(),i=[],s=()=>{t.readEntries(o=>{if(o.length===0){e(i);return}i.push(...o),s()},o=>{console.warn("[sfx-uploader] directory read failed for",r==null?void 0:r.name,o),e(i)})};s()})}class og{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let s=!1;for(const[o,n]of this.pendingProgress){const a=i.get(o);a&&a.status==="uploading"&&(i.set(o,{...a,...n}),s=!0)}this.pendingProgress.clear(),s&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(ue(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(ue(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&ue(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),ue(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),ue(this.store,e,{status:"uploading"})):ue(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Ca(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),ue(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Ca(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),ue(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,s=t-i;if(s<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,s);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),ue(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var h,f;this.pendingProgress.delete(e.id);const t=(f=(h=this.config).resolveUploadParams)==null?void 0:f.call(h,e),i=!!t&&Object.keys(t).length>0,s=!i&&!e.remoteInfo&&!e.remoteUrl&&Yf(e,this.config.tusConfig);ue(this.store,e.id,{status:"uploading",error:null,isTus:s});let o=0,n=Date.now(),a=0;const l=tg(this.store.getState().targetFolder,e.relativeFolder),d={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:x=>this.handleComplete(e.id,x),onError:x=>this.handleError(e.id,x)},c=(x,m)=>{const C=Date.now(),E=(C-n)/1e3;if(E>0){const S=(x-o)/E;a=a===0?S:.3*S+.7*a}o=x,n=C;const k=m>0?Math.min(x/m*100,100):0;this.pendingProgress.set(e.id,{progress:k,bytesUploaded:x,speed:a}),this.scheduleProgressFlush()};let p;if(e.remoteInfo)p=ih(e,{...d,onProgress:c});else if(e.remoteUrl){if(!this.config.companionUrl){ue(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}p=sh(e,{...d,onProgress:c,companionUrl:this.config.companionUrl,onMeta:x=>{ue(this.store,e.id,{size:x.size,type:x.type||e.type})}})}else if(s){const x=Gf(e,{...d,onProgress:c,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:m=>{ue(this.store,e.id,{tusUploadUrl:m})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,x),this.pendingProgress.delete(e.id),ue(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,x),ue(this.store,e.id,{status:"uploading"})}});p=x}else p=Yp(e,{...d,onProgress:c});this.activeUploads.set(e.id,p)}handleComplete(e,t){var o;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),s=(o=t.file)==null?void 0:o.uuid;if(i!=null&&i.focusPoint&&s&&!si(t)){const n=()=>this.finalizeComplete(e,t);this.applyFocusPoint(i,s).then(n,n);return}this.finalizeComplete(e,t)}async applyFocusPoint(e,t){var i,s;try{await new io({apiBase:this.config.apiBase,headers:this.config.authHeaders}).put(`/file/${encodeURIComponent(t)}/focus-point`,{img_focus_point:e.focusPoint})}catch(o){const n=o instanceof Error?o:new Error(String(o));console.warn(`[sfx-uploader] Failed to save the focus point for "${e.name}":`,n);try{(s=(i=this.config).onFocusPointError)==null||s.call(i,e,n)}catch(a){console.warn("[sfx-uploader] onFocusPointError threw:",a)}}}finalizeComplete(e,t){var p,h,f,x,m,C,E,k,S,y,w;const i=this.store.getState().files.get(e),s=((p=i==null?void 0:i.previewUrl)==null?void 0:p.startsWith("blob:"))??!1,o=((f=(h=t.file)==null?void 0:h.url)==null?void 0:f.cdn)??((m=(x=t.file)==null?void 0:x.url)==null?void 0:m.cdn_permalink)??((E=(C=t.file)==null?void 0:C.url)==null?void 0:E.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:si(t)};if(i&&o&&i.type.startsWith("image/")&&!s){const O=((y=(S=this.config).transformPreviewUrl)==null?void 0:y.call(S,o,(k=t.file)==null?void 0:k.url))??o;O&&(n.previewUrl=O)}const a=(w=t.file)==null?void 0:w.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l);const d=this.store.getState().files,c=d.get(e);if(c){const O=new Map(d);O.set(e,{...c,...n}),this.store.setState({files:O,...this.computeTotals(O)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:s}=this.store.getState().queueConfig,o=i.retryCount+1;if(o<=s.maxRetries){const n=Math.min(s.baseDelay*Math.pow(s.backoffFactor,i.retryCount),s.maxDelay);ue(this.store,e,{status:"retrying",error:t.message,retryCount:o});const a=setTimeout(()=>{this.retryTimers.delete(e),ue(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else ue(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,s=0,o=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),o+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(s+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:s,totalProgress:n>0?Math.min(o/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Ca(r){return r==="queued"||r==="uploading"||r==="retrying"||r==="paused"}const ng=3e4,ag=2,lg=400;function dg(r){return r===404||r===408||r===429||r>=500}const cg=r=>new Promise(e=>setTimeout(e,r));function Po(r,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${r}`}async function ug(r,e,t,i={}){const s=`${Po(r,t)}/key/${encodeURIComponent(e)}`,o=i.retries??ag,n=i.retryDelayMs??lg;let a=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await cg(n*l);const d=new AbortController,c=setTimeout(()=>d.abort(),ng);try{const p=await fetch(s,{signal:d.signal,cache:"no-store"});if(clearTimeout(c),!p.ok){if(a=new Error(`SASS key exchange failed (HTTP ${p.status})`),dg(p.status)&&l<o)continue;throw a}const h=await p.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(p){if(clearTimeout(c),p instanceof DOMException&&p.name==="AbortError")throw new Error("SASS key exchange timed out");if(p instanceof TypeError&&l<o){a=p;continue}throw p}}throw a}function Nr(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}async function pg(r,e){const t=Po(r.container,e);if(r.mode==="security-template"){const i=await ug(r.container,r.securityTemplateId,e);return{apiBase:t,headers:Nr(r,i),sassKey:i}}return{apiBase:t,headers:Nr(r)}}function hg(r){if(!r)return null;try{return decodeURIComponent(escape(atob(r)))}catch{return null}}function fg(r){const e=hg(r);if(!e)return null;try{return new RegExp(e)}catch(t){return console.error("[sfx-uploader] Filename naming-convention regex failed to compile in the browser:",t),null}}function Ea(r,e){return e.test(r)}const gg="https://ai.scaleflex.com",Pa=300,mg=.85,vg=3e4;function Ta(r){return r==="low"?.6:r==="high"?.85:.75}async function bg(r,e){var s,o,n;if(r.file)return r.file;const t=r.previewUrl||((n=(o=(s=r.response)==null?void 0:s.file)==null?void 0:o.url)==null?void 0:n.cdn)||r.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function xg(r){return`${(r||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function yg(r){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(r);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,s=URL.createObjectURL(r);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(s)})},i.onerror=()=>{URL.revokeObjectURL(s),t(new Error("Image decode failed"))},i.src=s})}async function _g(r){const e=await yg(r);try{const t=e.width>Pa?Pa/e.width:1,i=Math.max(1,Math.round(e.width*t)),s=Math.max(1,Math.round(e.height*t)),o=document.createElement("canvas");o.width=i,o.height=s;const n=o.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,s),await new Promise((a,l)=>{o.toBlob(d=>d?a(d):l(new Error("Canvas toBlob failed")),"image/jpeg",mg)})}finally{e.close()}}async function Aa(r,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),vg),s=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",s);const o=t.signal,n=()=>{if(o.aborted)throw new DOMException("Aborted","AbortError")};try{n();const d=await bg(r,o);n();const c=await _g(d);n();const h=`${(e.endpoint||gg).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,f=new FormData;f.append("file",c,xg(r.name));const x=await fetch(h,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:f,signal:o});if(!x.ok)throw new Error(`Similarity check failed (HTTP ${x.status})`);const m=await x.json();if(m.status==="error")throw new Error(`Similarity check failed: ${m.msg||"Unknown error"}`);return(m.similar_assets??[]).map(([C,E,k])=>({uuid:C,score:E,url:k}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",s)}}const Rs="sfx-uploader:last-upload:",ad=1;function wg(r){var o,n,a,l,d,c,p,h,f;const{file:e,previewUrl:t,...i}=r;let s=null;return r.status==="complete"&&(r.previewUrl&&!r.previewUrl.startsWith("blob:")?s=r.previewUrl:s=((a=(n=(o=r.response)==null?void 0:o.file)==null?void 0:n.url)==null?void 0:a.permalink)??((c=(d=(l=r.response)==null?void 0:l.file)==null?void 0:d.url)==null?void 0:c.cdn_permalink)??((f=(h=(p=r.response)==null?void 0:p.file)==null?void 0:h.url)==null?void 0:f.cdn)??null),{...i,previewUrl:s}}function kg(r){try{const e=sessionStorage.getItem(Rs+r);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==ad?null:t}catch{return null}}function $g(r,e){try{sessionStorage.setItem(Rs+r,JSON.stringify(e))}catch{}}const vi={save(r,e){if(e.length===0){this.clear(r);return}const t={__schemaVersion:ad,savedAt:Date.now(),files:e.map(wg)};$g(r,t)},load(r){const e=kg(r);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(r){try{return sessionStorage.getItem(Rs+r)!=null}catch{return!1}},clear(r){try{sessionStorage.removeItem(Rs+r)}catch{}}},V={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let Sg=0;function Vt(){return`file-${Date.now()}-${++Sg}`}function Jt(r){if(!Number.isFinite(r)||r<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(r)/Math.log(1024)),e.length-1),i=r/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function Ra(r){if(!isFinite(r)||r<=0)return"0s";const e=Math.round(r);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const s=Math.floor(t/60),o=t%60;return o>0?`${s}h ${o}m`:`${s}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function ze(r){var t;const e=((t=r.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return r.type.startsWith("image/")?"image":r.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":r.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":r.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function Cg(r){const e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toUpperCase():""}const Eg=new Set([".ds_store","thumbs.db","desktop.ini"]);function hr(r){const e=(r.split(/[\\/]/).pop()??r).toLowerCase();return e.startsWith(".ds_store")?!0:Eg.has(e)}const Pg={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function qr(r){var t;const e=((t=r.split(".").pop())==null?void 0:t.toLowerCase())??"";return Pg[e]||""}function at(r){return r==="image/heic"||r==="image/heif"}function Tg(r){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(r);let s=!1;const o=()=>{s||(s=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{s||(s=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}o()},{once:!0}),t.addEventListener("error",()=>o(),{once:!0}),setTimeout(()=>o(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function Ag(r){return(r==null?void 0:r.code)==="max-files"}function fr(r,e,t){var i,s;if(e.maxFileSize!=null&&r.size>0&&r.size>e.maxFileSize){const o=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:$t("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:o})}}if(e.maxTotalFilesSize!=null&&r.size>0){let o=r.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(o+=n.size);if(o>e.maxTotalFilesSize)return{code:"max-total-size",message:$t("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let o=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&o++;if(o>=e.maxNumberOfFiles)return{code:"max-files",message:$t("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const o=e.allowedFileTypes,n="."+(((i=r.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return{code:"type-not-allowed",message:$t("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const o=e.blockedFileTypes,n="."+(((s=r.name.split(".").pop())==null?void 0:s.toLowerCase())??"");if(o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return{code:"type-blocked",message:$t("fileTypeBlocked","File type is blocked")}}return null}function gr(r){return r.allowedFileTypes?r.allowedFileTypes.join(","):""}function Rg(r){return r.trim()?r.split(",").some(e=>{const t=e.trim().toLowerCase();if(!t)return!1;if(t==="*"||t==="*/*")return!0;const i=t.startsWith(".")?qr(`file${t}`):t;return i.startsWith("image/")||i.startsWith("video/")}):!0}const Oa={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function Og(r){return r.filter(e=>e in Oa).map(e=>Oa[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Os=class extends Ni{constructor(e){if(super(e),this.it=v,e.type!==ai.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===Le)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Os.directiveName="unsafeHTML",Os.resultType=1;const Ia=li(Os);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Hr extends Os{}Hr.directiveName="unsafeSVG",Hr.resultType=2;const dt=li(Hr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=li(class extends Ni{constructor(r){var e;if(super(r),r.type!==ai.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,s;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const t=r.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||(s=this.nt)!=null&&s.has(o)||(n?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return Le}});function Et(r){return r.brandStyle?u`<span
    class=${To({"brand-ico":!0,"brand-ico--transparent":r.brandStyle.background==="transparent"})}
    ${te(r.brandStyle)}
    >${Ia(r.brandHtml)}</span
  >`:Ia(r.brandHtml)}var Ig=Object.defineProperty,ld=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Ig(e,t,s),s};const Fg='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Lg='<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="10.5" y1="18.5" x2="13.5" y2="18.5"/>',Ug='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Dg='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',zg='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Xt=[{id:"device",labelKey:"myDevice",label:"My Device",icon:Fg,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:Ug,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:Dg,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:zg,iconColor:"#ea580c"}],Mg={id:"device",labelKey:"myDevice",label:"My Device",icon:Lg,iconColor:"#2563eb"},Wo=class Wo extends G{constructor(){super(...arguments),this.t=Ue,this.sources=Xt}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return u`
      ${this.sources.map(e=>u`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Et(e):Q`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${dt(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Wo.styles=q`
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
  `;let ji=Wo;ld([g({attribute:!1})],ji.prototype,"t");ld([g({type:Array})],ji.prototype,"sources");const Vs=new Set(["multi-select","tags","ultratags"]),Ks=new Set(["text","textarea","attachment-uri"]);function Bg(r){return yu(r)?[]:r==="focus-point"?[]:Vs.has(r)?[{key:"SET",label:T("bulkOpSet","Set")},{key:"ADD",label:T("bulkOpAddTo","Add to")},{key:"DELETE",label:T("bulkOpRemoveFrom","Remove from")}]:Ks.has(r)?[{key:"SET",label:T("bulkOpSet","Set")},{key:"ADD",label:T("bulkOpAppend","Append")},{key:"DELETE",label:T("bulkOpRemove","Remove")}]:[{key:"SET",label:T("bulkOpSet","Set")},{key:"DELETE",label:T("bulkOpClear","Clear")}]}function Vr(r,e){return r==="DELETE"?Vs.has(e)||Ks.has(e):!0}function cs(r){if(typeof r=="string")return r;if(r&&typeof r=="object"){const e=r;return e.sid||e.label||String(r)}return String(r)}function jg(r,e,t,i){const s=Vs.has(i),o=Ks.has(i);switch(r){case"SET":return t;case"ADD":{if(s){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return wr(n,a,!1);if(i==="tags"){const c=new Set(n.map(h=>cs(h))),p=[...n];for(const h of a){const f=cs(h);c.has(f)||(c.add(f),p.push(h))}return p}const l=new Set(n.map(c=>JSON.stringify(c))),d=[...n];for(const c of a){const p=JSON.stringify(c);l.has(p)||(l.add(p),d.push(c))}return d}if(o){const n=typeof t=="string"?t:"";if(!n)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${n}`:n}return t}case"DELETE":{if(s){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return wr(n,a,!0);if(i==="tags"){const d=new Set(a.map(c=>cs(c)));return n.filter(c=>!d.has(cs(c)))}const l=new Set(a.map(d=>JSON.stringify(d)));return n.filter(d=>!l.has(JSON.stringify(d)))}if(o){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function dd(r,e,t,i,s){const o=s??"en",n=!!r.regional_variants_group_uuid,a={meta:{[r.key]:e}},l=co(r,t,a,s),d=f=>n&&f!==null&&typeof f=="object"&&!Array.isArray(f),c=d(e)?e[o]:e,p=d(l)?l[o]:l,h=jg(i,c,p,r.type);return n?{...d(e)?e:{},[o]:h}:h}const cd=Symbol("clamp-drop");function Ng(r,e,t,i,s){if(r.type!=="select-one"&&r.type!=="multi-select")return e;const o=new Set(t),n=!!r.regional_variants_group_uuid,a=i??"en",l=p=>n&&p!==null&&typeof p=="object"&&!Array.isArray(p),d=l(e)?e[a]:e;let c;if(r.type==="multi-select"){const p=Array.isArray(d)?d:[],h=l(s)?s[a]:s,f=new Set((Array.isArray(h)?h:[]).map(x=>x));c=p.filter(x=>o.has(x)||f.has(x))}else if(d==null||d==="")c=d;else if(o.has(d))c=d;else return cd;return n?{...l(e)?e:{},[a]:c}:c}const ud=q`
  .fm-checkbox {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 3px;
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      background-color 0.12s ease,
      border-color 0.12s ease;
    flex-shrink: 0;
  }
  .fm-checkbox:hover {
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked,
  .fm-checkbox:indeterminate {
    background: var(--sfx-up-primary, #2563eb);
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>")
      center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>")
      center / contain no-repeat;
  }
  .fm-checkbox:indeterminate::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>")
      center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>")
      center / contain no-repeat;
  }
  .fm-checkbox:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,qg=q`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
  }

  /* The overlay is a <dialog> opened with showModal() so it lives in the top
     layer. A plain fixed-position div resolves against the nearest ancestor
     that establishes a containing block, and a host app only has to put a
     transform / filter / will-change / contain on any wrapper around
     <sfx-uploader> for "inset: 0" to snap onto that wrapper's box instead of
     the viewport — which pins the modal to a random corner, mostly off-screen.
     Top-layer elements are always laid out against the viewport, so no host
     CSS can move us. The explicit 100vw/100dvh sizing is belt-and-braces for
     the same reason: it survives even if the dialog fails to go modal. */
  .fm-overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: 0;
    border: 0;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 24, 39, 0.5);
    color: inherit;
    overflow: hidden;
  }
  /* We paint our own scrim on the dialog itself, so the UA backdrop (which
     would double up the dimming) stays transparent. */
  .fm-overlay::backdrop {
    background: transparent;
  }

  /* ---- Confirm discard dialog ---- */
  .fm-confirm-overlay {
    position: absolute;
    inset: 0;
    background: rgba(17, 24, 39, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    border-radius: 14px;
  }
  .fm-confirm {
    background: var(--sfx-up-bg, #fff);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding: 24px;
    max-width: 380px;
    width: 100%;
  }
  /* Title (short, never wraps) + close button share a row, same
     align-items: center convention as .fm-topbar above — safe here because
     the title is a short heading, not the full sentence (that lives in
     .fm-confirm-text below), so the icon always sits level with it. */
  .fm-confirm-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }
  .fm-confirm-title {
    flex: 1;
    font-size: 18px;
    font-weight: 700;
    color: var(--sfx-up-text, #1e293b);
    margin: 0;
    line-height: 1.3;
  }
  .fm-confirm-close {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
  }
  .fm-confirm-close:hover {
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .fm-confirm-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
    margin: 0 0 20px;
    line-height: 1.5;
  }
  .fm-confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .fm-modal {
    width: var(--sfx-up-bulk-modal-width, 980px);
    max-width: min(calc(100vw - 40px), var(--sfx-up-bulk-modal-max-width, 1600px));
    height: var(--sfx-up-bulk-modal-height, 82vh);
    max-height: calc(100vh - 40px);
    background: var(--sfx-up-bg, #fff);
    border-radius: 14px;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Top bar ---- */
  .fm-topbar {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-topbar-title {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fm-topbar-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition:
      background 0.15s ease,
      color 0.15s ease;
    flex-shrink: 0;
  }
  .fm-topbar-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }

  /* Regional-settings sits to the left of the close button — same 8px gap
     rule as the main header. */
  .fm-topbar-regional {
    margin-right: 8px;
  }

  /* ---- Body ---- */
  .fm-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .fm-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Table header ---- */
  .fm-table-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 24px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    border-left: 3px solid transparent;
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
    flex-shrink: 0;
  }
  .fm-th-check {
    width: 20px;
    flex-shrink: 0;
  }
  .fm-th-name {
    width: 244px; /* row-thumb (52) + row gap (12) + row-name (180) */
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover {
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .fm-th-size {
    width: 70px;
    flex-shrink: 0;
    text-align: left;
  }
  .fm-th-field {
    flex: 1;
    min-width: 0;
  }

  .fm-sort-arrow {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-left: 4px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Table body (scrollable) ---- */
  .fm-table-body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
  .fm-table-body::-webkit-scrollbar {
    width: 10px;
  }
  .fm-table-body::-webkit-scrollbar-track {
    background: transparent;
  }
  .fm-table-body::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  .fm-table-body::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  /* ---- Footer ---- */
  .fm-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-footer .spacer {
    flex: 1;
  }

  /* ---- Shared buttons ---- */
  .btn-ghost,
  .btn-primary,
  .btn-back {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(
      135deg,
      var(--sfx-up-primary, #2563eb),
      var(--sfx-up-primary-mid, #3b82f6)
    );
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
    /* Anchor the footer's right edge so Cancel doesn't visibly jump when the
       label flips between "Save" (~60px) and "Next required: <title>" (up to
       320px). The min-width accommodates short labels comfortably without
       forcing extra padding when not needed. */
    min-width: 120px;
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
  /* "Next required: <field>" variant of the primary button.
     Cap the label width so a long field title can't push the button beyond the
     footer; the field title is allowed to ellipsize, while the trailing arrow
     stays pinned and visible. */
  .btn-primary--next {
    max-width: 320px;
    min-width: 0;
  }
  .btn-primary--next .btn-primary-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .btn-primary--next .btn-primary-arrow {
    flex-shrink: 0;
  }
  .btn-back {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    padding: 0 8px;
  }
  .btn-back:hover {
    color: var(--sfx-up-text-secondary, #64748b);
  }

  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  /* ---- Empty state ---- */
  .fm-empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  /* ---- Mobile / tablet responsive ----
     At <=768px the bulk modal goes fullscreen and restacks: sidebar
     on top as a horizontal scroll bar, table header is hidden (rows
     carry their own labels via stacked layout), footer buttons wrap. */
  @media (max-width: 768px) {
    .fm-modal {
      width: 100vw;
      max-width: 100vw;
      height: 100dvh;
      max-height: 100dvh;
      border-radius: 0;
    }
    .fm-topbar {
      padding: 10px 14px;
    }
    .fm-body {
      flex-direction: column;
    }
    .fm-table-header {
      display: none;
    }
    .fm-th-name,
    .fm-th-size {
      width: auto;
    }
    .fm-footer {
      padding: 10px 12px;
      gap: 6px;
      flex-wrap: wrap;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 12px;
      font-size: 13px;
    }
    .fm-footer .btn-primary {
      /* Tighter anchor on mobile so Save doesn't visually dominate at small
         viewports. The footer also wraps below ~360px which keeps everything
         reachable. */
      min-width: 88px;
    }
    .fm-footer .btn-primary--next {
      /* Squeeze the "Next required" button further on mobile so it still
         fits beside Cancel + Back when the field title is long. */
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    .fm-topbar-title {
      font-size: 13px;
    }
    .fm-footer {
      padding: 8px 10px;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 10px;
      font-size: 12px;
      height: 34px;
    }
  }

  ${ud}

  ${Re}
`,Hg=q`
  :host {
    display: block;
    width: 260px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 0 0 12px;
    font-family: var(--sfx-up-font, inherit);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }

  /* Sticky search + collapse-all toolbar pinned to the top of the
     scrollable sidebar. */
  .sb-header {
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: var(--sfx-up-bg, #fff);
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .sb-search {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .sb-search-icon {
    position: absolute;
    left: 9px;
    width: 15px;
    height: 15px;
    color: var(--sfx-up-text-muted, #94a3b8);
    pointer-events: none;
  }
  .sb-search-input {
    width: 100%;
    box-sizing: border-box;
    height: 34px;
    padding: 0 28px 0 30px;
    font-family: inherit;
    font-size: 13px;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-surface, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    outline: none;
    transition:
      border-color 0.12s ease,
      box-shadow 0.12s ease;
  }
  .sb-search-input::placeholder {
    color: var(--sfx-up-text-muted, #94a3b8);
  }
  .sb-search-input:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow: 0 0 0 2px var(--sfx-up-primary-bg, #eff6ff);
  }
  .sb-search-clear {
    position: absolute;
    right: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    border-radius: 4px;
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: pointer;
  }
  .sb-search-clear:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .sb-search-clear svg {
    width: 12px;
    height: 12px;
  }
  .sb-collapse-btn {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
    background: var(--sfx-up-surface, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    cursor: pointer;
    transition:
      color 0.12s ease,
      background-color 0.12s ease,
      border-color 0.12s ease;
  }
  .sb-collapse-btn:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .sb-collapse-btn svg {
    width: 16px;
    height: 16px;
  }
  .sb-empty {
    padding: 24px 16px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
    text-align: center;
  }
  :host::-webkit-scrollbar {
    width: 10px;
  }
  :host::-webkit-scrollbar-track {
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  :host::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  .group-label {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px 6px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    transition:
      background-color 0.12s ease,
      color 0.12s ease;
  }
  .group-label:first-child {
    margin-top: 0;
  }
  .group-label:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .group-label-text {
    flex: 1;
  }
  .group-chevron {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    transition: transform 0.18s ease;
  }
  .group-chevron.open {
    transform: rotate(180deg);
  }

  .field-item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 8px 12px 8px 32px;
    box-sizing: border-box;
    /* Keep the auto-scrolled active field clear of the sticky search header
       (≈58px) when scrollIntoView({ block: 'nearest' }) fires in updated(). */
    scroll-margin-top: 60px;
    cursor: pointer;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
    transition: background 0.12s ease;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    font-family: inherit;
  }
  .field-item:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .field-item.active {
    background: var(--sfx-up-primary-bg, #eff6ff);
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .field-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.55;
  }
  .field-icon svg {
    width: 16px;
    height: 16px;
  }
  .field-item.active .field-icon {
    opacity: 0.85;
  }

  .field-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .field-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
  }

  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
    flex-shrink: 0;
  }
  /* Required field currently has at least one modifiable file missing a value —
     amplify (rather than mute its peers) so the user can correlate the footer's
     "Next required: <field>" button with the sidebar entry it points at. */
  .field-required.unmet {
    font-weight: 800;
    font-size: 16px;
    line-height: 1;
    /* The bigger asterisk has more visual weight above the baseline; pull it
       up a hair so the row keeps the same optical center. */
    margin-top: -1px;
  }

  /* ---- Mobile: sidebar becomes a horizontal scrollable tab bar on top,
     since the modal stacks vertically below 768px. Hide group labels and
     flatten all fields into one row. ---- */
  @media (max-width: 768px) {
    :host {
      width: 100%;
      max-height: 56px;
      min-height: 56px;
      border-right: none;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    :host::-webkit-scrollbar {
      height: 4px;
    }
    .sb-header {
      display: none;
    }
    .group-label {
      display: none;
    }
    .field-item {
      height: 40px;
      padding: 8px 14px;
      width: auto;
      flex-shrink: 0;
      border-radius: 999px;
      margin: 0 4px;
      background: var(--sfx-up-border-light, #f1f5f9);
      font-size: 13px;
    }
    .field-item.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }
    .field-name {
      overflow: visible;
      text-overflow: unset;
    }
  }

  ${Re}
`,Vg=q`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .op-bar {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 24px;
    flex-shrink: 0;
  }

  /* Stacked field (label on top, control below) */
  .op-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }
  .op-field--operation {
    width: 200px;
    flex-shrink: 0;
  }
  .op-field--value {
    flex: 1;
    min-width: 0;
  }
  .op-field-label {
    font-size: 12px;
    font-weight: 400;
    color: var(--sfx-up-text-muted, #94a3b8);
    line-height: 1;
  }

  /* Operation dropdown */
  .op-dropdown-wrap {
    position: relative;
    width: 100%;
  }
  .op-trigger {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    background: var(--sfx-up-bg, #fff);
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    transition:
      border-color 0.12s ease,
      box-shadow 0.12s ease;
  }
  .op-trigger--static {
    cursor: default;
  }
  .op-trigger-label {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .op-chevron {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
  }
  .op-trigger.open .op-chevron {
    transform: rotate(180deg);
  }
  .op-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 20;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .op-option {
    padding: 10px 12px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
    font-family: inherit;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }
  .op-option:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .op-option.active {
    color: var(--sfx-up-primary, #2563eb);
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-weight: 500;
  }

  /* Value input area */
  .op-value {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .op-value > sfx-metadata-field-edit {
    flex: 1;
    min-width: 0;
  }

  /* Apply button — align with the TOP of the input column so it sits
     next to the control (not the bottom of multi-line textareas). The
     op-bar row uses align-items: flex-start, so this sits at the top. */
  .btn-apply {
    height: 36px;
    align-self: flex-start;
    margin-top: 18px; /* tuned to line up with input top edge */
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    background: var(--sfx-up-primary, #2563eb);
    color: #fff;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }
  .btn-apply:hover:not(:disabled) {
    background: var(--sfx-up-primary-hover, #1d4ed8);
  }
  .btn-apply:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* Unsupported field notice (rendered in place of op-bar controls). */
  .op-unsupported {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 14px;
    border: 1px dashed var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    background: var(--sfx-up-surface, #f8fafc);
    font-size: 13px;
    line-height: 1.4;
    flex: 1;
    min-width: 0;
  }
  .op-unsupported svg {
    width: 16px;
    height: 16px;
    margin-top: 1px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
  .op-unsupported-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .op-unsupported-title {
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
  }
  .op-unsupported-msg {
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Mobile: stack op-field rows vertically so the operation
     dropdown, value input, and Apply button each get full width. ---- */
  @media (max-width: 768px) {
    .op-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 12px 14px;
    }
    .op-field--operation {
      width: 100%;
    }
    .btn-apply {
      align-self: stretch;
      margin-top: 0;
      height: 38px;
      font-size: 14px;
    }
  }

  ${Re}
`,Kg=q`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 24px;
    border-left: 3px solid transparent;
  }

  .row-check {
    width: 20px;
    flex-shrink: 0;
  }

  .row-thumb {
    width: 52px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 6px;
    object-fit: cover;
    background: var(--sfx-up-border-light, #f1f5f9);
  }
  .row-thumb-fallback {
    object-fit: contain;
    padding: 2px;
    box-sizing: border-box;
  }

  .row-name {
    width: 180px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
  }

  .row-size {
    width: 70px;
    flex-shrink: 0;
    text-align: left;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  .row-field {
    flex: 1;
    min-width: 0;
    position: relative;
  }
  .row-field-edit {
    min-width: 0;
  }

  .row-field-na {
    font-size: 12px;
    font-style: italic;
    color: var(--sfx-up-text-muted, #9ca3af);
    padding: 6px 0;
  }

  .row-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* ---- Mobile: stack row contents vertically. Top row has
     checkbox + thumb + name, then size below name, and the field
     editor spans the full row width underneath. ---- */
  @media (max-width: 768px) {
    .row {
      flex-wrap: wrap;
      padding: 10px 14px;
      gap: 10px;
    }
    .row-name {
      flex: 1;
      width: auto;
      min-width: 0;
    }
    .row-size {
      width: auto;
      font-size: 12px;
    }
    .row-field {
      flex-basis: 100%;
      margin-left: 32px;
    }
  }

  @media (max-width: 440px) {
    .row {
      padding: 10px 12px;
    }
    .row-thumb {
      width: 44px;
      height: 32px;
    }
    .row-field {
      margin-left: 0;
    }
  }

  ${ud}

  ${Re}
`,Yg=q`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .diff-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    min-height: 28px;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* ---- Chips (array diff) ---- */
  .diff-chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1.4;
  }
  .diff-chip--kept {
    background: var(--sfx-up-border-light, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .diff-chip--empty {
    opacity: 0.5;
  }
  .diff-chip--added {
    background: #dcfce7;
    color: #166534;
    font-weight: 500;
  }
  .diff-chip--removed {
    background: #fee2e2;
    color: #991b1b;
  }
  .diff-chip--removed s {
    text-decoration: line-through;
  }

  /* ---- Scalar diff ---- */
  .diff-old {
    color: #991b1b;
  }
  .diff-old s {
    text-decoration: line-through;
    opacity: 0.7;
  }
  .diff-arrow {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 13px;
    flex-shrink: 0;
  }
  .diff-new {
    color: #166534;
    font-weight: 500;
  }
  .diff-scalar-text {
    font-size: 14px;
  }

  /* ---- Accessibility ---- */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`,Gg=q`
  :host {
    display: block;
  }
  /* The virtualizer scrolls inside the modal's .fm-table-body; keep it a
     block so its content-height sizer lays out correctly. */
  lit-virtualizer {
    display: block;
  }
  /* The virtualizer positions each row absolutely without setting a width, so
     a row would otherwise shrink to its content and the flex:1 field column
     would collapse. Force full width to match the non-virtualized rows. */
  lit-virtualizer > sfx-bulk-meta-row {
    width: 100%;
  }
`;var Wg=Object.defineProperty,ne=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Wg(e,t,s),s},ut;const oe=(ut=class extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this.primaryAction="save",this.exitAction="cancel",this.operationMode="full",this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._confirmAllowApply=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._conflictedFieldKey=null,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onDialogCancel=e=>{e.preventDefault()},this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement)||await this._onClose()},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmApply=()=>{var t,i;(((t=this._opBarEl)==null?void 0:t.applyPending())??!1)&&(this._confirmVisible=!1,(i=this._confirmResolve)==null||i.call(this,!0),this._confirmResolve=null)},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,l;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const s=i[0],o=i[i.length-1],n=(l=this.shadowRoot)==null?void 0:l.activeElement;e.shiftKey&&n===s?(e.preventDefault(),o.focus()):!e.shiftKey&&n===o&&(e.preventDefault(),s.focus())},this._onPendingChange=e=>{const{operation:t,value:i,taxonomyEntry:s}=e.detail,o=this._activeField;((o==null?void 0:o.type)==="taxonomy-node"?s==null:qe(i))&&(!o||Vr(t,o.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:i,taxonomyEntry:s})},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e)},this._onBulkApply=e=>{const t=this._activeField;if(!t)return;const{operation:i,value:s,taxonomyEntry:o}=e.detail,{updates:n,appliedIds:a}=this._computeBulkUpdates(t,i,s);this._setStagedBulk(n),t.type==="taxonomy-node"&&o!==void 0&&this._setStagedTaxonodeBulk(a,t.key,o)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:s}=e.detail;this._setStagedTaxonodeSingle(t,i,s)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null||await this._confirmDiscardPending()&&(this._setPendingOp(null),this._refreshMissingRequired(),this._refreshConflictedField(),!(this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null)&&(this._commitStagedChanges(),this._emitClose(!0)))},this._onCancel=async()=>{await this._confirmDiscardAll()&&this._emitClose()},this._onBack=async()=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._commitStagedChanges(),this._emitClose(!1))},this._onClose=async()=>{if(this.exitAction==="back"){await this._onBack();return}await this._confirmDiscardAll()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._normalizeSchema(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_showModally(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog.fm-overlay");if(!(!e||e.open||typeof e.showModal!="function"))try{e.showModal()}catch{}}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},ut._PREVIEW_DEBOUNCE_MS)}_initStaged(){var a,l;const e=new Map,t=new Map,i=new Set,s=new Map,o=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const d of this.files){const c=new Map;if(d.meta)for(const[p,h]of Object.entries(d.meta))c.set(p,h);if(o){const p=d.product;(p==null?void 0:p.ref)!==void 0&&c.set(Ot,p.ref),(p==null?void 0:p.position)!==void 0&&c.set(It,p.position)}Array.isArray(d.tags)&&d.tags.length>0&&c.set(yo,[...d.tags]),e.set(d.id,c),d.taxonodes&&t.set(d.id,new Map(Object.entries(d.taxonodes))),i.add(d.id),s.set(d.id,d.status?d:{...d,status:"idle"})}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=s,this._recomputeResolvedSchemas();const n=this.initialFieldKey;if(n&&((l=this.schema)!=null&&l.fieldsByKey.has(n)))this._activeFieldKey=n;else if(this.schema&&this.schema.fields.length>0){const d=this._groupOfFieldMap(),c=this.schema.fields.find(p=>this._isFieldNavigable(p,d));this._activeFieldKey=(c==null?void 0:c.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(e,t,i){const s=new Map(this._staged),o=new Map(s.get(e)??new Map);o.set(t,i),s.set(e,o),this._staged=s}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,s,o]of e){const n=new Map(t.get(i)??new Map);n.set(s,o),t.set(i,n)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const s=new Map(this._stagedTaxonodes);for(const o of e){const n=new Map(s.get(o)??new Map);n.set(t,i),s.set(o,n)}this._stagedTaxonodes=s}_setStagedTaxonodeSingle(e,t,i){const s=new Map(this._stagedTaxonodes),o=new Map(s.get(e)??new Map);o.set(t,i),s.set(e,o),this._stagedTaxonodes=s}_isTaxonodeEntryUnedited(e,t){var o,n,a;const i=(o=this._stagedTaxonodes.get(e))==null?void 0:o.get(t);if(i===void 0)return!0;if(i===null)return!1;const s=(a=(n=this._originalFiles.get(e))==null?void 0:n.taxonodes)==null?void 0:a[t];return s?i.uuid===s.uuid||i.suid===s.suid:!1}_syncStagedTaxonodesFromFiles(){var i;let e=!1;const t=new Map(this._stagedTaxonodes);for(const s of this.files)if(s.taxonodes)for(const[o,n]of Object.entries(s.taxonodes)){const a=this._isTaxonodeEntryUnedited(s.id,o),l=(i=t.get(s.id))==null?void 0:i.get(o),d=l!=null&&n!=null&&(l.uuid===n.uuid||l.suid===n.suid),c=l==null&&n==null;if(!a||d||c)continue;const p=new Map(t.get(s.id)??new Map);p.set(o,n??null),t.set(s.id,p),e=!0;const h=this._originalFiles.get(s.id);h&&this._originalFiles.set(s.id,{...h,taxonodes:{...h.taxonodes??{},[o]:n??null}})}e&&(this._stagedTaxonodes=t)}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,s;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const o of this._selected){const n=this._originalFiles.get(o),a=(i=this._staged.get(o))==null?void 0:i.get(e.key),l=a!==void 0?a:(s=n==null?void 0:n.meta)==null?void 0:s[e.key],d=Ri(l);d.length&&(t=wr(t,d,!1))}return t.filter(o=>typeof o!="string")}_originalValue(e,t){var s,o;const i=this._originalFiles.get(e);if(i){if(kr(t)){const n=$r(t);return n?(s=i.product)==null?void 0:s[n]:void 0}return Or(t)?Array.isArray(i.tags)?[...i.tags]:[]:(o=i.meta)==null?void 0:o[t]}}_stagedWithPendingPreview(){const e=this._previewOp,t=this._activeField;if(!e||!t||qe(e.value)||this._selected.size===0)return this._staged;const{updates:i}=this._computeBulkUpdates(t,e.operation,e.value);if(i.length===0)return this._staged;const s=new Map(this._staged);for(const[o,n,a]of i){const l=new Map(s.get(o)??new Map);l.set(n,a),s.set(o,l)}return s}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&_l(this.schema,this.config)?ju(this._stagedWithPendingPreview(),this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const n of this.schema.fields)if(t.has(n.key)){i=n.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const s=this._missingRequiredKeys;let o=s.size!==t.size;if(!o){for(const n of t)if(!s.has(n)){o=!0;break}}o&&(this._missingRequiredKeys=t)}_refreshConflictedField(){const e=this.schema&&this.dependencies.length>0?Nu(this._staged,this._originalFiles,this.schema,this.dependencies):null;e!==this._conflictedFieldKey&&(this._conflictedFieldKey=e)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[o,n]of i)s[o]=n;e.push({id:t.id,mime:t.type??"",meta:s})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=vu(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[o,n]of i)s[o]=n;e.set(t.id,ei({mime:t.type??"",meta:s},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var o;if(!this.schema||!this._activeFieldKey)return;const e=(o=this.schema.fieldsByKey)==null?void 0:o.get(this._activeFieldKey);if(!!e&&this._cachedBulkResolved.size===0)return;const i=this._groupOfFieldMap();if(e&&this._isFieldNavigable(e,i))return;const s=this.schema.fields.find(n=>this._isFieldNavigable(n,i));this._setPendingOp(null),this._activeFieldKey=(s==null?void 0:s.key)??""}_groupOfFieldMap(){var t,i;if(this.schema&&((t=this._groupOfFieldCache)==null?void 0:t.schema)===this.schema)return this._groupOfFieldCache.map;const e=new Map;for(const s of((i=this.schema)==null?void 0:i.groups)??[])for(const o of s.fields)e.set(o,s);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return ho(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){const i=t.get(e);return!(Us(e,i,this._cachedBulkResolved)||i&&go(i)&&!this._isFieldRequiredBulk(e)&&!no(e,i,this._cachedBulkResolved))}_recomputeFilledFields(){var o;const e=new Set,t=this._stagedWithPendingPreview();for(const n of((o=this.schema)==null?void 0:o.fields)??[])for(const[a,l]of t){const d=l.get(n.key),c=this._originalValue(a,n.key);if(d!==void 0&&!qe(d)&&JSON.stringify(d)!==JSON.stringify(c)){e.add(n.key);break}}const i=this._filledFieldsCache;let s=i.size!==e.size;if(!s){for(const n of e)if(!i.has(n)){s=!0;break}}s&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const e=[...this.files];e.sort((t,i)=>{const s=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?s:-s}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!qe(this._pendingOp.value)}get _hasStagedChanges(){var e;for(const[t,i]of this._staged)for(const[s,o]of i)if(JSON.stringify(o)!==JSON.stringify(this._originalValue(t,s)))return!0;for(const[t,i]of this._stagedTaxonodes){const s=((e=this._originalFiles.get(t))==null?void 0:e.taxonodes)??{};for(const[o,n]of i){const a=s[o]??null;if(JSON.stringify(n??null)!==JSON.stringify(a??null))return!0}}return!1}_confirmDiscardPending(){return this._hasPendingValue?this._openDiscardConfirm(!0):Promise.resolve(!0)}_confirmDiscardAll(){return!this._hasPendingValue&&!this._hasStagedChanges?Promise.resolve(!0):this._openDiscardConfirm(!1)}_openDiscardConfirm(e){return new Promise(t=>{this._confirmResolve=t,this._confirmAllowApply=e,this._confirmVisible=!0})}_normalizeSchema(){if(!this.schema)return;const e=$l(this.schema);e!==this.schema&&(this.schema=e)}willUpdate(e){e.has("schema")&&this._normalizeSchema(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden()),(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies")||e.has("_previewOp")||e.has("_selected"))&&(this._refreshMissingRequired(),this._refreshConflictedField()),(e.has("_staged")||e.has("schema")||e.has("_previewOp")||e.has("_selected"))&&this._recomputeFilledFields(),(e.has("files")||e.has("_sortAsc"))&&this._recomputeSortedFiles(),e.has("files")&&this._syncStagedTaxonodesFromFiles()}updated(e){var t;(t=super.updated)==null||t.call(this,e),this._showModally(),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var o;const i=this._confirmAllowApply?".fm-confirm .btn-primary":".fm-confirm .fm-confirm-close",s=(o=this.shadowRoot)==null?void 0:o.querySelector(i);s==null||s.focus()})}_computeBulkUpdates(e,t,i){var a;const s=At(e,this.config),o=[],n=new Set;for(const l of this._selected){const d=(a=this._cachedPerFileResolved.get(l))==null?void 0:a.get(e.ckey);if(d!=null&&d.hidden)continue;const c=this._staged.get(l),p=c!=null&&c.has(e.key)?c.get(e.key):this._originalValue(l,e.key)??null;let h=dd(e,p,i,t,s);if(d!=null&&d.allowedValues){const f=Ng(e,h,d.allowedValues,s,p);if(f===cd)continue;h=f}o.push([l,e.key,h]),n.add(l)}return{updates:o,appliedIds:n}}_commitStagedChanges(){const e=[],t=[],i=[];for(const[o,n]of this._staged){if(!this._originalFiles.get(o))continue;const l={},d={};for(const[c,p]of n){const h=this._originalValue(o,c);if(JSON.stringify(p)!==JSON.stringify(h))if(kr(c)){const f=$r(c);if(!f)continue;const x=p===""||p==null;f==="position"?d.position=x?void 0:Number(p):d.ref=x?void 0:String(p)}else if(Or(c)){const f=Array.isArray(p)?p:[];i.push({fileId:o,tags:f})}else l[c]=p}Object.keys(l).length>0&&e.push({fileId:o,meta:l}),Object.keys(d).length>0&&t.push({fileId:o,product:d})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),i.length>0&&this.dispatchEvent(new CustomEvent("tags-save-batch",{detail:{changes:i},bubbles:!0,composed:!0}));const s=[];for(const[o,n]of this._stagedTaxonodes){const a=this._originalFiles.get(o);if(!a)continue;const l=a.taxonodes??{},d={};for(const[c,p]of n){const h=l[c]??null;JSON.stringify(p??null)!==JSON.stringify(h??null)&&(d[c]=p??null)}Object.keys(d).length>0&&s.push({fileId:o,taxonodes:d})}s.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:s},bubbles:!0,composed:!0}))}_emitClose(e=!1){this.dispatchEvent(new CustomEvent("metadata-close",{detail:{saved:e},bubbles:!0,composed:!0}))}render(){var x,m,C,E;if(!((m=(x=this.schema)==null?void 0:x.fields)!=null&&m.length))return u`
        <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
          <div class="fm-modal" @click=${k=>k.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title"
                >${T("fillMultipleAssets","Fill multiple assets")}</span
              >
              <button class="fm-topbar-close" @click=${this._onClose} title=${T("close","Close")}>
                <svg
                  width="18"
                  height="18"
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
            <div class="fm-empty">
              ${T("noMetadataFieldsConfigured","No metadata fields configured")}
            </div>
          </div>
        </dialog>
      `;const e=this._activeField,t=this._sortedFilesCache,i=this._selected.size===this.files.length&&this.files.length>0,s=this._selected.size>0&&!i,o=this._missingRequiredFieldKey,n=this._cachedBulkResolved,a=this._cachedPerFileResolved,l=e==null?void 0:e.ckey,d=l?n.get(l):void 0,c=o!=null&&this._activeFieldKey===o,p=o!=null&&!c,h=this._conflictedFieldKey!=null,f=this.primaryAction==="upload"?this.files.length>1?T("uploadAll","Upload all ({{count}})",{count:this.files.length}):T("upload","Upload"):T("save","Save");return u`
      <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
        <div class="fm-modal" @click=${k=>k.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${T("fillMultipleAssets","Fill multiple assets")}</span>
            ${(C=this.schema.regionalVariantsGroups)!=null&&C.length?u`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((E=this.config)==null?void 0:E.regionalFilters)??{}}
                ></sfx-regional-settings>`:v}
            <button class="fm-topbar-close" @click=${this._onClose} title=${T("close","Close")}>
              <svg
                width="18"
                height="18"
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

          <!-- Body -->
          <div class="fm-body">
            <!-- Sidebar -->
            <sfx-bulk-meta-sidebar
              .schema=${this.schema}
              .activeFieldKey=${this._activeFieldKey}
              .filledFields=${this._filledFieldsCache}
              .missingRequiredKeys=${this._missingRequiredKeys}
              .config=${this.config}
              .bulkResolvedSchema=${n}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              ${e?u`
                    <!-- Op bar -->
                    <sfx-bulk-meta-op-bar
                      .field=${e}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      .allowedValues=${(d==null?void 0:d.allowedValues)??null}
                      .operationMode=${this.operationMode}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>

                    <!-- Table header -->
                    <div class="fm-table-header">
                      <div class="fm-th-check">
                        <input
                          type="checkbox"
                          class="fm-checkbox"
                          .checked=${i}
                          .indeterminate=${s}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${T("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${T("size","Size")}</div>
                      <div class="fm-th-field">${e.title}</div>
                    </div>

                    <!-- Table body -->
                    <div class="fm-table-body">
                      <sfx-bulk-meta-table
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._previewOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        .perFileResolved=${a}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    </div>
                  `:u`
                    <!-- Every group is hidden by default with no required field
                         to surface — nothing to edit, but the schema isn't empty. -->
                    <div class="fm-empty" role="status" aria-live="polite">
                      ${T("allMetadataFieldsHidden","All metadata fields are currently hidden")}
                    </div>
                  `}
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <!-- One exit, and which one depends on what the host is holding.
                 Under 'back' the host still has the staged files, so Back
                 returns there keeping everything filled so far — there is no
                 transaction to cancel, so no Cancel is offered. Under
                 'cancel' the assets already exist and Cancel means what it
                 says. See the exitAction property. -->
            ${this.exitAction==="back"?u`
                  <button
                    class="btn-back"
                    @click=${this._onBack}
                    title=${T("backToFilesHint","Back to your files — filled metadata is kept")}
                  >
                    ← ${T("backToFiles","Back to files")}
                  </button>
                  <div class="spacer"></div>
                `:u`
                  <div class="spacer"></div>
                  <button class="btn-ghost" @click=${this._onCancel}>
                    ${T("cancel","Cancel")}
                  </button>
                `}
            <!-- Single primary button so transitions between Save and "Next
                 metadata" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Four states:
                   1. Nothing missing, no conflict   → "Save"/"Upload" (enabled)
                   2. Missing field is NOT active     → "Next metadata →" (always
                                                         enabled — pure navigation,
                                                         never gated by conflicts)
                   3. Missing field IS active         → "Save"/"Upload" (disabled)
                   4. Nothing missing, unresolved
                      dep conflict                    → "Save"/"Upload" (disabled)
                 The label never names the field itself — some titles are long
                 enough to distort the button. -->
            <button
              class=${To({"btn-primary":!0,"btn-primary--next":p})}
              @click=${p?this._onJumpToNextRequired:this._onSave}
              ?disabled=${c||!p&&h}
              title=${p?T("jumpToNextMetadata","Jump to next required field"):h?T("resolveConflictBeforeContinuing","Resolve the conflicting value before continuing"):""}
            >
              ${p?u`<span class="btn-primary-label">${T("nextMetadata","Next metadata")}</span
                    ><span class="btn-primary-arrow" aria-hidden="true">→</span>`:f}
            </button>
          </div>

          ${this._confirmVisible?u`
                <div
                  class="fm-confirm-overlay"
                  @click=${this._onConfirmCancel}
                  @keydown=${this._onConfirmKeydown}
                >
                  <div
                    class="fm-confirm"
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="fm-confirm-title"
                    aria-describedby="fm-confirm-desc"
                    @click=${k=>k.stopPropagation()}
                  >
                    <div class="fm-confirm-header">
                      <h3 class="fm-confirm-title" id="fm-confirm-title">
                        ${this._confirmAllowApply?T("unappliedChangesTitle","Unapplied changes"):T("unsavedChangesTitle","Unsaved changes")}
                      </h3>
                      <button
                        class="fm-confirm-close"
                        aria-label=${T("cancel","Cancel")}
                        @click=${this._onConfirmCancel}
                      >
                        <svg
                          width="16"
                          height="16"
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
                    <p class="fm-confirm-text" id="fm-confirm-desc">
                      ${this._confirmAllowApply?T("unappliedChangesBody","You have unapplied bulk changes for this field. Apply them before switching, or discard to continue without saving."):T("discardBulkChanges","You have unsaved changes. Discard them?")}
                    </p>
                    <div class="fm-confirm-actions">
                      ${this._confirmAllowApply?u`
                            <button class="btn-ghost" @click=${this._onConfirmOk}>
                              ${T("discard","Discard")}
                            </button>
                            <button class="btn-primary" @click=${this._onConfirmApply}>
                              ${T("apply","Apply")}
                            </button>
                          `:u`<button class="btn-primary" @click=${this._onConfirmOk}>
                            ${T("discard","Discard")}
                          </button>`}
                    </div>
                  </div>
                </div>
              `:v}
        </div>
      </dialog>
    `}},ut.styles=[qg],ut._PREVIEW_DEBOUNCE_MS=150,ut);ne([g({attribute:!1})],oe.prototype,"schema");ne([g({attribute:!1})],oe.prototype,"files");ne([g({attribute:!1})],oe.prototype,"config");ne([g({attribute:!1})],oe.prototype,"autocomplete");ne([g({attribute:!1})],oe.prototype,"taxonomyService");ne([g({attribute:!1})],oe.prototype,"ultratags");ne([g({attribute:!1})],oe.prototype,"defaultLanguage");ne([g({attribute:!1})],oe.prototype,"initialFieldKey");ne([g({attribute:!1})],oe.prototype,"dependencies");ne([g({type:String})],oe.prototype,"primaryAction");ne([g({type:String})],oe.prototype,"exitAction");ne([g({type:String})],oe.prototype,"operationMode");ne([P()],oe.prototype,"_activeFieldKey");ne([P()],oe.prototype,"_staged");ne([P()],oe.prototype,"_stagedTaxonodes");ne([P()],oe.prototype,"_selected");ne([P()],oe.prototype,"_sortAsc");ne([P()],oe.prototype,"_previewOp");ne([P()],oe.prototype,"_confirmVisible");ne([P()],oe.prototype,"_confirmAllowApply");ne([Ls("sfx-bulk-meta-op-bar")],oe.prototype,"_opBarEl");ne([P()],oe.prototype,"_missingRequiredFieldKey");ne([P()],oe.prototype,"_missingRequiredKeys");ne([P()],oe.prototype,"_conflictedFieldKey");let Jg=oe;ie("sfx-bulk-metadata-modal",Jg);var Xg=Object.defineProperty,rt=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Xg(e,t,s),s};const Jo=class Jo extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return ho(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var t;const e=((t=this.schema)==null?void 0:t.groups)??[];return e.length>0&&e.every(i=>this._collapsed.has(i.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var t;this._query="";const e=(t=this.renderRoot)==null?void 0:t.querySelector(".sb-search-input");e==null||e.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,s;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(s=this.renderRoot)==null?void 0:s.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return v;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),i=t.length>0;let s=0;const o=this.schema.groups.map(n=>{var d,c;const a=this._isNarrow||i||!this._collapsed.has(n.uuid);if(e&&n.ckey&&((d=e.get(n.ckey))!=null&&d.hidden))return v;let l=e?n.fields.filter(p=>!Us(p,n,e)):n.fields;return go(n)&&(l=l.filter(p=>this._isRequired(p)||no(p,n,e))),i&&!((c=n.name)!=null&&c.toLowerCase().includes(t))&&(l=l.filter(p=>{var h;return(h=p.title)==null?void 0:h.toLowerCase().includes(t)})),l.length===0?v:(s+=l.length,u`
        <button
          class="group-label"
          @click=${()=>this._toggleGroup(n.uuid)}
          aria-expanded=${a}
        >
          <span class="group-label-text">${n.name}</span>
          <svg
            class="group-chevron ${a?"open":""}"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
        ${a?l.map(p=>u`
                <button
                  class="field-item ${this.activeFieldKey===p.key?"active":""}"
                  @click=${()=>this._onFieldClick(p.key)}
                >
                  <span class="field-icon" aria-hidden="true">${Vp(p.type)}</span>
                  <span class="field-name">${p.title}</span>
                  ${this.filledFields.has(p.key)?u`<span class="field-dot"></span>`:v}
                  ${this._isRequired(p)?u`<span
                        class=${To({"field-required":!0,unmet:this.missingRequiredKeys.has(p.key)})}
                        aria-hidden="true"
                        >*</span
                      >`:v}
                </button>
              `):v}
      `)});return u`
      <div class="sb-header">
        <div class="sb-search">
          <svg
            class="sb-search-icon"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="4.5" />
            <line x1="11" y1="11" x2="14" y2="14" />
          </svg>
          <input
            class="sb-search-input"
            type="text"
            .value=${this._query}
            placeholder=${T("searchFields","Search fields...")}
            aria-label=${T("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?u`<button
                class="sb-search-clear"
                type="button"
                aria-label=${T("clear","Clear")}
                @click=${this._clearSearch}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="4" x2="12" y2="12" />
                  <line x1="12" y1="4" x2="4" y2="12" />
                </svg>
              </button>`:v}
        </div>
        <button
          class="sb-collapse-btn"
          type="button"
          aria-label=${this._allCollapsed?T("expandAll","Expand all"):T("collapseAll","Collapse all")}
          title=${this._allCollapsed?T("expandAll","Expand all"):T("collapseAll","Collapse all")}
          @click=${this._toggleAll}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="5 6 8 3 11 6" />
            <polyline points="5 10 8 13 11 10" />
          </svg>
        </button>
      </div>
      ${i&&s===0?u`<div class="sb-empty">${T("noFieldsMatch","No fields match")}</div>`:o}
    `}};Jo.styles=[Hg];let Me=Jo;rt([g({attribute:!1})],Me.prototype,"schema");rt([g({attribute:!1})],Me.prototype,"activeFieldKey");rt([g({attribute:!1})],Me.prototype,"filledFields");rt([g({attribute:!1})],Me.prototype,"missingRequiredKeys");rt([g({attribute:!1})],Me.prototype,"config");rt([g({attribute:!1})],Me.prototype,"bulkResolvedSchema");rt([P()],Me.prototype,"_collapsed");rt([P()],Me.prototype,"_isNarrow");rt([P()],Me.prototype,"_query");ie("sfx-bulk-meta-sidebar",Me);var Zg=Object.defineProperty,Oe=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Zg(e,t,s),s},tt;const Ce=(tt=class extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this.operationMode="full",this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry,this._emitPendingChange()},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var o;if(e.key!=="Enter")return;const t=(o=this.field)==null?void 0:o.type;if(!t||!tt._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(n=>n instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const s=e.composedPath().find(n=>n instanceof HTMLInputElement);s&&s.value!==void 0&&(this._value=s.value),this._onApply()}}get _availableOps(){return this.field?Bg(this.field.type):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??tt._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("operationMode")&&this.operationMode==="set-only"&&(this._operation="SET",this._opDropdownOpen=!1),e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}get _taxonomyEntryForEmit(){var e;if(((e=this.field)==null?void 0:e.type)==="taxonomy-node")return this._operation==="DELETE"?null:this._pendingTaxonode}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0}))}applyPending(){return this._isApplyDisabled?!1:(this._onApply(),!0)}_onApply(){var e;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!Vr(this._operation,(e=this.field)==null?void 0:e.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?Vs.has((e=this.field)==null?void 0:e.type)?qe(this._value):Ks.has((t=this.field)==null?void 0:t.type)?qe(this._value):!1:qe(this._value)}render(){var o;if(!this.field)return v;if(qi(this.field)){const n=xo();return u`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${n}">
            ${Fl}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${n}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,i=e.find(n=>n.key===this._operation),s=this.operationMode==="set-only";return u`
      <div class="op-bar">
        ${s?v:u`<div class="op-field op-field--operation">
              <span class="op-field-label">${T("operation","Operation")}</span>
              ${t?u`
                    <div class="op-dropdown-wrap">
                      <button
                        class="op-trigger ${this._opDropdownOpen?"open":""}"
                        @click=${this._onOpToggle}
                      >
                        <span class="op-trigger-label"
                          >${(i==null?void 0:i.label)??T("bulkOpSet","Set")}</span
                        >
                        <svg
                          class="op-chevron"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                      ${this._opDropdownOpen?u`
                            <div class="op-menu">
                              ${e.map(n=>u`
                                  <button
                                    class="op-option ${n.key===this._operation?"active":""}"
                                    @click=${()=>this._onOpSelect(n.key)}
                                  >
                                    ${n.label}
                                  </button>
                                `)}
                            </div>
                          `:v}
                    </div>
                  `:u`
                    <div class="op-trigger op-trigger--static">
                      <span class="op-trigger-label"
                        >${(i==null?void 0:i.label)??T("bulkOpOverwrite","Overwrite")}</span
                      >
                    </div>
                  `}
            </div>`}
        ${Vr(this._operation,this.field.type)?u`
              <div class="op-field op-field--value">
                ${this.field.type==="geopoint"?v:u`<span class="op-field-label">${this.field.title}</span>`}
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @taxonomy-entry-change=${this._onTaxonomyEntryChange}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
                    .taxonomyService=${this.taxonomyService}
                    .taxonomyEntry=${this._pendingTaxonode}
                    .ultratags=${this.ultratags}
                    .language=${(o=this.config)==null?void 0:o.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:v}

        <button class="btn-apply" ?disabled=${this._isApplyDisabled} @click=${this._onApply}>
          ${s?T("applyToSelected","Apply to selected"):T("apply","Apply")}
        </button>
      </div>
    `}},tt.styles=[Vg],tt._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),tt);Oe([g({attribute:!1})],Ce.prototype,"field");Oe([g({attribute:!1})],Ce.prototype,"autocomplete");Oe([g({attribute:!1})],Ce.prototype,"taxonomyService");Oe([g({attribute:!1})],Ce.prototype,"ultratags");Oe([g({attribute:!1})],Ce.prototype,"defaultLanguage");Oe([g({attribute:!1})],Ce.prototype,"ultratagsPresentOnSelection");Oe([g({attribute:!1})],Ce.prototype,"config");Oe([g({type:Number})],Ce.prototype,"selectedCount");Oe([g({attribute:!1})],Ce.prototype,"allowedValues");Oe([g({type:String})],Ce.prototype,"operationMode");Oe([P()],Ce.prototype,"_operation");Oe([P()],Ce.prototype,"_value");Oe([P()],Ce.prototype,"_pendingTaxonode");Oe([P()],Ce.prototype,"_opDropdownOpen");let Qg=Ce;ie("sfx-bulk-meta-op-bar",Qg);const em=new Set(["multi-select","tags","ultratags"]),wi=new Map;function pd(r,e){return e.sid&&r.get(e.sid)||e.slug&&r.get(e.slug)||e.uuid&&r.get(e.uuid)||void 0}function Fa(r){return r!=null&&r.i18n&&Object.keys(r.i18n).length>0?r.i18n:void 0}function hd(r,e){const t=new Map(r??[]);for(const[i,s]of e??[]){const o=Fa(t.get(i));if(!o){t.set(i,s);continue}t.set(i,{...s,i18n:{...o,...Fa(s)??{}}})}return t}function La(r,e,t){return!e.regional_variants_group_uuid||r==null||typeof r!="object"||Array.isArray(r)?r:r[t??"en"]}function Ua(r){return Array.isArray(r)?r:[]}function Da(r){return r==null||r===""||Array.isArray(r)&&r.length===0?!0:typeof r=="object"&&!Array.isArray(r)?!Object.values(r).some(e=>e!=null&&e!==""):!1}function Kr(r,e){var i;const t=(i=r.possible_values)==null?void 0:i.find(s=>s.internal_unique_value===e||s.api_value===e);return(t==null?void 0:t.label)??String(e)}function za(r,e){if(e==null||e==="")return"";switch(r.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Kr(r,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Ma(r){return typeof r=="string"?r:r&&typeof r=="object"&&"label"in r?String(r.label):String(r)}function tm(r,e){const t=r.map(Ma),i=e.map(Ma),s=new Set(t),o=new Set(i),n=[];for(const a of t)o.has(a)||n.push({label:a,state:"removed"});for(const a of i)n.push({label:a,state:s.has(a)?"kept":"added"});return n}function im(r,e){return!e||e.size===0?r:r.map(t=>{if(t.i18n)return t;const i=pd(e,t);return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:i.i18n}:t})}function sm(r,e,t,i,s){const o=Ri(r),n=Ri(e),a=t||"en",l=i||a,d=x=>x.sid||x.slug||x.uuid||"",c=x=>{const m=x.i18n?x:pd(s,x)??x;return Cs({i18n:m.i18n,slug:m.slug||x.slug||""},a,l).value||x.slug||x.sid||""},p=new Set(o.map(d).filter(Boolean)),h=new Set(n.map(d).filter(Boolean)),f=[];for(const x of o){const m=d(x);h.has(m)||f.push({label:c(x),state:"removed"})}for(const x of n){const m=d(x);f.push({label:c(x),state:p.has(m)?"kept":"added"})}return f}function rm(r,e,t){const i=new Set(r.map(n=>JSON.stringify(n))),s=new Set(e.map(n=>JSON.stringify(n))),o=[];for(const n of r){const a=JSON.stringify(n);if(!s.has(a)){const l=typeof n=="string"?Kr(t,n):String(n);o.push({label:l,state:"removed"})}}for(const n of e){const a=JSON.stringify(n),l=typeof n=="string"?Kr(t,n):String(n);o.push({label:l,state:i.has(a)?"kept":"added"})}return o}function om(r,e,t,i,s,o){const n=At(r,i),a=i==null?void 0:i.language,l=La(e,r,n),d=La(t,r,n);if(em.has(r.type)){if(r.type==="ultratags")return{kind:"array",items:sm(e,t,a,s,o??wi)};const c=Ua(l),p=Ua(d);return r.type==="tags"?{kind:"array",items:tm(c,p)}:{kind:"array",items:rm(c,p,r)}}return{kind:"scalar",oldDisplay:za(r,l),newDisplay:za(r,d),oldEmpty:Da(l),newEmpty:Da(d)}}var nm=Object.defineProperty,je=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&nm(e,t,s),s},pt;const De=(pt=class extends G{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._pendingFrontendLookup=wi,this._knownUltratagsLookupByField=new Map,this._knownUltratagsLookup=wi,this._keyForFile=e=>e.id,this._renderRow=e=>{const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),s=(i==null?void 0:i.allowedValues)??null,o=(i==null?void 0:i.hidden)??!1;return u`
      <sfx-bulk-meta-row
        .file=${e}
        .field=${this.field}
        .value=${this._getEffectiveValue(e)}
        .taxonomyEntry=${this._getTaxonodeEntry(e)}
        .selected=${this.selected.has(e.id)}
        .pendingOp=${this.pendingOp}
        .config=${this.config}
        .autocomplete=${this.autocomplete}
        .taxonomyService=${this.taxonomyService}
        .ultratags=${this.ultratags}
        .defaultLanguage=${this.defaultLanguage}
        .pendingFrontendLookup=${this._pendingFrontendLookup}
        .knownUltratagsLookup=${this._knownUltratagsLookup}
        .allowedValues=${s}
        .notApplicable=${o}
      ></sfx-bulk-meta-row>
    `}}_recomputePendingFrontendLookup(){var t,i;if(this._knownUltratagsLookup=((t=this.field)==null?void 0:t.key)&&this._knownUltratagsLookupByField.get(this.field.key)||wi,((i=this.field)==null?void 0:i.type)!=="ultratags"||!this.pendingOp){this._pendingFrontendLookup=wi;return}const e=new Map;for(const s of Ri(this.pendingOp.value))s.sid&&e.set(s.sid,s),s.slug&&e.set(s.slug,s),s.uuid&&e.set(s.uuid,s);if(this._pendingFrontendLookup=e,e.size>0&&this.field.key){const s=hd(this._knownUltratagsLookup,e);this._knownUltratagsLookupByField.set(this.field.key,s),this._knownUltratagsLookup=s}}willUpdate(e){(e.has("pendingOp")||e.has("field"))&&this._recomputePendingFrontendLookup()}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):Or(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return this.files.length<=pt.VIRTUALIZE_THRESHOLD?u`${this.files.map(this._renderRow)}`:u`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}},pt.styles=[Gg],pt.VIRTUALIZE_THRESHOLD=60,pt);je([g({attribute:!1})],De.prototype,"files");je([g({attribute:!1})],De.prototype,"field");je([g({attribute:!1})],De.prototype,"staged");je([g({attribute:!1})],De.prototype,"stagedTaxonodes");je([g({attribute:!1})],De.prototype,"selected");je([g({attribute:!1})],De.prototype,"pendingOp");je([g({attribute:!1})],De.prototype,"config");je([g({attribute:!1})],De.prototype,"autocomplete");je([g({attribute:!1})],De.prototype,"taxonomyService");je([g({attribute:!1})],De.prototype,"ultratags");je([g({attribute:!1})],De.prototype,"defaultLanguage");je([g({attribute:!1})],De.prototype,"perFileResolved");let am=De;ie("sfx-bulk-meta-table",am);var lm=Object.defineProperty,_e=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&lm(e,t,s),s},Ee;const ve=(Ee=class extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._liveStageTimer=null,this._onFieldBlur=e=>{e.stopPropagation(),this._cancelLiveStage(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{var s;e.stopPropagation();const t=e.detail.value,i=(s=this.field)==null?void 0:s.type;if(this._cancelLiveStage(),Ee._IMMEDIATE_CHANGE_TYPES.has(i)){this._processFieldValue(t);return}Ee._LIVE_STAGE_TYPES.has(i)&&(this._liveStageTimer=setTimeout(()=>{this._liveStageTimer=null,this._processFieldValue(t,{silent:!0})},Ee._LIVE_STAGE_DELAY_MS))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}shouldUpdate(e){return!(!this.selected&&e.size>0&&[...e.keys()].every(t=>Ee._PENDING_PREVIEW_ONLY_KEYS.has(t)))}willUpdate(e){e.has("field")&&(this._error=null),(e.has("field")||e.has("file"))&&this._cancelLiveStage()}disconnectedCallback(){super.disconnectedCallback(),this._cancelLiveStage()}_cancelLiveStage(){this._liveStageTimer!==null&&(clearTimeout(this._liveStageTimer),this._liveStageTimer=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e,{silent:t=!1}={}){const i=yl(this.field,e,this.config??void 0);if(i){t||(this._error=i);return}this._error=null;const s={meta:{...this.file.meta,[this.field.key]:this.value}},o=co(this.field,e,s,At(this.field,this.config));JSON.stringify(o)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:o},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:dd(this.field,this.value,e.value,e.operation,At(this.field,this.config))}_previewTaxonomyEntry(){const e=this.pendingOp;return e&&e.taxonomyEntry!==void 0?e.taxonomyEntry:this.taxonomyEntry}_valueForEditor(){var t;const e=vl(this.field,this.value,At(this.field,this.config));return((t=this.field)==null?void 0:t.type)!=="ultratags"?e:im(e,this.knownUltratagsLookup)}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t;const e=this.file;return u`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?u`<img class="row-thumb" src=${e.previewUrl} alt="" />`:u`<img
              class="row-thumb row-thumb-fallback"
              src=${ro(this._getExtension(e.name))}
              alt=${T("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${i=>{const s=i.target,o=so();!s.dataset.fallback&&s.src!==o&&(s.dataset.fallback="1",s.src=o)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?Qc(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?u`<div
                class="row-field-na"
                title=${T("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >
                ${T("fieldNotApplicable","Not applicable for this asset")}
              </div>`:this.pendingOp&&this.selected?u`<sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${this._computePreviewValue()}
                  .oldTaxonomyEntry=${this.taxonomyEntry}
                  .newTaxonomyEntry=${this._previewTaxonomyEntry()}
                  .config=${this.config}
                  .defaultLanguage=${this.defaultLanguage}
                  .pendingFrontendLookup=${this.pendingFrontendLookup}
                  .knownUltratagsLookup=${this.knownUltratagsLookup}
                ></sfx-bulk-meta-diff-view>`:u`<div class="row-field-edit">
                    <sfx-metadata-field-edit
                      .field=${this.field}
                      .value=${this._valueForEditor()}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonomyEntry}
                      .ultratags=${this.ultratags}
                      .language=${(t=this.config)==null?void 0:t.language}
                      .defaultLanguage=${this.defaultLanguage}
                      .allowedValues=${this.allowedValues}
                    ></sfx-metadata-field-edit>
                  </div>
                  ${this._error?u`<div class="row-error" role="alert">${this._error}</div>`:v}`}
        </div>
      </div>
    `}},Ee.styles=[Kg],Ee._PENDING_PREVIEW_ONLY_KEYS=new Set(["pendingOp","pendingFrontendLookup"]),Ee._IMMEDIATE_CHANGE_TYPES=new Set(["tags","ultratags","multi-select"]),Ee._LIVE_STAGE_TYPES=new Set(["text","textarea"]),Ee._LIVE_STAGE_DELAY_MS=300,Ee);_e([g({attribute:!1})],ve.prototype,"file");_e([g({attribute:!1})],ve.prototype,"field");_e([g({attribute:!1})],ve.prototype,"value");_e([g({attribute:!1})],ve.prototype,"taxonomyEntry");_e([g({type:Boolean})],ve.prototype,"selected");_e([g({attribute:!1})],ve.prototype,"pendingOp");_e([g({attribute:!1})],ve.prototype,"config");_e([g({attribute:!1})],ve.prototype,"autocomplete");_e([g({attribute:!1})],ve.prototype,"taxonomyService");_e([g({attribute:!1})],ve.prototype,"ultratags");_e([g({attribute:!1})],ve.prototype,"defaultLanguage");_e([g({attribute:!1})],ve.prototype,"pendingFrontendLookup");_e([g({attribute:!1})],ve.prototype,"knownUltratagsLookup");_e([g({attribute:!1})],ve.prototype,"allowedValues");_e([g({type:Boolean})],ve.prototype,"notApplicable");_e([P()],ve.prototype,"_error");let dm=ve;ie("sfx-bulk-meta-row",dm);var cm=Object.defineProperty,ot=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&cm(e,t,s),s};const Xo=class Xo extends G{constructor(){super(...arguments),this._i18nController=new We(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderChips(e){const t={added:T("added","Added"),removed:T("removed","Removed"),kept:T("kept","Kept")};return u`
      <div class="diff-wrap" aria-label=${T("bulkOperationPreview","Bulk operation preview")}>
        ${e.length===0?u`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.map(i=>u`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.state==="removed"?u`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderArrayDiff(e){return this._renderChips(e.items)}_renderScalarDiff(e){const t=T("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?T("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?T("emptyValue","empty"):e.newDisplay});return u`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${T("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?v:u`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyDiff(){var l,d,c,p,h,f;const e=((l=this.newTaxonomyEntry)==null?void 0:l.path)??"",t=((d=this.oldTaxonomyEntry)==null?void 0:d.path)??"",i=!t,s=!e,o=((c=this.oldTaxonomyEntry)==null?void 0:c.suid)||((p=this.oldTaxonomyEntry)==null?void 0:p.uuid),n=((h=this.newTaxonomyEntry)==null?void 0:h.suid)||((f=this.newTaxonomyEntry)==null?void 0:f.uuid),a=[];return!i&&o===n?a.push({label:t,state:"kept"}):(i||a.push({label:t,state:"removed"}),s||a.push({label:e,state:"added"})),this._renderChips(a)}render(){var i,s;if(!this.field)return v;if(this.field.type==="taxonomy-node")return this._renderTaxonomyDiff();const e=(i=this.knownUltratagsLookup)!=null&&i.size||(s=this.pendingFrontendLookup)!=null&&s.size?hd(this.knownUltratagsLookup,this.pendingFrontendLookup):void 0,t=om(this.field,this.oldValue,this.newValue,this.config,this.defaultLanguage,e);return t.kind==="array"?this._renderArrayDiff(t):this._renderScalarDiff(t)}};Xo.styles=[Yg];let Be=Xo;ot([g({attribute:!1})],Be.prototype,"field");ot([g({attribute:!1})],Be.prototype,"oldValue");ot([g({attribute:!1})],Be.prototype,"newValue");ot([g({attribute:!1})],Be.prototype,"oldTaxonomyEntry");ot([g({attribute:!1})],Be.prototype,"newTaxonomyEntry");ot([g({attribute:!1})],Be.prototype,"config");ot([g({attribute:!1})],Be.prototype,"defaultLanguage");ot([g({attribute:!1})],Be.prototype,"pendingFrontendLookup");ot([g({attribute:!1})],Be.prototype,"knownUltratagsLookup");ie("sfx-bulk-meta-diff-view",Be);function fd(r){let e=r;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var um=Object.defineProperty,be=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&um(e,t,s),s};const Ba=3,gd=`
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

  /* --- Mobile bottom sheet ---
     On touch the same overflow sources render as a sheet anchored to the
     bottom of the viewport instead of a menu anchored to the "More" pill: a
     small floating dropdown next to a pill is a mouse-sized target, and on a
     tall phone it can also land under the thumb-unreachable top half. Rows are
     full-width and >=52px so they clear the 44px minimum comfortably. */
  [data-sfx-more-dropdown] .sfx-more-backdrop { position:fixed; inset:0; background:rgba(15,23,42,0.45); z-index:99998; opacity:0; transition:opacity .22s ease; pointer-events:all; }
  [data-sfx-more-dropdown] .sfx-more-backdrop.open { opacity:1; }
  [data-sfx-more-dropdown] .sfx-more-sheet { position:fixed; left:0; right:0; bottom:0; background:#fff; border-radius:18px 18px 0 0; box-shadow:0 -8px 40px rgba(0,0,0,0.18); padding:8px 8px calc(8px + env(safe-area-inset-bottom, 0px)); max-height:72vh; overflow-y:auto; -webkit-overflow-scrolling:touch; z-index:99999; pointer-events:all; transform:translateY(100%); transition:transform .26s cubic-bezier(0.32,0.72,0,1); font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
  [data-sfx-more-dropdown] .sfx-more-sheet.open { transform:translateY(0); }
  [data-sfx-more-dropdown] .sfx-more-sheet.dragging { transition:none; }
  [data-sfx-more-dropdown] .sfx-more-sheet:focus { outline:none; }
  /* The grip is a real drag handle, not decoration — see _onSheetPointerDown.
     touch-action:none hands the vertical gesture to us instead of letting the
     sheet's own overflow scrolling eat it. */
  [data-sfx-more-dropdown] .sfx-more-handle { display:block; width:100%; padding:0; border:none; background:none; cursor:grab; touch-action:none; -webkit-tap-highlight-color:transparent; }
  [data-sfx-more-dropdown] .sfx-more-handle:active { cursor:grabbing; }
  [data-sfx-more-dropdown] .sfx-more-grip { width:36px; height:4px; border-radius:2px; background:#cbd5e1; margin:6px auto 10px; }
  [data-sfx-more-dropdown] .sfx-more-sheet-title { font-size:13px; font-weight:600; color:#64748b; padding:0 14px 8px; text-align:left; font-family:inherit; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item { min-height:52px; padding:12px 14px; font-size:15px; gap:14px; border-radius:10px; white-space:normal; text-align:left; }
  /* Touch devices have no hover; the persistent highlight a :hover rule leaves
     behind after a tap reads as a stuck selection. Use :active instead. */
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item:hover { background:none; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item:active { background:#f1f5f9; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item-ico { width:38px; height:38px; border-radius:10px; }
  [data-sfx-more-dropdown] .sfx-more-sheet .sfx-more-item-ico svg { width:19px; height:19px; }

  @media (prefers-reduced-motion: reduce) {
    [data-sfx-more-dropdown] .sfx-more-sheet { transition:none; transform:translateY(0); }
    [data-sfx-more-dropdown] .sfx-more-backdrop { transition:none; opacity:1; }
  }
`,pm=260,hm=80;let bi;function fm(){if(bi!==void 0)return bi;try{const r=new CSSStyleSheet;r.replaceSync(gd),bi=r}catch{bi=null}return bi}var ht;const he=(ht=class extends G{constructor(){super(...arguments),this.t=Ue,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.allowFolderDrop=!0,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Ba,this._touch=!1,this._dragCounter=0,this._unsubscribeTouch=null,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&od(t,{allowDirectories:this.allowFolderDrop}).then(({files:i,hadDirectories:s,rejectedDirectories:o})=>{o&&this.dispatchEvent(new CustomEvent("folder-rejected",{bubbles:!0,composed:!0})),i.length>0?this._emitFiles(i,s):s&&!o&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const s of i){const o=s.webkitRelativePath;o&&Eo(s,o)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var o,n;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const i=[];let s=!1;for(const a of t){if(a.kind!=="file")continue;if(!this.allowFolderDrop){const d=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);if(d!=null&&d.isDirectory){s=!0;continue}}const l=a.getAsFile();l&&i.push(l)}s&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("folder-rejected",{bubbles:!0,composed:!0}))),i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._returnFocusTo=null,this._inertedSiblings=[],this._lockedScrollHost=null,this._exitingPortal=null,this._onSheetKeyDown=e=>{if(e.key==="Escape"){e.stopPropagation(),this._closeMore();return}if(e.key!=="Tab")return;const t=e.currentTarget,i=t.querySelectorAll("button:not([disabled])");if(i.length===0)return;const s=i[0],o=i[i.length-1],n=t.getRootNode().activeElement;e.shiftKey&&(n===s||n===t)?(e.preventDefault(),o.focus()):!e.shiftKey&&n===o&&(e.preventDefault(),s.focus())},this._sheetDrag=null,this._onSheetPointerDown=e=>{var s;const t=e.currentTarget,i=t.closest(".sfx-more-sheet");if(!(!i||this._sheetDrag)){this._sheetDrag={pointerId:e.pointerId,startY:e.clientY,sheet:i,handle:t};try{(s=t.setPointerCapture)==null||s.call(t,e.pointerId)}catch{}window.addEventListener("pointermove",this._onSheetPointerMove),window.addEventListener("pointerup",this._onSheetPointerUp),window.addEventListener("pointercancel",this._onSheetPointerUp)}},this._onSheetPointerMove=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;const i=e.clientY-t.startY;if(i<=0){t.sheet.style.transform="";return}t.sheet.classList.add("dragging"),t.sheet.style.transform=`translateY(${i}px)`},this._onSheetPointerUp=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;this._endSheetDrag();const i=e.clientY-t.startY;t.sheet.classList.remove("dragging"),t.sheet.style.transform="",e.type!=="pointercancel"&&i>hm&&this._closeMore()},this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}get _folderEnabled(){return this.directory&&this.multi&&hl()}browse(e="files"){var t;if(e==="folder"&&this._folderEnabled&&this.folderInput){this.folderInput.click();return}(t=this.fileInput)==null||t.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_closeMore(){this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())}_updateDropdownPortal(){var e;if(this._moreOpen){const t=this.sources.slice(this._visiblePills),i=((e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-sheet"))!=null;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),fd(this).appendChild(this._portalContainer),this._injectDropdownStyles());const s=t.map(o=>u`
          <button class="sfx-more-item" @click=${n=>this._onMoreItemClick(o,n)}>
            <div class="sfx-more-item-ico">
              ${o.brandHtml?Et(o):o.iconColor?u`<svg viewBox="0 0 24 24" ${te({color:o.iconColor})}>
                      ${dt(o.icon)}
                    </svg>`:Q`<svg viewBox="0 0 24 24">${dt(o.icon)}</svg>`}
            </div>
            ${o.labelKey?this.t(o.labelKey,o.label):o.label}
          </button>
        `);if(this._touch){const o=this.t("importFrom","Import from"),n=this._backgroundLockable();Ze(u`
            <div class="sfx-more-backdrop" @click=${()=>this._closeMore()}></div>
            <div
              class="sfx-more-sheet"
              role="dialog"
              aria-modal=${n?"true":v}
              aria-label=${o}
              tabindex="-1"
              @keydown=${this._onSheetKeyDown}
            >
              <button
                type="button"
                class="sfx-more-handle"
                aria-label=${this.t("close","Close")}
                @click=${()=>this._closeMore()}
                @pointerdown=${this._onSheetPointerDown}
              >
                <div class="sfx-more-grip"></div>
              </button>
              <div class="sfx-more-sheet-title">${o}</div>
              ${s}
            </div>
          `,this._portalContainer),i||(this._lockBackground(),this._captureReturnFocus()),requestAnimationFrame(()=>{var a;(a=this._portalContainer)==null||a.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(l=>l.classList.add("open")),i||this._focusSheet()})}else this._unlockBackground(),Ze(u`<div class="sfx-more-dropdown open">${s}</div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._teardownPortal({animate:!0})}_backgroundLockable(){return typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype}_lockBackground(){const e=this._portalContainer;if(!e||this._lockedScrollHost)return;const t=e.parentElement;if(t&&this._backgroundLockable())for(const s of Array.from(t.children))s===e||!(s instanceof HTMLElement)||s.inert||(s.inert=!0,this._inertedSiblings.push(s));const i=t===document.body?document.documentElement:t;i instanceof HTMLElement&&(this._lockedScrollHost={el:i,overflow:i.style.overflow},i.style.overflow="hidden")}_unlockBackground(){for(const e of this._inertedSiblings)e.inert=!1;this._inertedSiblings=[],this._lockedScrollHost&&(this._lockedScrollHost.el.style.overflow=this._lockedScrollHost.overflow,this._lockedScrollHost=null)}_captureReturnFocus(){var t;const e=((t=this.shadowRoot)==null?void 0:t.activeElement)??document.activeElement;this._returnFocusTo=e&&typeof e.focus=="function"?e:null}_focusSheet(){var i,s;const e=(i=this._portalContainer)==null?void 0:i.querySelector(".sfx-more-sheet");(s=(e==null?void 0:e.querySelector(".sfx-more-item"))??e)==null||s.focus()}_restoreFocus(){const e=this._returnFocusTo;this._returnFocusTo=null,e!=null&&e.isConnected&&e.focus()}_teardownPortal({animate:e}){this._unlockBackground(),this._reapExitingPortal();const t=this._portalContainer;if(!t)return;this._portalContainer=null;const i=t.querySelector(".sfx-more-sheet");if(!e||!i||Dc()){Ze(v,t),t.remove(),this._restoreFocus();return}t.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(s=>s.classList.remove("open")),t.style.pointerEvents="none",this._exitingPortal={el:t,timer:setTimeout(()=>this._reapExitingPortal(),pm)},this._restoreFocus()}_reapExitingPortal(){const e=this._exitingPortal;e&&(this._exitingPortal=null,clearTimeout(e.timer),Ze(v,e.el),e.el.remove())}_endSheetDrag(){var t,i;const e=this._sheetDrag;if(this._sheetDrag=null,window.removeEventListener("pointermove",this._onSheetPointerMove),window.removeEventListener("pointerup",this._onSheetPointerUp),window.removeEventListener("pointercancel",this._onSheetPointerUp),!!e)try{(i=(t=e.handle).releasePointerCapture)==null||i.call(t,e.pointerId)}catch{}}_injectDropdownStyles(){var o;const e=(o=this._portalContainer)==null?void 0:o.getRootNode();if(!e)return;const t=fm();if(t&&Array.isArray(e.adoptedStyleSheets)){if(e.adoptedStyleSheets.includes(t))return;e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}const i=e instanceof Document?e.head:e;if(!i||i.querySelector("style[data-sfx-more-dropdown-styles]"))return;const s=document.createElement("style");s.setAttribute("data-sfx-more-dropdown-styles",""),s.textContent=gd,i.appendChild(s)}_positionDropdown(){var p,h;const e=(p=this.shadowRoot)==null?void 0:p.querySelector(".more-wrap > button"),t=(h=this._portalContainer)==null?void 0:h.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),s=8,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+s||a>l?t.style.top=`${i.top-o-s}px`:t.style.top=`${i.bottom+s}px`;let c=i.right-n;c=Math.max(8,Math.min(c,window.innerWidth-n-8)),t.style.left=`${c}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=Ba}connectedCallback(){super.connectedCallback(),this._touch=Ne(),this._unsubscribeTouch=to(()=>{this._touch=Ne(),this._moreOpen&&this._updateDropdownPortal()}),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var s;const i=(((s=e[0])==null?void 0:s.contentRect.width)??this.getBoundingClientRect().width)>=ht._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._endSheetDrag(),this._moreOpen=!1,this._teardownPortal({animate:!1})}_renderPill(e){return u`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?Et(e):u`<span class="pill-ico" ${te(e.iconColor?{color:e.iconColor}:null)}>
              ${Q`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${dt(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return u`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?u`<span class="card-ico">${Et(e)}</span>`:u`<span class="card-ico" ${te(e.iconColor?{color:e.iconColor}:null)}>
              ${Q`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${dt(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return u`
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
    `}_renderMoreDropdown(){return u`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}_renderTitle(){return this._touch?u`<div class="title">${this.t("tapToUploadFiles","Tap to upload files")}</div>`:!this.compact&&this._folderEnabled?u`<div class="title">
        ${this.t("dragDropClickTo","Drag & Drop, click to")}
        <span>${this.t("browse","browse")}</span>
        ${this.t("orUploadFolderPrefix","or upload a ")}<button
          type="button"
          @click=${e=>{e.stopPropagation(),this.browse("folder")}}
        >
          ${this.t("uploadFolder","folder")}
        </button>
      </div>`:u`<div class="title">
      ${this.t("dragAndDrop","Drag & Drop or click to")}
      <span>${this.t("browse","browse")}</span>
    </div>`}_renderPrimaryCta(){return u`
      <button
        class="primary-cta"
        type="button"
        @click=${e=>{e.stopPropagation(),this.browse()}}
      >
        ${this.multi?this.t("chooseFiles","Choose files"):this.t("chooseFile","Choose file")}
      </button>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":"",this._touch?"touch":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills),s=this._touch&&!this.compact;return u`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role=${s?v:"button"}
          tabindex=${s?v:"0"}
          aria-label=${s?v:this.t("dropFilesHere","Drop files here or click to browse")}
          @click=${this._onClick}
          @keydown=${s?v:this._onKeyDown}
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

          ${s?this._renderPrimaryCta():this._renderTitle()}
          ${!this.compact&&this.sources.length>0?u`
                <div class="import-divider">
                  <span>${this.t("orImportFrom","or import from")}</span>
                </div>
                ${this.sourcesLayout==="cards"?u`
                      <div class="sources-cards">
                        ${t.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():v}
                      </div>
                    `:u`
                      <div class="sources-grid">
                        ${t.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():v}
                      </div>
                    `}
              `:v}
          ${this.compact&&this.sources.length>0?u`
                <div class="sources-row">
                  ${this.sources.map(o=>u`
                      <button
                        class="src-ico"
                        ${te(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${n=>{n.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?Et(o):Q`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${dt(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:v}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||v}
          @change=${this._onFileChange}
        />
        ${this._folderEnabled?u`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:v}
      </div>
    `}},ht.styles=q`
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
      /* The card is a centred (not stretched) flex item, so without these it is
         sized by its content *plus* 80px of horizontal padding — which is wider
         than the zone holding it once the viewport drops to ~320px, and the
         overflow lands in .drop-zone's scroller. Capping at the parent's width
         with border-box makes the padding shrink the content instead. */
      max-width: 100%;
      box-sizing: border-box;
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
      /* 50px/40px is most of a 320px viewport's width and a third of its
         height. Applies to a narrow desktop window too, not just touch — the
         .touch block further down tightens it again for phones. */
      .drop-zone:not(.compact) .dz-content {
        padding: 28px 16px;
      }
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }

    /* --- Touch-primary overrides ---
       Keyed on the .touch class (set from the (hover:none) and (pointer:coarse)
       media query), not on width: a narrow desktop window is still a mouse, and
       a tablet is still a finger. Last in the sheet so these win over the
       width-based blocks above. */
    .drop-zone.touch:not(.compact) {
      padding: 16px 12px;
    }
    /* Top-align the content in inline mode. The zone stretches to fill its
       host and centres what is inside it, which reads well when the zone IS
       the surface — but inline mode stacks it under a host-supplied header
       (title, description), and there all the leftover height collects above
       the icon, pushing the real controls toward the middle of the screen
       behind a band of empty space. On desktop there is enough height for
       that to look deliberate; on a phone it just looks broken. Inline only:
       in modal mode the zone is the whole sheet, where centring is right. */
    :host([mode='inline']) .drop-zone.touch:not(.compact) {
      justify-content: flex-start;
    }
    /* Fill the zone rather than hugging the content, and drop the roomy desktop
       padding: 100px of vertical padding is most of a small phone's screen.
       (The overflow itself is handled by max-width/box-sizing on the base
       .dz-content rule, which a narrow desktop window needs just as much.) */
    .drop-zone.touch:not(.compact) .dz-content {
      width: 100%;
      padding: 20px 16px;
    }
    /* The outer dotted ring reads as "drop target", which means nothing without
       a pointer — and the whole illustration costs vertical space that a phone
       needs for the actual controls. Drop the ring, shrink the rest. */
    .drop-zone.touch:not(.compact) .ring {
      display: none;
    }
    .drop-zone.touch:not(.compact) .rings {
      width: 72px;
      height: 72px;
      margin-bottom: 16px;
    }
    .drop-zone.touch:not(.compact) .core {
      width: 56px;
      height: 56px;
    }
    .drop-zone.touch:not(.compact) .core svg {
      width: 24px;
      height: 24px;
    }
    .drop-zone.touch:not(.compact) .title {
      font-size: 17px;
      margin-bottom: 4px;
    }
    /* Filled primary CTA — the one control on the touch layout that must read
       as the main action. Deliberately heavier than the outline source pills
       below it so the hierarchy is legible at a glance. */
    .drop-zone.touch:not(.compact) .primary-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      /* Matches .import-divider's cap. Touch-primary is not phone-only — an
         iPad Pro in landscape is 1194px, where an uncapped 100% button renders
         ~670px wide and visibly overhangs the 420px divider beneath it. */
      max-width: 420px;
      min-height: 48px;
      margin-bottom: 16px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: none;
      border-radius: 50px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-family: inherit;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.2;
      cursor: pointer;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
      transition: background 0.15s ease;
    }
    /* No hover on touch — :active is the only state that can actually fire.
       Falls through to --sfx-up-primary-hover, the theme's darkened shade: it
       is derived from --sfx-up-primary via color-mix (see the @supports block
       in sfx-uploader), so a host that themes --primary gets a pressed state
       in its own hue instead of a blue flash. --sfx-up-primary-active is not
       defined by the theme — it exists purely as an override hook for a host
       that wants the pressed shade to differ from the hover one. */
    .drop-zone.touch:not(.compact) .primary-cta:active {
      background: var(--sfx-up-primary-active, var(--sfx-up-primary-hover, #1d4ed8));
    }
    .drop-zone.touch:not(.compact) .primary-cta:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    /* The divider's own 420px cap is lifted to 100% by the @media (max-width:
       768px) block above, which predates the CTA. Without restoring it here
       the three stacked elements disagree between ~477px and 768px — an iPad
       mini in portrait (744px) draws a 688px rule across a 420px button and a
       420px grid. Re-cap it so the column lines up at every touch width. */
    .drop-zone.touch:not(.compact) .import-divider {
      max-width: 420px;
    }
    /* Two-up grid instead of centred wrapping. Free-flowing flex-wrap breaks
       to one pill per row as soon as the row overflows by a few pixels — on a
       390px phone "My Device / Camera / More" misses by ~20px and stacks into
       three full-height rows. A fixed two-column grid is predictable at every
       width, and an odd trailing item spans the full row instead of sitting
       lonely at 50%. */
    .drop-zone.touch:not(.compact) .sources-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      width: 100%;
      /* Same cap as the CTA and the divider — see the note on .primary-cta. */
      max-width: 420px;
    }
    .drop-zone.touch:not(.compact) .sources-grid > *:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
    .drop-zone.touch:not(.compact) .more-wrap {
      width: 100%;
    }
    /* >=44px tap targets; the width-based rules above shrink pills to ~35px. */
    .drop-zone.touch .src-pill,
    .drop-zone.touch .more-pill {
      width: 100%;
      justify-content: center;
      padding: 12px 18px;
      font-size: 14px;
      height: auto;
      min-height: 44px;
    }
    /* Touch has no hover — a :hover rule leaves the last-tapped pill stuck in
       the highlighted state until something else steals focus. */
    .drop-zone.touch .src-pill:hover,
    .drop-zone.touch .more-pill:hover {
      border-color: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text-secondary, #475569);
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      transform: none;
    }
    .drop-zone.touch .src-pill:active,
    .drop-zone.touch .more-pill:active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    ${Re}
  `,ht._WIDE_THRESHOLD_PX=1200,ht);be([g({attribute:!1})],he.prototype,"t");be([g({type:Boolean,reflect:!0})],he.prototype,"compact");be([g({type:Boolean,attribute:"external-drag-over"})],he.prototype,"externalDragOver");be([g({type:String})],he.prototype,"accept");be([g({type:Boolean})],he.prototype,"multi");be([g({type:Boolean})],he.prototype,"directory");be([g({type:Boolean})],he.prototype,"allowFolderDrop");be([g({type:Array})],he.prototype,"sources");be([g({type:String,attribute:"sources-layout"})],he.prototype,"sourcesLayout");be([g({type:String,reflect:!0})],he.prototype,"mode");be([P()],he.prototype,"_dragOver");be([P()],he.prototype,"_moreOpen");be([P()],he.prototype,"_visiblePills");be([P()],he.prototype,"_touch");be([Ls(".ripple")],he.prototype,"_rippleEl");be([Ls("input[data-sfx-dz-files]")],he.prototype,"fileInput");be([Ls("input[data-sfx-dz-folder]")],he.prototype,"folderInput");let gm=he;const Zo=class Zo extends G{constructor(){super(...arguments),this._i18nController=new kc(this)}render(){return u`
      <div class="line"></div>
      <div class="label">${$t("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Zo.styles=q`
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
  `;let Yr=Zo;var mm=Object.defineProperty,re=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&mm(e,t,s),s};const Gr=new CSSStyleSheet;Gr.replaceSync(`
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
`);const Qo=class Qo extends G{constructor(){super(...arguments),this.t=Ue,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this.namingViolationIds=new Set,this._moreOpen=!1,this._dropTileMaxVisible=3,this._touch=!1,this._portalContainer=null,this._unsubscribeTouch=null,this._outsideClickHandler=e=>{var s;if((s=this._portalContainer)!=null&&s.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?this._touch?2:1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}get _folderEnabled(){return this.directory&&this.multi&&hl()}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const s of i){const o=s.webkitRelativePath;o&&Eo(s,o)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){this._onDropTileClick();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),fd(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),Ze(u`<div class="sfx-tile-dropdown">
        ${e.map(t=>u`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${te(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?Et(t):Q`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${dt(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var p;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(p=this._portalContainer)==null?void 0:p.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),s=6,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+s||a>l?t.style.top=`${i.top-o-s}px`:t.style.top=`${i.bottom+s}px`;let c=i.right-n;c=Math.max(8,Math.min(c,window.innerWidth-n-8)),t.style.left=`${c}px`}_closePortal(){this._portalContainer&&(Ze(v,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Gr)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Gr]))}connectedCallback(){super.connectedCallback(),this._touch=Ne(),this._unsubscribeTouch=to(()=>{this._touch=Ne(),this._updateDropTileMaxVisible()}),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTileText(){return this._touch?this.t("addMoreFiles","Add more files"):u`${this.t("dropOrClickTo","Drop or click to")}
      <span>${this.t("browse","browse")}</span>`}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return u`
      <div class="drop-tile ${this._touch?"touch":""}" @click=${this._onDropTileClick}>
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
          <div class="drop-tile-text">${this._renderDropTileText()}</div>
          ${this._folderEnabled?u`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:v}
          ${t.length>0?u`
                <div class="drop-tile-sources">
                  ${t.map(s=>u`
                      <button
                        class="drop-tile-src"
                        ${te(s.iconColor&&!s.brandHtml?{color:s.iconColor}:null)}
                        title=${s.labelKey?this.t(s.labelKey,s.label):s.label}
                        aria-label=${s.labelKey?this.t(s.labelKey,s.label):s.label}
                        @click=${o=>this._onSourceClick(o,s)}
                      >
                        ${s.brandHtml?Et(s):Q`<svg viewBox="0 0 24 24" class=${s.fillIcon?"fill-icon":""}>${dt(s.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?u`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            aria-label=${this.t("moreSources","More sources")}
                            @click=${s=>this._toggleMore(s)}
                          >
                            ···
                          </button>
                        </div>
                      `:v}
                </div>
              `:v}
        </div>
        <input
          data-sfx-fl-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||v}
          @change=${this._onFileInput}
        />
        ${this._folderEnabled?u`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:v}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(s=>s.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(o=>this.searchResults.has(o)).length,i=e?Math.round(t/e*100):0,s=e>0&&t===e;return u`
      ${e>1&&!this.previewOpen?u`
            <div class="similar-banner search">
              ${s?u`<span class="search-done-ico"
                    ><svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" /></svg
                  ></span>`:u`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b
                  >${s?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${te({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${s?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:v}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():v}
        ${Zt(this.files,o=>o.id,(o,n)=>{const a=this.searchResults.get(o.id);return u`<sfx-file-item
              .t=${this.t}
              .store=${this.store}
              .fileId=${o.id}
              .file=${o}
              .mode=${this.mode}
              .allowRename=${this.allowRename}
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
              .showCheckSimilar=${this.showCheckSimilar}
              .selectMode=${this.selectMode}
              .isSelected=${this.selectedIds.has(o.id)}
              .selectionActive=${this.selectedIds.size>0}
              .selectionFull=${this.selectionFull}
              .previewOpen=${this.previewOpen}
              .similarStatus=${this._statusFor(o.id)}
              .similarCount=${(a==null?void 0:a.length)??-1}
              .similarResults=${a??[]}
              .namingViolation=${this.namingViolationIds.has(o.id)}
              ${te({"--tile-index":String(n)})}
            ></sfx-file-item>`})}
      </div>
    `}};Qo.styles=q`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      /* Keep a flick that runs past the end of the list inside the list.
         Without this the scroll chains to the host page behind the modal,
         which on touch drags the page under a full-screen modal and briefly
         exposes it. */
      overscroll-behavior: contain;
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

    /* --- Touch-primary drop tile ---
       Keyed on the .touch class (set from the (hover:none) and (pointer:coarse)
       probe), not on width: a narrow desktop window is still a mouse. Last in
       the sheet so it wins over the width-based blocks above.

       The spinning rings illustration says "drop target", which means nothing
       without a pointer, and it is the single most expensive thing on the tile
       vertically — ~120px of a phone screen spent on decoration, pushing the
       real file cards below the fold. Drop it and let the source buttons (My
       Device leading) be the affordance. */
    .drop-tile.touch .drop-tile-preview {
      display: none;
    }
    /* No preview to absorb the leftover height any more, so centre the info
       block: at <=440px the grid is one column and the tile is exactly as tall
       as its content, but at 441-768px it sits beside a file card and stretches
       to that row's height. */
    .drop-tile.touch {
      justify-content: center;
    }
    .drop-tile.touch .drop-tile-info {
      padding: 14px 12px 16px;
      gap: 10px;
    }
    .drop-tile.touch .drop-tile-text {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }
    .drop-tile.touch .drop-tile-sources {
      margin-top: 0;
    }
    /* >=44px tap targets even above 440px, where the width-based block above
       does not apply but the finger is the same size. */
    .drop-tile.touch .drop-tile-src,
    .drop-tile.touch .drop-tile-more {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }
    /* Touch has no hover — the highlight a :hover rule leaves behind after a
       tap reads as a stuck selection. */
    .drop-tile.touch .drop-tile-src:hover,
    .drop-tile.touch .drop-tile-more:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      transform: none;
      box-shadow: none;
    }
    .drop-tile.touch .drop-tile-src:active,
    .drop-tile.touch .drop-tile-more:active {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    ${Re}
  `;let Z=Qo;re([g({attribute:!1})],Z.prototype,"t");re([g({attribute:!1})],Z.prototype,"files");re([g({attribute:!1})],Z.prototype,"store");re([g({type:Boolean})],Z.prototype,"showDropTile");re([g({attribute:!1})],Z.prototype,"sources");re([g({type:String})],Z.prototype,"accept");re([g({type:Boolean})],Z.prototype,"multi");re([g({type:Boolean})],Z.prototype,"directory");re([g({type:Boolean})],Z.prototype,"allowRename");re([g({type:String})],Z.prototype,"mode");re([g({type:Boolean})],Z.prototype,"showLocateButton");re([g({type:Boolean})],Z.prototype,"showCopyCdnButton");re([g({type:Boolean})],Z.prototype,"showCheckSimilar");re([g({type:Boolean})],Z.prototype,"selectMode");re([g({attribute:!1})],Z.prototype,"selectedIds");re([g({type:Boolean})],Z.prototype,"allSelected");re([g({type:Boolean})],Z.prototype,"selectionFull");re([g({type:Number})],Z.prototype,"maxSelection");re([g({type:Boolean})],Z.prototype,"previewOpen");re([g({attribute:!1})],Z.prototype,"searchRunIds");re([g({attribute:!1})],Z.prototype,"searchActiveIds");re([g({attribute:!1})],Z.prototype,"searchResults");re([g({attribute:!1})],Z.prototype,"namingViolationIds");re([P()],Z.prototype,"_moreOpen");re([P()],Z.prototype,"_dropTileMaxVisible");re([P()],Z.prototype,"_touch");var vm=Object.defineProperty,ae=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&vm(e,t,s),s};const en=class en extends G{constructor(){super(...arguments),this.t=Ue,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this.namingViolation=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let s=e.right+12;s+t>window.innerWidth-8&&(s=e.left-t-12),this._simPopLeft=Math.max(8,s),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),s=140;this._tipLeft=Math.max(s+8,Math.min(i.left+i.width/2,window.innerWidth-s-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var s;i.some(o=>o.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(s=this._io)==null||s.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",s=e.status==="complete"&&!!e.alreadyExisted;return i||s}_maybeProbeDims(){var i,s;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const o=new Image;o.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${o.naturalWidth}×${o.naturalHeight}`)},o.src=t}else if((s=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&s.info){const o=e.response.file.info;o.img_w&&o.img_h&&(this._dims=`${o.img_w}×${o.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,s,o,n;e.stopPropagation();const t=(n=(o=(s=(i=this._file)==null?void 0:i.response)==null?void 0:s.file)==null?void 0:o.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var k,S,y;const e=this._file;if(!e)return v;const t=ze(e),i=e.status==="complete",s=e.status==="uploading",o=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",d=l||this.reviewPick||!this.allowRename,c=Cg(e.name),p=t==="image"&&!at(e.type),h=this.selectMode&&p&&!l,f=this.similarCount>=0,x=h&&!f&&!i&&this.similarStatus==="",m=!l&&!i&&!s&&!o&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,C=m,E=["tile",i?"done":"",s?"uploading":"",o?"paused":"",a?"rejected":"",this.namingViolation?"naming-violation":"",l?"review":"",x?"selectable":"",x&&this.isSelected?"selected":"",this.selectionActive&&!p&&!l?"select-dimmed":"",C?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return u`
      <div
        class=${E}
        tabindex="0"
        title=${this.namingViolation?this.t("namingConventionMismatchTooltip","This filename doesn't match the naming convention required for this project."):v}
        @click=${this.reviewPick?this._reviewSelect:x?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?u`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:u`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${ro(c)}
                    alt="${c?this.t("extFile","{{ext}} file",{ext:c}):this.t("file","File")}"
                    @error=${w=>{const O=w.target,A=so();!O.dataset.fallback&&O.src!==A&&(O.dataset.fallback="1",O.src=A)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?u`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:v}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?u`
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
                `:u`<span class="sim-result-badge none"
                  >${this.t("noSimilar","No similar")}</span
                >`:v}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${x?u`
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
              `:v}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${m?u`
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
                  ${this.similarCount>0?u`
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
                      `:this.similarCount===0?u`
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
                        `:this.showCheckSimilar&&p?u`
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
                          `:v}
                </div>
              `:v}

          <!-- Locate / Copy-CDN hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Shown on any completed tile (the single-view upload list and the
               review screen) that has a response.file and the host enabled the
               feature. Each inner button has its own gate — Locate needs uuid,
               Copy CDN needs url.cdn — so an already-existed-but-missing-uuid
               edge case won't render a dead button. The outer gate mirrors the
               two inner gates so we never render (and hover-reveal) an empty
               overlay when neither button qualifies. -->
          ${i&&((k=e.response)!=null&&k.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&((S=e.response.file.url)!=null&&S.cdn))?u`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?u`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${cl}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:v}
                  ${this.showCopyCdnButton&&((y=e.response.file.url)!=null&&y.cdn)?u`<button
                        class="review-action primary ${this._copied?"copied":""}"
                        @click=${this._copyCdn}
                        title=${this.t("copyCdn","Copy CDN")}
                        aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}
                      >
                        ${this._copied?u`<svg viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>`:u`<svg viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:v}
                </div>
              `:v}

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
          ${i?u`<div class="done-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:v}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&n?u`<div
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
              </div>`:v}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?u`
                <div class="progress">
                  <div
                    class="progress-fill"
                    ${te({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
                  ></div>
                </div>
              `:v}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?u`<div
                class="error-badge"
                @mouseenter=${w=>this._showTip(e.error??"",w)}
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
              </div>`:v}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?u`<div
                class="exists-badge"
                @mouseenter=${w=>this._showTip(this.t("alreadyUploaded","Already uploaded"),w)}
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
              </div>`:v}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?u`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:v}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l||this.reviewPick?v:u`
              <div class="actions">
                ${s&&e.isTus?u`
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
                    `:v}
                ${o?u`
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
                    `:v}
                ${n?u`
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
                    `:v}
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
            @change=${d?v:this._rename}
            @click=${w=>w.stopPropagation()}
          />
          <div class="meta">
            ${c||""}${e.size?` · ${Jt(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?u`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${te({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:v}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return v;const e=[...this.similarResults].sort((l,d)=>d.score-l.score),t=e[0],i=e.length,s=e.slice(1),o=s.slice(0,3),n=s.length-o.length,a=Math.round(t.score*100);return u`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${te({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?u`<img src=${t.url} alt="" />`:v}
          <span class="pop-best ${t.score>=.85?"high":""}"
            >${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span
          >
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${s.length?u`<div class="pop-thumbs">
                ${o.map(l=>u`<img src=${l.url} alt="" />`)}
                ${n>0?u`<span class="pop-more">+${n}</span>`:v}
              </div>`:u`<span></span>`}
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
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};en.styles=q`
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

    /* --- Naming-convention violation (matches the .naming-banner color) ---
       Unlike .rejected, the file is still active/editable — no opacity
       dimming, just a ring so it's easy to spot amongst many staged tiles. */
    .tile.naming-violation {
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

    ${Re}
  `;let se=en;ae([g({attribute:!1})],se.prototype,"t");ae([g({attribute:!1})],se.prototype,"store");ae([g({type:String})],se.prototype,"fileId");ae([g({attribute:!1})],se.prototype,"file");ae([g({type:String})],se.prototype,"mode");ae([g({type:Boolean})],se.prototype,"allowRename");ae([g({type:Boolean})],se.prototype,"showLocateButton");ae([g({type:Boolean})],se.prototype,"showCopyCdnButton");ae([g({type:Boolean})],se.prototype,"showCheckSimilar");ae([g({type:Boolean})],se.prototype,"selectMode");ae([g({type:Boolean})],se.prototype,"isSelected");ae([g({type:Boolean})],se.prototype,"selectionActive");ae([g({type:Boolean})],se.prototype,"selectionFull");ae([g({type:Boolean})],se.prototype,"previewOpen");ae([g({type:String})],se.prototype,"similarStatus");ae([g({type:Number})],se.prototype,"similarCount");ae([g({attribute:!1})],se.prototype,"similarResults");ae([g({type:Boolean})],se.prototype,"reviewPick");ae([g({type:Boolean})],se.prototype,"namingViolation");ae([P()],se.prototype,"_dims");ae([P()],se.prototype,"_simPopover");ae([P()],se.prototype,"_copied");ae([P()],se.prototype,"_tip");var bm=Object.defineProperty,Zi=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&bm(e,t,s),s};const tn=class tn extends G{constructor(){super(...arguments),this.t=Ue,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return u`
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
          ${this._failedCount>0?u`<button
                class="chip ${this._filter==="failed"?"active":""}"
                @click=${this._setFilter("failed")}
              >
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:v}
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
        ${e.length===0?u`<div class="empty">
              ${this.t("noFilesMatchFilter","No files match this filter.")}
            </div>`:u`<sfx-file-list
              .t=${this.t}
              .files=${e}
              mode="review"
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
            ></sfx-file-list>`}
      </div>
    `}};tn.styles=q`
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
  `;let mt=tn;Zi([g({attribute:!1})],mt.prototype,"t");Zi([g({attribute:!1})],mt.prototype,"files");Zi([g({type:Boolean})],mt.prototype,"showLocateButton");Zi([g({type:Boolean})],mt.prototype,"showCopyCdnButton");Zi([P()],mt.prototype,"_filter");ie("sfx-last-upload-review",mt);const Ys=q`
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
`,Gs=q`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var xm=Object.defineProperty,Ie=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&xm(e,t,s),s};const sn=class sn extends G{constructor(){super(...arguments),this.t=Ue,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.requiredFieldsTotal=0,this.requiredFieldsRemaining=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1,this.blocked=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?v:u`
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
    `}_renderUploadingBar(){return u`
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
    `}_renderDoneBar(){return u`
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
              ${br}
            </svg>
            <span class="btn-label">${this.t("uploadMore","Upload more")}</span>
          </button>
          <button class="btn-primary" @click=${this._close} aria-label=${this.t("close","Close")}>
            <span class="btn-label">${this.t("close","Close")}</span>
          </button>
        </div>
      </div>
    `}_renderIdleBar(){return u`
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?u`
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
              `:v}
          ${this.showCheckSimilar&&this.uploadState==="idle"?u`
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
              `:v}
        </div>
        <div class="right">
          <button
            class="btn-ghost btn-clear"
            @click=${this._clear}
            aria-label=${this.t("clear","Clear")}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              ${ul}
            </svg>
            <span class="btn-label">${this.t("clear","Clear")}</span>
          </button>
          <button
            class="btn-sec btn-add-more"
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
              ${br}
            </svg>
            <span class="btn-label">${this.t("addMore","Add more")}</span>
          </button>
          ${this._renderRetryAllButton()} ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return u`
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
          ${t>0?u`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
                >${e}/${t}</span
              >`:v}
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
    `}get _uploadLabel(){return this.requiredFieldsTotal>0&&this.requiredFieldsRemaining===this.requiredFieldsTotal?{key:"fillRequiredMetadata",fallback:"Fill required metadata"}:this.requiredFieldsRemaining>0?{key:"nextMetadata",fallback:"Next metadata"}:this.fileCount>1?{key:"uploadAll",fallback:"Upload all ({{count}})",interpolations:{count:this.fileCount}}:{key:"upload",fallback:"Upload"}}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",s=this._uploadLabel,o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t(s.key,s.fallback,s.interpolations);return u`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.blocked||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?u`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?u`
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
              `:u`
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
                <span class="btn-label"
                  >${this.t(s.key,s.fallback,s.interpolations)}</span
                >
              `}
      </button>
    `}};sn.styles=[Ys,Gs,q`
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
         narrower than the browser window.

         Two exceptions keep the bar readable:
         - the primary CTA keeps its label, because its icon alone cannot
           say whether it uploads or opens the required-metadata step;
         - a button with no icon (the :has(svg) test fails) keeps its label
           too, otherwise collapsing it leaves an empty 36px box. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
          min-width: 0;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right button:has(svg):not(.btn-primary) {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
          flex: 0 0 36px;
        }
        .right button:has(svg):not(.btn-primary) .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
        /* The labelled CTA absorbs whatever width is left and ellipsises
           rather than pushing the icon buttons off the bar. */
        .right .btn-primary {
          min-width: 0;
          flex: 0 1 auto;
          padding: 0 12px;
        }
        .right .btn-primary svg {
          flex: 0 0 auto;
        }
        .right .btn-primary .btn-label {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
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

      /* Opt-out hook for the two batch actions. On a phone the host renders
         its own copy of Clear / Add more in the "N files · N MB" summary row
         and switches these off, keeping the bottom bar down to the decisions
         that matter there: fill metadata, or upload.

         The host owns the switch rather than a @media query here, because the
         condition is not "is the viewport narrow" but "did the host actually
         render the other copy" — the summary row is gone in the mobile
         preview takeover, and there the bar has to keep the buttons. */
      .btn-clear,
      .btn-add-more {
        display: var(--sfx-up-bar-batch-display, inline-flex);
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `];let me=sn;Ie([g({attribute:!1})],me.prototype,"t");Ie([g({type:String})],me.prototype,"uploadState");Ie([g({type:Number})],me.prototype,"fileCount");Ie([g({type:Number})],me.prototype,"failedCount");Ie([g({type:Boolean})],me.prototype,"showFillMetadata");Ie([g({type:Boolean})],me.prototype,"requireMetadataFirst");Ie([g({type:Number})],me.prototype,"requiredFieldsTotal");Ie([g({type:Number})],me.prototype,"requiredFieldsRemaining");Ie([g({type:Boolean})],me.prototype,"showCheckSimilar");Ie([g({type:Boolean})],me.prototype,"selectMode");Ie([g({type:Number})],me.prototype,"selectedCount");Ie([g({type:Number})],me.prototype,"maxSelection");Ie([g({type:Boolean})],me.prototype,"allSelected");Ie([g({type:Boolean})],me.prototype,"blocked");const ym='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function Ao(r,e){return t=>{if(t.key!=="Tab")return;const i=r();if(!i)return;const s=i.querySelector(e);if(!s)return;const o=Array.from(s.querySelectorAll(ym));if(o.length===0)return;const n=o[0],a=o[o.length-1],l=i.activeElement;t.shiftKey?(l===n||!s.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!s.contains(l))&&(t.preventDefault(),n.focus())}}var _m=Object.defineProperty,Ws=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&_m(e,t,s),s};const rn=class rn extends G{constructor(){super(...arguments),this.t=Ue,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=Ao(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");s&&(s.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";const t=!!this._name.trim();let i=this._name.trim();if(!i)try{const s=new URL(e).pathname.split("/");i=s[s.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i,nameIsUserDefined:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return u`
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
            ${this._error?u`<div class="error">${this._error}</div>`:""}
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
    `}};rn.styles=[Ys,Gs,Re,q`
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
    `];let Dt=rn;Ws([g({attribute:!1})],Dt.prototype,"t");Ws([P()],Dt.prototype,"_url");Ws([P()],Dt.prototype,"_name");Ws([P()],Dt.prototype,"_error");var wm=Object.defineProperty,Qi=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&wm(e,t,s),s};const on=class on extends G{constructor(){super(...arguments),this.t=Ue,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Ao(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var s,o;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("video"),t=(o=this.shadowRoot)==null?void 0:o.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
            ${this._error?u`<div class="error">${this._error}</div>`:this._captured?u`
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
                  `:u`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};on.styles=[Ys,Gs,q`
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
    `];let vt=on;Qi([g({attribute:!1})],vt.prototype,"t");Qi([P()],vt.prototype,"_stream");Qi([P()],vt.prototype,"_error");Qi([P()],vt.prototype,"_captured");Qi([P()],vt.prototype,"_previewUrl");var km=Object.defineProperty,hi=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&km(e,t,s),s};const nn=class nn extends G{constructor(){super(...arguments),this.t=Ue,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Ao(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=s=>{s.data.size>0&&this._chunks.push(s.data)},this._recorder.onstop=()=>{var o;const s=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=s,this._previewUrl=URL.createObjectURL(s),(o=this._stream)==null||o.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
            ${this._error?u`<div class="error">${this._error}</div>`:this._recordedBlob?u`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>
                        ${this.t("discard","Discard")}
                      </button>
                      <button class="btn btn-primary" @click=${this._useRecording}>
                        ${this.t("useRecording","Use recording")}
                      </button>
                    </div>
                  `:this._recording?u`
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
                    `:u`
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
    `}};nn.styles=[Ys,Gs,q`
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
    `];let st=nn;hi([g({attribute:!1})],st.prototype,"t");hi([P()],st.prototype,"_stream");hi([P()],st.prototype,"_recording");hi([P()],st.prototype,"_error");hi([P()],st.prototype,"_recordedBlob");hi([P()],st.prototype,"_previewUrl");var $m=Object.defineProperty,Ro=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&$m(e,t,s),s};const an=class an extends G{constructor(){super(...arguments),this.t=Ue,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(s=>s.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(s=>s.id!==e)},200)}_iconForType(e){return e==="error"?u`<svg
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
      </svg>`:e==="warning"?u`<svg
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
      </svg>`:u`<svg
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
    </svg>`}render(){return this._toasts.length===0?u``:u`
      <div class="toast-stack">
        ${this._toasts.map(e=>u`
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
    `}};an.styles=q`
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
  `;let oi=an;Ro([g({attribute:!1})],oi.prototype,"t");Ro([g({type:Number})],oi.prototype,"duration");Ro([P()],oi.prototype,"_toasts");ie("sfx-toast",oi);var Sm=Object.defineProperty,B=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Sm(e,t,s),s};const ja=new Set(["unsplash"]),nt=10,Cm=3,Em=["auto","mobile","tablet","desktop","hq","sample"],Pm=["hls"],Kt={isTus:!1,tusUploadUrl:null,relativeFolder:""},Na=new Set(["complete","failed","error","cancelled","rejected"]);var ee;const M=(ee=class extends G{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1,this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!1,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._seededSettingsDefaults=null,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._bulkMetadataSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Xt,this._cachedSourcesConfig=void 0,this._cachedSourcesTouch=void 0,this._cachedSourcesAccept=void 0,this._cachedTileSources=Xt,this._cachedTileSourcesFrom=null,this._unsubscribeTouch=null,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:s}=e.detail;if(St(i)){this.updateFileFocusPoint(t,s??null);return}if(kr(i)){const a=$r(i);if(!a)return;const l=s===""||s==null,d=a==="position"?{position:l?void 0:Number(s)}:{ref:l?void 0:String(s)};this.updateFileProduct(t,d);return}const o=this._store.getState().files.get(t);if(!o)return;const n=new Map(this._store.getState().files);n.set(t,{...o,meta:{...o.meta,[i]:s}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewMetadataChange=e=>{St(e.detail.key)&&(this._focusPointDraft=e.detail.value??null)},this._onFocusPointPickToggle=e=>{var t;this._focusPointPicking=e.detail.picking,e.detail.picking&&((t=this.renderRoot.querySelector(".preview-img-wrap"))==null||t.scrollIntoView({block:"nearest",behavior:"smooth"}))},this._onPreviewFieldHover=e=>{St(e.detail.key)&&(this._focusPointFieldHovered=e.detail.hovering)},this._onPreviewFieldFocus=e=>{const t=St(e.detail.key);e.detail.focused?(this._focusPointFieldFocused=t,t||(this._focusPointPicking=!1)):t&&(this._focusPointFieldFocused=!1)},this._onPreviewMetadataEscape=e=>{St(e.detail.key)&&(this._focusPointPicking=!1)},this._onFocusPointPick=e=>{const t=this._previewFileId;if(!t)return;const{horizontal:i,vertical:s}=e.detail;this._focusPointDraft=null,this.updateFileFocusPoint(t,`${i},${s}`)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var s;const i=(s=this.config)==null?void 0:s.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(o){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",o),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onFolderRejected=()=>{this._showFolderDisabledToast()},this._onCaptureChange=e=>{const t=e.target,i=Array.from(t.files??[]);t.value="",i.length>0&&this._processIncomingFiles(i)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var s,o,n,a;const t=this._mergedSources.find(l=>l.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,l)}return}if(e==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){if(Ne()&&this._captureInput){this._captureInput.click();return}this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((o=(s=this.config)==null?void 0:s.connectors)==null?void 0:o.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:l}=await J(async()=>{const{SfxGooglePickerView:d}=await import("./google-picker-view-D81B6GtW.js");return{SfxGooglePickerView:d}},[]);customElements.define("sfx-google-picker-view",l)}}else if(ja.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await J(async()=>{const{SfxSearchProviderBrowser:d}=await import("./search-provider-browser-CYG5M5P6.js");return{SfxSearchProviderBrowser:d}},[]);customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await J(async()=>{const{SfxProviderBrowser:d}=await import("./provider-browser-C3YTbz94.js");return{SfxProviderBrowser:d}},[]);customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var h,f,x;this._showUrlDialog=!1;const{url:t,name:i,nameIsUserDefined:s}=e.detail,o=(h=this.config)==null?void 0:h.callbacks,n=qr(i),a=n.startsWith("image/");if(hr(i))return;const l=this._store.getState();if([...l.files.values()].some(m=>m.name===i&&m.status!=="rejected"&&m.status!=="cancelled"))return;const c=fr({name:i,size:0,type:n},l.restrictions,l.files);if(c){const m={id:Vt(),status:"rejected",file:null,remoteUrl:t,name:i,nameIsUserDefined:s,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt};Nt(this._store,m),this._dispatchPublic(V.FILE_REJECTED,{file:m,reason:c.message}),(f=o==null?void 0:o.onFileRejected)==null||f.call(o,m,c.message);return}const p={id:Vt(),status:"idle",file:null,remoteUrl:t,name:i,nameIsUserDefined:s,size:0,type:n,previewUrl:a?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt};Nt(this._store,p),this._dispatchPublic(V.FILE_ADDED,{file:p}),(x=o==null?void 0:o.onFileAdded)==null||x.call(o,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,s,o;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(V.FILE_PREVIEW,{file:t}),(o=(s=(i=this.config)==null?void 0:i.callbacks)==null?void 0:s.onFilePreview)==null||o.call(s,t))},this._onFillMetadata=()=>{var t,i,s,o;this._bulkMetadataHadIssuesOnOpen=this._hasMetadataIssues;const e=[...this._store.getState().files.values()].filter(n=>ee._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(V.FILL_METADATA,{files:e}),(o=(s=(i=this.config)==null?void 0:i.callbacks)==null?void 0:s.onFillMetadata)==null||o.call(s,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=nt)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,nt).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{if(!this._firstMissingRequiredFieldKey()){const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning")}this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var s,o,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(V.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(o=(s=this.config)==null?void 0:s.callbacks)==null?void 0:o.onFileCopyCdn)==null||n.call(o,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:s,meta:o}of t){const n=i.get(s);n&&i.set(s,{...n,meta:{...n.meta,...o}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTagsSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesMeta(t.map(({fileId:i,tags:s})=>({fileId:i,tags:s})))},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,s=new Map(i);for(const{fileId:o,taxonodes:n}of t){const a=i.get(o);if(!a||!ee._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[d,c]of Object.entries(n))c==null?delete l[d]:l[d]=c;s.set(o,{...a,taxonodes:l})}this._store.setState({files:s})},this._onBulkMetadataClose=e=>{var s;const i=((s=e.detail)==null?void 0:s.saved)===!0&&this._bulkMetadataHadIssuesOnOpen&&!this._hasMetadataIssues;this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,i&&this._onUploadStart()},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var s,o,n;const t=(s=this.config)==null?void 0:s.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(o=this._engine)==null||o.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(V.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var s;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(s=t==null?void 0:t.shadowRoot)==null?void 0:s.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(s=>s.status==="complete"||s.status==="failed"||s.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=vi.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&vi.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,l,d;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,s=(c,p,h)=>`${c}\0${p}\0${h}`,o=new Set;for(const c of this._store.getState().files.values())c.status!=="rejected"&&c.status!=="cancelled"&&o.add(s(c.name,c.size,c.relativeFolder??""));for(const c of e.detail.files){if(hr(c.name))continue;const p=i?c.relativeFolder??"":"",h=this._store.getState(),f=s(c.name,c.size,p);if(o.has(f))continue;const x=c.thumbnail?this._transformRemoteThumbnail(c.thumbnail,{source:"connector",providerId:c.provider}):null,m=fr({name:c.name,size:c.size,type:c.mimeType},h.restrictions,h.files);if(m){const E={id:Vt(),status:"rejected",file:null,remoteUrl:null,name:c.name,size:c.size,type:c.mimeType,previewUrl:x,duration:null,progress:0,speed:0,bytesUploaded:0,error:m.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:c,...Kt,relativeFolder:p};Nt(this._store,E),this._dispatchPublic(V.FILE_REJECTED,{file:E,reason:m.message}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,E,m.message);continue}const C={id:Vt(),status:"idle",file:null,remoteUrl:null,name:c.name,size:c.size,type:c.mimeType,previewUrl:x,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:c,...Kt,relativeFolder:p};Nt(this._store,C),o.add(f),this._dispatchPublic(V.FILE_ADDED,{file:C}),(d=t==null?void 0:t.onFileAdded)==null||d.call(t,C)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,s,o,n;this._dispatchPublic(V.COMPLETE_ACTION,{}),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||s.call(i),(((o=this.config)==null?void 0:o.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(V.CANCEL,{})},this._onConfirmDismissOk=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!0),this._confirmDismissResolve=null},this._onConfirmDismissCancel=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!1),this._confirmDismissResolve=null},this._onModalDismiss=async()=>{var e,t,i,s;await this._confirmDismiss()&&(this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(V.CANCEL,{}),this.close())},this._onCancelUpload=()=>{var e,t,i,s;(e=this._engine)==null||e.cancelAll(),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(V.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(V.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(V.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,s;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(V.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&od(t,{allowDirectories:this._folderDropAllowed}).then(({files:i,hadDirectories:s,rejectedDirectories:o})=>{if(o&&this._showFolderDisabledToast(),i.length===0){s&&!o&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:s}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._confirmDismissVisible){this._onConfirmDismissCancel();return}if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const s=((t=this.config)==null?void 0:t.mode)??"modal",o=((i=this.config)==null?void 0:i.header)??(s==="modal"?"close":!0);(o==="close"||o==="back")&&(s==="modal"&&this._isOpen?this._onModalDismiss():s==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const s=i.getBoundingClientRect(),o=(t-s.left)/s.width*100;this._splitPct=Math.max(25,Math.min(75,o))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._namingViolationIds=new Set,this._namingViolationIdsKey="",this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=ee._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),s=i===-1?1:(i+1)%t.length;this._fsZoom=t[s],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,s=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(s)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+s,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Bc(),this._storeCtrl=new jc(this,this._store)}get _lastUploadId(){var i,s;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(s=this.config)==null?void 0:s.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,s;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(o=>o.type===hs.LANGUAGES);return((s=t==null?void 0:t.variants.find(Boolean))==null?void 0:s.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,s,o;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((s=this.config)==null?void 0:s.locale)??void 0;return{...np((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var s,o,n;const t=(((s=this._metadataSchema)==null?void 0:s.regionalVariantsGroups)??[]).find(a=>a.type===hs.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(o=this.config)==null?void 0:o.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var s;const e=(s=this.config)==null?void 0:s.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const s=Hu(e,t);return this._localizedSchemaCache={base:e,translations:t,result:s},s}get _bulkMetadataSchema(){var o,n;const e=this._localizedMetadataSchema;if(!e)return e;const t=((n=(o=this.config)==null?void 0:o.metadataConfig)==null?void 0:n.showTags)!==!1,i=this._bulkMetadataSchemaCache;if(i&&i.base===e&&i.showTags===t)return i.result;let s=$l(e);return t&&(s=Np(s,this._storeCtrl.state.t)),this._bulkMetadataSchemaCache={base:e,showTags:t,result:s},s}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(l=>l.type===hs.LANGUAGES)))return;const s=this._activeLanguage;if(!s||this._metadataTranslationsLang===s&&this._metadataTranslations)return;this._metadataTranslationsLang=s;const o=++this._translationsRequestId,n=e.peek(s);if(n){this._metadataTranslations=n;return}e.getTranslations(s).then(l=>{o===this._translationsRequestId&&(this._metadataTranslations=l)})}open(){var t,i,s,o,n,a,l,d,c;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||s.call(i),this._dispatchPublic(V.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(V.OPEN,{}),e&&((c=(d=(l=this.config)==null?void 0:l.callbacks)==null?void 0:d.onRestore)==null||c.call(d),this._dispatchPublic(V.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,s;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||s.call(i),this._dispatchPublic(V.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,s;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,(s=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||s.call(i),this._dispatchPublic(V.CLOSE,{}),this.requestUpdate()}upload(){var o,n,a,l,d,c,p,h,f,x;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(m=>m.status==="idle"||m.status==="queued");if((n=(o=this.config)==null?void 0:o.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(V.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const s=[...this._store.getState().files.values()].filter(m=>m.status==="idle"||m.status==="queued");this._dispatchPublic(V.UPLOAD_STARTED,{files:s}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||d.call(l,s),this._engine.uploadAll(),(c=this.config)!=null&&c.minimizeOnUpload&&((p=this.config)==null?void 0:p.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(x=(f=(h=this.config)==null?void 0:h.callbacks)==null?void 0:f.onMinimize)==null||x.call(f),this._dispatchFloatGeometryEvent(V.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,s=new Map(i);let o=!1;for(const n of e){const a=i.get(n.id);a&&(s.set(n.id,{...a,...n}),o=!0)}o&&this._store.setState({files:s})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const s=this._store.getState().files,o=s.get(e);if(!o||!ee._MODIFIABLE_STATUSES.has(o.status))return;const n=new Map(s);n.set(e,{...o,meta:t!=null?{...o.meta,...t}:o.meta,tags:i??o.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let s=!1;for(const{fileId:o,meta:n,tags:a}of e){const l=t.get(o);!l||!ee._MODIFIABLE_STATUSES.has(l.status)||(i.set(o,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),s=!0)}s&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const s=this._store.getState().files,o=s.get(e);if(!o||!ee._MODIFIABLE_STATUSES.has(o.status))return;const n={...o.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(s);a.set(e,{...o,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const s=this._store.getState().files,o=new Map(s);let n=!1;for(const a of e){const l=s.get(a);if(!l||!ee._MODIFIABLE_STATUSES.has(l.status))continue;const d={...l.taxonodes??{}};i==null?delete d[t]:d[t]=i,o.set(a,{...l,taxonodes:d}),n=!0}n&&this._store.setState({files:o})}updateFileProduct(e,t){const i=this._store.getState().files,s=i.get(e);if(!s||!ee._MODIFIABLE_STATUSES.has(s.status))return;const o=new Map(i);o.set(e,{...s,product:Jn(s.product,t)}),this._store.setState({files:o})}updateFileFocusPoint(e,t){const i=this._store.getState().files,s=i.get(e);if(!s||!ee._MODIFIABLE_STATUSES.has(s.status)||(s.focusPoint??null)===t)return;const o=new Map(i);o.set(e,{...s,focusPoint:t}),this._store.setState({files:o})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let s=!1;for(const{fileId:o,product:n}of e){const a=t.get(o);!a||!ee._MODIFIABLE_STATUSES.has(a.status)||(i.set(o,{...a,product:Jn(a.product,n)}),s=!0)}s&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._resetFocusPointPicking(),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(s=>{this._previewFileId===t&&(this._previewDims=s?`${s.w} × ${s.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal(),this._syncPageScrollLock()}_syncPageScrollLock(){var i;const e=((i=this.config)==null?void 0:i.mode)??"modal";this.isConnected&&e==="modal"&&this._isOpen&&!this._isMinimized?zc(this):Mn(this)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; line-height:15px; padding:6px 10px; border-radius:6px; white-space:normal; width:max-content; max-width:400px; word-break:break-word; max-height:36px; overflow:hidden; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),Ze(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(V.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(Ze(v,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._unsubscribeTouch=to(()=>this.requestUpdate()),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&vi.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await wc(e||"en");Qu(e||"en").catch(()=>{}),i&&t.on("missingKey",(o,n,a,l,d,c)=>{const p=a.match(/_(?:zero|one|two|few|many|other)$/),h=p&&(c!=null&&c[`defaultValue${p[0]}`])?String(c[`defaultValue${p[0]}`]):l;$c.handleMissingKey(a,h,n)});const s=(o,n,a)=>$t(o,n,a);this._store.setState({t:s})}catch{}}disconnectedCallback(){var e,t,i,s,o,n;super.disconnectedCallback(),Mn(this),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,(t=this._hostStyleObserver)==null||t.disconnect(),this._hostStyleObserver=null,(i=this._unsubStoreEvents)==null||i.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(s=this._portalContainer)==null||s.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const a of this._store.getState().files.values())a.previewUrl&&URL.revokeObjectURL(a.previewUrl);(n=this._engine)==null||n.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const o=this._store.getState().queueConfig;t.queueConfig={...o,concurrency:e.concurrency}}if(e.autoProceed!=null){const o=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...o,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const o=i.defaults,n=this._seededSettingsDefaults;o.resize!==void 0&&o.resize!==(n==null?void 0:n.resize)&&(this._setResize=o.resize),o.maxWidth!==void 0&&o.maxWidth!==(n==null?void 0:n.maxWidth)&&(this._setMaxW=o.maxWidth),o.maxHeight!==void 0&&o.maxHeight!==(n==null?void 0:n.maxHeight)&&(this._setMaxH=o.maxHeight),o.transcode!==void 0&&o.transcode!==(n==null?void 0:n.transcode)&&(this._setTranscode=o.transcode),o.resolution!==void 0&&o.resolution!==(n==null?void 0:n.resolution)&&(this._setResolution=o.resolution),o.protocol!==void 0&&o.protocol!==(n==null?void 0:n.protocol)&&(this._setProtocol=o.protocol),o.resumable!==void 0&&o.resumable!==(n==null?void 0:n.resumable)&&(this._setResumable=o.resumable),this._seededSettingsDefaults={...o}}const s=this._lastUploadId;this._hasStoredReview=s!=null&&vi.exists(s),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var s,o,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=Po(t.container,e.apiDomain),this._authHeaders=Nr(t),this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(s=e.connectors)==null?void 0:s.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e);return}const i=++this._authResolveId;try{const l=await pg(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,s;const t=e instanceof Error?e.message:String(e);return(s=(i=this.config)==null?void 0:i.auth)!=null&&s.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var s;const i=(s=this.shadowRoot)==null?void 0:s.querySelector("sfx-toast");i==null||i.show(e,t)}_applyNamingConvention(e){const t=e.namingConvention;if(!(t!=null&&t.enabled)){this._setNamingConvention(null,!1);return}const i=fg(t.regexB64);this._setNamingConvention(i,i===null)}_setNamingConvention(e,t){this._store.setState({namingConvention:{regex:e,broken:t}})}_normalizeTusConfig(){var a,l,d,c;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let s=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;s||(s={})}if(!s)return;const o=(c=(d=this.config)==null?void 0:d.connectors)==null?void 0:c.companionUrl;if(!o)return s;const n=o.replace(/\/+$/,"");return{...s,endpoint:s.endpoint??`${n}/files`,jsonBase:s.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e,t;return((e=this.config)==null?void 0:e.allowFolderUpload)===!1||((t=this.config)==null?void 0:t.preserveFolderStructure)===!1?!1:this._allowMulti}get _folderDropAllowed(){var e;return((e=this.config)==null?void 0:e.allowFolderUpload)!==!1}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return s=>{const o={},n=ze(s);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(o.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(o.postprocess="transcode",o["video-resolution"]=this._setResolution,o.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(o.opt_force_name=l)}const a=i==null?void 0:i(s);return a&&Object.assign(o,a),Object.keys(o).length>0?o:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new og(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,s)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:s}),onFocusPointError:i=>this._showToast(this._storeCtrl.state.t("focusPointSaveFailed","Could not save the focus point for {{name}}",{name:i.name}),"warning")}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,s=this._storeCtrl.state.t;try{const{fetchMetadataSchema:o,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:l,hasCachedDependencies:d,canReachHub:c,canUseSettingsSchema:p,HUB_HEADERS_HINT:h,createTagsAutocomplete:f,createTaxonomyService:x,createUltratagsService:m,createFieldI18nService:C}=await J(async()=>{const{fetchMetadataSchema:D,fetchDependencies:H,normalizeDependencies:Y,hasCachedSchema:ce,hasCachedDependencies:z,canReachHub:le,canUseSettingsSchema:K,HUB_HEADERS_HINT:$,createTagsAutocomplete:b,createTaxonomyService:_,createUltratagsService:R,createFieldI18nService:F}=await import("./index-Ov1FFoTM.js");return{fetchMetadataSchema:D,fetchDependencies:H,normalizeDependencies:Y,hasCachedSchema:ce,hasCachedDependencies:z,canReachHub:le,canUseSettingsSchema:K,HUB_HEADERS_HINT:$,createTagsAutocomplete:b,createTaxonomyService:_,createUltratagsService:R,createFieldI18nService:F}},[]);if(i!==this._metadataSchemaResolveId)return;const E=c(t)&&!!t.projectUuid,k=E||p(t)||!!t.rawMetadata||l(t.projectUuid,this._apiBase),S=E||!!t.projectUuid&&d(t.projectUuid)||!!t.rawDependencies;if(!k){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig sets schemaSource: 'hub' but no usable Hub auth is configured — skipping metadata schema and dependencies. Drop schemaSource to load the schema from /v5/settings instead. ${h}`),this._showToast(s("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let y;t.rawDependencies?y=Promise.resolve(a(t.rawDependencies)):S&&t.projectUuid?y=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(D=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",D),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${h}`)),y=Promise.resolve([]));const[w,O]=await Promise.all([o(this._apiBase,this._authHeaders,t.projectUuid,t),y]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=O,this._metadataAutocomplete=f(this._apiBase,this._authHeaders),this._taxonomyService=x(this._apiBase,this._authHeaders),this._ultratagsService=m(this._apiBase,this._authHeaders),this._fieldI18nService=C(this._apiBase,this._authHeaders);let A=w.productsEnabled?Fu(w,this._storeCtrl.state.t):w;t.focusPointEnabled&&(A=Wu(A,this._storeCtrl.state.t)),this._metadataSchema=A;const U=this._metadataSchema.fields.filter(D=>Oi(D,t)).map(D=>D.key);this._dispatchPublic(V.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:U}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(o){console.error("[sfx-uploader] Failed to load metadata schema:",o),this._showToast(s("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let s=!1;const o=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!ee._MODIFIABLE_STATUSES.has(a.status))continue;const l=ei({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const d={};for(const c of t.fields){const p=l.get(c.ckey);(p==null?void 0:p.setValue)!==void 0&&(p.hidden||qe(a.meta[c.key])&&(d[c.key]=hu(c,p.setValue)))}Object.keys(d).length!==0&&(o.set(a.id,{...a,meta:{...a.meta,...d}}),s=!0)}s&&this._store.setState({files:o})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const s=new Map(t);for(const o of t.values()){if(!ee._MODIFIABLE_STATUSES.has(o.status))continue;const n=ei({mime:o.type??"",meta:o.meta},e,this._metadataDependencies),a=fu(o.meta,e,n);a!==o.meta&&(s.set(o.id,{...o,meta:a}),i=!0)}i&&this._store.setState({files:s})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const s=this._store.getState().files.get(e);if(!s||s.name===i)return;const o=new Map(this._store.getState().files);o.set(e,{...s,name:i,nameIsUserDefined:!0}),this._store.setState({files:o})}_focusPointValueFor(e){if(this._focusPointDraft&&this._previewFileId===e.id)return this._focusPointDraft;if(!e.focusPoint)return null;const t=bl(e.focusPoint);return t.horizontal===""||t.vertical===""?null:t}get _focusPointMarkerVisible(){return this._focusPointPicking||this._focusPointFieldHovered||this._focusPointFieldFocused}_resetFocusPointPicking(){this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1}_previewMeta(e){var i,s,o;const t=(i=this._metadataSchema)==null?void 0:i.fieldsByKey.has(Xe);return!((s=this._metadataSchema)!=null&&s.productsEnabled)&&!t?e.meta:{...e.meta,...(o=this._metadataSchema)!=null&&o.productsEnabled?{[Ot]:e.product.ref,[It]:e.product.position}:{},...t?{[Xe]:this._focusPointDraft!==null&&this._previewFileId===e.id?this._focusPointDraft:e.focusPoint??null}:{}}}_resolvedSchemaFor(e){if(!this._metadataSchema)return null;const t=this._metadataDependencies.length>0?ei({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies):null;if(!(this._metadataSchema.fieldsByKey.has(Xe)&&!(e.type??"").startsWith("image/")))return t;const s=new Map(t??[]);return s.set(Xe,{...s.get(Xe),hidden:!0,required:!1,contributingDependencyUuids:[]}),s}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:_l(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Bu(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?kl(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}get _requiredFieldsTotal(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Mu(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies).size}get _requiredFieldsRemaining(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Object.keys(zu(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)).length}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var s;const e=this._isPillExpanded?"card":"pill",t=(s=this._portalContainer)==null?void 0:s.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var s,o,n,a,l,d,c,p,h,f;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(s=this.config)==null?void 0:s.callbacks;for(const[x,m]of e.files){const C=t.files.get(x);if(!C){m.relativeFolder&&this._firedFolders.delete(m.relativeFolder);continue}if(C.status!==m.status)switch(m.status){case"uploading":C.status==="paused"&&(this._dispatchPublic(V.UPLOAD_RESUMED,{file:m}),(o=i==null?void 0:i.onUploadResumed)==null||o.call(i,m));break;case"complete":m.response&&(this._dispatchPublic(V.UPLOAD_COMPLETE,{file:m,response:m.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,m,m.response));break;case"error":case"failed":{const E=new Error(m.error??"Upload failed");this._dispatchPublic(V.UPLOAD_ERROR,{file:m,error:E}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,m,E);break}case"retrying":this._dispatchPublic(V.UPLOAD_RETRY,{file:m,attempt:m.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,m,m.retryCount);break;case"paused":this._dispatchPublic(V.UPLOAD_PAUSED,{file:m}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,m);break}m.status==="uploading"&&C.progress!==m.progress&&(this._dispatchPublic(V.UPLOAD_PROGRESS,{file:m,progress:m.progress,speed:m.speed}),(c=i==null?void 0:i.onUploadProgress)==null||c.call(i,m,m.progress,m.speed)),m.relativeFolder&&C.status!==m.status&&Na.has(m.status)&&!this._firedFolders.has(m.relativeFolder)&&this._maybeDispatchFolderComplete(m.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const x=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=x),this._dispatchPublic(V.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:x}),(p=i==null?void 0:i.onTotalProgress)==null||p.call(i,e.totalProgress,e.totalSpeed,x)}if(t.isUploading&&!e.isUploading){const x=[...e.files.values()];if(!x.some(C=>C.status==="cancelled")){const C=x.filter(y=>y.status==="complete"),E=x.filter(y=>y.status==="failed"||y.status==="error");if(C.length===0&&E.length===0)return;const k=this._lastUploadId;if(k!=null){const y=[...C,...E];vi.save(k,y),this._hasStoredReview=y.length>0}this._dispatchPublic(V.ALL_COMPLETE,{successful:C,failed:E}),(h=i==null?void 0:i.onAllComplete)==null||h.call(i,C,E);const S=(f=this.config)==null?void 0:f.closeOnComplete;if(S!==!1&&S!=null){const y=typeof S=="number"?S:1500;this._closeOnCompleteTimer=setTimeout(()=>{var w,O,A;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(V.COMPLETE_ACTION,{}),(A=(O=(w=this.config)==null?void 0:w.callbacks)==null?void 0:O.onCompleteAction)==null||A.call(O),this.close())},y)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const s=[...t.files.values()].filter(l=>l.relativeFolder===e);if(s.length===0||s.some(l=>!Na.has(l.status)))return;const o=s.filter(l=>l.status==="complete"),n=s.filter(l=>l.status==="failed"||l.status==="error");o.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(V.FOLDER_COMPLETE,{folder:e,successful:o,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,o,n))}_filterCoreSources(e,t,i){const s=Lc(),o=Uc()&&(!t||Rg(i));return s&&o&&!t?e:e.filter(n=>(s||n.id!=="screen-cast")&&(o||n.id!=="camera")&&(!t||n.id!=="device"))}get _mergedSources(){var x;const e=(x=this.config)==null?void 0:x.connectors,t=Ne(),i=gr(this._storeCtrl.state.restrictions);if(e===this._cachedSourcesConfig&&t===this._cachedSourcesTouch&&i===this._cachedSourcesAccept)return this._cachedSources;if(this._cachedSourcesConfig=e,this._cachedSourcesTouch=t,this._cachedSourcesAccept=i,!e)return this._cachedSources=this._filterCoreSources(Xt.filter(m=>m.id!=="url"),t,i),this._cachedSources;const s=e.providers.length>0?Og(e.providers):[],o=e.customSources??[],n=e.coreSources?new Set(e.coreSources):null,a=n?Xt.filter(m=>n.has(m.id)):Xt,l=this._filterCoreSources(e.companionUrl?a:a.filter(m=>m.id!=="url"),t,i),d=t?["camera","url"]:["device","url"],c=d.map(m=>l.find(C=>C.id===m)).filter(m=>!!m),p=l.filter(m=>!d.includes(m.id)),h=new Set,f=[];for(const m of[...c,...s,...p,...o])if(!h.has(m.id)){if(ee._RESERVED_IDS.has(m.id)&&m.onActivate){console.warn(`[sfx-uploader] Custom source id "${m.id}" conflicts with a built-in source and was skipped.`);continue}h.add(m.id),f.push(m)}return this._cachedSources=f,this._cachedSources}get _tileSources(){const e=this._mergedSources;return e===this._cachedTileSourcesFrom?this._cachedTileSources:(this._cachedTileSourcesFrom=e,this._cachedTileSources=this._withTileDeviceSource(e),this._cachedTileSources)}_withTileDeviceSource(e){var i,s;if(!Ne()||e.some(o=>o.id==="device"))return e;const t=(s=(i=this.config)==null?void 0:i.connectors)==null?void 0:s.coreSources;return t&&!t.includes("device")?e:[Mg,...e]}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(s=>i.has(s.status))&&t.some(s=>s.status==="complete"||s.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var l,d,c,p,h;const t=(l=this.config)==null?void 0:l.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((d=this.config)==null?void 0:d.preserveFolderStructure)!==!1;let s=0,o=!1;const n=(f,x,m)=>`${f}\0${x}\0${m}`,a=new Set;for(const f of this._store.getState().files.values())f.status!=="rejected"&&f.status!=="cancelled"&&a.add(n(f.name,f.size,f.relativeFolder??""));for(const f of e){if(hr(f.name))continue;if(o){s++;continue}const x=i?eg(Qf(f)):"",m=this._store.getState(),C=n(f.name,f.size,x);if(a.has(C))continue;const E=f.type||qr(f.name),k=fr({name:f.name,size:f.size,type:E},m.restrictions,m.files);if(k){if(Ag(k)){o=!0,s++;continue}const w=E.startsWith("image/")&&!at(E)?URL.createObjectURL(f):null,O={id:Vt(),status:"rejected",file:f,remoteUrl:null,name:f.name,size:f.size,type:E,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:k.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt,relativeFolder:x};Nt(this._store,O),this._dispatchPublic(V.FILE_REJECTED,{file:O,reason:k.message}),(c=t==null?void 0:t.onFileRejected)==null||c.call(t,O,k.message);const A=(p=this.config)==null?void 0:p.rejectedFileAutoRemoveDelay,U=A===!1||A===0||A===void 0?0:A;if(U>0){const D=O.id,H=setTimeout(()=>{this._rejectedTimers.delete(D);const Y=this._store.getState().files.get(D);Y&&Y.status==="rejected"&&Bn(this._store,D)},U);this._rejectedTimers.set(D,H)}continue}let S=null;E.startsWith("image/")&&!at(E)&&(S=URL.createObjectURL(f));const y={id:Vt(),status:"idle",file:f,remoteUrl:null,name:f.name,size:f.size,type:E,previewUrl:S,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt,relativeFolder:x};if(Nt(this._store,y),a.add(C),this._dispatchPublic(V.FILE_ADDED,{file:y}),(h=t==null?void 0:t.onFileAdded)==null||h.call(t,y),f.type.startsWith("video/")){Tg(f).then(O=>{if(!O)return;const A=this._store.getState(),U=A.files.get(y.id);if(U){const D=new Map(A.files);D.set(y.id,{...U,previewUrl:O}),this._store.setState({files:D})}else URL.revokeObjectURL(O)});const w=document.createElement("video");w.preload="metadata",w.src=URL.createObjectURL(f),w.onerror=()=>{URL.revokeObjectURL(w.src)},w.onloadedmetadata=()=>{const O=w.duration;if(URL.revokeObjectURL(w.src),!isFinite(O))return;const A=this._store.getState(),U=A.files.get(y.id);if(U){const D=new Map(A.files);D.set(y.id,{...U,duration:O}),this._store.setState({files:D})}}}}if(s>0){const f=this._storeCtrl.state.t,x=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(f("tooManyFilesSkipped",{count:s,max:x,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}get _captureInput(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector("input[data-sfx-capture]"))??null}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_showFolderDisabledToast(){const e=this._storeCtrl.state.t;this._showToast(e("folderUploadDisabled","Folder upload is disabled"),"info")}_removeFile(e){var o,n,a,l,d;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const c=this._videoBlobUrls.get(t.file);c&&(URL.revokeObjectURL(c),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((o=this._engine)==null||o.cancelFile(e)),Bn(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const s=this._rejectedTimers.get(e);if(s&&(clearTimeout(s),this._rejectedTimers.delete(e)),this._previewFileId===e){const c=[...this._store.getState().files.values()];this._previewFileId=c.length>0?c[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(V.FILE_REMOVED,{file:i}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>ze(e)==="image"&&!at(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,s,o;const e=(s=(i=this.config)==null?void 0:i.auth)==null?void 0:s.container,t=(o=this._authHeaders)==null?void 0:o["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var o,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Ta((n=(o=this.config)==null?void 0:o.similarityCheck)==null?void 0:n.confidence),s=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Aa(e,{...t,threshold:i,endpoint:s}).then(d=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,d)}).catch(d=>{console.error("[sfx-uploader] Similarity check failed for",e.name,d),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var h,f,x,m;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(C=>C.id);const i=Ta((f=(h=this.config)==null?void 0:h.similarityCheck)==null?void 0:f.confidence),s=(m=(x=this.config)==null?void 0:x.similarityCheck)==null?void 0:m.endpoint,o=new AbortController;this._similarAbort=o;const n=[...e];let a=0,l=0;const d=e.length,c=()=>{if(!o.signal.aborted){if(!this._previewFileId){const C=e.find(E=>{var k;return(((k=this._similarResults.get(E.id))==null?void 0:k.length)??0)>0});C&&(this._previewFileId=C.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},p=()=>{if(!o.signal.aborted)for(;a<Cm&&n.length>0;){const C=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(C.id),Aa(C,{...t,threshold:i,endpoint:s,signal:o.signal}).then(E=>{o.signal.aborted||(this._similarMarkInactive(C.id),this._similarSetResults(C.id,E))}).catch(E=>{o.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",C.name,E),this._similarMarkInactive(C.id),this._similarSetResults(C.id,[]))}).finally(()=>{o.signal.aborted||(a-=1,l+=1,l===d?c():p())})}};p()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),s=i>0?t.slice(i+1).toUpperCase():"";return s&&s.length<=5?s:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(s=>{var o,n;return s.status==="complete"&&!!((n=(o=s.response)==null?void 0:o.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var o,n,a;if(!e)return;const t=Fc(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(V.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),s=(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||s===!1)&&t&&window.location.assign(t)}get _hasUnsavedUploadWork(){var e;if(this._phase==="uploading")return!0;if(((e=this.config)==null?void 0:e.clearOnClose)===!1)return!1;for(const t of this._store.getState().files.values())if(t.status==="idle"||t.status==="queued")return!0;return!1}_confirmDismiss(){return this._hasUnsavedUploadWork?new Promise(e=>{this._confirmDismissResolve=e,this._confirmDismissVisible=!0}):Promise.resolve(!0)}render(){var s;const e=((s=this.config)==null?void 0:s.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?u`
        ${this._isOpen&&!this._isMinimized?u`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:v}
        ${this._renderFsOverlay()}
      `:u`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return v;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(s=>s.id===this._previewFileId);return u`
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
        ${this._fullscreenVideoFile?u`<video
              class="fs-img"
              src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
              controls
              playsinline
              draggable="false"
              @click=${s=>s.stopPropagation()}
            ></video>`:u`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${te(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${s=>s.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=ee._FS_ZOOM_LEVELS[ee._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=ee._FS_ZOOM_LEVELS[ee._FS_ZOOM_LEVELS.length-1]?u`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`:u`<svg
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
        @click=${s=>{s.stopPropagation(),this._navigateFs(-1)}}
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
        @click=${s=>{s.stopPropagation(),this._navigateFs(1)}}
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
    `}_renderProgressHeaderActions(){var a,l,d;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((l=this.config)==null?void 0:l.header)??(t==="modal"?"close":!0),s=!!((d=this.config)!=null&&d.minimizeOnUpload)&&t!=="inline",o=i==="close";if(!s&&!o)return v;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return u`
      <div class="header-actions">
        ${s?u`<button
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
            </button>`:v}
        ${o?u`<button
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
            </button>`:v}
      </div>
    `}_renderInlineHeader(e){return u`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?u`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:v}
          ${e.title?u`<h2 class="inline-header-title">${e.title}</h2>`:v}
        </div>
        ${e.description?u`<div class="inline-header-desc">${e.description}</div>`:v}
      </div>
    `}_renderHeader(){var E,k,S,y,w,O;const e=this._storeCtrl.state.t,t=((E=this.config)==null?void 0:E.mode)??"modal";if(this._phase==="uploading"){const A=this._storeCtrl.state,D=[...A.files.values()].filter(z=>z.status!=="rejected"&&z.status!=="cancelled"),H=D.length,Y=D.filter(z=>z.status==="complete").length,ce=A.totalProgress??0;return u`
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
                ${e("uploadingFiles",{count:H,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:Y,total:H})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:Ra(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(ce)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${te({width:`${ce}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const A=[...this._storeCtrl.state.files.values()].filter(D=>D.status!=="rejected"&&D.status!=="cancelled"),U=this._batchOutcome(A,!0);return u`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon ${U.outcomeClass}">${U.outcomeIcon}</div>
            <div>
              <div class="float-title">${U.title}</div>
              <div class="float-subtitle">${U.doneSummary}</div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          ${U.segTotal>0?u`<div class="header-progress">
                <div class="header-overall-bar" aria-hidden="true">
                  ${U.newCount>0?u`<div
                        class="header-seg ok"
                        ${te({width:U.segPct(U.newCount)})}
                      ></div>`:v}
                  ${U.alreadyExistedCount>0?u`<div
                        class="header-seg dup"
                        ${te({width:U.segPct(U.alreadyExistedCount)})}
                      ></div>`:v}
                  ${U.failed>0?u`<div
                        class="header-seg fail"
                        ${te({width:U.segPct(U.failed)})}
                      ></div>`:v}
                </div>
              </div>`:v}
        </div>
      `}if(t==="inline"&&((k=this.config)!=null&&k.inlineHeader))return v;const i=((S=this.config)==null?void 0:S.header)??(t==="modal"?"close":!0);if(i===!1)return v;const s=t==="modal"?this._onModalDismiss:this._onInlineDismiss,o=i==="back"?u`<button
            class="header-btn header-btn-back"
            aria-label=${e("backToAssetPicker","Back to Asset Picker")}
            @click=${s}
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
          </button>`:v,n=(y=this.config)==null?void 0:y.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,d=[...this._storeCtrl.state.files.values()],c=d.some(A=>ze(A)==="image"&&!at(A.type)),p=d.some(A=>ze(A)==="pdf"),h=d.some(A=>ze(A)==="vid"),x=a&&(c||p||h||l)?u`<button
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
          </button>`:v,m=(O=(w=this._metadataSchema)==null?void 0:w.regionalVariantsGroups)!=null&&O.length?u`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:v,C=i==="close"?u`<button
            class="header-btn header-btn-close"
            aria-label=${e("close","Close")}
            @click=${s}
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
          </button>`:v;return u`
      <div class="header">
        ${o}
        ${i!=="back"?u` <div class="header-icon">
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
            </div>`:v}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${m} ${x} ${C}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const s={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,s),t(s)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,s=e.filter(S=>S.status==="complete").length,o=e.filter(S=>S.status==="failed"||S.status==="error").length,n=e.filter(S=>S.status==="complete"&&S.alreadyExisted).length,a=Math.max(s-n,0),l=s>0&&o===0&&n>=s,d=t?o>0?"error":n>0?"warn":"done":"",c=u`<svg
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
    </svg>`,p=u`<svg
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
    </svg>`,h=u`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>`,f=o>0?s>0?c:p:n>0?c:h,x=t?o>0?s>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):l?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),m=[];a>0&&m.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&m.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),o>0&&m.push(i("nFailed","{{count}} failed",{count:o}));const C=m.length>0?m.join(" · "):i("allDone","All done"),E=a+n+o;return{completed:s,failed:o,alreadyExistedCount:n,newCount:a,allAlreadyExisted:l,outcomeClass:d,outcomeIcon:f,title:x,doneSummary:C,segTotal:E,segPct:S=>E>0?`${S/E*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,s=Math.round(t.totalProgress??0),o=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:l,newCount:d,outcomeClass:c,outcomeIcon:p,title:h,doneSummary:f,segPct:x}=this._batchOutcome(e,o),m=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return u`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?u`<div class="float-collapsed-icon ${c}">${p}</div>`:u`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${h}</span>
            ${o?v:u`<span class="float-collapsed-pct">${s}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${o&&m?u`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(m)}
                >
                  ${or}
                </button>`:v}
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
      `;const C=e.filter(y=>y.status==="failed"||y.status==="error"),E=e.filter(y=>y.status==="complete"&&y.alreadyExisted),k=e.filter(y=>y.status!=="failed"&&y.status!=="error"&&y.status!=="complete"),S=e.filter(y=>y.status==="complete"&&!y.alreadyExisted);return u`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${c}">
              ${o?p:u`<svg
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
              <div class="float-title">${h}</div>
              <div class="float-subtitle">
                ${o?f:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Ra(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${o&&m?u`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(m)}
                >
                  ${or}
                </button>`:v}
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
            ${o?v:u`<span class="float-progress-pct">${s}%</span>`}
          </div>
          ${o?u`<div class="float-bar segmented" role="img" aria-label=${f}>
                ${d>0?u`<div
                      class="float-bar-seg ok"
                      ${te({width:x(d)})}
                    ></div>`:v}
                ${l>0?u`<div
                      class="float-bar-seg dup"
                      ${te({width:x(l)})}
                    ></div>`:v}
                ${a>0?u`<div
                      class="float-bar-seg fail"
                      ${te({width:x(a)})}
                    ></div>`:v}
              </div>`:u`<div class="float-bar">
                <div class="float-bar-fill" ${te({width:`${s}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${Zt(C,y=>y.id,y=>this._renderFloatItem(y,i))}
          ${Zt(E,y=>y.id,y=>this._renderFloatItem(y,i))}
          ${Zt(k,y=>y.id,y=>this._renderFloatItem(y,i))}
          ${Zt(S,y=>y.id,y=>this._renderFloatItem(y,i))}
        </div>
      </div>
    `}_truncateTooltip(e,t=140){return e.length>t?`${e.slice(0,t).trimEnd()}…`:e}_renderFloatItem(e,t){var s,o,n;const i=e.status==="failed"||e.status==="error";return u`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${te(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
        >
          ${e.previewUrl?v:u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${Jt(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status==="complete"?u`${(s=this.config)!=null&&s.showLocateButton&&((n=(o=e.response)==null?void 0:o.file)!=null&&n.uuid)?u`<button
                    class="float-item-act locate"
                    title=${t("locate","Locate")}
                    aria-label=${t("locate","Locate")}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${or}
                  </button>`:v}
              ${e.alreadyExisted?u`<div class="float-item-tip">
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
                      >${this._truncateTooltip(t("alreadyInYourLibrary","Already in your library"),80)}</span
                    >
                  </div>`:u`<div class="float-item-tip">
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
                    <span class="float-item-tooltip"
                      >${this._truncateTooltip(t("uploaded","Uploaded"),80)}</span
                    >
                  </div>`}`:i?u`<button
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
                      >${this._truncateTooltip(e.error||t("uploadFailed","Upload failed"))}</span
                    >
                  </div>`:e.status==="paused"?u` <button
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
                    </button>`:u`
                    ${e.status==="uploading"&&e.isTus?u`<button
                          class="float-item-act"
                          title=${t("pause","Pause")}
                          aria-label=${t("pauseUpload","Pause upload")}
                          @click=${()=>{var a;return(a=this._engine)==null?void 0:a.pauseFile(e.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </button>`:v}
                    ${e.status==="uploading"||e.status==="queued"||e.status==="retrying"?u`<button
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
                        </button>`:v}
                    <div class="float-item-spinner"></div>
                  `}
        </div>
      </div>
    `}_renderAssetCount(e,t,i,s){const o=e.reduce((a,l)=>a+(l.size||0),0),n=i!=="uploading"&&i!=="complete"&&!s;return u`
      <div class="asset-count">
        <span class="asset-count-text"
          >${e.length} ${e.length===1?"file":"files"} ·
          ${Jt(o)}</span
        >
        ${n?u`
              <div class="asset-count-actions">
                <button
                  class="asset-count-btn"
                  type="button"
                  @click=${()=>this._onClearAll()}
                  aria-label=${t("clear","Clear")}
                  title=${t("clear","Clear")}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${ul}</svg>
                </button>
                <button
                  class="asset-count-btn accent"
                  type="button"
                  @click=${this._onAddMore}
                  aria-label=${t("addMore","Add more")}
                  title=${t("addMore","Add more")}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${br}</svg>
                </button>
              </div>
            `:v}
      </div>
    `}_renderPreviewLayout(e){var C,E,k,S,y,w,O,A,U,D;if(e.length===0)return v;const t=this._storeCtrl.state.t,i=e,s=i.find(H=>H.id===this._previewFileId)??i[0],o=((C=s.name.split(".").pop())==null?void 0:C.toUpperCase())||"";new Date(s.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((H,Y)=>H+(Y.size||0),0),l=!!((k=(E=this.config)==null?void 0:E.similarityCheck)!=null&&k.enabled)&&this._phase==="ready",d=l?i.filter(H=>ze(H)==="image"&&!at(H.type)&&!this._similarResults.has(H.id)).map(H=>H.id):[],c=Math.min(d.length,nt),p=c>0&&this._similarSelectedIds.size>=c,h=this._similarSelectedIds.size>=nt,f=this._similarResults.get(s.id),x=f!==void 0,m=x?this._previewPanelTab:"details";return u`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${te({flex:String(this._splitPct)})}>
          ${((S=this.config)==null?void 0:S.mode)==="inline"&&((y=this.config)!=null&&y.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):v}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${Jt(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._tileSources}
            .accept=${gr(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((w=this.config)==null?void 0:w.showLocateButton)??!1}
            .showCopyCdnButton=${((O=this.config)==null?void 0:O.showCopyCdnButton)??!1}
            .showCheckSimilar=${l}
            .selectMode=${l}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${p}
            .selectionFull=${h}
            .maxSelection=${nt}
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
        <div class="preview-panel" ${te({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():u`
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
                  <span class="preview-header-name" title=${s.name}
                    >${s.name}</span
                  >
                  <div class="preview-header-actions">
                    ${s.previewUrl||s.type.startsWith("video/")&&s.file?u`
                          <button
                            @click=${()=>{this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
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
                        `:v}
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
                ${x?u`
                      <div class="preview-tabs" role="tablist">
                        <button
                          class="preview-tab ${m==="details"?"active":""}"
                          role="tab"
                          aria-selected=${m==="details"}
                          @click=${()=>{this._previewPanelTab="details"}}
                        >
                          ${t("details","Details")}
                        </button>
                        <button
                          class="preview-tab ${m==="similar"?"active":""}"
                          role="tab"
                          aria-selected=${m==="similar"}
                          @click=${()=>{this._previewPanelTab="similar"}}
                        >
                          <span>${t("similarTab","Similar")}</span>${f&&f.length>0?u`<span class="preview-tab-count">${f.length}</span>`:v}
                        </button>
                      </div>
                    `:v}
                ${m==="similar"?this._renderSimilarPanel(s,f??[]):u`
                      <div class="preview-details-body">
                        ${s.type.startsWith("video/")&&s.file?u`
                              <div class="preview-media-area">
                                <div class="preview-img-wrap">
                                  <video
                                    class="preview-image"
                                    src=${this._getVideoBlobUrl(s.file)}
                                    controls
                                    playsinline
                                  ></video>
                                </div>
                                <button
                                  class="preview-nav prev"
                                  ?disabled=${i.indexOf(s)===0}
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
                                  ?disabled=${i.indexOf(s)===i.length-1}
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
                            `:s.previewUrl?u`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${s.previewUrl}
                                      alt=${s.name}
                                    />
                                    ${(A=this._metadataSchema)!=null&&A.fieldsByKey.has(Xe)&&s.type.startsWith("image/")?u`<sfx-focus-point-overlay
                                          .picking=${this._focusPointPicking}
                                          .showMarker=${this._focusPointMarkerVisible}
                                          .value=${this._focusPointValueFor(s)}
                                          @focus-point-pick=${this._onFocusPointPick}
                                        ></sfx-focus-point-overlay>`:v}
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(s)===0}
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
                                    ?disabled=${i.indexOf(s)===i.length-1}
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
                              `:u`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${ze(s)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${ro(o)}
                                      alt="${o?t("extFile","{{ext}} file",{ext:o}):t("file","File")}"
                                      @error=${H=>{const Y=H.target,ce=so();!Y.dataset.fallback&&Y.src!==ce&&(Y.dataset.fallback="1",Y.src=ce)}}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(s)===0}
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
                                    ?disabled=${i.indexOf(s)===i.length-1}
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
                        ${this._metadataSchema&&((U=this.config)!=null&&U.metadataConfig)?u`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${o}${s.size?` · ${Jt(s.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                              </div>
                            </div>`:v}
                        ${this._metadataSchema&&((D=this.config)!=null&&D.metadataConfig)?u`
                              <div
                                class="preview-metadata"
                                @field-blur=${this._onPreviewMetadataBlur}
                                @field-change=${this._onPreviewMetadataChange}
                                @field-escape=${this._onPreviewMetadataEscape}
                                @field-hover=${this._onPreviewFieldHover}
                                @field-focus=${this._onPreviewFieldFocus}
                                @focus-point-pick-toggle=${this._onFocusPointPickToggle}
                                @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                              >
                                <sfx-metadata-form
                                  .schema=${this._localizedMetadataSchema}
                                  .meta=${this._previewMeta(s)}
                                  .focusPointPicking=${this._focusPointPicking}
                                  .config=${this._effectiveMetadataConfig}
                                  .autocomplete=${this._metadataAutocomplete}
                                  .taxonomyService=${this._taxonomyService}
                                  .ultratags=${this._ultratagsService}
                                  .defaultLanguage=${this._metadataDefaultLanguage}
                                  .taxonodes=${s.taxonodes??null}
                                  .resolvedSchema=${this._resolvedSchemaFor(s)}
                                  .dependencies=${this._metadataDependencies}
                                ></sfx-metadata-form>
                              </div>
                            `:u`
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
                                    <div class="preview-file-info-val">${s.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${o}</div>
                                  </div>
                                  ${s.size?u`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${Jt(s.size)}
                                          </div>
                                        </div>
                                      `:v}
                                  ${this._previewDims!=="—"?u`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("dimensions","Dimensions")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${this._previewDims}
                                          </div>
                                        </div>
                                      `:v}
                                </div>
                              </div>
                            `}
                      </div>
                    `}
              `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return t.length===0?u`
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
      `:u`
      <div class="psim-body">
        ${t.map(s=>{const o=Math.round(s.score*100);return u`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${s.score>=.85?"high":""}">${o}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(s.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                ${s.url?u`<img src=${s.url} alt="" />`:v}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(s)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(s)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var p;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(h=>ze(h)==="image"&&!at(h.type)),s=t.some(h=>ze(h)==="pdf"),o=t.some(h=>ze(h)==="vid"),n=(p=this.config)==null?void 0:p.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=h=>{switch(h){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},d=h=>{switch(h){case"hls":return e("protocolHls","HLS")}},c=h=>f=>{const x=parseInt(f.target.value,10);h(Number.isFinite(x)?x:0)};return u`
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
        ${i||s?u`
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
                      @input=${c(h=>this._setMaxW=h)}
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
                      @input=${c(h=>this._setMaxH=h)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:v}
        ${o?u`
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
                  <span>${l(this._setResolution)}</span>
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
                ${this._setResolutionOpen&&this._setTranscode?u`
                      <div class="smenu">
                        ${Em.map(h=>u`
                            <div
                              class="sopt ${h===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=h,this._setResolutionOpen=!1}}
                            >
                              ${l(h)}
                              ${h===this._setResolution?u`<svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>`:v}
                            </div>
                          `)}
                      </div>
                    `:v}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${Pm.map(h=>u`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=h}}
                    >
                      <span class="sradio ${this._setProtocol===h?"on":""}"></span>
                      <span class="sradio-lbl">${d(h)}</span>
                    </div>
                  `)}
              </div>
            `:v}
        ${a?u`
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
                  @click=${()=>{var h;this._setResumable=!this._setResumable,(h=this._engine)==null||h.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:v}
      </div>
    `}_navigatePreview(e,t){var o;const s=e.findIndex(n=>n.id===this._previewFileId)+t;if(s>=0&&s<e.length){const n=(o=this.shadowRoot)==null?void 0:o.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[s].id}}_namingConventionGate(e,t){const{regex:i,broken:s}=t;return{hasViolation:!s&&!!i&&e.some(n=>!Ea(n.name,i)),broken:s}}_computeNamingViolationIds(e,t,i){if(!t||!i)return this._namingViolationIdsKey!==""&&(this._namingViolationIdsKey="",this._namingViolationIds=new Set),this._namingViolationIds;const s=e.filter(n=>!Ea(n.name,i)).map(n=>n.id),o=s.join(",");return o!==this._namingViolationIdsKey&&(this._namingViolationIdsKey=o,this._namingViolationIds=new Set(s)),this._namingViolationIds}_renderNamingConventionBanner(e,t,i){if(!t&&!i)return v;const s=i?e("filenameNamingConventionMisconfigured","Upload can't proceed: the file naming rule configured for this project is invalid. Contact your administrator."):e("filenameNamingConventionBlocked","Upload can't proceed as file(s) is/are not matching the naming convention enforced.");return u`
      <div class="naming-banner">
        <span class="naming-banner-ico">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <span class="naming-banner-txt">${s}</span>
      </div>
    `}_renderBody(){var k,S,y,w,O,A,U,D,H,Y,ce,z,le;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],s=i.filter(K=>K.status==="idle"||K.status==="queued"||K.status==="error"||K.status==="failed"),{hasViolation:o,broken:n}=this._namingConventionGate(s,e.namingConvention),a=this._computeNamingViolationIds(s,o,e.namingConvention.regex),l=this._phase,d=gr(e.restrictions),c=i.length>0,p=l==="ready"?this._requiredFieldsRemaining:0,f=!!((S=(k=this.config)==null?void 0:k.similarityCheck)!=null&&S.enabled)&&l==="ready",x=f?i.filter(K=>ze(K)==="image"&&!at(K.type)&&!this._similarResults.has(K.id)).map(K=>K.id):[],m=Math.min(x.length,nt),C=m>0&&this._similarSelectedIds.size>=m,E=this._similarSelectedIds.size>=nt;return u`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
        @folder-rejected=${this._onFolderRejected}
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
        @clear-all=${()=>this._onClearAll()}
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
        ${Ne()?u`<input
              data-sfx-capture
              type="file"
              capture="environment"
              accept=${d||"image/*,video/*"}
              @change=${this._onCaptureChange}
            />`:v}
        <div
          class="body ${c?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${c?this._onBodyDragEnter:v}
          @dragover=${c?this._onBodyDragOver:v}
          @dragleave=${c?this._onBodyDragLeave:v}
          @drop=${c?this._onBodyDrop:v}
        >
          ${((y=this.config)==null?void 0:y.mode)==="inline"&&((w=this.config)!=null&&w.inlineHeader)&&!this._previewFileId&&l!=="uploading"&&l!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):v}
          ${this._isReviewing?u`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((O=this.config)==null?void 0:O.showLocateButton)??!1}
                  .showCopyCdnButton=${((A=this.config)==null?void 0:A.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:u`
                ${c?v:u`<sfx-drop-zone
                        .t=${t}
                        .compact=${c}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${d}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((U=this.config)==null?void 0:U.sourcesLayout)??"pills"}
                        .mode=${((D=this.config)==null?void 0:D.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                        .allowFolderDrop=${this._folderDropAllowed}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?u`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:v}`}
                ${c?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):u`
                        ${l==="ready"?this._renderNamingConventionBanner(t,o,n):v}
                        ${this._renderAssetCount(i,t,l,f&&this._similarSelectedIds.size>0)}
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${l!=="uploading"&&l!=="complete"}
                          .sources=${this._tileSources}
                          .accept=${d}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((H=this.config)==null?void 0:H.showLocateButton)??!1}
                          .showCopyCdnButton=${((Y=this.config)==null?void 0:Y.showCopyCdnButton)??!1}
                          .showCheckSimilar=${f}
                          .selectMode=${f}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${C}
                          .selectionFull=${E}
                          .maxSelection=${nt}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .namingViolationIds=${a}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:v}
              `}
        </div>

        ${c?u`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${l==="uploading"?"uploading":l==="complete"?"done":"idle"}
                .fileCount=${l==="uploading"||l==="complete"?i.filter(K=>K.status!=="rejected"&&K.status!=="cancelled").length:s.length}
                .failedCount=${i.filter(K=>K.status==="failed"||K.status==="error").length}
                .blocked=${l==="ready"&&(o||n)}
                .showFillMetadata=${!!(((ce=this.config)==null?void 0:ce.showFillMetadata)??((z=this.config)==null?void 0:z.metadataConfig))&&p===0}
                .requireMetadataFirst=${l==="ready"?this._hasMetadataIssues:!1}
                .requiredFieldsTotal=${l==="ready"?this._requiredFieldsTotal:0}
                .requiredFieldsRemaining=${p}
                .showCheckSimilar=${!1}
                .selectMode=${f&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${m}
                .allSelected=${C}
              ></sfx-actions-bar>
            `:v}
        ${this._showUrlDialog?u`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:v}
        ${this._showCameraDialog?u`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:v}
        ${this._showScreenCastDialog?u`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:v}
        ${this._confirmDismissVisible?u`
              <div class="up-confirm-overlay" @click=${this._onConfirmDismissCancel}>
                <div
                  class="up-confirm"
                  role="alertdialog"
                  aria-modal="true"
                  aria-labelledby="up-confirm-msg"
                  @click=${K=>K.stopPropagation()}
                >
                  <p class="up-confirm-text" id="up-confirm-msg">
                    ${this._phase==="uploading"?t("discardActiveUpload","Upload in progress. Cancel it and close?"):t("discardQueuedFiles","You haven't uploaded these files yet. Discard them?")}
                  </p>
                  <div class="up-confirm-actions">
                    <button class="btn-ghost" @click=${this._onConfirmDismissCancel}>
                      ${t("cancel","Cancel")}
                    </button>
                    <button class="btn-primary" @click=${this._onConfirmDismissOk}>
                      ${t("discard","Discard")}
                    </button>
                  </div>
                </div>
              </div>
            `:v}
        ${this._activeConnector&&((le=this.config)!=null&&le.connectors)?u`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${this._activeConnector==="google-drive"&&this.config.connectors.googlePicker?u`
                        <sfx-google-picker-view
                          .t=${t}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:ja.has(this._activeConnector)?u`
                          <sfx-search-provider-browser
                            .t=${t}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:u`
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
            `:v}
        ${this._bulkMetadataOpen&&this._metadataSchema?u`
              <sfx-bulk-metadata-modal
                .schema=${this._bulkMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(K=>ee._MODIFIABLE_STATUSES.has(K.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                .primaryAction=${this._bulkMetadataHadIssuesOnOpen?"upload":"save"}
                .operationMode=${"set-only"}
                .exitAction=${"back"}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @tags-save-batch=${this._onBulkTagsSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:v}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);if(i===-1)return;const s=i+e;if(s>=0&&s<t.length){const o=t[s];this._fullscreenPreviewUrl=o.previewUrl,this._fullscreenVideoFile=o.type.startsWith("video/")&&o.file?o.file:null,this._previewFileId=o.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},ee.styles=q`
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
      --sfx-up-bulk-modal-max-width: 1600px;
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

    /* Native-camera handoff input — triggered from the camera source, never
       shown. See _handleSourceActivation. */
    input[data-sfx-capture] {
      display: none;
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
      justify-content: space-between;
      gap: 12px;
      flex-shrink: 0;
    }

    .asset-count-text {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Clear / Add more are duplicated here and in the actions bar, and exactly
       one copy is ever shown: the bar owns them from 769px up, this row owns
       them below. Both halves of that switch live in the ≤768px block further
       down — this row turns on, and the same rule sets the bar's
       --sfx-up-bar-batch-display to none — so the two can never disagree the
       way a pair of breakpoints in two shadow roots eventually would. */
    .asset-count-actions {
      display: none;
    }

    .asset-count-btn {
      flex: 0 0 36px;
      width: 36px;
      height: 36px;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      font-family: inherit;
      background: var(--sfx-up-bg, #fff);
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text-secondary, #64748b);
      transition:
        background 0.15s ease,
        border-color 0.15s ease;
    }

    .asset-count-btn svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .asset-count-btn.accent {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
      color: var(--sfx-up-primary, #2563eb);
    }

    .asset-count-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    /* Filename naming-convention warning — persistent (not a toast) since it
       reflects a standing block on the whole staged batch, not a one-off
       event. Files stay directly editable (rename inline) while this shows. */
    .naming-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 16px 0;
      padding: 10px 16px;
      border-radius: 10px;
      background-color: var(--sfx-up-bg, #fff);
      background-image: linear-gradient(
        var(--destructive-10, #fef2f2),
        var(--destructive-10, #fef2f2)
      );
      border: 1px solid var(--sfx-up-error, rgba(220, 38, 38, 0.25));
      flex-shrink: 0;
    }

    .naming-banner-ico {
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
      color: var(--sfx-up-error, #dc2626);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .naming-banner-ico svg {
      width: 18px;
      height: 18px;
    }

    .naming-banner-txt {
      flex: 1;
      min-width: 0;
      font-size: 13.5px;
      font-weight: 500;
      color: var(--sfx-up-error, #b91c1c);
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
      /* Explicit, like .preview-panel: with overflow-y set, the x axis would
         otherwise compute to auto and any stray wide descendant would put a
         horizontal scrollbar under the whole details panel. */
      overflow-x: hidden;
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
       in the flex layout that were leaving content overflowing.

       Sizing is inset:0 and nothing else — deliberately no vw/vh
       measurements. A fixed box with all four insets at 0 is stretched to
       fill its containing block, which *is* the area the browser reserves
       for fixed content, whatever that currently measures. Adding
       height:100vh over-constrains the box, so bottom:0 is dropped and the
       height wins — and on mobile Safari 100vh is the toolbars-hidden
       height, which does not match the pinned area while the toolbars are
       up or while a momentum scroll is settling. That mismatch is what left
       a strip of the host page visible below the actions bar, and what let a
       pinch-zoom pan past the modal's edge onto the page underneath. The
       same applies to 100vw against a page with a visible scrollbar. */
    @media (max-width: 768px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: auto;
        max-width: none;
        height: auto;
        max-height: none;
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
        width: auto;
        max-width: none;
        height: auto;
        max-height: none;
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

      /* Clear / Add more move up off the actions bar into the summary row.
         The bar's own copy is switched off by the custom property below —
         and only when this row is really on screen, so the mobile preview
         takeover (which replaces the summary row entirely) still gets them
         from the bar. */
      .asset-count {
        padding: 8px 16px;
        min-height: 52px;
      }
      .asset-count-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }
      .content:has(.asset-count-actions) sfx-actions-bar {
        --sfx-up-bar-batch-display: none;
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
         shadow-DOM stacking + sibling modal-card was clipping it. Sized by
         insets only, for the same reason as .modal-card above. */
      .fs-overlay {
        position: fixed;
        inset: 0;
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
    /* Width-gated on purpose: below 769px the modal is already pinned
       edge-to-edge by the block above, and an unqualified height:96vh
       here would win on source order and shrink it back — leaving a strip of
       the host page showing on every phone held in landscape. */
    @media (max-height: 700px) and (min-width: 769px) {
      .modal-card {
        height: 96vh;
        max-height: 96vh;
      }
    }

    @media (max-height: 700px) {
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

    /* --- A phone held in landscape ---
       It is ~930px wide, so the ≤768px block above misses it entirely and it
       lands on the short-viewport rule instead: a 96vh card inside a padded
       backdrop. Those few dozen pixels of gap are exactly what a pinch-zoom
       pans onto, which is the whole problem the edge-to-edge sizing solves —
       so pin it here too. Capability-gated (touch-primary), not width-gated:
       a 930×420 *desktop* window is a deliberately small window and should
       keep the framed modal, while nothing but a phone is that shape with a
       finger as its only pointer. Sizing only — the spacing and the preview
       takeover of the ≤768px block stay off, since the width really is there
       to use. */
    @media (hover: none) and (pointer: coarse) and (max-height: 500px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: auto;
        max-width: none;
        height: auto;
        max-height: none;
        min-width: 0;
        min-height: 0;
        border-radius: 0;
        overflow: hidden;
      }
    }

    /* --- Discard-confirmation overlay (closing with queued/uploading work) --- */
    .up-confirm-overlay {
      position: fixed;
      inset: 0;
      z-index: 10500;
      background: rgba(15, 23, 42, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .up-confirm {
      background: #fff;
      border-radius: 12px;
      padding: 20px 22px;
      max-width: 360px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    }
    .up-confirm-text {
      margin: 0 0 16px;
      font-size: 14px;
      line-height: 1.5;
      color: var(--sfx-up-text, #1e293b);
    }
    .up-confirm-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .up-confirm-actions .btn-ghost,
    .up-confirm-actions .btn-primary {
      height: 36px;
      padding: 0 16px;
      border-radius: 6px;
      border: none;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
    .up-confirm-actions .btn-ghost {
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
    }
    .up-confirm-actions .btn-ghost:hover {
      background: var(--sfx-up-border-light, #f8faff);
      color: var(--sfx-up-text-secondary, #64748b);
    }
    .up-confirm-actions .btn-primary {
      background: linear-gradient(
        135deg,
        var(--sfx-up-primary, #2563eb),
        var(--sfx-up-primary-mid, #3b82f6)
      );
      color: var(--primary-foreground, #fff);
    }
    .up-confirm-actions .btn-primary:hover {
      background: linear-gradient(
        135deg,
        var(--sfx-up-primary-hover, #1d4ed8),
        var(--sfx-up-primary, #2563eb)
      );
    }

    ${Re}
  `,ee._FS_ZOOM_LEVELS=[1,2,3,4],ee._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),ee._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),ee);B([g({attribute:!1})],M.prototype,"config");B([P()],M.prototype,"_isOpen");B([P()],M.prototype,"_activeConnector");B([P()],M.prototype,"_showUrlDialog");B([P()],M.prototype,"_showCameraDialog");B([P()],M.prototype,"_showScreenCastDialog");B([P()],M.prototype,"_confirmDismissVisible");B([P()],M.prototype,"_similarSelectMode");B([P()],M.prototype,"_similarSelectedIds");B([P()],M.prototype,"_similarRunIds");B([P()],M.prototype,"_similarActiveIds");B([P()],M.prototype,"_similarResults");B([P()],M.prototype,"_previewPanelTab");B([P()],M.prototype,"_previewFileId");B([P()],M.prototype,"_previewDims");B([P()],M.prototype,"_focusPointPicking");B([P()],M.prototype,"_focusPointDraft");B([P()],M.prototype,"_focusPointFieldHovered");B([P()],M.prototype,"_focusPointFieldFocused");B([P()],M.prototype,"_fileInfoOpen");B([P()],M.prototype,"_splitPct");B([P()],M.prototype,"_showSettings");B([P()],M.prototype,"_setResize");B([P()],M.prototype,"_setMaxW");B([P()],M.prototype,"_setMaxH");B([P()],M.prototype,"_setTranscode");B([P()],M.prototype,"_setResolution");B([P()],M.prototype,"_setResolutionOpen");B([P()],M.prototype,"_setProtocol");B([P()],M.prototype,"_setResumable");B([P()],M.prototype,"_fullscreenPreviewUrl");B([P()],M.prototype,"_fullscreenVideoFile");B([P()],M.prototype,"_fsZoom");B([P()],M.prototype,"_bodyDragOver");B([P()],M.prototype,"_isMinimized");B([P()],M.prototype,"_isPillExpanded");B([P()],M.prototype,"_metadataSchema");B([P()],M.prototype,"_metadataTranslations");B([P()],M.prototype,"_metadataDependencies");B([P()],M.prototype,"_regionalFilters");B([P()],M.prototype,"_bulkMetadataOpen");B([P()],M.prototype,"_bulkMetadataInitialFieldKey");B([P()],M.prototype,"_bulkMetadataHadIssuesOnOpen");B([P()],M.prototype,"_isReviewing");B([P()],M.prototype,"_reviewFiles");B([P()],M.prototype,"_hasStoredReview");let Tm=M;var Am=Object.defineProperty,es=(r,e,t,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(e,t,s)||s);return s&&Am(e,t,s),s};const Rm="img.preview-image",ln=class ln extends G{constructor(){super(...arguments),this.picking=!1,this.showMarker=!0,this.value=null,this._position=null,this._dragging=!1,this._resizeObserver=null,this._observedImg=null,this._dragPointerId=null,this._updatePosition=()=>{this._setPosition(this._measurePosition())},this._onPointerDown=e=>{e.button!==0||this._dragging||(e.preventDefault(),this._dragging=!0,this._dragPointerId=e.pointerId,e.currentTarget.setPointerCapture(e.pointerId),this._pickAt(e.clientX,e.clientY))},this._onPointerMove=e=>{!this._dragging||e.pointerId!==this._dragPointerId||this._pickAt(e.clientX,e.clientY)},this._onPointerUp=e=>{e.pointerId===this._dragPointerId&&this._endDrag()}}get _img(){var e;return((e=this.parentElement)==null?void 0:e.querySelector(Rm))??null}_paintedRect(){const e=this._img;if(!e||!e.naturalWidth||!e.naturalHeight)return null;const t=e.getBoundingClientRect(),i=this.getBoundingClientRect();if(!t.width||!t.height)return null;const s=e.naturalWidth/e.naturalHeight,o=t.width/t.height,n=s>o?t.width:t.height*s,a=s>o?t.width/s:t.height;return{left:t.left-i.left+(t.width-n)/2,top:t.top-i.top+(t.height-a)/2,width:n,height:a}}_measurePosition(){var s,o;const e=_r((s=this.value)==null?void 0:s.horizontal),t=_r((o=this.value)==null?void 0:o.vertical);if(e===null||t===null)return null;const i=this._paintedRect();return i?{left:i.left+e/100*i.width,top:i.top+t/100*i.height}:null}_setPosition(e){const t=this._position;t!==e&&(t&&e&&t.left===e.left&&t.top===e.top||(this._position=e))}_pickAt(e,t){const i=this._paintedRect();if(!i)return;const s=this.getBoundingClientRect(),o=e-s.left,n=t-s.top,a=c=>Math.max(ao,Math.min(lo,c)),l=a(Math.round((o-i.left)/i.width*100)),d=a(Math.round((n-i.top)/i.height*100));this.dispatchEvent(new CustomEvent("focus-point-pick",{detail:{horizontal:l,vertical:d},bubbles:!0,composed:!0}))}_endDrag(){this._dragging=!1,this._dragPointerId=null}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._updatePosition),this._syncObservers()}firstUpdated(){this._syncObservers(),this._updatePosition()}updated(e){super.updated(e),(e.has("value")||this.showMarker&&e.get("showMarker")===!1)&&(this._syncObservers(),this._updatePosition())}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null,(t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=null,window.removeEventListener("resize",this._updatePosition),this._endDrag()}_syncObservers(){var t;typeof ResizeObserver<"u"&&!this._resizeObserver&&this.parentElement&&(this._resizeObserver=new ResizeObserver(this._updatePosition),this._resizeObserver.observe(this.parentElement));const e=this._img;e!==this._observedImg&&((t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=e,e==null||e.addEventListener("load",this._updatePosition))}render(){const e=this._position;return u`
      ${this.picking?u`<div
            class="capture ${this._dragging?"dragging":""}"
            role="presentation"
            @pointerdown=${this._onPointerDown}
            @pointermove=${this._onPointerMove}
            @pointerup=${this._onPointerUp}
            @pointercancel=${this._onPointerUp}
            @lostpointercapture=${this._onPointerUp}
          ></div>`:v}
      ${e&&this.showMarker?u`
            <div class="guide guide-v" ${te({left:`${e.left}px`})}></div>
            <div class="guide guide-h" ${te({top:`${e.top}px`})}></div>
            <div
              class="crosshair"
              ${te({left:`${e.left}px`,top:`${e.top}px`})}
              role="img"
              aria-label="Focus point"
            >
              ${Sl(2.5)}
            </div>
          `:v}
    `}};ln.styles=q`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
    }

    /* Click/drag capture layer — only present while picking. */
    .capture {
      position: absolute;
      inset: 0;
      pointer-events: auto;
      cursor: crosshair;
      touch-action: none;
    }
    /* Suppress text selection for the duration of a drag, the way the preview
       splitter and the marquee controller do — without touching the host page. */
    .capture.dragging {
      user-select: none;
      -webkit-user-select: none;
    }

    .guide {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
    }
    .guide-v {
      top: 0;
      bottom: 0;
      width: 2px;
      transform: translateX(-50%);
    }
    .guide-h {
      left: 0;
      right: 0;
      height: 2px;
      transform: translateY(-50%);
    }

    .crosshair {
      position: absolute;
      width: 24px;
      height: 24px;
      transform: translate(-50%, -50%);
      color: var(--sfx-up-primary, #2563eb);
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.6));
    }
    .crosshair svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;let bt=ln;es([g({type:Boolean})],bt.prototype,"picking");es([g({type:Boolean})],bt.prototype,"showMarker");es([g({attribute:!1})],bt.prototype,"value");es([P()],bt.prototype,"_position");es([P()],bt.prototype,"_dragging");const Ye=(r,e)=>{typeof customElements<"u"&&!customElements.get(r)&&customElements.define(r,e)};Ye("sfx-uploader",Tm);Ye("sfx-drop-zone",gm);Ye("sfx-import-divider",Yr);Ye("sfx-source-pills",ji);Ye("sfx-file-list",Z);Ye("sfx-file-item",se);Ye("sfx-actions-bar",me);Ye("sfx-url-dialog",Dt);Ye("sfx-camera-dialog",vt);Ye("sfx-screen-cast-dialog",st);Ye("sfx-focus-point-overlay",bt);const Om=[{pattern:"/",load:()=>J(()=>import("./landing-uiT3SUuZ.js"),[]).then(r=>r.default)},{pattern:"/docs/getting-started",load:()=>J(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(r=>r.default)},{pattern:"/docs/configuration",load:()=>J(()=>import("./configuration-tP-HBva9.js"),__vite__mapDeps([2,1])).then(r=>r.default)},{pattern:"/docs/api",load:()=>J(()=>import("./api-C3Pu2Ua4.js"),__vite__mapDeps([3,1])).then(r=>r.default)},{pattern:"/docs/theming",load:()=>J(()=>import("./theming-DHk87o6W.js"),__vite__mapDeps([4,1])).then(r=>r.default)},{pattern:"/docs/types",load:()=>J(()=>import("./types-HFUEcb6v.js"),__vite__mapDeps([5,1])).then(r=>r.default)},{pattern:"/examples/basic",load:()=>J(()=>import("./basic-Czixi-CV.js"),__vite__mapDeps([6,7])).then(r=>r.default)},{pattern:"/examples/auto-upload",load:()=>J(()=>import("./auto-upload-cw2eQwb8.js"),__vite__mapDeps([8,7])).then(r=>r.default)},{pattern:"/examples/restrictions",load:()=>J(()=>import("./restrictions-BNQug3LD.js"),__vite__mapDeps([9,7,10])).then(r=>r.default)},{pattern:"/examples/target-folder",load:()=>J(()=>import("./target-folder-qBCYbwxT.js"),__vite__mapDeps([11,7])).then(r=>r.default)},{pattern:"/examples/concurrency",load:()=>J(()=>import("./concurrency-g-HUQx-k.js"),__vite__mapDeps([12,7,10])).then(r=>r.default)},{pattern:"/examples/events",load:()=>J(()=>import("./events-BARSbsoM.js"),__vite__mapDeps([13,7])).then(r=>r.default)},{pattern:"/examples/modal",load:()=>J(()=>import("./modal-D_mudUP4.js"),__vite__mapDeps([14,7])).then(r=>r.default)},{pattern:"/examples/inline",load:()=>J(()=>import("./inline-B8ozEkZS.js"),__vite__mapDeps([15,7])).then(r=>r.default)},{pattern:"/examples/sources-layout",load:()=>J(()=>import("./sources-layout-XUoT0Vqu.js"),__vite__mapDeps([16,7])).then(r=>r.default)},{pattern:"/examples/core-sources",load:()=>J(()=>import("./core-sources-DjQtaW7a.js"),__vite__mapDeps([17,7])).then(r=>r.default)},{pattern:"/examples/custom-source",load:()=>J(()=>import("./custom-source-CutGEdUr.js"),__vite__mapDeps([18,7])).then(r=>r.default)},{pattern:"/examples/header-button",load:()=>J(()=>import("./header-button-DmXRO8e5.js"),__vite__mapDeps([19,7])).then(r=>r.default)},{pattern:"/examples/minimize-to-background",load:()=>J(()=>import("./minimize-to-background-Bsth6jjr.js"),__vite__mapDeps([20,7])).then(r=>r.default)},{pattern:"/examples/resumable-upload",load:()=>J(()=>import("./resumable-upload-C_SoOicP.js"),__vite__mapDeps([21,7,10])).then(r=>r.default)},{pattern:"/examples/react-wrapper",load:()=>J(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([22,1])).then(r=>r.default)},{pattern:"/examples/metadata",load:()=>J(()=>import("./metadata-oN-SrTre.js"),__vite__mapDeps([23,7])).then(r=>r.default)},{pattern:"/examples/full-screen",load:()=>J(()=>import("./full-screen-DXE9IkCH.js"),[]).then(r=>r.default)},{pattern:"/examples/last-upload-review",load:()=>J(()=>import("./last-upload-review-CDWS6J1C.js"),[]).then(r=>r.default)},{pattern:"/examples/similar-check",load:()=>J(()=>import("./similar-check-a15h9MC8.js"),__vite__mapDeps([24,7,10])).then(r=>r.default)},{pattern:"/examples/upload-settings",load:()=>J(()=>import("./upload-settings-BiyUSt1y.js"),__vite__mapDeps([25,7,10])).then(r=>r.default)}];let Yt=null,qa=0;function Im(r){const e=document.getElementById("content"),t=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),s=document.getElementById("sidebar-examples"),o=document.querySelectorAll(".topbar-nav-link");async function n(){var k,S;const a=location.hash.slice(1)||"/",l=!a.startsWith("/");if(l&&Yt){(k=document.getElementById(a))==null||k.scrollIntoView({behavior:"smooth"});return}const d=l?"/":a,c=++qa;Yt!=null&&Yt.destroy&&Yt.destroy();const p=Om.find(y=>y.pattern===d);if(!p){location.hash="#/";return}const h=d.startsWith("/docs/"),f=d.startsWith("/examples/"),x=h||f,m=d==="/";t.classList.toggle("hidden",!x),document.body.classList.toggle("has-sidebar",x),document.body.classList.toggle("is-home",m),i.classList.toggle("hidden",!h),s.classList.toggle("hidden",!f),t.querySelectorAll(".sidebar-link").forEach(y=>{y.classList.toggle("active",y.getAttribute("data-route")===d)});const C=h?"docs":f?"examples":"home";o.forEach(y=>{y.classList.toggle("active",y.getAttribute("data-section")===C)}),t.classList.remove("mobile-open"),l||window.scrollTo(0,0);const E=await p.load();c===qa&&(Yt=E,e.innerHTML=E.render(),E.init&&E.init(r),l&&((S=document.getElementById(a))==null||S.scrollIntoView({behavior:"smooth"})))}window.addEventListener("hashchange",n),n()}const md="sfx-uploader-demo-auth",Ha={container:"",securityTemplateId:""};function vd(){try{const r=localStorage.getItem(md);if(r)return{...Ha,...JSON.parse(r)}}catch{}return{...Ha}}function Fm(r){localStorage.setItem(md,JSON.stringify(r))}function Qm(r={}){const{container:e,securityTemplateId:t}=vd();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","box","onedrive"]},...r}}function Lm(){const r=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),i=document.getElementById("auth-sec-template"),s=document.getElementById("auth-save"),o=vd();t.value=o.container,i.value=o.securityTemplateId,r.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),s.addEventListener("click",()=>{Fm({container:t.value.trim(),securityTemplateId:i.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!r.contains(n.target)&&e.classList.add("hidden")})}Lm();const Um=document.getElementById("uploader");Im(Um);var Ka;(Ka=document.getElementById("sidebar-toggle"))==null||Ka.addEventListener("click",()=>{var r;(r=document.getElementById("sidebar"))==null||r.classList.toggle("mobile-open")});export{Bu as $,v as A,$u as B,dr as C,Kn as D,Su as E,Xe as F,ku as G,vu as H,We as I,np as J,Gn as K,hu as L,lo as M,po as N,Km as O,It as P,Yn as Q,hs as R,gt as S,yo as T,jm as U,Pu as V,Ri as W,Vp as X,Hm as Y,kl as Z,Nu as _,q as a,Vm as a0,_r as a1,Sl as a2,Qc as a3,so as a4,op as a5,ro as a6,zu as a7,Mu as a8,uo as a9,Wn as aA,vo as aB,Vi as aC,Cl as aD,Mt as aE,Ym as aF,ju as aG,bl as aH,$r as aI,At as aJ,ei as aK,Cs as aL,_l as aM,$l as aN,fu as aO,T as aP,xo as aQ,Fl as aR,yl as aS,Uu as aT,Lu as aU,Qu as aa,Wu as ab,Fu as ac,Np as ad,Ds as ae,qe as af,Us as ag,Oi as ah,ho as ai,no as aj,St as ak,go as al,kr as am,Or as an,Cu as ao,qi as ap,yu as aq,qm as ar,Hu as as,Gu as at,Ou as au,jp as av,vl as aw,co as ax,Jn as ay,wr as az,Qm as b,te as c,Et as d,u as e,Ue as f,Og as g,Gm as h,G as i,_o as j,Xm as k,Wm as l,Wp as m,g as n,Jp as o,Nm as p,Yu as q,P as r,Jm as s,Re as t,Ku as u,_u as v,ao as w,Ot as x,xl as y,wu as z};
