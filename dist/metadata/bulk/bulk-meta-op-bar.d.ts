import { LitElement, nothing } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
/**
 * Operation bar for bulk metadata editing.
 * Operation dropdown + value input + Apply button.
 */
export declare class SfxBulkMetaOpBar extends LitElement {
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    autocomplete: unknown;
    config: MetadataConfig | null;
    selectedCount: number;
    private _operation;
    private _value;
    private _opDropdownOpen;
    private _availableOps;
    private static _emptyValueForType;
    private get _effectiveValue();
    willUpdate(changed: Map<string, unknown>): void;
    private _onOpSelect;
    private _onOpToggle;
    private _onOpDropdownClose;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _emitPendingChange;
    /**
     * Intercept field-blur and field-change from the edit component.
     * Capture value locally in frontend format — don't propagate.
     */
    private _onFieldBlur;
    private _onFieldChange;
    private _onFieldEscape;
    private _onApply;
    private _onClear;
    private get _isApplyDisabled();
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-op-bar.d.ts.map