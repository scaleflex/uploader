import { noChange } from 'lit';
import { directive, Directive, PartType } from 'lit/directive.js';
import type { ElementPart, PartInfo } from 'lit/directive.js';

const toKebab = (prop: string) =>
  prop.includes('-') ? prop : prop.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);

/**
 * Element directive that applies styles via CSSOM only — never via setAttribute —
 * so it works under strict style-src CSP without unsafe-inline.
 *
 * Usage: <div ${cspStyle({ color: 'red' })}> or <div ${cspStyle(condition ? { color } : null)}>
 */
class CspStyleDirective extends Directive {
  private _appliedProps = new Set<string>();
  private _lastStyles: Record<string, string | null | undefined> | null | undefined;

  constructor(partInfo: PartInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error('cspStyle must be used as an element directive: <el ${cspStyle({...})}>');
    }
  }

  // Element directives must implement render(); all real work is in update().
  render(_styles?: Record<string, string | null | undefined> | null) {
    return noChange;
  }

  override update(part: ElementPart, [styles]: [Record<string, string | null | undefined> | null | undefined]) {
    if (styles === this._lastStyles) return noChange;
    this._lastStyles = styles;
    const { style } = part.element as HTMLElement;
    const map = styles ?? {};

    for (const prop of this._appliedProps) {
      if (!(prop in map) || map[prop] == null || map[prop] === '') {
        style.removeProperty(toKebab(prop));
        this._appliedProps.delete(prop);
      }
    }

    for (const [prop, val] of Object.entries(map)) {
      if (val != null && val !== '') {
        style.setProperty(toKebab(prop), val);
        this._appliedProps.add(prop);
      } else if (this._appliedProps.has(prop)) {
        style.removeProperty(toKebab(prop));
        this._appliedProps.delete(prop);
      }
    }

    return noChange;
  }
}

export const cspStyle = directive(CspStyleDirective);
