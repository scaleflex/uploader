import { LitElement, html, css, nothing, svg as svgTag } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { UploadFile } from '../store/store.types';
import type { SourceDef } from '../types/source.types';

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
      background: rgba(0, 0, 0, 0.15);
      border-radius: var(--sfx-scrollbar-radius, 6px);
      border-left: var(--sfx-scrollbar-inset-left, var(--sfx-scrollbar-inset, 3px)) solid transparent;
      border-right: var(--sfx-scrollbar-inset-right, var(--sfx-scrollbar-inset, 3px)) solid transparent;
      background-clip: padding-box;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, max(24%, 140px)), 1fr));
      gap: 12px;
      padding: 2px 12px 16px 16px;
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }

    /* --- Drop tile (first card in grid) --- */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.18s ease;
      padding: 16px 12px;
      position: relative;
      z-index: 1;
    }

    .drop-tile:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drop-tile-rings {
      width: 72px;
      height: 72px;
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
      width: 40px;
      height: 40px;
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
      width: 20px;
      height: 20px;
    }

    .drop-tile-text {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.4;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-sources {
      display: flex;
      gap: 4px;
      margin-top: 4px;
    }

    .drop-tile-src {
      width: 28px;
      height: 28px;
      border-radius: 6px;
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
      width: 14px;
      height: 14px;
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

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 28px;
      height: 28px;
      border-radius: 6px;
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

  @state() private _moreOpen = false;
  private _outsideClickHandler = (e: MouseEvent) => {
    const path = e.composedPath();
    const moreWrap = this.renderRoot.querySelector('.drop-tile-more-wrap');
    if (moreWrap && !path.includes(moreWrap)) {
      this._moreOpen = false;
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
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

  private _toggleMore(e: Event) {
    e.stopPropagation();
    this._moreOpen = !this._moreOpen;
    if (this._moreOpen) {
      requestAnimationFrame(() => document.addEventListener('click', this._outsideClickHandler, true));
    } else {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._moreOpen = false;
    document.removeEventListener('click', this._outsideClickHandler, true);
  }

  private _onMoreSourceClick(e: Event, source: SourceDef) {
    this._moreOpen = false;
    document.removeEventListener('click', this._outsideClickHandler, true);
    this._onSourceClick(e, source);
  }

  private _renderDropTile() {
    const maxVisible = 3;
    const visibleSources = this.sources.slice(0, maxVisible);
    const overflowSources = this.sources.slice(maxVisible);
    return html`
      <div class="drop-tile" @click=${this._onDropTileClick}>
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
        <div class="drop-tile-text">Drop files or<br>click to <span>browse</span></div>
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
                ${this._moreOpen ? html`
                  <div class="more-dropdown">
                    ${overflowSources.map((s) => html`
                      <button
                        class="more-dropdown-item"
                        @click=${(e: Event) => this._onMoreSourceClick(e, s)}
                      >
                        <span class="more-dropdown-ico" style=${s.iconColor && !s.brandHtml ? `color:${s.iconColor}` : ''}>
                          ${s.brandHtml
                            ? unsafeHTML(s.brandHtml)
                            : svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
                        </span>
                        ${s.label}
                      </button>
                    `)}
                  </div>
                ` : nothing}
              </div>
            ` : nothing}
          </div>
        ` : nothing}
        <input type="file" multiple accept=${this.accept || nothing} @change=${this._onFileInput} />
      </div>
    `;
  }

  render() {
    return html`
      <div class="grid">
        ${this.showDropTile ? this._renderDropTile() : nothing}
        ${this.files.map(
          (f, i) => html`<sfx-file-item .file=${f} style="--tile-index:${i}"></sfx-file-item>`,
        )}
      </div>
    `;
  }
}
