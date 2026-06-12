/** Raw metadata shape as returned by API (Hub or airbox/sharebox). */
export interface RawMetadata {
    model?: MetadataModel[];
    store?: {
        force_filling_metadata_on_upload?: boolean;
        regional_variants_groups?: RegionalVariantsGroup[];
        [key: string]: unknown;
    };
    [key: string]: unknown;
}
/** Raw from API: project.data.metadata.model[] */
export interface MetadataModel {
    applies_to: 'FILES' | 'DIRECTORIES' | 'PRODUCTS';
    groups: MetadataGroup[];
}
export interface MetadataGroup {
    uuid: string;
    name: string;
    isRoot: boolean;
    ckey?: string;
    fields: MetadataField[];
}
export interface MetadataField {
    key: string;
    ckey: string;
    uuid: string;
    title: string;
    type: MetadataFieldType;
    placeholder?: string;
    hint?: string;
    /**
     * Whether the field must be filled before upload.
     * The Hub returns this as a JSON boolean (`true`/`false`), but some legacy
     * shapes use a numeric flag (`0`/`1`) — both are accepted and treated as
     * truthy/falsy by the uploader.
     */
    required: boolean | 0 | 1;
    possible_values: PossibleValue[];
    regional_variants_group_uuid: string | null;
    validation?: string;
    permissions: MetadataFieldPermission[];
    model?: Record<string, unknown>;
    mapping?: string;
    icon?: string;
    hide?: boolean;
}
export type MetadataFieldType = 'text' | 'textarea' | 'select-one' | 'multi-select' | 'boolean' | 'date' | 'numeric' | 'decimal2' | 'geopoint' | 'integer-list' | 'tags' | 'attachment-uri' | 'asset-attachments' | 'attachments-assets' | 'ultratags' | 'taxonomy-node';
/**
 * Field types whose editor cannot run inside the uploader (they depend on
 * the asset already existing on the backend — file attachments need an asset
 * id, sibling-asset references need the new asset to exist first, integer-list
 * relies on lookup data not available before ingest).
 * Rendered read-only with a tooltip; excluded from bulk operations.
 *
 * `taxonomy-node` is supported during upload: the picker reads the taxonomy
 * tree by `field.model.parameters.taxonomy_suid` and uses the existing
 * `/v5/metadata/autocomplete` endpoint for search.
 *
 * `ultratags` is supported during upload via the dedicated `/v5/meta/ultratags`
 * vocabulary endpoint (search, create with `mode: 'upsert'`, resolve by SID).
 */
export declare const UNSUPPORTED_FIELD_TYPES: ReadonlySet<MetadataFieldType>;
/**
 * Specific field ckeys (slugs) that depend on backend processing of the
 * uploaded asset (e.g. `face_matcher` is populated by a face-recognition
 * pipeline after ingest). Disabled in the same way as unsupported types.
 */
export declare const UNSUPPORTED_FIELD_CKEYS: ReadonlySet<string>;
export declare function isUnsupportedFieldType(type: MetadataFieldType): boolean;
/**
 * True when the field cannot be edited during upload — either by type or by
 * a known backend-managed ckey. Use this anywhere the full field is in hand.
 */
export declare function isUnsupportedField(field: MetadataField): boolean;
export interface PossibleValue {
    api_value: string;
    internal_unique_value: string;
    label: string;
}
export interface MetadataFieldPermission {
    [key: string]: unknown;
}
/** Parsed and cached for internal use */
export interface MetadataSchema {
    groups: MetadataGroup[];
    fields: MetadataField[];
    fieldsByKey: Map<string, MetadataField>;
    /**
     * The project's "Require metadata to be filled out on asset upload" toggle
     * (`store.force_filling_metadata_on_upload`). Tri-state: `undefined` means
     * the API response didn't carry the setting (e.g. `rawMetadata` without a
     * `store` block), which lets `enforceRequiredBeforeUpload: 'auto'` fall back
     * to inferring enforcement from required fields. An explicit `false` is an
     * admin decision and must NOT be overridden by that inference.
     */
    forceFillingOnUpload?: boolean;
    regionalVariantsGroups: RegionalVariantsGroup[];
    language: string;
    /**
     * True when the project has product fields enabled (Hub flag
     * `airstore.ui.products_enabled`). When true the uploader renders the
     * hardcoded "Product" section (ref + position) alongside generic metadata.
     * Mirrors admin v5's product fields feature.
     */
    productsEnabled: boolean;
}
/**
 * Group type string returned by the BE. The wire values are `FTYPE_LANGUAGES`,
 * `FTYPE_CURRENCIES`, `FTYPE_CUSTOM` (mirrors admin v5's `REGIONAL_VARIANT_TYPE`).
 * The `(string & {})` keeps IDE completions for the known values while still
 * accepting any string the BE might add in the future.
 */
