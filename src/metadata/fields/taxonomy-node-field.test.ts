import './taxonomy-node-field';
import type { MetadataField } from '../schema/schema.types';
import type {
  TaxonomyAutocompleteTag,
  TaxonomyNodesResponse,
} from '../taxonomies/taxonomies.types';
import type { SfxMetaTaxonomyNodeField } from './taxonomy-node-field';

function makeField(taxonomySuid: string | null = 'tax-1'): MetadataField {
  return {
    key: 'tree',
    ckey: 'tree',
    uuid: 'u',
    title: 'Tree',
    type: 'taxonomy-node',
    required: 0,
    possible_values: [],
    regional_variants_group_uuid: null,
    permissions: [],
    model: taxonomySuid ? { parameters: { taxonomy_suid: taxonomySuid } } : {},
  };
}

interface ServiceStub {
  fetchTaxonomies: ReturnType<typeof vi.fn>;
  fetchNodes: ReturnType<typeof vi.fn>;
  autocomplete: ReturnType<typeof vi.fn>;
  cancel: ReturnType<typeof vi.fn>;
}

function makeService(overrides: Partial<{
  nodes: TaxonomyNodesResponse;
  autocompleteResults: TaxonomyAutocompleteTag[];
  taxonomies: Array<{ uuid: string; suid: string; name: string }>;
}> = {}): ServiceStub {
  const nodes: TaxonomyNodesResponse = overrides.nodes ?? {
    base_node: null,
    nodes: [
      {
        uuid: 'italy',
        name: 'Italy',
        ltree: 'italy',
        slug: 'italy',
        children: { count_direct: 1, nodes: [] },
      },
      {
        uuid: 'france',
        name: 'France',
        ltree: 'france',
        slug: 'france',
        children: { count_direct: 0, nodes: [] },
      },
    ],
  };
  const taxonomies = overrides.taxonomies ?? [
    { uuid: 'tax-uuid-1', suid: 'tax-1', name: 'Test Taxonomy' },
  ];
  return {
    fetchTaxonomies: vi.fn().mockResolvedValue(taxonomies),
    fetchNodes: vi.fn().mockResolvedValue(nodes),
    autocomplete: vi.fn().mockImplementation((_ck, _q, cb) => {
      cb(overrides.autocompleteResults ?? []);
    }),
    cancel: vi.fn(),
  };
}

