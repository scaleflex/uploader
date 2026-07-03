import { AuthConfig, AuthHeaders } from '@scaleflex/dam-core';
/**
 * Derive the Scaleflex API base URL from a container name.
 * When apiDomain is provided (e.g. "https://akli.api.filerobot.com"), it is used
 * instead of the default "https://api.filerobot.com".
 * Returns e.g. "https://akli.api.filerobot.com/my-container"
 */
export declare function getApiBase(container: string, apiDomain?: string): string;
/**
 * Exchange a security template ID for a SASS key.
 *
 * Resilience: the response is fetched with `cache: 'no-store'` (the key is
 * short-lived and security-sensitive — never serve a cached key or a cached
 * transient 404), and transient failures (404/408/429/5xx, network errors) are
 * retried a few times with linear backoff. This fixes the intermittent
 * "SASS key exchange failed (HTTP 404)" seen with a valid container + template.
 */
export declare function exchangeSassKey(container: string, securityTemplateId: string, apiDomain?: string, opts?: {
    retries?: number;
    retryDelayMs?: number;
}): Promise<string>;
/**
 * Build auth headers from a resolved SASS key.
 */
export declare function buildAuthHeaders(auth: AuthConfig, resolvedSassKey?: string): AuthHeaders;
/**
 * Resolve auth config into a ready-to-use API base + headers.
 * For security-template mode, performs the SASS key exchange.
 * Pass apiDomain to override the default "https://api.filerobot.com" host.
 */
export declare function resolveAuth(auth: AuthConfig, apiDomain?: string): Promise<{
    apiBase: string;
    headers: AuthHeaders;
    sassKey?: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map