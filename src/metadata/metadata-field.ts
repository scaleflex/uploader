import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type {
  MetadataField,
  MetadataConfig,
  RegionalVariantsGroup,
} from './schema/schema.types';
import { isUnsupportedField } from './schema/schema.types';
import { validateField } from './schema/validation';
import { isFieldRequired } from './schema/required-fields';
import { mapValueToBackend, mapValueFromBackend } from './schema/value-transforms';
import { metadataFieldStyles } from './metadata.styles';
import type { TaxonodeEntry } from './taxonomies/taxonomies.types';
import type { UltratagsValueItem } from './ultratags/ultratags.types';
import type { UploadFile } from '../store/store.types';
import {
  resolveFieldRegionalKey,
  getFieldRegionalVariantHint,
} from './regional-variants/resolve';

export class SfxMetadataFieldEl extends LitElement {
  static styles = [metadataFieldStyles];

  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ attribute: false }) taxonomyService: unknown;
  @property({ attribute: false }) taxonomyEntry: TaxonodeEntry | null = null;
  @property({ attribute: false }) ultratags: unknown;
  @property({ attribute: false }) defaultLanguage?: string;
  @property({ attribute: false }) ultratagsRestrictToItems: UltratagsValueItem[] | null = null;
  /**
   * Schema's regional-variants groups, used to render the per-field hint
   * label ("Languages: English"). Optional — when omitted, no hint is shown.
   */
  @property({ attribute: false }) regionalVariantsGroups: RegionalVariantsGroup[] = [];
  @property({ type: Boolean }) disabled = false;

  @state() private _error: string | null = null;

  /** Flag to prevent re-entry when we re-dispatch field-blur. */
  private _dispatching = false;

  private get _isRequired(): boolean {
    return isFieldRequired(this.field, this.config ?? undefined);
  }

  private _onFieldBlur(e: CustomEvent) {
    const { key, value } = e.detail;

    const error = validateField(this.field, value, this.config ?? undefined);
    if (error) {
      this._error = error;
      return;
    }

    this._error = null;

    // For regional-variant fields, `this.value` already holds the full
    // `{en: …, fr: …}` map; pass it via a fake file so `mapValueToBackend`
    // can spread the other-language slots back onto the saved value instead
    // of zapping them. Mirrors the bulk-meta-row path.
    const fakeFile = { meta: { [this.field.key]: this.value } } as unknown as UploadFile;
    const regionalKey = resolveFieldRegionalKey(this.field, this.config);
    const transformed = mapValueToBackend(this.field, value, fakeFile, regionalKey);

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
          .language=${this.config?.language}
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
        return html`<sfx-meta-text-field .field=${f} .value=${v} ?disabled=${d}></sfx-meta-text-field>`;
    }
  }

  render() {
    const f = this.field;
    if (!f) return nothing;

    const regionalKey = resolveFieldRegionalKey(f, this.config);
    const displayValue = mapValueFromBackend(f, this.value, regionalKey);
    const hint = getFieldRegionalVariantHint(
      f,
      this.regionalVariantsGroups,
      this.config?.regionalFilters,
      this.config?.language,
    );
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
          ${hint
            ? html`<div class="field-regional-hint" title=${hint}>${hint}</div>`
            : nothing}
          ${this._error ? html`<div class="field-error" id="error-${f.key}" role="alert">${this._error}</div>` : nothing}
        </div>
      </div>
    `;
  }
}

customElements.define('sfx-metadata-field', SfxMetadataFieldEl);
