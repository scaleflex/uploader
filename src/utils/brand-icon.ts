import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { cspStyle } from './csp-style';
import type { SourceDef } from '../types/source.types';

/**
 * Renders the brand icon for a SourceDef that has `brandHtml` set.
 * When `brandStyle` is present (all built-in providers), wraps in a
 * `.brand-ico` span with styles applied via CSSOM (CSP-safe).
 * Falls back to raw `unsafeHTML` for custom sources that supply full HTML.
 *
 * Call only when `s.brandHtml` is truthy.
 */
export function brandIcon(s: SourceDef) {
  if (!s.brandStyle) return unsafeHTML(s.brandHtml);
  return html`<span
    class=${classMap({ 'brand-ico': true, 'brand-ico--transparent': s.brandStyle['background'] === 'transparent' })}
    ${cspStyle(s.brandStyle)}
  >${unsafeHTML(s.brandHtml)}</span>`;
}
