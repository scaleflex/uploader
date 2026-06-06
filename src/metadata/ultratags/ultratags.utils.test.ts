import {
  buildUltratagsLookup,
  deriveSlug,
  enrichUltratagItems,
  extractUltratagItems,
  findUltratagEntry,
  isUltratagSid,
  isValidUltratagSlug,
  mergeUltratagItems,
  resolveLabel,
} from './ultratags.utils';
import type { UltratagEntry } from './ultratags.types';

describe('isUltratagSid', () => {
  it('returns true for #ut-prefixed strings', () => {
    expect(isUltratagSid('#utabc123')).toBe(true);
  });
  it('returns false for slugs and other strings', () => {
    expect(isUltratagSid('rose')).toBe(false);
    expect(isUltratagSid('')).toBe(false);
  });
});

describe('deriveSlug', () => {
  it('lowercases and replaces whitespace with underscores', () => {
    expect(deriveSlug('Red Rose')).toBe('red_rose');
  });
  it('matches admin: "Hello World" → "hello_world"', () => {
    expect(deriveSlug('Hello World')).toBe('hello_world');
  });
  it('replaces non-word characters with underscores and collapses runs', () => {
    expect(deriveSlug("L'éléphant")).toBe('l_l_phant');
  });
  it('trims leading and trailing underscores', () => {
    expect(deriveSlug('  *Cool!*  ')).toBe('cool');
  });
  it('returns empty string for empty/whitespace input', () => {
    expect(deriveSlug('')).toBe('');
    expect(deriveSlug('   ')).toBe('');
  });
});

describe('isValidUltratagSlug', () => {
  it('accepts a–z 0–9 _ -', () => {
    expect(isValidUltratagSlug('rose')).toBe(true);
    expect(isValidUltratagSlug('red-rose_1')).toBe(true);
  });
  it('rejects uppercase and special characters', () => {
    expect(isValidUltratagSlug('Rose')).toBe(false);
    expect(isValidUltratagSlug('rose!')).toBe(false);
    expect(isValidUltratagSlug('')).toBe(false);
  });
});

describe('resolveLabel', () => {
  const entry: UltratagEntry = {
    uuid: 'u',
    sid: '#ut1',
    slug: 'rose',
    i18n: { en: 'Rose', fr: 'Rose FR', '~ES': 'Variant ES' },
  };

  it('returns the direct label when present', () => {
    expect(resolveLabel(entry, 'en', 'en').value).toBe('Rose');
  });

  it('falls back to the regional variant key when missing the direct lang', () => {
    expect(resolveLabel(entry, 'es', 'en').value).toBe('Variant ES');
    expect(resolveLabel(entry, 'es', 'en').isFallback).toBe(true);
  });

  it('falls back to defaultLang when neither direct nor variant exists', () => {
    expect(resolveLabel(entry, 'de', 'en').value).toBe('Rose');
    expect(resolveLabel(entry, 'de', 'en').isFallback).toBe(true);
  });

  it('returns empty when nothing resolves', () => {
    expect(
      resolveLabel({ slug: 'rose', i18n: {} }, 'en', 'fr').value,
    ).toBe('');
  });
});

describe('buildUltratagsLookup + findUltratagEntry', () => {
  it('indexes entries by both sid and slug', () => {
    const entries: UltratagEntry[] = [
      { uuid: 'u', sid: '#utrose', slug: 'rose' },
    ];
    const lookup = buildUltratagsLookup(entries);
    expect(findUltratagEntry(lookup, '#utrose')?.slug).toBe('rose');
    expect(findUltratagEntry(lookup, 'rose')?.sid).toBe('#utrose');
    expect(findUltratagEntry(lookup, 'absent')).toBeUndefined();
  });
});

describe('extractUltratagItems', () => {
  it('treats every bare string as { slug } (admin parity, including SID-like strings)', () => {
    expect(extractUltratagItems(['rose', '#utrose'])).toEqual([
      { slug: 'rose' },
      { slug: '#utrose' },
    ]);
  });

  it('keeps the first occurrence when duplicates show up by sid', () => {
    const out = extractUltratagItems([
      { sid: '#utrose', slug: 'rose' },
      { sid: '#utrose', slug: 'rose-clone' },
    ]);
    expect(out).toHaveLength(1);
    expect(out[0].slug).toBe('rose-clone'); // last-write wins on inner fields
  });

  it('merges per-language map into a single item with aggregated i18n', () => {
    const out = extractUltratagItems({
      en: [{ slug: 'rose', sid: '#utrose', label: 'Rose' }],
      fr: [{ slug: 'rose', sid: '#utrose', label: 'Rose FR' }],
    });
    expect(out).toHaveLength(1);
    expect(out[0].i18n).toEqual({ en: 'Rose', fr: 'Rose FR' });
  });

  it('handles mixed strings + objects', () => {
    const out = extractUltratagItems([
      'rose',
      { sid: '#utlily', slug: 'lily' },
    ]);
    expect(out).toEqual([
      { slug: 'rose' },
      { sid: '#utlily', slug: 'lily' },
    ]);
  });
});

describe('mergeUltratagItems', () => {
  it('adds new items and dedups by sid', () => {
    const existing = [{ sid: '#utrose', slug: 'rose' }];
    const incoming = [{ sid: '#utlily', slug: 'lily' }, { sid: '#utrose', slug: 'red' }];
    expect(mergeUltratagItems(existing, incoming, false)).toEqual([
      { sid: '#utrose', slug: 'rose' },
      { sid: '#utlily', slug: 'lily' },
    ]);
  });

  it('removes items by any of sid/slug/uuid', () => {
    const existing = [
      { sid: '#utrose', slug: 'rose' },
      { sid: '#utlily', slug: 'lily' },
    ];
    const incoming = [{ slug: 'lily' }];
    expect(mergeUltratagItems(existing, incoming, true)).toEqual([
      { sid: '#utrose', slug: 'rose' },
    ]);
  });
});

describe('enrichUltratagItems', () => {
  it('fills in sid/uuid/i18n from the lookup keyed by slug', () => {
    const lookup = buildUltratagsLookup([
      { uuid: 'u1', sid: '#utrose', slug: 'rose', i18n: { en: 'Rose' } },
    ]);
    const enriched = enrichUltratagItems([{ slug: 'rose' }], lookup);
    expect(enriched).toEqual([
      { slug: 'rose', sid: '#utrose', uuid: 'u1', i18n: { en: 'Rose' } },
    ]);
  });

  it('leaves items alone when the lookup misses', () => {
    const lookup = buildUltratagsLookup([]);
    expect(enrichUltratagItems([{ slug: 'rose' }], lookup)).toEqual([{ slug: 'rose' }]);
  });

  it('preserves user-supplied i18n over lookup', () => {
    const lookup = buildUltratagsLookup([
      { uuid: 'u1', sid: '#utrose', slug: 'rose', i18n: { en: 'Rose (from API)' } },
    ]);
    const enriched = enrichUltratagItems(
      [{ slug: 'rose', i18n: { en: 'Custom' } }],
      lookup,
    );
    expect(enriched[0].i18n).toEqual({ en: 'Custom' });
  });
});
