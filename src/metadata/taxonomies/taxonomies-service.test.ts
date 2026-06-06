import { createTaxonomyService } from './taxonomies-service';

const HEADERS = { 'x-test': '1' };
const API = 'https://api.test';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('createTaxonomyService.fetchTaxonomies', () => {
  it('returns the taxonomies catalogue and caches the promise', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: { taxonomies: [{ uuid: 'u1', suid: 's1', name: 'A' }] },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const svc = createTaxonomyService(API, HEADERS);
    const first = await svc.fetchTaxonomies();
    const second = await svc.fetchTaxonomies();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe('https://api.test/v5/taxonomies');
    expect(first).toEqual([{ uuid: 'u1', suid: 's1', name: 'A' }]);
    expect(second).toBe(first);
  });

  it('falls back to top-level array when envelope is flat', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ uuid: 'u', suid: 's', name: 'N' }],
    });
    vi.stubGlobal('fetch', fetchMock);
    const list = await createTaxonomyService(API, HEADERS).fetchTaxonomies();
    expect(list).toEqual([{ uuid: 'u', suid: 's', name: 'N' }]);
  });

  it('returns [] on non-ok response', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    const list = await createTaxonomyService(API, HEADERS).fetchTaxonomies();
    expect(list).toEqual([]);
  });
});

describe('createTaxonomyService.fetchNodes', () => {
  it('builds the URL with base + limit and returns parsed nodes', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          base_node: { uuid: 'b', name: 'Root', slug: 'root', ltree: '' },
          nodes: [
            {
              uuid: 'n1',
              name: 'Italy',
              ltree: 'italy',
              slug: 'italy',
              children: { count_direct: 2, nodes: [] },
            },
          ],
        },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const svc = createTaxonomyService(API, HEADERS);
    const resp = await svc.fetchNodes('tax-suid', 'italy', 5);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, opts] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.test/v5/taxonomy/tax-suid/nodes?base=italy&limit=5');
    expect(opts.headers).toBe(HEADERS);
    expect(resp.nodes).toHaveLength(1);
    expect(resp.nodes[0].uuid).toBe('n1');
  });

  it('returns empty response on non-ok response', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    const svc = createTaxonomyService(API, HEADERS);
    const resp = await svc.fetchNodes('tax', '');
    expect(resp).toEqual({ base_node: null, nodes: [] });
  });

  it('returns empty response on thrown error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('boom')));
    const svc = createTaxonomyService(API, HEADERS);
    const resp = await svc.fetchNodes('tax', '');
    expect(resp).toEqual({ base_node: null, nodes: [] });
  });
});

describe('createTaxonomyService.autocomplete', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('debounces and maps result rows', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          tags: [
            { tag: 'Italy > Pisa', path: 'Italy > Pisa', suid: 'pisa-suid', uuid: 'pisa-uuid', approx_count: 12 },
          ],
        },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const svc = createTaxonomyService(API, HEADERS);
    const cb = vi.fn();
    svc.autocomplete('mykey', 'pi', cb);

    expect(fetchMock).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(199);
    expect(fetchMock).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    // Allow the awaited fetch promise + json() to resolve.
    await vi.runAllTimersAsync();
    await Promise.resolve();
    await Promise.resolve();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe(
      'https://api.test/v5/metadata/autocomplete?q=pi&meta_key=_mykey',
    );
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls[0][0][0]).toMatchObject({
      tag: 'Italy > Pisa',
      suid: 'pisa-suid',
      uuid: 'pisa-uuid',
    });
  });

  it('returns [] synchronously for empty query and skips fetch', () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const svc = createTaxonomyService(API, HEADERS);
    const cb = vi.fn();
    svc.autocomplete('mykey', '   ', cb);
    expect(cb).toHaveBeenCalledWith([]);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('cancel() aborts pending debounce', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const svc = createTaxonomyService(API, HEADERS);
    const cb = vi.fn();
    svc.autocomplete('mykey', 'pi', cb);
    svc.cancel();
    await vi.advanceTimersByTimeAsync(300);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
