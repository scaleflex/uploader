import { MetadataFieldBase } from './field-base';
export declare class SfxMetaMultiSelectField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    /**
     * Optional whitelist of `internal_unique_value` strings the user is allowed
     * to pick (from a firing `allow_values` dependency). `null` = no restriction.
     */
    allowedValues: string[] | null;
    private _open;
    private _search;
    private _activeIndex;
    private _boundOutsideClick;
    private get _selected();
    /** All options as defined on the field — used for chip label resolution. */
    private get _options();
    /** Options surfaced in the dropdown. Restricted by `allowedValues` when set. */
    private get _selectableOptions();
    private get _filtered();
    disconnectedCallback(): void;
    private _openDropdown;
    private _closeAndSubmit;
    private _onOutsideClick;
    private _toggle;
    private _remove;
    private _selectAll;
    private _clearAll;
    private _scrollActive;
    private _onSearchInput;
    private _onKeydown;
    private _labelFor;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=multi-select-field.d.ts.map