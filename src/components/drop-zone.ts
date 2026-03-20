import { LitElement, html, css, nothing } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { svg as svgTag } from 'lit';
import type { SourceDef } from './source-pills';

/** Number of source pills shown directly; the rest go into "More" dropdown. */
const VISIBLE_PILLS = 3;

export class SfxDropZone extends LitElement {
  static styles = css`
    :host {
      display: block;
      flex-shrink: 0;
    }

    .drop-zone {
      border: none;
      border-radius: 12px;
      background: #fff;
      padding: 50px 40px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: visible;
      transition: background 0.22s, padding 0.35s ease;
      user-select: none;
    }

    .drop-zone:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drag-over .ring {
      border-color: var(--sfx-up-primary, #2563eb);
      animation-duration: 3s;
    }

    .drag-over .ring:nth-child(2) {
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.4));
      animation-duration: 2s;
    }

    .drag-over .core {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      transform: scale(1.12);
      box-shadow: 0 8px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    /* Compact state when files exist */
    .drop-zone.compact {
      padding: 14px 0;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 0;
    }

    /* --- Radial glow --- */
    .dz-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: radial-gradient(circle at center, rgba(37, 99, 235, 0.04) 0%, rgba(37, 99, 235, 0.02) 40%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }

    .compact .dz-glow {
      display: none;
    }

    /* --- Rings --- */
    .rings {
      width: 120px;
      height: 120px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 22px;
      flex-shrink: 0;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed #c4d5ef;
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: #d8e5f5;
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    .compact .rings {
      display: none;
    }

    /* --- Core icon --- */
    .core {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
      box-shadow: 0 3px 12px rgba(37, 99, 235, 0.15);
    }

    .core svg {
      width: 26px;
      height: 26px;
    }

    .drop-zone:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 19px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      margin-bottom: 6px;
      transition: font-size 0.3s, margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .subtitle {
      font-size: 13.5px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: opacity 0.2s;
      margin-bottom: 28px;
    }

    .compact .title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact .subtitle {
      display: none;
    }

    /* --- "or Import From" divider --- */
    .import-divider {
      display: flex;
      align-items: center;
      gap: 14px;
      width: 100%;
      max-width: 420px;
      margin-bottom: 20px;
    }

    .import-divider::before,
    .import-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #e5e7eb;
    }

    .import-divider span {
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      letter-spacing: 0.3px;
    }

    .compact .import-divider {
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
      gap: 8px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
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

    .src-pill .pill-ico svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-pill .pill-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-pill .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- "More" pill + dropdown --- */
    .more-wrap {
      position: relative;
    }

    .more-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .more-pill:hover,
    .more-wrap.open .more-pill {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .more-pill:hover {
      transform: translateY(-1px);
    }

    .more-pill svg {
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
    }

    .more-dots {
      width: 16px;
      height: 16px;
      color: #6b7280;
    }

    .more-wrap.open .more-dots,
    .more-pill:hover .more-dots {
      color: currentColor;
    }

    .more-chevron {
      width: 12px;
      height: 12px;
      color: #9ca3af;
      transition: transform 0.18s ease;
    }

    .more-wrap.open .more-chevron {
      transform: rotate(180deg);
      color: currentColor;
    }

    /* Dropdown uses position:fixed to escape overflow:hidden ancestors */
    .more-dropdown {
      position: fixed;
      background: #fff;
      border-radius: 14px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid #e8edf5;
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.18s ease, visibility 0.18s ease, transform 0.18s ease;
    }

    .more-dropdown.above {
      transform: translateY(-6px);
    }

    .more-dropdown.below {
      transform: translateY(6px);
    }

    .more-wrap.open .more-dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateY(0);
    }

    .more-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 10px;
      border: none;
      background: none;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      color: #374151;
      cursor: pointer;
      transition: background 0.12s;
      font-family: inherit;
      white-space: nowrap;
    }

    .more-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-item .more-item-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: #f5f5f7;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .more-item-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .more-item .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .brand-ico svg {
      fill: white;
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
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }

    .src-ico .brand-ico svg {
      width: 12px;
      height: 12px;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico .canva-ico,
    .more-item .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-ico .canva-ico svg,
    .more-item .canva-ico svg {
      width: 22px;
      height: 22px;
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
      height: 24px;
      background: var(--sfx-up-border, #e5e7eb);
      margin-right: 4px;
      flex-shrink: 0;
    }

    .src-ico {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1.5px solid #f0f0f0;
      background: #fafafa;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      position: relative;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #6b7280);
      padding: 0;
      font-family: inherit;
    }

    .src-ico > svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-ico > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      color: var(--sfx-up-primary, #2563eb);
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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  @property({ type: Boolean, attribute: 'external-drag-over' }) externalDragOver = false;
  @property({ type: String }) accept = '';
  @property({ type: Array }) sources: SourceDef[] = [];

  @state() private _dragOver = false;
  @state() private _moreOpen = false;
  @state() private _visiblePills = VISIBLE_PILLS;

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

  private _toggleMore(e: MouseEvent) {
    e.stopPropagation();
    this._moreOpen = !this._moreOpen;
    if (this._moreOpen) {
      requestAnimationFrame(() => this._positionDropdown());
    }
  }

  /** Position the fixed dropdown, choosing above or below based on available space. */
  private _positionDropdown() {
    const pill = this.shadowRoot?.querySelector('.more-pill') as HTMLElement;
    const dropdown = this.shadowRoot?.querySelector('.more-dropdown') as HTMLElement;
    if (!pill || !dropdown) return;

    const pillRect = pill.getBoundingClientRect();
    const gap = 8;

    // Measure dropdown height
    const ddHeight = dropdown.scrollHeight;
    const ddWidth = dropdown.offsetWidth;

    const spaceAbove = pillRect.top;
    const spaceBelow = window.innerHeight - pillRect.bottom;

    // Prefer above, fall back to below if not enough room
    const openAbove = spaceAbove >= ddHeight + gap || spaceAbove > spaceBelow;

    if (openAbove) {
      dropdown.classList.add('above');
      dropdown.classList.remove('below');
      dropdown.style.top = `${pillRect.top - ddHeight - gap}px`;
    } else {
      dropdown.classList.add('below');
      dropdown.classList.remove('above');
      dropdown.style.top = `${pillRect.bottom + gap}px`;
    }

    // Horizontal: align right edge with pill, clamp to viewport
    let left = pillRect.right - ddWidth;
    left = Math.max(8, Math.min(left, window.innerWidth - ddWidth - 8));
    dropdown.style.left = `${left}px`;
  }

  private _onMoreItemClick(source: SourceDef, e: MouseEvent) {
    e.stopPropagation();
    this._moreOpen = false;
    this._onSourceIconClick(source);
  }

  private _onDocClick = () => {
    if (this._moreOpen) this._moreOpen = false;
  };

  private _onScrollOrResize = () => {
    if (this._moreOpen) {
      this._positionDropdown();
    }
    this._updateVisiblePills();
  };

  private _updateVisiblePills() {
    const w = window.innerWidth;
    if (w <= 480) {
      this._visiblePills = 1;
    } else if (w <= 768) {
      this._visiblePills = 2;
    } else {
      this._visiblePills = VISIBLE_PILLS;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('paste', this._onPaste);
    document.addEventListener('click', this._onDocClick);
    window.addEventListener('scroll', this._onScrollOrResize, true);
    window.addEventListener('resize', this._onScrollOrResize);
    this._updateVisiblePills();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('paste', this._onPaste);
    document.removeEventListener('click', this._onDocClick);
    window.removeEventListener('scroll', this._onScrollOrResize, true);
    window.removeEventListener('resize', this._onScrollOrResize);
  }

  private _renderPill(s: SourceDef) {
    return html`
      <button
        class="src-pill"
        @click=${(e: MouseEvent) => {
          e.stopPropagation();
          this._onSourceIconClick(s);
        }}
      >
        ${s.brandHtml
          ? unsafeHTML(s.brandHtml)
          : html`<span class="pill-ico" style=${s.iconColor ? `color:${s.iconColor}` : ''}>
              ${svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
            </span>`}
        ${s.label}
      </button>
    `;
  }

  private _renderMoreDropdown(overflowSources: SourceDef[]) {
    return html`
      <div class="more-wrap ${this._moreOpen ? 'open' : ''}">
        <button class="more-pill" @click=${(e: MouseEvent) => this._toggleMore(e)}>
          <svg class="more-dots" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
          More
          <svg class="more-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="more-dropdown">
          ${overflowSources.map(
            (s) => html`
              <button class="more-item" @click=${(e: MouseEvent) => this._onMoreItemClick(s, e)}>
                <div class="more-item-ico">
                  ${s.brandHtml
                    ? unsafeHTML(s.brandHtml)
                    : s.iconColor
                      ? html`<svg viewBox="0 0 24 24" style="color:${s.iconColor}">${unsafeSVG(s.icon)}</svg>`
                      : svgTag`<svg viewBox="0 0 24 24">${unsafeSVG(s.icon)}</svg>`}
                </div>
                ${s.label}
              </button>
            `,
          )}
        </div>
      </div>
    `;
  }

  render() {
    const classes = [
      'drop-zone',
      (this._dragOver || this.externalDragOver) ? 'drag-over' : '',
      this.compact ? 'compact' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const visibleSources = this.sources.slice(0, this._visiblePills);
    const overflowSources = this.sources.slice(this._visiblePills);

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
        <div class="dz-glow"></div>
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
              <div class="import-divider"><span>Or import from</span></div>
              <div class="sources-grid">
                ${visibleSources.map((s) => this._renderPill(s))}
                ${overflowSources.length > 0
                  ? this._renderMoreDropdown(overflowSources)
                  : nothing}
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
                      style=${s.iconColor && !s.brandHtml ? `color:${s.iconColor}` : ''}
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
