"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("./sfx-uploader-C_eDP35p.cjs"),o=require("lit"),d=require("lit/decorators.js"),Le=require("lit/directives/class-map.js");function le(a,e,t=!1){const i=(e==null?void 0:e.language)??"en",s=a.model??[],n=a.store??{},r=s.find(u=>u.applies_to==="FILES");let l=(r==null?void 0:r.groups)??[];if(Array.isArray(e==null?void 0:e.fields)){const u=new Set(e.fields);l=l.map(x=>({...x,fields:x.fields.filter(H=>u.has(H.ckey))})).filter(x=>x.fields.length>0)}l=l.map(u=>({...u,fields:u.fields.filter(x=>!x.hide)})).filter(u=>u.fields.length>0);const p=l.flatMap(u=>u.fields),c=new Map(p.map(u=>[u.key,u])),h=n.force_filling_metadata_on_upload===!0,m=n.regional_variants_groups??[];return{groups:l,fields:p,fieldsByKey:c,forceFillingOnUpload:h,regionalVariantsGroups:m,language:i,productsEnabled:t}}const Ue="https://hub.scaleflex.com/api",N=new Map,R=new Map;async function He(a,e,t,i){const s=N.get(t);if(s)return s;const n=R.get(t);if(n)return n;if(i!=null&&i.rawMetadata){const l=le(i.rawMetadata,i,i.productsEnabled===!0);return N.set(t,l),l}const r=Je(e,t,i);R.set(t,r);try{const l=await r;return N.set(t,l),l}finally{R.delete(t)}}async function Je(a,e,t){var h,m,u,x,H;const s=`${(t==null?void 0:t.hubApiBase)??Ue}/project/${encodeURIComponent(e)}`,n=(t==null?void 0:t.hubHeaders)??a,r=await fetch(s,{headers:n});if(!r.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${r.status})`);const l=await r.json(),p=((m=(h=l.data)==null?void 0:h.project)==null?void 0:m.data)??((u=l.project)==null?void 0:u.data);if(!(p!=null&&p.metadata))throw new Error("No metadata in project response");const c=(t==null?void 0:t.productsEnabled)??((H=(x=p==null?void 0:p.airstore)==null?void 0:x.ui)==null?void 0:H.products_enabled)===!0;return le(p.metadata,t,c)}function Ge(a){var e;a?(N.delete(a),(e=R.get(a))==null||e.catch(()=>{}),R.delete(a)):(N.clear(),R.clear())}function de(a,e,t){let i=e;switch(a.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),a.type){case"geopoint":return We(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(s=>typeof s=="string"?{value:s,label:s}:s):[];case"multi-select":return i||[];default:return i??""}}function G(a,e,t,i){var n;let s;switch(a.type){case"geopoint":{const r=e;!r||r.latitude===""||r.latitude==null||r.longitude===""||r.longitude==null?s=null:s=`(${r.latitude},${r.longitude})`;break}case"boolean":e==="true"?s=!0:e==="false"?s=!1:s=null;break;case"date":{if(!e)s=null;else{const r=e instanceof Date?e:new Date(e),l=r.getFullYear(),p=String(r.getMonth()+1).padStart(2,"0"),c=String(r.getDate()).padStart(2,"0");s=`${l}-${p}-${c}`}break}case"tags":s=Array.isArray(e)?e.map(r=>(r==null?void 0:r.label)??""):[];break;case"select-one":s=e===""?null:e;break;case"numeric":{if(e===""||e==null){s=null;break}const r=Number(e);s=Number.isFinite(r)?Math.round(r):null;break}case"decimal2":{if(e===""||e==null){s=null;break}const r=Number(e);s=Number.isFinite(r)?r:null;break}default:s=e}if(a.regional_variants_group_uuid){const r=i??"en";return{...((n=t==null?void 0:t.meta)==null?void 0:n[a.key])??{},[r]:s}}return s}function We(a){if(typeof a=="string"){const e=/\(([^)]+)\)/.exec(a);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function Xe(a,e){let t=null,i=null,s=!1;return{search(n,r,l){if(t&&clearTimeout(t),i&&i.abort(),s=!1,!r.trim()){l([]);return}t=setTimeout(async()=>{var p;i=new AbortController;try{const c=`${a}/v5/metadata/autocomplete?q=${encodeURIComponent(r.trim())}&meta_key=_${encodeURIComponent(n)}&limit=20`,h=await fetch(c,{headers:e,signal:i.signal});if(s)return;if(!h.ok){l([]);return}const m=await h.json();if(s)return;const u=((p=m.data)==null?void 0:p.tags)??m.tags??[];l(u.map(x=>({sid:x.sid||void 0,value:x.tag||x.value||x.label||"",label:x.tag||x.label||x.value||""})))}catch{s||l([])}},200)},cancel(){s=!0,t&&clearTimeout(t),i&&i.abort()}}}var Qe=Object.defineProperty,K=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&Qe(e,t,s),s};const fe=class fe extends o.LitElement{constructor(){super(...arguments),this.schema=null,this.meta={},this.config=null,this.disabled=!1,this._collapsed=new Set}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_renderGroup(e){const t=!this._collapsed.has(e.uuid);return o.html`
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
                ${e.fields.map(i=>o.html`
                    <sfx-metadata-field
                      .field=${i}
                      .value=${this.meta[i.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `)}
              </div>
            `:o.nothing}
      </div>
    `}render(){return!this.schema||this.schema.groups.length===0?o.html`<div class="empty">No metadata fields configured</div>`:o.html`
      ${this.schema.groups.map(e=>this._renderGroup(e))}
    `}};fe.styles=o.css`
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
  `;let $=fe;K([d.property({attribute:!1})],$.prototype,"schema");K([d.property({attribute:!1})],$.prototype,"meta");K([d.property({attribute:!1})],$.prototype,"config");K([d.property({attribute:!1})],$.prototype,"autocomplete");K([d.property({type:Boolean})],$.prototype,"disabled");K([d.state()],$.prototype,"_collapsed");customElements.define("sfx-metadata-form",$);const U=o.css`
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
`,pe=o.css`
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
`,Ke=o.css`
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
`;const Ze=o.css`
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
`;var et=Object.defineProperty,B=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&et(e,t,s),s};const me=class me extends o.LitElement{constructor(){super(...arguments),this.config=null,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){return f.isFieldRequired(this.field,this.config??void 0)}_onFieldBlur(e){var r;const{key:t,value:i}=e.detail,s=f.validateField(this.field,i,this.config??void 0);if(s){this._error=s;return}this._error=null;const n=G(this.field,i,void 0,(r=this.config)==null?void 0:r.language);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:n},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){const i=this.disabled;if(f.isUnsupportedField(e))return o.html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return o.html`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return o.html`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return o.html`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return o.html`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"boolean":return o.html`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return o.html`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return o.html`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return o.html`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}render(){var n;const e=this.field;if(!e)return o.nothing;const t=de(e,this.value,(n=this.config)==null?void 0:n.language),s=e.type==="textarea"?"field-row field-row--top":"field-row";return o.html`
      <div class=${s} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?o.html`<span class="field-required" aria-hidden="true">*</span>`:o.nothing}
        </div>
        <div class="field-content">
          ${this._renderField(e,t)}
          ${this._error?o.html`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:o.nothing}
        </div>
      </div>
    `}};me.styles=[Ze];let C=me;B([d.property({attribute:!1})],C.prototype,"field");B([d.property({attribute:!1})],C.prototype,"value");B([d.property({attribute:!1})],C.prototype,"config");B([d.property({attribute:!1})],C.prototype,"autocomplete");B([d.property({type:Boolean})],C.prototype,"disabled");B([d.state()],C.prototype,"_error");customElements.define("sfx-metadata-field",C);var tt=Object.defineProperty,ce=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&tt(e,t,s),s};class v extends o.LitElement{constructor(){super(...arguments),this.value="",this.disabled=!1}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}ce([d.property({attribute:!1})],v.prototype,"field");ce([d.property({attribute:!1})],v.prototype,"value");ce([d.property({type:Boolean})],v.prototype,"disabled");const xe=class xe extends v{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return o.html`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};xe.styles=[U];let ee=xe;customElements.define("sfx-meta-text-field",ee);const ge=class ge extends v{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return o.html`
      <textarea
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};ge.styles=[U,o.css`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let te=ge;customElements.define("sfx-meta-textarea-field",te);var it=Object.defineProperty,he=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&it(e,t,s),s};const be=class be extends v{constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,i)=>t.label.localeCompare(i.label))}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Select ${e.toLowerCase()}`:"Select an option";return o.html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?o.html`<span class="trigger-value">${this._selectedLabel}</span>`:o.html`<span class="placeholder">${((s=this.field)==null?void 0:s.placeholder)||t}</span>`}
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
                  @mousedown=${l=>{l.preventDefault(),this._onSelect(n)}}
                  @mouseenter=${()=>{this._activeIndex=r}}>
                  ${n.label}
                </div>`):o.html`<div class="empty">No options</div>`}
        </div>
      `:o.nothing}
    `}};be.styles=[pe];let P=be;he([d.state()],P.prototype,"_open");he([d.state()],P.prototype,"_search");he([d.state()],P.prototype,"_activeIndex");customElements.define("sfx-meta-select-field",P);var st=Object.defineProperty,ue=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&st(e,t,s),s};const ve=class ve extends v{constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,i)=>t.label.localeCompare(i.label))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(s=>s!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t)}_selectAll(){const e=this._options.map(t=>t.value);this.value=e,this._emit("field-change",e)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}render(){var s,n;const e=this._selected,t=((s=this.field)==null?void 0:s.title)??"",i=t?`Select ${t.toLowerCase()}`:"Select an option";return o.html`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length?e.map(r=>o.html`
              <span class="chip">
                ${this._labelFor(r)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(r)}" @click=${l=>{l.stopPropagation(),this._remove(r)}}>&times;</button>
              </span>`):o.html`<span class="placeholder">${((n=this.field)==null?void 0:n.placeholder)||i}</span>`}
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
            ${this._filtered.length?this._filtered.map((r,l)=>o.html`
                  <div class="option ${l===this._activeIndex?"active":""}" role="option" aria-selected=${e.includes(r.value)}
                    @mousedown=${p=>{p.preventDefault(),this._toggle(r)}}
                    @mouseenter=${()=>{this._activeIndex=l}}>
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
    `}};ve.styles=[pe,Ke,o.css`
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
    `];let L=ve;ue([d.state()],L.prototype,"_open");ue([d.state()],L.prototype,"_search");ue([d.state()],L.prototype,"_activeIndex");customElements.define("sfx-meta-multi-select-field",L);function I(a,e){var t,i;return((t=a.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Be(a){return a.trim().replace(/\s+/g," ")}function rt(a){return Be(a).replace(/\s/g,"-")}function J(a){return{label:Be(a),value:rt(a)}}var ot=Object.defineProperty,j=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&ot(e,t,s),s};const ye=class ye extends v{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,s,n;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!((i=this.field)!=null&&i.ckey)){this._results=[],this._loading=!1,(s=this.autocomplete)==null||s.cancel();return}this._loading=!0,(n=this.autocomplete)==null||n.search(this.field.ckey,t,r=>{this._results=r,this._loading=!1})}_addTag(e){if(this._tags.some(i=>I(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!I(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(J(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(J(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var n;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((n=this.field)==null?void 0:n.possible_values)??[]).map(r=>({value:r.api_value||r.internal_unique_value,label:r.label})).filter(r=>!t.some(l=>I(l,r))).filter(r=>!e||r.label.toLowerCase().includes(e)),s=this._results.filter(r=>!t.some(l=>I(l,r))&&!i.some(l=>I(l,r)));return[...i,...s]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=J(e);return!this._tags.some(i=>I(i,t))&&!this._suggestions.some(i=>I(i,t))}render(){var s,n;const e=this._tags,t=this._suggestions,i=t.length;return o.html`
      <div class="container" @click=${()=>{var r;return(r=this.renderRoot.querySelector(".input"))==null?void 0:r.focus()}}>
        ${e.map(r=>o.html`
          <span class="chip">
            ${r.label}
            <button class="chip-x" aria-label="Remove ${r.label}" @click=${l=>{l.stopPropagation(),this._removeTag(r)}}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((s=this.field)==null?void 0:s.title)??"Tags"}
          placeholder=${e.length?"":((n=this.field)==null?void 0:n.placeholder)||"Add tags"}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?o.html`
        <div class="dropdown" role="listbox">
          ${this._loading?o.html`<div class="loading">Loading</div>`:o.nothing}
          ${t.map((r,l)=>o.html`
            <div class="option ${l===this._activeIndex?"active":""}" role="option"
              @mousedown=${p=>{p.preventDefault(),this._addTag(r)}}
              @mouseenter=${()=>{this._activeIndex=l}}>
              ${r.label}
            </div>`)}
          ${this._canCreate?o.html`
            <div class="option create ${i===this._activeIndex?"active":""}"
              @mousedown=${r=>{r.preventDefault(),this._addTag(J(this._query))}}
              @mouseenter=${()=>{this._activeIndex=i}}>
              Create '${this._query.trim()}'
            </div>`:o.nothing}
          ${!this._loading&&!t.length&&!this._canCreate?o.html`<div class="empty">No results</div>`:o.nothing}
        </div>
      `:o.nothing}
    `}};ye.styles=[Ke,o.css`
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
    `];let E=ye;j([d.property({attribute:!1})],E.prototype,"autocomplete");j([d.state()],E.prototype,"_query");j([d.state()],E.prototype,"_results");j([d.state()],E.prototype,"_loading");j([d.state()],E.prototype,"_dropdownOpen");j([d.state()],E.prototype,"_activeIndex");customElements.define("sfx-meta-tags-field",E);var nt=Object.defineProperty,je=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&nt(e,t,s),s};const O=[{label:"True",value:"true"},{label:"False",value:"false"}],_e=class _e extends v{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=O.find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(O.findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,O.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=O.length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<O.length&&(e.preventDefault(),this._onSelect(O[this._activeIndex],!0));break}}render(){var s,n;const e=this.value==null?"":String(this.value),t=((s=this.field)==null?void 0:s.title)??"",i=t?`Select ${t.toLowerCase()}`:"Select an option";return o.html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?o.html`<span class="trigger-value">${this._currentLabel}</span>`:o.html`<span class="placeholder">${((n=this.field)==null?void 0:n.placeholder)||i}</span>`}
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
          ${O.map((r,l)=>o.html`
            <div class="option ${r.value===e?"selected":""} ${l===this._activeIndex?"active":""}"
              role="option" aria-selected=${r.value===e}
              @mousedown=${p=>{p.preventDefault(),this._onSelect(r)}}
              @mouseenter=${()=>{this._activeIndex=l}}>
              ${r.label}
            </div>`)}
        </div>
      `:o.nothing}
    `}};_e.styles=[pe];let M=_e;je([d.state()],M.prototype,"_open");je([d.state()],M.prototype,"_activeIndex");customElements.define("sfx-meta-boolean-field",M);const we=class we extends v{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return o.html`
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
    `}};we.styles=[U];let ie=we;customElements.define("sfx-meta-number-field",ie);const ke=class ke extends v{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return o.html`
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
    `}};ke.styles=[U,o.css`
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
    `];let se=ke;customElements.define("sfx-meta-date-field",se);const $e=class $e extends v{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,s={...this._geo,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return o.html`
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
    `}};$e.styles=[U,o.css`
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
    `];let re=$e;customElements.define("sfx-meta-geo-point-field",re);const V="This field is not supported during upload. You can edit it later in the asset library.",Ne=o.html`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${o.svg`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,Ce=class Ce extends o.LitElement{render(){return o.html`
      <div
        class="unsupported"
        title=${V}
        aria-label=${V}
        aria-disabled="true"
        role="note"
      >
        ${Ne}
        <span class="unsupported-text" aria-hidden="true">Not editable during upload</span>
      </div>
    `}};Ce.styles=o.css`
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
  `;let oe=Ce;customElements.define("sfx-meta-unsupported-field",oe);var at=Object.defineProperty,W=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&at(e,t,s),s};const Ee=class Ee extends o.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(f.isUnsupportedField(e))return o.html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return o.html`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return o.html`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return o.html`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return o.html`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"boolean":return o.html`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return o.html`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return o.html`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return o.html`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return o.html`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}};Ee.styles=o.css`
    :host { display: block; }
  `;let z=Ee;W([d.property({attribute:!1})],z.prototype,"field");W([d.property({attribute:!1})],z.prototype,"value");W([d.property({attribute:!1})],z.prototype,"autocomplete");W([d.property({type:Boolean})],z.prototype,"disabled");customElements.define("sfx-metadata-field-edit",z);var lt=Object.defineProperty,Me=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&lt(e,t,s),s};const Se=class Se extends o.LitElement{_formatValue(){var i,s;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const n=Number(e);return Number.isFinite(n)?n.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const n=(s=this.field.possible_values)==null?void 0:s.find(r=>r.internal_unique_value===e||r.api_value===e);return(n==null?void 0:n.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(n=>{var l;const r=(l=this.field.possible_values)==null?void 0:l.find(p=>p.internal_unique_value===n||p.api_value===n);return(r==null?void 0:r.label)??String(n)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(n=>n.label||n.value).join(", ");case"geopoint":{const n=e;return!n||n.latitude===""||n.latitude==null||n.longitude===""||n.longitude==null?"":`(${n.latitude}, ${n.longitude})`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&f.isUnsupportedField(this.field))return o.html`
        <div class="value empty" title=${V}>
          Not editable during upload
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?o.html`
        <div class="value">
          <a class="link" href=${e} target="_blank" rel="noopener noreferrer"
            @click=${s=>s.stopPropagation()}
          >${e}</a>
        </div>
      `:o.html`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};Se.styles=o.css`
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
  `;let Y=Se;Me([d.property({attribute:!1})],Y.prototype,"field");Me([d.property({attribute:!1})],Y.prototype,"value");customElements.define("sfx-metadata-field-view",Y);const X=new Set(["multi-select","tags","integer-list"]),Q=new Set(["text","textarea","attachment-uri"]);function dt(a){return f.isUnsupportedFieldType(a)?[]:X.has(a)?[{key:"SET",label:"Set"},{key:"ADD",label:"Add to"},{key:"DELETE",label:"Remove from"}]:Q.has(a)?[{key:"SET",label:"Set"},{key:"ADD",label:"Append"},{key:"DELETE",label:"Remove"}]:[{key:"SET",label:"Set"},{key:"DELETE",label:"Clear"}]}function ne(a,e){return a==="DELETE"?X.has(e)||Q.has(e):!0}function pt(a,e,t,i){const s=X.has(i),n=Q.has(i);switch(a){case"SET":return t;case"ADD":{if(s){const r=Array.isArray(e)?e:[],l=Array.isArray(t)?t:[];if(l.length===0)return r;if(i==="tags"){const h=new Set(r.map(u=>u)),m=[...r];for(const u of l){const x=typeof u=="string"?u:String(u);h.has(x)||(h.add(x),m.push(x))}return m}const p=new Set(r.map(h=>JSON.stringify(h))),c=[...r];for(const h of l){const m=JSON.stringify(h);p.has(m)||(p.add(m),c.push(h))}return c}if(n){const r=typeof t=="string"?t:"";if(!r)return e??"";const l=typeof e=="string"?e:"";return l?`${l} ${r}`:r}return t}case"DELETE":{if(s){const r=Array.isArray(e)?e:[],l=Array.isArray(t)?t:[];if(l.length===0)return r;if(i==="tags"){const c=new Set(l.map(h=>typeof h=="string"?h:String(h)));return r.filter(h=>!c.has(typeof h=="string"?h:String(h)))}const p=new Set(l.map(c=>JSON.stringify(c)));return r.filter(c=>!p.has(JSON.stringify(c)))}if(n){const r=typeof t=="string"?t:"";return r?(typeof e=="string"?e:"").replaceAll(r,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function Ve(a,e,t,i,s){const n=s??"en",r=!!a.regional_variants_group_uuid,l={meta:{[a.key]:e}},p=G(a,t,l,s),c=x=>r&&x!==null&&typeof x=="object"&&!Array.isArray(x),h=c(e)?e[n]:e,m=c(p)?p[n]:p,u=pt(i,h,m,a.type);return r?{...c(e)?e:{},[n]:u}:u}const Ye=o.css`
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
`,ct=o.css`
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

  ${Ye}
