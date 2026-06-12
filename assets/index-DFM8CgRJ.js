const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-BC2TMl8e.js","assets/api-C3Pu2Ua4.js","assets/theming-D5E2zXLD.js","assets/types-HFUEcb6v.js","assets/basic-CIWPls9R.js","assets/code-block-C_3oxnLY.js","assets/auto-upload-esIdPw51.js","assets/restrictions-_b34qs5q.js","assets/custom-select-CZ_fVHDR.js","assets/target-folder-DqrnRACo.js","assets/concurrency-C_uq0Vey.js","assets/events-CVAEQXqx.js","assets/modal-BdAH8yXH.js","assets/inline-DNwYrz1e.js","assets/sources-layout-DgpCj2y0.js","assets/core-sources-CRTg-UYF.js","assets/custom-source-eGXzyoJ3.js","assets/header-button-vrNl0yZ3.js","assets/minimize-to-background-C6djJE2c.js","assets/resumable-upload-aQp4hsCu.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-CnMe1Aw9.js","assets/similar-check-g3yGrGiu.js","assets/upload-settings-BR2keNqp.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const Xs="modulepreload",Js=function(r){return"/uploader/"+r},Or={},V=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let n=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=n(t.map(c=>{if(c=Js(c),c in Or)return;Or[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Xs,d||(u.as="script"),u.crossOrigin="",u.href=c,l&&u.setAttribute("nonce",l),document.head.appendChild(u),d)return new Promise((m,g)=>{u.addEventListener("load",m),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return o.then(n=>{for(const a of n||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=globalThis,er=Vt.ShadowRoot&&(Vt.ShadyCSS===void 0||Vt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tr=Symbol(),Ar=new WeakMap;let Qo=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(er&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ar.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ar.set(t,e))}return e}toString(){return this.cssText}};const Zs=r=>new Qo(typeof r=="string"?r:r+"",void 0,tr),le=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Qo(t,r,tr)},Qs=(r,e)=>{if(er)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=Vt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}},Tr=er?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Zs(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:en,defineProperty:tn,getOwnPropertyDescriptor:rn,getOwnPropertyNames:on,getOwnPropertySymbols:sn,getPrototypeOf:nn}=Object,Ce=globalThis,Lr=Ce.trustedTypes,an=Lr?Lr.emptyScript:"",mi=Ce.reactiveElementPolyfillSupport,xt=(r,e)=>r,Jt={toAttribute(r,e){switch(e){case Boolean:r=r?an:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ir=(r,e)=>!en(r,e),Fr={attribute:!0,type:String,converter:Jt,reflect:!1,useDefault:!1,hasChanged:ir};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ce.litPropertyMetadata??(Ce.litPropertyMetadata=new WeakMap);let Xe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Fr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&tn(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=rn(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){const a=o==null?void 0:o.call(this);s==null||s.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fr}static _$Ei(){if(this.hasOwnProperty(xt("elementProperties")))return;const e=nn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt("properties"))){const t=this.properties,i=[...on(t),...sn(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Tr(o))}else e!==void 0&&t.push(Tr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Jt).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){var s,n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Jt;this._$Em=o;const c=l.fromAttribute(t,a.type);this[o]=c??((n=this._$Ej)==null?void 0:n.get(o))??c,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){var n;if(e!==void 0){const a=this.constructor;if(o===!1&&(s=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??ir)(s,t)||i.useDefault&&i.reflect&&s===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Xe.elementStyles=[],Xe.shadowRootOptions={mode:"open"},Xe[xt("elementProperties")]=new Map,Xe[xt("finalized")]=new Map,mi==null||mi({ReactiveElement:Xe}),(Ce.reactiveElementVersions??(Ce.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,Ir=r=>r,Zt=vt.trustedTypes,zr=Zt?Zt.createPolicy("lit-html",{createHTML:r=>r}):void 0,es="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,ts="?"+Se,ln=`<${ts}>`,Be=document,wt=()=>Be.createComment(""),_t=r=>r===null||typeof r!="object"&&typeof r!="function",rr=Array.isArray,cn=r=>rr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",xi=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dr=/-->/g,Mr=/>/g,Ae=RegExp(`>|${xi}(?:([^\\s"'>=/]+)(${xi}*=${xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jr=/'/g,Br=/"/g,is=/^(?:script|style|textarea|title)$/i,rs=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=rs(1),Ie=rs(2),he=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Nr=new WeakMap,ze=Be.createTreeWalker(Be,129);function os(r,e){if(!rr(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return zr!==void 0?zr.createHTML(e):e}const dn=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":e===3?"<math>":"",n=ct;for(let a=0;a<t;a++){const l=r[a];let c,d,p=-1,u=0;for(;u<l.length&&(n.lastIndex=u,d=n.exec(l),d!==null);)u=n.lastIndex,n===ct?d[1]==="!--"?n=Dr:d[1]!==void 0?n=Mr:d[2]!==void 0?(is.test(d[2])&&(o=RegExp("</"+d[2],"g")),n=Ae):d[3]!==void 0&&(n=Ae):n===Ae?d[0]===">"?(n=o??ct,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?Ae:d[3]==='"'?Br:jr):n===Br||n===jr?n=Ae:n===Dr||n===Mr?n=ct:(n=Ae,o=void 0);const m=n===Ae&&r[a+1].startsWith("/>")?" ":"";s+=n===ct?l+ln:p>=0?(i.push(c),l.slice(0,p)+es+l.slice(p)+Se+m):l+Se+(p===-2?a:m)}return[os(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class kt{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const a=e.length-1,l=this.parts,[c,d]=dn(e,t);if(this.el=kt.createElement(c,i),ze.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ze.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(es)){const u=d[n++],m=o.getAttribute(p).split(Se),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:g[2],strings:m,ctor:g[1]==="."?un:g[1]==="?"?fn:g[1]==="@"?hn:li}),o.removeAttribute(p)}else p.startsWith(Se)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(is.test(o.tagName)){const p=o.textContent.split(Se),u=p.length-1;if(u>0){o.textContent=Zt?Zt.emptyScript:"";for(let m=0;m<u;m++)o.append(p[m],wt()),ze.nextNode(),l.push({type:2,index:++s});o.append(p[u],wt())}}}else if(o.nodeType===8)if(o.data===ts)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(Se,p+1))!==-1;)l.push({type:7,index:s}),p+=Se.length-1}s++}}static createElement(e,t){const i=Be.createElement("template");return i.innerHTML=e,i}}function tt(r,e,t=r,i){var n,a;if(e===he)return e;let o=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const s=_t(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=tt(r,o._$AS(r,e.values),o,i)),e}class pn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??Be).importNode(t,!0);ze.currentNode=o;let s=ze.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new nt(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new gn(s,this,e)),this._$AV.push(c),l=i[++a]}n!==(l==null?void 0:l.index)&&(s=ze.nextNode(),n++)}return ze.currentNode=Be,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class nt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=tt(this,e,t),_t(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==he&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(Be.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=kt.createElement(os(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(t);else{const n=new pn(o,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=Nr.get(e.strings);return t===void 0&&Nr.set(e.strings,t=new kt(e)),t}k(e){rr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new nt(this.O(wt()),this.O(wt()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const o=Ir(e).nextSibling;Ir(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class li{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(s===void 0)e=tt(this,e,t,0),n=!_t(e)||e!==this._$AH&&e!==he,n&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=tt(this,a[i+l],t,l),c===he&&(c=this._$AH[l]),n||(n=!_t(c)||c!==this._$AH[l]),c===S?e=S:e!==S&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!o&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class un extends li{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class fn extends li{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class hn extends li{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=tt(this,e,t,0)??S)===he)return;const i=this._$AH,o=e===S&&i!==S||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==S&&(i===S||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class gn{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){tt(this,e)}}const mn={I:nt},vi=vt.litHtmlPolyfillSupport;vi==null||vi(kt,nt),(vt.litHtmlVersions??(vt.litHtmlVersions=[])).push("3.3.2");const Ee=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new nt(e.insertBefore(wt(),s),s,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=globalThis;let oe=class extends Xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return he}};var Jo;oe._$litElement$=!0,oe.finalized=!0,(Jo=Me.litElementHydrateSupport)==null||Jo.call(Me,{LitElement:oe});const bi=Me.litElementPolyfillSupport;bi==null||bi({LitElement:oe});(Me.litElementVersions??(Me.litElementVersions=[])).push("4.2.2");const M=r=>typeof r=="string",dt=()=>{let r,e;const t=new Promise((i,o)=>{r=i,e=o});return t.resolve=r,t.reject=e,t},Hr=r=>r==null?"":String(r),xn=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},vn=/###/g,qr=r=>r&&r.includes("###")?r.replace(vn,"."):r,Vr=r=>!r||M(r),bt=(r,e,t)=>{const i=M(e)?e.split("."):e;let o=0;for(;o<i.length-1;){if(Vr(r))return{};const s=qr(i[o]);!r[s]&&t&&(r[s]=new t),Object.prototype.hasOwnProperty.call(r,s)?r=r[s]:r={},++o}return Vr(r)?{}:{obj:r,k:qr(i[o])}},Kr=(r,e,t)=>{const{obj:i,k:o}=bt(r,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let s=e[e.length-1],n=e.slice(0,e.length-1),a=bt(r,n,Object);for(;a.obj===void 0&&n.length;)s=`${n[n.length-1]}.${s}`,n=n.slice(0,n.length-1),a=bt(r,n,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=t},bn=(r,e,t,i)=>{const{obj:o,k:s}=bt(r,e,Object);o[s]=o[s]||[],o[s].push(t)},Qt=(r,e)=>{const{obj:t,k:i}=bt(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},yn=(r,e,t)=>{const i=Qt(r,t);return i!==void 0?i:Qt(e,t)},ss=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?M(r[i])||r[i]instanceof String||M(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):ss(r[i],e[i],t):r[i]=e[i]);return r},be=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),wn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},_n=r=>M(r)?r.replace(/[&<>"'\/]/g,e=>wn[e]):r;class kn{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Sn=[" ",",","?","!",";"],$n=new kn(20),Cn=(r,e,t)=>{e=e||"",t=t||"";const i=Sn.filter(n=>!e.includes(n)&&!t.includes(n));if(i.length===0)return!0;const o=$n.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let s=!o.test(r);if(!s){const n=r.indexOf(t);n>0&&!o.test(r.substring(0,n))&&(s=!0)}return s},Ai=(r,e,t=".")=>{if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let o=r;for(let s=0;s<i.length;){if(!o||typeof o!="object")return;let n,a="";for(let l=s;l<i.length;++l)if(l!==s&&(a+=t),a+=i[l],n=o[a],n!==void 0){if(["string","number","boolean"].includes(typeof n)&&l<i.length-1)continue;s+=l-s+1;break}o=n}return o},St=r=>r==null?void 0:r.replace(/_/g,"-"),En={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class ei{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||En,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(e=e.map(s=>M(s)?s.replace(/[\r\n\x00-\x1F\x7F]/g," "):s),M(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new ei(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ei(this.logger,e)}}var ve=new ei;class ci{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){const i=(...o)=>{t(...o),this.off(e,i)};return this.on(e,i),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,s])=>{for(let n=0;n<s;n++)o(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,s])=>{for(let n=0;n<s;n++)o(e,...t)})}}class Yr extends ci{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,o={}){var c,d;const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,n=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.includes(".")?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):M(i)&&s?a.push(...i.split(s)):a.push(i)));const l=Qt(this.data,a);return!l&&!t&&!i&&e.includes(".")&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!M(i)?l:Ai((d=(c=this.data)==null?void 0:c[e])==null?void 0:d[t],i,s)}addResource(e,t,i,o,s={silent:!1}){const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.includes(".")&&(a=e.split("."),o=t,t=a[1]),this.addNamespaces(t),Kr(this.data,a,o),s.silent||this.emit("added",e,t,i,o)}addResources(e,t,i,o={silent:!1}){for(const s in i)(M(i[s])||Array.isArray(i[s]))&&this.addResource(e,t,s,i[s],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,s,n={silent:!1,skipCopy:!1}){let a=[e,t];e.includes(".")&&(a=e.split("."),o=i,i=t,t=a[1]),this.addNamespaces(t);let l=Qt(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?ss(l,i,s):l={...l,...i},Kr(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var ns={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,o){return r.forEach(s=>{var n;e=((n=this.processors[s])==null?void 0:n.process(e,t,i,o))??e}),e}};const as=Symbol("i18next/PATH_KEY");function Pn(){const r=[],e=Object.create(null);let t;return e.get=(i,o)=>{var s;return(s=t==null?void 0:t.revoke)==null||s.call(t),o===as?r:(r.push(o),t=Proxy.revocable(i,e),t.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Qe(r,e){const{[as]:t}=r(Pn()),i=(e==null?void 0:e.keySeparator)??".",o=(e==null?void 0:e.nsSeparator)??":",s=(e==null?void 0:e.enableSelector)==="strict";if(t.length>1&&o){const n=e==null?void 0:e.ns,a=s?Array.isArray(n)?n:n?[n]:null:Array.isArray(n)?n:null;if(a&&(s?a:a.length>1?a.slice(1):[]).includes(t[0]))return`${t[0]}${o}${t.slice(1).join(i)}`}return t.join(i)}const yi=r=>!M(r)&&typeof r!="boolean"&&typeof r!="number";class ti extends ci{constructor(e,t={}){super(),xn(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ve.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const o=this.resolve(e,i);if((o==null?void 0:o.res)===void 0)return!1;const s=yi(o.res);return!(i.returnObjects===!1&&s)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const n=i&&e.includes(i),a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Cn(e,i,o);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:M(s)?[s]:s};const c=e.split(i);(i!==o||i===o&&this.options.ns.includes(c[0]))&&(s=c.shift()),e=c.join(o)}return{key:e,namespaces:M(s)?[s]:s}}translate(e,t,i){let o=typeof t=="object"?{...t}:t;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=Qe(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]),e=e.map(A=>typeof A=="function"?Qe(A,{...this.options,...o}):String(A));const s=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],o),c=l[l.length-1];let d=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");const p=o.lng||this.language,u=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((p==null?void 0:p.toLowerCase())==="cimode")return u?s?{res:`${c}${d}${a}`,usedKey:a,exactUsedKey:a,usedLng:p,usedNS:c,usedParams:this.getUsedParamsDetails(o)}:`${c}${d}${a}`:s?{res:a,usedKey:a,exactUsedKey:a,usedLng:p,usedNS:c,usedParams:this.getUsedParamsDetails(o)}:a;const m=this.resolve(e,o);let g=m==null?void 0:m.res;const x=(m==null?void 0:m.usedKey)||a,$=(m==null?void 0:m.exactUsedKey)||a,L=["[object Number]","[object Function]","[object RegExp]"],k=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,w=o.count!==void 0&&!M(o.count),b=ti.hasDefaultValue(o),U=w?this.pluralResolver.getSuffix(p,o.count,o):"",P=o.ordinal&&w?this.pluralResolver.getSuffix(p,o.count,{ordinal:!1}):"",z=w&&!o.ordinal&&o.count===0,F=z&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${U}`]||o[`defaultValue${P}`]||o.defaultValue;let T=g;_&&!g&&b&&(T=F);const Z=yi(T),ue=Object.prototype.toString.apply(T);if(_&&T&&Z&&!L.includes(ue)&&!(M(k)&&Array.isArray(T))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const A=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,T,{...o,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(m.res=A,m.usedParams=this.getUsedParamsDetails(o),m):A}if(n){const A=Array.isArray(T),W=A?[]:{},xe=A?$:x;for(const y in T)if(Object.prototype.hasOwnProperty.call(T,y)){const h=`${xe}${n}${y}`;b&&!g?W[y]=this.translate(h,{...o,defaultValue:yi(F)?F[y]:void 0,joinArrays:!1,ns:l}):W[y]=this.translate(h,{...o,joinArrays:!1,ns:l}),W[y]===h&&(W[y]=T[y])}g=W}}else if(_&&M(k)&&Array.isArray(g))g=g.join(k),g&&(g=this.extendTranslation(g,e,o,i));else{let A=!1,W=!1;!this.isValidLookup(g)&&b&&(A=!0,g=F),this.isValidLookup(g)||(W=!0,g=a);const y=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&W?void 0:g,h=b&&F!==g&&this.options.updateMissing;if(W||A||h){if(this.logger.log(h?"updateKey":"missingKey",p,c,w&&!h?`${a}${this.pluralResolver.getSuffix(p,o.count,o)}`:a,h?F:g),n){const C=this.resolve(a,{...o,keySeparator:!1});C&&C.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let v=[];const E=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&E&&E[0])for(let C=0;C<E.length;C++)v.push(E[C]);else this.options.saveMissingTo==="all"?v=this.languageUtils.toResolveHierarchy(o.lng||this.language):v.push(o.lng||this.language);const R=(C,D,H)=>{var te;const q=b&&H!==g?H:y;this.options.missingKeyHandler?this.options.missingKeyHandler(C,c,D,q,h,o):(te=this.backendConnector)!=null&&te.saveMissing&&this.backendConnector.saveMissing(C,c,D,q,h,o),this.emit("missingKey",C,c,D,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&w?v.forEach(C=>{const D=this.pluralResolver.getSuffixes(C,o);z&&o[`defaultValue${this.options.pluralSeparator}zero`]&&!D.includes(`${this.options.pluralSeparator}zero`)&&D.push(`${this.options.pluralSeparator}zero`),D.forEach(H=>{R([C],a+H,o[`defaultValue${H}`]||F)})}):R(v,a,F))}g=this.extendTranslation(g,e,o,m,i),W&&g===a&&this.options.appendNamespaceToMissingKey&&(g=`${c}${d}${a}`),(W||A)&&this.options.parseMissingKeyHandler&&(g=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${d}${a}`:a,A?g:void 0,o))}return s?(m.res=g,m.usedParams=this.getUsedParamsDetails(o),m):g}extendTranslation(e,t,i,o,s){var l,c;if((l=this.i18nFormat)!=null&&l.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=M(e)&&(((c=i==null?void 0:i.interpolation)==null?void 0:c.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const m=e.match(this.interpolator.nestingRegexp);p=m&&m.length}let u=i.replace&&!M(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||o.usedLng,i),d){const m=e.match(this.interpolator.nestingRegexp),g=m&&m.length;p<g&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...m)=>(s==null?void 0:s[0])===m[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${m[0]} in key: ${t[0]}`),null):this.translate(...m,t),i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,a=M(n)?[n]:n;return e!=null&&(a!=null&&a.length)&&i.applyPostProcessor!==!1&&(e=ns.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,o,s,n,a;return M(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?Qe(l,{...this.options,...t}):l)),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),d=c.key;o=d;let p=c.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const u=t.count!==void 0&&!M(t.count),m=u&&!t.ordinal&&t.count===0,g=t.context!==void 0&&(M(t.context)||typeof t.context=="number")&&t.context!=="",x=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach($=>{var L,k;this.isValidLookup(i)||(a=$,!this.checkedLoadedFor[`${x[0]}-${$}`]&&((L=this.utils)!=null&&L.hasLoadedNamespace)&&!((k=this.utils)!=null&&k.hasLoadedNamespace(a))&&(this.checkedLoadedFor[`${x[0]}-${$}`]=!0,this.logger.warn(`key "${o}" for languages "${x.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(_=>{var U;if(this.isValidLookup(i))return;n=_;const w=[d];if((U=this.i18nFormat)!=null&&U.addLookupKeys)this.i18nFormat.addLookupKeys(w,d,_,$,t);else{let P;u&&(P=this.pluralResolver.getSuffix(_,t.count,t));const z=`${this.options.pluralSeparator}zero`,F=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&P.startsWith(F)&&w.push(d+P.replace(F,this.options.pluralSeparator)),w.push(d+P),m&&w.push(d+z)),g){const T=`${d}${this.options.contextSeparator||"_"}${t.context}`;w.push(T),u&&(t.ordinal&&P.startsWith(F)&&w.push(T+P.replace(F,this.options.pluralSeparator)),w.push(T+P),m&&w.push(T+z))}}let b;for(;b=w.pop();)this.isValidLookup(i)||(s=b,i=this.getResource(_,$,b,t))}))})}),{res:i,usedKey:o,exactUsedKey:s,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,o={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!M(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const s of t)delete o[s]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&i.startsWith(t)&&e[i]!==void 0)return!0;return!1}}class Wr{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ve.create("languageUtils")}getScriptPartFromCode(e){if(e=St(e),!e||!e.includes("-"))return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=St(e),!e||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(M(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getScriptPartFromCode(i);if(this.isSupportedCode(o))return t=o;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>n===s?!0:!n.includes("-")&&!s.includes("-")?!1:!!(n.includes("-")&&!s.includes("-")&&n.slice(0,n.indexOf("-"))===s||n.startsWith(s)&&s.length>1))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),M(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),o=[],s=n=>{n&&(this.isSupportedCode(n)?o.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return M(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):M(e)&&s(this.formatLanguageCode(e)),i.forEach(n=>{o.includes(n)||s(this.formatLanguageCode(n))}),o}}const Gr={zero:0,one:1,two:2,few:3,many:4,other:5},Xr={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Un{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=ve.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=St(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:o});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let n;try{n=new Intl.PluralRules(i,{type:o})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Xr;if(!e.match(/-|_/))return Xr;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[s]=n,n}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((o,s)=>Gr[o]-Gr[s]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,t,i={}){const o=this.getRule(e,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Jr=(r,e,t,i=".",o=!0)=>{let s=yn(r,e,t);return!s&&o&&M(t)&&(s=Ai(r,t,i),s===void 0&&(s=Ai(e,t,i))),s},wi=r=>r.replace(/\$/g,"$$$$");class Zr{constructor(e={}){var t;this.logger=ve.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:s,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:p,nestingPrefix:u,nestingPrefixEscaped:m,nestingSuffix:g,nestingSuffixEscaped:x,nestingOptionsSeparator:$,maxReplaces:L,alwaysFormat:k}=e.interpolation;this.escape=t!==void 0?t:_n,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=s?be(s):n||"{{",this.suffix=a?be(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":p?be(p):"-",this.unescapeSuffix=this.unescapePrefix?"":d?be(d):"",this.nestingPrefix=u?be(u):m||be("$t("),this.nestingSuffix=g?be(g):x||be(")"),this.nestingOptionsSeparator=$||",",this.maxReplaces=L||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,o){var m;let s,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=g=>{if(!g.includes(this.formatSeparator)){const k=Jr(t,l,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(k,void 0,i,{...o,...t,interpolationkey:g}):k}const x=g.split(this.formatSeparator),$=x.shift().trim(),L=x.join(this.formatSeparator).trim();return this.format(Jr(t,l,$,this.options.keySeparator,this.options.ignoreJSONStructure),L,i,{...o,...t,interpolationkey:$})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const d=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=((m=o==null?void 0:o.interpolation)==null?void 0:m.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>wi(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?wi(this.escape(g)):wi(g)}].forEach(g=>{for(a=0;s=g.regex.exec(e);){const x=s[1].trim();if(n=c(x),n===void 0)if(typeof d=="function"){const L=d(e,s,o);n=M(L)?L:""}else if(o&&Object.prototype.hasOwnProperty.call(o,x))n="";else if(p){n=s[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),n="";else!M(n)&&!this.useRawValueToEscape&&(n=Hr(n));const $=g.safeValue(n);if(e=e.replace(s[0],$),p?(g.regex.lastIndex+=n.length,g.regex.lastIndex-=s[0].length):g.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let o,s,n;const a=(l,c)=>{const d=this.nestingOptionsSeparator;if(!l.includes(d))return l;const p=l.split(new RegExp(`${be(d)}[ ]*{`));let u=`{${p[1]}`;l=p[0],u=this.interpolate(u,n);const m=u.match(/'/g),g=u.match(/"/g);(((m==null?void 0:m.length)??0)%2===0&&!g||((g==null?void 0:g.length)??0)%2!==0)&&(u=u.replace(/'/g,'"'));try{n=JSON.parse(u),c&&(n={...c,...n})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${d}${u}`}return n.defaultValue&&n.defaultValue.includes(this.prefix)&&delete n.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!M(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;const c=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(c!==-1&&(l=o[1].slice(c).split(this.formatSeparator).map(d=>d.trim()).filter(Boolean),o[1]=o[1].slice(0,c)),s=t(a.call(this,o[1].trim(),n),n),s&&o[0]===e&&!M(s))return s;M(s)||(s=Hr(s)),s||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),s=""),l.length&&(s=l.reduce((d,p)=>this.format(d,p,i.lng,{...i,interpolationkey:o[1].trim()}),s.trim())),e=e.replace(o[0],s),this.regexp.lastIndex=0}return e}}const Rn=r=>{let e=r.toLowerCase().trim();const t={};if(r.includes("(")){const i=r.split("(");e=i[0].toLowerCase().trim();const o=i[1].slice(0,-1);e==="currency"&&!o.includes(":")?t.currency||(t.currency=o.trim()):e==="relativetime"&&!o.includes(":")?t.range||(t.range=o.trim()):o.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();t[d]||(t[d]=c),c==="false"&&(t[d]=!1),c==="true"&&(t[d]=!0),isNaN(c)||(t[d]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Qr=r=>{const e={};return(t,i,o)=>{let s=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(s={...s,[o.interpolationkey]:void 0});const n=i+JSON.stringify(s);let a=e[n];return a||(a=r(St(i),o),e[n]=a),a(t)}},On=r=>(e,t,i)=>r(St(t),i)(e);class An{constructor(e={}){this.logger=ve.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Qr:On;this.formats={number:i((o,s)=>{const n=new Intl.NumberFormat(o,{...s});return a=>n.format(a)}),currency:i((o,s)=>{const n=new Intl.NumberFormat(o,{...s,style:"currency"});return a=>n.format(a)}),datetime:i((o,s)=>{const n=new Intl.DateTimeFormat(o,{...s});return a=>n.format(a)}),relativetime:i((o,s)=>{const n=new Intl.RelativeTimeFormat(o,{...s});return a=>n.format(a,s.range||"day")}),list:i((o,s)=>{const n=new Intl.ListFormat(o,{...s});return a=>n.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Qr(t)}format(e,t,i,o={}){if(!t||e==null)return e;const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&!s[0].includes(")")&&s.find(a=>a.includes(")"))){const a=s.findIndex(l=>l.includes(")"));s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{var p;const{formatName:c,formatOptions:d}=Rn(l);if(this.formats[c]){let u=a;try{const m=((p=o==null?void 0:o.formatParams)==null?void 0:p[o.interpolationkey])||{},g=m.locale||m.lng||o.locale||o.lng||i;u=this.formats[c](a,g,{...d,...o,...m})}catch(m){this.logger.warn(m)}return u}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const Tn=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Ln extends ci{constructor(e,t,i,o={}){var s,n;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=ve.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(n=(s=this.backend)==null?void 0:s.init)==null||n.call(s,i,o.backend,o)}queueLoad(e,t,i,o){const s={},n={},a={},l={};return e.forEach(c=>{let d=!0;t.forEach(p=>{const u=`${c}|${p}`;!i.reload&&this.store.hasResourceBundle(c,p)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?n[u]===void 0&&(n[u]=!0):(this.state[u]=1,d=!1,n[u]===void 0&&(n[u]=!0),s[u]===void 0&&(s[u]=!0),l[p]===void 0&&(l[p]=!0)))}),d||(a[c]=!0)}),(Object.keys(s).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(s),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const o=e.split("|"),s=o[0],n=o[1];t&&this.emit("failedLoading",s,n,t),!t&&i&&this.store.addResourceBundle(s,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{bn(l.loaded,[s],n),Tn(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(p=>{a[c][p]===void 0&&(a[c][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i,o=0,s=this.retryTimeout,n){if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:s,callback:n});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(c&&d&&o<this.maxRetries){setTimeout(()=>{this.read(e,t,i,o+1,s*2,n)},s);return}n(c,d)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t,i={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();M(e)&&(e=this.languageUtils.toResolveHierarchy(e)),M(t)&&(t=[t]);const s=this.queueLoad(e,t,i,o);if(!s.toLoad.length)return s.pending.length||o(),null;s.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),o=i[0],s=i[1];this.read(o,s,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${s} for language ${o} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${s} for language ${o}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,o,s,n={},a=()=>{}){var l,c,d,p,u;if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((p=(d=this.services)==null?void 0:d.utils)!=null&&p.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((u=this.backend)!=null&&u.create){const m={...n,isUpdate:s},g=this.backend.create.bind(this.backend);if(g.length<6)try{let x;g.length===5?x=g(e,t,i,o,m):x=g(e,t,i,o),x&&typeof x.then=="function"?x.then($=>a(null,$)).catch(a):a(null,x)}catch(x){a(x)}else g(e,t,i,o,a,m)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}const _i=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),M(r[1])&&(e.defaultValue=r[1]),M(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),eo=r=>(M(r.ns)&&(r.ns=[r.ns]),M(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),M(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&!r.supportedLngs.includes("cimode")&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r),jt=()=>{},Fn=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class yt extends ci{constructor(e={},t){if(super(),this.options=eo(e),this.services={},this.logger=ve,this.modules={external:[]},Fn(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(M(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const i=_i();this.options={...i,...this.options,...eo(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const o=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?ve.init(o(this.modules.logger),this.options):ve.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=An;const d=new Wr(this.options);this.store=new Yr(this.options.resources,this.options);const p=this.services;p.logger=ve,p.resourceStore=this.store,p.languageUtils=d,p.pluralResolver=new Un(d,{prepend:this.options.pluralSeparator}),c&&(p.formatter=o(c),p.formatter.init&&p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Zr(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Ln(o(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",(u,...m)=>{this.emit(u,...m)}),this.modules.languageDetector&&(p.languageDetector=o(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=o(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new ti(this.services,this.options),this.translator.on("*",(u,...m)=>{this.emit(u,...m)}),this.modules.external.forEach(u=>{u.init&&u.init(this)})}if(this.format=this.options.interpolation.format,t||(t=jt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...d)=>this.store[c](...d)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...d)=>(this.store[c](...d),this)});const a=dt(),l=()=>{const c=(d,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(p),t(d,p)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=jt){var s,n;let i=t;const o=M(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(p=>{p!=="cimode"&&(a.includes(p)||a.push(p))})};o?l(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>l(d)),(n=(s=this.options.preload)==null?void 0:s.forEach)==null||n.call(s,c=>l(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,t,i){const o=dt();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=jt),this.services.backendConnector.reload(e,t,s=>{o.resolve(),i(s)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&ns.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!["cimode","dev"].includes(i)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=dt();this.emit("languageChanging",e);const o=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},s=(a,l)=>{l?this.isLanguageChangingTo===e&&(o(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...c)=>this.t(...c)),t&&t(a,(...c)=>this.t(...c))},n=a=>{var d,p;!e&&!a&&this.services.languageDetector&&(a=[]);const l=M(a)?a:a&&a[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(M(a)?[a]:a);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),(p=(d=this.services.languageDetector)==null?void 0:d.cacheUserLanguage)==null||p.call(d,c)),this.loadResources(c,u=>{s(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),i}getFixedT(e,t,i,o){const s=o==null?void 0:o.scopeNs,n=(a,l,...c)=>{let d;typeof l!="object"?d=this.options.overloadTranslationOptionHandler([a,l].concat(c)):d={...l},d.lng=d.lng||n.lng,d.lngs=d.lngs||n.lngs;const p=d.ns!==void 0&&d.ns!==null;d.ns=d.ns||n.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||i||n.keyPrefix);const u={...this.options,...d};Array.isArray(s)&&!p&&(u.ns=s),typeof d.keyPrefix=="function"&&(d.keyPrefix=Qe(d.keyPrefix,u));const m=this.options.keySeparator||".";let g;return d.keyPrefix&&Array.isArray(a)?g=a.map(x=>(typeof x=="function"&&(x=Qe(x,u)),`${d.keyPrefix}${m}${x}`)):(typeof a=="function"&&(a=Qe(a,u)),g=d.keyPrefix?`${d.keyPrefix}${m}${a}`:a),this.t(g,d)};return M(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(...e){var t;return(t=this.translator)==null?void 0:t.translate(...e)}exists(...e){var t;return(t=this.translator)==null?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!o||n(s,e)))}loadNamespaces(e,t){const i=dt();return this.options.ns?(M(e)&&(e=[e]),e.forEach(o=>{this.options.ns.includes(o)||this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=dt();M(e)&&(e=[e]);const o=this.options.preload||[],s=e.filter(n=>!o.includes(n)&&this.services.languageUtils.isSupportedCode(n));return s.length?(this.options.preload=o.concat(s),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){var o,s;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const n=new Intl.Locale(e);if(n&&n.getTextInfo){const a=n.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((s=this.services)==null?void 0:s.languageUtils)||new Wr(_i());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.includes(i.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new yt(e,t);return i.createInstance=yt.createInstance,i}cloneInstance(e={},t=jt){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},s=new yt(o);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((d,p)=>(d[p]={...l[c][p]},d),l[c]),l),{});s.store=new Yr(a,o),s.services.resourceStore=s.store}if(e.interpolation){const l={..._i().interpolation,...this.options.interpolation,...e.interpolation},c={...o,interpolation:l};s.services.interpolator=new Zr(c)}return s.translator=new ti(s.services,o),s.translator.on("*",(a,...l)=>{s.emit(a,...l)}),s.init(o,t),s.translator.options=o,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ce=yt.createInstance();ce.createInstance;ce.dir;ce.init;ce.loadResources;ce.reloadResources;ce.use;ce.changeLanguage;ce.getFixedT;ce.t;ce.exists;ce.setDefaultNamespace;ce.hasLoadedNamespace;ce.loadNamespaces;ce.loadLanguages;const ls=["__proto__","constructor","prototype"];function cs(r){return!(typeof r!="string"||r.length===0||r.length>128||ls.indexOf(r)>-1||r.indexOf("..")>-1||r.indexOf("\\")>-1||/[?#%\s@]/.test(r)||/[\x00-\x1F\x7F]/.test(r))}function ds(r){return!(!cs(r)||r.indexOf("/")>-1)}function In(r){return cs(r)}const zn={lng:ds,ns:In};function Bt(r){return typeof r!="string"?r:r.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function Dn(r){if(typeof r!="string"||r.length===0)return r;try{const e=new URL(r);return e.username||e.password?(e.username="",e.password="",e.toString()):r}catch{return r.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function ps(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function Mn(r){return!!r&&typeof r.then=="function"}function jn(r){return Mn(r)?r:Promise.resolve(r)}const Bn=/\{\{(.+?)\}\}/g;function to(r,e){let t=!1;const i=r.replace(Bn,(o,s)=>{const n=s.trim();if(ls.indexOf(n)>-1)return o;const a=e[n];if(a==null)return o;const l=zn[n]||ds,c=String(a).split("+");for(const d of c)if(!l(d))return t=!0,o;return c.join("+")});return t?null:i}const je=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let ii;typeof fetch=="function"?ii=fetch:je&&typeof je.fetch=="function"&&(ii=je.fetch);const io=ps()&&je?je.XMLHttpRequest:void 0,Nn=typeof ActiveXObject=="function"&&je?je.ActiveXObject:void 0,us=["__proto__","constructor","prototype"],Ti=(r,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))us.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return r;r=r+(r.indexOf("?")!==-1?"&":"?")+t.slice(1)}return r},ro=(r,e,t,i)=>{const o=s=>{if(!s.ok)return t(s.statusText||"Error",{status:s.status});s.text().then(n=>{t(null,{status:s.status,data:n})}).catch(t)};if(i){const s=i(r,e);if(s instanceof Promise){s.then(o).catch(t);return}}typeof fetch=="function"?fetch(r,e).then(o).catch(t):ii(r,e).then(o).catch(t)},Hn=(r,e,t,i)=>{r.queryStringParams&&(e=Ti(e,r.queryStringParams));const o={...typeof r.customHeaders=="function"?r.customHeaders():r.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(o["Content-Type"]="application/json");const s=typeof r.requestOptions=="function"?r.requestOptions(t):r.requestOptions,n={method:t?"POST":"GET",body:t?r.stringify(t):void 0,headers:o,...r._omitFetchOptions?{}:s},a=typeof r.alternateFetch=="function"&&r.alternateFetch.length>=1?r.alternateFetch:void 0;try{ro(e,n,i,a)}catch(l){if(!s||Object.keys(s).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(s).forEach(c=>{delete n[c]}),ro(e,n,i,a),r._omitFetchOptions=!0}catch(c){i(c)}}},qn=(r,e,t,i)=>{t&&typeof t=="object"&&(t=Ti("",t).slice(1)),r.queryStringParams&&(e=Ti(e,r.queryStringParams));try{const o=io?new io:new Nn("MSXML2.XMLHTTP.3.0");o.open(t?"POST":"GET",e,1),r.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!r.withCredentials,t&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");let s=r.customHeaders;if(s=typeof s=="function"?s():s,s)for(const n of Object.keys(s))us.indexOf(n)>-1||o.setRequestHeader(n,s[n]);o.onreadystatechange=()=>{o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(t)}catch(o){console&&console.log(o)}},Vn=(r,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),ii&&e.indexOf("file:")!==0)return Hn(r,e,t,i);if(ps()||typeof ActiveXObject=="function")return qn(r,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},Kn=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:r=>JSON.parse(r),stringify:JSON.stringify,parsePayload:(r,e,t)=>({[e]:t||""}),parseLoadPayload:(r,e)=>{},request:Vn,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var fs=class{constructor(r,e={},t={}){this.services=r,this.options=e,this.allOptions=t,this.type="backend",this.init(r,e,t)}init(r,e={},t={}){if(this.services=r,this.options={...Kn(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(r,e,t){this._readAny(r,r,e,e,t)}read(r,e,t){this._readAny([r],r,[e],e,t)}_readAny(r,e,t,i,o){let s=this.options.loadPath;typeof this.options.loadPath=="function"&&(s=this.options.loadPath(r,t)),s=jn(s),s.then(n=>{if(!n)return o(null,{});const a=to(n,{lng:r.join("+"),ns:t.join("+")});if(a==null){const l=r.map(Bt).join(", "),c=t.map(Bt).join(", ");return o(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(a,o,e,i)})}loadUrl(r,e,t,i){const o=typeof t=="string"?[t]:t,s=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(o,s),a=Bt(Dn(r));this.options.request(this.options,r,n,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+a+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+a+"; status code: "+c.status,!1);if(!c&&l&&l.message){const u=l.message.toLowerCase();if(["failed","fetch","network","load"].find(m=>u.indexOf(m)>-1))return e("failed loading "+a+": "+Bt(l.message),!0)}if(l)return e(l,!1);let d,p;try{typeof c.data=="string"?d=this.options.parse(c.data,t,i):d=c.data}catch{p="failed parsing "+a+" to json"}if(p)return e(p,!1);e(null,d)})}create(r,e,t,i,o){if(!this.options.addPath)return;typeof r=="string"&&(r=[r]);const s=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];r.forEach(c=>{let d=this.options.addPath;typeof this.options.addPath=="function"&&(d=this.options.addPath(c,e));const p=to(d,{lng:c,ns:e});if(p==null){n+=1,o&&n===r.length&&o(a,l);return}this.options.request(this.options,p,s,(u,m)=>{n+=1,a.push(u),l.push(m),n===r.length&&typeof o=="function"&&o(a,l)})})}reload(){const{backendConnector:r,languageUtils:e,logger:t}=this.services,i=r.language;if(i&&i.toLowerCase()==="cimode")return;const o=[],s=n=>{e.toResolveHierarchy(n).forEach(a=>{o.indexOf(a)<0&&o.push(a)})};s(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>s(n)),o.forEach(n=>{this.allOptions.ns.forEach(a=>{r.read(n,a,"read",null,null,(l,c)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&c&&t.log(`loaded namespace ${a} for language ${n}`,c),r.loaded(`${n}|${a}`,l,c)})})})}};fs.type="backend";const hs="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Yn="https://i18n-fastly.ultrafast.io",Wn="https://neo.wordplex.io",Li="uploader";let Te=null;async function Gn(r="en"){return Te?(Te.language!==r&&await Te.changeLanguage(r),{i18n:Te,isNew:!1}):(Te=ce.createInstance(),await Te.use(fs).init({lng:r,fallbackLng:"en",ns:[Li],defaultNS:Li,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{addPath:"",loadPath:`${Yn}/api/export/grid/f2/${hs}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){var s;const i=JSON.parse(e),o=Array.isArray(t)?t[0]:t;return o&&((s=i[o])!=null&&s.__without_namespace)?i[o].__without_namespace:i}}}),{i18n:Te,isNew:!0})}const Xn="sfxUploaderTranslationsMissingKeysEnabled";class Jn{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(Xn)==="true",this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,t,i,o)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,t,i,o))})}handleMissingKey(e,t="",i=Li){if(!this.enabled)return;const o=`${i}:${e}`;this._missingKeys[o]={value:t,ns:i}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${Wn}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${hs}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:t,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:t}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const Zn=new Jn;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn={attribute:!0,type:String,converter:Jt,reflect:!1,hasChanged:ir},ea=(r=Qn,e,t)=>{const{kind:i,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+i)};function O(r){return(e,t)=>typeof t=="object"?ea(r,e,t):((i,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(r){return O({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function or(r,e){return(t,i,o)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(r))??null};return ta(t,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di={ATTRIBUTE:1,CHILD:2,ELEMENT:6},Tt=r=>(...e)=>({_$litDirective$:r,values:e});let pi=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ia}=mn,oo=r=>r,so=()=>document.createComment(""),pt=(r,e,t)=>{var s;const i=r._$AA.parentNode,o=e===void 0?r._$AB:e._$AA;if(t===void 0){const n=i.insertBefore(so(),o),a=i.insertBefore(so(),o);t=new ia(n,a,r,r.options)}else{const n=t._$AB.nextSibling,a=t._$AM,l=a!==r;if(l){let c;(s=t._$AQ)==null||s.call(t,r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==a._$AU&&t._$AP(c)}if(n!==o||l){let c=t._$AA;for(;c!==n;){const d=oo(c).nextSibling;oo(i).insertBefore(c,o),c=d}}}return t},Le=(r,e,t=r)=>(r._$AI(e,t),r),ra={},oa=(r,e=ra)=>r._$AH=e,sa=r=>r._$AH,ki=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=(r,e,t)=>{const i=new Map;for(let o=e;o<=t;o++)i.set(r[o],o);return i},Fi=Tt(class extends pi{constructor(r){if(super(r),r.type!==di.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const o=[],s=[];let n=0;for(const a of r)o[n]=i?i(a,n):n,s[n]=t(a,n),n++;return{values:s,keys:o}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){const o=sa(r),{values:s,keys:n}=this.dt(e,t,i);if(!Array.isArray(o))return this.ut=n,s;const a=this.ut??(this.ut=[]),l=[];let c,d,p=0,u=o.length-1,m=0,g=s.length-1;for(;p<=u&&m<=g;)if(o[p]===null)p++;else if(o[u]===null)u--;else if(a[p]===n[m])l[m]=Le(o[p],s[m]),p++,m++;else if(a[u]===n[g])l[g]=Le(o[u],s[g]),u--,g--;else if(a[p]===n[g])l[g]=Le(o[p],s[g]),pt(r,l[g+1],o[p]),p++,g--;else if(a[u]===n[m])l[m]=Le(o[u],s[m]),pt(r,o[p],o[u]),u--,m++;else if(c===void 0&&(c=no(n,m,g),d=no(a,p,u)),c.has(a[p]))if(c.has(a[u])){const x=d.get(n[m]),$=x!==void 0?o[x]:null;if($===null){const L=pt(r,o[p]);Le(L,s[m]),l[m]=L}else l[m]=Le($,s[m]),pt(r,o[p],$),o[x]=null;m++}else ki(o[u]),u--;else ki(o[p]),p++;for(;m<=g;){const x=pt(r,l[g+1]);Le(x,s[m]),l[m++]=x}for(;p<=u;){const x=o[p++];x!==null&&ki(x)}return this.ut=n,oa(r,l),he}}),Si=r=>r.includes("-")?r:r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class na extends pi{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==di.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return he}update(e,[t]){if(t===this._lastStyles)return he;this._lastStyles=t;const{style:i}=e.element,o=t??{};for(const s of this._appliedProps)(!(s in o)||o[s]==null||o[s]==="")&&(i.removeProperty(Si(s)),this._appliedProps.delete(s));for(const[s,n]of Object.entries(o))n!=null&&n!==""?(i.setProperty(Si(s),n),this._appliedProps.add(s)):this._appliedProps.has(s)&&(i.removeProperty(Si(s)),this._appliedProps.delete(s));return he}}const Q=Tt(na);function aa(r,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,r);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const o=(l=(a=r.response)==null?void 0:a.file)==null?void 0:l.uuid;return o?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(o))}`:null}class la{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function J(r,e,t){const i=r.getState().files,o=i.get(e);if(!o)return;const s=new Map(i);s.set(e,{...o,...t}),r.setState({files:s})}function Ve(r,e){const t=new Map(r.getState().files);t.set(e.id,e),r.setState({files:t})}function ao(r,e){const t=r.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),r.setState({files:i})}function ca(){return new la({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:(r,e,t)=>{const i=(o,s)=>o.replace(/\{\{(\w+)\}\}/g,(n,a)=>String(s[a]??""));if(typeof e=="string")return i(e,t??{});if(typeof e=="object"&&e!==null){const o=e,s=o.count;if(s!==void 0){const n=String((s===1?o.defaultValue_one:o.defaultValue_other)??o.defaultValue??r);return i(n,o)}return i(String(o.defaultValue??r),o)}return r}})}class da{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const pa="SAME_ASSET_EXISTS_SKIP_UPLOAD",ua="ERROR_SHA1_CONFLICT";function Lt(r){return(r==null?void 0:r.code)===pa||(r==null?void 0:r.code)===ua}function sr(r,e){return{...r,status:"success",file:r.file??{uuid:r.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}const fa=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function nr(r){return r?r.ref!=null&&r.ref!==""||r.position!=null:!1}function ar(r){const e={};return(r==null?void 0:r.ref)!=null&&r.ref!==""&&(e.ref=r.ref),(r==null?void 0:r.position)!=null&&(e.position=r.position),e}function lo(r,e){const t={...r??{}};for(const i of Object.keys(e)){const o=e[i];o===void 0?delete t[i]:t[i]=o}return t}function ha(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function ga(r,e){const t=new XMLHttpRequest;let i=!1;const o=ha(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):Lt(n)?e.onComplete(sr(n,r)):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const s=new FormData;if(r.file){const n={name:r.name,type:r.type};s.append("info[files[]]",JSON.stringify(n)),Object.keys(r.meta).length>0&&s.append("meta[files[]]",JSON.stringify(r.meta)),r.tags.length>0&&s.append("tags[files[]]",JSON.stringify(r.tags)),nr(r.product)&&s.append("product[files[]]",JSON.stringify(ar(r.product))),s.append("files[]",r.file,r.name)}return t.send(s),{abort(){i=!0,t.abort()}}}function ui(r){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":r}}function Oe(r){return r.replace(/\/+$/,"")}const ma={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Ft(r){return ma[r]??r}function op(r,e){const t=Oe(r),i=btoa(JSON.stringify({origin:window.location.origin})),o=Ft(e);return`${t}/${o}/connect?state=${encodeURIComponent(i)}`}async function xa(r,e,t,i="",o){const s=Oe(r),n=i?`/${i}`:"",a=Ft(e),l=await fetch(`${s}/${a}/list${n}`,{method:"GET",headers:ui(t),credentials:"same-origin",signal:o});if(l.status===401)throw new lr;if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function va(r,e,t,i){const o=Oe(r),s=await fetch(`${o}/${t}`,{method:"GET",headers:ui(e),credentials:"same-origin",signal:i});if(s.status===401)throw new lr;if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${s.status})`)}return s.json()}async function sp(r,e,t,i,o,s){const n=[];async function a(l,c){let d=null,p=!0;do{if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");const u=p?await xa(r,e,t,l,s):await va(r,t,d,s);p=!1,d=u.nextPagePath;for(const m of u.items){if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");if(m.isFolder){const g=c?`${c}/${m.name}`:m.name;await a(m.requestPath,g)}else n.push({...m,relativeFolder:c})}}while(d)}return await a(i,o),n}async function np(r,e,t,i){const o=Oe(r),s=Ft(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${o}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function ba(r,e,t,i,o,s=!1){const n=Oe(r),a=Ft(e),l=s?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,c=s?{Accept:"application/json","Content-Type":"application/json"}:ui(t),d=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(d.status===401)throw new lr;if(!d.ok){const p=await d.json().catch(()=>null);throw new Error((p==null?void 0:p.message)||`Companion upload failed (HTTP ${d.status})`)}return d.json()}async function ya(r,e,t){const i=Oe(r),o=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!o.ok){const s=await o.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Could not fetch URL metadata (HTTP ${o.status})`)}return o.json()}async function wa(r,e,t,i){const o=Oe(r),s=await fetch(`${o}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${s.status})`)}return s.json()}async function ap(r,e,t){const i=Oe(r),o=Ft(e),s=await fetch(`${i}/${o}/logout`,{method:"GET",headers:ui(t),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function _a(r){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r))==null?void 0:o[1])??r;return`${/^https:\/\//i.test(r)?"wss":"ws"}://${t}`}class lr extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function gs(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function ms(r,e){const t={name:r.name,type:r.type,"filerobot-folder":e};return r.meta&&Object.keys(r.meta).length>0&&(t.meta=JSON.stringify(r.meta)),r.tags&&r.tags.length>0&&(t.tags=JSON.stringify(r.tags)),nr(r.product)&&(t.product=JSON.stringify(ar(r.product))),t}function xs(r){const t=`${_a(r.companionUrl)}/api/${r.token}`;let i;try{i=new WebSocket(t)}catch{return r.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const s=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,c;if(!o)try{const d=JSON.parse(n.data);switch(d.action){case"progress":{const p=d.payload,u=p.bytesUploaded??0,m=p.bytesTotal??(r.expectedSize||1);r.onProgress(u,m);break}case"success":{const p=d.payload;if(s(),i.close(),(a=p.response)!=null&&a.responseText)try{const u=JSON.parse(p.response.responseText);if(u.status==="success"){r.onComplete(u);return}if(Lt(u)){r.onComplete(sr(u,r.uploadFile));return}r.onError(new Error(u.msg||"Upload failed"));return}catch{}r.onError(new Error("Upload completed but no valid response received"));break}case"error":{const p=d.payload;s(),i.close();let u=((l=p.error)==null?void 0:l.message)||"Upload failed";if((c=p.response)!=null&&c.responseText)try{const m=JSON.parse(p.response.responseText);u=m.hint||m.msg||m.message||u}catch{}r.onError(new Error(u));break}}}catch{}},i.onerror=()=>{o||(s(),r.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(s(),r.onError(new Error("Upload progress connection closed unexpectedly")))},i}function vs(r){if(r){r.onmessage=null,r.onerror=null,r.onclose=null;try{r.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}r.close()}}function ka(r,e){const t=r.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,o=null;const s=gs(e.apiBase,e.folder,e.extraParams),n=ms(r,e.folder),a=!t.token;return ba(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:n},a).then(l=>{i||(o=xs({companionUrl:t.companionUrl,token:l.token,uploadFile:r,expectedSize:t.size,onProgress:(c,d)=>{i||e.onProgress(c,d)},onComplete:c=>{i||e.onComplete(c)},onError:c=>{i||e.onError(c)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,vs(o),o=null}}}function Sa(r,e){const t=r.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,o=null;const s=new AbortController,n=gs(e.apiBase,e.folder,e.extraParams);return ya(e.companionUrl,t,s.signal).then(a=>{var c;if(i)return null;(c=e.onMeta)==null||c.call(e,{name:a.name,type:a.type,size:a.size});const l=ms(r,e.folder);return a.name&&(l.name=a.name),a.type&&(l.type=a.type),wa(e.companionUrl,t,{fileId:r.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},s.signal).then(d=>({result:d,size:a.size}))}).then(a=>{i||!a||(o=xs({companionUrl:e.companionUrl,token:a.result.token,uploadFile:r,expectedSize:a.size,onProgress:(l,c)=>{i||e.onProgress(l,c)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,s.abort(),vs(o),o=null}}}function Ii(r){"@babel/helpers - typeof";return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ii(r)}function $a(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function Ca(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ea(r,e,t){return e=Ct(e),Pa(r,cr()?Reflect.construct(e,t||[],Ct(r).constructor):e.apply(r,t))}function Pa(r,e){if(e&&(Ii(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ua(r)}function Ua(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ra(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&$t(r,e)}function zi(r){var e=typeof Map=="function"?new Map:void 0;return zi=function(i){if(i===null||!Aa(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return Oa(i,arguments,Ct(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),$t(o,i)},zi(r)}function Oa(r,e,t){if(cr())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(r.bind.apply(r,i));return t&&$t(o,t.prototype),o}function cr(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(cr=function(){return!!r})()}function Aa(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function $t(r,e){return $t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},$t(r,e)}function Ct(r){return Ct=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ct(r)}var ft=(function(r){function e(t){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Ca(this,e),i=Ea(this,e,[t]),i.originalRequest=s,i.originalResponse=n,i.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),s!=null){var a=s.getHeader("X-Request-ID")||"n/a",l=s.getMethod(),c=s.getURL(),d=n?n.getStatus():"n/a",p=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(c,", response code: ").concat(d,", response text: ").concat(p,", request id: ").concat(a,")")}return i.message=t,i}return Ra(e,r),$a(e)})(zi(Error));function Et(r){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(r)}function Ta(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function La(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ia(i.key),i)}}function Fa(r,e,t){return e&&La(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ia(r){var e=za(r,"string");return Et(e)=="symbol"?e:e+""}function za(r,e){if(Et(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Et(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Da=(function(){function r(){Ta(this,r)}return Fa(r,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const bs="3.7.8",Ma=bs,at=typeof Buffer=="function",co=typeof TextDecoder=="function"?new TextDecoder:void 0,po=typeof TextEncoder=="function"?new TextEncoder:void 0,ja="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ht=Array.prototype.slice.call(ja),Nt=(r=>{let e={};return r.forEach((t,i)=>e[t]=i),e})(ht),Ba=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,re=String.fromCharCode.bind(String),uo=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):r=>new Uint8Array(Array.prototype.slice.call(r,0)),ys=r=>r.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),ws=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),_s=r=>{let e,t,i,o,s="";const n=r.length%3;for(let a=0;a<r.length;){if((t=r.charCodeAt(a++))>255||(i=r.charCodeAt(a++))>255||(o=r.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|o,s+=ht[e>>18&63]+ht[e>>12&63]+ht[e>>6&63]+ht[e&63]}return n?s.slice(0,n-3)+"===".substring(n):s},dr=typeof btoa=="function"?r=>btoa(r):at?r=>Buffer.from(r,"binary").toString("base64"):_s,Di=at?r=>Buffer.from(r).toString("base64"):r=>{let t=[];for(let i=0,o=r.length;i<o;i+=4096)t.push(re.apply(null,r.subarray(i,i+4096)));return dr(t.join(""))},Kt=(r,e=!1)=>e?ys(Di(r)):Di(r),Na=r=>{if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?re(192|e>>>6)+re(128|e&63):re(224|e>>>12&15)+re(128|e>>>6&63)+re(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return re(240|e>>>18&7)+re(128|e>>>12&63)+re(128|e>>>6&63)+re(128|e&63)}},Ha=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ks=r=>r.replace(Ha,Na),fo=at?r=>Buffer.from(r,"utf8").toString("base64"):po?r=>Di(po.encode(r)):r=>dr(ks(r)),et=(r,e=!1)=>e?ys(fo(r)):fo(r),ho=r=>et(r,!0),qa=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Va=r=>{switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return re((t>>>10)+55296)+re((t&1023)+56320);case 3:return re((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return re((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},Ss=r=>r.replace(qa,Va),$s=r=>{if(r=r.replace(/\s+/g,""),!Ba.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let e,t,i,o=[];for(let s=0;s<r.length;)e=Nt[r.charAt(s++)]<<18|Nt[r.charAt(s++)]<<12|(t=Nt[r.charAt(s++)])<<6|(i=Nt[r.charAt(s++)]),t===64?o.push(re(e>>16&255)):i===64?o.push(re(e>>16&255,e>>8&255)):o.push(re(e>>16&255,e>>8&255,e&255));return o.join("")},pr=typeof atob=="function"?r=>atob(ws(r)):at?r=>Buffer.from(r,"base64").toString("binary"):$s,Cs=at?r=>uo(Buffer.from(r,"base64")):r=>uo(pr(r).split("").map(e=>e.charCodeAt(0))),Es=r=>Cs(Ps(r)),Ka=at?r=>Buffer.from(r,"base64").toString("utf8"):co?r=>co.decode(Cs(r)):r=>Ss(pr(r)),Ps=r=>ws(r.replace(/[-_]/g,e=>e=="-"?"+":"/")),Mi=r=>Ka(Ps(r)),Ya=r=>{if(typeof r!="string")return!1;const e=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Us=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),Rs=function(){const r=(e,t)=>Object.defineProperty(String.prototype,e,Us(t));r("fromBase64",function(){return Mi(this)}),r("toBase64",function(e){return et(this,e)}),r("toBase64URI",function(){return et(this,!0)}),r("toBase64URL",function(){return et(this,!0)}),r("toUint8Array",function(){return Es(this)})},Os=function(){const r=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Us(t));r("toBase64",function(e){return Kt(this,e)}),r("toBase64URI",function(){return Kt(this,!0)}),r("toBase64URL",function(){return Kt(this,!0)})},Wa=()=>{Rs(),Os()},Ga={version:bs,VERSION:Ma,atob:pr,atobPolyfill:$s,btoa:dr,btoaPolyfill:_s,fromBase64:Mi,toBase64:et,encode:et,encodeURI:ho,encodeURL:ho,utob:ks,btou:Ss,decode:Mi,isValid:Ya,fromUint8Array:Kt,toUint8Array:Es,extendString:Rs,extendUint8Array:Os,extendBuiltins:Wa};var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xa(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $i,mo;function Ja(){return mo||(mo=1,$i=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),$i}var Ht={},xo;function Za(){if(xo)return Ht;xo=1;var r=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function o(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},c;c=a.exec(n);){var d=t(c[1]),p=t(c[2]);d===null||p===null||d in l||(l[d]=p)}return l}function s(n,a){a=a||"";var l=[],c,d;typeof a!="string"&&(a="?");for(d in n)if(r.call(n,d)){if(c=n[d],!c&&(c===null||c===e||isNaN(c))&&(c=""),d=i(d),c=i(c),d===null||c===null)continue;l.push(d+"="+c)}return l.length?a+l.join("&"):""}return Ht.stringify=s,Ht.parse=o,Ht}var Ci,vo;function Qa(){if(vo)return Ci;vo=1;var r=Ja(),e=Za(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(k){return(k||"").toString().replace(t,"")}var c=[["#","hash"],["?","query"],function(_,w){return u(w.protocol)?_.replace(/\\/g,"/"):_},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function p(k){var _;typeof window<"u"?_=window:typeof go<"u"?_=go:typeof self<"u"?_=self:_={};var w=_.location||{};k=k||w;var b={},U=typeof k,P;if(k.protocol==="blob:")b=new x(unescape(k.pathname),{});else if(U==="string"){b=new x(k,{});for(P in d)delete b[P]}else if(U==="object"){for(P in k)P in d||(b[P]=k[P]);b.slashes===void 0&&(b.slashes=o.test(k.href))}return b}function u(k){return k==="file:"||k==="ftp:"||k==="http:"||k==="https:"||k==="ws:"||k==="wss:"}function m(k,_){k=l(k),k=k.replace(i,""),_=_||{};var w=n.exec(k),b=w[1]?w[1].toLowerCase():"",U=!!w[2],P=!!w[3],z=0,F;return U?P?(F=w[2]+w[3]+w[4],z=w[2].length+w[3].length):(F=w[2]+w[4],z=w[2].length):P?(F=w[3]+w[4],z=w[3].length):F=w[4],b==="file:"?z>=2&&(F=F.slice(2)):u(b)?F=w[4]:b?U&&(F=F.slice(2)):z>=2&&u(_.protocol)&&(F=w[4]),{protocol:b,slashes:U||u(b),slashesCount:z,rest:F}}function g(k,_){if(k==="")return _;for(var w=(_||"/").split("/").slice(0,-1).concat(k.split("/")),b=w.length,U=w[b-1],P=!1,z=0;b--;)w[b]==="."?w.splice(b,1):w[b]===".."?(w.splice(b,1),z++):z&&(b===0&&(P=!0),w.splice(b,1),z--);return P&&w.unshift(""),(U==="."||U==="..")&&w.push(""),w.join("/")}function x(k,_,w){if(k=l(k),k=k.replace(i,""),!(this instanceof x))return new x(k,_,w);var b,U,P,z,F,T,Z=c.slice(),ue=typeof _,A=this,W=0;for(ue!=="object"&&ue!=="string"&&(w=_,_=null),w&&typeof w!="function"&&(w=e.parse),_=p(_),U=m(k||"",_),b=!U.protocol&&!U.slashes,A.slashes=U.slashes||b&&_.slashes,A.protocol=U.protocol||_.protocol||"",k=U.rest,(U.protocol==="file:"&&(U.slashesCount!==2||a.test(k))||!U.slashes&&(U.protocol||U.slashesCount<2||!u(A.protocol)))&&(Z[3]=[/(.*)/,"pathname"]);W<Z.length;W++){if(z=Z[W],typeof z=="function"){k=z(k,A);continue}P=z[0],T=z[1],P!==P?A[T]=k:typeof P=="string"?(F=P==="@"?k.lastIndexOf(P):k.indexOf(P),~F&&(typeof z[2]=="number"?(A[T]=k.slice(0,F),k=k.slice(F+z[2])):(A[T]=k.slice(F),k=k.slice(0,F)))):(F=P.exec(k))&&(A[T]=F[1],k=k.slice(0,F.index)),A[T]=A[T]||b&&z[3]&&_[T]||"",z[4]&&(A[T]=A[T].toLowerCase())}w&&(A.query=w(A.query)),b&&_.slashes&&A.pathname.charAt(0)!=="/"&&(A.pathname!==""||_.pathname!=="")&&(A.pathname=g(A.pathname,_.pathname)),A.pathname.charAt(0)!=="/"&&u(A.protocol)&&(A.pathname="/"+A.pathname),r(A.port,A.protocol)||(A.host=A.hostname,A.port=""),A.username=A.password="",A.auth&&(F=A.auth.indexOf(":"),~F?(A.username=A.auth.slice(0,F),A.username=encodeURIComponent(decodeURIComponent(A.username)),A.password=A.auth.slice(F+1),A.password=encodeURIComponent(decodeURIComponent(A.password))):A.username=encodeURIComponent(decodeURIComponent(A.auth)),A.auth=A.password?A.username+":"+A.password:A.username),A.origin=A.protocol!=="file:"&&u(A.protocol)&&A.host?A.protocol+"//"+A.host:"null",A.href=A.toString()}function $(k,_,w){var b=this;switch(k){case"query":typeof _=="string"&&_.length&&(_=(w||e.parse)(_)),b[k]=_;break;case"port":b[k]=_,r(_,b.protocol)?_&&(b.host=b.hostname+":"+_):(b.host=b.hostname,b[k]="");break;case"hostname":b[k]=_,b.port&&(_+=":"+b.port),b.host=_;break;case"host":b[k]=_,s.test(_)?(_=_.split(":"),b.port=_.pop(),b.hostname=_.join(":")):(b.hostname=_,b.port="");break;case"protocol":b.protocol=_.toLowerCase(),b.slashes=!w;break;case"pathname":case"hash":if(_){var U=k==="pathname"?"/":"#";b[k]=_.charAt(0)!==U?U+_:_}else b[k]=_;break;case"username":case"password":b[k]=encodeURIComponent(_);break;case"auth":var P=_.indexOf(":");~P?(b.username=_.slice(0,P),b.username=encodeURIComponent(decodeURIComponent(b.username)),b.password=_.slice(P+1),b.password=encodeURIComponent(decodeURIComponent(b.password))):b.username=encodeURIComponent(decodeURIComponent(_))}for(var z=0;z<c.length;z++){var F=c[z];F[4]&&(b[F[1]]=b[F[1]].toLowerCase())}return b.auth=b.password?b.username+":"+b.password:b.username,b.origin=b.protocol!=="file:"&&u(b.protocol)&&b.host?b.protocol+"//"+b.host:"null",b.href=b.toString(),b}function L(k){(!k||typeof k!="function")&&(k=e.stringify);var _,w=this,b=w.host,U=w.protocol;U&&U.charAt(U.length-1)!==":"&&(U+=":");var P=U+(w.protocol&&w.slashes||u(w.protocol)?"//":"");return w.username?(P+=w.username,w.password&&(P+=":"+w.password),P+="@"):w.password?(P+=":"+w.password,P+="@"):w.protocol!=="file:"&&u(w.protocol)&&!b&&w.pathname!=="/"&&(P+="@"),(b[b.length-1]===":"||s.test(w.hostname)&&!w.port)&&(b+=":"),P+=b+w.pathname,_=typeof w.query=="object"?k(w.query):w.query,_&&(P+=_.charAt(0)!=="?"?"?"+_:_),w.hash&&(P+=w.hash),P}return x.prototype={set:$,toString:L},x.extractProtocol=m,x.location=p,x.trimLeft=l,x.qs=e,Ci=x,Ci}var el=Qa();const tl=Xa(el);function il(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function ji(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ji=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(y,h,v){y[h]=v.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function c(y,h,v){return Object.defineProperty(y,h,{value:v,enumerable:!0,configurable:!0,writable:!0}),y[h]}try{c({},"")}catch{c=function(v,E,R){return v[E]=R}}function d(y,h,v,E){var R=h&&h.prototype instanceof L?h:L,C=Object.create(R.prototype),D=new W(E||[]);return o(C,"_invoke",{value:T(y,v,D)}),C}function p(y,h,v){try{return{type:"normal",arg:y.call(h,v)}}catch(E){return{type:"throw",arg:E}}}e.wrap=d;var u="suspendedStart",m="suspendedYield",g="executing",x="completed",$={};function L(){}function k(){}function _(){}var w={};c(w,n,function(){return this});var b=Object.getPrototypeOf,U=b&&b(b(xe([])));U&&U!==t&&i.call(U,n)&&(w=U);var P=_.prototype=L.prototype=Object.create(w);function z(y){["next","throw","return"].forEach(function(h){c(y,h,function(v){return this._invoke(h,v)})})}function F(y,h){function v(R,C,D,H){var q=p(y[R],y,C);if(q.type!=="throw"){var te=q.arg,ie=te.value;return ie&&Ne(ie)=="object"&&i.call(ie,"__await")?h.resolve(ie.__await).then(function(ae){v("next",ae,D,H)},function(ae){v("throw",ae,D,H)}):h.resolve(ie).then(function(ae){te.value=ae,D(te)},function(ae){return v("throw",ae,D,H)})}H(q.arg)}var E;o(this,"_invoke",{value:function(C,D){function H(){return new h(function(q,te){v(C,D,q,te)})}return E=E?E.then(H,H):H()}})}function T(y,h,v){var E=u;return function(R,C){if(E===g)throw Error("Generator is already running");if(E===x){if(R==="throw")throw C;return{value:r,done:!0}}for(v.method=R,v.arg=C;;){var D=v.delegate;if(D){var H=Z(D,v);if(H){if(H===$)continue;return H}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(E===u)throw E=x,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);E=g;var q=p(y,h,v);if(q.type==="normal"){if(E=v.done?x:m,q.arg===$)continue;return{value:q.arg,done:v.done}}q.type==="throw"&&(E=x,v.method="throw",v.arg=q.arg)}}}function Z(y,h){var v=h.method,E=y.iterator[v];if(E===r)return h.delegate=null,v==="throw"&&y.iterator.return&&(h.method="return",h.arg=r,Z(y,h),h.method==="throw")||v!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+v+"' method")),$;var R=p(E,y.iterator,h.arg);if(R.type==="throw")return h.method="throw",h.arg=R.arg,h.delegate=null,$;var C=R.arg;return C?C.done?(h[y.resultName]=C.value,h.next=y.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,$):C:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,$)}function ue(y){var h={tryLoc:y[0]};1 in y&&(h.catchLoc=y[1]),2 in y&&(h.finallyLoc=y[2],h.afterLoc=y[3]),this.tryEntries.push(h)}function A(y){var h=y.completion||{};h.type="normal",delete h.arg,y.completion=h}function W(y){this.tryEntries=[{tryLoc:"root"}],y.forEach(ue,this),this.reset(!0)}function xe(y){if(y||y===""){var h=y[n];if(h)return h.call(y);if(typeof y.next=="function")return y;if(!isNaN(y.length)){var v=-1,E=function R(){for(;++v<y.length;)if(i.call(y,v))return R.value=y[v],R.done=!1,R;return R.value=r,R.done=!0,R};return E.next=E}}throw new TypeError(Ne(y)+" is not iterable")}return k.prototype=_,o(P,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:k,configurable:!0}),k.displayName=c(_,l,"GeneratorFunction"),e.isGeneratorFunction=function(y){var h=typeof y=="function"&&y.constructor;return!!h&&(h===k||(h.displayName||h.name)==="GeneratorFunction")},e.mark=function(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,_):(y.__proto__=_,c(y,l,"GeneratorFunction")),y.prototype=Object.create(P),y},e.awrap=function(y){return{__await:y}},z(F.prototype),c(F.prototype,a,function(){return this}),e.AsyncIterator=F,e.async=function(y,h,v,E,R){R===void 0&&(R=Promise);var C=new F(d(y,h,v,E),R);return e.isGeneratorFunction(h)?C:C.next().then(function(D){return D.done?D.value:C.next()})},z(P),c(P,l,"Generator"),c(P,n,function(){return this}),c(P,"toString",function(){return"[object Generator]"}),e.keys=function(y){var h=Object(y),v=[];for(var E in h)v.push(E);return v.reverse(),function R(){for(;v.length;){var C=v.pop();if(C in h)return R.value=C,R.done=!1,R}return R.done=!0,R}},e.values=xe,W.prototype={constructor:W,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!h)for(var v in this)v.charAt(0)==="t"&&i.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=r)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var v=this;function E(te,ie){return D.type="throw",D.arg=h,v.next=te,ie&&(v.method="next",v.arg=r),!!ie}for(var R=this.tryEntries.length-1;R>=0;--R){var C=this.tryEntries[R],D=C.completion;if(C.tryLoc==="root")return E("end");if(C.tryLoc<=this.prev){var H=i.call(C,"catchLoc"),q=i.call(C,"finallyLoc");if(H&&q){if(this.prev<C.catchLoc)return E(C.catchLoc,!0);if(this.prev<C.finallyLoc)return E(C.finallyLoc)}else if(H){if(this.prev<C.catchLoc)return E(C.catchLoc,!0)}else{if(!q)throw Error("try statement without catch or finally");if(this.prev<C.finallyLoc)return E(C.finallyLoc)}}}},abrupt:function(h,v){for(var E=this.tryEntries.length-1;E>=0;--E){var R=this.tryEntries[E];if(R.tryLoc<=this.prev&&i.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var C=R;break}}C&&(h==="break"||h==="continue")&&C.tryLoc<=v&&v<=C.finallyLoc&&(C=null);var D=C?C.completion:{};return D.type=h,D.arg=v,C?(this.method="next",this.next=C.finallyLoc,$):this.complete(D)},complete:function(h,v){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&v&&(this.next=v),$},finish:function(h){for(var v=this.tryEntries.length-1;v>=0;--v){var E=this.tryEntries[v];if(E.finallyLoc===h)return this.complete(E.completion,E.afterLoc),A(E),$}},catch:function(h){for(var v=this.tryEntries.length-1;v>=0;--v){var E=this.tryEntries[v];if(E.tryLoc===h){var R=E.completion;if(R.type==="throw"){var C=R.arg;A(E)}return C}}throw Error("illegal catch attempt")},delegateYield:function(h,v,E){return this.delegate={iterator:xe(h),resultName:v,nextLoc:E},this.method==="next"&&(this.arg=r),$}},e}function bo(r,e,t,i,o,s,n){try{var a=r[s](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,o)}function rl(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(l){bo(s,i,o,n,a,"next",l)}function a(l){bo(s,i,o,n,a,"throw",l)}n(void 0)})}}function As(r,e){return nl(r)||sl(r,e)||Ts(r,e)||ol()}function ol(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sl(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,o,s,n,a=[],l=!0,c=!1;try{if(s=(t=t.call(r)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(c)throw o}}return a}}function nl(r){if(Array.isArray(r))return r}function Ne(r){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(r)}function al(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=Ts(r))||e){t&&(r=t);var i=0,o=function(){};return{s:o,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,n=!1,a;return{s:function(){t=t.call(r)},n:function(){var c=t.next();return s=c.done,c},e:function(c){n=!0,a=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function Ts(r,e){if(r){if(typeof r=="string")return yo(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yo(r,e)}}function yo(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function wo(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Ke(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wo(Object(t),!0).forEach(function(i){ll(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):wo(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function ll(r,e,t){return e=Ls(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function cl(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function _o(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ls(i.key),i)}}function dl(r,e,t){return e&&_o(r.prototype,e),t&&_o(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ls(r){var e=pl(r,"string");return Ne(e)=="symbol"?e:e+""}function pl(r,e){if(Ne(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ne(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Yt="tus-v1",Wt="ietf-draft-03",gt="ietf-draft-05",ul={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Fs,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Yt},ri=(function(){function r(e,t){cl(this,r),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return dl(r,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Yt,Wt,gt].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var s=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];s<n.length;s++){var a=n[s];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,s=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:hl(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(d,p){d.uploadUrl=i._parallelUploadUrls[p]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(d,p){var u=0;return i._source.slice(d.start,d.end).then(function(m){var g=m.value;return new Promise(function(x,$){var L=Ke(Ke({},i.options),{},{uploadUrl:d.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Ke(Ke({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:x,onError:$,onProgress:function(w){s=s-u+w,u=w,i._emitProgress(s,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[p]=k.url,i._parallelUploadUrls.filter(function(w){return!!w}).length===a.length&&i._saveUploadInUrlStorage()}}),k=new r(g,L);k.start(),i._parallelUploads.push(k)})})}),c;Promise.all(l).then(function(){c=i._openRequest("POST",i.options.endpoint),c.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var d=ko(i.options.metadata);return d!==""&&c.setHeader("Upload-Metadata",d),i._sendRequest(c,null)}).then(function(d){if(!Je(d.getStatus(),200)){i._emitHttpError(c,d,"tus: unexpected response while creating upload");return}var p=d.getHeader("Location");if(p==null){i._emitHttpError(c,d,"tus: invalid or missing Location header");return}i.url=Eo(i.options.endpoint,p),"Created upload at ".concat(i.url),i._emitSuccess(d)}).catch(function(d){i._emitError(d)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var o=al(this._parallelUploads),s;try{for(o.s();!(s=o.n()).done;){var n=s.value;n.abort(t)}}catch(a){o.e(a)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():r.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,o,s){this._emitError(new ft(o,s,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),Co(t,this._retryAttempt,this.options)){var s=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},s);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=ko(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var s;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,s=this._addChunkToRequest(i)):((this.options.protocol===Wt||this.options.protocol===gt)&&i.setHeader("Upload-Complete","?0"),s=this._sendRequest(i,null)),s.then(function(n){if(!Je(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=Eo(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(s){var n=s.getStatus();if(!Je(n,200)){if(n===423){t._emitHttpError(i,s,"tus: upload is currently locked; retry later");return}if(Je(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,s,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(s.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,s,"tus: invalid or missing offset value");return}var l=Number.parseInt(s.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===Yt){t._emitHttpError(i,s,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(s);return}t._offset=a,t._performUpload()})}).catch(function(s){t._emitHttpError(i,null,"tus: failed to resume upload",s)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(s){if(!Je(s.getStatus(),200)){t._emitHttpError(i,s,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,s)}).catch(function(s){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),s)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,o=this._offset,s=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(o+n,i._size)}),this.options.protocol===Yt?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===gt&&t.setHeader("Content-Type","application/partial-upload"),(s===Number.POSITIVE_INFINITY||s>this._size)&&!this.options.uploadLengthDeferred&&(s=this._size),this._source.slice(o,s).then(function(n){var a=n.value,l=n.done,c=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+c,t.setHeader("Upload-Length","".concat(i._size)));var d=i._offset+c;return!i.options.uploadLengthDeferred&&l&&d!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(d," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===Wt||i.options.protocol===gt)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var o=So(t,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return $o(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=So("DELETE",t,i);return $o(o,null,i).then(function(s){if(s.getStatus()!==204)throw new ft("tus: unexpected response while terminating upload",null,o,s)}).catch(function(s){if(s instanceof ft||(s=new ft("tus: failed to terminate upload",s,o,null)),!Co(s,0,i))throw s;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Ke(Ke({},i),{},{retryDelays:a});return new Promise(function(c){return setTimeout(c,n)}).then(function(){return r.terminate(t,l)})})}}])})();function ko(r){return Object.entries(r).map(function(e){var t=As(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(Ga.encode(String(o)))}).join(",")}function Je(r,e){return r>=e&&r<e+100}function So(r,e,t){var i=t.httpStack.createRequest(r,e);t.protocol===Wt?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===gt?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},s=0,n=Object.entries(o);s<n.length;s++){var a=As(n[s],2),l=a[0],c=a[1];i.setHeader(l,c)}if(t.addRequestId){var d=il();i.setHeader("X-Request-ID",d)}return i}function $o(r,e,t){return Bi.apply(this,arguments)}function Bi(){return Bi=rl(ji().mark(function r(e,t,i){var o;return ji().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(o=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,o);case 9:return n.abrupt("return",o);case 10:case"end":return n.stop()}},r)})),Bi.apply(this,arguments)}function fl(){var r=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(r=!1),r}function Co(r,e,t){return t.retryDelays==null||e>=t.retryDelays.length||r.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(r,e,t):Fs(r)}function Fs(r){var e=r.originalResponse?r.originalResponse.getStatus():0;return(!Je(e,400)||e===409||e===423)&&fl()}function Eo(r,e){return new tl(e,r).toString()}function hl(r,e){for(var t=Math.floor(r/e),i=[],o=0;o<e;o++)i.push({start:t*o,end:t*(o+1)});return i[e-1].end=r,i}ri.defaultOptions=ul;var Is=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function gl(r){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var o=i.response;e(o)},i.onerror=function(o){t(o)},i.open("GET",r),i.send()})}var ml=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function xl(r){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var o=new Uint8Array(i.result);e({value:o})},i.onerror=function(o){t(o)},i.readAsArrayBuffer(r)})}function Pt(r){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pt(r)}function vl(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function bl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,wl(i.key),i)}}function yl(r,e,t){return e&&bl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function wl(r){var e=_l(r,"string");return Pt(e)=="symbol"?e:e+""}function _l(r,e){if(Pt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Pt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Po=(function(){function r(e){vl(this,r),this._file=e,this.size=e.size}return yl(r,[{key:"slice",value:function(t,i){if(ml())return xl(this._file.slice(t,i));var o=this._file.slice(t,i),s=i>=this.size;return Promise.resolve({value:o,done:s})}},{key:"close",value:function(){}}])})();function Ut(r){"@babel/helpers - typeof";return Ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ut(r)}function kl(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Sl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Cl(i.key),i)}}function $l(r,e,t){return e&&Sl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Cl(r){var e=El(r,"string");return Ut(e)=="symbol"?e:e+""}function El(r,e){if(Ut(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ut(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function Uo(r){return r===void 0?0:r.size!==void 0?r.size:r.length}function Pl(r,e){if(r.concat)return r.concat(e);if(r instanceof Blob)return new Blob([r,e],{type:r.type});if(r.set){var t=new r.constructor(r.length+e.length);return t.set(r),t.set(e,r.length),t}throw new Error("Unknown data type")}var Ul=(function(){function r(e){kl(this,r),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return $l(r,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var o=this,s=i<=this._bufferOffset+Uo(this._buffer);if(this._done||s){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var c=l.value,d=l.done;return d?o._done=!0:o._buffer===void 0?o._buffer=c:o._buffer=Pl(o._buffer,c),o._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=Uo(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function He(r){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(r)}function Ni(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Ni=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(y,h,v){y[h]=v.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function c(y,h,v){return Object.defineProperty(y,h,{value:v,enumerable:!0,configurable:!0,writable:!0}),y[h]}try{c({},"")}catch{c=function(v,E,R){return v[E]=R}}function d(y,h,v,E){var R=h&&h.prototype instanceof L?h:L,C=Object.create(R.prototype),D=new W(E||[]);return o(C,"_invoke",{value:T(y,v,D)}),C}function p(y,h,v){try{return{type:"normal",arg:y.call(h,v)}}catch(E){return{type:"throw",arg:E}}}e.wrap=d;var u="suspendedStart",m="suspendedYield",g="executing",x="completed",$={};function L(){}function k(){}function _(){}var w={};c(w,n,function(){return this});var b=Object.getPrototypeOf,U=b&&b(b(xe([])));U&&U!==t&&i.call(U,n)&&(w=U);var P=_.prototype=L.prototype=Object.create(w);function z(y){["next","throw","return"].forEach(function(h){c(y,h,function(v){return this._invoke(h,v)})})}function F(y,h){function v(R,C,D,H){var q=p(y[R],y,C);if(q.type!=="throw"){var te=q.arg,ie=te.value;return ie&&He(ie)=="object"&&i.call(ie,"__await")?h.resolve(ie.__await).then(function(ae){v("next",ae,D,H)},function(ae){v("throw",ae,D,H)}):h.resolve(ie).then(function(ae){te.value=ae,D(te)},function(ae){return v("throw",ae,D,H)})}H(q.arg)}var E;o(this,"_invoke",{value:function(C,D){function H(){return new h(function(q,te){v(C,D,q,te)})}return E=E?E.then(H,H):H()}})}function T(y,h,v){var E=u;return function(R,C){if(E===g)throw Error("Generator is already running");if(E===x){if(R==="throw")throw C;return{value:r,done:!0}}for(v.method=R,v.arg=C;;){var D=v.delegate;if(D){var H=Z(D,v);if(H){if(H===$)continue;return H}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(E===u)throw E=x,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);E=g;var q=p(y,h,v);if(q.type==="normal"){if(E=v.done?x:m,q.arg===$)continue;return{value:q.arg,done:v.done}}q.type==="throw"&&(E=x,v.method="throw",v.arg=q.arg)}}}function Z(y,h){var v=h.method,E=y.iterator[v];if(E===r)return h.delegate=null,v==="throw"&&y.iterator.return&&(h.method="return",h.arg=r,Z(y,h),h.method==="throw")||v!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+v+"' method")),$;var R=p(E,y.iterator,h.arg);if(R.type==="throw")return h.method="throw",h.arg=R.arg,h.delegate=null,$;var C=R.arg;return C?C.done?(h[y.resultName]=C.value,h.next=y.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,$):C:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,$)}function ue(y){var h={tryLoc:y[0]};1 in y&&(h.catchLoc=y[1]),2 in y&&(h.finallyLoc=y[2],h.afterLoc=y[3]),this.tryEntries.push(h)}function A(y){var h=y.completion||{};h.type="normal",delete h.arg,y.completion=h}function W(y){this.tryEntries=[{tryLoc:"root"}],y.forEach(ue,this),this.reset(!0)}function xe(y){if(y||y===""){var h=y[n];if(h)return h.call(y);if(typeof y.next=="function")return y;if(!isNaN(y.length)){var v=-1,E=function R(){for(;++v<y.length;)if(i.call(y,v))return R.value=y[v],R.done=!1,R;return R.value=r,R.done=!0,R};return E.next=E}}throw new TypeError(He(y)+" is not iterable")}return k.prototype=_,o(P,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:k,configurable:!0}),k.displayName=c(_,l,"GeneratorFunction"),e.isGeneratorFunction=function(y){var h=typeof y=="function"&&y.constructor;return!!h&&(h===k||(h.displayName||h.name)==="GeneratorFunction")},e.mark=function(y){return Object.setPrototypeOf?Object.setPrototypeOf(y,_):(y.__proto__=_,c(y,l,"GeneratorFunction")),y.prototype=Object.create(P),y},e.awrap=function(y){return{__await:y}},z(F.prototype),c(F.prototype,a,function(){return this}),e.AsyncIterator=F,e.async=function(y,h,v,E,R){R===void 0&&(R=Promise);var C=new F(d(y,h,v,E),R);return e.isGeneratorFunction(h)?C:C.next().then(function(D){return D.done?D.value:C.next()})},z(P),c(P,l,"Generator"),c(P,n,function(){return this}),c(P,"toString",function(){return"[object Generator]"}),e.keys=function(y){var h=Object(y),v=[];for(var E in h)v.push(E);return v.reverse(),function R(){for(;v.length;){var C=v.pop();if(C in h)return R.value=C,R.done=!1,R}return R.done=!0,R}},e.values=xe,W.prototype={constructor:W,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!h)for(var v in this)v.charAt(0)==="t"&&i.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=r)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var v=this;function E(te,ie){return D.type="throw",D.arg=h,v.next=te,ie&&(v.method="next",v.arg=r),!!ie}for(var R=this.tryEntries.length-1;R>=0;--R){var C=this.tryEntries[R],D=C.completion;if(C.tryLoc==="root")return E("end");if(C.tryLoc<=this.prev){var H=i.call(C,"catchLoc"),q=i.call(C,"finallyLoc");if(H&&q){if(this.prev<C.catchLoc)return E(C.catchLoc,!0);if(this.prev<C.finallyLoc)return E(C.finallyLoc)}else if(H){if(this.prev<C.catchLoc)return E(C.catchLoc,!0)}else{if(!q)throw Error("try statement without catch or finally");if(this.prev<C.finallyLoc)return E(C.finallyLoc)}}}},abrupt:function(h,v){for(var E=this.tryEntries.length-1;E>=0;--E){var R=this.tryEntries[E];if(R.tryLoc<=this.prev&&i.call(R,"finallyLoc")&&this.prev<R.finallyLoc){var C=R;break}}C&&(h==="break"||h==="continue")&&C.tryLoc<=v&&v<=C.finallyLoc&&(C=null);var D=C?C.completion:{};return D.type=h,D.arg=v,C?(this.method="next",this.next=C.finallyLoc,$):this.complete(D)},complete:function(h,v){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&v&&(this.next=v),$},finish:function(h){for(var v=this.tryEntries.length-1;v>=0;--v){var E=this.tryEntries[v];if(E.finallyLoc===h)return this.complete(E.completion,E.afterLoc),A(E),$}},catch:function(h){for(var v=this.tryEntries.length-1;v>=0;--v){var E=this.tryEntries[v];if(E.tryLoc===h){var R=E.completion;if(R.type==="throw"){var C=R.arg;A(E)}return C}}throw Error("illegal catch attempt")},delegateYield:function(h,v,E){return this.delegate={iterator:xe(h),resultName:v,nextLoc:E},this.method==="next"&&(this.arg=r),$}},e}function Ro(r,e,t,i,o,s,n){try{var a=r[s](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,o)}function Rl(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(l){Ro(s,i,o,n,a,"next",l)}function a(l){Ro(s,i,o,n,a,"throw",l)}n(void 0)})}}function Ol(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Al(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ll(i.key),i)}}function Tl(r,e,t){return e&&Al(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ll(r){var e=Fl(r,"string");return He(e)=="symbol"?e:e+""}function Fl(r,e){if(He(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(He(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Il=(function(){function r(){Ol(this,r)}return Tl(r,[{key:"openFile",value:(function(){var e=Rl(Ni().mark(function i(o,s){var n;return Ni().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(Is()&&o&&typeof o.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,gl(o.uri);case 4:return n=l.sent,l.abrupt("return",new Po(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new Po(o)));case 13:if(typeof o.read!="function"){l.next=18;break}if(s=Number(s),Number.isFinite(s)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new Ul(o,s)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,o){return e.apply(this,arguments)}return t})()}])})();function zl(r,e){return Is()?Promise.resolve(Dl(r,e)):Promise.resolve(["tus-br",r.name,r.type,r.size,r.lastModified,e.endpoint].join("-"))}function Dl(r,e){var t=r.exif?Ml(JSON.stringify(r.exif)):"noexif";return["tus-rn",r.name||"noname",r.size||"nosize",t,e.endpoint].join("/")}function Ml(r){var e=0;if(r.length===0)return e;for(var t=0;t<r.length;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function Rt(r){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rt(r)}function ur(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function jl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Bl(i.key),i)}}function fr(r,e,t){return e&&jl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Bl(r){var e=Nl(r,"string");return Rt(e)=="symbol"?e:e+""}function Nl(r,e){if(Rt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Rt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Hl=(function(){function r(){ur(this,r)}return fr(r,[{key:"createRequest",value:function(t,i){return new ql(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),ql=(function(){function r(e,t){ur(this,r),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return fr(r,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,s){t._xhr.onload=function(){o(new Vl(t._xhr))},t._xhr.onerror=function(n){s(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Vl=(function(){function r(e){ur(this,r),this._xhr=e}return fr(r,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function Ot(r){"@babel/helpers - typeof";return Ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ot(r)}function Kl(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Yl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Gl(i.key),i)}}function Wl(r,e,t){return e&&Yl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Gl(r){var e=Xl(r,"string");return Ot(e)=="symbol"?e:e+""}function Xl(r,e){if(Ot(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ot(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Hi=!1;try{Hi="localStorage"in window;var Ei="tusSupport",Oo=localStorage.getItem(Ei);localStorage.setItem(Ei,Oo),Oo===null&&localStorage.removeItem(Ei)}catch(r){if(r.code===r.SECURITY_ERR||r.code===r.QUOTA_EXCEEDED_ERR)Hi=!1;else throw r}var Jl=Hi,Zl=(function(){function r(){Kl(this,r)}return Wl(r,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var o=Math.round(Math.random()*1e12),s="tus::".concat(t,"::").concat(o);return localStorage.setItem(s,JSON.stringify(i)),Promise.resolve(s)}},{key:"_findEntries",value:function(t){for(var i=[],o=0;o<localStorage.length;o++){var s=localStorage.key(o);if(s.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(s));n.urlStorageKey=s,i.push(n)}catch{}}return i}}])})();function it(r){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(r)}function Ql(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ec(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ds(i.key),i)}}function tc(r,e,t){return t&&ec(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function ic(r,e,t){return e=oi(e),rc(r,zs()?Reflect.construct(e,t||[],oi(r).constructor):e.apply(r,t))}function rc(r,e){if(e&&(it(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oc(r)}function oc(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zs(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zs=function(){return!!r})()}function oi(r){return oi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},oi(r)}function sc(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&qi(r,e)}function qi(r,e){return qi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},qi(r,e)}function Ao(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Ze(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ao(Object(t),!0).forEach(function(i){nc(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Ao(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function nc(r,e,t){return e=Ds(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Ds(r){var e=ac(r,"string");return it(e)=="symbol"?e:e+""}function ac(r,e){if(it(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(it(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var To=Ze(Ze({},ri.defaultOptions),{},{httpStack:new Hl,fileReader:new Il,urlStorage:Jl?new Zl:new Da,fingerprint:zl}),lc=(function(r){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ql(this,e),i=Ze(Ze({},To),i),ic(this,e,[t,i])}return sc(e,r),tc(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=Ze(Ze({},To),o),ri.terminate(i,o)}}])})(ri);const cc=10*1024*1024,dc=5*1024*1024,pc="https://eu-on-24001.connector.filerobot.com/files",uc="https://eu-on-24001.connector.filerobot.com/json";function fc(r,e){if(!e||!r.file)return!1;const t=e.sizeThreshold??cc;return r.size>=t}function hc(r,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),o=t.endpoint||pc,s=t.jsonBase||uc,n=t.chunkSize??dc,a=t.resumable!==!1,l=t.parallelChunks??1,c=t.retryDelays??[0,1e3,3e3,5e3],d=i.split("/").pop()||"";let p=!1,u=!1,m=!1;const g={name:r.name,type:r.type,"filerobot-folder":e.folder};nr(r.product)&&(g.product=JSON.stringify(ar(r.product)));const x=async()=>`tus-${r.id}-${o}`,$=new lc(r.file,{endpoint:o,chunkSize:n,retryDelays:c,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:g,fingerprint:x,onBeforeRequest(b){const U=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[P,z]of Object.entries(U))b.setHeader(P,z);b.setHeader("X-Filerobot-Token",d)},onUploadUrlAvailable(){$.url&&e.onUploadUrlAvailable&&!m&&(m=!0,e.onUploadUrlAvailable($.url))},onProgress(b,U){!u&&!p&&e.onProgress(b,U)},onSuccess(){var P;if(u)return;_();const b=$.url||"",U=(P=b.match(/files\/([^/?]+)/))==null?void 0:P[1];U?mc(s,U,r.size).then(z=>{u||e.onComplete(Lt(z)?sr(z,r):z)}).catch(z=>{u||e.onError(z)}):e.onComplete({status:"success",file:{uuid:"",name:r.name,extension:r.name.split(".").pop()||"",type:r.type,size:r.size,url:{public:b,cdn:b},meta:r.meta,tags:r.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(b){u||(_(),gc(b)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(b instanceof Error?b:new Error(String(b))))},onShouldRetry(b,U,P){var F;const z=(F=b.originalResponse)==null?void 0:F.getStatus();return z===429?!0:!(z&&z>400&&z<500&&z!==409)}});let L=null,k=null;typeof window<"u"&&(L=()=>{var b;!p&&!u&&(p=!0,$.abort(!1),(b=e.onPause)==null||b.call(e))},k=()=>{var b;p&&!u&&(p=!1,$.start(),(b=e.onResume)==null||b.call(e))},window.addEventListener("offline",L),window.addEventListener("online",k));const _=()=>{L&&window.removeEventListener("offline",L),k&&window.removeEventListener("online",k)},w=()=>{try{$.start()}catch(b){_(),e.onError(b instanceof Error?b:new Error(String(b)))}};return a?$.findPreviousUploads().then(b=>{b.length>0&&!u&&$.resumeFromPreviousUpload(b[0]),u||w()}):w(),{abort(){u=!0,p=!1,_(),$.abort(!0)},pause(){!p&&!u&&(p=!0,$.abort(!1))},resume(){p&&!u&&(p=!1,$.start())},isPaused(){return p}}}function gc(r){var e;if(r instanceof ft){const t=(e=r.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:r.originalResponse==null&&r.causingError!=null}return!1}async function mc(r,e,t){const i=`${r.replace(/\/+$/,"")}/${e}`,o=t>1e8?13e3:6e3,s=3;for(let n=0;n<=s;n++){n>0&&await new Promise(c=>setTimeout(c,o));const a=await fetch(i);if(a.status===404&&n<s)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(Lt(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<s))throw new Error(l.msg||"File record not available after upload")}throw new Error("File record not available after upload")}const Gt="_sfxRelativePath",Lo=8,xc=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function vc(r){return r?r.startsWith(".")?!0:xc.has(r):!1}function hr(r,e){if(e){try{Object.defineProperty(r,Gt,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(r,Gt,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{r[Gt]=e}}}function bc(r){const e=r[Gt];if(typeof e=="string"&&e)return e;const t=r.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=r.relativePath;return typeof i=="string"?i:""}function yc(r){if(!r)return"";const e=r.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function wc(r,e){const t=(r??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:r??""}async function Ms(r){var n;const e=r.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(r.files??[]),hadDirectories:!1};const i=[];let o=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(o=!0),i.push(l))}if(i.length===0)return{files:Array.from(r.files??[]),hadDirectories:!1};const s=[];return await js(i,"",s),{files:s,hadDirectories:o}}async function js(r,e,t){for(let i=0;i<r.length;i+=Lo){const o=r.slice(i,i+Lo);await Promise.all(o.map(s=>_c(s,e,t)))}}async function _c(r,e,t){try{if(r.isFile){const i=await kc(r);if(!i)return;const o=e?`${e}/${i.name}`:i.name;hr(i,o),t.push(i);return}if(r.isDirectory){if(vc(r.name))return;const i=e?`${e}/${r.name}`:r.name,o=await Sc(r);await js(o,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(r==null?void 0:r.name)??r,i)}}function kc(r){return new Promise(e=>{r.file(t=>e(t),()=>e(null))})}function Sc(r){return new Promise(e=>{const t=r.createReader(),i=[],o=()=>{t.readEntries(s=>{if(s.length===0){e(i);return}i.push(...s),o()},s=>{console.warn("[sfx-uploader] directory read failed for",r==null?void 0:r.name,s),e(i)})};o()})}class $c{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(J(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(J(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&J(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),J(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),J(this.store,e,{status:"uploading"})):J(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Vi(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),J(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Vi(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),J(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,o=t-i;if(o<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,o);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),J(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var u,m;const t=(m=(u=this.config).resolveUploadParams)==null?void 0:m.call(u,e),i=!!t&&Object.keys(t).length>0,o=!i&&!e.remoteInfo&&!e.remoteUrl&&fc(e,this.config.tusConfig);J(this.store,e.id,{status:"uploading",error:null,isTus:o});let s=0,n=Date.now(),a=0;const l=wc(this.store.getState().targetFolder,e.relativeFolder),c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:g=>this.handleComplete(e.id,g),onError:g=>this.handleError(e.id,g)},d=(g,x)=>{const $=Date.now(),L=($-n)/1e3;if(L>0){const _=(g-s)/L;a=a===0?_:.3*_+.7*a}s=g,n=$;const k=x>0?Math.min(g/x*100,100):0;J(this.store,e.id,{progress:k,bytesUploaded:g,speed:a}),this.updateTotalProgress()};let p;if(e.remoteInfo)p=ka(e,{...c,onProgress:d});else if(e.remoteUrl){if(!this.config.companionUrl){J(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}p=Sa(e,{...c,onProgress:d,companionUrl:this.config.companionUrl,onMeta:g=>{J(this.store,e.id,{size:g.size,type:g.type||e.type})}})}else if(o){const g=hc(e,{...c,onProgress:d,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:x=>{J(this.store,e.id,{tusUploadUrl:x})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,g),J(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,g),J(this.store,e.id,{status:"uploading"})}});p=g}else p=ga(e,{...c,onProgress:d});this.activeUploads.set(e.id,p)}handleComplete(e,t){var c,d,p,u,m,g,x,$,L,k,_;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),o=((c=i==null?void 0:i.previewUrl)==null?void 0:c.startsWith("blob:"))??!1,s=((p=(d=t.file)==null?void 0:d.url)==null?void 0:p.cdn)??((m=(u=t.file)==null?void 0:u.url)==null?void 0:m.cdn_permalink)??((x=(g=t.file)==null?void 0:g.url)==null?void 0:x.permalink)??null,n={status:"complete",progress:100,response:t,alreadyExisted:Lt(t)};if(i&&s&&i.type.startsWith("image/")&&!o){const w=((k=(L=this.config).transformPreviewUrl)==null?void 0:k.call(L,s,($=t.file)==null?void 0:$.url))??s;w&&(n.previewUrl=w)}const a=(_=t.file)==null?void 0:_.size,l=typeof a=="number"?a:a==null?void 0:a.bytes;typeof l=="number"&&(n.size=l),J(this.store,e,n),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,s=i.retryCount+1;if(s<=o.maxRetries){const n=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);J(this.store,e,{status:"retrying",error:t.message,retryCount:s});const a=setTimeout(()=>{this.retryTimers.delete(e),J(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else J(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,i=0,o=0,s=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),s+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(o+=a.speed));this.store.setState({totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:n>0?Math.min(s/n,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Vi(r){return r==="queued"||r==="uploading"||r==="retrying"||r==="paused"}function gr(r,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${r}`}async function Cc(r,e,t){const i=`${gr(r,t)}/key/${encodeURIComponent(e)}`,o=new AbortController,s=setTimeout(()=>o.abort(),3e4);try{const n=await fetch(i,{signal:o.signal});if(clearTimeout(s),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const a=await n.json();if(a.status==="error")throw new Error(`SASS key exchange failed: ${a.msg||"Unknown error"}`);return a.key}catch(n){throw clearTimeout(s),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function Ki(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}async function Ec(r,e){const t=gr(r.container,e);if(r.mode==="security-template"){const i=await Cc(r.container,r.securityTemplateId,e);return{apiBase:t,headers:Ki(r,i),sassKey:i}}return{apiBase:t,headers:Ki(r)}}const Pc="https://ai.scaleflex.com",Fo=300,Uc=.85,Rc=3e4;function Io(r){return r==="low"?.6:r==="high"?.85:.75}async function Oc(r,e){var o,s,n;if(r.file)return r.file;const t=r.previewUrl||((n=(s=(o=r.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn)||r.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function Ac(r){return`${(r||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function Tc(r){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(r);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,o=URL.createObjectURL(r);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(o)})},i.onerror=()=>{URL.revokeObjectURL(o),t(new Error("Image decode failed"))},i.src=o})}async function Lc(r){const e=await Tc(r);try{const t=e.width>Fo?Fo/e.width:1,i=Math.max(1,Math.round(e.width*t)),o=Math.max(1,Math.round(e.height*t)),s=document.createElement("canvas");s.width=i,s.height=o;const n=s.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,o),await new Promise((a,l)=>{s.toBlob(c=>c?a(c):l(new Error("Canvas toBlob failed")),"image/jpeg",Uc)})}finally{e.close()}}async function zo(r,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),Rc),o=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",o);const s=t.signal,n=()=>{if(s.aborted)throw new DOMException("Aborted","AbortError")};try{n();const c=await Oc(r,s);n();const d=await Lc(c);n();const u=`${(e.endpoint||Pc).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,m=new FormData;m.append("file",d,Ac(r.name));const g=await fetch(u,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:m,signal:s});if(!g.ok)throw new Error(`Similarity check failed (HTTP ${g.status})`);const x=await g.json();if(x.status==="error")throw new Error(`Similarity check failed: ${x.msg||"Unknown error"}`);return(x.similar_assets??[]).map(([$,L,k])=>({uuid:$,score:L,url:k}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",o)}}const si="sfx-uploader:last-upload:",Bs=1;function Fc(r){var s,n,a,l,c,d,p,u,m;const{file:e,previewUrl:t,...i}=r;let o=null;return r.status==="complete"&&(r.previewUrl&&!r.previewUrl.startsWith("blob:")?o=r.previewUrl:o=((a=(n=(s=r.response)==null?void 0:s.file)==null?void 0:n.url)==null?void 0:a.permalink)??((d=(c=(l=r.response)==null?void 0:l.file)==null?void 0:c.url)==null?void 0:d.cdn_permalink)??((m=(u=(p=r.response)==null?void 0:p.file)==null?void 0:u.url)==null?void 0:m.cdn)??null),{...i,previewUrl:o}}function Ic(r){try{const e=sessionStorage.getItem(si+r);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==Bs?null:t}catch{return null}}function zc(r,e){try{sessionStorage.setItem(si+r,JSON.stringify(e))}catch{}}const ut={save(r,e){if(e.length===0){this.clear(r);return}const t={__schemaVersion:Bs,savedAt:Date.now(),files:e.map(Fc)};zc(r,t)},load(r){const e=Ic(r);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(r){try{return sessionStorage.getItem(si+r)!=null}catch{return!1}},clear(r){try{sessionStorage.removeItem(si+r)}catch{}}},j={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let Dc=0;function Ye(){return`file-${Date.now()}-${++Dc}`}function Fe(r){if(!Number.isFinite(r)||r<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(r)/Math.log(1024)),e.length-1),i=r/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function Pi(r){if(!isFinite(r)||r<=0)return"0s";const e=Math.round(r);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const o=Math.floor(t/60),s=t%60;return s>0?`${o}h ${s}m`:`${o}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function fe(r){var t;const e=((t=r.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return r.type.startsWith("image/")?"image":r.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":r.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":r.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function Mc(r){const e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toUpperCase():""}const jc=new Set([".ds_store","thumbs.db","desktop.ini"]);function Ui(r){const e=(r.split(/[\\/]/).pop()??r).toLowerCase();return e.startsWith(".ds_store")?!0:jc.has(e)}const Bc="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Ns={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function Yi(r){const e=r==="_default"?"GENERIC":r.toUpperCase();return`${Bc}${e}.svg?vh=${Ns[r]}`}function Hs(r){const e=(r==null?void 0:r.toLowerCase().replaceAll(".",""))||"";return e in Ns?Yi(e):Yi("_default")}function qs(){return Yi("_default")}const Nc={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Do(r){var t;const e=((t=r.split(".").pop())==null?void 0:t.toLowerCase())??"";return Nc[e]||""}function ke(r){return r==="image/heic"||r==="image/heif"}function Hc(r){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(r);let o=!1;const s=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{o||(o=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),t.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function qc(r){return typeof r=="string"&&r.startsWith("Maximum ")&&r.includes("files allowed")}function Ri(r,e,t){var i,o;if(e.maxFileSize!=null&&r.size>0&&r.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&r.size>0){let s=r.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(s+=n.size);if(s>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let s=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,n="."+(((i=r.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!s.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type not allowed"}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,n="."+(((o=r.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(s.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type is blocked"}return null}function Mo(r){return r.allowedFileTypes?r.allowedFileTypes.join(","):""}const jo={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function Vc(r){return r.filter(e=>e in jo).map(e=>jo[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ni=class extends pi{constructor(e){if(super(e),this.it=S,e.type!==di.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===he)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ni.directiveName="unsafeHTML",ni.resultType=1;const Bo=Tt(ni);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wi extends ni{}Wi.directiveName="unsafeSVG",Wi.resultType=2;const $e=Tt(Wi);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=Tt(class extends pi{constructor(r){var e;if(super(r),r.type!==di.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,o;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const t=r.element.classList;for(const s of this.st)s in e||(t.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(n?(t.add(s),this.st.add(s)):(t.remove(s),this.st.delete(s)))}return he}});function De(r){return r.brandStyle?f`<span
    class=${Kc({"brand-ico":!0,"brand-ico--transparent":r.brandStyle.background==="transparent"})}
    ${Q(r.brandStyle)}
  >${Bo(r.brandHtml)}</span>`:Bo(r.brandHtml)}var Yc=Object.defineProperty,Vs=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Yc(e,t,o),o};const Wc='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Gc='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Xc='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Jc='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',mt=[{id:"device",labelKey:"myDevice",label:"My Device",icon:Wc,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:Gc,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:Xc,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:Jc,iconColor:"#ea580c"}],yr=class yr extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.sources=mt}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return f`
      ${this.sources.map(e=>f`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?De(e):Ie`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${$e(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};yr.styles=le`
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
  `;let At=yr;Vs([O({attribute:!1})],At.prototype,"t");Vs([O({type:Array})],At.prototype,"sources");function Zc(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function Qc(r,e){let t=r.get(e);return t||(t=Zc(),r.set(e,t)),t}function ed(r,e){if(r.length===0||e.length===0)return[];const t=new Set(r);return e.filter(i=>t.has(i))}function td(r,e){r.contributingDependencyUuids.includes(e)||r.contributingDependencyUuids.push(e)}function id(r,e,t){const i=Qc(r,t.targetCkey);switch(td(i,e.uuid),t.type){case"hide":i.hidden=!0;break;case"require":i.required=!0;break;case"allow_values":{const o=t.allowedValues??[];i.allowedValues=i.allowedValues===void 0?[...o]:ed(i.allowedValues,o);break}case"set_values":{const o=t.setValues??[];if(o.length===0)break;i.setValue===void 0&&(i.setValue=o.length===1?o[0]:o);break}}}function rd(r,e){for(const t of e.actions)id(r,e,t)}const od=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function sd(r){const e=new Set;if(!r)return e;const t=r.toLowerCase(),[i]=t.split("/");return i==="image"?e.add("image"):i==="video"?e.add("video"):i==="audio"?e.add("audio"):i==="application"&&e.add("document"),od.has(t)&&e.add("archive"),e}function nd(r,e){if(r.formatMimetypes.length===0)return!0;const t=sd(e);return r.formatMimetypes.some(i=>t.has(i))}function Oi(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:!1}function No(r){return typeof r=="boolean"?r:r==="true"?!0:r==="false"?!1:null}function qt(r){return r==null?[]:Array.isArray(r)?r.map(String):[String(r)]}function Ho(r,e){if(r.length!==e.length)return!1;const t=new Set(r);for(const i of e)if(!t.has(i))return!1;return!0}function qo(r,e){if(r.length===0||e.length===0)return!1;const t=new Set(r);for(const i of e)if(t.has(i))return!0;return!1}function ad(r,e){const t=e[r.triggerCkey],i=r.triggerValues;switch(r.triggerCondition){case"is_true":return No(t)===!0;case"is_false":return No(t)===!1;case"is_empty":return Oi(t);case"is_not_empty":return!Oi(t);case"is_in":return qo(qt(t),i);case"is_not_in":return Oi(t)?!0:!qo(qt(t),i);case"is":return Ho(qt(t),i);case"is_not":return!Ho(qt(t),i);default:return!1}}function ld(r,e){const t=new Map;for(const i of e)i.active&&nd(i,r.mime)&&ad(i,r.meta)&&rd(t,i);return t}function Xt(r,e,t){const i={},o=new Set;for(const a of e.fields)o.add(a.ckey),a.key in r.meta&&(i[a.ckey]=r.meta[a.key]);const s=t.filter(a=>o.has(a.triggerCkey)),n=ld({mime:r.mime,meta:i},s);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const c of a.fields){const d=n.get(c.ckey);if(d){d.hidden=!0;for(const p of l.contributingDependencyUuids)d.contributingDependencyUuids.includes(p)||d.contributingDependencyUuids.push(p)}else n.set(c.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function cd(r,e){const t=Array.isArray(e)?e:[e];switch(r.type){case"boolean":{const i=t[0];return i==="true"?!0:i==="false"?!1:null}case"select-one":return t[0]??null;case"multi-select":return t.length>0?t:null;default:return t.length===1?t[0]:t}}function dd(r,e,t){var i,o;return!!((i=t.get(r.ckey))!=null&&i.hidden||e!=null&&e.ckey&&((o=t.get(e.ckey))!=null&&o.hidden))}function pd(r,e,t){if(t.size===0)return r;let i=null;for(const o of e.groups)for(const s of o.fields)dd(s,o,t)&&s.key in r&&(i||(i={...r}),delete i[s.key]);return i??r}const rt="product.ref",ot="product.position",ud="__product__",fd=new Set([rt,ot]);function hd(r){return fd.has(r)}function gd(r){return r===rt?"ref":r===ot?"position":null}function md(r){return[{key:rt,ckey:rt,uuid:"product-ref",title:r("productRefLabel","Product reference"),type:"text",placeholder:r("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:ot,ckey:ot,uuid:"product-position",title:r("productPositionLabel","Position"),type:"numeric",placeholder:r("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function xd(r){return{uuid:ud,isRoot:!1,name:r("productFieldsLabel","Product"),fields:md(r)}}function vd(r,e){const t=xd(e);let i=-1;for(let l=0;l<r.groups.length;l++)r.groups[l].isRoot&&(i=l);const o=i+1,s=[...r.groups.slice(0,o),t,...r.groups.slice(o)],n=s.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...r,groups:s,fields:n,fieldsByKey:a}}function cp(r,e,t){var o;if((((o=t==null?void 0:t.requiredFields)==null?void 0:o.includes(r.ckey))||!!r.required)&&ai(e))return`${r.title} is required`;if(ai(e))return null;if(r.key===rt)return typeof e!="string"||fa.test(e)?"Reference contains invalid characters":null;if(r.key===ot){const s=Number(e);return!Number.isFinite(s)||!Number.isInteger(s)?"Position must be an integer":null}switch(r.type){case"numeric":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!Number.isInteger(s))return"Must be an integer";if(s<-1999999999||s>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(s<-999999999999e-2||s>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const s=e,n=s.latitude!==""&&s.latitude!=null,a=s.longitude!==""&&s.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(s.latitude),c=Number(s.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(c)||c<-180||c>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const s=new URL(e);if(!["http:","https:"].includes(s.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(r.validation&&typeof e=="string")try{if(!new RegExp(r.validation).test(e))return"Value does not match expected format"}catch{}return null}function ai(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:typeof r=="object"?!Object.values(r).some(e=>e!=null&&e!==""):!r}const Gi={LANGUAGES:"FTYPE_LANGUAGES"};function dp(r,e){if(!r.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&r.regional_variants_group_uuid in t?t[r.regional_variants_group_uuid]:e==null?void 0:e.language}function pp(r,e,t,i){if(!r.regional_variants_group_uuid||!e)return;const o=e.find(a=>a.uuid===r.regional_variants_group_uuid);if(!o)return;const s=(t==null?void 0:t[o.uuid])??i,n=o.variants.find(a=>a.api_value===s);if(n)return`${o.label}: ${n.label}`}function bd(r,e){var i;const t={};for(const o of r??[]){if(!((i=o.variants)!=null&&i.length))continue;const s=o.type===Gi.LANGUAGES?yd(o.variants,e):void 0;t[o.uuid]=s??o.variants[0].api_value}return t}function yd(r,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let o,s;for(const a of r){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!o&&l===i&&(o=a.api_value),!s&&l.split("-")[0]===i&&(s=a.api_value)}}return o??s}const Ks=new Set(["asset-attachments","attachments-assets","integer-list"]),wd=new Set(["face_matcher"]);function up(r){return Ks.has(r)}function _d(r){return Ks.has(r.type)||wd.has(r.ckey)}function kd(r){return r==null?[]:Array.isArray(r)?r.map(String):[String(r)]}function Sd(r,e){if(r.length!==e.length)return!1;const t=new Set(r);for(const i of e)if(!t.has(i))return!1;return!0}function $d(r,e){const t=[];for(const[i,o]of e){if(o.hidden)continue;const s=kd(r[i]);if(s.length!==0){if(o.allowedValues!==void 0){const n=new Set(o.allowedValues),a=s.filter(l=>!n.has(l));a.length>0&&t.push({ckey:i,kind:"allow_values",conflictingValues:a,dependencyUuids:[...o.contributingDependencyUuids]})}if(o.setValue!==void 0){const n=Array.isArray(o.setValue)?o.setValue:[o.setValue];Sd(s,n)||t.push({ckey:i,kind:"set_values",conflictingValues:s,dependencyUuids:[...o.contributingDependencyUuids]})}}}return t}const Cd=new Set(["idle","queued","rejected"]);function mr(r){return!ai(r)}function Xi(r,e){var t;return _d(r)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(r.ckey)?!0:!!r.required}function fi(r){return[...r.values()].filter(e=>Cd.has(e.status))}function xr(r,e,t){if(!e)return Xi(r,t);const i=e.get(r.ckey);return i!=null&&i.hidden?!1:i!=null&&i.required?!0:Xi(r,t)}function hi(r,e,t){const i=new Map;if(!t||t.length===0){for(const o of r)i.set(o.id,null);return i}for(const o of r)i.set(o.id,Xt({mime:o.type??"",meta:o.meta},e,t));return i}function fp(r,e,t,i){const o=fi(r);if(o.length===0)return{};const s=hi(o,e,i),n={};for(const a of e.fields){const l=o.filter(c=>{const d=s.get(c.id)??null;return xr(a,d,t)?!mr(c.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function Ed(r,e,t,i){const o=fi(r);if(o.length===0)return null;const s=hi(o,e,i);for(const n of e.fields)if(o.some(l=>{const c=s.get(l.id)??null;return xr(n,c,t)?!mr(l.meta[n.key]):!1}))return n.key;return null}function Pd(r,e,t){var o;const i=r.get(e.id);return i&&i.has(t)?i.get(t):(o=e.meta)==null?void 0:o[t]}function Ud(r,e,t){const i=e.get(r.id);if(!i||i.size===0)return r;const o={...r.meta};for(const s of t.fields)i.has(s.key)&&(o[s.key]=i.get(s.key));return{...r,meta:o}}function hp(r,e,t,i,o){const s=new Set,n=fi(e);if(n.length===0)return s;const a=n.map(c=>Ud(c,r,t)),l=hi(a,t,o);for(const c of t.fields)n.some((p,u)=>{const m=l.get(a[u].id)??null;return xr(c,m,i)?!mr(Pd(r,p,c.key)):!1})&&s.add(c.key);return s}function Rd(r,e,t){if(!t||t.length===0)return null;const i=fi(r);if(i.length===0)return null;const o=hi(i,e,t),s=new Map;for(const n of i){const a=o.get(n.id);if(!a||a.size===0)continue;const l={};for(const d of e.fields)d.key in n.meta&&(l[d.ckey]=n.meta[d.key]);const c=$d(l,a);c.length!==0&&s.set(n.id,new Set(c.map(d=>d.ckey)))}if(s.size===0)return null;for(const n of e.fields)for(const a of s.values())if(a.has(n.ckey))return n.key;return null}function gp(r,e){const t={...r};for(const i of Object.keys(e)){const o=e[i];if(o==null||o==="")continue;const s=r[i];if(Array.isArray(o))if(Array.isArray(s)){const n=new Set(s.map(l=>JSON.stringify(l))),a=[...s];for(const l of o){const c=JSON.stringify(l);n.has(c)||(n.add(c),a.push(l))}t[i]=a}else t[i]=o;else t[i]=o}return t}function Ys(r){let e=r;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Od=Object.defineProperty,de=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Od(e,t,o),o};const Vo=3,Ji=new CSSStyleSheet;Ji.replaceSync(`
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
`);var Pe;const ne=(Pe=class extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Vo,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&Ms(t).then(({files:i,hadDirectories:o})=>{i.length>0?this._emitFiles(i,o):o&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&hr(o,s)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var o;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const i=[];for(const s of t)if(s.kind==="file"){const n=s.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(e="files"){var t,i;if(e==="folder"&&this.directory&&this.multi){(t=this.folderInput)==null||t.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Ys(this).appendChild(this._portalContainer),this._injectDropdownStyles()),Ee(f`<div class="sfx-more-dropdown open">
          ${e.map(t=>f`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?De(t):t.iconColor?f`<svg
                        viewBox="0 0 24 24"
                        ${Q({color:t.iconColor})}
                      >
                        ${$e(t.icon)}
                      </svg>`:Ie`<svg viewBox="0 0 24 24">${$e(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(Ee(S,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Ji)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Ji]))}_positionDropdown(){var p,u;const e=(p=this.shadowRoot)==null?void 0:p.querySelector(".more-wrap > button"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=8,s=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=s+o||a>l?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let d=i.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),t.style.left=`${d}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=Vo}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const i=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=Pe._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(Ee(S,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return f`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?De(e):f`<span
              class="pill-ico"
              ${Q(e.iconColor?{color:e.iconColor}:null)}
            >
              ${Ie`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${$e(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return f`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?f`<span class="card-ico">${De(e)}</span>`:f`<span
              class="card-ico"
              ${Q(e.iconColor?{color:e.iconColor}:null)}
            >
              ${Ie`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${$e(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return f`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="src-card"
          @click=${e=>this._toggleMore(e)}
        >
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
    `}_renderMoreDropdown(){return f`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="more-pill"
          @click=${e=>this._toggleMore(e)}
        >
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return f`
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

          ${!this.compact&&this.directory&&this.multi?f`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${o=>{o.stopPropagation(),this.browse("folder")}}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:f`<div class="title">${this.t("dragAndDrop","Drag & Drop or click to")} <span>${this.t("browse","browse")}</span></div>`}
          ${!this.compact&&this.sources.length>0?f`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${this.sourcesLayout==="cards"?f`
                      <div class="sources-cards">
                        ${t.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():S}
                      </div>
                    `:f`
                      <div class="sources-grid">
                        ${t.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():S}
                      </div>
                    `}
              `:S}
          ${this.compact&&this.sources.length>0?f`
                <div class="sources-row">
                  ${this.sources.map(o=>f`
                      <button
                        class="src-ico"
                        ${Q(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${s=>{s.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?De(o):Ie`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${$e(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:S}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||S}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?f`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:S}
      </div>
    `}},Pe.styles=le`
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

    :host([mode="inline"]) .drop-zone {
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
  `,Pe._WIDE_THRESHOLD_PX=1200,Pe);de([O({attribute:!1})],ne.prototype,"t");de([O({type:Boolean,reflect:!0})],ne.prototype,"compact");de([O({type:Boolean,attribute:"external-drag-over"})],ne.prototype,"externalDragOver");de([O({type:String})],ne.prototype,"accept");de([O({type:Boolean})],ne.prototype,"multi");de([O({type:Boolean})],ne.prototype,"directory");de([O({type:Array})],ne.prototype,"sources");de([O({type:String,attribute:"sources-layout"})],ne.prototype,"sourcesLayout");de([O({type:String,reflect:!0})],ne.prototype,"mode");de([I()],ne.prototype,"_dragOver");de([I()],ne.prototype,"_moreOpen");de([I()],ne.prototype,"_visiblePills");de([or(".ripple")],ne.prototype,"_rippleEl");de([or("input[data-sfx-dz-files]")],ne.prototype,"fileInput");de([or("input[data-sfx-dz-folder]")],ne.prototype,"folderInput");let Ad=ne;const wr=class wr extends oe{render(){return f`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};wr.styles=le`
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
  `;let Zi=wr;var Td=Object.defineProperty,G=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Td(e,t,o),o};const Qi=new CSSStyleSheet;Qi.replaceSync(`
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
`);const _r=class _r extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&hr(o,s)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Ys(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),Ee(f`<div class="sfx-tile-dropdown">
        ${e.map(t=>f`
          <button
            class="sfx-tile-dropdown-item"
            @click=${i=>this._onMoreSourceClick(i,t)}
          >
            <span class="sfx-tile-dropdown-ico" ${Q(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}>
              ${t.brandHtml?De(t):Ie`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${$e(t.icon)}</svg>`}
            </span>
            ${t.labelKey?this.t(t.labelKey,t.label):t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var p;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(p=this._portalContainer)==null?void 0:p.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=6,s=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=s+o||a>l?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let d=i.right-n;d=Math.max(8,Math.min(d,window.innerWidth-n-8)),t.style.left=`${d}px`}_closePortal(){this._portalContainer&&(Ee(S,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Qi)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Qi]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return f`
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
          <div class="drop-tile-text">${this.t("dropOrClickTo","Drop or click to")} <span>${this.t("browse","browse")}</span></div>
          ${this.directory&&this.multi?f`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:S}
          ${t.length>0?f`
            <div class="drop-tile-sources">
              ${t.map(o=>f`
                <button
                  class="drop-tile-src"
                  ${Q(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                  title=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                  @click=${s=>this._onSourceClick(s,o)}
                >
                  ${o.brandHtml?De(o):Ie`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${$e(o.icon)}</svg>`}
                </button>
              `)}
              ${i.length>0?f`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${o=>this._toggleMore(o)}>···</button>
                </div>
              `:S}
            </div>
          `:S}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept||S} @change=${this._onFileInput} />
        ${this.directory&&this.multi?f`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />`:S}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(s=>this.searchResults.has(s)).length,i=e?Math.round(t/e*100):0,o=e>0&&t===e;return f`
      ${e>1&&!this.previewOpen?f`
            <div class="similar-banner search">
              ${o?f`<span class="search-done-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>`:f`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b>${o?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b>
                <span>${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span>
                <div class="search-bar"><div class="search-bar-fill" ${Q({width:`${i}%`})}></div></div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${o?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:S}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():S}
        ${Fi(this.files,s=>s.id,(s,n)=>{const a=this.searchResults.get(s.id);return f`<sfx-file-item .t=${this.t} .file=${s} .mode=${this.mode} .allowRename=${this.allowRename} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} .showCheckSimilar=${this.showCheckSimilar} .selectMode=${this.selectMode} .isSelected=${this.selectedIds.has(s.id)} .selectionActive=${this.selectedIds.size>0} .selectionFull=${this.selectionFull} .previewOpen=${this.previewOpen} .similarStatus=${this._statusFor(s.id)} .similarCount=${(a==null?void 0:a.length)??-1} .similarResults=${a??[]} ${Q({"--tile-index":String(n)})}></sfx-file-item>`})}
      </div>
    `}};_r.styles=le`
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

    .similar-banner-ico svg { width: 16px; height: 16px; }

    .similar-banner-txt { flex: 1; min-width: 0; }
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
      transition: background-color 0.15s ease, box-shadow 0.15s ease;
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

    @keyframes simBannerSpin { to { transform: rotate(360deg); } }

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
    .search-done-ico svg { width: 14px; height: 14px; }

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
    .search-cancel:hover { background: var(--sfx-up-border-light, #f1f5f9); }

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
  `;let Y=_r;G([O({attribute:!1})],Y.prototype,"t");G([O({attribute:!1})],Y.prototype,"files");G([O({type:Boolean})],Y.prototype,"showDropTile");G([O({attribute:!1})],Y.prototype,"sources");G([O({type:String})],Y.prototype,"accept");G([O({type:Boolean})],Y.prototype,"multi");G([O({type:Boolean})],Y.prototype,"directory");G([O({type:Boolean})],Y.prototype,"allowRename");G([O({type:String})],Y.prototype,"mode");G([O({type:Boolean})],Y.prototype,"showLocateButton");G([O({type:Boolean})],Y.prototype,"showCopyCdnButton");G([O({type:Boolean})],Y.prototype,"showCheckSimilar");G([O({type:Boolean})],Y.prototype,"selectMode");G([O({attribute:!1})],Y.prototype,"selectedIds");G([O({type:Boolean})],Y.prototype,"allSelected");G([O({type:Boolean})],Y.prototype,"selectionFull");G([O({type:Number})],Y.prototype,"maxSelection");G([O({type:Boolean})],Y.prototype,"previewOpen");G([O({attribute:!1})],Y.prototype,"searchRunIds");G([O({attribute:!1})],Y.prototype,"searchActiveIds");G([O({attribute:!1})],Y.prototype,"searchResults");G([I()],Y.prototype,"_moreOpen");G([I()],Y.prototype,"_dropTileMaxVisible");var Ld=Object.defineProperty,ee=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ld(e,t,o),o};const kr=class kr extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let o=e.right+12;o+t>window.innerWidth-8&&(o=e.left-t-12),this._simPopLeft=Math.max(8,o),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this.style.zIndex="50",this._simPopover=!0},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this.style.zIndex=""}}updated(e){var t,i,o,s,n;if(e.has("file")){if(this._dims="",(i=(t=this.file)==null?void 0:t.previewUrl)!=null&&i.startsWith("blob:")){const a=this.file.previewUrl,l=new Image;l.onload=()=>{var c;((c=this.file)==null?void 0:c.previewUrl)===a&&(this._dims=`${l.naturalWidth}×${l.naturalHeight}`)},l.src=a}else if((n=(s=(o=this.file)==null?void 0:o.response)==null?void 0:s.file)!=null&&n.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this.file&&this._emit("check-similar-single",{file:this.file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){this._emit("similar-results-select",{fileId:this.file.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var i,o,s,n;e.stopPropagation();const t=(n=(s=(o=(i=this.file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var k,_;const e=this.file;if(!e)return S;const t=fe(e),i=e.status==="complete",o=e.status==="uploading",s=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",c=l||this.reviewPick||!this.allowRename,d=Mc(e.name),p=t==="image"&&!ke(e.type),u=this.selectMode&&p&&!l,m=this.similarCount>=0,g=u&&!m&&this.similarStatus==="",x=!l&&!i&&!o&&!s&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,$=x,L=["tile",i?"done":"",o?"uploading":"",s?"paused":"",a?"rejected":"",l?"review":"",g?"selectable":"",g&&this.isSelected?"selected":"",this.selectionActive&&!p&&!l?"select-dimmed":"",$?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return f`
      <div
        class=${L}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:g?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?f`<img class="preview-img" src=${e.previewUrl} alt="" />`:f`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Hs(d)}
                    alt="${d?`${d} file`:"File"}"
                    @error=${w=>{const b=w.target,U=qs();!b.dataset.fallback&&b.src!==U&&(b.dataset.fallback="1",b.src=U)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?f`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:S}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?f`
                  <span class="sim-result-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar","{{count}} similar",{count:this.similarCount})}
                  </span>
                `:f`<span class="sim-result-badge none">${this.t("noSimilar","No similar")}</span>`:S}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${g?f`
                <span
                  class="similar-cb ${this.isSelected?"checked":""} ${this.selectionFull&&!this.isSelected?"disabled":""}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected?"true":"false"}
                  aria-disabled=${this.selectionFull&&!this.isSelected?"true":"false"}
                  aria-label=${this.t("selectImage","Select image")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              `:S}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${x?f`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="cs-label">${this.t("details","Details")}</span>
                  </button>
                  ${this.similarCount>0?f`
                        <button class="check-similar-btn" @click=${this._openResults} @mouseenter=${this._simPopoverShow} @mouseleave=${this._simScheduleHide} aria-label=${this.t("viewSimilar","View similar assets")}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          <span class="cs-label">${this.t("viewNSimilar","View {{count}} similar",{count:this.similarCount})}</span>
                        </button>
                      `:this.similarCount===0?f`
                          <button class="check-similar-btn no-similar" @click=${this._openResults} aria-label=${this.t("noSimilarFound","No similar assets found")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                              <circle cx="11" cy="11" r="7"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <span class="cs-label">${this.t("noSimilar","No similar")}</span>
                          </button>
                        `:this.showCheckSimilar&&p?f`
                            <button class="check-similar-btn" @click=${this._checkSimilarSingle} aria-label=${this.t("checkSimilar","Check similar")}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <circle cx="11" cy="11" r="7"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              </svg>
                              <span class="cs-label">${this.t("checkSimilar","Check similar")}</span>
                            </button>
                          `:S}
                </div>
              `:S}

          <!-- Review-mode hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Both buttons fade in on tile hover, only for completed
               files with a response.file. Each inner button has its own
               gate — Locate needs uuid, Copy CDN needs url.cdn — so an
               already-existed-but-missing-uuid edge case won't render a
               dead button. -->
          ${l&&i&&((k=e.response)!=null&&k.file)&&(this.showLocateButton||this.showCopyCdnButton)?f`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?f`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate","Locate")}
                      </button>`:S}
                  ${this.showCopyCdnButton&&((_=e.response.file.url)!=null&&_.cdn)?f`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?f`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:f`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:S}
                </div>
              `:S}

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
          ${i?f`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:S}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&n?f`<div class="failed-badge" title=${e.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:S}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?f`
                <div class="progress">
                  <div class="progress-fill" ${Q({transform:`scaleX(${Math.min(e.progress,100)/100})`})}></div>
                </div>
              `:S}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?f`<div class="error-badge" title=${e.error}>${e.error}</div>`:S}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?f`<div class="exists-badge" title=${this.t("alreadyUploaded","Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:S}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?f`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:S}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l||this.reviewPick?S:f`
        <div class="actions">
          ${o&&e.isTus?f`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:S}
          ${s?f`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:S}
          ${n?f`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:S}
          <button class="act-btn del" @click=${this._remove} title=${this.t("remove","Remove")} aria-label=${this.t("removeFile","Remove file")}>
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
            aria-label=${this.t("fileName","File name")}
            ?readonly=${c}
            @change=${c?S:this._rename} @click=${w=>w.stopPropagation()} />
          <div class="meta">${d||""}${e.size?` · ${Fe(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
      ${this._renderSimPopover()}
    `}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return S;const e=[...this.similarResults].sort((l,c)=>c.score-l.score),t=e[0],i=e.length,o=e.slice(1),s=o.slice(0,3),n=o.length-s.length,a=Math.round(t.score*100);return f`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${Q({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?f`<img src=${t.url} alt="" />`:S}
          <span class="pop-best ${t.score>=.85?"high":""}">${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span>
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${o.length?f`<div class="pop-thumbs">
                ${s.map(l=>f`<img src=${l.url} alt="" />`)}
                ${n>0?f`<span class="pop-more">+${n}</span>`:S}
              </div>`:f`<span></span>`}
          <span class="pop-open">
            ${i===1?this.t("open","Open"):this.t("openAllN","Open all {{count}}",{count:i})}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};kr.styles=le`
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
      .center-actions { opacity: 1; }
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
      transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
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
    .tile.selectable { cursor: pointer; }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed { opacity: 0.5; }

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
      transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    }

    .tile:hover .similar-cb,
    .tile:focus-visible .similar-cb,
    .tile:has(:focus-visible) .similar-cb,
    .similar-cb.checked {
      opacity: 1;
    }

    /* Touch devices have no hover — always reveal so picking remains possible. */
    @media (hover: none) {
      .similar-cb { opacity: 1; }
    }

    .similar-cb svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s ease; }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg { opacity: 1; }

    /* Selection cap reached: unselected checkboxes are muted on hover and not
       clickable. Stays hidden when not hovered like the rest. */
    .similar-cb.disabled { cursor: not-allowed; }
    .tile:hover .similar-cb.disabled,
    .tile:focus-visible .similar-cb.disabled,
    .tile:has(:focus-visible) .similar-cb.disabled {
      opacity: 0.4;
    }
    @media (hover: none) {
      .similar-cb.disabled { opacity: 0.4; }
    }

    /* --- Similarity search loading states --- */
    /* Queued (waiting its turn): just dimmed, no badge. */
    .tile.sim-queued { opacity: 0.55; transition: opacity 0.15s ease; }
    /* On hover a queued tile un-dims so its Details button is clearly visible. */
    .tile.sim-queued:hover { opacity: 1; }

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
    .sim-result-badge svg { width: 12px; height: 12px; }
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
    .tile:has(:focus-visible) .sim-result-badge { opacity: 0; }

    /* Review-pick tile (results modal left list): plain selectable card. */
    .tile.review-pick { cursor: pointer; }
    .tile.review-pick:hover .sim-result-badge { opacity: 1; }
    .tile.review-pick .name-input { pointer-events: none; }

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
    @keyframes simPopIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
    .sim-popover .pop-hero { position: relative; aspect-ratio: 16 / 10; background: var(--sfx-up-surface, #eef); }
    .sim-popover .pop-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sim-popover .pop-best {
      position: absolute; top: 8px; left: 8px; font-size: 11px; font-weight: 700;
      padding: 3px 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-best.high { color: var(--sfx-up-success, #16a34a); }
    .sim-popover .pop-body { padding: 11px 13px 8px; }
    .sim-popover .pop-t { font-size: 12.5px; font-weight: 600; color: var(--sfx-up-text, #1e293b); }
    .sim-popover .pop-s { font-size: 11.5px; color: var(--sfx-up-text-muted, #94a3b8); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sim-popover .pop-foot { padding: 0 13px 12px; display: flex; align-items: center; justify-content: space-between; }
    .sim-popover .pop-thumbs { display: inline-flex; }
    .sim-popover .pop-thumbs img { width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; object-fit: cover; margin-left: -8px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }
    .sim-popover .pop-thumbs img:first-child { margin-left: 0; }
    .sim-popover .pop-more {
      width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; margin-left: -8px;
      background: var(--sfx-up-primary, #2563eb); color: #fff; font-size: 9.5px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-open { font-size: 11.5px; font-weight: 600; color: var(--sfx-up-primary, #2563eb); display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
    .sim-popover .pop-open svg { width: 12px; height: 12px; }

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

    /* --- "Already uploaded" note (neutral, not an error) --- */
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
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-text, #1e293b) 72%, transparent);
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
  `;let X=kr;ee([O({attribute:!1})],X.prototype,"t");ee([O({attribute:!1})],X.prototype,"file");ee([O({type:String})],X.prototype,"mode");ee([O({type:Boolean})],X.prototype,"allowRename");ee([O({type:Boolean})],X.prototype,"showLocateButton");ee([O({type:Boolean})],X.prototype,"showCopyCdnButton");ee([O({type:Boolean})],X.prototype,"showCheckSimilar");ee([O({type:Boolean})],X.prototype,"selectMode");ee([O({type:Boolean})],X.prototype,"isSelected");ee([O({type:Boolean})],X.prototype,"selectionActive");ee([O({type:Boolean})],X.prototype,"selectionFull");ee([O({type:Boolean})],X.prototype,"previewOpen");ee([O({type:String})],X.prototype,"similarStatus");ee([O({type:Number})],X.prototype,"similarCount");ee([O({attribute:!1})],X.prototype,"similarResults");ee([O({type:Boolean})],X.prototype,"reviewPick");ee([I()],X.prototype,"_dims");ee([I()],X.prototype,"_simPopover");ee([I()],X.prototype,"_copied");const It=le`
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
`,zt=le`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Fd=Object.defineProperty,we=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Fd(e,t,o),o};const Ko=7,Id=4,Sr=class Sr extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this.alreadyExistedCount=0,this.showMinimize=!1,this._maxThumbs=Ko,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?Id:Ko;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}_minimize(){this.dispatchEvent(new CustomEvent("minimize-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),t=this.thumbnails.length-this._maxThumbs,i=this.fileCount>0,o=this.failedFiles.length>0,s=o&&!i,n=i&&!o&&this.alreadyExistedCount>=this.fileCount,a=this.fileCount-this.alreadyExistedCount;return f`
      ${this.showMinimize?f`<button class="minimize-btn" title=${this.t("minimizeAndContinue","Minimize & continue in background")} @click=${this._minimize}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>`:S}
      <button class="close-btn" title=${this.t("close","Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s?"error":o?"warning":n?"info":""}">
          ${s?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:o?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:n?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>`}
        </div>
        <div class="title">${s?this.t("uploadFailed","Upload failed"):o?this.t("partiallyUploaded","Partially uploaded"):n?this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):this.t("uploadedSuccessfullyCount",{count:a,defaultValue_one:"{{count}} file uploaded successfully!",defaultValue_other:"{{count}} files uploaded successfully!"})}</div>
        <div class="subtitle">${s?this.t("filesCouldNotBeUploaded",{count:this.failedFiles.length,defaultValue_one:"File could not be uploaded",defaultValue_other:"Files could not be uploaded"}):o?this.t("partialUploadSummary","{{uploaded}} uploaded, {{failed}} failed",{uploaded:a,failed:this.failedFiles.length}):n?this.t("alreadyInLibrarySubtitle",{count:this.alreadyExistedCount,defaultValue_one:"It’s ready to use — nothing new to upload",defaultValue_other:"They’re ready to use — nothing new to upload"}):this.t("allFilesReady","All files are ready for use")}</div>

        ${e.length>0?f`
              <div class="thumbs">
                ${e.map(l=>f`<img class="thumb" src=${l} alt="" />`)}
                ${t>0?f`<div class="thumb-more">+${t}</div>`:S}
              </div>
            `:S}

        ${i&&!n?f`<div class="summary">${this.t("uploadedSize","{{size}} uploaded",{size:Fe(this.totalSize)})}</div>`:S}

        ${this.alreadyExistedCount>0&&!n?f`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:S}

        ${o?f`
            <div class="failed-list">
              ${this.failedFiles.map(l=>f`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${l.name}</div>
                    <div class="failed-reason">${l.error}</div>
                  </div>
                  <button class="failed-retry" title=${this.t("retry","Retry")} @click=${()=>this._retryFile(l.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `:S}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore","Upload more")}</button>
          ${i||o?f`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles","Review files ({{count}})",{count:this.fileCount+this.failedFiles.length})}</button>`:S}
          ${o?f`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll","Retry all ({{count}})",{count:this.failedFiles.length})}</button>`:S}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Sr.styles=[It,zt,le`
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

    .icon.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
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

    /* --- Info banner (design-system "status-info" component) --- */
    .info-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
      width: 100%;
      max-width: 400px;
      min-height: 36px;
      padding: 8px 16px;
      border-radius: 8px;
      /* Inset shadow draws the 1px border WITHOUT adding to the box height,
         so the banner stays exactly 36px tall (8 + 20 line + 8) — matching the
         Figma inside-stroke. A real border would add 2px → 38px. */
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: -8px;
      margin-bottom: 22px;
    }

    .info-note svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
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

    .minimize-btn {
      position: absolute;
      top: 12px;
      right: 56px;
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

    .minimize-btn svg { width: 16px; height: 16px; }

    .minimize-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

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
  `];let ge=Sr;we([O({attribute:!1})],ge.prototype,"t");we([O({type:Number})],ge.prototype,"fileCount");we([O({type:Number})],ge.prototype,"totalSize");we([O({type:Array})],ge.prototype,"thumbnails");we([O({type:String})],ge.prototype,"primaryLabel");we([O({type:Array})],ge.prototype,"failedFiles");we([O({type:Number})],ge.prototype,"alreadyExistedCount");we([O({type:Boolean})],ge.prototype,"showMinimize");we([I()],ge.prototype,"_maxThumbs");var zd=Object.defineProperty,Dt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&zd(e,t,o),o};const $r=class $r extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return f`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t("back","Back")}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          ${this.t("back","Back")}
        </button>
        <span class="title">${this.t("lastUpload","Last upload")} <span class="count">— ${this.t("fileCount",{count:t,defaultValue_one:"{{count}} file",defaultValue_other:"{{count}} files"})}</span></span>
        <div class="filters">
          <button class="chip ${this._filter==="all"?"active":""}" @click=${this._setFilter("all")}>
            ${this.t("all","All")} (${t})
          </button>
          <button class="chip ${this._filter==="success"?"active":""}" @click=${this._setFilter("success")}>
            ✓ ${this.t("uploaded","Uploaded")} (${this._successCount})
          </button>
          ${this._failedCount>0?f`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:S}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?f`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:f`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};$r.styles=le`
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
  `;let Ue=$r;Dt([O({attribute:!1})],Ue.prototype,"t");Dt([O({attribute:!1})],Ue.prototype,"files");Dt([O({type:Boolean})],Ue.prototype,"showLocateButton");Dt([O({type:Boolean})],Ue.prototype,"showCopyCdnButton");Dt([I()],Ue.prototype,"_filter");customElements.define("sfx-last-upload-review",Ue);var Dd=Object.defineProperty,pe=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Dd(e,t,o),o};const Cr=class Cr extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.completedCount=0,this.uploadProgress=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return this.selectMode?this._renderSelectToolbar():f`
      ${e?f`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label=${this.t("uploadProgress","Upload progress")}
              >
                <div
                  class="progress-fill"
                  ${Q({width:`${this.uploadProgress}%`})}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files","files")}</span
              >
            </div>
          `:S}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?f`
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
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">${this.t("fillMetadata","Fill Metadata")}</span>
                </button>
              `:S}
          ${this.showCheckSimilar&&this.uploadState==="idle"?f`
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
              `:S}
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
          <button class="btn-sec" @click=${this._addMore} aria-label=${this.t("addMore","Add more")}>
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
          ${this.failedCount>0?f`
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
                  <span class="btn-label">${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}</span>
                </button>
              `:S}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return f`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t("selectImagesToCheck","Select images to check for similar assets")}</b>
            <span>${t>0?this.t("selectImagesHintMax","Pick up to {{max}}, then click Check",{max:t}):this.t("selectImagesHint","Pick one or more, then click Check")}</span>
          </div>
        </div>
        <div class="right">
          ${t>0?f`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
              >${e}/${t}</span>`:S}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
          </button>
          <button class="btn-ghost" @click=${this._checkSimilarCancel} aria-label=${this.t("cancel","Cancel")}>
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${e===0}
            aria-label=${this.t("checkSimilar","Check similar")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
          </button>
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i=["btn-primary",t?"done-state":""].filter(Boolean).join(" "),o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return f`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?f`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?f`
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
            `:f`
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
    `}};Cr.styles=[It,zt,le`
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

      .select-count {
        font-size: 13px;
        font-weight: 500;
        color: var(--sfx-up-text-secondary, #475569);
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
      .sim-ico svg { width: 16px; height: 16px; }

      .sim-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
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
      .select-all:hover { background: var(--sfx-up-primary-bg, #eff6ff); }

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
    `];let se=Cr;pe([O({attribute:!1})],se.prototype,"t");pe([O({type:String})],se.prototype,"uploadState");pe([O({type:Number})],se.prototype,"fileCount");pe([O({type:Number})],se.prototype,"totalSize");pe([O({type:Number})],se.prototype,"failedCount");pe([O({type:Boolean})],se.prototype,"showFillMetadata");pe([O({type:Boolean})],se.prototype,"requireMetadataFirst");pe([O({type:Number})],se.prototype,"completedCount");pe([O({type:Number})],se.prototype,"uploadProgress");pe([O({type:Boolean})],se.prototype,"showCheckSimilar");pe([O({type:Boolean})],se.prototype,"selectMode");pe([O({type:Number})],se.prototype,"selectedCount");pe([O({type:Number})],se.prototype,"maxSelection");pe([O({type:Boolean})],se.prototype,"allSelected");const Md='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function vr(r,e){return t=>{if(t.key!=="Tab")return;const i=r();if(!i)return;const o=i.querySelector(e);if(!o)return;const s=Array.from(o.querySelectorAll(Md));if(s.length===0)return;const n=s[0],a=s[s.length-1],l=i.activeElement;t.shiftKey?(l===n||!o.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!o.contains(l))&&(t.preventDefault(),n.focus())}}var jd=Object.defineProperty,gi=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&jd(e,t,o),o};const Er=class Er extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=vr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return f`
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
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
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
              <label for="nameInput">${this.t("fileName","File name")} <span class="optional">(${this.t("optional","optional")})</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t("fileNamePlaceholder","document.pdf")}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?f`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};Er.styles=[It,zt,le`
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

  `];let qe=Er;gi([O({attribute:!1})],qe.prototype,"t");gi([I()],qe.prototype,"_url");gi([I()],qe.prototype,"_name");gi([I()],qe.prototype,"_error");var Bd=Object.defineProperty,Mt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Bd(e,t,o),o};const Pr=class Pr extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=vr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,s;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(s=this.shadowRoot)==null?void 0:s.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return f`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">${this.t("camera","Camera")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?f`<div class="error">${this._error}</div>`:this._captured?f`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
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
    `}};Pr.styles=[It,zt,le`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
  `];let Re=Pr;Mt([O({attribute:!1})],Re.prototype,"t");Mt([I()],Re.prototype,"_stream");Mt([I()],Re.prototype,"_error");Mt([I()],Re.prototype,"_captured");Mt([I()],Re.prototype,"_previewUrl");var Nd=Object.defineProperty,lt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Nd(e,t,o),o};const Ur=class Ur extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=vr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var s;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(s=this._stream)==null||s.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return f`
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
            <div class="title">${this.t("screenCast","Screen cast")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?f`<div class="error">${this._error}</div>`:this._recordedBlob?f`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?f`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
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
                        <div class="start-text">${this.t("screenCastPrompt","Share your screen to record a video that will be added to your uploads.")}</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>${this.t("startRecording","Start recording")}</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};Ur.styles=[It,zt,le`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
  `];let ye=Ur;lt([O({attribute:!1})],ye.prototype,"t");lt([I()],ye.prototype,"_stream");lt([I()],ye.prototype,"_recording");lt([I()],ye.prototype,"_error");lt([I()],ye.prototype,"_recordedBlob");lt([I()],ye.prototype,"_previewUrl");var Hd=Object.defineProperty,br=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Hd(e,t,o),o};const Rr=class Rr extends oe{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
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
              <button class="toast-close" @click=${()=>this._dismiss(e.id)} aria-label=${this.t("dismiss","Dismiss")}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `)}
      </div>
    `}};Rr.styles=le`
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
  `;let st=Rr;br([O({attribute:!1})],st.prototype,"t");br([O({type:Number})],st.prototype,"duration");br([I()],st.prototype,"_toasts");customElements.define("sfx-toast",st);var qd=Object.defineProperty,N=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&qd(e,t,o),o};const Yo=new Set(["unsplash"]),_e=10,Vd=3,Kd=["auto","mobile","tablet","desktop","hq","sample"],Yd=["hls"],We={isTus:!1,tusUploadUrl:null,relativeFolder:""},Wo=new Set(["complete","failed","error","cancelled","rejected"]);var K;const B=(K=class extends oe{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataDependencies=[],this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i})},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=mt,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail;if(hd(i)){const a=gd(i);if(!a)return;const l=o===""||o==null,c=a==="position"?{position:l?void 0:Number(o)}:{ref:l?void 0:String(o)};this.updateFileProduct(t,c);return}const s=this._store.getState().files.get(t);if(!s)return;const n=new Map(this._store.getState().files);n.set(t,{...s,meta:{...s.meta,[i]:o}}),this._store.setState({files:n}),this._applyDependencySetValuesPrefill(t)},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var o;const i=(o=this.config)==null?void 0:o.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(s){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",s),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,s;const t=this._mergedSources.find(n=>n.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(n){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,n)}return}if(e==="device"){const n=this.shadowRoot.querySelector("sfx-drop-zone");n==null||n.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((s=(o=this.config)==null?void 0:o.connectors)==null?void 0:s.providers)??[]).includes(e)){if(Yo.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:a}=await V(async()=>{const{SfxSearchProviderBrowser:l}=await import("./search-provider-browser-D45f9Dtb.js");return{SfxSearchProviderBrowser:l}},[]);customElements.define("sfx-search-provider-browser",a)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:a}=await V(async()=>{const{SfxProviderBrowser:l}=await import("./provider-browser-CjukYMVB.js");return{SfxProviderBrowser:l}},[]);customElements.define("sfx-provider-browser",a)}this._activeConnector=e}},this._onUrlSubmit=e=>{var p,u,m;this._showUrlDialog=!1;const{url:t,name:i}=e.detail,o=(p=this.config)==null?void 0:p.callbacks,s=Do(i),n=s.startsWith("image/");if(Ui(i))return;const a=this._store.getState();if([...a.files.values()].some(g=>g.name===i&&g.status!=="rejected"&&g.status!=="cancelled"))return;const c=Ri({name:i,size:0,type:s},a.restrictions,a.files);if(c){const g={id:Ye(),status:"rejected",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...We};Ve(this._store,g),this._dispatchPublic(j.FILE_REJECTED,{file:g,reason:c}),(u=o==null?void 0:o.onFileRejected)==null||u.call(o,g,c);return}const d={id:Ye(),status:"idle",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:n?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...We};Ve(this._store,d),this._dispatchPublic(j.FILE_ADDED,{file:d}),(m=o==null?void 0:o.onFileAdded)==null||m.call(o,d),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,o,s;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(j.FILE_PREVIEW,{file:t}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFilePreview)==null||s.call(o,t))},this._onFillMetadata=()=>{var t,i,o,s;const e=[...this._store.getState().files.values()].filter(n=>K._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(j.FILL_METADATA,{files:e}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFillMetadata)==null||s.call(o,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=_e)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,_e).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var o,s,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(j.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onFileCopyCdn)==null||n.call(s,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:s}of t){const n=i.get(o);n&&i.set(o,{...n,meta:{...n.meta,...s}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,o=new Map(i);for(const{fileId:s,taxonodes:n}of t){const a=i.get(s);if(!a||!K._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[c,d]of Object.entries(n))d==null?delete l[c]:l[c]=d;o.set(s,{...a,taxonodes:l})}this._store.setState({files:o})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=(e=!1)=>{var o,s,n;const t=(o=this.config)==null?void 0:o.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),e||(s=this._engine)==null||s.cancelAll();const i=[...this._store.getState().files.values()];for(const a of i)a.previewUrl&&URL.revokeObjectURL(a.previewUrl),e||(this._dispatchPublic(j.FILE_REMOVED,{file:a}),(n=t==null?void 0:t.onFileRemoved)==null||n.call(t,a));this._revokeVideoBlobUrls();for(const a of this._rejectedTimers.values())clearTimeout(a);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=ut.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&ut.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var o,s,n,a;const t=(o=this.config)==null?void 0:o.callbacks,i=((s=this.config)==null?void 0:s.preserveFolderStructure)!==!1;for(const l of e.detail.files){if(Ui(l.name))continue;const c=i?l.relativeFolder??"":"",d=this._store.getState();if([...d.files.values()].some(x=>x.name===l.name&&x.size===l.size&&x.relativeFolder===c&&x.status!=="rejected"&&x.status!=="cancelled"))continue;const u=l.thumbnail?this._transformRemoteThumbnail(l.thumbnail,{source:"connector",providerId:l.provider}):null,m=Ri({name:l.name,size:l.size,type:l.mimeType},d.restrictions,d.files);if(m){const x={id:Ye(),status:"rejected",file:null,remoteUrl:null,name:l.name,size:l.size,type:l.mimeType,previewUrl:u,duration:null,progress:0,speed:0,bytesUploaded:0,error:m,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:l,...We,relativeFolder:c};Ve(this._store,x),this._dispatchPublic(j.FILE_REJECTED,{file:x,reason:m}),(n=t==null?void 0:t.onFileRejected)==null||n.call(t,x,m);continue}const g={id:Ye(),status:"idle",file:null,remoteUrl:null,name:l.name,size:l.size,type:l.mimeType,previewUrl:u,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:l,...We,relativeFolder:c};Ve(this._store,g),this._dispatchPublic(j.FILE_ADDED,{file:g}),(a=t==null?void 0:t.onFileAdded)==null||a.call(t,g)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,o,s,n;this._dispatchPublic(j.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),(((s=this.config)==null?void 0:s.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(j.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,i,o;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(j.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,o;(e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(j.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(j.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{var t;e.target===e.currentTarget&&(this._phase==="uploading"&&((t=this.config)!=null&&t.minimizeOnUpload)?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&Ms(t).then(({files:i,hadDirectories:o})=>{if(i.length===0){o&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:o}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const o=((t=this.config)==null?void 0:t.mode)??"modal",s=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(s==="close"||s==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),s=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,s))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=K._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=i===-1?1:(i+1)%t.length;this._fsZoom=t[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=ca(),this._storeCtrl=new da(this,this._store)}get _lastUploadId(){var i,o;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,o;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(s=>s.type===Gi.LANGUAGES);return((o=t==null?void 0:t.variants.find(Boolean))==null?void 0:o.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,o,s;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((o=this.config)==null?void 0:o.locale)??void 0;return{...bd((s=this._metadataSchema)==null?void 0:s.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var o,s,n;const t=(((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups)??[]).find(a=>a.type===Gi.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(s=this.config)==null?void 0:s.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var o;const e=(o=this.config)==null?void 0:o.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}open(){var t,i,o,s,n,a,l,c,d;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||o.call(i),this._dispatchPublic(j.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(j.OPEN,{}),e&&((d=(c=(l=this.config)==null?void 0:l.callbacks)==null?void 0:c.onRestore)==null||d.call(c),this._dispatchPublic(j.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(j.CLOSE,{}),this.requestUpdate()}upload(){var s,n,a,l,c,d,p,u,m,g;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(x=>x.status==="idle"||x.status==="queued");if((n=(s=this.config)==null?void 0:s.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(j.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});if(!this.dispatchEvent(t))return;this._stripHiddenFieldsForUpload();const o=[...this._store.getState().files.values()].filter(x=>x.status==="idle"||x.status==="queued");this._dispatchPublic(j.UPLOAD_STARTED,{files:o}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onUploadStarted)==null||c.call(l,o),this._engine.uploadAll(),(d=this.config)!=null&&d.minimizeOnUpload&&((p=this.config)==null?void 0:p.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(g=(m=(u=this.config)==null?void 0:u.callbacks)==null?void 0:m.onMinimize)==null||g.call(m),this._dispatchFloatGeometryEvent(j.MINIMIZE),this.requestUpdate())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,o=new Map(i);let s=!1;for(const n of e){const a=i.get(n.id);a&&(o.set(n.id,{...a,...n}),s=!0)}s&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!K._MODIFIABLE_STATUSES.has(s.status))return;const n=new Map(o);n.set(e,{...s,meta:t!=null?{...s.meta,...t}:s.meta,tags:i??s.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,meta:n,tags:a}of e){const l=t.get(s);!l||!K._MODIFIABLE_STATUSES.has(l.status)||(i.set(s,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!K._MODIFIABLE_STATUSES.has(s.status))return;const n={...s.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(o);a.set(e,{...s,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const o=this._store.getState().files,s=new Map(o);let n=!1;for(const a of e){const l=o.get(a);if(!l||!K._MODIFIABLE_STATUSES.has(l.status))continue;const c={...l.taxonodes??{}};i==null?delete c[t]:c[t]=i,s.set(a,{...l,taxonodes:c}),n=!0}n&&this._store.setState({files:s})}updateFileProduct(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!K._MODIFIABLE_STATUSES.has(o.status))return;const s=new Map(i);s.set(e,{...o,product:lo(o.product,t)}),this._store.setState({files:s})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,product:n}of e){const a=t.get(s);!a||!K._MODIFIABLE_STATUSES.has(a.status)||(i.set(s,{...a,product:lo(a.product,n)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:calc(24px + var(--sfx-up-float-offset-y, 0px)); right:calc(24px + var(--sfx-up-float-offset-x, 0px)); z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; transition:bottom .25s ease, right .25s ease; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-icon.info { background:var(--sfx-up-info-bg, rgba(0,144,228,0.08)); color:var(--sfx-up-info, #0090e4); }
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
      [data-sfx-upload-float] .float-item-done.info { background:var(--sfx-up-info-bg, rgba(0,144,228,0.08)); color:var(--sfx-up-info, #0090e4); }
      [data-sfx-upload-float] .float-item-done.info svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-info-note { display:flex; align-items:center; gap:8px; margin:0 14px 10px; padding:6px 10px; border-radius:8px; box-shadow:inset 0 0 0 1px var(--sfx-up-info-border, rgba(0,144,228,0.20)); background:var(--sfx-up-info-bg, rgba(0,144,228,0.04)); color:var(--sfx-up-info-text, #024a71); font-size:12px; line-height:16px; }
      [data-sfx-upload-float] .float-info-note svg { width:14px; height:14px; flex-shrink:0; color:var(--sfx-up-info, #0090e4); }
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
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
      [data-sfx-upload-float] .float-collapsed-icon.done { color:#22c55e; }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:#ef4444; }
      [data-sfx-upload-float] .float-collapsed-icon.info { color:var(--sfx-up-info, #0090e4); }
      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }
      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }
      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }
      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sfxSpin { to{transform:rotate(360deg)} }
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),Ee(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(j.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(Ee(S,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&ut.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Gn(e||"en");i&&t.on("missingKey",(s,n,a,l,c,d)=>{const p=a.match(/_(?:zero|one|two|few|many|other)$/),u=p&&(d!=null&&d[`defaultValue${p[0]}`])?String(d[`defaultValue${p[0]}`]):l;Zn.handleMissingKey(a,u,n)});const o=(s,n,a)=>typeof n=="string"?t.t(s,n,a??{}):t.t(s,n??{});this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o,s;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._hostStyleObserver)==null||e.disconnect(),this._hostStyleObserver=null,(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(s=this._engine)==null||s.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const s=this._store.getState().queueConfig;t.queueConfig={...s,concurrency:e.concurrency}}if(e.autoProceed!=null){const s=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...s,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const s=i.defaults;s.resize!==void 0&&(this._setResize=s.resize),s.maxWidth!==void 0&&(this._setMaxW=s.maxWidth),s.maxHeight!==void 0&&(this._setMaxH=s.maxHeight),s.transcode!==void 0&&(this._setTranscode=s.transcode),s.resolution!==void 0&&(this._setResolution=s.resolution),s.protocol!==void 0&&(this._setProtocol=s.protocol),s.resumable!==void 0&&(this._setResumable=s.resumable)}const o=this._lastUploadId;this._hasStoredReview=o!=null&&ut.exists(o),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,s,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=gr(t.container,e.apiDomain),this._authHeaders=Ki(t),this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(o=e.connectors)==null?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const l=await Ec(t,e.apiDomain);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,o;const t=e instanceof Error?e.message:String(e);return(o=(i=this.config)==null?void 0:i.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var a,l,c,d;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let o=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;o||(o={})}if(!o)return;const s=(d=(c=this.config)==null?void 0:c.connectors)==null?void 0:d.companionUrl;if(!s)return o;const n=s.replace(/\/+$/,"");return{...o,endpoint:o.endpoint??`${n}/files`,jsonBase:o.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return o=>{const s={},n=fe(o);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(s.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(s.postprocess="transcode",s["video-resolution"]=this._setResolution,s.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(s.opt_force_name=l)}const a=i==null?void 0:i(o);return a&&Object.assign(s,a),Object.keys(s).length>0?s:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new $c(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,o)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:o})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:i,fetchDependencies:o,createTagsAutocomplete:s,createTaxonomyService:n,createUltratagsService:a}=await V(async()=>{const{fetchMetadataSchema:p,fetchDependencies:u,createTagsAutocomplete:m,createTaxonomyService:g,createUltratagsService:x}=await import("./index-CGRPDWu0.js");return{fetchMetadataSchema:p,fetchDependencies:u,createTagsAutocomplete:m,createTaxonomyService:g,createUltratagsService:x}},[]),[l,c]=await Promise.all([i(this._apiBase,this._authHeaders,t.projectUuid,t),o(t.projectUuid,this._authHeaders,{hubApiBase:t.hubApiBase,hubHeaders:t.hubHeaders}).catch(p=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",p),[]))]);this._metadataDependencies=c,this._metadataAutocomplete=s(this._apiBase,this._authHeaders),this._taxonomyService=n(this._apiBase,this._authHeaders),this._ultratagsService=a(this._apiBase,this._authHeaders),this._metadataSchema=l.productsEnabled?vd(l,this._storeCtrl.state.t):l;const d=this._metadataSchema.fields.filter(p=>Xi(p,t)).map(p=>p.key);this._dispatchPublic(j.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:d}),this._applyDependencySetValuesPrefill()}catch(i){console.error("[sfx-uploader] Failed to load metadata schema:",i),this._showToast("Failed to load metadata schema","warning")}}_applyDependencySetValuesPrefill(e){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,i=this._store.getState().files;let o=!1;const s=new Map(i),n=e?(()=>{const a=i.get(e);return a?[a]:[]})():i.values();for(const a of n){if(!K._MODIFIABLE_STATUSES.has(a.status))continue;const l=Xt({mime:a.type??"",meta:a.meta},t,this._metadataDependencies);if(l.size===0)continue;const c={};for(const d of t.fields){const p=l.get(d.ckey);(p==null?void 0:p.setValue)!==void 0&&(p.hidden||ai(a.meta[d.key])&&(c[d.key]=cd(d,p.setValue)))}Object.keys(c).length!==0&&(s.set(a.id,{...a,meta:{...a.meta,...c}}),o=!0)}o&&this._store.setState({files:s})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,t=this._store.getState().files;let i=!1;const o=new Map(t);for(const s of t.values()){if(!K._MODIFIABLE_STATUSES.has(s.status))continue;const n=Xt({mime:s.type??"",meta:s.meta},e,this._metadataDependencies),a=pd(s.meta,e,n);a!==s.meta&&(o.set(s.id,{...s,meta:a}),i=!0)}i&&this._store.setState({files:o})}get _renameAllowed(){var e,t;return(((e=this.config)==null?void 0:e.allowFileRename)??!0)&&((t=this.config)==null?void 0:t.forceName)==null}_onPreviewRename(e,t){if(!this._renameAllowed)return;const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const s=new Map(this._store.getState().files);s.set(e,{...o,name:i}),this._store.setState({files:s})}_previewMeta(e){var t;return(t=this._metadataSchema)!=null&&t.productsEnabled?{...e.meta,[rt]:e.product.ref,[ot]:e.product.position}:e.meta}_resolvedSchemaFor(e){return!this._metadataSchema||this._metadataDependencies.length===0?null:Xt({mime:e.type??"",meta:e.meta},this._metadataSchema,this._metadataDependencies)}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema||e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0||this._metadataSchema.forceFillingOnUpload||e.requiredFields&&e.requiredFields.length>0?!0:this._metadataSchema.fields.some(i=>!!i.required)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Ed(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?Rd(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var o;const e=this._isPillExpanded?"card":"pill",t=(o=this._portalContainer)==null?void 0:o.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var o,s,n,a,l,c,d,p,u,m;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(o=this.config)==null?void 0:o.callbacks;for(const[g,x]of e.files){const $=t.files.get(g);if(!$){x.relativeFolder&&this._firedFolders.delete(x.relativeFolder);continue}if($.status!==x.status)switch(x.status){case"uploading":$.status==="paused"&&(this._dispatchPublic(j.UPLOAD_RESUMED,{file:x}),(s=i==null?void 0:i.onUploadResumed)==null||s.call(i,x));break;case"complete":x.response&&(this._dispatchPublic(j.UPLOAD_COMPLETE,{file:x,response:x.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,x,x.response));break;case"error":case"failed":{const L=new Error(x.error??"Upload failed");this._dispatchPublic(j.UPLOAD_ERROR,{file:x,error:L}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,x,L);break}case"retrying":this._dispatchPublic(j.UPLOAD_RETRY,{file:x,attempt:x.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,x,x.retryCount);break;case"paused":this._dispatchPublic(j.UPLOAD_PAUSED,{file:x}),(c=i==null?void 0:i.onUploadPaused)==null||c.call(i,x);break}x.status==="uploading"&&$.progress!==x.progress&&(this._dispatchPublic(j.UPLOAD_PROGRESS,{file:x,progress:x.progress,speed:x.speed}),(d=i==null?void 0:i.onUploadProgress)==null||d.call(i,x,x.progress,x.speed)),x.relativeFolder&&$.status!==x.status&&Wo.has(x.status)&&!this._firedFolders.has(x.relativeFolder)&&this._maybeDispatchFolderComplete(x.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const g=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=g),this._dispatchPublic(j.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:g}),(p=i==null?void 0:i.onTotalProgress)==null||p.call(i,e.totalProgress,e.totalSpeed,g)}if(t.isUploading&&!e.isUploading){const g=[...e.files.values()];if(!g.some($=>$.status==="cancelled")){const $=g.filter(w=>w.status==="complete"),L=g.filter(w=>w.status==="failed"||w.status==="error");if($.length===0&&L.length===0)return;const k=this._lastUploadId;if(k!=null){const w=[...$,...L];ut.save(k,w),this._hasStoredReview=w.length>0}this._dispatchPublic(j.ALL_COMPLETE,{successful:$,failed:L}),(u=i==null?void 0:i.onAllComplete)==null||u.call(i,$,L);const _=(m=this.config)==null?void 0:m.closeOnComplete;if(_!==!1&&_!=null){const w=typeof _=="number"?_:1500;this._closeOnCompleteTimer=setTimeout(()=>{var b,U,P;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(j.COMPLETE_ACTION,{}),(P=(U=(b=this.config)==null?void 0:b.callbacks)==null?void 0:U.onCompleteAction)==null||P.call(U),this.close())},w)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const o=[...t.files.values()].filter(l=>l.relativeFolder===e);if(o.length===0||o.some(l=>!Wo.has(l.status)))return;const s=o.filter(l=>l.status==="complete"),n=o.filter(l=>l.status==="failed"||l.status==="error");s.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(j.FOLDER_COMPLETE,{folder:e,successful:s,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,s,n))}get _mergedSources(){var p;const e=(p=this.config)==null?void 0:p.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=mt.filter(u=>u.id!=="url"),this._cachedSources;const t=e.providers.length>0?Vc(e.providers):[],i=e.customSources??[],o=e.coreSources?new Set(e.coreSources):null,s=o?mt.filter(u=>o.has(u.id)):mt,n=e.companionUrl?s:s.filter(u=>u.id!=="url"),a=n.filter(u=>u.id==="device"||u.id==="url"),l=n.filter(u=>u.id!=="device"&&u.id!=="url"),c=new Set,d=[];for(const u of[...a,...t,...l,...i])if(!c.has(u.id)){if(K._RESERVED_IDS.has(u.id)&&u.onActivate){console.warn(`[sfx-uploader] Custom source id "${u.id}" conflicts with a built-in source and was skipped.`);continue}c.add(u.id),d.push(u)}return this._cachedSources=d,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>i.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var n,a,l,c,d;const t=(n=this.config)==null?void 0:n.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1;let o=0,s=!1;for(const p of e){if(Ui(p.name))continue;if(s){o++;continue}const u=i?yc(bc(p)):"",m=this._store.getState();if([...m.files.values()].some(_=>_.name===p.name&&_.size===p.size&&_.relativeFolder===u&&_.status!=="rejected"&&_.status!=="cancelled"))continue;const x=p.type||Do(p.name),$=Ri({name:p.name,size:p.size,type:x},m.restrictions,m.files);if($){if(qc($)){s=!0,o++;continue}const _=x.startsWith("image/")&&!ke(x)?URL.createObjectURL(p):null,w={id:Ye(),status:"rejected",file:p,remoteUrl:null,name:p.name,size:p.size,type:x,previewUrl:_,duration:null,progress:0,speed:0,bytesUploaded:0,error:$,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...We,relativeFolder:u};Ve(this._store,w),this._dispatchPublic(j.FILE_REJECTED,{file:w,reason:$}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,w,$);const b=(c=this.config)==null?void 0:c.rejectedFileAutoRemoveDelay,U=b===!1||b===0||b===void 0?0:b;if(U>0){const P=w.id,z=setTimeout(()=>{this._rejectedTimers.delete(P);const F=this._store.getState().files.get(P);F&&F.status==="rejected"&&ao(this._store,P)},U);this._rejectedTimers.set(P,z)}continue}let L=null;x.startsWith("image/")&&!ke(x)&&(L=URL.createObjectURL(p));const k={id:Ye(),status:"idle",file:p,remoteUrl:null,name:p.name,size:p.size,type:x,previewUrl:L,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...We,relativeFolder:u};if(Ve(this._store,k),this._dispatchPublic(j.FILE_ADDED,{file:k}),(d=t==null?void 0:t.onFileAdded)==null||d.call(t,k),p.type.startsWith("video/")){Hc(p).then(w=>{if(!w)return;const b=this._store.getState(),U=b.files.get(k.id);if(U){const P=new Map(b.files);P.set(k.id,{...U,previewUrl:w}),this._store.setState({files:P})}else URL.revokeObjectURL(w)});const _=document.createElement("video");_.preload="metadata",_.src=URL.createObjectURL(p),_.onerror=()=>{URL.revokeObjectURL(_.src)},_.onloadedmetadata=()=>{const w=_.duration;if(URL.revokeObjectURL(_.src),!isFinite(w))return;const b=this._store.getState(),U=b.files.get(k.id);if(U){const P=new Map(b.files);P.set(k.id,{...U,duration:w}),this._store.setState({files:P})}}}}if(o>0){const p=this._storeCtrl.state.t,u=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(p("tooManyFilesSkipped",{count:o,max:u,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var s,n,a,l,c;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const d=this._videoBlobUrls.get(t.file);d&&(URL.revokeObjectURL(d),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((s=this._engine)==null||s.cancelFile(e)),ao(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const d=[...this._store.getState().files.values()];this._previewFileId=d.length>0?d[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(j.FILE_REMOVED,{file:i}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||c.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>fe(e)==="image"&&!ke(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,o,s;const e=(o=(i=this.config)==null?void 0:i.auth)==null?void 0:o.container,t=(s=this._authHeaders)==null?void 0:s["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var s,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Io((n=(s=this.config)==null?void 0:s.similarityCheck)==null?void 0:n.confidence),o=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),zo(e,{...t,threshold:i,endpoint:o}).then(c=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,c)}).catch(c=>{console.error("[sfx-uploader] Similarity check failed for",e.name,c),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var u,m,g,x;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map($=>$.id);const i=Io((m=(u=this.config)==null?void 0:u.similarityCheck)==null?void 0:m.confidence),o=(x=(g=this.config)==null?void 0:g.similarityCheck)==null?void 0:x.endpoint,s=new AbortController;this._similarAbort=s;const n=[...e];let a=0,l=0;const c=e.length,d=()=>{if(!s.signal.aborted){if(!this._previewFileId){const $=e.find(L=>{var k;return(((k=this._similarResults.get(L.id))==null?void 0:k.length)??0)>0});$&&(this._previewFileId=$.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},p=()=>{if(!s.signal.aborted)for(;a<Vd&&n.length>0;){const $=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add($.id),zo($,{...t,threshold:i,endpoint:o,signal:s.signal}).then(L=>{s.signal.aborted||(this._similarMarkInactive($.id),this._similarSetResults($.id,L))}).catch(L=>{s.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",$.name,L),this._similarMarkInactive($.id),this._similarSetResults($.id,[]))}).finally(()=>{s.signal.aborted||(a-=1,l+=1,l===c?d():p())})}};p()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),o=i>0?t.slice(i+1).toUpperCase():"";return o&&o.length<=5?o:""}_locateFile(e){var s,n,a;if(!e)return;const t=aa(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(j.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),o=(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||o===!1)&&t&&window.location.assign(t)}render(){var o;const e=((o=this.config)==null?void 0:o.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?f`
        ${this._isOpen&&!this._isMinimized?f`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:S}
        ${this._renderFsOverlay()}
      `:f`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return S;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);return f`
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
        ${this._fullscreenVideoFile?f`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${o=>o.stopPropagation()}></video>`:f`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${Q(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=K._FS_ZOOM_LEVELS[K._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=K._FS_ZOOM_LEVELS[K._FS_ZOOM_LEVELS.length-1]?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${e("close","Close")}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${i<=0} @click=${o=>{o.stopPropagation(),this._navigateFs(-1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${i>=t.length-1} @click=${o=>{o.stopPropagation(),this._navigateFs(1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `}_renderInlineHeader(e){return f`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?f`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:S}
          ${e.title?f`<h2 class="inline-header-title">${e.title}</h2>`:S}
        </div>
        ${e.description?f`<div class="inline-header-desc">${e.description}</div>`:S}
      </div>
    `}_renderHeader(){var L,k,_,w,b,U;if(this._phase==="complete")return S;const e=this._storeCtrl.state.t,t=((L=this.config)==null?void 0:L.mode)??"modal";if(this._phase==="uploading"){const F=[...this._storeCtrl.state.files.values()].filter(ue=>ue.status!=="rejected"&&ue.status!=="cancelled"),T=F.length,Z=F.filter(ue=>ue.status==="complete").length;return f`
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
                ${e("uploadingFiles",{count:T,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:Z,total:T})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:Pi(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(t==="inline"&&((k=this.config)!=null&&k.inlineHeader))return S;const i=((_=this.config)==null?void 0:_.header)??(t==="modal"?"close":!0);if(i===!1)return S;const o=t==="modal"?this._onModalDismiss:this._onInlineDismiss,s=i==="back"?f`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
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
          </button>`:S,n=(w=this.config)==null?void 0:w.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,c=[...this._storeCtrl.state.files.values()],d=c.some(P=>fe(P)==="image"&&!ke(P.type)),p=c.some(P=>fe(P)==="pdf"),u=c.some(P=>fe(P)==="vid"),g=a&&(d||p||u||l)?f`<button
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
          </button>`:S,x=(U=(b=this._metadataSchema)==null?void 0:b.regionalVariantsGroups)!=null&&U.length?f`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:S,$=i==="close"?f`<button
            class="header-btn header-btn-close"
            aria-label="Close"
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
          </button>`:S;return f`
      <div class="header">
        ${s}
        ${i!=="back"?f` <div class="header-icon">
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
            </div>`:S}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${x}
        ${g}
        ${$}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var d;const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=e.filter(p=>p.status!=="rejected"&&p.status!=="cancelled"),n=s.length,a=s.filter(p=>p.status==="complete").length,l=s.filter(p=>Vi(p.status)),c=[];return n>1&&c.push(i("nOfNComplete","{{completed}} of {{total}} complete",{completed:a,total:n})),this._lastEta>0&&c.push(i("etaLeft","~{{eta}} left",{eta:Pi(this._lastEta)})),f`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          ${i("uploadingFiles",{count:n,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
        </div>
        ${c.length>0?f`<div class="upload-overlay-subtitle">${c.join(" · ")}</div>`:S}
        ${n>1?f`<div class="upload-overlay-bar">
              <div class="upload-overlay-bar-fill" ${Q({width:`${o}%`})}></div>
            </div>`:S}
        ${l.length>0?this._renderOverlayFiles(l,i):S}
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${i("cancelUpload","Cancel upload")}
          </button>
          ${(d=this.config)!=null&&d.minimizeOnUpload?f`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${i("minimizeAndContinue","Minimize & continue in background")}
              </button>`:S}
        </div>
      </div>
    `}_renderOverlayFiles(e,t){const i=[...e].reverse();return f`
      <div class="upload-overlay-files">
        ${Fi(i,o=>o.id,o=>{const s=o.status==="paused",n=o.status==="uploading",a=o.status==="queued",l=Math.round(o.progress??0),c=s?t("paused","Paused"):a?t("queued","Queued"):`${l}%`;return f`
            <div class="upload-overlay-file">
              <div class="upload-overlay-file-info">
                <div class="upload-overlay-file-name" title=${o.name}>${o.name}</div>
                <div class="upload-overlay-file-meta">
                  <div class="upload-overlay-file-bar">
                    <div
                      class="upload-overlay-file-bar-fill ${s||a?"muted":""}"
                      ${Q({width:`${l}%`})}
                    ></div>
                  </div>
                  <div class="upload-overlay-file-pct">${c}</div>
                </div>
              </div>
              <div class="upload-overlay-file-actions">
                ${n&&o.isTus?f`
                      <button
                        class="upload-overlay-file-btn"
                        title=${t("pause","Pause")}
                        aria-label=${t("pauseUpload","Pause upload")}
                        @click=${()=>{var d;return(d=this._engine)==null?void 0:d.pauseFile(o.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:S}
                ${s?f`
                      <button
                        class="upload-overlay-file-btn paused"
                        title=${t("resume","Resume")}
                        aria-label=${t("resumeUpload","Resume upload")}
                        @click=${()=>{var d;return(d=this._engine)==null?void 0:d.resumeFile(o.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:S}
                <button
                  class="upload-overlay-file-btn del"
                  title=${t("remove","Remove")}
                  aria-label=${t("removeFile","Remove file")}
                  @click=${()=>this._removeFile(o.id)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            </div>
          `})}
      </div>
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=this._phase==="complete",n=e.filter(d=>d.status==="complete").length,a=e.filter(d=>d.status==="failed").length,l=e.filter(d=>d.status==="complete"&&d.alreadyExisted).length,c=n>0&&a===0&&l>=n;return this._isPillExpanded===!1?f`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s?a>0?n>0?f`<div class="float-collapsed-icon warn">
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
                    </div>`:f`<div class="float-collapsed-icon error">
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
                    </div>`:c?f`<div class="float-collapsed-icon info">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </div>`:f`<div class="float-collapsed-icon done">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>`:f`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):c?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}</span
            >
            ${s?S:f`<span class="float-collapsed-pct">${o}%</span>`}
          </div>
          <div class="float-collapsed-actions">
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
      `:f`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${s?a>0?n>0?"warn":"error":c?"info":"done":""}"
            >
              ${s?a>0?n>0?f`<svg
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
                      </svg>`:f`<svg
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
                      </svg>`:c?f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>`:f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>`:f`<svg
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
                ${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):c?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${s?c?i("alreadyInLibrarySubtitle",{count:l,defaultValue_one:"It’s ready to use — nothing new to upload",defaultValue_other:"They’re ready to use — nothing new to upload"}):`${i("filesUploaded",{count:n,defaultValue_one:"{{count}} file uploaded",defaultValue_other:"{{count}} files uploaded"})}${a>0?`, ${i("nFailed","{{count}} failed",{count:a})}`:""}`:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Pi(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
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
            <span class="float-progress-label">Overall progress</span>
            <span
              class="float-progress-pct ${s?a>0?n>0?"warn":"error":"done":""}"
              >${s?"Done":`${o}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${s?a>0?n>0?"warn":"error":"done":""}"
              ${Q({width:`${s?100:o}%`})}
            ></div>
          </div>
        </div>
        ${s&&l>0&&!c?f`<div class="float-info-note" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>${i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:S}
        <div class="float-items">
          ${Fi([...e].reverse(),d=>d.id,d=>{var u,m,g;const p=d.status==="failed"||d.status==="error";return f`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${Q(d.previewUrl?{"background-image":`url(${d.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${d.previewUrl?S:f`<svg
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
                  <div class="float-item-name">${d.name}</div>
                  <div class="float-item-size">${Fe(d.size)}</div>
                </div>
                <div class="float-item-status">
                  ${d.status==="complete"?f`${(u=this.config)!=null&&u.showLocateButton&&((g=(m=d.response)==null?void 0:m.file)!=null&&g.uuid)?f`<button
                              class="float-item-act locate"
                              title=${i("locate","Locate")}
                              aria-label=${i("locate","Locate")}
                              @click=${()=>this._locateFile(d)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <circle cx="12" cy="12" r="7" />
                              </svg>
                            </button>`:S}
                        ${d.alreadyExisted?f`<div
                              class="float-item-done info"
                              title=${i("alreadyUploaded","Already uploaded")}
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
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                              </svg>
                            </div>`:f`<div class="float-item-done">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>`}`:p?f` <div class="float-item-error-wrap">
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
                            >${d.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var x;this._ensureEngine(),(x=this._engine)==null||x.retryFile(d.id)}}
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
                        </button>`:d.status==="paused"?f`
                        <button
                          class="float-item-act paused"
                          title=${i("resume","Resume")}
                          aria-label=${i("resumeUpload","Resume upload")}
                          @click=${()=>{var x;return(x=this._engine)==null?void 0:x.resumeFile(d.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </button>
                        <button
                          class="float-item-act del"
                          title=${i("remove","Remove")}
                          aria-label=${i("removeFile","Remove file")}
                          @click=${()=>this._removeFile(d.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:f`
                        <div class="float-item-spinner"></div>
                        ${d.status==="uploading"&&d.isTus?f`<button
                              class="float-item-act"
                              title=${i("pause","Pause")}
                              aria-label=${i("pauseUpload","Pause upload")}
                              @click=${()=>{var x;return(x=this._engine)==null?void 0:x.pauseFile(d.id)}}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>`:S}
                        ${d.status==="uploading"||d.status==="queued"||d.status==="retrying"?f`<button
                              class="float-item-act del"
                              title=${i("remove","Remove")}
                              aria-label=${i("removeFile","Remove file")}
                              @click=${()=>this._removeFile(d.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>`:S}
                      `}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var x,$,L,k,_,w,b;if(e.length===0)return S;const t=this._storeCtrl.state.t,i=[...e].reverse(),o=i.find(U=>U.id===this._previewFileId)??i[0],s=((x=o.name.split(".").pop())==null?void 0:x.toUpperCase())||"";new Date(o.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((U,P)=>U+(P.size||0),0),a=!!((L=($=this.config)==null?void 0:$.similarityCheck)!=null&&L.enabled),l=i.filter(U=>fe(U)==="image"&&!ke(U.type)&&!this._similarResults.has(U.id)).map(U=>U.id),c=Math.min(l.length,_e),d=c>0&&this._similarSelectedIds.size>=c,p=this._similarSelectedIds.size>=_e,u=this._similarResults.get(o.id),m=u!==void 0,g=m?this._previewPanelTab:"details";return f`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Q({flex:String(this._splitPct)})}>
          ${((k=this.config)==null?void 0:k.mode)==="inline"&&((_=this.config)!=null&&_.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):S}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${Fe(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Mo(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showCheckSimilar=${a}
            .selectMode=${a}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${d}
            .selectionFull=${p}
            .maxSelection=${_e}
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
        <div class="preview-panel" ${Q({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():f`
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
              ${o.previewUrl||o.type.startsWith("video/")&&o.file?f`
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
                  `:S}
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
          ${m?f`
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
                    <span>${t("similarTab","Similar")}</span>${u&&u.length>0?f`<span class="preview-tab-count">${u.length}</span>`:S}
                  </button>
                </div>
              `:S}
          ${g==="similar"?this._renderSimilarPanel(o,u??[]):f`
          <div class="preview-details-body">
          ${o.type.startsWith("video/")&&o.file?f`
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
              `:o.previewUrl?f`
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
              `:f`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${fe(o)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Hs(s)}
                      alt="${s?`${s} file`:"File"}"
                      @error=${U=>{const P=U.target,z=qs();!P.dataset.fallback&&P.src!==z&&(P.dataset.fallback="1",P.src=z)}}
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
          ${this._metadataSchema&&((w=this.config)!=null&&w.metadataConfig)?f`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${s}${o.size?` · ${Fe(o.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:S}
          ${this._metadataSchema&&((b=this.config)!=null&&b.metadataConfig)?f`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                  @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
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
              `:f`
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
                      <div class="preview-file-info-key">${t("fileName","File name")}</div>
                      <div class="preview-file-info-val">
                        ${o.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${t("type","Type")}</div>
                      <div class="preview-file-info-val">${s}</div>
                    </div>
                    ${o.size?f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${Fe(o.size)}
                            </div>
                          </div>
                        `:S}
                    ${this._previewDims!=="—"?f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:S}
                  </div>
                </div>
              `}
          </div>
              `}
          `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return t.length===0?f`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound","No similar assets found")}</b>
          <span>${i("noSimilarHint","This image looks unique in your library.")}</span>
        </div>
      `:f`
      <div class="psim-body">
        ${t.map(o=>{const s=Math.round(o.score*100);return f`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score>=.85?"high":""}">${s}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(o.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </button>
                ${o.url?f`<img src=${o.url} alt="" />`:S}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(o)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(o)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var p;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(u=>fe(u)==="image"&&!ke(u.type)),o=t.some(u=>fe(u)==="pdf"),s=t.some(u=>fe(u)==="vid"),n=(p=this.config)==null?void 0:p.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=u=>{switch(u){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},c=u=>{switch(u){case"hls":return e("protocolHls","HLS")}},d=u=>m=>{const g=parseInt(m.target.value,10);u(Number.isFinite(g)?g:0)};return f`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name"
          >${e("uploadSettings","Upload settings")}</span
        >
        <div class="preview-header-actions">
          <button
            @click=${()=>{this._showSettings=!1}}
            title=${e("close","Close")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="settings-body">
        ${i||o?f`
              <!-- Image settings (only when the queue contains an image or PDF) -->
              <div class="sgroup-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
                ${e("imageSettings","Image settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("resizeImages","Resize Images")}</span>
                <span class="info-i" data-tip=${e("resizeImagesInfo","Scale down large images to the maximum dimensions below before uploading.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
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
                      @input=${d(u=>this._setMaxW=u)}
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
                      @input=${d(u=>this._setMaxH=u)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:S}

        ${s?f`
              <!-- Video settings (only when the queue contains a video) -->
              <div class="sgroup-title sgroup-title-spaced">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                ${e("videoSettings","Video settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("transcodeVideo","Transcode video")}</span>
                <span class="info-i" data-tip=${e("transcodeVideoInfo","Re-encode videos into adaptive streaming formats for smoother playback.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                ${this._setResolutionOpen&&this._setTranscode?f`
                      <div class="smenu">
                        ${Kd.map(u=>f`
                            <div
                              class="sopt ${u===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=u,this._setResolutionOpen=!1}}
                            >
                              ${l(u)}
                              ${u===this._setResolution?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:S}
                            </div>
                          `)}
                      </div>
                    `:S}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${Yd.map(u=>f`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=u}}
                    >
                      <span class="sradio ${this._setProtocol===u?"on":""}"></span>
                      <span class="sradio-lbl">${c(u)}</span>
                    </div>
                  `)}
              </div>
            `:S}

        ${a?f`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${e("resumeUploads","Resume uploads")}</span>
                <span class="info-i" data-tip=${e("resumeUploadsInfo","Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="sbeta" data-tip=${e("betaInfo","Beta functionality — you may experience performance issues in some cases")}>${e("beta","Beta")}</span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable?"on":""}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${e("resumeUploads","Resume uploads")}
                  @click=${()=>{var u;this._setResumable=!this._setResumable,(u=this._engine)==null||u.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:S}
      </div>
    `}_navigatePreview(e,t){var s;const o=e.findIndex(n=>n.id===this._previewFileId)+t;if(o>=0&&o<e.length){const n=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[o].id}}_renderBody(){var m,g,x,$,L,k,_,w,b,U,P,z,F;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],o=i.filter(T=>T.status==="idle"||T.status==="queued"||T.status==="error"||T.status==="failed"),s=this._phase,n=Mo(e.restrictions),a=i.length>0,l=!!((g=(m=this.config)==null?void 0:m.similarityCheck)!=null&&g.enabled),c=i.filter(T=>fe(T)==="image"&&!ke(T.type)&&!this._similarResults.has(T.id)).map(T=>T.id),d=Math.min(c.length,_e),p=d>0&&this._similarSelectedIds.size>=d,u=this._similarSelectedIds.size>=_e;return f`
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
          @dragenter=${a?this._onBodyDragEnter:S}
          @dragover=${a?this._onBodyDragOver:S}
          @dragleave=${a?this._onBodyDragLeave:S}
          @drop=${a?this._onBodyDrop:S}
        >
          ${((x=this.config)==null?void 0:x.mode)==="inline"&&(($=this.config)!=null&&$.inlineHeader)&&!this._previewFileId&&s!=="uploading"&&s!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):S}
          ${this._isReviewing?f`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((L=this.config)==null?void 0:L.showLocateButton)??!1}
                  .showCopyCdnButton=${((k=this.config)==null?void 0:k.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:s==="complete"?f`
                <sfx-success-card
                  .t=${t}
                  .primaryLabel=${t("done","Done")}
                  .fileCount=${i.filter(T=>T.status==="complete").length}
                  .totalSize=${i.filter(T=>T.status==="complete"&&!T.alreadyExisted).reduce((T,Z)=>T+(Z.size||0),0)}
                  .thumbnails=${i.filter(T=>T.status==="complete"&&T.previewUrl).reverse().map(T=>T.previewUrl)}
                  .failedFiles=${i.filter(T=>T.status==="failed").map(T=>({id:T.id,name:T.name,error:T.error||"Upload failed"}))}
                  .alreadyExistedCount=${i.filter(T=>T.status==="complete"&&T.alreadyExisted).length}
                  .showMinimize=${!!((_=this.config)!=null&&_.minimizeOnUpload)&&((w=this.config)==null?void 0:w.mode)!=="inline"}
                  @close-uploader=${this._onSuccessCardClose}
                  @minimize-uploader=${this._onMinimize}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:s==="uploading"?this._renderUploadOverlay(i):f`
                ${a?S:f`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((b=this.config)==null?void 0:b.sourcesLayout)??"pills"}
                        .mode=${((U=this.config)==null?void 0:U.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?f`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:S}`}
                ${a?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):f`
                        <div class="asset-count">
                          ${i.length}
                          ${i.length===1?"file":"files"} ·
                          ${Fe(i.reduce((T,Z)=>T+(Z.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${[...i].reverse()}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showCheckSimilar=${l}
                          .selectMode=${l}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${p}
                          .selectionFull=${u}
                          .maxSelection=${_e}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:S}
              `}
        </div>

        ${a&&s!=="complete"&&s!=="uploading"?f`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${"idle"}
                .fileCount=${o.length}
                .totalSize=${o.reduce((T,Z)=>T+(Z.size||0),0)}
                .failedCount=${i.filter(T=>T.status==="failed"||T.status==="error").length}
                .completedCount=${i.filter(T=>T.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((P=this.config)==null?void 0:P.showFillMetadata)??((z=this.config)==null?void 0:z.metadataConfig))}
                .requireMetadataFirst=${this._hasMetadataIssues}
                .showCheckSimilar=${!1}
                .selectMode=${l&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${d}
                .allSelected=${p}
              ></sfx-actions-bar>
            `:S}
        ${this._showUrlDialog?f`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:S}
        ${this._showCameraDialog?f`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:S}
        ${this._showScreenCastDialog?f`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:S}
        ${this._activeConnector&&((F=this.config)!=null&&F.connectors)?f`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${Yo.has(this._activeConnector)?f`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      `:f`
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
            `:S}
        ${this._bulkMetadataOpen&&this._metadataSchema?f`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(T=>K._MODIFIABLE_STATUSES.has(T.status))}
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
            `:S}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(s=>s.id===this._previewFileId);if(i===-1)return;const o=i+e;if(o>=0&&o<t.length){const s=t[o];this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._previewFileId=s.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},K.styles=le`
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
      content: "";
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
      transition: color 0.15s, border-color 0.15s;
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
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: box-shadow 0.15s;
    }
    .psim-card:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
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
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
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
      transition: opacity 0.15s ease, transform 0.15s ease;
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
      content: "";
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
      content: "";
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

    /* --- Per-file controls inside the overlay --- */
    .upload-overlay-files {
      width: 100%;
      max-width: 520px;
      max-height: 240px;
      overflow-y: auto;
      margin: 0 0 16px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
    }

    .upload-overlay-file {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .upload-overlay-file:last-child {
      border-bottom: none;
    }

    .upload-overlay-file-info {
      flex: 1;
      min-width: 0;
    }

    .upload-overlay-file-name {
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .upload-overlay-file-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .upload-overlay-file-bar {
      flex: 1;
      height: 3px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 2px;
      overflow: hidden;
    }

    .upload-overlay-file-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .upload-overlay-file-bar-fill.muted {
      background: var(--sfx-up-text-muted, #94a3b8);
    }

    .upload-overlay-file-pct {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      min-width: 32px;
      text-align: right;
    }

    .upload-overlay-file-actions {
      display: flex;
      gap: 4px;
      flex-shrink: 0;
    }

    .upload-overlay-file-btn {
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
      padding: 0;
      transition: background 0.15s, color 0.15s;
    }

    .upload-overlay-file-btn:hover {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-file-btn.del:hover {
      color: var(--sfx-up-error, #dc2626);
    }

    .upload-overlay-file-btn.paused {
      color: var(--sfx-up-warning, #d97706);
    }

    .upload-overlay-file-btn.paused:hover {
      color: var(--sfx-up-warning, #d97706);
    }

    .upload-overlay-file-btn svg {
      width: 14px;
      height: 14px;
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
      transition: bottom 0.25s ease, right 0.25s ease;
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

    .float-icon.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
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

    .float-item-done.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
    }

    .float-item-done.info svg {
      width: 14px;
      height: 14px;
    }

    .float-info-note {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 14px 10px;
      padding: 6px 10px;
      border-radius: 8px;
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 12px;
      line-height: 16px;
    }

    .float-info-note svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
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
  `,K._FS_ZOOM_LEVELS=[1,2,3,4],K._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),K._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),K);N([O({attribute:!1})],B.prototype,"config");N([I()],B.prototype,"_isOpen");N([I()],B.prototype,"_activeConnector");N([I()],B.prototype,"_showUrlDialog");N([I()],B.prototype,"_showCameraDialog");N([I()],B.prototype,"_showScreenCastDialog");N([I()],B.prototype,"_similarSelectMode");N([I()],B.prototype,"_similarSelectedIds");N([I()],B.prototype,"_similarRunIds");N([I()],B.prototype,"_similarActiveIds");N([I()],B.prototype,"_similarResults");N([I()],B.prototype,"_previewPanelTab");N([I()],B.prototype,"_previewFileId");N([I()],B.prototype,"_previewDims");N([I()],B.prototype,"_fileInfoOpen");N([I()],B.prototype,"_splitPct");N([I()],B.prototype,"_showSettings");N([I()],B.prototype,"_setResize");N([I()],B.prototype,"_setMaxW");N([I()],B.prototype,"_setMaxH");N([I()],B.prototype,"_setTranscode");N([I()],B.prototype,"_setResolution");N([I()],B.prototype,"_setResolutionOpen");N([I()],B.prototype,"_setProtocol");N([I()],B.prototype,"_setResumable");N([I()],B.prototype,"_fullscreenPreviewUrl");N([I()],B.prototype,"_fullscreenVideoFile");N([I()],B.prototype,"_fsZoom");N([I()],B.prototype,"_bodyDragOver");N([I()],B.prototype,"_isMinimized");N([I()],B.prototype,"_isPillExpanded");N([I()],B.prototype,"_metadataSchema");N([I()],B.prototype,"_metadataDependencies");N([I()],B.prototype,"_regionalFilters");N([I()],B.prototype,"_bulkMetadataOpen");N([I()],B.prototype,"_bulkMetadataInitialFieldKey");N([I()],B.prototype,"_isReviewing");N([I()],B.prototype,"_reviewFiles");N([I()],B.prototype,"_hasStoredReview");let Wd=B;const me=(r,e)=>{typeof customElements<"u"&&!customElements.get(r)&&customElements.define(r,e)};me("sfx-uploader",Wd);me("sfx-drop-zone",Ad);me("sfx-import-divider",Zi);me("sfx-source-pills",At);me("sfx-file-list",Y);me("sfx-file-item",X);me("sfx-success-card",ge);me("sfx-actions-bar",se);me("sfx-url-dialog",qe);me("sfx-camera-dialog",Re);me("sfx-screen-cast-dialog",ye);const Gd=[{pattern:"/",load:()=>V(()=>import("./landing-BvOPZwwi.js"),[]).then(r=>r.default)},{pattern:"/docs/getting-started",load:()=>V(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(r=>r.default)},{pattern:"/docs/configuration",load:()=>V(()=>import("./configuration-BC2TMl8e.js"),__vite__mapDeps([2,1])).then(r=>r.default)},{pattern:"/docs/api",load:()=>V(()=>import("./api-C3Pu2Ua4.js"),__vite__mapDeps([3,1])).then(r=>r.default)},{pattern:"/docs/theming",load:()=>V(()=>import("./theming-D5E2zXLD.js"),__vite__mapDeps([4,1])).then(r=>r.default)},{pattern:"/docs/types",load:()=>V(()=>import("./types-HFUEcb6v.js"),__vite__mapDeps([5,1])).then(r=>r.default)},{pattern:"/examples/basic",load:()=>V(()=>import("./basic-CIWPls9R.js"),__vite__mapDeps([6,7])).then(r=>r.default)},{pattern:"/examples/auto-upload",load:()=>V(()=>import("./auto-upload-esIdPw51.js"),__vite__mapDeps([8,7])).then(r=>r.default)},{pattern:"/examples/restrictions",load:()=>V(()=>import("./restrictions-_b34qs5q.js"),__vite__mapDeps([9,7,10])).then(r=>r.default)},{pattern:"/examples/target-folder",load:()=>V(()=>import("./target-folder-DqrnRACo.js"),__vite__mapDeps([11,7])).then(r=>r.default)},{pattern:"/examples/concurrency",load:()=>V(()=>import("./concurrency-C_uq0Vey.js"),__vite__mapDeps([12,7,10])).then(r=>r.default)},{pattern:"/examples/events",load:()=>V(()=>import("./events-CVAEQXqx.js"),__vite__mapDeps([13,7])).then(r=>r.default)},{pattern:"/examples/modal",load:()=>V(()=>import("./modal-BdAH8yXH.js"),__vite__mapDeps([14,7])).then(r=>r.default)},{pattern:"/examples/inline",load:()=>V(()=>import("./inline-DNwYrz1e.js"),__vite__mapDeps([15,7])).then(r=>r.default)},{pattern:"/examples/sources-layout",load:()=>V(()=>import("./sources-layout-DgpCj2y0.js"),__vite__mapDeps([16,7])).then(r=>r.default)},{pattern:"/examples/core-sources",load:()=>V(()=>import("./core-sources-CRTg-UYF.js"),__vite__mapDeps([17,7])).then(r=>r.default)},{pattern:"/examples/custom-source",load:()=>V(()=>import("./custom-source-eGXzyoJ3.js"),__vite__mapDeps([18,7])).then(r=>r.default)},{pattern:"/examples/header-button",load:()=>V(()=>import("./header-button-vrNl0yZ3.js"),__vite__mapDeps([19,7])).then(r=>r.default)},{pattern:"/examples/minimize-to-background",load:()=>V(()=>import("./minimize-to-background-C6djJE2c.js"),__vite__mapDeps([20,7])).then(r=>r.default)},{pattern:"/examples/resumable-upload",load:()=>V(()=>import("./resumable-upload-aQp4hsCu.js"),__vite__mapDeps([21,7,10])).then(r=>r.default)},{pattern:"/examples/react-wrapper",load:()=>V(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([22,1])).then(r=>r.default)},{pattern:"/examples/metadata",load:()=>V(()=>import("./metadata-CnMe1Aw9.js"),__vite__mapDeps([23,7])).then(r=>r.default)},{pattern:"/examples/full-screen",load:()=>V(()=>import("./full-screen-DyOETDGr.js"),[]).then(r=>r.default)},{pattern:"/examples/last-upload-review",load:()=>V(()=>import("./last-upload-review-ktjPDgB4.js"),[]).then(r=>r.default)},{pattern:"/examples/similar-check",load:()=>V(()=>import("./similar-check-g3yGrGiu.js"),__vite__mapDeps([24,7,10])).then(r=>r.default)},{pattern:"/examples/upload-settings",load:()=>V(()=>import("./upload-settings-BR2keNqp.js"),__vite__mapDeps([25,7,10])).then(r=>r.default)}];let Ge=null,Go=0;function Xd(r){const e=document.getElementById("content"),t=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),o=document.getElementById("sidebar-examples"),s=document.querySelectorAll(".topbar-nav-link");async function n(){var k,_;const a=location.hash.slice(1)||"/",l=!a.startsWith("/");if(l&&Ge){(k=document.getElementById(a))==null||k.scrollIntoView({behavior:"smooth"});return}const c=l?"/":a,d=++Go;Ge!=null&&Ge.destroy&&Ge.destroy();const p=Gd.find(w=>w.pattern===c);if(!p){location.hash="#/";return}const u=c.startsWith("/docs/"),m=c.startsWith("/examples/"),g=u||m,x=c==="/";t.classList.toggle("hidden",!g),document.body.classList.toggle("has-sidebar",g),document.body.classList.toggle("is-home",x),i.classList.toggle("hidden",!u),o.classList.toggle("hidden",!m),t.querySelectorAll(".sidebar-link").forEach(w=>{w.classList.toggle("active",w.getAttribute("data-route")===c)});const $=u?"docs":m?"examples":"home";s.forEach(w=>{w.classList.toggle("active",w.getAttribute("data-section")===$)}),t.classList.remove("mobile-open"),l||window.scrollTo(0,0);const L=await p.load();d===Go&&(Ge=L,e.innerHTML=L.render(),L.init&&L.init(r),l&&((_=document.getElementById(a))==null||_.scrollIntoView({behavior:"smooth"})))}window.addEventListener("hashchange",n),n()}const Ws="sfx-uploader-demo-auth",Xo={container:"",securityTemplateId:""};function Gs(){try{const r=localStorage.getItem(Ws);if(r)return{...Xo,...JSON.parse(r)}}catch{}return{...Xo}}function Jd(r){localStorage.setItem(Ws,JSON.stringify(r))}function mp(r={}){const{container:e,securityTemplateId:t}=Gs();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","box","onedrive"]},...r}}function Zd(){const r=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),i=document.getElementById("auth-sec-template"),o=document.getElementById("auth-save"),s=Gs();t.value=s.container,i.value=s.securityTemplateId,r.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),o.addEventListener("click",()=>{Jd({container:t.value.trim(),securityTemplateId:i.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!r.contains(n.target)&&e.classList.add("hidden")})}Zd();const Qd=document.getElementById("uploader");Xd(Qd);var Zo;(Zo=document.getElementById("sidebar-toggle"))==null||Zo.addEventListener("click",()=>{var r;(r=document.getElementById("sidebar"))==null||r.classList.toggle("mobile-open")});export{S as A,ai as B,hd as C,ot as D,hp as E,Kc as F,gd as G,Hs as H,qs as I,Fe as J,gp as K,fp as L,mr as M,rt as P,le as a,mp as b,f as c,op as d,lr as e,ap as f,Vc as g,xa as h,oe as i,va as j,De as k,sp as l,Q as m,O as n,Xt as o,$d as p,dd as q,I as r,np as s,Xi as t,dp as u,cp as v,_d as w,pp as x,Ie as y,up as z};
