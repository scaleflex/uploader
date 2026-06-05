import { describe, it, expect } from 'vitest';
import {
  validateProductRef,
  validateProductPosition,
  hasProductData,
  compactProduct,
  mergeProductPatch,
} from './product.constants';

describe('validateProductRef', () => {
  it('accepts empty values', () => {
    expect(validateProductRef('')).toBeNull();
    expect(validateProductRef(undefined)).toBeNull();
    expect(validateProductRef(null)).toBeNull();
  });

  it('accepts plain alphanumeric refs', () => {
    expect(validateProductRef('SKU12345')).toBeNull();
    expect(validateProductRef('abc')).toBeNull();
    expect(validateProductRef('A1B2C3')).toBeNull();
  });

  it('rejects refs with whitespace', () => {
    expect(validateProductRef('SKU 12345')).toBe('productRefInvalid');
    expect(validateProductRef('a\tb')).toBe('productRefInvalid');
  });

  it('rejects refs with forbidden punctuation', () => {
    for (const bad of ['a!b', 'a#b', 'a$b', 'a%b', 'a*b', 'a(b)', 'a/b', 'a\\b', 'a,b', 'a;b']) {
      expect(validateProductRef(bad)).toBe('productRefInvalid');
    }
  });

  it('rejects non-string values', () => {
    expect(validateProductRef(123)).toBe('productRefInvalid');
    expect(validateProductRef({})).toBe('productRefInvalid');
  });
});

describe('validateProductPosition', () => {
  it('accepts empty values', () => {
    expect(validateProductPosition('')).toBeNull();
    expect(validateProductPosition(undefined)).toBeNull();
    expect(validateProductPosition(null)).toBeNull();
  });

  it('accepts integers and numeric strings', () => {
    expect(validateProductPosition(0)).toBeNull();
    expect(validateProductPosition(42)).toBeNull();
    expect(validateProductPosition('7')).toBeNull();
    expect(validateProductPosition(-3)).toBeNull();
  });

  it('rejects non-integer numbers', () => {
    expect(validateProductPosition(1.5)).toBe('productPositionInvalid');
    expect(validateProductPosition('2.7')).toBe('productPositionInvalid');
  });

  it('rejects non-numeric values', () => {
    expect(validateProductPosition('abc')).toBe('productPositionInvalid');
    expect(validateProductPosition({})).toBe('productPositionInvalid');
    expect(validateProductPosition(NaN)).toBe('productPositionInvalid');
  });
});

describe('hasProductData', () => {
  it('returns false for empty/missing', () => {
    expect(hasProductData(null)).toBe(false);
    expect(hasProductData(undefined)).toBe(false);
    expect(hasProductData({})).toBe(false);
    expect(hasProductData({ ref: '' })).toBe(false);
  });

  it('returns true when any field is set, including position 0', () => {
    expect(hasProductData({ ref: 'SKU' })).toBe(true);
    expect(hasProductData({ position: 0 })).toBe(true);
    expect(hasProductData({ ref: 'x', position: 1 })).toBe(true);
  });
});

describe('compactProduct', () => {
  it('drops empty/undefined fields', () => {
    expect(compactProduct({ ref: '', position: undefined })).toEqual({});
    expect(compactProduct({ ref: 'SKU', position: undefined })).toEqual({ ref: 'SKU' });
    expect(compactProduct({ ref: '', position: 3 })).toEqual({ position: 3 });
  });

  it('keeps zero position', () => {
    expect(compactProduct({ position: 0 })).toEqual({ position: 0 });
  });
});

describe('mergeProductPatch', () => {
  it('adds new keys', () => {
    expect(mergeProductPatch({}, { ref: 'SKU' })).toEqual({ ref: 'SKU' });
  });

  it('overwrites existing keys', () => {
    expect(mergeProductPatch({ ref: 'old' }, { ref: 'new' })).toEqual({ ref: 'new' });
  });

  it('clears a key when value is undefined', () => {
    expect(mergeProductPatch({ ref: 'SKU', position: 3 }, { ref: undefined }))
      .toEqual({ position: 3 });
  });

  it('does not mutate the base', () => {
    const base = { ref: 'SKU' };
    mergeProductPatch(base, { ref: 'NEW' });
    expect(base).toEqual({ ref: 'SKU' });
  });
});
