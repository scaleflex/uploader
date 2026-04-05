import { parseMetadataSchema } from './schema-parser';

const makeRawMetadata = (
  fields: Array<{ key: string; ckey: string; hide?: boolean; type?: string }> = [],
  groupName = 'General',
) => ({
  model: [
    {
      applies_to: 'FILES' as const,
      groups: [
        {
          uuid: 'g1',
          name: groupName,
          isRoot: true,
          fields: fields.map((f) => ({
            uuid: `uuid-${f.key}`,
            title: f.key,
            required: 0 as const,
            possible_values: [],
            regional_variants_group_uuid: null,
            permissions: [],
            type: f.type ?? 'text',
            ...f,
          })),
        },
      ],
    },
  ],
  store: {
    force_filling_metadata_on_upload: false,
    regional_variants_groups: [],
  },
});

describe('parseMetadataSchema', () => {
  it('parses fields from FILES model', () => {
    const raw = makeRawMetadata([
      { key: 'title', ckey: 'title' },
      { key: 'desc', ckey: 'desc' },
    ]);
    const schema = parseMetadataSchema(raw);
    expect(schema.fields).toHaveLength(2);
    expect(schema.fields[0].key).toBe('title');
  });

  it('builds fieldsByKey map', () => {
    const raw = makeRawMetadata([{ key: 'title', ckey: 'title' }]);
    const schema = parseMetadataSchema(raw);
    expect(schema.fieldsByKey.get('title')).toBeDefined();
    expect(schema.fieldsByKey.get('title')!.ckey).toBe('title');
  });

  it('preserves group structure', () => {
    const raw = makeRawMetadata([{ key: 'title', ckey: 'title' }], 'Custom Group');
    const schema = parseMetadataSchema(raw);
    expect(schema.groups).toHaveLength(1);
    expect(schema.groups[0].name).toBe('Custom Group');
  });

  it('filters fields by config.fields (ckey-based)', () => {
    const raw = makeRawMetadata([
      { key: 'title', ckey: 'title' },
      { key: 'desc', ckey: 'desc' },
      { key: 'alt', ckey: 'alt' },
    ]);
    const schema = parseMetadataSchema(raw, {
      projectUuid: 'p1',
      fields: ['title', 'alt'],
    });
    expect(schema.fields).toHaveLength(2);
    expect(schema.fields.map((f) => f.ckey)).toEqual(['title', 'alt']);
  });

  it('removes empty groups after field filtering', () => {
    const raw = {
      model: [
        {
          applies_to: 'FILES' as const,
          groups: [
            {
              uuid: 'g1',
              name: 'Group A',
              isRoot: true,
              fields: [
                { key: 'a', ckey: 'a', uuid: 'u1', title: 'A', type: 'text' as const, required: 0 as const, possible_values: [], regional_variants_group_uuid: null, permissions: [] },
              ],
            },
            {
              uuid: 'g2',
              name: 'Group B',
              isRoot: false,
              fields: [
                { key: 'b', ckey: 'b', uuid: 'u2', title: 'B', type: 'text' as const, required: 0 as const, possible_values: [], regional_variants_group_uuid: null, permissions: [] },
              ],
            },
          ],
        },
      ],
      store: {},
    };
    const schema = parseMetadataSchema(raw, {
      projectUuid: 'p1',
      fields: ['a'],
    });
    expect(schema.groups).toHaveLength(1);
    expect(schema.groups[0].name).toBe('Group A');
  });

  it('removes hidden fields', () => {
    const raw = makeRawMetadata([
      { key: 'visible', ckey: 'visible' },
      { key: 'hidden', ckey: 'hidden', hide: true },
    ]);
    const schema = parseMetadataSchema(raw);
    expect(schema.fields).toHaveLength(1);
    expect(schema.fields[0].key).toBe('visible');
  });

  it('handles config.fields = "all" (no filtering)', () => {
    const raw = makeRawMetadata([
      { key: 'a', ckey: 'a' },
      { key: 'b', ckey: 'b' },
    ]);
    const schema = parseMetadataSchema(raw, {
      projectUuid: 'p1',
      fields: 'all',
    });
    expect(schema.fields).toHaveLength(2);
  });

  it('reads forceFillingOnUpload from store', () => {
    const raw = {
      model: [],
      store: { force_filling_metadata_on_upload: true },
    };
    expect(parseMetadataSchema(raw).forceFillingOnUpload).toBe(true);
  });

  it('defaults forceFillingOnUpload to false', () => {
    expect(parseMetadataSchema({ model: [], store: {} }).forceFillingOnUpload).toBe(false);
  });

  it('uses config.language or defaults to "en"', () => {
    expect(parseMetadataSchema({}).language).toBe('en');
    expect(parseMetadataSchema({}, { projectUuid: 'p1', language: 'fr' }).language).toBe('fr');
  });

  it('returns empty schema for missing model', () => {
    const schema = parseMetadataSchema({});
    expect(schema.fields).toHaveLength(0);
    expect(schema.groups).toHaveLength(0);
    expect(schema.fieldsByKey.size).toBe(0);
  });

  it('ignores non-FILES models', () => {
    const raw = {
      model: [
        {
          applies_to: 'DIRECTORIES' as const,
          groups: [
            {
              uuid: 'g1',
              name: 'Dir Group',
              isRoot: true,
              fields: [
                { key: 'x', ckey: 'x', uuid: 'u1', title: 'X', type: 'text' as const, required: 0 as const, possible_values: [], regional_variants_group_uuid: null, permissions: [] },
              ],
            },
          ],
        },
      ],
    };
    const schema = parseMetadataSchema(raw);
    expect(schema.fields).toHaveLength(0);
  });

  it('reads regional variants groups from store', () => {
    const rvGroup = {
      uuid: 'rv1',
      label: 'Languages',
      type: 'LANGUAGES' as const,
      isRoot: true,
      variants: [{ internal_unique_value: 'en', api_value: 'en', label: 'English' }],
    };
    const raw = {
      model: [],
      store: { regional_variants_groups: [rvGroup] },
    };
    const schema = parseMetadataSchema(raw);
    expect(schema.regionalVariantsGroups).toHaveLength(1);
    expect(schema.regionalVariantsGroups[0].uuid).toBe('rv1');
  });
});
