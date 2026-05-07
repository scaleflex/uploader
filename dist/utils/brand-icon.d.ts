import { SourceDef } from '../types/source.types';
/**
 * Renders the brand icon for a SourceDef that has `brandHtml` set.
 * When `brandStyle` is present (all built-in providers), wraps in a
 * `.brand-ico` span with styles applied via CSSOM (CSP-safe).
 * Falls back to raw `unsafeHTML` for custom sources that supply full HTML.
 *
 * Call only when `s.brandHtml` is truthy.
 */
export declare function brandIcon(s: SourceDef): import('lit-html/directive.js').DirectiveResult<typeof import('lit-html/directives/unsafe-html.js').UnsafeHTMLDirective>;
//# sourceMappingURL=brand-icon.d.ts.map