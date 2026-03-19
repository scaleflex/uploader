import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';

/**
 * Modal dialog for importing a file via URL.
 *
 * Fires:
 *  - `url-submit`  → { url: string, name: string }
 *  - `url-cancel`  → void
 */
export class SfxUrlDialog extends LitElement {
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
      max-width: 480px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: translateY(18px) scale(0.97);
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .title {
      font-size: 15px;
      font-weight: 700;
      color: var(--sfx-up-text, #1a1a1a);
      flex: 1;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-border-light, #f0f0f0);
      color: var(--sfx-up-text-muted, #888);
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e4e4e4);
      color: var(--sfx-up-text, #333);
    }

    .body {
      padding: 18px 20px 20px;
    }

    .field {
      margin-bottom: 14px;
    }

    label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #aaa);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    label .optional {
      color: var(--sfx-up-border, #ccc);
      font-weight: 400;
      text-transform: none;
      letter-spacing: 0;
    }

    input {
      width: 100%;
      height: 42px;
      border: 1.5px solid var(--sfx-up-border, #ebebeb);
      border-radius: 10px;
      padding: 0 14px;
      font-size: 14px;
      font-family: inherit;
      color: var(--sfx-up-text, #1a1a1a);
      background: var(--sfx-up-border-light, #fafafa);
      transition: border-color 0.15s, background 0.15s;
      outline: none;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    input::placeholder {
      color: var(--sfx-up-text-muted, #ccc);
    }

    .error {
      font-size: 12px;
      color: var(--sfx-up-error, #dc2626);
      margin-top: -6px;
      margin-bottom: 8px;
    }

    .actions {
      display: flex;
      gap: 9px;
      justify-content: flex-end;
      margin-top: 18px;
    }

    button.btn {
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
      position: relative;
      overflow: hidden;
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
      transform: translateY(-1px);
    }

    .btn-primary:disabled {
      opacity: 0.55;
      cursor: not-allowed;
    }

    .btn-spin {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(18px) scale(0.97); }
      to { transform: translateY(0) scale(1); }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  @state() private _url = '';
  @state() private _name = '';
  @state() private _error = '';
  @state() private _loading = false;

  private _onBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) this._cancel();
  };

  private _onUrlInput = (e: Event) => {
    this._url = (e.target as HTMLInputElement).value;
    this._error = '';
    this._autoName();
  };

  private _onNameInput = (e: Event) => {
    this._name = (e.target as HTMLInputElement).value;
  };

  private _autoName() {
    if (this._name) return; // user already typed a name
    try {
      const parts = new URL(this._url).pathname.split('/');
      const last = parts[parts.length - 1];
      if (last) {
        const nameInput = this.shadowRoot?.querySelector<HTMLInputElement>('#nameInput');
        if (nameInput) nameInput.placeholder = last;
      }
    } catch {
      // not a valid URL yet
    }
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this._cancel();
    if (e.key === 'Enter' && !this._loading) this._submit();
  };

  private _cancel() {
    this.dispatchEvent(new CustomEvent('url-cancel', { bubbles: true, composed: true }));
  }

  private _submit() {
    const url = this._url.trim();
    if (!url) {
      this._error = 'Please enter a URL';
      return;
    }
    try {
      new URL(url);
    } catch {
      this._error = 'Please enter a valid URL';
      return;
    }
    this._error = '';

    // Derive filename
    let name = this._name.trim();
    if (!name) {
      try {
        const parts = new URL(url).pathname.split('/');
        name = parts[parts.length - 1] || 'imported-file';
      } catch {
        name = 'imported-file';
      }
    }

    this.dispatchEvent(
      new CustomEvent('url-submit', {
        detail: { url, name },
        bubbles: true,
        composed: true,
      }),
    );
  }

  connectedCallback() {
    super.connectedCallback();
    // Focus the URL input after first render
    this.updateComplete.then(() => {
      this.shadowRoot?.querySelector<HTMLInputElement>('#urlInput')?.focus();
    });
  }

  render() {
    return html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">Import from URL</div>
            <button class="close-btn" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            <div class="field">
              <label>File URL</label>
              <input
                id="urlInput"
                type="url"
                placeholder="https://example.com/file.pdf"
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label>File name <span class="optional">(optional)</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder="document.pdf"
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error ? html`<div class="error">${this._error}</div>` : ''}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" ?disabled=${this._loading} @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
