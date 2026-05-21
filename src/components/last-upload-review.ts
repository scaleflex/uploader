import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { UploadFile, TFunction } from '../store/store.types';
import './file-list';

type FilterMode = 'all' | 'success' | 'failed';

/**
 * Read-only review screen for the most recently uploaded batch (success +
 * failed). Renders <sfx-file-list mode="review">, plus a top bar with
 * filter chips, Back, and Clear. Tile click does not open anything —
 * each tile exposes its own hover actions (Locate / Copy CDN).
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

    .back-btn:focus-visible,
    .chip:focus-visible,
    .clear-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 16px 0 0;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .topbar { padding: 12px 16px; }
    }
  `;

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ attribute: false }) files: UploadFile[] = [];
  /** Forwarded to file-list → file-item for the Locate button URL override. */
  @property({ attribute: false }) getLocateUrl?: (file: UploadFile) => string | null | undefined;
  @property({ type: Boolean }) showLocateButton = false;
  @property({ type: Boolean }) showCopyCdnButton = false;

  @state() private _filter: FilterMode = 'all';

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

  private _setFilter = (filter: FilterMode) => () => {
    this._filter = filter;
  };

  private _onBack = () => {
    this.dispatchEvent(new CustomEvent('back', { bubbles: true, composed: true }));
  };

  private _onClear = () => {
    this.dispatchEvent(new CustomEvent('clear-history', { bubbles: true, composed: true }));
  };

  render() {
    const filtered = this._filtered;
    const total = this.files.length;

    return html`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t('back', 'Back')}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          ${this.t('back', 'Back')}
        </button>
        <span class="title">${this.t('lastUpload', 'Last upload')} <span class="count">— ${this.t('fileCount', { count: total, defaultValue_one: '{{count}} file', defaultValue_other: '{{count}} files' })}</span></span>
        <div class="filters">
          <button class="chip ${this._filter === 'all' ? 'active' : ''}" @click=${this._setFilter('all')}>
            ${this.t('all', 'All')} (${total})
          </button>
          <button class="chip ${this._filter === 'success' ? 'active' : ''}" @click=${this._setFilter('success')}>
            ✓ ${this.t('uploaded', 'Uploaded')} (${this._successCount})
          </button>
          ${this._failedCount > 0
            ? html`<button class="chip ${this._filter === 'failed' ? 'active' : ''}" @click=${this._setFilter('failed')}>
                ✗ ${this.t('failed', 'Failed')} (${this._failedCount})
              </button>`
            : nothing}
          <button class="clear-btn" @click=${this._onClear} title=${this.t('clearLastUpload', 'Clear last upload from this browser')}>${this.t('clear', 'Clear')}</button>
        </div>
      </div>

      <div class="body">
        ${filtered.length === 0
          ? html`<div class="empty">${this.t('noFilesMatchFilter', 'No files match this filter.')}</div>`
          : html`<sfx-file-list .t=${this.t} .files=${filtered} mode="review" .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `;
  }
}

customElements.define('sfx-last-upload-review', SfxLastUploadReview);
