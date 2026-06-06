import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { cspStyle } from '../utils/csp-style';
import { brandIcon } from '../utils/brand-icon';
import type { ProviderId, CompanionItem, RemoteFileInfo } from '../connectors/connector.types';
import type { TFunction } from '../store/store.types';
import {
  getAuthUrl,
  listFiles,
  listNextPage,
  listFolderRecursive,
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
      position: relative;
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
  `;

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ type: String }) provider: ProviderId = 'google-drive';
  @property({ type: String }) companionUrl = '';
  /** When false, only one file can be selected at a time (single-asset mode). */
  @property({ type: Boolean }) multi = true;
  /** Maximum number of files that can be selected. null = unlimited. */
  @property({ type: Number }) maxSelect: number | null = null;
  /**
   * Optional rewrite for listing thumbnail URLs so they pass the host CSP.
   * Defaults to the identity function.
   */
  @property({ attribute: false })
  transformThumbnail: (url: string) => string = (u) => u;

  @state() private _authenticated = false;
  @state() private _loading = false;
  @state() private _items: CompanionItem[] = [];
  @state() private _selectedIds = new Set<string>();
  @state() private _breadcrumbs: Breadcrumb[] = [];
  @state() private _nextPagePath: string | null = null;
  @state() private _error: string | null = null;
  @state() private _loadingMore = false;
  @state() private _username: string | null = null;
  @state() private _resolvingFolders = false;
  @state() private _resolveProgress = 0;

  private _cleanupAuthListener: (() => void) | null = null;
  private _authWindow: Window | null = null;
  private _resolveAbort: AbortController | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._checkAuth();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanupAuthListener?.();
    this._cleanupAuthListener = null;
    this._resolveAbort?.abort();
    this._resolveAbort = null;
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('provider')) {
      this._reset();
      this._checkAuth();
    }
  }

  private _reset() {
    this._resolveAbort?.abort();
    this._resolveAbort = null;
    this._authenticated = false;
    this._loading = false;
    this._items = [];
    this._selectedIds = new Set();
    this._lastClickedIndex = null;
    this._breadcrumbs = [];
    this._nextPagePath = null;
    this._error = null;
    this._username = null;
    this._resolvingFolders = false;
    this._resolveProgress = 0;
  }

  private _checkAuth() {
    const token = getToken(this.provider);
    if (token) {
      this._authenticated = true;
      this._loadFolder('');
    }
  }

  private get _providerDef() {
    const sources = getProviderSources([this.provider]);
    return sources[0] ?? null;
  }

  private get _providerLabel(): string {
    return this._providerDef?.label ?? this.provider;
  }

  // --- Auth ---

  private _handleConnect = () => {
    // If a previous popup is still open (user double-clicked or the previous
    // attempt was never completed), focus it instead of opening a second one
    // and leaking the old auth listener. Wrap in try/catch because cross-origin
    // navigation in the popup can make `closed` / `focus()` throw a
    // SecurityError on some browsers.
    try {
      if (this._authWindow && !this._authWindow.closed) {
        this._authWindow.focus();
        return;
      }
    } catch {
      // Treat as "no usable window" and open a fresh popup below.
      this._authWindow = null;
    }

    const url = getAuthUrl(this.companionUrl, this.provider);

    // Must open popup synchronously in click handler to avoid popup blockers
    this._authWindow = window.open(url, '_blank', 'width=600,height=600');

    this._cleanupAuthListener?.();
    this._cleanupAuthListener = listenForAuthToken(this._authWindow, (token) => {
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
        this._error = err instanceof Error ? err.message : this.t('failedToLoadFiles', 'Failed to load files');
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

  /**
   * Files are counted against `maxSelect`; folders are not, because their
   * contents are unknown until traversal. Excess folder-resolved files get
   * filtered by per-file validation downstream.
   */
  private get _selectedFileCount(): number {
    return this._items.filter(
      (i) => !i.isFolder && this._selectedIds.has(i.id),
    ).length;
  }

  private _toggleSelect(item: CompanionItem, e?: MouseEvent) {
    if (!this.multi) {
      // Single-select mode: clicking a file replaces the selection. Folders
      // are not selectable in single mode — they can only be navigated.
      if (item.isFolder) return;
      this._selectedIds = this._selectedIds.has(item.id) ? new Set() : new Set([item.id]);
      const files = this._items.filter((i) => !i.isFolder);
      const idx = files.findIndex((f) => f.id === item.id);
      if (idx !== -1) this._lastClickedIndex = idx;
      return;
    }

    // Shift-range only walks the file subset: folder rows have their own
    // semantics (clicking a folder navigates into it, recursive resolve later)
    // so mixing them into a range would surprise the user. The row click for
    // folders never reaches this method anyway — the checkbox does.
    const files = this._items.filter((i) => !i.isFolder);
    const currentIndex = files.findIndex((f) => f.id === item.id);
    const atFileLimit =
      this.maxSelect !== null && this._selectedFileCount >= this.maxSelect;

    if (
      !item.isFolder &&
      e?.shiftKey &&
      this._lastClickedIndex !== null &&
      currentIndex !== -1
    ) {
      const start = Math.min(this._lastClickedIndex, currentIndex);
      const end = Math.max(this._lastClickedIndex, currentIndex);
      const next = new Set(this._selectedIds);
      for (let i = start; i <= end; i++) {
        if (!next.has(files[i].id)) {
          const wouldOverflow =
            this.maxSelect !== null &&
            [...next].filter((id) => files.some((f) => f.id === id)).length >=
              this.maxSelect;
          if (!wouldOverflow) next.add(files[i].id);
        }
      }
      this._selectedIds = next;
    } else {
      const next = new Set(this._selectedIds);
      if (next.has(item.id)) {
        next.delete(item.id);
      } else if (item.isFolder || !atFileLimit) {
        next.add(item.id);
      }
      this._selectedIds = next;
    }

    if (currentIndex !== -1) {
      this._lastClickedIndex = currentIndex;
    }
  }

  private _toggleSelectAll = () => {
    // Toggle every visible item — files and folders — so users can grab the
    // whole listing in one click.
    const allSelected = this._items.every((it) => this._selectedIds.has(it.id));
    if (allSelected) {
      this._selectedIds = new Set();
    } else {
      // Respect maxSelect for files; folders ignore the cap.
      const next = new Set<string>();
      let fileCount = 0;
      for (const it of this._items) {
        if (it.isFolder) {
          next.add(it.id);
        } else if (this.maxSelect === null || fileCount < this.maxSelect) {
          next.add(it.id);
          fileCount++;
        }
      }
      this._selectedIds = next;
    }
  };

  private _onAddSelected = async () => {
    const token = getToken(this.provider);
    if (!token) return;

    const selectedFiles = this._items.filter(
      (item) => !item.isFolder && this._selectedIds.has(item.id),
    );
    const selectedFolders = this._items.filter(
      (item) => item.isFolder && this._selectedIds.has(item.id),
    );

    const out: RemoteFileInfo[] = selectedFiles.map((item) => ({
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

    if (selectedFolders.length > 0) {
      this._resolveAbort?.abort();
      this._resolveAbort = new AbortController();
      const signal = this._resolveAbort.signal;
      this._resolvingFolders = true;
      this._resolveProgress = 0;
      // Count only files discovered inside folders here — loose pre-selected
      // files weren't "prepared" by this walk, so they'd inflate the badge.
      let discovered = 0;
      try {
        for (const folder of selectedFolders) {
          const items = await listFolderRecursive(
            this.companionUrl,
            this.provider,
            token,
            folder.requestPath,
            folder.name,
            signal,
          );
          if (signal.aborted) return;
          for (const it of items) {
            out.push({
              companionUrl: this.companionUrl,
              provider: this.provider,
              token,
              requestPath: it.requestPath,
              fileId: it.id,
              name: it.name,
              mimeType: it.mimeType,
              size: it.size,
              thumbnail: it.thumbnail,
              relativeFolder: it.relativeFolder,
            });
          }
          discovered += items.length;
          // Surface progress between folders rather than per file — one write
          // per folder is plenty for visual feedback and avoids a render burst
          // on large directories.
          this._resolveProgress = discovered;
        }
      } catch (err) {
        if (signal.aborted) return;
        this._resolvingFolders = false;
        if (err instanceof AuthExpiredError) {
          removeToken(this.provider);
          this._authenticated = false;
          return;
        }
        this._error =
          err instanceof Error
            ? err.message
            : this.t('failedToReadFolder', 'Failed to read folder contents');
        return;
      } finally {
        if (this._resolveAbort?.signal === signal) {
          this._resolveAbort = null;
        }
      }
      this._resolvingFolders = false;
    }

    this.dispatchEvent(
      new CustomEvent('connector-files-selected', {
        detail: { files: out },
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
    const def = this._providerDef;
    const canGoBack = this._authenticated && this._breadcrumbs.length > 0;
    return html`
      <div class="browser-header">
        <button
          class="back-btn"
          ?disabled=${!canGoBack}
          @click=${this._onBack}
          title=${this.t('back', 'Back')}
          aria-label=${this.t('back', 'Back')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="header-brand">
          ${def?.brandHtml
            ? html`<div class="header-logo">${brandIcon(def)}</div>`
            : nothing}

          <div class="header-title-group">
            <span class="browser-title">${this._providerLabel}</span>
            ${this._authenticated && this._username
              ? html`<span class="header-username">${this._username}</span>`
              : nothing}
          </div>
        </div>
        ${this._authenticated
          ? html`<button class="logout-btn" @click=${this._handleLogout}>${this.t('signOut', 'Sign out')}</button>`
          : nothing}
        <button
          class="close-btn"
          @click=${this._onClose}
          title=${this.t('close', 'Close')}
          aria-label=${this.t('close', 'Close')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    `;
  }

  private _onBack = () => {
    if (this._breadcrumbs.length === 0) return;
    this._onBreadcrumbClick(this._breadcrumbs.length - 2);
  };

  private _renderAuthView() {
    const def = this._providerDef;
    return html`
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${def?.brandHtml
                ? html`<span ${cspStyle({ display: 'flex', 'align-items': 'center', 'justify-content': 'center', transform: 'scale(2.2)' })}>${brandIcon(def)}</span>`
                : html`<svg viewBox="0 0 24 24" fill="none" stroke="var(--sfx-up-primary, #2563eb)" stroke-width="1.5"><path d="M12 2a5 5 0 015 5v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5zm3 8H9v-3a3 3 0 016 0v3z" fill="var(--sfx-up-primary, #2563eb)"/></svg>`}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">
            ${this.t('connectProvider', 'Connect {{provider}}', { provider: this._providerLabel })}
          </div>
          <div class="auth-text">
            ${this.t('connectProviderHint', 'Sign in to browse and select files from your {{provider}} account', { provider: this._providerLabel })}
          </div>
        </div>
        <button class="connect-btn" @click=${this._handleConnect}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          ${this.t('signInToProvider', 'Sign in to {{provider}}', { provider: this._providerLabel })}
        </button>
      </div>
    `;
  }

  private _renderLoading() {
    const rows = [1, 2, 3, 4, 5, 6, 7];
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
            <div class="skeleton-modified"></div>
          </div>
        `)}
      </div>
    `;
  }

  private _renderError() {
    return html`
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
          const last = this._breadcrumbs[this._breadcrumbs.length - 1];
          this._loadFolder(last?.path ?? '');
        }}>
          ${this.t('tryAgain', 'Try again')}
        </button>
      </div>
    `;
  }

  private _renderBrowser() {
    const files = this._items.filter((i) => !i.isFolder);
    const folders = this._items.filter((i) => i.isFolder);
    const selectedCount = this._selectedIds.size;
    const atFileLimit =
      this.maxSelect !== null && this._selectedFileCount >= this.maxSelect;
    const allSelected =
      this._items.length > 0 &&
      this._items.every((it) => this._selectedIds.has(it.id));

    return html`
      ${this._renderBreadcrumbs()}

      ${this._items.length > 0
        ? html`
            <div class="list-header">
              <div class="col-check"></div>
              <div class="col-thumb"></div>
              <div class="col-name">${this.t('name', 'Name')}</div>
              <div class="col-modified">${this.t('lastModified', 'Last modified')}</div>
            </div>
          `
        : nothing}

      <div class="file-list">
        ${folders.length === 0 && files.length === 0
          ? html`
              <div class="empty-state">
                <div class="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                </div>
                <div class="empty-text">${this.t('folderEmpty', 'This folder is empty')}</div>
              </div>
            `
          : nothing}

        ${folders.map((item) => {
          const isSelected = this._selectedIds.has(item.id);
          return html`
            <div
              class="file-item ${isSelected ? 'selected' : ''}"
              @click=${() => this._onFolderClick(item)}
            >
              ${this.multi
                ? html`<input
                    type="checkbox"
                    .checked=${isSelected}
                    aria-label=${this.t('selectFolder', 'Select folder')}
                    @click=${(e: Event) => e.stopPropagation()}
                    @change=${() => this._toggleSelect(item)}
                  />`
                : html`<span class="checkbox-spacer" aria-hidden="true"></span>`}
              <div class="file-thumb folder-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div class="file-info">
                <div class="file-name">${item.name}</div>
              </div>
              <span class="file-modified">${formatRelativeDate(item.modifiedDate, this.t)}</span>
            </div>
          `;
        })}

        ${files.map((item) => {
          const isSelected = this._selectedIds.has(item.id);
          const isDisabled = !isSelected && atFileLimit;
          return html`
            <div
              class="file-item ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}"
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
                  ? html`<img src=${this.transformThumbnail(item.thumbnail)} alt="" loading="lazy" referrerpolicy="no-referrer"
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
                <div class="file-meta">
                  ${item.size
                    ? html`<span class="file-size">${formatSize(item.size)}</span>`
                    : nothing}
                </div>
              </div>
              <span class="file-modified">${formatRelativeDate(item.modifiedDate, this.t)}</span>
            </div>
          `;
        })}

        ${this._nextPagePath
          ? html`
              <button
                class="load-more-btn"
                ?disabled=${this._loadingMore}
                @click=${this._onLoadMore}
              >
                ${this._loadingMore ? this.t('loading', 'Loading') : this.t('loadMore', 'Load more')}
              </button>
            `
          : nothing}
      </div>

      ${this._items.length > 0 || selectedCount > 0
        ? html`
            <div class="browser-footer">
              <div class="footer-left">
                ${this.multi ? html`<button class="select-all-btn" @click=${this._toggleSelectAll}>
                  ${allSelected ? this.t('deselectAll', 'Deselect all') : this.t('selectAll', 'Select all')}
                </button>` : nothing}
                <span class="selected-count ${selectedCount > 0 ? 'has-selection' : ''}">
                  ${selectedCount > 0
                    ? this.t('itemsSelected', { count: selectedCount, defaultValue_one: '{{count}} item selected', defaultValue_other: '{{count}} items selected' })
                    : this.t('noFilesSelected', 'No files selected')}
                </span>
              </div>
              <button
                class="add-btn"
                ?disabled=${selectedCount === 0 || this._resolvingFolders}
                @click=${this._onAddSelected}
              >
                ${selectedCount > 0
                  ? this.t('addItems', {
                      count: selectedCount,
                      defaultValue_one: 'Add {{count}} item',
                      defaultValue_other: 'Add {{count}} items',
                    })
                  : this.t('add', 'Add')}
              </button>
            </div>
          `
        : nothing}

      ${this._resolvingFolders
        ? html`
            <div class="busy-overlay">
              <div class="spinner"></div>
              <div class="busy-text">
                ${this._resolveProgress > 0
                  ? this.t('preparingFilesWithCount', {
                      count: this._resolveProgress,
                      defaultValue_one: 'Preparing {{count}} file…',
                      defaultValue_other: 'Preparing {{count}} files…',
                    })
                  : this.t('preparingFiles', 'Preparing files…')}
              </div>
              <button class="busy-cancel-btn" @click=${this._cancelResolve}>
                ${this.t('cancel', 'Cancel')}
              </button>
            </div>
          `
        : nothing}
    `;
  }

  private _cancelResolve = () => {
    this._resolveAbort?.abort();
    this._resolveAbort = null;
    this._resolvingFolders = false;
    this._resolveProgress = 0;
  };

  private _renderBreadcrumbs() {
    if (this._breadcrumbs.length === 0) return nothing;

    return html`
      <div class="breadcrumbs">
        <button class="crumb" @click=${() => this._onBreadcrumbClick(-1)}>
          <svg class="crumb-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          ${this.t('root', 'Root')}
        </button>
        ${this._breadcrumbs.map(
          (crumb, i) => html`
            <span class="crumb-sep">&rsaquo;</span>
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

/**
 * Render an ISO timestamp from Companion as a relative duration ("3 months ago",
 * "yesterday") via the host's translation function so locale rules apply.
 * Returns '' for missing/unparseable inputs.
 *
 * The unit is escalated when the rounded count would hit the next unit's
 * boundary — so 59.6 minutes shows as "1 hour ago", not "60 minutes ago",
 * and 11.6 months shows as "1 year ago", not "12 months ago".
 */
export function formatRelativeDate(iso: string | undefined, t: TFunction): string {
  if (!iso) return '';
  const ts = Date.parse(iso);
  if (Number.isNaN(ts)) return '';
  const diff = Math.max(0, Date.now() - ts);
  const minute = 60_000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  const minutes = Math.round(diff / minute);
  if (minutes < 1) return t('justNow', 'just now');
  if (minutes < 60) {
    return t('minutesAgo', {
      count: minutes,
      defaultValue_one: '{{count}} minute ago',
      defaultValue_other: '{{count}} minutes ago',
    });
  }
  const hours = Math.round(diff / hour);
  if (hours < 24) {
    return t('hoursAgo', {
      count: hours,
      defaultValue_one: '{{count}} hour ago',
      defaultValue_other: '{{count}} hours ago',
    });
  }
  const days = Math.round(diff / day);
  if (days < 2) return t('yesterday', 'yesterday');
  if (days < 30) {
    return t('daysAgo', {
      count: days,
      defaultValue_one: '{{count}} day ago',
      defaultValue_other: '{{count}} days ago',
    });
  }
  const months = Math.round(diff / month);
  if (months < 12) {
    return t('monthsAgo', {
      count: months,
      defaultValue_one: '{{count}} month ago',
      defaultValue_other: '{{count}} months ago',
    });
  }
  return t('yearsAgo', {
    count: Math.round(diff / year),
    defaultValue_one: '{{count}} year ago',
    defaultValue_other: '{{count}} years ago',
  });
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-provider-browser': SfxProviderBrowser;
  }
}
