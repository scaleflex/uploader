import { MetadataFieldBase } from './field-base';
import { TaxonodeEntry } from '../taxonomies/taxonomies.types';
import { TaxonomyService } from '../taxonomies/taxonomies-service';
export declare class SfxMetaTaxonomyNodeField extends MetadataFieldBase {
    static styles: import('lit').CSSResult[];
    taxonomyService?: TaxonomyService;
    entry: TaxonodeEntry | null;
    private _open;
    private _query;
    private _drillStack;
    private _currentNodes;
    private _searchResults;
    private _loading;
    private _activeIndex;
    private _resolvedTaxonomyUuid;
    private _taxonomyResolutionFailed;
    private _boundOutsideClick;
    private _searchSeq;
    private get _taxonomySuid();
    /** Resolve `taxonomy_suid` (the human code on the field) → taxonomy UUID
     *  (what `/v5/taxonomy/{uuid}/nodes` expects). Memoised per element. */
    private _resolveTaxonomyUuid;
    private get _isSearchMode();
    private get _selectedScalar();
    private get _displayPath();
    disconnectedCallback(): void;
    private _onOutsideClick;
    private _openDropdown;
    private _seedDrillStackFromEntry;
    willUpdate(changed: Map<string, unknown>): void;
    private _close;
    private _loadCurrentNodes;
    private _onSearchInput;
    private _drillInto;
    private _jumpToCrumb;
    private _buildTreeEntry;
    private _buildAutocompleteEntry;
    private _emitTaxonomyEntry;
    private _selectTreeNode;
    private _selectAutocomplete;
    private _clear;
    private get _navigableCount();
    private _scrollActive;
    private _onKeydown;
    private _renderBreadcrumb;
    private _renderTree;
    private _renderSearch;
    render(): import('lit-html').TemplateResult<1>;
}
//# sourceMappingURL=taxonomy-node-field.d.ts.map