import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { ProviderId, CompanionItem, RemoteFileInfo } from '../connectors/connector.types';
import {
  getAuthUrl,
  listFiles,
  listNextPage,
  logout,
  AuthExpiredError,
} from '../connectors/companion-client';
import { getToken, setToken, removeToken, listenForAuthToken } from '../connectors/token-store';
import { getProviderSources } from '../connectors/provider-registry';

interface Breadcrumb {
  name: string;
  path: string;
}

export class SfxProviderBrowser extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 300px;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
    }

    /* --- Header --- */
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
      background: #f1f5f9;
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

    .logout-btn {
      border: none;
      background: none;
      font-family: inherit;
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .logout-btn:hover {
      background: #fef2f2;
      color: var(--sfx-up-error, #dc2626);
    }

    .username {
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      flex-shrink: 0;
    }

    /* --- Auth view --- */
    .auth-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 40px 24px;
      text-align: center;
    }

    .auth-icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .auth-icon svg {
      width: 28px;
      height: 28px;
      fill: currentColor;
    }

    .auth-text {
      font-size: 14px;
      color: var(--sfx-up-text-secondary, #475569);
      max-width: 280px;
    }

    .connect-btn {
      height: 40px;
      padding: 0 24px;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: #fff;
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      box-shadow: 0 2px 10px rgba(37, 99, 235, 0.28);
    }

    .connect-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(37, 99, 235, 0.38);
    }

    /* --- Breadcrumbs --- */
    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 10px 20px;
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .crumb {
      cursor: pointer;
      color: var(--sfx-up-primary, #2563eb);
      border: none;
      background: none;
      font-family: inherit;
      font-size: 12px;
      padding: 2px 4px;
      border-radius: 4px;
      transition: background 0.15s;
    }

    .crumb:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .crumb-sep {
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .crumb-current {
      color: var(--sfx-up-text, #1e293b);
      font-weight: 500;
    }

    /* --- File list --- */
    .file-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 12px;
      min-height: 0;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.15s;
      user-select: none;
    }

    .file-item:hover {
      background: #f8fafc;
    }

    .file-item.selected {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .file-item input[type='checkbox'] {
      width: 16px;
      height: 16px;
      accent-color: var(--sfx-up-primary, #2563eb);
      flex-shrink: 0;
      cursor: pointer;
    }

    .file-thumb {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #f1f5f9;
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

    .file-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
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
      color: #fff;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      box-shadow: 0 2px 10px rgba(37, 99, 235, 0.28);
    }

    .add-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(37, 99, 235, 0.38);
    }

    .add-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .select-all-btn {
      border: none;
      background: none;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      transition: background 0.15s;
      flex-shrink: 0;
    }

    .select-all-btn:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
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
      background: #f8faff;
      border-color: #d1dff0;
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

    .empty-text {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Skeleton loading --- */
    .skeleton-list {
      flex: 1;
      padding: 8px 12px;
      min-height: 0;
    }

    .skeleton-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
    }

    .skeleton-check {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background: #f1f5f9;
    }

    .skeleton-thumb {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #f1f5f9;
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
      background: #f1f5f9;
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-size {
      height: 11px;
      width: 60px;
      border-radius: 6px;
      background: #f1f5f9;
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

    @keyframes shimmer {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner { animation: none; }
      .skeleton-thumb, .skeleton-name, .skeleton-size { animation: none; }
    }
  `;

  @property({ type: String }) provider: ProviderId = 'google-drive';
  @property({ type: String }) companionUrl = '';

  @state() private _authenticated = false;
  @state() private _loading = false;
  @state() private _items: CompanionItem[] = [];
  @state() private _selectedIds = new Set<string>();
  @state() private _breadcrumbs: Breadcrumb[] = [];
  @state() private _nextPagePath: string | null = null;
  @state() private _error: string | null = null;
  @state() private _loadingMore = false;
  @state() private _username: string | null = null;

  private _cleanupAuthListener: (() => void) | null = null;
  private _authWindow: Window | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._checkAuth();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanupAuthListener?.();
    this._cleanupAuthListener = null;
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('provider')) {
      this._reset();
      this._checkAuth();
    }
  }

  private _reset() {
    this._authenticated = false;
    this._loading = false;
    this._items = [];
    this._selectedIds = new Set();
    this._breadcrumbs = [];
    this._nextPagePath = null;
    this._error = null;
    this._username = null;
  }

  private _checkAuth() {
    const token = getToken(this.provider);
    if (token) {
      this._authenticated = true;
      this._loadFolder('');
    }
  }

  private get _providerLabel(): string {
    const sources = getProviderSources([this.provider]);
    return sources[0]?.label ?? this.provider;
  }

  // --- Auth ---

  private _handleConnect = () => {
    const url = getAuthUrl(this.companionUrl, this.provider);

    // Must open popup synchronously in click handler to avoid popup blockers
    this._authWindow = window.open(url, '_blank', 'width=600,height=600');

    this._cleanupAuthListener?.();
    this._cleanupAuthListener = listenForAuthToken(this.companionUrl, (token) => {
      this._authWindow?.close();
      this._authWindow = null;
      this._cleanupAuthListener?.();
      this._cleanupAuthListener = null;

      setToken(this.provider, token);
      this._authenticated = true;
      this._loadFolder('');
    });
  };

  // --- Folder navigation ---

  private async _loadFolder(directory: string) {
    const token = getToken(this.provider);
    if (!token) {
      this._authenticated = false;
      return;
    }

    // Lock height to prevent modal jumping during folder navigation
    if (this.offsetHeight > 0) {
      this.style.minHeight = `${this.offsetHeight}px`;
    }

    this._loading = true;
    this._error = null;
    this._items = [];
    this._selectedIds = new Set();
    this._lastClickedIndex = null;
    this._nextPagePath = null;

    try {
      const res = await listFiles(this.companionUrl, this.provider, token, directory);
      this._items = res.items;
      this._nextPagePath = res.nextPagePath;
      if (res.username) this._username = res.username;
    } catch (err) {
      if (err instanceof AuthExpiredError) {
        removeToken(this.provider);
        this._authenticated = false;
      } else {
        this._error = err instanceof Error ? err.message : 'Failed to load files';
      }
    } finally {
      this._loading = false;
    }
  }

  private _onFolderClick(item: CompanionItem) {
    this._breadcrumbs = [...this._breadcrumbs, { name: item.name, path: item.requestPath }];
    this._loadFolder(item.requestPath);
  }

  private _onBreadcrumbClick(index: number) {
    if (index < 0) {
      // Root
      this._breadcrumbs = [];
      this._loadFolder('');
    } else {
      const crumb = this._breadcrumbs[index];
      this._breadcrumbs = this._breadcrumbs.slice(0, index + 1);
      this._loadFolder(crumb.path);
    }
  }

  // --- Load more ---

  private async _onLoadMore() {
    const token = getToken(this.provider);
    if (!token || !this._nextPagePath) return;

    this._loadingMore = true;
    try {
      const res = await listNextPage(this.companionUrl, token, this._nextPagePath);
      this._items = [...this._items, ...res.items];
      this._nextPagePath = res.nextPagePath;
    } catch (err) {
      if (err instanceof AuthExpiredError) {
        removeToken(this.provider);
        this._authenticated = false;
      }
    } finally {
      this._loadingMore = false;
    }
  }

  // --- Selection ---

  private _lastClickedIndex: number | null = null;

  private _toggleSelect(item: CompanionItem, e?: MouseEvent) {
    const files = this._items.filter((i) => !i.isFolder);
    const currentIndex = files.findIndex((f) => f.id === item.id);

    if (e?.shiftKey && this._lastClickedIndex !== null && currentIndex !== -1) {
      const start = Math.min(this._lastClickedIndex, currentIndex);
      const end = Math.max(this._lastClickedIndex, currentIndex);
      const next = new Set(this._selectedIds);
      for (let i = start; i <= end; i++) {
        next.add(files[i].id);
      }
      this._selectedIds = next;
    } else {
      const next = new Set(this._selectedIds);
      if (next.has(item.id)) {
        next.delete(item.id);
      } else {
        next.add(item.id);
      }
      this._selectedIds = next;
    }

    if (currentIndex !== -1) {
      this._lastClickedIndex = currentIndex;
    }
  }

  private _toggleSelectAll = () => {
    const files = this._items.filter((i) => !i.isFolder);
    const allSelected = files.every((f) => this._selectedIds.has(f.id));
    if (allSelected) {
      this._selectedIds = new Set();
    } else {
      this._selectedIds = new Set(files.map((f) => f.id));
    }
  };

  private _onAddSelected = () => {
    const token = getToken(this.provider);
    if (!token) return;

    const selectedItems = this._items.filter(
      (item) => !item.isFolder && this._selectedIds.has(item.id),
    );

    const files: RemoteFileInfo[] = selectedItems.map((item) => ({
      companionUrl: this.companionUrl,
      provider: this.provider,
      token,
      requestPath: item.requestPath,
      fileId: item.id,
      name: item.name,
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

  // --- Logout ---

  private _handleLogout = async () => {
    const token = getToken(this.provider);
    if (token) {
      try {
        await logout(this.companionUrl, this.provider, token);
      } catch {
        // Best-effort revocation — clear local token regardless
      }
      removeToken(this.provider);
    }
    this._reset();
  };

  // --- Render ---

  render() {
    return html`
      ${this._renderHeader()}
      ${!this._authenticated
        ? this._renderAuthView()
        : this._loading
          ? this._renderLoading()
          : this._error
            ? this._renderError()
            : this._renderBrowser()}
    `;
  }

  private _renderHeader() {
    return html`
      <div class="browser-header">
        <button class="back-btn" @click=${this._onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span class="browser-title">${this._providerLabel}</span>
        ${this._authenticated
          ? html`
              ${this._username ? html`<span class="username">${this._username}</span>` : nothing}
              <button class="logout-btn" @click=${this._handleLogout}>Log out</button>
            `
          : nothing}
      </div>
    `;
  }

  private _renderAuthView() {
    return html`
      <div class="auth-view">
        <div class="auth-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 015 5v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5zm3 8H9v-3a3 3 0 016 0v3z" fill="currentColor"/></svg>
        </div>
        <div class="auth-text">
          Connect to ${this._providerLabel} to browse and select files
        </div>
        <button class="connect-btn" @click=${this._handleConnect}>
          Connect to ${this._providerLabel}
        </button>
      </div>
    `;
  }

  private _renderLoading() {
    const rows = [1, 2, 3, 4, 5, 6];
    return html`
      <div class="skeleton-list">
        ${rows.map(() => html`
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

  private _renderError() {
    return html`
      <div class="error-view">
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${() => {
          const last = this._breadcrumbs[this._breadcrumbs.length - 1];
          this._loadFolder(last?.path ?? '');
        }}>
          Retry
        </button>
      </div>
    `;
  }

  private _renderBrowser() {
    const files = this._items.filter((i) => !i.isFolder);
    const folders = this._items.filter((i) => i.isFolder);
    const selectedCount = this._selectedIds.size;

    return html`
      ${this._renderBreadcrumbs()}

      <div class="file-list">
        ${folders.length === 0 && files.length === 0
          ? html`<div class="empty-state"><div class="empty-text">This folder is empty</div></div>`
          : nothing}

        ${folders.map(
          (item) => html`
            <div class="file-item" @click=${() => this._onFolderClick(item)}>
              <div class="file-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div class="file-info">
                <div class="file-name">${item.name}</div>
              </div>
            </div>
          `,
        )}

        ${files.map(
          (item) => html`
            <div
              class="file-item ${this._selectedIds.has(item.id) ? 'selected' : ''}"
              @click=${(e: MouseEvent) => this._toggleSelect(item, e)}
            >
              <input
                type="checkbox"
                .checked=${this._selectedIds.has(item.id)}
                @click=${(e: Event) => e.stopPropagation()}
                @change=${() => this._toggleSelect(item)}
              />
              <div class="file-thumb">
                ${item.thumbnail
                  ? html`<img src=${item.thumbnail} alt="" loading="lazy" referrerpolicy="no-referrer"
                      @error=${(e: Event) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        img.parentElement!.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
                      }}
                    />`
                  : html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>`}
              </div>
              <div class="file-info">
                <div class="file-name">${item.name}</div>
                ${item.size
                  ? html`<div class="file-size">${formatSize(item.size)}</div>`
                  : nothing}
              </div>
            </div>
          `,
        )}

        ${this._nextPagePath
          ? html`
              <button
                class="load-more-btn"
                ?disabled=${this._loadingMore}
                @click=${this._onLoadMore}
              >
                ${this._loadingMore ? 'Loading...' : 'Load more'}
              </button>
            `
          : nothing}
      </div>

      ${files.length > 0
        ? html`
            <div class="browser-footer">
              <button class="select-all-btn" @click=${this._toggleSelectAll}>
                ${files.every((f) => this._selectedIds.has(f.id)) ? 'Deselect all' : 'Select all'}
              </button>
              <span class="selected-count">
                ${selectedCount > 0
                  ? `${selectedCount} file${selectedCount === 1 ? '' : 's'} selected`
                  : 'Select files to add'}
              </span>
              <button
                class="add-btn"
                ?disabled=${selectedCount === 0}
                @click=${this._onAddSelected}
              >
                Add ${selectedCount > 0 ? selectedCount : ''} file${selectedCount === 1 ? '' : 's'}
              </button>
            </div>
          `
        : nothing}
    `;
  }

  private _renderBreadcrumbs() {
    if (this._breadcrumbs.length === 0) return nothing;

    return html`
      <div class="breadcrumbs">
        <button class="crumb" @click=${() => this._onBreadcrumbClick(-1)}>Root</button>
        ${this._breadcrumbs.map(
          (crumb, i) => html`
            <span class="crumb-sep">/</span>
            ${i < this._breadcrumbs.length - 1
              ? html`<button class="crumb" @click=${() => this._onBreadcrumbClick(i)}>${crumb.name}</button>`
              : html`<span class="crumb-current">${crumb.name}</span>`}
          `,
        )}
      </div>
    `;
  }
}

function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const val = bytes / Math.pow(1024, i);
  return `${val.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-provider-browser': SfxProviderBrowser;
  }
}
