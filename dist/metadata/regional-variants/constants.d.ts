/**
 * Backend-defined regional-variants group types. Mirrors admin v5's
 * `REGIONAL_VARIANT_TYPE` (settings/pages/metadata/metadata.constants.ts:21):
 * the BE returns the `FTYPE_*` prefixed strings, NOT bare `LANGUAGES`.
 */
export declare const REGIONAL_VARIANT_TYPE: {
    readonly LANGUAGES: "FTYPE_LANGUAGES";
    readonly CURRENCIES: "FTYPE_CURRENCIES";
    readonly CUSTOM: "FTYPE_CUSTOM";
};
export type RegionalVariantType = (typeof REGIONAL_VARIANT_TYPE)[keyof typeof REGIONAL_VARIANT_TYPE];
//# sourceMappingURL=constants.d.ts.map