import type { MetadataFieldType } from '../schema/schema.types';

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

const ARRAY_TYPES: Set<MetadataFieldType> = new Set([
  'multi-select',
  'tags',
  'integer-list',
]);

const TEXT_TYPES: Set<MetadataFieldType> = new Set([
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
  if (ARRAY_TYPES.has(fieldType)) {
    return [
      { key: 'SET', label: 'Set' },
    ];
  }
  if (TEXT_TYPES.has(fieldType)) {
    return [
      { key: 'SET', label: 'Set' },
      { key: 'ADD', label: 'Append' },
      { key: 'DELETE', label: 'Clear' },
    ];
  }
  // Scalars: numeric / decimal2 / date / select-one / boolean / geopoint
  return [
    { key: 'SET', label: 'Set' },
    { key: 'DELETE', label: 'Clear' },
  ];
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
