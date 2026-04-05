import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { metadataDropdownStyles } from '../metadata.styles';
import { MetadataFieldBase } from './field-base';

const OPTIONS = [
  { label: 'True', value: 'true' },
  { label: 'False', value: 'false' },
  { label: 'None', value: 'null' },
];

export class SfxMetaBooleanField extends MetadataFieldBase {
  static styles = [metadataDropdownStyles];

  @state() private _open = false;
  @state() private _activeIndex = -1;

  private _boundOutsideClick = this._onOutsideClick.bind(this);

  private get _currentLabel(): string {
    const v = String(this.value ?? 'null');
    return OPTIONS.find(o => o.value === v)?.label ?? '';
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this._boundOutsideClick);
  }

  private _openDropdown() {
    this._open = true;
    const v = String(this.value ?? 'null');
    this._activeIndex = Math.max(OPTIONS.findIndex(o => o.value === v), 0);
    document.addEventListener('mousedown', this._boundOutsideClick);
    this.updateComplete.then(() => {
      this.renderRoot.querySelector<HTMLElement>('.dropdown')?.focus();
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

  private _onSelect(opt: { label: string; value: string }, returnFocus = false) {
    this.value = opt.value;
    this._emit('field-change', opt.value);
    this._closeAndSubmit(returnFocus);
  }

  private _scrollActive() {
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('.option.active')?.scrollIntoView({ block: 'nearest' });
    });
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

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this._activeIndex = Math.min(this._activeIndex + 1, OPTIONS.length - 1);
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
        this._activeIndex = OPTIONS.length - 1;
        this._scrollActive();
        break;
      case 'Enter':
      case ' ':
        if (this._activeIndex >= 0 && this._activeIndex < OPTIONS.length) {
          e.preventDefault();
          this._onSelect(OPTIONS[this._activeIndex], true);
        }
        break;
    }
  }

  render() {
    const current = String(this.value ?? 'null');
    return html`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${() => !this._open && this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel
          ? html`<span>${this._currentLabel}</span>`
          : html`<span class="placeholder">Select...</span>`}
      </button>

      ${this._open ? html`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${OPTIONS.map((opt, i) => html`
            <div class="option ${opt.value === current ? 'selected' : ''} ${i === this._activeIndex ? 'active' : ''}"
              role="option" aria-selected=${opt.value === current}
              @mousedown=${(e: Event) => { e.preventDefault(); this._onSelect(opt); }}
              @mouseenter=${() => { this._activeIndex = i; }}>
              ${opt.label}
            </div>`)}
        </div>
      ` : nothing}
    `;
  }
}

customElements.define('sfx-meta-boolean-field', SfxMetaBooleanField);
