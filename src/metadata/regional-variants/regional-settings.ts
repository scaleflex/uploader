import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type {
  RegionalVariantsGroup,
  RegionalVariant,
} from '../schema/schema.types';
import { metadataDropdownStyles } from '../metadata.styles';

interface FlatOption {
  /** UUID of the parent group, used in the emitted event */
  groupUuid: string;
  /** Variant `api_value` (the actual slot key) */
  value: string;
  /** Variant label */
  label: string;
  /** First option of its group → render a section header above it */
  isGroupStart: boolean;
  /** Group label for the header (only meaningful when `isGroupStart`) */
  groupLabel: string;
}

/**
 * Globe-button dropdown that lets the user switch the active variant for
 * every regional-variants group in the schema — LANGUAGES, CURRENCIES, and
 * CUSTOM alike. Mirrors admin v5's `RegionalFiltersDropdown`.
 *
 * Renders nothing when no group has more than one variant — at that point
 * the selector wouldn't change anything.
 *
 * Emits `regional-change` with `{ groupUuid, value }` on selection.
 *
 * Keyboard nav inside the open dropdown:
 *   ArrowDown / ArrowUp — move active option
 *   Enter             — select active option
 *   Escape            — close
 */
export class SfxRegionalSettings extends LitElement {
  static styles = [
    metadataDropdownStyles,
    css`
      :host {
        display: inline-block;
        position: relative;
      }

      /* Borderless trigger — Globe icon + "Regional settings" label +
         chevron. Sits beside the other header buttons but is wider because
         the label needs room. Filled background only on hover. */
      .trigger {
        /* Use min-height — not a fixed height — so descenders (g, j, p, y)
           in the label aren't clipped at the bottom. Line-height stays
           normal so the line box can fit the full glyph + descender. */
        min-height: 30px;
        padding: 4px 10px;
        border: none;
        border-radius: 8px;
        background: none;
        color: var(--sfx-up-text-secondary, #64748b);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        font-family: inherit;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.4;
        cursor: pointer;
        white-space: nowrap;
        transition: background 0.15s, color 0.15s;
      }
      .trigger:hover {
        background: var(--sfx-up-border, #e2e8f0);
        color: var(--sfx-up-text, #1e293b);
      }
      .trigger:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        box-shadow: none;
      }
      .trigger-icon {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        display: block;
        color: inherit;
      }
      .trigger-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-label {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .trigger-chevron {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .trigger-chevron svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .trigger-chevron.open { transform: rotate(180deg); }

      .dropdown {
        right: 0;
        left: auto;
        min-width: 220px;
        max-height: 320px;
      }
      .group-header {
        padding: 8px 10px 4px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option-check {
        width: 14px;
        height: 14px;
        flex-shrink: 0;
        color: var(--sfx-up-primary, #2563eb);
        opacity: 0;
      }
      .option.selected .option-check {
        opacity: 1;
      }
      .option-check svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      /* Responsive — at narrow widths collapse to the icon only so the
         label doesn't crowd the close button. */
      @media (max-width: 768px) {
        .trigger { height: 28px; padding: 0 6px; gap: 4px; font-size: 12px; }
        .trigger-icon { width: 16px; height: 16px; }
      }
      @media (max-width: 480px) {
        .trigger { padding: 0 6px; }
        .trigger-label { display: none; }
        .trigger-chevron { display: none; }
      }
    `,
  ];

  @property({ attribute: false }) groups: RegionalVariantsGroup[] = [];
  /** Active variant value per group, keyed by group UUID. */
  @property({ attribute: false }) selectedFilters: Record<string, string> = {};

  @state() private _open = false;
  @state() private _activeIndex = -1;

  private _boundOutsideClick = this._onOutsideClick.bind(this);

  /**
   * Groups that actually have something to switch between — single-variant
   * groups are noise. Mirrors admin v5's `variants.length > 1` gate.
   */
  private get _filteredGroups(): RegionalVariantsGroup[] {
    return (this.groups ?? []).filter((g) => g?.variants?.length > 1);
  }

