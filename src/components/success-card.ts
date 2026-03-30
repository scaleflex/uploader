import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { formatFileSize } from '../utils/file-utils';
import { buttonStyles, focusStyles } from './shared-styles';

const MAX_THUMBS = 7;

export class SfxSuccessCard extends LitElement {
  static styles = [buttonStyles, focusStyles, css`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
      position: relative;
      overflow-y: auto;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      animation: fadeUp 0.4s ease both;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #f0fdf4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: #22c55e;
      box-shadow: none;
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .icon.warning {
      background: #fffbeb;
      color: #f59e0b;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #0f172a);
      letter-spacing: -0.4px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.6;
      max-width: 320px;
      margin-bottom: 20px;
    }

    /* --- Thumbnail strip --- */
    .thumbs {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 14px;
    }

    .thumb {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .thumb-more {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      border: 1px solid var(--sfx-up-border, #e8eaed);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Summary chip --- */
    .summary {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-surface, #f8fafc);
      border-radius: 8px;
      padding: 6px 14px;
      margin-bottom: 22px;
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    .actions .btn-primary {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      box-shadow: 0 2px 10px rgba(34, 197, 94, 0.28);
    }

    .actions .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #16a34a, #15803d);
      box-shadow: 0 4px 16px rgba(34, 197, 94, 0.38);
    }

    /* --- Failed files list --- */
    .failed-list {
      width: 100%;
      max-width: 400px;
      max-height: 200px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e8eaed);
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.15) transparent;
    }

    .failed-list::-webkit-scrollbar {
      width: 6px;
    }

    .failed-list::-webkit-scrollbar-track {
      background: transparent;
      margin: 6px 0;
    }

    .failed-list::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 3px;
    }

    .failed-list::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.25);
    }

    .failed-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid var(--sfx-up-border, #f1f5f9);
      margin-right: 8px;
    }

    .failed-item:last-child {
      border-bottom: none;
    }

    .failed-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #ef4444;
      margin-top: 1px;
    }

    .failed-info {
      flex: 1;
      min-width: 0;
    }

    .failed-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .failed-reason {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.4;
    }

    .failed-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin-top: -2px;
    }

    .failed-retry svg { width: 14px; height: 14px; }

    .failed-retry:hover { background: #f1f5f9; color: #1d4ed8; }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0;
    }

    .close-btn svg { width: 16px; height: 16px; }

    .close-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

    .btn-retry-all {
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: #fff;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .btn-retry-all:hover {
      background: #eff6ff;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 18px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];

  @property({ type: Number }) fileCount = 0;
  @property({ type: Number }) totalSize = 0;
  @property({ type: Array }) thumbnails: string[] = [];
  @property({ type: String }) primaryLabel = 'Done';
  @property({ type: Array }) failedFiles: { id: string; name: string; error: string }[] = [];

  private _uploadMore() {
    this.dispatchEvent(
      new CustomEvent('upload-more', { bubbles: true, composed: true }),
    );
  }

  private _primaryAction() {
    this.dispatchEvent(
      new CustomEvent('primary-action', { bubbles: true, composed: true }),
    );
  }

  private _retryFile(fileId: string) {
    this.dispatchEvent(
      new CustomEvent('file-retry', { bubbles: true, composed: true, detail: { fileId } }),
    );
  }

  private _retryAll() {
    this.dispatchEvent(
      new CustomEvent('retry-all', { bubbles: true, composed: true }),
    );
  }

  private _close() {
    this.dispatchEvent(
      new CustomEvent('close-uploader', { bubbles: true, composed: true }),
    );
  }

  render() {
    const visibleThumbs = this.thumbnails.slice(0, MAX_THUMBS);
    const overflowCount = this.thumbnails.length - MAX_THUMBS;
    const hasSuccesses = this.fileCount > 0;
    const hasFailed = this.failedFiles.length > 0;
    const allFailed = hasFailed && !hasSuccesses;

    return html`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${allFailed ? 'error' : hasFailed ? 'warning' : ''}">
          ${allFailed
            ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`
            : hasFailed
              ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`
              : html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${allFailed ? 'Upload failed' : hasFailed ? 'Partially uploaded' : 'Uploaded successfully!'}</div>
        <div class="subtitle">${allFailed ? `${this.failedFiles.length === 1 ? 'File' : 'Files'} could not be uploaded` : hasFailed ? `${this.fileCount} ${this.fileCount === 1 ? 'file' : 'files'} uploaded, ${this.failedFiles.length} failed` : 'All files are ready for use'}</div>

        ${visibleThumbs.length > 0
          ? html`
              <div class="thumbs">
                ${visibleThumbs.map(
                  (url) => html`<img class="thumb" src=${url} alt="" />`
                )}
                ${overflowCount > 0
                  ? html`<div class="thumb-more">+${overflowCount}</div>`
                  : nothing}
              </div>
            `
          : nothing}

        ${hasSuccesses ? html`<div class="summary">${this.fileCount} ${this.fileCount === 1 ? 'file' : 'files'} · ${formatFileSize(this.totalSize)} uploaded</div>` : nothing}

        ${hasFailed
          ? html`
            <div class="failed-list">
              ${this.failedFiles.map((f) => html`
                <div class="failed-item">
                  <div class="failed-info">
                    <div class="failed-name">${f.name}</div>
                    <div class="failed-reason">${f.error}</div>
                  </div>
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <button class="failed-retry" title="Retry" @click=${() => this._retryFile(f.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `
          : nothing}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${hasFailed ? html`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>` : nothing}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
}
