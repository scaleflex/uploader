import { LitElement as x, css as g, html as s, nothing as d } from "lit";
import { property as f, state as n } from "lit/decorators.js";
import { m as b, s as u } from "./sfx-uploader-BBQinsQB.js";
var m = Object.defineProperty, a = (c, r, e, t) => {
  for (var i = void 0, l = c.length - 1, h; l >= 0; l--)
    (h = c[l]) && (i = h(r, e, i) || i);
  return i && m(r, e, i), i;
};
const p = class p extends x {
  constructor() {
    super(...arguments), this.provider = "unsplash", this.companionUrl = "", this._loading = !1, this._loadingMore = !1, this._items = [], this._selectedIds = /* @__PURE__ */ new Set(), this._error = null, this._searchQuery = "", this._nextPageQuery = null, this._searched = !1, this._onResultsScroll = (r) => {
      if (!this._nextPageQuery || this._loadingMore) return;
      const e = r.target;
      e.scrollHeight - e.scrollTop - e.clientHeight < 200 && this._onLoadMore();
    }, this._onSearchInput = (r) => {
      this._searchQuery = r.target.value;
    }, this._onSearchKeydown = (r) => {
      r.key === "Enter" && this._doSearch();
    }, this._onAddSelected = () => {
      const e = this._items.filter((t) => this._selectedIds.has(t.id)).map((t) => ({
        companionUrl: this.companionUrl,
        provider: this.provider,
        token: "",
        // Search providers don't use OAuth tokens
        requestPath: t.requestPath,
        fileId: t.id,
        name: t.name || t.id,
        mimeType: t.mimeType,
        size: t.size,
        thumbnail: t.thumbnail
      }));
      this.dispatchEvent(
        new CustomEvent("connector-files-selected", {
          detail: { files: e },
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
    };
  }
  get _providerLabel() {
    var e;
    return ((e = b([this.provider])[0]) == null ? void 0 : e.label) ?? this.provider;
  }
  async _doSearch() {
    const r = this._searchQuery.trim();
    if (r) {
      this._loading = !0, this._error = null, this._items = [], this._selectedIds = /* @__PURE__ */ new Set(), this._nextPageQuery = null, this._searched = !0;
      try {
        const e = await u(this.companionUrl, this.provider, r), t = /* @__PURE__ */ new Set();
        this._items = e.items.filter((i) => t.has(i.id) ? !1 : (t.add(i.id), !0)), this._nextPageQuery = e.nextPageQuery;
      } catch (e) {
        this._error = e instanceof Error ? e.message : "Search failed";
      } finally {
        this._loading = !1;
      }
    }
  }
  async _onLoadMore() {
    if (!(!this._nextPageQuery || this._loadingMore)) {
      this._loadingMore = !0;
      try {
        const r = await u(
          this.companionUrl,
          this.provider,
          this._searchQuery.trim(),
          this._nextPageQuery
        ), e = new Set(this._items.map((i) => i.id)), t = r.items.filter((i) => !e.has(i.id));
        this._items = [...this._items, ...t], this._nextPageQuery = r.nextPageQuery;
      } catch {
      } finally {
        this._loadingMore = !1;
      }
    }
  }
  // --- Selection ---
  _toggleSelect(r) {
    const e = new Set(this._selectedIds);
    e.has(r.id) ? e.delete(r.id) : e.add(r.id), this._selectedIds = e;
  }
  // --- Render ---
  render() {
    return s`
      ${this._renderHeader()}
      ${this._renderSearchBar()}
      ${this._loading ? this._renderLoading() : this._error ? this._renderError() : this._renderResults()}
    `;
  }
  _renderHeader() {
    return s`
      <div class="browser-header">
        <button class="back-btn" @click=${this._onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="browser-title">${this._providerLabel}</span>
      </div>
    `;
  }
  _renderSearchBar() {
    return s`
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="Search for images..."
          .value=${this._searchQuery}
          @input=${this._onSearchInput}
          @keydown=${this._onSearchKeydown}
        />
        <button
          class="search-btn"
          ?disabled=${!this._searchQuery.trim() || this._loading}
          @click=${() => this._doSearch()}
        >
          Search
        </button>
      </div>
    `;
  }
  _renderLoading() {
    return s`
      <div class="loading">
        <div class="spinner"></div>
      </div>
    `;
  }
  _renderError() {
    return s`
      <div class="error-view">
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${() => this._doSearch()}>Retry</button>
      </div>
    `;
  }
  _renderResults() {
    const r = this._selectedIds.size;
    return this._searched ? this._items.length === 0 ? s`
        <div class="empty-state">
          <div class="empty-text">No results found</div>
        </div>
      ` : s`
      <div class="results" @scroll=${this._onResultsScroll}>
        <div class="results-grid">
          ${this._items.map(
      (e) => {
        var t;
        return s`
              <div
                class="result-item ${this._selectedIds.has(e.id) ? "selected" : ""}"
                @click=${() => this._toggleSelect(e)}
              >
                ${e.thumbnail ? s`<img src=${e.thumbnail} alt=${e.name} loading="lazy" referrerpolicy="no-referrer" />` : d}
                <div class="check">
                  ${this._selectedIds.has(e.id) ? s`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12" /></svg>` : d}
                </div>
                ${(t = e.author) != null && t.name ? s`<div class="author">${e.author.name}</div>` : d}
              </div>
            `;
      }
    )}
        </div>
        ${this._loadingMore ? s`<div class="loading" style="padding:16px 0"><div class="spinner"></div></div>` : d}
      </div>

      ${this._items.length > 0 ? s`
            <div class="browser-footer">
              <span class="selected-count">
                ${r > 0 ? `${r} image${r === 1 ? "" : "s"} selected` : "Select images to add"}
              </span>
              <button
                class="add-btn"
                ?disabled=${r === 0}
                @click=${this._onAddSelected}
              >
                Add ${r > 0 ? r : ""} image${r === 1 ? "" : "s"}
              </button>
            </div>
          ` : d}
    ` : s`
        <div class="empty-state">
          <div class="empty-text">Enter text to search for images</div>
        </div>
      `;
  }
};
p.styles = g`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 300px;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
    }

    .browser-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .back-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: none;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .back-btn:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 18px;
      height: 18px;
    }

    .browser-title {
      font-size: 14px;
      font-weight: 600;
      flex: 1;
    }

    /* --- Search bar --- */
    .search-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .search-input {
      flex: 1;
      height: 36px;
      padding: 0 12px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      border-radius: 9px;
      font-family: inherit;
      font-size: 13px;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-bg, #fff);
      outline: none;
      transition: border-color 0.15s;
    }

    .search-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .search-input::placeholder {
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .search-btn {
      height: 36px;
      padding: 0 16px;
      border: none;
      border-radius: 9px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      flex-shrink: 0;
    }

    .search-btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .search-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* --- Results grid --- */
    .results {
      flex: 1;
      overflow-y: auto;
      padding: 8px 12px;
      min-height: 0;
    }

    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 8px;
    }

    .result-item {
      position: relative;
      aspect-ratio: 1;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 0.15s;
    }

    .result-item.selected {
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .result-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .result-item .check {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 22px;
      height: 22px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .result-item:hover .check,
    .result-item.selected .check {
      opacity: 1;
    }

    .result-item.selected .check {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
    }

    .check svg {
      width: 14px;
      height: 14px;
    }

    .result-item .author {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 4px 8px;
      background: linear-gradient(transparent, rgba(0,0,0,0.5));
      font-size: 10px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .result-item:hover .author {
      opacity: 1;
    }

    /* --- Footer --- */
    .browser-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .selected-count {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
      font-weight: 500;
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
    }

    .add-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    .add-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* --- States --- */
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

    .error-text {
      font-size: 14px;
      color: var(--sfx-up-error, #dc2626);
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

    .empty-text {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .load-more-btn {
      display: block;
      margin: 12px auto;
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

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner { animation: none; }
    }
  `;
let o = p;
a([
  f({ type: String })
], o.prototype, "provider");
a([
  f({ type: String })
], o.prototype, "companionUrl");
a([
  n()
], o.prototype, "_loading");
a([
  n()
], o.prototype, "_loadingMore");
a([
  n()
], o.prototype, "_items");
a([
  n()
], o.prototype, "_selectedIds");
a([
  n()
], o.prototype, "_error");
a([
  n()
], o.prototype, "_searchQuery");
a([
  n()
], o.prototype, "_nextPageQuery");
a([
  n()
], o.prototype, "_searched");
export {
  o as SfxSearchProviderBrowser
};
