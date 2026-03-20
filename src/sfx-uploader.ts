import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createStore, Store } from './store';
import { addFile, removeFile } from './store/helpers';
import { StoreController } from './controllers/store.controller';
import { UploadEngine, type UploadEngineConfig } from './engine';
import type { SfxDropZone } from './components/drop-zone';
import type { UploaderState, UploadFile, UploadRestrictions, UploadResponse } from './store/store.types';
import type { AuthConfig, AuthHeaders } from './auth/auth.types';
import { resolveAuth, getApiBase, buildAuthHeaders } from './auth/auth.service';
import { PublicEvents } from './events/public-events';
import { generateFileId, guessMimeType } from './utils/file-utils';
import { validateFile, buildAcceptString } from './utils/validate';
import type { ProviderId, ConnectorConfig, RemoteFileInfo } from './connectors/connector.types';
import { getProviderSources } from './connectors/provider-registry';
import { CORE_SOURCES, type SourceDef } from './components/source-pills';

/** Providers that use search instead of OAuth file browsing. */
const SEARCH_PROVIDERS = new Set<ProviderId>(['unsplash']);

// Import component classes so they can be registered
import './components/drop-zone';
import './components/import-divider';
import './components/source-pills';
import './components/file-list';
import './components/file-item';
import './components/success-card';
import './components/actions-bar';
import './components/url-dialog';
import './components/camera-dialog';
import './components/screen-cast-dialog';

// --- Config callbacks (spec §13.1) ---

export interface UploaderCallbacks {
  onFileAdded?: (file: UploadFile) => void;
  onFileRemoved?: (file: UploadFile) => void;
  onFileRejected?: (file: UploadFile, reason: string) => void;
  onUploadStarted?: (files: UploadFile[]) => void;
  onUploadProgress?: (file: UploadFile, progress: number, speed: number) => void;
  onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
  onUploadError?: (file: UploadFile, error: Error) => void;
  onUploadRetry?: (file: UploadFile, attempt: number) => void;
  onAllComplete?: (successful: UploadFile[], failed: UploadFile[]) => void;
  onTotalProgress?: (percentage: number, speed: number, eta: number) => void;
  onBeforeUpload?: (files: UploadFile[]) => boolean | void;
  onOpen?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
  onFilePreview?: (file: UploadFile) => void;
  onFillMetadata?: (files: UploadFile[]) => void;
}

export interface UploaderConfig {
  auth: AuthConfig;
  targetFolder?: string;
  mode?: 'modal' | 'inline';
  restrictions?: Partial<UploadRestrictions>;
  concurrency?: number;
  autoProceed?: boolean;
  callbacks?: UploaderCallbacks;
  connectors?: ConnectorConfig;
  /** Show "Fill Metadata" button in the actions bar. */
  showFillMetadata?: boolean;
}

type UploaderPhase = 'empty' | 'ready' | 'uploading' | 'complete';

