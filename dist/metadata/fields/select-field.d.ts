import { MetadataFieldBase } from './field-base';
export declare class SfxMetaSelectField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    private _open;
    private _search;
    private _activeIndex;
    private _boundOutsideClick;
    private get _options();
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