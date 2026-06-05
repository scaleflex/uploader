import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { MetadataField, MetadataConfig, MetadataFieldType } from '../schema/schema.types';
import { isUnsupportedField } from '../schema/schema.types';
import { UNSUPPORTED_FIELD_MESSAGE, unsupportedLockIcon } from '../fields/unsupported-field';
import { isEmpty } from '../schema/validation';
import {
  getAvailableOperations,
  isValueRequiredForPreview,
  ARRAY_TYPES,
  TEXT_TYPES,
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
      case 'asset-attachments':
      case 'ultratags':
      case 'taxonomy-node':
        // Unsupported types never reach an editor; the value is irrelevant.
        return null;
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
      // Emit after reset so modal clears preview
      this._emitPendingChange();
    }
  }

  private _onOpSelect(op: BulkOperation) {
    this._operation = op;
    this._opDropdownOpen = false;
    this._emitPendingChange();
  }

  private _onOpToggle() {
    this._opDropdownOpen = !this._opDropdownOpen;
  }

  private _onOpDropdownClose = (e: MouseEvent) => {
    if (!this._opDropdownOpen) return;
    const wrap = this.renderRoot.querySelector('.op-dropdown-wrap');
    if (!wrap) return;
    const path = e.composedPath();
    if (!path.includes(wrap)) {
      this._opDropdownOpen = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._onOpDropdownClose, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onOpDropdownClose, true);
  }

  private _emitPendingChange() {
    this.dispatchEvent(
      new CustomEvent('pending-change', {
        detail: { operation: this._operation, value: this._value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Intercept field-blur and field-change from the edit component.
   * Capture value locally in frontend format — don't propagate.
   */
  private _onFieldBlur = (e: CustomEvent) => {
    e.stopPropagation();
    this._value = e.detail.value;
    this._emitPendingChange();
  };

  private _onFieldChange = (e: CustomEvent) => {
    e.stopPropagation();
    this._value = e.detail.value;
    this._emitPendingChange();
  };

  private _onFieldEscape = (e: CustomEvent) => {
    // Prevent modal from closing when user presses Escape in the field
    e.stopPropagation();
  };

  /**
   * Enter inside the value input acts as Apply — but only for simple
   * scalar inputs where Enter has no other meaning. tags/multi-select
   * use Enter to add an entry / confirm a selection; select-one opens
   * the dropdown on Enter; textarea inserts a newline. Hijacking those
   * would swallow user input, so the shortcut is whitelisted.
   */
  private static readonly _ENTER_APPLY_TYPES = new Set([
    'text',
    'numeric',
    'decimal2',
    'date',
    'geopoint',
    'attachment-uri',
  ]);

  private _onValueKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    const fieldType = this.field?.type;
    if (!fieldType || !SfxBulkMetaOpBar._ENTER_APPLY_TYPES.has(fieldType)) return;
    // Also bail if focus is actually inside a textarea (native multi-line
    // element — unlikely for the whitelisted types but defensive).
    const target = e.composedPath().find((el): el is HTMLElement => el instanceof HTMLElement);
    if (target?.tagName === 'TEXTAREA') return;
    e.preventDefault();
    // Pull the latest value from the input before applying — change events
    // can lag a microtask behind keydown.
    const input = e.composedPath().find((el): el is HTMLInputElement => el instanceof HTMLInputElement);
    if (input && input.value !== undefined) {
      this._value = input.value;
    }
    this._onApply();
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

    // Reset value and switch back to Set after Clear
    this._value = undefined;
    if (this._operation === 'DELETE' && !isValueRequiredForPreview(this._operation, this.field?.type)) {
      this._operation = 'SET';
    }
    this._emitPendingChange();
  }

  private get _isApplyDisabled(): boolean {
    if (this.selectedCount === 0) return true;
    // DELETE/Clear semantics:
    //   - Arrays ("Remove from"): require entries to remove.
    //   - Text fields: require a substring to remove (otherwise the user
    //     accidentally wipes the whole field).
    //   - Scalars (number / date / select / boolean / geopoint): allow
    //     empty — Clear simply nulls the value, there is nothing to type.
    if (this._operation === 'DELETE') {
      if (ARRAY_TYPES.has(this.field?.type)) return isEmpty(this._value);
      if (TEXT_TYPES.has(this.field?.type)) return isEmpty(this._value);
      return false;
    }
    return isEmpty(this._value);
  }

  render() {
    if (!this.field) return nothing;

    if (isUnsupportedField(this.field)) {
      return html`
        <div class="op-bar">
          <div class="op-unsupported" role="note" aria-label="${this.field.title}: ${UNSUPPORTED_FIELD_MESSAGE}">
            ${unsupportedLockIcon}
            <div class="op-unsupported-body">
              <span class="op-unsupported-title">${this.field.title}</span>
              <span class="op-unsupported-msg">${UNSUPPORTED_FIELD_MESSAGE}</span>
            </div>
          </div>
        </div>
      `;
    }

    const showDropdown = this._availableOps.length > 1;
    const currentOp = this._availableOps.find((o) => o.key === this._operation);

    return html`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">Operation</span>
          ${showDropdown
            ? html`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen ? 'open' : ''}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${currentOp?.label ?? 'Set'}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
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
            : html`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${currentOp?.label ?? 'Overwrite'}</span>
                </div>
              `}
        </div>

        ${isValueRequiredForPreview(this._operation, this.field.type)
          ? html`
              <div class="op-field op-field--value">
                <span class="op-field-label">${this.field.title}</span>
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `
          : nothing}

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
