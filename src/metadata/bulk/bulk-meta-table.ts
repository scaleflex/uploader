import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import type { PendingOp } from './bulk-operations';
import { bulkTableStyles } from './bulk-metadata.styles';
import type { TaxonodeEntry } from '../taxonomies/taxonomies.types';

/**
 * Thin table container — maps files to `<sfx-bulk-meta-row>` elements.
 */
export class SfxBulkMetaTable extends LitElement {
  static styles = [bulkTableStyles];

  @property({ attribute: false }) files: UploadFile[] = [];
  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) staged: Map<string, Map<string, unknown>> = new Map();
  @property({ attribute: false }) stagedTaxonodes: Map<string, Map<string, TaxonodeEntry | null>> = new Map();
  @property({ attribute: false }) selected: Set<string> = new Set();
  @property({ attribute: false }) pendingOp: PendingOp | null = null;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ attribute: false }) taxonomyService: unknown;
  @property({ attribute: false }) ultratags: unknown;
  @property({ attribute: false }) defaultLanguage?: string;

  private _getEffectiveValue(file: UploadFile): unknown {
    const fileMap = this.staged.get(file.id);
    if (fileMap?.has(this.field.key)) return fileMap.get(this.field.key);
    return file.meta[this.field.key];
  }

  private _getTaxonodeEntry(file: UploadFile): TaxonodeEntry | null {
    const fileMap = this.stagedTaxonodes.get(file.id);
    if (fileMap?.has(this.field.key)) return fileMap.get(this.field.key) ?? null;
    return file.taxonodes?.[this.field.key] ?? null;
  }

  render() {
    return html`
      ${this.files.map(
        (file) => html`
          <sfx-bulk-meta-row
            .file=${file}
            .field=${this.field}
            .value=${this._getEffectiveValue(file)}
            .taxonomyEntry=${this._getTaxonodeEntry(file)}
            .selected=${this.selected.has(file.id)}
            .pendingOp=${this.pendingOp}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
            .taxonomyService=${this.taxonomyService}
            .ultratags=${this.ultratags}
            .defaultLanguage=${this.defaultLanguage}
          ></sfx-bulk-meta-row>
        `,
      )}
    `;
  }
}

customElements.define('sfx-bulk-meta-table', SfxBulkMetaTable);
