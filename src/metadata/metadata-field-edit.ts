import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField } from './schema/schema.types';
import { isUnsupportedField } from './schema/schema.types';
import type { TaxonodeEntry } from './taxonomies/taxonomies.types';
import type { UltratagsValueItem } from './ultratags/ultratags.types';

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
  @property({ attribute: false }) taxonomyService: unknown;
  @property({ attribute: false }) taxonomyEntry: TaxonodeEntry | null = null;
  @property({ attribute: false }) ultratags: unknown;
  @property({ attribute: false }) language?: string;
  @property({ attribute: false }) defaultLanguage?: string;
  @property({ attribute: false }) ultratagsRestrictToItems: UltratagsValueItem[] | null = null;
  @property({ type: Boolean }) disabled = false;

  render() {
    const f = this.field;
    const v = this.value;
    const d = this.disabled;

    if (isUnsupportedField(f)) {
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

      case 'ultratags':
        return html`<sfx-meta-ultratags-field
          .field=${f} .value=${v}
          .ultratags=${this.ultratags}
          .language=${this.language}
          .defaultLanguage=${this.defaultLanguage}
          .restrictToItems=${this.ultratagsRestrictToItems ?? undefined}
          ?disabled=${d}></sfx-meta-ultratags-field>`;

      case 'taxonomy-node':
        return html`<sfx-meta-taxonomy-node-field .field=${f} .value=${v} .taxonomyService=${this.taxonomyService} .entry=${this.taxonomyEntry} ?disabled=${d}></sfx-meta-taxonomy-node-field>`;

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
