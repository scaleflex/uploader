import type { MetadataFieldType } from '../schema/schema.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BulkOperation = 'SET' | 'ADD' | 'DELETE';

export interface BulkOperationDef {
  key: BulkOperation;
  label: string;
}

const SET: BulkOperationDef = { key: 'SET', label: 'Set' };
const ADD: BulkOperationDef = { key: 'ADD', label: 'Add' };
const DELETE: BulkOperationDef = { key: 'DELETE', label: 'Delete' };

// ---------------------------------------------------------------------------
// Field-type → available operations
// ---------------------------------------------------------------------------

const ARRAY_TYPES: Set<MetadataFieldType> = new Set([
  'multi-select',
  'tags',
  'integer-list',
]);

export function getAvailableOperations(
  fieldType: MetadataFieldType,
): BulkOperationDef[] {
  if (ARRAY_TYPES.has(fieldType)) return [SET, ADD, DELETE];
  return [SET];
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
  switch (operation) {
    case 'SET':
      return operationValue;

    case 'ADD': {
      const current = Array.isArray(currentValue) ? currentValue : [];
      const incoming = Array.isArray(operationValue) ? operationValue : [];
      if (incoming.length === 0) return current;

      if (fieldType === 'tags') {
        // Deduplicate tags by label string
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

      // multi-select / integer-list — deduplicate by JSON.stringify
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

    case 'DELETE': {
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

      // multi-select / integer-list
      const removeSet = new Set(
        toRemove.map((v: unknown) => JSON.stringify(v)),
      );
      return current.filter(
        (v: unknown) => !removeSet.has(JSON.stringify(v)),
      );
    }

    default:
      return operationValue;
  }
}
