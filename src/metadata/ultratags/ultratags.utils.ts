import { ULTRATAG_SID_PREFIX, ULTRATAGS_SLUG_PATTERN } from './ultratags.constants';
import type { UltratagEntry, UltratagsValueItem } from './ultratags.types';

export const isUltratagSid = (value: string): boolean =>
  typeof value === 'string' && value.startsWith(ULTRATAG_SID_PREFIX);

export interface ResolvedLabel {
  value: string;
  isFallback: boolean;
  sourceLang: string | null;
}

const regionalVariantKey = (lang: string) => `~${lang.toUpperCase()}`;

const lookupI18n = (
  i18n: Record<string, string> | undefined,
  lang: string,
): string | undefined => {
  if (!i18n || !lang) return undefined;
  return i18n[lang] ?? i18n[regionalVariantKey(lang)];
};

/**
 * Resolve an entry's label for display in `lang`, falling back to the entry's
 * value in `defaultLang` when missing. The API may surface `~XX` keys (uppercase,
 * tilde-prefixed) for regional-variant-only entries — those are treated as
 * fallbacks so the UI can flag them if needed.
 */
export const resolveLabel = (
  entry: Pick<UltratagEntry, 'i18n' | 'slug'>,
  lang: string,
  defaultLang: string,
): ResolvedLabel => {
  const direct = entry.i18n?.[lang];
  if (direct) {
    return { value: direct, isFallback: false, sourceLang: lang };
  }

  const regionalVariant = entry.i18n?.[regionalVariantKey(lang)];
  if (regionalVariant) {
    return { value: regionalVariant, isFallback: true, sourceLang: regionalVariantKey(lang) };
  }

  const fallback = lookupI18n(entry.i18n, defaultLang);
  if (fallback) {
    const sourceLang = entry.i18n?.[defaultLang] ? defaultLang : regionalVariantKey(defaultLang);
    return { value: fallback, isFallback: true, sourceLang };
  }

  return { value: '', isFallback: false, sourceLang: null };
};

/**
 * URL-safe identifier derived from a free-text label. Mirrors admin's
 * `generate-slug-by-name`: lowercase, replace non-word chars (and whitespace)
 * with `_`, collapse runs of `_`, and trim leading/trailing `_`. Used both
 * for the "Create" check (selectedKeys.has(deriveSlug(query))) and for the
 * POST /v5/meta/ultratags `items[].slug` payload.
 */
export const deriveSlug = (label: string): string =>
  (typeof label === 'string' ? label : '')
    .toLowerCase()
    .trim()
    .replace(/[^\d\w]/g, '_')
    .replace(/[\s]/g, '_')
    .replace(/[_]{2,}/g, '_')
    .replace(/[_]*$/g, '')
    .replace(/^[_]*/g, '');

export const isValidUltratagSlug = (slug: string): boolean =>
  ULTRATAGS_SLUG_PATTERN.test(slug);

export interface UltratagsLookup {
  bySid: Record<string, UltratagEntry>;
  bySlug: Record<string, UltratagEntry>;
}

/**
 * Build maps keyed by both `sid` and `slug`. file.meta stores references as
 * `sid` (e.g. `#utyigrivha5`); fresh form inserts may use `slug` until the
 * backend round-trips and rewrites them as sid.
 */
export const buildUltratagsLookup = (entries?: UltratagEntry[]): UltratagsLookup => {
  const bySid: Record<string, UltratagEntry> = {};
  const bySlug: Record<string, UltratagEntry> = {};
  for (const entry of entries || []) {
    if (entry.sid) bySid[entry.sid] = entry;
    if (entry.slug) bySlug[entry.slug] = entry;
  }
  return { bySid, bySlug };
};

export const findUltratagEntry = (
  lookup: UltratagsLookup,
  ref: string,
): UltratagEntry | undefined => lookup.bySid[ref] || lookup.bySlug[ref];

/**
 * Read ultratag items from a raw file.meta value into the enriched form the UI
 * uses. The backend may return either a flat array (`string[]` of slugs or
 * `{slug,sid,label}[]`) or a per-language map `{ lang: [{slug,sid,label}, …] }`.
 * For the map case we merge across every language bucket — items with the same
 * sid (falling back to slug) are coalesced into a single entry whose `i18n`
 * aggregates each bucket's `label`. That lets the save payload carry every
 * translation already present on the asset.
 */
