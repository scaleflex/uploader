import { UltratagEntry, UltratagsValueItem } from './ultratags.types';
export declare const isUltratagSid: (value: string) => boolean;
export interface ResolvedLabel {
    value: string;
    isFallback: boolean;
    sourceLang: string | null;
}
/**
 * Resolve an entry's label for display in `lang`, falling back to the entry's
 * value in `defaultLang` when missing. The API may surface `~XX` keys (uppercase,
 * tilde-prefixed) for regional-variant-only entries — those are treated as
 * fallbacks so the UI can flag them if needed.
 */
export declare const resolveLabel: (entry: Pick<UltratagEntry, "i18n" | "slug">, lang: string, defaultLang: string) => ResolvedLabel;
/**
 * URL-safe identifier derived from a free-text label. Mirrors admin's
 * `generate-slug-by-name`: lowercase, replace non-word chars (and whitespace)
 * with `_`, collapse runs of `_`, and trim leading/trailing `_`. Used both
 * for the "Create" check (selectedKeys.has(deriveSlug(query))) and for the
 * POST /v5/meta/ultratags `items[].slug` payload.
 */
export declare const deriveSlug: (label: string) => string;
export declare const isValidUltratagSlug: (slug: string) => boolean;
export interface UltratagsLookup {
    bySid: Record<string, UltratagEntry>;
    bySlug: Record<string, UltratagEntry>;
}
/**
 * Build maps keyed by both `sid` and `slug`. file.meta stores references as
 * `sid` (e.g. `#utyigrivha5`); fresh form inserts may use `slug` until the
 * backend round-trips and rewrites them as sid.
 */
export declare const buildUltratagsLookup: (entries?: UltratagEntry[]) => UltratagsLookup;
export declare const findUltratagEntry: (lookup: UltratagsLookup, ref: string) => UltratagEntry | undefined;
/**
 * Read ultratag items from a raw file.meta value into the enriched form the UI
 * uses. The backend may return either a flat array (`string[]` of slugs or
 * `{slug,sid,label}[]`) or a per-language map `{ lang: [{slug,sid,label}, …] }`.
 * For the map case we merge across every language bucket — items with the same
 * sid (falling back to slug) are coalesced into a single entry whose `i18n`
 * aggregates each bucket's `label`. That lets the save payload carry every
 * translation already present on the asset.
 */
export declare const extractUltratagItems: (rawValue: unknown) => UltratagsValueItem[];
/** Add `incoming` to (or remove from) `existing`, dedup by sid/slug/uuid. */
export declare const mergeUltratagItems: (existing: Array<UltratagsValueItem | string>, incoming: Array<UltratagsValueItem | string>, remove: boolean) => Array<UltratagsValueItem | string>;
/** Enrich existing items with `i18n`, `uuid`, `sid` from a fresh lookup. */
export declare const enrichUltratagItems: (items: UltratagsValueItem[], lookup: UltratagsLookup) => UltratagsValueItem[];
//# sourceMappingURL=ultratags.utils.d.ts.map