import { describe, it, expect } from 'vitest';
import {
  PRODUCT_REF_FIELD_KEY,
  PRODUCT_POSITION_FIELD_KEY,
  PRODUCT_GROUP_UUID,
  isProductFieldKey,
  productKeyOf,
  makeProductFields,
  makeProductGroup,
  injectProductGroup,
} from './product.fields';
import type { TFunction } from '../store/store.types';
import type { MetadataGroup, MetadataSchema } from '../metadata/schema/schema.types';

const t: TFunction = (k, d) => (typeof d === 'string' ? d : k);

describe('isProductFieldKey', () => {
  it('recognizes the synthetic product keys', () => {
    expect(isProductFieldKey(PRODUCT_REF_FIELD_KEY)).toBe(true);
    expect(isProductFieldKey(PRODUCT_POSITION_FIELD_KEY)).toBe(true);
  });

  it('rejects everything else', () => {
    expect(isProductFieldKey('title')).toBe(false);
    expect(isProductFieldKey('ref')).toBe(false); // bare key without `product.` prefix
    expect(isProductFieldKey('')).toBe(false);
  });
});

describe('productKeyOf', () => {
  it('maps synthetic keys to Product keys', () => {
    expect(productKeyOf(PRODUCT_REF_FIELD_KEY)).toBe('ref');
    expect(productKeyOf(PRODUCT_POSITION_FIELD_KEY)).toBe('position');
  });

  it('returns null for unknown keys', () => {
    expect(productKeyOf('title')).toBeNull();
    expect(productKeyOf('ref')).toBeNull();
  });
});

describe('makeProductFields', () => {
  it('returns ref + position with the right types and localized titles', () => {
    const fields = makeProductFields(t);
    expect(fields).toHaveLength(2);

    const ref = fields[0];
    expect(ref.key).toBe(PRODUCT_REF_FIELD_KEY);
    expect(ref.type).toBe('text');
    expect(ref.title).toBe('Product reference');

    const position = fields[1];
    expect(position.key).toBe(PRODUCT_POSITION_FIELD_KEY);
    expect(position.type).toBe('numeric');
    expect(position.title).toBe('Position');
  });

  it('honors custom translations', () => {
    const customT: TFunction = (k) =>
      k === 'productRefLabel'
        ? 'Référence'
        : k === 'productPositionLabel'
          ? 'Position'
          : k;
    const [ref] = makeProductFields(customT);
    expect(ref.title).toBe('Référence');
  });
});

describe('makeProductGroup', () => {
  it('wraps the fields in a non-root group (slots in after Root groups)', () => {
    const group = makeProductGroup(t);
    expect(group.uuid).toBe(PRODUCT_GROUP_UUID);
    expect(group.isRoot).toBe(false);
    expect(group.fields).toHaveLength(2);
    expect(group.name).toBe('Product');
  });
});

describe('injectProductGroup', () => {
  function group(name: string, isRoot: boolean): MetadataGroup {
    return { uuid: `g-${name}`, name, isRoot, fields: [] };
  }
  function schema(groups: MetadataGroup[]): MetadataSchema {
    return {
      groups,
      fields: groups.flatMap((g) => g.fields),
      fieldsByKey: new Map(),
      forceFillingOnUpload: false,
      regionalVariantsGroups: [],
      language: 'en',
      productsEnabled: true,
    };
  }

  it('inserts Product right after the last root group', () => {
    const s = schema([
      group('Root', true),
      group('Geolocation', false),
    ]);
    const out = injectProductGroup(s, t);
    expect(out.groups.map((g) => g.name)).toEqual([
      'Root',
      'Product',
      'Geolocation',
    ]);
  });

  it('inserts after the last root group when multiple roots exist', () => {
    const s = schema([
      group('Root1', true),
      group('Root2', true),
      group('Other', false),
    ]);
    const out = injectProductGroup(s, t);
    expect(out.groups.map((g) => g.name)).toEqual([
      'Root1',
      'Root2',
      'Product',
      'Other',
    ]);
  });

  it('inserts at the top when there are no root groups', () => {
    const s = schema([
      group('Geolocation', false),
      group('Other', false),
    ]);
    const out = injectProductGroup(s, t);
    expect(out.groups[0].name).toBe('Product');
    expect(out.groups.map((g) => g.name)).toEqual([
      'Product',
      'Geolocation',
      'Other',
    ]);
  });

  it('appends when all groups are root', () => {
    const s = schema([
      group('Root1', true),
      group('Root2', true),
    ]);
    const out = injectProductGroup(s, t);
    expect(out.groups.map((g) => g.name)).toEqual([
      'Root1',
      'Root2',
      'Product',
    ]);
  });

  it('rebuilds fields and fieldsByKey to include the product fields', () => {
    const s = schema([group('Root', true)]);
    const out = injectProductGroup(s, t);
    expect(out.fields.map((f) => f.key)).toEqual([
      PRODUCT_REF_FIELD_KEY,
      PRODUCT_POSITION_FIELD_KEY,
    ]);
    expect(out.fieldsByKey.get(PRODUCT_REF_FIELD_KEY)?.type).toBe('text');
    expect(out.fieldsByKey.get(PRODUCT_POSITION_FIELD_KEY)?.type).toBe('numeric');
  });
});
