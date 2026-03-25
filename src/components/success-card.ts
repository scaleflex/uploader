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
      padding-bottom: 24px;
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

  render() {
    const visibleThumbs = this.thumbnails.slice(0, MAX_THUMBS);
    const overflowCount = this.thumbnails.length - MAX_THUMBS;

    return html`
      <div class="card" role="status" aria-live="polite">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div class="title">Uploaded successfully!</div>
        <div class="subtitle">All files are ready for use</div>

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

        <div class="summary">${this.fileCount} ${this.fileCount === 1 ? 'file' : 'files'} · ${formatFileSize(this.totalSize)} uploaded</div>

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
}
