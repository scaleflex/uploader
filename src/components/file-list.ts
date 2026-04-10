import { LitElement, html, css, nothing, svg as svgTag, render as litRender } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { UploadFile } from '../store/store.types';
import type { SourceDef } from '../types/source.types';
import { getPortalTarget } from '../utils/portal-target';

const tileDropdownSheet = new CSSStyleSheet();
tileDropdownSheet.replaceSync(`
  [data-sfx-tile-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item { display:flex; align-items:center; gap:10px; width:100%; padding:8px 12px; border:none; background:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; transition:background .15s; font-family:inherit; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-item:hover { background:#f5f7fa; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg.fill-icon { fill:currentColor; stroke:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico { width:22px; height:22px; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico svg { width:22px; height:22px; }
  @keyframes sfxTileDropIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }
`);

export class SfxFileList extends LitElement {
  static styles = css`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
      scrollbar-gutter: stable;
    }

    :host::-webkit-scrollbar {
      width: var(--sfx-scrollbar-w, 12px);
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      border-left: var(--sfx-scrollbar-inset-left, 3px) solid transparent;
      border-right: var(--sfx-scrollbar-inset-right, 3px) solid transparent;
      background-clip: padding-box;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 200px), 1fr));
      gap: 12px;
      padding: 0 var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }

    /* --- Drop tile (first card in grid) — mirrors file-item structure
       so its natural height matches a file card at any column width */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.18s ease;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover,
    :host-context(.body-drag-over) .drop-tile {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    /* Preview area — flex:1 absorbs remaining row height so drop-tile total
       always matches the file-card height (info bar handles its own size).
       container-type lets the inner rings/icon scale with tile width via cqi. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — wider bottom padding so the source pills don't hug the
       card edge. Natural height stays close to the file-card .info area. */
    .drop-tile-info {
      padding: 12px 12px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    .drop-tile-rings {
      width: clamp(48px, 30cqi, 140px);
      height: clamp(48px, 30cqi, 140px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .drop-tile-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: tileSpin 20s linear infinite;
    }

    .drop-tile-ring:nth-child(2) {
      inset: 8px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    @keyframes tileSpin {
      to { transform: rotate(360deg); }
    }

    .drop-tile-core {
      width: clamp(28px, 16cqi, 76px);
      height: clamp(28px, 16cqi, 76px);
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
      transition: all 0.2s ease;
    }

    .drop-tile:hover .drop-tile-core {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    .drop-tile-core svg {
      width: clamp(14px, 8cqi, 38px);
      height: clamp(14px, 8cqi, 38px);
    }

    .drop-tile-text {
      font-size: clamp(12px, 4cqi, 18px);
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.2;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-sources {
      display: flex;
      gap: clamp(3px, 1.2cqi, 8px);
      margin-top: 0;
    }

    .drop-tile-src {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .drop-tile-src:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .drop-tile-src svg {
      width: clamp(20px, 6cqi, 24px);
      height: clamp(20px, 6cqi, 24px);
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .drop-tile-src svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .drop-tile-src .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-src .brand-ico svg {
      width: 20px;
      height: 20px;
      stroke: none;
      stroke-width: 0;
    }

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .drop-tile-more:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .more-dropdown {
      position: absolute;
      top: 36px;
      right: 0;
      background: #fff;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 10;
      min-width: 180px;
      animation: dropIn 0.15s ease;
    }

    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .more-dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      transition: background 0.15s;
      font-family: inherit;
    }

    .more-dropdown-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-dropdown-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-dropdown-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .more-dropdown-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .more-dropdown-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .more-dropdown-ico .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .more-dropdown-ico .canva-ico {
      width: 22px;
      height: 22px;
    }

    .more-dropdown-ico .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    input[type="file"] {
      display: none;
    }
  `;

  @property({ attribute: false }) files: UploadFile[] = [];
  @property({ type: Boolean }) showDropTile = false;
  @property({ attribute: false }) sources: SourceDef[] = [];
  @property({ type: String }) accept = '';
  /** 'upload' (default): full controls; 'review': read-only post-upload review
   *  with status badges, Open links, and a Local-edit pill on edited files. */
  @property({ type: String }) mode: 'upload' | 'review' = 'upload';
  /** Forwarded to each file-item for the Locate button URL override. */
  @property({ attribute: false }) getLocateUrl?: (file: UploadFile) => string | null | undefined;

  @state() private _moreOpen = false;
  private _portalContainer: HTMLDivElement | null = null;

  private _outsideClickHandler = (e: MouseEvent) => {
    if (this._portalContainer?.contains(e.target as Node)) return;
    const moreWrap = this.renderRoot.querySelector('.drop-tile-more-wrap');
    const path = e.composedPath();
    if (moreWrap && path.includes(moreWrap)) return;
    this._moreOpen = false;
    this._closePortal();
    document.removeEventListener('click', this._outsideClickHandler, true);
  };

  private _onDropTileClick() {
    const input = this.renderRoot.querySelector('input[type="file"]') as HTMLInputElement;
    input?.click();
  }

