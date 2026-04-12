import { MetadataFieldBase } from './field-base';
export declare class SfxMetaMultiSelectField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    private _open;
    private _search;
    private _activeIndex;
    private _boundOutsideClick;
    private get _selected();
    private get _options();
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