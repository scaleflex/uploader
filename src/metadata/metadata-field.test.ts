import type { MetadataField, MetadataConfig } from './schema/schema.types';

// Register every relevant element via the package barrel.
import './index';

function makeField(): MetadataField {
  return {
    key: 'title',
    ckey: 'ck',
    uuid: 'u',
    title: 'Title',
    type: 'text',
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: 'rv-langs',
    permissions: [],
  };
}

async function mount(): Promise<HTMLElement> {
  const el = document.createElement('sfx-metadata-field') as HTMLElement & {
    field: MetadataField;
    value: unknown;
    config: MetadataConfig | null;
    updateComplete: Promise<unknown>;
  };
  el.field = makeField();
  el.value = { en: 'Old', fr: 'Bonjour' };
  el.config = { projectUuid: 'p', language: 'en' };
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

afterEach(() => {
  document.body.innerHTML = '';
});

/** Capture the host-dispatched (transformed) detail — the one downstream
 *  consumers like sfx-uploader actually see. The raw child event also bubbles
 *  to the host, so we filter to the transformed payload (object-typed value
 *  for regional fields). */
function listenForTransformed(el: HTMLElement): Array<{ key: string; value: unknown }> {
  const captured: Array<{ key: string; value: unknown }> = [];
  el.addEventListener('field-blur', (e) => {
    const detail = (e as CustomEvent).detail;
    if (detail.value && typeof detail.value === 'object') captured.push(detail);
  });
  return captured;
}

describe('<sfx-metadata-field> regional-variant blur preserves other languages', () => {
  it('spreads existing {fr: ...} when saving an updated English value', async () => {
    const el = await mount();
    const captured = listenForTransformed(el);

    const inner = el.shadowRoot!.querySelector('sfx-meta-text-field')!;
    inner.dispatchEvent(
      new CustomEvent('field-blur', {
        detail: { key: 'title', value: 'Hello' },
        bubbles: true,
        composed: true,
      }),
    );

    expect(captured).toHaveLength(1);
    expect(captured[0].key).toBe('title');
    expect(captured[0].value).toEqual({ en: 'Hello', fr: 'Bonjour' });
  });

  it('writes a brand-new language slot without affecting the existing one', async () => {
    const el = (await mount()) as HTMLElement & {
      config: MetadataConfig | null;
      updateComplete: Promise<unknown>;
    };
    el.config = { projectUuid: 'p', language: 'de' };
    await el.updateComplete;

    const captured = listenForTransformed(el);

    const inner = el.shadowRoot!.querySelector('sfx-meta-text-field')!;
    inner.dispatchEvent(
      new CustomEvent('field-blur', {
        detail: { key: 'title', value: 'Hallo' },
        bubbles: true,
        composed: true,
      }),
    );

    expect(captured[0].value).toEqual({ en: 'Old', fr: 'Bonjour', de: 'Hallo' });
  });

  it('wraps under the per-group regionalFilters key — not config.language', async () => {
    // Field belongs to a CURRENCIES group; the saved key must come from
    // regionalFilters['rv-langs'], NOT the user-locale `language`.
    const el = (await mount()) as HTMLElement & {
      value: unknown;
      config: MetadataConfig | null;
      updateComplete: Promise<unknown>;
    };
    el.value = { USD: '100' };
    el.config = {
      projectUuid: 'p',
      language: 'en',
      regionalFilters: { 'rv-langs': 'EUR' },
    };
    await el.updateComplete;

    const captured = listenForTransformed(el);
    const inner = el.shadowRoot!.querySelector('sfx-meta-text-field')!;
    inner.dispatchEvent(
      new CustomEvent('field-blur', {
        detail: { key: 'title', value: '90' },
        bubbles: true,
        composed: true,
      }),
    );

    expect(captured[0].value).toEqual({ USD: '100', EUR: '90' });
  });
});