export class SfxUploader extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-error: var(--destructive, #dc2626);
      --sfx-up-text: var(--foreground, #1e293b);
      --sfx-up-text-secondary: var(--secondary-foreground, #475569);
      --sfx-up-text-muted: var(--muted-foreground, #94a3b8);
      --sfx-up-border: var(--border, #e8edf5);
      --sfx-up-border-light: var(--muted, #f1f5f9);
      --sfx-up-bg: var(--background, #ffffff);
      --sfx-up-radius: 16px;
      --sfx-up-font: 'Inter', system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 1198px;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      animation: modalIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    }

    /* --- Header --- */
    .header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      background: var(--sfx-up-bg, #fff);
      border-bottom: 1px solid #f0f0f0;
      flex-shrink: 0;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .header-icon-done {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .header-icon svg {
      width: 16px;
      height: 16px;
    }

    .header-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      flex: 1;
    }

    .back-btn {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: #f0f0f0;
      color: #888;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      position: relative;
    }

    .back-btn svg {
      width: 16px;
      height: 16px;
    }

    .back-btn:hover {
      background: #e4e4e4;
      color: #333;
    }

    .back-btn:hover::after {
      content: 'Back to Asset Picker';
      position: absolute;
      bottom: -30px;
      right: 0;
      background: #fff;
      color: #333;
      font-size: 11px;
      font-weight: 500;
      padding: 4px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      z-index: 10;
    }

    /* --- Content wrapper (holds body + actions bar) --- */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    /* --- Body --- */
    .body {
      flex: 1;
      overflow: hidden;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-height: 0;
      background: #fff;
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      outline: 2px dashed var(--sfx-up-primary, #2563eb);
      outline-offset: -4px;
      border-radius: 8px;
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow-y: auto;
      gap: 0;
      padding-bottom: 24px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .body.has-files::-webkit-scrollbar {
      width: 6px;
    }

    .body.has-files::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    .body.has-files::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 3px;
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    .asset-count {
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 24px 0 8px;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      border: 1px solid var(--sfx-up-border, #e8edf5);
      border-radius: var(--sfx-up-radius, 16px);
      background: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      max-height: 88vh;
    }

    /* --- Preview split layout --- */
    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 54;
      min-width: 0;
      overflow-y: auto;
      padding-right: 12px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .preview-layout .file-grid-side::-webkit-scrollbar { width: 5px; }
    .preview-layout .file-grid-side::-webkit-scrollbar-track { background: transparent; }
    .preview-layout .file-grid-side::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 12px 0;
    }

    .preview-panel {
      flex: 46;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 0 20px 20px;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 0;
      flex-shrink: 0;
    }

    .preview-panel-header button {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #9ca3af);
      transition: background 0.15s, color 0.15s;
      padding: 0;
    }

    .preview-panel-header button:hover {
      background: #f3f4f6;
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 18px;
      height: 18px;
    }

    .preview-img-wrap {
      position: relative;
      flex-shrink: 0;
    }

    .preview-image {
      width: 100%;
      height: 320px;
      border-radius: 6px;
      object-fit: contain;
      display: block;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text, #1e293b);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 18px;
      height: 18px;
    }

    .preview-nav.prev { left: 10px; }
    .preview-nav.next { right: 10px; }

    .preview-filename {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      margin-top: 12px;
      word-break: break-all;
      flex-shrink: 0;
    }

    .preview-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 10px;
      flex-shrink: 0;
    }

    .preview-tag {
      display: inline-flex;
      align-items: center;
      background: #f5f7fa;
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 12px;
      color: #64748b;
      font-weight: 500;
    }

    .preview-tag strong {
      color: var(--sfx-up-text, #1e293b);
      font-weight: 600;
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: oklch(0 0 0 / 0.4);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 20px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 520px;
      height: 75vh;
      max-height: 640px;
      min-height: 400px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes modalIn {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.92);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s ease;
      cursor: zoom-in;
    }

    .fs-overlay.zoomed {
      cursor: zoom-out;
    }

    .fs-overlay.zoomed .fs-img {
      max-width: none;
      max-height: none;
      width: auto;
      height: auto;
      transform: scale(1);
    }

    .fs-img {
      max-width: 92vw;
      max-height: 88vh;
      object-fit: contain;
      border-radius: 4px;
      transition: transform 0.2s ease;
      user-select: none;
      -webkit-user-drag: none;
    }

    .fs-toolbar {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      gap: 8px;
      z-index: 10001;
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
    }

    .fs-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .fs-btn svg {
      width: 20px;
      height: 20px;
    }

    .fs-filename {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
      padding: 6px 16px;
      border-radius: 8px;
      white-space: nowrap;
      z-index: 10001;
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop { animation: none; }
      .modal-card { animation: none; }
      .fs-overlay { animation: none; }
    }

    /* --- Responsive: Tablet (≤ 768px) --- */
    @media (max-width: 768px) {
      .modal-backdrop { padding: 12px; }
      .modal-card { border-radius: 12px; max-height: 92vh; }
      .header { padding: 12px 16px; }
      .header-icon { width: 28px; height: 28px; margin-right: 10px; }
      .header-icon svg { width: 14px; height: 14px; }
      .header-title { font-size: 14px; }
      .body { padding: 16px; }
      .body.has-files { padding: 16px; padding-bottom: 12px; }
      .asset-count { padding: 12px 0 6px; font-size: 12px; }

      .preview-layout { flex-direction: column; }
      .preview-layout .file-grid-side {
        width: 100%;
        max-height: 140px;
        overflow-x: auto;
        overflow-y: hidden;
        flex-shrink: 0;
      }
      .preview-panel { padding: 0 0 16px; }

      .preview-topbar { padding: 8px 0; }

      .connector-modal-backdrop { padding: 8px; }
      .connector-modal {
        max-width: 100%;
        height: 85vh;
        max-height: none;
        border-radius: 14px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) --- */
    @media (max-width: 480px) {
      .modal-backdrop { padding: 0; }
      .modal-card {
        border-radius: 0;
        max-height: 100vh;
        max-width: 100%;
        height: 100%;
      }
      .header { padding: 10px 14px; }
      .header-icon { width: 26px; height: 26px; margin-right: 8px; }
      .header-title { font-size: 13px; }
      .body { padding: 12px; }
      .body.has-files { padding: 12px; padding-bottom: 8px; }
      .asset-count { padding: 8px 0 4px; font-size: 11px; }

      .preview-layout .file-grid-side { max-height: 100px; }
      .preview-panel { padding: 0 0 12px; }
      .preview-filename { font-size: 13px; margin-top: 8px; }
      .preview-tags { gap: 4px; margin-top: 6px; }
      .preview-tag { font-size: 11px; padding: 3px 8px; }

      .inline { max-height: 100vh; border-radius: 0; border: none; }

      .connector-modal-backdrop { padding: 0; }
      .connector-modal {
        border-radius: 0;
        height: 100vh;
        max-height: none;
        min-height: auto;
      }
    }
  `;

  @property({ attribute: false }) config: UploaderConfig | null = null;

  @state() private _isOpen = false;
  @state() private _activeConnector: ProviderId | null = null;
  @state() private _showUrlDialog = false;
  @state() private _showCameraDialog = false;
  @state() private _showScreenCastDialog = false;
  @state() private _showCanvaDialog = false;
  @state() private _previewFileId: string | null = null;
  @state() private _fullscreenPreviewUrl: string | null = null;
  @state() private _fullscreenZoomed = false;
  @state() private _bodyDragOver = false;
  private _bodyDragCounter = 0;

  private _store!: Store<UploaderState>;
  private _storeCtrl!: StoreController;
  private _engine: UploadEngine | null = null;
  private _cachedSources: SourceDef[] = CORE_SOURCES;
  private _cachedSourcesConfig: ConnectorConfig | undefined = undefined;

  // Resolved auth state
  private _apiBase: string | null = null;
  private _authHeaders: AuthHeaders | null = null;
  private _authResolveId = 0; // monotonic counter to discard stale exchanges
  private _prevStoreState: UploaderState | null = null;
  private _unsubStoreEvents: (() => void) | null = null;

  constructor() {
    super();
    this._store = createStore();
    this._storeCtrl = new StoreController(this, this._store);
  }

  // --- Public API ---

  /** Open the uploader (modal mode). */
  open() {
    if (this._isOpen) return;
    this._isOpen = true;
    this.config?.callbacks?.onOpen?.();
    this._dispatchPublic(PublicEvents.OPEN, {});
    this.requestUpdate();
  }

  /** Close the uploader (modal mode). */
  close() {
    if (!this._isOpen) return;
    this._isOpen = false;
    this.config?.callbacks?.onClose?.();
    this._dispatchPublic(PublicEvents.CLOSE, {});
    this.requestUpdate();
  }

  /** Start uploading all queued files. */
  upload() {
    this._ensureEngine();
    if (!this._engine) {
      console.warn('[sfx-uploader] Cannot upload: auth not resolved yet');
      return;
    }

    const files = [...this._store.getState().files.values()].filter(
      (f) => f.status === 'idle' || f.status === 'queued',
    );

    // Fire onBeforeUpload callback — returning false cancels
    if (this.config?.callbacks?.onBeforeUpload) {
      const result = this.config.callbacks.onBeforeUpload(files);
      if (result === false) return;
    }

    // Fire cancelable sfx-before-upload event
    const beforeEvent = new CustomEvent(PublicEvents.BEFORE_UPLOAD, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { files },
    });
    const allowed = this.dispatchEvent(beforeEvent);
    if (!allowed) return; // preventDefault() was called

    this._dispatchPublic(PublicEvents.UPLOAD_STARTED, { files });
    this.config?.callbacks?.onUploadStarted?.(files);

    this._engine.uploadAll();
  }

  /** Programmatically add files. */
  addFiles(files: File[]) {
    this._processIncomingFiles(files);
  }

  /** Resume a paused upload (spec §13.2). */
  resumeUpload(files?: UploadFile[]) {
    // If enriched files provided, batch-update them in the store
    if (files && files.length > 0) {
      const current = this._store.getState().files;
      const next = new Map(current);
      let changed = false;
      for (const f of files) {
        const existing = current.get(f.id);
        if (existing) {
          next.set(f.id, { ...existing, ...f });
          changed = true;
        }
      }
      if (changed) this._store.setState({ files: next });
    }
    this._ensureEngine();
    this._engine?.uploadAll();
  }

  /** Cancel a paused upload (spec §13.2). */
  cancelUpload() {
    this._engine?.cancelAll();
  }

  /** Get a snapshot of all current files. */
  getFiles(): UploadFile[] {
    return [...this._store.getState().files.values()];
  }

  /** Get a single file by ID. */
  getFile(fileId: string): UploadFile | undefined {
    return this._store.getState().files.get(fileId);
  }

  /** Statuses where meta/tags can still be modified before upload. */
  private static readonly _MODIFIABLE_STATUSES = new Set([
    'idle', 'queued', 'validating', 'rejected',
  ]);

  /** Update metadata and/or tags for a single file. */
  updateFileMeta(
    fileId: string,
    meta?: Record<string, unknown>,
    tags?: string[],
  ): void {
    const current = this._store.getState().files;
    const existing = current.get(fileId);
    if (!existing || !SfxUploader._MODIFIABLE_STATUSES.has(existing.status)) return;

    const next = new Map(current);
    next.set(fileId, {
      ...existing,
      meta: meta != null ? { ...existing.meta, ...meta } : existing.meta,
      tags: tags != null ? tags : existing.tags,
    });
    this._store.setState({ files: next });
  }

  /** Batch-update metadata and/or tags for multiple files. */
  updateFilesMeta(
    updates: Array<{ fileId: string; meta?: Record<string, unknown>; tags?: string[] }>,
  ): void {
    const current = this._store.getState().files;
    const next = new Map(current);
    let changed = false;

    for (const { fileId, meta, tags } of updates) {
      const existing = current.get(fileId);
      if (!existing || !SfxUploader._MODIFIABLE_STATUSES.has(existing.status)) continue;
      next.set(fileId, {
        ...existing,
        meta: meta != null ? { ...existing.meta, ...meta } : existing.meta,
        tags: tags != null ? tags : existing.tags,
      });
      changed = true;
    }

    if (changed) this._store.setState({ files: next });
  }

  // --- Lifecycle ---

  updated(changed: Map<string, unknown>) {
    if (changed.has('config') && this.config) {
      this._applyConfig(this.config);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._onKeyDown);
    // Subscribe to store changes for public event dispatching
    this._unsubStoreEvents = this._store.subscribe(() => this._onStoreChange());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKeyDown);
    this._unsubStoreEvents?.();
    this._unsubStoreEvents = null;
    this._prevStoreState = null;
    this._engine?.destroy();
    this._engine = null;
  }

  // --- Config ---

  private _applyConfig(cfg: UploaderConfig) {
    // Update store with config values
    const updates: Partial<UploaderState> = {};

    if (cfg.targetFolder) updates.targetFolder = cfg.targetFolder;
    if (cfg.restrictions) {
      updates.restrictions = {
        ...this._store.getState().restrictions,
        ...cfg.restrictions,
      };
    }
    if (cfg.concurrency) {
      const qc = this._store.getState().queueConfig;
      updates.queueConfig = { ...qc, concurrency: cfg.concurrency };
    }
    if (cfg.autoProceed != null) {
      const qc = updates.queueConfig ?? this._store.getState().queueConfig;
      updates.queueConfig = { ...qc, autoProceed: cfg.autoProceed };
    }

    if (Object.keys(updates).length > 0) {
      this._store.setState(updates);
    }

    // Resolve auth and create/update engine
    this._resolveAuthAndEngine(cfg);

    // Auto-open for inline mode
    if (cfg.mode === 'inline' || !cfg.mode) {
      this._isOpen = true;
    }
  }

  private async _resolveAuthAndEngine(cfg: UploaderConfig) {
    const auth = cfg.auth;

    // For sass-key and session modes, resolve synchronously
    if (auth.mode === 'sass-key' || auth.mode === 'session') {
      this._apiBase = getApiBase(auth.container);
      this._authHeaders = buildAuthHeaders(auth);
      this._ensureEngine();
      this._engine!.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
      });
      return;
    }

    // For security-template mode, perform async SASS key exchange.
    // Use a monotonic ID to discard results from stale exchanges.
    const resolveId = ++this._authResolveId;
    try {
      const resolved = await resolveAuth(auth);
      if (resolveId !== this._authResolveId) return; // config changed while awaiting
      this._apiBase = resolved.apiBase;
      this._authHeaders = resolved.headers;
      this._ensureEngine();
      this._engine!.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
      });
    } catch (err) {
      if (resolveId !== this._authResolveId) return;
      console.error('[sfx-uploader] Auth resolution failed:', err);
    }
  }

  private _ensureEngine() {
    if (!this._engine && this._apiBase && this._authHeaders) {
      this._engine = new UploadEngine(this._store, {
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
      });
      this._engine.start();
    }
  }

  // --- Public event dispatching (spec §13.1) ---

  private _dispatchPublic(eventName: string, detail: Record<string, unknown>) {
    this.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, composed: true, detail }),
    );
  }

  /**
   * React to store changes and dispatch public events + callbacks
   * for file status transitions.
   */
  private _onStoreChange() {
    const curr = this._store.getState();
    const prev = this._prevStoreState;
    this._prevStoreState = curr;

    if (!prev) return;

    const callbacks = this.config?.callbacks;

    // Detect per-file status transitions
    for (const [id, file] of curr.files) {
      const prevFile = prev.files.get(id);

      if (!prevFile) continue; // newly added files are handled in _processIncomingFiles

      if (prevFile.status !== file.status) {
        switch (file.status) {
          case 'uploading':
            // progress events handled below
            break;
          case 'complete':
            if (file.response) {
              this._dispatchPublic(PublicEvents.UPLOAD_COMPLETE, { file, response: file.response });
              callbacks?.onUploadComplete?.(file, file.response);
            }
            break;
          case 'error':
          case 'failed': {
            const err = new Error(file.error ?? 'Upload failed');
            this._dispatchPublic(PublicEvents.UPLOAD_ERROR, { file, error: err });
            callbacks?.onUploadError?.(file, err);
            break;
          }
          case 'retrying':
            this._dispatchPublic(PublicEvents.UPLOAD_RETRY, { file, attempt: file.retryCount });
            callbacks?.onUploadRetry?.(file, file.retryCount);
            break;
        }
      }

      // Progress change
      if (file.status === 'uploading' && prevFile.progress !== file.progress) {
        this._dispatchPublic(PublicEvents.UPLOAD_PROGRESS, { file, progress: file.progress, speed: file.speed });
        callbacks?.onUploadProgress?.(file, file.progress, file.speed);
      }
    }

    // Total progress
    if (curr.totalProgress !== prev.totalProgress || curr.totalSpeed !== prev.totalSpeed) {
      const eta = curr.totalSpeed > 0
        ? (curr.totalBytes - curr.totalBytesUploaded) / curr.totalSpeed
        : 0;
      this._dispatchPublic(PublicEvents.TOTAL_PROGRESS, {
        percentage: curr.totalProgress,
        speed: curr.totalSpeed,
        eta,
      });
      callbacks?.onTotalProgress?.(curr.totalProgress, curr.totalSpeed, eta);
    }

    // All complete detection — only fire when uploads finished naturally, not on cancel
    if (prev.isUploading && !curr.isUploading) {
      const allFiles = [...curr.files.values()];
      const hasCancelled = allFiles.some((f) => f.status === 'cancelled');
      if (!hasCancelled) {
        const successful = allFiles.filter((f) => f.status === 'complete');
        const failed = allFiles.filter((f) => f.status === 'failed' || f.status === 'error');
        this._dispatchPublic(PublicEvents.ALL_COMPLETE, { successful, failed });
        callbacks?.onAllComplete?.(successful, failed);
      }
    }
  }

  // --- Connector sources ---

  /** Reserved source IDs that cannot be overridden by custom sources. */
  private static readonly _RESERVED_IDS = new Set(['device', 'camera', 'url']);

  private get _mergedSources(): SourceDef[] {
    const connectors = this.config?.connectors;
    // Return cached result if connectors config hasn't changed (same reference)
    if (connectors === this._cachedSourcesConfig) return this._cachedSources;
    this._cachedSourcesConfig = connectors;

    if (!connectors) {
      this._cachedSources = CORE_SOURCES;
      return this._cachedSources;
    }

    const providerSources = connectors.providers.length > 0
      ? getProviderSources(connectors.providers)
      : [];
    const custom = connectors.customSources ?? [];

    // Order: device, url → providers → remaining core (camera, screen-cast) → custom
    const priorityCore = CORE_SOURCES.filter(s => s.id === 'device' || s.id === 'url');
    const remainingCore = CORE_SOURCES.filter(s => s.id !== 'device' && s.id !== 'url');

    const seen = new Set<string>();
    const merged: SourceDef[] = [];
    for (const s of [...priorityCore, ...providerSources, ...remainingCore, ...custom]) {
      if (seen.has(s.id)) continue;
      if (SfxUploader._RESERVED_IDS.has(s.id) && s.onActivate) {
        console.warn(`[sfx-uploader] Custom source id "${s.id}" conflicts with a built-in source and was skipped.`);
        continue;
      }
      seen.add(s.id);
      merged.push(s);
    }

    this._cachedSources = merged;
    return this._cachedSources;
  }

  // --- Phase computation ---

  private get _phase(): UploaderPhase {
    const s = this._storeCtrl.state;
    const files = [...s.files.values()];
    if (files.length === 0) return 'empty';
    if (s.isUploading) return 'uploading';
    // Complete when all uploadable files finished (ignoring rejected/cancelled)
    const terminal = new Set(['complete', 'rejected', 'cancelled', 'failed']);
    if (files.every((f) => terminal.has(f.status)) && files.some((f) => f.status === 'complete')) {
      return 'complete';
    }
    return 'ready';
  }

  // --- File handling ---

  private _processIncomingFiles(rawFiles: File[]) {
    const callbacks = this.config?.callbacks;

    for (const file of rawFiles) {
      // Re-read state each iteration so maxNumberOfFiles validation sees previously added files
      const s = this._store.getState();
      const error = validateFile(file, s.restrictions, s.files);
      if (error) {
        // Create a rejected file entry so the user sees the error
        const uploadFile: UploadFile = {
          id: generateFileId(),
          status: 'rejected',
          file,
          remoteUrl: null,
          name: file.name,
          size: file.size,
          type: file.type,
          previewUrl: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          remoteInfo: null,
        };
        addFile(this._store, uploadFile);
        this._dispatchPublic(PublicEvents.FILE_REJECTED, { file: uploadFile, reason: error });
        callbacks?.onFileRejected?.(uploadFile, error);
        continue;
      }

      // Create preview for images
      let previewUrl: string | null = null;
      if (file.type.startsWith('image/')) {
        previewUrl = URL.createObjectURL(file);
      }

      const uploadFile: UploadFile = {
        id: generateFileId(),
        status: 'idle',
        file,
        remoteUrl: null,
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl,
        progress: 0,
        speed: 0,
        bytesUploaded: 0,
        error: null,
        retryCount: 0,
        response: null,
        addedAt: Date.now(),
        meta: {},
        tags: [],
        remoteInfo: null,
      };

      addFile(this._store, uploadFile);
      this._dispatchPublic(PublicEvents.FILE_ADDED, { file: uploadFile });
      callbacks?.onFileAdded?.(uploadFile);
    }

    // Auto-proceed if configured
    if (this._store.getState().queueConfig.autoProceed) {
      this.upload();
    }
  }

  // --- Event handlers ---

  private _onFilesSelected = (e: CustomEvent<{ files: File[] }>) => {
    this._processIncomingFiles(e.detail.files);
  };

  private _onSourceClick = async (e: CustomEvent<{ source: string }>) => {
    const source = e.detail.source;

    // Check for custom source with onActivate callback
    const sourceDef = this._mergedSources.find(s => s.id === source);
    if (sourceDef?.onActivate) {
      try {
        sourceDef.onActivate(this);
      } catch (err) {
        console.error(`[sfx-uploader] onActivate for custom source "${source}" threw:`, err);
      }
      return;
    }

    if (source === 'device') {
      const dropZone = this.shadowRoot!.querySelector('sfx-drop-zone') as any;
      dropZone?.browse();
      return;
    }

    if (source === 'url') {
      this._showUrlDialog = true;
      return;
    }

    if (source === 'camera') {
      this._showCameraDialog = true;
      return;
    }

    if (source === 'screen-cast') {
      return; // Screen cast removed from UI
    }

    // Canva uses its own SDK, not Companion OAuth
    if (source === 'canva') {
      if (!customElements.get('sfx-canva-dialog')) {
        const { SfxCanvaDialog } = await import('./components/canva-dialog');
        customElements.define('sfx-canva-dialog', SfxCanvaDialog);
      }
      this._showCanvaDialog = true;
      return;
    }

    // Check if this is a connector source
    const providers = this.config?.connectors?.providers ?? [];
    if (providers.includes(source as ProviderId)) {
      // Lazy-load the appropriate browser component
      const isSearch = SEARCH_PROVIDERS.has(source as ProviderId);
      if (isSearch) {
        if (!customElements.get('sfx-search-provider-browser')) {
          const { SfxSearchProviderBrowser } = await import('./components/search-provider-browser');
          customElements.define('sfx-search-provider-browser', SfxSearchProviderBrowser);
        }
      } else {
        if (!customElements.get('sfx-provider-browser')) {
          const { SfxProviderBrowser } = await import('./components/provider-browser');
          customElements.define('sfx-provider-browser', SfxProviderBrowser);
        }
      }
      this._activeConnector = source as ProviderId;
    }
  };

  private _onUrlSubmit = (e: CustomEvent<{ url: string; name: string }>) => {
    this._showUrlDialog = false;
    const { url, name } = e.detail;

    const type = guessMimeType(name);
    const isImage = type.startsWith('image/');

    const uploadFile: UploadFile = {
      id: generateFileId(),
      status: 'idle',
      file: null,
      remoteUrl: url,
      name,
      size: 0,
      type,
      previewUrl: isImage ? url : null,
      progress: 0,
      speed: 0,
      bytesUploaded: 0,
      error: null,
      retryCount: 0,
      response: null,
      addedAt: Date.now(),
      meta: {},
      tags: [],
      remoteInfo: null,
    };

    addFile(this._store, uploadFile);
    this._dispatchPublic(PublicEvents.FILE_ADDED, { file: uploadFile });
    this.config?.callbacks?.onFileAdded?.(uploadFile);

    if (this._store.getState().queueConfig.autoProceed) {
      this.upload();
    }
  };

  private _onUrlCancel = () => {
    this._showUrlDialog = false;
  };

  private _onCameraCapture = (e: CustomEvent<{ file: File }>) => {
    this._showCameraDialog = false;
    this._processIncomingFiles([e.detail.file]);
  };

  private _onCameraCancel = () => {
    this._showCameraDialog = false;
  };

  private _onScreenCastCapture = (e: CustomEvent<{ file: File }>) => {
    this._showScreenCastDialog = false;
    this._processIncomingFiles([e.detail.file]);
  };

  private _onScreenCastCancel = () => {
    this._showScreenCastDialog = false;
  };

  private _onFileRemove = (e: CustomEvent<{ fileId: string }>) => {
    const file = this._store.getState().files.get(e.detail.fileId);
    // Revoke objectURL to free memory
    if (file?.previewUrl) URL.revokeObjectURL(file.previewUrl);
    // Cancel if active
    if (file && (file.status === 'uploading' || file.status === 'queued')) {
      this._engine?.cancelFile(e.detail.fileId);
    }
    removeFile(this._store, e.detail.fileId);
    if (file) {
      this._dispatchPublic(PublicEvents.FILE_REMOVED, { file });
      this.config?.callbacks?.onFileRemoved?.(file);
    }
  };

  private _onFilePreview = (e: CustomEvent<{ fileId: string }>) => {
    const file = this._store.getState().files.get(e.detail.fileId);
    if (!file) return;
    this._previewFileId = file.id;
    this._dispatchPublic(PublicEvents.FILE_PREVIEW, { file });
    this.config?.callbacks?.onFilePreview?.(file);
  };

  private _onFillMetadata = () => {
    const files = [...this._store.getState().files.values()].filter(
      (f) => SfxUploader._MODIFIABLE_STATUSES.has(f.status),
    );
    this._dispatchPublic(PublicEvents.FILL_METADATA, { files });
    this.config?.callbacks?.onFillMetadata?.(files);
  };

  private _onFileRetry = (e: CustomEvent<{ fileId: string }>) => {
    this._ensureEngine();
    this._engine?.retryFile(e.detail.fileId);
  };

  private _onRetryAll = () => {
    this._ensureEngine();
    this._engine?.retryAll();
  };

  private _onClearAll = () => {
    const callbacks = this.config?.callbacks;

    // Revoke all preview URLs and dispatch removal events
    for (const file of this._store.getState().files.values()) {
      if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
      this._dispatchPublic(PublicEvents.FILE_REMOVED, { file });
      callbacks?.onFileRemoved?.(file);
    }
    this._engine?.cancelAll();
    this._store.setState({
      files: new Map(),
      isUploading: false,
      totalProgress: 0,
      totalSpeed: 0,
      totalBytesUploaded: 0,
      totalBytes: 0,
    });
  };

  private _onAddMore = () => {
    const dropZone = this.shadowRoot!.querySelector('sfx-drop-zone') as SfxDropZone | null;
    dropZone?.browse();
  };

  private _onUploadStart = () => {
    if (this._phase === 'complete') {
      this._onClearAll();
      return;
    }
    this.upload();
  };

  private _onUploadMore = () => {
    this._onClearAll();
  };

  private _onConnectorFilesSelected = (e: CustomEvent<{ files: RemoteFileInfo[] }>) => {
    const callbacks = this.config?.callbacks;
    for (const info of e.detail.files) {
      const uploadFile: UploadFile = {
        id: generateFileId(),
        status: 'idle',
        file: null,
        remoteUrl: null,
        name: info.name,
        size: info.size,
        type: info.mimeType,
        previewUrl: info.thumbnail,
        progress: 0,
        speed: 0,
        bytesUploaded: 0,
        error: null,
        retryCount: 0,
        response: null,
        addedAt: Date.now(),
        meta: {},
        tags: [],
        remoteInfo: info,
      };
      addFile(this._store, uploadFile);
      this._dispatchPublic(PublicEvents.FILE_ADDED, { file: uploadFile });
      callbacks?.onFileAdded?.(uploadFile);
    }
    this._activeConnector = null;

    // Auto-proceed if configured
    if (this._store.getState().queueConfig.autoProceed) {
      this.upload();
    }
  };

  private _onConnectorClose = () => {
    this._activeConnector = null;
  };

  private _onConnectorBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      this._activeConnector = null;
    }
  };

  private _onCanvaFileReady = (e: CustomEvent<{ file: File }>) => {
    this._showCanvaDialog = false;
    this._processIncomingFiles([e.detail.file]);
  };

  private _onCanvaCancel = () => {
    this._showCanvaDialog = false;
  };

  private _onPrimaryAction = () => {
    // Dispatch public event so consumers can handle "Done"/"View in DAM"/etc.
    this._dispatchPublic(PublicEvents.COMPLETE_ACTION, {});
    // In modal mode, close the uploader
    if (this.config?.mode === 'modal') {
      this.close();
    }
  };

  /** Dismiss handler for inline mode X button */
  private _onInlineDismiss = () => {
    this.config?.callbacks?.onCancel?.();
    this._dispatchPublic(PublicEvents.CANCEL, {});
  };

  /** Shared dismiss handler for X button, backdrop click, Escape */
  private _onModalDismiss = () => {
    this.config?.callbacks?.onCancel?.();
    this._dispatchPublic(PublicEvents.CANCEL, {});
    this.close();
  };

  private _onModalBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      this._onModalDismiss();
    }
  };

  // --- Body-level drag & drop (active when drop zone is compact) ---

  private _onBodyDragEnter = (e: DragEvent) => {
    e.preventDefault();
    this._bodyDragCounter++;
    if (this._bodyDragCounter === 1) this._bodyDragOver = true;
  };

  private _onBodyDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  private _onBodyDragLeave = (e: DragEvent) => {
    e.preventDefault();
    this._bodyDragCounter--;
    if (this._bodyDragCounter <= 0) {
      this._bodyDragCounter = 0;
      this._bodyDragOver = false;
    }
  };

  private _onBodyDrop = (e: DragEvent) => {
    e.preventDefault();
    this._bodyDragCounter = 0;
    this._bodyDragOver = false;

    const files = Array.from(e.dataTransfer?.files ?? []);
    if (files.length > 0) {
      this._onFilesSelected(
        new CustomEvent('files-selected', { detail: { files } }),
      );
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (this._fullscreenPreviewUrl) {
        this._onFsClose();
        return;
      }
      if (this._isOpen && this.config?.mode === 'modal') {
        this._onModalDismiss();
      }
    }
  };

  // --- Render ---

  render() {
    const mode = this.config?.mode ?? 'modal';

    if (mode === 'modal') {
      if (!this._isOpen) return nothing;
      return html`
        <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
          <div class="modal-card">
            ${this._renderHeader()}
            ${this._renderBody()}
          </div>
        </div>
      `;
    }

    // Inline mode
    return html`
      <div class="inline">
        ${this._renderHeader()}
        ${this._renderBody()}
      </div>
    `;
  }

  private _renderHeader() {
    const mode = this.config?.mode ?? 'modal';
    const isComplete = this._phase === 'complete';
    return html`
      <div class="header">
        <div class="header-icon ${isComplete ? 'header-icon-done' : ''}">
          ${isComplete
            ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>`
            : html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>`}
        </div>
        <div class="header-title">${isComplete ? 'Upload Complete' : 'Upload Files'}</div>
        <button class="back-btn" @click=${mode === 'modal' ? this._onModalDismiss : this._onInlineDismiss}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
      </div>
    `;
  }

  private _formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  }

  private _getImageDimensions(file: UploadFile): Promise<{ w: number; h: number } | null> {
    if (!file.previewUrl) return Promise.resolve(null);
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = () => resolve(null);
      img.src = file.previewUrl!;
    });
  }

  private _renderPreviewLayout(files: UploadFile[]) {
    const previewFile = files.find((f) => f.id === this._previewFileId) ?? files[0];
    const ext = previewFile.name.split('.').pop()?.toUpperCase() || '';
    const addedDate = new Date(previewFile.addedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return html`
      <div class="preview-topbar">
        <div class="asset-count" style="padding:0">${files.length} ${files.length === 1 ? 'asset' : 'assets'}</div>
        <div class="preview-panel-header">
          <button @click=${() => this._onFileRemoveById(previewFile.id)} title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
          <button @click=${() => { if (previewFile.previewUrl) { this._fullscreenPreviewUrl = previewFile.previewUrl; this._fullscreenZoomed = false; } }} title="Fullscreen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
          <button @click=${() => { this._previewFileId = null; }} title="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div class="preview-layout">
        <div class="file-grid-side">
          <sfx-file-list .files=${files}></sfx-file-list>
        </div>
        <div class="preview-panel">
          ${previewFile.previewUrl
            ? html`
                <div class="preview-img-wrap">
                  <img class="preview-image" src=${previewFile.previewUrl} alt=${previewFile.name} />
                  ${files.indexOf(previewFile) > 0
                    ? html`<button class="preview-nav prev" @click=${() => this._navigatePreview(files, -1)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                      </button>`
                    : nothing}
                  ${files.indexOf(previewFile) < files.length - 1
                    ? html`<button class="preview-nav next" @click=${() => this._navigatePreview(files, 1)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                      </button>`
                    : nothing}
                </div>
              `
            : nothing}
          <div class="preview-filename">${previewFile.name}</div>
          <div class="preview-tags">
            <span class="preview-tag"><strong>${ext}</strong></span>
            <span class="preview-tag">${this._formatSize(previewFile.size)}</span>
            <span class="preview-tag" id="preview-dims">—</span>
            <span class="preview-tag">${addedDate}</span>
          </div>
        </div>
      </div>
    `;
  }

  private _navigatePreview(files: UploadFile[], direction: -1 | 1) {
    const idx = files.findIndex((f) => f.id === this._previewFileId);
    const next = idx + direction;
    if (next >= 0 && next < files.length) {
      this._previewFileId = files[next].id;
    }
  }

  private _onFileRemoveById(fileId: string) {
    const file = this._store.getState().files.get(fileId);
    if (file?.previewUrl) URL.revokeObjectURL(file.previewUrl);
    if (file && (file.status === 'uploading' || file.status === 'queued')) {
      this._engine?.cancelFile(fileId);
    }
    removeFile(this._store, fileId);
    const files = [...this._store.getState().files.values()];
    if (files.length === 0) this._previewFileId = null;
    else if (this._previewFileId === fileId) this._previewFileId = files[0].id;
  }

  private _renderBody() {
    const s = this._storeCtrl.state;
    const files = [...s.files.values()];
    const phase = this._phase;
    const accept = buildAcceptString(s.restrictions);
    const hasFiles = files.length > 0;

    return html`
      <div class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-retry=${this._onFileRetry}
        @fill-metadata=${this._onFillMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @primary-action=${this._onPrimaryAction}
        @connector-files-selected=${this._onConnectorFilesSelected}
        @connector-close=${this._onConnectorClose}
        @url-submit=${this._onUrlSubmit}
        @url-cancel=${this._onUrlCancel}
        @camera-capture=${this._onCameraCapture}
        @camera-cancel=${this._onCameraCancel}
        @screencast-capture=${this._onScreenCastCapture}
        @screencast-cancel=${this._onScreenCastCancel}
        @canva-file-ready=${this._onCanvaFileReady}
        @canva-cancel=${this._onCanvaCancel}
      >
        <div
          class="body ${hasFiles ? 'has-files' : ''} ${this._bodyDragOver ? 'body-drag-over' : ''}"
          @dragenter=${hasFiles ? this._onBodyDragEnter : nothing}
          @dragover=${hasFiles ? this._onBodyDragOver : nothing}
          @dragleave=${hasFiles ? this._onBodyDragLeave : nothing}
          @drop=${hasFiles ? this._onBodyDrop : nothing}
        >
          ${phase === 'complete'
              ? html`
                  <sfx-success-card
                    .fileCount=${files.length}
                    .totalSize=${files.reduce((sum, f) => sum + (f.size || 0), 0)}
                    .thumbnails=${files.filter((f) => f.previewUrl).map((f) => f.previewUrl!)}
                  ></sfx-success-card>
                `
              : html`
                  <sfx-drop-zone
                    .compact=${hasFiles}
                    .externalDragOver=${this._bodyDragOver}
                    .accept=${accept}
                    .sources=${this._mergedSources}
                  ></sfx-drop-zone>

                  ${hasFiles
                    ? this._previewFileId
                      ? this._renderPreviewLayout(files)
                      : html`
                          <div class="asset-count">${files.length} ${files.length === 1 ? 'file' : 'files'} · ${this._formatSize(files.reduce((sum, f) => sum + (f.size || 0), 0))}</div>
                          <sfx-file-list .files=${files}></sfx-file-list>
                        `
                    : nothing}
                `}
        </div>

        ${hasFiles && phase !== 'complete'
          ? html`
              <sfx-actions-bar
                .uploadState=${phase === 'uploading' ? 'uploading' : 'idle'}
                .fileCount=${files.length}
                .totalSize=${files.reduce((sum, f) => sum + (f.size || 0), 0)}
                .failedCount=${files.filter((f) => f.status === 'failed' || f.status === 'error').length}
                .completedCount=${files.filter((f) => f.status === 'complete').length}
                .uploadProgress=${s.totalProgress ?? 0}
                .showFillMetadata=${!!this.config?.showFillMetadata}
              ></sfx-actions-bar>
            `
          : nothing}

        ${this._showUrlDialog ? html`<sfx-url-dialog></sfx-url-dialog>` : nothing}
        ${this._showCameraDialog ? html`<sfx-camera-dialog></sfx-camera-dialog>` : nothing}
        ${this._showScreenCastDialog ? html`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>` : nothing}
        ${this._showCanvaDialog
          ? html`<sfx-canva-dialog .apiKey=${this.config?.connectors?.canvaApiKey ?? ''}></sfx-canva-dialog>`
          : nothing}

        ${this._activeConnector && this.config?.connectors
          ? html`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${SEARCH_PROVIDERS.has(this._activeConnector)
                    ? html`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `
                    : html`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `
          : nothing}

        ${this._fullscreenPreviewUrl
          ? html`
              <div
                class="fs-overlay ${this._fullscreenZoomed ? 'zoomed' : ''}"
                @click=${this._onFsToggleZoom}
              >
                <div class="fs-toolbar" @click=${(e: Event) => e.stopPropagation()}>
                  <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed ? 'Zoom out' : 'Zoom in'}">
                    ${this._fullscreenZoomed
                      ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`
                      : html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
                  </button>
                  <button class="fs-btn" @click=${this._onFsClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <img
                  class="fs-img"
                  src=${this._fullscreenPreviewUrl}
                  alt=""
                  @click=${this._onFsToggleZoom}
                />
                <div class="fs-filename">${this._getFullscreenFilename()}</div>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _onFsToggleZoom = (e?: Event) => {
    e?.stopPropagation();
    this._fullscreenZoomed = !this._fullscreenZoomed;
  };

  private _onFsClose = (e?: Event) => {
    e?.stopPropagation();
    this._fullscreenPreviewUrl = null;
    this._fullscreenZoomed = false;
  };

  private _getFullscreenFilename(): string {
    if (!this._previewFileId) return '';
    const file = this._store.getState().files.get(this._previewFileId);
    return file?.name ?? '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-uploader': SfxUploader;
  }
}
