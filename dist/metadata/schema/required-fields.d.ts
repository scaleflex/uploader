import { UploadFile } from '../../store/store.types';
import { MetadataConfig, MetadataSchema } from './schema.types';
/**
 * Returns true if the value counts as a non-empty metadata value.
 * Inverse of isEmpty().
 */
export declare function isAssetHasMetadataValue(value: unknown): boolean;
/**
 * For each required field, find files (in modifiable statuses) that are
 * missing a value for that field.
 *
 * Returns a map of `{ [fieldKey]: UploadFile[] }` — only entries with
 * at least one file are included.
 */
export declare function getFilesWithMissingRequired(files: Map<string, UploadFile>, schema: MetadataSchema, config?: MetadataConfig): Record<string, UploadFile[]>;
/**
 * Deep-merge incoming metadata into existing metadata.
 *
 * - Skips null / undefined / empty-string incoming values
 * - Deduplicates arrays (for tags / multi-select)
 * - Shallow-merges everything else
 */
export declare function deepMergeMeta(existing: Record<string, unknown>, incoming: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=required-fields.d.ts.map