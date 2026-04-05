import { getAvailableOperations, applyBulkOperation } from './bulk-operations';
import type { MetadataFieldType } from '../schema/schema.types';

// ---------------------------------------------------------------------------
// getAvailableOperations
// ---------------------------------------------------------------------------

describe('getAvailableOperations', () => {
  const singleValueTypes: MetadataFieldType[] = [
    'text', 'textarea', 'numeric', 'decimal2', 'boolean',
    'date', 'select-one', 'geopoint', 'attachment-uri',
  ];

  const arrayTypes: MetadataFieldType[] = ['multi-select', 'tags', 'integer-list'];

  it.each(singleValueTypes)('returns [SET] for %s', (type) => {
    const ops = getAvailableOperations(type);
    expect(ops).toHaveLength(1);
    expect(ops[0].key).toBe('SET');
  });

  it.each(arrayTypes)('returns [SET, ADD, DELETE] for %s', (type) => {
    const ops = getAvailableOperations(type);
    expect(ops).toHaveLength(3);
    expect(ops.map(o => o.key)).toEqual(['SET', 'ADD', 'DELETE']);
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
});
