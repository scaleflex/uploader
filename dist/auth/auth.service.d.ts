import { AuthConfig, AuthHeaders } from './auth.types';
/**
 * Derive the Scaleflex API base URL from a container name.
 * Returns e.g. "https://api.filerobot.com/my-container"
 */
export declare function getApiBase(container: string): string;
/**
 * Exchange a security template ID for a SASS key.
 * Mirrors asset-picker's `exchangeSassKey()` pattern.
 */
export declare function exchangeSassKey(container: string, securityTemplateId: string): Promise<string>;
/**
 * Build auth headers from a resolved SASS key.
 */
export declare function buildAuthHeaders(auth: AuthConfig, resolvedSassKey?: string): AuthHeaders;
/**
 * Resolve auth config into a ready-to-use API base + headers.
 * For security-template mode, performs the SASS key exchange.
 */
export declare function resolveAuth(auth: AuthConfig): Promise<{
    apiBase: string;
    headers: AuthHeaders;
    sassKey?: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map