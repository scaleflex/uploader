import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { metadataInputStyles, metadataFieldStyles } from '../metadata/metadata.styles';
import type { TFunction } from '../store/store.types';
import type { Product, ProductFieldKey } from './product.types';
import {
  validateProductRef,
  validateProductPosition,
} from './product.constants';

const fallbackT: TFunction = (k, d) => (typeof d === 'string' ? d : k);

/**
 * Hardcoded "Product" section with two fields: ref + position.
 * Styled to match `<sfx-metadata-form>` collapsible groups.
 *
 * Emits `product-blur` with `{ key: 'ref' | 'position', value }` on blur
 * when validation passes. Empty values are emitted as `undefined` so the host
 * can clear a previously-set field. Invalid values are NOT emitted — the form
 * surfaces the error inline until the user corrects it.
 */
export class SfxProductFieldsForm extends LitElement {
  static styles = [
    metadataInputStyles,
    metadataFieldStyles,
    css`
      :host { display: block; }

      .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 48px;
        padding: 0 16px;
        box-sizing: border-box;
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        color: var(--sfx-up-text, #1e293b);
        transition: background-color 0.12s ease;
      }
      .group-header:hover {
        background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
      }
      .group-header:focus-visible {
        outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: 2px;
        border-radius: 4px;
      }
      .chevron {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        color: var(--sfx-up-text-muted, #94a3b8);
        transition: transform 0.18s ease;
      }
      .chevron.open { transform: rotate(180deg); }
      .group-content { padding: 0 16px 8px; }
    `,
  ];

  @property({ attribute: false }) product: Product = {};
  @property({ type: Boolean }) disabled = false;
  @property({ attribute: false }) t: TFunction = fallbackT;

  @state() private _collapsed = false;
  @state() private _errors: Partial<Record<ProductFieldKey, string>> = {};

  willUpdate(changed: Map<string, unknown>) {
    // When the parent swaps in a different file's product object (e.g. the
    // user paged to the next file in the preview sidebar), drop stale errors
    // from the previous file so the next file isn't shown red for free.
    if (changed.has('product')) {
      this._errors = {};
    }
  }

  private _toggle() {
    this._collapsed = !this._collapsed;
  }

  private _emit(key: ProductFieldKey, value: string | number | undefined) {
    this.dispatchEvent(
      new CustomEvent('product-blur', {
        detail: { key, value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _clearError(key: ProductFieldKey) {
    if (!this._errors[key]) return;
    const next = { ...this._errors };
    delete next[key];
    this._errors = next;
  }

  private _onRefInput() {
    // Hide stale error as soon as the user starts typing.
    this._clearError('ref');
  }

  private _onRefBlur(e: Event) {
    const raw = (e.target as HTMLInputElement).value;
    const errKey = validateProductRef(raw);
    if (errKey) {
      this._errors = { ...this._errors, ref: errKey };
      return;
    }
    this._clearError('ref');
    this._emit('ref', raw === '' ? undefined : raw);
  }

  private _onPositionInput() {
    this._clearError('position');
  }

  private _onPositionBlur(e: Event) {
    const raw = (e.target as HTMLInputElement).value;
    const errKey = validateProductPosition(raw);
    if (errKey) {
      this._errors = { ...this._errors, position: errKey };
      return;
    }
    this._clearError('position');
    if (raw === '' || raw == null) {
      this._emit('position', undefined);
    } else {
      this._emit('position', Number(raw));
    }
  }

  private _onKeydown(e: KeyboardEvent) {
    // Enter commits via blur; Escape reverts the in-progress edit.
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur();
    } else if (e.key === 'Escape') {
      const el = e.target as HTMLInputElement;
      const key = el.dataset.key as ProductFieldKey | undefined;
      if (key === 'ref') el.value = this.product?.ref ?? '';
      if (key === 'position') {
        el.value = this.product?.position == null ? '' : String(this.product.position);
      }
      if (key) this._clearError(key);
      el.blur();
    }
  }

  private _renderRow(
    key: ProductFieldKey,
    label: string,
    inputEl: ReturnType<typeof html>,
  ) {
    const errKey = this._errors[key];
    const errorText = errKey ? this.t(errKey, errKey) : '';
    return html`
      <div class="field-row">
        <div class="field-label" id="label-product-${key}">
          <span class="field-label-text">${label}</span>
        </div>
        <div class="field-content">
          ${inputEl}
          ${errKey
            ? html`<div class="field-error" role="alert">${errorText}</div>`
            : nothing}
        </div>
      </div>
    `;
  }

  render() {
    const isOpen = !this._collapsed;
    const ref = this.product?.ref ?? '';
    const position =
      this.product?.position == null ? '' : String(this.product.position);

    return html`
      <div class="group">
        <button
          class="group-header"
          @click=${this._toggle}
          aria-expanded=${isOpen}
        >
          <span>${this.t('productFieldsLabel', 'Product')}</span>
          <svg class="chevron ${isOpen ? 'open' : ''}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${isOpen
          ? html`
              <div class="group-content">
                ${this._renderRow(
                  'ref',
                  this.t('productRefLabel', 'Product reference'),
                  html`<input
                    type="text"
                    data-key="ref"
                    .value=${ref}
                    placeholder=${this.t('productRefPlaceholder', 'e.g. SKU-12345')}
                    ?disabled=${this.disabled}
                    @input=${this._onRefInput}
                    @blur=${this._onRefBlur}
                    @keydown=${this._onKeydown}
                  />`,
                )}
                ${this._renderRow(
                  'position',
                  this.t('productPositionLabel', 'Position'),
                  html`<input
                    type="number"
                    step="1"
                    inputmode="numeric"
                    data-key="position"
                    .value=${position}
                    placeholder=${this.t('productPositionPlaceholder', '0')}
                    ?disabled=${this.disabled}
                    @input=${this._onPositionInput}
                    @blur=${this._onPositionBlur}
                    @keydown=${this._onKeydown}
                  />`,
                )}
              </div>
            `
          : nothing}
      </div>
    `;
  }
}

customElements.define('sfx-product-fields-form', SfxProductFieldsForm);
