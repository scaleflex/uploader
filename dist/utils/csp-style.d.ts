import { Directive, ElementPart, PartInfo } from 'lit/directive.js';
/**
 * Element directive that applies styles via CSSOM only — never via setAttribute —
 * so it works under strict style-src CSP without unsafe-inline.
 *
 * Usage: <div ${cspStyle({ color: 'red' })}> or <div ${cspStyle(condition ? { color } : null)}>
 */
declare class CspStyleDirective extends Directive {
    private _appliedProps;
    private _lastStyles;
    constructor(partInfo: PartInfo);
    render(_styles?: Record<string, string | null | undefined> | null): symbol;
    update(part: ElementPart, [styles]: [Record<string, string | null | undefined> | null | undefined]): symbol;
}
export declare const cspStyle: (_styles?: Record<string, string | null | undefined> | null | undefined) => import('lit-html/directive.js').DirectiveResult<typeof CspStyleDirective>;
export {};
//# sourceMappingURL=csp-style.d.ts.map