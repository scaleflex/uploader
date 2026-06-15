import{p as $t,c as l,i as P,I as G,a as _,q as Bt,t as St,A as x,u as h,n as u,r as m,v as Ct,w as Et,x as ee,y as we,z as Kt,B as S,C as Nt,D as ne,E as ht,P as Mt,F as jt,G as Vt,H as Ut,J as It,K as ft,L as Ht,M as Gt,N as Yt}from"./index-B2xh3pMk.js";import{O as gs,Q as xs,R as ms}from"./index-B2xh3pMk.js";function Tt(n,e,t=!1){const i=(e==null?void 0:e.language)??"en",s=n.model??[],r=n.store??{},o=s.find(g=>g.applies_to==="FILES");let a=(o==null?void 0:o.groups)??[];if(Array.isArray(e==null?void 0:e.fields)){const g=new Set(e.fields);a=a.map(v=>({...v,fields:v.fields.filter(y=>g.has(y.ckey))})).filter(v=>v.fields.length>0)}a=a.map(g=>({...g,fields:g.fields.filter(v=>!v.hide)})).filter(g=>g.fields.length>0);const d=a.flatMap(g=>g.fields),c=new Map(d.map(g=>[g.key,g])),p=typeof r.force_filling_metadata_on_upload=="boolean"?r.force_filling_metadata_on_upload:void 0,f=r.regional_variants_groups??[];return{groups:a,fields:d,fieldsByKey:c,forceFillingOnUpload:p,regionalVariantsGroups:f,language:i,productsEnabled:t}}const ze="https://hub.scaleflex.com/api",At="The Hub API uses session-based auth (not the Filerobot SASS key); pass metadataConfig.hubHeaders with x-company-token, x-project-token and x-session-token. If the session token arrives asynchronously, assign a new config object once it is available — in-place mutation is not detected.",Jt=n=>n.replace(/\/+$/,"");function qe(n){return!n||Jt(n)===ze}function Be(n){const e=n==null?void 0:n.hubHeaders;return e&&Object.keys(e).length>0?e:void 0}function Ot(n){return Object.keys(n).some(e=>e.toLowerCase()==="x-session-token")}function ss(n){return Be(n)?!0:!qe(n==null?void 0:n.hubApiBase)}const ue=new Map,ae=new Map;function rs(n){return ue.has(n)}async function os(n,e,t,i){if(i!=null&&i.rawMetadata)return Tt(i.rawMetadata,i,i.productsEnabled===!0);const s=ue.get(t);if(s)return s;const r=ae.get(t);if(r)return r;const o=Qt(e,t,i);ae.set(t,o);try{const a=await o;return ue.set(t,a),a}finally{ae.delete(t)}}async function Qt(n,e,t){var p,f,g,v,y;const i=(t==null?void 0:t.hubApiBase)??ze,s=`${i}/project/${encodeURIComponent(e)}`,r=Be(t)??n;if(qe(i)&&!Ot(r))throw new Error(`Cannot fetch the metadata schema: no Hub session headers. ${At}`);const o=await fetch(s,{headers:r});if(!o.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${o.status})`);const a=await o.json(),d=((f=(p=a.data)==null?void 0:p.project)==null?void 0:f.data)??((g=a.project)==null?void 0:g.data);if(!(d!=null&&d.metadata))throw new Error("No metadata in project response");const c=(t==null?void 0:t.productsEnabled)??((y=(v=d==null?void 0:d.airstore)==null?void 0:v.ui)==null?void 0:y.products_enabled)===!0;return Tt(d.metadata,t,c)}function ns(n){var e;n?(ue.delete(n),(e=ae.get(n))==null||e.catch(()=>{}),ae.delete(n)):(ue.clear(),ae.clear())}const Wt=new Set(["image","video","audio","document","archive","design_template"]);function Xt(n){if(!n||Array.isArray(n))return[];const e=n.format_mimetypes;return Array.isArray(e)?e.filter(t=>Wt.has(t)):[]}function Zt(n){const e={type:n.dep_action_type,targetCkey:n.dep_action_target_metadata_or_group_sys_key,targetFieldType:n.dep_action_target_metadata_field_type_key};return n.dep_action_type==="allow_values"&&(e.allowedValues=n.dep_action_target_field_allowed_values_sys_keys??[]),n.dep_action_type==="set_values"&&(e.setValues=n.dep_action_target_field_set_values_sys_keys??n.dep_action_target_field_allowed_set_sys_keys??[]),e}function ei(n){const e=n.dep_metadata_trigger_values_sys_keys??n.dep_metadata_trigger_values??[];return{uuid:n.dep_uuid,name:n.dep_name,description:n.dep_description,active:n.dep_active,formatMimetypes:Xt(n.dep_scope),triggerCkey:n.dep_metadata_trigger_sys_key,triggerFieldType:n.dep_metadata_trigger_field_type_key,triggerCondition:n.dep_metadata_trigger_condition_key,triggerValues:e,actions:(n.dep_actions??[]).map(Zt)}}function ti(n){if(!n)return[];const e=Array.isArray(n)?n:n.dependencies;return Array.isArray(e)?e.filter(t=>t==null?void 0:t.dep_active).map(ei):[]}function ii(n,e,t){if(n.length===0||t.length===0)return new Map;const i=n.map(o=>$t({mime:o.mime,meta:o.meta},e,t)),s=new Map,r=new Set;for(const o of i)for(const a of o.keys())r.add(a);for(const o of r){const a=i.map(b=>b.get(o)),d=a.every(b=>(b==null?void 0:b.hidden)===!0),c=a.some(b=>(b==null?void 0:b.required)===!0);let p;if(a.every(b=>Array.isArray(b==null?void 0:b.allowedValues))){let b;for(const re of a){const J=re.allowedValues;if(b=b===void 0?[...J]:b.filter(qt=>J.includes(qt)),b.length===0)break}p=b}let g;const v=a.map(b=>b==null?void 0:b.setValue).filter(b=>b!==void 0);v.length===n.length&&si(v)&&(g=v[0]);const y=new Set;for(const b of a)if(b)for(const re of b.contributingDependencyUuids)y.add(re);const E={hidden:d,required:c,contributingDependencyUuids:[...y]};p!==void 0&&(E.allowedValues=p),g!==void 0&&(E.setValue=g),s.set(o,E)}return s}function si(n){if(n.length<=1)return!0;const e=n[0];if(typeof e=="string")return n.every(i=>i===e);const t=new Set(e);return n.every(i=>{if(!Array.isArray(i)||i.length!==e.length)return!1;for(const s of i)if(!t.has(s))return!1;return!0})}const pe=new Map,le=new Map;function as(n){return pe.has(n)}async function ls(n,e,t){const i=pe.get(n);if(i)return i;const s=le.get(n);if(s)return s;const r=ri(e,t);le.set(n,r);try{const o=await r;return pe.set(n,o),o}finally{le.delete(n)}}async function ri(n,e){const t=(e==null?void 0:e.hubApiBase)??ze,i=`${t}/metadata/dependencies`,s=Be(e)??n;if(qe(t)&&!Ot(s))throw new Error(`Cannot fetch metadata dependencies: no Hub session headers. ${At}`);const r=await fetch(i,{headers:s});if(!r.ok)throw new Error(`Failed to fetch metadata dependencies (HTTP ${r.status})`);const o=await r.json();return ti(o)}function ds(n){var e;n?(pe.delete(n),(e=le.get(n))==null||e.catch(()=>{}),le.delete(n)):(pe.clear(),le.clear())}const oi=300,gt=2,ni=50,xt="regvar:api",ai="#ut",li={CREATE_ONLY:"create_only",UPSERT:"upsert"},di=n=>typeof n=="string"&&n.startsWith(ai),ve=n=>`~${n.toUpperCase()}`,ci=(n,e)=>{if(!(!n||!e))return n[e]??n[ve(e)]},ye=(n,e,t)=>{var o,a,d;const i=(o=n.i18n)==null?void 0:o[e];if(i)return{value:i,isFallback:!1,sourceLang:e};const s=(a=n.i18n)==null?void 0:a[ve(e)];if(s)return{value:s,isFallback:!0,sourceLang:ve(e)};const r=ci(n.i18n,t);if(r){const c=(d=n.i18n)!=null&&d[t]?t:ve(t);return{value:r,isFallback:!0,sourceLang:c}}return{value:"",isFallback:!1,sourceLang:null}},mt=n=>(typeof n=="string"?n:"").toLowerCase().trim().replace(/[^\d\w]/g,"_").replace(/[\s]/g,"_").replace(/[_]{2,}/g,"_").replace(/[_]*$/g,"").replace(/^[_]*/g,""),ui=n=>{const e={},t={};for(const i of n||[])i.sid&&(e[i.sid]=i),i.slug&&(t[i.slug]=i);return{bySid:e,bySlug:t}},_e=n=>{const e=[],t=new Map,i=r=>r.sid||r.slug||"",s=(r,o)=>{if(typeof r=="string"){if(!r||t.has(r))return;t.set(r,e.length),e.push({slug:r});return}if(!r||typeof r!="object")return;const a=r,d=i(a);if(!d)return;const c=t.get(d),p=c!==void 0?{...e[c]}:{};a.slug&&(p.slug=a.slug),a.sid&&(p.sid=a.sid),a.uuid&&(p.uuid=a.uuid);const f={...p.i18n,...a.i18n||{}};o&&a.label&&(f[o]=a.label),Object.keys(f).length>0&&(p.i18n=f),c!==void 0?e[c]=p:(t.set(d,e.length),a.slug&&a.slug!==d&&t.set(a.slug,e.length),e.push(p))};if(Array.isArray(n))for(const r of n)s(r);else if(n&&typeof n=="object"){const r=n;for(const[o,a]of Object.entries(r))if(Array.isArray(a))for(const d of a)s(d,o)}return e},me=n=>typeof n=="string"?[n]:!n||typeof n!="object"?[]:[n.sid,n.slug,n.uuid].filter(Boolean),Ie=(n,e,t)=>{if(t){const r=new Set(e.flatMap(me));return n.filter(o=>!me(o).some(a=>r.has(a)))}const i=new Set(n.flatMap(me)),s=e.filter(r=>!me(r).some(o=>i.has(o)));return[...n,...s]},pi=(n,e)=>n.map(t=>{const i=t.sid&&e.bySid[t.sid]||t.slug&&e.bySlug[t.slug]||void 0;return i?{slug:t.slug||i.slug,sid:t.sid||i.sid,uuid:t.uuid||i.uuid,i18n:{...i.i18n||{},...t.i18n||{}}}:t});function Rt(n,e,t){let i=e;switch(n.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),n.type){case"geopoint":return hi(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(s=>typeof s=="string"?{value:s,label:s}:s):[];case"ultratags":return _e(e);case"multi-select":return i||[];default:return i??""}}function Ke(n,e,t,i){var r;let s;switch(n.type){case"geopoint":{const o=e;!o||o.latitude===""||o.latitude==null||o.longitude===""||o.longitude==null?s=null:s=`(${o.latitude},${o.longitude})`;break}case"boolean":e==="true"?s=!0:e==="false"?s=!1:s=null;break;case"date":{if(!e)s=null;else{const o=e instanceof Date?e:new Date(e),a=o.getFullYear(),d=String(o.getMonth()+1).padStart(2,"0"),c=String(o.getDate()).padStart(2,"0");s=`${a}-${d}-${c}`}break}case"tags":s=Array.isArray(e)?e.map(o=>(o==null?void 0:o.label)??""):[];break;case"ultratags":s=Array.isArray(e)?e.map(o=>typeof o=="string"?o:o.slug).filter(o=>!!o):[];break;case"select-one":s=e===""?null:e;break;case"numeric":{if(e===""||e==null){s=null;break}const o=Number(e);s=Number.isFinite(o)?Math.round(o):null;break}case"decimal2":{if(e===""||e==null){s=null;break}const o=Number(e);s=Number.isFinite(o)?o:null;break}default:s=e}if(n.regional_variants_group_uuid&&n.type!=="ultratags"){const o=i??"en";return{...((r=t==null?void 0:t.meta)==null?void 0:r[n.key])??{},[o]:s}}return s}function hi(n){if(typeof n=="string"){const e=/\(([^)]+)\)/.exec(n);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function cs(n,e){const t=n.replace(/\/$/,"");let i=null,s=null,r=!1;return{search(o,a,d){if(i&&clearTimeout(i),s&&s.abort(),r=!1,!a.trim()){d([]);return}i=setTimeout(async()=>{var c;s=new AbortController;try{const p=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(a.trim())}&meta_key=_${encodeURIComponent(o)}&limit=20`,f=await fetch(p,{headers:e,signal:s.signal});if(r)return;if(!f.ok){d([]);return}const g=await f.json();if(r)return;const v=((c=g.data)==null?void 0:c.tags)??g.tags??[];d(v.map(y=>({sid:y.sid||void 0,value:y.tag||y.value||y.label||"",label:y.tag||y.label||y.value||""})))}catch{r||d([])}},200)},cancel(){r=!0,i&&clearTimeout(i),s&&s.abort()}}}const bt={base_node:null,nodes:[]};function us(n,e){const t=n.replace(/\/$/,"");let i=null,s=null,r=!1,o=null,a=null;return{fetchTaxonomies(){return a||(a=(async()=>{var c;const d=`${t}/v5/taxonomies`;try{const p=await fetch(d,{headers:e});if(!p.ok)return console.warn(`[sfx-uploader] /v5/taxonomies returned ${p.status}`),[];const f=await p.json(),g=(f==null?void 0:f.taxonomies)??((c=f==null?void 0:f.data)==null?void 0:c.taxonomies)??(f==null?void 0:f.data)??f;return Array.isArray(g)?g:(console.warn("[sfx-uploader] /v5/taxonomies returned unexpected shape",f),[])}catch(p){return console.warn("[sfx-uploader] /v5/taxonomies request failed",p),[]}})(),a.then(d=>{d.length===0&&(a=null)},()=>{a=null}),a)},async fetchNodes(d,c="",p=10){o&&o.abort(),o=new AbortController;try{const f=new URLSearchParams;c&&f.set("base",c),f.set("limit",String(p));const g=`${t}/v5/taxonomy/${encodeURIComponent(d)}/nodes?${f.toString()}`,v=await fetch(g,{headers:e,signal:o.signal});if(!v.ok)return bt;const y=await v.json(),E=(y==null?void 0:y.data)??y;return{base_node:(E==null?void 0:E.base_node)??null,nodes:Array.isArray(E==null?void 0:E.nodes)?E.nodes:[]}}catch{return bt}},autocomplete(d,c,p){if(i&&clearTimeout(i),s&&s.abort(),r=!1,!c.trim()){p([]);return}i=setTimeout(async()=>{var f;s=new AbortController;try{const g=`${t}/v5/metadata/autocomplete?q=${encodeURIComponent(c.trim())}&meta_key=_${encodeURIComponent(d)}`,v=await fetch(g,{headers:e,signal:s.signal});if(r)return;if(!v.ok){p([]);return}const y=await v.json();if(r)return;const E=((f=y==null?void 0:y.data)==null?void 0:f.tags)??(y==null?void 0:y.tags)??[];p(E.map(b=>({tag:String(b.tag??b.path??""),path:String(b.path??b.tag??""),suid:String(b.suid??""),uuid:String(b.uuid??""),approx_count:typeof b.approx_count=="number"?b.approx_count:void 0})))}catch{r||p([])}},200)},cancel(){r=!0,i&&clearTimeout(i),s&&s.abort(),o&&o.abort()}}}const Ne="/v5/meta/ultratags",fi=(n,e)=>{const t=new URLSearchParams;e.meta&&t.set("meta",e.meta),e.q&&t.set("q",e.q),e.sort&&t.set("sort",e.sort),typeof e.limit=="number"&&t.set("limit",String(e.limit)),e.after&&t.set("after",e.after),e.format&&t.set("format",e.format),e.lang&&t.set("lang",e.lang);const i=t.toString();return`${n}${Ne}${i?`?${i}`:""}`},gi=(n,e)=>{const t=new URLSearchParams;e.format&&t.set("format",e.format),e.lang&&t.set("lang",e.lang);const i=t.toString();return`${n}${Ne}${i?`?${i}`:""}`};function ps(n,e){let t=null,i=null;const s=()=>{t&&(clearTimeout(t),t=null),i&&(i.abort(),i=null)};return{list(r){return s(),new Promise((o,a)=>{t=setTimeout(async()=>{t=null,i=new AbortController;try{const d=fi(n,r),c=await fetch(d,{method:"GET",headers:e,signal:i.signal});if(!c.ok){a(new Error(`ultratags list failed: HTTP ${c.status}`));return}const p=await c.json();o(p)}catch(d){a(d)}},oi)})},async getBySids(r){if(!r.sids||r.sids.length===0)return{items:[],stats:{count:0,total_count:0}};const o=gi(n,r),a=await fetch(o,{method:"QUERY",headers:{...e,"Content-Type":"application/json"},body:JSON.stringify({ultratags_sids:r.sids})});if(!a.ok)throw new Error(`ultratags getBySids failed: HTTP ${a.status}`);return await a.json()},async create(r){const o=`${n}${Ne}`,a=await fetch(o,{method:"POST",headers:{...e,"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error(`ultratags create failed: HTTP ${a.status}`);return await a.json()},cancel(){s()}}}var xi=Object.defineProperty,F=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&xi(e,t,s),s};const mi=l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7" cy="7" r="4.5"/><line x1="13.5" y1="13.5" x2="10.5" y2="10.5"/>
</svg>`,bi=l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round">
  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
</svg>`,vi=l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 6 8 2 12 6"/><polyline points="4 10 8 14 12 10"/>
</svg>`,yi=l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 3 8 7 12 3"/><polyline points="4 9 8 13 12 9"/>
</svg>`,Ue=class Ue extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.schema=null,this.meta={},this.config=null,this.taxonodes=null,this.resolvedSchema=null,this.dependencies=[],this.disabled=!1,this.hideFilter=!1,this._collapsed=new Set,this._filterQuery=""}willUpdate(e){e.has("schema")&&e.get("schema")!==this.schema&&(this._collapsed=new Set,this._filterQuery="")}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFilterInput(e){this._filterQuery=e.target.value}_onFilterClear(){this._filterQuery=""}_onFilterKeyDown(e){e.key==="Escape"&&this._filterQuery&&(e.stopPropagation(),this._filterQuery="")}_isAllCollapsed(e){return e.length===0?!1:e.every(t=>this._collapsed.has(t))}_onToggleCollapseAll(e){const t=new Set(this._collapsed);if(this._isAllCollapsed(e))for(const i of e)t.delete(i);else for(const i of e)t.add(i);this._collapsed=t}_buildConflictsByCkey(){if(!this.schema||!this.resolvedSchema||this.resolvedSchema.size===0)return new Map;const e={};for(const i of this.schema.fields)i.key in this.meta&&(e[i.ckey]=this.meta[i.key]);const t=Bt(e,this.resolvedSchema);return new Map(t.map(i=>[i.ckey,i]))}_buildDependencyNames(){return this.dependencies.length===0?new Map:new Map(this.dependencies.map(e=>[e.uuid,e.name]))}_visibleFieldsFor(e,t){var r;const i=this.resolvedSchema;if(i&&e.ckey&&((r=i.get(e.ckey))!=null&&r.hidden))return[];let s=i?e.fields.filter(o=>!St(o,e,i)):e.fields;return t&&!e.name.toLowerCase().includes(t)&&(s=s.filter(o=>o.title.toLowerCase().includes(t))),s}_renderFilter(e,t,i){if(this.hideFilter)return x;if(!this.schema||this.schema.fields.length===0)return x;const s=this._filterQuery,r=this._isAllCollapsed(t),o=r?h("expandAll","Expand all"):h("collapseAll","Collapse all");return l`
      <div class="form-filter" role="search">
        <div class="filter-input-wrap">
          <span class="filter-icon" aria-hidden="true">${mi}</span>
          <input
            class="filter-input"
            type="text"
            placeholder=${h("searchFields","Search fields...")}
            .value=${s}
            @input=${this._onFilterInput}
            @keydown=${this._onFilterKeyDown}
            aria-label=${h("searchMetadataFields","Search metadata fields")}
          />
          ${s?l`<button
                class="filter-clear"
                @click=${this._onFilterClear}
                title=${h("clearSearch","Clear search")}
                aria-label=${h("clearSearch","Clear search")}
                type="button"
              >${bi}</button>`:x}
        </div>
        ${e?l`<button
              class="filter-collapse"
              @click=${()=>this._onToggleCollapseAll(t)}
              ?disabled=${i}
              title=${i?h("disabledWhileSearching","Disabled while searching"):o}
              aria-label=${r?h("expandAllGroups","Expand all groups"):h("collapseAllGroups","Collapse all groups")}
              type="button"
            >${r?yi:vi}</button>`:x}
      </div>
    `}_renderGroup(e,t,i,s,r){const o=r?!0:!this._collapsed.has(e.uuid);return l`
      <div class="group">
        <button class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${o}>
          <span>${e.name}</span>
          <svg class="chevron ${o?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${o?l`
              <div class="group-content">
                ${t.map(a=>{var d,c,p;return l`
                    <sfx-metadata-field
                      .field=${a}
                      .value=${this.meta[a.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      .taxonomyService=${this.taxonomyService}
                      .taxonomyEntry=${((d=this.taxonodes)==null?void 0:d[a.key])??null}
                      .ultratags=${this.ultratags}
                      .defaultLanguage=${this.defaultLanguage}
                      .regionalVariantsGroups=${((c=this.schema)==null?void 0:c.regionalVariantsGroups)??[]}
                      .resolvedState=${((p=this.resolvedSchema)==null?void 0:p.get(a.ckey))??null}
                      .conflict=${i.get(a.ckey)??null}
                      .dependencyNames=${s}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `})}
              </div>
            `:x}
      </div>
    `}render(){if(!this.schema||this.schema.groups.length===0)return l`<div class="empty" role="status" aria-live="polite">${h("noMetadataFieldsConfigured","No metadata fields configured")}</div>`;const e=this._buildConflictsByCkey(),t=this._buildDependencyNames(),i=this._filterQuery.trim(),s=i.toLowerCase(),r=s!=="",o=[];for(const p of this.schema.groups){const f=this._visibleFieldsFor(p,s);f.length!==0&&o.push({group:p,fields:f})}const a=o.map(p=>p.group.uuid),d=this.schema.groups.length>1&&(r||o.length>0),c=this._renderFilter(d,a,r);if(o.length===0){const p=r?h("noFieldsMatch",'No fields match "{{query}}"',{query:i}):h("allMetadataFieldsHidden","All metadata fields are currently hidden");return l`
        ${c}
        <div class="empty" role="status" aria-live="polite">${p}</div>
      `}return l`
      ${c}
      ${o.map(({group:p,fields:f})=>this._renderGroup(p,f,e,t,r))}
    `}};Ue.styles=_`
    :host { display: block; }

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
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
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
      transition: background 0.15s ease, color 0.15s ease;
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
      transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
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
  `;let C=Ue;F([u({attribute:!1})],C.prototype,"schema");F([u({attribute:!1})],C.prototype,"meta");F([u({attribute:!1})],C.prototype,"config");F([u({attribute:!1})],C.prototype,"autocomplete");F([u({attribute:!1})],C.prototype,"taxonomyService");F([u({attribute:!1})],C.prototype,"ultratags");F([u({attribute:!1})],C.prototype,"defaultLanguage");F([u({attribute:!1})],C.prototype,"taxonodes");F([u({attribute:!1})],C.prototype,"resolvedSchema");F([u({attribute:!1})],C.prototype,"dependencies");F([u({type:Boolean})],C.prototype,"disabled");F([u({type:Boolean,attribute:"hide-filter"})],C.prototype,"hideFilter");F([m()],C.prototype,"_collapsed");F([m()],C.prototype,"_filterQuery");customElements.define("sfx-metadata-form",C);const fe=_`
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
`,ge=_`
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
`,Me=_`
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
`;_`
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
`;const _i=_`
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
`;var wi=Object.defineProperty,A=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&wi(e,t,s),s};const He=class He extends P{constructor(){super(...arguments),this.config=null,this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.regionalVariantsGroups=[],this.resolvedState=null,this.conflict=null,this.dependencyNames=new Map,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e;return(e=this.resolvedState)!=null&&e.required?!0:Ct(this.field,this.config??void 0)}_conflictTooltip(){var o,a;const e=this.conflict;if(!e)return"";const t=d=>{var c,p,f;return((f=(p=(c=this.field)==null?void 0:c.possible_values)==null?void 0:p.find(g=>g.internal_unique_value===d))==null?void 0:f.label)??d},i=(o=this.resolvedState)==null?void 0:o.allowedValues,s=(a=this.resolvedState)==null?void 0:a.setValue;let r;if(e.kind==="allow_values"&&i?r=`Current value is no longer allowed. Allowed: ${i.map(t).join(", ")}`:e.kind==="set_values"&&s!==void 0?r=`Value should be: ${(Array.isArray(s)?s:[s]).map(t).join(", ")}`:r="Value conflicts with a dependency rule",e.dependencyUuids.length>0&&this.dependencyNames.size>0){const d=e.dependencyUuids.map(c=>this.dependencyNames.get(c)).filter(c=>!!c);if(d.length>0){const c=d.length===1?"dependency":"dependencies";r+=`
Controlled by ${c}: ${d.join(", ")}`}}return r}_onFieldBlur(e){const{key:t,value:i}=e.detail,s=Et(this.field,i,this.config??void 0);if(s){this._error=s;return}this._error=null;const r={meta:{[this.field.key]:this.value}},o=ee(this.field,this.config),a=Ke(this.field,i,r,o);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:t,value:a},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){var r,o;const i=this.disabled;if(we(e))return l`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;const s=((r=this.resolvedState)==null?void 0:r.allowedValues)??null;switch(e.type){case"text":case"attachment-uri":return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return l`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return l`<sfx-meta-select-field .field=${e} .value=${t} .allowedValues=${s} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return l`<sfx-meta-multi-select-field .field=${e} .value=${t} .allowedValues=${s} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return l`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"ultratags":return l`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${(o=this.config)==null?void 0:o.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}></sfx-meta-ultratags-field>`;case"taxonomy-node":return l`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${i}></sfx-meta-taxonomy-node-field>`;case"boolean":return l`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return l`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return l`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return l`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}render(){var d,c;const e=this.field;if(!e)return x;const t=ee(e,this.config),i=Rt(e,this.value,t),s=Kt(e,this.regionalVariantsGroups,(d=this.config)==null?void 0:d.regionalFilters,(c=this.config)==null?void 0:c.language),o=e.type==="textarea"?"field-row field-row--top":"field-row",a=this.conflict?this._conflictTooltip():"";return l`
      <div class=${o} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired?l`<span class="field-required" aria-hidden="true">*</span>`:x}
          ${this.conflict?l`<span class="field-conflict" role="img" aria-label=${a} title=${a}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 2 L14 13 L2 13 Z"/>
                  <line x1="8" y1="6.5" x2="8" y2="9.5"/>
                  <circle cx="8" cy="11.25" r="0.4" fill="currentColor"/>
                </svg>
              </span>`:x}
        </div>
        <div class="field-content">
          ${this._renderField(e,i)}
          ${s?l`<div class="field-regional-hint" title=${s}>${s}</div>`:x}
          ${this._error?l`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>`:x}
        </div>
      </div>
    `}};He.styles=[_i];let k=He;A([u({attribute:!1})],k.prototype,"field");A([u({attribute:!1})],k.prototype,"value");A([u({attribute:!1})],k.prototype,"config");A([u({attribute:!1})],k.prototype,"autocomplete");A([u({attribute:!1})],k.prototype,"taxonomyService");A([u({attribute:!1})],k.prototype,"taxonomyEntry");A([u({attribute:!1})],k.prototype,"ultratags");A([u({attribute:!1})],k.prototype,"defaultLanguage");A([u({attribute:!1})],k.prototype,"ultratagsRestrictToItems");A([u({attribute:!1})],k.prototype,"regionalVariantsGroups");A([u({attribute:!1})],k.prototype,"resolvedState");A([u({attribute:!1})],k.prototype,"conflict");A([u({attribute:!1})],k.prototype,"dependencyNames");A([u({type:Boolean})],k.prototype,"disabled");A([m()],k.prototype,"_error");customElements.define("sfx-metadata-field",k);var ki=Object.defineProperty,je=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&ki(e,t,s),s};class D extends P{constructor(){super(...arguments),this.value="",this.disabled=!1,this.i18nController=new G(this)}_selectPlaceholder(e){var i;const t=((i=this.field)==null?void 0:i.title)??"";return t?h("selectFieldPlaceholder","Select {{field}}",{field:t.toLowerCase()}):e??h("selectAnOption","Select an option")}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}je([u({attribute:!1})],D.prototype,"field");je([u({attribute:!1})],D.prototype,"value");je([u({type:Boolean})],D.prototype,"disabled");const Ge=class Ge extends D{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return l`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};Ge.styles=[fe];let Te=Ge;customElements.define("sfx-meta-text-field",Te);const Ye=class Ye extends D{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var i,s;const e=((i=this.field)==null?void 0:i.title)??"",t=e?`Enter ${e.toLowerCase()}`:"";return l`
      <textarea
        .value=${this.value??""}
        placeholder=${((s=this.field)==null?void 0:s.placeholder)||t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};Ye.styles=[fe,_`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Ae=Ye;customElements.define("sfx-meta-textarea-field",Ae);var $i=Object.defineProperty,ke=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&$i(e,t,s),s};const Je=class Je extends D{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _selectableOptions(){const e=this.allowedValues;if(e===null)return this._options;const t=new Set(e);return this._options.filter(i=>t.has(i.value))}get _filtered(){const e=this._search.toLowerCase();return this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e))}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const t=this._filtered.findIndex(i=>i.value===this.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".search"))==null||i.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex],!0));break}}render(){var t;const e=this._selectPlaceholder();return l`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?l`<span class="trigger-value">${this._selectedLabel}</span>`:l`<span class="placeholder">${((t=this.field)==null?void 0:t.placeholder)||e}</span>`}
        ${this._selectedLabel&&!this.disabled?l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${h("clear","Clear")}
            @click=${this._clear}
            @keydown=${i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this._clear(i))}}>&times;</span>
        `:x}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?l`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder=${h("search","Search")}
            aria-label=${h("filterOptions","Filter options")}
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length?this._filtered.map((i,s)=>l`
                <div class="option ${i.value===this.value?"selected":""} ${s===this._activeIndex?"active":""}"
                  role="option" aria-selected=${i.value===this.value}
                  @mousedown=${r=>{r.preventDefault(),this._onSelect(i)}}
                  @mouseenter=${()=>{this._activeIndex=s}}>
                  ${i.label}
                </div>`):l`<div class="empty">${h("noOptions","No options")}</div>`}
        </div>
      `:x}
    `}};Je.styles=[ge];let te=Je;ke([u({attribute:!1})],te.prototype,"allowedValues");ke([m()],te.prototype,"_open");ke([m()],te.prototype,"_search");ke([m()],te.prototype,"_activeIndex");customElements.define("sfx-meta-select-field",te);var Si=Object.defineProperty,$e=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Si(e,t,s),s};const Qe=class Qe extends D{constructor(){super(...arguments),this.allowedValues=null,this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _selectableOptions(){const e=this.allowedValues;if(e===null)return this._options;const t=new Set(e);return this._options.filter(i=>t.has(i.value))}get _filtered(){const e=this._search.toLowerCase();return this._selectableOptions.filter(t=>t.label.toLowerCase().includes(e))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(s=>s!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t)}_selectAll(){const e=this._selectableOptions.map(t=>t.value);this.value=e,this._emit("field-change",e)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var i;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(i=this.renderRoot.querySelector(".trigger"))==null||i.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const t=this._filtered;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<t.length&&!this._search&&(e.preventDefault(),this._toggle(t[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}render(){var i;const e=this._selected,t=this._selectPlaceholder();return l`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length?e.map(s=>l`
              <span class="chip">
                ${this._labelFor(s)}
                <button class="chip-x" aria-label=${h("removeItem","Remove {{item}}",{item:this._labelFor(s)})} @click=${r=>{r.stopPropagation(),this._remove(s)}}>&times;</button>
              </span>`):l`<span class="placeholder">${((i=this.field)==null?void 0:i.placeholder)||t}</span>`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open?l`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder=${h("search","Search")}
            aria-label=${h("filterOptions","Filter options")}
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length?this._filtered.map((s,r)=>l`
                  <div class="option ${r===this._activeIndex?"active":""}" role="option" aria-selected=${e.includes(s.value)}
                    @mousedown=${o=>{o.preventDefault(),this._toggle(s)}}
                    @mouseenter=${()=>{this._activeIndex=r}}>
                    <span class="check ${e.includes(s.value)?"checked":""}">
                      ${e.includes(s.value)?"✓":""}
                    </span>
                    ${s.label}
                  </div>`):l`<div class="empty">${h("noOptions","No options")}</div>`}
          </div>
          ${this._options.length>0?l`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${s=>{s.preventDefault(),this._selectAll()}}>${h("selectAll","Select all")}</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${s=>{s.preventDefault(),this._clearAll()}}>${h("clearAll","Clear all")}</button>
            </div>
          `:x}
        </div>
      `:x}
    `}};Qe.styles=[ge,Me,_`
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
    `];let ie=Qe;$e([u({attribute:!1})],ie.prototype,"allowedValues");$e([m()],ie.prototype,"_open");$e([m()],ie.prototype,"_search");$e([m()],ie.prototype,"_activeIndex");customElements.define("sfx-meta-multi-select-field",ie);function X(n,e){var t,i;return((t=n.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function Ft(n){return n.trim().replace(/\s+/g," ")}function Ci(n){return Ft(n).replace(/\s/g,"-")}function be(n){return{label:Ft(n),value:Ci(n)}}var Ei=Object.defineProperty,de=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ei(e,t,s),s};const We=class We extends D{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var i,s,r;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,!t.trim()||!((i=this.field)!=null&&i.ckey)){this._results=[],this._loading=!1,(s=this.autocomplete)==null||s.cancel();return}this._loading=!0,(r=this.autocomplete)==null||r.search(this.field.ckey,t,o=>{this._results=o,this._loading=!1})}_addTag(e){if(this._tags.some(i=>X(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!X(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(be(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(be(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var r;const e=this._query.toLowerCase().trim(),t=this._tags,i=(((r=this.field)==null?void 0:r.possible_values)??[]).map(o=>({value:o.api_value||o.internal_unique_value,label:o.label})).filter(o=>!t.some(a=>X(a,o))).filter(o=>!e||o.label.toLowerCase().includes(e)),s=this._results.filter(o=>!t.some(a=>X(a,o))&&!i.some(a=>X(a,o)));return[...i,...s]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=be(e);return!this._tags.some(i=>X(i,t))&&!this._suggestions.some(i=>X(i,t))}render(){var s,r;const e=this._tags,t=this._suggestions,i=t.length;return l`
      <div class="container" @click=${()=>{var o;return(o=this.renderRoot.querySelector(".input"))==null?void 0:o.focus()}}>
        ${e.map(o=>l`
          <span class="chip">
            ${o.label}
            <button class="chip-x" aria-label=${h("removeItem","Remove {{item}}",{item:o.label})} @click=${a=>{a.stopPropagation(),this._removeTag(o)}}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((s=this.field)==null?void 0:s.title)??h("tags","Tags")}
          placeholder=${e.length?"":((r=this.field)==null?void 0:r.placeholder)||h("addTags","Add tags")}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||t.length)?l`
        <div class="dropdown" role="listbox">
          ${this._loading?l`<div class="loading">${h("loading","Loading")}</div>`:x}
          ${t.map((o,a)=>l`
            <div class="option ${a===this._activeIndex?"active":""}" role="option"
              @mousedown=${d=>{d.preventDefault(),this._addTag(o)}}
              @mouseenter=${()=>{this._activeIndex=a}}>
              ${o.label}
            </div>`)}
          ${this._canCreate?l`
            <div class="option create ${i===this._activeIndex?"active":""}"
              @mousedown=${o=>{o.preventDefault(),this._addTag(be(this._query))}}
              @mouseenter=${()=>{this._activeIndex=i}}>
              ${h("createTag","Create '{{tag}}'",{tag:this._query.trim()})}
            </div>`:x}
          ${!this._loading&&!t.length&&!this._canCreate?l`<div class="empty">${h("noResults","No results")}</div>`:x}
        </div>
      `:x}
    `}};We.styles=[Me,_`
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
    `];let U=We;de([u({attribute:!1})],U.prototype,"autocomplete");de([m()],U.prototype,"_query");de([m()],U.prototype,"_results");de([m()],U.prototype,"_loading");de([m()],U.prototype,"_dropdownOpen");de([m()],U.prototype,"_activeIndex");customElements.define("sfx-meta-tags-field",U);var Ii=Object.defineProperty,Dt=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ii(e,t,s),s};const Z=()=>[{label:h("booleanTrue","True"),value:"true"},{label:h("booleanFalse","False"),value:"false"}],Xe=class Xe extends D{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var t;if(this.value==null)return"";const e=String(this.value);return((t=Z().find(i=>i.value===e))==null?void 0:t.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(Z().findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,Z().length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=Z().length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<Z().length&&(e.preventDefault(),this._onSelect(Z()[this._activeIndex],!0));break}}render(){var i;const e=this.value==null?"":String(this.value),t=this._selectPlaceholder();return l`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?l`<span class="trigger-value">${this._currentLabel}</span>`:l`<span class="placeholder">${((i=this.field)==null?void 0:i.placeholder)||t}</span>`}
        ${this._currentLabel&&!this.disabled?l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${h("clear","Clear")}
            @click=${this._clear}
            @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this._clear(s))}}>&times;</span>
        `:x}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?l`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${Z().map((s,r)=>l`
            <div class="option ${s.value===e?"selected":""} ${r===this._activeIndex?"active":""}"
              role="option" aria-selected=${s.value===e}
              @mousedown=${o=>{o.preventDefault(),this._onSelect(s)}}
              @mouseenter=${()=>{this._activeIndex=r}}>
              ${s.label}
            </div>`)}
        </div>
      `:x}
    `}};Xe.styles=[ge];let he=Xe;Dt([m()],he.prototype,"_open");Dt([m()],he.prototype,"_activeIndex");customElements.define("sfx-meta-boolean-field",he);const Ze=class Ze extends D{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){if(e.key==="Escape"){this._emit("field-escape");return}(e.key==="e"||e.key==="E")&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.preventDefault()}render(){var e;return l`
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
    `}};Ze.styles=[fe];let Oe=Ze;customElements.define("sfx-meta-number-field",Oe);const et=class et extends D{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return l`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?l`<span class="date-placeholder">${h("pickADate","Pick a date")}</span>`:x}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};et.styles=[fe,_`
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
    `];let Re=et;customElements.define("sfx-meta-date-field",Re);const tt=class tt extends D{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,s={...this._geo,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return l`
      <div class="grid">
        <div>
          <label>${h("latitude","Latitude")}</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("latitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>${h("longitude","Longitude")}</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("longitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `}};tt.styles=[fe,_`
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
    `];let Fe=tt;customElements.define("sfx-meta-geo-point-field",Fe);var Ti=Object.defineProperty,M=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ti(e,t,s),s};const oe={uuid:"__root__",name:"",ltree:""},it=class it extends D{constructor(){super(...arguments),this.entry=null,this._open=!1,this._query="",this._drillStack=[oe],this._currentNodes=[],this._searchResults=[],this._loading=!1,this._activeIndex=-1,this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1,this._boundOutsideClick=this._onOutsideClick.bind(this),this._searchSeq=0}get _taxonomySuid(){var t,i;const e=((i=(t=this.field)==null?void 0:t.model)==null?void 0:i.parameters)??void 0;return e==null?void 0:e.taxonomy_suid}async _resolveTaxonomyUuid(){var s,r,o;if(this._resolvedTaxonomyUuid)return this._resolvedTaxonomyUuid;const e=this._taxonomySuid;if(!e||!this.taxonomyService)return null;const t=await this.taxonomyService.fetchTaxonomies(),i=t.find(a=>a.suid===e);return i?(this._resolvedTaxonomyUuid=i.uuid,this._taxonomyResolutionFailed=!1,i.uuid):(console.warn(`[sfx-uploader] taxonomy '${e}' not found in catalogue. Field "${((s=this.field)==null?void 0:s.ckey)??((r=this.field)==null?void 0:r.key)}" model:`,(o=this.field)==null?void 0:o.model,"Available taxonomies:",t.map(a=>({suid:a.suid,uuid:a.uuid,name:a.name}))),this._taxonomyResolutionFailed=!0,null)}get _isSearchMode(){return this._query.trim().length>0}get _selectedScalar(){return typeof this.value=="string"?this.value:""}get _displayPath(){var e,t;return(e=this.entry)!=null&&e.path?this.entry.path:(t=this.entry)!=null&&t.name?this.entry.name:this._selectedScalar}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel()}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}async _openDropdown(){!this._taxonomySuid||!this.taxonomyService||(this._open=!0,this._query="",this._activeIndex=-1,this._drillStack=this._seedDrillStackFromEntry(),document.addEventListener("mousedown",this._boundOutsideClick),await this._loadCurrentNodes(),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()}))}_seedDrillStackFromEntry(){const e=this.entry;if(!(e!=null&&e.lineage))return[oe];const t=e.lineage.split(".").filter(Boolean);if(t.length<=1)return[oe];const i=t.slice(0,-1),r=(e.path?e.path.split(/\s*[›>]\s*/).filter(Boolean):[]).slice(0,-1),o=[oe];let a="";for(let d=0;d<i.length;d++)a=a?`${a}.${i[d]}`:i[d],o.push({uuid:`__seed_${a}`,name:r[d]??i[d],ltree:a});return o}willUpdate(e){e.has("field")&&(this._resolvedTaxonomyUuid=null,this._taxonomyResolutionFailed=!1)}_close(){var e;this._open&&(this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(e=this.taxonomyService)==null||e.cancel(),this._emit("field-blur",this._selectedScalar))}async _loadCurrentNodes(){if(!this.taxonomyService)return;this._loading=!0;const e=++this._searchSeq,t=await this._resolveTaxonomyUuid();if(e!==this._searchSeq)return;if(!t){this._currentNodes=[],this._loading=!1;return}const i=this._drillStack[this._drillStack.length-1].ltree,s=await this.taxonomyService.fetchNodes(t,i);if(e!==this._searchSeq)return;this._currentNodes=s.nodes,this._loading=!1;const r=this._selectedScalar,o=r?this._currentNodes.findIndex(a=>a.uuid===r||a.slug===r):-1;this._activeIndex=o,o>=0&&this._scrollActive()}_onSearchInput(e){var s;const t=e.target.value;if(this._query=t,this._activeIndex=-1,!t.trim()||!this.taxonomyService){this._searchResults=[],this._loading=!1,(s=this.taxonomyService)==null||s.cancel();return}this._loading=!0;const i=++this._searchSeq;this.taxonomyService.autocomplete(this.field.ckey,t,r=>{i===this._searchSeq&&(this._searchResults=r,this._loading=!1)})}async _drillInto(e){this._drillStack=[...this._drillStack,{uuid:e.uuid,name:e.name,ltree:e.ltree}],await this._loadCurrentNodes()}async _jumpToCrumb(e){e<0||e>=this._drillStack.length||(this._drillStack=this._drillStack.slice(0,e+1),await this._loadCurrentNodes())}_buildTreeEntry(e){const i=[...this._drillStack.filter(s=>s.uuid!==oe.uuid).map(s=>s.name),e.name].filter(Boolean).join(" › ");return{uuid:e.uuid,suid:e.slug,name:e.name,path:i||e.name,lineage:e.ltree,slug:e.slug,attributes:e.attr??null}}_buildAutocompleteEntry(e){const t=e.path||e.tag,i=t.split(/\s*[›>]\s*/).filter(Boolean).pop()??e.tag;return{uuid:e.uuid,suid:e.suid,name:i,path:t,lineage:""}}_emitTaxonomyEntry(e){this.dispatchEvent(new CustomEvent("taxonomy-entry-change",{detail:{key:this.field.key,entry:e},bubbles:!0,composed:!0}))}_selectTreeNode(e){const t=e.uuid||e.slug,i=this._buildTreeEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_selectAutocomplete(e){const t=e.suid||e.uuid,i=this._buildAutocompleteEntry(e);this.value=t,this.entry=i,this._emit("field-change",t),this._emitTaxonomyEntry(i),this._close()}_clear(e){e.stopPropagation(),this.value="",this.entry=null,this._emit("field-change",""),this._emitTaxonomyEntry(null),this._emit("field-blur","")}get _navigableCount(){return this._isSearchMode?this._searchResults.length:this._currentNodes.length}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".tree-row.active, .ac-row.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var i,s;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),(i=this.taxonomyService)==null||i.cancel(),this._emit("field-escape"),(s=this.renderRoot.querySelector(".trigger"))==null||s.focus();return}const t=this._navigableCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),e.key==="ArrowDown"){e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();return}if(e.key==="ArrowUp"){e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();return}if(e.key==="ArrowRight"&&!this._isSearchMode){if(this._activeIndex>=0&&this._activeIndex<this._currentNodes.length){const r=this._currentNodes[this._activeIndex];r.children.count_direct>0&&(e.preventDefault(),this._drillInto(r))}return}if(e.key==="ArrowLeft"&&!this._isSearchMode){this._drillStack.length>1&&(e.preventDefault(),this._jumpToCrumb(this._drillStack.length-2));return}if(e.key==="Enter"){if(this._activeIndex<0)return;if(e.preventDefault(),this._isSearchMode){const r=this._searchResults[this._activeIndex];r&&this._selectAutocomplete(r)}else{const r=this._currentNodes[this._activeIndex];r&&this._selectTreeNode(r)}}}_renderBreadcrumb(){const e=this._drillStack;return e.length<=1?x:l`
      <div class="breadcrumb">
        ${e.map((t,i)=>{const s=i===e.length-1,r=t.uuid===oe.uuid?h("rootNode","Root"):t.name;return l`
            ${i>0?l`<span class="crumb-sep">›</span>`:x}
            <button class="crumb ${s?"current":""}" type="button"
              ?disabled=${s}
              @click=${()=>!s&&this._jumpToCrumb(i)}>
              ${r}
            </button>
          `})}
      </div>
    `}_renderTree(){if(this._loading&&this._currentNodes.length===0)return l`<div class="empty">${h("loading","Loading")}</div>`;if(this._taxonomyResolutionFailed)return l`<div class="empty">${h("taxonomyNotFound","Taxonomy not found")}</div>`;if(this._currentNodes.length===0)return l`<div class="empty">${h("noNodes","No nodes")}</div>`;const e=this._selectedScalar;return l`
      <div class="scroll" role="listbox">
        ${this._currentNodes.map((t,i)=>{const s=t.children.count_direct>0,r=!!e&&(e===t.uuid||e===t.slug);return l`
            <div class="tree-row ${i===this._activeIndex?"active":""} ${r?"selected":""}"
              role="option" aria-selected=${r}
              @mouseenter=${()=>{this._activeIndex=i}}
              @click=${()=>s?this._drillInto(t):this._selectTreeNode(t)}>
              <span class="tree-radio ${r?"checked":""}" role="button"
                aria-label=${h("selectNode","Select {{node}}",{node:t.name})}
                @click=${o=>{o.stopPropagation(),this._selectTreeNode(t)}}></span>
              <span class="tree-name" title=${t.name}>${t.name}</span>
              ${s?l`<span class="tree-count" aria-hidden="true">(${t.children.count_direct})</span>`:x}
              <span class="tree-chevron ${s?"":"hidden"}" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </div>
          `})}
      </div>
    `}_renderSearch(){return this._loading&&this._searchResults.length===0?l`<div class="empty">${h("loading","Loading")}</div>`:this._searchResults.length===0?l`<div class="empty">${h("noResults","No results")}</div>`:l`
      <div class="scroll" role="listbox">
        ${this._searchResults.map((e,t)=>l`
          <div class="ac-row ${t===this._activeIndex?"active":""}"
            role="option"
            @mouseenter=${()=>{this._activeIndex=t}}
            @click=${()=>this._selectAutocomplete(e)}>
            <span class="ac-tag">${e.tag}</span>
            ${e.path&&e.path!==e.tag?l`<span class="ac-path">${e.path}</span>`:x}
          </div>
        `)}
      </div>
    `}render(){var s;if(!this._taxonomySuid)return l`<div class="misconfigured" role="alert">${h("missingTaxonomyConfig","Field is missing taxonomy config")}</div>`;const e=this._selectPlaceholder(h("selectANode","Select a node")),t=this._displayPath,i=!!t;return l`
      <button class="trigger" type="button"
        ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._close():this._openDropdown()}
        @keydown=${r=>{!this._open&&(r.key==="ArrowDown"||r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._openDropdown())}}>
        ${i?l`<span class="trigger-value" title=${t}>${t}</span>`:l`<span class="placeholder">${((s=this.field)==null?void 0:s.placeholder)||e}</span>`}
        ${i&&!this.disabled?l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label=${h("clear","Clear")}
            @click=${this._clear}
            @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}>&times;</span>
        `:x}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?l`
        <div class="dropdown taxo" @keydown=${this._onKeydown}>
          <input class="search" type="text"
            aria-label=${h("searchTaxonomy","Search taxonomy")}
            placeholder=${h("search","Search")}
            .value=${this._query}
            @input=${this._onSearchInput} />
          ${this._isSearchMode?x:this._renderBreadcrumb()}
          ${this._isSearchMode?this._renderSearch():this._renderTree()}
        </div>
      `:x}
    `}};it.styles=[ge,_`
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
    `];let O=it;M([u({attribute:!1})],O.prototype,"taxonomyService");M([u({attribute:!1})],O.prototype,"entry");M([m()],O.prototype,"_open");M([m()],O.prototype,"_query");M([m()],O.prototype,"_drillStack");M([m()],O.prototype,"_currentNodes");M([m()],O.prototype,"_searchResults");M([m()],O.prototype,"_loading");M([m()],O.prototype,"_activeIndex");M([m()],O.prototype,"_resolvedTaxonomyUuid");M([m()],O.prototype,"_taxonomyResolutionFailed");customElements.define("sfx-meta-taxonomy-node-field",O);var Ai=Object.defineProperty,Y=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ai(e,t,s),s};const Oi=(n,e)=>!!(e.uuid&&n.uuid===e.uuid||e.sid&&n.sid===e.sid||e.slug&&n.slug===e.slug),st=class st extends D{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null,this._enrichmentAttempted=new Set}get _items(){return Array.isArray(this.value)?this.value.map(e=>typeof e=="string"?di(e)?{sid:e}:{slug:e}:e):[]}get _currentLang(){return this.language||"en"}get _defaultLang(){return this.defaultLanguage||this._currentLang}get _isRestricted(){return Array.isArray(this.restrictToItems)}connectedCallback(){super.connectedCallback(),this._maybeEnrichBySids()}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.ultratags)==null||e.cancel()}updated(e){e.has("value")&&this._maybeEnrichBySids()}async _maybeEnrichBySids(){const e=this.ultratags;if(!e)return;const t=this._items;if(t.length===0)return;const i=[];for(const s of t)s.sid&&!s.i18n&&!this._enrichmentAttempted.has(s.sid)&&i.push(s.sid);if(i.length!==0){for(const s of i)this._enrichmentAttempted.add(s);try{const s=await e.getBySids({sids:i,format:xt}),r=ui(s.items||[]),o=pi(t,r);this.value=o}catch{}}}_selectedKeys(){const e=new Set;for(const t of this._items)t.uuid&&e.add(t.uuid),t.sid&&e.add(t.sid),t.slug&&e.add(t.slug);return e}_entryAlreadySelected(e){const t=this._selectedKeys();return!!e.uuid&&t.has(e.uuid)||!!e.sid&&t.has(e.sid)||t.has(e.slug)}_labelForItem(e){const t={i18n:e.i18n,slug:e.slug||""};return ye(t,this._currentLang,this._defaultLang).value||e.slug||e.sid||""}get _restrictedEntries(){return this._isRestricted?(this.restrictToItems||[]).map(e=>({slug:e.slug||"",sid:e.sid,uuid:e.uuid||"",i18n:e.i18n})):[]}get _dropdownOptions(){const e=this._selectedKeys(),t=r=>!!r.uuid&&e.has(r.uuid)||!!r.sid&&e.has(r.sid)||e.has(r.slug),s=(this._isRestricted?this._restrictedEntries:this._results).filter(r=>!t(r)).map(r=>({entry:r,label:ye(r,this._currentLang,this._defaultLang).value||r.slug}));if(this._isRestricted){const r=this._query.trim().toLowerCase();return r?s.filter(o=>o.label.toLowerCase().includes(r)):s}return s}get _isSearching(){return this._query.trim().length>=gt}get _canCreate(){if(this._isRestricted||!this._isSearching||this._loading)return!1;const e=this._query.trim(),t=mt(e);return!(!t||this._selectedKeys().has(t)||this._dropdownOptions.some(s=>s.label.toLowerCase()===e.toLowerCase()))}get _itemCount(){return this._dropdownOptions.length+(this._canCreate?1:0)}_onInput(e){var r,o;const t=e.target.value;if(this._query=t,this._dropdownOpen=!0,this._activeIndex=-1,this._isRestricted){this._loading=!1;return}if(!this._isSearching||!((r=this.field)!=null&&r.key)){this._results=[],this._loading=!1,(o=this.ultratags)==null||o.cancel();return}const i=this.ultratags;if(!i)return;const s=t.trim().toLowerCase();this._loading=!0,i.list({meta:this.field.key,q:s,limit:ni,format:xt}).then(a=>{this._query.trim().toLowerCase()===s&&(this._results=a.items||[],this._loading=!1)}).catch(()=>{this._query.trim().toLowerCase()===s&&(this._results=[],this._loading=!1)})}_addEntry(e){if(this._entryAlreadySelected(e))return;const t={slug:e.slug,sid:e.sid,uuid:e.uuid,i18n:e.i18n},i=[...this._items,t];this.value=i,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",i),this.updateComplete.then(()=>{var s;(s=this.renderRoot.querySelector(".input"))==null||s.focus()})}async _createFromQuery(){var r,o;const e=this._query.trim();if(!e)return;const t=this.ultratags;if(!t||!((r=this.field)!=null&&r.key))return;const i=mt(e);if(!i)return;const s=this._currentLang;try{const a=await t.create({meta:this.field.key,mode:li.UPSERT,items:[{slug:i,i18n:{[s]:e}}]}),d=(o=a==null?void 0:a.output)==null?void 0:o[0],c={slug:(d==null?void 0:d.slug)||i,sid:d==null?void 0:d.sid,uuid:d==null?void 0:d.uuid,i18n:(d==null?void 0:d.i18n)||{[s]:e}};if(this._entryAlreadySelected({uuid:c.uuid||"",sid:c.sid,slug:c.slug||i}))return;const p=[...this._items,c];this.value=p,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",p),this.updateComplete.then(()=>{var f;(f=this.renderRoot.querySelector(".input"))==null||f.focus()})}catch{console.warn("[sfx-uploader] ultratag create failed")}}_removeItem(e){const t=this._items.filter(i=>!Oi(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._items))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._items.length){this._removeItem(this._items[this._items.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._dropdownOptions;this._activeIndex>=0&&this._activeIndex<i.length?this._addEntry(i[this._activeIndex].entry):this._activeIndex===i.length&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&this._canCreate?this._createFromQuery():this._activeIndex===-1&&i.length&&this._addEntry(i[0].entry);break}}}render(){var o,a;const e=this._items,t=this._dropdownOptions,i=t.length,s=this._query.trim(),r=((o=this.field)==null?void 0:o.placeholder)||(this._isRestricted?h("searchTagsToRemove","Search tags to remove"):h("addCustomTags","Add custom tags"));return l`
      <div class="container" @click=${()=>{var d;return(d=this.renderRoot.querySelector(".input"))==null?void 0:d.focus()}}>
        ${e.map(d=>{const c=this._labelForItem(d);return d.uuid||d.sid||d.slug,l`
            <span class="chip" title=${c}>
              ${c}
              <button class="chip-x" aria-label=${h("removeItem","Remove {{item}}",{item:c})}
                @click=${p=>{p.stopPropagation(),this._removeItem(d)}}>&times;</button>
            </span>`})}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((a=this.field)==null?void 0:a.title)??h("customTags","Custom tags")}
          placeholder=${e.length?"":r}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur}
          @focus=${()=>{this._dropdownOpen=!0}}
          @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen?l`
        <div class="dropdown" role="listbox">
          ${!this._isRestricted&&!this._isSearching?l`<div class="hint">${h("typeAtLeastNChars","Type at least {{count}} characters to search.",{count:gt})}</div>`:x}
          ${!this._isRestricted&&this._isSearching&&this._loading?l`<div class="loading">${h("loading","Loading")}</div>`:x}
          ${this._isRestricted||this._isSearching&&!this._loading?t.map((d,c)=>l`
                <div class="option ${c===this._activeIndex?"active":""}" role="option"
                  @mousedown=${p=>{p.preventDefault(),this._addEntry(d.entry)}}
                  @mouseenter=${()=>{this._activeIndex=c}}>
                  ${d.label}
                </div>`):x}
          ${(this._isRestricted||this._isSearching&&!this._loading)&&t.length===0&&!this._canCreate?l`<div class="empty">${h("noResults","No results")}</div>`:x}
          ${this._canCreate?l`
              <div class="option create ${i===this._activeIndex?"active":""}"
                @mousedown=${d=>{d.preventDefault(),this._createFromQuery()}}
                @mouseenter=${()=>{this._activeIndex=i}}>
                ${h("createTag","Create '{{tag}}'",{tag:s})}
              </div>`:x}
        </div>
      `:x}
    `}};st.styles=[Me,_`
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
    `];let B=st;Y([u({attribute:!1})],B.prototype,"ultratags");Y([u({attribute:!1})],B.prototype,"language");Y([u({attribute:!1})],B.prototype,"defaultLanguage");Y([u({attribute:!1})],B.prototype,"restrictToItems");Y([m()],B.prototype,"_query");Y([m()],B.prototype,"_results");Y([m()],B.prototype,"_loading");Y([m()],B.prototype,"_dropdownOpen");Y([m()],B.prototype,"_activeIndex");customElements.define("sfx-meta-ultratags-field",B);const Ve=()=>h("unsupportedFieldMessage","This field is not supported during upload. You can edit it later in the asset library."),Lt=l`
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${S`<rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>`}
  </svg>
`,rt=class rt extends P{constructor(){super(...arguments),this._i18nController=new G(this)}render(){const e=Ve();return l`
      <div
        class="unsupported"
        title=${e}
        aria-label=${e}
        aria-disabled="true"
        role="note"
      >
        ${Lt}
        <span class="unsupported-text" aria-hidden="true">${h("notEditableDuringUpload","Not editable during upload")}</span>
      </div>
    `}};rt.styles=_`
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
  `;let De=rt;customElements.define("sfx-meta-unsupported-field",De);var Ri=Object.defineProperty,j=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ri(e,t,s),s};const ot=class ot extends P{constructor(){super(...arguments),this.taxonomyEntry=null,this.ultratagsRestrictToItems=null,this.allowedValues=null,this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;if(we(e))return l`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;switch(e.type){case"text":case"attachment-uri":return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return l`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return l`<sfx-meta-select-field .field=${e} .value=${t} .allowedValues=${this.allowedValues} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return l`<sfx-meta-multi-select-field .field=${e} .value=${t} .allowedValues=${this.allowedValues} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return l`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"ultratags":return l`<sfx-meta-ultratags-field
          .field=${e} .value=${t}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems??void 0}
          ?disabled=${i}></sfx-meta-ultratags-field>`;case"taxonomy-node":return l`<sfx-meta-taxonomy-node-field .field=${e} .value=${t} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${i}></sfx-meta-taxonomy-node-field>`;case"boolean":return l`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return l`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return l`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return l`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}};ot.styles=_`
    :host { display: block; }
  `;let R=ot;j([u({attribute:!1})],R.prototype,"field");j([u({attribute:!1})],R.prototype,"value");j([u({attribute:!1})],R.prototype,"autocomplete");j([u({attribute:!1})],R.prototype,"taxonomyService");j([u({attribute:!1})],R.prototype,"taxonomyEntry");j([u({attribute:!1})],R.prototype,"ultratags");j([u({attribute:!1})],R.prototype,"language");j([u({attribute:!1})],R.prototype,"defaultLanguage");j([u({attribute:!1})],R.prototype,"ultratagsRestrictToItems");j([u({attribute:!1})],R.prototype,"allowedValues");j([u({type:Boolean})],R.prototype,"disabled");customElements.define("sfx-metadata-field-edit",R);var Fi=Object.defineProperty,xe=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Fi(e,t,s),s};const nt=class nt extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.taxonomyEntry=null}_formatValue(){var i,s,r,o;const e=this.value,t=(i=this.field)==null?void 0:i.type;switch(t){case"boolean":return e==="true"?"True":e==="false"?"False":"";case"date":return e?e instanceof Date?e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof e=="string"&&e.length>0?e:"":"";case"numeric":case"decimal2":{if(e==null||e==="")return"";const a=Number(e);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:t==="decimal2"?2:0}):String(e)}case"select-one":{if(e==null||e==="")return"";const a=(s=this.field.possible_values)==null?void 0:s.find(d=>d.internal_unique_value===e||d.api_value===e);return(a==null?void 0:a.label)??String(e)}case"multi-select":return!Array.isArray(e)||e.length===0?"":e.map(a=>{var c;const d=(c=this.field.possible_values)==null?void 0:c.find(p=>p.internal_unique_value===a||p.api_value===a);return(d==null?void 0:d.label)??String(a)}).join(", ");case"tags":return!Array.isArray(e)||e.length===0?"":e.map(a=>a.label||a.value).join(", ");case"ultratags":{if(!Array.isArray(e)||e.length===0)return"";const a=this.language||"en",d=this.defaultLanguage||a;return e.map(c=>typeof c=="string"?c:ye({i18n:c.i18n,slug:c.slug||""},a,d).value||c.slug||c.sid||"").filter(Boolean).join(", ")}case"taxonomy-node":return(r=this.taxonomyEntry)!=null&&r.path?this.taxonomyEntry.path:(o=this.taxonomyEntry)!=null&&o.name?this.taxonomyEntry.name:e==null||e===""?"":String(e);case"geopoint":{const a=e;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"attachment-uri":return!e||typeof e=="string"&&e.length===0?"":String(e);case"text":case"textarea":default:return e==null||e===""?"":String(e)}}render(){var i;if(this.field&&we(this.field))return l`
        <div class="value empty" title=${Ve()}>
          ${h("notEditableDuringUpload","Not editable during upload")}
        </div>
      `;const e=this._formatValue(),t=e==="";return((i=this.field)==null?void 0:i.type)==="attachment-uri"&&!t?l`
        <div class="value">
          <a class="link" href=${e} target="_blank" rel="noopener noreferrer"
            @click=${s=>s.stopPropagation()}
          >${e}</a>
        </div>
      `:l`
      <div class="value ${t?"empty":""}">${t?"—":e}</div>
    `}};nt.styles=_`
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
  `;let Q=nt;xe([u({attribute:!1})],Q.prototype,"field");xe([u({attribute:!1})],Q.prototype,"value");xe([u({attribute:!1})],Q.prototype,"taxonomyEntry");xe([u({attribute:!1})],Q.prototype,"language");xe([u({attribute:!1})],Q.prototype,"defaultLanguage");customElements.define("sfx-metadata-field-view",Q);var Di=Object.defineProperty,Se=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Di(e,t,s),s};const at=class at extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.groups=[],this.selectedFilters={},this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _filteredGroups(){return(this.groups??[]).filter(e=>{var t;return((t=e==null?void 0:e.variants)==null?void 0:t.length)>1})}get _options(){const e=[];for(const t of this._filteredGroups){let i=!0;for(const s of t.variants)e.push({groupUuid:t.uuid,value:s.api_value,label:s.label,isGroupStart:i,groupLabel:t.label}),i=!1}return e}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_toggle(){this._open?this._close():this._openDropdown()}_openDropdown(){this._open=!0;const t=this._options.findIndex(i=>this.selectedFilters[i.groupUuid]===i.value);this._activeIndex=t>=0?t:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>this._scrollActive())}_close(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick)}_onOutsideClick(e){e.composedPath().includes(this)||this._close()}_onSelect(e){this._close(),this.selectedFilters[e.groupUuid]!==e.value&&this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:e.groupUuid,value:e.value},bubbles:!0,composed:!0}))}_scrollActive(){const e=this.renderRoot.querySelector(".option.active");e&&typeof e.scrollIntoView=="function"&&e.scrollIntoView({block:"nearest"})}_onKeydown(e){if(e.key==="Escape"&&this._open){e.stopPropagation(),this._close();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const t=this._options;if(t.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<t.length&&(e.preventDefault(),this._onSelect(t[this._activeIndex]));break}}_triggerSummary(e){var s;const t=this._filteredGroups;if(t.length===0)return e;const i=[];for(const r of t){const o=this.selectedFilters[r.uuid]??((s=r.variants[0])==null?void 0:s.api_value),a=r.variants.find(d=>d.api_value===o);a&&i.push(t.length===1?a.label:`${r.label}: ${a.label}`)}return i.length?i.join(", "):e}render(){if(this._filteredGroups.length===0)return x;const t=this._options,i=h("regionalSettings","Regional settings"),s=this._triggerSummary(i);return l`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`${i} — ${s}`}
        title=${s}
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
        <span class="trigger-label">${i}</span>
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      ${this._open?l`
            <div class="dropdown" role="listbox" aria-label=${i}>
              ${t.map((r,o)=>this._renderOption(r,o,r.value===this.selectedFilters[r.groupUuid]))}
            </div>
          `:x}
    `}_renderOption(e,t,i){const s=this._activeIndex===t;return l`
      ${e.isGroupStart?l`<div class="group-header">${e.groupLabel}</div>`:x}
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
    `}};at.styles=[ge,_`
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
    `];let se=at;Se([u({attribute:!1})],se.prototype,"groups");Se([u({attribute:!1})],se.prototype,"selectedFilters");Se([m()],se.prototype,"_open");Se([m()],se.prototype,"_activeIndex");customElements.define("sfx-regional-settings",se);const Ce=new Set(["multi-select","tags","ultratags"]),Ee=new Set(["text","textarea","attachment-uri"]);function Li(n){return Nt(n)?[]:Ce.has(n)?[{key:"SET",label:h("bulkOpSet","Set")},{key:"ADD",label:h("bulkOpAddTo","Add to")},{key:"DELETE",label:h("bulkOpRemoveFrom","Remove from")}]:Ee.has(n)?[{key:"SET",label:h("bulkOpSet","Set")},{key:"ADD",label:h("bulkOpAppend","Append")},{key:"DELETE",label:h("bulkOpRemove","Remove")}]:[{key:"SET",label:h("bulkOpSet","Set")},{key:"DELETE",label:h("bulkOpClear","Clear")}]}function Le(n,e){return n==="DELETE"?Ce.has(e)||Ee.has(e):!0}function Pi(n,e,t,i){const s=Ce.has(i),r=Ee.has(i);switch(n){case"SET":return t;case"ADD":{if(s){const o=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return o;if(i==="ultratags")return Ie(o,a,!1);if(i==="tags"){const p=new Set(o.map(g=>g)),f=[...o];for(const g of a){const v=typeof g=="string"?g:String(g);p.has(v)||(p.add(v),f.push(v))}return f}const d=new Set(o.map(p=>JSON.stringify(p))),c=[...o];for(const p of a){const f=JSON.stringify(p);d.has(f)||(d.add(f),c.push(p))}return c}if(r){const o=typeof t=="string"?t:"";if(!o)return e??"";const a=typeof e=="string"?e:"";return a?`${a} ${o}`:o}return t}case"DELETE":{if(s){const o=Array.isArray(e)?e:[],a=Array.isArray(t)?t:[];if(a.length===0)return o;if(i==="ultratags")return Ie(o,a,!0);if(i==="tags"){const c=new Set(a.map(p=>typeof p=="string"?p:String(p)));return o.filter(p=>!c.has(typeof p=="string"?p:String(p)))}const d=new Set(a.map(c=>JSON.stringify(c)));return o.filter(c=>!d.has(JSON.stringify(c)))}if(r){const o=typeof t=="string"?t:"";return o?(typeof e=="string"?e:"").replaceAll(o,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function Pt(n,e,t,i,s){const r=s??"en",o=!!n.regional_variants_group_uuid,a={meta:{[n.key]:e}},d=Ke(n,t,a,s),c=v=>o&&v!==null&&typeof v=="object"&&!Array.isArray(v),p=c(e)?e[r]:e,f=c(d)?d[r]:d,g=Pi(i,p,f,n.type);return o?{...c(e)?e:{},[r]:g}:g}const zt=_`
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
`,zi=_`
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

  ${zt}