  private _onFileInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    if (files.length > 0) {
      this.dispatchEvent(new CustomEvent('files-selected', { detail: { files }, bubbles: true, composed: true }));
    }
    input.value = '';
  }

  private _onSourceClick(e: Event, source: SourceDef) {
    e.stopPropagation();
    if (source.id === 'device') {
      const input = this.renderRoot.querySelector('input[type="file"]') as HTMLInputElement;
      input?.click();
      return;
    }
    this.dispatchEvent(new CustomEvent('source-click', { detail: { source }, bubbles: true, composed: true }));
  }

  private _onScrollOrResize = () => {
    if (this._moreOpen) this._positionPortal();
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this._moreOpen) {
      this._moreOpen = false;
      this._closePortal();
      this._removeGlobalListeners();
    }
  };

  private _addGlobalListeners() {
    requestAnimationFrame(() => document.addEventListener('click', this._outsideClickHandler, true));
    document.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('scroll', this._onScrollOrResize, true);
    window.addEventListener('resize', this._onScrollOrResize);
  }

  private _removeGlobalListeners() {
    document.removeEventListener('click', this._outsideClickHandler, true);
    document.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('scroll', this._onScrollOrResize, true);
    window.removeEventListener('resize', this._onScrollOrResize);
  }

  private _toggleMore(e: Event) {
    e.stopPropagation();
    this._moreOpen = !this._moreOpen;
    if (this._moreOpen) {
      this._openPortal();
      this._addGlobalListeners();
    } else {
      this._closePortal();
      this._removeGlobalListeners();
    }
  }

  private _openPortal() {
    const overflowSources = this.sources.slice(3);
    if (!this._portalContainer) {
      this._portalContainer = document.createElement('div');
      this._portalContainer.setAttribute('data-sfx-tile-dropdown', '');
      getPortalTarget(this).appendChild(this._portalContainer);
      this._injectTileDropdownStyles();
    }
    litRender(
      html`<div class="sfx-tile-dropdown">
        ${overflowSources.map((s) => html`
          <button
            class="sfx-tile-dropdown-item"
            @click=${(e: Event) => this._onMoreSourceClick(e, s)}
          >
            <span class="sfx-tile-dropdown-ico" style=${s.iconColor && !s.brandHtml ? `color:${s.iconColor}` : ''}>
              ${s.brandHtml
                ? unsafeHTML(s.brandHtml)
                : svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
            </span>
            ${s.label}
          </button>
        `)}
      </div>`,
      this._portalContainer,
    );
    requestAnimationFrame(() => this._positionPortal());
  }

  private _positionPortal() {
    const btn = this.renderRoot.querySelector('.drop-tile-more') as HTMLElement;
    const dropdown = this._portalContainer?.querySelector('.sfx-tile-dropdown') as HTMLElement;
    if (!btn || !dropdown) return;

    const btnRect = btn.getBoundingClientRect();
    const gap = 6;
    const ddHeight = dropdown.scrollHeight;
    const ddWidth = dropdown.offsetWidth;

    const spaceAbove = btnRect.top;
    const spaceBelow = window.innerHeight - btnRect.bottom;
    const openAbove = spaceAbove >= ddHeight + gap || spaceAbove > spaceBelow;

    if (openAbove) {
      dropdown.style.top = `${btnRect.top - ddHeight - gap}px`;
    } else {
      dropdown.style.top = `${btnRect.bottom + gap}px`;
    }

    let left = btnRect.right - ddWidth;
    left = Math.max(8, Math.min(left, window.innerWidth - ddWidth - 8));
    dropdown.style.left = `${left}px`;
  }

  private _closePortal() {
    if (this._portalContainer) {
      litRender(nothing, this._portalContainer);
      this._portalContainer.remove();
      this._portalContainer = null;
    }
  }

  private _injectTileDropdownStyles() {
    const root = this._portalContainer?.getRootNode() as Document | ShadowRoot | undefined;
    if (!root) return;
    if (root.adoptedStyleSheets.includes(tileDropdownSheet)) return;
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, tileDropdownSheet];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._moreOpen = false;
    this._closePortal();
    this._removeGlobalListeners();
  }

  private _onMoreSourceClick(e: Event, source: SourceDef) {
    this._moreOpen = false;
    this._closePortal();
    this._removeGlobalListeners();
    this._onSourceClick(e, source);
  }

  private _renderDropTile() {
    const maxVisible = 3;
    const visibleSources = this.sources.slice(0, maxVisible);
    const overflowSources = this.sources.slice(maxVisible);
    return html`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
          <div class="drop-tile-rings">
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-ring"></div>
            <div class="drop-tile-core">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
          </div>
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">Drop or click to <span>browse</span></div>
          ${visibleSources.length > 0 ? html`
            <div class="drop-tile-sources">
              ${visibleSources.map((s) => html`
                <button
                  class="drop-tile-src"
                  style=${s.iconColor && !s.brandHtml ? `color:${s.iconColor}` : ''}
                  title=${s.label}
                  @click=${(e: Event) => this._onSourceClick(e, s)}
                >
                  ${s.brandHtml
                    ? unsafeHTML(s.brandHtml)
                    : svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
                </button>
              `)}
              ${overflowSources.length > 0 ? html`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title="More sources" @click=${(e: Event) => this._toggleMore(e)}>···</button>
                </div>
              ` : nothing}
            </div>
          ` : nothing}
        </div>
        <input type="file" multiple accept=${this.accept || nothing} @change=${this._onFileInput} />
      </div>
    `;
  }

  render() {
    return html`
      <div class="grid">
        ${this.showDropTile && this.mode !== 'review' ? this._renderDropTile() : nothing}
        ${this.files.map(
          (f, i) => html`<sfx-file-item .file=${f} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} style="--tile-index:${i}"></sfx-file-item>`,
        )}
      </div>
    `;
  }
}
