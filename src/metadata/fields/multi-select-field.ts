import { html, css, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import type { FieldOption } from '../schema/schema.types';
import { metadataDropdownStyles, metadataChipStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaMultiSelectField extends MetadataFieldBase {
  static styles = [
    metadataDropdownStyles,
    metadataChipStyles,
    css`
      .trigger {
        min-height: 36px;
        height: auto;
        padding: 4px 8px;
        flex-wrap: wrap;
        gap: 4px;
      }
      .check {
        width: 16px;
        height: 16px;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 11px;
      }
      .check.checked {
        background: var(--sfx-up-primary, #2563eb);
        border-color: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }
      .option { display: flex; align-items: center; gap: 8px; }
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 340px;
      }
      .dropdown .search {
        flex-shrink: 0;
        min-height: 34px;
      }
      .options-list {
        flex: 1;
        overflow-y: auto;
      }
      .bulk-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
        flex-shrink: 0;
      }
      .bulk-btn {
        all: unset;
        font-size: 12px;
        font-weight: 500;
        color: var(--sfx-up-primary, #2563eb);
        cursor: pointer;
      }
      .bulk-btn:hover {
        text-decoration: underline;
      }
      .bulk-btn--muted {
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `,
  ];

  @state() private _open = false;
  @state() private _search = '';
  @state() private _activeIndex = -1;

  private _boundOutsideClick = this._onOutsideClick.bind(this);

  private get _selected(): string[] {
    return Array.isArray(this.value) ? (this.value as string[]) : [];
  }

  private get _options(): FieldOption[] {
    return (this.field?.possible_values ?? []).map(pv => ({
      id: pv.internal_unique_value,
      label: pv.label,
      value: pv.internal_unique_value,
    }));
  }

  private get _filtered(): FieldOption[] {
    const q = this._search.toLowerCase();
    return this._options
      .filter(o => o.label.toLowerCase().includes(q))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this._boundOutsideClick);
  }

  private _openDropdown() {
    this._open = true;
    this._search = '';
    this._activeIndex = -1;
    document.addEventListener('mousedown', this._boundOutsideClick);
    this.updateComplete.then(() => {
      this.renderRoot.querySelector<HTMLInputElement>('.search')?.focus();
    });
  }

  private _closeAndSubmit() {
    this._open = false;
    this._activeIndex = -1;
    document.removeEventListener('mousedown', this._boundOutsideClick);
    this._emit('field-blur', this._selected);
  }

  private _onOutsideClick(e: MouseEvent) {
    // Use composedPath() instead of e.target — e.target is retargeted across
    // Shadow DOM boundaries, making clicks inside appear "outside".
    if (!e.composedPath().includes(this)) {
      this._closeAndSubmit();
    }
  }

  private _toggle(opt: FieldOption) {
    const sel = this._selected;
    const next = sel.includes(opt.value)
      ? sel.filter(v => v !== opt.value)
      : [...sel, opt.value];
    this.value = next;
    this._emit('field-change', next);
  }

  private _remove(val: string) {
    const next = this._selected.filter(v => v !== val);
    this.value = next;
    this._emit('field-change', next);
  }

  private _selectAll() {
    const all = this._options.map(o => o.value);
    this.value = all;
    this._emit('field-change', all);
  }

  private _clearAll() {
    this.value = [];
    this._emit('field-change', []);
  }

  private _scrollActive() {
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('.option.active')?.scrollIntoView({ block: 'nearest' });
    });
  }

  private _onSearchInput(e: Event) {
    this._search = (e.target as HTMLInputElement).value;
    this._activeIndex = -1;
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this._open = false;
      this._activeIndex = -1;
      document.removeEventListener('mousedown', this._boundOutsideClick);
      this._emit('field-escape');
      this.renderRoot.querySelector<HTMLElement>('.trigger')?.focus();
      return;
    }

    if (!this._open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this._openDropdown();
      }
      return;
    }

    // Backspace removes the last selected chip when search is empty
    if (e.key === 'Backspace' && !this._search && this._selected.length > 0) {
      this._remove(this._selected[this._selected.length - 1]);
      return;
    }

    const items = this._filtered;
    if (!items.length) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._activeIndex = Math.min(this._activeIndex + 1, items.length - 1);
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
        this._activeIndex = items.length - 1;
        this._scrollActive();
        break;
      case 'Enter':
        if (this._activeIndex >= 0 && this._activeIndex < items.length) {
          e.preventDefault();
          this._toggle(items[this._activeIndex]);
        }
        break;
      case ' ':
        // Space toggles only when search is empty (so typing spaces in search still works)
        if (this._activeIndex >= 0 && this._activeIndex < items.length && !this._search) {
          e.preventDefault();
          this._toggle(items[this._activeIndex]);
        }
        break;
    }
  }

  private _labelFor(val: string): string {
    return this._options.find(o => o.value === val)?.label ?? val;
  }

  render() {
    const sel = this._selected;
    const title = this.field?.title ?? '';
    const placeholderFallback = title ? `Select ${title.toLowerCase()}` : 'Select an option';
    return html`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${() => this._open ? this._closeAndSubmit() : this._openDropdown()} @keydown=${this._onKeydown}>
        ${sel.length
          ? sel.map(v => html`
              <span class="chip">
                ${this._labelFor(v)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(v)}" @click=${(e: Event) => { e.stopPropagation(); this._remove(v); }}>&times;</button>
              </span>`)
          : html`<span class="placeholder">${this.field?.placeholder || placeholderFallback}</span>`}
        <span class="trigger-chevron ${this._open ? 'open' : ''}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open ? html`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length
              ? this._filtered.map((opt, i) => html`
                  <div class="option ${i === this._activeIndex ? 'active' : ''}" role="option" aria-selected=${sel.includes(opt.value)}
                    @mousedown=${(e: Event) => { e.preventDefault(); this._toggle(opt); }}
                    @mouseenter=${() => { this._activeIndex = i; }}>
                    <span class="check ${sel.includes(opt.value) ? 'checked' : ''}">
                      ${sel.includes(opt.value) ? '\u2713' : ''}
                    </span>
                    ${opt.label}
                  </div>`)
              : html`<div class="empty">No options</div>`}
          </div>
          ${this._options.length > 0 ? html`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${(e: Event) => { e.preventDefault(); this._selectAll(); }}>Select all</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${(e: Event) => { e.preventDefault(); this._clearAll(); }}>Clear all</button>
            </div>
          ` : nothing}
        </div>
      ` : nothing}
    `;
  }
}

customElements.define('sfx-meta-multi-select-field', SfxMetaMultiSelectField);
