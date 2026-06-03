import { UploadFile } from '../../store/store.types';
import { MetadataConfig, MetadataSchema, MetadataField } from './schema.types';
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
 * For each required field, find files (in modifiable statuses) that are
 * missing a value for that field.
 *
 * Returns a map of `{ [fieldKey]: UploadFile[] }` — only entries with
 * at least one file are included.
 */
export declare function getFilesWithMissingRequired(files: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig): Record<string, UploadFile[]>;
/**
 * Returns the key of the first required field (in schema iteration order) that
 * has at least one modifiable file with an empty value. Returns null when
 * everything is filled or there are no required fields.
 */
export declare function firstMissingRequiredFieldKey(files: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig): string | null;
/**
 * Deep-merge incoming metadata into existing metadata.
 *
 * - Skips null / undefined / empty-string incoming values
 * - Deduplicates arrays (for tags / multi-select)
 * - Shallow-merges everything else
 */
export declare function deepMergeMeta(existing: Record<string, unknown>, incoming: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=required-fields.d.ts.map