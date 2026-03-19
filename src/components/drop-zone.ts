import { LitElement, html, css, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { svg as svgTag } from 'lit';
import type { SourceDef } from './source-pills';

export class SfxDropZone extends LitElement {
  static styles = css`
    :host {
      display: block;
      flex-shrink: 0;
    }

    .drop-zone {
      border: 1.5px dashed var(--sfx-up-border, #d8d8d8);
      border-radius: var(--sfx-up-radius, 16px);
      background: var(--sfx-up-bg, #ffffff);
      padding: 52px 40px 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: border-color 0.22s, background 0.22s, padding 0.35s ease;
      user-select: none;
    }

    .drop-zone:hover {
      border-color: var(--sfx-up-text-muted, #94a3b8);
      background: var(--sfx-up-border-light, #fafafa);
    }

    /* Drag over state */
    .drop-zone.drag-over {
      border: 2px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      box-shadow: 0 0 0 5px var(--sfx-up-primary-bg, rgba(37, 99, 235, 0.06));
    }

    /* Compact state when files exist */
    .drop-zone.compact {
      padding: 14px 24px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
    }

    /* --- Rings --- */
    .rings {
      width: 110px;
      height: 110px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      flex-shrink: 0;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-border, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    .drag-over .ring {
      border-color: var(--sfx-up-primary, #2563eb);
      animation-duration: 3s;
    }

    .drag-over .ring:nth-child(2) {
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.4));
      animation-duration: 2s;
    }

    .compact .rings {
      width: 36px;
      height: 36px;
      margin-bottom: 0;
    }

    .compact .ring {
      border-width: 1px;
    }

    /* --- Core icon --- */
    .core {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
      box-shadow: 0 3px 12px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
    }

    .core svg {
      width: 24px;
      height: 24px;
    }

    .drop-zone:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.22));
    }

    .drag-over .core {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      transform: scale(1.12);
      box-shadow: 0 8px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    .compact .core {
      width: 36px;
      height: 36px;
      box-shadow: none;
    }

    .compact .core svg {
      width: 16px;
      height: 16px;
    }

    /* --- Text --- */
    .title {
      font-size: 18px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      margin-bottom: 5px;
      transition: font-size 0.3s, margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .subtitle {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: opacity 0.2s;
    }

    .compact .title {
      font-size: 13.5px;
      font-weight: 600;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact .subtitle {
      display: none;
    }

    /* --- Divider inside drop zone --- */
    .dz-divider {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px 0 16px;
      width: 100%;
    }

    .dz-divider-line {
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .dz-divider-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #cbd5e1);
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
    }

    .compact .dz-divider {
      display: none;
    }

    /* --- Source pills grid (expanded mode) --- */
    .sources-grid {
      display: flex;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .compact .sources-grid {
      display: none;
    }

    .src-pill {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid var(--sfx-up-border, rgba(226, 232, 240, 0.6));
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px var(--sfx-up-shadow, rgba(0, 0, 0, 0.04));
      font-family: inherit;
    }

    .src-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, rgba(239, 246, 255, 0.85));
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    .src-pill:active {
      transform: translateY(0) scale(0.98);
    }

    .src-pill .pill-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .src-pill svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-pill svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    /* --- Brand icon container (for provider logos) --- */
    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .src-ico .brand-ico {
      width: 16px;
      height: 16px;
      border-radius: 4px;
    }

    .src-ico .brand-ico svg {
      width: 9px;
      height: 9px;
    }

    /* --- Source icons row (compact mode) --- */
    .sources-row {
      display: none;
    }

    .compact .sources-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      flex-shrink: 0;
      position: relative;
      z-index: 20;
    }

    .src-divider {
      width: 1px;
      height: 20px;
      background: var(--sfx-up-border, #e5e7eb);
      margin-right: 2px;
      flex-shrink: 0;
    }

    .src-ico {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: none;
      background: var(--sfx-up-border-light, #f3f4f6);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.15s;
      position: relative;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #6b7280);
      padding: 0;
      font-family: inherit;
    }

    .src-ico svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico:hover {
      transform: scale(1.18);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(0, 0, 0, 0.12));
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text, #374151);
    }

    .src-ico::after {
      content: attr(data-tip);
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text, #374151);
      font-size: 10px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-border, #e5e7eb);
      box-shadow: 0 2px 8px var(--sfx-up-shadow, rgba(0, 0, 0, 0.08));
      padding: 3px 8px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s, visibility 0.15s;
      pointer-events: none;
      z-index: 50;
      font-family: inherit;
    }

    .src-ico:hover::after {
      opacity: 1;
      visibility: visible;
    }

    /* --- Ripple --- */
    .ripple {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0);
    }

    .ripple.go {
      animation: ripple 0.55s ease-out forwards;
    }

    /* --- Hidden input --- */
    input[type='file'] {
      display: none;
    }

    @keyframes slowSpin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ripple {
      from {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.18;
      }
      to {
        transform: translate(-50%, -50%) scale(12);
        opacity: 0;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ring {
        animation: none;
      }
      .ripple.go {
        animation: none;
      }
    }
  `;

  @property({ type: Boolean }) compact = false;
  @property({ type: String }) accept = '';
  @property({ type: Array }) sources: SourceDef[] = [];

  @state() private _dragOver = false;

  @query('.ripple') private _rippleEl!: HTMLElement;
  @query('input[type="file"]') fileInput!: HTMLInputElement;

  private _dragCounter = 0;

  /** Programmatically open file browser. */
  browse() {
    this.fileInput?.click();
  }

  // --- Drag & Drop ---

  private _onDragEnter = (e: DragEvent) => {
    e.preventDefault();
    this._dragCounter++;
    if (this._dragCounter === 1) {
      this._dragOver = true;
    }
  };

  private _onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  private _onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    this._dragCounter--;
    if (this._dragCounter <= 0) {
      this._dragCounter = 0;
      this._dragOver = false;
    }
  };

  private _onDrop = (e: DragEvent) => {
    e.preventDefault();
    this._dragCounter = 0;
    this._dragOver = false;

    const files = Array.from(e.dataTransfer?.files ?? []);
    if (files.length > 0) {
      this._emitFiles(files);
    }
  };

  // --- Browse ---

  private _onClick = (e: MouseEvent) => {
    // Ripple effect
    const zone = this.shadowRoot!.querySelector('.drop-zone') as HTMLElement;
    if (zone && this._rippleEl) {
      const rect = zone.getBoundingClientRect();
      this._rippleEl.style.left = `${e.clientX - rect.left}px`;
      this._rippleEl.style.top = `${e.clientY - rect.top}px`;
      this._rippleEl.classList.remove('go');
      // Force reflow
      void this._rippleEl.offsetWidth;
      this._rippleEl.classList.add('go');
    }
    this.browse();
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.browse();
    }
  };

  private _onFileChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    if (files.length > 0) {
      this._emitFiles(files);
    }
    // Reset so the same file can be re-selected
    input.value = '';
  };

  // --- Paste ---

  private _onPaste = (e: ClipboardEvent) => {
    // Skip if this drop zone isn't visible (e.g., another instance is active)
    if (!this.isConnected || this.offsetWidth === 0) return;

    const items = e.clipboardData?.items;
    if (!items) return;

    const files: File[] = [];
    for (const item of items) {
      if (item.kind === 'file') {
        const file = item.getAsFile();
        if (file) files.push(file);
      }
    }
    if (files.length > 0) {
      e.preventDefault();
      this._emitFiles(files);
    }
  };

  private _onSourceIconClick(source: SourceDef) {
    this.dispatchEvent(
      new CustomEvent('source-click', {
        detail: { source: source.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _emitFiles(files: File[]) {
    this.dispatchEvent(
      new CustomEvent('files-selected', {
        detail: { files },
        bubbles: true,
        composed: true,
      }),
    );
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('paste', this._onPaste);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('paste', this._onPaste);
  }

  render() {
    const classes = [
      'drop-zone',
      this._dragOver ? 'drag-over' : '',
      this.compact ? 'compact' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div
        class=${classes}
        role="button"
        tabindex="0"
        aria-label="Drop files here or click to browse"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <div class="rings">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="core">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
            </svg>
          </div>
        </div>

        <div class="title">
          Drag & Drop or click to <span>browse</span>
        </div>
        ${!this.compact
          ? html`<div class="subtitle">Drop files anywhere on this page</div>`
          : nothing}

        ${!this.compact && this.sources.length > 0
          ? html`
              <div class="dz-divider">
                <div class="dz-divider-line"></div>
                <div class="dz-divider-label">or import from</div>
                <div class="dz-divider-line"></div>
              </div>
              <div class="sources-grid">
                ${this.sources.map(
                  (s) => html`
                    <button
                      class="src-pill"
                      @click=${(e: MouseEvent) => {
                        e.stopPropagation();
                        this._onSourceIconClick(s);
                      }}
                    >
                      <span class="pill-ico" style=${s.iconColor ? `color:${s.iconColor}` : ''}>
                        ${s.brandHtml
                          ? unsafeHTML(s.brandHtml)
                          : svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
                      </span>
                      ${s.label}
                    </button>
                  `,
                )}
              </div>
            `
          : nothing}

        ${this.compact && this.sources.length > 0
          ? html`
              <div class="sources-row">
                <span class="src-divider"></span>
                ${this.sources.map(
                  (s) => html`
                    <button
                      class="src-ico"
                      data-tip=${s.label}
                      @click=${(e: MouseEvent) => {
                        e.stopPropagation();
                        this._onSourceIconClick(s);
                      }}
                    >
                      ${s.brandHtml
                        ? unsafeHTML(s.brandHtml)
                        : svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
                    </button>
                  `,
                )}
              </div>
            `
          : nothing}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept || nothing}
          @change=${this._onFileChange}
        />
      </div>
    `;
  }
}
