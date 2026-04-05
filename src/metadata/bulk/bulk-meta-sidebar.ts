import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import type { MetadataSchema, MetadataConfig } from '../schema/schema.types';
import { bulkSidebarStyles } from './bulk-metadata.styles';

/**
 * Sidebar field navigator for the bulk metadata modal.
 * Shows fields grouped by schema groups. Active field highlighted blue.
 * Green dot on filled fields. Red * on required fields.
 */
export class SfxBulkMetaSidebar extends LitElement {
  static styles = [bulkSidebarStyles];

  @property({ attribute: false }) schema!: MetadataSchema;
  @property({ attribute: false }) activeFieldKey = '';
  @property({ attribute: false }) filledFields: Set<string> = new Set();
  @property({ attribute: false }) config: MetadataConfig | null = null;

  private _isRequired(field: { ckey: string; required: 0 | 1 }): boolean {
    if (this.config?.requiredFields?.includes(field.ckey)) return true;
    return field.required === 1;
  }

  private _onFieldClick(fieldKey: string) {
    this.dispatchEvent(
      new CustomEvent('field-select', {
        detail: { fieldKey },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    if (!this.schema) return nothing;

    return html`
      ${this.schema.groups.map(
        (group) => html`
          <div class="group-label">${group.name}</div>
          ${group.fields.map(
            (field) => html`
              <button
                class="field-item ${this.activeFieldKey === field.key ? 'active' : ''}"
                @click=${() => this._onFieldClick(field.key)}
              >
                ${this.filledFields.has(field.key)
                  ? html`<span class="field-dot"></span>`
                  : nothing}
                <span class="field-name">${field.title}</span>
                ${this._isRequired(field)
                  ? html`<span class="field-required" aria-hidden="true">*</span>`
                  : nothing}
              </button>
            `,
          )}
        `,
      )}
    `;
  }
}

customElements.define('sfx-bulk-meta-sidebar', SfxBulkMetaSidebar);
