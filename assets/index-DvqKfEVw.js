const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-Be4_OpLg.js","assets/api-DLlEwElO.js","assets/theming-DYcOCIUI.js","assets/types-BP9Z4Qnu.js","assets/basic-2N-b445J.js","assets/code-block-Bk3NnwHF.js","assets/auto-upload-m-zBoEf8.js","assets/restrictions-BoZy7ZbL.js","assets/custom-select-CZ_fVHDR.js","assets/target-folder-BcyV-M2r.js","assets/concurrency-ZroY7yYT.js","assets/events-Bohy30YO.js","assets/modal-DhKCBmb2.js","assets/inline-DZd73O8y.js","assets/sources-layout-D2W4f7dR.js","assets/header-button-D6t8JbD1.js","assets/minimize-to-background-JnDJzSNx.js","assets/resumable-upload-B7DzmkN1.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-Bwmt6bxP.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const Go="modulepreload",Ko=function(o){return"/uploader/"+o},_r={},M=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let s=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=s(t.map(c=>{if(c=Ko(c),c in _r)return;_r[c]=!0;const h=c.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${v}`))return;const C=document.createElement("link");if(C.rel=h?"stylesheet":Go,h||(C.as="script"),C.crossOrigin="",C.href=c,l&&C.setAttribute("nonce",l),document.head.appendChild(C),h)return new Promise((w,A)=>{C.addEventListener("load",w),C.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=globalThis,Zt=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),wr=new WeakMap;let go=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Zt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=wr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&wr.set(t,e))}return e}toString(){return this.cssText}};const Xo=o=>new go(typeof o=="string"?o:o+"",void 0,Jt),Z=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new go(t,o,Jt)},Zo=(o,e)=>{if(Zt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=gt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)}},kr=Zt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Xo(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jo,defineProperty:Qo,getOwnPropertyDescriptor:ei,getOwnPropertyNames:ti,getOwnPropertySymbols:ri,getPrototypeOf:oi}=Object,le=globalThis,$r=le.trustedTypes,ii=$r?$r.emptyScript:"",Ut=le.reactiveElementPolyfillSupport,Ye=(o,e)=>o,bt={toAttribute(o,e){switch(e){case Boolean:o=o?ii:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Qt=(o,e)=>!Jo(o,e),Sr={attribute:!0,type:String,converter:bt,reflect:!1,useDefault:!1,hasChanged:Qt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);let Pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Sr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Qo(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:n}=ei(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const a=i==null?void 0:i.call(this);n==null||n.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sr}static _$Ei(){if(this.hasOwnProperty(Ye("elementProperties")))return;const e=oi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ye("properties"))){const t=this.properties,r=[...ti(t),...ri(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(kr(i))}else e!==void 0&&t.push(kr(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var n;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:bt).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){var n,s;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:bt;this._$Em=i;const c=l.fromAttribute(t,a.type);this[i]=c??((s=this._$Ej)==null?void 0:s.get(i))??c,this._$Em=null}}requestUpdate(e,t,r,i=!1,n){var s;if(e!==void 0){const a=this.constructor;if(i===!1&&(n=this[e]),r??(r=a.getPropertyOptions(e)),!((r.hasChanged??Qt)(n,t)||r.useDefault&&r.reflect&&n===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},s){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:a}=s,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,s,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[Ye("elementProperties")]=new Map,Pe[Ye("finalized")]=new Map,Ut==null||Ut({ReactiveElement:Pe}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=globalThis,Cr=o=>o,yt=We.trustedTypes,Er=yt?yt.createPolicy("lit-html",{createHTML:o=>o}):void 0,vo="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,mo="?"+se,ni=`<${mo}>`,be=document,Ge=()=>be.createComment(""),Ke=o=>o===null||typeof o!="object"&&typeof o!="function",er=Array.isArray,si=o=>er(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Pt=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ur=/-->/g,Pr=/>/g,he=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ar=/'/g,Or=/"/g,xo=/^(?:script|style|textarea|title)$/i,bo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),f=bo(1),ge=bo(2),ye=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Rr=new WeakMap,ve=be.createTreeWalker(be,129);function yo(o,e){if(!er(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Er!==void 0?Er.createHTML(e):e}const ai=(o,e)=>{const t=o.length-1,r=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=Fe;for(let a=0;a<t;a++){const l=o[a];let c,h,v=-1,C=0;for(;C<l.length&&(s.lastIndex=C,h=s.exec(l),h!==null);)C=s.lastIndex,s===Fe?h[1]==="!--"?s=Ur:h[1]!==void 0?s=Pr:h[2]!==void 0?(xo.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=he):h[3]!==void 0&&(s=he):s===he?h[0]===">"?(s=i??Fe,v=-1):h[1]===void 0?v=-2:(v=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?he:h[3]==='"'?Or:Ar):s===Or||s===Ar?s=he:s===Ur||s===Pr?s=Fe:(s=he,i=void 0);const w=s===he&&o[a+1].startsWith("/>")?" ":"";n+=s===Fe?l+ni:v>=0?(r.push(c),l.slice(0,v)+vo+l.slice(v)+se+w):l+se+(v===-2?a:w)}return[yo(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class Xe{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0;const a=e.length-1,l=this.parts,[c,h]=ai(e,t);if(this.el=Xe.createElement(c,r),ve.currentNode=this.el.content,t===2||t===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(i=ve.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const v of i.getAttributeNames())if(v.endsWith(vo)){const C=h[s++],w=i.getAttribute(v).split(se),A=/([.?@])?(.*)/.exec(C);l.push({type:1,index:n,name:A[2],strings:w,ctor:A[1]==="."?ci:A[1]==="?"?di:A[1]==="@"?pi:St}),i.removeAttribute(v)}else v.startsWith(se)&&(l.push({type:6,index:n}),i.removeAttribute(v));if(xo.test(i.tagName)){const v=i.textContent.split(se),C=v.length-1;if(C>0){i.textContent=yt?yt.emptyScript:"";for(let w=0;w<C;w++)i.append(v[w],Ge()),ve.nextNode(),l.push({type:2,index:++n});i.append(v[C],Ge())}}}else if(i.nodeType===8)if(i.data===mo)l.push({type:2,index:n});else{let v=-1;for(;(v=i.data.indexOf(se,v+1))!==-1;)l.push({type:7,index:n}),v+=se.length-1}n++}}static createElement(e,t){const r=be.createElement("template");return r.innerHTML=e,r}}function De(o,e,t=o,r){var s,a;if(e===ye)return e;let i=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const n=Ke(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=i:t._$Cl=i),i!==void 0&&(e=De(o,i._$AS(o,e.values),i,r)),e}class li{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=((e==null?void 0:e.creationScope)??be).importNode(t,!0);ve.currentNode=i;let n=ve.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new st(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new ui(n,this,e)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(n=ve.nextNode(),s++)}return ve.currentNode=be,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class st{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=De(this,e,t),Ke(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):si(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&Ke(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Xe.createElement(yo(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(t);else{const s=new li(i,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Rr.get(e.strings);return t===void 0&&Rr.set(e.strings,t=new Xe(e)),t}k(e){er(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new st(this.O(Ge()),this.O(Ge()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const i=Cr(e).nextSibling;Cr(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class St{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}_$AI(e,t=this,r,i){const n=this.strings;let s=!1;if(n===void 0)e=De(this,e,t,0),s=!Ke(e)||e!==this._$AH&&e!==ye,s&&(this._$AH=e);else{const a=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=De(this,a[r+l],t,l),c===ye&&(c=this._$AH[l]),s||(s=!Ke(c)||c!==this._$AH[l]),c===$?e=$:e!==$&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ci extends St{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class di extends St{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class pi extends St{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=De(this,e,t,0)??$)===ye)return;const r=this._$AH,i=e===$&&r!==$||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==$&&(r===$||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class ui{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}}const At=We.litHtmlPolyfillSupport;At==null||At(Xe,st),(We.litHtmlVersions??(We.litHtmlVersions=[])).push("3.3.2");const ce=(o,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let i=r._$litPart$;if(i===void 0){const n=(t==null?void 0:t.renderBefore)??null;r._$litPart$=i=new st(e.insertBefore(Ge(),n),n,void 0,t??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xe=globalThis;let W=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ye}};var fo;W._$litElement$=!0,W.finalized=!0,(fo=xe.litElementHydrateSupport)==null||fo.call(xe,{LitElement:W});const Ot=xe.litElementPolyfillSupport;Ot==null||Ot({LitElement:W});(xe.litElementVersions??(xe.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:Qt},hi=(o=fi,e,t)=>{const{kind:r,metadata:i}=t;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(t.name,o),r==="accessor"){const{name:s}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,o,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,o,a),a}}}if(r==="setter"){const{name:s}=t;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,o,!0,a)}}throw Error("Unsupported decorator location: "+r)};function B(o){return(e,t)=>typeof t=="object"?hi(o,e,t):((r,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(i,n):void 0})(o,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(o){return B({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=(o,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(o,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _o(o,e){return(t,r,i)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(o))??null};return gi(t,r,{get(){return n(this)}})}}class vi{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(r=>r(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const r=this._pendingState;this._pendingState=null,this.setState(r)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function H(o,e,t){const r=o.getState().files,i=r.get(e);if(!i)return;const n=new Map(r);n.set(e,{...i,...t}),o.setState({files:n})}function Se(o,e){const t=new Map(o.getState().files);t.set(e.id,e),o.setState({files:t})}function Tr(o,e){const t=o.getState().files;if(!t.has(e))return;const r=new Map(t);r.delete(e),o.setState({files:r})}function mi(){return new vi({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class xi{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function bi(o,e){const t=new XMLHttpRequest;let r=!1;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;t.open("POST",n);for(const[a,l]of Object.entries(e.authHeaders))t.setRequestHeader(a,l);t.upload.addEventListener("progress",a=>{a.lengthComputable&&!r&&e.onProgress(a.loaded,a.total)}),t.addEventListener("load",()=>{if(r)return;let a;try{a=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&a.status==="success"?e.onComplete(a):e.onError(new Error(a.hint||a.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))});const s=new FormData;if(o.file){const a={name:o.name,type:o.type};s.append("info[files[]]",JSON.stringify(a)),Object.keys(o.meta).length>0&&s.append("meta[files[]]",JSON.stringify(o.meta)),o.tags.length>0&&s.append("tags[files[]]",JSON.stringify(o.tags)),s.append("files[]",o.file,o.name)}return t.timeout=6e4,t.send(s),{abort(){r=!0,t.abort()}}}function yi(o,e){const t=new XMLHttpRequest;let r=!1;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;t.open("POST",n);for(const[a,l]of Object.entries(e.authHeaders))t.setRequestHeader(a,l);if(t.setRequestHeader("Content-Type","application/json"),t.addEventListener("load",()=>{if(r)return;let a;try{a=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&a.status==="success"?e.onComplete(a):e.onError(new Error(a.hint||a.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))}),!o.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const s={files_urls:[{url:o.remoteUrl,name:o.name}],dir:e.folder};return t.timeout=6e4,t.send(JSON.stringify(s)),{abort(){r=!0,t.abort()}}}function Ct(o){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":o}}function je(o){return o.replace(/\/+$/,"")}const _i={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function at(o){return _i[o]??o}function ra(o,e){const t=je(o),r=btoa(JSON.stringify({origin:window.location.origin})),i=at(e);return`${t}/${i}/connect?state=${encodeURIComponent(r)}`}async function oa(o,e,t,r=""){const i=je(o),n=r?`/${r}`:"",s=at(e),a=await fetch(`${i}/${s}/list${n}`,{method:"GET",headers:Ct(t),credentials:"same-origin"});if(a.status===401)throw new tr;if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Companion list failed (HTTP ${a.status})`)}return a.json()}async function ia(o,e,t){const r=je(o),i=await fetch(`${r}/${t}`,{method:"GET",headers:Ct(e),credentials:"same-origin"});if(i.status===401)throw new tr;if(!i.ok){const n=await i.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${i.status})`)}return i.json()}async function na(o,e,t,r){const i=je(o),n=at(e),s=r?`q=${encodeURIComponent(t)}&${r}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${i}/search/${n}/list?${s}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function wi(o,e,t,r,i,n=!1){const s=je(o),a=at(e),l=n?`${s}/search/${a}/get/${r}`:`${s}/${a}/get/${r}`,c=n?{Accept:"application/json","Content-Type":"application/json"}:Ct(t),h=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...i,httpMethod:i.httpMethod??"POST",useFormData:i.useFormData??!0,fieldname:i.fieldname??"files[]"})});if(h.status===401)throw new tr;if(!h.ok){const v=await h.json().catch(()=>null);throw new Error((v==null?void 0:v.message)||`Companion upload failed (HTTP ${h.status})`)}return h.json()}async function sa(o,e,t){const r=je(o),i=at(e),n=await fetch(`${r}/${i}/logout`,{method:"GET",headers:Ct(t),credentials:"same-origin"});return n.ok?n.json():{ok:!1,revoked:!1}}function ki(o){var i;const t=((i=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(o))==null?void 0:i[1])??o;return`${location.protocol==="https:"?"wss":"ws"}://${t}`}class tr extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function $i(o,e){const t=o.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let r=!1,i=null;const s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,a={};o.meta&&Object.keys(o.meta).length>0&&Object.assign(a,o.meta),o.tags&&o.tags.length>0&&(a.tags=o.tags);const l=!t.token;return wi(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:Object.keys(a).length>0?a:void 0},l).then(c=>{if(r)return;const v=`${ki(t.companionUrl)}/api/${c.token}`;try{i=new WebSocket(v)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}i.onmessage=C=>{var w,A,S;if(!r)try{const E=JSON.parse(C.data);switch(E.action){case"progress":{const D=E.payload,m=D.bytesUploaded??0,x=D.bytesTotal??(t.size||1);e.onProgress(m,x);break}case"success":{const D=E.payload;if(i==null||i.close(),(w=D.response)!=null&&w.responseText)try{const m=JSON.parse(D.response.responseText);if(m.status==="success"){e.onComplete(m);return}e.onError(new Error(m.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{i==null||i.close();const D=E.payload;let m=((A=D.error)==null?void 0:A.message)||"Upload failed";if((S=D.response)!=null&&S.responseText)try{const x=JSON.parse(D.response.responseText);m=x.hint||x.msg||x.message||m}catch{}e.onError(new Error(m));break}}}catch{}},i.onerror=()=>{r||e.onError(new Error("Upload progress connection failed"))},i.onclose=()=>{i=null}}).catch(c=>{r||e.onError(c instanceof Error?c:new Error(String(c)))}),{abort(){if(r=!0,i){try{i.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}i.close(),i=null}}}}function Lt(o){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(o)}function Si(o,e,t){return Object.defineProperty(o,"prototype",{writable:!1}),o}function Ci(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Ei(o,e,t){return e=Je(e),Ui(o,rr()?Reflect.construct(e,t||[],Je(o).constructor):e.apply(o,t))}function Ui(o,e){if(e&&(Lt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pi(o)}function Pi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ai(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&Ze(o,e)}function jt(o){var e=typeof Map=="function"?new Map:void 0;return jt=function(r){if(r===null||!Ri(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return Oi(r,arguments,Je(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Ze(i,r)},jt(o)}function Oi(o,e,t){if(rr())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(o.bind.apply(o,r));return t&&Ze(i,t.prototype),i}function rr(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rr=function(){return!!o})()}function Ri(o){try{return Function.toString.call(o).indexOf("[native code]")!==-1}catch{return typeof o=="function"}}function Ze(o,e){return Ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ze(o,e)}function Je(o){return Je=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Je(o)}var Me=(function(o){function e(t){var r,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Ci(this,e),r=Ei(this,e,[t]),r.originalRequest=n,r.originalResponse=s,r.causingError=i,i!=null&&(t+=", caused by ".concat(i.toString())),n!=null){var a=n.getHeader("X-Request-ID")||"n/a",l=n.getMethod(),c=n.getURL(),h=s?s.getStatus():"n/a",v=s?s.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(c,", response code: ").concat(h,", response text: ").concat(v,", request id: ").concat(a,")")}return r.message=t,r}return Ai(e,o),Si(e)})(jt(Error));function Qe(o){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(o)}function Ti(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Di(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Li(r.key),r)}}function zi(o,e,t){return e&&Di(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Li(o){var e=ji(o,"string");return Qe(e)=="symbol"?e:e+""}function ji(o,e){if(Qe(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(Qe(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Ii=(function(){function o(){Ti(this,o)}return zi(o,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,r){return Promise.resolve(null)}}])})();const wo="3.7.8",Fi=wo,Ie=typeof Buffer=="function",Dr=typeof TextDecoder=="function"?new TextDecoder:void 0,zr=typeof TextEncoder=="function"?new TextEncoder:void 0,Bi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",He=Array.prototype.slice.call(Bi),ft=(o=>{let e={};return o.forEach((t,r)=>e[t]=r),e})(He),Mi=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,V=String.fromCharCode.bind(String),Lr=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):o=>new Uint8Array(Array.prototype.slice.call(o,0)),ko=o=>o.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),$o=o=>o.replace(/[^A-Za-z0-9\+\/]/g,""),So=o=>{let e,t,r,i,n="";const s=o.length%3;for(let a=0;a<o.length;){if((t=o.charCodeAt(a++))>255||(r=o.charCodeAt(a++))>255||(i=o.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|r<<8|i,n+=He[e>>18&63]+He[e>>12&63]+He[e>>6&63]+He[e&63]}return s?n.slice(0,s-3)+"===".substring(s):n},or=typeof btoa=="function"?o=>btoa(o):Ie?o=>Buffer.from(o,"binary").toString("base64"):So,It=Ie?o=>Buffer.from(o).toString("base64"):o=>{let t=[];for(let r=0,i=o.length;r<i;r+=4096)t.push(V.apply(null,o.subarray(r,r+4096)));return or(t.join(""))},vt=(o,e=!1)=>e?ko(It(o)):It(o),Hi=o=>{if(o.length<2){var e=o.charCodeAt(0);return e<128?o:e<2048?V(192|e>>>6)+V(128|e&63):V(224|e>>>12&15)+V(128|e>>>6&63)+V(128|e&63)}else{var e=65536+(o.charCodeAt(0)-55296)*1024+(o.charCodeAt(1)-56320);return V(240|e>>>18&7)+V(128|e>>>12&63)+V(128|e>>>6&63)+V(128|e&63)}},qi=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Co=o=>o.replace(qi,Hi),jr=Ie?o=>Buffer.from(o,"utf8").toString("base64"):zr?o=>It(zr.encode(o)):o=>or(Co(o)),Te=(o,e=!1)=>e?ko(jr(o)):jr(o),Ir=o=>Te(o,!0),Ni=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Vi=o=>{switch(o.length){case 4:var e=(7&o.charCodeAt(0))<<18|(63&o.charCodeAt(1))<<12|(63&o.charCodeAt(2))<<6|63&o.charCodeAt(3),t=e-65536;return V((t>>>10)+55296)+V((t&1023)+56320);case 3:return V((15&o.charCodeAt(0))<<12|(63&o.charCodeAt(1))<<6|63&o.charCodeAt(2));default:return V((31&o.charCodeAt(0))<<6|63&o.charCodeAt(1))}},Eo=o=>o.replace(Ni,Vi),Uo=o=>{if(o=o.replace(/\s+/g,""),!Mi.test(o))throw new TypeError("malformed base64.");o+="==".slice(2-(o.length&3));let e,t,r,i=[];for(let n=0;n<o.length;)e=ft[o.charAt(n++)]<<18|ft[o.charAt(n++)]<<12|(t=ft[o.charAt(n++)])<<6|(r=ft[o.charAt(n++)]),t===64?i.push(V(e>>16&255)):r===64?i.push(V(e>>16&255,e>>8&255)):i.push(V(e>>16&255,e>>8&255,e&255));return i.join("")},ir=typeof atob=="function"?o=>atob($o(o)):Ie?o=>Buffer.from(o,"base64").toString("binary"):Uo,Po=Ie?o=>Lr(Buffer.from(o,"base64")):o=>Lr(ir(o).split("").map(e=>e.charCodeAt(0))),Ao=o=>Po(Oo(o)),Yi=Ie?o=>Buffer.from(o,"base64").toString("utf8"):Dr?o=>Dr.decode(Po(o)):o=>Eo(ir(o)),Oo=o=>$o(o.replace(/[-_]/g,e=>e=="-"?"+":"/")),Ft=o=>Yi(Oo(o)),Wi=o=>{if(typeof o!="string")return!1;const e=o.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Ro=o=>({value:o,enumerable:!1,writable:!0,configurable:!0}),To=function(){const o=(e,t)=>Object.defineProperty(String.prototype,e,Ro(t));o("fromBase64",function(){return Ft(this)}),o("toBase64",function(e){return Te(this,e)}),o("toBase64URI",function(){return Te(this,!0)}),o("toBase64URL",function(){return Te(this,!0)}),o("toUint8Array",function(){return Ao(this)})},Do=function(){const o=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Ro(t));o("toBase64",function(e){return vt(this,e)}),o("toBase64URI",function(){return vt(this,!0)}),o("toBase64URL",function(){return vt(this,!0)})},Gi=()=>{To(),Do()},Ki={version:wo,VERSION:Fi,atob:ir,atobPolyfill:Uo,btoa:or,btoaPolyfill:So,fromBase64:Ft,toBase64:Te,encode:Te,encodeURI:Ir,encodeURL:Ir,utob:Co,btou:Eo,decode:Ft,isValid:Wi,fromUint8Array:vt,toUint8Array:Ao,extendString:To,extendUint8Array:Do,extendBuiltins:Gi};var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xi(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Rt,Br;function Zi(){return Br||(Br=1,Rt=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),Rt}var ht={},Mr;function Ji(){if(Mr)return ht;Mr=1;var o=Object.prototype.hasOwnProperty,e;function t(s){try{return decodeURIComponent(s.replace(/\+/g," "))}catch{return null}}function r(s){try{return encodeURIComponent(s)}catch{return null}}function i(s){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},c;c=a.exec(s);){var h=t(c[1]),v=t(c[2]);h===null||v===null||h in l||(l[h]=v)}return l}function n(s,a){a=a||"";var l=[],c,h;typeof a!="string"&&(a="?");for(h in s)if(o.call(s,h)){if(c=s[h],!c&&(c===null||c===e||isNaN(c))&&(c=""),h=r(h),c=r(c),h===null||c===null)continue;l.push(h+"="+c)}return l.length?a+l.join("&"):""}return ht.stringify=n,ht.parse=i,ht}var Tt,Hr;function Qi(){if(Hr)return Tt;Hr=1;var o=Zi(),e=Ji(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,r=/[\n\r\t]/g,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=/:\d+$/,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(m){return(m||"").toString().replace(t,"")}var c=[["#","hash"],["?","query"],function(x,g){return C(g.protocol)?x.replace(/\\/g,"/"):x},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};function v(m){var x;typeof window<"u"?x=window:typeof Fr<"u"?x=Fr:typeof self<"u"?x=self:x={};var g=x.location||{};m=m||g;var b={},O=typeof m,U;if(m.protocol==="blob:")b=new S(unescape(m.pathname),{});else if(O==="string"){b=new S(m,{});for(U in h)delete b[U]}else if(O==="object"){for(U in m)U in h||(b[U]=m[U]);b.slashes===void 0&&(b.slashes=i.test(m.href))}return b}function C(m){return m==="file:"||m==="ftp:"||m==="http:"||m==="https:"||m==="ws:"||m==="wss:"}function w(m,x){m=l(m),m=m.replace(r,""),x=x||{};var g=s.exec(m),b=g[1]?g[1].toLowerCase():"",O=!!g[2],U=!!g[3],L=0,T;return O?U?(T=g[2]+g[3]+g[4],L=g[2].length+g[3].length):(T=g[2]+g[4],L=g[2].length):U?(T=g[3]+g[4],L=g[3].length):T=g[4],b==="file:"?L>=2&&(T=T.slice(2)):C(b)?T=g[4]:b?O&&(T=T.slice(2)):L>=2&&C(x.protocol)&&(T=g[4]),{protocol:b,slashes:O||C(b),slashesCount:L,rest:T}}function A(m,x){if(m==="")return x;for(var g=(x||"/").split("/").slice(0,-1).concat(m.split("/")),b=g.length,O=g[b-1],U=!1,L=0;b--;)g[b]==="."?g.splice(b,1):g[b]===".."?(g.splice(b,1),L++):L&&(b===0&&(U=!0),g.splice(b,1),L--);return U&&g.unshift(""),(O==="."||O==="..")&&g.push(""),g.join("/")}function S(m,x,g){if(m=l(m),m=m.replace(r,""),!(this instanceof S))return new S(m,x,g);var b,O,U,L,T,X,ie=c.slice(),$e=typeof x,P=this,te=0;for($e!=="object"&&$e!=="string"&&(g=x,x=null),g&&typeof g!="function"&&(g=e.parse),x=v(x),O=w(m||"",x),b=!O.protocol&&!O.slashes,P.slashes=O.slashes||b&&x.slashes,P.protocol=O.protocol||x.protocol||"",m=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||a.test(m))||!O.slashes&&(O.protocol||O.slashesCount<2||!C(P.protocol)))&&(ie[3]=[/(.*)/,"pathname"]);te<ie.length;te++){if(L=ie[te],typeof L=="function"){m=L(m,P);continue}U=L[0],X=L[1],U!==U?P[X]=m:typeof U=="string"?(T=U==="@"?m.lastIndexOf(U):m.indexOf(U),~T&&(typeof L[2]=="number"?(P[X]=m.slice(0,T),m=m.slice(T+L[2])):(P[X]=m.slice(T),m=m.slice(0,T)))):(T=U.exec(m))&&(P[X]=T[1],m=m.slice(0,T.index)),P[X]=P[X]||b&&L[3]&&x[X]||"",L[4]&&(P[X]=P[X].toLowerCase())}g&&(P.query=g(P.query)),b&&x.slashes&&P.pathname.charAt(0)!=="/"&&(P.pathname!==""||x.pathname!=="")&&(P.pathname=A(P.pathname,x.pathname)),P.pathname.charAt(0)!=="/"&&C(P.protocol)&&(P.pathname="/"+P.pathname),o(P.port,P.protocol)||(P.host=P.hostname,P.port=""),P.username=P.password="",P.auth&&(T=P.auth.indexOf(":"),~T?(P.username=P.auth.slice(0,T),P.username=encodeURIComponent(decodeURIComponent(P.username)),P.password=P.auth.slice(T+1),P.password=encodeURIComponent(decodeURIComponent(P.password))):P.username=encodeURIComponent(decodeURIComponent(P.auth)),P.auth=P.password?P.username+":"+P.password:P.username),P.origin=P.protocol!=="file:"&&C(P.protocol)&&P.host?P.protocol+"//"+P.host:"null",P.href=P.toString()}function E(m,x,g){var b=this;switch(m){case"query":typeof x=="string"&&x.length&&(x=(g||e.parse)(x)),b[m]=x;break;case"port":b[m]=x,o(x,b.protocol)?x&&(b.host=b.hostname+":"+x):(b.host=b.hostname,b[m]="");break;case"hostname":b[m]=x,b.port&&(x+=":"+b.port),b.host=x;break;case"host":b[m]=x,n.test(x)?(x=x.split(":"),b.port=x.pop(),b.hostname=x.join(":")):(b.hostname=x,b.port="");break;case"protocol":b.protocol=x.toLowerCase(),b.slashes=!g;break;case"pathname":case"hash":if(x){var O=m==="pathname"?"/":"#";b[m]=x.charAt(0)!==O?O+x:x}else b[m]=x;break;case"username":case"password":b[m]=encodeURIComponent(x);break;case"auth":var U=x.indexOf(":");~U?(b.username=x.slice(0,U),b.username=encodeURIComponent(decodeURIComponent(b.username)),b.password=x.slice(U+1),b.password=encodeURIComponent(decodeURIComponent(b.password))):b.username=encodeURIComponent(decodeURIComponent(x))}for(var L=0;L<c.length;L++){var T=c[L];T[4]&&(b[T[1]]=b[T[1]].toLowerCase())}return b.auth=b.password?b.username+":"+b.password:b.username,b.origin=b.protocol!=="file:"&&C(b.protocol)&&b.host?b.protocol+"//"+b.host:"null",b.href=b.toString(),b}function D(m){(!m||typeof m!="function")&&(m=e.stringify);var x,g=this,b=g.host,O=g.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var U=O+(g.protocol&&g.slashes||C(g.protocol)?"//":"");return g.username?(U+=g.username,g.password&&(U+=":"+g.password),U+="@"):g.password?(U+=":"+g.password,U+="@"):g.protocol!=="file:"&&C(g.protocol)&&!b&&g.pathname!=="/"&&(U+="@"),(b[b.length-1]===":"||n.test(g.hostname)&&!g.port)&&(b+=":"),U+=b+g.pathname,x=typeof g.query=="object"?m(g.query):g.query,x&&(U+=x.charAt(0)!=="?"?"?"+x:x),g.hash&&(U+=g.hash),U}return S.prototype={set:E,toString:D},S.extractProtocol=w,S.location=v,S.trimLeft=l,S.qs=e,Tt=S,Tt}var en=Qi();const tn=Xi(en);function rn(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(o){var e=Math.random()*16|0,t=o==="x"?e:e&3|8;return t.toString(16)})}function Bt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Bt=function(){return e};var o,e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(u,d,p){u[d]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(u,d,p){return Object.defineProperty(u,d,{value:p,enumerable:!0,configurable:!0,writable:!0}),u[d]}try{c({},"")}catch{c=function(p,y,k){return p[y]=k}}function h(u,d,p,y){var k=d&&d.prototype instanceof D?d:D,_=Object.create(k.prototype),R=new te(y||[]);return i(_,"_invoke",{value:X(u,p,R)}),_}function v(u,d,p){try{return{type:"normal",arg:u.call(d,p)}}catch(y){return{type:"throw",arg:y}}}e.wrap=h;var C="suspendedStart",w="suspendedYield",A="executing",S="completed",E={};function D(){}function m(){}function x(){}var g={};c(g,s,function(){return this});var b=Object.getPrototypeOf,O=b&&b(b(fe([])));O&&O!==t&&r.call(O,s)&&(g=O);var U=x.prototype=D.prototype=Object.create(g);function L(u){["next","throw","return"].forEach(function(d){c(u,d,function(p){return this._invoke(d,p)})})}function T(u,d){function p(k,_,R,j){var I=v(u[k],u,_);if(I.type!=="throw"){var G=I.arg,N=G.value;return N&&_e(N)=="object"&&r.call(N,"__await")?d.resolve(N.__await).then(function(K){p("next",K,R,j)},function(K){p("throw",K,R,j)}):d.resolve(N).then(function(K){G.value=K,R(G)},function(K){return p("throw",K,R,j)})}j(I.arg)}var y;i(this,"_invoke",{value:function(_,R){function j(){return new d(function(I,G){p(_,R,I,G)})}return y=y?y.then(j,j):j()}})}function X(u,d,p){var y=C;return function(k,_){if(y===A)throw Error("Generator is already running");if(y===S){if(k==="throw")throw _;return{value:o,done:!0}}for(p.method=k,p.arg=_;;){var R=p.delegate;if(R){var j=ie(R,p);if(j){if(j===E)continue;return j}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(y===C)throw y=S,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);y=A;var I=v(u,d,p);if(I.type==="normal"){if(y=p.done?S:w,I.arg===E)continue;return{value:I.arg,done:p.done}}I.type==="throw"&&(y=S,p.method="throw",p.arg=I.arg)}}}function ie(u,d){var p=d.method,y=u.iterator[p];if(y===o)return d.delegate=null,p==="throw"&&u.iterator.return&&(d.method="return",d.arg=o,ie(u,d),d.method==="throw")||p!=="return"&&(d.method="throw",d.arg=new TypeError("The iterator does not provide a '"+p+"' method")),E;var k=v(y,u.iterator,d.arg);if(k.type==="throw")return d.method="throw",d.arg=k.arg,d.delegate=null,E;var _=k.arg;return _?_.done?(d[u.resultName]=_.value,d.next=u.nextLoc,d.method!=="return"&&(d.method="next",d.arg=o),d.delegate=null,E):_:(d.method="throw",d.arg=new TypeError("iterator result is not an object"),d.delegate=null,E)}function $e(u){var d={tryLoc:u[0]};1 in u&&(d.catchLoc=u[1]),2 in u&&(d.finallyLoc=u[2],d.afterLoc=u[3]),this.tryEntries.push(d)}function P(u){var d=u.completion||{};d.type="normal",delete d.arg,u.completion=d}function te(u){this.tryEntries=[{tryLoc:"root"}],u.forEach($e,this),this.reset(!0)}function fe(u){if(u||u===""){var d=u[s];if(d)return d.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var p=-1,y=function k(){for(;++p<u.length;)if(r.call(u,p))return k.value=u[p],k.done=!1,k;return k.value=o,k.done=!0,k};return y.next=y}}throw new TypeError(_e(u)+" is not iterable")}return m.prototype=x,i(U,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:m,configurable:!0}),m.displayName=c(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(u){var d=typeof u=="function"&&u.constructor;return!!d&&(d===m||(d.displayName||d.name)==="GeneratorFunction")},e.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,x):(u.__proto__=x,c(u,l,"GeneratorFunction")),u.prototype=Object.create(U),u},e.awrap=function(u){return{__await:u}},L(T.prototype),c(T.prototype,a,function(){return this}),e.AsyncIterator=T,e.async=function(u,d,p,y,k){k===void 0&&(k=Promise);var _=new T(h(u,d,p,y),k);return e.isGeneratorFunction(d)?_:_.next().then(function(R){return R.done?R.value:_.next()})},L(U),c(U,l,"Generator"),c(U,s,function(){return this}),c(U,"toString",function(){return"[object Generator]"}),e.keys=function(u){var d=Object(u),p=[];for(var y in d)p.push(y);return p.reverse(),function k(){for(;p.length;){var _=p.pop();if(_ in d)return k.value=_,k.done=!1,k}return k.done=!0,k}},e.values=fe,te.prototype={constructor:te,reset:function(d){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(P),!d)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=o)},stop:function(){this.done=!0;var d=this.tryEntries[0].completion;if(d.type==="throw")throw d.arg;return this.rval},dispatchException:function(d){if(this.done)throw d;var p=this;function y(G,N){return R.type="throw",R.arg=d,p.next=G,N&&(p.method="next",p.arg=o),!!N}for(var k=this.tryEntries.length-1;k>=0;--k){var _=this.tryEntries[k],R=_.completion;if(_.tryLoc==="root")return y("end");if(_.tryLoc<=this.prev){var j=r.call(_,"catchLoc"),I=r.call(_,"finallyLoc");if(j&&I){if(this.prev<_.catchLoc)return y(_.catchLoc,!0);if(this.prev<_.finallyLoc)return y(_.finallyLoc)}else if(j){if(this.prev<_.catchLoc)return y(_.catchLoc,!0)}else{if(!I)throw Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return y(_.finallyLoc)}}}},abrupt:function(d,p){for(var y=this.tryEntries.length-1;y>=0;--y){var k=this.tryEntries[y];if(k.tryLoc<=this.prev&&r.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var _=k;break}}_&&(d==="break"||d==="continue")&&_.tryLoc<=p&&p<=_.finallyLoc&&(_=null);var R=_?_.completion:{};return R.type=d,R.arg=p,_?(this.method="next",this.next=_.finallyLoc,E):this.complete(R)},complete:function(d,p){if(d.type==="throw")throw d.arg;return d.type==="break"||d.type==="continue"?this.next=d.arg:d.type==="return"?(this.rval=this.arg=d.arg,this.method="return",this.next="end"):d.type==="normal"&&p&&(this.next=p),E},finish:function(d){for(var p=this.tryEntries.length-1;p>=0;--p){var y=this.tryEntries[p];if(y.finallyLoc===d)return this.complete(y.completion,y.afterLoc),P(y),E}},catch:function(d){for(var p=this.tryEntries.length-1;p>=0;--p){var y=this.tryEntries[p];if(y.tryLoc===d){var k=y.completion;if(k.type==="throw"){var _=k.arg;P(y)}return _}}throw Error("illegal catch attempt")},delegateYield:function(d,p,y){return this.delegate={iterator:fe(d),resultName:p,nextLoc:y},this.method==="next"&&(this.arg=o),E}},e}function qr(o,e,t,r,i,n,s){try{var a=o[n](s),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(r,i)}function on(o){return function(){var e=this,t=arguments;return new Promise(function(r,i){var n=o.apply(e,t);function s(l){qr(n,r,i,s,a,"next",l)}function a(l){qr(n,r,i,s,a,"throw",l)}s(void 0)})}}function zo(o,e){return an(o)||sn(o,e)||Lo(o,e)||nn()}function nn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sn(o,e){var t=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(t!=null){var r,i,n,s,a=[],l=!0,c=!1;try{if(n=(t=t.call(o)).next,e!==0)for(;!(l=(r=n.call(t)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(h){c=!0,i=h}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function an(o){if(Array.isArray(o))return o}function _e(o){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_e(o)}function ln(o,e){var t=typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(!t){if(Array.isArray(o)||(t=Lo(o))||e){t&&(o=t);var r=0,i=function(){};return{s:i,n:function(){return r>=o.length?{done:!0}:{done:!1,value:o[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,s=!1,a;return{s:function(){t=t.call(o)},n:function(){var c=t.next();return n=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!n&&t.return!=null&&t.return()}finally{if(s)throw a}}}}function Lo(o,e){if(o){if(typeof o=="string")return Nr(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Nr(o,e)}}function Nr(o,e){(e==null||e>o.length)&&(e=o.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=o[t];return r}function Vr(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,r)}return t}function Ce(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vr(Object(t),!0).forEach(function(r){cn(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Vr(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function cn(o,e,t){return e=jo(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function dn(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Yr(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,jo(r.key),r)}}function pn(o,e,t){return e&&Yr(o.prototype,e),t&&Yr(o,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function jo(o){var e=un(o,"string");return _e(e)=="symbol"?e:e+""}function un(o,e){if(_e(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(_e(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var mt="tus-v1",xt="ietf-draft-03",qe="ietf-draft-05",fn={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Io,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:mt},_t=(function(){function o(e,t){dn(this,o),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return pn(o,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(r){return t._urlStorage.findUploadsByFingerprint(r)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,r=this.file;if(!r){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![mt,xt,qe].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var i=this.options.retryDelays;if(i!=null&&Object.prototype.toString.call(i)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var n=0,s=["uploadUrl","uploadSize","uploadLengthDeferred"];n<s.length;n++){var a=s[n];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(r,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(r,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,r=this,i=this._size,n=0;this._parallelUploads=[];var s=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:gn(this._source.size,s);this._parallelUploadUrls&&a.forEach(function(h,v){h.uploadUrl=r._parallelUploadUrls[v]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(h,v){var C=0;return r._source.slice(h.start,h.end).then(function(w){var A=w.value;return new Promise(function(S,E){var D=Ce(Ce({},r.options),{},{uploadUrl:h.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:r.options.metadataForPartialUploads,headers:Ce(Ce({},r.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:S,onError:E,onProgress:function(g){n=n-C+g,C=g,r._emitProgress(n,i)},onUploadUrlAvailable:function(){r._parallelUploadUrls[v]=m.url,r._parallelUploadUrls.filter(function(g){return!!g}).length===a.length&&r._saveUploadInUrlStorage()}}),m=new o(A,D);m.start(),r._parallelUploads.push(m)})})}),c;Promise.all(l).then(function(){c=r._openRequest("POST",r.options.endpoint),c.setHeader("Upload-Concat","final;".concat(r._parallelUploadUrls.join(" ")));var h=Wr(r.options.metadata);return h!==""&&c.setHeader("Upload-Metadata",h),r._sendRequest(c,null)}).then(function(h){if(!Ae(h.getStatus(),200)){r._emitHttpError(c,h,"tus: unexpected response while creating upload");return}var v=h.getHeader("Location");if(v==null){r._emitHttpError(c,h,"tus: invalid or missing Location header");return}r.url=Zr(r.options.endpoint,v),"Created upload at ".concat(r.url),r._emitSuccess(h)}).catch(function(h){r._emitError(h)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var r=this;if(this._parallelUploads!=null){var i=ln(this._parallelUploads),n;try{for(i.s();!(n=i.n()).done;){var s=n.value;s.abort(t)}}catch(a){i.e(a)}finally{i.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():o.terminate(this.url,this.options).then(function(){return r._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,r,i,n){this._emitError(new Me(i,n,t,r))}},{key:"_emitError",value:function(t){var r=this;if(!this._aborted){if(this.options.retryDelays!=null){var i=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(i&&(this._retryAttempt=0),Xr(t,this._retryAttempt,this.options)){var n=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){r.start()},n);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,r){typeof this.options.onProgress=="function"&&this.options.onProgress(t,r)}},{key:"_emitChunkComplete",value:function(t,r,i){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,r,i)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var r=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?r.setHeader("Upload-Defer-Length","1"):r.setHeader("Upload-Length","".concat(this._size));var i=Wr(this.options.metadata);i!==""&&r.setHeader("Upload-Metadata",i);var n;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,n=this._addChunkToRequest(r)):((this.options.protocol===xt||this.options.protocol===qe)&&r.setHeader("Upload-Complete","?0"),n=this._sendRequest(r,null)),n.then(function(s){if(!Ae(s.getStatus(),200)){t._emitHttpError(r,s,"tus: unexpected response while creating upload");return}var a=s.getHeader("Location");if(a==null){t._emitHttpError(r,s,"tus: invalid or missing Location header");return}if(t.url=Zr(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(s),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(r,s):(t._offset=0,t._performUpload())})}).catch(function(s){t._emitHttpError(r,null,"tus: failed to create upload",s)})}},{key:"_resumeUpload",value:function(){var t=this,r=this._openRequest("HEAD",this.url),i=this._sendRequest(r,null);i.then(function(n){var s=n.getStatus();if(!Ae(s,200)){if(s===423){t._emitHttpError(r,n,"tus: upload is currently locked; retry later");return}if(Ae(s,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(r,n,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(n.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(r,n,"tus: invalid or missing offset value");return}var l=Number.parseInt(n.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===mt){t._emitHttpError(r,n,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(n);return}t._offset=a,t._performUpload()})}).catch(function(n){t._emitHttpError(r,null,"tus: failed to resume upload",n)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var r;this.options.overridePatchMethod?(r=this._openRequest("POST",this.url),r.setHeader("X-HTTP-Method-Override","PATCH")):r=this._openRequest("PATCH",this.url),r.setHeader("Upload-Offset","".concat(this._offset));var i=this._addChunkToRequest(r);i.then(function(n){if(!Ae(n.getStatus(),200)){t._emitHttpError(r,n,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(r,n)}).catch(function(n){t._aborted||t._emitHttpError(r,null,"tus: failed to upload chunk at offset ".concat(t._offset),n)})}}},{key:"_addChunkToRequest",value:function(t){var r=this,i=this._offset,n=this._offset+this.options.chunkSize;return t.setProgressHandler(function(s){r._emitProgress(i+s,r._size)}),this.options.protocol===mt?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===qe&&t.setHeader("Content-Type","application/partial-upload"),(n===Number.POSITIVE_INFINITY||n>this._size)&&!this.options.uploadLengthDeferred&&(n=this._size),this._source.slice(i,n).then(function(s){var a=s.value,l=s.done,c=a!=null&&a.size?a.size:0;r.options.uploadLengthDeferred&&l&&(r._size=r._offset+c,t.setHeader("Upload-Length","".concat(r._size)));var h=r._offset+c;return!r.options.uploadLengthDeferred&&l&&h!==r._size?Promise.reject(new Error("upload was configured with a size of ".concat(r._size," bytes, but the source is done after ").concat(h," bytes"))):a===null?r._sendRequest(t):((r.options.protocol===xt||r.options.protocol===qe)&&t.setHeader("Upload-Complete",l?"?1":"?0"),r._emitProgress(r._offset,r._size),r._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,r){var i=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(i)){this._emitHttpError(t,r,"tus: invalid or missing offset value");return}if(this._emitProgress(i,this._size),this._emitChunkComplete(i-this._offset,i,this._size),this._offset=i,i===this._size){this._emitSuccess(r),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,r){var i=Gr(t,r,this.options);return this._req=i,i}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r){t._emitError(r)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var r={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?r.parallelUploadUrls=this._parallelUploadUrls:r.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,r).then(function(i){t._urlStorageKey=i})}},{key:"_sendRequest",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return Kr(t,r,this.options)}}],[{key:"terminate",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=Gr("DELETE",t,r);return Kr(i,null,r).then(function(n){if(n.getStatus()!==204)throw new Me("tus: unexpected response while terminating upload",null,i,n)}).catch(function(n){if(n instanceof Me||(n=new Me("tus: failed to terminate upload",n,i,null)),!Xr(n,0,r))throw n;var s=r.retryDelays[0],a=r.retryDelays.slice(1),l=Ce(Ce({},r),{},{retryDelays:a});return new Promise(function(c){return setTimeout(c,s)}).then(function(){return o.terminate(t,l)})})}}])})();function Wr(o){return Object.entries(o).map(function(e){var t=zo(e,2),r=t[0],i=t[1];return"".concat(r," ").concat(Ki.encode(String(i)))}).join(",")}function Ae(o,e){return o>=e&&o<e+100}function Gr(o,e,t){var r=t.httpStack.createRequest(o,e);t.protocol===xt?r.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===qe?r.setHeader("Upload-Draft-Interop-Version","6"):r.setHeader("Tus-Resumable","1.0.0");for(var i=t.headers||{},n=0,s=Object.entries(i);n<s.length;n++){var a=zo(s[n],2),l=a[0],c=a[1];r.setHeader(l,c)}if(t.addRequestId){var h=rn();r.setHeader("X-Request-ID",h)}return r}function Kr(o,e,t){return Mt.apply(this,arguments)}function Mt(){return Mt=on(Bt().mark(function o(e,t,r){var i;return Bt().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(typeof r.onBeforeRequest!="function"){s.next=3;break}return s.next=3,r.onBeforeRequest(e);case 3:return s.next=5,e.send(t);case 5:if(i=s.sent,typeof r.onAfterResponse!="function"){s.next=9;break}return s.next=9,r.onAfterResponse(e,i);case 9:return s.abrupt("return",i);case 10:case"end":return s.stop()}},o)})),Mt.apply(this,arguments)}function hn(){var o=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(o=!1),o}function Xr(o,e,t){return t.retryDelays==null||e>=t.retryDelays.length||o.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(o,e,t):Io(o)}function Io(o){var e=o.originalResponse?o.originalResponse.getStatus():0;return(!Ae(e,400)||e===409||e===423)&&hn()}function Zr(o,e){return new tn(e,o).toString()}function gn(o,e){for(var t=Math.floor(o/e),r=[],i=0;i<e;i++)r.push({start:t*i,end:t*(i+1)});return r[e-1].end=o,r}_t.defaultOptions=fn;var Fo=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function vn(o){return new Promise(function(e,t){var r=new XMLHttpRequest;r.responseType="blob",r.onload=function(){var i=r.response;e(i)},r.onerror=function(i){t(i)},r.open("GET",o),r.send()})}var mn=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function xn(o){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){var i=new Uint8Array(r.result);e({value:i})},r.onerror=function(i){t(i)},r.readAsArrayBuffer(o)})}function et(o){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(o)}function bn(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function yn(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,wn(r.key),r)}}function _n(o,e,t){return e&&yn(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function wn(o){var e=kn(o,"string");return et(e)=="symbol"?e:e+""}function kn(o,e){if(et(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(et(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Jr=(function(){function o(e){bn(this,o),this._file=e,this.size=e.size}return _n(o,[{key:"slice",value:function(t,r){if(mn())return xn(this._file.slice(t,r));var i=this._file.slice(t,r),n=r>=this.size;return Promise.resolve({value:i,done:n})}},{key:"close",value:function(){}}])})();function tt(o){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tt(o)}function $n(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Sn(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,En(r.key),r)}}function Cn(o,e,t){return e&&Sn(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function En(o){var e=Un(o,"string");return tt(e)=="symbol"?e:e+""}function Un(o,e){if(tt(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(tt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}function Qr(o){return o===void 0?0:o.size!==void 0?o.size:o.length}function Pn(o,e){if(o.concat)return o.concat(e);if(o instanceof Blob)return new Blob([o,e],{type:o.type});if(o.set){var t=new o.constructor(o.length+e.length);return t.set(o),t.set(e,o.length),t}throw new Error("Unknown data type")}var An=(function(){function o(e){$n(this,o),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Cn(o,[{key:"slice",value:function(t,r){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,r)}},{key:"_readUntilEnoughDataOrDone",value:function(t,r){var i=this,n=r<=this._bufferOffset+Qr(this._buffer);if(this._done||n){var s=this._getDataFromBuffer(t,r),a=s==null?this._done:!1;return Promise.resolve({value:s,done:a})}return this._reader.read().then(function(l){var c=l.value,h=l.done;return h?i._done=!0:i._buffer===void 0?i._buffer=c:i._buffer=Pn(i._buffer,c),i._readUntilEnoughDataOrDone(t,r)})}},{key:"_getDataFromBuffer",value:function(t,r){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var i=Qr(this._buffer)===0;return this._done&&i?null:this._buffer.slice(0,r-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function we(o){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(o)}function Ht(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Ht=function(){return e};var o,e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(u,d,p){u[d]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(u,d,p){return Object.defineProperty(u,d,{value:p,enumerable:!0,configurable:!0,writable:!0}),u[d]}try{c({},"")}catch{c=function(p,y,k){return p[y]=k}}function h(u,d,p,y){var k=d&&d.prototype instanceof D?d:D,_=Object.create(k.prototype),R=new te(y||[]);return i(_,"_invoke",{value:X(u,p,R)}),_}function v(u,d,p){try{return{type:"normal",arg:u.call(d,p)}}catch(y){return{type:"throw",arg:y}}}e.wrap=h;var C="suspendedStart",w="suspendedYield",A="executing",S="completed",E={};function D(){}function m(){}function x(){}var g={};c(g,s,function(){return this});var b=Object.getPrototypeOf,O=b&&b(b(fe([])));O&&O!==t&&r.call(O,s)&&(g=O);var U=x.prototype=D.prototype=Object.create(g);function L(u){["next","throw","return"].forEach(function(d){c(u,d,function(p){return this._invoke(d,p)})})}function T(u,d){function p(k,_,R,j){var I=v(u[k],u,_);if(I.type!=="throw"){var G=I.arg,N=G.value;return N&&we(N)=="object"&&r.call(N,"__await")?d.resolve(N.__await).then(function(K){p("next",K,R,j)},function(K){p("throw",K,R,j)}):d.resolve(N).then(function(K){G.value=K,R(G)},function(K){return p("throw",K,R,j)})}j(I.arg)}var y;i(this,"_invoke",{value:function(_,R){function j(){return new d(function(I,G){p(_,R,I,G)})}return y=y?y.then(j,j):j()}})}function X(u,d,p){var y=C;return function(k,_){if(y===A)throw Error("Generator is already running");if(y===S){if(k==="throw")throw _;return{value:o,done:!0}}for(p.method=k,p.arg=_;;){var R=p.delegate;if(R){var j=ie(R,p);if(j){if(j===E)continue;return j}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(y===C)throw y=S,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);y=A;var I=v(u,d,p);if(I.type==="normal"){if(y=p.done?S:w,I.arg===E)continue;return{value:I.arg,done:p.done}}I.type==="throw"&&(y=S,p.method="throw",p.arg=I.arg)}}}function ie(u,d){var p=d.method,y=u.iterator[p];if(y===o)return d.delegate=null,p==="throw"&&u.iterator.return&&(d.method="return",d.arg=o,ie(u,d),d.method==="throw")||p!=="return"&&(d.method="throw",d.arg=new TypeError("The iterator does not provide a '"+p+"' method")),E;var k=v(y,u.iterator,d.arg);if(k.type==="throw")return d.method="throw",d.arg=k.arg,d.delegate=null,E;var _=k.arg;return _?_.done?(d[u.resultName]=_.value,d.next=u.nextLoc,d.method!=="return"&&(d.method="next",d.arg=o),d.delegate=null,E):_:(d.method="throw",d.arg=new TypeError("iterator result is not an object"),d.delegate=null,E)}function $e(u){var d={tryLoc:u[0]};1 in u&&(d.catchLoc=u[1]),2 in u&&(d.finallyLoc=u[2],d.afterLoc=u[3]),this.tryEntries.push(d)}function P(u){var d=u.completion||{};d.type="normal",delete d.arg,u.completion=d}function te(u){this.tryEntries=[{tryLoc:"root"}],u.forEach($e,this),this.reset(!0)}function fe(u){if(u||u===""){var d=u[s];if(d)return d.call(u);if(typeof u.next=="function")return u;if(!isNaN(u.length)){var p=-1,y=function k(){for(;++p<u.length;)if(r.call(u,p))return k.value=u[p],k.done=!1,k;return k.value=o,k.done=!0,k};return y.next=y}}throw new TypeError(we(u)+" is not iterable")}return m.prototype=x,i(U,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:m,configurable:!0}),m.displayName=c(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(u){var d=typeof u=="function"&&u.constructor;return!!d&&(d===m||(d.displayName||d.name)==="GeneratorFunction")},e.mark=function(u){return Object.setPrototypeOf?Object.setPrototypeOf(u,x):(u.__proto__=x,c(u,l,"GeneratorFunction")),u.prototype=Object.create(U),u},e.awrap=function(u){return{__await:u}},L(T.prototype),c(T.prototype,a,function(){return this}),e.AsyncIterator=T,e.async=function(u,d,p,y,k){k===void 0&&(k=Promise);var _=new T(h(u,d,p,y),k);return e.isGeneratorFunction(d)?_:_.next().then(function(R){return R.done?R.value:_.next()})},L(U),c(U,l,"Generator"),c(U,s,function(){return this}),c(U,"toString",function(){return"[object Generator]"}),e.keys=function(u){var d=Object(u),p=[];for(var y in d)p.push(y);return p.reverse(),function k(){for(;p.length;){var _=p.pop();if(_ in d)return k.value=_,k.done=!1,k}return k.done=!0,k}},e.values=fe,te.prototype={constructor:te,reset:function(d){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(P),!d)for(var p in this)p.charAt(0)==="t"&&r.call(this,p)&&!isNaN(+p.slice(1))&&(this[p]=o)},stop:function(){this.done=!0;var d=this.tryEntries[0].completion;if(d.type==="throw")throw d.arg;return this.rval},dispatchException:function(d){if(this.done)throw d;var p=this;function y(G,N){return R.type="throw",R.arg=d,p.next=G,N&&(p.method="next",p.arg=o),!!N}for(var k=this.tryEntries.length-1;k>=0;--k){var _=this.tryEntries[k],R=_.completion;if(_.tryLoc==="root")return y("end");if(_.tryLoc<=this.prev){var j=r.call(_,"catchLoc"),I=r.call(_,"finallyLoc");if(j&&I){if(this.prev<_.catchLoc)return y(_.catchLoc,!0);if(this.prev<_.finallyLoc)return y(_.finallyLoc)}else if(j){if(this.prev<_.catchLoc)return y(_.catchLoc,!0)}else{if(!I)throw Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return y(_.finallyLoc)}}}},abrupt:function(d,p){for(var y=this.tryEntries.length-1;y>=0;--y){var k=this.tryEntries[y];if(k.tryLoc<=this.prev&&r.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var _=k;break}}_&&(d==="break"||d==="continue")&&_.tryLoc<=p&&p<=_.finallyLoc&&(_=null);var R=_?_.completion:{};return R.type=d,R.arg=p,_?(this.method="next",this.next=_.finallyLoc,E):this.complete(R)},complete:function(d,p){if(d.type==="throw")throw d.arg;return d.type==="break"||d.type==="continue"?this.next=d.arg:d.type==="return"?(this.rval=this.arg=d.arg,this.method="return",this.next="end"):d.type==="normal"&&p&&(this.next=p),E},finish:function(d){for(var p=this.tryEntries.length-1;p>=0;--p){var y=this.tryEntries[p];if(y.finallyLoc===d)return this.complete(y.completion,y.afterLoc),P(y),E}},catch:function(d){for(var p=this.tryEntries.length-1;p>=0;--p){var y=this.tryEntries[p];if(y.tryLoc===d){var k=y.completion;if(k.type==="throw"){var _=k.arg;P(y)}return _}}throw Error("illegal catch attempt")},delegateYield:function(d,p,y){return this.delegate={iterator:fe(d),resultName:p,nextLoc:y},this.method==="next"&&(this.arg=o),E}},e}function eo(o,e,t,r,i,n,s){try{var a=o[n](s),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(r,i)}function On(o){return function(){var e=this,t=arguments;return new Promise(function(r,i){var n=o.apply(e,t);function s(l){eo(n,r,i,s,a,"next",l)}function a(l){eo(n,r,i,s,a,"throw",l)}s(void 0)})}}function Rn(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Tn(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,zn(r.key),r)}}function Dn(o,e,t){return e&&Tn(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function zn(o){var e=Ln(o,"string");return we(e)=="symbol"?e:e+""}function Ln(o,e){if(we(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(we(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var jn=(function(){function o(){Rn(this,o)}return Dn(o,[{key:"openFile",value:(function(){var e=On(Ht().mark(function r(i,n){var s;return Ht().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(Fo()&&i&&typeof i.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,vn(i.uri);case 4:return s=l.sent,l.abrupt("return",new Jr(s));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof i.slice=="function"&&typeof i.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new Jr(i)));case 13:if(typeof i.read!="function"){l.next=18;break}if(n=Number(n),Number.isFinite(n)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new An(i,n)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},r,null,[[1,8]])}));function t(r,i){return e.apply(this,arguments)}return t})()}])})();function In(o,e){return Fo()?Promise.resolve(Fn(o,e)):Promise.resolve(["tus-br",o.name,o.type,o.size,o.lastModified,e.endpoint].join("-"))}function Fn(o,e){var t=o.exif?Bn(JSON.stringify(o.exif)):"noexif";return["tus-rn",o.name||"noname",o.size||"nosize",t,e.endpoint].join("/")}function Bn(o){var e=0;if(o.length===0)return e;for(var t=0;t<o.length;t++){var r=o.charCodeAt(t);e=(e<<5)-e+r,e&=e}return e}function rt(o){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rt(o)}function nr(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Mn(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Hn(r.key),r)}}function sr(o,e,t){return e&&Mn(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Hn(o){var e=qn(o,"string");return rt(e)=="symbol"?e:e+""}function qn(o,e){if(rt(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(rt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var Nn=(function(){function o(){nr(this,o)}return sr(o,[{key:"createRequest",value:function(t,r){return new Vn(t,r)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),Vn=(function(){function o(e,t){nr(this,o),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return sr(o,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,r){this._xhr.setRequestHeader(t,r),this._headers[t]=r}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(r){r.lengthComputable&&t(r.loaded)})}},{key:"send",value:function(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(i,n){t._xhr.onload=function(){i(new Yn(t._xhr))},t._xhr.onerror=function(s){n(s)},t._xhr.send(r)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Yn=(function(){function o(e){nr(this,o),this._xhr=e}return sr(o,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function ot(o){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(o)}function Wn(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function Gn(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Xn(r.key),r)}}function Kn(o,e,t){return e&&Gn(o.prototype,e),Object.defineProperty(o,"prototype",{writable:!1}),o}function Xn(o){var e=Zn(o,"string");return ot(e)=="symbol"?e:e+""}function Zn(o,e){if(ot(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(ot(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}var qt=!1;try{qt="localStorage"in window;var Dt="tusSupport",to=localStorage.getItem(Dt);localStorage.setItem(Dt,to),to===null&&localStorage.removeItem(Dt)}catch(o){if(o.code===o.SECURITY_ERR||o.code===o.QUOTA_EXCEEDED_ERR)qt=!1;else throw o}var Jn=qt,Qn=(function(){function o(){Wn(this,o)}return Kn(o,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var r=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(r)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,r){var i=Math.round(Math.random()*1e12),n="tus::".concat(t,"::").concat(i);return localStorage.setItem(n,JSON.stringify(r)),Promise.resolve(n)}},{key:"_findEntries",value:function(t){for(var r=[],i=0;i<localStorage.length;i++){var n=localStorage.key(i);if(n.indexOf(t)===0)try{var s=JSON.parse(localStorage.getItem(n));s.urlStorageKey=n,r.push(s)}catch{}}return r}}])})();function ze(o){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ze(o)}function es(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function ts(o,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,Mo(r.key),r)}}function rs(o,e,t){return t&&ts(o,t),Object.defineProperty(o,"prototype",{writable:!1}),o}function os(o,e,t){return e=wt(e),is(o,Bo()?Reflect.construct(e,t||[],wt(o).constructor):e.apply(o,t))}function is(o,e){if(e&&(ze(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ns(o)}function ns(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Bo(){try{var o=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Bo=function(){return!!o})()}function wt(o){return wt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wt(o)}function ss(o,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&Nt(o,e)}function Nt(o,e){return Nt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Nt(o,e)}function ro(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,r)}return t}function Oe(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ro(Object(t),!0).forEach(function(r){as(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):ro(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function as(o,e,t){return e=Mo(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function Mo(o){var e=ls(o,"string");return ze(e)=="symbol"?e:e+""}function ls(o,e){if(ze(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(ze(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}var oo=Oe(Oe({},_t.defaultOptions),{},{httpStack:new Nn,fileReader:new jn,urlStorage:Jn?new Qn:new Ii,fingerprint:In}),cs=(function(o){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return es(this,e),r=Oe(Oe({},oo),r),os(this,e,[t,r])}return ss(e,o),rs(e,null,[{key:"terminate",value:function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return i=Oe(Oe({},oo),i),_t.terminate(r,i)}}])})(_t);const ds=10*1024*1024,ps=5*1024*1024,us="https://eu-on-24001.connector.filerobot.com/files",fs="https://eu-on-24001.connector.filerobot.com/json";function hs(o,e){if(!e||!o.file)return!1;const t=e.sizeThreshold??ds;return o.size>=t}function gs(o,e){const{tusConfig:t}=e,r=e.apiBase.replace(/\/+$/,""),i=t.endpoint||us,n=t.chunkSize??ps,s=t.resumable!==!1,a=t.parallelChunks??1,l=t.retryDelays??[0,1e3,3e3,5e3],c=r.split("/").pop()||"";let h=!1,v=!1,C=!1;const w={name:o.name,type:o.type,"filerobot-folder":e.folder},A=async()=>`tus-${o.id}-${i}`,S=new cs(o.file,{endpoint:i,chunkSize:n,retryDelays:l,parallelUploads:a,storeFingerprintForResuming:s,removeFingerprintOnSuccess:!0,headers:{},metadata:w,fingerprint:A,onBeforeRequest(g){const b=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[O,U]of Object.entries(b))g.setHeader(O,U);g.setHeader("X-Filerobot-Token",c)},onUploadUrlAvailable(){S.url&&e.onUploadUrlAvailable&&!C&&(C=!0,e.onUploadUrlAvailable(S.url))},onProgress(g,b){!v&&!h&&e.onProgress(g,b)},onSuccess(){var O;if(v)return;m();const g=S.url||"",b=(O=g.match(/files\/([^/?]+)/))==null?void 0:O[1];b?ms(b,o.size).then(U=>{v||e.onComplete(U)}).catch(U=>{v||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:o.name,extension:o.name.split(".").pop()||"",type:o.type,size:o.size,url:{public:g,cdn:g},meta:o.meta,tags:o.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(g){v||(m(),vs(g)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(g instanceof Error?g:new Error(String(g))))},onShouldRetry(g,b,O){var L;const U=(L=g.originalResponse)==null?void 0:L.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let E=null,D=null;typeof window<"u"&&(E=()=>{var g;!h&&!v&&(h=!0,S.abort(!1),(g=e.onPause)==null||g.call(e))},D=()=>{var g;h&&!v&&(h=!1,S.start(),(g=e.onResume)==null||g.call(e))},window.addEventListener("offline",E),window.addEventListener("online",D));const m=()=>{E&&window.removeEventListener("offline",E),D&&window.removeEventListener("online",D)},x=()=>{try{S.start()}catch(g){m(),e.onError(g instanceof Error?g:new Error(String(g)))}};return s?S.findPreviousUploads().then(g=>{g.length>0&&!v&&S.resumeFromPreviousUpload(g[0]),v||x()}):x(),{abort(){v=!0,h=!1,m(),S.abort(!0)},pause(){!h&&!v&&(h=!0,S.abort(!1))},resume(){h&&!v&&(h=!1,S.start())},isPaused(){return h}}}function vs(o){var e;if(o instanceof Me){const t=(e=o.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:o.originalResponse==null&&o.causingError!=null}return!1}async function ms(o,e){const t=`${fs}/${o}`,r=e>1e8?13e3:6e3,i=3;for(let n=0;n<=i;n++){n>0&&await new Promise(l=>setTimeout(l,r));const s=await fetch(t);if(s.status===404&&n<i)continue;if(!s.ok)throw new Error(`Failed to fetch file record (HTTP ${s.status})`);const a=await s.json();if(a.file)return{status:"success",file:a.file};if(a.status==="success")return a;if(!(n<i))throw new Error(a.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class xs{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const r of e.values())r.status==="idle"?(H(this.store,r.id,{status:"queued"}),t=!0):r.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(H(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&H(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),H(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:r}=this.store.getState().queueConfig;this.activeUploads.size<r?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),H(this.store,e,{status:"uploading"})):H(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!io(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),H(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())io(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),H(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,r=this.activeUploads.size,i=t-r;if(i<=0)return;const s=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,i);for(const a of s){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),H(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){const t=!e.remoteInfo&&!e.remoteUrl&&hs(e,this.config.tusConfig);H(this.store,e.id,{status:"uploading",error:null,isTus:t});let r=0,i=Date.now(),n=0;const s={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:c=>this.handleComplete(e.id,c),onError:c=>this.handleError(e.id,c)},a=(c,h)=>{const v=Date.now(),C=(v-i)/1e3;if(C>0){const A=(c-r)/C;n=n===0?A:.3*A+.7*n}r=c,i=v;const w=h>0?Math.min(c/h*100,100):0;H(this.store,e.id,{progress:w,bytesUploaded:c,speed:n}),this.updateTotalProgress()};let l;if(e.remoteInfo)l=$i(e,{...s,onProgress:a});else if(e.remoteUrl)l=yi(e,s);else if(t){const c=gs(e,{...s,onProgress:a,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:h=>{H(this.store,e.id,{tusUploadUrl:h})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,c),H(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,c),H(this.store,e.id,{status:"uploading"})}});l=c}else l=bi(e,{...s,onProgress:a});this.activeUploads.set(e.id,l)}handleComplete(e,t){this.activeUploads.delete(e),H(this.store,e,{status:"complete",progress:100,response:t}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const r=this.store.getState().files.get(e);if(!r)return;const{retryConfig:i}=this.store.getState().queueConfig,n=r.retryCount+1;if(n<=i.maxRetries){const s=Math.min(i.baseDelay*Math.pow(i.backoffFactor,r.retryCount),i.maxDelay);H(this.store,e,{status:"retrying",error:t.message,retryCount:n});const a=setTimeout(()=>{this.retryTimers.delete(e),H(this.store,e,{status:"queued"}),this.processQueue()},s);this.retryTimers.set(e,a)}else H(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,r=0,i=0;for(const n of e.values())(n.status==="queued"||n.status==="uploading"||n.status==="paused"||n.status==="retrying"||n.status==="complete"||n.status==="failed")&&(t+=n.size,r+=n.status==="complete"?n.size:n.bytesUploaded),n.status==="uploading"&&(i+=n.speed);this.store.setState({totalBytes:t,totalBytesUploaded:r,totalSpeed:i,totalProgress:t>0?Math.min(r/t*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying"||r.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function io(o){return o==="queued"||o==="uploading"||o==="retrying"||o==="paused"}function ar(o){return`https://api.filerobot.com/${o}`}async function bs(o,e){const t=`${ar(o)}/key/${encodeURIComponent(e)}`,r=new AbortController,i=setTimeout(()=>r.abort(),3e4);try{const n=await fetch(t,{signal:r.signal});if(clearTimeout(i),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const s=await n.json();if(s.status==="error")throw new Error(`SASS key exchange failed: ${s.msg||"Unknown error"}`);return s.key}catch(n){throw clearTimeout(i),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function Vt(o,e){const t={};switch(o.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=o.sassKey;break}return o.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=o.airboxPuid),t}async function ys(o){const e=ar(o.container);if(o.mode==="security-template"){const t=await bs(o.container,o.securityTemplateId);return{apiBase:e,headers:Vt(o,t),sassKey:t}}return{apiBase:e,headers:Vt(o)}}const F={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata"};let _s=0;function Ee(){return`file-${Date.now()}-${++_s}`}function Re(o){if(o<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(o)/Math.log(1024)),e.length-1),r=o/Math.pow(1024,t);return`${t===0?r:r.toFixed(1)} ${e[t]}`}function zt(o){if(!isFinite(o)||o<=0)return"0s";const e=Math.round(o);if(e<60)return`${e}s`;const t=Math.floor(e/60),r=e%60;return r>0?`${t}m ${r}s`:`${t}m`}function Ne(o){var t;const e=((t=o.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return o.type.startsWith("image/")?"image":o.type.startsWith("video/")||["mp4","mov","avi","webm","mkv"].includes(e)?"vid":o.type==="application/pdf"||e==="pdf"?"pdf":["doc","docx","xls","xlsx","ppt","pptx","txt","rtf","odt"].includes(e)?"doc":["zip","rar","7z","tar","gz","bz2"].includes(e)?"zip":"gen"}function ws(o){const e=o.lastIndexOf(".");return e>=0?o.slice(e+1).toUpperCase():""}const ks={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function $s(o){var t;const e=((t=o.split(".").pop())==null?void 0:t.toLowerCase())??"";return ks[e]||""}function Ss(o){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const r=URL.createObjectURL(o);let i=!1;const n=()=>{i||(i=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r)};t.addEventListener("seeked",()=>{try{const s=document.createElement("canvas");s.width=t.videoWidth||320,s.height=t.videoHeight||240;const a=s.getContext("2d");if(a){a.drawImage(t,0,0,s.width,s.height),s.toBlob(l=>{i||(i=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r))},"image/jpeg",.7);return}}catch{}n()},{once:!0}),t.addEventListener("error",()=>n(),{once:!0}),setTimeout(()=>n(),5e3),t.src=r,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function Yt(o,e,t){var r,i;if(e.maxFileSize!=null&&o.size>0&&o.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&o.size>0){let n=o.size;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&(n+=s.size);if(n>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let n=0;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&n++;if(n>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const n=e.allowedFileTypes,s="."+(((r=o.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(!n.some(l=>l.startsWith(".")?s===l.toLowerCase():l.endsWith("/*")?o.type.startsWith(l.slice(0,-1)):o.type===l))return"File type not allowed"}if(e.blockedFileTypes!=null){const n=e.blockedFileTypes,s="."+(((i=o.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(n.some(l=>l.startsWith(".")?s===l.toLowerCase():l.endsWith("/*")?o.type.startsWith(l.slice(0,-1)):o.type===l))return"File type is blocked"}return null}function Cs(o,e,t){return Yt(o,e,t)}function no(o){return o.allowedFileTypes?o.allowedFileTypes.join(","):""}const so={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function Es(o){return o.filter(e=>e in so).map(e=>so[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us={CHILD:2},Ho=o=>(...e)=>({_$litDirective$:o,values:e});class Ps{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kt extends Ps{constructor(e){if(super(e),this.it=$,e.type!==Us.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$||e==null)return this._t=void 0,this.it=e;if(e===ye)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}kt.directiveName="unsafeHTML",kt.resultType=1;const me=Ho(kt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wt extends kt{}Wt.directiveName="unsafeSVG",Wt.resultType=2;const ae=Ho(Wt);var As=Object.defineProperty,Os=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&As(e,t,i),i};const Rs='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Ts='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Ds='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',zs='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Ve=[{id:"device",label:"My Device",icon:Rs,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:Ts,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:Ds,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:zs,iconColor:"#ea580c"}],dr=class dr extends W{constructor(){super(...arguments),this.sources=Ve}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return f`
      ${this.sources.map(e=>f`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?me(e.brandHtml):ge`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ae(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};dr.styles=Z`
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
  `;let $t=dr;Os([B({type:Array})],$t.prototype,"sources");function qo(o){let e=o;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Ls=Object.defineProperty,oe=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Ls(e,t,i),i};const ao=3,Gt=new CSSStyleSheet;Gt.replaceSync(`
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
`);const pr=class pr extends W{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this._dragOver=!1,this._moreOpen=!1,this._visiblePills=ao,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{var r;e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._emitFiles(t)},this._onClick=e=>{const t=this.shadowRoot.querySelector(".drop-zone");if(t&&this._rippleEl){const r=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-r.left}px`,this._rippleEl.style.top=`${e.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,r=Array.from(t.files??[]);r.length>0&&this._emitFiles(r),t.value=""},this._onPaste=e=>{var i;if(!this.isConnected||this.offsetWidth===0)return;const t=(i=e.clipboardData)==null?void 0:i.items;if(!t)return;const r=[];for(const n of t)if(n.kind==="file"){const s=n.getAsFile();s&&r.push(s)}r.length>0&&(e.preventDefault(),this._emitFiles(r))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var e;(e=this.fileInput)==null||e.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),qo(this).appendChild(this._portalContainer),this._injectDropdownStyles()),ce(f`<div class="sfx-more-dropdown open">
          ${e.map(t=>f`
              <button class="sfx-more-item" @click=${r=>this._onMoreItemClick(t,r)}>
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?me(t.brandHtml):t.iconColor?f`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${ae(t.icon)}</svg>`:ge`<svg viewBox="0 0 24 24">${ae(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(ce($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Gt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Gt]))}_positionDropdown(){var v,C;const e=(v=this.shadowRoot)==null?void 0:v.querySelector(".more-wrap > button"),t=(C=this._portalContainer)==null?void 0:C.querySelector(".sfx-more-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),i=8,n=t.scrollHeight,s=t.offsetWidth,a=r.top,l=window.innerHeight-r.bottom;a>=n+i||a>l?t.style.top=`${r.top-n-i}px`:t.style.top=`${r.bottom+i}px`;let h=r.right-s;h=Math.max(8,Math.min(h,window.innerWidth-s-8)),t.style.left=`${h}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=480?this._visiblePills=1:e<=768?this._visiblePills=2:this._visiblePills=ao}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills()}updated(e){e.has("sourcesLayout")&&this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._portalContainer&&(ce($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return f`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?me(e.brandHtml):f`<span class="pill-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${ge`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ae(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `}_renderCard(e){return f`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?f`<span class="card-ico">${me(e.brandHtml)}</span>`:f`<span class="card-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${ge`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ae(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `}_renderMoreCard(){return f`
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
    `}_renderMoreDropdown(){return f`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          More
          <svg class="more-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills);return f`
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
        ${this.compact?$:f`<div class="subtitle">Drop files anywhere on this page</div>`}

        ${!this.compact&&this.sources.length>0?f`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout==="cards"?f`
                    <div class="sources-cards">
                      ${t.map(i=>this._renderCard(i))}
                      ${r.length>0?this._renderMoreCard():$}
                    </div>
                  `:f`
                    <div class="sources-grid">
                      ${t.map(i=>this._renderPill(i))}
                      ${r.length>0?this._renderMoreDropdown():$}
                    </div>
                  `}
            `:$}

        ${this.compact&&this.sources.length>0?f`
              <div class="sources-row">
                ${this.sources.map(i=>f`
                    <button
                      class="src-ico"
                      style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                      data-tip=${i.label}
                      aria-label=${i.label}
                      @click=${n=>{n.stopPropagation(),this._onSourceIconClick(i)}}
                    >
                      ${i.brandHtml?me(i.brandHtml):ge`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ae(i.icon)}</svg>`}
                    </button>
                  `)}
              </div>
            `:$}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept||$}
          @change=${this._onFileChange}
        />
      </div>
    `}};pr.styles=Z`
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
  `;let Q=pr;oe([B({type:Boolean,reflect:!0})],Q.prototype,"compact");oe([B({type:Boolean,attribute:"external-drag-over"})],Q.prototype,"externalDragOver");oe([B({type:String})],Q.prototype,"accept");oe([B({type:Array})],Q.prototype,"sources");oe([B({type:String,attribute:"sources-layout"})],Q.prototype,"sourcesLayout");oe([z()],Q.prototype,"_dragOver");oe([z()],Q.prototype,"_moreOpen");oe([z()],Q.prototype,"_visiblePills");oe([_o(".ripple")],Q.prototype,"_rippleEl");oe([_o('input[type="file"]')],Q.prototype,"fileInput");const ur=class ur extends W{render(){return f`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};ur.styles=Z`
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
  `;let Kt=ur;var js=Object.defineProperty,lt=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&js(e,t,i),i};const Xt=new CSSStyleSheet;Xt.replaceSync(`
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
`);const fr=class fr extends W{constructor(){super(...arguments),this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this._moreOpen=!1,this._portalContainer=null,this._outsideClickHandler=e=>{var i;if((i=this._portalContainer)!=null&&i.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),r=e.composedPath();t&&r.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const t=e.target,r=Array.from(t.files??[]);r.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:r},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const r=this.renderRoot.querySelector('input[type="file"]');r==null||r.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(3);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),qo(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),ce(f`<div class="sfx-tile-dropdown">
        ${e.map(t=>f`
          <button
            class="sfx-tile-dropdown-item"
            @click=${r=>this._onMoreSourceClick(r,t)}
          >
            <span class="sfx-tile-dropdown-ico" style=${t.iconColor&&!t.brandHtml?`color:${t.iconColor}`:""}>
              ${t.brandHtml?me(t.brandHtml):ge`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ae(t.icon)}</svg>`}
            </span>
            ${t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var v;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(v=this._portalContainer)==null?void 0:v.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),i=6,n=t.scrollHeight,s=t.offsetWidth,a=r.top,l=window.innerHeight-r.bottom;a>=n+i||a>l?t.style.top=`${r.top-n-i}px`:t.style.top=`${r.bottom+i}px`;let h=r.right-s;h=Math.max(8,Math.min(h,window.innerWidth-s-8)),t.style.left=`${h}px`}_closePortal(){this._portalContainer&&(ce($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Xt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Xt]))}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners()}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const t=this.sources.slice(0,3),r=this.sources.slice(3);return f`
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
        ${t.length>0?f`
          <div class="drop-tile-sources">
            ${t.map(i=>f`
              <button
                class="drop-tile-src"
                style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                title=${i.label}
                @click=${n=>this._onSourceClick(n,i)}
              >
                ${i.brandHtml?me(i.brandHtml):ge`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ae(i.icon)}</svg>`}
              </button>
            `)}
            ${r.length>0?f`
              <div class="drop-tile-more-wrap">
                <button class="drop-tile-more" title="More sources" @click=${i=>this._toggleMore(i)}>···</button>
              </div>
            `:$}
          </div>
        `:$}
        <input type="file" multiple accept=${this.accept||$} @change=${this._onFileInput} />
      </div>
    `}render(){return f`
      <div class="grid">
        ${this.showDropTile?this._renderDropTile():$}
        ${this.files.map((e,t)=>f`<sfx-file-item .file=${e} style="--tile-index:${t}"></sfx-file-item>`)}
      </div>
    `}};fr.styles=Z`
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
  `;let de=fr;lt([B({attribute:!1})],de.prototype,"files");lt([B({type:Boolean})],de.prototype,"showDropTile");lt([B({attribute:!1})],de.prototype,"sources");lt([B({type:String})],de.prototype,"accept");lt([z()],de.prototype,"_moreOpen");var Is=Object.defineProperty,No=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Is(e,t,i),i};const hr=class hr extends W{constructor(){super(...arguments),this._dims=""}updated(e){var t;if(e.has("file")&&(this._dims="",(t=this.file)!=null&&t.previewUrl)){const r=this.file.previewUrl,i=new Image;i.onload=()=>{var n;((n=this.file)==null?void 0:n.previewUrl)===r&&(this._dims=`${i.naturalWidth}×${i.naturalHeight}`)},i.src=r}}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}render(){const e=this.file;if(!e)return $;const t=Ne(e),r=e.status==="complete",i=e.status==="uploading",n=e.status==="paused",s=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=ws(e.name),c=["tile",r?"done":"",i?"uploading":"",n?"paused":"",a?"rejected":""].filter(Boolean).join(" ");return f`
      <div class=${c} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?f`<img class="preview-img" src=${e.previewUrl} alt="" />`:f`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <div class="type-icon-inner ${t}">
                    ${this._renderTypeIcon(t)}
                    ${l?f`<div class="ext-label">${l}</div>`:$}
                  </div>
                </div>
              `}

          <!-- Preview button -->
          ${!r&&!i&&!n&&!s&&e.status!=="rejected"?f`
                <button class="preview-btn" @click=${this._preview} aria-label="Details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Details
                </button>
              `:$}

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
          ${r?f`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:$}

          <!-- Progress bar (visible during upload and when paused) -->
          ${e.status==="uploading"||e.status==="paused"?f`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress,100)/100})"></div>
                </div>
              `:$}

          <!-- Error / rejected badge -->
          ${(s||a)&&e.error?f`<div class="error-badge" title=${e.error}>${e.error}</div>`:$}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(s||a)&&e.duration!=null&&e.duration>0?f`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:$}
        </div>

        <!-- Action buttons -->
        <div class="actions">
          ${i&&e.isTus?f`
                <button class="act-btn pause" @click=${this._pause} title="Pause" aria-label="Pause upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:$}
          ${n?f`
                <button class="act-btn resume" @click=${this._resume} title="Resume" aria-label="Resume upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:$}
          ${s?f`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:$}
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
            @change=${this._rename} @click=${h=>h.stopPropagation()} />
          <div class="meta">${l||""}${e.size?` · ${Re(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),r=Math.floor(e%60);return`${t}:${r.toString().padStart(2,"0")}`}_renderTypeIcon(e){switch(e){case"pdf":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;case"doc":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;case"vid":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;case"zip":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;default:return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`}}};hr.styles=Z`
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
  `;let it=hr;No([B({attribute:!1})],it.prototype,"file");No([z()],it.prototype,"_dims");const ct=Z`
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
`,dt=Z`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Fs=Object.defineProperty,pt=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Fs(e,t,i),i};const lo=7,gr=class gr extends W{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[]}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,lo),t=this.thumbnails.length-lo,r=this.fileCount>0,i=this.failedFiles.length>0,n=i&&!r;return f`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${n?"error":i?"warning":""}">
          ${n?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:i?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${n?"Upload failed":i?"Partially uploaded":"Uploaded successfully!"}</div>
        <div class="subtitle">${n?`${this.failedFiles.length===1?"File":"Files"} could not be uploaded`:i?`${this.fileCount} ${this.fileCount===1?"file":"files"} uploaded, ${this.failedFiles.length} failed`:"All files are ready for use"}</div>

        ${e.length>0?f`
              <div class="thumbs">
                ${e.map(s=>f`<img class="thumb" src=${s} alt="" />`)}
                ${t>0?f`<div class="thumb-more">+${t}</div>`:$}
              </div>
            `:$}

        ${r?f`<div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${Re(this.totalSize)} uploaded</div>`:$}

        ${i?f`
            <div class="failed-list">
              ${this.failedFiles.map(s=>f`
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
          `:$}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${i?f`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>`:$}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};gr.styles=[ct,dt,Z`
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
  `];let pe=gr;pt([B({type:Number})],pe.prototype,"fileCount");pt([B({type:Number})],pe.prototype,"totalSize");pt([B({type:Array})],pe.prototype,"thumbnails");pt([B({type:String})],pe.prototype,"primaryLabel");pt([B({type:Array})],pe.prototype,"failedFiles");var Bs=Object.defineProperty,ne=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Bs(e,t,i),i};const vr=class vr extends W{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.uploadDisabled=!1,this.uploadDisabledReason="",this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return f`
      ${e?f`
            <div class="progress-row">
              <div class="progress-track" role="progressbar" aria-valuenow=${Math.round(this.uploadProgress)} aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
                <div class="progress-fill" style="width:${this.uploadProgress}%"></div>
              </div>
              <span class="progress-label">${this.completedCount}/${this.fileCount} files</span>
            </div>
          `:$}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?f`
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
              `:$}
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
          ${this.failedCount>0?f`
                <button class="btn-retry" @click=${this._retryAll}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  Retry all (${this.failedCount})
                </button>
              `:$}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",r=["btn-primary",t?"done-state":""].filter(Boolean).join(" ");return f`
      <button
        class=${r}
        @click=${this._upload}
        ?disabled=${e||this.uploadDisabled}
        title=${this.uploadDisabled?this.uploadDisabledReason:""}
      >
        ${e?f`<span class="btn-spin"></span> Uploading\u2026`:t?f`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Done!
              `:f`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                </svg>
                Upload
              `}
      </button>
    `}};vr.styles=[ct,dt,Z`
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
  `];let ee=vr;ne([B({type:String})],ee.prototype,"uploadState");ne([B({type:Number})],ee.prototype,"fileCount");ne([B({type:Number})],ee.prototype,"totalSize");ne([B({type:Number})],ee.prototype,"failedCount");ne([B({type:Boolean})],ee.prototype,"showFillMetadata");ne([B({type:Boolean})],ee.prototype,"uploadDisabled");ne([B({type:String})],ee.prototype,"uploadDisabledReason");ne([B({type:Number})],ee.prototype,"completedCount");ne([B({type:Number})],ee.prototype,"uploadProgress");const Ms='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function lr(o,e){return t=>{if(t.key!=="Tab")return;const r=o();if(!r)return;const i=r.querySelector(e);if(!i)return;const n=Array.from(i.querySelectorAll(Ms));if(n.length===0)return;const s=n[0],a=n[n.length-1],l=r.activeElement;t.shiftKey?(l===s||!i.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!i.contains(l))&&(t.preventDefault(),s.focus())}}var Hs=Object.defineProperty,cr=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Hs(e,t,i),i};const mr=class mr extends W{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=lr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),r=t[t.length-1];if(r){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");i&&(i.placeholder=r)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let t=this._name.trim();if(!t)try{const r=new URL(e).pathname.split("/");t=r[r.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return f`
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
            ${this._error?f`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};mr.styles=[ct,dt,Z`
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

  `];let Le=mr;cr([z()],Le.prototype,"_url");cr([z()],Le.prototype,"_name");cr([z()],Le.prototype,"_error");var qs=Object.defineProperty,Et=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&qs(e,t,i),i};const xr=class xr extends W{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=lr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var i,n;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("video"),t=(n=this.shadowRoot)==null?void 0:n.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(s=>{s&&(this._captured=s,this._previewUrl=URL.createObjectURL(s),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return f`
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
            ${this._error?f`<div class="error">${this._error}</div>`:this._captured?f`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `:f`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};xr.styles=[ct,dt,Z`
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
  `];let ke=xr;Et([z()],ke.prototype,"_stream");Et([z()],ke.prototype,"_error");Et([z()],ke.prototype,"_captured");Et([z()],ke.prototype,"_previewUrl");var Ns=Object.defineProperty,ut=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Ns(e,t,i),i};const br=class br extends W{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=lr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const r=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:r}),this._recorder.ondataavailable=i=>{i.data.size>0&&this._chunks.push(i.data)},this._recorder.onstop=()=>{var n;const i=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=i,this._previewUrl=URL.createObjectURL(i),(n=this._stream)==null||n.getTracks().forEach(s=>s.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return f`
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
            ${this._error?f`<div class="error">${this._error}</div>`:this._recordedBlob?f`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `:this._recording?f`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `:f`
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
    `}};br.styles=[ct,dt,Z`
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
  `];let ue=br;ut([z()],ue.prototype,"_stream");ut([z()],ue.prototype,"_recording");ut([z()],ue.prototype,"_error");ut([z()],ue.prototype,"_recordedBlob");ut([z()],ue.prototype,"_previewUrl");var Vs=Object.defineProperty,Vo=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Vs(e,t,i),i};const yr=class yr extends W{constructor(){super(...arguments),this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const r=++this._nextId;this._toasts=[...this._toasts,{id:r,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(r),this.duration)}_dismiss(e){const t=this._toasts.findIndex(i=>i.id===e);if(t===-1)return;const r=[...this._toasts];r[t]={...r[t],leaving:!0},this._toasts=r,setTimeout(()=>{this._toasts=this._toasts.filter(i=>i.id!==e)},200)}_iconForType(e){return e==="error"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?f``:f`
      <div class="toast-stack">
        ${this._toasts.map(e=>f`
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
    `}};yr.styles=Z`
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
  `;let nt=yr;Vo([B({type:Number})],nt.prototype,"duration");Vo([z()],nt.prototype,"_toasts");customElements.define("sfx-toast",nt);var Ys=Object.defineProperty,Y=(o,e,t,r)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&Ys(e,t,i),i};const co=new Set(["unsplash"]),Ue={isTus:!1,tusUploadUrl:null};var J;const q=(J=class extends W{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._engine=null,this._cachedSources=Ve,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:r,value:i}=e.detail,n=this._store.getState().files.get(t);if(!n)return;const s=new Map(this._store.getState().files);s.set(t,{...n,meta:{...n.meta,[r]:i}}),this._store.setState({files:s})},this._onFilesSelected=e=>{this._processIncomingFiles(e.detail.files)},this._onDropTileSourceClick=e=>{this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var i,n;const t=this._mergedSources.find(s=>s.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(s){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,s)}return}if(e==="device"){const s=this.shadowRoot.querySelector("sfx-drop-zone");s==null||s.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((n=(i=this.config)==null?void 0:i.connectors)==null?void 0:n.providers)??[]).includes(e)){if(co.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:a}=await M(async()=>{const{SfxSearchProviderBrowser:l}=await import("./search-provider-browser-Bi-FsaCV.js");return{SfxSearchProviderBrowser:l}},[]);customElements.define("sfx-search-provider-browser",a)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:a}=await M(async()=>{const{SfxProviderBrowser:l}=await import("./provider-browser-D6P1IrGV.js");return{SfxProviderBrowser:l}},[]);customElements.define("sfx-provider-browser",a)}this._activeConnector=e}},this._onUrlSubmit=e=>{var h,v,C;this._showUrlDialog=!1;const{url:t,name:r}=e.detail,i=(h=this.config)==null?void 0:h.callbacks,n=$s(r),s=n.startsWith("image/"),a=this._store.getState(),l=Yt({name:r,size:0,type:n},a.restrictions,a.files);if(l){const w={id:Ee(),status:"rejected",file:null,remoteUrl:t,name:r,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:l,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ue};Se(this._store,w),this._dispatchPublic(F.FILE_REJECTED,{file:w,reason:l}),(v=i==null?void 0:i.onFileRejected)==null||v.call(i,w,l);return}const c={id:Ee(),status:"idle",file:null,remoteUrl:t,name:r,size:0,type:n,previewUrl:s?t:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ue};Se(this._store,c),this._dispatchPublic(F.FILE_ADDED,{file:c}),(C=i==null?void 0:i.onFileAdded)==null||C.call(i,c),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var r,i,n;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(F.FILE_PREVIEW,{file:t}),(n=(i=(r=this.config)==null?void 0:r.callbacks)==null?void 0:i.onFilePreview)==null||n.call(i,t))},this._onFillMetadata=()=>{var t,r,i,n;const e=[...this._store.getState().files.values()].filter(s=>J._MODIFIABLE_STATUSES.has(s.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataOpen=!0),this._dispatchPublic(F.FILL_METADATA,{files:e}),(n=(i=(r=this.config)==null?void 0:r.callbacks)==null?void 0:i.onFillMetadata)==null||n.call(i,e)},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const r=new Map(this._store.getState().files);for(const{fileId:i,meta:n}of t){const s=r.get(i);s&&r.set(i,{...s,meta:{...s.meta,...n}})}this._store.setState({files:r})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var r,i,n;const e=(r=this.config)==null?void 0:r.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(i=this._engine)==null||i.cancelAll();const t=[...this._store.getState().files.values()];for(const s of t)s.previewUrl&&URL.revokeObjectURL(s.previewUrl),this._dispatchPublic(F.FILE_REMOVED,{file:s}),(n=e==null?void 0:e.onFileRemoved)==null||n.call(e,s);this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var i;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),r=(i=t==null?void 0:t.shadowRoot)==null?void 0:i.querySelector('input[type="file"]');r==null||r.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onConnectorFilesSelected=e=>{var r,i,n;const t=(r=this.config)==null?void 0:r.callbacks;for(const s of e.detail.files){const a=this._store.getState(),l=Yt({name:s.name,size:s.size,type:s.mimeType},a.restrictions,a.files);if(l){const h={id:Ee(),status:"rejected",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:l,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Ue};Se(this._store,h),this._dispatchPublic(F.FILE_REJECTED,{file:h,reason:l}),(i=t==null?void 0:t.onFileRejected)==null||i.call(t,h,l);continue}const c={id:Ee(),status:"idle",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:s.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Ue};Se(this._store,c),this._dispatchPublic(F.FILE_ADDED,{file:c}),(n=t==null?void 0:t.onFileAdded)==null||n.call(t,c)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t,r,i,n;this._dispatchPublic(F.COMPLETE_ACTION,{}),(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCompleteAction)==null||r.call(t),((i=this.config)==null?void 0:i.mode)==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(F.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,r,i;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(F.COMPLETE_ACTION,{}),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCompleteAction)==null||i.call(r),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,r,i;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||i.call(r),this._dispatchPublic(F.CANCEL,{}),this.close()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var e,t,r,i;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onCancel)==null||i.call(r),this._dispatchPublic(F.CANCEL,{}),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{var r;e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t}}))},this._onKeyDown=e=>{var t,r;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const i=((t=this.config)==null?void 0:t.mode)??"modal",n=((r=this.config)==null?void 0:r.header)??(i==="modal"?"close":!0);(n==="close"||n==="back")&&(i==="modal"&&this._isOpen?this._onModalDismiss():i==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var r;e.preventDefault(),this._isResizing=!0;const t=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var s;this._splitRafId=0;const r=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-layout");if(!r)return;const i=r.getBoundingClientRect(),n=(t-i.left)/i.width*100;this._splitPct=Math.max(25,Math.min(75,n))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,r=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(!this._fullscreenZoomed||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],r=t.clientX-this._fsDragStartX,i=t.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+i,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=mi(),this._storeCtrl=new xi(this,this._store)}open(){var e,t,r;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onOpen)==null||r.call(t),this._dispatchPublic(F.OPEN,{}),this.requestUpdate())}close(){var e,t,r,i;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(i=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onClose)==null||i.call(r),this._dispatchPublic(F.CLOSE,{}),this.requestUpdate())}upload(){var i,n,s,a,l,c,h;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(v=>v.status==="idle"||v.status==="queued");if((n=(i=this.config)==null?void 0:i.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(F.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(F.UPLOAD_STARTED,{files:e}),(l=(a=(s=this.config)==null?void 0:s.callbacks)==null?void 0:a.onUploadStarted)==null||l.call(a,e),this._engine.uploadAll(),(c=this.config)!=null&&c.minimizeOnUpload&&((h=this.config)==null?void 0:h.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const r=this._store.getState().files,i=new Map(r);let n=!1;for(const s of e){const a=r.get(s.id);a&&(i.set(s.id,{...a,...s}),n=!0)}n&&this._store.setState({files:i})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,r){const i=this._store.getState().files,n=i.get(e);if(!n||!J._MODIFIABLE_STATUSES.has(n.status))return;const s=new Map(i);s.set(e,{...n,meta:t!=null?{...n.meta,...t}:n.meta,tags:r??n.tags}),this._store.setState({files:s})}updateFilesMeta(e){const t=this._store.getState().files,r=new Map(t);let i=!1;for(const{fileId:n,meta:s,tags:a}of e){const l=t.get(n);!l||!J._MODIFIABLE_STATUSES.has(l.status)||(r.set(n,{...l,meta:s!=null?{...l.meta,...s}:l.meta,tags:a??l.tags}),i=!0)}i&&this._store.setState({files:r})}updated(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,r=this._store.getState().files.get(t);r?this._getImageDimensions(r).then(i=>{this._previewFileId===t&&(this._previewDims=i?`${i.w} × ${i.h}`:"—")}):this._previewDims="—"}this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];this._isMinimized&&e.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),ce(this._renderFloatingPill(e),this._portalContainer)):this._portalContainer&&(ce($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange())}disconnectedCallback(){var e,t,r,i;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(t=this._portalContainer)==null||t.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(i=this._engine)==null||i.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.targetFolder&&(t.targetFolder=e.targetFolder),e.restrictions&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions}),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var i,n;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=ar(t.container),this._authHeaders=Vt(t),this._ensureEngine(),(i=this._engine)==null||i.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(e);return}const r=++this._authResolveId;try{const s=await ys(t);if(r!==this._authResolveId)return;this._apiBase=s.apiBase,this._authHeaders=s.headers,this._ensureEngine(),(n=this._engine)==null||n.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(e)}catch(s){if(r!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",s),this._showToast(this._formatAuthError(s))}}_formatAuthError(e){var r,i;const t=e instanceof Error?e.message:String(e);return(i=(r=this.config)==null?void 0:r.auth)!=null&&i.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var i;const r=(i=this.shadowRoot)==null?void 0:i.querySelector("sfx-toast");r==null||r.show(e,t)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new xs(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:r,createTagsAutocomplete:i}=await M(async()=>{const{fetchMetadataSchema:n,createTagsAutocomplete:s}=await import("./index-Cgpq16LW.js");return{fetchMetadataSchema:n,createTagsAutocomplete:s}},[]);this._metadataSchema=await r(this._apiBase,this._authHeaders,t.projectUuid,t),this._metadataAutocomplete=i(this._apiBase,this._authHeaders)}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(e,t){const r=t.trim();if(!r)return;const i=this._store.getState().files.get(e);if(!i||i.name===r)return;const n=new Map(this._store.getState().files);n.set(e,{...i,name:r}),this._store.setState({files:n})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:e.enforceRequiredBeforeUpload===!0?!0:e.enforceRequiredBeforeUpload==="auto"?this._metadataSchema.forceFillingOnUpload:!1}get _hasUnfilledRequiredMetadata(){if(!this._metadataEnforcing||!this._metadataSchema)return!1;const e=this._metadataSchema.fields.filter(r=>{var n;const i=(n=this.config)==null?void 0:n.metadataConfig;return i!=null&&i.requiredFields?i.requiredFields.includes(r.ckey):r.required===1});if(e.length===0)return!1;const t=[...this._store.getState().files.values()].filter(r=>r.status==="idle"||r.status==="queued"||r.status==="rejected");return e.some(r=>t.some(i=>{const n=i.meta[r.key];return n==null?!0:Array.isArray(n)||typeof n=="string"?n.length===0:!n}))}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_onStoreChange(){var i,n,s,a,l,c,h,v,C,w;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;const r=(i=this.config)==null?void 0:i.callbacks;for(const[A,S]of e.files){const E=t.files.get(A);if(E){if(E.status!==S.status)switch(S.status){case"uploading":E.status==="paused"&&(this._dispatchPublic(F.UPLOAD_RESUMED,{file:S}),(n=r==null?void 0:r.onUploadResumed)==null||n.call(r,S));break;case"complete":S.response&&(this._dispatchPublic(F.UPLOAD_COMPLETE,{file:S,response:S.response}),(s=r==null?void 0:r.onUploadComplete)==null||s.call(r,S,S.response));break;case"error":case"failed":{const D=new Error(S.error??"Upload failed");this._dispatchPublic(F.UPLOAD_ERROR,{file:S,error:D}),(a=r==null?void 0:r.onUploadError)==null||a.call(r,S,D),S.status==="failed"&&this._showToast(`${S.name}: ${S.error??"Upload failed"}`);break}case"retrying":this._dispatchPublic(F.UPLOAD_RETRY,{file:S,attempt:S.retryCount}),(l=r==null?void 0:r.onUploadRetry)==null||l.call(r,S,S.retryCount);break;case"paused":this._dispatchPublic(F.UPLOAD_PAUSED,{file:S}),(c=r==null?void 0:r.onUploadPaused)==null||c.call(r,S);break}S.status==="uploading"&&E.progress!==S.progress&&(this._dispatchPublic(F.UPLOAD_PROGRESS,{file:S,progress:S.progress,speed:S.speed}),(h=r==null?void 0:r.onUploadProgress)==null||h.call(r,S,S.progress,S.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const A=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:0;this._dispatchPublic(F.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:A}),(v=r==null?void 0:r.onTotalProgress)==null||v.call(r,e.totalProgress,e.totalSpeed,A)}if(t.isUploading&&!e.isUploading){const A=[...e.files.values()];if(!A.some(E=>E.status==="cancelled")){const E=A.filter(x=>x.status==="complete"),D=A.filter(x=>x.status==="failed"||x.status==="error");this._dispatchPublic(F.ALL_COMPLETE,{successful:E,failed:D}),(C=r==null?void 0:r.onAllComplete)==null||C.call(r,E,D);const m=(w=this.config)==null?void 0:w.closeOnComplete;if(m){const x=typeof m=="number"?m:1500;this._closeOnCompleteTimer=setTimeout(()=>{var g,b,O;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(F.COMPLETE_ACTION,{}),(O=(b=(g=this.config)==null?void 0:g.callbacks)==null?void 0:b.onCompleteAction)==null||O.call(b),this.close())},x)}}}}get _mergedSources(){var l;const e=(l=this.config)==null?void 0:l.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Ve,this._cachedSources;const t=e.providers.length>0?Es(e.providers):[],r=e.customSources??[],i=Ve.filter(c=>c.id==="device"||c.id==="url"),n=Ve.filter(c=>c.id!=="device"&&c.id!=="url"),s=new Set,a=[];for(const c of[...i,...t,...n,...r])if(!s.has(c.id)){if(J._RESERVED_IDS.has(c.id)&&c.onActivate){console.warn(`[sfx-uploader] Custom source id "${c.id}" conflicts with a built-in source and was skipped.`);continue}s.add(c.id),a.push(c)}return this._cachedSources=a,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return t.every(i=>r.has(i.status))&&t.some(i=>i.status==="complete"||i.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var r,i,n,s;const t=(r=this.config)==null?void 0:r.callbacks;for(const a of e){const l=this._store.getState(),c=Cs(a,l.restrictions,l.files);if(c){const C=a.type.startsWith("image/")?URL.createObjectURL(a):null,w={id:Ee(),status:"rejected",file:a,remoteUrl:null,name:a.name,size:a.size,type:a.type,previewUrl:C,duration:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ue};Se(this._store,w),this._dispatchPublic(F.FILE_REJECTED,{file:w,reason:c}),(i=t==null?void 0:t.onFileRejected)==null||i.call(t,w,c);const A=(n=this.config)==null?void 0:n.rejectedFileAutoRemoveDelay,S=A===!1||A===0||A===void 0?0:A;if(S>0){const E=w.id,D=setTimeout(()=>{this._rejectedTimers.delete(E);const m=this._store.getState().files.get(E);m&&m.status==="rejected"&&Tr(this._store,E)},S);this._rejectedTimers.set(E,D)}continue}let h=null;a.type.startsWith("image/")&&(h=URL.createObjectURL(a));const v={id:Ee(),status:"idle",file:a,remoteUrl:null,name:a.name,size:a.size,type:a.type,previewUrl:h,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Ue};if(Se(this._store,v),this._dispatchPublic(F.FILE_ADDED,{file:v}),(s=t==null?void 0:t.onFileAdded)==null||s.call(t,v),a.type.startsWith("video/")){Ss(a).then(w=>{if(!w)return;const A=this._store.getState(),S=A.files.get(v.id);if(S){const E=new Map(A.files);E.set(v.id,{...S,previewUrl:w}),this._store.setState({files:E})}else URL.revokeObjectURL(w)});const C=document.createElement("video");C.preload="metadata",C.src=URL.createObjectURL(a),C.onerror=()=>{URL.revokeObjectURL(C.src)},C.onloadedmetadata=()=>{const w=C.duration;if(URL.revokeObjectURL(C.src),!isFinite(w))return;const A=this._store.getState(),S=A.files.get(v.id);if(S){const E=new Map(A.files);E.set(v.id,{...S,duration:w}),this._store.setState({files:E})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(e){var n,s,a,l;const t=this._store.getState().files.get(e);if(!t)return;const r={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const c=this._videoBlobUrls.get(t.file);c&&(URL.revokeObjectURL(c),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((n=this._engine)==null||n.cancelFile(e)),Tr(this._store,e),this._dimCache.delete(e);const i=this._rejectedTimers.get(e);if(i&&(clearTimeout(i),this._rejectedTimers.delete(e)),this._previewFileId===e){const c=[...this._store.getState().files.values()];this._previewFileId=c.length>0?c[0].id:null}this._dispatchPublic(F.FILE_REMOVED,{file:r}),(l=(a=(s=this.config)==null?void 0:s.callbacks)==null?void 0:a.onFileRemoved)==null||l.call(a,r)}render(){var t;const e=((t=this.config)==null?void 0:t.mode)??"modal";return[...this._storeCtrl.state.files.values()],e==="modal"?f`
        ${this._isOpen&&!this._isMinimized?f`
          <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
            <div class="modal-card">
              ${this._renderHeader()}
              ${this._renderBody()}
              <sfx-toast></sfx-toast>
            </div>
          </div>
        `:$}
      `:f`
      <div class="inline">
        ${this._renderHeader()}
        ${this._renderBody()}
        <sfx-toast></sfx-toast>
      </div>
    `}_renderInlineHeader(e){return f`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?f`
            <div class="inline-header-accent">
              <div class="accent-line"></div>
              <span>${e.accent}</span>
            </div>
          `:$}
          ${e.title?f`<h2 class="inline-header-title">${e.title}</h2>`:$}
        </div>
        ${e.description?f`<div class="inline-header-desc">${e.description}</div>`:$}
      </div>
    `}_renderHeader(){var s,a,l;if(this._phase==="complete")return $;const e=((s=this.config)==null?void 0:s.mode)??"modal";if(this._phase==="uploading"){const c=this._storeCtrl.state,h=[...c.files.values()],v=h.filter(w=>w.status==="complete").length,C=c.totalSpeed>0?(c.totalBytes-c.totalBytesUploaded)/c.totalSpeed:0;return f`
        <div class="header upload-header">
          <div class="float-header-left">
            <div class="float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
            </div>
            <div>
              <div class="float-title">Uploading ${h.length} ${h.length===1?"file":"files"}</div>
              <div class="float-subtitle">${v} of ${h.length}${C>0?` · ~${zt(C)} left`:""}</div>
            </div>
          </div>
        </div>
      `}if(e==="inline"&&((a=this.config)!=null&&a.inlineHeader))return $;const t=((l=this.config)==null?void 0:l.header)??(e==="modal"?"close":!0);if(t===!1)return $;const r=e==="modal"?this._onModalDismiss:this._onInlineDismiss,i=t==="back"?f`<button class="header-btn header-btn-back" aria-label="Back to Asset Picker" @click=${r}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>`:$,n=t==="close"?f`<button class="header-btn header-btn-close" aria-label="Close" @click=${r}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>`:$;return f`
      <div class="header">
        ${i}
        ${t!=="back"?f`
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
          </svg>
        </div>`:$}
        <div class="header-title">Upload Files</div>
        ${n}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const r=new Image;r.onload=()=>{const i={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(e.id,i),t(i)},r.onerror=()=>{this._dimCache.set(e.id,null),t(null)},r.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var s;const t=this._storeCtrl.state,r=Math.round(t.totalProgress??0),i=e.filter(a=>a.status==="complete").length,n=t.totalSpeed>0?(t.totalBytes-t.totalBytesUploaded)/t.totalSpeed:0;return f`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${r}%</div>
        <div class="upload-overlay-title">Uploading ${e.length} ${e.length===1?"file":"files"}</div>
        <div class="upload-overlay-subtitle">${i} of ${e.length} complete${n>0?f` · ~${zt(n)} left`:$}</div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${r}%"></div>
        </div>
        ${(s=this.config)!=null&&s.minimizeOnUpload?f`<button class="upload-overlay-minimize" @click=${this._onMinimize}>Minimize & continue in background</button>`:$}
      </div>
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,r=Math.round(t.totalProgress??0),i=this._phase==="complete",n=e.filter(l=>l.status==="complete").length,s=e.filter(l=>l.status==="failed").length,a=t.totalSpeed>0?(t.totalBytes-t.totalBytesUploaded)/t.totalSpeed:0;return this._isPillExpanded===!1?f`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${i?s>0?n>0?f`<div class="float-collapsed-icon warn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>`:f`<div class="float-collapsed-icon error"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>`:f`<div class="float-collapsed-icon done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>`:f`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${i?s>0?n>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${e.length} ${e.length===1?"file":"files"}`}</span>
            ${i?$:f`<span class="float-collapsed-pct">${r}%</span>`}
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
      `:f`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${i?s>0?n>0?"warn":"error":"done":""}">
              ${i?s>0?n>0?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>`}
            </div>
            <div>
              <div class="float-title">${i?s>0?n>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${e.length} ${e.length===1?"file":"files"}`}</div>
              <div class="float-subtitle">${i?`${n} ${n===1?"file":"files"} uploaded${s>0?`, ${s} failed`:""}`:`${n} of ${e.length}${a>0?` · ~${zt(a)} left`:""}`}</div>
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
          ${e.map(l=>{const c=l.status==="failed"||l.status==="error";return f`
            <div class="float-item">
              <div class="float-item-thumb" style=${l.previewUrl?`background-image:url(${l.previewUrl});background-size:cover;background-position:center`:""}>
                ${l.previewUrl?$:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`}
              </div>
              <div class="float-item-info">
                <div class="float-item-name">${l.name}</div>
                <div class="float-item-size">${Re(l.size)}</div>
              </div>
              <div class="float-item-status">
                ${l.status==="complete"?f`<div class="float-item-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>`:c?f`
                        <div class="float-item-error-wrap">
                          <svg class="float-item-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          <span class="float-item-tooltip">${l.error||"Upload failed"}</span>
                        </div>
                        <button class="float-item-retry" @click=${()=>{var h;this._ensureEngine(),(h=this._engine)==null||h.retryFile(l.id)}}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                        </button>`:l.status==="paused"?f`<svg viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" width="16" height="16"><rect x="6" y="4" width="4" height="16" rx="1" fill="#d97706"/><rect x="14" y="4" width="4" height="16" rx="1" fill="#d97706"/></svg>`:f`<div class="float-item-spinner"></div>`}
              </div>
            </div>
          `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var n,s,a,l;if(e.length===0)return $;const t=e.find(c=>c.id===this._previewFileId)??e[0],r=((n=t.name.split(".").pop())==null?void 0:n.toUpperCase())||"";new Date(t.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const i=e.reduce((c,h)=>c+(h.size||0),0);return f`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&((a=this.config)!=null&&a.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):$}
          <div class="file-grid-header">
            <span class="file-grid-header-text">${e.length} ${e.length===1?"asset":"assets"} · ${Re(i)}</span>
          </div>
          <sfx-file-list
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${no(this._storeCtrl.state.restrictions)}
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
              @change=${c=>this._onPreviewRename(t.id,c.target.value)}
            />
            <div class="preview-header-actions">
              ${t.previewUrl||t.type.startsWith("video/")&&t.file?f`
                <button @click=${()=>{this._fullscreenPreviewUrl=t.previewUrl,this._fullscreenVideoFile=t.type.startsWith("video/")&&t.file?t.file:null,this._fullscreenZoomed=!1}} title="Fullscreen">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
              `:$}
              <button @click=${()=>{this._previewFileId=null}} title="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          ${t.type.startsWith("video/")&&t.file?f`
                <div class="preview-img-wrap">
                  <video class="preview-image" src=${this._getVideoBlobUrl(t.file)} controls playsinline></video>
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `:t.previewUrl?f`
                <div class="preview-img-wrap">
                  <img class="preview-image" src=${t.previewUrl} alt=${t.name} />
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `:f`
                <div class="preview-doc-wrap ${Ne(t)}">
                  <div class="preview-doc-icon ${Ne(t)}">
                    ${this._renderDocTypeIcon(Ne(t))}
                    <span class="preview-doc-ext ${Ne(t)}">${r}</span>
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
            <div class="preview-file-info">${r}${t.size?` · ${Re(t.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}</div>
          </div>
          ${this._metadataSchema&&((l=this.config)!=null&&l.metadataConfig)?f`
                <div class="preview-metadata" @field-blur=${this._onPreviewMetadataBlur}>
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${t.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:$}
        </div>
      </div>
    `}_renderDocTypeIcon(e){switch(e){case"pdf":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;case"doc":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;case"vid":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;case"zip":return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;default:return f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`}}_navigatePreview(e,t){var n;const i=e.findIndex(s=>s.id===this._previewFileId)+t;if(i>=0&&i<e.length){const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-image[controls]");s&&(s.pause(),s.removeAttribute("src"),s.load()),this._previewFileId=e[i].id}}_renderBody(){var s,a,l,c,h,v,C;const e=this._storeCtrl.state,t=[...e.files.values()],r=this._phase,i=no(e.restrictions),n=t.length>0;return f`
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
          @dragenter=${n?this._onBodyDragEnter:$}
          @dragover=${n?this._onBodyDragOver:$}
          @dragleave=${n?this._onBodyDragLeave:$}
          @drop=${n?this._onBodyDrop:$}
        >
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&((a=this.config)!=null&&a.inlineHeader)&&!this._previewFileId&&r!=="uploading"&&r!=="complete"?this._renderInlineHeader(this.config.inlineHeader):$}
          ${r==="complete"?f`
                  <sfx-success-card
                    .fileCount=${t.filter(w=>w.status==="complete").length}
                    .totalSize=${t.filter(w=>w.status==="complete").reduce((w,A)=>w+(A.size||0),0)}
                    .thumbnails=${t.filter(w=>w.status==="complete"&&w.previewUrl).map(w=>w.previewUrl)}
                    .failedFiles=${t.filter(w=>w.status==="failed").map(w=>({id:w.id,name:w.name,error:w.error||"Upload failed"}))}
                    @close-uploader=${this._onSuccessCardClose}
                    @file-retry=${this._onFileRetry}
                    @retry-all=${this._onRetryAll}
                  ></sfx-success-card>
                `:r==="uploading"?this._renderUploadOverlay(t):f`
                  ${n?$:f`<sfx-drop-zone
                        .compact=${n}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${i}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((l=this.config)==null?void 0:l.sourcesLayout)??"pills"}
                      ></sfx-drop-zone>`}

                  ${n?this._previewFileId?this._renderPreviewLayout(t):f`
                          <div class="asset-count">${t.length} ${t.length===1?"file":"files"} · ${Re(t.reduce((w,A)=>w+(A.size||0),0))}</div>
                          <sfx-file-list
                            .files=${t}
                            .showDropTile=${!0}
                            .sources=${this._mergedSources}
                            .accept=${i}
                            @source-click=${this._onDropTileSourceClick}
                          ></sfx-file-list>
                        `:$}
                `}
        </div>

        ${n&&r!=="complete"&&r!=="uploading"?f`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((w,A)=>w+(A.size||0),0)}
                .failedCount=${t.filter(w=>w.status==="failed"||w.status==="error").length}
                .completedCount=${t.filter(w=>w.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((c=this.config)==null?void 0:c.showFillMetadata)??((h=this.config)==null?void 0:h.metadataConfig))}
                .uploadDisabled=${this._hasUnfilledRequiredMetadata}
                .uploadDisabledReason=${this._hasUnfilledRequiredMetadata?"Fill required metadata first":""}
              ></sfx-actions-bar>
            `:$}

        ${this._showUrlDialog?f`<sfx-url-dialog></sfx-url-dialog>`:$}
        ${this._showCameraDialog?f`<sfx-camera-dialog></sfx-camera-dialog>`:$}
        ${this._showScreenCastDialog?f`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:$}
        ${this._activeConnector&&((v=this.config)!=null&&v.connectors)?f`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${co.has(this._activeConnector)?f`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `:f`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:$}


        ${this._bulkMetadataOpen&&this._metadataSchema?f`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(w=>J._MODIFIABLE_STATUSES.has(w.status))}
                .config=${((C=this.config)==null?void 0:C.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:$}

        ${this._fullscreenPreviewUrl||this._fullscreenVideoFile?f`
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
                <div class="fs-toolbar" @click=${w=>w.stopPropagation()}>
                  <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
                    ${this._fullscreenZoomed?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
                  </button>
                  <button class="fs-btn" @click=${this._onFsClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                ${this._fullscreenVideoFile?f`<video
                      class="fs-img"
                      src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
                      controls playsinline
                      draggable="false"
                      @click=${w=>w.stopPropagation()}
                    ></video>`:f`<img
                      class="fs-img"
                      src=${this._fullscreenPreviewUrl}
                      alt=""
                      style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""}
                      draggable="false"
                    />`}
                <button class="fs-nav prev" @click=${w=>{w.stopPropagation(),this._navigateFs(-1)}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button class="fs-nav next" @click=${w=>{w.stopPropagation(),this._navigateFs(1)}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                </button>
              </div>
            `:$}
      </div>
    `}_navigateFs(e){const t=[...this._store.getState().files.values()].filter(n=>n.previewUrl||n.type.startsWith("video/")&&n.file),r=t.findIndex(n=>n.id===this._previewFileId);if(r===-1)return;const i=r+e;if(i>=0&&i<t.length){const n=t[i];this._fullscreenPreviewUrl=n.previewUrl,this._fullscreenVideoFile=n.type.startsWith("video/")&&n.file?n.file:null,this._previewFileId=n.id,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},J.styles=Z`
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
  `,J._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),J._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),J);Y([B({attribute:!1})],q.prototype,"config");Y([z()],q.prototype,"_isOpen");Y([z()],q.prototype,"_activeConnector");Y([z()],q.prototype,"_showUrlDialog");Y([z()],q.prototype,"_showCameraDialog");Y([z()],q.prototype,"_showScreenCastDialog");Y([z()],q.prototype,"_previewFileId");Y([z()],q.prototype,"_previewDims");Y([z()],q.prototype,"_splitPct");Y([z()],q.prototype,"_fullscreenPreviewUrl");Y([z()],q.prototype,"_fullscreenVideoFile");Y([z()],q.prototype,"_fullscreenZoomed");Y([z()],q.prototype,"_bodyDragOver");Y([z()],q.prototype,"_isMinimized");Y([z()],q.prototype,"_isPillExpanded");Y([z()],q.prototype,"_metadataSchema");Y([z()],q.prototype,"_bulkMetadataOpen");let Ws=q;const re=(o,e)=>{typeof customElements<"u"&&!customElements.get(o)&&customElements.define(o,e)};re("sfx-uploader",Ws);re("sfx-drop-zone",Q);re("sfx-import-divider",Kt);re("sfx-source-pills",$t);re("sfx-file-list",de);re("sfx-file-item",it);re("sfx-success-card",pe);re("sfx-actions-bar",ee);re("sfx-url-dialog",Le);re("sfx-camera-dialog",ke);re("sfx-screen-cast-dialog",ue);const Gs=[{pattern:"/",load:()=>M(()=>import("./landing-DeSN5egy.js"),[]).then(o=>o.default)},{pattern:"/docs/getting-started",load:()=>M(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(o=>o.default)},{pattern:"/docs/configuration",load:()=>M(()=>import("./configuration-Be4_OpLg.js"),__vite__mapDeps([2,1])).then(o=>o.default)},{pattern:"/docs/api",load:()=>M(()=>import("./api-DLlEwElO.js"),__vite__mapDeps([3,1])).then(o=>o.default)},{pattern:"/docs/theming",load:()=>M(()=>import("./theming-DYcOCIUI.js"),__vite__mapDeps([4,1])).then(o=>o.default)},{pattern:"/docs/types",load:()=>M(()=>import("./types-BP9Z4Qnu.js"),__vite__mapDeps([5,1])).then(o=>o.default)},{pattern:"/examples/basic",load:()=>M(()=>import("./basic-2N-b445J.js"),__vite__mapDeps([6,7])).then(o=>o.default)},{pattern:"/examples/auto-upload",load:()=>M(()=>import("./auto-upload-m-zBoEf8.js"),__vite__mapDeps([8,7])).then(o=>o.default)},{pattern:"/examples/restrictions",load:()=>M(()=>import("./restrictions-BoZy7ZbL.js"),__vite__mapDeps([9,7,10])).then(o=>o.default)},{pattern:"/examples/target-folder",load:()=>M(()=>import("./target-folder-BcyV-M2r.js"),__vite__mapDeps([11,7])).then(o=>o.default)},{pattern:"/examples/concurrency",load:()=>M(()=>import("./concurrency-ZroY7yYT.js"),__vite__mapDeps([12,7,10])).then(o=>o.default)},{pattern:"/examples/events",load:()=>M(()=>import("./events-Bohy30YO.js"),__vite__mapDeps([13,7])).then(o=>o.default)},{pattern:"/examples/modal",load:()=>M(()=>import("./modal-DhKCBmb2.js"),__vite__mapDeps([14,7])).then(o=>o.default)},{pattern:"/examples/inline",load:()=>M(()=>import("./inline-DZd73O8y.js"),__vite__mapDeps([15,7])).then(o=>o.default)},{pattern:"/examples/sources-layout",load:()=>M(()=>import("./sources-layout-D2W4f7dR.js"),__vite__mapDeps([16,7])).then(o=>o.default)},{pattern:"/examples/header-button",load:()=>M(()=>import("./header-button-D6t8JbD1.js"),__vite__mapDeps([17,7])).then(o=>o.default)},{pattern:"/examples/minimize-to-background",load:()=>M(()=>import("./minimize-to-background-JnDJzSNx.js"),__vite__mapDeps([18,7])).then(o=>o.default)},{pattern:"/examples/resumable-upload",load:()=>M(()=>import("./resumable-upload-B7DzmkN1.js"),__vite__mapDeps([19,7,10])).then(o=>o.default)},{pattern:"/examples/react-wrapper",load:()=>M(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([20,1])).then(o=>o.default)},{pattern:"/examples/metadata",load:()=>M(()=>import("./metadata-Bwmt6bxP.js"),__vite__mapDeps([21,7])).then(o=>o.default)},{pattern:"/examples/full-screen",load:()=>M(()=>import("./full-screen-q6x98qv5.js"),[]).then(o=>o.default)}];let Be=null,po=0;function Ks(o){const e=document.getElementById("content"),t=document.getElementById("sidebar"),r=document.getElementById("sidebar-docs"),i=document.getElementById("sidebar-examples"),n=document.querySelectorAll(".topbar-nav-link");async function s(){const a=location.hash.slice(1)||"/",l=++po;Be!=null&&Be.destroy&&Be.destroy();const c=Gs.find(E=>E.pattern===a);if(!c){location.hash="#/";return}const h=a.startsWith("/docs/"),v=a.startsWith("/examples/"),C=h||v,w=a==="/";t.classList.toggle("hidden",!C),document.body.classList.toggle("has-sidebar",C),document.body.classList.toggle("is-home",w),r.classList.toggle("hidden",!h),i.classList.toggle("hidden",!v),t.querySelectorAll(".sidebar-link").forEach(E=>{E.classList.toggle("active",E.getAttribute("data-route")===a)});const A=h?"docs":v?"examples":"home";n.forEach(E=>{E.classList.toggle("active",E.getAttribute("data-section")===A)}),t.classList.remove("mobile-open"),window.scrollTo(0,0);const S=await c.load();l===po&&(Be=S,e.innerHTML=S.render(),S.init&&S.init(o))}window.addEventListener("hashchange",s),s()}const Yo="sfx-uploader-demo-auth",uo={container:"",securityTemplateId:""};function Wo(){try{const o=localStorage.getItem(Yo);if(o)return{...uo,...JSON.parse(o)}}catch{}return{...uo}}function Xs(o){localStorage.setItem(Yo,JSON.stringify(o))}function aa(o={}){const{container:e,securityTemplateId:t}=Wo();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://companion.scaleflex.com",providers:["google-drive","dropbox","box","onedrive"]},...o}}function Zs(){const o=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),r=document.getElementById("auth-sec-template"),i=document.getElementById("auth-save"),n=Wo();t.value=n.container,r.value=n.securityTemplateId,o.addEventListener("click",s=>{s.stopPropagation(),e.classList.toggle("hidden")}),i.addEventListener("click",()=>{Xs({container:t.value.trim(),securityTemplateId:r.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",s=>{!e.contains(s.target)&&!o.contains(s.target)&&e.classList.add("hidden")})}Zs();const Js=document.getElementById("uploader");Ks(Js);var ho;(ho=document.getElementById("sidebar-toggle"))==null||ho.addEventListener("click",()=>{var o;(o=document.getElementById("sidebar"))==null||o.classList.toggle("mobile-open")});export{$ as A,Z as a,aa as b,f as c,ra as d,oa as e,tr as f,Es as g,ia as h,W as i,Re as j,sa as l,B as n,me as o,z as r,na as s,ge as w};
