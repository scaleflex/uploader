import { ProviderId, CompanionListResponse, CompanionSearchResponse } from './connector.types';
/**
 * Build the OAuth connect URL that should be opened in a popup.
 */
export declare function getAuthUrl(companionUrl: string, provider: ProviderId): string;
/**
 * List files/folders in a directory.
 * Note: directory path is NOT encoded — v5 passes it raw and Companion expects it that way.
 */
export declare function listFiles(companionUrl: string, provider: ProviderId, token: string, directory?: string): Promise<CompanionListResponse>;
/**
 * Load the next page of results using the nextPagePath from a previous response.
 */
export declare function listNextPage(companionUrl: string, token: string, nextPagePath: string): Promise<CompanionListResponse>;
/**
 * Search a search-based provider (e.g. Unsplash).
 * GET /search/{provider}/list?q={query}&{nextPageQuery}
 */
export declare function searchProvider(companionUrl: string, provider: ProviderId, query: string, nextPageQuery?: string): Promise<CompanionSearchResponse>;
/**
 * Tell Companion to download the file from the provider and upload it to
 * the Scaleflex endpoint. Returns a socket token for WebSocket progress.
 *
 * This is ASYNC on Companion's side — it returns immediately with a token.
 * The actual upload progress and completion come via WebSocket.
 */
export declare function uploadRemoteFile(companionUrl: string, provider: ProviderId, token: string, requestPath: string, body: {
    fileId: string;
    endpoint: string;
    headers: Record<string, string>;
    size?: number;
    metadata?: Record<string, unknown>;
    httpMethod?: string;
    useFormData?: boolean;
    fieldname?: string;
}, 
/** Search providers use /search/{provider}/get/ instead of /{provider}/get/ */
isSearchProvider?: boolean): Promise<{
    token: string;
}>;
/** Metadata returned by Companion `/url/meta` for a remote URL. */
export interface UrlMeta {
    url: string;
    name: string;
    type: string;
    size: number;
}
/**
 * Ask Companion to HEAD/GET the remote URL and return basic metadata.
 * Used before the actual upload so we can validate size against restrictions
 * and show a real progress total.
 *
 * Companion's `url` provider has no OAuth token — public endpoint.
 */
export declare function fetchUrlMeta(companionUrl: string, url: string, signal?: AbortSignal): Promise<UrlMeta>;
/**
 * Tell Companion to download the remote URL and upload it to the Scaleflex
 * endpoint. Returns a socket token for WebSocket progress.
 *
 * Mirrors {@link uploadRemoteFile} but uses the `url` pseudo-provider —
 * no auth token, no requestPath, and `url` is included in the body.
 */
export declare function uploadFromUrl(companionUrl: string, url: string, body: {
    fileId: string;
    endpoint: string;
    headers: Record<string, string>;
    size?: number;
    metadata?: Record<string, unknown>;
}, signal?: AbortSignal): Promise<{
    token: string;
}>;
/**
 * Revoke the provider's OAuth token on Companion.
 * Caller should also call removeToken() to clear local storage.
 */
export declare function logout(companionUrl: string, provider: ProviderId, token: string): Promise<{
    ok: boolean;
    revoked: boolean;
}>;
/**
 * Convert a Companion HTTP URL to a WebSocket URL.
 * e.g. https://eu-on-24001.connector.filerobot.com → wss://eu-on-24001.connector.filerobot.com
 *
 * Derives ws/wss from the companion URL's own scheme (not location.protocol)
 * so that wss:// is used when Companion is served over HTTPS — even when
 * the page itself is on plain http://localhost during development.
 */
export declare function getSocketHost(companionUrl: string): string;
/** Thrown when Companion returns 401 — the OAuth token has expired. */
export declare class AuthExpiredError extends Error {
    constructor();
}
//# sourceMappingURL=companion-client.d.ts.map