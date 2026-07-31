const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-DGfC48Am.js","assets/api-C3Pu2Ua4.js","assets/theming-DHk87o6W.js","assets/types-HFUEcb6v.js","assets/basic-Dy4tHafG.js","assets/code-block-C_3oxnLY.js","assets/auto-upload-BE3RPbfi.js","assets/restrictions-B-3CG8eS.js","assets/custom-select-mLCaw8r4.js","assets/target-folder-BXsILuJ7.js","assets/concurrency-ChuKhgbR.js","assets/events-UY0ZO9w4.js","assets/modal-DBNFk9iQ.js","assets/inline-CNKJzjtQ.js","assets/sources-layout-XNo-xed8.js","assets/core-sources-C2RkAuTT.js","assets/custom-source-T9Om1WiX.js","assets/header-button-DFiuaX2R.js","assets/minimize-to-background-D3_37Ylg.js","assets/resumable-upload-Bj2gnV53.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-Do7vRuJj.js","assets/similar-check-Db5vX6Tm.js","assets/upload-settings-D1NefX4Z.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Il="modulepreload",Fl=function(s){return"/uploader/"+s},Do={},Y=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let n=function(d){return Promise.all(d.map(c=>Promise.resolve(c).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=n(t.map(d=>{if(d=Fl(d),d in Do)return;Do[d]=!0;const c=d.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Il,c||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((f,y)=>{h.addEventListener("load",f),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return r.then(n=>{for(const a of n||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=globalThis,Or=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tr=Symbol(),zo=new WeakMap;let va=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Or&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=zo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&zo.set(t,e))}return e}toString(){return this.cssText}};const Ll=s=>new va(typeof s=="string"?s:s+"",void 0,Tr),q=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new va(t,s,Tr)},Ul=(s,e)=>{if(Or)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=is.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},Mo=Or?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ll(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dl,defineProperty:zl,getOwnPropertyDescriptor:Ml,getOwnPropertyNames:jl,getOwnPropertySymbols:Bl,getPrototypeOf:Nl}=Object,rt=globalThis,jo=rt.trustedTypes,ql=jo?jo.emptyScript:"",Ms=rt.reactiveElementPolyfillSupport,fi=(s,e)=>s,ds={toAttribute(s,e){switch(e){case Boolean:s=s?ql:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ir=(s,e)=>!Dl(s,e),Bo={attribute:!0,type:String,converter:ds,reflect:!1,useDefault:!1,hasChanged:Ir};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rt.litPropertyMetadata??(rt.litPropertyMetadata=new WeakMap);let Bt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Bo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&zl(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=Ml(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bo}static _$Ei(){if(this.hasOwnProperty(fi("elementProperties")))return;const e=Nl(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fi("properties"))){const t=this.properties,i=[...jl(t),...Bl(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Mo(r))}else e!==void 0&&t.push(Mo(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ul(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:ds).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o,n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:ds;this._$Em=r;const d=l.fromAttribute(t,a.type);this[r]=d??((n=this._$Ej)==null?void 0:n.get(r))??d,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){var n;if(e!==void 0){const a=this.constructor;if(r===!1&&(o=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Ir)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Bt.elementStyles=[],Bt.shadowRootOptions={mode:"open"},Bt[fi("elementProperties")]=new Map,Bt[fi("finalized")]=new Map,Ms==null||Ms({ReactiveElement:Bt}),(rt.reactiveElementVersions??(rt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=globalThis,No=s=>s,cs=gi.trustedTypes,qo=cs?cs.createPolicy("lit-html",{createHTML:s=>s}):void 0,ba="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,xa="?"+it,Hl=`<${xa}>`,St=document,bi=()=>St.createComment(""),xi=s=>s===null||typeof s!="object"&&typeof s!="function",Fr=Array.isArray,Vl=s=>Fr(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",js=`[ 	
\f\r]`,ni=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ho=/-->/g,Vo=/>/g,gt=RegExp(`>|${js}(?:([^\\s"'>=/]+)(${js}*=${js}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ko=/'/g,Go=/"/g,ya=/^(?:script|style|textarea|title)$/i,_a=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),p=_a(1),te=_a(2),Re=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Yo=new WeakMap,yt=St.createTreeWalker(St,129);function wa(s,e){if(!Fr(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return qo!==void 0?qo.createHTML(e):e}const Kl=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=ni;for(let a=0;a<t;a++){const l=s[a];let d,c,u=-1,h=0;for(;h<l.length&&(n.lastIndex=h,c=n.exec(l),c!==null);)h=n.lastIndex,n===ni?c[1]==="!--"?n=Ho:c[1]!==void 0?n=Vo:c[2]!==void 0?(ya.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=gt):c[3]!==void 0&&(n=gt):n===gt?c[0]===">"?(n=r??ni,u=-1):c[1]===void 0?u=-2:(u=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?gt:c[3]==='"'?Go:Ko):n===Go||n===Ko?n=gt:n===Ho||n===Vo?n=ni:(n=gt,r=void 0);const f=n===gt&&s[a+1].startsWith("/>")?" ":"";o+=n===ni?l+Hl:u>=0?(i.push(d),l.slice(0,u)+ba+l.slice(u)+it+f):l+it+(u===-2?a:f)}return[wa(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class yi{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[d,c]=Kl(e,t);if(this.el=yi.createElement(d,i),yt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=yt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(ba)){const h=c[n++],f=r.getAttribute(u).split(it),y=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:y[2],strings:f,ctor:y[1]==="."?Yl:y[1]==="?"?Wl:y[1]==="@"?Jl:ks}),r.removeAttribute(u)}else u.startsWith(it)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(ya.test(r.tagName)){const u=r.textContent.split(it),h=u.length-1;if(h>0){r.textContent=cs?cs.emptyScript:"";for(let f=0;f<h;f++)r.append(u[f],bi()),yt.nextNode(),l.push({type:2,index:++o});r.append(u[h],bi())}}}else if(r.nodeType===8)if(r.data===xa)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(it,u+1))!==-1;)l.push({type:7,index:o}),u+=it.length-1}o++}}static createElement(e,t){const i=St.createElement("template");return i.innerHTML=e,i}}function Yt(s,e,t=s,i){var n,a;if(e===Re)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=xi(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Yt(s,r._$AS(s,e.values),r,i)),e}class Gl{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??St).importNode(t,!0);yt.currentNode=r;let o=yt.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Xt(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new Xl(o,this,e)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=yt.nextNode(),n++)}return yt.currentNode=St,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Xt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Yt(this,e,t),xi(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.T(St.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=yi.createElement(wa(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new Gl(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=Yo.get(e.strings);return t===void 0&&Yo.set(e.strings,t=new yi(e)),t}k(e){Fr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new Xt(this.O(bi()),this.O(bi()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=No(e).nextSibling;No(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ks{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=Yt(this,e,t,0),n=!xi(e)||e!==this._$AH&&e!==Re,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=Yt(this,a[i+l],t,l),d===Re&&(d=this._$AH[l]),n||(n=!xi(d)||d!==this._$AH[l]),d===x?e=x:e!==x&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Yl extends ks{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}class Wl extends ks{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}}class Jl extends ks{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=Yt(this,e,t,0)??x)===Re)return;const i=this._$AH,r=e===x&&i!==x||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==x&&(i===x||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Xl{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Yt(this,e)}}const Zl={I:Xt},Bs=gi.litHtmlPolyfillSupport;Bs==null||Bs(yi,Xt),(gi.litHtmlVersions??(gi.litHtmlVersions=[])).push("3.3.3");const ot=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Xt(e.insertBefore(bi(),o),o,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=globalThis;let W=class extends Bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ot(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Re}};var ga;W._$litElement$=!0,W.finalized=!0,(ga=wt.litElementHydrateSupport)==null||ga.call(wt,{LitElement:W});const Ns=wt.litElementPolyfillSupport;Ns==null||Ns({LitElement:W});(wt.litElementVersions??(wt.litElementVersions=[])).push("4.2.2");const qs=(s,e)=>s.replace(/\{\{(\w+)\}\}/g,(t,i)=>String(e[i]??"")),Ae=(s,e,t)=>{if(typeof e=="string")return qs(e,t??{});if(typeof e=="object"&&e!==null){const i=e,r=i.count;if(r!==void 0){const o=String((r===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??s);return qs(o,i)}return qs(String(i.defaultValue??s),i)}return s},M=s=>typeof s=="string",ai=()=>{let s,e;const t=new Promise((i,r)=>{s=i,e=r});return t.resolve=s,t.reject=e,t},Wo=s=>s==null?"":""+s,Ql=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},ed=/###/g,Jo=s=>s&&s.indexOf("###")>-1?s.replace(ed,"."):s,Xo=s=>!s||M(s),mi=(s,e,t)=>{const i=M(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(Xo(s))return{};const o=Jo(i[r]);!s[o]&&t&&(s[o]=new t),Object.prototype.hasOwnProperty.call(s,o)?s=s[o]:s={},++r}return Xo(s)?{}:{obj:s,k:Jo(i[r])}},Zo=(s,e,t)=>{const{obj:i,k:r}=mi(s,e,Object);if(i!==void 0||e.length===1){i[r]=t;return}let o=e[e.length-1],n=e.slice(0,e.length-1),a=mi(s,n,Object);for(;a.obj===void 0&&n.length;)o=`${n[n.length-1]}.${o}`,n=n.slice(0,n.length-1),a=mi(s,n,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=t},td=(s,e,t,i)=>{const{obj:r,k:o}=mi(s,e,Object);r[o]=r[o]||[],r[o].push(t)},us=(s,e)=>{const{obj:t,k:i}=mi(s,e);if(t)return t[i]},id=(s,e,t)=>{const i=us(s,t);return i!==void 0?i:us(e,t)},ka=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?M(s[i])||s[i]instanceof String||M(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):ka(s[i],e[i],t):s[i]=e[i]);return s},It=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var sd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const rd=s=>M(s)?s.replace(/[&<>"'\/]/g,e=>sd[e]):s;class od{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const nd=[" ",",","?","!",";"],ad=new od(20),ld=(s,e,t)=>{e=e||"",t=t||"";const i=nd.filter(n=>e.indexOf(n)<0&&t.indexOf(n)<0);if(i.length===0)return!0;const r=ad.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let o=!r.test(s);if(!o){const n=s.indexOf(t);n>0&&!r.test(s.substring(0,n))&&(o=!0)}return o},tr=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const i=e.split(t);let r=s;for(let o=0;o<i.length;){if(!r||typeof r!="object")return;let n,a="";for(let l=o;l<i.length;++l)if(l!==o&&(a+=t),a+=i[l],n=r[a],n!==void 0){if(["string","number","boolean"].indexOf(typeof n)>-1&&l<i.length-1)continue;o+=l-o+1;break}r=n}return r},ps=s=>s&&s.replace("_","-"),dd={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};class hs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||dd,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,r){return r&&!this.debug?null:(M(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new hs(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new hs(this.logger,e)}}var Ne=new hs;class $s{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(t)||0;this.observers[i].set(t,r+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(n=>{let[a,l]=n;for(let d=0;d<l;d++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(n=>{let[a,l]=n;for(let d=0;d<l;d++)a.apply(a,[e,...i])})}}class Qo extends $s{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,n=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):M(i)&&o?a.push(...i.split(o)):a.push(i)));const l=us(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!M(i)?l:tr(this.data&&this.data[e]&&this.data[e][t],i,o)}addResource(e,t,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),Zo(this.data,a,r),o.silent||this.emit("added",e,t,i,r)}addResources(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in i)(M(i[o])||Array.isArray(i[o]))&&this.addResource(e,t,o,i[o],{silent:!0});r.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,r,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=t,t=a[1]),this.addNamespaces(t);let l=us(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?ka(l,i,o):l={...l,...i},Zo(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(r=>t[r]&&Object.keys(t[r]).length>0)}toJSON(){return this.data}}var $a={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,r){return s.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,t,i,r))}),e}};const en={};class fs extends $s{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ql(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ne.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return i&&i.res!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const n=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!ld(e,i,r);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:M(o)?[o]:o};const d=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(d[0])>-1)&&(o=d.shift()),e=d.join(r)}return{key:e,namespaces:M(o)?[o]:o}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:n,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],d=t.lng||this.language,c=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(c){const b=t.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${b}${n}`,usedKey:n,exactUsedKey:n,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${b}${n}`}return r?{res:n,usedKey:n,exactUsedKey:n,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:n}const u=this.resolve(e,t);let h=u&&u.res;const f=u&&u.usedKey||n,y=u&&u.exactUsedKey||n,g=Object.prototype.toString.apply(h),S=["[object Number]","[object Function]","[object RegExp]"],E=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,C=!M(h)&&typeof h!="boolean"&&typeof h!="number";if(k&&h&&C&&S.indexOf(g)<0&&!(M(E)&&Array.isArray(h))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const b=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...t,ns:a}):`key '${n} (${this.language})' returned an object instead of string.`;return r?(u.res=b,u.usedParams=this.getUsedParamsDetails(t),u):b}if(o){const b=Array.isArray(h),w=b?[]:{},T=b?y:f;for(const A in h)if(Object.prototype.hasOwnProperty.call(h,A)){const U=`${T}${o}${A}`;w[A]=this.translate(U,{...t,joinArrays:!1,ns:a}),w[A]===U&&(w[A]=h[A])}h=w}}else if(k&&M(E)&&Array.isArray(h))h=h.join(E),h&&(h=this.extendTranslation(h,e,t,i));else{let b=!1,w=!1;const T=t.count!==void 0&&!M(t.count),A=fs.hasDefaultValue(t),U=T?this.pluralResolver.getSuffix(d,t.count,t):"",D=t.ordinal&&T?this.pluralResolver.getSuffix(d,t.count,{ordinal:!1}):"",K=T&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),X=K&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${U}`]||t[`defaultValue${D}`]||t.defaultValue;!this.isValidLookup(h)&&A&&(b=!0,h=X),this.isValidLookup(h)||(w=!0,h=n);const z=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,le=A&&X!==h&&this.options.updateMissing;if(w||b||le){if(this.logger.log(le?"updateKey":"missingKey",d,l,n,le?X:h),o){const _=this.resolve(n,{...t,keySeparator:!1});_&&_.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let be=[];const $=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&$&&$[0])for(let _=0;_<$.length;_++)be.push($[_]);else this.options.saveMissingTo==="all"?be=this.languageUtils.toResolveHierarchy(t.lng||this.language):be.push(t.lng||this.language);const v=(_,O,F)=>{const I=A&&F!==h?F:z;this.options.missingKeyHandler?this.options.missingKeyHandler(_,l,O,I,le,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(_,l,O,I,le,t),this.emit("missingKey",_,l,O,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?be.forEach(_=>{const O=this.pluralResolver.getSuffixes(_,t);K&&t[`defaultValue${this.options.pluralSeparator}zero`]&&O.indexOf(`${this.options.pluralSeparator}zero`)<0&&O.push(`${this.options.pluralSeparator}zero`),O.forEach(F=>{v([_],n+F,t[`defaultValue${F}`]||X)})}):v(be,n,X))}h=this.extendTranslation(h,e,t,u,i),w&&h===n&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${n}`),(w||b)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${n}`:n,b?h:void 0):h=this.options.parseMissingKeyHandler(h))}return r?(u.res=h,u.usedParams=this.getUsedParamsDetails(t),u):h}extendTranslation(e,t,i,r,o){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=M(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(d){const h=e.match(this.interpolator.nestingRegexp);c=h&&h.length}let u=i.replace&&!M(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||r.usedLng,i),d){const h=e.match(this.interpolator.nestingRegexp),f=h&&h.length;c<f&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,f=new Array(h),y=0;y<h;y++)f[y]=arguments[y];return o&&o[0]===f[0]&&!i.context?(n.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`),null):n.translate(...f,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=M(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=$a.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,o,n,a;return M(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,t),c=d.key;r=c;let u=d.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const h=t.count!==void 0&&!M(t.count),f=h&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),y=t.context!==void 0&&(M(t.context)||typeof t.context=="number")&&t.context!=="",g=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(S=>{this.isValidLookup(i)||(a=S,!en[`${g[0]}-${S}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(en[`${g[0]}-${S}`]=!0,this.logger.warn(`key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(E=>{if(this.isValidLookup(i))return;n=E;const k=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,c,E,S,t);else{let b;h&&(b=this.pluralResolver.getSuffix(E,t.count,t));const w=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(k.push(c+b),t.ordinal&&b.indexOf(T)===0&&k.push(c+b.replace(T,this.options.pluralSeparator)),f&&k.push(c+w)),y){const A=`${c}${this.options.contextSeparator}${t.context}`;k.push(A),h&&(k.push(A+b),t.ordinal&&b.indexOf(T)===0&&k.push(A+b.replace(T,this.options.pluralSeparator)),f&&k.push(A+w))}}let C;for(;C=k.pop();)this.isValidLookup(i)||(o=C,i=this.getResource(E,S,C,t))}))})}),{res:i,usedKey:r,exactUsedKey:o,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,r):this.resourceStore.getResource(e,t,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!M(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const o of t)delete r[o]}return r}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}const Hs=s=>s.charAt(0).toUpperCase()+s.slice(1);class tn{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ne.create("languageUtils")}getScriptPartFromCode(e){if(e=ps(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=ps(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(M(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Hs(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=Hs(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=Hs(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(t=r)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&(o.indexOf("-")>0&&r.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===r||o.indexOf(r)===0&&r.length>1))return o})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),M(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=n=>{n&&(this.isSupportedCode(n)?r.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return M(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):M(e)&&o(this.formatLanguageCode(e)),i.forEach(n=>{r.indexOf(n)<0&&o(this.formatLanguageCode(n))}),r}}let cd=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ud={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const pd=["v1","v2","v3"],hd=["v4"],sn={zero:0,one:1,two:2,few:3,many:4,other:5},fd=()=>{const s={};return cd.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:ud[e.fc]}})}),s};class gd{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Ne.create("pluralResolver"),(!this.options.compatibilityJSON||hd.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=fd(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=ps(e==="dev"?"en":e),r=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let n;try{n=new Intl.PluralRules(i,{type:r})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[o]=n,n}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${t}${r}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,o)=>sn[r]-sn[o]).map(r=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,t)):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!pd.includes(this.options.compatibilityJSON)}}const rn=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=id(s,e,t);return!o&&r&&M(t)&&(o=tr(s,t,i),o===void 0&&(o=tr(e,t,i))),o},Vs=s=>s.replace(/\$/g,"$$$$");class md{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ne.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:r,prefix:o,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:d,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:y,nestingSuffixEscaped:g,nestingOptionsSeparator:S,maxReplaces:E,alwaysFormat:k}=e.interpolation;this.escape=t!==void 0?t:rd,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=o?It(o):n||"{{",this.suffix=a?It(a):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=c?"":u||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=h?It(h):f||It("$t("),this.nestingSuffix=y?It(y):g||It(")"),this.nestingOptionsSeparator=S||",",this.maxReplaces=E||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t&&t.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,r){let o,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=f=>{if(f.indexOf(this.formatSeparator)<0){const E=rn(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,i,{...r,...t,interpolationkey:f}):E}const y=f.split(this.formatSeparator),g=y.shift().trim(),S=y.join(this.formatSeparator).trim();return this.format(rn(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),S,i,{...r,...t,interpolationkey:g})};this.resetRegExp();const c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>Vs(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?Vs(this.escape(f)):Vs(f)}].forEach(f=>{for(a=0;o=f.regex.exec(e);){const y=o[1].trim();if(n=d(y),n===void 0)if(typeof c=="function"){const S=c(e,o,r);n=M(S)?S:""}else if(r&&Object.prototype.hasOwnProperty.call(r,y))n="";else if(u){n=o[0];continue}else this.logger.warn(`missed to pass in variable ${y} for interpolating ${e}`),n="";else!M(n)&&!this.useRawValueToEscape&&(n=Wo(n));const g=f.safeValue(n);if(e=e.replace(o[0],g),u?(f.regex.lastIndex+=n.length,f.regex.lastIndex-=o[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,o,n;const a=(l,d)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const u=l.split(new RegExp(`${c}[ ]*{`));let h=`{${u[1]}`;l=u[0],h=this.interpolate(h,n);const f=h.match(/'/g),y=h.match(/"/g);(f&&f.length%2===0&&!y||y.length%2!==0)&&(h=h.replace(/'/g,'"'));try{n=JSON.parse(h),d&&(n={...d,...n})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${c}${h}`}return n.defaultValue&&n.defaultValue.indexOf(this.prefix)>-1&&delete n.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!M(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;let d=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const c=r[1].split(this.formatSeparator).map(u=>u.trim());r[1]=c.shift(),l=c,d=!0}if(o=t(a.call(this,r[1].trim(),n),n),o&&r[0]===e&&!M(o))return o;M(o)||(o=Wo(o)),o||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),o=""),d&&(o=l.reduce((c,u)=>this.format(c,u,i.lng,{...i,interpolationkey:r[1].trim()}),o.trim())),e=e.replace(r[0],o),this.regexp.lastIndex=0}return e}}const vd=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?t.currency||(t.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?t.range||(t.range=r.trim()):r.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();t[c]||(t[c]=d),d==="false"&&(t[c]=!1),d==="true"&&(t[c]=!0),isNaN(d)||(t[c]=parseInt(d,10))}})}return{formatName:e,formatOptions:t}},Ft=s=>{const e={};return(t,i,r)=>{let o=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(o={...o,[r.interpolationkey]:void 0});const n=i+JSON.stringify(o);let a=e[n];return a||(a=s(ps(i),r),e[n]=a),a(t)}};class bd{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ne.create("formatter"),this.options=e,this.formats={number:Ft((t,i)=>{const r=new Intl.NumberFormat(t,{...i});return o=>r.format(o)}),currency:Ft((t,i)=>{const r=new Intl.NumberFormat(t,{...i,style:"currency"});return o=>r.format(o)}),datetime:Ft((t,i)=>{const r=new Intl.DateTimeFormat(t,{...i});return o=>r.format(o)}),relativetime:Ft((t,i)=>{const r=new Intl.RelativeTimeFormat(t,{...i});return o=>r.format(o,i.range||"day")}),list:Ft((t,i)=>{const r=new Intl.ListFormat(t,{...i});return o=>r.format(o)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ft(t)}format(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:d,formatOptions:c}=vd(l);if(this.formats[d]){let u=a;try{const h=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},f=h.locale||h.lng||r.locale||r.lng||i;u=this.formats[d](a,f,{...c,...r,...h})}catch(h){this.logger.warn(h)}return u}else this.logger.warn(`there was no format function for ${d}`);return a},e)}}const xd=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class yd extends $s{constructor(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Ne.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,t,i,r){const o={},n={},a={},l={};return e.forEach(d=>{let c=!0;t.forEach(u=>{const h=`${d}|${u}`;!i.reload&&this.store.hasResourceBundle(d,u)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?n[h]===void 0&&(n[h]=!0):(this.state[h]=1,c=!1,n[h]===void 0&&(n[h]=!0),o[h]===void 0&&(o[h]=!0),l[u]===void 0&&(l[u]=!0)))}),c||(a[d]=!0)}),(Object.keys(o).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const r=e.split("|"),o=r[0],n=r[1];t&&this.emit("failedLoading",o,n,t),!t&&i&&this.store.addResourceBundle(o,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{td(l.loaded,[o],n),xd(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{a[d]||(a[d]={});const c=l.loaded[d];c.length&&c.forEach(u=>{a[d][u]===void 0&&(a[d][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,n=arguments.length>5?arguments[5]:void 0;if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:r,wait:o,callback:n});return}this.readingCalls++;const a=(d,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(d&&c&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,r+1,o*2,n)},o);return}n(d,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,t);d&&typeof d.then=="function"?d.then(c=>a(null,c)).catch(a):a(null,d)}catch(d){a(d)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();M(e)&&(e=this.languageUtils.toResolveHierarchy(e)),M(t)&&(t=[t]);const o=this.queueLoad(e,t,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,r,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...n,isUpdate:o},d=this.backend.create.bind(this.backend);if(d.length<6)try{let c;d.length===5?c=d(e,t,i,r,l):c=d(e,t,i,r),c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}else d(e,t,i,r,a,l)}!e||!e[0]||this.store.addResource(e[0],t,i,r)}}}const on=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),M(s[1])&&(e.defaultValue=s[1]),M(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),nn=s=>(M(s.ns)&&(s.ns=[s.ns]),M(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),M(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),Ki=()=>{},_d=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class _i extends $s{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=nn(e),this.services={},this.logger=Ne,this.modules={external:[]},_d(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(M(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=on();this.options={...r,...this.options,...nn(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const o=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?Ne.init(o(this.modules.logger),this.options):Ne.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=bd);const u=new tn(this.options);this.store=new Qo(this.options.resources,this.options);const h=this.services;h.logger=Ne,h.resourceStore=this.store,h.languageUtils=u,h.pluralResolver=new gd(u,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=o(c),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new md(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new yd(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var y=arguments.length,g=new Array(y>1?y-1:0),S=1;S<y;S++)g[S-1]=arguments[S];e.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new fs(this.services,this.options),this.translator.on("*",function(f){for(var y=arguments.length,g=new Array(y>1?y-1:0),S=1;S<y;S++)g[S-1]=arguments[S];e.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Ki),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const l=ai(),d=()=>{const c=(u,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(u,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ki;const r=M(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],n=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};r?n(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>n(l)),this.options.preload&&this.options.preload.forEach(a=>n(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,t,i){const r=ai();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Ki),this.services.backendConnector.reload(e,t,o=>{r.resolve(),i(o)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&$a.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const r=ai();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},n=(l,d)=>{d?(o(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const d=M(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);d&&(this.language||o(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,c=>{n(c,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),r}getFixedT(e,t,i){var r=this;const o=function(n,a){let l;if(typeof a!="object"){for(var d=arguments.length,c=new Array(d>2?d-2:0),u=2;u<d;u++)c[u-2]=arguments[u];l=r.options.overloadTranslationOptionHandler([n,a].concat(c))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||o.keyPrefix);const h=r.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(n)?f=n.map(y=>`${l.keyPrefix}${h}${y}`):f=l.keyPrefix?`${l.keyPrefix}${h}${n}`:n,r.t(f,l)};return M(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=i,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const d=this.services.backendConnector.state[`${a}|${l}`];return d===-1||d===0||d===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!r||n(o,e)))}loadNamespaces(e,t){const i=ai();return this.options.ns?(M(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),t&&t(r)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=ai();M(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter(n=>r.indexOf(n)<0&&this.services.languageUtils.isSupportedCode(n));return o.length?(this.options.preload=r.concat(o),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new tn(on());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new _i(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ki;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new _i(r);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i&&(o.store=new Qo(this.store.data,r),o.services.resourceStore=o.store),o.translator=new fs(o.services,r),o.translator.on("*",function(a){for(var l=arguments.length,d=new Array(l>1?l-1:0),c=1;c<l;c++)d[c-1]=arguments[c];o.emit(a,...d)}),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ge=_i.createInstance();ge.createInstance=_i.createInstance;ge.createInstance;ge.dir;ge.init;ge.loadResources;ge.reloadResources;ge.use;ge.changeLanguage;ge.getFixedT;ge.t;ge.exists;ge.setDefaultNamespace;ge.hasLoadedNamespace;ge.loadNamespaces;ge.loadLanguages;const Sa=["__proto__","constructor","prototype"];function Ca(s){return!(typeof s!="string"||s.length===0||s.length>128||Sa.indexOf(s)>-1||s.indexOf("..")>-1||s.indexOf("\\")>-1||/[?#%\s@]/.test(s)||/[\x00-\x1F\x7F]/.test(s))}function Ea(s){return!(!Ca(s)||s.indexOf("/")>-1)}function wd(s){return Ca(s)}const kd={lng:Ea,ns:wd};function Gi(s){return typeof s!="string"?s:s.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function $d(s){if(typeof s!="string"||s.length===0)return s;try{const e=new URL(s);return e.username||e.password?(e.username="",e.password="",e.toString()):s}catch{return s.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function Pa(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function Sd(s){return!!s&&typeof s.then=="function"}function Cd(s){return Sd(s)?s:Promise.resolve(s)}const Ed=/\{\{(.+?)\}\}/g;function an(s,e){let t=!1;const i=s.replace(Ed,(r,o)=>{const n=o.trim();if(Sa.indexOf(n)>-1)return r;const a=e[n];if(a==null)return r;const l=kd[n]||Ea,d=String(a).split("+");for(const c of d)if(!l(c))return t=!0,r;return d.join("+")});return t?null:i}const kt=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let gs;typeof fetch=="function"?gs=fetch:kt&&typeof kt.fetch=="function"&&(gs=kt.fetch);const ln=Pa()&&kt?kt.XMLHttpRequest:void 0,Pd=typeof ActiveXObject=="function"&&kt?kt.ActiveXObject:void 0,Ra=["__proto__","constructor","prototype"],ir=(s,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))Ra.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return s;s=s+(s.indexOf("?")!==-1?"&":"?")+t.slice(1)}return s},dn=(s,e,t,i)=>{const r=o=>{if(!o.ok)return t(o.statusText||"Error",{status:o.status});o.text().then(n=>{t(null,{status:o.status,data:n})}).catch(t)};if(i){const o=i(s,e);if(o instanceof Promise){o.then(r).catch(t);return}}typeof fetch=="function"?fetch(s,e).then(r).catch(t):gs(s,e).then(r).catch(t)},Rd=(s,e,t,i)=>{s.queryStringParams&&(e=ir(e,s.queryStringParams));const r={...typeof s.customHeaders=="function"?s.customHeaders():s.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(r["Content-Type"]="application/json");const o=typeof s.requestOptions=="function"?s.requestOptions(t):s.requestOptions,n={method:t?"POST":"GET",body:t?s.stringify(t):void 0,headers:r,...s._omitFetchOptions?{}:o},a=typeof s.alternateFetch=="function"&&s.alternateFetch.length>=1?s.alternateFetch:void 0;try{dn(e,n,i,a)}catch(l){if(!o||Object.keys(o).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(o).forEach(d=>{delete n[d]}),dn(e,n,i,a),s._omitFetchOptions=!0}catch(d){i(d)}}},Ad=(s,e,t,i)=>{t&&typeof t=="object"&&(t=ir("",t).slice(1)),s.queryStringParams&&(e=ir(e,s.queryStringParams));try{const r=ln?new ln:new Pd("MSXML2.XMLHTTP.3.0");r.open(t?"POST":"GET",e,1),s.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!s.withCredentials,t&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let o=s.customHeaders;if(o=typeof o=="function"?o():o,o)for(const n of Object.keys(o))Ra.indexOf(n)>-1||r.setRequestHeader(n,o[n]);r.onreadystatechange=()=>{r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(t)}catch(r){console&&console.log(r)}},Od=(s,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),gs&&e.indexOf("file:")!==0)return Rd(s,e,t,i);if(Pa()||typeof ActiveXObject=="function")return Ad(s,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},Td=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:s=>JSON.parse(s),stringify:JSON.stringify,parsePayload:(s,e,t)=>({[e]:t||""}),parseLoadPayload:(s,e)=>{},request:Od,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var Aa=class{constructor(s,e={},t={}){this.services=s,this.options=e,this.allOptions=t,this.type="backend",this.init(s,e,t)}init(s,e={},t={}){if(this.services=s,this.options={...Td(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(s,e,t){this._readAny(s,s,e,e,t)}read(s,e,t){this._readAny([s],s,[e],e,t)}_readAny(s,e,t,i,r){let o=this.options.loadPath;typeof this.options.loadPath=="function"&&(o=this.options.loadPath(s,t)),o=Cd(o),o.then(n=>{if(!n)return r(null,{});const a=an(n,{lng:s.join("+"),ns:t.join("+")});if(a==null){const l=s.map(Gi).join(", "),d=t.map(Gi).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+d+"]"),!1)}this.loadUrl(a,r,e,i)})}loadUrl(s,e,t,i){const r=typeof t=="string"?[t]:t,o=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(r,o),a=Gi($d(s));this.options.request(this.options,s,n,(l,d)=>{if(d&&(d.status>=500&&d.status<600||!d.status))return e("failed loading "+a+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return e("failed loading "+a+"; status code: "+d.status,!1);if(!d&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(f=>h.indexOf(f)>-1))return e("failed loading "+a+": "+Gi(l.message),!0)}if(l)return e(l,!1);let c,u;try{typeof d.data=="string"?c=this.options.parse(d.data,t,i):c=d.data}catch{u="failed parsing "+a+" to json"}if(u)return e(u,!1);e(null,c)})}create(s,e,t,i,r){if(!this.options.addPath)return;typeof s=="string"&&(s=[s]);const o=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];s.forEach(d=>{let c=this.options.addPath;typeof this.options.addPath=="function"&&(c=this.options.addPath(d,e));const u=an(c,{lng:d,ns:e});if(u==null){n+=1,r&&n===s.length&&r(a,l);return}this.options.request(this.options,u,o,(h,f)=>{n+=1,a.push(h),l.push(f),n===s.length&&typeof r=="function"&&r(a,l)})})}reload(){const{backendConnector:s,languageUtils:e,logger:t}=this.services,i=s.language;if(i&&i.toLowerCase()==="cimode")return;const r=[],o=n=>{e.toResolveHierarchy(n).forEach(a=>{r.indexOf(a)<0&&r.push(a)})};o(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>o(n)),r.forEach(n=>{this.allOptions.ns.forEach(a=>{s.read(n,a,"read",null,null,(l,d)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&d&&t.log(`loaded namespace ${a} for language ${n}`,d),s.loaded(`${n}|${a}`,l,d)})})})}};Aa.type="backend";const Id="https://i18n-fastly.ultrafast.io";function Oa(s){const e=s.cdnUrl??Id;let t=null;const i=new Set,r=()=>{for(const c of i)c()},o=c=>(i.add(c),()=>i.delete(c));async function n(c="en"){return t?(t.language!==c&&(await t.changeLanguage(c),r()),{i18n:t,isNew:!1}):(t=ge.createInstance(),await t.use(Aa).init({lng:c,fallbackLng:"en",ns:[s.namespace],defaultNS:s.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${s.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(u,h){var g;const f=JSON.parse(u),y=Array.isArray(h)?h[0]:h;return y&&((g=f[y])!=null&&g.__without_namespace)?f[y].__without_namespace:f}}}),t.on("languageChanged",r),t.on("loaded",r),r(),{i18n:t,isNew:!0})}const a=()=>t,l=(c,u,h)=>!t||!t.isInitialized?Ae(c,u,h):typeof u=="string"?t.t(c,u,h??{}):t.t(c,u??{});class d{constructor(u){this._unsubscribe=null,this._host=u,u.addController(this)}hostConnected(){this._unsubscribe=o(()=>this._host.requestUpdate())}hostDisconnected(){var u;(u=this._unsubscribe)==null||u.call(this),this._unsubscribe=null}}return{initI18n:n,getInstance:a,onChange:o,t:l,fallbackT:Ae,I18nController:d}}function Fd(s){const{lsKey:e,namespace:t,gridUuid:i,prodUrl:r,logPrefix:o}=s,n=typeof localStorage<"u"&&localStorage.getItem(e)==="true",a={};let l=null;const d=2e3;n&&console.log(`%c${o} TranslationMissingKeysHelper enabled`,"font-weight:600;");const c=()=>{console.group(`${o} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...a}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${r}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(a).map(([u,{value:h,ns:f}])=>({key:f&&u.startsWith(`${f}:`)?u.slice(f.length+1):u,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(u,h="",f=t){n&&(a[`${f}:${u}`]={value:h,ns:f},l&&clearTimeout(l),l=setTimeout(c,d))}}}const Ta="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Ld="https://i18n-fastly.ultrafast.io",Ud="https://neo.wordplex.io",Ia="uploader",Lr=Oa({gridUuid:Ta,namespace:Ia,cdnUrl:Ld}),Dd=Lr.initI18n,xt=Lr.t,zd=Lr.I18nController,Md=Fd({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:Ia,gridUuid:Ta,prodUrl:Ud,logPrefix:"[uploader]"});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jd={attribute:!0,type:String,converter:ds,reflect:!1,hasChanged:Ir},Bd=(s=jd,e,t)=>{const{kind:i,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,s,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function m(s){return(e,t)=>typeof t=="object"?Bd(s,e,t):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(s){return m({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nd=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ur(s,e){return(t,i,r)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(s))??null};return Nd(t,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Qt=s=>(...e)=>({_$litDirective$:s,values:e});let Ii=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:qd}=Zl,cn=s=>s,Hd=s=>s.strings===void 0,un=()=>document.createComment(""),li=(s,e,t)=>{var o;const i=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(un(),r),a=i.insertBefore(un(),r);t=new qd(n,a,s,s.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let d;(o=t._$AQ)==null||o.call(t,s),t._$AM=s,t._$AP!==void 0&&(d=s._$AU)!==a._$AU&&t._$AP(d)}if(n!==r||l){let d=t._$AA;for(;d!==n;){const c=cn(d).nextSibling;cn(i).insertBefore(d,r),d=c}}}return t},mt=(s,e,t=s)=>(s._$AI(e,t),s),Vd={},Kd=(s,e=Vd)=>s._$AH=e,Gd=s=>s._$AH,Ks=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn=(s,e,t)=>{const i=new Map;for(let r=e;r<=t;r++)i.set(s[r],r);return i},Ht=Qt(class extends Ii{constructor(s){if(super(s),s.type!==Zt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const r=[],o=[];let n=0;for(const a of s)r[n]=i?i(a,n):n,o[n]=t(a,n),n++;return{values:o,keys:r}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const r=Gd(s),{values:o,keys:n}=this.dt(e,t,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??(this.ut=[]),l=[];let d,c,u=0,h=r.length-1,f=0,y=o.length-1;for(;u<=h&&f<=y;)if(r[u]===null)u++;else if(r[h]===null)h--;else if(a[u]===n[f])l[f]=mt(r[u],o[f]),u++,f++;else if(a[h]===n[y])l[y]=mt(r[h],o[y]),h--,y--;else if(a[u]===n[y])l[y]=mt(r[u],o[y]),li(s,l[y+1],r[u]),u++,y--;else if(a[h]===n[f])l[f]=mt(r[h],o[f]),li(s,r[u],r[h]),h--,f++;else if(d===void 0&&(d=pn(n,f,y),c=pn(a,u,h)),d.has(a[u]))if(d.has(a[h])){const g=c.get(n[f]),S=g!==void 0?r[g]:null;if(S===null){const E=li(s,r[u]);mt(E,o[f]),l[f]=E}else l[f]=mt(S,o[f]),li(s,r[u],S),r[g]=null;f++}else Ks(r[h]),h--;else Ks(r[u]),u++;for(;f<=y;){const g=li(s,l[y+1]);mt(g,o[f]),l[f++]=g}for(;u<=h;){const g=r[u++];g!==null&&Ks(g)}return this.ut=n,Kd(s,l),Re}}),Gs=s=>s.includes("-")?s:s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Yd extends Ii{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Zt.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return Re}update(e,[t]){if(t===this._lastStyles)return Re;this._lastStyles=t;const{style:i}=e.element,r=t??{};for(const o of this._appliedProps)(!(o in r)||r[o]==null||r[o]==="")&&(i.removeProperty(Gs(o)),this._appliedProps.delete(o));for(const[o,n]of Object.entries(r))n!=null&&n!==""?(i.setProperty(Gs(o),n),this._appliedProps.add(o)):this._appliedProps.has(o)&&(i.removeProperty(Gs(o)),this._appliedProps.delete(o));return Re}}const se=Qt(Yd);function ee(s,e){customElements.get(s)||customElements.define(s,e)}function Wd(s,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,s);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const r=(l=(a=s.response)==null?void 0:a.file)==null?void 0:l.uuid;return r?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(r))}`:null}const Fa=te`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,Ys=p`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${Fa}
</svg>`;class Jd{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function de(s,e,t){const i=s.getState().files,r=i.get(e);if(!r)return;const o=new Map(i);o.set(e,{...r,...t}),s.setState({files:o})}function Lt(s,e){const t=new Map(s.getState().files);t.set(e.id,e),s.setState({files:t})}function hn(s,e){const t=s.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),s.setState({files:i})}function Xd(){return new Jd({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:Ae})}class Zd{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Qd="SAME_ASSET_EXISTS_SKIP_UPLOAD",ec="ERROR_SHA1_CONFLICT";function Fi(s){return(s==null?void 0:s.code)===Qd||(s==null?void 0:s.code)===ec}function Dr(s,e){return{...s,status:"success",file:s.file??{uuid:s.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function ms(s,e){var t,i,r,o,n;return((i=(t=s==null?void 0:s.info)==null?void 0:t.msg)==null?void 0:i.trim())||((r=s==null?void 0:s.msg)==null?void 0:r.trim())||((o=s==null?void 0:s.hint)==null?void 0:o.trim())||((n=s==null?void 0:s.message)==null?void 0:n.trim())||e}const tc=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function ic(s){const e=new Set;if(!s)return e;const t=s.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),tc.has(t)&&e.add("archive"),e}function sc(s,e){if(s.formatMimetypes.length===0)return!0;const t=ic(e);return s.formatMimetypes.some(i=>t.has(i))}function Ws(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:!1}function fn(s){return typeof s=="boolean"?s:s==="true"?!0:s==="false"?!1:null}function Yi(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function gn(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function mn(s,e){if(s.length===0||e.length===0)return!1;const t=new Set(s);for(const i of e)if(t.has(i))return!0;return!1}function rc(s,e){const t=e[s.triggerCkey],i=s.triggerValues;switch(s.triggerCondition){case"is_true":return fn(t)===!0;case"is_false":return fn(t)===!1;case"is_empty":return Ws(t);case"is_not_empty":return!Ws(t);case"is_in":return mn(Yi(t),i);case"is_not_in":return Ws(t)?!0:!mn(Yi(t),i);case"is":return gn(Yi(t),i);case"is_not":return!gn(Yi(t),i);default:return!1}}function oc(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function nc(s,e){let t=s.get(e);return t||(t=oc(),s.set(e,t)),t}function ac(s,e){if(s.length===0||e.length===0)return[];const t=new Set(s);return e.filter(i=>t.has(i))}function lc(s,e){s.contributingDependencyUuids.includes(e)||s.contributingDependencyUuids.push(e)}function dc(s,e,t){const i=nc(s,t.targetCkey);switch(lc(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"show":i.shown=!0;break;case"require":i.required=!0;break;case"allow_values":{const r=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...r]:ac(i.allowedValues,r);break}case"set_values":{const r=t.setValues??[];if(r.length===0)break;i.setValue===void 0&&(i.setValue=r.length===1?r[0]:r);break}default:t.type}}function cc(s,e){for(const t of e.actions)dc(s,e,t)}function uc(s,e){const t=new Map;for(const i of e)i.active&&sc(i,s.mime)&&rc(i,s.meta)&&cc(t,i);return t}function Kt(s,e,t){const i={},r=new Set;for(const a of e.fields)r.add(a.ckey),a.key in s.meta&&(i[a.ckey]=s.meta[a.key]);const o=t.filter(a=>r.has(a.triggerCkey)),n=uc({mime:s.mime,meta:i},o);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const d of a.fields){const c=n.get(d.ckey);if(c){c.hidden=!0;for(const u of l.contributingDependencyUuids)c.contributingDependencyUuids.includes(u)||c.contributingDependencyUuids.push(u)}else n.set(d.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function pc(s,e){const t=Array.isArray(e)?e:[e];switch(s.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function Ss(s,e,t){var i,r;return!!((i=t.get(s.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((r=t.get(e.ckey))!=null&&r.hidden))}function zr(s,e,t){var i,r;return t?!!((i=t.get(s.ckey))!=null&&i.shown||e!=null&&e.ckey&&((r=t.get(e.ckey))!=null&&r.shown)):!1}function hc(s,e,t){if(t.size===0)return s;let i=null;for(const r of e.groups)for(const o of r.fields)Ss(o,r,t)&&o.key in s&&(i||(i={...s}),delete i[o.key]);return i??s}function fc(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function gc(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function La(s,e){const t=[];for(const[i,r]of e){if(r.hidden)continue;const o=fc(s[i]);if(o.length!==0){if(r.allowedValues!==void 0){const n=new Set(r.allowedValues),a=o.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...r.contributingDependencyUuids]})}if(r.setValue!==void 0){const n=Array.isArray(r.setValue)?r.setValue:[r.setValue];gc(o,n)||t.push({ckey:i,kind:"set_values",conflictingValues:o,dependencyUuids:[...r.contributingDependencyUuids]})}}}return t}function mc(s,e,t){if(s.length===0||t.length===0)return new Map;const i=s.map(n=>Kt({mime:n.mime,meta:n.meta},e,t)),r=new Map,o=new Set;for(const n of i)for(const a of n.keys())o.add(a);for(const n of o){const a=i.map(E=>E.get(n)),l=a.every(E=>(E==null?void 0:E.hidden)===!0),d=a.some(E=>(E==null?void 0:E.shown)===!0),c=a.some(E=>(E==null?void 0:E.required)===!0);let u;if(a.every(E=>Array.isArray(E==null?void 0:E.allowedValues))){let E;for(const k of a){const C=k.allowedValues;if(E=E===void 0?[...C]:E.filter(b=>C.includes(b)),E.length===0)break}u=E}let f;const y=a.map(E=>E==null?void 0:E.setValue).filter(E=>E!==void 0);y.length===s.length&&vc(y)&&(f=y[0]);const g=new Set;for(const E of a)if(E)for(const k of E.contributingDependencyUuids)g.add(k);const S={hidden:l,required:c,contributingDependencyUuids:[...g]};d&&(S.shown=!0),u!==void 0&&(S.allowedValues=u),f!==void 0&&(S.setValue=f),r.set(n,S)}return r}function vc(s){if(s.length<=1)return!0;const e=s[0];if(typeof e=="string")return s.every(i=>i===e);const t=new Set(e);return s.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const r of i)if(!t.has(r))return!1;return!0})}const yg=300,vn=2,bc=50,bn="regvar:api",xc="#ut",yc={CREATE_ONLY:"create_only",UPSERT:"upsert"},_c=/^[a-z0-9_-]+$/,wc=s=>typeof s=="string"&&s.startsWith(xc),ss=s=>`~${s.toUpperCase()}`,kc=(s,e)=>{if(!(!s||!e))return s[e]??s[ss(e)]},vs=(s,e,t)=>{var n,a,l;const i=(n=s.i18n)==null?void 0:n[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const r=(a=s.i18n)==null?void 0:a[ss(e)];if(r)return{value:r,isFallback:!0,sourceLang:ss(e)};const o=kc(s.i18n,t);if(o){const d=(l=s.i18n)!=null&&l[t]?t:ss(t);return{value:o,isFallback:!0,sourceLang:d}}return{value:"",isFallback:!1,sourceLang:null}},xn=s=>(typeof s=="string"?s:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),_g=s=>_c.test(s),$c=s=>{const e={},t={};for(const i of s||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},wg=(s,e)=>s.bySid[e]||s.bySlug[e],wi=s=>{const e=[],t=new Map,i=o=>o.sid||o.slug||"",r=(o,n)=>{if(typeof o=="string"){if(!o||t.has(o))return;t.set(o,e.length),e.push({slug:o});return}if(!o||typeof o!="object")return;const a=o,l=i(a);if(!l)return;const d=t.get(l),c=d!==void 0?{...e[d]}:{};a.slug&&(c.slug=a.slug),a.sid&&(c.sid=a.sid),a.uuid&&(c.uuid=a.uuid);const u={...c.i18n,...a.i18n||{}};n&&a.label&&(u[n]=a.label),Object.keys(u).length>0&&(c.i18n=u),d!==void 0?e[d]=c:(t.set(l,e.length),a.slug&&a.slug!==l&&t.set(a.slug,e.length),e.push(c))};if(Array.isArray(s))for(const o of s)r(o);else if(s&&typeof s=="object"){const o=s;for(const[n,a]of Object.entries(o))if(Array.isArray(a))for(const l of a)r(l,n)}return e},Wi=s=>typeof s=="string"?[s]:!s||typeof s!="object"?[]:[s.sid,s.slug,s.uuid].filter(Boolean),sr=(s,e,t)=>{if(t){const o=new Set(e.flatMap(Wi));return s.filter(n=>!Wi(n).some(a=>o.has(a)))}const i=new Set(s.flatMap(Wi)),r=e.filter(o=>!Wi(o).some(n=>i.has(n)));return[...s,...r]},Sc=(s,e)=>s.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function Ua(s,e,t){let i=e;switch(s.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),s.type){case"geopoint":return Cc(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(r=>typeof r=="string"?{value:r,label:r}:r):[];case"ultratags":return wi(e);case"multi-select":return i||[];default:return i??""}}function Mr(s,e,t,i){var o;let r;switch(s.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?r=null:r=`(${n.latitude},${n.longitude})`;break}case"boolean":e==="true"?r=!0:e==="false"?r=!1:r=null;break;case"date":{if(!e)r=null;else{const n=e instanceof Date?e:new Date(e),a=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),d=String(n.getDate()).padStart(2,"0");r=`${a}-${l}-${d}`}break}case"tags":r=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":r=Array.isArray(e)?e.map(n=>typeof n=="string"?n:n.slug).filter(n=>!!n):[];break;case"select-one":r=e===""?null:e;break;case"numeric":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?n:null;break}default:r=e}if(s.regional_variants_group_uuid&&s.type!=="ultratags"){const n=i??"en";return{...((o=t==null?void 0:t.meta)==null?void 0:o[s.key])??{},[n]:r}}return r}function Cc(s){if(typeof s=="string"){const e=/\(([^)]+)\)/.exec(s);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}const Ct="product.ref",Et="product.position",Ec="__product__",Pc=new Set([Ct,Et]);function rr(s){return Pc.has(s)}function or(s){return s===Ct?"ref":s===Et?"position":null}function Rc(s){return[{key:Ct,ckey:Ct,uuid:"product-ref",title:s("productRefLabel","Product reference"),type:"text",placeholder:s("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:Et,ckey:Et,uuid:"product-position",title:s("productPositionLabel","Position"),type:"numeric",placeholder:s("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Ac(s){return{uuid:Ec,isRoot:!1,name:s("productFieldsLabel","Product"),fields:Rc(s)}}function Oc(s,e){const t=Ac(e);let i=-1;for(let l=0;l<s.groups.length;l++)s.groups[l].isRoot&&(i=l);const r=i+1,o=[...s.groups.slice(0,r),t,...s.groups.slice(r)],n=o.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...s,groups:o,fields:n,fieldsByKey:a}}const Da=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Tc(s){return s==null||s===""?null:typeof s!="string"||Da.test(s)?"productRefInvalid":null}function Ic(s){if(s==null||s==="")return null;const e=typeof s=="number"?s:Number(s);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function jr(s){return s?s.ref!=null&&s.ref!==""||s.position!=null:!1}function Br(s){const e={};return(s==null?void 0:s.ref)!=null&&s.ref!==""&&(e.ref=s.ref),(s==null?void 0:s.position)!=null&&(e.position=s.position),e}function yn(s,e){const t={...s??{}};for(const i of Object.keys(e)){const r=e[i];r===void 0?delete t[i]:t[i]=r}return t}function za(s,e,t){var r;if((((r=t==null?void 0:t.requiredFields)==null?void 0:r.includes(s.ckey))||!!s.required)&&qe(e))return`${s.title} is required`;if(qe(e))return null;if(s.key===Ct)return typeof e!="string"||Da.test(e)?"Reference contains invalid characters":null;if(s.key===Et){const o=Number(e);return!Number.isFinite(o)||!Number.isInteger(o)?"Position must be an integer":null}switch(s.type){case"numeric":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!Number.isInteger(o))return"Must be an integer";if(o<-1999999999||o>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(o<-999999999999e-2||o>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const o=e,n=o.latitude!==""&&o.latitude!=null,a=o.longitude!==""&&o.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(o.latitude),d=Number(o.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const o=new URL(e);if(!["http:","https:"].includes(o.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(s.validation&&typeof e=="string")try{if(!new RegExp(s.validation).test(e))return"Value does not match expected format"}catch{}return null}function qe(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:typeof s=="object"?!Object.values(s).some(e=>e!=null&&e!==""):!s}const Ma=new Set(["asset-attachments","attachments-assets","integer-list"]),Fc=new Set(["face_matcher"]);function Lc(s){return Ma.has(s)}function Li(s){return Ma.has(s.type)||Fc.has(s.ckey)}const Uc=new Set(["idle","queued","rejected"]);function Cs(s){return!qe(s)}function ki(s,e){var t;return Li(s)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(s.ckey)?!0:!!s.required}function Nr(s,e,t){var i;return(i=t==null?void 0:t.get(s.ckey))!=null&&i.required?!0:ki(s,e)}function Tt(s){return[...s.values()].filter(e=>Uc.has(e.status))}function ja(s,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:s.forceFillingOnUpload!==void 0?s.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:s.fields.some(t=>!!t.required)}function Ui(s,e,t){if(!e)return ki(s,t);const i=e.get(s.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:ki(s,t)}function ei(s,e,t){const i=new Map;if(!t||t.length===0){for(const r of s)i.set(r.id,null);return i}for(const r of s)i.set(r.id,Kt({mime:r.type??"",meta:r.meta},e,t));return i}function Dc(s,e,t,i){const r=Tt(s);if(r.length===0)return{};const o=ei(r,e,i),n={};for(const a of e.fields){const l=r.filter(d=>{const c=o.get(d.id)??null;return Ui(a,c,t)?!Cs(d.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function zc(s,e,t,i){const r=Tt(s);if(r.length===0)return new Set;const o=ei(r,e,i),n=new Set;for(const a of e.fields)r.some(d=>{const c=o.get(d.id)??null;return Ui(a,c,t)})&&n.add(a.key);return n}function Mc(s,e,t,i){const r=Tt(s);if(r.length===0)return null;const o=ei(r,e,i);for(const n of e.fields)if(r.some(l=>{const d=o.get(l.id)??null;return Ui(n,d,t)?!Cs(l.meta[n.key]):!1}))return n.key;return null}function Ba(s,e,t){var r;const i=s.get(e.id);return i&&i.has(t)?i.get(t):(r=e.meta)==null?void 0:r[t]}function qr(s,e,t){const i=e.get(s.id);if(!i||i.size===0)return s;const r={...s.meta};for(const o of t.fields)i.has(o.key)&&(r[o.key]=i.get(o.key));return{...s,meta:r}}function kg(s,e,t,i,r){const o=Tt(e);if(o.length===0)return null;const n=o.map(l=>qr(l,s,t)),a=ei(n,t,r);for(const l of t.fields)if(o.some((c,u)=>{const h=a.get(n[u].id)??null;return Ui(l,h,i)?!Cs(Ba(s,c,l.key)):!1}))return l.key;return null}function jc(s,e,t,i,r){const o=new Set,n=Tt(e);if(n.length===0)return o;const a=n.map(d=>qr(d,s,t)),l=ei(a,t,r);for(const d of t.fields)n.some((u,h)=>{const f=l.get(a[h].id)??null;return Ui(d,f,i)?!Cs(Ba(s,u,d.key)):!1})&&o.add(d.key);return o}function Na(s,e,t){if(!t||t.length===0)return null;const i=Tt(s);if(i.length===0)return null;const r=ei(i,e,t),o=new Map;for(const n of i){const a=r.get(n.id);if(!a||a.size===0)continue;const l={};for(const c of e.fields)c.key in n.meta&&(l[c.ckey]=n.meta[c.key]);const d=La(l,a);d.length!==0&&o.set(n.id,new Set(d.map(c=>c.ckey)))}if(o.size===0)return null;for(const n of e.fields)for(const a of o.values())if(a.has(n.ckey))return n.key;return null}function Bc(s,e,t,i){const r=Tt(e);if(r.length===0)return null;const o=new Map(r.map(n=>[n.id,qr(n,s,t)]));return Na(o,t,i)}function $g(s,e){const t={...s};for(const i of Object.keys(e)){const r=e[i];if(r==null||r==="")continue;const o=s[i];if(Array.isArray(r))if(Array.isArray(o)){const n=new Set(o.map(l=>JSON.stringify(l))),a=[...o];for(const l of r){const d=JSON.stringify(l);n.has(d)||(n.add(d),a.push(l))}t[i]=a}else t[i]=r;else t[i]=r}return t}function Nc(s,e){const t=e.fields[s.ckey];let i=!1;const r=(s.possible_values??[]).map(l=>{const d=e.options[l.internal_unique_value];return d&&d!==l.label?(i=!0,{...l,label:d}):l}),o=!!(t!=null&&t.name)&&t.name!==s.title,n=!!(t!=null&&t.placeholder)&&t.placeholder!==s.placeholder,a=!!(t!=null&&t.tooltip)&&t.tooltip!==s.hint;return!i&&!o&&!n&&!a?s:{...s,title:o?t.name:s.title,placeholder:n?t.placeholder:s.placeholder,hint:a?t.tooltip:s.hint,possible_values:i?r:s.possible_values}}function qc(s,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return s;let t=!1;const i=s.groups.map(n=>{let a=!1;const l=n.fields.map(d=>{const c=Nc(d,e);return c!==d&&(a=!0),c});return a?(t=!0,{...n,fields:l}):n});if(!t)return s;const r=i.flatMap(n=>n.fields),o=new Map(r.map(n=>[n.key,n]));return{...s,groups:i,fields:r,fieldsByKey:o}}function Hr(s){return s.show===!1}const Hc="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Vc="https://i18n-fastly.ultrafast.io",Kc="uploader",qa=Oa({gridUuid:Hc,namespace:Kc,cdnUrl:Vc}),R=qa.t,He=qa.I18nController;var Gc=Object.defineProperty,Ce=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Gc(e,t,r),r};const Yc=p`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,Wc=p`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,Jc=p`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,Xc=p`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,lo=class lo extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=La(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var o;const i=this.resolvedSchema;if(i&&e.ckey&&((o=i.get(e.ckey))!=null&&o.hidden))return[];let r=i?e.fields.filter(n=>!Ss(n,e,i)):e.fields;return Hr(e)&&(r=r.filter(n=>Nr(n,this.config??void 0,i)||zr(n,e,i))),t&&!e.name.toLowerCase().includes(t)&&(r=r.filter(n=>n.title.toLowerCase().includes(t))),r}_renderFilter(e,t,i){if(this.hideFilter||!this.schema||this.schema.fields.length===0)return x;const r=this._filterQuery,o=this._isAllCollapsed(t),n=o?R("expandAll","Expand all"):R("collapseAll","Collapse all");return p`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${Yc}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${R("searchFields","Search fields...")}
            .value=${r}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${R("searchMetadataFields","Search metadata fields")}
          />
          ${r?p`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${R("clearSearch","Clear search")}
                aria-label=${R("clearSearch","Clear search")}
                type="button"
              >
                ${Wc}
              </button>`:x}
        </div>
        ${e?p`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?R("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${o?R("expandAllGroups","Expand all groups"):R("collapseAllGroups","Collapse all groups")}
              type="button"
            >
              ${o?Xc:Jc}
            </button>`:x}
      </div>
    `}_renderGroup(e,t,i,r,o){const n=o?!0:!this._collapsed.has(e.uuid);return p`
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
        ${n?p`
              <div class="group-content">
                ${t.map(a=>{var l,d,c;return p`
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
                      .dependencyNames=${r}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:x}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return p`<div class="empty" role="status" aria-live="polite">
        ${R("noMetadataFieldsConfigured","No metadata fields configured")}
      </div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),r=i.toLowerCase(),o=r!=="",n=[];for(const c of this.schema.groups){const u=this._visibleFieldsFor(c,r);u.length!==0&&n.push({group:c,fields:u})}const a=n.map(c=>c.group.uuid),l=this.schema.groups.length>1&&(o||n.length>0),d=this._renderFilter(l,a,o);if(n.length===0){const c=o?R("noFieldsMatch",'No fields match "{{query}}"',{query:i}):R("allMetadataFieldsHidden","All metadata fields are currently hidden");return p`
        ${d}
        <div class="empty" role="status" aria-live="polite">${c}</div>
      `}return p`
      ${d}
      ${n.map(({group:c,fields:u})=>this._renderGroup(c,u,e,t,o))}
    `}};lo.styles=q`
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
  `;let he=lo;Ce([m({attribute:!1})],he.prototype,"schema");Ce([m({attribute:!1})],he.prototype,"meta");Ce([m({attribute:!1})],he.prototype,"config");Ce([m({attribute:!1})],he.prototype,"autocomplete");Ce([m({attribute:!1})],he.prototype,"taxonomyService");Ce([m({attribute:!1})],he.prototype,"ultratags");Ce([m({attribute:!1})],he.prototype,"defaultLanguage");Ce([m({attribute:!1})],he.prototype,"taxonodes");Ce([m({attribute:!1})],he.prototype,"resolvedSchema");Ce([m({attribute:!1})],he.prototype,"dependencies");Ce([m({type:Boolean})],he.prototype,"disabled");Ce([m({type:Boolean,attribute:"hide-filter"})],he.prototype,"hideFilter");Ce([P()],he.prototype,"_collapsed");Ce([P()],he.prototype,"_filterQuery");ee("sfx-metadata-form",he);const ti=q`
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
`,Di=q`
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
`,Vr=q`
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
`,Sg=q`
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
`,Ha=q`
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
`,rs={LANGUAGES:"FTYPE_LANGUAGES",CURRENCIES:"FTYPE_CURRENCIES",CUSTOM:"FTYPE_CUSTOM"};function $t(s,e){if(!s.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&s.regional_variants_group_uuid in t?t[s.regional_variants_group_uuid]:e==null?void 0:e.language}function Zc(s,e,t,i){if(!s.regional_variants_group_uuid||!e)return;const r=e.find(a=>a.uuid===s.regional_variants_group_uuid);if(!r)return;const o=(t==null?void 0:t[r.uuid])??i,n=r.variants.find(a=>a.api_value===o);if(n)return`${r.label}: ${n.label}`}function Qc(s,e){var i;const t={};for(const r of s??[]){if(!((i=r.variants)!=null&&i.length))continue;const o=r.type===rs.LANGUAGES?eu(r.variants,e):void 0;t[r.uuid]=o??r.variants[0].api_value}return t}function eu(s,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let r,o;for(const a of s){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!r&&l===i&&(r=a.api_value),!o&&l.split("-")[0]===i&&(o=a.api_value)}}return r??o}var tu=Object.defineProperty,_e=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&tu(e,t,r),r};const co=class co extends W{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:ki(this.field,this.config??void 0)}_conflictTooltip(){var n,a;const e=this.conflict;if(!e)return"";const t=l=>{var d,c,u;return((u=(c=(d=this.field)==null?void 0:d.possible_values)==null?void 0:c.find(h=>h.internal_unique_value===l))==null?void 0:u.label)??l},i=(n=this.resolvedState)==null?void 0:n.allowedValues,r=(a=this.resolvedState)==null?void 0:a.setValue;let o;if(e.kind==="allow_values"&&i?o=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&r!==void 0?o=`Value should be: ${(Array.isArray(r)?r:[r]).map(t).join(", ")}`:o="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const l=e.dependencyUuids.map(d=>this.dependencyNames.get(d)).filter(d=>!!d);if(l.length>0){const d=l.length===1?"dependency":"dependencies";o+=`
Controlled by ${d}: ${l.join(", ")}`}}return o}_onFieldBlur(e){const{key:t,value:i}=e.detail,r=za(this.field,i,this.config??void 0);if(r){this._error=r;return}this._error=null;const o={meta:{[this.field.key]:this.value}},n=$t(this.field,this.config),a=Mr(this.field,i,o,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){var o,n;const i=this.disabled;if(Li(e))return p`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const r=((o=this.resolvedState)==null?void 0:o.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return p`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`;case"textarea":return p`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-textarea-field>`;case"select-one":return p`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${r}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return p`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${r}
          ?disabled=${i}
        ></sfx-meta-multi-select-field>`;case"tags":return p`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${i}
        ></sfx-meta-tags-field>`;case"ultratags":return p`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${(n=this.config)==null?void 0:n.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}
        ></sfx-meta-ultratags-field>`;case"taxonomy-node":return p`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${i}
        ></sfx-meta-taxonomy-node-field>`;case"boolean":return p`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return p`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-number-field>`;case"date":return p`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-date-field>`;case"geopoint":return p`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-geo-point-field>`;default:return p`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}render(){var l,d;const e=this.field;if(!e)return x;const t=$t(e,this.config),i=Ua(e,this.value,t),r=Zc(e,this.regionalVariantsGroups,(l=this.config)==null?void 0:l.regionalFilters,(d=this.config)==null?void 0:d.language),n=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return p`
      <div class=${n} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?p`<span class="field-required" aria-hidden="true">*</span>`:x}
          ${this.conflict?p`<span
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
              </span>`:x}
        </div>
        <div class="field-content">
          ${this._renderField(e,i)}
          ${r?p`<div class="field-regional-hint" title=${r}>${r}</div>`:x}
          ${this._error?p`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:x}
        </div>
      </div>
    `}};co.styles=[Ha];let ce=co;_e([m({attribute:!1})],ce.prototype,"field");_e([m({attribute:!1})],ce.prototype,"value");_e([m({attribute:!1})],ce.prototype,"config");_e([m({attribute:!1})],ce.prototype,"autocomplete");_e([m({attribute:!1})],ce.prototype,"taxonomyService");_e([m({attribute:!1})],ce.prototype,"taxonomyEntry");_e([m({attribute:!1})],ce.prototype,"ultratags");_e([m({attribute:!1})],ce.prototype,"defaultLanguage");_e([m({attribute:!1})],ce.prototype,"ultratagsRestrictToItems");_e([m({attribute:!1})],ce.prototype,"regionalVariantsGroups");_e([m({attribute:!1})],ce.prototype,"resolvedState");_e([m({attribute:!1})],ce.prototype,"conflict");_e([m({attribute:!1})],ce.prototype,"dependencyNames");_e([m({type:Boolean})],ce.prototype,"disabled");_e([P()],ce.prototype,"_error");ee("sfx-metadata-field",ce);var iu=Object.defineProperty,Kr=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&iu(e,t,r),r};class Ee extends W{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new He(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?R("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??R("selectAnOption","Select an option")}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}Kr([m({attribute:!1})],Ee.prototype,"field");Kr([m({attribute:!1})],Ee.prototype,"value");Kr([m({type:Boolean})],Ee.prototype,"disabled");const uo=class uo extends Ee{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,r;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return p`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((r=this.field)==null?void 0:r.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};uo.styles=[ti];let nr=uo;ee("sfx-meta-text-field",nr);const po=class po extends Ee{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,r;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return p`
      <textarea
        .value=${this.value??""}
        placeholder=${((r=this.field)==null?void 0:r.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};po.styles=[ti,q`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let ar=po;ee("sfx-meta-textarea-field",ar);function zi(s,e,t,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(e,t,o):n(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),vi(r,e);return!0},bs=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Va=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),ou(e)}};function su(s){this._$AN!==void 0?(bs(this),this._$AM=s,Va(this)):this._$AM=s}function ru(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)vi(i[o],!1),bs(i[o]);else i!=null&&(vi(i,!1),bs(i));else vi(this,s)}const ou=s=>{s.type==Zt.CHILD&&(s._$AP??(s._$AP=ru),s._$AQ??(s._$AQ=su))};class nu extends Ii{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Va(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(vi(this,e),bs(this))}setValue(e){if(Hd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es extends Event{constructor(e){super(Es.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Es.eventName="rangeChanged";class Ps extends Event{constructor(e){super(Ps.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ps.eventName="visibilityChanged";class Rs extends Event{constructor(){super(Rs.eventName,{bubbles:!1})}}Rs.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class au{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class lu extends au{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const o=Math.abs(i-e),n=Math.abs(r-t);o<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let _n=typeof window<"u"?window.ResizeObserver:void 0;const lr=Symbol("virtualizerRef"),Ji="virtualizer-sizer";let wn;class du{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new _n(()=>this._hostElementSizeChanged()),this._childrenRO=new _n(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[lr]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=pu(this._hostElement,e),this._scrollerController=new lu(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,i,r;this._scrollEventListeners.forEach(o=>o.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(r=this._childrenRO)==null||r.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${Ji}]`);t||(t=document.createElement("div"),t.setAttribute(Ji,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(Ji,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||wn;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const r={...e};delete r.type,t=r}else t=e;i===void 0&&(wn=i=(await Y(()=>import("./flow-DQ61c9Hr.js"),[])).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,n)=>o+n.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:r}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){const o=t[r],n=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[n]=i.call(this,o,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},cu(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new Rs)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(Ji)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var r;const e=this._hostElement,t=(r=this._scrollerController)==null?void 0:r.element,i=this._layout;if(e&&t&&i){let o,n,a,l;const d=e.getBoundingClientRect();o=0,n=0,a=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(k=>k.getBoundingClientRect());c.unshift(d);for(const k of c)o=Math.max(o,k.top),n=Math.max(n,k.left),a=Math.min(a,k.bottom),l=Math.min(l,k.right);const u=t.getBoundingClientRect(),h={left:d.left-u.left,top:d.top-u.top},f={width:t.scrollWidth,height:t.scrollHeight},y=o-d.top+e.scrollTop,g=n-d.left+e.scrollLeft,S=Math.max(0,a-o),E=Math.max(0,l-n);i.viewportSize={width:E,height:S},i.viewportScroll={top:y,left:g},i.totalScrollSize=f,i.offsetWithinScroller=h}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,r=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=r?`${r}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:r,height:o,xOffset:n,yOffset:a},l)=>{const d=this._children[l-this._first];d&&(d.style.position="absolute",d.style.boxSizing="border-box",d.style.transform=`translate(${i}px, ${t}px)`,r!==void 0&&(d.style.width=r+"px"),o!==void 0&&(d.style.height=o+"px"),d.style.left=n===void 0?null:n+"px",d.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:r,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-r})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Es({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ps({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function cu(s){const e=window.getComputedStyle(s);return{marginTop:Xi(e.marginTop),marginRight:Xi(e.marginRight),marginBottom:Xi(e.marginBottom),marginLeft:Xi(e.marginLeft)}}function Xi(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function kn(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function uu(s,e=!1){const t=[];let i=e?s:kn(s);for(;i!==null;)t.push(i),i=kn(i);return t}function pu(s,e=!1){let t=!1;return uu(s,e).filter(i=>{if(t)return!1;const r=getComputedStyle(i);return t=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ka=s=>s,Ga=(s,e)=>p`${e}: ${JSON.stringify(s,null,2)}`;class hu extends nu{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>Ga(t,i+this._first),this._keyFunction=(t,i)=>Ka(t,i+this._first),this._items=[],e.type!==Zt.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return Ht(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?Re:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const r=e.parentNode;this._makeVirtualizer(r,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(r,o)=>t(r,o+this._first)),i&&(this._keyFunction=(r,o)=>i(r,o+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:o}=t;this._virtualizer=new du({hostElement:e,layout:i,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const fu=Qt(hu);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ii extends W{constructor(){super(...arguments),this.items=[],this.renderItem=Ga,this.keyFunction=Ka,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:i,layout:r,scroller:o}=this;return p`${fu({items:e,renderItem:t,keyFunction:i,layout:r,scroller:o})}`}element(e){var t;return(t=this[lr])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[lr])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var i;(i=this.element(e))==null||i.scrollIntoView({block:t})}}zi([m({attribute:!1})],ii.prototype,"items",void 0);zi([m()],ii.prototype,"renderItem",void 0);zi([m()],ii.prototype,"keyFunction",void 0);zi([m({attribute:!1})],ii.prototype,"layout",void 0);zi([m({reflect:!0,type:Boolean})],ii.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",ii);const Ya=50;function Wa(s,e){var i;const t=s.querySelector("lit-virtualizer");if(t){e>=0&&Promise.resolve(t.layoutComplete).then(()=>t.scrollToIndex(e,"nearest")).catch(()=>{});return}(i=s.querySelector(".option.active"))==null||i.scrollIntoView({block:"nearest"})}var gu=Object.defineProperty,As=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&gu(e,t,r),r},Ge;const Mi=(Ge=class extends Ee{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>p` <div
      class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${i=>{i.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}get _options(){var i,r;const e=((i=this.field)==null?void 0:i.possible_values)??Ge._EMPTY;if(((r=this._optionsCache)==null?void 0:r.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var r;const e=this._options,t=this.allowedValues;if(((r=this._selectableCache)==null?void 0:r.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>Wa(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(e){return e.length?e.length<=Ya?e.map(this._renderOption):p` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:p`<div class="empty">${R("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:Ge._EMPTY;return p`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._selectedLabel?p`<span class="trigger-value">${this._selectedLabel}</span>`:p`<span class="placeholder"
              >${((i=this.field)==null?void 0:i.placeholder)||e}</span
            >`}
        ${this._selectedLabel&&!this.disabled?p`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${R("clear","Clear")}
                @click=${this._clear}
                @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}
                >&times;</span
              >
            `:x}
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

      ${this._open?p`
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${R("search","Search")}
                aria-label=${R("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
            </div>
          `:x}
    `}},Ge.styles=[Di,q`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],Ge._EMPTY=[],Ge);As([m({attribute:!1})],Mi.prototype,"allowedValues");As([P()],Mi.prototype,"_open");As([P()],Mi.prototype,"_search");As([P()],Mi.prototype,"_activeIndex");let mu=Mi;ee("sfx-meta-select-field",mu);var vu=Object.defineProperty,Os=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&vu(e,t,r),r},Ye;const ji=(Ye=class extends Ee{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{const i=this._selected;return p` <div
      class="option ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${i.includes(e.value)}
      @mousedown=${r=>{r.preventDefault(),this._toggle(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      <span class="check ${i.includes(e.value)?"checked":""}">
        ${i.includes(e.value)?"✓":""}
      </span>
      ${e.label}
    </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,r;const e=((i=this.field)==null?void 0:i.possible_values)??Ye._EMPTY;if(((r=this._optionsCache)==null?void 0:r.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var r;const e=this._options,t=this.allowedValues;if(((r=this._selectableCache)==null?void 0:r.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(r=>r!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i),this._emit("field-blur",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t),this._emit("field-blur",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e),this._emit("field-blur",e)}_clearAll(){this.value=[],this._emit("field-change",[]),this._emit("field-blur",[])}_scrollActive(){this.updateComplete.then(()=>Wa(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}_renderOptions(e){return e.length?e.length<=Ya?e.map(this._renderOption):p` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:p`<div class="empty">${R("noOptions","No options")}</div>`}render(){var r;const e=this._selected,t=this._selectPlaceholder(),i=this._open?this._filtered:Ye._EMPTY;return p`
      <div
        class="trigger"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${e.length?e.map(o=>p` <span class="chip">
                  ${this._labelFor(o)}
                  <button
                    class="chip-x"
                    aria-label=${R("removeItem","Remove {{item}}",{item:this._labelFor(o)})}
                    @click=${n=>{n.stopPropagation(),this._remove(o)}}
                  >
                    &times;
                  </button>
                </span>`):p`<span class="placeholder"
              >${((r=this.field)==null?void 0:r.placeholder)||t}</span
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

      ${this._open?p`
            <div
              class="dropdown"
              role="listbox"
              aria-multiselectable="true"
              @keydown=${this._onKeydown}
            >
              <input
                class="search"
                type="text"
                placeholder=${R("search","Search")}
                aria-label=${R("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(i)}</div>
              ${this._options.length>0?p`
                    <div class="bulk-actions">
                      <button
                        type="button"
                        class="bulk-btn"
                        @mousedown=${o=>{o.preventDefault(),this._selectAll()}}
                      >
                        ${R("selectAll","Select all")}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${o=>{o.preventDefault(),this._clearAll()}}
                      >
                        ${R("clearAll","Clear all")}
                      </button>
                    </div>
                  `:x}
            </div>
          `:x}
    `}},Ye.styles=[Di,Vr,q`
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
    `],Ye._EMPTY=[],Ye);Os([m({attribute:!1})],ji.prototype,"allowedValues");Os([P()],ji.prototype,"_open");Os([P()],ji.prototype,"_search");Os([P()],ji.prototype,"_activeIndex");let bu=ji;ee("sfx-meta-multi-select-field",bu);function vt(s,e){var t,i;return((t=s.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Ja(s){return s.trim().replace(/\s+/g," ")}function xu(s){return Ja(s).replace(/\s/g,"-")}function Zi(s){return{label:Ja(s),value:xu(s)}}var yu=Object.defineProperty,si=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&yu(e,t,r),r};const ho=class ho extends Ee{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,r;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(r=this.autocomplete)==null||r.search(this.field.ckey,t,o=>{this._results=o,this._loading=!1})}_addTag(e){if(this._tags.some(i=>vt(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!vt(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(Zi(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(Zi(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var o;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((o=this.field)==null?void 0:o.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!t.some(a=>vt(a,n))).filter(n=>!e||n.label.toLowerCase().includes(e)),r=this._results.filter(n=>!t.some(a=>vt(a,n))&&!i.some(a=>vt(a,n)));return[...i,...r]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=Zi(e);return!this._tags.some(i=>vt(i,t))&&!this._suggestions.some(i=>vt(i,t))}render(){var r,o;const e=this._tags,t=this._suggestions,i=t.length;return p`
      <div
        class="container"
        @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}
      >
        ${e.map(n=>p` <span class="chip">
              ${n.label}
              <button
                class="chip-x"
                aria-label=${R("removeItem","Remove {{item}}",{item:n.label})}
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
          aria-label=${((r=this.field)==null?void 0:r.title)??R("tags","Tags")}
          placeholder=${e.length?"":((o=this.field)==null?void 0:o.placeholder)||R("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?p`
            <div class="dropdown" role="listbox">
              ${this._loading?p`<div class="loading">${R("loading","Loading")}</div>`:x}
              ${t.map((n,a)=>p` <div
                    class="option ${a===this._activeIndex?"active":""}"
                    role="option"
                    @mousedown=${l=>{l.preventDefault(),this._addTag(n)}}
                    @mouseenter=${()=>{this._activeIndex=a}}
                  >
                    ${n.label}
                  </div>`)}
              ${this._canCreate?p` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${n=>{n.preventDefault(),this._addTag(Zi(this._query))}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${R("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
                  </div>`:x}
              ${!this._loading&&!t.length&&!this._canCreate?p`<div class="empty">${R("noResults","No results")}</div>`:x}
            </div>
          `:x}
    `}};ho.styles=[Vr,q`
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
    `];let Je=ho;si([m({attribute:!1})],Je.prototype,"autocomplete");si([P()],Je.prototype,"_query");si([P()],Je.prototype,"_results");si([P()],Je.prototype,"_loading");si([P()],Je.prototype,"_dropdownOpen");si([P()],Je.prototype,"_activeIndex");ee("sfx-meta-tags-field",Je);var _u=Object.defineProperty,Xa=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&_u(e,t,r),r};const bt=()=>[{label:R("booleanTrue","True"),value:"true"},{label:R("booleanFalse","False"),value:"false"}],fo=class fo extends Ee{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=bt().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(bt().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,bt().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=bt().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<bt().length&&(e.preventDefault(),this._onSelect(bt()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return p`
      <button
        class="trigger"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}
      >
        ${this._currentLabel?p`<span class="trigger-value">${this._currentLabel}</span>`:p`<span class="placeholder"
              >${((i=this.field)==null?void 0:i.placeholder)||t}</span
            >`}
        ${this._currentLabel&&!this.disabled?p`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${R("clear","Clear")}
                @click=${this._clear}
                @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}
                >&times;</span
              >
            `:x}
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

      ${this._open?p`
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${bt().map((r,o)=>p` <div
                    class="option ${r.value===e?"selected":""} ${o===this._activeIndex?"active":""}"
                    role="option"
                    aria-selected=${r.value===e}
                    @mousedown=${n=>{n.preventDefault(),this._onSelect(r)}}
                    @mouseenter=${()=>{this._activeIndex=o}}
                  >
                    ${r.label}
                  </div>`)}
            </div>
          `:x}
    `}};fo.styles=[Di];let $i=fo;Xa([P()],$i.prototype,"_open");Xa([P()],$i.prototype,"_activeIndex");ee("sfx-meta-boolean-field",$i);const go=class go extends Ee{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return p`
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
    `}};go.styles=[ti];let dr=go;ee("sfx-meta-number-field",dr);const mo=class mo extends Ee{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return p`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?p`<span class="date-placeholder">${R("pickADate","Pick a date")}</span>`:x}
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
    `}};mo.styles=[ti,q`
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
    `];let cr=mo;ee("sfx-meta-date-field",cr);const vo=class vo extends Ee{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,r={...this._geo,[e]:i};this.value=r,this._emit("field-change",r)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return p`
      <div class="grid">
        <div>
          <label>${R("latitude","Latitude")}</label>
          <input
            type="number"
            step="any"
            inputmode="decimal"
            .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("latitude",t)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
        </div>
        <div>
          <label>${R("longitude","Longitude")}</label>
          <input
            type="number"
            step="any"
            inputmode="decimal"
            .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("longitude",t)}
            @blur=${this._onBlur}
            @keydown=${this._onKeydown}
          />
        </div>
      </div>
    `}};vo.styles=[ti,q`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        line-height: 1;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 6px;
      }
    `];let ur=vo;ee("sfx-meta-geo-point-field",ur);var wu=Object.defineProperty,je=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&wu(e,t,r),r};const Ut={uuid:"__root__",name:"",ltree:""},bo=class bo extends Ee{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[Ut],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var r,o,n;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((r=this.field)==null?void 0:r.ckey)??((o=this.field)==null?void 0:o.key)}" model:`,(n=this.field)==null?void 0:n.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[Ut];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[Ut];const i=t.slice(0,-1),o=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),n=[Ut];let a="";for(let l=0;l<i.length;l++)a=a?`${a}.${i[l]}`:i[l],n.push({uuid:`__seed_${a}`,name:o[l]??i[l],ltree:a});return n}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,r=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=r.nodes,this._loading=!1;const o=this._selectedScalar,n=o?this._currentNodes.findIndex(a=>a.uuid===o||a.slug===o):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){var r;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(r=this.taxonomyService)==null||r.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,o=>{i===this._searchSeq&&(this._searchResults=o,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(r=>r.uuid!==Ut.uuid).map(r=>r.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,r;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(r=this.renderRoot.querySelector(".trigger"))==null||r.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const o=this._currentNodes[this._activeIndex];o.children.count_direct>0&&(e.preventDefault(),this._drillInto(o))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const o=this._searchResults[this._activeIndex];o&&this._selectAutocomplete(o)}else{const o=this._currentNodes[this._activeIndex];o&&this._selectTreeNode(o)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?x:p`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const r=i===e.length-1,o=t.uuid===Ut.uuid?R("rootNode","Root"):t.name;return p`
            ${i>0?p`<span class="crumb-sep">›</span>`:x}
            <button
              class="crumb ${r?"current":""}"
              type="button"
              ?disabled=${r}
              @click=${()=>!r&&this._jumpToCrumb(i)}
            >
              ${o}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return p`<div class="empty">${R("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return p`<div class="empty">${R("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return p`<div class="empty">${R("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return p`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const r=t.children.count_direct>0,o=!!e&&(e===t.uuid||e===t.slug);return p`
            <div
              class="tree-row ${i===this._activeIndex?"active":""} ${o?"selected":""}"
              role="option"
              aria-selected=${o}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>r?this._drillInto(t):this._selectTreeNode(t)}
            >
              <span
                class="tree-radio ${o?"checked":""}"
                role="button"
                aria-label=${R("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${r?p`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:x}
              <span class="tree-chevron ${r?"":"hidden"}" aria-hidden="true">
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
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?p`<div class="empty">${R("loading","Loading")}</div>`:this._searchResults.length===0?p`<div class="empty">${R("noResults","No results")}</div>`:p`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>p`
            <div
              class="ac-row ${t===this._activeIndex?"active":""}"
              role="option"
              @mouseenter=${()=>{this._activeIndex=t}}
              @click=${()=>this._selectAutocomplete(e)}
            >
              <span class="ac-tag">${e.tag}</span>
              ${e.path&&e.path!==e.tag?p`<span class="ac-path">${e.path}</span>`:x}
            </div>
          `)}
      </div>
    `}render(){var r;if(!this._taxonomySuid)return p`<div class="misconfigured" role="alert">
        ${R("missingTaxonomyConfig","Field is missing taxonomy config")}
      </div>`;const e=this._selectPlaceholder(R("selectANode","Select a node")),t=this._displayPath,i=!!t;return p`
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
        ${i?p`<span class="trigger-value" title=${t}>${t}</span>`:p`<span class="placeholder"
              >${((r=this.field)==null?void 0:r.placeholder)||e}</span
            >`}
        ${i&&!this.disabled?p`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${R("clear","Clear")}
                @click=${this._clear}
                @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._clear(o))}}
                >&times;</span
              >
            `:x}
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

      ${this._open?p`
            <div class="dropdown taxo" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                aria-label=${R("searchTaxonomy","Search taxonomy")}
                placeholder=${R("search","Search")}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?x:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:x}
    `}};bo.styles=[Di,q`
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
    `];let $e=bo;je([m({attribute:!1})],$e.prototype,"taxonomyService");je([m({attribute:!1})],$e.prototype,"entry");je([P()],$e.prototype,"_open");je([P()],$e.prototype,"_query");je([P()],$e.prototype,"_drillStack");je([P()],$e.prototype,"_currentNodes");je([P()],$e.prototype,"_searchResults");je([P()],$e.prototype,"_loading");je([P()],$e.prototype,"_activeIndex");je([P()],$e.prototype,"_resolvedTaxonomyUuid");je([P()],$e.prototype,"_taxonomyResolutionFailed");ee("sfx-meta-taxonomy-node-field",$e);var ku=Object.defineProperty,Ze=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&ku(e,t,r),r};const $u=(s,e)=>!!(e.uuid&&s.uuid===e.uuid||e.sid&&s.sid===e.sid||e.slug&&s.slug===e.slug),xo=class xo extends Ee{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set}get _items(){return Array.isArray(this.value)?this.value.map(e=>typeof e=="string"?wc(e)?{sid:e}:{slug:e}:e):[]}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichBySids()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichBySids()}async _maybeEnrichBySids(){const e=this.ultratags;if(!e)return;const t=this._items;if(t.length===0)return;const i=[];for(const r of t)r.sid&&!r.i18n&&!this._enrichmentAttempted.has(r.sid)&&i.push(r.sid);if(i.length!==0){for(const r of i)this._enrichmentAttempted.add(r);try{const r=await e.getBySids({sids:i,format:bn}),o=$c(r.items||[]),n=Sc(t,o);this.value=n}catch{}}}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return vs(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=o=>!!o.uuid&&e.has(o.uuid)||!!o.sid&&e.has(o.sid)||e.has(o.slug),r=(this._isRestricted?this._restrictedEntries:this._results).filter(o=>!t(o)).map(o=>({entry:o,label:vs(o,this._currentLang,this._defaultLang).value||o.slug}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?r.filter(n=>n.label.toLowerCase().includes(o)):r}return r}get _isSearching(){return this._query.trim().length>=vn}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=xn(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(r=>r.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var o,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((o=this.field)!=null&&o.key)){this._results=[],this._loading=!1,(n=this.ultratags)==null||n.cancel();return}const i=this.ultratags;if(!i)return;const r=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:r,limit:bc,format:bn}).then(a=>{this._query.trim().toLowerCase()===r&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===r&&(this._results=[],this._loading=!1)})}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var r;(r=this.renderRoot.querySelector(".input"))==null||r.focus()})}async _createFromQuery(){var o,n;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((o=this.field)!=null&&o.key))return;const i=xn(e);if(!i)return;const r=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:yc.UPSERT,items:[{slug:i,i18n:{[r]:e}}]}),l=(n=a==null?void 0:a.output)==null?void 0:n[0],d={slug:(l==null?void 0:l.slug)||i,sid:l==null?void 0:l.sid,uuid:l==null?void 0:l.uuid,i18n:(l==null?void 0:l.i18n)||{[r]:e}};if(this._entryAlreadySelected({uuid:d.uuid||"",sid:d.sid,slug:d.slug||i}))return;const c=[...this._items,d];this.value=c,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",c),this.updateComplete.then(()=>{var u;(u=this.renderRoot.querySelector(".input"))==null||u.focus()})}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!$u(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var n,a;const e=this._items,t=this._dropdownOptions,i=t.length,r=this._query.trim(),o=((n=this.field)==null?void 0:n.placeholder)||(this._isRestricted?R("searchTagsToRemove","Search tags to remove"):R("addCustomTags","Add custom tags"));return p`
      <div
        class="container"
        @click=${()=>{var l;return(l=this.renderRoot.querySelector(".input"))==null?void 0:l.focus()}}
      >
        ${e.map(l=>{const d=this._labelForItem(l);return l.uuid||l.sid||l.slug,p` <span class="chip" title=${d}>
            ${d}
            <button
              class="chip-x"
              aria-label=${R("removeItem","Remove {{item}}",{item:d})}
              @click=${c=>{c.stopPropagation(),this._removeItem(l)}}
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
          aria-label=${((a=this.field)==null?void 0:a.title)??R("customTags","Custom tags")}
          placeholder=${e.length?"":o}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen?p`
            <div class="dropdown" role="listbox">
              ${!this._isRestricted&&!this._isSearching?p`<div class="hint">
                    ${R("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:vn})}
                  </div>`:x}
              ${!this._isRestricted&&this._isSearching&&this._loading?p`<div class="loading">${R("loading","Loading")}</div>`:x}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((l,d)=>p` <div
                        class="option ${d===this._activeIndex?"active":""}"
                        role="option"
                        @mousedown=${c=>{c.preventDefault(),this._addEntry(l.entry)}}
                        @mouseenter=${()=>{this._activeIndex=d}}
                      >
                        ${l.label}
                      </div>`):x}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?p`<div class="empty">${R("noResults","No results")}</div>`:x}
              ${this._canCreate?p` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${l=>{l.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${R("createTag","Create '{{tag}}'",{tag:r})}
                  </div>`:x}
            </div>
          `:x}
    `}};xo.styles=[Vr,q`
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
    `];let Le=xo;Ze([m({attribute:!1})],Le.prototype,"ultratags");Ze([m({attribute:!1})],Le.prototype,"language");Ze([m({attribute:!1})],Le.prototype,"defaultLanguage");Ze([m({attribute:!1})],Le.prototype,"restrictToItems");Ze([P()],Le.prototype,"_query");Ze([P()],Le.prototype,"_results");Ze([P()],Le.prototype,"_loading");Ze([P()],Le.prototype,"_dropdownOpen");Ze([P()],Le.prototype,"_activeIndex");ee("sfx-meta-ultratags-field",Le);const Gr=()=>R("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Za=p`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${te`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,yo=class yo extends W{constructor(){super(...arguments),this._i18nController=new He(this)}render(){const e=Gr();return p`
      <div class="unsupported" title=${e} aria-label=${e} aria-disabled="true" role="note">
        ${Za}
        <span class="unsupported-text" aria-hidden="true"
          >${R("notEditableDuringUpload","Not editable during upload")}</span
        >
      </div>
    `}};yo.styles=q`
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
  `;let pr=yo;ee("sfx-meta-unsupported-field",pr);var Su=Object.defineProperty,Be=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Su(e,t,r),r};const _o=class _o extends W{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(Li(e))return p`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return p`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`;case"textarea":return p`<sfx-meta-textarea-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-textarea-field>`;case"select-one":return p`<sfx-meta-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return p`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${this.allowedValues}
          ?disabled=${i}
        ></sfx-meta-multi-select-field>`;case"tags":return p`<sfx-meta-tags-field
          .field=${e}
          .value=${t}
          .autocomplete=${this.autocomplete}
          ?disabled=${i}
        ></sfx-meta-tags-field>`;case"ultratags":return p`<sfx-meta-ultratags-field
          .field=${e}
          .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}
        ></sfx-meta-ultratags-field>`;case"taxonomy-node":return p`<sfx-meta-taxonomy-node-field
          .field=${e}
          .value=${t}
          .taxonomyService=${this.taxonomyService}
          .entry=${this.taxonomyEntry}
          ?disabled=${i}
        ></sfx-meta-taxonomy-node-field>`;case"boolean":return p`<sfx-meta-boolean-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return p`<sfx-meta-number-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-number-field>`;case"date":return p`<sfx-meta-date-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-date-field>`;case"geopoint":return p`<sfx-meta-geo-point-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-geo-point-field>`;default:return p`<sfx-meta-text-field
          .field=${e}
          .value=${t}
          ?disabled=${i}
        ></sfx-meta-text-field>`}}};_o.styles=q`
    :host {
      display: block;
    }
  `;let Se=_o;Be([m({attribute:!1})],Se.prototype,"field");Be([m({attribute:!1})],Se.prototype,"value");Be([m({attribute:!1})],Se.prototype,"autocomplete");Be([m({attribute:!1})],Se.prototype,"taxonomyService");Be([m({attribute:!1})],Se.prototype,"taxonomyEntry");Be([m({attribute:!1})],Se.prototype,"ultratags");Be([m({attribute:!1})],Se.prototype,"language");Be([m({attribute:!1})],Se.prototype,"defaultLanguage");Be([m({attribute:!1})],Se.prototype,"ultratagsRestrictToItems");Be([m({attribute:!1})],Se.prototype,"allowedValues");Be([m({type:Boolean})],Se.prototype,"disabled");ee("sfx-metadata-field-edit",Se);var Cu=Object.defineProperty,Bi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Cu(e,t,r),r};const wo=class wo extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.taxonomyEntry=null}_formatValue(){var i,r,o,n;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(r=this.field.possible_values)==null?void 0:r.find(l=>l.internal_unique_value===e||l.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var d;const l=(d=this.field.possible_values)==null?void 0:d.find(c=>c.internal_unique_value===a||c.api_value===a);return(l==null?void 0:l.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",l=this.defaultLanguage||a;return e.map(d=>typeof d=="string"?d:vs({i18n:d.i18n,slug:d.slug||""},a,l).value||d.slug||d.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(o=this.taxonomyEntry)!=null&&o.path?this.taxonomyEntry.path:(n=this.taxonomyEntry)!=null&&n.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&Li(this.field))return p`
        <div class="value empty" title=${Gr()}>
          ${R("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?p`
        <div class="value">
          <a
            class="link"
            href=${e}
            target="_blank"
            rel="noopener noreferrer"
            @click=${r=>r.stopPropagation()}
            >${e}</a
          >
        </div>
      `:p`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};wo.styles=q`
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
  `;let dt=wo;Bi([m({attribute:!1})],dt.prototype,"field");Bi([m({attribute:!1})],dt.prototype,"value");Bi([m({attribute:!1})],dt.prototype,"taxonomyEntry");Bi([m({attribute:!1})],dt.prototype,"language");Bi([m({attribute:!1})],dt.prototype,"defaultLanguage");ee("sfx-metadata-field-view",dt);var Eu=Object.defineProperty,Ts=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Eu(e,t,r),r};const ko=class ko extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const r of t.variants)e.push({groupUuid:t.uuid,value:r.api_value,label:r.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var r;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const o of t){const n=this.selectedFilters[o.uuid]??((r=o.variants[0])==null?void 0:r.api_value),a=o.variants.find(l=>l.api_value===n);a&&i.push(t.length===1?a.label:`${o.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return x;const t=this._options,i=R("regionalSettings","Regional settings"),r=this._triggerSummary(i);return p`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${i} — ${r}`}
        title=${r}
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
      ${this._open?p`
            <div class="dropdown" role="listbox" aria-label=${i}>
              ${t.map((o,n)=>this._renderOption(o,n,o.value===this.selectedFilters[o.groupUuid]))}
            </div>
          `:x}
    `}_renderOption(e,t,i){const r=this._activeIndex===t;return p`
      ${e.isGroupStart?p`<div class="group-header">${e.groupLabel}</div>`:x}
      <div
        class="option ${i?"selected":""} ${r?"active":""}"
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
    `}};ko.styles=[Di,q`
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
    `];let Pt=ko;Ts([m({attribute:!1})],Pt.prototype,"groups");Ts([m({attribute:!1})],Pt.prototype,"selectedFilters");Ts([P()],Pt.prototype,"_open");Ts([P()],Pt.prototype,"_activeIndex");ee("sfx-regional-settings",Pt);const Yr="system.tags",Pu="__tags__";function hr(s){return s===Yr}function Ru(s){return{key:Yr,ckey:"",uuid:"system-tags",title:s("tagsLabel","Tags"),type:"tags",placeholder:s("addTags","Add tags"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Cg(s,e){const t=Ru(e);let i=!1,r=s.groups.map(a=>!i&&a.isRoot?(i=!0,{...a,fields:[...a.fields,t]}):a);i||(r=[{uuid:Pu,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...r]);const o=r.flatMap(a=>a.fields),n=new Map(o.map(a=>[a.key,a]));return{...s,groups:r,fields:o,fieldsByKey:n}}var Au=Object.defineProperty,Ni=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Au(e,t,r),r};const Ou=(s,e)=>typeof e=="string"?e:s,$o=class $o extends W{constructor(){super(...arguments),this.product={},this.disabled=!1,this.t=Ou,this._collapsed=!1,this._errors={}}willUpdate(e){e.has("product")&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent("product-blur",{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;const t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError("ref")}_onRefBlur(e){const t=e.target.value,i=Tc(t);if(i){this._errors={...this._errors,ref:i};return}this._clearError("ref"),this._emit("ref",t===""?void 0:t)}_onPositionInput(){this._clearError("position")}_onPositionBlur(e){const t=e.target.value,i=Ic(t);if(i){this._errors={...this._errors,position:i};return}this._clearError("position"),t===""||t==null?this._emit("position",void 0):this._emit("position",Number(t))}_onKeydown(e){var t,i;if(e.key==="Enter")e.target.blur();else if(e.key==="Escape"){const r=e.target,o=r.dataset.key;o==="ref"&&(r.value=((t=this.product)==null?void 0:t.ref)??""),o==="position"&&(r.value=((i=this.product)==null?void 0:i.position)==null?"":String(this.product.position)),o&&this._clearError(o),r.blur()}}_renderRow(e,t,i){const r=this._errors[e],o=r?this.t(r,r):"";return p`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${i}
          ${r?p`<div class="field-error" role="alert">${o}</div>`:x}
        </div>
      </div>
    `}render(){var r,o;const e=!this._collapsed,t=((r=this.product)==null?void 0:r.ref)??"",i=((o=this.product)==null?void 0:o.position)==null?"":String(this.product.position);return p`
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
        ${e?p`
              <div class="group-content">
                ${this._renderRow("ref",this.t("productRefLabel","Product reference"),p`<input
                    type="text"
                    data-key="ref"
                    .value=${t}
                    placeholder=${this.t("productRefPlaceholder","e.g. SKU-12345")}
                    ?disabled=${this.disabled}
                    @input=${this._onRefInput}
                    @blur=${this._onRefBlur}
                    @keydown=${this._onKeydown}
                  />`)}
                ${this._renderRow("position",this.t("productPositionLabel","Position"),p`<input
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
            `:x}
      </div>
    `}};$o.styles=[ti,Ha,q`
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
    `];let ct=$o;Ni([m({attribute:!1})],ct.prototype,"product");Ni([m({type:Boolean})],ct.prototype,"disabled");Ni([m({attribute:!1})],ct.prototype,"t");Ni([P()],ct.prototype,"_collapsed");Ni([P()],ct.prototype,"_errors");ee("sfx-product-fields-form",ct);const $n={text:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${te`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${te`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${te`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":p`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${te`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Tu(s){return $n[s]??$n.text}const L="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Iu='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',Ke=`data:image/svg+xml,${encodeURIComponent(Iu)}`,fr={_default:L+"GENERIC.svg?vh=9a518a",png:L+"PNG.svg?vh=96cd9a",jpg:L+"JPG.svg?vh=06e819",jpg2:L+"JPG2.svg?vh=f0eb7f",jpeg:L+"JPEG.svg?vh=6a65e9",gif:L+"GIF.svg?vh=c3c2c3",bmp:L+"BMP.svg?vh=d2243a",webp:L+"WEBP.svg?vh=fedd74",svg:L+"SVG.svg?vh=a15e46",tiff:L+"TIFF.svg?vh=1f30c3",tif:L+"TIF.svg?vh=b383c9",heic:L+"HEIC.svg?vh=84adfe",avif:L+"AVIF.svg?vh=536b30",ico:L+"ICO.svg?vh=79063d",psd:L+"PSD.svg?vh=be6140",psb:L+"PSB.svg?vh=678646",ai:L+"AI.svg?vh=84b254",dwg:L+"DWG.svg?vh=971fb3",mp4:L+"MP4.svg?vh=42f175",webm:L+"WEBM.svg?vh=26a84a",avi:L+"AVI.svg?vh=d22ba8",mpeg:L+"MPEG.svg?vh=ba93bb",ogv:L+"OGV.svg?vh=74d453","3gp":L+"3GP.svg?vh=f0d388","3g2":L+"3G2.svg?vh=04c652",swf:L+"SWF.svg?vh=3955e2",fla:L+"FLA.svg?vh=daf585",m3u8:L+"M3U8.svg?vh=7d5e62",mp3:L+"MP3.svg?vh=66bbef",wav:L+"WAV.svg?vh=d7a7d5",aac:L+"AAC.svg?vh=07f3f9",oga:L+"OGA.svg?vh=a5c622",opus:L+"OPUS.svg?vh=9548b1",weba:L+"WEBA.svg?vh=4dcf70",mid:L+"MID.svg?vh=3f0e29",midi:L+"MIDI.svg?vh=9fedec",cda:L+"CDA.svg?vh=85b83b",pdf:L+"PDF.svg?vh=18c5f7",doc:L+"DOC.svg?vh=d1b47c",docx:L+"DOCX.svg?vh=1eb6b0",txt:L+"TXT.svg?vh=307979",rtf:L+"RTF.svg?vh=978c5f",xls:L+"XLS.svg?vh=13b5f7",xlsx:L+"XLSX.svg?vh=79d64a",ppt:L+"PPT.svg?vh=4ee29b",pptx:L+"PPTX.svg?vh=8b1568",csv:L+"CSV.svg?vh=4add78",odt:L+"ODT.svg?vh=940781",ods:L+"ODS.svg?vh=9fbe9a",odp:L+"ODP.svg?vh=bf892d",dbf:L+"DBF.svg?vh=457bd4",vsd:L+"VSD.svg?vh=8a9ccb",abw:L+"ABW.svg?vh=313dc7",epub:L+"EPUB.svg?vh=15263d",azw:L+"AZW.svg?vh=a018b1",ics:L+"ICS.svg?vh=909f63",ogx:L+"OGX.svg?vh=f694d2",zip:L+"ZIP.svg?vh=84f98b",rar:L+"RAR.svg?vh=1d6423","7z":L+"7Z.svg?vh=e007e5",tar:L+"TAR.svg?vh=603aed",gz:L+"GZ.svg?vh=de13f7",bz:L+"BZ.svg?vh=0374ff",bz2:L+"BZ2.svg?vh=e14294",arc:L+"ARC.svg?vh=942fad",jar:L+"JAR.svg?vh=149796",mpkg:L+"MPKG.svg?vh=dea655",ttf:L+"TTF.svg?vh=d2e2c1",otf:L+"OTF.svg?vh=c904fd",woff:L+"WOFF.svg?vh=4b8177",woff2:L+"WOFF2.svg?vh=b532d3",eot:L+"EOT.svg?vh=a54980",js:L+"JS.svg?vh=524691",mjs:L+"MJS.svg?vh=d57921",ts:L+"TS.svg?vh=9af3ae",css:L+"CSS.svg?vh=287863",html:L+"HTML.svg?vh=fa7a87",htm:L+"HTM.svg?vh=21323d",xhtml:L+"XHTML.svg?vh=e6d6a9",xul:L+"XUL.svg?vh=6c9c71",json:L+"JSON.svg?vh=104c9e",jsonld:L+"JSONLD.svg?vh=f30c0f",xml:L+"XML.svg?vh=7f7194",php:L+"PHP.svg?vh=503e36",sh:L+"SH.svg?vh=3b820e",csh:L+"CSH.svg?vh=08c0cc",exe:L+"EXE.svg?vh=ccca53",iso:L+"ISO.svg?vh=064b8f",bin:L+"BIN.svg?vh=1e9618",glb:Ke,gltf:Ke,obj:Ke,fbx:Ke,stl:Ke,usdz:Ke,ply:Ke,"3ds":Ke,dae:Ke};function Wr(){return fr._default}function Jr(s){const e=(s.split(".").pop()||"").toLowerCase();return fr[e]||fr._default}function Fu(s){if(s==null||!Number.isFinite(s)||s<0)return"—";const e=["B","KB","MB","GB","TB"];let t=s,i=0;for(;t>=1024&&i<e.length-1;)t/=1024,i++;const r=(a,l)=>{const d=l>0&&Math.round(a*10)/10<10?1:0,c=a.toFixed(d);return{str:c,rounded:Number(c)}},o=r(t,i);let n=o.str;return o.rounded>=1024&&i<e.length-1&&(t/=1024,i++,n=r(t,i).str),`${n} ${e[i]}`}function Lu(s,e,t){let r=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(r+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return r}function Uu(s,e){const t=new XMLHttpRequest;let i=!1;const r=Lu(e.apiBase,e.folder,e.extraParams);t.open("POST",r);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):Fi(n)?e.onComplete(Dr(n,s)):e.onError(new Error(ms(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const o=new FormData;if(s.file){const n={name:s.name,type:s.type};o.append("info[files[]]",JSON.stringify(n)),Object.keys(s.meta).length>0&&o.append("meta[files[]]",JSON.stringify(s.meta)),s.tags.length>0&&o.append("tags[files[]]",JSON.stringify(s.tags)),jr(s.product)&&o.append("product[files[]]",JSON.stringify(Br(s.product))),o.append("files[]",s.file,s.name)}return t.send(o),{abort(){i=!0,t.abort()}}}function Is(s){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":s}}function ht(s){return s.replace(/\/+$/,"")}const Du={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function qi(s){return Du[s]??s}function Eg(s,e){const t=ht(s),i=btoa(JSON.stringify({origin:window.location.origin})),r=qi(e);return`${t}/${r}/connect?state=${encodeURIComponent(i)}`}async function zu(s,e,t,i="",r){const o=ht(s),n=i?`/${i}`:"",a=qi(e),l=await fetch(`${o}/${a}/list${n}`,{method:"GET",headers:Is(t),credentials:"same-origin",signal:r});if(l.status===401)throw new Xr;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Mu(s,e,t,i){const r=ht(s),o=await fetch(`${r}/${t}`,{method:"GET",headers:Is(e),credentials:"same-origin",signal:i});if(o.status===401)throw new Xr;if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${o.status})`)}return o.json()}async function Pg(s,e,t,i,r,o){const n=[];async function a(l,d){let c=null,u=!0;do{if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");const h=u?await zu(s,e,t,l,o):await Mu(s,t,c,o);u=!1,c=h.nextPagePath;for(const f of h.items){if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");if(f.isFolder){const y=d?`${d}/${f.name}`:f.name;await a(f.requestPath,y)}else n.push({...f,relativeFolder:d})}}while(c)}return await a(i,r),n}async function Rg(s,e,t,i){const r=ht(s),o=qi(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${r}/search/${o}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function ju(s,e,t,i,r,o=!1){const n=ht(s),a=qi(e),l=o?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,d=o?{Accept:"application/json","Content-Type":"application/json"}:Is(t),c=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...r,httpMethod:r.httpMethod??"POST",useFormData:r.useFormData??!0,fieldname:r.fieldname??"files[]"})});if(c.status===401)throw new Xr;if(!c.ok){const u=await c.json().catch(()=>null);throw new Error((u==null?void 0:u.message)||`Companion upload failed (HTTP ${c.status})`)}return c.json()}async function Bu(s,e,t){const i=ht(s),r=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!r.ok){const o=await r.json().catch(()=>null);throw new Error((o==null?void 0:o.message)||`Could not fetch URL metadata (HTTP ${r.status})`)}return r.json()}async function Nu(s,e,t,i){const r=ht(s),o=await fetch(`${r}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${o.status})`)}return o.json()}async function Ag(s,e,t){const i=ht(s),r=qi(e),o=await fetch(`${i}/${r}/logout`,{method:"GET",headers:Is(t),credentials:"same-origin"});return o.ok?o.json():{ok:!1,revoked:!1}}function qu(s){var r;const t=((r=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(s))==null?void 0:r[1])??s;return`${/^https:\/\//i.test(s)?"wss":"ws"}://${t}`}class Xr extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Qa(s,e,t){let r=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(r+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return r}function el(s,e){const t={name:s.name,type:s.type,"filerobot-folder":e};return s.meta&&Object.keys(s.meta).length>0&&(t.meta=JSON.stringify(s.meta)),s.tags&&s.tags.length>0&&(t.tags=JSON.stringify(s.tags)),jr(s.product)&&(t.product=JSON.stringify(Br(s.product))),t}function tl(s){const t=`${qu(s.companionUrl)}/api/${s.token}`;let i;try{i=new WebSocket(t)}catch{return s.onError(new Error("Failed to connect to upload progress channel")),null}let r=!1;const o=()=>{r=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,d;if(!r)try{const c=JSON.parse(n.data);switch(c.action){case"progress":{const u=c.payload,h=u.bytesUploaded??0,f=u.bytesTotal??(s.expectedSize||1);s.onProgress(h,f);break}case"success":{const u=c.payload;if(o(),i.close(),(a=u.response)!=null&&a.responseText)try{const h=JSON.parse(u.response.responseText);if(h.status==="success"){s.onComplete(h);return}if(Fi(h)){s.onComplete(Dr(h,s.uploadFile));return}s.onError(new Error(ms(h,"Upload failed")));return}catch{}s.onError(new Error("Upload completed but no valid response received"));break}case"error":{const u=c.payload;o(),i.close();let h=((l=u.error)==null?void 0:l.message)||"Upload failed";if((d=u.response)!=null&&d.responseText)try{const f=JSON.parse(u.response.responseText);h=ms(f,h)}catch{}s.onError(new Error(h));break}}}catch{}},i.onerror=()=>{r||(o(),s.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{r||(o(),s.onError(new Error("Upload progress connection closed unexpectedly")))},i}function il(s){if(s){s.onmessage=null,s.onerror=null,s.onclose=null;try{s.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}s.close()}}async function Hu(s,e,t,i,r,o,n){const a=s.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:r,size:o,metadata:n})});if(!l.ok){const d=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${d}`)}return l.json()}function Vu(s,e){const t=s.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,r=null;const o=Qa(e.apiBase,e.folder,e.extraParams),n=el(s,e.folder);return(t.pickerAccessToken?Hu(t.companionUrl,t.pickerAccessToken,t.fileId,o,e.authHeaders,t.size,n):ju(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:o,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(l=>{i||(r=tl({companionUrl:t.companionUrl,token:l.token,uploadFile:s,expectedSize:t.size,onProgress:(d,c)=>{i||e.onProgress(d,c)},onComplete:d=>{i||e.onComplete(d)},onError:d=>{i||e.onError(d)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,il(r),r=null}}}function Ku(s,e){const t=s.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,r=null;const o=new AbortController,n=Qa(e.apiBase,e.folder,e.extraParams);return Bu(e.companionUrl,t,o.signal).then(a=>{var d;if(i)return null;(d=e.onMeta)==null||d.call(e,{name:a.name,type:a.type,size:a.size});const l=el(s,e.folder);return a.name&&!s.nameIsUserDefined&&(l.name=a.name),a.type&&(l.type=a.type),Nu(e.companionUrl,t,{fileId:s.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},o.signal).then(c=>({result:c,size:a.size}))}).then(a=>{i||!a||(r=tl({companionUrl:e.companionUrl,token:a.result.token,uploadFile:s,expectedSize:a.size,onProgress:(l,d)=>{i||e.onProgress(l,d)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,o.abort(),il(r),r=null}}}function gr(s){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gr(s)}function Gu(s,e,t){return Object.defineProperty(s,"prototype",{writable:!1}),s}function Yu(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Wu(s,e,t){return e=Ci(e),Ju(s,Zr()?Reflect.construct(e,t||[],Ci(s).constructor):e.apply(s,t))}function Ju(s,e){if(e&&(gr(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xu(s)}function Xu(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Zu(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Si(s,e)}function mr(s){var e=typeof Map=="function"?new Map:void 0;return mr=function(i){if(i===null||!ep(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Qu(i,arguments,Ci(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Si(r,i)},mr(s)}function Qu(s,e,t){if(Zr())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(s.bind.apply(s,i));return t&&Si(r,t.prototype),r}function Zr(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Zr=function(){return!!s})()}function ep(s){try{return Function.toString.call(s).indexOf("[native code]")!==-1}catch{return typeof s=="function"}}function Si(s,e){return Si=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Si(s,e)}function Ci(s){return Ci=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ci(s)}var ci=(function(s){function e(t){var i,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Yu(this,e),i=Wu(this,e,[t]),i.originalRequest=o,i.originalResponse=n,i.causingError=r,r!=null&&(t+=", caused by ".concat(r.toString())),o!=null){var a=o.getHeader("X-Request-ID")||"n/a",l=o.getMethod(),d=o.getURL(),c=n?n.getStatus():"n/a",u=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(c,", response text: ").concat(u,", request id: ").concat(a,")")}return i.message=t,i}return Zu(e,s),Gu(e)})(mr(Error));function Ei(s){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ei(s)}function tp(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function ip(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,rp(i.key),i)}}function sp(s,e,t){return e&&ip(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function rp(s){var e=op(s,"string");return Ei(e)=="symbol"?e:e+""}function op(s,e){if(Ei(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Ei(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var np=(function(){function s(){tp(this,s)}return sp(s,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const sl="3.7.8",ap=sl,ri=typeof Buffer=="function",Sn=typeof TextDecoder=="function"?new TextDecoder:void 0,Cn=typeof TextEncoder=="function"?new TextEncoder:void 0,lp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ui=Array.prototype.slice.call(lp),Qi=(s=>{let e={};return s.forEach((t,i)=>e[t]=i),e})(ui),dp=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,pe=String.fromCharCode.bind(String),En=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):s=>new Uint8Array(Array.prototype.slice.call(s,0)),rl=s=>s.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),ol=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),nl=s=>{let e,t,i,r,o="";const n=s.length%3;for(let a=0;a<s.length;){if((t=s.charCodeAt(a++))>255||(i=s.charCodeAt(a++))>255||(r=s.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|r,o+=ui[e>>18&63]+ui[e>>12&63]+ui[e>>6&63]+ui[e&63]}return n?o.slice(0,n-3)+"===".substring(n):o},Qr=typeof btoa=="function"?s=>btoa(s):ri?s=>Buffer.from(s,"binary").toString("base64"):nl,vr=ri?s=>Buffer.from(s).toString("base64"):s=>{let t=[];for(let i=0,r=s.length;i<r;i+=4096)t.push(pe.apply(null,s.subarray(i,i+4096)));return Qr(t.join(""))},os=(s,e=!1)=>e?rl(vr(s)):vr(s),cp=s=>{if(s.length<2){var e=s.charCodeAt(0);return e<128?s:e<2048?pe(192|e>>>6)+pe(128|e&63):pe(224|e>>>12&15)+pe(128|e>>>6&63)+pe(128|e&63)}else{var e=65536+(s.charCodeAt(0)-55296)*1024+(s.charCodeAt(1)-56320);return pe(240|e>>>18&7)+pe(128|e>>>12&63)+pe(128|e>>>6&63)+pe(128|e&63)}},up=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,al=s=>s.replace(up,cp),Pn=ri?s=>Buffer.from(s,"utf8").toString("base64"):Cn?s=>vr(Cn.encode(s)):s=>Qr(al(s)),Gt=(s,e=!1)=>e?rl(Pn(s)):Pn(s),Rn=s=>Gt(s,!0),pp=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,hp=s=>{switch(s.length){case 4:var e=(7&s.charCodeAt(0))<<18|(63&s.charCodeAt(1))<<12|(63&s.charCodeAt(2))<<6|63&s.charCodeAt(3),t=e-65536;return pe((t>>>10)+55296)+pe((t&1023)+56320);case 3:return pe((15&s.charCodeAt(0))<<12|(63&s.charCodeAt(1))<<6|63&s.charCodeAt(2));default:return pe((31&s.charCodeAt(0))<<6|63&s.charCodeAt(1))}},ll=s=>s.replace(pp,hp),dl=s=>{if(s=s.replace(/\s+/g,""),!dp.test(s))throw new TypeError("malformed base64.");s+="==".slice(2-(s.length&3));let e,t,i,r=[];for(let o=0;o<s.length;)e=Qi[s.charAt(o++)]<<18|Qi[s.charAt(o++)]<<12|(t=Qi[s.charAt(o++)])<<6|(i=Qi[s.charAt(o++)]),t===64?r.push(pe(e>>16&255)):i===64?r.push(pe(e>>16&255,e>>8&255)):r.push(pe(e>>16&255,e>>8&255,e&255));return r.join("")},eo=typeof atob=="function"?s=>atob(ol(s)):ri?s=>Buffer.from(s,"base64").toString("binary"):dl,cl=ri?s=>En(Buffer.from(s,"base64")):s=>En(eo(s).split("").map(e=>e.charCodeAt(0))),ul=s=>cl(pl(s)),fp=ri?s=>Buffer.from(s,"base64").toString("utf8"):Sn?s=>Sn.decode(cl(s)):s=>ll(eo(s)),pl=s=>ol(s.replace(/[-_]/g,e=>e=="-"?"+":"/")),br=s=>fp(pl(s)),gp=s=>{if(typeof s!="string")return!1;const e=s.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},hl=s=>({value:s,enumerable:!1,writable:!0,configurable:!0}),fl=function(){const s=(e,t)=>Object.defineProperty(String.prototype,e,hl(t));s("fromBase64",function(){return br(this)}),s("toBase64",function(e){return Gt(this,e)}),s("toBase64URI",function(){return Gt(this,!0)}),s("toBase64URL",function(){return Gt(this,!0)}),s("toUint8Array",function(){return ul(this)})},gl=function(){const s=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,hl(t));s("toBase64",function(e){return os(this,e)}),s("toBase64URI",function(){return os(this,!0)}),s("toBase64URL",function(){return os(this,!0)})},mp=()=>{fl(),gl()},vp={version:sl,VERSION:ap,atob:eo,atobPolyfill:dl,btoa:Qr,btoaPolyfill:nl,fromBase64:br,toBase64:Gt,encode:Gt,encodeURI:Rn,encodeURL:Rn,utob:al,btou:ll,decode:br,isValid:gp,fromUint8Array:os,toUint8Array:ul,extendString:fl,extendUint8Array:gl,extendBuiltins:mp};var An=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Js,On;function xp(){return On||(On=1,Js=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),Js}var es={},Tn;function yp(){if(Tn)return es;Tn=1;var s=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function r(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(n);){var c=t(d[1]),u=t(d[2]);c===null||u===null||c in l||(l[c]=u)}return l}function o(n,a){a=a||"";var l=[],d,c;typeof a!="string"&&(a="?");for(c in n)if(s.call(n,c)){if(d=n[c],!d&&(d===null||d===e||isNaN(d))&&(d=""),c=i(c),d=i(d),c===null||d===null)continue;l.push(c+"="+d)}return l.length?a+l.join("&"):""}return es.stringify=o,es.parse=r,es}var Xs,In;function _p(){if(In)return Xs;In=1;var s=xp(),e=yp(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,o=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(k){return(k||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function(C,b){return h(b.protocol)?C.replace(/\\/g,"/"):C},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function u(k){var C;typeof window<"u"?C=window:typeof An<"u"?C=An:typeof self<"u"?C=self:C={};var b=C.location||{};k=k||b;var w={},T=typeof k,A;if(k.protocol==="blob:")w=new g(unescape(k.pathname),{});else if(T==="string"){w=new g(k,{});for(A in c)delete w[A]}else if(T==="object"){for(A in k)A in c||(w[A]=k[A]);w.slashes===void 0&&(w.slashes=r.test(k.href))}return w}function h(k){return k==="file:"||k==="ftp:"||k==="http:"||k==="https:"||k==="ws:"||k==="wss:"}function f(k,C){k=l(k),k=k.replace(i,""),C=C||{};var b=n.exec(k),w=b[1]?b[1].toLowerCase():"",T=!!b[2],A=!!b[3],U=0,D;return T?A?(D=b[2]+b[3]+b[4],U=b[2].length+b[3].length):(D=b[2]+b[4],U=b[2].length):A?(D=b[3]+b[4],U=b[3].length):D=b[4],w==="file:"?U>=2&&(D=D.slice(2)):h(w)?D=b[4]:w?T&&(D=D.slice(2)):U>=2&&h(C.protocol)&&(D=b[4]),{protocol:w,slashes:T||h(w),slashesCount:U,rest:D}}function y(k,C){if(k==="")return C;for(var b=(C||"/").split("/").slice(0,-1).concat(k.split("/")),w=b.length,T=b[w-1],A=!1,U=0;w--;)b[w]==="."?b.splice(w,1):b[w]===".."?(b.splice(w,1),U++):U&&(w===0&&(A=!0),b.splice(w,1),U--);return A&&b.unshift(""),(T==="."||T==="..")&&b.push(""),b.join("/")}function g(k,C,b){if(k=l(k),k=k.replace(i,""),!(this instanceof g))return new g(k,C,b);var w,T,A,U,D,K,X=d.slice(),V=typeof C,z=this,le=0;for(V!=="object"&&V!=="string"&&(b=C,C=null),b&&typeof b!="function"&&(b=e.parse),C=u(C),T=f(k||"",C),w=!T.protocol&&!T.slashes,z.slashes=T.slashes||w&&C.slashes,z.protocol=T.protocol||C.protocol||"",k=T.rest,(T.protocol==="file:"&&(T.slashesCount!==2||a.test(k))||!T.slashes&&(T.protocol||T.slashesCount<2||!h(z.protocol)))&&(X[3]=[/(.*)/,"pathname"]);le<X.length;le++){if(U=X[le],typeof U=="function"){k=U(k,z);continue}A=U[0],K=U[1],A!==A?z[K]=k:typeof A=="string"?(D=A==="@"?k.lastIndexOf(A):k.indexOf(A),~D&&(typeof U[2]=="number"?(z[K]=k.slice(0,D),k=k.slice(D+U[2])):(z[K]=k.slice(D),k=k.slice(0,D)))):(D=A.exec(k))&&(z[K]=D[1],k=k.slice(0,D.index)),z[K]=z[K]||w&&U[3]&&C[K]||"",U[4]&&(z[K]=z[K].toLowerCase())}b&&(z.query=b(z.query)),w&&C.slashes&&z.pathname.charAt(0)!=="/"&&(z.pathname!==""||C.pathname!=="")&&(z.pathname=y(z.pathname,C.pathname)),z.pathname.charAt(0)!=="/"&&h(z.protocol)&&(z.pathname="/"+z.pathname),s(z.port,z.protocol)||(z.host=z.hostname,z.port=""),z.username=z.password="",z.auth&&(D=z.auth.indexOf(":"),~D?(z.username=z.auth.slice(0,D),z.username=encodeURIComponent(decodeURIComponent(z.username)),z.password=z.auth.slice(D+1),z.password=encodeURIComponent(decodeURIComponent(z.password))):z.username=encodeURIComponent(decodeURIComponent(z.auth)),z.auth=z.password?z.username+":"+z.password:z.username),z.origin=z.protocol!=="file:"&&h(z.protocol)&&z.host?z.protocol+"//"+z.host:"null",z.href=z.toString()}function S(k,C,b){var w=this;switch(k){case"query":typeof C=="string"&&C.length&&(C=(b||e.parse)(C)),w[k]=C;break;case"port":w[k]=C,s(C,w.protocol)?C&&(w.host=w.hostname+":"+C):(w.host=w.hostname,w[k]="");break;case"hostname":w[k]=C,w.port&&(C+=":"+w.port),w.host=C;break;case"host":w[k]=C,o.test(C)?(C=C.split(":"),w.port=C.pop(),w.hostname=C.join(":")):(w.hostname=C,w.port="");break;case"protocol":w.protocol=C.toLowerCase(),w.slashes=!b;break;case"pathname":case"hash":if(C){var T=k==="pathname"?"/":"#";w[k]=C.charAt(0)!==T?T+C:C}else w[k]=C;break;case"username":case"password":w[k]=encodeURIComponent(C);break;case"auth":var A=C.indexOf(":");~A?(w.username=C.slice(0,A),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=C.slice(A+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(C))}for(var U=0;U<d.length;U++){var D=d[U];D[4]&&(w[D[1]]=w[D[1]].toLowerCase())}return w.auth=w.password?w.username+":"+w.password:w.username,w.origin=w.protocol!=="file:"&&h(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString(),w}function E(k){(!k||typeof k!="function")&&(k=e.stringify);var C,b=this,w=b.host,T=b.protocol;T&&T.charAt(T.length-1)!==":"&&(T+=":");var A=T+(b.protocol&&b.slashes||h(b.protocol)?"//":"");return b.username?(A+=b.username,b.password&&(A+=":"+b.password),A+="@"):b.password?(A+=":"+b.password,A+="@"):b.protocol!=="file:"&&h(b.protocol)&&!w&&b.pathname!=="/"&&(A+="@"),(w[w.length-1]===":"||o.test(b.hostname)&&!b.port)&&(w+=":"),A+=w+b.pathname,C=typeof b.query=="object"?k(b.query):b.query,C&&(A+=C.charAt(0)!=="?"?"?"+C:C),b.hash&&(A+=b.hash),A}return g.prototype={set:S,toString:E},g.extractProtocol=f,g.location=u,g.trimLeft=l,g.qs=e,Xs=g,Xs}var wp=_p();const kp=bp(wp);function $p(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){var e=Math.random()*16|0,t=s==="x"?e:e&3|8;return t.toString(16)})}function xr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */xr=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function($,v,_){$[v]=_.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d($,v,_){return Object.defineProperty($,v,{value:_,enumerable:!0,configurable:!0,writable:!0}),$[v]}try{d({},"")}catch{d=function(_,O,F){return _[O]=F}}function c($,v,_,O){var F=v&&v.prototype instanceof E?v:E,I=Object.create(F.prototype),j=new le(O||[]);return r(I,"_invoke",{value:K($,_,j)}),I}function u($,v,_){try{return{type:"normal",arg:$.call(v,_)}}catch(O){return{type:"throw",arg:O}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",y="executing",g="completed",S={};function E(){}function k(){}function C(){}var b={};d(b,n,function(){return this});var w=Object.getPrototypeOf,T=w&&w(w(be([])));T&&T!==t&&i.call(T,n)&&(b=T);var A=C.prototype=E.prototype=Object.create(b);function U($){["next","throw","return"].forEach(function(v){d($,v,function(_){return this._invoke(v,_)})})}function D($,v){function _(F,I,j,G){var J=u($[F],$,I);if(J.type!=="throw"){var xe=J.arg,ue=xe.value;return ue&&Rt(ue)=="object"&&i.call(ue,"__await")?v.resolve(ue.__await).then(function(ye){_("next",ye,j,G)},function(ye){_("throw",ye,j,G)}):v.resolve(ue).then(function(ye){xe.value=ye,j(xe)},function(ye){return _("throw",ye,j,G)})}G(J.arg)}var O;r(this,"_invoke",{value:function(I,j){function G(){return new v(function(J,xe){_(I,j,J,xe)})}return O=O?O.then(G,G):G()}})}function K($,v,_){var O=h;return function(F,I){if(O===y)throw Error("Generator is already running");if(O===g){if(F==="throw")throw I;return{value:s,done:!0}}for(_.method=F,_.arg=I;;){var j=_.delegate;if(j){var G=X(j,_);if(G){if(G===S)continue;return G}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(O===h)throw O=g,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);O=y;var J=u($,v,_);if(J.type==="normal"){if(O=_.done?g:f,J.arg===S)continue;return{value:J.arg,done:_.done}}J.type==="throw"&&(O=g,_.method="throw",_.arg=J.arg)}}}function X($,v){var _=v.method,O=$.iterator[_];if(O===s)return v.delegate=null,_==="throw"&&$.iterator.return&&(v.method="return",v.arg=s,X($,v),v.method==="throw")||_!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+_+"' method")),S;var F=u(O,$.iterator,v.arg);if(F.type==="throw")return v.method="throw",v.arg=F.arg,v.delegate=null,S;var I=F.arg;return I?I.done?(v[$.resultName]=I.value,v.next=$.nextLoc,v.method!=="return"&&(v.method="next",v.arg=s),v.delegate=null,S):I:(v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,S)}function V($){var v={tryLoc:$[0]};1 in $&&(v.catchLoc=$[1]),2 in $&&(v.finallyLoc=$[2],v.afterLoc=$[3]),this.tryEntries.push(v)}function z($){var v=$.completion||{};v.type="normal",delete v.arg,$.completion=v}function le($){this.tryEntries=[{tryLoc:"root"}],$.forEach(V,this),this.reset(!0)}function be($){if($||$===""){var v=$[n];if(v)return v.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var _=-1,O=function F(){for(;++_<$.length;)if(i.call($,_))return F.value=$[_],F.done=!1,F;return F.value=s,F.done=!0,F};return O.next=O}}throw new TypeError(Rt($)+" is not iterable")}return k.prototype=C,r(A,"constructor",{value:C,configurable:!0}),r(C,"constructor",{value:k,configurable:!0}),k.displayName=d(C,l,"GeneratorFunction"),e.isGeneratorFunction=function($){var v=typeof $=="function"&&$.constructor;return!!v&&(v===k||(v.displayName||v.name)==="GeneratorFunction")},e.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,C):($.__proto__=C,d($,l,"GeneratorFunction")),$.prototype=Object.create(A),$},e.awrap=function($){return{__await:$}},U(D.prototype),d(D.prototype,a,function(){return this}),e.AsyncIterator=D,e.async=function($,v,_,O,F){F===void 0&&(F=Promise);var I=new D(c($,v,_,O),F);return e.isGeneratorFunction(v)?I:I.next().then(function(j){return j.done?j.value:I.next()})},U(A),d(A,l,"Generator"),d(A,n,function(){return this}),d(A,"toString",function(){return"[object Generator]"}),e.keys=function($){var v=Object($),_=[];for(var O in v)_.push(O);return _.reverse(),function F(){for(;_.length;){var I=_.pop();if(I in v)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=be,le.prototype={constructor:le,reset:function(v){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(z),!v)for(var _ in this)_.charAt(0)==="t"&&i.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=s)},stop:function(){this.done=!0;var v=this.tryEntries[0].completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(v){if(this.done)throw v;var _=this;function O(xe,ue){return j.type="throw",j.arg=v,_.next=xe,ue&&(_.method="next",_.arg=s),!!ue}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],j=I.completion;if(I.tryLoc==="root")return O("end");if(I.tryLoc<=this.prev){var G=i.call(I,"catchLoc"),J=i.call(I,"finallyLoc");if(G&&J){if(this.prev<I.catchLoc)return O(I.catchLoc,!0);if(this.prev<I.finallyLoc)return O(I.finallyLoc)}else if(G){if(this.prev<I.catchLoc)return O(I.catchLoc,!0)}else{if(!J)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return O(I.finallyLoc)}}}},abrupt:function(v,_){for(var O=this.tryEntries.length-1;O>=0;--O){var F=this.tryEntries[O];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(v==="break"||v==="continue")&&I.tryLoc<=_&&_<=I.finallyLoc&&(I=null);var j=I?I.completion:{};return j.type=v,j.arg=_,I?(this.method="next",this.next=I.finallyLoc,S):this.complete(j)},complete:function(v,_){if(v.type==="throw")throw v.arg;return v.type==="break"||v.type==="continue"?this.next=v.arg:v.type==="return"?(this.rval=this.arg=v.arg,this.method="return",this.next="end"):v.type==="normal"&&_&&(this.next=_),S},finish:function(v){for(var _=this.tryEntries.length-1;_>=0;--_){var O=this.tryEntries[_];if(O.finallyLoc===v)return this.complete(O.completion,O.afterLoc),z(O),S}},catch:function(v){for(var _=this.tryEntries.length-1;_>=0;--_){var O=this.tryEntries[_];if(O.tryLoc===v){var F=O.completion;if(F.type==="throw"){var I=F.arg;z(O)}return I}}throw Error("illegal catch attempt")},delegateYield:function(v,_,O){return this.delegate={iterator:be(v),resultName:_,nextLoc:O},this.method==="next"&&(this.arg=s),S}},e}function Fn(s,e,t,i,r,o,n){try{var a=s[o](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,r)}function Sp(s){return function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function n(l){Fn(o,i,r,n,a,"next",l)}function a(l){Fn(o,i,r,n,a,"throw",l)}n(void 0)})}}function ml(s,e){return Pp(s)||Ep(s,e)||vl(s,e)||Cp()}function Cp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ep(s,e){var t=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var i,r,o,n,a=[],l=!0,d=!1;try{if(o=(t=t.call(s)).next,e!==0)for(;!(l=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(c){d=!0,r=c}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(d)throw r}}return a}}function Pp(s){if(Array.isArray(s))return s}function Rt(s){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rt(s)}function Rp(s,e){var t=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!t){if(Array.isArray(s)||(t=vl(s))||e){t&&(s=t);var i=0,r=function(){};return{s:r,n:function(){return i>=s.length?{done:!0}:{done:!1,value:s[i++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,n=!1,a;return{s:function(){t=t.call(s)},n:function(){var d=t.next();return o=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function vl(s,e){if(s){if(typeof s=="string")return Ln(s,e);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ln(s,e)}}function Ln(s,e){(e==null||e>s.length)&&(e=s.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=s[t];return i}function Un(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function Dt(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Un(Object(t),!0).forEach(function(i){Ap(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Un(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function Ap(s,e,t){return e=bl(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Op(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Dn(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,bl(i.key),i)}}function Tp(s,e,t){return e&&Dn(s.prototype,e),t&&Dn(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function bl(s){var e=Ip(s,"string");return Rt(e)=="symbol"?e:e+""}function Ip(s,e){if(Rt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Rt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var ns="tus-v1",as="ietf-draft-03",pi="ietf-draft-05",Fp={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:xl,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:ns},xs=(function(){function s(e,t){Op(this,s),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Tp(s,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![ns,as,pi].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var r=this.options.retryDelays;if(r!=null&&Object.prototype.toString.call(r)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var o=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];o<n.length;o++){var a=n[o];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,r=this._size,o=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Up(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(c,u){c.uploadUrl=i._parallelUploadUrls[u]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(c,u){var h=0;return i._source.slice(c.start,c.end).then(function(f){var y=f.value;return new Promise(function(g,S){var E=Dt(Dt({},i.options),{},{uploadUrl:c.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Dt(Dt({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:g,onError:S,onProgress:function(b){o=o-h+b,h=b,i._emitProgress(o,r)},onUploadUrlAvailable:function(){i._parallelUploadUrls[u]=k.url,i._parallelUploadUrls.filter(function(b){return!!b}).length===a.length&&i._saveUploadInUrlStorage()}}),k=new s(y,E);k.start(),i._parallelUploads.push(k)})})}),d;Promise.all(l).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var c=zn(i.options.metadata);return c!==""&&d.setHeader("Upload-Metadata",c),i._sendRequest(d,null)}).then(function(c){if(!Nt(c.getStatus(),200)){i._emitHttpError(d,c,"tus: unexpected response while creating upload");return}var u=c.getHeader("Location");if(u==null){i._emitHttpError(d,c,"tus: invalid or missing Location header");return}i.url=Nn(i.options.endpoint,u),"Created upload at ".concat(i.url),i._emitSuccess(c)}).catch(function(c){i._emitError(c)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var r=Rp(this._parallelUploads),o;try{for(r.s();!(o=r.n()).done;){var n=o.value;n.abort(t)}}catch(a){r.e(a)}finally{r.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():s.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,r,o){this._emitError(new ci(r,o,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var r=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(r&&(this._retryAttempt=0),Bn(t,this._retryAttempt,this.options)){var o=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},o);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,r){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,r)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var r=zn(this.options.metadata);r!==""&&i.setHeader("Upload-Metadata",r);var o;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,o=this._addChunkToRequest(i)):((this.options.protocol===as||this.options.protocol===pi)&&i.setHeader("Upload-Complete","?0"),o=this._sendRequest(i,null)),o.then(function(n){if(!Nt(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=Nn(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),r=this._sendRequest(i,null);r.then(function(o){var n=o.getStatus();if(!Nt(n,200)){if(n===423){t._emitHttpError(i,o,"tus: upload is currently locked; retry later");return}if(Nt(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,o,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(o.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,o,"tus: invalid or missing offset value");return}var l=Number.parseInt(o.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===ns){t._emitHttpError(i,o,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(o);return}t._offset=a,t._performUpload()})}).catch(function(o){t._emitHttpError(i,null,"tus: failed to resume upload",o)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var r=this._addChunkToRequest(i);r.then(function(o){if(!Nt(o.getStatus(),200)){t._emitHttpError(i,o,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,o)}).catch(function(o){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),o)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,r=this._offset,o=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(r+n,i._size)}),this.options.protocol===ns?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===pi&&t.setHeader("Content-Type","application/partial-upload"),(o===Number.POSITIVE_INFINITY||o>this._size)&&!this.options.uploadLengthDeferred&&(o=this._size),this._source.slice(r,o).then(function(n){var a=n.value,l=n.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var c=i._offset+d;return!i.options.uploadLengthDeferred&&l&&c!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(c," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===as||i.options.protocol===pi)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var r=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(r)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(r,this._size),this._emitChunkComplete(r-this._offset,r,this._size),this._offset=r,r===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var r=Mn(t,i,this.options);return this._req=r,r}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(r){t._urlStorageKey=r})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return jn(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Mn("DELETE",t,i);return jn(r,null,i).then(function(o){if(o.getStatus()!==204)throw new ci("tus: unexpected response while terminating upload",null,r,o)}).catch(function(o){if(o instanceof ci||(o=new ci("tus: failed to terminate upload",o,r,null)),!Bn(o,0,i))throw o;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Dt(Dt({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,n)}).then(function(){return s.terminate(t,l)})})}}])})();function zn(s){return Object.entries(s).map(function(e){var t=ml(e,2),i=t[0],r=t[1];return"".concat(i," ").concat(vp.encode(String(r)))}).join(",")}function Nt(s,e){return s>=e&&s<e+100}function Mn(s,e,t){var i=t.httpStack.createRequest(s,e);t.protocol===as?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===pi?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var r=t.headers||{},o=0,n=Object.entries(r);o<n.length;o++){var a=ml(n[o],2),l=a[0],d=a[1];i.setHeader(l,d)}if(t.addRequestId){var c=$p();i.setHeader("X-Request-ID",c)}return i}function jn(s,e,t){return yr.apply(this,arguments)}function yr(){return yr=Sp(xr().mark(function s(e,t,i){var r;return xr().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(r=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,r);case 9:return n.abrupt("return",r);case 10:case"end":return n.stop()}},s)})),yr.apply(this,arguments)}function Lp(){var s=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(s=!1),s}function Bn(s,e,t){return t.retryDelays==null||e>=t.retryDelays.length||s.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(s,e,t):xl(s)}function xl(s){var e=s.originalResponse?s.originalResponse.getStatus():0;return(!Nt(e,400)||e===409||e===423)&&Lp()}function Nn(s,e){return new kp(e,s).toString()}function Up(s,e){for(var t=Math.floor(s/e),i=[],r=0;r<e;r++)i.push({start:t*r,end:t*(r+1)});return i[e-1].end=s,i}xs.defaultOptions=Fp;var yl=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Dp(s){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var r=i.response;e(r)},i.onerror=function(r){t(r)},i.open("GET",s),i.send()})}var zp=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Mp(s){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var r=new Uint8Array(i.result);e({value:r})},i.onerror=function(r){t(r)},i.readAsArrayBuffer(s)})}function Pi(s){"@babel/helpers - typeof";return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pi(s)}function jp(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Bp(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,qp(i.key),i)}}function Np(s,e,t){return e&&Bp(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function qp(s){var e=Hp(s,"string");return Pi(e)=="symbol"?e:e+""}function Hp(s,e){if(Pi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Pi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var qn=(function(){function s(e){jp(this,s),this._file=e,this.size=e.size}return Np(s,[{key:"slice",value:function(t,i){if(zp())return Mp(this._file.slice(t,i));var r=this._file.slice(t,i),o=i>=this.size;return Promise.resolve({value:r,done:o})}},{key:"close",value:function(){}}])})();function Ri(s){"@babel/helpers - typeof";return Ri=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ri(s)}function Vp(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Kp(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Yp(i.key),i)}}function Gp(s,e,t){return e&&Kp(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Yp(s){var e=Wp(s,"string");return Ri(e)=="symbol"?e:e+""}function Wp(s,e){if(Ri(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Ri(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}function Hn(s){return s===void 0?0:s.size!==void 0?s.size:s.length}function Jp(s,e){if(s.concat)return s.concat(e);if(s instanceof Blob)return new Blob([s,e],{type:s.type});if(s.set){var t=new s.constructor(s.length+e.length);return t.set(s),t.set(e,s.length),t}throw new Error("Unknown data type")}var Xp=(function(){function s(e){Vp(this,s),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Gp(s,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var r=this,o=i<=this._bufferOffset+Hn(this._buffer);if(this._done||o){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var d=l.value,c=l.done;return c?r._done=!0:r._buffer===void 0?r._buffer=d:r._buffer=Jp(r._buffer,d),r._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var r=Hn(this._buffer)===0;return this._done&&r?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function At(s){"@babel/helpers - typeof";return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},At(s)}function _r(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_r=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function($,v,_){$[v]=_.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d($,v,_){return Object.defineProperty($,v,{value:_,enumerable:!0,configurable:!0,writable:!0}),$[v]}try{d({},"")}catch{d=function(_,O,F){return _[O]=F}}function c($,v,_,O){var F=v&&v.prototype instanceof E?v:E,I=Object.create(F.prototype),j=new le(O||[]);return r(I,"_invoke",{value:K($,_,j)}),I}function u($,v,_){try{return{type:"normal",arg:$.call(v,_)}}catch(O){return{type:"throw",arg:O}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",y="executing",g="completed",S={};function E(){}function k(){}function C(){}var b={};d(b,n,function(){return this});var w=Object.getPrototypeOf,T=w&&w(w(be([])));T&&T!==t&&i.call(T,n)&&(b=T);var A=C.prototype=E.prototype=Object.create(b);function U($){["next","throw","return"].forEach(function(v){d($,v,function(_){return this._invoke(v,_)})})}function D($,v){function _(F,I,j,G){var J=u($[F],$,I);if(J.type!=="throw"){var xe=J.arg,ue=xe.value;return ue&&At(ue)=="object"&&i.call(ue,"__await")?v.resolve(ue.__await).then(function(ye){_("next",ye,j,G)},function(ye){_("throw",ye,j,G)}):v.resolve(ue).then(function(ye){xe.value=ye,j(xe)},function(ye){return _("throw",ye,j,G)})}G(J.arg)}var O;r(this,"_invoke",{value:function(I,j){function G(){return new v(function(J,xe){_(I,j,J,xe)})}return O=O?O.then(G,G):G()}})}function K($,v,_){var O=h;return function(F,I){if(O===y)throw Error("Generator is already running");if(O===g){if(F==="throw")throw I;return{value:s,done:!0}}for(_.method=F,_.arg=I;;){var j=_.delegate;if(j){var G=X(j,_);if(G){if(G===S)continue;return G}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(O===h)throw O=g,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);O=y;var J=u($,v,_);if(J.type==="normal"){if(O=_.done?g:f,J.arg===S)continue;return{value:J.arg,done:_.done}}J.type==="throw"&&(O=g,_.method="throw",_.arg=J.arg)}}}function X($,v){var _=v.method,O=$.iterator[_];if(O===s)return v.delegate=null,_==="throw"&&$.iterator.return&&(v.method="return",v.arg=s,X($,v),v.method==="throw")||_!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+_+"' method")),S;var F=u(O,$.iterator,v.arg);if(F.type==="throw")return v.method="throw",v.arg=F.arg,v.delegate=null,S;var I=F.arg;return I?I.done?(v[$.resultName]=I.value,v.next=$.nextLoc,v.method!=="return"&&(v.method="next",v.arg=s),v.delegate=null,S):I:(v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,S)}function V($){var v={tryLoc:$[0]};1 in $&&(v.catchLoc=$[1]),2 in $&&(v.finallyLoc=$[2],v.afterLoc=$[3]),this.tryEntries.push(v)}function z($){var v=$.completion||{};v.type="normal",delete v.arg,$.completion=v}function le($){this.tryEntries=[{tryLoc:"root"}],$.forEach(V,this),this.reset(!0)}function be($){if($||$===""){var v=$[n];if(v)return v.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var _=-1,O=function F(){for(;++_<$.length;)if(i.call($,_))return F.value=$[_],F.done=!1,F;return F.value=s,F.done=!0,F};return O.next=O}}throw new TypeError(At($)+" is not iterable")}return k.prototype=C,r(A,"constructor",{value:C,configurable:!0}),r(C,"constructor",{value:k,configurable:!0}),k.displayName=d(C,l,"GeneratorFunction"),e.isGeneratorFunction=function($){var v=typeof $=="function"&&$.constructor;return!!v&&(v===k||(v.displayName||v.name)==="GeneratorFunction")},e.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,C):($.__proto__=C,d($,l,"GeneratorFunction")),$.prototype=Object.create(A),$},e.awrap=function($){return{__await:$}},U(D.prototype),d(D.prototype,a,function(){return this}),e.AsyncIterator=D,e.async=function($,v,_,O,F){F===void 0&&(F=Promise);var I=new D(c($,v,_,O),F);return e.isGeneratorFunction(v)?I:I.next().then(function(j){return j.done?j.value:I.next()})},U(A),d(A,l,"Generator"),d(A,n,function(){return this}),d(A,"toString",function(){return"[object Generator]"}),e.keys=function($){var v=Object($),_=[];for(var O in v)_.push(O);return _.reverse(),function F(){for(;_.length;){var I=_.pop();if(I in v)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=be,le.prototype={constructor:le,reset:function(v){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(z),!v)for(var _ in this)_.charAt(0)==="t"&&i.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=s)},stop:function(){this.done=!0;var v=this.tryEntries[0].completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(v){if(this.done)throw v;var _=this;function O(xe,ue){return j.type="throw",j.arg=v,_.next=xe,ue&&(_.method="next",_.arg=s),!!ue}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],j=I.completion;if(I.tryLoc==="root")return O("end");if(I.tryLoc<=this.prev){var G=i.call(I,"catchLoc"),J=i.call(I,"finallyLoc");if(G&&J){if(this.prev<I.catchLoc)return O(I.catchLoc,!0);if(this.prev<I.finallyLoc)return O(I.finallyLoc)}else if(G){if(this.prev<I.catchLoc)return O(I.catchLoc,!0)}else{if(!J)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return O(I.finallyLoc)}}}},abrupt:function(v,_){for(var O=this.tryEntries.length-1;O>=0;--O){var F=this.tryEntries[O];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(v==="break"||v==="continue")&&I.tryLoc<=_&&_<=I.finallyLoc&&(I=null);var j=I?I.completion:{};return j.type=v,j.arg=_,I?(this.method="next",this.next=I.finallyLoc,S):this.complete(j)},complete:function(v,_){if(v.type==="throw")throw v.arg;return v.type==="break"||v.type==="continue"?this.next=v.arg:v.type==="return"?(this.rval=this.arg=v.arg,this.method="return",this.next="end"):v.type==="normal"&&_&&(this.next=_),S},finish:function(v){for(var _=this.tryEntries.length-1;_>=0;--_){var O=this.tryEntries[_];if(O.finallyLoc===v)return this.complete(O.completion,O.afterLoc),z(O),S}},catch:function(v){for(var _=this.tryEntries.length-1;_>=0;--_){var O=this.tryEntries[_];if(O.tryLoc===v){var F=O.completion;if(F.type==="throw"){var I=F.arg;z(O)}return I}}throw Error("illegal catch attempt")},delegateYield:function(v,_,O){return this.delegate={iterator:be(v),resultName:_,nextLoc:O},this.method==="next"&&(this.arg=s),S}},e}function Vn(s,e,t,i,r,o,n){try{var a=s[o](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,r)}function Zp(s){return function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function n(l){Vn(o,i,r,n,a,"next",l)}function a(l){Vn(o,i,r,n,a,"throw",l)}n(void 0)})}}function Qp(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function eh(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,ih(i.key),i)}}function th(s,e,t){return e&&eh(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function ih(s){var e=sh(s,"string");return At(e)=="symbol"?e:e+""}function sh(s,e){if(At(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(At(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var rh=(function(){function s(){Qp(this,s)}return th(s,[{key:"openFile",value:(function(){var e=Zp(_r().mark(function i(r,o){var n;return _r().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(yl()&&r&&typeof r.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Dp(r.uri);case 4:return n=l.sent,l.abrupt("return",new qn(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof r.slice=="function"&&typeof r.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new qn(r)));case 13:if(typeof r.read!="function"){l.next=18;break}if(o=Number(o),Number.isFinite(o)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new Xp(r,o)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,r){return e.apply(this,arguments)}return t})()}])})();function oh(s,e){return yl()?Promise.resolve(nh(s,e)):Promise.resolve(["tus-br",s.name,s.type,s.size,s.lastModified,e.endpoint].join("-"))}function nh(s,e){var t=s.exif?ah(JSON.stringify(s.exif)):"noexif";return["tus-rn",s.name||"noname",s.size||"nosize",t,e.endpoint].join("/")}function ah(s){var e=0;if(s.length===0)return e;for(var t=0;t<s.length;t++){var i=s.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Ai(s){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ai(s)}function to(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function lh(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,dh(i.key),i)}}function io(s,e,t){return e&&lh(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function dh(s){var e=ch(s,"string");return Ai(e)=="symbol"?e:e+""}function ch(s,e){if(Ai(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Ai(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var uh=(function(){function s(){to(this,s)}return io(s,[{key:"createRequest",value:function(t,i){return new ph(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),ph=(function(){function s(e,t){to(this,s),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return io(s,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(r,o){t._xhr.onload=function(){r(new hh(t._xhr))},t._xhr.onerror=function(n){o(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),hh=(function(){function s(e){to(this,s),this._xhr=e}return io(s,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Oi(s){"@babel/helpers - typeof";return Oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oi(s)}function fh(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function gh(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,vh(i.key),i)}}function mh(s,e,t){return e&&gh(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function vh(s){var e=bh(s,"string");return Oi(e)=="symbol"?e:e+""}function bh(s,e){if(Oi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Oi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var wr=!1;try{wr="localStorage"in window;var Zs="tusSupport",Kn=localStorage.getItem(Zs);localStorage.setItem(Zs,Kn),Kn===null&&localStorage.removeItem(Zs)}catch(s){if(s.code===s.SECURITY_ERR||s.code===s.QUOTA_EXCEEDED_ERR)wr=!1;else throw s}var xh=wr,yh=(function(){function s(){fh(this,s)}return mh(s,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var r=Math.round(Math.random()*1e12),o="tus::".concat(t,"::").concat(r);return localStorage.setItem(o,JSON.stringify(i)),Promise.resolve(o)}},{key:"_findEntries",value:function(t){for(var i=[],r=0;r<localStorage.length;r++){var o=localStorage.key(r);if(o.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(o));n.urlStorageKey=o,i.push(n)}catch{}}return i}}])})();function Wt(s){"@babel/helpers - typeof";return Wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wt(s)}function _h(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function wh(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,wl(i.key),i)}}function kh(s,e,t){return t&&wh(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function $h(s,e,t){return e=ys(e),Sh(s,_l()?Reflect.construct(e,t||[],ys(s).constructor):e.apply(s,t))}function Sh(s,e){if(e&&(Wt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ch(s)}function Ch(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _l(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_l=function(){return!!s})()}function ys(s){return ys=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ys(s)}function Eh(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&kr(s,e)}function kr(s,e){return kr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},kr(s,e)}function Gn(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function Vt(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Gn(Object(t),!0).forEach(function(i){Ph(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Gn(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function Ph(s,e,t){return e=wl(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function wl(s){var e=Rh(s,"string");return Wt(e)=="symbol"?e:e+""}function Rh(s,e){if(Wt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Wt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var Yn=Vt(Vt({},xs.defaultOptions),{},{httpStack:new uh,fileReader:new rh,urlStorage:xh?new yh:new np,fingerprint:oh}),Ah=(function(s){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return _h(this,e),i=Vt(Vt({},Yn),i),$h(this,e,[t,i])}return Eh(e,s),kh(e,null,[{key:"terminate",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return r=Vt(Vt({},Yn),r),xs.terminate(i,r)}}])})(xs);const Oh=10*1024*1024,Th=5*1024*1024,Ih="https://eu-on-24001.connector.filerobot.com/files",Fh="https://eu-on-24001.connector.filerobot.com/json";function Lh(s,e){if(!e||!s.file)return!1;const t=e.sizeThreshold??Oh;return s.size>=t}function Uh(s,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),r=t.endpoint||Ih,o=t.jsonBase||Fh,n=t.chunkSize??Th,a=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],c=i.split("/").pop()||"";let u=!1,h=!1,f=!1;const y={name:s.name,type:s.type,"filerobot-folder":e.folder};jr(s.product)&&(y.product=JSON.stringify(Br(s.product)));const g=async()=>`tus-${s.id}-${r}`,S=new Ah(s.file,{endpoint:r,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:y,fingerprint:g,onBeforeRequest(w){const T=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[A,U]of Object.entries(T))w.setHeader(A,U);w.setHeader("X-Filerobot-Token",c)},onUploadUrlAvailable(){S.url&&e.onUploadUrlAvailable&&!f&&(f=!0,e.onUploadUrlAvailable(S.url))},onProgress(w,T){!h&&!u&&e.onProgress(w,T)},onSuccess(){var A;if(h)return;C();const w=S.url||"",T=(A=w.match(/files\/([^/?]+)/))==null?void 0:A[1];T?zh(o,T,s.size).then(U=>{h||e.onComplete(Fi(U)?Dr(U,s):U)}).catch(U=>{h||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:s.name,extension:s.name.split(".").pop()||"",type:s.type,size:s.size,url:{public:w,cdn:w},meta:s.meta,tags:s.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(w){h||(C(),Dh(w)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(w instanceof Error?w:new Error(String(w))))},onShouldRetry(w,T,A){var D;const U=(D=w.originalResponse)==null?void 0:D.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let E=null,k=null;typeof window<"u"&&(E=()=>{var w;!u&&!h&&(u=!0,S.abort(!1),(w=e.onPause)==null||w.call(e))},k=()=>{var w;u&&!h&&(u=!1,S.start(),(w=e.onResume)==null||w.call(e))},window.addEventListener("offline",E),window.addEventListener("online",k));const C=()=>{E&&window.removeEventListener("offline",E),k&&window.removeEventListener("online",k)},b=()=>{try{S.start()}catch(w){C(),e.onError(w instanceof Error?w:new Error(String(w)))}};return a?S.findPreviousUploads().then(w=>{w.length>0&&!h&&S.resumeFromPreviousUpload(w[0]),h||b()}):b(),{abort(){h=!0,u=!1,C(),S.abort(!0)},pause(){!u&&!h&&(u=!0,S.abort(!1))},resume(){u&&!h&&(u=!1,S.start())},isPaused(){return u}}}function Dh(s){var e;if(s instanceof ci){const t=(e=s.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:s.originalResponse==null&&s.causingError!=null}return!1}async function zh(s,e,t){const i=`${s.replace(/\/+$/,"")}/${e}`,r=t>1e8?13e3:6e3,o=3;for(let n=0;n<=o;n++){n>0&&await new Promise(d=>setTimeout(d,r));const a=await fetch(i);if(a.status===404&&n<o)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(Fi(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<o))throw new Error(ms(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const ls="_sfxRelativePath",Wn=8,Mh=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function jh(s){return s?s.startsWith(".")?!0:Mh.has(s):!1}function so(s,e){if(e){try{Object.defineProperty(s,ls,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(s,ls,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{s[ls]=e}}}function Bh(s){const e=s[ls];if(typeof e=="string"&&e)return e;const t=s.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=s.relativePath;return typeof i=="string"?i:""}function Nh(s){if(!s)return"";const e=s.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function qh(s,e){const t=(s??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:s??""}async function kl(s){var n;const e=s.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(s.files??[]),hadDirectories:!1};const i=[];let r=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(r=!0),i.push(l))}if(i.length===0)return{files:Array.from(s.files??[]),hadDirectories:!1};const o=[];return await $l(i,"",o),{files:o,hadDirectories:r}}async function $l(s,e,t){for(let i=0;i<s.length;i+=Wn){const r=s.slice(i,i+Wn);await Promise.all(r.map(o=>Hh(o,e,t)))}}async function Hh(s,e,t){try{if(s.isFile){const i=await Vh(s);if(!i)return;const r=e?`${e}/${i.name}`:i.name;so(i,r),t.push(i);return}if(s.isDirectory){if(jh(s.name))return;const i=e?`${e}/${s.name}`:s.name,r=await Kh(s);await $l(r,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(s==null?void 0:s.name)??s,i)}}function Vh(s){return new Promise(e=>{s.file(t=>e(t),()=>e(null))})}function Kh(s){return new Promise(e=>{const t=s.createReader(),i=[],r=()=>{t.readEntries(o=>{if(o.length===0){e(i);return}i.push(...o),r()},o=>{console.warn("[sfx-uploader] directory read failed for",s==null?void 0:s.name,o),e(i)})};r()})}class Gh{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let r=!1;for(const[o,n]of this.pendingProgress){const a=i.get(o);a&&a.status==="uploading"&&(i.set(o,{...a,...n}),r=!0)}this.pendingProgress.clear(),r&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(de(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(de(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&de(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),de(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),de(this.store,e,{status:"uploading"})):de(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Jn(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),de(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Jn(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),de(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,r=t-i;if(r<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,r);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),de(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var h,f;this.pendingProgress.delete(e.id);const t=(f=(h=this.config).resolveUploadParams)==null?void 0:f.call(h,e),i=!!t&&Object.keys(t).length>0,r=!i&&!e.remoteInfo&&!e.remoteUrl&&Lh(e,this.config.tusConfig);de(this.store,e.id,{status:"uploading",error:null,isTus:r});let o=0,n=Date.now(),a=0;const l=qh(this.store.getState().targetFolder,e.relativeFolder),d={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:y=>this.handleComplete(e.id,y),onError:y=>this.handleError(e.id,y)},c=(y,g)=>{const S=Date.now(),E=(S-n)/1e3;if(E>0){const C=(y-o)/E;a=a===0?C:.3*C+.7*a}o=y,n=S;const k=g>0?Math.min(y/g*100,100):0;this.pendingProgress.set(e.id,{progress:k,bytesUploaded:y,speed:a}),this.scheduleProgressFlush()};let u;if(e.remoteInfo)u=Vu(e,{...d,onProgress:c});else if(e.remoteUrl){if(!this.config.companionUrl){de(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}u=Ku(e,{...d,onProgress:c,companionUrl:this.config.companionUrl,onMeta:y=>{de(this.store,e.id,{size:y.size,type:y.type||e.type})}})}else if(r){const y=Uh(e,{...d,onProgress:c,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:g=>{de(this.store,e.id,{tusUploadUrl:g})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,y),this.pendingProgress.delete(e.id),de(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,y),de(this.store,e.id,{status:"uploading"})}});u=y}else u=Uu(e,{...d,onProgress:c});this.activeUploads.set(e.id,u)}handleComplete(e,t){var u,h,f,y,g,S,E,k,C,b,w;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),r=((u=i==null?void 0:i.previewUrl)==null?void 0:u.startsWith("blob:"))??!1,o=((f=(h=t.file)==null?void 0:h.url)==null?void 0:f.cdn)??((g=(y=t.file)==null?void 0:y.url)==null?void 0:g.cdn_permalink)??((E=(S=t.file)==null?void 0:S.url)==null?void 0:E.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:Fi(t)};if(i&&o&&i.type.startsWith("image/")&&!r){const T=((b=(C=this.config).transformPreviewUrl)==null?void 0:b.call(C,o,(k=t.file)==null?void 0:k.url))??o;T&&(n.previewUrl=T)}const a=(w=t.file)==null?void 0:w.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l);const d=this.store.getState().files,c=d.get(e);if(c){const T=new Map(d);T.set(e,{...c,...n}),this.store.setState({files:T,...this.computeTotals(T)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:r}=this.store.getState().queueConfig,o=i.retryCount+1;if(o<=r.maxRetries){const n=Math.min(r.baseDelay*Math.pow(r.backoffFactor,i.retryCount),r.maxDelay);de(this.store,e,{status:"retrying",error:t.message,retryCount:o});const a=setTimeout(()=>{this.retryTimers.delete(e),de(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else de(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,r=0,o=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),o+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(r+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:r,totalProgress:n>0?Math.min(o/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Jn(s){return s==="queued"||s==="uploading"||s==="retrying"||s==="paused"}const Yh=3e4,Wh=2,Jh=400;function Xh(s){return s===404||s===408||s===429||s>=500}const Zh=s=>new Promise(e=>setTimeout(e,s));function ro(s,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${s}`}async function Qh(s,e,t,i={}){const r=`${ro(s,t)}/key/${encodeURIComponent(e)}`,o=i.retries??Wh,n=i.retryDelayMs??Jh;let a=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await Zh(n*l);const d=new AbortController,c=setTimeout(()=>d.abort(),Yh);try{const u=await fetch(r,{signal:d.signal,cache:"no-store"});if(clearTimeout(c),!u.ok){if(a=new Error(`SASS key exchange failed (HTTP ${u.status})`),Xh(u.status)&&l<o)continue;throw a}const h=await u.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(u){if(clearTimeout(c),u instanceof DOMException&&u.name==="AbortError")throw new Error("SASS key exchange timed out");if(u instanceof TypeError&&l<o){a=u;continue}throw u}}throw a}function $r(s,e){const t={};switch(s.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=s.sassKey;break}return s.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=s.airboxPuid),t}async function ef(s,e){const t=ro(s.container,e);if(s.mode==="security-template"){const i=await Qh(s.container,s.securityTemplateId,e);return{apiBase:t,headers:$r(s,i),sassKey:i}}return{apiBase:t,headers:$r(s)}}const tf="https://ai.scaleflex.com",Xn=300,sf=.85,rf=3e4;function Zn(s){return s==="low"?.6:s==="high"?.85:.75}async function of(s,e){var r,o,n;if(s.file)return s.file;const t=s.previewUrl||((n=(o=(r=s.response)==null?void 0:r.file)==null?void 0:o.url)==null?void 0:n.cdn)||s.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function nf(s){return`${(s||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function af(s){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(s);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,r=URL.createObjectURL(s);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(r)})},i.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Image decode failed"))},i.src=r})}async function lf(s){const e=await af(s);try{const t=e.width>Xn?Xn/e.width:1,i=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),o=document.createElement("canvas");o.width=i,o.height=r;const n=o.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,r),await new Promise((a,l)=>{o.toBlob(d=>d?a(d):l(new Error("Canvas toBlob failed")),"image/jpeg",sf)})}finally{e.close()}}async function Qn(s,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),rf),r=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",r);const o=t.signal,n=()=>{if(o.aborted)throw new DOMException("Aborted","AbortError")};try{n();const d=await of(s,o);n();const c=await lf(d);n();const h=`${(e.endpoint||tf).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,f=new FormData;f.append("file",c,nf(s.name));const y=await fetch(h,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:f,signal:o});if(!y.ok)throw new Error(`Similarity check failed (HTTP ${y.status})`);const g=await y.json();if(g.status==="error")throw new Error(`Similarity check failed: ${g.msg||"Unknown error"}`);return(g.similar_assets??[]).map(([S,E,k])=>({uuid:S,score:E,url:k}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",r)}}const _s="sfx-uploader:last-upload:",Sl=1;function df(s){var o,n,a,l,d,c,u,h,f;const{file:e,previewUrl:t,...i}=s;let r=null;return s.status==="complete"&&(s.previewUrl&&!s.previewUrl.startsWith("blob:")?r=s.previewUrl:r=((a=(n=(o=s.response)==null?void 0:o.file)==null?void 0:n.url)==null?void 0:a.permalink)??((c=(d=(l=s.response)==null?void 0:l.file)==null?void 0:d.url)==null?void 0:c.cdn_permalink)??((f=(h=(u=s.response)==null?void 0:u.file)==null?void 0:h.url)==null?void 0:f.cdn)??null),{...i,previewUrl:r}}function cf(s){try{const e=sessionStorage.getItem(_s+s);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==Sl?null:t}catch{return null}}function uf(s,e){try{sessionStorage.setItem(_s+s,JSON.stringify(e))}catch{}}const di={save(s,e){if(e.length===0){this.clear(s);return}const t={__schemaVersion:Sl,savedAt:Date.now(),files:e.map(df)};uf(s,t)},load(s){const e=cf(s);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(s){try{return sessionStorage.getItem(_s+s)!=null}catch{return!1}},clear(s){try{sessionStorage.removeItem(_s+s)}catch{}}},H={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let pf=0;function zt(){return`file-${Date.now()}-${++pf}`}function qt(s){if(!Number.isFinite(s)||s<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(s)/Math.log(1024)),e.length-1),i=s/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function ea(s){if(!isFinite(s)||s<=0)return"0s";const e=Math.round(s);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const r=Math.floor(t/60),o=t%60;return o>0?`${r}h ${o}m`:`${r}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function Fe(s){var t;const e=((t=s.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return s.type.startsWith("image/")?"image":s.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":s.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":s.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function hf(s){const e=s.lastIndexOf(".");return e>=0?s.slice(e+1).toUpperCase():""}const ff=new Set([".ds_store","thumbs.db","desktop.ini"]);function Qs(s){const e=(s.split(/[\\/]/).pop()??s).toLowerCase();return e.startsWith(".ds_store")?!0:ff.has(e)}const gf={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function ta(s){var t;const e=((t=s.split(".").pop())==null?void 0:t.toLowerCase())??"";return gf[e]||""}function tt(s){return s==="image/heic"||s==="image/heif"}function mf(s){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(s);let r=!1;const o=()=>{r||(r=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{r||(r=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}o()},{once:!0}),t.addEventListener("error",()=>o(),{once:!0}),setTimeout(()=>o(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function vf(s){return(s==null?void 0:s.code)==="max-files"}function er(s,e,t){var i,r;if(e.maxFileSize!=null&&s.size>0&&s.size>e.maxFileSize){const o=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:xt("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:o})}}if(e.maxTotalFilesSize!=null&&s.size>0){let o=s.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(o+=n.size);if(o>e.maxTotalFilesSize)return{code:"max-total-size",message:xt("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let o=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&o++;if(o>=e.maxNumberOfFiles)return{code:"max-files",message:xt("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const o=e.allowedFileTypes,n="."+(((i=s.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-not-allowed",message:xt("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const o=e.blockedFileTypes,n="."+(((r=s.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-blocked",message:xt("fileTypeBlocked","File type is blocked")}}return null}function ia(s){return s.allowedFileTypes?s.allowedFileTypes.join(","):""}const sa={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function bf(s){return s.filter(e=>e in sa).map(e=>sa[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ws=class extends Ii{constructor(e){if(super(e),this.it=x,e.type!==Zt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===x||e==null)return this._t=void 0,this.it=e;if(e===Re)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ws.directiveName="unsafeHTML",ws.resultType=1;const ra=Qt(ws);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Sr extends ws{}Sr.directiveName="unsafeSVG",Sr.resultType=2;const st=Qt(Sr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=Qt(class extends Ii{constructor(s){var e;if(super(s),s.type!==Zt.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var i,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const t=s.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(n?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return Re}});function _t(s){return s.brandStyle?p`<span
    class=${oo({"brand-ico":!0,"brand-ico--transparent":s.brandStyle.background==="transparent"})}
    ${se(s.brandStyle)}
    >${ra(s.brandHtml)}</span
  >`:ra(s.brandHtml)}var xf=Object.defineProperty,Cl=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&xf(e,t,r),r};const yf='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',_f='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',wf='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',kf='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',hi=[{id:"device",labelKey:"myDevice",label:"My Device",icon:yf,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:_f,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:wf,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:kf,iconColor:"#ea580c"}],So=class So extends W{constructor(){super(...arguments),this.t=Ae,this.sources=hi}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return p`
      ${this.sources.map(e=>p`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?_t(e):te`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${st(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};So.styles=q`
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
  `;let Ti=So;Cl([m({attribute:!1})],Ti.prototype,"t");Cl([m({type:Array})],Ti.prototype,"sources");const Fs=new Set(["multi-select","tags","ultratags"]),Ls=new Set(["text","textarea","attachment-uri"]);function $f(s){return Lc(s)?[]:Fs.has(s)?[{key:"SET",label:R("bulkOpSet","Set")},{key:"ADD",label:R("bulkOpAddTo","Add to")},{key:"DELETE",label:R("bulkOpRemoveFrom","Remove from")}]:Ls.has(s)?[{key:"SET",label:R("bulkOpSet","Set")},{key:"ADD",label:R("bulkOpAppend","Append")},{key:"DELETE",label:R("bulkOpRemove","Remove")}]:[{key:"SET",label:R("bulkOpSet","Set")},{key:"DELETE",label:R("bulkOpClear","Clear")}]}function Cr(s,e){return s==="DELETE"?Fs.has(e)||Ls.has(e):!0}function ts(s){if(typeof s=="string")return s;if(s&&typeof s=="object"){const e=s;return e.sid||e.label||String(s)}return String(s)}function Sf(s,e,t,i){const r=Fs.has(i),o=Ls.has(i);switch(s){case"SET":return t;case"ADD":{if(r){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return sr(n,a,!1);if(i==="tags"){const c=new Set(n.map(h=>ts(h))),u=[...n];for(const h of a){const f=ts(h);c.has(f)||(c.add(f),u.push(h))}return u}const l=new Set(n.map(c=>JSON.stringify(c))),d=[...n];for(const c of a){const u=JSON.stringify(c);l.has(u)||(l.add(u),d.push(c))}return d}if(o){const n=typeof t=="string"?t:"";if(!n)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${n}`:n}return t}case"DELETE":{if(r){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return sr(n,a,!0);if(i==="tags"){const d=new Set(a.map(c=>ts(c)));return n.filter(c=>!d.has(ts(c)))}const l=new Set(a.map(d=>JSON.stringify(d)));return n.filter(d=>!l.has(JSON.stringify(d)))}if(o){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function El(s,e,t,i,r){const o=r??"en",n=!!s.regional_variants_group_uuid,a={meta:{[s.key]:e}},l=Mr(s,t,a,r),d=f=>n&&f!==null&&typeof f=="object"&&!Array.isArray(f),c=d(e)?e[o]:e,u=d(l)?l[o]:l,h=Sf(i,c,u,s.type);return n?{...d(e)?e:{},[o]:h}:h}const Pl=Symbol("clamp-drop");function Cf(s,e,t,i,r){if(s.type!=="select-one"&&s.type!=="multi-select")return e;const o=new Set(t),n=!!s.regional_variants_group_uuid,a=i??"en",l=u=>n&&u!==null&&typeof u=="object"&&!Array.isArray(u),d=l(e)?e[a]:e;let c;if(s.type==="multi-select"){const u=Array.isArray(d)?d:[],h=l(r)?r[a]:r,f=new Set((Array.isArray(h)?h:[]).map(y=>y));c=u.filter(y=>o.has(y)||f.has(y))}else if(d==null||d==="")c=d;else if(o.has(d))c=d;else return Pl;return n?{...l(e)?e:{},[a]:c}:c}const Rl=q`
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
`,Ef=q`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
  }

  .fm-overlay {
    position: fixed;
    inset: 0;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 24, 39, 0.5);
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
    max-width: 340px;
    width: 100%;
  }
  .fm-confirm-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
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
    .fm-overlay {
      padding: 0;
    }
    .fm-modal {
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
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

  ${Rl}
`,Pf=q`
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
`,Rf=q`
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
`,Af=q`
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

  ${Rl}
`,Of=q`
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
`,Tf=q`
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
`;var If=Object.defineProperty,ae=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&If(e,t,r),r},nt;const ne=(nt=class extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this.primaryAction="save",this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._conflictedFieldKey=null,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(r=>r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)||await this._confirmDiscardAll()&&this._emitClose()},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,l;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const r=i[0],o=i[i.length-1],n=(l=this.shadowRoot)==null?void 0:l.activeElement;e.shiftKey&&n===r?(e.preventDefault(),o.focus()):!e.shiftKey&&n===o&&(e.preventDefault(),r.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,r=this._activeField;qe(i)&&(!r||Cr(t,r.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:i})},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e)},this._onBulkApply=e=>{var d;const t=this._activeField;if(!t)return;const{operation:i,value:r,taxonomyEntry:o}=e.detail,n=$t(t,this.config),a=[],l=new Set;for(const c of this._selected){const u=(d=this._cachedPerFileResolved.get(c))==null?void 0:d.get(t.ckey);if(u!=null&&u.hidden)continue;const h=this._staged.get(c),f=h!=null&&h.has(t.key)?h.get(t.key):this._originalValue(c,t.key)??null;let y=El(t,f,r,i,n);if(u!=null&&u.allowedValues){const g=Cf(t,y,u.allowedValues,n,f);if(g===Pl)continue;y=g}a.push([c,t.key,y]),l.add(c)}this._setStagedBulk(a),t.type==="taxonomy-node"&&o!==void 0&&this._setStagedTaxonodeBulk(l,t.key,o)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:r}=e.detail;this._setStagedTaxonodeSingle(t,i,r)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null||!await this._confirmDiscardPending())return;const e=[],t=[],i=[];for(const[o,n]of this._staged){if(!this._originalFiles.get(o))continue;const l={},d={};for(const[c,u]of n){const h=this._originalValue(o,c);if(JSON.stringify(u)!==JSON.stringify(h))if(rr(c)){const f=or(c);if(!f)continue;const y=u===""||u==null;f==="position"?d.position=y?void 0:Number(u):d.ref=y?void 0:String(u)}else if(hr(c)){const f=Array.isArray(u)?u:[];i.push({fileId:o,tags:f})}else l[c]=u}Object.keys(l).length>0&&e.push({fileId:o,meta:l}),Object.keys(d).length>0&&t.push({fileId:o,product:d})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),i.length>0&&this.dispatchEvent(new CustomEvent("tags-save-batch",{detail:{changes:i},bubbles:!0,composed:!0}));const r=[];for(const[o,n]of this._stagedTaxonodes){const a=this._originalFiles.get(o);if(!a)continue;const l=a.taxonodes??{},d={};for(const[c,u]of n){const h=l[c]??null;JSON.stringify(u??null)!==JSON.stringify(h??null)&&(d[c]=u??null)}Object.keys(d).length>0&&r.push({fileId:o,taxonodes:d})}r.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:r},bubbles:!0,composed:!0})),this._emitClose(!0)},this._onCancel=async()=>{await this._confirmDiscardAll()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardAll()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},nt._PREVIEW_DEBOUNCE_MS)}_initStaged(){var a,l;const e=new Map,t=new Map,i=new Set,r=new Map,o=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const d of this.files){const c=new Map;if(d.meta)for(const[u,h]of Object.entries(d.meta))c.set(u,h);if(o){const u=d.product;(u==null?void 0:u.ref)!==void 0&&c.set(Ct,u.ref),(u==null?void 0:u.position)!==void 0&&c.set(Et,u.position)}Array.isArray(d.tags)&&d.tags.length>0&&c.set(Yr,[...d.tags]),e.set(d.id,c),d.taxonodes&&t.set(d.id,new Map(Object.entries(d.taxonodes))),i.add(d.id),r.set(d.id,d.status?d:{...d,status:"idle"})}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=r,this._recomputeResolvedSchemas();const n=this.initialFieldKey;if(n&&((l=this.schema)!=null&&l.fieldsByKey.has(n)))this._activeFieldKey=n;else if(this.schema&&this.schema.fields.length>0){const d=this._groupOfFieldMap(),c=this.schema.fields.find(u=>this._isFieldNavigable(u,d));this._activeFieldKey=(c==null?void 0:c.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(e,t,i){const r=new Map(this._staged),o=new Map(r.get(e)??new Map);o.set(t,i),r.set(e,o),this._staged=r}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,r,o]of e){const n=new Map(t.get(i)??new Map);n.set(r,o),t.set(i,n)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const r=new Map(this._stagedTaxonodes);for(const o of e){const n=new Map(r.get(o)??new Map);n.set(t,i),r.set(o,n)}this._stagedTaxonodes=r}_setStagedTaxonodeSingle(e,t,i){const r=new Map(this._stagedTaxonodes),o=new Map(r.get(e)??new Map);o.set(t,i),r.set(e,o),this._stagedTaxonodes=r}_isTaxonodeEntryUnedited(e,t){var o,n,a;const i=(o=this._stagedTaxonodes.get(e))==null?void 0:o.get(t);if(i===void 0)return!0;if(i===null)return!1;const r=(a=(n=this._originalFiles.get(e))==null?void 0:n.taxonodes)==null?void 0:a[t];return r?i.uuid===r.uuid||i.suid===r.suid:!1}_syncStagedTaxonodesFromFiles(){var i;let e=!1;const t=new Map(this._stagedTaxonodes);for(const r of this.files)if(r.taxonodes)for(const[o,n]of Object.entries(r.taxonodes)){const a=this._isTaxonodeEntryUnedited(r.id,o),l=(i=t.get(r.id))==null?void 0:i.get(o),d=l!=null&&n!=null&&(l.uuid===n.uuid||l.suid===n.suid),c=l==null&&n==null;if(!a||d||c)continue;const u=new Map(t.get(r.id)??new Map);u.set(o,n??null),t.set(r.id,u),e=!0;const h=this._originalFiles.get(r.id);h&&this._originalFiles.set(r.id,{...h,taxonodes:{...h.taxonodes??{},[o]:n??null}})}e&&(this._stagedTaxonodes=t)}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,r;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const o of this._selected){const n=this._originalFiles.get(o),a=(i=this._staged.get(o))==null?void 0:i.get(e.key),l=a!==void 0?a:(r=n==null?void 0:n.meta)==null?void 0:r[e.key],d=wi(l);d.length&&(t=sr(t,d,!1))}return t.filter(o=>typeof o!="string")}_originalValue(e,t){var r,o;const i=this._originalFiles.get(e);if(i){if(rr(t)){const n=or(t);return n?(r=i.product)==null?void 0:r[n]:void 0}return hr(t)?Array.isArray(i.tags)?[...i.tags]:[]:(o=i.meta)==null?void 0:o[t]}}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&ja(this.schema,this.config)?jc(this._staged,this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const n of this.schema.fields)if(t.has(n.key)){i=n.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const r=this._missingRequiredKeys;let o=r.size!==t.size;if(!o){for(const n of t)if(!r.has(n)){o=!0;break}}o&&(this._missingRequiredKeys=t)}_refreshConflictedField(){const e=this.schema&&this.dependencies.length>0?Bc(this._staged,this._originalFiles,this.schema,this.dependencies):null;e!==this._conflictedFieldKey&&(this._conflictedFieldKey=e)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),r={...t.meta};if(i)for(const[o,n]of i)r[o]=n;e.push({id:t.id,mime:t.type??"",meta:r})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=mc(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),r={...t.meta};if(i)for(const[o,n]of i)r[o]=n;e.set(t.id,Kt({mime:t.type??"",meta:r},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var r;if(!this.schema||this._cachedBulkResolved.size===0)return;const e=(r=this.schema.fieldsByKey)==null?void 0:r.get(this._activeFieldKey);if(!e)return;const t=this._groupOfFieldMap();if(this._isFieldNavigable(e,t))return;const i=this.schema.fields.find(o=>this._isFieldNavigable(o,t));this._activeFieldKey=(i==null?void 0:i.key)??""}_groupOfFieldMap(){var t,i;if(this.schema&&((t=this._groupOfFieldCache)==null?void 0:t.schema)===this.schema)return this._groupOfFieldCache.map;const e=new Map;for(const r of((i=this.schema)==null?void 0:i.groups)??[])for(const o of r.fields)e.set(o,r);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return Nr(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){const i=t.get(e);return!(Ss(e,i,this._cachedBulkResolved)||i&&Hr(i)&&!this._isFieldRequiredBulk(e)&&!zr(e,i,this._cachedBulkResolved))}_recomputeFilledFields(){var r;const e=new Set;for(const o of((r=this.schema)==null?void 0:r.fields)??[])for(const[n,a]of this._staged){const l=a.get(o.key),d=this._originalValue(n,o.key);if(l!==void 0&&!qe(l)&&JSON.stringify(l)!==JSON.stringify(d)){e.add(o.key);break}}const t=this._filledFieldsCache;let i=t.size!==e.size;if(!i){for(const o of e)if(!t.has(o)){i=!0;break}}i&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const e=[...this.files];e.sort((t,i)=>{const r=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?r:-r}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!qe(this._pendingOp.value)}get _hasStagedChanges(){var e;for(const[t,i]of this._staged)for(const[r,o]of i)if(JSON.stringify(o)!==JSON.stringify(this._originalValue(t,r)))return!0;for(const[t,i]of this._stagedTaxonodes){const r=((e=this._originalFiles.get(t))==null?void 0:e.taxonodes)??{};for(const[o,n]of i){const a=r[o]??null;if(JSON.stringify(n??null)!==JSON.stringify(a??null))return!0}}return!1}_confirmDiscardPending(){return this._hasPendingValue?this._openDiscardConfirm():Promise.resolve(!0)}_confirmDiscardAll(){return!this._hasPendingValue&&!this._hasStagedChanges?Promise.resolve(!0):this._openDiscardConfirm()}_openDiscardConfirm(){return new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0})}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies"))&&(this._refreshMissingRequired(),this._refreshConflictedField()),(e.has("_staged")||e.has("schema"))&&this._recomputeFilledFields(),(e.has("files")||e.has("_sortAsc"))&&this._recomputeSortedFiles(),e.has("files")&&this._syncStagedTaxonodesFromFiles(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden())}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector(".fm-confirm .btn-ghost");i==null||i.focus()})}_emitClose(e=!1){this.dispatchEvent(new CustomEvent("metadata-close",{detail:{saved:e},bubbles:!0,composed:!0}))}render(){var y,g,S,E;if(!((g=(y=this.schema)==null?void 0:y.fields)!=null&&g.length))return p`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${k=>k.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title"
                >${R("fillMultipleAssets","Fill multiple assets")}</span
              >
              <button class="fm-topbar-close" @click=${this._onClose} title=${R("close","Close")}>
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
              ${R("noMetadataFieldsConfigured","No metadata fields configured")}
            </div>
          </div>
        </div>
      `;const e=this._activeField,t=this._sortedFilesCache,i=this._selected.size===this.files.length&&this.files.length>0,r=this._selected.size>0&&!i,o=this._missingRequiredFieldKey,n=this._cachedBulkResolved,a=this._cachedPerFileResolved,l=e==null?void 0:e.ckey,d=l?n.get(l):void 0,c=o!=null&&this._activeFieldKey===o,u=o!=null&&!c,h=this._conflictedFieldKey!=null,f=this.primaryAction==="upload"?this.files.length>1?R("uploadAll","Upload all ({{count}})",{count:this.files.length}):R("upload","Upload"):R("save","Save");return p`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${k=>k.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${R("fillMultipleAssets","Fill multiple assets")}</span>
            ${(S=this.schema.regionalVariantsGroups)!=null&&S.length?p`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((E=this.config)==null?void 0:E.regionalFilters)??{}}
                ></sfx-regional-settings>`:x}
            <button class="fm-topbar-close" @click=${this._onClose} title=${R("close","Close")}>
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
              ${e?p`
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
                          .indeterminate=${r}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${R("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${R("size","Size")}</div>
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
                  `:p`
                    <!-- Every group is hidden by default with no required field
                         to surface — nothing to edit, but the schema isn't empty. -->
                    <div class="fm-empty" role="status" aria-live="polite">
                      ${R("allMetadataFieldsHidden","All metadata fields are currently hidden")}
                    </div>
                  `}
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>← ${R("back","Back")}</button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>${R("cancel","Cancel")}</button>
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
              class=${oo({"btn-primary":!0,"btn-primary--next":u})}
              @click=${u?this._onJumpToNextRequired:this._onSave}
              ?disabled=${c||!u&&h}
              title=${u?R("jumpToNextMetadata","Jump to next required field"):h?R("resolveConflictBeforeContinuing","Resolve the conflicting value before continuing"):""}
            >
              ${u?p`<span class="btn-primary-label">${R("nextMetadata","Next metadata")}</span
                    ><span class="btn-primary-arrow" aria-hidden="true">→</span>`:f}
            </button>
          </div>

          ${this._confirmVisible?p`
                <div
                  class="fm-confirm-overlay"
                  @click=${this._onConfirmCancel}
                  @keydown=${this._onConfirmKeydown}
                >
                  <div
                    class="fm-confirm"
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="fm-confirm-msg"
                    @click=${k=>k.stopPropagation()}
                  >
                    <p class="fm-confirm-text" id="fm-confirm-msg">
                      ${R("discardBulkChanges","You have unsaved changes. Discard them?")}
                    </p>
                    <div class="fm-confirm-actions">
                      <button class="btn-ghost" @click=${this._onConfirmCancel}>
                        ${R("cancel","Cancel")}
                      </button>
                      <button class="btn-primary" @click=${this._onConfirmOk}>
                        ${R("discard","Discard")}
                      </button>
                    </div>
                  </div>
                </div>
              `:x}
        </div>
      </div>
    `}},nt.styles=[Ef],nt._PREVIEW_DEBOUNCE_MS=150,nt);ae([m({attribute:!1})],ne.prototype,"schema");ae([m({attribute:!1})],ne.prototype,"files");ae([m({attribute:!1})],ne.prototype,"config");ae([m({attribute:!1})],ne.prototype,"autocomplete");ae([m({attribute:!1})],ne.prototype,"taxonomyService");ae([m({attribute:!1})],ne.prototype,"ultratags");ae([m({attribute:!1})],ne.prototype,"defaultLanguage");ae([m({attribute:!1})],ne.prototype,"initialFieldKey");ae([m({attribute:!1})],ne.prototype,"dependencies");ae([m({type:String})],ne.prototype,"primaryAction");ae([P()],ne.prototype,"_activeFieldKey");ae([P()],ne.prototype,"_staged");ae([P()],ne.prototype,"_stagedTaxonodes");ae([P()],ne.prototype,"_selected");ae([P()],ne.prototype,"_sortAsc");ae([P()],ne.prototype,"_previewOp");ae([P()],ne.prototype,"_confirmVisible");ae([P()],ne.prototype,"_missingRequiredFieldKey");ae([P()],ne.prototype,"_missingRequiredKeys");ae([P()],ne.prototype,"_conflictedFieldKey");let Ff=ne;ee("sfx-bulk-metadata-modal",Ff);var Lf=Object.defineProperty,Qe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Lf(e,t,r),r};const Co=class Co extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return Nr(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var t;const e=((t=this.schema)==null?void 0:t.groups)??[];return e.length>0&&e.every(i=>this._collapsed.has(i.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var t;this._query="";const e=(t=this.renderRoot)==null?void 0:t.querySelector(".sb-search-input");e==null||e.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,r;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(r=this.renderRoot)==null?void 0:r.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return x;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),i=t.length>0;let r=0;const o=this.schema.groups.map(n=>{var d,c;const a=this._isNarrow||i||!this._collapsed.has(n.uuid);if(e&&n.ckey&&((d=e.get(n.ckey))!=null&&d.hidden))return x;let l=e?n.fields.filter(u=>!Ss(u,n,e)):n.fields;return Hr(n)&&(l=l.filter(u=>this._isRequired(u)||zr(u,n,e))),i&&!((c=n.name)!=null&&c.toLowerCase().includes(t))&&(l=l.filter(u=>{var h;return(h=u.title)==null?void 0:h.toLowerCase().includes(t)})),l.length===0?x:(r+=l.length,p`
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
        ${a?l.map(u=>p`
                <button
                  class="field-item ${this.activeFieldKey===u.key?"active":""}"
                  @click=${()=>this._onFieldClick(u.key)}
                >
                  <span class="field-icon" aria-hidden="true">${Tu(u.type)}</span>
                  <span class="field-name">${u.title}</span>
                  ${this.filledFields.has(u.key)?p`<span class="field-dot"></span>`:x}
                  ${this._isRequired(u)?p`<span
                        class=${oo({"field-required":!0,unmet:this.missingRequiredKeys.has(u.key)})}
                        aria-hidden="true"
                        >*</span
                      >`:x}
                </button>
              `):x}
      `)});return p`
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
            placeholder=${R("searchFields","Search fields...")}
            aria-label=${R("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?p`<button
                class="sb-search-clear"
                type="button"
                aria-label=${R("clear","Clear")}
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
              </button>`:x}
        </div>
        <button
          class="sb-collapse-btn"
          type="button"
          aria-label=${this._allCollapsed?R("expandAll","Expand all"):R("collapseAll","Collapse all")}
          title=${this._allCollapsed?R("expandAll","Expand all"):R("collapseAll","Collapse all")}
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
      ${i&&r===0?p`<div class="sb-empty">${R("noFieldsMatch","No fields match")}</div>`:o}
    `}};Co.styles=[Pf];let Ue=Co;Qe([m({attribute:!1})],Ue.prototype,"schema");Qe([m({attribute:!1})],Ue.prototype,"activeFieldKey");Qe([m({attribute:!1})],Ue.prototype,"filledFields");Qe([m({attribute:!1})],Ue.prototype,"missingRequiredKeys");Qe([m({attribute:!1})],Ue.prototype,"config");Qe([m({attribute:!1})],Ue.prototype,"bulkResolvedSchema");Qe([P()],Ue.prototype,"_collapsed");Qe([P()],Ue.prototype,"_isNarrow");Qe([P()],Ue.prototype,"_query");ee("sfx-bulk-meta-sidebar",Ue);var Uf=Object.defineProperty,Oe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Uf(e,t,r),r},We;const Pe=(We=class extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var o;if(e.key!=="Enter")return;const t=(o=this.field)==null?void 0:o.type;if(!t||!We._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(n=>n instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const r=e.composedPath().find(n=>n instanceof HTMLInputElement);r&&r.value!==void 0&&(this._value=r.value),this._onApply()}}get _availableOps(){return this.field?$f(this.field.type):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??We._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((e=this.field)==null?void 0:e.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!Cr(this._operation,(t=this.field)==null?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?Fs.has((e=this.field)==null?void 0:e.type)?qe(this._value):Ls.has((t=this.field)==null?void 0:t.type)?qe(this._value):!1:qe(this._value)}render(){var r;if(!this.field)return x;if(Li(this.field)){const o=Gr();return p`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${o}">
            ${Za}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${o}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,i=e.find(o=>o.key===this._operation);return p`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">${R("operation","Operation")}</span>
          ${t?p`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label"
                      >${(i==null?void 0:i.label)??R("bulkOpSet","Set")}</span
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
                  ${this._opDropdownOpen?p`
                        <div class="op-menu">
                          ${e.map(o=>p`
                              <button
                                class="op-option ${o.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(o.key)}
                              >
                                ${o.label}
                              </button>
                            `)}
                        </div>
                      `:x}
                </div>
              `:p`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label"
                    >${(i==null?void 0:i.label)??R("bulkOpOverwrite","Overwrite")}</span
                  >
                </div>
              `}
        </div>

        ${Cr(this._operation,this.field.type)?p`
              <div class="op-field op-field--value">
                ${this.field.type==="geopoint"?x:p`<span class="op-field-label">${this.field.title}</span>`}
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
                    .language=${(r=this.config)==null?void 0:r.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:x}

        <button class="btn-apply" ?disabled=${this._isApplyDisabled} @click=${this._onApply}>
          Apply
        </button>
      </div>
    `}},We.styles=[Rf],We._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),We);Oe([m({attribute:!1})],Pe.prototype,"field");Oe([m({attribute:!1})],Pe.prototype,"autocomplete");Oe([m({attribute:!1})],Pe.prototype,"taxonomyService");Oe([m({attribute:!1})],Pe.prototype,"ultratags");Oe([m({attribute:!1})],Pe.prototype,"defaultLanguage");Oe([m({attribute:!1})],Pe.prototype,"ultratagsPresentOnSelection");Oe([m({attribute:!1})],Pe.prototype,"config");Oe([m({type:Number})],Pe.prototype,"selectedCount");Oe([m({attribute:!1})],Pe.prototype,"allowedValues");Oe([P()],Pe.prototype,"_operation");Oe([P()],Pe.prototype,"_value");Oe([P()],Pe.prototype,"_pendingTaxonode");Oe([P()],Pe.prototype,"_opDropdownOpen");let Df=Pe;ee("sfx-bulk-meta-op-bar",Df);var zf=Object.defineProperty,De=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&zf(e,t,r),r},ze;const Te=(ze=class extends W{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._pendingFrontendLookup=ze._EMPTY_ULTRATAGS_LOOKUP,this._keyForFile=e=>e.id,this._renderRow=e=>{const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),r=(i==null?void 0:i.allowedValues)??null,o=(i==null?void 0:i.hidden)??!1;return p`
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
        .allowedValues=${r}
        .notApplicable=${o}
      ></sfx-bulk-meta-row>
    `}}_recomputePendingFrontendLookup(){var t;if(((t=this.field)==null?void 0:t.type)!=="ultratags"||!this.pendingOp){this._pendingFrontendLookup=ze._EMPTY_ULTRATAGS_LOOKUP;return}const e=new Map;for(const i of wi(this.pendingOp.value))i.sid&&e.set(i.sid,i),i.slug&&e.set(i.slug,i),i.uuid&&e.set(i.uuid,i);this._pendingFrontendLookup=e}willUpdate(e){(e.has("pendingOp")||e.has("field"))&&this._recomputePendingFrontendLookup()}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):hr(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return this.files.length<=ze.VIRTUALIZE_THRESHOLD?p`${this.files.map(this._renderRow)}`:p`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}},ze.styles=[Tf],ze._EMPTY_ULTRATAGS_LOOKUP=new Map,ze.VIRTUALIZE_THRESHOLD=60,ze);De([m({attribute:!1})],Te.prototype,"files");De([m({attribute:!1})],Te.prototype,"field");De([m({attribute:!1})],Te.prototype,"staged");De([m({attribute:!1})],Te.prototype,"stagedTaxonodes");De([m({attribute:!1})],Te.prototype,"selected");De([m({attribute:!1})],Te.prototype,"pendingOp");De([m({attribute:!1})],Te.prototype,"config");De([m({attribute:!1})],Te.prototype,"autocomplete");De([m({attribute:!1})],Te.prototype,"taxonomyService");De([m({attribute:!1})],Te.prototype,"ultratags");De([m({attribute:!1})],Te.prototype,"defaultLanguage");De([m({attribute:!1})],Te.prototype,"perFileResolved");let Mf=Te;ee("sfx-bulk-meta-table",Mf);var jf=Object.defineProperty,we=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&jf(e,t,r),r},at;const me=(at=class extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._onFieldBlur=e=>{e.stopPropagation(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{var i;e.stopPropagation();const t=(i=this.field)==null?void 0:i.type;(t==="tags"||t==="ultratags"||t==="multi-select")&&this._processFieldValue(e.detail.value)},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}shouldUpdate(e){return!(!this.selected&&e.size>0&&[...e.keys()].every(t=>at._PENDING_PREVIEW_ONLY_KEYS.has(t)))}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e){const t=za(this.field,e,this.config??void 0);if(t){this._error=t;return}this._error=null;const i={meta:{...this.file.meta,[this.field.key]:this.value}},r=Mr(this.field,e,i,$t(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:El(this.field,this.value,e.value,e.operation,$t(this.field,this.config))}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t,i;const e=this.file;return p`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?p`<img class="row-thumb" src=${e.previewUrl} alt="" />`:p`<img
              class="row-thumb row-thumb-fallback"
              src=${Jr(this._getExtension(e.name))}
              alt=${R("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${r=>{const o=r.target,n=Wr();!o.dataset.fallback&&o.src!==n&&(o.dataset.fallback="1",o.src=n)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?Fu(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?p`<div
                class="row-field-na"
                title=${R("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >
                ${R("fieldNotApplicable","Not applicable for this asset")}
              </div>`:this.pendingOp&&this.selected?p`<sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${this._computePreviewValue()}
                  .oldTaxonomyEntry=${((t=this.file.taxonodes)==null?void 0:t[this.field.key])??null}
                  .newTaxonomyEntry=${this.taxonomyEntry}
                  .config=${this.config}
                  .defaultLanguage=${this.defaultLanguage}
                  .pendingFrontendLookup=${this.pendingFrontendLookup}
                ></sfx-bulk-meta-diff-view>`:p`<div class="row-field-edit">
                    <sfx-metadata-field-edit
                      .field=${this.field}
                      .value=${Ua(this.field,this.value,$t(this.field,this.config))}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonomyEntry}
                      .ultratags=${this.ultratags}
                      .language=${(i=this.config)==null?void 0:i.language}
                      .defaultLanguage=${this.defaultLanguage}
                      .allowedValues=${this.allowedValues}
                    ></sfx-metadata-field-edit>
                  </div>
                  ${this._error?p`<div class="row-error" role="alert">${this._error}</div>`:x}`}
        </div>
      </div>
    `}},at.styles=[Af],at._PENDING_PREVIEW_ONLY_KEYS=new Set(["pendingOp","pendingFrontendLookup"]),at);we([m({attribute:!1})],me.prototype,"file");we([m({attribute:!1})],me.prototype,"field");we([m({attribute:!1})],me.prototype,"value");we([m({attribute:!1})],me.prototype,"taxonomyEntry");we([m({type:Boolean})],me.prototype,"selected");we([m({attribute:!1})],me.prototype,"pendingOp");we([m({attribute:!1})],me.prototype,"config");we([m({attribute:!1})],me.prototype,"autocomplete");we([m({attribute:!1})],me.prototype,"taxonomyService");we([m({attribute:!1})],me.prototype,"ultratags");we([m({attribute:!1})],me.prototype,"defaultLanguage");we([m({attribute:!1})],me.prototype,"pendingFrontendLookup");we([m({attribute:!1})],me.prototype,"allowedValues");we([m({type:Boolean})],me.prototype,"notApplicable");we([P()],me.prototype,"_error");let Bf=me;ee("sfx-bulk-meta-row",Bf);const Nf=new Set(["multi-select","tags","ultratags"]),qf=new Map;function oa(s,e,t){return!e.regional_variants_group_uuid||s==null||typeof s!="object"||Array.isArray(s)?s:s[t??"en"]}function na(s){return Array.isArray(s)?s:[]}function aa(s){return s==null||s===""||Array.isArray(s)&&s.length===0?!0:typeof s=="object"&&!Array.isArray(s)?!Object.values(s).some(e=>e!=null&&e!==""):!1}function Er(s,e){var i;const t=(i=s.possible_values)==null?void 0:i.find(r=>r.internal_unique_value===e||r.api_value===e);return(t==null?void 0:t.label)??String(e)}function la(s,e){if(e==null||e==="")return"";switch(s.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Er(s,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function da(s){return typeof s=="string"?s:s&&typeof s=="object"&&"label"in s?String(s.label):String(s)}function Hf(s,e){const t=s.map(da),i=e.map(da),r=new Set(t),o=new Set(i),n=[];for(const a of i)n.push({label:a,state:r.has(a)?"kept":"added"});for(const a of t)o.has(a)||n.push({label:a,state:"removed"});return n}function Vf(s,e,t,i,r){const o=wi(s),n=wi(e),a=t||"en",l=i||a,d=g=>g.sid||g.slug||g.uuid||"",c=g=>g.sid&&r.get(g.sid)||g.slug&&r.get(g.slug)||g.uuid&&r.get(g.uuid)||void 0,u=g=>{const S=g.i18n?g:c(g)??g;return vs({i18n:S.i18n,slug:S.slug||g.slug||""},a,l).value||g.slug||g.sid||""},h=new Set(o.map(d).filter(Boolean)),f=new Set(n.map(d).filter(Boolean)),y=[];for(const g of n){const S=d(g);y.push({label:u(g),state:h.has(S)?"kept":"added"})}for(const g of o){const S=d(g);f.has(S)||y.push({label:u(g),state:"removed"})}return y}function Kf(s,e,t){const i=new Set(s.map(n=>JSON.stringify(n))),r=new Set(e.map(n=>JSON.stringify(n))),o=[];for(const n of e){const a=JSON.stringify(n),l=typeof n=="string"?Er(t,n):String(n);o.push({label:l,state:i.has(a)?"kept":"added"})}for(const n of s){const a=JSON.stringify(n);if(!r.has(a)){const l=typeof n=="string"?Er(t,n):String(n);o.push({label:l,state:"removed"})}}return o}function Gf(s,e,t,i,r,o){const n=$t(s,i),a=i==null?void 0:i.language,l=oa(e,s,n),d=oa(t,s,n);if(Nf.has(s.type)){if(s.type==="ultratags")return{kind:"array",items:Vf(e,t,a,r,o??qf)};const c=na(l),u=na(d);return s.type==="tags"?{kind:"array",items:Hf(c,u)}:{kind:"array",items:Kf(c,u,s)}}return{kind:"scalar",oldDisplay:la(s,l),newDisplay:la(s,d),oldEmpty:aa(l),newEmpty:aa(d)}}var Yf=Object.defineProperty,ft=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Yf(e,t,r),r};const Eo=class Eo extends W{constructor(){super(...arguments),this._i18nController=new He(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:R("added","Added"),removed:R("removed","Removed"),kept:R("kept","Kept")};return p`
      <div class="diff-wrap" aria-label=${R("bulkOperationPreview","Bulk operation preview")}>
        ${e.items.length===0?p`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.items.map(i=>p`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.state==="removed"?p`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=R("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?R("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?R("emptyValue","empty"):e.newDisplay});return p`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${R("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?x:p`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var n,a;const e=((n=this.newTaxonomyEntry)==null?void 0:n.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",i=!t,r=!e,o=R("willChangeFromTo","Will change from {{from}} to {{to}}",{from:i?R("emptyValue","empty"):t,to:r?R("emptyValue","empty"):e});return p`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${R("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${o}</span>
        ${r?x:p`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){if(!this.field)return x;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=Gf(this.field,this.oldValue,this.newValue,this.config,this.defaultLanguage,this.pendingFrontendLookup);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Eo.styles=[Of];let Me=Eo;ft([m({attribute:!1})],Me.prototype,"field");ft([m({attribute:!1})],Me.prototype,"oldValue");ft([m({attribute:!1})],Me.prototype,"newValue");ft([m({attribute:!1})],Me.prototype,"oldTaxonomyEntry");ft([m({attribute:!1})],Me.prototype,"newTaxonomyEntry");ft([m({attribute:!1})],Me.prototype,"config");ft([m({attribute:!1})],Me.prototype,"defaultLanguage");ft([m({attribute:!1})],Me.prototype,"pendingFrontendLookup");ee("sfx-bulk-meta-diff-view",Me);function Al(s){let e=s;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Wf=Object.defineProperty,ke=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Wf(e,t,r),r};const ca=3,Pr=new CSSStyleSheet;Pr.replaceSync(`
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
`);var lt;const ve=(lt=class extends W{constructor(){super(...arguments),this.t=Ae,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=ca,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&kl(t).then(({files:i,hadDirectories:r})=>{i.length>0?this._emitFiles(i,r):r&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const r of i){const o=r.webkitRelativePath;o&&so(r,o)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var r;if(!this.isConnected||this.offsetWidth===0)return;const t=(r=e.clipboardData)==null?void 0:r.items;if(!t)return;const i=[];for(const o of t)if(o.kind==="file"){const n=o.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(e="files"){var t,i;if(e==="folder"&&this.directory&&this.multi){(t=this.folderInput)==null||t.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Al(this).appendChild(this._portalContainer),this._injectDropdownStyles()),ot(p`<div class="sfx-more-dropdown open">
          ${e.map(t=>p`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?_t(t):t.iconColor?p`<svg viewBox="0 0 24 24" ${se({color:t.iconColor})}>
                          ${st(t.icon)}
                        </svg>`:te`<svg viewBox="0 0 24 24">${st(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(ot(x,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Pr)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Pr]))}_positionDropdown(){var u,h;const e=(u=this.shadowRoot)==null?void 0:u.querySelector(".more-wrap > button"),t=(h=this._portalContainer)==null?void 0:h.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),r=8,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+r||a>l?t.style.top=`${i.top-o-r}px`:t.style.top=`${i.bottom+r}px`;let c=i.right-n;c=Math.max(8,Math.min(c,window.innerWidth-n-8)),t.style.left=`${c}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=ca}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var r;const i=(((r=e[0])==null?void 0:r.contentRect.width)??this.getBoundingClientRect().width)>=lt._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(ot(x,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return p`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?_t(e):p`<span class="pill-ico" ${se(e.iconColor?{color:e.iconColor}:null)}>
              ${te`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${st(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return p`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?p`<span class="card-ico">${_t(e)}</span>`:p`<span class="card-ico" ${se(e.iconColor?{color:e.iconColor}:null)}>
              ${te`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${st(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return p`
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
    `}_renderMoreDropdown(){return p`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${e=>this._toggleMore(e)}>
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return p`
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

          ${!this.compact&&this.directory&&this.multi?p`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${r=>{r.stopPropagation(),this.browse("folder")}}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:p`<div class="title">
                ${this.t("dragAndDrop","Drag & Drop or click to")}
                <span>${this.t("browse","browse")}</span>
              </div>`}
          ${!this.compact&&this.sources.length>0?p`
                <div class="import-divider">
                  <span>${this.t("orImportFrom","or import from")}</span>
                </div>
                ${this.sourcesLayout==="cards"?p`
                      <div class="sources-cards">
                        ${t.map(r=>this._renderCard(r))}
                        ${i.length>0?this._renderMoreCard():x}
                      </div>
                    `:p`
                      <div class="sources-grid">
                        ${t.map(r=>this._renderPill(r))}
                        ${i.length>0?this._renderMoreDropdown():x}
                      </div>
                    `}
              `:x}
          ${this.compact&&this.sources.length>0?p`
                <div class="sources-row">
                  ${this.sources.map(r=>p`
                      <button
                        class="src-ico"
                        ${se(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        data-tip=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        aria-label=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${o=>{o.stopPropagation(),this._onSourceIconClick(r)}}
                      >
                        ${r.brandHtml?_t(r):te`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${st(r.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:x}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||x}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?p`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:x}
      </div>
    `}},lt.styles=q`
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
  `,lt._WIDE_THRESHOLD_PX=1200,lt);ke([m({attribute:!1})],ve.prototype,"t");ke([m({type:Boolean,reflect:!0})],ve.prototype,"compact");ke([m({type:Boolean,attribute:"external-drag-over"})],ve.prototype,"externalDragOver");ke([m({type:String})],ve.prototype,"accept");ke([m({type:Boolean})],ve.prototype,"multi");ke([m({type:Boolean})],ve.prototype,"directory");ke([m({type:Array})],ve.prototype,"sources");ke([m({type:String,attribute:"sources-layout"})],ve.prototype,"sourcesLayout");ke([m({type:String,reflect:!0})],ve.prototype,"mode");ke([P()],ve.prototype,"_dragOver");ke([P()],ve.prototype,"_moreOpen");ke([P()],ve.prototype,"_visiblePills");ke([Ur(".ripple")],ve.prototype,"_rippleEl");ke([Ur("input[data-sfx-dz-files]")],ve.prototype,"fileInput");ke([Ur("input[data-sfx-dz-folder]")],ve.prototype,"folderInput");let Jf=ve;const Po=class Po extends W{constructor(){super(...arguments),this._i18nController=new zd(this)}render(){return p`
      <div class="line"></div>
      <div class="label">${xt("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Po.styles=q`
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
  `;let Rr=Po;var Xf=Object.defineProperty,re=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Xf(e,t,r),r};const Ar=new CSSStyleSheet;Ar.replaceSync(`
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
`);const Ro=class Ro extends W{constructor(){super(...arguments),this.t=Ae,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var r;if((r=this._portalContainer)!=null&&r.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const r of i){const o=r.webkitRelativePath;o&&so(r,o)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Al(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),ot(p`<div class="sfx-tile-dropdown">
        ${e.map(t=>p`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${se(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?_t(t):te`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${st(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var u;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),r=6,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+r||a>l?t.style.top=`${i.top-o-r}px`:t.style.top=`${i.bottom+r}px`;let c=i.right-n;c=Math.max(8,Math.min(c,window.innerWidth-n-8)),t.style.left=`${c}px`}_closePortal(){this._portalContainer&&(ot(x,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Ar)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Ar]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return p`
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
          ${this.directory&&this.multi?p`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:x}
          ${t.length>0?p`
                <div class="drop-tile-sources">
                  ${t.map(r=>p`
                      <button
                        class="drop-tile-src"
                        ${se(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        title=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${o=>this._onSourceClick(o,r)}
                      >
                        ${r.brandHtml?_t(r):te`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${st(r.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?p`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            @click=${r=>this._toggleMore(r)}
                          >
                            ···
                          </button>
                        </div>
                      `:x}
                </div>
              `:x}
        </div>
        <input
          data-sfx-fl-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||x}
          @change=${this._onFileInput}
        />
        ${this.directory&&this.multi?p`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:x}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(r=>r.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(o=>this.searchResults.has(o)).length,i=e?Math.round(t/e*100):0,r=e>0&&t===e;return p`
      ${e>1&&!this.previewOpen?p`
            <div class="similar-banner search">
              ${r?p`<span class="search-done-ico"
                    ><svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" /></svg
                  ></span>`:p`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b
                  >${r?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${se({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${r?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:x}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():x}
        ${Ht(this.files,o=>o.id,(o,n)=>{const a=this.searchResults.get(o.id);return p`<sfx-file-item
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
              ${se({"--tile-index":String(n)})}
            ></sfx-file-item>`})}
      </div>
    `}};Ro.styles=q`
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
  `;let Z=Ro;re([m({attribute:!1})],Z.prototype,"t");re([m({attribute:!1})],Z.prototype,"files");re([m({attribute:!1})],Z.prototype,"store");re([m({type:Boolean})],Z.prototype,"showDropTile");re([m({attribute:!1})],Z.prototype,"sources");re([m({type:String})],Z.prototype,"accept");re([m({type:Boolean})],Z.prototype,"multi");re([m({type:Boolean})],Z.prototype,"directory");re([m({type:Boolean})],Z.prototype,"allowRename");re([m({type:String})],Z.prototype,"mode");re([m({type:Boolean})],Z.prototype,"showLocateButton");re([m({type:Boolean})],Z.prototype,"showCopyCdnButton");re([m({type:Boolean})],Z.prototype,"showCheckSimilar");re([m({type:Boolean})],Z.prototype,"selectMode");re([m({attribute:!1})],Z.prototype,"selectedIds");re([m({type:Boolean})],Z.prototype,"allSelected");re([m({type:Boolean})],Z.prototype,"selectionFull");re([m({type:Number})],Z.prototype,"maxSelection");re([m({type:Boolean})],Z.prototype,"previewOpen");re([m({attribute:!1})],Z.prototype,"searchRunIds");re([m({attribute:!1})],Z.prototype,"searchActiveIds");re([m({attribute:!1})],Z.prototype,"searchResults");re([P()],Z.prototype,"_moreOpen");re([P()],Z.prototype,"_dropTileMaxVisible");var Zf=Object.defineProperty,oe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Zf(e,t,r),r};const Ao=class Ao extends W{constructor(){super(...arguments),this.t=Ae,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let r=e.right+12;r+t>window.innerWidth-8&&(r=e.left-t-12),this._simPopLeft=Math.max(8,r),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),r=140;this._tipLeft=Math.max(r+8,Math.min(i.left+i.width/2,window.innerWidth-r-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var r;i.some(o=>o.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(r=this._io)==null||r.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",r=e.status==="complete"&&!!e.alreadyExisted;return i||r}_maybeProbeDims(){var i,r;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const o=new Image;o.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${o.naturalWidth}×${o.naturalHeight}`)},o.src=t}else if((r=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&r.info){const o=e.response.file.info;o.img_w&&o.img_h&&(this._dims=`${o.img_w}×${o.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,r,o,n;e.stopPropagation();const t=(n=(o=(r=(i=this._file)==null?void 0:i.response)==null?void 0:r.file)==null?void 0:o.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var k,C,b;const e=this._file;if(!e)return x;const t=Fe(e),i=e.status==="complete",r=e.status==="uploading",o=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",d=l||this.reviewPick||!this.allowRename,c=hf(e.name),u=t==="image"&&!tt(e.type),h=this.selectMode&&u&&!l,f=this.similarCount>=0,y=h&&!f&&!i&&this.similarStatus==="",g=!l&&!i&&!r&&!o&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,S=g,E=["tile",i?"done":"",r?"uploading":"",o?"paused":"",a?"rejected":"",l?"review":"",y?"selectable":"",y&&this.isSelected?"selected":"",this.selectionActive&&!u&&!l?"select-dimmed":"",S?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return p`
      <div
        class=${E}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:y?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?p`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:p`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Jr(c)}
                    alt="${c?this.t("extFile","{{ext}} file",{ext:c}):this.t("file","File")}"
                    @error=${w=>{const T=w.target,A=Wr();!T.dataset.fallback&&T.src!==A&&(T.dataset.fallback="1",T.src=A)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?p`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:x}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?p`
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
                `:p`<span class="sim-result-badge none"
                  >${this.t("noSimilar","No similar")}</span
                >`:x}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${y?p`
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
              `:x}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${g?p`
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
                  ${this.similarCount>0?p`
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
                      `:this.similarCount===0?p`
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
                        `:this.showCheckSimilar&&u?p`
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
                          `:x}
                </div>
              `:x}

          <!-- Locate / Copy-CDN hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Shown on any completed tile (the single-view upload list and the
               review screen) that has a response.file and the host enabled the
               feature. Each inner button has its own gate — Locate needs uuid,
               Copy CDN needs url.cdn — so an already-existed-but-missing-uuid
               edge case won't render a dead button. The outer gate mirrors the
               two inner gates so we never render (and hover-reveal) an empty
               overlay when neither button qualifies. -->
          ${i&&((k=e.response)!=null&&k.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&((C=e.response.file.url)!=null&&C.cdn))?p`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?p`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${Fa}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:x}
                  ${this.showCopyCdnButton&&((b=e.response.file.url)!=null&&b.cdn)?p`<button
                        class="review-action primary ${this._copied?"copied":""}"
                        @click=${this._copyCdn}
                        title=${this.t("copyCdn","Copy CDN")}
                        aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}
                      >
                        ${this._copied?p`<svg viewBox="0 0 24 24">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>`:p`<svg viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:x}
                </div>
              `:x}

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
          ${i?p`<div class="done-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="3"
                  stroke-linecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:x}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&n?p`<div
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
              </div>`:x}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?p`
                <div class="progress">
                  <div
                    class="progress-fill"
                    ${se({transform:`scaleX(${Math.min(e.progress,100)/100})`})}
                  ></div>
                </div>
              `:x}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?p`<div
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
              </div>`:x}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?p`<div
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
              </div>`:x}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?p`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:x}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l||this.reviewPick?x:p`
              <div class="actions">
                ${r&&e.isTus?p`
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
                    `:x}
                ${o?p`
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
                    `:x}
                ${n?p`
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
                    `:x}
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
            @change=${d?x:this._rename}
            @click=${w=>w.stopPropagation()}
          />
          <div class="meta">
            ${c||""}${e.size?` · ${qt(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
          </div>
        </div>
      </div>
      ${this._renderSimPopover()} ${this._renderTip()}
    `}_renderTip(){return this._tip?p`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${se({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:x}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return x;const e=[...this.similarResults].sort((l,d)=>d.score-l.score),t=e[0],i=e.length,r=e.slice(1),o=r.slice(0,3),n=r.length-o.length,a=Math.round(t.score*100);return p`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${se({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?p`<img src=${t.url} alt="" />`:x}
          <span class="pop-best ${t.score>=.85?"high":""}"
            >${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span
          >
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${r.length?p`<div class="pop-thumbs">
                ${o.map(l=>p`<img src=${l.url} alt="" />`)}
                ${n>0?p`<span class="pop-more">+${n}</span>`:x}
              </div>`:p`<span></span>`}
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
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};Ao.styles=q`
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
  `;let ie=Ao;oe([m({attribute:!1})],ie.prototype,"t");oe([m({attribute:!1})],ie.prototype,"store");oe([m({type:String})],ie.prototype,"fileId");oe([m({attribute:!1})],ie.prototype,"file");oe([m({type:String})],ie.prototype,"mode");oe([m({type:Boolean})],ie.prototype,"allowRename");oe([m({type:Boolean})],ie.prototype,"showLocateButton");oe([m({type:Boolean})],ie.prototype,"showCopyCdnButton");oe([m({type:Boolean})],ie.prototype,"showCheckSimilar");oe([m({type:Boolean})],ie.prototype,"selectMode");oe([m({type:Boolean})],ie.prototype,"isSelected");oe([m({type:Boolean})],ie.prototype,"selectionActive");oe([m({type:Boolean})],ie.prototype,"selectionFull");oe([m({type:Boolean})],ie.prototype,"previewOpen");oe([m({type:String})],ie.prototype,"similarStatus");oe([m({type:Number})],ie.prototype,"similarCount");oe([m({attribute:!1})],ie.prototype,"similarResults");oe([m({type:Boolean})],ie.prototype,"reviewPick");oe([P()],ie.prototype,"_dims");oe([P()],ie.prototype,"_simPopover");oe([P()],ie.prototype,"_copied");oe([P()],ie.prototype,"_tip");var Qf=Object.defineProperty,Hi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Qf(e,t,r),r};const Oo=class Oo extends W{constructor(){super(...arguments),this.t=Ae,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return p`
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
          ${this._failedCount>0?p`<button
                class="chip ${this._filter==="failed"?"active":""}"
                @click=${this._setFilter("failed")}
              >
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:x}
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
        ${e.length===0?p`<div class="empty">
              ${this.t("noFilesMatchFilter","No files match this filter.")}
            </div>`:p`<sfx-file-list
              .t=${this.t}
              .files=${e}
              mode="review"
              .showLocateButton=${this.showLocateButton}
              .showCopyCdnButton=${this.showCopyCdnButton}
            ></sfx-file-list>`}
      </div>
    `}};Oo.styles=q`
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
  `;let ut=Oo;Hi([m({attribute:!1})],ut.prototype,"t");Hi([m({attribute:!1})],ut.prototype,"files");Hi([m({type:Boolean})],ut.prototype,"showLocateButton");Hi([m({type:Boolean})],ut.prototype,"showCopyCdnButton");Hi([P()],ut.prototype,"_filter");ee("sfx-last-upload-review",ut);const Us=q`
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
`,Ds=q`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var eg=Object.defineProperty,Ie=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&eg(e,t,r),r};const To=class To extends W{constructor(){super(...arguments),this.t=Ae,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.requiredFieldsTotal=0,this.requiredFieldsRemaining=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?x:p`
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
    `}_renderUploadingBar(){return p`
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
    `}_renderDoneBar(){return p`
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
    `}_renderIdleBar(){return p`
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?p`
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
              `:x}
          ${this.showCheckSimilar&&this.uploadState==="idle"?p`
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
              `:x}
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
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return p`
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
          ${t>0?p`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
                >${e}/${t}</span
              >`:x}
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
    `}get _uploadLabel(){return this.requiredFieldsTotal>0&&this.requiredFieldsRemaining===this.requiredFieldsTotal?{key:"fillRequiredMetadata",fallback:"Fill required metadata"}:this.requiredFieldsRemaining>0?{key:"nextMetadata",fallback:"Next metadata"}:this.fileCount>1?{key:"uploadAll",fallback:"Upload all ({{count}})",interpolations:{count:this.fileCount}}:{key:"upload",fallback:"Upload"}}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",r=this._uploadLabel,o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t(r.key,r.fallback,r.interpolations);return p`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?p`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?p`
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
              `:p`
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
                  >${this.t(r.key,r.fallback,r.interpolations)}</span
                >
              `}
      </button>
    `}};To.styles=[Us,Ds,q`
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
    `];let fe=To;Ie([m({attribute:!1})],fe.prototype,"t");Ie([m({type:String})],fe.prototype,"uploadState");Ie([m({type:Number})],fe.prototype,"fileCount");Ie([m({type:Number})],fe.prototype,"failedCount");Ie([m({type:Boolean})],fe.prototype,"showFillMetadata");Ie([m({type:Boolean})],fe.prototype,"requireMetadataFirst");Ie([m({type:Number})],fe.prototype,"requiredFieldsTotal");Ie([m({type:Number})],fe.prototype,"requiredFieldsRemaining");Ie([m({type:Boolean})],fe.prototype,"showCheckSimilar");Ie([m({type:Boolean})],fe.prototype,"selectMode");Ie([m({type:Number})],fe.prototype,"selectedCount");Ie([m({type:Number})],fe.prototype,"maxSelection");Ie([m({type:Boolean})],fe.prototype,"allSelected");const tg='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function no(s,e){return t=>{if(t.key!=="Tab")return;const i=s();if(!i)return;const r=i.querySelector(e);if(!r)return;const o=Array.from(r.querySelectorAll(tg));if(o.length===0)return;const n=o[0],a=o[o.length-1],l=i.activeElement;t.shiftKey?(l===n||!r.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!r.contains(l))&&(t.preventDefault(),n.focus())}}var ig=Object.defineProperty,zs=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&ig(e,t,r),r};const Io=class Io extends W{constructor(){super(...arguments),this.t=Ae,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=no(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");r&&(r.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";const t=!!this._name.trim();let i=this._name.trim();if(!i)try{const r=new URL(e).pathname.split("/");i=r[r.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i,nameIsUserDefined:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return p`
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
            ${this._error?p`<div class="error">${this._error}</div>`:""}
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
    `}};Io.styles=[Us,Ds,q`
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
    `];let Ot=Io;zs([m({attribute:!1})],Ot.prototype,"t");zs([P()],Ot.prototype,"_url");zs([P()],Ot.prototype,"_name");zs([P()],Ot.prototype,"_error");var sg=Object.defineProperty,Vi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&sg(e,t,r),r};const Fo=class Fo extends W{constructor(){super(...arguments),this.t=Ae,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=no(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("video"),t=(o=this.shadowRoot)==null?void 0:o.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return p`
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
            ${this._error?p`<div class="error">${this._error}</div>`:this._captured?p`
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
                  `:p`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Fo.styles=[Us,Ds,q`
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
    `];let pt=Fo;Vi([m({attribute:!1})],pt.prototype,"t");Vi([P()],pt.prototype,"_stream");Vi([P()],pt.prototype,"_error");Vi([P()],pt.prototype,"_captured");Vi([P()],pt.prototype,"_previewUrl");var rg=Object.defineProperty,oi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&rg(e,t,r),r};const Lo=class Lo extends W{constructor(){super(...arguments),this.t=Ae,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=no(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=r=>{r.data.size>0&&this._chunks.push(r.data)},this._recorder.onstop=()=>{var o;const r=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=r,this._previewUrl=URL.createObjectURL(r),(o=this._stream)==null||o.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return p`
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
            ${this._error?p`<div class="error">${this._error}</div>`:this._recordedBlob?p`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>
                        ${this.t("discard","Discard")}
                      </button>
                      <button class="btn btn-primary" @click=${this._useRecording}>
                        ${this.t("useRecording","Use recording")}
                      </button>
                    </div>
                  `:this._recording?p`
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
                    `:p`
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
    `}};Lo.styles=[Us,Ds,q`
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
    `];let Xe=Lo;oi([m({attribute:!1})],Xe.prototype,"t");oi([P()],Xe.prototype,"_stream");oi([P()],Xe.prototype,"_recording");oi([P()],Xe.prototype,"_error");oi([P()],Xe.prototype,"_recordedBlob");oi([P()],Xe.prototype,"_previewUrl");var og=Object.defineProperty,ao=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&og(e,t,r),r};const Uo=class Uo extends W{constructor(){super(...arguments),this.t=Ae,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(r=>r.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(r=>r.id!==e)},200)}_iconForType(e){return e==="error"?p`<svg
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
      </svg>`:e==="warning"?p`<svg
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
      </svg>`:p`<svg
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
    </svg>`}render(){return this._toasts.length===0?p``:p`
      <div class="toast-stack">
        ${this._toasts.map(e=>p`
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
    `}};Uo.styles=q`
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
  `;let Jt=Uo;ao([m({attribute:!1})],Jt.prototype,"t");ao([m({type:Number})],Jt.prototype,"duration");ao([P()],Jt.prototype,"_toasts");ee("sfx-toast",Jt);var ng=Object.defineProperty,N=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&ng(e,t,r),r};const ua=new Set(["unsplash"]),et=10,ag=3,lg=["auto","mobile","tablet","desktop","hq","sample"],dg=["hls"],Mt={isTus:!1,tusUploadUrl:null,relativeFolder:""},pa=new Set(["complete","failed","error","cancelled","rejected"]);var Q;const B=(Q=class extends W{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=hi,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:r}=e.detail;if(rr(i)){const a=or(i);if(!a)return;const l=r===""||r==null,d=a==="position"?{position:l?void 0:Number(r)}:{ref:l?void 0:String(r)};this.updateFileProduct(t,d);return}const o=this._store.getState().files.get(t);if(!o)return;const n=new Map(this._store.getState().files);n.set(t,{...o,meta:{...o.meta,[i]:r}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var r;const i=(r=this.config)==null?void 0:r.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(o){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",o),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var r,o,n,a;const t=this._mergedSources.find(l=>l.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,l)}return}if(e==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((o=(r=this.config)==null?void 0:r.connectors)==null?void 0:o.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:l}=await Y(async()=>{const{SfxGooglePickerView:d}=await import("./google-picker-view-CHdeFqM9.js");return{SfxGooglePickerView:d}},[]);customElements.define("sfx-google-picker-view",l)}}else if(ua.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await Y(async()=>{const{SfxSearchProviderBrowser:d}=await import("./search-provider-browser-CuHPPnl5.js");return{SfxSearchProviderBrowser:d}},[]);customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await Y(async()=>{const{SfxProviderBrowser:d}=await import("./provider-browser-J8MVj5Cg.js");return{SfxProviderBrowser:d}},[]);customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var h,f,y;this._showUrlDialog=!1;const{url:t,name:i,nameIsUserDefined:r}=e.detail,o=(h=this.config)==null?void 0:h.callbacks,n=ta(i),a=n.startsWith("image/");if(Qs(i))return;const l=this._store.getState();if([...l.files.values()].some(g=>g.name===i&&g.status!=="rejected"&&g.status!=="cancelled"))return;const c=er({name:i,size:0,type:n},l.restrictions,l.files);if(c){const g={id:zt(),status:"rejected",file:null,remoteUrl:t,name:i,nameIsUserDefined:r,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Mt};Lt(this._store,g),this._dispatchPublic(H.FILE_REJECTED,{file:g,reason:c.message}),(f=o==null?void 0:o.onFileRejected)==null||f.call(o,g,c.message);return}const u={id:zt(),status:"idle",file:null,remoteUrl:t,name:i,nameIsUserDefined:r,size:0,type:n,previewUrl:a?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:null,...Mt};Lt(this._store,u),this._dispatchPublic(H.FILE_ADDED,{file:u}),(y=o==null?void 0:o.onFileAdded)==null||y.call(o,u),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,r,o;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(H.FILE_PREVIEW,{file:t}),(o=(r=(i=this.config)==null?void 0:i.callbacks)==null?void 0:r.onFilePreview)==null||o.call(r,t))},this._onFillMetadata=()=>{var t,i,r,o;this._bulkMetadataHadIssuesOnOpen=this._hasMetadataIssues;const e=[...this._store.getState().files.values()].filter(n=>Q._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(H.FILL_METADATA,{files:e}),(o=(r=(i=this.config)==null?void 0:i.callbacks)==null?void 0:r.onFillMetadata)==null||o.call(r,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=et)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,et).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{if(!this._firstMissingRequiredFieldKey()){const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning")}this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var r,o,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(H.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFileCopyCdn)==null||n.call(o,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:r,meta:o}of t){const n=i.get(r);n&&i.set(r,{...n,meta:{...n.meta,...o}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,r=new Map(i);for(const{fileId:o,taxonodes:n}of t){const a=i.get(o);if(!a||!Q._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[d,c]of Object.entries(n))c==null?delete l[d]:l[d]=c;r.set(o,{...a,taxonodes:l})}this._store.setState({files:r})},this._onBulkMetadataClose=e=>{var r;const i=((r=e.detail)==null?void 0:r.saved)===!0&&this._bulkMetadataHadIssuesOnOpen&&!this._hasMetadataIssues;this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,i&&this._onUploadStart()},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var r,o,n;const t=(r=this.config)==null?void 0:r.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(o=this._engine)==null||o.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(H.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var r;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(r=t==null?void 0:t.shadowRoot)==null?void 0:r.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(r=>r.status==="complete"||r.status==="failed"||r.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=di.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&di.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,l,d;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,r=(c,u,h)=>`${c}\0${u}\0${h}`,o=new Set;for(const c of this._store.getState().files.values())c.status!=="rejected"&&c.status!=="cancelled"&&o.add(r(c.name,c.size,c.relativeFolder??""));for(const c of e.detail.files){if(Qs(c.name))continue;const u=i?c.relativeFolder??"":"",h=this._store.getState(),f=r(c.name,c.size,u);if(o.has(f))continue;const y=c.thumbnail?this._transformRemoteThumbnail(c.thumbnail,{source:"connector",providerId:c.provider}):null,g=er({name:c.name,size:c.size,type:c.mimeType},h.restrictions,h.files);if(g){const E={id:zt(),status:"rejected",file:null,remoteUrl:null,name:c.name,size:c.size,type:c.mimeType,previewUrl:y,duration:null,progress:0,speed:0,bytesUploaded:0,error:g.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:c,...Mt,relativeFolder:u};Lt(this._store,E),this._dispatchPublic(H.FILE_REJECTED,{file:E,reason:g.message}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,E,g.message);continue}const S={id:zt(),status:"idle",file:null,remoteUrl:null,name:c.name,size:c.size,type:c.mimeType,previewUrl:y,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:c,...Mt,relativeFolder:u};Lt(this._store,S),o.add(f),this._dispatchPublic(H.FILE_ADDED,{file:S}),(d=t==null?void 0:t.onFileAdded)==null||d.call(t,S)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,r,o,n;this._dispatchPublic(H.COMPLETE_ACTION,{}),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||r.call(i),(((o=this.config)==null?void 0:o.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(H.CANCEL,{})},this._onConfirmDismissOk=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!0),this._confirmDismissResolve=null},this._onConfirmDismissCancel=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!1),this._confirmDismissResolve=null},this._onModalDismiss=async()=>{var e,t,i,r;await this._confirmDismiss()&&(this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(H.CANCEL,{}),this.close())},this._onCancelUpload=()=>{var e,t,i,r;(e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(H.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(H.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(H.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,r;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(H.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&kl(t).then(({files:i,hadDirectories:r})=>{if(i.length===0){r&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:r}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._confirmDismissVisible){this._onConfirmDismissCancel();return}if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const r=((t=this.config)==null?void 0:t.mode)??"modal",o=((i=this.config)==null?void 0:i.header)??(r==="modal"?"close":!0);(o==="close"||o==="back")&&(r==="modal"&&this._isOpen?this._onModalDismiss():r==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const r=i.getBoundingClientRect(),o=(t-r.left)/r.width*100;this._splitPct=Math.max(25,Math.min(75,o))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=Q._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),r=i===-1?1:(i+1)%t.length;this._fsZoom=t[r],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,r=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+r,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Xd(),this._storeCtrl=new Zd(this,this._store)}get _lastUploadId(){var i,r;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(r=this.config)==null?void 0:r.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,r;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(o=>o.type===rs.LANGUAGES);return((r=t==null?void 0:t.variants.find(Boolean))==null?void 0:r.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,r,o;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((r=this.config)==null?void 0:r.locale)??void 0;return{...Qc((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var r,o,n;const t=(((r=this._metadataSchema)==null?void 0:r.regionalVariantsGroups)??[]).find(a=>a.type===rs.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(o=this.config)==null?void 0:o.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var r;const e=(r=this.config)==null?void 0:r.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const r=qc(e,t);return this._localizedSchemaCache={base:e,translations:t,result:r},r}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(l=>l.type===rs.LANGUAGES)))return;const r=this._activeLanguage;if(!r||this._metadataTranslationsLang===r&&this._metadataTranslations)return;this._metadataTranslationsLang=r;const o=++this._translationsRequestId,n=e.peek(r);if(n){this._metadataTranslations=n;return}e.getTranslations(r).then(l=>{o===this._translationsRequestId&&(this._metadataTranslations=l)})}open(){var t,i,r,o,n,a,l,d,c;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||r.call(i),this._dispatchPublic(H.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(H.OPEN,{}),e&&((c=(d=(l=this.config)==null?void 0:l.callbacks)==null?void 0:d.onRestore)==null||c.call(d),this._dispatchPublic(H.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,r;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(H.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,r;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||r.call(i),this._dispatchPublic(H.CLOSE,{}),this.requestUpdate()}upload(){var o,n,a,l,d,c,u,h,f,y;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(g=>g.status==="idle"||g.status==="queued");if((n=(o=this.config)==null?void 0:o.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(H.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const r=[...this._store.getState().files.values()].filter(g=>g.status==="idle"||g.status==="queued");this._dispatchPublic(H.UPLOAD_STARTED,{files:r}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||d.call(l,r),this._engine.uploadAll(),(c=this.config)!=null&&c.minimizeOnUpload&&((u=this.config)==null?void 0:u.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(y=(f=(h=this.config)==null?void 0:h.callbacks)==null?void 0:f.onMinimize)==null||y.call(f),this._dispatchFloatGeometryEvent(H.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,r=new Map(i);let o=!1;for(const n of e){const a=i.get(n.id);a&&(r.set(n.id,{...a,...n}),o=!0)}o&&this._store.setState({files:r})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const r=this._store.getState().files,o=r.get(e);if(!o||!Q._MODIFIABLE_STATUSES.has(o.status))return;const n=new Map(r);n.set(e,{...o,meta:t!=null?{...o.meta,...t}:o.meta,tags:i??o.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let r=!1;for(const{fileId:o,meta:n,tags:a}of e){const l=t.get(o);!l||!Q._MODIFIABLE_STATUSES.has(l.status)||(i.set(o,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),r=!0)}r&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const r=this._store.getState().files,o=r.get(e);if(!o||!Q._MODIFIABLE_STATUSES.has(o.status))return;const n={...o.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(r);a.set(e,{...o,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const r=this._store.getState().files,o=new Map(r);let n=!1;for(const a of e){const l=r.get(a);if(!l||!Q._MODIFIABLE_STATUSES.has(l.status))continue;const d={...l.taxonodes??{}};i==null?delete d[t]:d[t]=i,o.set(a,{...l,taxonodes:d}),n=!0}n&&this._store.setState({files:o})}updateFileProduct(e,t){const i=this._store.getState().files,r=i.get(e);if(!r||!Q._MODIFIABLE_STATUSES.has(r.status))return;const o=new Map(i);o.set(e,{...r,product:yn(r.product,t)}),this._store.setState({files:o})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let r=!1;for(const{fileId:o,product:n}of e){const a=t.get(o);!a||!Q._MODIFIABLE_STATUSES.has(a.status)||(i.set(o,{...a,product:yn(a.product,n)}),r=!0)}r&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(r=>{this._previewFileId===t&&(this._previewDims=r?`${r.w} × ${r.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),ot(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(H.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(ot(x,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&di.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Dd(e||"en");i&&t.on("missingKey",(o,n,a,l,d,c)=>{const u=a.match(/_(?:zero|one|two|few|many|other)$/),h=u&&(c!=null&&c[`defaultValue${u[0]}`])?String(c[`defaultValue${u[0]}`]):l;Md.handleMissingKey(a,h,n)});const r=(o,n,a)=>xt(o,n,a);this._store.setState({t:r})}catch{}}disconnectedCallback(){var e,t,i,r,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._hostStyleObserver)==null||e.disconnect(),this._hostStyleObserver=null,(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const o=this._store.getState().queueConfig;t.queueConfig={...o,concurrency:e.concurrency}}if(e.autoProceed!=null){const o=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...o,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const o=i.defaults;o.resize!==void 0&&(this._setResize=o.resize),o.maxWidth!==void 0&&(this._setMaxW=o.maxWidth),o.maxHeight!==void 0&&(this._setMaxH=o.maxHeight),o.transcode!==void 0&&(this._setTranscode=o.transcode),o.resolution!==void 0&&(this._setResolution=o.resolution),o.protocol!==void 0&&(this._setProtocol=o.protocol),o.resumable!==void 0&&(this._setResumable=o.resumable)}const r=this._lastUploadId;this._hasStoredReview=r!=null&&di.exists(r),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var r,o,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=ro(t.container,e.apiDomain),this._authHeaders=$r(t),this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(r=e.connectors)==null?void 0:r.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const l=await ef(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,r;const t=e instanceof Error?e.message:String(e);return(r=(i=this.config)==null?void 0:i.auth)!=null&&r.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var a,l,d,c;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let r=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;r||(r={})}if(!r)return;const o=(c=(d=this.config)==null?void 0:d.connectors)==null?void 0:c.companionUrl;if(!o)return r;const n=o.replace(/\/+$/,"");return{...r,endpoint:r.endpoint??`${n}/files`,jsonBase:r.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return r=>{const o={},n=Fe(r);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(o.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(o.postprocess="transcode",o["video-resolution"]=this._setResolution,o.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(o.opt_force_name=l)}const a=i==null?void 0:i(r);return a&&Object.assign(o,a),Object.keys(o).length>0?o:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Gh(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,r)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:r})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,r=this._storeCtrl.state.t;try{const{fetchMetadataSchema:o,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:l,hasCachedDependencies:d,canReachHub:c,canUseSettingsSchema:u,HUB_HEADERS_HINT:h,createTagsAutocomplete:f,createTaxonomyService:y,createUltratagsService:g,createFieldI18nService:S}=await Y(async()=>{const{fetchMetadataSchema:U,fetchDependencies:D,normalizeDependencies:K,hasCachedSchema:X,hasCachedDependencies:V,canReachHub:z,canUseSettingsSchema:le,HUB_HEADERS_HINT:be,createTagsAutocomplete:$,createTaxonomyService:v,createUltratagsService:_,createFieldI18nService:O}=await import("./index-Btj0SHnf.js");return{fetchMetadataSchema:U,fetchDependencies:D,normalizeDependencies:K,hasCachedSchema:X,hasCachedDependencies:V,canReachHub:z,canUseSettingsSchema:le,HUB_HEADERS_HINT:be,createTagsAutocomplete:$,createTaxonomyService:v,createUltratagsService:_,createFieldI18nService:O}},[]);if(i!==this._metadataSchemaResolveId)return;const E=c(t),k=E||u(t)||!!t.rawMetadata||l(t.projectUuid),C=E||d(t.projectUuid)||!!t.rawDependencies;if(!k){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig sets schemaSource: 'hub' but no usable Hub auth is configured — skipping metadata schema and dependencies. Drop schemaSource to load the schema from /v5/settings instead. ${h}`),this._showToast(r("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let b;t.rawDependencies?b=Promise.resolve(a(t.rawDependencies)):C?b=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(U=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",U),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${h}`)),b=Promise.resolve([]));const[w,T]=await Promise.all([o(this._apiBase,this._authHeaders,t.projectUuid,t),b]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=T,this._metadataAutocomplete=f(this._apiBase,this._authHeaders),this._taxonomyService=y(this._apiBase,this._authHeaders),this._ultratagsService=g(this._apiBase,this._authHeaders),this._fieldI18nService=S(this._apiBase,this._authHeaders),this._metadataSchema=w.productsEnabled?Oc(w,this._storeCtrl.state.t):w;const A=this._metadataSchema.fields.filter(U=>ki(U,t)).map(U=>U.key);this._dispatchPublic(H.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:A}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(o){console.error("[sfx-uploader] Failed to load metadata schema:",o),this._showToast(r("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let r=!1;const o=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!Q._MODIFIABLE_STATUSES.has(a.status))continue;const l=Kt({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const d={};for(const c of t.fields){const u=l.get(c.ckey);(u==null?void 0:u.setValue)!==void 0&&(u.hidden||qe(a.meta[c.key])&&(d[c.key]=pc(c,u.setValue)))}Object.keys(d).length!==0&&(o.set(a.id,{...a,meta:{...a.meta,...d}}),r=!0)}r&&this._store.setState({files:o})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const r=new Map(t);for(const o of t.values()){if(!Q._MODIFIABLE_STATUSES.has(o.status))continue;const n=Kt({mime:o.type??"",meta:o.meta},e,this._metadataDependencies),a=hc(o.meta,e,n);a!==o.meta&&(r.set(o.id,{...o,meta:a}),i=!0)}i&&this._store.setState({files:r})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const r=this._store.getState().files.get(e);if(!r||r.name===i)return;const o=new Map(this._store.getState().files);o.set(e,{...r,name:i,nameIsUserDefined:!0}),this._store.setState({files:o})}_previewMeta(e){var t;return(t=this._metadataSchema)!=null&&t.productsEnabled?{...e.meta,[Ct]:e.product.ref,[Et]:e.product.position}:e.meta}_resolvedSchemaFor(e){return!this._metadataSchema||this._metadataDependencies.length===0?null:Kt({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies)}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:ja(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Mc(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?Na(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}get _requiredFieldsTotal(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:zc(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies).size}get _requiredFieldsRemaining(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Object.keys(Dc(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)).length}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var r;const e=this._isPillExpanded?"card":"pill",t=(r=this._portalContainer)==null?void 0:r.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var r,o,n,a,l,d,c,u,h,f;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(r=this.config)==null?void 0:r.callbacks;for(const[y,g]of e.files){const S=t.files.get(y);if(!S){g.relativeFolder&&this._firedFolders.delete(g.relativeFolder);continue}if(S.status!==g.status)switch(g.status){case"uploading":S.status==="paused"&&(this._dispatchPublic(H.UPLOAD_RESUMED,{file:g}),(o=i==null?void 0:i.onUploadResumed)==null||o.call(i,g));break;case"complete":g.response&&(this._dispatchPublic(H.UPLOAD_COMPLETE,{file:g,response:g.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,g,g.response));break;case"error":case"failed":{const E=new Error(g.error??"Upload failed");this._dispatchPublic(H.UPLOAD_ERROR,{file:g,error:E}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,g,E);break}case"retrying":this._dispatchPublic(H.UPLOAD_RETRY,{file:g,attempt:g.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,g,g.retryCount);break;case"paused":this._dispatchPublic(H.UPLOAD_PAUSED,{file:g}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,g);break}g.status==="uploading"&&S.progress!==g.progress&&(this._dispatchPublic(H.UPLOAD_PROGRESS,{file:g,progress:g.progress,speed:g.speed}),(c=i==null?void 0:i.onUploadProgress)==null||c.call(i,g,g.progress,g.speed)),g.relativeFolder&&S.status!==g.status&&pa.has(g.status)&&!this._firedFolders.has(g.relativeFolder)&&this._maybeDispatchFolderComplete(g.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const y=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=y),this._dispatchPublic(H.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:y}),(u=i==null?void 0:i.onTotalProgress)==null||u.call(i,e.totalProgress,e.totalSpeed,y)}if(t.isUploading&&!e.isUploading){const y=[...e.files.values()];if(!y.some(S=>S.status==="cancelled")){const S=y.filter(b=>b.status==="complete"),E=y.filter(b=>b.status==="failed"||b.status==="error");if(S.length===0&&E.length===0)return;const k=this._lastUploadId;if(k!=null){const b=[...S,...E];di.save(k,b),this._hasStoredReview=b.length>0}this._dispatchPublic(H.ALL_COMPLETE,{successful:S,failed:E}),(h=i==null?void 0:i.onAllComplete)==null||h.call(i,S,E);const C=(f=this.config)==null?void 0:f.closeOnComplete;if(C!==!1&&C!=null){const b=typeof C=="number"?C:1500;this._closeOnCompleteTimer=setTimeout(()=>{var w,T,A;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(H.COMPLETE_ACTION,{}),(A=(T=(w=this.config)==null?void 0:w.callbacks)==null?void 0:T.onCompleteAction)==null||A.call(T),this.close())},b)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const r=[...t.files.values()].filter(l=>l.relativeFolder===e);if(r.length===0||r.some(l=>!pa.has(l.status)))return;const o=r.filter(l=>l.status==="complete"),n=r.filter(l=>l.status==="failed"||l.status==="error");o.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(H.FOLDER_COMPLETE,{folder:e,successful:o,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,o,n))}get _mergedSources(){var u;const e=(u=this.config)==null?void 0:u.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=hi.filter(h=>h.id!=="url"),this._cachedSources;const t=e.providers.length>0?bf(e.providers):[],i=e.customSources??[],r=e.coreSources?new Set(e.coreSources):null,o=r?hi.filter(h=>r.has(h.id)):hi,n=e.companionUrl?o:o.filter(h=>h.id!=="url"),a=n.filter(h=>h.id==="device"||h.id==="url"),l=n.filter(h=>h.id!=="device"&&h.id!=="url"),d=new Set,c=[];for(const h of[...a,...t,...l,...i])if(!d.has(h.id)){if(Q._RESERVED_IDS.has(h.id)&&h.onActivate){console.warn(`[sfx-uploader] Custom source id "${h.id}" conflicts with a built-in source and was skipped.`);continue}d.add(h.id),c.push(h)}return this._cachedSources=c,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(r=>i.has(r.status))&&t.some(r=>r.status==="complete"||r.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var l,d,c,u,h;const t=(l=this.config)==null?void 0:l.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((d=this.config)==null?void 0:d.preserveFolderStructure)!==!1;let r=0,o=!1;const n=(f,y,g)=>`${f}\0${y}\0${g}`,a=new Set;for(const f of this._store.getState().files.values())f.status!=="rejected"&&f.status!=="cancelled"&&a.add(n(f.name,f.size,f.relativeFolder??""));for(const f of e){if(Qs(f.name))continue;if(o){r++;continue}const y=i?Nh(Bh(f)):"",g=this._store.getState(),S=n(f.name,f.size,y);if(a.has(S))continue;const E=f.type||ta(f.name),k=er({name:f.name,size:f.size,type:E},g.restrictions,g.files);if(k){if(vf(k)){o=!0,r++;continue}const w=E.startsWith("image/")&&!tt(E)?URL.createObjectURL(f):null,T={id:zt(),status:"rejected",file:f,remoteUrl:null,name:f.name,size:f.size,type:E,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:k.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Mt,relativeFolder:y};Lt(this._store,T),this._dispatchPublic(H.FILE_REJECTED,{file:T,reason:k.message}),(c=t==null?void 0:t.onFileRejected)==null||c.call(t,T,k.message);const A=(u=this.config)==null?void 0:u.rejectedFileAutoRemoveDelay,U=A===!1||A===0||A===void 0?0:A;if(U>0){const D=T.id,K=setTimeout(()=>{this._rejectedTimers.delete(D);const X=this._store.getState().files.get(D);X&&X.status==="rejected"&&hn(this._store,D)},U);this._rejectedTimers.set(D,K)}continue}let C=null;E.startsWith("image/")&&!tt(E)&&(C=URL.createObjectURL(f));const b={id:zt(),status:"idle",file:f,remoteUrl:null,name:f.name,size:f.size,type:E,previewUrl:C,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},remoteInfo:null,...Mt,relativeFolder:y};if(Lt(this._store,b),a.add(S),this._dispatchPublic(H.FILE_ADDED,{file:b}),(h=t==null?void 0:t.onFileAdded)==null||h.call(t,b),f.type.startsWith("video/")){mf(f).then(T=>{if(!T)return;const A=this._store.getState(),U=A.files.get(b.id);if(U){const D=new Map(A.files);D.set(b.id,{...U,previewUrl:T}),this._store.setState({files:D})}else URL.revokeObjectURL(T)});const w=document.createElement("video");w.preload="metadata",w.src=URL.createObjectURL(f),w.onerror=()=>{URL.revokeObjectURL(w.src)},w.onloadedmetadata=()=>{const T=w.duration;if(URL.revokeObjectURL(w.src),!isFinite(T))return;const A=this._store.getState(),U=A.files.get(b.id);if(U){const D=new Map(A.files);D.set(b.id,{...U,duration:T}),this._store.setState({files:D})}}}}if(r>0){const f=this._storeCtrl.state.t,y=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(f("tooManyFilesSkipped",{count:r,max:y,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var o,n,a,l,d;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const c=this._videoBlobUrls.get(t.file);c&&(URL.revokeObjectURL(c),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((o=this._engine)==null||o.cancelFile(e)),hn(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const r=this._rejectedTimers.get(e);if(r&&(clearTimeout(r),this._rejectedTimers.delete(e)),this._previewFileId===e){const c=[...this._store.getState().files.values()];this._previewFileId=c.length>0?c[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(H.FILE_REMOVED,{file:i}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>Fe(e)==="image"&&!tt(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,r,o;const e=(r=(i=this.config)==null?void 0:i.auth)==null?void 0:r.container,t=(o=this._authHeaders)==null?void 0:o["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var o,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Zn((n=(o=this.config)==null?void 0:o.similarityCheck)==null?void 0:n.confidence),r=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Qn(e,{...t,threshold:i,endpoint:r}).then(d=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,d)}).catch(d=>{console.error("[sfx-uploader] Similarity check failed for",e.name,d),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var h,f,y,g;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(S=>S.id);const i=Zn((f=(h=this.config)==null?void 0:h.similarityCheck)==null?void 0:f.confidence),r=(g=(y=this.config)==null?void 0:y.similarityCheck)==null?void 0:g.endpoint,o=new AbortController;this._similarAbort=o;const n=[...e];let a=0,l=0;const d=e.length,c=()=>{if(!o.signal.aborted){if(!this._previewFileId){const S=e.find(E=>{var k;return(((k=this._similarResults.get(E.id))==null?void 0:k.length)??0)>0});S&&(this._previewFileId=S.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},u=()=>{if(!o.signal.aborted)for(;a<ag&&n.length>0;){const S=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(S.id),Qn(S,{...t,threshold:i,endpoint:r,signal:o.signal}).then(E=>{o.signal.aborted||(this._similarMarkInactive(S.id),this._similarSetResults(S.id,E))}).catch(E=>{o.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",S.name,E),this._similarMarkInactive(S.id),this._similarSetResults(S.id,[]))}).finally(()=>{o.signal.aborted||(a-=1,l+=1,l===d?c():u())})}};u()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),r=i>0?t.slice(i+1).toUpperCase():"";return r&&r.length<=5?r:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(r=>{var o,n;return r.status==="complete"&&!!((n=(o=r.response)==null?void 0:o.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var o,n,a;if(!e)return;const t=Wd(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(H.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),r=(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||r===!1)&&t&&window.location.assign(t)}get _hasUnsavedUploadWork(){if(this._phase==="uploading")return!0;for(const e of this._store.getState().files.values())if(e.status==="idle"||e.status==="queued")return!0;return!1}_confirmDismiss(){return this._hasUnsavedUploadWork?new Promise(e=>{this._confirmDismissResolve=e,this._confirmDismissVisible=!0}):Promise.resolve(!0)}render(){var r;const e=((r=this.config)==null?void 0:r.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?p`
        ${this._isOpen&&!this._isMinimized?p`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:x}
        ${this._renderFsOverlay()}
      `:p`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return x;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(r=>r.id===this._previewFileId);return p`
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
        ${this._fullscreenVideoFile?p`<video
              class="fs-img"
              src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
              controls
              playsinline
              draggable="false"
              @click=${r=>r.stopPropagation()}
            ></video>`:p`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${se(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${r=>r.stopPropagation()}>
        <button
          class="fs-btn"
          @click=${this._onFsToggleZoom}
          title=${this._fsZoom>=Q._FS_ZOOM_LEVELS[Q._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}
        >
          ${this._fsZoom>=Q._FS_ZOOM_LEVELS[Q._FS_ZOOM_LEVELS.length-1]?p`<svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>`:p`<svg
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
        @click=${r=>{r.stopPropagation(),this._navigateFs(-1)}}
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
        @click=${r=>{r.stopPropagation(),this._navigateFs(1)}}
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
    `}_renderProgressHeaderActions(){var a,l,d;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((l=this.config)==null?void 0:l.header)??(t==="modal"?"close":!0),r=!!((d=this.config)!=null&&d.minimizeOnUpload)&&t!=="inline",o=i==="close";if(!r&&!o)return x;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return p`
      <div class="header-actions">
        ${r?p`<button
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
            </button>`:x}
        ${o?p`<button
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
            </button>`:x}
      </div>
    `}_renderInlineHeader(e){return p`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?p`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:x}
          ${e.title?p`<h2 class="inline-header-title">${e.title}</h2>`:x}
        </div>
        ${e.description?p`<div class="inline-header-desc">${e.description}</div>`:x}
      </div>
    `}_renderHeader(){var E,k,C,b,w,T;const e=this._storeCtrl.state.t,t=((E=this.config)==null?void 0:E.mode)??"modal";if(this._phase==="uploading"){const A=this._storeCtrl.state,D=[...A.files.values()].filter(z=>z.status!=="rejected"&&z.status!=="cancelled"),K=D.length,X=D.filter(z=>z.status==="complete").length,V=A.totalProgress??0;return p`
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
                ${e("uploadingFiles",{count:K,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:X,total:K})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:ea(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(V)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${se({width:`${V}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const A=[...this._storeCtrl.state.files.values()].filter(D=>D.status!=="rejected"&&D.status!=="cancelled"),U=this._batchOutcome(A,!0);return p`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon ${U.outcomeClass}">${U.outcomeIcon}</div>
            <div>
              <div class="float-title">${U.title}</div>
              <div class="float-subtitle">${U.doneSummary}</div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          ${U.segTotal>0?p`<div class="header-progress">
                <div class="header-overall-bar" aria-hidden="true">
                  ${U.newCount>0?p`<div
                        class="header-seg ok"
                        ${se({width:U.segPct(U.newCount)})}
                      ></div>`:x}
                  ${U.alreadyExistedCount>0?p`<div
                        class="header-seg dup"
                        ${se({width:U.segPct(U.alreadyExistedCount)})}
                      ></div>`:x}
                  ${U.failed>0?p`<div
                        class="header-seg fail"
                        ${se({width:U.segPct(U.failed)})}
                      ></div>`:x}
                </div>
              </div>`:x}
        </div>
      `}if(t==="inline"&&((k=this.config)!=null&&k.inlineHeader))return x;const i=((C=this.config)==null?void 0:C.header)??(t==="modal"?"close":!0);if(i===!1)return x;const r=t==="modal"?this._onModalDismiss:this._onInlineDismiss,o=i==="back"?p`<button
            class="header-btn header-btn-back"
            aria-label=${e("backToAssetPicker","Back to Asset Picker")}
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
          </button>`:x,n=(b=this.config)==null?void 0:b.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,d=[...this._storeCtrl.state.files.values()],c=d.some(A=>Fe(A)==="image"&&!tt(A.type)),u=d.some(A=>Fe(A)==="pdf"),h=d.some(A=>Fe(A)==="vid"),y=a&&(c||u||h||l)?p`<button
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
          </button>`:x,g=(T=(w=this._metadataSchema)==null?void 0:w.regionalVariantsGroups)!=null&&T.length?p`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:x,S=i==="close"?p`<button
            class="header-btn header-btn-close"
            aria-label=${e("close","Close")}
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
          </button>`:x;return p`
      <div class="header">
        ${o}
        ${i!=="back"?p` <div class="header-icon">
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
            </div>`:x}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${g} ${y} ${S}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const r={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,r),t(r)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,r=e.filter(C=>C.status==="complete").length,o=e.filter(C=>C.status==="failed"||C.status==="error").length,n=e.filter(C=>C.status==="complete"&&C.alreadyExisted).length,a=Math.max(r-n,0),l=r>0&&o===0&&n>=r,d=t?o>0?"error":n>0?"warn":"done":"",c=p`<svg
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
    </svg>`,u=p`<svg
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
    </svg>`,h=p`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>`,f=o>0?r>0?c:u:n>0?c:h,y=t?o>0?r>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):l?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),g=[];a>0&&g.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&g.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),o>0&&g.push(i("nFailed","{{count}} failed",{count:o}));const S=g.length>0?g.join(" · "):i("allDone","All done"),E=a+n+o;return{completed:r,failed:o,alreadyExistedCount:n,newCount:a,allAlreadyExisted:l,outcomeClass:d,outcomeIcon:f,title:y,doneSummary:S,segTotal:E,segPct:C=>E>0?`${C/E*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,r=Math.round(t.totalProgress??0),o=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:l,newCount:d,outcomeClass:c,outcomeIcon:u,title:h,doneSummary:f,segPct:y}=this._batchOutcome(e,o),g=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return p`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?p`<div class="float-collapsed-icon ${c}">${u}</div>`:p`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${h}</span>
            ${o?x:p`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${o&&g?p`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(g)}
                >
                  ${Ys}
                </button>`:x}
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
      `;const S=e.filter(b=>b.status==="failed"||b.status==="error"),E=e.filter(b=>b.status==="complete"&&b.alreadyExisted),k=e.filter(b=>b.status!=="failed"&&b.status!=="error"&&b.status!=="complete"),C=e.filter(b=>b.status==="complete"&&!b.alreadyExisted);return p`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${c}">
              ${o?u:p`<svg
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
                ${o?f:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:ea(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${o&&g?p`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(g)}
                >
                  ${Ys}
                </button>`:x}
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
            ${o?x:p`<span class="float-progress-pct">${r}%</span>`}
          </div>
          ${o?p`<div class="float-bar segmented" role="img" aria-label=${f}>
                ${d>0?p`<div
                      class="float-bar-seg ok"
                      ${se({width:y(d)})}
                    ></div>`:x}
                ${l>0?p`<div
                      class="float-bar-seg dup"
                      ${se({width:y(l)})}
                    ></div>`:x}
                ${a>0?p`<div
                      class="float-bar-seg fail"
                      ${se({width:y(a)})}
                    ></div>`:x}
              </div>`:p`<div class="float-bar">
                <div class="float-bar-fill" ${se({width:`${r}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${Ht(S,b=>b.id,b=>this._renderFloatItem(b,i))}
          ${Ht(E,b=>b.id,b=>this._renderFloatItem(b,i))}
          ${Ht(k,b=>b.id,b=>this._renderFloatItem(b,i))}
          ${Ht(C,b=>b.id,b=>this._renderFloatItem(b,i))}
        </div>
      </div>
    `}_renderFloatItem(e,t){var r,o,n;const i=e.status==="failed"||e.status==="error";return p`
      <div class="float-item">
        <div
          class="float-item-thumb"
          ${se(e.previewUrl?{"background-image":`url(${e.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
        >
          ${e.previewUrl?x:p`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>`}
        </div>
        <div class="float-item-info">
          <div class="float-item-name">${e.name}</div>
          <div class="float-item-size">${qt(e.size)}</div>
        </div>
        <div class="float-item-status">
          ${e.status==="complete"?p`${(r=this.config)!=null&&r.showLocateButton&&((n=(o=e.response)==null?void 0:o.file)!=null&&n.uuid)?p`<button
                    class="float-item-act locate"
                    title=${t("locate","Locate")}
                    aria-label=${t("locate","Locate")}
                    @click=${()=>this._locateFile(e)}
                  >
                    ${Ys}
                  </button>`:x}
              ${e.alreadyExisted?p`<div class="float-item-tip">
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
                  </div>`:p`<div class="float-item-tip">
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
                  </div>`}`:i?p`<button
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
                  </div>`:e.status==="paused"?p` <button
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
                    </button>`:p`
                    ${e.status==="uploading"&&e.isTus?p`<button
                          class="float-item-act"
                          title=${t("pause","Pause")}
                          aria-label=${t("pauseUpload","Pause upload")}
                          @click=${()=>{var a;return(a=this._engine)==null?void 0:a.pauseFile(e.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <rect x="6" y="4" width="4" height="16" rx="1" />
                            <rect x="14" y="4" width="4" height="16" rx="1" />
                          </svg>
                        </button>`:x}
                    ${e.status==="uploading"||e.status==="queued"||e.status==="retrying"?p`<button
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
                        </button>`:x}
                    <div class="float-item-spinner"></div>
                  `}
        </div>
      </div>
    `}_renderPreviewLayout(e){var S,E,k,C,b,w,T,A,U;if(e.length===0)return x;const t=this._storeCtrl.state.t,i=e,r=i.find(D=>D.id===this._previewFileId)??i[0],o=((S=r.name.split(".").pop())==null?void 0:S.toUpperCase())||"";new Date(r.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((D,K)=>D+(K.size||0),0),l=!!((k=(E=this.config)==null?void 0:E.similarityCheck)!=null&&k.enabled)&&this._phase==="ready",d=l?i.filter(D=>Fe(D)==="image"&&!tt(D.type)&&!this._similarResults.has(D.id)).map(D=>D.id):[],c=Math.min(d.length,et),u=c>0&&this._similarSelectedIds.size>=c,h=this._similarSelectedIds.size>=et,f=this._similarResults.get(r.id),y=f!==void 0,g=y?this._previewPanelTab:"details";return p`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${se({flex:String(this._splitPct)})}>
          ${((C=this.config)==null?void 0:C.mode)==="inline"&&((b=this.config)!=null&&b.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):x}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${qt(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${ia(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((w=this.config)==null?void 0:w.showLocateButton)??!1}
            .showCopyCdnButton=${((T=this.config)==null?void 0:T.showCopyCdnButton)??!1}
            .showCheckSimilar=${l}
            .selectMode=${l}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${u}
            .selectionFull=${h}
            .maxSelection=${et}
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
        <div class="preview-panel" ${se({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():p`
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
                  <span class="preview-header-name" title=${r.name}
                    >${r.name}</span
                  >
                  <div class="preview-header-actions">
                    ${r.previewUrl||r.type.startsWith("video/")&&r.file?p`
                          <button
                            @click=${()=>{this._fullscreenPreviewUrl=r.previewUrl,this._fullscreenVideoFile=r.type.startsWith("video/")&&r.file?r.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
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
                        `:x}
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
                ${y?p`
                      <div class="preview-tabs" role="tablist">
                        <button
                          class="preview-tab ${g==="details"?"active":""}"
                          role="tab"
                          aria-selected=${g==="details"}
                          @click=${()=>{this._previewPanelTab="details"}}
                        >
                          ${t("details","Details")}
                        </button>
                        <button
                          class="preview-tab ${g==="similar"?"active":""}"
                          role="tab"
                          aria-selected=${g==="similar"}
                          @click=${()=>{this._previewPanelTab="similar"}}
                        >
                          <span>${t("similarTab","Similar")}</span>${f&&f.length>0?p`<span class="preview-tab-count">${f.length}</span>`:x}
                        </button>
                      </div>
                    `:x}
                ${g==="similar"?this._renderSimilarPanel(r,f??[]):p`
                      <div class="preview-details-body">
                        ${r.type.startsWith("video/")&&r.file?p`
                              <div class="preview-media-area">
                                <div class="preview-img-wrap">
                                  <video
                                    class="preview-image"
                                    src=${this._getVideoBlobUrl(r.file)}
                                    controls
                                    playsinline
                                  ></video>
                                </div>
                                <button
                                  class="preview-nav prev"
                                  ?disabled=${i.indexOf(r)===0}
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
                                  ?disabled=${i.indexOf(r)===i.length-1}
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
                            `:r.previewUrl?p`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${r.previewUrl}
                                      alt=${r.name}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(r)===0}
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
                                    ?disabled=${i.indexOf(r)===i.length-1}
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
                              `:p`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${Fe(r)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${Jr(o)}
                                      alt="${o?t("extFile","{{ext}} file",{ext:o}):t("file","File")}"
                                      @error=${D=>{const K=D.target,X=Wr();!K.dataset.fallback&&K.src!==X&&(K.dataset.fallback="1",K.src=X)}}
                                    />
                                  </div>
                                  <button
                                    class="preview-nav prev"
                                    ?disabled=${i.indexOf(r)===0}
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
                                    ?disabled=${i.indexOf(r)===i.length-1}
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
                        ${this._metadataSchema&&((A=this.config)!=null&&A.metadataConfig)?p`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${o}${r.size?` · ${qt(r.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                              </div>
                            </div>`:x}
                        ${this._metadataSchema&&((U=this.config)!=null&&U.metadataConfig)?p`
                              <div
                                class="preview-metadata"
                                @field-blur=${this._onPreviewMetadataBlur}
                                @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                              >
                                <sfx-metadata-form
                                  .schema=${this._localizedMetadataSchema}
                                  .meta=${this._previewMeta(r)}
                                  .config=${this._effectiveMetadataConfig}
                                  .autocomplete=${this._metadataAutocomplete}
                                  .taxonomyService=${this._taxonomyService}
                                  .ultratags=${this._ultratagsService}
                                  .defaultLanguage=${this._metadataDefaultLanguage}
                                  .taxonodes=${r.taxonodes??null}
                                  .resolvedSchema=${this._resolvedSchemaFor(r)}
                                  .dependencies=${this._metadataDependencies}
                                ></sfx-metadata-form>
                              </div>
                            `:p`
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
                                    <div class="preview-file-info-val">${r.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${o}</div>
                                  </div>
                                  ${r.size?p`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${qt(r.size)}
                                          </div>
                                        </div>
                                      `:x}
                                  ${this._previewDims!=="—"?p`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("dimensions","Dimensions")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${this._previewDims}
                                          </div>
                                        </div>
                                      `:x}
                                </div>
                              </div>
                            `}
                      </div>
                    `}
              `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return t.length===0?p`
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
      `:p`
      <div class="psim-body">
        ${t.map(r=>{const o=Math.round(r.score*100);return p`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${r.score>=.85?"high":""}">${o}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(r.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>
                ${r.url?p`<img src=${r.url} alt="" />`:x}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(r)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(r)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var u;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(h=>Fe(h)==="image"&&!tt(h.type)),r=t.some(h=>Fe(h)==="pdf"),o=t.some(h=>Fe(h)==="vid"),n=(u=this.config)==null?void 0:u.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=h=>{switch(h){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},d=h=>{switch(h){case"hls":return e("protocolHls","HLS")}},c=h=>f=>{const y=parseInt(f.target.value,10);h(Number.isFinite(y)?y:0)};return p`
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
        ${i||r?p`
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
            `:x}
        ${o?p`
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
                ${this._setResolutionOpen&&this._setTranscode?p`
                      <div class="smenu">
                        ${lg.map(h=>p`
                            <div
                              class="sopt ${h===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=h,this._setResolutionOpen=!1}}
                            >
                              ${l(h)}
                              ${h===this._setResolution?p`<svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>`:x}
                            </div>
                          `)}
                      </div>
                    `:x}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${dg.map(h=>p`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=h}}
                    >
                      <span class="sradio ${this._setProtocol===h?"on":""}"></span>
                      <span class="sradio-lbl">${d(h)}</span>
                    </div>
                  `)}
              </div>
            `:x}
        ${a?p`
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
            `:x}
      </div>
    `}_navigatePreview(e,t){var o;const r=e.findIndex(n=>n.id===this._previewFileId)+t;if(r>=0&&r<e.length){const n=(o=this.shadowRoot)==null?void 0:o.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[r].id}}_renderBody(){var g,S,E,k,C,b,w,T,A,U,D,K,X;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],r=i.filter(V=>V.status==="idle"||V.status==="queued"||V.status==="error"||V.status==="failed"),o=this._phase,n=ia(e.restrictions),a=i.length>0,l=o==="ready"?this._requiredFieldsRemaining:0,c=!!((S=(g=this.config)==null?void 0:g.similarityCheck)!=null&&S.enabled)&&o==="ready",u=c?i.filter(V=>Fe(V)==="image"&&!tt(V.type)&&!this._similarResults.has(V.id)).map(V=>V.id):[],h=Math.min(u.length,et),f=h>0&&this._similarSelectedIds.size>=h,y=this._similarSelectedIds.size>=et;return p`
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
          @dragenter=${a?this._onBodyDragEnter:x}
          @dragover=${a?this._onBodyDragOver:x}
          @dragleave=${a?this._onBodyDragLeave:x}
          @drop=${a?this._onBodyDrop:x}
        >
          ${((E=this.config)==null?void 0:E.mode)==="inline"&&((k=this.config)!=null&&k.inlineHeader)&&!this._previewFileId&&o!=="uploading"&&o!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):x}
          ${this._isReviewing?p`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((C=this.config)==null?void 0:C.showLocateButton)??!1}
                  .showCopyCdnButton=${((b=this.config)==null?void 0:b.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:p`
                ${a?x:p`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((w=this.config)==null?void 0:w.sourcesLayout)??"pills"}
                        .mode=${((T=this.config)==null?void 0:T.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?p`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:x}`}
                ${a?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):p`
                        <div class="asset-count">
                          ${i.length} ${i.length===1?"file":"files"} ·
                          ${qt(i.reduce((V,z)=>V+(z.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${o!=="uploading"&&o!=="complete"}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((A=this.config)==null?void 0:A.showLocateButton)??!1}
                          .showCopyCdnButton=${((U=this.config)==null?void 0:U.showCopyCdnButton)??!1}
                          .showCheckSimilar=${c}
                          .selectMode=${c}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${f}
                          .selectionFull=${y}
                          .maxSelection=${et}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:x}
              `}
        </div>

        ${a?p`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${o==="uploading"?"uploading":o==="complete"?"done":"idle"}
                .fileCount=${o==="uploading"||o==="complete"?i.filter(V=>V.status!=="rejected"&&V.status!=="cancelled").length:r.length}
                .failedCount=${i.filter(V=>V.status==="failed"||V.status==="error").length}
                .showFillMetadata=${!!(((D=this.config)==null?void 0:D.showFillMetadata)??((K=this.config)==null?void 0:K.metadataConfig))&&l===0}
                .requireMetadataFirst=${o==="ready"?this._hasMetadataIssues:!1}
                .requiredFieldsTotal=${o==="ready"?this._requiredFieldsTotal:0}
                .requiredFieldsRemaining=${l}
                .showCheckSimilar=${!1}
                .selectMode=${c&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${h}
                .allSelected=${f}
              ></sfx-actions-bar>
            `:x}
        ${this._showUrlDialog?p`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:x}
        ${this._showCameraDialog?p`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:x}
        ${this._showScreenCastDialog?p`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:x}
        ${this._confirmDismissVisible?p`
              <div class="up-confirm-overlay" @click=${this._onConfirmDismissCancel}>
                <div
                  class="up-confirm"
                  role="alertdialog"
                  aria-modal="true"
                  aria-labelledby="up-confirm-msg"
                  @click=${V=>V.stopPropagation()}
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
            `:x}
        ${this._activeConnector&&((X=this.config)!=null&&X.connectors)?p`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${this._activeConnector==="google-drive"&&this.config.connectors.googlePicker?p`
                        <sfx-google-picker-view
                          .t=${t}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:ua.has(this._activeConnector)?p`
                          <sfx-search-provider-browser
                            .t=${t}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:p`
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
            `:x}
        ${this._bulkMetadataOpen&&this._metadataSchema?p`
              <sfx-bulk-metadata-modal
                .schema=${this._localizedMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(V=>Q._MODIFIABLE_STATUSES.has(V.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                .primaryAction=${this._bulkMetadataHadIssuesOnOpen?"upload":"save"}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:x}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);if(i===-1)return;const r=i+e;if(r>=0&&r<t.length){const o=t[r];this._fullscreenPreviewUrl=o.previewUrl,this._fullscreenVideoFile=o.type.startsWith("video/")&&o.file?o.file:null,this._previewFileId=o.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},Q.styles=q`
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
  `,Q._FS_ZOOM_LEVELS=[1,2,3,4],Q._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),Q._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),Q);N([m({attribute:!1})],B.prototype,"config");N([P()],B.prototype,"_isOpen");N([P()],B.prototype,"_activeConnector");N([P()],B.prototype,"_showUrlDialog");N([P()],B.prototype,"_showCameraDialog");N([P()],B.prototype,"_showScreenCastDialog");N([P()],B.prototype,"_confirmDismissVisible");N([P()],B.prototype,"_similarSelectMode");N([P()],B.prototype,"_similarSelectedIds");N([P()],B.prototype,"_similarRunIds");N([P()],B.prototype,"_similarActiveIds");N([P()],B.prototype,"_similarResults");N([P()],B.prototype,"_previewPanelTab");N([P()],B.prototype,"_previewFileId");N([P()],B.prototype,"_previewDims");N([P()],B.prototype,"_fileInfoOpen");N([P()],B.prototype,"_splitPct");N([P()],B.prototype,"_showSettings");N([P()],B.prototype,"_setResize");N([P()],B.prototype,"_setMaxW");N([P()],B.prototype,"_setMaxH");N([P()],B.prototype,"_setTranscode");N([P()],B.prototype,"_setResolution");N([P()],B.prototype,"_setResolutionOpen");N([P()],B.prototype,"_setProtocol");N([P()],B.prototype,"_setResumable");N([P()],B.prototype,"_fullscreenPreviewUrl");N([P()],B.prototype,"_fullscreenVideoFile");N([P()],B.prototype,"_fsZoom");N([P()],B.prototype,"_bodyDragOver");N([P()],B.prototype,"_isMinimized");N([P()],B.prototype,"_isPillExpanded");N([P()],B.prototype,"_metadataSchema");N([P()],B.prototype,"_metadataTranslations");N([P()],B.prototype,"_metadataDependencies");N([P()],B.prototype,"_regionalFilters");N([P()],B.prototype,"_bulkMetadataOpen");N([P()],B.prototype,"_bulkMetadataInitialFieldKey");N([P()],B.prototype,"_bulkMetadataHadIssuesOnOpen");N([P()],B.prototype,"_isReviewing");N([P()],B.prototype,"_reviewFiles");N([P()],B.prototype,"_hasStoredReview");let cg=B;const Ve=(s,e)=>{typeof customElements<"u"&&!customElements.get(s)&&customElements.define(s,e)};Ve("sfx-uploader",cg);Ve("sfx-drop-zone",Jf);Ve("sfx-import-divider",Rr);Ve("sfx-source-pills",Ti);Ve("sfx-file-list",Z);Ve("sfx-file-item",ie);Ve("sfx-actions-bar",fe);Ve("sfx-url-dialog",Ot);Ve("sfx-camera-dialog",pt);Ve("sfx-screen-cast-dialog",Xe);const ug=[{pattern:"/",load:()=>Y(()=>import("./landing-4f8udmP3.js"),[]).then(s=>s.default)},{pattern:"/docs/getting-started",load:()=>Y(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(s=>s.default)},{pattern:"/docs/configuration",load:()=>Y(()=>import("./configuration-DGfC48Am.js"),__vite__mapDeps([2,1])).then(s=>s.default)},{pattern:"/docs/api",load:()=>Y(()=>import("./api-C3Pu2Ua4.js"),__vite__mapDeps([3,1])).then(s=>s.default)},{pattern:"/docs/theming",load:()=>Y(()=>import("./theming-DHk87o6W.js"),__vite__mapDeps([4,1])).then(s=>s.default)},{pattern:"/docs/types",load:()=>Y(()=>import("./types-HFUEcb6v.js"),__vite__mapDeps([5,1])).then(s=>s.default)},{pattern:"/examples/basic",load:()=>Y(()=>import("./basic-Dy4tHafG.js"),__vite__mapDeps([6,7])).then(s=>s.default)},{pattern:"/examples/auto-upload",load:()=>Y(()=>import("./auto-upload-BE3RPbfi.js"),__vite__mapDeps([8,7])).then(s=>s.default)},{pattern:"/examples/restrictions",load:()=>Y(()=>import("./restrictions-B-3CG8eS.js"),__vite__mapDeps([9,7,10])).then(s=>s.default)},{pattern:"/examples/target-folder",load:()=>Y(()=>import("./target-folder-BXsILuJ7.js"),__vite__mapDeps([11,7])).then(s=>s.default)},{pattern:"/examples/concurrency",load:()=>Y(()=>import("./concurrency-ChuKhgbR.js"),__vite__mapDeps([12,7,10])).then(s=>s.default)},{pattern:"/examples/events",load:()=>Y(()=>import("./events-UY0ZO9w4.js"),__vite__mapDeps([13,7])).then(s=>s.default)},{pattern:"/examples/modal",load:()=>Y(()=>import("./modal-DBNFk9iQ.js"),__vite__mapDeps([14,7])).then(s=>s.default)},{pattern:"/examples/inline",load:()=>Y(()=>import("./inline-CNKJzjtQ.js"),__vite__mapDeps([15,7])).then(s=>s.default)},{pattern:"/examples/sources-layout",load:()=>Y(()=>import("./sources-layout-XNo-xed8.js"),__vite__mapDeps([16,7])).then(s=>s.default)},{pattern:"/examples/core-sources",load:()=>Y(()=>import("./core-sources-C2RkAuTT.js"),__vite__mapDeps([17,7])).then(s=>s.default)},{pattern:"/examples/custom-source",load:()=>Y(()=>import("./custom-source-T9Om1WiX.js"),__vite__mapDeps([18,7])).then(s=>s.default)},{pattern:"/examples/header-button",load:()=>Y(()=>import("./header-button-DFiuaX2R.js"),__vite__mapDeps([19,7])).then(s=>s.default)},{pattern:"/examples/minimize-to-background",load:()=>Y(()=>import("./minimize-to-background-D3_37Ylg.js"),__vite__mapDeps([20,7])).then(s=>s.default)},{pattern:"/examples/resumable-upload",load:()=>Y(()=>import("./resumable-upload-Bj2gnV53.js"),__vite__mapDeps([21,7,10])).then(s=>s.default)},{pattern:"/examples/react-wrapper",load:()=>Y(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([22,1])).then(s=>s.default)},{pattern:"/examples/metadata",load:()=>Y(()=>import("./metadata-Do7vRuJj.js"),__vite__mapDeps([23,7])).then(s=>s.default)},{pattern:"/examples/full-screen",load:()=>Y(()=>import("./full-screen-Cm_Kgc-c.js"),[]).then(s=>s.default)},{pattern:"/examples/last-upload-review",load:()=>Y(()=>import("./last-upload-review-wcG1ZBIf.js"),[]).then(s=>s.default)},{pattern:"/examples/similar-check",load:()=>Y(()=>import("./similar-check-Db5vX6Tm.js"),__vite__mapDeps([24,7,10])).then(s=>s.default)},{pattern:"/examples/upload-settings",load:()=>Y(()=>import("./upload-settings-D1NefX4Z.js"),__vite__mapDeps([25,7,10])).then(s=>s.default)}];let jt=null,ha=0;function pg(s){const e=document.getElementById("content"),t=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),r=document.getElementById("sidebar-examples"),o=document.querySelectorAll(".topbar-nav-link");async function n(){var k,C;const a=location.hash.slice(1)||"/",l=!a.startsWith("/");if(l&&jt){(k=document.getElementById(a))==null||k.scrollIntoView({behavior:"smooth"});return}const d=l?"/":a,c=++ha;jt!=null&&jt.destroy&&jt.destroy();const u=ug.find(b=>b.pattern===d);if(!u){location.hash="#/";return}const h=d.startsWith("/docs/"),f=d.startsWith("/examples/"),y=h||f,g=d==="/";t.classList.toggle("hidden",!y),document.body.classList.toggle("has-sidebar",y),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!h),r.classList.toggle("hidden",!f),t.querySelectorAll(".sidebar-link").forEach(b=>{b.classList.toggle("active",b.getAttribute("data-route")===d)});const S=h?"docs":f?"examples":"home";o.forEach(b=>{b.classList.toggle("active",b.getAttribute("data-section")===S)}),t.classList.remove("mobile-open"),l||window.scrollTo(0,0);const E=await u.load();c===ha&&(jt=E,e.innerHTML=E.render(),E.init&&E.init(s),l&&((C=document.getElementById(a))==null||C.scrollIntoView({behavior:"smooth"})))}window.addEventListener("hashchange",n),n()}const Ol="sfx-uploader-demo-auth",fa={container:"",securityTemplateId:""};function Tl(){try{const s=localStorage.getItem(Ol);if(s)return{...fa,...JSON.parse(s)}}catch{}return{...fa}}function hg(s){localStorage.setItem(Ol,JSON.stringify(s))}function Tg(s={}){const{container:e,securityTemplateId:t}=Tl();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","box","onedrive"]},...s}}function fg(){const s=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),i=document.getElementById("auth-sec-template"),r=document.getElementById("auth-save"),o=Tl();t.value=o.container,i.value=o.securityTemplateId,s.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),r.addEventListener("click",()=>{hg({container:t.value.trim(),securityTemplateId:i.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!s.contains(n.target)&&e.classList.add("hidden")})}fg();const gg=document.getElementById("uploader");pg(gg);var ma;(ma=document.getElementById("sidebar-toggle"))==null||ma.addEventListener("click",()=>{var s;(s=document.getElementById("sidebar"))==null||s.classList.toggle("mobile-open")});export{jr as $,x as A,Qc as B,$c as C,pc as D,Br as E,$g as F,xn as G,Sc as H,He as I,wi as J,Tu as K,wg as L,Na as M,Bc as N,Mc as O,Et as P,kg as Q,rs as R,ct as S,Yr as T,yg as U,Fu as V,Wr as W,Zc as X,Jr as Y,Dc as Z,zc as _,q as a,Oc as a0,Cg as a1,Cs as a2,qe as a3,Ss as a4,ki as a5,Nr as a6,zr as a7,Hr as a8,rr as a9,Za as aA,za as aB,Ic as aC,Tc as aD,hr as aa,wc as ab,Li as ac,Lc as ad,_g as ae,qc as af,Rc as ag,Ru as ah,Ua as ai,Mr as aj,yn as ak,sr as al,Vr as am,Di as an,Ha as ao,ti as ap,Sg as aq,jc as ar,or as as,$t as at,Kt as au,vs as av,ja as aw,hc as ax,R as ay,Gr as az,Tg as b,se as c,_t as d,p as e,Ae as f,bf as g,Eg as h,W as i,Xr as j,Ag as k,Pg as l,zu as m,m as n,Mu as o,Ct as p,Da as q,P as r,Rg as s,bc as t,yc as u,bn as v,vn as w,_c as x,xc as y,mc as z};
