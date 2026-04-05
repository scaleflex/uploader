import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import { validateField } from '../schema/validation';
import { mapValueToBackend, mapValueFromBackend } from '../schema/value-transforms';
import { formatFileSize } from '../../utils/file-utils';
import { bulkRowStyles } from './bulk-metadata.styles';

/**
 * Per-file row in the bulk metadata table.
 * Shows checkbox, thumbnail, file name, size, and the active field value.
 * Click on the value cell to enter edit mode.
 */
export class SfxBulkMetaRow extends LitElement {
  static styles = [bulkRowStyles];

  @property({ attribute: false }) file!: UploadFile;
  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown; // backend format
  @property({ type: Boolean }) selected = false;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;

  @state() private _editing = false;
  @state() private _error: string | null = null;

  willUpdate(changed: Map<string, unknown>) {
    // Reset edit mode when the active field changes (sidebar navigation)
    if (changed.has('field')) {
      this._editing = false;
      this._error = null;
    }
  }

  private _onCheckboxChange() {
    this.dispatchEvent(
      new CustomEvent('row-toggle', {
        detail: { fileId: this.file.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onValueClick() {
    if (!this._editing) this._editing = true;
  }

  private _onFieldBlur = (e: CustomEvent) => {
    e.stopPropagation();
    const { value } = e.detail;

    const error = validateField(this.field, value, this.config ?? undefined);
    if (error) {
      this._error = error;
      return;
    }
    this._error = null;

    // Use staged value (this.value) in fakeFile so mapValueToBackend
    // preserves other regional variant languages from the latest staged state,
    // not the original file.meta which may be stale after bulk apply.
    const fakeFile = {
      meta: { ...this.file.meta, [this.field.key]: this.value },
    } as UploadFile;

    const backendValue = mapValueToBackend(
      this.field,
      value,
      fakeFile,
      this.config?.language,
    );

    this._editing = false;
    this.dispatchEvent(
      new CustomEvent('row-field-change', {
        detail: { fileId: this.file.id, value: backendValue },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _onFieldEscape = (e: CustomEvent) => {
    e.stopPropagation();
    this._editing = false;
    this._error = null;
  };

  private _getExtension(name: string): string {
    const idx = name.lastIndexOf('.');
    return idx > 0 ? name.slice(idx + 1).toUpperCase() : '?';
  }

  render() {
    const f = this.file;
    const displayValue = mapValueFromBackend(
      this.field,
      this.value,
      this.config?.language,
    );

    return html`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${f.previewUrl
          ? html`<img class="row-thumb" src=${f.previewUrl} alt="" />`
          : html`<div class="row-thumb-placeholder">${this._getExtension(f.name)}</div>`}

        <div class="row-name" title=${f.name}>${f.name}</div>
        <div class="row-size">${f.size ? formatFileSize(f.size) : '\u2014'}</div>

        <div
          class="row-field"
          @click=${this._onValueClick}
          @field-blur=${this._onFieldBlur}
          @field-escape=${this._onFieldEscape}
        >
          ${this._editing
            ? html`
                <div class="row-field-edit">
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${displayValue}
                    .autocomplete=${this.autocomplete}
                  ></sfx-metadata-field-edit>
                </div>
              `
            : html`
                <div class="row-field-view">
                  <sfx-metadata-field-view
                    .field=${this.field}
                    .value=${displayValue}
                  ></sfx-metadata-field-view>
                </div>
              `}
          ${this._error
            ? html`<div class="row-error" role="alert">${this._error}</div>`
            : nothing}
        </div>
      </div>
    `;
  }
}

customElements.define('sfx-bulk-meta-row', SfxBulkMetaRow);
