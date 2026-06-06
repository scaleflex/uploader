import type {
  MetadataConfig,
  MetadataField,
  RegionalVariantsGroup,
} from '../schema/schema.types';
import { REGIONAL_VARIANT_TYPE } from './constants';

/**
 * Resolve the per-field active regional-variant key — the slot a field's
 * value should be wrapped/unwrapped under.
 *
 * For a field with `regional_variants_group_uuid = 'cur-uuid'`, this returns
 * `config.regionalFilters['cur-uuid']` (e.g. 'USD'), or — for legacy
 * LANGUAGES-only consumers — falls back to `config.language`.
 *
 * Returns `undefined` for non-regional fields so callers can short-circuit.
 *
 * Mirrors admin v5's `map-metadata-values-to-backend.ts` keying.
 */
export function resolveFieldRegionalKey(
  field: MetadataField,
  config: MetadataConfig | null | undefined,
): string | undefined {
  if (!field.regional_variants_group_uuid) return undefined;
  const filters = config?.regionalFilters;
  if (filters && field.regional_variants_group_uuid in filters) {
    return filters[field.regional_variants_group_uuid];
  }
  return config?.language;
}

/**
 * Build the inline hint shown beside regional-variant field labels, like
 * `"Languages: English"` or `"Currencies: USD"`. Returns `undefined` for
 * non-regional fields or when the field's group is missing from the schema.
 *
 * Mirrors admin v5's `useFieldRegionalVariantHint`.
 */
export function getFieldRegionalVariantHint(
  field: MetadataField,
  groups: RegionalVariantsGroup[] | undefined,
  filters: Record<string, string> | undefined,
  fallbackLanguage: string | undefined,
): string | undefined {
  if (!field.regional_variants_group_uuid || !groups) return undefined;
  const group = groups.find((g) => g.uuid === field.regional_variants_group_uuid);
  if (!group) return undefined;
  const activeKey = filters?.[group.uuid] ?? fallbackLanguage;
  const variant = group.variants.find((v) => v.api_value === activeKey);
  if (!variant) return undefined;
  return `${group.label}: ${variant.label}`;
}

/**
 * Default `regionalFilters` map from the schema's groups. Each group seeds
 * to its first variant — except LANGUAGES-type groups, which try to match the
 * user's profile language (BCP 47, e.g. `'fr'` or `'fr-FR'`) first so a user
 * with a French profile lands on the French variant by default. Used by the
 * uploader to seed state before the user picks anything. Mirrors admin v5's
 * `metadataAdaptAndSet` initialization plus the profile-language preference
 * Vitaly asked for in the regional-variants review.
 */
export function buildDefaultRegionalFilters(
  groups: RegionalVariantsGroup[] | undefined,
  userLanguage?: string,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const g of groups ?? []) {
    if (!g.variants?.length) continue;
    const preferred =
      g.type === REGIONAL_VARIANT_TYPE.LANGUAGES
        ? matchLanguageVariant(g.variants, userLanguage)
        : undefined;
    out[g.uuid] = preferred ?? g.variants[0].api_value;
  }
  return out;
}

/**
 * Pick the variant whose `api_value` best matches `userLanguage` (BCP 47).
 * Tries case-insensitive exact match, then base-tag in either direction
 * (`fr-FR` ↔ `fr`). Returns `undefined` to let the caller fall back.
 */
function matchLanguageVariant(
  variants: RegionalVariantsGroup['variants'],
  userLanguage: string | undefined,
): string | undefined {
  if (!userLanguage) return undefined;
  const user = userLanguage.toLowerCase();
  const userBase = user.split('-')[0];
  let baseToVariant: string | undefined;
  let variantBaseMatch: string | undefined;
  for (const v of variants) {
    const api = v.api_value?.toLowerCase();
    if (!api) continue;
    if (api === user) return v.api_value;
    if (!baseToVariant && api === userBase) baseToVariant = v.api_value;
    if (!variantBaseMatch && api.split('-')[0] === userBase) {
      variantBaseMatch = v.api_value;
    }
  }
  return baseToVariant ?? variantBaseMatch;
}
