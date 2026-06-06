"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("./sfx-uploader-dyaODsy3.cjs"),o=require("lit"),d=require("lit/decorators.js"),Ye=require("lit/directives/class-map.js");function fe(l,e,t=!1){const s=(e==null?void 0:e.language)??"en",i=l.model??[],n=l.store??{},r=i.find(f=>f.applies_to==="FILES");let a=(r==null?void 0:r.groups)??[];if(Array.isArray(e==null?void 0:e.fields)){const f=new Set(e.fields);a=a.map(x=>({...x,fields:x.fields.filter(g=>f.has(g.ckey))})).filter(x=>x.fields.length>0)}a=a.map(f=>({...f,fields:f.fields.filter(x=>!x.hide)})).filter(f=>f.fields.length>0);const p=a.flatMap(f=>f.fields),h=new Map(p.map(f=>[f.key,f])),c=n.force_filling_metadata_on_upload===!0,u=n.regional_variants_groups??[];return{groups:a,fields:p,fieldsByKey:h,forceFillingOnUpload:c,regionalVariantsGroups:u,language:s,productsEnabled:t}}const Ze="https://hub.scaleflex.com/api",X=new Map,V=new Map;async function et(l,e,t,s){const i=X.get(t);if(i)return i;const n=V.get(t);if(n)return n;if(s!=null&&s.rawMetadata){const a=fe(s.rawMetadata,s,s.productsEnabled===!0);return X.set(t,a),a}const r=tt(e,t,s);V.set(t,r);try{const a=await r;return X.set(t,a),a}finally{V.delete(t)}}async function tt(l,e,t){var c,u,f,x,g;const i=`${(t==null?void 0:t.hubApiBase)??Ze}/project/${encodeURIComponent(e)}`,n=(t==null?void 0:t.hubHeaders)??l,r=await fetch(i,{headers:n});if(!r.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${r.status})`);const a=await r.json(),p=((u=(c=a.data)==null?void 0:c.project)==null?void 0:u.data)??((f=a.project)==null?void 0:f.data);if(!(p!=null&&p.metadata))throw new Error("No metadata in project response");const h=(t==null?void 0:t.productsEnabled)??((g=(x=p==null?void 0:p.airstore)==null?void 0:x.ui)==null?void 0:g.products_enabled)===!0;return fe(p.metadata,t,h)}function it(l){var e;l?(X.delete(l),(e=V.get(l))==null||e.catch(()=>{}),V.delete(l)):(X.clear(),V.clear())}function me(l,e,t){let s=e;switch(l.regional_variants_group_uuid&&s!=null&&typeof s=="object"&&!Array.isArray(s)&&(s=s[t??"en"]),l.type){case"geopoint":return st(s);case"boolean":return s===!0?"true":s===!1?"false":"null";case"date":return s?new Date(s):null;case"decimal2":return s!=null?String(s):"";case"tags":return Array.isArray(s)?s.map(i=>typeof i=="string"?{value:i,label:i}:i):[];case"multi-select":return s||[];default:return s??""}}function ie(l,e,t,s){var n;let i;switch(l.type){case"geopoint":{const r=e;!r||r.latitude===""||r.latitude==null||r.longitude===""||r.longitude==null?i=null:i=`(${r.latitude},${r.longitude})`;break}case"boolean":e==="true"?i=!0:e==="false"?i=!1:i=null;break;case"date":{if(!e)i=null;else{const r=e instanceof Date?e:new Date(e),a=r.getFullYear(),p=String(r.getMonth()+1).padStart(2,"0"),h=String(r.getDate()).padStart(2,"0");i=`${a}-${p}-${h}`}break}case"tags":i=Array.isArray(e)?e.map(r=>(r==null?void 0:r.label)??""):[];break;case"select-one":i=e===""?null:e;break;case"numeric":{if(e===""||e==null){i=null;break}const r=Number(e);i=Number.isFinite(r)?Math.round(r):null;break}case"decimal2":{if(e===""||e==null){i=null;break}const r=Number(e);i=Number.isFinite(r)?r:null;break}default:i=e}if(l.regional_variants_group_uuid){const r=s??"en";return{...((n=t==null?void 0:t.meta)==null?void 0:n[l.key])??{},[r]:i}}return i}function st(l){if(typeof l=="string"){const e=/\(([^)]+)\)/.exec(l);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function rt(l,e){const t=l.replace(/\/$/,"");let s=null,i=null,n=!1;return{search(r,a,p){if(s&&clearTimeout(s),i&&i.abort(),n=!1,!a.trim()){p([]);return}s=setTimeout(async()=>{var h;i=new AbortController;try{const c=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(a.trim())}&meta_key=_${encodeURIComponent(r)}&limit=20`,u=await fetch(c,{headers:e,signal:i.signal});if(n)return;if(!u.ok){p([]);return}const f=await u.json();if(n)return;const x=((h=f.data)==null?void 0:h.tags)??f.tags??[];p(x.map(g=>({sid:g.sid||void 0,value:g.tag||g.value||g.label||"",label:g.tag||g.label||g.value||""})))}catch{n||p([])}},200)},cancel(){n=!0,s&&clearTimeout(s),i&&i.abort()}}}const Ne={base_node:null,nodes:[]};function ot(l,e){const t=l.replace(/\/$/,"");let s=null,i=null,n=!1,r=null,a=null;return{fetchTaxonomies(){return a||(a=(async()=>{var h;const p=`${t}/v5/taxonomies`;try{const c=await fetch(p,{headers:e});if(!c.ok)return console.warn(`[sfx-uploader] /v5/taxonomies returned ${c.status}`),[];const u=await c.json(),f=(u==null?void 0:u.taxonomies)??((h=u==null?void 0:u.data)==null?void 0:h.taxonomies)??(u==null?void 0:u.data)??u;return Array.isArray(f)?f:(console.warn("[sfx-uploader] /v5/taxonomies returned unexpected shape",u),[])}catch(c){return console.warn("[sfx-uploader] /v5/taxonomies request failed",c),[]}})(),a.then(p=>{p.length===0&&(a=null)},()=>{a=null}),a)},async fetchNodes(p,h="",c=10){r&&r.abort(),r=new AbortController;try{const u=new URLSearchParams;h&&u.set("base",h),u.set("limit",String(c));const f=`${t}/v5/taxonomy/${encodeURIComponent(p)}/nodes?${u.toString()}`,x=await fetch(f,{headers:e,signal:r.signal});if(!x.ok)return Ne;const g=await x.json(),A=(g==null?void 0:g.data)??g;return{base_node:(A==null?void 0:A.base_node)??null,nodes:Array.isArray(A==null?void 0:A.nodes)?A.nodes:[]}}catch{return Ne}},autocomplete(p,h,c){if(s&&clearTimeout(s),i&&i.abort(),n=!1,!h.trim()){c([]);return}s=setTimeout(async()=>{var u;i=new AbortController;try{const f=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(h.trim())}&meta_key=_${encodeURIComponent(p)}`,x=await fetch(f,{headers:e,signal:i.signal});if(n)return;if(!x.ok){c([]);return}const g=await x.json();if(n)return;const A=((u=g==null?void 0:g.data)==null?void 0:u.tags)??(g==null?void 0:g.tags)??[];c(A.map(P=>({tag:String(P.tag??P.path??""),path:String(P.path??P.tag??""),suid:String(P.suid??""),uuid:String(P.uuid??""),approx_count:typeof P.approx_count=="number"?P.approx_count:void 0})))}catch{n||c([])}},200)},cancel(){n=!0,s&&clearTimeout(s),i&&i.abort(),r&&r.abort()}}}var nt=Object.defineProperty,L=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&nt(e,t,i),i};const ye=class ye extends o.LitElement{constructor(){super(...arguments),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.disabled=!1,this._collapsed=new Set}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_renderGroup(e){const t=!this._collapsed.has(e.uuid);return o.html`
      <div class="group">
        <button class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${t}>
          <span>${e.name}</span>
          <svg class="chevron ${t?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${t?o.html`
              <div class="group-content">
                ${e.fields.map(s=>{var i;return o.html`
                    <sfx-metadata-field
                      .field=${s}
                      .value=${this.meta[s.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((i=this.taxonodes)==null?void 0:i[s.key])??null}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:o.nothing}
      </div>
    `}render(){return!this.schema||this.schema.groups.length===0?o.html`<div class="empty">No metadata fields configured</div>`:o.html`
      ${this.schema.groups.map(e=>this._renderGroup(e))}
    `}};ye.styles=o.css`
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
  `;let $=ye;L([d.property({attribute:!1})],$.prototype,"schema");L([d.property({attribute:!1})],$.prototype,"meta");L([d.property({attribute:!1})],$.prototype,"config");L([d.property({attribute:!1})],$.prototype,"autocomplete");L([d.property({attribute:!1})],$.prototype,"taxonomyService");L([d.property({attribute:!1})],$.prototype,"taxonodes");L([d.property({type:Boolean})],$.prototype,"disabled");L([d.state()],$.prototype,"_collapsed");customElements.define("sfx-metadata-form",$);const ee=o.css`
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
`,se=o.css`
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
`,Je=o.css`
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
`;o.css`
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
`;const at=o.css`
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
`;var lt=Object.defineProperty,K=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&lt(e,t,i),i};const _e=class _e extends o.LitElement{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){return m.isFieldRequired(this.field,this.config??void 0)}_onFieldBlur(e){var r;const{key:t,value:s}=e.detail,i=m.validateField(this.field,s,this.config??void 0);if(i){this._error=i;return}this._error=null;const n=ie(this.field,s,void 0,(r=this.config)==null?void 0:r.language);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:n},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){const s=this.disabled;if(m.isUnsupportedField(e))return o.html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;case"textarea":return o.html`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;case"select-one":return o.html`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-select-field>`;case"multi-select":return o.html`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-multi-select-field>`;case"tags":return o.html`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;case"taxonomy-node":return o.html`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${s}></sfx-meta-taxonomy-node-field>`;case"boolean":return o.html`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return o.html`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;case"date":return o.html`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;case"geopoint":return o.html`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;default:return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`}}render(){var n;const e=this.field;if(!e)return o.nothing;const t=me(e,this.value,(n=this.config)==null?void 0:n.language),i=e.type==="textarea"?"field-row field-row--top":"field-row";return o.html`
      <div class=${i} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?o.html`<span class="field-required" aria-hidden="true">*</span>`:o.nothing}
        </div>
        <div class="field-content">
          ${this._renderField(e,t)}
          ${this._error?o.html`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:o.nothing}
        </div>
      </div>
    `}};_e.styles=[at];let S=_e;K([d.property({attribute:!1})],S.prototype,"field");K([d.property({attribute:!1})],S.prototype,"value");K([d.property({attribute:!1})],S.prototype,"config");K([d.property({attribute:!1})],S.prototype,"autocomplete");K([d.property({attribute:!1})],S.prototype,"taxonomyService");K([d.property({attribute:!1})],S.prototype,"taxonomyEntry");K([d.property({type:Boolean})],S.prototype,"disabled");K([d.state()],S.prototype,"_error");customElements.define("sfx-metadata-field",S);var dt=Object.defineProperty,xe=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&dt(e,t,i),i};class w extends o.LitElement{constructor(){super(...arguments),this.value="",this.disabled=!1}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}xe([d.property({attribute:!1})],w.prototype,"field");xe([d.property({attribute:!1})],w.prototype,"value");xe([d.property({type:Boolean})],w.prototype,"disabled");const we=class we extends w{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var s,i;const e=((s=this.field)==null?void 0:s.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return o.html`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((i=this.field)==null?void 0:i.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};we.styles=[ee];let ne=we;customElements.define("sfx-meta-text-field",ne);const ke=class ke extends w{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var s,i;const e=((s=this.field)==null?void 0:s.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return o.html`
      <textarea
        .value=${this.value??""}
        placeholder=${((i=this.field)==null?void 0:i.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};ke.styles=[ee,o.css`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let ae=ke;customElements.define("sfx-meta-textarea-field",ae);var pt=Object.defineProperty,ge=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&pt(e,t,i),i};const $e=class $e extends w{constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,s)=>t.label.localeCompare(s.label))}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(s=>s.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".search"))==null||s.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}render(){var s,i;const e=((s=this.field)==null?void 0:s.title)??"",t=e?`Select ${e.toLowerCase()}`:"Select an option";return o.html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?o.html`<span class="trigger-value">${this._selectedLabel}</span>`:o.html`<span class="placeholder">${((i=this.field)==null?void 0:i.placeholder)||t}</span>`}
        ${this._selectedLabel&&!this.disabled?o.html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this._clear(n))}}>&times;</span>
        `:o.nothing}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?o.html`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length?this._filtered.map((n,r)=>o.html`
                <div class="option ${n.value===this.value?"selected":""} ${r===this._activeIndex?"active":""}"
                  role="option" aria-selected=${n.value===this.value}
                  @mousedown=${a=>{a.preventDefault(),this._onSelect(n)}}
                  @mouseenter=${()=>{this._activeIndex=r}}>
                  ${n.label}
                </div>`):o.html`<div class="empty">No options</div>`}
        </div>
      `:o.nothing}
    `}};$e.styles=[se];let U=$e;ge([d.state()],U.prototype,"_open");ge([d.state()],U.prototype,"_search");ge([d.state()],U.prototype,"_activeIndex");customElements.define("sfx-meta-select-field",U);var ct=Object.defineProperty,be=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&ct(e,t,i),i};const Se=class Se extends w{constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,s)=>t.label.localeCompare(s.label))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,s=t.includes(e.value)?t.filter(i=>i!==e.value):[...t,e.value];this.value=s,this._emit("field-change",s)}_remove(e){const t=this._selected.filter(s=>s!==e);this.value=t,this._emit("field-change",t)}_selectAll(){const e=this._options.map(t=>t.value);this.value=e,this._emit("field-change",e)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(s=>s.value===e))==null?void 0:t.label)??e}render(){var i,n;const e=this._selected,t=((i=this.field)==null?void 0:i.title)??"",s=t?`Select ${t.toLowerCase()}`:"Select an option";return o.html`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length?e.map(r=>o.html`
              <span class="chip">
                ${this._labelFor(r)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(r)}" @click=${a=>{a.stopPropagation(),this._remove(r)}}>&times;</button>
              </span>`):o.html`<span class="placeholder">${((n=this.field)==null?void 0:n.placeholder)||s}</span>`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open?o.html`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length?this._filtered.map((r,a)=>o.html`
                  <div class="option ${a===this._activeIndex?"active":""}" role="option" aria-selected=${e.includes(r.value)}
                    @mousedown=${p=>{p.preventDefault(),this._toggle(r)}}
                    @mouseenter=${()=>{this._activeIndex=a}}>
                    <span class="check ${e.includes(r.value)?"checked":""}">
                      ${e.includes(r.value)?"✓":""}
                    </span>
                    ${r.label}
                  </div>`):o.html`<div class="empty">No options</div>`}
          </div>
          ${this._options.length>0?o.html`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${r=>{r.preventDefault(),this._selectAll()}}>Select all</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${r=>{r.preventDefault(),this._clearAll()}}>Clear all</button>
            </div>
          `:o.nothing}
        </div>
      `:o.nothing}
    `}};Se.styles=[se,Je,o.css`
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
    `];let Y=Se;be([d.state()],Y.prototype,"_open");be([d.state()],Y.prototype,"_search");be([d.state()],Y.prototype,"_activeIndex");customElements.define("sfx-meta-multi-select-field",Y);function N(l,e){var t,s;return((t=l.label)==null?void 0:t.trim().toLowerCase())===((s=e.label)==null?void 0:s.trim().toLowerCase())}function He(l){return l.trim().replace(/\s+/g," ")}function ht(l){return He(l).replace(/\s/g,"-")}function te(l){return{label:He(l),value:ht(l)}}var ut=Object.defineProperty,H=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&ut(e,t,i),i};const Ce=class Ce extends w{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var s,i,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!((s=this.field)!=null&&s.ckey)){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(n=this.autocomplete)==null||n.search(this.field.ckey,t,r=>{this._results=r,this._loading=!1})}_addTag(e){if(this._tags.some(s=>N(s,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".input"))==null||s.focus()})}_removeTag(e){const t=this._tags.filter(s=>!N(s,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const s=this._suggestions;this._activeIndex>=0&&this._activeIndex<s.length?this._addTag(s[this._activeIndex]):this._activeIndex===s.length&&this._canCreate?this._addTag(te(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(te(this._query)):this._activeIndex===-1&&s.length&&this._addTag(s[0]);break}}}get _suggestions(){var n;const e=this._query.toLowerCase().trim(),t=this._tags,s=(((n=this.field)==null?void 0:n.possible_values)??[]).map(r=>({value:r.api_value||r.internal_unique_value,label:r.label})).filter(r=>!t.some(a=>N(a,r))).filter(r=>!e||r.label.toLowerCase().includes(e)),i=this._results.filter(r=>!t.some(a=>N(a,r))&&!s.some(a=>N(a,r)));return[...s,...i]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=te(e);return!this._tags.some(s=>N(s,t))&&!this._suggestions.some(s=>N(s,t))}render(){var i,n;const e=this._tags,t=this._suggestions,s=t.length;return o.html`
      <div class="container" @click=${()=>{var r;return(r=this.renderRoot.querySelector(".input"))==null?void 0:r.focus()}}>
        ${e.map(r=>o.html`
          <span class="chip">
            ${r.label}
            <button class="chip-x" aria-label="Remove ${r.label}" @click=${a=>{a.stopPropagation(),this._removeTag(r)}}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((i=this.field)==null?void 0:i.title)??"Tags"}
          placeholder=${e.length?"":((n=this.field)==null?void 0:n.placeholder)||"Add tags"}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?o.html`
        <div class="dropdown" role="listbox">
          ${this._loading?o.html`<div class="loading">Loading</div>`:o.nothing}
          ${t.map((r,a)=>o.html`
            <div class="option ${a===this._activeIndex?"active":""}" role="option"
              @mousedown=${p=>{p.preventDefault(),this._addTag(r)}}
              @mouseenter=${()=>{this._activeIndex=a}}>
              ${r.label}
            </div>`)}
          ${this._canCreate?o.html`
            <div class="option create ${s===this._activeIndex?"active":""}"
              @mousedown=${r=>{r.preventDefault(),this._addTag(te(this._query))}}
              @mouseenter=${()=>{this._activeIndex=s}}>
              Create '${this._query.trim()}'
            </div>`:o.nothing}
          ${!this._loading&&!t.length&&!this._canCreate?o.html`<div class="empty">No results</div>`:o.nothing}
        </div>
      `:o.nothing}
    `}};Ce.styles=[Je,o.css`
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
    `];let D=Ce;H([d.property({attribute:!1})],D.prototype,"autocomplete");H([d.state()],D.prototype,"_query");H([d.state()],D.prototype,"_results");H([d.state()],D.prototype,"_loading");H([d.state()],D.prototype,"_dropdownOpen");H([d.state()],D.prototype,"_activeIndex");customElements.define("sfx-meta-tags-field",D);var ft=Object.defineProperty,Ge=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&ft(e,t,i),i};const B=[{label:"True",value:"true"},{label:"False",value:"false"}],Ee=class Ee extends w{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=B.find(s=>s.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(B.findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,B.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=B.length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<B.length&&(e.preventDefault(),this._onSelect(B[this._activeIndex],!0));break}}render(){var i,n;const e=this.value==null?"":String(this.value),t=((i=this.field)==null?void 0:i.title)??"",s=t?`Select ${t.toLowerCase()}`:"Select an option";return o.html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?o.html`<span class="trigger-value">${this._currentLabel}</span>`:o.html`<span class="placeholder">${((n=this.field)==null?void 0:n.placeholder)||s}</span>`}
        ${this._currentLabel&&!this.disabled?o.html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}>&times;</span>
        `:o.nothing}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?o.html`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${B.map((r,a)=>o.html`
            <div class="option ${r.value===e?"selected":""} ${a===this._activeIndex?"active":""}"
              role="option" aria-selected=${r.value===e}
              @mousedown=${p=>{p.preventDefault(),this._onSelect(r)}}
              @mouseenter=${()=>{this._activeIndex=a}}>
              ${r.label}
            </div>`)}
        </div>
      `:o.nothing}
    `}};Ee.styles=[se];let Q=Ee;Ge([d.state()],Q.prototype,"_open");Ge([d.state()],Q.prototype,"_activeIndex");customElements.define("sfx-meta-boolean-field",Q);const Te=class Te extends w{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return o.html`
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
    `}};Te.styles=[ee];let le=Te;customElements.define("sfx-meta-number-field",le);const Ie=class Ie extends w{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return o.html`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?o.html`<span class="date-placeholder">Pick a date</span>`:o.nothing}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};Ie.styles=[ee,o.css`
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
    `];let de=Ie;customElements.define("sfx-meta-date-field",de);const Ae=class Ae extends w{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const s=t.target.value,i={...this._geo,[e]:s};this.value=i,this._emit("field-change",i)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return o.html`
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
    `}};Ae.styles=[ee,o.css`
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
    `];let pe=Ae;customElements.define("sfx-meta-geo-point-field",pe);var mt=Object.defineProperty,C=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&mt(e,t,i),i};const M={uuid:"__root__",name:"",ltree:""},Oe=class Oe extends w{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[M],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,s;const e=((s=(t=this.field)==null?void 0:t.model)==null?void 0:s.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var i,n,r;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),s=t.find(a=>a.suid===e);return s?(this._resolvedTaxonomyUuid=s.uuid,this._taxonomyResolutionFailed=!1,s.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((i=this.field)==null?void 0:i.ckey)??((n=this.field)==null?void 0:n.key)}" model:`,(r=this.field)==null?void 0:r.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[M];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[M];const s=t.slice(0,-1),n=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),r=[M];let a="";for(let p=0;p<s.length;p++)a=a?`${a}.${s[p]}`:s[p],r.push({uuid:`__seed_${a}`,name:n[p]??s[p],ltree:a});return r}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const s=this._drillStack[this._drillStack.length-1].ltree,i=await this.taxonomyService.fetchNodes(t,s);e===this._searchSeq&&(this._currentNodes=i.nodes,this._loading=!1,this._activeIndex=-1)}_onSearchInput(e){var i;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(i=this.taxonomyService)==null||i.cancel();return}this._loading=!0;const s=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,n=>{s===this._searchSeq&&(this._searchResults=n,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const s=[...this._drillStack.filter(i=>i.uuid!==M.uuid).map(i=>i.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:s||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,s=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:s,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,s=this._buildTreeEntry(e);this.value=t,this.entry=s,this._emit("field-change",t),this._emitTaxonomyEntry(s),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,s=this._buildAutocompleteEntry(e);this.value=t,this.entry=s,this._emit("field-change",t),this._emitTaxonomyEntry(s),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var s,i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(s=this.taxonomyService)==null||s.cancel(),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const n=this._currentNodes[this._activeIndex];n.children.count_direct>0&&(e.preventDefault(),this._drillInto(n))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const n=this._searchResults[this._activeIndex];n&&this._selectAutocomplete(n)}else{const n=this._currentNodes[this._activeIndex];n&&this._selectTreeNode(n)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?o.nothing:o.html`
      <div class="breadcrumb">
        ${e.map((t,s)=>{const i=s===e.length-1,n=t.uuid===M.uuid?"Root":t.name;return o.html`
            ${s>0?o.html`<span class="crumb-sep">›</span>`:o.nothing}
            <button class="crumb ${i?"current":""}" type="button"
              ?disabled=${i}
              @click=${()=>!i&&this._jumpToCrumb(s)}>
              ${n}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return o.html`<div class="empty">Loading…</div>`;if(this._taxonomyResolutionFailed)return o.html`<div class="empty">Taxonomy not found</div>`;if(this._currentNodes.length===0)return o.html`<div class="empty">No nodes</div>`;const e=this._selectedScalar;return o.html`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,s)=>{const i=t.children.count_direct>0,n=!!e&&(e===t.uuid||e===t.slug);return o.html`
            <div class="tree-row ${s===this._activeIndex?"active":""} ${n?"selected":""}"
              role="option" aria-selected=${n}
              @mouseenter=${()=>{this._activeIndex=s}}
              @click=${()=>i?this._drillInto(t):this._selectTreeNode(t)}>
              <span class="tree-radio ${n?"checked":""}" role="button"
                aria-label="Select ${t.name}"
                @click=${r=>{r.stopPropagation(),this._selectTreeNode(t)}}></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${i?o.html`<span class="tree-count" aria-hidden="true">(${t.children.count_direct})</span>`:o.nothing}
              <span class="tree-chevron ${i?"":"hidden"}" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
          `})}
      </div>
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?o.html`<div class="empty">Loading…</div>`:this._searchResults.length===0?o.html`<div class="empty">No results</div>`:o.html`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>o.html`
          <div class="ac-row ${t===this._activeIndex?"active":""}"
            role="option"
            @mouseenter=${()=>{this._activeIndex=t}}
            @click=${()=>this._selectAutocomplete(e)}>
            <span class="ac-tag">${e.tag}</span>
            ${e.path&&e.path!==e.tag?o.html`<span class="ac-path">${e.path}</span>`:o.nothing}
          </div>
        `)}
      </div>
    `}render(){var n,r;if(!this._taxonomySuid)return o.html`<div class="misconfigured" role="alert">Field is missing taxonomy config</div>`;const e=((n=this.field)==null?void 0:n.title)??"",t=e?`Select ${e.toLowerCase()}`:"Select a node",s=this._displayPath,i=!!s;return o.html`
      <button class="trigger" type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${a=>{!this._open&&(a.key==="ArrowDown"||a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this._openDropdown())}}>
        ${i?o.html`<span class="trigger-value" title=${s}>${s}</span>`:o.html`<span class="placeholder">${((r=this.field)==null?void 0:r.placeholder)||t}</span>`}
        ${i&&!this.disabled?o.html`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this._clear(a))}}>&times;</span>
        `:o.nothing}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?o.html`
        <div class="dropdown taxo" @keydown=${this._onKeydown}>
          <input class="search" type="text"
            aria-label="Search taxonomy"
            placeholder="Search…"
            .value=${this._query}
            @input=${this._onSearchInput} />
          ${this._isSearchMode?o.nothing:this._renderBreadcrumb()}
          ${this._isSearchMode?this._renderSearch():this._renderTree()}
        </div>
      `:o.nothing}
    `}};Oe.styles=[se,o.css`
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
    `];let y=Oe;C([d.property({attribute:!1})],y.prototype,"taxonomyService");C([d.property({attribute:!1})],y.prototype,"entry");C([d.state()],y.prototype,"_open");C([d.state()],y.prototype,"_query");C([d.state()],y.prototype,"_drillStack");C([d.state()],y.prototype,"_currentNodes");C([d.state()],y.prototype,"_searchResults");C([d.state()],y.prototype,"_loading");C([d.state()],y.prototype,"_activeIndex");C([d.state()],y.prototype,"_resolvedTaxonomyUuid");C([d.state()],y.prototype,"_taxonomyResolutionFailed");customElements.define("sfx-meta-taxonomy-node-field",y);const Z="This field is not supported during upload. You can edit it later in the asset library.",We=o.html`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${o.svg`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,De=class De extends o.LitElement{render(){return o.html`
      <div
        class="unsupported"
        title=${Z}
        aria-label=${Z}
        aria-disabled="true"
        role="note"
      >
        ${We}
        <span class="unsupported-text" aria-hidden="true">Not editable during upload</span>
      </div>
    `}};De.styles=o.css`
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
  `;let ce=De;customElements.define("sfx-meta-unsupported-field",ce);var xt=Object.defineProperty,G=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&xt(e,t,i),i};const ze=class ze extends o.LitElement{constructor(){super(...arguments),this.taxonomyEntry=null,this.disabled=!1}render(){const e=this.field,t=this.value,s=this.disabled;if(m.isUnsupportedField(e))return o.html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;case"textarea":return o.html`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;case"select-one":return o.html`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-select-field>`;case"multi-select":return o.html`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-multi-select-field>`;case"tags":return o.html`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;case"taxonomy-node":return o.html`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${s}></sfx-meta-taxonomy-node-field>`;case"boolean":return o.html`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return o.html`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;case"date":return o.html`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;case"geopoint":return o.html`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;default:return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`}}};ze.styles=o.css`
    :host { display: block; }
  `;let z=ze;G([d.property({attribute:!1})],z.prototype,"field");G([d.property({attribute:!1})],z.prototype,"value");G([d.property({attribute:!1})],z.prototype,"autocomplete");G([d.property({attribute:!1})],z.prototype,"taxonomyService");G([d.property({attribute:!1})],z.prototype,"taxonomyEntry");G([d.property({type:Boolean})],z.prototype,"disabled");customElements.define("sfx-metadata-field-edit",z);var gt=Object.defineProperty,ve=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&gt(e,t,i),i};const Re=class Re extends o.LitElement{constructor(){super(...arguments),this.taxonomyEntry=null}_formatValue(){var s,i,n,r;const e=this.value,t=(s=this.field)==null?void 0:s.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(i=this.field.possible_values)==null?void 0:i.find(p=>p.internal_unique_value===e||p.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var h;const p=(h=this.field.possible_values)==null?void 0:h.find(c=>c.internal_unique_value===a||c.api_value===a);return(p==null?void 0:p.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"taxonomy-node":return(n=this.taxonomyEntry)!=null&&n.path?this.taxonomyEntry.path:(r=this.taxonomyEntry)!=null&&r.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var s;if(this.field&&m.isUnsupportedField(this.field))return o.html`
        <div class="value empty" title=${Z}>
          Not editable during upload
        </div>
      `;const e=this._formatValue(),t=e==="";return((s=this.field)==null?void 0:s.type)==="attachment-uri"&&!t?o.html`
        <div class="value">
          <a class="link" href=${e} target="_blank" rel="noopener noreferrer"
            @click=${i=>i.stopPropagation()}
          >${e}</a>
        </div>
      `:o.html`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Re.styles=o.css`
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
  `;let J=Re;ve([d.property({attribute:!1})],J.prototype,"field");ve([d.property({attribute:!1})],J.prototype,"value");ve([d.property({attribute:!1})],J.prototype,"taxonomyEntry");customElements.define("sfx-metadata-field-view",J);const re=new Set(["multi-select","tags"]),oe=new Set(["text","textarea","attachment-uri"]);function bt(l){return m.isUnsupportedFieldType(l)?[]:re.has(l)?[{key:"SET",label:"Set"},{key:"ADD",label:"Add to"},{key:"DELETE",label:"Remove from"}]:oe.has(l)?[{key:"SET",label:"Set"},{key:"ADD",label:"Append"},{key:"DELETE",label:"Remove"}]:[{key:"SET",label:"Set"},{key:"DELETE",label:"Clear"}]}function he(l,e){return l==="DELETE"?re.has(e)||oe.has(e):!0}function vt(l,e,t,s){const i=re.has(s),n=oe.has(s);switch(l){case"SET":return t;case"ADD":{if(i){const r=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return r;if(s==="tags"){const c=new Set(r.map(f=>f)),u=[...r];for(const f of a){const x=typeof f=="string"?f:String(f);c.has(x)||(c.add(x),u.push(x))}return u}const p=new Set(r.map(c=>JSON.stringify(c))),h=[...r];for(const c of a){const u=JSON.stringify(c);p.has(u)||(p.add(u),h.push(c))}return h}if(n){const r=typeof t=="string"?t:"";if(!r)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${r}`:r}return t}case"DELETE":{if(i){const r=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return r;if(s==="tags"){const h=new Set(a.map(c=>typeof c=="string"?c:String(c)));return r.filter(c=>!h.has(typeof c=="string"?c:String(c)))}const p=new Set(a.map(h=>JSON.stringify(h)));return r.filter(h=>!p.has(JSON.stringify(h)))}if(n){const r=typeof t=="string"?t:"";return r?(typeof e=="string"?e:"").replaceAll(r,"").replace(/\s{2,}/g," ").trim():""}return s==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function Xe(l,e,t,s,i){const n=i??"en",r=!!l.regional_variants_group_uuid,a={meta:{[l.key]:e}},p=ie(l,t,a,i),h=x=>r&&x!==null&&typeof x=="object"&&!Array.isArray(x),c=h(e)?e[n]:e,u=h(p)?p[n]:p,f=vt(s,c,u,l.type);return r?{...h(e)?e:{},[n]:f}:f}const Qe=o.css`
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
`,yt=o.css`
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

  ${Qe}
`,_t=o.css`
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
`,wt=o.css`
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
`,kt=o.css`
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

  ${Qe}
`,$t=o.css`
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
`,St=o.css`
  :host {
    display: block;
  }
`;var Ct=Object.defineProperty,v=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Ct(e,t,i),i};const qe=class qe extends o.LitElement{constructor(){super(...arguments),this.files=[],this.config=null,this.initialFieldKey=null,this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()},this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,p;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const s=t.querySelectorAll("button");if(s.length===0)return;const i=s[0],n=s[s.length-1],r=(p=this.shadowRoot)==null?void 0:p.activeElement;e.shiftKey&&r===i?(e.preventDefault(),n.focus()):!e.shiftKey&&r===n&&(e.preventDefault(),i.focus())},this._onPendingChange=e=>{const{operation:t,value:s}=e.detail,i=this._activeField;m.isEmpty(s)&&(!i||he(t,i.type))?this._pendingOp=null:this._pendingOp={operation:t,value:s}},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e)},this._onBulkApply=e=>{var p;const t=this._activeField;if(!t)return;const{operation:s,value:i,taxonomyEntry:n}=e.detail,r=(p=this.config)==null?void 0:p.language,a=[];for(const h of this._selected){const c=this._staged.get(h),u=c!=null&&c.has(t.key)?c.get(t.key):this._originalValue(h,t.key)??null,f=Xe(t,u,i,s,r);a.push([h,t.key,f])}this._setStagedBulk(a),t.type==="taxonomy-node"&&n!==void 0&&this._setStagedTaxonodeBulk(this._selected,t.key,n)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:s,entry:i}=e.detail;this._setStagedTaxonodeSingle(t,s,i)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||!await this._confirmDiscardPending())return;const e=[],t=[];for(const[i,n]of this._staged){if(!this._originalFiles.get(i))continue;const a={},p={};for(const[h,c]of n){const u=this._originalValue(i,h);if(JSON.stringify(c)!==JSON.stringify(u))if(m.isProductFieldKey(h)){const f=m.productKeyOf(h);if(!f)continue;const x=c===""||c==null;f==="position"?p.position=x?void 0:Number(c):p.ref=x?void 0:String(c)}else a[h]=c}Object.keys(a).length>0&&e.push({fileId:i,meta:a}),Object.keys(p).length>0&&t.push({fileId:i,product:p})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0}));const s=[];for(const[i,n]of this._stagedTaxonodes){const r=this._originalFiles.get(i);if(!r)continue;const a=r.taxonodes??{},p={};for(const[h,c]of n){const u=a[h]??null;JSON.stringify(c??null)!==JSON.stringify(u??null)&&(p[h]=c??null)}Object.keys(p).length>0&&s.push({fileId:i,taxonodes:p})}s.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:s},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null}_initStaged(){var a,p;const e=new Map,t=new Map,s=new Set,i=new Map,n=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const h of this.files){const c=new Map;if(h.meta)for(const[u,f]of Object.entries(h.meta))c.set(u,f);if(n){const u=h.product;u.ref!==void 0&&c.set(m.PRODUCT_REF_FIELD_KEY,u.ref),u.position!==void 0&&c.set(m.PRODUCT_POSITION_FIELD_KEY,u.position)}e.set(h.id,c),h.taxonodes&&t.set(h.id,new Map(Object.entries(h.taxonodes))),s.add(h.id),i.set(h.id,h)}this._staged=e,this._stagedTaxonodes=t,this._selected=s,this._originalFiles=i;const r=this.initialFieldKey;r&&((p=this.schema)!=null&&p.fieldsByKey.has(r))?this._activeFieldKey=r:this.schema&&this.schema.fields.length>0&&(this._activeFieldKey=this.schema.fields[0].key)}_setStagedValue(e,t,s){const i=new Map(this._staged),n=new Map(i.get(e)??new Map);n.set(t,s),i.set(e,n),this._staged=i}_setStagedBulk(e){const t=new Map(this._staged);for(const[s,i,n]of e){const r=new Map(t.get(s)??new Map);r.set(i,n),t.set(s,r)}this._staged=t}_setStagedTaxonodeBulk(e,t,s){const i=new Map(this._stagedTaxonodes);for(const n of e){const r=new Map(i.get(n)??new Map);r.set(t,s),i.set(n,r)}this._stagedTaxonodes=i}_setStagedTaxonodeSingle(e,t,s){const i=new Map(this._stagedTaxonodes),n=new Map(i.get(e)??new Map);n.set(t,s),i.set(e,n),this._stagedTaxonodes=i}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}_originalValue(e,t){var i,n;const s=this._originalFiles.get(e);if(s){if(m.isProductFieldKey(t)){const r=m.productKeyOf(t);return r?(i=s.product)==null?void 0:i[r]:void 0}return(n=s.meta)==null?void 0:n[t]}}_refreshMissingRequired(){const e=this.schema?m.missingRequiredFieldKeysInStaged(this._staged,this._originalFiles,this.schema,this.config??void 0):new Set;let t=null;if(this.schema&&e.size>0){for(const n of this.schema.fields)if(e.has(n.key)){t=n.key;break}}t!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=t);const s=this._missingRequiredKeys;let i=s.size!==e.size;if(!i){for(const n of e)if(!s.has(n)){i=!0;break}}i&&(this._missingRequiredKeys=e)}get _filledFields(){var t;const e=new Set;for(const s of((t=this.schema)==null?void 0:t.fields)??[])for(const[i,n]of this._staged){const r=n.get(s.key),a=this._originalValue(i,s.key);if(r!==void 0&&!m.isEmpty(r)&&JSON.stringify(r)!==JSON.stringify(a)){e.add(s.key);break}}return e}get _hasPendingValue(){return this._pendingOp!=null&&!m.isEmpty(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0}):Promise.resolve(!0)}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config"))&&this._refreshMissingRequired()}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var i;const s=(i=this.shadowRoot)==null?void 0:i.querySelector(".fm-confirm .btn-ghost");s==null||s.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}get _sortedFiles(){const e=[...this.files];return e.sort((t,s)=>{const i=t.name.localeCompare(s.name)||t.id.localeCompare(s.id);return this._sortAsc?i:-i}),e}render(){var h,c,u;if(!((c=(h=this.schema)==null?void 0:h.fields)!=null&&c.length))return o.html`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${f=>f.stopPropagation()}>
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
      `;const e=this._activeField,t=this._sortedFiles,s=this._selected.size===this.files.length&&this.files.length>0,i=this._selected.size>0&&!s,n=this._missingRequiredFieldKey,r=n?((u=this.schema.fieldsByKey.get(n))==null?void 0:u.title)||n:"",a=n!=null&&this._activeFieldKey===n,p=n!=null&&!a;return o.html`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${f=>f.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">Fill multiple assets</span>
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
              ${e?o.html`
                    <sfx-bulk-meta-op-bar
                      .field=${e}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  `:o.nothing}

              <!-- Table header -->
              <div class="fm-table-header">
                <div class="fm-th-check">
                  <input
                    type="checkbox"
                    class="fm-checkbox"
                    .checked=${s}
                    .indeterminate=${i}
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
                ${e?o.html`
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
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    `:o.nothing}
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
              class=${Ye.classMap({"btn-primary":!0,"btn-primary--next":p})}
              @click=${p?this._onJumpToNextRequired:this._onSave}
              ?disabled=${a}
              title=${p?`Jump to ${r}`:""}
            >
              ${p?o.html`<span class="btn-primary-label">Next required: ${r}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`:"Save"}
            </button>
          </div>

          ${this._confirmVisible?o.html`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${f=>f.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">You have unapplied bulk changes. Discard them?</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>Cancel</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>Discard</button>
                </div>
              </div>
            </div>
          `:o.nothing}
        </div>
      </div>
    `}};qe.styles=[yt];let b=qe;v([d.property({attribute:!1})],b.prototype,"schema");v([d.property({attribute:!1})],b.prototype,"files");v([d.property({attribute:!1})],b.prototype,"config");v([d.property({attribute:!1})],b.prototype,"autocomplete");v([d.property({attribute:!1})],b.prototype,"taxonomyService");v([d.property({attribute:!1})],b.prototype,"initialFieldKey");v([d.state()],b.prototype,"_activeFieldKey");v([d.state()],b.prototype,"_staged");v([d.state()],b.prototype,"_stagedTaxonodes");v([d.state()],b.prototype,"_selected");v([d.state()],b.prototype,"_sortAsc");v([d.state()],b.prototype,"_pendingOp");v([d.state()],b.prototype,"_confirmVisible");v([d.state()],b.prototype,"_missingRequiredFieldKey");v([d.state()],b.prototype,"_missingRequiredKeys");customElements.define("sfx-bulk-metadata-modal",b);const Be={text:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${o.svg`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${o.svg`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${o.svg`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${o.svg`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Et(l){return Be[l]??Be.text}var Tt=Object.defineProperty,j=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Tt(e,t,i),i};const Fe=class Fe extends o.LitElement{constructor(){super(...arguments),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this._collapsed=new Set,this._isNarrow=!1,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return m.isFieldRequired(e,this.config??void 0)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var s,i;if((s=super.updated)==null||s.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(i=this.renderRoot)==null?void 0:i.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){return this.schema?o.html`
      ${this.schema.groups.map(e=>{const t=this._isNarrow||!this._collapsed.has(e.uuid);return o.html`
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
          ${t?e.fields.map(s=>o.html`
                  <button
                    class="field-item ${this.activeFieldKey===s.key?"active":""}"
                    @click=${()=>this._onFieldClick(s.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${Et(s.type)}</span>
                    <span class="field-name">${s.title}</span>
                    ${this.filledFields.has(s.key)?o.html`<span class="field-dot"></span>`:o.nothing}
                    ${this._isRequired(s)?o.html`<span
                          class=${Ye.classMap({"field-required":!0,unmet:this.missingRequiredKeys.has(s.key)})}
                          aria-hidden="true"
                        >*</span>`:o.nothing}
                  </button>
                `):o.nothing}
        `})}
    `:o.nothing}};Fe.styles=[_t];let E=Fe;j([d.property({attribute:!1})],E.prototype,"schema");j([d.property({attribute:!1})],E.prototype,"activeFieldKey");j([d.property({attribute:!1})],E.prototype,"filledFields");j([d.property({attribute:!1})],E.prototype,"missingRequiredKeys");j([d.property({attribute:!1})],E.prototype,"config");j([d.state()],E.prototype,"_collapsed");j([d.state()],E.prototype,"_isNarrow");customElements.define("sfx-bulk-meta-sidebar",E);var It=Object.defineProperty,q=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&It(e,t,i),i},O;const T=(O=class extends o.LitElement{constructor(){super(...arguments),this.config=null,this.selectedCount=0,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._availableOps=[],this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var n;if(e.key!=="Enter")return;const t=(n=this.field)==null?void 0:n.type;if(!t||!O._ENTER_APPLY_TYPES.has(t))return;const s=e.composedPath().find(r=>r instanceof HTMLElement);if((s==null?void 0:s.tagName)==="TEXTAREA")return;e.preventDefault();const i=e.composedPath().find(r=>r instanceof HTMLInputElement);i&&i.value!==void 0&&(this._value=i.value),this._onApply()}}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":case"ultratags":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??O._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._availableOps=bt(this.field.type),this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((e=this.field)==null?void 0:e.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!he(this._operation,(t=this.field)==null?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?re.has((e=this.field)==null?void 0:e.type)?m.isEmpty(this._value):oe.has((t=this.field)==null?void 0:t.type)?m.isEmpty(this._value):!1:m.isEmpty(this._value)}render(){if(!this.field)return o.nothing;if(m.isUnsupportedField(this.field))return o.html`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${Z}">
            ${We}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${Z}</span>
            </div>
          </div>
        </div>
      `;const e=this._availableOps.length>1,t=this._availableOps.find(s=>s.key===this._operation);return o.html`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">Operation</span>
          ${e?o.html`
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
                  ${this._opDropdownOpen?o.html`
                        <div class="op-menu">
                          ${this._availableOps.map(s=>o.html`
                              <button
                                class="op-option ${s.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(s.key)}
                              >
                                ${s.label}
                              </button>
                            `)}
                        </div>
                      `:o.nothing}
                </div>
              `:o.html`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(t==null?void 0:t.label)??"Overwrite"}</span>
                </div>
              `}
        </div>

        ${he(this._operation,this.field.type)?o.html`
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
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:o.nothing}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `}},O.styles=[wt],O._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),O);q([d.property({attribute:!1})],T.prototype,"field");q([d.property({attribute:!1})],T.prototype,"autocomplete");q([d.property({attribute:!1})],T.prototype,"taxonomyService");q([d.property({attribute:!1})],T.prototype,"config");q([d.property({type:Number})],T.prototype,"selectedCount");q([d.state()],T.prototype,"_operation");q([d.state()],T.prototype,"_value");q([d.state()],T.prototype,"_pendingTaxonode");q([d.state()],T.prototype,"_opDropdownOpen");let At=T;customElements.define("sfx-bulk-meta-op-bar",At);var Ot=Object.defineProperty,F=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Ot(e,t,i),i};const Pe=class Pe extends o.LitElement{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):e.meta[this.field.key]}_getTaxonodeEntry(e){var s;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((s=e.taxonodes)==null?void 0:s[this.field.key])??null}render(){return o.html`
      ${this.files.map(e=>o.html`
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
          ></sfx-bulk-meta-row>
        `)}
    `}};Pe.styles=[St];let k=Pe;F([d.property({attribute:!1})],k.prototype,"files");F([d.property({attribute:!1})],k.prototype,"field");F([d.property({attribute:!1})],k.prototype,"staged");F([d.property({attribute:!1})],k.prototype,"stagedTaxonodes");F([d.property({attribute:!1})],k.prototype,"selected");F([d.property({attribute:!1})],k.prototype,"pendingOp");F([d.property({attribute:!1})],k.prototype,"config");F([d.property({attribute:!1})],k.prototype,"autocomplete");F([d.property({attribute:!1})],k.prototype,"taxonomyService");customElements.define("sfx-bulk-meta-table",k);var Dt=Object.defineProperty,I=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Dt(e,t,i),i};const Le=class Le extends o.LitElement{constructor(){super(...arguments),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this._error=null,this._onFieldBlur=e=>{var r;e.stopPropagation();const{value:t}=e.detail,s=m.validateField(this.field,t,this.config??void 0);if(s){this._error=s;return}this._error=null;const i={meta:{...this.file.meta,[this.field.key]:this.value}},n=ie(this.field,t,i,(r=this.config)==null?void 0:r.language);JSON.stringify(n)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:n},bubbles:!0,composed:!0}))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){var t;const e=this.pendingOp;return!e||!this.field?this.value:Xe(this.field,this.value,e.value,e.operation,(t=this.config)==null?void 0:t.language)}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t,s;const e=this.file;return o.html`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?o.html`<img class="row-thumb" src=${e.previewUrl} alt="" />`:o.html`<img class="row-thumb row-thumb-fallback"
              src=${m.getFileTypeIconUrl(this._getExtension(e.name))}
              alt="${this._getExtension(e.name)} file"
              @error=${i=>{const n=i.target,r=m.getDefaultFileTypeIconUrl();!n.dataset.fallback&&n.src!==r&&(n.dataset.fallback="1",n.src=r)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?m.formatFileSize(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.pendingOp&&this.selected?o.html`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .oldTaxonomyEntry=${((t=this.file.taxonodes)==null?void 0:t[this.field.key])??null}
                .newTaxonomyEntry=${this.taxonomyEntry}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:o.html`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${me(this.field,this.value,(s=this.config)==null?void 0:s.language)}
                  .autocomplete=${this.autocomplete}
                  .taxonomyService=${this.taxonomyService}
                  .taxonomyEntry=${this.taxonomyEntry}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?o.html`<div class="row-error" role="alert">${this._error}</div>`:o.nothing}`}
        </div>
      </div>
    `}};Le.styles=[kt];let _=Le;I([d.property({attribute:!1})],_.prototype,"file");I([d.property({attribute:!1})],_.prototype,"field");I([d.property({attribute:!1})],_.prototype,"value");I([d.property({attribute:!1})],_.prototype,"taxonomyEntry");I([d.property({type:Boolean})],_.prototype,"selected");I([d.property({attribute:!1})],_.prototype,"pendingOp");I([d.property({attribute:!1})],_.prototype,"config");I([d.property({attribute:!1})],_.prototype,"autocomplete");I([d.property({attribute:!1})],_.prototype,"taxonomyService");I([d.state()],_.prototype,"_error");customElements.define("sfx-bulk-meta-row",_);const zt=new Set(["multi-select","tags"]);function je(l,e,t){return!e.regional_variants_group_uuid||l==null||typeof l!="object"||Array.isArray(l)?l:l[t??"en"]}function Me(l){return Array.isArray(l)?l:[]}function Ve(l){return l==null||l===""||Array.isArray(l)&&l.length===0?!0:typeof l=="object"&&!Array.isArray(l)?!Object.values(l).some(e=>e!=null&&e!==""):!1}function ue(l,e){var s;const t=(s=l.possible_values)==null?void 0:s.find(i=>i.internal_unique_value===e||i.api_value===e);return(t==null?void 0:t.label)??String(e)}function Ue(l,e){if(e==null||e==="")return"";switch(l.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return ue(l,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Rt(l,e){const t=l.map(a=>typeof a=="string"?a:String(a)),s=e.map(a=>typeof a=="string"?a:String(a)),i=new Set(t),n=new Set(s),r=[];for(const a of s)r.push({label:a,state:i.has(a)?"kept":"added"});for(const a of t)n.has(a)||r.push({label:a,state:"removed"});return r}function qt(l,e,t){const s=new Set(l.map(r=>JSON.stringify(r))),i=new Set(e.map(r=>JSON.stringify(r))),n=[];for(const r of e){const a=JSON.stringify(r),p=typeof r=="string"?ue(t,r):String(r);n.push({label:p,state:s.has(a)?"kept":"added"})}for(const r of l){const a=JSON.stringify(r);if(!i.has(a)){const p=typeof r=="string"?ue(t,r):String(r);n.push({label:p,state:"removed"})}}return n}function Ft(l,e,t,s){const i=s==null?void 0:s.language,n=je(e,l,i),r=je(t,l,i);if(zt.has(l.type)){const a=Me(n),p=Me(r);return l.type==="tags"?{kind:"array",items:Rt(a,p)}:{kind:"array",items:qt(a,p,l)}}return{kind:"scalar",oldDisplay:Ue(l,n),newDisplay:Ue(l,r),oldEmpty:Ve(n),newEmpty:Ve(r)}}var Pt=Object.defineProperty,W=(l,e,t,s)=>{for(var i=void 0,n=l.length-1,r;n>=0;n--)(r=l[n])&&(i=r(e,t,i)||i);return i&&Pt(e,t,i),i};const Ke=class Ke extends o.LitElement{constructor(){super(...arguments),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){return o.html`
      <div class="diff-wrap" aria-label="Bulk operation preview">
        ${e.items.length===0?o.html`<span class="diff-chip diff-chip--kept diff-chip--empty">\u2014</span>`:e.items.map(t=>o.html`
                <span
                  class="diff-chip diff-chip--${t.state}"
                  aria-label="${t.state==="added"?"Added":t.state==="removed"?"Removed":"Kept"}: ${t.label}"
                >
                  ${t.state==="removed"?o.html`<s>${t.label}</s>`:t.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=`Will change from ${e.oldEmpty?"empty":e.oldDisplay} to ${e.newEmpty?"empty":e.newDisplay}`;return o.html`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${t}</span>
        ${e.newEmpty?o.nothing:o.html`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var r,a;const e=((r=this.newTaxonomyEntry)==null?void 0:r.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",s=!t,i=!e,n=`Will change from ${s?"empty":t} to ${i?"empty":e}`;return o.html`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${n}</span>
        ${i?o.nothing:o.html`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){if(!this.field)return o.nothing;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=Ft(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Ke.styles=[$t];let R=Ke;W([d.property({attribute:!1})],R.prototype,"field");W([d.property({attribute:!1})],R.prototype,"oldValue");W([d.property({attribute:!1})],R.prototype,"newValue");W([d.property({attribute:!1})],R.prototype,"oldTaxonomyEntry");W([d.property({attribute:!1})],R.prototype,"newTaxonomyEntry");W([d.property({attribute:!1})],R.prototype,"config");customElements.define("sfx-bulk-meta-diff-view",R);exports.deepMergeMeta=m.deepMergeMeta;exports.getFilesWithMissingRequired=m.getFilesWithMissingRequired;exports.isAssetHasMetadataValue=m.isAssetHasMetadataValue;exports.isEmpty=m.isEmpty;exports.validateField=m.validateField;exports.SfxBulkMetadataModal=b;exports.clearSchemaCache=it;exports.createTagsAutocomplete=rt;exports.createTaxonomyService=ot;exports.fetchMetadataSchema=et;exports.mapValueFromBackend=me;exports.mapValueToBackend=ie;exports.parseMetadataSchema=fe;
