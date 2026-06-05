import {
  isAssetHasMetadataValue,
  getFilesWithMissingRequired,
  firstMissingRequiredFieldKey,
  deepMergeMeta,
  isFieldRequired,
} from './required-fields';
import type { MetadataField, MetadataSchema } from './schema.types';
import type { UploadFile } from '../../store/store.types';

function makeField(overrides: Partial<MetadataField>): MetadataField {
  return {
    key: 'test_key',
    ckey: 'test_ckey',
    uuid: 'uuid-1',
    title: 'Test',
    type: 'text',
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: null,
    permissions: [],
    ...overrides,
  };
}

function makeFile(id: string, meta: Record<string, unknown> = {}): UploadFile {
  return {
    id,
    status: 'idle',
    file: null,
    remoteUrl: null,
    name: `${id}.jpg`,
    size: 1000,
    type: 'image/jpeg',
    previewUrl: null,
    duration: null,
    progress: 0,
    speed: 0,
    bytesUploaded: 0,
    error: null,
    retryCount: 0,
    response: null,
    addedAt: Date.now(),
    meta,
    tags: [],
    remoteInfo: null,
    isTus: false,
    tusUploadUrl: null,
  };
}

// ---------------------------------------------------------------------------
// isAssetHasMetadataValue
// ---------------------------------------------------------------------------

describe('isAssetHasMetadataValue', () => {
  it('returns false for null', () => expect(isAssetHasMetadataValue(null)).toBe(false));
  it('returns false for undefined', () => expect(isAssetHasMetadataValue(undefined)).toBe(false));
  it('returns false for empty string', () => expect(isAssetHasMetadataValue('')).toBe(false));
  it('returns false for empty array', () => expect(isAssetHasMetadataValue([])).toBe(false));
  it('returns true for non-empty string', () => expect(isAssetHasMetadataValue('hello')).toBe(true));
  it('returns true for non-empty array', () => expect(isAssetHasMetadataValue(['a'])).toBe(true));
  it('returns true for number', () => expect(isAssetHasMetadataValue(42)).toBe(true));
});

// ---------------------------------------------------------------------------
// isFieldRequired — unsupported types are never required
// ---------------------------------------------------------------------------

describe('isFieldRequired', () => {
  it('returns false for asset-attachments even if schema marks it required', () => {
    const field = makeField({ type: 'asset-attachments', required: 1 });
    expect(isFieldRequired(field)).toBe(false);
  });

  it('returns false for ultratags even if listed in config.requiredFields', () => {
    const field = makeField({ ckey: 'ut', type: 'ultratags', required: 0 });
    expect(
      isFieldRequired(field, { projectUuid: 'p', requiredFields: ['ut'] }),
    ).toBe(false);
  });

  it('returns false for taxonomy-node even if required', () => {
    const field = makeField({ type: 'taxonomy-node', required: true });
    expect(isFieldRequired(field)).toBe(false);
  });

  it('still honors required for supported types', () => {
    expect(isFieldRequired(makeField({ required: 1 }))).toBe(true);
    expect(isFieldRequired(makeField({ required: 0 }))).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// getFilesWithMissingRequired
// ---------------------------------------------------------------------------

describe('getFilesWithMissingRequired', () => {
  const titleField = makeField({ key: 'title', ckey: 'title', required: 1 });
  const descField = makeField({ key: 'desc', ckey: 'desc', required: 0 });
  const schema: MetadataSchema = {
    groups: [{ uuid: 'g1', name: 'General', isRoot: true, fields: [titleField, descField] }],
    fields: [titleField, descField],
    fieldsByKey: new Map([['title', titleField], ['desc', descField]]),
    forceFillingOnUpload: false,
    regionalVariantsGroups: [],
    language: 'en',
  };

  it('finds files missing required field values', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: '' })],
      ['f2', makeFile('f2', { title: 'Has title' })],
    ]);
    const result = getFilesWithMissingRequired(files, schema);
    expect(result).toHaveProperty('title');
    expect(result.title).toHaveLength(1);
    expect(result.title[0].id).toBe('f1');
  });

  it('returns empty when all required fields are filled', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: 'Title 1' })],
    ]);
    expect(getFilesWithMissingRequired(files, schema)).toEqual({});
  });

  it('skips non-modifiable files', () => {
    const files = new Map<string, UploadFile>([
      ['f1', { ...makeFile('f1', { title: '' }), status: 'uploading' as const }],
    ]);
    expect(getFilesWithMissingRequired(files, schema)).toEqual({});
  });

  it('uses config.requiredFields (ckey-based)', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: 'Title', desc: '' })],
    ]);
    const result = getFilesWithMissingRequired(files, schema, {
      requiredFields: ['desc'],
      projectUuid: 'p1',
    });
    expect(result).toHaveProperty('desc');
    expect(result.desc).toHaveLength(1);
  });

  it('returns empty for empty files map', () => {
    expect(getFilesWithMissingRequired(new Map(), schema)).toEqual({});
  });
});