`,ht=o.css`
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
`,ut=o.css`
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
`,ft=o.css`
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

  ${Ye}
`,mt=o.css`
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
`,xt=o.css`
  :host {
    display: block;
  }
`;var gt=Object.defineProperty,b=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&gt(e,t,s),s};const Ae=class Ae extends o.LitElement{constructor(){super(...arguments),this.files=[],this.config=null,this.initialFieldKey=null,this._activeFieldKey="",this._staged=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()},this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var l,p;if(e.key!=="Tab")return;const t=(l=this.shadowRoot)==null?void 0:l.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const s=i[0],n=i[i.length-1],r=(p=this.shadowRoot)==null?void 0:p.activeElement;e.shiftKey&&r===s?(e.preventDefault(),n.focus()):!e.shiftKey&&r===n&&(e.preventDefault(),s.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,s=this._activeField;f.isEmpty(i)&&(!s||ne(t,s.type))?this._pendingOp=null:this._pendingOp={operation:t,value:i}},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e)},this._onBulkApply=e=>{var l;const t=this._activeField;if(!t)return;const{operation:i,value:s}=e.detail,n=(l=this.config)==null?void 0:l.language,r=[];for(const p of this._selected){const c=this._staged.get(p),h=c!=null&&c.has(t.key)?c.get(t.key):this._originalValue(p,t.key)??null,m=Ve(t,h,s,i,n);r.push([p,t.key,m])}this._setStagedBulk(r)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||!await this._confirmDiscardPending())return;const e=[],t=[];for(const[i,s]of this._staged){if(!this._originalFiles.get(i))continue;const r={},l={};for(const[p,c]of s){const h=this._originalValue(i,p);if(JSON.stringify(c)!==JSON.stringify(h))if(f.isProductFieldKey(p)){const m=f.productKeyOf(p);if(!m)continue;const u=c===""||c==null;m==="position"?l.position=u?void 0:Number(c):l.ref=u?void 0:String(c)}else r[p]=c}Object.keys(r).length>0&&e.push({fileId:i,meta:r}),Object.keys(l).length>0&&t.push({fileId:i,product:l})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null}_initStaged(){var r,l;const e=new Map,t=new Set,i=new Map,s=((r=this.schema)==null?void 0:r.productsEnabled)===!0;for(const p of this.files){const c=new Map;if(p.meta)for(const[h,m]of Object.entries(p.meta))c.set(h,m);if(s){const h=p.product;h.ref!==void 0&&c.set(f.PRODUCT_REF_FIELD_KEY,h.ref),h.position!==void 0&&c.set(f.PRODUCT_POSITION_FIELD_KEY,h.position)}e.set(p.id,c),t.add(p.id),i.set(p.id,p)}this._staged=e,this._selected=t,this._originalFiles=i;const n=this.initialFieldKey;n&&((l=this.schema)!=null&&l.fieldsByKey.has(n))?this._activeFieldKey=n:this.schema&&this.schema.fields.length>0&&(this._activeFieldKey=this.schema.fields[0].key)}_setStagedValue(e,t,i){const s=new Map(this._staged),n=new Map(s.get(e)??new Map);n.set(t,i),s.set(e,n),this._staged=s}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,s,n]of e){const r=new Map(t.get(i)??new Map);r.set(s,n),t.set(i,r)}this._staged=t}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}_originalValue(e,t){var s,n;const i=this._originalFiles.get(e);if(i){if(f.isProductFieldKey(t)){const r=f.productKeyOf(t);return r?(s=i.product)==null?void 0:s[r]:void 0}return(n=i.meta)==null?void 0:n[t]}}_refreshMissingRequired(){const e=this.schema?f.missingRequiredFieldKeysInStaged(this._staged,this._originalFiles,this.schema,this.config??void 0):new Set;let t=null;if(this.schema&&e.size>0){for(const n of this.schema.fields)if(e.has(n.key)){t=n.key;break}}t!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=t);const i=this._missingRequiredKeys;let s=i.size!==e.size;if(!s){for(const n of e)if(!i.has(n)){s=!0;break}}s&&(this._missingRequiredKeys=e)}get _filledFields(){var t;const e=new Set;for(const i of((t=this.schema)==null?void 0:t.fields)??[])for(const[s,n]of this._staged){const r=n.get(i.key),l=this._originalValue(s,i.key);if(r!==void 0&&!f.isEmpty(r)&&JSON.stringify(r)!==JSON.stringify(l)){e.add(i.key);break}}return e}get _hasPendingValue(){return this._pendingOp!=null&&!f.isEmpty(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0}):Promise.resolve(!0)}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config"))&&this._refreshMissingRequired()}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var s;const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".fm-confirm .btn-ghost");i==null||i.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}get _sortedFiles(){const e=[...this.files];return e.sort((t,i)=>{const s=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?s:-s}),e}render(){var c,h,m;if(!((h=(c=this.schema)==null?void 0:c.fields)!=null&&h.length))return o.html`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${u=>u.stopPropagation()}>
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
      `;const e=this._activeField,t=this._sortedFiles,i=this._selected.size===this.files.length&&this.files.length>0,s=this._selected.size>0&&!i,n=this._missingRequiredFieldKey,r=n?((m=this.schema.fieldsByKey.get(n))==null?void 0:m.title)||n:"",l=n!=null&&this._activeFieldKey===n,p=n!=null&&!l;return o.html`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${u=>u.stopPropagation()}>
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
                ${e?o.html`
                      <sfx-bulk-meta-table
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
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
              class=${Le.classMap({"btn-primary":!0,"btn-primary--next":p})}
              @click=${p?this._onJumpToNextRequired:this._onSave}
              ?disabled=${l}
              title=${p?`Jump to ${r}`:""}
            >
              ${p?o.html`<span class="btn-primary-label">Next required: ${r}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`:"Save"}
            </button>
          </div>

          ${this._confirmVisible?o.html`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${u=>u.stopPropagation()}>
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
    `}};Ae.styles=[ct];let g=Ae;b([d.property({attribute:!1})],g.prototype,"schema");b([d.property({attribute:!1})],g.prototype,"files");b([d.property({attribute:!1})],g.prototype,"config");b([d.property({attribute:!1})],g.prototype,"autocomplete");b([d.property({attribute:!1})],g.prototype,"initialFieldKey");b([d.state()],g.prototype,"_activeFieldKey");b([d.state()],g.prototype,"_staged");b([d.state()],g.prototype,"_selected");b([d.state()],g.prototype,"_sortAsc");b([d.state()],g.prototype,"_pendingOp");b([d.state()],g.prototype,"_confirmVisible");b([d.state()],g.prototype,"_missingRequiredFieldKey");b([d.state()],g.prototype,"_missingRequiredKeys");customElements.define("sfx-bulk-metadata-modal",g);const Te={text:o.html`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
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
  </svg>`};function bt(a){return Te[a]??Te.text}var vt=Object.defineProperty,T=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&vt(e,t,s),s};const Ie=class Ie extends o.LitElement{constructor(){super(...arguments),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this._collapsed=new Set,this._isNarrow=!1,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){return f.isFieldRequired(e,this.config??void 0)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,s;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(s=this.renderRoot)==null?void 0:s.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){return this.schema?o.html`
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
          ${t?e.fields.map(i=>o.html`
                  <button
                    class="field-item ${this.activeFieldKey===i.key?"active":""}"
                    @click=${()=>this._onFieldClick(i.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${bt(i.type)}</span>
                    <span class="field-name">${i.title}</span>
                    ${this.filledFields.has(i.key)?o.html`<span class="field-dot"></span>`:o.nothing}
                    ${this._isRequired(i)?o.html`<span
                          class=${Le.classMap({"field-required":!0,unmet:this.missingRequiredKeys.has(i.key)})}
                          aria-hidden="true"
                        >*</span>`:o.nothing}
                  </button>
                `):o.nothing}
        `})}
    `:o.nothing}};Ie.styles=[ht];let _=Ie;T([d.property({attribute:!1})],_.prototype,"schema");T([d.property({attribute:!1})],_.prototype,"activeFieldKey");T([d.property({attribute:!1})],_.prototype,"filledFields");T([d.property({attribute:!1})],_.prototype,"missingRequiredKeys");T([d.property({attribute:!1})],_.prototype,"config");T([d.state()],_.prototype,"_collapsed");T([d.state()],_.prototype,"_isNarrow");customElements.define("sfx-bulk-meta-sidebar",_);var yt=Object.defineProperty,F=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&yt(e,t,s),s},k;const S=(k=class extends o.LitElement{constructor(){super(...arguments),this.config=null,this.selectedCount=0,this._operation="SET",this._value=void 0,this._opDropdownOpen=!1,this._availableOps=[],this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var n;if(e.key!=="Enter")return;const t=(n=this.field)==null?void 0:n.type;if(!t||!k._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(r=>r instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const s=e.composedPath().find(r=>r instanceof HTMLInputElement);s&&s.value!==void 0&&(this._value=s.value),this._onApply()}}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"integer-list":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"ultratags":case"taxonomy-node":return null;default:return""}}get _effectiveValue(){var e;return this._value??k._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._availableOps=dt(this.field.type),this._operation="SET",this._value=void 0,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0})),this._value=void 0,this._operation==="DELETE"&&!ne(this._operation,(e=this.field)==null?void 0:e.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?X.has((e=this.field)==null?void 0:e.type)?f.isEmpty(this._value):Q.has((t=this.field)==null?void 0:t.type)?f.isEmpty(this._value):!1:f.isEmpty(this._value)}render(){if(!this.field)return o.nothing;if(f.isUnsupportedField(this.field))return o.html`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${V}">
            ${Ne}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${V}</span>
            </div>
          </div>
        </div>
      `;const e=this._availableOps.length>1,t=this._availableOps.find(i=>i.key===this._operation);return o.html`
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
                          ${this._availableOps.map(i=>o.html`
                              <button
                                class="op-option ${i.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(i.key)}
                              >
                                ${i.label}
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

        ${ne(this._operation,this.field.type)?o.html`
              <div class="op-field op-field--value">
                <span class="op-field-label">${this.field.title}</span>
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
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
    `}},k.styles=[ut],k._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),k);F([d.property({attribute:!1})],S.prototype,"field");F([d.property({attribute:!1})],S.prototype,"autocomplete");F([d.property({attribute:!1})],S.prototype,"config");F([d.property({type:Number})],S.prototype,"selectedCount");F([d.state()],S.prototype,"_operation");F([d.state()],S.prototype,"_value");F([d.state()],S.prototype,"_opDropdownOpen");let _t=S;customElements.define("sfx-bulk-meta-op-bar",_t);var wt=Object.defineProperty,q=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&wt(e,t,s),s};const Oe=class Oe extends o.LitElement{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.selected=new Set,this.pendingOp=null,this.config=null}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):e.meta[this.field.key]}render(){return o.html`
      ${this.files.map(e=>o.html`
          <sfx-bulk-meta-row
            .file=${e}
            .field=${this.field}
            .value=${this._getEffectiveValue(e)}
            .selected=${this.selected.has(e.id)}
            .pendingOp=${this.pendingOp}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
          ></sfx-bulk-meta-row>
        `)}
    `}};Oe.styles=[xt];let w=Oe;q([d.property({attribute:!1})],w.prototype,"files");q([d.property({attribute:!1})],w.prototype,"field");q([d.property({attribute:!1})],w.prototype,"staged");q([d.property({attribute:!1})],w.prototype,"selected");q([d.property({attribute:!1})],w.prototype,"pendingOp");q([d.property({attribute:!1})],w.prototype,"config");q([d.property({attribute:!1})],w.prototype,"autocomplete");customElements.define("sfx-bulk-meta-table",w);var kt=Object.defineProperty,A=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&kt(e,t,s),s};const ze=class ze extends o.LitElement{constructor(){super(...arguments),this.selected=!1,this.pendingOp=null,this.config=null,this._error=null,this._onFieldBlur=e=>{var r;e.stopPropagation();const{value:t}=e.detail,i=f.validateField(this.field,t,this.config??void 0);if(i){this._error=i;return}this._error=null;const s={meta:{...this.file.meta,[this.field.key]:this.value}},n=G(this.field,t,s,(r=this.config)==null?void 0:r.language);JSON.stringify(n)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:n},bubbles:!0,composed:!0}))}}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){var t;const e=this.pendingOp;return!e||!this.field?this.value:Ve(this.field,this.value,e.value,e.operation,(t=this.config)==null?void 0:t.language)}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t;const e=this.file;return o.html`
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
              src=${f.getFileTypeIconUrl(this._getExtension(e.name))}
              alt="${this._getExtension(e.name)} file"
              @error=${i=>{const s=i.target,n=f.getDefaultFileTypeIconUrl();!s.dataset.fallback&&s.src!==n&&(s.dataset.fallback="1",s.src=n)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?f.formatFileSize(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
        >
          ${this.pendingOp&&this.selected?o.html`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:o.html`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${de(this.field,this.value,(t=this.config)==null?void 0:t.language)}
                  .autocomplete=${this.autocomplete}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?o.html`<div class="row-error" role="alert">${this._error}</div>`:o.nothing}`}
        </div>
      </div>
    `}};ze.styles=[ft];let y=ze;A([d.property({attribute:!1})],y.prototype,"file");A([d.property({attribute:!1})],y.prototype,"field");A([d.property({attribute:!1})],y.prototype,"value");A([d.property({type:Boolean})],y.prototype,"selected");A([d.property({attribute:!1})],y.prototype,"pendingOp");A([d.property({attribute:!1})],y.prototype,"config");A([d.property({attribute:!1})],y.prototype,"autocomplete");A([d.state()],y.prototype,"_error");customElements.define("sfx-bulk-meta-row",y);const $t=new Set(["multi-select","tags","integer-list"]);function Fe(a,e,t){return!e.regional_variants_group_uuid||a==null||typeof a!="object"||Array.isArray(a)?a:a[t??"en"]}function qe(a){return Array.isArray(a)?a:[]}function Re(a){return a==null||a===""||Array.isArray(a)&&a.length===0?!0:typeof a=="object"&&!Array.isArray(a)?!Object.values(a).some(e=>e!=null&&e!==""):!1}function ae(a,e){var i;const t=(i=a.possible_values)==null?void 0:i.find(s=>s.internal_unique_value===e||s.api_value===e);return(t==null?void 0:t.label)??String(e)}function Pe(a,e){if(e==null||e==="")return"";switch(a.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return ae(a,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Ct(a,e){const t=a.map(l=>typeof l=="string"?l:String(l)),i=e.map(l=>typeof l=="string"?l:String(l)),s=new Set(t),n=new Set(i),r=[];for(const l of i)r.push({label:l,state:s.has(l)?"kept":"added"});for(const l of t)n.has(l)||r.push({label:l,state:"removed"});return r}function Et(a,e,t){const i=new Set(a.map(r=>JSON.stringify(r))),s=new Set(e.map(r=>JSON.stringify(r))),n=[];for(const r of e){const l=JSON.stringify(r),p=typeof r=="string"?ae(t,r):String(r);n.push({label:p,state:i.has(l)?"kept":"added"})}for(const r of a){const l=JSON.stringify(r);if(!s.has(l)){const p=typeof r=="string"?ae(t,r):String(r);n.push({label:p,state:"removed"})}}return n}function St(a,e,t,i){const s=i==null?void 0:i.language,n=Fe(e,a,s),r=Fe(t,a,s);if($t.has(a.type)){const l=qe(n),p=qe(r);return a.type==="tags"?{kind:"array",items:Ct(l,p)}:{kind:"array",items:Et(l,p,a)}}return{kind:"scalar",oldDisplay:Pe(a,n),newDisplay:Pe(a,r),oldEmpty:Re(n),newEmpty:Re(r)}}var At=Object.defineProperty,Z=(a,e,t,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(e,t,s)||s);return s&&At(e,t,s),s};const De=class De extends o.LitElement{constructor(){super(...arguments),this.config=null}_renderArrayDiff(e){return o.html`
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
    `}render(){if(!this.field)return o.nothing;const e=St(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};De.styles=[mt];let D=De;Z([d.property({attribute:!1})],D.prototype,"field");Z([d.property({attribute:!1})],D.prototype,"oldValue");Z([d.property({attribute:!1})],D.prototype,"newValue");Z([d.property({attribute:!1})],D.prototype,"config");customElements.define("sfx-bulk-meta-diff-view",D);exports.deepMergeMeta=f.deepMergeMeta;exports.getFilesWithMissingRequired=f.getFilesWithMissingRequired;exports.isAssetHasMetadataValue=f.isAssetHasMetadataValue;exports.isEmpty=f.isEmpty;exports.validateField=f.validateField;exports.SfxBulkMetadataModal=g;exports.clearSchemaCache=Ge;exports.createTagsAutocomplete=Xe;exports.fetchMetadataSchema=He;exports.mapValueFromBackend=de;exports.mapValueToBackend=G;exports.parseMetadataSchema=le;
