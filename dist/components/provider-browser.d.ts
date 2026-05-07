import { LitElement } from 'lit';
import { ProviderId } from '../connectors/connector.types';
export declare class SfxProviderBrowser extends LitElement {
    static styles: import('lit').CSSResult;
    provider: ProviderId;
    companionUrl: string;
    /**
     * Optional rewrite for listing thumbnail URLs so they pass the host CSP.
     * Defaults to the identity function.
     */
    transformThumbnail: (url: string) => string;
    private _authenticated;
    private _loading;
    private _items;
    private _selectedIds;
    private _breadcrumbs;
    private _nextPagePath;
    private _error;
    private _loadingMore;
    private _username;
    private _cleanupAuthListener;
    private _authWindow;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changed: Map<string, unknown>): void;
    private _reset;
    private _checkAuth;
    private get _providerDef();
    private get _providerLabel();
    private _handleConnect;
    private _loadFolder;
    private _onFolderClick;
    private _onBreadcrumbClick;
    private _onLoadMore;
    private _lastClickedIndex;
    private _toggleSelect;
    private _toggleSelectAll;
    private _onAddSelected;
    private _onClose;
    private _handleLogout;
    render(): import('lit-html').TemplateResult<1>;
    private _renderHeader;
    private _renderAuthView;
    private _renderLoading;
    private _renderError;
    private _renderBrowser;
    private _renderBreadcrumbs;
}
declare global {
    interface HTMLElementTagNameMap {
        'sfx-provider-browser': SfxProviderBrowser;
    }
}
//# sourceMappingURL=provider-browser.d.ts.map