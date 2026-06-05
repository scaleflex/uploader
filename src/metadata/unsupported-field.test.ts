import type { MetadataField, MetadataFieldType } from './schema/schema.types';

// Register every relevant custom element via the package barrel so the
// dispatchers can find their child components when they render.
import './index';

import { UNSUPPORTED_FIELD_MESSAGE } from './fields/unsupported-field';

function makeField(type: MetadataFieldType): MetadataField {
  return {
    key: 'k',
    ckey: 'ck',
    uuid: 'u',
    title: 'My Field',
    type,
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: null,
    permissions: [],
  };
}

async function mount<T extends HTMLElement>(
  tag: string,
  setup: (el: T) => void,
): Promise<T> {
  const el = document.createElement(tag) as T;
  setup(el);
  document.body.appendChild(el);
  // Lit's updateComplete promise lives on the element when it's a LitElement.
  await (el as unknown as { updateComplete?: Promise<unknown> }).updateComplete;
  return el;
}

afterEach(() => {
  document.body.innerHTML = '';
});

const unsupportedTypes: MetadataFieldType[] = [
  'asset-attachments',
  'ultratags',
  'taxonomy-node',
];

describe('sfx-metadata-field-edit (single-asset dispatcher)', () => {
  it.each(unsupportedTypes)(
    'renders <sfx-meta-unsupported-field> placeholder for %s',
    async (type) => {
      const el = await mount('sfx-metadata-field-edit', (e: HTMLElement) => {
        (e as unknown as { field: MetadataField }).field = makeField(type);
      });
      const placeholder = el.shadowRoot!.querySelector('sfx-meta-unsupported-field');
      expect(placeholder).not.toBeNull();
    },
  );

  it('falls through to text-field for a supported type (text)', async () => {
    const el = await mount('sfx-metadata-field-edit', (e: HTMLElement) => {
      (e as unknown as { field: MetadataField }).field = makeField('text');
    });
    expect(el.shadowRoot!.querySelector('sfx-meta-text-field')).not.toBeNull();
    expect(el.shadowRoot!.querySelector('sfx-meta-unsupported-field')).toBeNull();
  });
});

describe('sfx-metadata-field (form-row dispatcher)', () => {
  it.each(unsupportedTypes)(
    'renders the unsupported placeholder for %s',
    async (type) => {
      const el = await mount('sfx-metadata-field', (e: HTMLElement) => {
        (e as unknown as { field: MetadataField }).field = makeField(type);
      });
      expect(el.shadowRoot!.querySelector('sfx-meta-unsupported-field')).not.toBeNull();
    },
  );
});

describe('sfx-meta-unsupported-field placeholder', () => {
  it('exposes the full message via aria-label and title', async () => {
    const el = await mount('sfx-meta-unsupported-field', () => {});
    const inner = el.shadowRoot!.querySelector('.unsupported') as HTMLElement;
    expect(inner.getAttribute('aria-label')).toBe(UNSUPPORTED_FIELD_MESSAGE);
    expect(inner.getAttribute('title')).toBe(UNSUPPORTED_FIELD_MESSAGE);
    expect(inner.getAttribute('aria-disabled')).toBe('true');
  });

  it('renders short visible text', async () => {
    const el = await mount('sfx-meta-unsupported-field', () => {});
    const visible = el.shadowRoot!.querySelector('.unsupported-text');
    expect(visible?.textContent).toContain('Not editable during upload');
  });
});

describe('sfx-metadata-field-view (read-only)', () => {
  it.each(unsupportedTypes)(
    'shows the placeholder message in view mode for %s',
    async (type) => {
      const el = await mount('sfx-metadata-field-view', (e: HTMLElement) => {
        (e as unknown as { field: MetadataField; value: unknown }).field = makeField(type);
        (e as unknown as { value: unknown }).value = 'ignored';
      });
      const value = el.shadowRoot!.querySelector('.value');
      expect(value?.getAttribute('title')).toBe(UNSUPPORTED_FIELD_MESSAGE);
      expect(value?.textContent?.trim()).toContain('Not editable during upload');
    },
  );
});

describe('sfx-bulk-meta-op-bar', () => {
  it.each(unsupportedTypes)(
    'renders the .op-unsupported notice (no operation controls) for %s',
    async (type) => {
      const el = await mount('sfx-bulk-meta-op-bar', (e: HTMLElement) => {
        (e as unknown as { field: MetadataField }).field = makeField(type);
      });
      const notice = el.shadowRoot!.querySelector('.op-unsupported');
      expect(notice).not.toBeNull();
      // Active field title is shown for context.
      expect(notice?.textContent).toContain('My Field');
      expect(notice?.textContent).toContain(UNSUPPORTED_FIELD_MESSAGE);
      // Operation dropdown / Apply button must be absent.
      expect(el.shadowRoot!.querySelector('.op-trigger')).toBeNull();
      expect(el.shadowRoot!.querySelector('.btn-apply')).toBeNull();
    },
  );

  it('renders normal operation controls for a supported type (text)', async () => {
    const el = await mount('sfx-bulk-meta-op-bar', (e: HTMLElement) => {
      (e as unknown as { field: MetadataField }).field = makeField('text');
    });
    expect(el.shadowRoot!.querySelector('.op-unsupported')).toBeNull();
    expect(el.shadowRoot!.querySelector('.btn-apply')).not.toBeNull();
  });
});
