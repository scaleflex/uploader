import { TagOption } from '../schema/schema.types';
import { MetadataFieldBase } from './field-base';
export declare class SfxMetaTagsField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    autocomplete?: {
        search(ckey: string, query: string, callback: (results: TagOption[]) => void): void;
        cancel(): void;
    };
    private _query;
    private _results;
    private _loading;
    private _dropdownOpen;
    private _activeIndex;
    private _blurTimeout;
    private get _tags();
    disconnectedCallback(): void;
    private _onInput;
    private _addTag;
    private _removeTag;
    private _onBlur;
    private _scrollActive;
    /** Total navigable items: suggestions + optional "Create" item. */
    private get _itemCount();
    private _onKeydown;
    private get _suggestions();
    private get _canCreate();
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=tags-field.d.ts.map