export interface RegionalVariantsGroup {
    uuid: string;
    label: string;
    type: 'FTYPE_LANGUAGES' | 'FTYPE_CURRENCIES' | 'FTYPE_CUSTOM' | (string & {});
    icon?: string;
    isRoot: boolean;
    variants: RegionalVariant[];
}
export interface RegionalVariant {
    internal_unique_value: string;
    api_value: string;
    label: string;
}
export interface TagOption {
    sid?: string;
    value: string;
    label: string;
}
export interface GeoPoint {
    latitude: string;
    longitude: string;
}
/** Dropdown option used by select/multi-select field components. */
export interface FieldOption {
    id: string;
    label: string;
    value: string;
}
export interface MetadataConfig {
    projectUuid: string;
    /**
     * Pre-fetched raw metadata object (e.g. from the airbox/sharebox API response).
     * When provided, the Hub API call is skipped entirely.
     */
    rawMetadata?: RawMetadata;
    /**
     * Hub API base URL for fetching project metadata schema.
     * Default: 'https://hub.scaleflex.com/api'
     */
    hubApiBase?: string;
    /**
     * Auth headers for the Hub API (project endpoint).
     * The Hub uses session-based auth, not the SASS key.
     * Required: x-session-token, x-company-token, x-project-token.
     */
    hubHeaders?: Record<string, string>;
    fields?: 'all' | string[];
    /**
     * Override the schema's required flags by ckey. Fields listed here are
     * treated as required even if their schema entry has `required: 0`.
     */
    requiredFields?: string[];
    /**
     * Controls whether the user must fill required metadata before uploading.
     *
     * - `true`  — always enforce
     * - `false` — never enforce
     * - `'auto'` (default) — follow the project's "Require metadata to be
     *   filled out on asset upload" toggle when the API provides it
     *   (`store.force_filling_metadata_on_upload`, true or false). When the
     *   setting is absent from the response, infer enforcement: enforce if
     *   `requiredFields` is set and non-empty, or any schema field has
     *   `required` truthy.
     *
     * When enforcing and the user clicks **Upload** with a required field still
     * empty, the bulk metadata editor opens positioned on the first missing
     * field; the upload does not start.
     */
    enforceRequiredBeforeUpload?: boolean | 'auto';
    showTags?: boolean;
    /**
     * User locale — drives ultratags label fallback and is used as the default
     * key when reading/writing regional-variant fields whose group has no entry
     * in `regionalFilters`.
     */
    language?: string;
    /**
     * Currently-active variant value per regional-variants group, keyed by
     * group UUID. Mirrors admin v5's `metadataRegionalFilters` slice. Lets a
     * single project mix LANGUAGES, CURRENCIES, and CUSTOM groups — each field
     * is wrapped/unwrapped under `regionalFilters[field.regional_variants_group_uuid]`.
     * When unset for a given group, falls back to `language`, then `'en'`.
     */
    regionalFilters?: Record<string, string>;
    defaults?: Record<string, unknown>;
    /**
     * Force-enable the hardcoded "Product" fields section (ref + position).
     * Normally auto-detected from the Hub project flag `airstore.ui.products_enabled`.
     * Set explicitly when using `rawMetadata` (which bypasses the Hub fetch) or to
     * override the auto-detected value.
     */
    productsEnabled?: boolean;
}
//# sourceMappingURL=schema.types.d.ts.map