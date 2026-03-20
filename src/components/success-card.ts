import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';

const MAX_THUMBS = 7;

export class SfxSuccessCard extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
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
      background: var(--sfx-up-primary-bg, #eff6ff);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 18px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.12));
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .title {
      font-size: 21px;
      font-weight: 800;
      color: var(--sfx-up-text, #0f172a);
      letter-spacing: -0.4px;
      margin-bottom: 7px;
    }

    .subtitle {
      font-size: 13.5px;
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
      background: #f5f7fa;
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
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      background: #f5f7fa;
      border-radius: 8px;
      padding: 6px 14px;
      margin-bottom: 22px;
    }

    .actions {
      display: flex;
      gap: 9px;
    }

    button {
      height: 36px;
      padding: 0 17px;
      border-radius: 9px;
      border: none;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.18s ease;
      white-space: nowrap;
    }

    .btn-ghost {
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
    }

    .btn-ghost:hover {
      background: var(--sfx-up-border-light, #f8faff);
      color: var(--sfx-up-text-secondary, #64748b);
      border-color: var(--sfx-up-border, #d1dff0);
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
      transform: translateY(-1px);
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

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `;

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

  private _formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  }

  render() {
    const visibleThumbs = this.thumbnails.slice(0, MAX_THUMBS);
    const overflowCount = this.thumbnails.length - MAX_THUMBS;

    return html`
      <div class="card">
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

        <div class="summary">${this.fileCount} ${this.fileCount === 1 ? 'file' : 'files'} · ${this._formatSize(this.totalSize)} uploaded</div>

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
}
