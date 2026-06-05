import { getAvailableOperations, applyBulkOperation } from './bulk-operations';
import type { MetadataFieldType } from '../schema/schema.types';

// ---------------------------------------------------------------------------
// getAvailableOperations
// ---------------------------------------------------------------------------

describe('getAvailableOperations', () => {
  const arrayTypes: MetadataFieldType[] = ['multi-select', 'tags'];
  const textTypes: MetadataFieldType[] = ['text', 'textarea', 'attachment-uri'];
  const scalarTypes: MetadataFieldType[] = [
    'numeric', 'decimal2', 'boolean', 'date', 'select-one', 'geopoint',
  ];
  const unsupportedTypes: MetadataFieldType[] = [
    'asset-attachments', 'attachments-assets', 'integer-list', 'ultratags', 'taxonomy-node',
  ];

  it.each(unsupportedTypes)('returns [] for unsupported type %s', (type) => {
    expect(getAvailableOperations(type)).toEqual([]);
  });

  it.each(arrayTypes)('returns [SET, ADD, DELETE] for %s', (type) => {
    const ops = getAvailableOperations(type);
    expect(ops.map(o => o.key)).toEqual(['SET', 'ADD', 'DELETE']);
  });

  it.each(textTypes)('returns [SET, ADD, DELETE] for %s', (type) => {
    const ops = getAvailableOperations(type);
    expect(ops.map(o => o.key)).toEqual(['SET', 'ADD', 'DELETE']);
  });

  it.each(scalarTypes)('returns [SET, DELETE] for %s', (type) => {
    const ops = getAvailableOperations(type);
    expect(ops.map(o => o.key)).toEqual(['SET', 'DELETE']);
  });

  it('labels text DELETE as "Remove" (substring removal, not wipe)', () => {
    const ops = getAvailableOperations('text');
    const del = ops.find(o => o.key === 'DELETE');
    expect(del?.label).toBe('Remove');
  });

  it('labels scalar DELETE as "Clear"', () => {
    const ops = getAvailableOperations('numeric');
    const del = ops.find(o => o.key === 'DELETE');
    expect(del?.label).toBe('Clear');
  });
});

// ---------------------------------------------------------------------------
// applyBulkOperation — SET
// ---------------------------------------------------------------------------

describe('applyBulkOperation SET', () => {
  it('replaces value for text', () => {
    expect(applyBulkOperation('SET', 'old', 'new', 'text')).toBe('new');
  });

  it('replaces value for boolean', () => {
    expect(applyBulkOperation('SET', true, false, 'boolean')).toBe(false);
  });

  it('sets value to null (clears)', () => {
    expect(applyBulkOperation('SET', 'something', null, 'text')).toBeNull();
  });

  it('replaces entire array for tags', () => {
    expect(applyBulkOperation('SET', ['a', 'b'], ['c'], 'tags')).toEqual(['c']);
  });

  it('replaces entire array for multi-select', () => {
    expect(applyBulkOperation('SET', ['x'], ['y', 'z'], 'multi-select')).toEqual(['y', 'z']);
  });
});

// ---------------------------------------------------------------------------
// applyBulkOperation — ADD
// ---------------------------------------------------------------------------

