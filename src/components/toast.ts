import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { TFunction } from '../store/store.types';

export type ToastType = 'error' | 'warning' | 'info';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  leaving: boolean;
}

/**
 * Lightweight toast notification container.
 * Renders stacked toasts in the bottom-right corner.
 * Auto-dismisses after a configurable duration.
 */
export class SfxToast extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: absolute;
      bottom: 12px;
      right: 12px;
      z-index: 1050;
      pointer-events: none;
      font-family: var(--sfx-up-font, inherit);
    }

    .toast-stack {
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      align-items: flex-end;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      max-width: 360px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.4;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: toast-in 0.25s ease forwards;
      word-break: break-word;
    }
    .toast.leaving {
      animation: toast-out 0.2s ease forwards;
    }

    .toast--error {
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }
    .toast--warning {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }
    .toast--info {
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }

    .toast-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-top: 1px;
    }

    .toast-msg {
      flex: 1;
      min-width: 0;
    }

    .toast-close {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.5;
      transition: opacity 0.12s;
    }
    .toast-close:hover {
      opacity: 1;
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateY(8px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(8px) scale(0.96); }
    }
  `;

  @property({ attribute: false }) t: TFunction = (k, d) => (typeof d === 'string' ? d : k);
  @property({ type: Number }) duration = 6000;

  @state() private _toasts: ToastItem[] = [];

  private _nextId = 0;

  show(message: string, type: ToastType = 'error') {
    const id = ++this._nextId;
    this._toasts = [...this._toasts, { id, message, type, leaving: false }];

    setTimeout(() => this._dismiss(id), this.duration);
  }

  private _dismiss(id: number) {
    const idx = this._toasts.findIndex((t) => t.id === id);
    if (idx === -1) return;

    // Trigger leave animation
    const next = [...this._toasts];
    next[idx] = { ...next[idx], leaving: true };
    this._toasts = next;

    // Remove after animation
    setTimeout(() => {
      this._toasts = this._toasts.filter((t) => t.id !== id);
    }, 200);
  }

  private _iconForType(type: ToastType) {
    if (type === 'error') {
      return html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`;
    }
    if (type === 'warning') {
      return html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`;
    }
    return html`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`;
  }

  render() {
    if (this._toasts.length === 0) return html``;

    return html`
      <div class="toast-stack">
        ${this._toasts.map(
          (t) => html`
            <div class="toast toast--${t.type} ${t.leaving ? 'leaving' : ''}" role="alert">
              ${this._iconForType(t.type)}
              <span class="toast-msg">${t.message}</span>
              <button class="toast-close" @click=${() => this._dismiss(t.id)} aria-label=${this.t('dismiss', 'Dismiss')}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `,
        )}
      </div>
    `;
  }
}

customElements.define('sfx-toast', SfxToast);