  /** Flat option list for keyboard nav, in render order. */
  private get _options(): FlatOption[] {
    const out: FlatOption[] = [];
    for (const g of this._filteredGroups) {
      let first = true;
      for (const v of g.variants) {
        out.push({
          groupUuid: g.uuid,
          value: v.api_value,
          label: v.label,
          isGroupStart: first,
          groupLabel: g.label,
        });
        first = false;
      }
    }
    return out;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this._boundOutsideClick);
  }

  private _toggle() {
    this._open ? this._close() : this._openDropdown();
  }

  private _openDropdown() {
    this._open = true;
    // Land focus on the first selected option (or the very first one).
    const opts = this._options;
    const firstSelected = opts.findIndex(
      (o) => this.selectedFilters[o.groupUuid] === o.value,
    );
    this._activeIndex = firstSelected >= 0 ? firstSelected : 0;
    document.addEventListener('mousedown', this._boundOutsideClick);
    this.updateComplete.then(() => this._scrollActive());
  }

  private _close() {
    this._open = false;
    this._activeIndex = -1;
    document.removeEventListener('mousedown', this._boundOutsideClick);
  }

  private _onOutsideClick(e: MouseEvent) {
    if (!e.composedPath().includes(this)) this._close();
  }

  private _onSelect(opt: FlatOption) {
    this._close();
    if (this.selectedFilters[opt.groupUuid] === opt.value) return;
    this.dispatchEvent(
      new CustomEvent('regional-change', {
        detail: { groupUuid: opt.groupUuid, value: opt.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _scrollActive() {
    const el = this.renderRoot.querySelector('.option.active');
    // jsdom doesn't implement scrollIntoView; tolerate its absence.
    if (el && typeof (el as HTMLElement).scrollIntoView === 'function') {
      (el as HTMLElement).scrollIntoView({ block: 'nearest' });
    }
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this._open) {
      e.stopPropagation();
      this._close();
      return;
    }
    if (!this._open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this._openDropdown();
      }
      return;
    }
    const opts = this._options;
    if (!opts.length) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._activeIndex = Math.min(this._activeIndex + 1, opts.length - 1);
        this._scrollActive();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._activeIndex = Math.max(this._activeIndex - 1, 0);
        this._scrollActive();
        break;
      case 'Home':
        e.preventDefault();
        this._activeIndex = 0;
        this._scrollActive();
        break;
      case 'End':
        e.preventDefault();
        this._activeIndex = opts.length - 1;
        this._scrollActive();
        break;
      case 'Enter':
        if (this._activeIndex >= 0 && this._activeIndex < opts.length) {
          e.preventDefault();
          this._onSelect(opts[this._activeIndex]);
        }
        break;
    }
  }

  /**
   * Tooltip / aria-label summarising the active picks: with one group, shows
   * just the active variant label (e.g. "English"); with multiple, lists
   * "Languages: English, Currencies: USD".
   */
  private _triggerSummary(): string {
    const groups = this._filteredGroups;
    if (groups.length === 0) return 'Regional settings';
    const parts: string[] = [];
    for (const g of groups) {
      const activeKey = this.selectedFilters[g.uuid] ?? g.variants[0]?.api_value;
      const v = g.variants.find((x) => x.api_value === activeKey);
      if (!v) continue;
      parts.push(groups.length === 1 ? v.label : `${g.label}: ${v.label}`);
    }
    return parts.length ? parts.join(', ') : 'Regional settings';
  }

  render() {
    const groups = this._filteredGroups;
    if (groups.length === 0) return nothing;

    const options = this._options;
    const summary = this._triggerSummary();

    return html`
      <button
        class="trigger"
        type="button"
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        aria-label=${`Regional settings — ${summary}`}
        title=${summary}
        @click=${this._toggle}
        @keydown=${this._onKeydown}
      >
        <span class="trigger-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </span>
        <span class="trigger-label">Regional settings</span>
        <span class="trigger-chevron ${this._open ? 'open' : ''}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      ${this._open
        ? html`
            <div class="dropdown" role="listbox" aria-label="Regional settings">
              ${options.map((opt, i) =>
                this._renderOption(opt, i, opt.value === this.selectedFilters[opt.groupUuid]),
              )}
            </div>
          `
        : nothing}
    `;
  }

  private _renderOption(opt: FlatOption, index: number, selected: boolean) {
    const isActive = this._activeIndex === index;
    return html`
      ${opt.isGroupStart
        ? html`<div class="group-header">${opt.groupLabel}</div>`
        : nothing}
      <div
        class="option ${selected ? 'selected' : ''} ${isActive ? 'active' : ''}"
        role="option"
        aria-selected=${selected}
        @mouseenter=${() => {
          this._activeIndex = index;
        }}
        @click=${() => this._onSelect(opt)}
      >
        <span class="option-check" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>${opt.label}</span>
      </div>
    `;
  }
}

customElements.define('sfx-regional-settings', SfxRegionalSettings);

// Re-export `RegionalVariant` type for selector tests / consumers.
export type { RegionalVariant };