export const extractUltratagItems = (rawValue: unknown): UltratagsValueItem[] => {
  const items: UltratagsValueItem[] = [];
  const indexByKey = new Map<string, number>();

  const keyOf = (item: { sid?: string; slug?: string }) => item.sid || item.slug || '';

  const ingest = (raw: unknown, lang?: string) => {
    if (typeof raw === 'string') {
      if (!raw) return;
      if (indexByKey.has(raw)) return;
      indexByKey.set(raw, items.length);
      // Bare strings are treated as slugs (admin parity). SIDs are only
      // recognised from the structured `{sid: '#ut…'}` form; the save path
      // sends `item.slug` only, so wrapping a SID as `{slug: '#ut…'}` would
      // also round-trip safely if the BE ever produced one in a flat array.
      items.push({ slug: raw });
      return;
    }
    if (!raw || typeof raw !== 'object') return;
    const obj = raw as {
      slug?: string;
      sid?: string;
      uuid?: string;
      label?: string;
      i18n?: Record<string, string>;
    };
    const key = keyOf(obj);
    if (!key) return;
    const existingIndex = indexByKey.get(key);
    const base: UltratagsValueItem =
      existingIndex !== undefined ? { ...items[existingIndex] } : {};
    if (obj.slug) base.slug = obj.slug;
    if (obj.sid) base.sid = obj.sid;
    if (obj.uuid) base.uuid = obj.uuid;
    const mergedI18n: Record<string, string> = { ...base.i18n, ...(obj.i18n || {}) };
    if (lang && obj.label) mergedI18n[lang] = obj.label;
    if (Object.keys(mergedI18n).length > 0) base.i18n = mergedI18n;
    if (existingIndex !== undefined) {
      items[existingIndex] = base;
    } else {
      indexByKey.set(key, items.length);
      if (obj.slug && obj.slug !== key) indexByKey.set(obj.slug, items.length);
      items.push(base);
    }
  };

  if (Array.isArray(rawValue)) {
    for (const item of rawValue) ingest(item);
  } else if (rawValue && typeof rawValue === 'object') {
    const map = rawValue as Record<string, unknown>;
    for (const [lang, bucket] of Object.entries(map)) {
      if (!Array.isArray(bucket)) continue;
      for (const item of bucket) ingest(item, lang);
    }
  }

  return items;
};

const ultratagItemKeys = (item: UltratagsValueItem | string): string[] => {
  if (typeof item === 'string') return [item];
  if (!item || typeof item !== 'object') return [];
  return [item.sid, item.slug, item.uuid].filter(Boolean) as string[];
};

/** Add `incoming` to (or remove from) `existing`, dedup by sid/slug/uuid. */
export const mergeUltratagItems = (
  existing: Array<UltratagsValueItem | string>,
  incoming: Array<UltratagsValueItem | string>,
  remove: boolean,
): Array<UltratagsValueItem | string> => {
  if (remove) {
    const removeKeys = new Set<string>(incoming.flatMap(ultratagItemKeys));
    return existing.filter((item) => !ultratagItemKeys(item).some((key) => removeKeys.has(key)));
  }

  const existingKeys = new Set<string>(existing.flatMap(ultratagItemKeys));
  const additions = incoming.filter(
    (item) => !ultratagItemKeys(item).some((key) => existingKeys.has(key)),
  );

  return [...existing, ...additions];
};

/** Enrich existing items with `i18n`, `uuid`, `sid` from a fresh lookup. */
export const enrichUltratagItems = (
  items: UltratagsValueItem[],
  lookup: UltratagsLookup,
): UltratagsValueItem[] =>
  items.map((item) => {
    const ref =
      (item.sid && lookup.bySid[item.sid]) ||
      (item.slug && lookup.bySlug[item.slug]) ||
      undefined;
    if (!ref) return item;
    return {
      slug: item.slug || ref.slug,
      sid: item.sid || ref.sid,
      uuid: item.uuid || ref.uuid,
      i18n: { ...(ref.i18n || {}), ...(item.i18n || {}) },
    };
  });
