import { mapValueToBackend, mapValueFromBackend } from './value-transforms';
import type { MetadataField } from './schema.types';
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

// ---------------------------------------------------------------------------
// mapValueFromBackend
// ---------------------------------------------------------------------------

describe('mapValueFromBackend', () => {
  it('text: returns string or empty', () => {
    expect(mapValueFromBackend(makeField({ type: 'text' }), 'hello')).toBe('hello');
    expect(mapValueFromBackend(makeField({ type: 'text' }), null)).toBe('');
    expect(mapValueFromBackend(makeField({ type: 'text' }), undefined)).toBe('');
  });

  it('boolean: converts to string', () => {
    expect(mapValueFromBackend(makeField({ type: 'boolean' }), true)).toBe('true');
    expect(mapValueFromBackend(makeField({ type: 'boolean' }), false)).toBe('false');
    expect(mapValueFromBackend(makeField({ type: 'boolean' }), null)).toBe('null');
  });

  it('date: converts string to Date', () => {
    const result = mapValueFromBackend(makeField({ type: 'date' }), '2024-01-15');
    expect(result).toBeInstanceOf(Date);
    expect((result as Date).getFullYear()).toBe(2024);
  });

  it('date: null returns null', () => {
    expect(mapValueFromBackend(makeField({ type: 'date' }), null)).toBeNull();
  });

  it('geopoint: parses string format', () => {
    expect(mapValueFromBackend(makeField({ type: 'geopoint' }), '(40.7,-74.0)')).toEqual({
      latitude: '40.7',
      longitude: '-74.0',
    });
  });

  it('geopoint: returns empty for null', () => {
    expect(mapValueFromBackend(makeField({ type: 'geopoint' }), null)).toEqual({
      latitude: '',
      longitude: '',
    });
  });

  it('tags: converts string array to TagOption[]', () => {
    expect(mapValueFromBackend(makeField({ type: 'tags' }), ['a', 'b'])).toEqual([
      { value: 'a', label: 'a' },
      { value: 'b', label: 'b' },
    ]);
  });

  it('tags: null returns empty array', () => {
    expect(mapValueFromBackend(makeField({ type: 'tags' }), null)).toEqual([]);
  });

  it('multi-select: returns array as-is', () => {
    expect(mapValueFromBackend(makeField({ type: 'multi-select' }), ['v1', 'v2'])).toEqual(['v1', 'v2']);
  });

  it('decimal2: converts number to string', () => {
    expect(mapValueFromBackend(makeField({ type: 'decimal2' }), 3.14)).toBe('3.14');
  });

  describe('regional variants', () => {
    const field = makeField({
      type: 'text',
      regional_variants_group_uuid: 'rv-group-1',
    });

    it('extracts value for given language', () => {
      expect(mapValueFromBackend(field, { en: 'Hello', fr: 'Bonjour' }, 'en')).toBe('Hello');
      expect(mapValueFromBackend(field, { en: 'Hello', fr: 'Bonjour' }, 'fr')).toBe('Bonjour');
    });

    it('defaults to "en" when no language specified', () => {
      expect(mapValueFromBackend(field, { en: 'Hello', fr: 'Bonjour' })).toBe('Hello');
    });

    it('handles null value', () => {
      expect(mapValueFromBackend(field, null)).toBe('');
    });
  });
});

// ---------------------------------------------------------------------------
// mapValueToBackend
// ---------------------------------------------------------------------------

