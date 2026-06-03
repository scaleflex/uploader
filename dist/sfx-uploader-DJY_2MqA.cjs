"use strict";const c=require("lit"),$=require("lit/decorators.js"),At=require("lit/directive.js"),fe=require("lit/directives/unsafe-svg.js"),ki=require("lit/directives/unsafe-html.js"),lo=require("lit/directives/class-map.js"),z=r=>typeof r=="string",Be=()=>{let r,e;const t=new Promise((i,o)=>{r=i,e=o});return t.resolve=r,t.reject=e,t},Si=r=>r==null?"":String(r),co=(r,e,t)=>{r.forEach(i=>{e[i]&&(t[i]=e[i])})},po=/###/g,Ci=r=>r&&r.includes("###")?r.replace(po,"."):r,$i=r=>!r||z(r),Ke=(r,e,t)=>{const i=z(e)?e.split("."):e;let o=0;for(;o<i.length-1;){if($i(r))return{};const n=Ci(i[o]);!r[n]&&t&&(r[n]=new t),Object.prototype.hasOwnProperty.call(r,n)?r=r[n]:r={},++o}return $i(r)?{}:{obj:r,k:Ci(i[o])}},Ei=(r,e,t)=>{const{obj:i,k:o}=Ke(r,e,Object);if(i!==void 0||e.length===1){i[o]=t;return}let n=e[e.length-1],s=e.slice(0,e.length-1),a=Ke(r,s,Object);for(;a.obj===void 0&&s.length;)n=`${s[s.length-1]}.${n}`,s=s.slice(0,s.length-1),a=Ke(r,s,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${n}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${n}`]=t},uo=(r,e,t,i)=>{const{obj:o,k:n}=Ke(r,e,Object);o[n]=o[n]||[],o[n].push(t)},ht=(r,e)=>{const{obj:t,k:i}=Ke(r,e);if(t&&Object.prototype.hasOwnProperty.call(t,i))return t[i]},fo=(r,e,t)=>{const i=ht(r,t);return i!==void 0?i:ht(e,t)},vr=(r,e,t)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in r?z(r[i])||r[i]instanceof String||z(e[i])||e[i]instanceof String?t&&(r[i]=e[i]):vr(r[i],e[i],t):r[i]=e[i]);return r},le=r=>r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),ho={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},go=r=>z(r)?r.replace(/[&<>"'\/]/g,e=>ho[e]):r;class mo{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const xo=[" ",",","?","!",";"],vo=new mo(20),bo=(r,e,t)=>{e=e||"",t=t||"";const i=xo.filter(s=>!e.includes(s)&&!t.includes(s));if(i.length===0)return!0;const o=vo.getRegExp(`(${i.map(s=>s==="?"?"\\?":s).join("|")})`);let n=!o.test(r);if(!n){const s=r.indexOf(t);s>0&&!o.test(r.substring(0,s))&&(n=!0)}return n},It=(r,e,t=".")=>{if(!r)return;if(r[e])return Object.prototype.hasOwnProperty.call(r,e)?r[e]:void 0;const i=e.split(t);let o=r;for(let n=0;n<i.length;){if(!o||typeof o!="object")return;let s,a="";for(let l=n;l<i.length;++l)if(l!==n&&(a+=t),a+=i[l],s=o[a],s!==void 0){if(["string","number","boolean"].includes(typeof s)&&l<i.length-1)continue;n+=l-n+1;break}o=s}return o},We=r=>r==null?void 0:r.replace(/_/g,"-"),yo={type:"logger",log(r){this.output("log",r)},warn(r){this.output("warn",r)},error(r){this.output("error",r)},output(r,e){var t,i;(i=(t=console==null?void 0:console[r])==null?void 0:t.apply)==null||i.call(t,console,e)}};class gt{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||yo,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,i,o){return o&&!this.debug?null:(e=e.map(n=>z(n)?n.replace(/[\r\n\x00-\x1F\x7F]/g," "):n),z(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new gt(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new gt(this.logger,e)}}var ae=new gt;class kt{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const o=this.observers[i].get(t)||0;this.observers[i].set(t,o+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){const i=(...o)=>{t(...o),this.off(e,i)};return this.on(e,i),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,n])=>{for(let s=0;s<n;s++)o(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,n])=>{for(let s=0;s<n;s++)o(e,...t)})}}class Pi extends kt{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,i,o={}){var d,p;const n=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,s=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.includes(".")?a=e.split("."):(a=[e,t],i&&(Array.isArray(i)?a.push(...i):z(i)&&n?a.push(...i.split(n)):a.push(i)));const l=ht(this.data,a);return!l&&!t&&!i&&e.includes(".")&&(e=a[0],t=a[1],i=a.slice(2).join(".")),l||!s||!z(i)?l:It((p=(d=this.data)==null?void 0:d[e])==null?void 0:p[t],i,n)}addResource(e,t,i,o,n={silent:!1}){const s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let a=[e,t];i&&(a=a.concat(s?i.split(s):i)),e.includes(".")&&(a=e.split("."),o=t,t=a[1]),this.addNamespaces(t),Ei(this.data,a,o),n.silent||this.emit("added",e,t,i,o)}addResources(e,t,i,o={silent:!1}){for(const n in i)(z(i[n])||Array.isArray(i[n]))&&this.addResource(e,t,n,i[n],{silent:!0});o.silent||this.emit("added",e,t,i)}addResourceBundle(e,t,i,o,n,s={silent:!1,skipCopy:!1}){let a=[e,t];e.includes(".")&&(a=e.split("."),o=i,i=t,t=a[1]),this.addNamespaces(t);let l=ht(this.data,a)||{};s.skipCopy||(i=JSON.parse(JSON.stringify(i))),o?vr(l,i,n):l={...l,...i},Ei(this.data,a,l),s.silent||this.emit("added",e,t,i)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(o=>t[o]&&Object.keys(t[o]).length>0)}toJSON(){return this.data}}var br={processors:{},addPostProcessor(r){this.processors[r.name]=r},handle(r,e,t,i,o){return r.forEach(n=>{var s;e=((s=this.processors[n])==null?void 0:s.process(e,t,i,o))??e}),e}};const yr=Symbol("i18next/PATH_KEY");function wo(){const r=[],e=Object.create(null);let t;return e.get=(i,o)=>{var n;return(n=t==null?void 0:t.revoke)==null||n.call(t),o===yr?r:(r.push(o),t=Proxy.revocable(i,e),t.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Re(r,e){const{[yr]:t}=r(wo()),i=(e==null?void 0:e.keySeparator)??".",o=(e==null?void 0:e.nsSeparator)??":",n=(e==null?void 0:e.enableSelector)==="strict";if(t.length>1&&o){const s=e==null?void 0:e.ns,a=n?Array.isArray(s)?s:s?[s]:null:Array.isArray(s)?s:null;if(a&&(n?a:a.length>1?a.slice(1):[]).includes(t[0]))return`${t[0]}${o}${t.slice(1).join(i)}`}return t.join(i)}const Ut=r=>!z(r)&&typeof r!="boolean"&&typeof r!="number";class mt extends kt{constructor(e,t={}){super(),co(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ae.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const i={...t};if(e==null)return!1;const o=this.resolve(e,i);if((o==null?void 0:o.res)===void 0)return!1;const n=Ut(o.res);return!(i.returnObjects===!1&&n)}extractFromKey(e,t){let i=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const o=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let n=t.ns||this.options.defaultNS||[];const s=i&&e.includes(i),a=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!bo(e,i,o);if(s&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:z(n)?[n]:n};const d=e.split(i);(i!==o||i===o&&this.options.ns.includes(d[0]))&&(n=d.shift()),e=d.join(o)}return{key:e,namespaces:z(n)?[n]:n}}translate(e,t,i){let o=typeof t=="object"?{...t}:t;if(typeof o!="object"&&this.options.overloadTranslationOptionHandler&&(o=this.options.overloadTranslationOptionHandler(arguments)),typeof o=="object"&&(o={...o}),o||(o={}),e==null)return"";typeof e=="function"&&(e=Re(e,{...this.options,...o})),Array.isArray(e)||(e=[String(e)]),e=e.map(O=>typeof O=="function"?Re(O,{...this.options,...o}):String(O));const n=o.returnDetails!==void 0?o.returnDetails:this.options.returnDetails,s=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],o),d=l[l.length-1];let p=o.nsSeparator!==void 0?o.nsSeparator:this.options.nsSeparator;p===void 0&&(p=":");const u=o.lng||this.language,v=o.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((u==null?void 0:u.toLowerCase())==="cimode")return v?n?{res:`${d}${p}${a}`,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:d,usedParams:this.getUsedParamsDetails(o)}:`${d}${p}${a}`:n?{res:a,usedKey:a,exactUsedKey:a,usedLng:u,usedNS:d,usedParams:this.getUsedParamsDetails(o)}:a;const _=this.resolve(e,o);let b=_==null?void 0:_.res;const w=(_==null?void 0:_.usedKey)||a,P=(_==null?void 0:_.exactUsedKey)||a,L=["[object Number]","[object Function]","[object RegExp]"],y=o.joinArrays!==void 0?o.joinArrays:this.options.joinArrays,m=!this.i18nFormat||this.i18nFormat.handleAsObject,x=o.count!==void 0&&!z(o.count),k=mt.hasDefaultValue(o),R=x?this.pluralResolver.getSuffix(u,o.count,o):"",U=o.ordinal&&x?this.pluralResolver.getSuffix(u,o.count,{ordinal:!1}):"",j=x&&!o.ordinal&&o.count===0,F=j&&o[`defaultValue${this.options.pluralSeparator}zero`]||o[`defaultValue${R}`]||o[`defaultValue${U}`]||o.defaultValue;let M=b;m&&!b&&k&&(M=F);const re=Ut(M),ue=Object.prototype.toString.apply(M);if(m&&M&&re&&!L.includes(ue)&&!(z(y)&&Array.isArray(M))){if(!o.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const O=this.options.returnedObjectHandler?this.options.returnedObjectHandler(w,M,{...o,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return n?(_.res=O,_.usedParams=this.getUsedParamsDetails(o),_):O}if(s){const O=Array.isArray(M),B=O?[]:{},se=O?P:w;for(const g in M)if(Object.prototype.hasOwnProperty.call(M,g)){const f=`${se}${s}${g}`;k&&!b?B[g]=this.translate(f,{...o,defaultValue:Ut(F)?F[g]:void 0,joinArrays:!1,ns:l}):B[g]=this.translate(f,{...o,joinArrays:!1,ns:l}),B[g]===f&&(B[g]=M[g])}b=B}}else if(m&&z(y)&&Array.isArray(b))b=b.join(y),b&&(b=this.extendTranslation(b,e,o,i));else{let O=!1,B=!1;!this.isValidLookup(b)&&k&&(O=!0,b=F),this.isValidLookup(b)||(B=!0,b=a);const g=(o.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&B?void 0:b,f=k&&F!==b&&this.options.updateMissing;if(B||O||f){if(this.logger.log(f?"updateKey":"missingKey",u,d,x&&!f?`${a}${this.pluralResolver.getSuffix(u,o.count,o)}`:a,f?F:b),s){const S=this.resolve(a,{...o,keySeparator:!1});S&&S.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let h=[];const C=this.languageUtils.getFallbackCodes(this.options.fallbackLng,o.lng||this.language);if(this.options.saveMissingTo==="fallback"&&C&&C[0])for(let S=0;S<C.length;S++)h.push(C[S]);else this.options.saveMissingTo==="all"?h=this.languageUtils.toResolveHierarchy(o.lng||this.language):h.push(o.lng||this.language);const E=(S,T,D)=>{var V;const I=k&&D!==b?D:g;this.options.missingKeyHandler?this.options.missingKeyHandler(S,d,T,I,f,o):(V=this.backendConnector)!=null&&V.saveMissing&&this.backendConnector.saveMissing(S,d,T,I,f,o),this.emit("missingKey",S,d,T,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&x?h.forEach(S=>{const T=this.pluralResolver.getSuffixes(S,o);j&&o[`defaultValue${this.options.pluralSeparator}zero`]&&!T.includes(`${this.options.pluralSeparator}zero`)&&T.push(`${this.options.pluralSeparator}zero`),T.forEach(D=>{E([S],a+D,o[`defaultValue${D}`]||F)})}):E(h,a,F))}b=this.extendTranslation(b,e,o,_,i),B&&b===a&&this.options.appendNamespaceToMissingKey&&(b=`${d}${p}${a}`),(B||O)&&this.options.parseMissingKeyHandler&&(b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}${p}${a}`:a,O?b:void 0,o))}return n?(_.res=b,_.usedParams=this.getUsedParamsDetails(o),_):b}extendTranslation(e,t,i,o,n){var l,d;if((l=this.i18nFormat)!=null&&l.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const p=z(e)&&(((d=i==null?void 0:i.interpolation)==null?void 0:d.skipOnVariables)!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(p){const _=e.match(this.interpolator.nestingRegexp);u=_&&_.length}let v=i.replace&&!z(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(v={...this.options.interpolation.defaultVariables,...v}),e=this.interpolator.interpolate(e,v,i.lng||this.language||o.usedLng,i),p){const _=e.match(this.interpolator.nestingRegexp),b=_&&_.length;u<b&&(i.nest=!1)}!i.lng&&o&&o.res&&(i.lng=this.language||o.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,(..._)=>(n==null?void 0:n[0])===_[0]&&!i.context?(this.logger.warn(`It seems you are nesting recursively key: ${_[0]} in key: ${t[0]}`),null):this.translate(..._,t),i)),i.interpolation&&this.interpolator.reset()}const s=i.postProcess||this.options.postProcess,a=z(s)?[s]:s;return e!=null&&(a!=null&&a.length)&&i.applyPostProcessor!==!1&&(e=br.handle(a,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e,t={}){let i,o,n,s,a;return z(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?Re(l,{...this.options,...t}):l)),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,t),p=d.key;o=p;let u=d.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const v=t.count!==void 0&&!z(t.count),_=v&&!t.ordinal&&t.count===0,b=t.context!==void 0&&(z(t.context)||typeof t.context=="number")&&t.context!=="",w=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);u.forEach(P=>{var L,y;this.isValidLookup(i)||(a=P,!this.checkedLoadedFor[`${w[0]}-${P}`]&&((L=this.utils)!=null&&L.hasLoadedNamespace)&&!((y=this.utils)!=null&&y.hasLoadedNamespace(a))&&(this.checkedLoadedFor[`${w[0]}-${P}`]=!0,this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(m=>{var R;if(this.isValidLookup(i))return;s=m;const x=[p];if((R=this.i18nFormat)!=null&&R.addLookupKeys)this.i18nFormat.addLookupKeys(x,p,m,P,t);else{let U;v&&(U=this.pluralResolver.getSuffix(m,t.count,t));const j=`${this.options.pluralSeparator}zero`,F=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(v&&(t.ordinal&&U.startsWith(F)&&x.push(p+U.replace(F,this.options.pluralSeparator)),x.push(p+U),_&&x.push(p+j)),b){const M=`${p}${this.options.contextSeparator||"_"}${t.context}`;x.push(M),v&&(t.ordinal&&U.startsWith(F)&&x.push(M+U.replace(F,this.options.pluralSeparator)),x.push(M+U),_&&x.push(M+j))}}let k;for(;k=x.pop();)this.isValidLookup(i)||(n=k,i=this.getResource(m,P,k,t))}))})}),{res:i,usedKey:o,exactUsedKey:n,usedLng:s,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,i,o={}){var n;return(n=this.i18nFormat)!=null&&n.getResource?this.i18nFormat.getResource(e,t,i,o):this.resourceStore.getResource(e,t,i,o)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!z(e.replace);let o=i?e.replace:e;if(i&&typeof e.count<"u"&&(o.count=e.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!i){o={...o};for(const n of t)delete o[n]}return o}static hasDefaultValue(e){const t="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&i.startsWith(t)&&e[i]!==void 0)return!0;return!1}}class Ui{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ae.create("languageUtils")}getScriptPartFromCode(e){if(e=We(e),!e||!e.includes("-"))return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=We(e),!e||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(z(e)&&e.includes("-")){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(i=>{if(t)return;const o=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(o))&&(t=o)}),!t&&this.options.supportedLngs&&e.forEach(i=>{if(t)return;const o=this.getScriptPartFromCode(i);if(this.isSupportedCode(o))return t=o;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(s=>s===n?!0:!s.includes("-")&&!n.includes("-")?!1:!!(s.includes("-")&&!n.includes("-")&&s.slice(0,s.indexOf("-"))===n||s.startsWith(n)&&n.length>1))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),z(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let i=e[t];return i||(i=e[this.getScriptPartFromCode(t)]),i||(i=e[this.formatLanguageCode(t)]),i||(i=e[this.getLanguagePartFromCode(t)]),i||(i=e.default),i||[]}toResolveHierarchy(e,t){const i=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),o=[],n=s=>{s&&(this.isSupportedCode(s)?o.push(s):this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))};return z(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&n(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&n(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&n(this.getLanguagePartFromCode(e))):z(e)&&n(this.formatLanguageCode(e)),i.forEach(s=>{o.includes(s)||n(this.formatLanguageCode(s))}),o}}const Oi={zero:0,one:1,two:2,few:3,many:4,other:5},Li={select:r=>r===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class _o{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=ae.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const i=We(e==="dev"?"en":e),o=t.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:o});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let s;try{s=new Intl.PluralRules(i,{type:o})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Li;if(!e.match(/-|_/))return Li;const l=this.languageUtils.getLanguagePartFromCode(e);s=this.getRule(l,t)}return this.pluralRulesCache[n]=s,s}needsPlural(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),(i==null?void 0:i.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,i={}){return this.getSuffixes(e,i).map(o=>`${t}${o}`)}getSuffixes(e,t={}){let i=this.getRule(e,t);return i||(i=this.getRule("dev",t)),i?i.resolvedOptions().pluralCategories.sort((o,n)=>Oi[o]-Oi[n]).map(o=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${o}`):[]}getSuffix(e,t,i={}){const o=this.getRule(e,i);return o?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${o.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,i))}}const Ri=(r,e,t,i=".",o=!0)=>{let n=fo(r,e,t);return!n&&o&&z(t)&&(n=It(r,t,i),n===void 0&&(n=It(e,t,i))),n},Ot=r=>r.replace(/\$/g,"$$$$");class Fi{constructor(e={}){var t;this.logger=ae.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(i=>i),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:i,useRawValueToEscape:o,prefix:n,prefixEscaped:s,suffix:a,suffixEscaped:l,formatSeparator:d,unescapeSuffix:p,unescapePrefix:u,nestingPrefix:v,nestingPrefixEscaped:_,nestingSuffix:b,nestingSuffixEscaped:w,nestingOptionsSeparator:P,maxReplaces:L,alwaysFormat:y}=e.interpolation;this.escape=t!==void 0?t:go,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=n?le(n):s||"{{",this.suffix=a?le(a):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=p?"":u?le(u):"-",this.unescapeSuffix=this.unescapePrefix?"":p?le(p):"",this.nestingPrefix=v?le(v):_||le("$t("),this.nestingSuffix=b?le(b):w||le(")"),this.nestingOptionsSeparator=P||",",this.maxReplaces=L||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,i)=>(t==null?void 0:t.source)===i?(t.lastIndex=0,t):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,i,o){var _;let n,s,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=b=>{if(!b.includes(this.formatSeparator)){const y=Ri(t,l,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(y,void 0,i,{...o,...t,interpolationkey:b}):y}const w=b.split(this.formatSeparator),P=w.shift().trim(),L=w.join(this.formatSeparator).trim();return this.format(Ri(t,l,P,this.options.keySeparator,this.options.ignoreJSONStructure),L,i,{...o,...t,interpolationkey:P})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const p=(o==null?void 0:o.missingInterpolationHandler)||this.options.missingInterpolationHandler,u=((_=o==null?void 0:o.interpolation)==null?void 0:_.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>Ot(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?Ot(this.escape(b)):Ot(b)}].forEach(b=>{for(a=0;n=b.regex.exec(e);){const w=n[1].trim();if(s=d(w),s===void 0)if(typeof p=="function"){const L=p(e,n,o);s=z(L)?L:""}else if(o&&Object.prototype.hasOwnProperty.call(o,w))s="";else if(u){s=n[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${e}`),s="";else!z(s)&&!this.useRawValueToEscape&&(s=Si(s));const P=b.safeValue(s);if(e=e.replace(n[0],P),u?(b.regex.lastIndex+=s.length,b.regex.lastIndex-=n[0].length):b.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,t,i={}){let o,n,s;const a=(l,d)=>{const p=this.nestingOptionsSeparator;if(!l.includes(p))return l;const u=l.split(new RegExp(`${le(p)}[ ]*{`));let v=`{${u[1]}`;l=u[0],v=this.interpolate(v,s);const _=v.match(/'/g),b=v.match(/"/g);(((_==null?void 0:_.length)??0)%2===0&&!b||((b==null?void 0:b.length)??0)%2!==0)&&(v=v.replace(/'/g,'"'));try{s=JSON.parse(v),d&&(s={...d,...s})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,w),`${l}${p}${v}`}return s.defaultValue&&s.defaultValue.includes(this.prefix)&&delete s.defaultValue,l};for(;o=this.nestingRegexp.exec(e);){let l=[];s={...i},s=s.replace&&!z(s.replace)?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;const d=/{.*}/.test(o[1])?o[1].lastIndexOf("}")+1:o[1].indexOf(this.formatSeparator);if(d!==-1&&(l=o[1].slice(d).split(this.formatSeparator).map(p=>p.trim()).filter(Boolean),o[1]=o[1].slice(0,d)),n=t(a.call(this,o[1].trim(),s),s),n&&o[0]===e&&!z(n))return n;z(n)||(n=Si(n)),n||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`),n=""),l.length&&(n=l.reduce((p,u)=>this.format(p,u,i.lng,{...i,interpolationkey:o[1].trim()}),n.trim())),e=e.replace(o[0],n),this.regexp.lastIndex=0}return e}}const ko=r=>{let e=r.toLowerCase().trim();const t={};if(r.includes("(")){const i=r.split("(");e=i[0].toLowerCase().trim();const o=i[1].slice(0,-1);e==="currency"&&!o.includes(":")?t.currency||(t.currency=o.trim()):e==="relativetime"&&!o.includes(":")?t.range||(t.range=o.trim()):o.split(";").forEach(s=>{if(s){const[a,...l]=s.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),p=a.trim();t[p]||(t[p]=d),d==="false"&&(t[p]=!1),d==="true"&&(t[p]=!0),isNaN(d)||(t[p]=parseInt(d,10))}})}return{formatName:e,formatOptions:t}},Ti=r=>{const e={};return(t,i,o)=>{let n=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(n={...n,[o.interpolationkey]:void 0});const s=i+JSON.stringify(n);let a=e[s];return a||(a=r(We(i),o),e[s]=a),a(t)}},So=r=>(e,t,i)=>r(We(t),i)(e);class Co{constructor(e={}){this.logger=ae.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const i=t.cacheInBuiltFormats?Ti:So;this.formats={number:i((o,n)=>{const s=new Intl.NumberFormat(o,{...n});return a=>s.format(a)}),currency:i((o,n)=>{const s=new Intl.NumberFormat(o,{...n,style:"currency"});return a=>s.format(a)}),datetime:i((o,n)=>{const s=new Intl.DateTimeFormat(o,{...n});return a=>s.format(a)}),relativetime:i((o,n)=>{const s=new Intl.RelativeTimeFormat(o,{...n});return a=>s.format(a,n.range||"day")}),list:i((o,n)=>{const s=new Intl.ListFormat(o,{...n});return a=>s.format(a)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ti(t)}format(e,t,i,o={}){if(!t||e==null)return e;const n=t.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&!n[0].includes(")")&&n.find(a=>a.includes(")"))){const a=n.findIndex(l=>l.includes(")"));n[0]=[n[0],...n.splice(1,a)].join(this.formatSeparator)}return n.reduce((a,l)=>{var u;const{formatName:d,formatOptions:p}=ko(l);if(this.formats[d]){let v=a;try{const _=((u=o==null?void 0:o.formatParams)==null?void 0:u[o.interpolationkey])||{},b=_.locale||_.lng||o.locale||o.lng||i;v=this.formats[d](a,b,{...p,...o,..._})}catch(_){this.logger.warn(_)}return v}else this.logger.warn(`there was no format function for ${d}`);return a},e)}}const $o=(r,e)=>{r.pending[e]!==void 0&&(delete r.pending[e],r.pendingCount--)};class Eo extends kt{constructor(e,t,i,o={}){var n,s;super(),this.backend=e,this.store=t,this.services=i,this.languageUtils=i.languageUtils,this.options=o,this.logger=ae.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],(s=(n=this.backend)==null?void 0:n.init)==null||s.call(n,i,o.backend,o)}queueLoad(e,t,i,o){const n={},s={},a={},l={};return e.forEach(d=>{let p=!0;t.forEach(u=>{const v=`${d}|${u}`;!i.reload&&this.store.hasResourceBundle(d,u)?this.state[v]=2:this.state[v]<0||(this.state[v]===1?s[v]===void 0&&(s[v]=!0):(this.state[v]=1,p=!1,s[v]===void 0&&(s[v]=!0),n[v]===void 0&&(n[v]=!0),l[u]===void 0&&(l[u]=!0)))}),p||(a[d]=!0)}),(Object.keys(n).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(n),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,t,i){const o=e.split("|"),n=o[0],s=o[1];t&&this.emit("failedLoading",n,s,t),!t&&i&&this.store.addResourceBundle(n,s,i,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{uo(l.loaded,[n],s),$o(l,e),t&&l.errors.push(t),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{a[d]||(a[d]={});const p=l.loaded[d];p.length&&p.forEach(u=>{a[d][u]===void 0&&(a[d][u]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,t,i,o=0,n=this.retryTimeout,s){if(!e.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:i,tried:o,wait:n,callback:s});return}this.readingCalls++;const a=(d,p)=>{if(this.readingCalls--,this.waitingReads.length>0){const u=this.waitingReads.shift();this.read(u.lng,u.ns,u.fcName,u.tried,u.wait,u.callback)}if(d&&p&&o<this.maxRetries){setTimeout(()=>{this.read(e,t,i,o+1,n*2,s)},n);return}s(d,p)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,t);d&&typeof d.then=="function"?d.then(p=>a(null,p)).catch(a):a(null,d)}catch(d){a(d)}return}return l(e,t,a)}prepareLoading(e,t,i={},o){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();z(e)&&(e=this.languageUtils.toResolveHierarchy(e)),z(t)&&(t=[t]);const n=this.queueLoad(e,t,i,o);if(!n.toLoad.length)return n.pending.length||o(),null;n.toLoad.forEach(s=>{this.loadOne(s)})}load(e,t,i){this.prepareLoading(e,t,{},i)}reload(e,t,i){this.prepareLoading(e,t,{reload:!0},i)}loadOne(e,t=""){const i=e.split("|"),o=i[0],n=i[1];this.read(o,n,"read",void 0,void 0,(s,a)=>{s&&this.logger.warn(`${t}loading namespace ${n} for language ${o} failed`,s),!s&&a&&this.logger.log(`${t}loaded namespace ${n} for language ${o}`,a),this.loaded(e,s,a)})}saveMissing(e,t,i,o,n,s={},a=()=>{}){var l,d,p,u,v;if((d=(l=this.services)==null?void 0:l.utils)!=null&&d.hasLoadedNamespace&&!((u=(p=this.services)==null?void 0:p.utils)!=null&&u.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if((v=this.backend)!=null&&v.create){const _={...s,isUpdate:n},b=this.backend.create.bind(this.backend);if(b.length<6)try{let w;b.length===5?w=b(e,t,i,o,_):w=b(e,t,i,o),w&&typeof w.then=="function"?w.then(P=>a(null,P)).catch(a):a(null,w)}catch(w){a(w)}else b(e,t,i,o,a,_)}!e||!e[0]||this.store.addResource(e[0],t,i,o)}}}const Lt=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:r=>{let e={};if(typeof r[1]=="object"&&(e=r[1]),z(r[1])&&(e.defaultValue=r[1]),z(r[2])&&(e.tDescription=r[2]),typeof r[2]=="object"||typeof r[3]=="object"){const t=r[3]||r[2];Object.keys(t).forEach(i=>{e[i]=t[i]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),zi=r=>(z(r.ns)&&(r.ns=[r.ns]),z(r.fallbackLng)&&(r.fallbackLng=[r.fallbackLng]),z(r.fallbackNS)&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&!r.supportedLngs.includes("cimode")&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r),at=()=>{},Po=r=>{Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(t=>{typeof r[t]=="function"&&(r[t]=r[t].bind(r))})};class Ye extends kt{constructor(e={},t){if(super(),this.options=zi(e),this.services={},this.logger=ae,this.modules={external:[]},Po(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(z(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const i=Lt();this.options={...i,...this.options,...zi(e)},this.options.interpolation={...i.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=i.overloadTranslationOptionHandler);const o=d=>d?typeof d=="function"?new d:d:null;if(!this.options.isClone){this.modules.logger?ae.init(o(this.modules.logger),this.options):ae.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:d=Co;const p=new Ui(this.options);this.store=new Pi(this.options.resources,this.options);const u=this.services;u.logger=ae,u.resourceStore=this.store,u.languageUtils=p,u.pluralResolver=new _o(p,{prepend:this.options.pluralSeparator}),d&&(u.formatter=o(d),u.formatter.init&&u.formatter.init(u,this.options),this.options.interpolation.format=u.formatter.format.bind(u.formatter)),u.interpolator=new Fi(this.options),u.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},u.backendConnector=new Eo(o(this.modules.backend),u.resourceStore,u,this.options),u.backendConnector.on("*",(v,..._)=>{this.emit(v,..._)}),this.modules.languageDetector&&(u.languageDetector=o(this.modules.languageDetector),u.languageDetector.init&&u.languageDetector.init(u,this.options.detection,this.options)),this.modules.i18nFormat&&(u.i18nFormat=o(this.modules.i18nFormat),u.i18nFormat.init&&u.i18nFormat.init(this)),this.translator=new mt(this.services,this.options),this.translator.on("*",(v,..._)=>{this.emit(v,..._)}),this.modules.external.forEach(v=>{v.init&&v.init(this)})}if(this.format=this.options.interpolation.format,t||(t=at),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=(...p)=>this.store[d](...p)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=(...p)=>(this.store[d](...p),this)});const a=Be(),l=()=>{const d=(p,u)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(u),t(p,u)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),a}loadResources(e,t=at){var n,s;let i=t;const o=z(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if((o==null?void 0:o.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const a=[],l=d=>{if(!d||d==="cimode")return;this.services.languageUtils.toResolveHierarchy(d).forEach(u=>{u!=="cimode"&&(a.includes(u)||a.push(u))})};o?l(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p=>l(p)),(s=(n=this.options.preload)==null?void 0:n.forEach)==null||s.call(n,d=>l(d)),this.services.backendConnector.load(a,this.options.ns,d=>{!d&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(d)})}else i(null)}reloadResources(e,t,i){const o=Be();return typeof e=="function"&&(i=e,e=void 0),typeof t=="function"&&(i=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),i||(i=at),this.services.backendConnector.reload(e,t,n=>{o.resolve(),i(n)}),o}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&br.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let t=0;t<this.languages.length;t++){const i=this.languages[t];if(!["cimode","dev"].includes(i)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const i=Be();this.emit("languageChanging",e);const o=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},n=(a,l)=>{l?this.isLanguageChangingTo===e&&(o(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,i.resolve((...d)=>this.t(...d)),t&&t(a,(...d)=>this.t(...d))},s=a=>{var p,u;!e&&!a&&this.services.languageDetector&&(a=[]);const l=z(a)?a:a&&a[0],d=this.store.hasLanguageSomeTranslations(l)?l:this.services.languageUtils.getBestMatchFromCodes(z(a)?[a]:a);d&&(this.language||o(d),this.translator.language||this.translator.changeLanguage(d),(u=(p=this.services.languageDetector)==null?void 0:p.cacheUserLanguage)==null||u.call(p,d)),this.loadResources(d,v=>{n(v,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),i}getFixedT(e,t,i,o){const n=o==null?void 0:o.scopeNs,s=(a,l,...d)=>{let p;typeof l!="object"?p=this.options.overloadTranslationOptionHandler([a,l].concat(d)):p={...l},p.lng=p.lng||s.lng,p.lngs=p.lngs||s.lngs;const u=p.ns!==void 0&&p.ns!==null;p.ns=p.ns||s.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||i||s.keyPrefix);const v={...this.options,...p};Array.isArray(n)&&!u&&(v.ns=n),typeof p.keyPrefix=="function"&&(p.keyPrefix=Re(p.keyPrefix,v));const _=this.options.keySeparator||".";let b;return p.keyPrefix&&Array.isArray(a)?b=a.map(w=>(typeof w=="function"&&(w=Re(w,v)),`${p.keyPrefix}${_}${w}`)):(typeof a=="function"&&(a=Re(a,v)),b=p.keyPrefix?`${p.keyPrefix}${_}${a}`:a),this.t(b,p)};return z(e)?s.lng=e:s.lngs=e,s.ns=t,s.keyPrefix=i,s}t(...e){var t;return(t=this.translator)==null?void 0:t.translate(...e)}exists(...e){var t;return(t=this.translator)==null?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=t.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,n=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const s=(a,l)=>{const d=this.services.backendConnector.state[`${a}|${l}`];return d===-1||d===0||d===2};if(t.precheck){const a=t.precheck(this,s);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(i,e)&&(!o||s(n,e)))}loadNamespaces(e,t){const i=Be();return this.options.ns?(z(e)&&(e=[e]),e.forEach(o=>{this.options.ns.includes(o)||this.options.ns.push(o)}),this.loadResources(o=>{i.resolve(),t&&t(o)}),i):(t&&t(),Promise.resolve())}loadLanguages(e,t){const i=Be();z(e)&&(e=[e]);const o=this.options.preload||[],n=e.filter(s=>!o.includes(s)&&this.services.languageUtils.isSupportedCode(s));return n.length?(this.options.preload=o.concat(n),this.loadResources(s=>{i.resolve(),t&&t(s)}),i):(t&&t(),Promise.resolve())}dir(e){var o,n;if(e||(e=this.resolvedLanguage||(((o=this.languages)==null?void 0:o.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const s=new Intl.Locale(e);if(s&&s.getTextInfo){const a=s.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=((n=this.services)==null?void 0:n.languageUtils)||new Ui(Lt());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.includes(i.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const i=new Ye(e,t);return i.createInstance=Ye.createInstance,i}cloneInstance(e={},t=at){const i=e.forkResourceStore;i&&delete e.forkResourceStore;const o={...this.options,...e,isClone:!0},n=new Ye(o);if((e.debug!==void 0||e.prefix!==void 0)&&(n.logger=n.logger.clone(e)),["store","services","language"].forEach(a=>{n[a]=this[a]}),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i){const a=Object.keys(this.store.data).reduce((l,d)=>(l[d]={...this.store.data[d]},l[d]=Object.keys(l[d]).reduce((p,u)=>(p[u]={...l[d][u]},p),l[d]),l),{});n.store=new Pi(a,o),n.services.resourceStore=n.store}if(e.interpolation){const l={...Lt().interpolation,...this.options.interpolation,...e.interpolation},d={...o,interpolation:l};n.services.interpolator=new Fi(d)}return n.translator=new mt(n.services,o),n.translator.on("*",(a,...l)=>{n.emit(a,...l)}),n.init(o,t),n.translator.options=o,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Z=Ye.createInstance();Z.createInstance;Z.dir;Z.init;Z.loadResources;Z.reloadResources;Z.use;Z.changeLanguage;Z.getFixedT;Z.t;Z.exists;Z.setDefaultNamespace;Z.hasLoadedNamespace;Z.loadNamespaces;Z.loadLanguages;const wr=["__proto__","constructor","prototype"];function _r(r){return!(typeof r!="string"||r.length===0||r.length>128||wr.indexOf(r)>-1||r.indexOf("..")>-1||r.indexOf("\\")>-1||/[?#%\s@]/.test(r)||/[\x00-\x1F\x7F]/.test(r))}function kr(r){return!(!_r(r)||r.indexOf("/")>-1)}function Uo(r){return _r(r)}const Oo={lng:kr,ns:Uo};function lt(r){return typeof r!="string"?r:r.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function Lo(r){if(typeof r!="string"||r.length===0)return r;try{const e=new URL(r);return e.username||e.password?(e.username="",e.password="",e.toString()):r}catch{return r.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function Sr(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function Ro(r){return!!r&&typeof r.then=="function"}function Fo(r){return Ro(r)?r:Promise.resolve(r)}const To=/\{\{(.+?)\}\}/g;function ji(r,e){let t=!1;const i=r.replace(To,(o,n)=>{const s=n.trim();if(wr.indexOf(s)>-1)return o;const a=e[s];if(a==null)return o;const l=Oo[s]||kr,d=String(a).split("+");for(const p of d)if(!l(p))return t=!0,o;return d.join("+")});return t?null:i}const we=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let xt;typeof fetch=="function"?xt=fetch:we&&typeof we.fetch=="function"&&(xt=we.fetch);const Di=Sr()&&we?we.XMLHttpRequest:void 0,zo=typeof ActiveXObject=="function"&&we?we.ActiveXObject:void 0,Cr=["__proto__","constructor","prototype"],Mt=(r,e)=>{if(e&&typeof e=="object"){let t="";for(const i of Object.keys(e))Cr.indexOf(i)>-1||(t+="&"+encodeURIComponent(i)+"="+encodeURIComponent(e[i]));if(!t)return r;r=r+(r.indexOf("?")!==-1?"&":"?")+t.slice(1)}return r},Ai=(r,e,t,i)=>{const o=n=>{if(!n.ok)return t(n.statusText||"Error",{status:n.status});n.text().then(s=>{t(null,{status:n.status,data:s})}).catch(t)};if(i){const n=i(r,e);if(n instanceof Promise){n.then(o).catch(t);return}}typeof fetch=="function"?fetch(r,e).then(o).catch(t):xt(r,e).then(o).catch(t)},jo=(r,e,t,i)=>{r.queryStringParams&&(e=Mt(e,r.queryStringParams));const o={...typeof r.customHeaders=="function"?r.customHeaders():r.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),t&&(o["Content-Type"]="application/json");const n=typeof r.requestOptions=="function"?r.requestOptions(t):r.requestOptions,s={method:t?"POST":"GET",body:t?r.stringify(t):void 0,headers:o,...r._omitFetchOptions?{}:n},a=typeof r.alternateFetch=="function"&&r.alternateFetch.length>=1?r.alternateFetch:void 0;try{Ai(e,s,i,a)}catch(l){if(!n||Object.keys(n).length===0||!l.message||l.message.indexOf("not implemented")<0)return i(l);try{Object.keys(n).forEach(d=>{delete s[d]}),Ai(e,s,i,a),r._omitFetchOptions=!0}catch(d){i(d)}}},Do=(r,e,t,i)=>{t&&typeof t=="object"&&(t=Mt("",t).slice(1)),r.queryStringParams&&(e=Mt(e,r.queryStringParams));try{const o=Di?new Di:new zo("MSXML2.XMLHTTP.3.0");o.open(t?"POST":"GET",e,1),r.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!r.withCredentials,t&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");let n=r.customHeaders;if(n=typeof n=="function"?n():n,n)for(const s of Object.keys(n))Cr.indexOf(s)>-1||o.setRequestHeader(s,n[s]);o.onreadystatechange=()=>{o.readyState>3&&i(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(t)}catch(o){console&&console.log(o)}},Ao=(r,e,t,i)=>{if(typeof t=="function"&&(i=t,t=void 0),i=i||(()=>{}),xt&&e.indexOf("file:")!==0)return jo(r,e,t,i);if(Sr()||typeof ActiveXObject=="function")return Do(r,e,t,i);i(new Error("No fetch and no xhr implementation found!"))},Io=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:r=>JSON.parse(r),stringify:JSON.stringify,parsePayload:(r,e,t)=>({[e]:t||""}),parseLoadPayload:(r,e)=>{},request:Ao,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var $r=class{constructor(r,e={},t={}){this.services=r,this.options=e,this.allOptions=t,this.type="backend",this.init(r,e,t)}init(r,e={},t={}){if(this.services=r,this.options={...Io(),...this.options||{},...e},this.allOptions=t,this.services&&this.options.reloadInterval){const i=setInterval(()=>this.reload(),this.options.reloadInterval);typeof i=="object"&&typeof i.unref=="function"&&i.unref()}}readMulti(r,e,t){this._readAny(r,r,e,e,t)}read(r,e,t){this._readAny([r],r,[e],e,t)}_readAny(r,e,t,i,o){let n=this.options.loadPath;typeof this.options.loadPath=="function"&&(n=this.options.loadPath(r,t)),n=Fo(n),n.then(s=>{if(!s)return o(null,{});const a=ji(s,{lng:r.join("+"),ns:t.join("+")});if(a==null){const l=r.map(lt).join(", "),d=t.map(lt).join(", ");return o(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+d+"]"),!1)}this.loadUrl(a,o,e,i)})}loadUrl(r,e,t,i){const o=typeof t=="string"?[t]:t,n=typeof i=="string"?[i]:i,s=this.options.parseLoadPayload(o,n),a=lt(Lo(r));this.options.request(this.options,r,s,(l,d)=>{if(d&&(d.status>=500&&d.status<600||!d.status))return e("failed loading "+a+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return e("failed loading "+a+"; status code: "+d.status,!1);if(!d&&l&&l.message){const v=l.message.toLowerCase();if(["failed","fetch","network","load"].find(_=>v.indexOf(_)>-1))return e("failed loading "+a+": "+lt(l.message),!0)}if(l)return e(l,!1);let p,u;try{typeof d.data=="string"?p=this.options.parse(d.data,t,i):p=d.data}catch{u="failed parsing "+a+" to json"}if(u)return e(u,!1);e(null,p)})}create(r,e,t,i,o){if(!this.options.addPath)return;typeof r=="string"&&(r=[r]);const n=this.options.parsePayload(e,t,i);let s=0;const a=[],l=[];r.forEach(d=>{let p=this.options.addPath;typeof this.options.addPath=="function"&&(p=this.options.addPath(d,e));const u=ji(p,{lng:d,ns:e});if(u==null){s+=1,o&&s===r.length&&o(a,l);return}this.options.request(this.options,u,n,(v,_)=>{s+=1,a.push(v),l.push(_),s===r.length&&typeof o=="function"&&o(a,l)})})}reload(){const{backendConnector:r,languageUtils:e,logger:t}=this.services,i=r.language;if(i&&i.toLowerCase()==="cimode")return;const o=[],n=s=>{e.toResolveHierarchy(s).forEach(a=>{o.indexOf(a)<0&&o.push(a)})};n(i),this.allOptions.preload&&this.allOptions.preload.forEach(s=>n(s)),o.forEach(s=>{this.allOptions.ns.forEach(a=>{r.read(s,a,"read",null,null,(l,d)=>{l&&t.warn(`loading namespace ${a} for language ${s} failed`,l),!l&&d&&t.log(`loaded namespace ${a} for language ${s}`,d),r.loaded(`${s}|${a}`,l,d)})})})}};$r.type="backend";const Er="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Mo="https://i18n-fastly.ultrafast.io",Bo="https://neo.wordplex.io",Bt="uploader";let ye=null;async function No(r="en"){return ye?(ye.language!==r&&await ye.changeLanguage(r),{i18n:ye,isNew:!1}):(ye=Z.createInstance(),await ye.use($r).init({lng:r,fallbackLng:"en",ns:[Bt],defaultNS:Bt,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{loadPath:`${Mo}/api/export/grid/f2/${Er}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){var n;const i=JSON.parse(e),o=Array.isArray(t)?t[0]:t;return o&&((n=i[o])!=null&&n.__without_namespace)?i[o].__without_namespace:i}}}),{i18n:ye,isNew:!0})}const Ho="sfxUploaderTranslationsMissingKeysEnabled";class qo{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(Ho)==="true",this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,t,i,o)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,t,i,o))})}handleMissingKey(e,t="",i=Bt){if(!this.enabled)return;const o=`${i}:${e}`;this._missingKeys[o]={value:t,ns:i}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${Bo}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${Er}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:t,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:t}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const Vo=new qo,Rt=r=>r.includes("-")?r:r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Ko extends At.Directive{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==At.PartType.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return c.noChange}update(e,[t]){if(t===this._lastStyles)return c.noChange;this._lastStyles=t;const{style:i}=e.element,o=t??{};for(const n of this._appliedProps)(!(n in o)||o[n]==null||o[n]==="")&&(i.removeProperty(Rt(n)),this._appliedProps.delete(n));for(const[n,s]of Object.entries(o))s!=null&&s!==""?(i.setProperty(Rt(n),s),this._appliedProps.add(n)):this._appliedProps.has(n)&&(i.removeProperty(Rt(n)),this._appliedProps.delete(n));return c.noChange}}const X=At.directive(Ko);class Pr{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,t))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function K(r,e,t){const i=r.getState().files,o=i.get(e);if(!o)return;const n=new Map(i);n.set(e,{...o,...t}),r.setState({files:n})}function Ce(r,e){const t=new Map(r.getState().files);t.set(e.id,e),r.setState({files:t})}function Ii(r,e){const t=r.getState().files;if(!t.has(e))return;const i=new Map(t);i.delete(e),r.setState({files:i})}function Ur(){return new Pr({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:(r,e,t)=>{const i=(o,n)=>o.replace(/\{\{(\w+)\}\}/g,(s,a)=>String(n[a]??""));if(typeof e=="string")return i(e,t??{});if(typeof e=="object"&&e!==null){const o=e,n=o.count;if(n!==void 0){const s=String((n===1?o.defaultValue_one:o.defaultValue_other)??o.defaultValue??r);return i(s,o)}return i(String(o.defaultValue??r),o)}return r}})}class Yo{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Wo="SAME_ASSET_EXISTS_SKIP_UPLOAD";function je(r){return(r==null?void 0:r.code)===Wo}function St(r,e){return{...r,status:"success",file:r.file??{uuid:r.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Or(r,e,t){let o=`${r.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(t)for(const[n,s]of Object.entries(t))s!=null&&(o+=`&${encodeURIComponent(n)}=${encodeURIComponent(s)}`);return o}function Xo(r,e){const t=new XMLHttpRequest;let i=!1;const o=Or(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[s,a]of Object.entries(e.authHeaders))t.setRequestHeader(s,a);t.upload.addEventListener("progress",s=>{s.lengthComputable&&!i&&e.onProgress(s.loaded,s.total)}),t.addEventListener("load",()=>{if(i)return;let s;try{s=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&s.status==="success"?e.onComplete(s):je(s)?e.onComplete(St(s,r)):e.onError(new Error(s.hint||s.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{i||e.onError(new Error("Upload timed out"))});const n=new FormData;if(r.file){const s={name:r.name,type:r.type};n.append("info[files[]]",JSON.stringify(s)),Object.keys(r.meta).length>0&&n.append("meta[files[]]",JSON.stringify(r.meta)),r.tags.length>0&&n.append("tags[files[]]",JSON.stringify(r.tags)),n.append("files[]",r.file,r.name)}return t.timeout=6e4,t.send(n),{abort(){i=!0,t.abort()}}}function Go(r,e){if(!r.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const t=new XMLHttpRequest;let i=!1;const o=Or(e.apiBase,e.folder,e.extraParams);t.open("POST",o);for(const[s,a]of Object.entries(e.authHeaders))t.setRequestHeader(s,a);t.setRequestHeader("Content-Type","application/json"),t.addEventListener("load",()=>{if(i)return;let s;try{s=JSON.parse(t.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));return}t.status>=200&&t.status<300&&s.status==="success"?e.onComplete(s):je(s)?e.onComplete(St(s,r)):e.onError(new Error(s.hint||s.msg||`Upload failed (HTTP ${t.status})`))}),t.addEventListener("error",()=>{i||e.onError(new Error("Network error — check your connection"))}),t.addEventListener("timeout",()=>{i||e.onError(new Error("Upload timed out"))});const n={files_urls:[{url:r.remoteUrl,name:r.name}]};return t.timeout=6e4,t.send(JSON.stringify(n)),{abort(){i=!0,t.abort()}}}function Ct(r){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":r}}function De(r){return r.replace(/\/+$/,"")}const Jo={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function rt(r){return Jo[r]??r}function Zo(r,e){const t=De(r),i=btoa(JSON.stringify({origin:window.location.origin})),o=rt(e);return`${t}/${o}/connect?state=${encodeURIComponent(i)}`}async function Qo(r,e,t,i=""){const o=De(r),n=i?`/${i}`:"",s=rt(e),a=await fetch(`${o}/${s}/list${n}`,{method:"GET",headers:Ct(t),credentials:"same-origin"});if(a.status===401)throw new $t;if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Companion list failed (HTTP ${a.status})`)}return a.json()}async function en(r,e,t){const i=De(r),o=await fetch(`${i}/${t}`,{method:"GET",headers:Ct(e),credentials:"same-origin"});if(o.status===401)throw new $t;if(!o.ok){const n=await o.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${o.status})`)}return o.json()}async function tn(r,e,t,i){const o=De(r),n=rt(e),s=i?`q=${encodeURIComponent(t)}&${i}`:`q=${encodeURIComponent(t)}`,a=await fetch(`${o}/search/${n}/list?${s}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function rn(r,e,t,i,o,n=!1){const s=De(r),a=rt(e),l=n?`${s}/search/${a}/get/${i}`:`${s}/${a}/get/${i}`,d=n?{Accept:"application/json","Content-Type":"application/json"}:Ct(t),p=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...o,httpMethod:o.httpMethod??"POST",useFormData:o.useFormData??!0,fieldname:o.fieldname??"files[]"})});if(p.status===401)throw new $t;if(!p.ok){const u=await p.json().catch(()=>null);throw new Error((u==null?void 0:u.message)||`Companion upload failed (HTTP ${p.status})`)}return p.json()}async function on(r,e,t){const i=De(r),o=rt(e),n=await fetch(`${i}/${o}/logout`,{method:"GET",headers:Ct(t),credentials:"same-origin"});return n.ok?n.json():{ok:!1,revoked:!1}}function nn(r){var o;const t=((o=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r))==null?void 0:o[1])??r;return`${/^https:\/\//i.test(r)?"wss":"ws"}://${t}`}class $t extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function sn(r,e){const t=r.remoteInfo;if(!t)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let i=!1,o=null,s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;if(e.extraParams)for(const[d,p]of Object.entries(e.extraParams))p!=null&&(s+=`&${encodeURIComponent(d)}=${encodeURIComponent(p)}`);const a={};r.meta&&Object.keys(r.meta).length>0&&Object.assign(a,r.meta),r.tags&&r.tags.length>0&&(a.tags=r.tags),a["filerobot-folder"]=e.folder;const l=!t.token;return rn(t.companionUrl,t.provider,t.token,t.requestPath,{fileId:t.fileId,endpoint:s,headers:e.authHeaders,size:t.size,metadata:a},l).then(d=>{if(i)return;const u=`${nn(t.companionUrl)}/api/${d.token}`;try{o=new WebSocket(u)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}o.onmessage=v=>{var _,b,w;if(!i)try{const P=JSON.parse(v.data);switch(P.action){case"progress":{const L=P.payload,y=L.bytesUploaded??0,m=L.bytesTotal??(t.size||1);e.onProgress(y,m);break}case"success":{const L=P.payload;if(o==null||o.close(),(_=L.response)!=null&&_.responseText)try{const y=JSON.parse(L.response.responseText);if(y.status==="success"){e.onComplete(y);return}if(je(y)){e.onComplete(St(y,r));return}e.onError(new Error(y.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{o==null||o.close();const L=P.payload;let y=((b=L.error)==null?void 0:b.message)||"Upload failed";if((w=L.response)!=null&&w.responseText)try{const m=JSON.parse(L.response.responseText);y=m.hint||m.msg||m.message||y}catch{}e.onError(new Error(y));break}}}catch{}},o.onerror=()=>{i||e.onError(new Error("Upload progress connection failed"))},o.onclose=()=>{o=null}}).catch(d=>{i||e.onError(d instanceof Error?d:new Error(String(d)))}),{abort(){if(i=!0,o){try{o.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}o.close(),o=null}}}}function Nt(r){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(r)}function an(r,e,t){return Object.defineProperty(r,"prototype",{writable:!1}),r}function ln(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function dn(r,e,t){return e=Ge(e),cn(r,ti()?Reflect.construct(e,t||[],Ge(r).constructor):e.apply(r,t))}function cn(r,e){if(e&&(Nt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pn(r)}function pn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function un(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Xe(r,e)}function Ht(r){var e=typeof Map=="function"?new Map:void 0;return Ht=function(i){if(i===null||!hn(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return fn(i,arguments,Ge(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Xe(o,i)},Ht(r)}function fn(r,e,t){if(ti())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var o=new(r.bind.apply(r,i));return t&&Xe(o,t.prototype),o}function ti(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ti=function(){return!!r})()}function hn(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}function Xe(r,e){return Xe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Xe(r,e)}function Ge(r){return Ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ge(r)}var He=(function(r){function e(t){var i,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(ln(this,e),i=dn(this,e,[t]),i.originalRequest=n,i.originalResponse=s,i.causingError=o,o!=null&&(t+=", caused by ".concat(o.toString())),n!=null){var a=n.getHeader("X-Request-ID")||"n/a",l=n.getMethod(),d=n.getURL(),p=s?s.getStatus():"n/a",u=s?s.getBody()||"":"n/a";t+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(p,", response text: ").concat(u,", request id: ").concat(a,")")}return i.message=t,i}return un(e,r),an(e)})(Ht(Error));function Je(r){"@babel/helpers - typeof";return Je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Je(r)}function gn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function mn(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,vn(i.key),i)}}function xn(r,e,t){return e&&mn(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function vn(r){var e=bn(r,"string");return Je(e)=="symbol"?e:e+""}function bn(r,e){if(Je(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Je(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var yn=(function(){function r(){gn(this,r)}return xn(r,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(t){return Promise.resolve([])}},{key:"removeUpload",value:function(t){return Promise.resolve()}},{key:"addUpload",value:function(t,i){return Promise.resolve(null)}}])})();const Lr="3.7.8",wn=Lr,Ae=typeof Buffer=="function",Mi=typeof TextDecoder=="function"?new TextDecoder:void 0,Bi=typeof TextEncoder=="function"?new TextEncoder:void 0,_n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",qe=Array.prototype.slice.call(_n),dt=(r=>{let e={};return r.forEach((t,i)=>e[t]=i),e})(qe),kn=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,W=String.fromCharCode.bind(String),Ni=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):r=>new Uint8Array(Array.prototype.slice.call(r,0)),Rr=r=>r.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Fr=r=>r.replace(/[^A-Za-z0-9\+\/]/g,""),Tr=r=>{let e,t,i,o,n="";const s=r.length%3;for(let a=0;a<r.length;){if((t=r.charCodeAt(a++))>255||(i=r.charCodeAt(a++))>255||(o=r.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=t<<16|i<<8|o,n+=qe[e>>18&63]+qe[e>>12&63]+qe[e>>6&63]+qe[e&63]}return s?n.slice(0,s-3)+"===".substring(s):n},ii=typeof btoa=="function"?r=>btoa(r):Ae?r=>Buffer.from(r,"binary").toString("base64"):Tr,qt=Ae?r=>Buffer.from(r).toString("base64"):r=>{let t=[];for(let i=0,o=r.length;i<o;i+=4096)t.push(W.apply(null,r.subarray(i,i+4096)));return ii(t.join(""))},pt=(r,e=!1)=>e?Rr(qt(r)):qt(r),Sn=r=>{if(r.length<2){var e=r.charCodeAt(0);return e<128?r:e<2048?W(192|e>>>6)+W(128|e&63):W(224|e>>>12&15)+W(128|e>>>6&63)+W(128|e&63)}else{var e=65536+(r.charCodeAt(0)-55296)*1024+(r.charCodeAt(1)-56320);return W(240|e>>>18&7)+W(128|e>>>12&63)+W(128|e>>>6&63)+W(128|e&63)}},Cn=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,zr=r=>r.replace(Cn,Sn),Hi=Ae?r=>Buffer.from(r,"utf8").toString("base64"):Bi?r=>qt(Bi.encode(r)):r=>ii(zr(r)),Fe=(r,e=!1)=>e?Rr(Hi(r)):Hi(r),qi=r=>Fe(r,!0),$n=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,En=r=>{switch(r.length){case 4:var e=(7&r.charCodeAt(0))<<18|(63&r.charCodeAt(1))<<12|(63&r.charCodeAt(2))<<6|63&r.charCodeAt(3),t=e-65536;return W((t>>>10)+55296)+W((t&1023)+56320);case 3:return W((15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2));default:return W((31&r.charCodeAt(0))<<6|63&r.charCodeAt(1))}},jr=r=>r.replace($n,En),Dr=r=>{if(r=r.replace(/\s+/g,""),!kn.test(r))throw new TypeError("malformed base64.");r+="==".slice(2-(r.length&3));let e,t,i,o=[];for(let n=0;n<r.length;)e=dt[r.charAt(n++)]<<18|dt[r.charAt(n++)]<<12|(t=dt[r.charAt(n++)])<<6|(i=dt[r.charAt(n++)]),t===64?o.push(W(e>>16&255)):i===64?o.push(W(e>>16&255,e>>8&255)):o.push(W(e>>16&255,e>>8&255,e&255));return o.join("")},ri=typeof atob=="function"?r=>atob(Fr(r)):Ae?r=>Buffer.from(r,"base64").toString("binary"):Dr,Ar=Ae?r=>Ni(Buffer.from(r,"base64")):r=>Ni(ri(r).split("").map(e=>e.charCodeAt(0))),Ir=r=>Ar(Mr(r)),Pn=Ae?r=>Buffer.from(r,"base64").toString("utf8"):Mi?r=>Mi.decode(Ar(r)):r=>jr(ri(r)),Mr=r=>Fr(r.replace(/[-_]/g,e=>e=="-"?"+":"/")),Vt=r=>Pn(Mr(r)),Un=r=>{if(typeof r!="string")return!1;const e=r.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Br=r=>({value:r,enumerable:!1,writable:!0,configurable:!0}),Nr=function(){const r=(e,t)=>Object.defineProperty(String.prototype,e,Br(t));r("fromBase64",function(){return Vt(this)}),r("toBase64",function(e){return Fe(this,e)}),r("toBase64URI",function(){return Fe(this,!0)}),r("toBase64URL",function(){return Fe(this,!0)}),r("toUint8Array",function(){return Ir(this)})},Hr=function(){const r=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,Br(t));r("toBase64",function(e){return pt(this,e)}),r("toBase64URI",function(){return pt(this,!0)}),r("toBase64URL",function(){return pt(this,!0)})},On=()=>{Nr(),Hr()},Ln={version:Lr,VERSION:wn,atob:ri,atobPolyfill:Dr,btoa:ii,btoaPolyfill:Tr,fromBase64:Vt,toBase64:Fe,encode:Fe,encodeURI:qi,encodeURL:qi,utob:zr,btou:jr,decode:Vt,isValid:Un,fromUint8Array:pt,toUint8Array:Ir,extendString:Nr,extendUint8Array:Hr,extendBuiltins:On};var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rn(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ft,Ki;function Fn(){return Ki||(Ki=1,Ft=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0}),Ft}var ct={},Yi;function Tn(){if(Yi)return ct;Yi=1;var r=Object.prototype.hasOwnProperty,e;function t(s){try{return decodeURIComponent(s.replace(/\+/g," "))}catch{return null}}function i(s){try{return encodeURIComponent(s)}catch{return null}}function o(s){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(s);){var p=t(d[1]),u=t(d[2]);p===null||u===null||p in l||(l[p]=u)}return l}function n(s,a){a=a||"";var l=[],d,p;typeof a!="string"&&(a="?");for(p in s)if(r.call(s,p)){if(d=s[p],!d&&(d===null||d===e||isNaN(d))&&(d=""),p=i(p),d=i(d),p===null||d===null)continue;l.push(p+"="+d)}return l.length?a+l.join("&"):""}return ct.stringify=n,ct.parse=o,ct}var Tt,Wi;function zn(){if(Wi)return Tt;Wi=1;var r=Fn(),e=Tn(),t=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i=/[\n\r\t]/g,o=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=/:\d+$/,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(y){return(y||"").toString().replace(t,"")}var d=[["#","hash"],["?","query"],function(m,x){return v(x.protocol)?m.replace(/\\/g,"/"):m},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],p={hash:1,query:1};function u(y){var m;typeof window<"u"?m=window:typeof Vi<"u"?m=Vi:typeof self<"u"?m=self:m={};var x=m.location||{};y=y||x;var k={},R=typeof y,U;if(y.protocol==="blob:")k=new w(unescape(y.pathname),{});else if(R==="string"){k=new w(y,{});for(U in p)delete k[U]}else if(R==="object"){for(U in y)U in p||(k[U]=y[U]);k.slashes===void 0&&(k.slashes=o.test(y.href))}return k}function v(y){return y==="file:"||y==="ftp:"||y==="http:"||y==="https:"||y==="ws:"||y==="wss:"}function _(y,m){y=l(y),y=y.replace(i,""),m=m||{};var x=s.exec(y),k=x[1]?x[1].toLowerCase():"",R=!!x[2],U=!!x[3],j=0,F;return R?U?(F=x[2]+x[3]+x[4],j=x[2].length+x[3].length):(F=x[2]+x[4],j=x[2].length):U?(F=x[3]+x[4],j=x[3].length):F=x[4],k==="file:"?j>=2&&(F=F.slice(2)):v(k)?F=x[4]:k?R&&(F=F.slice(2)):j>=2&&v(m.protocol)&&(F=x[4]),{protocol:k,slashes:R||v(k),slashesCount:j,rest:F}}function b(y,m){if(y==="")return m;for(var x=(m||"/").split("/").slice(0,-1).concat(y.split("/")),k=x.length,R=x[k-1],U=!1,j=0;k--;)x[k]==="."?x.splice(k,1):x[k]===".."?(x.splice(k,1),j++):j&&(k===0&&(U=!0),x.splice(k,1),j--);return U&&x.unshift(""),(R==="."||R==="..")&&x.push(""),x.join("/")}function w(y,m,x){if(y=l(y),y=y.replace(i,""),!(this instanceof w))return new w(y,m,x);var k,R,U,j,F,M,re=d.slice(),ue=typeof m,O=this,B=0;for(ue!=="object"&&ue!=="string"&&(x=m,m=null),x&&typeof x!="function"&&(x=e.parse),m=u(m),R=_(y||"",m),k=!R.protocol&&!R.slashes,O.slashes=R.slashes||k&&m.slashes,O.protocol=R.protocol||m.protocol||"",y=R.rest,(R.protocol==="file:"&&(R.slashesCount!==2||a.test(y))||!R.slashes&&(R.protocol||R.slashesCount<2||!v(O.protocol)))&&(re[3]=[/(.*)/,"pathname"]);B<re.length;B++){if(j=re[B],typeof j=="function"){y=j(y,O);continue}U=j[0],M=j[1],U!==U?O[M]=y:typeof U=="string"?(F=U==="@"?y.lastIndexOf(U):y.indexOf(U),~F&&(typeof j[2]=="number"?(O[M]=y.slice(0,F),y=y.slice(F+j[2])):(O[M]=y.slice(F),y=y.slice(0,F)))):(F=U.exec(y))&&(O[M]=F[1],y=y.slice(0,F.index)),O[M]=O[M]||k&&j[3]&&m[M]||"",j[4]&&(O[M]=O[M].toLowerCase())}x&&(O.query=x(O.query)),k&&m.slashes&&O.pathname.charAt(0)!=="/"&&(O.pathname!==""||m.pathname!=="")&&(O.pathname=b(O.pathname,m.pathname)),O.pathname.charAt(0)!=="/"&&v(O.protocol)&&(O.pathname="/"+O.pathname),r(O.port,O.protocol)||(O.host=O.hostname,O.port=""),O.username=O.password="",O.auth&&(F=O.auth.indexOf(":"),~F?(O.username=O.auth.slice(0,F),O.username=encodeURIComponent(decodeURIComponent(O.username)),O.password=O.auth.slice(F+1),O.password=encodeURIComponent(decodeURIComponent(O.password))):O.username=encodeURIComponent(decodeURIComponent(O.auth)),O.auth=O.password?O.username+":"+O.password:O.username),O.origin=O.protocol!=="file:"&&v(O.protocol)&&O.host?O.protocol+"//"+O.host:"null",O.href=O.toString()}function P(y,m,x){var k=this;switch(y){case"query":typeof m=="string"&&m.length&&(m=(x||e.parse)(m)),k[y]=m;break;case"port":k[y]=m,r(m,k.protocol)?m&&(k.host=k.hostname+":"+m):(k.host=k.hostname,k[y]="");break;case"hostname":k[y]=m,k.port&&(m+=":"+k.port),k.host=m;break;case"host":k[y]=m,n.test(m)?(m=m.split(":"),k.port=m.pop(),k.hostname=m.join(":")):(k.hostname=m,k.port="");break;case"protocol":k.protocol=m.toLowerCase(),k.slashes=!x;break;case"pathname":case"hash":if(m){var R=y==="pathname"?"/":"#";k[y]=m.charAt(0)!==R?R+m:m}else k[y]=m;break;case"username":case"password":k[y]=encodeURIComponent(m);break;case"auth":var U=m.indexOf(":");~U?(k.username=m.slice(0,U),k.username=encodeURIComponent(decodeURIComponent(k.username)),k.password=m.slice(U+1),k.password=encodeURIComponent(decodeURIComponent(k.password))):k.username=encodeURIComponent(decodeURIComponent(m))}for(var j=0;j<d.length;j++){var F=d[j];F[4]&&(k[F[1]]=k[F[1]].toLowerCase())}return k.auth=k.password?k.username+":"+k.password:k.username,k.origin=k.protocol!=="file:"&&v(k.protocol)&&k.host?k.protocol+"//"+k.host:"null",k.href=k.toString(),k}function L(y){(!y||typeof y!="function")&&(y=e.stringify);var m,x=this,k=x.host,R=x.protocol;R&&R.charAt(R.length-1)!==":"&&(R+=":");var U=R+(x.protocol&&x.slashes||v(x.protocol)?"//":"");return x.username?(U+=x.username,x.password&&(U+=":"+x.password),U+="@"):x.password?(U+=":"+x.password,U+="@"):x.protocol!=="file:"&&v(x.protocol)&&!k&&x.pathname!=="/"&&(U+="@"),(k[k.length-1]===":"||n.test(x.hostname)&&!x.port)&&(k+=":"),U+=k+x.pathname,m=typeof x.query=="object"?y(x.query):x.query,m&&(U+=m.charAt(0)!=="?"?"?"+m:m),x.hash&&(U+=x.hash),U}return w.prototype={set:P,toString:L},w.extractProtocol=_,w.location=u,w.trimLeft=l,w.qs=e,Tt=w,Tt}var jn=zn();const Dn=Rn(jn);function An(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function Kt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Kt=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(g,f,h){g[f]=h.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function d(g,f,h){return Object.defineProperty(g,f,{value:h,enumerable:!0,configurable:!0,writable:!0}),g[f]}try{d({},"")}catch{d=function(h,C,E){return h[C]=E}}function p(g,f,h,C){var E=f&&f.prototype instanceof L?f:L,S=Object.create(E.prototype),T=new B(C||[]);return o(S,"_invoke",{value:M(g,h,T)}),S}function u(g,f,h){try{return{type:"normal",arg:g.call(f,h)}}catch(C){return{type:"throw",arg:C}}}e.wrap=p;var v="suspendedStart",_="suspendedYield",b="executing",w="completed",P={};function L(){}function y(){}function m(){}var x={};d(x,s,function(){return this});var k=Object.getPrototypeOf,R=k&&k(k(se([])));R&&R!==t&&i.call(R,s)&&(x=R);var U=m.prototype=L.prototype=Object.create(x);function j(g){["next","throw","return"].forEach(function(f){d(g,f,function(h){return this._invoke(f,h)})})}function F(g,f){function h(E,S,T,D){var I=u(g[E],g,S);if(I.type!=="throw"){var V=I.arg,Y=V.value;return Y&&_e(Y)=="object"&&i.call(Y,"__await")?f.resolve(Y.__await).then(function(G){h("next",G,T,D)},function(G){h("throw",G,T,D)}):f.resolve(Y).then(function(G){V.value=G,T(V)},function(G){return h("throw",G,T,D)})}D(I.arg)}var C;o(this,"_invoke",{value:function(S,T){function D(){return new f(function(I,V){h(S,T,I,V)})}return C=C?C.then(D,D):D()}})}function M(g,f,h){var C=v;return function(E,S){if(C===b)throw Error("Generator is already running");if(C===w){if(E==="throw")throw S;return{value:r,done:!0}}for(h.method=E,h.arg=S;;){var T=h.delegate;if(T){var D=re(T,h);if(D){if(D===P)continue;return D}}if(h.method==="next")h.sent=h._sent=h.arg;else if(h.method==="throw"){if(C===v)throw C=w,h.arg;h.dispatchException(h.arg)}else h.method==="return"&&h.abrupt("return",h.arg);C=b;var I=u(g,f,h);if(I.type==="normal"){if(C=h.done?w:_,I.arg===P)continue;return{value:I.arg,done:h.done}}I.type==="throw"&&(C=w,h.method="throw",h.arg=I.arg)}}}function re(g,f){var h=f.method,C=g.iterator[h];if(C===r)return f.delegate=null,h==="throw"&&g.iterator.return&&(f.method="return",f.arg=r,re(g,f),f.method==="throw")||h!=="return"&&(f.method="throw",f.arg=new TypeError("The iterator does not provide a '"+h+"' method")),P;var E=u(C,g.iterator,f.arg);if(E.type==="throw")return f.method="throw",f.arg=E.arg,f.delegate=null,P;var S=E.arg;return S?S.done?(f[g.resultName]=S.value,f.next=g.nextLoc,f.method!=="return"&&(f.method="next",f.arg=r),f.delegate=null,P):S:(f.method="throw",f.arg=new TypeError("iterator result is not an object"),f.delegate=null,P)}function ue(g){var f={tryLoc:g[0]};1 in g&&(f.catchLoc=g[1]),2 in g&&(f.finallyLoc=g[2],f.afterLoc=g[3]),this.tryEntries.push(f)}function O(g){var f=g.completion||{};f.type="normal",delete f.arg,g.completion=f}function B(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(ue,this),this.reset(!0)}function se(g){if(g||g===""){var f=g[s];if(f)return f.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var h=-1,C=function E(){for(;++h<g.length;)if(i.call(g,h))return E.value=g[h],E.done=!1,E;return E.value=r,E.done=!0,E};return C.next=C}}throw new TypeError(_e(g)+" is not iterable")}return y.prototype=m,o(U,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=d(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(g){var f=typeof g=="function"&&g.constructor;return!!f&&(f===y||(f.displayName||f.name)==="GeneratorFunction")},e.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,m):(g.__proto__=m,d(g,l,"GeneratorFunction")),g.prototype=Object.create(U),g},e.awrap=function(g){return{__await:g}},j(F.prototype),d(F.prototype,a,function(){return this}),e.AsyncIterator=F,e.async=function(g,f,h,C,E){E===void 0&&(E=Promise);var S=new F(p(g,f,h,C),E);return e.isGeneratorFunction(f)?S:S.next().then(function(T){return T.done?T.value:S.next()})},j(U),d(U,l,"Generator"),d(U,s,function(){return this}),d(U,"toString",function(){return"[object Generator]"}),e.keys=function(g){var f=Object(g),h=[];for(var C in f)h.push(C);return h.reverse(),function E(){for(;h.length;){var S=h.pop();if(S in f)return E.value=S,E.done=!1,E}return E.done=!0,E}},e.values=se,B.prototype={constructor:B,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!f)for(var h in this)h.charAt(0)==="t"&&i.call(this,h)&&!isNaN(+h.slice(1))&&(this[h]=r)},stop:function(){this.done=!0;var f=this.tryEntries[0].completion;if(f.type==="throw")throw f.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var h=this;function C(V,Y){return T.type="throw",T.arg=f,h.next=V,Y&&(h.method="next",h.arg=r),!!Y}for(var E=this.tryEntries.length-1;E>=0;--E){var S=this.tryEntries[E],T=S.completion;if(S.tryLoc==="root")return C("end");if(S.tryLoc<=this.prev){var D=i.call(S,"catchLoc"),I=i.call(S,"finallyLoc");if(D&&I){if(this.prev<S.catchLoc)return C(S.catchLoc,!0);if(this.prev<S.finallyLoc)return C(S.finallyLoc)}else if(D){if(this.prev<S.catchLoc)return C(S.catchLoc,!0)}else{if(!I)throw Error("try statement without catch or finally");if(this.prev<S.finallyLoc)return C(S.finallyLoc)}}}},abrupt:function(f,h){for(var C=this.tryEntries.length-1;C>=0;--C){var E=this.tryEntries[C];if(E.tryLoc<=this.prev&&i.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var S=E;break}}S&&(f==="break"||f==="continue")&&S.tryLoc<=h&&h<=S.finallyLoc&&(S=null);var T=S?S.completion:{};return T.type=f,T.arg=h,S?(this.method="next",this.next=S.finallyLoc,P):this.complete(T)},complete:function(f,h){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&h&&(this.next=h),P},finish:function(f){for(var h=this.tryEntries.length-1;h>=0;--h){var C=this.tryEntries[h];if(C.finallyLoc===f)return this.complete(C.completion,C.afterLoc),O(C),P}},catch:function(f){for(var h=this.tryEntries.length-1;h>=0;--h){var C=this.tryEntries[h];if(C.tryLoc===f){var E=C.completion;if(E.type==="throw"){var S=E.arg;O(C)}return S}}throw Error("illegal catch attempt")},delegateYield:function(f,h,C){return this.delegate={iterator:se(f),resultName:h,nextLoc:C},this.method==="next"&&(this.arg=r),P}},e}function Xi(r,e,t,i,o,n,s){try{var a=r[n](s),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,o)}function In(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var n=r.apply(e,t);function s(l){Xi(n,i,o,s,a,"next",l)}function a(l){Xi(n,i,o,s,a,"throw",l)}s(void 0)})}}function qr(r,e){return Nn(r)||Bn(r,e)||Vr(r,e)||Mn()}function Mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bn(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var i,o,n,s,a=[],l=!0,d=!1;try{if(n=(t=t.call(r)).next,e!==0)for(;!(l=(i=n.call(t)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(p){d=!0,o=p}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(d)throw o}}return a}}function Nn(r){if(Array.isArray(r))return r}function _e(r){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_e(r)}function Hn(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=Vr(r))||e){t&&(r=t);var i=0,o=function(){};return{s:o,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,s=!1,a;return{s:function(){t=t.call(r)},n:function(){var d=t.next();return n=d.done,d},e:function(d){s=!0,a=d},f:function(){try{!n&&t.return!=null&&t.return()}finally{if(s)throw a}}}}function Vr(r,e){if(r){if(typeof r=="string")return Gi(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Gi(r,e)}}function Gi(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function Ji(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function $e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ji(Object(t),!0).forEach(function(i){qn(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Ji(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function qn(r,e,t){return e=Kr(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Vn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Zi(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Kr(i.key),i)}}function Kn(r,e,t){return e&&Zi(r.prototype,e),t&&Zi(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Kr(r){var e=Yn(r,"string");return _e(e)=="symbol"?e:e+""}function Yn(r,e){if(_e(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(_e(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var ut="tus-v1",ft="ietf-draft-03",Ve="ietf-draft-05",Wn={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Yr,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:ut},vt=(function(){function r(e,t){Vn(this,r),"resume"in t&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=t,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Kn(r,[{key:"findPreviousUploads",value:function(){var t=this;return this.options.fingerprint(this.file,this.options).then(function(i){return t._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(t){this.url=t.uploadUrl||null,this._parallelUploadUrls=t.parallelUploadUrls||null,this._urlStorageKey=t.urlStorageKey}},{key:"start",value:function(){var t=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![ut,ft,Ve].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var n=0,s=["uploadUrl","uploadSize","uploadLengthDeferred"];n<s.length;n++){var a=s[n];if(this.options[a]){this._emitError(new Error("tus: cannot use the ".concat(a," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(l){return t._fingerprint=l,t._source?t._source:t.options.fileReader.openFile(i,t.options.chunkSize)}).then(function(l){if(t._source=l,t.options.uploadLengthDeferred)t._size=null;else if(t.options.uploadSize!=null){if(t._size=Number(t.options.uploadSize),Number.isNaN(t._size)){t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(t._size=t._source.size,t._size==null){t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}t.options.parallelUploads>1||t._parallelUploadUrls!=null?t._startParallelUpload():t._startSingleUpload()}).catch(function(l){t._emitError(l)})}},{key:"_startParallelUpload",value:function(){var t,i=this,o=this._size,n=0;this._parallelUploads=[];var s=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,a=(t=this.options.parallelUploadBoundaries)!==null&&t!==void 0?t:Gn(this._source.size,s);this._parallelUploadUrls&&a.forEach(function(p,u){p.uploadUrl=i._parallelUploadUrls[u]||null}),this._parallelUploadUrls=new Array(a.length);var l=a.map(function(p,u){var v=0;return i._source.slice(p.start,p.end).then(function(_){var b=_.value;return new Promise(function(w,P){var L=$e($e({},i.options),{},{uploadUrl:p.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:$e($e({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:w,onError:P,onProgress:function(x){n=n-v+x,v=x,i._emitProgress(n,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[u]=y.url,i._parallelUploadUrls.filter(function(x){return!!x}).length===a.length&&i._saveUploadInUrlStorage()}}),y=new r(b,L);y.start(),i._parallelUploads.push(y)})})}),d;Promise.all(l).then(function(){d=i._openRequest("POST",i.options.endpoint),d.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var p=Qi(i.options.metadata);return p!==""&&d.setHeader("Upload-Metadata",p),i._sendRequest(d,null)}).then(function(p){if(!Ue(p.getStatus(),200)){i._emitHttpError(d,p,"tus: unexpected response while creating upload");return}var u=p.getHeader("Location");if(u==null){i._emitHttpError(d,p,"tus: invalid or missing Location header");return}i.url=rr(i.options.endpoint,u),"Created upload at ".concat(i.url),i._emitSuccess(p)}).catch(function(p){i._emitError(p)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(t){var i=this;if(this._parallelUploads!=null){var o=Hn(this._parallelUploads),n;try{for(o.s();!(n=o.n()).done;){var s=n.value;s.abort(t)}}catch(a){o.e(a)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!t||this.url==null?Promise.resolve():r.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(t,i,o,n){this._emitError(new He(o,n,t,i))}},{key:"_emitError",value:function(t){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),ir(t,this._retryAttempt,this.options)){var n=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},n);return}}if(typeof this.options.onError=="function")this.options.onError(t);else throw t}}},{key:"_emitSuccess",value:function(t){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:t})}},{key:"_emitProgress",value:function(t,i){typeof this.options.onProgress=="function"&&this.options.onProgress(t,i)}},{key:"_emitChunkComplete",value:function(t,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(t,i,o)}},{key:"_createUpload",value:function(){var t=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=Qi(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var n;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,n=this._addChunkToRequest(i)):((this.options.protocol===ft||this.options.protocol===Ve)&&i.setHeader("Upload-Complete","?0"),n=this._sendRequest(i,null)),n.then(function(s){if(!Ue(s.getStatus(),200)){t._emitHttpError(i,s,"tus: unexpected response while creating upload");return}var a=s.getHeader("Location");if(a==null){t._emitHttpError(i,s,"tus: invalid or missing Location header");return}if(t.url=rr(t.options.endpoint,a),"Created upload at ".concat(t.url),typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._size===0){t._emitSuccess(s),t._source.close();return}t._saveUploadInUrlStorage().then(function(){t.options.uploadDataDuringCreation?t._handleUploadResponse(i,s):(t._offset=0,t._performUpload())})}).catch(function(s){t._emitHttpError(i,null,"tus: failed to create upload",s)})}},{key:"_resumeUpload",value:function(){var t=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(n){var s=n.getStatus();if(!Ue(s,200)){if(s===423){t._emitHttpError(i,n,"tus: upload is currently locked; retry later");return}if(Ue(s,400)&&t._removeFromUrlStorage(),!t.options.endpoint){t._emitHttpError(i,n,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}t.url=null,t._createUpload();return}var a=Number.parseInt(n.getHeader("Upload-Offset"),10);if(Number.isNaN(a)){t._emitHttpError(i,n,"tus: invalid or missing offset value");return}var l=Number.parseInt(n.getHeader("Upload-Length"),10);if(Number.isNaN(l)&&!t.options.uploadLengthDeferred&&t.options.protocol===ut){t._emitHttpError(i,n,"tus: invalid or missing length value");return}typeof t.options.onUploadUrlAvailable=="function"&&t.options.onUploadUrlAvailable(),t._saveUploadInUrlStorage().then(function(){if(a===l){t._emitProgress(l,l),t._emitSuccess(n);return}t._offset=a,t._performUpload()})}).catch(function(n){t._emitHttpError(i,null,"tus: failed to resume upload",n)})}},{key:"_performUpload",value:function(){var t=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(n){if(!Ue(n.getStatus(),200)){t._emitHttpError(i,n,"tus: unexpected response while uploading chunk");return}t._handleUploadResponse(i,n)}).catch(function(n){t._aborted||t._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(t._offset),n)})}}},{key:"_addChunkToRequest",value:function(t){var i=this,o=this._offset,n=this._offset+this.options.chunkSize;return t.setProgressHandler(function(s){i._emitProgress(o+s,i._size)}),this.options.protocol===ut?t.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Ve&&t.setHeader("Content-Type","application/partial-upload"),(n===Number.POSITIVE_INFINITY||n>this._size)&&!this.options.uploadLengthDeferred&&(n=this._size),this._source.slice(o,n).then(function(s){var a=s.value,l=s.done,d=a!=null&&a.size?a.size:0;i.options.uploadLengthDeferred&&l&&(i._size=i._offset+d,t.setHeader("Upload-Length","".concat(i._size)));var p=i._offset+d;return!i.options.uploadLengthDeferred&&l&&p!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(p," bytes"))):a===null?i._sendRequest(t):((i.options.protocol===ft||i.options.protocol===Ve)&&t.setHeader("Upload-Complete",l?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(t,a))})}},{key:"_handleUploadResponse",value:function(t,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(t,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(t,i){var o=er(t,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var t=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){t._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var t=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){t._urlStorageKey=o})}},{key:"_sendRequest",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return tr(t,i,this.options)}}],[{key:"terminate",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=er("DELETE",t,i);return tr(o,null,i).then(function(n){if(n.getStatus()!==204)throw new He("tus: unexpected response while terminating upload",null,o,n)}).catch(function(n){if(n instanceof He||(n=new He("tus: failed to terminate upload",n,o,null)),!ir(n,0,i))throw n;var s=i.retryDelays[0],a=i.retryDelays.slice(1),l=$e($e({},i),{},{retryDelays:a});return new Promise(function(d){return setTimeout(d,s)}).then(function(){return r.terminate(t,l)})})}}])})();function Qi(r){return Object.entries(r).map(function(e){var t=qr(e,2),i=t[0],o=t[1];return"".concat(i," ").concat(Ln.encode(String(o)))}).join(",")}function Ue(r,e){return r>=e&&r<e+100}function er(r,e,t){var i=t.httpStack.createRequest(r,e);t.protocol===ft?i.setHeader("Upload-Draft-Interop-Version","5"):t.protocol===Ve?i.setHeader("Upload-Draft-Interop-Version","6"):i.setHeader("Tus-Resumable","1.0.0");for(var o=t.headers||{},n=0,s=Object.entries(o);n<s.length;n++){var a=qr(s[n],2),l=a[0],d=a[1];i.setHeader(l,d)}if(t.addRequestId){var p=An();i.setHeader("X-Request-ID",p)}return i}function tr(r,e,t){return Yt.apply(this,arguments)}function Yt(){return Yt=In(Kt().mark(function r(e,t,i){var o;return Kt().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(typeof i.onBeforeRequest!="function"){s.next=3;break}return s.next=3,i.onBeforeRequest(e);case 3:return s.next=5,e.send(t);case 5:if(o=s.sent,typeof i.onAfterResponse!="function"){s.next=9;break}return s.next=9,i.onAfterResponse(e,o);case 9:return s.abrupt("return",o);case 10:case"end":return s.stop()}},r)})),Yt.apply(this,arguments)}function Xn(){var r=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(r=!1),r}function ir(r,e,t){return t.retryDelays==null||e>=t.retryDelays.length||r.originalRequest==null?!1:t&&typeof t.onShouldRetry=="function"?t.onShouldRetry(r,e,t):Yr(r)}function Yr(r){var e=r.originalResponse?r.originalResponse.getStatus():0;return(!Ue(e,400)||e===409||e===423)&&Xn()}function rr(r,e){return new Dn(e,r).toString()}function Gn(r,e){for(var t=Math.floor(r/e),i=[],o=0;o<e;o++)i.push({start:t*o,end:t*(o+1)});return i[e-1].end=r,i}vt.defaultOptions=Wn;var Wr=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function Jn(r){return new Promise(function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var o=i.response;e(o)},i.onerror=function(o){t(o)},i.open("GET",r),i.send()})}var Zn=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function Qn(r){return new Promise(function(e,t){var i=new FileReader;i.onload=function(){var o=new Uint8Array(i.result);e({value:o})},i.onerror=function(o){t(o)},i.readAsArrayBuffer(r)})}function Ze(r){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ze(r)}function es(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ts(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,rs(i.key),i)}}function is(r,e,t){return e&&ts(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function rs(r){var e=os(r,"string");return Ze(e)=="symbol"?e:e+""}function os(r,e){if(Ze(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Ze(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var or=(function(){function r(e){es(this,r),this._file=e,this.size=e.size}return is(r,[{key:"slice",value:function(t,i){if(Zn())return Qn(this._file.slice(t,i));var o=this._file.slice(t,i),n=i>=this.size;return Promise.resolve({value:o,done:n})}},{key:"close",value:function(){}}])})();function Qe(r){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe(r)}function ns(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ss(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ls(i.key),i)}}function as(r,e,t){return e&&ss(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ls(r){var e=ds(r,"string");return Qe(e)=="symbol"?e:e+""}function ds(r,e){if(Qe(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Qe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function nr(r){return r===void 0?0:r.size!==void 0?r.size:r.length}function cs(r,e){if(r.concat)return r.concat(e);if(r instanceof Blob)return new Blob([r,e],{type:r.type});if(r.set){var t=new r.constructor(r.length+e.length);return t.set(r),t.set(e,r.length),t}throw new Error("Unknown data type")}var ps=(function(){function r(e){ns(this,r),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return as(r,[{key:"slice",value:function(t,i){return t<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(t,i)}},{key:"_readUntilEnoughDataOrDone",value:function(t,i){var o=this,n=i<=this._bufferOffset+nr(this._buffer);if(this._done||n){var s=this._getDataFromBuffer(t,i),a=s==null?this._done:!1;return Promise.resolve({value:s,done:a})}return this._reader.read().then(function(l){var d=l.value,p=l.done;return p?o._done=!0:o._buffer===void 0?o._buffer=d:o._buffer=cs(o._buffer,d),o._readUntilEnoughDataOrDone(t,i)})}},{key:"_getDataFromBuffer",value:function(t,i){t>this._bufferOffset&&(this._buffer=this._buffer.slice(t-this._bufferOffset),this._bufferOffset=t);var o=nr(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-t)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function ke(r){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke(r)}function Wt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Wt=function(){return e};var r,e={},t=Object.prototype,i=t.hasOwnProperty,o=Object.defineProperty||function(g,f,h){g[f]=h.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function d(g,f,h){return Object.defineProperty(g,f,{value:h,enumerable:!0,configurable:!0,writable:!0}),g[f]}try{d({},"")}catch{d=function(h,C,E){return h[C]=E}}function p(g,f,h,C){var E=f&&f.prototype instanceof L?f:L,S=Object.create(E.prototype),T=new B(C||[]);return o(S,"_invoke",{value:M(g,h,T)}),S}function u(g,f,h){try{return{type:"normal",arg:g.call(f,h)}}catch(C){return{type:"throw",arg:C}}}e.wrap=p;var v="suspendedStart",_="suspendedYield",b="executing",w="completed",P={};function L(){}function y(){}function m(){}var x={};d(x,s,function(){return this});var k=Object.getPrototypeOf,R=k&&k(k(se([])));R&&R!==t&&i.call(R,s)&&(x=R);var U=m.prototype=L.prototype=Object.create(x);function j(g){["next","throw","return"].forEach(function(f){d(g,f,function(h){return this._invoke(f,h)})})}function F(g,f){function h(E,S,T,D){var I=u(g[E],g,S);if(I.type!=="throw"){var V=I.arg,Y=V.value;return Y&&ke(Y)=="object"&&i.call(Y,"__await")?f.resolve(Y.__await).then(function(G){h("next",G,T,D)},function(G){h("throw",G,T,D)}):f.resolve(Y).then(function(G){V.value=G,T(V)},function(G){return h("throw",G,T,D)})}D(I.arg)}var C;o(this,"_invoke",{value:function(S,T){function D(){return new f(function(I,V){h(S,T,I,V)})}return C=C?C.then(D,D):D()}})}function M(g,f,h){var C=v;return function(E,S){if(C===b)throw Error("Generator is already running");if(C===w){if(E==="throw")throw S;return{value:r,done:!0}}for(h.method=E,h.arg=S;;){var T=h.delegate;if(T){var D=re(T,h);if(D){if(D===P)continue;return D}}if(h.method==="next")h.sent=h._sent=h.arg;else if(h.method==="throw"){if(C===v)throw C=w,h.arg;h.dispatchException(h.arg)}else h.method==="return"&&h.abrupt("return",h.arg);C=b;var I=u(g,f,h);if(I.type==="normal"){if(C=h.done?w:_,I.arg===P)continue;return{value:I.arg,done:h.done}}I.type==="throw"&&(C=w,h.method="throw",h.arg=I.arg)}}}function re(g,f){var h=f.method,C=g.iterator[h];if(C===r)return f.delegate=null,h==="throw"&&g.iterator.return&&(f.method="return",f.arg=r,re(g,f),f.method==="throw")||h!=="return"&&(f.method="throw",f.arg=new TypeError("The iterator does not provide a '"+h+"' method")),P;var E=u(C,g.iterator,f.arg);if(E.type==="throw")return f.method="throw",f.arg=E.arg,f.delegate=null,P;var S=E.arg;return S?S.done?(f[g.resultName]=S.value,f.next=g.nextLoc,f.method!=="return"&&(f.method="next",f.arg=r),f.delegate=null,P):S:(f.method="throw",f.arg=new TypeError("iterator result is not an object"),f.delegate=null,P)}function ue(g){var f={tryLoc:g[0]};1 in g&&(f.catchLoc=g[1]),2 in g&&(f.finallyLoc=g[2],f.afterLoc=g[3]),this.tryEntries.push(f)}function O(g){var f=g.completion||{};f.type="normal",delete f.arg,g.completion=f}function B(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(ue,this),this.reset(!0)}function se(g){if(g||g===""){var f=g[s];if(f)return f.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var h=-1,C=function E(){for(;++h<g.length;)if(i.call(g,h))return E.value=g[h],E.done=!1,E;return E.value=r,E.done=!0,E};return C.next=C}}throw new TypeError(ke(g)+" is not iterable")}return y.prototype=m,o(U,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=d(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(g){var f=typeof g=="function"&&g.constructor;return!!f&&(f===y||(f.displayName||f.name)==="GeneratorFunction")},e.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,m):(g.__proto__=m,d(g,l,"GeneratorFunction")),g.prototype=Object.create(U),g},e.awrap=function(g){return{__await:g}},j(F.prototype),d(F.prototype,a,function(){return this}),e.AsyncIterator=F,e.async=function(g,f,h,C,E){E===void 0&&(E=Promise);var S=new F(p(g,f,h,C),E);return e.isGeneratorFunction(f)?S:S.next().then(function(T){return T.done?T.value:S.next()})},j(U),d(U,l,"Generator"),d(U,s,function(){return this}),d(U,"toString",function(){return"[object Generator]"}),e.keys=function(g){var f=Object(g),h=[];for(var C in f)h.push(C);return h.reverse(),function E(){for(;h.length;){var S=h.pop();if(S in f)return E.value=S,E.done=!1,E}return E.done=!0,E}},e.values=se,B.prototype={constructor:B,reset:function(f){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!f)for(var h in this)h.charAt(0)==="t"&&i.call(this,h)&&!isNaN(+h.slice(1))&&(this[h]=r)},stop:function(){this.done=!0;var f=this.tryEntries[0].completion;if(f.type==="throw")throw f.arg;return this.rval},dispatchException:function(f){if(this.done)throw f;var h=this;function C(V,Y){return T.type="throw",T.arg=f,h.next=V,Y&&(h.method="next",h.arg=r),!!Y}for(var E=this.tryEntries.length-1;E>=0;--E){var S=this.tryEntries[E],T=S.completion;if(S.tryLoc==="root")return C("end");if(S.tryLoc<=this.prev){var D=i.call(S,"catchLoc"),I=i.call(S,"finallyLoc");if(D&&I){if(this.prev<S.catchLoc)return C(S.catchLoc,!0);if(this.prev<S.finallyLoc)return C(S.finallyLoc)}else if(D){if(this.prev<S.catchLoc)return C(S.catchLoc,!0)}else{if(!I)throw Error("try statement without catch or finally");if(this.prev<S.finallyLoc)return C(S.finallyLoc)}}}},abrupt:function(f,h){for(var C=this.tryEntries.length-1;C>=0;--C){var E=this.tryEntries[C];if(E.tryLoc<=this.prev&&i.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var S=E;break}}S&&(f==="break"||f==="continue")&&S.tryLoc<=h&&h<=S.finallyLoc&&(S=null);var T=S?S.completion:{};return T.type=f,T.arg=h,S?(this.method="next",this.next=S.finallyLoc,P):this.complete(T)},complete:function(f,h){if(f.type==="throw")throw f.arg;return f.type==="break"||f.type==="continue"?this.next=f.arg:f.type==="return"?(this.rval=this.arg=f.arg,this.method="return",this.next="end"):f.type==="normal"&&h&&(this.next=h),P},finish:function(f){for(var h=this.tryEntries.length-1;h>=0;--h){var C=this.tryEntries[h];if(C.finallyLoc===f)return this.complete(C.completion,C.afterLoc),O(C),P}},catch:function(f){for(var h=this.tryEntries.length-1;h>=0;--h){var C=this.tryEntries[h];if(C.tryLoc===f){var E=C.completion;if(E.type==="throw"){var S=E.arg;O(C)}return S}}throw Error("illegal catch attempt")},delegateYield:function(f,h,C){return this.delegate={iterator:se(f),resultName:h,nextLoc:C},this.method==="next"&&(this.arg=r),P}},e}function sr(r,e,t,i,o,n,s){try{var a=r[n](s),l=a.value}catch(d){t(d);return}a.done?e(l):Promise.resolve(l).then(i,o)}function us(r){return function(){var e=this,t=arguments;return new Promise(function(i,o){var n=r.apply(e,t);function s(l){sr(n,i,o,s,a,"next",l)}function a(l){sr(n,i,o,s,a,"throw",l)}s(void 0)})}}function fs(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function hs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ms(i.key),i)}}function gs(r,e,t){return e&&hs(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ms(r){var e=xs(r,"string");return ke(e)=="symbol"?e:e+""}function xs(r,e){if(ke(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(ke(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var vs=(function(){function r(){fs(this,r)}return gs(r,[{key:"openFile",value:(function(){var e=us(Wt().mark(function i(o,n){var s;return Wt().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!(Wr()&&o&&typeof o.uri<"u")){l.next=11;break}return l.prev=1,l.next=4,Jn(o.uri);case 4:return s=l.sent,l.abrupt("return",new or(s));case 8:throw l.prev=8,l.t0=l.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));case 11:if(!(typeof o.slice=="function"&&typeof o.size<"u")){l.next=13;break}return l.abrupt("return",Promise.resolve(new or(o)));case 13:if(typeof o.read!="function"){l.next=18;break}if(n=Number(n),Number.isFinite(n)){l.next=17;break}return l.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return l.abrupt("return",Promise.resolve(new ps(o,n)));case 18:return l.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return l.stop()}},i,null,[[1,8]])}));function t(i,o){return e.apply(this,arguments)}return t})()}])})();function bs(r,e){return Wr()?Promise.resolve(ys(r,e)):Promise.resolve(["tus-br",r.name,r.type,r.size,r.lastModified,e.endpoint].join("-"))}function ys(r,e){var t=r.exif?ws(JSON.stringify(r.exif)):"noexif";return["tus-rn",r.name||"noname",r.size||"nosize",t,e.endpoint].join("/")}function ws(r){var e=0;if(r.length===0)return e;for(var t=0;t<r.length;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e&=e}return e}function et(r){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(r)}function oi(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function _s(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,ks(i.key),i)}}function ni(r,e,t){return e&&_s(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ks(r){var e=Ss(r,"string");return et(e)=="symbol"?e:e+""}function Ss(r,e){if(et(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(et(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Cs=(function(){function r(){oi(this,r)}return ni(r,[{key:"createRequest",value:function(t,i){return new $s(t,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),$s=(function(){function r(e,t){oi(this,r),this._xhr=new XMLHttpRequest,this._xhr.open(e,t,!0),this._method=e,this._url=t,this._headers={}}return ni(r,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(t,i){this._xhr.setRequestHeader(t,i),this._headers[t]=i}},{key:"getHeader",value:function(t){return this._headers[t]}},{key:"setProgressHandler",value:function(t){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&t(i.loaded)})}},{key:"send",value:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,n){t._xhr.onload=function(){o(new Es(t._xhr))},t._xhr.onerror=function(s){n(s)},t._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Es=(function(){function r(e){oi(this,r),this._xhr=e}return ni(r,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(t){return this._xhr.getResponseHeader(t)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function tt(r){"@babel/helpers - typeof";return tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tt(r)}function Ps(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Us(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ls(i.key),i)}}function Os(r,e,t){return e&&Us(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ls(r){var e=Rs(r,"string");return tt(e)=="symbol"?e:e+""}function Rs(r,e){if(tt(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(tt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}var Xt=!1;try{Xt="localStorage"in window;var zt="tusSupport",ar=localStorage.getItem(zt);localStorage.setItem(zt,ar),ar===null&&localStorage.removeItem(zt)}catch(r){if(r.code===r.SECURITY_ERR||r.code===r.QUOTA_EXCEEDED_ERR)Xt=!1;else throw r}var Fs=Xt,Ts=(function(){function r(){Ps(this,r)}return Os(r,[{key:"findAllUploads",value:function(){var t=this._findEntries("tus::");return Promise.resolve(t)}},{key:"findUploadsByFingerprint",value:function(t){var i=this._findEntries("tus::".concat(t,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(t){return localStorage.removeItem(t),Promise.resolve()}},{key:"addUpload",value:function(t,i){var o=Math.round(Math.random()*1e12),n="tus::".concat(t,"::").concat(o);return localStorage.setItem(n,JSON.stringify(i)),Promise.resolve(n)}},{key:"_findEntries",value:function(t){for(var i=[],o=0;o<localStorage.length;o++){var n=localStorage.key(o);if(n.indexOf(t)===0)try{var s=JSON.parse(localStorage.getItem(n));s.urlStorageKey=n,i.push(s)}catch{}}return i}}])})();function Te(r){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Te(r)}function zs(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function js(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Gr(i.key),i)}}function Ds(r,e,t){return t&&js(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function As(r,e,t){return e=bt(e),Is(r,Xr()?Reflect.construct(e,t||[],bt(r).constructor):e.apply(r,t))}function Is(r,e){if(e&&(Te(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ms(r)}function Ms(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xr(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Xr=function(){return!!r})()}function bt(r){return bt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},bt(r)}function Bs(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&Gt(r,e)}function Gt(r,e){return Gt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Gt(r,e)}function lr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,i)}return t}function Oe(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?lr(Object(t),!0).forEach(function(i){Ns(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):lr(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Ns(r,e,t){return e=Gr(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Gr(r){var e=Hs(r,"string");return Te(e)=="symbol"?e:e+""}function Hs(r,e){if(Te(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(Te(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var dr=Oe(Oe({},vt.defaultOptions),{},{httpStack:new Cs,fileReader:new vs,urlStorage:Fs?new Ts:new yn,fingerprint:bs}),qs=(function(r){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return zs(this,e),i=Oe(Oe({},dr),i),As(this,e,[t,i])}return Bs(e,r),Ds(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=Oe(Oe({},dr),o),vt.terminate(i,o)}}])})(vt);const Vs=10*1024*1024,Ks=5*1024*1024,Ys="https://eu-on-24001.connector.filerobot.com/files",Ws="https://eu-on-24001.connector.filerobot.com/json";function Xs(r,e){if(!e||!r.file)return!1;const t=e.sizeThreshold??Vs;return r.size>=t}function Gs(r,e){const{tusConfig:t}=e,i=e.apiBase.replace(/\/+$/,""),o=t.endpoint||Ys,n=t.chunkSize??Ks,s=t.resumable!==!1,a=t.parallelChunks??1,l=t.retryDelays??[0,1e3,3e3,5e3],d=i.split("/").pop()||"";let p=!1,u=!1,v=!1;const _={name:r.name,type:r.type,"filerobot-folder":e.folder},b=async()=>`tus-${r.id}-${o}`,w=new qs(r.file,{endpoint:o,chunkSize:n,retryDelays:l,parallelUploads:a,storeFingerprintForResuming:s,removeFingerprintOnSuccess:!0,headers:{},metadata:_,fingerprint:b,onBeforeRequest(x){const k=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[R,U]of Object.entries(k))x.setHeader(R,U);x.setHeader("X-Filerobot-Token",d)},onUploadUrlAvailable(){w.url&&e.onUploadUrlAvailable&&!v&&(v=!0,e.onUploadUrlAvailable(w.url))},onProgress(x,k){!u&&!p&&e.onProgress(x,k)},onSuccess(){var R;if(u)return;y();const x=w.url||"",k=(R=x.match(/files\/([^/?]+)/))==null?void 0:R[1];k?Zs(k,r.size).then(U=>{u||e.onComplete(je(U)?St(U,r):U)}).catch(U=>{u||e.onError(U)}):e.onComplete({status:"success",file:{uuid:"",name:r.name,extension:r.name.split(".").pop()||"",type:r.type,size:r.size,url:{public:x,cdn:x},meta:r.meta,tags:r.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(x){u||(y(),Js(x)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(x instanceof Error?x:new Error(String(x))))},onShouldRetry(x,k,R){var j;const U=(j=x.originalResponse)==null?void 0:j.getStatus();return U===429?!0:!(U&&U>400&&U<500&&U!==409)}});let P=null,L=null;typeof window<"u"&&(P=()=>{var x;!p&&!u&&(p=!0,w.abort(!1),(x=e.onPause)==null||x.call(e))},L=()=>{var x;p&&!u&&(p=!1,w.start(),(x=e.onResume)==null||x.call(e))},window.addEventListener("offline",P),window.addEventListener("online",L));const y=()=>{P&&window.removeEventListener("offline",P),L&&window.removeEventListener("online",L)},m=()=>{try{w.start()}catch(x){y(),e.onError(x instanceof Error?x:new Error(String(x)))}};return s?w.findPreviousUploads().then(x=>{x.length>0&&!u&&w.resumeFromPreviousUpload(x[0]),u||m()}):m(),{abort(){u=!0,p=!1,y(),w.abort(!0)},pause(){!p&&!u&&(p=!0,w.abort(!1))},resume(){p&&!u&&(p=!1,w.start())},isPaused(){return p}}}function Js(r){var e;if(r instanceof He){const t=(e=r.originalRequest)==null?void 0:e.getUnderlyingObject();return t&&typeof t.readyState=="number"&&typeof t.status=="number"?t.readyState!==0&&t.readyState!==4||t.status===0:r.originalResponse==null&&r.causingError!=null}return!1}async function Zs(r,e){const t=`${Ws}/${r}`,i=e>1e8?13e3:6e3,o=3;for(let n=0;n<=o;n++){n>0&&await new Promise(l=>setTimeout(l,i));const s=await fetch(t);if(s.status===404&&n<o)continue;if(!s.ok)throw new Error(`Failed to fetch file record (HTTP ${s.status})`);const a=await s.json();if(je(a))return a;if(a.file)return{status:"success",file:a.file};if(a.status==="success")return a;if(!(n<o))throw new Error(a.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class Jr{constructor(e,t){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=t}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let t=!1;for(const i of e.values())i.status==="idle"?(K(this.store,i.id,{status:"queued"}),t=!0):i.status==="queued"&&(t=!0);t&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const t=this.store.getState().files.get(e);!t||t.status!=="error"&&t.status!=="failed"||(K(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const t of e.values())(t.status==="error"||t.status==="failed")&&K(this.store,t.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const t=this.activeUploads.get(e);t&&"pause"in t&&(t.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,t),K(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const t=this.pausedUploads.get(e);if(!t)return;const{concurrency:i}=this.store.getState().queueConfig;this.activeUploads.size<i?(this.pausedUploads.delete(e),t.resume(),this.activeUploads.set(e,t),K(this.store,e,{status:"uploading"})):K(this.store,e,{status:"queued"})}cancelFile(e){const t=this.store.getState().files.get(e);!t||!cr(t.status)||(this.abortPausedUpload(e),this.abortUpload(e),K(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const t of e.values())cr(t.status)&&(this.abortPausedUpload(t.id),this.abortUpload(t.id),K(this.store,t.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const t of this.activeUploads.keys())this.abortUpload(t);for(const t of[...this.pausedUploads.keys()])this.abortPausedUpload(t);for(const t of this.retryTimers.values())clearTimeout(t);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:t}=e.queueConfig,i=this.activeUploads.size,o=t-i;if(o<=0)return;const s=[...e.files.values()].filter(a=>a.status==="queued").sort((a,l)=>a.retryCount!==l.retryCount?l.retryCount-a.retryCount:a.addedAt-l.addedAt).slice(0,o);for(const a of s){const l=this.pausedUploads.get(a.id);l?(this.pausedUploads.delete(a.id),l.resume(),this.activeUploads.set(a.id,l),K(this.store,a.id,{status:"uploading"})):this.startUpload(a)}}startUpload(e){var u,v;const t=(v=(u=this.config).resolveUploadParams)==null?void 0:v.call(u,e),i=!!t&&Object.keys(t).length>0,o=!i&&!e.remoteInfo&&!e.remoteUrl&&Xs(e,this.config.tusConfig);K(this.store,e.id,{status:"uploading",error:null,isTus:o});let n=0,s=Date.now(),a=0;const l={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,extraParams:i?t:void 0,onComplete:_=>this.handleComplete(e.id,_),onError:_=>this.handleError(e.id,_)},d=(_,b)=>{const w=Date.now(),P=(w-s)/1e3;if(P>0){const y=(_-n)/P;a=a===0?y:.3*y+.7*a}n=_,s=w;const L=b>0?Math.min(_/b*100,100):0;K(this.store,e.id,{progress:L,bytesUploaded:_,speed:a}),this.updateTotalProgress()};let p;if(e.remoteInfo)p=sn(e,{...l,onProgress:d});else if(e.remoteUrl)p=Go(e,l);else if(o){const _=Gs(e,{...l,onProgress:d,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:b=>{K(this.store,e.id,{tusUploadUrl:b})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,_),K(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,_),K(this.store,e.id,{status:"uploading"})}});p=_}else p=Xo(e,{...l,onProgress:d});this.activeUploads.set(e.id,p)}handleComplete(e,t){var l,d,p,u,v,_,b,w,P;this.activeUploads.delete(e);const i=this.store.getState().files.get(e),o=((l=i==null?void 0:i.previewUrl)==null?void 0:l.startsWith("blob:"))??!1,n=((p=(d=t.file)==null?void 0:d.url)==null?void 0:p.cdn)??((v=(u=t.file)==null?void 0:u.url)==null?void 0:v.cdn_permalink)??((b=(_=t.file)==null?void 0:_.url)==null?void 0:b.permalink)??null,s=n?((P=(w=this.config).transformPreviewUrl)==null?void 0:P.call(w,n))??n:null,a={status:"complete",progress:100,response:t,alreadyExisted:je(t)};i&&s&&i.type.startsWith("image/")&&!o&&(a.previewUrl=s),K(this.store,e,a),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,t){this.activeUploads.delete(e);const i=this.store.getState().files.get(e);if(!i)return;const{retryConfig:o}=this.store.getState().queueConfig,n=i.retryCount+1;if(n<=o.maxRetries){const s=Math.min(o.baseDelay*Math.pow(o.backoffFactor,i.retryCount),o.maxDelay);K(this.store,e,{status:"retrying",error:t.message,retryCount:n});const a=setTimeout(()=>{this.retryTimers.delete(e),K(this.store,e,{status:"queued"}),this.processQueue()},s);this.retryTimers.set(e,a)}else K(this.store,e,{status:"failed",error:t.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const t=this.pausedUploads.get(e);t&&(t.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const t=this.retryTimers.get(e);t&&(clearTimeout(t),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let t=0,i=0,o=0;for(const n of e.values())(n.status==="queued"||n.status==="uploading"||n.status==="paused"||n.status==="retrying"||n.status==="complete"||n.status==="failed")&&(t+=n.size,i+=n.status==="complete"?n.size:n.bytesUploaded),n.status==="uploading"&&(o+=n.speed);this.store.setState({totalBytes:t,totalBytesUploaded:i,totalSpeed:o,totalProgress:t>0?Math.min(i/t*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function cr(r){return r==="queued"||r==="uploading"||r==="retrying"||r==="paused"}function Et(r){return`https://api.filerobot.com/${r}`}async function Zr(r,e){const t=`${Et(r)}/key/${encodeURIComponent(e)}`,i=new AbortController,o=setTimeout(()=>i.abort(),3e4);try{const n=await fetch(t,{signal:i.signal});if(clearTimeout(o),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const s=await n.json();if(s.status==="error")throw new Error(`SASS key exchange failed: ${s.msg||"Unknown error"}`);return s.key}catch(n){throw clearTimeout(o),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function yt(r,e){const t={};switch(r.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");t["X-Filerobot-Key"]=e;break;case"sass-key":t["X-Filerobot-Key"]=r.sassKey;break}return r.airboxPuid&&(t["X-Filerobot-Airbox-Puid"]=r.airboxPuid),t}async function Qr(r){const e=Et(r.container);if(r.mode==="security-template"){const t=await Zr(r.container,r.securityTemplateId);return{apiBase:e,headers:yt(r,t),sassKey:t}}return{apiBase:e,headers:yt(r)}}const wt="sfx-uploader:last-upload:",eo=1;function Qs(r){var n,s,a,l,d,p,u,v,_;const{file:e,previewUrl:t,...i}=r;let o=null;return r.status==="complete"&&(r.previewUrl&&!r.previewUrl.startsWith("blob:")?o=r.previewUrl:o=((a=(s=(n=r.response)==null?void 0:n.file)==null?void 0:s.url)==null?void 0:a.permalink)??((p=(d=(l=r.response)==null?void 0:l.file)==null?void 0:d.url)==null?void 0:p.cdn_permalink)??((_=(v=(u=r.response)==null?void 0:u.file)==null?void 0:v.url)==null?void 0:_.cdn)??null),{...i,previewUrl:o}}function ea(r){try{const e=sessionStorage.getItem(wt+r);if(!e)return null;const t=JSON.parse(e);return(t==null?void 0:t.__schemaVersion)!==eo?null:t}catch{return null}}function ta(r,e){try{sessionStorage.setItem(wt+r,JSON.stringify(e))}catch{}}const Ne={save(r,e){if(e.length===0){this.clear(r);return}const t={__schemaVersion:eo,savedAt:Date.now(),files:e.map(Qs)};ta(r,t)},load(r){const e=ea(r);return e?e.files.map(t=>({...t,file:null,previewUrl:t.previewUrl??null})):null},exists(r){try{return sessionStorage.getItem(wt+r)!=null}catch{return!1}},clear(r){try{sessionStorage.removeItem(wt+r)}catch{}}},A={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let ia=0;function Ee(){return`file-${Date.now()}-${++ia}`}function he(r){if(r<=0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(r)/Math.log(1024)),e.length-1),i=r/Math.pow(1024,t);return`${t===0?i:i.toFixed(1)} ${e[t]}`}function jt(r){if(!isFinite(r)||r<=0)return"0s";const e=Math.round(r);if(e<60)return`${e}s`;const t=Math.floor(e/60),i=e%60;return i>0?`${t}m ${i}s`:`${t}m`}function to(r){var t;const e=((t=r.name.split(".").pop())==null?void 0:t.toLowerCase())??"";return r.type.startsWith("image/")?"image":r.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(e)?"vid":r.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(e)?"audio":r.type==="application/pdf"||e==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(e)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(e)?"doc":["ppt","pptx","key","odp"].includes(e)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(e)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(e)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(e)?"markup":["ttf","otf","woff","woff2","eot"].includes(e)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(e)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(e)?"binary":["sql","db","sqlite","mdb"].includes(e)?"data":"gen"}function ra(r){const e=r.lastIndexOf(".");return e>=0?r.slice(e+1).toUpperCase():""}const oa="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",io={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function Jt(r){const e=r==="_default"?"GENERIC":r.toUpperCase();return`${oa}${e}.svg?vh=${io[r]}`}function si(r){const e=(r==null?void 0:r.toLowerCase().replaceAll(".",""))||"";return e in io?Jt(e):Jt("_default")}function ai(){return Jt("_default")}const na={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function pr(r){var t;const e=((t=r.split(".").pop())==null?void 0:t.toLowerCase())??"";return na[e]||""}function ur(r){return r==="image/heic"||r==="image/heif"}function sa(r){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.muted=!0,t.playsInline=!0;const i=URL.createObjectURL(r);let o=!1;const n=()=>{o||(o=!0,e(null)),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i)};t.addEventListener("seeked",()=>{try{const s=document.createElement("canvas");s.width=t.videoWidth||320,s.height=t.videoHeight||240;const a=s.getContext("2d");if(a){a.drawImage(t,0,0,s.width,s.height),s.toBlob(l=>{o||(o=!0,e(l?URL.createObjectURL(l):null),t.removeAttribute("src"),t.load(),URL.revokeObjectURL(i))},"image/jpeg",.7);return}}catch{}n()},{once:!0}),t.addEventListener("error",()=>n(),{once:!0}),setTimeout(()=>n(),5e3),t.src=i,t.addEventListener("loadeddata",()=>{t.currentTime=.1},{once:!0})})}function Dt(r,e,t){var i,o;if(e.maxFileSize!=null&&r.size>0&&r.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&r.size>0){let n=r.size;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&(n+=s.size);if(n>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let n=0;for(const s of t.values())s.status!=="rejected"&&s.status!=="cancelled"&&n++;if(n>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const n=e.allowedFileTypes,s="."+(((i=r.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(!n.some(l=>l.startsWith(".")?s===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type not allowed"}if(e.blockedFileTypes!=null){const n=e.blockedFileTypes,s="."+(((o=r.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(n.some(l=>l.startsWith(".")?s===l.toLowerCase():l.endsWith("/*")?r.type.startsWith(l.slice(0,-1)):r.type===l))return"File type is blocked"}return null}function fr(r){return r.allowedFileTypes?r.allowedFileTypes.join(","):""}const hr={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function ro(r){return r.filter(e=>e in hr).map(e=>hr[e])}function ge(r){return r.brandStyle?c.html`<span
    class=${lo.classMap({"brand-ico":!0,"brand-ico--transparent":r.brandStyle.background==="transparent"})}
    ${X(r.brandStyle)}
  >${ki.unsafeHTML(r.brandHtml)}</span>`:ki.unsafeHTML(r.brandHtml)}var aa=Object.defineProperty,oo=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&aa(e,t,o),o};const la='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',da='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',ca='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',pa='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Le=[{id:"device",labelKey:"myDevice",label:"My Device",icon:la,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:da,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:ca,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:pa,iconColor:"#ea580c"}],ui=class ui extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.sources=Le}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return c.html`
      ${this.sources.map(e=>c.html`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ge(e):c.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${fe.unsafeSVG(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};ui.styles=c.css`
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
  `;let it=ui;oo([$.property({attribute:!1})],it.prototype,"t");oo([$.property({type:Array})],it.prototype,"sources");function ua(r,e,t){var o;if((((o=t==null?void 0:t.requiredFields)==null?void 0:o.includes(r.ckey))||!!r.required)&&_t(e))return`${r.title} is required`;if(_t(e))return null;switch(r.type){case"numeric":{const n=Number(e);if(!Number.isFinite(n))return"Must be a valid number";if(!Number.isInteger(n))return"Must be an integer";if(n<-1999999999||n>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const n=Number(e);if(!Number.isFinite(n))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(n<-999999999999e-2||n>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const n=e,s=n.latitude!==""&&n.latitude!=null,a=n.longitude!==""&&n.longitude!=null;if(s!==a)return"Both latitude and longitude are required";if(s&&a){const l=Number(n.latitude),d=Number(n.longitude);if(!Number.isFinite(l)||l<-90||l>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const n=new URL(e);if(!["http:","https:"].includes(n.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(r.validation&&typeof e=="string")try{if(!new RegExp(r.validation).test(e))return"Value does not match expected format"}catch{}return null}function _t(r){return r==null?!0:Array.isArray(r)||typeof r=="string"?r.length===0:typeof r=="object"?!Object.values(r).some(e=>e!=null&&e!==""):!r}const fa=new Set(["idle","queued","rejected"]);function li(r){return!_t(r)}function di(r,e){var t;return(t=e==null?void 0:e.requiredFields)!=null&&t.includes(r.ckey)?!0:!!r.required}function no(r){return[...r.values()].filter(e=>fa.has(e.status))}function so(r,e){return r.fields.filter(t=>di(t,e))}function ha(r,e,t){const i=no(r);if(i.length===0)return{};const o={};for(const n of so(e,t)){const s=i.filter(a=>!li(a.meta[n.key]));s.length>0&&(o[n.key]=s)}return o}function ga(r,e,t){const i=no(r);if(i.length===0)return null;for(const o of so(e,t))if(i.some(s=>!li(s.meta[o.key])))return o.key;return null}function ma(r,e){const t={...r};for(const i of Object.keys(e)){const o=e[i];if(o==null||o==="")continue;const n=r[i];if(Array.isArray(o))if(Array.isArray(n)){const s=new Set(n.map(l=>JSON.stringify(l))),a=[...n];for(const l of o){const d=JSON.stringify(l);s.has(d)||(s.add(d),a.push(l))}t[i]=a}else t[i]=o;else t[i]=o}return t}function ao(r){let e=r;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const t=e.shadowRoot.querySelector("dialog[open]");if(t instanceof HTMLDialogElement)return t}e=e.parentNode}return document.body}var xa=Object.defineProperty,ee=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&xa(e,t,o),o};const gr=3,Zt=new CSSStyleSheet;Zt.replaceSync(`
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
`);var me;const Q=(me=class extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=gr,this._dragCounter=0,this._onDragEnter=e=>{e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=e=>{e.preventDefault()},this._onDragLeave=e=>{e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=e=>{var i;e.preventDefault(),e.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const t=Array.from(((i=e.dataTransfer)==null?void 0:i.files)??[]);t.length>0&&this._emitFiles(t)},this._onClick=e=>{const t=this.shadowRoot.querySelector(".dz-content");if(t&&this._rippleEl){const i=t.getBoundingClientRect();this._rippleEl.style.left=`${e.clientX-i.left}px`,this._rippleEl.style.top=`${e.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.browse())},this._onFileChange=e=>{const t=e.target,i=Array.from(t.files??[]);i.length>0&&this._emitFiles(i),t.value=""},this._onPaste=e=>{var o;if(!this.isConnected||this.offsetWidth===0)return;const t=(o=e.clipboardData)==null?void 0:o.items;if(!t)return;const i=[];for(const n of t)if(n.kind==="file"){const s=n.getAsFile();s&&i.push(s)}i.length>0&&(e.preventDefault(),this._emitFiles(i))},this._portalContainer=null,this._onDocClick=e=>{var t;this._moreOpen&&((t=this._portalContainer)!=null&&t.contains(e.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var e;(e=this.fileInput)==null||e.click()}_onSourceIconClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}_emitFiles(e){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:e},bubbles:!0,composed:!0}))}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const e=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),ao(this).appendChild(this._portalContainer),this._injectDropdownStyles()),c.render(c.html`<div class="sfx-more-dropdown open">
          ${e.map(t=>c.html`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(t,i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml?ge(t):t.iconColor?c.html`<svg
                        viewBox="0 0 24 24"
                        ${X({color:t.iconColor})}
                      >
                        ${fe.unsafeSVG(t.icon)}
                      </svg>`:c.svg`<svg viewBox="0 0 24 24">${fe.unsafeSVG(t.icon)}</svg>`}
                </div>
                ${t.labelKey?this.t(t.labelKey,t.label):t.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(c.render(c.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Zt)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Zt]))}_positionDropdown(){var u,v;const e=(u=this.shadowRoot)==null?void 0:u.querySelector(".more-wrap > button"),t=(v=this._portalContainer)==null?void 0:v.querySelector(".sfx-more-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=8,n=t.scrollHeight,s=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=n+o||a>l?t.style.top=`${i.top-n-o}px`:t.style.top=`${i.bottom+o}px`;let p=i.right-s;p=Math.max(8,Math.min(p,window.innerWidth-s-8)),t.style.left=`${p}px`}_onMoreItemClick(e,t){t.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(e)}_updateVisiblePills(){const e=window.innerWidth;this.sourcesLayout==="cards"?e<=480?this._visiblePills=2:e<=768?this._visiblePills=3:this._visiblePills=5:e<=768?this._visiblePills=1:this._visiblePills=gr}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>{var o;const i=(((o=e[0])==null?void 0:o.contentRect.width)??this.getBoundingClientRect().width)>=me._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(e){super.updated(e),e.has("sourcesLayout")&&this._updateVisiblePills(),e.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(c.render(c.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(e){return c.html`
      <button
        class="src-pill"
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?ge(e):c.html`<span
              class="pill-ico"
              ${X(e.iconColor?{color:e.iconColor}:null)}
            >
              ${c.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${fe.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey?this.t(e.labelKey,e.label):e.label}
      </button>
    `}_renderCard(e){return c.html`
      <button
        class="src-card"
        aria-label=${e.labelKey?this.t(e.labelKey,e.label):e.label}
        @click=${t=>{t.stopPropagation(),this._onSourceIconClick(e)}}
      >
        ${e.brandHtml?c.html`<span class="card-ico">${ge(e)}</span>`:c.html`<span
              class="card-ico"
              ${X(e.iconColor?{color:e.iconColor}:null)}
            >
              ${c.svg`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${fe.unsafeSVG(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey?this.t(e.labelKey,e.label):e.label}</span>
      </button>
    `}_renderMoreCard(){return c.html`
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
    `}_renderMoreDropdown(){return c.html`
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
    `}render(){const e=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),t=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return c.html`
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
          ${this.compact?c.nothing:c.html`<div class="subtitle">${this.t("dropFilesAnywhere","Drop files anywhere on this page")}</div>`}
          ${!this.compact&&this.sources.length>0?c.html`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${this.sourcesLayout==="cards"?c.html`
                      <div class="sources-cards">
                        ${t.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():c.nothing}
                      </div>
                    `:c.html`
                      <div class="sources-grid">
                        ${t.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():c.nothing}
                      </div>
                    `}
              `:c.nothing}
          ${this.compact&&this.sources.length>0?c.html`
                <div class="sources-row">
                  ${this.sources.map(o=>c.html`
                      <button
                        class="src-ico"
                        ${X(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${n=>{n.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?ge(o):c.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${fe.unsafeSVG(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:c.nothing}

          <div class="ripple"></div>
        </div>
        <input
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||c.nothing}
          @change=${this._onFileChange}
        />
      </div>
    `}},me.styles=c.css`
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
  `,me._WIDE_THRESHOLD_PX=1200,me);ee([$.property({attribute:!1})],Q.prototype,"t");ee([$.property({type:Boolean,reflect:!0})],Q.prototype,"compact");ee([$.property({type:Boolean,attribute:"external-drag-over"})],Q.prototype,"externalDragOver");ee([$.property({type:String})],Q.prototype,"accept");ee([$.property({type:Boolean})],Q.prototype,"multi");ee([$.property({type:Array})],Q.prototype,"sources");ee([$.property({type:String,attribute:"sources-layout"})],Q.prototype,"sourcesLayout");ee([$.property({type:String,reflect:!0})],Q.prototype,"mode");ee([$.state()],Q.prototype,"_dragOver");ee([$.state()],Q.prototype,"_moreOpen");ee([$.state()],Q.prototype,"_visiblePills");ee([$.query(".ripple")],Q.prototype,"_rippleEl");ee([$.query('input[type="file"]')],Q.prototype,"fileInput");let va=Q;const fi=class fi extends c.LitElement{render(){return c.html`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};fi.styles=c.css`
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
  `;let Qt=fi;var ba=Object.defineProperty,ie=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&ba(e,t,o),o};const ei=new CSSStyleSheet;ei.replaceSync(`
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
`);const hi=class hi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var o;if((o=this._portalContainer)!=null&&o.contains(e.target))return;const t=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();t&&i.includes(t)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const t=e.target,i=Array.from(t.files??[]);i.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:i},bubbles:!0,composed:!0})),t.value=""}_onSourceClick(e,t){if(e.stopPropagation(),t.id==="device"){const i=this.renderRoot.querySelector('input[type="file"]');i==null||i.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),ao(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),c.render(c.html`<div class="sfx-tile-dropdown">
        ${e.map(t=>c.html`
          <button
            class="sfx-tile-dropdown-item"
            @click=${i=>this._onMoreSourceClick(i,t)}
          >
            <span class="sfx-tile-dropdown-ico" ${X(t.iconColor&&!t.brandHtml?{color:t.iconColor}:null)}>
              ${t.brandHtml?ge(t):c.svg`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${fe.unsafeSVG(t.icon)}</svg>`}
            </span>
            ${t.labelKey?this.t(t.labelKey,t.label):t.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var u;const e=this.renderRoot.querySelector(".drop-tile-more"),t=(u=this._portalContainer)==null?void 0:u.querySelector(".sfx-tile-dropdown");if(!e||!t)return;const i=e.getBoundingClientRect(),o=6,n=t.scrollHeight,s=t.offsetWidth,a=i.top,l=window.innerHeight-i.bottom;a>=n+o||a>l?t.style.top=`${i.top-n-o}px`:t.style.top=`${i.bottom+o}px`;let p=i.right-s;p=Math.max(8,Math.min(p,window.innerWidth-s-8)),t.style.left=`${p}px`}_closePortal(){this._portalContainer&&(c.render(c.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(ei)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,ei]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,t){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,t)}_renderDropTile(){const e=this._dropTileMaxVisible,t=this.sources.slice(0,e),i=this.sources.slice(e);return c.html`
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
          ${t.length>0?c.html`
            <div class="drop-tile-sources">
              ${t.map(o=>c.html`
                <button
                  class="drop-tile-src"
                  ${X(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                  title=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                  @click=${n=>this._onSourceClick(n,o)}
                >
                  ${o.brandHtml?ge(o):c.svg`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${fe.unsafeSVG(o.icon)}</svg>`}
                </button>
              `)}
              ${i.length>0?c.html`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${o=>this._toggleMore(o)}>···</button>
                </div>
              `:c.nothing}
            </div>
          `:c.nothing}
        </div>
        <input type="file" ?multiple=${this.multi} accept=${this.accept||c.nothing} @change=${this._onFileInput} />
      </div>
    `}render(){return c.html`
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():c.nothing}
        ${this.files.map((e,t)=>c.html`<sfx-file-item .t=${this.t} .file=${e} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} ${X({"--tile-index":String(t)})}></sfx-file-item>`)}
      </div>
    `}};hi.styles=c.css`
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
  `;let J=hi;ie([$.property({attribute:!1})],J.prototype,"t");ie([$.property({attribute:!1})],J.prototype,"files");ie([$.property({type:Boolean})],J.prototype,"showDropTile");ie([$.property({attribute:!1})],J.prototype,"sources");ie([$.property({type:String})],J.prototype,"accept");ie([$.property({type:Boolean})],J.prototype,"multi");ie([$.property({type:String})],J.prototype,"mode");ie([$.property({attribute:!1})],J.prototype,"getLocateUrl");ie([$.property({type:Boolean})],J.prototype,"showLocateButton");ie([$.property({type:Boolean})],J.prototype,"showCopyCdnButton");ie([$.state()],J.prototype,"_moreOpen");ie([$.state()],J.prototype,"_dropTileMaxVisible");var ya=Object.defineProperty,ve=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&ya(e,t,o),o};const gi=class gi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._dims="",this._copied=!1,this._copiedTimer=null}updated(e){var t,i,o,n,s;if(e.has("file")){if(this._dims="",(i=(t=this.file)==null?void 0:t.previewUrl)!=null&&i.startsWith("blob:")){const a=this.file.previewUrl,l=new Image;l.onload=()=>{var d;((d=this.file)==null?void 0:d.previewUrl)===a&&(this._dims=`${l.naturalWidth}×${l.naturalHeight}`)},l.src=a}else if((s=(n=(o=this.file)==null?void 0:o.response)==null?void 0:n.file)!=null&&s.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...t},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const t=e.target.value.trim();t&&this._emit("file-rename",{name:t})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var i,o,n,s;e.stopPropagation();const t=(s=(n=(o=(i=this.file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:n.url)==null?void 0:s.cdn;if(t){try{await navigator.clipboard.writeText(t)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:t}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var u,v;const e=this.file;if(!e)return c.nothing;const t=to(e),i=e.status==="complete",o=e.status==="uploading",n=e.status==="paused",s=e.status==="error"||e.status==="failed",a=e.status==="rejected",l=this.mode==="review",d=ra(e.name),p=["tile",i?"done":"",o?"uploading":"",n?"paused":"",a?"rejected":"",l?"review":""].filter(Boolean).join(" ");return c.html`
      <div class=${p} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl?c.html`<img class="preview-img" src=${e.previewUrl} alt="" />`:c.html`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${si(d)}
                    alt="${d?`${d} file`:"File"}"
                    @error=${_=>{const b=_.target,w=ai();!b.dataset.fallback&&b.src!==w&&(b.dataset.fallback="1",b.src=w)}}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!l&&!i&&!o&&!n&&!s&&e.status!=="rejected"?c.html`
                <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  ${this.t("details","Details")}
                </button>
              `:c.nothing}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${l&&i&&((v=(u=e.response)==null?void 0:u.file)!=null&&v.url)&&(this.showLocateButton||this.showCopyCdnButton)?c.html`
                <div class="review-actions">
                  ${this.showLocateButton?c.html`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate","Locate")}
                      </button>`:c.nothing}
                  ${this.showCopyCdnButton&&e.response.file.url.cdn?c.html`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?c.html`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:c.html`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:c.nothing}
                </div>
              `:c.nothing}

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
          ${i?c.html`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:c.nothing}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l&&s?c.html`<div class="failed-badge" title=${e.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:c.nothing}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l&&(e.status==="uploading"||e.status==="paused")?c.html`
                <div class="progress">
                  <div class="progress-fill" ${X({transform:`scaleX(${Math.min(e.progress,100)/100})`})}></div>
                </div>
              `:c.nothing}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(s||a)&&e.error&&!l?c.html`<div class="error-badge" title=${e.error}>${e.error}</div>`:c.nothing}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i&&e.alreadyExisted?c.html`<div class="exists-badge" title=${this.t("alreadyUploaded","Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:c.nothing}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(s||a)&&!(i&&e.alreadyExisted)&&e.duration!=null&&e.duration>0?c.html`<div class="duration-badge">${this._formatDuration(e.duration)}</div>`:c.nothing}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${l?c.nothing:c.html`
        <div class="actions">
          ${o&&e.isTus?c.html`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:c.nothing}
          ${n?c.html`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:c.nothing}
          ${s?c.html`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:c.nothing}
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
            @change=${l?c.nothing:this._rename} @click=${_=>_.stopPropagation()} />
          <div class="meta">${d||""}${e.size?` · ${he(e.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i.toString().padStart(2,"0")}`}};gi.styles=c.css`
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
  `;let oe=gi;ve([$.property({attribute:!1})],oe.prototype,"t");ve([$.property({attribute:!1})],oe.prototype,"file");ve([$.property({type:String})],oe.prototype,"mode");ve([$.property({attribute:!1})],oe.prototype,"getLocateUrl");ve([$.property({type:Boolean})],oe.prototype,"showLocateButton");ve([$.property({type:Boolean})],oe.prototype,"showCopyCdnButton");ve([$.state()],oe.prototype,"_dims");ve([$.state()],oe.prototype,"_copied");const ot=c.css`
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
`,nt=c.css`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var wa=Object.defineProperty,be=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&wa(e,t,o),o};const mr=7,_a=4,mi=class mi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this.alreadyExistedCount=0,this._maxThumbs=mr,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?_a:mr;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),t=this.thumbnails.length-this._maxThumbs,i=this.fileCount>0,o=this.failedFiles.length>0,n=o&&!i;return c.html`
      <button class="close-btn" title=${this.t("close","Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${n?"error":o?"warning":""}">
          ${n?c.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:o?c.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:c.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${n?this.t("uploadFailed","Upload failed"):o?this.t("partiallyUploaded","Partially uploaded"):this.t("uploadedSuccessfully","Uploaded successfully!")}</div>
        <div class="subtitle">${n?this.t("filesCouldNotBeUploaded",{count:this.failedFiles.length,defaultValue_one:"File could not be uploaded",defaultValue_other:"Files could not be uploaded"}):o?this.t("partialUploadSummary","{{uploaded}} uploaded, {{failed}} failed",{uploaded:this.fileCount,failed:this.failedFiles.length}):this.t("allFilesReady","All files are ready for use")}</div>

        ${e.length>0?c.html`
              <div class="thumbs">
                ${e.map(s=>c.html`<img class="thumb" src=${s} alt="" />`)}
                ${t>0?c.html`<div class="thumb-more">+${t}</div>`:c.nothing}
              </div>
            `:c.nothing}

        ${i?c.html`<div class="summary">${this.t("uploadSummary","{{total}} file · {{size}} uploaded",{total:this.fileCount,size:he(this.totalSize)})}</div>`:c.nothing}

        ${this.alreadyExistedCount>0?c.html`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:c.nothing}

        ${o?c.html`
            <div class="failed-list">
              ${this.failedFiles.map(s=>c.html`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${s.name}</div>
                    <div class="failed-reason">${s.error}</div>
                  </div>
                  <button class="failed-retry" title=${this.t("retry","Retry")} @click=${()=>this._retryFile(s.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `:c.nothing}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore","Upload more")}</button>
          ${i||o?c.html`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles","Review files ({{count}})",{count:this.fileCount+this.failedFiles.length})}</button>`:c.nothing}
          ${o?c.html`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll","Retry all ({{count}})",{count:this.failedFiles.length})}</button>`:c.nothing}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};mi.styles=[ot,nt,c.css`
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
  `];let ne=mi;be([$.property({attribute:!1})],ne.prototype,"t");be([$.property({type:Number})],ne.prototype,"fileCount");be([$.property({type:Number})],ne.prototype,"totalSize");be([$.property({type:Array})],ne.prototype,"thumbnails");be([$.property({type:String})],ne.prototype,"primaryLabel");be([$.property({type:Array})],ne.prototype,"failedFiles");be([$.property({type:Number})],ne.prototype,"alreadyExistedCount");be([$.state()],ne.prototype,"_maxThumbs");var ka=Object.defineProperty,Ie=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&ka(e,t,o),o};const xi=class xi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,t=this.files.length;return c.html`
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
          ${this._failedCount>0?c.html`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:c.nothing}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?c.html`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:c.html`<sfx-file-list .t=${this.t} .files=${e} mode="review" .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};xi.styles=c.css`
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
  `;let de=xi;Ie([$.property({attribute:!1})],de.prototype,"t");Ie([$.property({attribute:!1})],de.prototype,"files");Ie([$.property({attribute:!1})],de.prototype,"getLocateUrl");Ie([$.property({type:Boolean})],de.prototype,"showLocateButton");Ie([$.property({type:Boolean})],de.prototype,"showCopyCdnButton");Ie([$.state()],de.prototype,"_filter");customElements.define("sfx-last-upload-review",de);var Sa=Object.defineProperty,pe=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&Sa(e,t,o),o};const vi=class vi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return c.html`
      ${e?c.html`
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
                  ${X({width:`${this.uploadProgress}%`})}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files","files")}</span
              >
            </div>
          `:c.nothing}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?c.html`
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
              `:c.nothing}
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
          ${this.failedCount>0?c.html`
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
              `:c.nothing}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",t=this.uploadState==="done",i=["btn-primary",t?"done-state":""].filter(Boolean).join(" "),o=e?this.t("uploading","Uploading"):t?this.t("done","Done"):this.t("upload","Upload");return c.html`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!t}
        aria-label=${o}
      >
        ${e?c.html`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:t?c.html`
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
            `:c.html`
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
    `}};vi.styles=[ot,nt,c.css`
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
    `];let te=vi;pe([$.property({attribute:!1})],te.prototype,"t");pe([$.property({type:String})],te.prototype,"uploadState");pe([$.property({type:Number})],te.prototype,"fileCount");pe([$.property({type:Number})],te.prototype,"totalSize");pe([$.property({type:Number})],te.prototype,"failedCount");pe([$.property({type:Boolean})],te.prototype,"showFillMetadata");pe([$.property({type:Boolean})],te.prototype,"requireMetadataFirst");pe([$.property({type:Number})],te.prototype,"completedCount");pe([$.property({type:Number})],te.prototype,"uploadProgress");const Ca='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function ci(r,e){return t=>{if(t.key!=="Tab")return;const i=r();if(!i)return;const o=i.querySelector(e);if(!o)return;const n=Array.from(o.querySelectorAll(Ca));if(n.length===0)return;const s=n[0],a=n[n.length-1],l=i.activeElement;t.shiftKey?(l===s||!o.contains(l))&&(t.preventDefault(),a.focus()):(l===a||!o.contains(l))&&(t.preventDefault(),s.focus())}}var $a=Object.defineProperty,Pt=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&$a(e,t,o),o};const bi=class bi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=ci(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var t;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((t=e.target)==null?void 0:t.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const t=new URL(this._url).pathname.split("/"),i=t[t.length-1];if(i){const o=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");o&&(o.placeholder=i)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let t=this._name.trim();if(!t)try{const i=new URL(e).pathname.split("/");t=i[i.length-1]||"imported-file"}catch{t="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:t},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,t;(t=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||t.focus()})}render(){return c.html`
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
            ${this._error?c.html`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};bi.styles=[ot,nt,c.css`
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

  `];let Se=bi;Pt([$.property({attribute:!1})],Se.prototype,"t");Pt([$.state()],Se.prototype,"_url");Pt([$.state()],Se.prototype,"_name");Pt([$.state()],Se.prototype,"_error");var Ea=Object.defineProperty,st=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&Ea(e,t,o),o};const yi=class yi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ci(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var o,n;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("video"),t=(n=this.shadowRoot)==null?void 0:n.querySelector("canvas");if(!e||!t)return;t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0),t.toBlob(s=>{s&&(this._captured=s,this._previewUrl=URL.createObjectURL(s),this._stopStream())},"image/jpeg",.92)},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:t},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(t=>t.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return c.html`
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
            ${this._error?c.html`<div class="error">${this._error}</div>`:this._captured?c.html`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
                    </div>
                  `:c.html`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};yi.styles=[ot,nt,c.css`
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
  `];let xe=yi;st([$.property({attribute:!1})],xe.prototype,"t");st([$.state()],xe.prototype,"_stream");st([$.state()],xe.prototype,"_error");st([$.state()],xe.prototype,"_captured");st([$.state()],xe.prototype,"_previewUrl");var Pa=Object.defineProperty,Me=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&Pa(e,t,o),o};const wi=class wi extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=ci(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("video");t&&(t.srcObject=this._stream),this._chunks=[];const i=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:i}),this._recorder.ondataavailable=o=>{o.data.size>0&&this._chunks.push(o.data)},this._recorder.onstop=()=>{var n;const o=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=o,this._previewUrl=URL.createObjectURL(o),(n=this._stream)==null||n.getTracks().forEach(s=>s.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),t=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:t},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,t;(e=this._recorder)==null||e.stop(),this._recorder=null,(t=this._stream)==null||t.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return c.html`
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
            ${this._error?c.html`<div class="error">${this._error}</div>`:this._recordedBlob?c.html`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?c.html`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
                      </div>
                    `:c.html`
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
    `}};wi.styles=[ot,nt,c.css`
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
  `];let ce=wi;Me([$.property({attribute:!1})],ce.prototype,"t");Me([$.state()],ce.prototype,"_stream");Me([$.state()],ce.prototype,"_recording");Me([$.state()],ce.prototype,"_error");Me([$.state()],ce.prototype,"_recordedBlob");Me([$.state()],ce.prototype,"_previewUrl");var Ua=Object.defineProperty,pi=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&Ua(e,t,o),o};const _i=class _i extends c.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,t="error"){const i=++this._nextId;this._toasts=[...this._toasts,{id:i,message:e,type:t,leaving:!1}],setTimeout(()=>this._dismiss(i),this.duration)}_dismiss(e){const t=this._toasts.findIndex(o=>o.id===e);if(t===-1)return;const i=[...this._toasts];i[t]={...i[t],leaving:!0},this._toasts=i,setTimeout(()=>{this._toasts=this._toasts.filter(o=>o.id!==e)},200)}_iconForType(e){return e==="error"?c.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?c.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:c.html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?c.html``:c.html`
      <div class="toast-stack">
        ${this._toasts.map(e=>c.html`
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
    `}};_i.styles=c.css`
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
  `;let ze=_i;pi([$.property({attribute:!1})],ze.prototype,"t");pi([$.property({type:Number})],ze.prototype,"duration");pi([$.state()],ze.prototype,"_toasts");customElements.define("sfx-toast",ze);var Oa=Object.defineProperty,H=(r,e,t,i)=>{for(var o=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(o=s(e,t,o)||o);return o&&Oa(e,t,o),o};const xr=new Set(["unsplash"]),Pe={isTus:!1,tusUploadUrl:null};var q;const N=(q=class extends c.LitElement{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Le,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=e=>{this._onPreviewRename(e.detail.fileId,e.detail.name)},this._onPreviewMetadataBlur=e=>{const t=this._previewFileId;if(!t)return;const{key:i,value:o}=e.detail,n=this._store.getState().files.get(t);if(!n)return;const s=new Map(this._store.getState().files);s.set(t,{...n,meta:{...n.meta,[i]:o}}),this._store.setState({files:s})},this._transformRemoteThumbnail=(e,t)=>{var o;const i=(o=this.config)==null?void 0:o.transformRemoteThumbnail;if(!i)return e;try{return i(e,t)||e}catch(n){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",n),e}},this._connectorThumbnailTransform=e=>{const t=this._activeConnector;return t?this._transformRemoteThumbnail(e,{source:"connector",providerId:t}):e},this._onFilesSelected=e=>{this._processIncomingFiles(e.detail.files)},this._onDropTileSourceClick=e=>{e.stopPropagation(),this._handleSourceActivation(e.detail.source.id)},this._onSourceClick=async e=>{this._handleSourceActivation(e.detail.source)},this._handleSourceActivation=async e=>{var o,n;const t=this._mergedSources.find(s=>s.id===e);if(t!=null&&t.onActivate){try{t.onActivate(this)}catch(s){console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`,s)}return}if(e==="device"){const s=this.shadowRoot.querySelector("sfx-drop-zone");s==null||s.browse();return}if(e==="url"){this._showUrlDialog=!0;return}if(e==="camera"){this._showCameraDialog=!0;return}if(e==="screen-cast"){this._showScreenCastDialog=!0;return}if((((n=(o=this.config)==null?void 0:o.connectors)==null?void 0:n.providers)??[]).includes(e)){if(xr.has(e)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:a}=await Promise.resolve().then(()=>require("./search-provider-browser-Dm3Cwq9Q.cjs"));customElements.define("sfx-search-provider-browser",a)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:a}=await Promise.resolve().then(()=>require("./provider-browser-BEfLYXIS.cjs"));customElements.define("sfx-provider-browser",a)}this._activeConnector=e}},this._onUrlSubmit=e=>{var u,v,_;this._showUrlDialog=!1;const{url:t,name:i}=e.detail,o=(u=this.config)==null?void 0:u.callbacks,n=pr(i),s=n.startsWith("image/"),a=this._store.getState();if([...a.files.values()].some(b=>b.name===i&&b.status!=="rejected"&&b.status!=="cancelled"))return;const d=Dt({name:i,size:0,type:n},a.restrictions,a.files);if(d){const b={id:Ee(),status:"rejected",file:null,remoteUrl:t,name:i,size:0,type:n,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Pe};Ce(this._store,b),this._dispatchPublic(A.FILE_REJECTED,{file:b,reason:d}),(v=o==null?void 0:o.onFileRejected)==null||v.call(o,b,d);return}const p={id:Ee(),status:"idle",file:null,remoteUrl:t,name:i,size:0,type:n,previewUrl:s?this._transformRemoteThumbnail(t,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Pe};Ce(this._store,p),this._dispatchPublic(A.FILE_ADDED,{file:p}),(_=o==null?void 0:o.onFileAdded)==null||_.call(o,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=e=>{this._showCameraDialog=!1,this._processIncomingFiles([e.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=e=>{this._showScreenCastDialog=!1,this._processIncomingFiles([e.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=e=>{this._removeFile(e.detail.fileId)},this._onFilePreview=e=>{var i,o,n;const t=this._store.getState().files.get(e.detail.fileId);t&&(this._previewFileId=t.id,this._dispatchPublic(A.FILE_PREVIEW,{file:t}),(n=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFilePreview)==null||n.call(o,t))},this._onFillMetadata=()=>{var t,i,o,n;const e=[...this._store.getState().files.values()].filter(s=>q._MODIFIABLE_STATUSES.has(s.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(A.FILL_METADATA,{files:e}),(n=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFillMetadata)==null||n.call(o,e)},this._onFileLocate=e=>{var i,o,n;const t=e.detail.file;t&&(this._dispatchPublic(A.FILE_LOCATE,{file:t}),(n=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFileLocate)==null||n.call(o,t))},this._onFileCopyCdn=e=>{var o,n,s;const t=e.detail.file,i=e.detail.cdnUrl;!t||!i||(this._dispatchPublic(A.FILE_COPY_CDN,{file:t,cdnUrl:i}),(s=(n=(o=this.config)==null?void 0:o.callbacks)==null?void 0:n.onFileCopyCdn)==null||s.call(n,t,i))},this._onBulkMetadataSaveBatch=e=>{const{changes:t}=e.detail;if(!t.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:n}of t){const s=i.get(o);s&&i.set(o,{...s,meta:{...s.meta,...n}})}this._store.setState({files:i})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=e=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryFile(e.detail.fileId)},this._onFilePause=e=>{var t;(t=this._engine)==null||t.pauseFile(e.detail.fileId)},this._onFileResume=e=>{var t;(t=this._engine)==null||t.resumeFile(e.detail.fileId)},this._onRetryAll=()=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryAll()},this._onClearAll=()=>{var i,o,n;const e=(i=this.config)==null?void 0:i.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(o=this._engine)==null||o.cancelAll();const t=[...this._store.getState().files.values()];for(const s of t)s.previewUrl&&URL.revokeObjectURL(s.previewUrl),this._dispatchPublic(A.FILE_REMOVED,{file:s}),(n=e==null?void 0:e.onFileRemoved)==null||n.call(e,s);this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var o;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const t=this.shadowRoot.querySelector("sfx-file-list"),i=(o=t==null?void 0:t.shadowRoot)==null?void 0:o.querySelector('input[type="file"]');i==null||i.click()},this._onUploadStart=()=>{var e;if(this._phase==="complete"){((e=this.config)==null?void 0:e.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const e=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(e.length>0){this._reviewFiles=e,this._isReviewing=!0;return}const t=this._lastUploadId;if(t==null)return;const i=Ne.load(t);!i||i.length===0||(this._reviewFiles=i,this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const e=this._lastUploadId;e!=null&&Ne.clear(e),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=e=>{var i,o,n;const t=(i=this.config)==null?void 0:i.callbacks;for(const s of e.detail.files){const a=this._store.getState();if([...a.files.values()].some(v=>v.name===s.name&&v.size===s.size&&v.status!=="rejected"&&v.status!=="cancelled"))continue;const d=s.thumbnail?this._transformRemoteThumbnail(s.thumbnail,{source:"connector",providerId:s.provider}):null,p=Dt({name:s.name,size:s.size,type:s.mimeType},a.restrictions,a.files);if(p){const v={id:Ee(),status:"rejected",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:d,duration:null,progress:0,speed:0,bytesUploaded:0,error:p,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Pe};Ce(this._store,v),this._dispatchPublic(A.FILE_REJECTED,{file:v,reason:p}),(o=t==null?void 0:t.onFileRejected)==null||o.call(t,v,p);continue}const u={id:Ee(),status:"idle",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:d,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Pe};Ce(this._store,u),this._dispatchPublic(A.FILE_ADDED,{file:u}),(n=t==null?void 0:t.onFileAdded)==null||n.call(t,u)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=e=>{e.target===e.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var e,t,i,o,n;this._dispatchPublic(A.COMPLETE_ACTION,{}),(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCompleteAction)==null||i.call(t),((o=this.config)==null?void 0:o.mode)==="modal"?this.close():((n=this.config)==null?void 0:n.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var e,t,i;(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onCancel)==null||i.call(t),this._dispatchPublic(A.CANCEL,{})},this._onSuccessCardClose=()=>{var e,t,i,o;((e=this.config)==null?void 0:e.mode)==="inline"?(this._dispatchPublic(A.COMPLETE_ACTION,{}),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var e,t,i,o;this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(A.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var e,t,i,o;(e=this._engine)==null||e.cancelAll(),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(A.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var e,t,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((e=this._engine)==null||e.cancelAll()),(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(A.CANCEL,{}),this.close()},this._onModalBackdropClick=e=>{e.target===e.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=e=>{e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=e=>{e.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=e=>{var i;e.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const t=Array.from(((i=e.dataTransfer)==null?void 0:i.files)??[]);t.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:t}}))},this._onKeyDown=e=>{var t,i;if(e.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const o=((t=this.config)==null?void 0:t.mode)??"modal",n=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(n==="close"||n==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=e=>{var i;e.preventDefault(),this._isResizing=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");t==null||t.classList.add("resizing"),e.target.setPointerCapture(e.pointerId)},this._onSplitPointerMove=e=>{if(!this._isResizing||this._splitRafId)return;const t=e.clientX;this._splitRafId=requestAnimationFrame(()=>{var s;this._splitRafId=0;const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".preview-layout");if(!i)return;const o=i.getBoundingClientRect(),n=(t-o.left)/o.width*100;this._splitPct=Math.max(25,Math.min(75,n))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=e=>{e==null||e.stopPropagation();const t=q._FS_ZOOM_LEVELS,i=t.indexOf(this._fsZoom),o=i===-1?1:(i+1)%t.length;this._fsZoom=t[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=e=>{this._fsDragDidMove||this._onFsToggleZoom(e)},this._fsDragDidMove=!1,this._onFsPanStart=e=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,e.preventDefault())},this._onFsPanMove=e=>{if(!this._fsDragging)return;const t=e.clientX-this._fsDragStartX,i=e.clientY-this._fsDragStartY;(Math.abs(t)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+t,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=e=>{if(this._fsZoom<=1||e.touches.length!==1)return;const t=e.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=e=>{if(!this._fsDragging||e.touches.length!==1)return;const t=e.touches[0],i=t.clientX-this._fsDragStartX,o=t.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),e.preventDefault()},this._onFsClose=e=>{e==null||e.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Ur(),this._storeCtrl=new Yo(this,this._store)}get _lastUploadId(){var i,o;const e=(i=this.config)==null?void 0:i.lastUploadReview;if(!e)return null;if(typeof e=="string")return e;const t=(o=this.config)==null?void 0:o.auth;return t?t.airboxPuid?`${t.container}:${t.airboxPuid}`:t.container:null}open(){var e,t,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(i=(t=(e=this.config)==null?void 0:e.callbacks)==null?void 0:t.onOpen)==null||i.call(t),this._dispatchPublic(A.OPEN,{}),this.requestUpdate())}close(){var e,t,i,o;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((e=this.config)==null?void 0:e.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(o=(i=(t=this.config)==null?void 0:t.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(A.CLOSE,{}),this.requestUpdate())}upload(){var o,n,s,a,l,d,p;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const e=[...this._store.getState().files.values()].filter(u=>u.status==="idle"||u.status==="queued");if((n=(o=this.config)==null?void 0:o.callbacks)!=null&&n.onBeforeUpload&&this.config.callbacks.onBeforeUpload(e)===!1)return;const t=new CustomEvent(A.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:e}});this.dispatchEvent(t)&&(this._dispatchPublic(A.UPLOAD_STARTED,{files:e}),(l=(a=(s=this.config)==null?void 0:s.callbacks)==null?void 0:a.onUploadStarted)==null||l.call(a,e),this._engine.uploadAll(),(d=this.config)!=null&&d.minimizeOnUpload&&((p=this.config)==null?void 0:p.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(e){this._processIncomingFiles(e)}resumeUpload(e){var t;if(e&&e.length>0){const i=this._store.getState().files,o=new Map(i);let n=!1;for(const s of e){const a=i.get(s.id);a&&(o.set(s.id,{...a,...s}),n=!0)}n&&this._store.setState({files:o})}this._ensureEngine(),(t=this._engine)==null||t.uploadAll()}cancelUpload(){var e;(e=this._engine)==null||e.cancelAll()}pauseFile(e){var t;(t=this._engine)==null||t.pauseFile(e)}resumeFile(e){var t;(t=this._engine)==null||t.resumeFile(e)}getFiles(){return[...this._store.getState().files.values()]}getFile(e){return this._store.getState().files.get(e)}updateFileMeta(e,t,i){const o=this._store.getState().files,n=o.get(e);if(!n||!q._MODIFIABLE_STATUSES.has(n.status))return;const s=new Map(o);s.set(e,{...n,meta:t!=null?{...n.meta,...t}:n.meta,tags:i??n.tags}),this._store.setState({files:s})}updateFilesMeta(e){const t=this._store.getState().files,i=new Map(t);let o=!1;for(const{fileId:n,meta:s,tags:a}of e){const l=t.get(n);!l||!q._MODIFIABLE_STATUSES.has(l.status)||(i.set(n,{...l,meta:s!=null?{...l.meta,...s}:l.meta,tags:a??l.tags}),o=!0)}o&&this._store.setState({files:i})}updated(e){if(e.has("config")&&this.config&&this._applyConfig(this.config),e.has("_previewFileId")&&this._previewFileId){const t=this._previewFileId,i=this._store.getState().files.get(t);i?this._getImageDimensions(i).then(o=>{this._previewFileId===t&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._applyDefaultPreviewWidth(),this._updateFloatingPortal()}_applyDefaultPreviewWidth(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");if(!e){this._previewDefaultApplied=!1;return}this._previewDefaultApplied||e.getBoundingClientRect().width<=0||(this._splitPct=62.5,this._previewDefaultApplied=!0)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const e=document.createElement("style");e.setAttribute("data-sfx-upload-float-styles",""),e.textContent=`
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
    `,document.head.appendChild(e)}_updateFloatingPortal(){const e=[...this._storeCtrl.state.files.values()];this._isMinimized&&e.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),c.render(this._renderFloatingPill(e),this._portalContainer)):this._portalContainer&&(c.render(c.nothing,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const e=this._lastUploadId;this._hasStoredReview=e!=null&&Ne.exists(e),this._initI18n(typeof navigator<"u"?navigator.language:void 0)}async _initI18n(e){try{const{i18n:t,isNew:i}=await No(e||"en");i&&t.on("missingKey",(n,s,a,l,d,p)=>{const u=a.match(/_(?:zero|one|two|few|many|other)$/),v=u&&(p!=null&&p[`defaultValue${u[0]}`])?String(p[`defaultValue${u[0]}`]):l;Vo.handleMissingKey(a,v,s)});const o=(n,s,a)=>typeof s=="string"?t.t(n,s,a??{}):t.t(n,s??{});this._store.setState({t:o})}catch{}}disconnectedCallback(){var e,t,i,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(t=this._portalContainer)==null||t.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(i=document.querySelector("style[data-sfx-upload-float-styles]"))==null||i.remove(),this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const n of this._store.getState().files.values())n.previewUrl&&URL.revokeObjectURL(n.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(e){const t={};if(e.locale&&this._initI18n(e.locale),e.targetFolder&&(t.targetFolder=e.targetFolder),(e.restrictions||e.forceName!=null)&&(t.restrictions={...this._store.getState().restrictions,...e.restrictions},e.forceName!=null&&(t.restrictions.maxNumberOfFiles=1)),e.concurrency!=null){const o=this._store.getState().queueConfig;t.queueConfig={...o,concurrency:e.concurrency}}if(e.autoProceed!=null){const o=t.queueConfig??this._store.getState().queueConfig;t.queueConfig={...o,autoProceed:e.autoProceed}}Object.keys(t).length>0&&this._store.setState(t);const i=this._lastUploadId;this._hasStoredReview=i!=null&&Ne.exists(i),this._resolveAuthAndEngine(e),(e.mode==="inline"||!e.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(e){var o,n;const t=e.auth;if(t.mode==="sass-key"){this._apiBase=Et(t.container),this._authHeaders=yt(t),this._ensureEngine(),(o=this._engine)==null||o.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e);return}const i=++this._authResolveId;try{const s=await Qr(t);if(i!==this._authResolveId)return;this._apiBase=s.apiBase,this._authHeaders=s.headers,this._ensureEngine(),(n=this._engine)==null||n.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(e)}catch(s){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",s),this._showToast(this._formatAuthError(s))}}_formatAuthError(e){var i,o;const t=e instanceof Error?e.message:String(e);return(o=(i=this.config)==null?void 0:i.auth)!=null&&o.container?t.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:t.includes("HTTP 401")||t.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":t.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":t.includes("Failed to fetch")||t.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${t}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(e,t="error"){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("sfx-toast");i==null||i.show(e,t)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}get _remainingSlots(){const e=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(e==null)return null;let t=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&t++;return Math.max(0,e-t)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}_buildUploadParamsResolver(){const e=this.config;if(!e)return;const{forceName:t,getUploadParams:i}=e;if(!(t==null&&!i))return o=>{const n={};if(t!=null){const a=typeof t=="function"?t():t;a&&(n.opt_force_name=a)}const s=i==null?void 0:i(o);return s&&Object.assign(n,s),Object.keys(n).length>0?n:void 0}}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new Jr(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:e=>this._transformRemoteThumbnail(e,{source:"cdn-complete"})}),this._engine.start())}async _preloadMetadataSchema(e){const t=e.metadataConfig;if(!(!t||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:i,createTagsAutocomplete:o}=await Promise.resolve().then(()=>require("./index-7jTf4POF.cjs"));this._metadataSchema=await i(this._apiBase,this._authHeaders,t.projectUuid,t),this._metadataAutocomplete=o(this._apiBase,this._authHeaders);const n=this._metadataSchema.fields.filter(s=>di(s,t)).map(s=>s.key);this._dispatchPublic(A.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:n})}catch(i){console.error("[sfx-uploader] Failed to load metadata schema:",i),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(e,t){const i=t.trim();if(!i)return;const o=this._store.getState().files.get(e);if(!o||o.name===i)return;const n=new Map(this._store.getState().files);n.set(e,{...o,name:i}),this._store.setState({files:n})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema||e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0||this._metadataSchema.forceFillingOnUpload||e.requiredFields&&e.requiredFields.length>0?!0:this._metadataSchema.fields.some(i=>!!i.required)}_firstMissingRequiredFieldKey(){var e;return!this._metadataEnforcing||!this._metadataSchema?null:ga(this._store.getState().files,this._metadataSchema,(e=this.config)==null?void 0:e.metadataConfig)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_dispatchPublic(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}_onStoreChange(){var o,n,s,a,l,d,p,u,v,_;const e=this._store.getState(),t=this._prevStoreState;if(this._prevStoreState=e,!t)return;e.isUploading&&!t.isUploading&&(this._lastEta=0);const i=(o=this.config)==null?void 0:o.callbacks;for(const[b,w]of e.files){const P=t.files.get(b);if(P){if(P.status!==w.status)switch(w.status){case"uploading":P.status==="paused"&&(this._dispatchPublic(A.UPLOAD_RESUMED,{file:w}),(n=i==null?void 0:i.onUploadResumed)==null||n.call(i,w));break;case"complete":w.response&&(this._dispatchPublic(A.UPLOAD_COMPLETE,{file:w,response:w.response}),(s=i==null?void 0:i.onUploadComplete)==null||s.call(i,w,w.response));break;case"error":case"failed":{const L=new Error(w.error??"Upload failed");this._dispatchPublic(A.UPLOAD_ERROR,{file:w,error:L}),(a=i==null?void 0:i.onUploadError)==null||a.call(i,w,L);break}case"retrying":this._dispatchPublic(A.UPLOAD_RETRY,{file:w,attempt:w.retryCount}),(l=i==null?void 0:i.onUploadRetry)==null||l.call(i,w,w.retryCount);break;case"paused":this._dispatchPublic(A.UPLOAD_PAUSED,{file:w}),(d=i==null?void 0:i.onUploadPaused)==null||d.call(i,w);break}w.status==="uploading"&&P.progress!==w.progress&&(this._dispatchPublic(A.UPLOAD_PROGRESS,{file:w,progress:w.progress,speed:w.speed}),(p=i==null?void 0:i.onUploadProgress)==null||p.call(i,w,w.progress,w.speed))}}if(e.totalProgress!==t.totalProgress||e.totalSpeed!==t.totalSpeed){const b=e.totalSpeed>0?(e.totalBytes-e.totalBytesUploaded)/e.totalSpeed:e.isUploading?this._lastEta:0;e.totalSpeed>0&&(this._lastEta=b),this._dispatchPublic(A.TOTAL_PROGRESS,{percentage:e.totalProgress,speed:e.totalSpeed,eta:b}),(u=i==null?void 0:i.onTotalProgress)==null||u.call(i,e.totalProgress,e.totalSpeed,b)}if(t.isUploading&&!e.isUploading){const b=[...e.files.values()];if(!b.some(P=>P.status==="cancelled")){const P=b.filter(x=>x.status==="complete"),L=b.filter(x=>x.status==="failed"||x.status==="error"),y=this._lastUploadId;if(y!=null){const x=[...P,...L];Ne.save(y,x),this._hasStoredReview=x.length>0}this._dispatchPublic(A.ALL_COMPLETE,{successful:P,failed:L}),(v=i==null?void 0:i.onAllComplete)==null||v.call(i,P,L);const m=(_=this.config)==null?void 0:_.closeOnComplete;if(m){const x=typeof m=="number"?m:1500;this._closeOnCompleteTimer=setTimeout(()=>{var k,R,U;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(A.COMPLETE_ACTION,{}),(U=(R=(k=this.config)==null?void 0:k.callbacks)==null?void 0:R.onCompleteAction)==null||U.call(R),this.close())},x)}}}}get _mergedSources(){var p;const e=(p=this.config)==null?void 0:p.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Le,this._cachedSources;const t=e.providers.length>0?ro(e.providers):[],i=e.customSources??[],o=e.coreSources?new Set(e.coreSources):null,n=o?Le.filter(u=>o.has(u.id)):Le,s=n.filter(u=>u.id==="device"||u.id==="url"),a=n.filter(u=>u.id!=="device"&&u.id!=="url"),l=new Set,d=[];for(const u of[...s,...t,...a,...i])if(!l.has(u.id)){if(q._RESERVED_IDS.has(u.id)&&u.onActivate){console.warn(`[sfx-uploader] Custom source id "${u.id}" conflicts with a built-in source and was skipped.`);continue}l.add(u.id),d.push(u)}return this._cachedSources=d,this._cachedSources}get _phase(){const e=this._storeCtrl.state,t=[...e.files.values()];if(t.length===0)return"empty";if(e.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return t.every(o=>i.has(o.status))&&t.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(e){var i,o,n,s;const t=(i=this.config)==null?void 0:i.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);for(const a of e){const l=this._store.getState();if([...l.files.values()].some(b=>b.name===a.name&&b.size===a.size&&b.status!=="rejected"&&b.status!=="cancelled"))continue;const p=a.type||pr(a.name),u=Dt({name:a.name,size:a.size,type:p},l.restrictions,l.files);if(u){const b=p.startsWith("image/")&&!ur(p)?URL.createObjectURL(a):null,w={id:Ee(),status:"rejected",file:a,remoteUrl:null,name:a.name,size:a.size,type:p,previewUrl:b,duration:null,progress:0,speed:0,bytesUploaded:0,error:u,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Pe};Ce(this._store,w),this._dispatchPublic(A.FILE_REJECTED,{file:w,reason:u}),(o=t==null?void 0:t.onFileRejected)==null||o.call(t,w,u);const P=(n=this.config)==null?void 0:n.rejectedFileAutoRemoveDelay,L=P===!1||P===0||P===void 0?0:P;if(L>0){const y=w.id,m=setTimeout(()=>{this._rejectedTimers.delete(y);const x=this._store.getState().files.get(y);x&&x.status==="rejected"&&Ii(this._store,y)},L);this._rejectedTimers.set(y,m)}continue}let v=null;p.startsWith("image/")&&!ur(p)&&(v=URL.createObjectURL(a));const _={id:Ee(),status:"idle",file:a,remoteUrl:null,name:a.name,size:a.size,type:p,previewUrl:v,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Pe};if(Ce(this._store,_),this._dispatchPublic(A.FILE_ADDED,{file:_}),(s=t==null?void 0:t.onFileAdded)==null||s.call(t,_),a.type.startsWith("video/")){sa(a).then(w=>{if(!w)return;const P=this._store.getState(),L=P.files.get(_.id);if(L){const y=new Map(P.files);y.set(_.id,{...L,previewUrl:w}),this._store.setState({files:y})}else URL.revokeObjectURL(w)});const b=document.createElement("video");b.preload="metadata",b.src=URL.createObjectURL(a),b.onerror=()=>{URL.revokeObjectURL(b.src)},b.onloadedmetadata=()=>{const w=b.duration;if(URL.revokeObjectURL(b.src),!isFinite(w))return;const P=this._store.getState(),L=P.files.get(_.id);if(L){const y=new Map(P.files);y.set(_.id,{...L,duration:w}),this._store.setState({files:y})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(e){var n,s,a,l;const t=this._store.getState().files.get(e);if(!t)return;const i={...t};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===t.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===t.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),t.previewUrl&&URL.revokeObjectURL(t.previewUrl),t.file){const d=this._videoBlobUrls.get(t.file);d&&(URL.revokeObjectURL(d),this._videoBlobUrls.delete(t.file))}(t.status==="uploading"||t.status==="queued"||t.status==="retrying"||t.status==="paused")&&((n=this._engine)==null||n.cancelFile(e)),Ii(this._store,e),this._dimCache.delete(e);const o=this._rejectedTimers.get(e);if(o&&(clearTimeout(o),this._rejectedTimers.delete(e)),this._previewFileId===e){const d=[...this._store.getState().files.values()];this._previewFileId=d.length>0?d[0].id:null}this._dispatchPublic(A.FILE_REMOVED,{file:i}),(l=(a=(s=this.config)==null?void 0:s.callbacks)==null?void 0:a.onFileRemoved)==null||l.call(a,i)}render(){var o;const e=((o=this.config)==null?void 0:o.mode)??"modal",t=[...this._storeCtrl.state.files.values()],i=this._storeCtrl.state.t;return e==="modal"?c.html`
        ${this._isOpen&&!this._isMinimized?c.html`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            `:c.nothing}
        ${this._renderFsOverlay()}
      `:c.html`
      <div class="inline ${t.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${i}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return c.nothing;const e=this._storeCtrl.state.t,t=[...this._store.getState().files.values()].filter(o=>o.previewUrl||o.type.startsWith("video/")&&o.file),i=t.findIndex(o=>o.id===this._previewFileId);return c.html`
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
        ${this._fullscreenVideoFile?c.html`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${o=>o.stopPropagation()}></video>`:c.html`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${X(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=q._FS_ZOOM_LEVELS[q._FS_ZOOM_LEVELS.length-1]?e("resetZoom","Reset zoom"):e("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=q._FS_ZOOM_LEVELS[q._FS_ZOOM_LEVELS.length-1]?c.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:c.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
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
    `}_renderInlineHeader(e){return c.html`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent?c.html`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              `:c.nothing}
          ${e.title?c.html`<h2 class="inline-header-title">${e.title}</h2>`:c.nothing}
        </div>
        ${e.description?c.html`<div class="inline-header-desc">${e.description}</div>`:c.nothing}
      </div>
    `}_renderHeader(){var a,l,d;if(this._phase==="complete")return c.nothing;const e=this._storeCtrl.state.t,t=((a=this.config)==null?void 0:a.mode)??"modal";if(this._phase==="uploading"){const v=[...this._storeCtrl.state.files.values()].filter(w=>w.status!=="rejected"&&w.status!=="cancelled"),_=v.length,b=v.filter(w=>w.status==="complete").length;return c.html`
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
                ${e("uploadingFiles",{count:_,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete","{{completed}} of {{total}} complete",{completed:b,total:_})}${this._lastEta>0?` · ${e("etaLeft","~{{eta}} left",{eta:jt(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(t==="inline"&&((l=this.config)!=null&&l.inlineHeader))return c.nothing;const i=((d=this.config)==null?void 0:d.header)??(t==="modal"?"close":!0);if(i===!1)return c.nothing;const o=t==="modal"?this._onModalDismiss:this._onInlineDismiss,n=i==="back"?c.html`<button
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
          </button>`:c.nothing,s=i==="close"?c.html`<button
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
          </button>`:c.nothing;return c.html`
      <div class="header">
        ${n}
        ${i!=="back"?c.html` <div class="header-icon">
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
            </div>`:c.nothing}
        <div class="header-title">${e("uploadFiles","Upload Files")}</div>
        ${s}
      </div>
    `}_getImageDimensions(e){return e.previewUrl?this._dimCache.has(e.id)?Promise.resolve(this._dimCache.get(e.id)):new Promise(t=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(e.id,o),t(o)},i.onerror=()=>{this._dimCache.set(e.id,null),t(null)},i.src=e.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(e){var l;const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),n=e.filter(d=>d.status!=="rejected"&&d.status!=="cancelled"),s=n.length,a=n.filter(d=>d.status==="complete").length;return c.html`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          ${i("uploadingFiles",{count:s,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
        </div>
        <div class="upload-overlay-subtitle">
          ${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:a,total:s})}${this._lastEta>0?c.html` · ${i("etaLeft","~{{eta}} left",{eta:jt(this._lastEta)})}`:c.nothing}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" ${X({width:`${o}%`})}></div>
        </div>
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${i("cancelUpload","Cancel upload")}
          </button>
          ${(l=this.config)!=null&&l.minimizeOnUpload?c.html`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${i("minimizeAndContinue","Minimize & continue in background")}
              </button>`:c.nothing}
        </div>
      </div>
    `}_renderFloatingPill(e){const t=this._storeCtrl.state,i=t.t,o=Math.round(t.totalProgress??0),n=this._phase==="complete",s=e.filter(l=>l.status==="complete").length,a=e.filter(l=>l.status==="failed").length;return this._isPillExpanded===!1?c.html`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${n?a>0?s>0?c.html`<div class="float-collapsed-icon warn">
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
                    </div>`:c.html`<div class="float-collapsed-icon error">
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
                    </div>`:c.html`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>`:c.html`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${n?a>0?s>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}</span
            >
            ${n?c.nothing:c.html`<span class="float-collapsed-pct">${o}%</span>`}
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
      `:c.html`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${n?a>0?s>0?"warn":"error":"done":""}"
            >
              ${n?a>0?s>0?c.html`<svg
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
                      </svg>`:c.html`<svg
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
                      </svg>`:c.html`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>`:c.html`<svg
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
                ${n?a>0?s>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:e.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${n?`${i("filesUploaded",{count:s,defaultValue_one:"{{count}} file uploaded",defaultValue_other:"{{count}} files uploaded"})}${a>0?`, ${i("nFailed","{{count}} failed",{count:a})}`:""}`:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:s,total:e.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:jt(this._lastEta)})}`:""}`}
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
              class="float-progress-pct ${n?a>0?s>0?"warn":"error":"done":""}"
              >${n?"Done":`${o}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${n?a>0?s>0?"warn":"error":"done":""}"
              ${X({width:`${n?100:o}%`})}
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${e.map(l=>{const d=l.status==="failed"||l.status==="error";return c.html`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${X(l.previewUrl?{"background-image":`url(${l.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${l.previewUrl?c.nothing:c.html`<svg
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
                  <div class="float-item-name">${l.name}</div>
                  <div class="float-item-size">${he(l.size)}</div>
                </div>
                <div class="float-item-status">
                  ${l.status==="complete"?c.html`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>`:d?c.html` <div class="float-item-error-wrap">
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
                            >${l.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var p;this._ensureEngine(),(p=this._engine)==null||p.retryFile(l.id)}}
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
                        </button>`:l.status==="paused"?c.html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d97706"
                        stroke-width="2"
                        width="16"
                        height="16"
                      >
                        <rect
                          x="6"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                        <rect
                          x="14"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                      </svg>`:c.html`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(e){var s,a,l,d,p;if(e.length===0)return c.nothing;const t=this._storeCtrl.state.t,i=e.find(u=>u.id===this._previewFileId)??e[0],o=((s=i.name.split(".").pop())==null?void 0:s.toUpperCase())||"";new Date(i.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const n=e.reduce((u,v)=>u+(v.size||0),0);return c.html`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${X({flex:String(this._splitPct)})}>
          ${((a=this.config)==null?void 0:a.mode)==="inline"&&((l=this.config)!=null&&l.inlineHeader)?this._renderInlineHeader(this.config.inlineHeader):c.nothing}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${e.length} ${e.length===1?"asset":"assets"} ·
              ${he(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${fr(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
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
        <div class="preview-panel" ${X({flex:String(100-this._splitPct)})}>
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
              ${i.previewUrl||i.type.startsWith("video/")&&i.file?c.html`
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
                  `:c.nothing}
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
          ${i.type.startsWith("video/")&&i.file?c.html`
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
              `:i.previewUrl?c.html`
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
              `:c.html`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${to(i)}">
                    <img
                      class="preview-doc-type-img"
                      src=${si(o)}
                      alt="${o?`${o} file`:"File"}"
                      @error=${u=>{const v=u.target,_=ai();!v.dataset.fallback&&v.src!==_&&(v.dataset.fallback="1",v.src=_)}}
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
          ${this._metadataSchema&&((d=this.config)!=null&&d.metadataConfig)?c.html`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${o}${i.size?` · ${he(i.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:c.nothing}
          ${this._metadataSchema&&((p=this.config)!=null&&p.metadataConfig)?c.html`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${i.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:c.html`
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
                    ${i.size?c.html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${he(i.size)}
                            </div>
                          </div>
                        `:c.nothing}
                    ${this._previewDims!=="—"?c.html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:c.nothing}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_navigatePreview(e,t){var n;const o=e.findIndex(s=>s.id===this._previewFileId)+t;if(o>=0&&o<e.length){const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".preview-image[controls]");s&&(s.pause(),s.removeAttribute("src"),s.load()),this._previewFileId=e[o].id}}_renderBody(){var l,d,p,u,v,_,b,w,P,L,y;const e=this._storeCtrl.state,t=e.t,i=[...e.files.values()],o=i.filter(m=>m.status==="idle"||m.status==="queued"||m.status==="error"||m.status==="failed"),n=this._phase,s=fr(e.restrictions),a=i.length>0;return c.html`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
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
        @require-metadata=${this._onFillMetadata}
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
          @dragenter=${a?this._onBodyDragEnter:c.nothing}
          @dragover=${a?this._onBodyDragOver:c.nothing}
          @dragleave=${a?this._onBodyDragLeave:c.nothing}
          @drop=${a?this._onBodyDrop:c.nothing}
        >
          ${((l=this.config)==null?void 0:l.mode)==="inline"&&((d=this.config)!=null&&d.inlineHeader)&&!this._previewFileId&&n!=="uploading"&&n!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):c.nothing}
          ${this._isReviewing?c.html`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .getLocateUrl=${(p=this.config)==null?void 0:p.getLocateUrl}
                  .showLocateButton=${((u=this.config)==null?void 0:u.showLocateButton)??!1}
                  .showCopyCdnButton=${((v=this.config)==null?void 0:v.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:n==="complete"?c.html`
                <sfx-success-card
                  .t=${t}
                  .primaryLabel=${t("done","Done")}
                  .fileCount=${i.filter(m=>m.status==="complete").length}
                  .totalSize=${i.filter(m=>m.status==="complete").reduce((m,x)=>m+(x.size||0),0)}
                  .thumbnails=${i.filter(m=>m.status==="complete"&&m.previewUrl).map(m=>m.previewUrl)}
                  .failedFiles=${i.filter(m=>m.status==="failed").map(m=>({id:m.id,name:m.name,error:m.error||"Upload failed"}))}
                  .alreadyExistedCount=${i.filter(m=>m.status==="complete"&&m.alreadyExisted).length}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:n==="uploading"?this._renderUploadOverlay(i):c.html`
                ${a?c.nothing:c.html`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${s}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((_=this.config)==null?void 0:_.sourcesLayout)??"pills"}
                        .mode=${((b=this.config)==null?void 0:b.mode)??"modal"}
                        .multi=${this._allowMulti}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?c.html`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload","View last upload")}
                          </button>`:c.nothing}`}
                ${a?this._previewFileId?this._renderPreviewLayout(i):c.html`
                        <div class="asset-count">
                          ${i.length}
                          ${i.length===1?"file":"files"} ·
                          ${he(i.reduce((m,x)=>m+(x.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${i}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${s}
                          .multi=${this._allowMulti}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:c.nothing}
              `}
        </div>

        ${a&&n!=="complete"&&n!=="uploading"?c.html`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${"idle"}
                .fileCount=${o.length}
                .totalSize=${o.reduce((m,x)=>m+(x.size||0),0)}
                .failedCount=${i.filter(m=>m.status==="failed"||m.status==="error").length}
                .completedCount=${i.filter(m=>m.status==="complete").length}
                .uploadProgress=${e.totalProgress??0}
                .showFillMetadata=${!!(((w=this.config)==null?void 0:w.showFillMetadata)??((P=this.config)==null?void 0:P.metadataConfig))}
                .requireMetadataFirst=${this._hasUnfilledRequiredMetadata}
              ></sfx-actions-bar>
            `:c.nothing}
        ${this._showUrlDialog?c.html`<sfx-url-dialog .t=${t}></sfx-url-dialog>`:c.nothing}
        ${this._showCameraDialog?c.html`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`:c.nothing}
        ${this._showScreenCastDialog?c.html`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`:c.nothing}
        ${this._activeConnector&&((L=this.config)!=null&&L.connectors)?c.html`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${xr.has(this._activeConnector)?c.html`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      `:c.html`
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
            `:c.nothing}
        ${this._bulkMetadataOpen&&this._metadataSchema?c.html`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(m=>q._MODIFIABLE_STATUSES.has(m.status))}
                .config=${((y=this.config)==null?void 0:y.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:c.nothing}
      </div>
    `}_navigateFs(e){const t=[...this._store.getState().files.values()].filter(n=>n.previewUrl||n.type.startsWith("video/")&&n.file),i=t.findIndex(n=>n.id===this._previewFileId);if(i===-1)return;const o=i+e;if(o>=0&&o<t.length){const n=t[o];this._fullscreenPreviewUrl=n.previewUrl,this._fullscreenVideoFile=n.type.startsWith("video/")&&n.file?n.file:null,this._previewFileId=n.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(e){let t=this._videoBlobUrls.get(e);return t||(t=URL.createObjectURL(e),this._videoBlobUrls.set(e,t)),t}_revokeVideoBlobUrls(){for(const e of this._videoBlobUrls.values())URL.revokeObjectURL(e);this._videoBlobUrls.clear()}},q.styles=c.css`
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
      max-width: 1100px;
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
      bottom: 24px;
      right: 24px;
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
         looked tiny; relying on max-width/max-height lets the wrap
         fill whatever vertical space the layout gives it. */
      .preview-img-wrap {
        width: auto;
        height: auto;
        max-width: min(420px, 60vw);
        max-height: min(280px, 55vh);
      }
    }
  `,q._FS_ZOOM_LEVELS=[1,2,3,4],q._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),q._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),q);H([$.property({attribute:!1})],N.prototype,"config");H([$.state()],N.prototype,"_isOpen");H([$.state()],N.prototype,"_activeConnector");H([$.state()],N.prototype,"_showUrlDialog");H([$.state()],N.prototype,"_showCameraDialog");H([$.state()],N.prototype,"_showScreenCastDialog");H([$.state()],N.prototype,"_previewFileId");H([$.state()],N.prototype,"_previewDims");H([$.state()],N.prototype,"_fileInfoOpen");H([$.state()],N.prototype,"_splitPct");H([$.state()],N.prototype,"_fullscreenPreviewUrl");H([$.state()],N.prototype,"_fullscreenVideoFile");H([$.state()],N.prototype,"_fsZoom");H([$.state()],N.prototype,"_bodyDragOver");H([$.state()],N.prototype,"_isMinimized");H([$.state()],N.prototype,"_isPillExpanded");H([$.state()],N.prototype,"_metadataSchema");H([$.state()],N.prototype,"_bulkMetadataOpen");H([$.state()],N.prototype,"_bulkMetadataInitialFieldKey");H([$.state()],N.prototype,"_isReviewing");H([$.state()],N.prototype,"_reviewFiles");H([$.state()],N.prototype,"_hasStoredReview");let La=N;exports.AuthExpiredError=$t;exports.CORE_SOURCES=Le;exports.PublicEvents=A;exports.SfxActionsBar=te;exports.SfxCameraDialog=xe;exports.SfxDropZone=va;exports.SfxFileItem=oe;exports.SfxFileList=J;exports.SfxImportDivider=Qt;exports.SfxScreenCastDialog=ce;exports.SfxSourcePills=it;exports.SfxSuccessCard=ne;exports.SfxUploader=La;exports.SfxUrlDialog=Se;exports.Store=Pr;exports.UploadEngine=Jr;exports.brandIcon=ge;exports.buildAuthHeaders=yt;exports.createStore=Ur;exports.cspStyle=X;exports.deepMergeMeta=ma;exports.exchangeSassKey=Zr;exports.formatFileSize=he;exports.getApiBase=Et;exports.getAuthUrl=Zo;exports.getDefaultFileTypeIconUrl=ai;exports.getFileTypeIconUrl=si;exports.getFilesWithMissingRequired=ha;exports.getProviderSources=ro;exports.isAssetHasMetadataValue=li;exports.isEmpty=_t;exports.isFieldRequired=di;exports.listFiles=Qo;exports.listNextPage=en;exports.logout=on;exports.resolveAuth=Qr;exports.searchProvider=tn;exports.validateField=ua;
