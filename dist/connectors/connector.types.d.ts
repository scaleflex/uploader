import { SourceDef } from '../types/source.types';
export type ProviderId = 'google-drive' | 'dropbox' | 'onedrive' | 'box' | 'instagram' | 'facebook' | 'unsplash';
/** Built-in source IDs always available unless filtered via {@link ConnectorConfig.coreSources}. */
export type CoreSourceId = 'device' | 'url' | 'camera' | 'screen-cast';
/** Connector configuration passed via UploaderConfig. */
export interface ConnectorConfig {
    /**
     * Companion connector base URL — used for cloud providers (Google Drive,
     * Dropbox, etc.), URL imports (via `/url/meta` + `/url/get`), and as the
     * default host for tus large-file uploads (`{companionUrl}/files` and
     * `/json` — see `tusConfig.endpoint` / `tusConfig.jsonBase`). When this is
     * unset, the "URL link" source pill is hidden and cloud connectors won't
     * function. Hub-style apps usually compute the region-optimal connector
     * per project and pass it in here. Example: `'https://eu-on-24001.connector.filerobot.com'`.
     */
    companionUrl: string;
    providers: ProviderId[];
    customSources?: SourceDef[];
    /** Allowlist of built-in sources to render. When omitted, all core sources are shown. */
    coreSources?: CoreSourceId[];
}
/** A file or folder item returned by Companion's list endpoint. */
export interface CompanionItem {
    id: string;
    name: string;
    mimeType: string;
    isFolder: boolean;
    thumbnail: string | null;
    size: number;
    requestPath: string;
    /** ISO timestamp from the provider — present on Google Drive / Dropbox / OneDrive listings. */
    modifiedDate?: string;
}
/** Response from GET /{provider}/list/{directory}. */
export interface CompanionListResponse {
    items: CompanionItem[];
    nextPagePath: string | null;
    username: string | null;
}
/** A search result item (e.g. Unsplash). */
export interface CompanionSearchItem {
    id: string;
    name: string;
    mimeType: string;
    thumbnail: string | null;
    size: number;
    requestPath: string;
    author?: {
        name?: string;
        url?: string;
    };
}
/** Response from GET /search/{provider}/list?q={query}. */
export interface CompanionSearchResponse {
    items: CompanionSearchItem[];
    searchedFor: string;
    nextPageQuery: string | null;
}
/** Metadata for a remote file selected from a connector, used for Companion proxy upload. */
export interface RemoteFileInfo {
    companionUrl: string;
    provider: ProviderId;
    token: string;
    requestPath: string;
    fileId: string;
    name: string;
    mimeType: string;
    size: number;
    thumbnail: string | null;
    /**
     * Folder path relative to the top-level folder the user selected. Empty for
     * flat selections. Used to preserve folder hierarchy when the user picks
     * one or more entire folders from a connector (e.g. `"myFolder/sub"`).
     */
    relativeFolder?: string;
}
//# sourceMappingURL=connector.types.d.ts.map