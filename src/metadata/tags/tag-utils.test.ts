import { isSameTag, normalizeLabel, normalizeValue, createTag } from './tag-utils';

describe('isSameTag', () => {
  it('matches identical labels', () => {
    expect(isSameTag({ value: 'a', label: 'Photo' }, { value: 'b', label: 'Photo' })).toBe(true);
  });

  it('matches case-insensitively', () => {
    expect(isSameTag({ value: 'a', label: 'photo' }, { value: 'b', label: 'PHOTO' })).toBe(true);
  });

  it('trims whitespace', () => {
    expect(isSameTag({ value: 'a', label: '  photo  ' }, { value: 'b', label: 'photo' })).toBe(true);
  });

  it('does not match different labels', () => {
    expect(isSameTag({ value: 'a', label: 'photo' }, { value: 'b', label: 'video' })).toBe(false);
  });
});

describe('normalizeLabel', () => {
  it('trims whitespace', () => {
    expect(normalizeLabel('  hello  ')).toBe('hello');
  });

  it('collapses multiple spaces', () => {
    expect(normalizeLabel('hello   world')).toBe('hello world');
  });

  it('handles single word', () => {
    expect(normalizeLabel('photo')).toBe('photo');
  });
});

describe('normalizeValue', () => {
  it('replaces spaces with hyphens', () => {
    expect(normalizeValue('hello world')).toBe('hello-world');
  });

  it('trims and collapses before hyphenating', () => {
    expect(normalizeValue('  hello   world  ')).toBe('hello-world');
  });
});

describe('createTag', () => {
  it('creates a tag with normalized label and value', () => {
    expect(createTag('Hello World')).toEqual({
      label: 'Hello World',
      value: 'Hello-World',
    });
  });

  it('trims and normalizes whitespace', () => {
    expect(createTag('  multiple   spaces  ')).toEqual({
      label: 'multiple spaces',
      value: 'multiple-spaces',
    });
  });
});
