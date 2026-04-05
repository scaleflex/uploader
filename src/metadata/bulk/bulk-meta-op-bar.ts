import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig, MetadataFieldType } from '../schema/schema.types';
import { isEmpty } from '../schema/validation';
import {
  getAvailableOperations,
  type BulkOperation,
  type BulkOperationDef,
} from './bulk-operations';
import { bulkOpBarStyles } from './bulk-metadata.styles';

/**
 * Operation bar for bulk metadata editing.
 * Operation dropdown + value input + Apply button.
 */
export class SfxBulkMetaOpBar extends LitElement {
  static styles = [bulkOpBarStyles];

  @property({ attribute: false }) field!: MetadataField;
  @property({ attribute: false }) autocomplete: unknown;
  @property({ attribute: false }) config: MetadataConfig | null = null;
  @property({ type: Number }) selectedCount = 0;

  @state() private _operation: BulkOperation = 'SET';
  @state() private _value: unknown = undefined;
  @state() private _opDropdownOpen = false;

  private _availableOps: BulkOperationDef[] = [];

  private static _emptyValueForType(type: MetadataFieldType): unknown {
    switch (type) {
      case 'multi-select':
      case 'tags':
      case 'integer-list':
        return [];
      case 'boolean':
        return 'null';
      case 'geopoint':
        return { latitude: '', longitude: '' };
      default:
        return '';
    }
  }

  private get _effectiveValue(): unknown {
    return this._value ?? SfxBulkMetaOpBar._emptyValueForType(this.field?.type);
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('field') && this.field) {
      this._availableOps = getAvailableOperations(this.field.type);
      this._operation = 'SET';
      this._value = undefined;
    }
  }

  private _onOpSelect(op: BulkOperation) {
    this._operation = op;
    this._opDropdownOpen = false;
  }

  private _onOpToggle() {
    this._opDropdownOpen = !this._opDropdownOpen;
  }

  private _onOpDropdownClose = (e: MouseEvent) => {
    const path = e.composedPath();
    if (!path.includes(this)) {
      this._opDropdownOpen = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._onOpDropdownClose);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onOpDropdownClose);
  }

  /**
   * Intercept field-blur and field-change from the edit component.
   * Capture value locally in frontend format — don't propagate.
   */
  private _onFieldBlur = (e: CustomEvent) => {
    e.stopPropagation();
    this._value = e.detail.value;
  };

  private _onFieldChange = (e: CustomEvent) => {
    e.stopPropagation();
    this._value = e.detail.value;
  };

  private _onFieldEscape = (e: CustomEvent) => {
    // Prevent modal from closing when user presses Escape in the field
    e.stopPropagation();
  };

  private _onApply() {
    if (this._isApplyDisabled) return;

    this.dispatchEvent(
      new CustomEvent('bulk-apply', {
        detail: {
          operation: this._operation,
          value: this._value,
        },
        bubbles: true,
        composed: true,
      }),
    );

    // Reset value — _effectiveValue returns type-appropriate empty default
    this._value = undefined;
  }

  private get _isApplyDisabled(): boolean {
    if (this.selectedCount === 0) return true;
    // For DELETE, allow even empty value (delete all)
    if (this._operation === 'DELETE') return false;
    return isEmpty(this._value);
  }

  render() {
    if (!this.field) return nothing;

    const showDropdown = this._availableOps.length > 1;
    const currentOp = this._availableOps.find((o) => o.key === this._operation);

    return html`
      <div class="op-bar">
        <span class="op-label">Operation:</span>

        ${showDropdown
          ? html`
              <div class="op-dropdown-wrap">
                <button class="op-trigger" @click=${this._onOpToggle}>
                  <span>${currentOp?.label ?? 'Set'}</span>
                  <span class="op-arrow">\u25BE</span>
                </button>
                ${this._opDropdownOpen
                  ? html`
                      <div class="op-menu">
                        ${this._availableOps.map(
                          (op) => html`
                            <button
                              class="op-option ${op.key === this._operation ? 'active' : ''}"
                              @click=${() => this._onOpSelect(op.key)}
                            >
                              ${op.label}
                            </button>
                          `,
                        )}
                      </div>
                    `
                  : nothing}
              </div>
            `
          : html`<span class="op-label">${currentOp?.label ?? 'Set'}</span>`}

        <div
          class="op-value"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @field-escape=${this._onFieldEscape}
        >
          <sfx-metadata-field-edit
            .field=${this.field}
            .value=${this._effectiveValue}
            .autocomplete=${this.autocomplete}
          ></sfx-metadata-field-edit>
        </div>

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `;
  }
}

customElements.define('sfx-bulk-meta-op-bar', SfxBulkMetaOpBar);
