import type { MetadataField, MetadataFieldType } from '../schema/schema.types';
import { isUnsupportedFieldType } from '../schema/schema.types';
import type { UploadFile } from '../../store/store.types';
import { mapValueToBackend } from '../schema/value-transforms';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BulkOperation = 'SET' | 'ADD' | 'DELETE';

export interface BulkOperationDef {
  key: BulkOperation;
  label: string;
}

/** Pending bulk operation — value the user has entered in the op-bar but not yet applied. */
export interface PendingOp {
  operation: BulkOperation;
  value: unknown; // frontend format
}

// ---------------------------------------------------------------------------
// Field-type → available operations
// ---------------------------------------------------------------------------

/** Multi-value field types — bulk ops merge/dedup arrays. */
export const ARRAY_TYPES: ReadonlySet<MetadataFieldType> = new Set([
  'multi-select',
  'tags',
]);

/** Text-like field types — bulk ops concatenate / substring-remove strings. */
export const TEXT_TYPES: ReadonlySet<MetadataFieldType> = new Set([
  'text',
  'textarea',
  'attachment-uri',
]);

/** Operation labels are context-aware: the same key (SET / ADD / DELETE)
 *  reads differently depending on the field type so the UX matches the
 *  actual semantics. Scalars only expose Set + Clear because Append
 *  has no meaningful behaviour for a single value. */
export function getAvailableOperations(
  fieldType: MetadataFieldType,
): BulkOperationDef[] {
  if (isUnsupportedFieldType(fieldType)) return [];
  if (ARRAY_TYPES.has(fieldType)) {
    return [
      { key: 'SET', label: 'Set' },
      { key: 'ADD', label: 'Add to' },
      { key: 'DELETE', label: 'Remove from' },
    ];
  }
  if (TEXT_TYPES.has(fieldType)) {
    return [
      { key: 'SET', label: 'Set' },
      { key: 'ADD', label: 'Append' },
      { key: 'DELETE', label: 'Remove' },
    ];
  }
  // Scalars: numeric / decimal2 / date / select-one / boolean / geopoint
  return [
    { key: 'SET', label: 'Set' },
    { key: 'DELETE', label: 'Clear' },
  ];
}

/** Whether a non-empty value is needed for the operation to be meaningful.
 *  Scalar DELETE ("Clear") needs no value — it always nulls the field. */
export function isValueRequiredForPreview(
  operation: BulkOperation,
  fieldType: MetadataFieldType,
): boolean {
  if (operation === 'DELETE') {
    return ARRAY_TYPES.has(fieldType) || TEXT_TYPES.has(fieldType);
  }
  return true;
}

// ---------------------------------------------------------------------------
// Apply a single bulk operation
// ---------------------------------------------------------------------------

export function applyBulkOperation(
  operation: BulkOperation,
  currentValue: unknown,
  operationValue: unknown,
  fieldType: MetadataFieldType,
): unknown {
  const isArray = ARRAY_TYPES.has(fieldType);
  const isText = TEXT_TYPES.has(fieldType);

  switch (operation) {
    case 'SET':
      return operationValue;

    case 'ADD': {
      // Arrays — merge entries, deduplicating
      if (isArray) {
        const current = Array.isArray(currentValue) ? currentValue : [];
        const incoming = Array.isArray(operationValue) ? operationValue : [];
        if (incoming.length === 0) return current;

        if (fieldType === 'tags') {
          const seen = new Set(current.map((t: string) => t));
          const combined = [...current];
          for (const item of incoming) {
            const label = typeof item === 'string' ? item : String(item);
            if (!seen.has(label)) {
              seen.add(label);
              combined.push(label);
            }
          }
          return combined;
        }

        const seen = new Set(current.map((v: unknown) => JSON.stringify(v)));
        const combined = [...current];
        for (const item of incoming) {
          const serialized = JSON.stringify(item);
          if (!seen.has(serialized)) {
            seen.add(serialized);
            combined.push(item);
          }
        }
        return combined;
      }

      // Text-like — concatenate strings with a single space separator
      if (isText) {
        const incoming = typeof operationValue === 'string' ? operationValue : '';
        if (!incoming) return currentValue ?? '';
        const current = typeof currentValue === 'string' ? currentValue : '';
        return current ? `${current} ${incoming}` : incoming;
      }

      // Scalars (numeric / date / select / boolean / etc.) — Append behaves
      // like Overwrite since there is nothing meaningful to "add to".
      return operationValue;
    }

    case 'DELETE': {
      // Arrays — remove specific items
      if (isArray) {
        const current = Array.isArray(currentValue) ? currentValue : [];
        const toRemove = Array.isArray(operationValue) ? operationValue : [];
        if (toRemove.length === 0) return current;

        if (fieldType === 'tags') {
          const removeSet = new Set(
            toRemove.map((t: string) => (typeof t === 'string' ? t : String(t))),
          );
          return current.filter(
            (t: string) => !removeSet.has(typeof t === 'string' ? t : String(t)),
          );
        }

        const removeSet = new Set(
          toRemove.map((v: unknown) => JSON.stringify(v)),
        );
        return current.filter(
          (v: unknown) => !removeSet.has(JSON.stringify(v)),
        );
      }

      // Text — if operationValue provided, remove that substring; otherwise clear all
      if (isText) {
        const toRemove = typeof operationValue === 'string' ? operationValue : '';
        if (toRemove) {
          const current = typeof currentValue === 'string' ? currentValue : '';
          return current.replaceAll(toRemove, '').replace(/\s{2,}/g, ' ').trim();
        }
        return '';
      }
      if (fieldType === 'geopoint') return { latitude: '', longitude: '' };
      return null;
    }

    default:
      return operationValue;
  }
}

// ---------------------------------------------------------------------------
// Compute the full result of a bulk operation on a single file's field,
// handling regional-variant unwrap/rewrap and frontend→backend conversion.
// Used by both the live preview in rows and the actual Apply handler.
// ---------------------------------------------------------------------------

export function computeBulkResult(
  field: MetadataField,
  currentBackendValue: unknown,
  frontendOpValue: unknown,
  operation: BulkOperation,
  language?: string,
): unknown {
  const lang = language ?? 'en';
  const isRegional = !!field.regional_variants_group_uuid;

  const fakeFile = {
    meta: { [field.key]: currentBackendValue },
  } as UploadFile;

  const backendValue = mapValueToBackend(field, frontendOpValue, fakeFile, language);

  const isRegionalObject = (v: unknown): v is Record<string, unknown> =>
    isRegional && v !== null && typeof v === 'object' && !Array.isArray(v);

  const innerCurrent = isRegionalObject(currentBackendValue)
    ? currentBackendValue[lang]
    : currentBackendValue;
  const innerBackend = isRegionalObject(backendValue)
    ? backendValue[lang]
    : backendValue;

  const innerResult = applyBulkOperation(operation, innerCurrent, innerBackend, field.type);

  return isRegional
    ? {
        ...(isRegionalObject(currentBackendValue) ? currentBackendValue : {}),
        [lang]: innerResult,
      }
    : innerResult;
}
