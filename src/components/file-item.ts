import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import type { UploadFile } from '../store/store.types';
import { formatFileSize, getFileCategory, getFileExtension } from '../utils/file-utils';

export class SfxFileItem extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .tile {
      border-radius: 6px;
      overflow: hidden;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e8eaed);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      animation: tileIn 0.6s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background: var(--sfx-up-border-light, #f3f4f6);
    }

    .preview-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.4s ease;
    }

    .tile:hover .preview-bg {
      transform: scale(1.03);
    }

    .preview-bg.pdf { background: linear-gradient(135deg, var(--destructive-10, #fef2f2), var(--destructive-10, #fee2e2)); }
    .preview-bg.doc { background: linear-gradient(135deg, var(--sfx-up-primary-bg, #eff6ff), var(--sfx-up-primary-bg, #dbeafe)); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.zip { background: linear-gradient(135deg, var(--warning-10, #fffbeb), var(--warning-10, #fef3c7)); }
    .preview-bg.gen { background: linear-gradient(135deg, var(--sfx-up-border-light, #f8fafc), var(--sfx-up-border-light, #f1f5f9)); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-inner {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(0, 0, 0, 0.08));
    }

    .type-icon-inner svg {
      width: 22px;
      height: 22px;
    }

    .type-icon-inner.pdf { color: var(--sfx-up-error, #dc2626); }
    .type-icon-inner.doc { color: var(--sfx-up-primary, #1d4ed8); }
    .type-icon-inner.vid { color: #7c3aed; }
    .type-icon-inner.zip { color: var(--warning-foreground, #b45309); }
    .type-icon-inner.gen { color: var(--sfx-up-text-muted, #64748b); }

    .ext-label {
      font-size: 9px;
      font-weight: 800;
      text-transform: uppercase;
      margin-top: 2px;
    }

    /* --- Info bar --- */
    .info {
      padding: 9px 11px 10px;
      background: var(--sfx-up-bg, #fff);
      min-width: 0;
    }

    .name {
      font-size: 12.5px;
      font-weight: 600;
      color: var(--sfx-up-text, #111827);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }

    .meta {
      font-size: 11px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #9ca3af);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.done .info {
      opacity: 0.5;
    }

    /* --- Action buttons --- */
    .actions {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      gap: 3px;
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 10;
    }

    .tile:hover .actions {
      opacity: 1;
    }

    .act-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 4px var(--sfx-up-shadow, rgba(0, 0, 0, 0.15));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, transform 0.12s;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 0;
    }

    .act-btn:hover {
      background: var(--sfx-up-border-light, #f3f4f6);
      transform: scale(1.08);
    }

    .act-btn.del:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--sfx-up-error, #dc2626);
    }

    .act-btn.retry:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .act-btn svg {
      width: 11px;
      height: 11px;
    }

    /* --- Preview button --- */
    .preview-btn {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      padding: 6px 16px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      opacity: 0;
      transition: all 0.15s ease;
      color: var(--sfx-up-primary, #2563eb);
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      z-index: 5;
    }

    .tile:hover .preview-btn {
      opacity: 1;
    }

    .preview-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-bg, #fff);
    }

    .preview-btn svg {
      width: 13px;
      height: 13px;
    }

    /* --- Progress bar --- */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.06);
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transform-origin: left;
      transition: transform 0.32s ease;
    }

    .tile.done .progress-fill {
      background: var(--sfx-up-success, #16a34a);
    }

    /* --- Uploading spinner overlay --- */
    .spinner-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    .tile.uploading .spinner-overlay {
      opacity: 1;
    }

    .spin-ring {
      width: 28px;
      height: 28px;
      border: 2.5px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Done overlay --- */
    .done-overlay {
      position: absolute;
      inset: 0;
      background: rgba(5, 150, 105, 0.72);
      opacity: 0;
      transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tile.done .done-overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .done-check {
      animation: popBounce 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
    }

    .done-check svg {
      width: 28px;
      height: 28px;
      filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
    }

    /* --- Error state --- */
    .error-badge {
      position: absolute;
      bottom: 28px;
      left: 6px;
      right: 6px;
      font-size: 10px;
      font-weight: 600;
      color: #fff;
      background: var(--sfx-up-error, #dc2626);
      border-radius: 4px;
      padding: 3px 6px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @keyframes tileIn {
      0% {
        opacity: 0;
        transform: scale(0.8) translateY(22px);
        filter: blur(10px);
      }
      55% {
        opacity: 1;
        filter: blur(0);
      }
      80% {
        transform: scale(1.03) translateY(-3px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
        filter: blur(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { animation: none; }
      .done-check { animation: none; }
      .spin-ring { animation: none; }
    }
  `;

  @property({ attribute: false }) file!: UploadFile;

  private _remove() {
    this.dispatchEvent(
      new CustomEvent('file-remove', {
        detail: { fileId: this.file.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _retry() {
    this.dispatchEvent(
      new CustomEvent('file-retry', {
        detail: { fileId: this.file.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _preview(e: Event) {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('file-preview', {
        detail: { fileId: this.file.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const f = this.file;
    if (!f) return nothing;

    const category = getFileCategory(f);
    const isImage = category === 'image';
    const isDone = f.status === 'complete';
    const isUploading = f.status === 'uploading';
    const isError = f.status === 'error' || f.status === 'failed';
    const ext = getFileExtension(f.name);

    const tileClass = [
      'tile',
      isDone ? 'done' : '',
      isUploading ? 'uploading' : '',
    ].filter(Boolean).join(' ');

    return html`
      <div class=${tileClass}>
        <!-- Preview area -->
        <div class="preview">
          ${isImage && f.previewUrl
            ? html`<div class="preview-bg" style="background-image:url(${f.previewUrl})"></div>`
            : html`
                <div class="preview-bg ${category}"></div>
                <div class="type-icon">
                  <div class="type-icon-inner ${category}">
                    ${this._renderTypeIcon(category)}
                    ${ext ? html`<div class="ext-label">${ext}</div>` : nothing}
                  </div>
                </div>
              `}

          <!-- Preview button -->
          ${!isDone && !isUploading && !isError && f.status !== 'rejected'
            ? html`
                <button class="preview-btn" @click=${this._preview} aria-label="Preview file">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Preview
                </button>
              `
            : nothing}

          <!-- Spinner overlay -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
          </div>

          <!-- Done overlay -->
          <div class="done-overlay">
            <div class="done-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <!-- Progress bar -->
          ${f.status === 'uploading' || isDone
            ? html`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(f.progress, 100) / 100})"></div>
                </div>
              `
            : nothing}

          <!-- Error badge -->
          ${isError && f.error
            ? html`<div class="error-badge" title=${f.error}>${f.error}</div>`
            : nothing}
        </div>

        <!-- Action buttons -->
        <div class="actions">
          ${isError
            ? html`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `
            : nothing}
          <button class="act-btn del" @click=${this._remove} title="Remove" aria-label="Remove file">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>

        <!-- Info bar -->
        <div class="info">
          <div class="name" title=${f.name}>${f.name}</div>
          <div class="meta">${f.size ? formatFileSize(f.size) : ''}${f.type ? `${f.size ? ' \u00B7 ' : ''}${f.type}` : ''}</div>
        </div>
      </div>
    `;
  }

  private _renderTypeIcon(category: string) {
    switch (category) {
      case 'pdf':
        return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
      case 'doc':
        return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
      case 'vid':
        return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;
      case 'zip':
        return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;
      default:
        return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`;
    }
  }
}
