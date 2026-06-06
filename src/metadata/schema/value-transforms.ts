import type {
  GeoPoint,
  MetadataField,
  TagOption,
} from './schema.types';
import type { UploadFile } from '../../store/store.types';
import type { UltratagsValueItem } from '../ultratags/ultratags.types';
import { extractUltratagItems } from '../ultratags/ultratags.utils';

// ---------------------------------------------------------------------------
// Backend → Frontend
// ---------------------------------------------------------------------------

export function mapValueFromBackend(
  field: MetadataField,
  rawValue: unknown,
  language?: string,
): unknown {
  let value = rawValue;

  // Regional variant extraction
  if (
    field.regional_variants_group_uuid &&
    value != null &&
    typeof value === 'object' &&
    !Array.isArray(value)
  ) {
    value = (value as Record<string, unknown>)[language ?? 'en'];
  }

  switch (field.type) {
    case 'geopoint':
      return parseGeoPoint(value);

    case 'boolean':
      if (value === true) return 'true';
      if (value === false) return 'false';
      return 'null';

    case 'date':
      if (!value) return null;
      return new Date(value as string);

    case 'decimal2':
      return value != null ? String(value) : '';

    case 'tags':
      if (!Array.isArray(value)) return [];
      return (value as unknown[]).map(t =>
        typeof t === 'string' ? { value: t, label: t } : t,
      );

    case 'ultratags':
      // Backend may return a flat array (slugs / objects) or a per-language map
      // (`{ lang: [{slug,sid,label}, …] }`); extractUltratagItems handles both
      // by merging into the enriched UltratagsValueItem[] the UI works with.
      return extractUltratagItems(rawValue);

    case 'multi-select':
      return value || [];

    default:
      return value ?? '';
  }
}

// ---------------------------------------------------------------------------
// Frontend → Backend
// ---------------------------------------------------------------------------

export function mapValueToBackend(
  field: MetadataField,
  value: unknown,
  file?: UploadFile,
  language?: string,
): unknown {
  let transformed: unknown;

  switch (field.type) {
    case 'geopoint': {
      const geo = value as GeoPoint | null | undefined;
      if (
        !geo ||
        geo.latitude === '' ||
        geo.latitude == null ||
        geo.longitude === '' ||
        geo.longitude == null
      ) {
        transformed = null;
      } else {
        transformed = `(${geo.latitude},${geo.longitude})`;
      }
      break;
    }

    case 'boolean':
      if (value === 'true') transformed = true;
      else if (value === 'false') transformed = false;
      else transformed = null; // '', 'null', or anything else
      break;

    case 'date': {
      if (!value) {
        transformed = null;
      } else {
        const d = value instanceof Date ? value : new Date(value as string);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        transformed = `${year}-${month}-${day}`;
      }
      break;
    }

    case 'tags':
      transformed = Array.isArray(value)
        ? (value as TagOption[]).map(t => t?.label ?? '')
        : [];
      break;

    case 'ultratags':
      // BE autocomplete returns "~XX" placeholders in `i18n` for languages not
      // yet filled in. Sending the full item back would overwrite real
      // translations with those placeholders, so the save payload carries
      // slugs only (admin parity, see
      // js-admin-react-filerobot-v5/src/features/asset-details/utils/map-metadata-values-to-backend.ts).
      transformed = Array.isArray(value)
        ? (value as Array<UltratagsValueItem | string>)
            .map((item) => (typeof item === 'string' ? item : item.slug))
            .filter((slug): slug is string => !!slug)
        : [];
      break;

    case 'select-one':
      transformed = value === '' ? null : value;
      break;

    case 'numeric': {
      if (value === '' || value == null) { transformed = null; break; }
      const n = Number(value);
      transformed = Number.isFinite(n) ? Math.round(n) : null;
      break;
    }

    case 'decimal2': {
      if (value === '' || value == null) { transformed = null; break; }
      const d = Number(value);
      transformed = Number.isFinite(d) ? d : null;
      break;
    }

    default:
      transformed = value;
  }

  // Wrap regional variants. Ultratags are language-independent — their
  // `regional_variants_group_uuid` only drives label fallback for display, not
  // per-language storage, so the flat array is saved as-is (admin parity).
  if (field.regional_variants_group_uuid && field.type !== 'ultratags') {
    const lang = language ?? 'en';
    const existing =
      (file?.meta?.[field.key] as Record<string, unknown> | undefined) ?? {};
    return { ...existing, [lang]: transformed };
  }

  return transformed;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseGeoPoint(value: unknown): GeoPoint {
  if (typeof value === 'string') {
    const match = /\(([^)]+)\)/.exec(value);
    if (match) {
      const parts = match[1].split(',');
      if (parts.length === 2) {
        return {
          latitude: parts[0].trim(),
          longitude: parts[1].trim(),
        };
      }
    }
  }
  return { latitude: '', longitude: '' };
}
