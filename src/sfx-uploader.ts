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

    .close-btn {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: #f0f0f0;
      color: #888;
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }

    .close-btn:hover {
      background: #e4e4e4;
      color: #333;
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
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-height: 0;
      background: #fff;
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
    }

    /* --- Inline mode --- */
    .inline {
      border: 1px solid var(--sfx-up-border, #e8edf5);
      border-radius: var(--sfx-up-radius, 16px);
      background: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
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
      max-width: 540px;
      height: 80vh;
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

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop { animation: none; }
      .modal-card { animation: none; }
    }
  `;

  @property({ attribute: false }) config: UploaderConfig | null = null;

  @state() private _isOpen = false;
  @state() private _activeConnector: ProviderId | null = null;
  @state() private _showUrlDialog = false;
  @state() private _showCameraDialog = false;
  @state() private _showScreenCastDialog = false;

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
  private static readonly _RESERVED_IDS = new Set(['device', 'camera', 'screen-cast', 'url']);

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
      this._showScreenCastDialog = true;
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

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._isOpen && this.config?.mode === 'modal') {
      this._onModalDismiss();
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
    return html`
      <div class="header">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
          </svg>
        </div>
        <div class="header-title">Upload Files</div>
        ${mode === 'modal'
          ? html`<button class="close-btn" @click=${this._onModalDismiss}>&#x2715;</button>`
          : html`<button class="close-btn" @click=${this._onInlineDismiss}>&#x2715;</button>`}
      </div>
    `;
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
      >
        <div class="body">
          ${phase === 'complete'
              ? html`
                  <sfx-success-card
                    .fileCount=${files.length}
                  ></sfx-success-card>
                `
              : html`
                  <sfx-drop-zone
                    .compact=${hasFiles}
                    .accept=${accept}
                    .sources=${this._mergedSources}
                  ></sfx-drop-zone>

                  ${hasFiles
                    ? html`
                        <sfx-file-list .files=${files}></sfx-file-list>
                      `
                    : nothing}
                `}
        </div>

        ${hasFiles
          ? html`
              <sfx-actions-bar
                .uploadState=${phase === 'complete' ? 'done' : phase === 'uploading' ? 'uploading' : 'idle'}
                .fileCount=${files.length}
                .failedCount=${files.filter((f) => f.status === 'failed' || f.status === 'error').length}
                .showFillMetadata=${!!this.config?.showFillMetadata}
              ></sfx-actions-bar>
            `
          : nothing}

        ${this._showUrlDialog ? html`<sfx-url-dialog></sfx-url-dialog>` : nothing}
        ${this._showCameraDialog ? html`<sfx-camera-dialog></sfx-camera-dialog>` : nothing}
        ${this._showScreenCastDialog ? html`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>` : nothing}

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
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-uploader': SfxUploader;
  }
}
