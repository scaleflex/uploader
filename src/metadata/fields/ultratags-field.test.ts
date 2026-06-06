import './ultratags-field';
import type { MetadataField } from '../schema/schema.types';
import type {
  UltratagsCreateRequest,
  UltratagsCreateResponse,
  UltratagsListResponse,
  UltratagsValueItem,
} from '../ultratags/ultratags.types';
import type { SfxMetaUltratagsField } from './ultratags-field';

function makeField(): MetadataField {
  return {
    key: 'tags_field',
    ckey: 'tags',
    uuid: 'u',
    title: 'Custom Tags',
    type: 'ultratags',
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: null,
    permissions: [],
  };
}

interface ServiceStub {
  list: ReturnType<typeof vi.fn>;
  getBySids: ReturnType<typeof vi.fn>;
  create: ReturnType<typeof vi.fn>;
  cancel: ReturnType<typeof vi.fn>;
}

function makeService(overrides: Partial<{
  listResp: UltratagsListResponse;
  createResp: UltratagsCreateResponse;
  getBySidsResp: UltratagsListResponse;
}> = {}): ServiceStub {
  const listResp: UltratagsListResponse = overrides.listResp ?? {
    items: [
      { uuid: 'u1', sid: '#utrose', slug: 'rose', i18n: { en: 'Rose' } },
      { uuid: 'u2', sid: '#utlily', slug: 'lily', i18n: { en: 'Lily' } },
    ],
    stats: { count: 2, total_count: 2 },
  };
  return {
    list: vi.fn().mockResolvedValue(listResp),
    getBySids: vi.fn().mockResolvedValue(overrides.getBySidsResp ?? { items: [], stats: { count: 0, total_count: 0 } }),
    create: vi.fn().mockResolvedValue(
      overrides.createResp ?? {
        output: [{ status: 'created', uuid: 'u3', sid: '#utorchid', slug: 'orchid', i18n: { en: 'Orchid' } }],
      },
    ),
    cancel: vi.fn(),
  };
}

