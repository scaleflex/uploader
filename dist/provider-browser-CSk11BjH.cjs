"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("lit"),c=require("lit/decorators.js"),x=require("./sfx-uploader-BOM_qghp.cjs"),y="sfx-uploader-token:";function m(l){try{return localStorage.getItem(`${y}${l}`)}catch{return null}}function w(l,e){try{localStorage.setItem(`${y}${l}`,e)}catch{}}function v(l){try{localStorage.removeItem(`${y}${l}`)}catch{}}function $(l,e){const t=r=>{if(l&&r.source!==l)return;const o=typeof r.data=="string"?S(r.data):r.data;o!=null&&o.token&&e(o.token)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)}function S(l){try{return JSON.parse(l)}catch{return null}}var F=Object.defineProperty,p=(l,e,t,r)=>{for(var o=void 0,u=l.length-1,i;u>=0;u--)(i=l[u])&&(o=i(e,t,o)||o);return o&&F(e,t,o),o};const k=class k extends s.LitElement{constructor(){super(...arguments),this.t=(e,t)=>typeof t=="string"?t:e,this.provider="google-drive",this.companionUrl="",this.multi=!0,this.maxSelect=null,this.transformThumbnail=e=>e,this._authenticated=!1,this._loading=!1,this._items=[],this._selectedIds=new Set,this._breadcrumbs=[],this._nextPagePath=null,this._error=null,this._loadingMore=!1,this._username=null,this._resolvingFolders=!1,this._resolveProgress=0,this._cleanupAuthListener=null,this._authWindow=null,this._resolveAbort=null,this._handleConnect=()=>{var t;try{if(this._authWindow&&!this._authWindow.closed){this._authWindow.focus();return}}catch{this._authWindow=null}const e=x.getAuthUrl(this.companionUrl,this.provider);this._authWindow=window.open(e,"_blank","width=600,height=600"),(t=this._cleanupAuthListener)==null||t.call(this),this._cleanupAuthListener=$(this._authWindow,r=>{var o;this._authWindow=null,(o=this._cleanupAuthListener)==null||o.call(this),this._cleanupAuthListener=null,w(this.provider,r),this._authenticated=!0,this._loadFolder("")})},this._lastClickedIndex=null,this._toggleSelectAll=()=>{if(this._items.every(t=>this._selectedIds.has(t.id)))this._selectedIds=new Set;else{const t=new Set;let r=0;for(const o of this._items)o.isFolder?t.add(o.id):(this.maxSelect===null||r<this.maxSelect)&&(t.add(o.id),r++);this._selectedIds=t}},this._onAddSelected=async()=>{var u,i;const e=m(this.provider);if(!e)return;const t=this._items.filter(n=>!n.isFolder&&this._selectedIds.has(n.id)),r=this._items.filter(n=>n.isFolder&&this._selectedIds.has(n.id)),o=t.map(n=>({companionUrl:this.companionUrl,provider:this.provider,token:e,requestPath:n.requestPath,fileId:n.id,name:n.name,mimeType:n.mimeType,size:n.size,thumbnail:n.thumbnail}));if(r.length>0){(u=this._resolveAbort)==null||u.abort(),this._resolveAbort=new AbortController;const n=this._resolveAbort.signal;this._resolvingFolders=!0,this._resolveProgress=0;let h=0;try{for(const a of r){const g=await x.listFolderRecursive(this.companionUrl,this.provider,e,a.requestPath,a.name,n);if(n.aborted)return;for(const f of g)o.push({companionUrl:this.companionUrl,provider:this.provider,token:e,requestPath:f.requestPath,fileId:f.id,name:f.name,mimeType:f.mimeType,size:f.size,thumbnail:f.thumbnail,relativeFolder:f.relativeFolder});h+=g.length,this._resolveProgress=h}}catch(a){if(n.aborted)return;if(this._resolvingFolders=!1,a instanceof x.AuthExpiredError){v(this.provider),this._authenticated=!1;return}this._error=a instanceof Error?a.message:this.t("failedToReadFolder","Failed to read folder contents");return}finally{((i=this._resolveAbort)==null?void 0:i.signal)===n&&(this._resolveAbort=null)}this._resolvingFolders=!1}this.dispatchEvent(new CustomEvent("connector-files-selected",{detail:{files:o},bubbles:!0,composed:!0}))},this._onClose=()=>{this.dispatchEvent(new CustomEvent("connector-close",{bubbles:!0,composed:!0}))},this._handleLogout=async()=>{const e=m(this.provider);if(e){try{await x.logout(this.companionUrl,this.provider,e)}catch{}v(this.provider)}this._reset()},this._onBack=()=>{this._breadcrumbs.length!==0&&this._onBreadcrumbClick(this._breadcrumbs.length-2)},this._cancelResolve=()=>{var e;(e=this._resolveAbort)==null||e.abort(),this._resolveAbort=null,this._resolvingFolders=!1,this._resolveProgress=0}}connectedCallback(){super.connectedCallback(),this._checkAuth()}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this._cleanupAuthListener)==null||e.call(this),this._cleanupAuthListener=null,(t=this._resolveAbort)==null||t.abort(),this._resolveAbort=null}willUpdate(e){e.has("provider")&&e.get("provider")!==void 0&&(this._reset(),this._checkAuth())}_reset(){var e;(e=this._resolveAbort)==null||e.abort(),this._resolveAbort=null,this._authenticated=!1,this._loading=!1,this._items=[],this._selectedIds=new Set,this._lastClickedIndex=null,this._breadcrumbs=[],this._nextPagePath=null,this._error=null,this._username=null,this._resolvingFolders=!1,this._resolveProgress=0}_checkAuth(){m(this.provider)&&(this._authenticated=!0,this._loadFolder(""))}get _providerDef(){return x.getProviderSources([this.provider])[0]??null}get _providerLabel(){var e;return((e=this._providerDef)==null?void 0:e.label)??this.provider}async _loadFolder(e){const t=m(this.provider);if(!t){this._authenticated=!1;return}this.offsetHeight>0&&(this.style.minHeight=`${this.offsetHeight}px`),this._loading=!0,this._error=null,this._items=[],this._selectedIds=new Set,this._lastClickedIndex=null,this._nextPagePath=null;try{const r=await x.listFiles(this.companionUrl,this.provider,t,e);this._items=r.items,this._nextPagePath=r.nextPagePath,r.username&&(this._username=r.username)}catch(r){r instanceof x.AuthExpiredError?(v(this.provider),this._authenticated=!1):this._error=r instanceof Error?r.message:this.t("failedToLoadFiles","Failed to load files")}finally{this._loading=!1}}_onFolderClick(e){this._breadcrumbs=[...this._breadcrumbs,{name:e.name,path:e.requestPath}],this._loadFolder(e.requestPath)}_onBreadcrumbClick(e){if(e<0)this._breadcrumbs=[],this._loadFolder("");else{const t=this._breadcrumbs[e];this._breadcrumbs=this._breadcrumbs.slice(0,e+1),this._loadFolder(t.path)}}async _onLoadMore(){const e=m(this.provider);if(!(!e||!this._nextPagePath)){this._loadingMore=!0;try{const t=await x.listNextPage(this.companionUrl,e,this._nextPagePath);this._items=[...this._items,...t.items],this._nextPagePath=t.nextPagePath}catch(t){t instanceof x.AuthExpiredError&&(v(this.provider),this._authenticated=!1)}finally{this._loadingMore=!1}}}get _selectedFileCount(){return this._items.filter(e=>!e.isFolder&&this._selectedIds.has(e.id)).length}_toggleSelect(e,t){if(!this.multi){if(e.isFolder)return;this._selectedIds=this._selectedIds.has(e.id)?new Set:new Set([e.id]);const n=this._items.filter(h=>!h.isFolder).findIndex(h=>h.id===e.id);n!==-1&&(this._lastClickedIndex=n);return}const r=this._items.filter(i=>!i.isFolder),o=r.findIndex(i=>i.id===e.id),u=this.maxSelect!==null&&this._selectedFileCount>=this.maxSelect;if(!e.isFolder&&(t!=null&&t.shiftKey)&&this._lastClickedIndex!==null&&o!==-1){const i=Math.min(this._lastClickedIndex,o),n=Math.max(this._lastClickedIndex,o),h=new Set(this._selectedIds);for(let a=i;a<=n;a++)h.has(r[a].id)||this.maxSelect!==null&&[...h].filter(f=>r.some(b=>b.id===f)).length>=this.maxSelect||h.add(r[a].id);this._selectedIds=h}else{const i=new Set(this._selectedIds);i.has(e.id)?i.delete(e.id):(e.isFolder||!u)&&i.add(e.id),this._selectedIds=i}o!==-1&&(this._lastClickedIndex=o)}render(){return s.html`
      ${this._renderHeader()}
      ${this._authenticated?this._loading?this._renderLoading():this._error?this._renderError():this._renderBrowser():this._renderAuthView()}
    `}_renderHeader(){const e=this._providerDef,t=this._authenticated&&this._breadcrumbs.length>0;return s.html`
      <div class="browser-header">
        <button
          class="back-btn"
          ?disabled=${!t}
          @click=${this._onBack}
          title=${this.t("back","Back")}
          aria-label=${this.t("back","Back")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="header-brand">
          ${e!=null&&e.brandHtml?s.html`<div class="header-logo">${x.brandIcon(e)}</div>`:s.nothing}

          <div class="header-title-group">
            <span class="browser-title">${this._providerLabel}</span>
            ${this._authenticated&&this._username?s.html`<span class="header-username">${this._username}</span>`:s.nothing}
          </div>
        </div>
        ${this._authenticated?s.html`<button class="logout-btn" @click=${this._handleLogout}>${this.t("signOut","Sign out")}</button>`:s.nothing}
        <button
          class="close-btn"
          @click=${this._onClose}
          title=${this.t("close","Close")}
          aria-label=${this.t("close","Close")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    `}_renderAuthView(){const e=this._providerDef;return s.html`
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${e!=null&&e.brandHtml?s.html`<span ${x.cspStyle({display:"flex","align-items":"center","justify-content":"center",transform:"scale(2.2)"})}>${x.brandIcon(e)}</span>`:s.html`<svg viewBox="0 0 24 24" fill="none" stroke="var(--sfx-up-primary, #2563eb)" stroke-width="1.5"><path d="M12 2a5 5 0 015 5v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5zm3 8H9v-3a3 3 0 016 0v3z" fill="var(--sfx-up-primary, #2563eb)"/></svg>`}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">
            ${this.t("connectProvider","Connect {{provider}}",{provider:this._providerLabel})}
          </div>
          <div class="auth-text">
            ${this.t("connectProviderHint","Sign in to browse and select files from your {{provider}} account",{provider:this._providerLabel})}
          </div>
        </div>
        <button class="connect-btn" @click=${this._handleConnect}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          ${this.t("signInToProvider","Sign in to {{provider}}",{provider:this._providerLabel})}
        </button>
      </div>
    `}_renderLoading(){const e=[1,2,3,4,5,6,7];return s.html`
      <div class="skeleton-list">
        ${e.map(()=>s.html`
          <div class="skeleton-row">
            <div class="skeleton-check"></div>
            <div class="skeleton-thumb"></div>
            <div class="skeleton-text">
              <div class="skeleton-name"></div>
              <div class="skeleton-size"></div>
            </div>
            <div class="skeleton-modified"></div>
          </div>
        `)}
      </div>
    `}_renderError(){return s.html`
      <div class="error-view">
        <div class="error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${()=>{const e=this._breadcrumbs[this._breadcrumbs.length-1];this._loadFolder((e==null?void 0:e.path)??"")}}>
          ${this.t("tryAgain","Try again")}
        </button>
      </div>
    `}_renderBrowser(){const e=this._items.filter(i=>!i.isFolder),t=this._items.filter(i=>i.isFolder),r=this._selectedIds.size,o=this.maxSelect!==null&&this._selectedFileCount>=this.maxSelect,u=this._items.length>0&&this._items.every(i=>this._selectedIds.has(i.id));return s.html`
      ${this._renderBreadcrumbs()}

      ${this._items.length>0?s.html`
            <div class="list-header">
              <div class="col-check"></div>
              <div class="col-thumb"></div>
              <div class="col-name">${this.t("name","Name")}</div>
              <div class="col-modified">${this.t("lastModified","Last modified")}</div>
            </div>
          `:s.nothing}

      <div class="file-list">
        ${t.length===0&&e.length===0?s.html`
              <div class="empty-state">
                <div class="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                </div>
                <div class="empty-text">${this.t("folderEmpty","This folder is empty")}</div>
              </div>
            `:s.nothing}

        ${t.map(i=>{const n=this._selectedIds.has(i.id);return s.html`
            <div
              class="file-item ${n?"selected":""}"
              @click=${()=>this._onFolderClick(i)}
            >
              ${this.multi?s.html`<input
                    type="checkbox"
                    .checked=${n}
                    aria-label=${this.t("selectFolder","Select folder")}
                    @click=${h=>h.stopPropagation()}
                    @change=${()=>this._toggleSelect(i)}
                  />`:s.html`<span class="checkbox-spacer" aria-hidden="true"></span>`}
              <div class="file-thumb folder-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div class="file-info">
                <div class="file-name">${i.name}</div>
              </div>
              <span class="file-modified">${_(i.modifiedDate,this.t)}</span>
            </div>
          `})}

        ${e.map(i=>{const n=this._selectedIds.has(i.id),h=!n&&o;return s.html`
            <div
              class="file-item ${n?"selected":""} ${h?"disabled":""}"
              @click=${a=>this._toggleSelect(i,a)}
            >
              <input
                type="checkbox"
                .checked=${this._selectedIds.has(i.id)}
                @click=${a=>a.stopPropagation()}
                @change=${()=>this._toggleSelect(i)}
              />
              <div class="file-thumb">
                ${i.thumbnail?s.html`<img src=${this.transformThumbnail(i.thumbnail)} alt="" loading="lazy" referrerpolicy="no-referrer"
                      @error=${a=>{const g=a.target;g.style.display="none",g.parentElement.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'}}
                    />`:s.html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>`}
              </div>
              <div class="file-info">
                <div class="file-name">${i.name}</div>
                <div class="file-meta">
                  ${i.size?s.html`<span class="file-size">${P(i.size)}</span>`:s.nothing}
                </div>
              </div>
              <span class="file-modified">${_(i.modifiedDate,this.t)}</span>
            </div>
          `})}

        ${this._nextPagePath?s.html`
              <button
                class="load-more-btn"
                ?disabled=${this._loadingMore}
                @click=${this._onLoadMore}
              >
                ${this._loadingMore?this.t("loading","Loading"):this.t("loadMore","Load more")}
              </button>
            `:s.nothing}
      </div>

      ${this._items.length>0||r>0?s.html`
            <div class="browser-footer">
              <div class="footer-left">
                ${this.multi?s.html`<button class="select-all-btn" @click=${this._toggleSelectAll}>
                  ${u?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
                </button>`:s.nothing}
                <span class="selected-count ${r>0?"has-selection":""}">
                  ${r>0?this.t("itemsSelected",{count:r,defaultValue_one:"{{count}} item selected",defaultValue_other:"{{count}} items selected"}):this.t("noFilesSelected","No files selected")}
                </span>
              </div>
              <button
                class="add-btn"
                ?disabled=${r===0||this._resolvingFolders}
                @click=${this._onAddSelected}
              >
                ${r>0?this.t("addItems",{count:r,defaultValue_one:"Add {{count}} item",defaultValue_other:"Add {{count}} items"}):this.t("add","Add")}
              </button>
            </div>
          `:s.nothing}

      ${this._resolvingFolders?s.html`
            <div class="busy-overlay">
              <div class="spinner"></div>
              <div class="busy-text">
                ${this._resolveProgress>0?this.t("preparingFilesWithCount",{count:this._resolveProgress,defaultValue_one:"Preparing {{count}} file…",defaultValue_other:"Preparing {{count}} files…"}):this.t("preparingFiles","Preparing files…")}
              </div>
              <button class="busy-cancel-btn" @click=${this._cancelResolve}>
                ${this.t("cancel","Cancel")}
              </button>
            </div>
          `:s.nothing}
    `}_renderBreadcrumbs(){return this._breadcrumbs.length===0?s.nothing:s.html`
      <div class="breadcrumbs">
        <button class="crumb" @click=${()=>this._onBreadcrumbClick(-1)}>
          <svg class="crumb-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          ${this.t("root","Root")}
        </button>
        ${this._breadcrumbs.map((e,t)=>s.html`
            <span class="crumb-sep">&rsaquo;</span>
            ${t<this._breadcrumbs.length-1?s.html`<button class="crumb" @click=${()=>this._onBreadcrumbClick(t)}>${e.name}</button>`:s.html`<span class="crumb-current">${e.name}</span>`}
          `)}
      </div>
    `}};k.styles=s.css`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 1 1 0;
      min-height: 0;
      height: 100%;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-bg, #fff);
    }

    /* --- Header --- */
    .browser-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .back-btn,
    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: var(--sfx-up-border-light, #f1f5f9);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .back-btn:hover:not(:disabled),
    .close-btn:hover {
      background: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .back-btn svg,
    .close-btn svg {
      width: 16px;
      height: 16px;
    }

    .close-btn svg {
      width: 18px;
      height: 18px;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .header-logo {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }

    .header-logo svg {
      width: 20px;
      height: 20px;
    }

    .header-title-group {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .browser-title {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
    }

    .header-username {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .logout-btn {
      border: 1px solid var(--sfx-up-border, #e8edf5);
      background: none;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 6px;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .logout-btn:hover {
      background: var(--destructive-10, #fef2f2);
      color: var(--sfx-up-error, #dc2626);
      border-color: #fecaca;
    }

    /* --- Auth view --- */
    .auth-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 40px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .auth-glow {
      position: absolute;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--sfx-up-primary-bg, #eff6ff) 0%, transparent 70%);
      opacity: 0.7;
      pointer-events: none;
    }

    .auth-logo-wrap {
      position: relative;
      z-index: 1;
    }

    .auth-ring {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-border, #e8edf5);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slowSpin 20s linear infinite;
    }

    .auth-logo {
      width: 64px;
      height: 64px;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slowSpin 20s linear infinite reverse;
    }

    .auth-logo svg {
      width: 34px;
      height: 34px;
    }

    .auth-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .auth-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    .auth-text {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      max-width: 260px;
      line-height: 1.5;
    }

    .connect-btn {
      position: relative;
      z-index: 1;
      height: 42px;
      padding: 0 28px;
      border: none;
      border-radius: 11px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.25));
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .connect-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    .connect-btn:active {
      transform: translateY(0);
    }

    .connect-btn svg {
      width: 16px;
      height: 16px;
    }

    /* --- Breadcrumbs --- */
    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 8px 20px;
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      flex-wrap: wrap;
      background: var(--sfx-up-border-light, #fafbfd);
    }

    .crumb {
      cursor: pointer;
      color: var(--sfx-up-primary, #2563eb);
      border: none;
      background: none;
      font-family: inherit;
      font-size: 12px;
      padding: 3px 6px;
      border-radius: 5px;
      transition: background 0.15s;
      font-weight: 500;
    }

    .crumb:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .crumb-sep {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 10px;
    }

    .crumb-current {
      color: var(--sfx-up-text, #1e293b);
      font-weight: 600;
      padding: 3px 6px;
      font-size: 12px;
    }

    .crumb-home {
      width: 12px;
      height: 12px;
      vertical-align: middle;
      margin-right: 2px;
    }

    /* --- Column header --- */
    .list-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 20px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--sfx-up-text-muted, #94a3b8);
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      background: var(--sfx-up-border-light, #fafbfd);
      flex-shrink: 0;
    }

    .list-header .col-check {
      width: 16px;
      flex-shrink: 0;
    }

    .list-header .col-thumb {
      width: 38px;
      flex-shrink: 0;
    }

    .list-header .col-name {
      flex: 1;
      min-width: 0;
    }

    .list-header .col-modified {
      width: 110px;
      flex-shrink: 0;
      text-align: right;
    }

    .file-modified {
      width: 110px;
      flex-shrink: 0;
      text-align: right;
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* --- File list --- */
    .file-list {
      flex: 1;
      overflow-y: auto;
      padding: 6px 8px;
      min-height: 0;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.15s;
      user-select: none;
      border: 1.5px solid transparent;
      position: relative;
    }

    .file-item:hover {
      background: var(--sfx-up-border-light, #f8fafc);
    }

    .file-item.selected {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
    }

    .file-item.disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
    }

    .file-item input[type='checkbox'] {
      width: 16px;
      height: 16px;
      accent-color: var(--sfx-up-primary, #2563eb);
      flex-shrink: 0;
      cursor: pointer;
    }

    /* Invisible placeholder that reserves the same horizontal slot as the
       checkbox. Used on folder rows in single-select mode so they line up
       with file rows and the column header. */
    .checkbox-spacer {
      display: inline-block;
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    .file-thumb {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: var(--sfx-up-border-light, #f1f5f9);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }

    .file-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .file-thumb svg {
      width: 18px;
      height: 18px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .file-thumb.folder-thumb {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
    }

    .file-thumb.folder-thumb svg {
      color: #d97706;
    }

    .file-info {
      flex: 1;
      min-width: 0;
    }

    .file-name {
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .file-meta {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .file-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }


    /* --- Footer --- */
    .browser-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      gap: 12px;
      background: var(--sfx-up-bg, #fff);
    }

    .footer-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .selected-count {
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 500;
    }

    .selected-count.has-selection {
      color: var(--sfx-up-primary, #2563eb);
    }

    .add-btn {
      height: 36px;
      padding: 0 20px;
      border: none;
      border-radius: 9px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .add-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    .add-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .select-all-btn {
      border: 1px solid var(--sfx-up-border, #e8edf5);
      background: none;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 6px;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .select-all-btn:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.2));
    }

    /* --- Loading / Error --- */
    .loading, .error-view, .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 40px 24px;
      text-align: center;
    }

    .spinner {
      width: 28px;
      height: 28px;
      border: 3px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    .error-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: #fef2f2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .error-icon svg {
      width: 24px;
      height: 24px;
      color: var(--sfx-up-error, #dc2626);
    }

    .error-text {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
      max-width: 260px;
      line-height: 1.4;
    }

    .retry-btn {
      height: 34px;
      padding: 0 16px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
    }

    .retry-btn:hover {
      background: var(--sfx-up-border-light, #f8faff);
      border-color: var(--sfx-up-border, #d1dff0);
    }

    .load-more-btn {
      display: block;
      margin: 8px auto;
      padding: 8px 20px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--sfx-up-primary, #2563eb);
      transition: all 0.15s;
    }

    .load-more-btn:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .empty-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: var(--sfx-up-border-light, #f1f5f9);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .empty-icon svg {
      width: 24px;
      height: 24px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .empty-text {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Skeleton loading --- */
    .skeleton-list {
      flex: 1;
      padding: 6px 8px;
      min-height: 0;
    }

    .skeleton-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
    }

    .skeleton-check {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .skeleton-thumb {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .skeleton-name {
      height: 14px;
      border-radius: 6px;
      background: var(--sfx-up-border-light, #f1f5f9);
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-size {
      height: 11px;
      width: 60px;
      border-radius: 6px;
      background: var(--sfx-up-border-light, #f1f5f9);
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-modified {
      width: 70px;
      height: 11px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--sfx-up-border-light, #f1f5f9);
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-row:nth-child(1) .skeleton-name { width: 65%; animation-delay: 0s; }
    .skeleton-row:nth-child(1) .skeleton-thumb { animation-delay: 0s; }
    .skeleton-row:nth-child(2) .skeleton-name { width: 45%; animation-delay: 0.1s; }
    .skeleton-row:nth-child(2) .skeleton-thumb { animation-delay: 0.1s; }
    .skeleton-row:nth-child(3) .skeleton-name { width: 75%; animation-delay: 0.2s; }
    .skeleton-row:nth-child(3) .skeleton-thumb { animation-delay: 0.2s; }
    .skeleton-row:nth-child(4) .skeleton-name { width: 55%; animation-delay: 0.3s; }
    .skeleton-row:nth-child(4) .skeleton-thumb { animation-delay: 0.3s; }
    .skeleton-row:nth-child(5) .skeleton-name { width: 60%; animation-delay: 0.4s; }
    .skeleton-row:nth-child(5) .skeleton-thumb { animation-delay: 0.4s; }
    .skeleton-row:nth-child(6) .skeleton-name { width: 50%; animation-delay: 0.5s; }
    .skeleton-row:nth-child(6) .skeleton-thumb { animation-delay: 0.5s; }
    .skeleton-row:nth-child(7) .skeleton-name { width: 70%; animation-delay: 0.6s; }
    .skeleton-row:nth-child(7) .skeleton-thumb { animation-delay: 0.6s; }

    @keyframes shimmer {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes slowSpin {
      to { transform: rotate(360deg); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .auth-view { animation: fadeUp 0.35s ease both; }

    @media (prefers-reduced-motion: reduce) {
      .spinner { animation: none; }
      .skeleton-thumb, .skeleton-name, .skeleton-size { animation: none; }
      .auth-ring { animation: none; }
      .auth-logo { animation: none; }
      .auth-view { animation: none; }
    }

    /* Hide the modified column on narrow viewports (mobile fullscreen). */
    @media (max-width: 540px) {
      .list-header .col-modified,
      .file-modified,
      .skeleton-modified {
        display: none;
      }
    }

    /* --- Folder-traversal busy overlay --- */
    .busy-overlay {
      position: absolute;
      inset: 0;
      /* Themed background with a translucent veil so the list shows through.
         Safari < 15.4 needs the -webkit-backdrop-filter alias. */
      background: color-mix(in srgb, var(--sfx-up-bg, #fff) 85%, transparent);
      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(2px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      z-index: 2;
    }

    /* color-mix() lands in Safari 16.4 / Firefox 113 / Chrome 111. Older
       browsers ignore the rule above; this gives them a solid-ish veil. */
    @supports not (background: color-mix(in srgb, red, blue)) {
      .busy-overlay {
        background: rgba(255, 255, 255, 0.85);
      }
    }

    .busy-text {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
      font-weight: 500;
    }

    .busy-cancel-btn {
      height: 32px;
      padding: 0 16px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
    }

    .busy-cancel-btn:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }
  `;let d=k;p([c.property({attribute:!1})],d.prototype,"t");p([c.property({type:String})],d.prototype,"provider");p([c.property({type:String})],d.prototype,"companionUrl");p([c.property({type:Boolean})],d.prototype,"multi");p([c.property({type:Number})],d.prototype,"maxSelect");p([c.property({attribute:!1})],d.prototype,"transformThumbnail");p([c.state()],d.prototype,"_authenticated");p([c.state()],d.prototype,"_loading");p([c.state()],d.prototype,"_items");p([c.state()],d.prototype,"_selectedIds");p([c.state()],d.prototype,"_breadcrumbs");p([c.state()],d.prototype,"_nextPagePath");p([c.state()],d.prototype,"_error");p([c.state()],d.prototype,"_loadingMore");p([c.state()],d.prototype,"_username");p([c.state()],d.prototype,"_resolvingFolders");p([c.state()],d.prototype,"_resolveProgress");function P(l){if(l===0)return"0 B";const e=["B","KB","MB","GB"],t=Math.min(Math.floor(Math.log(l)/Math.log(1024)),e.length-1);return`${(l/Math.pow(1024,t)).toFixed(t===0?0:1)} ${e[t]}`}function _(l,e){if(!l)return"";const t=Date.parse(l);if(Number.isNaN(t))return"";const r=Math.max(0,Date.now()-t),o=6e4,u=60*o,i=24*u,n=30*i,h=365*i,a=Math.round(r/o);if(a<1)return e("justNow","just now");if(a<60)return e("minutesAgo",{count:a,defaultValue_one:"{{count}} minute ago",defaultValue_other:"{{count}} minutes ago"});const g=Math.round(r/u);if(g<24)return e("hoursAgo",{count:g,defaultValue_one:"{{count}} hour ago",defaultValue_other:"{{count}} hours ago"});const f=Math.round(r/i);if(f<2)return e("yesterday","yesterday");if(f<30)return e("daysAgo",{count:f,defaultValue_one:"{{count}} day ago",defaultValue_other:"{{count}} days ago"});const b=Math.round(r/n);return b<12?e("monthsAgo",{count:b,defaultValue_one:"{{count}} month ago",defaultValue_other:"{{count}} months ago"}):e("yearsAgo",{count:Math.round(r/h),defaultValue_one:"{{count}} year ago",defaultValue_other:"{{count}} years ago"})}exports.SfxProviderBrowser=d;exports.formatRelativeDate=_;
