import type { UploadFile } from '../../store/store.types';
import type { MetadataConfig, MetadataSchema } from './schema.types';
import { isEmpty } from './validation';

/**
 * Returns true if the value counts as a non-empty metadata value.
 * Inverse of isEmpty().
 */
export function isAssetHasMetadataValue(value: unknown): boolean {
  return !isEmpty(value);
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
  const modifiableStatuses = new Set(['idle', 'queued', 'rejected']);

  const modifiableFiles = [...files.values()].filter(f =>
    modifiableStatuses.has(f.status),
  );

  if (modifiableFiles.length === 0) return {};

  const requiredCkeys = new Set(config?.requiredFields ?? []);
  const requiredFields = schema.fields.filter(
    f => f.required === 1 || requiredCkeys.has(f.ckey),
  );

  const result: Record<string, UploadFile[]> = {};

  for (const field of requiredFields) {
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
