import { MetadataFieldBase } from './field-base';
import { UltratagsServiceLike, UltratagsValueItem } from '../ultratags/ultratags.types';
export declare class SfxMetaUltratagsField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    ultratags?: UltratagsServiceLike;
    language?: string;
    defaultLanguage?: string;
    /**
     * When provided, the dropdown is limited to this set instead of querying the
     * API and the "Create" affordance is hidden. Used by bulk-edit "Remove" to
     * only suggest tags actually present on the selected files.
     */
    restrictToItems?: UltratagsValueItem[];
    private _query;
    private _results;
    private _loading;
    private _dropdownOpen;
    private _activeIndex;
    private _blurTimeout;
    /** SIDs we have already asked the backend to resolve — never retry on the
     *  same SID even if it didn't come back, otherwise an unknown SID would
     *  trigger an infinite re-fetch loop as `value` keeps re-rendering. */
    private _enrichmentAttempted;
    private get _items();
    private get _currentLang();
    private get _defaultLang();
    private get _isRestricted();
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    /**
     * On first render (and after a value swap), resolve any items that are
     * SID-only into full entries so the pills can show readable labels. Each
     * SID is fetched at most once to keep an unknown SID from looping forever.
     */
    private _maybeEnrichBySids;
    private _selectedKeys;
    private _entryAlreadySelected;
    private _labelForItem;
    private get _restrictedEntries();
    private get _dropdownOptions();
    private get _isSearching();
    private get _canCreate();
    private get _itemCount();
    private _onInput;
    private _addEntry;
    private _createFromQuery;
    private _removeItem;
    private _onBlur;
    private _scrollActive;
    private _onKeydown;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=ultratags-field.d.ts.map