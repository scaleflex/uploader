import { LitElement, html, css, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { buttonStyles, focusStyles } from './shared-styles';
import { createFocusTrap } from '../utils/focus-trap';

/**
 * Modal dialog for capturing photos/video via webcam.
 *
 * Fires:
 *  - `camera-capture`  → { file: File }
 *  - `camera-cancel`   → void
 */
export class SfxCameraDialog extends LitElement {
  static styles = [buttonStyles, focusStyles, css`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 520px;
      height: 520px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; flex: 1; min-height: 0; justify-content: center; }

    video, canvas {
      width: 100%; flex: 1; min-height: 0; border-radius: 12px;
      background: #000; object-fit: cover;
    }

    canvas { display: none; }

    .preview-img {
      width: 100%; max-height: 320px; border-radius: 12px;
      object-fit: contain; background: #000;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-capture {
      width: 52px; height: 52px; border-radius: 50%; padding: 0;
      background: var(--sfx-up-error, #dc2626); border: 4px solid var(--sfx-up-bg, #fff);
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626), 0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
      cursor: pointer; transition: all 0.15s;
    }
    .btn-capture:hover { background: var(--destructive-foreground, #b91c1c); transform: scale(1.05); }

    .close-btn:focus-visible,
    .btn-capture:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
  `];

  @state() private _stream: MediaStream | null = null;
  @state() private _error = '';
  @state() private _captured: Blob | null = null;
  @state() private _previewUrl = '';

  private _onBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) this._cancel();
  };

  private _focusTrap = createFocusTrap(() => this.shadowRoot, '.card');

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this._cancel();
    this._focusTrap(e);
  };

  connectedCallback() {
    super.connectedCallback();
    this._startCamera();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopStream();
    if (this._previewUrl) URL.revokeObjectURL(this._previewUrl);
  }

  private async _startCamera() {
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      await this.updateComplete;
      const video = this.shadowRoot?.querySelector('video');
      if (video) {
        video.srcObject = this._stream;
      }
    } catch {
      this._error = 'Could not access camera. Please check your permissions.';
    }
  }

  private _stopStream() {
    this._stream?.getTracks().forEach((t) => t.stop());
    this._stream = null;
  }

  private _capture = () => {
    const video = this.shadowRoot?.querySelector('video');
    const canvas = this.shadowRoot?.querySelector('canvas');
    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;
      this._captured = blob;
      this._previewUrl = URL.createObjectURL(blob);
      this._stopStream();
    }, 'image/jpeg', 0.92);
  };

  private _retake = () => {
    if (this._previewUrl) URL.revokeObjectURL(this._previewUrl);
    this._captured = null;
    this._previewUrl = '';
    this._startCamera();
  };

  private _usePhoto = () => {
    if (!this._captured) return;
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const file = new File([this._captured], `camera-${ts}.jpg`, { type: 'image/jpeg' });
    this.dispatchEvent(new CustomEvent('camera-capture', { detail: { file }, bubbles: true, composed: true }));
  };

  private _cancel() {
    this._stopStream();
    this.dispatchEvent(new CustomEvent('camera-cancel', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">Camera</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error
              ? html`<div class="error">${this._error}</div>`
              : this._captured
                ? html`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `
                : html`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `;
  }
}