async function mount(
  service: ServiceStub,
  value: UltratagsValueItem[] = [],
  language = 'en',
): Promise<SfxMetaUltratagsField> {
  const el = document.createElement('sfx-meta-ultratags-field') as SfxMetaUltratagsField;
  el.field = makeField();
  el.ultratags = service as unknown as SfxMetaUltratagsField['ultratags'];
  el.value = value;
  el.language = language;
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

async function flush(el: HTMLElement) {
  for (let i = 0; i < 6; i++) {
    await Promise.resolve();
    await (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;
  }
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('SfxMetaUltratagsField', () => {
  it('opens the dropdown and renders the type-to-search hint on focus before 2 chars', async () => {
    const svc = makeService();
    const el = await mount(svc);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
    input.dispatchEvent(new Event('focus'));
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.hint')).not.toBeNull();
    expect(svc.list).not.toHaveBeenCalled();
  });

  it('calls the service when the query length crosses the minimum', async () => {
    const svc = makeService();
    const el = await mount(svc);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
    input.value = 'ro';
    input.dispatchEvent(new Event('input'));
    await flush(el);
    expect(svc.list).toHaveBeenCalledTimes(1);
    expect(svc.list).toHaveBeenCalledWith(
      expect.objectContaining({ meta: 'tags_field', q: 'ro' }),
    );
    const options = el.shadowRoot!.querySelectorAll('.option');
    expect(options.length).toBeGreaterThanOrEqual(2);
  });

  it('appends a pill and emits field-change when an option is picked', async () => {
    const svc = makeService();
    const el = await mount(svc);
    const events: unknown[] = [];
    el.addEventListener('field-change', (e) => events.push((e as CustomEvent).detail));

    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
    input.value = 'ro';
    input.dispatchEvent(new Event('input'));
    await flush(el);

    const first = el.shadowRoot!.querySelector<HTMLElement>('.option');
    first!.dispatchEvent(new MouseEvent('mousedown'));
    await flush(el);

    expect(events).toHaveLength(1);
    const detail = events[0] as { value: UltratagsValueItem[] };
    expect(detail.value[0].slug).toBe('rose');
    expect(detail.value[0].sid).toBe('#utrose');
    expect(el.shadowRoot!.querySelectorAll('.chip').length).toBe(1);
  });

  it('hides the Create affordance when an exact label match exists', async () => {
    const svc = makeService();
    const el = await mount(svc);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
    input.value = 'Rose';
    input.dispatchEvent(new Event('input'));
    await flush(el);
    const createOpt = el.shadowRoot!.querySelector('.option.create');
    expect(createOpt).toBeNull();
  });

  it('creates a new tag through the service and adds it to the value', async () => {
    const svc = makeService({
      listResp: { items: [], stats: { count: 0, total_count: 0 } },
    });
    const el = await mount(svc);
    const events: unknown[] = [];
    el.addEventListener('field-change', (e) => events.push((e as CustomEvent).detail));

    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
    // Type with a leading capital so we also verify the slug derivation +
    // i18n label use the original casing for display.
    input.value = 'Orchid';
    input.dispatchEvent(new Event('input'));
    await flush(el);

    // Search is sent lowercased — admin parity.
    expect(svc.list).toHaveBeenCalledWith(
      expect.objectContaining({ q: 'orchid' }),
    );

    const createOpt = el.shadowRoot!.querySelector<HTMLElement>('.option.create');
    expect(createOpt).not.toBeNull();
    createOpt!.dispatchEvent(new MouseEvent('mousedown'));
    await flush(el);

    expect(svc.create).toHaveBeenCalledWith(
      expect.objectContaining<UltratagsCreateRequest>({
        meta: 'tags_field',
        mode: 'upsert',
        items: [{ slug: 'orchid', i18n: { en: 'Orchid' } }],
      }),
    );
    const detail = events.at(-1) as { value: UltratagsValueItem[] };
    expect(detail.value[0].sid).toBe('#utorchid');
    expect(detail.value[0].i18n).toEqual({ en: 'Orchid' });
  });

  it('removes a pill when its × is clicked', async () => {
    const svc = makeService();
    const el = await mount(svc, [
      { slug: 'rose', sid: '#utrose', i18n: { en: 'Rose' } },
    ]);
    const events: unknown[] = [];
    el.addEventListener('field-change', (e) => events.push((e as CustomEvent).detail));

    const remove = el.shadowRoot!.querySelector<HTMLButtonElement>('.chip-x')!;
    remove.click();
    await el.updateComplete;

    expect(events).toHaveLength(1);
    expect((events[0] as { value: unknown[] }).value).toEqual([]);
    expect(el.shadowRoot!.querySelectorAll('.chip').length).toBe(0);
  });

  it('restrictToItems mode disables remote search and hides Create', async () => {
    const svc = makeService();
    const el = document.createElement('sfx-meta-ultratags-field') as SfxMetaUltratagsField;
    el.field = makeField();
    el.ultratags = svc as unknown as SfxMetaUltratagsField['ultratags'];
    el.value = [];
    el.restrictToItems = [
      { slug: 'rose', sid: '#utrose', i18n: { en: 'Rose' } },
      { slug: 'lily', sid: '#utlily', i18n: { en: 'Lily' } },
    ];
    document.body.appendChild(el);
    await el.updateComplete;

    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
    input.dispatchEvent(new Event('focus'));
    await el.updateComplete;
    // Two suggestions show without any remote call
    const options = el.shadowRoot!.querySelectorAll('.option');
    expect(options.length).toBe(2);
    expect(svc.list).not.toHaveBeenCalled();

    input.value = 'li';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;
    // Local filter narrows the dropdown without making a network call
    expect(svc.list).not.toHaveBeenCalled();
    expect(el.shadowRoot!.querySelectorAll('.option').length).toBe(1);
    expect(el.shadowRoot!.querySelector('.option.create')).toBeNull();
  });

  it('resolves SID-only values to enriched labels via getBySids on mount', async () => {
    const svc = makeService({
      getBySidsResp: {
        items: [
          { uuid: 'u1', sid: '#utrose', slug: 'rose', i18n: { en: 'Rose' } },
        ],
        stats: { count: 1, total_count: 1 },
      },
    });
    const el = await mount(svc, [{ sid: '#utrose' }]);
    await flush(el);
    expect(svc.getBySids).toHaveBeenCalledWith(
      expect.objectContaining({ sids: ['#utrose'] }),
    );
    // After enrichment the pill shows the readable label
    const chip = el.shadowRoot!.querySelector('.chip');
    expect(chip?.textContent?.trim()).toContain('Rose');
  });

  describe('language switching', () => {
    it('renders dropdown option labels in the current language', async () => {
      // Mirrors the real BE response shape the user shared — an entry whose
      // English label is "Annatown" but whose French label is "baller".
      const svc = makeService({
        listResp: {
          items: [
            { uuid: 'u1', sid: '#utannatown', slug: 'annatown', i18n: { fr: 'baller', en: 'Annatown' } },
          ],
          stats: { count: 1, total_count: 1 },
        },
      });
      const el = await mount(svc, [], 'fr');
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
      input.value = 'baller';
      input.dispatchEvent(new Event('input'));
      await flush(el);

      const options = el.shadowRoot!.querySelectorAll('.option');
      expect(options.length).toBe(1);
      expect(options[0].textContent?.trim()).toBe('baller');
    });

    it('updates dropdown labels when language prop changes after results load', async () => {
      const svc = makeService({
        listResp: {
          items: [
            { uuid: 'u1', sid: '#utannatown', slug: 'annatown', i18n: { fr: 'baller', en: 'Annatown' } },
          ],
          stats: { count: 1, total_count: 1 },
        },
      });
      const el = await mount(svc, [], 'en');
      const input = el.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
      input.value = 'baller';
      input.dispatchEvent(new Event('input'));
      await flush(el);

      // English first.
      expect(
        el.shadowRoot!.querySelector('.option')?.textContent?.trim(),
      ).toBe('Annatown');

      // Switch the language prop — mirrors what happens when the host
      // updates _effectiveMetadataConfig.language after a regional pick.
      el.language = 'fr';
      await flush(el);

      expect(
        el.shadowRoot!.querySelector('.option')?.textContent?.trim(),
      ).toBe('baller');
    });

    it('updates chip labels for already-added items when language prop changes', async () => {
      const svc = makeService();
      const el = await mount(
        svc,
        [{ slug: 'annatown', sid: '#utannatown', i18n: { fr: 'baller', en: 'Annatown' } }],
        'en',
      );
      await flush(el);
      expect(
        el.shadowRoot!.querySelector('.chip')?.textContent?.trim(),
      ).toContain('Annatown');

      el.language = 'fr';
      await flush(el);
      expect(
        el.shadowRoot!.querySelector('.chip')?.textContent?.trim(),
      ).toContain('baller');
    });

    it('propagates config.language through metadata-form → metadata-field → ultratags-field', async () => {
      // Mirrors the real host flow: host changes _effectiveMetadataConfig.language,
      // which flows down to <sfx-metadata-form>, then <sfx-metadata-field>, then
      // <sfx-meta-ultratags-field>. The field receives `.language=${config.language}`
      // from the metadata-field dispatcher and resolves labels accordingly.
      await import('../metadata-form');
      await import('../metadata-field');
      const svc = makeService({
        listResp: {
          items: [
            { uuid: 'u1', sid: '#utannatown', slug: 'annatown', i18n: { fr: 'baller', en: 'Annatown' } },
          ],
          stats: { count: 1, total_count: 1 },
        },
      });
      const form = document.createElement('sfx-metadata-form') as HTMLElement & {
        schema: unknown;
        meta: unknown;
        config: unknown;
        ultratags: unknown;
        updateComplete: Promise<unknown>;
      };
      form.schema = {
        groups: [
          {
            uuid: 'g1',
            name: 'Tags',
            fields: [makeField()],
          },
        ],
        fields: [makeField()],
        fieldsByKey: new Map([['tags_field', makeField()]]),
        forceFillingOnUpload: false,
        regionalVariantsGroups: [],
        language: 'en',
        productsEnabled: false,
      };
      form.meta = {};
      form.ultratags = svc;
      form.config = { projectUuid: 'p', language: 'en' };
      document.body.appendChild(form);
      await flush(form);

      // Reach the inner ultratags field through the shadow boundaries.
      const field = form.shadowRoot!.querySelector('sfx-metadata-field')!;
      const ultraEl = (field.shadowRoot!.querySelector(
        'sfx-meta-ultratags-field',
      ) as SfxMetaUltratagsField)!;
      const input = ultraEl.shadowRoot!.querySelector<HTMLInputElement>('.input')!;
      input.value = 'baller';
      input.dispatchEvent(new Event('input'));
      await flush(form);
      expect(
        ultraEl.shadowRoot!.querySelector('.option')?.textContent?.trim(),
      ).toBe('Annatown');

      // Switch the form's config — mirrors the host's _effectiveMetadataConfig
      // returning a new object with language='fr' after a regional pick.
      form.config = { projectUuid: 'p', language: 'fr' };
      await flush(form);
      expect(
        ultraEl.shadowRoot!.querySelector('.option')?.textContent?.trim(),
      ).toBe('baller');
    });
  });
});
