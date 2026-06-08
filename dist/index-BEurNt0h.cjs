"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("./sfx-uploader-CMVtzIfu.cjs"),n=require("lit"),d=require("lit/decorators.js"),lt=require("lit/directives/class-map.js");function $e(l,e,t=!1){const i=(e==null?void 0:e.language)??"en",s=l.model??[],o=l.store??{},r=s.find(f=>f.applies_to==="FILES");let a=(r==null?void 0:r.groups)??[];if(Array.isArray(e==null?void 0:e.fields)){const f=new Set(e.fields);a=a.map(m=>({...m,fields:m.fields.filter(x=>f.has(x.ckey))})).filter(m=>m.fields.length>0)}a=a.map(f=>({...f,fields:f.fields.filter(m=>!m.hide)})).filter(f=>f.fields.length>0);const c=a.flatMap(f=>f.fields),p=new Map(c.map(f=>[f.key,f])),u=o.force_filling_metadata_on_upload===!0,h=o.regional_variants_groups??[];return{groups:a,fields:c,fieldsByKey:p,forceFillingOnUpload:u,regionalVariantsGroups:h,language:i,productsEnabled:t}}const ft="https://hub.scaleflex.com/api",ee=new Map,J=new Map;async function gt(l,e,t,i){const s=ee.get(t);if(s)return s;const o=J.get(t);if(o)return o;if(i!=null&&i.rawMetadata){const a=$e(i.rawMetadata,i,i.productsEnabled===!0);return ee.set(t,a),a}const r=mt(e,t,i);J.set(t,r);try{const a=await r;return ee.set(t,a),a}finally{J.delete(t)}}async function mt(l,e,t){var u,h,f,m,x;const s=`${(t==null?void 0:t.hubApiBase)??ft}/project/${encodeURIComponent(e)}`,o=(t==null?void 0:t.hubHeaders)??l,r=await fetch(s,{headers:o});if(!r.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${r.status})`);const a=await r.json(),c=((h=(u=a.data)==null?void 0:u.project)==null?void 0:h.data)??((f=a.project)==null?void 0:f.data);if(!(c!=null&&c.metadata))throw new Error("No metadata in project response");const p=(t==null?void 0:t.productsEnabled)??((x=(m=c==null?void 0:c.airstore)==null?void 0:m.ui)==null?void 0:x.products_enabled)===!0;return $e(c.metadata,t,p)}function xt(l){var e;l?(ee.delete(l),(e=J.get(l))==null||e.catch(()=>{}),J.delete(l)):(ee.clear(),J.clear())}const bt=300,Ze=2,vt=50,et="regvar:api",yt="#ut",_t={CREATE_ONLY:"create_only",UPSERT:"upsert"},wt=l=>typeof l=="string"&&l.startsWith(yt),le=l=>`~${l.toUpperCase()}`,kt=(l,e)=>{if(!(!l||!e))return l[e]??l[le(e)]},de=(l,e,t)=>{var r,a,c;const i=(r=l.i18n)==null?void 0:r[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const s=(a=l.i18n)==null?void 0:a[le(e)];if(s)return{value:s,isFallback:!0,sourceLang:le(e)};const o=kt(l.i18n,t);if(o){const p=(c=l.i18n)!=null&&c[t]?t:le(t);return{value:o,isFallback:!0,sourceLang:p}}return{value:"",isFallback:!1,sourceLang:null}},tt=l=>(typeof l=="string"?l:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),$t=l=>{const e={},t={};for(const i of l||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},ce=l=>{const e=[],t=new Map,i=o=>o.sid||o.slug||"",s=(o,r)=>{if(typeof o=="string"){if(!o||t.has(o))return;t.set(o,e.length),e.push({slug:o});return}if(!o||typeof o!="object")return;const a=o,c=i(a);if(!c)return;const p=t.get(c),u=p!==void 0?{...e[p]}:{};a.slug&&(u.slug=a.slug),a.sid&&(u.sid=a.sid),a.uuid&&(u.uuid=a.uuid);const h={...u.i18n,...a.i18n||{}};r&&a.label&&(h[r]=a.label),Object.keys(h).length>0&&(u.i18n=h),p!==void 0?e[p]=u:(t.set(c,e.length),a.slug&&a.slug!==c&&t.set(a.slug,e.length),e.push(u))};if(Array.isArray(l))for(const o of l)s(o);else if(l&&typeof l=="object"){const o=l;for(const[r,a]of Object.entries(o))if(Array.isArray(a))for(const c of a)s(c,r)}return e},ne=l=>typeof l=="string"?[l]:!l||typeof l!="object"?[]:[l.sid,l.slug,l.uuid].filter(Boolean),ge=(l,e,t)=>{if(t){const o=new Set(e.flatMap(ne));return l.filter(r=>!ne(r).some(a=>o.has(a)))}const i=new Set(l.flatMap(ne)),s=e.filter(o=>!ne(o).some(r=>i.has(r)));return[...l,...s]},St=(l,e)=>l.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function Se(l,e,t){let i=e;switch(l.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),l.type){case"geopoint":return Ct(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(s=>typeof s=="string"?{value:s,label:s}:s):[];case"ultratags":return ce(e);case"multi-select":return i||[];default:return i??""}}function pe(l,e,t,i){var o;let s;switch(l.type){case"geopoint":{const r=e;!r||r.latitude===""||r.latitude==null||r.longitude===""||r.longitude==null?s=null:s=`(${r.latitude},${r.longitude})`;break}case"boolean":e==="true"?s=!0:e==="false"?s=!1:s=null;break;case"date":{if(!e)s=null;else{const r=e instanceof Date?e:new Date(e),a=r.getFullYear(),c=String(r.getMonth()+1).padStart(2,"0"),p=String(r.getDate()).padStart(2,"0");s=`${a}-${c}-${p}`}break}case"tags":s=Array.isArray(e)?e.map(r=>(r==null?void 0:r.label)??""):[];break;case"ultratags":s=Array.isArray(e)?e.map(r=>typeof r=="string"?r:r.slug).filter(r=>!!r):[];break;case"select-one":s=e===""?null:e;break;case"numeric":{if(e===""||e==null){s=null;break}const r=Number(e);s=Number.isFinite(r)?Math.round(r):null;break}case"decimal2":{if(e===""||e==null){s=null;break}const r=Number(e);s=Number.isFinite(r)?r:null;break}default:s=e}if(l.regional_variants_group_uuid&&l.type!=="ultratags"){const r=i??"en";return{...((o=t==null?void 0:t.meta)==null?void 0:o[l.key])??{},[r]:s}}return s}function Ct(l){if(typeof l=="string"){const e=/\(([^)]+)\)/.exec(l);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function Et(l,e){const t=l.replace(/\/$/,"");let i=null,s=null,o=!1;return{search(r,a,c){if(i&&clearTimeout(i),s&&s.abort(),o=!1,!a.trim()){c([]);return}i=setTimeout(async()=>{var p;s=new AbortController;try{const u=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(a.trim())}&meta_key=_${encodeURIComponent(r)}&limit=20`,h=await fetch(u,{headers:e,signal:s.signal});if(o)return;if(!h.ok){c([]);return}const f=await h.json();if(o)return;const m=((p=f.data)==null?void 0:p.tags)??f.tags??[];c(m.map(x=>({sid:x.sid||void 0,value:x.tag||x.value||x.label||"",label:x.tag||x.label||x.value||""})))}catch{o||c([])}},200)},cancel(){o=!0,i&&clearTimeout(i),s&&s.abort()}}}const it={base_node:null,nodes:[]};function It(l,e){const t=l.replace(/\/$/,"");let i=null,s=null,o=!1,r=null,a=null;return{fetchTaxonomies(){return a||(a=(async()=>{var p;const c=`${t}/v5/taxonomies`;try{const u=await fetch(c,{headers:e});if(!u.ok)return console.warn(`[sfx-uploader] /v5/taxonomies returned ${u.status}`),[];const h=await u.json(),f=(h==null?void 0:h.taxonomies)??((p=h==null?void 0:h.data)==null?void 0:p.taxonomies)??(h==null?void 0:h.data)??h;return Array.isArray(f)?f:(console.warn("[sfx-uploader] /v5/taxonomies returned unexpected shape",h),[])}catch(u){return console.warn("[sfx-uploader] /v5/taxonomies request failed",u),[]}})(),a.then(c=>{c.length===0&&(a=null)},()=>{a=null}),a)},async fetchNodes(c,p="",u=10){r&&r.abort(),r=new AbortController;try{const h=new URLSearchParams;p&&h.set("base",p),h.set("limit",String(u));const f=`${t}/v5/taxonomy/${encodeURIComponent(c)}/nodes?${h.toString()}`,m=await fetch(f,{headers:e,signal:r.signal});if(!m.ok)return it;const x=await m.json(),z=(x==null?void 0:x.data)??x;return{base_node:(z==null?void 0:z.base_node)??null,nodes:Array.isArray(z==null?void 0:z.nodes)?z.nodes:[]}}catch{return it}},autocomplete(c,p,u){if(i&&clearTimeout(i),s&&s.abort(),o=!1,!p.trim()){u([]);return}i=setTimeout(async()=>{var h;s=new AbortController;try{const f=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(p.trim())}&meta_key=_${encodeURIComponent(c)}`,m=await fetch(f,{headers:e,signal:s.signal});if(o)return;if(!m.ok){u([]);return}const x=await m.json();if(o)return;const z=((h=x==null?void 0:x.data)==null?void 0:h.tags)??(x==null?void 0:x.tags)??[];u(z.map(j=>({tag:String(j.tag??j.path??""),path:String(j.path??j.tag??""),suid:String(j.suid??""),uuid:String(j.uuid??""),approx_count:typeof j.approx_count=="number"?j.approx_count:void 0})))}catch{o||u([])}},200)},cancel(){o=!0,i&&clearTimeout(i),s&&s.abort(),r&&r.abort()}}}const Ce="/v5/meta/ultratags",Tt=(l,e)=>{const t=new URLSearchParams;e.meta&&t.set("meta",e.meta),e.q&&t.set("q",e.q),e.sort&&t.set("sort",e.sort),typeof e.limit=="number"&&t.set("limit",String(e.limit)),e.after&&t.set("after",e.after),e.format&&t.set("format",e.format),e.lang&&t.set("lang",e.lang);const i=t.toString();return`${l}${Ce}${i?`?${i}`:""}`},At=(l,e)=>{const t=new URLSearchParams;e.format&&t.set("format",e.format),e.lang&&t.set("lang",e.lang);const i=t.toString();return`${l}${Ce}${i?`?${i}`:""}`};function Ot(l,e){let t=null,i=null;const s=()=>{t&&(clearTimeout(t),t=null),i&&(i.abort(),i=null)};return{list(o){return s(),new Promise((r,a)=>{t=setTimeout(async()=>{t=null,i=new AbortController;try{const c=Tt(l,o),p=await fetch(c,{method:"GET",headers:e,signal:i.signal});if(!p.ok){a(new Error(`ultratags list failed: HTTP ${p.status}`));return}const u=await p.json();r(u)}catch(c){a(c)}},bt)})},async getBySids(o){if(!o.sids||o.sids.length===0)return{items:[],stats:{count:0,total_count:0}};const r=At(l,o),a=await fetch(r,{method:"QUERY",headers:{...e,"Content-Type":"application/json"},body:JSON.stringify({ultratags_sids:o.sids})});if(!a.ok)throw new Error(`ultratags getBySids failed: HTTP ${a.status}`);return await a.json()},async create(o){const r=`${l}${Ce}`,a=await fetch(r,{method:"POST",headers:{...e,"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw new Error(`ultratags create failed: HTTP ${a.status}`);return await a.json()},cancel(){s()}}}var Rt=Object.defineProperty,q=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Rt(e,t,s),s};const Oe=class Oe extends n.LitElement{constructor(){super(...arguments),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.disabled=!1,this._collapsed=new Set}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_renderGroup(e){const t=!this._collapsed.has(e.uuid);return n.html`
      <div class="group">
        <button class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${t}>
          <span>${e.name}</span>
          <svg class="chevron ${t?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${t?n.html`
              <div class="group-content">
                ${e.fields.map(i=>{var s,o;return n.html`
                    <sfx-metadata-field
                      .field=${i}
                      .value=${this.meta[i.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((s=this.taxonodes)==null?void 0:s[i.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${((o=this.schema)==null?void 0:o.regionalVariantsGroups)??[]}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:n.nothing}
      </div>
    `}render(){return!this.schema||this.schema.groups.length===0?n.html`<div class="empty">No metadata fields configured</div>`:n.html`
      ${this.schema.groups.map(e=>this._renderGroup(e))}
    `}};Oe.styles=n.css`
    :host { display: block; }


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
  `;let S=Oe;q([d.property({attribute:!1})],S.prototype,"schema");q([d.property({attribute:!1})],S.prototype,"meta");q([d.property({attribute:!1})],S.prototype,"config");q([d.property({attribute:!1})],S.prototype,"autocomplete");q([d.property({attribute:!1})],S.prototype,"taxonomyService");q([d.property({attribute:!1})],S.prototype,"ultratags");q([d.property({attribute:!1})],S.prototype,"defaultLanguage");q([d.property({attribute:!1})],S.prototype,"taxonodes");q([d.property({type:Boolean})],S.prototype,"disabled");q([d.state()],S.prototype,"_collapsed");customElements.define("sfx-metadata-form",S);const se=n.css`
  input, textarea, select {
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
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input::placeholder, textarea::placeholder {
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    font-size: 14px;
    color: var(--sfx-up-text-muted, #94a3b8);
    opacity: 1;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
  }
  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,re=n.css`
  :host { display: block; position: relative; }

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
    transition: color 0.15s, background 0.15s;
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

  .search {
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
  .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
  .option.selected {
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .empty {
    padding: 8px 10px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
`,Ee=n.css`
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
  .chip-x:hover { color: var(--sfx-up-error, #dc2626); }
`;n.css`
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
    transition: background 0.15s ease, color 0.15s ease;
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
  .panel-footer .spacer { flex: 1; }

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
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;const Lt=n.css`
  :host { display: block; }

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
`;var Dt=Object.defineProperty,T=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Dt(e,t,s),s};const Re=class Re extends n.LitElement{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){return g.isFieldRequired(this.field,this.config??void 0)}_onFieldBlur(e){const{key:t,value:i}=e.detail,s=g.validateField(this.field,i,this.config??void 0);if(s){this._error=s;return}this._error=null;const o={meta:{[this.field.key]:this.value}},r=g.resolveFieldRegionalKey(this.field,this.config),a=pe(this.field,i,o,r);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){var s;const i=this.disabled;if(g.isUnsupportedField(e))return n.html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return n.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return n.html`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return n.html`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return n.html`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return n.html`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"ultratags":return n.html`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${(s=this.config)==null?void 0:s.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}></sfx-meta-ultratags-field>`;case"taxonomy-node":return n.html`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${i}></sfx-meta-taxonomy-node-field>`;case"boolean":return n.html`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return n.html`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return n.html`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return n.html`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return n.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}render(){var a,c;const e=this.field;if(!e)return n.nothing;const t=g.resolveFieldRegionalKey(e,this.config),i=Se(e,this.value,t),s=g.getFieldRegionalVariantHint(e,this.regionalVariantsGroups,(a=this.config)==null?void 0:a.regionalFilters,(c=this.config)==null?void 0:c.language),r=e.type==="textarea"?"field-row field-row--top":"field-row";return n.html`
      <div class=${r} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?n.html`<span class="field-required" aria-hidden="true">*</span>`:n.nothing}
        </div>
        <div class="field-content">
          ${this._renderField(e,i)}
          ${s?n.html`<div class="field-regional-hint" title=${s}>${s}</div>`:n.nothing}
          ${this._error?n.html`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:n.nothing}
        </div>
      </div>
    `}};Re.styles=[Lt];let y=Re;T([d.property({attribute:!1})],y.prototype,"field");T([d.property({attribute:!1})],y.prototype,"value");T([d.property({attribute:!1})],y.prototype,"config");T([d.property({attribute:!1})],y.prototype,"autocomplete");T([d.property({attribute:!1})],y.prototype,"taxonomyService");T([d.property({attribute:!1})],y.prototype,"taxonomyEntry");T([d.property({attribute:!1})],y.prototype,"ultratags");T([d.property({attribute:!1})],y.prototype,"defaultLanguage");T([d.property({attribute:!1})],y.prototype,"ultratagsRestrictToItems");T([d.property({attribute:!1})],y.prototype,"regionalVariantsGroups");T([d.property({type:Boolean})],y.prototype,"disabled");T([d.state()],y.prototype,"_error");customElements.define("sfx-metadata-field",y);var qt=Object.defineProperty,Ie=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&qt(e,t,s),s};class $ extends n.LitElement{constructor(){super(...arguments),this.value="",this.disabled=!1}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}Ie([d.property({attribute:!1})],$.prototype,"field");Ie([d.property({attribute:!1})],$.prototype,"value");Ie([d.property({type:Boolean})],$.prototype,"disabled");const Le=class Le extends ${_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return n.html`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Le.styles=[se];let me=Le;customElements.define("sfx-meta-text-field",me);const De=class De extends ${firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return n.html`
      <textarea
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};De.styles=[se,n.css`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let xe=De;customElements.define("sfx-meta-textarea-field",xe);var Ft=Object.defineProperty,Te=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Ft(e,t,s),s};const qe=class qe extends ${constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,i)=>t.label.localeCompare(i.label))}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Select ${e.toLowerCase()}`:"Select an option";return n.html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?n.html`<span class="trigger-value">${this._selectedLabel}</span>`:n.html`<span class="placeholder">${((s=this.field)==null?void 0:s.placeholder)||t}</span>`}
        ${this._selectedLabel&&!this.disabled?n.html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),this._clear(o))}}>&times;</span>
        `:n.nothing}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?n.html`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length?this._filtered.map((o,r)=>n.html`
                <div class="option ${o.value===this.value?"selected":""} ${r===this._activeIndex?"active":""}"
                  role="option" aria-selected=${o.value===this.value}
                  @mousedown=${a=>{a.preventDefault(),this._onSelect(o)}}
                  @mouseenter=${()=>{this._activeIndex=r}}>
                  ${o.label}
                </div>`):n.html`<div class="empty">No options</div>`}
        </div>
      `:n.nothing}
    `}};qe.styles=[re];let Q=qe;Te([d.state()],Q.prototype,"_open");Te([d.state()],Q.prototype,"_search");Te([d.state()],Q.prototype,"_activeIndex");customElements.define("sfx-meta-select-field",Q);var zt=Object.defineProperty,Ae=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&zt(e,t,s),s};const Fe=class Fe extends ${constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,i)=>t.label.localeCompare(i.label))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(s=>s!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t)}_selectAll(){const e=this._options.map(t=>t.value);this.value=e,this._emit("field-change",e)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}render(){var s,o;const e=this._selected,t=((s=this.field)==null?void 0:s.title)??"",i=t?`Select ${t.toLowerCase()}`:"Select an option";return n.html`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length?e.map(r=>n.html`
              <span class="chip">
                ${this._labelFor(r)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(r)}" @click=${a=>{a.stopPropagation(),this._remove(r)}}>&times;</button>
              </span>`):n.html`<span class="placeholder">${((o=this.field)==null?void 0:o.placeholder)||i}</span>`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open?n.html`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length?this._filtered.map((r,a)=>n.html`
                  <div class="option ${a===this._activeIndex?"active":""}" role="option" aria-selected=${e.includes(r.value)}
                    @mousedown=${c=>{c.preventDefault(),this._toggle(r)}}
                    @mouseenter=${()=>{this._activeIndex=a}}>
                    <span class="check ${e.includes(r.value)?"checked":""}">
                      ${e.includes(r.value)?"✓":""}
                    </span>
                    ${r.label}
                  </div>`):n.html`<div class="empty">No options</div>`}
          </div>
          ${this._options.length>0?n.html`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${r=>{r.preventDefault(),this._selectAll()}}>Select all</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${r=>{r.preventDefault(),this._clearAll()}}>Clear all</button>
            </div>
          `:n.nothing}
        </div>
      `:n.nothing}
    `}};Fe.styles=[re,Ee,n.css`
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
      .option { display: flex; align-items: center; gap: 8px; }
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
    `];let W=Fe;Ae([d.state()],W.prototype,"_open");Ae([d.state()],W.prototype,"_search");Ae([d.state()],W.prototype,"_activeIndex");customElements.define("sfx-meta-multi-select-field",W);function U(l,e){var t,i;return((t=l.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function dt(l){return l.trim().replace(/\s+/g," ")}function Pt(l){return dt(l).replace(/\s/g,"-")}function ae(l){return{label:dt(l),value:Pt(l)}}var Kt=Object.defineProperty,X=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Kt(e,t,s),s};const ze=class ze extends ${constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,s,o;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!((i=this.field)!=null&&i.ckey)){this._results=[],this._loading=!1,(s=this.autocomplete)==null||s.cancel();return}this._loading=!0,(o=this.autocomplete)==null||o.search(this.field.ckey,t,r=>{this._results=r,this._loading=!1})}_addTag(e){if(this._tags.some(i=>U(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!U(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(ae(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(ae(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var o;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((o=this.field)==null?void 0:o.possible_values)??[]).map(r=>({value:r.api_value||r.internal_unique_value,label:r.label})).filter(r=>!t.some(a=>U(a,r))).filter(r=>!e||r.label.toLowerCase().includes(e)),s=this._results.filter(r=>!t.some(a=>U(a,r))&&!i.some(a=>U(a,r)));return[...i,...s]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=ae(e);return!this._tags.some(i=>U(i,t))&&!this._suggestions.some(i=>U(i,t))}render(){var s,o;const e=this._tags,t=this._suggestions,i=t.length;return n.html`
      <div class="container" @click=${()=>{var r;return(r=this.renderRoot.querySelector(".input"))==null?void 0:r.focus()}}>
        ${e.map(r=>n.html`
          <span class="chip">
            ${r.label}
            <button class="chip-x" aria-label="Remove ${r.label}" @click=${a=>{a.stopPropagation(),this._removeTag(r)}}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((s=this.field)==null?void 0:s.title)??"Tags"}
          placeholder=${e.length?"":((o=this.field)==null?void 0:o.placeholder)||"Add tags"}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?n.html`
        <div class="dropdown" role="listbox">
          ${this._loading?n.html`<div class="loading">Loading</div>`:n.nothing}
          ${t.map((r,a)=>n.html`
            <div class="option ${a===this._activeIndex?"active":""}" role="option"
              @mousedown=${c=>{c.preventDefault(),this._addTag(r)}}
              @mouseenter=${()=>{this._activeIndex=a}}>
              ${r.label}
            </div>`)}
          ${this._canCreate?n.html`
            <div class="option create ${i===this._activeIndex?"active":""}"
              @mousedown=${r=>{r.preventDefault(),this._addTag(ae(this._query))}}
              @mouseenter=${()=>{this._activeIndex=i}}>
              Create '${this._query.trim()}'
            </div>`:n.nothing}
          ${!this._loading&&!t.length&&!this._canCreate?n.html`<div class="empty">No results</div>`:n.nothing}
        </div>
      `:n.nothing}
    `}};ze.styles=[Ee,n.css`
      :host { display: block; position: relative; }

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
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }

      .loading, .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let K=ze;X([d.property({attribute:!1})],K.prototype,"autocomplete");X([d.state()],K.prototype,"_query");X([d.state()],K.prototype,"_results");X([d.state()],K.prototype,"_loading");X([d.state()],K.prototype,"_dropdownOpen");X([d.state()],K.prototype,"_activeIndex");customElements.define("sfx-meta-tags-field",K);var Bt=Object.defineProperty,ct=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Bt(e,t,s),s};const V=[{label:"True",value:"true"},{label:"False",value:"false"}],Pe=class Pe extends ${constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=V.find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(V.findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,V.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=V.length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<V.length&&(e.preventDefault(),this._onSelect(V[this._activeIndex],!0));break}}render(){var s,o;const e=this.value==null?"":String(this.value),t=((s=this.field)==null?void 0:s.title)??"",i=t?`Select ${t.toLowerCase()}`:"Select an option";return n.html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?n.html`<span class="trigger-value">${this._currentLabel}</span>`:n.html`<span class="placeholder">${((o=this.field)==null?void 0:o.placeholder)||i}</span>`}
        ${this._currentLabel&&!this.disabled?n.html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}>&times;</span>
        `:n.nothing}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?n.html`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${V.map((r,a)=>n.html`
            <div class="option ${r.value===e?"selected":""} ${a===this._activeIndex?"active":""}"
              role="option" aria-selected=${r.value===e}
              @mousedown=${c=>{c.preventDefault(),this._onSelect(r)}}
              @mouseenter=${()=>{this._activeIndex=a}}>
              ${r.label}
            </div>`)}
        </div>
      `:n.nothing}
    `}};Pe.styles=[re];let te=Pe;ct([d.state()],te.prototype,"_open");ct([d.state()],te.prototype,"_activeIndex");customElements.define("sfx-meta-boolean-field",te);const Ke=class Ke extends ${get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return n.html`
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
    `}};Ke.styles=[se];let be=Ke;customElements.define("sfx-meta-number-field",be);const Be=class Be extends ${get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return n.html`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?n.html`<span class="date-placeholder">Pick a date</span>`:n.nothing}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};Be.styles=[se,n.css`
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
    `];let ve=Be;customElements.define("sfx-meta-date-field",ve);const Ne=class Ne extends ${get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,s={...this._geo,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return n.html`
      <div class="grid">
        <div>
          <label>Latitude</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("latitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>Longitude</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("longitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `}};Ne.styles=[se,n.css`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 4px;
      }
    `];let ye=Ne;customElements.define("sfx-meta-geo-point-field",ye);var Nt=Object.defineProperty,R=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Nt(e,t,s),s};const Y={uuid:"__root__",name:"",ltree:""},je=class je extends ${constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[Y],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var s,o,r;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((s=this.field)==null?void 0:s.ckey)??((o=this.field)==null?void 0:o.key)}" model:`,(r=this.field)==null?void 0:r.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[Y];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[Y];const i=t.slice(0,-1),o=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),r=[Y];let a="";for(let c=0;c<i.length;c++)a=a?`${a}.${i[c]}`:i[c],r.push({uuid:`__seed_${a}`,name:o[c]??i[c],ltree:a});return r}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,s=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=s.nodes,this._loading=!1;const o=this._selectedScalar,r=o?this._currentNodes.findIndex(a=>a.uuid===o||a.slug===o):-1;this._activeIndex=r,r>=0&&this._scrollActive()}_onSearchInput(e){var s;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(s=this.taxonomyService)==null||s.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,o=>{i===this._searchSeq&&(this._searchResults=o,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(s=>s.uuid!==Y.uuid).map(s=>s.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const o=this._currentNodes[this._activeIndex];o.children.count_direct>0&&(e.preventDefault(),this._drillInto(o))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const o=this._searchResults[this._activeIndex];o&&this._selectAutocomplete(o)}else{const o=this._currentNodes[this._activeIndex];o&&this._selectTreeNode(o)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?n.nothing:n.html`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const s=i===e.length-1,o=t.uuid===Y.uuid?"Root":t.name;return n.html`
            ${i>0?n.html`<span class="crumb-sep">›</span>`:n.nothing}
            <button class="crumb ${s?"current":""}" type="button"
              ?disabled=${s}
              @click=${()=>!s&&this._jumpToCrumb(i)}>
              ${o}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return n.html`<div class="empty">Loading…</div>`;if(this._taxonomyResolutionFailed)return n.html`<div class="empty">Taxonomy not found</div>`;if(this._currentNodes.length===0)return n.html`<div class="empty">No nodes</div>`;const e=this._selectedScalar;return n.html`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const s=t.children.count_direct>0,o=!!e&&(e===t.uuid||e===t.slug);return n.html`
            <div class="tree-row ${i===this._activeIndex?"active":""} ${o?"selected":""}"
              role="option" aria-selected=${o}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>s?this._drillInto(t):this._selectTreeNode(t)}>
              <span class="tree-radio ${o?"checked":""}" role="button"
                aria-label="Select ${t.name}"
                @click=${r=>{r.stopPropagation(),this._selectTreeNode(t)}}></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${s?n.html`<span class="tree-count" aria-hidden="true">(${t.children.count_direct})</span>`:n.nothing}
              <span class="tree-chevron ${s?"":"hidden"}" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
          `})}
      </div>
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?n.html`<div class="empty">Loading…</div>`:this._searchResults.length===0?n.html`<div class="empty">No results</div>`:n.html`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>n.html`
          <div class="ac-row ${t===this._activeIndex?"active":""}"
            role="option"
            @mouseenter=${()=>{this._activeIndex=t}}
            @click=${()=>this._selectAutocomplete(e)}>
            <span class="ac-tag">${e.tag}</span>
            ${e.path&&e.path!==e.tag?n.html`<span class="ac-path">${e.path}</span>`:n.nothing}
          </div>
        `)}
      </div>
    `}render(){var o,r;if(!this._taxonomySuid)return n.html`<div class="misconfigured" role="alert">Field is missing taxonomy config</div>`;const e=((o=this.field)==null?void 0:o.title)??"",t=e?`Select ${e.toLowerCase()}`:"Select a node",i=this._displayPath,s=!!i;return n.html`
      <button class="trigger" type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${a=>{!this._open&&(a.key==="ArrowDown"||a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this._openDropdown())}}>
        ${s?n.html`<span class="trigger-value" title=${i}>${i}</span>`:n.html`<span class="placeholder">${((r=this.field)==null?void 0:r.placeholder)||t}</span>`}
        ${s&&!this.disabled?n.html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this._clear(a))}}>&times;</span>
        `:n.nothing}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?n.html`
        <div class="dropdown taxo" @keydown=${this._onKeydown}>
          <input class="search" type="text"
            aria-label="Search taxonomy"
            placeholder="Search…"
            .value=${this._query}
            @input=${this._onSearchInput} />
          ${this._isSearchMode?n.nothing:this._renderBreadcrumb()}
          ${this._isSearchMode?this._renderSearch():this._renderTree()}
        </div>
      `:n.nothing}
    `}};je.styles=[re,n.css`
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
      .crumb:hover { background: var(--sfx-up-hover, #f1f5f9); }
      .crumb.current {
        color: var(--sfx-up-text, #1e293b);
        font-weight: 500;
        cursor: default;
      }
      .crumb.current:hover { background: none; }
      .crumb-sep { color: var(--sfx-up-text-muted, #94a3b8); user-select: none; }

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
      .tree-row.active { background: var(--sfx-up-hover, #f1f5f9); }
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
      .tree-chevron svg { width: 100%; height: 100%; display: block; }
      .tree-chevron.hidden { visibility: hidden; }

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
      .ac-row.active { background: var(--sfx-up-hover, #f1f5f9); }
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
    `];let w=je;R([d.property({attribute:!1})],w.prototype,"taxonomyService");R([d.property({attribute:!1})],w.prototype,"entry");R([d.state()],w.prototype,"_open");R([d.state()],w.prototype,"_query");R([d.state()],w.prototype,"_drillStack");R([d.state()],w.prototype,"_currentNodes");R([d.state()],w.prototype,"_searchResults");R([d.state()],w.prototype,"_loading");R([d.state()],w.prototype,"_activeIndex");R([d.state()],w.prototype,"_resolvedTaxonomyUuid");R([d.state()],w.prototype,"_taxonomyResolutionFailed");customElements.define("sfx-meta-taxonomy-node-field",w);var jt=Object.defineProperty,N=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&jt(e,t,s),s};const Mt=(l,e)=>!!(e.uuid&&l.uuid===e.uuid||e.sid&&l.sid===e.sid||e.slug&&l.slug===e.slug),Me=class Me extends ${constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set}get _items(){return Array.isArray(this.value)?this.value.map(e=>typeof e=="string"?wt(e)?{sid:e}:{slug:e}:e):[]}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichBySids()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichBySids()}async _maybeEnrichBySids(){const e=this.ultratags;if(!e)return;const t=this._items;if(t.length===0)return;const i=[];for(const s of t)s.sid&&!s.i18n&&!this._enrichmentAttempted.has(s.sid)&&i.push(s.sid);if(i.length!==0){for(const s of i)this._enrichmentAttempted.add(s);try{const s=await e.getBySids({sids:i,format:et}),o=$t(s.items||[]),r=St(t,o);this.value=r}catch{}}}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return de(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=o=>!!o.uuid&&e.has(o.uuid)||!!o.sid&&e.has(o.sid)||e.has(o.slug),s=(this._isRestricted?this._restrictedEntries:this._results).filter(o=>!t(o)).map(o=>({entry:o,label:de(o,this._currentLang,this._defaultLang).value||o.slug}));if(this._isRestricted){const o=this._query.trim().toLowerCase();return o?s.filter(r=>r.label.toLowerCase().includes(o)):s}return s}get _isSearching(){return this._query.trim().length>=Ze}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=tt(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(s=>s.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var o,r;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((o=this.field)!=null&&o.key)){this._results=[],this._loading=!1,(r=this.ultratags)==null||r.cancel();return}const i=this.ultratags;if(!i)return;const s=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:s,limit:vt,format:et}).then(a=>{this._query.trim().toLowerCase()===s&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===s&&(this._results=[],this._loading=!1)})}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".input"))==null||s.focus()})}async _createFromQuery(){var o,r;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((o=this.field)!=null&&o.key))return;const i=tt(e);if(!i)return;const s=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:_t.UPSERT,items:[{slug:i,i18n:{[s]:e}}]}),c=(r=a==null?void 0:a.output)==null?void 0:r[0],p={slug:(c==null?void 0:c.slug)||i,sid:c==null?void 0:c.sid,uuid:c==null?void 0:c.uuid,i18n:(c==null?void 0:c.i18n)||{[s]:e}};if(this._entryAlreadySelected({uuid:p.uuid||"",sid:p.sid,slug:p.slug||i}))return;const u=[...this._items,p];this.value=u,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",u),this.updateComplete.then(()=>{var h;(h=this.renderRoot.querySelector(".input"))==null||h.focus()})}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!Mt(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var r,a;const e=this._items,t=this._dropdownOptions,i=t.length,s=this._query.trim(),o=((r=this.field)==null?void 0:r.placeholder)||(this._isRestricted?"Search tags to remove":"Add custom tags");return n.html`
      <div class="container" @click=${()=>{var c;return(c=this.renderRoot.querySelector(".input"))==null?void 0:c.focus()}}>
        ${e.map(c=>{const p=this._labelForItem(c);return c.uuid||c.sid||c.slug,n.html`
            <span class="chip" title=${p}>
              ${p}
              <button class="chip-x" aria-label="Remove ${p}"
                @click=${u=>{u.stopPropagation(),this._removeItem(c)}}>&times;</button>
            </span>`})}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((a=this.field)==null?void 0:a.title)??"Custom tags"}
          placeholder=${e.length?"":o}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen?n.html`
        <div class="dropdown" role="listbox">
          ${!this._isRestricted&&!this._isSearching?n.html`<div class="hint">Type at least ${Ze} characters to search.</div>`:n.nothing}
          ${!this._isRestricted&&this._isSearching&&this._loading?n.html`<div class="loading">Loading…</div>`:n.nothing}
          ${this._isRestricted||this._isSearching&&!this._loading?t.map((c,p)=>n.html`
                <div class="option ${p===this._activeIndex?"active":""}" role="option"
                  @mousedown=${u=>{u.preventDefault(),this._addEntry(c.entry)}}
                  @mouseenter=${()=>{this._activeIndex=p}}>
                  ${c.label}
                </div>`):n.nothing}
          ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?n.html`<div class="empty">No results found</div>`:n.nothing}
          ${this._canCreate?n.html`
              <div class="option create ${i===this._activeIndex?"active":""}"
                @mousedown=${c=>{c.preventDefault(),this._createFromQuery()}}
                @mouseenter=${()=>{this._activeIndex=i}}>
                Create '${s}'
              </div>`:n.nothing}
        </div>
      `:n.nothing}
    `}};Me.styles=[Ee,n.css`
      :host { display: block; position: relative; }

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
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
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

      .loading, .empty, .hint {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `];let I=Me;N([d.property({attribute:!1})],I.prototype,"ultratags");N([d.property({attribute:!1})],I.prototype,"language");N([d.property({attribute:!1})],I.prototype,"defaultLanguage");N([d.property({attribute:!1})],I.prototype,"restrictToItems");N([d.state()],I.prototype,"_query");N([d.state()],I.prototype,"_results");N([d.state()],I.prototype,"_loading");N([d.state()],I.prototype,"_dropdownOpen");N([d.state()],I.prototype,"_activeIndex");customElements.define("sfx-meta-ultratags-field",I);const ie="This field is not supported during upload. You can edit it later in the asset library.",pt=n.html`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${n.svg`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,Ue=class Ue extends n.LitElement{render(){return n.html`
      <div
        class="unsupported"
        title=${ie}
        aria-label=${ie}
        aria-disabled="true"
        role="note"
      >
        ${pt}
        <span class="unsupported-text" aria-hidden="true">Not editable during upload</span>
      </div>
    `}};Ue.styles=n.css`
    :host { display: block; }
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
  `;let _e=Ue;customElements.define("sfx-meta-unsupported-field",_e);var Ut=Object.defineProperty,F=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Ut(e,t,s),s};const Ve=class Ve extends n.LitElement{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(g.isUnsupportedField(e))return n.html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return n.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return n.html`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return n.html`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return n.html`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return n.html`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"ultratags":return n.html`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}></sfx-meta-ultratags-field>`;case"taxonomy-node":return n.html`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${i}></sfx-meta-taxonomy-node-field>`;case"boolean":return n.html`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return n.html`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return n.html`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return n.html`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return n.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}};Ve.styles=n.css`
    :host { display: block; }
  `;let C=Ve;F([d.property({attribute:!1})],C.prototype,"field");F([d.property({attribute:!1})],C.prototype,"value");F([d.property({attribute:!1})],C.prototype,"autocomplete");F([d.property({attribute:!1})],C.prototype,"taxonomyService");F([d.property({attribute:!1})],C.prototype,"taxonomyEntry");F([d.property({attribute:!1})],C.prototype,"ultratags");F([d.property({attribute:!1})],C.prototype,"language");F([d.property({attribute:!1})],C.prototype,"defaultLanguage");F([d.property({attribute:!1})],C.prototype,"ultratagsRestrictToItems");F([d.property({type:Boolean})],C.prototype,"disabled");customElements.define("sfx-metadata-field-edit",C);var Vt=Object.defineProperty,oe=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Vt(e,t,s),s};const Ge=class Ge extends n.LitElement{constructor(){super(...arguments),this.taxonomyEntry=null}_formatValue(){var i,s,o,r;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(s=this.field.possible_values)==null?void 0:s.find(c=>c.internal_unique_value===e||c.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var p;const c=(p=this.field.possible_values)==null?void 0:p.find(u=>u.internal_unique_value===a||u.api_value===a);return(c==null?void 0:c.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",c=this.defaultLanguage||a;return e.map(p=>typeof p=="string"?p:de({i18n:p.i18n,slug:p.slug||""},a,c).value||p.slug||p.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(o=this.taxonomyEntry)!=null&&o.path?this.taxonomyEntry.path:(r=this.taxonomyEntry)!=null&&r.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&g.isUnsupportedField(this.field))return n.html`
        <div class="value empty" title=${ie}>
          Not editable during upload
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?n.html`
        <div class="value">
          <a class="link" href=${e} target="_blank" rel="noopener noreferrer"
            @click=${s=>s.stopPropagation()}
          >${e}</a>
        </div>
      `:n.html`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Ge.styles=n.css`
    :host { display: block; }
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
  `;let M=Ge;oe([d.property({attribute:!1})],M.prototype,"field");oe([d.property({attribute:!1})],M.prototype,"value");oe([d.property({attribute:!1})],M.prototype,"taxonomyEntry");oe([d.property({attribute:!1})],M.prototype,"language");oe([d.property({attribute:!1})],M.prototype,"defaultLanguage");customElements.define("sfx-metadata-field-view",M);var Gt=Object.defineProperty,ue=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&Gt(e,t,s),s};const He=class He extends n.LitElement{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const s of t.variants)e.push({groupUuid:t.uuid,value:s.api_value,label:s.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(){var i;const e=this._filteredGroups;if(e.length===0)return"Regional settings";const t=[];for(const s of e){const o=this.selectedFilters[s.uuid]??((i=s.variants[0])==null?void 0:i.api_value),r=s.variants.find(a=>a.api_value===o);r&&t.push(e.length===1?r.label:`${s.label}: ${r.label}`)}return t.length?t.join(", "):"Regional settings"}render(){if(this._filteredGroups.length===0)return n.nothing;const t=this._options,i=this._triggerSummary();return n.html`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`Regional settings — ${i}`}
        title=${i}
        @click=${this._toggle}
        @keydown=${this._onKeydown}
      >
        <span class="trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </span>
        <span class="trigger-label">Regional settings</span>
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      ${this._open?n.html`
            <div class="dropdown" role="listbox" aria-label="Regional settings">
              ${t.map((s,o)=>this._renderOption(s,o,s.value===this.selectedFilters[s.groupUuid]))}
            </div>
          `:n.nothing}
    `}_renderOption(e,t,i){const s=this._activeIndex===t;return n.html`
      ${e.isGroupStart?n.html`<div class="group-header">${e.groupLabel}</div>`:n.nothing}
      <div
        class="option ${i?"selected":""} ${s?"active":""}"
        role="option"
        aria-selected=${i}
        @mouseenter=${()=>{this._activeIndex=t}}
        @click=${()=>this._onSelect(e)}
      >
        <span class="option-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>${e.label}</span>
      </div>
    `}};He.styles=[re,n.css`
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
        transition: background 0.15s, color 0.15s;
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
      .trigger-chevron.open { transform: rotate(180deg); }

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
        .trigger { height: 28px; padding: 0 6px; gap: 4px; font-size: 12px; }
        .trigger-icon { width: 16px; height: 16px; }
      }
      @media (max-width: 480px) {
        .trigger { padding: 0 6px; }
        .trigger-label { display: none; }
        .trigger-chevron { display: none; }
      }
    `];let G=He;ue([d.property({attribute:!1})],G.prototype,"groups");ue([d.property({attribute:!1})],G.prototype,"selectedFilters");ue([d.state()],G.prototype,"_open");ue([d.state()],G.prototype,"_activeIndex");customElements.define("sfx-regional-settings",G);const he=new Set(["multi-select","tags","ultratags"]),fe=new Set(["text","textarea","attachment-uri"]);function Ht(l){return g.isUnsupportedFieldType(l)?[]:he.has(l)?[{key:"SET",label:"Set"},{key:"ADD",label:"Add to"},{key:"DELETE",label:"Remove from"}]:fe.has(l)?[{key:"SET",label:"Set"},{key:"ADD",label:"Append"},{key:"DELETE",label:"Remove"}]:[{key:"SET",label:"Set"},{key:"DELETE",label:"Clear"}]}function we(l,e){return l==="DELETE"?he.has(e)||fe.has(e):!0}function Yt(l,e,t,i){const s=he.has(i),o=fe.has(i);switch(l){case"SET":return t;case"ADD":{if(s){const r=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return r;if(i==="ultratags")return ge(r,a,!1);if(i==="tags"){const u=new Set(r.map(f=>f)),h=[...r];for(const f of a){const m=typeof f=="string"?f:String(f);u.has(m)||(u.add(m),h.push(m))}return h}const c=new Set(r.map(u=>JSON.stringify(u))),p=[...r];for(const u of a){const h=JSON.stringify(u);c.has(h)||(c.add(h),p.push(u))}return p}if(o){const r=typeof t=="string"?t:"";if(!r)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${r}`:r}return t}case"DELETE":{if(s){const r=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return r;if(i==="ultratags")return ge(r,a,!0);if(i==="tags"){const p=new Set(a.map(u=>typeof u=="string"?u:String(u)));return r.filter(u=>!p.has(typeof u=="string"?u:String(u)))}const c=new Set(a.map(p=>JSON.stringify(p)));return r.filter(p=>!c.has(JSON.stringify(p)))}if(o){const r=typeof t=="string"?t:"";return r?(typeof e=="string"?e:"").replaceAll(r,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function ut(l,e,t,i,s){const o=s??"en",r=!!l.regional_variants_group_uuid,a={meta:{[l.key]:e}},c=pe(l,t,a,s),p=m=>r&&m!==null&&typeof m=="object"&&!Array.isArray(m),u=p(e)?e[o]:e,h=p(c)?c[o]:c,f=Yt(i,u,h,l.type);return r?{...p(e)?e:{},[o]:f}:f}const ht=n.css`
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
    transition: background-color 0.12s ease, border-color 0.12s ease;
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
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:indeterminate::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Jt=n.css`
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
    max-width: calc(100vw - 40px);
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
    transition: background 0.15s ease, color 0.15s ease;
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
  .fm-th-check { width: 20px; flex-shrink: 0; }
  .fm-th-name {
    width: 244px; /* row-thumb (52) + row gap (12) + row-name (180) */
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover { color: var(--sfx-up-text-secondary, #64748b); }
  .fm-th-size { width: 70px; flex-shrink: 0; text-align: left; }
  .fm-th-field { flex: 1; min-width: 0; }

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
  .fm-footer .spacer { flex: 1; }

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
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
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
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
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

  ${ht}
`,Qt=n.css`
  :host {
    display: block;
    width: 260px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 12px 0;
    font-family: var(--sfx-up-font, inherit);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
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
    transition: background-color 0.12s ease, color 0.12s ease;
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
`,Wt=n.css`
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
    transition: border-color 0.12s ease, box-shadow 0.12s ease;
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
`,Xt=n.css`
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

  .row-check { width: 20px; flex-shrink: 0; }

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

  ${ht}
`,Zt=n.css`
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
`,ei=n.css`
  :host {
    display: block;
  }
`;var ti=Object.defineProperty,v=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&ti(e,t,s),s};const Ye=class Ye extends n.LitElement{constructor(){super(...arguments),this.files=[],this.config=null,this.initialFieldKey=null,this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()},this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,c;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const s=i[0],o=i[i.length-1],r=(c=this.shadowRoot)==null?void 0:c.activeElement;e.shiftKey&&r===s?(e.preventDefault(),o.focus()):!e.shiftKey&&r===o&&(e.preventDefault(),s.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,s=this._activeField;g.isEmpty(i)&&(!s||we(t,s.type))?this._pendingOp=null:this._pendingOp={operation:t,value:i}},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e)},this._onBulkApply=e=>{const t=this._activeField;if(!t)return;const{operation:i,value:s,taxonomyEntry:o}=e.detail,r=g.resolveFieldRegionalKey(t,this.config),a=[];for(const c of this._selected){const p=this._staged.get(c),u=p!=null&&p.has(t.key)?p.get(t.key):this._originalValue(c,t.key)??null,h=ut(t,u,s,i,r);a.push([c,t.key,h])}this._setStagedBulk(a),t.type==="taxonomy-node"&&o!==void 0&&this._setStagedTaxonodeBulk(this._selected,t.key,o)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:s}=e.detail;this._setStagedTaxonodeSingle(t,i,s)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||!await this._confirmDiscardPending())return;const e=[],t=[];for(const[s,o]of this._staged){if(!this._originalFiles.get(s))continue;const a={},c={};for(const[p,u]of o){const h=this._originalValue(s,p);if(JSON.stringify(u)!==JSON.stringify(h))if(g.isProductFieldKey(p)){const f=g.productKeyOf(p);if(!f)continue;const m=u===""||u==null;f==="position"?c.position=m?void 0:Number(u):c.ref=m?void 0:String(u)}else a[p]=u}Object.keys(a).length>0&&e.push({fileId:s,meta:a}),Object.keys(c).length>0&&t.push({fileId:s,product:c})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0}));const i=[];for(const[s,o]of this._stagedTaxonodes){const r=this._originalFiles.get(s);if(!r)continue;const a=r.taxonodes??{},c={};for(const[p,u]of o){const h=a[p]??null;JSON.stringify(u??null)!==JSON.stringify(h??null)&&(c[p]=u??null)}Object.keys(c).length>0&&i.push({fileId:s,taxonodes:c})}i.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:i},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null}_initStaged(){var a,c;const e=new Map,t=new Map,i=new Set,s=new Map,o=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const p of this.files){const u=new Map;if(p.meta)for(const[h,f]of Object.entries(p.meta))u.set(h,f);if(o){const h=p.product;h.ref!==void 0&&u.set(g.PRODUCT_REF_FIELD_KEY,h.ref),h.position!==void 0&&u.set(g.PRODUCT_POSITION_FIELD_KEY,h.position)}e.set(p.id,u),p.taxonodes&&t.set(p.id,new Map(Object.entries(p.taxonodes))),i.add(p.id),s.set(p.id,p)}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=s;const r=this.initialFieldKey;r&&((c=this.schema)!=null&&c.fieldsByKey.has(r))?this._activeFieldKey=r:this.schema&&this.schema.fields.length>0&&(this._activeFieldKey=this.schema.fields[0].key)}_setStagedValue(e,t,i){const s=new Map(this._staged),o=new Map(s.get(e)??new Map);o.set(t,i),s.set(e,o),this._staged=s}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,s,o]of e){const r=new Map(t.get(i)??new Map);r.set(s,o),t.set(i,r)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const s=new Map(this._stagedTaxonodes);for(const o of e){const r=new Map(s.get(o)??new Map);r.set(t,i),s.set(o,r)}this._stagedTaxonodes=s}_setStagedTaxonodeSingle(e,t,i){const s=new Map(this._stagedTaxonodes),o=new Map(s.get(e)??new Map);o.set(t,i),s.set(e,o),this._stagedTaxonodes=s}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,s;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const o of this._selected){const r=this._originalFiles.get(o),a=(i=this._staged.get(o))==null?void 0:i.get(e.key),c=a!==void 0?a:(s=r==null?void 0:r.meta)==null?void 0:s[e.key],p=ce(c);p.length&&(t=ge(t,p,!1))}return t.filter(o=>typeof o!="string")}_originalValue(e,t){var s,o;const i=this._originalFiles.get(e);if(i){if(g.isProductFieldKey(t)){const r=g.productKeyOf(t);return r?(s=i.product)==null?void 0:s[r]:void 0}return(o=i.meta)==null?void 0:o[t]}}_refreshMissingRequired(){const e=this.schema?g.missingRequiredFieldKeysInStaged(this._staged,this._originalFiles,this.schema,this.config??void 0):new Set;let t=null;if(this.schema&&e.size>0){for(const o of this.schema.fields)if(e.has(o.key)){t=o.key;break}}t!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=t);const i=this._missingRequiredKeys;let s=i.size!==e.size;if(!s){for(const o of e)if(!i.has(o)){s=!0;break}}s&&(this._missingRequiredKeys=e)}get _filledFields(){var t;const e=new Set;for(const i of((t=this.schema)==null?void 0:t.fields)??[])for(const[s,o]of this._staged){const r=o.get(i.key),a=this._originalValue(s,i.key);if(r!==void 0&&!g.isEmpty(r)&&JSON.stringify(r)!==JSON.stringify(a)){e.add(i.key);break}}return e}get _hasPendingValue(){return this._pendingOp!=null&&!g.isEmpty(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0}):Promise.resolve(!0)}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config"))&&this._refreshMissingRequired()}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var s;const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".fm-confirm .btn-ghost");i==null||i.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}get _sortedFiles(){const e=[...this.files];return e.sort((t,i)=>{const s=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?s:-s}),e}render(){var p,u,h,f,m;if(!((u=(p=this.schema)==null?void 0:p.fields)!=null&&u.length))return n.html`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${x=>x.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">Fill multiple assets</span>
              <button class="fm-topbar-close" @click=${this._onClose} title="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">No metadata fields configured</div>
          </div>
        </div>
      `;const e=this._activeField,t=this._sortedFiles,i=this._selected.size===this.files.length&&this.files.length>0,s=this._selected.size>0&&!i,o=this._missingRequiredFieldKey,r=o?((h=this.schema.fieldsByKey.get(o))==null?void 0:h.title)||o:"",a=o!=null&&this._activeFieldKey===o,c=o!=null&&!a;return n.html`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${x=>x.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">Fill multiple assets</span>
            ${(f=this.schema.regionalVariantsGroups)!=null&&f.length?n.html`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((m=this.config)==null?void 0:m.regionalFilters)??{}}
                ></sfx-regional-settings>`:n.nothing}
            <button class="fm-topbar-close" @click=${this._onClose} title="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="fm-body">
            <!-- Sidebar -->
            <sfx-bulk-meta-sidebar
              .schema=${this.schema}
              .activeFieldKey=${this._activeFieldKey}
              .filledFields=${this._filledFields}
              .missingRequiredKeys=${this._missingRequiredKeys}
              .config=${this.config}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              <!-- Op bar -->
              ${e?n.html`
                    <sfx-bulk-meta-op-bar
                      .field=${e}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .ultratagsPresentOnSelection=${this._ultratagsPresentOnSelection}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  `:n.nothing}

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
                  Name
                  <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                </div>
                <div class="fm-th-size">Size</div>
                <div class="fm-th-field">${(e==null?void 0:e.title)??""}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${e?n.html`
                      <sfx-bulk-meta-table
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .stagedTaxonodes=${this._stagedTaxonodes}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .taxonomyService=${this.taxonomyService}
                        .ultratags=${this.ultratags}
                        .defaultLanguage=${this.defaultLanguage}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    `:n.nothing}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 Back
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>Cancel</button>
            <!-- Single primary button so transitions between Save and "Next
                 required" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Three states:
                   1. No required field missing      → "Save" (enabled)
                   2. Missing field is NOT active    → "Next required: X →"
                   3. Missing field IS active        → "Save" (disabled) -->
            <button
              class=${lt.classMap({"btn-primary":!0,"btn-primary--next":c})}
              @click=${c?this._onJumpToNextRequired:this._onSave}
              ?disabled=${a}
              title=${c?`Jump to ${r}`:""}
            >
              ${c?n.html`<span class="btn-primary-label">Next required: ${r}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`:"Save"}
            </button>
          </div>

          ${this._confirmVisible?n.html`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${x=>x.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">You have unapplied bulk changes. Discard them?</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>Cancel</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>Discard</button>
                </div>
              </div>
            </div>
          `:n.nothing}
        </div>
      </div>
    `}};Ye.styles=[Jt];let b=Ye;v([d.property({attribute:!1})],b.prototype,"schema");v([d.property({attribute:!1})],b.prototype,"files");v([d.property({attribute:!1})],b.prototype,"config");v([d.property({attribute:!1})],b.prototype,"autocomplete");v([d.property({attribute:!1})],b.prototype,"taxonomyService");v([d.property({attribute:!1})],b.prototype,"ultratags");v([d.property({attribute:!1})],b.prototype,"defaultLanguage");v([d.property({attribute:!1})],b.prototype,"initialFieldKey");v([d.state()],b.prototype,"_activeFieldKey");v([d.state()],b.prototype,"_staged");v([d.state()],b.prototype,"_stagedTaxonodes");v([d.state()],b.prototype,"_selected");v([d.state()],b.prototype,"_sortAsc");v([d.state()],b.prototype,"_pendingOp");v([d.state()],b.prototype,"_confirmVisible");v([d.state()],b.prototype,"_missingRequiredFieldKey");v([d.state()],b.prototype,"_missingRequiredKeys");customElements.define("sfx-bulk-metadata-modal",b);const st={text:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${n.svg`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${n.svg`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${n.svg`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":n.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${n.svg`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function ii(l){return st[l]??st.text}var si=Object.defineProperty,H=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&si(e,t,s),s};const Je=class Je extends n.LitElement{constructor(){super(...arguments),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this._collapsed=new Set,this._isNarrow=!1,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return g.isFieldRequired(e,this.config??void 0)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,s;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(s=this.renderRoot)==null?void 0:s.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){return this.schema?n.html`
      ${this.schema.groups.map(e=>{const t=this._isNarrow||!this._collapsed.has(e.uuid);return n.html`
          <button
            class="group-label"
            @click=${()=>this._toggleGroup(e.uuid)}
            aria-expanded=${t}
          >
            <span class="group-label-text">${e.name}</span>
            <svg class="group-chevron ${t?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${t?e.fields.map(i=>n.html`
                  <button
                    class="field-item ${this.activeFieldKey===i.key?"active":""}"
                    @click=${()=>this._onFieldClick(i.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${ii(i.type)}</span>
                    <span class="field-name">${i.title}</span>
                    ${this.filledFields.has(i.key)?n.html`<span class="field-dot"></span>`:n.nothing}
                    ${this._isRequired(i)?n.html`<span
                          class=${lt.classMap({"field-required":!0,unmet:this.missingRequiredKeys.has(i.key)})}
                          aria-hidden="true"
                        >*</span>`:n.nothing}
                  </button>
                `):n.nothing}
        `})}
    `:n.nothing}};Je.styles=[Qt];let D=Je;H([d.property({attribute:!1})],D.prototype,"schema");H([d.property({attribute:!1})],D.prototype,"activeFieldKey");H([d.property({attribute:!1})],D.prototype,"filledFields");H([d.property({attribute:!1})],D.prototype,"missingRequiredKeys");H([d.property({attribute:!1})],D.prototype,"config");H([d.state()],D.prototype,"_collapsed");H([d.state()],D.prototype,"_isNarrow");customElements.define("sfx-bulk-meta-sidebar",D);var ri=Object.defineProperty,A=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&ri(e,t,s),s},P;const E=(P=class extends n.LitElement{constructor(){super(...arguments),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._availableOps=[],this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var o;if(e.key!=="Enter")return;const t=(o=this.field)==null?void 0:o.type;if(!t||!P._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(r=>r instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const s=e.composedPath().find(r=>r instanceof HTMLInputElement);s&&s.value!==void 0&&(this._value=s.value),this._onApply()}}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??P._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._availableOps=Ht(this.field.type),this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((e=this.field)==null?void 0:e.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!we(this._operation,(t=this.field)==null?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?he.has((e=this.field)==null?void 0:e.type)?g.isEmpty(this._value):fe.has((t=this.field)==null?void 0:t.type)?g.isEmpty(this._value):!1:g.isEmpty(this._value)}render(){var i;if(!this.field)return n.nothing;if(g.isUnsupportedField(this.field))return n.html`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${ie}">
            ${pt}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${ie}</span>
            </div>
          </div>
        </div>
      `;const e=this._availableOps.length>1,t=this._availableOps.find(s=>s.key===this._operation);return n.html`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">Operation</span>
          ${e?n.html`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${(t==null?void 0:t.label)??"Set"}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  ${this._opDropdownOpen?n.html`
                        <div class="op-menu">
                          ${this._availableOps.map(s=>n.html`
                              <button
                                class="op-option ${s.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(s.key)}
                              >
                                ${s.label}
                              </button>
                            `)}
                        </div>
                      `:n.nothing}
                </div>
              `:n.html`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(t==null?void 0:t.label)??"Overwrite"}</span>
                </div>
              `}
        </div>

        ${we(this._operation,this.field.type)?n.html`
              <div class="op-field op-field--value">
                <span class="op-field-label">${this.field.title}</span>
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
                    .language=${(i=this.config)==null?void 0:i.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:n.nothing}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `}},P.styles=[Wt],P._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),P);A([d.property({attribute:!1})],E.prototype,"field");A([d.property({attribute:!1})],E.prototype,"autocomplete");A([d.property({attribute:!1})],E.prototype,"taxonomyService");A([d.property({attribute:!1})],E.prototype,"ultratags");A([d.property({attribute:!1})],E.prototype,"defaultLanguage");A([d.property({attribute:!1})],E.prototype,"ultratagsPresentOnSelection");A([d.property({attribute:!1})],E.prototype,"config");A([d.property({type:Number})],E.prototype,"selectedCount");A([d.state()],E.prototype,"_operation");A([d.state()],E.prototype,"_value");A([d.state()],E.prototype,"_pendingTaxonode");A([d.state()],E.prototype,"_opDropdownOpen");let oi=E;customElements.define("sfx-bulk-meta-op-bar",oi);var ni=Object.defineProperty,L=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&ni(e,t,s),s};const Qe=class Qe extends n.LitElement{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return n.html`
      ${this.files.map(e=>n.html`
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
          ></sfx-bulk-meta-row>
        `)}
    `}};Qe.styles=[ei];let k=Qe;L([d.property({attribute:!1})],k.prototype,"files");L([d.property({attribute:!1})],k.prototype,"field");L([d.property({attribute:!1})],k.prototype,"staged");L([d.property({attribute:!1})],k.prototype,"stagedTaxonodes");L([d.property({attribute:!1})],k.prototype,"selected");L([d.property({attribute:!1})],k.prototype,"pendingOp");L([d.property({attribute:!1})],k.prototype,"config");L([d.property({attribute:!1})],k.prototype,"autocomplete");L([d.property({attribute:!1})],k.prototype,"taxonomyService");L([d.property({attribute:!1})],k.prototype,"ultratags");L([d.property({attribute:!1})],k.prototype,"defaultLanguage");customElements.define("sfx-bulk-meta-table",k);var ai=Object.defineProperty,O=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&ai(e,t,s),s};const We=class We extends n.LitElement{constructor(){super(...arguments),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this._error=null,this._onFieldBlur=e=>{e.stopPropagation();const{value:t}=e.detail,i=g.validateField(this.field,t,this.config??void 0);if(i){this._error=i;return}this._error=null;const s={meta:{...this.file.meta,[this.field.key]:this.value}},o=pe(this.field,t,s,g.resolveFieldRegionalKey(this.field,this.config));JSON.stringify(o)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:o},bubbles:!0,composed:!0}))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:ut(this.field,this.value,e.value,e.operation,g.resolveFieldRegionalKey(this.field,this.config))}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t,i;const e=this.file;return n.html`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?n.html`<img class="row-thumb" src=${e.previewUrl} alt="" />`:n.html`<img class="row-thumb row-thumb-fallback"
              src=${g.getFileTypeIconUrl(this._getExtension(e.name))}
              alt="${this._getExtension(e.name)} file"
              @error=${s=>{const o=s.target,r=g.getDefaultFileTypeIconUrl();!o.dataset.fallback&&o.src!==r&&(o.dataset.fallback="1",o.src=r)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?g.formatFileSize(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.pendingOp&&this.selected?n.html`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .oldTaxonomyEntry=${((t=this.file.taxonodes)==null?void 0:t[this.field.key])??null}
                .newTaxonomyEntry=${this.taxonomyEntry}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:n.html`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${Se(this.field,this.value,g.resolveFieldRegionalKey(this.field,this.config))}
                  .autocomplete=${this.autocomplete}
                  .taxonomyService=${this.taxonomyService}
                  .taxonomyEntry=${this.taxonomyEntry}
                  .ultratags=${this.ultratags}
                  .language=${(i=this.config)==null?void 0:i.language}
                  .defaultLanguage=${this.defaultLanguage}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?n.html`<div class="row-error" role="alert">${this._error}</div>`:n.nothing}`}
        </div>
      </div>
    `}};We.styles=[Xt];let _=We;O([d.property({attribute:!1})],_.prototype,"file");O([d.property({attribute:!1})],_.prototype,"field");O([d.property({attribute:!1})],_.prototype,"value");O([d.property({attribute:!1})],_.prototype,"taxonomyEntry");O([d.property({type:Boolean})],_.prototype,"selected");O([d.property({attribute:!1})],_.prototype,"pendingOp");O([d.property({attribute:!1})],_.prototype,"config");O([d.property({attribute:!1})],_.prototype,"autocomplete");O([d.property({attribute:!1})],_.prototype,"taxonomyService");O([d.property({attribute:!1})],_.prototype,"ultratags");O([d.property({attribute:!1})],_.prototype,"defaultLanguage");O([d.state()],_.prototype,"_error");customElements.define("sfx-bulk-meta-row",_);const li=new Set(["multi-select","tags","ultratags"]);function rt(l,e,t){return!e.regional_variants_group_uuid||l==null||typeof l!="object"||Array.isArray(l)?l:l[t??"en"]}function ot(l){return Array.isArray(l)?l:[]}function nt(l){return l==null||l===""||Array.isArray(l)&&l.length===0?!0:typeof l=="object"&&!Array.isArray(l)?!Object.values(l).some(e=>e!=null&&e!==""):!1}function ke(l,e){var i;const t=(i=l.possible_values)==null?void 0:i.find(s=>s.internal_unique_value===e||s.api_value===e);return(t==null?void 0:t.label)??String(e)}function at(l,e){if(e==null||e==="")return"";switch(l.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return ke(l,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function di(l,e){const t=l.map(a=>typeof a=="string"?a:String(a)),i=e.map(a=>typeof a=="string"?a:String(a)),s=new Set(t),o=new Set(i),r=[];for(const a of i)r.push({label:a,state:s.has(a)?"kept":"added"});for(const a of t)o.has(a)||r.push({label:a,state:"removed"});return r}function ci(l,e,t){const i=ce(l),s=ce(e),o=t||"en",r=h=>h.sid||h.slug||h.uuid||"",a=h=>de({i18n:h.i18n,slug:h.slug||""},o,o).value||h.slug||h.sid||"",c=new Set(i.map(r).filter(Boolean)),p=new Set(s.map(r).filter(Boolean)),u=[];for(const h of s){const f=r(h);u.push({label:a(h),state:c.has(f)?"kept":"added"})}for(const h of i){const f=r(h);p.has(f)||u.push({label:a(h),state:"removed"})}return u}function pi(l,e,t){const i=new Set(l.map(r=>JSON.stringify(r))),s=new Set(e.map(r=>JSON.stringify(r))),o=[];for(const r of e){const a=JSON.stringify(r),c=typeof r=="string"?ke(t,r):String(r);o.push({label:c,state:i.has(a)?"kept":"added"})}for(const r of l){const a=JSON.stringify(r);if(!s.has(a)){const c=typeof r=="string"?ke(t,r):String(r);o.push({label:c,state:"removed"})}}return o}function ui(l,e,t,i){const s=g.resolveFieldRegionalKey(l,i),o=i==null?void 0:i.language,r=rt(e,l,s),a=rt(t,l,s);if(li.has(l.type)){if(l.type==="ultratags")return{kind:"array",items:ci(e,t,o)};const c=ot(r),p=ot(a);return l.type==="tags"?{kind:"array",items:di(c,p)}:{kind:"array",items:pi(c,p,l)}}return{kind:"scalar",oldDisplay:at(l,r),newDisplay:at(l,a),oldEmpty:nt(r),newEmpty:nt(a)}}var hi=Object.defineProperty,Z=(l,e,t,i)=>{for(var s=void 0,o=l.length-1,r;o>=0;o--)(r=l[o])&&(s=r(e,t,s)||s);return s&&hi(e,t,s),s};const Xe=class Xe extends n.LitElement{constructor(){super(...arguments),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){return n.html`
      <div class="diff-wrap" aria-label="Bulk operation preview">
        ${e.items.length===0?n.html`<span class="diff-chip diff-chip--kept diff-chip--empty">\u2014</span>`:e.items.map(t=>n.html`
                <span
                  class="diff-chip diff-chip--${t.state}"
                  aria-label="${t.state==="added"?"Added":t.state==="removed"?"Removed":"Kept"}: ${t.label}"
                >
                  ${t.state==="removed"?n.html`<s>${t.label}</s>`:t.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=`Will change from ${e.oldEmpty?"empty":e.oldDisplay} to ${e.newEmpty?"empty":e.newDisplay}`;return n.html`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${t}</span>
        ${e.newEmpty?n.nothing:n.html`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var r,a;const e=((r=this.newTaxonomyEntry)==null?void 0:r.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",i=!t,s=!e,o=`Will change from ${i?"empty":t} to ${s?"empty":e}`;return n.html`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${o}</span>
        ${s?n.nothing:n.html`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){if(!this.field)return n.nothing;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=ui(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Xe.styles=[Zt];let B=Xe;Z([d.property({attribute:!1})],B.prototype,"field");Z([d.property({attribute:!1})],B.prototype,"oldValue");Z([d.property({attribute:!1})],B.prototype,"newValue");Z([d.property({attribute:!1})],B.prototype,"oldTaxonomyEntry");Z([d.property({attribute:!1})],B.prototype,"newTaxonomyEntry");Z([d.property({attribute:!1})],B.prototype,"config");customElements.define("sfx-bulk-meta-diff-view",B);exports.deepMergeMeta=g.deepMergeMeta;exports.getFilesWithMissingRequired=g.getFilesWithMissingRequired;exports.isAssetHasMetadataValue=g.isAssetHasMetadataValue;exports.isEmpty=g.isEmpty;exports.validateField=g.validateField;exports.SfxBulkMetadataModal=b;exports.clearSchemaCache=xt;exports.createTagsAutocomplete=Et;exports.createTaxonomyService=It;exports.createUltratagsService=Ot;exports.fetchMetadataSchema=gt;exports.mapValueFromBackend=Se;exports.mapValueToBackend=pe;exports.parseMetadataSchema=$e;
