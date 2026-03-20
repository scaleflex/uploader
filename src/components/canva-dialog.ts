import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getProviderSources } from '../connectors/provider-registry';

/**
 * Dialog for Canva design integration.
 *
 * Shows design type options, loads the Canva SDK, and opens the editor.
 * On publish, fires `canva-file-ready` with the exported File.
 * On close/cancel, fires `canva-cancel`.
 */

const DESIGN_TYPES = [
  { type: 'SocialMedia', label: 'Social Media', desc: '1080 × 1080 px', icon: '🖼' },
  { type: 'InstagramPost', label: 'Instagram Post', desc: '1080 × 1080 px', icon: '📸' },
  { type: 'Presentation', label: 'Presentation', desc: '1920 × 1080 px', icon: '📊' },
  { type: 'Poster', label: 'Poster', desc: '42 × 59.4 cm', icon: '📋' },
  { type: 'FacebookPost', label: 'Facebook Post', desc: '940 × 788 px', icon: '👍' },
  { type: 'Logo', label: 'Logo', desc: '500 × 500 px', icon: '✏️' },
];

export class SfxCanvaDialog extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .backdrop {
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

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 20px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 440px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: translateY(18px) scale(0.97);
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 18px 20px 0;
    }

    .head-logo {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }

    .head-logo svg { width: 24px; height: 24px; }

    .head h3 {
      margin: 0;
      font-size: 15px;
      font-weight: 700;
    }

    .head-close {
      margin-left: auto;
      width: 30px;
      height: 30px;
      border: none;
      background: var(--sfx-up-border-light, #f1f5f9);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
      transition: all 0.15s;
    }

    .head-close:hover {
      background: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text, #1e293b);
    }

    .subtitle {
      padding: 8px 20px 4px;
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Design type grid --- */
    .types-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 12px 20px 20px;
    }

    .type-card {
      border: 1.5px solid var(--sfx-up-border-light, #f1f5f9);
      border-radius: 12px;
      padding: 14px;
      cursor: pointer;
      transition: all 0.15s;
      background: none;
      text-align: left;
      font-family: inherit;
      color: inherit;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .type-card:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.2));
    }

    .type-emoji {
      font-size: 20px;
      line-height: 1;
      flex-shrink: 0;
    }

    .type-info {
      min-width: 0;
    }

    .type-label {
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .type-desc {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Loading state --- */
    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 48px 24px;
      text-align: center;
    }

    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    .loading-text {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
    }

    /* --- Error state --- */
    .error-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 32px 24px;
      text-align: center;
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
      max-width: 280px;
      line-height: 1.5;
    }

    .error-hint {
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      max-width: 300px;
      line-height: 1.4;
    }

    .btn-row {
      display: flex;
      gap: 8px;
      margin-top: 4px;
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
    }

    .cancel-btn {
      height: 34px;
      padding: 0 16px;
      border: none;
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
    }

    .cancel-btn:hover {
      background: var(--sfx-up-border-light, #f8faff);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(18px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (prefers-reduced-motion: reduce) {
      .backdrop { animation: none; }
      .card { animation: none; transform: none; }
      .spinner { animation: none; }
    }
  `;

  @property({ type: String }) apiKey = '';

  @state() private _phase: 'pick' | 'loading' | 'error' = 'pick';
  @state() private _errorMessage = '';

  private get _brandHtml(): string {
    const def = getProviderSources(['canva'] as any)[0];
    return def?.brandHtml ?? '';
  }

  render() {
    return html`
      <div class="backdrop" @click=${this._onBackdropClick}>
        <div class="card">
          ${this._renderHead()}
          ${this._phase === 'pick' ? this._renderPicker()
            : this._phase === 'loading' ? this._renderLoading()
            : this._renderError()}
        </div>
      </div>
    `;
  }

  private _renderHead() {
    return html`
      <div class="head">
        ${this._brandHtml
          ? html`<div class="head-logo">${unsafeHTML(this._brandHtml)}</div>`
          : nothing}
        <h3>Create with Canva</h3>
        <button class="head-close" @click=${this._onCancel}>&#x2715;</button>
      </div>
    `;
  }

  private _renderPicker() {
    return html`
      <div class="subtitle">Choose a design type to start</div>
      <div class="types-grid">
        ${DESIGN_TYPES.map(dt => html`
          <button class="type-card" @click=${() => this._onTypeSelect(dt.type)}>
            <span class="type-emoji">${dt.icon}</span>
            <div class="type-info">
              <div class="type-label">${dt.label}</div>
              <div class="type-desc">${dt.desc}</div>
            </div>
          </button>
        `)}
      </div>
    `;
  }

  private _renderLoading() {
    return html`
      <div class="loading-state">
        <div class="spinner"></div>
        <div class="loading-text">Opening Canva editor...</div>
      </div>
    `;
  }

  private _renderError() {
    return html`
      <div class="error-state">
        <div class="error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div class="error-text">${this._errorMessage}</div>
        <div class="error-hint">
          Make sure you have a valid Canva API key configured and that pop-ups are allowed.
        </div>
        <div class="btn-row">
          <button class="cancel-btn" @click=${this._onCancel}>Cancel</button>
          <button class="retry-btn" @click=${() => { this._phase = 'pick'; }}>Try again</button>
        </div>
      </div>
    `;
  }

  private async _onTypeSelect(designType: string) {
    if (!this.apiKey) {
      this._errorMessage = 'Canva API key is not configured';
      this._phase = 'error';
      return;
    }

    this._phase = 'loading';

    try {
      const { openCanvaDesigner, CanvaClosedError } = await import('../connectors/canva-sdk');
      const result = await openCanvaDesigner(this.apiKey, designType);

      this.dispatchEvent(
        new CustomEvent('canva-file-ready', {
          detail: { file: result.file },
          bubbles: true,
          composed: true,
        }),
      );
    } catch (err) {
      // Dynamic import of CanvaClosedError for instanceof check
      const { CanvaClosedError } = await import('../connectors/canva-sdk');
      if (err instanceof CanvaClosedError) {
        // User closed without publishing — go back to picker
        this._phase = 'pick';
        return;
      }
      this._errorMessage = err instanceof Error ? err.message : 'Failed to open Canva editor';
      this._phase = 'error';
    }
  }

  private _onCancel = () => {
    this.dispatchEvent(
      new CustomEvent('canva-cancel', { bubbles: true, composed: true }),
    );
  };

  private _onBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      this._onCancel();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'sfx-canva-dialog': SfxCanvaDialog;
  }
}
