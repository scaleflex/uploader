import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { svg as svgTag } from 'lit';

export type { SourceDef, UploaderHandle } from '../types/source.types';
import type { SourceDef } from '../types/source.types';

const DEVICE_ICON = `<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`;
const URL_ICON = `<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>`;
const CAMERA_ICON = `<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>`;
const SCREEN_CAST_ICON = `<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21h10"/>`;

export const CORE_SOURCES: SourceDef[] = [
  { id: 'device', label: 'My Device', icon: DEVICE_ICON, iconColor: '#2563eb' },
  { id: 'url', label: 'URL link', icon: URL_ICON, iconColor: '#16a34a' },
  { id: 'camera', label: 'Camera', icon: CAMERA_ICON, iconColor: '#7c3aed' },
  { id: 'screen-cast', label: 'Screen cast', icon: SCREEN_CAST_ICON, iconColor: '#7c3aed' },
];

export class SfxSourcePills extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 24px;
      border-radius: 50px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    button:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0) scale(0.98);
    }

    :host > button > svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    :host > button > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

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

    .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }
  `;

  @property({ type: Array }) sources: SourceDef[] = CORE_SOURCES;

  private _handleClick(source: SourceDef) {
    this.dispatchEvent(
      new CustomEvent('source-click', {
        detail: { source: source.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      ${this.sources.map(
        (s) => html`
          <button @click=${() => this._handleClick(s)}>
            ${s.brandHtml
              ? unsafeHTML(s.brandHtml)
              : svgTag`<svg viewBox="0 0 24 24" class=${s.fillIcon ? 'fill-icon' : ''}>${unsafeSVG(s.icon)}</svg>`}
            ${s.label}
          </button>
        `,
      )}
    `;
  }
}
