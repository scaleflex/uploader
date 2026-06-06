import type { MetadataField, MetadataConfig } from '../schema/schema.types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ScalarDiff {
  kind: 'scalar';
  oldDisplay: string;
  newDisplay: string;
  oldEmpty: boolean;
  newEmpty: boolean;
}

export interface ArrayDiffItem {
  label: string;
  state: 'kept' | 'added' | 'removed';
}

export interface ArrayDiff {
  kind: 'array';
  items: ArrayDiffItem[];
}

export type FieldDiff = ScalarDiff | ArrayDiff;

// ---------------------------------------------------------------------------
// Array field types
// ---------------------------------------------------------------------------

const ARRAY_TYPES = new Set(['multi-select', 'tags']);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function extractRegionalVariant(
  value: unknown,
  field: MetadataField,
  language?: string,
): unknown {
  if (
    !field.regional_variants_group_uuid ||
    value == null ||
    typeof value !== 'object' ||
    Array.isArray(value)
  ) {
    return value;
  }
  return (value as Record<string, unknown>)[language ?? 'en'];
}

function toArray(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function isEmptyValue(v: unknown): boolean {
  if (v == null || v === '') return true;
  if (Array.isArray(v) && v.length === 0) return true;
  if (typeof v === 'object' && !Array.isArray(v)) {
    return !Object.values(v as Record<string, unknown>).some(
      (val) => val != null && val !== '',
    );
  }
  return false;
}

function lookupLabel(field: MetadataField, value: string): string {
  const pv = field.possible_values?.find(
    (p) => p.internal_unique_value === value || p.api_value === value,
  );
  return pv?.label ?? String(value);
}

// ---------------------------------------------------------------------------
// Scalar formatting (backend format → display string)
// ---------------------------------------------------------------------------

function formatScalar(field: MetadataField, value: unknown): string {
  if (value == null || value === '') return '';

  switch (field.type) {
    case 'boolean': {
      if (value === true) return 'True';
      if (value === false) return 'False';
      return 'None';
    }

    case 'date': {
      if (typeof value !== 'string' || value.length === 0) return '';
      try {
        return new Date(value + 'T00:00').toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      } catch {
        return value;
      }
    }

    case 'numeric': {
      const n = Number(value);
      if (!Number.isFinite(n)) return String(value);
      return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }

    case 'decimal2': {
      const n = Number(value);
      if (!Number.isFinite(n)) return String(value);
      return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }

    case 'select-one':
      return lookupLabel(field, String(value));

    case 'geopoint': {
      // Frontend object format from applyBulkOperation
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const geo = value as { latitude?: string; longitude?: string };
        if (!geo.latitude && !geo.longitude) return '';
        return `(${geo.latitude ?? ''}, ${geo.longitude ?? ''})`;
      }
      // Backend stores "(lat,lng)" string
      if (typeof value === 'string') {
        const m = value.match(/^\((.+),(.+)\)$/);
        if (m) return `(${m[1].trim()}, ${m[2].trim()})`;
      }
      return String(value);
    }

    default:
      return String(value);
  }
}

// ---------------------------------------------------------------------------
// Array diff computation
// ---------------------------------------------------------------------------

function diffTags(oldArr: unknown[], newArr: unknown[]): ArrayDiffItem[] {
  const oldStrs = oldArr.map((t) => (typeof t === 'string' ? t : String(t)));
  const newStrs = newArr.map((t) => (typeof t === 'string' ? t : String(t)));
  const oldSet = new Set(oldStrs);
  const newSet = new Set(newStrs);

  const items: ArrayDiffItem[] = [];
  for (const tag of newStrs) {
    items.push({ label: tag, state: oldSet.has(tag) ? 'kept' : 'added' });
  }
  for (const tag of oldStrs) {
    if (!newSet.has(tag)) {
      items.push({ label: tag, state: 'removed' });
    }
  }
  return items;
}

function diffMultiSelect(
  oldArr: unknown[],
  newArr: unknown[],
  field: MetadataField,
): ArrayDiffItem[] {
  const oldSet = new Set(oldArr.map((v) => JSON.stringify(v)));
  const newSet = new Set(newArr.map((v) => JSON.stringify(v)));

  const items: ArrayDiffItem[] = [];
  for (const v of newArr) {
    const key = JSON.stringify(v);
    const label = typeof v === 'string' ? lookupLabel(field, v) : String(v);
    items.push({ label, state: oldSet.has(key) ? 'kept' : 'added' });
  }
  for (const v of oldArr) {
    const key = JSON.stringify(v);
    if (!newSet.has(key)) {
      const label = typeof v === 'string' ? lookupLabel(field, v) : String(v);
      items.push({ label, state: 'removed' });
    }
  }
  return items;
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

export function computeFieldDiff(
  field: MetadataField,
  oldValue: unknown,
  newValue: unknown,
  config?: MetadataConfig | null,
): FieldDiff {
  const language = config?.language;
  const oldV = extractRegionalVariant(oldValue, field, language);
  const newV = extractRegionalVariant(newValue, field, language);

  if (ARRAY_TYPES.has(field.type)) {
    const oldArr = toArray(oldV);
    const newArr = toArray(newV);

    if (field.type === 'tags') {
      return { kind: 'array', items: diffTags(oldArr, newArr) };
    }
    return { kind: 'array', items: diffMultiSelect(oldArr, newArr, field) };
  }

  return {
    kind: 'scalar',
    oldDisplay: formatScalar(field, oldV),
    newDisplay: formatScalar(field, newV),
    oldEmpty: isEmptyValue(oldV),
    newEmpty: isEmptyValue(newV),
  };
}
