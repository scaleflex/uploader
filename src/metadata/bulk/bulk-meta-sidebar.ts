import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { MetadataSchema, MetadataConfig, MetadataField } from '../schema/schema.types';
import { isFieldRequired } from '../schema/required-fields';
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
  /** Required fields with at least one modifiable file missing a value.
      Drives the stronger-red `.unmet` styling on the asterisk. */
  @property({ attribute: false }) missingRequiredKeys: Set<string> = new Set();
  @property({ attribute: false }) config: MetadataConfig | null = null;

  @state() private _collapsed: Set<string> = new Set();
  /** Tracks the mobile breakpoint so collapsed groups don't hide fields
      on narrow viewports where the group-label toggle button is itself
      hidden (display: none). Without this a user who collapses a group
      on desktop and resizes to mobile ends up with fields unreachable. */
  @state() private _isNarrow = false;

  private _resizeTimer: ReturnType<typeof setTimeout> | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._updateNarrow();
    window.addEventListener('resize', this._onResize);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._onResize);
    if (this._resizeTimer) { clearTimeout(this._resizeTimer); this._resizeTimer = null; }
  }

  private _onResize = () => {
    if (this._resizeTimer) clearTimeout(this._resizeTimer);
    this._resizeTimer = setTimeout(this._updateNarrow, 100);
  };

  private _updateNarrow = () => {
    this._resizeTimer = null;
    const next = window.innerWidth <= 768;
    if (next !== this._isNarrow) this._isNarrow = next;
  };

  private _isRequired(field: MetadataField): boolean {
    return isFieldRequired(field, this.config ?? undefined);
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

  updated(changed: Map<string, unknown>) {
    super.updated?.(changed);
    if (!changed.has('activeFieldKey') || !this.activeFieldKey) return;
    const active = this.renderRoot?.querySelector(
      '.field-item.active',
    ) as HTMLElement | null;
    active?.scrollIntoView({ block: 'nearest' });
  }

  render() {
    if (!this.schema) return nothing;

    return html`
      ${this.schema.groups.map((group) => {
        // On mobile the group-label toggle button is hidden via CSS,
        // so collapsed state is unreachable — force open there.
        const isOpen = this._isNarrow || !this._collapsed.has(group.uuid);
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
                      ? html`<span
                          class=${classMap({
                            'field-required': true,
                            unmet: this.missingRequiredKeys.has(field.key),
                          })}
                          aria-hidden="true"
                        >*</span>`
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
