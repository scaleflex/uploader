const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/getting-started-BEsDf8Jc.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-DviB-HMH.js","assets/api-C69HtrIu.js","assets/theming-D5E2zXLD.js","assets/types-BP9Z4Qnu.js","assets/basic-CORtUh6h.js","assets/code-block-Bk3NnwHF.js","assets/auto-upload-CNr6sjGt.js","assets/restrictions-DQJqNtIZ.js","assets/custom-select-CZ_fVHDR.js","assets/target-folder-CEm2sV0t.js","assets/concurrency-Dib2pvhx.js","assets/events-C11S_-ni.js","assets/modal-BeyI_btJ.js","assets/inline-B-ByVQ0_.js","assets/sources-layout-MC0hdBJ0.js","assets/core-sources-CTcUBTS1.js","assets/header-button-D9rRdyu6.js","assets/minimize-to-background-zmcNsRQh.js","assets/resumable-upload-VhyilczY.js","assets/react-wrapper-DqFoKQCy.js","assets/metadata-CTekEurG.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const Os="modulepreload",Rs=function(r){return"/uploader/"+r},vr={},H=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let n=function(d){return Promise.all(d.map(c=>Promise.resolve(c).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=n(t.map(d=>{if(d=Rs(d),d in vr)return;vr[d]=!0;const c=d.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Os,c||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),c)return new Promise((y,v)=>{u.addEventListener("load",y),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return o.then(n=>{for(const a of n||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis,Di=Dt.ShadowRoot&&(Dt.ShadyCSS===void 0||Dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ii=Symbol(),br=new WeakMap;let Ro=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Di&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=br.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&br.set(t,e))}return e}toString(){return this.cssText}};const Ls=r=>new Ro(typeof r=="string"?r:r+"",void 0,Ii),re=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,s)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Ro(t,r,Ii)},As=(r,e)=>{if(Di)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=Dt.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}},yr=Di?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ls(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ts,defineProperty:Fs,getOwnPropertyDescriptor:zs,getOwnPropertyNames:js,getOwnPropertySymbols:Ds,getPrototypeOf:Is}=Object,_e=globalThis,wr=_e.trustedTypes,Ms=wr?wr.emptyScript:"",oi=_e.reactiveElementPolyfillSupport,pt=(r,e)=>r,Ht={toAttribute(r,e){switch(e){case Boolean:r=r?Ms:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Mi=(r,e)=>!Ts(r,e),_r={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:Mi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_e.litPropertyMetadata??(_e.litPropertyMetadata=new WeakMap);let Ke=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_r){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Fs(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=zs(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){const a=o==null?void 0:o.call(this);s==null||s.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_r}static _$Ei(){if(this.hasOwnProperty(pt("elementProperties")))return;const e=Is(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pt("properties"))){const t=this.properties,i=[...js(t),...Ds(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(yr(o))}else e!==void 0&&t.push(yr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return As(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const n=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ht).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){var s,n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=i.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Ht;this._$Em=o;const d=l.fromAttribute(t,a.type);this[o]=d??((n=this._$Ej)==null?void 0:n.get(o))??d,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){var n;if(e!==void 0){const a=this.constructor;if(o===!1&&(s=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??Mi)(s,t)||i.useDefault&&i.reflect&&s===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Ke.elementStyles=[],Ke.shadowRootOptions={mode:"open"},Ke[pt("elementProperties")]=new Map,Ke[pt("finalized")]=new Map,oi==null||oi({ReactiveElement:Ke}),(_e.reactiveElementVersions??(_e.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=globalThis,kr=r=>r,qt=ut.trustedTypes,$r=qt?qt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Lo="$lit$",ye=`lit$${Math.random().toFixed(9).slice(2)}$`,Ao="?"+ye,Bs=`<${Ao}>`,ze=document,gt=()=>ze.createComment(""),mt=r=>r===null||typeof r!="object"&&typeof r!="function",Bi=Array.isArray,Ns=r=>Bi(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",si=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sr=/-->/g,Cr=/>/g,Pe=RegExp(`>|${si}(?:([^\\s"'>=/]+)(${si}*=${si}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,Pr=/"/g,To=/^(?:script|style|textarea|title)$/i,Fo=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=Fo(1),Re=Fo(2),ce=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Ur=new WeakMap,Le=ze.createTreeWalker(ze,129);function zo(r,e){if(!Bi(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $r!==void 0?$r.createHTML(e):e}const Hs=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":e===3?"<math>":"",n=ot;for(let a=0;a<t;a++){const l=r[a];let d,c,p=-1,u=0;for(;u<l.length&&(n.lastIndex=u,c=n.exec(l),c!==null);)u=n.lastIndex,n===ot?c[1]==="!--"?n=Sr:c[1]!==void 0?n=Cr:c[2]!==void 0?(To.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=Pe):c[3]!==void 0&&(n=Pe):n===Pe?c[0]===">"?(n=o??ot,p=-1):c[1]===void 0?p=-2:(p=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?Pe:c[3]==='"'?Pr:Er):n===Pr||n===Er?n=Pe:n===Sr||n===Cr?n=ot:(n=Pe,o=void 0);const y=n===Pe&&r[a+1].startsWith("/>")?" ":"";s+=n===ot?l+Bs:p>=0?(i.push(d),l.slice(0,p)+Lo+l.slice(p)+ye+y):l+ye+(p===-2?a:y)}return[zo(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class xt{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const a=e.length-1,l=this.parts,[d,c]=Hs(e,t);if(this.el=xt.createElement(d,i),Le.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=Le.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(Lo)){const u=c[n++],y=o.getAttribute(p).split(ye),v=/([.?@])?(.*)/.exec(u);l.push({type:1,index:s,name:v[2],strings:y,ctor:v[1]==="."?Vs:v[1]==="?"?Ks:v[1]==="@"?Ys:Qt}),o.removeAttribute(p)}else p.startsWith(ye)&&(l.push({type:6,index:s}),o.removeAttribute(p));if(To.test(o.tagName)){const p=o.textContent.split(ye),u=p.length-1;if(u>0){o.textContent=qt?qt.emptyScript:"";for(let y=0;y<u;y++)o.append(p[y],gt()),Le.nextNode(),l.push({type:2,index:++s});o.append(p[u],gt())}}}else if(o.nodeType===8)if(o.data===Ao)l.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(ye,p+1))!==-1;)l.push({type:7,index:s}),p+=ye.length-1}s++}}static createElement(e,t){const i=ze.createElement("template");return i.innerHTML=e,i}}function Je(r,e,t=r,i){var n,a;if(e===ce)return e;let o=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const s=mt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=o:t._$Cl=o),o!==void 0&&(e=Je(r,o._$AS(r,e.values),o,i)),e}class qs{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??ze).importNode(t,!0);Le.currentNode=o;let s=Le.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Et(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new Ws(s,this,e)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(s=Le.nextNode(),n++)}return Le.currentNode=ze,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Et{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),mt(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==ce&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ns(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ze.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=xt.createElement(zo(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(t);else{const n=new qs(o,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=Ur.get(e.strings);return t===void 0&&Ur.set(e.strings,t=new xt(e)),t}k(e){Bi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new Et(this.O(gt()),this.O(gt()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const o=kr(e).nextSibling;kr(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Qt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(s===void 0)e=Je(this,e,t,0),n=!mt(e)||e!==this._$AH&&e!==ce,n&&(this._$AH=e);else{const a=e;let l,d;for(e=s[0],l=0;l<s.length-1;l++)d=Je(this,a[i+l],t,l),d===ce&&(d=this._$AH[l]),n||(n=!mt(d)||d!==this._$AH[l]),d===$?e=$:e!==$&&(e+=(d??"")+s[l+1]),this._$AH[l]=d}n&&!o&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vs extends Qt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class Ks extends Qt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class Ys extends Qt{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Je(this,e,t,0)??$)===ce)return;const i=this._$AH,o=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ws{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}}const ni=ut.litHtmlPolyfillSupport;ni==null||ni(xt,Et),(ut.litHtmlVersions??(ut.litHtmlVersions=[])).push("3.3.2");const ke=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new Et(e.insertBefore(gt(),s),s,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=globalThis;let Q=class extends Ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ce}};var Uo;Q._$litElement$=!0,Q.finalized=!0,(Uo=Te.litElementHydrateSupport)==null||Uo.call(Te,{LitElement:Q});const ai=Te.litElementPolyfillSupport;ai==null||ai({LitElement:Q});(Te.litElementVersions??(Te.litElementVersions=[])).push("4.2.2");const j=r=>typeof r=="string",st=()=>{let r,e;const t=new Promise((i,o)=>{r=i,e=o});return t.resolve=r,t.reject=e,t},Or=r=>r==null?"":String(r),Gs=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Xs=/###/g,Rr=r=>r&&r.includes("###")?r.replace(Xs,"."):r,Lr=r=>!r||j(r),ft=(r,e,t)=>{const i=j(e)?e.split("."):e;let o=0;for(;o<i.length-1;){if(Lr(r))return{};const s=Rr(i[o]);!r[s]&&t&&(r[s]=new t),Object.prototype.hasOwnProperty.call(r,s)?r=r[s]:r={},++o}return Lr(r)?{}:{obj:r,k:Rr(i[o])}},Ar=(r,e,t)=>{const{obj:i,k:o}=ft(r,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let s=e[e.length-1],n=e.slice(0,e.length-1),a=ft(r,n,Object);for(;a.obj===void 0&&n.length;)s=`${n[n.length-1]}.${s}`,n=n.slice(0,n.length-1),a=ft(r,n,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=t},Js=(r,e,t,i)=>{const{obj:o,k:s}=ft(r,e,Object);o[s]=o[s]||[],o[s].push(t)},Vt=(r,e)=>{const{obj:t,k:i}=ft(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},Zs=(r,e,t)=>{const i=Vt(r,t);return i!==void 0?i:Vt(e,t)},jo=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?j(r[i])||r[i]instanceof String||j(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):jo(r[i],e[i],t):r[i]=e[i]);return r},ge=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Qs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},en=r=>j(r)?r.replace(/[&<>"'\/]/g,e=>Qs[e]):r;class tn{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const rn=[" ",",","?","!",";"],on=new tn(20),sn=(r,e,t)=>{e=e||"",t=t||"";const i=rn.filter(n=>!e.includes(n)&&!t.includes(n));if(i.length===0)return!0;const o=on.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let s=!o.test(r);if(!s){const n=r.indexOf(t);n>0&&!o.test(r.substring(0,n))&&(s=!0)}return s},vi=(r,e,t=".")=>{if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let o=r;for(let s=0;s<i.length;){if(!o||typeof o!="object")return;let n,a="";for(let l=s;l<i.length;++l)if(l!==s&&(a+=t),a+=i[l],n=o[a],n!==void 0){if(["string","number","boolean"].includes(typeof n)&&l<i.length-1)continue;s+=l-s+1;break}o=n}return o},vt=r=>r==null?void 0:r.replace(/_/g,"-"),nn={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class Kt{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||nn,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(e=e.map(s=>j(s)?s.replace(/[\r\n\x00-\x1F\x7F]/g," "):s),j(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new Kt(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Kt(this.logger,e)}}var fe=new Kt;class ei{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){const i=(...o)=>{t(...o),this.off(e,i)};return this.on(e,i),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,s])=>{for(let n=0;n<s;n++)o(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,s])=>{for(let n=0;n<s;n++)o(e,...t)})}}class Tr extends ei{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,o={}){var d,c;const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,n=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.includes(".")?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):j(i)&&s?a.push(...i.split(s)):a.push(i)));const l=Vt(this.data,a);return!l&&!t&&!i&&e.includes(".")&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!j(i)?l:vi((c=(d=this.data)==null?void 0:d[e])==null?void 0:c[t],i,s)}addResource(e,t,i,o,s={silent:!1}){const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.includes(".")&&(a=e.split("."),o=t,t=a[1]),this.addNamespaces(t),Ar(this.data,a,o),s.silent||this.emit("added",e,t,i,o)}addResources(e,t,i,o={silent:!1}){for(const s in i)(j(i[s])||Array.isArray(i[s]))&&this.addResource(e,t,s,i[s],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,s,n={silent:!1,skipCopy:!1}){let a=[e,t];e.includes(".")&&(a=e.split("."),o=i,i=t,t=a[1]),this.addNamespaces(t);let l=Vt(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?jo(l,i,s):l={...l,...i},Ar(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var Do={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,o){return r.forEach(s=>{var n;e=((n=this.processors[s])==null?void 0:n.process(e,t,i,o))??e}),e}};const Io=Symbol("i18next/PATH_KEY");function an(){const r=[],e=Object.create(null);let t;return e.get=(i,o)=>{var s;return(s=t==null?void 0:t.revoke)==null||s.call(t),o===Io?r:(r.push(o),t=Proxy.revocable(i,e),t.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Ge(r,e){const{[Io]:t}=r(an()),i=(e==null?void 0:e.keySeparator)??".",o=(e==null?void 0:e.nsSeparator)??":",s=(e==null?void 0:e.enableSelector)==="strict";if(t.length>1&&o){const n=e==null?void 0:e.ns,a=s?Array.isArray(n)?n:n?[n]:null:Array.isArray(n)?n:null;if(a&&(s?a:a.length>1?a.slice(1):[]).includes(t[0]))return`${t[0]}${o}${t.slice(1).join(i)}`}return t.join(i)}const li=r=>!j(r)&&typeof r!="boolean"&&typeof r!="number";class Yt extends ei{constructor(e,t={}){super(),Gs(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=fe.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const o=this.resolve(e,i);if((o==null?void 0:o.res)===void 0)return!1;const s=li(o.res);return!(i.returnObjects===!1&&s)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const n=i&&e.includes(i),a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!sn(e,i,o);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:j(s)?[s]:s};const d=e.split(i);(i!==o||i===o&&this.options.ns.includes(d[0]))&&(s=d.shift()),e=d.join(o)}return{key:e,namespaces:j(s)?[s]:s}}translate(e,t,i){let o=typeof t=="object"?{...t}:t;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=Ge(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]),e=e.map(O=>typeof O=="function"?Ge(O,{...this.options,...o}):String(O));const s=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],o),d=l[l.length-1];let c=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;c===void 0&&(c=":");const p=o.lng||this.language,u=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((p==null?void 0:p.toLowerCase())==="cimode")return u?s?{res:`${d}${c}${a}`,usedKey:a,exactUsedKey:a,usedLng:p,usedNS:d,usedParams:this.getUsedParamsDetails(o)}:`${d}${c}${a}`:s?{res:a,usedKey:a,exactUsedKey:a,usedLng:p,usedNS:d,usedParams:this.getUsedParamsDetails(o)}:a;const y=this.resolve(e,o);let v=y==null?void 0:y.res;const w=(y==null?void 0:y.usedKey)||a,P=(y==null?void 0:y.exactUsedKey)||a,T=["[object Number]","[object Function]","[object RegExp]"],k=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,_=!this.i18nFormat||this.i18nFormat.handleAsObject,g=o.count!==void 0&&!j(o.count),b=Yt.hasDefaultValue(o),R=g?this.pluralResolver.getSuffix(p,o.count,o):"",U=o.ordinal&&g?this.pluralResolver.getSuffix(p,o.count,{ordinal:!1}):"",F=g&&!o.ordinal&&o.count===0,L=F&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${R}`]||o[`defaultValue${U}`]||o.defaultValue;let N=v;_&&!v&&b&&(N=L);const de=li(N),be=Object.prototype.toString.apply(N);if(_&&N&&de&&!T.includes(be)&&!(j(k)&&Array.isArray(N))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const O=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,N,{...o,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(y.res=O,y.usedParams=this.getUsedParamsDetails(o),y):O}if(n){const O=Array.isArray(N),q=O?[]:{},ue=O?P:w;for(const x in N)if(Object.prototype.hasOwnProperty.call(N,x)){const f=`${ue}${n}${x}`;b&&!v?q[x]=this.translate(f,{...o,defaultValue:li(L)?L[x]:void 0,joinArrays:!1,ns:l}):q[x]=this.translate(f,{...o,joinArrays:!1,ns:l}),q[x]===f&&(q[x]=N[x])}v=q}}else if(_&&j(k)&&Array.isArray(v))v=v.join(k),v&&(v=this.extendTranslation(v,e,o,i));else{let O=!1,q=!1;!this.isValidLookup(v)&&b&&(O=!0,v=L),this.isValidLookup(v)||(q=!0,v=a);const x=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&q?void 0:v,f=b&&L!==v&&this.options.updateMissing;if(q||O||f){if(this.logger.log(f?"updateKey":"missingKey",p,d,g&&!f?`${a}${this.pluralResolver.getSuffix(p,o.count,o)}`:a,f?L:v),n){const S=this.resolve(a,{...o,keySeparator:!1});S&&S.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let m=[];const C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&C&&C[0])for(let S=0;S<C.length;S++)m.push(C[S]);else this.options.saveMissingTo==="all"?m=this.languageUtils.toResolveHierarchy(o.lng||this.language):m.push(o.lng||this.language);const E=(S,z,M)=>{var G;const B=b&&M!==v?M:x;this.options.missingKeyHandler?this.options.missingKeyHandler(S,d,z,B,f,o):(G=this.backendConnector)!=null&&G.saveMissing&&this.backendConnector.saveMissing(S,d,z,B,f,o),this.emit("missingKey",S,d,z,v)};this.options.saveMissing&&(this.options.saveMissingPlurals&&g?m.forEach(S=>{const z=this.pluralResolver.getSuffixes(S,o);F&&o[`defaultValue${this.options.pluralSeparator}zero`]&&!z.includes(`${this.options.pluralSeparator}zero`)&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(M=>{E([S],a+M,o[`defaultValue${M}`]||L)})}):E(m,a,L))}v=this.extendTranslation(v,e,o,y,i),q&&v===a&&this.options.appendNamespaceToMissingKey&&(v=`${d}${c}${a}`),(q||O)&&this.options.parseMissingKeyHandler&&(v=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}${c}${a}`:a,O?v:void 0,o))}return s?(y.res=v,y.usedParams=this.getUsedParamsDetails(o),y):v}extendTranslation(e,t,i,o,s){var l,d;if((l=this.i18nFormat)!=null&&l.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=j(e)&&(((d=i==null?void 0:i.interpolation)==null?void 0:d.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(c){const y=e.match(this.interpolator.nestingRegexp);p=y&&y.length}let u=i.replace&&!j(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,i.lng||this.language||o.usedLng,i),c){const y=e.match(this.interpolator.nestingRegexp),v=y&&y.length;p<v&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...y)=>(s==null?void 0:s[0])===y[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${t[0]}`),null):this.translate(...y,t),i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,a=j(n)?[n]:n;return e!=null&&(a!=null&&a.length)&&i.applyPostProcessor!==!1&&(e=Do.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,o,s,n,a;return j(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?Ge(l,{...this.options,...t}):l)),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,t),c=d.key;o=c;let p=d.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const u=t.count!==void 0&&!j(t.count),y=u&&!t.ordinal&&t.count===0,v=t.context!==void 0&&(j(t.context)||typeof t.context=="number")&&t.context!=="",w=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);p.forEach(P=>{var T,k;this.isValidLookup(i)||(a=P,!this.checkedLoadedFor[`${w[0]}-${P}`]&&((T=this.utils)!=null&&T.hasLoadedNamespace)&&!((k=this.utils)!=null&&k.hasLoadedNamespace(a))&&(this.checkedLoadedFor[`${w[0]}-${P}`]=!0,this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(_=>{var R;if(this.isValidLookup(i))return;n=_;const g=[c];if((R=this.i18nFormat)!=null&&R.addLookupKeys)this.i18nFormat.addLookupKeys(g,c,_,P,t);else{let U;u&&(U=this.pluralResolver.getSuffix(_,t.count,t));const F=`${this.options.pluralSeparator}zero`,L=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&U.startsWith(L)&&g.push(c+U.replace(L,this.options.pluralSeparator)),g.push(c+U),y&&g.push(c+F)),v){const N=`${c}${this.options.contextSeparator||"_"}${t.context}`;g.push(N),u&&(t.ordinal&&U.startsWith(L)&&g.push(N+U.replace(L,this.options.pluralSeparator)),g.push(N+U),y&&g.push(N+F))}}let b;for(;b=g.pop();)this.isValidLookup(i)||(s=b,i=this.getResource(_,P,b,t))}))})}),{res:i,usedKey:o,exactUsedKey:s,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,o={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!j(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const s of t)delete o[s]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&i.startsWith(t)&&e[i]!==void 0)return!0;return!1}}class Fr{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=fe.create("languageUtils")}getScriptPartFromCode(e){if(e=vt(e),!e||!e.includes("-"))return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=vt(e),!e||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(j(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getScriptPartFromCode(i);if(this.isSupportedCode(o))return t=o;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>n===s?!0:!n.includes("-")&&!s.includes("-")?!1:!!(n.includes("-")&&!s.includes("-")&&n.slice(0,n.indexOf("-"))===s||n.startsWith(s)&&s.length>1))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),j(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),o=[],s=n=>{n&&(this.isSupportedCode(n)?o.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return j(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):j(e)&&s(this.formatLanguageCode(e)),i.forEach(n=>{o.includes(n)||s(this.formatLanguageCode(n))}),o}}const zr={zero:0,one:1,two:2,few:3,many:4,other:5},jr={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class ln{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=fe.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=vt(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:o});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let n;try{n=new Intl.PluralRules(i,{type:o})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),jr;if(!e.match(/-|_/))return jr;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[s]=n,n}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((o,s)=>zr[o]-zr[s]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,t,i={}){const o=this.getRule(e,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Dr=(r,e,t,i=".",o=!0)=>{let s=Zs(r,e,t);return!s&&o&&j(t)&&(s=vi(r,t,i),s===void 0&&(s=vi(e,t,i))),s},di=r=>r.replace(/\$/g,"$$$$");class Ir{constructor(e={}){var t;this.logger=fe.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:s,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:d,unescapeSuffix:c,unescapePrefix:p,nestingPrefix:u,nestingPrefixEscaped:y,nestingSuffix:v,nestingSuffixEscaped:w,nestingOptionsSeparator:P,maxReplaces:T,alwaysFormat:k}=e.interpolation;this.escape=t!==void 0?t:en,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=s?ge(s):n||"{{",this.suffix=a?ge(a):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=c?"":p?ge(p):"-",this.unescapeSuffix=this.unescapePrefix?"":c?ge(c):"",this.nestingPrefix=u?ge(u):y||ge("$t("),this.nestingSuffix=v?ge(v):w||ge(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=T||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,o){var y;let s,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=v=>{if(!v.includes(this.formatSeparator)){const k=Dr(t,l,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(k,void 0,i,{...o,...t,interpolationkey:v}):k}const w=v.split(this.formatSeparator),P=w.shift().trim(),T=w.join(this.formatSeparator).trim();return this.format(Dr(t,l,P,this.options.keySeparator,this.options.ignoreJSONStructure),T,i,{...o,...t,interpolationkey:P})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const c=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,p=((y=o==null?void 0:o.interpolation)==null?void 0:y.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>di(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?di(this.escape(v)):di(v)}].forEach(v=>{for(a=0;s=v.regex.exec(e);){const w=s[1].trim();if(n=d(w),n===void 0)if(typeof c=="function"){const T=c(e,s,o);n=j(T)?T:""}else if(o&&Object.prototype.hasOwnProperty.call(o,w))n="";else if(p){n=s[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${e}`),n="";else!j(n)&&!this.useRawValueToEscape&&(n=Or(n));const P=v.safeValue(n);if(e=e.replace(s[0],P),p?(v.regex.lastIndex+=n.length,v.regex.lastIndex-=s[0].length):v.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let o,s,n;const a=(l,d)=>{const c=this.nestingOptionsSeparator;if(!l.includes(c))return l;const p=l.split(new RegExp(`${ge(c)}[ ]*{`));let u=`{${p[1]}`;l=p[0],u=this.interpolate(u,n);const y=u.match(/'/g),v=u.match(/"/g);(((y==null?void 0:y.length)??0)%2===0&&!v||((v==null?void 0:v.length)??0)%2!==0)&&(u=u.replace(/'/g,'"'));try{n=JSON.parse(u),d&&(n={...d,...n})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${c}${u}`}return n.defaultValue&&n.defaultValue.includes(this.prefix)&&delete n.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!j(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;const d=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(d!==-1&&(l=o[1].slice(d).split(this.formatSeparator).map(c=>c.trim()).filter(Boolean),o[1]=o[1].slice(0,d)),s=t(a.call(this,o[1].trim(),n),n),s&&o[0]===e&&!j(s))return s;j(s)||(s=Or(s)),s||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),s=""),l.length&&(s=l.reduce((c,p)=>this.format(c,p,i.lng,{...i,interpolationkey:o[1].trim()}),s.trim())),e=e.replace(o[0],s),this.regexp.lastIndex=0}return e}}const dn=r=>{let e=r.toLowerCase().trim();const t={};if(r.includes("(")){const i=r.split("(");e=i[0].toLowerCase().trim();const o=i[1].slice(0,-1);e==="currency"&&!o.includes(":")?t.currency||(t.currency=o.trim()):e==="relativetime"&&!o.includes(":")?t.range||(t.range=o.trim()):o.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();t[c]||(t[c]=d),d==="false"&&(t[c]=!1),d==="true"&&(t[c]=!0),isNaN(d)||(t[c]=parseInt(d,10))}})}return{formatName:e,formatOptions:t}},Mr=r=>{const e={};return(t,i,o)=>{let s=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(s={...s,[o.interpolationkey]:void 0});const n=i+JSON.stringify(s);let a=e[n];return a||(a=r(vt(i),o),e[n]=a),a(t)}},cn=r=>(e,t,i)=>r(vt(t),i)(e);class pn{constructor(e={}){this.logger=fe.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Mr:cn;this.formats={number:i((o,s)=>{const n=new Intl.NumberFormat(o,{...s});return a=>n.format(a)}),currency:i((o,s)=>{const n=new Intl.NumberFormat(o,{...s,style:"currency"});return a=>n.format(a)}),datetime:i((o,s)=>{const n=new Intl.DateTimeFormat(o,{...s});return a=>n.format(a)}),relativetime:i((o,s)=>{const n=new Intl.RelativeTimeFormat(o,{...s});return a=>n.format(a,s.range||"day")}),list:i((o,s)=>{const n=new Intl.ListFormat(o,{...s});return a=>n.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Mr(t)}format(e,t,i,o={}){if(!t||e==null)return e;const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&!s[0].includes(")")&&s.find(a=>a.includes(")"))){const a=s.findIndex(l=>l.includes(")"));s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{var p;const{formatName:d,formatOptions:c}=dn(l);if(this.formats[d]){let u=a;try{const y=((p=o==null?void 0:o.formatParams)==null?void 0:p[o.interpolationkey])||{},v=y.locale||y.lng||o.locale||o.lng||i;u=this.formats[d](a,v,{...c,...o,...y})}catch(y){this.logger.warn(y)}return u}else this.logger.warn(`there was no format function for ${d}`);return a},e)}}const un=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class fn extends ei{constructor(e,t,i,o={}){var s,n;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=fe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(n=(s=this.backend)==null?void 0:s.init)==null||n.call(s,i,o.backend,o)}queueLoad(e,t,i,o){const s={},n={},a={},l={};return e.forEach(d=>{let c=!0;t.forEach(p=>{const u=`${d}|${p}`;!i.reload&&this.store.hasResourceBundle(d,p)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?n[u]===void 0&&(n[u]=!0):(this.state[u]=1,c=!1,n[u]===void 0&&(n[u]=!0),s[u]===void 0&&(s[u]=!0),l[p]===void 0&&(l[p]=!0)))}),c||(a[d]=!0)}),(Object.keys(s).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(s),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const o=e.split("|"),s=o[0],n=o[1];t&&this.emit("failedLoading",s,n,t),!t&&i&&this.store.addResourceBundle(s,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Js(l.loaded,[s],n),un(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{a[d]||(a[d]={});const c=l.loaded[d];c.length&&c.forEach(p=>{a[d][p]===void 0&&(a[d][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i,o=0,s=this.retryTimeout,n){if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:s,callback:n});return}this.readingCalls++;const a=(d,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(d&&c&&o<this.maxRetries){setTimeout(()=>{this.read(e,t,i,o+1,s*2,n)},s);return}n(d,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,t);d&&typeof d.then=="function"?d.then(c=>a(null,c)).catch(a):a(null,d)}catch(d){a(d)}return}return l(e,t,a)}prepareLoading(e,t,i={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();j(e)&&(e=this.languageUtils.toResolveHierarchy(e)),j(t)&&(t=[t]);const s=this.queueLoad(e,t,i,o);if(!s.toLoad.length)return s.pending.length||o(),null;s.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),o=i[0],s=i[1];this.read(o,s,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${s} for language ${o} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${s} for language ${o}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,o,s,n={},a=()=>{}){var l,d,c,p,u;if((d=(l=this.services)==null?void 0:l.utils)!=null&&d.hasLoadedNamespace&&!((p=(c=this.services)==null?void 0:c.utils)!=null&&p.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((u=this.backend)!=null&&u.create){const y={...n,isUpdate:s},v=this.backend.create.bind(this.backend);if(v.length<6)try{let w;v.length===5?w=v(e,t,i,o,y):w=v(e,t,i,o),w&&typeof w.then=="function"?w.then(P=>a(null,P)).catch(a):a(null,w)}catch(w){a(w)}else v(e,t,i,o,a,y)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}const ci=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),j(r[1])&&(e.defaultValue=r[1]),j(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Br=r=>(j(r.ns)&&(r.ns=[r.ns]),j(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),j(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&!r.supportedLngs.includes("cimode")&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r),Tt=()=>{},hn=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class ht extends ei{constructor(e={},t){if(super(),this.options=Br(e),this.services={},this.logger=fe,this.modules={external:[]},hn(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(j(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const i=ci();this.options={...i,...this.options,...Br(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const o=d=>d?typeof d=="function"?new d:d:null;if(!this.options.isClone){this.modules.logger?fe.init(o(this.modules.logger),this.options):fe.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:d=pn;const c=new Fr(this.options);this.store=new Tr(this.options.resources,this.options);const p=this.services;p.logger=fe,p.resourceStore=this.store,p.languageUtils=c,p.pluralResolver=new ln(c,{prepend:this.options.pluralSeparator}),d&&(p.formatter=o(d),p.formatter.init&&p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Ir(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new fn(o(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",(u,...y)=>{this.emit(u,...y)}),this.modules.languageDetector&&(p.languageDetector=o(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=o(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Yt(this.services,this.options),this.translator.on("*",(u,...y)=>{this.emit(u,...y)}),this.modules.external.forEach(u=>{u.init&&u.init(this)})}if(this.format=this.options.interpolation.format,t||(t=Tt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=(...c)=>this.store[d](...c)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=(...c)=>(this.store[d](...c),this)});const a=st(),l=()=>{const d=(c,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(p),t(c,p)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=Tt){var s,n;let i=t;const o=j(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=d=>{if(!d||d==="cimode")return;this.services.languageUtils.toResolveHierarchy(d).forEach(p=>{p!=="cimode"&&(a.includes(p)||a.push(p))})};o?l(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>l(c)),(n=(s=this.options.preload)==null?void 0:s.forEach)==null||n.call(s,d=>l(d)),this.services.backendConnector.load(a,this.options.ns,d=>{!d&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(d)})}else i(null)}reloadResources(e,t,i){const o=st();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=Tt),this.services.backendConnector.reload(e,t,s=>{o.resolve(),i(s)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Do.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!["cimode","dev"].includes(i)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=st();this.emit("languageChanging",e);const o=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},s=(a,l)=>{l?this.isLanguageChangingTo===e&&(o(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...d)=>this.t(...d)),t&&t(a,(...d)=>this.t(...d))},n=a=>{var c,p;!e&&!a&&this.services.languageDetector&&(a=[]);const l=j(a)?a:a&&a[0],d=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(j(a)?[a]:a);d&&(this.language||o(d),this.translator.language||this.translator.changeLanguage(d),(p=(c=this.services.languageDetector)==null?void 0:c.cacheUserLanguage)==null||p.call(c,d)),this.loadResources(d,u=>{s(u,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),i}getFixedT(e,t,i,o){const s=o==null?void 0:o.scopeNs,n=(a,l,...d)=>{let c;typeof l!="object"?c=this.options.overloadTranslationOptionHandler([a,l].concat(d)):c={...l},c.lng=c.lng||n.lng,c.lngs=c.lngs||n.lngs;const p=c.ns!==void 0&&c.ns!==null;c.ns=c.ns||n.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||i||n.keyPrefix);const u={...this.options,...c};Array.isArray(s)&&!p&&(u.ns=s),typeof c.keyPrefix=="function"&&(c.keyPrefix=Ge(c.keyPrefix,u));const y=this.options.keySeparator||".";let v;return c.keyPrefix&&Array.isArray(a)?v=a.map(w=>(typeof w=="function"&&(w=Ge(w,u)),`${c.keyPrefix}${y}${w}`)):(typeof a=="function"&&(a=Ge(a,u)),v=c.keyPrefix?`${c.keyPrefix}${y}${a}`:a),this.t(v,c)};return j(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(...e){var t;return(t=this.translator)==null?void 0:t.translate(...e)}exists(...e){var t;return(t=this.translator)==null?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const d=this.services.backendConnector.state[`${a}|${l}`];return d===-1||d===0||d===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!o||n(s,e)))}loadNamespaces(e,t){const i=st();return this.options.ns?(j(e)&&(e=[e]),e.forEach(o=>{this.options.ns.includes(o)||this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=st();j(e)&&(e=[e]);const o=this.options.preload||[],s=e.filter(n=>!o.includes(n)&&this.services.languageUtils.isSupportedCode(n));return s.length?(this.options.preload=o.concat(s),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){var o,s;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const n=new Intl.Locale(e);if(n&&n.getTextInfo){const a=n.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((s=this.services)==null?void 0:s.languageUtils)||new Fr(ci());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.includes(i.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new ht(e,t);return i.createInstance=ht.createInstance,i}cloneInstance(e={},t=Tt){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},s=new ht(o);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const a=Object.keys(this.store.data).reduce((l,d)=>(l[d]={...this.store.data[d]},l[d]=Object.keys(l[d]).reduce((c,p)=>(c[p]={...l[d][p]},c),l[d]),l),{});s.store=new Tr(a,o),s.services.resourceStore=s.store}if(e.interpolation){const l={...ci().interpolation,...this.options.interpolation,...e.interpolation},d={...o,interpolation:l};s.services.interpolator=new Ir(d)}return s.translator=new Yt(s.services,o),s.translator.on("*",(a,...l)=>{s.emit(a,...l)}),s.init(o,t),s.translator.options=o,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const oe=ht.createInstance();oe.createInstance;oe.dir;oe.init;oe.loadResources;oe.reloadResources;oe.use;oe.changeLanguage;oe.getFixedT;oe.t;oe.exists;oe.setDefaultNamespace;oe.hasLoadedNamespace;oe.loadNamespaces;oe.loadLanguages;const Mo=["__proto__","constructor","prototype"];function Bo(r){return!(typeof r!="string"||r.length===0||r.length>128||Mo.indexOf(r)>-1||r.indexOf("..")>-1||r.indexOf("\\")>-1||/[?#%\s@]/.test(r)||/[\x00-\x1F\x7F]/.test(r))}function No(r){return!(!Bo(r)||r.indexOf("/")>-1)}function gn(r){return Bo(r)}const mn={lng:No,ns:gn};function Ft(r){return typeof r!="string"?r:r.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function xn(r){if(typeof r!="string"||r.length===0)return r;try{const e=new URL(r);return e.username||e.password?(e.username="",e.password="",e.toString()):r}catch{return r.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function Ho(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function vn(r){return!!r&&typeof r.then=="function"}function bn(r){return vn(r)?r:Promise.resolve(r)}const yn=/\{\{(.+?)\}\}/g;function Nr(r,e){let t=!1;const i=r.replace(yn,(o,s)=>{const n=s.trim();if(Mo.indexOf(n)>-1)return o;const a=e[n];if(a==null)return o;const l=mn[n]||No,d=String(a).split("+");for(const c of d)if(!l(c))return t=!0,o;return d.join("+")});return t?null:i}const Fe=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let Wt;typeof fetch=="function"?Wt=fetch:Fe&&typeof Fe.fetch=="function"&&(Wt=Fe.fetch);const Hr=Ho()&&Fe?Fe.XMLHttpRequest:void 0,wn=typeof ActiveXObject=="function"&&Fe?Fe.ActiveXObject:void 0,qo=["__proto__","constructor","prototype"],bi=(r,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))qo.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return r;r=r+(r.indexOf("?")!==-1?"&":"?")+t.slice(1)}return r},qr=(r,e,t,i)=>{const o=s=>{if(!s.ok)return t(s.statusText||"Error",{status:s.status});s.text().then(n=>{t(null,{status:s.status,data:n})}).catch(t)};if(i){const s=i(r,e);if(s instanceof Promise){s.then(o).catch(t);return}}typeof fetch=="function"?fetch(r,e).then(o).catch(t):Wt(r,e).then(o).catch(t)},_n=(r,e,t,i)=>{r.queryStringParams&&(e=bi(e,r.queryStringParams));const o={...typeof r.customHeaders=="function"?r.customHeaders():r.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(o["Content-Type"]="application/json");const s=typeof r.requestOptions=="function"?r.requestOptions(t):r.requestOptions,n={method:t?"POST":"GET",body:t?r.stringify(t):void 0,headers:o,...r._omitFetchOptions?{}:s},a=typeof r.alternateFetch=="function"&&r.alternateFetch.length>=1?r.alternateFetch:void 0;try{qr(e,n,i,a)}catch(l){if(!s||Object.keys(s).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(s).forEach(d=>{delete n[d]}),qr(e,n,i,a),r._omitFetchOptions=!0}catch(d){i(d)}}},kn=(r,e,t,i)=>{t&&typeof t=="object"&&(t=bi("",t).slice(1)),r.queryStringParams&&(e=bi(e,r.queryStringParams));try{const o=Hr?new Hr:new wn("MSXML2.XMLHTTP.3.0");o.open(t?"POST":"GET",e,1),r.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!r.withCredentials,t&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");let s=r.customHeaders;if(s=typeof s=="function"?s():s,s)for(const n of Object.keys(s))qo.indexOf(n)>-1||o.setRequestHeader(n,s[n]);o.onreadystatechange=()=>{o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(t)}catch(o){console&&console.log(o)}},$n=(r,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),Wt&&e.indexOf("file:")!==0)return _n(r,e,t,i);if(Ho()||typeof ActiveXObject=="function")return kn(r,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},Sn=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:r=>JSON.parse(r),stringify:JSON.stringify,parsePayload:(r,e,t)=>({[e]:t||""}),parseLoadPayload:(r,e)=>{},request:$n,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var Vo=class{constructor(r,e={},t={}){this.services=r,this.options=e,this.allOptions=t,this.type="backend",this.init(r,e,t)}init(r,e={},t={}){if(this.services=r,this.options={...Sn(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(r,e,t){this._readAny(r,r,e,e,t)}read(r,e,t){this._readAny([r],r,[e],e,t)}_readAny(r,e,t,i,o){let s=this.options.loadPath;typeof this.options.loadPath=="function"&&(s=this.options.loadPath(r,t)),s=bn(s),s.then(n=>{if(!n)return o(null,{});const a=Nr(n,{lng:r.join("+"),ns:t.join("+")});if(a==null){const l=r.map(Ft).join(", "),d=t.map(Ft).join(", ");return o(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+d+"]"),!1)}this.loadUrl(a,o,e,i)})}loadUrl(r,e,t,i){const o=typeof t=="string"?[t]:t,s=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(o,s),a=Ft(xn(r));this.options.request(this.options,r,n,(l,d)=>{if(d&&(d.status>=500&&d.status<600||!d.status))return e("failed loading "+a+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return e("failed loading "+a+"; status code: "+d.status,!1);if(!d&&l&&l.message){const u=l.message.toLowerCase();if(["failed","fetch","network","load"].find(y=>u.indexOf(y)>-1))return e("failed loading "+a+": "+Ft(l.message),!0)}if(l)return e(l,!1);let c,p;try{typeof d.data=="string"?c=this.options.parse(d.data,t,i):c=d.data}catch{p="failed parsing "+a+" to json"}if(p)return e(p,!1);e(null,c)})}create(r,e,t,i,o){if(!this.options.addPath)return;typeof r=="string"&&(r=[r]);const s=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];r.forEach(d=>{let c=this.options.addPath;typeof this.options.addPath=="function"&&(c=this.options.addPath(d,e));const p=Nr(c,{lng:d,ns:e});if(p==null){n+=1,o&&n===r.length&&o(a,l);return}this.options.request(this.options,p,s,(u,y)=>{n+=1,a.push(u),l.push(y),n===r.length&&typeof o=="function"&&o(a,l)})})}reload(){const{backendConnector:r,languageUtils:e,logger:t}=this.services,i=r.language;if(i&&i.toLowerCase()==="cimode")return;const o=[],s=n=>{e.toResolveHierarchy(n).forEach(a=>{o.indexOf(a)<0&&o.push(a)})};s(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>s(n)),o.forEach(n=>{this.allOptions.ns.forEach(a=>{r.read(n,a,"read",null,null,(l,d)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&d&&t.log(`loaded namespace ${a} for language ${n}`,d),r.loaded(`${n}|${a}`,l,d)})})})}};Vo.type="backend";const Ko="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Cn="https://i18n-fastly.ultrafast.io",En="https://neo.wordplex.io",yi="uploader";let Ue=null;async function Pn(r="en"){return Ue?(Ue.language!==r&&await Ue.changeLanguage(r),{i18n:Ue,isNew:!1}):(Ue=oe.createInstance(),await Ue.use(Vo).init({lng:r,fallbackLng:"en",ns:[yi],defaultNS:yi,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{addPath:"",loadPath:`${Cn}/api/export/grid/f2/${Ko}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){var s;const i=JSON.parse(e),o=Array.isArray(t)?t[0]:t;return o&&((s=i[o])!=null&&s.__without_namespace)?i[o].__without_namespace:i}}}),{i18n:Ue,isNew:!0})}const Un="sfxUploaderTranslationsMissingKeysEnabled";class On{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(Un)==="true",this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,t,i,o)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,t,i,o))})}handleMissingKey(e,t="",i=yi){if(!this.enabled)return;const o=`${i}:${e}`;this._missingKeys[o]={value:t,ns:i}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${En}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${Ko}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:t,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:t}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const Rn=new On;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:Mi},An=(r=Ln,e,t)=>{const{kind:i,metadata:o}=t;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(t.name,r),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+i)};function A(r){return(e,t)=>typeof t=="object"?An(r,e,t):((i,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(r){return A({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ni(r,e){return(t,i,o)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(r))??null};return Tn(t,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ti=r=>(...e)=>({_$litDirective$:r,values:e});class qi{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const pi=r=>r.includes("-")?r:r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Fn extends qi{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Hi.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return ce}update(e,[t]){if(t===this._lastStyles)return ce;this._lastStyles=t;const{style:i}=e.element,o=t??{};for(const s of this._appliedProps)(!(s in o)||o[s]==null||o[s]==="")&&(i.removeProperty(pi(s)),this._appliedProps.delete(s));for(const[s,n]of Object.entries(o))n!=null&&n!==""?(i.setProperty(pi(s),n),this._appliedProps.add(s)):this._appliedProps.has(s)&&(i.removeProperty(pi(s)),this._appliedProps.delete(s));return ce}}const Z=ti(Fn);function zn(r,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,r);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const o=(l=(a=r.response)==null?void 0:a.file)==null?void 0:l.uuid;return o?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(o))}`:null}class jn{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function W(r,e,t){const i=r.getState().files,o=i.get(e);if(!o)return;const s=new Map(i);s.set(e,{...o,...t}),r.setState({files:s})}function Be(r,e){const t=new Map(r.getState().files);t.set(e.id,e),r.setState({files:t})}function Vr(r,e){const t=r.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),r.setState({files:i})}function Dn(){return new jn({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:(r,e,t)=>{const i=(o,s)=>o.replace(/\{\{(\w+)\}\}/g,(n,a)=>String(s[a]??""));if(typeof e=="string")return i(e,t??{});if(typeof e=="object"&&e!==null){const o=e,s=o.count;if(s!==void 0){const n=String((s===1?o.defaultValue_one:o.defaultValue_other)??o.defaultValue??r);return i(n,o)}return i(String(o.defaultValue??r),o)}return r}})}class In{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Mn="SAME_ASSET_EXISTS_SKIP_UPLOAD";function Pt(r){return(r==null?void 0:r.code)===Mn}function Vi(r,e){return{...r,status:"success",file:r.file??{uuid:r.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}const Bn=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Ki(r){return r?r.ref!=null&&r.ref!==""||r.position!=null:!1}function Yi(r){const e={};return(r==null?void 0:r.ref)!=null&&r.ref!==""&&(e.ref=r.ref),(r==null?void 0:r.position)!=null&&(e.position=r.position),e}function Kr(r,e){const t={...r??{}};for(const i of Object.keys(e)){const o=e[i];o===void 0?delete t[i]:t[i]=o}return t}function Nn(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function Hn(r,e){const t=new XMLHttpRequest;let i=!1;const o=Nn(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):Pt(n)?e.onComplete(Vi(n,r)):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const s=new FormData;if(r.file){const n={name:r.name,type:r.type};s.append("info[files[]]",JSON.stringify(n)),Object.keys(r.meta).length>0&&s.append("meta[files[]]",JSON.stringify(r.meta)),r.tags.length>0&&s.append("tags[files[]]",JSON.stringify(r.tags)),Ki(r.product)&&s.append("product[files[]]",JSON.stringify(Yi(r.product))),s.append("files[]",r.file,r.name)}return t.send(s),{abort(){i=!0,t.abort()}}}function ii(r){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":r}}function Ee(r){return r.replace(/\/+$/,"")}const qn={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Ut(r){return qn[r]??r}function ec(r,e){const t=Ee(r),i=btoa(JSON.stringify({origin:window.location.origin})),o=Ut(e);return`${t}/${o}/connect?state=${encodeURIComponent(i)}`}async function Vn(r,e,t,i="",o){const s=Ee(r),n=i?`/${i}`:"",a=Ut(e),l=await fetch(`${s}/${a}/list${n}`,{method:"GET",headers:ii(t),credentials:"same-origin",signal:o});if(l.status===401)throw new Wi;if(!l.ok){const d=await l.json().catch(()=>null);throw new Error((d==null?void 0:d.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Kn(r,e,t,i){const o=Ee(r),s=await fetch(`${o}/${t}`,{method:"GET",headers:ii(e),credentials:"same-origin",signal:i});if(s.status===401)throw new Wi;if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${s.status})`)}return s.json()}async function tc(r,e,t,i,o,s){const n=[];async function a(l,d){let c=null,p=!0;do{if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");const u=p?await Vn(r,e,t,l,s):await Kn(r,t,c,s);p=!1,c=u.nextPagePath;for(const y of u.items){if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");if(y.isFolder){const v=d?`${d}/${y.name}`:y.name;await a(y.requestPath,v)}else n.push({...y,relativeFolder:d})}}while(c)}return await a(i,o),n}async function ic(r,e,t,i){const o=Ee(r),s=Ut(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${o}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function Yn(r,e,t,i,o,s=!1){const n=Ee(r),a=Ut(e),l=s?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,d=s?{Accept:"application/json","Content-Type":"application/json"}:ii(t),c=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(c.status===401)throw new Wi;if(!c.ok){const p=await c.json().catch(()=>null);throw new Error((p==null?void 0:p.message)||`Companion upload failed (HTTP ${c.status})`)}return c.json()}async function Wn(r,e,t){const i=Ee(r),o=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!o.ok){const s=await o.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Could not fetch URL metadata (HTTP ${o.status})`)}return o.json()}async function Gn(r,e,t,i){const o=Ee(r),s=await fetch(`${o}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${s.status})`)}return s.json()}async function rc(r,e,t){const i=Ee(r),o=Ut(e),s=await fetch(`${i}/${o}/logout`,{method:"GET",headers:ii(t),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function Xn(r){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r))==null?void 0:o[1])??r;return`${/^https:\/\//i.test(r)?"wss":"ws"}://${t}`}class Wi extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Yo(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function Wo(r,e){const t={name:r.name,type:r.type,"filerobot-folder":e};return r.meta&&Object.keys(r.meta).length>0&&(t.meta=JSON.stringify(r.meta)),r.tags&&r.tags.length>0&&(t.tags=JSON.stringify(r.tags)),Ki(r.product)&&(t.product=JSON.stringify(Yi(r.product))),t}function Go(r){const t=`${Xn(r.companionUrl)}/api/${r.token}`;let i;try{i=new WebSocket(t)}catch{return r.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const s=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,d;if(!o)try{const c=JSON.parse(n.data);switch(c.action){case"progress":{const p=c.payload,u=p.bytesUploaded??0,y=p.bytesTotal??(r.expectedSize||1);r.onProgress(u,y);break}case"success":{const p=c.payload;if(s(),i.close(),(a=p.response)!=null&&a.responseText)try{const u=JSON.parse(p.response.responseText);if(u.status==="success"){r.onComplete(u);return}if(Pt(u)){r.onComplete(Vi(u,r.uploadFile));return}r.onError(new Error(u.msg||"Upload failed"));return}catch{}r.onError(new Error("Upload completed but no valid response received"));break}case"error":{const p=c.payload;s(),i.close();let u=((l=p.error)==null?void 0:l.message)||"Upload failed";if((d=p.response)!=null&&d.responseText)try{const y=JSON.parse(p.response.responseText);u=y.hint||y.msg||y.message||u}catch{}r.onError(new Error(u));break}}}catch{}},i.onerror=()=>{o||(s(),r.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(s(),r.onError(new Error("Upload progress connection closed unexpectedly")))},i}function Xo(r){if(r){r.onmessage=null,r.onerror=null,r.onclose=null;try{r.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}r.close()}}function Jn(r,e){const t=r.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,o=null;const s=Yo(e.apiBase,e.folder,e.extraParams),n=Wo(r,e.folder),a=!t.token;return Yn(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:n},a).then(l=>{i||(o=Go({companionUrl:t.companionUrl,token:l.token,uploadFile:r,expectedSize:t.size,onProgress:(d,c)=>{i||e.onProgress(d,c)},onComplete:d=>{i||e.onComplete(d)},onError:d=>{i||e.onError(d)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,Xo(o),o=null}}}function Zn(r,e){const t=r.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,o=null;const s=new AbortController,n=Yo(e.apiBase,e.folder,e.extraParams);return Wn(e.companionUrl,t,s.signal).then(a=>{var d;if(i)return null;(d=e.onMeta)==null||d.call(e,{name:a.name,type:a.type,size:a.size});const l=Wo(r,e.folder);return a.name&&(l.name=a.name),a.type&&(l.type=a.type),Gn(e.companionUrl,t,{fileId:r.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},s.signal).then(c=>({result:c,size:a.size}))}).then(a=>{i||!a||(o=Go({companionUrl:e.companionUrl,token:a.result.token,uploadFile:r,expectedSize:a.size,onProgress:(l,d)=>{i||e.onProgress(l,d)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,s.abort(),Xo(o),o=null}}}function wi(r){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wi(r)}function Qn(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function ea(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ta(r,e,t){return e=yt(e),ia(r,Gi()?Reflect.construct(e,t||[],yt(r).constructor):e.apply(r,t))}function ia(r,e){if(e&&(wi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ra(r)}function ra(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function oa(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&bt(r,e)}function _i(r){var e=typeof Map=="function"?new Map:void 0;return _i=function(i){if(i===null||!na(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return sa(i,arguments,yt(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),bt(o,i)},_i(r)}function sa(r,e,t){if(Gi())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(r.bind.apply(r,i));return t&&bt(o,t.prototype),o}function Gi(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Gi=function(){return!!r})()}function na(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function bt(r,e){return bt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},bt(r,e)}function yt(r){return yt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},yt(r)}var at=(function(r){function e(t){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(ea(this,e),i=ta(this,e,[t]),i.originalRequest=s,i.originalResponse=n,i.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),s!=null){var a=s.getHeader("X-Request-ID")||"n/a",l=s.getMethod(),d=s.getURL(),c=n?n.getStatus():"n/a",p=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(c,", response text: ").concat(p,", request id: ").concat(a,")")}return i.message=t,i}return oa(e,r),Qn(e)})(_i(Error));function wt(r){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(r)}function aa(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function la(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ca(i.key),i)}}function da(r,e,t){return e&&la(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ca(r){var e=pa(r,"string");return wt(e)=="symbol"?e:e+""}function pa(r,e){if(wt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(wt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var ua=(function(){function r(){aa(this,r)}return da(r,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Jo="3.7.8",fa=Jo,it=typeof Buffer=="function",Yr=typeof TextDecoder=="function"?new TextDecoder:void 0,Wr=typeof TextEncoder=="function"?new TextEncoder:void 0,ha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",lt=Array.prototype.slice.call(ha),zt=(r=>{let e={};return r.forEach((t,i)=>e[t]=i),e})(lt),ga=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,J=String.fromCharCode.bind(String),Gr=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):r=>new Uint8Array(Array.prototype.slice.call(r,0)),Zo=r=>r.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Qo=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),es=r=>{let e,t,i,o,s="";const n=r.length%3;for(let a=0;a<r.length;){if((t=r.charCodeAt(a++))>255||(i=r.charCodeAt(a++))>255||(o=r.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|o,s+=lt[e>>18&63]+lt[e>>12&63]+lt[e>>6&63]+lt[e&63]}return n?s.slice(0,n-3)+"===".substring(n):s},Xi=typeof btoa=="function"?r=>btoa(r):it?r=>Buffer.from(r,"binary").toString("base64"):es,ki=it?r=>Buffer.from(r).toString("base64"):r=>{let t=[];for(let i=0,o=r.length;i<o;i+=4096)t.push(J.apply(null,r.subarray(i,i+4096)));return Xi(t.join(""))},It=(r,e=!1)=>e?Zo(ki(r)):ki(r),ma=r=>{if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?J(192|e>>>6)+J(128|e&63):J(224|e>>>12&15)+J(128|e>>>6&63)+J(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return J(240|e>>>18&7)+J(128|e>>>12&63)+J(128|e>>>6&63)+J(128|e&63)}},xa=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ts=r=>r.replace(xa,ma),Xr=it?r=>Buffer.from(r,"utf8").toString("base64"):Wr?r=>ki(Wr.encode(r)):r=>Xi(ts(r)),Xe=(r,e=!1)=>e?Zo(Xr(r)):Xr(r),Jr=r=>Xe(r,!0),va=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,ba=r=>{switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return J((t>>>10)+55296)+J((t&1023)+56320);case 3:return J((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return J((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},is=r=>r.replace(va,ba),rs=r=>{if(r=r.replace(/\s+/g,""),!ga.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let e,t,i,o=[];for(let s=0;s<r.length;)e=zt[r.charAt(s++)]<<18|zt[r.charAt(s++)]<<12|(t=zt[r.charAt(s++)])<<6|(i=zt[r.charAt(s++)]),t===64?o.push(J(e>>16&255)):i===64?o.push(J(e>>16&255,e>>8&255)):o.push(J(e>>16&255,e>>8&255,e&255));return o.join("")},Ji=typeof atob=="function"?r=>atob(Qo(r)):it?r=>Buffer.from(r,"base64").toString("binary"):rs,os=it?r=>Gr(Buffer.from(r,"base64")):r=>Gr(Ji(r).split("").map(e=>e.charCodeAt(0))),ss=r=>os(ns(r)),ya=it?r=>Buffer.from(r,"base64").toString("utf8"):Yr?r=>Yr.decode(os(r)):r=>is(Ji(r)),ns=r=>Qo(r.replace(/[-_]/g,e=>e=="-"?"+":"/")),$i=r=>ya(ns(r)),wa=r=>{if(typeof r!="string")return!1;const e=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},as=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),ls=function(){const r=(e,t)=>Object.defineProperty(String.prototype,e,as(t));r("fromBase64",function(){return $i(this)}),r("toBase64",function(e){return Xe(this,e)}),r("toBase64URI",function(){return Xe(this,!0)}),r("toBase64URL",function(){return Xe(this,!0)}),r("toUint8Array",function(){return ss(this)})},ds=function(){const r=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,as(t));r("toBase64",function(e){return It(this,e)}),r("toBase64URI",function(){return It(this,!0)}),r("toBase64URL",function(){return It(this,!0)})},_a=()=>{ls(),ds()},ka={version:Jo,VERSION:fa,atob:Ji,atobPolyfill:rs,btoa:Xi,btoaPolyfill:es,fromBase64:$i,toBase64:Xe,encode:Xe,encodeURI:Jr,encodeURL:Jr,utob:ts,btou:is,decode:$i,isValid:wa,fromUint8Array:It,toUint8Array:ss,extendString:ls,extendUint8Array:ds,extendBuiltins:_a};var Zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $a(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ui,Qr;function Sa(){return Qr||(Qr=1,ui=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),ui}var jt={},eo;function Ca(){if(eo)return jt;eo=1;var r=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function o(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(n);){var c=t(d[1]),p=t(d[2]);c===null||p===null||c in l||(l[c]=p)}return l}function s(n,a){a=a||"";var l=[],d,c;typeof a!="string"&&(a="?");for(c in n)if(r.call(n,c)){if(d=n[c],!d&&(d===null||d===e||isNaN(d))&&(d=""),c=i(c),d=i(d),c===null||d===null)continue;l.push(c+"="+d)}return l.length?a+l.join("&"):""}return jt.stringify=s,jt.parse=o,jt}var fi,to;function Ea(){if(to)return fi;to=1;var r=Sa(),e=Ca(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(k){return(k||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function(_,g){return u(g.protocol)?_.replace(/\\/g,"/"):_},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function p(k){var _;typeof window<"u"?_=window:typeof Zr<"u"?_=Zr:typeof self<"u"?_=self:_={};var g=_.location||{};k=k||g;var b={},R=typeof k,U;if(k.protocol==="blob:")b=new w(unescape(k.pathname),{});else if(R==="string"){b=new w(k,{});for(U in c)delete b[U]}else if(R==="object"){for(U in k)U in c||(b[U]=k[U]);b.slashes===void 0&&(b.slashes=o.test(k.href))}return b}function u(k){return k==="file:"||k==="ftp:"||k==="http:"||k==="https:"||k==="ws:"||k==="wss:"}function y(k,_){k=l(k),k=k.replace(i,""),_=_||{};var g=n.exec(k),b=g[1]?g[1].toLowerCase():"",R=!!g[2],U=!!g[3],F=0,L;return R?U?(L=g[2]+g[3]+g[4],F=g[2].length+g[3].length):(L=g[2]+g[4],F=g[2].length):U?(L=g[3]+g[4],F=g[3].length):L=g[4],b==="file:"?F>=2&&(L=L.slice(2)):u(b)?L=g[4]:b?R&&(L=L.slice(2)):F>=2&&u(_.protocol)&&(L=g[4]),{protocol:b,slashes:R||u(b),slashesCount:F,rest:L}}function v(k,_){if(k==="")return _;for(var g=(_||"/").split("/").slice(0,-1).concat(k.split("/")),b=g.length,R=g[b-1],U=!1,F=0;b--;)g[b]==="."?g.splice(b,1):g[b]===".."?(g.splice(b,1),F++):F&&(b===0&&(U=!0),g.splice(b,1),F--);return U&&g.unshift(""),(R==="."||R==="..")&&g.push(""),g.join("/")}function w(k,_,g){if(k=l(k),k=k.replace(i,""),!(this instanceof w))return new w(k,_,g);var b,R,U,F,L,N,de=d.slice(),be=typeof _,O=this,q=0;for(be!=="object"&&be!=="string"&&(g=_,_=null),g&&typeof g!="function"&&(g=e.parse),_=p(_),R=y(k||"",_),b=!R.protocol&&!R.slashes,O.slashes=R.slashes||b&&_.slashes,O.protocol=R.protocol||_.protocol||"",k=R.rest,(R.protocol==="file:"&&(R.slashesCount!==2||a.test(k))||!R.slashes&&(R.protocol||R.slashesCount<2||!u(O.protocol)))&&(de[3]=[/(.*)/,"pathname"]);q<de.length;q++){if(F=de[q],typeof F=="function"){k=F(k,O);continue}U=F[0],N=F[1],U!==U?O[N]=k:typeof U=="string"?(L=U==="@"?k.lastIndexOf(U):k.indexOf(U),~L&&(typeof F[2]=="number"?(O[N]=k.slice(0,L),k=k.slice(L+F[2])):(O[N]=k.slice(L),k=k.slice(0,L)))):(L=U.exec(k))&&(O[N]=L[1],k=k.slice(0,L.index)),O[N]=O[N]||b&&F[3]&&_[N]||"",F[4]&&(O[N]=O[N].toLowerCase())}g&&(O.query=g(O.query)),b&&_.slashes&&O.pathname.charAt(0)!=="/"&&(O.pathname!==""||_.pathname!=="")&&(O.pathname=v(O.pathname,_.pathname)),O.pathname.charAt(0)!=="/"&&u(O.protocol)&&(O.pathname="/"+O.pathname),r(O.port,O.protocol)||(O.host=O.hostname,O.port=""),O.username=O.password="",O.auth&&(L=O.auth.indexOf(":"),~L?(O.username=O.auth.slice(0,L),O.username=encodeURIComponent(decodeURIComponent(O.username)),O.password=O.auth.slice(L+1),O.password=encodeURIComponent(decodeURIComponent(O.password))):O.username=encodeURIComponent(decodeURIComponent(O.auth)),O.auth=O.password?O.username+":"+O.password:O.username),O.origin=O.protocol!=="file:"&&u(O.protocol)&&O.host?O.protocol+"//"+O.host:"null",O.href=O.toString()}function P(k,_,g){var b=this;switch(k){case"query":typeof _=="string"&&_.length&&(_=(g||e.parse)(_)),b[k]=_;break;case"port":b[k]=_,r(_,b.protocol)?_&&(b.host=b.hostname+":"+_):(b.host=b.hostname,b[k]="");break;case"hostname":b[k]=_,b.port&&(_+=":"+b.port),b.host=_;break;case"host":b[k]=_,s.test(_)?(_=_.split(":"),b.port=_.pop(),b.hostname=_.join(":")):(b.hostname=_,b.port="");break;case"protocol":b.protocol=_.toLowerCase(),b.slashes=!g;break;case"pathname":case"hash":if(_){var R=k==="pathname"?"/":"#";b[k]=_.charAt(0)!==R?R+_:_}else b[k]=_;break;case"username":case"password":b[k]=encodeURIComponent(_);break;case"auth":var U=_.indexOf(":");~U?(b.username=_.slice(0,U),b.username=encodeURIComponent(decodeURIComponent(b.username)),b.password=_.slice(U+1),b.password=encodeURIComponent(decodeURIComponent(b.password))):b.username=encodeURIComponent(decodeURIComponent(_))}for(var F=0;F<d.length;F++){var L=d[F];L[4]&&(b[L[1]]=b[L[1]].toLowerCase())}return b.auth=b.password?b.username+":"+b.password:b.username,b.origin=b.protocol!=="file:"&&u(b.protocol)&&b.host?b.protocol+"//"+b.host:"null",b.href=b.toString(),b}function T(k){(!k||typeof k!="function")&&(k=e.stringify);var _,g=this,b=g.host,R=g.protocol;R&&R.charAt(R.length-1)!==":"&&(R+=":");var U=R+(g.protocol&&g.slashes||u(g.protocol)?"//":"");return g.username?(U+=g.username,g.password&&(U+=":"+g.password),U+="@"):g.password?(U+=":"+g.password,U+="@"):g.protocol!=="file:"&&u(g.protocol)&&!b&&g.pathname!=="/"&&(U+="@"),(b[b.length-1]===":"||s.test(g.hostname)&&!g.port)&&(b+=":"),U+=b+g.pathname,_=typeof g.query=="object"?k(g.query):g.query,_&&(U+=_.charAt(0)!=="?"?"?"+_:_),g.hash&&(U+=g.hash),U}return w.prototype={set:P,toString:T},w.extractProtocol=y,w.location=p,w.trimLeft=l,w.qs=e,fi=w,fi}var Pa=Ea();const Ua=$a(Pa);function Oa(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function Si(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Si=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(x,f,m){x[f]=m.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(x,f,m){return Object.defineProperty(x,f,{value:m,enumerable:!0,configurable:!0,writable:!0}),x[f]}try{d({},"")}catch{d=function(m,C,E){return m[C]=E}}function c(x,f,m,C){var E=f&&f.prototype instanceof T?f:T,S=Object.create(E.prototype),z=new q(C||[]);return o(S,"_invoke",{value:N(x,m,z)}),S}function p(x,f,m){try{return{type:"normal",arg:x.call(f,m)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var u="suspendedStart",y="suspendedYield",v="executing",w="completed",P={};function T(){}function k(){}function _(){}var g={};d(g,n,function(){return this});var b=Object.getPrototypeOf,R=b&&b(b(ue([])));R&&R!==t&&i.call(R,n)&&(g=R);var U=_.prototype=T.prototype=Object.create(g);function F(x){["next","throw","return"].forEach(function(f){d(x,f,function(m){return this._invoke(f,m)})})}function L(x,f){function m(E,S,z,M){var B=p(x[E],x,S);if(B.type!=="throw"){var G=B.arg,X=G.value;return X&&je(X)=="object"&&i.call(X,"__await")?f.resolve(X.__await).then(function(te){m("next",te,z,M)},function(te){m("throw",te,z,M)}):f.resolve(X).then(function(te){G.value=te,z(G)},function(te){return m("throw",te,z,M)})}M(B.arg)}var C;o(this,"_invoke",{value:function(S,z){function M(){return new f(function(B,G){m(S,z,B,G)})}return C=C?C.then(M,M):M()}})}function N(x,f,m){var C=u;return function(E,S){if(C===v)throw Error("Generator is already running");if(C===w){if(E==="throw")throw S;return{value:r,done:!0}}for(m.method=E,m.arg=S;;){var z=m.delegate;if(z){var M=de(z,m);if(M){if(M===P)continue;return M}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(C===u)throw C=w,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);C=v;var B=p(x,f,m);if(B.type==="normal"){if(C=m.done?w:y,B.arg===P)continue;return{value:B.arg,done:m.done}}B.type==="throw"&&(C=w,m.method="throw",m.arg=B.arg)}}}function de(x,f){var m=f.method,C=x.iterator[m];if(C===r)return f.delegate=null,m==="throw"&&x.iterator.return&&(f.method="return",f.arg=r,de(x,f),f.method==="throw")||m!=="return"&&(f.method="throw",f.arg=new TypeError("The iterator does not provide a '"+m+"' method")),P;var E=p(C,x.iterator,f.arg);if(E.type==="throw")return f.method="throw",f.arg=E.arg,f.delegate=null,P;var S=E.arg;return S?S.done?(f[x.resultName]=S.value,f.next=x.nextLoc,f.method!=="return"&&(f.method="next",f.arg=r),f.delegate=null,P):S:(f.method="throw",f.arg=new TypeError("iterator result is not an object"),f.delegate=null,P)}function be(x){var f={tryLoc:x[0]};1 in x&&(f.catchLoc=x[1]),2 in x&&(f.finallyLoc=x[2],f.afterLoc=x[3]),this.tryEntries.push(f)}function O(x){var f=x.completion||{};f.type="normal",delete f.arg,x.completion=f}function q(x){this.tryEntries=[{tryLoc:"root"}],x.forEach(be,this),this.reset(!0)}function ue(x){if(x||x===""){var f=x[n];if(f)return f.call(x);if(typeof x.next=="function")return x;if(!isNaN(x.length)){var m=-1,C=function E(){for(;++m<x.length;)if(i.call(x,m))return E.value=x[m],E.done=!1,E;return E.value=r,E.done=!0,E};return C.next=C}}throw new TypeError(je(x)+" is not iterable")}return k.prototype=_,o(U,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:k,configurable:!0}),k.displayName=d(_,l,"GeneratorFunction"),e.isGeneratorFunction=function(x){var f=typeof x=="function"&&x.constructor;return!!f&&(f===k||(f.displayName||f.name)==="GeneratorFunction")},e.mark=function(x){return Object.setPrototypeOf?Object.setPrototypeOf(x,_):(x.__proto__=_,d(x,l,"GeneratorFunction")),x.prototype=Object.create(U),x},e.awrap=function(x){return{__await:x}},F(L.prototype),d(L.prototype,a,function(){return this}),e.AsyncIterator=L,e.async=function(x,f,m,C,E){E===void 0&&(E=Promise);var S=new L(c(x,f,m,C),E);return e.isGeneratorFunction(f)?S:S.next().then(function(z){return z.done?z.value:S.next()})},F(U),d(U,l,"Generator"),d(U,n,function(){return this}),d(U,"toString",function(){return"[object Generator]"}),e.keys=function(x){var f=Object(x),m=[];for(var C in f)m.push(C);return m.reverse(),function E(){for(;m.length;){var S=m.pop();if(S in f)return E.value=S,E.done=!1,E}return E.done=!0,E}},e.values=ue,q.prototype={constructor:q,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!f)for(var m in this)m.charAt(0)==="t"&&i.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=r)},stop:function(){this.done=!0;var f=this.tryEntries[0].completion;if(f.type==="throw")throw f.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var m=this;function C(G,X){return z.type="throw",z.arg=f,m.next=G,X&&(m.method="next",m.arg=r),!!X}for(var E=this.tryEntries.length-1;E>=0;--E){var S=this.tryEntries[E],z=S.completion;if(S.tryLoc==="root")return C("end");if(S.tryLoc<=this.prev){var M=i.call(S,"catchLoc"),B=i.call(S,"finallyLoc");if(M&&B){if(this.prev<S.catchLoc)return C(S.catchLoc,!0);if(this.prev<S.finallyLoc)return C(S.finallyLoc)}else if(M){if(this.prev<S.catchLoc)return C(S.catchLoc,!0)}else{if(!B)throw Error("try statement without catch or finally");if(this.prev<S.finallyLoc)return C(S.finallyLoc)}}}},abrupt:function(f,m){for(var C=this.tryEntries.length-1;C>=0;--C){var E=this.tryEntries[C];if(E.tryLoc<=this.prev&&i.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var S=E;break}}S&&(f==="break"||f==="continue")&&S.tryLoc<=m&&m<=S.finallyLoc&&(S=null);var z=S?S.completion:{};return z.type=f,z.arg=m,S?(this.method="next",this.next=S.finallyLoc,P):this.complete(z)},complete:function(f,m){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&m&&(this.next=m),P},finish:function(f){for(var m=this.tryEntries.length-1;m>=0;--m){var C=this.tryEntries[m];if(C.finallyLoc===f)return this.complete(C.completion,C.afterLoc),O(C),P}},catch:function(f){for(var m=this.tryEntries.length-1;m>=0;--m){var C=this.tryEntries[m];if(C.tryLoc===f){var E=C.completion;if(E.type==="throw"){var S=E.arg;O(C)}return S}}throw Error("illegal catch attempt")},delegateYield:function(f,m,C){return this.delegate={iterator:ue(f),resultName:m,nextLoc:C},this.method==="next"&&(this.arg=r),P}},e}function io(r,e,t,i,o,s,n){try{var a=r[s](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,o)}function Ra(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(l){io(s,i,o,n,a,"next",l)}function a(l){io(s,i,o,n,a,"throw",l)}n(void 0)})}}function cs(r,e){return Ta(r)||Aa(r,e)||ps(r,e)||La()}function La(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aa(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,o,s,n,a=[],l=!0,d=!1;try{if(s=(t=t.call(r)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(c){d=!0,o=c}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(d)throw o}}return a}}function Ta(r){if(Array.isArray(r))return r}function je(r){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},je(r)}function Fa(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=ps(r))||e){t&&(r=t);var i=0,o=function(){};return{s:o,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,n=!1,a;return{s:function(){t=t.call(r)},n:function(){var d=t.next();return s=d.done,d},e:function(d){n=!0,a=d},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function ps(r,e){if(r){if(typeof r=="string")return ro(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ro(r,e)}}function ro(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function oo(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Ne(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oo(Object(t),!0).forEach(function(i){za(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):oo(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function za(r,e,t){return e=us(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ja(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function so(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,us(i.key),i)}}function Da(r,e,t){return e&&so(r.prototype,e),t&&so(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function us(r){var e=Ia(r,"string");return je(e)=="symbol"?e:e+""}function Ia(r,e){if(je(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(je(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Mt="tus-v1",Bt="ietf-draft-03",dt="ietf-draft-05",Ma={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:fs,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Mt},Gt=(function(){function r(e,t){ja(this,r),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Da(r,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Mt,Bt,dt].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var s=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];s<n.length;s++){var a=n[s];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,s=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Na(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(c,p){c.uploadUrl=i._parallelUploadUrls[p]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(c,p){var u=0;return i._source.slice(c.start,c.end).then(function(y){var v=y.value;return new Promise(function(w,P){var T=Ne(Ne({},i.options),{},{uploadUrl:c.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Ne(Ne({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:w,onError:P,onProgress:function(g){s=s-u+g,u=g,i._emitProgress(s,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[p]=k.url,i._parallelUploadUrls.filter(function(g){return!!g}).length===a.length&&i._saveUploadInUrlStorage()}}),k=new r(v,T);k.start(),i._parallelUploads.push(k)})})}),d;Promise.all(l).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var c=no(i.options.metadata);return c!==""&&d.setHeader("Upload-Metadata",c),i._sendRequest(d,null)}).then(function(c){if(!Ye(c.getStatus(),200)){i._emitHttpError(d,c,"tus: unexpected response while creating upload");return}var p=c.getHeader("Location");if(p==null){i._emitHttpError(d,c,"tus: invalid or missing Location header");return}i.url=po(i.options.endpoint,p),"Created upload at ".concat(i.url),i._emitSuccess(c)}).catch(function(c){i._emitError(c)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var o=Fa(this._parallelUploads),s;try{for(o.s();!(s=o.n()).done;){var n=s.value;n.abort(t)}}catch(a){o.e(a)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():r.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,o,s){this._emitError(new at(o,s,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),co(t,this._retryAttempt,this.options)){var s=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},s);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=no(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var s;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,s=this._addChunkToRequest(i)):((this.options.protocol===Bt||this.options.protocol===dt)&&i.setHeader("Upload-Complete","?0"),s=this._sendRequest(i,null)),s.then(function(n){if(!Ye(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=po(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(s){var n=s.getStatus();if(!Ye(n,200)){if(n===423){t._emitHttpError(i,s,"tus: upload is currently locked; retry later");return}if(Ye(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,s,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(s.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,s,"tus: invalid or missing offset value");return}var l=Number.parseInt(s.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===Mt){t._emitHttpError(i,s,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(s);return}t._offset=a,t._performUpload()})}).catch(function(s){t._emitHttpError(i,null,"tus: failed to resume upload",s)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(s){if(!Ye(s.getStatus(),200)){t._emitHttpError(i,s,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,s)}).catch(function(s){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),s)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,o=this._offset,s=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(o+n,i._size)}),this.options.protocol===Mt?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===dt&&t.setHeader("Content-Type","application/partial-upload"),(s===Number.POSITIVE_INFINITY||s>this._size)&&!this.options.uploadLengthDeferred&&(s=this._size),this._source.slice(o,s).then(function(n){var a=n.value,l=n.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var c=i._offset+d;return!i.options.uploadLengthDeferred&&l&&c!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(c," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===Bt||i.options.protocol===dt)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var o=ao(t,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return lo(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=ao("DELETE",t,i);return lo(o,null,i).then(function(s){if(s.getStatus()!==204)throw new at("tus: unexpected response while terminating upload",null,o,s)}).catch(function(s){if(s instanceof at||(s=new at("tus: failed to terminate upload",s,o,null)),!co(s,0,i))throw s;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Ne(Ne({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,n)}).then(function(){return r.terminate(t,l)})})}}])})();function no(r){return Object.entries(r).map(function(e){var t=cs(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(ka.encode(String(o)))}).join(",")}function Ye(r,e){return r>=e&&r<e+100}function ao(r,e,t){var i=t.httpStack.createRequest(r,e);t.protocol===Bt?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===dt?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},s=0,n=Object.entries(o);s<n.length;s++){var a=cs(n[s],2),l=a[0],d=a[1];i.setHeader(l,d)}if(t.addRequestId){var c=Oa();i.setHeader("X-Request-ID",c)}return i}function lo(r,e,t){return Ci.apply(this,arguments)}function Ci(){return Ci=Ra(Si().mark(function r(e,t,i){var o;return Si().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(o=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,o);case 9:return n.abrupt("return",o);case 10:case"end":return n.stop()}},r)})),Ci.apply(this,arguments)}function Ba(){var r=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(r=!1),r}function co(r,e,t){return t.retryDelays==null||e>=t.retryDelays.length||r.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(r,e,t):fs(r)}function fs(r){var e=r.originalResponse?r.originalResponse.getStatus():0;return(!Ye(e,400)||e===409||e===423)&&Ba()}function po(r,e){return new Ua(e,r).toString()}function Na(r,e){for(var t=Math.floor(r/e),i=[],o=0;o<e;o++)i.push({start:t*o,end:t*(o+1)});return i[e-1].end=r,i}Gt.defaultOptions=Ma;var hs=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Ha(r){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var o=i.response;e(o)},i.onerror=function(o){t(o)},i.open("GET",r),i.send()})}var qa=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Va(r){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var o=new Uint8Array(i.result);e({value:o})},i.onerror=function(o){t(o)},i.readAsArrayBuffer(r)})}function _t(r){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(r)}function Ka(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ya(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ga(i.key),i)}}function Wa(r,e,t){return e&&Ya(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ga(r){var e=Xa(r,"string");return _t(e)=="symbol"?e:e+""}function Xa(r,e){if(_t(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(_t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var uo=(function(){function r(e){Ka(this,r),this._file=e,this.size=e.size}return Wa(r,[{key:"slice",value:function(t,i){if(qa())return Va(this._file.slice(t,i));var o=this._file.slice(t,i),s=i>=this.size;return Promise.resolve({value:o,done:s})}},{key:"close",value:function(){}}])})();function kt(r){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(r)}function Ja(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Za(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,el(i.key),i)}}function Qa(r,e,t){return e&&Za(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function el(r){var e=tl(r,"string");return kt(e)=="symbol"?e:e+""}function tl(r,e){if(kt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(kt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function fo(r){return r===void 0?0:r.size!==void 0?r.size:r.length}function il(r,e){if(r.concat)return r.concat(e);if(r instanceof Blob)return new Blob([r,e],{type:r.type});if(r.set){var t=new r.constructor(r.length+e.length);return t.set(r),t.set(e,r.length),t}throw new Error("Unknown data type")}var rl=(function(){function r(e){Ja(this,r),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Qa(r,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var o=this,s=i<=this._bufferOffset+fo(this._buffer);if(this._done||s){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var d=l.value,c=l.done;return c?o._done=!0:o._buffer===void 0?o._buffer=d:o._buffer=il(o._buffer,d),o._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=fo(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function De(r){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(r)}function Ei(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Ei=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(x,f,m){x[f]=m.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(x,f,m){return Object.defineProperty(x,f,{value:m,enumerable:!0,configurable:!0,writable:!0}),x[f]}try{d({},"")}catch{d=function(m,C,E){return m[C]=E}}function c(x,f,m,C){var E=f&&f.prototype instanceof T?f:T,S=Object.create(E.prototype),z=new q(C||[]);return o(S,"_invoke",{value:N(x,m,z)}),S}function p(x,f,m){try{return{type:"normal",arg:x.call(f,m)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var u="suspendedStart",y="suspendedYield",v="executing",w="completed",P={};function T(){}function k(){}function _(){}var g={};d(g,n,function(){return this});var b=Object.getPrototypeOf,R=b&&b(b(ue([])));R&&R!==t&&i.call(R,n)&&(g=R);var U=_.prototype=T.prototype=Object.create(g);function F(x){["next","throw","return"].forEach(function(f){d(x,f,function(m){return this._invoke(f,m)})})}function L(x,f){function m(E,S,z,M){var B=p(x[E],x,S);if(B.type!=="throw"){var G=B.arg,X=G.value;return X&&De(X)=="object"&&i.call(X,"__await")?f.resolve(X.__await).then(function(te){m("next",te,z,M)},function(te){m("throw",te,z,M)}):f.resolve(X).then(function(te){G.value=te,z(G)},function(te){return m("throw",te,z,M)})}M(B.arg)}var C;o(this,"_invoke",{value:function(S,z){function M(){return new f(function(B,G){m(S,z,B,G)})}return C=C?C.then(M,M):M()}})}function N(x,f,m){var C=u;return function(E,S){if(C===v)throw Error("Generator is already running");if(C===w){if(E==="throw")throw S;return{value:r,done:!0}}for(m.method=E,m.arg=S;;){var z=m.delegate;if(z){var M=de(z,m);if(M){if(M===P)continue;return M}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(C===u)throw C=w,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);C=v;var B=p(x,f,m);if(B.type==="normal"){if(C=m.done?w:y,B.arg===P)continue;return{value:B.arg,done:m.done}}B.type==="throw"&&(C=w,m.method="throw",m.arg=B.arg)}}}function de(x,f){var m=f.method,C=x.iterator[m];if(C===r)return f.delegate=null,m==="throw"&&x.iterator.return&&(f.method="return",f.arg=r,de(x,f),f.method==="throw")||m!=="return"&&(f.method="throw",f.arg=new TypeError("The iterator does not provide a '"+m+"' method")),P;var E=p(C,x.iterator,f.arg);if(E.type==="throw")return f.method="throw",f.arg=E.arg,f.delegate=null,P;var S=E.arg;return S?S.done?(f[x.resultName]=S.value,f.next=x.nextLoc,f.method!=="return"&&(f.method="next",f.arg=r),f.delegate=null,P):S:(f.method="throw",f.arg=new TypeError("iterator result is not an object"),f.delegate=null,P)}function be(x){var f={tryLoc:x[0]};1 in x&&(f.catchLoc=x[1]),2 in x&&(f.finallyLoc=x[2],f.afterLoc=x[3]),this.tryEntries.push(f)}function O(x){var f=x.completion||{};f.type="normal",delete f.arg,x.completion=f}function q(x){this.tryEntries=[{tryLoc:"root"}],x.forEach(be,this),this.reset(!0)}function ue(x){if(x||x===""){var f=x[n];if(f)return f.call(x);if(typeof x.next=="function")return x;if(!isNaN(x.length)){var m=-1,C=function E(){for(;++m<x.length;)if(i.call(x,m))return E.value=x[m],E.done=!1,E;return E.value=r,E.done=!0,E};return C.next=C}}throw new TypeError(De(x)+" is not iterable")}return k.prototype=_,o(U,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:k,configurable:!0}),k.displayName=d(_,l,"GeneratorFunction"),e.isGeneratorFunction=function(x){var f=typeof x=="function"&&x.constructor;return!!f&&(f===k||(f.displayName||f.name)==="GeneratorFunction")},e.mark=function(x){return Object.setPrototypeOf?Object.setPrototypeOf(x,_):(x.__proto__=_,d(x,l,"GeneratorFunction")),x.prototype=Object.create(U),x},e.awrap=function(x){return{__await:x}},F(L.prototype),d(L.prototype,a,function(){return this}),e.AsyncIterator=L,e.async=function(x,f,m,C,E){E===void 0&&(E=Promise);var S=new L(c(x,f,m,C),E);return e.isGeneratorFunction(f)?S:S.next().then(function(z){return z.done?z.value:S.next()})},F(U),d(U,l,"Generator"),d(U,n,function(){return this}),d(U,"toString",function(){return"[object Generator]"}),e.keys=function(x){var f=Object(x),m=[];for(var C in f)m.push(C);return m.reverse(),function E(){for(;m.length;){var S=m.pop();if(S in f)return E.value=S,E.done=!1,E}return E.done=!0,E}},e.values=ue,q.prototype={constructor:q,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!f)for(var m in this)m.charAt(0)==="t"&&i.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=r)},stop:function(){this.done=!0;var f=this.tryEntries[0].completion;if(f.type==="throw")throw f.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var m=this;function C(G,X){return z.type="throw",z.arg=f,m.next=G,X&&(m.method="next",m.arg=r),!!X}for(var E=this.tryEntries.length-1;E>=0;--E){var S=this.tryEntries[E],z=S.completion;if(S.tryLoc==="root")return C("end");if(S.tryLoc<=this.prev){var M=i.call(S,"catchLoc"),B=i.call(S,"finallyLoc");if(M&&B){if(this.prev<S.catchLoc)return C(S.catchLoc,!0);if(this.prev<S.finallyLoc)return C(S.finallyLoc)}else if(M){if(this.prev<S.catchLoc)return C(S.catchLoc,!0)}else{if(!B)throw Error("try statement without catch or finally");if(this.prev<S.finallyLoc)return C(S.finallyLoc)}}}},abrupt:function(f,m){for(var C=this.tryEntries.length-1;C>=0;--C){var E=this.tryEntries[C];if(E.tryLoc<=this.prev&&i.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var S=E;break}}S&&(f==="break"||f==="continue")&&S.tryLoc<=m&&m<=S.finallyLoc&&(S=null);var z=S?S.completion:{};return z.type=f,z.arg=m,S?(this.method="next",this.next=S.finallyLoc,P):this.complete(z)},complete:function(f,m){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&m&&(this.next=m),P},finish:function(f){for(var m=this.tryEntries.length-1;m>=0;--m){var C=this.tryEntries[m];if(C.finallyLoc===f)return this.complete(C.completion,C.afterLoc),O(C),P}},catch:function(f){for(var m=this.tryEntries.length-1;m>=0;--m){var C=this.tryEntries[m];if(C.tryLoc===f){var E=C.completion;if(E.type==="throw"){var S=E.arg;O(C)}return S}}throw Error("illegal catch attempt")},delegateYield:function(f,m,C){return this.delegate={iterator:ue(f),resultName:m,nextLoc:C},this.method==="next"&&(this.arg=r),P}},e}function ho(r,e,t,i,o,s,n){try{var a=r[s](n),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,o)}function ol(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(l){ho(s,i,o,n,a,"next",l)}function a(l){ho(s,i,o,n,a,"throw",l)}n(void 0)})}}function sl(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function nl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ll(i.key),i)}}function al(r,e,t){return e&&nl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ll(r){var e=dl(r,"string");return De(e)=="symbol"?e:e+""}function dl(r,e){if(De(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(De(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var cl=(function(){function r(){sl(this,r)}return al(r,[{key:"openFile",value:(function(){var e=ol(Ei().mark(function i(o,s){var n;return Ei().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(hs()&&o&&typeof o.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Ha(o.uri);case 4:return n=l.sent,l.abrupt("return",new uo(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new uo(o)));case 13:if(typeof o.read!="function"){l.next=18;break}if(s=Number(s),Number.isFinite(s)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new rl(o,s)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,o){return e.apply(this,arguments)}return t})()}])})();function pl(r,e){return hs()?Promise.resolve(ul(r,e)):Promise.resolve(["tus-br",r.name,r.type,r.size,r.lastModified,e.endpoint].join("-"))}function ul(r,e){var t=r.exif?fl(JSON.stringify(r.exif)):"noexif";return["tus-rn",r.name||"noname",r.size||"nosize",t,e.endpoint].join("/")}function fl(r){var e=0;if(r.length===0)return e;for(var t=0;t<r.length;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function $t(r){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(r)}function Zi(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function hl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,gl(i.key),i)}}function Qi(r,e,t){return e&&hl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function gl(r){var e=ml(r,"string");return $t(e)=="symbol"?e:e+""}function ml(r,e){if($t(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if($t(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var xl=(function(){function r(){Zi(this,r)}return Qi(r,[{key:"createRequest",value:function(t,i){return new vl(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),vl=(function(){function r(e,t){Zi(this,r),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return Qi(r,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,s){t._xhr.onload=function(){o(new bl(t._xhr))},t._xhr.onerror=function(n){s(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),bl=(function(){function r(e){Zi(this,r),this._xhr=e}return Qi(r,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function St(r){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},St(r)}function yl(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function wl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,kl(i.key),i)}}function _l(r,e,t){return e&&wl(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function kl(r){var e=$l(r,"string");return St(e)=="symbol"?e:e+""}function $l(r,e){if(St(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(St(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Pi=!1;try{Pi="localStorage"in window;var hi="tusSupport",go=localStorage.getItem(hi);localStorage.setItem(hi,go),go===null&&localStorage.removeItem(hi)}catch(r){if(r.code===r.SECURITY_ERR||r.code===r.QUOTA_EXCEEDED_ERR)Pi=!1;else throw r}var Sl=Pi,Cl=(function(){function r(){yl(this,r)}return _l(r,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var o=Math.round(Math.random()*1e12),s="tus::".concat(t,"::").concat(o);return localStorage.setItem(s,JSON.stringify(i)),Promise.resolve(s)}},{key:"_findEntries",value:function(t){for(var i=[],o=0;o<localStorage.length;o++){var s=localStorage.key(o);if(s.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(s));n.urlStorageKey=s,i.push(n)}catch{}}return i}}])})();function Ze(r){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ze(r)}function El(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Pl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ms(i.key),i)}}function Ul(r,e,t){return t&&Pl(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ol(r,e,t){return e=Xt(e),Rl(r,gs()?Reflect.construct(e,t||[],Xt(r).constructor):e.apply(r,t))}function Rl(r,e){if(e&&(Ze(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ll(r)}function Ll(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function gs(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gs=function(){return!!r})()}function Xt(r){return Xt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Xt(r)}function Al(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Ui(r,e)}function Ui(r,e){return Ui=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Ui(r,e)}function mo(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function We(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mo(Object(t),!0).forEach(function(i){Tl(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):mo(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Tl(r,e,t){return e=ms(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ms(r){var e=Fl(r,"string");return Ze(e)=="symbol"?e:e+""}function Fl(r,e){if(Ze(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ze(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var xo=We(We({},Gt.defaultOptions),{},{httpStack:new xl,fileReader:new cl,urlStorage:Sl?new Cl:new ua,fingerprint:pl}),zl=(function(r){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return El(this,e),i=We(We({},xo),i),Ol(this,e,[t,i])}return Al(e,r),Ul(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=We(We({},xo),o),Gt.terminate(i,o)}}])})(Gt);const jl=10*1024*1024,Dl=5*1024*1024,Il="https://eu-on-24001.connector.filerobot.com/files",Ml="https://eu-on-24001.connector.filerobot.com/json";function Bl(r,e){if(!e||!r.file)return!1;const t=e.sizeThreshold??jl;return r.size>=t}function Nl(r,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),o=t.endpoint||Il,s=t.jsonBase||Ml,n=t.chunkSize??Dl,a=t.resumable!==!1,l=t.parallelChunks??1,d=t.retryDelays??[0,1e3,3e3,5e3],c=i.split("/").pop()||"";let p=!1,u=!1,y=!1;const v={name:r.name,type:r.type,"filerobot-folder":e.folder};Ki(r.product)&&(v.product=JSON.stringify(Yi(r.product)));const w=async()=>`tus-${r.id}-${o}`,P=new zl(r.file,{endpoint:o,chunkSize:n,retryDelays:d,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:v,fingerprint:w,onBeforeRequest(b){const R=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[U,F]of Object.entries(R))b.setHeader(U,F);b.setHeader("X-Filerobot-Token",c)},onUploadUrlAvailable(){P.url&&e.onUploadUrlAvailable&&!y&&(y=!0,e.onUploadUrlAvailable(P.url))},onProgress(b,R){!u&&!p&&e.onProgress(b,R)},onSuccess(){var U;if(u)return;_();const b=P.url||"",R=(U=b.match(/files\/([^/?]+)/))==null?void 0:U[1];R?ql(s,R,r.size).then(F=>{u||e.onComplete(Pt(F)?Vi(F,r):F)}).catch(F=>{u||e.onError(F)}):e.onComplete({status:"success",file:{uuid:"",name:r.name,extension:r.name.split(".").pop()||"",type:r.type,size:r.size,url:{public:b,cdn:b},meta:r.meta,tags:r.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(b){u||(_(),Hl(b)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(b instanceof Error?b:new Error(String(b))))},onShouldRetry(b,R,U){var L;const F=(L=b.originalResponse)==null?void 0:L.getStatus();return F===429?!0:!(F&&F>400&&F<500&&F!==409)}});let T=null,k=null;typeof window<"u"&&(T=()=>{var b;!p&&!u&&(p=!0,P.abort(!1),(b=e.onPause)==null||b.call(e))},k=()=>{var b;p&&!u&&(p=!1,P.start(),(b=e.onResume)==null||b.call(e))},window.addEventListener("offline",T),window.addEventListener("online",k));const _=()=>{T&&window.removeEventListener("offline",T),k&&window.removeEventListener("online",k)},g=()=>{try{P.start()}catch(b){_(),e.onError(b instanceof Error?b:new Error(String(b)))}};return a?P.findPreviousUploads().then(b=>{b.length>0&&!u&&P.resumeFromPreviousUpload(b[0]),u||g()}):g(),{abort(){u=!0,p=!1,_(),P.abort(!0)},pause(){!p&&!u&&(p=!0,P.abort(!1))},resume(){p&&!u&&(p=!1,P.start())},isPaused(){return p}}}function Hl(r){var e;if(r instanceof at){const t=(e=r.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:r.originalResponse==null&&r.causingError!=null}return!1}async function ql(r,e,t){const i=`${r.replace(/\/+$/,"")}/${e}`,o=t>1e8?13e3:6e3,s=3;for(let n=0;n<=s;n++){n>0&&await new Promise(d=>setTimeout(d,o));const a=await fetch(i);if(a.status===404&&n<s)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(Pt(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<s))throw new Error(l.msg||"File record not available after upload")}throw new Error("File record not available after upload")}const Nt="_sfxRelativePath",vo=8,Vl=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function Kl(r){return r?r.startsWith(".")?!0:Vl.has(r):!1}function er(r,e){if(e){try{Object.defineProperty(r,Nt,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(r,Nt,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{r[Nt]=e}}}function Yl(r){const e=r[Nt];if(typeof e=="string"&&e)return e;const t=r.webkitRelativePath;return typeof t=="string"?t:""}function Wl(r){if(!r)return"";const e=r.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Gl(r,e){const t=(r??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:r??""}async function xs(r){var n;const e=r.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(r.files??[]),hadDirectories:!1};const i=[];let o=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(o=!0),i.push(l))}if(i.length===0)return{files:Array.from(r.files??[]),hadDirectories:!1};const s=[];return await vs(i,"",s),{files:s,hadDirectories:o}}async function vs(r,e,t){for(let i=0;i<r.length;i+=vo){const o=r.slice(i,i+vo);await Promise.all(o.map(s=>Xl(s,e,t)))}}async function Xl(r,e,t){try{if(r.isFile){const i=await Jl(r);if(!i)return;const o=e?`${e}/${i.name}`:i.name;er(i,o),t.push(i);return}if(r.isDirectory){if(Kl(r.name))return;const i=e?`${e}/${r.name}`:r.name,o=await Zl(r);await vs(o,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(r==null?void 0:r.name)??r,i)}}function Jl(r){return new Promise(e=>{r.file(t=>e(t),()=>e(null))})}function Zl(r){return new Promise(e=>{const t=r.createReader(),i=[],o=()=>{t.readEntries(s=>{if(s.length===0){e(i);return}i.push(...s),o()},s=>{console.warn("[sfx-uploader] directory read failed for",r==null?void 0:r.name,s),e(i)})};o()})}class Ql{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(W(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(W(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&W(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),W(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),W(this.store,e,{status:"uploading"})):W(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!Oi(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),W(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())Oi(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),W(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,o=t-i;if(o<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,o);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),W(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var u,y;const t=(y=(u=this.config).resolveUploadParams)==null?void 0:y.call(u,e),i=!!t&&Object.keys(t).length>0,o=!i&&!e.remoteInfo&&!e.remoteUrl&&Bl(e,this.config.tusConfig);W(this.store,e.id,{status:"uploading",error:null,isTus:o});let s=0,n=Date.now(),a=0;const l=Gl(this.store.getState().targetFolder,e.relativeFolder),d={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:v=>this.handleComplete(e.id,v),onError:v=>this.handleError(e.id,v)},c=(v,w)=>{const P=Date.now(),T=(P-n)/1e3;if(T>0){const _=(v-s)/T;a=a===0?_:.3*_+.7*a}s=v,n=P;const k=w>0?Math.min(v/w*100,100):0;W(this.store,e.id,{progress:k,bytesUploaded:v,speed:a}),this.updateTotalProgress()};let p;if(e.remoteInfo)p=Jn(e,{...d,onProgress:c});else if(e.remoteUrl){if(!this.config.companionUrl){W(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}p=Zn(e,{...d,onProgress:c,companionUrl:this.config.companionUrl,onMeta:v=>{W(this.store,e.id,{size:v.size,type:v.type||e.type})}})}else if(o){const v=Nl(e,{...d,onProgress:c,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:w=>{W(this.store,e.id,{tusUploadUrl:w})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,v),W(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,v),W(this.store,e.id,{status:"uploading"})}});p=v}else p=Hn(e,{...d,onProgress:c});this.activeUploads.set(e.id,p)}handleComplete(e,t){var c,p,u,y,v,w,P,T,k,_;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),o=((c=i==null?void 0:i.previewUrl)==null?void 0:c.startsWith("blob:"))??!1,s=((u=(p=t.file)==null?void 0:p.url)==null?void 0:u.cdn)??((v=(y=t.file)==null?void 0:y.url)==null?void 0:v.cdn_permalink)??((P=(w=t.file)==null?void 0:w.url)==null?void 0:P.permalink)??null,n=s?((k=(T=this.config).transformPreviewUrl)==null?void 0:k.call(T,s))??s:null,a={status:"complete",progress:100,response:t,alreadyExisted:Pt(t)};i&&n&&i.type.startsWith("image/")&&!o&&(a.previewUrl=n);const l=(_=t.file)==null?void 0:_.size,d=typeof l=="number"?l:l==null?void 0:l.bytes;typeof d=="number"&&(a.size=d),W(this.store,e,a),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,s=i.retryCount+1;if(s<=o.maxRetries){const n=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);W(this.store,e,{status:"retrying",error:t.message,retryCount:s});const a=setTimeout(()=>{this.retryTimers.delete(e),W(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else W(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,i=0,o=0;for(const s of e.values())(s.status==="queued"||s.status==="uploading"||s.status==="paused"||s.status==="retrying"||s.status==="complete"||s.status==="failed")&&(t+=s.size,i+=s.status==="complete"?s.size:s.bytesUploaded),s.status==="uploading"&&(o+=s.speed);this.store.setState({totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:t>0?Math.min(i/t*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Oi(r){return r==="queued"||r==="uploading"||r==="retrying"||r==="paused"}function tr(r){return`https://api.filerobot.com/${r}`}async function ed(r,e){const t=`${tr(r)}/key/${encodeURIComponent(e)}`,i=new AbortController,o=setTimeout(()=>i.abort(),3e4);try{const s=await fetch(t,{signal:i.signal});if(clearTimeout(o),!s.ok)throw new Error(`SASS key exchange failed (HTTP ${s.status})`);const n=await s.json();if(n.status==="error")throw new Error(`SASS key exchange failed: ${n.msg||"Unknown error"}`);return n.key}catch(s){throw clearTimeout(o),s instanceof DOMException&&s.name==="AbortError"?new Error("SASS key exchange timed out"):s}}function Ri(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}async function td(r){const e=tr(r.container);if(r.mode==="security-template"){const t=await ed(r.container,r.securityTemplateId);return{apiBase:e,headers:Ri(r,t),sassKey:t}}return{apiBase:e,headers:Ri(r)}}const Jt="sfx-uploader:last-upload:",bs=1;function id(r){var s,n,a,l,d,c,p,u,y;const{file:e,previewUrl:t,...i}=r;let o=null;return r.status==="complete"&&(r.previewUrl&&!r.previewUrl.startsWith("blob:")?o=r.previewUrl:o=((a=(n=(s=r.response)==null?void 0:s.file)==null?void 0:n.url)==null?void 0:a.permalink)??((c=(d=(l=r.response)==null?void 0:l.file)==null?void 0:d.url)==null?void 0:c.cdn_permalink)??((y=(u=(p=r.response)==null?void 0:p.file)==null?void 0:u.url)==null?void 0:y.cdn)??null),{...i,previewUrl:o}}function rd(r){try{const e=sessionStorage.getItem(Jt+r);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==bs?null:t}catch{return null}}function od(r,e){try{sessionStorage.setItem(Jt+r,JSON.stringify(e))}catch{}}const nt={save(r,e){if(e.length===0){this.clear(r);return}const t={__schemaVersion:bs,savedAt:Date.now(),files:e.map(id)};od(r,t)},load(r){const e=rd(r);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(r){try{return sessionStorage.getItem(Jt+r)!=null}catch{return!1}},clear(r){try{sessionStorage.removeItem(Jt+r)}catch{}}},I={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let sd=0;function He(){return`file-${Date.now()}-${++sd}`}function Oe(r){if(!Number.isFinite(r)||r<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(r)/Math.log(1024)),e.length-1),i=r/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function gi(r){if(!isFinite(r)||r<=0)return"0s";const e=Math.round(r);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const o=Math.floor(t/60),s=t%60;return s>0?`${o}h ${s}m`:`${o}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function ys(r){var t;const e=((t=r.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return r.type.startsWith("image/")?"image":r.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":r.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":r.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function nd(r){const e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toUpperCase():""}const ad=new Set([".ds_store","thumbs.db","desktop.ini"]);function mi(r){const e=r.split(/[\\/]/).pop()??r;return ad.has(e.toLowerCase())}const ld="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",ws={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function Li(r){const e=r==="_default"?"GENERIC":r.toUpperCase();return`${ld}${e}.svg?vh=${ws[r]}`}function _s(r){const e=(r==null?void 0:r.toLowerCase().replaceAll(".",""))||"";return e in ws?Li(e):Li("_default")}function ks(){return Li("_default")}const dd={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function bo(r){var t;const e=((t=r.split(".").pop())==null?void 0:t.toLowerCase())??"";return dd[e]||""}function yo(r){return r==="image/heic"||r==="image/heif"}function cd(r){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(r);let o=!1;const s=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{o||(o=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),t.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function pd(r){return typeof r=="string"&&r.startsWith("Maximum ")&&r.includes("files allowed")}function xi(r,e,t){var i,o;if(e.maxFileSize!=null&&r.size>0&&r.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&r.size>0){let s=r.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(s+=n.size);if(s>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let s=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,n="."+(((i=r.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!s.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type not allowed"}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,n="."+(((o=r.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(s.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type is blocked"}return null}function wo(r){return r.allowedFileTypes?r.allowedFileTypes.join(","):""}const _o={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function ud(r){return r.filter(e=>e in _o).map(e=>_o[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zt=class extends qi{constructor(e){if(super(e),this.it=$,e.type!==Hi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$||e==null)return this._t=void 0,this.it=e;if(e===ce)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Zt.directiveName="unsafeHTML",Zt.resultType=1;const ko=ti(Zt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ai extends Zt{}Ai.directiveName="unsafeSVG",Ai.resultType=2;const we=ti(Ai);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fd=ti(class extends qi{constructor(r){var e;if(super(r),r.type!==Hi.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,o;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const t=r.element.classList;for(const s of this.st)s in e||(t.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(n?(t.add(s),this.st.add(s)):(t.remove(s),this.st.delete(s)))}return ce}});function Ae(r){return r.brandStyle?h`<span
    class=${fd({"brand-ico":!0,"brand-ico--transparent":r.brandStyle.background==="transparent"})}
    ${Z(r.brandStyle)}
  >${ko(r.brandHtml)}</span>`:ko(r.brandHtml)}var hd=Object.defineProperty,$s=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&hd(e,t,o),o};const gd='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',md='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',xd='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',vd='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',ct=[{id:"device",labelKey:"myDevice",label:"My Device",icon:gd,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:md,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:xd,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:vd,iconColor:"#ea580c"}],ar=class ar extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.sources=ct}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return h`
      ${this.sources.map(e=>h`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Ae(e):Re`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${we(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};ar.styles=re`
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
  `;let Ct=ar;$s([A({attribute:!1})],Ct.prototype,"t");$s([A({type:Array})],Ct.prototype,"sources");const Ss=new Set(["asset-attachments","attachments-assets","integer-list","ultratags","taxonomy-node"]),bd=new Set(["face_matcher"]);function sc(r){return Ss.has(r)}function yd(r){return Ss.has(r.type)||bd.has(r.ckey)}const Qe="product.ref",et="product.position",wd="__product__",_d=new Set([Qe,et]);function kd(r){return _d.has(r)}function $d(r){return r===Qe?"ref":r===et?"position":null}function Sd(r){return[{key:Qe,ckey:Qe,uuid:"product-ref",title:r("productRefLabel","Product reference"),type:"text",placeholder:r("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:et,ckey:et,uuid:"product-position",title:r("productPositionLabel","Position"),type:"numeric",placeholder:r("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function Cd(r){return{uuid:wd,isRoot:!1,name:r("productFieldsLabel","Product"),fields:Sd(r)}}function Ed(r,e){const t=Cd(e);let i=-1;for(let l=0;l<r.groups.length;l++)r.groups[l].isRoot&&(i=l);const o=i+1,s=[...r.groups.slice(0,o),t,...r.groups.slice(o)],n=s.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...r,groups:s,fields:n,fieldsByKey:a}}function nc(r,e,t){var o;if((((o=t==null?void 0:t.requiredFields)==null?void 0:o.includes(r.ckey))||!!r.required)&&Ti(e))return`${r.title} is required`;if(Ti(e))return null;if(r.key===Qe)return typeof e!="string"||Bn.test(e)?"Reference contains invalid characters":null;if(r.key===et){const s=Number(e);return!Number.isFinite(s)||!Number.isInteger(s)?"Position must be an integer":null}switch(r.type){case"numeric":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!Number.isInteger(s))return"Must be an integer";if(s<-1999999999||s>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(s<-999999999999e-2||s>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const s=e,n=s.latitude!==""&&s.latitude!=null,a=s.longitude!==""&&s.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(s.latitude),d=Number(s.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const s=new URL(e);if(!["http:","https:"].includes(s.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(r.validation&&typeof e=="string")try{if(!new RegExp(r.validation).test(e))return"Value does not match expected format"}catch{}return null}function Ti(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:typeof r=="object"?!Object.values(r).some(e=>e!=null&&e!==""):!r}const Pd=new Set(["idle","queued","rejected"]);function ir(r){return!Ti(r)}function Cs(r,e){var t;return yd(r)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(r.ckey)?!0:!!r.required}function rr(r){return[...r.values()].filter(e=>Pd.has(e.status))}function or(r,e){return r.fields.filter(t=>Cs(t,e))}function ac(r,e,t){const i=rr(r);if(i.length===0)return{};const o={};for(const s of or(e,t)){const n=i.filter(a=>!ir(a.meta[s.key]));n.length>0&&(o[s.key]=n)}return o}function Ud(r,e,t){const i=rr(r);if(i.length===0)return null;for(const o of or(e,t))if(i.some(n=>!ir(n.meta[o.key])))return o.key;return null}function Od(r,e,t){var o;const i=r.get(e.id);return i&&i.has(t)?i.get(t):(o=e.meta)==null?void 0:o[t]}function lc(r,e,t,i){const o=new Set,s=rr(e);if(s.length===0)return o;for(const n of or(t,i))s.some(l=>!ir(Od(r,l,n.key)))&&o.add(n.key);return o}function dc(r,e){const t={...r};for(const i of Object.keys(e)){const o=e[i];if(o==null||o==="")continue;const s=r[i];if(Array.isArray(o))if(Array.isArray(s)){const n=new Set(s.map(l=>JSON.stringify(l))),a=[...s];for(const l of o){const d=JSON.stringify(l);n.has(d)||(n.add(d),a.push(l))}t[i]=a}else t[i]=o;else t[i]=o}return t}function Es(r){let e=r;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Rd=Object.defineProperty,se=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Rd(e,t,o),o};const $o=3,Fi=new CSSStyleSheet;Fi.replaceSync(`
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
`);var $e;const ee=($e=class extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=$o,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&xs(t).then(({files:i,hadDirectories:o})=>{i.length>0?this._emitFiles(i,o):o&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&er(o,s)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var o;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const i=[];for(const s of t)if(s.kind==="file"){const n=s.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(e="files"){var t,i;if(e==="folder"&&this.directory&&this.multi){(t=this.folderInput)==null||t.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Es(this).appendChild(this._portalContainer),this._injectDropdownStyles()),ke(h`<div class="sfx-more-dropdown open">
          ${e.map(t=>h`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?Ae(t):t.iconColor?h`<svg
                        viewBox="0 0 24 24"
                        ${Z({color:t.iconColor})}
                      >
                        ${we(t.icon)}
                      </svg>`:Re`<svg viewBox="0 0 24 24">${we(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(ke($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Fi)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Fi]))}_positionDropdown(){var p,u;const e=(p=this.shadowRoot)==null?void 0:p.querySelector(".more-wrap > button"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=8,s=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=s+o||a>l?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let c=i.right-n;c=Math.max(8,Math.min(c,window.innerWidth-n-8)),t.style.left=`${c}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=$o}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const i=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=$e._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(ke($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return h`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?Ae(e):h`<span
              class="pill-ico"
              ${Z(e.iconColor?{color:e.iconColor}:null)}
            >
              ${Re`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${we(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return h`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?h`<span class="card-ico">${Ae(e)}</span>`:h`<span
              class="card-ico"
              ${Z(e.iconColor?{color:e.iconColor}:null)}
            >
              ${Re`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${we(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return h`
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
    `}_renderMoreDropdown(){return h`
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
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return h`
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

          <div class="title">${this.t("dragAndDrop","Drag & Drop or click to")} <span>${this.t("browse","browse")}</span></div>
          ${!this.compact&&this.directory&&this.multi?h`<div class="folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${o=>{o.stopPropagation(),this.browse("folder")}}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:$}
          ${this.compact?$:h`<div class="subtitle">${this.t("dropFilesAnywhere","Drop files anywhere on this page")}</div>`}
          ${!this.compact&&this.sources.length>0?h`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${this.sourcesLayout==="cards"?h`
                      <div class="sources-cards">
                        ${t.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():$}
                      </div>
                    `:h`
                      <div class="sources-grid">
                        ${t.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():$}
                      </div>
                    `}
              `:$}
          ${this.compact&&this.sources.length>0?h`
                <div class="sources-row">
                  ${this.sources.map(o=>h`
                      <button
                        class="src-ico"
                        ${Z(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${s=>{s.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?Ae(o):Re`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${we(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:$}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||$}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?h`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:$}
      </div>
    `}},$e.styles=re`
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
      margin-bottom: 6px;
      transition:
        font-size 0.3s,
        margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
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
      background: #fff;
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
  `,$e._WIDE_THRESHOLD_PX=1200,$e);se([A({attribute:!1})],ee.prototype,"t");se([A({type:Boolean,reflect:!0})],ee.prototype,"compact");se([A({type:Boolean,attribute:"external-drag-over"})],ee.prototype,"externalDragOver");se([A({type:String})],ee.prototype,"accept");se([A({type:Boolean})],ee.prototype,"multi");se([A({type:Boolean})],ee.prototype,"directory");se([A({type:Array})],ee.prototype,"sources");se([A({type:String,attribute:"sources-layout"})],ee.prototype,"sourcesLayout");se([A({type:String,reflect:!0})],ee.prototype,"mode");se([D()],ee.prototype,"_dragOver");se([D()],ee.prototype,"_moreOpen");se([D()],ee.prototype,"_visiblePills");se([Ni(".ripple")],ee.prototype,"_rippleEl");se([Ni("input[data-sfx-dz-files]")],ee.prototype,"fileInput");se([Ni("input[data-sfx-dz-folder]")],ee.prototype,"folderInput");let Ld=ee;const lr=class lr extends Q{render(){return h`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};lr.styles=re`
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
  `;let zi=lr;var Ad=Object.defineProperty,le=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ad(e,t,o),o};const ji=new CSSStyleSheet;ji.replaceSync(`
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
`);const dr=class dr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&er(o,s)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Es(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),ke(h`<div class="sfx-tile-dropdown">
        ${e.map(t=>h`
          <button
            class="sfx-tile-dropdown-item"
            @click=${i=>this._onMoreSourceClick(i,t)}
          >
            <span class="sfx-tile-dropdown-ico" ${Z(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}>
              ${t.brandHtml?Ae(t):Re`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${we(t.icon)}</svg>`}
            </span>
            ${t.labelKey?this.t(t.labelKey,t.label):t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var p;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(p=this._portalContainer)==null?void 0:p.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=6,s=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=s+o||a>l?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let c=i.right-n;c=Math.max(8,Math.min(c,window.innerWidth-n-8)),t.style.left=`${c}px`}_closePortal(){this._portalContainer&&(ke($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(ji)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,ji]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return h`
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
          ${this.directory&&this.multi?h`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:$}
          ${t.length>0?h`
            <div class="drop-tile-sources">
              ${t.map(o=>h`
                <button
                  class="drop-tile-src"
                  ${Z(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                  title=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                  @click=${s=>this._onSourceClick(s,o)}
                >
                  ${o.brandHtml?Ae(o):Re`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${we(o.icon)}</svg>`}
                </button>
              `)}
              ${i.length>0?h`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${o=>this._toggleMore(o)}>···</button>
                </div>
              `:$}
            </div>
          `:$}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept||$} @change=${this._onFileInput} />
        ${this.directory&&this.multi?h`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />`:$}
      </div>
    `}render(){return h`
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():$}
        ${this.files.map((e,t)=>h`<sfx-file-item .t=${this.t} .file=${e} .mode=${this.mode} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} ${Z({"--tile-index":String(t)})}></sfx-file-item>`)}
      </div>
    `}};dr.styles=re`
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
      padding: 4px var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
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
  `;let ie=dr;le([A({attribute:!1})],ie.prototype,"t");le([A({attribute:!1})],ie.prototype,"files");le([A({type:Boolean})],ie.prototype,"showDropTile");le([A({attribute:!1})],ie.prototype,"sources");le([A({type:String})],ie.prototype,"accept");le([A({type:Boolean})],ie.prototype,"multi");le([A({type:Boolean})],ie.prototype,"directory");le([A({type:String})],ie.prototype,"mode");le([A({type:Boolean})],ie.prototype,"showLocateButton");le([A({type:Boolean})],ie.prototype,"showCopyCdnButton");le([D()],ie.prototype,"_moreOpen");le([D()],ie.prototype,"_dropTileMaxVisible");var Td=Object.defineProperty,Me=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Td(e,t,o),o};const cr=class cr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._dims="",this._copied=!1,this._copiedTimer=null}updated(e){var t,i,o,s,n;if(e.has("file")){if(this._dims="",(i=(t=this.file)==null?void 0:t.previewUrl)!=null&&i.startsWith("blob:")){const a=this.file.previewUrl,l=new Image;l.onload=()=>{var d;((d=this.file)==null?void 0:d.previewUrl)===a&&(this._dims=`${l.naturalWidth}×${l.naturalHeight}`)},l.src=a}else if((n=(s=(o=this.file)==null?void 0:o.response)==null?void 0:s.file)!=null&&n.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var i,o,s,n;e.stopPropagation();const t=(n=(s=(o=(i=this.file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var p,u;const e=this.file;if(!e)return $;const t=ys(e),i=e.status==="complete",o=e.status==="uploading",s=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",d=nd(e.name),c=["tile",i?"done":"",o?"uploading":"",s?"paused":"",a?"rejected":"",l?"review":""].filter(Boolean).join(" ");return h`
      <div class=${c} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?h`<img class="preview-img" src=${e.previewUrl} alt="" />`:h`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${_s(d)}
                    alt="${d?`${d} file`:"File"}"
                    @error=${y=>{const v=y.target,w=ks();!v.dataset.fallback&&v.src!==w&&(v.dataset.fallback="1",v.src=w)}}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!l&&!i&&!o&&!s&&!n&&e.status!=="rejected"?h`
                <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  ${this.t("details","Details")}
                </button>
              `:$}

          <!-- Review-mode hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Both buttons fade in on tile hover, only for completed
               files with a response.file. Each inner button has its own
               gate — Locate needs uuid, Copy CDN needs url.cdn — so an
               already-existed-but-missing-uuid edge case won't render a
               dead button. -->
          ${l&&i&&((p=e.response)!=null&&p.file)&&(this.showLocateButton||this.showCopyCdnButton)?h`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?h`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate","Locate")}
                      </button>`:$}
                  ${this.showCopyCdnButton&&((u=e.response.file.url)!=null&&u.cdn)?h`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?h`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:h`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:$}
                </div>
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
          ${i?h`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:$}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&n?h`<div class="failed-badge" title=${e.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:$}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?h`
                <div class="progress">
                  <div class="progress-fill" ${Z({transform:`scaleX(${Math.min(e.progress,100)/100})`})}></div>
                </div>
              `:$}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?h`<div class="error-badge" title=${e.error}>${e.error}</div>`:$}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?h`<div class="exists-badge" title=${this.t("alreadyUploaded","Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:$}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?h`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:$}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${l?$:h`
        <div class="actions">
          ${o&&e.isTus?h`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:$}
          ${s?h`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:$}
          ${n?h`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:$}
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
            ?readonly=${l}
            @change=${l?$:this._rename} @click=${y=>y.stopPropagation()} />
          <div class="meta">${d||""}${e.size?` · ${Oe(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};cr.styles=re`
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
  `;let he=cr;Me([A({attribute:!1})],he.prototype,"t");Me([A({attribute:!1})],he.prototype,"file");Me([A({type:String})],he.prototype,"mode");Me([A({type:Boolean})],he.prototype,"showLocateButton");Me([A({type:Boolean})],he.prototype,"showCopyCdnButton");Me([D()],he.prototype,"_dims");Me([D()],he.prototype,"_copied");const Ot=re`
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
`,Rt=re`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Fd=Object.defineProperty,xe=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Fd(e,t,o),o};const So=7,zd=4,pr=class pr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this.alreadyExistedCount=0,this.showMinimize=!1,this._maxThumbs=So,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?zd:So;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}_minimize(){this.dispatchEvent(new CustomEvent("minimize-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),t=this.thumbnails.length-this._maxThumbs,i=this.fileCount>0,o=this.failedFiles.length>0,s=o&&!i,n=i&&!o&&this.alreadyExistedCount>=this.fileCount,a=this.fileCount-this.alreadyExistedCount;return h`
      ${this.showMinimize?h`<button class="minimize-btn" title=${this.t("minimizeAndContinue","Minimize & continue in background")} @click=${this._minimize}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>`:$}
      <button class="close-btn" title=${this.t("close","Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s?"error":o?"warning":n?"info":""}">
          ${s?h`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:o?h`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:n?h`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>`:h`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>`}
        </div>
        <div class="title">${s?this.t("uploadFailed","Upload failed"):o?this.t("partiallyUploaded","Partially uploaded"):n?this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):this.t("uploadedSuccessfullyCount",{count:a,defaultValue_one:"{{count}} file uploaded successfully!",defaultValue_other:"{{count}} files uploaded successfully!"})}</div>
        <div class="subtitle">${s?this.t("filesCouldNotBeUploaded",{count:this.failedFiles.length,defaultValue_one:"File could not be uploaded",defaultValue_other:"Files could not be uploaded"}):o?this.t("partialUploadSummary","{{uploaded}} uploaded, {{failed}} failed",{uploaded:a,failed:this.failedFiles.length}):n?this.t("alreadyInLibrarySubtitle",{count:this.alreadyExistedCount,defaultValue_one:"It’s ready to use — nothing new to upload",defaultValue_other:"They’re ready to use — nothing new to upload"}):this.t("allFilesReady","All files are ready for use")}</div>

        ${e.length>0?h`
              <div class="thumbs">
                ${e.map(l=>h`<img class="thumb" src=${l} alt="" />`)}
                ${t>0?h`<div class="thumb-more">+${t}</div>`:$}
              </div>
            `:$}

        ${i&&!n?h`<div class="summary">${this.t("uploadedSize","{{size}} uploaded",{size:Oe(this.totalSize)})}</div>`:$}

        ${this.alreadyExistedCount>0&&!n?h`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:$}

        ${o?h`
            <div class="failed-list">
              ${this.failedFiles.map(l=>h`
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
          `:$}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore","Upload more")}</button>
          ${i||o?h`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles","Review files ({{count}})",{count:this.fileCount+this.failedFiles.length})}</button>`:$}
          ${o?h`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll","Retry all ({{count}})",{count:this.failedFiles.length})}</button>`:$}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};pr.styles=[Ot,Rt,re`
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
  `];let ne=pr;xe([A({attribute:!1})],ne.prototype,"t");xe([A({type:Number})],ne.prototype,"fileCount");xe([A({type:Number})],ne.prototype,"totalSize");xe([A({type:Array})],ne.prototype,"thumbnails");xe([A({type:String})],ne.prototype,"primaryLabel");xe([A({type:Array})],ne.prototype,"failedFiles");xe([A({type:Number})],ne.prototype,"alreadyExistedCount");xe([A({type:Boolean})],ne.prototype,"showMinimize");xe([D()],ne.prototype,"_maxThumbs");var jd=Object.defineProperty,Lt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&jd(e,t,o),o};const ur=class ur extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return h`
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
          ${this._failedCount>0?h`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:$}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?h`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:h`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};ur.styles=re`
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
  `;let Se=ur;Lt([A({attribute:!1})],Se.prototype,"t");Lt([A({attribute:!1})],Se.prototype,"files");Lt([A({type:Boolean})],Se.prototype,"showLocateButton");Lt([A({type:Boolean})],Se.prototype,"showCopyCdnButton");Lt([D()],Se.prototype,"_filter");customElements.define("sfx-last-upload-review",Se);var Dd=Object.defineProperty,ve=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Dd(e,t,o),o};const fr=class fr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return h`
      ${e?h`
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
                  ${Z({width:`${this.uploadProgress}%`})}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files","files")}</span
              >
            </div>
          `:$}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?h`
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
              `:$}
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
          ${this.failedCount>0?h`
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
              `:$}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i=["btn-primary",t?"done-state":""].filter(Boolean).join(" "),o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return h`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?h`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?h`
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
            `:h`
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
    `}};fr.styles=[Ot,Rt,re`
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
    `];let ae=fr;ve([A({attribute:!1})],ae.prototype,"t");ve([A({type:String})],ae.prototype,"uploadState");ve([A({type:Number})],ae.prototype,"fileCount");ve([A({type:Number})],ae.prototype,"totalSize");ve([A({type:Number})],ae.prototype,"failedCount");ve([A({type:Boolean})],ae.prototype,"showFillMetadata");ve([A({type:Boolean})],ae.prototype,"requireMetadataFirst");ve([A({type:Number})],ae.prototype,"completedCount");ve([A({type:Number})],ae.prototype,"uploadProgress");const Id='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function sr(r,e){return t=>{if(t.key!=="Tab")return;const i=r();if(!i)return;const o=i.querySelector(e);if(!o)return;const s=Array.from(o.querySelectorAll(Id));if(s.length===0)return;const n=s[0],a=s[s.length-1],l=i.activeElement;t.shiftKey?(l===n||!o.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!o.contains(l))&&(t.preventDefault(),n.focus())}}var Md=Object.defineProperty,ri=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Md(e,t,o),o};const hr=class hr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=sr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return h`
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
            ${this._error?h`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};hr.styles=[Ot,Rt,re`
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

  `];let Ie=hr;ri([A({attribute:!1})],Ie.prototype,"t");ri([D()],Ie.prototype,"_url");ri([D()],Ie.prototype,"_name");ri([D()],Ie.prototype,"_error");var Bd=Object.defineProperty,At=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Bd(e,t,o),o};const gr=class gr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=sr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,s;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(s=this.shadowRoot)==null?void 0:s.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return h`
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
            ${this._error?h`<div class="error">${this._error}</div>`:this._captured?h`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
                    </div>
                  `:h`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};gr.styles=[Ot,Rt,re`
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
  `];let Ce=gr;At([A({attribute:!1})],Ce.prototype,"t");At([D()],Ce.prototype,"_stream");At([D()],Ce.prototype,"_error");At([D()],Ce.prototype,"_captured");At([D()],Ce.prototype,"_previewUrl");var Nd=Object.defineProperty,rt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Nd(e,t,o),o};const mr=class mr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=sr(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var s;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(s=this._stream)==null||s.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return h`
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
            ${this._error?h`<div class="error">${this._error}</div>`:this._recordedBlob?h`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?h`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
                      </div>
                    `:h`
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
    `}};mr.styles=[Ot,Rt,re`
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
  `];let me=mr;rt([A({attribute:!1})],me.prototype,"t");rt([D()],me.prototype,"_stream");rt([D()],me.prototype,"_recording");rt([D()],me.prototype,"_error");rt([D()],me.prototype,"_recordedBlob");rt([D()],me.prototype,"_previewUrl");var Hd=Object.defineProperty,nr=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Hd(e,t,o),o};const xr=class xr extends Q{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?h`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?h`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:h`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?h``:h`
      <div class="toast-stack">
        ${this._toasts.map(e=>h`
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
    `}};xr.styles=re`
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
  `;let tt=xr;nr([A({attribute:!1})],tt.prototype,"t");nr([A({type:Number})],tt.prototype,"duration");nr([D()],tt.prototype,"_toasts");customElements.define("sfx-toast",tt);var qd=Object.defineProperty,K=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&qd(e,t,o),o};const Co=new Set(["unsplash"]),qe={isTus:!1,tusUploadUrl:null,relativeFolder:""};var Y;const V=(Y=class extends Q{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=ct,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail;if(kd(i)){const a=$d(i);if(!a)return;const l=o===""||o==null,d=a==="position"?{position:l?void 0:Number(o)}:{ref:l?void 0:String(o)};this.updateFileProduct(t,d);return}const s=this._store.getState().files.get(t);if(!s)return;const n=new Map(this._store.getState().files);n.set(t,{...s,meta:{...s.meta,[i]:o}}),this._store.setState({files:n})},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var o;const i=(o=this.config)==null?void 0:o.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(s){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",s),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,s;const t=this._mergedSources.find(n=>n.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(n){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,n)}return}if(e==="device"){const n=this.shadowRoot.querySelector("sfx-drop-zone");n==null||n.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((s=(o=this.config)==null?void 0:o.connectors)==null?void 0:s.providers)??[]).includes(e)){if(Co.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:a}=await H(async()=>{const{SfxSearchProviderBrowser:l}=await import("./search-provider-browser-B_BPqg2O.js");return{SfxSearchProviderBrowser:l}},[]);customElements.define("sfx-search-provider-browser",a)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:a}=await H(async()=>{const{SfxProviderBrowser:l}=await import("./provider-browser-BtyTGTdj.js");return{SfxProviderBrowser:l}},[]);customElements.define("sfx-provider-browser",a)}this._activeConnector=e}},this._onUrlSubmit=e=>{var p,u,y;this._showUrlDialog=!1;const{url:t,name:i}=e.detail,o=(p=this.config)==null?void 0:p.callbacks,s=bo(i),n=s.startsWith("image/");if(mi(i))return;const a=this._store.getState();if([...a.files.values()].some(v=>v.name===i&&v.status!=="rejected"&&v.status!=="cancelled"))return;const d=xi({name:i,size:0,type:s},a.restrictions,a.files);if(d){const v={id:He(),status:"rejected",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...qe};Be(this._store,v),this._dispatchPublic(I.FILE_REJECTED,{file:v,reason:d}),(u=o==null?void 0:o.onFileRejected)==null||u.call(o,v,d);return}const c={id:He(),status:"idle",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:n?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...qe};Be(this._store,c),this._dispatchPublic(I.FILE_ADDED,{file:c}),(y=o==null?void 0:o.onFileAdded)==null||y.call(o,c),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,o,s;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(I.FILE_PREVIEW,{file:t}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFilePreview)==null||s.call(o,t))},this._onFillMetadata=()=>{var t,i,o,s;const e=[...this._store.getState().files.values()].filter(n=>Y._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(I.FILL_METADATA,{files:e}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFillMetadata)==null||s.call(o,e)},this._onRequireMetadata=()=>{const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var o,s,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(I.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onFileCopyCdn)==null||n.call(s,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:s}of t){const n=i.get(o);n&&i.set(o,{...n,meta:{...n.meta,...s}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var i,o,s;const e=(i=this.config)==null?void 0:i.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(o=this._engine)==null||o.cancelAll();const t=[...this._store.getState().files.values()];for(const n of t)n.previewUrl&&URL.revokeObjectURL(n.previewUrl),this._dispatchPublic(I.FILE_REMOVED,{file:n}),(s=e==null?void 0:e.onFileRemoved)==null||s.call(e,n);this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=e,this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=nt.load(t);!i||i.length===0||(this._reviewFiles=i,this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&nt.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var o,s,n,a;const t=(o=this.config)==null?void 0:o.callbacks,i=((s=this.config)==null?void 0:s.preserveFolderStructure)!==!1;for(const l of e.detail.files){if(mi(l.name))continue;const d=i?l.relativeFolder??"":"",c=this._store.getState();if([...c.files.values()].some(w=>w.name===l.name&&w.size===l.size&&w.relativeFolder===d&&w.status!=="rejected"&&w.status!=="cancelled"))continue;const u=l.thumbnail?this._transformRemoteThumbnail(l.thumbnail,{source:"connector",providerId:l.provider}):null,y=xi({name:l.name,size:l.size,type:l.mimeType},c.restrictions,c.files);if(y){const w={id:He(),status:"rejected",file:null,remoteUrl:null,name:l.name,size:l.size,type:l.mimeType,previewUrl:u,duration:null,progress:0,speed:0,bytesUploaded:0,error:y,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:l,...qe,relativeFolder:d};Be(this._store,w),this._dispatchPublic(I.FILE_REJECTED,{file:w,reason:y}),(n=t==null?void 0:t.onFileRejected)==null||n.call(t,w,y);continue}const v={id:He(),status:"idle",file:null,remoteUrl:null,name:l.name,size:l.size,type:l.mimeType,previewUrl:u,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:l,...qe,relativeFolder:d};Be(this._store,v),this._dispatchPublic(I.FILE_ADDED,{file:v}),(a=t==null?void 0:t.onFileAdded)==null||a.call(t,v)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,o,s,n;this._dispatchPublic(I.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),(((s=this.config)==null?void 0:s.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(I.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,i,o;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(I.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,o;(e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(I.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(I.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&xs(t).then(({files:i,hadDirectories:o})=>{if(i.length===0){o&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:o}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const o=((t=this.config)==null?void 0:t.mode)??"modal",s=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(s==="close"||s==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),s=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,s))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=Y._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=i===-1?1:(i+1)%t.length;this._fsZoom=t[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Dn(),this._storeCtrl=new In(this,this._store)}get _lastUploadId(){var i,o;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}open(){var t,i,o,s,n,a,l,d,c;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||o.call(i),this._dispatchPublic(I.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(I.OPEN,{}),e&&((c=(d=(l=this.config)==null?void 0:l.callbacks)==null?void 0:d.onRestore)==null||c.call(d),this._dispatchPublic(I.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(I.CLOSE,{}),this.requestUpdate()}upload(){var o,s,n,a,l,d,c,p,u,y;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(v=>v.status==="idle"||v.status==="queued");if((s=(o=this.config)==null?void 0:o.callbacks)!=null&&s.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(I.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(I.UPLOAD_STARTED,{files:e}),(l=(a=(n=this.config)==null?void 0:n.callbacks)==null?void 0:a.onUploadStarted)==null||l.call(a,e),this._engine.uploadAll(),(d=this.config)!=null&&d.minimizeOnUpload&&((c=this.config)==null?void 0:c.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(y=(u=(p=this.config)==null?void 0:p.callbacks)==null?void 0:u.onMinimize)==null||y.call(u),this._dispatchFloatGeometryEvent(I.MINIMIZE),this.requestUpdate()))}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,o=new Map(i);let s=!1;for(const n of e){const a=i.get(n.id);a&&(o.set(n.id,{...a,...n}),s=!0)}s&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!Y._MODIFIABLE_STATUSES.has(s.status))return;const n=new Map(o);n.set(e,{...s,meta:t!=null?{...s.meta,...t}:s.meta,tags:i??s.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,meta:n,tags:a}of e){const l=t.get(s);!l||!Y._MODIFIABLE_STATUSES.has(l.status)||(i.set(s,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileProduct(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!Y._MODIFIABLE_STATUSES.has(o.status))return;const s=new Map(i);s.set(e,{...o,product:Kr(o.product,t)}),this._store.setState({files:s})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,product:n}of e){const a=t.get(s);!a||!Y._MODIFIABLE_STATUSES.has(a.status)||(i.set(s,{...a,product:Kr(a.product,n)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),ke(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(I.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(ke($,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&nt.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await Pn(e||"en");i&&t.on("missingKey",(s,n,a,l,d,c)=>{const p=a.match(/_(?:zero|one|two|few|many|other)$/),u=p&&(c!=null&&c[`defaultValue${p[0]}`])?String(c[`defaultValue${p[0]}`]):l;Rn.handleMissingKey(a,u,n)});const o=(s,n,a)=>typeof n=="string"?t.t(s,n,a??{}):t.t(s,n??{});this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o,s;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._hostStyleObserver)==null||e.disconnect(),this._hostStyleObserver=null,(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(s=this._engine)==null||s.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const o=this._store.getState().queueConfig;t.queueConfig={...o,concurrency:e.concurrency}}if(e.autoProceed!=null){const o=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...o,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=this._lastUploadId;this._hasStoredReview=i!=null&&nt.exists(i),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,s,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=tr(t.container),this._authHeaders=Ri(t),this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(o=e.connectors)==null?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const l=await td(t);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,o;const t=e instanceof Error?e.message:String(e);return(o=(i=this.config)==null?void 0:i.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var s,n,a;const e=(s=this.config)==null?void 0:s.tusConfig,t=e===!0?{}:e||void 0;if(!t)return;const i=(a=(n=this.config)==null?void 0:n.connectors)==null?void 0:a.companionUrl;if(!i)return t;const o=i.replace(/\/+$/,"");return{...t,endpoint:t.endpoint??`${o}/files`,jsonBase:t.jsonBase??`${o}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;if(!(t==null&&!i))return o=>{const s={};if(t!=null){const a=typeof t=="function"?t():t;a&&(s.opt_force_name=a)}const n=i==null?void 0:i(o);return n&&Object.assign(s,n),Object.keys(s).length>0?s:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Ql(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:i=>this._transformRemoteThumbnail(i,{source:"cdn-complete"})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:i,createTagsAutocomplete:o}=await H(async()=>{const{fetchMetadataSchema:a,createTagsAutocomplete:l}=await import("./index-DWnBpSa4.js");return{fetchMetadataSchema:a,createTagsAutocomplete:l}},[]),s=await i(this._apiBase,this._authHeaders,t.projectUuid,t);this._metadataSchema=s.productsEnabled?Ed(s,this._storeCtrl.state.t):s,this._metadataAutocomplete=o(this._apiBase,this._authHeaders);const n=this._metadataSchema.fields.filter(a=>Cs(a,t)).map(a=>a.key);this._dispatchPublic(I.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:n})}catch(i){console.error("[sfx-uploader] Failed to load metadata schema:",i),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(e,t){const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const s=new Map(this._store.getState().files);s.set(e,{...o,name:i}),this._store.setState({files:s})}_previewMeta(e){var t;return(t=this._metadataSchema)!=null&&t.productsEnabled?{...e.meta,[Qe]:e.product.ref,[et]:e.product.position}:e.meta}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema||e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0||this._metadataSchema.forceFillingOnUpload||e.requiredFields&&e.requiredFields.length>0?!0:this._metadataSchema.fields.some(i=>!!i.required)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:Ud(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var o;const e=this._isPillExpanded?"card":"pill",t=(o=this._portalContainer)==null?void 0:o.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var o,s,n,a,l,d,c,p,u,y;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0);const i=(o=this.config)==null?void 0:o.callbacks;for(const[v,w]of e.files){const P=t.files.get(v);if(P){if(P.status!==w.status)switch(w.status){case"uploading":P.status==="paused"&&(this._dispatchPublic(I.UPLOAD_RESUMED,{file:w}),(s=i==null?void 0:i.onUploadResumed)==null||s.call(i,w));break;case"complete":w.response&&(this._dispatchPublic(I.UPLOAD_COMPLETE,{file:w,response:w.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,w,w.response));break;case"error":case"failed":{const T=new Error(w.error??"Upload failed");this._dispatchPublic(I.UPLOAD_ERROR,{file:w,error:T}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,w,T);break}case"retrying":this._dispatchPublic(I.UPLOAD_RETRY,{file:w,attempt:w.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,w,w.retryCount);break;case"paused":this._dispatchPublic(I.UPLOAD_PAUSED,{file:w}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,w);break}w.status==="uploading"&&P.progress!==w.progress&&(this._dispatchPublic(I.UPLOAD_PROGRESS,{file:w,progress:w.progress,speed:w.speed}),(c=i==null?void 0:i.onUploadProgress)==null||c.call(i,w,w.progress,w.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const v=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=v),this._dispatchPublic(I.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:v}),(p=i==null?void 0:i.onTotalProgress)==null||p.call(i,e.totalProgress,e.totalSpeed,v)}if(t.isUploading&&!e.isUploading){const v=[...e.files.values()];if(!v.some(P=>P.status==="cancelled")){const P=v.filter(g=>g.status==="complete"),T=v.filter(g=>g.status==="failed"||g.status==="error");if(P.length===0&&T.length===0)return;const k=this._lastUploadId;if(k!=null){const g=[...P,...T];nt.save(k,g),this._hasStoredReview=g.length>0}this._dispatchPublic(I.ALL_COMPLETE,{successful:P,failed:T}),(u=i==null?void 0:i.onAllComplete)==null||u.call(i,P,T);const _=(y=this.config)==null?void 0:y.closeOnComplete;if(_!==!1&&_!=null){const g=typeof _=="number"?_:1500;this._closeOnCompleteTimer=setTimeout(()=>{var b,R,U;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(I.COMPLETE_ACTION,{}),(U=(R=(b=this.config)==null?void 0:b.callbacks)==null?void 0:R.onCompleteAction)==null||U.call(R),this.close())},g)}}}}get _mergedSources(){var p;const e=(p=this.config)==null?void 0:p.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=ct.filter(u=>u.id!=="url"),this._cachedSources;const t=e.providers.length>0?ud(e.providers):[],i=e.customSources??[],o=e.coreSources?new Set(e.coreSources):null,s=o?ct.filter(u=>o.has(u.id)):ct,n=e.companionUrl?s:s.filter(u=>u.id!=="url"),a=n.filter(u=>u.id==="device"||u.id==="url"),l=n.filter(u=>u.id!=="device"&&u.id!=="url"),d=new Set,c=[];for(const u of[...a,...t,...l,...i])if(!d.has(u.id)){if(Y._RESERVED_IDS.has(u.id)&&u.onActivate){console.warn(`[sfx-uploader] Custom source id "${u.id}" conflicts with a built-in source and was skipped.`);continue}d.add(u.id),c.push(u)}return this._cachedSources=c,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>i.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var n,a,l,d,c;const t=(n=this.config)==null?void 0:n.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1;let o=0,s=!1;for(const p of e){if(mi(p.name))continue;if(s){o++;continue}const u=i?Wl(Yl(p)):"",y=this._store.getState();if([...y.files.values()].some(_=>_.name===p.name&&_.size===p.size&&_.relativeFolder===u&&_.status!=="rejected"&&_.status!=="cancelled"))continue;const w=p.type||bo(p.name),P=xi({name:p.name,size:p.size,type:w},y.restrictions,y.files);if(P){if(pd(P)){s=!0,o++;continue}const _=w.startsWith("image/")&&!yo(w)?URL.createObjectURL(p):null,g={id:He(),status:"rejected",file:p,remoteUrl:null,name:p.name,size:p.size,type:w,previewUrl:_,duration:null,progress:0,speed:0,bytesUploaded:0,error:P,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...qe,relativeFolder:u};Be(this._store,g),this._dispatchPublic(I.FILE_REJECTED,{file:g,reason:P}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,g,P);const b=(d=this.config)==null?void 0:d.rejectedFileAutoRemoveDelay,R=b===!1||b===0||b===void 0?0:b;if(R>0){const U=g.id,F=setTimeout(()=>{this._rejectedTimers.delete(U);const L=this._store.getState().files.get(U);L&&L.status==="rejected"&&Vr(this._store,U)},R);this._rejectedTimers.set(U,F)}continue}let T=null;w.startsWith("image/")&&!yo(w)&&(T=URL.createObjectURL(p));const k={id:He(),status:"idle",file:p,remoteUrl:null,name:p.name,size:p.size,type:w,previewUrl:T,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...qe,relativeFolder:u};if(Be(this._store,k),this._dispatchPublic(I.FILE_ADDED,{file:k}),(c=t==null?void 0:t.onFileAdded)==null||c.call(t,k),p.type.startsWith("video/")){cd(p).then(g=>{if(!g)return;const b=this._store.getState(),R=b.files.get(k.id);if(R){const U=new Map(b.files);U.set(k.id,{...R,previewUrl:g}),this._store.setState({files:U})}else URL.revokeObjectURL(g)});const _=document.createElement("video");_.preload="metadata",_.src=URL.createObjectURL(p),_.onerror=()=>{URL.revokeObjectURL(_.src)},_.onloadedmetadata=()=>{const g=_.duration;if(URL.revokeObjectURL(_.src),!isFinite(g))return;const b=this._store.getState(),R=b.files.get(k.id);if(R){const U=new Map(b.files);U.set(k.id,{...R,duration:g}),this._store.setState({files:U})}}}}if(o>0){const p=this._storeCtrl.state.t,u=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(p("tooManyFilesSkipped",{count:o,max:u,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var s,n,a,l,d;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const c=this._videoBlobUrls.get(t.file);c&&(URL.revokeObjectURL(c),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((s=this._engine)==null||s.cancelFile(e)),Vr(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const c=[...this._store.getState().files.values()];this._previewFileId=c.length>0?c[0].id:null}this._dispatchPublic(I.FILE_REMOVED,{file:i}),(d=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||d.call(l,i)}_locateFile(e){var o,s,n;if(!e)return;const t=this.dispatchEvent(new CustomEvent(I.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e}}));if((n=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onFileLocate)==null||n.call(s,e),!t)return;const i=zn(e,this.config??void 0);i&&window.open(i,"_blank","noopener,noreferrer")}render(){var o;const e=((o=this.config)==null?void 0:o.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?h`
        ${this._isOpen&&!this._isMinimized?h`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:$}
        ${this._renderFsOverlay()}
      `:h`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return $;const e=this._storeCtrl.state.t,t=[...this._store.getState().files.values()].filter(o=>o.previewUrl||o.type.startsWith("video/")&&o.file),i=t.findIndex(o=>o.id===this._previewFileId);return h`
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
        ${this._fullscreenVideoFile?h`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${o=>o.stopPropagation()}></video>`:h`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${Z(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=Y._FS_ZOOM_LEVELS[Y._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=Y._FS_ZOOM_LEVELS[Y._FS_ZOOM_LEVELS.length-1]?h`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:h`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
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
    `}_renderInlineHeader(e){return h`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?h`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:$}
          ${e.title?h`<h2 class="inline-header-title">${e.title}</h2>`:$}
        </div>
        ${e.description?h`<div class="inline-header-desc">${e.description}</div>`:$}
      </div>
    `}_renderHeader(){var a,l,d;if(this._phase==="complete")return $;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal";if(this._phase==="uploading"){const u=[...this._storeCtrl.state.files.values()].filter(w=>w.status!=="rejected"&&w.status!=="cancelled"),y=u.length,v=u.filter(w=>w.status==="complete").length;return h`
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
                ${e("uploadingFiles",{count:y,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:v,total:y})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:gi(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(t==="inline"&&((l=this.config)!=null&&l.inlineHeader))return $;const i=((d=this.config)==null?void 0:d.header)??(t==="modal"?"close":!0);if(i===!1)return $;const o=t==="modal"?this._onModalDismiss:this._onInlineDismiss,s=i==="back"?h`<button
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
          </button>`:$,n=i==="close"?h`<button
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
          </button>`:$;return h`
      <div class="header">
        ${s}
        ${i!=="back"?h` <div class="header-icon">
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
            </div>`:$}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${n}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var c;const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=e.filter(p=>p.status!=="rejected"&&p.status!=="cancelled"),n=s.length,a=s.filter(p=>p.status==="complete").length,l=s.filter(p=>Oi(p.status)),d=[];return n>1&&d.push(i("nOfNComplete","{{completed}} of {{total}} complete",{completed:a,total:n})),this._lastEta>0&&d.push(i("etaLeft","~{{eta}} left",{eta:gi(this._lastEta)})),h`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          ${i("uploadingFiles",{count:n,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
        </div>
        ${d.length>0?h`<div class="upload-overlay-subtitle">${d.join(" · ")}</div>`:$}
        ${n>1?h`<div class="upload-overlay-bar">
              <div class="upload-overlay-bar-fill" ${Z({width:`${o}%`})}></div>
            </div>`:$}
        ${l.length>0?this._renderOverlayFiles(l,i):$}
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${i("cancelUpload","Cancel upload")}
          </button>
          ${(c=this.config)!=null&&c.minimizeOnUpload?h`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${i("minimizeAndContinue","Minimize & continue in background")}
              </button>`:$}
        </div>
      </div>
    `}_renderOverlayFiles(e,t){return h`
      <div class="upload-overlay-files">
        ${e.map(i=>{const o=i.status==="paused",s=i.status==="uploading",n=i.status==="queued",a=Math.round(i.progress??0),l=o?t("paused","Paused"):n?t("queued","Queued"):`${a}%`;return h`
            <div class="upload-overlay-file">
              <div class="upload-overlay-file-info">
                <div class="upload-overlay-file-name" title=${i.name}>${i.name}</div>
                <div class="upload-overlay-file-meta">
                  <div class="upload-overlay-file-bar">
                    <div
                      class="upload-overlay-file-bar-fill ${o||n?"muted":""}"
                      ${Z({width:`${a}%`})}
                    ></div>
                  </div>
                  <div class="upload-overlay-file-pct">${l}</div>
                </div>
              </div>
              <div class="upload-overlay-file-actions">
                ${s&&i.isTus?h`
                      <button
                        class="upload-overlay-file-btn"
                        title=${t("pause","Pause")}
                        aria-label=${t("pauseUpload","Pause upload")}
                        @click=${()=>{var d;return(d=this._engine)==null?void 0:d.pauseFile(i.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:$}
                ${o?h`
                      <button
                        class="upload-overlay-file-btn paused"
                        title=${t("resume","Resume")}
                        aria-label=${t("resumeUpload","Resume upload")}
                        @click=${()=>{var d;return(d=this._engine)==null?void 0:d.resumeFile(i.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:$}
                <button
                  class="upload-overlay-file-btn del"
                  title=${t("remove","Remove")}
                  aria-label=${t("removeFile","Remove file")}
                  @click=${()=>this._removeFile(i.id)}
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
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=this._phase==="complete",n=e.filter(c=>c.status==="complete").length,a=e.filter(c=>c.status==="failed").length,l=e.filter(c=>c.status==="complete"&&c.alreadyExisted).length,d=n>0&&a===0&&l>=n;return this._isPillExpanded===!1?h`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s?a>0?n>0?h`<div class="float-collapsed-icon warn">
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
                    </div>`:h`<div class="float-collapsed-icon error">
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
                    </div>`:d?h`<div class="float-collapsed-icon info">
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
                    </div>`:h`<div class="float-collapsed-icon done">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>`:h`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):d?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}</span
            >
            ${s?$:h`<span class="float-collapsed-pct">${o}%</span>`}
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
      `:h`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${s?a>0?n>0?"warn":"error":d?"info":"done":""}"
            >
              ${s?a>0?n>0?h`<svg
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
                      </svg>`:h`<svg
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
                      </svg>`:d?h`<svg
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
                      </svg>`:h`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>`:h`<svg
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
                ${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):d?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${s?d?i("alreadyInLibrarySubtitle",{count:l,defaultValue_one:"It’s ready to use — nothing new to upload",defaultValue_other:"They’re ready to use — nothing new to upload"}):`${i("filesUploaded",{count:n,defaultValue_one:"{{count}} file uploaded",defaultValue_other:"{{count}} files uploaded"})}${a>0?`, ${i("nFailed","{{count}} failed",{count:a})}`:""}`:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:gi(this._lastEta)})}`:""}`}
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
              ${Z({width:`${s?100:o}%`})}
            ></div>
          </div>
        </div>
        ${s&&l>0&&!d?h`<div class="float-info-note" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>${i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:$}
        <div class="float-items">
          ${e.map(c=>{var u,y,v;const p=c.status==="failed"||c.status==="error";return h`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${Z(c.previewUrl?{"background-image":`url(${c.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${c.previewUrl?$:h`<svg
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
                  <div class="float-item-name">${c.name}</div>
                  <div class="float-item-size">${Oe(c.size)}</div>
                </div>
                <div class="float-item-status">
                  ${c.status==="complete"?h`${(u=this.config)!=null&&u.showLocateButton&&((v=(y=c.response)==null?void 0:y.file)!=null&&v.uuid)?h`<button
                              class="float-item-act locate"
                              title=${i("locate","Locate")}
                              aria-label=${i("locate","Locate")}
                              @click=${()=>this._locateFile(c)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <circle cx="12" cy="12" r="7" />
                              </svg>
                            </button>`:$}
                        ${c.alreadyExisted?h`<div
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
                            </div>`:h`<div class="float-item-done">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>`}`:p?h` <div class="float-item-error-wrap">
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
                            >${c.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var w;this._ensureEngine(),(w=this._engine)==null||w.retryFile(c.id)}}
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
                        </button>`:c.status==="paused"?h`
                        <button
                          class="float-item-act paused"
                          title=${i("resume","Resume")}
                          aria-label=${i("resumeUpload","Resume upload")}
                          @click=${()=>{var w;return(w=this._engine)==null?void 0:w.resumeFile(c.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </button>
                        <button
                          class="float-item-act del"
                          title=${i("remove","Remove")}
                          aria-label=${i("removeFile","Remove file")}
                          @click=${()=>this._removeFile(c.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:h`
                        <div class="float-item-spinner"></div>
                        ${c.status==="uploading"&&c.isTus?h`<button
                              class="float-item-act"
                              title=${i("pause","Pause")}
                              aria-label=${i("pauseUpload","Pause upload")}
                              @click=${()=>{var w;return(w=this._engine)==null?void 0:w.pauseFile(c.id)}}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>`:$}
                        ${c.status==="uploading"||c.status==="queued"||c.status==="retrying"?h`<button
                              class="float-item-act del"
                              title=${i("remove","Remove")}
                              aria-label=${i("removeFile","Remove file")}
                              @click=${()=>this._removeFile(c.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>`:$}
                      `}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var n,a,l,d,c;if(e.length===0)return $;const t=this._storeCtrl.state.t,i=e.find(p=>p.id===this._previewFileId)??e[0],o=((n=i.name.split(".").pop())==null?void 0:n.toUpperCase())||"";new Date(i.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const s=e.reduce((p,u)=>p+(u.size||0),0);return h`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Z({flex:String(this._splitPct)})}>
          ${((a=this.config)==null?void 0:a.mode)==="inline"&&((l=this.config)!=null&&l.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):$}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${e.length} ${e.length===1?"asset":"assets"} ·
              ${Oe(s)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${wo(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
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
        <div class="preview-panel" ${Z({flex:String(100-this._splitPct)})}>
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
            <span class="preview-header-name" title=${i.name}
              >${i.name}</span
            >
            <div class="preview-header-actions">
              ${i.previewUrl||i.type.startsWith("video/")&&i.file?h`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=i.previewUrl,this._fullscreenVideoFile=i.type.startsWith("video/")&&i.file?i.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
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
                  `:$}
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
          ${i.type.startsWith("video/")&&i.file?h`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(i.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(i)===0}
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
                    ?disabled=${e.indexOf(i)===e.length-1}
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
              `:i.previewUrl?h`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${i.previewUrl}
                      alt=${i.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(i)===0}
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
                    ?disabled=${e.indexOf(i)===e.length-1}
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
              `:h`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${ys(i)}">
                    <img
                      class="preview-doc-type-img"
                      src=${_s(o)}
                      alt="${o?`${o} file`:"File"}"
                      @error=${p=>{const u=p.target,y=ks();!u.dataset.fallback&&u.src!==y&&(u.dataset.fallback="1",u.src=y)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(i)===0}
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
                    ?disabled=${e.indexOf(i)===e.length-1}
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
          ${this._metadataSchema&&((d=this.config)!=null&&d.metadataConfig)?h`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${o}${i.size?` · ${Oe(i.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:$}
          ${this._metadataSchema&&((c=this.config)!=null&&c.metadataConfig)?h`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${this._previewMeta(i)}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:h`
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
                        ${i.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${t("type","Type")}</div>
                      <div class="preview-file-info-val">${o}</div>
                    </div>
                    ${i.size?h`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${Oe(i.size)}
                            </div>
                          </div>
                        `:$}
                    ${this._previewDims!=="—"?h`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:$}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_navigatePreview(e,t){var s;const o=e.findIndex(n=>n.id===this._previewFileId)+t;if(o>=0&&o<e.length){const n=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[o].id}}_renderBody(){var l,d,c,p,u,y,v,w,P,T,k,_;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],o=i.filter(g=>g.status==="idle"||g.status==="queued"||g.status==="error"||g.status==="failed"),s=this._phase,n=wo(e.restrictions),a=i.length>0;return h`
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
          class="body ${a?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId?"has-preview":""}"
          @dragenter=${a?this._onBodyDragEnter:$}
          @dragover=${a?this._onBodyDragOver:$}
          @dragleave=${a?this._onBodyDragLeave:$}
          @drop=${a?this._onBodyDrop:$}
        >
          ${((l=this.config)==null?void 0:l.mode)==="inline"&&((d=this.config)!=null&&d.inlineHeader)&&!this._previewFileId&&s!=="uploading"&&s!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):$}
          ${this._isReviewing?h`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((c=this.config)==null?void 0:c.showLocateButton)??!1}
                  .showCopyCdnButton=${((p=this.config)==null?void 0:p.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:s==="complete"?h`
                <sfx-success-card
                  .t=${t}
                  .primaryLabel=${t("done","Done")}
                  .fileCount=${i.filter(g=>g.status==="complete").length}
                  .totalSize=${i.filter(g=>g.status==="complete"&&!g.alreadyExisted).reduce((g,b)=>g+(b.size||0),0)}
                  .thumbnails=${i.filter(g=>g.status==="complete"&&g.previewUrl).map(g=>g.previewUrl)}
                  .failedFiles=${i.filter(g=>g.status==="failed").map(g=>({id:g.id,name:g.name,error:g.error||"Upload failed"}))}
                  .alreadyExistedCount=${i.filter(g=>g.status==="complete"&&g.alreadyExisted).length}
                  .showMinimize=${!!((u=this.config)!=null&&u.minimizeOnUpload)&&((y=this.config)==null?void 0:y.mode)!=="inline"}
                  @close-uploader=${this._onSuccessCardClose}
                  @minimize-uploader=${this._onMinimize}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:s==="uploading"?this._renderUploadOverlay(i):h`
                ${a?$:h`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((v=this.config)==null?void 0:v.sourcesLayout)??"pills"}
                        .mode=${((w=this.config)==null?void 0:w.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?h`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:$}`}
                ${a?this._previewFileId?this._renderPreviewLayout(i):h`
                        <div class="asset-count">
                          ${i.length}
                          ${i.length===1?"file":"files"} ·
                          ${Oe(i.reduce((g,b)=>g+(b.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:$}
              `}
        </div>

        ${a&&s!=="complete"&&s!=="uploading"?h`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${"idle"}
                .fileCount=${o.length}
                .totalSize=${o.reduce((g,b)=>g+(b.size||0),0)}
                .failedCount=${i.filter(g=>g.status==="failed"||g.status==="error").length}
                .completedCount=${i.filter(g=>g.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((P=this.config)==null?void 0:P.showFillMetadata)??((T=this.config)==null?void 0:T.metadataConfig))}
                .requireMetadataFirst=${this._hasUnfilledRequiredMetadata}
              ></sfx-actions-bar>
            `:$}
        ${this._showUrlDialog?h`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:$}
        ${this._showCameraDialog?h`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:$}
        ${this._showScreenCastDialog?h`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:$}
        ${this._activeConnector&&((k=this.config)!=null&&k.connectors)?h`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${Co.has(this._activeConnector)?h`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      `:h`
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
            `:$}
        ${this._bulkMetadataOpen&&this._metadataSchema?h`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(g=>Y._MODIFIABLE_STATUSES.has(g.status))}
                .config=${((_=this.config)==null?void 0:_.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:$}
      </div>
    `}_navigateFs(e){const t=[...this._store.getState().files.values()].filter(s=>s.previewUrl||s.type.startsWith("video/")&&s.file),i=t.findIndex(s=>s.id===this._previewFileId);if(i===-1)return;const o=i+e;if(o>=0&&o<t.length){const s=t[o];this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._previewFileId=s.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},Y.styles=re`
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
  `,Y._FS_ZOOM_LEVELS=[1,2,3,4],Y._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),Y._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),Y);K([A({attribute:!1})],V.prototype,"config");K([D()],V.prototype,"_isOpen");K([D()],V.prototype,"_activeConnector");K([D()],V.prototype,"_showUrlDialog");K([D()],V.prototype,"_showCameraDialog");K([D()],V.prototype,"_showScreenCastDialog");K([D()],V.prototype,"_previewFileId");K([D()],V.prototype,"_previewDims");K([D()],V.prototype,"_fileInfoOpen");K([D()],V.prototype,"_splitPct");K([D()],V.prototype,"_fullscreenPreviewUrl");K([D()],V.prototype,"_fullscreenVideoFile");K([D()],V.prototype,"_fsZoom");K([D()],V.prototype,"_bodyDragOver");K([D()],V.prototype,"_isMinimized");K([D()],V.prototype,"_isPillExpanded");K([D()],V.prototype,"_metadataSchema");K([D()],V.prototype,"_bulkMetadataOpen");K([D()],V.prototype,"_bulkMetadataInitialFieldKey");K([D()],V.prototype,"_isReviewing");K([D()],V.prototype,"_reviewFiles");K([D()],V.prototype,"_hasStoredReview");let Vd=V;const pe=(r,e)=>{typeof customElements<"u"&&!customElements.get(r)&&customElements.define(r,e)};pe("sfx-uploader",Vd);pe("sfx-drop-zone",Ld);pe("sfx-import-divider",zi);pe("sfx-source-pills",Ct);pe("sfx-file-list",ie);pe("sfx-file-item",he);pe("sfx-success-card",ne);pe("sfx-actions-bar",ae);pe("sfx-url-dialog",Ie);pe("sfx-camera-dialog",Ce);pe("sfx-screen-cast-dialog",me);const Kd=[{pattern:"/",load:()=>H(()=>import("./landing-BsVwSnSJ.js"),[]).then(r=>r.default)},{pattern:"/docs/getting-started",load:()=>H(()=>import("./getting-started-BEsDf8Jc.js"),__vite__mapDeps([0,1])).then(r=>r.default)},{pattern:"/docs/configuration",load:()=>H(()=>import("./configuration-DviB-HMH.js"),__vite__mapDeps([2,1])).then(r=>r.default)},{pattern:"/docs/api",load:()=>H(()=>import("./api-C69HtrIu.js"),__vite__mapDeps([3,1])).then(r=>r.default)},{pattern:"/docs/theming",load:()=>H(()=>import("./theming-D5E2zXLD.js"),__vite__mapDeps([4,1])).then(r=>r.default)},{pattern:"/docs/types",load:()=>H(()=>import("./types-BP9Z4Qnu.js"),__vite__mapDeps([5,1])).then(r=>r.default)},{pattern:"/examples/basic",load:()=>H(()=>import("./basic-CORtUh6h.js"),__vite__mapDeps([6,7])).then(r=>r.default)},{pattern:"/examples/auto-upload",load:()=>H(()=>import("./auto-upload-CNr6sjGt.js"),__vite__mapDeps([8,7])).then(r=>r.default)},{pattern:"/examples/restrictions",load:()=>H(()=>import("./restrictions-DQJqNtIZ.js"),__vite__mapDeps([9,7,10])).then(r=>r.default)},{pattern:"/examples/target-folder",load:()=>H(()=>import("./target-folder-CEm2sV0t.js"),__vite__mapDeps([11,7])).then(r=>r.default)},{pattern:"/examples/concurrency",load:()=>H(()=>import("./concurrency-Dib2pvhx.js"),__vite__mapDeps([12,7,10])).then(r=>r.default)},{pattern:"/examples/events",load:()=>H(()=>import("./events-C11S_-ni.js"),__vite__mapDeps([13,7])).then(r=>r.default)},{pattern:"/examples/modal",load:()=>H(()=>import("./modal-BeyI_btJ.js"),__vite__mapDeps([14,7])).then(r=>r.default)},{pattern:"/examples/inline",load:()=>H(()=>import("./inline-B-ByVQ0_.js"),__vite__mapDeps([15,7])).then(r=>r.default)},{pattern:"/examples/sources-layout",load:()=>H(()=>import("./sources-layout-MC0hdBJ0.js"),__vite__mapDeps([16,7])).then(r=>r.default)},{pattern:"/examples/core-sources",load:()=>H(()=>import("./core-sources-CTcUBTS1.js"),__vite__mapDeps([17,7])).then(r=>r.default)},{pattern:"/examples/header-button",load:()=>H(()=>import("./header-button-D9rRdyu6.js"),__vite__mapDeps([18,7])).then(r=>r.default)},{pattern:"/examples/minimize-to-background",load:()=>H(()=>import("./minimize-to-background-zmcNsRQh.js"),__vite__mapDeps([19,7])).then(r=>r.default)},{pattern:"/examples/resumable-upload",load:()=>H(()=>import("./resumable-upload-VhyilczY.js"),__vite__mapDeps([20,7,10])).then(r=>r.default)},{pattern:"/examples/react-wrapper",load:()=>H(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([21,1])).then(r=>r.default)},{pattern:"/examples/metadata",load:()=>H(()=>import("./metadata-CTekEurG.js"),__vite__mapDeps([22,7])).then(r=>r.default)},{pattern:"/examples/full-screen",load:()=>H(()=>import("./full-screen-D1Ou_RPk.js"),[]).then(r=>r.default)},{pattern:"/examples/last-upload-review",load:()=>H(()=>import("./last-upload-review-C7pSzF8J.js"),[]).then(r=>r.default)}];let Ve=null,Eo=0;function Yd(r){const e=document.getElementById("content"),t=document.getElementById("sidebar"),i=document.getElementById("sidebar-docs"),o=document.getElementById("sidebar-examples"),s=document.querySelectorAll(".topbar-nav-link");async function n(){var k,_;const a=location.hash.slice(1)||"/",l=!a.startsWith("/");if(l&&Ve){(k=document.getElementById(a))==null||k.scrollIntoView({behavior:"smooth"});return}const d=l?"/":a,c=++Eo;Ve!=null&&Ve.destroy&&Ve.destroy();const p=Kd.find(g=>g.pattern===d);if(!p){location.hash="#/";return}const u=d.startsWith("/docs/"),y=d.startsWith("/examples/"),v=u||y,w=d==="/";t.classList.toggle("hidden",!v),document.body.classList.toggle("has-sidebar",v),document.body.classList.toggle("is-home",w),i.classList.toggle("hidden",!u),o.classList.toggle("hidden",!y),t.querySelectorAll(".sidebar-link").forEach(g=>{g.classList.toggle("active",g.getAttribute("data-route")===d)});const P=u?"docs":y?"examples":"home";s.forEach(g=>{g.classList.toggle("active",g.getAttribute("data-section")===P)}),t.classList.remove("mobile-open"),l||window.scrollTo(0,0);const T=await p.load();c===Eo&&(Ve=T,e.innerHTML=T.render(),T.init&&T.init(r),l&&((_=document.getElementById(a))==null||_.scrollIntoView({behavior:"smooth"})))}window.addEventListener("hashchange",n),n()}const Ps="sfx-uploader-demo-auth",Po={container:"",securityTemplateId:""};function Us(){try{const r=localStorage.getItem(Ps);if(r)return{...Po,...JSON.parse(r)}}catch{}return{...Po}}function Wd(r){localStorage.setItem(Ps,JSON.stringify(r))}function cc(r={}){const{container:e,securityTemplateId:t}=Us();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://eu-on-24001.connector.filerobot.com",providers:["google-drive","dropbox","box","onedrive"]},...r}}function Gd(){const r=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),i=document.getElementById("auth-sec-template"),o=document.getElementById("auth-save"),s=Us();t.value=s.container,i.value=s.securityTemplateId,r.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),o.addEventListener("click",()=>{Wd({container:t.value.trim(),securityTemplateId:i.value.trim()}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!r.contains(n.target)&&e.classList.add("hidden")})}Gd();const Xd=document.getElementById("uploader");Yd(Xd);var Oo;(Oo=document.getElementById("sidebar-toggle"))==null||Oo.addEventListener("click",()=>{var r;(r=document.getElementById("sidebar"))==null||r.classList.toggle("mobile-open")});export{$ as A,$d as B,_s as C,ks as D,Oe as E,dc as F,ac as G,ir as H,Qe as P,re as a,cc as b,h as c,ec as d,Wi as e,rc as f,ud as g,Vn as h,Q as i,Kn as j,Ae as k,tc as l,Z as m,A as n,Cs as o,yd as p,sc as q,D as r,ic as s,Ti as t,kd as u,nc as v,Re as w,et as x,lc as y,fd as z};
