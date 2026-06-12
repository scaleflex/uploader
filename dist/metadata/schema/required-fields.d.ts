import { UploadFile } from '../../store/store.types';
import { MetadataConfig, MetadataSchema, MetadataField } from './schema.types';
import { Dependency } from '../dependencies/dependencies.types';
/**
 * Returns true if the value counts as a non-empty metadata value.
 * Inverse of isEmpty().
 */
export declare function isAssetHasMetadataValue(value: unknown): boolean;
/**
 * Whether a field is required. The Hub returns `required` as a JSON boolean,
 * but legacy responses use 0/1 — accept both via truthy check.
 */
export declare function isFieldRequired(field: MetadataField, config?: MetadataConfig): boolean;
/**
 * Resolve `config.enforceRequiredBeforeUpload` ('auto' when unset) against
 * the project schema: should missing required metadata block the upload?
 *
 * In 'auto' mode the project's "Require metadata to be filled out on asset
 * upload" toggle (`schema.forceFillingOnUpload`) is authoritative when the
 * API provided it — an explicit `false` is an admin decision that mandatory
 * schema fields must not override. Only when the setting is absent do we
 * infer enforcement from `config.requiredFields` or schema-required fields.
 */
export declare function shouldEnforceRequiredMetadata(schema: MetadataSchema, config: MetadataConfig): boolean;
/**
 * For each required field, find files (in modifiable statuses) that are
 * missing a value for that field.
 *
 * Returns a map of `{ [fieldKey]: UploadFile[] }` — only entries with
 * at least one file are included.
 *
 * NOTE: the missing-required scanners in this file are enforcement-agnostic —
 * they report what's empty, not whether that should block anything. A caller
 * that gates an upload/save on the result must first check
 * {@link shouldEnforceRequiredMetadata}, otherwise it re-introduces the
 * ignored "Require metadata on upload" toggle bug.
 */
export declare function getFilesWithMissingRequired(files: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig, dependencies?: Dependency[]): Record<string, UploadFile[]>;
/**
 * Returns the key of the first required field (in schema iteration order) that
 * has at least one modifiable file with an empty value. Returns null when
 * everything is filled or there are no required fields.
 *
 * Enforcement-agnostic — gate on {@link shouldEnforceRequiredMetadata} first
 * (see the note on {@link getFilesWithMissingRequired}).
 */
export declare function firstMissingRequiredFieldKey(files: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig, dependencies?: Dependency[]): string | null;
/**
 * Bulk-modal variant of `firstMissingRequiredFieldKey`. Reads from the modal's
 * `staged` map (per-file, per-field pending edits) so the validation reflects
 * the user's unsaved changes, not the original `file.meta`. Only considers
 * files in modifiable statuses.
 *
 * Enforcement-agnostic — gate on {@link shouldEnforceRequiredMetadata} first
 * (see the note on {@link getFilesWithMissingRequired}).
 */
export declare function firstMissingRequiredFieldKeyInStaged(staged: Map<string, Map<string, unknown>>, originalFiles: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig, dependencies?: Dependency[]): string | null;
/**
 * Bulk-modal companion that returns ALL required field keys that have at least
 * one modifiable file with a missing value. Used by the sidebar to highlight
 * which required fields still need attention. Same semantics as
 * `firstMissingRequiredFieldKeyInStaged` but does not short-circuit.
 *
 * Enforcement-agnostic — gate on {@link shouldEnforceRequiredMetadata} first
 * (see the note on {@link getFilesWithMissingRequired}).
 */
export declare function missingRequiredFieldKeysInStaged(staged: Map<string, Map<string, unknown>>, originalFiles: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig, dependencies?: Dependency[]): Set<string>;
/**
 * Walk modifiable files and return the first field (by schema order) whose
 * current value conflicts with a firing `allow_values` or `set_values`
 * dependency. Returns `null` when no conflict exists or when deps aren't wired.
 *
 * Used by the host's upload-gate to block uploads while the user sees a ⚠️
 * next to the offending field.
 */
export declare function firstConflictedFieldKey(files: Map<string, UploadFile>, schema: MetadataSchema, dependencies?: Dependency[]): string | null;
/**
 * Deep-merge incoming metadata into existing metadata.
 *
 * - Skips null / undefined / empty-string incoming values
 * - Deduplicates arrays (for tags / multi-select)
 * - Shallow-merges everything else
 */
export declare function deepMergeMeta(existing: Record<string, unknown>, incoming: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=required-fields.d.ts.map