// ---------------------------------------------------------------------------
// firstMissingRequiredFieldKey
// ---------------------------------------------------------------------------

describe('firstMissingRequiredFieldKey', () => {
  const titleField = makeField({ key: 'title', ckey: 'title', required: 1 });
  const descField = makeField({ key: 'desc', ckey: 'desc', required: 1 });
  const tagField = makeField({ key: 'tag', ckey: 'tag', required: 0 });
  const schema: MetadataSchema = {
    groups: [
      {
        uuid: 'g1',
        name: 'General',
        isRoot: true,
        fields: [titleField, descField, tagField],
      },
    ],
    fields: [titleField, descField, tagField],
    fieldsByKey: new Map([
      ['title', titleField],
      ['desc', descField],
      ['tag', tagField],
    ]),
    forceFillingOnUpload: false,
    regionalVariantsGroups: [],
    language: 'en',
  };

  it('returns the first required field with an empty value', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: 'Has title', desc: '' })],
    ]);
    expect(firstMissingRequiredFieldKey(files, schema)).toBe('desc');
  });

  it('returns the first required field in schema order even when later ones are also empty', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: '', desc: '' })],
    ]);
    expect(firstMissingRequiredFieldKey(files, schema)).toBe('title');
  });

  it('returns null when everything is filled', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: 'A', desc: 'B' })],
    ]);
    expect(firstMissingRequiredFieldKey(files, schema)).toBeNull();
  });

  it('returns null when there are no modifiable files', () => {
    const files = new Map<string, UploadFile>([
      [
        'f1',
        { ...makeFile('f1', { title: '' }), status: 'uploading' as const },
      ],
    ]);
    expect(firstMissingRequiredFieldKey(files, schema)).toBeNull();
  });

  it('honors config.requiredFields (ckey-based)', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: 'A', desc: 'B', tag: '' })],
    ]);
    expect(
      firstMissingRequiredFieldKey(files, schema, {
        requiredFields: ['tag'],
        projectUuid: 'p1',
      }),
    ).toBe('tag');
  });

  it('returns the field even if only one of several files is missing it', () => {
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { title: 'A', desc: 'B' })],
      ['f2', makeFile('f2', { title: 'A', desc: '' })],
    ]);
    expect(firstMissingRequiredFieldKey(files, schema)).toBe('desc');
  });

  it('treats boolean `required: true` from the API the same as numeric `1`', () => {
    const boolField = makeField({
      key: 'mandatory',
      ckey: 'mandatory',
      required: true,
    });
    const boolSchema: MetadataSchema = {
      groups: [{ uuid: 'g1', name: 'G', isRoot: true, fields: [boolField] }],
      fields: [boolField],
      fieldsByKey: new Map([['mandatory', boolField]]),
      forceFillingOnUpload: false,
      regionalVariantsGroups: [],
      language: 'en',
    };
    const files = new Map<string, UploadFile>([
      ['f1', makeFile('f1', { mandatory: '' })],
    ]);
    expect(firstMissingRequiredFieldKey(files, boolSchema)).toBe('mandatory');
  });
});

// ---------------------------------------------------------------------------
// deepMergeMeta
// ---------------------------------------------------------------------------

describe('deepMergeMeta', () => {
  it('merges non-overlapping keys', () => {
    expect(deepMergeMeta({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it('overwrites scalar values', () => {
    expect(deepMergeMeta({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
  });

  it('skips null incoming values', () => {
    expect(deepMergeMeta({ a: 1 }, { a: null })).toEqual({ a: 1 });
  });

  it('skips undefined incoming values', () => {
    expect(deepMergeMeta({ a: 1 }, { a: undefined })).toEqual({ a: 1 });
  });

  it('skips empty string incoming values', () => {
    expect(deepMergeMeta({ a: 'hello' }, { a: '' })).toEqual({ a: 'hello' });
  });

  it('deduplicates arrays', () => {
    expect(deepMergeMeta({ tags: ['a', 'b'] }, { tags: ['b', 'c'] })).toEqual({
      tags: ['a', 'b', 'c'],
    });
  });

  it('replaces non-array with incoming array', () => {
    expect(deepMergeMeta({ tags: 'old' }, { tags: ['new'] })).toEqual({ tags: ['new'] });
  });

  it('preserves existing when incoming array has no new items', () => {
    expect(deepMergeMeta({ tags: ['a'] }, { tags: ['a'] })).toEqual({ tags: ['a'] });
  });
});
