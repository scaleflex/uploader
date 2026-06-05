import type {
  GeoPoint,
  MetadataConfig,
  MetadataField,
} from './schema.types';
import {
  PRODUCT_POSITION_FIELD_KEY,
  PRODUCT_REF_FIELD_KEY,
} from '../../product/product.fields';
import {
  PRODUCT_REF_INVALID_CHARS,
} from '../../product/product.constants';

export function validateField(
  field: MetadataField,
  value: unknown,
  config?: MetadataConfig,
): string | null {
  // Inlined to avoid an import cycle with required-fields.ts (which uses isEmpty).
  const isRequired =
    config?.requiredFields?.includes(field.ckey) || Boolean(field.required);

  // Required check
  if (isRequired && isEmpty(value)) {
    return `${field.title} is required`;
  }

  // Skip further validation if empty and not required
  if (isEmpty(value)) return null;

  // Synthetic product fields use the same alphanumeric rule as admin v5.
  // Kept inline (rather than dispatching to validateProductRef/Position) so
  // the message is the user-facing English text the bulk modal already shows.
  if (field.key === PRODUCT_REF_FIELD_KEY) {
    if (typeof value !== 'string' || PRODUCT_REF_INVALID_CHARS.test(value)) {
      return 'Reference contains invalid characters';
    }
    return null;
  }
  if (field.key === PRODUCT_POSITION_FIELD_KEY) {
    const n = Number(value);
    if (!Number.isFinite(n) || !Number.isInteger(n)) {
      return 'Position must be an integer';
    }
    return null;
  }

  // Per-type validation
  switch (field.type) {
    case 'numeric': {
      const num = Number(value);
      if (!Number.isFinite(num)) return 'Must be a valid number';
      if (!Number.isInteger(num)) return 'Must be an integer';
      if (num < -1_999_999_999 || num > 1_999_999_999) {
        return 'Value out of range (±1,999,999,999)';
      }
      break;
    }

    case 'decimal2': {
      const dec = Number(value);
      if (!Number.isFinite(dec)) return 'Must be a valid number';
      if (!/^\-?\d*\.?\d{0,2}$/.test(String(value))) {
        return 'Maximum 2 decimal places';
      }
      if (dec < -9_999_999_999.99 || dec > 9_999_999_999.99) {
        return 'Value out of range (±9,999,999,999.99)';
      }
      break;
    }

    case 'geopoint': {
      const geo = value as GeoPoint;
      const hasLat = geo.latitude !== '' && geo.latitude != null;
      const hasLng = geo.longitude !== '' && geo.longitude != null;

      // Both-or-neither
      if (hasLat !== hasLng) {
        return 'Both latitude and longitude are required';
      }
      if (hasLat && hasLng) {
        const lat = Number(geo.latitude);
        const lng = Number(geo.longitude);
        if (!Number.isFinite(lat) || lat < -90 || lat > 90) {
          return 'Latitude must be between -90 and 90';
        }
        if (!Number.isFinite(lng) || lng < -180 || lng > 180) {
          return 'Longitude must be between -180 and 180';
        }
      }
      break;
    }

    case 'attachment-uri': {
      try {
        const parsed = new URL(value as string);
        if (!['http:', 'https:'].includes(parsed.protocol)) {
          return 'Only http and https URLs are allowed';
        }
      } catch {
        return 'Invalid URI';
      }
      break;
    }
  }

  // Custom regex validation from schema (text types only)
  if (field.validation && typeof value === 'string') {
    try {
      const regex = new RegExp(field.validation);
      if (!regex.test(value)) {
        return `Value does not match expected format`;
      }
    } catch {
      // Invalid regex in schema — skip validation silently
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// isEmpty — matches v5 logic
// ---------------------------------------------------------------------------

export function isEmpty(value: unknown): boolean {
  if (value == null) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') {
    return !Object.values(value as Record<string, unknown>).some(
      v => v != null && v !== '',
    );
  }
  return !value;
}
