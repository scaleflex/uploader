import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { ProviderId, CompanionSearchItem, RemoteFileInfo } from '../connectors/connector.types';
import { searchProvider } from '../connectors/companion-client';
import { getProviderSources } from '../connectors/provider-registry';
import type { TFunction } from '../store/store.types';

export class SfxSearchProviderBrowser extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      min-height: 0;
      height: 100%;
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

    .result-item.disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
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

    .loading.loading-more {
      flex: none;
      padding: 16px 0;
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

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ type: String }) provider: ProviderId = 'unsplash';
  @property({ type: String }) companionUrl = '';
  /**
   * Optional rewrite for listing thumbnail URLs so they pass the host CSP.
   * Defaults to the identity function.
   */
  @property({ attribute: false })
  transformThumbnail: (url: string) => string = (u) => u;

  @property({ type: Boolean }) multi = true;
  @property({ type: Number }) maxSelect: number | null = null;

  @state() private _loading = false;
  @state() private _loadingMore = false;
  @state() private _items: CompanionSearchItem[] = [];
  @state() private _selectedIds = new Set<string>();
  @state() private _error: string | null = null;
  @state() private _searchQuery = '';
  @state() private _nextPageQuery: string | null = null;
  @state() private _searched = false;

  private get _providerLabel(): string {
    const sources = getProviderSources([this.provider]);
    return sources[0]?.label ?? this.provider;
  }

  private _onResultsScroll = (e: Event) => {
    if (!this._nextPageQuery || this._loadingMore) return;
    const el = e.target as HTMLElement;
    // Trigger load more when scrolled within 200px of bottom
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 200) {
      this._onLoadMore();
    }
  };

  // --- Search ---

  private _onSearchInput = (e: Event) => {
    this._searchQuery = (e.target as HTMLInputElement).value;
  };

  private _onSearchKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') this._doSearch();
  };

  private async _doSearch() {
    const query = this._searchQuery.trim();
    if (!query) return;

    this._loading = true;
    this._error = null;
    this._items = [];
    this._selectedIds = new Set();
    this._nextPageQuery = null;
    this._searched = true;

    try {
      const res = await searchProvider(this.companionUrl, this.provider, query);
      // Deduplicate by ID
      const seen = new Set<string>();
      this._items = res.items.filter((i) => {
        if (seen.has(i.id)) return false;
        seen.add(i.id);
        return true;
      });
      this._nextPageQuery = res.nextPageQuery;
    } catch (err) {
      this._error = err instanceof Error ? err.message : this.t('searchFailed', 'Search failed');
    } finally {
      this._loading = false;
    }
  }

  private async _onLoadMore() {
    if (!this._nextPageQuery || this._loadingMore) return;

    this._loadingMore = true;
    try {
      const res = await searchProvider(
        this.companionUrl,
        this.provider,
        this._searchQuery.trim(),
        this._nextPageQuery,
      );
      // Deduplicate by ID
      const existingIds = new Set(this._items.map((i) => i.id));
      const newItems = res.items.filter((i) => !existingIds.has(i.id));
      this._items = [...this._items, ...newItems];
      this._nextPageQuery = res.nextPageQuery;
    } catch {
      // Silently fail on load-more
    } finally {
      this._loadingMore = false;
    }
  }

  // --- Selection ---

  private _toggleSelect(item: CompanionSearchItem) {
    if (!this.multi) {
      this._selectedIds = this._selectedIds.has(item.id) ? new Set() : new Set([item.id]);
      return;
    }
    const atLimit = this.maxSelect !== null && this._selectedIds.size >= this.maxSelect;
    const next = new Set(this._selectedIds);
    if (next.has(item.id)) {
      next.delete(item.id);
    } else if (!atLimit) {
      next.add(item.id);
    }
    this._selectedIds = next;
  }

  private _onAddSelected = () => {
    const selectedItems = this._items.filter((item) => this._selectedIds.has(item.id));

    const files: RemoteFileInfo[] = selectedItems.map((item) => ({
      companionUrl: this.companionUrl,
      provider: this.provider,
      token: '', // Search providers don't use OAuth tokens
      requestPath: item.requestPath,
      fileId: item.id,
      name: item.name || item.id,
      mimeType: item.mimeType,
      size: item.size,
      thumbnail: item.thumbnail,
    }));

    this.dispatchEvent(
      new CustomEvent('connector-files-selected', {
        detail: { files },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _onClose = () => {
    this.dispatchEvent(
      new CustomEvent('connector-close', {
        bubbles: true,
        composed: true,
      }),
    );
  };

  // --- Render ---

  render() {
    return html`
      ${this._renderHeader()}
      ${this._renderSearchBar()}
      ${this._loading
        ? this._renderLoading()
        : this._error
          ? this._renderError()
          : this._renderResults()}
    `;
  }

  private _renderHeader() {
    return html`
      <div class="browser-header">
        <button
          class="back-btn"
          @click=${this._onClose}
          title=${this.t('close', 'Close')}
          aria-label=${this.t('close', 'Close')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="browser-title">${this._providerLabel}</span>
      </div>
    `;
  }

  private _renderSearchBar() {
    return html`
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder=${this.t('searchForImages', 'Search for images')}
          .value=${this._searchQuery}
          @input=${this._onSearchInput}
          @keydown=${this._onSearchKeydown}
        />
        <button
          class="search-btn"
          ?disabled=${!this._searchQuery.trim() || this._loading}
          @click=${() => this._doSearch()}
        >
          ${this.t('search', 'Search')}
        </button>
      </div>
    `;
  }

  private _renderLoading() {
    return html`
      <div class="loading">
        <div class="spinner"></div>
      </div>
    `;
  }

  private _renderError() {
    return html`
      <div class="error-view">
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${() => this._doSearch()}>${this.t('retry', 'Retry')}</button>
      </div>
    `;
  }

  private _renderResults() {
    const selectedCount = this._selectedIds.size;

    if (!this._searched) {
      return html`
        <div class="empty-state">
          <div class="empty-text">${this.t('enterSearchHint', 'Enter text to search for images')}</div>
        </div>
      `;
    }

    if (this._items.length === 0) {
      return html`
        <div class="empty-state">
          <div class="empty-text">${this.t('noSearchResults', 'No results found')}</div>
        </div>
      `;
    }

    return html`
      <div class="results" @scroll=${this._onResultsScroll}>
        <div class="results-grid">
          ${(() => {
            const atLimit = this.maxSelect !== null && this._selectedIds.size >= this.maxSelect;
            return this._items.map((item) => {
              const isSelected = this._selectedIds.has(item.id);
              const isDisabled = !isSelected && atLimit;
              return html`
              <div
                class="result-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}"
                @click=${() => this._toggleSelect(item)}
              >
                ${item.thumbnail
                  ? html`<img src=${this.transformThumbnail(item.thumbnail)} alt=${item.name} loading="lazy" referrerpolicy="no-referrer" />`
                  : nothing}
                <div class="check">
                  ${isSelected
                    ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12" /></svg>`
                    : nothing}
                </div>
                ${item.author?.name
                  ? html`<div class="author">${item.author.name}</div>`
                  : nothing}
              </div>
            `;
            });
          })()}
        </div>
        ${this._loadingMore
          ? html`<div class="loading loading-more"><div class="spinner"></div></div>`
          : nothing}
      </div>

      ${this._items.length > 0
        ? html`
            <div class="browser-footer">
              <span class="selected-count">
                ${selectedCount > 0
                  ? this.t('imagesSelected', { count: selectedCount, defaultValue_one: '{{count}} image selected', defaultValue_other: '{{count}} images selected' })
                  : this.t('selectImagesToAdd', 'Select images to add')}
              </span>
              <button
                class="add-btn"
                ?disabled=${selectedCount === 0}
                @click=${this._onAddSelected}
              >
                ${this.t('addImages', { count: selectedCount > 0 ? selectedCount : 0, defaultValue_one: 'Add {{count}} image', defaultValue_other: 'Add {{count}} images' })}
              </button>
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-search-provider-browser': SfxSearchProviderBrowser;
  }
}
