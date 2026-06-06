import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig } from '../schema/schema.types';
import { computeFieldDiff, type FieldDiff } from './diff-utils';
import { bulkDiffStyles } from './bulk-metadata.styles';
import type { TaxonodeEntry } from '../taxonomies/taxonomies.types';

/**
 * Read-only diff view showing what a bulk operation would change.
 * Renders color-coded chips for array fields, "old → new" for scalars.
 */
export class SfxBulkMetaDiffView extends LitElement {
  static styles = [bulkDiffStyles];

  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) oldValue: unknown;
  @property({ attribute: false }) newValue: unknown;
  @property({ attribute: false }) oldTaxonomyEntry: TaxonodeEntry | null = null;
  @property({ attribute: false }) newTaxonomyEntry: TaxonodeEntry | null = null;
  @property({ attribute: false }) config: MetadataConfig | null = null;

  private _renderArrayDiff(diff: FieldDiff & { kind: 'array' }) {
    return html`
      <div class="diff-wrap" aria-label="Bulk operation preview">
        ${diff.items.length === 0
          ? html`<span class="diff-chip diff-chip--kept diff-chip--empty">\u2014</span>`
          : diff.items.map(
              (item) => html`
                <span
                  class="diff-chip diff-chip--${item.state}"
                  aria-label="${item.state === 'added' ? 'Added' : item.state === 'removed' ? 'Removed' : 'Kept'}: ${item.label}"
                >
                  ${item.state === 'removed'
                    ? html`<s>${item.label}</s>`
                    : item.label}
                </span>
              `,
            )}
      </div>
    `;
  }

  private _renderScalarDiff(diff: FieldDiff & { kind: 'scalar' }) {
    const srText = `Will change from ${diff.oldEmpty ? 'empty' : diff.oldDisplay} to ${diff.newEmpty ? 'empty' : diff.newDisplay}`;

    // Show only the resulting value (no strikethrough on old). When the
    // result is empty, render an empty cell — no em-dash, no struck-through
    // old value. The screen-reader text still announces the change.
    return html`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${srText}</span>
        ${!diff.newEmpty
          ? html`<span class="diff-new" aria-hidden="true">${diff.newDisplay}</span>`
          : nothing}
      </div>
    `;
  }

  private _renderTaxonomyScalar(): unknown {
    const newPath = this.newTaxonomyEntry?.path ?? '';
    const oldPath = this.oldTaxonomyEntry?.path ?? '';
    const oldEmpty = !oldPath;
    const newEmpty = !newPath;
    const srText = `Will change from ${oldEmpty ? 'empty' : oldPath} to ${newEmpty ? 'empty' : newPath}`;
    return html`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${srText}</span>
        ${!newEmpty
          ? html`<span class="diff-new" aria-hidden="true">${newPath}</span>`
          : nothing}
      </div>
    `;
  }

  render() {
    if (!this.field) return nothing;

    if (this.field.type === 'taxonomy-node') {
      return this._renderTaxonomyScalar();
    }

    const diff = computeFieldDiff(
      this.field,
      this.oldValue,
      this.newValue,
      this.config,
    );

    if (diff.kind === 'array') return this._renderArrayDiff(diff);
    return this._renderScalarDiff(diff);
  }
}

customElements.define('sfx-bulk-meta-diff-view', SfxBulkMetaDiffView);
