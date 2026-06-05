import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField } from './schema/schema.types';
import { isUnsupportedFieldType } from './schema/schema.types';

/**
 * Thin dispatcher that renders the correct field editor based on field.type.
 * All field-change / field-blur / field-escape events bubble up from the
 * child components automatically (they are bubbles + composed).
 */
export class SfxMetadataFieldEdit extends LitElement {
  static styles = css`
    :host { display: block; }
  `;

  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ type: Boolean }) disabled = false;

  render() {
    const f = this.field;
    const v = this.value;
    const d = this.disabled;

    if (isUnsupportedFieldType(f.type)) {
      return html`<sfx-meta-unsupported-field></sfx-meta-unsupported-field>`;
    }

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
        // Fallback to text field for unknown types
        return html`<sfx-meta-text-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-text-field>`;
    }
  }
}

customElements.define('sfx-metadata-field-edit', SfxMetadataFieldEdit);
