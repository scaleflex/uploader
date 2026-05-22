import type { UploadFile } from '../../store/store.types';
import type { MetadataConfig, MetadataSchema, MetadataField } from './schema.types';
import { isEmpty } from './validation';

/** File statuses where metadata can still be edited before upload. */
const MODIFIABLE_STATUSES = new Set<UploadFile['status']>([
  'idle',
  'queued',
  'rejected',
]);

/**
 * Returns true if the value counts as a non-empty metadata value.
 * Inverse of isEmpty().
 */
export function isAssetHasMetadataValue(value: unknown): boolean {
  return !isEmpty(value);
}

/**
 * Whether a field is required. The Hub returns `required` as a JSON boolean,
 * but legacy responses use 0/1 — accept both via truthy check.
 */
export function isFieldRequired(
  field: MetadataField,
  config?: MetadataConfig,
): boolean {
  if (config?.requiredFields?.includes(field.ckey)) return true;
  return Boolean(field.required);
}

function getModifiableFiles(files: Map<string, UploadFile>): UploadFile[] {
  return [...files.values()].filter(f => MODIFIABLE_STATUSES.has(f.status));
}

function getRequiredFields(
  schema: MetadataSchema,
  config?: MetadataConfig,
): MetadataField[] {
  return schema.fields.filter(f => isFieldRequired(f, config));
}

/**
 * For each required field, find files (in modifiable statuses) that are
 * missing a value for that field.
 *
 * Returns a map of `{ [fieldKey]: UploadFile[] }` — only entries with
 * at least one file are included.
 */
export function getFilesWithMissingRequired(
  files: Map<string, UploadFile>,
  schema: MetadataSchema,
  config?: MetadataConfig,
): Record<string, UploadFile[]> {
  const modifiableFiles = getModifiableFiles(files);
  if (modifiableFiles.length === 0) return {};

  const result: Record<string, UploadFile[]> = {};
  for (const field of getRequiredFields(schema, config)) {
    const missing = modifiableFiles.filter(
      file => !isAssetHasMetadataValue(file.meta[field.key]),
    );
    if (missing.length > 0) {
      result[field.key] = missing;
    }
  }
  return result;
}

/**
 * Returns the key of the first required field (in schema iteration order) that
 * has at least one modifiable file with an empty value. Returns null when
 * everything is filled or there are no required fields.
 */
export function firstMissingRequiredFieldKey(
  files: Map<string, UploadFile>,
  schema: MetadataSchema,
  config?: MetadataConfig,
): string | null {
  const modifiableFiles = getModifiableFiles(files);
  if (modifiableFiles.length === 0) return null;

  for (const field of getRequiredFields(schema, config)) {
    const someMissing = modifiableFiles.some(
      file => !isAssetHasMetadataValue(file.meta[field.key]),
    );
    if (someMissing) return field.key;
  }
  return null;
}

/**
 * Deep-merge incoming metadata into existing metadata.
 *
 * - Skips null / undefined / empty-string incoming values
 * - Deduplicates arrays (for tags / multi-select)
 * - Shallow-merges everything else
 */
export function deepMergeMeta(
  existing: Record<string, unknown>,
  incoming: Record<string, unknown>,
): Record<string, unknown> {
  const merged: Record<string, unknown> = { ...existing };

  for (const key of Object.keys(incoming)) {
    const incomingVal = incoming[key];

    // Skip empty incoming values
    if (incomingVal == null || incomingVal === '') continue;

    const existingVal = existing[key];

    if (Array.isArray(incomingVal)) {
      if (Array.isArray(existingVal)) {
        // Deduplicate by stringifying for primitive arrays
        const seen = new Set(existingVal.map(v => JSON.stringify(v)));
        const combined = [...existingVal];
        for (const item of incomingVal) {
          const serialized = JSON.stringify(item);
          if (!seen.has(serialized)) {
            seen.add(serialized);
            combined.push(item);
          }
        }
        merged[key] = combined;
      } else {
        merged[key] = incomingVal;
      }
    } else {
      merged[key] = incomingVal;
    }
  }

  return merged;
}
