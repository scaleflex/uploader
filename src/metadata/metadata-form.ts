import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataSchema, MetadataConfig, MetadataGroup } from './schema/schema.types';

export class SfxMetadataForm extends LitElement {
  static styles = css`
    :host { display: block; }

    .group {
      padding-bottom: 4px;
    }
    .group + .group {
      border-top: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 16px 0;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
    }
    .group-header:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
      border-radius: 4px;
    }

    .chevron {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }
    .chevron.open {
      transform: rotate(180deg);
    }

    .group-content {
      padding: 0 0 4px;
    }

    .empty {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
  `;

  @property({ attribute: false }) schema: MetadataSchema | null = null;
  @property({ attribute: false }) meta: Record<string, unknown> = {};
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ type: Boolean }) disabled = false;

  @state() private _collapsed: Set<string> = new Set();

  private _toggleGroup(uuid: string) {
    const next = new Set(this._collapsed);
    if (next.has(uuid)) {
      next.delete(uuid);
    } else {
      next.add(uuid);
    }
    this._collapsed = next;
  }

  private _renderGroup(group: MetadataGroup) {
    const isOpen = !this._collapsed.has(group.uuid);

    return html`
      <div class="group">
        <button class="group-header"
          @click=${() => this._toggleGroup(group.uuid)}
          aria-expanded=${isOpen}>
          <span>${group.name}</span>
          <svg class="chevron ${isOpen ? 'open' : ''}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${isOpen
          ? html`
              <div class="group-content">
                ${group.fields.map(
                  f => html`
                    <sfx-metadata-field
                      .field=${f}
                      .value=${this.meta[f.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `,
                )}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  render() {
    if (!this.schema || this.schema.groups.length === 0) {
      return html`<div class="empty">No metadata fields configured</div>`;
    }

    return html`
      ${this.schema.groups.map(g => this._renderGroup(g))}
    `;
  }
}

customElements.define('sfx-metadata-form', SfxMetadataForm);
