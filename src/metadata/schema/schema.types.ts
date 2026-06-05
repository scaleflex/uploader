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

export type MetadataFieldType =
  | 'text'
  | 'textarea'
  | 'select-one'
  | 'multi-select'
  | 'boolean'
  | 'date'
  | 'numeric'
  | 'decimal2'
  | 'geopoint'
  | 'integer-list'
  | 'tags'
  | 'attachment-uri'
  | 'asset-attachments'
  | 'attachments-assets'
  | 'ultratags'
  | 'taxonomy-node';

/**
 * Field types whose editor cannot run inside the uploader (they depend on
 * the asset already existing on the backend — file attachments need an asset
 * id, sibling-asset references need the new asset to exist first, ultratags /
 * taxonomy nodes need server-driven autocomplete trees, integer-list relies
 * on lookup data not available before ingest).
 * Rendered read-only with a tooltip; excluded from bulk operations.
 */
export const UNSUPPORTED_FIELD_TYPES: ReadonlySet<MetadataFieldType> = new Set([
  'asset-attachments',
  'attachments-assets',
  'integer-list',
  'ultratags',
  'taxonomy-node',
]);

/**
 * Specific field ckeys (slugs) that depend on backend processing of the
 * uploaded asset (e.g. `face_matcher` is populated by a face-recognition
 * pipeline after ingest). Disabled in the same way as unsupported types.
 */
export const UNSUPPORTED_FIELD_CKEYS: ReadonlySet<string> = new Set([
  'face_matcher',
]);

export function isUnsupportedFieldType(type: MetadataFieldType): boolean {
  return UNSUPPORTED_FIELD_TYPES.has(type);
}

/**
 * True when the field cannot be edited during upload — either by type or by
 * a known backend-managed ckey. Use this anywhere the full field is in hand.
 */
export function isUnsupportedField(field: MetadataField): boolean {
  return (
    UNSUPPORTED_FIELD_TYPES.has(field.type) ||
    UNSUPPORTED_FIELD_CKEYS.has(field.ckey)
  );
}

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
  forceFillingOnUpload: boolean;
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

export interface RegionalVariantsGroup {
  uuid: string;
  label: string;
  type: 'LANGUAGES' | 'CURRENCIES' | 'CUSTOM';
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
   * - `'auto'` (default) — enforce when any of:
   *   1. the API schema has `store.force_filling_metadata_on_upload === true`
   *   2. any schema field has `required === 1`
   *   3. `requiredFields` is set and non-empty
   *
   * When enforcing and the user clicks **Upload** with a required field still
   * empty, the bulk metadata editor opens positioned on the first missing
   * field; the upload does not start.
   */
  enforceRequiredBeforeUpload?: boolean | 'auto';
  showTags?: boolean;
  language?: string;
  defaults?: Record<string, unknown>;
  /**
   * Force-enable the hardcoded "Product" fields section (ref + position).
   * Normally auto-detected from the Hub project flag `airstore.ui.products_enabled`.
   * Set explicitly when using `rawMetadata` (which bypasses the Hub fetch) or to
   * override the auto-detected value.
   */
  productsEnabled?: boolean;
}
