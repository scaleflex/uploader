import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { UploadFile } from '../store/store.types';
import type { MetadataSchema, MetadataConfig } from '../metadata/schema/schema.types';
import './file-list';
import '../metadata/metadata-panel';

type FilterMode = 'all' | 'success' | 'failed';

/**
 * Read-only review screen for the most recently uploaded batch (success +
 * failed). Renders <sfx-file-list mode="review">, plus a top bar with
 * filter chips, Back, and Clear. When a file is clicked (file-preview
 * event), opens an overlay metadata-panel for editing. Edits bubble up
 * to the host as `metadata-save` events.
 */
export class SfxLastUploadReview extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
      position: relative;
    }

    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 24px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
    }

    .back-btn:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #0f172a);
      margin-right: 8px;
    }

    .count {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 400;
    }

    .filters {
      display: flex;
      gap: 6px;
      margin-left: auto;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .chip:hover {
      background: var(--sfx-up-surface, #f8fafc);
    }

    .chip.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .clear-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-error, #dc2626);
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--sfx-up-error, #dc2626) 30%, transparent);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .clear-btn:hover {
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 8%, transparent);
    }

    .body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 0;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
    }

    /* Metadata panel overlay */
    .meta-overlay {
      position: absolute;
      inset: 0;
      background: rgba(15, 23, 42, 0.4);
      backdrop-filter: blur(2px);
      z-index: 50;
      display: flex;
      justify-content: flex-end;
      animation: fadeIn 0.18s ease;
    }

    .meta-overlay sfx-metadata-panel {
      width: min(520px, 100%);
      height: 100%;
      background: var(--sfx-up-bg, #fff);
      box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
      animation: slideIn 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from { transform: translateX(20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @media (max-width: 480px) {
      .topbar { padding: 12px 16px; }
      .meta-overlay sfx-metadata-panel { width: 100%; }
    }
  `;

  @property({ attribute: false }) files: UploadFile[] = [];
  @property({ attribute: false }) schema: MetadataSchema | null = null;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown = null;

  @state() private _filter: FilterMode = 'all';
  @state() private _selectedFileId: string | null = null;

  private get _filtered(): UploadFile[] {
    if (this._filter === 'success') {
      return this.files.filter((f) => f.status === 'complete');
    }
    if (this._filter === 'failed') {
      return this.files.filter((f) => f.status === 'failed' || f.status === 'error');
    }
    return this.files;
  }

  private get _successCount(): number {
    return this.files.filter((f) => f.status === 'complete').length;
  }

  private get _failedCount(): number {
    return this.files.filter((f) => f.status === 'failed' || f.status === 'error').length;
  }

  private get _selectedFile(): UploadFile | null {
    if (!this._selectedFileId) return null;
    return this.files.find((f) => f.id === this._selectedFileId) ?? null;
  }

  private _setFilter = (filter: FilterMode) => () => {
    this._filter = filter;
  };

  private _onBack = () => {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
  };

  private _onClear = () => {
    this.dispatchEvent(new CustomEvent('clear-history', { bubbles: true, composed: true }));
  };

  private _onFilePreview = (e: CustomEvent<{ fileId: string }>) => {
    e.stopPropagation();
    this._selectedFileId = e.detail.fileId;
  };

  private _onMetaSave = (e: CustomEvent<{ fileId: string; meta: Record<string, unknown> }>) => {
    // Bubble up to host (sfx-uploader) so it can persist via lastUploadStore
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('metadata-save', {
        detail: e.detail,
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _onMetaClose = (e: Event) => {
    e.stopPropagation();
    this._selectedFileId = null;
  };

  private _onOverlayClick = (e: MouseEvent) => {
    // Close when clicking the backdrop (not the panel itself)
    if (e.target === e.currentTarget) {
      this._selectedFileId = null;
    }
  };

  render() {
    const filtered = this._filtered;
    const total = this.files.length;
    const selected = this._selectedFile;

    return html`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title="Back">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <span class="title">Last upload <span class="count">— ${total} ${total === 1 ? 'file' : 'files'}</span></span>
        <div class="filters">
          <button class="chip ${this._filter === 'all' ? 'active' : ''}" @click=${this._setFilter('all')}>
            All (${total})
          </button>
          <button class="chip ${this._filter === 'success' ? 'active' : ''}" @click=${this._setFilter('success')}>
            ✓ Uploaded (${this._successCount})
          </button>
          ${this._failedCount > 0
            ? html`<button class="chip ${this._filter === 'failed' ? 'active' : ''}" @click=${this._setFilter('failed')}>
                ✗ Failed (${this._failedCount})
              </button>`
            : nothing}
          <button class="clear-btn" @click=${this._onClear} title="Clear last upload from this browser">Clear</button>
        </div>
      </div>

      <div class="body">
        ${filtered.length === 0
          ? html`<div class="empty">No files match this filter.</div>`
          : html`<sfx-file-list
              .files=${filtered}
              mode="review"
              @file-preview=${this._onFilePreview}
            ></sfx-file-list>`}
      </div>

      ${selected
        ? html`<div class="meta-overlay" @click=${this._onOverlayClick}>
            <sfx-metadata-panel
              .file=${selected}
              .files=${this.files}
              .schema=${this.schema}
              .config=${this.config}
              .autocomplete=${this.autocomplete}
              @metadata-save=${this._onMetaSave}
              @metadata-close=${this._onMetaClose}
            ></sfx-metadata-panel>
          </div>`
        : nothing}
    `;
  }
}

customElements.define('sfx-last-upload-review', SfxLastUploadReview);