describe('mapValueToBackend', () => {
  it('text: passes through', () => {
    expect(mapValueToBackend(makeField({ type: 'text' }), 'hello')).toBe('hello');
  });

  it('boolean: converts string to actual boolean', () => {
    expect(mapValueToBackend(makeField({ type: 'boolean' }), 'true')).toBe(true);
    expect(mapValueToBackend(makeField({ type: 'boolean' }), 'false')).toBe(false);
    expect(mapValueToBackend(makeField({ type: 'boolean' }), 'null')).toBeNull();
    expect(mapValueToBackend(makeField({ type: 'boolean' }), '')).toBeNull();
  });

  it('date: converts Date to YYYY-MM-DD string', () => {
    const d = new Date(2024, 0, 15); // Jan 15, 2024
    expect(mapValueToBackend(makeField({ type: 'date' }), d)).toBe('2024-01-15');
  });

  it('date: null returns null', () => {
    expect(mapValueToBackend(makeField({ type: 'date' }), null)).toBeNull();
  });

  it('geopoint: converts object to string format', () => {
    expect(
      mapValueToBackend(makeField({ type: 'geopoint' }), { latitude: '40.7', longitude: '-74.0' }),
    ).toBe('(40.7,-74.0)');
  });

  it('geopoint: empty coords return null', () => {
    expect(
      mapValueToBackend(makeField({ type: 'geopoint' }), { latitude: '', longitude: '' }),
    ).toBeNull();
  });

  it('tags: converts TagOption[] to string[]', () => {
    expect(
      mapValueToBackend(makeField({ type: 'tags' }), [
        { value: 'a', label: 'a' },
        { value: 'b', label: 'b' },
      ]),
    ).toEqual(['a', 'b']);
  });

  it('select-one: empty string becomes null', () => {
    expect(mapValueToBackend(makeField({ type: 'select-one' }), '')).toBeNull();
    expect(mapValueToBackend(makeField({ type: 'select-one' }), 'val')).toBe('val');
  });

  it('numeric: converts to integer', () => {
    expect(mapValueToBackend(makeField({ type: 'numeric' }), '42')).toBe(42);
    expect(mapValueToBackend(makeField({ type: 'numeric' }), '')).toBeNull();
  });

  it('decimal2: converts to number', () => {
    expect(mapValueToBackend(makeField({ type: 'decimal2' }), '3.14')).toBe(3.14);
    expect(mapValueToBackend(makeField({ type: 'decimal2' }), '')).toBeNull();
  });

  describe('regional variants', () => {
    const field = makeField({
      type: 'text',
      regional_variants_group_uuid: 'rv-group-1',
    });

    it('wraps value in language key', () => {
      expect(mapValueToBackend(field, 'Hello', undefined, 'en')).toEqual({ en: 'Hello' });
    });

    it('preserves other language values from file', () => {
      const file = { meta: { test_key: { en: 'Hello', fr: 'Bonjour' } } } as unknown as UploadFile;
      expect(mapValueToBackend(field, 'Hi', file, 'en')).toEqual({ en: 'Hi', fr: 'Bonjour' });
    });

    it('defaults to "en" when no language specified', () => {
      expect(mapValueToBackend(field, 'Hello')).toEqual({ en: 'Hello' });
    });
  });

  describe('ultratags', () => {
    const field = makeField({ type: 'ultratags' });

    it('maps the items array to a flat slug-string array (admin parity, drops i18n placeholders)', () => {
      expect(
        mapValueToBackend(field, [
          { slug: 'rose', sid: '#utrose', i18n: { en: 'Rose' } },
          { slug: 'lily', sid: '#utlily', i18n: { en: 'Lily', '~FR': 'Lily' } },
        ]),
      ).toEqual(['rose', 'lily']);
    });

    it('passes through bare-string slugs', () => {
      expect(mapValueToBackend(field, ['rose', 'lily'])).toEqual(['rose', 'lily']);
    });

    it('filters out items without a slug', () => {
      expect(
        mapValueToBackend(field, [{ sid: '#utorphan' }, { slug: 'rose' }]),
      ).toEqual(['rose']);
    });

    it('defaults to [] when value is not an array', () => {
      expect(mapValueToBackend(field, null)).toEqual([]);
      expect(mapValueToBackend(field, undefined)).toEqual([]);
    });

    it('does NOT wrap as {lang: …} even when the field has a regional_variants_group_uuid', () => {
      const regional = makeField({ type: 'ultratags', regional_variants_group_uuid: 'rv-group-1' });
      expect(
        mapValueToBackend(regional, [{ slug: 'rose' }], undefined, 'fr'),
      ).toEqual(['rose']);
    });
  });
});

describe('mapValueFromBackend: ultratags', () => {
  const field = makeField({ type: 'ultratags' });

  it('extracts a flat slug array into enriched items', () => {
    expect(mapValueFromBackend(field, ['rose', 'lily'])).toEqual([
      { slug: 'rose' },
      { slug: 'lily' },
    ]);
  });

  it('aggregates a per-language map into a single set of items with merged i18n', () => {
    const raw = {
      en: [{ slug: 'rose', sid: '#utrose', label: 'Rose' }],
      fr: [{ slug: 'rose', sid: '#utrose', label: 'Rose FR' }],
    };
    expect(mapValueFromBackend(field, raw)).toEqual([
      { slug: 'rose', sid: '#utrose', i18n: { en: 'Rose', fr: 'Rose FR' } },
    ]);
  });

  it('ignores regional_variants_group_uuid for ultratags (reads the full raw value)', () => {
    const regional = makeField({ type: 'ultratags', regional_variants_group_uuid: 'rv-group-1' });
    const raw = {
      en: [{ slug: 'rose', sid: '#utrose', label: 'Rose' }],
      fr: [{ slug: 'rose', sid: '#utrose', label: 'Rose FR' }],
    };
    expect(mapValueFromBackend(regional, raw, 'en')).toEqual([
      { slug: 'rose', sid: '#utrose', i18n: { en: 'Rose', fr: 'Rose FR' } },
    ]);
  });

  it('returns [] for null/undefined', () => {
    expect(mapValueFromBackend(field, null)).toEqual([]);
    expect(mapValueFromBackend(field, undefined)).toEqual([]);
  });
});
