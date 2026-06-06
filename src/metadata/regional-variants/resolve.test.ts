import type {
  MetadataField,
  MetadataConfig,
  RegionalVariantsGroup,
} from '../schema/schema.types';
import {
  resolveFieldRegionalKey,
  getFieldRegionalVariantHint,
  buildDefaultRegionalFilters,
} from './resolve';

function field(overrides: Partial<MetadataField> = {}): MetadataField {
  return {
    key: 'k',
    ckey: 'ck',
    uuid: 'u',
    title: 'Field',
    type: 'text',
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: null,
    permissions: [],
    ...overrides,
  };
}

function group(
  uuid: string,
  variants: Array<[string, string]>,
  overrides: Partial<RegionalVariantsGroup> = {},
): RegionalVariantsGroup {
  return {
    uuid,
    label: 'Group',
    type: 'FTYPE_CUSTOM',
    isRoot: true,
    variants: variants.map(([api, label]) => ({
      api_value: api,
      internal_unique_value: api,
      label,
    })),
    ...overrides,
  };
}

describe('resolveFieldRegionalKey', () => {
  it('returns undefined for non-regional fields', () => {
    expect(
      resolveFieldRegionalKey(field({ regional_variants_group_uuid: null }), {
        projectUuid: 'p',
        regionalFilters: { 'g-1': 'fr' },
      }),
    ).toBeUndefined();
  });

  it('returns the regional filter for the field’s group', () => {
    const f = field({ regional_variants_group_uuid: 'g-1' });
    const config: MetadataConfig = {
      projectUuid: 'p',
      regionalFilters: { 'g-1': 'fr', 'g-2': 'USD' },
    };
    expect(resolveFieldRegionalKey(f, config)).toBe('fr');
  });

  it('returns the per-group filter even when both groups exist', () => {
    const fLang = field({ key: 'a', regional_variants_group_uuid: 'g-lang' });
    const fCur = field({ key: 'b', regional_variants_group_uuid: 'g-cur' });
    const config: MetadataConfig = {
      projectUuid: 'p',
      regionalFilters: { 'g-lang': 'de', 'g-cur': 'EUR' },
    };
    expect(resolveFieldRegionalKey(fLang, config)).toBe('de');
    expect(resolveFieldRegionalKey(fCur, config)).toBe('EUR');
  });

  it('falls back to config.language when no regionalFilters entry exists', () => {
    const f = field({ regional_variants_group_uuid: 'g-1' });
    expect(
      resolveFieldRegionalKey(f, { projectUuid: 'p', language: 'es' }),
    ).toBe('es');
  });

  it('falls back to config.language when regionalFilters is missing the group', () => {
    const f = field({ regional_variants_group_uuid: 'missing-uuid' });
    const config: MetadataConfig = {
      projectUuid: 'p',
      language: 'es',
      regionalFilters: { 'other-uuid': 'fr' },
    };
    expect(resolveFieldRegionalKey(f, config)).toBe('es');
  });

  it('returns undefined when neither regionalFilters nor language is set', () => {
    const f = field({ regional_variants_group_uuid: 'g-1' });
    expect(resolveFieldRegionalKey(f, { projectUuid: 'p' })).toBeUndefined();
  });
});

describe('getFieldRegionalVariantHint', () => {
  const langs = group('g-lang', [['en', 'English'], ['fr', 'Français']], {
    label: 'Languages',
    type: 'FTYPE_LANGUAGES',
  });
  const cur = group('g-cur', [['USD', 'US Dollar'], ['EUR', 'Euro']], {
    label: 'Currencies',
    type: 'FTYPE_CURRENCIES',
  });

  it('returns undefined for non-regional fields', () => {
    expect(
      getFieldRegionalVariantHint(field(), [langs], { 'g-lang': 'fr' }, 'en'),
    ).toBeUndefined();
  });

  it('formats as "<group label>: <variant label>"', () => {
    const f = field({ regional_variants_group_uuid: 'g-lang' });
    expect(
      getFieldRegionalVariantHint(f, [langs], { 'g-lang': 'fr' }, 'en'),
    ).toBe('Languages: Français');
  });

  it('uses the correct group for a CURRENCIES field', () => {
    const f = field({ regional_variants_group_uuid: 'g-cur' });
    expect(
      getFieldRegionalVariantHint(f, [langs, cur], { 'g-cur': 'EUR' }, 'en'),
    ).toBe('Currencies: Euro');
  });

  it('falls back to fallbackLanguage when filters have no entry', () => {
    const f = field({ regional_variants_group_uuid: 'g-lang' });
    expect(
      getFieldRegionalVariantHint(f, [langs], undefined, 'en'),
    ).toBe('Languages: English');
  });

  it('returns undefined when the group is missing from the schema', () => {
    const f = field({ regional_variants_group_uuid: 'ghost' });
    expect(
      getFieldRegionalVariantHint(f, [langs], { ghost: 'x' }, undefined),
    ).toBeUndefined();
  });

  it('returns undefined when the active variant key does not match any variant', () => {
    const f = field({ regional_variants_group_uuid: 'g-lang' });
    expect(
      getFieldRegionalVariantHint(f, [langs], { 'g-lang': 'jp' }, undefined),
    ).toBeUndefined();
  });
});

describe('buildDefaultRegionalFilters', () => {
  it('returns {} for an empty list', () => {
    expect(buildDefaultRegionalFilters([])).toEqual({});
    expect(buildDefaultRegionalFilters(undefined)).toEqual({});
  });

  it('picks the first variant of each group', () => {
    expect(
      buildDefaultRegionalFilters([
        group('a', [['en', 'En'], ['fr', 'Fr']]),
        group('b', [['USD', 'USD'], ['EUR', 'EUR']]),
      ]),
    ).toEqual({ a: 'en', b: 'USD' });
  });

  it('skips groups with no variants', () => {
    const empty = group('empty', []);
    const full = group('full', [['x', 'X']]);
    expect(buildDefaultRegionalFilters([empty, full])).toEqual({ full: 'x' });
  });
});