`,qi=_`
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
`,Bi=_`
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
`,Ki=_`
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

  ${zt}
`,Ni=_`
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
`,Mi=_`
  :host {
    display: block;
  }
`;var ji=Object.defineProperty,$=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&ji(e,t,s),s};const lt=class lt extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.files=[],this.config=null,this.initialFieldKey=null,this.dependencies=[],this._activeFieldKey="",this._staged=new Map,this._stagedTaxonodes=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._confirmVisible=!1,this._missingRequiredFieldKey=null,this._missingRequiredKeys=new Set,this._confirmResolve=null,this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map,this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key!=="Escape")return;if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(s=>s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()},this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var a,d;if(e.key!=="Tab")return;const t=(a=this.shadowRoot)==null?void 0:a.querySelector(".fm-confirm");if(!t)return;const i=t.querySelectorAll("button");if(i.length===0)return;const s=i[0],r=i[i.length-1],o=(d=this.shadowRoot)==null?void 0:d.activeElement;e.shiftKey&&o===s?(e.preventDefault(),r.focus()):!e.shiftKey&&o===r&&(e.preventDefault(),s.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,s=this._activeField;ne(i)&&(!s||Le(t,s.type))?this._pendingOp=null:this._pendingOp={operation:t,value:i}},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e.detail.fieldKey)},this._onJumpToNextRequired=async()=>{const e=this._missingRequiredFieldKey;e&&this._activeFieldKey!==e&&await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e)},this._onBulkApply=e=>{const t=this._activeField;if(!t)return;const{operation:i,value:s,taxonomyEntry:r}=e.detail,o=ee(t,this.config),a=[];for(const d of this._selected){const c=this._staged.get(d),p=c!=null&&c.has(t.key)?c.get(t.key):this._originalValue(d,t.key)??null,f=Pt(t,p,s,i,o);a.push([d,t.key,f])}this._setStagedBulk(a),t.type==="taxonomy-node"&&r!==void 0&&this._setStagedTaxonodeBulk(this._selected,t.key,r)},this._onRowTaxonomyEntry=e=>{const{fileId:t,fieldKey:i,entry:s}=e.detail;this._setStagedTaxonodeSingle(t,i,s)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(this._missingRequiredFieldKey!=null||!await this._confirmDiscardPending())return;const e=[],t=[];for(const[s,r]of this._staged){if(!this._originalFiles.get(s))continue;const a={},d={};for(const[c,p]of r){const f=this._originalValue(s,c);if(JSON.stringify(p)!==JSON.stringify(f))if(ht(c)){const g=ft(c);if(!g)continue;const v=p===""||p==null;g==="position"?d.position=v?void 0:Number(p):d.ref=v?void 0:String(p)}else a[c]=p}Object.keys(a).length>0&&e.push({fileId:s,meta:a}),Object.keys(d).length>0&&t.push({fileId:s,product:d})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),t.length>0&&this.dispatchEvent(new CustomEvent("product-save-batch",{detail:{changes:t},bubbles:!0,composed:!0}));const i=[];for(const[s,r]of this._stagedTaxonodes){const o=this._originalFiles.get(s);if(!o)continue;const a=o.taxonodes??{},d={};for(const[c,p]of r){const f=a[c]??null;JSON.stringify(p??null)!==JSON.stringify(f??null)&&(d[c]=p??null)}Object.keys(d).length>0&&i.push({fileId:s,taxonodes:d})}i.length>0&&this.dispatchEvent(new CustomEvent("taxonomy-save-batch",{detail:{changes:i},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null}_initStaged(){var a,d;const e=new Map,t=new Map,i=new Set,s=new Map,r=((a=this.schema)==null?void 0:a.productsEnabled)===!0;for(const c of this.files){const p=new Map;if(c.meta)for(const[f,g]of Object.entries(c.meta))p.set(f,g);if(r){const f=c.product;f.ref!==void 0&&p.set(Mt,f.ref),f.position!==void 0&&p.set(jt,f.position)}e.set(c.id,p),c.taxonodes&&t.set(c.id,new Map(Object.entries(c.taxonodes))),i.add(c.id),s.set(c.id,c)}this._staged=e,this._stagedTaxonodes=t,this._selected=i,this._originalFiles=s;const o=this.initialFieldKey;o&&((d=this.schema)!=null&&d.fieldsByKey.has(o))?this._activeFieldKey=o:this.schema&&this.schema.fields.length>0&&(this._activeFieldKey=this.schema.fields[0].key)}_setStagedValue(e,t,i){const s=new Map(this._staged),r=new Map(s.get(e)??new Map);r.set(t,i),s.set(e,r),this._staged=s}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,s,r]of e){const o=new Map(t.get(i)??new Map);o.set(s,r),t.set(i,o)}this._staged=t}_setStagedTaxonodeBulk(e,t,i){const s=new Map(this._stagedTaxonodes);for(const r of e){const o=new Map(s.get(r)??new Map);o.set(t,i),s.set(r,o)}this._stagedTaxonodes=s}_setStagedTaxonodeSingle(e,t,i){const s=new Map(this._stagedTaxonodes),r=new Map(s.get(e)??new Map);r.set(t,i),s.set(e,r),this._stagedTaxonodes=s}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _ultratagsPresentOnSelection(){var i,s;const e=this._activeField;if(!e||e.type!=="ultratags")return[];let t=[];for(const r of this._selected){const o=this._originalFiles.get(r),a=(i=this._staged.get(r))==null?void 0:i.get(e.key),d=a!==void 0?a:(s=o==null?void 0:o.meta)==null?void 0:s[e.key],c=_e(d);c.length&&(t=Ie(t,c,!1))}return t.filter(r=>typeof r!="string")}_originalValue(e,t){var s,r;const i=this._originalFiles.get(e);if(i){if(ht(t)){const o=ft(t);return o?(s=i.product)==null?void 0:s[o]:void 0}return(r=i.meta)==null?void 0:r[t]}}_refreshMissingRequired(){const t=!!this.schema&&!!this.config&&Vt(this.schema,this.config)?Ut(this._staged,this._originalFiles,this.schema,this.config??void 0,this.dependencies):new Set;let i=null;if(this.schema&&t.size>0){for(const o of this.schema.fields)if(t.has(o.key)){i=o.key;break}}i!==this._missingRequiredFieldKey&&(this._missingRequiredFieldKey=i);const s=this._missingRequiredKeys;let r=s.size!==t.size;if(!r){for(const o of t)if(!s.has(o)){r=!0;break}}r&&(this._missingRequiredKeys=t)}_selectedFileInputs(){const e=[];for(const t of this.files){if(!this._selected.has(t.id))continue;const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[r,o]of i)s[r]=o;e.push({id:t.id,mime:t.type??"",meta:s})}return e}_recomputeResolvedSchemas(){if(!this.schema||this.dependencies.length===0){this._cachedBulkResolved=new Map,this._cachedPerFileResolved=new Map;return}this._cachedBulkResolved=ii(this._selectedFileInputs(),this.schema,this.dependencies);const e=new Map;for(const t of this.files){const i=this._staged.get(t.id),s={...t.meta};if(i)for(const[r,o]of i)s[r]=o;e.set(t.id,$t({mime:t.type??"",meta:s},this.schema,this.dependencies))}this._cachedPerFileResolved=e}_advanceActiveFieldIfHidden(){var i,s;if(!this.schema||this._cachedBulkResolved.size===0)return;const e=(i=this.schema.fieldsByKey)==null?void 0:i.get(this._activeFieldKey);if(!e||!((s=this._cachedBulkResolved.get(e.ckey))!=null&&s.hidden))return;const t=this.schema.fields.find(r=>{var o;return!((o=this._cachedBulkResolved.get(r.ckey))!=null&&o.hidden)});t&&t.key!==this._activeFieldKey&&(this._activeFieldKey=t.key)}get _filledFields(){var t;const e=new Set;for(const i of((t=this.schema)==null?void 0:t.fields)??[])for(const[s,r]of this._staged){const o=r.get(i.key),a=this._originalValue(s,i.key);if(o!==void 0&&!ne(o)&&JSON.stringify(o)!==JSON.stringify(a)){e.add(i.key);break}}return e}get _hasPendingValue(){return this._pendingOp!=null&&!ne(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0}):Promise.resolve(!0)}willUpdate(e){(e.has("_staged")||e.has("schema")||e.has("config")||e.has("dependencies"))&&this._refreshMissingRequired(),(e.has("_staged")||e.has("_selected")||e.has("schema")||e.has("dependencies")||e.has("files"))&&(this._recomputeResolvedSchemas(),this._advanceActiveFieldIfHidden())}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var s;const i=(s=this.shadowRoot)==null?void 0:s.querySelector(".fm-confirm .btn-ghost");i==null||i.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}get _sortedFiles(){const e=[...this.files];return e.sort((t,i)=>{const s=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?s:-s}),e}render(){var v,y,E,b,re;if(!((y=(v=this.schema)==null?void 0:v.fields)!=null&&y.length))return l`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${J=>J.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">${h("fillMultipleAssets","Fill multiple assets")}</span>
              <button class="fm-topbar-close" @click=${this._onClose} title=${h("close","Close")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">${h("noMetadataFieldsConfigured","No metadata fields configured")}</div>
          </div>
        </div>
      `;const e=this._activeField,t=this._sortedFiles,i=this._selected.size===this.files.length&&this.files.length>0,s=this._selected.size>0&&!i,r=this._missingRequiredFieldKey,o=this._cachedBulkResolved,a=this._cachedPerFileResolved,d=e==null?void 0:e.ckey,c=d?o.get(d):void 0,p=r?((E=this.schema.fieldsByKey.get(r))==null?void 0:E.title)||r:"",f=r!=null&&this._activeFieldKey===r,g=r!=null&&!f;return l`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${J=>J.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">${h("fillMultipleAssets","Fill multiple assets")}</span>
            ${(b=this.schema.regionalVariantsGroups)!=null&&b.length?l`<sfx-regional-settings
                  class="fm-topbar-regional"
                  .groups=${this.schema.regionalVariantsGroups}
                  .selectedFilters=${((re=this.config)==null?void 0:re.regionalFilters)??{}}
                ></sfx-regional-settings>`:x}
            <button class="fm-topbar-close" @click=${this._onClose} title=${h("close","Close")}>
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
              .bulkResolvedSchema=${o}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              <!-- Op bar -->
              ${e?l`
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
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  `:x}

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
                  ${h("name","Name")}
                  <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                </div>
                <div class="fm-th-size">${h("size","Size")}</div>
                <div class="fm-th-field">${(e==null?void 0:e.title)??""}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${e?l`
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
                        .perFileResolved=${a}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                        @row-taxonomy-entry=${this._onRowTaxonomyEntry}
                      ></sfx-bulk-meta-table>
                    `:x}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 ${h("back","Back")}
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>${h("cancel","Cancel")}</button>
            <!-- Single primary button so transitions between Save and "Next
                 required" don't recreate the DOM node (preserves focus + the
                 hover/active animation). Class, handler, content, and disabled
                 state all swap together.
                 Three states:
                   1. No required field missing      → "Save" (enabled)
                   2. Missing field is NOT active    → "Next required: X →"
                   3. Missing field IS active        → "Save" (disabled) -->
            <button
              class=${It({"btn-primary":!0,"btn-primary--next":g})}
              @click=${g?this._onJumpToNextRequired:this._onSave}
              ?disabled=${f}
              title=${g?h("jumpToField","Jump to {{field}}",{field:p}):""}
            >
              ${g?l`<span class="btn-primary-label">${h("nextRequired","Next required: {{field}}",{field:p})}</span><span class="btn-primary-arrow" aria-hidden="true">→</span>`:h("save","Save")}
            </button>
          </div>

          ${this._confirmVisible?l`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${J=>J.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">${h("discardBulkChanges","You have unapplied bulk changes. Discard them?")}</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>${h("cancel","Cancel")}</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>${h("discard","Discard")}</button>
                </div>
              </div>
            </div>
          `:x}
        </div>
      </div>
    `}};lt.styles=[zi];let w=lt;$([u({attribute:!1})],w.prototype,"schema");$([u({attribute:!1})],w.prototype,"files");$([u({attribute:!1})],w.prototype,"config");$([u({attribute:!1})],w.prototype,"autocomplete");$([u({attribute:!1})],w.prototype,"taxonomyService");$([u({attribute:!1})],w.prototype,"ultratags");$([u({attribute:!1})],w.prototype,"defaultLanguage");$([u({attribute:!1})],w.prototype,"initialFieldKey");$([u({attribute:!1})],w.prototype,"dependencies");$([m()],w.prototype,"_activeFieldKey");$([m()],w.prototype,"_staged");$([m()],w.prototype,"_stagedTaxonodes");$([m()],w.prototype,"_selected");$([m()],w.prototype,"_sortAsc");$([m()],w.prototype,"_pendingOp");$([m()],w.prototype,"_confirmVisible");$([m()],w.prototype,"_missingRequiredFieldKey");$([m()],w.prototype,"_missingRequiredKeys");customElements.define("sfx-bulk-metadata-modal",w);const vt={text:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${S`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${S`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${S`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`,"asset-attachments":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,"attachments-assets":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M13.5 7.5L7.8 13.2a3.2 3.2 0 0 1-4.53-4.53l6-6a2.13 2.13 0 0 1 3.02 3.02l-6 6a1.07 1.07 0 0 1-1.51-1.51l5.3-5.3"/>`}
  </svg>`,ultratags:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<path d="M8.5 1.5H3a1.5 1.5 0 0 0-1.5 1.5v5.5a1 1 0 0 0 .29.71l5.5 5.5a1 1 0 0 0 1.42 0l5.5-5.5a1 1 0 0 0 0-1.42L8.71 1.79A1 1 0 0 0 8 1.5z"/><circle cx="5" cy="5" r="0.75" fill="currentColor" stroke="none"/><path d="M12.5 1.5l0.5 1.5L14.5 3.5l-1.5 0.5L12.5 5.5l-0.5-1.5L10.5 3.5l1.5-0.5z" fill="currentColor" stroke="none"/>`}
  </svg>`,"taxonomy-node":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${S`<rect x="5" y="1.5" width="6" height="3" rx="0.5"/><rect x="1.5" y="11.5" width="4.5" height="3" rx="0.5"/><rect x="10" y="11.5" width="4.5" height="3" rx="0.5"/><path d="M8 4.5v3"/><path d="M3.75 11.5V8.5h8.5v3"/>`}
  </svg>`};function Vi(n){return vt[n]??vt.text}var Ui=Object.defineProperty,W=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ui(e,t,s),s};const dt=class dt extends P{constructor(){super(...arguments),this.activeFieldKey="",this.filledFields=new Set,this.missingRequiredKeys=new Set,this.config=null,this.bulkResolvedSchema=null,this._collapsed=new Set,this._isNarrow=!1,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){var t,i;return(i=(t=this.bulkResolvedSchema)==null?void 0:t.get(e.ckey))!=null&&i.required?!0:Ct(e,this.config??void 0)}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}updated(e){var i,s;if((i=super.updated)==null||i.call(this,e),!e.has("activeFieldKey")||!this.activeFieldKey)return;const t=(s=this.renderRoot)==null?void 0:s.querySelector(".field-item.active");t==null||t.scrollIntoView({block:"nearest"})}render(){if(!this.schema)return x;const e=this.bulkResolvedSchema;return l`
      ${this.schema.groups.map(t=>{var r;const i=this._isNarrow||!this._collapsed.has(t.uuid);if(e&&t.ckey&&((r=e.get(t.ckey))!=null&&r.hidden))return x;const s=e?t.fields.filter(o=>!St(o,t,e)):t.fields;return s.length===0?x:l`
          <button
            class="group-label"
            @click=${()=>this._toggleGroup(t.uuid)}
            aria-expanded=${i}
          >
            <span class="group-label-text">${t.name}</span>
            <svg class="group-chevron ${i?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${i?s.map(o=>l`
                  <button
                    class="field-item ${this.activeFieldKey===o.key?"active":""}"
                    @click=${()=>this._onFieldClick(o.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${Vi(o.type)}</span>
                    <span class="field-name">${o.title}</span>
                    ${this.filledFields.has(o.key)?l`<span class="field-dot"></span>`:x}
                    ${this._isRequired(o)?l`<span
                          class=${It({"field-required":!0,unmet:this.missingRequiredKeys.has(o.key)})}
                          aria-hidden="true"
                        >*</span>`:x}
                  </button>
                `):x}
        `})}
    `}};dt.styles=[qi];let N=dt;W([u({attribute:!1})],N.prototype,"schema");W([u({attribute:!1})],N.prototype,"activeFieldKey");W([u({attribute:!1})],N.prototype,"filledFields");W([u({attribute:!1})],N.prototype,"missingRequiredKeys");W([u({attribute:!1})],N.prototype,"config");W([u({attribute:!1})],N.prototype,"bulkResolvedSchema");W([m()],N.prototype,"_collapsed");W([m()],N.prototype,"_isNarrow");customElements.define("sfx-bulk-meta-sidebar",N);var Hi=Object.defineProperty,z=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Hi(e,t,s),s},V;const L=(V=class extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.ultratagsPresentOnSelection=[],this.config=null,this.selectedCount=0,this.allowedValues=null,this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._opDropdownOpen=!1,this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this._pendingTaxonode=e.detail.entry},this._onOpDropdownClose=e=>{if(!this._opDropdownOpen)return;const t=this.renderRoot.querySelector(".op-dropdown-wrap");if(!t)return;e.composedPath().includes(t)||(this._opDropdownOpen=!1)},this._onFieldBlur=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldChange=e=>{e.stopPropagation(),this._value=e.detail.value,this._emitPendingChange()},this._onFieldEscape=e=>{e.stopPropagation()},this._onValueKeydown=e=>{var r;if(e.key!=="Enter")return;const t=(r=this.field)==null?void 0:r.type;if(!t||!V._ENTER_APPLY_TYPES.has(t))return;const i=e.composedPath().find(o=>o instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;e.preventDefault();const s=e.composedPath().find(o=>o instanceof HTMLInputElement);s&&s.value!==void 0&&(this._value=s.value),this._onApply()}}get _availableOps(){return this.field?Li(this.field.type):[]}static _emptyValueForType(e){switch(e){case"multi-select":case"tags":case"ultratags":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};case"asset-attachments":case"attachments-assets":case"integer-list":return null;case"taxonomy-node":return"";default:return""}}get _effectiveValue(){var e;return this._value??V._emptyValueForType((e=this.field)==null?void 0:e.type)}willUpdate(e){e.has("field")&&this.field&&(this._operation="SET",this._value=void 0,this._pendingTaxonode=null,this._emitPendingChange())}_onOpSelect(e){this._operation=e,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var e,t;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value,taxonomyEntry:((e=this.field)==null?void 0:e.type)==="taxonomy-node"?this._operation==="DELETE"?null:this._pendingTaxonode:void 0},bubbles:!0,composed:!0})),this._value=void 0,this._pendingTaxonode=null,this._operation==="DELETE"&&!Le(this._operation,(t=this.field)==null?void 0:t.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var e,t;return this.selectedCount===0?!0:this._operation==="DELETE"?Ce.has((e=this.field)==null?void 0:e.type)?ne(this._value):Ee.has((t=this.field)==null?void 0:t.type)?ne(this._value):!1:ne(this._value)}render(){var s;if(!this.field)return x;if(we(this.field)){const r=Ve();return l`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${r}">
            ${Lt}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${r}</span>
            </div>
          </div>
        </div>
      `}const e=this._availableOps,t=e.length>1,i=e.find(r=>r.key===this._operation);return l`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">${h("operation","Operation")}</span>
          ${t?l`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${(i==null?void 0:i.label)??h("bulkOpSet","Set")}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  ${this._opDropdownOpen?l`
                        <div class="op-menu">
                          ${e.map(r=>l`
                              <button
                                class="op-option ${r.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(r.key)}
                              >
                                ${r.label}
                              </button>
                            `)}
                        </div>
                      `:x}
                </div>
              `:l`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(i==null?void 0:i.label)??h("bulkOpOverwrite","Overwrite")}</span>
                </div>
              `}
        </div>

        ${Le(this._operation,this.field.type)?l`
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
                    .language=${(s=this.config)==null?void 0:s.language}
                    .defaultLanguage=${this.defaultLanguage}
                    .ultratagsRestrictToItems=${this.field.type==="ultratags"&&this._operation==="DELETE"?this.ultratagsPresentOnSelection:null}
                    .allowedValues=${this.allowedValues}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:x}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `}},V.styles=[Bi],V._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),V);z([u({attribute:!1})],L.prototype,"field");z([u({attribute:!1})],L.prototype,"autocomplete");z([u({attribute:!1})],L.prototype,"taxonomyService");z([u({attribute:!1})],L.prototype,"ultratags");z([u({attribute:!1})],L.prototype,"defaultLanguage");z([u({attribute:!1})],L.prototype,"ultratagsPresentOnSelection");z([u({attribute:!1})],L.prototype,"config");z([u({type:Number})],L.prototype,"selectedCount");z([u({attribute:!1})],L.prototype,"allowedValues");z([m()],L.prototype,"_operation");z([m()],L.prototype,"_value");z([m()],L.prototype,"_pendingTaxonode");z([m()],L.prototype,"_opDropdownOpen");let Gi=L;customElements.define("sfx-bulk-meta-op-bar",Gi);var Yi=Object.defineProperty,K=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Yi(e,t,s),s};const ct=class ct extends P{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.stagedTaxonodes=new Map,this.selected=new Set,this.pendingOp=null,this.config=null,this.perFileResolved=new Map}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):e.meta[this.field.key]}_getTaxonodeEntry(e){var i;const t=this.stagedTaxonodes.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key)??null:((i=e.taxonodes)==null?void 0:i[this.field.key])??null}render(){return l`
      ${this.files.map(e=>{const t=this.perFileResolved.get(e.id),i=t==null?void 0:t.get(this.field.ckey),s=(i==null?void 0:i.allowedValues)??null;return l`
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
            .allowedValues=${s}
          ></sfx-bulk-meta-row>
        `})}
    `}};ct.styles=[Mi];let T=ct;K([u({attribute:!1})],T.prototype,"files");K([u({attribute:!1})],T.prototype,"field");K([u({attribute:!1})],T.prototype,"staged");K([u({attribute:!1})],T.prototype,"stagedTaxonodes");K([u({attribute:!1})],T.prototype,"selected");K([u({attribute:!1})],T.prototype,"pendingOp");K([u({attribute:!1})],T.prototype,"config");K([u({attribute:!1})],T.prototype,"autocomplete");K([u({attribute:!1})],T.prototype,"taxonomyService");K([u({attribute:!1})],T.prototype,"ultratags");K([u({attribute:!1})],T.prototype,"defaultLanguage");K([u({attribute:!1})],T.prototype,"perFileResolved");customElements.define("sfx-bulk-meta-table",T);var Ji=Object.defineProperty,q=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&Ji(e,t,s),s};const ut=class ut extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.taxonomyEntry=null,this.selected=!1,this.pendingOp=null,this.config=null,this.allowedValues=null,this._error=null,this._onFieldBlur=e=>{e.stopPropagation();const{value:t}=e.detail,i=Et(this.field,t,this.config??void 0);if(i){this._error=i;return}this._error=null;const s={meta:{...this.file.meta,[this.field.key]:this.value}},r=Ke(this.field,t,s,ee(this.field,this.config));JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))},this._onTaxonomyEntryChange=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("row-taxonomy-entry",{detail:{fileId:this.file.id,fieldKey:e.detail.key,entry:e.detail.entry},bubbles:!0,composed:!0}))}}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){const e=this.pendingOp;return!e||!this.field?this.value:Pt(this.field,this.value,e.value,e.operation,ee(this.field,this.config))}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var t,i;const e=this.file;return l`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl?l`<img class="row-thumb" src=${e.previewUrl} alt="" />`:l`<img class="row-thumb row-thumb-fallback"
              src=${Ht(this._getExtension(e.name))}
              alt=${h("extFile","{{ext}} file",{ext:this._getExtension(e.name)})}
              @error=${s=>{const r=s.target,o=Gt();!r.dataset.fallback&&r.src!==o&&(r.dataset.fallback="1",r.src=o)}}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size?Yt(e.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.pendingOp&&this.selected?l`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .oldTaxonomyEntry=${((t=this.file.taxonodes)==null?void 0:t[this.field.key])??null}
                .newTaxonomyEntry=${this.taxonomyEntry}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:l`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${Rt(this.field,this.value,ee(this.field,this.config))}
                  .autocomplete=${this.autocomplete}
                  .taxonomyService=${this.taxonomyService}
                  .taxonomyEntry=${this.taxonomyEntry}
                  .ultratags=${this.ultratags}
                  .language=${(i=this.config)==null?void 0:i.language}
                  .defaultLanguage=${this.defaultLanguage}
                  .allowedValues=${this.allowedValues}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?l`<div class="row-error" role="alert">${this._error}</div>`:x}`}
        </div>
      </div>
    `}};ut.styles=[Ki];let I=ut;q([u({attribute:!1})],I.prototype,"file");q([u({attribute:!1})],I.prototype,"field");q([u({attribute:!1})],I.prototype,"value");q([u({attribute:!1})],I.prototype,"taxonomyEntry");q([u({type:Boolean})],I.prototype,"selected");q([u({attribute:!1})],I.prototype,"pendingOp");q([u({attribute:!1})],I.prototype,"config");q([u({attribute:!1})],I.prototype,"autocomplete");q([u({attribute:!1})],I.prototype,"taxonomyService");q([u({attribute:!1})],I.prototype,"ultratags");q([u({attribute:!1})],I.prototype,"defaultLanguage");q([u({attribute:!1})],I.prototype,"allowedValues");q([m()],I.prototype,"_error");customElements.define("sfx-bulk-meta-row",I);const Qi=new Set(["multi-select","tags","ultratags"]);function yt(n,e,t){return!e.regional_variants_group_uuid||n==null||typeof n!="object"||Array.isArray(n)?n:n[t??"en"]}function _t(n){return Array.isArray(n)?n:[]}function wt(n){return n==null||n===""||Array.isArray(n)&&n.length===0?!0:typeof n=="object"&&!Array.isArray(n)?!Object.values(n).some(e=>e!=null&&e!==""):!1}function Pe(n,e){var i;const t=(i=n.possible_values)==null?void 0:i.find(s=>s.internal_unique_value===e||s.api_value===e);return(t==null?void 0:t.label)??String(e)}function kt(n,e){if(e==null||e==="")return"";switch(n.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Pe(n,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function Wi(n,e){const t=n.map(a=>typeof a=="string"?a:String(a)),i=e.map(a=>typeof a=="string"?a:String(a)),s=new Set(t),r=new Set(i),o=[];for(const a of i)o.push({label:a,state:s.has(a)?"kept":"added"});for(const a of t)r.has(a)||o.push({label:a,state:"removed"});return o}function Xi(n,e,t){const i=_e(n),s=_e(e),r=t||"en",o=f=>f.sid||f.slug||f.uuid||"",a=f=>ye({i18n:f.i18n,slug:f.slug||""},r,r).value||f.slug||f.sid||"",d=new Set(i.map(o).filter(Boolean)),c=new Set(s.map(o).filter(Boolean)),p=[];for(const f of s){const g=o(f);p.push({label:a(f),state:d.has(g)?"kept":"added"})}for(const f of i){const g=o(f);c.has(g)||p.push({label:a(f),state:"removed"})}return p}function Zi(n,e,t){const i=new Set(n.map(o=>JSON.stringify(o))),s=new Set(e.map(o=>JSON.stringify(o))),r=[];for(const o of e){const a=JSON.stringify(o),d=typeof o=="string"?Pe(t,o):String(o);r.push({label:d,state:i.has(a)?"kept":"added"})}for(const o of n){const a=JSON.stringify(o);if(!s.has(a)){const d=typeof o=="string"?Pe(t,o):String(o);r.push({label:d,state:"removed"})}}return r}function es(n,e,t,i){const s=ee(n,i),r=i==null?void 0:i.language,o=yt(e,n,s),a=yt(t,n,s);if(Qi.has(n.type)){if(n.type==="ultratags")return{kind:"array",items:Xi(e,t,r)};const d=_t(o),c=_t(a);return n.type==="tags"?{kind:"array",items:Wi(d,c)}:{kind:"array",items:Zi(d,c,n)}}return{kind:"scalar",oldDisplay:kt(n,o),newDisplay:kt(n,a),oldEmpty:wt(o),newEmpty:wt(a)}}var ts=Object.defineProperty,ce=(n,e,t,i)=>{for(var s=void 0,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=o(e,t,s)||s);return s&&ts(e,t,s),s};const pt=class pt extends P{constructor(){super(...arguments),this._i18nController=new G(this),this.oldTaxonomyEntry=null,this.newTaxonomyEntry=null,this.config=null}_renderArrayDiff(e){const t={added:h("added","Added"),removed:h("removed","Removed"),kept:h("kept","Kept")};return l`
      <div class="diff-wrap" aria-label=${h("bulkOperationPreview","Bulk operation preview")}>
        ${e.items.length===0?l`<span class="diff-chip diff-chip--kept diff-chip--empty">\u2014</span>`:e.items.map(i=>l`
                <span
                  class="diff-chip diff-chip--${i.state}"
                  aria-label="${t[i.state]??i.state}: ${i.label}"
                >
                  ${i.state==="removed"?l`<s>${i.label}</s>`:i.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=h("willChangeFromTo","Will change from {{from}} to {{to}}",{from:e.oldEmpty?h("emptyValue","empty"):e.oldDisplay,to:e.newEmpty?h("emptyValue","empty"):e.newDisplay});return l`
      <div class="diff-wrap diff-scalar-text" aria-label=${h("bulkOperationPreview","Bulk operation preview")}>
        <span class="sr-only">${t}</span>
        ${e.newEmpty?x:l`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}_renderTaxonomyScalar(){var o,a;const e=((o=this.newTaxonomyEntry)==null?void 0:o.path)??"",t=((a=this.oldTaxonomyEntry)==null?void 0:a.path)??"",i=!t,s=!e,r=h("willChangeFromTo","Will change from {{from}} to {{to}}",{from:i?h("emptyValue","empty"):t,to:s?h("emptyValue","empty"):e});return l`
      <div class="diff-wrap diff-scalar-text" aria-label=${h("bulkOperationPreview","Bulk operation preview")}>
        <span class="sr-only">${r}</span>
        ${s?x:l`<span class="diff-new" aria-hidden="true">${e}</span>`}
      </div>
    `}render(){if(!this.field)return x;if(this.field.type==="taxonomy-node")return this._renderTaxonomyScalar();const e=es(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};pt.styles=[Ni];let H=pt;ce([u({attribute:!1})],H.prototype,"field");ce([u({attribute:!1})],H.prototype,"oldValue");ce([u({attribute:!1})],H.prototype,"newValue");ce([u({attribute:!1})],H.prototype,"oldTaxonomyEntry");ce([u({attribute:!1})],H.prototype,"newTaxonomyEntry");ce([u({attribute:!1})],H.prototype,"config");customElements.define("sfx-bulk-meta-diff-view",H);export{ze as DEFAULT_HUB_API_BASE,At as HUB_HEADERS_HINT,w as SfxBulkMetadataModal,ss as canReachHub,ds as clearDependenciesCache,ns as clearSchemaCache,cs as createTagsAutocomplete,us as createTaxonomyService,ps as createUltratagsService,gs as deepMergeMeta,Be as effectiveHubHeaders,ls as fetchDependencies,os as fetchMetadataSchema,xs as getFilesWithMissingRequired,as as hasCachedDependencies,rs as hasCachedSchema,Ot as hasSessionToken,ms as isAssetHasMetadataValue,qe as isDefaultHubBase,ne as isEmpty,Rt as mapValueFromBackend,Ke as mapValueToBackend,Tt as parseMetadataSchema,$t as resolveForFileWithSchema,Et as validateField};
