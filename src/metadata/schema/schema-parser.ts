import type {
  MetadataConfig,
  MetadataGroup,
  MetadataSchema,
  RawMetadata,
  RegionalVariantsGroup,
} from './schema.types';

export function parseMetadataSchema(
  metadata: RawMetadata,
  config?: MetadataConfig,
  productsEnabled = false,
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

  // 4. Flatten fields + build index
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
    productsEnabled,
  };
}
