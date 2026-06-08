"use strict";const d=require("lit"),y=require("lit/decorators.js"),Kt=require("lit/directives/repeat.js"),Yt=require("lit/directive.js"),xe=require("lit/directives/unsafe-svg.js"),Di=require("lit/directives/unsafe-html.js"),jo=require("lit/directives/class-map.js"),A=r=>typeof r=="string",qe=()=>{let r,e;const t=new Promise((i,o)=>{r=i,e=o});return t.resolve=r,t.reject=e,t},Mi=r=>r==null?"":String(r),Do=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},Mo=/###/g,Bi=r=>r&&r.includes("###")?r.replace(Mo,"."):r,Ni=r=>!r||A(r),We=(r,e,t)=>{const i=A(e)?e.split("."):e;let o=0;for(;o<i.length-1;){if(Ni(r))return{};const s=Bi(i[o]);!r[s]&&t&&(r[s]=new t),Object.prototype.hasOwnProperty.call(r,s)?r=r[s]:r={},++o}return Ni(r)?{}:{obj:r,k:Bi(i[o])}},Hi=(r,e,t)=>{const{obj:i,k:o}=We(r,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let s=e[e.length-1],n=e.slice(0,e.length-1),a=We(r,n,Object);for(;a.obj===void 0&&n.length;)s=`${n[n.length-1]}.${s}`,n=n.slice(0,n.length-1),a=We(r,n,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=t},Bo=(r,e,t,i)=>{const{obj:o,k:s}=We(r,e,Object);o[s]=o[s]||[],o[s].push(t)},yt=(r,e)=>{const{obj:t,k:i}=We(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},No=(r,e,t)=>{const i=yt(r,t);return i!==void 0?i:yt(e,t)},jr=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?A(r[i])||r[i]instanceof String||A(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):jr(r[i],e[i],t):r[i]=e[i]);return r},ue=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Ho={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},qo=r=>A(r)?r.replace(/[&<>"'\/]/g,e=>Ho[e]):r;class Vo{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Ko=[" ",",","?","!",";"],Yo=new Vo(20),Go=(r,e,t)=>{e=e||"",t=t||"";const i=Ko.filter(n=>!e.includes(n)&&!t.includes(n));if(i.length===0)return!0;const o=Yo.getRegExp(`(${i.map(n=>n==="?"?"\\?":n).join("|")})`);let s=!o.test(r);if(!s){const n=r.indexOf(t);n>0&&!o.test(r.substring(0,n))&&(s=!0)}return s},Gt=(r,e,t=".")=>{if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let o=r;for(let s=0;s<i.length;){if(!o||typeof o!="object")return;let n,a="";for(let l=s;l<i.length;++l)if(l!==s&&(a+=t),a+=i[l],n=o[a],n!==void 0){if(["string","number","boolean"].includes(typeof n)&&l<i.length-1)continue;s+=l-s+1;break}o=n}return o},Je=r=>r==null?void 0:r.replace(/_/g,"-"),Wo={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class wt{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||Wo,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(e=e.map(s=>A(s)?s.replace(/[\r\n\x00-\x1F\x7F]/g," "):s),A(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new wt(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new wt(this.logger,e)}}var pe=new wt;class Ut{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){const i=(...o)=>{t(...o),this.off(e,i)};return this.on(e,i),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,s])=>{for(let n=0;n<s;n++)o(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,s])=>{for(let n=0;n<s;n++)o(e,...t)})}}class qi extends Ut{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,o={}){var c,p;const s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,n=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.includes(".")?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):A(i)&&s?a.push(...i.split(s)):a.push(i)));const l=yt(this.data,a);return!l&&!t&&!i&&e.includes(".")&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!n||!A(i)?l:Gt((p=(c=this.data)==null?void 0:c[e])==null?void 0:p[t],i,s)}addResource(e,t,i,o,s={silent:!1}){const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(n?i.split(n):i)),e.includes(".")&&(a=e.split("."),o=t,t=a[1]),this.addNamespaces(t),Hi(this.data,a,o),s.silent||this.emit("added",e,t,i,o)}addResources(e,t,i,o={silent:!1}){for(const s in i)(A(i[s])||Array.isArray(i[s]))&&this.addResource(e,t,s,i[s],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,s,n={silent:!1,skipCopy:!1}){let a=[e,t];e.includes(".")&&(a=e.split("."),o=i,i=t,t=a[1]),this.addNamespaces(t);let l=yt(this.data,a)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?jr(l,i,s):l={...l,...i},Hi(this.data,a,l),n.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var Dr={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,o){return r.forEach(s=>{var n;e=((n=this.processors[s])==null?void 0:n.process(e,t,i,o))??e}),e}};const Mr=Symbol("i18next/PATH_KEY");function Xo(){const r=[],e=Object.create(null);let t;return e.get=(i,o)=>{var s;return(s=t==null?void 0:t.revoke)==null||s.call(t),o===Mr?r:(r.push(o),t=Proxy.revocable(i,e),t.proxy)},Proxy.revocable(Object.create(null),e).proxy}function je(r,e){const{[Mr]:t}=r(Xo()),i=(e==null?void 0:e.keySeparator)??".",o=(e==null?void 0:e.nsSeparator)??":",s=(e==null?void 0:e.enableSelector)==="strict";if(t.length>1&&o){const n=e==null?void 0:e.ns,a=s?Array.isArray(n)?n:n?[n]:null:Array.isArray(n)?n:null;if(a&&(s?a:a.length>1?a.slice(1):[]).includes(t[0]))return`${t[0]}${o}${t.slice(1).join(i)}`}return t.join(i)}const It=r=>!A(r)&&typeof r!="boolean"&&typeof r!="number";class _t extends Ut{constructor(e,t={}){super(),Do(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=pe.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const o=this.resolve(e,i);if((o==null?void 0:o.res)===void 0)return!1;const s=It(o.res);return!(i.returnObjects===!1&&s)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const n=i&&e.includes(i),a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!Go(e,i,o);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:A(s)?[s]:s};const c=e.split(i);(i!==o||i===o&&this.options.ns.includes(c[0]))&&(s=c.shift()),e=c.join(o)}return{key:e,namespaces:A(s)?[s]:s}}translate(e,t,i){let o=typeof t=="object"?{...t}:t;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=je(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]),e=e.map(O=>typeof O=="function"?je(O,{...this.options,...o}):String(O));const s=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],o),c=l[l.length-1];let p=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;p===void 0&&(p=":");const u=o.lng||this.language,f=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((u==null?void 0:u.toLowerCase())==="cimode")return f?s?{res:`${c}${p}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:c,usedParams:this.getUsedParamsDetails(o)}:`${c}${p}${a}`:s?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:c,usedParams:this.getUsedParamsDetails(o)}:a;const S=this.resolve(e,o);let m=S==null?void 0:S.res;const v=(S==null?void 0:S.usedKey)||a,C=(S==null?void 0:S.exactUsedKey)||a,T=["[object Number]","[object Function]","[object RegExp]"],k=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,_=o.count!==void 0&&!A(o.count),b=_t.hasDefaultValue(o),R=_?this.pluralResolver.getSuffix(u,o.count,o):"",E=o.ordinal&&_?this.pluralResolver.getSuffix(u,o.count,{ordinal:!1}):"",z=_&&!o.ordinal&&o.count===0,L=z&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${R}`]||o[`defaultValue${E}`]||o.defaultValue;let F=m;w&&!m&&b&&(F=L);const X=It(F),ae=Object.prototype.toString.apply(F);if(w&&F&&X&&!T.includes(ae)&&!(A(k)&&Array.isArray(F))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const O=this.options.returnedObjectHandler?this.options.returnedObjectHandler(v,F,{...o,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(S.res=O,S.usedParams=this.getUsedParamsDetails(o),S):O}if(n){const O=Array.isArray(F),V=O?[]:{},de=O?C:v;for(const x in F)if(Object.prototype.hasOwnProperty.call(F,x)){const h=`${de}${n}${x}`;b&&!m?V[x]=this.translate(h,{...o,defaultValue:It(L)?L[x]:void 0,joinArrays:!1,ns:l}):V[x]=this.translate(h,{...o,joinArrays:!1,ns:l}),V[x]===h&&(V[x]=F[x])}m=V}}else if(w&&A(k)&&Array.isArray(m))m=m.join(k),m&&(m=this.extendTranslation(m,e,o,i));else{let O=!1,V=!1;!this.isValidLookup(m)&&b&&(O=!0,m=L),this.isValidLookup(m)||(V=!0,m=a);const x=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&V?void 0:m,h=b&&L!==m&&this.options.updateMissing;if(V||O||h){if(this.logger.log(h?"updateKey":"missingKey",u,c,_&&!h?`${a}${this.pluralResolver.getSuffix(u,o.count,o)}`:a,h?L:m),n){const $=this.resolve(a,{...o,keySeparator:!1});$&&$.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let g=[];const P=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&P&&P[0])for(let $=0;$<P.length;$++)g.push(P[$]);else this.options.saveMissingTo==="all"?g=this.languageUtils.toResolveHierarchy(o.lng||this.language):g.push(o.lng||this.language);const U=($,I,B)=>{var J;const N=b&&B!==m?B:x;this.options.missingKeyHandler?this.options.missingKeyHandler($,c,I,N,h,o):(J=this.backendConnector)!=null&&J.saveMissing&&this.backendConnector.saveMissing($,c,I,N,h,o),this.emit("missingKey",$,c,I,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&_?g.forEach($=>{const I=this.pluralResolver.getSuffixes($,o);z&&o[`defaultValue${this.options.pluralSeparator}zero`]&&!I.includes(`${this.options.pluralSeparator}zero`)&&I.push(`${this.options.pluralSeparator}zero`),I.forEach(B=>{U([$],a+B,o[`defaultValue${B}`]||L)})}):U(g,a,L))}m=this.extendTranslation(m,e,o,S,i),V&&m===a&&this.options.appendNamespaceToMissingKey&&(m=`${c}${p}${a}`),(V||O)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${p}${a}`:a,O?m:void 0,o))}return s?(S.res=m,S.usedParams=this.getUsedParamsDetails(o),S):m}extendTranslation(e,t,i,o,s){var l,c;if((l=this.i18nFormat)!=null&&l.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=A(e)&&(((c=i==null?void 0:i.interpolation)==null?void 0:c.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(p){const S=e.match(this.interpolator.nestingRegexp);u=S&&S.length}let f=i.replace&&!A(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||o.usedLng,i),p){const S=e.match(this.interpolator.nestingRegexp),m=S&&S.length;u<m&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(...S)=>(s==null?void 0:s[0])===S[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`),null):this.translate(...S,t),i)),i.interpolation&&this.interpolator.reset()}const n=i.postProcess||this.options.postProcess,a=A(n)?[n]:n;return e!=null&&(a!=null&&a.length)&&i.applyPostProcessor!==!1&&(e=Dr.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,o,s,n,a;return A(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?je(l,{...this.options,...t}):l)),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,t),p=c.key;o=p;let u=c.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const f=t.count!==void 0&&!A(t.count),S=f&&!t.ordinal&&t.count===0,m=t.context!==void 0&&(A(t.context)||typeof t.context=="number")&&t.context!=="",v=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(C=>{var T,k;this.isValidLookup(i)||(a=C,!this.checkedLoadedFor[`${v[0]}-${C}`]&&((T=this.utils)!=null&&T.hasLoadedNamespace)&&!((k=this.utils)!=null&&k.hasLoadedNamespace(a))&&(this.checkedLoadedFor[`${v[0]}-${C}`]=!0,this.logger.warn(`key "${o}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),v.forEach(w=>{var R;if(this.isValidLookup(i))return;n=w;const _=[p];if((R=this.i18nFormat)!=null&&R.addLookupKeys)this.i18nFormat.addLookupKeys(_,p,w,C,t);else{let E;f&&(E=this.pluralResolver.getSuffix(w,t.count,t));const z=`${this.options.pluralSeparator}zero`,L=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(t.ordinal&&E.startsWith(L)&&_.push(p+E.replace(L,this.options.pluralSeparator)),_.push(p+E),S&&_.push(p+z)),m){const F=`${p}${this.options.contextSeparator||"_"}${t.context}`;_.push(F),f&&(t.ordinal&&E.startsWith(L)&&_.push(F+E.replace(L,this.options.pluralSeparator)),_.push(F+E),S&&_.push(F+z))}}let b;for(;b=_.pop();)this.isValidLookup(i)||(s=b,i=this.getResource(w,C,b,t))}))})}),{res:i,usedKey:o,exactUsedKey:s,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,o={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!A(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const s of t)delete o[s]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&i.startsWith(t)&&e[i]!==void 0)return!0;return!1}}class Vi{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=pe.create("languageUtils")}getScriptPartFromCode(e){if(e=Je(e),!e||!e.includes("-"))return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Je(e),!e||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(A(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getScriptPartFromCode(i);if(this.isSupportedCode(o))return t=o;const s=this.getLanguagePartFromCode(i);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(n=>n===s?!0:!n.includes("-")&&!s.includes("-")?!1:!!(n.includes("-")&&!s.includes("-")&&n.slice(0,n.indexOf("-"))===s||n.startsWith(s)&&s.length>1))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),A(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),o=[],s=n=>{n&&(this.isSupportedCode(n)?o.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return A(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):A(e)&&s(this.formatLanguageCode(e)),i.forEach(n=>{o.includes(n)||s(this.formatLanguageCode(n))}),o}}const Ki={zero:0,one:1,two:2,few:3,many:4,other:5},Yi={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Jo{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=pe.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=Je(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:o});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let n;try{n=new Intl.PluralRules(i,{type:o})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Yi;if(!e.match(/-|_/))return Yi;const l=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(l,t)}return this.pluralRulesCache[s]=n,n}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((o,s)=>Ki[o]-Ki[s]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,t,i={}){const o=this.getRule(e,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Gi=(r,e,t,i=".",o=!0)=>{let s=No(r,e,t);return!s&&o&&A(t)&&(s=Gt(r,t,i),s===void 0&&(s=Gt(e,t,i))),s},At=r=>r.replace(/\$/g,"$$$$");class Wi{constructor(e={}){var t;this.logger=pe.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:s,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:p,unescapePrefix:u,nestingPrefix:f,nestingPrefixEscaped:S,nestingSuffix:m,nestingSuffixEscaped:v,nestingOptionsSeparator:C,maxReplaces:T,alwaysFormat:k}=e.interpolation;this.escape=t!==void 0?t:qo,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=s?ue(s):n||"{{",this.suffix=a?ue(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=p?"":u?ue(u):"-",this.unescapeSuffix=this.unescapePrefix?"":p?ue(p):"",this.nestingPrefix=f?ue(f):S||ue("$t("),this.nestingSuffix=m?ue(m):v||ue(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=T||1e3,this.alwaysFormat=k!==void 0?k:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,o){var S;let s,n,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=m=>{if(!m.includes(this.formatSeparator)){const k=Gi(t,l,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(k,void 0,i,{...o,...t,interpolationkey:m}):k}const v=m.split(this.formatSeparator),C=v.shift().trim(),T=v.join(this.formatSeparator).trim();return this.format(Gi(t,l,C,this.options.keySeparator,this.options.ignoreJSONStructure),T,i,{...o,...t,interpolationkey:C})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const p=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,u=((S=o==null?void 0:o.interpolation)==null?void 0:S.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>At(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?At(this.escape(m)):At(m)}].forEach(m=>{for(a=0;s=m.regex.exec(e);){const v=s[1].trim();if(n=c(v),n===void 0)if(typeof p=="function"){const T=p(e,s,o);n=A(T)?T:""}else if(o&&Object.prototype.hasOwnProperty.call(o,v))n="";else if(u){n=s[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),n="";else!A(n)&&!this.useRawValueToEscape&&(n=Mi(n));const C=m.safeValue(n);if(e=e.replace(s[0],C),u?(m.regex.lastIndex+=n.length,m.regex.lastIndex-=s[0].length):m.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let o,s,n;const a=(l,c)=>{const p=this.nestingOptionsSeparator;if(!l.includes(p))return l;const u=l.split(new RegExp(`${ue(p)}[ ]*{`));let f=`{${u[1]}`;l=u[0],f=this.interpolate(f,n);const S=f.match(/'/g),m=f.match(/"/g);(((S==null?void 0:S.length)??0)%2===0&&!m||((m==null?void 0:m.length)??0)%2!==0)&&(f=f.replace(/'/g,'"'));try{n=JSON.parse(f),c&&(n={...c,...n})}catch(v){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,v),`${l}${p}${f}`}return n.defaultValue&&n.defaultValue.includes(this.prefix)&&delete n.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];n={...i},n=n.replace&&!A(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;const c=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(c!==-1&&(l=o[1].slice(c).split(this.formatSeparator).map(p=>p.trim()).filter(Boolean),o[1]=o[1].slice(0,c)),s=t(a.call(this,o[1].trim(),n),n),s&&o[0]===e&&!A(s))return s;A(s)||(s=Mi(s)),s||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),s=""),l.length&&(s=l.reduce((p,u)=>this.format(p,u,i.lng,{...i,interpolationkey:o[1].trim()}),s.trim())),e=e.replace(o[0],s),this.regexp.lastIndex=0}return e}}const Zo=r=>{let e=r.toLowerCase().trim();const t={};if(r.includes("(")){const i=r.split("(");e=i[0].toLowerCase().trim();const o=i[1].slice(0,-1);e==="currency"&&!o.includes(":")?t.currency||(t.currency=o.trim()):e==="relativetime"&&!o.includes(":")?t.range||(t.range=o.trim()):o.split(";").forEach(n=>{if(n){const[a,...l]=n.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),p=a.trim();t[p]||(t[p]=c),c==="false"&&(t[p]=!1),c==="true"&&(t[p]=!0),isNaN(c)||(t[p]=parseInt(c,10))}})}return{formatName:e,formatOptions:t}},Xi=r=>{const e={};return(t,i,o)=>{let s=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(s={...s,[o.interpolationkey]:void 0});const n=i+JSON.stringify(s);let a=e[n];return a||(a=r(Je(i),o),e[n]=a),a(t)}},Qo=r=>(e,t,i)=>r(Je(t),i)(e);class es{constructor(e={}){this.logger=pe.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Xi:Qo;this.formats={number:i((o,s)=>{const n=new Intl.NumberFormat(o,{...s});return a=>n.format(a)}),currency:i((o,s)=>{const n=new Intl.NumberFormat(o,{...s,style:"currency"});return a=>n.format(a)}),datetime:i((o,s)=>{const n=new Intl.DateTimeFormat(o,{...s});return a=>n.format(a)}),relativetime:i((o,s)=>{const n=new Intl.RelativeTimeFormat(o,{...s});return a=>n.format(a,s.range||"day")}),list:i((o,s)=>{const n=new Intl.ListFormat(o,{...s});return a=>n.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Xi(t)}format(e,t,i,o={}){if(!t||e==null)return e;const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&!s[0].includes(")")&&s.find(a=>a.includes(")"))){const a=s.findIndex(l=>l.includes(")"));s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{var u;const{formatName:c,formatOptions:p}=Zo(l);if(this.formats[c]){let f=a;try{const S=((u=o==null?void 0:o.formatParams)==null?void 0:u[o.interpolationkey])||{},m=S.locale||S.lng||o.locale||o.lng||i;f=this.formats[c](a,m,{...p,...o,...S})}catch(S){this.logger.warn(S)}return f}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const ts=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class is extends Ut{constructor(e,t,i,o={}){var s,n;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=pe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(n=(s=this.backend)==null?void 0:s.init)==null||n.call(s,i,o.backend,o)}queueLoad(e,t,i,o){const s={},n={},a={},l={};return e.forEach(c=>{let p=!0;t.forEach(u=>{const f=`${c}|${u}`;!i.reload&&this.store.hasResourceBundle(c,u)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?n[f]===void 0&&(n[f]=!0):(this.state[f]=1,p=!1,n[f]===void 0&&(n[f]=!0),s[f]===void 0&&(s[f]=!0),l[u]===void 0&&(l[u]=!0)))}),p||(a[c]=!0)}),(Object.keys(s).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(s),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const o=e.split("|"),s=o[0],n=o[1];t&&this.emit("failedLoading",s,n,t),!t&&i&&this.store.addResourceBundle(s,n,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{Bo(l.loaded,[s],n),ts(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const p=l.loaded[c];p.length&&p.forEach(u=>{a[c][u]===void 0&&(a[c][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i,o=0,s=this.retryTimeout,n){if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:s,callback:n});return}this.readingCalls++;const a=(c,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(c&&p&&o<this.maxRetries){setTimeout(()=>{this.read(e,t,i,o+1,s*2,n)},s);return}n(c,p)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,t);c&&typeof c.then=="function"?c.then(p=>a(null,p)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,t,a)}prepareLoading(e,t,i={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();A(e)&&(e=this.languageUtils.toResolveHierarchy(e)),A(t)&&(t=[t]);const s=this.queueLoad(e,t,i,o);if(!s.toLoad.length)return s.pending.length||o(),null;s.toLoad.forEach(n=>{this.loadOne(n)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),o=i[0],s=i[1];this.read(o,s,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${s} for language ${o} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${s} for language ${o}`,a),this.loaded(e,n,a)})}saveMissing(e,t,i,o,s,n={},a=()=>{}){var l,c,p,u,f;if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((u=(p=this.services)==null?void 0:p.utils)!=null&&u.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((f=this.backend)!=null&&f.create){const S={...n,isUpdate:s},m=this.backend.create.bind(this.backend);if(m.length<6)try{let v;m.length===5?v=m(e,t,i,o,S):v=m(e,t,i,o),v&&typeof v.then=="function"?v.then(C=>a(null,C)).catch(a):a(null,v)}catch(v){a(v)}else m(e,t,i,o,a,S)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}const jt=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),A(r[1])&&(e.defaultValue=r[1]),A(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ji=r=>(A(r.ns)&&(r.ns=[r.ns]),A(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),A(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&!r.supportedLngs.includes("cimode")&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r),ut=()=>{},rs=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Xe extends Ut{constructor(e={},t){if(super(),this.options=Ji(e),this.services={},this.logger=pe,this.modules={external:[]},rs(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(A(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const i=jt();this.options={...i,...this.options,...Ji(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const o=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?pe.init(o(this.modules.logger),this.options):pe.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:c=es;const p=new Vi(this.options);this.store=new qi(this.options.resources,this.options);const u=this.services;u.logger=pe,u.resourceStore=this.store,u.languageUtils=p,u.pluralResolver=new Jo(p,{prepend:this.options.pluralSeparator}),c&&(u.formatter=o(c),u.formatter.init&&u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new Wi(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new is(o(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",(f,...S)=>{this.emit(f,...S)}),this.modules.languageDetector&&(u.languageDetector=o(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=o(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new _t(this.services,this.options),this.translator.on("*",(f,...S)=>{this.emit(f,...S)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,t||(t=ut),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=(...p)=>this.store[c](...p)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=(...p)=>(this.store[c](...p),this)});const a=qe(),l=()=>{const c=(p,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(u),t(p,u)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=ut){var s,n;let i=t;const o=A(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=c=>{if(!c||c==="cimode")return;this.services.languageUtils.toResolveHierarchy(c).forEach(u=>{u!=="cimode"&&(a.includes(u)||a.push(u))})};o?l(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p=>l(p)),(n=(s=this.options.preload)==null?void 0:s.forEach)==null||n.call(s,c=>l(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(c)})}else i(null)}reloadResources(e,t,i){const o=qe();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=ut),this.services.backendConnector.reload(e,t,s=>{o.resolve(),i(s)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Dr.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!["cimode","dev"].includes(i)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=qe();this.emit("languageChanging",e);const o=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},s=(a,l)=>{l?this.isLanguageChangingTo===e&&(o(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...c)=>this.t(...c)),t&&t(a,(...c)=>this.t(...c))},n=a=>{var p,u;!e&&!a&&this.services.languageDetector&&(a=[]);const l=A(a)?a:a&&a[0],c=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(A(a)?[a]:a);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),(u=(p=this.services.languageDetector)==null?void 0:p.cacheUserLanguage)==null||u.call(p,c)),this.loadResources(c,f=>{s(f,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),i}getFixedT(e,t,i,o){const s=o==null?void 0:o.scopeNs,n=(a,l,...c)=>{let p;typeof l!="object"?p=this.options.overloadTranslationOptionHandler([a,l].concat(c)):p={...l},p.lng=p.lng||n.lng,p.lngs=p.lngs||n.lngs;const u=p.ns!==void 0&&p.ns!==null;p.ns=p.ns||n.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||i||n.keyPrefix);const f={...this.options,...p};Array.isArray(s)&&!u&&(f.ns=s),typeof p.keyPrefix=="function"&&(p.keyPrefix=je(p.keyPrefix,f));const S=this.options.keySeparator||".";let m;return p.keyPrefix&&Array.isArray(a)?m=a.map(v=>(typeof v=="function"&&(v=je(v,f)),`${p.keyPrefix}${S}${v}`)):(typeof a=="function"&&(a=je(a,f)),m=p.keyPrefix?`${p.keyPrefix}${S}${a}`:a),this.t(m,p)};return A(e)?n.lng=e:n.lngs=e,n.ns=t,n.keyPrefix=i,n}t(...e){var t;return(t=this.translator)==null?void 0:t.translate(...e)}exists(...e){var t;return(t=this.translator)==null?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(t.precheck){const a=t.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(i,e)&&(!o||n(s,e)))}loadNamespaces(e,t){const i=qe();return this.options.ns?(A(e)&&(e=[e]),e.forEach(o=>{this.options.ns.includes(o)||this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=qe();A(e)&&(e=[e]);const o=this.options.preload||[],s=e.filter(n=>!o.includes(n)&&this.services.languageUtils.isSupportedCode(n));return s.length?(this.options.preload=o.concat(s),this.loadResources(n=>{i.resolve(),t&&t(n)}),i):(t&&t(),Promise.resolve())}dir(e){var o,s;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const n=new Intl.Locale(e);if(n&&n.getTextInfo){const a=n.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((s=this.services)==null?void 0:s.languageUtils)||new Vi(jt());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.includes(i.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new Xe(e,t);return i.createInstance=Xe.createInstance,i}cloneInstance(e={},t=ut){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},s=new Xe(o);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i){const a=Object.keys(this.store.data).reduce((l,c)=>(l[c]={...this.store.data[c]},l[c]=Object.keys(l[c]).reduce((p,u)=>(p[u]={...l[c][u]},p),l[c]),l),{});s.store=new qi(a,o),s.services.resourceStore=s.store}if(e.interpolation){const l={...jt().interpolation,...this.options.interpolation,...e.interpolation},c={...o,interpolation:l};s.services.interpolator=new Wi(c)}return s.translator=new _t(s.services,o),s.translator.on("*",(a,...l)=>{s.emit(a,...l)}),s.init(o,t),s.translator.options=o,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const oe=Xe.createInstance();oe.createInstance;oe.dir;oe.init;oe.loadResources;oe.reloadResources;oe.use;oe.changeLanguage;oe.getFixedT;oe.t;oe.exists;oe.setDefaultNamespace;oe.hasLoadedNamespace;oe.loadNamespaces;oe.loadLanguages;const Br=["__proto__","constructor","prototype"];function Nr(r){return!(typeof r!="string"||r.length===0||r.length>128||Br.indexOf(r)>-1||r.indexOf("..")>-1||r.indexOf("\\")>-1||/[?#%\s@]/.test(r)||/[\x00-\x1F\x7F]/.test(r))}function Hr(r){return!(!Nr(r)||r.indexOf("/")>-1)}function os(r){return Nr(r)}const ss={lng:Hr,ns:os};function ft(r){return typeof r!="string"?r:r.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function ns(r){if(typeof r!="string"||r.length===0)return r;try{const e=new URL(r);return e.username||e.password?(e.username="",e.password="",e.toString()):r}catch{return r.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function qr(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function as(r){return!!r&&typeof r.then=="function"}function ls(r){return as(r)?r:Promise.resolve(r)}const cs=/\{\{(.+?)\}\}/g;function Zi(r,e){let t=!1;const i=r.replace(cs,(o,s)=>{const n=s.trim();if(Br.indexOf(n)>-1)return o;const a=e[n];if(a==null)return o;const l=ss[n]||Hr,c=String(a).split("+");for(const p of c)if(!l(p))return t=!0,o;return c.join("+")});return t?null:i}const $e=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let kt;typeof fetch=="function"?kt=fetch:$e&&typeof $e.fetch=="function"&&(kt=$e.fetch);const Qi=qr()&&$e?$e.XMLHttpRequest:void 0,ds=typeof ActiveXObject=="function"&&$e?$e.ActiveXObject:void 0,Vr=["__proto__","constructor","prototype"],Wt=(r,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))Vr.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return r;r=r+(r.indexOf("?")!==-1?"&":"?")+t.slice(1)}return r},er=(r,e,t,i)=>{const o=s=>{if(!s.ok)return t(s.statusText||"Error",{status:s.status});s.text().then(n=>{t(null,{status:s.status,data:n})}).catch(t)};if(i){const s=i(r,e);if(s instanceof Promise){s.then(o).catch(t);return}}typeof fetch=="function"?fetch(r,e).then(o).catch(t):kt(r,e).then(o).catch(t)},ps=(r,e,t,i)=>{r.queryStringParams&&(e=Wt(e,r.queryStringParams));const o={...typeof r.customHeaders=="function"?r.customHeaders():r.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(o["Content-Type"]="application/json");const s=typeof r.requestOptions=="function"?r.requestOptions(t):r.requestOptions,n={method:t?"POST":"GET",body:t?r.stringify(t):void 0,headers:o,...r._omitFetchOptions?{}:s},a=typeof r.alternateFetch=="function"&&r.alternateFetch.length>=1?r.alternateFetch:void 0;try{er(e,n,i,a)}catch(l){if(!s||Object.keys(s).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(s).forEach(c=>{delete n[c]}),er(e,n,i,a),r._omitFetchOptions=!0}catch(c){i(c)}}},us=(r,e,t,i)=>{t&&typeof t=="object"&&(t=Wt("",t).slice(1)),r.queryStringParams&&(e=Wt(e,r.queryStringParams));try{const o=Qi?new Qi:new ds("MSXML2.XMLHTTP.3.0");o.open(t?"POST":"GET",e,1),r.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!r.withCredentials,t&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");let s=r.customHeaders;if(s=typeof s=="function"?s():s,s)for(const n of Object.keys(s))Vr.indexOf(n)>-1||o.setRequestHeader(n,s[n]);o.onreadystatechange=()=>{o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(t)}catch(o){console&&console.log(o)}},fs=(r,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),kt&&e.indexOf("file:")!==0)return ps(r,e,t,i);if(qr()||typeof ActiveXObject=="function")return us(r,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},hs=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:r=>JSON.parse(r),stringify:JSON.stringify,parsePayload:(r,e,t)=>({[e]:t||""}),parseLoadPayload:(r,e)=>{},request:fs,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var Kr=class{constructor(r,e={},t={}){this.services=r,this.options=e,this.allOptions=t,this.type="backend",this.init(r,e,t)}init(r,e={},t={}){if(this.services=r,this.options={...hs(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(r,e,t){this._readAny(r,r,e,e,t)}read(r,e,t){this._readAny([r],r,[e],e,t)}_readAny(r,e,t,i,o){let s=this.options.loadPath;typeof this.options.loadPath=="function"&&(s=this.options.loadPath(r,t)),s=ls(s),s.then(n=>{if(!n)return o(null,{});const a=Zi(n,{lng:r.join("+"),ns:t.join("+")});if(a==null){const l=r.map(ft).join(", "),c=t.map(ft).join(", ");return o(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(a,o,e,i)})}loadUrl(r,e,t,i){const o=typeof t=="string"?[t]:t,s=typeof i=="string"?[i]:i,n=this.options.parseLoadPayload(o,s),a=ft(ns(r));this.options.request(this.options,r,n,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+a+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+a+"; status code: "+c.status,!1);if(!c&&l&&l.message){const f=l.message.toLowerCase();if(["failed","fetch","network","load"].find(S=>f.indexOf(S)>-1))return e("failed loading "+a+": "+ft(l.message),!0)}if(l)return e(l,!1);let p,u;try{typeof c.data=="string"?p=this.options.parse(c.data,t,i):p=c.data}catch{u="failed parsing "+a+" to json"}if(u)return e(u,!1);e(null,p)})}create(r,e,t,i,o){if(!this.options.addPath)return;typeof r=="string"&&(r=[r]);const s=this.options.parsePayload(e,t,i);let n=0;const a=[],l=[];r.forEach(c=>{let p=this.options.addPath;typeof this.options.addPath=="function"&&(p=this.options.addPath(c,e));const u=Zi(p,{lng:c,ns:e});if(u==null){n+=1,o&&n===r.length&&o(a,l);return}this.options.request(this.options,u,s,(f,S)=>{n+=1,a.push(f),l.push(S),n===r.length&&typeof o=="function"&&o(a,l)})})}reload(){const{backendConnector:r,languageUtils:e,logger:t}=this.services,i=r.language;if(i&&i.toLowerCase()==="cimode")return;const o=[],s=n=>{e.toResolveHierarchy(n).forEach(a=>{o.indexOf(a)<0&&o.push(a)})};s(i),this.allOptions.preload&&this.allOptions.preload.forEach(n=>s(n)),o.forEach(n=>{this.allOptions.ns.forEach(a=>{r.read(n,a,"read",null,null,(l,c)=>{l&&t.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&c&&t.log(`loaded namespace ${a} for language ${n}`,c),r.loaded(`${n}|${a}`,l,c)})})})}};Kr.type="backend";const Yr="f7b2366e-fcb6-4f1a-8f23-8de48422989a",gs="https://i18n-fastly.ultrafast.io",ms="https://neo.wordplex.io",Xt="uploader";let Se=null;async function xs(r="en"){return Se?(Se.language!==r&&await Se.changeLanguage(r),{i18n:Se,isNew:!1}):(Se=oe.createInstance(),await Se.use(Kr).init({lng:r,fallbackLng:"en",ns:[Xt],defaultNS:Xt,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{addPath:"",loadPath:`${gs}/api/export/grid/f2/${Yr}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){var s;const i=JSON.parse(e),o=Array.isArray(t)?t[0]:t;return o&&((s=i[o])!=null&&s.__without_namespace)?i[o].__without_namespace:i}}}),{i18n:Se,isNew:!0})}const bs="sfxUploaderTranslationsMissingKeysEnabled";class vs{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(bs)==="true",this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,t,i,o)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,t,i,o))})}handleMissingKey(e,t="",i=Xt){if(!this.enabled)return;const o=`${i}:${e}`;this._missingKeys[o]={value:t,ns:i}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${ms}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${Yr}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:t,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:t}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const ys=new vs,Dt=r=>r.includes("-")?r:r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class ws extends Yt.Directive{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Yt.PartType.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return d.noChange}update(e,[t]){if(t===this._lastStyles)return d.noChange;this._lastStyles=t;const{style:i}=e.element,o=t??{};for(const s of this._appliedProps)(!(s in o)||o[s]==null||o[s]==="")&&(i.removeProperty(Dt(s)),this._appliedProps.delete(s));for(const[s,n]of Object.entries(o))n!=null&&n!==""?(i.setProperty(Dt(s),n),this._appliedProps.add(s)):this._appliedProps.has(s)&&(i.removeProperty(Dt(s)),this._appliedProps.delete(s));return d.noChange}}const W=Yt.directive(ws);function _s(r,e){var n,a,l;const t=(n=e==null?void 0:e.getLocateUrl)==null?void 0:n.call(e,r);if(t)return t;const i=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!i)return null;const o=(l=(a=r.response)==null?void 0:a.file)==null?void 0:l.uuid;return o?`${i.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(o))}`:null}class Gr{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function G(r,e,t){const i=r.getState().files,o=i.get(e);if(!o)return;const s=new Map(i);s.set(e,{...o,...t}),r.setState({files:s})}function Oe(r,e){const t=new Map(r.getState().files);t.set(e.id,e),r.setState({files:t})}function tr(r,e){const t=r.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),r.setState({files:i})}function Wr(){return new Gr({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:(r,e,t)=>{const i=(o,s)=>o.replace(/\{\{(\w+)\}\}/g,(n,a)=>String(s[a]??""));if(typeof e=="string")return i(e,t??{});if(typeof e=="object"&&e!==null){const o=e,s=o.count;if(s!==void 0){const n=String((s===1?o.defaultValue_one:o.defaultValue_other)??o.defaultValue??r);return i(n,o)}return i(String(o.defaultValue??r),o)}return r}})}class ks{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Ss="SAME_ASSET_EXISTS_SKIP_UPLOAD",$s="ERROR_SHA1_CONFLICT";function nt(r){return(r==null?void 0:r.code)===Ss||(r==null?void 0:r.code)===$s}function ui(r,e){return{...r,status:"success",file:r.file??{uuid:r.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}const fi=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Cs(r){return r==null||r===""?null:typeof r!="string"||fi.test(r)?"productRefInvalid":null}function Ps(r){if(r==null||r==="")return null;const e=typeof r=="number"?r:Number(r);return!Number.isFinite(e)||!Number.isInteger(e)?"productPositionInvalid":null}function hi(r){return r?r.ref!=null&&r.ref!==""||r.position!=null:!1}function gi(r){const e={};return(r==null?void 0:r.ref)!=null&&r.ref!==""&&(e.ref=r.ref),(r==null?void 0:r.position)!=null&&(e.position=r.position),e}function ir(r,e){const t={...r??{}};for(const i of Object.keys(e)){const o=e[i];o===void 0?delete t[i]:t[i]=o}return t}function Es(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function Us(r,e){const t=new XMLHttpRequest;let i=!1;const o=Es(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[n,a]of Object.entries(e.authHeaders))t.setRequestHeader(n,a);t.upload.addEventListener("progress",n=>{n.lengthComputable&&!i&&e.onProgress(n.loaded,n.total)}),t.addEventListener("load",()=>{if(i)return;let n;try{n=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&n.status==="success"?e.onComplete(n):nt(n)?e.onComplete(ui(n,r)):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))});const s=new FormData;if(r.file){const n={name:r.name,type:r.type};s.append("info[files[]]",JSON.stringify(n)),Object.keys(r.meta).length>0&&s.append("meta[files[]]",JSON.stringify(r.meta)),r.tags.length>0&&s.append("tags[files[]]",JSON.stringify(r.tags)),hi(r.product)&&s.append("product[files[]]",JSON.stringify(gi(r.product))),s.append("files[]",r.file,r.name)}return t.send(s),{abort(){i=!0,t.abort()}}}function Rt(r){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":r}}function ke(r){return r.replace(/\/+$/,"")}const Rs={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function at(r){return Rs[r]??r}function Os(r,e){const t=ke(r),i=btoa(JSON.stringify({origin:window.location.origin})),o=at(e);return`${t}/${o}/connect?state=${encodeURIComponent(i)}`}async function Xr(r,e,t,i="",o){const s=ke(r),n=i?`/${i}`:"",a=at(e),l=await fetch(`${s}/${a}/list${n}`,{method:"GET",headers:Rt(t),credentials:"same-origin",signal:o});if(l.status===401)throw new Ot;if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function Jr(r,e,t,i){const o=ke(r),s=await fetch(`${o}/${t}`,{method:"GET",headers:Rt(e),credentials:"same-origin",signal:i});if(s.status===401)throw new Ot;if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${s.status})`)}return s.json()}async function Fs(r,e,t,i,o,s){const n=[];async function a(l,c){let p=null,u=!0;do{if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");const f=u?await Xr(r,e,t,l,s):await Jr(r,t,p,s);u=!1,p=f.nextPagePath;for(const S of f.items){if(s!=null&&s.aborted)throw new DOMException("Aborted","AbortError");if(S.isFolder){const m=c?`${c}/${S.name}`:S.name;await a(S.requestPath,m)}else n.push({...S,relativeFolder:c})}}while(p)}return await a(i,o),n}async function Ts(r,e,t,i){const o=ke(r),s=at(e),n=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${o}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function Ls(r,e,t,i,o,s=!1){const n=ke(r),a=at(e),l=s?`${n}/search/${a}/get/${i}`:`${n}/${a}/get/${i}`,c=s?{Accept:"application/json","Content-Type":"application/json"}:Rt(t),p=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(p.status===401)throw new Ot;if(!p.ok){const u=await p.json().catch(()=>null);throw new Error((u==null?void 0:u.message)||`Companion upload failed (HTTP ${p.status})`)}return p.json()}async function zs(r,e,t){const i=ke(r),o=await fetch(`${i}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:t});if(!o.ok){const s=await o.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Could not fetch URL metadata (HTTP ${o.status})`)}return o.json()}async function Is(r,e,t,i){const o=ke(r),s=await fetch(`${o}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...t,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:i});if(!s.ok){const n=await s.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${s.status})`)}return s.json()}async function As(r,e,t){const i=ke(r),o=at(e),s=await fetch(`${i}/${o}/logout`,{method:"GET",headers:Rt(t),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function js(r){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r))==null?void 0:o[1])??r;return`${/^https:\/\//i.test(r)?"wss":"ws"}://${t}`}class Ot extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function Zr(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[s,n]of Object.entries(t))n!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);return o}function Qr(r,e){const t={name:r.name,type:r.type,"filerobot-folder":e};return r.meta&&Object.keys(r.meta).length>0&&(t.meta=JSON.stringify(r.meta)),r.tags&&r.tags.length>0&&(t.tags=JSON.stringify(r.tags)),hi(r.product)&&(t.product=JSON.stringify(gi(r.product))),t}function eo(r){const t=`${js(r.companionUrl)}/api/${r.token}`;let i;try{i=new WebSocket(t)}catch{return r.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const s=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=n=>{var a,l,c;if(!o)try{const p=JSON.parse(n.data);switch(p.action){case"progress":{const u=p.payload,f=u.bytesUploaded??0,S=u.bytesTotal??(r.expectedSize||1);r.onProgress(f,S);break}case"success":{const u=p.payload;if(s(),i.close(),(a=u.response)!=null&&a.responseText)try{const f=JSON.parse(u.response.responseText);if(f.status==="success"){r.onComplete(f);return}if(nt(f)){r.onComplete(ui(f,r.uploadFile));return}r.onError(new Error(f.msg||"Upload failed"));return}catch{}r.onError(new Error("Upload completed but no valid response received"));break}case"error":{const u=p.payload;s(),i.close();let f=((l=u.error)==null?void 0:l.message)||"Upload failed";if((c=u.response)!=null&&c.responseText)try{const S=JSON.parse(u.response.responseText);f=S.hint||S.msg||S.message||f}catch{}r.onError(new Error(f));break}}}catch{}},i.onerror=()=>{o||(s(),r.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(s(),r.onError(new Error("Upload progress connection closed unexpectedly")))},i}function to(r){if(r){r.onmessage=null,r.onerror=null,r.onclose=null;try{r.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}r.close()}}function Ds(r,e){const t=r.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,o=null;const s=Zr(e.apiBase,e.folder,e.extraParams),n=Qr(r,e.folder),a=!t.token;return Ls(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:n},a).then(l=>{i||(o=eo({companionUrl:t.companionUrl,token:l.token,uploadFile:r,expectedSize:t.size,onProgress:(c,p)=>{i||e.onProgress(c,p)},onComplete:c=>{i||e.onComplete(c)},onError:c=>{i||e.onError(c)}}))}).catch(l=>{i||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){i=!0,to(o),o=null}}}function Ms(r,e){const t=r.remoteUrl;if(!t)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let i=!1,o=null;const s=new AbortController,n=Zr(e.apiBase,e.folder,e.extraParams);return zs(e.companionUrl,t,s.signal).then(a=>{var c;if(i)return null;(c=e.onMeta)==null||c.call(e,{name:a.name,type:a.type,size:a.size});const l=Qr(r,e.folder);return a.name&&(l.name=a.name),a.type&&(l.type=a.type),Is(e.companionUrl,t,{fileId:r.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:l},s.signal).then(p=>({result:p,size:a.size}))}).then(a=>{i||!a||(o=eo({companionUrl:e.companionUrl,token:a.result.token,uploadFile:r,expectedSize:a.size,onProgress:(l,c)=>{i||e.onProgress(l,c)},onComplete:l=>{i||e.onComplete(l)},onError:l=>{i||e.onError(l)}}))}).catch(a=>{i||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){i=!0,s.abort(),to(o),o=null}}}function Jt(r){"@babel/helpers - typeof";return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt(r)}function Bs(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function Ns(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Hs(r,e,t){return e=Qe(e),qs(r,mi()?Reflect.construct(e,t||[],Qe(r).constructor):e.apply(r,t))}function qs(r,e){if(e&&(Jt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vs(r)}function Vs(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ks(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Ze(r,e)}function Zt(r){var e=typeof Map=="function"?new Map:void 0;return Zt=function(i){if(i===null||!Gs(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return Ys(i,arguments,Qe(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Ze(o,i)},Zt(r)}function Ys(r,e,t){if(mi())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(r.bind.apply(r,i));return t&&Ze(o,t.prototype),o}function mi(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(mi=function(){return!!r})()}function Gs(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function Ze(r,e){return Ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Ze(r,e)}function Qe(r){return Qe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Qe(r)}var Ke=(function(r){function e(t){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(Ns(this,e),i=Hs(this,e,[t]),i.originalRequest=s,i.originalResponse=n,i.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),s!=null){var a=s.getHeader("X-Request-ID")||"n/a",l=s.getMethod(),c=s.getURL(),p=n?n.getStatus():"n/a",u=n?n.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(c,", response code: ").concat(p,", response text: ").concat(u,", request id: ").concat(a,")")}return i.message=t,i}return Ks(e,r),Bs(e)})(Zt(Error));function et(r){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(r)}function Ws(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Xs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Zs(i.key),i)}}function Js(r,e,t){return e&&Xs(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Zs(r){var e=Qs(r,"string");return et(e)=="symbol"?e:e+""}function Qs(r,e){if(et(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(et(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var en=(function(){function r(){Ws(this,r)}return Js(r,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const io="3.7.8",tn=io,Ne=typeof Buffer=="function",rr=typeof TextDecoder=="function"?new TextDecoder:void 0,or=typeof TextEncoder=="function"?new TextEncoder:void 0,rn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Ye=Array.prototype.slice.call(rn),ht=(r=>{let e={};return r.forEach((t,i)=>e[t]=i),e})(Ye),on=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,ee=String.fromCharCode.bind(String),sr=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):r=>new Uint8Array(Array.prototype.slice.call(r,0)),ro=r=>r.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),oo=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),so=r=>{let e,t,i,o,s="";const n=r.length%3;for(let a=0;a<r.length;){if((t=r.charCodeAt(a++))>255||(i=r.charCodeAt(a++))>255||(o=r.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|o,s+=Ye[e>>18&63]+Ye[e>>12&63]+Ye[e>>6&63]+Ye[e&63]}return n?s.slice(0,n-3)+"===".substring(n):s},xi=typeof btoa=="function"?r=>btoa(r):Ne?r=>Buffer.from(r,"binary").toString("base64"):so,Qt=Ne?r=>Buffer.from(r).toString("base64"):r=>{let t=[];for(let i=0,o=r.length;i<o;i+=4096)t.push(ee.apply(null,r.subarray(i,i+4096)));return xi(t.join(""))},mt=(r,e=!1)=>e?ro(Qt(r)):Qt(r),sn=r=>{if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?ee(192|e>>>6)+ee(128|e&63):ee(224|e>>>12&15)+ee(128|e>>>6&63)+ee(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return ee(240|e>>>18&7)+ee(128|e>>>12&63)+ee(128|e>>>6&63)+ee(128|e&63)}},nn=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,no=r=>r.replace(nn,sn),nr=Ne?r=>Buffer.from(r,"utf8").toString("base64"):or?r=>Qt(or.encode(r)):r=>xi(no(r)),De=(r,e=!1)=>e?ro(nr(r)):nr(r),ar=r=>De(r,!0),an=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,ln=r=>{switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return ee((t>>>10)+55296)+ee((t&1023)+56320);case 3:return ee((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return ee((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},ao=r=>r.replace(an,ln),lo=r=>{if(r=r.replace(/\s+/g,""),!on.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let e,t,i,o=[];for(let s=0;s<r.length;)e=ht[r.charAt(s++)]<<18|ht[r.charAt(s++)]<<12|(t=ht[r.charAt(s++)])<<6|(i=ht[r.charAt(s++)]),t===64?o.push(ee(e>>16&255)):i===64?o.push(ee(e>>16&255,e>>8&255)):o.push(ee(e>>16&255,e>>8&255,e&255));return o.join("")},bi=typeof atob=="function"?r=>atob(oo(r)):Ne?r=>Buffer.from(r,"base64").toString("binary"):lo,co=Ne?r=>sr(Buffer.from(r,"base64")):r=>sr(bi(r).split("").map(e=>e.charCodeAt(0))),po=r=>co(uo(r)),cn=Ne?r=>Buffer.from(r,"base64").toString("utf8"):rr?r=>rr.decode(co(r)):r=>ao(bi(r)),uo=r=>oo(r.replace(/[-_]/g,e=>e=="-"?"+":"/")),ei=r=>cn(uo(r)),dn=r=>{if(typeof r!="string")return!1;const e=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},fo=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),ho=function(){const r=(e,t)=>Object.defineProperty(String.prototype,e,fo(t));r("fromBase64",function(){return ei(this)}),r("toBase64",function(e){return De(this,e)}),r("toBase64URI",function(){return De(this,!0)}),r("toBase64URL",function(){return De(this,!0)}),r("toUint8Array",function(){return po(this)})},go=function(){const r=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,fo(t));r("toBase64",function(e){return mt(this,e)}),r("toBase64URI",function(){return mt(this,!0)}),r("toBase64URL",function(){return mt(this,!0)})},pn=()=>{ho(),go()},un={version:io,VERSION:tn,atob:bi,atobPolyfill:lo,btoa:xi,btoaPolyfill:so,fromBase64:ei,toBase64:De,encode:De,encodeURI:ar,encodeURL:ar,utob:no,btou:ao,decode:ei,isValid:dn,fromUint8Array:mt,toUint8Array:po,extendString:ho,extendUint8Array:go,extendBuiltins:pn};var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fn(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Mt,cr;function hn(){return cr||(cr=1,Mt=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),Mt}var gt={},dr;function gn(){if(dr)return gt;dr=1;var r=Object.prototype.hasOwnProperty,e;function t(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function i(n){try{return encodeURIComponent(n)}catch{return null}}function o(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},c;c=a.exec(n);){var p=t(c[1]),u=t(c[2]);p===null||u===null||p in l||(l[p]=u)}return l}function s(n,a){a=a||"";var l=[],c,p;typeof a!="string"&&(a="?");for(p in n)if(r.call(n,p)){if(c=n[p],!c&&(c===null||c===e||isNaN(c))&&(c=""),p=i(p),c=i(c),p===null||c===null)continue;l.push(p+"="+c)}return l.length?a+l.join("&"):""}return gt.stringify=s,gt.parse=o,gt}var Bt,pr;function mn(){if(pr)return Bt;pr=1;var r=hn(),e=gn(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(k){return(k||"").toString().replace(t,"")}var c=[["#","hash"],["?","query"],function(w,_){return f(_.protocol)?w.replace(/\\/g,"/"):w},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function u(k){var w;typeof window<"u"?w=window:typeof lr<"u"?w=lr:typeof self<"u"?w=self:w={};var _=w.location||{};k=k||_;var b={},R=typeof k,E;if(k.protocol==="blob:")b=new v(unescape(k.pathname),{});else if(R==="string"){b=new v(k,{});for(E in p)delete b[E]}else if(R==="object"){for(E in k)E in p||(b[E]=k[E]);b.slashes===void 0&&(b.slashes=o.test(k.href))}return b}function f(k){return k==="file:"||k==="ftp:"||k==="http:"||k==="https:"||k==="ws:"||k==="wss:"}function S(k,w){k=l(k),k=k.replace(i,""),w=w||{};var _=n.exec(k),b=_[1]?_[1].toLowerCase():"",R=!!_[2],E=!!_[3],z=0,L;return R?E?(L=_[2]+_[3]+_[4],z=_[2].length+_[3].length):(L=_[2]+_[4],z=_[2].length):E?(L=_[3]+_[4],z=_[3].length):L=_[4],b==="file:"?z>=2&&(L=L.slice(2)):f(b)?L=_[4]:b?R&&(L=L.slice(2)):z>=2&&f(w.protocol)&&(L=_[4]),{protocol:b,slashes:R||f(b),slashesCount:z,rest:L}}function m(k,w){if(k==="")return w;for(var _=(w||"/").split("/").slice(0,-1).concat(k.split("/")),b=_.length,R=_[b-1],E=!1,z=0;b--;)_[b]==="."?_.splice(b,1):_[b]===".."?(_.splice(b,1),z++):z&&(b===0&&(E=!0),_.splice(b,1),z--);return E&&_.unshift(""),(R==="."||R==="..")&&_.push(""),_.join("/")}function v(k,w,_){if(k=l(k),k=k.replace(i,""),!(this instanceof v))return new v(k,w,_);var b,R,E,z,L,F,X=c.slice(),ae=typeof w,O=this,V=0;for(ae!=="object"&&ae!=="string"&&(_=w,w=null),_&&typeof _!="function"&&(_=e.parse),w=u(w),R=S(k||"",w),b=!R.protocol&&!R.slashes,O.slashes=R.slashes||b&&w.slashes,O.protocol=R.protocol||w.protocol||"",k=R.rest,(R.protocol==="file:"&&(R.slashesCount!==2||a.test(k))||!R.slashes&&(R.protocol||R.slashesCount<2||!f(O.protocol)))&&(X[3]=[/(.*)/,"pathname"]);V<X.length;V++){if(z=X[V],typeof z=="function"){k=z(k,O);continue}E=z[0],F=z[1],E!==E?O[F]=k:typeof E=="string"?(L=E==="@"?k.lastIndexOf(E):k.indexOf(E),~L&&(typeof z[2]=="number"?(O[F]=k.slice(0,L),k=k.slice(L+z[2])):(O[F]=k.slice(L),k=k.slice(0,L)))):(L=E.exec(k))&&(O[F]=L[1],k=k.slice(0,L.index)),O[F]=O[F]||b&&z[3]&&w[F]||"",z[4]&&(O[F]=O[F].toLowerCase())}_&&(O.query=_(O.query)),b&&w.slashes&&O.pathname.charAt(0)!=="/"&&(O.pathname!==""||w.pathname!=="")&&(O.pathname=m(O.pathname,w.pathname)),O.pathname.charAt(0)!=="/"&&f(O.protocol)&&(O.pathname="/"+O.pathname),r(O.port,O.protocol)||(O.host=O.hostname,O.port=""),O.username=O.password="",O.auth&&(L=O.auth.indexOf(":"),~L?(O.username=O.auth.slice(0,L),O.username=encodeURIComponent(decodeURIComponent(O.username)),O.password=O.auth.slice(L+1),O.password=encodeURIComponent(decodeURIComponent(O.password))):O.username=encodeURIComponent(decodeURIComponent(O.auth)),O.auth=O.password?O.username+":"+O.password:O.username),O.origin=O.protocol!=="file:"&&f(O.protocol)&&O.host?O.protocol+"//"+O.host:"null",O.href=O.toString()}function C(k,w,_){var b=this;switch(k){case"query":typeof w=="string"&&w.length&&(w=(_||e.parse)(w)),b[k]=w;break;case"port":b[k]=w,r(w,b.protocol)?w&&(b.host=b.hostname+":"+w):(b.host=b.hostname,b[k]="");break;case"hostname":b[k]=w,b.port&&(w+=":"+b.port),b.host=w;break;case"host":b[k]=w,s.test(w)?(w=w.split(":"),b.port=w.pop(),b.hostname=w.join(":")):(b.hostname=w,b.port="");break;case"protocol":b.protocol=w.toLowerCase(),b.slashes=!_;break;case"pathname":case"hash":if(w){var R=k==="pathname"?"/":"#";b[k]=w.charAt(0)!==R?R+w:w}else b[k]=w;break;case"username":case"password":b[k]=encodeURIComponent(w);break;case"auth":var E=w.indexOf(":");~E?(b.username=w.slice(0,E),b.username=encodeURIComponent(decodeURIComponent(b.username)),b.password=w.slice(E+1),b.password=encodeURIComponent(decodeURIComponent(b.password))):b.username=encodeURIComponent(decodeURIComponent(w))}for(var z=0;z<c.length;z++){var L=c[z];L[4]&&(b[L[1]]=b[L[1]].toLowerCase())}return b.auth=b.password?b.username+":"+b.password:b.username,b.origin=b.protocol!=="file:"&&f(b.protocol)&&b.host?b.protocol+"//"+b.host:"null",b.href=b.toString(),b}function T(k){(!k||typeof k!="function")&&(k=e.stringify);var w,_=this,b=_.host,R=_.protocol;R&&R.charAt(R.length-1)!==":"&&(R+=":");var E=R+(_.protocol&&_.slashes||f(_.protocol)?"//":"");return _.username?(E+=_.username,_.password&&(E+=":"+_.password),E+="@"):_.password?(E+=":"+_.password,E+="@"):_.protocol!=="file:"&&f(_.protocol)&&!b&&_.pathname!=="/"&&(E+="@"),(b[b.length-1]===":"||s.test(_.hostname)&&!_.port)&&(b+=":"),E+=b+_.pathname,w=typeof _.query=="object"?k(_.query):_.query,w&&(E+=w.charAt(0)!=="?"?"?"+w:w),_.hash&&(E+=_.hash),E}return v.prototype={set:C,toString:T},v.extractProtocol=S,v.location=u,v.trimLeft=l,v.qs=e,Bt=v,Bt}var xn=mn();const bn=fn(xn);function vn(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function ti(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ti=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(x,h,g){x[h]=g.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function c(x,h,g){return Object.defineProperty(x,h,{value:g,enumerable:!0,configurable:!0,writable:!0}),x[h]}try{c({},"")}catch{c=function(g,P,U){return g[P]=U}}function p(x,h,g,P){var U=h&&h.prototype instanceof T?h:T,$=Object.create(U.prototype),I=new V(P||[]);return o($,"_invoke",{value:F(x,g,I)}),$}function u(x,h,g){try{return{type:"normal",arg:x.call(h,g)}}catch(P){return{type:"throw",arg:P}}}e.wrap=p;var f="suspendedStart",S="suspendedYield",m="executing",v="completed",C={};function T(){}function k(){}function w(){}var _={};c(_,n,function(){return this});var b=Object.getPrototypeOf,R=b&&b(b(de([])));R&&R!==t&&i.call(R,n)&&(_=R);var E=w.prototype=T.prototype=Object.create(_);function z(x){["next","throw","return"].forEach(function(h){c(x,h,function(g){return this._invoke(h,g)})})}function L(x,h){function g(U,$,I,B){var N=u(x[U],x,$);if(N.type!=="throw"){var J=N.arg,Q=J.value;return Q&&Ce(Q)=="object"&&i.call(Q,"__await")?h.resolve(Q.__await).then(function(re){g("next",re,I,B)},function(re){g("throw",re,I,B)}):h.resolve(Q).then(function(re){J.value=re,I(J)},function(re){return g("throw",re,I,B)})}B(N.arg)}var P;o(this,"_invoke",{value:function($,I){function B(){return new h(function(N,J){g($,I,N,J)})}return P=P?P.then(B,B):B()}})}function F(x,h,g){var P=f;return function(U,$){if(P===m)throw Error("Generator is already running");if(P===v){if(U==="throw")throw $;return{value:r,done:!0}}for(g.method=U,g.arg=$;;){var I=g.delegate;if(I){var B=X(I,g);if(B){if(B===C)continue;return B}}if(g.method==="next")g.sent=g._sent=g.arg;else if(g.method==="throw"){if(P===f)throw P=v,g.arg;g.dispatchException(g.arg)}else g.method==="return"&&g.abrupt("return",g.arg);P=m;var N=u(x,h,g);if(N.type==="normal"){if(P=g.done?v:S,N.arg===C)continue;return{value:N.arg,done:g.done}}N.type==="throw"&&(P=v,g.method="throw",g.arg=N.arg)}}}function X(x,h){var g=h.method,P=x.iterator[g];if(P===r)return h.delegate=null,g==="throw"&&x.iterator.return&&(h.method="return",h.arg=r,X(x,h),h.method==="throw")||g!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+g+"' method")),C;var U=u(P,x.iterator,h.arg);if(U.type==="throw")return h.method="throw",h.arg=U.arg,h.delegate=null,C;var $=U.arg;return $?$.done?(h[x.resultName]=$.value,h.next=x.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,C):$:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,C)}function ae(x){var h={tryLoc:x[0]};1 in x&&(h.catchLoc=x[1]),2 in x&&(h.finallyLoc=x[2],h.afterLoc=x[3]),this.tryEntries.push(h)}function O(x){var h=x.completion||{};h.type="normal",delete h.arg,x.completion=h}function V(x){this.tryEntries=[{tryLoc:"root"}],x.forEach(ae,this),this.reset(!0)}function de(x){if(x||x===""){var h=x[n];if(h)return h.call(x);if(typeof x.next=="function")return x;if(!isNaN(x.length)){var g=-1,P=function U(){for(;++g<x.length;)if(i.call(x,g))return U.value=x[g],U.done=!1,U;return U.value=r,U.done=!0,U};return P.next=P}}throw new TypeError(Ce(x)+" is not iterable")}return k.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:k,configurable:!0}),k.displayName=c(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(x){var h=typeof x=="function"&&x.constructor;return!!h&&(h===k||(h.displayName||h.name)==="GeneratorFunction")},e.mark=function(x){return Object.setPrototypeOf?Object.setPrototypeOf(x,w):(x.__proto__=w,c(x,l,"GeneratorFunction")),x.prototype=Object.create(E),x},e.awrap=function(x){return{__await:x}},z(L.prototype),c(L.prototype,a,function(){return this}),e.AsyncIterator=L,e.async=function(x,h,g,P,U){U===void 0&&(U=Promise);var $=new L(p(x,h,g,P),U);return e.isGeneratorFunction(h)?$:$.next().then(function(I){return I.done?I.value:$.next()})},z(E),c(E,l,"Generator"),c(E,n,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),e.keys=function(x){var h=Object(x),g=[];for(var P in h)g.push(P);return g.reverse(),function U(){for(;g.length;){var $=g.pop();if($ in h)return U.value=$,U.done=!1,U}return U.done=!0,U}},e.values=de,V.prototype={constructor:V,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!h)for(var g in this)g.charAt(0)==="t"&&i.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=r)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var g=this;function P(J,Q){return I.type="throw",I.arg=h,g.next=J,Q&&(g.method="next",g.arg=r),!!Q}for(var U=this.tryEntries.length-1;U>=0;--U){var $=this.tryEntries[U],I=$.completion;if($.tryLoc==="root")return P("end");if($.tryLoc<=this.prev){var B=i.call($,"catchLoc"),N=i.call($,"finallyLoc");if(B&&N){if(this.prev<$.catchLoc)return P($.catchLoc,!0);if(this.prev<$.finallyLoc)return P($.finallyLoc)}else if(B){if(this.prev<$.catchLoc)return P($.catchLoc,!0)}else{if(!N)throw Error("try statement without catch or finally");if(this.prev<$.finallyLoc)return P($.finallyLoc)}}}},abrupt:function(h,g){for(var P=this.tryEntries.length-1;P>=0;--P){var U=this.tryEntries[P];if(U.tryLoc<=this.prev&&i.call(U,"finallyLoc")&&this.prev<U.finallyLoc){var $=U;break}}$&&(h==="break"||h==="continue")&&$.tryLoc<=g&&g<=$.finallyLoc&&($=null);var I=$?$.completion:{};return I.type=h,I.arg=g,$?(this.method="next",this.next=$.finallyLoc,C):this.complete(I)},complete:function(h,g){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&g&&(this.next=g),C},finish:function(h){for(var g=this.tryEntries.length-1;g>=0;--g){var P=this.tryEntries[g];if(P.finallyLoc===h)return this.complete(P.completion,P.afterLoc),O(P),C}},catch:function(h){for(var g=this.tryEntries.length-1;g>=0;--g){var P=this.tryEntries[g];if(P.tryLoc===h){var U=P.completion;if(U.type==="throw"){var $=U.arg;O(P)}return $}}throw Error("illegal catch attempt")},delegateYield:function(h,g,P){return this.delegate={iterator:de(h),resultName:g,nextLoc:P},this.method==="next"&&(this.arg=r),C}},e}function ur(r,e,t,i,o,s,n){try{var a=r[s](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,o)}function yn(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(l){ur(s,i,o,n,a,"next",l)}function a(l){ur(s,i,o,n,a,"throw",l)}n(void 0)})}}function mo(r,e){return kn(r)||_n(r,e)||xo(r,e)||wn()}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _n(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,o,s,n,a=[],l=!0,c=!1;try{if(s=(t=t.call(r)).next,e!==0)for(;!(l=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(p){c=!0,o=p}finally{try{if(!l&&t.return!=null&&(n=t.return(),Object(n)!==n))return}finally{if(c)throw o}}return a}}function kn(r){if(Array.isArray(r))return r}function Ce(r){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(r)}function Sn(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=xo(r))||e){t&&(r=t);var i=0,o=function(){};return{s:o,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(c){throw c},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,n=!1,a;return{s:function(){t=t.call(r)},n:function(){var c=t.next();return s=c.done,c},e:function(c){n=!0,a=c},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(n)throw a}}}}function xo(r,e){if(r){if(typeof r=="string")return fr(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return fr(r,e)}}function fr(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function hr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Fe(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hr(Object(t),!0).forEach(function(i){$n(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):hr(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function $n(r,e,t){return e=bo(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Cn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function gr(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,bo(i.key),i)}}function Pn(r,e,t){return e&&gr(r.prototype,e),t&&gr(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function bo(r){var e=En(r,"string");return Ce(e)=="symbol"?e:e+""}function En(r,e){if(Ce(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ce(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var xt="tus-v1",bt="ietf-draft-03",Ge="ietf-draft-05",Un={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:vo,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:xt},St=(function(){function r(e,t){Cn(this,r),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Pn(r,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![xt,bt,Ge].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var s=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];s<n.length;s++){var a=n[s];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,s=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:On(this._source.size,n);this._parallelUploadUrls&&a.forEach(function(p,u){p.uploadUrl=i._parallelUploadUrls[u]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(p,u){var f=0;return i._source.slice(p.start,p.end).then(function(S){var m=S.value;return new Promise(function(v,C){var T=Fe(Fe({},i.options),{},{uploadUrl:p.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Fe(Fe({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:v,onError:C,onProgress:function(_){s=s-f+_,f=_,i._emitProgress(s,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[u]=k.url,i._parallelUploadUrls.filter(function(_){return!!_}).length===a.length&&i._saveUploadInUrlStorage()}}),k=new r(m,T);k.start(),i._parallelUploads.push(k)})})}),c;Promise.all(l).then(function(){c=i._openRequest("POST",i.options.endpoint),c.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var p=mr(i.options.metadata);return p!==""&&c.setHeader("Upload-Metadata",p),i._sendRequest(c,null)}).then(function(p){if(!ze(p.getStatus(),200)){i._emitHttpError(c,p,"tus: unexpected response while creating upload");return}var u=p.getHeader("Location");if(u==null){i._emitHttpError(c,p,"tus: invalid or missing Location header");return}i.url=yr(i.options.endpoint,u),"Created upload at ".concat(i.url),i._emitSuccess(p)}).catch(function(p){i._emitError(p)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var o=Sn(this._parallelUploads),s;try{for(o.s();!(s=o.n()).done;){var n=s.value;n.abort(t)}}catch(a){o.e(a)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():r.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,o,s){this._emitError(new Ke(o,s,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),vr(t,this._retryAttempt,this.options)){var s=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},s);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=mr(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var s;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,s=this._addChunkToRequest(i)):((this.options.protocol===bt||this.options.protocol===Ge)&&i.setHeader("Upload-Complete","?0"),s=this._sendRequest(i,null)),s.then(function(n){if(!ze(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while creating upload");return}var a=n.getHeader("Location");if(a==null){t._emitHttpError(i,n,"tus: invalid or missing Location header");return}if(t.url=yr(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(n),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,n):(t._offset=0,t._performUpload())})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(s){var n=s.getStatus();if(!ze(n,200)){if(n===423){t._emitHttpError(i,s,"tus: upload is currently locked; retry later");return}if(ze(n,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,s,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(s.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,s,"tus: invalid or missing offset value");return}var l=Number.parseInt(s.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===xt){t._emitHttpError(i,s,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(s);return}t._offset=a,t._performUpload()})}).catch(function(s){t._emitHttpError(i,null,"tus: failed to resume upload",s)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(s){if(!ze(s.getStatus(),200)){t._emitHttpError(i,s,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,s)}).catch(function(s){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),s)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,o=this._offset,s=this._offset+this.options.chunkSize;return t.setProgressHandler(function(n){i._emitProgress(o+n,i._size)}),this.options.protocol===xt?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Ge&&t.setHeader("Content-Type","application/partial-upload"),(s===Number.POSITIVE_INFINITY||s>this._size)&&!this.options.uploadLengthDeferred&&(s=this._size),this._source.slice(o,s).then(function(n){var a=n.value,l=n.done,c=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+c,t.setHeader("Upload-Length","".concat(i._size)));var p=i._offset+c;return!i.options.uploadLengthDeferred&&l&&p!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(p," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===bt||i.options.protocol===Ge)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var o=xr(t,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return br(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=xr("DELETE",t,i);return br(o,null,i).then(function(s){if(s.getStatus()!==204)throw new Ke("tus: unexpected response while terminating upload",null,o,s)}).catch(function(s){if(s instanceof Ke||(s=new Ke("tus: failed to terminate upload",s,o,null)),!vr(s,0,i))throw s;var n=i.retryDelays[0],a=i.retryDelays.slice(1),l=Fe(Fe({},i),{},{retryDelays:a});return new Promise(function(c){return setTimeout(c,n)}).then(function(){return r.terminate(t,l)})})}}])})();function mr(r){return Object.entries(r).map(function(e){var t=mo(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(un.encode(String(o)))}).join(",")}function ze(r,e){return r>=e&&r<e+100}function xr(r,e,t){var i=t.httpStack.createRequest(r,e);t.protocol===bt?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Ge?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},s=0,n=Object.entries(o);s<n.length;s++){var a=mo(n[s],2),l=a[0],c=a[1];i.setHeader(l,c)}if(t.addRequestId){var p=vn();i.setHeader("X-Request-ID",p)}return i}function br(r,e,t){return ii.apply(this,arguments)}function ii(){return ii=yn(ti().mark(function r(e,t,i){var o;return ti().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof i.onBeforeRequest!="function"){n.next=3;break}return n.next=3,i.onBeforeRequest(e);case 3:return n.next=5,e.send(t);case 5:if(o=n.sent,typeof i.onAfterResponse!="function"){n.next=9;break}return n.next=9,i.onAfterResponse(e,o);case 9:return n.abrupt("return",o);case 10:case"end":return n.stop()}},r)})),ii.apply(this,arguments)}function Rn(){var r=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(r=!1),r}function vr(r,e,t){return t.retryDelays==null||e>=t.retryDelays.length||r.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(r,e,t):vo(r)}function vo(r){var e=r.originalResponse?r.originalResponse.getStatus():0;return(!ze(e,400)||e===409||e===423)&&Rn()}function yr(r,e){return new bn(e,r).toString()}function On(r,e){for(var t=Math.floor(r/e),i=[],o=0;o<e;o++)i.push({start:t*o,end:t*(o+1)});return i[e-1].end=r,i}St.defaultOptions=Un;var yo=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Fn(r){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var o=i.response;e(o)},i.onerror=function(o){t(o)},i.open("GET",r),i.send()})}var Tn=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Ln(r){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var o=new Uint8Array(i.result);e({value:o})},i.onerror=function(o){t(o)},i.readAsArrayBuffer(r)})}function tt(r){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tt(r)}function zn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function In(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,jn(i.key),i)}}function An(r,e,t){return e&&In(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function jn(r){var e=Dn(r,"string");return tt(e)=="symbol"?e:e+""}function Dn(r,e){if(tt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(tt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var wr=(function(){function r(e){zn(this,r),this._file=e,this.size=e.size}return An(r,[{key:"slice",value:function(t,i){if(Tn())return Ln(this._file.slice(t,i));var o=this._file.slice(t,i),s=i>=this.size;return Promise.resolve({value:o,done:s})}},{key:"close",value:function(){}}])})();function it(r){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(r)}function Mn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Bn(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Hn(i.key),i)}}function Nn(r,e,t){return e&&Bn(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Hn(r){var e=qn(r,"string");return it(e)=="symbol"?e:e+""}function qn(r,e){if(it(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(it(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function _r(r){return r===void 0?0:r.size!==void 0?r.size:r.length}function Vn(r,e){if(r.concat)return r.concat(e);if(r instanceof Blob)return new Blob([r,e],{type:r.type});if(r.set){var t=new r.constructor(r.length+e.length);return t.set(r),t.set(e,r.length),t}throw new Error("Unknown data type")}var Kn=(function(){function r(e){Mn(this,r),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return Nn(r,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var o=this,s=i<=this._bufferOffset+_r(this._buffer);if(this._done||s){var n=this._getDataFromBuffer(t,i),a=n==null?this._done:!1;return Promise.resolve({value:n,done:a})}return this._reader.read().then(function(l){var c=l.value,p=l.done;return p?o._done=!0:o._buffer===void 0?o._buffer=c:o._buffer=Vn(o._buffer,c),o._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=_r(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function Pe(r){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(r)}function ri(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ri=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(x,h,g){x[h]=g.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function c(x,h,g){return Object.defineProperty(x,h,{value:g,enumerable:!0,configurable:!0,writable:!0}),x[h]}try{c({},"")}catch{c=function(g,P,U){return g[P]=U}}function p(x,h,g,P){var U=h&&h.prototype instanceof T?h:T,$=Object.create(U.prototype),I=new V(P||[]);return o($,"_invoke",{value:F(x,g,I)}),$}function u(x,h,g){try{return{type:"normal",arg:x.call(h,g)}}catch(P){return{type:"throw",arg:P}}}e.wrap=p;var f="suspendedStart",S="suspendedYield",m="executing",v="completed",C={};function T(){}function k(){}function w(){}var _={};c(_,n,function(){return this});var b=Object.getPrototypeOf,R=b&&b(b(de([])));R&&R!==t&&i.call(R,n)&&(_=R);var E=w.prototype=T.prototype=Object.create(_);function z(x){["next","throw","return"].forEach(function(h){c(x,h,function(g){return this._invoke(h,g)})})}function L(x,h){function g(U,$,I,B){var N=u(x[U],x,$);if(N.type!=="throw"){var J=N.arg,Q=J.value;return Q&&Pe(Q)=="object"&&i.call(Q,"__await")?h.resolve(Q.__await).then(function(re){g("next",re,I,B)},function(re){g("throw",re,I,B)}):h.resolve(Q).then(function(re){J.value=re,I(J)},function(re){return g("throw",re,I,B)})}B(N.arg)}var P;o(this,"_invoke",{value:function($,I){function B(){return new h(function(N,J){g($,I,N,J)})}return P=P?P.then(B,B):B()}})}function F(x,h,g){var P=f;return function(U,$){if(P===m)throw Error("Generator is already running");if(P===v){if(U==="throw")throw $;return{value:r,done:!0}}for(g.method=U,g.arg=$;;){var I=g.delegate;if(I){var B=X(I,g);if(B){if(B===C)continue;return B}}if(g.method==="next")g.sent=g._sent=g.arg;else if(g.method==="throw"){if(P===f)throw P=v,g.arg;g.dispatchException(g.arg)}else g.method==="return"&&g.abrupt("return",g.arg);P=m;var N=u(x,h,g);if(N.type==="normal"){if(P=g.done?v:S,N.arg===C)continue;return{value:N.arg,done:g.done}}N.type==="throw"&&(P=v,g.method="throw",g.arg=N.arg)}}}function X(x,h){var g=h.method,P=x.iterator[g];if(P===r)return h.delegate=null,g==="throw"&&x.iterator.return&&(h.method="return",h.arg=r,X(x,h),h.method==="throw")||g!=="return"&&(h.method="throw",h.arg=new TypeError("The iterator does not provide a '"+g+"' method")),C;var U=u(P,x.iterator,h.arg);if(U.type==="throw")return h.method="throw",h.arg=U.arg,h.delegate=null,C;var $=U.arg;return $?$.done?(h[x.resultName]=$.value,h.next=x.nextLoc,h.method!=="return"&&(h.method="next",h.arg=r),h.delegate=null,C):$:(h.method="throw",h.arg=new TypeError("iterator result is not an object"),h.delegate=null,C)}function ae(x){var h={tryLoc:x[0]};1 in x&&(h.catchLoc=x[1]),2 in x&&(h.finallyLoc=x[2],h.afterLoc=x[3]),this.tryEntries.push(h)}function O(x){var h=x.completion||{};h.type="normal",delete h.arg,x.completion=h}function V(x){this.tryEntries=[{tryLoc:"root"}],x.forEach(ae,this),this.reset(!0)}function de(x){if(x||x===""){var h=x[n];if(h)return h.call(x);if(typeof x.next=="function")return x;if(!isNaN(x.length)){var g=-1,P=function U(){for(;++g<x.length;)if(i.call(x,g))return U.value=x[g],U.done=!1,U;return U.value=r,U.done=!0,U};return P.next=P}}throw new TypeError(Pe(x)+" is not iterable")}return k.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:k,configurable:!0}),k.displayName=c(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(x){var h=typeof x=="function"&&x.constructor;return!!h&&(h===k||(h.displayName||h.name)==="GeneratorFunction")},e.mark=function(x){return Object.setPrototypeOf?Object.setPrototypeOf(x,w):(x.__proto__=w,c(x,l,"GeneratorFunction")),x.prototype=Object.create(E),x},e.awrap=function(x){return{__await:x}},z(L.prototype),c(L.prototype,a,function(){return this}),e.AsyncIterator=L,e.async=function(x,h,g,P,U){U===void 0&&(U=Promise);var $=new L(p(x,h,g,P),U);return e.isGeneratorFunction(h)?$:$.next().then(function(I){return I.done?I.value:$.next()})},z(E),c(E,l,"Generator"),c(E,n,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),e.keys=function(x){var h=Object(x),g=[];for(var P in h)g.push(P);return g.reverse(),function U(){for(;g.length;){var $=g.pop();if($ in h)return U.value=$,U.done=!1,U}return U.done=!0,U}},e.values=de,V.prototype={constructor:V,reset:function(h){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!h)for(var g in this)g.charAt(0)==="t"&&i.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=r)},stop:function(){this.done=!0;var h=this.tryEntries[0].completion;if(h.type==="throw")throw h.arg;return this.rval},dispatchException:function(h){if(this.done)throw h;var g=this;function P(J,Q){return I.type="throw",I.arg=h,g.next=J,Q&&(g.method="next",g.arg=r),!!Q}for(var U=this.tryEntries.length-1;U>=0;--U){var $=this.tryEntries[U],I=$.completion;if($.tryLoc==="root")return P("end");if($.tryLoc<=this.prev){var B=i.call($,"catchLoc"),N=i.call($,"finallyLoc");if(B&&N){if(this.prev<$.catchLoc)return P($.catchLoc,!0);if(this.prev<$.finallyLoc)return P($.finallyLoc)}else if(B){if(this.prev<$.catchLoc)return P($.catchLoc,!0)}else{if(!N)throw Error("try statement without catch or finally");if(this.prev<$.finallyLoc)return P($.finallyLoc)}}}},abrupt:function(h,g){for(var P=this.tryEntries.length-1;P>=0;--P){var U=this.tryEntries[P];if(U.tryLoc<=this.prev&&i.call(U,"finallyLoc")&&this.prev<U.finallyLoc){var $=U;break}}$&&(h==="break"||h==="continue")&&$.tryLoc<=g&&g<=$.finallyLoc&&($=null);var I=$?$.completion:{};return I.type=h,I.arg=g,$?(this.method="next",this.next=$.finallyLoc,C):this.complete(I)},complete:function(h,g){if(h.type==="throw")throw h.arg;return h.type==="break"||h.type==="continue"?this.next=h.arg:h.type==="return"?(this.rval=this.arg=h.arg,this.method="return",this.next="end"):h.type==="normal"&&g&&(this.next=g),C},finish:function(h){for(var g=this.tryEntries.length-1;g>=0;--g){var P=this.tryEntries[g];if(P.finallyLoc===h)return this.complete(P.completion,P.afterLoc),O(P),C}},catch:function(h){for(var g=this.tryEntries.length-1;g>=0;--g){var P=this.tryEntries[g];if(P.tryLoc===h){var U=P.completion;if(U.type==="throw"){var $=U.arg;O(P)}return $}}throw Error("illegal catch attempt")},delegateYield:function(h,g,P){return this.delegate={iterator:de(h),resultName:g,nextLoc:P},this.method==="next"&&(this.arg=r),C}},e}function kr(r,e,t,i,o,s,n){try{var a=r[s](n),l=a.value}catch(c){t(c);return}a.done?e(l):Promise.resolve(l).then(i,o)}function Yn(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var s=r.apply(e,t);function n(l){kr(s,i,o,n,a,"next",l)}function a(l){kr(s,i,o,n,a,"throw",l)}n(void 0)})}}function Gn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Wn(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Jn(i.key),i)}}function Xn(r,e,t){return e&&Wn(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Jn(r){var e=Zn(r,"string");return Pe(e)=="symbol"?e:e+""}function Zn(r,e){if(Pe(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Pe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Qn=(function(){function r(){Gn(this,r)}return Xn(r,[{key:"openFile",value:(function(){var e=Yn(ri().mark(function i(o,s){var n;return ri().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(yo()&&o&&typeof o.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Fn(o.uri);case 4:return n=l.sent,l.abrupt("return",new wr(n));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new wr(o)));case 13:if(typeof o.read!="function"){l.next=18;break}if(s=Number(s),Number.isFinite(s)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new Kn(o,s)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,o){return e.apply(this,arguments)}return t})()}])})();function ea(r,e){return yo()?Promise.resolve(ta(r,e)):Promise.resolve(["tus-br",r.name,r.type,r.size,r.lastModified,e.endpoint].join("-"))}function ta(r,e){var t=r.exif?ia(JSON.stringify(r.exif)):"noexif";return["tus-rn",r.name||"noname",r.size||"nosize",t,e.endpoint].join("/")}function ia(r){var e=0;if(r.length===0)return e;for(var t=0;t<r.length;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function rt(r){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rt(r)}function vi(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ra(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,oa(i.key),i)}}function yi(r,e,t){return e&&ra(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function oa(r){var e=sa(r,"string");return rt(e)=="symbol"?e:e+""}function sa(r,e){if(rt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(rt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var na=(function(){function r(){vi(this,r)}return yi(r,[{key:"createRequest",value:function(t,i){return new aa(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),aa=(function(){function r(e,t){vi(this,r),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return yi(r,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,s){t._xhr.onload=function(){o(new la(t._xhr))},t._xhr.onerror=function(n){s(n)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),la=(function(){function r(e){vi(this,r),this._xhr=e}return yi(r,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function ot(r){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(r)}function ca(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function da(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ua(i.key),i)}}function pa(r,e,t){return e&&da(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ua(r){var e=fa(r,"string");return ot(e)=="symbol"?e:e+""}function fa(r,e){if(ot(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(ot(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var oi=!1;try{oi="localStorage"in window;var Nt="tusSupport",Sr=localStorage.getItem(Nt);localStorage.setItem(Nt,Sr),Sr===null&&localStorage.removeItem(Nt)}catch(r){if(r.code===r.SECURITY_ERR||r.code===r.QUOTA_EXCEEDED_ERR)oi=!1;else throw r}var ha=oi,ga=(function(){function r(){ca(this,r)}return pa(r,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var o=Math.round(Math.random()*1e12),s="tus::".concat(t,"::").concat(o);return localStorage.setItem(s,JSON.stringify(i)),Promise.resolve(s)}},{key:"_findEntries",value:function(t){for(var i=[],o=0;o<localStorage.length;o++){var s=localStorage.key(o);if(s.indexOf(t)===0)try{var n=JSON.parse(localStorage.getItem(s));n.urlStorageKey=s,i.push(n)}catch{}}return i}}])})();function Me(r){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(r)}function ma(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function xa(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,_o(i.key),i)}}function ba(r,e,t){return t&&xa(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function va(r,e,t){return e=$t(e),ya(r,wo()?Reflect.construct(e,t||[],$t(r).constructor):e.apply(r,t))}function ya(r,e){if(e&&(Me(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wa(r)}function wa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wo(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wo=function(){return!!r})()}function $t(r){return $t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$t(r)}function _a(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&si(r,e)}function si(r,e){return si=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},si(r,e)}function $r(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Ie(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$r(Object(t),!0).forEach(function(i){ka(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):$r(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function ka(r,e,t){return e=_o(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _o(r){var e=Sa(r,"string");return Me(e)=="symbol"?e:e+""}function Sa(r,e){if(Me(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Me(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var Cr=Ie(Ie({},St.defaultOptions),{},{httpStack:new na,fileReader:new Qn,urlStorage:ha?new ga:new en,fingerprint:ea}),$a=(function(r){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ma(this,e),i=Ie(Ie({},Cr),i),va(this,e,[t,i])}return _a(e,r),ba(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=Ie(Ie({},Cr),o),St.terminate(i,o)}}])})(St);const Ca=10*1024*1024,Pa=5*1024*1024,Ea="https://eu-on-24001.connector.filerobot.com/files",Ua="https://eu-on-24001.connector.filerobot.com/json";function Ra(r,e){if(!e||!r.file)return!1;const t=e.sizeThreshold??Ca;return r.size>=t}function Oa(r,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),o=t.endpoint||Ea,s=t.jsonBase||Ua,n=t.chunkSize??Pa,a=t.resumable!==!1,l=t.parallelChunks??1,c=t.retryDelays??[0,1e3,3e3,5e3],p=i.split("/").pop()||"";let u=!1,f=!1,S=!1;const m={name:r.name,type:r.type,"filerobot-folder":e.folder};hi(r.product)&&(m.product=JSON.stringify(gi(r.product)));const v=async()=>`tus-${r.id}-${o}`,C=new $a(r.file,{endpoint:o,chunkSize:n,retryDelays:c,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:m,fingerprint:v,onBeforeRequest(b){const R=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[E,z]of Object.entries(R))b.setHeader(E,z);b.setHeader("X-Filerobot-Token",p)},onUploadUrlAvailable(){C.url&&e.onUploadUrlAvailable&&!S&&(S=!0,e.onUploadUrlAvailable(C.url))},onProgress(b,R){!f&&!u&&e.onProgress(b,R)},onSuccess(){var E;if(f)return;w();const b=C.url||"",R=(E=b.match(/files\/([^/?]+)/))==null?void 0:E[1];R?Ta(s,R,r.size).then(z=>{f||e.onComplete(nt(z)?ui(z,r):z)}).catch(z=>{f||e.onError(z)}):e.onComplete({status:"success",file:{uuid:"",name:r.name,extension:r.name.split(".").pop()||"",type:r.type,size:r.size,url:{public:b,cdn:b},meta:r.meta,tags:r.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(b){f||(w(),Fa(b)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(b instanceof Error?b:new Error(String(b))))},onShouldRetry(b,R,E){var L;const z=(L=b.originalResponse)==null?void 0:L.getStatus();return z===429?!0:!(z&&z>400&&z<500&&z!==409)}});let T=null,k=null;typeof window<"u"&&(T=()=>{var b;!u&&!f&&(u=!0,C.abort(!1),(b=e.onPause)==null||b.call(e))},k=()=>{var b;u&&!f&&(u=!1,C.start(),(b=e.onResume)==null||b.call(e))},window.addEventListener("offline",T),window.addEventListener("online",k));const w=()=>{T&&window.removeEventListener("offline",T),k&&window.removeEventListener("online",k)},_=()=>{try{C.start()}catch(b){w(),e.onError(b instanceof Error?b:new Error(String(b)))}};return a?C.findPreviousUploads().then(b=>{b.length>0&&!f&&C.resumeFromPreviousUpload(b[0]),f||_()}):_(),{abort(){f=!0,u=!1,w(),C.abort(!0)},pause(){!u&&!f&&(u=!0,C.abort(!1))},resume(){u&&!f&&(u=!1,C.start())},isPaused(){return u}}}function Fa(r){var e;if(r instanceof Ke){const t=(e=r.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:r.originalResponse==null&&r.causingError!=null}return!1}async function Ta(r,e,t){const i=`${r.replace(/\/+$/,"")}/${e}`,o=t>1e8?13e3:6e3,s=3;for(let n=0;n<=s;n++){n>0&&await new Promise(c=>setTimeout(c,o));const a=await fetch(i);if(a.status===404&&n<s)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(nt(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<s))throw new Error(l.msg||"File record not available after upload")}throw new Error("File record not available after upload")}const vt="_sfxRelativePath",Pr=8,La=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function za(r){return r?r.startsWith(".")?!0:La.has(r):!1}function Ft(r,e){if(e){try{Object.defineProperty(r,vt,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(r,vt,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{r[vt]=e}}}function ko(r){const e=r[vt];if(typeof e=="string"&&e)return e;const t=r.webkitRelativePath;if(typeof t=="string"&&t)return t;const i=r.relativePath;return typeof i=="string"?i:""}function Ia(r){if(!r)return"";const e=r.replace(/^\/+/,"").replace(/\/+$/,""),t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Aa(r,e){const t=(r??"").replace(/\/+$/,""),i=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return i?t?`${t}/${i}`:i:r??""}async function So(r){var n;const e=r.items;if(!(e&&e.length>0&&typeof e[0].webkitGetAsEntry=="function"))return{files:Array.from(r.files??[]),hadDirectories:!1};const i=[];let o=!1;for(const a of Array.from(e)){if(a.kind!=="file")continue;const l=(n=a.webkitGetAsEntry)==null?void 0:n.call(a);l&&(l.isDirectory&&(o=!0),i.push(l))}if(i.length===0)return{files:Array.from(r.files??[]),hadDirectories:!1};const s=[];return await $o(i,"",s),{files:s,hadDirectories:o}}async function $o(r,e,t){for(let i=0;i<r.length;i+=Pr){const o=r.slice(i,i+Pr);await Promise.all(o.map(s=>ja(s,e,t)))}}async function ja(r,e,t){try{if(r.isFile){const i=await Da(r);if(!i)return;const o=e?`${e}/${i.name}`:i.name;Ft(i,o),t.push(i);return}if(r.isDirectory){if(za(r.name))return;const i=e?`${e}/${r.name}`:r.name,o=await Ma(r);await $o(o,i,t)}}catch(i){console.warn("[sfx-uploader] folder traversal skipped an entry:",(r==null?void 0:r.name)??r,i)}}function Da(r){return new Promise(e=>{r.file(t=>e(t),()=>e(null))})}function Ma(r){return new Promise(e=>{const t=r.createReader(),i=[],o=()=>{t.readEntries(s=>{if(s.length===0){e(i);return}i.push(...s),o()},s=>{console.warn("[sfx-uploader] directory read failed for",r==null?void 0:r.name,s),e(i)})};o()})}class Co{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(G(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(G(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&G(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),G(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),G(this.store,e,{status:"uploading"})):G(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!ni(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),G(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())ni(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),G(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,o=t-i;if(o<=0)return;const n=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,o);for(const a of n){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),G(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var f,S;const t=(S=(f=this.config).resolveUploadParams)==null?void 0:S.call(f,e),i=!!t&&Object.keys(t).length>0,o=!i&&!e.remoteInfo&&!e.remoteUrl&&Ra(e,this.config.tusConfig);G(this.store,e.id,{status:"uploading",error:null,isTus:o});let s=0,n=Date.now(),a=0;const l=Aa(this.store.getState().targetFolder,e.relativeFolder),c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:l,extraParams:i?t:void 0,onComplete:m=>this.handleComplete(e.id,m),onError:m=>this.handleError(e.id,m)},p=(m,v)=>{const C=Date.now(),T=(C-n)/1e3;if(T>0){const w=(m-s)/T;a=a===0?w:.3*w+.7*a}s=m,n=C;const k=v>0?Math.min(m/v*100,100):0;G(this.store,e.id,{progress:k,bytesUploaded:m,speed:a}),this.updateTotalProgress()};let u;if(e.remoteInfo)u=Ds(e,{...c,onProgress:p});else if(e.remoteUrl){if(!this.config.companionUrl){G(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}u=Ms(e,{...c,onProgress:p,companionUrl:this.config.companionUrl,onMeta:m=>{G(this.store,e.id,{size:m.size,type:m.type||e.type})}})}else if(o){const m=Oa(e,{...c,onProgress:p,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:v=>{G(this.store,e.id,{tusUploadUrl:v})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,m),G(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,m),G(this.store,e.id,{status:"uploading"})}});u=m}else u=Us(e,{...c,onProgress:p});this.activeUploads.set(e.id,u)}handleComplete(e,t){var p,u,f,S,m,v,C,T,k,w;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),o=((p=i==null?void 0:i.previewUrl)==null?void 0:p.startsWith("blob:"))??!1,s=((f=(u=t.file)==null?void 0:u.url)==null?void 0:f.cdn)??((m=(S=t.file)==null?void 0:S.url)==null?void 0:m.cdn_permalink)??((C=(v=t.file)==null?void 0:v.url)==null?void 0:C.permalink)??null,n=s?((k=(T=this.config).transformPreviewUrl)==null?void 0:k.call(T,s))??s:null,a={status:"complete",progress:100,response:t,alreadyExisted:nt(t)};i&&n&&i.type.startsWith("image/")&&!o&&(a.previewUrl=n);const l=(w=t.file)==null?void 0:w.size,c=typeof l=="number"?l:l==null?void 0:l.bytes;typeof c=="number"&&(a.size=c),G(this.store,e,a),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,s=i.retryCount+1;if(s<=o.maxRetries){const n=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);G(this.store,e,{status:"retrying",error:t.message,retryCount:s});const a=setTimeout(()=>{this.retryTimers.delete(e),G(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else G(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,i=0,o=0,s=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,t+=a.size,i+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),s+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(o+=a.speed));this.store.setState({totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:n>0?Math.min(s/n,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function ni(r){return r==="queued"||r==="uploading"||r==="retrying"||r==="paused"}function Tt(r){return`https://api.filerobot.com/${r}`}async function Po(r,e){const t=`${Tt(r)}/key/${encodeURIComponent(e)}`,i=new AbortController,o=setTimeout(()=>i.abort(),3e4);try{const s=await fetch(t,{signal:i.signal});if(clearTimeout(o),!s.ok)throw new Error(`SASS key exchange failed (HTTP ${s.status})`);const n=await s.json();if(n.status==="error")throw new Error(`SASS key exchange failed: ${n.msg||"Unknown error"}`);return n.key}catch(s){throw clearTimeout(o),s instanceof DOMException&&s.name==="AbortError"?new Error("SASS key exchange timed out"):s}}function Ct(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}async function Eo(r){const e=Tt(r.container);if(r.mode==="security-template"){const t=await Po(r.container,r.securityTemplateId);return{apiBase:e,headers:Ct(r,t),sassKey:t}}return{apiBase:e,headers:Ct(r)}}const Ba="https://ai.scaleflex.com",Er=300,Na=.85,Ha=3e4;function Ur(r){return r==="low"?.6:r==="high"?.9:.75}async function qa(r,e){var o,s,n;if(r.file)return r.file;const t=r.previewUrl||((n=(s=(o=r.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn)||r.remoteUrl||"";if(!t)throw new Error("No image source for similarity check");const i=await fetch(t,{signal:e});if(!i.ok)throw new Error(`Failed to load image (HTTP ${i.status})`);return i.blob()}function Va(r){return`${(r||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function Ka(r){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(r);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,t)=>{const i=new Image,o=URL.createObjectURL(r);i.onload=()=>{e({source:i,width:i.naturalWidth,height:i.naturalHeight,close:()=>URL.revokeObjectURL(o)})},i.onerror=()=>{URL.revokeObjectURL(o),t(new Error("Image decode failed"))},i.src=o})}async function Ya(r){const e=await Ka(r);try{const t=e.width>Er?Er/e.width:1,i=Math.max(1,Math.round(e.width*t)),o=Math.max(1,Math.round(e.height*t)),s=document.createElement("canvas");s.width=i,s.height=o;const n=s.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,i,o),await new Promise((a,l)=>{s.toBlob(c=>c?a(c):l(new Error("Canvas toBlob failed")),"image/jpeg",Na)})}finally{e.close()}}async function Rr(r,e){var a,l;const t=new AbortController,i=setTimeout(()=>t.abort(),Ha),o=()=>t.abort();(a=e.signal)==null||a.addEventListener("abort",o);const s=t.signal,n=()=>{if(s.aborted)throw new DOMException("Aborted","AbortError")};try{n();const c=await qa(r,s);n();const p=await Ya(c);n();const f=`${(e.endpoint||Ba).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,S=new FormData;S.append("file",p,Va(r.name));const m=await fetch(f,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:S,signal:s});if(!m.ok)throw new Error(`Similarity check failed (HTTP ${m.status})`);const v=await m.json();if(v.status==="error")throw new Error(`Similarity check failed: ${v.msg||"Unknown error"}`);return(v.similar_assets??[]).map(([C,T,k])=>({uuid:C,score:T,url:k}))}finally{clearTimeout(i),(l=e.signal)==null||l.removeEventListener("abort",o)}}const Pt="sfx-uploader:last-upload:",Uo=1;function Ga(r){var s,n,a,l,c,p,u,f,S;const{file:e,previewUrl:t,...i}=r;let o=null;return r.status==="complete"&&(r.previewUrl&&!r.previewUrl.startsWith("blob:")?o=r.previewUrl:o=((a=(n=(s=r.response)==null?void 0:s.file)==null?void 0:n.url)==null?void 0:a.permalink)??((p=(c=(l=r.response)==null?void 0:l.file)==null?void 0:c.url)==null?void 0:p.cdn_permalink)??((S=(f=(u=r.response)==null?void 0:u.file)==null?void 0:f.url)==null?void 0:S.cdn)??null),{...i,previewUrl:o}}function Wa(r){try{const e=sessionStorage.getItem(Pt+r);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==Uo?null:t}catch{return null}}function Xa(r,e){try{sessionStorage.setItem(Pt+r,JSON.stringify(e))}catch{}}const Ve={save(r,e){if(e.length===0){this.clear(r);return}const t={__schemaVersion:Uo,savedAt:Date.now(),files:e.map(Ga)};Xa(r,t)},load(r){const e=Wa(r);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(r){try{return sessionStorage.getItem(Pt+r)!=null}catch{return!1}},clear(r){try{sessionStorage.removeItem(Pt+r)}catch{}}},j={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let Ja=0;function Te(){return`file-${Date.now()}-${++Ja}`}function be(r){if(!Number.isFinite(r)||r<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(r)/Math.log(1024)),e.length-1),i=r/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function Ht(r){if(!isFinite(r)||r<=0)return"0s";const e=Math.round(r);if(e<60)return`${e}s`;const t=Math.floor(e/60);if(t>99){const o=Math.floor(t/60),s=t%60;return s>0?`${o}h ${s}m`:`${o}h`}const i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function le(r){var t;const e=((t=r.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return r.type.startsWith("image/")?"image":r.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":r.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":r.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function Za(r){const e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toUpperCase():""}const Qa=new Set([".ds_store","thumbs.db","desktop.ini"]);function qt(r){const e=(r.split(/[\\/]/).pop()??r).toLowerCase();return e.startsWith(".ds_store")?!0:Qa.has(e)}const el="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Ro={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function ai(r){const e=r==="_default"?"GENERIC":r.toUpperCase();return`${el}${e}.svg?vh=${Ro[r]}`}function wi(r){const e=(r==null?void 0:r.toLowerCase().replaceAll(".",""))||"";return e in Ro?ai(e):ai("_default")}function _i(){return ai("_default")}const tl={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Or(r){var t;const e=((t=r.split(".").pop())==null?void 0:t.toLowerCase())??"";return tl[e]||""}function me(r){return r==="image/heic"||r==="image/heif"}function il(r){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(r);let o=!1;const s=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=t.videoWidth||320,n.height=t.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(t,0,0,n.width,n.height),n.toBlob(l=>{o||(o=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),t.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function rl(r){return typeof r=="string"&&r.startsWith("Maximum ")&&r.includes("files allowed")}function Vt(r,e,t){var i,o;if(e.maxFileSize!=null&&r.size>0&&r.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&r.size>0){let s=r.size;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&(s+=n.size);if(s>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let s=0;for(const n of t.values())n.status!=="rejected"&&n.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,n="."+(((i=r.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!s.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type not allowed"}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,n="."+(((o=r.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(s.some(l=>l.startsWith(".")?n===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type is blocked"}return null}function Fr(r){return r.allowedFileTypes?r.allowedFileTypes.join(","):""}const Tr={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function Oo(r){return r.filter(e=>e in Tr).map(e=>Tr[e])}function ve(r){return r.brandStyle?d.html`<span
    class=${jo.classMap({"brand-ico":!0,"brand-ico--transparent":r.brandStyle.background==="transparent"})}
    ${W(r.brandStyle)}
  >${Di.unsafeHTML(r.brandHtml)}</span>`:Di.unsafeHTML(r.brandHtml)}var ol=Object.defineProperty,Fo=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&ol(e,t,o),o};const sl='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',nl='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',al='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',ll='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Ae=[{id:"device",labelKey:"myDevice",label:"My Device",icon:sl,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:nl,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:al,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:ll,iconColor:"#ea580c"}],Ei=class Ei extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.sources=Ae}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return d.html`
      ${this.sources.map(e=>d.html`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ve(e):d.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${xe.unsafeSVG(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Ei.styles=d.css`
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
  `;let st=Ei;Fo([y.property({attribute:!1})],st.prototype,"t");Fo([y.property({type:Array})],st.prototype,"sources");const li={LANGUAGES:"FTYPE_LANGUAGES"};function cl(r,e){if(!r.regional_variants_group_uuid)return;const t=e==null?void 0:e.regionalFilters;return t&&r.regional_variants_group_uuid in t?t[r.regional_variants_group_uuid]:e==null?void 0:e.language}function dl(r,e,t,i){if(!r.regional_variants_group_uuid||!e)return;const o=e.find(a=>a.uuid===r.regional_variants_group_uuid);if(!o)return;const s=(t==null?void 0:t[o.uuid])??i,n=o.variants.find(a=>a.api_value===s);if(n)return`${o.label}: ${n.label}`}function pl(r,e){var i;const t={};for(const o of r??[]){if(!((i=o.variants)!=null&&i.length))continue;const s=o.type===li.LANGUAGES?ul(o.variants,e):void 0;t[o.uuid]=s??o.variants[0].api_value}return t}function ul(r,e){var n;if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];let o,s;for(const a of r){const l=(n=a.api_value)==null?void 0:n.toLowerCase();if(l){if(l===t)return a.api_value;!o&&l===i&&(o=a.api_value),!s&&l.split("-")[0]===i&&(s=a.api_value)}}return o??s}const To=new Set(["asset-attachments","attachments-assets","integer-list"]),fl=new Set(["face_matcher"]);function hl(r){return To.has(r)}function Lo(r){return To.has(r.type)||fl.has(r.ckey)}const Ee="product.ref",Ue="product.position",gl="__product__",ml=new Set([Ee,Ue]);function zo(r){return ml.has(r)}function Io(r){return r===Ee?"ref":r===Ue?"position":null}function xl(r){return[{key:Ee,ckey:Ee,uuid:"product-ref",title:r("productRefLabel","Product reference"),type:"text",placeholder:r("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:Ue,ckey:Ue,uuid:"product-position",title:r("productPositionLabel","Position"),type:"numeric",placeholder:r("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function bl(r){return{uuid:gl,isRoot:!1,name:r("productFieldsLabel","Product"),fields:xl(r)}}function vl(r,e){const t=bl(e);let i=-1;for(let l=0;l<r.groups.length;l++)r.groups[l].isRoot&&(i=l);const o=i+1,s=[...r.groups.slice(0,o),t,...r.groups.slice(o)],n=s.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...r,groups:s,fields:n,fieldsByKey:a}}function yl(r,e,t){var o;if((((o=t==null?void 0:t.requiredFields)==null?void 0:o.includes(r.ckey))||!!r.required)&&Et(e))return`${r.title} is required`;if(Et(e))return null;if(r.key===Ee)return typeof e!="string"||fi.test(e)?"Reference contains invalid characters":null;if(r.key===Ue){const s=Number(e);return!Number.isFinite(s)||!Number.isInteger(s)?"Position must be an integer":null}switch(r.type){case"numeric":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!Number.isInteger(s))return"Must be an integer";if(s<-1999999999||s>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(s<-999999999999e-2||s>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const s=e,n=s.latitude!==""&&s.latitude!=null,a=s.longitude!==""&&s.longitude!=null;if(n!==a)return"Both latitude and longitude are required";if(n&&a){const l=Number(s.latitude),c=Number(s.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(c)||c<-180||c>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const s=new URL(e);if(!["http:","https:"].includes(s.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(r.validation&&typeof e=="string")try{if(!new RegExp(r.validation).test(e))return"Value does not match expected format"}catch{}return null}function Et(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:typeof r=="object"?!Object.values(r).some(e=>e!=null&&e!==""):!r}const wl=new Set(["idle","queued","rejected"]);function Lt(r){return!Et(r)}function ki(r,e){var t;return Lo(r)?!1:(t=e==null?void 0:e.requiredFields)!=null&&t.includes(r.ckey)?!0:!!r.required}function Si(r){return[...r.values()].filter(e=>wl.has(e.status))}function $i(r,e){return r.fields.filter(t=>ki(t,e))}function _l(r,e,t){const i=Si(r);if(i.length===0)return{};const o={};for(const s of $i(e,t)){const n=i.filter(a=>!Lt(a.meta[s.key]));n.length>0&&(o[s.key]=n)}return o}function kl(r,e,t){const i=Si(r);if(i.length===0)return null;for(const o of $i(e,t))if(i.some(n=>!Lt(n.meta[o.key])))return o.key;return null}function Sl(r,e,t){var o;const i=r.get(e.id);return i&&i.has(t)?i.get(t):(o=e.meta)==null?void 0:o[t]}function $l(r,e,t,i){const o=new Set,s=Si(e);if(s.length===0)return o;for(const n of $i(t,i))s.some(l=>!Lt(Sl(r,l,n.key)))&&o.add(n.key);return o}function Cl(r,e){const t={...r};for(const i of Object.keys(e)){const o=e[i];if(o==null||o==="")continue;const s=r[i];if(Array.isArray(o))if(Array.isArray(s)){const n=new Set(s.map(l=>JSON.stringify(l))),a=[...s];for(const l of o){const c=JSON.stringify(l);n.has(c)||(n.add(c),a.push(l))}t[i]=a}else t[i]=o;else t[i]=o}return t}function Ao(r){let e=r;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var Pl=Object.defineProperty,se=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Pl(e,t,o),o};const Lr=3,ci=new CSSStyleSheet;ci.replaceSync(`
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
`);var ye;const ie=(ye=class extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Lr,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=e.dataTransfer;t&&So(t).then(({files:i,hadDirectories:o})=>{i.length>0?this._emitFiles(i,o):o&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&Ft(o,s)}i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var o;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const i=[];for(const s of t)if(s.kind==="file"){const n=s.getAsFile();n&&i.push(n)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(e="files"){var t,i;if(e==="folder"&&this.directory&&this.multi){(t=this.folderInput)==null||t.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e,t=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e,hadDirectories:t},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Ao(this).appendChild(this._portalContainer),this._injectDropdownStyles()),d.render(d.html`<div class="sfx-more-dropdown open">
          ${e.map(t=>d.html`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?ve(t):t.iconColor?d.html`<svg
                        viewBox="0 0 24 24"
                        ${W({color:t.iconColor})}
                      >
                        ${xe.unsafeSVG(t.icon)}
                      </svg>`:d.svg`<svg viewBox="0 0 24 24">${xe.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(d.render(d.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(ci)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,ci]))}_positionDropdown(){var u,f;const e=(u=this.shadowRoot)==null?void 0:u.querySelector(".more-wrap > button"),t=(f=this._portalContainer)==null?void 0:f.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=8,s=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=s+o||a>l?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=Lr}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const i=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=ye._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(d.render(d.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return d.html`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?ve(e):d.html`<span
              class="pill-ico"
              ${W(e.iconColor?{color:e.iconColor}:null)}
            >
              ${d.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${xe.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return d.html`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?d.html`<span class="card-ico">${ve(e)}</span>`:d.html`<span
              class="card-ico"
              ${W(e.iconColor?{color:e.iconColor}:null)}
            >
              ${d.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${xe.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return d.html`
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
    `}_renderMoreDropdown(){return d.html`
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
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return d.html`
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

          ${!this.compact&&this.directory&&this.multi?d.html`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${o=>{o.stopPropagation(),this.browse("folder")}}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:d.html`<div class="title">${this.t("dragAndDrop","Drag & Drop or click to")} <span>${this.t("browse","browse")}</span></div>`}
          ${!this.compact&&this.sources.length>0?d.html`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${this.sourcesLayout==="cards"?d.html`
                      <div class="sources-cards">
                        ${t.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():d.nothing}
                      </div>
                    `:d.html`
                      <div class="sources-grid">
                        ${t.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():d.nothing}
                      </div>
                    `}
              `:d.nothing}
          ${this.compact&&this.sources.length>0?d.html`
                <div class="sources-row">
                  ${this.sources.map(o=>d.html`
                      <button
                        class="src-ico"
                        ${W(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${s=>{s.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?ve(o):d.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${xe.unsafeSVG(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:d.nothing}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||d.nothing}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?d.html`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:d.nothing}
      </div>
    `}},ye.styles=d.css`
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
  `,ye._WIDE_THRESHOLD_PX=1200,ye);se([y.property({attribute:!1})],ie.prototype,"t");se([y.property({type:Boolean,reflect:!0})],ie.prototype,"compact");se([y.property({type:Boolean,attribute:"external-drag-over"})],ie.prototype,"externalDragOver");se([y.property({type:String})],ie.prototype,"accept");se([y.property({type:Boolean})],ie.prototype,"multi");se([y.property({type:Boolean})],ie.prototype,"directory");se([y.property({type:Array})],ie.prototype,"sources");se([y.property({type:String,attribute:"sources-layout"})],ie.prototype,"sourcesLayout");se([y.property({type:String,reflect:!0})],ie.prototype,"mode");se([y.state()],ie.prototype,"_dragOver");se([y.state()],ie.prototype,"_moreOpen");se([y.state()],ie.prototype,"_visiblePills");se([y.query(".ripple")],ie.prototype,"_rippleEl");se([y.query("input[data-sfx-dz-files]")],ie.prototype,"fileInput");se([y.query("input[data-sfx-dz-folder]")],ie.prototype,"folderInput");let El=ie;const Ui=class Ui extends d.LitElement{render(){return d.html`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};Ui.styles=d.css`
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
  `;let di=Ui;var Ul=Object.defineProperty,K=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ul(e,t,o),o};const pi=new CSSStyleSheet;pi.replaceSync(`
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
`);const Ri=class Ri extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const t=this.renderRoot.querySelector("input[data-sfx-fl-folder]");t==null||t.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&Ft(o,s)}i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Ao(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),d.render(d.html`<div class="sfx-tile-dropdown">
        ${e.map(t=>d.html`
          <button
            class="sfx-tile-dropdown-item"
            @click=${i=>this._onMoreSourceClick(i,t)}
          >
            <span class="sfx-tile-dropdown-ico" ${W(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}>
              ${t.brandHtml?ve(t):d.svg`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${xe.unsafeSVG(t.icon)}</svg>`}
            </span>
            ${t.labelKey?this.t(t.labelKey,t.label):t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var u;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=6,s=t.scrollHeight,n=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=s+o||a>l?t.style.top=`${i.top-s-o}px`:t.style.top=`${i.bottom+o}px`;let p=i.right-n;p=Math.max(8,Math.min(p,window.innerWidth-n-8)),t.style.left=`${p}px`}_closePortal(){this._portalContainer&&(d.render(d.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(pi)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,pi]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return d.html`
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
          ${this.directory&&this.multi?d.html`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:d.nothing}
          ${t.length>0?d.html`
            <div class="drop-tile-sources">
              ${t.map(o=>d.html`
                <button
                  class="drop-tile-src"
                  ${W(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                  title=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                  @click=${s=>this._onSourceClick(s,o)}
                >
                  ${o.brandHtml?ve(o):d.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${xe.unsafeSVG(o.icon)}</svg>`}
                </button>
              `)}
              ${i.length>0?d.html`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${o=>this._toggleMore(o)}>···</button>
                </div>
              `:d.nothing}
            </div>
          `:d.nothing}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept||d.nothing} @change=${this._onFileInput} />
        ${this.directory&&this.multi?d.html`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />`:d.nothing}
      </div>
    `}_onSelectAll(e){const t=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:t},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}render(){const e=this.searchRunIds.length,t=this.searchRunIds.filter(s=>this.searchResults.has(s)).length,i=e?Math.round(t/e*100):0,o=e>0&&t===e;return d.html`
      ${e>1&&!this.previewOpen?d.html`
            <div class="similar-banner search">
              ${o?d.html`<span class="search-done-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>`:d.html`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b>${o?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b>
                <span>${this.t("similarProgress","{{done}} of {{total}} done",{done:t,total:e})}</span>
                <div class="search-bar"><div class="search-bar-fill" ${W({width:`${i}%`})}></div></div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${o?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:d.nothing}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():d.nothing}
        ${Kt.repeat(this.files,s=>s.id,(s,n)=>{var a;return d.html`<sfx-file-item .t=${this.t} .file=${s} .mode=${this.mode} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} .showCheckSimilar=${this.showCheckSimilar} .selectMode=${this.selectMode} .isSelected=${this.selectedIds.has(s.id)} .selectionActive=${this.selectedIds.size>0} .selectionFull=${this.selectionFull} .previewOpen=${this.previewOpen} .similarStatus=${this._statusFor(s.id)} .similarCount=${((a=this.searchResults.get(s.id))==null?void 0:a.length)??-1} .similarResults=${this.searchResults.get(s.id)??[]} ${W({"--tile-index":String(n)})}></sfx-file-item>`})}
      </div>
    `}};Ri.styles=d.css`
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
  `;let H=Ri;K([y.property({attribute:!1})],H.prototype,"t");K([y.property({attribute:!1})],H.prototype,"files");K([y.property({type:Boolean})],H.prototype,"showDropTile");K([y.property({attribute:!1})],H.prototype,"sources");K([y.property({type:String})],H.prototype,"accept");K([y.property({type:Boolean})],H.prototype,"multi");K([y.property({type:Boolean})],H.prototype,"directory");K([y.property({type:String})],H.prototype,"mode");K([y.property({type:Boolean})],H.prototype,"showLocateButton");K([y.property({type:Boolean})],H.prototype,"showCopyCdnButton");K([y.property({type:Boolean})],H.prototype,"showCheckSimilar");K([y.property({type:Boolean})],H.prototype,"selectMode");K([y.property({attribute:!1})],H.prototype,"selectedIds");K([y.property({type:Boolean})],H.prototype,"allSelected");K([y.property({type:Boolean})],H.prototype,"selectionFull");K([y.property({type:Number})],H.prototype,"maxSelection");K([y.property({type:Boolean})],H.prototype,"previewOpen");K([y.property({attribute:!1})],H.prototype,"searchRunIds");K([y.property({attribute:!1})],H.prototype,"searchActiveIds");K([y.property({attribute:!1})],H.prototype,"searchResults");K([y.state()],H.prototype,"_moreOpen");K([y.state()],H.prototype,"_dropTileMaxVisible");var Rl=Object.defineProperty,Z=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Rl(e,t,o),o};const Oi=class Oi extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),t=240,i=280;let o=e.right+12;o+t>window.innerWidth-8&&(o=e.left-t-12),this._simPopLeft=Math.max(8,o),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-i-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this.style.zIndex="50",this._simPopover=!0},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this.style.zIndex=""}}updated(e){var t,i,o,s,n;if(e.has("file")){if(this._dims="",(i=(t=this.file)==null?void 0:t.previewUrl)!=null&&i.startsWith("blob:")){const a=this.file.previewUrl,l=new Image;l.onload=()=>{var c;((c=this.file)==null?void 0:c.previewUrl)===a&&(this._dims=`${l.naturalWidth}×${l.naturalHeight}`)},l.src=a}else if((n=(s=(o=this.file)==null?void 0:o.response)==null?void 0:s.file)!=null&&n.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this.file&&this._emit("check-similar-single",{file:this.file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){this._emit("similar-results-select",{fileId:this.file.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var i,o,s,n;e.stopPropagation();const t=(n=(s=(o=(i=this.file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:n.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var T,k;const e=this.file;if(!e)return d.nothing;const t=le(e),i=e.status==="complete",o=e.status==="uploading",s=e.status==="paused",n=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",c=Za(e.name),p=t==="image"&&!me(e.type),u=this.selectMode&&p&&!l,f=this.similarCount>=0,S=u&&!f&&this.similarStatus==="",m=!l&&!i&&!o&&!s&&!n&&e.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,v=m,C=["tile",i?"done":"",o?"uploading":"",s?"paused":"",a?"rejected":"",l?"review":"",S?"selectable":"",S&&this.isSelected?"selected":"",this.selectionActive&&!p&&!l?"select-dimmed":"",v?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return d.html`
      <div
        class=${C}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:S?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?d.html`<img class="preview-img" src=${e.previewUrl} alt="" />`:d.html`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${wi(c)}
                    alt="${c?`${c} file`:"File"}"
                    @error=${w=>{const _=w.target,b=_i();!_.dataset.fallback&&_.src!==b&&(_.dataset.fallback="1",_.src=b)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?d.html`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:d.nothing}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?d.html`
                  <span class="sim-result-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar","{{count}} similar",{count:this.similarCount})}
                  </span>
                `:d.html`<span class="sim-result-badge none">${this.t("noSimilar","No similar")}</span>`:d.nothing}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${S?d.html`
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
              `:d.nothing}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${m?d.html`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="cs-label">${this.t("details","Details")}</span>
                  </button>
                  ${this.similarCount>0?d.html`
                        <button class="check-similar-btn" @click=${this._openResults} @mouseenter=${this._simPopoverShow} @mouseleave=${this._simScheduleHide} aria-label=${this.t("viewSimilar","View similar assets")}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          <span class="cs-label">${this.t("viewNSimilar","View {{count}} similar",{count:this.similarCount})}</span>
                        </button>
                      `:this.similarCount===0?d.html`
                          <button class="check-similar-btn no-similar" @click=${this._openResults} aria-label=${this.t("noSimilarFound","No similar assets found")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                              <circle cx="11" cy="11" r="7"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <span class="cs-label">${this.t("noSimilar","No similar")}</span>
                          </button>
                        `:this.showCheckSimilar&&p?d.html`
                            <button class="check-similar-btn" @click=${this._checkSimilarSingle} aria-label=${this.t("checkSimilar","Check similar")}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <circle cx="11" cy="11" r="7"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              </svg>
                              <span class="cs-label">${this.t("checkSimilar","Check similar")}</span>
                            </button>
                          `:d.nothing}
                </div>
              `:d.nothing}

          <!-- Review-mode hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Both buttons fade in on tile hover, only for completed
               files with a response.file. Each inner button has its own
               gate — Locate needs uuid, Copy CDN needs url.cdn — so an
               already-existed-but-missing-uuid edge case won't render a
               dead button. -->
          ${l&&i&&((T=e.response)!=null&&T.file)&&(this.showLocateButton||this.showCopyCdnButton)?d.html`
                <div class="review-actions">
                  ${this.showLocateButton&&e.response.file.uuid?d.html`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate","Locate")}
                      </button>`:d.nothing}
                  ${this.showCopyCdnButton&&((k=e.response.file.url)!=null&&k.cdn)?d.html`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?d.html`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:d.html`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:d.nothing}
                </div>
              `:d.nothing}

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
          ${i?d.html`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:d.nothing}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&n?d.html`<div class="failed-badge" title=${e.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:d.nothing}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?d.html`
                <div class="progress">
                  <div class="progress-fill" ${W({transform:`scaleX(${Math.min(e.progress,100)/100})`})}></div>
                </div>
              `:d.nothing}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n||a)&&e.error&&!l?d.html`<div class="error-badge" title=${e.error}>${e.error}</div>`:d.nothing}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?d.html`<div class="exists-badge" title=${this.t("alreadyUploaded","Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:d.nothing}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?d.html`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:d.nothing}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l||this.reviewPick?d.nothing:d.html`
        <div class="actions">
          ${o&&e.isTus?d.html`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:d.nothing}
          ${s?d.html`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:d.nothing}
          ${n?d.html`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:d.nothing}
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
            ?readonly=${l||this.reviewPick}
            @change=${l||this.reviewPick?d.nothing:this._rename} @click=${w=>w.stopPropagation()} />
          <div class="meta">${c||""}${e.size?` · ${be(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
      ${this._renderSimPopover()}
    `}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return d.nothing;const e=[...this.similarResults].sort((l,c)=>c.score-l.score),t=e[0],i=e.length,o=e.slice(1),s=o.slice(0,3),n=o.length-s.length,a=Math.round(t.score*100);return d.html`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${W({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${t.url?d.html`<img src=${t.url} alt="" />`:d.nothing}
          <span class="pop-best ${t.score>=.9?"high":""}">${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span>
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${o.length?d.html`<div class="pop-thumbs">
                ${s.map(l=>d.html`<img src=${l.url} alt="" />`)}
                ${n>0?d.html`<span class="pop-more">+${n}</span>`:d.nothing}
              </div>`:d.html`<span></span>`}
          <span class="pop-open">
            ${i===1?this.t("open","Open"):this.t("openAllN","Open all {{count}}",{count:i})}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};Oi.styles=d.css`
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
  `;let Y=Oi;Z([y.property({attribute:!1})],Y.prototype,"t");Z([y.property({attribute:!1})],Y.prototype,"file");Z([y.property({type:String})],Y.prototype,"mode");Z([y.property({type:Boolean})],Y.prototype,"showLocateButton");Z([y.property({type:Boolean})],Y.prototype,"showCopyCdnButton");Z([y.property({type:Boolean})],Y.prototype,"showCheckSimilar");Z([y.property({type:Boolean})],Y.prototype,"selectMode");Z([y.property({type:Boolean})],Y.prototype,"isSelected");Z([y.property({type:Boolean})],Y.prototype,"selectionActive");Z([y.property({type:Boolean})],Y.prototype,"selectionFull");Z([y.property({type:Boolean})],Y.prototype,"previewOpen");Z([y.property({type:String})],Y.prototype,"similarStatus");Z([y.property({type:Number})],Y.prototype,"similarCount");Z([y.property({attribute:!1})],Y.prototype,"similarResults");Z([y.property({type:Boolean})],Y.prototype,"reviewPick");Z([y.state()],Y.prototype,"_dims");Z([y.state()],Y.prototype,"_simPopover");Z([y.state()],Y.prototype,"_copied");const lt=d.css`
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
`,ct=d.css`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Ol=Object.defineProperty,he=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ol(e,t,o),o};const zr=7,Fl=4,Fi=class Fi extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this.alreadyExistedCount=0,this.showMinimize=!1,this._maxThumbs=zr,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?Fl:zr;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}_minimize(){this.dispatchEvent(new CustomEvent("minimize-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),t=this.thumbnails.length-this._maxThumbs,i=this.fileCount>0,o=this.failedFiles.length>0,s=o&&!i,n=i&&!o&&this.alreadyExistedCount>=this.fileCount,a=this.fileCount-this.alreadyExistedCount;return d.html`
      ${this.showMinimize?d.html`<button class="minimize-btn" title=${this.t("minimizeAndContinue","Minimize & continue in background")} @click=${this._minimize}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>`:d.nothing}
      <button class="close-btn" title=${this.t("close","Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s?"error":o?"warning":n?"info":""}">
          ${s?d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:o?d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:n?d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>`:d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>`}
        </div>
        <div class="title">${s?this.t("uploadFailed","Upload failed"):o?this.t("partiallyUploaded","Partially uploaded"):n?this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):this.t("uploadedSuccessfullyCount",{count:a,defaultValue_one:"{{count}} file uploaded successfully!",defaultValue_other:"{{count}} files uploaded successfully!"})}</div>
        <div class="subtitle">${s?this.t("filesCouldNotBeUploaded",{count:this.failedFiles.length,defaultValue_one:"File could not be uploaded",defaultValue_other:"Files could not be uploaded"}):o?this.t("partialUploadSummary","{{uploaded}} uploaded, {{failed}} failed",{uploaded:a,failed:this.failedFiles.length}):n?this.t("alreadyInLibrarySubtitle",{count:this.alreadyExistedCount,defaultValue_one:"It’s ready to use — nothing new to upload",defaultValue_other:"They’re ready to use — nothing new to upload"}):this.t("allFilesReady","All files are ready for use")}</div>

        ${e.length>0?d.html`
              <div class="thumbs">
                ${e.map(l=>d.html`<img class="thumb" src=${l} alt="" />`)}
                ${t>0?d.html`<div class="thumb-more">+${t}</div>`:d.nothing}
              </div>
            `:d.nothing}

        ${i&&!n?d.html`<div class="summary">${this.t("uploadedSize","{{size}} uploaded",{size:be(this.totalSize)})}</div>`:d.nothing}

        ${this.alreadyExistedCount>0&&!n?d.html`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:d.nothing}

        ${o?d.html`
            <div class="failed-list">
              ${this.failedFiles.map(l=>d.html`
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
          `:d.nothing}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore","Upload more")}</button>
          ${i||o?d.html`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles","Review files ({{count}})",{count:this.fileCount+this.failedFiles.length})}</button>`:d.nothing}
          ${o?d.html`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll","Retry all ({{count}})",{count:this.failedFiles.length})}</button>`:d.nothing}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Fi.styles=[lt,ct,d.css`
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
  `];let ce=Fi;he([y.property({attribute:!1})],ce.prototype,"t");he([y.property({type:Number})],ce.prototype,"fileCount");he([y.property({type:Number})],ce.prototype,"totalSize");he([y.property({type:Array})],ce.prototype,"thumbnails");he([y.property({type:String})],ce.prototype,"primaryLabel");he([y.property({type:Array})],ce.prototype,"failedFiles");he([y.property({type:Number})],ce.prototype,"alreadyExistedCount");he([y.property({type:Boolean})],ce.prototype,"showMinimize");he([y.state()],ce.prototype,"_maxThumbs");var Tl=Object.defineProperty,dt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Tl(e,t,o),o};const Ti=class Ti extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return d.html`
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
          ${this._failedCount>0?d.html`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:d.nothing}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?d.html`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:d.html`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};Ti.styles=d.css`
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
  `;let we=Ti;dt([y.property({attribute:!1})],we.prototype,"t");dt([y.property({attribute:!1})],we.prototype,"files");dt([y.property({type:Boolean})],we.prototype,"showLocateButton");dt([y.property({type:Boolean})],we.prototype,"showCopyCdnButton");dt([y.state()],we.prototype,"_filter");customElements.define("sfx-last-upload-review",we);var Ll=Object.defineProperty,ne=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ll(e,t,o),o};const Li=class Li extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.completedCount=0,this.uploadProgress=0,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return this.selectMode?this._renderSelectToolbar():d.html`
      ${e?d.html`
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
                  ${W({width:`${this.uploadProgress}%`})}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files","files")}</span
              >
            </div>
          `:d.nothing}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?d.html`
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
              `:d.nothing}
          ${this.showCheckSimilar&&this.uploadState==="idle"?d.html`
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
              `:d.nothing}
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
          ${this.failedCount>0?d.html`
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
              `:d.nothing}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,t=this.maxSelection,i=t>0&&e>=t;return d.html`
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
          ${t>0?d.html`<span
                class="count-pill ${i?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:t})}
              >${e}/${t}</span>`:d.nothing}
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
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i=["btn-primary",t?"done-state":""].filter(Boolean).join(" "),o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return d.html`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?d.html`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?d.html`
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
            `:d.html`
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
    `}};Li.styles=[lt,ct,d.css`
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
    `];let te=Li;ne([y.property({attribute:!1})],te.prototype,"t");ne([y.property({type:String})],te.prototype,"uploadState");ne([y.property({type:Number})],te.prototype,"fileCount");ne([y.property({type:Number})],te.prototype,"totalSize");ne([y.property({type:Number})],te.prototype,"failedCount");ne([y.property({type:Boolean})],te.prototype,"showFillMetadata");ne([y.property({type:Boolean})],te.prototype,"requireMetadataFirst");ne([y.property({type:Number})],te.prototype,"completedCount");ne([y.property({type:Number})],te.prototype,"uploadProgress");ne([y.property({type:Boolean})],te.prototype,"showCheckSimilar");ne([y.property({type:Boolean})],te.prototype,"selectMode");ne([y.property({type:Number})],te.prototype,"selectedCount");ne([y.property({type:Number})],te.prototype,"maxSelection");ne([y.property({type:Boolean})],te.prototype,"allSelected");const zl='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function Ci(r,e){return t=>{if(t.key!=="Tab")return;const i=r();if(!i)return;const o=i.querySelector(e);if(!o)return;const s=Array.from(o.querySelectorAll(zl));if(s.length===0)return;const n=s[0],a=s[s.length-1],l=i.activeElement;t.shiftKey?(l===n||!o.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!o.contains(l))&&(t.preventDefault(),n.focus())}}var Il=Object.defineProperty,zt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Il(e,t,o),o};const zi=class zi extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=Ci(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return d.html`
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
            ${this._error?d.html`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};zi.styles=[lt,ct,d.css`
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

  `];let Re=zi;zt([y.property({attribute:!1})],Re.prototype,"t");zt([y.state()],Re.prototype,"_url");zt([y.state()],Re.prototype,"_name");zt([y.state()],Re.prototype,"_error");var Al=Object.defineProperty,pt=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Al(e,t,o),o};const Ii=class Ii extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Ci(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,s;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(s=this.shadowRoot)==null?void 0:s.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return d.html`
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
            ${this._error?d.html`<div class="error">${this._error}</div>`:this._captured?d.html`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
                    </div>
                  `:d.html`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Ii.styles=[lt,ct,d.css`
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
  `];let _e=Ii;pt([y.property({attribute:!1})],_e.prototype,"t");pt([y.state()],_e.prototype,"_stream");pt([y.state()],_e.prototype,"_error");pt([y.state()],_e.prototype,"_captured");pt([y.state()],_e.prototype,"_previewUrl");var jl=Object.defineProperty,He=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&jl(e,t,o),o};const Ai=class Ai extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Ci(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var s;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(s=this._stream)==null||s.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return d.html`
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
            ${this._error?d.html`<div class="error">${this._error}</div>`:this._recordedBlob?d.html`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?d.html`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
                      </div>
                    `:d.html`
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
    `}};Ai.styles=[lt,ct,d.css`
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
  `];let fe=Ai;He([y.property({attribute:!1})],fe.prototype,"t");He([y.state()],fe.prototype,"_stream");He([y.state()],fe.prototype,"_recording");He([y.state()],fe.prototype,"_error");He([y.state()],fe.prototype,"_recordedBlob");He([y.state()],fe.prototype,"_previewUrl");var Dl=Object.defineProperty,Pi=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Dl(e,t,o),o};const ji=class ji extends d.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?d.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?d.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:d.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?d.html``:d.html`
      <div class="toast-stack">
        ${this._toasts.map(e=>d.html`
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
    `}};ji.styles=d.css`
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
  `;let Be=ji;Pi([y.property({attribute:!1})],Be.prototype,"t");Pi([y.property({type:Number})],Be.prototype,"duration");Pi([y.state()],Be.prototype,"_toasts");customElements.define("sfx-toast",Be);var Ml=Object.defineProperty,M=(r,e,t,i)=>{for(var o=void 0,s=r.length-1,n;s>=0;s--)(n=r[s])&&(o=n(e,t,o)||o);return o&&Ml(e,t,o),o};const Ir=new Set(["unsplash"]),ge=10,Bl=3,Nl=["auto","mobile","tablet","desktop","hq","sample"],Hl=["hls"],Le={isTus:!1,tusUploadUrl:null,relativeFolder:""},Ar=new Set(["complete","failed","error","cancelled","rejected"]);var q;const D=(q=class extends d.LitElement{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=e=>{const{groupUuid:t,value:i}=e.detail;t&&(this._regionalFilters={...this._regionalFilters,[t]:i})},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Ae,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail;if(zo(i)){const a=Io(i);if(!a)return;const l=o===""||o==null,c=a==="position"?{position:l?void 0:Number(o)}:{ref:l?void 0:String(o)};this.updateFileProduct(t,c);return}const s=this._store.getState().files.get(t);if(!s)return;const n=new Map(this._store.getState().files);n.set(t,{...s,meta:{...s.meta,[i]:o}}),this._store.setState({files:n})},this._onPreviewTaxonomyEntry=e=>{const t=this._previewFileId;t&&this.updateFileTaxonode(t,e.detail.key,e.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(e,t)=>{var o;const i=(o=this.config)==null?void 0:o.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(s){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",s),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{const{files:t,hadDirectories:i}=e.detail;if(t.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(t)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,s;const t=this._mergedSources.find(n=>n.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(n){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,n)}return}if(e==="device"){const n=this.shadowRoot.querySelector("sfx-drop-zone");n==null||n.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((s=(o=this.config)==null?void 0:o.connectors)==null?void 0:s.providers)??[]).includes(e)){if(Ir.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:a}=await Promise.resolve().then(()=>require("./search-provider-browser-DYc5ZTc_.cjs"));customElements.define("sfx-search-provider-browser",a)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:a}=await Promise.resolve().then(()=>require("./provider-browser-Chv7fXtC.cjs"));customElements.define("sfx-provider-browser",a)}this._activeConnector=e}},this._onUrlSubmit=e=>{var u,f,S;this._showUrlDialog=!1;const{url:t,name:i}=e.detail,o=(u=this.config)==null?void 0:u.callbacks,s=Or(i),n=s.startsWith("image/");if(qt(i))return;const a=this._store.getState();if([...a.files.values()].some(m=>m.name===i&&m.status!=="rejected"&&m.status!=="cancelled"))return;const c=Vt({name:i,size:0,type:s},a.restrictions,a.files);if(c){const m={id:Te(),status:"rejected",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Le};Oe(this._store,m),this._dispatchPublic(j.FILE_REJECTED,{file:m,reason:c}),(f=o==null?void 0:o.onFileRejected)==null||f.call(o,m,c);return}const p={id:Te(),status:"idle",file:null,remoteUrl:t,name:i,size:0,type:s,previewUrl:n?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Le};Oe(this._store,p),this._dispatchPublic(j.FILE_ADDED,{file:p}),(S=o==null?void 0:o.onFileAdded)==null||S.call(o,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,o,s;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(j.FILE_PREVIEW,{file:t}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFilePreview)==null||s.call(o,t))},this._onFillMetadata=()=>{var t,i,o,s;const e=[...this._store.getState().files.values()].filter(n=>q._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(j.FILL_METADATA,{files:e}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFillMetadata)==null||s.call(o,e)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=e=>{const t=e.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(t))i.delete(t);else{if(i.size>=ge)return;i.add(t)}this._similarSelectedIds=i},this._onSimilarSelectAll=e=>{this._similarSelectedIds=e.detail.selected?new Set(this._similarUncheckedFiles().slice(0,ge).map(t=>t.id)):new Set},this._onCheckSimilarRun=()=>{const e=this._similarImageFiles().filter(t=>this._similarSelectedIds.has(t.id));e.length&&(this._runSimilarityCheck(e),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=e=>{const t=e.detail.file;t&&this._checkSimilarSingleFile(t)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=e=>{this._previewFileId=e.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{const e=this._storeCtrl.state.t;this._showToast(e("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onFileLocate=e=>{this._locateFile(e.detail.file)},this._onFileCopyCdn=e=>{var o,s,n;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(j.FILE_COPY_CDN,{file:t,cdnUrl:i}),(n=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onFileCopyCdn)==null||n.call(s,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:s}of t){const n=i.get(o);n&&i.set(o,{...n,meta:{...n.meta,...s}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=e=>{const{changes:t}=e.detail;t.length&&this.updateFilesProduct(t)},this._onBulkTaxonomySaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=this._store.getState().files,o=new Map(i);for(const{fileId:s,taxonodes:n}of t){const a=i.get(s);if(!a||!q._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};for(const[c,p]of Object.entries(n))p==null?delete l[c]:l[c]=p;o.set(s,{...a,taxonodes:l})}this._store.setState({files:o})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var i,o,s;const e=(i=this.config)==null?void 0:i.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(o=this._engine)==null||o.cancelAll();const t=[...this._store.getState().files.values()];for(const n of t)n.previewUrl&&URL.revokeObjectURL(n.previewUrl),this._dispatchPublic(j.FILE_REMOVED,{file:n}),(s=e==null?void 0:e.onFileRemoved)==null||s.call(e,n);this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=[...e].reverse(),this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=Ve.load(t);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&Ve.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var o,s,n,a;const t=(o=this.config)==null?void 0:o.callbacks,i=((s=this.config)==null?void 0:s.preserveFolderStructure)!==!1;for(const l of e.detail.files){if(qt(l.name))continue;const c=i?l.relativeFolder??"":"",p=this._store.getState();if([...p.files.values()].some(v=>v.name===l.name&&v.size===l.size&&v.relativeFolder===c&&v.status!=="rejected"&&v.status!=="cancelled"))continue;const f=l.thumbnail?this._transformRemoteThumbnail(l.thumbnail,{source:"connector",providerId:l.provider}):null,S=Vt({name:l.name,size:l.size,type:l.mimeType},p.restrictions,p.files);if(S){const v={id:Te(),status:"rejected",file:null,remoteUrl:null,name:l.name,size:l.size,type:l.mimeType,previewUrl:f,duration:null,progress:0,speed:0,bytesUploaded:0,error:S,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:l,...Le,relativeFolder:c};Oe(this._store,v),this._dispatchPublic(j.FILE_REJECTED,{file:v,reason:S}),(n=t==null?void 0:t.onFileRejected)==null||n.call(t,v,S);continue}const m={id:Te(),status:"idle",file:null,remoteUrl:null,name:l.name,size:l.size,type:l.mimeType,previewUrl:f,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:l,...Le,relativeFolder:c};Oe(this._store,m),this._dispatchPublic(j.FILE_ADDED,{file:m}),(a=t==null?void 0:t.onFileAdded)==null||a.call(t,m)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,i,o,s,n;this._dispatchPublic(j.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),(((s=this.config)==null?void 0:s.mode)??"modal")==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(j.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,i,o;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(j.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,o;(e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var e,t,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onMinimize)==null||i.call(t),this._dispatchFloatGeometryEvent(j.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onRestore)==null||i.call(t),this._dispatchPublic(j.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{})),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=e.dataTransfer;t&&So(t).then(({files:i,hadDirectories:o})=>{if(i.length===0){o&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:o}}))})},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const o=((t=this.config)==null?void 0:t.mode)??"modal",s=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(s==="close"||s==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var n;this._splitRafId=0;const i=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),s=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,s))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=q._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=i===-1?1:(i+1)%t.length;this._fsZoom=t[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Wr(),this._storeCtrl=new ks(this,this._store)}get _lastUploadId(){var i,o;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}get _metadataDefaultLanguage(){var i,o;const e=(i=this._metadataSchema)==null?void 0:i.regionalVariantsGroups;if(!e)return;const t=e.find(s=>s.type===li.LANGUAGES);return((o=t==null?void 0:t.variants.find(Boolean))==null?void 0:o.api_value)||void 0}get _effectiveRegionalFilters(){var t,i,o,s;const e=((i=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:i.language)??((o=this.config)==null?void 0:o.locale)??void 0;return{...pl((s=this._metadataSchema)==null?void 0:s.regionalVariantsGroups,e),...this._regionalFilters}}get _activeLanguage(){var o,s,n;const t=(((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups)??[]).find(a=>a.type===li.LANGUAGES),i=this._effectiveRegionalFilters;return(t?i[t.uuid]:void 0)??((n=(s=this.config)==null?void 0:s.metadataConfig)==null?void 0:n.language)}get _effectiveMetadataConfig(){var o;const e=(o=this.config)==null?void 0:o.metadataConfig;if(!e)return null;const t={...e.regionalFilters??{},...this._effectiveRegionalFilters},i=this._activeLanguage??e.language;return{...e,regionalFilters:t,language:i}}open(){var t,i,o,s,n,a,l,c,p;const e=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){e&&((o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onRestore)==null||o.call(i),this._dispatchPublic(j.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onOpen)==null||a.call(n),this._dispatchPublic(j.OPEN,{}),e&&((p=(c=(l=this.config)==null?void 0:l.callbacks)==null?void 0:c.onRestore)==null||p.call(c),this._dispatchPublic(j.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(j.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var e,t,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(j.CLOSE,{}),this.requestUpdate()}upload(){var o,s,n,a,l,c,p,u,f,S;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(m=>m.status==="idle"||m.status==="queued");if((s=(o=this.config)==null?void 0:o.callbacks)!=null&&s.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(j.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(j.UPLOAD_STARTED,{files:e}),(l=(a=(n=this.config)==null?void 0:n.callbacks)==null?void 0:a.onUploadStarted)==null||l.call(a,e),this._engine.uploadAll(),(c=this.config)!=null&&c.minimizeOnUpload&&((p=this.config)==null?void 0:p.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(S=(f=(u=this.config)==null?void 0:u.callbacks)==null?void 0:f.onMinimize)==null||S.call(f),this._dispatchFloatGeometryEvent(j.MINIMIZE),this.requestUpdate()))}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,o=new Map(i);let s=!1;for(const n of e){const a=i.get(n.id);a&&(o.set(n.id,{...a,...n}),s=!0)}s&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!q._MODIFIABLE_STATUSES.has(s.status))return;const n=new Map(o);n.set(e,{...s,meta:t!=null?{...s.meta,...t}:s.meta,tags:i??s.tags}),this._store.setState({files:n})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,meta:n,tags:a}of e){const l=t.get(s);!l||!q._MODIFIABLE_STATUSES.has(l.status)||(i.set(s,{...l,meta:n!=null?{...l.meta,...n}:l.meta,tags:a??l.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileTaxonode(e,t,i){const o=this._store.getState().files,s=o.get(e);if(!s||!q._MODIFIABLE_STATUSES.has(s.status))return;const n={...s.taxonodes??{}};i==null?delete n[t]:n[t]=i;const a=new Map(o);a.set(e,{...s,taxonodes:n}),this._store.setState({files:a})}updateFilesTaxonode(e,t,i){const o=this._store.getState().files,s=new Map(o);let n=!1;for(const a of e){const l=o.get(a);if(!l||!q._MODIFIABLE_STATUSES.has(l.status))continue;const c={...l.taxonodes??{}};i==null?delete c[t]:c[t]=i,s.set(a,{...l,taxonodes:c}),n=!0}n&&this._store.setState({files:s})}updateFileProduct(e,t){const i=this._store.getState().files,o=i.get(e);if(!o||!q._MODIFIABLE_STATUSES.has(o.status))return;const s=new Map(i);s.set(e,{...o,product:ir(o.product,t)}),this._store.setState({files:s})}updateFilesProduct(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:s,product:n}of e){const a=t.get(s);!a||!q._MODIFIABLE_STATUSES.has(a.status)||(i.set(s,{...a,product:ir(a.product,n)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(e){if(e.has("config")&&this.config){this._applyConfig(this.config);const t=this.config.uploadSettings;!(t!==!1&&(t==null||t.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(e){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&e.length>0){this._injectFloatStyles();const t=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),d.render(this._renderFloatingPill(e),this._portalContainer),t&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(j.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(d.render(d.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&Ve.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(e){try{const{i18n:t,isNew:i}=await xs(e||"en");i&&t.on("missingKey",(s,n,a,l,c,p)=>{const u=a.match(/_(?:zero|one|two|few|many|other)$/),f=u&&(p!=null&&p[`defaultValue${u[0]}`])?String(p[`defaultValue${u[0]}`]):l;ys.handleMissingKey(a,f,n)});const o=(s,n,a)=>typeof n=="string"?t.t(s,n,a??{}):t.t(s,n??{});this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o,s;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._hostStyleObserver)==null||e.disconnect(),this._hostStyleObserver=null,(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(s=this._engine)==null||s.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const s=this._store.getState().queueConfig;t.queueConfig={...s,concurrency:e.concurrency}}if(e.autoProceed!=null){const s=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...s,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=e.uploadSettings;if(i&&i.defaults){const s=i.defaults;s.resize!==void 0&&(this._setResize=s.resize),s.maxWidth!==void 0&&(this._setMaxW=s.maxWidth),s.maxHeight!==void 0&&(this._setMaxH=s.maxHeight),s.transcode!==void 0&&(this._setTranscode=s.transcode),s.resolution!==void 0&&(this._setResolution=s.resolution),s.protocol!==void 0&&(this._setProtocol=s.protocol),s.resumable!==void 0&&(this._setResumable=s.resumable)}const o=this._lastUploadId;this._hasStoredReview=o!=null&&Ve.exists(o),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,s,n,a;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=Tt(t.container),this._authHeaders=Ct(t),this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(o=e.connectors)==null?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const l=await Eo(t);if(i!==this._authResolveId)return;this._apiBase=l.apiBase,this._authHeaders=l.headers,this._ensureEngine(),(a=this._engine)==null||a.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(n=e.connectors)==null?void 0:n.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(l){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",l),this._showToast(this._formatAuthError(l))}}_formatAuthError(e){var i,o;const t=e instanceof Error?e.message:String(e);return(o=(i=this.config)==null?void 0:i.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var a,l,c,p;const e=(a=this.config)==null?void 0:a.uploadSettings,t=!!e&&e.showResumableSwitcher===!0,i=(l=this.config)==null?void 0:l.tusConfig;let o=i===!0?{}:i||void 0;if(t){if(!this._setResumable)return;o||(o={})}if(!o)return;const s=(p=(c=this.config)==null?void 0:c.connectors)==null?void 0:p.companionUrl;if(!s)return o;const n=s.replace(/\/+$/,"");return{...o,endpoint:o.endpoint??`${n}/files`,jsonBase:o.jsonBase??`${n}/json`}}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var e;return((e=this.config)==null?void 0:e.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;return o=>{const s={},n=le(o);if(this._setResize&&(n==="image"||n==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(s.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&n==="vid"&&(s.postprocess="transcode",s["video-resolution"]=this._setResolution,s.video_protocols=this._setProtocol),t!=null){const l=typeof t=="function"?t():t;l&&(s.opt_force_name=l)}const a=i==null?void 0:i(o);return a&&Object.assign(s,a),Object.keys(s).length>0?s:void 0}}_ensureEngine(){var e,t;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Co(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(t=(e=this.config)==null?void 0:e.connectors)==null?void 0:t.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:i=>this._transformRemoteThumbnail(i,{source:"cdn-complete"})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:i,createTagsAutocomplete:o,createTaxonomyService:s,createUltratagsService:n}=await Promise.resolve().then(()=>require("./index-BEurNt0h.cjs")),a=await i(this._apiBase,this._authHeaders,t.projectUuid,t);this._metadataAutocomplete=o(this._apiBase,this._authHeaders),this._taxonomyService=s(this._apiBase,this._authHeaders),this._ultratagsService=n(this._apiBase,this._authHeaders),this._metadataSchema=a.productsEnabled?vl(a,this._storeCtrl.state.t):a;const l=this._metadataSchema.fields.filter(c=>ki(c,t)).map(c=>c.key);this._dispatchPublic(j.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:l})}catch(i){console.error("[sfx-uploader] Failed to load metadata schema:",i),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(e,t){const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const s=new Map(this._store.getState().files);s.set(e,{...o,name:i}),this._store.setState({files:s})}_previewMeta(e){var t;return(t=this._metadataSchema)!=null&&t.productsEnabled?{...e.meta,[Ee]:e.product.ref,[Ue]:e.product.position}:e.meta}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema||e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0||this._metadataSchema.forceFillingOnUpload||e.requiredFields&&e.requiredFields.length>0?!0:this._metadataSchema.fields.some(i=>!!i.required)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:kl(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_measureFloatGeometry(){var o;const e=this._isPillExpanded?"card":"pill",t=(o=this._portalContainer)==null?void 0:o.querySelector(".upload-float");if(!t)return{width:0,height:0,mode:e};const i=t.getBoundingClientRect();return{width:i.width,height:i.height,mode:e}}_dispatchFloatGeometryEvent(e){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(e,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const e=getComputedStyle(this),t=e.getPropertyValue("--sfx-up-float-offset-x").trim(),i=e.getPropertyValue("--sfx-up-float-offset-y").trim();t?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",t):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var o,s,n,a,l,c,p,u,f,S;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0,this._firedFolders.clear());const i=(o=this.config)==null?void 0:o.callbacks;for(const[m,v]of e.files){const C=t.files.get(m);if(!C){v.relativeFolder&&this._firedFolders.delete(v.relativeFolder);continue}if(C.status!==v.status)switch(v.status){case"uploading":C.status==="paused"&&(this._dispatchPublic(j.UPLOAD_RESUMED,{file:v}),(s=i==null?void 0:i.onUploadResumed)==null||s.call(i,v));break;case"complete":v.response&&(this._dispatchPublic(j.UPLOAD_COMPLETE,{file:v,response:v.response}),(n=i==null?void 0:i.onUploadComplete)==null||n.call(i,v,v.response));break;case"error":case"failed":{const T=new Error(v.error??"Upload failed");this._dispatchPublic(j.UPLOAD_ERROR,{file:v,error:T}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,v,T);break}case"retrying":this._dispatchPublic(j.UPLOAD_RETRY,{file:v,attempt:v.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,v,v.retryCount);break;case"paused":this._dispatchPublic(j.UPLOAD_PAUSED,{file:v}),(c=i==null?void 0:i.onUploadPaused)==null||c.call(i,v);break}v.status==="uploading"&&C.progress!==v.progress&&(this._dispatchPublic(j.UPLOAD_PROGRESS,{file:v,progress:v.progress,speed:v.speed}),(p=i==null?void 0:i.onUploadProgress)==null||p.call(i,v,v.progress,v.speed)),v.relativeFolder&&C.status!==v.status&&Ar.has(v.status)&&!this._firedFolders.has(v.relativeFolder)&&this._maybeDispatchFolderComplete(v.relativeFolder,e,i)}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const m=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=m),this._dispatchPublic(j.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:m}),(u=i==null?void 0:i.onTotalProgress)==null||u.call(i,e.totalProgress,e.totalSpeed,m)}if(t.isUploading&&!e.isUploading){const m=[...e.files.values()];if(!m.some(C=>C.status==="cancelled")){const C=m.filter(_=>_.status==="complete"),T=m.filter(_=>_.status==="failed"||_.status==="error");if(C.length===0&&T.length===0)return;const k=this._lastUploadId;if(k!=null){const _=[...C,...T];Ve.save(k,_),this._hasStoredReview=_.length>0}this._dispatchPublic(j.ALL_COMPLETE,{successful:C,failed:T}),(f=i==null?void 0:i.onAllComplete)==null||f.call(i,C,T);const w=(S=this.config)==null?void 0:S.closeOnComplete;if(w!==!1&&w!=null){const _=typeof w=="number"?w:1500;this._closeOnCompleteTimer=setTimeout(()=>{var b,R,E;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(j.COMPLETE_ACTION,{}),(E=(R=(b=this.config)==null?void 0:b.callbacks)==null?void 0:R.onCompleteAction)==null||E.call(R),this.close())},_)}}}}_maybeDispatchFolderComplete(e,t,i){var a;const o=[...t.files.values()].filter(l=>l.relativeFolder===e);if(o.length===0||o.some(l=>!Ar.has(l.status)))return;const s=o.filter(l=>l.status==="complete"),n=o.filter(l=>l.status==="failed"||l.status==="error");s.length===0&&n.length===0||(this._firedFolders.add(e),this._dispatchPublic(j.FOLDER_COMPLETE,{folder:e,successful:s,failed:n}),(a=i==null?void 0:i.onFolderComplete)==null||a.call(i,e,s,n))}get _mergedSources(){var u;const e=(u=this.config)==null?void 0:u.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Ae.filter(f=>f.id!=="url"),this._cachedSources;const t=e.providers.length>0?Oo(e.providers):[],i=e.customSources??[],o=e.coreSources?new Set(e.coreSources):null,s=o?Ae.filter(f=>o.has(f.id)):Ae,n=e.companionUrl?s:s.filter(f=>f.id!=="url"),a=n.filter(f=>f.id==="device"||f.id==="url"),l=n.filter(f=>f.id!=="device"&&f.id!=="url"),c=new Set,p=[];for(const f of[...a,...t,...l,...i])if(!c.has(f.id)){if(q._RESERVED_IDS.has(f.id)&&f.onActivate){console.warn(`[sfx-uploader] Custom source id "${f.id}" conflicts with a built-in source and was skipped.`);continue}c.add(f.id),p.push(f)}return this._cachedSources=p,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>i.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var n,a,l,c,p;const t=(n=this.config)==null?void 0:n.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const i=((a=this.config)==null?void 0:a.preserveFolderStructure)!==!1;let o=0,s=!1;for(const u of e){if(qt(u.name))continue;if(s){o++;continue}const f=i?Ia(ko(u)):"",S=this._store.getState();if([...S.files.values()].some(w=>w.name===u.name&&w.size===u.size&&w.relativeFolder===f&&w.status!=="rejected"&&w.status!=="cancelled"))continue;const v=u.type||Or(u.name),C=Vt({name:u.name,size:u.size,type:v},S.restrictions,S.files);if(C){if(rl(C)){s=!0,o++;continue}const w=v.startsWith("image/")&&!me(v)?URL.createObjectURL(u):null,_={id:Te(),status:"rejected",file:u,remoteUrl:null,name:u.name,size:u.size,type:v,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:C,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Le,relativeFolder:f};Oe(this._store,_),this._dispatchPublic(j.FILE_REJECTED,{file:_,reason:C}),(l=t==null?void 0:t.onFileRejected)==null||l.call(t,_,C);const b=(c=this.config)==null?void 0:c.rejectedFileAutoRemoveDelay,R=b===!1||b===0||b===void 0?0:b;if(R>0){const E=_.id,z=setTimeout(()=>{this._rejectedTimers.delete(E);const L=this._store.getState().files.get(E);L&&L.status==="rejected"&&tr(this._store,E)},R);this._rejectedTimers.set(E,z)}continue}let T=null;v.startsWith("image/")&&!me(v)&&(T=URL.createObjectURL(u));const k={id:Te(),status:"idle",file:u,remoteUrl:null,name:u.name,size:u.size,type:v,previewUrl:T,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...Le,relativeFolder:f};if(Oe(this._store,k),this._dispatchPublic(j.FILE_ADDED,{file:k}),(p=t==null?void 0:t.onFileAdded)==null||p.call(t,k),u.type.startsWith("video/")){il(u).then(_=>{if(!_)return;const b=this._store.getState(),R=b.files.get(k.id);if(R){const E=new Map(b.files);E.set(k.id,{...R,previewUrl:_}),this._store.setState({files:E})}else URL.revokeObjectURL(_)});const w=document.createElement("video");w.preload="metadata",w.src=URL.createObjectURL(u),w.onerror=()=>{URL.revokeObjectURL(w.src)},w.onloadedmetadata=()=>{const _=w.duration;if(URL.revokeObjectURL(w.src),!isFinite(_))return;const b=this._store.getState(),R=b.files.get(k.id);if(R){const E=new Map(b.files);E.set(k.id,{...R,duration:_}),this._store.setState({files:E})}}}}if(o>0){const u=this._storeCtrl.state.t,f=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(u("tooManyFilesSkipped",{count:o,max:f,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const e=this._storeCtrl.state.t;this._showToast(e("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(e){var s,n,a,l,c;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const p=this._videoBlobUrls.get(t.file);p&&(URL.revokeObjectURL(p),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((s=this._engine)==null||s.cancelFile(e)),tr(this._store,e),(n=this._engine)==null||n.recompute(),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const p=[...this._store.getState().files.values()];this._previewFileId=p.length>0?p[0].id:null}this._purgeSimilarState(e),this._dispatchPublic(j.FILE_REMOVED,{file:i}),(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onFileRemoved)==null||c.call(l,i)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(e=>le(e)==="image"&&!me(e.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(e=>!this._similarResults.has(e.id))}_similarityAuth(){var i,o,s;const e=(o=(i=this.config)==null?void 0:i.auth)==null?void 0:o.container,t=(s=this._authHeaders)==null?void 0:s["X-Filerobot-Key"];return!e||!t?null:{container:e,sassKey:t}}_similarMarkInactive(e){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}_similarSetResults(e,t){const i=new Map(this._similarResults);i.set(e,t),this._similarResults=i}_checkSimilarSingleFile(e){var s,n,a,l;if(this._similarActiveIds.has(e.id)||this._similarRunIds.includes(e.id))return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const i=Ur((n=(s=this.config)==null?void 0:s.similarityCheck)==null?void 0:n.confidence),o=(l=(a=this.config)==null?void 0:a.similarityCheck)==null?void 0:l.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(e.id),Rr(e,{...t,threshold:i,endpoint:o}).then(c=>{this._similarMarkInactive(e.id),this._similarSetResults(e.id,c)}).catch(c=>{console.error("[sfx-uploader] Similarity check failed for",e.name,c),this._similarMarkInactive(e.id),this._similarSetResults(e.id,[])})}_runSimilarityCheck(e){var f,S,m,v;if(this._clearSimilarRun(),!e.length)return;const t=this._similarityAuth();if(!t){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=e.map(C=>C.id);const i=Ur((S=(f=this.config)==null?void 0:f.similarityCheck)==null?void 0:S.confidence),o=(v=(m=this.config)==null?void 0:m.similarityCheck)==null?void 0:v.endpoint,s=new AbortController;this._similarAbort=s;const n=[...e];let a=0,l=0;const c=e.length,p=()=>{if(!s.signal.aborted){if(!this._previewFileId){const C=e.find(T=>{var k;return(((k=this._similarResults.get(T.id))==null?void 0:k.length)??0)>0});C&&(this._previewFileId=C.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},u=()=>{if(!s.signal.aborted)for(;a<Bl&&n.length>0;){const C=n.shift();a+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(C.id),Rr(C,{...t,threshold:i,endpoint:o,signal:s.signal}).then(T=>{s.signal.aborted||(this._similarMarkInactive(C.id),this._similarSetResults(C.id,T))}).catch(T=>{s.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",C.name,T),this._similarMarkInactive(C.id),this._similarSetResults(C.id,[]))}).finally(()=>{s.signal.aborted||(a-=1,l+=1,l===c?p():u())})}};u()}_clearSimilarRun(){var e;(e=this._similarAbort)==null||e.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(e){if(this._similarRunIds.includes(e)&&(this._similarRunIds=this._similarRunIds.filter(t=>t!==e)),this._similarActiveIds.has(e)){const t=new Set(this._similarActiveIds);t.delete(e),this._similarActiveIds=t}if(this._similarResults.has(e)){const t=new Map(this._similarResults);t.delete(e),this._similarResults=t}if(this._similarSelectedIds.has(e)){const t=new Set(this._similarSelectedIds);t.delete(e),this._similarSelectedIds=t}}_openSimilarAsset(e){e&&window.open(e,"_blank","noopener,noreferrer")}_simAssetName(e){let t="";if(e.url){const i=e.url.split("?")[0].split("/").pop()||"";try{t=decodeURIComponent(i)}catch{t=i}}return t||e.uuid}_simAssetMeta(e){const t=this._simAssetName(e),i=t.lastIndexOf("."),o=i>0?t.slice(i+1).toUpperCase():"";return o&&o.length<=5?o:""}_locateFile(e){var s,n,a;if(!e)return;const t=_s(e,this.config??void 0),i=this.dispatchEvent(new CustomEvent(j.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:e,url:t}})),o=(a=(n=(s=this.config)==null?void 0:s.callbacks)==null?void 0:n.onFileLocate)==null?void 0:a.call(n,e,t);this._onMinimize(),!(!i||o===!1)&&t&&window.location.assign(t)}render(){var o;const e=((o=this.config)==null?void 0:o.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?d.html`
        ${this._isOpen&&!this._isMinimized?d.html`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:d.nothing}
        ${this._renderFsOverlay()}
      `:d.html`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return d.nothing;const e=this._storeCtrl.state.t,t=this._getFullscreenNavigableFiles(),i=t.findIndex(o=>o.id===this._previewFileId);return d.html`
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
        ${this._fullscreenVideoFile?d.html`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${o=>o.stopPropagation()}></video>`:d.html`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${W(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=q._FS_ZOOM_LEVELS[q._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=q._FS_ZOOM_LEVELS[q._FS_ZOOM_LEVELS.length-1]?d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
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
    `}_renderInlineHeader(e){return d.html`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?d.html`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:d.nothing}
          ${e.title?d.html`<h2 class="inline-header-title">${e.title}</h2>`:d.nothing}
        </div>
        ${e.description?d.html`<div class="inline-header-desc">${e.description}</div>`:d.nothing}
      </div>
    `}_renderHeader(){var T,k,w,_,b,R;if(this._phase==="complete")return d.nothing;const e=this._storeCtrl.state.t,t=((T=this.config)==null?void 0:T.mode)??"modal";if(this._phase==="uploading"){const L=[...this._storeCtrl.state.files.values()].filter(ae=>ae.status!=="rejected"&&ae.status!=="cancelled"),F=L.length,X=L.filter(ae=>ae.status==="complete").length;return d.html`
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
                ${e("uploadingFiles",{count:F,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:X,total:F})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:Ht(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(t==="inline"&&((k=this.config)!=null&&k.inlineHeader))return d.nothing;const i=((w=this.config)==null?void 0:w.header)??(t==="modal"?"close":!0);if(i===!1)return d.nothing;const o=t==="modal"?this._onModalDismiss:this._onInlineDismiss,s=i==="back"?d.html`<button
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
          </button>`:d.nothing,n=(_=this.config)==null?void 0:_.uploadSettings,a=n!==!1&&(n==null||n.enabled!==!1),l=n!==!1&&n!=null&&n.showResumableSwitcher===!0,c=[...this._storeCtrl.state.files.values()],p=c.some(E=>le(E)==="image"&&!me(E.type)),u=c.some(E=>le(E)==="pdf"),f=c.some(E=>le(E)==="vid"),m=a&&(p||u||f||l)?d.html`<button
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
          </button>`:d.nothing,v=(R=(b=this._metadataSchema)==null?void 0:b.regionalVariantsGroups)!=null&&R.length?d.html`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:d.nothing,C=i==="close"?d.html`<button
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
          </button>`:d.nothing;return d.html`
      <div class="header">
        ${s}
        ${i!=="back"?d.html` <div class="header-icon">
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
            </div>`:d.nothing}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${v}
        ${m}
        ${C}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var p;const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=e.filter(u=>u.status!=="rejected"&&u.status!=="cancelled"),n=s.length,a=s.filter(u=>u.status==="complete").length,l=s.filter(u=>ni(u.status)),c=[];return n>1&&c.push(i("nOfNComplete","{{completed}} of {{total}} complete",{completed:a,total:n})),this._lastEta>0&&c.push(i("etaLeft","~{{eta}} left",{eta:Ht(this._lastEta)})),d.html`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          ${i("uploadingFiles",{count:n,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
        </div>
        ${c.length>0?d.html`<div class="upload-overlay-subtitle">${c.join(" · ")}</div>`:d.nothing}
        ${n>1?d.html`<div class="upload-overlay-bar">
              <div class="upload-overlay-bar-fill" ${W({width:`${o}%`})}></div>
            </div>`:d.nothing}
        ${l.length>0?this._renderOverlayFiles(l,i):d.nothing}
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${i("cancelUpload","Cancel upload")}
          </button>
          ${(p=this.config)!=null&&p.minimizeOnUpload?d.html`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${i("minimizeAndContinue","Minimize & continue in background")}
              </button>`:d.nothing}
        </div>
      </div>
    `}_renderOverlayFiles(e,t){const i=[...e].reverse();return d.html`
      <div class="upload-overlay-files">
        ${Kt.repeat(i,o=>o.id,o=>{const s=o.status==="paused",n=o.status==="uploading",a=o.status==="queued",l=Math.round(o.progress??0),c=s?t("paused","Paused"):a?t("queued","Queued"):`${l}%`;return d.html`
            <div class="upload-overlay-file">
              <div class="upload-overlay-file-info">
                <div class="upload-overlay-file-name" title=${o.name}>${o.name}</div>
                <div class="upload-overlay-file-meta">
                  <div class="upload-overlay-file-bar">
                    <div
                      class="upload-overlay-file-bar-fill ${s||a?"muted":""}"
                      ${W({width:`${l}%`})}
                    ></div>
                  </div>
                  <div class="upload-overlay-file-pct">${c}</div>
                </div>
              </div>
              <div class="upload-overlay-file-actions">
                ${n&&o.isTus?d.html`
                      <button
                        class="upload-overlay-file-btn"
                        title=${t("pause","Pause")}
                        aria-label=${t("pauseUpload","Pause upload")}
                        @click=${()=>{var p;return(p=this._engine)==null?void 0:p.pauseFile(o.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    `:d.nothing}
                ${s?d.html`
                      <button
                        class="upload-overlay-file-btn paused"
                        title=${t("resume","Resume")}
                        aria-label=${t("resumeUpload","Resume upload")}
                        @click=${()=>{var p;return(p=this._engine)==null?void 0:p.resumeFile(o.id)}}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    `:d.nothing}
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
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),s=this._phase==="complete",n=e.filter(p=>p.status==="complete").length,a=e.filter(p=>p.status==="failed").length,l=e.filter(p=>p.status==="complete"&&p.alreadyExisted).length,c=n>0&&a===0&&l>=n;return this._isPillExpanded===!1?d.html`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s?a>0?n>0?d.html`<div class="float-collapsed-icon warn">
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
                    </div>`:d.html`<div class="float-collapsed-icon error">
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
                    </div>`:c?d.html`<div class="float-collapsed-icon info">
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
                    </div>`:d.html`<div class="float-collapsed-icon done">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>`:d.html`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${s?a>0?n>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):c?i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}</span
            >
            ${s?d.nothing:d.html`<span class="float-collapsed-pct">${o}%</span>`}
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
      `:d.html`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${s?a>0?n>0?"warn":"error":c?"info":"done":""}"
            >
              ${s?a>0?n>0?d.html`<svg
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
                      </svg>`:d.html`<svg
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
                      </svg>`:c?d.html`<svg
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
                      </svg>`:d.html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>`:d.html`<svg
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
                ${s?c?i("alreadyInLibrarySubtitle",{count:l,defaultValue_one:"It’s ready to use — nothing new to upload",defaultValue_other:"They’re ready to use — nothing new to upload"}):`${i("filesUploaded",{count:n,defaultValue_one:"{{count}} file uploaded",defaultValue_other:"{{count}} files uploaded"})}${a>0?`, ${i("nFailed","{{count}} failed",{count:a})}`:""}`:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:n,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Ht(this._lastEta)})}`:""}`}
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
              ${W({width:`${s?100:o}%`})}
            ></div>
          </div>
        </div>
        ${s&&l>0&&!c?d.html`<div class="float-info-note" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>${i("alreadyInLibrary",{count:l,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:d.nothing}
        <div class="float-items">
          ${Kt.repeat([...e].reverse(),p=>p.id,p=>{var f,S,m;const u=p.status==="failed"||p.status==="error";return d.html`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${W(p.previewUrl?{"background-image":`url(${p.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${p.previewUrl?d.nothing:d.html`<svg
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
                  <div class="float-item-name">${p.name}</div>
                  <div class="float-item-size">${be(p.size)}</div>
                </div>
                <div class="float-item-status">
                  ${p.status==="complete"?d.html`${(f=this.config)!=null&&f.showLocateButton&&((m=(S=p.response)==null?void 0:S.file)!=null&&m.uuid)?d.html`<button
                              class="float-item-act locate"
                              title=${i("locate","Locate")}
                              aria-label=${i("locate","Locate")}
                              @click=${()=>this._locateFile(p)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <circle cx="12" cy="12" r="7" />
                              </svg>
                            </button>`:d.nothing}
                        ${p.alreadyExisted?d.html`<div
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
                            </div>`:d.html`<div class="float-item-done">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>`}`:u?d.html` <div class="float-item-error-wrap">
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
                            >${p.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var v;this._ensureEngine(),(v=this._engine)==null||v.retryFile(p.id)}}
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
                        </button>`:p.status==="paused"?d.html`
                        <button
                          class="float-item-act paused"
                          title=${i("resume","Resume")}
                          aria-label=${i("resumeUpload","Resume upload")}
                          @click=${()=>{var v;return(v=this._engine)==null?void 0:v.resumeFile(p.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </button>
                        <button
                          class="float-item-act del"
                          title=${i("remove","Remove")}
                          aria-label=${i("removeFile","Remove file")}
                          @click=${()=>this._removeFile(p.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:d.html`
                        <div class="float-item-spinner"></div>
                        ${p.status==="uploading"&&p.isTus?d.html`<button
                              class="float-item-act"
                              title=${i("pause","Pause")}
                              aria-label=${i("pauseUpload","Pause upload")}
                              @click=${()=>{var v;return(v=this._engine)==null?void 0:v.pauseFile(p.id)}}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>`:d.nothing}
                        ${p.status==="uploading"||p.status==="queued"||p.status==="retrying"?d.html`<button
                              class="float-item-act del"
                              title=${i("remove","Remove")}
                              aria-label=${i("removeFile","Remove file")}
                              @click=${()=>this._removeFile(p.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>`:d.nothing}
                      `}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var v,C,T,k,w,_,b;if(e.length===0)return d.nothing;const t=this._storeCtrl.state.t,i=[...e].reverse(),o=i.find(R=>R.id===this._previewFileId)??i[0],s=((v=o.name.split(".").pop())==null?void 0:v.toUpperCase())||"";new Date(o.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=i.reduce((R,E)=>R+(E.size||0),0),a=!!((T=(C=this.config)==null?void 0:C.similarityCheck)!=null&&T.enabled),l=i.filter(R=>le(R)==="image"&&!me(R.type)&&!this._similarResults.has(R.id)).map(R=>R.id),c=Math.min(l.length,ge),p=c>0&&this._similarSelectedIds.size>=c,u=this._similarSelectedIds.size>=ge,f=this._similarResults.get(o.id),S=f!==void 0,m=S?this._previewPanelTab:"details";return d.html`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${W({flex:String(this._splitPct)})}>
          ${((k=this.config)==null?void 0:k.mode)==="inline"&&((w=this.config)!=null&&w.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):d.nothing}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length===1?"asset":"assets"} ·
              ${be(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Fr(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .showCheckSimilar=${a}
            .selectMode=${a}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${p}
            .selectionFull=${u}
            .maxSelection=${ge}
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
        <div class="preview-panel" ${W({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():d.html`
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
              ${o.previewUrl||o.type.startsWith("video/")&&o.file?d.html`
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
                  `:d.nothing}
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
          ${S?d.html`
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
                    <span>${t("similarTab","Similar")}</span>${f&&f.length>0?d.html`<span class="preview-tab-count">${f.length}</span>`:d.nothing}
                  </button>
                </div>
              `:d.nothing}
          ${m==="similar"?this._renderSimilarPanel(o,f??[]):d.html`
          ${o.type.startsWith("video/")&&o.file?d.html`
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
              `:o.previewUrl?d.html`
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
              `:d.html`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${le(o)}">
                    <img
                      class="preview-doc-type-img"
                      src=${wi(s)}
                      alt="${s?`${s} file`:"File"}"
                      @error=${R=>{const E=R.target,z=_i();!E.dataset.fallback&&E.src!==z&&(E.dataset.fallback="1",E.src=z)}}
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
          ${this._metadataSchema&&((_=this.config)!=null&&_.metadataConfig)?d.html`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${s}${o.size?` · ${be(o.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:d.nothing}
          ${this._metadataSchema&&((b=this.config)!=null&&b.metadataConfig)?d.html`
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
                  ></sfx-metadata-form>
                </div>
              `:d.html`
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
                    ${o.size?d.html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${be(o.size)}
                            </div>
                          </div>
                        `:d.nothing}
                    ${this._previewDims!=="—"?d.html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:d.nothing}
                  </div>
                </div>
              `}
              `}
          `}
        </div>
      </div>
    `}_renderSimilarPanel(e,t){const i=this._storeCtrl.state.t;return t.length===0?d.html`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound","No similar assets found")}</b>
          <span>${i("noSimilarHint","This image looks unique in your library.")}</span>
        </div>
      `:d.html`
      <div class="psim-body">
        ${t.map(o=>{const s=Math.round(o.score*100);return d.html`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score>=.9?"high":""}">${s}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(o.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </button>
                ${o.url?d.html`<img src=${o.url} alt="" />`:d.nothing}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(o)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(o)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var u;const e=this._storeCtrl.state.t,t=[...this._storeCtrl.state.files.values()],i=t.some(f=>le(f)==="image"&&!me(f.type)),o=t.some(f=>le(f)==="pdf"),s=t.some(f=>le(f)==="vid"),n=(u=this.config)==null?void 0:u.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=f=>{switch(f){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},c=f=>{switch(f){case"hls":return e("protocolHls","HLS")}},p=f=>S=>{const m=parseInt(S.target.value,10);f(Number.isFinite(m)?m:0)};return d.html`
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
        ${i||o?d.html`
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
                      @input=${p(f=>this._setMaxW=f)}
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
                      @input=${p(f=>this._setMaxH=f)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:d.nothing}

        ${s?d.html`
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
                ${this._setResolutionOpen&&this._setTranscode?d.html`
                      <div class="smenu">
                        ${Nl.map(f=>d.html`
                            <div
                              class="sopt ${f===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=f,this._setResolutionOpen=!1}}
                            >
                              ${l(f)}
                              ${f===this._setResolution?d.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:d.nothing}
                            </div>
                          `)}
                      </div>
                    `:d.nothing}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${Hl.map(f=>d.html`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=f}}
                    >
                      <span class="sradio ${this._setProtocol===f?"on":""}"></span>
                      <span class="sradio-lbl">${c(f)}</span>
                    </div>
                  `)}
              </div>
            `:d.nothing}

        ${a?d.html`
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
                  @click=${()=>{var f;this._setResumable=!this._setResumable,(f=this._engine)==null||f.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:d.nothing}
      </div>
    `}_navigatePreview(e,t){var s;const o=e.findIndex(n=>n.id===this._previewFileId)+t;if(o>=0&&o<e.length){const n=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-image[controls]");n&&(n.pause(),n.removeAttribute("src"),n.load()),this._previewFileId=e[o].id}}_renderBody(){var S,m,v,C,T,k,w,_,b,R,E,z,L;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],o=i.filter(F=>F.status==="idle"||F.status==="queued"||F.status==="error"||F.status==="failed"),s=this._phase,n=Fr(e.restrictions),a=i.length>0,l=!!((m=(S=this.config)==null?void 0:S.similarityCheck)!=null&&m.enabled),c=i.filter(F=>le(F)==="image"&&!me(F.type)&&!this._similarResults.has(F.id)).map(F=>F.id),p=Math.min(c.length,ge),u=p>0&&this._similarSelectedIds.size>=p,f=this._similarSelectedIds.size>=ge;return d.html`
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
          @dragenter=${a?this._onBodyDragEnter:d.nothing}
          @dragover=${a?this._onBodyDragOver:d.nothing}
          @dragleave=${a?this._onBodyDragLeave:d.nothing}
          @drop=${a?this._onBodyDrop:d.nothing}
        >
          ${((v=this.config)==null?void 0:v.mode)==="inline"&&((C=this.config)!=null&&C.inlineHeader)&&!this._previewFileId&&s!=="uploading"&&s!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):d.nothing}
          ${this._isReviewing?d.html`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((T=this.config)==null?void 0:T.showLocateButton)??!1}
                  .showCopyCdnButton=${((k=this.config)==null?void 0:k.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:s==="complete"?d.html`
                <sfx-success-card
                  .t=${t}
                  .primaryLabel=${t("done","Done")}
                  .fileCount=${i.filter(F=>F.status==="complete").length}
                  .totalSize=${i.filter(F=>F.status==="complete"&&!F.alreadyExisted).reduce((F,X)=>F+(X.size||0),0)}
                  .thumbnails=${i.filter(F=>F.status==="complete"&&F.previewUrl).reverse().map(F=>F.previewUrl)}
                  .failedFiles=${i.filter(F=>F.status==="failed").map(F=>({id:F.id,name:F.name,error:F.error||"Upload failed"}))}
                  .alreadyExistedCount=${i.filter(F=>F.status==="complete"&&F.alreadyExisted).length}
                  .showMinimize=${!!((w=this.config)!=null&&w.minimizeOnUpload)&&((_=this.config)==null?void 0:_.mode)!=="inline"}
                  @close-uploader=${this._onSuccessCardClose}
                  @minimize-uploader=${this._onMinimize}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:s==="uploading"?this._renderUploadOverlay(i):d.html`
                ${a?d.nothing:d.html`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((b=this.config)==null?void 0:b.sourcesLayout)??"pills"}
                        .mode=${((R=this.config)==null?void 0:R.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?d.html`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:d.nothing}`}
                ${a?this._previewFileId||this._showSettings?this._renderPreviewLayout(i):d.html`
                        <div class="asset-count">
                          ${i.length}
                          ${i.length===1?"file":"files"} ·
                          ${be(i.reduce((F,X)=>F+(X.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${[...i].reverse()}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .showCheckSimilar=${l}
                          .selectMode=${l}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${u}
                          .selectionFull=${f}
                          .maxSelection=${ge}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:d.nothing}
              `}
        </div>

        ${a&&s!=="complete"&&s!=="uploading"?d.html`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${"idle"}
                .fileCount=${o.length}
                .totalSize=${o.reduce((F,X)=>F+(X.size||0),0)}
                .failedCount=${i.filter(F=>F.status==="failed"||F.status==="error").length}
                .completedCount=${i.filter(F=>F.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((E=this.config)==null?void 0:E.showFillMetadata)??((z=this.config)==null?void 0:z.metadataConfig))}
                .requireMetadataFirst=${this._hasUnfilledRequiredMetadata}
                .showCheckSimilar=${!1}
                .selectMode=${l&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${p}
                .allSelected=${u}
              ></sfx-actions-bar>
            `:d.nothing}
        ${this._showUrlDialog?d.html`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:d.nothing}
        ${this._showCameraDialog?d.html`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:d.nothing}
        ${this._showScreenCastDialog?d.html`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:d.nothing}
        ${this._activeConnector&&((L=this.config)!=null&&L.connectors)?d.html`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${Ir.has(this._activeConnector)?d.html`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      `:d.html`
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
            `:d.nothing}
        ${this._bulkMetadataOpen&&this._metadataSchema?d.html`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(F=>q._MODIFIABLE_STATUSES.has(F.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:d.nothing}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(e=>e.previewUrl||e.type.startsWith("video/")&&e.file).reverse()}_navigateFs(e){const t=this._getFullscreenNavigableFiles(),i=t.findIndex(s=>s.id===this._previewFileId);if(i===-1)return;const o=i+e;if(o>=0&&o<t.length){const s=t[o];this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._previewFileId=s.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},q.styles=d.css`
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
  `,q._FS_ZOOM_LEVELS=[1,2,3,4],q._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),q._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),q);M([y.property({attribute:!1})],D.prototype,"config");M([y.state()],D.prototype,"_isOpen");M([y.state()],D.prototype,"_activeConnector");M([y.state()],D.prototype,"_showUrlDialog");M([y.state()],D.prototype,"_showCameraDialog");M([y.state()],D.prototype,"_showScreenCastDialog");M([y.state()],D.prototype,"_similarSelectMode");M([y.state()],D.prototype,"_similarSelectedIds");M([y.state()],D.prototype,"_similarRunIds");M([y.state()],D.prototype,"_similarActiveIds");M([y.state()],D.prototype,"_similarResults");M([y.state()],D.prototype,"_previewPanelTab");M([y.state()],D.prototype,"_previewFileId");M([y.state()],D.prototype,"_previewDims");M([y.state()],D.prototype,"_fileInfoOpen");M([y.state()],D.prototype,"_splitPct");M([y.state()],D.prototype,"_showSettings");M([y.state()],D.prototype,"_setResize");M([y.state()],D.prototype,"_setMaxW");M([y.state()],D.prototype,"_setMaxH");M([y.state()],D.prototype,"_setTranscode");M([y.state()],D.prototype,"_setResolution");M([y.state()],D.prototype,"_setResolutionOpen");M([y.state()],D.prototype,"_setProtocol");M([y.state()],D.prototype,"_setResumable");M([y.state()],D.prototype,"_fullscreenPreviewUrl");M([y.state()],D.prototype,"_fullscreenVideoFile");M([y.state()],D.prototype,"_fsZoom");M([y.state()],D.prototype,"_bodyDragOver");M([y.state()],D.prototype,"_isMinimized");M([y.state()],D.prototype,"_isPillExpanded");M([y.state()],D.prototype,"_metadataSchema");M([y.state()],D.prototype,"_regionalFilters");M([y.state()],D.prototype,"_bulkMetadataOpen");M([y.state()],D.prototype,"_bulkMetadataInitialFieldKey");M([y.state()],D.prototype,"_isReviewing");M([y.state()],D.prototype,"_reviewFiles");M([y.state()],D.prototype,"_hasStoredReview");let ql=D;exports.AuthExpiredError=Ot;exports.CORE_SOURCES=Ae;exports.PRODUCT_POSITION_FIELD_KEY=Ue;exports.PRODUCT_REF_FIELD_KEY=Ee;exports.PRODUCT_REF_INVALID_CHARS=fi;exports.PublicEvents=j;exports.SfxActionsBar=te;exports.SfxCameraDialog=_e;exports.SfxDropZone=El;exports.SfxFileItem=Y;exports.SfxFileList=H;exports.SfxImportDivider=di;exports.SfxScreenCastDialog=fe;exports.SfxSourcePills=st;exports.SfxSuccessCard=ce;exports.SfxUploader=ql;exports.SfxUrlDialog=Re;exports.Store=Gr;exports.UploadEngine=Co;exports.attachRelativePath=Ft;exports.brandIcon=ve;exports.buildAuthHeaders=Ct;exports.createStore=Wr;exports.cspStyle=W;exports.deepMergeMeta=Cl;exports.exchangeSassKey=Po;exports.formatFileSize=be;exports.getApiBase=Tt;exports.getAuthUrl=Os;exports.getDefaultFileTypeIconUrl=_i;exports.getFieldRegionalVariantHint=dl;exports.getFileTypeIconUrl=wi;exports.getFilesWithMissingRequired=_l;exports.getProviderSources=Oo;exports.getRelativePath=ko;exports.isAssetHasMetadataValue=Lt;exports.isEmpty=Et;exports.isFieldRequired=ki;exports.isProductFieldKey=zo;exports.isUnsupportedField=Lo;exports.isUnsupportedFieldType=hl;exports.listFiles=Xr;exports.listFolderRecursive=Fs;exports.listNextPage=Jr;exports.logout=As;exports.missingRequiredFieldKeysInStaged=$l;exports.productKeyOf=Io;exports.resolveAuth=Eo;exports.resolveFieldRegionalKey=cl;exports.searchProvider=Ts;exports.validateField=yl;exports.validateProductPosition=Ps;exports.validateProductRef=Cs;
