import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import { validateField } from '../schema/validation';
import { mapValueToBackend, mapValueFromBackend } from '../schema/value-transforms';
import { formatFileSize, getFileTypeIconUrl, getDefaultFileTypeIconUrl } from '../../utils/file-utils';
import { computeBulkResult, type PendingOp } from './bulk-operations';
import { bulkRowStyles } from './bulk-metadata.styles';
import type { TaxonodeEntry } from '../taxonomies/taxonomies.types';
import { resolveFieldRegionalKey } from '../regional-variants/resolve';

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
  @property({ attribute: false }) taxonomyEntry: TaxonodeEntry | null = null;
  @property({ type: Boolean }) selected = false;
  @property({ attribute: false }) pendingOp: PendingOp | null = null;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ attribute: false }) taxonomyService: unknown;
  @property({ attribute: false }) ultratags: unknown;
  @property({ attribute: false }) defaultLanguage?: string;

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
      resolveFieldRegionalKey(this.field, this.config),
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

  private _onTaxonomyEntryChange = (
    e: CustomEvent<{ key: string; entry: TaxonodeEntry | null }>,
  ) => {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('row-taxonomy-entry', {
        detail: { fileId: this.file.id, fieldKey: e.detail.key, entry: e.detail.entry },
        bubbles: true,
        composed: true,
      }),
    );
  };

  /** Compute what the value would become if the pending op were applied. */
  private _computePreviewValue(): unknown {
    const op = this.pendingOp;
    if (!op || !this.field) return this.value;
    return computeBulkResult(
      this.field,
      this.value,
      op.value,
      op.operation,
      resolveFieldRegionalKey(this.field, this.config),
    );
  }

  private _getExtension(name: string): string {
    const idx = name.lastIndexOf('.');
    return idx > 0 ? name.slice(idx + 1).toUpperCase() : '?';
  }

  render() {
    const f = this.file;

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
          : html`<img class="row-thumb row-thumb-fallback"
              src=${getFileTypeIconUrl(this._getExtension(f.name))}
              alt="${this._getExtension(f.name)} file"
              @error=${(e: Event) => {
                const img = e.target as HTMLImageElement;
                const fallback = getDefaultFileTypeIconUrl();
                if (!img.dataset.fallback && img.src !== fallback) {
                  img.dataset.fallback = '1';
                  img.src = fallback;
                }
              }}
            />`}

        <div class="row-name" title=${f.name}>${f.name}</div>
        <div class="row-size">${f.size ? formatFileSize(f.size) : '\u2014'}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
          @taxonomy-entry-change=${this._onTaxonomyEntryChange}
        >
          ${this.pendingOp && this.selected
            ? html`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .oldTaxonomyEntry=${this.file.taxonodes?.[this.field.key] ?? null}
                .newTaxonomyEntry=${this.taxonomyEntry}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`
            : html`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${mapValueFromBackend(this.field, this.value, resolveFieldRegionalKey(this.field, this.config))}
                  .autocomplete=${this.autocomplete}
                  .taxonomyService=${this.taxonomyService}
                  .taxonomyEntry=${this.taxonomyEntry}
                  .ultratags=${this.ultratags}
                  .language=${this.config?.language}
                  .defaultLanguage=${this.defaultLanguage}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error
                ? html`<div class="row-error" role="alert">${this._error}</div>`
                : nothing}`}
        </div>
      </div>
    `;
  }
}

customElements.define('sfx-bulk-meta-row', SfxBulkMetaRow);
