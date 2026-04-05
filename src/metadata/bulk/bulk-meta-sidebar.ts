import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataSchema, MetadataConfig } from '../schema/schema.types';
import { fieldTypeIcon } from '../field-type-icons';
import { bulkSidebarStyles } from './bulk-metadata.styles';

/**
 * Sidebar field navigator for the bulk metadata modal.
 * Shows fields in collapsible groups (all open by default).
 * Active field highlighted blue. Green dot on filled fields.
 */
export class SfxBulkMetaSidebar extends LitElement {
  static styles = [bulkSidebarStyles];

  @property({ attribute: false }) schema!: MetadataSchema;
  @property({ attribute: false }) activeFieldKey = '';
  @property({ attribute: false }) filledFields: Set<string> = new Set();
  @property({ attribute: false }) config: MetadataConfig | null = null;

  @state() private _collapsed: Set<string> = new Set();

  private _isRequired(field: { ckey: string; required: 0 | 1 }): boolean {
    if (this.config?.requiredFields?.includes(field.ckey)) return true;
    return field.required === 1;
  }

  private _toggleGroup(uuid: string) {
    const next = new Set(this._collapsed);
    if (next.has(uuid)) {
      next.delete(uuid);
    } else {
      next.add(uuid);
    }
    this._collapsed = next;
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
      ${this.schema.groups.map((group) => {
        const isOpen = !this._collapsed.has(group.uuid);
        return html`
          <button
            class="group-label"
            @click=${() => this._toggleGroup(group.uuid)}
            aria-expanded=${isOpen}
          >
            <span class="group-label-text">${group.name}</span>
            <svg class="group-chevron ${isOpen ? 'open' : ''}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${isOpen
            ? group.fields.map(
                (field) => html`
                  <button
                    class="field-item ${this.activeFieldKey === field.key ? 'active' : ''}"
                    @click=${() => this._onFieldClick(field.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${fieldTypeIcon(field.type)}</span>
                    <span class="field-name">${field.title}</span>
                    ${this.filledFields.has(field.key)
                      ? html`<span class="field-dot"></span>`
                      : nothing}
                    ${this._isRequired(field)
                      ? html`<span class="field-required" aria-hidden="true">*</span>`
                      : nothing}
                  </button>
                `,
              )
            : nothing}
        `;
      })}
    `;
  }
}

customElements.define('sfx-bulk-meta-sidebar', SfxBulkMetaSidebar);
