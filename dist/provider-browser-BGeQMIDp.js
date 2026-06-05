import { LitElement as _, css as w, html as s, nothing as c } from "lit";
import { property as f, state as p } from "lit/decorators.js";
import { q as $, t as z, m as S, u as I, A as k, v as C, w as y, x as P } from "./sfx-uploader-ui2PpjWO.js";
const g = "sfx-uploader-token:";
function x(n) {
  try {
    return localStorage.getItem(`${g}${n}`);
  } catch {
    return null;
  }
}
function L(n, e) {
  try {
    localStorage.setItem(`${g}${n}`, e);
  } catch {
  }
}
function m(n) {
  try {
    localStorage.removeItem(`${g}${n}`);
  } catch {
  }
}
function M(n, e) {
  const r = (i) => {
    if (n && i.source !== n) return;
    const t = typeof i.data == "string" ? A(i.data) : i.data;
    t != null && t.token && e(t.token);
  };
  return window.addEventListener("message", r), () => window.removeEventListener("message", r);
}
function A(n) {
  try {
    return JSON.parse(n);
  } catch {
    return null;
  }
}
var B = Object.defineProperty, d = (n, e, r, i) => {
  for (var t = void 0, o = n.length - 1, l; o >= 0; o--)
    (l = n[o]) && (t = l(e, r, t) || t);
  return t && B(e, r, t), t;
};
const b = class b extends _ {
  constructor() {
    super(...arguments), this.t = (e, r) => typeof r == "string" ? r : e, this.provider = "google-drive", this.companionUrl = "", this.multi = !0, this.maxSelect = null, this.transformThumbnail = (e) => e, this._authenticated = !1, this._loading = !1, this._items = [], this._selectedIds = /* @__PURE__ */ new Set(), this._breadcrumbs = [], this._nextPagePath = null, this._error = null, this._loadingMore = !1, this._username = null, this._cleanupAuthListener = null, this._authWindow = null, this._handleConnect = () => {
      var r;
      const e = $(this.companionUrl, this.provider);
      this._authWindow = window.open(e, "_blank", "width=600,height=600"), (r = this._cleanupAuthListener) == null || r.call(this), this._cleanupAuthListener = M(this._authWindow, (i) => {
        var t, o;
        (t = this._authWindow) == null || t.close(), this._authWindow = null, (o = this._cleanupAuthListener) == null || o.call(this), this._cleanupAuthListener = null, L(this.provider, i), this._authenticated = !0, this._loadFolder("");
      });
    }, this._lastClickedIndex = null, this._toggleSelectAll = () => {
      const e = this._items.filter((i) => !i.isFolder);
      e.every((i) => this._selectedIds.has(i.id)) ? this._selectedIds = /* @__PURE__ */ new Set() : this._selectedIds = new Set(e.map((i) => i.id));
    }, this._onAddSelected = () => {
      const e = x(this.provider);
      if (!e) return;
      const i = this._items.filter(
        (t) => !t.isFolder && this._selectedIds.has(t.id)
      ).map((t) => ({
        companionUrl: this.companionUrl,
        provider: this.provider,
        token: e,
        requestPath: t.requestPath,
        fileId: t.id,
        name: t.name,
        mimeType: t.mimeType,
        size: t.size,
        thumbnail: t.thumbnail
      }));
      this.dispatchEvent(
        new CustomEvent("connector-files-selected", {
          detail: { files: i },
          bubbles: !0,
          composed: !0
        })
      );
    }, this._onClose = () => {
      this.dispatchEvent(
        new CustomEvent("connector-close", {
          bubbles: !0,
          composed: !0
        })
      );
    }, this._handleLogout = async () => {
      const e = x(this.provider);
      if (e) {
        try {
          await z(this.companionUrl, this.provider, e);
        } catch {
        }
        m(this.provider);
      }
      this._reset();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._checkAuth();
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._cleanupAuthListener) == null || e.call(this), this._cleanupAuthListener = null;
  }
  updated(e) {
    e.has("provider") && (this._reset(), this._checkAuth());
  }
  _reset() {
    this._authenticated = !1, this._loading = !1, this._items = [], this._selectedIds = /* @__PURE__ */ new Set(), this._breadcrumbs = [], this._nextPagePath = null, this._error = null, this._username = null;
  }
  _checkAuth() {
    x(this.provider) && (this._authenticated = !0, this._loadFolder(""));
  }
  get _providerDef() {
    return S([this.provider])[0] ?? null;
  }
  get _providerLabel() {
    var e;
    return ((e = this._providerDef) == null ? void 0 : e.label) ?? this.provider;
  }
  // --- Folder navigation ---
  async _loadFolder(e) {
    const r = x(this.provider);
    if (!r) {
      this._authenticated = !1;
      return;
    }
    this.offsetHeight > 0 && (this.style.minHeight = `${this.offsetHeight}px`), this._loading = !0, this._error = null, this._items = [], this._selectedIds = /* @__PURE__ */ new Set(), this._lastClickedIndex = null, this._nextPagePath = null;
    try {
      const i = await I(this.companionUrl, this.provider, r, e);
      this._items = i.items, this._nextPagePath = i.nextPagePath, i.username && (this._username = i.username);
    } catch (i) {
      i instanceof k ? (m(this.provider), this._authenticated = !1) : this._error = i instanceof Error ? i.message : this.t("failedToLoadFiles", "Failed to load files");
    } finally {
      this._loading = !1;
    }
  }
  _onFolderClick(e) {
    this._breadcrumbs = [...this._breadcrumbs, { name: e.name, path: e.requestPath }], this._loadFolder(e.requestPath);
  }
  _onBreadcrumbClick(e) {
    if (e < 0)
      this._breadcrumbs = [], this._loadFolder("");
    else {
      const r = this._breadcrumbs[e];
      this._breadcrumbs = this._breadcrumbs.slice(0, e + 1), this._loadFolder(r.path);
    }
  }
  // --- Load more ---
  async _onLoadMore() {
    const e = x(this.provider);
    if (!(!e || !this._nextPagePath)) {
      this._loadingMore = !0;
      try {
        const r = await C(this.companionUrl, e, this._nextPagePath);
        this._items = [...this._items, ...r.items], this._nextPagePath = r.nextPagePath;
      } catch (r) {
        r instanceof k && (m(this.provider), this._authenticated = !1);
      } finally {
        this._loadingMore = !1;
      }
    }
  }
  _toggleSelect(e, r) {
    const i = this._items.filter((l) => !l.isFolder), t = i.findIndex((l) => l.id === e.id);
    if (!this.multi) {
      this._selectedIds = this._selectedIds.has(e.id) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([e.id]), t !== -1 && (this._lastClickedIndex = t);
      return;
    }
    const o = this.maxSelect !== null && this._selectedIds.size >= this.maxSelect;
    if (r != null && r.shiftKey && this._lastClickedIndex !== null && t !== -1) {
      const l = Math.min(this._lastClickedIndex, t), v = Math.max(this._lastClickedIndex, t), h = new Set(this._selectedIds);
      for (let u = l; u <= v; u++)
        !h.has(i[u].id) && !o && h.add(i[u].id);
      this._selectedIds = h;
    } else {
      const l = new Set(this._selectedIds);
      l.has(e.id) ? l.delete(e.id) : o || l.add(e.id), this._selectedIds = l;
    }
    t !== -1 && (this._lastClickedIndex = t);
  }
  // --- Render ---
  render() {
    return s`
      ${this._renderHeader()}
      ${this._authenticated ? this._loading ? this._renderLoading() : this._error ? this._renderError() : this._renderBrowser() : this._renderAuthView()}
    `;
  }
  _renderHeader() {
    const e = this._providerDef;
    return s`
      <div class="browser-header">
        <button class="back-btn" @click=${this._onClose} title=${this.t("back", "Back")}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="header-brand">
          ${e != null && e.brandHtml ? s`<div class="header-logo">${y(e)}</div>` : c}

          <div class="header-title-group">
            <span class="browser-title">${this._providerLabel}</span>
            ${this._authenticated && this._username ? s`<span class="header-username">${this._username}</span>` : c}
          </div>
        </div>
        ${this._authenticated ? s`<button class="logout-btn" @click=${this._handleLogout}>Sign out</button>` : c}
      </div>
    `;
  }
  _renderAuthView() {
    const e = this._providerDef;
    return s`
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${e != null && e.brandHtml ? s`<span ${P({ display: "flex", "align-items": "center", "justify-content": "center", transform: "scale(2.2)" })}>${y(e)}</span>` : s`<svg viewBox="0 0 24 24" fill="none" stroke="var(--sfx-up-primary, #2563eb)" stroke-width="1.5"><path d="M12 2a5 5 0 015 5v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5zm3 8H9v-3a3 3 0 016 0v3z" fill="var(--sfx-up-primary, #2563eb)"/></svg>`}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">Connect ${this._providerLabel}</div>
          <div class="auth-text">
            Sign in to browse and select files from your ${this._providerLabel} account
          </div>
        </div>
        <button class="connect-btn" @click=${this._handleConnect}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          Sign in to ${this._providerLabel}
        </button>
      </div>
    `;
  }
  _renderLoading() {
    return s`
      <div class="skeleton-list">
        ${[1, 2, 3, 4, 5, 6, 7].map(() => s`
          <div class="skeleton-row">
            <div class="skeleton-check"></div>
            <div class="skeleton-thumb"></div>
            <div class="skeleton-text">
              <div class="skeleton-name"></div>
              <div class="skeleton-size"></div>
            </div>
          </div>
        `)}
      </div>
    `;
  }
  _renderError() {
    return s`
      <div class="error-view">
        <div class="error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${() => {
      const e = this._breadcrumbs[this._breadcrumbs.length - 1];
      this._loadFolder((e == null ? void 0 : e.path) ?? "");
    }}>
          Try again
        </button>
      </div>
    `;
  }
  _renderBrowser() {
    const e = this._items.filter((t) => !t.isFolder), r = this._items.filter((t) => t.isFolder), i = this._selectedIds.size;
    return s`
      ${this._renderBreadcrumbs()}

      <div class="file-list">
        ${r.length === 0 && e.length === 0 ? s`
              <div class="empty-state">
                <div class="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                </div>
                <div class="empty-text">This folder is empty</div>
              </div>
            ` : c}

        ${r.map(
      (t) => s`
            <div class="file-item" @click=${() => this._onFolderClick(t)}>
              <div class="file-thumb folder-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div class="file-info">
                <div class="file-name">${t.name}</div>
              </div>
              <svg class="folder-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          `
    )}

        ${(() => {
      const t = this.maxSelect !== null && this._selectedIds.size >= this.maxSelect;
      return e.map((o) => {
        const l = this._selectedIds.has(o.id);
        return s`
            <div
              class="file-item ${l ? "selected" : ""} ${!l && t ? "disabled" : ""}"
              @click=${(h) => this._toggleSelect(o, h)}
            >
              <input
                type="checkbox"
                .checked=${this._selectedIds.has(o.id)}
                @click=${(h) => h.stopPropagation()}
                @change=${() => this._toggleSelect(o)}
              />
              <div class="file-thumb">
                ${o.thumbnail ? s`<img src=${this.transformThumbnail(o.thumbnail)} alt="" loading="lazy" referrerpolicy="no-referrer"
                      @error=${(h) => {
          const u = h.target;
          u.style.display = "none", u.parentElement.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
        }}
                    />` : s`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>`}
              </div>
              <div class="file-info">
                <div class="file-name">${o.name}</div>
                <div class="file-meta">
                  ${o.size ? s`<span class="file-size">${F(o.size)}</span>` : c}
                </div>
              </div>
            </div>
          `;
      });
    })()}

        ${this._nextPagePath ? s`
              <button
                class="load-more-btn"
                ?disabled=${this._loadingMore}
                @click=${this._onLoadMore}
              >
                ${this._loadingMore ? this.t("loading", "Loading") : this.t("loadMore", "Load more")}
              </button>
            ` : c}
      </div>

      ${e.length > 0 || i > 0 ? s`
            <div class="browser-footer">
              <div class="footer-left">
                ${this.multi ? s`<button class="select-all-btn" @click=${this._toggleSelectAll}>
                  ${e.every((t) => this._selectedIds.has(t.id)) ? this.t("deselectAll", "Deselect all") : this.t("selectAll", "Select all")}
                </button>` : c}
                <span class="selected-count ${i > 0 ? "has-selection" : ""}">
                  ${i > 0 ? this.t("filesSelected", { count: i, defaultValue_one: "{{count}} file selected", defaultValue_other: "{{count}} files selected" }) : this.t("noFilesSelected", "No files selected")}
                </span>
              </div>
              <button
                class="add-btn"
                ?disabled=${i === 0}
                @click=${this._onAddSelected}
              >
                Add${i > 0 ? ` ${i}` : ""} file${i === 1 ? "" : "s"}
              </button>
            </div>
          ` : c}
    `;
  }
  _renderBreadcrumbs() {
    return this._breadcrumbs.length === 0 ? c : s`
      <div class="breadcrumbs">
        <button class="crumb" @click=${() => this._onBreadcrumbClick(-1)}>
          <svg class="crumb-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Root
        </button>
        ${this._breadcrumbs.map(
      (e, r) => s`
            <span class="crumb-sep">&rsaquo;</span>
            ${r < this._breadcrumbs.length - 1 ? s`<button class="crumb" @click=${() => this._onBreadcrumbClick(r)}>${e.name}</button>` : s`<span class="crumb-current">${e.name}</span>`}
          `
    )}
      </div>
    `;
  }
};
b.styles = w`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 300px;
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

    .back-btn {
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

    .back-btn:hover {
      background: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 16px;
      height: 16px;
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

    .folder-arrow {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      flex-shrink: 0;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .file-item:hover .folder-arrow {
      opacity: 1;
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
  `;
let a = b;
d([
  f({ attribute: !1 })
], a.prototype, "t");
d([
  f({ type: String })
], a.prototype, "provider");
d([
  f({ type: String })
], a.prototype, "companionUrl");
d([
  f({ type: Boolean })
], a.prototype, "multi");
d([
  f({ type: Number })
], a.prototype, "maxSelect");
d([
  f({ attribute: !1 })
], a.prototype, "transformThumbnail");
d([
  p()
], a.prototype, "_authenticated");
d([
  p()
], a.prototype, "_loading");
d([
  p()
], a.prototype, "_items");
d([
  p()
], a.prototype, "_selectedIds");
d([
  p()
], a.prototype, "_breadcrumbs");
d([
  p()
], a.prototype, "_nextPagePath");
d([
  p()
], a.prototype, "_error");
d([
  p()
], a.prototype, "_loadingMore");
d([
  p()
], a.prototype, "_username");
function F(n) {
  if (n === 0) return "0 B";
  const e = ["B", "KB", "MB", "GB"], r = Math.min(Math.floor(Math.log(n) / Math.log(1024)), e.length - 1);
  return `${(n / Math.pow(1024, r)).toFixed(r === 0 ? 0 : 1)} ${e[r]}`;
}
export {
  a as SfxProviderBrowser
};
