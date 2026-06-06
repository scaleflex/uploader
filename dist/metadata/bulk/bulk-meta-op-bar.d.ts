import { LitElement, nothing } from 'lit';
import { MetadataField, MetadataConfig } from '../schema/schema.types';
import { UltratagsValueItem } from '../ultratags/ultratags.types';
/**
 * Operation bar for bulk metadata editing.
 * Operation dropdown + value input + Apply button.
 */
export declare class SfxBulkMetaOpBar extends LitElement {
    static styles: import('lit').CSSResult[];
    field: MetadataField;
    autocomplete: unknown;
    taxonomyService: unknown;
    ultratags: unknown;
    defaultLanguage?: string;
    /**
     * Union of ultratag items currently set on the selected files. Passed to
     * the ultratags editor as `restrictToItems` when the user picks the Delete
     * operation, so the dropdown only suggests tags actually present on the
     * selection (admin parity).
     */
    ultratagsPresentOnSelection: UltratagsValueItem[];
    config: MetadataConfig | null;
    selectedCount: number;
    private _operation;
    private _value;
    private _pendingTaxonode;
    private _opDropdownOpen;
    private _availableOps;
    private static _emptyValueForType;
    private get _effectiveValue();
    willUpdate(changed: Map<string, unknown>): void;
    private _onTaxonomyEntryChange;
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
    /**
     * Enter inside the value input acts as Apply — but only for simple
     * scalar inputs where Enter has no other meaning. tags/multi-select
     * use Enter to add an entry / confirm a selection; select-one opens
     * the dropdown on Enter; textarea inserts a newline. Hijacking those
     * would swallow user input, so the shortcut is whitelisted.
     */
    private static readonly _ENTER_APPLY_TYPES;
    private _onValueKeydown;
    private _onApply;
    private get _isApplyDisabled();
    render(): typeof nothing | import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=bulk-meta-op-bar.d.ts.map