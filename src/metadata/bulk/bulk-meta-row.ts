import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import type { PendingOp } from './bulk-operations';
import { validateField } from '../schema/validation';
import { mapValueToBackend, mapValueFromBackend } from '../schema/value-transforms';
import { applyBulkOperation } from './bulk-operations';
import { formatFileSize } from '../../utils/file-utils';
import { bulkRowStyles } from './bulk-metadata.styles';
import './bulk-meta-diff-view';

/**
 * Per-file row in the bulk metadata table.
 * Shows checkbox, thumbnail, file name, size, and the active field value.
 *
 * When a pending bulk operation exists (user typing in op-bar before Apply),
 * shows a live diff preview of what the operation would produce.
 * Otherwise always shows the editable field input.
 */
export class SfxBulkMetaRow extends LitElement {
  static styles = [bulkRowStyles];

  @property({ attribute: false }) file!: UploadFile;
  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) value: unknown; // backend format (staged)
  @property({ type: Boolean }) selected = false;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  /** Pending bulk operation from op-bar (null when nothing pending or row unselected). */
  @property({ attribute: false }) pendingOp: PendingOp | null = null;

  @state() private _error: string | null = null;

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('field')) {
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

    // Skip dispatch if value hasn't changed — avoids unnecessary staged map
    // mutations and re-renders of all rows on every blur.
    if (JSON.stringify(backendValue) === JSON.stringify(this.value)) return;

    this.dispatchEvent(
      new CustomEvent('row-field-change', {
        detail: { fileId: this.file.id, value: backendValue },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private _getExtension(name: string): string {
    const idx = name.lastIndexOf('.');
    return idx > 0 ? name.slice(idx + 1).toUpperCase() : '?';
  }

  /**
   * Compute what the value would become if the pending bulk operation were applied.
   * Returns null if there's no pending op or the preview equals the current value.
   */
  private _computePreview(): unknown | null {
    if (!this.pendingOp) return null;

    const { operation, value: frontendValue } = this.pendingOp;
    const language = this.config?.language;

    const fakeFile = {
      meta: { ...this.file.meta, [this.field.key]: this.value },
    } as UploadFile;

    const backendValue = mapValueToBackend(
      this.field,
      frontendValue,
      fakeFile,
      language,
    );

    const result = applyBulkOperation(
      operation,
      this.value,
      backendValue,
      this.field.type,
    );

    // No visible change — don't show preview
    if (JSON.stringify(result) === JSON.stringify(this.value)) return null;

    return result;
  }

  render() {
    const f = this.file;
    const preview = this._computePreview();
    const showPreview = preview !== null;

    return html`
      <div class="row ${showPreview ? 'row--changed' : ''}">
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
          @field-blur=${this._onFieldBlur}
        >
          ${showPreview
            ? html`
                <sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${preview}
                  .config=${this.config}
                ></sfx-bulk-meta-diff-view>
              `
            : html`
                <div class="row-field-edit">
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${mapValueFromBackend(this.field, this.value, this.config?.language)}
                    .autocomplete=${this.autocomplete}
                  ></sfx-metadata-field-edit>
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
