const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/landing-NkxuazOf.js","assets/code-block-Bk3NnwHF.js","assets/getting-started-fZaaCZVJ.js","assets/doc-utils-XkOyWBCy.js","assets/configuration-D8bJS1AY.js","assets/api-DA_tOMfL.js","assets/theming-C0CqbLOs.js","assets/types-CcGaxag1.js","assets/basic-BLndAhoH.js","assets/auto-upload-BvlR7Kcu.js","assets/restrictions-BB77hxnc.js","assets/custom-select-CZ_fVHDR.js","assets/target-folder-D2TGp4S-.js","assets/concurrency-2lj5qWMI.js","assets/events-C8qdlvW0.js","assets/inline-C0GOF3Yn.js","assets/sources-layout-B7B2kEaD.js","assets/react-wrapper-DqFoKQCy.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Dt="modulepreload",Tt=function(i){return"/uploader/"+i},et={},w=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let n=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=n(t.map(c=>{if(c=Tt(c),c in et)return;et[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Dt,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(n){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n}return s.then(n=>{for(const a of n||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=globalThis,ze=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),tt=new WeakMap;let wt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ze&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=tt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&tt.set(t,e))}return e}toString(){return this.cssText}};const Ot=i=>new wt(typeof i=="string"?i:i+"",void 0,Ie),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new wt(t,i,Ie)},Rt=(i,e)=>{if(ze)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=ge.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},rt=ze?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ot(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Lt,defineProperty:zt,getOwnPropertyDescriptor:It,getOwnPropertyNames:Mt,getOwnPropertySymbols:jt,getPrototypeOf:Ft}=Object,I=globalThis,st=I.trustedTypes,Bt=st?st.emptyScript:"",Ae=I.reactiveElementPolyfillSupport,oe=(i,e)=>i,ve={toAttribute(i,e){switch(e){case Boolean:i=i?Bt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Me=(i,e)=>!Lt(i,e),it={attribute:!0,type:String,converter:ve,reflect:!1,useDefault:!1,hasChanged:Me};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),I.litPropertyMetadata??(I.litPropertyMetadata=new WeakMap);let K=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=it){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&zt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=It(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??it}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const e=Ft(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const t=this.properties,r=[...Mt(t),...jt(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(rt(s))}else e!==void 0&&t.push(rt(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var o;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ve).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o,n;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=r.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:ve;this._$Em=s;const c=l.fromAttribute(t,a.type);this[s]=c??((n=this._$Ej)==null?void 0:n.get(s))??c,this._$Em=null}}requestUpdate(e,t,r,s=!1,o){var n;if(e!==void 0){const a=this.constructor;if(s===!1&&(o=this[e]),r??(r=a.getPropertyOptions(e)),!((r.hasChanged??Me)(o,t)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[oe("elementProperties")]=new Map,K[oe("finalized")]=new Map,Ae==null||Ae({ReactiveElement:K}),(I.reactiveElementVersions??(I.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,ot=i=>i,xe=ne.trustedTypes,nt=xe?xe.createPolicy("lit-html",{createHTML:i=>i}):void 0,_t="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+z,Ht=`<${kt}>`,H=document,ae=()=>H.createComment(""),le=i=>i===null||typeof i!="object"&&typeof i!="function",je=Array.isArray,Nt=i=>je(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Pe=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,j=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,$t=/^(?:script|style|textarea|title)$/i,Ct=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),d=Ct(1),J=Ct(2),N=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),pt=new WeakMap,F=H.createTreeWalker(H,129);function Et(i,e){if(!je(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(e):e}const qt=(i,e)=>{const t=i.length-1,r=[];let s,o=e===2?"<svg>":e===3?"<math>":"",n=re;for(let a=0;a<t;a++){const l=i[a];let c,u,h=-1,p=0;for(;p<l.length&&(n.lastIndex=p,u=n.exec(l),u!==null);)p=n.lastIndex,n===re?u[1]==="!--"?n=at:u[1]!==void 0?n=lt:u[2]!==void 0?($t.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=j):u[3]!==void 0&&(n=j):n===j?u[0]===">"?(n=s??re,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?j:u[3]==='"'?dt:ct):n===dt||n===ct?n=j:n===at||n===lt?n=re:(n=j,s=void 0);const g=n===j&&i[a+1].startsWith("/>")?" ":"";o+=n===re?l+Ht:h>=0?(r.push(c),l.slice(0,h)+_t+l.slice(h)+z+g):l+z+(h===-2?a:g)}return[Et(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class ce{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[c,u]=qt(e,t);if(this.el=ce.createElement(c,r),F.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=F.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(_t)){const p=u[n++],g=s.getAttribute(h).split(z),x=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:x[2],strings:g,ctor:x[1]==="."?Vt:x[1]==="?"?Xt:x[1]==="@"?Wt:$e}),s.removeAttribute(h)}else h.startsWith(z)&&(l.push({type:6,index:o}),s.removeAttribute(h));if($t.test(s.tagName)){const h=s.textContent.split(z),p=h.length-1;if(p>0){s.textContent=xe?xe.emptyScript:"";for(let g=0;g<p;g++)s.append(h[g],ae()),F.nextNode(),l.push({type:2,index:++o});s.append(h[p],ae())}}}else if(s.nodeType===8)if(s.data===kt)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(z,h+1))!==-1;)l.push({type:7,index:o}),h+=z.length-1}o++}}static createElement(e,t){const r=H.createElement("template");return r.innerHTML=e,r}}function G(i,e,t=i,r){var n,a;if(e===N)return e;let s=r!==void 0?(n=t._$Co)==null?void 0:n[r]:t._$Cl;const o=le(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=G(i,s._$AS(i,e.values),s,r)),e}class Yt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??H).importNode(t,!0);F.currentNode=s;let o=F.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new de(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Kt(o,this,e)),this._$AV.push(c),l=r[++a]}n!==(l==null?void 0:l.index)&&(o=F.nextNode(),n++)}return F.currentNode=H,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class de{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),le(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(H.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ce.createElement(Et(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Yt(s,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=pt.get(e.strings);return t===void 0&&pt.set(e.strings,t=new ce(e)),t}k(e){je(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const o of e)s===t.length?t.push(r=new de(this.O(ae()),this.O(ae()),this,this.options)):r=t[s],r._$AI(o),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const s=ot(e).nextSibling;ot(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class $e{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(e,t=this,r,s){const o=this.strings;let n=!1;if(o===void 0)e=G(this,e,t,0),n=!le(e)||e!==this._$AH&&e!==N,n&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=G(this,a[r+l],t,l),c===N&&(c=this._$AH[l]),n||(n=!le(c)||c!==this._$AH[l]),c===f?e=f:e!==f&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vt extends $e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Xt extends $e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Wt extends $e{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??f)===N)return;const r=this._$AH,s=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==f&&(r===f||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Kt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const Ue=ne.litHtmlPolyfillSupport;Ue==null||Ue(ce,de),(ne.litHtmlVersions??(ne.litHtmlVersions=[])).push("3.3.2");const Jt=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new de(e.insertBefore(ae(),o),o,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;let _=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return N}};var bt;_._$litElement$=!0,_.finalized=!0,(bt=B.litElementHydrateSupport)==null||bt.call(B,{LitElement:_});const De=B.litElementPolyfillSupport;De==null||De({LitElement:_});(B.litElementVersions??(B.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:Me},Gt=(i=Zt,e,t)=>{const{kind:r,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(t.name,i),r==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,i,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,i,a),a}}}if(r==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,i,!0,a)}}throw Error("Unsupported decorator location: "+r)};function b(i){return(e,t)=>typeof t=="object"?Gt(i,e,t):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(i){return b({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function St(i,e){return(t,r,s)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(i))??null};return Qt(t,r,{get(){return o(this)}})}}class er{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(r=>r(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const r=this._pendingState;this._pendingState=null,this.setState(r)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function P(i,e,t){const r=i.getState().files,s=r.get(e);if(!s)return;const o=new Map(r);o.set(e,{...s,...t}),i.setState({files:o})}function X(i,e){const t=new Map(i.getState().files);t.set(e.id,e),i.setState({files:t})}function ht(i,e){const t=i.getState().files;if(!t.has(e))return;const r=new Map(t);r.delete(e),i.setState({files:r})}function tr(){return new er({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class rr{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function sr(i,e){const t=new XMLHttpRequest;let r=!1;const o=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;t.open("POST",o);for(const[a,l]of Object.entries(e.authHeaders))t.setRequestHeader(a,l);t.upload.addEventListener("progress",a=>{a.lengthComputable&&!r&&e.onProgress(a.loaded,a.total)}),t.addEventListener("load",()=>{if(r)return;let a;try{a=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&a.status==="success"?e.onComplete(a):e.onError(new Error(a.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))});const n=new FormData;if(i.file){const a={name:i.name,type:i.type};Object.keys(i.meta).length>0&&(a.meta=i.meta),i.tags.length>0&&(a.tags=i.tags),n.append("info[files[]]",JSON.stringify(a)),n.append("files[]",i.file,i.name)}return t.timeout=6e4,t.send(n),{abort(){r=!0,t.abort()}}}function ir(i,e){const t=new XMLHttpRequest;let r=!1;const o=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;t.open("POST",o);for(const[a,l]of Object.entries(e.authHeaders))t.setRequestHeader(a,l);if(t.setRequestHeader("Content-Type","application/json"),t.addEventListener("load",()=>{if(r)return;let a;try{a=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&a.status==="success"?e.onComplete(a):e.onError(new Error(a.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{r||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{r||e.onError(new Error("Upload timed out"))}),!i.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const n={files_urls:[{url:i.remoteUrl,name:i.name}],dir:e.folder};return t.timeout=6e4,t.send(JSON.stringify(n)),{abort(){r=!0,t.abort()}}}function Ce(i){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":i}}function ee(i){return i.replace(/\/+$/,"")}const or={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function pe(i){return or[i]??i}function Jr(i,e){const t=ee(i),r=btoa(JSON.stringify({origin:window.location.origin})),s=pe(e);return`${t}/${s}/connect?state=${encodeURIComponent(r)}`}async function Zr(i,e,t,r=""){const s=ee(i),o=r?`/${r}`:"",n=pe(e),a=await fetch(`${s}/${n}/list${o}`,{method:"GET",headers:Ce(t),credentials:"same-origin"});if(a.status===401)throw new Fe;if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Companion list failed (HTTP ${a.status})`)}return a.json()}async function Gr(i,e,t){const r=ee(i),s=await fetch(`${r}/${t}`,{method:"GET",headers:Ce(e),credentials:"same-origin"});if(s.status===401)throw new Fe;if(!s.ok){const o=await s.json().catch(()=>null);throw new Error((o==null?void 0:o.message)||`Companion list failed (HTTP ${s.status})`)}return s.json()}async function Qr(i,e,t,r){const s=ee(i),o=pe(e),n=r?`q=${encodeURIComponent(t)}&${r}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${s}/search/${o}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function nr(i,e,t,r,s,o=!1){const n=ee(i),a=pe(e),l=o?`${n}/search/${a}/get/${r}`:`${n}/${a}/get/${r}`,c=o?{Accept:"application/json","Content-Type":"application/json"}:Ce(t),u=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...s,httpMethod:s.httpMethod??"POST",useFormData:s.useFormData??!0,fieldname:s.fieldname??"files[]"})});if(u.status===401)throw new Fe;if(!u.ok){const h=await u.json().catch(()=>null);throw new Error((h==null?void 0:h.message)||`Companion upload failed (HTTP ${u.status})`)}return u.json()}async function es(i,e,t){const r=ee(i),s=pe(e),o=await fetch(`${r}/${s}/logout`,{method:"GET",headers:Ce(t),credentials:"same-origin"});return o.ok?o.json():{ok:!1,revoked:!1}}function ar(i){var s;const t=((s=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(i))==null?void 0:s[1])??i;return`${location.protocol==="https:"?"wss":"ws"}://${t}`}class Fe extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function lr(i,e){const t=i.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let r=!1,s=null;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,a={};i.meta&&Object.keys(i.meta).length>0&&Object.assign(a,i.meta),i.tags&&i.tags.length>0&&(a.tags=i.tags);const l=!t.token;return nr(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:n,headers:e.authHeaders,size:t.size,metadata:Object.keys(a).length>0?a:void 0},l).then(c=>{if(r)return;const h=`${ar(t.companionUrl)}/api/${c.token}`;try{s=new WebSocket(h)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}s.onmessage=p=>{var g,x,y;if(!r)try{const k=JSON.parse(p.data);switch(k.action){case"progress":{const E=k.payload,R=E.bytesUploaded??0,te=E.bytesTotal??(t.size||1);e.onProgress(R,te);break}case"success":{const E=k.payload;if(s==null||s.close(),(g=E.response)!=null&&g.responseText)try{const R=JSON.parse(E.response.responseText);if(R.status==="success"){e.onComplete(R);return}e.onError(new Error(R.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{s==null||s.close();const E=k.payload;let R=((x=E.error)==null?void 0:x.message)||"Upload failed";if((y=E.response)!=null&&y.responseText)try{const te=JSON.parse(E.response.responseText);R=te.hint||te.msg||te.message||R}catch{}e.onError(new Error(R));break}}}catch{}},s.onerror=()=>{r||e.onError(new Error("Upload progress connection failed"))},s.onclose=()=>{s=null}}).catch(c=>{r||e.onError(c instanceof Error?c:new Error(String(c)))}),{abort(){if(r=!0,s){try{s.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}s.close(),s=null}}}}class cr{constructor(e,t){this.activeUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const r of e.values())r.status==="idle"?(P(this.store,r.id,{status:"queued"}),t=!0):r.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(P(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&P(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}cancelFile(e){const t=this.store.getState().files.get(e);!t||!ut(t.status)||(this.abortUpload(e),P(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())ut(t.status)&&(this.abortUpload(t.id),P(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,r=this.activeUploads.size,s=t-r;if(s<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,s);for(const a of n)this.startUpload(a)}startUpload(e){P(this.store,e.id,{status:"uploading",error:null});let t=0,r=Date.now(),s=0;const o={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:l=>this.handleComplete(e.id,l),onError:l=>this.handleError(e.id,l)},n=(l,c)=>{const u=Date.now(),h=(u-r)/1e3;if(h>0){const g=(l-t)/h;s=s===0?g:.3*g+.7*s}t=l,r=u;const p=c>0?l/c*100:0;P(this.store,e.id,{progress:p,bytesUploaded:l,speed:s}),this.updateTotalProgress()};let a;e.remoteInfo?a=lr(e,{...o,onProgress:n}):e.remoteUrl?a=ir(e,o):a=sr(e,{...o,onProgress:n}),this.activeUploads.set(e.id,a)}handleComplete(e,t){this.activeUploads.delete(e),P(this.store,e,{status:"complete",progress:100,response:t}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const r=this.store.getState().files.get(e);if(!r)return;const{retryConfig:s}=this.store.getState().queueConfig,o=r.retryCount+1;if(o<=s.maxRetries){const n=Math.min(s.baseDelay*Math.pow(s.backoffFactor,r.retryCount),s.maxDelay);P(this.store,e,{status:"retrying",error:t.message,retryCount:o});const a=setTimeout(()=>{this.retryTimers.delete(e),P(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else P(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,r=0,s=0;for(const o of e.values())(o.status==="queued"||o.status==="uploading"||o.status==="retrying"||o.status==="complete"||o.status==="failed")&&(t+=o.size,r+=o.status==="complete"?o.size:o.bytesUploaded),o.status==="uploading"&&(s+=o.speed);this.store.setState({totalBytes:t,totalBytesUploaded:r,totalSpeed:s,totalProgress:t>0?r/t*100:0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function ut(i){return i==="queued"||i==="uploading"||i==="retrying"}function Be(i){return`https://api.filerobot.com/${i}`}async function dr(i,e){const t=`${Be(i)}/key/${encodeURIComponent(e)}`,r=new AbortController,s=setTimeout(()=>r.abort(),3e4);try{const o=await fetch(t,{signal:r.signal});if(clearTimeout(s),!o.ok)throw new Error(`SASS key exchange failed (HTTP ${o.status})`);const n=await o.json();if(n.status==="error")throw new Error(`SASS key exchange failed: ${n.msg||"Unknown error"}`);return n.key}catch(o){throw clearTimeout(s),o instanceof DOMException&&o.name==="AbortError"?new Error("SASS key exchange timed out"):o}}function Te(i,e){const t={};switch(i.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=i.sassKey;break;case"session":t["X-Filerobot-Session"]=i.sessionToken,i.companyToken&&(t["X-Company-Token"]=i.companyToken),i.projectToken&&(t["X-Project-Token"]=i.projectToken);break}return i.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=i.airboxPuid),t}async function pr(i){const e=Be(i.container);if(i.mode==="security-template"){const t=await dr(i.container,i.securityTemplateId);return{apiBase:e,headers:Te(i,t),sassKey:t}}return{apiBase:e,headers:Te(i)}}const m={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata"};let hr=0;function W(){return`file-${Date.now()}-${++hr}`}function me(i){if(i<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(i)/Math.log(1024)),e.length-1),r=i/Math.pow(1024,t);return`${t===0?r:r.toFixed(1)} ${e[t]}`}function ur(i){var t;const e=((t=i.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return i.type.startsWith("image/")?"image":i.type.startsWith("video/")||["mp4","mov","avi","webm","mkv"].includes(e)?"vid":i.type==="application/pdf"||e==="pdf"?"pdf":["doc","docx","xls","xlsx","ppt","pptx","txt","rtf","odt"].includes(e)?"doc":["zip","rar","7z","tar","gz","bz2"].includes(e)?"zip":"gen"}function fr(i){const e=i.lastIndexOf(".");return e>=0?i.slice(e+1).toUpperCase():""}const gr={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function vr(i){var t;const e=((t=i.split(".").pop())==null?void 0:t.toLowerCase())??"";return gr[e]||""}function xr(i){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const r=URL.createObjectURL(i);let s=!1;const o=()=>{s||(s=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{s||(s=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(r))},"image/jpeg",.7);return}}catch{}o()},{once:!0}),t.addEventListener("error",()=>o(),{once:!0}),setTimeout(()=>o(),5e3),t.src=r,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function Oe(i,e,t){var r,s;if(e.maxFileSize!=null&&i.size>0&&i.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&i.size>0){let o=i.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(o+=n.size);if(o>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let o=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&o++;if(o>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const o=e.allowedFileTypes,n="."+(((r=i.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(!o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?i.type.startsWith(l.slice(0,-1)):i.type===l))return"File type not allowed"}if(e.blockedFileTypes!=null){const o=e.blockedFileTypes,n="."+(((s=i.name.split(".").pop())==null?void 0:s.toLowerCase())??"");if(o.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?i.type.startsWith(l.slice(0,-1)):i.type===l))return"File type is blocked"}return null}function mr(i,e,t){return Oe(i,e,t)}function br(i){return i.allowedFileTypes?i.allowedFileTypes.join(","):""}const ft={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function yr(i){return i.filter(e=>e in ft).map(e=>ft[e])}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr={CHILD:2},At=i=>(...e)=>({_$litDirective$:i,values:e});class _r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class be extends _r{constructor(e){if(super(e),this.it=f,e.type!==wr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===f||e==null)return this._t=void 0,this.it=e;if(e===N)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}be.directiveName="unsafeHTML",be.resultType=1;const Z=At(be);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Re extends be{}Re.directiveName="unsafeSVG",Re.resultType=2;const L=At(Re);var kr=Object.defineProperty,$r=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&kr(e,t,s),s};const Cr='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',Er='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Sr='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',Ar='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',ie=[{id:"device",label:"My Device",icon:Cr,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:Er,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:Sr,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:Ar,iconColor:"#ea580c"}],qe=class qe extends _{constructor(){super(...arguments),this.sources=ie}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return d`
      ${this.sources.map(e=>d`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Z(e.brandHtml):J`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${L(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};qe.styles=C`
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
  `;let ye=qe;$r([b({type:Array})],ye.prototype,"sources");var Pr=Object.defineProperty,O=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Pr(e,t,s),s};const gt=3,Ye=class Ye extends _{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this._dragOver=!1,this._moreOpen=!1,this._visiblePills=gt,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{var r;e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._emitFiles(t)},this._onClick=e=>{const t=this.shadowRoot.querySelector(".drop-zone");if(t&&this._rippleEl){const r=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-r.left}px`,this._rippleEl.style.top=`${e.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,r=Array.from(t.files??[]);r.length>0&&this._emitFiles(r),t.value=""},this._onPaste=e=>{var s;if(!this.isConnected||this.offsetWidth===0)return;const t=(s=e.clipboardData)==null?void 0:s.items;if(!t)return;const r=[];for(const o of t)if(o.kind==="file"){const n=o.getAsFile();n&&r.push(n)}r.length>0&&(e.preventDefault(),this._emitFiles(r))},this._onDocClick=()=>{this._moreOpen&&(this._moreOpen=!1)},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1)},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var e;(e=this.fileInput)==null||e.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen&&requestAnimationFrame(()=>this._positionDropdown())}_positionDropdown(){var h,p;const e=(h=this.shadowRoot)==null?void 0:h.querySelector(".more-wrap > button"),t=(p=this.shadowRoot)==null?void 0:p.querySelector(".more-dropdown");if(!e||!t)return;const r=e.getBoundingClientRect(),s=8,o=t.scrollHeight,n=t.offsetWidth,a=r.top,l=window.innerHeight-r.bottom;a>=o+s||a>l?(t.classList.add("above"),t.classList.remove("below"),t.style.top=`${r.top-o-s}px`):(t.classList.add("below"),t.classList.remove("above"),t.style.top=`${r.bottom+s}px`);let u=r.right-n;u=Math.max(8,Math.min(u,window.innerWidth-n-8)),t.style.left=`${u}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=480?this._visiblePills=1:e<=768?this._visiblePills=2:this._visiblePills=gt}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer)}_renderPill(e){return d`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?Z(e.brandHtml):d`<span class="pill-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${J`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${L(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `}_renderCard(e){return d`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?d`<span class="card-ico">${Z(e.brandHtml)}</span>`:d`<span class="card-ico" style=${e.iconColor?`color:${e.iconColor}`:""}>
              ${J`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${L(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `}_renderMoreCard(e){return d`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="src-card" @click=${t=>this._toggleMore(t)}>
          <span class="card-ico" style="color: var(--sfx-up-text-muted, #94a3b8)">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <circle cx="5" cy="12" r="2.5"/>
              <circle cx="12" cy="12" r="2.5"/>
              <circle cx="19" cy="12" r="2.5"/>
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
        <div class="more-dropdown">
          ${e.map(t=>d`
              <button class="more-item" @click=${r=>this._onMoreItemClick(t,r)}>
                <div class="more-item-ico">
                  ${t.brandHtml?Z(t.brandHtml):t.iconColor?d`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${L(t.icon)}</svg>`:J`<svg viewBox="0 0 24 24">${L(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>
      </div>
    `}_renderMoreDropdown(e){return d`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button class="more-pill" @click=${t=>this._toggleMore(t)}>
          <svg class="more-dots" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
          More
          <svg class="more-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="more-dropdown">
          ${e.map(t=>d`
              <button class="more-item" @click=${r=>this._onMoreItemClick(t,r)}>
                <div class="more-item-ico">
                  ${t.brandHtml?Z(t.brandHtml):t.iconColor?d`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${L(t.icon)}</svg>`:J`<svg viewBox="0 0 24 24">${L(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `)}
        </div>
      </div>
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills);return d`
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
        ${this.compact?f:d`<div class="subtitle">Drop files anywhere on this page</div>`}

        ${!this.compact&&this.sources.length>0?d`
              <div class="import-divider"><span>Or import from</span></div>
              ${this.sourcesLayout==="cards"?d`
                    <div class="sources-cards">
                      ${t.map(s=>this._renderCard(s))}
                      ${r.length>0?this._renderMoreCard(r):f}
                    </div>
                  `:d`
                    <div class="sources-grid">
                      ${t.map(s=>this._renderPill(s))}
                      ${r.length>0?this._renderMoreDropdown(r):f}
                    </div>
                  `}
            `:f}

        ${this.compact&&this.sources.length>0?d`
              <div class="sources-row">
                <span class="src-divider"></span>
                ${this.sources.map(s=>d`
                    <button
                      class="src-ico"
                      style=${s.iconColor&&!s.brandHtml?`color:${s.iconColor}`:""}
                      data-tip=${s.label}
                      aria-label=${s.label}
                      @click=${o=>{o.stopPropagation(),this._onSourceIconClick(s)}}
                    >
                      ${s.brandHtml?Z(s.brandHtml):J`<svg viewBox="0 0 24 24" class=${s.fillIcon?"fill-icon":""}>${L(s.icon)}</svg>`}
                    </button>
                  `)}
              </div>
            `:f}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept||f}
          @change=${this._onFileChange}
        />
      </div>
    `}};Ye.styles=C`
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
      padding: 14px 0;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 0;
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
      border: 1.5px dashed var(--sfx-up-border, #e2e8f0);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-border-light, #f1f5f9);
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

    .more-dots {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-secondary, #475569);
      fill: currentColor;
      stroke: none;
    }

    .more-wrap.open .more-dots,
    .more-pill:hover .more-dots {
      color: currentColor;
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
  `;let $=Ye;O([b({type:Boolean,reflect:!0})],$.prototype,"compact");O([b({type:Boolean,attribute:"external-drag-over"})],$.prototype,"externalDragOver");O([b({type:String})],$.prototype,"accept");O([b({type:Array})],$.prototype,"sources");O([b({type:String,attribute:"sources-layout"})],$.prototype,"sourcesLayout");O([v()],$.prototype,"_dragOver");O([v()],$.prototype,"_moreOpen");O([v()],$.prototype,"_visiblePills");O([St(".ripple")],$.prototype,"_rippleEl");O([St('input[type="file"]')],$.prototype,"fileInput");const Ve=class Ve extends _{render(){return d`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};Ve.styles=C`
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
  `;let Le=Ve;var Ur=Object.defineProperty,Dr=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Ur(e,t,s),s};const Xe=class Xe extends _{constructor(){super(...arguments),this.files=[]}render(){return d`
      <div class="grid">
        ${this.files.map((e,t)=>d`<sfx-file-item .file=${e} style="--tile-index:${t}"></sfx-file-item>`)}
      </div>
    `}};Xe.styles=C`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    :host::-webkit-scrollbar {
      width: 6px;
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
      gap: 12px;
      padding: 2px;
      padding-bottom: 16px;
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }
  `;let we=Xe;Dr([b({attribute:!1})],we.prototype,"files");var Tr=Object.defineProperty,Or=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Tr(e,t,s),s};const We=class We extends _{_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_retry(){this.dispatchEvent(new CustomEvent("file-retry",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_preview(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("file-preview",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}render(){const e=this.file;if(!e)return f;const t=ur(e),r=e.status==="complete",s=e.status==="uploading",o=e.status==="error"||e.status==="failed",n=e.status==="rejected",a=fr(e.name),l=["tile",r?"done":"",s?"uploading":"",n?"rejected":""].filter(Boolean).join(" ");return d`
      <div class=${l} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?d`<div class="preview-bg" style="background-image:url(${e.previewUrl})"></div>`:d`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <div class="type-icon-inner ${t}">
                    ${this._renderTypeIcon(t)}
                    ${a?d`<div class="ext-label">${a}</div>`:f}
                  </div>
                </div>
              `}

          <!-- Preview button -->
          ${!r&&!s&&!o&&e.status!=="rejected"?d`
                <button class="preview-btn" @click=${this._preview} aria-label="Preview file">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Preview
                </button>
              `:f}

          <!-- Spinner overlay -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
          </div>

          <!-- Done badge -->
          ${r?d`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:f}

          <!-- Progress bar -->
          ${e.status==="uploading"?d`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress,100)/100})"></div>
                </div>
              `:f}

          <!-- Error / rejected badge -->
          ${(o||n)&&e.error?d`<div class="error-badge" title=${e.error}>${e.error}</div>`:f}
        </div>

        <!-- Action buttons -->
        <div class="actions">
          ${o?d`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:f}
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
          <div class="name" title=${e.name}>${e.name}</div>
          <div class="meta">${e.size?me(e.size):""}${e.type?`${e.size?" · ":""}${e.type}`:""}</div>
        </div>
      </div>
    `}_renderTypeIcon(e){switch(e){case"pdf":return d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;case"doc":return d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;case"vid":return d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;case"zip":return d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;default:return d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`}}};We.styles=C`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: none;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
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
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background: var(--sfx-up-border-light, #f3f4f6);
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.4s ease;
    }

    .tile:hover .preview-bg {
      transform: scale(1.03);
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

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
    }

    .name {
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
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
      bottom: 28px;
      left: 6px;
      right: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      background: var(--sfx-up-error, #dc2626);
      border-radius: 4px;
      padding: 3px 6px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
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
  `;let _e=We;Or([b({attribute:!1})],_e.prototype,"file");const he=C`
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
`,ue=C`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Rr=Object.defineProperty,Ee=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Rr(e,t,s),s};const vt=7,Ke=class Ke extends _{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done"}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,vt),t=this.thumbnails.length-vt;return d`
      <div class="card" role="status" aria-live="polite">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div class="title">Uploaded successfully!</div>
        <div class="subtitle">All files are ready for use</div>

        ${e.length>0?d`
              <div class="thumbs">
                ${e.map(r=>d`<img class="thumb" src=${r} alt="" />`)}
                ${t>0?d`<div class="thumb-more">+${t}</div>`:f}
              </div>
            `:f}

        <div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${me(this.totalSize)} uploaded</div>

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Ke.styles=[he,ue,C`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
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
      background: var(--sfx-up-primary-bg, #eff6ff);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 18px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.12));
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
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
  `];let q=Ke;Ee([b({type:Number})],q.prototype,"fileCount");Ee([b({type:Number})],q.prototype,"totalSize");Ee([b({type:Array})],q.prototype,"thumbnails");Ee([b({type:String})],q.prototype,"primaryLabel");var Lr=Object.defineProperty,V=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Lr(e,t,s),s};const Je=class Je extends _{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return d`
      ${e?d`
            <div class="progress-row">
              <div class="progress-track" role="progressbar" aria-valuenow=${Math.round(this.uploadProgress)} aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
                <div class="progress-fill" style="width:${this.uploadProgress}%"></div>
              </div>
              <span class="progress-label">${this.completedCount}/${this.fileCount} files</span>
            </div>
          `:f}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?d`
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
              `:f}
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
          ${this.failedCount>0?d`
                <button class="btn-retry" @click=${this._retryAll}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  Retry all (${this.failedCount})
                </button>
              `:f}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",r=["btn-primary",t?"done-state":""].filter(Boolean).join(" ");return d`
      <button
        class=${r}
        @click=${this._upload}
        ?disabled=${e}
      >
        ${e?d`<span class="btn-spin"></span> Uploading\u2026`:t?d`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Done!
              `:d`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                </svg>
                Upload
              `}
      </button>
    `}};Je.styles=[he,ue,C`
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
  `];let T=Je;V([b({type:String})],T.prototype,"uploadState");V([b({type:Number})],T.prototype,"fileCount");V([b({type:Number})],T.prototype,"totalSize");V([b({type:Number})],T.prototype,"failedCount");V([b({type:Boolean})],T.prototype,"showFillMetadata");V([b({type:Number})],T.prototype,"completedCount");V([b({type:Number})],T.prototype,"uploadProgress");const zr='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function He(i,e){return t=>{if(t.key!=="Tab")return;const r=i();if(!r)return;const s=r.querySelector(e);if(!s)return;const o=Array.from(s.querySelectorAll(zr));if(o.length===0)return;const n=o[0],a=o[o.length-1],l=r.activeElement;t.shiftKey?(l===n||!s.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!s.contains(l))&&(t.preventDefault(),n.focus())}}var Ir=Object.defineProperty,Ne=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Ir(e,t,s),s};const Ze=class Ze extends _{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=He(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),r=t[t.length-1];if(r){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");s&&(s.placeholder=r)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let t=this._name.trim();if(!t)try{const r=new URL(e).pathname.split("/");t=r[r.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return d`
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
            ${this._error?d`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};Ze.styles=[he,ue,C`
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

  `];let Q=Ze;Ne([v()],Q.prototype,"_url");Ne([v()],Q.prototype,"_name");Ne([v()],Q.prototype,"_error");var Mr=Object.defineProperty,Se=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Mr(e,t,s),s};const Ge=class Ge extends _{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=He(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var s,o;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("video"),t=(o=this.shadowRoot)==null?void 0:o.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return d`
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
            ${this._error?d`<div class="error">${this._error}</div>`:this._captured?d`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `:d`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Ge.styles=[he,ue,C`
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
  `];let Y=Ge;Se([v()],Y.prototype,"_stream");Se([v()],Y.prototype,"_error");Se([v()],Y.prototype,"_captured");Se([v()],Y.prototype,"_previewUrl");var jr=Object.defineProperty,fe=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&jr(e,t,s),s};const Qe=class Qe extends _{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=He(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const r=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:r}),this._recorder.ondataavailable=s=>{s.data.size>0&&this._chunks.push(s.data)},this._recorder.onstop=()=>{var o;const s=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=s,this._previewUrl=URL.createObjectURL(s),(o=this._stream)==null||o.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return d`
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
            ${this._error?d`<div class="error">${this._error}</div>`:this._recordedBlob?d`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `:this._recording?d`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `:d`
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
    `}};Qe.styles=[he,ue,C`
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
  `];let M=Qe;fe([v()],M.prototype,"_stream");fe([v()],M.prototype,"_recording");fe([v()],M.prototype,"_error");fe([v()],M.prototype,"_recordedBlob");fe([v()],M.prototype,"_previewUrl");var Fr=Object.defineProperty,U=(i,e,t,r)=>{for(var s=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=n(e,t,s)||s);return s&&Fr(e,t,s),s};const xt=new Set(["unsplash"]);var S;const A=(S=class extends _{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fullscreenPreviewUrl=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._bodyDragCounter=0,this._engine=null,this._cachedSources=ie,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._onFilesSelected=e=>{this._processIncomingFiles(e.detail.files)},this._onSourceClick=async e=>{var o,n;const t=e.detail.source,r=this._mergedSources.find(a=>a.id===t);if(r!=null&&r.onActivate){try{r.onActivate(this)}catch(a){console.error(`[sfx-uploader] onActivate for custom source "${t}" threw:`,a)}return}if(t==="device"){const a=this.shadowRoot.querySelector("sfx-drop-zone");a==null||a.browse();return}if(t==="url"){this._showUrlDialog=!0;return}if(t==="camera"){this._showCameraDialog=!0;return}if(t==="screen-cast"){this._showScreenCastDialog=!0;return}if((((n=(o=this.config)==null?void 0:o.connectors)==null?void 0:n.providers)??[]).includes(t)){if(xt.has(t)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:l}=await w(async()=>{const{SfxSearchProviderBrowser:c}=await import("./search-provider-browser-AYoSLxqq.js");return{SfxSearchProviderBrowser:c}},[]);customElements.define("sfx-search-provider-browser",l)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:l}=await w(async()=>{const{SfxProviderBrowser:c}=await import("./provider-browser-4zH2b8RV.js");return{SfxProviderBrowser:c}},[]);customElements.define("sfx-provider-browser",l)}this._activeConnector=t}},this._onUrlSubmit=e=>{var u,h,p;this._showUrlDialog=!1;const{url:t,name:r}=e.detail,s=(u=this.config)==null?void 0:u.callbacks,o=vr(r),n=o.startsWith("image/"),a=this._store.getState(),l=Oe({name:r,size:0,type:o},a.restrictions,a.files);if(l){const g={id:W(),status:"rejected",file:null,remoteUrl:t,name:r,size:0,type:o,previewUrl:null,progress:0,speed:0,bytesUploaded:0,error:l,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};X(this._store,g),this._dispatchPublic(m.FILE_REJECTED,{file:g,reason:l}),(h=s==null?void 0:s.onFileRejected)==null||h.call(s,g,l);return}const c={id:W(),status:"idle",file:null,remoteUrl:t,name:r,size:0,type:o,previewUrl:n?t:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};X(this._store,c),this._dispatchPublic(m.FILE_ADDED,{file:c}),(p=s==null?void 0:s.onFileAdded)==null||p.call(s,c),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var r,s,o;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(m.FILE_PREVIEW,{file:t}),(o=(s=(r=this.config)==null?void 0:r.callbacks)==null?void 0:s.onFilePreview)==null||o.call(s,t))},this._onFillMetadata=()=>{var t,r,s;const e=[...this._store.getState().files.values()].filter(o=>S._MODIFIABLE_STATUSES.has(o.status));this._dispatchPublic(m.FILL_METADATA,{files:e}),(s=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onFillMetadata)==null||s.call(r,e)},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var r,s,o;const e=(r=this.config)==null?void 0:r.callbacks;(s=this._engine)==null||s.cancelAll();const t=[...this._store.getState().files.values()];for(const n of t)n.previewUrl&&URL.revokeObjectURL(n.previewUrl),this._dispatchPublic(m.FILE_REMOVED,{file:n}),(o=e==null?void 0:e.onFileRemoved)==null||o.call(e,n);for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._dimCache.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{const e=this.shadowRoot.querySelector("sfx-drop-zone");e==null||e.browse()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onConnectorFilesSelected=e=>{var r,s,o;const t=(r=this.config)==null?void 0:r.callbacks;for(const n of e.detail.files){const a=this._store.getState(),l=Oe({name:n.name,size:n.size,type:n.mimeType},a.restrictions,a.files);if(l){const u={id:W(),status:"rejected",file:null,remoteUrl:null,name:n.name,size:n.size,type:n.mimeType,previewUrl:n.thumbnail,progress:0,speed:0,bytesUploaded:0,error:l,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:n};X(this._store,u),this._dispatchPublic(m.FILE_REJECTED,{file:u,reason:l}),(s=t==null?void 0:t.onFileRejected)==null||s.call(t,u,l);continue}const c={id:W(),status:"idle",file:null,remoteUrl:null,name:n.name,size:n.size,type:n.mimeType,previewUrl:n.thumbnail,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:n};X(this._store,c),this._dispatchPublic(m.FILE_ADDED,{file:c}),(o=t==null?void 0:t.onFileAdded)==null||o.call(t,c)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t;this._dispatchPublic(m.COMPLETE_ACTION,{}),((e=this.config)==null?void 0:e.mode)==="modal"?this.close():((t=this.config)==null?void 0:t.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(m.CANCEL,{})},this._onModalDismiss=()=>{var e,t,r;(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||r.call(t),this._dispatchPublic(m.CANCEL,{}),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyDragCounter++,this._bodyDragCounter===1&&(this._bodyDragOver=!0)},this._onBodyDragOver=e=>{e.preventDefault()},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyDragCounter--,this._bodyDragCounter<=0&&(this._bodyDragCounter=0,this._bodyDragOver=!1)},this._onBodyDrop=e=>{var r;e.preventDefault(),this._bodyDragCounter=0,this._bodyDragOver=!1;const t=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);t.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t}}))},this._onKeyDown=e=>{var t,r;if(e.key==="Escape"){if(this._fullscreenPreviewUrl){this._onFsClose();return}this._isOpen&&((t=this.config)==null?void 0:t.mode)==="modal"&&(((r=this.config)==null?void 0:r.headerButton)??"close")!=="none"&&this._onModalDismiss()}},this._dimCache=new Map,this._onFsToggleZoom=e=>{e==null||e.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,r=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(!this._fullscreenZoomed||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],r=t.clientX-this._fsDragStartX,s=t.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(s)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+s,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=tr(),this._storeCtrl=new rr(this,this._store)}open(){var e,t,r;this._isOpen||(this._isOpen=!0,(r=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onOpen)==null||r.call(t),this._dispatchPublic(m.OPEN,{}),this.requestUpdate())}close(){var e,t,r,s;this._isOpen&&(this._isOpen=!1,((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(s=(r=(t=this.config)==null?void 0:t.callbacks)==null?void 0:r.onClose)==null||s.call(r),this._dispatchPublic(m.CLOSE,{}),this.requestUpdate())}upload(){var s,o,n,a,l;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(c=>c.status==="idle"||c.status==="queued");if((o=(s=this.config)==null?void 0:s.callbacks)!=null&&o.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(m.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(m.UPLOAD_STARTED,{files:e}),(l=(a=(n=this.config)==null?void 0:n.callbacks)==null?void 0:a.onUploadStarted)==null||l.call(a,e),this._engine.uploadAll())}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const r=this._store.getState().files,s=new Map(r);let o=!1;for(const n of e){const a=r.get(n.id);a&&(s.set(n.id,{...a,...n}),o=!0)}o&&this._store.setState({files:s})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,r){const s=this._store.getState().files,o=s.get(e);if(!o||!S._MODIFIABLE_STATUSES.has(o.status))return;const n=new Map(s);n.set(e,{...o,meta:t!=null?{...o.meta,...t}:o.meta,tags:r??o.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,r=new Map(t);let s=!1;for(const{fileId:o,meta:n,tags:a}of e){const l=t.get(o);!l||!S._MODIFIABLE_STATUSES.has(l.status)||(r.set(o,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),s=!0)}s&&this._store.setState({files:r})}updated(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._store.getState().files.get(this._previewFileId);t?this._getImageDimensions(t).then(r=>{this._previewDims=r?`${r.w} × ${r.h}`:"—"}):this._previewDims="—"}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange())}disconnectedCallback(){var e,t;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null;for(const r of this._rejectedTimers.values())clearTimeout(r);this._rejectedTimers.clear();for(const r of this._store.getState().files.values())r.previewUrl&&URL.revokeObjectURL(r.previewUrl);(t=this._engine)==null||t.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.targetFolder&&(t.targetFolder=e.targetFolder),e.restrictions&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions}),e.concurrency!=null){const r=this._store.getState().queueConfig;t.queueConfig={...r,concurrency:e.concurrency}}if(e.autoProceed!=null){const r=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...r,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var s,o;const t=e.auth;if(t.mode==="sass-key"||t.mode==="session"){this._apiBase=Be(t.container),this._authHeaders=Te(t),this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders});return}const r=++this._authResolveId;try{const n=await pr(t);if(r!==this._authResolveId)return;this._apiBase=n.apiBase,this._authHeaders=n.headers,this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders})}catch(n){if(r!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",n)}}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new cr(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders}),this._engine.start())}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_onStoreChange(){var s,o,n,a,l,c,u;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;const r=(s=this.config)==null?void 0:s.callbacks;for(const[h,p]of e.files){const g=t.files.get(h);if(g){if(g.status!==p.status)switch(p.status){case"uploading":break;case"complete":p.response&&(this._dispatchPublic(m.UPLOAD_COMPLETE,{file:p,response:p.response}),(o=r==null?void 0:r.onUploadComplete)==null||o.call(r,p,p.response));break;case"error":case"failed":{const x=new Error(p.error??"Upload failed");this._dispatchPublic(m.UPLOAD_ERROR,{file:p,error:x}),(n=r==null?void 0:r.onUploadError)==null||n.call(r,p,x);break}case"retrying":this._dispatchPublic(m.UPLOAD_RETRY,{file:p,attempt:p.retryCount}),(a=r==null?void 0:r.onUploadRetry)==null||a.call(r,p,p.retryCount);break}p.status==="uploading"&&g.progress!==p.progress&&(this._dispatchPublic(m.UPLOAD_PROGRESS,{file:p,progress:p.progress,speed:p.speed}),(l=r==null?void 0:r.onUploadProgress)==null||l.call(r,p,p.progress,p.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const h=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:0;this._dispatchPublic(m.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:h}),(c=r==null?void 0:r.onTotalProgress)==null||c.call(r,e.totalProgress,e.totalSpeed,h)}if(t.isUploading&&!e.isUploading){const h=[...e.files.values()];if(!h.some(g=>g.status==="cancelled")){const g=h.filter(y=>y.status==="complete"),x=h.filter(y=>y.status==="failed"||y.status==="error");this._dispatchPublic(m.ALL_COMPLETE,{successful:g,failed:x}),(u=r==null?void 0:r.onAllComplete)==null||u.call(r,g,x)}}}get _mergedSources(){var l;const e=(l=this.config)==null?void 0:l.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=ie,this._cachedSources;const t=e.providers.length>0?yr(e.providers):[],r=e.customSources??[],s=ie.filter(c=>c.id==="device"||c.id==="url"),o=ie.filter(c=>c.id!=="device"&&c.id!=="url"),n=new Set,a=[];for(const c of[...s,...t,...o,...r])if(!n.has(c.id)){if(S._RESERVED_IDS.has(c.id)&&c.onActivate){console.warn(`[sfx-uploader] Custom source id "${c.id}" conflicts with a built-in source and was skipped.`);continue}n.add(c.id),a.push(c)}return this._cachedSources=a,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return t.every(s=>r.has(s.status))&&t.some(s=>s.status==="complete")?"complete":"ready"}_processIncomingFiles(e){var r,s,o,n;const t=(r=this.config)==null?void 0:r.callbacks;for(const a of e){const l=this._store.getState(),c=mr(a,l.restrictions,l.files);if(c){const p={id:W(),status:"rejected",file:a,remoteUrl:null,name:a.name,size:a.size,type:a.type,previewUrl:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};X(this._store,p),this._dispatchPublic(m.FILE_REJECTED,{file:p,reason:c}),(s=t==null?void 0:t.onFileRejected)==null||s.call(t,p,c);const g=(o=this.config)==null?void 0:o.rejectedFileAutoRemoveDelay,x=g===!1||g===0?0:g??4e3;if(x>0){const y=p.id,k=setTimeout(()=>{this._rejectedTimers.delete(y);const E=this._store.getState().files.get(y);E&&E.status==="rejected"&&ht(this._store,y)},x);this._rejectedTimers.set(y,k)}continue}let u=null;a.type.startsWith("image/")&&(u=URL.createObjectURL(a));const h={id:W(),status:"idle",file:a,remoteUrl:null,name:a.name,size:a.size,type:a.type,previewUrl:u,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null};X(this._store,h),this._dispatchPublic(m.FILE_ADDED,{file:h}),(n=t==null?void 0:t.onFileAdded)==null||n.call(t,h),a.type.startsWith("video/")&&xr(a).then(p=>{if(!p)return;const g=this._store.getState(),x=g.files.get(h.id);if(x){const y=new Map(g.files);y.set(h.id,{...x,previewUrl:p}),this._store.setState({files:y})}else URL.revokeObjectURL(p)})}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(e){var s,o,n,a;const t=this._store.getState().files.get(e);if(!t)return;const r={...t};t.previewUrl&&URL.revokeObjectURL(t.previewUrl),(t.status==="uploading"||t.status==="queued"||t.status==="retrying")&&((s=this._engine)==null||s.cancelFile(e)),ht(this._store,e),this._dimCache.delete(e),this._dispatchPublic(m.FILE_REMOVED,{file:r}),(a=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileRemoved)==null||a.call(n,r)}render(){var t;return(((t=this.config)==null?void 0:t.mode)??"modal")==="modal"?this._isOpen?d`
        <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
          <div class="modal-card">
            ${this._renderHeader()}
            ${this._renderBody()}
          </div>
        </div>
      `:f:d`
      <div class="inline">
        ${this._renderHeader()}
        ${this._renderBody()}
      </div>
    `}_renderHeader(){var a,l;const e=((a=this.config)==null?void 0:a.mode)??"modal",t=((l=this.config)==null?void 0:l.headerButton)??(e==="modal"?"close":"none"),r=this._phase==="complete",s=e==="modal"?this._onModalDismiss:this._onInlineDismiss,o=t==="back"?d`<button class="header-btn header-btn-back" aria-label="Back to Asset Picker" @click=${s}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>`:f,n=t==="close"?d`<button class="header-btn header-btn-close" aria-label="Close" @click=${s}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>`:f;return d`
      <div class="header">
        ${o}
        <div class="header-icon ${r?"header-icon-done":""}">
          ${r?d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>`:d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>`}
        </div>
        <div class="header-title">${r?"Upload Complete":"Upload Files"}</div>
        ${n}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const r=new Image;r.onload=()=>{const s={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(e.id,s),t(s)},r.onerror=()=>{this._dimCache.set(e.id,null),t(null)},r.src=e.previewUrl}):Promise.resolve(null)}_renderPreviewLayout(e){var o;if(e.length===0)return f;const t=e.find(n=>n.id===this._previewFileId)??e[0],r=((o=t.name.split(".").pop())==null?void 0:o.toUpperCase())||"",s=new Date(t.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return d`
      <div class="preview-topbar">
        <div class="asset-count" style="padding:0">${e.length} ${e.length===1?"asset":"assets"}</div>
        <div class="preview-panel-header">
          <button @click=${()=>this._onFileRemoveById(t.id)} title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <button @click=${()=>{t.previewUrl&&(this._fullscreenPreviewUrl=t.previewUrl,this._fullscreenZoomed=!1)}} title="Fullscreen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
          <button @click=${()=>{this._previewFileId=null}} title="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div class="preview-layout">
        <div class="file-grid-side">
          <sfx-file-list .files=${e}></sfx-file-list>
        </div>
        <div class="preview-panel">
          ${t.previewUrl?d`
                <div class="preview-img-wrap">
                  <img class="preview-image" src=${t.previewUrl} alt=${t.name} />
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t)===0} @click=${()=>this._navigatePreview(e,-1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t)===e.length-1} @click=${()=>this._navigatePreview(e,1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `:f}
          <div class="preview-meta-list">
            <div class="preview-meta-row">
              <span class="preview-meta-label">Type</span>
              <span class="preview-meta-value">${r}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Size</span>
              <span class="preview-meta-value">${me(t.size)}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Dimensions</span>
              <span class="preview-meta-value">${this._previewDims}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Name</span>
              <span class="preview-meta-value">${t.name}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Added</span>
              <span class="preview-meta-value">${s}</span>
            </div>
          </div>
        </div>
      </div>
    `}_navigatePreview(e,t){const s=e.findIndex(o=>o.id===this._previewFileId)+t;s>=0&&s<e.length&&(this._previewFileId=e[s].id)}_onFileRemoveById(e){this._removeFile(e);const t=[...this._store.getState().files.values()];t.length===0?this._previewFileId=null:this._previewFileId===e&&(this._previewFileId=t[0].id)}_renderBody(){var n,a,l;const e=this._storeCtrl.state,t=[...e.files.values()],r=this._phase,s=br(e.restrictions),o=t.length>0;return d`
      <div class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-retry=${this._onFileRetry}
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
          class="body ${o?"has-files":""} ${this._bodyDragOver?"body-drag-over":""}"
          @dragenter=${o?this._onBodyDragEnter:f}
          @dragover=${o?this._onBodyDragOver:f}
          @dragleave=${o?this._onBodyDragLeave:f}
          @drop=${o?this._onBodyDrop:f}
        >
          ${r==="complete"?d`
                  <sfx-success-card
                    .fileCount=${t.filter(c=>c.status==="complete").length}
                    .totalSize=${t.filter(c=>c.status==="complete").reduce((c,u)=>c+(u.size||0),0)}
                    .thumbnails=${t.filter(c=>c.status==="complete"&&c.previewUrl).map(c=>c.previewUrl)}
                  ></sfx-success-card>
                `:d`
                  <sfx-drop-zone
                    .compact=${o}
                    .externalDragOver=${this._bodyDragOver}
                    .accept=${s}
                    .sources=${this._mergedSources}
                    .sourcesLayout=${((n=this.config)==null?void 0:n.sourcesLayout)??"pills"}
                  ></sfx-drop-zone>

                  ${o?this._previewFileId?this._renderPreviewLayout(t):d`
                          <div class="asset-count">${t.length} ${t.length===1?"file":"files"} · ${me(t.reduce((c,u)=>c+(u.size||0),0))}</div>
                          <sfx-file-list .files=${t}></sfx-file-list>
                        `:f}
                `}
        </div>

        ${o&&r!=="complete"?d`
              <sfx-actions-bar
                .uploadState=${r==="uploading"?"uploading":"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((c,u)=>c+(u.size||0),0)}
                .failedCount=${t.filter(c=>c.status==="failed"||c.status==="error").length}
                .completedCount=${t.filter(c=>c.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!((a=this.config)!=null&&a.showFillMetadata)}
              ></sfx-actions-bar>
            `:f}

        ${this._showUrlDialog?d`<sfx-url-dialog></sfx-url-dialog>`:f}
        ${this._showCameraDialog?d`<sfx-camera-dialog></sfx-camera-dialog>`:f}
        ${this._showScreenCastDialog?d`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:f}
        ${this._activeConnector&&((l=this.config)!=null&&l.connectors)?d`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${xt.has(this._activeConnector)?d`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `:d`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:f}

        ${this._fullscreenPreviewUrl?d`
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
                <div class="fs-toolbar" @click=${c=>c.stopPropagation()}>
                  <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
                    ${this._fullscreenZoomed?d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:d`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
                  </button>
                  <button class="fs-btn" @click=${this._onFsClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <img
                  class="fs-img"
                  src=${this._fullscreenPreviewUrl}
                  alt=""
                  style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""}
                  draggable="false"
                />
                <div class="fs-filename">${this._getFullscreenFilename()}</div>
              </div>
            `:f}
      </div>
    `}_getFullscreenFilename(){if(!this._previewFileId)return"";const e=this._store.getState().files.get(this._previewFileId);return(e==null?void 0:e.name)??""}},S.styles=C`
    :host {
      display: block;
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
      --sfx-up-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
      --sfx-up-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
      --sfx-up-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.06);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
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
      max-width: 912px;
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
      outline: 2px dashed var(--sfx-up-primary, #2563eb);
      outline-offset: -4px;
      border-radius: 8px;
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      animation: bodyReveal 0.35s ease both;
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
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 24px 0 8px;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: var(--sfx-up-radius, 16px);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
      transition: box-shadow 0.25s ease;
      animation: inlineIn 0.25s ease;
    }

    .inline:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03);
    }

    /* --- Preview split layout --- */
    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 54;
      min-width: 0;
      overflow-y: auto;
      padding-right: 12px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .preview-layout .file-grid-side::-webkit-scrollbar { width: 5px; }
    .preview-layout .file-grid-side::-webkit-scrollbar-track { background: transparent; }
    .preview-layout .file-grid-side::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 12px 0;
    }

    .preview-panel {
      flex: 46;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0 20px 20px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .preview-panel::-webkit-scrollbar { width: 5px; }
    .preview-panel::-webkit-scrollbar-track { background: transparent; }
    .preview-panel::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 0;
      flex-shrink: 0;
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
      color: var(--sfx-up-text-muted, #9ca3af);
      transition: background 0.15s, color 0.15s;
      padding: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 18px;
      height: 18px;
    }

    .preview-img-wrap {
      position: relative;
      flex-shrink: 0;
    }

    .preview-image {
      width: 100%;
      height: 320px;
      border-radius: 6px;
      object-fit: contain;
      display: block;
      border: 1px solid var(--sfx-up-border, #e8eaed);
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
      margin-top: 16px;
      flex-shrink: 0;
      gap: 2px;
    }

    .preview-meta-row {
      display: flex;
      align-items: baseline;
      padding: 7px 0;
    }

    .preview-meta-label {
      width: 110px;
      flex-shrink: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-meta-value {
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #1e293b));
      word-break: break-all;
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
      .modal-card { border-radius: 12px; max-height: 92vh; }
      .header { padding: 12px 16px; }
      .header-icon { width: 28px; height: 28px; margin-right: 10px; }
      .header-icon svg { width: 14px; height: 14px; }
      .header-title { font-size: 14px; }
      .body { padding: 16px; }
      .body.has-files { padding: 16px; padding-bottom: 12px; }
      .asset-count { padding: 12px 0 6px; font-size: 12px; }

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

      .inline { border-radius: 12px; }

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
      .body.has-files { padding: 12px; padding-bottom: 8px; }
      .asset-count { padding: 8px 0 4px; font-size: 11px; }

      .preview-layout .file-grid-side { max-height: 100px; }
      .preview-panel { padding: 0 0 12px; }
      .preview-meta-row { padding: 6px 0; }
      .preview-meta-label { width: 90px; font-size: 12px; }
      .preview-meta-value { font-size: 12px; }

      .inline { max-height: 100vh; border-radius: 8px; box-shadow: none; }

      .connector-modal-backdrop { padding: 0; }
      .connector-modal {
        border-radius: 0;
        height: 100vh;
        max-height: none;
        min-height: auto;
      }
    }
  `,S._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),S._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),S);U([b({attribute:!1})],A.prototype,"config");U([v()],A.prototype,"_isOpen");U([v()],A.prototype,"_activeConnector");U([v()],A.prototype,"_showUrlDialog");U([v()],A.prototype,"_showCameraDialog");U([v()],A.prototype,"_showScreenCastDialog");U([v()],A.prototype,"_previewFileId");U([v()],A.prototype,"_previewDims");U([v()],A.prototype,"_fullscreenPreviewUrl");U([v()],A.prototype,"_fullscreenZoomed");U([v()],A.prototype,"_bodyDragOver");let Br=A;const D=(i,e)=>{typeof customElements<"u"&&!customElements.get(i)&&customElements.define(i,e)};D("sfx-uploader",Br);D("sfx-drop-zone",$);D("sfx-import-divider",Le);D("sfx-source-pills",ye);D("sfx-file-list",we);D("sfx-file-item",_e);D("sfx-success-card",q);D("sfx-actions-bar",T);D("sfx-url-dialog",Q);D("sfx-camera-dialog",Y);D("sfx-screen-cast-dialog",M);const Hr=[{pattern:"/",load:()=>w(()=>import("./landing-NkxuazOf.js"),__vite__mapDeps([0,1])).then(i=>i.default)},{pattern:"/docs/getting-started",load:()=>w(()=>import("./getting-started-fZaaCZVJ.js"),__vite__mapDeps([2,3])).then(i=>i.default)},{pattern:"/docs/configuration",load:()=>w(()=>import("./configuration-D8bJS1AY.js"),__vite__mapDeps([4,3])).then(i=>i.default)},{pattern:"/docs/api",load:()=>w(()=>import("./api-DA_tOMfL.js"),__vite__mapDeps([5,3])).then(i=>i.default)},{pattern:"/docs/theming",load:()=>w(()=>import("./theming-C0CqbLOs.js"),__vite__mapDeps([6,3])).then(i=>i.default)},{pattern:"/docs/types",load:()=>w(()=>import("./types-CcGaxag1.js"),__vite__mapDeps([7,3])).then(i=>i.default)},{pattern:"/examples/basic",load:()=>w(()=>import("./basic-BLndAhoH.js"),__vite__mapDeps([8,1])).then(i=>i.default)},{pattern:"/examples/auto-upload",load:()=>w(()=>import("./auto-upload-BvlR7Kcu.js"),__vite__mapDeps([9,1])).then(i=>i.default)},{pattern:"/examples/restrictions",load:()=>w(()=>import("./restrictions-BB77hxnc.js"),__vite__mapDeps([10,1,11])).then(i=>i.default)},{pattern:"/examples/target-folder",load:()=>w(()=>import("./target-folder-D2TGp4S-.js"),__vite__mapDeps([12,1])).then(i=>i.default)},{pattern:"/examples/concurrency",load:()=>w(()=>import("./concurrency-2lj5qWMI.js"),__vite__mapDeps([13,1,11])).then(i=>i.default)},{pattern:"/examples/events",load:()=>w(()=>import("./events-C8qdlvW0.js"),__vite__mapDeps([14,1])).then(i=>i.default)},{pattern:"/examples/inline",load:()=>w(()=>import("./inline-C0GOF3Yn.js"),__vite__mapDeps([15,1])).then(i=>i.default)},{pattern:"/examples/sources-layout",load:()=>w(()=>import("./sources-layout-B7B2kEaD.js"),__vite__mapDeps([16,1])).then(i=>i.default)},{pattern:"/examples/react-wrapper",load:()=>w(()=>import("./react-wrapper-DqFoKQCy.js"),__vite__mapDeps([17,3])).then(i=>i.default)}];let se=null,mt=0;function Nr(i){const e=document.getElementById("content"),t=document.getElementById("sidebar"),r=document.getElementById("sidebar-docs"),s=document.getElementById("sidebar-examples"),o=document.querySelectorAll(".topbar-nav-link");async function n(){const a=location.hash.slice(1)||"/",l=++mt;se!=null&&se.destroy&&se.destroy();const c=Hr.find(k=>k.pattern===a);if(!c){location.hash="#/";return}const u=a.startsWith("/docs/"),h=a.startsWith("/examples/"),p=u||h,g=a==="/";t.classList.toggle("hidden",!p),document.body.classList.toggle("has-sidebar",p),document.body.classList.toggle("is-home",g),r.classList.toggle("hidden",!u),s.classList.toggle("hidden",!h),t.querySelectorAll(".sidebar-link").forEach(k=>{k.classList.toggle("active",k.getAttribute("data-route")===a)});const x=u?"docs":h?"examples":"home";o.forEach(k=>{k.classList.toggle("active",k.getAttribute("data-section")===x)}),t.classList.remove("mobile-open"),window.scrollTo(0,0);const y=await c.load();l===mt&&(se=y,e.innerHTML=y.render(),y.init&&y.init(i))}window.addEventListener("hashchange",n),n()}const Pt="sfx-uploader-demo-auth",ke={container:"fbmjmuoeb",securityTemplateId:"SECU_A850ED0F0E254CB8A3AD3E1297CF204E"};function Ut(){try{const i=localStorage.getItem(Pt);if(i)return{...ke,...JSON.parse(i)}}catch{}return{...ke}}function qr(i){localStorage.setItem(Pt,JSON.stringify(i))}function ts(i={}){const{container:e,securityTemplateId:t}=Ut();return{auth:{mode:"security-template",container:e,securityTemplateId:t},autoProceed:!1,connectors:{companionUrl:"https://companion.scaleflex.com",providers:["google-drive","dropbox","box","onedrive"]},...i}}function Yr(){const i=document.getElementById("auth-btn"),e=document.getElementById("auth-popover"),t=document.getElementById("auth-container"),r=document.getElementById("auth-sec-template"),s=document.getElementById("auth-save"),o=Ut();t.value=o.container,r.value=o.securityTemplateId,i.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("hidden")}),s.addEventListener("click",()=>{qr({container:t.value.trim()||ke.container,securityTemplateId:r.value.trim()||ke.securityTemplateId}),e.classList.add("hidden")}),document.addEventListener("click",n=>{!e.contains(n.target)&&!i.contains(n.target)&&e.classList.add("hidden")})}Yr();const Vr=document.getElementById("uploader");Nr(Vr);var yt;(yt=document.getElementById("sidebar-toggle"))==null||yt.addEventListener("click",()=>{var i;(i=document.getElementById("sidebar"))==null||i.classList.toggle("mobile-open")});export{f as A,C as a,ts as b,d as c,Jr as d,Zr as e,Fe as f,yr as g,Gr as h,_ as i,es as l,b as n,Z as o,v as r,Qr as s};
