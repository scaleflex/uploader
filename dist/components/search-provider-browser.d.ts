import { LitElement } from 'lit';
import { ProviderId } from '../connectors/connector.types';
export declare class SfxSearchProviderBrowser extends LitElement {
    static styles: import('lit').CSSResult;
    provider: ProviderId;
    companionUrl: string;
    private _loading;
    private _loadingMore;
    private _items;
    private _selectedIds;
    private _error;
    private _searchQuery;
    private _nextPageQuery;
    private _searched;
    private get _providerLabel();
    private _onResultsScroll;
    private _onSearchInput;
    private _onSearchKeydown;
    private _doSearch;
    private _onLoadMore;
    private _toggleSelect;
    private _onAddSelected;
    private _onClose;
    render(): import('lit-html').TemplateResult<1>;
    private _renderHeader;
    private _renderSearchBar;
    private _renderLoading;
    private _renderError;
    private _renderResults;
}
declare global {
    interface HTMLElementTagNameMap {
        'sfx-search-provider-browser': SfxSearchProviderBrowser;
    }
}
//# sourceMappingURL=search-provider-browser.d.ts.map