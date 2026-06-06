import { MetadataConfig, MetadataField, RegionalVariantsGroup } from '../schema/schema.types';
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
export declare function resolveFieldRegionalKey(field: MetadataField, config: MetadataConfig | null | undefined): string | undefined;
/**
 * Build the inline hint shown beside regional-variant field labels, like
 * `"Languages: English"` or `"Currencies: USD"`. Returns `undefined` for
 * non-regional fields or when the field's group is missing from the schema.
 *
 * Mirrors admin v5's `useFieldRegionalVariantHint`.
 */
export declare function getFieldRegionalVariantHint(field: MetadataField, groups: RegionalVariantsGroup[] | undefined, filters: Record<string, string> | undefined, fallbackLanguage: string | undefined): string | undefined;
/**
 * Default `regionalFilters` map from the schema's groups. Each group seeds
 * to its first variant — except LANGUAGES-type groups, which try to match the
 * user's profile language (BCP 47, e.g. `'fr'` or `'fr-FR'`) first so a user
 * with a French profile lands on the French variant by default. Used by the
 * uploader to seed state before the user picks anything. Mirrors admin v5's
 * `metadataAdaptAndSet` initialization plus the profile-language preference
 * Vitaly asked for in the regional-variants review.
 */
export declare function buildDefaultRegionalFilters(groups: RegionalVariantsGroup[] | undefined, userLanguage?: string): Record<string, string>;
//# sourceMappingURL=resolve.d.ts.map