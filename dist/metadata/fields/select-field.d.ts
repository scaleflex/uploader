import { MetadataFieldBase } from './field-base';
export declare class SfxMetaSelectField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    /**
     * Optional whitelist of `internal_unique_value` strings the user is allowed
     * to pick (from a firing `allow_values` dependency). `null` = no restriction.
     * An empty array means no value is allowed (surface as conflict upstream).
     */
    allowedValues: string[] | null;
    private _open;
    private _search;
    private _activeIndex;
    private _boundOutsideClick;
    /** All options as defined on the field — used for label resolution. */
    private get _options();
    /**
     * Options surfaced in the dropdown. When a firing `allow_values` dependency
     * restricts the field, this is the intersection. The current value is kept
     * visible via `_selectedLabel` (which uses the full `_options`) so the user
     * sees the conflict instead of an empty field.
     */
    private get _selectableOptions();
    private get _filtered();
    private get _selectedLabel();
    disconnectedCallback(): void;
    private _openDropdown;
    private _closeAndSubmit;
    private _onOutsideClick;
    private _onSelect;
    private _clear;
    private _scrollActive;
    private _onSearchInput;
    private _onKeydown;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=select-field.d.ts.map