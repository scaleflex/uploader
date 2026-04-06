import type {
  MetadataConfig,
  MetadataGroup,
  MetadataSchema,
  RawMetadata,
  RegionalVariantsGroup,
} from './schema.types';

/**
 * Detect placeholder strings that look like developer notes left in the
 * VXP schema (e.g. "??? where it's going to be displayed", "TODO: …").
 * These should be dropped so the uploader's own fallback kicks in.
 *
 * Valid placeholders are also normalized to start with a capital letter
 * so the form keeps consistent sentence case ("test" → "Test").
 */
const DEV_NOTE_RE = /\?\?\?|\bTODO\b|\bTBD\b|\bFIXME\b|\bXXX\b/i;
function sanitizePlaceholder(raw: string | undefined): string | undefined {
  if (!raw) return raw;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  if (DEV_NOTE_RE.test(trimmed)) return undefined;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Normalize a field label to sentence case per the design system.
 * - `text` → `Text`
 * - `asset_expiration` → `Asset expiration`
 * - `assetExpiration` → `Asset expiration`
 * - `SKU`, `DRM`, `URL` (short all-caps acronyms) → kept as-is
 * - `Title` → `Title` (already correct, unchanged)
 */
function toSentenceCaseLabel(raw: string): string {
  if (!raw) return raw;
  // Short all-caps acronyms stay as-is (SKU, DRM, URL, API, ID, UUID, etc.)
  if (/^[A-Z0-9]{2,5}$/.test(raw)) return raw;

  // Split on separators and camelCase boundaries.
  const words = raw
    .replace(/[_\-]+/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/\s+/)
    .filter(Boolean)
    .map(w => (/^[A-Z0-9]{2,5}$/.test(w) ? w : w.toLowerCase()));

  if (words.length === 0) return raw;

  // Capitalize only the first word (unless it's an acronym).
  const first = words[0];
  if (!/^[A-Z0-9]{2,5}$/.test(first)) {
    words[0] = first.charAt(0).toUpperCase() + first.slice(1);
  }
  return words.join(' ');
}

export function parseMetadataSchema(
  metadata: RawMetadata,
  config?: MetadataConfig,
): MetadataSchema {
  const language = config?.language ?? 'en';
  const model = metadata.model ?? [];
  const store = metadata.store ?? {};

  // 1. Filter for FILES only
  const filesModel = model.find(m => m.applies_to === 'FILES');
  let groups: MetadataGroup[] = filesModel?.groups ?? [];

  // 2. Filter by config.fields (if string[])
  if (Array.isArray(config?.fields)) {
    const allowedCkeys = new Set(config!.fields);
    groups = groups
      .map(g => ({
        ...g,
        fields: g.fields.filter(f => allowedCkeys.has(f.ckey)),
      }))
      .filter(g => g.fields.length > 0);
  }

  // 3. Remove hidden fields
  groups = groups
    .map(g => ({
      ...g,
      fields: g.fields.filter(f => !f.hide),
    }))
    .filter(g => g.fields.length > 0);

  // 4. Normalize field titles to sentence case + drop developer-note
  //    placeholders so the uploader's own fallback can take over.
  groups = groups.map(g => ({
    ...g,
    fields: g.fields.map(f => ({
      ...f,
      title: toSentenceCaseLabel(f.title),
      placeholder: sanitizePlaceholder(f.placeholder),
    })),
  }));

  // 5. Flatten fields + build index
  const fields = groups.flatMap(g => g.fields);
  const fieldsByKey = new Map(fields.map(f => [f.key, f]));

  // 5. Extract store data
  const forceFillingOnUpload =
    store.force_filling_metadata_on_upload === true;
  const regionalVariantsGroups: RegionalVariantsGroup[] =
    store.regional_variants_groups ?? [];

  return {
    groups,
    fields,
    fieldsByKey,
    forceFillingOnUpload,
    regionalVariantsGroups,
    language,
  };
}
