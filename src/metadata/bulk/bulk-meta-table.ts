import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import { bulkTableStyles } from './bulk-metadata.styles';

/**
 * Thin table container — maps files to `<sfx-bulk-meta-row>` elements.
 */
export class SfxBulkMetaTable extends LitElement {
  static styles = [bulkTableStyles];

  @property({ attribute: false }) files: UploadFile[] = [];
  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) staged: Map<string, Map<string, unknown>> = new Map();
  @property({ attribute: false }) selected: Set<string> = new Set();
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;

  private _getEffectiveValue(file: UploadFile): unknown {
    return this.staged.get(file.id)?.get(this.field.key) ?? file.meta[this.field.key];
  }

  render() {
    return html`
      ${this.files.map(
        (file) => html`
          <sfx-bulk-meta-row
            .file=${file}
            .field=${this.field}
            .value=${this._getEffectiveValue(file)}
            .selected=${this.selected.has(file.id)}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
          ></sfx-bulk-meta-row>
        `,
      )}
    `;
  }
}

customElements.define('sfx-bulk-meta-table', SfxBulkMetaTable);
