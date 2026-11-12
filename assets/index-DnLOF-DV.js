const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-tP-HBva9.js","assets/api-C3Pu2Ua4.js","assets/theming-DHk87o6W.js","assets/types-HFUEcb6v.js","assets/basic-CHbDE8an.js","assets/code-block-C_3oxnLY.js","assets/auto-upload-B8-FqnOG.js","assets/restrictions-CedmqTvf.js","assets/custom-select-mLCaw8r4.js","assets/target-folder-BRj-ceIX.js","assets/concurrency-DYJm_Ii8.js","assets/events-uM3IOwgW.js","assets/modal-lLk1qbKx.js","assets/inline-CaVubqpQ.js","assets/sources-layout-DsM3jxEW.js","assets/core-sources-CNFsnHGg.js","assets/custom-source-DAlojgtc.js","assets/header-button-DvnbaCUZ.js","assets/minimize-to-background-DYYakiO9.js","assets/resumable-upload-CPtWbOEJ.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-BfOiGYMg.js","assets/similar-check-BB-v22bz.js","assets/upload-settings-BJIIp7Ld.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const Cd="modulepreload",Ed=function(s){return"/uploader/"+s},Wn={},Z=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let n=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=n(t.map(c=>{if(c=Ed(c),c in Wn)return;Wn[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Cd,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((f,b)=>{h.addEventListener("load",f),h.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return o.then(n=>{for(const a of n||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=globalThis,Cr=Cs.ShadowRoot&&(Cs.ShadyCSS===void 0||Cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Er=Symbol(),Jn=new WeakMap;let Hl=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Cr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Jn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Jn.set(t,e))}return e}toString(){return this.cssText}};const Pd=s=>new Hl(typeof s=="string"?s:s+"",void 0,Er),M=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new Hl(t,s,Er)},Ad=(s,e)=>{if(Cr)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=Cs.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)}},Xn=Cr?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Pd(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Td,defineProperty:Rd,getOwnPropertyDescriptor:Od,getOwnPropertyNames:Id,getOwnPropertySymbols:Fd,getPrototypeOf:Ld}=Object,gt=globalThis,Zn=gt.trustedTypes,Ud=Zn?Zn.emptyScript:"",wo=gt.reactiveElementPolyfillSupport,Ui=(s,e)=>s,Fs={toAttribute(s,e){switch(e){case Boolean:s=s?Ud:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Pr=(s,e)=>!Td(s,e),Qn={attribute:!0,type:String,converter:Fs,reflect:!1,useDefault:!1,hasChanged:Pr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gt.litPropertyMetadata??(gt.litPropertyMetadata=new WeakMap);let ri=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Rd(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=Od(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){const a=o==null?void 0:o.call(this);r==null||r.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Qn}static _$Ei(){if(this.hasOwnProperty(Ui("elementProperties")))return;const e=Ld(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ui("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ui("properties"))){const t=this.properties,i=[...Id(t),...Fd(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Xn(o))}else e!==void 0&&t.push(Xn(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ad(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Fs).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){var r,n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:Fs;this._$Em=o;const c=l.fromAttribute(t,a.type);this[o]=c??((n=this._$Ej)==null?void 0:n.get(o))??c,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){var n;if(e!==void 0){const a=this.constructor;if(o===!1&&(r=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Pr)(r,t)||i.useDefault&&i.reflect&&r===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,n]of o){const{wrapped:a}=n,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ri.elementStyles=[],ri.shadowRootOptions={mode:"open"},ri[Ui("elementProperties")]=new Map,ri[Ui("finalized")]=new Map,wo==null||wo({ReactiveElement:ri}),(gt.reactiveElementVersions??(gt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=globalThis,ea=s=>s,Ls=Di.trustedTypes,ta=Ls?Ls.createPolicy("lit-html",{createHTML:s=>s}):void 0,ql="$lit$",ht=`lit$${Math.random().toFixed(9).slice(2)}$`,Vl="?"+ht,Dd=`<${Vl}>`,Mt=document,Bi=()=>Mt.createComment(""),ji=s=>s===null||typeof s!="object"&&typeof s!="function",Ar=Array.isArray,zd=s=>Ar(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",ko=`[ 	
\f\r]`,Ci=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ia=/-->/g,sa=/>/g,Et=RegExp(`>|${ko}(?:([^\\s"'>=/]+)(${ko}*=${ko}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oa=/'/g,ra=/"/g,Kl=/^(?:script|style|textarea|title)$/i,Yl=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=Yl(1),ee=Yl(2),je=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),na=new WeakMap,It=Mt.createTreeWalker(Mt,129);function Gl(s,e){if(!Ar(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ta!==void 0?ta.createHTML(e):e}const Md=(s,e)=>{const t=s.length-1,i=[];let o,r=e===2?"<svg>":e===3?"<math>":"",n=Ci;for(let a=0;a<t;a++){const l=s[a];let c,d,p=-1,h=0;for(;h<l.length&&(n.lastIndex=h,d=n.exec(l),d!==null);)h=n.lastIndex,n===Ci?d[1]==="!--"?n=ia:d[1]!==void 0?n=sa:d[2]!==void 0?(Kl.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=Et):d[3]!==void 0&&(n=Et):n===Et?d[0]===">"?(n=o??Ci,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?Et:d[3]==='"'?ra:oa):n===ra||n===oa?n=Et:n===ia||n===sa?n=Ci:(n=Et,o=void 0);const f=n===Et&&s[a+1].startsWith("/>")?" ":"";r+=n===Ci?l+Dd:p>=0?(i.push(c),l.slice(0,p)+ql+l.slice(p)+ht+f):l+ht+(p===-2?a:f)}return[Gl(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ni{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[c,d]=Md(e,t);if(this.el=Ni.createElement(c,i),It.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=It.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(ql)){const h=d[n++],f=o.getAttribute(p).split(ht),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:b[2],strings:f,ctor:b[1]==="."?jd:b[1]==="?"?Nd:b[1]==="@"?Hd:Qs}),o.removeAttribute(p)}else p.startsWith(ht)&&(l.push({type:6,index:r}),o.removeAttribute(p));if(Kl.test(o.tagName)){const p=o.textContent.split(ht),h=p.length-1;if(h>0){o.textContent=Ls?Ls.emptyScript:"";for(let f=0;f<h;f++)o.append(p[f],Bi()),It.nextNode(),l.push({type:2,index:++r});o.append(p[h],Bi())}}}else if(o.nodeType===8)if(o.data===Vl)l.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(ht,p+1))!==-1;)l.push({type:7,index:r}),p+=ht.length-1}r++}}static createElement(e,t){const i=Mt.createElement("template");return i.innerHTML=e,i}}function hi(s,e,t=s,i){var n,a;if(e===je)return e;let o=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const r=ji(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(s),o._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=hi(s,o._$AS(s,e.values),o,i)),e}class Bd{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??Mt).importNode(t,!0);It.currentNode=o;let r=It.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new xi(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new qd(r,this,e)),this._$AV.push(c),l=i[++a]}n!==(l==null?void 0:l.index)&&(r=It.nextNode(),n++)}return It.currentNode=Mt,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class xi{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=hi(this,e,t),ji(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==je&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ji(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ni.createElement(Gl(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{const n=new Bd(o,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=na.get(e.strings);return t===void 0&&na.set(e.strings,t=new Ni(e)),t}k(e){Ar(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new xi(this.O(Bi()),this.O(Bi()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const o=ea(e).nextSibling;ea(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Qs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(r===void 0)e=hi(this,e,t,0),n=!ji(e)||e!==this._$AH&&e!==je,n&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=hi(this,a[i+l],t,l),c===je&&(c=this._$AH[l]),n||(n=!ji(c)||c!==this._$AH[l]),c===v?e=v:e!==v&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}n&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class jd extends Qs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Nd extends Qs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Hd extends Qs{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=hi(this,e,t,0)??v)===je)return;const i=this._$AH,o=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==v&&(i===v||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qd{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){hi(this,e)}}const Vd={I:xi},$o=Di.litHtmlPolyfillSupport;$o==null||$o(Ni,xi),(Di.litHtmlVersions??(Di.litHtmlVersions=[])).push("3.3.3");const ot=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new xi(e.insertBefore(Bi(),r),r,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=globalThis;let Y=class extends ri{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ot(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return je}};var jl;Y._$litElement$=!0,Y.finalized=!0,(jl=Lt.litElementHydrateSupport)==null||jl.call(Lt,{LitElement:Y});const So=Lt.litElementPolyfillSupport;So==null||So({LitElement:Y});(Lt.litElementVersions??(Lt.litElementVersions=[])).push("4.2.2");const Co=(s,e)=>s.replace(/\{\{(\w+)\}\}/g,(t,i)=>String(e[i]??"")),Ne=(s,e,t)=>{if(typeof e=="string")return Co(e,t??{});if(typeof e=="object"&&e!==null){const i=e,o=i.count;if(o!==void 0){const r=String((o===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??s);return Co(r,i)}return Co(String(i.defaultValue??s),i)}return s},N=s=>typeof s=="string",Ei=()=>{let s,e;const t=new Promise((i,o)=>{s=i,e=o});return t.resolve=s,t.reject=e,t},aa=s=>s==null?"":""+s,Kd=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Yd=/###/g,la=s=>s&&s.indexOf("###")>-1?s.replace(Yd,"."):s,ca=s=>!s||N(s),zi=(s,e,t)=>{const i=N(e)?e.split("."):e;let o=0;for(;o<i.length-1;){if(ca(s))return{};const r=la(i[o]);!s[r]&&t&&(s[r]=new t),Object.prototype.hasOwnProperty.call(s,r)?s=s[r]:s={},++o}return ca(s)?{}:{obj:s,k:la(i[o])}},da=(s,e,t)=>{const{obj:i,k:o}=zi(s,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let r=e[e.length-1],n=e.slice(0,e.length-1),a=zi(s,n,Object);for(;a.obj===void 0&&n.length;)r=`${n[n.length-1]}.${r}`,n=n.slice(0,n.length-1),a=zi(s,n,Object),a&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=t},Gd=(s,e,t,i)=>{const{obj:o,k:r}=zi(s,e,Object);o[r]=o[r]||[],o[r].push(t)},Us=(s,e)=>{const{obj:t,k:i}=zi(s,e);if(t)return t[i]},Wd=(s,e,t)=>{const i=Us(s,t);return i!==void 0?i:Us(e,t)},Wl=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?N(s[i])||s[i]instanceof String||N(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):Wl(s[i],e[i],t):s[i]=e[i]);return s},Jt=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Jd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Xd=s=>N(s)?s.replace(/[&<>"'\/]/g,e=>Jd[e]):s;class Zd{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Qd=[" ",",","?","!",";"],eu=new Zd(20),tu=(s,e,t)=>{e=e||"",t=t||"";const i=Qd.filter(n=>e.indexOf(n)<0&&t.indexOf(n)<0);if(i.length===0)return!0;const o=eu.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let r=!o.test(s);if(!r){const n=s.indexOf(t);n>0&&!o.test(s.substring(0,n))&&(r=!0)}return r},Ho=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const i=e.split(t);let o=s;for(let r=0;r<i.length;){if(!o||typeof o!="object")return;let n,a="";for(let l=r;l<i.length;++l)if(l!==r&&(a+=t),a+=i[l],n=o[a],n!==void 0){if(["string","number","boolean"].indexOf(typeof n)>-1&&l<i.length-1)continue;r+=l-r+1;break}o=n}return o},Ds=s=>s&&s.replace("_","-"),iu={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};class zs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||iu,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(N(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new zs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new zs(this.logger,e)}}var tt=new zs;class eo{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(n=>{let[a,l]=n;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(n=>{let[a,l]=n;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class ua extends eo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,n=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):N(i)&&r?a.push(...i.split(r)):a.push(i)));const l=Us(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!N(i)?l:Ho(this.data&&this.data[e]&&this.data[e][t],i,r)}addResource(e,t,i,o){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const n=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.indexOf(".")>-1&&(a=e.split("."),o=t,t=a[1]),this.addNamespaces(t),da(this.data,a,o),r.silent||this.emit("added",e,t,i,o)}addResources(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(N(i[r])||Array.isArray(i[r]))&&this.addResource(e,t,r,i[r],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,r){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),o=i,i=t,t=a[1]),this.addNamespaces(t);let l=Us(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?Wl(l,i,r):l={...l,...i},da(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var Jl={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,o){return s.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,t,i,o))}),e}};const pa={};class Ms extends eo{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Kd(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=tt.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return i&&i.res!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let r=t.ns||this.options.defaultNS||[];const n=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!tu(e,i,o);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:N(r)?[r]:r};const c=e.split(i);(i!==o||i===o&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(o)}return{key:e,namespaces:N(r)?[r]:r}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const o=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:n,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(d){const y=t.nsSeparator||this.options.nsSeparator;return o?{res:`${l}${y}${n}`,usedKey:n,exactUsedKey:n,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${y}${n}`}return o?{res:n,usedKey:n,exactUsedKey:n,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:n}const p=this.resolve(e,t);let h=p&&p.res;const f=p&&p.usedKey||n,b=p&&p.exactUsedKey||n,m=Object.prototype.toString.apply(h),C=["[object Number]","[object Function]","[object RegExp]"],A=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,$=!this.i18nFormat||this.i18nFormat.handleAsObject,E=!N(h)&&typeof h!="boolean"&&typeof h!="number";if($&&h&&E&&C.indexOf(m)<0&&!(N(A)&&Array.isArray(h))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const y=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...t,ns:a}):`key '${n} (${this.language})' returned an object instead of string.`;return o?(p.res=y,p.usedParams=this.getUsedParamsDetails(t),p):y}if(r){const y=Array.isArray(h),w=y?[]:{},O=y?b:f;for(const T in h)if(Object.prototype.hasOwnProperty.call(h,T)){const U=`${O}${r}${T}`;w[T]=this.translate(U,{...t,joinArrays:!1,ns:a}),w[T]===U&&(w[T]=h[T])}h=w}}else if($&&N(A)&&Array.isArray(h))h=h.join(A),h&&(h=this.extendTranslation(h,e,t,i));else{let y=!1,w=!1;const O=t.count!==void 0&&!N(t.count),T=Ms.hasDefaultValue(t),U=O?this.pluralResolver.getSuffix(c,t.count,t):"",D=t.ordinal&&O?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",q=O&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),W=q&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${U}`]||t[`defaultValue${D}`]||t.defaultValue;!this.isValidLookup(h)&&T&&(y=!0,h=W),this.isValidLookup(h)||(w=!0,h=n);const z=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,le=T&&W!==h&&this.options.updateMissing;if(w||y||le){if(this.logger.log(le?"updateKey":"missingKey",c,l,n,le?W:h),r){const _=this.resolve(n,{...t,keySeparator:!1});_&&_.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let K=[];const S=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&S&&S[0])for(let _=0;_<S.length;_++)K.push(S[_]);else this.options.saveMissingTo==="all"?K=this.languageUtils.toResolveHierarchy(t.lng||this.language):K.push(t.lng||this.language);const x=(_,R,F)=>{const I=T&&F!==h?F:z;this.options.missingKeyHandler?this.options.missingKeyHandler(_,l,R,I,le,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(_,l,R,I,le,t),this.emit("missingKey",_,l,R,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?K.forEach(_=>{const R=this.pluralResolver.getSuffixes(_,t);q&&t[`defaultValue${this.options.pluralSeparator}zero`]&&R.indexOf(`${this.options.pluralSeparator}zero`)<0&&R.push(`${this.options.pluralSeparator}zero`),R.forEach(F=>{x([_],n+F,t[`defaultValue${F}`]||W)})}):x(K,n,W))}h=this.extendTranslation(h,e,t,p,i),w&&h===n&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${n}`),(w||y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${n}`:n,y?h:void 0):h=this.options.parseMissingKeyHandler(h))}return o?(p.res=h,p.usedParams=this.getUsedParamsDetails(t),p):h}extendTranslation(e,t,i,o,r){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=N(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(c){const h=e.match(this.interpolator.nestingRegexp);d=h&&h.length}let p=i.replace&&!N(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(p={...this.options.interpolation.defaultVariables,...p}),e=this.interpolator.interpolate(e,p,i.lng||this.language||o.usedLng,i),c){const h=e.match(this.interpolator.nestingRegexp),f=h&&h.length;d<f&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,f=new Array(h),b=0;b<h;b++)f[b]=arguments[b];return r&&r[0]===f[0]&&!i.context?(n.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`),null):n.translate(...f,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=N(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Jl.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,o,r,n,a;return N(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),d=c.key;o=d;let p=c.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const h=t.count!==void 0&&!N(t.count),f=h&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),b=t.context!==void 0&&(N(t.context)||typeof t.context=="number")&&t.context!=="",m=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(C=>{this.isValidLookup(i)||(a=C,!pa[`${m[0]}-${C}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(pa[`${m[0]}-${C}`]=!0,this.logger.warn(`key "${o}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),m.forEach(A=>{if(this.isValidLookup(i))return;n=A;const $=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys($,d,A,C,t);else{let y;h&&(y=this.pluralResolver.getSuffix(A,t.count,t));const w=`${this.options.pluralSeparator}zero`,O=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&($.push(d+y),t.ordinal&&y.indexOf(O)===0&&$.push(d+y.replace(O,this.options.pluralSeparator)),f&&$.push(d+w)),b){const T=`${d}${this.options.contextSeparator}${t.context}`;$.push(T),h&&($.push(T+y),t.ordinal&&y.indexOf(O)===0&&$.push(T+y.replace(O,this.options.pluralSeparator)),f&&$.push(T+w))}}let E;for(;E=$.pop();)this.isValidLookup(i)||(r=E,i=this.getResource(A,C,E,t))}))})}),{res:i,usedKey:o,exactUsedKey:r,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!N(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const r of t)delete o[r]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}const Eo=s=>s.charAt(0).toUpperCase()+s.slice(1);class ha{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=tt.create("languageUtils")}getScriptPartFromCode(e){if(e=Ds(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Ds(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(N(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let o=Intl.getCanonicalLocales(e)[0];if(o&&this.options.lowerCaseLng&&(o=o.toLowerCase()),o)return o}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(o=>o.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Eo(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Eo(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=Eo(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getLanguagePartFromCode(i);if(this.isSupportedCode(o))return t=o;t=this.options.supportedLngs.find(r=>{if(r===o)return r;if(!(r.indexOf("-")<0&&o.indexOf("-")<0)&&(r.indexOf("-")>0&&o.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===o||r.indexOf(o)===0&&o.length>1))return r})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),N(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),o=[],r=n=>{n&&(this.isSupportedCode(n)?o.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return N(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):N(e)&&r(this.formatLanguageCode(e)),i.forEach(n=>{o.indexOf(n)<0&&r(this.formatLanguageCode(n))}),o}}let su=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ou={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const ru=["v1","v2","v3"],nu=["v4"],fa={zero:0,one:1,two:2,few:3,many:4,other:5},au=()=>{const s={};return su.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:ou[e.fc]}})}),s};class lu{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=tt.create("pluralResolver"),(!this.options.compatibilityJSON||nu.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=au(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=Ds(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:o});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let n;try{n=new Intl.PluralRules(i,{type:o})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[r]=n,n}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((o,r)=>fa[o]-fa[r]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):i.numbers.map(o=>this.getSuffix(e,o,t)):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(e,i);return o?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:this.getSuffixRetroCompatible(o,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let o=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const r=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!ru.includes(this.options.compatibilityJSON)}}const ga=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Wd(s,e,t);return!r&&o&&N(t)&&(r=Ho(s,t,i),r===void 0&&(r=Ho(e,t,i))),r},Po=s=>s.replace(/\$/g,"$$$$");class cu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=tt.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:r,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:p,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:b,nestingSuffixEscaped:m,nestingOptionsSeparator:C,maxReplaces:A,alwaysFormat:$}=e.interpolation;this.escape=t!==void 0?t:Xd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=r?Jt(r):n||"{{",this.suffix=a?Jt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=h?Jt(h):f||Jt("$t("),this.nestingSuffix=b?Jt(b):m||Jt(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=A||1e3,this.alwaysFormat=$!==void 0?$:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t&&t.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,o){let r,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const A=ga(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(A,void 0,i,{...o,...t,interpolationkey:f}):A}const b=f.split(this.formatSeparator),m=b.shift().trim(),C=b.join(this.formatSeparator).trim();return this.format(ga(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure),C,i,{...o,...t,interpolationkey:m})};this.resetRegExp();const d=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,p=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Po(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Po(this.escape(f)):Po(f)}].forEach(f=>{for(a=0;r=f.regex.exec(e);){const b=r[1].trim();if(n=c(b),n===void 0)if(typeof d=="function"){const C=d(e,r,o);n=N(C)?C:""}else if(o&&Object.prototype.hasOwnProperty.call(o,b))n="";else if(p){n=r[0];continue}else this.logger.warn(`missed to pass in variable ${b} for interpolating ${e}`),n="";else!N(n)&&!this.useRawValueToEscape&&(n=aa(n));const m=f.safeValue(n);if(e=e.replace(r[0],m),p?(f.regex.lastIndex+=n.length,f.regex.lastIndex-=r[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,r,n;const a=(l,c)=>{const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const p=l.split(new RegExp(`${d}[ ]*{`));let h=`{${p[1]}`;l=p[0],h=this.interpolate(h,n);const f=h.match(/'/g),b=h.match(/"/g);(f&&f.length%2===0&&!b||b.length%2!==0)&&(h=h.replace(/'/g,'"'));try{n=JSON.parse(h),c&&(n={...c,...n})}catch(m){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,m),`${l}${d}${h}`}return n.defaultValue&&n.defaultValue.indexOf(this.prefix)>-1&&delete n.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!N(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;let c=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const d=o[1].split(this.formatSeparator).map(p=>p.trim());o[1]=d.shift(),l=d,c=!0}if(r=t(a.call(this,o[1].trim(),n),n),r&&o[0]===e&&!N(r))return r;N(r)||(r=aa(r)),r||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),r=""),c&&(r=l.reduce((d,p)=>this.format(d,p,i.lng,{...i,interpolationkey:o[1].trim()}),r.trim())),e=e.replace(o[0],r),this.regexp.lastIndex=0}return e}}const du=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const o=i[1].substring(0,i[1].length-1);e==="currency"&&o.indexOf(":")<0?t.currency||(t.currency=o.trim()):e==="relativetime"&&o.indexOf(":")<0?t.range||(t.range=o.trim()):o.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();t[d]||(t[d]=c),c==="false"&&(t[d]=!1),c==="true"&&(t[d]=!0),isNaN(c)||(t[d]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Xt=s=>{const e={};return(t,i,o)=>{let r=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(r={...r,[o.interpolationkey]:void 0});const n=i+JSON.stringify(r);let a=e[n];return a||(a=s(Ds(i),o),e[n]=a),a(t)}};class uu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=tt.create("formatter"),this.options=e,this.formats={number:Xt((t,i)=>{const o=new Intl.NumberFormat(t,{...i});return r=>o.format(r)}),currency:Xt((t,i)=>{const o=new Intl.NumberFormat(t,{...i,style:"currency"});return r=>o.format(r)}),datetime:Xt((t,i)=>{const o=new Intl.DateTimeFormat(t,{...i});return r=>o.format(r)}),relativetime:Xt((t,i)=>{const o=new Intl.RelativeTimeFormat(t,{...i});return r=>o.format(r,i.range||"day")}),list:Xt((t,i)=>{const o=new Intl.ListFormat(t,{...i});return r=>o.format(r)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Xt(t)}format(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=t.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(a=>a.indexOf(")")>-1)){const a=r.findIndex(l=>l.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,a)].join(this.formatSeparator)}return r.reduce((a,l)=>{const{formatName:c,formatOptions:d}=du(l);if(this.formats[c]){let p=a;try{const h=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},f=h.locale||h.lng||o.locale||o.lng||i;p=this.formats[c](a,f,{...d,...o,...h})}catch(h){this.logger.warn(h)}return p}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const pu=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class hu extends eo{constructor(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=tt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,o.backend,o)}queueLoad(e,t,i,o){const r={},n={},a={},l={};return e.forEach(c=>{let d=!0;t.forEach(p=>{const h=`${c}|${p}`;!i.reload&&this.store.hasResourceBundle(c,p)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?n[h]===void 0&&(n[h]=!0):(this.state[h]=1,d=!1,n[h]===void 0&&(n[h]=!0),r[h]===void 0&&(r[h]=!0),l[p]===void 0&&(l[p]=!0)))}),d||(a[c]=!0)}),(Object.keys(r).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(r),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const o=e.split("|"),r=o[0],n=o[1];t&&this.emit("failedLoading",r,n,t),!t&&i&&this.store.addResourceBundle(r,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Gd(l.loaded,[r],n),pu(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(p=>{a[c][p]===void 0&&(a[c][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,n=arguments.length>5?arguments[5]:void 0;if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:r,callback:n});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(c&&d&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,o+1,r*2,n)},r);return}n(c,d)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();N(e)&&(e=this.languageUtils.toResolveHierarchy(e)),N(t)&&(t=[t]);const r=this.queueLoad(e,t,i,o);if(!r.toLoad.length)return r.pending.length||o(),null;r.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),o=i[0],r=i[1];this.read(o,r,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${r} for language ${o} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${r} for language ${o}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,o,r){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...n,isUpdate:r},c=this.backend.create.bind(this.backend);if(c.length<6)try{let d;c.length===5?d=c(e,t,i,o,l):d=c(e,t,i,o),d&&typeof d.then=="function"?d.then(p=>a(null,p)).catch(a):a(null,d)}catch(d){a(d)}else c(e,t,i,o,a,l)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}const ma=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),N(s[1])&&(e.defaultValue=s[1]),N(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),va=s=>(N(s.ns)&&(s.ns=[s.ns]),N(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),N(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),ms=()=>{},fu=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Hi extends eo{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=va(e),this.services={},this.logger=tt,this.modules={external:[]},fu(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(N(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const o=ma();this.options={...o,...this.options,...va(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const r=d=>d?typeof d=="function"?new d:d:null;if(!this.options.isClone){this.modules.logger?tt.init(r(this.modules.logger),this.options):tt.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=uu);const p=new ha(this.options);this.store=new ua(this.options.resources,this.options);const h=this.services;h.logger=tt,h.resourceStore=this.store,h.languageUtils=p,h.pluralResolver=new lu(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(h.formatter=r(d),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new cu(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new hu(r(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var b=arguments.length,m=new Array(b>1?b-1:0),C=1;C<b;C++)m[C-1]=arguments[C];e.emit(f,...m)}),this.modules.languageDetector&&(h.languageDetector=r(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=r(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Ms(this.services,this.options),this.translator.on("*",function(f){for(var b=arguments.length,m=new Array(b>1?b-1:0),C=1;C<b;C++)m[C-1]=arguments[C];e.emit(f,...m)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ms),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return e.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return e.store[d](...arguments),e}});const l=Ei(),c=()=>{const d=(p,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(p,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ms;const o=N(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],n=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&r.indexOf(c)<0&&r.push(c)})};o?n(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>n(l)),this.options.preload&&this.options.preload.forEach(a=>n(a)),this.services.backendConnector.load(r,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,t,i){const o=Ei();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ms),this.services.backendConnector.reload(e,t,r=>{o.resolve(),i(r)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Jl.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const o=Ei();this.emit("languageChanging",e);const r=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},n=(l,c)=>{c?(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,o.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=N(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||r(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,d=>{n(d,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),o}getFixedT(e,t,i){var o=this;const r=function(n,a){let l;if(typeof a!="object"){for(var c=arguments.length,d=new Array(c>2?c-2:0),p=2;p<c;p++)d[p-2]=arguments[p];l=o.options.overloadTranslationOptionHandler([n,a].concat(d))}else l={...a};l.lng=l.lng||r.lng,l.lngs=l.lngs||r.lngs,l.ns=l.ns||r.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||r.keyPrefix);const h=o.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(n)?f=n.map(b=>`${l.keyPrefix}${h}${b}`):f=l.keyPrefix?`${l.keyPrefix}${h}${n}`:n,o.t(f,l)};return N(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!o||n(r,e)))}loadNamespaces(e,t){const i=Ei();return this.options.ns?(N(e)&&(e=[e]),e.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Ei();N(e)&&(e=[e]);const o=this.options.preload||[],r=e.filter(n=>o.indexOf(n)<0&&this.services.languageUtils.isSupportedCode(n));return r.length?(this.options.preload=o.concat(r),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new ha(ma());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Hi(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ms;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},r=new Hi(o);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(a=>{r[a]=this[a]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new ua(this.store.data,o),r.services.resourceStore=r.store),r.translator=new Ms(r.services,o),r.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];r.emit(a,...c)}),r.init(o,t),r.translator.options=o,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const $e=Hi.createInstance();$e.createInstance=Hi.createInstance;$e.createInstance;$e.dir;$e.init;$e.loadResources;$e.reloadResources;$e.use;$e.changeLanguage;$e.getFixedT;$e.t;$e.exists;$e.setDefaultNamespace;$e.hasLoadedNamespace;$e.loadNamespaces;$e.loadLanguages;const Xl=["__proto__","constructor","prototype"];function Zl(s){return!(typeof s!="string"||s.length===0||s.length>128||Xl.indexOf(s)>-1||s.indexOf("..")>-1||s.indexOf("\\")>-1||/[?#%\s@]/.test(s)||/[\x00-\x1F\x7F]/.test(s))}function Ql(s){return!(!Zl(s)||s.indexOf("/")>-1)}function gu(s){return Zl(s)}const mu={lng:Ql,ns:gu};function vs(s){return typeof s!="string"?s:s.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function vu(s){if(typeof s!="string"||s.length===0)return s;try{const e=new URL(s);return e.username||e.password?(e.username="",e.password="",e.toString()):s}catch{return s.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function ec(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function bu(s){return!!s&&typeof s.then=="function"}function xu(s){return bu(s)?s:Promise.resolve(s)}const yu=/\{\{(.+?)\}\}/g;function ba(s,e){let t=!1;const i=s.replace(yu,(o,r)=>{const n=r.trim();if(Xl.indexOf(n)>-1)return o;const a=e[n];if(a==null)return o;const l=mu[n]||Ql,c=String(a).split("+");for(const d of c)if(!l(d))return t=!0,o;return c.join("+")});return t?null:i}const Ut=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let Bs;typeof fetch=="function"?Bs=fetch:Ut&&typeof Ut.fetch=="function"&&(Bs=Ut.fetch);const xa=ec()&&Ut?Ut.XMLHttpRequest:void 0,_u=typeof ActiveXObject=="function"&&Ut?Ut.ActiveXObject:void 0,tc=["__proto__","constructor","prototype"],qo=(s,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))tc.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return s;s=s+(s.indexOf("?")!==-1?"&":"?")+t.slice(1)}return s},ya=(s,e,t,i)=>{const o=r=>{if(!r.ok)return t(r.statusText||"Error",{status:r.status});r.text().then(n=>{t(null,{status:r.status,data:n})}).catch(t)};if(i){const r=i(s,e);if(r instanceof Promise){r.then(o).catch(t);return}}typeof fetch=="function"?fetch(s,e).then(o).catch(t):Bs(s,e).then(o).catch(t)},wu=(s,e,t,i)=>{s.queryStringParams&&(e=qo(e,s.queryStringParams));const o={...typeof s.customHeaders=="function"?s.customHeaders():s.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(o["Content-Type"]="application/json");const r=typeof s.requestOptions=="function"?s.requestOptions(t):s.requestOptions,n={method:t?"POST":"GET",body:t?s.stringify(t):void 0,headers:o,...s._omitFetchOptions?{}:r},a=typeof s.alternateFetch=="function"&&s.alternateFetch.length>=1?s.alternateFetch:void 0;try{ya(e,n,i,a)}catch(l){if(!r||Object.keys(r).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(r).forEach(c=>{delete n[c]}),ya(e,n,i,a),s._omitFetchOptions=!0}catch(c){i(c)}}},ku=(s,e,t,i)=>{t&&typeof t=="object"&&(t=qo("",t).slice(1)),s.queryStringParams&&(e=qo(e,s.queryStringParams));try{const o=xa?new xa:new _u("MSXML2.XMLHTTP.3.0");o.open(t?"POST":"GET",e,1),s.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!s.withCredentials,t&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");let r=s.customHeaders;if(r=typeof r=="function"?r():r,r)for(const n of Object.keys(r))tc.indexOf(n)>-1||o.setRequestHeader(n,r[n]);o.onreadystatechange=()=>{o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(t)}catch(o){console&&console.log(o)}},$u=(s,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),Bs&&e.indexOf("file:")!==0)return wu(s,e,t,i);if(ec()||typeof ActiveXObject=="function")return ku(s,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},Su=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:s=>JSON.parse(s),stringify:JSON.stringify,parsePayload:(s,e,t)=>({[e]:t||""}),parseLoadPayload:(s,e)=>{},request:$u,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var ic=class{constructor(s,e={},t={}){this.services=s,this.options=e,this.allOptions=t,this.type="backend",this.init(s,e,t)}init(s,e={},t={}){if(this.services=s,this.options={...Su(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(s,e,t){this._readAny(s,s,e,e,t)}read(s,e,t){this._readAny([s],s,[e],e,t)}_readAny(s,e,t,i,o){let r=this.options.loadPath;typeof this.options.loadPath=="function"&&(r=this.options.loadPath(s,t)),r=xu(r),r.then(n=>{if(!n)return o(null,{});const a=ba(n,{lng:s.join("+"),ns:t.join("+")});if(a==null){const l=s.map(vs).join(", "),c=t.map(vs).join(", ");return o(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(a,o,e,i)})}loadUrl(s,e,t,i){const o=typeof t=="string"?[t]:t,r=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(o,r),a=vs(vu(s));this.options.request(this.options,s,n,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+a+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+a+"; status code: "+c.status,!1);if(!c&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(f=>h.indexOf(f)>-1))return e("failed loading "+a+": "+vs(l.message),!0)}if(l)return e(l,!1);let d,p;try{typeof c.data=="string"?d=this.options.parse(c.data,t,i):d=c.data}catch{p="failed parsing "+a+" to json"}if(p)return e(p,!1);e(null,d)})}create(s,e,t,i,o){if(!this.options.addPath)return;typeof s=="string"&&(s=[s]);const r=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];s.forEach(c=>{let d=this.options.addPath;typeof this.options.addPath=="function"&&(d=this.options.addPath(c,e));const p=ba(d,{lng:c,ns:e});if(p==null){n+=1,o&&n===s.length&&o(a,l);return}this.options.request(this.options,p,r,(h,f)=>{n+=1,a.push(h),l.push(f),n===s.length&&typeof o=="function"&&o(a,l)})})}reload(){const{backendConnector:s,languageUtils:e,logger:t}=this.services,i=s.language;if(i&&i.toLowerCase()==="cimode")return;const o=[],r=n=>{e.toResolveHierarchy(n).forEach(a=>{o.indexOf(a)<0&&o.push(a)})};r(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>r(n)),o.forEach(n=>{this.allOptions.ns.forEach(a=>{s.read(n,a,"read",null,null,(l,c)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&c&&t.log(`loaded namespace ${a} for language ${n}`,c),s.loaded(`${n}|${a}`,l,c)})})})}};ic.type="backend";const Cu="https://i18n-fastly.ultrafast.io";function sc(s){const e=s.cdnUrl??Cu;let t=null;const i=new Set,o=()=>{for(const d of i)d()},r=d=>(i.add(d),()=>i.delete(d));async function n(d="en"){return t?(t.language!==d&&(await t.changeLanguage(d),o()),{i18n:t,isNew:!1}):(t=$e.createInstance(),await t.use(ic).init({lng:d,fallbackLng:"en",ns:[s.namespace],defaultNS:s.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${s.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(p,h){var m;const f=JSON.parse(p),b=Array.isArray(h)?h[0]:h;return b&&((m=f[b])!=null&&m.__without_namespace)?f[b].__without_namespace:f}}}),t.on("languageChanged",o),t.on("loaded",o),o(),{i18n:t,isNew:!0})}const a=()=>t,l=(d,p,h)=>!t||!t.isInitialized?Ne(d,p,h):typeof p=="string"?t.t(d,p,h??{}):t.t(d,p??{});class c{constructor(p){this._unsubscribe=null,this._host=p,p.addController(this)}hostConnected(){this._unsubscribe=r(()=>this._host.requestUpdate())}hostDisconnected(){var p;(p=this._unsubscribe)==null||p.call(this),this._unsubscribe=null}}return{initI18n:n,getInstance:a,onChange:r,t:l,fallbackT:Ne,I18nController:c}}function Eu(s){const{lsKey:e,namespace:t,gridUuid:i,prodUrl:o,logPrefix:r}=s,n=typeof localStorage<"u"&&localStorage.getItem(e)==="true",a={};let l=null;const c=2e3;n&&console.log(`%c${r} TranslationMissingKeysHelper enabled`,"font-weight:600;");const d=()=>{console.group(`${r} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...a}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${o}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(a).map(([p,{value:h,ns:f}])=>({key:f&&p.startsWith(`${f}:`)?p.slice(f.length+1):p,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(p,h="",f=t){n&&(a[`${f}:${p}`]={value:h,ns:f},l&&clearTimeout(l),l=setTimeout(d,c))}}}const oc="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Pu="https://i18n-fastly.ultrafast.io",Au="https://neo.wordplex.io",rc="uploader",Tr=sc({gridUuid:oc,namespace:rc,cdnUrl:Pu}),Tu=Tr.initI18n,Tt=Tr.t,Ru=Tr.I18nController,Ou=Eu({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:rc,gridUuid:oc,prodUrl:Au,logPrefix:"[uploader]"});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iu={attribute:!0,type:String,converter:Fs,reflect:!1,hasChanged:Pr},Fu=(s=Iu,e,t)=>{const{kind:i,metadata:o}=t;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,s,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function g(s){return(e,t)=>typeof t=="object"?Fu(s,e,t):((i,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,i),n?Object.getOwnPropertyDescriptor(o,r):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(s){return g({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lu=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(s,e){return(t,i,o)=>{const r=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(s))??null};return Lu(t,i,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi={ATTRIBUTE:1,CHILD:2,ELEMENT:6},_i=s=>(...e)=>({_$litDirective$:s,values:e});let ss=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Uu}=Vd,_a=s=>s,Du=s=>s.strings===void 0,wa=()=>document.createComment(""),Pi=(s,e,t)=>{var r;const i=s._$AA.parentNode,o=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(wa(),o),a=i.insertBefore(wa(),o);t=new Uu(n,a,s,s.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let c;(r=t._$AQ)==null||r.call(t,s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==a._$AU&&t._$AP(c)}if(n!==o||l){let c=t._$AA;for(;c!==n;){const d=_a(c).nextSibling;_a(i).insertBefore(c,o),c=d}}}return t},Pt=(s,e,t=s)=>(s._$AI(e,t),s),zu={},Mu=(s,e=zu)=>s._$AH=e,Bu=s=>s._$AH,Ao=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ka=(s,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(s[o],o);return i},ci=_i(class extends ss{constructor(s){if(super(s),s.type!==yi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],r=[];let n=0;for(const a of s)o[n]=i?i(a,n):n,r[n]=t(a,n),n++;return{values:r,keys:o}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const o=Bu(s),{values:r,keys:n}=this.dt(e,t,i);if(!Array.isArray(o))return this.ut=n,r;const a=this.ut??(this.ut=[]),l=[];let c,d,p=0,h=o.length-1,f=0,b=r.length-1;for(;p<=h&&f<=b;)if(o[p]===null)p++;else if(o[h]===null)h--;else if(a[p]===n[f])l[f]=Pt(o[p],r[f]),p++,f++;else if(a[h]===n[b])l[b]=Pt(o[h],r[b]),h--,b--;else if(a[p]===n[b])l[b]=Pt(o[p],r[b]),Pi(s,l[b+1],o[p]),p++,b--;else if(a[h]===n[f])l[f]=Pt(o[h],r[f]),Pi(s,o[p],o[h]),h--,f++;else if(c===void 0&&(c=ka(n,f,b),d=ka(a,p,h)),c.has(a[p]))if(c.has(a[h])){const m=d.get(n[f]),C=m!==void 0?o[m]:null;if(C===null){const A=Pi(s,o[p]);Pt(A,r[f]),l[f]=A}else l[f]=Pt(C,r[f]),Pi(s,o[p],C),o[m]=null;f++}else Ao(o[h]),h--;else Ao(o[p]),p++;for(;f<=b;){const m=Pi(s,l[b+1]);Pt(m,r[f]),l[f++]=m}for(;p<=h;){const m=o[p++];m!==null&&Ao(m)}return this.ut=n,Mu(s,l),je}}),De=M`
  @media (hover: none) and (pointer: coarse) {
    input,
    textarea,
    select {
      font-size: 16px !important;
    }
  }
`,To=s=>s.includes("-")?s:s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class ju extends ss{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==yi.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return je}update(e,[t]){if(t===this._lastStyles)return je;this._lastStyles=t;const{style:i}=e.element,o=t??{};for(const r of this._appliedProps)(!(r in o)||o[r]==null||o[r]==="")&&(i.removeProperty(To(r)),this._appliedProps.delete(r));for(const[r,n]of Object.entries(o))n!=null&&n!==""?(i.setProperty(To(r),n),this._appliedProps.add(r)):this._appliedProps.has(r)&&(i.removeProperty(To(r)),this._appliedProps.delete(r));return je}}const oe=_i(ju);function Q(s,e){customElements.get(s)||customElements.define(s,e)}function Nu(s,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,s);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const o=(l=(a=s.response)==null?void 0:a.file)==null?void 0:l.uuid;return o?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(o))}`:null}const nc=ee`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,Ro=u`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${nc}
</svg>`,ac=ee`<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />`,Vo=ee`<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />`,lc="(hover: none) and (pointer: coarse)";let Oo=new Map,$a;function Rr(s){if(typeof window>"u"||typeof window.matchMedia!="function")return null;$a!==window.matchMedia&&($a=window.matchMedia,Oo=new Map);const e=Oo.get(s);if(e!==void 0)return e;let t;try{t=window.matchMedia(s)}catch{t=null}return Oo.set(s,t),t}function We(){var s;return((s=Rr(lc))==null?void 0:s.matches)??!1}let Io;function cc(){return typeof document>"u"||We()?!1:(Io===void 0&&(Io="webkitdirectory"in document.createElement("input")),Io)}function Hu(){var s;return typeof navigator>"u"||We()?!1:typeof((s=navigator.mediaDevices)==null?void 0:s.getDisplayMedia)=="function"}function qu(){var s;return We()?!0:typeof navigator>"u"?!1:typeof((s=navigator.mediaDevices)==null?void 0:s.getUserMedia)=="function"}function Vu(){var s;return((s=Rr("(prefers-reduced-motion: reduce)"))==null?void 0:s.matches)??!1}function Or(s){const e=Rr(lc);if(!e)return()=>{};const t=()=>s();return typeof e.addEventListener=="function"?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):typeof e.addListener=="function"?(e.addListener(t),()=>e.removeListener(t)):()=>{}}const Ko=new Set;let Me=null;function Ku(s){if(typeof document>"u"||!document.body||(Ko.add(s),Me))return;const e=document.body,t=document.documentElement,i=window.scrollY||t.scrollTop||0;Me={scrollY:i,overflow:e.style.overflow,position:e.style.position,top:e.style.top,left:e.style.left,right:e.style.right,paddingRight:e.style.paddingRight,scrollBehavior:t.style.scrollBehavior};const o=t.clientWidth||0,r=o>0?Math.max(0,(window.innerWidth||0)-o):0;if(e.style.position="fixed",e.style.top=`-${i}px`,e.style.left="0",e.style.right="0",e.style.overflow="hidden",r>0){const n=parseFloat(getComputedStyle(e).paddingRight)||0;e.style.paddingRight=`${n+r}px`}}function Sa(s){if(Ko.delete(s),Ko.size>0||!Me)return;if(typeof document>"u"||!document.body){Me=null;return}const e=document.body,t=document.documentElement,{scrollY:i}=Me;if(e.style.overflow=Me.overflow,e.style.position=Me.position,e.style.top=Me.top,e.style.left=Me.left,e.style.right=Me.right,e.style.paddingRight=Me.paddingRight,i>0){t.style.scrollBehavior="auto";try{window.scrollTo(0,i)}catch{}t.style.scrollBehavior=Me.scrollBehavior}Me=null}class Yu{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function fe(s,e,t){const i=s.getState().files,o=i.get(e);if(!o)return;const r=new Map(i);r.set(e,{...o,...t}),s.setState({files:r})}function Zt(s,e){const t=new Map(s.getState().files);t.set(e.id,e),s.setState({files:t})}function Ca(s,e){const t=s.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),s.setState({files:i})}function Gu(){return new Yu({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},namingConvention:{regex:null,broken:!1},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:Ne})}class Wu{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Ju="https://api.filerobot.com",Xu=3e4,Zu=2,Qu=400;function ep(s){return s===404||s===408||s===429||s>=500}const tp=s=>new Promise(e=>setTimeout(e,s));function dc(s,e){return`${(e||Ju).replace(/\/+$/,"")}/${s}`}async function ip(s,e,t,i={}){const o=`${dc(s,t)}/key/${encodeURIComponent(e)}`,r=i.retries??Zu,n=i.retryDelayMs??Qu;let a=new Error("SASS key exchange failed");for(let l=0;l<=r;l++){l>0&&await tp(n*l);const c=new AbortController,d=setTimeout(()=>c.abort(),Xu);try{const p=await fetch(o,{signal:c.signal,cache:"no-store"});if(clearTimeout(d),!p.ok){if(a=new Error(`SASS key exchange failed (HTTP ${p.status})`),ep(p.status)&&l<r)continue;throw a}const h=await p.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(p){if(clearTimeout(d),p instanceof DOMException&&p.name==="AbortError")throw new Error("SASS key exchange timed out");if(p instanceof TypeError&&l<r){a=p;continue}throw p}}throw a}function Ea(s,e){const t={};switch(s.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=s.sassKey;break}return s.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=s.airboxPuid),t}function sp(s){return s.mode==="securityTemplate"||s.mode==="sassKey"}function op(s){return sp(s)?s.mode==="securityTemplate"?{mode:"security-template",container:s.projectToken,securityTemplateId:s.securityTemplateKey,airboxPuid:s.airboxPuid}:{mode:"sass-key",container:s.projectToken,sassKey:s.sassKey,airboxPuid:s.airboxPuid}:s}async function Pa(s,e){const t=op(s),i=dc(t.container,e);if(t.mode==="security-template"){const o=await ip(t.container,t.securityTemplateId,e);return{apiBase:i,headers:Ea(t,o),sassKey:o}}return{apiBase:i,headers:Ea(t)}}const rp=3e4;class np extends Error{constructor(e,t,i){super(e),this.status=t,this.code=i,this.name="DamApiError"}}class Ir{constructor(e,t,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=t,this.apiDomain=i}static async create(e,t){const i=await Pa(e,t);return new Ir(i,e,t)}get(e,t){return this.send(this.buildUrl(e,t),{method:"GET"})}post(e,t){return this.sendJson("POST",e,t)}put(e,t){return this.sendJson("PUT",e,t)}delete(e,t){return this.sendJson("DELETE",e,t)}query(e,t,i){return this.send(this.buildUrl(e,t),{method:"QUERY",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}buildUrl(e,t){const i=new URL(`${this.baseUrl}${e}`);if(t)for(const[o,r]of Object.entries(t))r!=null&&i.searchParams.set(o,Array.isArray(r)?r.join(","):String(r));return i}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,t,i){return this.send(new URL(`${this.baseUrl}${t}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,t,i=!1){var n;const o=new AbortController,r=setTimeout(()=>o.abort(),rp);try{const a=await fetch(e.toString(),{...t,headers:{...this.headers,...t.headers},signal:o.signal});if(clearTimeout(r),a.status===401&&!i&&((n=this.auth)==null?void 0:n.mode)==="security-template"){const d=await Pa(this.auth,this.apiDomain);return this.headers=d.headers,this.send(e,t,!0)}if(!a.ok){let d=`API error: ${a.status} ${a.statusText}`,p;try{const h=await a.json();h!=null&&h.msg&&(d=`API error: ${a.status} - ${h.msg}`),typeof(h==null?void 0:h.code)=="string"&&(p=h.code)}catch{}throw new np(d,a.status,p)}if(a.status===204)return;const l=await a.text();if(!l)return;const c=JSON.parse(l);if((c==null?void 0:c.status)==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(a){throw clearTimeout(r),a instanceof DOMException&&a.name==="AbortError"?new Error("API request timed out"):a}}}const L="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",ap='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',it=`data:image/svg+xml,${encodeURIComponent(ap)}`,Es={_default:L+"GENERIC.svg?vh=9a518a",png:L+"PNG.svg?vh=96cd9a",jpg:L+"JPG.svg?vh=06e819",jpg2:L+"JPG2.svg?vh=f0eb7f",jpeg:L+"JPEG.svg?vh=6a65e9",gif:L+"GIF.svg?vh=c3c2c3",bmp:L+"BMP.svg?vh=d2243a",webp:L+"WEBP.svg?vh=fedd74",svg:L+"SVG.svg?vh=a15e46",tiff:L+"TIFF.svg?vh=1f30c3",tif:L+"TIF.svg?vh=b383c9",heic:L+"HEIC.svg?vh=84adfe",avif:L+"AVIF.svg?vh=536b30",ico:L+"ICO.svg?vh=79063d",psd:L+"PSD.svg?vh=be6140",psb:L+"PSB.svg?vh=678646",ai:L+"AI.svg?vh=84b254",dwg:L+"DWG.svg?vh=971fb3",mp4:L+"MP4.svg?vh=42f175",webm:L+"WEBM.svg?vh=26a84a",avi:L+"AVI.svg?vh=d22ba8",mpeg:L+"MPEG.svg?vh=ba93bb",ogv:L+"OGV.svg?vh=74d453","3gp":L+"3GP.svg?vh=f0d388","3g2":L+"3G2.svg?vh=04c652",swf:L+"SWF.svg?vh=3955e2",fla:L+"FLA.svg?vh=daf585",m3u8:L+"M3U8.svg?vh=7d5e62",mp3:L+"MP3.svg?vh=66bbef",wav:L+"WAV.svg?vh=d7a7d5",aac:L+"AAC.svg?vh=07f3f9",oga:L+"OGA.svg?vh=a5c622",opus:L+"OPUS.svg?vh=9548b1",weba:L+"WEBA.svg?vh=4dcf70",mid:L+"MID.svg?vh=3f0e29",midi:L+"MIDI.svg?vh=9fedec",cda:L+"CDA.svg?vh=85b83b",pdf:L+"PDF.svg?vh=18c5f7",doc:L+"DOC.svg?vh=d1b47c",docx:L+"DOCX.svg?vh=1eb6b0",txt:L+"TXT.svg?vh=307979",rtf:L+"RTF.svg?vh=978c5f",xls:L+"XLS.svg?vh=13b5f7",xlsx:L+"XLSX.svg?vh=79d64a",ppt:L+"PPT.svg?vh=4ee29b",pptx:L+"PPTX.svg?vh=8b1568",pps:L+"PPT.svg?vh=4ee29b",csv:L+"CSV.svg?vh=4add78",tsv:L+"TSV.svg?vh=800a87",ssv:L+"SSV.svg?vh=f930c4",psv:L+"PSV.svg?vh=de269f",odt:L+"ODT.svg?vh=940781",ods:L+"ODS.svg?vh=9fbe9a",odp:L+"ODP.svg?vh=bf892d",dbf:L+"DBF.svg?vh=457bd4",vsd:L+"VSD.svg?vh=8a9ccb",abw:L+"ABW.svg?vh=313dc7",epub:L+"EPUB.svg?vh=15263d",azw:L+"AZW.svg?vh=a018b1",ics:L+"ICS.svg?vh=909f63",ogx:L+"OGX.svg?vh=f694d2",zip:L+"ZIP.svg?vh=84f98b",rar:L+"RAR.svg?vh=1d6423","7z":L+"7Z.svg?vh=e007e5",tar:L+"TAR.svg?vh=603aed",gz:L+"GZ.svg?vh=de13f7",bz:L+"BZ.svg?vh=0374ff",bz2:L+"BZ2.svg?vh=e14294",arc:L+"ARC.svg?vh=942fad",jar:L+"JAR.svg?vh=149796",mpkg:L+"MPKG.svg?vh=dea655",ttf:L+"TTF.svg?vh=d2e2c1",otf:L+"OTF.svg?vh=c904fd",woff:L+"WOFF.svg?vh=4b8177",woff2:L+"WOFF2.svg?vh=b532d3",eot:L+"EOT.svg?vh=a54980",js:L+"JS.svg?vh=524691",mjs:L+"MJS.svg?vh=d57921",ts:L+"TS.svg?vh=9af3ae",css:L+"CSS.svg?vh=287863",html:L+"HTML.svg?vh=fa7a87",htm:L+"HTM.svg?vh=21323d",xhtml:L+"XHTML.svg?vh=e6d6a9",xul:L+"XUL.svg?vh=6c9c71",json:L+"JSON.svg?vh=104c9e",jsonld:L+"JSONLD.svg?vh=f30c0f",xml:L+"XML.svg?vh=7f7194",php:L+"PHP.svg?vh=503e36",sh:L+"SH.svg?vh=3b820e",csh:L+"CSH.svg?vh=08c0cc",exe:L+"EXE.svg?vh=ccca53",iso:L+"ISO.svg?vh=064b8f",bin:L+"BIN.svg?vh=1e9618",glb:it,gltf:it,obj:it,fbx:it,stl:it,usdz:it,ply:it,"3ds":it,dae:it};function Tb(){return Es._default}const lp={"image/svg+xml":"svg","image/vnd.adobe.photoshop":"psd","video/quicktime":"mp4","video/x-msvideo":"avi","audio/mpeg":"mp3","audio/x-wav":"wav","audio/wave":"wav","audio/ogg":"oga","video/ogg":"ogv","application/msword":"doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","application/vnd.ms-excel":"xls","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","application/vnd.ms-powerpoint":"ppt","application/vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","application/vnd.oasis.opendocument.text":"odt","application/vnd.oasis.opendocument.spreadsheet":"ods","application/vnd.oasis.opendocument.presentation":"odp","application/epub+zip":"epub","application/x-zip-compressed":"zip","application/x-7z-compressed":"7z","application/x-rar-compressed":"rar","application/vnd.rar":"rar","application/gzip":"gz","application/x-tar":"tar","application/ld+json":"jsonld","application/xhtml+xml":"xhtml","text/plain":"txt","text/javascript":"js","application/javascript":"js","text/calendar":"ics","font/sfnt":"ttf"};function cp(s){const e=(s??"").split(";")[0].trim().toLowerCase();return e.includes("/")?lp[e]??e.split("/")[1]:""}function bt(s,e){const t=((s==null?void 0:s.split(".").pop())||"").toLowerCase();return Es[t]||Es[cp(e)]||Es._default}function dp(s){if(s==null||!Number.isFinite(s)||s<0)return"—";const e=["B","KB","MB","GB","TB"];let t=s,i=0;for(;t>=1024&&i<e.length-1;)t/=1024,i++;const o=(a,l)=>{const c=l>0&&Math.round(a*10)/10<10?1:0,d=a.toFixed(c);return{str:d,rounded:Number(d)}},r=o(t,i);let n=r.str;return r.rounded>=1024&&i<e.length-1&&(t/=1024,i++,n=o(t,i).str),`${n} ${e[i]}`}const up="SAME_ASSET_EXISTS_SKIP_UPLOAD",pp="ERROR_SHA1_CONFLICT";function fi(s){return(s==null?void 0:s.code)===up||(s==null?void 0:s.code)===pp}function Fr(s,e){return{...s,status:"success",file:s.file??{uuid:s.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function js(s,e){var t,i,o,r,n;return((i=(t=s==null?void 0:s.info)==null?void 0:t.msg)==null?void 0:i.trim())||((o=s==null?void 0:s.msg)==null?void 0:o.trim())||((r=s==null?void 0:s.hint)==null?void 0:r.trim())||((n=s==null?void 0:s.message)==null?void 0:n.trim())||e}const hp=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function fp(s){const e=new Set;if(!s)return e;const t=s.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),hp.has(t)&&e.add("archive"),e}function gp(s,e){if(s.formatMimetypes.length===0)return!0;const t=fp(e);return s.formatMimetypes.some(i=>t.has(i))}function Fo(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:!1}function Aa(s){return typeof s=="boolean"?s:s==="true"?!0:s==="false"?!1:null}function bs(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function Ta(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function Ra(s,e){if(s.length===0||e.length===0)return!1;const t=new Set(s);for(const i of e)if(t.has(i))return!0;return!1}function mp(s,e){const t=e[s.triggerCkey],i=s.triggerValues;switch(s.triggerCondition){case"is_true":return Aa(t)===!0;case"is_false":return Aa(t)===!1;case"is_empty":return Fo(t);case"is_not_empty":return!Fo(t);case"is_in":return Ra(bs(t),i);case"is_not_in":return Fo(t)?!0:!Ra(bs(t),i);case"is":return Ta(bs(t),i);case"is_not":return!Ta(bs(t),i);default:return!1}}function vp(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function bp(s,e){let t=s.get(e);return t||(t=vp(),s.set(e,t)),t}function xp(s,e){if(s.length===0||e.length===0)return[];const t=new Set(s);return e.filter(i=>t.has(i))}function yp(s,e){s.contributingDependencyUuids.includes(e)||s.contributingDependencyUuids.push(e)}function _p(s,e,t){const i=bp(s,t.targetCkey);switch(yp(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"show":i.shown=!0;break;case"require":i.required=!0;break;case"allow_values":{const o=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...o]:xp(i.allowedValues,o);break}case"set_values":{const o=t.setValues??[];if(o.length===0)break;i.setValue===void 0&&(i.setValue=o.length===1?o[0]:o);break}default:t.type}}function wp(s,e){for(const t of e.actions)_p(s,e,t)}function kp(s,e){const t=new Map;for(const i of e)i.active&&gp(i,s.mime)&&mp(i,s.meta)&&wp(t,i);return t}function Dt(s,e,t){const i={},o=new Set;for(const a of e.fields)o.add(a.ckey),a.key in s.meta&&(i[a.ckey]=s.meta[a.key]);const r=t.filter(a=>o.has(a.triggerCkey)),n=kp({mime:s.mime,meta:i},r);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const c of a.fields){const d=n.get(c.ckey);if(d){d.hidden=!0;for(const p of l.contributingDependencyUuids)d.contributingDependencyUuids.includes(p)||d.contributingDependencyUuids.push(p)}else n.set(c.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function Yo(s,e){const t=Array.isArray(e)?e:[e];switch(s.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function to(s,e,t){var i,o;return!!((i=t.get(s.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((o=t.get(e.ckey))!=null&&o.hidden))}function Lr(s,e,t){var i,o;return t?!!((i=t.get(s.ckey))!=null&&i.shown||e!=null&&e.ckey&&((o=t.get(e.ckey))!=null&&o.shown)):!1}function $p(s,e,t){if(t.size===0)return s;let i=null;for(const o of e.groups)for(const r of o.fields)to(r,o,t)&&r.key in s&&(i||(i={...s}),delete i[r.key]);return i??s}function Sp(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function Cp(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function Ur(s,e){const t=[];for(const[i,o]of e){if(o.hidden)continue;const r=Sp(s[i]);if(r.length!==0){if(o.allowedValues!==void 0){const n=new Set(o.allowedValues),a=r.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...o.contributingDependencyUuids]})}if(o.setValue!==void 0){const n=Array.isArray(o.setValue)?o.setValue:[o.setValue];Cp(r,n)||t.push({ckey:i,kind:"set_values",conflictingValues:r,dependencyUuids:[...o.contributingDependencyUuids]})}}}return t}function Ep(s,e,t){if(s.length===0||t.length===0)return new Map;const i=s.map(n=>Dt({mime:n.mime,meta:n.meta},e,t)),o=new Map,r=new Set;for(const n of i)for(const a of n.keys())r.add(a);for(const n of r){const a=i.map(A=>A.get(n)),l=a.every(A=>(A==null?void 0:A.hidden)===!0),c=a.some(A=>(A==null?void 0:A.shown)===!0),d=a.some(A=>(A==null?void 0:A.required)===!0);let p;if(a.every(A=>Array.isArray(A==null?void 0:A.allowedValues))){let A;for(const $ of a){const E=$.allowedValues;if(A=A===void 0?[...E]:A.filter(y=>E.includes(y)),A.length===0)break}p=A}let f;const b=a.map(A=>A==null?void 0:A.setValue).filter(A=>A!==void 0);b.length===s.length&&Pp(b)&&(f=b[0]);const m=new Set;for(const A of a)if(A)for(const $ of A.contributingDependencyUuids)m.add($);const C={hidden:l,required:d,contributingDependencyUuids:[...m]};c&&(C.shown=!0),p!==void 0&&(C.allowedValues=p),f!==void 0&&(C.setValue=f),o.set(n,C)}return o}function Pp(s){if(s.length<=1)return!0;const e=s[0];if(typeof e=="string")return s.every(i=>i===e);const t=new Set(e);return s.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const o of i)if(!t.has(o))return!1;return!0})}const Dr=new Set(["asset-attachments","attachments-assets","integer-list"]),uc=new Set(["face_matcher"]);function Rb(s){return Dr.has(s)}function zr(s){return Dr.has(s.type)||uc.has(s.ckey)}const Ap=new Set(["attachments-assets"]);function ue(s){return s.read_only===!0}function pc(s,{hasAssetPicker:e=!1}={}){return Dr.has(s)?!(e&&Ap.has(s)):!1}function Mr(s,e={}){return pc(s.type,e)||uc.has(s.ckey)}const Br=0,jr=100,Tp=2;function Go(s){if(s==null||s==="")return null;const e=Number(s);return!Number.isFinite(e)||e<Br||e>jr?null:e}const Ob=300,Oa=2,Rp=50,Ib=5,xs="regvar:api",Op="#ut",Fb={CREATE_ONLY:"create_only",UPSERT:"upsert"},Ip=/^[a-z0-9_-]+$/,Fp=s=>typeof s=="string"&&s.startsWith(Op),Ps=s=>`~${s.toUpperCase()}`,Lp=(s,e)=>{if(!(!s||!e))return s[e]??s[Ps(e)]},Up=(s,e,t)=>{var n,a,l;const i=(n=s.i18n)==null?void 0:n[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const o=(a=s.i18n)==null?void 0:a[Ps(e)];if(o)return{value:o,isFallback:!0,sourceLang:Ps(e)};const r=Lp(s.i18n,t);if(r){const c=(l=s.i18n)!=null&&l[t]?t:Ps(t);return{value:r,isFallback:!0,sourceLang:c}}return{value:"",isFallback:!1,sourceLang:null}},Lb=s=>(typeof s=="string"?s:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),Ub=s=>Ip.test(s),Ia=s=>{const e={},t={};for(const i of s||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},Db=(s,e)=>s.bySid[e]||s.bySlug[e],Fa=(s,e)=>({bySid:{...s.bySid,...e.bySid},bySlug:{...s.bySlug,...e.bySlug}}),gi=s=>{const e=[],t=new Map,i=r=>r.sid||r.slug||(io(r)?Ie(r)[0]:""),o=(r,n)=>{if(typeof r=="string"){if(!r||t.has(r))return;t.set(r,e.length),e.push({slug:r});return}if(!r||typeof r!="object")return;const a=r,l=i(a);if(!l)return;const c=t.get(l),d=c!==void 0?{...e[c]}:{};a.slug&&(d.slug=a.slug),a.sid&&(d.sid=a.sid),a.uuid&&(d.uuid=a.uuid);const p={...d.i18n,...a.i18n||{}};n&&a.label&&(p[n]=a.label),Object.keys(p).length>0&&(d.i18n=p),c!==void 0?e[c]=d:(t.set(l,e.length),a.slug&&a.slug!==l&&t.set(a.slug,e.length),e.push(d))};if(Array.isArray(s))for(const r of s)o(r);else if(s&&typeof s=="object"){const r=s;for(const[n,a]of Object.entries(r))if(Array.isArray(a))for(const l of a)o(l,n)}return e},Nr=s=>s&&typeof s=="object"?Object.entries(s).filter(([,e])=>typeof e=="string"&&e.trim()!==""):[],io=s=>{if(!s||typeof s!="object")return!1;const{sid:e,slug:t,uuid:i,i18n:o}=s;return!e&&!t&&!i&&Nr(o).length>0},Dp=s=>`new:${Nr(s).map(([e,t])=>`${e}=${t.trim().toLowerCase()}`).sort().join("|")}`,La=s=>/[\p{L}\p{N}]/u.test(s),Ua=s=>s.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Hr=(s,e,t)=>{const i=Up({i18n:s.i18n,slug:s.slug||""},e,t).value||s.slug||s.sid;return i||(io(s)?Nr(s.i18n)[0][1]:"")},Ie=s=>typeof s=="string"?s?[s]:[]:io(s)?[Dp(s.i18n)]:!s||typeof s!="object"?[]:[s.sid,s.slug,s.uuid].filter(Boolean),hc=s=>gi(s).flatMap(e=>io(e)?[{i18n:e.i18n}]:e.slug?[e.slug]:[]),Ns=(s,e,t)=>{if(t){const r=new Set(e.flatMap(Ie));return s.filter(n=>!Ie(n).some(a=>r.has(a)))}const i=new Set(s.flatMap(Ie)),o=e.filter(r=>!Ie(r).some(n=>i.has(n)));return[...s,...o]},zp=(s,e)=>s.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t}),fc=5;function Mp(s){if(typeof s=="string")return s?{uuid:s}:null;if(s&&typeof s=="object"){const e=s,t=e.uuid??e.id;if(typeof t=="string"&&t)return{...e,uuid:t}}return null}function xt(s){if(!Array.isArray(s))return[];const e=new Set,t=[];for(const i of s){const o=Mp(i);!o||e.has(o.uuid)||(e.add(o.uuid),t.push(o))}return t}function Da(s){return xt(s).map(e=>e.uuid)}function qi(s){const e=s.name;return typeof e=="string"&&e?e:s.uuid}function Bp(s){if(typeof s.thumbnailUrl=="string"&&s.thumbnailUrl)return s.thumbnailUrl;const e=s.thumbnail;if(typeof e=="string"&&e)return e;const t=s.url;if(typeof t=="string"&&t&&za(s))return t;if(t&&typeof t=="object"&&typeof t.cdn=="string"&&za(s))return t.cdn}function za(s){const e=s.type;return typeof e=="string"?e.startsWith("image/"):!1}function gc(s,e,t){let i=e;switch(s.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),s.type){case"geopoint":return jp(i);case"focus-point":return mc(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(o=>typeof o=="string"?{value:o,label:o}:o):[];case"attachments-assets":return xt(i);case"ultratags":return gi(e);case"multi-select":return i||[];default:return i??""}}function qr(s,e,t,i){var r;let o;switch(s.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?o=null:o=`(${n.latitude},${n.longitude})`;break}case"focus-point":{const n=e,a=d=>{if(d==null||d==="")return;const p=Number(d);return Number.isFinite(p)?Number(p.toFixed(Tp)):void 0},l=a(n==null?void 0:n.horizontal),c=a(n==null?void 0:n.vertical);o=l===void 0||c===void 0?null:`${l},${c}`;break}case"boolean":e==="true"?o=!0:e==="false"?o=!1:o=null;break;case"date":{if(!e)o=null;else{const n=e instanceof Date?e:new Date(e),a=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),c=String(n.getDate()).padStart(2,"0");o=`${a}-${l}-${c}`}break}case"tags":o=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":o=Array.isArray(e)?hc(e):[];break;case"attachments-assets":o=xt(e);break;case"select-one":o=e===""?null:e;break;case"numeric":{if(e===""||e==null){o=null;break}const n=Number(e);o=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){o=null;break}const n=Number(e);o=Number.isFinite(n)?n:null;break}default:o=e}if(s.regional_variants_group_uuid&&s.type!=="ultratags"){const n=i??"en";return{...((r=t==null?void 0:t.meta)==null?void 0:r[s.key])??{},[n]:o}}return o}function jp(s){if(typeof s=="string"){const e=/\(([^)]+)\)/.exec(s);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function mc(s){var e;if(typeof s=="string"&&s!==""){const i=(((e=/\(([^)]+)\)/.exec(s))==null?void 0:e[1])??s).split(",");if(i.length===2)return{horizontal:i[0].trim(),vertical:i[1].trim()}}if(s!=null&&typeof s=="object"){const t=s;return{horizontal:t.horizontal??"",vertical:t.vertical??""}}return{horizontal:"",vertical:""}}const Bt="product.ref",jt="product.position",Np="__product__",Hp=new Set([Bt,jt]);function Wo(s){return Hp.has(s)}function Jo(s){return s===Bt?"ref":s===jt?"position":null}function qp(s){return[{key:Bt,ckey:Bt,uuid:"product-ref",title:s("productRefLabel","Product reference"),type:"text",placeholder:s("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:jt,ckey:jt,uuid:"product-position",title:s("productPositionLabel","Position"),type:"numeric",placeholder:s("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Vp(s){return{uuid:Np,isRoot:!1,name:s("productFieldsLabel","Product"),fields:qp(s)}}function Kp(s,e){const t=Vp(e);let i=-1;for(let l=0;l<s.groups.length;l++)s.groups[l].isRoot&&(i=l);const o=i+1,r=[...s.groups.slice(0,o),t,...s.groups.slice(o)],n=r.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...s,groups:r,fields:n,fieldsByKey:a}}const vc=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Yp(s){return s==null||s===""?null:typeof s!="string"||vc.test(s)?"productRefInvalid":null}function Gp(s){if(s==null||s==="")return null;const e=typeof s=="number"?s:Number(s);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function Vr(s){return s?s.ref!=null&&s.ref!==""||s.position!=null:!1}function Kr(s){const e={};return(s==null?void 0:s.ref)!=null&&s.ref!==""&&(e.ref=s.ref),(s==null?void 0:s.position)!=null&&(e.position=s.position),e}function Ma(s,e){const t={...s??{}};for(const i of Object.keys(e)){const o=e[i];o===void 0?delete t[i]:t[i]=o}return t}function bc(s,e,t){var o;if(!ue(s)&&(((o=t==null?void 0:t.requiredFields)==null?void 0:o.includes(s.ckey))||!!s.required)&&Ve(e))return`${s.title} is required`;if(Ve(e))return null;if(s.key===Bt)return typeof e!="string"||vc.test(e)?"Reference contains invalid characters":null;if(s.key===jt){const r=Number(e);return!Number.isFinite(r)||!Number.isInteger(r)?"Position must be an integer":null}switch(s.type){case"numeric":{const r=Number(e);if(!Number.isFinite(r))return"Must be a valid number";if(!Number.isInteger(r))return"Must be an integer";if(r<-1999999999||r>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const r=Number(e);if(!Number.isFinite(r))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(r<-999999999999e-2||r>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const r=e,n=r.latitude!==""&&r.latitude!=null,a=r.longitude!==""&&r.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(r.latitude),c=Number(r.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(c)||c<-180||c>180)return"Longitude must be between -180 and 180"}break}case"focus-point":{const r=e,n=r.horizontal!==""&&r.horizontal!=null,a=r.vertical!==""&&r.vertical!=null;if(n!==a)return"Both horizontal and vertical are required";if(n&&a){for(const l of[r.horizontal,r.vertical])if(Go(l)===null)return`Focus point must be between ${Br} and ${jr}`}break}case"attachment-uri":{try{const r=new URL(e);if(!["http:","https:"].includes(r.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(s.validation&&typeof e=="string")try{if(!new RegExp(s.validation).test(e))return"Value does not match expected format"}catch{}return null}function Ve(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:typeof s=="object"?!Object.values(s).some(e=>e!=null&&e!==""):!s}const Wp=new Set(["idle","queued","rejected"]);function so(s){return!Ve(s)}function Vi(s,e){var t;return zr(s)||ue(s)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(s.ckey)?!0:!!s.required}function Yr(s,e,t){var i;return ue(s)?!1:(i=t==null?void 0:t.get(s.ckey))!=null&&i.required?!0:Vi(s,e)}function St(s){return[...s.values()].filter(e=>Wp.has(e.status))}function xc(s,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:s.forceFillingOnUpload!==void 0?s.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:s.fields.some(t=>!!t.required&&!ue(t))}function os(s,e,t){if(ue(s))return!1;if(!e)return Vi(s,t);const i=e.get(s.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:Vi(s,t)}function Gt(s,e,t){const i=new Map;if(!t||t.length===0){for(const o of s)i.set(o.id,null);return i}for(const o of s)i.set(o.id,Dt({mime:o.type??"",meta:o.meta},e,t));return i}function Jp(s,e,t,i){const o=St(s);if(o.length===0)return{};const r=Gt(o,e,i),n={};for(const a of e.fields){const l=o.filter(c=>{const d=r.get(c.id)??null;return os(a,d,t)?!so(c.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function Xp(s,e,t,i){const o=St(s);if(o.length===0)return new Set;const r=Gt(o,e,i),n=new Set;for(const a of e.fields)o.some(c=>{const d=r.get(c.id)??null;return os(a,d,t)})&&n.add(a.key);return n}function Zp(s,e,t,i){const o=St(s);if(o.length===0)return null;const r=Gt(o,e,i);for(const n of e.fields)if(o.some(l=>{const c=r.get(l.id)??null;return os(n,c,t)?!so(l.meta[n.key]):!1}))return n.key;return null}function yc(s,e,t){var o;const i=s.get(e.id);return i&&i.has(t)?i.get(t):(o=e.meta)==null?void 0:o[t]}function oo(s,e,t){const i=e.get(s.id);if(!i||i.size===0)return s;const o={...s.meta};for(const r of t.fields)i.has(r.key)&&(o[r.key]=i.get(r.key));return{...s,meta:o}}function zb(s,e,t,i,o){const r=St(e);if(r.length===0)return null;const n=r.map(l=>oo(l,s,t)),a=Gt(n,t,o);for(const l of t.fields)if(r.some((d,p)=>{const h=a.get(n[p].id)??null;return os(l,h,i)?!so(yc(s,d,l.key)):!1}))return l.key;return null}function Qp(s,e,t,i,o){const r=new Set,n=St(e);if(n.length===0)return r;const a=n.map(c=>oo(c,s,t)),l=Gt(a,t,o);for(const c of t.fields)n.some((p,h)=>{const f=l.get(a[h].id)??null;return os(c,f,i)?!so(yc(s,p,c.key)):!1})&&r.add(c.key);return r}function _c(s,e,t){if(!t||t.length===0)return null;const i=St(s);if(i.length===0)return null;const o=Gt(i,e,t),r=new Map;for(const n of i){const a=o.get(n.id);if(!a||a.size===0)continue;const l={};for(const d of e.fields)d.key in n.meta&&(l[d.ckey]=n.meta[d.key]);const c=Ur(l,a);c.length!==0&&r.set(n.id,new Set(c.map(d=>d.ckey)))}if(r.size===0)return null;for(const n of e.fields)if(!ue(n)){for(const a of r.values())if(a.has(n.ckey))return n.key}return null}function Mb(s,e,t,i){const o=St(e);if(o.length===0)return null;const r=new Map(o.map(n=>[n.id,oo(n,s,t)]));return _c(r,t,i)}function eh(s,e,t,i){const o=new Map;if(!i||i.length===0)return o;const r=St(e).map(l=>oo(l,s,t));if(r.length===0)return o;const n=new Set(t.fields.filter(ue).map(l=>l.ckey)),a=Gt(r,t,i);for(const l of r){const c=a.get(l.id);if(!c||c.size===0)continue;const d={};for(const h of t.fields)h.key in l.meta&&(d[h.ckey]=l.meta[h.key]);const p=Ur(d,c).filter(h=>!n.has(h.ckey));p.length>0&&o.set(l.id,new Map(p.map(h=>[h.ckey,h])))}return o}function Bb(s,e){const t={...s};for(const i of Object.keys(e)){const o=e[i];if(o==null||o==="")continue;const r=s[i];if(Array.isArray(o))if(Array.isArray(r)){const n=new Set(r.map(l=>JSON.stringify(l))),a=[...r];for(const l of o){const c=JSON.stringify(l);n.has(c)||(n.add(c),a.push(l))}t[i]=a}else t[i]=o;else t[i]=o}return t}function th(s,e){const t=e.fields[s.ckey];let i=!1;const o=(s.possible_values??[]).map(l=>{const c=e.options[l.internal_unique_value];return c&&c!==l.label?(i=!0,{...l,label:c}):l}),r=!!(t!=null&&t.name)&&t.name!==s.title,n=!!(t!=null&&t.placeholder)&&t.placeholder!==s.placeholder,a=!!(t!=null&&t.tooltip)&&t.tooltip!==s.hint;return!i&&!r&&!n&&!a?s:{...s,title:r?t.name:s.title,placeholder:n?t.placeholder:s.placeholder,hint:a?t.tooltip:s.hint,possible_values:i?o:s.possible_values}}function ih(s,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return s;let t=!1;const i=s.groups.map(n=>{let a=!1;const l=n.fields.map(c=>{const d=th(c,e);return d!==c&&(a=!0),d});return a?(t=!0,{...n,fields:l}):n});if(!t)return s;const o=i.flatMap(n=>n.fields),r=new Map(o.map(n=>[n.key,n]));return{...s,groups:i,fields:o,fieldsByKey:r}}const sh="description",st="system.focusPoint",oh="__focus_point__",rh="sfx-meta-focus-point-field";function Rt(s){return s===st}function nh(s){return{key:st,ckey:st,uuid:"system-focus-point",title:s("focusPointLabel","Focus point"),type:"focus-point",required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function ah(s,e){const t=nh(e);let i=!1,o=s.groups.map(a=>{if(i||!a.isRoot)return a;i=!0;const l=a.fields.findIndex(d=>d.ckey===sh),c=l===-1?a.fields.length:l+1;return{...a,fields:[...a.fields.slice(0,c),t,...a.fields.slice(c)]}});i||(o=[{uuid:oh,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...o]);const r=o.flatMap(a=>a.fields),n=new Map(r.map(a=>[a.key,a]));return{...s,groups:o,fields:r,fieldsByKey:n}}function wc(s){if(!s.fields.some(o=>Rt(o.key)))return s;const e=s.groups.map(o=>({...o,fields:o.fields.filter(r=>!Rt(r.key))})).filter(o=>o.fields.length>0),t=e.flatMap(o=>o.fields),i=new Map(t.map(o=>[o.key,o]));return{...s,groups:e,fields:t,fieldsByKey:i}}function kc(s=2){return u`<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width=${s}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" />
    <line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>`}function Gr(s){return s.show===!1}const lh="f7b2366e-fcb6-4f1a-8f23-8de48422989a",ch="https://i18n-fastly.ultrafast.io",dh="uploader",Wr=sc({gridUuid:lh,namespace:dh,cdnUrl:ch}),uh=Wr.initI18n,k=Wr.t,Ye=Wr.I18nController;var ph=Object.defineProperty,Re=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&ph(e,t,o),o};const hh=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,fh=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,gh=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,mh=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,gn=class gn extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.focusPointPicking=!1,this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=Ur(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var r;const i=this.resolvedSchema;if(i&&e.ckey&&((r=i.get(e.ckey))!=null&&r.hidden))return[];let o=i?e.fields.filter(n=>!to(n,e,i)):e.fields;return Gr(e)&&(o=o.filter(n=>Yr(n,this.config??void 0,i)||Lr(n,e,i))),t&&!e.name.toLowerCase().includes(t)&&(o=o.filter(n=>n.title.toLowerCase().includes(t))),o}_renderFilter(e,t,i){if(this.hideFilter||!this.schema||this.schema.fields.length===0)return v;const o=this._filterQuery,r=this._isAllCollapsed(t),n=r?k("expandAll","Expand all"):k("collapseAll","Collapse all");return u`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${hh}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${k("searchFields","Search fields...")}
            .value=${o}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${k("searchMetadataFields","Search metadata fields")}
          />
          ${o?u`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${k("clearSearch","Clear search")}
                aria-label=${k("clearSearch","Clear search")}
                type="button"
              >
                ${fh}
              </button>`:v}
        </div>
        ${e?u`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?k("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${r?k("expandAllGroups","Expand all groups"):k("collapseAllGroups","Collapse all groups")}
              type="button"
            >
              ${r?mh:gh}
            </button>`:v}
      </div>
    `}_renderGroup(e,t,i,o,r){const n=r?!0:!this._collapsed.has(e.uuid);return u`
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
                ${t.map(a=>{var l,c,d;return u`
                    <sfx-metadata-field
                      .field=${a}
                      .value=${this.meta[a.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((l=this.taxonodes)==null?void 0:l[a.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${((c=this.schema)==null?void 0:c.regionalVariantsGroups)??[]}
                      .resolvedState=${((d=this.resolvedSchema)==null?void 0:d.get(a.ckey))??null}
                      .conflict=${i.get(a.ckey)??null}
                      .dependencyNames=${o}
                      .focusPointPicking=${this.focusPointPicking}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:v}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return u`<div class="empty" role="status" aria-live="polite">
        ${k("noMetadataFieldsConfigured","No metadata fields configured")}
      </div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),o=i.toLowerCase(),r=o!=="",n=[];for(const d of this.schema.groups){const p=this._visibleFieldsFor(d,o);p.length!==0&&n.push({group:d,fields:p})}const a=n.map(d=>d.group.uuid),l=this.schema.groups.length>1&&(r||n.length>0),c=this._renderFilter(l,a,r);if(n.length===0){const d=r?k("noFieldsMatch",'No fields match "{{query}}"',{query:i}):k("allMetadataFieldsHidden","All metadata fields are currently hidden");return u`
        ${c}
        <div class="empty" role="status" aria-live="polite">${d}</div>
      `}return u`
      ${c}
      ${n.map(({group:d,fields:p})=>this._renderGroup(d,p,e,t,r))}
    `}};gn.styles=M`
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
  `;let ge=gn;Re([g({attribute:!1})],ge.prototype,"schema");Re([g({attribute:!1})],ge.prototype,"meta");Re([g({attribute:!1})],ge.prototype,"config");Re([g({attribute:!1})],ge.prototype,"autocomplete");Re([g({attribute:!1})],ge.prototype,"taxonomyService");Re([g({attribute:!1})],ge.prototype,"ultratags");Re([g({attribute:!1})],ge.prototype,"defaultLanguage");Re([g({attribute:!1})],ge.prototype,"taxonodes");Re([g({attribute:!1})],ge.prototype,"resolvedSchema");Re([g({attribute:!1})],ge.prototype,"dependencies");Re([g({type:Boolean})],ge.prototype,"focusPointPicking");Re([g({type:Boolean})],ge.prototype,"disabled");Re([g({type:Boolean,attribute:"hide-filter"})],ge.prototype,"hideFilter");Re([P()],ge.prototype,"_collapsed");Re([P()],ge.prototype,"_filterQuery");Q("sfx-metadata-form",ge);const Wt=M`
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

  ${De}
`,rs=M`
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

  ${De}
`,ro=M`
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

  ${De}
`,jb=M`
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

  ${De}
`,$c=M`
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
    /* Same colour as .field-label-text, like the Hub's ⓘ. */
    color: var(--sfx-up-text-secondary, #64748b);
    cursor: pointer;
    flex-shrink: 0;
    /* Rendered as a <button> (see field-hint.ts) — strip the UA chrome. */
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
  }
  .field-hint svg {
    width: 13px;
    height: 13px;
  }
  /* Admin "Info tooltip" icon (see field-hint.ts). */
  .field-label sfx-meta-hint-tooltip {
    flex-shrink: 0;
  }
  .field-hint:focus-visible {
    outline: 2px solid var(--sfx-up-primary, #2563eb);
    outline-offset: 1px;
    border-radius: 50%;
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

  ${De}
`,As={LANGUAGES:"FTYPE_LANGUAGES",CURRENCIES:"FTYPE_CURRENCIES",CUSTOM:"FTYPE_CUSTOM"};function zt(s,e){if(!s.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&s.regional_variants_group_uuid in t?t[s.regional_variants_group_uuid]:e==null?void 0:e.language}function vh(s,e,t,i){if(!s.regional_variants_group_uuid||!e)return;const o=e.find(a=>a.uuid===s.regional_variants_group_uuid);if(!o)return;const r=(t==null?void 0:t[o.uuid])??i,n=o.variants.find(a=>a.api_value===r);if(n)return`${o.label}: ${n.label}`}function bh(s,e){var i;const t={};for(const o of s??[]){if(!((i=o.variants)!=null&&i.length))continue;const r=o.type===As.LANGUAGES?xh(o.variants,e):void 0;t[o.uuid]=r??o.variants[0].api_value}return t}function xh(s,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let o,r;for(const a of s){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!o&&l===i&&(o=a.api_value),!r&&l.split("-")[0]===i&&(r=a.api_value)}}return o??r}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yh=s=>s??v;var _h=Object.defineProperty,ns=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&_h(e,t,o),o};const Ba=6,Ai=4,wh=()=>typeof HTMLElement<"u"&&Object.prototype.hasOwnProperty.call(HTMLElement.prototype,"popover"),mn=class mn extends Y{constructor(){super(...arguments),this.text="",this.placement="top",this.multiline=!1,this.floating=!1,this._open=!1,this._scrollRoots=[],this._hovered=!1,this._focused=!1,this._onEnter=()=>{this._hovered=!0,this.show()},this._onMouseLeave=()=>{this._hovered=!1,this._focused||this.hide()},this._onFocusOut=e=>{e.relatedTarget instanceof Node&&this.contains(e.relatedTarget)||(this._focused=!1,this._hovered||this.hide())},this._onScroll=()=>this.hide(),this._onFocusIn=e=>{const t=e.target;let i=!0;try{i=!!(t!=null&&t.matches(":focus-visible"))}catch{}i&&(this._focused=!0,this.show())},this._onKeyDown=e=>{e.key!=="Escape"||!this._open||(e.preventDefault(),e.stopPropagation(),this.hide())}}get _usePopover(){return this.floating&&wh()}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onEnter),this.addEventListener("mouseleave",this._onMouseLeave),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onEnter),this.removeEventListener("mouseleave",this._onMouseLeave),this.removeEventListener("focusin",this._onFocusIn),this.removeEventListener("focusout",this._onFocusOut),this.removeEventListener("keydown",this._onKeyDown),this.hide()}show(){const e=this._tip;!this._usePopover||!e||!this.text||(this._open||(e.showPopover(),this._open=!0,this._listenForScroll(!0)),this._position(e))}hide(){var e;if(this._open){this._open=!1,this._listenForScroll(!1);try{(e=this._tip)==null||e.hidePopover()}catch{}}}get open(){return this._open}updated(e){super.updated(e),!(!e.has("text")||!this._open)&&(this.text?this._tip&&this._position(this._tip):this.hide())}_listenForScroll(e){e&&(this._scrollRoots=this._enclosingRoots());const t={capture:!0,passive:!0},i=[...this._scrollRoots.map(o=>[o,"scroll"]),[window,"scroll"],[window,"wheel"],[window,"touchmove"]];for(const[o,r]of i)e?o.addEventListener(r,this._onScroll,t):o.removeEventListener(r,this._onScroll,t);e||(this._scrollRoots=[])}_enclosingRoots(){const e=[];let t=this.getRootNode();for(;t instanceof ShadowRoot;)e.push(t),t=t.host.getRootNode();return t instanceof Document&&e.push(t),e}_position(e){const t=this.getBoundingClientRect(),i=e.getBoundingClientRect(),o=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight,n=t.top-Ba-i.height,a=t.bottom+Ba,l=n>=Ai,c=a+i.height<=r-Ai,d=this.placement==="bottom"?c||!l?a:n:l||!c?n:a,p=t.left+t.width/2-i.width/2,h=Math.max(Ai,Math.min(p,o-i.width-Ai));e.style.top=`${Math.max(Ai,d)}px`,e.style.left=`${h}px`}render(){const e=this._usePopover,t=["tip",this.placement==="bottom"?"bottom":"",e?"popover":""].filter(Boolean).join(" ");return u`
      <slot></slot>
      <div class=${t} role="tooltip" popover=${yh(e?"manual":void 0)}>
        ${this.text}
      </div>
    `}};mn.styles=[M`
      :host {
        position: relative;
        display: inline-flex;
      }
      .tip {
        display: none;
        position: absolute;
        bottom: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        /* Theming hooks — defaults are the original dark tip. Set them on the host (or an
           ancestor) to restyle, e.g. dam-metadata's light field-hint tooltip. */
        padding: var(--sfx-tooltip-padding, 4px 8px);
        font-size: var(--sfx-tooltip-font-size, 0.75rem);
        font-weight: 400;
        background: var(--sfx-tooltip-bg, var(--sfx-foreground, oklch(0.37 0.022 248.413)));
        color: var(--sfx-tooltip-fg, var(--sfx-background, oklch(1 0 0)));
        border-radius: var(--sfx-tooltip-radius, 4px);
        box-shadow: var(--sfx-tooltip-shadow, none);
        pointer-events: none;
        z-index: 100;
      }
      .tip.bottom {
        bottom: auto;
        top: calc(100% + 6px);
      }
      :host(:hover) .tip:not(.popover) {
        display: block;
      }
      :host([multiline]) .tip {
        white-space: normal;
        width: max-content;
        max-width: var(--sfx-tooltip-max-width, 280px);
        text-align: start;
        line-height: var(--sfx-tooltip-line-height, 1.4);
        overflow-wrap: anywhere;
      }
      /* Top-layer tip: neutralise the UA popover styles; coordinates are set from JS. */
      .tip.popover {
        position: fixed;
        inset: auto;
        margin: 0;
        border: 0;
        transform: none;
        overflow: visible;
      }
      .tip.popover:popover-open {
        display: block;
      }
    `];let at=mn;ns([g()],at.prototype,"text");ns([g()],at.prototype,"placement");ns([g({type:Boolean,reflect:!0})],at.prototype,"multiline");ns([g({type:Boolean,reflect:!0})],at.prototype,"floating");ns([Yt(".tip")],at.prototype,"_tip");const vn=class vn extends at{};vn.styles=[...at.styles,M`
      :host {
        --sfx-tooltip-bg: var(--sfx-muted, oklch(0.974 0.006 239.819));
        --sfx-tooltip-fg: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        --sfx-tooltip-radius: 6px;
        --sfx-tooltip-padding: 8px 12px;
        --sfx-tooltip-font-size: 14px;
        --sfx-tooltip-line-height: 20px;
        /* ui-tw's max-w-lg; _position() still clamps it to the viewport. */
        --sfx-tooltip-max-width: 32rem;
        /* shadow-sm, coloured by the theme's shadow token (follows host re-theming / dark mode). */
        --sfx-tooltip-shadow:
          0 1px 3px 0 var(--sfx-shadow, oklch(26.18% 0.024 256.43 / 0.1)),
          0 1px 2px -1px var(--sfx-shadow, oklch(26.18% 0.024 256.43 / 0.1));
      }
    `];let Xo=vn;Q("sfx-meta-hint-tooltip",Xo);function kh(s){var t;const e=(t=s==null?void 0:s.hint)==null?void 0:t.trim();return e||null}const ja=ee`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <circle cx="8" cy="8" r="6.25" />
  <line x1="8" y1="7.25" x2="8" y2="11" />
  <circle cx="8" cy="4.9" r="0.4" fill="currentColor" />
</svg>`;function Ki(s,e="field-hint",t={}){const i=kh(s);return i?t.interactive===!1?u`<sfx-meta-hint-tooltip text=${i} multiline floating
      ><span class=${e} aria-hidden="true">${ja}</span></sfx-meta-hint-tooltip
    >`:u`<sfx-meta-hint-tooltip text=${i} multiline floating
    ><button type="button" class=${e} aria-label=${i}>
      ${ja}
    </button></sfx-meta-hint-tooltip
  >`:v}var $h=Object.defineProperty,Se=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&$h(e,t,o),o};const bn=class bn extends Y{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.focusPointPicking=!1,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return ue(this.field)?!1:(e=this.resolvedState)!=null&&e.required?!0:Vi(this.field,this.config??void 0)}_conflictTooltip(){var n,a;const e=this.conflict;if(!e)return"";const t=l=>{var c,d,p;return((p=(d=(c=this.field)==null?void 0:c.possible_values)==null?void 0:d.find(h=>h.internal_unique_value===l))==null?void 0:p.label)??l},i=(n=this.resolvedState)==null?void 0:n.allowedValues,o=(a=this.resolvedState)==null?void 0:a.setValue;let r;if(e.kind==="allow_values"&&i?r=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&o!==void 0?r=`Value should be: ${(Array.isArray(o)?o:[o]).map(t).join(", ")}`:r="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const l=e.dependencyUuids.map(c=>this.dependencyNames.get(c)).filter(c=>!!c);if(l.length>0){const c=l.length===1?"dependency":"dependencies";r+=`
Controlled by ${c}: ${l.join(", ")}`}}return r}_onFieldBlur(e){const{key:t,value:i}=e.detail,o=bc(this.field,i,this.config??void 0);if(o){this._error=o;return}this._error=null;const r={meta:{[this.field.key]:this.value}},n=zt(this.field,this.config),a=qr(this.field,i,r,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_emitRow(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}_onRowFocusIn(){this._emitRow("field-focus",{focused:!0})}_onRowFocusOut(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emitRow("field-focus",{focused:!1})}_renderField(e,t){var r,n;const i=this.disabled;if(ue(e))return u`<sfx-meta-unsupported-field reason="read-only"></sfx-meta-unsupported-field>`;if(zr(e))return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const o=((r=this.resolvedState)==null?void 0:r.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return u`<sfx-meta-text-field
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
          .allowedValues=${o}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return u`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${o}
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
        ></sfx-meta-text-field>`}}render(){var l,c;const e=this.field;if(!e)return v;const t=zt(e,this.config),i=gc(e,this.value,t),o=vh(e,this.regionalVariantsGroups,(l=this.config)==null?void 0:l.regionalFilters,(c=this.config)==null?void 0:c.language),n=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return u`
      <div
        class=${n}
        aria-required=${this._isRequired?"true":"false"}
        @focusin=${this._onRowFocusIn}
        @focusout=${this._onRowFocusOut}
      >
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${Ki(e)}
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
          ${o?u`<div class="field-regional-hint" title=${o}>${o}</div>`:v}
          ${this._error?u`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:v}
        </div>
      </div>
    `}};bn.styles=[$c];let pe=bn;Se([g({attribute:!1})],pe.prototype,"field");Se([g({attribute:!1})],pe.prototype,"value");Se([g({attribute:!1})],pe.prototype,"config");Se([g({attribute:!1})],pe.prototype,"autocomplete");Se([g({attribute:!1})],pe.prototype,"taxonomyService");Se([g({attribute:!1})],pe.prototype,"taxonomyEntry");Se([g({attribute:!1})],pe.prototype,"ultratags");Se([g({attribute:!1})],pe.prototype,"defaultLanguage");Se([g({attribute:!1})],pe.prototype,"ultratagsRestrictToItems");Se([g({attribute:!1})],pe.prototype,"regionalVariantsGroups");Se([g({attribute:!1})],pe.prototype,"resolvedState");Se([g({attribute:!1})],pe.prototype,"conflict");Se([g({attribute:!1})],pe.prototype,"dependencyNames");Se([g({type:Boolean})],pe.prototype,"focusPointPicking");Se([g({type:Boolean})],pe.prototype,"disabled");Se([P()],pe.prototype,"_error");Q("sfx-metadata-field",pe);var Sh=Object.defineProperty,Jr=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Sh(e,t,o),o};class Ce extends Y{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new Ye(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?k("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??k("selectAnOption","Select an option")}_emit(e,t){this._emitDetail(e,t!==void 0?{value:t}:{})}_emitDetail(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}}Jr([g({attribute:!1})],Ce.prototype,"field");Jr([g({attribute:!1})],Ce.prototype,"value");Jr([g({type:Boolean})],Ce.prototype,"disabled");const xn=class xn extends Ce{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,o;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return u`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((o=this.field)==null?void 0:o.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};xn.styles=[Wt];let Zo=xn;Q("sfx-meta-text-field",Zo);const yn=class yn extends Ce{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,o;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return u`
      <textarea
        .value=${this.value??""}
        placeholder=${((o=this.field)==null?void 0:o.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};yn.styles=[Wt,M`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Qo=yn;Q("sfx-meta-textarea-field",Qo);function as(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const o of t)(i=o._$AO)==null||i.call(o,e,!1),Mi(o,e);return!0},Hs=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Sc=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),Ph(e)}};function Ch(s){this._$AN!==void 0?(Hs(this),this._$AM=s,Sc(this)):this._$AM=s}function Eh(s,e=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=t;r<i.length;r++)Mi(i[r],!1),Hs(i[r]);else i!=null&&(Mi(i,!1),Hs(i));else Mi(this,s)}const Ph=s=>{s.type==yi.CHILD&&(s._$AP??(s._$AP=Eh),s._$AQ??(s._$AQ=Ch))};class Ah extends ss{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Sc(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),t&&(Mi(this,e),Hs(this))}setValue(e){if(Du(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class no extends Event{constructor(e){super(no.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}no.eventName="rangeChanged";class ao extends Event{constructor(e){super(ao.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}ao.eventName="visibilityChanged";class lo extends Event{constructor(){super(lo.eventName,{bubbles:!1})}}lo.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Th{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Rh extends Th{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:o}=this._destination;i=Math.min(i||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const r=Math.abs(i-e),n=Math.abs(o-t);r<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Na=typeof window<"u"?window.ResizeObserver:void 0;const er=Symbol("virtualizerRef"),ys="virtualizer-sizer";let Ha;class Oh{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Na(()=>this._hostElementSizeChanged()),this._childrenRO=new Na(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[er]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=Lh(this._hostElement,e),this._scrollerController=new Rh(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,i,o;this._scrollEventListeners.forEach(r=>r.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(o=this._childrenRO)==null||o.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${ys}]`);t||(t=document.createElement("div"),t.setAttribute(ys,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(ys,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||Ha;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const o={...e};delete o.type,t=o}else t=e;i===void 0&&(Ha=i=(await Z(()=>import("./flow-DQ61c9Hr.js"),[])).FlowLayout),this._layout=new i(o=>this._handleLayoutMessage(o),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<e).reduce((r,n)=>r+n.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:o}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){const r=t[o],n=this._first+o;(this._itemsChanged||this._toBeMeasured.has(r))&&(e[n]=i.call(this,r,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},Ih(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new lo)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(ys)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var o;const e=this._hostElement,t=(o=this._scrollerController)==null?void 0:o.element,i=this._layout;if(e&&t&&i){let r,n,a,l;const c=e.getBoundingClientRect();r=0,n=0,a=window.innerHeight,l=window.innerWidth;const d=this._clippingAncestors.map($=>$.getBoundingClientRect());d.unshift(c);for(const $ of d)r=Math.max(r,$.top),n=Math.max(n,$.left),a=Math.min(a,$.bottom),l=Math.min(l,$.right);const p=t.getBoundingClientRect(),h={left:c.left-p.left,top:c.top-p.top},f={width:t.scrollWidth,height:t.scrollHeight},b=r-c.top+e.scrollTop,m=n-c.left+e.scrollLeft,C=Math.max(0,a-r),A=Math.max(0,l-n);i.viewportSize={width:A,height:C},i.viewportScroll={top:b,left:m},i.totalScrollSize=f,i.offsetWithinScroller=h}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,o=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${o}px)`;else{const r=this._hostElement.style;r.minWidth=i?`${i}px`:"100%",r.minHeight=o?`${o}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:o,height:r,xOffset:n,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${t}px)`,o!==void 0&&(c.style.width=o+"px"),r!==void 0&&(c.style.height=r+"px"),c.style.left=n===void 0?null:n+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:o,_lastVisible:r}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-o})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new no({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new ao({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Ih(s){const e=window.getComputedStyle(s);return{marginTop:_s(e.marginTop),marginRight:_s(e.marginRight),marginBottom:_s(e.marginBottom),marginLeft:_s(e.marginLeft)}}function _s(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function qa(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Fh(s,e=!1){const t=[];let i=e?s:qa(s);for(;i!==null;)t.push(i),i=qa(i);return t}function Lh(s,e=!1){let t=!1;return Fh(s,e).filter(i=>{if(t)return!1;const o=getComputedStyle(i);return t=o.position==="fixed",o.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cc=s=>s,Ec=(s,e)=>u`${e}: ${JSON.stringify(s,null,2)}`;class Uh extends Ah{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>Ec(t,i+this._first),this._keyFunction=(t,i)=>Cc(t,i+this._first),this._items=[],e.type!==yi.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return ci(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?je:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const o=e.parentNode;this._makeVirtualizer(o,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(o,r)=>t(o,r+this._first)),i&&(this._keyFunction=(o,r)=>i(o,r+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:o,items:r}=t;this._virtualizer=new Oh({hostElement:e,layout:i,scroller:o}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const Dh=_i(Uh);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wi extends Y{constructor(){super(...arguments),this.items=[],this.renderItem=Ec,this.keyFunction=Cc,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:i,layout:o,scroller:r}=this;return u`${Dh({items:e,renderItem:t,keyFunction:i,layout:o,scroller:r})}`}element(e){var t;return(t=this[er])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[er])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var i;(i=this.element(e))==null||i.scrollIntoView({block:t})}}as([g({attribute:!1})],wi.prototype,"items",void 0);as([g()],wi.prototype,"renderItem",void 0);as([g()],wi.prototype,"keyFunction",void 0);as([g({attribute:!1})],wi.prototype,"layout",void 0);as([g({reflect:!0,type:Boolean})],wi.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",wi);const Pc=50;function Ac(s,e){var i;const t=s.querySelector("lit-virtualizer");if(t){e>=0&&Promise.resolve(t.layoutComplete).then(()=>t.scrollToIndex(e,"nearest")).catch(()=>{});return}(i=s.querySelector(".option.active"))==null||i.scrollIntoView({block:"nearest"})}function co(s){var e;return s.isComposing||s.metaKey||(s.ctrlKey||s.altKey)&&!((e=s.getModifierState)!=null&&e.call(s,"AltGraph"))||s.key.length!==1||s.key===" "?null:s.key}var zh=Object.defineProperty,uo=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&zh(e,t,o),o},rt;const ls=(rt=class extends Ce{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>u` <div
      class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${i=>{i.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}get _options(){var i,o;const e=((i=this.field)==null?void 0:i.possible_values)??rt._EMPTY;if(((o=this._optionsCache)==null?void 0:o.src)===e)return this._optionsCache.out;const t=e.map(r=>({id:r.internal_unique_value,label:r.label,value:r.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var o;const e=this._options,t=this.allowedValues;if(((o=this._selectableCache)==null?void 0:o.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const r=new Set(t);i=e.filter(n=>r.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(e=""){this._open=!0,this._search=e;const t=this._filtered,i=e?-1:t.findIndex(o=>o.value===this.value);this._activeIndex=i>=0?i:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var o;(o=this.renderRoot.querySelector(".search"))==null||o.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>Ac(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){if(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")e.preventDefault(),this._openDropdown();else{const o=co(e);o&&(e.preventDefault(),this._openDropdown(o))}return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(e){return e.length?e.length<=Pc?e.map(this._renderOption):u` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:u`<div class="empty">${k("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:rt._EMPTY;return u`
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
                aria-label=${k("clear","Clear")}
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
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${k("search","Search")}
                aria-label=${k("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
            </div>
          `:v}
    `}},rt.styles=[rs,M`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],rt._EMPTY=[],rt);uo([g({attribute:!1})],ls.prototype,"allowedValues");uo([P()],ls.prototype,"_open");uo([P()],ls.prototype,"_search");uo([P()],ls.prototype,"_activeIndex");let Mh=ls;Q("sfx-meta-select-field",Mh);var Bh=Object.defineProperty,po=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Bh(e,t,o),o},nt;const cs=(nt=class extends Ce{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{const i=this._selected;return u` <div
      class="option ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${i.includes(e.value)}
      @mousedown=${o=>{o.preventDefault(),this._toggle(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      <span class="check ${i.includes(e.value)?"checked":""}">
        ${i.includes(e.value)?"✓":""}
      </span>
      ${e.label}
    </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,o;const e=((i=this.field)==null?void 0:i.possible_values)??nt._EMPTY;if(((o=this._optionsCache)==null?void 0:o.src)===e)return this._optionsCache.out;const t=e.map(r=>({id:r.internal_unique_value,label:r.label,value:r.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var o;const e=this._options,t=this.allowedValues;if(((o=this._selectableCache)==null?void 0:o.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const r=new Set(t);i=e.filter(n=>r.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(e=""){this._open=!0,this._search=e,this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".search"))==null||t.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(o=>o!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i),this._emit("field-blur",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t),this._emit("field-blur",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e),this._emit("field-blur",e)}_clearAll(){this.value=[],this._emit("field-change",[]),this._emit("field-blur",[])}_scrollActive(){this.updateComplete.then(()=>Ac(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){if(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")e.preventDefault(),this._openDropdown();else{const o=co(e);o&&(e.preventDefault(),this._openDropdown(o))}return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}_renderOptions(e){return e.length?e.length<=Pc?e.map(this._renderOption):u` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:u`<div class="empty">${k("noOptions","No options")}</div>`}render(){var o;const e=this._selected,t=this._selectPlaceholder(),i=this._open?this._filtered:nt._EMPTY;return u`
      <div
        class="trigger"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${e.length?e.map(r=>u` <span class="chip">
                  ${this._labelFor(r)}
                  <button
                    class="chip-x"
                    aria-label=${k("removeItem","Remove {{item}}",{item:this._labelFor(r)})}
                    @click=${n=>{n.stopPropagation(),this._remove(r)}}
                  >
                    &times;
                  </button>
                </span>`):u`<span class="placeholder"
              >${((o=this.field)==null?void 0:o.placeholder)||t}</span
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
                placeholder=${k("search","Search")}
                aria-label=${k("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(i)}</div>
              ${this._options.length>0?u`
                    <div class="bulk-actions">
                      <button
                        type="button"
                        class="bulk-btn"
                        @mousedown=${r=>{r.preventDefault(),this._selectAll()}}
                      >
                        ${k("selectAll","Select all")}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${r=>{r.preventDefault(),this._clearAll()}}
                      >
                        ${k("clearAll","Clear all")}
                      </button>
                    </div>
                  `:v}
            </div>
          `:v}
    `}},nt.styles=[rs,ro,M`
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
    `],nt._EMPTY=[],nt);po([g({attribute:!1})],cs.prototype,"allowedValues");po([P()],cs.prototype,"_open");po([P()],cs.prototype,"_search");po([P()],cs.prototype,"_activeIndex");let jh=cs;Q("sfx-meta-multi-select-field",jh);function At(s,e){var t,i;return((t=s.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Tc(s){return s.trim().replace(/\s+/g," ")}function Nh(s){return Tc(s).replace(/\s/g,"-")}function ws(s){return{label:Tc(s),value:Nh(s)}}var Hh=Object.defineProperty,ki=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Hh(e,t,o),o};const _n=class _n extends Ce{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._cancelPendingBlur=()=>{this._blurTimeout&&(clearTimeout(this._blurTimeout),this._blurTimeout=null)}}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}willUpdate(e){var i,o;super.willUpdate(e);const t=e.get("field");e.has("field")&&t&&t.key!==((i=this.field)==null?void 0:i.key)&&((o=this.autocomplete)==null||o.cancel(),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1)}_onInput(e){var i,o;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(o=this.autocomplete)==null||o.search(this.field.ckey,t,r=>{this._results=r,this._loading=!1})}_addTag(e){if(this._tags.some(i=>At(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!At(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(ws(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(ws(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var r;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((r=this.field)==null?void 0:r.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!t.some(a=>At(a,n))).filter(n=>!e||n.label.toLowerCase().includes(e)),o=this._results.filter(n=>!t.some(a=>At(a,n))&&!i.some(a=>At(a,n)));return[...i,...o]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=ws(e);return!this._tags.some(i=>At(i,t))&&!this._suggestions.some(i=>At(i,t))}render(){var o,r;const e=this._tags,t=this._suggestions,i=t.length;return u`
      <div
        class="container"
        @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}
      >
        ${e.map(n=>u` <span class="chip">
              ${n.label}
              <button
                class="chip-x"
                aria-label=${k("removeItem","Remove {{item}}",{item:n.label})}
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
          aria-label=${((o=this.field)==null?void 0:o.title)??k("tags","Tags")}
          placeholder=${e.length?"":((r=this.field)==null?void 0:r.placeholder)||k("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @focus=${this._cancelPendingBlur}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?u`
            <div class="dropdown" role="listbox">
              ${this._loading?u`<div class="loading">${k("loading","Loading")}</div>`:v}
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
                    @mousedown=${n=>{n.preventDefault(),this._addTag(ws(this._query))}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${k("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
                  </div>`:v}
              ${!this._loading&&!t.length&&!this._canCreate?u`<div class="empty">${k("noResults","No results")}</div>`:v}
            </div>
          `:v}
    `}};_n.styles=[ro,M`
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
    `];let lt=_n;ki([g({attribute:!1})],lt.prototype,"autocomplete");ki([P()],lt.prototype,"_query");ki([P()],lt.prototype,"_results");ki([P()],lt.prototype,"_loading");ki([P()],lt.prototype,"_dropdownOpen");ki([P()],lt.prototype,"_activeIndex");Q("sfx-meta-tags-field",lt);var qh=Object.defineProperty,Rc=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&qh(e,t,o),o};const ut=()=>[{label:k("booleanTrue","True"),value:"true"},{label:k("booleanFalse","False"),value:"false"}];var mt;const Xr=(mt=class extends Ce{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=ut().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}static _matchIndex(e){const t=e.toLocaleLowerCase();return ut().findIndex(i=>i.label.toLocaleLowerCase().startsWith(t))}_openDropdown(e=""){this._open=!0;const t=this.value==null?"":String(this.value),i=e?mt._matchIndex(e):-1;this._activeIndex=i>=0?i:Math.max(ut().findIndex(o=>o.value===t),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var o;(o=this.renderRoot.querySelector(".dropdown"))==null||o.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}const t=co(e);if(t){if(e.preventDefault(),!this._open)this._openDropdown(t);else{const o=mt._matchIndex(t);o>=0&&(this._activeIndex=o,this._scrollActive())}return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,ut().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=ut().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<ut().length&&(e.preventDefault(),this._onSelect(ut()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return u`
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
                aria-label=${k("clear","Clear")}
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
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${ut().map((o,r)=>u` <div
                    class="option ${o.value===e?"selected":""} ${r===this._activeIndex?"active":""}"
                    role="option"
                    aria-selected=${o.value===e}
                    @mousedown=${n=>{n.preventDefault(),this._onSelect(o)}}
                    @mouseenter=${()=>{this._activeIndex=r}}
                  >
                    ${o.label}
                  </div>`)}
            </div>
          `:v}
    `}},mt.styles=[rs],mt);Rc([P()],Xr.prototype,"_open");Rc([P()],Xr.prototype,"_activeIndex");let Vh=Xr;Q("sfx-meta-boolean-field",Vh);const wn=class wn extends Ce{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return u`
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
    `}};wn.styles=[Wt];let tr=wn;Q("sfx-meta-number-field",tr);const kn=class kn extends Ce{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return u`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?u`<span class="date-placeholder">${k("pickADate","Pick a date")}</span>`:v}
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
    `}};kn.styles=[Wt,M`
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
    `];let ir=kn;Q("sfx-meta-date-field",ir);const $n=class $n extends Ce{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,o={...this._geo,[e]:i};this.value=o,this._emit("field-change",o)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_renderInput(e,t){return u`
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
        ${this._renderInput("latitude",k("latitude","Latitude"))}
        ${this._renderInput("longitude",k("longitude","Longitude"))}
      </div>
    `}};$n.styles=[Wt,M`
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
    `];let sr=$n;Q("sfx-meta-geo-point-field",sr);var Kh=Object.defineProperty,Yh=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Kh(e,t,o),o};const Gh=kc(),Wh=u`<svg
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
</svg>`,Sn=class Sn extends Ce{constructor(){super(...arguments),this.picking=!1,this._onZoneEnter=()=>this._emitDetail("field-hover",{hovering:!0}),this._onZoneLeave=()=>this._emitDetail("field-hover",{hovering:!1})}get _point(){const e=this.value;return{horizontal:(e==null?void 0:e.horizontal)??"",vertical:(e==null?void 0:e.vertical)??""}}get _hasValue(){const e=this._point;return e.horizontal!==""||e.vertical!==""}_onInput(e,t){const i=t.target.value,o={...this._point,[e]:i};this.value=o,this._emit("field-change",o)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._point)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_onTogglePicking(){this._emitDetail("focus-point-pick-toggle",{picking:!this.picking})}_onReset(e){var i;const t=((i=this.shadowRoot)==null?void 0:i.activeElement)===e.currentTarget;this.value=null,this._emit("field-change",null),this._emit("field-blur",null),t&&this.updateComplete.then(()=>{var o;return(o=this.renderRoot.querySelector(".action"))==null?void 0:o.focus()})}_renderInput(e,t){return u`
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
    `}render(){const e=this.picking?k("focusPointPicking","Picking on image"):this._hasValue?k("focusPointChange","Change the point"):k("focusPointSet","Set focal point");return u`
      <div class="grid">
        ${this._renderInput("horizontal",k("focusPointHorizontal","Horizontal"))}
        ${this._renderInput("vertical",k("focusPointVertical","Vertical"))}
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
          ${this.picking?Wh:Gh}
          <span class="action-label">${e}</span>
        </button>
        ${this._hasValue?u`<button
              type="button"
              class="action action-muted"
              ?disabled=${this.disabled}
              @mouseenter=${this._onZoneEnter}
              @mouseleave=${this._onZoneLeave}
              @mousedown=${t=>t.preventDefault()}
              @click=${this._onReset}
            >
              <span class="action-label">${k("focusPointReset","Reset")}</span>
            </button>`:v}
      </div>

      ${this.picking?u`<div class="hint">
            ${k("focusPointPickingHint","Click the image preview to place the focus point.")}
          </div>`:v}
    `}};Sn.styles=[Wt,M`
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
    `];let qs=Sn;Yh([g({type:Boolean})],qs.prototype,"picking");Q(rh,qs);var Jh=Object.defineProperty,Je=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Jh(e,t,o),o};const Qt={uuid:"__root__",name:"",ltree:""},Cn=class Cn extends Ce{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[Qt],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var o,r,n;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((o=this.field)==null?void 0:o.ckey)??((r=this.field)==null?void 0:r.key)}" model:`,(n=this.field)==null?void 0:n.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(e=""){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query=e,this._activeIndex=-1,this._searchResults=[],this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".search"))==null||t.focus()}),await this._loadCurrentNodes(),e&&this._open&&this._query===e&&this._runSearch(e))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[Qt];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[Qt];const i=t.slice(0,-1),r=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),n=[Qt];let a="";for(let l=0;l<i.length;l++)a=a?`${a}.${i[l]}`:i[l],n.push({uuid:`__seed_${a}`,name:r[l]??i[l],ltree:a});return n}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,o=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=o.nodes,this._loading=!1;const r=this._selectedScalar,n=r?this._currentNodes.findIndex(a=>a.uuid===r||a.slug===r):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){this._runSearch(e.target.value)}_runSearch(e){var i;if(this._query=e,this._activeIndex=-1,!e.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(i=this.taxonomyService)==null||i.cancel();return}this._loading=!0;const t=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,e,o=>{t===this._searchSeq&&(this._searchResults=o,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(o=>o.uuid!==Qt.uuid).map(o=>o.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,o;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(o=this.renderRoot.querySelector(".trigger"))==null||o.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const r=this._currentNodes[this._activeIndex];r.children.count_direct>0&&(e.preventDefault(),this._drillInto(r))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const r=this._searchResults[this._activeIndex];r&&this._selectAutocomplete(r)}else{const r=this._currentNodes[this._activeIndex];r&&this._selectTreeNode(r)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?v:u`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const o=i===e.length-1,r=t.uuid===Qt.uuid?k("rootNode","Root"):t.name;return u`
            ${i>0?u`<span class="crumb-sep">›</span>`:v}
            <button
              class="crumb ${o?"current":""}"
              type="button"
              ?disabled=${o}
              @click=${()=>!o&&this._jumpToCrumb(i)}
            >
              ${r}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return u`<div class="empty">${k("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return u`<div class="empty">${k("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return u`<div class="empty">${k("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return u`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const o=t.children.count_direct>0,r=!!e&&(e===t.uuid||e===t.slug);return u`
            <div
              class="tree-row ${i===this._activeIndex?"active":""} ${r?"selected":""}"
              role="option"
              aria-selected=${r}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>o?this._drillInto(t):this._selectTreeNode(t)}
            >
              <span
                class="tree-radio ${r?"checked":""}"
                role="button"
                aria-label=${k("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${o?u`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:v}
              <span class="tree-chevron ${o?"":"hidden"}" aria-hidden="true">
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
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?u`<div class="empty">${k("loading","Loading")}</div>`:this._searchResults.length===0?u`<div class="empty">${k("noResults","No results")}</div>`:u`
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
    `}render(){var o;if(!this._taxonomySuid)return u`<div class="misconfigured" role="alert">
        ${k("missingTaxonomyConfig","Field is missing taxonomy config")}
      </div>`;const e=this._selectPlaceholder(k("selectANode","Select a node")),t=this._displayPath,i=!!t;return u`
      <button
        class="trigger"
        type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${r=>{if(this._open)return;if(r.key==="ArrowDown"||r.key==="Enter"||r.key===" "){r.preventDefault(),this._openDropdown();return}const n=co(r);n&&(r.preventDefault(),this._openDropdown(n))}}
      >
        ${i?u`<span class="trigger-value" title=${t}>${t}</span>`:u`<span class="placeholder"
              >${((o=this.field)==null?void 0:o.placeholder)||e}</span
            >`}
        ${i&&!this.disabled?u`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${k("clear","Clear")}
                @click=${this._clear}
                @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}
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
                aria-label=${k("searchTaxonomy","Search taxonomy")}
                placeholder=${k("search","Search")}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?v:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:v}
    `}};Cn.styles=[rs,M`
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
    `];let Fe=Cn;Je([g({attribute:!1})],Fe.prototype,"taxonomyService");Je([g({attribute:!1})],Fe.prototype,"entry");Je([P()],Fe.prototype,"_open");Je([P()],Fe.prototype,"_query");Je([P()],Fe.prototype,"_drillStack");Je([P()],Fe.prototype,"_currentNodes");Je([P()],Fe.prototype,"_searchResults");Je([P()],Fe.prototype,"_loading");Je([P()],Fe.prototype,"_activeIndex");Je([P()],Fe.prototype,"_resolvedTaxonomyUuid");Je([P()],Fe.prototype,"_taxonomyResolutionFailed");Q("sfx-meta-taxonomy-node-field",Fe);var Xh=Object.defineProperty,Xe=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Xh(e,t,o),o};const En=class En extends Ce{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set,this._resolvedLookup={bySid:{},bySlug:{}},this._resolvingKeys=new Set,this._cancelPendingBlur=()=>{this._blurTimeout&&(clearTimeout(this._blurTimeout),this._blurTimeout=null)}}get _items(){if(!Array.isArray(this.value))return[];const e=this.value.map(t=>typeof t=="string"?Fp(t)?{sid:t}:{slug:t}:t);return zp(e,this._resolvedLookup)}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichMissingLabels()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}willUpdate(e){var i,o;super.willUpdate(e);const t=e.get("field");e.has("field")&&t&&t.key!==((i=this.field)==null?void 0:i.key)&&((o=this.ultratags)==null||o.cancel(),this._query="",this._results=[],this._loading=!1,this._activeIndex=-1)}updated(e){e.has("value")&&this._maybeEnrichMissingLabels()}async _maybeEnrichMissingLabels(){var c;const e=this.ultratags,t=(c=this.field)==null?void 0:c.key;if(!e||!t)return;const i=this._items;if(i.length===0)return;const o=[],r=[];for(const d of i)d.i18n||(d.sid?this._enrichmentAttempted.has(d.sid)||o.push(d.sid):d.slug&&!this._enrichmentAttempted.has(d.slug)&&r.push(d.slug));if(o.length===0&&r.length===0)return;const n=[...o,...r];for(const d of n)this._enrichmentAttempted.add(d);this._resolvingKeys=new Set([...this._resolvingKeys,...n]);const a=[];if(o.length>0)try{const d=await e.getBySids({sids:o,format:xs});a.push(...d.items||[])}catch{}if(r.length>0)try{const d=await e.getBySlugs({slugs:r,meta:t,format:xs});a.push(...d.items||[])}catch{}const l=new Set(this._resolvingKeys);for(const d of n)l.delete(d);this._resolvingKeys=l,a.length!==0&&(this._resolvedLookup=Fa(this._resolvedLookup,Ia(a)))}_selectedKeys(){return new Set(this._items.flatMap(Ie))}_isSelected(e,t=this._selectedKeys()){return Ie(e).some(i=>t.has(i))}_labelForItem(e){return Hr(e,this._currentLang,this._defaultLang)}_isResolving(e){return e.i18n?!1:!!e.sid&&this._resolvingKeys.has(e.sid)||!!e.slug&&this._resolvingKeys.has(e.slug)}get _dropdownOptions(){const e=this._selectedKeys(),i=(this._isRestricted?this.restrictToItems||[]:this._results).filter(o=>!this._isSelected(o,e)).map(o=>({item:o,label:this._labelForItem(o)}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?i.filter(r=>r.label.toLowerCase().includes(o)):i}return i}get _isSearching(){return this._query.trim().length>=Oa}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim();if(!La(e))return!1;const t=Ua(e),i=(o,r)=>r.toLowerCase()===e.toLowerCase()||!!t&&o.slug===t;return this._items.some(o=>i(o,this._labelForItem(o)))?!1:!this._dropdownOptions.some(o=>i(o.item,o.label))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var r,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((r=this.field)!=null&&r.key)){this._results=[],this._loading=!1,(n=this.ultratags)==null||n.cancel();return}const i=this.ultratags;if(!i)return;const o=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:o,limit:Rp,format:xs}).then(a=>{this._query.trim().toLowerCase()===o&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===o&&(this._results=[],this._loading=!1)})}_appendItem({slug:e,sid:t,uuid:i,i18n:o}){const r=[...this._items,{slug:e,sid:t,uuid:i,i18n:o}];this.value=r,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",r),this.updateComplete.then(()=>{var n;(n=this.renderRoot.querySelector(".input"))==null||n.focus()})}_addOption(e){this._isSelected(e)||(this._resolvedLookup=Fa(this._resolvedLookup,Ia([e])),this._appendItem(e))}async _createFromQuery(){const e=this._query.trim();if(!La(e))return;const t=await this._findExistingBySlug(e);if(t){this._addOption(t);return}const i={i18n:{[this._currentLang]:e}};this._isSelected(i)||this._appendItem(i)}async _findExistingBySlug(e){var o,r;const t=Ua(e),i=this.ultratags;if(!(!t||!i||!((o=this.field)!=null&&o.key)))try{return(r=(await i.getBySlugs({slugs:[t],meta:this.field.key,format:xs})).items)==null?void 0:r.find(a=>a.slug===t)}catch{return}}_removeItem(e){const t=Ns(this._items,[e],!0);this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addOption(i[this._activeIndex].item):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addOption(i[0].item);break}}}render(){var n,a;const e=this._items,t=this._dropdownOptions,i=t.length,o=this._query.trim(),r=((n=this.field)==null?void 0:n.placeholder)||(this._isRestricted?k("searchTagsToRemove","Search tags to remove"):k("addCustomTags","Add custom tags"));return u`
      <div
        class="container"
        @click=${()=>{var l;return(l=this.renderRoot.querySelector(".input"))==null?void 0:l.focus()}}
      >
        ${e.map(l=>{const c=this._isResolving(l),d=c?"":this._labelForItem(l),p=Ie(l)[0]||d;return u` <span
            class="chip ${c?"chip-loading":""}"
            title=${c?k("loading","Loading"):d}
            aria-busy=${c}
          >
            ${c?u`<span class="chip-skeleton"></span>`:d}
            <button
              class="chip-x"
              aria-label=${k("removeItem","Remove {{item}}",{item:c?p:d})}
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
          aria-label=${((a=this.field)==null?void 0:a.title)??k("customTags","Custom tags")}
          placeholder=${e.length?"":r}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @focus=${()=>{this._cancelPendingBlur(),this._dropdownOpen=!0}}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen?u`
            <div class="dropdown" role="listbox">
              ${!this._isRestricted&&!this._isSearching?u`<div class="hint">
                    ${k("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:Oa})}
                  </div>`:v}
              ${!this._isRestricted&&this._isSearching&&this._loading?u`<div class="loading">${k("loading","Loading")}</div>`:v}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((l,c)=>u` <div
                        class="option ${c===this._activeIndex?"active":""}"
                        role="option"
                        @mousedown=${d=>{d.preventDefault(),this._addOption(l.item)}}
                        @mouseenter=${()=>{this._activeIndex=c}}
                      >
                        ${l.label}
                      </div>`):v}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?u`<div class="empty">${k("noResults","No results")}</div>`:v}
              ${this._canCreate?u` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${l=>{l.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${k("createTag","Create '{{tag}}'",{tag:o})}
                  </div>`:v}
            </div>
          `:v}
    `}};En.styles=[ro,M`
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
    `];let Le=En;Xe([g({attribute:!1})],Le.prototype,"ultratags");Xe([g({attribute:!1})],Le.prototype,"language");Xe([g({attribute:!1})],Le.prototype,"defaultLanguage");Xe([g({attribute:!1})],Le.prototype,"restrictToItems");Xe([P()],Le.prototype,"_query");Xe([P()],Le.prototype,"_results");Xe([P()],Le.prototype,"_loading");Xe([P()],Le.prototype,"_dropdownOpen");Xe([P()],Le.prototype,"_activeIndex");Xe([P()],Le.prototype,"_resolvedLookup");Xe([P()],Le.prototype,"_resolvingKeys");Q("sfx-meta-ultratags-field",Le);const Oc=M`
  .att-thumb {
    width: 18px;
    height: 18px;
    flex: none;
    border-radius: 3px;
    object-fit: cover;
    background: var(--sfx-up-hover, #f1f5f9);
  }
`;function Zh(s){const e=s.lastIndexOf(".");return e>0?s.slice(e+1).toUpperCase():""}function Ic(s){const t=Bp(s)??bt(Zh(qi(s)));return u`<img
    class="att-thumb"
    src=${t}
    alt=""
    @error=${i=>{const o=i.target,r=bt();!o.dataset.fallback&&o.src!==r&&(o.dataset.fallback="1",o.src=r)}}
  />`}var Qh=Object.defineProperty,ho=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Qh(e,t,o),o};const Pn=class Pn extends Ce{constructor(){super(...arguments),this.excludeIds=[],this.max=fc,this._picking=!1}get _items(){return xt(this.value)}async _browse(){if(!this.pickAssets||this._picking||this.disabled)return;const e=this._items,t=this.max-e.length;if(!(t<=0)){this._picking=!0;try{const i=await this.pickAssets({field:{key:this.field.key,ckey:this.field.ckey,title:this.field.title},max:t,excludeIds:[...new Set([...this.excludeIds,...e.map(r=>r.uuid)])],selected:e});if(!(i!=null&&i.length))return;const o=xt([...e,...i]).slice(0,this.max);this.value=o,this._emit("field-change",o)}finally{this._picking=!1}}}_remove(e){const t=this._items.filter(i=>i.uuid!==e.uuid);this.value=t,this._emit("field-change",t)}render(){const e=this._items,t=e.length>=this.max;return u`
      <div class="container">
        <button
          type="button"
          class="browse"
          ?disabled=${this.disabled||this._picking||t||!this.pickAssets}
          @click=${this._browse}
        >
          ${k("browseAsset","Browse asset")}
        </button>
        ${e.map(i=>{const o=qi(i);return u`<span class="chip" title=${o}>
            ${Ic(i)}
            <span class="chip-label">${o}</span>
            ${this.disabled?v:u`<button
                  type="button"
                  class="chip-x"
                  aria-label=${k("removeItem","Remove {{item}}",{item:o})}
                  @click=${r=>{r.stopPropagation(),this._remove(i)}}
                >
                  &times;
                </button>`}
          </span>`})}
        ${e.length?v:u`<span class="placeholder">${k("selectAsset","Select asset")}</span>`}
      </div>
    `}};Pn.styles=[ro,Oc,M`
      :host {
        display: block;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px 6px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
      }

      .browse {
        flex: none;
        border: none;
        border-radius: 4px;
        padding: 3px 10px;
        font-family: inherit;
        font-size: 12px;
        font-weight: 500;
        color: #fff;
        background: var(--sfx-up-primary, #5d6ae0);
        cursor: pointer;
      }
      .browse[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .placeholder {
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }

      .chip {
        max-width: 100%;
        min-width: 0;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 4px;
        padding: 2px 6px;
      }
      .chip-label {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `];let Nt=Pn;ho([g({attribute:!1})],Nt.prototype,"pickAssets");ho([g({attribute:!1})],Nt.prototype,"excludeIds");ho([g({type:Number})],Nt.prototype,"max");ho([P()],Nt.prototype,"_picking");Q("sfx-meta-attachments-field",Nt);var ef=Object.defineProperty,tf=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&ef(e,t,o),o};const Zr=()=>k("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Qr=()=>k("readOnlyFieldMessage","This field is read-only."),Fc=u`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${ee`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,An=class An extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.reason="unsupported"}render(){const e=this.reason==="read-only",t=e?Qr():Zr(),i=e?k("readOnlyFieldLabel","Read-only"):k("notEditableDuringUpload","Not editable during upload");return u`
      <div class="unsupported" title=${t} aria-label=${t} aria-disabled="true" role="note">
        ${Fc}
        <span class="unsupported-text" aria-hidden="true">${i}</span>
      </div>
    `}};An.styles=M`
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
  `;let Vs=An;tf([g({reflect:!0})],Vs.prototype,"reason");Q("sfx-meta-unsupported-field",Vs);var sf=Object.defineProperty,He=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&sf(e,t,o),o};const Tn=class Tn extends Y{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.attachmentExcludeIds=[],this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(ue(e))return u`<sfx-meta-unsupported-field reason="read-only"></sfx-meta-unsupported-field>`;if(Mr(e,{hasAssetPicker:!!this.pickAssets}))return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"attachments-assets":return u`<sfx-meta-attachments-field
          .field=${e}
          .value=${t}
          .pickAssets=${this.pickAssets}
          .excludeIds=${this.attachmentExcludeIds}
          ?disabled=${i}
        ></sfx-meta-attachments-field>`;case"text":case"attachment-uri":return u`<sfx-meta-text-field
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
        ></sfx-meta-text-field>`}}};Tn.styles=M`
    :host {
      display: block;
    }
  `;let ke=Tn;He([g({attribute:!1})],ke.prototype,"field");He([g({attribute:!1})],ke.prototype,"value");He([g({attribute:!1})],ke.prototype,"autocomplete");He([g({attribute:!1})],ke.prototype,"taxonomyService");He([g({attribute:!1})],ke.prototype,"taxonomyEntry");He([g({attribute:!1})],ke.prototype,"ultratags");He([g({attribute:!1})],ke.prototype,"language");He([g({attribute:!1})],ke.prototype,"defaultLanguage");He([g({attribute:!1})],ke.prototype,"ultratagsRestrictToItems");He([g({attribute:!1})],ke.prototype,"allowedValues");He([g({attribute:!1})],ke.prototype,"pickAssets");He([g({attribute:!1})],ke.prototype,"attachmentExcludeIds");He([g({type:Boolean})],ke.prototype,"disabled");Q("sfx-metadata-field-edit",ke);var of=Object.defineProperty,ds=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&of(e,t,o),o};const Rn=class Rn extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.taxonomyEntry=null}_formatValue(){var i,o,r,n;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(o=this.field.possible_values)==null?void 0:o.find(l=>l.internal_unique_value===e||l.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var c;const l=(c=this.field.possible_values)==null?void 0:c.find(d=>d.internal_unique_value===a||d.api_value===a);return(l==null?void 0:l.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",l=this.defaultLanguage||a;return e.map(c=>typeof c=="string"?c:Hr(c,a,l)).filter(Boolean).join(", ")}case"taxonomy-node":return(r=this.taxonomyEntry)!=null&&r.path?this.taxonomyEntry.path:(n=this.taxonomyEntry)!=null&&n.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"focus-point":{const a=e;return!a||a.horizontal===""||a.horizontal==null||a.vertical===""||a.vertical==null?"":`${a.horizontal}% × ${a.vertical}%`}case"attachments-assets":case"asset-attachments":return xt(e).map(qi).join(", ");case"integer-list":return!Array.isArray(e)||e.length===0?"":e.map(String).join(", ");case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&zr(this.field)&&!ue(this.field))return u`
        <div class="value empty" title=${Zr()}>
          ${k("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?u`
        <div class="value">
          <a
            class="link"
            href=${e}
            target="_blank"
            rel="noopener noreferrer"
            @click=${o=>o.stopPropagation()}
            >${e}</a
          >
        </div>
      `:u`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Rn.styles=M`
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
  `;let yt=Rn;ds([g({attribute:!1})],yt.prototype,"field");ds([g({attribute:!1})],yt.prototype,"value");ds([g({attribute:!1})],yt.prototype,"taxonomyEntry");ds([g({attribute:!1})],yt.prototype,"language");ds([g({attribute:!1})],yt.prototype,"defaultLanguage");Q("sfx-metadata-field-view",yt);var rf=Object.defineProperty,fo=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&rf(e,t,o),o};const On=class On extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const o of t.variants)e.push({groupUuid:t.uuid,value:o.api_value,label:o.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var o;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const r of t){const n=this.selectedFilters[r.uuid]??((o=r.variants[0])==null?void 0:o.api_value),a=r.variants.find(l=>l.api_value===n);a&&i.push(t.length===1?a.label:`${r.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return v;const t=this._options,i=k("regionalFiltersDropdownLabel","Regional settings"),o=this._triggerSummary(i);return u`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${i} — ${o}`}
        title=${o}
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
              ${t.map((r,n)=>this._renderOption(r,n,r.value===this.selectedFilters[r.groupUuid]))}
            </div>
          `:v}
    `}_renderOption(e,t,i){const o=this._activeIndex===t;return u`
      ${e.isGroupStart?u`<div class="group-header">${e.groupLabel}</div>`:v}
      <div
        class="option ${i?"selected":""} ${o?"active":""}"
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
    `}};On.styles=[rs,M`
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
    `];let Ht=On;fo([g({attribute:!1})],Ht.prototype,"groups");fo([g({attribute:!1})],Ht.prototype,"selectedFilters");fo([P()],Ht.prototype,"_open");fo([P()],Ht.prototype,"_activeIndex");Q("sfx-regional-settings",Ht);const en="system.tags",nf="__tags__";function or(s){return s===en}function af(s){return{key:en,ckey:"",uuid:"system-tags",title:s("tagsLabel","Tags"),type:"tags",placeholder:s("addTags","Add tags"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function lf(s,e){const t=af(e);let i=!1,o=s.groups.map(a=>!i&&a.isRoot?(i=!0,{...a,fields:[...a.fields,t]}):a);i||(o=[{uuid:nf,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...o]);const r=o.flatMap(a=>a.fields),n=new Map(r.map(a=>[a.key,a]));return{...s,groups:o,fields:r,fieldsByKey:n}}var cf=Object.defineProperty,us=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&cf(e,t,o),o};const df=(s,e)=>typeof e=="string"?e:s,In=class In extends Y{constructor(){super(...arguments),this.product={},this.disabled=!1,this.t=df,this._collapsed=!1,this._errors={}}willUpdate(e){e.has("product")&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent("product-blur",{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;const t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError("ref")}_onRefBlur(e){const t=e.target.value,i=Yp(t);if(i){this._errors={...this._errors,ref:i};return}this._clearError("ref"),this._emit("ref",t===""?void 0:t)}_onPositionInput(){this._clearError("position")}_onPositionBlur(e){const t=e.target.value,i=Gp(t);if(i){this._errors={...this._errors,position:i};return}this._clearError("position"),t===""||t==null?this._emit("position",void 0):this._emit("position",Number(t))}_onKeydown(e){var t,i;if(e.key==="Enter")e.target.blur();else if(e.key==="Escape"){const o=e.target,r=o.dataset.key;r==="ref"&&(o.value=((t=this.product)==null?void 0:t.ref)??""),r==="position"&&(o.value=((i=this.product)==null?void 0:i.position)==null?"":String(this.product.position)),r&&this._clearError(r),o.blur()}}_renderRow(e,t,i){const o=this._errors[e],r=o?this.t(o,o):"";return u`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${i}
          ${o?u`<div class="field-error" role="alert">${r}</div>`:v}
        </div>
      </div>
    `}render(){var o,r;const e=!this._collapsed,t=((o=this.product)==null?void 0:o.ref)??"",i=((r=this.product)==null?void 0:r.position)==null?"":String(this.product.position);return u`
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
    `}};In.styles=[Wt,$c,M`
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
    `];let _t=In;us([g({attribute:!1})],_t.prototype,"product");us([g({type:Boolean})],_t.prototype,"disabled");us([g({attribute:!1})],_t.prototype,"t");us([P()],_t.prototype,"_collapsed");us([P()],_t.prototype,"_errors");Q("sfx-product-fields-form",_t);const Va={text:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${ee`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"focus-point":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><line x1="8" y1="4.5" x2="8" y2="6.5"/><line x1="8" y1="9.5" x2="8" y2="11.5"/><line x1="3.5" y1="8" x2="5.5" y2="8"/><line x1="10.5" y1="8" x2="12.5" y2="8"/><circle cx="8" cy="8" r="1.25"/>`}
  </svg>`,"integer-list":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${ee`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${ee`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${ee`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function uf(s){return Va[s]??Va.text}function pf(s,e,t){let o=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[r,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(r)}=${encodeURIComponent(n)}`);return o}function hf(s,e){const t=new XMLHttpRequest;let i=!1;const o=pf(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):fi(n)?e.onComplete(Fr(n,s)):e.onError(new Error(js(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const r=new FormData;if(s.file){const n={name:s.name,type:s.type};r.append("info[files[]]",JSON.stringify(n)),Object.keys(s.meta).length>0&&r.append("meta[files[]]",JSON.stringify(s.meta)),s.tags.length>0&&r.append("tags[files[]]",JSON.stringify(s.tags)),Vr(s.product)&&r.append("product[files[]]",JSON.stringify(Kr(s.product))),r.append("files[]",s.file,s.name)}return t.send(r),{abort(){i=!0,t.abort()}}}function go(s){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":s}}function Ct(s){return s.replace(/\/+$/,"")}const ff={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function ps(s){return ff[s]??s}function Nb(s,e){const t=Ct(s),i=btoa(JSON.stringify({origin:window.location.origin})),o=ps(e);return`${t}/${o}/connect?state=${encodeURIComponent(i)}`}async function gf(s,e,t,i="",o){const r=Ct(s),n=i?`/${i}`:"",a=ps(e),l=await fetch(`${r}/${a}/list${n}`,{method:"GET",headers:go(t),credentials:"same-origin",signal:o});if(l.status===401)throw new tn;if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function mf(s,e,t,i){const o=Ct(s),r=await fetch(`${o}/${t}`,{method:"GET",headers:go(e),credentials:"same-origin",signal:i});if(r.status===401)throw new tn;if(!r.ok){const n=await r.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${r.status})`)}return r.json()}async function Hb(s,e,t,i,o,r){const n=[];async function a(l,c){let d=null,p=!0;do{if(r!=null&&r.aborted)throw new DOMException("Aborted","AbortError");const h=p?await gf(s,e,t,l,r):await mf(s,t,d,r);p=!1,d=h.nextPagePath;for(const f of h.items){if(r!=null&&r.aborted)throw new DOMException("Aborted","AbortError");if(f.isFolder){const b=c?`${c}/${f.name}`:f.name;await a(f.requestPath,b)}else n.push({...f,relativeFolder:c})}}while(d)}return await a(i,o),n}async function qb(s,e,t,i){const o=Ct(s),r=ps(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${o}/search/${r}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function vf(s,e,t,i,o,r=!1){const n=Ct(s),a=ps(e),l=r?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,c=r?{Accept:"application/json","Content-Type":"application/json"}:go(t),d=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(d.status===401)throw new tn;if(!d.ok){const p=await d.json().catch(()=>null);throw new Error((p==null?void 0:p.message)||`Companion upload failed (HTTP ${d.status})`)}return d.json()}async function bf(s,e,t){const i=Ct(s),o=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!o.ok){const r=await o.json().catch(()=>null);throw new Error((r==null?void 0:r.message)||`Could not fetch URL metadata (HTTP ${o.status})`)}return o.json()}async function xf(s,e,t,i){const o=Ct(s),r=await fetch(`${o}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!r.ok){const n=await r.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${r.status})`)}return r.json()}async function Vb(s,e,t){const i=Ct(s),o=ps(e),r=await fetch(`${i}/${o}/logout`,{method:"GET",headers:go(t),credentials:"same-origin"});return r.ok?r.json():{ok:!1,revoked:!1}}function yf(s){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(s))==null?void 0:o[1])??s;return`${/^https:\/\//i.test(s)?"wss":"ws"}://${t}`}class tn extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Lc(s,e,t){let o=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[r,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(r)}=${encodeURIComponent(n)}`);return o}function Uc(s,e){const t={name:s.name,type:s.type,"filerobot-folder":e};return s.meta&&Object.keys(s.meta).length>0&&(t.meta=JSON.stringify(s.meta)),s.tags&&s.tags.length>0&&(t.tags=JSON.stringify(s.tags)),Vr(s.product)&&(t.product=JSON.stringify(Kr(s.product))),t}function Dc(s){const t=`${yf(s.companionUrl)}/api/${s.token}`;let i;try{i=new WebSocket(t)}catch{return s.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const r=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,c;if(!o)try{const d=JSON.parse(n.data);switch(d.action){case"progress":{const p=d.payload,h=p.bytesUploaded??0,f=p.bytesTotal??(s.expectedSize||1);s.onProgress(h,f);break}case"success":{const p=d.payload;if(r(),i.close(),(a=p.response)!=null&&a.responseText)try{const h=JSON.parse(p.response.responseText);if(h.status==="success"){s.onComplete(h);return}if(fi(h)){s.onComplete(Fr(h,s.uploadFile));return}s.onError(new Error(js(h,"Upload failed")));return}catch{}s.onError(new Error("Upload completed but no valid response received"));break}case"error":{const p=d.payload;r(),i.close();let h=((l=p.error)==null?void 0:l.message)||"Upload failed";if((c=p.response)!=null&&c.responseText)try{const f=JSON.parse(p.response.responseText);h=js(f,h)}catch{}s.onError(new Error(h));break}}}catch{}},i.onerror=()=>{o||(r(),s.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(r(),s.onError(new Error("Upload progress connection closed unexpectedly")))},i}function zc(s){if(s){s.onmessage=null,s.onerror=null,s.onclose=null;try{s.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}s.close()}}async function _f(s,e,t,i,o,r,n){const a=s.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:o,size:r,metadata:n})});if(!l.ok){const c=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${c}`)}return l.json()}function wf(s,e){const t=s.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,o=null;const r=Lc(e.apiBase,e.folder,e.extraParams),n=Uc(s,e.folder);return(t.pickerAccessToken?_f(t.companionUrl,t.pickerAccessToken,t.fileId,r,e.authHeaders,t.size,n):vf(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:r,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(l=>{i||(o=Dc({companionUrl:t.companionUrl,token:l.token,uploadFile:s,expectedSize:t.size,onProgress:(c,d)=>{i||e.onProgress(c,d)},onComplete:c=>{i||e.onComplete(c)},onError:c=>{i||e.onError(c)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,zc(o),o=null}}}function kf(s,e){const t=s.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,o=null;const r=new AbortController,n=Lc(e.apiBase,e.folder,e.extraParams);return bf(e.companionUrl,t,r.signal).then(a=>{var c;if(i)return null;(c=e.onMeta)==null||c.call(e,{name:a.name,type:a.type,size:a.size});const l=Uc(s,e.folder);return a.name&&!s.nameIsUserDefined&&(l.name=a.name),a.type&&(l.type=a.type),xf(e.companionUrl,t,{fileId:s.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},r.signal).then(d=>({result:d,size:a.size}))}).then(a=>{i||!a||(o=Dc({companionUrl:e.companionUrl,token:a.result.token,uploadFile:s,expectedSize:a.size,onProgress:(l,c)=>{i||e.onProgress(l,c)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,r.abort(),zc(o),o=null}}}function rr(s){"@babel/helpers - typeof";return rr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rr(s)}function $f(s,e,t){return Object.defineProperty(s,"prototype",{writable:!1}),s}function Sf(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Cf(s,e,t){return e=Gi(e),Ef(s,sn()?Reflect.construct(e,t||[],Gi(s).constructor):e.apply(s,t))}function Ef(s,e){if(e&&(rr(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pf(s)}function Pf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Af(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Yi(s,e)}function nr(s){var e=typeof Map=="function"?new Map:void 0;return nr=function(i){if(i===null||!Rf(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return Tf(i,arguments,Gi(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Yi(o,i)},nr(s)}function Tf(s,e,t){if(sn())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(s.bind.apply(s,i));return t&&Yi(o,t.prototype),o}function sn(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sn=function(){return!!s})()}function Rf(s){try{return Function.toString.call(s).indexOf("[native code]")!==-1}catch{return typeof s=="function"}}function Yi(s,e){return Yi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Yi(s,e)}function Gi(s){return Gi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Gi(s)}var Oi=(function(s){function e(t){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Sf(this,e),i=Cf(this,e,[t]),i.originalRequest=r,i.originalResponse=n,i.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),r!=null){var a=r.getHeader("X-Request-ID")||"n/a",l=r.getMethod(),c=r.getURL(),d=n?n.getStatus():"n/a",p=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(c,", response code: ").concat(d,", response text: ").concat(p,", request id: ").concat(a,")")}return i.message=t,i}return Af(e,s),$f(e)})(nr(Error));function Wi(s){"@babel/helpers - typeof";return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wi(s)}function Of(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function If(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Lf(i.key),i)}}function Ff(s,e,t){return e&&If(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Lf(s){var e=Uf(s,"string");return Wi(e)=="symbol"?e:e+""}function Uf(s,e){if(Wi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Wi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var Df=(function(){function s(){Of(this,s)}return Ff(s,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Mc="3.7.8",zf=Mc,$i=typeof Buffer=="function",Ka=typeof TextDecoder=="function"?new TextDecoder:void 0,Ya=typeof TextEncoder=="function"?new TextEncoder:void 0,Mf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Ii=Array.prototype.slice.call(Mf),ks=(s=>{let e={};return s.forEach((t,i)=>e[t]=i),e})(Ii),Bf=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,be=String.fromCharCode.bind(String),Ga=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):s=>new Uint8Array(Array.prototype.slice.call(s,0)),Bc=s=>s.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),jc=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),Nc=s=>{let e,t,i,o,r="";const n=s.length%3;for(let a=0;a<s.length;){if((t=s.charCodeAt(a++))>255||(i=s.charCodeAt(a++))>255||(o=s.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|o,r+=Ii[e>>18&63]+Ii[e>>12&63]+Ii[e>>6&63]+Ii[e&63]}return n?r.slice(0,n-3)+"===".substring(n):r},on=typeof btoa=="function"?s=>btoa(s):$i?s=>Buffer.from(s,"binary").toString("base64"):Nc,ar=$i?s=>Buffer.from(s).toString("base64"):s=>{let t=[];for(let i=0,o=s.length;i<o;i+=4096)t.push(be.apply(null,s.subarray(i,i+4096)));return on(t.join(""))},Ts=(s,e=!1)=>e?Bc(ar(s)):ar(s),jf=s=>{if(s.length<2){var e=s.charCodeAt(0);return e<128?s:e<2048?be(192|e>>>6)+be(128|e&63):be(224|e>>>12&15)+be(128|e>>>6&63)+be(128|e&63)}else{var e=65536+(s.charCodeAt(0)-55296)*1024+(s.charCodeAt(1)-56320);return be(240|e>>>18&7)+be(128|e>>>12&63)+be(128|e>>>6&63)+be(128|e&63)}},Nf=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Hc=s=>s.replace(Nf,jf),Wa=$i?s=>Buffer.from(s,"utf8").toString("base64"):Ya?s=>ar(Ya.encode(s)):s=>on(Hc(s)),pi=(s,e=!1)=>e?Bc(Wa(s)):Wa(s),Ja=s=>pi(s,!0),Hf=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,qf=s=>{switch(s.length){case 4:var e=(7&s.charCodeAt(0))<<18|(63&s.charCodeAt(1))<<12|(63&s.charCodeAt(2))<<6|63&s.charCodeAt(3),t=e-65536;return be((t>>>10)+55296)+be((t&1023)+56320);case 3:return be((15&s.charCodeAt(0))<<12|(63&s.charCodeAt(1))<<6|63&s.charCodeAt(2));default:return be((31&s.charCodeAt(0))<<6|63&s.charCodeAt(1))}},qc=s=>s.replace(Hf,qf),Vc=s=>{if(s=s.replace(/\s+/g,""),!Bf.test(s))throw new TypeError("malformed base64.");s+="==".slice(2-(s.length&3));let e,t,i,o=[];for(let r=0;r<s.length;)e=ks[s.charAt(r++)]<<18|ks[s.charAt(r++)]<<12|(t=ks[s.charAt(r++)])<<6|(i=ks[s.charAt(r++)]),t===64?o.push(be(e>>16&255)):i===64?o.push(be(e>>16&255,e>>8&255)):o.push(be(e>>16&255,e>>8&255,e&255));return o.join("")},rn=typeof atob=="function"?s=>atob(jc(s)):$i?s=>Buffer.from(s,"base64").toString("binary"):Vc,Kc=$i?s=>Ga(Buffer.from(s,"base64")):s=>Ga(rn(s).split("").map(e=>e.charCodeAt(0))),Yc=s=>Kc(Gc(s)),Vf=$i?s=>Buffer.from(s,"base64").toString("utf8"):Ka?s=>Ka.decode(Kc(s)):s=>qc(rn(s)),Gc=s=>jc(s.replace(/[-_]/g,e=>e=="-"?"+":"/")),lr=s=>Vf(Gc(s)),Kf=s=>{if(typeof s!="string")return!1;const e=s.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Wc=s=>({value:s,enumerable:!1,writable:!0,configurable:!0}),Jc=function(){const s=(e,t)=>Object.defineProperty(String.prototype,e,Wc(t));s("fromBase64",function(){return lr(this)}),s("toBase64",function(e){return pi(this,e)}),s("toBase64URI",function(){return pi(this,!0)}),s("toBase64URL",function(){return pi(this,!0)}),s("toUint8Array",function(){return Yc(this)})},Xc=function(){const s=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Wc(t));s("toBase64",function(e){return Ts(this,e)}),s("toBase64URI",function(){return Ts(this,!0)}),s("toBase64URL",function(){return Ts(this,!0)})},Yf=()=>{Jc(),Xc()},Gf={version:Mc,VERSION:zf,atob:rn,atobPolyfill:Vc,btoa:on,btoaPolyfill:Nc,fromBase64:lr,toBase64:pi,encode:pi,encodeURI:Ja,encodeURL:Ja,utob:Hc,btou:qc,decode:lr,isValid:Kf,fromUint8Array:Ts,toUint8Array:Yc,extendString:Jc,extendUint8Array:Xc,extendBuiltins:Yf};var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lo,Za;function Jf(){return Za||(Za=1,Lo=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),Lo}var $s={},Qa;function Xf(){if(Qa)return $s;Qa=1;var s=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function o(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},c;c=a.exec(n);){var d=t(c[1]),p=t(c[2]);d===null||p===null||d in l||(l[d]=p)}return l}function r(n,a){a=a||"";var l=[],c,d;typeof a!="string"&&(a="?");for(d in n)if(s.call(n,d)){if(c=n[d],!c&&(c===null||c===e||isNaN(c))&&(c=""),d=i(d),c=i(c),d===null||c===null)continue;l.push(d+"="+c)}return l.length?a+l.join("&"):""}return $s.stringify=r,$s.parse=o,$s}var Uo,el;function Zf(){if(el)return Uo;el=1;var s=Jf(),e=Xf(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l($){return($||"").toString().replace(t,"")}var c=[["#","hash"],["?","query"],function(E,y){return h(y.protocol)?E.replace(/\\/g,"/"):E},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function p($){var E;typeof window<"u"?E=window:typeof Xa<"u"?E=Xa:typeof self<"u"?E=self:E={};var y=E.location||{};$=$||y;var w={},O=typeof $,T;if($.protocol==="blob:")w=new m(unescape($.pathname),{});else if(O==="string"){w=new m($,{});for(T in d)delete w[T]}else if(O==="object"){for(T in $)T in d||(w[T]=$[T]);w.slashes===void 0&&(w.slashes=o.test($.href))}return w}function h($){return $==="file:"||$==="ftp:"||$==="http:"||$==="https:"||$==="ws:"||$==="wss:"}function f($,E){$=l($),$=$.replace(i,""),E=E||{};var y=n.exec($),w=y[1]?y[1].toLowerCase():"",O=!!y[2],T=!!y[3],U=0,D;return O?T?(D=y[2]+y[3]+y[4],U=y[2].length+y[3].length):(D=y[2]+y[4],U=y[2].length):T?(D=y[3]+y[4],U=y[3].length):D=y[4],w==="file:"?U>=2&&(D=D.slice(2)):h(w)?D=y[4]:w?O&&(D=D.slice(2)):U>=2&&h(E.protocol)&&(D=y[4]),{protocol:w,slashes:O||h(w),slashesCount:U,rest:D}}function b($,E){if($==="")return E;for(var y=(E||"/").split("/").slice(0,-1).concat($.split("/")),w=y.length,O=y[w-1],T=!1,U=0;w--;)y[w]==="."?y.splice(w,1):y[w]===".."?(y.splice(w,1),U++):U&&(w===0&&(T=!0),y.splice(w,1),U--);return T&&y.unshift(""),(O==="."||O==="..")&&y.push(""),y.join("/")}function m($,E,y){if($=l($),$=$.replace(i,""),!(this instanceof m))return new m($,E,y);var w,O,T,U,D,q,W=c.slice(),he=typeof E,z=this,le=0;for(he!=="object"&&he!=="string"&&(y=E,E=null),y&&typeof y!="function"&&(y=e.parse),E=p(E),O=f($||"",E),w=!O.protocol&&!O.slashes,z.slashes=O.slashes||w&&E.slashes,z.protocol=O.protocol||E.protocol||"",$=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||a.test($))||!O.slashes&&(O.protocol||O.slashesCount<2||!h(z.protocol)))&&(W[3]=[/(.*)/,"pathname"]);le<W.length;le++){if(U=W[le],typeof U=="function"){$=U($,z);continue}T=U[0],q=U[1],T!==T?z[q]=$:typeof T=="string"?(D=T==="@"?$.lastIndexOf(T):$.indexOf(T),~D&&(typeof U[2]=="number"?(z[q]=$.slice(0,D),$=$.slice(D+U[2])):(z[q]=$.slice(D),$=$.slice(0,D)))):(D=T.exec($))&&(z[q]=D[1],$=$.slice(0,D.index)),z[q]=z[q]||w&&U[3]&&E[q]||"",U[4]&&(z[q]=z[q].toLowerCase())}y&&(z.query=y(z.query)),w&&E.slashes&&z.pathname.charAt(0)!=="/"&&(z.pathname!==""||E.pathname!=="")&&(z.pathname=b(z.pathname,E.pathname)),z.pathname.charAt(0)!=="/"&&h(z.protocol)&&(z.pathname="/"+z.pathname),s(z.port,z.protocol)||(z.host=z.hostname,z.port=""),z.username=z.password="",z.auth&&(D=z.auth.indexOf(":"),~D?(z.username=z.auth.slice(0,D),z.username=encodeURIComponent(decodeURIComponent(z.username)),z.password=z.auth.slice(D+1),z.password=encodeURIComponent(decodeURIComponent(z.password))):z.username=encodeURIComponent(decodeURIComponent(z.auth)),z.auth=z.password?z.username+":"+z.password:z.username),z.origin=z.protocol!=="file:"&&h(z.protocol)&&z.host?z.protocol+"//"+z.host:"null",z.href=z.toString()}function C($,E,y){var w=this;switch($){case"query":typeof E=="string"&&E.length&&(E=(y||e.parse)(E)),w[$]=E;break;case"port":w[$]=E,s(E,w.protocol)?E&&(w.host=w.hostname+":"+E):(w.host=w.hostname,w[$]="");break;case"hostname":w[$]=E,w.port&&(E+=":"+w.port),w.host=E;break;case"host":w[$]=E,r.test(E)?(E=E.split(":"),w.port=E.pop(),w.hostname=E.join(":")):(w.hostname=E,w.port="");break;case"protocol":w.protocol=E.toLowerCase(),w.slashes=!y;break;case"pathname":case"hash":if(E){var O=$==="pathname"?"/":"#";w[$]=E.charAt(0)!==O?O+E:E}else w[$]=E;break;case"username":case"password":w[$]=encodeURIComponent(E);break;case"auth":var T=E.indexOf(":");~T?(w.username=E.slice(0,T),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=E.slice(T+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(E))}for(var U=0;U<c.length;U++){var D=c[U];D[4]&&(w[D[1]]=w[D[1]].toLowerCase())}return w.auth=w.password?w.username+":"+w.password:w.username,w.origin=w.protocol!=="file:"&&h(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString(),w}function A($){(!$||typeof $!="function")&&($=e.stringify);var E,y=this,w=y.host,O=y.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var T=O+(y.protocol&&y.slashes||h(y.protocol)?"//":"");return y.username?(T+=y.username,y.password&&(T+=":"+y.password),T+="@"):y.password?(T+=":"+y.password,T+="@"):y.protocol!=="file:"&&h(y.protocol)&&!w&&y.pathname!=="/"&&(T+="@"),(w[w.length-1]===":"||r.test(y.hostname)&&!y.port)&&(w+=":"),T+=w+y.pathname,E=typeof y.query=="object"?$(y.query):y.query,E&&(T+=E.charAt(0)!=="?"?"?"+E:E),y.hash&&(T+=y.hash),T}return m.prototype={set:C,toString:A},m.extractProtocol=f,m.location=p,m.trimLeft=l,m.qs=e,Uo=m,Uo}var Qf=Zf();const eg=Wf(Qf);function tg(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){var e=Math.random()*16|0,t=s==="x"?e:e&3|8;return t.toString(16)})}function cr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */cr=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(S,x,_){S[x]=_.value},r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(S,x,_){return Object.defineProperty(S,x,{value:_,enumerable:!0,configurable:!0,writable:!0}),S[x]}try{c({},"")}catch{c=function(_,R,F){return _[R]=F}}function d(S,x,_,R){var F=x&&x.prototype instanceof A?x:A,I=Object.create(F.prototype),H=new le(R||[]);return o(I,"_invoke",{value:q(S,_,H)}),I}function p(S,x,_){try{return{type:"normal",arg:S.call(x,_)}}catch(R){return{type:"throw",arg:R}}}e.wrap=d;var h="suspendedStart",f="suspendedYield",b="executing",m="completed",C={};function A(){}function $(){}function E(){}var y={};c(y,n,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(K([])));O&&O!==t&&i.call(O,n)&&(y=O);var T=E.prototype=A.prototype=Object.create(y);function U(S){["next","throw","return"].forEach(function(x){c(S,x,function(_){return this._invoke(x,_)})})}function D(S,x){function _(F,I,H,X){var te=p(S[F],S,I);if(te.type!=="throw"){var Ae=te.arg,ve=Ae.value;return ve&&qt(ve)=="object"&&i.call(ve,"__await")?x.resolve(ve.__await).then(function(Te){_("next",Te,H,X)},function(Te){_("throw",Te,H,X)}):x.resolve(ve).then(function(Te){Ae.value=Te,H(Ae)},function(Te){return _("throw",Te,H,X)})}X(te.arg)}var R;o(this,"_invoke",{value:function(I,H){function X(){return new x(function(te,Ae){_(I,H,te,Ae)})}return R=R?R.then(X,X):X()}})}function q(S,x,_){var R=h;return function(F,I){if(R===b)throw Error("Generator is already running");if(R===m){if(F==="throw")throw I;return{value:s,done:!0}}for(_.method=F,_.arg=I;;){var H=_.delegate;if(H){var X=W(H,_);if(X){if(X===C)continue;return X}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(R===h)throw R=m,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);R=b;var te=p(S,x,_);if(te.type==="normal"){if(R=_.done?m:f,te.arg===C)continue;return{value:te.arg,done:_.done}}te.type==="throw"&&(R=m,_.method="throw",_.arg=te.arg)}}}function W(S,x){var _=x.method,R=S.iterator[_];if(R===s)return x.delegate=null,_==="throw"&&S.iterator.return&&(x.method="return",x.arg=s,W(S,x),x.method==="throw")||_!=="return"&&(x.method="throw",x.arg=new TypeError("The iterator does not provide a '"+_+"' method")),C;var F=p(R,S.iterator,x.arg);if(F.type==="throw")return x.method="throw",x.arg=F.arg,x.delegate=null,C;var I=F.arg;return I?I.done?(x[S.resultName]=I.value,x.next=S.nextLoc,x.method!=="return"&&(x.method="next",x.arg=s),x.delegate=null,C):I:(x.method="throw",x.arg=new TypeError("iterator result is not an object"),x.delegate=null,C)}function he(S){var x={tryLoc:S[0]};1 in S&&(x.catchLoc=S[1]),2 in S&&(x.finallyLoc=S[2],x.afterLoc=S[3]),this.tryEntries.push(x)}function z(S){var x=S.completion||{};x.type="normal",delete x.arg,S.completion=x}function le(S){this.tryEntries=[{tryLoc:"root"}],S.forEach(he,this),this.reset(!0)}function K(S){if(S||S===""){var x=S[n];if(x)return x.call(S);if(typeof S.next=="function")return S;if(!isNaN(S.length)){var _=-1,R=function F(){for(;++_<S.length;)if(i.call(S,_))return F.value=S[_],F.done=!1,F;return F.value=s,F.done=!0,F};return R.next=R}}throw new TypeError(qt(S)+" is not iterable")}return $.prototype=E,o(T,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:$,configurable:!0}),$.displayName=c(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(S){var x=typeof S=="function"&&S.constructor;return!!x&&(x===$||(x.displayName||x.name)==="GeneratorFunction")},e.mark=function(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,E):(S.__proto__=E,c(S,l,"GeneratorFunction")),S.prototype=Object.create(T),S},e.awrap=function(S){return{__await:S}},U(D.prototype),c(D.prototype,a,function(){return this}),e.AsyncIterator=D,e.async=function(S,x,_,R,F){F===void 0&&(F=Promise);var I=new D(d(S,x,_,R),F);return e.isGeneratorFunction(x)?I:I.next().then(function(H){return H.done?H.value:I.next()})},U(T),c(T,l,"Generator"),c(T,n,function(){return this}),c(T,"toString",function(){return"[object Generator]"}),e.keys=function(S){var x=Object(S),_=[];for(var R in x)_.push(R);return _.reverse(),function F(){for(;_.length;){var I=_.pop();if(I in x)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=K,le.prototype={constructor:le,reset:function(x){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(z),!x)for(var _ in this)_.charAt(0)==="t"&&i.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=s)},stop:function(){this.done=!0;var x=this.tryEntries[0].completion;if(x.type==="throw")throw x.arg;return this.rval},dispatchException:function(x){if(this.done)throw x;var _=this;function R(Ae,ve){return H.type="throw",H.arg=x,_.next=Ae,ve&&(_.method="next",_.arg=s),!!ve}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],H=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var X=i.call(I,"catchLoc"),te=i.call(I,"finallyLoc");if(X&&te){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(X){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!te)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(x,_){for(var R=this.tryEntries.length-1;R>=0;--R){var F=this.tryEntries[R];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(x==="break"||x==="continue")&&I.tryLoc<=_&&_<=I.finallyLoc&&(I=null);var H=I?I.completion:{};return H.type=x,H.arg=_,I?(this.method="next",this.next=I.finallyLoc,C):this.complete(H)},complete:function(x,_){if(x.type==="throw")throw x.arg;return x.type==="break"||x.type==="continue"?this.next=x.arg:x.type==="return"?(this.rval=this.arg=x.arg,this.method="return",this.next="end"):x.type==="normal"&&_&&(this.next=_),C},finish:function(x){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.finallyLoc===x)return this.complete(R.completion,R.afterLoc),z(R),C}},catch:function(x){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.tryLoc===x){var F=R.completion;if(F.type==="throw"){var I=F.arg;z(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(x,_,R){return this.delegate={iterator:K(x),resultName:_,nextLoc:R},this.method==="next"&&(this.arg=s),C}},e}function tl(s,e,t,i,o,r,n){try{var a=s[r](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,o)}function ig(s){return function(){var e=this,t=arguments;return new Promise(function(i,o){var r=s.apply(e,t);function n(l){tl(r,i,o,n,a,"next",l)}function a(l){tl(r,i,o,n,a,"throw",l)}n(void 0)})}}function Zc(s,e){return rg(s)||og(s,e)||Qc(s,e)||sg()}function sg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function og(s,e){var t=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var i,o,r,n,a=[],l=!0,c=!1;try{if(r=(t=t.call(s)).next,e!==0)for(;!(l=(i=r.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(c)throw o}}return a}}function rg(s){if(Array.isArray(s))return s}function qt(s){"@babel/helpers - typeof";return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qt(s)}function ng(s,e){var t=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!t){if(Array.isArray(s)||(t=Qc(s))||e){t&&(s=t);var i=0,o=function(){};return{s:o,n:function(){return i>=s.length?{done:!0}:{done:!1,value:s[i++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r=!0,n=!1,a;return{s:function(){t=t.call(s)},n:function(){var c=t.next();return r=c.done,c},e:function(c){n=!0,a=c},f:function(){try{!r&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function Qc(s,e){if(s){if(typeof s=="string")return il(s,e);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return il(s,e)}}function il(s,e){(e==null||e>s.length)&&(e=s.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=s[t];return i}function sl(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),t.push.apply(t,i)}return t}function ei(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sl(Object(t),!0).forEach(function(i){ag(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):sl(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function ag(s,e,t){return e=ed(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function lg(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function ol(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,ed(i.key),i)}}function cg(s,e,t){return e&&ol(s.prototype,e),t&&ol(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function ed(s){var e=dg(s,"string");return qt(e)=="symbol"?e:e+""}function dg(s,e){if(qt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(qt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var Rs="tus-v1",Os="ietf-draft-03",Fi="ietf-draft-05",ug={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:td,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Rs},Ks=(function(){function s(e,t){lg(this,s),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return cg(s,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Rs,Os,Fi].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var r=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];r<n.length;r++){var a=n[r];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,r=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:hg(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(d,p){d.uploadUrl=i._parallelUploadUrls[p]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(d,p){var h=0;return i._source.slice(d.start,d.end).then(function(f){var b=f.value;return new Promise(function(m,C){var A=ei(ei({},i.options),{},{uploadUrl:d.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:ei(ei({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:m,onError:C,onProgress:function(y){r=r-h+y,h=y,i._emitProgress(r,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[p]=$.url,i._parallelUploadUrls.filter(function(y){return!!y}).length===a.length&&i._saveUploadInUrlStorage()}}),$=new s(b,A);$.start(),i._parallelUploads.push($)})})}),c;Promise.all(l).then(function(){c=i._openRequest("POST",i.options.endpoint),c.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var d=rl(i.options.metadata);return d!==""&&c.setHeader("Upload-Metadata",d),i._sendRequest(c,null)}).then(function(d){if(!ni(d.getStatus(),200)){i._emitHttpError(c,d,"tus: unexpected response while creating upload");return}var p=d.getHeader("Location");if(p==null){i._emitHttpError(c,d,"tus: invalid or missing Location header");return}i.url=cl(i.options.endpoint,p),"Created upload at ".concat(i.url),i._emitSuccess(d)}).catch(function(d){i._emitError(d)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var o=ng(this._parallelUploads),r;try{for(o.s();!(r=o.n()).done;){var n=r.value;n.abort(t)}}catch(a){o.e(a)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():s.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,o,r){this._emitError(new Oi(o,r,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),ll(t,this._retryAttempt,this.options)){var r=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},r);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=rl(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var r;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,r=this._addChunkToRequest(i)):((this.options.protocol===Os||this.options.protocol===Fi)&&i.setHeader("Upload-Complete","?0"),r=this._sendRequest(i,null)),r.then(function(n){if(!ni(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=cl(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(r){var n=r.getStatus();if(!ni(n,200)){if(n===423){t._emitHttpError(i,r,"tus: upload is currently locked; retry later");return}if(ni(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,r,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,r,"tus: invalid or missing offset value");return}var l=Number.parseInt(r.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===Rs){t._emitHttpError(i,r,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(r);return}t._offset=a,t._performUpload()})}).catch(function(r){t._emitHttpError(i,null,"tus: failed to resume upload",r)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(r){if(!ni(r.getStatus(),200)){t._emitHttpError(i,r,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,r)}).catch(function(r){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),r)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,o=this._offset,r=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(o+n,i._size)}),this.options.protocol===Rs?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Fi&&t.setHeader("Content-Type","application/partial-upload"),(r===Number.POSITIVE_INFINITY||r>this._size)&&!this.options.uploadLengthDeferred&&(r=this._size),this._source.slice(o,r).then(function(n){var a=n.value,l=n.done,c=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+c,t.setHeader("Upload-Length","".concat(i._size)));var d=i._offset+c;return!i.options.uploadLengthDeferred&&l&&d!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(d," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===Os||i.options.protocol===Fi)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var o=nl(t,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return al(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=nl("DELETE",t,i);return al(o,null,i).then(function(r){if(r.getStatus()!==204)throw new Oi("tus: unexpected response while terminating upload",null,o,r)}).catch(function(r){if(r instanceof Oi||(r=new Oi("tus: failed to terminate upload",r,o,null)),!ll(r,0,i))throw r;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=ei(ei({},i),{},{retryDelays:a});return new Promise(function(c){return setTimeout(c,n)}).then(function(){return s.terminate(t,l)})})}}])})();function rl(s){return Object.entries(s).map(function(e){var t=Zc(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(Gf.encode(String(o)))}).join(",")}function ni(s,e){return s>=e&&s<e+100}function nl(s,e,t){var i=t.httpStack.createRequest(s,e);t.protocol===Os?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Fi?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},r=0,n=Object.entries(o);r<n.length;r++){var a=Zc(n[r],2),l=a[0],c=a[1];i.setHeader(l,c)}if(t.addRequestId){var d=tg();i.setHeader("X-Request-ID",d)}return i}function al(s,e,t){return dr.apply(this,arguments)}function dr(){return dr=ig(cr().mark(function s(e,t,i){var o;return cr().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(o=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,o);case 9:return n.abrupt("return",o);case 10:case"end":return n.stop()}},s)})),dr.apply(this,arguments)}function pg(){var s=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(s=!1),s}function ll(s,e,t){return t.retryDelays==null||e>=t.retryDelays.length||s.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(s,e,t):td(s)}function td(s){var e=s.originalResponse?s.originalResponse.getStatus():0;return(!ni(e,400)||e===409||e===423)&&pg()}function cl(s,e){return new eg(e,s).toString()}function hg(s,e){for(var t=Math.floor(s/e),i=[],o=0;o<e;o++)i.push({start:t*o,end:t*(o+1)});return i[e-1].end=s,i}Ks.defaultOptions=ug;var id=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function fg(s){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var o=i.response;e(o)},i.onerror=function(o){t(o)},i.open("GET",s),i.send()})}var gg=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function mg(s){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var o=new Uint8Array(i.result);e({value:o})},i.onerror=function(o){t(o)},i.readAsArrayBuffer(s)})}function Ji(s){"@babel/helpers - typeof";return Ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ji(s)}function vg(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function bg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,yg(i.key),i)}}function xg(s,e,t){return e&&bg(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function yg(s){var e=_g(s,"string");return Ji(e)=="symbol"?e:e+""}function _g(s,e){if(Ji(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Ji(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var dl=(function(){function s(e){vg(this,s),this._file=e,this.size=e.size}return xg(s,[{key:"slice",value:function(t,i){if(gg())return mg(this._file.slice(t,i));var o=this._file.slice(t,i),r=i>=this.size;return Promise.resolve({value:o,done:r})}},{key:"close",value:function(){}}])})();function Xi(s){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xi(s)}function wg(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function kg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Sg(i.key),i)}}function $g(s,e,t){return e&&kg(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Sg(s){var e=Cg(s,"string");return Xi(e)=="symbol"?e:e+""}function Cg(s,e){if(Xi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Xi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}function ul(s){return s===void 0?0:s.size!==void 0?s.size:s.length}function Eg(s,e){if(s.concat)return s.concat(e);if(s instanceof Blob)return new Blob([s,e],{type:s.type});if(s.set){var t=new s.constructor(s.length+e.length);return t.set(s),t.set(e,s.length),t}throw new Error("Unknown data type")}var Pg=(function(){function s(e){wg(this,s),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return $g(s,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var o=this,r=i<=this._bufferOffset+ul(this._buffer);if(this._done||r){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var c=l.value,d=l.done;return d?o._done=!0:o._buffer===void 0?o._buffer=c:o._buffer=Eg(o._buffer,c),o._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=ul(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function Vt(s){"@babel/helpers - typeof";return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vt(s)}function ur(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ur=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(S,x,_){S[x]=_.value},r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(S,x,_){return Object.defineProperty(S,x,{value:_,enumerable:!0,configurable:!0,writable:!0}),S[x]}try{c({},"")}catch{c=function(_,R,F){return _[R]=F}}function d(S,x,_,R){var F=x&&x.prototype instanceof A?x:A,I=Object.create(F.prototype),H=new le(R||[]);return o(I,"_invoke",{value:q(S,_,H)}),I}function p(S,x,_){try{return{type:"normal",arg:S.call(x,_)}}catch(R){return{type:"throw",arg:R}}}e.wrap=d;var h="suspendedStart",f="suspendedYield",b="executing",m="completed",C={};function A(){}function $(){}function E(){}var y={};c(y,n,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(K([])));O&&O!==t&&i.call(O,n)&&(y=O);var T=E.prototype=A.prototype=Object.create(y);function U(S){["next","throw","return"].forEach(function(x){c(S,x,function(_){return this._invoke(x,_)})})}function D(S,x){function _(F,I,H,X){var te=p(S[F],S,I);if(te.type!=="throw"){var Ae=te.arg,ve=Ae.value;return ve&&Vt(ve)=="object"&&i.call(ve,"__await")?x.resolve(ve.__await).then(function(Te){_("next",Te,H,X)},function(Te){_("throw",Te,H,X)}):x.resolve(ve).then(function(Te){Ae.value=Te,H(Ae)},function(Te){return _("throw",Te,H,X)})}X(te.arg)}var R;o(this,"_invoke",{value:function(I,H){function X(){return new x(function(te,Ae){_(I,H,te,Ae)})}return R=R?R.then(X,X):X()}})}function q(S,x,_){var R=h;return function(F,I){if(R===b)throw Error("Generator is already running");if(R===m){if(F==="throw")throw I;return{value:s,done:!0}}for(_.method=F,_.arg=I;;){var H=_.delegate;if(H){var X=W(H,_);if(X){if(X===C)continue;return X}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(R===h)throw R=m,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);R=b;var te=p(S,x,_);if(te.type==="normal"){if(R=_.done?m:f,te.arg===C)continue;return{value:te.arg,done:_.done}}te.type==="throw"&&(R=m,_.method="throw",_.arg=te.arg)}}}function W(S,x){var _=x.method,R=S.iterator[_];if(R===s)return x.delegate=null,_==="throw"&&S.iterator.return&&(x.method="return",x.arg=s,W(S,x),x.method==="throw")||_!=="return"&&(x.method="throw",x.arg=new TypeError("The iterator does not provide a '"+_+"' method")),C;var F=p(R,S.iterator,x.arg);if(F.type==="throw")return x.method="throw",x.arg=F.arg,x.delegate=null,C;var I=F.arg;return I?I.done?(x[S.resultName]=I.value,x.next=S.nextLoc,x.method!=="return"&&(x.method="next",x.arg=s),x.delegate=null,C):I:(x.method="throw",x.arg=new TypeError("iterator result is not an object"),x.delegate=null,C)}function he(S){var x={tryLoc:S[0]};1 in S&&(x.catchLoc=S[1]),2 in S&&(x.finallyLoc=S[2],x.afterLoc=S[3]),this.tryEntries.push(x)}function z(S){var x=S.completion||{};x.type="normal",delete x.arg,S.completion=x}function le(S){this.tryEntries=[{tryLoc:"root"}],S.forEach(he,this),this.reset(!0)}function K(S){if(S||S===""){var x=S[n];if(x)return x.call(S);if(typeof S.next=="function")return S;if(!isNaN(S.length)){var _=-1,R=function F(){for(;++_<S.length;)if(i.call(S,_))return F.value=S[_],F.done=!1,F;return F.value=s,F.done=!0,F};return R.next=R}}throw new TypeError(Vt(S)+" is not iterable")}return $.prototype=E,o(T,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:$,configurable:!0}),$.displayName=c(E,l,"GeneratorFunction"),e.isGeneratorFunction=function(S){var x=typeof S=="function"&&S.constructor;return!!x&&(x===$||(x.displayName||x.name)==="GeneratorFunction")},e.mark=function(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,E):(S.__proto__=E,c(S,l,"GeneratorFunction")),S.prototype=Object.create(T),S},e.awrap=function(S){return{__await:S}},U(D.prototype),c(D.prototype,a,function(){return this}),e.AsyncIterator=D,e.async=function(S,x,_,R,F){F===void 0&&(F=Promise);var I=new D(d(S,x,_,R),F);return e.isGeneratorFunction(x)?I:I.next().then(function(H){return H.done?H.value:I.next()})},U(T),c(T,l,"Generator"),c(T,n,function(){return this}),c(T,"toString",function(){return"[object Generator]"}),e.keys=function(S){var x=Object(S),_=[];for(var R in x)_.push(R);return _.reverse(),function F(){for(;_.length;){var I=_.pop();if(I in x)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=K,le.prototype={constructor:le,reset:function(x){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(z),!x)for(var _ in this)_.charAt(0)==="t"&&i.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=s)},stop:function(){this.done=!0;var x=this.tryEntries[0].completion;if(x.type==="throw")throw x.arg;return this.rval},dispatchException:function(x){if(this.done)throw x;var _=this;function R(Ae,ve){return H.type="throw",H.arg=x,_.next=Ae,ve&&(_.method="next",_.arg=s),!!ve}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],H=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var X=i.call(I,"catchLoc"),te=i.call(I,"finallyLoc");if(X&&te){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(X){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!te)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(x,_){for(var R=this.tryEntries.length-1;R>=0;--R){var F=this.tryEntries[R];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(x==="break"||x==="continue")&&I.tryLoc<=_&&_<=I.finallyLoc&&(I=null);var H=I?I.completion:{};return H.type=x,H.arg=_,I?(this.method="next",this.next=I.finallyLoc,C):this.complete(H)},complete:function(x,_){if(x.type==="throw")throw x.arg;return x.type==="break"||x.type==="continue"?this.next=x.arg:x.type==="return"?(this.rval=this.arg=x.arg,this.method="return",this.next="end"):x.type==="normal"&&_&&(this.next=_),C},finish:function(x){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.finallyLoc===x)return this.complete(R.completion,R.afterLoc),z(R),C}},catch:function(x){for(var _=this.tryEntries.length-1;_>=0;--_){var R=this.tryEntries[_];if(R.tryLoc===x){var F=R.completion;if(F.type==="throw"){var I=F.arg;z(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(x,_,R){return this.delegate={iterator:K(x),resultName:_,nextLoc:R},this.method==="next"&&(this.arg=s),C}},e}function pl(s,e,t,i,o,r,n){try{var a=s[r](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,o)}function Ag(s){return function(){var e=this,t=arguments;return new Promise(function(i,o){var r=s.apply(e,t);function n(l){pl(r,i,o,n,a,"next",l)}function a(l){pl(r,i,o,n,a,"throw",l)}n(void 0)})}}function Tg(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Rg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Ig(i.key),i)}}function Og(s,e,t){return e&&Rg(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Ig(s){var e=Fg(s,"string");return Vt(e)=="symbol"?e:e+""}function Fg(s,e){if(Vt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Vt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var Lg=(function(){function s(){Tg(this,s)}return Og(s,[{key:"openFile",value:(function(){var e=Ag(ur().mark(function i(o,r){var n;return ur().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(id()&&o&&typeof o.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,fg(o.uri);case 4:return n=l.sent,l.abrupt("return",new dl(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new dl(o)));case 13:if(typeof o.read!="function"){l.next=18;break}if(r=Number(r),Number.isFinite(r)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new Pg(o,r)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,o){return e.apply(this,arguments)}return t})()}])})();function Ug(s,e){return id()?Promise.resolve(Dg(s,e)):Promise.resolve(["tus-br",s.name,s.type,s.size,s.lastModified,e.endpoint].join("-"))}function Dg(s,e){var t=s.exif?zg(JSON.stringify(s.exif)):"noexif";return["tus-rn",s.name||"noname",s.size||"nosize",t,e.endpoint].join("/")}function zg(s){var e=0;if(s.length===0)return e;for(var t=0;t<s.length;t++){var i=s.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Zi(s){"@babel/helpers - typeof";return Zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zi(s)}function nn(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Mg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Bg(i.key),i)}}function an(s,e,t){return e&&Mg(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Bg(s){var e=jg(s,"string");return Zi(e)=="symbol"?e:e+""}function jg(s,e){if(Zi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Zi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var Ng=(function(){function s(){nn(this,s)}return an(s,[{key:"createRequest",value:function(t,i){return new Hg(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),Hg=(function(){function s(e,t){nn(this,s),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return an(s,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,r){t._xhr.onload=function(){o(new qg(t._xhr))},t._xhr.onerror=function(n){r(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),qg=(function(){function s(e){nn(this,s),this._xhr=e}return an(s,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Qi(s){"@babel/helpers - typeof";return Qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qi(s)}function Vg(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Kg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Gg(i.key),i)}}function Yg(s,e,t){return e&&Kg(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Gg(s){var e=Wg(s,"string");return Qi(e)=="symbol"?e:e+""}function Wg(s,e){if(Qi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Qi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var pr=!1;try{pr="localStorage"in window;var Do="tusSupport",hl=localStorage.getItem(Do);localStorage.setItem(Do,hl),hl===null&&localStorage.removeItem(Do)}catch(s){if(s.code===s.SECURITY_ERR||s.code===s.QUOTA_EXCEEDED_ERR)pr=!1;else throw s}var Jg=pr,Xg=(function(){function s(){Vg(this,s)}return Yg(s,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var o=Math.round(Math.random()*1e12),r="tus::".concat(t,"::").concat(o);return localStorage.setItem(r,JSON.stringify(i)),Promise.resolve(r)}},{key:"_findEntries",value:function(t){for(var i=[],o=0;o<localStorage.length;o++){var r=localStorage.key(o);if(r.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(r));n.urlStorageKey=r,i.push(n)}catch{}}return i}}])})();function mi(s){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mi(s)}function Zg(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Qg(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,od(i.key),i)}}function em(s,e,t){return t&&Qg(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function tm(s,e,t){return e=Ys(e),im(s,sd()?Reflect.construct(e,t||[],Ys(s).constructor):e.apply(s,t))}function im(s,e){if(e&&(mi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sm(s)}function sm(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sd(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sd=function(){return!!s})()}function Ys(s){return Ys=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ys(s)}function om(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&hr(s,e)}function hr(s,e){return hr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},hr(s,e)}function fl(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),t.push.apply(t,i)}return t}function di(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fl(Object(t),!0).forEach(function(i){rm(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):fl(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function rm(s,e,t){return e=od(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function od(s){var e=nm(s,"string");return mi(e)=="symbol"?e:e+""}function nm(s,e){if(mi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(mi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var gl=di(di({},Ks.defaultOptions),{},{httpStack:new Ng,fileReader:new Lg,urlStorage:Jg?new Xg:new Df,fingerprint:Ug}),am=(function(s){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Zg(this,e),i=di(di({},gl),i),tm(this,e,[t,i])}return om(e,s),em(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=di(di({},gl),o),Ks.terminate(i,o)}}])})(Ks);const lm=10*1024*1024,cm=5*1024*1024,dm="https://eu-on-24001.connector.filerobot.com/files",um="https://eu-on-24001.connector.filerobot.com/json";function pm(s,e){if(!e||!s.file)return!1;const t=e.sizeThreshold??lm;return s.size>=t}function hm(s,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),o=t.endpoint||dm,r=t.jsonBase||um,n=t.chunkSize??cm,a=t.resumable!==!1,l=t.parallelChunks??1,c=t.retryDelays??[0,1e3,3e3,5e3],d=i.split("/").pop()||"";let p=!1,h=!1,f=!1;const b={name:s.name,type:s.type,"filerobot-folder":e.folder};Vr(s.product)&&(b.product=JSON.stringify(Kr(s.product)));const m=async()=>`tus-${s.id}-${o}`,C=new am(s.file,{endpoint:o,chunkSize:n,retryDelays:c,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:b,fingerprint:m,onBeforeRequest(w){const O=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[T,U]of Object.entries(O))w.setHeader(T,U);w.setHeader("X-Filerobot-Token",d)},onUploadUrlAvailable(){C.url&&e.onUploadUrlAvailable&&!f&&(f=!0,e.onUploadUrlAvailable(C.url))},onProgress(w,O){!h&&!p&&e.onProgress(w,O)},onSuccess(){var T;if(h)return;E();const w=C.url||"",O=(T=w.match(/files\/([^/?]+)/))==null?void 0:T[1];O?gm(r,O,s.size).then(U=>{h||e.onComplete(fi(U)?Fr(U,s):U)}).catch(U=>{h||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:s.name,extension:s.name.split(".").pop()||"",type:s.type,size:s.size,url:{public:w,cdn:w},meta:s.meta,tags:s.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(w){h||(E(),fm(w)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(w instanceof Error?w:new Error(String(w))))},onShouldRetry(w,O,T){var D;const U=(D=w.originalResponse)==null?void 0:D.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let A=null,$=null;typeof window<"u"&&(A=()=>{var w;!p&&!h&&(p=!0,C.abort(!1),(w=e.onPause)==null||w.call(e))},$=()=>{var w;p&&!h&&(p=!1,C.start(),(w=e.onResume)==null||w.call(e))},window.addEventListener("offline",A),window.addEventListener("online",$));const E=()=>{A&&window.removeEventListener("offline",A),$&&window.removeEventListener("online",$)},y=()=>{try{C.start()}catch(w){E(),e.onError(w instanceof Error?w:new Error(String(w)))}};return a?C.findPreviousUploads().then(w=>{w.length>0&&!h&&C.resumeFromPreviousUpload(w[0]),h||y()}):y(),{abort(){h=!0,p=!1,E(),C.abort(!0)},pause(){!p&&!h&&(p=!0,C.abort(!1))},resume(){p&&!h&&(p=!1,C.start())},isPaused(){return p}}}function fm(s){var e;if(s instanceof Oi){const t=(e=s.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:s.originalResponse==null&&s.causingError!=null}return!1}async function gm(s,e,t){const i=`${s.replace(/\/+$/,"")}/${e}`,o=t>1e8?13e3:6e3,r=3;for(let n=0;n<=r;n++){n>0&&await new Promise(c=>setTimeout(c,o));const a=await fetch(i);if(a.status===404&&n<r)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(fi(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<r))throw new Error(js(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const Is="_sfxRelativePath",ml=8,mm=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function vm(s){return s?s.startsWith(".")?!0:mm.has(s):!1}function ln(s,e){if(e){try{Object.defineProperty(s,Is,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(s,Is,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{s[Is]=e}}}function bm(s){const e=s[Is];if(typeof e=="string"&&e)return e;const t=s.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=s.relativePath;return typeof i=="string"?i:""}function xm(s){if(!s)return"";const e=s.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function ym(s,e){const t=(s??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:s??""}async function rd(s,e){var c;const t=(e==null?void 0:e.allowDirectories)!==!1,i=s.items;if(!(i&&i.length>0&&typeof i[0].webkitGetAsEntry=="function"))return{files:Array.from(s.files??[]),hadDirectories:!1,rejectedDirectories:!1};const r=[];let n=!1,a=!1;for(const d of Array.from(i)){if(d.kind!=="file")continue;const p=(c=d.webkitGetAsEntry)==null?void 0:c.call(d);if(p){if(p.isDirectory&&(n=!0,!t)){a=!0;continue}r.push(p)}}if(r.length===0)return a?{files:[],hadDirectories:n,rejectedDirectories:!0}:{files:Array.from(s.files??[]),hadDirectories:!1,rejectedDirectories:!1};const l=[];return await nd(r,"",l),{files:l,hadDirectories:n,rejectedDirectories:a}}async function nd(s,e,t){for(let i=0;i<s.length;i+=ml){const o=s.slice(i,i+ml);await Promise.all(o.map(r=>_m(r,e,t)))}}async function _m(s,e,t){try{if(s.isFile){const i=await wm(s);if(!i)return;const o=e?`${e}/${i.name}`:i.name;ln(i,o),t.push(i);return}if(s.isDirectory){if(vm(s.name))return;const i=e?`${e}/${s.name}`:s.name,o=await km(s);await nd(o,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(s==null?void 0:s.name)??s,i)}}function wm(s){return new Promise(e=>{s.file(t=>e(t),()=>e(null))})}function km(s){return new Promise(e=>{const t=s.createReader(),i=[],o=()=>{t.readEntries(r=>{if(r.length===0){e(i);return}i.push(...r),o()},r=>{console.warn("[sfx-uploader] directory read failed for",s==null?void 0:s.name,r),e(i)})};o()})}class $m{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let o=!1;for(const[r,n]of this.pendingProgress){const a=i.get(r);a&&a.status==="uploading"&&(i.set(r,{...a,...n}),o=!0)}this.pendingProgress.clear(),o&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(fe(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(fe(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&fe(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),fe(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),fe(this.store,e,{status:"uploading"})):fe(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!vl(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),fe(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())vl(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),fe(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,o=t-i;if(o<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,o);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),fe(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var h,f;this.pendingProgress.delete(e.id);const t=(f=(h=this.config).resolveUploadParams)==null?void 0:f.call(h,e),i=!!t&&Object.keys(t).length>0,o=!i&&!e.remoteInfo&&!e.remoteUrl&&pm(e,this.config.tusConfig);fe(this.store,e.id,{status:"uploading",error:null,isTus:o});let r=0,n=Date.now(),a=0;const l=ym(this.store.getState().targetFolder,e.relativeFolder),c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:b=>this.handleComplete(e.id,b),onError:b=>this.handleError(e.id,b)},d=(b,m)=>{const C=Date.now(),A=(C-n)/1e3;if(A>0){const E=(b-r)/A;a=a===0?E:.3*E+.7*a}r=b,n=C;const $=m>0?Math.min(b/m*100,100):0;this.pendingProgress.set(e.id,{progress:$,bytesUploaded:b,speed:a}),this.scheduleProgressFlush()};let p;if(e.remoteInfo)p=wf(e,{...c,onProgress:d});else if(e.remoteUrl){if(!this.config.companionUrl){fe(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}p=kf(e,{...c,onProgress:d,companionUrl:this.config.companionUrl,onMeta:b=>{fe(this.store,e.id,{size:b.size,type:b.type||e.type})}})}else if(o){const b=hm(e,{...c,onProgress:d,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:m=>{fe(this.store,e.id,{tusUploadUrl:m})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,b),this.pendingProgress.delete(e.id),fe(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,b),fe(this.store,e.id,{status:"uploading"})}});p=b}else p=hf(e,{...c,onProgress:d});this.activeUploads.set(e.id,p)}handleComplete(e,t){var r;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),o=(r=t.file)==null?void 0:r.uuid;if(i!=null&&i.focusPoint&&o&&!fi(t)){const n=()=>this.finalizeComplete(e,t);this.applyFocusPoint(i,o).then(n,n);return}this.finalizeComplete(e,t)}async applyFocusPoint(e,t){var i,o;try{await new Ir({apiBase:this.config.apiBase,headers:this.config.authHeaders}).put(`/file/${encodeURIComponent(t)}/focus-point`,{img_focus_point:e.focusPoint})}catch(r){const n=r instanceof Error?r:new Error(String(r));console.warn(`[sfx-uploader] Failed to save the focus point for "${e.name}":`,n);try{(o=(i=this.config).onFocusPointError)==null||o.call(i,e,n)}catch(a){console.warn("[sfx-uploader] onFocusPointError threw:",a)}}}finalizeComplete(e,t){var p,h,f,b,m,C,A,$,E,y,w;const i=this.store.getState().files.get(e),o=((p=i==null?void 0:i.previewUrl)==null?void 0:p.startsWith("blob:"))??!1,r=((f=(h=t.file)==null?void 0:h.url)==null?void 0:f.cdn)??((m=(b=t.file)==null?void 0:b.url)==null?void 0:m.cdn_permalink)??((A=(C=t.file)==null?void 0:C.url)==null?void 0:A.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:fi(t)};if(i&&r&&i.type.startsWith("image/")&&!o){const O=((y=(E=this.config).transformPreviewUrl)==null?void 0:y.call(E,r,($=t.file)==null?void 0:$.url))??r;O&&(n.previewUrl=O)}const a=(w=t.file)==null?void 0:w.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l);const c=this.store.getState().files,d=c.get(e);if(d){const O=new Map(c);O.set(e,{...d,...n}),this.store.setState({files:O,...this.computeTotals(O)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,r=i.retryCount+1;if(r<=o.maxRetries){const n=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);fe(this.store,e,{status:"retrying",error:t.message,retryCount:r});const a=setTimeout(()=>{this.retryTimers.delete(e),fe(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else fe(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,o=0,r=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),r+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(o+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:n>0?Math.min(r/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function vl(s){return s==="queued"||s==="uploading"||s==="retrying"||s==="paused"}const Sm=3e4,Cm=2,Em=400;function Pm(s){return s===404||s===408||s===429||s>=500}const Am=s=>new Promise(e=>setTimeout(e,s));function cn(s,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${s}`}async function Tm(s,e,t,i={}){const o=`${cn(s,t)}/key/${encodeURIComponent(e)}`,r=i.retries??Cm,n=i.retryDelayMs??Em;let a=new Error("SASS key exchange failed");for(let l=0;l<=r;l++){l>0&&await Am(n*l);const c=new AbortController,d=setTimeout(()=>c.abort(),Sm);try{const p=await fetch(o,{signal:c.signal,cache:"no-store"});if(clearTimeout(d),!p.ok){if(a=new Error(`SASS key exchange failed (HTTP ${p.status})`),Pm(p.status)&&l<r)continue;throw a}const h=await p.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return{key:h.key,listScope:h.list_scope??[],uploadScope:h.upload_scope??[]}}catch(p){if(clearTimeout(d),p instanceof DOMException&&p.name==="AbortError")throw new Error("SASS key exchange timed out");if(p instanceof TypeError&&l<r){a=p;continue}throw p}}throw a}function fr(s,e){const t={};switch(s.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=s.sassKey;break}return s.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=s.airboxPuid),t}async function Rm(s,e){const t=cn(s.container,e);if(s.mode==="security-template"){const{key:i,uploadScope:o}=await Tm(s.container,s.securityTemplateId,e);return{apiBase:t,headers:fr(s,i),sassKey:i,uploadScope:o}}return{apiBase:t,headers:fr(s)}}function ad(s){const e=s.trim().replace(/\/?\*+$/,"").replace(/\/+$/,"");return e?e.startsWith("/")?e:`/${e}`:"/"}function Om(s){const e=s.replace(/\/+$/,"");return e?e.startsWith("/")?e:`/${e}`:"/"}function Im(s,e){const t=Om(s);return e.some(i=>{const o=ad(i);return o==="/"||t===o||t.startsWith(`${o}/`)})}function Fm(s,e){if(!(e!=null&&e.length)||Im(s,e))return s;const t=ad(e[0]);return t==="/"?"/":`${t}/`}function Lm(s){if(!s)return null;try{return decodeURIComponent(escape(atob(s)))}catch{return null}}function Um(s){const e=Lm(s);if(!e)return null;try{return new RegExp(e)}catch(t){return console.error("[sfx-uploader] Filename naming-convention regex failed to compile in the browser:",t),null}}function bl(s,e){return e.test(s)}const Dm="https://ai.scaleflex.com",xl=300,zm=.85,Mm=3e4;function yl(s){return s==="low"?.6:s==="high"?.85:.75}async function Bm(s,e){var o,r,n;if(s.file)return s.file;const t=s.previewUrl||((n=(r=(o=s.response)==null?void 0:o.file)==null?void 0:r.url)==null?void 0:n.cdn)||s.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function jm(s){return`${(s||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function Nm(s){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(s);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,o=URL.createObjectURL(s);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(o)})},i.onerror=()=>{URL.revokeObjectURL(o),t(new Error("Image decode failed"))},i.src=o})}async function Hm(s){const e=await Nm(s);try{const t=e.width>xl?xl/e.width:1,i=Math.max(1,Math.round(e.width*t)),o=Math.max(1,Math.round(e.height*t)),r=document.createElement("canvas");r.width=i,r.height=o;const n=r.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,o),await new Promise((a,l)=>{r.toBlob(c=>c?a(c):l(new Error("Canvas toBlob failed")),"image/jpeg",zm)})}finally{e.close()}}async function _l(s,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),Mm),o=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",o);const r=t.signal,n=()=>{if(r.aborted)throw new DOMException("Aborted","AbortError")};try{n();const c=await Bm(s,r);n();const d=await Hm(c);n();const h=`${(e.endpoint||Dm).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,f=new FormData;f.append("file",d,jm(s.name));const b=await fetch(h,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:f,signal:r});if(!b.ok)throw new Error(`Similarity check failed (HTTP ${b.status})`);const m=await b.json();if(m.status==="error")throw new Error(`Similarity check failed: ${m.msg||"Unknown error"}`);return(m.similar_assets??[]).map(([C,A,$])=>({uuid:C,score:A,url:$}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",o)}}const Gs="sfx-uploader:last-upload:",ld=1;function qm(s){var r,n,a,l,c,d,p,h,f;const{file:e,previewUrl:t,...i}=s;let o=null;return s.status==="complete"&&(s.previewUrl&&!s.previewUrl.startsWith("blob:")?o=s.previewUrl:o=((a=(n=(r=s.response)==null?void 0:r.file)==null?void 0:n.url)==null?void 0:a.permalink)??((d=(c=(l=s.response)==null?void 0:l.file)==null?void 0:c.url)==null?void 0:d.cdn_permalink)??((f=(h=(p=s.response)==null?void 0:p.file)==null?void 0:h.url)==null?void 0:f.cdn)??null),{...i,previewUrl:o}}function Vm(s){try{const e=sessionStorage.getItem(Gs+s);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==ld?null:t}catch{return null}}function Km(s,e){try{sessionStorage.setItem(Gs+s,JSON.stringify(e))}catch{}}const Ti={save(s,e){if(e.length===0){this.clear(s);return}const t={__schemaVersion:ld,savedAt:Date.now(),files:e.map(qm)};Km(s,t)},load(s){const e=Vm(s);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(s){try{return sessionStorage.getItem(Gs+s)!=null}catch{return!1}},clear(s){try{sessionStorage.removeItem(Gs+s)}catch{}}},V={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let Ym=0;function ti(){return`file-${Date.now()}-${++Ym}`}function ai(s){if(!Number.isFinite(s)||s<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(s)/Math.log(1024)),e.length-1),i=s/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function wl(s){if(!isFinite(s)||s<=0)return"0s";const e=Math.round(s);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const o=Math.floor(t/60),r=t%60;return r>0?`${o}h ${r}m`:`${o}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function qe(s){var t;const e=((t=s.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return s.type.startsWith("image/")?"image":s.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":s.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":s.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function Gm(s){const e=s.lastIndexOf(".");return e>=0?s.slice(e+1).toUpperCase():""}const Wm=new Set([".ds_store","thumbs.db","desktop.ini"]);function zo(s){const e=(s.split(/[\\/]/).pop()??s).toLowerCase();return e.startsWith(".ds_store")?!0:Wm.has(e)}const Jm={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",tif:"image/tiff",tiff:"image/tiff",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function gr(s){var t;const e=((t=s.split(".").pop())==null?void 0:t.toLowerCase())??"";return Jm[e]||""}function Ot(s){return s==="image/heic"||s==="image/heif"}function kl(s){return Ot(s)||s==="image/tiff"||s==="image/tif"||s==="image/x-tiff"}function Xm(s){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(s);let o=!1;const r=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{o||(o=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}r()},{once:!0}),t.addEventListener("error",()=>r(),{once:!0}),setTimeout(()=>r(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function Zm(s){return(s==null?void 0:s.code)==="max-files"}function Mo(s,e,t){var i,o;if(e.maxFileSize!=null&&s.size>0&&s.size>e.maxFileSize){const r=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:Tt("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:r})}}if(e.maxTotalFilesSize!=null&&s.size>0){let r=s.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(r+=n.size);if(r>e.maxTotalFilesSize)return{code:"max-total-size",message:Tt("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let r=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&r++;if(r>=e.maxNumberOfFiles)return{code:"max-files",message:Tt("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const r=e.allowedFileTypes,n="."+(((i=s.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!r.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-not-allowed",message:Tt("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const r=e.blockedFileTypes,n="."+(((o=s.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(r.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-blocked",message:Tt("fileTypeBlocked","File type is blocked")}}return null}function Bo(s){return s.allowedFileTypes?s.allowedFileTypes.join(","):""}function Qm(s){return s.trim()?s.split(",").some(e=>{const t=e.trim().toLowerCase();if(!t)return!1;if(t==="*"||t==="*/*")return!0;const i=t.startsWith(".")?gr(`file${t}`):t;return i.startsWith("image/")||i.startsWith("video/")}):!0}const $l={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function ev(s){return s.filter(e=>e in $l).map(e=>$l[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ws=class extends ss{constructor(e){if(super(e),this.it=v,e.type!==yi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===je)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ws.directiveName="unsafeHTML",Ws.resultType=1;const Sl=_i(Ws);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mr extends Ws{}mr.directiveName="unsafeSVG",mr.resultType=2;const ft=_i(mr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dn=_i(class extends ss{constructor(s){var e;if(super(s),s.type!==yi.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var i,o;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const t=s.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(n?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return je}});function Ft(s){return s.brandStyle?u`<span
    class=${dn({"brand-ico":!0,"brand-ico--transparent":s.brandStyle.background==="transparent"})}
    ${oe(s.brandStyle)}
    >${Sl(s.brandHtml)}</span
  >`:Sl(s.brandHtml)}var tv=Object.defineProperty,cd=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&tv(e,t,o),o};const iv='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',sv='<rect x="6" y="2" width="12" height="20" rx="2.5"/><line x1="10.5" y1="18.5" x2="13.5" y2="18.5"/>',ov='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',rv='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',nv='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',li=[{id:"device",labelKey:"myDevice",label:"My Device",icon:iv,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:ov,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:rv,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:nv,iconColor:"#ea580c"}],av={id:"device",labelKey:"myDevice",label:"My Device",icon:sv,iconColor:"#2563eb"},Fn=class Fn extends Y{constructor(){super(...arguments),this.t=Ne,this.sources=li}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return u`
      ${this.sources.map(e=>u`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Ft(e):ee`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ft(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Fn.styles=M`
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
  `;let es=Fn;cd([g({attribute:!1})],es.prototype,"t");cd([g({type:Array})],es.prototype,"sources");const mo=new Set(["multi-select","tags","ultratags"]),vo=new Set(["text","textarea","attachment-uri"]);function lv(s,e={}){return pc(s,e)?[]:s==="attachments-assets"?[{key:"SET",label:k("bulkOpOverwrite","Overwrite")}]:s==="focus-point"?[]:mo.has(s)?[{key:"SET",label:k("bulkOpSet","Set")},{key:"ADD",label:k("bulkOpAddTo","Add to")},{key:"DELETE",label:k("bulkOpRemoveFrom","Remove from")}]:vo.has(s)?[{key:"SET",label:k("bulkOpSet","Set")},{key:"ADD",label:k("bulkOpAppend","Append")},{key:"DELETE",label:k("bulkOpRemove","Remove")}]:[{key:"SET",label:k("bulkOpSet","Set")},{key:"DELETE",label:k("bulkOpClear","Clear")}]}function vr(s,e){return s==="DELETE"?mo.has(e)||vo.has(e):!0}function Ss(s){if(typeof s=="string")return s;if(s&&typeof s=="object"){const e=s;return e.sid||e.label||String(s)}return String(s)}function jo(s,e,t,i){const o=mo.has(i),r=vo.has(i);switch(s){case"SET":return i==="attachments-assets"?Array.isArray(t)?t.slice(0,fc):[]:t;case"ADD":{if(o){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return Ns(n,a,!1);if(i==="tags"){const d=new Set(n.map(h=>Ss(h))),p=[...n];for(const h of a){const f=Ss(h);d.has(f)||(d.add(f),p.push(h))}return p}const l=new Set(n.map(d=>JSON.stringify(d))),c=[...n];for(const d of a){const p=JSON.stringify(d);l.has(p)||(l.add(p),c.push(d))}return c}if(r){const n=typeof t=="string"?t:"";if(!n)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${n}`:n}return t}case"DELETE":{if(o){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return Ns(n,a,!0);if(i==="tags"){const c=new Set(a.map(d=>Ss(d)));return n.filter(d=>!c.has(Ss(d)))}const l=new Set(a.map(c=>JSON.stringify(c)));return n.filter(c=>!l.has(JSON.stringify(c)))}if(r){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function dd(s,e,t,i,o){const r=o??"en",n=!!s.regional_variants_group_uuid,a={meta:{[s.key]:e}},l=qr(s,t,a,o);if(!n){if(s.type!=="ultratags")return jo(i,e,l,s.type);const h=hc(e),f=jo(i,h,l,s.type);return JSON.stringify(f)===JSON.stringify(h)?e:f}const c=h=>h!==null&&typeof h=="object"&&!Array.isArray(h),d=c(e)?e[r]:e,p=c(l)?l[r]:l;return{...c(e)?e:{},[r]:jo(i,d,p,s.type)}}function br(s){if(!s)return;if(s.allowedValues!==void 0)return s.allowedValues;if(s.setValue===void 0)return;if(Array.isArray(s.setValue))return s.setValue;let e=Cl.get(s);return e||(e=[s.setValue],Cl.set(s,e)),e}const Cl=new WeakMap,ud=Symbol("clamp-drop");function cv(s,e,t,i,o){if(s.type!=="select-one"&&s.type!=="multi-select")return e;const r=new Set(t),n=!!s.regional_variants_group_uuid,a=i??"en",l=p=>n&&p!==null&&typeof p=="object"&&!Array.isArray(p),c=l(e)?e[a]:e;let d;if(s.type==="multi-select"){const p=Array.isArray(c)?c:[],h=l(o)?o[a]:o,f=new Set((Array.isArray(h)?h:[]).map(b=>b));d=p.filter(b=>r.has(b)||f.has(b))}else if(c==null||c==="")d=c;else if(r.has(c))d=c;else return ud;return n?{...l(e)?e:{},[a]:d}:d}const pd=M`
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
`,dv=M`
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
  .fm-topbar-shortcuts {
    margin-right: 4px;
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

  /* ---- Dependency-conflict banner (why Save is disabled) ---- */
  .fm-conflict-banner {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 12px 24px 0;
    padding: 8px 12px;
    border: 1px solid var(--sfx-up-warning-border, #fcd34d);
    border-radius: 6px;
    background: var(--sfx-up-warning-bg, #fffbeb);
    color: var(--sfx-up-warning-text, #92400e);
    font-size: 13px;
    line-height: 1.4;
    flex-shrink: 0;
  }
  .fm-conflict-banner-text {
    flex: 1;
    min-width: 0;
  }
  .fm-conflict-banner-action {
    flex-shrink: 0;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
  .fm-conflict-banner-action:focus-visible {
    outline: 2px solid var(--sfx-up-primary, #2563eb);
    outline-offset: 2px;
    border-radius: 2px;
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
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-field-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

  ${pd}

  ${De}
`,uv=M`
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
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Absorbs the free space so the dot / asterisk stay right-aligned while the
     AI sparkles sit directly after the name (and survive a long, ellipsized
     title — the name shrinks, the icon does not). */
  .field-spacer {
    flex: 1 1 0;
    min-width: 0;
  }

  /* Gradient sparkles marking a field an AI post-process fills — mirrors the
     Hub's Settings / asset-details rows (14px, right after the field name). */
  .field-ai {
    display: inline-flex;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    margin-left: 2px;
    line-height: 0;
  }
  .field-ai svg {
    width: 14px;
    height: 14px;
  }

  .field-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
  }
  /* Filled, but a value conflicts with a dependency rule — replaces the green
     dot so the sidebar shows where Save is blocked. */
  .field-dot--conflict {
    background: var(--sfx-up-warning, #f97316);
    cursor: help;
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

  ${De}
`,pv=M`
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
    display: inline-flex;
    align-items: center;
    gap: 4px;
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
  .op-trigger--muted {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-muted, #94a3b8);
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
    display: inline-flex;
    align-items: center;
    gap: 4px;
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

  ${De}
`,hv=M`
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

  .row-field-readonly {
    min-width: 0;
    cursor: not-allowed;
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

  /* Value violates a firing dependency rule — amber edge + hint naming the
     accepted values, so the user can find the row blocking Save. */
  .row--conflict {
    border-left-color: var(--sfx-up-warning, #f59e0b);
  }
  .row-conflict {
    margin-top: 2px;
    font-size: 11px;
    color: var(--sfx-up-warning-text, #92400e);
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

  ${pd}

  ${De}
`,fv=M`
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
  .diff-chip {
    gap: 6px;
    max-width: 100%;
    min-width: 0;
  }
  .diff-chip s,
  .diff-chip--added,
  .diff-chip--removed {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
`,gv=M`
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
`,un=M`
  .be-field-hint {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    /* Same colour as the adjacent label text, like the Hub's ⓘ. */
    color: inherit;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 50%;
    /* The focusable variant is a <button> — strip the UA chrome. */
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
  }
  .be-field-hint:focus-visible {
    outline: 2px solid var(--sfx-up-primary, #2563eb);
    outline-offset: 1px;
  }
  .be-field-hint svg {
    width: 13px;
    height: 13px;
  }
  sfx-meta-hint-tooltip {
    flex-shrink: 0;
    vertical-align: middle;
  }
`,mv=["hidden","checkbox","radio","button","submit","reset","image","file","range","color"],vv=[`input${mv.map(s=>`:not([type=${s}])`).join("")}:not([disabled]):not([readonly])`,"textarea:not([disabled]):not([readonly])",'[contenteditable=""]','[contenteditable="true"]','[contenteditable="plaintext-only"]'].join(", "),hd='input:not([type=hidden]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';async function Js(s,e=5){let t=new Set;for(let i=0;i<e;i++){const o=bv(s);if(await Promise.allSettled(o.map(r=>r.updateComplete).filter(Boolean)),o.length===t.size&&o.every(r=>t.has(r)))return;t=new Set(o)}}function bv(s){const e=[s],t=i=>{for(const o of Array.from(i.children))e.push(o),o.shadowRoot&&t(o.shadowRoot),t(o)};return s.shadowRoot&&t(s.shadowRoot),t(s),e}function ts(s,e){for(const t of Array.from(s.children)){if(t instanceof HTMLElement&&t.matches(e)&&fd(t))return t;const i=t.shadowRoot?ts(t.shadowRoot,e):null;if(i)return i;const o=ts(t,e);if(o)return o}return null}function xr(s){const e=[],t=i=>{for(const o of Array.from(i.children))o instanceof HTMLElement&&o.matches(hd)&&fd(o)&&e.push(o),o.shadowRoot&&t(o.shadowRoot),t(o)};return s.shadowRoot&&t(s.shadowRoot),t(s),e}function fd(s){if(typeof s.checkVisibility=="function")return s.checkVisibility({visibilityProperty:!0,checkVisibilityCSS:!0});const e=getComputedStyle(s);return e.display!=="none"&&e.visibility!=="hidden"}function Xs(){var e;let s=document.activeElement;for(;(e=s==null?void 0:s.shadowRoot)!=null&&e.activeElement;)s=s.shadowRoot.activeElement;return s}function gd(s,e){for(;s;){if(s===e)return!0;s=s.parentNode??s.host??null}return!1}async function yr(s,{openPopup:e=!1}={}){const t=ts(s,vv),i=t??ts(s,hd);return i?(i.focus({preventScroll:!0,focusVisible:!0}),e&&!t&&i.hasAttribute("aria-haspopup")&&i.getAttribute("aria-expanded")==="false"&&(i.click(),await Js(s)),gd(Xs(),s)):!1}function md(s){return ts(s.shadowRoot??s,'[role="combobox"][aria-expanded="true"]')}function vd(s){s.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape",bubbles:!0,composed:!1}))}function xv(s){return s.key!=="Enter"||s.isComposing||s.altKey||!s.metaKey&&!s.ctrlKey?null:s.shiftKey?-1:1}function yv(){var e;if(typeof navigator>"u")return!1;const s=((e=navigator.userAgentData)==null?void 0:e.platform)||navigator.platform||"";return/mac|iphone|ipad|ipod/i.test(s)}let El;function bo(){return El??(El=yv()),El}function _v(){return bo()?"⌘↵":"Ctrl+Enter"}function Zs({shift:s=!1}={}){const e=bo(),t=[e?"⌘":"Ctrl","↵"];return s?[e?"⇧":"Shift",...t]:t}function wv(){return bo()?"⇧":"Shift"}function kv(){return bo()?"⌥":"Alt"}var $v=Object.defineProperty,bd=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&$v(e,t,o),o};const _r="sfx-bulk-edit:shortcut-hints-hidden";function Sv(){try{return localStorage.getItem(_r)==="1"}catch{return!1}}class Cv extends EventTarget{get hidden(){return this._hidden??(this._hidden=Sv()),this._hidden}set hidden(e){this._hidden=e;try{e?localStorage.setItem(_r,"1"):localStorage.removeItem(_r)}catch{}this.dispatchEvent(new Event("change"))}reload(){this._hidden=void 0}}const ii=new Cv,xd=M`
  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    box-sizing: border-box;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-bottom-width: 2px;
    border-radius: 4px;
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text, #1e293b);
    font: inherit;
    font-size: 11px;
    line-height: 1;
  }
`,Ev=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.6"
  stroke-linecap="round"
  aria-hidden="true"
>
  <line x1="4.5" y1="4.5" x2="11.5" y2="11.5" />
  <line x1="11.5" y1="4.5" x2="4.5" y2="11.5" />
</svg>`,Ln=class Ln extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.singleAsset=!1,this._hidden=ii.hidden,this._onPrefChange=()=>{this._hidden=ii.hidden}}connectedCallback(){super.connectedCallback(),this._hidden=ii.hidden,ii.addEventListener("change",this._onPrefChange)}disconnectedCallback(){super.disconnectedCallback(),ii.removeEventListener("change",this._onPrefChange)}_hide(){var i,o;ii.hidden=!0;const e=this.getRootNode(),t=(i=e.querySelector)==null?void 0:i.call(e,"sfx-bulk-shortcuts-menu");(o=t==null?void 0:t.focusButton)==null||o.call(t)}_renderKeys(e){return u`<span class="keys">${e.map(t=>u`<kbd>${t}</kbd>`)}</span>`}render(){if(this._hidden)return v;const e=k("hideKeyboardShortcuts","Hide keyboard shortcuts");return u`
      <ul class="hints" aria-label=${k("keyboardShortcuts","Keyboard shortcuts")}>
        <li class="hint">
          ${this._renderKeys(Zs())}
          ${this.singleAsset?k("shortcutNextField","Next field"):k("shortcutApplyNext","Apply & next field")}
        </li>
        <li class="hint">
          ${this._renderKeys(Zs({shift:!0}))}
          ${k("shortcutPreviousField","Previous field")}
        </li>
        <li class="hint">${this._renderKeys(["Esc"])} ${k("shortcutFieldList","Field list")}</li>
        <li class="hint">
          ${this._renderKeys(["↑","↓"])} ${k("shortcutBrowseFields","Browse fields")}
        </li>
      </ul>
      <button
        class="close"
        type="button"
        title=${e}
        aria-label=${e}
        @click=${this._hide}
      >
        ${Ev}
      </button>
    `}};Ln.styles=[xd,M`
      :host {
        display: flex;
        align-items: center;
        min-width: 0;
        container-type: inline-size;
        flex: 1;
        font-size: 12px;
        color: var(--sfx-up-text-secondary, #64748b);
      }
      .hints {
        display: flex;
        align-items: center;
        gap: 4px 14px;
        min-width: 0;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .hint {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        white-space: nowrap;
      }
      .keys {
        display: inline-flex;
        gap: 2px;
      }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        padding: 0;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--sfx-up-text-muted, #94a3b8);
        cursor: pointer;
      }
      button:hover {
        background: var(--sfx-up-border-light, #f8faff);
        color: var(--sfx-up-text, #1e293b);
      }
      button:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 1px;
      }
      button svg {
        width: 14px;
        height: 14px;
      }
      .close {
        margin-left: 6px;
      }
      /* Too narrow to fit next to the footer buttons (phones, where there is
       rarely a keyboard anyway): leave the space to them. */
      @container (max-width: 420px) {
        .hints,
        button {
          display: none;
        }
      }
    `];let is=Ln;bd([g({attribute:!1})],is.prototype,"singleAsset");bd([P()],is.prototype,"_hidden");Q("sfx-bulk-shortcut-hints",is);var Pv=Object.defineProperty,pn=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Pv(e,t,o),o};const Av=u`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <rect x="2.5" y="6" width="19" height="12.5" rx="2" />
  <path d="M6.5 10h.01M10 10h.01M14 10h.01M17.5 10h.01M7.5 14.5h9" />
</svg>`,Tv=180,Un=class Un extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.singleAsset=!1,this._open=!1,this._pinned=!1,this._closeTimer=null,this._onEnter=()=>{this._clearCloseTimer(),this._open=!0},this._onLeave=()=>{this._pinned||this.matches(":focus-within")||(this._clearCloseTimer(),this._closeTimer=setTimeout(()=>{this._closeTimer=null,this._open=!1},Tv))},this._onFocusOut=e=>{if(e.relatedTarget instanceof Node&&e.composedPath().includes(this)){const t=e.relatedTarget;if(this.contains(t)||this.renderRoot.contains(t))return}this._pinned||this.matches(":hover")||(this._open=!1)},this._onDocClick=e=>{!this._open||e.composedPath().includes(this)||(this._pinned=!1,this._open=!1)},this._onKeydown=e=>{e.key!=="Escape"||!this._open||(e.preventDefault(),e.stopPropagation(),this._pinned=!1,this._open=!1,this.focusButton())}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this._onEnter),this.addEventListener("mouseleave",this._onLeave),this.addEventListener("focusin",this._onEnter),this.addEventListener("focusout",this._onFocusOut),this.addEventListener("keydown",this._onKeydown),document.addEventListener("click",this._onDocClick,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this._onEnter),this.removeEventListener("mouseleave",this._onLeave),this.removeEventListener("focusin",this._onEnter),this.removeEventListener("focusout",this._onFocusOut),this.removeEventListener("keydown",this._onKeydown),document.removeEventListener("click",this._onDocClick,!0),this._clearCloseTimer()}focusButton(){var e;(e=this.renderRoot.querySelector(".btn"))==null||e.focus()}_clearCloseTimer(){this._closeTimer&&clearTimeout(this._closeTimer),this._closeTimer=null}_onButtonClick(){this._pinned=!this._pinned,this._open=this._pinned}_caps(...e){return u`${e.map((t,i)=>u`${i>0?u`<span>/</span>`:v}<span class="caps"
            >${t.map(o=>u`<kbd>${o}</kbd>`)}</span
          >`)}`}_groups(){const e=Zs(),t=Zs({shift:!0}),i=wv(),o=[{title:k("shortcutsGroupFields","Fields"),rows:[{keys:[e],label:this.singleAsset?k("shortcutNextField","Next field"):k("shortcutApplyNextLong","Apply to the selected assets & go to the next field")},{keys:[t],label:k("shortcutPreviousField","Previous field")},{keys:[["Esc"]],label:k("shortcutEscLadder","Back to the field list (pressed again: close)")}]},{title:k("shortcutsGroupFieldList","Field list"),rows:[{keys:[["↑"],["↓"]],label:k("shortcutMoveInList","Move up / down")},{keys:[["Home"],["End"]],label:k("shortcutFirstLast","First / last field")},{keys:[["↵"]],label:k("shortcutOpenField","Open the field")}]}];return this.singleAsset||o.push({title:k("shortcutsGroupRows","Asset rows"),rows:[{keys:[["Tab"],[i,"Tab"]],label:k("shortcutRowsTab","Same field of the next / previous asset")},{keys:[["↑"],["↓"]],label:k("shortcutRowsArrows","The same, in text, number and dropdown fields")},{keys:[["Tab"]],label:k("shortcutRowsCheckbox","On a checkbox: the next asset’s checkbox")}]}),o.push({title:k("shortcutsGroupDropdowns","Dropdowns"),rows:[{keys:[["Space"],["↵"],[kv(),"↓"]],label:k("shortcutOpenList","Open the list")},{keys:[["A–Z"]],label:k("shortcutTypeToSearch","Open it and search")},{keys:[["Esc"]],label:k("shortcutCloseList","Close the list")}]}),o}render(){const e=k("keyboardShortcuts","Keyboard shortcuts");return u`
      <button
        class="btn"
        type="button"
        title=${this._open?v:e}
        aria-label=${e}
        aria-expanded=${this._open}
        aria-controls="shortcuts-panel"
        @click=${this._onButtonClick}
      >
        ${Av}
      </button>
      ${this._open?u`<div class="panel" id="shortcuts-panel" role="region" aria-label=${e}>
            <h2>${e}</h2>
            ${this._groups().map(t=>u`
                <h3>${t.title}</h3>
                <dl>
                  ${t.rows.map(i=>u`<dt>${this._caps(...i.keys)}</dt>
                        <dd>${i.label}</dd>`)}
                </dl>
              `)}
          </div>`:v}
    `}};Un.styles=[xd,M`
      :host {
        position: relative;
        display: inline-flex;
        flex-shrink: 0;
      }
      .btn {
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
      }
      .btn:hover,
      .btn[aria-expanded='true'] {
        background: var(--sfx-up-hover, #f1f5f9);
        color: var(--sfx-up-text-secondary, #64748b);
      }
      .btn:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 1px;
      }
      .btn svg {
        width: 20px;
        height: 20px;
      }
      .panel {
        position: absolute;
        top: calc(100% + 6px);
        right: 0;
        z-index: 20;
        width: 380px;
        max-width: calc(100vw - 32px);
        max-height: min(75vh, 640px);
        overflow-y: auto;
        box-sizing: border-box;
        padding: 12px 14px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 10px;
        background: var(--sfx-up-bg, #fff);
        box-shadow:
          0 10px 30px rgba(15, 23, 42, 0.12),
          0 2px 6px rgba(15, 23, 42, 0.06);
        color: var(--sfx-up-text, #1e293b);
        font-size: 12.5px;
        text-align: left;
      }
      /* Bridges the 6px gap so the pointer can reach the panel from the button. */
      .panel::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -7px;
        height: 7px;
      }
      h2 {
        margin: 0 0 8px;
        font-size: 13px;
        font-weight: 600;
      }
      h3 {
        margin: 10px 0 4px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      dl {
        display: grid;
        /* One key column width for every group, so the labels line up. */
        grid-template-columns: 132px 1fr;
        gap: 5px 12px;
        margin: 0;
        align-items: center;
      }
      dt {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 3px;
        color: var(--sfx-up-text-muted, #94a3b8);
        font-size: 11px;
      }
      dd {
        margin: 0;
        color: var(--sfx-up-text-secondary, #64748b);
      }
      .caps {
        display: inline-flex;
        gap: 2px;
      }
    `];let vi=Un;pn([g({attribute:!1})],vi.prototype,"singleAsset");pn([P()],vi.prototype,"_open");pn([P()],vi.prototype,"_pinned");Q("sfx-bulk-shortcuts-menu",vi);var Rv=Object.defineProperty,J=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Rv(e,t,o),o};const Ov=new Set(["idle","queued","rejected"]);function No(s,e){return s===e?!0:Array.isArray(s)&&Array.isArray(e)&&JSON.stringify(s)===JSON.stringify(e)}function Pl(s,e){return`${s}␟${e}`}var Be;const G=(Be=class extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.files=[],this.config=null,this.initialFieldKey=null,this.aiFilledFields={},this.dependencies=[],this.primaryAction="save",this.exitAction="cancel",this.operationMode="full",this._activeFieldKey="",this._didInitialFocus=!1,this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._confirmAllowApply=!1,this._confirmKind="discard",this._applyConfirmField="",this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._conflictedFieldKey=null,this._conflictedFieldKeys=[],this._conflictsByFile=new Map,this._autoFilled=new Map,this._userOverrides=new Map,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onDialogCancel=e=>{e.preventDefault()},this._escapeStartedInOpenPopup=!1,this._onKeyDownCapture=e=>{if(this._onFieldNavShortcut(e)||this._onOpBarTab(e)||e.key!=="Escape"||e.isComposing)return;const t=e.composedPath(),i=[this._editorEl,this._tableEl].map(o=>o?t.indexOf(o):-1).find(o=>o>=0);this._escapeStartedInOpenPopup=i!==void 0&&t.slice(0,i).some(o=>o instanceof Element&&o.getAttribute("aria-expanded")==="true")},this._onKeyDown=async e=>{var a;if(e.key!=="Escape"||e.isComposing)return;const t=this._escapeStartedInOpenPopup;this._escapeStartedInOpenPopup=!1;const i=e.composedPath(),o=e.target===document.body||e.target===document.documentElement;if((i.includes(this)||o&&this._isDialogOpen())&&e.preventDefault(),this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}if([this._editorEl,this._tableEl].find(l=>l&&i.includes(l))){!t&&!Be._fieldMovedFocus(i[0])&&((a=this._sidebarEl)==null||a.focusActive());return}i.some(l=>l instanceof HTMLInputElement||l instanceof HTMLTextAreaElement||l instanceof HTMLSelectElement)||await this._onClose()},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmApply=()=>{var t,i;(((t=this._opBarEl)==null?void 0:t.applyPending())??!1)&&(this._confirmVisible=!1,(i=this._confirmResolve)==null||i.call(this,!0),this._confirmResolve=null)},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,l;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const o=i[0],r=i[i.length-1],n=(l=this.shadowRoot)==null?void 0:l.activeElement;e.shiftKey&&n===o?(e.preventDefault(),r.focus()):!e.shiftKey&&n===r&&(e.preventDefault(),o.focus())},this._onPendingChange=e=>{const{operation:t,value:i,taxonomyEntry:o}=e.detail,r=this._activeField;((r==null?void 0:r.type)==="taxonomy-node"?o==null:Ve(i))&&(!r||vr(t,r.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:i,taxonomyEntry:o})},this._onFieldSelect=async e=>{if(e.detail.fieldKey===this._activeFieldKey){this._focusActiveFieldEditor();return}await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey,this._focusActiveFieldEditor())},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e,this._focusActiveFieldEditor())},this._fieldNavBusy=!1,this._onSolveConflicts=async()=>{const e=this._navigableConflictedKeys();if(e.length===0)return;const t=e.indexOf(this._activeFieldKey),i=e[(t+1)%e.length];i!==this._activeFieldKey&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=i,this._focusActiveFieldEditor())},this._dependencyNamesFor=null,this._dependencyNamesCache=new Map,this._onBulkApply=e=>{const t=this._activeField;if(t){if(t.type==="attachments-assets"&&!e.detail.confirmed){e.preventDefault(),this._confirmApply(t.title).then(i=>{var o;i&&(this._applyBulk(t,e.detail),(o=this._opBarEl)==null||o.resetAfterApply())});return}this._applyBulk(t,e.detail)}},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:o}=e.detail;this._setStagedTaxonodeSingle(t,i,o)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null||await this._confirmDiscardPending()&&(this._setPendingOp(null),this._refreshMissingRequired(),this._refreshConflictedField(),!(this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null)&&(this._commitStagedChanges(),this._emitClose(!0)))},this._onCancel=async()=>{await this._confirmDiscardAll()&&this._emitClose()},this._onBack=async()=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._commitStagedChanges(),this._emitClose(!1))},this._onClose=async()=>{if(this.exitAction==="back"){await this._onBack();return}await this._confirmDiscardAll()&&this._emitClose()}}get _singleAsset(){return this.files.length===1}get _titleText(){return this._singleAsset?k("editMetadata","Edit metadata"):k("fillMultipleAssets","Fill multiple assets")}_isRowEditable(e){return!ue(e)&&!Mr(e,{hasAssetPicker:!!this.pickAssets})}get _editorEl(){return this._singleAsset?this._tableEl:this._opBarEl}connectedCallback(){super.connectedCallback(),this._normalizeSchema(),this._initStaged(),document.addEventListener("keydown",this._onKeyDownCapture,!0),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDownCapture,!0),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_showModally(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog.fm-overlay");if(!(!e||e.open||typeof e.showModal!="function"))try{e.showModal()}catch{}}_isDialogOpen(){var e,t;return!!((t=(e=this.shadowRoot)==null?void 0:e.querySelector("dialog.fm-overlay"))!=null&&t.open)}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},Be._PREVIEW_DEBOUNCE_MS)}static _fieldMovedFocus(e){return Xs()!==e}_initStaged(){var a,l;this._autoFilled.clear(),this._userOverrides.clear();const e=new Map,t=new Map,i=new Set,o=new Map,r=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const c of this.files){const d=new Map;if(c.meta)for(const[p,h]of Object.entries(c.meta))d.set(p,h);if(r){const p=c.product;(p==null?void 0:p.ref)!==void 0&&d.set(Bt,p.ref),(p==null?void 0:p.position)!==void 0&&d.set(jt,p.position)}Array.isArray(c.tags)&&c.tags.length>0&&d.set(en,[...c.tags]),e.set(c.id,d),c.taxonodes&&t.set(c.id,new Map(Object.entries(c.taxonodes))),i.add(c.id),o.set(c.id,c.status?c:{...c,status:"idle"})}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=o,this._recomputeResolvedSchemas();const n=this.initialFieldKey;if(n&&((l=this.schema)!=null&&l.fieldsByKey.has(n)))this._activeFieldKey=n;else if(this.schema&&this.schema.fields.length>0){const c=this._groupOfFieldMap(),d=this.schema.fields.find(p=>this._isFieldNavigable(p,c));this._activeFieldKey=(d==null?void 0:d.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_isReadOnlyKey(e){var i;const t=(i=this.schema)==null?void 0:i.fieldsByKey.get(e);return!!t&&ue(t)}_setStagedValue(e,t,i){if(this._isReadOnlyKey(t))return;const o=new Map(this._staged),r=new Map(o.get(e)??new Map);r.set(t,i),o.set(e,r),this._staged=o}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,o,r]of e){if(this._isReadOnlyKey(o))continue;const n=new Map(t.get(i)??new Map);n.set(o,r),t.set(i,n)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){if(this._isReadOnlyKey(t))return;const o=new Map(this._stagedTaxonodes);for(const r of e){const n=new Map(o.get(r)??new Map);n.set(t,i),o.set(r,n)}this._stagedTaxonodes=o}_setStagedTaxonodeSingle(e,t,i){if(this._isReadOnlyKey(t))return;const o=new Map(this._stagedTaxonodes),r=new Map(o.get(e)??new Map);r.set(t,i),o.set(e,r),this._stagedTaxonodes=o}_isTaxonodeEntryUnedited(e,t){var r,n,a;const i=(r=this._stagedTaxonodes.get(e))==null?void 0:r.get(t);if(i===void 0)return!0;if(i===null)return!1;const o=(a=(n=this._originalFiles.get(e))==null?void 0:n.taxonodes)==null?void 0:a[t];return o?i.uuid===o.uuid||i.suid===o.suid:!1}_syncStagedTaxonodesFromFiles(){var i;let e=!1;const t=new Map(this._stagedTaxonodes);for(const o of this.files)if(o.taxonodes)for(const[r,n]of Object.entries(o.taxonodes)){const a=this._isTaxonodeEntryUnedited(o.id,r),l=(i=t.get(o.id))==null?void 0:i.get(r),c=l!=null&&n!=null&&(l.uuid===n.uuid||l.suid===n.suid),d=l==null&&n==null;if(!a||c||d)continue;const p=new Map(t.get(o.id)??new Map);p.set(r,n??null),t.set(o.id,p),e=!0;const h=this._originalFiles.get(o.id);h&&this._originalFiles.set(o.id,{...h,taxonodes:{...h.taxonodes??{},[r]:n??null}})}e&&(this._stagedTaxonodes=t)}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,o;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const r of this._selected){const n=this._originalFiles.get(r),a=(i=this._staged.get(r))==null?void 0:i.get(e.key),l=a!==void 0?a:(o=n==null?void 0:n.meta)==null?void 0:o[e.key],c=gi(l);c.length&&(t=Ns(t,c,!1))}return t.filter(r=>typeof r!="string")}_originalValue(e,t){var o,r;const i=this._originalFiles.get(e);if(i){if(Wo(t)){const n=Jo(t);return n?(o=i.product)==null?void 0:o[n]:void 0}return or(t)?Array.isArray(i.tags)?[...i.tags]:[]:(r=i.meta)==null?void 0:r[t]}}_stagedWithPendingPreview(){const e=this._previewOp,t=this._activeField;if(!e||!t||Ve(e.value)||this._selected.size===0)return this._staged;const{updates:i}=this._computeBulkUpdates(t,e.operation,e.value);if(i.length===0)return this._staged;const o=new Map(this._staged);for(const[r,n,a]of i){const l=new Map(o.get(r)??new Map);l.set(n,a),o.set(r,l)}return o}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&xc(this.schema,this.config)?Qp(this._stagedWithPendingPreview(),this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const n of this.schema.fields)if(t.has(n.key)){i=n.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const o=this._missingRequiredKeys;let r=o.size!==t.size;if(!r){for(const n of t)if(!o.has(n)){r=!0;break}}r&&(this._missingRequiredKeys=t)}_refreshConflictedField(){const e=this.schema&&this.dependencies.length>0?eh(this._staged,this._originalFiles,this.schema,this.dependencies):new Map,t=new Set;for(const n of e.values())for(const a of n.keys())t.add(a);const i=this.schema?this.schema.fields.filter(n=>t.has(n.ckey)).map(n=>n.key):[],o=i[0]??null;o!==this._conflictedFieldKey&&(this._conflictedFieldKey=o);const r=this._conflictedFieldKeys;(r.length!==i.length||r.some((n,a)=>n!==i[a]))&&(this._conflictedFieldKeys=i),(e.size>0||this._conflictsByFile.size>0)&&(this._conflictsByFile=e)}_applySetValuesPreFill(){var n,a;if(!this.schema||this.dependencies.length===0)return!1;const e=this.schema;let t=null;const i=l=>{t??(t=new Map(this._staged));const c=new Map(t.get(l)??new Map);return t.set(l,c),c},o=(l,c)=>{var h,f;const d=(h=e.fieldsByKey)==null?void 0:h.get(c),p=d&&((f=this._cachedPerFileResolved.get(l))==null?void 0:f.get(d.ckey));if(!(!d||(p==null?void 0:p.setValue)===void 0||p.hidden))return Yo(d,p.setValue)};for(const[l,c]of this._userOverrides){const d=o(c.fileId,c.fieldKey);(d===void 0||!No(d,c.ruleValue))&&this._userOverrides.delete(l)}for(const[l,c]of this._autoFilled){const d=o(c.fileId,c.fieldKey),p=(n=this._staged.get(c.fileId))==null?void 0:n.get(c.fieldKey),h=!No(p,c.value);if(d!==void 0&&No(d,c.value)){h&&(this._autoFilled.delete(l),this._userOverrides.set(l,{fileId:c.fileId,fieldKey:c.fieldKey,ruleValue:d}));continue}if(this._autoFilled.delete(l),h)continue;const f=i(c.fileId);c.hadKey?f.set(c.fieldKey,c.before):f.delete(c.fieldKey)}const r=e.fields.filter(l=>!ue(l)&&!l.regional_variants_group_uuid);for(const[l,c]of this._cachedPerFileResolved){const d=this._originalFiles.get(l);if(!d||!Ov.has(d.status))continue;const p=(t==null?void 0:t.get(l))??this._staged.get(l);let h=null;for(const f of r){const b=c.get(f.ckey);if((b==null?void 0:b.setValue)===void 0||b.hidden)continue;const m=(p==null?void 0:p.has(f.key))??!1,C=m?p.get(f.key):this._originalValue(l,f.key);if(!Ve(C)||(h??(h=Dt({mime:d.type??"",meta:d.meta},e,this.dependencies)),((a=h.get(f.ckey))==null?void 0:a.setValue)!==void 0)||this._userOverrides.has(Pl(l,f.key)))continue;const A=Yo(f,b.setValue);i(l).set(f.key,A),this._autoFilled.set(Pl(l,f.key),{fileId:l,fieldKey:f.key,value:A,before:C,hadKey:m})}}return t?(this._staged=t,!0):!1}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),o={...t.meta};if(i)for(const[r,n]of i)o[r]=n;e.push({id:t.id,mime:t.type??"",meta:o})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=Ep(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),o={...t.meta};if(i)for(const[r,n]of i)o[r]=n;e.set(t.id,Dt({mime:t.type??"",meta:o},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var r;if(!this.schema||!this._activeFieldKey)return;const e=(r=this.schema.fieldsByKey)==null?void 0:r.get(this._activeFieldKey);if(!!e&&this._cachedBulkResolved.size===0)return;const i=this._groupOfFieldMap();if(e&&this._isFieldNavigable(e,i))return;const o=this.schema.fields.find(n=>this._isFieldNavigable(n,i));this._setPendingOp(null),this._activeFieldKey=(o==null?void 0:o.key)??""}_groupOfFieldMap(){var t,i;if(this.schema&&((t=this._groupOfFieldCache)==null?void 0:t.schema)===this.schema)return this._groupOfFieldCache.map;const e=new Map;for(const o of((i=this.schema)==null?void 0:i.groups)??[])for(const r of o.fields)e.set(r,o);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return Yr(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){const i=t.get(e);return!(to(e,i,this._cachedBulkResolved)||i&&Gr(i)&&!this._isFieldRequiredBulk(e)&&!Lr(e,i,this._cachedBulkResolved))}_recomputeFilledFields(){var r;const e=new Set,t=this._stagedWithPendingPreview();for(const n of((r=this.schema)==null?void 0:r.fields)??[])for(const[a,l]of t){const c=l.get(n.key),d=this._originalValue(a,n.key);if(c!==void 0&&!Ve(c)&&JSON.stringify(c)!==JSON.stringify(d)){e.add(n.key);break}}const i=this._filledFieldsCache;let o=i.size!==e.size;if(!o){for(const n of e)if(!i.has(n)){o=!0;break}}o&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const e=[...this.files];e.sort((t,i)=>{const o=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?o:-o}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!Ve(this._pendingOp.value)}get _hasStagedChanges(){var e;for(const[t,i]of this._staged)for(const[o,r]of i)if(JSON.stringify(r)!==JSON.stringify(this._originalValue(t,o)))return!0;for(const[t,i]of this._stagedTaxonodes){const o=((e=this._originalFiles.get(t))==null?void 0:e.taxonodes)??{};for(const[r,n]of i){const a=o[r]??null;if(JSON.stringify(n??null)!==JSON.stringify(a??null))return!0}}return!1}_confirmDiscardPending(){return this._hasPendingValue?this._openDiscardConfirm(!0):Promise.resolve(!0)}_confirmDiscardAll(){return!this._hasPendingValue&&!this._hasStagedChanges?Promise.resolve(!0):this._openDiscardConfirm(!1)}_openDiscardConfirm(e){return new Promise(t=>{this._confirmKind="discard",this._confirmResolve=t,this._confirmAllowApply=e,this._confirmVisible=!0})}_normalizeSchema(){if(!this.schema)return;const e=wc(this.schema);e!==this.schema&&(this.schema=e)}willUpdate(e){e.has("schema")&&this._normalizeSchema(),e.has("files")&&this._singleAsset&&this._pendingOp&&this._setPendingOp(null);let t=!1;if(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files")){this._recomputeResolvedSchemas();for(let i=0;i<5&&this._applySetValuesPreFill();i++)t=!0,this._recomputeResolvedSchemas();this._advanceActiveFieldIfHidden()}(t||e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies")||e.has("_previewOp")||e.has("_selected"))&&(this._refreshMissingRequired(),this._refreshConflictedField()),(t||e.has("_staged")||e.has("schema")||e.has("_previewOp")||e.has("_selected"))&&this._recomputeFilledFields(),(e.has("files")||e.has("_sortAsc"))&&this._recomputeSortedFiles(),e.has("files")&&this._syncStagedTaxonodesFromFiles()}updated(e){var t;(t=super.updated)==null||t.call(this,e),this._showModally(),!this._didInitialFocus&&this._activeFieldKey&&(this._didInitialFocus=!0,this._focusActiveFieldEditor()),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var r;const i=this._confirmAllowApply||this._confirmKind==="apply"?".fm-confirm .btn-primary":".fm-confirm .fm-confirm-close",o=(r=this.shadowRoot)==null?void 0:r.querySelector(i);o==null||o.focus()})}async _focusActiveFieldEditor(){var e,t;if(!Be._isTouchPrimary())try{await this.updateComplete,this._singleAsset?await((e=this._tableEl)==null?void 0:e.focusFirstRowField()):await((t=this._opBarEl)==null?void 0:t.focusValue())}catch{}}_renderShortcutHints(){return Be._isTouchPrimary()?u`<div class="spacer"></div>`:u`<sfx-bulk-shortcut-hints
      class="spacer"
      .singleAsset=${this._singleAsset}
    ></sfx-bulk-shortcut-hints>`}static _isTouchPrimary(){return typeof window.matchMedia=="function"&&window.matchMedia("(hover: none) and (pointer: coarse)").matches}_onOpBarTab(e){if(e.key!=="Tab"||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||e.isComposing)return!1;const t=this._opBarEl,i=this._tableEl;if(this._singleAsset||!t||!i||this.files.length===0)return!1;const o=e.composedPath();if(!o.includes(t))return!1;const r=o[0],n=xr(t);if(n.length===0||r!==n[n.length-1])return!1;const a=i.files[0];return!a||this._pendingOp&&this._selected.has(a.id)||!i.rowFieldIsEditable(0)?!1:(e.preventDefault(),e.stopPropagation(),r instanceof HTMLElement&&md(t)&&vd(r),i.focusRowAt(0),!0)}_onFieldNavShortcut(e){const t=xv(e);return t===null||!e.composedPath().includes(this)?!1:(e.preventDefault(),e.stopPropagation(),e.repeat||this._confirmVisible||this._fieldNavBusy||(this._fieldNavBusy=!0,this._applyAndStepField(t).finally(()=>{this._fieldNavBusy=!1})),!0)}async _applyAndStepField(e){if(!this._commitActiveEditor())return;await this.updateComplete;const t=this._adjacentFieldKey(e);t&&t!==this._activeFieldKey&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=t),this._focusActiveFieldEditor()}_commitActiveEditor(){var t;const e=Xs();if(e instanceof HTMLElement&&gd(e,this)){const i=Be._rowOf(e);if(e.blur(),i!=null&&i.hasInvalidValue)return e.focus({preventScroll:!0}),!1}return this._singleAsset?!0:((t=this._opBarEl)==null?void 0:t.apply())!=="deferred"}static _rowOf(e){let t=e;for(;t;){if(t instanceof Element&&t.localName==="sfx-bulk-meta-row")return t;t=t.parentNode??t.host??null}return null}_adjacentFieldKey(e){if(!this.schema)return null;const t=this._groupOfFieldMap(),i=this.schema.groups.flatMap(n=>n.fields).filter(n=>this._isFieldNavigable(n,t)).map(n=>n.key),o=i.indexOf(this._activeFieldKey),r=i[o+e];return o>=0&&r!==void 0?r:e===1?this._missingRequiredFieldKey:null}_navigableConflictedKeys(){var i;const e=(i=this.schema)==null?void 0:i.fieldsByKey;if(!e)return[];const t=this._groupOfFieldMap();return this._conflictedFieldKeys.filter(o=>{const r=e.get(o);return!!r&&this._isFieldNavigable(r,t)})}get _dependencyNames(){return this._dependencyNamesFor!==this.dependencies&&(this._dependencyNamesFor=this.dependencies,this._dependencyNamesCache=new Map(this.dependencies.map(e=>[e.uuid,e.name]))),this._dependencyNamesCache}_renderConflictBanner(){if(this._conflictedFieldKeys.length===0||this._missingRequiredFieldKey!=null)return v;const t=this._navigableConflictedKeys(),i=t.includes(this._activeFieldKey),o=t.some(n=>n!==this._activeFieldKey),r=t.length===0?k("conflictOnUnselectedAssets","Some unselected assets have values that conflict with a dependency rule. Select them to resolve."):i?k("conflictOnActiveField","Some assets below have a value that conflicts with a dependency rule. Choose an allowed value to save."):t.length===1?k("conflictedFieldsOne","1 linked metadata has conflicts."):k("conflictedFieldsMany","{{count}} linked metadata have conflicts.",{count:t.length});return u`
      <div class="fm-conflict-banner" role="status" aria-live="polite">
        <span class="fm-conflict-banner-text">${r}</span>
        ${o?u`<button
              type="button"
              class="fm-conflict-banner-action"
              @click=${this._onSolveConflicts}
            >
              ${i?k("nextConflict","Next conflict"):k("solveConflicts","Solve conflicts")}
            </button>`:v}
      </div>
    `}_computeBulkUpdates(e,t,i){var a;const o=zt(e,this.config),r=[],n=new Set;for(const l of this._selected){const c=(a=this._cachedPerFileResolved.get(l))==null?void 0:a.get(e.ckey);if(c!=null&&c.hidden)continue;const d=this._staged.get(l),p=d!=null&&d.has(e.key)?d.get(e.key):this._originalValue(l,e.key)??null;let h=dd(e,p,i,t,o);const f=br(c);if(f){const b=cv(e,h,f,o,p);if(b===ud)continue;h=b}r.push([l,e.key,h]),n.add(l)}return{updates:r,appliedIds:n}}_attachmentExcludeIds(){return[...this._selected]}_confirmApply(e){return new Promise(t=>{this._confirmKind="apply",this._applyConfirmField=e,this._confirmAllowApply=!1,this._confirmResolve=t,this._confirmVisible=!0})}_applyBulk(e,t){const{operation:i,value:o,taxonomyEntry:r}=t,{updates:n,appliedIds:a}=this._computeBulkUpdates(e,i,o);this._setStagedBulk(n),e.type==="taxonomy-node"&&r!==void 0&&this._setStagedTaxonodeBulk(a,e.key,r)}_commitStagedChanges(){var r,n;const e=[],t=[],i=[];for(const[a,l]of this._staged){if(!this._originalFiles.get(a))continue;const d={},p={};for(const[h,f]of l){if(this._isReadOnlyKey(h))continue;const b=this._originalValue(a,h);if(((n=(r=this.schema)==null?void 0:r.fieldsByKey.get(h))==null?void 0:n.type)==="attachments-assets"){const m=Da(f);JSON.stringify(m)!==JSON.stringify(Da(b))&&(d[h]=m);continue}if(JSON.stringify(f)!==JSON.stringify(b))if(Wo(h)){const m=Jo(h);if(!m)continue;const C=f===""||f==null;m==="position"?p.position=C?void 0:Number(f):p.ref=C?void 0:String(f)}else if(or(h)){const m=Array.isArray(f)?f:[];i.push({fileId:a,tags:m})}else d[h]=f}Object.keys(d).length>0&&e.push({fileId:a,meta:d}),Object.keys(p).length>0&&t.push({fileId:a,product:p})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),i.length>0&&this.dispatchEvent(new CustomEvent("tags-save-batch",{detail:{changes:i},bubbles:!0,composed:!0}));const o=[];for(const[a,l]of this._stagedTaxonodes){const c=this._originalFiles.get(a);if(!c)continue;const d=c.taxonodes??{},p={};for(const[h,f]of l){if(this._isReadOnlyKey(h))continue;const b=d[h]??null;JSON.stringify(f??null)!==JSON.stringify(b??null)&&(p[h]=f??null)}Object.keys(p).length>0&&o.push({fileId:a,taxonodes:p})}o.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:o},bubbles:!0,composed:!0}))}_emitClose(e=!1){this.dispatchEvent(new CustomEvent("metadata-close",{detail:{saved:e},bubbles:!0,composed:!0}))}render(){var A,$,E,y;if(!(($=(A=this.schema)==null?void 0:A.fields)!=null&&$.length))return u`
        <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
          <div class="fm-modal" @click=${w=>w.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">${this._titleText}</span>
              <button class="fm-topbar-close" @click=${this._onClose} title=${k("close","Close")}>
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
              ${k("noMetadataFieldsConfigured","No metadata fields configured")}
            </div>
          </div>
        </dialog>
      `;const e=this._activeField,t=this._sortedFilesCache,i=this._selected.size===this.files.length&&this.files.length>0,o=this._selected.size>0&&!i,r=this._missingRequiredFieldKey,n=this._cachedBulkResolved,a=this._cachedPerFileResolved,l=(e==null?void 0:e.type)==="attachments-assets"?this._attachmentExcludeIds():[],c=e==null?void 0:e.ckey,d=c?n.get(c):void 0,p=r!=null&&this._activeFieldKey===r,h=this._singleAsset,f=h&&!!e&&this._isRowEditable(e),b=r!=null&&!p,m=this._conflictedFieldKey!=null,C=this.primaryAction==="upload"?this.files.length>1?k("uploadAll","Upload all ({{count}})",{count:this.files.length}):k("upload","Upload"):k("save","Save");return u`
      <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
        <div class="fm-modal" @click=${w=>w.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${this._titleText}</span>
            ${(E=this.schema.regionalVariantsGroups)!=null&&E.length?u`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((y=this.config)==null?void 0:y.regionalFilters)??{}}
                ></sfx-regional-settings>`:v}
            ${Be._isTouchPrimary()?v:u`<sfx-bulk-shortcuts-menu
                  class="fm-topbar-shortcuts"
                  .singleAsset=${h}
                ></sfx-bulk-shortcuts-menu>`}
            <button class="fm-topbar-close" @click=${this._onClose} title=${k("close","Close")}>
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
              .conflictedKeys=${this._conflictedFieldKeys}
              .aiFilledFields=${this.aiFilledFields}
              .config=${this.config}
              .bulkResolvedSchema=${n}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              ${this._renderConflictBanner()}
              ${e?u`
                    <!-- Op bar — not in single-asset mode, where the row is edited
                         directly (kept for read-only / unsupported fields: it
                         carries their lock notice) -->
                    ${f?v:u`<sfx-bulk-meta-op-bar
                          .field=${e}
                          .autocomplete=${this.autocomplete}
                          .taxonomyService=${this.taxonomyService}
                          .pickAssets=${this.pickAssets}
                          .attachmentExcludeIds=${l}
                          .ultratags=${this.ultratags}
                          .defaultLanguage=${this.defaultLanguage}
                          .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
                          .config=${this.config}
                          .selectedCount=${this._selected.size}
                          .allowedValues=${br(d)??null}
                          .operationMode=${this.operationMode}
                          @bulk-apply=${this._onBulkApply}
                          @pending-change=${this._onPendingChange}
                        ></sfx-bulk-meta-op-bar>`}

                    <!-- Table header -->
                    <div class="fm-table-header">
                      <div class="fm-th-check">
                        ${h?v:u`<input
                              type="checkbox"
                              class="fm-checkbox"
                              .checked=${i}
                              .indeterminate=${o}
                              @change=${this._onSelectAll}
                            />`}
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${k("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${k("size","Size")}</div>
                      <div class="fm-th-field">
                        <span class="fm-th-field-title">${e.title}</span>
                        ${Ki(e,"be-field-hint")}
                      </div>
                    </div>

                    <!-- Table body -->
                    <div class="fm-table-body">
                      <sfx-bulk-meta-table
                        .hideSelection=${h}
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._previewOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .pickAssets=${this.pickAssets}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        .perFileResolved=${a}
                        .conflictsByFile=${this._conflictsByFile}
                        .dependencyNames=${this._dependencyNames}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    </div>
                  `:u`
                    <!-- Every group is hidden by default with no required field
                         to surface — nothing to edit, but the schema isn't empty. -->
                    <div class="fm-empty" role="status" aria-live="polite">
                      ${k("allMetadataFieldsHidden","All metadata fields are currently hidden")}
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
                    title=${k("backToFilesHint","Back to your files — filled metadata is kept")}
                  >
                    ← ${k("backToFiles","Back to files")}
                  </button>
                  ${this._renderShortcutHints()}
                `:u`
                  ${this._renderShortcutHints()}
                  <button class="btn-ghost" @click=${this._onCancel}>
                    ${k("cancel","Cancel")}
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
              class=${dn({"btn-primary":!0,"btn-primary--next":b})}
              @click=${b?this._onJumpToNextRequired:this._onSave}
              ?disabled=${p||!b&&m}
              title=${b?k("jumpToNextMetadata","Jump to next required field"):""}
            >
              ${b?u`<span class="btn-primary-label">${k("nextMetadata","Next metadata")}</span
                    ><span class="btn-primary-arrow" aria-hidden="true">→</span>`:C}
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
                    @click=${w=>w.stopPropagation()}
                  >
                    <div class="fm-confirm-header">
                      <h3 class="fm-confirm-title" id="fm-confirm-title">
                        ${this._confirmKind==="apply"?k("applyChangesTitle","Apply changes"):this._confirmAllowApply?k("unappliedChangesTitle","Unapplied changes"):k("unsavedChangesTitle","Unsaved changes")}
                      </h3>
                      <button
                        class="fm-confirm-close"
                        aria-label=${k("cancel","Cancel")}
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
                      ${this._confirmKind==="apply"?k("applyChangesBody",'Are you sure you want to apply changes for {{count}} assets to metadata "{{field}}"? Existing values will be overwritten.',{count:this._selected.size,field:this._applyConfirmField}):this._confirmAllowApply?k("unappliedChangesBody","You have unapplied bulk changes for this field. Apply them before switching, or discard to continue without saving."):k("discardBulkChanges","You have unsaved changes. Discard them?")}
                    </p>
                    <div class="fm-confirm-actions">
                      ${this._confirmKind==="apply"?u`
                            <button class="btn-ghost" @click=${this._onConfirmCancel}>
                              ${k("cancel","Cancel")}
                            </button>
                            <button class="btn-primary" @click=${this._onConfirmOk}>
                              ${k("confirm","Confirm")}
                            </button>
                          `:this._confirmAllowApply?u`
                              <button class="btn-ghost" @click=${this._onConfirmOk}>
                                ${k("discard","Discard")}
                              </button>
                              <button class="btn-primary" @click=${this._onConfirmApply}>
                                ${k("apply","Apply")}
                              </button>
                            `:u`<button class="btn-primary" @click=${this._onConfirmOk}>
                              ${k("discard","Discard")}
                            </button>`}
                    </div>
                  </div>
                </div>
              `:v}
        </div>
      </dialog>
    `}},Be.styles=[dv,un],Be._PREVIEW_DEBOUNCE_MS=150,Be);J([g({attribute:!1})],G.prototype,"schema");J([g({attribute:!1})],G.prototype,"files");J([g({attribute:!1})],G.prototype,"config");J([g({attribute:!1})],G.prototype,"autocomplete");J([g({attribute:!1})],G.prototype,"taxonomyService");J([g({attribute:!1})],G.prototype,"pickAssets");J([g({attribute:!1})],G.prototype,"ultratags");J([g({attribute:!1})],G.prototype,"defaultLanguage");J([g({attribute:!1})],G.prototype,"initialFieldKey");J([g({attribute:!1})],G.prototype,"aiFilledFields");J([g({attribute:!1})],G.prototype,"dependencies");J([g({type:String})],G.prototype,"primaryAction");J([g({type:String})],G.prototype,"exitAction");J([g({type:String})],G.prototype,"operationMode");J([P()],G.prototype,"_activeFieldKey");J([P()],G.prototype,"_staged");J([P()],G.prototype,"_stagedTaxonodes");J([P()],G.prototype,"_selected");J([P()],G.prototype,"_sortAsc");J([P()],G.prototype,"_previewOp");J([P()],G.prototype,"_confirmVisible");J([P()],G.prototype,"_confirmAllowApply");J([P()],G.prototype,"_confirmKind");J([P()],G.prototype,"_applyConfirmField");J([Yt("sfx-bulk-meta-op-bar")],G.prototype,"_opBarEl");J([Yt("sfx-bulk-meta-sidebar")],G.prototype,"_sidebarEl");J([Yt("sfx-bulk-meta-table")],G.prototype,"_tableEl");J([P()],G.prototype,"_missingRequiredFieldKey");J([P()],G.prototype,"_missingRequiredKeys");J([P()],G.prototype,"_conflictedFieldKey");J([P()],G.prototype,"_conflictedFieldKeys");J([P()],G.prototype,"_conflictsByFile");let Iv=G;Q("sfx-bulk-metadata-modal",Iv);function Fv(s,e){const t=s==null?void 0:s[e];return t?typeof t=="string"&&t.trim()!==""?t:k("filledByAi","Filled by AI"):null}const Lv="#E12AFB",Uv="#432DD7",Al="sfx-ai-sparkles-gradient",Dv=u`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#${Al})"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  ${ee`<defs><linearGradient id="${Al}" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="0"><stop offset="0%" stop-color="${Lv}"/><stop offset="100%" stop-color="${Uv}"/></linearGradient></defs><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>`}
</svg>`;var zv=Object.defineProperty,Ze=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&zv(e,t,o),o};const Dn=class Dn extends Y{constructor(){super(),this._i18nController=new Ye(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.conflictedKeys=[],this.config=null,this.aiFilledFields={},this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onListKeydown=e=>{var n;if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.isComposing||!["ArrowDown","ArrowUp","Home","End"].includes(e.key))return;const t=e.composedPath()[0],i=this.renderRoot.querySelector(".sb-search-input"),o=[...this.renderRoot.querySelectorAll(this._isNarrow?".field-item":".group-label, .field-item")];if(o.length===0)return;let r;if(t===i){if(e.key!=="ArrowDown")return;r=o[0]}else{const a=o.indexOf(t);if(a<0)return;e.key==="Home"?r=o[0]:e.key==="End"?r=o[o.length-1]:e.key==="ArrowDown"?r=o[a+1]:a>0?r=o[a-1]:r=this._isNarrow?void 0:i??void 0}e.preventDefault(),r&&(r.focus({preventScroll:!0}),(n=r.scrollIntoView)==null||n.call(r,{block:"nearest"}))},this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)},this.addEventListener("keydown",this._onListKeydown)}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return Yr(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var t;const e=((t=this.schema)==null?void 0:t.groups)??[];return e.length>0&&e.every(i=>this._collapsed.has(i.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var t;this._query="";const e=(t=this.renderRoot)==null?void 0:t.querySelector(".sb-search-input");e==null||e.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}focusActive(){var t,i,o;const e=((t=this.renderRoot)==null?void 0:t.querySelector(".field-item.active"))??this._activeGroupLabel()??((i=this.renderRoot)==null?void 0:i.querySelector(".sb-search-input"));e&&(e.focus({preventScroll:!0}),(o=e.scrollIntoView)==null||o.call(e,{block:"nearest"}))}_activeGroupLabel(){var o,r;const e=this.activeFieldKey,t=(o=this.schema)==null?void 0:o.groups.find(n=>n.fields.some(a=>a.key===e));return t?[...((r=this.renderRoot)==null?void 0:r.querySelectorAll(".group-label"))??[]].find(n=>n.dataset.groupUuid===t.uuid)??null:null}updated(e){var i,o;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(o=this.renderRoot)==null?void 0:o.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return v;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),i=t.length>0;let o=0;const r=this.schema.groups.map(n=>{var c,d;const a=this._isNarrow||i||!this._collapsed.has(n.uuid);if(e&&n.ckey&&((c=e.get(n.ckey))!=null&&c.hidden))return v;let l=e?n.fields.filter(p=>!to(p,n,e)):n.fields;return Gr(n)&&(l=l.filter(p=>this._isRequired(p)||Lr(p,n,e))),i&&!((d=n.name)!=null&&d.toLowerCase().includes(t))&&(l=l.filter(p=>{var h;return(h=p.title)==null?void 0:h.toLowerCase().includes(t)})),l.length===0?v:(o+=l.length,u`
        <button
          class="group-label"
          data-group-uuid=${n.uuid}
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
        ${a?l.map(p=>{const h=Fv(this.aiFilledFields,p.key);return u`
                <button
                  class="field-item ${this.activeFieldKey===p.key?"active":""}"
                  @click=${()=>this._onFieldClick(p.key)}
                >
                  <span class="field-icon" aria-hidden="true">${uf(p.type)}</span>
                  <span class="field-name">${p.title}</span>
                  ${Ki(p,"be-field-hint",{interactive:!1})}
                  ${h?u`<span
                        class="field-ai"
                        role="img"
                        title=${h}
                        aria-label=${h}
                        >${Dv}</span
                      >`:v}
                  <span class="field-spacer" aria-hidden="true"></span>
                  ${this.conflictedKeys.includes(p.key)?u`<span
                        class="field-dot field-dot--conflict"
                        role="img"
                        title=${k("fieldHasConflicts","Some values conflict with a dependency rule")}
                        aria-label=${k("fieldHasConflicts","Some values conflict with a dependency rule")}
                      ></span>`:this.filledFields.has(p.key)?u`<span class="field-dot"></span>`:v}
                  ${this._isRequired(p)?u`<span
                        class=${dn({"field-required":!0,unmet:this.missingRequiredKeys.has(p.key)})}
                        aria-hidden="true"
                        >*</span
                      >`:v}
                </button>
              `}):v}
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
            placeholder=${k("searchFields","Search fields...")}
            aria-label=${k("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?u`<button
                class="sb-search-clear"
                type="button"
                aria-label=${k("clear","Clear")}
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
          aria-label=${this._allCollapsed?k("expandAll","Expand all"):k("collapseAll","Collapse all")}
          title=${this._allCollapsed?k("expandAll","Expand all"):k("collapseAll","Collapse all")}
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
      ${i&&o===0?u`<div class="sb-empty">${k("noFieldsMatch","No fields match")}</div>`:r}
    `}};Dn.styles=[uv,un];let Ue=Dn;Ze([g({attribute:!1})],Ue.prototype,"schema");Ze([g({attribute:!1})],Ue.prototype,"activeFieldKey");Ze([g({attribute:!1})],Ue.prototype,"filledFields");Ze([g({attribute:!1})],Ue.prototype,"missingRequiredKeys");Ze([g({attribute:!1})],Ue.prototype,"conflictedKeys");Ze([g({attribute:!1})],Ue.prototype,"config");Ze([g({attribute:!1})],Ue.prototype,"aiFilledFields");Ze([g({attribute:!1})],Ue.prototype,"bulkResolvedSchema");Ze([P()],Ue.prototype,"_collapsed");Ze([P()],Ue.prototype,"_isNarrow");Ze([P()],Ue.prototype,"_query");Q("sfx-bulk-meta-sidebar",Ue);var Mv=Object.defineProperty,Ee=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Mv(e,t,o),o},et;const ye=(et=class extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.attachmentExcludeIds=[],this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this.operationMode="full",this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry,this._emitPendingChange()},this._onOpMenuKeydown=e=>{var t;e.key!=="Escape"||!this._opDropdownOpen||(this._opDropdownOpen=!1,(t=this.renderRoot.querySelector(".op-trigger"))==null||t.focus())},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{var t;e.stopPropagation(),!(this._value===void 0&&JSON.stringify(e.detail.value)===JSON.stringify(et._emptyValueForType((t=this.field)==null?void 0:t.type)))&&(this._value=e.detail.value,this._emitPendingChange())},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var r;if(e.key!=="Enter")return;const t=(r=this.field)==null?void 0:r.type;if(!t||!et._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(n=>n instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const o=e.composedPath().find(n=>n instanceof HTMLInputElement);o&&o.value!==void 0&&(this._value=o.value),this._onApply()}}get _availableOps(){return this.field&&!ue(this.field)?lv(this.field.type,{hasAssetPicker:!!this.pickAssets}):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":case"attachments-assets":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??et._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("operationMode")&&this.operationMode==="set-only"&&(this._operation="SET",this._opDropdownOpen=!1),e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}get _taxonomyEntryForEmit(){var e;if(((e=this.field)==null?void 0:e.type)==="taxonomy-node")return this._operation==="DELETE"?null:this._pendingTaxonode}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit},bubbles:!0,composed:!0}))}async focusValue(){var t;await Js(this);const e=(t=this.renderRoot)==null?void 0:t.querySelector(".op-value");return e?yr(e):!1}applyPending(){return this.apply(!0)!=="disabled"}apply(e=!1){return this._isApplyDisabled?"disabled":this._onApply(e)?"applied":"deferred"}_onApply(e=!1){if(this._isApplyDisabled)return!1;const t=new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:this._taxonomyEntryForEmit,confirmed:e},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(t),t.defaultPrevented?!1:(this.resetAfterApply(),!0)}resetAfterApply(){var e;this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!vr(this._operation,(e=this.field)==null?void 0:e.type)&&(this._operation="SET"),this._emitPendingChange()}get _isApplyDisabled(){var e,t;return this.selectedCount===0||this.field&&ue(this.field)?!0:this._operation==="DELETE"?mo.has((e=this.field)==null?void 0:e.type)?Ve(this._value):vo.has((t=this.field)==null?void 0:t.type)?Ve(this._value):!1:Ve(this._value)}render(){var n;if(!this.field)return v;const e=ue(this.field);if(e||Mr(this.field,{hasAssetPicker:!!this.pickAssets})){const a=e?Qr():Zr();return u`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${a}">
            ${Fc}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title"
                >${this.field.title}${Ki(this.field,"be-field-hint")}</span
              >
              <span class="op-unsupported-msg">${a}</span>
            </div>
          </div>
        </div>
      `}const t=this._availableOps,i=t.length>1,o=t.find(a=>a.key===this._operation),r=this.operationMode==="set-only";return u`
      <div class="op-bar">
        ${r?v:u`<div class="op-field op-field--operation">
              <span class="op-field-label">${k("operation","Operation")}</span>
              ${i?u`
                    <div class="op-dropdown-wrap" @keydown=${this._onOpMenuKeydown}>
                      <button
                        class="op-trigger ${this._opDropdownOpen?"open":""}"
                        aria-haspopup="menu"
                        aria-expanded=${this._opDropdownOpen}
                        @click=${this._onOpToggle}
                      >
                        <span class="op-trigger-label"
                          >${(o==null?void 0:o.label)??k("bulkOpSet","Set")}</span
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
                              ${t.map(a=>u`
                                  <button
                                    class="op-option ${a.key===this._operation?"active":""}"
                                    @click=${()=>this._onOpSelect(a.key)}
                                  >
                                    ${a.label}
                                  </button>
                                `)}
                            </div>
                          `:v}
                    </div>
                  `:u`
                    <div
                      class="op-trigger op-trigger--static op-trigger--muted"
                      aria-disabled="true"
                    >
                      <span class="op-trigger-label"
                        >${(o==null?void 0:o.label)??k("bulkOpOverwrite","Overwrite")}</span
                      >
                    </div>
                  `}
            </div>`}
        ${vr(this._operation,this.field.type)?u`
              <div class="op-field op-field--value">
                ${this.field.type==="geopoint"?v:u`<span class="op-field-label"
                      >${this.field.title}${Ki(this.field,"be-field-hint")}</span
                    >`}
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
                    .language=${(n=this.config)==null?void 0:n.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                    .pickAssets=${this.pickAssets}
                    .attachmentExcludeIds=${this.attachmentExcludeIds}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:v}

        <!-- The tooltip names the keyboard shortcut — a click only applies, so
             the shortcut is a hint here, not this button's aria-keyshortcuts. -->
        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          title=${`${_v()}: ${k("applyAndNextFieldHint","Apply and go to the next field")}`}
          @click=${()=>this._onApply()}
        >
          ${r?k("applyToSelected","Apply to selected"):k("apply","Apply")}
        </button>
      </div>
    `}},et.styles=[pv,un],et._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),et);Ee([g({attribute:!1})],ye.prototype,"field");Ee([g({attribute:!1})],ye.prototype,"autocomplete");Ee([g({attribute:!1})],ye.prototype,"taxonomyService");Ee([g({attribute:!1})],ye.prototype,"ultratags");Ee([g({attribute:!1})],ye.prototype,"pickAssets");Ee([g({attribute:!1})],ye.prototype,"attachmentExcludeIds");Ee([g({attribute:!1})],ye.prototype,"defaultLanguage");Ee([g({attribute:!1})],ye.prototype,"ultratagsPresentOnSelection");Ee([g({attribute:!1})],ye.prototype,"config");Ee([g({type:Number})],ye.prototype,"selectedCount");Ee([g({attribute:!1})],ye.prototype,"allowedValues");Ee([g({type:String})],ye.prototype,"operationMode");Ee([P()],ye.prototype,"_operation");Ee([P()],ye.prototype,"_value");Ee([P()],ye.prototype,"_pendingTaxonode");Ee([P()],ye.prototype,"_opDropdownOpen");let Bv=ye;Q("sfx-bulk-meta-op-bar",Bv);const jv=new Set(["multi-select","tags","ultratags"]),Li=new Map;function yd(s,e){for(const t of Ie(e)){const i=s.get(t);if(i)return i}}function Tl(s){return s!=null&&s.i18n&&Object.keys(s.i18n).length>0?s.i18n:void 0}function _d(s,e){const t=new Map(s??[]);for(const[i,o]of e??[]){const r=Tl(t.get(i));if(!r){t.set(i,o);continue}t.set(i,{...o,i18n:{...r,...Tl(o)??{}}})}return t}function Rl(s,e,t){return!e.regional_variants_group_uuid||s==null||typeof s!="object"||Array.isArray(s)?s:s[t??"en"]}function Ol(s){return Array.isArray(s)?s:[]}function Il(s){return s==null||s===""||Array.isArray(s)&&s.length===0?!0:typeof s=="object"&&!Array.isArray(s)?!Object.values(s).some(e=>e!=null&&e!==""):!1}function wr(s,e){var i;const t=(i=s.possible_values)==null?void 0:i.find(o=>o.internal_unique_value===e||o.api_value===e);return(t==null?void 0:t.label)??String(e)}function Fl(s,e){if(e==null||e==="")return"";switch(s.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return wr(s,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Ll(s){return typeof s=="string"?s:s&&typeof s=="object"&&"label"in s?String(s.label):String(s)}function Nv(s,e){const t=s.map(Ll),i=e.map(Ll),o=new Set(t),r=new Set(i),n=[];for(const a of t)r.has(a)||n.push({label:a,state:"removed"});for(const a of i)n.push({label:a,state:o.has(a)?"kept":"added"});return n}function Hv(s,e){const t=xt(s),i=xt(e),o=new Set(t.map(a=>a.uuid)),r=new Set(i.map(a=>a.uuid)),n=[];for(const a of t)r.has(a.uuid)||n.push({label:qi(a),state:"removed",attachment:a});for(const a of i)n.push({label:qi(a),state:o.has(a.uuid)?"kept":"added",attachment:a});return n}function qv(s,e){return!e||e.size===0?s:s.map(t=>{if(t.i18n)return t;const i=yd(e,t);return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:i.i18n}:t})}function Vv(s,e,t,i,o){const r=gi(s),n=gi(e),a=t||"en",l=i||a,c=(b,m)=>{const C=b.i18n?b:yd(o,b)??(m!=null&&m.i18n?m:b);return Hr({...b,i18n:C.i18n},a,l)},d=new Map;for(const b of r)for(const m of Ie(b))d.set(m,b);const p=new Set(n.flatMap(Ie)),h=b=>Ie(b).map(m=>d.get(m)).find(Boolean),f=[];for(const b of r)Ie(b).some(m=>p.has(m))||f.push({label:c(b),state:"removed"});for(const b of n){const m=h(b);f.push({label:c(b,m),state:m?"kept":"added"})}return f}function Kv(s,e,t){const i=new Set(s.map(n=>JSON.stringify(n))),o=new Set(e.map(n=>JSON.stringify(n))),r=[];for(const n of s){const a=JSON.stringify(n);if(!o.has(a)){const l=typeof n=="string"?wr(t,n):String(n);r.push({label:l,state:"removed"})}}for(const n of e){const a=JSON.stringify(n),l=typeof n=="string"?wr(t,n):String(n);r.push({label:l,state:i.has(a)?"kept":"added"})}return r}function Yv(s,e,t,i,o,r){const n=zt(s,i),a=i==null?void 0:i.language,l=Rl(e,s,n),c=Rl(t,s,n);if(s.type==="attachments-assets")return{kind:"array",items:Hv(l,c)};if(jv.has(s.type)){if(s.type==="ultratags")return{kind:"array",items:Vv(e,t,a,o,r??Li)};const d=Ol(l),p=Ol(c);return s.type==="tags"?{kind:"array",items:Nv(d,p)}:{kind:"array",items:Kv(d,p,s)}}return{kind:"scalar",oldDisplay:Fl(s,l),newDisplay:Fl(s,c),oldEmpty:Il(l),newEmpty:Il(c)}}var Gv=Object.defineProperty,Pe=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Gv(e,t,o),o},Ge;const _e=(Ge=class extends Y{constructor(){super(),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this.conflictsByFile=new Map,this.dependencyNames=new Map,this.hideSelection=!1,this._onRowKeydown=e=>{var r;if(e.key==="Tab"){this._onRowTab(e);return}if(e.key!=="ArrowDown"&&e.key!=="ArrowUp"||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.isComposing||this.files.length<2)return;const t=e.composedPath();if(!Ge._movesBetweenRows(t[0],(r=this.field)==null?void 0:r.type))return;const i=this._rowAt(t);if(!i||!i.cell||!t.includes(i.cell))return;e.preventDefault(),e.stopPropagation();const o=this._nextEditableRow(i.at,e.key==="ArrowDown"?1:-1);o>=0&&this.focusRowAt(o)},this._pendingFrontendLookup=Li,this._knownUltratagsLookupByField=new Map,this._knownUltratagsLookup=Li,this._keyForFile=e=>e.id,this._renderRow=e=>{var a;const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),o=br(i)??null,r=((a=this.conflictsByFile.get(e.id))==null?void 0:a.get(this.field.ckey))??null,n=(i==null?void 0:i.hidden)??!1;return u`
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
        .pickAssets=${this.pickAssets}
        .ultratags=${this.ultratags}
        .defaultLanguage=${this.defaultLanguage}
        .pendingFrontendLookup=${this._pendingFrontendLookup}
        .knownUltratagsLookup=${this._knownUltratagsLookup}
        .allowedValues=${o}
        .notApplicable=${n}
        .conflict=${r}
        .expectedValues=${r?o:null}
        .dependencyNames=${this.dependencyNames}
        .hideSelection=${this.hideSelection}
      ></sfx-bulk-meta-row>
    `},this.addEventListener("keydown",this._onRowKeydown,{capture:!0})}async focusFirstRowField(){var i;await Js(this);const e=this.renderRoot.querySelector("sfx-bulk-meta-row"),t=(i=e==null?void 0:e.shadowRoot)==null?void 0:i.querySelector(".row-field");return t?yr(t,{openPopup:!0}):!1}_rowAt(e){var o;const t=e.find(r=>r instanceof Element&&r.localName==="sfx-bulk-meta-row");if(!t)return null;const i=this.files.findIndex(r=>r.id===t.file.id);return i<0?null:{row:t,at:i,cell:((o=t.shadowRoot)==null?void 0:o.querySelector(".row-field"))??null}}_nextEditableRow(e,t){for(let i=e+t;i>=0&&i<this.files.length;i+=t)if(this.rowFieldIsEditable(i))return i;return-1}_onRowTab(e){var d;if(e.altKey||e.ctrlKey||e.metaKey||e.isComposing||this.files.length<2)return;const t=e.composedPath(),i=t[0],o=this._rowAt(t);if(!o||!(i instanceof HTMLElement))return;const r=e.shiftKey?-1:1,n=(d=o.row.shadowRoot)==null?void 0:d.querySelector(".row-check input");if(i===n){const p=o.at+r;if(p<0||p>=this.files.length)return;e.preventDefault(),this.focusRowAt(p,"checkbox");return}const{cell:a}=o;if(!a||!t.includes(a))return;const l=!!md(a);if(!l){const p=xr(a),h=e.shiftKey?p[0]:p[p.length-1];if(p.length>0&&i!==h&&p.includes(i))return}const c=this._nextEditableRow(o.at,r);l&&vd(i),!(c<0)&&(e.preventDefault(),e.stopPropagation(),this.focusRowAt(c))}static _movesBetweenRows(e,t){return e instanceof HTMLInputElement?Ge._ROW_ARROW_TYPES.has(t):e instanceof HTMLElement&&!(e instanceof HTMLTextAreaElement)&&e.hasAttribute("aria-haspopup")&&e.getAttribute("aria-expanded")==="false"}_rowFor(e){return[...this.renderRoot.querySelectorAll("sfx-bulk-meta-row")].find(i=>{var o;return((o=i.file)==null?void 0:o.id)===e})}rowFieldIsEditable(e){var r;const t=this.files[e];if(!t)return!1;const i=this._rowFor(t.id),o=(r=i==null?void 0:i.shadowRoot)==null?void 0:r.querySelector(".row-field");return i?!!o&&xr(o).length>0:!0}async focusRowAt(e,t="field"){var a,l,c,d,p,h,f;const i=(a=this.files[e])==null?void 0:a.id;if(i===void 0)return;let o=this._rowFor(i);if(!o){const b=this.renderRoot.querySelector("lit-virtualizer");(c=(l=b==null?void 0:b.element)==null?void 0:l.call(b,e))==null||c.scrollIntoView({block:"nearest"}),await new Promise(m=>requestAnimationFrame(()=>m(null))),await Js(this),o=this._rowFor(i)}if(!o)return;if(await o.updateComplete,(d=o.scrollIntoView)==null||d.call(o,{block:"nearest"}),t==="checkbox"){(h=(p=o.shadowRoot)==null?void 0:p.querySelector(".row-check input"))==null||h.focus();return}const r=(f=o.shadowRoot)==null?void 0:f.querySelector(".row-field");if(!r||!await yr(r))return;const n=Xs();n instanceof HTMLInputElement&&n.type==="text"&&n.setSelectionRange(n.value.length,n.value.length)}_recomputePendingFrontendLookup(){var t,i;if(this._knownUltratagsLookup=((t=this.field)==null?void 0:t.key)&&this._knownUltratagsLookupByField.get(this.field.key)||Li,((i=this.field)==null?void 0:i.type)!=="ultratags"||!this.pendingOp){this._pendingFrontendLookup=Li;return}const e=new Map;for(const o of gi(this.pendingOp.value))for(const r of Ie(o))e.set(r,o);if(this._pendingFrontendLookup=e,e.size>0&&this.field.key){const o=_d(this._knownUltratagsLookup,e);this._knownUltratagsLookupByField.set(this.field.key,o),this._knownUltratagsLookup=o}}willUpdate(e){(e.has("pendingOp")||e.has("field"))&&this._recomputePendingFrontendLookup()}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):or(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return this.files.length<=Ge.VIRTUALIZE_THRESHOLD?u`${this.files.map(this._renderRow)}`:u`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}},Ge.styles=[gv],Ge._ROW_ARROW_TYPES=new Set(["text","attachment-uri","numeric","decimal2"]),Ge.VIRTUALIZE_THRESHOLD=60,Ge);Pe([g({attribute:!1})],_e.prototype,"files");Pe([g({attribute:!1})],_e.prototype,"field");Pe([g({attribute:!1})],_e.prototype,"staged");Pe([g({attribute:!1})],_e.prototype,"stagedTaxonodes");Pe([g({attribute:!1})],_e.prototype,"selected");Pe([g({attribute:!1})],_e.prototype,"pendingOp");Pe([g({attribute:!1})],_e.prototype,"config");Pe([g({attribute:!1})],_e.prototype,"autocomplete");Pe([g({attribute:!1})],_e.prototype,"taxonomyService");Pe([g({attribute:!1})],_e.prototype,"pickAssets");Pe([g({attribute:!1})],_e.prototype,"ultratags");Pe([g({attribute:!1})],_e.prototype,"defaultLanguage");Pe([g({attribute:!1})],_e.prototype,"perFileResolved");Pe([g({attribute:!1})],_e.prototype,"conflictsByFile");Pe([g({attribute:!1})],_e.prototype,"dependencyNames");Pe([g({attribute:!1})],_e.prototype,"hideSelection");let Wv=_e;Q("sfx-bulk-meta-table",Wv);var Jv=Object.defineProperty,de=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Jv(e,t,o),o},Oe;const ce=(Oe=class extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this.hideSelection=!1,this.conflict=null,this.expectedValues=null,this.dependencyNames=new Map,this._error=null,this._invalidValue=!1,this._liveStageTimer=null,this._onFieldBlur=e=>{e.stopPropagation(),this._cancelLiveStage(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{var o;e.stopPropagation();const t=e.detail.value,i=(o=this.field)==null?void 0:o.type;if(this._cancelLiveStage(),Oe._IMMEDIATE_CHANGE_TYPES.has(i)){this._processFieldValue(t);return}Oe._LIVE_STAGE_TYPES.has(i)&&(this._liveStageTimer=setTimeout(()=>{this._liveStageTimer=null,this._processFieldValue(t,{silent:!0})},Oe._LIVE_STAGE_DELAY_MS))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}get hasInvalidValue(){return this._invalidValue}shouldUpdate(e){return!(!this.selected&&e.size>0&&[...e.keys()].every(t=>Oe._PENDING_PREVIEW_ONLY_KEYS.has(t)))}willUpdate(e){e.has("field")&&(this._error=null,this._invalidValue=!1),(e.has("field")||e.has("file"))&&this._cancelLiveStage()}disconnectedCallback(){super.disconnectedCallback(),this._cancelLiveStage()}_cancelLiveStage(){this._liveStageTimer!==null&&(clearTimeout(this._liveStageTimer),this._liveStageTimer=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e,{silent:t=!1}={}){const i=bc(this.field,e,this.config??void 0);if(this._invalidValue=!!i&&!ui(e),i){t||(this._error=i);return}this._error=null;const o={meta:{...this.file.meta,[this.field.key]:this.value}},r=qr(this.field,e,o,zt(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&(Zv(r,this.value)||this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0})))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:dd(this.field,this.value,e.value,e.operation,zt(this.field,this.config))}_previewTaxonomyEntry(){const e=this.pendingOp;return e&&e.taxonomyEntry!==void 0?e.taxonomyEntry:this.taxonomyEntry}_valueForEditor(){var t;const e=gc(this.field,this.value,zt(this.field,this.config));return((t=this.field)==null?void 0:t.type)!=="ultratags"?e:qv(e,this.knownUltratagsLookup)}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}_conflictMessage(){var i;const e=o=>{var r,n,a;return((a=(n=(r=this.field)==null?void 0:r.possible_values)==null?void 0:n.find(l=>l.internal_unique_value===o))==null?void 0:a.label)??o},t=(this.expectedValues??[]).map(e).join(", ");return t?((i=this.conflict)==null?void 0:i.kind)==="set_values"?k("valueConflictsShouldBe","Conflicts with a dependency rule. Should be: {{values}}",{values:t}):k("valueConflictsAllowed","Conflicts with a dependency rule. Allowed: {{values}}",{values:t}):k("valueConflictsWithRule","This value conflicts with a dependency rule.")}_conflictSource(){var t;const e=(((t=this.conflict)==null?void 0:t.dependencyUuids)??[]).map(i=>this.dependencyNames.get(i)).filter(i=>!!i);return e.length>0?k("controlledByDependency","Controlled by dependency: {{names}}",{names:e.join(", ")}):""}render(){var t,i;const e=this.file;return u`
      <div class="row ${this.conflict?"row--conflict":""}">
        <div class="row-check">
          ${this.hideSelection?v:u`<input
                type="checkbox"
                class="fm-checkbox"
                .checked=${this.selected}
                @change=${this._onCheckboxChange}
              />`}
        </div>

        ${e.previewUrl?u`<img class="row-thumb" src=${e.previewUrl} alt="" />`:u`<img
              class="row-thumb row-thumb-fallback"
              src=${bt(this._getExtension(e.name))}
              alt=${k("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${o=>{const r=o.target,n=bt();!r.dataset.fallback&&r.src!==n&&(r.dataset.fallback="1",r.src=n)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?dp(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?u`<div
                class="row-field-na"
                title=${k("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >
                ${k("fieldNotApplicable","Not applicable for this asset")}
              </div>`:ue(this.field)?u`<div class="row-field-readonly" title=${Qr()}>
                  <sfx-metadata-field-view
                    .field=${this.field}
                    .value=${this._valueForEditor()}
                    .taxonomyEntry=${this.taxonomyEntry}
                    .language=${(t=this.config)==null?void 0:t.language}
                    .defaultLanguage=${this.defaultLanguage}
                  ></sfx-metadata-field-view>
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
                        .language=${(i=this.config)==null?void 0:i.language}
                        .defaultLanguage=${this.defaultLanguage}
                        .allowedValues=${this.allowedValues}
                        .pickAssets=${this.pickAssets}
                        .attachmentExcludeIds=${[this.file.id]}
                      ></sfx-metadata-field-edit>
                    </div>
                    ${this._error?u`<div class="row-error" role="alert">${this._error}</div>`:v}
                    ${this.conflict&&!this._error?u`<div class="row-conflict" title=${this._conflictSource()}>
                          ${this._conflictMessage()}
                        </div>`:v}`}
        </div>
      </div>
    `}},Oe.styles=[hv],Oe._PENDING_PREVIEW_ONLY_KEYS=new Set(["pendingOp","pendingFrontendLookup"]),Oe._IMMEDIATE_CHANGE_TYPES=new Set(["tags","ultratags","multi-select","attachments-assets"]),Oe._LIVE_STAGE_TYPES=new Set(["text","textarea"]),Oe._LIVE_STAGE_DELAY_MS=300,Oe);de([g({attribute:!1})],ce.prototype,"file");de([g({attribute:!1})],ce.prototype,"field");de([g({attribute:!1})],ce.prototype,"value");de([g({attribute:!1})],ce.prototype,"taxonomyEntry");de([g({type:Boolean})],ce.prototype,"selected");de([g({attribute:!1})],ce.prototype,"pendingOp");de([g({attribute:!1})],ce.prototype,"config");de([g({attribute:!1})],ce.prototype,"autocomplete");de([g({attribute:!1})],ce.prototype,"taxonomyService");de([g({attribute:!1})],ce.prototype,"pickAssets");de([g({attribute:!1})],ce.prototype,"ultratags");de([g({attribute:!1})],ce.prototype,"defaultLanguage");de([g({attribute:!1})],ce.prototype,"pendingFrontendLookup");de([g({attribute:!1})],ce.prototype,"knownUltratagsLookup");de([g({attribute:!1})],ce.prototype,"allowedValues");de([g({type:Boolean})],ce.prototype,"notApplicable");de([g({attribute:!1})],ce.prototype,"hideSelection");de([g({attribute:!1})],ce.prototype,"conflict");de([g({attribute:!1})],ce.prototype,"expectedValues");de([g({attribute:!1})],ce.prototype,"dependencyNames");de([P()],ce.prototype,"_error");let Xv=ce;function kr(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)&&!(s instanceof Date)}function ui(s){return s==null||s===""?!0:Array.isArray(s)?s.length===0:kr(s)?Object.values(s).every(ui):!1}function Zv(s,e){if(ui(s)&&ui(e))return!0;if(!kr(s)||!(e==null||kr(e)))return!1;const t=e??{},i=new Set([...Object.keys(s),...Object.keys(t)]);for(const o of i){const r=s[o],n=t[o];if(JSON.stringify(r)!==JSON.stringify(n)&&!(ui(r)&&ui(n)))return!1}return!0}Q("sfx-bulk-meta-row",Xv);var Qv=Object.defineProperty,dt=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&Qv(e,t,o),o};const zn=class zn extends Y{constructor(){super(...arguments),this._i18nController=new Ye(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderChips(e){const t={added:k("added","Added"),removed:k("removed","Removed"),kept:k("kept","Kept")};return u`
      <div class="diff-wrap" aria-label=${k("bulkOperationPreview","Bulk operation preview")}>
        ${e.length===0?u`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.map(i=>u`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.attachment?Ic(i.attachment):v}
                  ${i.state==="removed"?u`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderArrayDiff(e){return this._renderChips(e.items)}_renderScalarDiff(e){const t=k("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?k("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?k("emptyValue","empty"):e.newDisplay});return u`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${k("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?v:u`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyDiff(){var l,c,d,p,h,f;const e=((l=this.newTaxonomyEntry)==null?void 0:l.path)??"",t=((c=this.oldTaxonomyEntry)==null?void 0:c.path)??"",i=!t,o=!e,r=((d=this.oldTaxonomyEntry)==null?void 0:d.suid)||((p=this.oldTaxonomyEntry)==null?void 0:p.uuid),n=((h=this.newTaxonomyEntry)==null?void 0:h.suid)||((f=this.newTaxonomyEntry)==null?void 0:f.uuid),a=[];return!i&&r===n?a.push({label:t,state:"kept"}):(i||a.push({label:t,state:"removed"}),o||a.push({label:e,state:"added"})),this._renderChips(a)}render(){var i,o;if(!this.field)return v;if(this.field.type==="taxonomy-node")return this._renderTaxonomyDiff();const e=(i=this.knownUltratagsLookup)!=null&&i.size||(o=this.pendingFrontendLookup)!=null&&o.size?_d(this.knownUltratagsLookup,this.pendingFrontendLookup):void 0,t=Yv(this.field,this.oldValue,this.newValue,this.config,this.defaultLanguage,e);return t.kind==="array"?this._renderArrayDiff(t):this._renderScalarDiff(t)}};zn.styles=[fv,Oc];let Ke=zn;dt([g({attribute:!1})],Ke.prototype,"field");dt([g({attribute:!1})],Ke.prototype,"oldValue");dt([g({attribute:!1})],Ke.prototype,"newValue");dt([g({attribute:!1})],Ke.prototype,"oldTaxonomyEntry");dt([g({attribute:!1})],Ke.prototype,"newTaxonomyEntry");dt([g({attribute:!1})],Ke.prototype,"config");dt([g({attribute:!1})],Ke.prototype,"defaultLanguage");dt([g({attribute:!1})],Ke.prototype,"pendingFrontendLookup");dt([g({attribute:!1})],Ke.prototype,"knownUltratagsLookup");Q("sfx-bulk-meta-diff-view",Ke);function wd(s){let e=s;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var eb=Object.defineProperty,we=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&eb(e,t,o),o};const Ul=3,kd=`
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
`,tb=260,ib=80;let Ri;function sb(){if(Ri!==void 0)return Ri;try{const s=new CSSStyleSheet;s.replaceSync(kd),Ri=s}catch{Ri=null}return Ri}var vt;const me=(vt=class extends Y{constructor(){super(...arguments),this.t=Ne,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.allowFolderDrop=!0,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Ul,this._touch=!1,this._dragCounter=0,this._unsubscribeTouch=null,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&rd(t,{allowDirectories:this.allowFolderDrop}).then(({files:i,hadDirectories:o,rejectedDirectories:r})=>{r&&this.dispatchEvent(new CustomEvent("folder-rejected",{bubbles:!0,composed:!0})),i.length>0?this._emitFiles(i,o):o&&!r&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const o of i){const r=o.webkitRelativePath;r&&ln(o,r)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var r,n;if(!this.isConnected||this.offsetWidth===0)return;const t=(r=e.clipboardData)==null?void 0:r.items;if(!t)return;const i=[];let o=!1;for(const a of t){if(a.kind!=="file")continue;if(!this.allowFolderDrop){const c=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);if(c!=null&&c.isDirectory){o=!0;continue}}const l=a.getAsFile();l&&i.push(l)}o&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("folder-rejected",{bubbles:!0,composed:!0}))),i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._returnFocusTo=null,this._inertedSiblings=[],this._lockedScrollHost=null,this._exitingPortal=null,this._onSheetKeyDown=e=>{if(e.key==="Escape"){e.stopPropagation(),this._closeMore();return}if(e.key!=="Tab")return;const t=e.currentTarget,i=t.querySelectorAll("button:not([disabled])");if(i.length===0)return;const o=i[0],r=i[i.length-1],n=t.getRootNode().activeElement;e.shiftKey&&(n===o||n===t)?(e.preventDefault(),r.focus()):!e.shiftKey&&n===r&&(e.preventDefault(),o.focus())},this._sheetDrag=null,this._onSheetPointerDown=e=>{var o;const t=e.currentTarget,i=t.closest(".sfx-more-sheet");if(!(!i||this._sheetDrag)){this._sheetDrag={pointerId:e.pointerId,startY:e.clientY,sheet:i,handle:t};try{(o=t.setPointerCapture)==null||o.call(t,e.pointerId)}catch{}window.addEventListener("pointermove",this._onSheetPointerMove),window.addEventListener("pointerup",this._onSheetPointerUp),window.addEventListener("pointercancel",this._onSheetPointerUp)}},this._onSheetPointerMove=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;const i=e.clientY-t.startY;if(i<=0){t.sheet.style.transform="";return}t.sheet.classList.add("dragging"),t.sheet.style.transform=`translateY(${i}px)`},this._onSheetPointerUp=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;this._endSheetDrag();const i=e.clientY-t.startY;t.sheet.classList.remove("dragging"),t.sheet.style.transform="",e.type!=="pointercancel"&&i>ib&&this._closeMore()},this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}get _folderEnabled(){return this.directory&&this.multi&&cc()}browse(e="files"){var t;if(e==="folder"&&this._folderEnabled&&this.folderInput){this.folderInput.click();return}(t=this.fileInput)==null||t.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_closeMore(){this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())}_updateDropdownPortal(){var e;if(this._moreOpen){const t=this.sources.slice(this._visiblePills),i=((e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-sheet"))!=null;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),wd(this).appendChild(this._portalContainer),this._injectDropdownStyles());const o=t.map(r=>u`
          <button class="sfx-more-item" @click=${n=>this._onMoreItemClick(r,n)}>
            <div class="sfx-more-item-ico">
              ${r.brandHtml?Ft(r):r.iconColor?u`<svg viewBox="0 0 24 24" ${oe({color:r.iconColor})}>
                      ${ft(r.icon)}
                    </svg>`:ee`<svg viewBox="0 0 24 24">${ft(r.icon)}</svg>`}
            </div>
            ${r.labelKey?this.t(r.labelKey,r.label):r.label}
          </button>
        `);if(this._touch){const r=this.t("importFrom","Import from"),n=this._backgroundLockable();ot(u`
            <div class="sfx-more-backdrop" @click=${()=>this._closeMore()}></div>
            <div
              class="sfx-more-sheet"
              role="dialog"
              aria-modal=${n?"true":v}
              aria-label=${r}
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
              <div class="sfx-more-sheet-title">${r}</div>
              ${o}
            </div>
          `,this._portalContainer),i||(this._lockBackground(),this._captureReturnFocus()),requestAnimationFrame(()=>{var a;(a=this._portalContainer)==null||a.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(l=>l.classList.add("open")),i||this._focusSheet()})}else this._unlockBackground(),ot(u`<div class="sfx-more-dropdown open">${o}</div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._teardownPortal({animate:!0})}_backgroundLockable(){return typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype}_lockBackground(){const e=this._portalContainer;if(!e||this._lockedScrollHost)return;const t=e.parentElement;if(t&&this._backgroundLockable())for(const o of Array.from(t.children))o===e||!(o instanceof HTMLElement)||o.inert||(o.inert=!0,this._inertedSiblings.push(o));const i=t===document.body?document.documentElement:t;i instanceof HTMLElement&&(this._lockedScrollHost={el:i,overflow:i.style.overflow},i.style.overflow="hidden")}_unlockBackground(){for(const e of this._inertedSiblings)e.inert=!1;this._inertedSiblings=[],this._lockedScrollHost&&(this._lockedScrollHost.el.style.overflow=this._lockedScrollHost.overflow,this._lockedScrollHost=null)}_captureReturnFocus(){var t;const e=((t=this.shadowRoot)==null?void 0:t.activeElement)??document.activeElement;this._returnFocusTo=e&&typeof e.focus=="function"?e:null}_focusSheet(){var i,o;const e=(i=this._portalContainer)==null?void 0:i.querySelector(".sfx-more-sheet");(o=(e==null?void 0:e.querySelector(".sfx-more-item"))??e)==null||o.focus()}_restoreFocus(){const e=this._returnFocusTo;this._returnFocusTo=null,e!=null&&e.isConnected&&e.focus()}_teardownPortal({animate:e}){this._unlockBackground(),this._reapExitingPortal();const t=this._portalContainer;if(!t)return;this._portalContainer=null;const i=t.querySelector(".sfx-more-sheet");if(!e||!i||Vu()){ot(v,t),t.remove(),this._restoreFocus();return}t.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(o=>o.classList.remove("open")),t.style.pointerEvents="none",this._exitingPortal={el:t,timer:setTimeout(()=>this._reapExitingPortal(),tb)},this._restoreFocus()}_reapExitingPortal(){const e=this._exitingPortal;e&&(this._exitingPortal=null,clearTimeout(e.timer),ot(v,e.el),e.el.remove())}_endSheetDrag(){var t,i;const e=this._sheetDrag;if(this._sheetDrag=null,window.removeEventListener("pointermove",this._onSheetPointerMove),window.removeEventListener("pointerup",this._onSheetPointerUp),window.removeEventListener("pointercancel",this._onSheetPointerUp),!!e)try{(i=(t=e.handle).releasePointerCapture)==null||i.call(t,e.pointerId)}catch{}}_injectDropdownStyles(){var r;const e=(r=this._portalContainer)==null?void 0:r.getRootNode();if(!e)return;const t=sb();if(t&&Array.isArray(e.adoptedStyleSheets)){if(e.adoptedStyleSheets.includes(t))return;e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}const i=e instanceof Document?e.head:e;if(!i||i.querySelector("style[data-sfx-more-dropdown-styles]"))return;const o=document.createElement("style");o.setAttribute("data-sfx-more-dropdown-styles",""),o.textContent=kd,i.appendChild(o)}_positionDropdown(){var p,h;const e=(p=this.shadowRoot)==null?void 0:p.querySelector(".more-wrap > button"),t=(h=this._portalContainer)==null?void 0:h.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=8,r=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=r+o||a>l?t.style.top=`${i.top-r-o}px`:t.style.top=`${i.bottom+o}px`;let d=i.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),t.style.left=`${d}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=Ul}connectedCallback(){super.connectedCallback(),this._touch=We(),this._unsubscribeTouch=Or(()=>{this._touch=We(),this._moreOpen&&this._updateDropdownPortal()}),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const i=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=vt._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._endSheetDrag(),this._moreOpen=!1,this._teardownPortal({animate:!1})}_renderPill(e){return u`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?Ft(e):u`<span class="pill-ico" ${oe(e.iconColor?{color:e.iconColor}:null)}>
              ${ee`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ft(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return u`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?u`<span class="card-ico">${Ft(e)}</span>`:u`<span class="card-ico" ${oe(e.iconColor?{color:e.iconColor}:null)}>
              ${ee`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ft(e.icon)}</svg>`}
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
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":"",this._touch?"touch":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills),o=this._touch&&!this.compact;return u`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role=${o?v:"button"}
          tabindex=${o?v:"0"}
          aria-label=${o?v:this.t("dropFilesHere","Drop files here or click to browse")}
          @click=${this._onClick}
          @keydown=${o?v:this._onKeyDown}
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

          ${o?this._renderPrimaryCta():this._renderTitle()}
          ${!this.compact&&this.sources.length>0?u`
                <div class="import-divider">
                  <span>${this.t("orImportFrom","or import from")}</span>
                </div>
                ${this.sourcesLayout==="cards"?u`
                      <div class="sources-cards">
                        ${t.map(r=>this._renderCard(r))}
                        ${i.length>0?this._renderMoreCard():v}
                      </div>
                    `:u`
                      <div class="sources-grid">
                        ${t.map(r=>this._renderPill(r))}
                        ${i.length>0?this._renderMoreDropdown():v}
                      </div>
                    `}
              `:v}
          ${this.compact&&this.sources.length>0?u`
                <div class="sources-row">
                  ${this.sources.map(r=>u`
                      <button
                        class="src-ico"
                        ${oe(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        data-tip=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        aria-label=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${n=>{n.stopPropagation(),this._onSourceIconClick(r)}}
                      >
                        ${r.brandHtml?Ft(r):ee`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${ft(r.icon)}</svg>`}
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
    `}},vt.styles=M`
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

    ${De}
  `,vt._WIDE_THRESHOLD_PX=1200,vt);we([g({attribute:!1})],me.prototype,"t");we([g({type:Boolean,reflect:!0})],me.prototype,"compact");we([g({type:Boolean,attribute:"external-drag-over"})],me.prototype,"externalDragOver");we([g({type:String})],me.prototype,"accept");we([g({type:Boolean})],me.prototype,"multi");we([g({type:Boolean})],me.prototype,"directory");we([g({type:Boolean})],me.prototype,"allowFolderDrop");we([g({type:Array})],me.prototype,"sources");we([g({type:String,attribute:"sources-layout"})],me.prototype,"sourcesLayout");we([g({type:String,reflect:!0})],me.prototype,"mode");we([P()],me.prototype,"_dragOver");we([P()],me.prototype,"_moreOpen");we([P()],me.prototype,"_visiblePills");we([P()],me.prototype,"_touch");we([Yt(".ripple")],me.prototype,"_rippleEl");we([Yt("input[data-sfx-dz-files]")],me.prototype,"fileInput");we([Yt("input[data-sfx-dz-folder]")],me.prototype,"folderInput");let ob=me;const Mn=class Mn extends Y{constructor(){super(...arguments),this._i18nController=new Ru(this)}render(){return u`
      <div class="line"></div>
      <div class="label">${Tt("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Mn.styles=M`
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
  `;let $r=Mn;var rb=Object.defineProperty,ne=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&rb(e,t,o),o};const Sr=new CSSStyleSheet;Sr.replaceSync(`
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
`);const Bn=class Bn extends Y{constructor(){super(...arguments),this.t=Ne,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this.namingViolationIds=new Set,this._moreOpen=!1,this._dropTileMaxVisible=3,this._touch=!1,this._portalContainer=null,this._unsubscribeTouch=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?this._touch?2:1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}get _folderEnabled(){return this.directory&&this.multi&&cc()}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const o of i){const r=o.webkitRelativePath;r&&ln(o,r)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){this._onDropTileClick();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),wd(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),ot(u`<div class="sfx-tile-dropdown">
        ${e.map(t=>u`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${oe(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?Ft(t):ee`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ft(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var p;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(p=this._portalContainer)==null?void 0:p.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=6,r=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=r+o||a>l?t.style.top=`${i.top-r-o}px`:t.style.top=`${i.bottom+o}px`;let d=i.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),t.style.left=`${d}px`}_closePortal(){this._portalContainer&&(ot(v,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Sr)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Sr]))}connectedCallback(){super.connectedCallback(),this._touch=We(),this._unsubscribeTouch=Or(()=>{this._touch=We(),this._updateDropTileMaxVisible()}),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTileText(){return this._touch?this.t("addMoreFiles","Add more files"):u`${this.t("dropOrClickTo","Drop or click to")}
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
                  ${t.map(o=>u`
                      <button
                        class="drop-tile-src"
                        ${oe(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        title=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${r=>this._onSourceClick(r,o)}
                      >
                        ${o.brandHtml?Ft(o):ee`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${ft(o.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?u`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            aria-label=${this.t("moreSources","More sources")}
                            @click=${o=>this._toggleMore(o)}
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
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(o=>o.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(r=>this.searchResults.has(r)).length,i=e?Math.round(t/e*100):0,o=e>0&&t===e;return u`
      ${e>1&&!this.previewOpen?u`
            <div class="similar-banner search">
              ${o?u`<span class="search-done-ico"
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
                  >${o?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${oe({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${o?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:v}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():v}
        ${ci(this.files,r=>r.id,(r,n)=>{const a=this.searchResults.get(r.id);return u`<sfx-file-item
              .t=${this.t}
              .store=${this.store}
              .fileId=${r.id}
              .file=${r}
              .mode=${this.mode}
              .allowRename=${this.allowRename}
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
              .showCheckSimilar=${this.showCheckSimilar}
              .selectMode=${this.selectMode}
              .isSelected=${this.selectedIds.has(r.id)}
              .selectionActive=${this.selectedIds.size>0}
              .selectionFull=${this.selectionFull}
              .previewOpen=${this.previewOpen}
              .similarStatus=${this._statusFor(r.id)}
              .similarCount=${(a==null?void 0:a.length)??-1}
              .similarResults=${a??[]}
              .namingViolation=${this.namingViolationIds.has(r.id)}
              ${oe({"--tile-index":String(n)})}
            ></sfx-file-item>`})}
      </div>
    `}};Bn.styles=M`
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

    ${De}
  `;let ie=Bn;ne([g({attribute:!1})],ie.prototype,"t");ne([g({attribute:!1})],ie.prototype,"files");ne([g({attribute:!1})],ie.prototype,"store");ne([g({type:Boolean})],ie.prototype,"showDropTile");ne([g({attribute:!1})],ie.prototype,"sources");ne([g({type:String})],ie.prototype,"accept");ne([g({type:Boolean})],ie.prototype,"multi");ne([g({type:Boolean})],ie.prototype,"directory");ne([g({type:Boolean})],ie.prototype,"allowRename");ne([g({type:String})],ie.prototype,"mode");ne([g({type:Boolean})],ie.prototype,"showLocateButton");ne([g({type:Boolean})],ie.prototype,"showCopyCdnButton");ne([g({type:Boolean})],ie.prototype,"showCheckSimilar");ne([g({type:Boolean})],ie.prototype,"selectMode");ne([g({attribute:!1})],ie.prototype,"selectedIds");ne([g({type:Boolean})],ie.prototype,"allSelected");ne([g({type:Boolean})],ie.prototype,"selectionFull");ne([g({type:Number})],ie.prototype,"maxSelection");ne([g({type:Boolean})],ie.prototype,"previewOpen");ne([g({attribute:!1})],ie.prototype,"searchRunIds");ne([g({attribute:!1})],ie.prototype,"searchActiveIds");ne([g({attribute:!1})],ie.prototype,"searchResults");ne([g({attribute:!1})],ie.prototype,"namingViolationIds");ne([P()],ie.prototype,"_moreOpen");ne([P()],ie.prototype,"_dropTileMaxVisible");ne([P()],ie.prototype,"_touch");var nb=Object.defineProperty,ae=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&nb(e,t,o),o};const jn=class jn extends Y{constructor(){super(...arguments),this.t=Ne,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this.namingViolation=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let o=e.right+12;o+t>window.innerWidth-8&&(o=e.left-t-12),this._simPopLeft=Math.max(8,o),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),o=140;this._tipLeft=Math.max(o+8,Math.min(i.left+i.width/2,window.innerWidth-o-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var o;i.some(r=>r.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(o=this._io)==null||o.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",o=e.status==="complete"&&!!e.alreadyExisted;return i||o}_maybeProbeDims(){var i,o;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const r=new Image;r.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${r.naturalWidth}×${r.naturalHeight}`)},r.src=t}else if((o=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&o.info){const r=e.response.file.info;r.img_w&&r.img_h&&(this._dims=`${r.img_w}×${r.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,o,r,n;e.stopPropagation();const t=(n=(r=(o=(i=this._file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:r.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var $,E,y;const e=this._file;if(!e)return v;const t=qe(e),i=e.status==="complete",o=e.status==="uploading",r=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",c=l||this.reviewPick||!this.allowRename,d=Gm(e.name),p=t==="image"&&!Ot(e.type),h=this.selectMode&&p&&!l,f=this.similarCount>=0,b=h&&!f&&!i&&this.similarStatus==="",m=!l&&!i&&!o&&!r&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,C=m,A=["tile",i?"done":"",o?"uploading":"",r?"paused":"",a?"rejected":"",this.namingViolation?"naming-violation":"",l?"review":"",b?"selectable":"",b&&this.isSelected?"selected":"",this.selectionActive&&!p&&!l?"select-dimmed":"",C?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return u`
      <div
        class=${A}
        tabindex="0"
        title=${this.namingViolation?this.t("namingConventionMismatchTooltip","This filename doesn't match the naming convention required for this project."):v}
        @click=${this.reviewPick?this._reviewSelect:b?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?u`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:u`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${bt(d)}
                    alt="${d?this.t("extFile","{{ext}} file",{ext:d}):this.t("file","File")}"
                    @error=${w=>{const O=w.target,T=bt();!O.dataset.fallback&&O.src!==T&&(O.dataset.fallback="1",O.src=T)}}
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
          ${b?u`
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
          ${i&&(($=e.response)!=null&&$.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&((E=e.response.file.url)!=null&&E.cdn))?u`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?u`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${nc}</svg>
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
                    ${oe({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
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
                ${o&&e.isTus?u`
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
                ${r?u`
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
            ?readonly=${c}
            @change=${c?v:this._rename}
            @click=${w=>w.stopPropagation()}
          />
          <div class="meta">
            ${d||""}${e.size?` · ${ai(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?u`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${oe({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:v}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return v;const e=[...this.similarResults].sort((l,c)=>c.score-l.score),t=e[0],i=e.length,o=e.slice(1),r=o.slice(0,3),n=o.length-r.length,a=Math.round(t.score*100);return u`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${oe({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
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
          ${o.length?u`<div class="pop-thumbs">
                ${r.map(l=>u`<img src=${l.url} alt="" />`)}
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
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};jn.styles=M`
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

    ${De}
  `;let re=jn;ae([g({attribute:!1})],re.prototype,"t");ae([g({attribute:!1})],re.prototype,"store");ae([g({type:String})],re.prototype,"fileId");ae([g({attribute:!1})],re.prototype,"file");ae([g({type:String})],re.prototype,"mode");ae([g({type:Boolean})],re.prototype,"allowRename");ae([g({type:Boolean})],re.prototype,"showLocateButton");ae([g({type:Boolean})],re.prototype,"showCopyCdnButton");ae([g({type:Boolean})],re.prototype,"showCheckSimilar");ae([g({type:Boolean})],re.prototype,"selectMode");ae([g({type:Boolean})],re.prototype,"isSelected");ae([g({type:Boolean})],re.prototype,"selectionActive");ae([g({type:Boolean})],re.prototype,"selectionFull");ae([g({type:Boolean})],re.prototype,"previewOpen");ae([g({type:String})],re.prototype,"similarStatus");ae([g({type:Number})],re.prototype,"similarCount");ae([g({attribute:!1})],re.prototype,"similarResults");ae([g({type:Boolean})],re.prototype,"reviewPick");ae([g({type:Boolean})],re.prototype,"namingViolation");ae([P()],re.prototype,"_dims");ae([P()],re.prototype,"_simPopover");ae([P()],re.prototype,"_copied");ae([P()],re.prototype,"_tip");var ab=Object.defineProperty,hs=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&ab(e,t,o),o};const Nn=class Nn extends Y{constructor(){super(...arguments),this.t=Ne,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return u`
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
    `}};Nn.styles=M`
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
  `;let wt=Nn;hs([g({attribute:!1})],wt.prototype,"t");hs([g({attribute:!1})],wt.prototype,"files");hs([g({type:Boolean})],wt.prototype,"showLocateButton");hs([g({type:Boolean})],wt.prototype,"showCopyCdnButton");hs([P()],wt.prototype,"_filter");Q("sfx-last-upload-review",wt);const xo=M`
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
`,yo=M`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var lb=Object.defineProperty,ze=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&lb(e,t,o),o};const Hn=class Hn extends Y{constructor(){super(...arguments),this.t=Ne,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.requiredFieldsTotal=0,this.requiredFieldsRemaining=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1,this.blocked=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?v:u`
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
              ${Vo}
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
              ${ac}
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
              ${Vo}
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
    `}get _uploadLabel(){return this.requiredFieldsTotal>0&&this.requiredFieldsRemaining===this.requiredFieldsTotal?{key:"fillRequiredMetadata",fallback:"Fill required metadata"}:this.requiredFieldsRemaining>0?{key:"nextMetadata",fallback:"Next metadata"}:this.fileCount>1?{key:"uploadAll",fallback:"Upload all ({{count}})",interpolations:{count:this.fileCount}}:{key:"upload",fallback:"Upload"}}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",o=this._uploadLabel,r=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t(o.key,o.fallback,o.interpolations);return u`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.blocked||this.fileCount===0&&!t}
        aria-label=${r}
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
                  >${this.t(o.key,o.fallback,o.interpolations)}</span
                >
              `}
      </button>
    `}};Hn.styles=[xo,yo,M`
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
    `];let xe=Hn;ze([g({attribute:!1})],xe.prototype,"t");ze([g({type:String})],xe.prototype,"uploadState");ze([g({type:Number})],xe.prototype,"fileCount");ze([g({type:Number})],xe.prototype,"failedCount");ze([g({type:Boolean})],xe.prototype,"showFillMetadata");ze([g({type:Boolean})],xe.prototype,"requireMetadataFirst");ze([g({type:Number})],xe.prototype,"requiredFieldsTotal");ze([g({type:Number})],xe.prototype,"requiredFieldsRemaining");ze([g({type:Boolean})],xe.prototype,"showCheckSimilar");ze([g({type:Boolean})],xe.prototype,"selectMode");ze([g({type:Number})],xe.prototype,"selectedCount");ze([g({type:Number})],xe.prototype,"maxSelection");ze([g({type:Boolean})],xe.prototype,"allSelected");ze([g({type:Boolean})],xe.prototype,"blocked");const cb='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function hn(s,e){return t=>{if(t.key!=="Tab")return;const i=s();if(!i)return;const o=i.querySelector(e);if(!o)return;const r=Array.from(o.querySelectorAll(cb));if(r.length===0)return;const n=r[0],a=r[r.length-1],l=i.activeElement;t.shiftKey?(l===n||!o.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!o.contains(l))&&(t.preventDefault(),n.focus())}}var db=Object.defineProperty,_o=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&db(e,t,o),o};const qn=class qn extends Y{constructor(){super(...arguments),this.t=Ne,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=hn(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";const t=!!this._name.trim();let i=this._name.trim();if(!i)try{const o=new URL(e).pathname.split("/");i=o[o.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i,nameIsUserDefined:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return u`
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
    `}};qn.styles=[xo,yo,De,M`
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
    `];let Kt=qn;_o([g({attribute:!1})],Kt.prototype,"t");_o([P()],Kt.prototype,"_url");_o([P()],Kt.prototype,"_name");_o([P()],Kt.prototype,"_error");var ub=Object.defineProperty,fs=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&ub(e,t,o),o};const Vn=class Vn extends Y{constructor(){super(...arguments),this.t=Ne,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=hn(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,r;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(r=this.shadowRoot)==null?void 0:r.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
    `}};Vn.styles=[xo,yo,M`
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
    `];let kt=Vn;fs([g({attribute:!1})],kt.prototype,"t");fs([P()],kt.prototype,"_stream");fs([P()],kt.prototype,"_error");fs([P()],kt.prototype,"_captured");fs([P()],kt.prototype,"_previewUrl");var pb=Object.defineProperty,Si=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&pb(e,t,o),o};const Kn=class Kn extends Y{constructor(){super(...arguments),this.t=Ne,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=hn(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var r;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(r=this._stream)==null||r.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
    `}};Kn.styles=[xo,yo,M`
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
    `];let ct=Kn;Si([g({attribute:!1})],ct.prototype,"t");Si([P()],ct.prototype,"_stream");Si([P()],ct.prototype,"_recording");Si([P()],ct.prototype,"_error");Si([P()],ct.prototype,"_recordedBlob");Si([P()],ct.prototype,"_previewUrl");var hb=Object.defineProperty,fn=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&hb(e,t,o),o};const Yn=class Yn extends Y{constructor(){super(...arguments),this.t=Ne,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?u`<svg
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
    `}};Yn.styles=M`
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
  `;let bi=Yn;fn([g({attribute:!1})],bi.prototype,"t");fn([g({type:Number})],bi.prototype,"duration");fn([P()],bi.prototype,"_toasts");Q("sfx-toast",bi);var fb=Object.defineProperty,j=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&fb(e,t,o),o};const Dl=new Set(["unsplash"]),pt=10,gb=3,mb=["auto","mobile","tablet","desktop","hq","sample"],vb=["hls"],si={isTus:!1,tusUploadUrl:null,relativeFolder:""},zl=new Set(["complete","failed","error","cancelled","rejected"]);var se;const B=(se=class extends Y{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1,this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!1,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._seededSettingsDefaults=null,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._bulkMetadataSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=li,this._cachedSourcesConfig=void 0,this._cachedSourcesTouch=void 0,this._cachedSourcesAccept=void 0,this._cachedTileSources=li,this._cachedTileSourcesFrom=null,this._unsubscribeTouch=null,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail;if(Rt(i)){this.updateFileFocusPoint(t,o??null);return}if(Wo(i)){const a=Jo(i);if(!a)return;const l=o===""||o==null,c=a==="position"?{position:l?void 0:Number(o)}:{ref:l?void 0:String(o)};this.updateFileProduct(t,c);return}const r=this._store.getState().files.get(t);if(!r)return;const n=new Map(this._store.getState().files);n.set(t,{...r,meta:{...r.meta,[i]:o}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewMetadataChange=e=>{Rt(e.detail.key)&&(this._focusPointDraft=e.detail.value??null)},this._onFocusPointPickToggle=e=>{var t;this._focusPointPicking=e.detail.picking,e.detail.picking&&((t=this.renderRoot.querySelector(".preview-img-wrap"))==null||t.scrollIntoView({block:"nearest",behavior:"smooth"}))},this._onPreviewFieldHover=e=>{Rt(e.detail.key)&&(this._focusPointFieldHovered=e.detail.hovering)},this._onPreviewFieldFocus=e=>{const t=Rt(e.detail.key);e.detail.focused?(this._focusPointFieldFocused=t,t||(this._focusPointPicking=!1)):t&&(this._focusPointFieldFocused=!1)},this._onPreviewMetadataEscape=e=>{Rt(e.detail.key)&&(this._focusPointPicking=!1)},this._onFocusPointPick=e=>{const t=this._previewFileId;if(!t)return;const{horizontal:i,vertical:o}=e.detail;this._focusPointDraft=null,this.updateFileFocusPoint(t,`${i},${o}`)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var o;const i=(o=this.config)==null?void 0:o.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(r){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",r),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onFolderRejected=()=>{this._showFolderDisabledToast()},this._onCaptureChange=e=>{const t=e.target,i=Array.from(t.files??[]);t.value="",i.length>0&&this._processIncomingFiles(i)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,r,n,a;const t=this._mergedSources.find(l=>l.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,l)}return}if(e==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){if(We()&&this._captureInput){this._captureInput.click();return}this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((r=(o=this.config)==null?void 0:o.connectors)==null?void 0:r.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:l}=await Z(async()=>{const{SfxGooglePickerView:c}=await import("./google-picker-view-Diu_Eh_w.js");return{SfxGooglePickerView:c}},[]);customElements.define("sfx-google-picker-view",l)}}else if(Dl.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await Z(async()=>{const{SfxSearchProviderBrowser:c}=await import("./search-provider-browser-CGBsczAM.js");return{SfxSearchProviderBrowser:c}},[]);customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await Z(async()=>{const{SfxProviderBrowser:c}=await import("./provider-browser-CF_5FXuu.js");return{SfxProviderBrowser:c}},[]);customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var h,f,b;this._showUrlDialog=!1;const{url:t,name:i,nameIsUserDefined:o}=e.detail,r=(h=this.config)==null?void 0:h.callbacks,n=gr(i),a=n.startsWith("image/");if(zo(i))return;const l=this._store.getState();if([...l.files.values()].some(m=>m.name===i&&m.status!=="rejected"&&m.status!=="cancelled"))return;const d=Mo({name:i,size:0,type:n},l.restrictions,l.files);if(d){const m={id:ti(),status:"rejected",file:null,remoteUrl:t,name:i,nameIsUserDefined:o,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...si};Zt(this._store,m),this._dispatchPublic(V.FILE_REJECTED,{file:m,reason:d.message}),(f=r==null?void 0:r.onFileRejected)==null||f.call(r,m,d.message);return}const p={id:ti(),status:"idle",file:null,remoteUrl:t,name:i,nameIsUserDefined:o,size:0,type:n,previewUrl:a?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...si};Zt(this._store,p),this._dispatchPublic(V.FILE_ADDED,{file:p}),(b=r==null?void 0:r.onFileAdded)==null||b.call(r,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,o,r;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(V.FILE_PREVIEW,{file:t}),(r=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFilePreview)==null||r.call(o,t))},this._onFillMetadata=()=>{var t,i,o,r;this._bulkMetadataHadIssuesOnOpen=this._hasMetadataIssues;const e=[...this._store.getState().files.values()].filter(n=>se._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(V.FILL_METADATA,{files:e}),(r=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFillMetadata)==null||r.call(o,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=pt)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,pt).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{if(!this._firstMissingRequiredFieldKey()){const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning")}this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var o,r,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(V.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(r=(o=this.config)==null?void 0:o.callbacks)==null?void 0:r.onFileCopyCdn)==null||n.call(r,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:r}of t){const n=i.get(o);n&&i.set(o,{...n,meta:{...n.meta,...r}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTagsSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesMeta(t.map(({fileId:i,tags:o})=>({fileId:i,tags:o})))},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,o=new Map(i);for(const{fileId:r,taxonodes:n}of t){const a=i.get(r);if(!a||!se._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[c,d]of Object.entries(n))d==null?delete l[c]:l[c]=d;o.set(r,{...a,taxonodes:l})}this._store.setState({files:o})},this._onBulkMetadataClose=e=>{var o;const i=((o=e.detail)==null?void 0:o.saved)===!0&&this._bulkMetadataHadIssuesOnOpen&&!this._hasMetadataIssues;this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,i&&this._onUploadStart()},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var o,r,n;const t=(o=this.config)==null?void 0:o.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(r=this._engine)==null||r.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(V.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=Ti.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&Ti.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,l,c;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,o=(d,p,h)=>`${d}\0${p}\0${h}`,r=new Set;for(const d of this._store.getState().files.values())d.status!=="rejected"&&d.status!=="cancelled"&&r.add(o(d.name,d.size,d.relativeFolder??""));for(const d of e.detail.files){if(zo(d.name))continue;const p=i?d.relativeFolder??"":"",h=this._store.getState(),f=o(d.name,d.size,p);if(r.has(f))continue;const b=d.thumbnail?this._transformRemoteThumbnail(d.thumbnail,{source:"connector",providerId:d.provider}):null,m=Mo({name:d.name,size:d.size,type:d.mimeType},h.restrictions,h.files);if(m){const A={id:ti(),status:"rejected",file:null,remoteUrl:null,name:d.name,size:d.size,type:d.mimeType,previewUrl:b,duration:null,progress:0,speed:0,bytesUploaded:0,error:m.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:d,...si,relativeFolder:p};Zt(this._store,A),this._dispatchPublic(V.FILE_REJECTED,{file:A,reason:m.message}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,A,m.message);continue}const C={id:ti(),status:"idle",file:null,remoteUrl:null,name:d.name,size:d.size,type:d.mimeType,previewUrl:b,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:d,...si,relativeFolder:p};Zt(this._store,C),r.add(f),this._dispatchPublic(V.FILE_ADDED,{file:C}),(c=t==null?void 0:t.onFileAdded)==null||c.call(t,C)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,o,r,n;this._dispatchPublic(V.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),(((r=this.config)==null?void 0:r.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(V.CANCEL,{})},this._onConfirmDismissOk=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!0),this._confirmDismissResolve=null},this._onConfirmDismissCancel=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!1),this._confirmDismissResolve=null},this._onModalDismiss=async()=>{var e,t,i,o;await this._confirmDismiss()&&(this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(V.CANCEL,{}),this.close())},this._onCancelUpload=()=>{var e,t,i,o;(e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(V.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(V.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(V.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(V.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&rd(t,{allowDirectories:this._folderDropAllowed}).then(({files:i,hadDirectories:o,rejectedDirectories:r})=>{if(r&&this._showFolderDisabledToast(),i.length===0){o&&!r&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:o}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._confirmDismissVisible){this._onConfirmDismissCancel();return}if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const o=((t=this.config)==null?void 0:t.mode)??"modal",r=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(r==="close"||r==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),r=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,r))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._namingViolationIds=new Set,this._namingViolationIdsKey="",this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=se._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=i===-1?1:(i+1)%t.length;this._fsZoom=t[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Gu(),this._storeCtrl=new Wu(this,this._store)}get _lastUploadId(){var i,o;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,o;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(r=>r.type===As.LANGUAGES);return((o=t==null?void 0:t.variants.find(Boolean))==null?void 0:o.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,o,r;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((o=this.config)==null?void 0:o.locale)??void 0;return{...bh((r=this._metadataSchema)==null?void 0:r.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var o,r,n;const t=(((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups)??[]).find(a=>a.type===As.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(r=this.config)==null?void 0:r.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var o;const e=(o=this.config)==null?void 0:o.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const o=ih(e,t);return this._localizedSchemaCache={base:e,translations:t,result:o},o}get _bulkMetadataSchema(){var r,n;const e=this._localizedMetadataSchema;if(!e)return e;const t=((n=(r=this.config)==null?void 0:r.metadataConfig)==null?void 0:n.showTags)!==!1,i=this._bulkMetadataSchemaCache;if(i&&i.base===e&&i.showTags===t)return i.result;let o=wc(e);return t&&(o=lf(o,this._storeCtrl.state.t)),this._bulkMetadataSchemaCache={base:e,showTags:t,result:o},o}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(l=>l.type===As.LANGUAGES)))return;const o=this._activeLanguage;if(!o||this._metadataTranslationsLang===o&&this._metadataTranslations)return;this._metadataTranslationsLang=o;const r=++this._translationsRequestId,n=e.peek(o);if(n){this._metadataTranslations=n;return}e.getTranslations(o).then(l=>{r===this._translationsRequestId&&(this._metadataTranslations=l)})}open(){var t,i,o,r,n,a,l,c,d;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||o.call(i),this._dispatchPublic(V.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(r=this.config)==null?void 0:r.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(V.OPEN,{}),e&&((d=(c=(l=this.config)==null?void 0:l.callbacks)==null?void 0:c.onRestore)==null||d.call(c),this._dispatchPublic(V.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(V.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(V.CLOSE,{}),this.requestUpdate()}upload(){var r,n,a,l,c,d,p,h,f,b;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(m=>m.status==="idle"||m.status==="queued");if((n=(r=this.config)==null?void 0:r.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(V.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const o=[...this._store.getState().files.values()].filter(m=>m.status==="idle"||m.status==="queued");this._dispatchPublic(V.UPLOAD_STARTED,{files:o}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||c.call(l,o),this._engine.uploadAll(),(d=this.config)!=null&&d.minimizeOnUpload&&((p=this.config)==null?void 0:p.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(b=(f=(h=this.config)==null?void 0:h.callbacks)==null?void 0:f.onMinimize)==null||b.call(f),this._dispatchFloatGeometryEvent(V.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,o=new Map(i);let r=!1;for(const n of e){const a=i.get(n.id);a&&(o.set(n.id,{...a,...n}),r=!0)}r&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,r=o.get(e);if(!r||!se._MODIFIABLE_STATUSES.has(r.status))return;const n=new Map(o);n.set(e,{...r,meta:t!=null?{...r.meta,...t}:r.meta,tags:i??r.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:r,meta:n,tags:a}of e){const l=t.get(r);!l||!se._MODIFIABLE_STATUSES.has(l.status)||(i.set(r,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const o=this._store.getState().files,r=o.get(e);if(!r||!se._MODIFIABLE_STATUSES.has(r.status))return;const n={...r.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(o);a.set(e,{...r,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const o=this._store.getState().files,r=new Map(o);let n=!1;for(const a of e){const l=o.get(a);if(!l||!se._MODIFIABLE_STATUSES.has(l.status))continue;const c={...l.taxonodes??{}};i==null?delete c[t]:c[t]=i,r.set(a,{...l,taxonodes:c}),n=!0}n&&this._store.setState({files:r})}updateFileProduct(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!se._MODIFIABLE_STATUSES.has(o.status))return;const r=new Map(i);r.set(e,{...o,product:Ma(o.product,t)}),this._store.setState({files:r})}updateFileFocusPoint(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!se._MODIFIABLE_STATUSES.has(o.status)||(o.focusPoint??null)===t)return;const r=new Map(i);r.set(e,{...o,focusPoint:t}),this._store.setState({files:r})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:r,product:n}of e){const a=t.get(r);!a||!se._MODIFIABLE_STATUSES.has(a.status)||(i.set(r,{...a,product:Ma(a.product,n)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._resetFocusPointPicking(),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal(),this._syncPageScrollLock()}_syncPageScrollLock(){var i;const e=((i=this.config)==null?void 0:i.mode)??"modal";this.isConnected&&e==="modal"&&this._isOpen&&!this._isMinimized?Ku(this):Sa(this)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),ot(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(V.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(ot(v,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._unsubscribeTouch=Or(()=>this.requestUpdate()),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&Ti.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Tu(e||"en");uh(e||"en").catch(()=>{}),i&&t.on("missingKey",(r,n,a,l,c,d)=>{const p=a.match(/_(?:zero|one|two|few|many|other)$/),h=p&&(d!=null&&d[`defaultValue${p[0]}`])?String(d[`defaultValue${p[0]}`]):l;Ou.handleMissingKey(a,h,n)});const o=(r,n,a)=>Tt(r,n,a);this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o,r,n;super.disconnectedCallback(),Sa(this),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,(t=this._hostStyleObserver)==null||t.disconnect(),this._hostStyleObserver=null,(i=this._unsubStoreEvents)==null||i.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(o=this._portalContainer)==null||o.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const a of this._store.getState().files.values())a.previewUrl&&URL.revokeObjectURL(a.previewUrl);(n=this._engine)==null||n.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const r=i.defaults,n=this._seededSettingsDefaults;r.resize!==void 0&&r.resize!==(n==null?void 0:n.resize)&&(this._setResize=r.resize),r.maxWidth!==void 0&&r.maxWidth!==(n==null?void 0:n.maxWidth)&&(this._setMaxW=r.maxWidth),r.maxHeight!==void 0&&r.maxHeight!==(n==null?void 0:n.maxHeight)&&(this._setMaxH=r.maxHeight),r.transcode!==void 0&&r.transcode!==(n==null?void 0:n.transcode)&&(this._setTranscode=r.transcode),r.resolution!==void 0&&r.resolution!==(n==null?void 0:n.resolution)&&(this._setResolution=r.resolution),r.protocol!==void 0&&r.protocol!==(n==null?void 0:n.protocol)&&(this._setProtocol=r.protocol),r.resumable!==void 0&&r.resumable!==(n==null?void 0:n.resumable)&&(this._setResumable=r.resumable),this._seededSettingsDefaults={...r}}const o=this._lastUploadId;this._hasStoredReview=o!=null&&Ti.exists(o),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,r,n,a,l;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=cn(t.container,e.apiDomain),this._authHeaders=fr(t),this._ensureEngine(),(r=this._engine)==null||r.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(o=e.connectors)==null?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e);return}const i=++this._authResolveId;try{const c=await Rm(t,e.apiDomain);if(i!==this._authResolveId)return;if(this._apiBase=c.apiBase,this._authHeaders=c.headers,(n=c.uploadScope)!=null&&n.length){const d=this._store.getState().targetFolder||"/",p=Fm(d,c.uploadScope);p!==d&&this._store.setState({targetFolder:p})}this._ensureEngine(),(l=this._engine)==null||l.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(a=e.connectors)==null?void 0:a.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._applyNamingConvention(e)}catch(c){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",c),this._showToast(this._formatAuthError(c))}}_formatAuthError(e){var i,o;const t=e instanceof Error?e.message:String(e);return(o=(i=this.config)==null?void 0:i.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");i==null||i.show(e,t)}_applyNamingConvention(e){const t=e.namingConvention;if(!(t!=null&&t.enabled)){this._setNamingConvention(null,!1);return}const i=Um(t.regexB64);this._setNamingConvention(i,i===null)}_setNamingConvention(e,t){this._store.setState({namingConvention:{regex:e,broken:t}})}_normalizeTusConfig(){var a,l,c,d;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let o=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;o||(o={})}if(!o)return;const r=(d=(c=this.config)==null?void 0:c.connectors)==null?void 0:d.companionUrl;if(!r)return o;const n=r.replace(/\/+$/,"");return{...o,endpoint:o.endpoint??`${n}/files`,jsonBase:o.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e,t;return((e=this.config)==null?void 0:e.allowFolderUpload)===!1||((t=this.config)==null?void 0:t.preserveFolderStructure)===!1?!1:this._allowMulti}get _folderDropAllowed(){var e;return((e=this.config)==null?void 0:e.allowFolderUpload)!==!1}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return o=>{const r={},n=qe(o);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(r.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(r.postprocess="transcode",r["video-resolution"]=this._setResolution,r.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(r.opt_force_name=l)}const a=i==null?void 0:i(o);return a&&Object.assign(r,a),Object.keys(r).length>0?r:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new $m(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,o)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:o}),onFocusPointError:i=>this._showToast(this._storeCtrl.state.t("focusPointSaveFailed","Could not save the focus point for {{name}}",{name:i.name}),"warning")}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,o=this._storeCtrl.state.t;try{const{fetchMetadataSchema:r,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:l,hasCachedDependencies:c,canReachHub:d,canUseSettingsSchema:p,HUB_HEADERS_HINT:h,createTagsAutocomplete:f,createTaxonomyService:b,createUltratagsService:m,createFieldI18nService:C}=await Z(async()=>{const{fetchMetadataSchema:D,fetchDependencies:q,normalizeDependencies:W,hasCachedSchema:he,hasCachedDependencies:z,canReachHub:le,canUseSettingsSchema:K,HUB_HEADERS_HINT:S,createTagsAutocomplete:x,createTaxonomyService:_,createUltratagsService:R,createFieldI18nService:F}=await import("./index-CjCqcjcF.js");return{fetchMetadataSchema:D,fetchDependencies:q,normalizeDependencies:W,hasCachedSchema:he,hasCachedDependencies:z,canReachHub:le,canUseSettingsSchema:K,HUB_HEADERS_HINT:S,createTagsAutocomplete:x,createTaxonomyService:_,createUltratagsService:R,createFieldI18nService:F}},[]);if(i!==this._metadataSchemaResolveId)return;const A=d(t)&&!!t.projectUuid,$=A||p(t)||!!t.rawMetadata||l(t.projectUuid,this._apiBase),E=A||!!t.projectUuid&&c(t.projectUuid)||!!t.rawDependencies;if(!$){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig sets schemaSource: 'hub' but no usable Hub auth is configured — skipping metadata schema and dependencies. Drop schemaSource to load the schema from /v5/settings instead. ${h}`),this._showToast(o("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let y;t.rawDependencies?y=Promise.resolve(a(t.rawDependencies)):E&&t.projectUuid?y=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(D=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",D),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${h}`)),y=Promise.resolve([]));const[w,O]=await Promise.all([r(this._apiBase,this._authHeaders,t.projectUuid,t),y]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=O,this._metadataAutocomplete=f(this._apiBase,this._authHeaders),this._taxonomyService=b(this._apiBase,this._authHeaders),this._ultratagsService=m(this._apiBase,this._authHeaders),this._fieldI18nService=C(this._apiBase,this._authHeaders);let T=w.productsEnabled?Kp(w,this._storeCtrl.state.t):w;t.focusPointEnabled&&(T=ah(T,this._storeCtrl.state.t)),this._metadataSchema=T;const U=this._metadataSchema.fields.filter(D=>Vi(D,t)).map(D=>D.key);this._dispatchPublic(V.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:U}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast(o("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let o=!1;const r=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!se._MODIFIABLE_STATUSES.has(a.status))continue;const l=Dt({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const c={};for(const d of t.fields){const p=l.get(d.ckey);(p==null?void 0:p.setValue)!==void 0&&(p.hidden||ue(d)||Ve(a.meta[d.key])&&(c[d.key]=Yo(d,p.setValue)))}Object.keys(c).length!==0&&(r.set(a.id,{...a,meta:{...a.meta,...c}}),o=!0)}o&&this._store.setState({files:r})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const o=new Map(t);for(const r of t.values()){if(!se._MODIFIABLE_STATUSES.has(r.status))continue;const n=Dt({mime:r.type??"",meta:r.meta},e,this._metadataDependencies),a=$p(r.meta,e,n);a!==r.meta&&(o.set(r.id,{...r,meta:a}),i=!0)}i&&this._store.setState({files:o})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const r=new Map(this._store.getState().files);r.set(e,{...o,name:i,nameIsUserDefined:!0}),this._store.setState({files:r})}_focusPointValueFor(e){if(this._focusPointDraft&&this._previewFileId===e.id)return this._focusPointDraft;if(!e.focusPoint)return null;const t=mc(e.focusPoint);return t.horizontal===""||t.vertical===""?null:t}get _focusPointMarkerVisible(){return this._focusPointPicking||this._focusPointFieldHovered||this._focusPointFieldFocused}_resetFocusPointPicking(){this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1}_previewMeta(e){var i,o,r;const t=(i=this._metadataSchema)==null?void 0:i.fieldsByKey.has(st);return!((o=this._metadataSchema)!=null&&o.productsEnabled)&&!t?e.meta:{...e.meta,...(r=this._metadataSchema)!=null&&r.productsEnabled?{[Bt]:e.product.ref,[jt]:e.product.position}:{},...t?{[st]:this._focusPointDraft!==null&&this._previewFileId===e.id?this._focusPointDraft:e.focusPoint??null}:{}}}_resolvedSchemaFor(e){if(!this._metadataSchema)return null;const t=this._metadataDependencies.length>0?Dt({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies):null;if(!(this._metadataSchema.fieldsByKey.has(st)&&!(e.type??"").startsWith("image/")))return t;const o=new Map(t??[]);return o.set(st,{...o.get(st),hidden:!0,required:!1,contributingDependencyUuids:[]}),o}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:xc(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Zp(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?_c(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}get _requiredFieldsTotal(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Xp(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies).size}get _requiredFieldsRemaining(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Object.keys(Jp(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)).length}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var o;const e=this._isPillExpanded?"card":"pill",t=(o=this._portalContainer)==null?void 0:o.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var o,r,n,a,l,c,d,p,h,f;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(o=this.config)==null?void 0:o.callbacks;for(const[b,m]of e.files){const C=t.files.get(b);if(!C){m.relativeFolder&&this._firedFolders.delete(m.relativeFolder);continue}if(C.status!==m.status)switch(m.status){case"uploading":C.status==="paused"&&(this._dispatchPublic(V.UPLOAD_RESUMED,{file:m}),(r=i==null?void 0:i.onUploadResumed)==null||r.call(i,m));break;case"complete":m.response&&(this._dispatchPublic(V.UPLOAD_COMPLETE,{file:m,response:m.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,m,m.response));break;case"error":case"failed":{const A=new Error(m.error??"Upload failed");this._dispatchPublic(V.UPLOAD_ERROR,{file:m,error:A}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,m,A);break}case"retrying":this._dispatchPublic(V.UPLOAD_RETRY,{file:m,attempt:m.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,m,m.retryCount);break;case"paused":this._dispatchPublic(V.UPLOAD_PAUSED,{file:m}),(c=i==null?void 0:i.onUploadPaused)==null||c.call(i,m);break}m.status==="uploading"&&C.progress!==m.progress&&(this._dispatchPublic(V.UPLOAD_PROGRESS,{file:m,progress:m.progress,speed:m.speed}),(d=i==null?void 0:i.onUploadProgress)==null||d.call(i,m,m.progress,m.speed)),m.relativeFolder&&C.status!==m.status&&zl.has(m.status)&&!this._firedFolders.has(m.relativeFolder)&&this._maybeDispatchFolderComplete(m.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const b=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=b),this._dispatchPublic(V.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:b}),(p=i==null?void 0:i.onTotalProgress)==null||p.call(i,e.totalProgress,e.totalSpeed,b)}if(t.isUploading&&!e.isUploading){const b=[...e.files.values()];if(!b.some(C=>C.status==="cancelled")){const C=b.filter(y=>y.status==="complete"),A=b.filter(y=>y.status==="failed"||y.status==="error");if(C.length===0&&A.length===0)return;const $=this._lastUploadId;if($!=null){const y=[...C,...A];Ti.save($,y),this._hasStoredReview=y.length>0}this._dispatchPublic(V.ALL_COMPLETE,{successful:C,failed:A}),(h=i==null?void 0:i.onAllComplete)==null||h.call(i,C,A);const E=(f=this.config)==null?void 0:f.closeOnComplete;if(E!==!1&&E!=null){const y=typeof E=="number"?E:1500;this._closeOnCompleteTimer=setTimeout(()=>{var w,O,T;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(V.COMPLETE_ACTION,{}),(T=(O=(w=this.config)==null?void 0:w.callbacks)==null?void 0:O.onCompleteAction)==null||T.call(O),this.close())},y)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const o=[...t.files.values()].filter(l=>l.relativeFolder===e);if(o.length===0||o.some(l=>!zl.has(l.status)))return;const r=o.filter(l=>l.status==="complete"),n=o.filter(l=>l.status==="failed"||l.status==="error");r.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(V.FOLDER_COMPLETE,{folder:e,successful:r,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,r,n))}_filterCoreSources(e,t,i){const o=Hu(),r=qu()&&(!t||Qm(i));return o&&r&&!t?e:e.filter(n=>(o||n.id!=="screen-cast")&&(r||n.id!=="camera")&&(!t||n.id!=="device"))}get _mergedSources(){var b;const e=(b=this.config)==null?void 0:b.connectors,t=We(),i=Bo(this._storeCtrl.state.restrictions);if(e===this._cachedSourcesConfig&&t===this._cachedSourcesTouch&&i===this._cachedSourcesAccept)return this._cachedSources;if(this._cachedSourcesConfig=e,this._cachedSourcesTouch=t,this._cachedSourcesAccept=i,!e)return this._cachedSources=this._filterCoreSources(li.filter(m=>m.id!=="url"),t,i),this._cachedSources;const o=e.providers.length>0?ev(e.providers):[],r=e.customSources??[],n=e.coreSources?new Set(e.coreSources):null,a=n?li.filter(m=>n.has(m.id)):li,l=this._filterCoreSources(e.companionUrl?a:a.filter(m=>m.id!=="url"),t,i),c=t?["camera","url"]:["device","url"],d=c.map(m=>l.find(C=>C.id===m)).filter(m=>!!m),p=l.filter(m=>!c.includes(m.id)),h=new Set,f=[];for(const m of[...d,...o,...p,...r])if(!h.has(m.id)){if(se._RESERVED_IDS.has(m.id)&&m.onActivate){console.warn(`[sfx-uploader] Custom source id "${m.id}" conflicts with a built-in source and was skipped.`);continue}h.add(m.id),f.push(m)}return this._cachedSources=f,this._cachedSources}get _tileSources(){const e=this._mergedSources;return e===this._cachedTileSourcesFrom?this._cachedTileSources:(this._cachedTileSourcesFrom=e,this._cachedTileSources=this._withTileDeviceSource(e),this._cachedTileSources)}_withTileDeviceSource(e){var i,o;if(!We()||e.some(r=>r.id==="device"))return e;const t=(o=(i=this.config)==null?void 0:i.connectors)==null?void 0:o.coreSources;return t&&!t.includes("device")?e:[av,...e]}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>i.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var l,c,d,p,h;const t=(l=this.config)==null?void 0:l.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((c=this.config)==null?void 0:c.preserveFolderStructure)!==!1;let o=0,r=!1;const n=(f,b,m)=>`${f}\0${b}\0${m}`,a=new Set;for(const f of this._store.getState().files.values())f.status!=="rejected"&&f.status!=="cancelled"&&a.add(n(f.name,f.size,f.relativeFolder??""));for(const f of e){if(zo(f.name))continue;if(r){o++;continue}const b=i?xm(bm(f)):"",m=this._store.getState(),C=n(f.name,f.size,b);if(a.has(C))continue;const A=f.type||gr(f.name),$=Mo({name:f.name,size:f.size,type:A},m.restrictions,m.files);if($){if(Zm($)){r=!0,o++;continue}const w=A.startsWith("image/")&&!kl(A)?URL.createObjectURL(f):null,O={id:ti(),status:"rejected",file:f,remoteUrl:null,name:f.name,size:f.size,type:A,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:$.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...si,relativeFolder:b};Zt(this._store,O),this._dispatchPublic(V.FILE_REJECTED,{file:O,reason:$.message}),(d=t==null?void 0:t.onFileRejected)==null||d.call(t,O,$.message);const T=(p=this.config)==null?void 0:p.rejectedFileAutoRemoveDelay,U=T===!1||T===0||T===void 0?0:T;if(U>0){const D=O.id,q=setTimeout(()=>{this._rejectedTimers.delete(D);const W=this._store.getState().files.get(D);W&&W.status==="rejected"&&Ca(this._store,D)},U);this._rejectedTimers.set(D,q)}continue}let E=null;A.startsWith("image/")&&!kl(A)&&(E=URL.createObjectURL(f));const y={id:ti(),status:"idle",file:f,remoteUrl:null,name:f.name,size:f.size,type:A,previewUrl:E,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...si,relativeFolder:b};if(Zt(this._store,y),a.add(C),this._dispatchPublic(V.FILE_ADDED,{file:y}),(h=t==null?void 0:t.onFileAdded)==null||h.call(t,y),f.type.startsWith("video/")){Xm(f).then(O=>{if(!O)return;const T=this._store.getState(),U=T.files.get(y.id);if(U){const D=new Map(T.files);D.set(y.id,{...U,previewUrl:O}),this._store.setState({files:D})}else URL.revokeObjectURL(O)});const w=document.createElement("video");w.preload="metadata",w.src=URL.createObjectURL(f),w.onerror=()=>{URL.revokeObjectURL(w.src)},w.onloadedmetadata=()=>{const O=w.duration;if(URL.revokeObjectURL(w.src),!isFinite(O))return;const T=this._store.getState(),U=T.files.get(y.id);if(U){const D=new Map(T.files);D.set(y.id,{...U,duration:O}),this._store.setState({files:D})}}}}if(o>0){const f=this._storeCtrl.state.t,b=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(f("tooManyFilesSkipped",{count:o,max:b,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}get _captureInput(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector("input[data-sfx-capture]"))??null}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_showFolderDisabledToast(){const e=this._storeCtrl.state.t;this._showToast(e("folderUploadDisabled","Folder upload is disabled"),"info")}_removeFile(e){var r,n,a,l,c;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const d=this._videoBlobUrls.get(t.file);d&&(URL.revokeObjectURL(d),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((r=this._engine)==null||r.cancelFile(e)),Ca(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const d=[...this._store.getState().files.values()];this._previewFileId=d.length>0?d[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(V.FILE_REMOVED,{file:i}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||c.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>qe(e)==="image"&&!Ot(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,o,r;const e=(o=(i=this.config)==null?void 0:i.auth)==null?void 0:o.container,t=(r=this._authHeaders)==null?void 0:r["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var r,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=yl((n=(r=this.config)==null?void 0:r.similarityCheck)==null?void 0:n.confidence),o=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),_l(e,{...t,threshold:i,endpoint:o}).then(c=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,c)}).catch(c=>{console.error("[sfx-uploader] Similarity check failed for",e.name,c),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var h,f,b,m;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(C=>C.id);const i=yl((f=(h=this.config)==null?void 0:h.similarityCheck)==null?void 0:f.confidence),o=(m=(b=this.config)==null?void 0:b.similarityCheck)==null?void 0:m.endpoint,r=new AbortController;this._similarAbort=r;const n=[...e];let a=0,l=0;const c=e.length,d=()=>{if(!r.signal.aborted){if(!this._previewFileId){const C=e.find(A=>{var $;return((($=this._similarResults.get(A.id))==null?void 0:$.length)??0)>0});C&&(this._previewFileId=C.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},p=()=>{if(!r.signal.aborted)for(;a<gb&&n.length>0;){const C=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(C.id),_l(C,{...t,threshold:i,endpoint:o,signal:r.signal}).then(A=>{r.signal.aborted||(this._similarMarkInactive(C.id),this._similarSetResults(C.id,A))}).catch(A=>{r.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",C.name,A),this._similarMarkInactive(C.id),this._similarSetResults(C.id,[]))}).finally(()=>{r.signal.aborted||(a-=1,l+=1,l===c?d():p())})}};p()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),o=i>0?t.slice(i+1).toUpperCase():"";return o&&o.length<=5?o:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(o=>{var r,n;return o.status==="complete"&&!!((n=(r=o.response)==null?void 0:r.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var r,n,a;if(!e)return;const t=Nu(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(V.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),o=(a=(n=(r=this.config)==null?void 0:r.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||o===!1)&&t&&window.location.assign(t)}get _hasUnsavedUploadWork(){var e;if(this._phase==="uploading")return!0;if(((e=this.config)==null?void 0:e.clearOnClose)===!1)return!1;for(const t of this._store.getState().files.values())if(t.status==="idle"||t.status==="queued")return!0;return!1}_confirmDismiss(){return this._hasUnsavedUploadWork?new Promise(e=>{this._confirmDismissResolve=e,this._confirmDismissVisible=!0}):Promise.resolve(!0)}render(){var o;const e=((o=this.config)==null?void 0:o.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?u`
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
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return v;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);return u`
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
              @click=${o=>o.stopPropagation()}
            ></video>`:u`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${oe(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=se._FS_ZOOM_LEVELS[se._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=se._FS_ZOOM_LEVELS[se._FS_ZOOM_LEVELS.length-1]?u`<svg
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
    `}_renderProgressHeaderActions(){var a,l,c;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((l=this.config)==null?void 0:l.header)??(t==="modal"?"close":!0),o=!!((c=this.config)!=null&&c.minimizeOnUpload)&&t!=="inline",r=i==="close";if(!o&&!r)return v;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return u`
      <div class="header-actions">
        ${o?u`<button
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
        ${r?u`<button
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
    `}_renderHeader(){var A,$,E,y,w,O;const e=this._storeCtrl.state.t,t=((A=this.config)==null?void 0:A.mode)??"modal";if(this._phase==="uploading"){const T=this._storeCtrl.state,D=[...T.files.values()].filter(z=>z.status!=="rejected"&&z.status!=="cancelled"),q=D.length,W=D.filter(z=>z.status==="complete").length,he=T.totalProgress??0;return u`
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
                ${e("uploadingFiles",{count:q,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:W,total:q})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:wl(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(he)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${oe({width:`${he}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const T=[...this._storeCtrl.state.files.values()].filter(D=>D.status!=="rejected"&&D.status!=="cancelled"),U=this._batchOutcome(T,!0);return u`
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
                        ${oe({width:U.segPct(U.newCount)})}
                      ></div>`:v}
                  ${U.alreadyExistedCount>0?u`<div
                        class="header-seg dup"
                        ${oe({width:U.segPct(U.alreadyExistedCount)})}
                      ></div>`:v}
                  ${U.failed>0?u`<div
                        class="header-seg fail"
                        ${oe({width:U.segPct(U.failed)})}
                      ></div>`:v}
                </div>
              </div>`:v}
        </div>
      `}if(t==="inline"&&(($=this.config)!=null&&$.inlineHeader))return v;const i=((E=this.config)==null?void 0:E.header)??(t==="modal"?"close":!0);if(i===!1)return v;const o=t==="modal"?this._onModalDismiss:this._onInlineDismiss,r=i==="back"?u`<button
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
          </button>`:v,n=(y=this.config)==null?void 0:y.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,c=[...this._storeCtrl.state.files.values()],d=c.some(T=>qe(T)==="image"&&!Ot(T.type)),p=c.some(T=>qe(T)==="pdf"),h=c.some(T=>qe(T)==="vid"),b=a&&(d||p||h||l)?u`<button
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
          </button>`:v;return u`
      <div class="header">
        ${r}
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
        ${m} ${b} ${C}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,o=e.filter(E=>E.status==="complete").length,r=e.filter(E=>E.status==="failed"||E.status==="error").length,n=e.filter(E=>E.status==="complete"&&E.alreadyExisted).length,a=Math.max(o-n,0),l=o>0&&r===0&&n>=o,c=t?r>0?"error":n>0?"warn":"done":"",d=u`<svg
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
    </svg>`,f=r>0?o>0?d:p:n>0?d:h,b=t?r>0?o>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):l?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),m=[];a>0&&m.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&m.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),r>0&&m.push(i("nFailed","{{count}} failed",{count:r}));const C=m.length>0?m.join(" · "):i("allDone","All done"),A=a+n+r;return{completed:o,failed:r,alreadyExistedCount:n,newCount:a,allAlreadyExisted:l,outcomeClass:c,outcomeIcon:f,title:b,doneSummary:C,segTotal:A,segPct:E=>A>0?`${E/A*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),r=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:l,newCount:c,outcomeClass:d,outcomeIcon:p,title:h,doneSummary:f,segPct:b}=this._batchOutcome(e,r),m=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return u`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${r?u`<div class="float-collapsed-icon ${d}">${p}</div>`:u`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${h}</span>
            ${r?v:u`<span class="float-collapsed-pct">${o}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${r&&m?u`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(m)}
                >
                  ${Ro}
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
      `;const C=e.filter(y=>y.status==="failed"||y.status==="error"),A=e.filter(y=>y.status==="complete"&&y.alreadyExisted),$=e.filter(y=>y.status!=="failed"&&y.status!=="error"&&y.status!=="complete"),E=e.filter(y=>y.status==="complete"&&!y.alreadyExisted);return u`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${d}">
              ${r?p:u`<svg
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
                ${r?f:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:wl(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${r&&m?u`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(m)}
                >
                  ${Ro}
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
            ${r?v:u`<span class="float-progress-pct">${o}%</span>`}
          </div>
          ${r?u`<div class="float-bar segmented" role="img" aria-label=${f}>
                ${c>0?u`<div
                      class="float-bar-seg ok"
                      ${oe({width:b(c)})}
                    ></div>`:v}
                ${l>0?u`<div
                      class="float-bar-seg dup"
                      ${oe({width:b(l)})}
                    ></div>`:v}
                ${a>0?u`<div
                      class="float-bar-seg fail"
                      ${oe({width:b(a)})}
                    ></div>`:v}
              </div>`:u`<div class="float-bar">
                <div class="float-bar-fill" ${oe({width:`${o}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${ci(C,y=>y.id,y=>this._renderFloatItem(y,i))}
          ${ci(A,y=>y.id,y=>this._renderFloatItem(y,i))}
          ${ci($,y=>y.id,y=>this._renderFloatItem(y,i))}
          ${ci(E,y=>y.id,y=>this._renderFloatItem(y,i))}
        </div>
      </div>
    `}_truncateTooltip(e,t=140){return e.length>t?`${e.slice(0,t).trimEnd()}…`:e}_renderFloatItem(e,t){var o,r,n;const i=e.status==="failed"||e.status==="error";return u`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${oe(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
        >
          ${e.previewUrl?v:u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${ai(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status==="complete"?u`${(o=this.config)!=null&&o.showLocateButton&&((n=(r=e.response)==null?void 0:r.file)!=null&&n.uuid)?u`<button
                    class="float-item-act locate"
                    title=${t("locate","Locate")}
                    aria-label=${t("locate","Locate")}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${Ro}
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
    `}_renderAssetCount(e,t,i,o){const r=e.reduce((a,l)=>a+(l.size||0),0),n=i!=="uploading"&&i!=="complete"&&!o;return u`
      <div class="asset-count">
        <span class="asset-count-text"
          >${e.length} ${e.length===1?"file":"files"} ·
          ${ai(r)}</span
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
                  <svg viewBox="0 0 24 24" aria-hidden="true">${ac}</svg>
                </button>
                <button
                  class="asset-count-btn accent"
                  type="button"
                  @click=${this._onAddMore}
                  aria-label=${t("addMore","Add more")}
                  title=${t("addMore","Add more")}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">${Vo}</svg>
                </button>
              </div>
            `:v}
      </div>
    `}_renderPreviewLayout(e){var C,A,$,E,y,w,O,T,U,D;if(e.length===0)return v;const t=this._storeCtrl.state.t,i=e,o=i.find(q=>q.id===this._previewFileId)??i[0],r=((C=o.name.split(".").pop())==null?void 0:C.toUpperCase())||"";new Date(o.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((q,W)=>q+(W.size||0),0),l=!!(($=(A=this.config)==null?void 0:A.similarityCheck)!=null&&$.enabled)&&this._phase==="ready",c=l?i.filter(q=>qe(q)==="image"&&!Ot(q.type)&&!this._similarResults.has(q.id)).map(q=>q.id):[],d=Math.min(c.length,pt),p=d>0&&this._similarSelectedIds.size>=d,h=this._similarSelectedIds.size>=pt,f=this._similarResults.get(o.id),b=f!==void 0,m=b?this._previewPanelTab:"details";return u`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${oe({flex:String(this._splitPct)})}>
          ${((E=this.config)==null?void 0:E.mode)==="inline"&&((y=this.config)!=null&&y.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):v}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${ai(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._tileSources}
            .accept=${Bo(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((w=this.config)==null?void 0:w.showLocateButton)??!1}
            .showCopyCdnButton=${((O=this.config)==null?void 0:O.showCopyCdnButton)??!1}
            .showCheckSimilar=${l}
            .selectMode=${l}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${p}
            .selectionFull=${h}
            .maxSelection=${pt}
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
        <div class="preview-panel" ${oe({flex:String(100-this._splitPct)})}>
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
                  <span class="preview-header-name" title=${o.name}
                    >${o.name}</span
                  >
                  <div class="preview-header-actions">
                    ${o.previewUrl||o.type.startsWith("video/")&&o.file?u`
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
                ${b?u`
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
                ${m==="similar"?this._renderSimilarPanel(o,f??[]):u`
                      <div class="preview-details-body">
                        ${o.type.startsWith("video/")&&o.file?u`
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
                            `:o.previewUrl?u`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${o.previewUrl}
                                      alt=${o.name}
                                    />
                                    ${(T=this._metadataSchema)!=null&&T.fieldsByKey.has(st)&&o.type.startsWith("image/")?u`<sfx-focus-point-overlay
                                          .picking=${this._focusPointPicking}
                                          .showMarker=${this._focusPointMarkerVisible}
                                          .value=${this._focusPointValueFor(o)}
                                          @focus-point-pick=${this._onFocusPointPick}
                                        ></sfx-focus-point-overlay>`:v}
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
                              `:u`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${qe(o)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${bt(r)}
                                      alt="${r?t("extFile","{{ext}} file",{ext:r}):t("file","File")}"
                                      @error=${q=>{const W=q.target,he=bt();!W.dataset.fallback&&W.src!==he&&(W.dataset.fallback="1",W.src=he)}}
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
                        ${this._metadataSchema&&((U=this.config)!=null&&U.metadataConfig)?u`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${r}${o.size?` · ${ai(o.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
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
                                  .meta=${this._previewMeta(o)}
                                  .focusPointPicking=${this._focusPointPicking}
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
                                    <div class="preview-file-info-val">${o.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${r}</div>
                                  </div>
                                  ${o.size?u`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${ai(o.size)}
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
        ${t.map(o=>{const r=Math.round(o.score*100);return u`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score>=.85?"high":""}">${r}%</span>
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
                ${o.url?u`<img src=${o.url} alt="" />`:v}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(o)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(o)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var p;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(h=>qe(h)==="image"&&!Ot(h.type)),o=t.some(h=>qe(h)==="pdf"),r=t.some(h=>qe(h)==="vid"),n=(p=this.config)==null?void 0:p.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=h=>{switch(h){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},c=h=>{switch(h){case"hls":return e("protocolHls","HLS")}},d=h=>f=>{const b=parseInt(f.target.value,10);h(Number.isFinite(b)?b:0)};return u`
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
        ${i||o?u`
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
                      @input=${d(h=>this._setMaxW=h)}
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
                      @input=${d(h=>this._setMaxH=h)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:v}
        ${r?u`
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
                        ${mb.map(h=>u`
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
                ${vb.map(h=>u`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=h}}
                    >
                      <span class="sradio ${this._setProtocol===h?"on":""}"></span>
                      <span class="sradio-lbl">${c(h)}</span>
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
    `}_navigatePreview(e,t){var r;const o=e.findIndex(n=>n.id===this._previewFileId)+t;if(o>=0&&o<e.length){const n=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[o].id}}_namingConventionGate(e,t){const{regex:i,broken:o}=t;return{hasViolation:!o&&!!i&&e.some(n=>!bl(n.name,i)),broken:o}}_computeNamingViolationIds(e,t,i){if(!t||!i)return this._namingViolationIdsKey!==""&&(this._namingViolationIdsKey="",this._namingViolationIds=new Set),this._namingViolationIds;const o=e.filter(n=>!bl(n.name,i)).map(n=>n.id),r=o.join(",");return r!==this._namingViolationIdsKey&&(this._namingViolationIdsKey=r,this._namingViolationIds=new Set(o)),this._namingViolationIds}_renderNamingConventionBanner(e,t,i){if(!t&&!i)return v;const o=i?e("filenameNamingConventionMisconfigured","Upload can't proceed: the file naming rule configured for this project is invalid. Contact your administrator."):e("filenameNamingConventionBlocked","Upload can't proceed as file(s) is/are not matching the naming convention enforced.");return u`
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
        <span class="naming-banner-txt">${o}</span>
      </div>
    `}_renderBody(){var $,E,y,w,O,T,U,D,q,W,he,z,le;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],o=i.filter(K=>K.status==="idle"||K.status==="queued"||K.status==="error"||K.status==="failed"),{hasViolation:r,broken:n}=this._namingConventionGate(o,e.namingConvention),a=this._computeNamingViolationIds(o,r,e.namingConvention.regex),l=this._phase,c=Bo(e.restrictions),d=i.length>0,p=l==="ready"?this._requiredFieldsRemaining:0,f=!!((E=($=this.config)==null?void 0:$.similarityCheck)!=null&&E.enabled)&&l==="ready",b=f?i.filter(K=>qe(K)==="image"&&!Ot(K.type)&&!this._similarResults.has(K.id)).map(K=>K.id):[],m=Math.min(b.length,pt),C=m>0&&this._similarSelectedIds.size>=m,A=this._similarSelectedIds.size>=pt;return u`
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
        ${We()?u`<input
              data-sfx-capture
              type="file"
              capture="environment"
              accept=${c||"image/*,video/*"}
              @change=${this._onCaptureChange}
            />`:v}
        <div
          class="body ${d?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${d?this._onBodyDragEnter:v}
          @dragover=${d?this._onBodyDragOver:v}
          @dragleave=${d?this._onBodyDragLeave:v}
          @drop=${d?this._onBodyDrop:v}
        >
          ${((y=this.config)==null?void 0:y.mode)==="inline"&&((w=this.config)!=null&&w.inlineHeader)&&!this._previewFileId&&l!=="uploading"&&l!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):v}
          ${this._isReviewing?u`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((O=this.config)==null?void 0:O.showLocateButton)??!1}
                  .showCopyCdnButton=${((T=this.config)==null?void 0:T.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:u`
                ${d?v:u`<sfx-drop-zone
                        .t=${t}
                        .compact=${d}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${c}
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
                ${d?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):u`
                        ${l==="ready"?this._renderNamingConventionBanner(t,r,n):v}
                        ${this._renderAssetCount(i,t,l,f&&this._similarSelectedIds.size>0)}
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${l!=="uploading"&&l!=="complete"}
                          .sources=${this._tileSources}
                          .accept=${c}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((q=this.config)==null?void 0:q.showLocateButton)??!1}
                          .showCopyCdnButton=${((W=this.config)==null?void 0:W.showCopyCdnButton)??!1}
                          .showCheckSimilar=${f}
                          .selectMode=${f}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${C}
                          .selectionFull=${A}
                          .maxSelection=${pt}
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

        ${d?u`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${l==="uploading"?"uploading":l==="complete"?"done":"idle"}
                .fileCount=${l==="uploading"||l==="complete"?i.filter(K=>K.status!=="rejected"&&K.status!=="cancelled").length:o.length}
                .failedCount=${i.filter(K=>K.status==="failed"||K.status==="error").length}
                .blocked=${l==="ready"&&(r||n)}
                .showFillMetadata=${!!(((he=this.config)==null?void 0:he.showFillMetadata)??((z=this.config)==null?void 0:z.metadataConfig))&&p===0}
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
                      `:Dl.has(this._activeConnector)?u`
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
                .files=${[...this._store.getState().files.values()].filter(K=>se._MODIFIABLE_STATUSES.has(K.status))}
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
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(r=>r.id===this._previewFileId);if(i===-1)return;const o=i+e;if(o>=0&&o<t.length){const r=t[o];this._fullscreenPreviewUrl=r.previewUrl,this._fullscreenVideoFile=r.type.startsWith("video/")&&r.file?r.file:null,this._previewFileId=r.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},se.styles=M`
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

    ${De}
  `,se._FS_ZOOM_LEVELS=[1,2,3,4],se._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),se._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),se);j([g({attribute:!1})],B.prototype,"config");j([P()],B.prototype,"_isOpen");j([P()],B.prototype,"_activeConnector");j([P()],B.prototype,"_showUrlDialog");j([P()],B.prototype,"_showCameraDialog");j([P()],B.prototype,"_showScreenCastDialog");j([P()],B.prototype,"_confirmDismissVisible");j([P()],B.prototype,"_similarSelectMode");j([P()],B.prototype,"_similarSelectedIds");j([P()],B.prototype,"_similarRunIds");j([P()],B.prototype,"_similarActiveIds");j([P()],B.prototype,"_similarResults");j([P()],B.prototype,"_previewPanelTab");j([P()],B.prototype,"_previewFileId");j([P()],B.prototype,"_previewDims");j([P()],B.prototype,"_focusPointPicking");j([P()],B.prototype,"_focusPointDraft");j([P()],B.prototype,"_focusPointFieldHovered");j([P()],B.prototype,"_focusPointFieldFocused");j([P()],B.prototype,"_fileInfoOpen");j([P()],B.prototype,"_splitPct");j([P()],B.prototype,"_showSettings");j([P()],B.prototype,"_setResize");j([P()],B.prototype,"_setMaxW");j([P()],B.prototype,"_setMaxH");j([P()],B.prototype,"_setTranscode");j([P()],B.prototype,"_setResolution");j([P()],B.prototype,"_setResolutionOpen");j([P()],B.prototype,"_setProtocol");j([P()],B.prototype,"_setResumable");j([P()],B.prototype,"_fullscreenPreviewUrl");j([P()],B.prototype,"_fullscreenVideoFile");j([P()],B.prototype,"_fsZoom");j([P()],B.prototype,"_bodyDragOver");j([P()],B.prototype,"_isMinimized");j([P()],B.prototype,"_isPillExpanded");j([P()],B.prototype,"_metadataSchema");j([P()],B.prototype,"_metadataTranslations");j([P()],B.prototype,"_metadataDependencies");j([P()],B.prototype,"_regionalFilters");j([P()],B.prototype,"_bulkMetadataOpen");j([P()],B.prototype,"_bulkMetadataInitialFieldKey");j([P()],B.prototype,"_bulkMetadataHadIssuesOnOpen");j([P()],B.prototype,"_isReviewing");j([P()],B.prototype,"_reviewFiles");j([P()],B.prototype,"_hasStoredReview");let bb=B;var xb=Object.defineProperty,gs=(s,e,t,i)=>{for(var o=void 0,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=n(e,t,o)||o);return o&&xb(e,t,o),o};const yb="img.preview-image",Gn=class Gn extends Y{constructor(){super(...arguments),this.picking=!1,this.showMarker=!0,this.value=null,this._position=null,this._dragging=!1,this._resizeObserver=null,this._observedImg=null,this._dragPointerId=null,this._updatePosition=()=>{this._setPosition(this._measurePosition())},this._onPointerDown=e=>{e.button!==0||this._dragging||(e.preventDefault(),this._dragging=!0,this._dragPointerId=e.pointerId,e.currentTarget.setPointerCapture(e.pointerId),this._pickAt(e.clientX,e.clientY))},this._onPointerMove=e=>{!this._dragging||e.pointerId!==this._dragPointerId||this._pickAt(e.clientX,e.clientY)},this._onPointerUp=e=>{e.pointerId===this._dragPointerId&&this._endDrag()}}get _img(){var e;return((e=this.parentElement)==null?void 0:e.querySelector(yb))??null}_paintedRect(){const e=this._img;if(!e||!e.naturalWidth||!e.naturalHeight)return null;const t=e.getBoundingClientRect(),i=this.getBoundingClientRect();if(!t.width||!t.height)return null;const o=e.naturalWidth/e.naturalHeight,r=t.width/t.height,n=o>r?t.width:t.height*o,a=o>r?t.width/o:t.height;return{left:t.left-i.left+(t.width-n)/2,top:t.top-i.top+(t.height-a)/2,width:n,height:a}}_measurePosition(){var o,r;const e=Go((o=this.value)==null?void 0:o.horizontal),t=Go((r=this.value)==null?void 0:r.vertical);if(e===null||t===null)return null;const i=this._paintedRect();return i?{left:i.left+e/100*i.width,top:i.top+t/100*i.height}:null}_setPosition(e){const t=this._position;t!==e&&(t&&e&&t.left===e.left&&t.top===e.top||(this._position=e))}_pickAt(e,t){const i=this._paintedRect();if(!i)return;const o=this.getBoundingClientRect(),r=e-o.left,n=t-o.top,a=d=>Math.max(Br,Math.min(jr,d)),l=a(Math.round((r-i.left)/i.width*100)),c=a(Math.round((n-i.top)/i.height*100));this.dispatchEvent(new CustomEvent("focus-point-pick",{detail:{horizontal:l,vertical:c},bubbles:!0,composed:!0}))}_endDrag(){this._dragging=!1,this._dragPointerId=null}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._updatePosition),this._syncObservers()}firstUpdated(){this._syncObservers(),this._updatePosition()}updated(e){super.updated(e),(e.has("value")||this.showMarker&&e.get("showMarker")===!1)&&(this._syncObservers(),this._updatePosition())}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null,(t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=null,window.removeEventListener("resize",this._updatePosition),this._endDrag()}_syncObservers(){var t;typeof ResizeObserver<"u"&&!this._resizeObserver&&this.parentElement&&(this._resizeObserver=new ResizeObserver(this._updatePosition),this._resizeObserver.observe(this.parentElement));const e=this._img;e!==this._observedImg&&((t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=e,e==null||e.addEventListener("load",this._updatePosition))}render(){const e=this._position;return u`
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
            <div class="guide guide-v" ${oe({left:`${e.left}px`})}></div>
            <div class="guide guide-h" ${oe({top:`${e.top}px`})}></div>
            <div
              class="crosshair"
              ${oe({left:`${e.left}px`,top:`${e.top}px`})}
              role="img"
              aria-label="Focus point"
            >
              ${kc(2.5)}
            </div>
          `:v}
    `}};Gn.styles=M`
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
  `;let $t=Gn;gs([g({type:Boolean})],$t.prototype,"picking");gs([g({type:Boolean})],$t.prototype,"showMarker");gs([g({attribute:!1})],$t.prototype,"value");gs([P()],$t.prototype,"_position");gs([P()],$t.prototype,"_dragging");const Qe=(s,e)=>{typeof customElements<"u"&&!customElements.get(s)&&customElements.define(s,e)};Qe("sfx-uploader",bb);Qe("sfx-drop-zone",ob);Qe("sfx-import-divider",$r);Qe("sfx-source-pills",es);Qe("sfx-file-list",ie);Qe("sfx-file-item",re);Qe("sfx-actions-bar",xe);Qe("sfx-url-dialog",Kt);Qe("sfx-camera-dialog",kt);Qe("sfx-screen-cast-dialog",ct);Qe("sfx-focus-point-overlay",$t);const _b=[{pattern:"/",load:()=>Z(()=>import("./landing-4S8US0Fr.js"),[]).then(s=>s.default)},{pattern:"/docs/getting-started",load:()=>Z(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(s=>s.default)},{pattern:"/docs/configuration",load:()=>Z(()=>import("./configuration-tP-HBva9.js"),__vite__mapDeps([2,1])).then(s=>s.default)},{pattern:"/docs/api",load:()=>Z(()=>import("./api-C3Pu2Ua4.js"),__vite__mapDeps([3,1])).then(s=>s.default)},{pattern:"/docs/theming",load:()=>Z(()=>import("./theming-DHk87o6W.js"),__vite__mapDeps([4,1])).then(s=>s.default)},{pattern:"/docs/types",load:()=>Z(()=>import("./types-HFUEcb6v.js"),__vite__mapDeps([5,1])).then(s=>s.default)},{pattern:"/examples/basic",load:()=>Z(()=>import("./basic-CHbDE8an.js"),__vite__mapDeps([6,7])).then(s=>s.default)},{pattern:"/examples/auto-upload",load:()=>Z(()=>import("./auto-upload-B8-FqnOG.js"),__vite__mapDeps([8,7])).then(s=>s.default)},{pattern:"/examples/restrictions",load:()=>Z(()=>import("./restrictions-CedmqTvf.js"),__vite__mapDeps([9,7,10])).then(s=>s.default)},{pattern:"/examples/target-folder",load:()=>Z(()=>import("./target-folder-BRj-ceIX.js"),__vite__mapDeps([11,7])).then(s=>s.default)},{pattern:"/examples/concurrency",load:()=>Z(()=>import("./concurrency-DYJm_Ii8.js"),__vite__mapDeps([12,7,10])).then(s=>s.default)},{pattern:"/examples/events",load:()=>Z(()=>import("./events-uM3IOwgW.js"),__vite__mapDeps([13,7])).then(s=>s.default)},{pattern:"/examples/modal",load:()=>Z(()=>import("./modal-lLk1qbKx.js"),__vite__mapDeps([14,7])).then(s=>s.default)},{pattern:"/examples/inline",load:()=>Z(()=>import("./inline-CaVubqpQ.js"),__vite__mapDeps([15,7])).then(s=>s.default)},{pattern:"/examples/sources-layout",load:()=>Z(()=>import("./sources-layout-DsM3jxEW.js"),__vite__mapDeps([16,7])).then(s=>s.default)},{pattern:"/examples/core-sources",load:()=>Z(()=>import("./core-sources-CNFsnHGg.js"),__vite__mapDeps([17,7])).then(s=>s.default)},{pattern:"/examples/custom-source",load:()=>Z(()=>import("./custom-source-DAlojgtc.js"),__vite__mapDeps([18,7])).then(s=>s.default)},{pattern:"/examples/header-button",load:()=>Z(()=>import("./header-button-DvnbaCUZ.js"),__vite__mapDeps([19,7])).then(s=>s.default)},{pattern:"/examples/minimize-to-background",load:()=>Z(()=>import("./minimize-to-background-DYYakiO9.js"),__vite__mapDeps([20,7])).then(s=>s.default)},{pattern:"/examples/resumable-upload",load:()=>Z(()=>import("./resumable-upload-CPtWbOEJ.js"),__vite__mapDeps([21,7,10])).then(s=>s.default)},{pattern:"/examples/react-wrapper",load:()=>Z(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([22,1])).then(s=>s.default)},{pattern:"/examples/metadata",load:()=>Z(()=>import("./metadata-BfOiGYMg.js"),__vite__mapDeps([23,7])).then(s=>s.default)},{pattern:"/examples/full-screen",load:()=>Z(()=>import("./full-screen-DK-VU6Lz.js"),[]).then(s=>s.default)},{pattern:"/examples/last-upload-review",load:()=>Z(()=>import("./last-upload-review-hfMTwJ1-.js"),[]).then(s=>s.default)},{pattern:"/examples/similar-check",load:()=>Z(()=>import("./similar-check-BB-v22bz.js"),__vite__mapDeps([24,7,10])).then(s=>s.default)},{pattern:"/examples/upload-settings",load:()=>Z(()=>import("./upload-settings-BJIIp7Ld.js"),__vite__mapDeps([25,7,10])).then(s=>s.default)}];let oi=null,Ml=0;function wb(s){const e=document.getElementById("content"),t=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),o=document.getElementById("sidebar-examples"),r=document.querySelectorAll(".topbar-nav-link");async function n(){var $,E;const a=location.hash.slice(1)||"/",l=!a.startsWith("/");if(l&&oi){($=document.getElementById(a))==null||$.scrollIntoView({behavior:"smooth"});return}const c=l?"/":a,d=++Ml;oi!=null&&oi.destroy&&oi.destroy();const p=_b.find(y=>y.pattern===c);if(!p){location.hash="#/";return}const h=c.startsWith("/docs/"),f=c.startsWith("/examples/"),b=h||f,m=c==="/";t.classList.toggle("hidden",!b),document.body.classList.toggle("has-sidebar",b),document.body.classList.toggle("is-home",m),i.classList.toggle("hidden",!h),o.classList.toggle("hidden",!f),t.querySelectorAll(".sidebar-link").forEach(y=>{y.classList.toggle("active",y.getAttribute("data-route")===c)});const C=h?"docs":f?"examples":"home";r.forEach(y=>{y.classList.toggle("active",y.getAttribute("data-section")===C)}),t.classList.remove("mobile-open"),l||window.scrollTo(0,0);const A=await p.load();d===Ml&&(oi=A,e.innerHTML=A.render(),A.init&&A.init(s),l&&((E=document.getElementById(a))==null||E.scrollIntoView({behavior:"smooth"})))}window.addEventListener("hashchange",n),n()}const $d="sfx-uploader-demo-auth",Bl={container:"",securityTemplateId:""};function Sd(){try{const s=localStorage.getItem($d);if(s)return{...Bl,...JSON.parse(s)}}catch{}return{...Bl}}function kb(s){localStorage.setItem($d,JSON.stringify(s))}function Yb(s={}){const{container:e,securityTemplateId:t}=Sd();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","box","onedrive"]},...s}}function $b(){const s=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),i=document.getElementById("auth-sec-template"),o=document.getElementById("auth-save"),r=Sd();t.value=r.container,i.value=r.securityTemplateId,s.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),o.addEventListener("click",()=>{kb({container:t.value.trim(),securityTemplateId:i.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!s.contains(n.target)&&e.classList.add("hidden")})}$b();const Sb=document.getElementById("uploader");wb(Sb);var Nl;(Nl=document.getElementById("sidebar-toggle"))==null||Nl.addEventListener("click",()=>{var s;(s=document.getElementById("sidebar"))==null||s.classList.toggle("mobile-open")});export{gi as $,v as A,Rp as B,Fb as C,xs as D,Oa as E,st as F,Ip as G,Op as H,Ye as I,Ep as J,qi as K,Oc as L,fc as M,Bp as N,bh as O,jt as P,Ia as Q,As as R,_t as S,en as T,Ob as U,Yo as V,Kr as W,eh as X,Bb as Y,Lb as Z,zp as _,M as a,zt as a$,ja as a0,uf as a1,Db as a2,_c as a3,Mb as a4,Zp as a5,zb as a6,Go as a7,kc as a8,dp as a9,zr as aA,Mr as aB,Rb as aC,pc as aD,Ub as aE,ih as aF,nh as aG,qp as aH,af as aI,gc as aJ,qr as aK,Ma as aL,Ns as aM,Fa as aN,ro as aO,rs as aP,$c as aQ,Wt as aR,jb as aS,Qp as aT,Mp as aU,xt as aV,mc as aW,Jo as aX,Qr as aY,Ic as aZ,Ki as a_,Tb as aa,kh as ab,vh as ac,bt as ad,Jp as ae,Xp as af,Ua as ag,Vr as ah,uh as ai,ah as aj,Kp as ak,lf as al,so as am,La as an,Ve as ao,to as ap,Vi as aq,Yr as ar,Lr as as,Rt as at,Gr as au,io as av,Wo as aw,ue as ax,or as ay,Fp as az,Yb as b,Dt as b0,Up as b1,xc as b2,wc as b3,$p as b4,k as b5,Da as b6,hc as b7,Ie as b8,Hr as b9,Zr as ba,Fc as bb,bc,Gp as bd,Yp as be,oe as c,Ft as d,u as e,Ne as f,ev as g,Nb as h,Y as i,tn as j,Vb as k,Hb as l,gf as m,g as n,mf as o,Ib as p,rh as q,P as r,qb as s,De as t,oh as u,Tp as v,jr as w,Br as x,Bt as y,vc as z};
