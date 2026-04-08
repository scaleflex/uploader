import { validateField, isEmpty } from './validation';
import type { MetadataField } from './schema.types';

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
// isEmpty
// ---------------------------------------------------------------------------

describe('isEmpty', () => {
  it('null is empty', () => expect(isEmpty(null)).toBe(true));
  it('undefined is empty', () => expect(isEmpty(undefined)).toBe(true));
  it('empty string is empty', () => expect(isEmpty('')).toBe(true));
  it('empty array is empty', () => expect(isEmpty([])).toBe(true));
  it('non-empty string is not empty', () => expect(isEmpty('x')).toBe(false));
  it('non-empty array is not empty', () => expect(isEmpty(['x'])).toBe(false));
  it('zero is empty (falsy)', () => expect(isEmpty(0)).toBe(true));
  it('false is empty (falsy)', () => expect(isEmpty(false)).toBe(true));
  it('true is not empty', () => expect(isEmpty(true)).toBe(false));
  it('object with all empty values is empty', () => {
    expect(isEmpty({ a: '', b: null })).toBe(true);
  });
  it('object with some non-empty values is not empty', () => {
    expect(isEmpty({ a: '', b: 'x' })).toBe(false);
  });
  it('geopoint with empty coords is empty', () => {
    expect(isEmpty({ latitude: '', longitude: '' })).toBe(true);
  });
  it('geopoint with coords is not empty', () => {
    expect(isEmpty({ latitude: '40.7', longitude: '-74.0' })).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// validateField — required
// ---------------------------------------------------------------------------

describe('validateField required', () => {
  it('returns error for required field with empty value', () => {
    const field = makeField({ required: 1, title: 'Title' });
    expect(validateField(field, '')).toBe('Title is required');
  });

  it('passes for required field with value', () => {
    const field = makeField({ required: 1 });
    expect(validateField(field, 'hello')).toBeNull();
  });

  it('respects config.requiredFields using ckey', () => {
    const field = makeField({ required: 0, ckey: 'my_field', title: 'My Field' });
    expect(validateField(field, '', { requiredFields: ['my_field'] } as any)).toBe('My Field is required');
  });

  it('passes for non-required field with empty value', () => {
    const field = makeField({ required: 0 });
    expect(validateField(field, '')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validateField — numeric
// ---------------------------------------------------------------------------

describe('validateField numeric', () => {
  const field = makeField({ type: 'numeric' });

  it('accepts valid integer', () => {
    expect(validateField(field, '42')).toBeNull();
  });

  it('rejects non-integer', () => {
    expect(validateField(field, '3.14')).toBe('Must be an integer');
  });

  it('rejects non-number', () => {
    expect(validateField(field, 'abc')).toBe('Must be a valid number');
  });

  it('rejects out-of-range', () => {
    expect(validateField(field, '2000000000')).toBe('Value out of range (±1,999,999,999)');
  });

  it('skips validation for empty non-required', () => {
    expect(validateField(field, '')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validateField — geopoint
// ---------------------------------------------------------------------------

describe('validateField geopoint', () => {
  const field = makeField({ type: 'geopoint' });

  it('accepts valid coordinates', () => {
    expect(validateField(field, { latitude: '40.7', longitude: '-74.0' })).toBeNull();
  });

  it('requires both lat and lng', () => {
    expect(validateField(field, { latitude: '40.7', longitude: '' })).toBe(
      'Both latitude and longitude are required',
    );
  });

  it('validates latitude range', () => {
    expect(validateField(field, { latitude: '91', longitude: '0' })).toBe(
      'Latitude must be between -90 and 90',
    );
  });

  it('validates longitude range', () => {
    expect(validateField(field, { latitude: '0', longitude: '181' })).toBe(
      'Longitude must be between -180 and 180',
    );
  });
});

// ---------------------------------------------------------------------------
// validateField — regex
// ---------------------------------------------------------------------------

describe('validateField regex', () => {
  it('validates against custom regex pattern', () => {
    const field = makeField({ type: 'text', validation: '^[A-Z]+$' });
    expect(validateField(field, 'HELLO')).toBeNull();
    expect(validateField(field, 'hello')).toBe('Value does not match expected format');
  });

  it('skips invalid regex silently', () => {
    const field = makeField({ type: 'text', validation: '[invalid' });
    expect(validateField(field, 'anything')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validateField — decimal2
// ---------------------------------------------------------------------------

describe('validateField decimal2', () => {
  const field = makeField({ type: 'decimal2' });

  it('accepts valid decimal', () => {
    expect(validateField(field, '3.14')).toBeNull();
  });

  it('accepts integer', () => {
    expect(validateField(field, '42')).toBeNull();
  });

  it('rejects non-number', () => {
    expect(validateField(field, 'abc')).toBe('Must be a valid number');
  });

  it('rejects more than 2 decimal places', () => {
    expect(validateField(field, '3.141')).toBe('Maximum 2 decimal places');
  });

  it('rejects out-of-range', () => {
    expect(validateField(field, '10000000000')).toBe('Value out of range (±9,999,999,999.99)');
  });

  it('skips validation for empty non-required', () => {
    expect(validateField(field, '')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validateField — attachment-uri
// ---------------------------------------------------------------------------

describe('validateField attachment-uri', () => {
  const field = makeField({ type: 'attachment-uri' });

  it('accepts valid https URL', () => {
    expect(validateField(field, 'https://example.com/file.pdf')).toBeNull();
  });

  it('accepts valid http URL', () => {
    expect(validateField(field, 'http://example.com')).toBeNull();
  });

  it('rejects non-http protocols', () => {
    expect(validateField(field, 'ftp://example.com')).toBe('Only http and https URLs are allowed');
  });

  it('rejects invalid URIs', () => {
    expect(validateField(field, 'not a url')).toBe('Invalid URI');
  });

  it('skips validation for empty non-required', () => {
    expect(validateField(field, '')).toBeNull();
  });
});