async function mount(
  service: ServiceStub,
  field: MetadataField = makeField(),
): Promise<SfxMetaTaxonomyNodeField> {
  const el = document.createElement(
    'sfx-meta-taxonomy-node-field',
  ) as SfxMetaTaxonomyNodeField;
  el.field = field;
  el.taxonomyService = service as unknown as SfxMetaTaxonomyNodeField['taxonomyService'];
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

afterEach(() => {
  document.body.innerHTML = '';
});

/** Flush enough microtasks for resolve → fetchTaxonomies → fetchNodes chain. */
async function flush(el: HTMLElement) {
  for (let i = 0; i < 6; i++) {
    await Promise.resolve();
    await (el as unknown as { updateComplete: Promise<unknown> }).updateComplete;
  }
}

describe('SfxMetaTaxonomyNodeField', () => {
  it('renders the misconfigured placeholder when taxonomy_suid is missing', async () => {
    const svc = makeService();
    const el = await mount(svc, makeField(null));
    expect(el.shadowRoot!.querySelector('.misconfigured')).not.toBeNull();
    expect(svc.fetchNodes).not.toHaveBeenCalled();
  });

  it('opens the popover, resolves suid → uuid, and loads root nodes', async () => {
    const svc = makeService();
    const el = await mount(svc);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    await flush(el);

    expect(svc.fetchTaxonomies).toHaveBeenCalled();
    expect(svc.fetchNodes).toHaveBeenCalledWith('tax-uuid-1', '');
    const rows = el.shadowRoot!.querySelectorAll('.tree-row');
    expect(rows.length).toBe(2);
  });

  it('shows "Taxonomy not found" when suid does not match the catalogue', async () => {
    const svc = makeService({ taxonomies: [{ uuid: 'other', suid: 'other', name: 'X' }] });
    const el = await mount(svc);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    await flush(el);

    expect(svc.fetchNodes).not.toHaveBeenCalled();
    expect(el.shadowRoot!.querySelector('.empty')?.textContent).toContain('Taxonomy not found');
  });

  it('selecting a leaf emits field-change with uuid and taxonomy-entry-change', async () => {
    const svc = makeService();
    const el = await mount(svc);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    await flush(el);

    let changeValue: unknown = null;
    let entryDetail: unknown = null;
    el.addEventListener('field-change', (e) => {
      changeValue = (e as CustomEvent).detail.value;
    });
    el.addEventListener('taxonomy-entry-change', (e) => {
      entryDetail = (e as CustomEvent).detail;
    });

    // Click the radio on the second row (France — leaf node).
    const rows = el.shadowRoot!.querySelectorAll<HTMLElement>('.tree-row');
    rows[1].querySelector<HTMLElement>('.tree-radio')!.click();
    await el.updateComplete;

    expect(changeValue).toBe('france');
    expect(entryDetail).toMatchObject({
      key: 'tree',
      entry: { uuid: 'france', name: 'France', path: 'France' },
    });
  });

  it('clicking a non-leaf row drills in and grows the breadcrumb', async () => {
    const svc = makeService();
    const el = await mount(svc);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    await flush(el);

    svc.fetchNodes.mockResolvedValueOnce({
      base_node: { uuid: 'italy', name: 'Italy', slug: 'italy', ltree: 'italy' },
      nodes: [
        {
          uuid: 'pisa',
          name: 'Pisa',
          ltree: 'italy.pisa',
          slug: 'pisa',
          children: { count_direct: 0, nodes: [] },
        },
      ],
    });

    const rows = el.shadowRoot!.querySelectorAll<HTMLElement>('.tree-row');
    rows[0].click();
    await flush(el);

    expect(svc.fetchNodes).toHaveBeenLastCalledWith('tax-uuid-1', 'italy');
    const crumbs = el.shadowRoot!.querySelectorAll('.breadcrumb .crumb');
    expect(crumbs.length).toBeGreaterThanOrEqual(2);
  });

  it('reopens with the drill stack pre-positioned at the selected node parent', async () => {
    const svc = makeService();
    const el = await mount(svc);
    el.entry = {
      uuid: 'pisa',
      name: 'Pisa',
      path: 'Italy › Pisa',
      lineage: 'italy.pisa',
      slug: 'pisa',
    };
    el.value = 'pisa';
    await el.updateComplete;

    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    await flush(el);

    // The second fetchNodes call should be for the parent's ltree, not root.
    expect(svc.fetchNodes).toHaveBeenLastCalledWith('tax-uuid-1', 'italy');
    const crumbs = el.shadowRoot!.querySelectorAll('.breadcrumb .crumb');
    expect(crumbs.length).toBeGreaterThanOrEqual(2);
    expect(crumbs[crumbs.length - 1].textContent?.trim()).toBe('Italy');
  });

  it('typing in the search box switches to autocomplete results', async () => {
    const svc = makeService({
      autocompleteResults: [
        {
          tag: 'Italy > Pisa',
          path: 'Italy > Pisa',
          suid: 'pisa-suid',
          uuid: 'pisa-uuid',
        },
      ],
    });
    const el = await mount(svc);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!.click();
    await flush(el);

    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.search')!;
    input.value = 'pi';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;

    expect(svc.autocomplete).toHaveBeenCalledWith('tree', 'pi', expect.any(Function));
    const acRow = el.shadowRoot!.querySelector('.ac-row');
    expect(acRow).not.toBeNull();
    expect(acRow!.textContent).toContain('Italy > Pisa');

    let changeValue: unknown = null;
    el.addEventListener('field-change', (e) => {
      changeValue = (e as CustomEvent).detail.value;
    });
    (acRow as HTMLElement).click();
    await el.updateComplete;
    expect(changeValue).toBe('pisa-suid');
  });
});
