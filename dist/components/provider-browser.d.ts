import { LitElement } from 'lit';
import { ProviderId } from '../connectors/connector.types';
import { TFunction } from '../store/store.types';
export declare class SfxProviderBrowser extends LitElement {
    static styles: import('lit').CSSResult;
    t: TFunction;
    provider: ProviderId;
    companionUrl: string;
    /** When false, only one file can be selected at a time (single-asset mode). */
    multi: boolean;
    /** Maximum number of files that can be selected. null = unlimited. */
    maxSelect: number | null;
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
    private _resolvingFolders;
    private _resolveProgress;
    private _cleanupAuthListener;
    private _authWindow;
    private _resolveAbort;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changed: Map<string, unknown>): void;
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
    /**
     * Files are counted against `maxSelect`; folders are not, because their
     * contents are unknown until traversal. Excess folder-resolved files get
     * filtered by per-file validation downstream.
     */
    private get _selectedFileCount();
    private _toggleSelect;
    private _toggleSelectAll;
    private _onAddSelected;
    private _onClose;
    private _handleLogout;
    render(): import('lit').TemplateResult<1>;
    private _renderHeader;
    private _onBack;
    private _renderAuthView;
    private _renderLoading;
    private _renderError;
    private _renderBrowser;
    private _cancelResolve;
    private _renderBreadcrumbs;
}
/**
 * Render an ISO timestamp from Companion as a relative duration ("3 months ago",
 * "yesterday") via the host's translation function so locale rules apply.
 * Returns '' for missing/unparseable inputs.
 *
 * The unit is escalated when the rounded count would hit the next unit's
 * boundary — so 59.6 minutes shows as "1 hour ago", not "60 minutes ago",
 * and 11.6 months shows as "1 year ago", not "12 months ago".
 */
export declare function formatRelativeDate(iso: string | undefined, t: TFunction): string;
declare global {
    interface HTMLElementTagNameMap {
        'sfx-provider-browser': SfxProviderBrowser;
    }
}
//# sourceMappingURL=provider-browser.d.ts.map