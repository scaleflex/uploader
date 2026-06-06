import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { listFolderRecursive } from './companion-client';
import type { CompanionItem, CompanionListResponse } from './connector.types';

function mkItem(
  id: string,
  name: string,
  isFolder: boolean,
  requestPath: string,
): CompanionItem {
  return {
    id,
    name,
    mimeType: isFolder ? 'application/folder' : 'image/png',
    isFolder,
    thumbnail: null,
    size: isFolder ? 0 : 100,
    requestPath,
  };
}

function mkResponse(
  items: CompanionItem[],
  nextPagePath: string | null = null,
): CompanionListResponse {
  return { items, nextPagePath, username: null };
}

describe('listFolderRecursive', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  // Configure the mock to respond per requestPath segment.
  // Companion's URLs look like: {base}/drive/list/{requestPath} or {base}/{nextPagePath}.
  function respondByPath(pathToResponse: Record<string, CompanionListResponse>) {
    fetchMock.mockImplementation((url: string) => {
      // Extract the path segment after `/drive/list/` (or after the host for next-page).
      const m = url.match(/\/drive\/list(?:\/(.+))?$/);
      const key = m ? (m[1] ?? '') : url.split('/').slice(3).join('/');
      const body = pathToResponse[key];
      if (!body) throw new Error(`Mock missing response for "${key}" (url: ${url})`);
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => body,
      });
    });
  }

  it('flattens a nested tree and annotates each file with relativeFolder', async () => {
    respondByPath({
      'rootPath': mkResponse([
        mkItem('f1', 'top.png', false, 'pathTop'),
        mkItem('dir1', 'sub', true, 'subPath'),
      ]),
      'subPath': mkResponse([mkItem('f2', 'nested.png', false, 'pathNested')]),
    });

    const out = await listFolderRecursive(
      'https://companion.example.com',
      'google-drive',
      'token',
      'rootPath',
      'rootFolder',
    );

    expect(out).toHaveLength(2);
    const byName = Object.fromEntries(out.map((it) => [it.name, it]));
    expect(byName['top.png'].relativeFolder).toBe('rootFolder');
    expect(byName['nested.png'].relativeFolder).toBe('rootFolder/sub');
  });

  it('paginates via nextPagePath', async () => {
    respondByPath({
      'rootPath': mkResponse(
        [mkItem('f1', 'a.png', false, 'pathA')],
        '/drive/list/rootPath?page=2',
      ),
      'rootPath?page=2': mkResponse([mkItem('f2', 'b.png', false, 'pathB')]),
    });

    const out = await listFolderRecursive(
      'https://companion.example.com',
      'google-drive',
      'token',
      'rootPath',
      'root',
    );

    expect(out.map((it) => it.name).sort()).toEqual(['a.png', 'b.png']);
    expect(out.every((it) => it.relativeFolder === 'root')).toBe(true);
  });

  it('throws synchronously when the signal is already aborted', async () => {
    const ctrl = new AbortController();
    respondByPath({ 'rootPath': mkResponse([]) });
    ctrl.abort();
    await expect(
      listFolderRecursive(
        'https://companion.example.com',
        'google-drive',
        'token',
        'rootPath',
        'root',
        ctrl.signal,
      ),
    ).rejects.toThrow(/abort/i);
  });

  it('honors AbortSignal mid-traversal between folders', async () => {
    const ctrl = new AbortController();
    // First fetch resolves with one file and one subfolder. While the caller
    // is between fetches we abort, so the second listFiles for the subfolder
    // never runs.
    fetchMock.mockImplementation(async (url: string) => {
      const m = url.match(/\/drive\/list(?:\/(.+))?$/);
      const key = m?.[1] ?? '';
      if (key === 'rootPath') {
        // Abort after this response is dispatched but before the next call.
        queueMicrotask(() => ctrl.abort());
        return {
          ok: true,
          status: 200,
          json: async () =>
            mkResponse([
              mkItem('f1', 'a.png', false, 'pathA'),
              mkItem('dir', 'sub', true, 'subPath'),
            ]),
        };
      }
      throw new Error(`subPath fetch should not run after abort (url: ${url})`);
    });

    await expect(
      listFolderRecursive(
        'https://companion.example.com',
        'google-drive',
        'token',
        'rootPath',
        'root',
        ctrl.signal,
      ),
    ).rejects.toThrow(/abort/i);
  });

  it('returns empty for an empty folder', async () => {
    respondByPath({ 'emptyPath': mkResponse([]) });
    const out = await listFolderRecursive(
      'https://companion.example.com',
      'google-drive',
      'token',
      'emptyPath',
      'empty',
    );
    expect(out).toEqual([]);
  });
});
