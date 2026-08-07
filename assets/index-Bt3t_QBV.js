const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-BXB9bhVk.js","assets/api-C3Pu2Ua4.js","assets/theming-DHk87o6W.js","assets/types-HFUEcb6v.js","assets/basic-Bsc3xdmq.js","assets/code-block-C_3oxnLY.js","assets/auto-upload-DD6fmw6b.js","assets/restrictions-CZXwJdQ_.js","assets/custom-select-mLCaw8r4.js","assets/target-folder-CbggWmrF.js","assets/concurrency-DOjqEEhb.js","assets/events-D56FHEK4.js","assets/modal-DbFqJcbN.js","assets/inline-BedK9Azn.js","assets/sources-layout-Cgc4v1fg.js","assets/core-sources-dQj2JNT6.js","assets/custom-source-_aCf1Fck.js","assets/header-button-BUVQolYU.js","assets/minimize-to-background-D5ToUpml.js","assets/resumable-upload-ATz-Ljht.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-zEuvflYT.js","assets/similar-check-zLXUbW80.js","assets/upload-settings-CbTyJfZd.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const gc="modulepreload",mc=function(s){return"/uploader/"+s},ln={},J=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let n=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=n(t.map(c=>{if(c=mc(c),c in ln)return;ln[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":gc,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((f,_)=>{h.addEventListener("load",f),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return r.then(n=>{for(const a of n||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=globalThis,Jr=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xr=Symbol(),cn=new WeakMap;let Va=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Xr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Jr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=cn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&cn.set(t,e))}return e}toString(){return this.cssText}};const vc=s=>new Va(typeof s=="string"?s:s+"",void 0,Xr),q=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new Va(t,s,Xr)},bc=(s,e)=>{if(Jr)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=us.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},dn=Jr?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return vc(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xc,defineProperty:yc,getOwnPropertyDescriptor:_c,getOwnPropertyNames:wc,getOwnPropertySymbols:kc,getPrototypeOf:$c}=Object,ct=globalThis,un=ct.trustedTypes,Sc=un?un.emptyScript:"",Js=ct.reactiveElementPolyfillSupport,wi=(s,e)=>s,bs={toAttribute(s,e){switch(e){case Boolean:s=s?Sc:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Zr=(s,e)=>!xc(s,e),pn={attribute:!0,type:String,converter:bs,reflect:!1,useDefault:!1,hasChanged:Zr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ct.litPropertyMetadata??(ct.litPropertyMetadata=new WeakMap);let Gt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&yc(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=_c(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pn}static _$Ei(){if(this.hasOwnProperty(wi("elementProperties")))return;const e=$c(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(wi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wi("properties"))){const t=this.properties,i=[...wc(t),...kc(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(dn(r))}else e!==void 0&&t.push(dn(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:bs).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o,n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:bs;this._$Em=r;const c=l.fromAttribute(t,a.type);this[r]=c??((n=this._$Ej)==null?void 0:n.get(r))??c,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){var n;if(e!==void 0){const a=this.constructor;if(r===!1&&(o=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Zr)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Gt.elementStyles=[],Gt.shadowRootOptions={mode:"open"},Gt[wi("elementProperties")]=new Map,Gt[wi("finalized")]=new Map,Js==null||Js({ReactiveElement:Gt}),(ct.reactiveElementVersions??(ct.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=globalThis,hn=s=>s,xs=ki.trustedTypes,fn=xs?xs.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ka="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,Ya="?"+at,Cc=`<${Ya}>`,Rt=document,Ci=()=>Rt.createComment(""),Ei=s=>s===null||typeof s!="object"&&typeof s!="function",Qr=Array.isArray,Ec=s=>Qr(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Xs=`[ 	
\f\r]`,hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gn=/-->/g,mn=/>/g,yt=RegExp(`>|${Xs}(?:([^\\s"'>=/]+)(${Xs}*=${Xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vn=/'/g,bn=/"/g,Ga=/^(?:script|style|textarea|title)$/i,Wa=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=Wa(1),Z=Wa(2),Fe=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),xn=new WeakMap,Ct=Rt.createTreeWalker(Rt,129);function Ja(s,e){if(!Qr(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return fn!==void 0?fn.createHTML(e):e}const Pc=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=hi;for(let a=0;a<t;a++){const l=s[a];let c,d,p=-1,h=0;for(;h<l.length&&(n.lastIndex=h,d=n.exec(l),d!==null);)h=n.lastIndex,n===hi?d[1]==="!--"?n=gn:d[1]!==void 0?n=mn:d[2]!==void 0?(Ga.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=yt):d[3]!==void 0&&(n=yt):n===yt?d[0]===">"?(n=r??hi,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?yt:d[3]==='"'?bn:vn):n===bn||n===vn?n=yt:n===gn||n===mn?n=hi:(n=yt,r=void 0);const f=n===yt&&s[a+1].startsWith("/>")?" ":"";o+=n===hi?l+Cc:p>=0?(i.push(c),l.slice(0,p)+Ka+l.slice(p)+at+f):l+at+(p===-2?a:f)}return[Ja(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Pi{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[c,d]=Pc(e,t);if(this.el=Pi.createElement(c,i),Ct.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Ct.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const p of r.getAttributeNames())if(p.endsWith(Ka)){const h=d[n++],f=r.getAttribute(p).split(at),_=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:_[2],strings:f,ctor:_[1]==="."?Ac:_[1]==="?"?Rc:_[1]==="@"?Oc:Is}),r.removeAttribute(p)}else p.startsWith(at)&&(l.push({type:6,index:o}),r.removeAttribute(p));if(Ga.test(r.tagName)){const p=r.textContent.split(at),h=p.length-1;if(h>0){r.textContent=xs?xs.emptyScript:"";for(let f=0;f<h;f++)r.append(p[f],Ci()),Ct.nextNode(),l.push({type:2,index:++o});r.append(p[h],Ci())}}}else if(r.nodeType===8)if(r.data===Ya)l.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(at,p+1))!==-1;)l.push({type:7,index:o}),p+=at.length-1}o++}}static createElement(e,t){const i=Rt.createElement("template");return i.innerHTML=e,i}}function ti(s,e,t=s,i){var n,a;if(e===Fe)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=Ei(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=ti(s,r._$AS(s,e.values),r,i)),e}class Tc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Rt).importNode(t,!0);Ct.currentNode=r;let o=Ct.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new oi(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Ic(o,this,e)),this._$AV.push(c),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=Ct.nextNode(),n++)}return Ct.currentNode=Rt,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class oi{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ti(this,e,t),Ei(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Fe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ec(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Ei(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rt.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Pi.createElement(Ja(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new Tc(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=xn.get(e.strings);return t===void 0&&xn.set(e.strings,t=new Pi(e)),t}k(e){Qr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new oi(this.O(Ci()),this.O(Ci()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=hn(e).nextSibling;hn(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Is{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=ti(this,e,t,0),n=!Ei(e)||e!==this._$AH&&e!==Fe,n&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=ti(this,a[i+l],t,l),c===Fe&&(c=this._$AH[l]),n||(n=!Ei(c)||c!==this._$AH[l]),c===v?e=v:e!==v&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ac extends Is{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class Rc extends Is{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Oc extends Is{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=ti(this,e,t,0)??v)===Fe)return;const i=this._$AH,r=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ic{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ti(this,e)}}const Fc={I:oi},Zs=ki.litHtmlPolyfillSupport;Zs==null||Zs(Pi,oi),(ki.litHtmlVersions??(ki.litHtmlVersions=[])).push("3.3.3");const Ze=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new oi(e.insertBefore(Ci(),o),o,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis;let G=class extends Gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Fe}};var qa;G._$litElement$=!0,G.finalized=!0,(qa=Pt.litElementHydrateSupport)==null||qa.call(Pt,{LitElement:G});const Qs=Pt.litElementPolyfillSupport;Qs==null||Qs({LitElement:G});(Pt.litElementVersions??(Pt.litElementVersions=[])).push("4.2.2");const er=(s,e)=>s.replace(/\{\{(\w+)\}\}/g,(t,i)=>String(e[i]??"")),Le=(s,e,t)=>{if(typeof e=="string")return er(e,t??{});if(typeof e=="object"&&e!==null){const i=e,r=i.count;if(r!==void 0){const o=String((r===1?i.defaultValue_one:i.defaultValue_other)??i.defaultValue??s);return er(o,i)}return er(String(i.defaultValue??s),i)}return s},B=s=>typeof s=="string",fi=()=>{let s,e;const t=new Promise((i,r)=>{s=i,e=r});return t.resolve=s,t.reject=e,t},yn=s=>s==null?"":""+s,Lc=(s,e,t)=>{s.forEach(i=>{e[i]&&(t[i]=e[i])})},Uc=/###/g,_n=s=>s&&s.indexOf("###")>-1?s.replace(Uc,"."):s,wn=s=>!s||B(s),$i=(s,e,t)=>{const i=B(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(wn(s))return{};const o=_n(i[r]);!s[o]&&t&&(s[o]=new t),Object.prototype.hasOwnProperty.call(s,o)?s=s[o]:s={},++r}return wn(s)?{}:{obj:s,k:_n(i[r])}},kn=(s,e,t)=>{const{obj:i,k:r}=$i(s,e,Object);if(i!==void 0||e.length===1){i[r]=t;return}let o=e[e.length-1],n=e.slice(0,e.length-1),a=$i(s,n,Object);for(;a.obj===void 0&&n.length;)o=`${n[n.length-1]}.${o}`,n=n.slice(0,n.length-1),a=$i(s,n,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=t},zc=(s,e,t,i)=>{const{obj:r,k:o}=$i(s,e,Object);r[o]=r[o]||[],r[o].push(t)},ys=(s,e)=>{const{obj:t,k:i}=$i(s,e);if(t)return t[i]},Dc=(s,e,t)=>{const i=ys(s,t);return i!==void 0?i:ys(e,t)},Xa=(s,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in s?B(s[i])||s[i]instanceof String||B(e[i])||e[i]instanceof String?t&&(s[i]=e[i]):Xa(s[i],e[i],t):s[i]=e[i]);return s},jt=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Mc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const jc=s=>B(s)?s.replace(/[&<>"'\/]/g,e=>Mc[e]):s;class Bc{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Nc=[" ",",","?","!",";"],qc=new Bc(20),Hc=(s,e,t)=>{e=e||"",t=t||"";const i=Nc.filter(n=>e.indexOf(n)<0&&t.indexOf(n)<0);if(i.length===0)return!0;const r=qc.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let o=!r.test(s);if(!o){const n=s.indexOf(t);n>0&&!r.test(s.substring(0,n))&&(o=!0)}return o},mr=function(s,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[e])return s[e];const i=e.split(t);let r=s;for(let o=0;o<i.length;){if(!r||typeof r!="object")return;let n,a="";for(let l=o;l<i.length;++l)if(l!==o&&(a+=t),a+=i[l],n=r[a],n!==void 0){if(["string","number","boolean"].indexOf(typeof n)>-1&&l<i.length-1)continue;o+=l-o+1;break}r=n}return r},_s=s=>s&&s.replace("_","-"),Vc={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,e){console&&console[s]&&console[s].apply(console,e)}};class ws{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||Vc,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,r){return r&&!this.debug?null:(B(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ws(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ws(this.logger,e)}}var Ye=new ws;class Fs{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(t)||0;this.observers[i].set(t,r+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(n=>{let[a,l]=n;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(n=>{let[a,l]=n;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class $n extends Fs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,n=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):B(i)&&o?a.push(...i.split(o)):a.push(i)));const l=ys(this.data,a);return!l&&!t&&!i&&e.indexOf(".")>-1&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!B(i)?l:mr(this.data&&this.data[e]&&this.data[e][t],i,o)}addResource(e,t,i,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),kn(this.data,a,r),o.silent||this.emit("added",e,t,i,r)}addResources(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in i)(B(i[o])||Array.isArray(i[o]))&&this.addResource(e,t,o,i[o],{silent:!0});r.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,r,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=t,t=a[1]),this.addNamespaces(t);let l=ys(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?Xa(l,i,o):l={...l,...i},kn(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(r=>t[r]&&Object.keys(t[r]).length>0)}toJSON(){return this.data}}var Za={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,e,t,i,r){return s.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,t,i,r))}),e}};const Sn={};class ks extends Fs{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Lc(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Ye.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,t);return i&&i.res!==void 0}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let o=t.ns||this.options.defaultNS||[];const n=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Hc(e,i,r);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:B(o)?[o]:o};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),e=c.join(r)}return{key:e,namespaces:B(o)?[o]:o}}translate(e,t,i){if(typeof t!="object"&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),typeof t=="object"&&(t={...t}),t||(t={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=t.returnDetails!==void 0?t.returnDetails:this.options.returnDetails,o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator,{key:n,namespaces:a}=this.extractFromKey(e[e.length-1],t),l=a[a.length-1],c=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(d){const x=t.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${x}${n}`,usedKey:n,exactUsedKey:n,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:`${l}${x}${n}`}return r?{res:n,usedKey:n,exactUsedKey:n,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(t)}:n}const p=this.resolve(e,t);let h=p&&p.res;const f=p&&p.usedKey||n,_=p&&p.exactUsedKey||n,g=Object.prototype.toString.apply(h),S=["[object Number]","[object Function]","[object RegExp]"],E=t.joinArrays!==void 0?t.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,C=!B(h)&&typeof h!="boolean"&&typeof h!="number";if(k&&h&&C&&S.indexOf(g)<0&&!(B(E)&&Array.isArray(h))){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...t,ns:a}):`key '${n} (${this.language})' returned an object instead of string.`;return r?(p.res=x,p.usedParams=this.getUsedParamsDetails(t),p):x}if(o){const x=Array.isArray(h),w=x?[]:{},O=x?_:f;for(const A in h)if(Object.prototype.hasOwnProperty.call(h,A)){const U=`${O}${o}${A}`;w[A]=this.translate(U,{...t,joinArrays:!1,ns:a}),w[A]===U&&(w[A]=h[A])}h=w}}else if(k&&B(E)&&Array.isArray(h))h=h.join(E),h&&(h=this.extendTranslation(h,e,t,i));else{let x=!1,w=!1;const O=t.count!==void 0&&!B(t.count),A=ks.hasDefaultValue(t),U=O?this.pluralResolver.getSuffix(c,t.count,t):"",z=t.ordinal&&O?this.pluralResolver.getSuffix(c,t.count,{ordinal:!1}):"",H=O&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),Y=H&&t[`defaultValue${this.options.pluralSeparator}zero`]||t[`defaultValue${U}`]||t[`defaultValue${z}`]||t.defaultValue;!this.isValidLookup(h)&&A&&(x=!0,h=Y),this.isValidLookup(h)||(w=!0,h=n);const D=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&w?void 0:h,le=A&&Y!==h&&this.options.updateMissing;if(w||x||le){if(this.logger.log(le?"updateKey":"missingKey",c,l,n,le?Y:h),o){const y=this.resolve(n,{...t,keySeparator:!1});y&&y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let K=[];const $=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if(this.options.saveMissingTo==="fallback"&&$&&$[0])for(let y=0;y<$.length;y++)K.push($[y]);else this.options.saveMissingTo==="all"?K=this.languageUtils.toResolveHierarchy(t.lng||this.language):K.push(t.lng||this.language);const b=(y,R,F)=>{const I=A&&F!==h?F:D;this.options.missingKeyHandler?this.options.missingKeyHandler(y,l,R,I,le,t):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(y,l,R,I,le,t),this.emit("missingKey",y,l,R,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?K.forEach(y=>{const R=this.pluralResolver.getSuffixes(y,t);H&&t[`defaultValue${this.options.pluralSeparator}zero`]&&R.indexOf(`${this.options.pluralSeparator}zero`)<0&&R.push(`${this.options.pluralSeparator}zero`),R.forEach(F=>{b([y],n+F,t[`defaultValue${F}`]||Y)})}):b(K,n,Y))}h=this.extendTranslation(h,e,t,p,i),w&&h===n&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${n}`),(w||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${n}`:n,x?h:void 0):h=this.options.parseMissingKeyHandler(h))}return r?(p.res=h,p.usedParams=this.getUsedParamsDetails(t),p):h}extendTranslation(e,t,i,r,o){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=B(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(c){const h=e.match(this.interpolator.nestingRegexp);d=h&&h.length}let p=i.replace&&!B(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(p={...this.options.interpolation.defaultVariables,...p}),e=this.interpolator.interpolate(e,p,i.lng||this.language||r.usedLng,i),c){const h=e.match(this.interpolator.nestingRegexp),f=h&&h.length;d<f&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,f=new Array(h),_=0;_<h;_++)f[_]=arguments[_];return o&&o[0]===f[0]&&!i.context?(n.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`),null):n.translate(...f,t)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=B(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Za.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,o,n,a;return B(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),d=c.key;r=d;let p=c.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const h=t.count!==void 0&&!B(t.count),f=h&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),_=t.context!==void 0&&(B(t.context)||typeof t.context=="number")&&t.context!=="",g=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(S=>{this.isValidLookup(i)||(a=S,!Sn[`${g[0]}-${S}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Sn[`${g[0]}-${S}`]=!0,this.logger.warn(`key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(E=>{if(this.isValidLookup(i))return;n=E;const k=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(k,d,E,S,t);else{let x;h&&(x=this.pluralResolver.getSuffix(E,t.count,t));const w=`${this.options.pluralSeparator}zero`,O=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(k.push(d+x),t.ordinal&&x.indexOf(O)===0&&k.push(d+x.replace(O,this.options.pluralSeparator)),f&&k.push(d+w)),_){const A=`${d}${this.options.contextSeparator}${t.context}`;k.push(A),h&&(k.push(A+x),t.ordinal&&x.indexOf(O)===0&&k.push(A+x.replace(O,this.options.pluralSeparator)),f&&k.push(A+w))}}let C;for(;C=k.pop();)this.isValidLookup(i)||(o=C,i=this.getResource(E,S,C,t))}))})}),{res:i,usedKey:r,exactUsedKey:o,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,i,r):this.resourceStore.getResource(e,t,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!B(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const o of t)delete r[o]}return r}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t===i.substring(0,t.length)&&e[i]!==void 0)return!0;return!1}}const tr=s=>s.charAt(0).toUpperCase()+s.slice(1);class Cn{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ye.create("languageUtils")}getScriptPartFromCode(e){if(e=_s(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=_s(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(B(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const t=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=tr(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),t.indexOf(i[1].toLowerCase())>-1&&(i[1]=tr(i[1].toLowerCase())),t.indexOf(i[2].toLowerCase())>-1&&(i[2]=tr(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(t=r)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(o=>{if(o===r)return o;if(!(o.indexOf("-")<0&&r.indexOf("-")<0)&&(o.indexOf("-")>0&&r.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===r||o.indexOf(r)===0&&r.length>1))return o})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),B(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=n=>{n&&(this.isSupportedCode(n)?r.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return B(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):B(e)&&o(this.formatLanguageCode(e)),i.forEach(n=>{r.indexOf(n)<0&&o(this.formatLanguageCode(n))}),r}}let Kc=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Yc={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const Gc=["v1","v2","v3"],Wc=["v4"],En={zero:0,one:1,two:2,few:3,many:4,other:5},Jc=()=>{const s={};return Kc.forEach(e=>{e.lngs.forEach(t=>{s[t]={numbers:e.nr,plurals:Yc[e.fc]}})}),s};class Xc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=Ye.create("pluralResolver"),(!this.options.compatibilityJSON||Wc.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Jc(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=_s(e==="dev"?"en":e),r=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let n;try{n=new Intl.PluralRules(i,{type:r})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[o]=n,n}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${t}${r}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,t);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,o)=>En[r]-En[o]).map(r=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,t)):[]}getSuffix(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,t){const i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const o=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Gc.includes(this.options.compatibilityJSON)}}const Pn=function(s,e,t){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Dc(s,e,t);return!o&&r&&B(t)&&(o=mr(s,t,i),o===void 0&&(o=mr(e,t,i))),o},ir=s=>s.replace(/\$/g,"$$$$");class Zc{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ye.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(t=>t),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:r,prefix:o,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:p,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:_,nestingSuffixEscaped:g,nestingOptionsSeparator:S,maxReplaces:E,alwaysFormat:k}=e.interpolation;this.escape=t!==void 0?t:jc,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=o?jt(o):n||"{{",this.suffix=a?jt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":p||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=h?jt(h):f||jt("$t("),this.nestingSuffix=_?jt(_):g||jt(")"),this.nestingOptionsSeparator=S||",",this.maxReplaces=E||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>t&&t.source===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,i,r){let o,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const E=Pn(t,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(E,void 0,i,{...r,...t,interpolationkey:f}):E}const _=f.split(this.formatSeparator),g=_.shift().trim(),S=_.join(this.formatSeparator).trim();return this.format(Pn(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),S,i,{...r,...t,interpolationkey:g})};this.resetRegExp();const d=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,p=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>ir(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?ir(this.escape(f)):ir(f)}].forEach(f=>{for(a=0;o=f.regex.exec(e);){const _=o[1].trim();if(n=c(_),n===void 0)if(typeof d=="function"){const S=d(e,o,r);n=B(S)?S:""}else if(r&&Object.prototype.hasOwnProperty.call(r,_))n="";else if(p){n=o[0];continue}else this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`),n="";else!B(n)&&!this.useRawValueToEscape&&(n=yn(n));const g=f.safeValue(n);if(e=e.replace(o[0],g),p?(f.regex.lastIndex+=n.length,f.regex.lastIndex-=o[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,o,n;const a=(l,c)=>{const d=this.nestingOptionsSeparator;if(l.indexOf(d)<0)return l;const p=l.split(new RegExp(`${d}[ ]*{`));let h=`{${p[1]}`;l=p[0],h=this.interpolate(h,n);const f=h.match(/'/g),_=h.match(/"/g);(f&&f.length%2===0&&!_||_.length%2!==0)&&(h=h.replace(/'/g,'"'));try{n=JSON.parse(h),c&&(n={...c,...n})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${d}${h}`}return n.defaultValue&&n.defaultValue.indexOf(this.prefix)>-1&&delete n.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!B(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const d=r[1].split(this.formatSeparator).map(p=>p.trim());r[1]=d.shift(),l=d,c=!0}if(o=t(a.call(this,r[1].trim(),n),n),o&&r[0]===e&&!B(o))return o;B(o)||(o=yn(o)),o||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),o=""),c&&(o=l.reduce((d,p)=>this.format(d,p,i.lng,{...i,interpolationkey:r[1].trim()}),o.trim())),e=e.replace(r[0],o),this.regexp.lastIndex=0}return e}}const Qc=s=>{let e=s.toLowerCase().trim();const t={};if(s.indexOf("(")>-1){const i=s.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?t.currency||(t.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?t.range||(t.range=r.trim()):r.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();t[d]||(t[d]=c),c==="false"&&(t[d]=!1),c==="true"&&(t[d]=!0),isNaN(c)||(t[d]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Bt=s=>{const e={};return(t,i,r)=>{let o=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(o={...o,[r.interpolationkey]:void 0});const n=i+JSON.stringify(o);let a=e[n];return a||(a=s(_s(i),r),e[n]=a),a(t)}};class ed{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Ye.create("formatter"),this.options=e,this.formats={number:Bt((t,i)=>{const r=new Intl.NumberFormat(t,{...i});return o=>r.format(o)}),currency:Bt((t,i)=>{const r=new Intl.NumberFormat(t,{...i,style:"currency"});return o=>r.format(o)}),datetime:Bt((t,i)=>{const r=new Intl.DateTimeFormat(t,{...i});return o=>r.format(o)}),relativetime:Bt((t,i)=>{const r=new Intl.RelativeTimeFormat(t,{...i});return o=>r.format(o,i.range||"day")}),list:Bt((t,i)=>{const r=new Intl.ListFormat(t,{...i});return o=>r.format(o)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||","}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Bt(t)}format(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:d}=Qc(l);if(this.formats[c]){let p=a;try{const h=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},f=h.locale||h.lng||r.locale||r.lng||i;p=this.formats[c](a,f,{...d,...r,...h})}catch(h){this.logger.warn(h)}return p}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const td=(s,e)=>{s.pending[e]!==void 0&&(delete s.pending[e],s.pendingCount--)};class id extends Fs{constructor(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Ye.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,t,i,r){const o={},n={},a={},l={};return e.forEach(c=>{let d=!0;t.forEach(p=>{const h=`${c}|${p}`;!i.reload&&this.store.hasResourceBundle(c,p)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?n[h]===void 0&&(n[h]=!0):(this.state[h]=1,d=!1,n[h]===void 0&&(n[h]=!0),o[h]===void 0&&(o[h]=!0),l[p]===void 0&&(l[p]=!0)))}),d||(a[c]=!0)}),(Object.keys(o).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const r=e.split("|"),o=r[0],n=r[1];t&&this.emit("failedLoading",o,n,t),!t&&i&&this.store.addResourceBundle(o,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{zc(l.loaded,[o],n),td(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(p=>{a[c][p]===void 0&&(a[c][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,n=arguments.length>5?arguments[5]:void 0;if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:r,wait:o,callback:n});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(c&&d&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,i,r+1,o*2,n)},o);return}n(c,d)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();B(e)&&(e=this.languageUtils.toResolveHierarchy(e)),B(t)&&(t=[t]);const o=this.queueLoad(e,t,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,r,o){let n=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...n,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let d;c.length===5?d=c(e,t,i,r,l):d=c(e,t,i,r),d&&typeof d.then=="function"?d.then(p=>a(null,p)).catch(a):a(null,d)}catch(d){a(d)}else c(e,t,i,r,a,l)}!e||!e[0]||this.store.addResource(e[0],t,i,r)}}}const Tn=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let e={};if(typeof s[1]=="object"&&(e=s[1]),B(s[1])&&(e.defaultValue=s[1]),B(s[2])&&(e.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const t=s[3]||s[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),An=s=>(B(s.ns)&&(s.ns=[s.ns]),B(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),B(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),es=()=>{},sd=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(t=>{typeof s[t]=="function"&&(s[t]=s[t].bind(s))})};class Ti extends Fs{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=An(e),this.services={},this.logger=Ye,this.modules={external:[]},sd(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t=="function"&&(i=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(B(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=Tn();this.options={...r,...this.options,...An(t)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);const o=d=>d?typeof d=="function"?new d:d:null;if(!this.options.isClone){this.modules.logger?Ye.init(o(this.modules.logger),this.options):Ye.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=ed);const p=new Cn(this.options);this.store=new $n(this.options.resources,this.options);const h=this.services;h.logger=Ye,h.resourceStore=this.store,h.languageUtils=p,h.pluralResolver=new Xc(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=o(d),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Zc(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new id(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var _=arguments.length,g=new Array(_>1?_-1:0),S=1;S<_;S++)g[S-1]=arguments[S];e.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new ks(this.services,this.options),this.translator.on("*",function(f){for(var _=arguments.length,g=new Array(_>1?_-1:0),S=1;S<_;S++)g[S-1]=arguments[S];e.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,i||(i=es),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return e.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return e.store[d](...arguments),e}});const l=fi(),c=()=>{const d=(p,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(p,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:es;const r=B(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],n=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};r?n(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>n(l)),this.options.preload&&this.options.preload.forEach(a=>n(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,t,i){const r=fi();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=es),this.services.backendConnector.reload(e,t,o=>{r.resolve(),i(o)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Za.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,t){var i=this;this.isLanguageChangingTo=e;const r=fi();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},n=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),t&&t(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=B(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,d=>{n(d,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),r}getFixedT(e,t,i){var r=this;const o=function(n,a){let l;if(typeof a!="object"){for(var c=arguments.length,d=new Array(c>2?c-2:0),p=2;p<c;p++)d[p-2]=arguments[p];l=r.options.overloadTranslationOptionHandler([n,a].concat(d))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||o.keyPrefix);const h=r.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(n)?f=n.map(_=>`${l.keyPrefix}${h}${_}`):f=l.keyPrefix?`${l.keyPrefix}${h}${n}`:n,r.t(f,l)};return B(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=i,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!r||n(o,e)))}loadNamespaces(e,t){const i=fi();return this.options.ns?(B(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),t&&t(r)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=fi();B(e)&&(e=[e]);const r=this.options.preload||[],o=e.filter(n=>r.indexOf(n)<0&&this.services.languageUtils.isSupportedCode(n));return o.length?(this.options.preload=r.concat(o),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Cn(Tn());return t.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Ti(e,t)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:es;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new Ti(r);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i&&(o.store=new $n(this.store.data,r),o.services.resourceStore=o.store),o.translator=new ks(o.services,r),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),d=1;d<l;d++)c[d-1]=arguments[d];o.emit(a,...c)}),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ve=Ti.createInstance();ve.createInstance=Ti.createInstance;ve.createInstance;ve.dir;ve.init;ve.loadResources;ve.reloadResources;ve.use;ve.changeLanguage;ve.getFixedT;ve.t;ve.exists;ve.setDefaultNamespace;ve.hasLoadedNamespace;ve.loadNamespaces;ve.loadLanguages;const Qa=["__proto__","constructor","prototype"];function el(s){return!(typeof s!="string"||s.length===0||s.length>128||Qa.indexOf(s)>-1||s.indexOf("..")>-1||s.indexOf("\\")>-1||/[?#%\s@]/.test(s)||/[\x00-\x1F\x7F]/.test(s))}function tl(s){return!(!el(s)||s.indexOf("/")>-1)}function rd(s){return el(s)}const od={lng:tl,ns:rd};function ts(s){return typeof s!="string"?s:s.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function nd(s){if(typeof s!="string"||s.length===0)return s;try{const e=new URL(s);return e.username||e.password?(e.username="",e.password="",e.toString()):s}catch{return s.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function il(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function ad(s){return!!s&&typeof s.then=="function"}function ld(s){return ad(s)?s:Promise.resolve(s)}const cd=/\{\{(.+?)\}\}/g;function Rn(s,e){let t=!1;const i=s.replace(cd,(r,o)=>{const n=o.trim();if(Qa.indexOf(n)>-1)return r;const a=e[n];if(a==null)return r;const l=od[n]||tl,c=String(a).split("+");for(const d of c)if(!l(d))return t=!0,r;return c.join("+")});return t?null:i}const Tt=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let $s;typeof fetch=="function"?$s=fetch:Tt&&typeof Tt.fetch=="function"&&($s=Tt.fetch);const On=il()&&Tt?Tt.XMLHttpRequest:void 0,dd=typeof ActiveXObject=="function"&&Tt?Tt.ActiveXObject:void 0,sl=["__proto__","constructor","prototype"],vr=(s,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))sl.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return s;s=s+(s.indexOf("?")!==-1?"&":"?")+t.slice(1)}return s},In=(s,e,t,i)=>{const r=o=>{if(!o.ok)return t(o.statusText||"Error",{status:o.status});o.text().then(n=>{t(null,{status:o.status,data:n})}).catch(t)};if(i){const o=i(s,e);if(o instanceof Promise){o.then(r).catch(t);return}}typeof fetch=="function"?fetch(s,e).then(r).catch(t):$s(s,e).then(r).catch(t)},ud=(s,e,t,i)=>{s.queryStringParams&&(e=vr(e,s.queryStringParams));const r={...typeof s.customHeaders=="function"?s.customHeaders():s.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(r["Content-Type"]="application/json");const o=typeof s.requestOptions=="function"?s.requestOptions(t):s.requestOptions,n={method:t?"POST":"GET",body:t?s.stringify(t):void 0,headers:r,...s._omitFetchOptions?{}:o},a=typeof s.alternateFetch=="function"&&s.alternateFetch.length>=1?s.alternateFetch:void 0;try{In(e,n,i,a)}catch(l){if(!o||Object.keys(o).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(o).forEach(c=>{delete n[c]}),In(e,n,i,a),s._omitFetchOptions=!0}catch(c){i(c)}}},pd=(s,e,t,i)=>{t&&typeof t=="object"&&(t=vr("",t).slice(1)),s.queryStringParams&&(e=vr(e,s.queryStringParams));try{const r=On?new On:new dd("MSXML2.XMLHTTP.3.0");r.open(t?"POST":"GET",e,1),s.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!s.withCredentials,t&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let o=s.customHeaders;if(o=typeof o=="function"?o():o,o)for(const n of Object.keys(o))sl.indexOf(n)>-1||r.setRequestHeader(n,o[n]);r.onreadystatechange=()=>{r.readyState>3&&i(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(t)}catch(r){console&&console.log(r)}},hd=(s,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),$s&&e.indexOf("file:")!==0)return ud(s,e,t,i);if(il()||typeof ActiveXObject=="function")return pd(s,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},fd=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:s=>JSON.parse(s),stringify:JSON.stringify,parsePayload:(s,e,t)=>({[e]:t||""}),parseLoadPayload:(s,e)=>{},request:hd,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var rl=class{constructor(s,e={},t={}){this.services=s,this.options=e,this.allOptions=t,this.type="backend",this.init(s,e,t)}init(s,e={},t={}){if(this.services=s,this.options={...fd(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(s,e,t){this._readAny(s,s,e,e,t)}read(s,e,t){this._readAny([s],s,[e],e,t)}_readAny(s,e,t,i,r){let o=this.options.loadPath;typeof this.options.loadPath=="function"&&(o=this.options.loadPath(s,t)),o=ld(o),o.then(n=>{if(!n)return r(null,{});const a=Rn(n,{lng:s.join("+"),ns:t.join("+")});if(a==null){const l=s.map(ts).join(", "),c=t.map(ts).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(a,r,e,i)})}loadUrl(s,e,t,i){const r=typeof t=="string"?[t]:t,o=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(r,o),a=ts(nd(s));this.options.request(this.options,s,n,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+a+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+a+"; status code: "+c.status,!1);if(!c&&l&&l.message){const h=l.message.toLowerCase();if(["failed","fetch","network","load"].find(f=>h.indexOf(f)>-1))return e("failed loading "+a+": "+ts(l.message),!0)}if(l)return e(l,!1);let d,p;try{typeof c.data=="string"?d=this.options.parse(c.data,t,i):d=c.data}catch{p="failed parsing "+a+" to json"}if(p)return e(p,!1);e(null,d)})}create(s,e,t,i,r){if(!this.options.addPath)return;typeof s=="string"&&(s=[s]);const o=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];s.forEach(c=>{let d=this.options.addPath;typeof this.options.addPath=="function"&&(d=this.options.addPath(c,e));const p=Rn(d,{lng:c,ns:e});if(p==null){n+=1,r&&n===s.length&&r(a,l);return}this.options.request(this.options,p,o,(h,f)=>{n+=1,a.push(h),l.push(f),n===s.length&&typeof r=="function"&&r(a,l)})})}reload(){const{backendConnector:s,languageUtils:e,logger:t}=this.services,i=s.language;if(i&&i.toLowerCase()==="cimode")return;const r=[],o=n=>{e.toResolveHierarchy(n).forEach(a=>{r.indexOf(a)<0&&r.push(a)})};o(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>o(n)),r.forEach(n=>{this.allOptions.ns.forEach(a=>{s.read(n,a,"read",null,null,(l,c)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&c&&t.log(`loaded namespace ${a} for language ${n}`,c),s.loaded(`${n}|${a}`,l,c)})})})}};rl.type="backend";const gd="https://i18n-fastly.ultrafast.io";function ol(s){const e=s.cdnUrl??gd;let t=null;const i=new Set,r=()=>{for(const d of i)d()},o=d=>(i.add(d),()=>i.delete(d));async function n(d="en"){return t?(t.language!==d&&(await t.changeLanguage(d),r()),{i18n:t,isNew:!1}):(t=ve.createInstance(),await t.use(rl).init({lng:d,fallbackLng:"en",ns:[s.namespace],defaultNS:s.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${e}/api/export/grid/f2/${s.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(p,h){var g;const f=JSON.parse(p),_=Array.isArray(h)?h[0]:h;return _&&((g=f[_])!=null&&g.__without_namespace)?f[_].__without_namespace:f}}}),t.on("languageChanged",r),t.on("loaded",r),r(),{i18n:t,isNew:!0})}const a=()=>t,l=(d,p,h)=>!t||!t.isInitialized?Le(d,p,h):typeof p=="string"?t.t(d,p,h??{}):t.t(d,p??{});class c{constructor(p){this._unsubscribe=null,this._host=p,p.addController(this)}hostConnected(){this._unsubscribe=o(()=>this._host.requestUpdate())}hostDisconnected(){var p;(p=this._unsubscribe)==null||p.call(this),this._unsubscribe=null}}return{initI18n:n,getInstance:a,onChange:o,t:l,fallbackT:Le,I18nController:c}}function md(s){const{lsKey:e,namespace:t,gridUuid:i,prodUrl:r,logPrefix:o}=s,n=typeof localStorage<"u"&&localStorage.getItem(e)==="true",a={};let l=null;const c=2e3;n&&console.log(`%c${o} TranslationMissingKeysHelper enabled`,"font-weight:600;");const d=()=>{console.group(`${o} Missing translation keys`),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...a}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${r}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${i}","translations_requests":${JSON.stringify(Object.entries(a).map(([p,{value:h,ns:f}])=>({key:f&&p.startsWith(`${f}:`)?p.slice(f.length+1):p,lang:"en",default:h}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()};return{handleMissingKey(p,h="",f=t){n&&(a[`${f}:${p}`]={value:h,ns:f},l&&clearTimeout(l),l=setTimeout(d,c))}}}const nl="f7b2366e-fcb6-4f1a-8f23-8de48422989a",vd="https://i18n-fastly.ultrafast.io",bd="https://neo.wordplex.io",al="uploader",eo=ol({gridUuid:nl,namespace:al,cdnUrl:vd}),xd=eo.initI18n,$t=eo.t,yd=eo.I18nController,_d=md({lsKey:"sfxUploaderTranslationsMissingKeysEnabled",namespace:al,gridUuid:nl,prodUrl:bd,logPrefix:"[uploader]"});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wd={attribute:!0,type:String,converter:bs,reflect:!1,hasChanged:Zr},kd=(s=wd,e,t)=>{const{kind:i,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,s,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function m(s){return(e,t)=>typeof t=="object"?kd(s,e,t):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(s){return m({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $d=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ls(s,e){return(t,i,r)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(s))??null};return $d(t,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ai=s=>(...e)=>({_$litDirective$:s,values:e});let Bi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Sd}=Fc,Fn=s=>s,Cd=s=>s.strings===void 0,Ln=()=>document.createComment(""),gi=(s,e,t)=>{var o;const i=s._$AA.parentNode,r=e===void 0?s._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(Ln(),r),a=i.insertBefore(Ln(),r);t=new Sd(n,a,s,s.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let c;(o=t._$AQ)==null||o.call(t,s),t._$AM=s,t._$AP!==void 0&&(c=s._$AU)!==a._$AU&&t._$AP(c)}if(n!==r||l){let c=t._$AA;for(;c!==n;){const d=Fn(c).nextSibling;Fn(i).insertBefore(c,r),c=d}}}return t},_t=(s,e,t=s)=>(s._$AI(e,t),s),Ed={},Pd=(s,e=Ed)=>s._$AH=e,Td=s=>s._$AH,sr=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un=(s,e,t)=>{const i=new Map;for(let r=e;r<=t;r++)i.set(s[r],r);return i},Xt=ai(class extends Bi{constructor(s){if(super(s),s.type!==ni.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const r=[],o=[];let n=0;for(const a of s)r[n]=i?i(a,n):n,o[n]=t(a,n),n++;return{values:o,keys:r}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const r=Td(s),{values:o,keys:n}=this.dt(e,t,i);if(!Array.isArray(r))return this.ut=n,o;const a=this.ut??(this.ut=[]),l=[];let c,d,p=0,h=r.length-1,f=0,_=o.length-1;for(;p<=h&&f<=_;)if(r[p]===null)p++;else if(r[h]===null)h--;else if(a[p]===n[f])l[f]=_t(r[p],o[f]),p++,f++;else if(a[h]===n[_])l[_]=_t(r[h],o[_]),h--,_--;else if(a[p]===n[_])l[_]=_t(r[p],o[_]),gi(s,l[_+1],r[p]),p++,_--;else if(a[h]===n[f])l[f]=_t(r[h],o[f]),gi(s,r[p],r[h]),h--,f++;else if(c===void 0&&(c=Un(n,f,_),d=Un(a,p,h)),c.has(a[p]))if(c.has(a[h])){const g=d.get(n[f]),S=g!==void 0?r[g]:null;if(S===null){const E=gi(s,r[p]);_t(E,o[f]),l[f]=E}else l[f]=_t(S,o[f]),gi(s,r[p],S),r[g]=null;f++}else sr(r[h]),h--;else sr(r[p]),p++;for(;f<=_;){const g=gi(s,l[_+1]);_t(g,o[f]),l[f++]=g}for(;p<=h;){const g=r[p++];g!==null&&sr(g)}return this.ut=n,Pd(s,l),Fe}}),Ae=q`
  @media (hover: none) and (pointer: coarse) {
    input,
    textarea,
    select {
      font-size: 16px !important;
    }
  }
`,rr=s=>s.includes("-")?s:s.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Ad extends Bi{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==ni.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return Fe}update(e,[t]){if(t===this._lastStyles)return Fe;this._lastStyles=t;const{style:i}=e.element,r=t??{};for(const o of this._appliedProps)(!(o in r)||r[o]==null||r[o]==="")&&(i.removeProperty(rr(o)),this._appliedProps.delete(o));for(const[o,n]of Object.entries(r))n!=null&&n!==""?(i.setProperty(rr(o),n),this._appliedProps.add(o)):this._appliedProps.has(o)&&(i.removeProperty(rr(o)),this._appliedProps.delete(o));return Fe}}const te=ai(Ad);function ie(s,e){customElements.get(s)||customElements.define(s,e)}function Rd(s,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,s);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const r=(l=(a=s.response)==null?void 0:a.file)==null?void 0:l.uuid;return r?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(r))}`:null}const ll=Z`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,or=u`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  ${ll}
</svg>`,cl=Z`<path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />`,br=Z`<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />`,dl="(hover: none) and (pointer: coarse)";let nr=new Map,zn;function to(s){if(typeof window>"u"||typeof window.matchMedia!="function")return null;zn!==window.matchMedia&&(zn=window.matchMedia,nr=new Map);const e=nr.get(s);if(e!==void 0)return e;let t;try{t=window.matchMedia(s)}catch{t=null}return nr.set(s,t),t}function dt(){var s;return((s=to(dl))==null?void 0:s.matches)??!1}let ar;function Od(){return typeof document>"u"||dt()?!1:(ar===void 0&&(ar="webkitdirectory"in document.createElement("input")),ar)}function Id(){var s;return typeof navigator>"u"||dt()?!1:typeof((s=navigator.mediaDevices)==null?void 0:s.getDisplayMedia)=="function"}function Fd(){var s;return dt()?!0:typeof navigator>"u"?!1:typeof((s=navigator.mediaDevices)==null?void 0:s.getUserMedia)=="function"}function Ld(){var s;return((s=to("(prefers-reduced-motion: reduce)"))==null?void 0:s.matches)??!1}function ul(s){const e=to(dl);if(!e)return()=>{};const t=()=>s();return typeof e.addEventListener=="function"?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):typeof e.addListener=="function"?(e.addListener(t),()=>e.removeListener(t)):()=>{}}const xr=new Set;let Ie=null;function Ud(s){if(typeof document>"u"||!document.body||(xr.add(s),Ie))return;const e=document.body,t=document.documentElement,i=window.scrollY||t.scrollTop||0;Ie={scrollY:i,overflow:e.style.overflow,position:e.style.position,top:e.style.top,left:e.style.left,right:e.style.right,paddingRight:e.style.paddingRight,scrollBehavior:t.style.scrollBehavior};const r=t.clientWidth||0,o=r>0?Math.max(0,(window.innerWidth||0)-r):0;if(e.style.position="fixed",e.style.top=`-${i}px`,e.style.left="0",e.style.right="0",e.style.overflow="hidden",o>0){const n=parseFloat(getComputedStyle(e).paddingRight)||0;e.style.paddingRight=`${n+o}px`}}function Dn(s){if(xr.delete(s),xr.size>0||!Ie)return;if(typeof document>"u"||!document.body){Ie=null;return}const e=document.body,t=document.documentElement,{scrollY:i}=Ie;if(e.style.overflow=Ie.overflow,e.style.position=Ie.position,e.style.top=Ie.top,e.style.left=Ie.left,e.style.right=Ie.right,e.style.paddingRight=Ie.paddingRight,i>0){t.style.scrollBehavior="auto";try{window.scrollTo(0,i)}catch{}t.style.scrollBehavior=Ie.scrollBehavior}Ie=null}class zd{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function ue(s,e,t){const i=s.getState().files,r=i.get(e);if(!r)return;const o=new Map(i);o.set(e,{...r,...t}),s.setState({files:o})}function Nt(s,e){const t=new Map(s.getState().files);t.set(e.id,e),s.setState({files:t})}function Mn(s,e){const t=s.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),s.setState({files:i})}function Dd(){return new zd({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},namingConvention:{regex:null,broken:!1},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:Le})}class Md{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const jd="https://api.filerobot.com",Bd=3e4,Nd=2,qd=400;function Hd(s){return s===404||s===408||s===429||s>=500}const Vd=s=>new Promise(e=>setTimeout(e,s));function pl(s,e){return`${(e||jd).replace(/\/+$/,"")}/${s}`}async function Kd(s,e,t,i={}){const r=`${pl(s,t)}/key/${encodeURIComponent(e)}`,o=i.retries??Nd,n=i.retryDelayMs??qd;let a=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await Vd(n*l);const c=new AbortController,d=setTimeout(()=>c.abort(),Bd);try{const p=await fetch(r,{signal:c.signal,cache:"no-store"});if(clearTimeout(d),!p.ok){if(a=new Error(`SASS key exchange failed (HTTP ${p.status})`),Hd(p.status)&&l<o)continue;throw a}const h=await p.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(p){if(clearTimeout(d),p instanceof DOMException&&p.name==="AbortError")throw new Error("SASS key exchange timed out");if(p instanceof TypeError&&l<o){a=p;continue}throw p}}throw a}function jn(s,e){const t={};switch(s.mode){case"security-template":if(!e)throw new Error("[dam-core] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first, or use sass-key mode.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=s.sassKey;break}return s.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=s.airboxPuid),t}function Yd(s){return s.mode==="securityTemplate"||s.mode==="sassKey"}function Gd(s){return Yd(s)?s.mode==="securityTemplate"?{mode:"security-template",container:s.projectToken,securityTemplateId:s.securityTemplateKey,airboxPuid:s.airboxPuid}:{mode:"sass-key",container:s.projectToken,sassKey:s.sassKey,airboxPuid:s.airboxPuid}:s}async function Bn(s,e){const t=Gd(s),i=pl(t.container,e);if(t.mode==="security-template"){const r=await Kd(t.container,t.securityTemplateId,e);return{apiBase:i,headers:jn(t,r),sassKey:r}}return{apiBase:i,headers:jn(t)}}const Wd=3e4;class io{constructor(e,t,i){this.baseUrl=`${e.apiBase}/v5`,this.headers=e.headers,this.auth=t,this.apiDomain=i}static async create(e,t){const i=await Bn(e,t);return new io(i,e,t)}get(e,t){const i=new URL(`${this.baseUrl}${e}`);if(t)for(const[r,o]of Object.entries(t))o!=null&&i.searchParams.set(r,Array.isArray(o)?o.join(","):String(o));return this.send(i,{method:"GET"})}post(e,t){return this.sendJson("POST",e,t)}put(e,t){return this.sendJson("PUT",e,t)}delete(e,t){return this.sendJson("DELETE",e,t)}absoluteUrl(e){return`${this.baseUrl}${e}`}get authKey(){return this.headers["X-Filerobot-Key"]}sendJson(e,t,i){return this.send(new URL(`${this.baseUrl}${t}`),{method:e,headers:{"Content-Type":"application/json"},body:i===void 0?void 0:JSON.stringify(i)})}async send(e,t,i=!1){var n;const r=new AbortController,o=setTimeout(()=>r.abort(),Wd);try{const a=await fetch(e.toString(),{...t,headers:{...this.headers,...t.headers},signal:r.signal});if(clearTimeout(o),a.status===401&&!i&&((n=this.auth)==null?void 0:n.mode)==="security-template"){const d=await Bn(this.auth,this.apiDomain);return this.headers=d.headers,this.send(e,t,!0)}if(!a.ok){let d=`API error: ${a.status} ${a.statusText}`;try{const p=await a.json();p!=null&&p.msg&&(d=`API error: ${a.status} - ${p.msg}`)}catch{}throw new Error(d)}if(a.status===204)return;const l=await a.text();if(!l)return;const c=JSON.parse(l);if((c==null?void 0:c.status)==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(a){throw clearTimeout(o),a instanceof DOMException&&a.name==="AbortError"?new Error("API request timed out"):a}}}const L="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Jd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><path d="M24 4 42 14v20L24 44 6 34V14z" fill="#eef2ff" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 4 42 14 24 24 6 14z" fill="#c7d2fe" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/><path d="M24 24v20M24 24 6 14M24 24 42 14" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/></svg>',Je=`data:image/svg+xml,${encodeURIComponent(Jd)}`,yr={_default:L+"GENERIC.svg?vh=9a518a",png:L+"PNG.svg?vh=96cd9a",jpg:L+"JPG.svg?vh=06e819",jpg2:L+"JPG2.svg?vh=f0eb7f",jpeg:L+"JPEG.svg?vh=6a65e9",gif:L+"GIF.svg?vh=c3c2c3",bmp:L+"BMP.svg?vh=d2243a",webp:L+"WEBP.svg?vh=fedd74",svg:L+"SVG.svg?vh=a15e46",tiff:L+"TIFF.svg?vh=1f30c3",tif:L+"TIF.svg?vh=b383c9",heic:L+"HEIC.svg?vh=84adfe",avif:L+"AVIF.svg?vh=536b30",ico:L+"ICO.svg?vh=79063d",psd:L+"PSD.svg?vh=be6140",psb:L+"PSB.svg?vh=678646",ai:L+"AI.svg?vh=84b254",dwg:L+"DWG.svg?vh=971fb3",mp4:L+"MP4.svg?vh=42f175",webm:L+"WEBM.svg?vh=26a84a",avi:L+"AVI.svg?vh=d22ba8",mpeg:L+"MPEG.svg?vh=ba93bb",ogv:L+"OGV.svg?vh=74d453","3gp":L+"3GP.svg?vh=f0d388","3g2":L+"3G2.svg?vh=04c652",swf:L+"SWF.svg?vh=3955e2",fla:L+"FLA.svg?vh=daf585",m3u8:L+"M3U8.svg?vh=7d5e62",mp3:L+"MP3.svg?vh=66bbef",wav:L+"WAV.svg?vh=d7a7d5",aac:L+"AAC.svg?vh=07f3f9",oga:L+"OGA.svg?vh=a5c622",opus:L+"OPUS.svg?vh=9548b1",weba:L+"WEBA.svg?vh=4dcf70",mid:L+"MID.svg?vh=3f0e29",midi:L+"MIDI.svg?vh=9fedec",cda:L+"CDA.svg?vh=85b83b",pdf:L+"PDF.svg?vh=18c5f7",doc:L+"DOC.svg?vh=d1b47c",docx:L+"DOCX.svg?vh=1eb6b0",txt:L+"TXT.svg?vh=307979",rtf:L+"RTF.svg?vh=978c5f",xls:L+"XLS.svg?vh=13b5f7",xlsx:L+"XLSX.svg?vh=79d64a",ppt:L+"PPT.svg?vh=4ee29b",pptx:L+"PPTX.svg?vh=8b1568",csv:L+"CSV.svg?vh=4add78",odt:L+"ODT.svg?vh=940781",ods:L+"ODS.svg?vh=9fbe9a",odp:L+"ODP.svg?vh=bf892d",dbf:L+"DBF.svg?vh=457bd4",vsd:L+"VSD.svg?vh=8a9ccb",abw:L+"ABW.svg?vh=313dc7",epub:L+"EPUB.svg?vh=15263d",azw:L+"AZW.svg?vh=a018b1",ics:L+"ICS.svg?vh=909f63",ogx:L+"OGX.svg?vh=f694d2",zip:L+"ZIP.svg?vh=84f98b",rar:L+"RAR.svg?vh=1d6423","7z":L+"7Z.svg?vh=e007e5",tar:L+"TAR.svg?vh=603aed",gz:L+"GZ.svg?vh=de13f7",bz:L+"BZ.svg?vh=0374ff",bz2:L+"BZ2.svg?vh=e14294",arc:L+"ARC.svg?vh=942fad",jar:L+"JAR.svg?vh=149796",mpkg:L+"MPKG.svg?vh=dea655",ttf:L+"TTF.svg?vh=d2e2c1",otf:L+"OTF.svg?vh=c904fd",woff:L+"WOFF.svg?vh=4b8177",woff2:L+"WOFF2.svg?vh=b532d3",eot:L+"EOT.svg?vh=a54980",js:L+"JS.svg?vh=524691",mjs:L+"MJS.svg?vh=d57921",ts:L+"TS.svg?vh=9af3ae",css:L+"CSS.svg?vh=287863",html:L+"HTML.svg?vh=fa7a87",htm:L+"HTM.svg?vh=21323d",xhtml:L+"XHTML.svg?vh=e6d6a9",xul:L+"XUL.svg?vh=6c9c71",json:L+"JSON.svg?vh=104c9e",jsonld:L+"JSONLD.svg?vh=f30c0f",xml:L+"XML.svg?vh=7f7194",php:L+"PHP.svg?vh=503e36",sh:L+"SH.svg?vh=3b820e",csh:L+"CSH.svg?vh=08c0cc",exe:L+"EXE.svg?vh=ccca53",iso:L+"ISO.svg?vh=064b8f",bin:L+"BIN.svg?vh=1e9618",glb:Je,gltf:Je,obj:Je,fbx:Je,stl:Je,usdz:Je,ply:Je,"3ds":Je,dae:Je};function so(){return yr._default}function ro(s){const e=(s.split(".").pop()||"").toLowerCase();return yr[e]||yr._default}function Xd(s){if(s==null||!Number.isFinite(s)||s<0)return"—";const e=["B","KB","MB","GB","TB"];let t=s,i=0;for(;t>=1024&&i<e.length-1;)t/=1024,i++;const r=(a,l)=>{const c=l>0&&Math.round(a*10)/10<10?1:0,d=a.toFixed(c);return{str:d,rounded:Number(d)}},o=r(t,i);let n=o.str;return o.rounded>=1024&&i<e.length-1&&(t/=1024,i++,n=r(t,i).str),`${n} ${e[i]}`}const Zd="SAME_ASSET_EXISTS_SKIP_UPLOAD",Qd="ERROR_SHA1_CONFLICT";function ii(s){return(s==null?void 0:s.code)===Zd||(s==null?void 0:s.code)===Qd}function oo(s,e){return{...s,status:"success",file:s.file??{uuid:s.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Ss(s,e){var t,i,r,o,n;return((i=(t=s==null?void 0:s.info)==null?void 0:t.msg)==null?void 0:i.trim())||((r=s==null?void 0:s.msg)==null?void 0:r.trim())||((o=s==null?void 0:s.hint)==null?void 0:o.trim())||((n=s==null?void 0:s.message)==null?void 0:n.trim())||e}const eu=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function tu(s){const e=new Set;if(!s)return e;const t=s.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),eu.has(t)&&e.add("archive"),e}function iu(s,e){if(s.formatMimetypes.length===0)return!0;const t=tu(e);return s.formatMimetypes.some(i=>t.has(i))}function lr(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:!1}function Nn(s){return typeof s=="boolean"?s:s==="true"?!0:s==="false"?!1:null}function is(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function qn(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function Hn(s,e){if(s.length===0||e.length===0)return!1;const t=new Set(s);for(const i of e)if(t.has(i))return!0;return!1}function su(s,e){const t=e[s.triggerCkey],i=s.triggerValues;switch(s.triggerCondition){case"is_true":return Nn(t)===!0;case"is_false":return Nn(t)===!1;case"is_empty":return lr(t);case"is_not_empty":return!lr(t);case"is_in":return Hn(is(t),i);case"is_not_in":return lr(t)?!0:!Hn(is(t),i);case"is":return qn(is(t),i);case"is_not":return!qn(is(t),i);default:return!1}}function ru(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function ou(s,e){let t=s.get(e);return t||(t=ru(),s.set(e,t)),t}function nu(s,e){if(s.length===0||e.length===0)return[];const t=new Set(s);return e.filter(i=>t.has(i))}function au(s,e){s.contributingDependencyUuids.includes(e)||s.contributingDependencyUuids.push(e)}function lu(s,e,t){const i=ou(s,t.targetCkey);switch(au(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"show":i.shown=!0;break;case"require":i.required=!0;break;case"allow_values":{const r=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...r]:nu(i.allowedValues,r);break}case"set_values":{const r=t.setValues??[];if(r.length===0)break;i.setValue===void 0&&(i.setValue=r.length===1?r[0]:r);break}default:t.type}}function cu(s,e){for(const t of e.actions)lu(s,e,t)}function du(s,e){const t=new Map;for(const i of e)i.active&&iu(i,s.mime)&&su(i,s.meta)&&cu(t,i);return t}function Qt(s,e,t){const i={},r=new Set;for(const a of e.fields)r.add(a.ckey),a.key in s.meta&&(i[a.ckey]=s.meta[a.key]);const o=t.filter(a=>r.has(a.triggerCkey)),n=du({mime:s.mime,meta:i},o);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const c of a.fields){const d=n.get(c.ckey);if(d){d.hidden=!0;for(const p of l.contributingDependencyUuids)d.contributingDependencyUuids.includes(p)||d.contributingDependencyUuids.push(p)}else n.set(c.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function uu(s,e){const t=Array.isArray(e)?e:[e];switch(s.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function Us(s,e,t){var i,r;return!!((i=t.get(s.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((r=t.get(e.ckey))!=null&&r.hidden))}function no(s,e,t){var i,r;return t?!!((i=t.get(s.ckey))!=null&&i.shown||e!=null&&e.ckey&&((r=t.get(e.ckey))!=null&&r.shown)):!1}function pu(s,e,t){if(t.size===0)return s;let i=null;for(const r of e.groups)for(const o of r.fields)Us(o,r,t)&&o.key in s&&(i||(i={...s}),delete i[o.key]);return i??s}function hu(s){return s==null?[]:Array.isArray(s)?s.map(String):[String(s)]}function fu(s,e){if(s.length!==e.length)return!1;const t=new Set(s);for(const i of e)if(!t.has(i))return!1;return!0}function hl(s,e){const t=[];for(const[i,r]of e){if(r.hidden)continue;const o=hu(s[i]);if(o.length!==0){if(r.allowedValues!==void 0){const n=new Set(r.allowedValues),a=o.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...r.contributingDependencyUuids]})}if(r.setValue!==void 0){const n=Array.isArray(r.setValue)?r.setValue:[r.setValue];fu(o,n)||t.push({ckey:i,kind:"set_values",conflictingValues:o,dependencyUuids:[...r.contributingDependencyUuids]})}}}return t}function gu(s,e,t){if(s.length===0||t.length===0)return new Map;const i=s.map(n=>Qt({mime:n.mime,meta:n.meta},e,t)),r=new Map,o=new Set;for(const n of i)for(const a of n.keys())o.add(a);for(const n of o){const a=i.map(E=>E.get(n)),l=a.every(E=>(E==null?void 0:E.hidden)===!0),c=a.some(E=>(E==null?void 0:E.shown)===!0),d=a.some(E=>(E==null?void 0:E.required)===!0);let p;if(a.every(E=>Array.isArray(E==null?void 0:E.allowedValues))){let E;for(const k of a){const C=k.allowedValues;if(E=E===void 0?[...C]:E.filter(x=>C.includes(x)),E.length===0)break}p=E}let f;const _=a.map(E=>E==null?void 0:E.setValue).filter(E=>E!==void 0);_.length===s.length&&mu(_)&&(f=_[0]);const g=new Set;for(const E of a)if(E)for(const k of E.contributingDependencyUuids)g.add(k);const S={hidden:l,required:d,contributingDependencyUuids:[...g]};c&&(S.shown=!0),p!==void 0&&(S.allowedValues=p),f!==void 0&&(S.setValue=f),r.set(n,S)}return r}function mu(s){if(s.length<=1)return!0;const e=s[0];if(typeof e=="string")return s.every(i=>i===e);const t=new Set(e);return s.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const r of i)if(!t.has(r))return!1;return!0})}const fl=new Set(["asset-attachments","attachments-assets","integer-list"]),vu=new Set(["face_matcher"]);function bu(s){return fl.has(s)}function Ni(s){return fl.has(s.type)||vu.has(s.ckey)}const ao=0,lo=100,xu=2;function _r(s){if(s==null||s==="")return null;const e=Number(s);return!Number.isFinite(e)||e<ao||e>lo?null:e}const Hm=300,Vn=2,Kn=50,ss="regvar:api",yu="#ut",_u={CREATE_ONLY:"create_only",UPSERT:"upsert"},wu=/^[a-z0-9_-]+$/,ku=s=>typeof s=="string"&&s.startsWith(yu),ps=s=>`~${s.toUpperCase()}`,$u=(s,e)=>{if(!(!s||!e))return s[e]??s[ps(e)]},Cs=(s,e,t)=>{var n,a,l;const i=(n=s.i18n)==null?void 0:n[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const r=(a=s.i18n)==null?void 0:a[ps(e)];if(r)return{value:r,isFallback:!0,sourceLang:ps(e)};const o=$u(s.i18n,t);if(o){const c=(l=s.i18n)!=null&&l[t]?t:ps(t);return{value:o,isFallback:!0,sourceLang:c}}return{value:"",isFallback:!1,sourceLang:null}},Yn=s=>(typeof s=="string"?s:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),Vm=s=>wu.test(s),Su=s=>{const e={},t={};for(const i of s||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},Km=(s,e)=>s.bySid[e]||s.bySlug[e],Cu=(s,e)=>({bySid:{...s.bySid,...e.bySid},bySlug:{...s.bySlug,...e.bySlug}}),Ai=s=>{const e=[],t=new Map,i=o=>o.sid||o.slug||"",r=(o,n)=>{if(typeof o=="string"){if(!o||t.has(o))return;t.set(o,e.length),e.push({slug:o});return}if(!o||typeof o!="object")return;const a=o,l=i(a);if(!l)return;const c=t.get(l),d=c!==void 0?{...e[c]}:{};a.slug&&(d.slug=a.slug),a.sid&&(d.sid=a.sid),a.uuid&&(d.uuid=a.uuid);const p={...d.i18n,...a.i18n||{}};n&&a.label&&(p[n]=a.label),Object.keys(p).length>0&&(d.i18n=p),c!==void 0?e[c]=d:(t.set(l,e.length),a.slug&&a.slug!==l&&t.set(a.slug,e.length),e.push(d))};if(Array.isArray(s))for(const o of s)r(o);else if(s&&typeof s=="object"){const o=s;for(const[n,a]of Object.entries(o))if(Array.isArray(a))for(const l of a)r(l,n)}return e},rs=s=>typeof s=="string"?[s]:!s||typeof s!="object"?[]:[s.sid,s.slug,s.uuid].filter(Boolean),wr=(s,e,t)=>{if(t){const o=new Set(e.flatMap(rs));return s.filter(n=>!rs(n).some(a=>o.has(a)))}const i=new Set(s.flatMap(rs)),r=e.filter(o=>!rs(o).some(n=>i.has(n)));return[...s,...r]},Eu=(s,e)=>s.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function gl(s,e,t){let i=e;switch(s.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),s.type){case"geopoint":return Pu(i);case"focus-point":return ml(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(r=>typeof r=="string"?{value:r,label:r}:r):[];case"ultratags":return Ai(e);case"multi-select":return i||[];default:return i??""}}function co(s,e,t,i){var o;let r;switch(s.type){case"geopoint":{const n=e;!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?r=null:r=`(${n.latitude},${n.longitude})`;break}case"focus-point":{const n=e,a=d=>{if(d==null||d==="")return;const p=Number(d);return Number.isFinite(p)?Number(p.toFixed(xu)):void 0},l=a(n==null?void 0:n.horizontal),c=a(n==null?void 0:n.vertical);r=l===void 0||c===void 0?null:`${l},${c}`;break}case"boolean":e==="true"?r=!0:e==="false"?r=!1:r=null;break;case"date":{if(!e)r=null;else{const n=e instanceof Date?e:new Date(e),a=n.getFullYear(),l=String(n.getMonth()+1).padStart(2,"0"),c=String(n.getDate()).padStart(2,"0");r=`${a}-${l}-${c}`}break}case"tags":r=Array.isArray(e)?e.map(n=>(n==null?void 0:n.label)??""):[];break;case"ultratags":r=Array.isArray(e)?e.map(n=>typeof n=="string"?n:n.slug).filter(n=>!!n):[];break;case"select-one":r=e===""?null:e;break;case"numeric":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?Math.round(n):null;break}case"decimal2":{if(e===""||e==null){r=null;break}const n=Number(e);r=Number.isFinite(n)?n:null;break}default:r=e}if(s.regional_variants_group_uuid&&s.type!=="ultratags"){const n=i??"en";return{...((o=t==null?void 0:t.meta)==null?void 0:o[s.key])??{},[n]:r}}return r}function Pu(s){if(typeof s=="string"){const e=/\(([^)]+)\)/.exec(s);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function ml(s){var e;if(typeof s=="string"&&s!==""){const i=(((e=/\(([^)]+)\)/.exec(s))==null?void 0:e[1])??s).split(",");if(i.length===2)return{horizontal:i[0].trim(),vertical:i[1].trim()}}if(s!=null&&typeof s=="object"){const t=s;return{horizontal:t.horizontal??"",vertical:t.vertical??""}}return{horizontal:"",vertical:""}}const Ot="product.ref",It="product.position",Tu="__product__",Au=new Set([Ot,It]);function kr(s){return Au.has(s)}function $r(s){return s===Ot?"ref":s===It?"position":null}function Ru(s){return[{key:Ot,ckey:Ot,uuid:"product-ref",title:s("productRefLabel","Product reference"),type:"text",placeholder:s("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:It,ckey:It,uuid:"product-position",title:s("productPositionLabel","Position"),type:"numeric",placeholder:s("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Ou(s){return{uuid:Tu,isRoot:!1,name:s("productFieldsLabel","Product"),fields:Ru(s)}}function Iu(s,e){const t=Ou(e);let i=-1;for(let l=0;l<s.groups.length;l++)s.groups[l].isRoot&&(i=l);const r=i+1,o=[...s.groups.slice(0,r),t,...s.groups.slice(r)],n=o.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...s,groups:o,fields:n,fieldsByKey:a}}const vl=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Fu(s){return s==null||s===""?null:typeof s!="string"||vl.test(s)?"productRefInvalid":null}function Lu(s){if(s==null||s==="")return null;const e=typeof s=="number"?s:Number(s);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function uo(s){return s?s.ref!=null&&s.ref!==""||s.position!=null:!1}function po(s){const e={};return(s==null?void 0:s.ref)!=null&&s.ref!==""&&(e.ref=s.ref),(s==null?void 0:s.position)!=null&&(e.position=s.position),e}function Gn(s,e){const t={...s??{}};for(const i of Object.keys(e)){const r=e[i];r===void 0?delete t[i]:t[i]=r}return t}function bl(s,e,t){var r;if((((r=t==null?void 0:t.requiredFields)==null?void 0:r.includes(s.ckey))||!!s.required)&&Ne(e))return`${s.title} is required`;if(Ne(e))return null;if(s.key===Ot)return typeof e!="string"||vl.test(e)?"Reference contains invalid characters":null;if(s.key===It){const o=Number(e);return!Number.isFinite(o)||!Number.isInteger(o)?"Position must be an integer":null}switch(s.type){case"numeric":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!Number.isInteger(o))return"Must be an integer";if(o<-1999999999||o>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const o=Number(e);if(!Number.isFinite(o))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(o<-999999999999e-2||o>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const o=e,n=o.latitude!==""&&o.latitude!=null,a=o.longitude!==""&&o.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(o.latitude),c=Number(o.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(c)||c<-180||c>180)return"Longitude must be between -180 and 180"}break}case"focus-point":{const o=e,n=o.horizontal!==""&&o.horizontal!=null,a=o.vertical!==""&&o.vertical!=null;if(n!==a)return"Both horizontal and vertical are required";if(n&&a){for(const l of[o.horizontal,o.vertical])if(_r(l)===null)return`Focus point must be between ${ao} and ${lo}`}break}case"attachment-uri":{try{const o=new URL(e);if(!["http:","https:"].includes(o.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(s.validation&&typeof e=="string")try{if(!new RegExp(s.validation).test(e))return"Value does not match expected format"}catch{}return null}function Ne(s){return s==null?!0:Array.isArray(s)||typeof s=="string"?s.length===0:typeof s=="object"?!Object.values(s).some(e=>e!=null&&e!==""):!s}const Uu=new Set(["idle","queued","rejected"]);function zs(s){return!Ne(s)}function Ri(s,e){var t;return Ni(s)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(s.ckey)?!0:!!s.required}function ho(s,e,t){var i;return(i=t==null?void 0:t.get(s.ckey))!=null&&i.required?!0:Ri(s,e)}function Dt(s){return[...s.values()].filter(e=>Uu.has(e.status))}function xl(s,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:s.forceFillingOnUpload!==void 0?s.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:s.fields.some(t=>!!t.required)}function qi(s,e,t){if(!e)return Ri(s,t);const i=e.get(s.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:Ri(s,t)}function li(s,e,t){const i=new Map;if(!t||t.length===0){for(const r of s)i.set(r.id,null);return i}for(const r of s)i.set(r.id,Qt({mime:r.type??"",meta:r.meta},e,t));return i}function zu(s,e,t,i){const r=Dt(s);if(r.length===0)return{};const o=li(r,e,i),n={};for(const a of e.fields){const l=r.filter(c=>{const d=o.get(c.id)??null;return qi(a,d,t)?!zs(c.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function Du(s,e,t,i){const r=Dt(s);if(r.length===0)return new Set;const o=li(r,e,i),n=new Set;for(const a of e.fields)r.some(c=>{const d=o.get(c.id)??null;return qi(a,d,t)})&&n.add(a.key);return n}function Mu(s,e,t,i){const r=Dt(s);if(r.length===0)return null;const o=li(r,e,i);for(const n of e.fields)if(r.some(l=>{const c=o.get(l.id)??null;return qi(n,c,t)?!zs(l.meta[n.key]):!1}))return n.key;return null}function yl(s,e,t){var r;const i=s.get(e.id);return i&&i.has(t)?i.get(t):(r=e.meta)==null?void 0:r[t]}function fo(s,e,t){const i=e.get(s.id);if(!i||i.size===0)return s;const r={...s.meta};for(const o of t.fields)i.has(o.key)&&(r[o.key]=i.get(o.key));return{...s,meta:r}}function Ym(s,e,t,i,r){const o=Dt(e);if(o.length===0)return null;const n=o.map(l=>fo(l,s,t)),a=li(n,t,r);for(const l of t.fields)if(o.some((d,p)=>{const h=a.get(n[p].id)??null;return qi(l,h,i)?!zs(yl(s,d,l.key)):!1}))return l.key;return null}function ju(s,e,t,i,r){const o=new Set,n=Dt(e);if(n.length===0)return o;const a=n.map(c=>fo(c,s,t)),l=li(a,t,r);for(const c of t.fields)n.some((p,h)=>{const f=l.get(a[h].id)??null;return qi(c,f,i)?!zs(yl(s,p,c.key)):!1})&&o.add(c.key);return o}function _l(s,e,t){if(!t||t.length===0)return null;const i=Dt(s);if(i.length===0)return null;const r=li(i,e,t),o=new Map;for(const n of i){const a=r.get(n.id);if(!a||a.size===0)continue;const l={};for(const d of e.fields)d.key in n.meta&&(l[d.ckey]=n.meta[d.key]);const c=hl(l,a);c.length!==0&&o.set(n.id,new Set(c.map(d=>d.ckey)))}if(o.size===0)return null;for(const n of e.fields)for(const a of o.values())if(a.has(n.ckey))return n.key;return null}function Bu(s,e,t,i){const r=Dt(e);if(r.length===0)return null;const o=new Map(r.map(n=>[n.id,fo(n,s,t)]));return _l(o,t,i)}function Gm(s,e){const t={...s};for(const i of Object.keys(e)){const r=e[i];if(r==null||r==="")continue;const o=s[i];if(Array.isArray(r))if(Array.isArray(o)){const n=new Set(o.map(l=>JSON.stringify(l))),a=[...o];for(const l of r){const c=JSON.stringify(l);n.has(c)||(n.add(c),a.push(l))}t[i]=a}else t[i]=r;else t[i]=r}return t}function Nu(s,e){const t=e.fields[s.ckey];let i=!1;const r=(s.possible_values??[]).map(l=>{const c=e.options[l.internal_unique_value];return c&&c!==l.label?(i=!0,{...l,label:c}):l}),o=!!(t!=null&&t.name)&&t.name!==s.title,n=!!(t!=null&&t.placeholder)&&t.placeholder!==s.placeholder,a=!!(t!=null&&t.tooltip)&&t.tooltip!==s.hint;return!i&&!o&&!n&&!a?s:{...s,title:o?t.name:s.title,placeholder:n?t.placeholder:s.placeholder,hint:a?t.tooltip:s.hint,possible_values:i?r:s.possible_values}}function qu(s,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return s;let t=!1;const i=s.groups.map(n=>{let a=!1;const l=n.fields.map(c=>{const d=Nu(c,e);return d!==c&&(a=!0),d});return a?(t=!0,{...n,fields:l}):n});if(!t)return s;const r=i.flatMap(n=>n.fields),o=new Map(r.map(n=>[n.key,n]));return{...s,groups:i,fields:r,fieldsByKey:o}}const Hu="description",Xe="system.focusPoint",Vu="__focus_point__",Ku="sfx-meta-focus-point-field";function St(s){return s===Xe}function Yu(s){return{key:Xe,ckey:Xe,uuid:"system-focus-point",title:s("focusPointLabel","Focus point"),type:"focus-point",required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Gu(s,e){const t=Yu(e);let i=!1,r=s.groups.map(a=>{if(i||!a.isRoot)return a;i=!0;const l=a.fields.findIndex(d=>d.ckey===Hu),c=l===-1?a.fields.length:l+1;return{...a,fields:[...a.fields.slice(0,c),t,...a.fields.slice(c)]}});i||(r=[{uuid:Vu,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...r]);const o=r.flatMap(a=>a.fields),n=new Map(o.map(a=>[a.key,a]));return{...s,groups:r,fields:o,fieldsByKey:n}}function wl(s){if(!s.fields.some(r=>St(r.key)))return s;const e=s.groups.map(r=>({...r,fields:r.fields.filter(o=>!St(o.key))})).filter(r=>r.fields.length>0),t=e.flatMap(r=>r.fields),i=new Map(t.map(r=>[r.key,r]));return{...s,groups:e,fields:t,fieldsByKey:i}}function kl(s=2){return u`<svg
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
  </svg>`}function go(s){return s.show===!1}const Wu="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Ju="https://i18n-fastly.ultrafast.io",Xu="uploader",$l=ol({gridUuid:Wu,namespace:Xu,cdnUrl:Ju}),P=$l.t,Ge=$l.I18nController;var Zu=Object.defineProperty,ke=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Zu(e,t,r),r};const Qu=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="7" cy="7" r="4.5" />
  <line x1="13.5" y1="13.5" x2="10.5" y2="10.5" />
</svg>`,ep=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
>
  <line x1="4" y1="4" x2="12" y2="12" />
  <line x1="12" y1="4" x2="4" y2="12" />
</svg>`,tp=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 6 8 2 12 6" />
  <polyline points="4 10 8 14 12 10" />
</svg>`,ip=u`<svg
  viewBox="0 0 16 16"
  fill="none"
  stroke="currentColor"
  stroke-width="1.75"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polyline points="4 3 8 7 12 3" />
  <polyline points="4 9 8 13 12 9" />
</svg>`,Ro=class Ro extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.focusPointPicking=!1,this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=hl(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var o;const i=this.resolvedSchema;if(i&&e.ckey&&((o=i.get(e.ckey))!=null&&o.hidden))return[];let r=i?e.fields.filter(n=>!Us(n,e,i)):e.fields;return go(e)&&(r=r.filter(n=>ho(n,this.config??void 0,i)||no(n,e,i))),t&&!e.name.toLowerCase().includes(t)&&(r=r.filter(n=>n.title.toLowerCase().includes(t))),r}_renderFilter(e,t,i){if(this.hideFilter||!this.schema||this.schema.fields.length===0)return v;const r=this._filterQuery,o=this._isAllCollapsed(t),n=o?P("expandAll","Expand all"):P("collapseAll","Collapse all");return u`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${Qu}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${P("searchFields","Search fields...")}
            .value=${r}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${P("searchMetadataFields","Search metadata fields")}
          />
          ${r?u`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${P("clearSearch","Clear search")}
                aria-label=${P("clearSearch","Clear search")}
                type="button"
              >
                ${ep}
              </button>`:v}
        </div>
        ${e?u`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?P("disabledWhileSearching","Disabled while searching"):n}
              aria-label=${o?P("expandAllGroups","Expand all groups"):P("collapseAllGroups","Collapse all groups")}
              type="button"
            >
              ${o?ip:tp}
            </button>`:v}
      </div>
    `}_renderGroup(e,t,i,r,o){const n=o?!0:!this._collapsed.has(e.uuid);return u`
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
                      .dependencyNames=${r}
                      .focusPointPicking=${this.focusPointPicking}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:v}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return u`<div class="empty" role="status" aria-live="polite">
        ${P("noMetadataFieldsConfigured","No metadata fields configured")}
      </div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),r=i.toLowerCase(),o=r!=="",n=[];for(const d of this.schema.groups){const p=this._visibleFieldsFor(d,r);p.length!==0&&n.push({group:d,fields:p})}const a=n.map(d=>d.group.uuid),l=this.schema.groups.length>1&&(o||n.length>0),c=this._renderFilter(l,a,o);if(n.length===0){const d=o?P("noFieldsMatch",'No fields match "{{query}}"',{query:i}):P("allMetadataFieldsHidden","All metadata fields are currently hidden");return u`
        ${c}
        <div class="empty" role="status" aria-live="polite">${d}</div>
      `}return u`
      ${c}
      ${n.map(({group:d,fields:p})=>this._renderGroup(d,p,e,t,o))}
    `}};Ro.styles=q`
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
  `;let pe=Ro;ke([m({attribute:!1})],pe.prototype,"schema");ke([m({attribute:!1})],pe.prototype,"meta");ke([m({attribute:!1})],pe.prototype,"config");ke([m({attribute:!1})],pe.prototype,"autocomplete");ke([m({attribute:!1})],pe.prototype,"taxonomyService");ke([m({attribute:!1})],pe.prototype,"ultratags");ke([m({attribute:!1})],pe.prototype,"defaultLanguage");ke([m({attribute:!1})],pe.prototype,"taxonodes");ke([m({attribute:!1})],pe.prototype,"resolvedSchema");ke([m({attribute:!1})],pe.prototype,"dependencies");ke([m({type:Boolean})],pe.prototype,"focusPointPicking");ke([m({type:Boolean})],pe.prototype,"disabled");ke([m({type:Boolean,attribute:"hide-filter"})],pe.prototype,"hideFilter");ke([T()],pe.prototype,"_collapsed");ke([T()],pe.prototype,"_filterQuery");ie("sfx-metadata-form",pe);const Mt=q`
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

  ${Ae}
`,Hi=q`
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

  ${Ae}
`,mo=q`
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

  ${Ae}
`,Wm=q`
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

  ${Ae}
`,Sl=q`
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

  ${Ae}
`,hs={LANGUAGES:"FTYPE_LANGUAGES",CURRENCIES:"FTYPE_CURRENCIES",CUSTOM:"FTYPE_CUSTOM"};function At(s,e){if(!s.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&s.regional_variants_group_uuid in t?t[s.regional_variants_group_uuid]:e==null?void 0:e.language}function sp(s,e,t,i){if(!s.regional_variants_group_uuid||!e)return;const r=e.find(a=>a.uuid===s.regional_variants_group_uuid);if(!r)return;const o=(t==null?void 0:t[r.uuid])??i,n=r.variants.find(a=>a.api_value===o);if(n)return`${r.label}: ${n.label}`}function rp(s,e){var i;const t={};for(const r of s??[]){if(!((i=r.variants)!=null&&i.length))continue;const o=r.type===hs.LANGUAGES?op(r.variants,e):void 0;t[r.uuid]=o??r.variants[0].api_value}return t}function op(s,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let r,o;for(const a of s){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!r&&l===i&&(r=a.api_value),!o&&l.split("-")[0]===i&&(o=a.api_value)}}return r??o}var np=Object.defineProperty,be=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&np(e,t,r),r};const Oo=class Oo extends G{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.focusPointPicking=!1,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:Ri(this.field,this.config??void 0)}_conflictTooltip(){var n,a;const e=this.conflict;if(!e)return"";const t=l=>{var c,d,p;return((p=(d=(c=this.field)==null?void 0:c.possible_values)==null?void 0:d.find(h=>h.internal_unique_value===l))==null?void 0:p.label)??l},i=(n=this.resolvedState)==null?void 0:n.allowedValues,r=(a=this.resolvedState)==null?void 0:a.setValue;let o;if(e.kind==="allow_values"&&i?o=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&r!==void 0?o=`Value should be: ${(Array.isArray(r)?r:[r]).map(t).join(", ")}`:o="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const l=e.dependencyUuids.map(c=>this.dependencyNames.get(c)).filter(c=>!!c);if(l.length>0){const c=l.length===1?"dependency":"dependencies";o+=`
Controlled by ${c}: ${l.join(", ")}`}}return o}_onFieldBlur(e){const{key:t,value:i}=e.detail,r=bl(this.field,i,this.config??void 0);if(r){this._error=r;return}this._error=null;const o={meta:{[this.field.key]:this.value}},n=At(this.field,this.config),a=co(this.field,i,o,n);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_emitRow(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}_onRowFocusIn(){this._emitRow("field-focus",{focused:!0})}_onRowFocusOut(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emitRow("field-focus",{focused:!1})}_renderField(e,t){var o,n;const i=this.disabled;if(Ni(e))return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const r=((o=this.resolvedState)==null?void 0:o.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return u`<sfx-meta-text-field
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
          .allowedValues=${r}
          ?disabled=${i}
        ></sfx-meta-select-field>`;case"multi-select":return u`<sfx-meta-multi-select-field
          .field=${e}
          .value=${t}
          .allowedValues=${r}
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
        ></sfx-meta-text-field>`}}render(){var l,c;const e=this.field;if(!e)return v;const t=At(e,this.config),i=gl(e,this.value,t),r=sp(e,this.regionalVariantsGroups,(l=this.config)==null?void 0:l.regionalFilters,(c=this.config)==null?void 0:c.language),n=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return u`
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
          ${r?u`<div class="field-regional-hint" title=${r}>${r}</div>`:v}
          ${this._error?u`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:v}
        </div>
      </div>
    `}};Oo.styles=[Sl];let ce=Oo;be([m({attribute:!1})],ce.prototype,"field");be([m({attribute:!1})],ce.prototype,"value");be([m({attribute:!1})],ce.prototype,"config");be([m({attribute:!1})],ce.prototype,"autocomplete");be([m({attribute:!1})],ce.prototype,"taxonomyService");be([m({attribute:!1})],ce.prototype,"taxonomyEntry");be([m({attribute:!1})],ce.prototype,"ultratags");be([m({attribute:!1})],ce.prototype,"defaultLanguage");be([m({attribute:!1})],ce.prototype,"ultratagsRestrictToItems");be([m({attribute:!1})],ce.prototype,"regionalVariantsGroups");be([m({attribute:!1})],ce.prototype,"resolvedState");be([m({attribute:!1})],ce.prototype,"conflict");be([m({attribute:!1})],ce.prototype,"dependencyNames");be([m({type:Boolean})],ce.prototype,"focusPointPicking");be([m({type:Boolean})],ce.prototype,"disabled");be([T()],ce.prototype,"_error");ie("sfx-metadata-field",ce);var ap=Object.defineProperty,vo=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&ap(e,t,r),r};class $e extends G{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new Ge(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?P("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??P("selectAnOption","Select an option")}_emit(e,t){this._emitDetail(e,t!==void 0?{value:t}:{})}_emitDetail(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t},bubbles:!0,composed:!0}))}}vo([m({attribute:!1})],$e.prototype,"field");vo([m({attribute:!1})],$e.prototype,"value");vo([m({type:Boolean})],$e.prototype,"disabled");const Io=class Io extends $e{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,r;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return u`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((r=this.field)==null?void 0:r.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Io.styles=[Mt];let Sr=Io;ie("sfx-meta-text-field",Sr);const Fo=class Fo extends $e{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,r;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return u`
      <textarea
        .value=${this.value??""}
        placeholder=${((r=this.field)==null?void 0:r.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};Fo.styles=[Mt,q`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Cr=Fo;ie("sfx-meta-textarea-field",Cr);function Vi(s,e,t,i){var r=arguments.length,o=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(o=(r<3?n(o):r>3?n(e,t,o):n(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=(s,e)=>{var i;const t=s._$AN;if(t===void 0)return!1;for(const r of t)(i=r._$AO)==null||i.call(r,e,!1),Si(r,e);return!0},Es=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while((t==null?void 0:t.size)===0)},Cl=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),dp(e)}};function lp(s){this._$AN!==void 0?(Es(this),this._$AM=s,Cl(this)):this._$AM=s}function cp(s,e=!1,t=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)Si(i[o],!1),Es(i[o]);else i!=null&&(Si(i,!1),Es(i));else Si(this,s)}const dp=s=>{s.type==ni.CHILD&&(s._$AP??(s._$AP=cp),s._$AQ??(s._$AQ=lp))};class up extends Bi{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Cl(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,r;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(r=this.disconnected)==null||r.call(this)),t&&(Si(this,e),Es(this))}setValue(e){if(Cd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ds extends Event{constructor(e){super(Ds.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ds.eventName="rangeChanged";class Ms extends Event{constructor(e){super(Ms.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}}Ms.eventName="visibilityChanged";class js extends Event{constructor(){super(js.eventName,{bubbles:!1})}}js.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pp{constructor(e){this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class hp extends pp{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(i)}scrollBy(e,t){const i=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop),r=Math.min(r||0,this.maxScrollLeft);const o=Math.abs(i-e),n=Math.abs(r-t);o<1&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Wn=typeof window<"u"?window.ResizeObserver:void 0;const Er=Symbol("virtualizerRef"),os="virtualizer-sizer";let Jn;class fp{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);const t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Wn(()=>this._hostElementSizeChanged()),this._childrenRO=new Wn(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[Er]=this}connected(){this._initObservers();const e=this._isScroller;this._clippingAncestors=vp(this._hostElement,e),this._scrollerController=new hp(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,i,r;this._scrollEventListeners.forEach(o=>o.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],(e=this._scrollerController)==null||e.detach(this),this._scrollerController=null,(t=this._mutationObserver)==null||t.disconnect(),this._mutationObserver=null,(i=this._hostElementRO)==null||i.disconnect(),this._hostElementRO=null,(r=this._childrenRO)==null||r.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${os}]`);t||(t=document.createElement("div"),t.setAttribute(os,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(os,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;const t=e.type||Jn;if(typeof t=="function"&&this._layout instanceof t){const i={...e};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(e){let t,i;if(typeof e.type=="function"){i=e.type;const r={...e};delete r.type,t=r}else t=e;i===void 0&&(Jn=i=(await J(()=>import("./flow-DQ61c9Hr.js"),[])).FlowLayout),this._layout=new i(r=>this._handleLayoutMessage(r),t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<e).reduce((o,n)=>o+n.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:r}}return null}_measureChildren(){const e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){const o=t[r],n=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[n]=i.call(this,o,this._items[n]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:i}=e.getBoundingClientRect();return Object.assign({width:t,height:i},gp(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)==null||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",e)}}_handleLayoutMessage(e){e.type==="stateChanged"?this._updateDOM(e):e.type==="visibilityChanged"?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):e.type==="unpinned"&&this._hostElement.dispatchEvent(new js)}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(os)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var r;const e=this._hostElement,t=(r=this._scrollerController)==null?void 0:r.element,i=this._layout;if(e&&t&&i){let o,n,a,l;const c=e.getBoundingClientRect();o=0,n=0,a=window.innerHeight,l=window.innerWidth;const d=this._clippingAncestors.map(k=>k.getBoundingClientRect());d.unshift(c);for(const k of d)o=Math.max(o,k.top),n=Math.max(n,k.left),a=Math.min(a,k.bottom),l=Math.min(l,k.right);const p=t.getBoundingClientRect(),h={left:c.left-p.left,top:c.top-p.top},f={width:t.scrollWidth,height:t.scrollHeight},_=o-c.top+e.scrollTop,g=n-c.left+e.scrollLeft,S=Math.max(0,a-o),E=Math.max(0,l-n);i.viewportSize={width:E,height:S},i.viewportScroll={top:_,left:g},i.totalScrollSize=f,i.offsetWithinScroller=h}}_sizeHostElement(e){const i=e&&e.width!==null?Math.min(82e5,e.width):0,r=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${r}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=r?`${r}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:i,width:r,height:o,xOffset:n,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${t}px)`,r!==void 0&&(c.style.width=r+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=n===void 0?null:n+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(e){const{_first:t,_last:i,_firstVisible:r,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-r})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)==null?void 0:t[e])===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Ds({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ms({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){var t;if((t=this._layout)!=null&&t.measureChildren){for(const i of e)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function gp(s){const e=window.getComputedStyle(s);return{marginTop:ns(e.marginTop),marginRight:ns(e.marginRight),marginBottom:ns(e.marginBottom),marginLeft:ns(e.marginLeft)}}function ns(s){const e=s?parseFloat(s):NaN;return Number.isNaN(e)?0:e}function Xn(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const e=s.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function mp(s,e=!1){const t=[];let i=e?s:Xn(s);for(;i!==null;)t.push(i),i=Xn(i);return t}function vp(s,e=!1){let t=!1;return mp(s,e).filter(i=>{if(t)return!1;const r=getComputedStyle(i);return t=r.position==="fixed",r.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=s=>s,Pl=(s,e)=>u`${e}: ${JSON.stringify(s,null,2)}`;class bp extends up{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,i)=>Pl(t,i+this._first),this._keyFunction=(t,i)=>El(t,i+this._first),this._items=[],e.type!==ni.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)t.push(this._items[i]);return Xt(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);const i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?Fe:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){const r=e.parentNode;this._makeVirtualizer(r,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(r,o)=>t(r,o+this._first)),i&&(this._keyFunction=(r,o)=>i(r,o+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:r,items:o}=t;this._virtualizer=new fp({hostElement:e,layout:i,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,t){const i=e.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",r=>{this._first=r.first,this._last=r.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){var e;(e=this._virtualizer)==null||e.disconnected()}reconnected(){var e;(e=this._virtualizer)==null||e.connected()}}const xp=ai(bp);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ci extends G{constructor(){super(...arguments),this.items=[],this.renderItem=Pl,this.keyFunction=El,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){const{items:e,renderItem:t,keyFunction:i,layout:r,scroller:o}=this;return u`${xp({items:e,renderItem:t,keyFunction:i,layout:r,scroller:o})}`}element(e){var t;return(t=this[Er])==null?void 0:t.element(e)}get layoutComplete(){var e;return(e=this[Er])==null?void 0:e.layoutComplete}scrollToIndex(e,t="start"){var i;(i=this.element(e))==null||i.scrollIntoView({block:t})}}Vi([m({attribute:!1})],ci.prototype,"items",void 0);Vi([m()],ci.prototype,"renderItem",void 0);Vi([m()],ci.prototype,"keyFunction",void 0);Vi([m({attribute:!1})],ci.prototype,"layout",void 0);Vi([m({reflect:!0,type:Boolean})],ci.prototype,"scroller",void 0);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("lit-virtualizer",ci);const Tl=50;function Al(s,e){var i;const t=s.querySelector("lit-virtualizer");if(t){e>=0&&Promise.resolve(t.layoutComplete).then(()=>t.scrollToIndex(e,"nearest")).catch(()=>{});return}(i=s.querySelector(".option.active"))==null||i.scrollIntoView({block:"nearest"})}var yp=Object.defineProperty,Bs=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&yp(e,t,r),r},Qe;const Ki=(Qe=class extends $e{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>u` <div
      class="option ${e.value===this.value?"selected":""} ${t===this._activeIndex?"active":""}"
      role="option"
      aria-selected=${e.value===this.value}
      @mousedown=${i=>{i.preventDefault(),this._onSelect(e)}}
      @mouseenter=${()=>{this._activeIndex=t}}
    >
      ${e.label}
    </div>`}get _options(){var i,r;const e=((i=this.field)==null?void 0:i.possible_values)??Qe._EMPTY;if(((r=this._optionsCache)==null?void 0:r.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var r;const e=this._options,t=this.allowedValues;if(((r=this._selectableCache)==null?void 0:r.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>Al(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}_renderOptions(e){return e.length?e.length<=Tl?e.map(this._renderOption):u` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:u`<div class="empty">${P("noOptions","No options")}</div>`}render(){var i;const e=this._selectPlaceholder(),t=this._open?this._filtered:Qe._EMPTY;return u`
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
                aria-label=${P("clear","Clear")}
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
            <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
              <input
                class="search"
                type="text"
                placeholder=${P("search","Search")}
                aria-label=${P("filterOptions","Filter options")}
                .value=${this._search}
                @input=${this._onSearchInput}
              />
              <div class="options-list" role="presentation">${this._renderOptions(t)}</div>
            </div>
          `:v}
    `}},Qe.styles=[Hi,q`
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
    `],Qe._EMPTY=[],Qe);Bs([m({attribute:!1})],Ki.prototype,"allowedValues");Bs([T()],Ki.prototype,"_open");Bs([T()],Ki.prototype,"_search");Bs([T()],Ki.prototype,"_activeIndex");let _p=Ki;ie("sfx-meta-select-field",_p);var wp=Object.defineProperty,Ns=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&wp(e,t,r),r},et;const Yi=(et=class extends $e{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._optionsCache=null,this._selectableCache=null,this._renderOption=(e,t)=>{const i=this._selected;return u` <div
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
    </div>`}}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var i,r;const e=((i=this.field)==null?void 0:i.possible_values)??et._EMPTY;if(((r=this._optionsCache)==null?void 0:r.src)===e)return this._optionsCache.out;const t=e.map(o=>({id:o.internal_unique_value,label:o.label,value:o.internal_unique_value}));return this._optionsCache={src:e,out:t},t}get _selectableOptions(){var r;const e=this._options,t=this.allowedValues;if(((r=this._selectableCache)==null?void 0:r.opts)===e&&this._selectableCache.allowed===t)return this._selectableCache.out;let i;if(t===null)i=e;else{const o=new Set(t);i=e.filter(n=>o.has(n.value))}return this._selectableCache={opts:e,allowed:t,out:i},i}get _filtered(){const e=this._search.toLowerCase();return e?this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e)):this._selectableOptions}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(r=>r!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i),this._emit("field-blur",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t),this._emit("field-blur",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e),this._emit("field-blur",e)}_clearAll(){this.value=[],this._emit("field-change",[]),this._emit("field-blur",[])}_scrollActive(){this.updateComplete.then(()=>Al(this.renderRoot,this._activeIndex))}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}_renderOptions(e){return e.length?e.length<=Tl?e.map(this._renderOption):u` <lit-virtualizer
      role="presentation"
      .items=${e}
      .renderItem=${(t,i)=>this._renderOption(t,i)}
    ></lit-virtualizer>`:u`<div class="empty">${P("noOptions","No options")}</div>`}render(){var r;const e=this._selected,t=this._selectPlaceholder(),i=this._open?this._filtered:et._EMPTY;return u`
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
                    aria-label=${P("removeItem","Remove {{item}}",{item:this._labelFor(o)})}
                    @click=${n=>{n.stopPropagation(),this._remove(o)}}
                  >
                    &times;
                  </button>
                </span>`):u`<span class="placeholder"
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
                placeholder=${P("search","Search")}
                aria-label=${P("filterOptions","Filter options")}
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
                        ${P("selectAll","Select all")}
                      </button>
                      <button
                        type="button"
                        class="bulk-btn bulk-btn--muted"
                        @mousedown=${o=>{o.preventDefault(),this._clearAll()}}
                      >
                        ${P("clearAll","Clear all")}
                      </button>
                    </div>
                  `:v}
            </div>
          `:v}
    `}},et.styles=[Hi,mo,q`
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
    `],et._EMPTY=[],et);Ns([m({attribute:!1})],Yi.prototype,"allowedValues");Ns([T()],Yi.prototype,"_open");Ns([T()],Yi.prototype,"_search");Ns([T()],Yi.prototype,"_activeIndex");let kp=Yi;ie("sfx-meta-multi-select-field",kp);function wt(s,e){var t,i;return((t=s.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Rl(s){return s.trim().replace(/\s+/g," ")}function $p(s){return Rl(s).replace(/\s/g,"-")}function as(s){return{label:Rl(s),value:$p(s)}}var Sp=Object.defineProperty,di=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Sp(e,t,r),r};const Lo=class Lo extends $e{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,r;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!this.field){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(r=this.autocomplete)==null||r.search(this.field.ckey,t,o=>{this._results=o,this._loading=!1})}_addTag(e){if(this._tags.some(i=>wt(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!wt(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(as(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(as(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var o;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((o=this.field)==null?void 0:o.possible_values)??[]).map(n=>({value:n.api_value||n.internal_unique_value,label:n.label})).filter(n=>!t.some(a=>wt(a,n))).filter(n=>!e||n.label.toLowerCase().includes(e)),r=this._results.filter(n=>!t.some(a=>wt(a,n))&&!i.some(a=>wt(a,n)));return[...i,...r]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=as(e);return!this._tags.some(i=>wt(i,t))&&!this._suggestions.some(i=>wt(i,t))}render(){var r,o;const e=this._tags,t=this._suggestions,i=t.length;return u`
      <div
        class="container"
        @click=${()=>{var n;return(n=this.renderRoot.querySelector(".input"))==null?void 0:n.focus()}}
      >
        ${e.map(n=>u` <span class="chip">
              ${n.label}
              <button
                class="chip-x"
                aria-label=${P("removeItem","Remove {{item}}",{item:n.label})}
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
          aria-label=${((r=this.field)==null?void 0:r.title)??P("tags","Tags")}
          placeholder=${e.length?"":((o=this.field)==null?void 0:o.placeholder)||P("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput}
          @blur=${this._onBlur}
          @keydown=${this._onKeydown}
        />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?u`
            <div class="dropdown" role="listbox">
              ${this._loading?u`<div class="loading">${P("loading","Loading")}</div>`:v}
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
                    ${P("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
                  </div>`:v}
              ${!this._loading&&!t.length&&!this._canCreate?u`<div class="empty">${P("noResults","No results")}</div>`:v}
            </div>
          `:v}
    `}};Lo.styles=[mo,q`
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
    `];let it=Lo;di([m({attribute:!1})],it.prototype,"autocomplete");di([T()],it.prototype,"_query");di([T()],it.prototype,"_results");di([T()],it.prototype,"_loading");di([T()],it.prototype,"_dropdownOpen");di([T()],it.prototype,"_activeIndex");ie("sfx-meta-tags-field",it);var Cp=Object.defineProperty,Ol=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Cp(e,t,r),r};const kt=()=>[{label:P("booleanTrue","True"),value:"true"},{label:P("booleanFalse","False"),value:"false"}],Uo=class Uo extends $e{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=kt().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(kt().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,kt().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=kt().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<kt().length&&(e.preventDefault(),this._onSelect(kt()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return u`
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
                aria-label=${P("clear","Clear")}
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
            <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
              ${kt().map((r,o)=>u` <div
                    class="option ${r.value===e?"selected":""} ${o===this._activeIndex?"active":""}"
                    role="option"
                    aria-selected=${r.value===e}
                    @mousedown=${n=>{n.preventDefault(),this._onSelect(r)}}
                    @mouseenter=${()=>{this._activeIndex=o}}
                  >
                    ${r.label}
                  </div>`)}
            </div>
          `:v}
    `}};Uo.styles=[Hi];let Oi=Uo;Ol([T()],Oi.prototype,"_open");Ol([T()],Oi.prototype,"_activeIndex");ie("sfx-meta-boolean-field",Oi);const zo=class zo extends $e{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return u`
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
    `}};zo.styles=[Mt];let Pr=zo;ie("sfx-meta-number-field",Pr);const Do=class Do extends $e{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return u`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?u`<span class="date-placeholder">${P("pickADate","Pick a date")}</span>`:v}
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
    `}};Do.styles=[Mt,q`
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
    `];let Tr=Do;ie("sfx-meta-date-field",Tr);const Mo=class Mo extends $e{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,r={...this._geo,[e]:i};this.value=r,this._emit("field-change",r)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_renderInput(e,t){return u`
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
        ${this._renderInput("latitude",P("latitude","Latitude"))}
        ${this._renderInput("longitude",P("longitude","Longitude"))}
      </div>
    `}};Mo.styles=[Mt,q`
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
    `];let Ar=Mo;ie("sfx-meta-geo-point-field",Ar);var Ep=Object.defineProperty,Pp=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Ep(e,t,r),r};const Tp={horizontal:"50",vertical:"50"},Ap=kl(),Rp=u`<svg
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
</svg>`,jo=class jo extends $e{constructor(){super(...arguments),this.picking=!1,this._onZoneEnter=()=>this._emitDetail("field-hover",{hovering:!0}),this._onZoneLeave=()=>this._emitDetail("field-hover",{hovering:!1})}get _point(){const e=this.value;return{horizontal:(e==null?void 0:e.horizontal)??"",vertical:(e==null?void 0:e.vertical)??""}}get _hasValue(){const e=this._point;return e.horizontal!==""||e.vertical!==""}_onInput(e,t){const i=t.target.value,r={...this._point,[e]:i};this.value=r,this._emit("field-change",r)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._point)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}_onTogglePicking(){this._emitDetail("focus-point-pick-toggle",{picking:!this.picking})}_onResetToCenter(){this.value={...Tp},this._emit("field-change",this.value),this._emit("field-blur",this.value)}_renderInput(e,t){return u`
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
    `}render(){const e=this.picking?P("focusPointPicking","Picking on image"):this._hasValue?P("focusPointChange","Change the point"):P("focusPointSet","Set focal point");return u`
      <div class="grid">
        ${this._renderInput("horizontal",P("focusPointHorizontal","Horizontal"))}
        ${this._renderInput("vertical",P("focusPointVertical","Vertical"))}
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
          ${this.picking?Rp:Ap}
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
              <span class="action-label">${P("focusPointResetCenter","Reset to center")}</span>
            </button>`:v}
      </div>

      ${this.picking?u`<div class="hint">
            ${P("focusPointPickingHint","Click the image preview to place the focus point.")}
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
    `];let Ps=jo;Pp([m({type:Boolean})],Ps.prototype,"picking");ie(Ku,Ps);var Op=Object.defineProperty,He=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Op(e,t,r),r};const qt={uuid:"__root__",name:"",ltree:""},Bo=class Bo extends $e{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[qt],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var r,o,n;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((r=this.field)==null?void 0:r.ckey)??((o=this.field)==null?void 0:o.key)}" model:`,(n=this.field)==null?void 0:n.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[qt];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[qt];const i=t.slice(0,-1),o=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),n=[qt];let a="";for(let l=0;l<i.length;l++)a=a?`${a}.${i[l]}`:i[l],n.push({uuid:`__seed_${a}`,name:o[l]??i[l],ltree:a});return n}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,r=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=r.nodes,this._loading=!1;const o=this._selectedScalar,n=o?this._currentNodes.findIndex(a=>a.uuid===o||a.slug===o):-1;this._activeIndex=n,n>=0&&this._scrollActive()}_onSearchInput(e){var r;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(r=this.taxonomyService)==null||r.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,o=>{i===this._searchSeq&&(this._searchResults=o,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(r=>r.uuid!==qt.uuid).map(r=>r.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,r;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(r=this.renderRoot.querySelector(".trigger"))==null||r.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const o=this._currentNodes[this._activeIndex];o.children.count_direct>0&&(e.preventDefault(),this._drillInto(o))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const o=this._searchResults[this._activeIndex];o&&this._selectAutocomplete(o)}else{const o=this._currentNodes[this._activeIndex];o&&this._selectTreeNode(o)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?v:u`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const r=i===e.length-1,o=t.uuid===qt.uuid?P("rootNode","Root"):t.name;return u`
            ${i>0?u`<span class="crumb-sep">›</span>`:v}
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
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return u`<div class="empty">${P("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return u`<div class="empty">${P("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return u`<div class="empty">${P("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return u`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const r=t.children.count_direct>0,o=!!e&&(e===t.uuid||e===t.slug);return u`
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
                aria-label=${P("selectNode","Select {{node}}",{node:t.name})}
                @click=${n=>{n.stopPropagation(),this._selectTreeNode(t)}}
              ></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${r?u`<span class="tree-count" aria-hidden="true"
                    >(${t.children.count_direct})</span
                  >`:v}
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
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?u`<div class="empty">${P("loading","Loading")}</div>`:this._searchResults.length===0?u`<div class="empty">${P("noResults","No results")}</div>`:u`
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
    `}render(){var r;if(!this._taxonomySuid)return u`<div class="misconfigured" role="alert">
        ${P("missingTaxonomyConfig","Field is missing taxonomy config")}
      </div>`;const e=this._selectPlaceholder(P("selectANode","Select a node")),t=this._displayPath,i=!!t;return u`
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
              >${((r=this.field)==null?void 0:r.placeholder)||e}</span
            >`}
        ${i&&!this.disabled?u`
              <span
                class="trigger-clear"
                role="button"
                tabindex="0"
                aria-label=${P("clear","Clear")}
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
                aria-label=${P("searchTaxonomy","Search taxonomy")}
                placeholder=${P("search","Search")}
                .value=${this._query}
                @input=${this._onSearchInput}
              />
              ${this._isSearchMode?v:this._renderBreadcrumb()}
              ${this._isSearchMode?this._renderSearch():this._renderTree()}
            </div>
          `:v}
    `}};Bo.styles=[Hi,q`
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
    `];let Pe=Bo;He([m({attribute:!1})],Pe.prototype,"taxonomyService");He([m({attribute:!1})],Pe.prototype,"entry");He([T()],Pe.prototype,"_open");He([T()],Pe.prototype,"_query");He([T()],Pe.prototype,"_drillStack");He([T()],Pe.prototype,"_currentNodes");He([T()],Pe.prototype,"_searchResults");He([T()],Pe.prototype,"_loading");He([T()],Pe.prototype,"_activeIndex");He([T()],Pe.prototype,"_resolvedTaxonomyUuid");He([T()],Pe.prototype,"_taxonomyResolutionFailed");ie("sfx-meta-taxonomy-node-field",Pe);var Ip=Object.defineProperty,We=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Ip(e,t,r),r};const Fp=(s,e)=>!!(e.uuid&&s.uuid===e.uuid||e.sid&&s.sid===e.sid||e.slug&&s.slug===e.slug),No=class No extends $e{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set,this._resolvedLookup={bySid:{},bySlug:{}}}get _items(){if(!Array.isArray(this.value))return[];const e=this.value.map(t=>typeof t=="string"?ku(t)?{sid:t}:{slug:t}:t);return Eu(e,this._resolvedLookup)}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichMissingLabels()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichMissingLabels()}async _maybeEnrichMissingLabels(){const e=this.ultratags;if(!e)return;const t=this._items;if(t.length===0)return;const i=[],r=[];for(const n of t)n.i18n||(n.sid?this._enrichmentAttempted.has(n.sid)||i.push(n.sid):n.slug&&!this._enrichmentAttempted.has(n.slug)&&r.push(n.slug));if(i.length===0&&r.length===0)return;for(const n of[...i,...r])this._enrichmentAttempted.add(n);const o=[];if(i.length>0)try{const n=await e.getBySids({sids:i,format:ss});o.push(...n.items||[])}catch{}if(r.length>0)if(e.getBySlugs)try{const n=await e.getBySlugs({slugs:r,format:ss});o.push(...n.items||[])}catch{}else for(const n of r)try{const l=((await e.list({q:n,limit:Kn,format:ss})).items||[]).find(c=>c.slug===n);l&&o.push(l)}catch{}o.length!==0&&(this._resolvedLookup=Cu(this._resolvedLookup,Su(o)))}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return Cs(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=o=>!!o.uuid&&e.has(o.uuid)||!!o.sid&&e.has(o.sid)||e.has(o.slug),r=(this._isRestricted?this._restrictedEntries:this._results).filter(o=>!t(o)).map(o=>({entry:o,label:Cs(o,this._currentLang,this._defaultLang).value||o.slug}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?r.filter(n=>n.label.toLowerCase().includes(o)):r}return r}get _isSearching(){return this._query.trim().length>=Vn}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=Yn(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(r=>r.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var o,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((o=this.field)!=null&&o.key)){this._results=[],this._loading=!1,(n=this.ultratags)==null||n.cancel();return}const i=this.ultratags;if(!i)return;const r=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:r,limit:Kn,format:ss}).then(a=>{this._query.trim().toLowerCase()===r&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===r&&(this._results=[],this._loading=!1)})}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var r;(r=this.renderRoot.querySelector(".input"))==null||r.focus()})}async _createFromQuery(){var o,n;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((o=this.field)!=null&&o.key))return;const i=Yn(e);if(!i)return;const r=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:_u.UPSERT,items:[{slug:i,i18n:{[r]:e}}]}),l=(n=a==null?void 0:a.output)==null?void 0:n[0],c={slug:(l==null?void 0:l.slug)||i,sid:l==null?void 0:l.sid,uuid:l==null?void 0:l.uuid,i18n:(l==null?void 0:l.i18n)||{[r]:e}};if(this._entryAlreadySelected({uuid:c.uuid||"",sid:c.sid,slug:c.slug||i}))return;const d=[...this._items,c];this.value=d,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",d),this.updateComplete.then(()=>{var p;(p=this.renderRoot.querySelector(".input"))==null||p.focus()})}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!Fp(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var n,a;const e=this._items,t=this._dropdownOptions,i=t.length,r=this._query.trim(),o=((n=this.field)==null?void 0:n.placeholder)||(this._isRestricted?P("searchTagsToRemove","Search tags to remove"):P("addCustomTags","Add custom tags"));return u`
      <div
        class="container"
        @click=${()=>{var l;return(l=this.renderRoot.querySelector(".input"))==null?void 0:l.focus()}}
      >
        ${e.map(l=>{const c=this._labelForItem(l);return l.uuid||l.sid||l.slug,u` <span class="chip" title=${c}>
            ${c}
            <button
              class="chip-x"
              aria-label=${P("removeItem","Remove {{item}}",{item:c})}
              @click=${d=>{d.stopPropagation(),this._removeItem(l)}}
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
          aria-label=${((a=this.field)==null?void 0:a.title)??P("customTags","Custom tags")}
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
                    ${P("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:Vn})}
                  </div>`:v}
              ${!this._isRestricted&&this._isSearching&&this._loading?u`<div class="loading">${P("loading","Loading")}</div>`:v}
              ${this._isRestricted||this._isSearching&&!this._loading?t.map((l,c)=>u` <div
                        class="option ${c===this._activeIndex?"active":""}"
                        role="option"
                        @mousedown=${d=>{d.preventDefault(),this._addEntry(l.entry)}}
                        @mouseenter=${()=>{this._activeIndex=c}}
                      >
                        ${l.label}
                      </div>`):v}
              ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?u`<div class="empty">${P("noResults","No results")}</div>`:v}
              ${this._canCreate?u` <div
                    class="option create ${i===this._activeIndex?"active":""}"
                    @mousedown=${l=>{l.preventDefault(),this._createFromQuery()}}
                    @mouseenter=${()=>{this._activeIndex=i}}
                  >
                    ${P("createTag","Create '{{tag}}'",{tag:r})}
                  </div>`:v}
            </div>
          `:v}
    `}};No.styles=[mo,q`
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
    `];let Ue=No;We([m({attribute:!1})],Ue.prototype,"ultratags");We([m({attribute:!1})],Ue.prototype,"language");We([m({attribute:!1})],Ue.prototype,"defaultLanguage");We([m({attribute:!1})],Ue.prototype,"restrictToItems");We([T()],Ue.prototype,"_query");We([T()],Ue.prototype,"_results");We([T()],Ue.prototype,"_loading");We([T()],Ue.prototype,"_dropdownOpen");We([T()],Ue.prototype,"_activeIndex");We([T()],Ue.prototype,"_resolvedLookup");ie("sfx-meta-ultratags-field",Ue);const bo=()=>P("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Il=u`
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${Z`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,qo=class qo extends G{constructor(){super(...arguments),this._i18nController=new Ge(this)}render(){const e=bo();return u`
      <div class="unsupported" title=${e} aria-label=${e} aria-disabled="true" role="note">
        ${Il}
        <span class="unsupported-text" aria-hidden="true"
          >${P("notEditableDuringUpload","Not editable during upload")}</span
        >
      </div>
    `}};qo.styles=q`
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
  `;let Rr=qo;ie("sfx-meta-unsupported-field",Rr);var Lp=Object.defineProperty,Ve=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Lp(e,t,r),r};const Ho=class Ho extends G{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(Ni(e))return u`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return u`<sfx-meta-text-field
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
        ></sfx-meta-text-field>`}}};Ho.styles=q`
    :host {
      display: block;
    }
  `;let Te=Ho;Ve([m({attribute:!1})],Te.prototype,"field");Ve([m({attribute:!1})],Te.prototype,"value");Ve([m({attribute:!1})],Te.prototype,"autocomplete");Ve([m({attribute:!1})],Te.prototype,"taxonomyService");Ve([m({attribute:!1})],Te.prototype,"taxonomyEntry");Ve([m({attribute:!1})],Te.prototype,"ultratags");Ve([m({attribute:!1})],Te.prototype,"language");Ve([m({attribute:!1})],Te.prototype,"defaultLanguage");Ve([m({attribute:!1})],Te.prototype,"ultratagsRestrictToItems");Ve([m({attribute:!1})],Te.prototype,"allowedValues");Ve([m({type:Boolean})],Te.prototype,"disabled");ie("sfx-metadata-field-edit",Te);var Up=Object.defineProperty,Gi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Up(e,t,r),r};const Vo=class Vo extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.taxonomyEntry=null}_formatValue(){var i,r,o,n;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(r=this.field.possible_values)==null?void 0:r.find(l=>l.internal_unique_value===e||l.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var c;const l=(c=this.field.possible_values)==null?void 0:c.find(d=>d.internal_unique_value===a||d.api_value===a);return(l==null?void 0:l.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",l=this.defaultLanguage||a;return e.map(c=>typeof c=="string"?c:Cs({i18n:c.i18n,slug:c.slug||""},a,l).value||c.slug||c.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(o=this.taxonomyEntry)!=null&&o.path?this.taxonomyEntry.path:(n=this.taxonomyEntry)!=null&&n.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"focus-point":{const a=e;return!a||a.horizontal===""||a.horizontal==null||a.vertical===""||a.vertical==null?"":`${a.horizontal}% × ${a.vertical}%`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&Ni(this.field))return u`
        <div class="value empty" title=${bo()}>
          ${P("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?u`
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
      `:u`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Vo.styles=q`
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
  `;let ht=Vo;Gi([m({attribute:!1})],ht.prototype,"field");Gi([m({attribute:!1})],ht.prototype,"value");Gi([m({attribute:!1})],ht.prototype,"taxonomyEntry");Gi([m({attribute:!1})],ht.prototype,"language");Gi([m({attribute:!1})],ht.prototype,"defaultLanguage");ie("sfx-metadata-field-view",ht);var zp=Object.defineProperty,qs=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&zp(e,t,r),r};const Ko=class Ko extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const r of t.variants)e.push({groupUuid:t.uuid,value:r.api_value,label:r.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var r;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const o of t){const n=this.selectedFilters[o.uuid]??((r=o.variants[0])==null?void 0:r.api_value),a=o.variants.find(l=>l.api_value===n);a&&i.push(t.length===1?a.label:`${o.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return v;const t=this._options,i=P("regionalFiltersDropdownLabel","Regional settings"),r=this._triggerSummary(i);return u`
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
      ${this._open?u`
            <div class="dropdown" role="listbox" aria-label=${i}>
              ${t.map((o,n)=>this._renderOption(o,n,o.value===this.selectedFilters[o.groupUuid]))}
            </div>
          `:v}
    `}_renderOption(e,t,i){const r=this._activeIndex===t;return u`
      ${e.isGroupStart?u`<div class="group-header">${e.groupLabel}</div>`:v}
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
    `}};Ko.styles=[Hi,q`
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
    `];let Ft=Ko;qs([m({attribute:!1})],Ft.prototype,"groups");qs([m({attribute:!1})],Ft.prototype,"selectedFilters");qs([T()],Ft.prototype,"_open");qs([T()],Ft.prototype,"_activeIndex");ie("sfx-regional-settings",Ft);const xo="system.tags",Dp="__tags__";function Or(s){return s===xo}function Mp(s){return{key:xo,ckey:"",uuid:"system-tags",title:s("tagsLabel","Tags"),type:"tags",placeholder:s("addTags","Add tags"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}}function Jm(s,e){const t=Mp(e);let i=!1,r=s.groups.map(a=>!i&&a.isRoot?(i=!0,{...a,fields:[...a.fields,t]}):a);i||(r=[{uuid:Dp,isRoot:!0,name:e("generalFieldsLabel","General"),fields:[t]},...r]);const o=r.flatMap(a=>a.fields),n=new Map(o.map(a=>[a.key,a]));return{...s,groups:r,fields:o,fieldsByKey:n}}var jp=Object.defineProperty,Wi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&jp(e,t,r),r};const Bp=(s,e)=>typeof e=="string"?e:s,Yo=class Yo extends G{constructor(){super(...arguments),this.product={},this.disabled=!1,this.t=Bp,this._collapsed=!1,this._errors={}}willUpdate(e){e.has("product")&&(this._errors={})}_toggle(){this._collapsed=!this._collapsed}_emit(e,t){this.dispatchEvent(new CustomEvent("product-blur",{detail:{key:e,value:t},bubbles:!0,composed:!0}))}_clearError(e){if(!this._errors[e])return;const t={...this._errors};delete t[e],this._errors=t}_onRefInput(){this._clearError("ref")}_onRefBlur(e){const t=e.target.value,i=Fu(t);if(i){this._errors={...this._errors,ref:i};return}this._clearError("ref"),this._emit("ref",t===""?void 0:t)}_onPositionInput(){this._clearError("position")}_onPositionBlur(e){const t=e.target.value,i=Lu(t);if(i){this._errors={...this._errors,position:i};return}this._clearError("position"),t===""||t==null?this._emit("position",void 0):this._emit("position",Number(t))}_onKeydown(e){var t,i;if(e.key==="Enter")e.target.blur();else if(e.key==="Escape"){const r=e.target,o=r.dataset.key;o==="ref"&&(r.value=((t=this.product)==null?void 0:t.ref)??""),o==="position"&&(r.value=((i=this.product)==null?void 0:i.position)==null?"":String(this.product.position)),o&&this._clearError(o),r.blur()}}_renderRow(e,t,i){const r=this._errors[e],o=r?this.t(r,r):"";return u`
      <div class="field-row">
        <div class="field-label" id="label-product-${e}">
          <span class="field-label-text">${t}</span>
        </div>
        <div class="field-content">
          ${i}
          ${r?u`<div class="field-error" role="alert">${o}</div>`:v}
        </div>
      </div>
    `}render(){var r,o;const e=!this._collapsed,t=((r=this.product)==null?void 0:r.ref)??"",i=((o=this.product)==null?void 0:o.position)==null?"":String(this.product.position);return u`
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
    `}};Yo.styles=[Mt,Sl,q`
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
    `];let ft=Yo;Wi([m({attribute:!1})],ft.prototype,"product");Wi([m({type:Boolean})],ft.prototype,"disabled");Wi([m({attribute:!1})],ft.prototype,"t");Wi([T()],ft.prototype,"_collapsed");Wi([T()],ft.prototype,"_errors");ie("sfx-product-fields-form",ft);const Zn={text:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${Z`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"focus-point":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><line x1="8" y1="4.5" x2="8" y2="6.5"/><line x1="8" y1="9.5" x2="8" y2="11.5"/><line x1="3.5" y1="8" x2="5.5" y2="8"/><line x1="10.5" y1="8" x2="12.5" y2="8"/><circle cx="8" cy="8" r="1.25"/>`}
  </svg>`,"integer-list":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${Z`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  >
    ${Z`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":u`<svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${Z`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Np(s){return Zn[s]??Zn.text}function qp(s,e,t){let r=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(r+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return r}function Hp(s,e){const t=new XMLHttpRequest;let i=!1;const r=qp(e.apiBase,e.folder,e.extraParams);t.open("POST",r);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):ii(n)?e.onComplete(oo(n,s)):e.onError(new Error(Ss(n,`Upload failed (HTTP ${t.status})`)))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const o=new FormData;if(s.file){const n={name:s.name,type:s.type};o.append("info[files[]]",JSON.stringify(n)),Object.keys(s.meta).length>0&&o.append("meta[files[]]",JSON.stringify(s.meta)),s.tags.length>0&&o.append("tags[files[]]",JSON.stringify(s.tags)),uo(s.product)&&o.append("product[files[]]",JSON.stringify(po(s.product))),o.append("files[]",s.file,s.name)}return t.send(o),{abort(){i=!0,t.abort()}}}function Hs(s){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":s}}function bt(s){return s.replace(/\/+$/,"")}const Vp={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Ji(s){return Vp[s]??s}function Xm(s,e){const t=bt(s),i=btoa(JSON.stringify({origin:window.location.origin})),r=Ji(e);return`${t}/${r}/connect?state=${encodeURIComponent(i)}`}async function Kp(s,e,t,i="",r){const o=bt(s),n=i?`/${i}`:"",a=Ji(e),l=await fetch(`${o}/${a}/list${n}`,{method:"GET",headers:Hs(t),credentials:"same-origin",signal:r});if(l.status===401)throw new yo;if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Yp(s,e,t,i){const r=bt(s),o=await fetch(`${r}/${t}`,{method:"GET",headers:Hs(e),credentials:"same-origin",signal:i});if(o.status===401)throw new yo;if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${o.status})`)}return o.json()}async function Zm(s,e,t,i,r,o){const n=[];async function a(l,c){let d=null,p=!0;do{if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");const h=p?await Kp(s,e,t,l,o):await Yp(s,t,d,o);p=!1,d=h.nextPagePath;for(const f of h.items){if(o!=null&&o.aborted)throw new DOMException("Aborted","AbortError");if(f.isFolder){const _=c?`${c}/${f.name}`:f.name;await a(f.requestPath,_)}else n.push({...f,relativeFolder:c})}}while(d)}return await a(i,r),n}async function Qm(s,e,t,i){const r=bt(s),o=Ji(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${r}/search/${o}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function Gp(s,e,t,i,r,o=!1){const n=bt(s),a=Ji(e),l=o?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,c=o?{Accept:"application/json","Content-Type":"application/json"}:Hs(t),d=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...r,httpMethod:r.httpMethod??"POST",useFormData:r.useFormData??!0,fieldname:r.fieldname??"files[]"})});if(d.status===401)throw new yo;if(!d.ok){const p=await d.json().catch(()=>null);throw new Error((p==null?void 0:p.message)||`Companion upload failed (HTTP ${d.status})`)}return d.json()}async function Wp(s,e,t){const i=bt(s),r=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!r.ok){const o=await r.json().catch(()=>null);throw new Error((o==null?void 0:o.message)||`Could not fetch URL metadata (HTTP ${r.status})`)}return r.json()}async function Jp(s,e,t,i){const r=bt(s),o=await fetch(`${r}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${o.status})`)}return o.json()}async function ev(s,e,t){const i=bt(s),r=Ji(e),o=await fetch(`${i}/${r}/logout`,{method:"GET",headers:Hs(t),credentials:"same-origin"});return o.ok?o.json():{ok:!1,revoked:!1}}function Xp(s){var r;const t=((r=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(s))==null?void 0:r[1])??s;return`${/^https:\/\//i.test(s)?"wss":"ws"}://${t}`}class yo extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Fl(s,e,t){let r=`${s.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[o,n]of Object.entries(t))n!=null&&(r+=`&${encodeURIComponent(o)}=${encodeURIComponent(n)}`);return r}function Ll(s,e){const t={name:s.name,type:s.type,"filerobot-folder":e};return s.meta&&Object.keys(s.meta).length>0&&(t.meta=JSON.stringify(s.meta)),s.tags&&s.tags.length>0&&(t.tags=JSON.stringify(s.tags)),uo(s.product)&&(t.product=JSON.stringify(po(s.product))),t}function Ul(s){const t=`${Xp(s.companionUrl)}/api/${s.token}`;let i;try{i=new WebSocket(t)}catch{return s.onError(new Error("Failed to connect to upload progress channel")),null}let r=!1;const o=()=>{r=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,c;if(!r)try{const d=JSON.parse(n.data);switch(d.action){case"progress":{const p=d.payload,h=p.bytesUploaded??0,f=p.bytesTotal??(s.expectedSize||1);s.onProgress(h,f);break}case"success":{const p=d.payload;if(o(),i.close(),(a=p.response)!=null&&a.responseText)try{const h=JSON.parse(p.response.responseText);if(h.status==="success"){s.onComplete(h);return}if(ii(h)){s.onComplete(oo(h,s.uploadFile));return}s.onError(new Error(Ss(h,"Upload failed")));return}catch{}s.onError(new Error("Upload completed but no valid response received"));break}case"error":{const p=d.payload;o(),i.close();let h=((l=p.error)==null?void 0:l.message)||"Upload failed";if((c=p.response)!=null&&c.responseText)try{const f=JSON.parse(p.response.responseText);h=Ss(f,h)}catch{}s.onError(new Error(h));break}}}catch{}},i.onerror=()=>{r||(o(),s.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{r||(o(),s.onError(new Error("Upload progress connection closed unexpectedly")))},i}function zl(s){if(s){s.onmessage=null,s.onerror=null,s.onclose=null;try{s.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}s.close()}}async function Zp(s,e,t,i,r,o,n){const a=s.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:t,endpoint:i,headers:r,size:o,metadata:n})});if(!l.ok){const c=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${c}`)}return l.json()}function Qp(s,e){const t=s.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,r=null;const o=Fl(e.apiBase,e.folder,e.extraParams),n=Ll(s,e.folder);return(t.pickerAccessToken?Zp(t.companionUrl,t.pickerAccessToken,t.fileId,o,e.authHeaders,t.size,n):Gp(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:o,headers:e.authHeaders,size:t.size,metadata:n},!t.token)).then(l=>{i||(r=Ul({companionUrl:t.companionUrl,token:l.token,uploadFile:s,expectedSize:t.size,onProgress:(c,d)=>{i||e.onProgress(c,d)},onComplete:c=>{i||e.onComplete(c)},onError:c=>{i||e.onError(c)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,zl(r),r=null}}}function eh(s,e){const t=s.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,r=null;const o=new AbortController,n=Fl(e.apiBase,e.folder,e.extraParams);return Wp(e.companionUrl,t,o.signal).then(a=>{var c;if(i)return null;(c=e.onMeta)==null||c.call(e,{name:a.name,type:a.type,size:a.size});const l=Ll(s,e.folder);return a.name&&!s.nameIsUserDefined&&(l.name=a.name),a.type&&(l.type=a.type),Jp(e.companionUrl,t,{fileId:s.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},o.signal).then(d=>({result:d,size:a.size}))}).then(a=>{i||!a||(r=Ul({companionUrl:e.companionUrl,token:a.result.token,uploadFile:s,expectedSize:a.size,onProgress:(l,c)=>{i||e.onProgress(l,c)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,o.abort(),zl(r),r=null}}}function Ir(s){"@babel/helpers - typeof";return Ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ir(s)}function th(s,e,t){return Object.defineProperty(s,"prototype",{writable:!1}),s}function ih(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function sh(s,e,t){return e=Fi(e),rh(s,_o()?Reflect.construct(e,t||[],Fi(s).constructor):e.apply(s,t))}function rh(s,e){if(e&&(Ir(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oh(s)}function oh(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function nh(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Ii(s,e)}function Fr(s){var e=typeof Map=="function"?new Map:void 0;return Fr=function(i){if(i===null||!lh(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return ah(i,arguments,Fi(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ii(r,i)},Fr(s)}function ah(s,e,t){if(_o())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(s.bind.apply(s,i));return t&&Ii(r,t.prototype),r}function _o(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_o=function(){return!!s})()}function lh(s){try{return Function.toString.call(s).indexOf("[native code]")!==-1}catch{return typeof s=="function"}}function Ii(s,e){return Ii=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ii(s,e)}function Fi(s){return Fi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Fi(s)}var bi=(function(s){function e(t){var i,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(ih(this,e),i=sh(this,e,[t]),i.originalRequest=o,i.originalResponse=n,i.causingError=r,r!=null&&(t+=", caused by ".concat(r.toString())),o!=null){var a=o.getHeader("X-Request-ID")||"n/a",l=o.getMethod(),c=o.getURL(),d=n?n.getStatus():"n/a",p=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(c,", response code: ").concat(d,", response text: ").concat(p,", request id: ").concat(a,")")}return i.message=t,i}return nh(e,s),th(e)})(Fr(Error));function Li(s){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Li(s)}function ch(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function dh(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,ph(i.key),i)}}function uh(s,e,t){return e&&dh(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function ph(s){var e=hh(s,"string");return Li(e)=="symbol"?e:e+""}function hh(s,e){if(Li(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Li(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var fh=(function(){function s(){ch(this,s)}return uh(s,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Dl="3.7.8",gh=Dl,ui=typeof Buffer=="function",Qn=typeof TextDecoder=="function"?new TextDecoder:void 0,ea=typeof TextEncoder=="function"?new TextEncoder:void 0,mh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",xi=Array.prototype.slice.call(mh),ls=(s=>{let e={};return s.forEach((t,i)=>e[t]=i),e})(xi),vh=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,fe=String.fromCharCode.bind(String),ta=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):s=>new Uint8Array(Array.prototype.slice.call(s,0)),Ml=s=>s.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),jl=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),Bl=s=>{let e,t,i,r,o="";const n=s.length%3;for(let a=0;a<s.length;){if((t=s.charCodeAt(a++))>255||(i=s.charCodeAt(a++))>255||(r=s.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|r,o+=xi[e>>18&63]+xi[e>>12&63]+xi[e>>6&63]+xi[e&63]}return n?o.slice(0,n-3)+"===".substring(n):o},wo=typeof btoa=="function"?s=>btoa(s):ui?s=>Buffer.from(s,"binary").toString("base64"):Bl,Lr=ui?s=>Buffer.from(s).toString("base64"):s=>{let t=[];for(let i=0,r=s.length;i<r;i+=4096)t.push(fe.apply(null,s.subarray(i,i+4096)));return wo(t.join(""))},fs=(s,e=!1)=>e?Ml(Lr(s)):Lr(s),bh=s=>{if(s.length<2){var e=s.charCodeAt(0);return e<128?s:e<2048?fe(192|e>>>6)+fe(128|e&63):fe(224|e>>>12&15)+fe(128|e>>>6&63)+fe(128|e&63)}else{var e=65536+(s.charCodeAt(0)-55296)*1024+(s.charCodeAt(1)-56320);return fe(240|e>>>18&7)+fe(128|e>>>12&63)+fe(128|e>>>6&63)+fe(128|e&63)}},xh=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Nl=s=>s.replace(xh,bh),ia=ui?s=>Buffer.from(s,"utf8").toString("base64"):ea?s=>Lr(ea.encode(s)):s=>wo(Nl(s)),ei=(s,e=!1)=>e?Ml(ia(s)):ia(s),sa=s=>ei(s,!0),yh=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,_h=s=>{switch(s.length){case 4:var e=(7&s.charCodeAt(0))<<18|(63&s.charCodeAt(1))<<12|(63&s.charCodeAt(2))<<6|63&s.charCodeAt(3),t=e-65536;return fe((t>>>10)+55296)+fe((t&1023)+56320);case 3:return fe((15&s.charCodeAt(0))<<12|(63&s.charCodeAt(1))<<6|63&s.charCodeAt(2));default:return fe((31&s.charCodeAt(0))<<6|63&s.charCodeAt(1))}},ql=s=>s.replace(yh,_h),Hl=s=>{if(s=s.replace(/\s+/g,""),!vh.test(s))throw new TypeError("malformed base64.");s+="==".slice(2-(s.length&3));let e,t,i,r=[];for(let o=0;o<s.length;)e=ls[s.charAt(o++)]<<18|ls[s.charAt(o++)]<<12|(t=ls[s.charAt(o++)])<<6|(i=ls[s.charAt(o++)]),t===64?r.push(fe(e>>16&255)):i===64?r.push(fe(e>>16&255,e>>8&255)):r.push(fe(e>>16&255,e>>8&255,e&255));return r.join("")},ko=typeof atob=="function"?s=>atob(jl(s)):ui?s=>Buffer.from(s,"base64").toString("binary"):Hl,Vl=ui?s=>ta(Buffer.from(s,"base64")):s=>ta(ko(s).split("").map(e=>e.charCodeAt(0))),Kl=s=>Vl(Yl(s)),wh=ui?s=>Buffer.from(s,"base64").toString("utf8"):Qn?s=>Qn.decode(Vl(s)):s=>ql(ko(s)),Yl=s=>jl(s.replace(/[-_]/g,e=>e=="-"?"+":"/")),Ur=s=>wh(Yl(s)),kh=s=>{if(typeof s!="string")return!1;const e=s.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Gl=s=>({value:s,enumerable:!1,writable:!0,configurable:!0}),Wl=function(){const s=(e,t)=>Object.defineProperty(String.prototype,e,Gl(t));s("fromBase64",function(){return Ur(this)}),s("toBase64",function(e){return ei(this,e)}),s("toBase64URI",function(){return ei(this,!0)}),s("toBase64URL",function(){return ei(this,!0)}),s("toUint8Array",function(){return Kl(this)})},Jl=function(){const s=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Gl(t));s("toBase64",function(e){return fs(this,e)}),s("toBase64URI",function(){return fs(this,!0)}),s("toBase64URL",function(){return fs(this,!0)})},$h=()=>{Wl(),Jl()},Sh={version:Dl,VERSION:gh,atob:ko,atobPolyfill:Hl,btoa:wo,btoaPolyfill:Bl,fromBase64:Ur,toBase64:ei,encode:ei,encodeURI:sa,encodeURL:sa,utob:Nl,btou:ql,decode:Ur,isValid:kh,fromUint8Array:fs,toUint8Array:Kl,extendString:Wl,extendUint8Array:Jl,extendBuiltins:$h};var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ch(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cr,oa;function Eh(){return oa||(oa=1,cr=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),cr}var cs={},na;function Ph(){if(na)return cs;na=1;var s=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function r(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},c;c=a.exec(n);){var d=t(c[1]),p=t(c[2]);d===null||p===null||d in l||(l[d]=p)}return l}function o(n,a){a=a||"";var l=[],c,d;typeof a!="string"&&(a="?");for(d in n)if(s.call(n,d)){if(c=n[d],!c&&(c===null||c===e||isNaN(c))&&(c=""),d=i(d),c=i(c),d===null||c===null)continue;l.push(d+"="+c)}return l.length?a+l.join("&"):""}return cs.stringify=o,cs.parse=r,cs}var dr,aa;function Th(){if(aa)return dr;aa=1;var s=Eh(),e=Ph(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,o=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(k){return(k||"").toString().replace(t,"")}var c=[["#","hash"],["?","query"],function(C,x){return h(x.protocol)?C.replace(/\\/g,"/"):C},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function p(k){var C;typeof window<"u"?C=window:typeof ra<"u"?C=ra:typeof self<"u"?C=self:C={};var x=C.location||{};k=k||x;var w={},O=typeof k,A;if(k.protocol==="blob:")w=new g(unescape(k.pathname),{});else if(O==="string"){w=new g(k,{});for(A in d)delete w[A]}else if(O==="object"){for(A in k)A in d||(w[A]=k[A]);w.slashes===void 0&&(w.slashes=r.test(k.href))}return w}function h(k){return k==="file:"||k==="ftp:"||k==="http:"||k==="https:"||k==="ws:"||k==="wss:"}function f(k,C){k=l(k),k=k.replace(i,""),C=C||{};var x=n.exec(k),w=x[1]?x[1].toLowerCase():"",O=!!x[2],A=!!x[3],U=0,z;return O?A?(z=x[2]+x[3]+x[4],U=x[2].length+x[3].length):(z=x[2]+x[4],U=x[2].length):A?(z=x[3]+x[4],U=x[3].length):z=x[4],w==="file:"?U>=2&&(z=z.slice(2)):h(w)?z=x[4]:w?O&&(z=z.slice(2)):U>=2&&h(C.protocol)&&(z=x[4]),{protocol:w,slashes:O||h(w),slashesCount:U,rest:z}}function _(k,C){if(k==="")return C;for(var x=(C||"/").split("/").slice(0,-1).concat(k.split("/")),w=x.length,O=x[w-1],A=!1,U=0;w--;)x[w]==="."?x.splice(w,1):x[w]===".."?(x.splice(w,1),U++):U&&(w===0&&(A=!0),x.splice(w,1),U--);return A&&x.unshift(""),(O==="."||O==="..")&&x.push(""),x.join("/")}function g(k,C,x){if(k=l(k),k=k.replace(i,""),!(this instanceof g))return new g(k,C,x);var w,O,A,U,z,H,Y=c.slice(),de=typeof C,D=this,le=0;for(de!=="object"&&de!=="string"&&(x=C,C=null),x&&typeof x!="function"&&(x=e.parse),C=p(C),O=f(k||"",C),w=!O.protocol&&!O.slashes,D.slashes=O.slashes||w&&C.slashes,D.protocol=O.protocol||C.protocol||"",k=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||a.test(k))||!O.slashes&&(O.protocol||O.slashesCount<2||!h(D.protocol)))&&(Y[3]=[/(.*)/,"pathname"]);le<Y.length;le++){if(U=Y[le],typeof U=="function"){k=U(k,D);continue}A=U[0],H=U[1],A!==A?D[H]=k:typeof A=="string"?(z=A==="@"?k.lastIndexOf(A):k.indexOf(A),~z&&(typeof U[2]=="number"?(D[H]=k.slice(0,z),k=k.slice(z+U[2])):(D[H]=k.slice(z),k=k.slice(0,z)))):(z=A.exec(k))&&(D[H]=z[1],k=k.slice(0,z.index)),D[H]=D[H]||w&&U[3]&&C[H]||"",U[4]&&(D[H]=D[H].toLowerCase())}x&&(D.query=x(D.query)),w&&C.slashes&&D.pathname.charAt(0)!=="/"&&(D.pathname!==""||C.pathname!=="")&&(D.pathname=_(D.pathname,C.pathname)),D.pathname.charAt(0)!=="/"&&h(D.protocol)&&(D.pathname="/"+D.pathname),s(D.port,D.protocol)||(D.host=D.hostname,D.port=""),D.username=D.password="",D.auth&&(z=D.auth.indexOf(":"),~z?(D.username=D.auth.slice(0,z),D.username=encodeURIComponent(decodeURIComponent(D.username)),D.password=D.auth.slice(z+1),D.password=encodeURIComponent(decodeURIComponent(D.password))):D.username=encodeURIComponent(decodeURIComponent(D.auth)),D.auth=D.password?D.username+":"+D.password:D.username),D.origin=D.protocol!=="file:"&&h(D.protocol)&&D.host?D.protocol+"//"+D.host:"null",D.href=D.toString()}function S(k,C,x){var w=this;switch(k){case"query":typeof C=="string"&&C.length&&(C=(x||e.parse)(C)),w[k]=C;break;case"port":w[k]=C,s(C,w.protocol)?C&&(w.host=w.hostname+":"+C):(w.host=w.hostname,w[k]="");break;case"hostname":w[k]=C,w.port&&(C+=":"+w.port),w.host=C;break;case"host":w[k]=C,o.test(C)?(C=C.split(":"),w.port=C.pop(),w.hostname=C.join(":")):(w.hostname=C,w.port="");break;case"protocol":w.protocol=C.toLowerCase(),w.slashes=!x;break;case"pathname":case"hash":if(C){var O=k==="pathname"?"/":"#";w[k]=C.charAt(0)!==O?O+C:C}else w[k]=C;break;case"username":case"password":w[k]=encodeURIComponent(C);break;case"auth":var A=C.indexOf(":");~A?(w.username=C.slice(0,A),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=C.slice(A+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(C))}for(var U=0;U<c.length;U++){var z=c[U];z[4]&&(w[z[1]]=w[z[1]].toLowerCase())}return w.auth=w.password?w.username+":"+w.password:w.username,w.origin=w.protocol!=="file:"&&h(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString(),w}function E(k){(!k||typeof k!="function")&&(k=e.stringify);var C,x=this,w=x.host,O=x.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var A=O+(x.protocol&&x.slashes||h(x.protocol)?"//":"");return x.username?(A+=x.username,x.password&&(A+=":"+x.password),A+="@"):x.password?(A+=":"+x.password,A+="@"):x.protocol!=="file:"&&h(x.protocol)&&!w&&x.pathname!=="/"&&(A+="@"),(w[w.length-1]===":"||o.test(x.hostname)&&!x.port)&&(w+=":"),A+=w+x.pathname,C=typeof x.query=="object"?k(x.query):x.query,C&&(A+=C.charAt(0)!=="?"?"?"+C:C),x.hash&&(A+=x.hash),A}return g.prototype={set:S,toString:E},g.extractProtocol=f,g.location=p,g.trimLeft=l,g.qs=e,dr=g,dr}var Ah=Th();const Rh=Ch(Ah);function Oh(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){var e=Math.random()*16|0,t=s==="x"?e:e&3|8;return t.toString(16)})}function zr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */zr=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function($,b,y){$[b]=y.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c($,b,y){return Object.defineProperty($,b,{value:y,enumerable:!0,configurable:!0,writable:!0}),$[b]}try{c({},"")}catch{c=function(y,R,F){return y[R]=F}}function d($,b,y,R){var F=b&&b.prototype instanceof E?b:E,I=Object.create(F.prototype),N=new le(R||[]);return r(I,"_invoke",{value:H($,y,N)}),I}function p($,b,y){try{return{type:"normal",arg:$.call(b,y)}}catch(R){return{type:"throw",arg:R}}}e.wrap=d;var h="suspendedStart",f="suspendedYield",_="executing",g="completed",S={};function E(){}function k(){}function C(){}var x={};c(x,n,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(K([])));O&&O!==t&&i.call(O,n)&&(x=O);var A=C.prototype=E.prototype=Object.create(x);function U($){["next","throw","return"].forEach(function(b){c($,b,function(y){return this._invoke(b,y)})})}function z($,b){function y(F,I,N,W){var X=p($[F],$,I);if(X.type!=="throw"){var _e=X.arg,he=_e.value;return he&&Lt(he)=="object"&&i.call(he,"__await")?b.resolve(he.__await).then(function(we){y("next",we,N,W)},function(we){y("throw",we,N,W)}):b.resolve(he).then(function(we){_e.value=we,N(_e)},function(we){return y("throw",we,N,W)})}W(X.arg)}var R;r(this,"_invoke",{value:function(I,N){function W(){return new b(function(X,_e){y(I,N,X,_e)})}return R=R?R.then(W,W):W()}})}function H($,b,y){var R=h;return function(F,I){if(R===_)throw Error("Generator is already running");if(R===g){if(F==="throw")throw I;return{value:s,done:!0}}for(y.method=F,y.arg=I;;){var N=y.delegate;if(N){var W=Y(N,y);if(W){if(W===S)continue;return W}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(R===h)throw R=g,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);R=_;var X=p($,b,y);if(X.type==="normal"){if(R=y.done?g:f,X.arg===S)continue;return{value:X.arg,done:y.done}}X.type==="throw"&&(R=g,y.method="throw",y.arg=X.arg)}}}function Y($,b){var y=b.method,R=$.iterator[y];if(R===s)return b.delegate=null,y==="throw"&&$.iterator.return&&(b.method="return",b.arg=s,Y($,b),b.method==="throw")||y!=="return"&&(b.method="throw",b.arg=new TypeError("The iterator does not provide a '"+y+"' method")),S;var F=p(R,$.iterator,b.arg);if(F.type==="throw")return b.method="throw",b.arg=F.arg,b.delegate=null,S;var I=F.arg;return I?I.done?(b[$.resultName]=I.value,b.next=$.nextLoc,b.method!=="return"&&(b.method="next",b.arg=s),b.delegate=null,S):I:(b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,S)}function de($){var b={tryLoc:$[0]};1 in $&&(b.catchLoc=$[1]),2 in $&&(b.finallyLoc=$[2],b.afterLoc=$[3]),this.tryEntries.push(b)}function D($){var b=$.completion||{};b.type="normal",delete b.arg,$.completion=b}function le($){this.tryEntries=[{tryLoc:"root"}],$.forEach(de,this),this.reset(!0)}function K($){if($||$===""){var b=$[n];if(b)return b.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var y=-1,R=function F(){for(;++y<$.length;)if(i.call($,y))return F.value=$[y],F.done=!1,F;return F.value=s,F.done=!0,F};return R.next=R}}throw new TypeError(Lt($)+" is not iterable")}return k.prototype=C,r(A,"constructor",{value:C,configurable:!0}),r(C,"constructor",{value:k,configurable:!0}),k.displayName=c(C,l,"GeneratorFunction"),e.isGeneratorFunction=function($){var b=typeof $=="function"&&$.constructor;return!!b&&(b===k||(b.displayName||b.name)==="GeneratorFunction")},e.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,C):($.__proto__=C,c($,l,"GeneratorFunction")),$.prototype=Object.create(A),$},e.awrap=function($){return{__await:$}},U(z.prototype),c(z.prototype,a,function(){return this}),e.AsyncIterator=z,e.async=function($,b,y,R,F){F===void 0&&(F=Promise);var I=new z(d($,b,y,R),F);return e.isGeneratorFunction(b)?I:I.next().then(function(N){return N.done?N.value:I.next()})},U(A),c(A,l,"Generator"),c(A,n,function(){return this}),c(A,"toString",function(){return"[object Generator]"}),e.keys=function($){var b=Object($),y=[];for(var R in b)y.push(R);return y.reverse(),function F(){for(;y.length;){var I=y.pop();if(I in b)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=K,le.prototype={constructor:le,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(D),!b)for(var y in this)y.charAt(0)==="t"&&i.call(this,y)&&!isNaN(+y.slice(1))&&(this[y]=s)},stop:function(){this.done=!0;var b=this.tryEntries[0].completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var y=this;function R(_e,he){return N.type="throw",N.arg=b,y.next=_e,he&&(y.method="next",y.arg=s),!!he}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],N=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var W=i.call(I,"catchLoc"),X=i.call(I,"finallyLoc");if(W&&X){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(W){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!X)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(b,y){for(var R=this.tryEntries.length-1;R>=0;--R){var F=this.tryEntries[R];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(b==="break"||b==="continue")&&I.tryLoc<=y&&y<=I.finallyLoc&&(I=null);var N=I?I.completion:{};return N.type=b,N.arg=y,I?(this.method="next",this.next=I.finallyLoc,S):this.complete(N)},complete:function(b,y){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&y&&(this.next=y),S},finish:function(b){for(var y=this.tryEntries.length-1;y>=0;--y){var R=this.tryEntries[y];if(R.finallyLoc===b)return this.complete(R.completion,R.afterLoc),D(R),S}},catch:function(b){for(var y=this.tryEntries.length-1;y>=0;--y){var R=this.tryEntries[y];if(R.tryLoc===b){var F=R.completion;if(F.type==="throw"){var I=F.arg;D(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(b,y,R){return this.delegate={iterator:K(b),resultName:y,nextLoc:R},this.method==="next"&&(this.arg=s),S}},e}function la(s,e,t,i,r,o,n){try{var a=s[o](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,r)}function Ih(s){return function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function n(l){la(o,i,r,n,a,"next",l)}function a(l){la(o,i,r,n,a,"throw",l)}n(void 0)})}}function Xl(s,e){return Uh(s)||Lh(s,e)||Zl(s,e)||Fh()}function Fh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lh(s,e){var t=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(t!=null){var i,r,o,n,a=[],l=!0,c=!1;try{if(o=(t=t.call(s)).next,e!==0)for(;!(l=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(d){c=!0,r=d}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(c)throw r}}return a}}function Uh(s){if(Array.isArray(s))return s}function Lt(s){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(s)}function zh(s,e){var t=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!t){if(Array.isArray(s)||(t=Zl(s))||e){t&&(s=t);var i=0,r=function(){};return{s:r,n:function(){return i>=s.length?{done:!0}:{done:!1,value:s[i++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,n=!1,a;return{s:function(){t=t.call(s)},n:function(){var c=t.next();return o=c.done,c},e:function(c){n=!0,a=c},f:function(){try{!o&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function Zl(s,e){if(s){if(typeof s=="string")return ca(s,e);var t=Object.prototype.toString.call(s).slice(8,-1);if(t==="Object"&&s.constructor&&(t=s.constructor.name),t==="Map"||t==="Set")return Array.from(s);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ca(s,e)}}function ca(s,e){(e==null||e>s.length)&&(e=s.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=s[t];return i}function da(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function Ht(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?da(Object(t),!0).forEach(function(i){Dh(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):da(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function Dh(s,e,t){return e=Ql(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Mh(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function ua(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Ql(i.key),i)}}function jh(s,e,t){return e&&ua(s.prototype,e),t&&ua(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function Ql(s){var e=Bh(s,"string");return Lt(e)=="symbol"?e:e+""}function Bh(s,e){if(Lt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Lt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var gs="tus-v1",ms="ietf-draft-03",yi="ietf-draft-05",Nh={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:ec,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:gs},Ts=(function(){function s(e,t){Mh(this,s),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return jh(s,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![gs,ms,yi].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var r=this.options.retryDelays;if(r!=null&&Object.prototype.toString.call(r)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var o=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];o<n.length;o++){var a=n[o];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,r=this._size,o=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Hh(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(d,p){d.uploadUrl=i._parallelUploadUrls[p]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(d,p){var h=0;return i._source.slice(d.start,d.end).then(function(f){var _=f.value;return new Promise(function(g,S){var E=Ht(Ht({},i.options),{},{uploadUrl:d.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Ht(Ht({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:g,onError:S,onProgress:function(x){o=o-h+x,h=x,i._emitProgress(o,r)},onUploadUrlAvailable:function(){i._parallelUploadUrls[p]=k.url,i._parallelUploadUrls.filter(function(x){return!!x}).length===a.length&&i._saveUploadInUrlStorage()}}),k=new s(_,E);k.start(),i._parallelUploads.push(k)})})}),c;Promise.all(l).then(function(){c=i._openRequest("POST",i.options.endpoint),c.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var d=pa(i.options.metadata);return d!==""&&c.setHeader("Upload-Metadata",d),i._sendRequest(c,null)}).then(function(d){if(!Wt(d.getStatus(),200)){i._emitHttpError(c,d,"tus: unexpected response while creating upload");return}var p=d.getHeader("Location");if(p==null){i._emitHttpError(c,d,"tus: invalid or missing Location header");return}i.url=ma(i.options.endpoint,p),"Created upload at ".concat(i.url),i._emitSuccess(d)}).catch(function(d){i._emitError(d)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var r=zh(this._parallelUploads),o;try{for(r.s();!(o=r.n()).done;){var n=o.value;n.abort(t)}}catch(a){r.e(a)}finally{r.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():s.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,r,o){this._emitError(new bi(r,o,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var r=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(r&&(this._retryAttempt=0),ga(t,this._retryAttempt,this.options)){var o=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},o);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,r){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,r)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var r=pa(this.options.metadata);r!==""&&i.setHeader("Upload-Metadata",r);var o;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,o=this._addChunkToRequest(i)):((this.options.protocol===ms||this.options.protocol===yi)&&i.setHeader("Upload-Complete","?0"),o=this._sendRequest(i,null)),o.then(function(n){if(!Wt(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=ma(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),r=this._sendRequest(i,null);r.then(function(o){var n=o.getStatus();if(!Wt(n,200)){if(n===423){t._emitHttpError(i,o,"tus: upload is currently locked; retry later");return}if(Wt(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,o,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(o.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,o,"tus: invalid or missing offset value");return}var l=Number.parseInt(o.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===gs){t._emitHttpError(i,o,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(o);return}t._offset=a,t._performUpload()})}).catch(function(o){t._emitHttpError(i,null,"tus: failed to resume upload",o)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var r=this._addChunkToRequest(i);r.then(function(o){if(!Wt(o.getStatus(),200)){t._emitHttpError(i,o,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,o)}).catch(function(o){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),o)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,r=this._offset,o=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(r+n,i._size)}),this.options.protocol===gs?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===yi&&t.setHeader("Content-Type","application/partial-upload"),(o===Number.POSITIVE_INFINITY||o>this._size)&&!this.options.uploadLengthDeferred&&(o=this._size),this._source.slice(r,o).then(function(n){var a=n.value,l=n.done,c=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+c,t.setHeader("Upload-Length","".concat(i._size)));var d=i._offset+c;return!i.options.uploadLengthDeferred&&l&&d!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(d," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===ms||i.options.protocol===yi)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var r=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(r)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(r,this._size),this._emitChunkComplete(r-this._offset,r,this._size),this._offset=r,r===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var r=ha(t,i,this.options);return this._req=r,r}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(r){t._urlStorageKey=r})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return fa(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=ha("DELETE",t,i);return fa(r,null,i).then(function(o){if(o.getStatus()!==204)throw new bi("tus: unexpected response while terminating upload",null,r,o)}).catch(function(o){if(o instanceof bi||(o=new bi("tus: failed to terminate upload",o,r,null)),!ga(o,0,i))throw o;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Ht(Ht({},i),{},{retryDelays:a});return new Promise(function(c){return setTimeout(c,n)}).then(function(){return s.terminate(t,l)})})}}])})();function pa(s){return Object.entries(s).map(function(e){var t=Xl(e,2),i=t[0],r=t[1];return"".concat(i," ").concat(Sh.encode(String(r)))}).join(",")}function Wt(s,e){return s>=e&&s<e+100}function ha(s,e,t){var i=t.httpStack.createRequest(s,e);t.protocol===ms?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===yi?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var r=t.headers||{},o=0,n=Object.entries(r);o<n.length;o++){var a=Xl(n[o],2),l=a[0],c=a[1];i.setHeader(l,c)}if(t.addRequestId){var d=Oh();i.setHeader("X-Request-ID",d)}return i}function fa(s,e,t){return Dr.apply(this,arguments)}function Dr(){return Dr=Ih(zr().mark(function s(e,t,i){var r;return zr().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(r=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,r);case 9:return n.abrupt("return",r);case 10:case"end":return n.stop()}},s)})),Dr.apply(this,arguments)}function qh(){var s=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(s=!1),s}function ga(s,e,t){return t.retryDelays==null||e>=t.retryDelays.length||s.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(s,e,t):ec(s)}function ec(s){var e=s.originalResponse?s.originalResponse.getStatus():0;return(!Wt(e,400)||e===409||e===423)&&qh()}function ma(s,e){return new Rh(e,s).toString()}function Hh(s,e){for(var t=Math.floor(s/e),i=[],r=0;r<e;r++)i.push({start:t*r,end:t*(r+1)});return i[e-1].end=s,i}Ts.defaultOptions=Nh;var tc=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Vh(s){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var r=i.response;e(r)},i.onerror=function(r){t(r)},i.open("GET",s),i.send()})}var Kh=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Yh(s){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var r=new Uint8Array(i.result);e({value:r})},i.onerror=function(r){t(r)},i.readAsArrayBuffer(s)})}function Ui(s){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ui(s)}function Gh(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Wh(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Xh(i.key),i)}}function Jh(s,e,t){return e&&Wh(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Xh(s){var e=Zh(s,"string");return Ui(e)=="symbol"?e:e+""}function Zh(s,e){if(Ui(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Ui(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var va=(function(){function s(e){Gh(this,s),this._file=e,this.size=e.size}return Jh(s,[{key:"slice",value:function(t,i){if(Kh())return Yh(this._file.slice(t,i));var r=this._file.slice(t,i),o=i>=this.size;return Promise.resolve({value:r,done:o})}},{key:"close",value:function(){}}])})();function zi(s){"@babel/helpers - typeof";return zi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zi(s)}function Qh(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function ef(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,sf(i.key),i)}}function tf(s,e,t){return e&&ef(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function sf(s){var e=rf(s,"string");return zi(e)=="symbol"?e:e+""}function rf(s,e){if(zi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(zi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}function ba(s){return s===void 0?0:s.size!==void 0?s.size:s.length}function of(s,e){if(s.concat)return s.concat(e);if(s instanceof Blob)return new Blob([s,e],{type:s.type});if(s.set){var t=new s.constructor(s.length+e.length);return t.set(s),t.set(e,s.length),t}throw new Error("Unknown data type")}var nf=(function(){function s(e){Qh(this,s),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return tf(s,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var r=this,o=i<=this._bufferOffset+ba(this._buffer);if(this._done||o){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var c=l.value,d=l.done;return d?r._done=!0:r._buffer===void 0?r._buffer=c:r._buffer=of(r._buffer,c),r._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var r=ba(this._buffer)===0;return this._done&&r?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function Ut(s){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(s)}function Mr(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Mr=function(){return e};var s,e={},t=Object.prototype,i=t.hasOwnProperty,r=Object.defineProperty||function($,b,y){$[b]=y.value},o=typeof Symbol=="function"?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c($,b,y){return Object.defineProperty($,b,{value:y,enumerable:!0,configurable:!0,writable:!0}),$[b]}try{c({},"")}catch{c=function(y,R,F){return y[R]=F}}function d($,b,y,R){var F=b&&b.prototype instanceof E?b:E,I=Object.create(F.prototype),N=new le(R||[]);return r(I,"_invoke",{value:H($,y,N)}),I}function p($,b,y){try{return{type:"normal",arg:$.call(b,y)}}catch(R){return{type:"throw",arg:R}}}e.wrap=d;var h="suspendedStart",f="suspendedYield",_="executing",g="completed",S={};function E(){}function k(){}function C(){}var x={};c(x,n,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(K([])));O&&O!==t&&i.call(O,n)&&(x=O);var A=C.prototype=E.prototype=Object.create(x);function U($){["next","throw","return"].forEach(function(b){c($,b,function(y){return this._invoke(b,y)})})}function z($,b){function y(F,I,N,W){var X=p($[F],$,I);if(X.type!=="throw"){var _e=X.arg,he=_e.value;return he&&Ut(he)=="object"&&i.call(he,"__await")?b.resolve(he.__await).then(function(we){y("next",we,N,W)},function(we){y("throw",we,N,W)}):b.resolve(he).then(function(we){_e.value=we,N(_e)},function(we){return y("throw",we,N,W)})}W(X.arg)}var R;r(this,"_invoke",{value:function(I,N){function W(){return new b(function(X,_e){y(I,N,X,_e)})}return R=R?R.then(W,W):W()}})}function H($,b,y){var R=h;return function(F,I){if(R===_)throw Error("Generator is already running");if(R===g){if(F==="throw")throw I;return{value:s,done:!0}}for(y.method=F,y.arg=I;;){var N=y.delegate;if(N){var W=Y(N,y);if(W){if(W===S)continue;return W}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(R===h)throw R=g,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);R=_;var X=p($,b,y);if(X.type==="normal"){if(R=y.done?g:f,X.arg===S)continue;return{value:X.arg,done:y.done}}X.type==="throw"&&(R=g,y.method="throw",y.arg=X.arg)}}}function Y($,b){var y=b.method,R=$.iterator[y];if(R===s)return b.delegate=null,y==="throw"&&$.iterator.return&&(b.method="return",b.arg=s,Y($,b),b.method==="throw")||y!=="return"&&(b.method="throw",b.arg=new TypeError("The iterator does not provide a '"+y+"' method")),S;var F=p(R,$.iterator,b.arg);if(F.type==="throw")return b.method="throw",b.arg=F.arg,b.delegate=null,S;var I=F.arg;return I?I.done?(b[$.resultName]=I.value,b.next=$.nextLoc,b.method!=="return"&&(b.method="next",b.arg=s),b.delegate=null,S):I:(b.method="throw",b.arg=new TypeError("iterator result is not an object"),b.delegate=null,S)}function de($){var b={tryLoc:$[0]};1 in $&&(b.catchLoc=$[1]),2 in $&&(b.finallyLoc=$[2],b.afterLoc=$[3]),this.tryEntries.push(b)}function D($){var b=$.completion||{};b.type="normal",delete b.arg,$.completion=b}function le($){this.tryEntries=[{tryLoc:"root"}],$.forEach(de,this),this.reset(!0)}function K($){if($||$===""){var b=$[n];if(b)return b.call($);if(typeof $.next=="function")return $;if(!isNaN($.length)){var y=-1,R=function F(){for(;++y<$.length;)if(i.call($,y))return F.value=$[y],F.done=!1,F;return F.value=s,F.done=!0,F};return R.next=R}}throw new TypeError(Ut($)+" is not iterable")}return k.prototype=C,r(A,"constructor",{value:C,configurable:!0}),r(C,"constructor",{value:k,configurable:!0}),k.displayName=c(C,l,"GeneratorFunction"),e.isGeneratorFunction=function($){var b=typeof $=="function"&&$.constructor;return!!b&&(b===k||(b.displayName||b.name)==="GeneratorFunction")},e.mark=function($){return Object.setPrototypeOf?Object.setPrototypeOf($,C):($.__proto__=C,c($,l,"GeneratorFunction")),$.prototype=Object.create(A),$},e.awrap=function($){return{__await:$}},U(z.prototype),c(z.prototype,a,function(){return this}),e.AsyncIterator=z,e.async=function($,b,y,R,F){F===void 0&&(F=Promise);var I=new z(d($,b,y,R),F);return e.isGeneratorFunction(b)?I:I.next().then(function(N){return N.done?N.value:I.next()})},U(A),c(A,l,"Generator"),c(A,n,function(){return this}),c(A,"toString",function(){return"[object Generator]"}),e.keys=function($){var b=Object($),y=[];for(var R in b)y.push(R);return y.reverse(),function F(){for(;y.length;){var I=y.pop();if(I in b)return F.value=I,F.done=!1,F}return F.done=!0,F}},e.values=K,le.prototype={constructor:le,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(D),!b)for(var y in this)y.charAt(0)==="t"&&i.call(this,y)&&!isNaN(+y.slice(1))&&(this[y]=s)},stop:function(){this.done=!0;var b=this.tryEntries[0].completion;if(b.type==="throw")throw b.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var y=this;function R(_e,he){return N.type="throw",N.arg=b,y.next=_e,he&&(y.method="next",y.arg=s),!!he}for(var F=this.tryEntries.length-1;F>=0;--F){var I=this.tryEntries[F],N=I.completion;if(I.tryLoc==="root")return R("end");if(I.tryLoc<=this.prev){var W=i.call(I,"catchLoc"),X=i.call(I,"finallyLoc");if(W&&X){if(this.prev<I.catchLoc)return R(I.catchLoc,!0);if(this.prev<I.finallyLoc)return R(I.finallyLoc)}else if(W){if(this.prev<I.catchLoc)return R(I.catchLoc,!0)}else{if(!X)throw Error("try statement without catch or finally");if(this.prev<I.finallyLoc)return R(I.finallyLoc)}}}},abrupt:function(b,y){for(var R=this.tryEntries.length-1;R>=0;--R){var F=this.tryEntries[R];if(F.tryLoc<=this.prev&&i.call(F,"finallyLoc")&&this.prev<F.finallyLoc){var I=F;break}}I&&(b==="break"||b==="continue")&&I.tryLoc<=y&&y<=I.finallyLoc&&(I=null);var N=I?I.completion:{};return N.type=b,N.arg=y,I?(this.method="next",this.next=I.finallyLoc,S):this.complete(N)},complete:function(b,y){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&y&&(this.next=y),S},finish:function(b){for(var y=this.tryEntries.length-1;y>=0;--y){var R=this.tryEntries[y];if(R.finallyLoc===b)return this.complete(R.completion,R.afterLoc),D(R),S}},catch:function(b){for(var y=this.tryEntries.length-1;y>=0;--y){var R=this.tryEntries[y];if(R.tryLoc===b){var F=R.completion;if(F.type==="throw"){var I=F.arg;D(R)}return I}}throw Error("illegal catch attempt")},delegateYield:function(b,y,R){return this.delegate={iterator:K(b),resultName:y,nextLoc:R},this.method==="next"&&(this.arg=s),S}},e}function xa(s,e,t,i,r,o,n){try{var a=s[o](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,r)}function af(s){return function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function n(l){xa(o,i,r,n,a,"next",l)}function a(l){xa(o,i,r,n,a,"throw",l)}n(void 0)})}}function lf(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function cf(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,uf(i.key),i)}}function df(s,e,t){return e&&cf(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function uf(s){var e=pf(s,"string");return Ut(e)=="symbol"?e:e+""}function pf(s,e){if(Ut(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Ut(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var hf=(function(){function s(){lf(this,s)}return df(s,[{key:"openFile",value:(function(){var e=af(Mr().mark(function i(r,o){var n;return Mr().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(tc()&&r&&typeof r.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Vh(r.uri);case 4:return n=l.sent,l.abrupt("return",new va(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof r.slice=="function"&&typeof r.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new va(r)));case 13:if(typeof r.read!="function"){l.next=18;break}if(o=Number(o),Number.isFinite(o)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new nf(r,o)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,r){return e.apply(this,arguments)}return t})()}])})();function ff(s,e){return tc()?Promise.resolve(gf(s,e)):Promise.resolve(["tus-br",s.name,s.type,s.size,s.lastModified,e.endpoint].join("-"))}function gf(s,e){var t=s.exif?mf(JSON.stringify(s.exif)):"noexif";return["tus-rn",s.name||"noname",s.size||"nosize",t,e.endpoint].join("/")}function mf(s){var e=0;if(s.length===0)return e;for(var t=0;t<s.length;t++){var i=s.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Di(s){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Di(s)}function $o(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function vf(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,bf(i.key),i)}}function So(s,e,t){return e&&vf(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function bf(s){var e=xf(s,"string");return Di(e)=="symbol"?e:e+""}function xf(s,e){if(Di(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Di(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var yf=(function(){function s(){$o(this,s)}return So(s,[{key:"createRequest",value:function(t,i){return new _f(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),_f=(function(){function s(e,t){$o(this,s),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return So(s,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(r,o){t._xhr.onload=function(){r(new wf(t._xhr))},t._xhr.onerror=function(n){o(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),wf=(function(){function s(e){$o(this,s),this._xhr=e}return So(s,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Mi(s){"@babel/helpers - typeof";return Mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mi(s)}function kf(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function $f(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,Cf(i.key),i)}}function Sf(s,e,t){return e&&$f(s.prototype,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function Cf(s){var e=Ef(s,"string");return Mi(e)=="symbol"?e:e+""}function Ef(s,e){if(Mi(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(Mi(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}var jr=!1;try{jr="localStorage"in window;var ur="tusSupport",ya=localStorage.getItem(ur);localStorage.setItem(ur,ya),ya===null&&localStorage.removeItem(ur)}catch(s){if(s.code===s.SECURITY_ERR||s.code===s.QUOTA_EXCEEDED_ERR)jr=!1;else throw s}var Pf=jr,Tf=(function(){function s(){kf(this,s)}return Sf(s,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var r=Math.round(Math.random()*1e12),o="tus::".concat(t,"::").concat(r);return localStorage.setItem(o,JSON.stringify(i)),Promise.resolve(o)}},{key:"_findEntries",value:function(t){for(var i=[],r=0;r<localStorage.length;r++){var o=localStorage.key(r);if(o.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(o));n.urlStorageKey=o,i.push(n)}catch{}}return i}}])})();function si(s){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},si(s)}function Af(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")}function Rf(s,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,sc(i.key),i)}}function Of(s,e,t){return t&&Rf(s,t),Object.defineProperty(s,"prototype",{writable:!1}),s}function If(s,e,t){return e=As(e),Ff(s,ic()?Reflect.construct(e,t||[],As(s).constructor):e.apply(s,t))}function Ff(s,e){if(e&&(si(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Lf(s)}function Lf(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ic(){try{var s=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ic=function(){return!!s})()}function As(s){return As=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},As(s)}function Uf(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),e&&Br(s,e)}function Br(s,e){return Br=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Br(s,e)}function _a(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(s,r).enumerable})),t.push.apply(t,i)}return t}function Zt(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_a(Object(t),!0).forEach(function(i){zf(s,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):_a(Object(t)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(t,i))})}return s}function zf(s,e,t){return e=sc(e),e in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function sc(s){var e=Df(s,"string");return si(e)=="symbol"?e:e+""}function Df(s,e){if(si(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var i=t.call(s,e);if(si(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}var wa=Zt(Zt({},Ts.defaultOptions),{},{httpStack:new yf,fileReader:new hf,urlStorage:Pf?new Tf:new fh,fingerprint:ff}),Mf=(function(s){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Af(this,e),i=Zt(Zt({},wa),i),If(this,e,[t,i])}return Uf(e,s),Of(e,null,[{key:"terminate",value:function(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return r=Zt(Zt({},wa),r),Ts.terminate(i,r)}}])})(Ts);const jf=10*1024*1024,Bf=5*1024*1024,Nf="https://eu-on-24001.connector.filerobot.com/files",qf="https://eu-on-24001.connector.filerobot.com/json";function Hf(s,e){if(!e||!s.file)return!1;const t=e.sizeThreshold??jf;return s.size>=t}function Vf(s,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),r=t.endpoint||Nf,o=t.jsonBase||qf,n=t.chunkSize??Bf,a=t.resumable!==!1,l=t.parallelChunks??1,c=t.retryDelays??[0,1e3,3e3,5e3],d=i.split("/").pop()||"";let p=!1,h=!1,f=!1;const _={name:s.name,type:s.type,"filerobot-folder":e.folder};uo(s.product)&&(_.product=JSON.stringify(po(s.product)));const g=async()=>`tus-${s.id}-${r}`,S=new Mf(s.file,{endpoint:r,chunkSize:n,retryDelays:c,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:_,fingerprint:g,onBeforeRequest(w){const O=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[A,U]of Object.entries(O))w.setHeader(A,U);w.setHeader("X-Filerobot-Token",d)},onUploadUrlAvailable(){S.url&&e.onUploadUrlAvailable&&!f&&(f=!0,e.onUploadUrlAvailable(S.url))},onProgress(w,O){!h&&!p&&e.onProgress(w,O)},onSuccess(){var A;if(h)return;C();const w=S.url||"",O=(A=w.match(/files\/([^/?]+)/))==null?void 0:A[1];O?Yf(o,O,s.size).then(U=>{h||e.onComplete(ii(U)?oo(U,s):U)}).catch(U=>{h||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:s.name,extension:s.name.split(".").pop()||"",type:s.type,size:s.size,url:{public:w,cdn:w},meta:s.meta,tags:s.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(w){h||(C(),Kf(w)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(w instanceof Error?w:new Error(String(w))))},onShouldRetry(w,O,A){var z;const U=(z=w.originalResponse)==null?void 0:z.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let E=null,k=null;typeof window<"u"&&(E=()=>{var w;!p&&!h&&(p=!0,S.abort(!1),(w=e.onPause)==null||w.call(e))},k=()=>{var w;p&&!h&&(p=!1,S.start(),(w=e.onResume)==null||w.call(e))},window.addEventListener("offline",E),window.addEventListener("online",k));const C=()=>{E&&window.removeEventListener("offline",E),k&&window.removeEventListener("online",k)},x=()=>{try{S.start()}catch(w){C(),e.onError(w instanceof Error?w:new Error(String(w)))}};return a?S.findPreviousUploads().then(w=>{w.length>0&&!h&&S.resumeFromPreviousUpload(w[0]),h||x()}):x(),{abort(){h=!0,p=!1,C(),S.abort(!0)},pause(){!p&&!h&&(p=!0,S.abort(!1))},resume(){p&&!h&&(p=!1,S.start())},isPaused(){return p}}}function Kf(s){var e;if(s instanceof bi){const t=(e=s.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:s.originalResponse==null&&s.causingError!=null}return!1}async function Yf(s,e,t){const i=`${s.replace(/\/+$/,"")}/${e}`,r=t>1e8?13e3:6e3,o=3;for(let n=0;n<=o;n++){n>0&&await new Promise(c=>setTimeout(c,r));const a=await fetch(i);if(a.status===404&&n<o)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(ii(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<o))throw new Error(Ss(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const vs="_sfxRelativePath",ka=8,Gf=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function Wf(s){return s?s.startsWith(".")?!0:Gf.has(s):!1}function Co(s,e){if(e){try{Object.defineProperty(s,vs,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(s,vs,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{s[vs]=e}}}function Jf(s){const e=s[vs];if(typeof e=="string"&&e)return e;const t=s.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=s.relativePath;return typeof i=="string"?i:""}function Xf(s){if(!s)return"";const e=s.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Zf(s,e){const t=(s??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:s??""}async function rc(s){var n;const e=s.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(s.files??[]),hadDirectories:!1};const i=[];let r=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(r=!0),i.push(l))}if(i.length===0)return{files:Array.from(s.files??[]),hadDirectories:!1};const o=[];return await oc(i,"",o),{files:o,hadDirectories:r}}async function oc(s,e,t){for(let i=0;i<s.length;i+=ka){const r=s.slice(i,i+ka);await Promise.all(r.map(o=>Qf(o,e,t)))}}async function Qf(s,e,t){try{if(s.isFile){const i=await eg(s);if(!i)return;const r=e?`${e}/${i.name}`:i.name;Co(i,r),t.push(i);return}if(s.isDirectory){if(Wf(s.name))return;const i=e?`${e}/${s.name}`:s.name,r=await tg(s);await oc(r,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(s==null?void 0:s.name)??s,i)}}function eg(s){return new Promise(e=>{s.file(t=>e(t),()=>e(null))})}function tg(s){return new Promise(e=>{const t=s.createReader(),i=[],r=()=>{t.readEntries(o=>{if(o.length===0){e(i);return}i.push(...o),r()},o=>{console.warn("[sfx-uploader] directory read failed for",s==null?void 0:s.name,o),e(i)})};r()})}class ig{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const i=new Map(this.store.getState().files);let r=!1;for(const[o,n]of this.pendingProgress){const a=i.get(o);a&&a.status==="uploading"&&(i.set(o,{...a,...n}),r=!0)}this.pendingProgress.clear(),r&&this.store.setState({files:i,...this.computeTotals(i)})},this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(ue(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(ue(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&ue(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),this.pendingProgress.delete(e),ue(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),ue(this.store,e,{status:"uploading"})):ue(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!$a(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),ue(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())$a(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),ue(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,r=t-i;if(r<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,r);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),ue(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var h,f;this.pendingProgress.delete(e.id);const t=(f=(h=this.config).resolveUploadParams)==null?void 0:f.call(h,e),i=!!t&&Object.keys(t).length>0,r=!i&&!e.remoteInfo&&!e.remoteUrl&&Hf(e,this.config.tusConfig);ue(this.store,e.id,{status:"uploading",error:null,isTus:r});let o=0,n=Date.now(),a=0;const l=Zf(this.store.getState().targetFolder,e.relativeFolder),c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:_=>this.handleComplete(e.id,_),onError:_=>this.handleError(e.id,_)},d=(_,g)=>{const S=Date.now(),E=(S-n)/1e3;if(E>0){const C=(_-o)/E;a=a===0?C:.3*C+.7*a}o=_,n=S;const k=g>0?Math.min(_/g*100,100):0;this.pendingProgress.set(e.id,{progress:k,bytesUploaded:_,speed:a}),this.scheduleProgressFlush()};let p;if(e.remoteInfo)p=Qp(e,{...c,onProgress:d});else if(e.remoteUrl){if(!this.config.companionUrl){ue(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}p=eh(e,{...c,onProgress:d,companionUrl:this.config.companionUrl,onMeta:_=>{ue(this.store,e.id,{size:_.size,type:_.type||e.type})}})}else if(r){const _=Vf(e,{...c,onProgress:d,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:g=>{ue(this.store,e.id,{tusUploadUrl:g})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,_),this.pendingProgress.delete(e.id),ue(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,_),ue(this.store,e.id,{status:"uploading"})}});p=_}else p=Hp(e,{...c,onProgress:d});this.activeUploads.set(e.id,p)}handleComplete(e,t){var o;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),r=(o=t.file)==null?void 0:o.uuid;if(i!=null&&i.focusPoint&&r&&!ii(t)){const n=()=>this.finalizeComplete(e,t);this.applyFocusPoint(i,r).then(n,n);return}this.finalizeComplete(e,t)}async applyFocusPoint(e,t){var i,r;try{await new io({apiBase:this.config.apiBase,headers:this.config.authHeaders}).put(`/file/${encodeURIComponent(t)}/focus-point`,{img_focus_point:e.focusPoint})}catch(o){const n=o instanceof Error?o:new Error(String(o));console.warn(`[sfx-uploader] Failed to save the focus point for "${e.name}":`,n);try{(r=(i=this.config).onFocusPointError)==null||r.call(i,e,n)}catch(a){console.warn("[sfx-uploader] onFocusPointError threw:",a)}}}finalizeComplete(e,t){var p,h,f,_,g,S,E,k,C,x,w;const i=this.store.getState().files.get(e),r=((p=i==null?void 0:i.previewUrl)==null?void 0:p.startsWith("blob:"))??!1,o=((f=(h=t.file)==null?void 0:h.url)==null?void 0:f.cdn)??((g=(_=t.file)==null?void 0:_.url)==null?void 0:g.cdn_permalink)??((E=(S=t.file)==null?void 0:S.url)==null?void 0:E.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:ii(t)};if(i&&o&&i.type.startsWith("image/")&&!r){const O=((x=(C=this.config).transformPreviewUrl)==null?void 0:x.call(C,o,(k=t.file)==null?void 0:k.url))??o;O&&(n.previewUrl=O)}const a=(w=t.file)==null?void 0:w.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l);const c=this.store.getState().files,d=c.get(e);if(d){const O=new Map(c);O.set(e,{...d,...n}),this.store.setState({files:O,...this.computeTotals(O)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:r}=this.store.getState().queueConfig,o=i.retryCount+1;if(o<=r.maxRetries){const n=Math.min(r.baseDelay*Math.pow(r.backoffFactor,i.retryCount),r.maxDelay);ue(this.store,e,{status:"retrying",error:t.message,retryCount:o});const a=setTimeout(()=>{this.retryTimers.delete(e),ue(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else ue(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){if(this.progressFlushHandle===null)return;(typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear()}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let t=0,i=0,r=0,o=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),o+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(r+=a.speed));return{totalBytes:t,totalBytesUploaded:i,totalSpeed:r,totalProgress:n>0?Math.min(o/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function $a(s){return s==="queued"||s==="uploading"||s==="retrying"||s==="paused"}const sg=3e4,rg=2,og=400;function ng(s){return s===404||s===408||s===429||s>=500}const ag=s=>new Promise(e=>setTimeout(e,s));function Eo(s,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${s}`}async function lg(s,e,t,i={}){const r=`${Eo(s,t)}/key/${encodeURIComponent(e)}`,o=i.retries??rg,n=i.retryDelayMs??og;let a=new Error("SASS key exchange failed");for(let l=0;l<=o;l++){l>0&&await ag(n*l);const c=new AbortController,d=setTimeout(()=>c.abort(),sg);try{const p=await fetch(r,{signal:c.signal,cache:"no-store"});if(clearTimeout(d),!p.ok){if(a=new Error(`SASS key exchange failed (HTTP ${p.status})`),ng(p.status)&&l<o)continue;throw a}const h=await p.json();if(h.status==="error")throw new Error(`SASS key exchange failed: ${h.msg||"Unknown error"}`);return h.key}catch(p){if(clearTimeout(d),p instanceof DOMException&&p.name==="AbortError")throw new Error("SASS key exchange timed out");if(p instanceof TypeError&&l<o){a=p;continue}throw p}}throw a}function Nr(s,e){const t={};switch(s.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=s.sassKey;break}return s.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=s.airboxPuid),t}async function cg(s,e){const t=Eo(s.container,e);if(s.mode==="security-template"){const i=await lg(s.container,s.securityTemplateId,e);return{apiBase:t,headers:Nr(s,i),sassKey:i}}return{apiBase:t,headers:Nr(s)}}const Sa="upload.validation.filename.convention",dg="https://hub.scaleflex.com/api";function ug(s){return Object.keys(s).some(e=>e.toLowerCase()==="x-session-token")}function pg(s){return!!s&&Object.keys(s).length>0&&ug(s)}const hg=6e4,qr=new Map,pr=new Map;function fg(s,e){return`${s}::${e}`}function gg(s){const e=qr.get(s);if(e){if(Date.now()-e.fetchedAt>hg){qr.delete(s);return}return e}}async function mg(s,e,t=dg){const i=fg(t,e),r=gg(i);if(r)return r.config;const o=pr.get(i);if(o)return o;const n=vg(t,s,e);pr.set(i,n);try{const a=await n;return qr.set(i,{config:a,fetchedAt:Date.now()}),a}finally{pr.delete(i)}}async function vg(s,e,t){var n;const i=`${s}/project/${encodeURIComponent(t)}/config?key=${encodeURIComponent(Sa)}`,r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const a=await fetch(i,{headers:e,signal:r.signal});if(clearTimeout(o),!a.ok)throw new Error(`Failed to fetch project config (HTTP ${a.status})`);const c=(n=(await a.json()).configs)==null?void 0:n.find(d=>d.key===Sa);return c?JSON.parse(c.value):null}catch(a){throw clearTimeout(o),a instanceof DOMException&&a.name==="AbortError"?new Error("Fetching project config timed out"):a}}function bg(s){if(!s)return null;try{return decodeURIComponent(escape(atob(s)))}catch{return null}}function xg(s){const e=bg(s);if(!e)return null;try{return new RegExp(e)}catch(t){return console.error("[sfx-uploader] Filename naming-convention regex failed to compile in the browser:",t),null}}function Ca(s,e){return e.test(s)}const yg="https://ai.scaleflex.com",Ea=300,_g=.85,wg=3e4;function Pa(s){return s==="low"?.6:s==="high"?.85:.75}async function kg(s,e){var r,o,n;if(s.file)return s.file;const t=s.previewUrl||((n=(o=(r=s.response)==null?void 0:r.file)==null?void 0:o.url)==null?void 0:n.cdn)||s.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function $g(s){return`${(s||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function Sg(s){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(s);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,r=URL.createObjectURL(s);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(r)})},i.onerror=()=>{URL.revokeObjectURL(r),t(new Error("Image decode failed"))},i.src=r})}async function Cg(s){const e=await Sg(s);try{const t=e.width>Ea?Ea/e.width:1,i=Math.max(1,Math.round(e.width*t)),r=Math.max(1,Math.round(e.height*t)),o=document.createElement("canvas");o.width=i,o.height=r;const n=o.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,r),await new Promise((a,l)=>{o.toBlob(c=>c?a(c):l(new Error("Canvas toBlob failed")),"image/jpeg",_g)})}finally{e.close()}}async function Ta(s,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),wg),r=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",r);const o=t.signal,n=()=>{if(o.aborted)throw new DOMException("Aborted","AbortError")};try{n();const c=await kg(s,o);n();const d=await Cg(c);n();const h=`${(e.endpoint||yg).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,f=new FormData;f.append("file",d,$g(s.name));const _=await fetch(h,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:f,signal:o});if(!_.ok)throw new Error(`Similarity check failed (HTTP ${_.status})`);const g=await _.json();if(g.status==="error")throw new Error(`Similarity check failed: ${g.msg||"Unknown error"}`);return(g.similar_assets??[]).map(([S,E,k])=>({uuid:S,score:E,url:k}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",r)}}const Rs="sfx-uploader:last-upload:",nc=1;function Eg(s){var o,n,a,l,c,d,p,h,f;const{file:e,previewUrl:t,...i}=s;let r=null;return s.status==="complete"&&(s.previewUrl&&!s.previewUrl.startsWith("blob:")?r=s.previewUrl:r=((a=(n=(o=s.response)==null?void 0:o.file)==null?void 0:n.url)==null?void 0:a.permalink)??((d=(c=(l=s.response)==null?void 0:l.file)==null?void 0:c.url)==null?void 0:d.cdn_permalink)??((f=(h=(p=s.response)==null?void 0:p.file)==null?void 0:h.url)==null?void 0:f.cdn)??null),{...i,previewUrl:r}}function Pg(s){try{const e=sessionStorage.getItem(Rs+s);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==nc?null:t}catch{return null}}function Tg(s,e){try{sessionStorage.setItem(Rs+s,JSON.stringify(e))}catch{}}const mi={save(s,e){if(e.length===0){this.clear(s);return}const t={__schemaVersion:nc,savedAt:Date.now(),files:e.map(Eg)};Tg(s,t)},load(s){const e=Pg(s);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(s){try{return sessionStorage.getItem(Rs+s)!=null}catch{return!1}},clear(s){try{sessionStorage.removeItem(Rs+s)}catch{}}},V={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let Ag=0;function Vt(){return`file-${Date.now()}-${++Ag}`}function Jt(s){if(!Number.isFinite(s)||s<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(s)/Math.log(1024)),e.length-1),i=s/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function Aa(s){if(!isFinite(s)||s<=0)return"0s";const e=Math.round(s);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const r=Math.floor(t/60),o=t%60;return o>0?`${r}h ${o}m`:`${r}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function De(s){var t;const e=((t=s.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return s.type.startsWith("image/")?"image":s.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":s.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":s.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function Rg(s){const e=s.lastIndexOf(".");return e>=0?s.slice(e+1).toUpperCase():""}const Og=new Set([".ds_store","thumbs.db","desktop.ini"]);function hr(s){const e=(s.split(/[\\/]/).pop()??s).toLowerCase();return e.startsWith(".ds_store")?!0:Og.has(e)}const Ig={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Hr(s){var t;const e=((t=s.split(".").pop())==null?void 0:t.toLowerCase())??"";return Ig[e]||""}function nt(s){return s==="image/heic"||s==="image/heif"}function Fg(s){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(s);let r=!1;const o=()=>{r||(r=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{r||(r=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}o()},{once:!0}),t.addEventListener("error",()=>o(),{once:!0}),setTimeout(()=>o(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function Lg(s){return(s==null?void 0:s.code)==="max-files"}function fr(s,e,t){var i,r;if(e.maxFileSize!=null&&s.size>0&&s.size>e.maxFileSize){const o=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:$t("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:o})}}if(e.maxTotalFilesSize!=null&&s.size>0){let o=s.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(o+=n.size);if(o>e.maxTotalFilesSize)return{code:"max-total-size",message:$t("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let o=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&o++;if(o>=e.maxNumberOfFiles)return{code:"max-files",message:$t("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const o=e.allowedFileTypes,n="."+(((i=s.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-not-allowed",message:$t("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const o=e.blockedFileTypes,n="."+(((r=s.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?s.type.startsWith(l.slice(0,-1)):s.type===l))return{code:"type-blocked",message:$t("fileTypeBlocked","File type is blocked")}}return null}function gr(s){return s.allowedFileTypes?s.allowedFileTypes.join(","):""}function Ug(s){return s.trim()?s.split(",").some(e=>{const t=e.trim().toLowerCase();if(!t)return!1;if(t==="*"||t==="*/*")return!0;const i=t.startsWith(".")?Hr(`file${t}`):t;return i.startsWith("image/")||i.startsWith("video/")}):!0}const Ra={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function zg(s){return s.filter(e=>e in Ra).map(e=>Ra[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Os=class extends Bi{constructor(e){if(super(e),this.it=v,e.type!==ni.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this._t=void 0,this.it=e;if(e===Fe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Os.directiveName="unsafeHTML",Os.resultType=1;const Oa=ai(Os);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vr extends Os{}Vr.directiveName="unsafeSVG",Vr.resultType=2;const lt=ai(Vr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Po=ai(class extends Bi{constructor(s){var e;if(super(s),s.type!==ni.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var i,r;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((i=this.nt)!=null&&i.has(o))&&this.st.add(o);return this.render(e)}const t=s.element.classList;for(const o of this.st)o in e||(t.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(n?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return Fe}});function Et(s){return s.brandStyle?u`<span
    class=${Po({"brand-ico":!0,"brand-ico--transparent":s.brandStyle.background==="transparent"})}
    ${te(s.brandStyle)}
    >${Oa(s.brandHtml)}</span
  >`:Oa(s.brandHtml)}var Dg=Object.defineProperty,ac=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Dg(e,t,r),r};const Mg='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',jg='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Bg='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Ng='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',_i=[{id:"device",labelKey:"myDevice",label:"My Device",icon:Mg,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:jg,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:Bg,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:Ng,iconColor:"#ea580c"}],Go=class Go extends G{constructor(){super(...arguments),this.t=Le,this.sources=_i}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return u`
      ${this.sources.map(e=>u`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Et(e):Z`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${lt(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Go.styles=q`
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
  `;let ji=Go;ac([m({attribute:!1})],ji.prototype,"t");ac([m({type:Array})],ji.prototype,"sources");const Vs=new Set(["multi-select","tags","ultratags"]),Ks=new Set(["text","textarea","attachment-uri"]);function qg(s){return bu(s)?[]:s==="focus-point"?[]:Vs.has(s)?[{key:"SET",label:P("bulkOpSet","Set")},{key:"ADD",label:P("bulkOpAddTo","Add to")},{key:"DELETE",label:P("bulkOpRemoveFrom","Remove from")}]:Ks.has(s)?[{key:"SET",label:P("bulkOpSet","Set")},{key:"ADD",label:P("bulkOpAppend","Append")},{key:"DELETE",label:P("bulkOpRemove","Remove")}]:[{key:"SET",label:P("bulkOpSet","Set")},{key:"DELETE",label:P("bulkOpClear","Clear")}]}function Kr(s,e){return s==="DELETE"?Vs.has(e)||Ks.has(e):!0}function ds(s){if(typeof s=="string")return s;if(s&&typeof s=="object"){const e=s;return e.sid||e.label||String(s)}return String(s)}function Hg(s,e,t,i){const r=Vs.has(i),o=Ks.has(i);switch(s){case"SET":return t;case"ADD":{if(r){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return wr(n,a,!1);if(i==="tags"){const d=new Set(n.map(h=>ds(h))),p=[...n];for(const h of a){const f=ds(h);d.has(f)||(d.add(f),p.push(h))}return p}const l=new Set(n.map(d=>JSON.stringify(d))),c=[...n];for(const d of a){const p=JSON.stringify(d);l.has(p)||(l.add(p),c.push(d))}return c}if(o){const n=typeof t=="string"?t:"";if(!n)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${n}`:n}return t}case"DELETE":{if(r){const n=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return n;if(i==="ultratags")return wr(n,a,!0);if(i==="tags"){const c=new Set(a.map(d=>ds(d)));return n.filter(d=>!c.has(ds(d)))}const l=new Set(a.map(c=>JSON.stringify(c)));return n.filter(c=>!l.has(JSON.stringify(c)))}if(o){const n=typeof t=="string"?t:"";return n?(typeof e=="string"?e:"").replaceAll(n,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function lc(s,e,t,i,r){const o=r??"en",n=!!s.regional_variants_group_uuid,a={meta:{[s.key]:e}},l=co(s,t,a,r),c=f=>n&&f!==null&&typeof f=="object"&&!Array.isArray(f),d=c(e)?e[o]:e,p=c(l)?l[o]:l,h=Hg(i,d,p,s.type);return n?{...c(e)?e:{},[o]:h}:h}const cc=Symbol("clamp-drop");function Vg(s,e,t,i,r){if(s.type!=="select-one"&&s.type!=="multi-select")return e;const o=new Set(t),n=!!s.regional_variants_group_uuid,a=i??"en",l=p=>n&&p!==null&&typeof p=="object"&&!Array.isArray(p),c=l(e)?e[a]:e;let d;if(s.type==="multi-select"){const p=Array.isArray(c)?c:[],h=l(r)?r[a]:r,f=new Set((Array.isArray(h)?h:[]).map(_=>_));d=p.filter(_=>o.has(_)||f.has(_))}else if(c==null||c==="")d=c;else if(o.has(c))d=c;else return cc;return n?{...l(e)?e:{},[a]:d}:d}const dc=q`
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
`,Kg=q`
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

  ${dc}

  ${Ae}
`,Yg=q`
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

  ${Ae}
`,Gg=q`
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

  ${Ae}
`,Wg=q`
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

  ${dc}

  ${Ae}
`,Jg=q`
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
`,Xg=q`
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
`;var Zg=Object.defineProperty,ne=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Zg(e,t,r),r},ut;const re=(ut=class extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this.primaryAction="save",this.exitAction="cancel",this.operationMode="full",this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._previewOp=null,this._previewTimer=null,this._confirmVisible=!1,this._confirmAllowApply=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._conflictedFieldKey=null,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._filledFieldsCache=new Set,this._sortedFilesCache=[],this._originalFiles=new Map,this._onDialogCancel=e=>{e.preventDefault()},this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(r=>r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)||await this._onClose()},this._groupOfFieldCache=null,this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmApply=()=>{var t,i;(((t=this._opBarEl)==null?void 0:t.applyPending())??!1)&&(this._confirmVisible=!1,(i=this._confirmResolve)==null||i.call(this,!0),this._confirmResolve=null)},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,l;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const r=i[0],o=i[i.length-1],n=(l=this.shadowRoot)==null?void 0:l.activeElement;e.shiftKey&&n===r?(e.preventDefault(),o.focus()):!e.shiftKey&&n===o&&(e.preventDefault(),r.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,r=this._activeField;Ne(i)&&(!r||Kr(t,r.type))?this._setPendingOp(null):this._setPendingOp({operation:t,value:i})},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._setPendingOp(null),this._activeFieldKey=e)},this._onBulkApply=e=>{const t=this._activeField;if(!t)return;const{operation:i,value:r,taxonomyEntry:o}=e.detail,{updates:n,appliedIds:a}=this._computeBulkUpdates(t,i,r);this._setStagedBulk(n),t.type==="taxonomy-node"&&o!==void 0&&this._setStagedTaxonodeBulk(a,t.key,o)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:r}=e.detail;this._setStagedTaxonodeSingle(t,i,r)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null||await this._confirmDiscardPending()&&(this._setPendingOp(null),this._refreshMissingRequired(),this._refreshConflictedField(),!(this._missingRequiredFieldKey!=null||this._conflictedFieldKey!=null)&&(this._commitStagedChanges(),this._emitClose(!0)))},this._onCancel=async()=>{await this._confirmDiscardAll()&&this._emitClose()},this._onBack=async()=>{await this._confirmDiscardPending()&&(this._setPendingOp(null),this._commitStagedChanges(),this._emitClose(!1))},this._onClose=async()=>{if(this.exitAction==="back"){await this._onBack();return}await this._confirmDiscardAll()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._normalizeSchema(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null,this._cancelPreviewTimer()}_showModally(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("dialog.fm-overlay");if(!(!e||e.open||typeof e.showModal!="function"))try{e.showModal()}catch{}}_cancelPreviewTimer(){this._previewTimer!==null&&(clearTimeout(this._previewTimer),this._previewTimer=null)}_setPendingOp(e){if(this._pendingOp=e,e===null){this._cancelPreviewTimer(),this._previewOp=null;return}this._cancelPreviewTimer(),this._previewTimer=setTimeout(()=>{this._previewTimer=null,this._previewOp=this._pendingOp},ut._PREVIEW_DEBOUNCE_MS)}_initStaged(){var a,l;const e=new Map,t=new Map,i=new Set,r=new Map,o=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const c of this.files){const d=new Map;if(c.meta)for(const[p,h]of Object.entries(c.meta))d.set(p,h);if(o){const p=c.product;(p==null?void 0:p.ref)!==void 0&&d.set(Ot,p.ref),(p==null?void 0:p.position)!==void 0&&d.set(It,p.position)}Array.isArray(c.tags)&&c.tags.length>0&&d.set(xo,[...c.tags]),e.set(c.id,d),c.taxonodes&&t.set(c.id,new Map(Object.entries(c.taxonodes))),i.add(c.id),r.set(c.id,c.status?c:{...c,status:"idle"})}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=r,this._recomputeResolvedSchemas();const n=this.initialFieldKey;if(n&&((l=this.schema)!=null&&l.fieldsByKey.has(n)))this._activeFieldKey=n;else if(this.schema&&this.schema.fields.length>0){const c=this._groupOfFieldMap(),d=this.schema.fields.find(p=>this._isFieldNavigable(p,c));this._activeFieldKey=(d==null?void 0:d.key)??""}this._recomputeFilledFields(),this._recomputeSortedFiles()}_setStagedValue(e,t,i){const r=new Map(this._staged),o=new Map(r.get(e)??new Map);o.set(t,i),r.set(e,o),this._staged=r}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,r,o]of e){const n=new Map(t.get(i)??new Map);n.set(r,o),t.set(i,n)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const r=new Map(this._stagedTaxonodes);for(const o of e){const n=new Map(r.get(o)??new Map);n.set(t,i),r.set(o,n)}this._stagedTaxonodes=r}_setStagedTaxonodeSingle(e,t,i){const r=new Map(this._stagedTaxonodes),o=new Map(r.get(e)??new Map);o.set(t,i),r.set(e,o),this._stagedTaxonodes=r}_isTaxonodeEntryUnedited(e,t){var o,n,a;const i=(o=this._stagedTaxonodes.get(e))==null?void 0:o.get(t);if(i===void 0)return!0;if(i===null)return!1;const r=(a=(n=this._originalFiles.get(e))==null?void 0:n.taxonodes)==null?void 0:a[t];return r?i.uuid===r.uuid||i.suid===r.suid:!1}_syncStagedTaxonodesFromFiles(){var i;let e=!1;const t=new Map(this._stagedTaxonodes);for(const r of this.files)if(r.taxonodes)for(const[o,n]of Object.entries(r.taxonodes)){const a=this._isTaxonodeEntryUnedited(r.id,o),l=(i=t.get(r.id))==null?void 0:i.get(o),c=l!=null&&n!=null&&(l.uuid===n.uuid||l.suid===n.suid),d=l==null&&n==null;if(!a||c||d)continue;const p=new Map(t.get(r.id)??new Map);p.set(o,n??null),t.set(r.id,p),e=!0;const h=this._originalFiles.get(r.id);h&&this._originalFiles.set(r.id,{...h,taxonodes:{...h.taxonodes??{},[o]:n??null}})}e&&(this._stagedTaxonodes=t)}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,r;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const o of this._selected){const n=this._originalFiles.get(o),a=(i=this._staged.get(o))==null?void 0:i.get(e.key),l=a!==void 0?a:(r=n==null?void 0:n.meta)==null?void 0:r[e.key],c=Ai(l);c.length&&(t=wr(t,c,!1))}return t.filter(o=>typeof o!="string")}_originalValue(e,t){var r,o;const i=this._originalFiles.get(e);if(i){if(kr(t)){const n=$r(t);return n?(r=i.product)==null?void 0:r[n]:void 0}return Or(t)?Array.isArray(i.tags)?[...i.tags]:[]:(o=i.meta)==null?void 0:o[t]}}_stagedWithPendingPreview(){const e=this._previewOp,t=this._activeField;if(!e||!t||Ne(e.value)||this._selected.size===0)return this._staged;const{updates:i}=this._computeBulkUpdates(t,e.operation,e.value);if(i.length===0)return this._staged;const r=new Map(this._staged);for(const[o,n,a]of i){const l=new Map(r.get(o)??new Map);l.set(n,a),r.set(o,l)}return r}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&xl(this.schema,this.config)?ju(this._stagedWithPendingPreview(),this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const n of this.schema.fields)if(t.has(n.key)){i=n.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const r=this._missingRequiredKeys;let o=r.size!==t.size;if(!o){for(const n of t)if(!r.has(n)){o=!0;break}}o&&(this._missingRequiredKeys=t)}_refreshConflictedField(){const e=this.schema&&this.dependencies.length>0?Bu(this._staged,this._originalFiles,this.schema,this.dependencies):null;e!==this._conflictedFieldKey&&(this._conflictedFieldKey=e)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),r={...t.meta};if(i)for(const[o,n]of i)r[o]=n;e.push({id:t.id,mime:t.type??"",meta:r})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=gu(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),r={...t.meta};if(i)for(const[o,n]of i)r[o]=n;e.set(t.id,Qt({mime:t.type??"",meta:r},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var o;if(!this.schema||!this._activeFieldKey)return;const e=(o=this.schema.fieldsByKey)==null?void 0:o.get(this._activeFieldKey);if(!!e&&this._cachedBulkResolved.size===0)return;const i=this._groupOfFieldMap();if(e&&this._isFieldNavigable(e,i))return;const r=this.schema.fields.find(n=>this._isFieldNavigable(n,i));this._activeFieldKey=(r==null?void 0:r.key)??""}_groupOfFieldMap(){var t,i;if(this.schema&&((t=this._groupOfFieldCache)==null?void 0:t.schema)===this.schema)return this._groupOfFieldCache.map;const e=new Map;for(const r of((i=this.schema)==null?void 0:i.groups)??[])for(const o of r.fields)e.set(o,r);return this.schema&&(this._groupOfFieldCache={schema:this.schema,map:e}),e}_isFieldRequiredBulk(e){return ho(e,this.config??void 0,this._cachedBulkResolved)}_isFieldNavigable(e,t){const i=t.get(e);return!(Us(e,i,this._cachedBulkResolved)||i&&go(i)&&!this._isFieldRequiredBulk(e)&&!no(e,i,this._cachedBulkResolved))}_recomputeFilledFields(){var o;const e=new Set,t=this._stagedWithPendingPreview();for(const n of((o=this.schema)==null?void 0:o.fields)??[])for(const[a,l]of t){const c=l.get(n.key),d=this._originalValue(a,n.key);if(c!==void 0&&!Ne(c)&&JSON.stringify(c)!==JSON.stringify(d)){e.add(n.key);break}}const i=this._filledFieldsCache;let r=i.size!==e.size;if(!r){for(const n of e)if(!i.has(n)){r=!0;break}}r&&(this._filledFieldsCache=e)}_recomputeSortedFiles(){const e=[...this.files];e.sort((t,i)=>{const r=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?r:-r}),this._sortedFilesCache=e}get _hasPendingValue(){return this._pendingOp!=null&&!Ne(this._pendingOp.value)}get _hasStagedChanges(){var e;for(const[t,i]of this._staged)for(const[r,o]of i)if(JSON.stringify(o)!==JSON.stringify(this._originalValue(t,r)))return!0;for(const[t,i]of this._stagedTaxonodes){const r=((e=this._originalFiles.get(t))==null?void 0:e.taxonodes)??{};for(const[o,n]of i){const a=r[o]??null;if(JSON.stringify(n??null)!==JSON.stringify(a??null))return!0}}return!1}_confirmDiscardPending(){return this._hasPendingValue?this._openDiscardConfirm(!0):Promise.resolve(!0)}_confirmDiscardAll(){return!this._hasPendingValue&&!this._hasStagedChanges?Promise.resolve(!0):this._openDiscardConfirm(!1)}_openDiscardConfirm(e){return new Promise(t=>{this._confirmResolve=t,this._confirmAllowApply=e,this._confirmVisible=!0})}_normalizeSchema(){if(!this.schema)return;const e=wl(this.schema);e!==this.schema&&(this.schema=e)}willUpdate(e){e.has("schema")&&this._normalizeSchema(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden()),(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies")||e.has("_previewOp")||e.has("_selected"))&&(this._refreshMissingRequired(),this._refreshConflictedField()),(e.has("_staged")||e.has("schema")||e.has("_previewOp")||e.has("_selected"))&&this._recomputeFilledFields(),(e.has("files")||e.has("_sortAsc"))&&this._recomputeSortedFiles(),e.has("files")&&this._syncStagedTaxonodesFromFiles()}updated(e){var t;(t=super.updated)==null||t.call(this,e),this._showModally(),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var o;const i=this._confirmAllowApply?".fm-confirm .btn-primary":".fm-confirm .fm-confirm-close",r=(o=this.shadowRoot)==null?void 0:o.querySelector(i);r==null||r.focus()})}_computeBulkUpdates(e,t,i){var a;const r=At(e,this.config),o=[],n=new Set;for(const l of this._selected){const c=(a=this._cachedPerFileResolved.get(l))==null?void 0:a.get(e.ckey);if(c!=null&&c.hidden)continue;const d=this._staged.get(l),p=d!=null&&d.has(e.key)?d.get(e.key):this._originalValue(l,e.key)??null;let h=lc(e,p,i,t,r);if(c!=null&&c.allowedValues){const f=Vg(e,h,c.allowedValues,r,p);if(f===cc)continue;h=f}o.push([l,e.key,h]),n.add(l)}return{updates:o,appliedIds:n}}_commitStagedChanges(){const e=[],t=[],i=[];for(const[o,n]of this._staged){if(!this._originalFiles.get(o))continue;const l={},c={};for(const[d,p]of n){const h=this._originalValue(o,d);if(JSON.stringify(p)!==JSON.stringify(h))if(kr(d)){const f=$r(d);if(!f)continue;const _=p===""||p==null;f==="position"?c.position=_?void 0:Number(p):c.ref=_?void 0:String(p)}else if(Or(d)){const f=Array.isArray(p)?p:[];i.push({fileId:o,tags:f})}else l[d]=p}Object.keys(l).length>0&&e.push({fileId:o,meta:l}),Object.keys(c).length>0&&t.push({fileId:o,product:c})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),i.length>0&&this.dispatchEvent(new CustomEvent("tags-save-batch",{detail:{changes:i},bubbles:!0,composed:!0}));const r=[];for(const[o,n]of this._stagedTaxonodes){const a=this._originalFiles.get(o);if(!a)continue;const l=a.taxonodes??{},c={};for(const[d,p]of n){const h=l[d]??null;JSON.stringify(p??null)!==JSON.stringify(h??null)&&(c[d]=p??null)}Object.keys(c).length>0&&r.push({fileId:o,taxonodes:c})}r.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:r},bubbles:!0,composed:!0}))}_emitClose(e=!1){this.dispatchEvent(new CustomEvent("metadata-close",{detail:{saved:e},bubbles:!0,composed:!0}))}render(){var _,g,S,E;if(!((g=(_=this.schema)==null?void 0:_.fields)!=null&&g.length))return u`
        <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
          <div class="fm-modal" @click=${k=>k.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title"
                >${P("fillMultipleAssets","Fill multiple assets")}</span
              >
              <button class="fm-topbar-close" @click=${this._onClose} title=${P("close","Close")}>
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
              ${P("noMetadataFieldsConfigured","No metadata fields configured")}
            </div>
          </div>
        </dialog>
      `;const e=this._activeField,t=this._sortedFilesCache,i=this._selected.size===this.files.length&&this.files.length>0,r=this._selected.size>0&&!i,o=this._missingRequiredFieldKey,n=this._cachedBulkResolved,a=this._cachedPerFileResolved,l=e==null?void 0:e.ckey,c=l?n.get(l):void 0,d=o!=null&&this._activeFieldKey===o,p=o!=null&&!d,h=this._conflictedFieldKey!=null,f=this.primaryAction==="upload"?this.files.length>1?P("uploadAll","Upload all ({{count}})",{count:this.files.length}):P("upload","Upload"):P("save","Save");return u`
      <dialog class="fm-overlay" @click=${this._onClose} @cancel=${this._onDialogCancel}>
        <div class="fm-modal" @click=${k=>k.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${P("fillMultipleAssets","Fill multiple assets")}</span>
            ${(S=this.schema.regionalVariantsGroups)!=null&&S.length?u`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((E=this.config)==null?void 0:E.regionalFilters)??{}}
                ></sfx-regional-settings>`:v}
            <button class="fm-topbar-close" @click=${this._onClose} title=${P("close","Close")}>
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
                      .allowedValues=${(c==null?void 0:c.allowedValues)??null}
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
                          .indeterminate=${r}
                          @change=${this._onSelectAll}
                        />
                      </div>
                      <div class="fm-th-name" @click=${this._onSortToggle}>
                        ${P("name","Name")}
                        <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                      </div>
                      <div class="fm-th-size">${P("size","Size")}</div>
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
                      ${P("allMetadataFieldsHidden","All metadata fields are currently hidden")}
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
                    title=${P("backToFilesHint","Back to your files — filled metadata is kept")}
                  >
                    ← ${P("backToFiles","Back to files")}
                  </button>
                  <div class="spacer"></div>
                `:u`
                  <div class="spacer"></div>
                  <button class="btn-ghost" @click=${this._onCancel}>
                    ${P("cancel","Cancel")}
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
              class=${Po({"btn-primary":!0,"btn-primary--next":p})}
              @click=${p?this._onJumpToNextRequired:this._onSave}
              ?disabled=${d||!p&&h}
              title=${p?P("jumpToNextMetadata","Jump to next required field"):h?P("resolveConflictBeforeContinuing","Resolve the conflicting value before continuing"):""}
            >
              ${p?u`<span class="btn-primary-label">${P("nextMetadata","Next metadata")}</span
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
                        ${this._confirmAllowApply?P("unappliedChangesTitle","Unapplied changes"):P("unsavedChangesTitle","Unsaved changes")}
                      </h3>
                      <button
                        class="fm-confirm-close"
                        aria-label=${P("cancel","Cancel")}
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
                      ${this._confirmAllowApply?P("unappliedChangesBody","You have unapplied bulk changes for this field. Apply them before switching, or discard to continue without saving."):P("discardBulkChanges","You have unsaved changes. Discard them?")}
                    </p>
                    <div class="fm-confirm-actions">
                      ${this._confirmAllowApply?u`
                            <button class="btn-ghost" @click=${this._onConfirmOk}>
                              ${P("discard","Discard")}
                            </button>
                            <button class="btn-primary" @click=${this._onConfirmApply}>
                              ${P("apply","Apply")}
                            </button>
                          `:u`<button class="btn-primary" @click=${this._onConfirmOk}>
                            ${P("discard","Discard")}
                          </button>`}
                    </div>
                  </div>
                </div>
              `:v}
        </div>
      </dialog>
    `}},ut.styles=[Kg],ut._PREVIEW_DEBOUNCE_MS=150,ut);ne([m({attribute:!1})],re.prototype,"schema");ne([m({attribute:!1})],re.prototype,"files");ne([m({attribute:!1})],re.prototype,"config");ne([m({attribute:!1})],re.prototype,"autocomplete");ne([m({attribute:!1})],re.prototype,"taxonomyService");ne([m({attribute:!1})],re.prototype,"ultratags");ne([m({attribute:!1})],re.prototype,"defaultLanguage");ne([m({attribute:!1})],re.prototype,"initialFieldKey");ne([m({attribute:!1})],re.prototype,"dependencies");ne([m({type:String})],re.prototype,"primaryAction");ne([m({type:String})],re.prototype,"exitAction");ne([m({type:String})],re.prototype,"operationMode");ne([T()],re.prototype,"_activeFieldKey");ne([T()],re.prototype,"_staged");ne([T()],re.prototype,"_stagedTaxonodes");ne([T()],re.prototype,"_selected");ne([T()],re.prototype,"_sortAsc");ne([T()],re.prototype,"_previewOp");ne([T()],re.prototype,"_confirmVisible");ne([T()],re.prototype,"_confirmAllowApply");ne([Ls("sfx-bulk-meta-op-bar")],re.prototype,"_opBarEl");ne([T()],re.prototype,"_missingRequiredFieldKey");ne([T()],re.prototype,"_missingRequiredKeys");ne([T()],re.prototype,"_conflictedFieldKey");let Qg=re;ie("sfx-bulk-metadata-modal",Qg);var em=Object.defineProperty,rt=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&em(e,t,r),r};const Wo=class Wo extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._query="",this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return ho(e,this.config??void 0,this.bulkResolvedSchema)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}get _allCollapsed(){var t;const e=((t=this.schema)==null?void 0:t.groups)??[];return e.length>0&&e.every(i=>this._collapsed.has(i.uuid))}_toggleAll(){var e;this._allCollapsed?this._collapsed=new Set:this._collapsed=new Set((((e=this.schema)==null?void 0:e.groups)??[]).map(t=>t.uuid))}_onSearchInput(e){this._query=e.target.value}_clearSearch(){var t;this._query="";const e=(t=this.renderRoot)==null?void 0:t.querySelector(".sb-search-input");e==null||e.focus()}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,r;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(r=this.renderRoot)==null?void 0:r.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return v;const e=this.bulkResolvedSchema,t=this._isNarrow?"":this._query.trim().toLowerCase(),i=t.length>0;let r=0;const o=this.schema.groups.map(n=>{var c,d;const a=this._isNarrow||i||!this._collapsed.has(n.uuid);if(e&&n.ckey&&((c=e.get(n.ckey))!=null&&c.hidden))return v;let l=e?n.fields.filter(p=>!Us(p,n,e)):n.fields;return go(n)&&(l=l.filter(p=>this._isRequired(p)||no(p,n,e))),i&&!((d=n.name)!=null&&d.toLowerCase().includes(t))&&(l=l.filter(p=>{var h;return(h=p.title)==null?void 0:h.toLowerCase().includes(t)})),l.length===0?v:(r+=l.length,u`
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
                  <span class="field-icon" aria-hidden="true">${Np(p.type)}</span>
                  <span class="field-name">${p.title}</span>
                  ${this.filledFields.has(p.key)?u`<span class="field-dot"></span>`:v}
                  ${this._isRequired(p)?u`<span
                        class=${Po({"field-required":!0,unmet:this.missingRequiredKeys.has(p.key)})}
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
            placeholder=${P("searchFields","Search fields...")}
            aria-label=${P("searchFields","Search fields...")}
            @input=${this._onSearchInput}
          />
          ${this._query?u`<button
                class="sb-search-clear"
                type="button"
                aria-label=${P("clear","Clear")}
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
          aria-label=${this._allCollapsed?P("expandAll","Expand all"):P("collapseAll","Collapse all")}
          title=${this._allCollapsed?P("expandAll","Expand all"):P("collapseAll","Collapse all")}
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
      ${i&&r===0?u`<div class="sb-empty">${P("noFieldsMatch","No fields match")}</div>`:o}
    `}};Wo.styles=[Yg];let Me=Wo;rt([m({attribute:!1})],Me.prototype,"schema");rt([m({attribute:!1})],Me.prototype,"activeFieldKey");rt([m({attribute:!1})],Me.prototype,"filledFields");rt([m({attribute:!1})],Me.prototype,"missingRequiredKeys");rt([m({attribute:!1})],Me.prototype,"config");rt([m({attribute:!1})],Me.prototype,"bulkResolvedSchema");rt([T()],Me.prototype,"_collapsed");rt([T()],Me.prototype,"_isNarrow");rt([T()],Me.prototype,"_query");ie("sfx-bulk-meta-sidebar",Me);var tm=Object.defineProperty,Re=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&tm(e,t,r),r},tt;const Se=(tt=class extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this.operationMode="full",this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var o;if(e.key!=="Enter")return;const t=(o=this.field)==null?void 0:o.type;if(!t||!tt._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(n=>n instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const r=e.composedPath().find(n=>n instanceof HTMLInputElement);r&&r.value!==void 0&&(this._value=r.value),this._onApply()}}get _availableOps(){return this.field?qg(this.field.type):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??tt._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("operationMode")&&this.operationMode==="set-only"&&(this._operation="SET",this._opDropdownOpen=!1),e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}applyPending(){return this._isApplyDisabled?!1:(this._onApply(),!0)}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((e=this.field)==null?void 0:e.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!Kr(this._operation,(t=this.field)==null?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?Vs.has((e=this.field)==null?void 0:e.type)?Ne(this._value):Ks.has((t=this.field)==null?void 0:t.type)?Ne(this._value):!1:Ne(this._value)}render(){var o;if(!this.field)return v;if(Ni(this.field)){const n=bo();return u`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${n}">
            ${Il}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${n}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,i=e.find(n=>n.key===this._operation),r=this.operationMode==="set-only";return u`
      <div class="op-bar">
        ${r?v:u`<div class="op-field op-field--operation">
              <span class="op-field-label">${P("operation","Operation")}</span>
              ${t?u`
                    <div class="op-dropdown-wrap">
                      <button
                        class="op-trigger ${this._opDropdownOpen?"open":""}"
                        @click=${this._onOpToggle}
                      >
                        <span class="op-trigger-label"
                          >${(i==null?void 0:i.label)??P("bulkOpSet","Set")}</span
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
                        >${(i==null?void 0:i.label)??P("bulkOpOverwrite","Overwrite")}</span
                      >
                    </div>
                  `}
            </div>`}
        ${Kr(this._operation,this.field.type)?u`
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
          ${r?P("applyToSelected","Apply to selected"):P("apply","Apply")}
        </button>
      </div>
    `}},tt.styles=[Gg],tt._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),tt);Re([m({attribute:!1})],Se.prototype,"field");Re([m({attribute:!1})],Se.prototype,"autocomplete");Re([m({attribute:!1})],Se.prototype,"taxonomyService");Re([m({attribute:!1})],Se.prototype,"ultratags");Re([m({attribute:!1})],Se.prototype,"defaultLanguage");Re([m({attribute:!1})],Se.prototype,"ultratagsPresentOnSelection");Re([m({attribute:!1})],Se.prototype,"config");Re([m({type:Number})],Se.prototype,"selectedCount");Re([m({attribute:!1})],Se.prototype,"allowedValues");Re([m({type:String})],Se.prototype,"operationMode");Re([T()],Se.prototype,"_operation");Re([T()],Se.prototype,"_value");Re([T()],Se.prototype,"_pendingTaxonode");Re([T()],Se.prototype,"_opDropdownOpen");let im=Se;ie("sfx-bulk-meta-op-bar",im);var sm=Object.defineProperty,je=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&sm(e,t,r),r},Be;const ze=(Be=class extends G{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map,this._pendingFrontendLookup=Be._EMPTY_ULTRATAGS_LOOKUP,this._keyForFile=e=>e.id,this._renderRow=e=>{const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),r=(i==null?void 0:i.allowedValues)??null,o=(i==null?void 0:i.hidden)??!1;return u`
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
    `}}_recomputePendingFrontendLookup(){var t;if(((t=this.field)==null?void 0:t.type)!=="ultratags"||!this.pendingOp){this._pendingFrontendLookup=Be._EMPTY_ULTRATAGS_LOOKUP;return}const e=new Map;for(const i of Ai(this.pendingOp.value))i.sid&&e.set(i.sid,i),i.slug&&e.set(i.slug,i),i.uuid&&e.set(i.uuid,i);this._pendingFrontendLookup=e}willUpdate(e){(e.has("pendingOp")||e.has("field"))&&this._recomputePendingFrontendLookup()}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):Or(this.field.key)?Array.isArray(e.tags)?e.tags:[]:e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return this.files.length<=Be.VIRTUALIZE_THRESHOLD?u`${this.files.map(this._renderRow)}`:u`
      <lit-virtualizer
        .items=${this.files}
        .keyFunction=${this._keyForFile}
        .renderItem=${e=>this._renderRow(e)}
      ></lit-virtualizer>
    `}},Be.styles=[Xg],Be._EMPTY_ULTRATAGS_LOOKUP=new Map,Be.VIRTUALIZE_THRESHOLD=60,Be);je([m({attribute:!1})],ze.prototype,"files");je([m({attribute:!1})],ze.prototype,"field");je([m({attribute:!1})],ze.prototype,"staged");je([m({attribute:!1})],ze.prototype,"stagedTaxonodes");je([m({attribute:!1})],ze.prototype,"selected");je([m({attribute:!1})],ze.prototype,"pendingOp");je([m({attribute:!1})],ze.prototype,"config");je([m({attribute:!1})],ze.prototype,"autocomplete");je([m({attribute:!1})],ze.prototype,"taxonomyService");je([m({attribute:!1})],ze.prototype,"ultratags");je([m({attribute:!1})],ze.prototype,"defaultLanguage");je([m({attribute:!1})],ze.prototype,"perFileResolved");let rm=ze;ie("sfx-bulk-meta-table",rm);var om=Object.defineProperty,Ce=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&om(e,t,r),r},Ee;const xe=(Ee=class extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this.notApplicable=!1,this._error=null,this._liveStageTimer=null,this._onFieldBlur=e=>{e.stopPropagation(),this._cancelLiveStage(),this._processFieldValue(e.detail.value)},this._onFieldChange=e=>{var r;e.stopPropagation();const t=e.detail.value,i=(r=this.field)==null?void 0:r.type;if(this._cancelLiveStage(),Ee._IMMEDIATE_CHANGE_TYPES.has(i)){this._processFieldValue(t);return}Ee._LIVE_STAGE_TYPES.has(i)&&(this._liveStageTimer=setTimeout(()=>{this._liveStageTimer=null,this._processFieldValue(t,{silent:!0})},Ee._LIVE_STAGE_DELAY_MS))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}shouldUpdate(e){return!(!this.selected&&e.size>0&&[...e.keys()].every(t=>Ee._PENDING_PREVIEW_ONLY_KEYS.has(t)))}willUpdate(e){e.has("field")&&(this._error=null),(e.has("field")||e.has("file"))&&this._cancelLiveStage()}disconnectedCallback(){super.disconnectedCallback(),this._cancelLiveStage()}_cancelLiveStage(){this._liveStageTimer!==null&&(clearTimeout(this._liveStageTimer),this._liveStageTimer=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_processFieldValue(e,{silent:t=!1}={}){const i=bl(this.field,e,this.config??void 0);if(i){t||(this._error=i);return}this._error=null;const r={meta:{...this.file.meta,[this.field.key]:this.value}},o=co(this.field,e,r,At(this.field,this.config));JSON.stringify(o)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:o},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:lc(this.field,this.value,e.value,e.operation,At(this.field,this.config))}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t,i;const e=this.file;return u`
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
              alt=${P("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${r=>{const o=r.target,n=so();!o.dataset.fallback&&o.src!==n&&(o.dataset.fallback="1",o.src=n)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?Xd(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.notApplicable?u`<div
                class="row-field-na"
                title=${P("fieldNotApplicableHint","A metadata rule hides this field for this asset, so bulk changes won’t be applied to it.")}
              >
                ${P("fieldNotApplicable","Not applicable for this asset")}
              </div>`:this.pendingOp&&this.selected?u`<sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${this._computePreviewValue()}
                  .oldTaxonomyEntry=${((t=this.file.taxonodes)==null?void 0:t[this.field.key])??null}
                  .newTaxonomyEntry=${this.taxonomyEntry}
                  .config=${this.config}
                  .defaultLanguage=${this.defaultLanguage}
                  .pendingFrontendLookup=${this.pendingFrontendLookup}
                ></sfx-bulk-meta-diff-view>`:u`<div class="row-field-edit">
                    <sfx-metadata-field-edit
                      .field=${this.field}
                      .value=${gl(this.field,this.value,At(this.field,this.config))}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${this.taxonomyEntry}
                      .ultratags=${this.ultratags}
                      .language=${(i=this.config)==null?void 0:i.language}
                      .defaultLanguage=${this.defaultLanguage}
                      .allowedValues=${this.allowedValues}
                    ></sfx-metadata-field-edit>
                  </div>
                  ${this._error?u`<div class="row-error" role="alert">${this._error}</div>`:v}`}
        </div>
      </div>
    `}},Ee.styles=[Wg],Ee._PENDING_PREVIEW_ONLY_KEYS=new Set(["pendingOp","pendingFrontendLookup"]),Ee._IMMEDIATE_CHANGE_TYPES=new Set(["tags","ultratags","multi-select"]),Ee._LIVE_STAGE_TYPES=new Set(["text","textarea"]),Ee._LIVE_STAGE_DELAY_MS=300,Ee);Ce([m({attribute:!1})],xe.prototype,"file");Ce([m({attribute:!1})],xe.prototype,"field");Ce([m({attribute:!1})],xe.prototype,"value");Ce([m({attribute:!1})],xe.prototype,"taxonomyEntry");Ce([m({type:Boolean})],xe.prototype,"selected");Ce([m({attribute:!1})],xe.prototype,"pendingOp");Ce([m({attribute:!1})],xe.prototype,"config");Ce([m({attribute:!1})],xe.prototype,"autocomplete");Ce([m({attribute:!1})],xe.prototype,"taxonomyService");Ce([m({attribute:!1})],xe.prototype,"ultratags");Ce([m({attribute:!1})],xe.prototype,"defaultLanguage");Ce([m({attribute:!1})],xe.prototype,"pendingFrontendLookup");Ce([m({attribute:!1})],xe.prototype,"allowedValues");Ce([m({type:Boolean})],xe.prototype,"notApplicable");Ce([T()],xe.prototype,"_error");let nm=xe;ie("sfx-bulk-meta-row",nm);const am=new Set(["multi-select","tags","ultratags"]),lm=new Map;function Ia(s,e,t){return!e.regional_variants_group_uuid||s==null||typeof s!="object"||Array.isArray(s)?s:s[t??"en"]}function Fa(s){return Array.isArray(s)?s:[]}function La(s){return s==null||s===""||Array.isArray(s)&&s.length===0?!0:typeof s=="object"&&!Array.isArray(s)?!Object.values(s).some(e=>e!=null&&e!==""):!1}function Yr(s,e){var i;const t=(i=s.possible_values)==null?void 0:i.find(r=>r.internal_unique_value===e||r.api_value===e);return(t==null?void 0:t.label)??String(e)}function Ua(s,e){if(e==null||e==="")return"";switch(s.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Yr(s,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function za(s){return typeof s=="string"?s:s&&typeof s=="object"&&"label"in s?String(s.label):String(s)}function cm(s,e){const t=s.map(za),i=e.map(za),r=new Set(t),o=new Set(i),n=[];for(const a of i)n.push({label:a,state:r.has(a)?"kept":"added"});for(const a of t)o.has(a)||n.push({label:a,state:"removed"});return n}function dm(s,e,t,i,r){const o=Ai(s),n=Ai(e),a=t||"en",l=i||a,c=g=>g.sid||g.slug||g.uuid||"",d=g=>g.sid&&r.get(g.sid)||g.slug&&r.get(g.slug)||g.uuid&&r.get(g.uuid)||void 0,p=g=>{const S=g.i18n?g:d(g)??g;return Cs({i18n:S.i18n,slug:S.slug||g.slug||""},a,l).value||g.slug||g.sid||""},h=new Set(o.map(c).filter(Boolean)),f=new Set(n.map(c).filter(Boolean)),_=[];for(const g of n){const S=c(g);_.push({label:p(g),state:h.has(S)?"kept":"added"})}for(const g of o){const S=c(g);f.has(S)||_.push({label:p(g),state:"removed"})}return _}function um(s,e,t){const i=new Set(s.map(n=>JSON.stringify(n))),r=new Set(e.map(n=>JSON.stringify(n))),o=[];for(const n of e){const a=JSON.stringify(n),l=typeof n=="string"?Yr(t,n):String(n);o.push({label:l,state:i.has(a)?"kept":"added"})}for(const n of s){const a=JSON.stringify(n);if(!r.has(a)){const l=typeof n=="string"?Yr(t,n):String(n);o.push({label:l,state:"removed"})}}return o}function pm(s,e,t,i,r,o){const n=At(s,i),a=i==null?void 0:i.language,l=Ia(e,s,n),c=Ia(t,s,n);if(am.has(s.type)){if(s.type==="ultratags")return{kind:"array",items:dm(e,t,a,r,o??lm)};const d=Fa(l),p=Fa(c);return s.type==="tags"?{kind:"array",items:cm(d,p)}:{kind:"array",items:um(d,p,s)}}return{kind:"scalar",oldDisplay:Ua(s,l),newDisplay:Ua(s,c),oldEmpty:La(l),newEmpty:La(c)}}var hm=Object.defineProperty,xt=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&hm(e,t,r),r};const Jo=class Jo extends G{constructor(){super(...arguments),this._i18nController=new Ge(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:P("added","Added"),removed:P("removed","Removed"),kept:P("kept","Kept")};return u`
      <div class="diff-wrap" aria-label=${P("bulkOperationPreview","Bulk operation preview")}>
        ${e.items.length===0?u`<span class="diff-chip diff-chip--kept diff-chip--empty">—</span>`:e.items.map(i=>u`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.state==="removed"?u`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=P("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?P("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?P("emptyValue","empty"):e.newDisplay});return u`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${P("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${t}</span>
        ${e.newEmpty?v:u`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var n,a;const e=((n=this.newTaxonomyEntry)==null?void 0:n.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",i=!t,r=!e,o=P("willChangeFromTo","Will change from {{from}} to {{to}}",{from:i?P("emptyValue","empty"):t,to:r?P("emptyValue","empty"):e});return u`
      <div
        class="diff-wrap diff-scalar-text"
        aria-label=${P("bulkOperationPreview","Bulk operation preview")}
      >
        <span class="sr-only">${o}</span>
        ${r?v:u`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){if(!this.field)return v;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=pm(this.field,this.oldValue,this.newValue,this.config,this.defaultLanguage,this.pendingFrontendLookup);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Jo.styles=[Jg];let qe=Jo;xt([m({attribute:!1})],qe.prototype,"field");xt([m({attribute:!1})],qe.prototype,"oldValue");xt([m({attribute:!1})],qe.prototype,"newValue");xt([m({attribute:!1})],qe.prototype,"oldTaxonomyEntry");xt([m({attribute:!1})],qe.prototype,"newTaxonomyEntry");xt([m({attribute:!1})],qe.prototype,"config");xt([m({attribute:!1})],qe.prototype,"defaultLanguage");xt([m({attribute:!1})],qe.prototype,"pendingFrontendLookup");ie("sfx-bulk-meta-diff-view",qe);function uc(s){let e=s;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var fm=Object.defineProperty,ye=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&fm(e,t,r),r};const Da=3,pc=`
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
`,gm=260,mm=80;let vi;function vm(){if(vi!==void 0)return vi;try{const s=new CSSStyleSheet;s.replaceSync(pc),vi=s}catch{vi=null}return vi}var pt;const me=(pt=class extends G{constructor(){super(...arguments),this.t=Le,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Da,this._touch=!1,this._dragCounter=0,this._unsubscribeTouch=null,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&rc(t).then(({files:i,hadDirectories:r})=>{i.length>0?this._emitFiles(i,r):r&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const r of i){const o=r.webkitRelativePath;o&&Co(r,o)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var r;if(!this.isConnected||this.offsetWidth===0)return;const t=(r=e.clipboardData)==null?void 0:r.items;if(!t)return;const i=[];for(const o of t)if(o.kind==="file"){const n=o.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._returnFocusTo=null,this._inertedSiblings=[],this._lockedScrollHost=null,this._exitingPortal=null,this._onSheetKeyDown=e=>{if(e.key==="Escape"){e.stopPropagation(),this._closeMore();return}if(e.key!=="Tab")return;const t=e.currentTarget,i=t.querySelectorAll("button:not([disabled])");if(i.length===0)return;const r=i[0],o=i[i.length-1],n=t.getRootNode().activeElement;e.shiftKey&&(n===r||n===t)?(e.preventDefault(),o.focus()):!e.shiftKey&&n===o&&(e.preventDefault(),r.focus())},this._sheetDrag=null,this._onSheetPointerDown=e=>{var r;const t=e.currentTarget,i=t.closest(".sfx-more-sheet");if(!(!i||this._sheetDrag)){this._sheetDrag={pointerId:e.pointerId,startY:e.clientY,sheet:i,handle:t};try{(r=t.setPointerCapture)==null||r.call(t,e.pointerId)}catch{}window.addEventListener("pointermove",this._onSheetPointerMove),window.addEventListener("pointerup",this._onSheetPointerUp),window.addEventListener("pointercancel",this._onSheetPointerUp)}},this._onSheetPointerMove=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;const i=e.clientY-t.startY;if(i<=0){t.sheet.style.transform="";return}t.sheet.classList.add("dragging"),t.sheet.style.transform=`translateY(${i}px)`},this._onSheetPointerUp=e=>{const t=this._sheetDrag;if(!t||e.pointerId!==t.pointerId)return;this._endSheetDrag();const i=e.clientY-t.startY;t.sheet.classList.remove("dragging"),t.sheet.style.transform="",e.type!=="pointercancel"&&i>mm&&this._closeMore()},this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}get _folderEnabled(){return this.directory&&this.multi&&Od()}browse(e="files"){var t;if(e==="folder"&&this._folderEnabled&&this.folderInput){this.folderInput.click();return}(t=this.fileInput)==null||t.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_closeMore(){this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())}_updateDropdownPortal(){var e;if(this._moreOpen){const t=this.sources.slice(this._visiblePills),i=((e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-sheet"))!=null;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),uc(this).appendChild(this._portalContainer),this._injectDropdownStyles());const r=t.map(o=>u`
          <button class="sfx-more-item" @click=${n=>this._onMoreItemClick(o,n)}>
            <div class="sfx-more-item-ico">
              ${o.brandHtml?Et(o):o.iconColor?u`<svg viewBox="0 0 24 24" ${te({color:o.iconColor})}>
                      ${lt(o.icon)}
                    </svg>`:Z`<svg viewBox="0 0 24 24">${lt(o.icon)}</svg>`}
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
              ${r}
            </div>
          `,this._portalContainer),i||(this._lockBackground(),this._captureReturnFocus()),requestAnimationFrame(()=>{var a;(a=this._portalContainer)==null||a.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(l=>l.classList.add("open")),i||this._focusSheet()})}else this._unlockBackground(),Ze(u`<div class="sfx-more-dropdown open">${r}</div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._teardownPortal({animate:!0})}_backgroundLockable(){return typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype}_lockBackground(){const e=this._portalContainer;if(!e||this._lockedScrollHost)return;const t=e.parentElement;if(t&&this._backgroundLockable())for(const r of Array.from(t.children))r===e||!(r instanceof HTMLElement)||r.inert||(r.inert=!0,this._inertedSiblings.push(r));const i=t===document.body?document.documentElement:t;i instanceof HTMLElement&&(this._lockedScrollHost={el:i,overflow:i.style.overflow},i.style.overflow="hidden")}_unlockBackground(){for(const e of this._inertedSiblings)e.inert=!1;this._inertedSiblings=[],this._lockedScrollHost&&(this._lockedScrollHost.el.style.overflow=this._lockedScrollHost.overflow,this._lockedScrollHost=null)}_captureReturnFocus(){var t;const e=((t=this.shadowRoot)==null?void 0:t.activeElement)??document.activeElement;this._returnFocusTo=e&&typeof e.focus=="function"?e:null}_focusSheet(){var i,r;const e=(i=this._portalContainer)==null?void 0:i.querySelector(".sfx-more-sheet");(r=(e==null?void 0:e.querySelector(".sfx-more-item"))??e)==null||r.focus()}_restoreFocus(){const e=this._returnFocusTo;this._returnFocusTo=null,e!=null&&e.isConnected&&e.focus()}_teardownPortal({animate:e}){this._unlockBackground(),this._reapExitingPortal();const t=this._portalContainer;if(!t)return;this._portalContainer=null;const i=t.querySelector(".sfx-more-sheet");if(!e||!i||Ld()){Ze(v,t),t.remove(),this._restoreFocus();return}t.querySelectorAll(".sfx-more-sheet, .sfx-more-backdrop").forEach(r=>r.classList.remove("open")),t.style.pointerEvents="none",this._exitingPortal={el:t,timer:setTimeout(()=>this._reapExitingPortal(),gm)},this._restoreFocus()}_reapExitingPortal(){const e=this._exitingPortal;e&&(this._exitingPortal=null,clearTimeout(e.timer),Ze(v,e.el),e.el.remove())}_endSheetDrag(){var t,i;const e=this._sheetDrag;if(this._sheetDrag=null,window.removeEventListener("pointermove",this._onSheetPointerMove),window.removeEventListener("pointerup",this._onSheetPointerUp),window.removeEventListener("pointercancel",this._onSheetPointerUp),!!e)try{(i=(t=e.handle).releasePointerCapture)==null||i.call(t,e.pointerId)}catch{}}_injectDropdownStyles(){var o;const e=(o=this._portalContainer)==null?void 0:o.getRootNode();if(!e)return;const t=vm();if(t&&Array.isArray(e.adoptedStyleSheets)){if(e.adoptedStyleSheets.includes(t))return;e.adoptedStyleSheets=[...e.adoptedStyleSheets,t];return}const i=e instanceof Document?e.head:e;if(!i||i.querySelector("style[data-sfx-more-dropdown-styles]"))return;const r=document.createElement("style");r.setAttribute("data-sfx-more-dropdown-styles",""),r.textContent=pc,i.appendChild(r)}_positionDropdown(){var p,h;const e=(p=this.shadowRoot)==null?void 0:p.querySelector(".more-wrap > button"),t=(h=this._portalContainer)==null?void 0:h.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),r=8,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+r||a>l?t.style.top=`${i.top-o-r}px`:t.style.top=`${i.bottom+r}px`;let d=i.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),t.style.left=`${d}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=Da}connectedCallback(){super.connectedCallback(),this._touch=dt(),this._unsubscribeTouch=ul(()=>{this._touch=dt(),this._moreOpen&&this._updateDropdownPortal()}),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var r;const i=(((r=e[0])==null?void 0:r.contentRect.width)??this.getBoundingClientRect().width)>=pt._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._endSheetDrag(),this._moreOpen=!1,this._teardownPortal({animate:!1})}_renderPill(e){return u`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?Et(e):u`<span class="pill-ico" ${te(e.iconColor?{color:e.iconColor}:null)}>
              ${Z`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${lt(e.icon)}</svg>`}
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
              ${Z`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${lt(e.icon)}</svg>`}
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
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":"",this._touch?"touch":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills),r=this._touch&&!this.compact;return u`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role=${r?v:"button"}
          tabindex=${r?v:"0"}
          aria-label=${r?v:this.t("dropFilesHere","Drop files here or click to browse")}
          @click=${this._onClick}
          @keydown=${r?v:this._onKeyDown}
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

          ${r?this._renderPrimaryCta():this._renderTitle()}
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
                        ${o.brandHtml?Et(o):Z`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${lt(o.icon)}</svg>`}
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
    `}},pt.styles=q`
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

    ${Ae}
  `,pt._WIDE_THRESHOLD_PX=1200,pt);ye([m({attribute:!1})],me.prototype,"t");ye([m({type:Boolean,reflect:!0})],me.prototype,"compact");ye([m({type:Boolean,attribute:"external-drag-over"})],me.prototype,"externalDragOver");ye([m({type:String})],me.prototype,"accept");ye([m({type:Boolean})],me.prototype,"multi");ye([m({type:Boolean})],me.prototype,"directory");ye([m({type:Array})],me.prototype,"sources");ye([m({type:String,attribute:"sources-layout"})],me.prototype,"sourcesLayout");ye([m({type:String,reflect:!0})],me.prototype,"mode");ye([T()],me.prototype,"_dragOver");ye([T()],me.prototype,"_moreOpen");ye([T()],me.prototype,"_visiblePills");ye([T()],me.prototype,"_touch");ye([Ls(".ripple")],me.prototype,"_rippleEl");ye([Ls("input[data-sfx-dz-files]")],me.prototype,"fileInput");ye([Ls("input[data-sfx-dz-folder]")],me.prototype,"folderInput");let bm=me;const Xo=class Xo extends G{constructor(){super(...arguments),this._i18nController=new yd(this)}render(){return u`
      <div class="line"></div>
      <div class="label">${$t("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Xo.styles=q`
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
  `;let Gr=Xo;var xm=Object.defineProperty,oe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&xm(e,t,r),r};const Wr=new CSSStyleSheet;Wr.replaceSync(`
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
`);const Zo=class Zo extends G{constructor(){super(...arguments),this.t=Le,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this.namingViolationIds=new Set,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var r;if((r=this._portalContainer)!=null&&r.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const r of i){const o=r.webkitRelativePath;o&&Co(r,o)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),uc(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),Ze(u`<div class="sfx-tile-dropdown">
        ${e.map(t=>u`
            <button
              class="sfx-tile-dropdown-item"
              @click=${i=>this._onMoreSourceClick(i,t)}
            >
              <span
                class="sfx-tile-dropdown-ico"
                ${te(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}
              >
                ${t.brandHtml?Et(t):Z`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${lt(t.icon)}</svg>`}
              </span>
              ${t.labelKey?this.t(t.labelKey,t.label):t.label}
            </button>
          `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var p;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(p=this._portalContainer)==null?void 0:p.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),r=6,o=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=o+r||a>l?t.style.top=`${i.top-o-r}px`:t.style.top=`${i.bottom+r}px`;let d=i.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),t.style.left=`${d}px`}_closePortal(){this._portalContainer&&(Ze(v,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Wr)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Wr]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return u`
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
          ${this.directory&&this.multi?u`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >
                  ${this.t("uploadFolder","folder")}
                </button>
              </div>`:v}
          ${t.length>0?u`
                <div class="drop-tile-sources">
                  ${t.map(r=>u`
                      <button
                        class="drop-tile-src"
                        ${te(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                        title=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        aria-label=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                        @click=${o=>this._onSourceClick(o,r)}
                      >
                        ${r.brandHtml?Et(r):Z`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${lt(r.icon)}</svg>`}
                      </button>
                    `)}
                  ${i.length>0?u`
                        <div class="drop-tile-more-wrap">
                          <button
                            class="drop-tile-more"
                            title=${this.t("moreSources","More sources")}
                            aria-label=${this.t("moreSources","More sources")}
                            @click=${r=>this._toggleMore(r)}
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
        ${this.directory&&this.multi?u`<input
              data-sfx-fl-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileInput}
            />`:v}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const t=this.files.map(r=>r.id).join(","),i=t!==this._fileIdsKey;return this._fileIdsKey=t,this.store?!(e.size===1&&e.has("files")&&!i):!0}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(o=>this.searchResults.has(o)).length,i=e?Math.round(t/e*100):0,r=e>0&&t===e;return u`
      ${e>1&&!this.previewOpen?u`
            <div class="similar-banner search">
              ${r?u`<span class="search-done-ico"
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
                  >${r?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b
                >
                <span
                  >${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span
                >
                <div class="search-bar">
                  <div class="search-bar-fill" ${te({width:`${i}%`})}></div>
                </div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${r?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:v}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():v}
        ${Xt(this.files,o=>o.id,(o,n)=>{const a=this.searchResults.get(o.id);return u`<sfx-file-item
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
    `}};Zo.styles=q`
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

    ${Ae}
  `;let Q=Zo;oe([m({attribute:!1})],Q.prototype,"t");oe([m({attribute:!1})],Q.prototype,"files");oe([m({attribute:!1})],Q.prototype,"store");oe([m({type:Boolean})],Q.prototype,"showDropTile");oe([m({attribute:!1})],Q.prototype,"sources");oe([m({type:String})],Q.prototype,"accept");oe([m({type:Boolean})],Q.prototype,"multi");oe([m({type:Boolean})],Q.prototype,"directory");oe([m({type:Boolean})],Q.prototype,"allowRename");oe([m({type:String})],Q.prototype,"mode");oe([m({type:Boolean})],Q.prototype,"showLocateButton");oe([m({type:Boolean})],Q.prototype,"showCopyCdnButton");oe([m({type:Boolean})],Q.prototype,"showCheckSimilar");oe([m({type:Boolean})],Q.prototype,"selectMode");oe([m({attribute:!1})],Q.prototype,"selectedIds");oe([m({type:Boolean})],Q.prototype,"allSelected");oe([m({type:Boolean})],Q.prototype,"selectionFull");oe([m({type:Number})],Q.prototype,"maxSelection");oe([m({type:Boolean})],Q.prototype,"previewOpen");oe([m({attribute:!1})],Q.prototype,"searchRunIds");oe([m({attribute:!1})],Q.prototype,"searchActiveIds");oe([m({attribute:!1})],Q.prototype,"searchResults");oe([m({attribute:!1})],Q.prototype,"namingViolationIds");oe([T()],Q.prototype,"_moreOpen");oe([T()],Q.prototype,"_dropTileMaxVisible");var ym=Object.defineProperty,ae=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&ym(e,t,r),r};const Qo=class Qo extends G{constructor(){super(...arguments),this.t=Le,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this.namingViolation=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let r=e.right+12;r+t>window.innerWidth-8&&(r=e.left-t-12),this._simPopLeft=Math.max(8,r),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,t)=>{const i=t.currentTarget.getBoundingClientRect(),r=140;this._tipLeft=Math.max(r+8,Math.min(i.left+i.width/2,window.innerWidth-r-8)),this._tipBelow=i.top<60,this._tipTop=this._tipBelow?i.bottom+8:i.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const t=e.files.get(this.fileId);t!==this._lastFile&&(this._lastFile=t,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),t=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(i=>{var r;i.some(o=>o.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(r=this._io)==null||r.disconnect(),this._io=void 0)},{root:t,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",r=e.status==="complete"&&!!e.alreadyExisted;return i||r}_maybeProbeDims(){var i,r;const e=this._file,t=(e==null?void 0:e.previewUrl)??null;if(t!==this._dimsForUrl){if(this._dimsForUrl=t,this._dims="",t!=null&&t.startsWith("blob:")){const o=new Image;o.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===t&&(this._dims=`${o.naturalWidth}×${o.naturalHeight}`)},o.src=t}else if((r=(i=e==null?void 0:e.response)==null?void 0:i.file)!=null&&r.info){const o=e.response.file.info;o.img_w&&o.img_h&&(this._dims=`${o.img_w}×${o.img_h}`)}}}disconnectedCallback(){var e,t;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(t=this._io)==null||t.disconnect(),this._io=void 0}_emit(e,t){var i;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(i=this._file)==null?void 0:i.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,r,o,n;e.stopPropagation();const t=(n=(o=(r=(i=this._file)==null?void 0:i.response)==null?void 0:r.file)==null?void 0:o.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var k,C,x;const e=this._file;if(!e)return v;const t=De(e),i=e.status==="complete",r=e.status==="uploading",o=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",c=l||this.reviewPick||!this.allowRename,d=Rg(e.name),p=t==="image"&&!nt(e.type),h=this.selectMode&&p&&!l,f=this.similarCount>=0,_=h&&!f&&!i&&this.similarStatus==="",g=!l&&!i&&!r&&!o&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,S=g,E=["tile",i?"done":"",r?"uploading":"",o?"paused":"",a?"rejected":"",this.namingViolation?"naming-violation":"",l?"review":"",_?"selectable":"",_&&this.isSelected?"selected":"",this.selectionActive&&!p&&!l?"select-dimmed":"",S?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return u`
      <div
        class=${E}
        tabindex="0"
        title=${this.namingViolation?this.t("namingConventionMismatchTooltip","This filename doesn't match the naming convention required for this project."):v}
        @click=${this.reviewPick?this._reviewSelect:_?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?u`<img class="preview-img" src=${e.previewUrl} alt="" decoding="async" />`:u`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${ro(d)}
                    alt="${d?this.t("extFile","{{ext}} file",{ext:d}):this.t("file","File")}"
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
          ${_?u`
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
          ${g?u`
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
          ${i&&((k=e.response)!=null&&k.file)&&(this.showLocateButton&&e.response.file.uuid||this.showCopyCdnButton&&((C=e.response.file.url)!=null&&C.cdn))?u`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?u`<button
                        class="review-action secondary"
                        @click=${this._locate}
                        aria-label=${this.t("locate","Locate")}
                      >
                        <svg viewBox="0 0 24 24">${ll}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:v}
                  ${this.showCopyCdnButton&&((x=e.response.file.url)!=null&&x.cdn)?u`<button
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
                ${r&&e.isTus?u`
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
            ?readonly=${c}
            @change=${c?v:this._rename}
            @click=${w=>w.stopPropagation()}
          />
          <div class="meta">
            ${d||""}${e.size?` · ${Jt(e.size)}`:""}${this._dims?` · ${this._dims}`:""}
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
    </div>`:v}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return v;const e=[...this.similarResults].sort((l,c)=>c.score-l.score),t=e[0],i=e.length,r=e.slice(1),o=r.slice(0,3),n=r.length-o.length,a=Math.round(t.score*100);return u`
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
          ${r.length?u`<div class="pop-thumbs">
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
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};Qo.styles=q`
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

    ${Ae}
  `;let se=Qo;ae([m({attribute:!1})],se.prototype,"t");ae([m({attribute:!1})],se.prototype,"store");ae([m({type:String})],se.prototype,"fileId");ae([m({attribute:!1})],se.prototype,"file");ae([m({type:String})],se.prototype,"mode");ae([m({type:Boolean})],se.prototype,"allowRename");ae([m({type:Boolean})],se.prototype,"showLocateButton");ae([m({type:Boolean})],se.prototype,"showCopyCdnButton");ae([m({type:Boolean})],se.prototype,"showCheckSimilar");ae([m({type:Boolean})],se.prototype,"selectMode");ae([m({type:Boolean})],se.prototype,"isSelected");ae([m({type:Boolean})],se.prototype,"selectionActive");ae([m({type:Boolean})],se.prototype,"selectionFull");ae([m({type:Boolean})],se.prototype,"previewOpen");ae([m({type:String})],se.prototype,"similarStatus");ae([m({type:Number})],se.prototype,"similarCount");ae([m({attribute:!1})],se.prototype,"similarResults");ae([m({type:Boolean})],se.prototype,"reviewPick");ae([m({type:Boolean})],se.prototype,"namingViolation");ae([T()],se.prototype,"_dims");ae([T()],se.prototype,"_simPopover");ae([T()],se.prototype,"_copied");ae([T()],se.prototype,"_tip");var _m=Object.defineProperty,Xi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&_m(e,t,r),r};const en=class en extends G{constructor(){super(...arguments),this.t=Le,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return u`
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
    `}};en.styles=q`
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
  `;let gt=en;Xi([m({attribute:!1})],gt.prototype,"t");Xi([m({attribute:!1})],gt.prototype,"files");Xi([m({type:Boolean})],gt.prototype,"showLocateButton");Xi([m({type:Boolean})],gt.prototype,"showCopyCdnButton");Xi([T()],gt.prototype,"_filter");ie("sfx-last-upload-review",gt);const Ys=q`
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
`;var wm=Object.defineProperty,Oe=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&wm(e,t,r),r};const tn=class tn extends G{constructor(){super(...arguments),this.t=Le,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.requiredFieldsTotal=0,this.requiredFieldsRemaining=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1,this.blocked=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?v:u`
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
              ${cl}
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
    `}get _uploadLabel(){return this.requiredFieldsTotal>0&&this.requiredFieldsRemaining===this.requiredFieldsTotal?{key:"fillRequiredMetadata",fallback:"Fill required metadata"}:this.requiredFieldsRemaining>0?{key:"nextMetadata",fallback:"Next metadata"}:this.fileCount>1?{key:"uploadAll",fallback:"Upload all ({{count}})",interpolations:{count:this.fileCount}}:{key:"upload",fallback:"Upload"}}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i="btn-primary",r=this._uploadLabel,o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t(r.key,r.fallback,r.interpolations);return u`
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
                  >${this.t(r.key,r.fallback,r.interpolations)}</span
                >
              `}
      </button>
    `}};tn.styles=[Ys,Gs,q`
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
    `];let ge=tn;Oe([m({attribute:!1})],ge.prototype,"t");Oe([m({type:String})],ge.prototype,"uploadState");Oe([m({type:Number})],ge.prototype,"fileCount");Oe([m({type:Number})],ge.prototype,"failedCount");Oe([m({type:Boolean})],ge.prototype,"showFillMetadata");Oe([m({type:Boolean})],ge.prototype,"requireMetadataFirst");Oe([m({type:Number})],ge.prototype,"requiredFieldsTotal");Oe([m({type:Number})],ge.prototype,"requiredFieldsRemaining");Oe([m({type:Boolean})],ge.prototype,"showCheckSimilar");Oe([m({type:Boolean})],ge.prototype,"selectMode");Oe([m({type:Number})],ge.prototype,"selectedCount");Oe([m({type:Number})],ge.prototype,"maxSelection");Oe([m({type:Boolean})],ge.prototype,"allSelected");Oe([m({type:Boolean})],ge.prototype,"blocked");const km='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function To(s,e){return t=>{if(t.key!=="Tab")return;const i=s();if(!i)return;const r=i.querySelector(e);if(!r)return;const o=Array.from(r.querySelectorAll(km));if(o.length===0)return;const n=o[0],a=o[o.length-1],l=i.activeElement;t.shiftKey?(l===n||!r.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!r.contains(l))&&(t.preventDefault(),n.focus())}}var $m=Object.defineProperty,Ws=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&$m(e,t,r),r};const sn=class sn extends G{constructor(){super(...arguments),this.t=Le,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=To(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");r&&(r.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";const t=!!this._name.trim();let i=this._name.trim();if(!i)try{const r=new URL(e).pathname.split("/");i=r[r.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i,nameIsUserDefined:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return u`
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
    `}};sn.styles=[Ys,Gs,Ae,q`
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
    `];let zt=sn;Ws([m({attribute:!1})],zt.prototype,"t");Ws([T()],zt.prototype,"_url");Ws([T()],zt.prototype,"_name");Ws([T()],zt.prototype,"_error");var Sm=Object.defineProperty,Zi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Sm(e,t,r),r};const rn=class rn extends G{constructor(){super(...arguments),this.t=Le,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=To(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var r,o;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("video"),t=(o=this.shadowRoot)==null?void 0:o.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
    `}};rn.styles=[Ys,Gs,q`
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
    `];let mt=rn;Zi([m({attribute:!1})],mt.prototype,"t");Zi([T()],mt.prototype,"_stream");Zi([T()],mt.prototype,"_error");Zi([T()],mt.prototype,"_captured");Zi([T()],mt.prototype,"_previewUrl");var Cm=Object.defineProperty,pi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Cm(e,t,r),r};const on=class on extends G{constructor(){super(...arguments),this.t=Le,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=To(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=r=>{r.data.size>0&&this._chunks.push(r.data)},this._recorder.onstop=()=>{var o;const r=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=r,this._previewUrl=URL.createObjectURL(r),(o=this._stream)==null||o.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
    `];let st=on;pi([m({attribute:!1})],st.prototype,"t");pi([T()],st.prototype,"_stream");pi([T()],st.prototype,"_recording");pi([T()],st.prototype,"_error");pi([T()],st.prototype,"_recordedBlob");pi([T()],st.prototype,"_previewUrl");var Em=Object.defineProperty,Ao=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Em(e,t,r),r};const nn=class nn extends G{constructor(){super(...arguments),this.t=Le,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(r=>r.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(r=>r.id!==e)},200)}_iconForType(e){return e==="error"?u`<svg
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
    `}};nn.styles=q`
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
  `;let ri=nn;Ao([m({attribute:!1})],ri.prototype,"t");Ao([m({type:Number})],ri.prototype,"duration");Ao([T()],ri.prototype,"_toasts");ie("sfx-toast",ri);var Pm=Object.defineProperty,j=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Pm(e,t,r),r};const Ma=new Set(["unsplash"]),ot=10,Tm=3,Am=["auto","mobile","tablet","desktop","hq","sample"],Rm=["hls"],Kt={isTus:!1,tusUploadUrl:null,relativeFolder:""},ja=new Set(["complete","failed","error","cancelled","rejected"]);var ee;const M=(ee=class extends G{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1,this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!1,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._seededSettingsDefaults=null,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=_i,this._cachedSourcesConfig=void 0,this._cachedSourcesTouch=void 0,this._cachedSourcesAccept=void 0,this._unsubscribeTouch=null,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._metadataSchemaResolveId=0,this._settingsResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:r}=e.detail;if(St(i)){this.updateFileFocusPoint(t,r??null);return}if(kr(i)){const a=$r(i);if(!a)return;const l=r===""||r==null,c=a==="position"?{position:l?void 0:Number(r)}:{ref:l?void 0:String(r)};this.updateFileProduct(t,c);return}const o=this._store.getState().files.get(t);if(!o)return;const n=new Map(this._store.getState().files);n.set(t,{...o,meta:{...o.meta,[i]:r}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewMetadataChange=e=>{St(e.detail.key)&&(this._focusPointDraft=e.detail.value??null)},this._onFocusPointPickToggle=e=>{var t;this._focusPointPicking=e.detail.picking,e.detail.picking&&((t=this.renderRoot.querySelector(".preview-img-wrap"))==null||t.scrollIntoView({block:"nearest",behavior:"smooth"}))},this._onPreviewFieldHover=e=>{St(e.detail.key)&&(this._focusPointFieldHovered=e.detail.hovering)},this._onPreviewFieldFocus=e=>{const t=St(e.detail.key);e.detail.focused?(this._focusPointFieldFocused=t,t||(this._focusPointPicking=!1)):t&&(this._focusPointFieldFocused=!1)},this._onPreviewMetadataEscape=e=>{St(e.detail.key)&&(this._focusPointPicking=!1)},this._onFocusPointPick=e=>{const t=this._previewFileId;if(!t)return;const{horizontal:i,vertical:r}=e.detail;this._focusPointDraft=null,this.updateFileFocusPoint(t,`${i},${r}`)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var r;const i=(r=this.config)==null?void 0:r.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(o){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",o),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onCaptureChange=e=>{const t=e.target,i=Array.from(t.files??[]);t.value="",i.length>0&&this._processIncomingFiles(i)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var r,o,n,a;const t=this._mergedSources.find(l=>l.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(l){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,l)}return}if(e==="device"){const l=this.shadowRoot.querySelector("sfx-drop-zone");l==null||l.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){if(dt()&&this._captureInput){this._captureInput.click();return}this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((o=(r=this.config)==null?void 0:r.connectors)==null?void 0:o.providers)??[]).includes(e)){if(e==="google-drive"&&((a=(n=this.config)==null?void 0:n.connectors)!=null&&a.googlePicker)){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:l}=await J(async()=>{const{SfxGooglePickerView:c}=await import("./google-picker-view-CENeIpLN.js");return{SfxGooglePickerView:c}},[]);customElements.define("sfx-google-picker-view",l)}}else if(Ma.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await J(async()=>{const{SfxSearchProviderBrowser:c}=await import("./search-provider-browser-Bav0Rr1s.js");return{SfxSearchProviderBrowser:c}},[]);customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await J(async()=>{const{SfxProviderBrowser:c}=await import("./provider-browser-DTOYvBNN.js");return{SfxProviderBrowser:c}},[]);customElements.define("sfx-provider-browser",l)}this._activeConnector=e}},this._onUrlSubmit=e=>{var h,f,_;this._showUrlDialog=!1;const{url:t,name:i,nameIsUserDefined:r}=e.detail,o=(h=this.config)==null?void 0:h.callbacks,n=Hr(i),a=n.startsWith("image/");if(hr(i))return;const l=this._store.getState();if([...l.files.values()].some(g=>g.name===i&&g.status!=="rejected"&&g.status!=="cancelled"))return;const d=fr({name:i,size:0,type:n},l.restrictions,l.files);if(d){const g={id:Vt(),status:"rejected",file:null,remoteUrl:t,name:i,nameIsUserDefined:r,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt};Nt(this._store,g),this._dispatchPublic(V.FILE_REJECTED,{file:g,reason:d.message}),(f=o==null?void 0:o.onFileRejected)==null||f.call(o,g,d.message);return}const p={id:Vt(),status:"idle",file:null,remoteUrl:t,name:i,nameIsUserDefined:r,size:0,type:n,previewUrl:a?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt};Nt(this._store,p),this._dispatchPublic(V.FILE_ADDED,{file:p}),(_=o==null?void 0:o.onFileAdded)==null||_.call(o,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,r,o;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(V.FILE_PREVIEW,{file:t}),(o=(r=(i=this.config)==null?void 0:i.callbacks)==null?void 0:r.onFilePreview)==null||o.call(r,t))},this._onFillMetadata=()=>{var t,i,r,o;this._bulkMetadataHadIssuesOnOpen=this._hasMetadataIssues;const e=[...this._store.getState().files.values()].filter(n=>ee._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(V.FILL_METADATA,{files:e}),(o=(r=(i=this.config)==null?void 0:i.callbacks)==null?void 0:r.onFillMetadata)==null||o.call(r,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=ot)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,ot).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{if(!this._firstMissingRequiredFieldKey()){const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning")}this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var r,o,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(V.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFileCopyCdn)==null||n.call(o,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:r,meta:o}of t){const n=i.get(r);n&&i.set(r,{...n,meta:{...n.meta,...o}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,r=new Map(i);for(const{fileId:o,taxonodes:n}of t){const a=i.get(o);if(!a||!ee._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[c,d]of Object.entries(n))d==null?delete l[c]:l[c]=d;r.set(o,{...a,taxonodes:l})}this._store.setState({files:r})},this._onBulkMetadataClose=e=>{var r;const i=((r=e.detail)==null?void 0:r.saved)===!0&&this._bulkMetadataHadIssuesOnOpen&&!this._hasMetadataIssues;this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,i&&this._onUploadStart()},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var r,o,n;const t=(r=this.config)==null?void 0:r.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(o=this._engine)==null||o.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(V.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var r;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(r=t==null?void 0:t.shadowRoot)==null?void 0:r.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(r=>r.status==="complete"||r.status==="failed"||r.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=mi.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&mi.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var n,a,l,c;const t=(n=this.config)==null?void 0:n.callbacks,i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1,r=(d,p,h)=>`${d}\0${p}\0${h}`,o=new Set;for(const d of this._store.getState().files.values())d.status!=="rejected"&&d.status!=="cancelled"&&o.add(r(d.name,d.size,d.relativeFolder??""));for(const d of e.detail.files){if(hr(d.name))continue;const p=i?d.relativeFolder??"":"",h=this._store.getState(),f=r(d.name,d.size,p);if(o.has(f))continue;const _=d.thumbnail?this._transformRemoteThumbnail(d.thumbnail,{source:"connector",providerId:d.provider}):null,g=fr({name:d.name,size:d.size,type:d.mimeType},h.restrictions,h.files);if(g){const E={id:Vt(),status:"rejected",file:null,remoteUrl:null,name:d.name,size:d.size,type:d.mimeType,previewUrl:_,duration:null,progress:0,speed:0,bytesUploaded:0,error:g.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:d,...Kt,relativeFolder:p};Nt(this._store,E),this._dispatchPublic(V.FILE_REJECTED,{file:E,reason:g.message}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,E,g.message);continue}const S={id:Vt(),status:"idle",file:null,remoteUrl:null,name:d.name,size:d.size,type:d.mimeType,previewUrl:_,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:d,...Kt,relativeFolder:p};Nt(this._store,S),o.add(f),this._dispatchPublic(V.FILE_ADDED,{file:S}),(c=t==null?void 0:t.onFileAdded)==null||c.call(t,S)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,r,o,n;this._dispatchPublic(V.COMPLETE_ACTION,{}),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||r.call(i),(((o=this.config)==null?void 0:o.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(V.CANCEL,{})},this._onConfirmDismissOk=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!0),this._confirmDismissResolve=null},this._onConfirmDismissCancel=()=>{var e;this._confirmDismissVisible=!1,(e=this._confirmDismissResolve)==null||e.call(this,!1),this._confirmDismissResolve=null},this._onModalDismiss=async()=>{var e,t,i,r;await this._confirmDismiss()&&(this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(V.CANCEL,{}),this.close())},this._onCancelUpload=()=>{var e,t,i,r;(e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(V.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(V.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(V.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,r;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(V.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&rc(t).then(({files:i,hadDirectories:r})=>{if(i.length===0){r&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:r}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._confirmDismissVisible){this._onConfirmDismissCancel();return}if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const r=((t=this.config)==null?void 0:t.mode)??"modal",o=((i=this.config)==null?void 0:i.header)??(r==="modal"?"close":!0);(o==="close"||o==="back")&&(r==="modal"&&this._isOpen?this._onModalDismiss():r==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const r=i.getBoundingClientRect(),o=(t-r.left)/r.width*100;this._splitPct=Math.max(25,Math.min(75,o))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._namingViolationIds=new Set,this._namingViolationIdsKey="",this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=ee._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),r=i===-1?1:(i+1)%t.length;this._fsZoom=t[r],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,r=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+r,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Dd(),this._storeCtrl=new Md(this,this._store)}get _lastUploadId(){var i,r;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(r=this.config)==null?void 0:r.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,r;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(o=>o.type===hs.LANGUAGES);return((r=t==null?void 0:t.variants.find(Boolean))==null?void 0:r.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,r,o;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((r=this.config)==null?void 0:r.locale)??void 0;return{...rp((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var r,o,n;const t=(((r=this._metadataSchema)==null?void 0:r.regionalVariantsGroups)??[]).find(a=>a.type===hs.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(o=this.config)==null?void 0:o.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var r;const e=(r=this.config)==null?void 0:r.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}get _localizedMetadataSchema(){const e=this._metadataSchema;if(!e)return null;const t=this._metadataTranslations;if(!t)return e;const i=this._localizedSchemaCache;if(i&&i.base===e&&i.translations===t)return i.result;const r=qu(e,t);return this._localizedSchemaCache={base:e,translations:t,result:r},r}get _bulkMetadataSchema(){const e=this._localizedMetadataSchema;return e&&wl(e)}_loadMetadataTranslations(){var a;const e=this._fieldI18nService,t=this._metadataSchema;if(!e||!t||!((a=t.regionalVariantsGroups)==null?void 0:a.some(l=>l.type===hs.LANGUAGES)))return;const r=this._activeLanguage;if(!r||this._metadataTranslationsLang===r&&this._metadataTranslations)return;this._metadataTranslationsLang=r;const o=++this._translationsRequestId,n=e.peek(r);if(n){this._metadataTranslations=n;return}e.getTranslations(r).then(l=>{o===this._translationsRequestId&&(this._metadataTranslations=l)})}open(){var t,i,r,o,n,a,l,c,d;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||r.call(i),this._dispatchPublic(V.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(V.OPEN,{}),e&&((d=(c=(l=this.config)==null?void 0:l.callbacks)==null?void 0:c.onRestore)==null||d.call(c),this._dispatchPublic(V.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,r;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||r.call(i),this._dispatchPublic(V.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,r;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._bulkMetadataHadIssuesOnOpen=!1,this._confirmDismissVisible=!1,this._confirmDismissResolve=null,(r=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||r.call(i),this._dispatchPublic(V.CLOSE,{}),this.requestUpdate()}upload(){var o,n,a,l,c,d,p,h,f,_;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(g=>g.status==="idle"||g.status==="queued");if((n=(o=this.config)==null?void 0:o.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(V.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const r=[...this._store.getState().files.values()].filter(g=>g.status==="idle"||g.status==="queued");this._dispatchPublic(V.UPLOAD_STARTED,{files:r}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||c.call(l,r),this._engine.uploadAll(),(d=this.config)!=null&&d.minimizeOnUpload&&((p=this.config)==null?void 0:p.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(_=(f=(h=this.config)==null?void 0:h.callbacks)==null?void 0:f.onMinimize)==null||_.call(f),this._dispatchFloatGeometryEvent(V.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,r=new Map(i);let o=!1;for(const n of e){const a=i.get(n.id);a&&(r.set(n.id,{...a,...n}),o=!0)}o&&this._store.setState({files:r})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const r=this._store.getState().files,o=r.get(e);if(!o||!ee._MODIFIABLE_STATUSES.has(o.status))return;const n=new Map(r);n.set(e,{...o,meta:t!=null?{...o.meta,...t}:o.meta,tags:i??o.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let r=!1;for(const{fileId:o,meta:n,tags:a}of e){const l=t.get(o);!l||!ee._MODIFIABLE_STATUSES.has(l.status)||(i.set(o,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),r=!0)}r&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const r=this._store.getState().files,o=r.get(e);if(!o||!ee._MODIFIABLE_STATUSES.has(o.status))return;const n={...o.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(r);a.set(e,{...o,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const r=this._store.getState().files,o=new Map(r);let n=!1;for(const a of e){const l=r.get(a);if(!l||!ee._MODIFIABLE_STATUSES.has(l.status))continue;const c={...l.taxonodes??{}};i==null?delete c[t]:c[t]=i,o.set(a,{...l,taxonodes:c}),n=!0}n&&this._store.setState({files:o})}updateFileProduct(e,t){const i=this._store.getState().files,r=i.get(e);if(!r||!ee._MODIFIABLE_STATUSES.has(r.status))return;const o=new Map(i);o.set(e,{...r,product:Gn(r.product,t)}),this._store.setState({files:o})}updateFileFocusPoint(e,t){const i=this._store.getState().files,r=i.get(e);if(!r||!ee._MODIFIABLE_STATUSES.has(r.status)||(r.focusPoint??null)===t)return;const o=new Map(i);o.set(e,{...r,focusPoint:t}),this._store.setState({files:o})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let r=!1;for(const{fileId:o,product:n}of e){const a=t.get(o);!a||!ee._MODIFIABLE_STATUSES.has(a.status)||(i.set(o,{...a,product:Gn(a.product,n)}),r=!0)}r&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._resetFocusPointPicking(),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(r=>{this._previewFileId===t&&(this._previewDims=r?`${r.w} × ${r.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal(),this._syncPageScrollLock()}_syncPageScrollLock(){var i;const e=((i=this.config)==null?void 0:i.mode)??"modal";this.isConnected&&e==="modal"&&this._isOpen&&!this._isMinimized?Ud(this):Dn(this)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),Ze(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(V.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(Ze(v,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._unsubscribeTouch=ul(()=>this.requestUpdate()),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&mi.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await xd(e||"en");i&&t.on("missingKey",(o,n,a,l,c,d)=>{const p=a.match(/_(?:zero|one|two|few|many|other)$/),h=p&&(d!=null&&d[`defaultValue${p[0]}`])?String(d[`defaultValue${p[0]}`]):l;_d.handleMissingKey(a,h,n)});const r=(o,n,a)=>$t(o,n,a);this._store.setState({t:r})}catch{}}disconnectedCallback(){var e,t,i,r,o,n;super.disconnectedCallback(),Dn(this),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubscribeTouch)==null||e.call(this),this._unsubscribeTouch=null,(t=this._hostStyleObserver)==null||t.disconnect(),this._hostStyleObserver=null,(i=this._unsubStoreEvents)==null||i.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(r=this._portalContainer)==null||r.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const a of this._store.getState().files.values())a.previewUrl&&URL.revokeObjectURL(a.previewUrl);(n=this._engine)==null||n.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const o=this._store.getState().queueConfig;t.queueConfig={...o,concurrency:e.concurrency}}if(e.autoProceed!=null){const o=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...o,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const o=i.defaults,n=this._seededSettingsDefaults;o.resize!==void 0&&o.resize!==(n==null?void 0:n.resize)&&(this._setResize=o.resize),o.maxWidth!==void 0&&o.maxWidth!==(n==null?void 0:n.maxWidth)&&(this._setMaxW=o.maxWidth),o.maxHeight!==void 0&&o.maxHeight!==(n==null?void 0:n.maxHeight)&&(this._setMaxH=o.maxHeight),o.transcode!==void 0&&o.transcode!==(n==null?void 0:n.transcode)&&(this._setTranscode=o.transcode),o.resolution!==void 0&&o.resolution!==(n==null?void 0:n.resolution)&&(this._setResolution=o.resolution),o.protocol!==void 0&&o.protocol!==(n==null?void 0:n.protocol)&&(this._setProtocol=o.protocol),o.resumable!==void 0&&o.resumable!==(n==null?void 0:n.resumable)&&(this._setResumable=o.resumable),this._seededSettingsDefaults={...o}}const r=this._lastUploadId;this._hasStoredReview=r!=null&&mi.exists(r),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var r,o,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=Eo(t.container,e.apiDomain),this._authHeaders=Nr(t),this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(r=e.connectors)==null?void 0:r.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._preloadNamingConvention(e);return}const i=++this._authResolveId;try{const l=await cg(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e),this._preloadNamingConvention(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,r;const t=e instanceof Error?e.message:String(e);return(r=(i=this.config)==null?void 0:i.auth)!=null&&r.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var r;const i=(r=this.shadowRoot)==null?void 0:r.querySelector("sfx-toast");i==null||i.show(e,t)}async _preloadNamingConvention(e){this._setNamingConvention(null,!1);const t=e.hubSession??e.metadataConfig;if(!(t!=null&&t.projectUuid)||!pg(t.hubHeaders))return;const i=++this._settingsResolveId;try{const r=await mg(t.hubHeaders,t.projectUuid,t.hubApiBase);if(i!==this._settingsResolveId)return;if(!(r!=null&&r.enabled_ui)){this._setNamingConvention(null,!1);return}const o=xg(r.regex_b64);this._setNamingConvention(o,o===null)}catch(r){if(i!==this._settingsResolveId)return;console.warn("[sfx-uploader] Failed to fetch naming-convention config — enforcement disabled:",r),this._setNamingConvention(null,!1)}}_setNamingConvention(e,t){this._store.setState({namingConvention:{regex:e,broken:t}})}_normalizeTusConfig(){var a,l,c,d;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let r=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;r||(r={})}if(!r)return;const o=(d=(c=this.config)==null?void 0:c.connectors)==null?void 0:d.companionUrl;if(!o)return r;const n=o.replace(/\/+$/,"");return{...r,endpoint:r.endpoint??`${n}/files`,jsonBase:r.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return r=>{const o={},n=De(r);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(o.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(o.postprocess="transcode",o["video-resolution"]=this._setResolution,o.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(o.opt_force_name=l)}const a=i==null?void 0:i(r);return a&&Object.assign(o,a),Object.keys(o).length>0?o:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new ig(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,r)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:r}),onFocusPointError:i=>this._showToast(this._storeCtrl.state.t("focusPointSaveFailed","Could not save the focus point for {{name}}",{name:i.name}),"warning")}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!t||!this._apiBase||!this._authHeaders)return;const i=++this._metadataSchemaResolveId,r=this._storeCtrl.state.t;try{const{fetchMetadataSchema:o,fetchDependencies:n,normalizeDependencies:a,hasCachedSchema:l,hasCachedDependencies:c,canReachHub:d,canUseSettingsSchema:p,HUB_HEADERS_HINT:h,createTagsAutocomplete:f,createTaxonomyService:_,createUltratagsService:g,createFieldI18nService:S}=await J(async()=>{const{fetchMetadataSchema:z,fetchDependencies:H,normalizeDependencies:Y,hasCachedSchema:de,hasCachedDependencies:D,canReachHub:le,canUseSettingsSchema:K,HUB_HEADERS_HINT:$,createTagsAutocomplete:b,createTaxonomyService:y,createUltratagsService:R,createFieldI18nService:F}=await import("./index-DX3QZiZx.js");return{fetchMetadataSchema:z,fetchDependencies:H,normalizeDependencies:Y,hasCachedSchema:de,hasCachedDependencies:D,canReachHub:le,canUseSettingsSchema:K,HUB_HEADERS_HINT:$,createTagsAutocomplete:b,createTaxonomyService:y,createUltratagsService:R,createFieldI18nService:F}},[]);if(i!==this._metadataSchemaResolveId)return;const E=d(t)&&!!t.projectUuid,k=E||p(t)||!!t.rawMetadata||l(t.projectUuid,this._apiBase),C=E||!!t.projectUuid&&c(t.projectUuid)||!!t.rawDependencies;if(!k){if(this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig sets schemaSource: 'hub' but no usable Hub auth is configured — skipping metadata schema and dependencies. Drop schemaSource to load the schema from /v5/settings instead. ${h}`),this._showToast(r("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),i!==this._metadataSchemaResolveId)return;this._metadataSchema=null,this._metadataDependencies=[];return}let x;t.rawDependencies?x=Promise.resolve(a(t.rawDependencies)):C&&t.projectUuid?x=n(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(z=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",z),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${h}`)),x=Promise.resolve([]));const[w,O]=await Promise.all([o(this._apiBase,this._authHeaders,t.projectUuid,t),x]);if(i!==this._metadataSchemaResolveId)return;this._metadataDependencies=O,this._metadataAutocomplete=f(this._apiBase,this._authHeaders),this._taxonomyService=_(this._apiBase,this._authHeaders),this._ultratagsService=g(this._apiBase,this._authHeaders),this._fieldI18nService=S(this._apiBase,this._authHeaders);let A=w.productsEnabled?Iu(w,this._storeCtrl.state.t):w;t.focusPointEnabled&&(A=Gu(A,this._storeCtrl.state.t)),this._metadataSchema=A;const U=this._metadataSchema.fields.filter(z=>Ri(z,t)).map(z=>z.key);this._dispatchPublic(V.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:U}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(o){console.error("[sfx-uploader] Failed to load metadata schema:",o),this._showToast(r("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let r=!1;const o=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!ee._MODIFIABLE_STATUSES.has(a.status))continue;const l=Qt({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const c={};for(const d of t.fields){const p=l.get(d.ckey);(p==null?void 0:p.setValue)!==void 0&&(p.hidden||Ne(a.meta[d.key])&&(c[d.key]=uu(d,p.setValue)))}Object.keys(c).length!==0&&(o.set(a.id,{...a,meta:{...a.meta,...c}}),r=!0)}r&&this._store.setState({files:o})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const r=new Map(t);for(const o of t.values()){if(!ee._MODIFIABLE_STATUSES.has(o.status))continue;const n=Qt({mime:o.type??"",meta:o.meta},e,this._metadataDependencies),a=pu(o.meta,e,n);a!==o.meta&&(r.set(o.id,{...o,meta:a}),i=!0)}i&&this._store.setState({files:r})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const r=this._store.getState().files.get(e);if(!r||r.name===i)return;const o=new Map(this._store.getState().files);o.set(e,{...r,name:i,nameIsUserDefined:!0}),this._store.setState({files:o})}_focusPointValueFor(e){if(this._focusPointDraft&&this._previewFileId===e.id)return this._focusPointDraft;if(!e.focusPoint)return null;const t=ml(e.focusPoint);return t.horizontal===""||t.vertical===""?null:t}get _focusPointMarkerVisible(){return this._focusPointPicking||this._focusPointFieldHovered||this._focusPointFieldFocused}_resetFocusPointPicking(){this._focusPointPicking=!1,this._focusPointDraft=null,this._focusPointFieldHovered=!1,this._focusPointFieldFocused=!1}_previewMeta(e){var i,r,o;const t=(i=this._metadataSchema)==null?void 0:i.fieldsByKey.has(Xe);return!((r=this._metadataSchema)!=null&&r.productsEnabled)&&!t?e.meta:{...e.meta,...(o=this._metadataSchema)!=null&&o.productsEnabled?{[Ot]:e.product.ref,[It]:e.product.position}:{},...t?{[Xe]:this._focusPointDraft!==null&&this._previewFileId===e.id?this._focusPointDraft:e.focusPoint??null}:{}}}_resolvedSchemaFor(e){if(!this._metadataSchema)return null;const t=this._metadataDependencies.length>0?Qt({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies):null;if(!(this._metadataSchema.fieldsByKey.has(Xe)&&!(e.type??"").startsWith("image/")))return t;const r=new Map(t??[]);return r.set(Xe,{...r.get(Xe),hidden:!0,required:!1,contributingDependencyUuids:[]}),r}_initialFileMeta(){var t,i;const e=(i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.defaults;return e?structuredClone(e):{}}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:xl(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Mu(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?_l(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}get _requiredFieldsTotal(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Du(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies).size}get _requiredFieldsRemaining(){var e;return!this._metadataEnforcing||!this._metadataSchema?0:Object.keys(zu(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)).length}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var r;const e=this._isPillExpanded?"card":"pill",t=(r=this._portalContainer)==null?void 0:r.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var r,o,n,a,l,c,d,p,h,f;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(r=this.config)==null?void 0:r.callbacks;for(const[_,g]of e.files){const S=t.files.get(_);if(!S){g.relativeFolder&&this._firedFolders.delete(g.relativeFolder);continue}if(S.status!==g.status)switch(g.status){case"uploading":S.status==="paused"&&(this._dispatchPublic(V.UPLOAD_RESUMED,{file:g}),(o=i==null?void 0:i.onUploadResumed)==null||o.call(i,g));break;case"complete":g.response&&(this._dispatchPublic(V.UPLOAD_COMPLETE,{file:g,response:g.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,g,g.response));break;case"error":case"failed":{const E=new Error(g.error??"Upload failed");this._dispatchPublic(V.UPLOAD_ERROR,{file:g,error:E}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,g,E);break}case"retrying":this._dispatchPublic(V.UPLOAD_RETRY,{file:g,attempt:g.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,g,g.retryCount);break;case"paused":this._dispatchPublic(V.UPLOAD_PAUSED,{file:g}),(c=i==null?void 0:i.onUploadPaused)==null||c.call(i,g);break}g.status==="uploading"&&S.progress!==g.progress&&(this._dispatchPublic(V.UPLOAD_PROGRESS,{file:g,progress:g.progress,speed:g.speed}),(d=i==null?void 0:i.onUploadProgress)==null||d.call(i,g,g.progress,g.speed)),g.relativeFolder&&S.status!==g.status&&ja.has(g.status)&&!this._firedFolders.has(g.relativeFolder)&&this._maybeDispatchFolderComplete(g.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const _=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=_),this._dispatchPublic(V.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:_}),(p=i==null?void 0:i.onTotalProgress)==null||p.call(i,e.totalProgress,e.totalSpeed,_)}if(t.isUploading&&!e.isUploading){const _=[...e.files.values()];if(!_.some(S=>S.status==="cancelled")){const S=_.filter(x=>x.status==="complete"),E=_.filter(x=>x.status==="failed"||x.status==="error");if(S.length===0&&E.length===0)return;const k=this._lastUploadId;if(k!=null){const x=[...S,...E];mi.save(k,x),this._hasStoredReview=x.length>0}this._dispatchPublic(V.ALL_COMPLETE,{successful:S,failed:E}),(h=i==null?void 0:i.onAllComplete)==null||h.call(i,S,E);const C=(f=this.config)==null?void 0:f.closeOnComplete;if(C!==!1&&C!=null){const x=typeof C=="number"?C:1500;this._closeOnCompleteTimer=setTimeout(()=>{var w,O,A;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(V.COMPLETE_ACTION,{}),(A=(O=(w=this.config)==null?void 0:w.callbacks)==null?void 0:O.onCompleteAction)==null||A.call(O),this.close())},x)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const r=[...t.files.values()].filter(l=>l.relativeFolder===e);if(r.length===0||r.some(l=>!ja.has(l.status)))return;const o=r.filter(l=>l.status==="complete"),n=r.filter(l=>l.status==="failed"||l.status==="error");o.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(V.FOLDER_COMPLETE,{folder:e,successful:o,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,o,n))}_filterCoreSources(e,t,i){const r=Id(),o=Fd()&&(!t||Ug(i));return r&&o&&!t?e:e.filter(n=>(r||n.id!=="screen-cast")&&(o||n.id!=="camera")&&(!t||n.id!=="device"))}get _mergedSources(){var _;const e=(_=this.config)==null?void 0:_.connectors,t=dt(),i=gr(this._storeCtrl.state.restrictions);if(e===this._cachedSourcesConfig&&t===this._cachedSourcesTouch&&i===this._cachedSourcesAccept)return this._cachedSources;if(this._cachedSourcesConfig=e,this._cachedSourcesTouch=t,this._cachedSourcesAccept=i,!e)return this._cachedSources=this._filterCoreSources(_i.filter(g=>g.id!=="url"),t,i),this._cachedSources;const r=e.providers.length>0?zg(e.providers):[],o=e.customSources??[],n=e.coreSources?new Set(e.coreSources):null,a=n?_i.filter(g=>n.has(g.id)):_i,l=this._filterCoreSources(e.companionUrl?a:a.filter(g=>g.id!=="url"),t,i),c=t?["camera","url"]:["device","url"],d=c.map(g=>l.find(S=>S.id===g)).filter(g=>!!g),p=l.filter(g=>!c.includes(g.id)),h=new Set,f=[];for(const g of[...d,...r,...p,...o])if(!h.has(g.id)){if(ee._RESERVED_IDS.has(g.id)&&g.onActivate){console.warn(`[sfx-uploader] Custom source id "${g.id}" conflicts with a built-in source and was skipped.`);continue}h.add(g.id),f.push(g)}return this._cachedSources=f,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(r=>i.has(r.status))&&t.some(r=>r.status==="complete"||r.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var l,c,d,p,h;const t=(l=this.config)==null?void 0:l.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((c=this.config)==null?void 0:c.preserveFolderStructure)!==!1;let r=0,o=!1;const n=(f,_,g)=>`${f}\0${_}\0${g}`,a=new Set;for(const f of this._store.getState().files.values())f.status!=="rejected"&&f.status!=="cancelled"&&a.add(n(f.name,f.size,f.relativeFolder??""));for(const f of e){if(hr(f.name))continue;if(o){r++;continue}const _=i?Xf(Jf(f)):"",g=this._store.getState(),S=n(f.name,f.size,_);if(a.has(S))continue;const E=f.type||Hr(f.name),k=fr({name:f.name,size:f.size,type:E},g.restrictions,g.files);if(k){if(Lg(k)){o=!0,r++;continue}const w=E.startsWith("image/")&&!nt(E)?URL.createObjectURL(f):null,O={id:Vt(),status:"rejected",file:f,remoteUrl:null,name:f.name,size:f.size,type:E,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:k.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt,relativeFolder:_};Nt(this._store,O),this._dispatchPublic(V.FILE_REJECTED,{file:O,reason:k.message}),(d=t==null?void 0:t.onFileRejected)==null||d.call(t,O,k.message);const A=(p=this.config)==null?void 0:p.rejectedFileAutoRemoveDelay,U=A===!1||A===0||A===void 0?0:A;if(U>0){const z=O.id,H=setTimeout(()=>{this._rejectedTimers.delete(z);const Y=this._store.getState().files.get(z);Y&&Y.status==="rejected"&&Mn(this._store,z)},U);this._rejectedTimers.set(z,H)}continue}let C=null;E.startsWith("image/")&&!nt(E)&&(C=URL.createObjectURL(f));const x={id:Vt(),status:"idle",file:f,remoteUrl:null,name:f.name,size:f.size,type:E,previewUrl:C,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:this._initialFileMeta(),tags:[],product:{},focusPoint:null,remoteInfo:null,...Kt,relativeFolder:_};if(Nt(this._store,x),a.add(S),this._dispatchPublic(V.FILE_ADDED,{file:x}),(h=t==null?void 0:t.onFileAdded)==null||h.call(t,x),f.type.startsWith("video/")){Fg(f).then(O=>{if(!O)return;const A=this._store.getState(),U=A.files.get(x.id);if(U){const z=new Map(A.files);z.set(x.id,{...U,previewUrl:O}),this._store.setState({files:z})}else URL.revokeObjectURL(O)});const w=document.createElement("video");w.preload="metadata",w.src=URL.createObjectURL(f),w.onerror=()=>{URL.revokeObjectURL(w.src)},w.onloadedmetadata=()=>{const O=w.duration;if(URL.revokeObjectURL(w.src),!isFinite(O))return;const A=this._store.getState(),U=A.files.get(x.id);if(U){const z=new Map(A.files);z.set(x.id,{...U,duration:O}),this._store.setState({files:z})}}}}if(r>0){const f=this._storeCtrl.state.t,_=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(f("tooManyFilesSkipped",{count:r,max:_,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}get _captureInput(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector("input[data-sfx-capture]"))??null}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var o,n,a,l,c;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const d=this._videoBlobUrls.get(t.file);d&&(URL.revokeObjectURL(d),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((o=this._engine)==null||o.cancelFile(e)),Mn(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const r=this._rejectedTimers.get(e);if(r&&(clearTimeout(r),this._rejectedTimers.delete(e)),this._previewFileId===e){const d=[...this._store.getState().files.values()];this._previewFileId=d.length>0?d[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(V.FILE_REMOVED,{file:i}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||c.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>De(e)==="image"&&!nt(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,r,o;const e=(r=(i=this.config)==null?void 0:i.auth)==null?void 0:r.container,t=(o=this._authHeaders)==null?void 0:o["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var o,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Pa((n=(o=this.config)==null?void 0:o.similarityCheck)==null?void 0:n.confidence),r=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Ta(e,{...t,threshold:i,endpoint:r}).then(c=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,c)}).catch(c=>{console.error("[sfx-uploader] Similarity check failed for",e.name,c),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var h,f,_,g;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(S=>S.id);const i=Pa((f=(h=this.config)==null?void 0:h.similarityCheck)==null?void 0:f.confidence),r=(g=(_=this.config)==null?void 0:_.similarityCheck)==null?void 0:g.endpoint,o=new AbortController;this._similarAbort=o;const n=[...e];let a=0,l=0;const c=e.length,d=()=>{if(!o.signal.aborted){if(!this._previewFileId){const S=e.find(E=>{var k;return(((k=this._similarResults.get(E.id))==null?void 0:k.length)??0)>0});S&&(this._previewFileId=S.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},p=()=>{if(!o.signal.aborted)for(;a<Tm&&n.length>0;){const S=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(S.id),Ta(S,{...t,threshold:i,endpoint:r,signal:o.signal}).then(E=>{o.signal.aborted||(this._similarMarkInactive(S.id),this._similarSetResults(S.id,E))}).catch(E=>{o.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",S.name,E),this._similarMarkInactive(S.id),this._similarSetResults(S.id,[]))}).finally(()=>{o.signal.aborted||(a-=1,l+=1,l===c?d():p())})}};p()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),r=i>0?t.slice(i+1).toUpperCase():"";return r&&r.length<=5?r:""}_soleLocatableFile(e){var i;if(!((i=this.config)!=null&&i.showLocateButton))return null;const t=e.filter(r=>{var o,n;return r.status==="complete"&&!!((n=(o=r.response)==null?void 0:o.file)!=null&&n.uuid)});return t.length===1?t[0]:null}_locateFile(e){var o,n,a;if(!e)return;const t=Rd(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(V.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),r=(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||r===!1)&&t&&window.location.assign(t)}get _hasUnsavedUploadWork(){var e;if(this._phase==="uploading")return!0;if(((e=this.config)==null?void 0:e.clearOnClose)===!1)return!1;for(const t of this._store.getState().files.values())if(t.status==="idle"||t.status==="queued")return!0;return!1}_confirmDismiss(){return this._hasUnsavedUploadWork?new Promise(e=>{this._confirmDismissResolve=e,this._confirmDismissVisible=!0}):Promise.resolve(!0)}render(){var r;const e=((r=this.config)==null?void 0:r.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?u`
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
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return v;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(r=>r.id===this._previewFileId);return u`
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
              @click=${r=>r.stopPropagation()}
            ></video>`:u`<img
              class="fs-img"
              src=${this._fullscreenPreviewUrl}
              alt=""
              ${te(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)}
              draggable="false"
            />`}
      </div>
      <div class="fs-toolbar" @click=${r=>r.stopPropagation()}>
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
    `}_renderProgressHeaderActions(){var a,l,c;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal",i=((l=this.config)==null?void 0:l.header)??(t==="modal"?"close":!0),r=!!((c=this.config)!=null&&c.minimizeOnUpload)&&t!=="inline",o=i==="close";if(!r&&!o)return v;const n=t==="modal"?this._onModalDismiss:this._onInlineDismiss;return u`
      <div class="header-actions">
        ${r?u`<button
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
    `}_renderHeader(){var E,k,C,x,w,O;const e=this._storeCtrl.state.t,t=((E=this.config)==null?void 0:E.mode)??"modal";if(this._phase==="uploading"){const A=this._storeCtrl.state,z=[...A.files.values()].filter(D=>D.status!=="rejected"&&D.status!=="cancelled"),H=z.length,Y=z.filter(D=>D.status==="complete").length,de=A.totalProgress??0;return u`
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
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:Y,total:H})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:Aa(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(de)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${e("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${te({width:`${de}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const A=[...this._storeCtrl.state.files.values()].filter(z=>z.status!=="rejected"&&z.status!=="cancelled"),U=this._batchOutcome(A,!0);return u`
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
      `}if(t==="inline"&&((k=this.config)!=null&&k.inlineHeader))return v;const i=((C=this.config)==null?void 0:C.header)??(t==="modal"?"close":!0);if(i===!1)return v;const r=t==="modal"?this._onModalDismiss:this._onInlineDismiss,o=i==="back"?u`<button
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
          </button>`:v,n=(x=this.config)==null?void 0:x.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,c=[...this._storeCtrl.state.files.values()],d=c.some(A=>De(A)==="image"&&!nt(A.type)),p=c.some(A=>De(A)==="pdf"),h=c.some(A=>De(A)==="vid"),_=a&&(d||p||h||l)?u`<button
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
          </button>`:v,g=(O=(w=this._metadataSchema)==null?void 0:w.regionalVariantsGroups)!=null&&O.length?u`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:v,S=i==="close"?u`<button
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
        ${g} ${_} ${S}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const r={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,r),t(r)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_batchOutcome(e,t){const i=this._storeCtrl.state.t,r=e.filter(C=>C.status==="complete").length,o=e.filter(C=>C.status==="failed"||C.status==="error").length,n=e.filter(C=>C.status==="complete"&&C.alreadyExisted).length,a=Math.max(r-n,0),l=r>0&&o===0&&n>=r,c=t?o>0?"error":n>0?"warn":"done":"",d=u`<svg
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
    </svg>`,f=o>0?r>0?d:p:n>0?d:h,_=t?o>0?r>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):l?i("alreadyInLibrary",{count:n,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),g=[];a>0&&g.push(i("nUploaded","{{count}} uploaded",{count:a})),n>0&&g.push(i("nAlreadyInLibrary","{{count}} already in library",{count:n})),o>0&&g.push(i("nFailed","{{count}} failed",{count:o}));const S=g.length>0?g.join(" · "):i("allDone","All done"),E=a+n+o;return{completed:r,failed:o,alreadyExistedCount:n,newCount:a,allAlreadyExisted:l,outcomeClass:c,outcomeIcon:f,title:_,doneSummary:S,segTotal:E,segPct:C=>E>0?`${C/E*100}%`:"0%"}}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,r=Math.round(t.totalProgress??0),o=this._phase==="complete",{completed:n,failed:a,alreadyExistedCount:l,newCount:c,outcomeClass:d,outcomeIcon:p,title:h,doneSummary:f,segPct:_}=this._batchOutcome(e,o),g=this._soleLocatableFile(e);if(this._isPillExpanded===!1)return u`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?u`<div class="float-collapsed-icon ${d}">${p}</div>`:u`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${h}</span>
            ${o?v:u`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${o&&g?u`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(g)}
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
      `;const S=e.filter(x=>x.status==="failed"||x.status==="error"),E=e.filter(x=>x.status==="complete"&&x.alreadyExisted),k=e.filter(x=>x.status!=="failed"&&x.status!=="error"&&x.status!=="complete"),C=e.filter(x=>x.status==="complete"&&!x.alreadyExisted);return u`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${d}">
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
                ${o?f:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Aa(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${o&&g?u`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(g)}
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
            ${o?v:u`<span class="float-progress-pct">${r}%</span>`}
          </div>
          ${o?u`<div class="float-bar segmented" role="img" aria-label=${f}>
                ${c>0?u`<div
                      class="float-bar-seg ok"
                      ${te({width:_(c)})}
                    ></div>`:v}
                ${l>0?u`<div
                      class="float-bar-seg dup"
                      ${te({width:_(l)})}
                    ></div>`:v}
                ${a>0?u`<div
                      class="float-bar-seg fail"
                      ${te({width:_(a)})}
                    ></div>`:v}
              </div>`:u`<div class="float-bar">
                <div class="float-bar-fill" ${te({width:`${r}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${Xt(S,x=>x.id,x=>this._renderFloatItem(x,i))}
          ${Xt(E,x=>x.id,x=>this._renderFloatItem(x,i))}
          ${Xt(k,x=>x.id,x=>this._renderFloatItem(x,i))}
          ${Xt(C,x=>x.id,x=>this._renderFloatItem(x,i))}
        </div>
      </div>
    `}_truncateTooltip(e,t=140){return e.length>t?`${e.slice(0,t).trimEnd()}…`:e}_renderFloatItem(e,t){var r,o,n;const i=e.status==="failed"||e.status==="error";return u`
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
          ${e.status==="complete"?u`${(r=this.config)!=null&&r.showLocateButton&&((n=(o=e.response)==null?void 0:o.file)!=null&&n.uuid)?u`<button
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
    `}_renderAssetCount(e,t,i,r){const o=e.reduce((a,l)=>a+(l.size||0),0),n=i!=="uploading"&&i!=="complete"&&!r;return u`
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
                  <svg viewBox="0 0 24 24" aria-hidden="true">${cl}</svg>
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
    `}_renderPreviewLayout(e){var S,E,k,C,x,w,O,A,U,z;if(e.length===0)return v;const t=this._storeCtrl.state.t,i=e,r=i.find(H=>H.id===this._previewFileId)??i[0],o=((S=r.name.split(".").pop())==null?void 0:S.toUpperCase())||"";new Date(r.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((H,Y)=>H+(Y.size||0),0),l=!!((k=(E=this.config)==null?void 0:E.similarityCheck)!=null&&k.enabled)&&this._phase==="ready",c=l?i.filter(H=>De(H)==="image"&&!nt(H.type)&&!this._similarResults.has(H.id)).map(H=>H.id):[],d=Math.min(c.length,ot),p=d>0&&this._similarSelectedIds.size>=d,h=this._similarSelectedIds.size>=ot,f=this._similarResults.get(r.id),_=f!==void 0,g=_?this._previewPanelTab:"details";return u`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${te({flex:String(this._splitPct)})}>
          ${((C=this.config)==null?void 0:C.mode)==="inline"&&((x=this.config)!=null&&x.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):v}
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
            .sources=${this._mergedSources}
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
            .maxSelection=${ot}
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
                  <span class="preview-header-name" title=${r.name}
                    >${r.name}</span
                  >
                  <div class="preview-header-actions">
                    ${r.previewUrl||r.type.startsWith("video/")&&r.file?u`
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
                ${_?u`
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
                          <span>${t("similarTab","Similar")}</span>${f&&f.length>0?u`<span class="preview-tab-count">${f.length}</span>`:v}
                        </button>
                      </div>
                    `:v}
                ${g==="similar"?this._renderSimilarPanel(r,f??[]):u`
                      <div class="preview-details-body">
                        ${r.type.startsWith("video/")&&r.file?u`
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
                            `:r.previewUrl?u`
                                <div class="preview-media-area">
                                  <div class="preview-img-wrap">
                                    <img
                                      class="preview-image"
                                      src=${r.previewUrl}
                                      alt=${r.name}
                                    />
                                    ${(A=this._metadataSchema)!=null&&A.fieldsByKey.has(Xe)&&r.type.startsWith("image/")?u`<sfx-focus-point-overlay
                                          .picking=${this._focusPointPicking}
                                          .showMarker=${this._focusPointMarkerVisible}
                                          .value=${this._focusPointValueFor(r)}
                                          @focus-point-pick=${this._onFocusPointPick}
                                        ></sfx-focus-point-overlay>`:v}
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
                              `:u`
                                <div class="preview-media-area">
                                  <div class="preview-doc-wrap ${De(r)}">
                                    <img
                                      class="preview-doc-type-img"
                                      src=${ro(o)}
                                      alt="${o?t("extFile","{{ext}} file",{ext:o}):t("file","File")}"
                                      @error=${H=>{const Y=H.target,de=so();!Y.dataset.fallback&&Y.src!==de&&(Y.dataset.fallback="1",Y.src=de)}}
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
                        ${this._metadataSchema&&((U=this.config)!=null&&U.metadataConfig)?u`<div class="preview-meta-list">
                              <div class="preview-file-info">
                                ${o}${r.size?` · ${Jt(r.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                              </div>
                            </div>`:v}
                        ${this._metadataSchema&&((z=this.config)!=null&&z.metadataConfig)?u`
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
                                  .meta=${this._previewMeta(r)}
                                  .focusPointPicking=${this._focusPointPicking}
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
                                    <div class="preview-file-info-val">${r.name}</div>
                                  </div>
                                  <div class="preview-file-info-row">
                                    <div class="preview-file-info-key">${t("type","Type")}</div>
                                    <div class="preview-file-info-val">${o}</div>
                                  </div>
                                  ${r.size?u`
                                        <div class="preview-file-info-row">
                                          <div class="preview-file-info-key">
                                            ${t("size","Size")}
                                          </div>
                                          <div class="preview-file-info-val">
                                            ${Jt(r.size)}
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
        ${t.map(r=>{const o=Math.round(r.score*100);return u`
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
                ${r.url?u`<img src=${r.url} alt="" />`:v}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(r)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(r)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var p;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(h=>De(h)==="image"&&!nt(h.type)),r=t.some(h=>De(h)==="pdf"),o=t.some(h=>De(h)==="vid"),n=(p=this.config)==null?void 0:p.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=h=>{switch(h){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},c=h=>{switch(h){case"hls":return e("protocolHls","HLS")}},d=h=>f=>{const _=parseInt(f.target.value,10);h(Number.isFinite(_)?_:0)};return u`
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
        ${i||r?u`
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
                        ${Am.map(h=>u`
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
                ${Rm.map(h=>u`
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
    `}_navigatePreview(e,t){var o;const r=e.findIndex(n=>n.id===this._previewFileId)+t;if(r>=0&&r<e.length){const n=(o=this.shadowRoot)==null?void 0:o.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[r].id}}_namingConventionGate(e,t){const{regex:i,broken:r}=t;return{hasViolation:!r&&!!i&&e.some(n=>!Ca(n.name,i)),broken:r}}_computeNamingViolationIds(e,t,i){if(!t||!i)return this._namingViolationIdsKey!==""&&(this._namingViolationIdsKey="",this._namingViolationIds=new Set),this._namingViolationIds;const r=e.filter(n=>!Ca(n.name,i)).map(n=>n.id),o=r.join(",");return o!==this._namingViolationIdsKey&&(this._namingViolationIdsKey=o,this._namingViolationIds=new Set(r)),this._namingViolationIds}_renderNamingConventionBanner(e,t,i){if(!t&&!i)return v;const r=i?e("filenameNamingConventionMisconfigured","Upload can't proceed: the file naming rule configured for this project is invalid. Contact your administrator."):e("filenameNamingConventionBlocked","Upload can't proceed as file(s) is/are not matching the naming convention enforced.");return u`
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
        <span class="naming-banner-txt">${r}</span>
      </div>
    `}_renderBody(){var k,C,x,w,O,A,U,z,H,Y,de,D,le;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],r=i.filter(K=>K.status==="idle"||K.status==="queued"||K.status==="error"||K.status==="failed"),{hasViolation:o,broken:n}=this._namingConventionGate(r,e.namingConvention),a=this._computeNamingViolationIds(r,o,e.namingConvention.regex),l=this._phase,c=gr(e.restrictions),d=i.length>0,p=l==="ready"?this._requiredFieldsRemaining:0,f=!!((C=(k=this.config)==null?void 0:k.similarityCheck)!=null&&C.enabled)&&l==="ready",_=f?i.filter(K=>De(K)==="image"&&!nt(K.type)&&!this._similarResults.has(K.id)).map(K=>K.id):[],g=Math.min(_.length,ot),S=g>0&&this._similarSelectedIds.size>=g,E=this._similarSelectedIds.size>=ot;return u`
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
        ${dt()?u`<input
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
          ${((x=this.config)==null?void 0:x.mode)==="inline"&&((w=this.config)!=null&&w.inlineHeader)&&!this._previewFileId&&l!=="uploading"&&l!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):v}
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
                ${d?v:u`<sfx-drop-zone
                        .t=${t}
                        .compact=${d}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${c}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((U=this.config)==null?void 0:U.sourcesLayout)??"pills"}
                        .mode=${((z=this.config)==null?void 0:z.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
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
                        ${l==="ready"?this._renderNamingConventionBanner(t,o,n):v}
                        ${this._renderAssetCount(i,t,l,f&&this._similarSelectedIds.size>0)}
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .store=${this._store}
                          .showDropTile=${l!=="uploading"&&l!=="complete"}
                          .sources=${this._mergedSources}
                          .accept=${c}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((H=this.config)==null?void 0:H.showLocateButton)??!1}
                          .showCopyCdnButton=${((Y=this.config)==null?void 0:Y.showCopyCdnButton)??!1}
                          .showCheckSimilar=${f}
                          .selectMode=${f}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${S}
                          .selectionFull=${E}
                          .maxSelection=${ot}
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
                .fileCount=${l==="uploading"||l==="complete"?i.filter(K=>K.status!=="rejected"&&K.status!=="cancelled").length:r.length}
                .failedCount=${i.filter(K=>K.status==="failed"||K.status==="error").length}
                .blocked=${l==="ready"&&(o||n)}
                .showFillMetadata=${!!(((de=this.config)==null?void 0:de.showFillMetadata)??((D=this.config)==null?void 0:D.metadataConfig))&&p===0}
                .requireMetadataFirst=${l==="ready"?this._hasMetadataIssues:!1}
                .requiredFieldsTotal=${l==="ready"?this._requiredFieldsTotal:0}
                .requiredFieldsRemaining=${p}
                .showCheckSimilar=${!1}
                .selectMode=${f&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${g}
                .allSelected=${S}
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
                      `:Ma.has(this._activeConnector)?u`
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
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:v}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);if(i===-1)return;const r=i+e;if(r>=0&&r<t.length){const o=t[r];this._fullscreenPreviewUrl=o.previewUrl,this._fullscreenVideoFile=o.type.startsWith("video/")&&o.file?o.file:null,this._previewFileId=o.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},ee.styles=q`
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

    ${Ae}
  `,ee._FS_ZOOM_LEVELS=[1,2,3,4],ee._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),ee._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),ee);j([m({attribute:!1})],M.prototype,"config");j([T()],M.prototype,"_isOpen");j([T()],M.prototype,"_activeConnector");j([T()],M.prototype,"_showUrlDialog");j([T()],M.prototype,"_showCameraDialog");j([T()],M.prototype,"_showScreenCastDialog");j([T()],M.prototype,"_confirmDismissVisible");j([T()],M.prototype,"_similarSelectMode");j([T()],M.prototype,"_similarSelectedIds");j([T()],M.prototype,"_similarRunIds");j([T()],M.prototype,"_similarActiveIds");j([T()],M.prototype,"_similarResults");j([T()],M.prototype,"_previewPanelTab");j([T()],M.prototype,"_previewFileId");j([T()],M.prototype,"_previewDims");j([T()],M.prototype,"_focusPointPicking");j([T()],M.prototype,"_focusPointDraft");j([T()],M.prototype,"_focusPointFieldHovered");j([T()],M.prototype,"_focusPointFieldFocused");j([T()],M.prototype,"_fileInfoOpen");j([T()],M.prototype,"_splitPct");j([T()],M.prototype,"_showSettings");j([T()],M.prototype,"_setResize");j([T()],M.prototype,"_setMaxW");j([T()],M.prototype,"_setMaxH");j([T()],M.prototype,"_setTranscode");j([T()],M.prototype,"_setResolution");j([T()],M.prototype,"_setResolutionOpen");j([T()],M.prototype,"_setProtocol");j([T()],M.prototype,"_setResumable");j([T()],M.prototype,"_fullscreenPreviewUrl");j([T()],M.prototype,"_fullscreenVideoFile");j([T()],M.prototype,"_fsZoom");j([T()],M.prototype,"_bodyDragOver");j([T()],M.prototype,"_isMinimized");j([T()],M.prototype,"_isPillExpanded");j([T()],M.prototype,"_metadataSchema");j([T()],M.prototype,"_metadataTranslations");j([T()],M.prototype,"_metadataDependencies");j([T()],M.prototype,"_regionalFilters");j([T()],M.prototype,"_bulkMetadataOpen");j([T()],M.prototype,"_bulkMetadataInitialFieldKey");j([T()],M.prototype,"_bulkMetadataHadIssuesOnOpen");j([T()],M.prototype,"_isReviewing");j([T()],M.prototype,"_reviewFiles");j([T()],M.prototype,"_hasStoredReview");let Om=M;var Im=Object.defineProperty,Qi=(s,e,t,i)=>{for(var r=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(e,t,r)||r);return r&&Im(e,t,r),r};const Fm="img.preview-image",an=class an extends G{constructor(){super(...arguments),this.picking=!1,this.showMarker=!0,this.value=null,this._position=null,this._dragging=!1,this._resizeObserver=null,this._observedImg=null,this._dragPointerId=null,this._updatePosition=()=>{this._setPosition(this._measurePosition())},this._onPointerDown=e=>{e.button!==0||this._dragging||(e.preventDefault(),this._dragging=!0,this._dragPointerId=e.pointerId,e.currentTarget.setPointerCapture(e.pointerId),this._pickAt(e.clientX,e.clientY))},this._onPointerMove=e=>{!this._dragging||e.pointerId!==this._dragPointerId||this._pickAt(e.clientX,e.clientY)},this._onPointerUp=e=>{e.pointerId===this._dragPointerId&&this._endDrag()}}get _img(){var e;return((e=this.parentElement)==null?void 0:e.querySelector(Fm))??null}_paintedRect(){const e=this._img;if(!e||!e.naturalWidth||!e.naturalHeight)return null;const t=e.getBoundingClientRect(),i=this.getBoundingClientRect();if(!t.width||!t.height)return null;const r=e.naturalWidth/e.naturalHeight,o=t.width/t.height,n=r>o?t.width:t.height*r,a=r>o?t.width/r:t.height;return{left:t.left-i.left+(t.width-n)/2,top:t.top-i.top+(t.height-a)/2,width:n,height:a}}_measurePosition(){var r,o;const e=_r((r=this.value)==null?void 0:r.horizontal),t=_r((o=this.value)==null?void 0:o.vertical);if(e===null||t===null)return null;const i=this._paintedRect();return i?{left:i.left+e/100*i.width,top:i.top+t/100*i.height}:null}_setPosition(e){const t=this._position;t!==e&&(t&&e&&t.left===e.left&&t.top===e.top||(this._position=e))}_pickAt(e,t){const i=this._paintedRect();if(!i)return;const r=this.getBoundingClientRect(),o=e-r.left,n=t-r.top,a=d=>Math.max(ao,Math.min(lo,d)),l=a(Math.round((o-i.left)/i.width*100)),c=a(Math.round((n-i.top)/i.height*100));this.dispatchEvent(new CustomEvent("focus-point-pick",{detail:{horizontal:l,vertical:c},bubbles:!0,composed:!0}))}_endDrag(){this._dragging=!1,this._dragPointerId=null}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._updatePosition),this._syncObservers()}firstUpdated(){this._syncObservers(),this._updatePosition()}updated(e){super.updated(e),(e.has("value")||this.showMarker&&e.get("showMarker")===!1)&&(this._syncObservers(),this._updatePosition())}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._resizeObserver)==null||e.disconnect(),this._resizeObserver=null,(t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=null,window.removeEventListener("resize",this._updatePosition),this._endDrag()}_syncObservers(){var t;typeof ResizeObserver<"u"&&!this._resizeObserver&&this.parentElement&&(this._resizeObserver=new ResizeObserver(this._updatePosition),this._resizeObserver.observe(this.parentElement));const e=this._img;e!==this._observedImg&&((t=this._observedImg)==null||t.removeEventListener("load",this._updatePosition),this._observedImg=e,e==null||e.addEventListener("load",this._updatePosition))}render(){const e=this._position;return u`
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
              ${kl(2.5)}
            </div>
          `:v}
    `}};an.styles=q`
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
  `;let vt=an;Qi([m({type:Boolean})],vt.prototype,"picking");Qi([m({type:Boolean})],vt.prototype,"showMarker");Qi([m({attribute:!1})],vt.prototype,"value");Qi([T()],vt.prototype,"_position");Qi([T()],vt.prototype,"_dragging");const Ke=(s,e)=>{typeof customElements<"u"&&!customElements.get(s)&&customElements.define(s,e)};Ke("sfx-uploader",Om);Ke("sfx-drop-zone",bm);Ke("sfx-import-divider",Gr);Ke("sfx-source-pills",ji);Ke("sfx-file-list",Q);Ke("sfx-file-item",se);Ke("sfx-actions-bar",ge);Ke("sfx-url-dialog",zt);Ke("sfx-camera-dialog",mt);Ke("sfx-screen-cast-dialog",st);Ke("sfx-focus-point-overlay",vt);const Lm=[{pattern:"/",load:()=>J(()=>import("./landing-D3lJjSqf.js"),[]).then(s=>s.default)},{pattern:"/docs/getting-started",load:()=>J(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(s=>s.default)},{pattern:"/docs/configuration",load:()=>J(()=>import("./configuration-BXB9bhVk.js"),__vite__mapDeps([2,1])).then(s=>s.default)},{pattern:"/docs/api",load:()=>J(()=>import("./api-C3Pu2Ua4.js"),__vite__mapDeps([3,1])).then(s=>s.default)},{pattern:"/docs/theming",load:()=>J(()=>import("./theming-DHk87o6W.js"),__vite__mapDeps([4,1])).then(s=>s.default)},{pattern:"/docs/types",load:()=>J(()=>import("./types-HFUEcb6v.js"),__vite__mapDeps([5,1])).then(s=>s.default)},{pattern:"/examples/basic",load:()=>J(()=>import("./basic-Bsc3xdmq.js"),__vite__mapDeps([6,7])).then(s=>s.default)},{pattern:"/examples/auto-upload",load:()=>J(()=>import("./auto-upload-DD6fmw6b.js"),__vite__mapDeps([8,7])).then(s=>s.default)},{pattern:"/examples/restrictions",load:()=>J(()=>import("./restrictions-CZXwJdQ_.js"),__vite__mapDeps([9,7,10])).then(s=>s.default)},{pattern:"/examples/target-folder",load:()=>J(()=>import("./target-folder-CbggWmrF.js"),__vite__mapDeps([11,7])).then(s=>s.default)},{pattern:"/examples/concurrency",load:()=>J(()=>import("./concurrency-DOjqEEhb.js"),__vite__mapDeps([12,7,10])).then(s=>s.default)},{pattern:"/examples/events",load:()=>J(()=>import("./events-D56FHEK4.js"),__vite__mapDeps([13,7])).then(s=>s.default)},{pattern:"/examples/modal",load:()=>J(()=>import("./modal-DbFqJcbN.js"),__vite__mapDeps([14,7])).then(s=>s.default)},{pattern:"/examples/inline",load:()=>J(()=>import("./inline-BedK9Azn.js"),__vite__mapDeps([15,7])).then(s=>s.default)},{pattern:"/examples/sources-layout",load:()=>J(()=>import("./sources-layout-Cgc4v1fg.js"),__vite__mapDeps([16,7])).then(s=>s.default)},{pattern:"/examples/core-sources",load:()=>J(()=>import("./core-sources-dQj2JNT6.js"),__vite__mapDeps([17,7])).then(s=>s.default)},{pattern:"/examples/custom-source",load:()=>J(()=>import("./custom-source-_aCf1Fck.js"),__vite__mapDeps([18,7])).then(s=>s.default)},{pattern:"/examples/header-button",load:()=>J(()=>import("./header-button-BUVQolYU.js"),__vite__mapDeps([19,7])).then(s=>s.default)},{pattern:"/examples/minimize-to-background",load:()=>J(()=>import("./minimize-to-background-D5ToUpml.js"),__vite__mapDeps([20,7])).then(s=>s.default)},{pattern:"/examples/resumable-upload",load:()=>J(()=>import("./resumable-upload-ATz-Ljht.js"),__vite__mapDeps([21,7,10])).then(s=>s.default)},{pattern:"/examples/react-wrapper",load:()=>J(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([22,1])).then(s=>s.default)},{pattern:"/examples/metadata",load:()=>J(()=>import("./metadata-zEuvflYT.js"),__vite__mapDeps([23,7])).then(s=>s.default)},{pattern:"/examples/full-screen",load:()=>J(()=>import("./full-screen-D6ODxSQr.js"),[]).then(s=>s.default)},{pattern:"/examples/last-upload-review",load:()=>J(()=>import("./last-upload-review-BFrano-i.js"),[]).then(s=>s.default)},{pattern:"/examples/similar-check",load:()=>J(()=>import("./similar-check-zLXUbW80.js"),__vite__mapDeps([24,7,10])).then(s=>s.default)},{pattern:"/examples/upload-settings",load:()=>J(()=>import("./upload-settings-CbTyJfZd.js"),__vite__mapDeps([25,7,10])).then(s=>s.default)}];let Yt=null,Ba=0;function Um(s){const e=document.getElementById("content"),t=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),r=document.getElementById("sidebar-examples"),o=document.querySelectorAll(".topbar-nav-link");async function n(){var k,C;const a=location.hash.slice(1)||"/",l=!a.startsWith("/");if(l&&Yt){(k=document.getElementById(a))==null||k.scrollIntoView({behavior:"smooth"});return}const c=l?"/":a,d=++Ba;Yt!=null&&Yt.destroy&&Yt.destroy();const p=Lm.find(x=>x.pattern===c);if(!p){location.hash="#/";return}const h=c.startsWith("/docs/"),f=c.startsWith("/examples/"),_=h||f,g=c==="/";t.classList.toggle("hidden",!_),document.body.classList.toggle("has-sidebar",_),document.body.classList.toggle("is-home",g),i.classList.toggle("hidden",!h),r.classList.toggle("hidden",!f),t.querySelectorAll(".sidebar-link").forEach(x=>{x.classList.toggle("active",x.getAttribute("data-route")===c)});const S=h?"docs":f?"examples":"home";o.forEach(x=>{x.classList.toggle("active",x.getAttribute("data-section")===S)}),t.classList.remove("mobile-open"),l||window.scrollTo(0,0);const E=await p.load();d===Ba&&(Yt=E,e.innerHTML=E.render(),E.init&&E.init(s),l&&((C=document.getElementById(a))==null||C.scrollIntoView({behavior:"smooth"})))}window.addEventListener("hashchange",n),n()}const hc="sfx-uploader-demo-auth",Na={container:"",securityTemplateId:""};function fc(){try{const s=localStorage.getItem(hc);if(s)return{...Na,...JSON.parse(s)}}catch{}return{...Na}}function zm(s){localStorage.setItem(hc,JSON.stringify(s))}function iv(s={}){const{container:e,securityTemplateId:t}=fc();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","box","onedrive"]},...s}}function Dm(){const s=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),i=document.getElementById("auth-sec-template"),r=document.getElementById("auth-save"),o=fc();t.value=o.container,i.value=o.securityTemplateId,s.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),r.addEventListener("click",()=>{zm({container:t.value.trim(),securityTemplateId:i.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!s.contains(n.target)&&e.classList.add("hidden")})}Dm();const Mm=document.getElementById("uploader");Um(Mm);var Ha;(Ha=document.getElementById("sidebar-toggle"))==null||Ha.addEventListener("click",()=>{var s;(s=document.getElementById("sidebar"))==null||s.classList.toggle("mobile-open")});export{Ym as $,v as A,ss as B,Vn as C,wu as D,yu as E,Xe as F,gu as G,rp as H,Ge as I,Su as J,uu as K,po as L,lo as M,Gm as N,Yn as O,It as P,Eu as Q,hs as R,ft as S,xo as T,Hm as U,Ai as V,Np as W,Km as X,_l as Y,Bu as Z,Mu as _,q as a,_r as a0,kl as a1,Xd as a2,so as a3,sp as a4,ro as a5,zu as a6,Du as a7,uo as a8,Gu as a9,Hi as aA,Sl as aB,Mt as aC,Wm as aD,ju as aE,ml as aF,$r as aG,At as aH,Qt as aI,Cs as aJ,xl as aK,wl as aL,pu as aM,P as aN,bo as aO,Il as aP,bl as aQ,Lu as aR,Fu as aS,Iu as aa,Jm as ab,zs as ac,Ne as ad,Us as ae,Ri as af,ho as ag,no as ah,St as ai,go as aj,kr as ak,Or as al,ku as am,Ni as an,bu as ao,Vm as ap,qu as aq,Yu as ar,Ru as as,Mp as at,gl as au,co as av,Gn as aw,wr as ax,Cu as ay,mo as az,iv as b,te as c,Et as d,u as e,Le as f,zg as g,Xm as h,G as i,yo as j,ev as k,Zm as l,Kp as m,m as n,Yp as o,Kn as p,Ku as q,T as r,Qm as s,Ae as t,Vu as u,xu as v,ao as w,Ot as x,vl as y,_u as z};
