import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import type { FieldOption } from '../schema/schema.types';
import { metadataDropdownStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

export class SfxMetaSelectField extends MetadataFieldBase {
  static styles = [metadataDropdownStyles];

  @state() private _open = false;
  @state() private _search = '';
  @state() private _activeIndex = -1;

  private _boundOutsideClick = this._onOutsideClick.bind(this);

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

  private get _selectedLabel(): string {
    return this._options.find(o => o.value === this.value)?.label ?? '';
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this._boundOutsideClick);
  }

  private _openDropdown() {
    this._open = true;
    this._search = '';
    const filtered = this._filtered;
    const currentIdx = filtered.findIndex(o => o.value === this.value);
    this._activeIndex = currentIdx >= 0 ? currentIdx : 0;
    document.addEventListener('mousedown', this._boundOutsideClick);
    this.updateComplete.then(() => {
      this.renderRoot.querySelector<HTMLInputElement>('.search')?.focus();
      this._scrollActive();
    });
  }

  private _closeAndSubmit(returnFocus = false) {
    this._open = false;
    this._activeIndex = -1;
    document.removeEventListener('mousedown', this._boundOutsideClick);
    this._emit('field-blur', this.value);
    if (returnFocus) {
      this.updateComplete.then(() => {
        this.renderRoot.querySelector<HTMLButtonElement>('.trigger')?.focus();
      });
    }
  }

  private _onOutsideClick(e: MouseEvent) {
    if (!e.composedPath().includes(this)) {
      this._closeAndSubmit();
    }
  }

  private _onSelect(opt: FieldOption, returnFocus = false) {
    this._emit('field-change', opt.value);
    this.value = opt.value;
    this._closeAndSubmit(returnFocus);
  }

  private _scrollActive() {
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('.option.active')?.scrollIntoView({ block: 'nearest' });
    });
  }

  private _onSearchInput(e: Event) {
    this._search = (e.target as HTMLInputElement).value;
    this._activeIndex = 0;
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this._open = false;
      this._activeIndex = -1;
      document.removeEventListener('mousedown', this._boundOutsideClick);
      this._emit('field-escape');
      this.renderRoot.querySelector<HTMLButtonElement>('.trigger')?.focus();
      return;
    }

    if (!this._open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this._openDropdown();
      }
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
          this._onSelect(items[this._activeIndex], true);
        }
        break;
    }
  }

  render() {
    const title = this.field?.title ?? '';
    const placeholderFallback = title ? `Select ${title.toLowerCase()}` : 'Select an option';
    return html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${() => !this._open && this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel
          ? html`<span>${this._selectedLabel}</span>`
          : html`<span class="placeholder">${this.field?.placeholder || placeholderFallback}</span>`}
      </button>

      ${this._open ? html`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length
            ? this._filtered.map((opt, i) => html`
                <div class="option ${opt.value === this.value ? 'selected' : ''} ${i === this._activeIndex ? 'active' : ''}"
                  role="option" aria-selected=${opt.value === this.value}
                  @mousedown=${(e: Event) => { e.preventDefault(); this._onSelect(opt); }}
                  @mouseenter=${() => { this._activeIndex = i; }}>
                  ${opt.label}
                </div>`)
            : html`<div class="empty">No options</div>`}
        </div>
      ` : nothing}
    `;
  }
}

customElements.define('sfx-meta-select-field', SfxMetaSelectField);
