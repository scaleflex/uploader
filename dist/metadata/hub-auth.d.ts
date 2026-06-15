/**
 * Single source of truth for "can a Hub API request succeed?".
 *
 * The Hub API (hub.scaleflex.com) uses session-based auth — it requires
 * x-company-token / x-project-token / x-session-token headers and rejects
 * the Filerobot SASS key (X-Filerobot-Key) with 401 SESSION_EXPIRED.
 *
 * Consumed by the schema/dependencies services (to refuse provably-doomed
 * requests with a descriptive error) and by sfx-uploader's preload gate
 * (to warn and skip instead of firing them).
 */
export declare const DEFAULT_HUB_API_BASE = "https://hub.scaleflex.com/api";
/** Remediation hint shared by every warning/error about missing Hub auth. */
export declare const HUB_HEADERS_HINT: string;
/** True when `base` is (or normalizes to) the default public Hub base. */
export declare function isDefaultHubBase(base?: string): boolean;
/**
 * The hubHeaders to actually use, or undefined when absent/empty.
 * An empty object (e.g. a conditional spread while the session token is
 * still loading) counts as absent — sending `{}` to the Hub would strip
 * even the fallback headers and still 401.
 */
export declare function effectiveHubHeaders(config?: {
    hubHeaders?: Record<string, string>;
}): Record<string, string> | undefined;
/** Case-insensitive check that a header set carries a Hub session token. */
export declare function hasSessionToken(headers: Record<string, string>): boolean;
/**
 * True when Hub requests are worth attempting: real (non-empty) hubHeaders,
 * or a non-default hubApiBase — a custom proxy may handle auth itself.
 * Explicitly passing the default base does not count: the public Hub still
 * requires session headers no matter how its URL was spelled.
 */
export declare function canReachHub(config?: {
    hubHeaders?: Record<string, string>;
    hubApiBase?: string;
}): boolean;
//# sourceMappingURL=hub-auth.d.ts.map