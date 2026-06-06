/**
 * Backend-defined regional-variants group types. Mirrors admin v5's
 * `REGIONAL_VARIANT_TYPE` (settings/pages/metadata/metadata.constants.ts:21):
 * the BE returns the `FTYPE_*` prefixed strings, NOT bare `LANGUAGES`.
 */
export const REGIONAL_VARIANT_TYPE = {
  LANGUAGES: 'FTYPE_LANGUAGES',
  CURRENCIES: 'FTYPE_CURRENCIES',
  CUSTOM: 'FTYPE_CUSTOM',
} as const;

export type RegionalVariantType =
  (typeof REGIONAL_VARIANT_TYPE)[keyof typeof REGIONAL_VARIANT_TYPE];
