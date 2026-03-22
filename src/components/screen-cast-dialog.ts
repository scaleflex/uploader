import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import { buttonStyles, focusStyles } from './shared-styles';
import { createFocusTrap } from '../utils/focus-trap';

/**
 * Modal dialog for screen capture/recording.
 *
 * Fires:
 *  - `screencast-capture` → { file: File }
 *  - `screencast-cancel`  → void
 */
export class SfxScreenCastDialog extends LitElement {
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
      width: 100%; max-width: 560px;
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

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; }

    video {
      width: 100%; max-height: 320px; border-radius: 12px;
      background: #000; object-fit: contain;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .status {
      font-size: 13px; color: var(--sfx-up-text-secondary, #475569);
      display: flex; align-items: center; gap: 8px;
    }

    .rec-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--sfx-up-error, #dc2626); animation: pulse 1s ease-in-out infinite;
    }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-danger {
      background: var(--sfx-up-error, #dc2626); color: var(--primary-foreground, #fff);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
    }
    .btn-danger:hover { background: var(--destructive-foreground, #b91c1c); }

    .start-view {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 30px 20px; text-align: center;
    }

    .start-icon {
      width: 56px; height: 56px; border-radius: 16px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex; align-items: center; justify-content: center;
    }

    .start-icon svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .start-text {
      font-size: 14px; color: var(--sfx-up-text-secondary, #475569); max-width: 300px;
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  `];

  @state() private _stream: MediaStream | null = null;
  @state() private _recording = false;
  @state() private _error = '';
  @state() private _recordedBlob: Blob | null = null;
  @state() private _previewUrl = '';

  private _recorder: MediaRecorder | null = null;
  private _chunks: Blob[] = [];

  private _onBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) this._cancel();
  };

  private _focusTrap = createFocusTrap(() => this.shadowRoot, '.card');

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this._cancel();
    this._focusTrap(e);
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopAll();
    if (this._previewUrl) URL.revokeObjectURL(this._previewUrl);
  }

  private _stopAll() {
    this._recorder?.stop();
    this._recorder = null;
    this._stream?.getTracks().forEach((t) => t.stop());
    this._stream = null;
  }

  private _startRecording = async () => {
    try {
      this._stream = await navigator.mediaDevices.getDisplayMedia({
        video: { width: 1280, height: 720, frameRate: 5 },
        audio: true,
      });

      // If user cancels the screen picker
      this._stream.getVideoTracks()[0].addEventListener('ended', () => {
        this._stopRecording();
      });

      // Set recording state first, then wait for the video element to render
      this._recording = true;
      await this.updateComplete;
      const video = this.shadowRoot?.querySelector('video');
      if (video) {
        video.srcObject = this._stream;
      }

      this._chunks = [];
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
        ? 'video/webm;codecs=vp9'
        : 'video/webm';
      this._recorder = new MediaRecorder(this._stream, { mimeType });
      this._recorder.ondataavailable = (e) => {
        if (e.data.size > 0) this._chunks.push(e.data);
      };
      this._recorder.onstop = () => {
        const blob = new Blob(this._chunks, { type: 'video/webm' });
        this._recordedBlob = blob;
        this._previewUrl = URL.createObjectURL(blob);
        this._stream?.getTracks().forEach((t) => t.stop());
        this._stream = null;
      };
      this._recorder.start();
    } catch {
      this._error = 'Could not start screen capture. Please check your permissions.';
    }
  };

  private _stopRecording = () => {
    this._recording = false;
    if (this._recorder?.state === 'recording') {
      this._recorder.stop();
    }
    this._recorder = null;
  };

  private _useRecording = () => {
    if (!this._recordedBlob) return;
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const file = new File([this._recordedBlob], `screencap-${ts}.webm`, { type: 'video/webm' });
    this.dispatchEvent(new CustomEvent('screencast-capture', { detail: { file }, bubbles: true, composed: true }));
  };

  private _discard = () => {
    if (this._previewUrl) URL.revokeObjectURL(this._previewUrl);
    this._recordedBlob = null;
    this._previewUrl = '';
  };

  private _cancel() {
    this._stopAll();
    this.dispatchEvent(new CustomEvent('screencast-cancel', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 21h10"/>
              </svg>
            </div>
            <div class="title">Screen cast</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error
              ? html`<div class="error">${this._error}</div>`
              : this._recordedBlob
                ? html`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `
                : this._recording
                  ? html`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `
                  : html`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 21h10"/>
                          </svg>
                        </div>
                        <div class="start-text">Share your screen to record a video that will be added to your uploads.</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>Start recording</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `;
  }
}
