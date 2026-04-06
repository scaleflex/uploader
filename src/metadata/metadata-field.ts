import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from './schema/schema.types';
import { validateField } from './schema/validation';
import { mapValueToBackend, mapValueFromBackend } from './schema/value-transforms';
import { metadataFieldStyles } from './metadata.styles';

export class SfxMetadataFieldEl extends LitElement {
  static styles = [metadataFieldStyles];

  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ type: Boolean }) disabled = false;

  @state() private _error: string | null = null;

  /** Flag to prevent re-entry when we re-dispatch field-blur. */
  private _dispatching = false;

  private get _isRequired(): boolean {
    if (this.config?.requiredFields?.includes(this.field.ckey)) return true;
    return this.field.required === 1;
  }

  private _onFieldBlur(e: CustomEvent) {
    const { key, value } = e.detail;

    const error = validateField(this.field, value, this.config ?? undefined);
    if (error) {
      this._error = error;
      return;
    }

    this._error = null;

    const transformed = mapValueToBackend(this.field, value, undefined, this.config?.language);

    this._dispatching = true;
    this.dispatchEvent(
      new CustomEvent('field-blur', {
        detail: { key, value: transformed },
        bubbles: true,
        composed: true,
      }),
    );
    this._dispatching = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('field-blur', this._handleChildBlur as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('field-blur', this._handleChildBlur as EventListener);
  }

  private _handleChildBlur = (e: Event) => {
    if (this._dispatching) return;
    e.stopPropagation();
    this._onFieldBlur(e as CustomEvent);
  };

  /** Render the correct field editor based on field.type. */
  private _renderField(f: MetadataField, v: unknown) {
    const d = this.disabled;
    switch (f.type) {
      case 'text':
      case 'attachment-uri':
        return html`<sfx-meta-text-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-text-field>`;
      case 'textarea':
        return html`<sfx-meta-textarea-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-textarea-field>`;
      case 'select-one':
        return html`<sfx-meta-select-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-select-field>`;
      case 'multi-select':
        return html`<sfx-meta-multi-select-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-multi-select-field>`;
      case 'tags':
        return html`<sfx-meta-tags-field .field=${f} .value=${v} .autocomplete=${this.autocomplete} ?disabled=${d}></sfx-meta-tags-field>`;
      case 'boolean':
        return html`<sfx-meta-boolean-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-boolean-field>`;
      case 'numeric':
      case 'decimal2':
        return html`<sfx-meta-number-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-number-field>`;
      case 'date':
        return html`<sfx-meta-date-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-date-field>`;
      case 'geopoint':
        return html`<sfx-meta-geo-point-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-geo-point-field>`;
      default:
        return html`<sfx-meta-text-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-text-field>`;
    }
  }

  render() {
    const f = this.field;
    if (!f) return nothing;

    const displayValue = mapValueFromBackend(f, this.value, this.config?.language);
    const isTextarea = f.type === 'textarea';
    const rowClass = isTextarea ? 'field-row field-row--top' : 'field-row';

    return html`
      <div class=${rowClass} aria-required=${this._isRequired ? 'true' : 'false'}>
        <div class="field-label" id="label-${f.key}">
          <span class="field-label-text">${f.title}</span>
          ${this._isRequired ? html`<span class="field-required" aria-hidden="true">*</span>` : nothing}
        </div>
        <div class="field-content">
          ${this._renderField(f, displayValue)}
          ${this._error ? html`<div class="field-error" id="error-${f.key}" role="alert">${this._error}</div>` : nothing}
        </div>
      </div>
    `;
  }
}

customElements.define('sfx-metadata-field', SfxMetadataFieldEl);