describe('applyBulkOperation ADD', () => {
  describe('tags (string deduplication)', () => {
    it('appends new tags', () => {
      expect(applyBulkOperation('ADD', ['a'], ['b', 'c'], 'tags')).toEqual(['a', 'b', 'c']);
    });

    it('deduplicates existing tags', () => {
      expect(applyBulkOperation('ADD', ['a', 'b'], ['b', 'c'], 'tags')).toEqual(['a', 'b', 'c']);
    });

    it('handles null current value', () => {
      expect(applyBulkOperation('ADD', null, ['x'], 'tags')).toEqual(['x']);
    });

    it('handles undefined current value', () => {
      expect(applyBulkOperation('ADD', undefined, ['x'], 'tags')).toEqual(['x']);
    });

    it('handles empty incoming', () => {
      expect(applyBulkOperation('ADD', ['a'], [], 'tags')).toEqual(['a']);
    });
  });

  describe('text (string concatenation)', () => {
    it('appends text with space separator', () => {
      expect(applyBulkOperation('ADD', 'hello', 'world', 'text')).toBe('hello world');
    });

    it('handles null current value', () => {
      expect(applyBulkOperation('ADD', null, 'world', 'text')).toBe('world');
    });

    it('handles empty current value', () => {
      expect(applyBulkOperation('ADD', '', 'world', 'text')).toBe('world');
    });

    it('returns current when incoming is empty', () => {
      expect(applyBulkOperation('ADD', 'hello', '', 'text')).toBe('hello');
    });

    it('works with textarea type', () => {
      expect(applyBulkOperation('ADD', 'line1', 'line2', 'textarea')).toBe('line1 line2');
    });

    it('works with attachment-uri type', () => {
      expect(applyBulkOperation('ADD', 'https://a.com', 'https://b.com', 'attachment-uri'))
        .toBe('https://a.com https://b.com');
    });
  });

  describe('multi-select (JSON.stringify deduplication)', () => {
    it('appends new values', () => {
      expect(applyBulkOperation('ADD', ['v1'], ['v2'], 'multi-select')).toEqual(['v1', 'v2']);
    });

    it('deduplicates existing values', () => {
      expect(applyBulkOperation('ADD', ['v1', 'v2'], ['v2', 'v3'], 'multi-select')).toEqual(['v1', 'v2', 'v3']);
    });

    it('handles null current value', () => {
      expect(applyBulkOperation('ADD', null, ['v1'], 'multi-select')).toEqual(['v1']);
    });
  });
});

// ---------------------------------------------------------------------------
// applyBulkOperation — DELETE
// ---------------------------------------------------------------------------

describe('applyBulkOperation DELETE', () => {
  describe('tags', () => {
    it('removes matching tags', () => {
      expect(applyBulkOperation('DELETE', ['a', 'b', 'c'], ['b'], 'tags')).toEqual(['a', 'c']);
    });

    it('removes multiple tags', () => {
      expect(applyBulkOperation('DELETE', ['a', 'b', 'c'], ['a', 'c'], 'tags')).toEqual(['b']);
    });

    it('ignores non-existing tags', () => {
      expect(applyBulkOperation('DELETE', ['a'], ['z'], 'tags')).toEqual(['a']);
    });

    it('handles null current value', () => {
      expect(applyBulkOperation('DELETE', null, ['a'], 'tags')).toEqual([]);
    });

    it('handles empty remove list', () => {
      expect(applyBulkOperation('DELETE', ['a', 'b'], [], 'tags')).toEqual(['a', 'b']);
    });
  });

  describe('multi-select', () => {
    it('removes matching values', () => {
      expect(applyBulkOperation('DELETE', ['v1', 'v2', 'v3'], ['v2'], 'multi-select')).toEqual(['v1', 'v3']);
    });

    it('handles null current value', () => {
      expect(applyBulkOperation('DELETE', null, ['v1'], 'multi-select')).toEqual([]);
    });
  });

  describe('text (substring removal, not wipe)', () => {
    it('removes a substring from text', () => {
      expect(applyBulkOperation('DELETE', '123', '1', 'text')).toBe('23');
    });

    it('removes every occurrence', () => {
      expect(applyBulkOperation('DELETE', 'foo bar foo', 'foo', 'text')).toBe('bar');
    });

    it('collapses double spaces left by the removal', () => {
      expect(applyBulkOperation('DELETE', 'a b c', 'b', 'text')).toBe('a c');
    });

    it('wipes the whole field when no substring is provided', () => {
      expect(applyBulkOperation('DELETE', 'anything', '', 'text')).toBe('');
    });

    it('handles null current value', () => {
      expect(applyBulkOperation('DELETE', null, 'x', 'text')).toBe('');
    });
  });

  describe('scalar types', () => {
    it('clears numeric to null', () => {
      expect(applyBulkOperation('DELETE', 42, null, 'numeric')).toBeNull();
    });

    it('clears date to null', () => {
      expect(applyBulkOperation('DELETE', '2026-01-01', null, 'date')).toBeNull();
    });

    it('clears geopoint to empty latitude/longitude', () => {
      expect(applyBulkOperation('DELETE', '(40,-74)', null, 'geopoint'))
        .toEqual({ latitude: '', longitude: '' });
    });
  });
});
