import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  attachRelativePath,
  getRelativePath,
  relativeFolderFromPath,
  joinFolder,
  extractFilesFromDataTransfer,
} from './folder-traversal';

// --- Synthetic FileSystemEntry helpers shared across tests ---

interface FakeFileEntryOpts {
  /** When set, the entry's file() callback invokes the error handler instead. */
  error?: unknown;
}

function makeFileEntry(
  name: string,
  file: File,
  opts: FakeFileEntryOpts = {},
): FileSystemFileEntry {
  return {
    isFile: true,
    isDirectory: false,
    name,
    fullPath: `/${name}`,
    filesystem: {} as FileSystem,
    file: (cb: (f: File) => void, err?: (e: unknown) => void) => {
      if (opts.error !== undefined) err?.(opts.error);
      else cb(file);
    },
  } as unknown as FileSystemFileEntry;
}

interface FakeDirEntryOpts {
  /** When set, the very first readEntries call invokes the error handler. */
  error?: unknown;
}

function makeDirEntry(
  name: string,
  children: FileSystemEntry[],
  opts: FakeDirEntryOpts = {},
): FileSystemDirectoryEntry {
  let read = false;
  return {
    isFile: false,
    isDirectory: true,
    name,
    fullPath: `/${name}`,
    filesystem: {} as FileSystem,
    createReader: () => ({
      readEntries: (
        cb: (entries: FileSystemEntry[]) => void,
        err?: (e: unknown) => void,
      ) => {
        if (opts.error !== undefined && !read) {
          read = true;
          err?.(opts.error);
          return;
        }
        if (read) {
          cb([]);
        } else {
          read = true;
          cb(children);
        }
      },
    }),
  } as unknown as FileSystemDirectoryEntry;
}

function makeDataTransfer(
  entries: FileSystemEntry[],
  flatFiles: File[] = [],
): DataTransfer {
  return {
    items: entries.map((entry) => ({
      kind: 'file' as const,
      webkitGetAsEntry: () => entry,
    })),
    files: flatFiles,
  } as unknown as DataTransfer;
}

// --- relativeFolderFromPath ---

describe('relativeFolderFromPath', () => {
  it('returns empty string for top-level files', () => {
    expect(relativeFolderFromPath('image.png')).toBe('');
  });
  it('strips the filename', () => {
    expect(relativeFolderFromPath('a/b/c.png')).toBe('a/b');
  });
  it('handles single-level nesting', () => {
    expect(relativeFolderFromPath('folder/file.png')).toBe('folder');
  });
  it('strips leading slashes before computing the dirname', () => {
    expect(relativeFolderFromPath('/a/b/c.png')).toBe('a/b');
  });
  it('returns empty for empty input', () => {
    expect(relativeFolderFromPath('')).toBe('');
  });
});

// --- joinFolder ---

describe('joinFolder', () => {
  it('joins base + sub with a single slash', () => {
    expect(joinFolder('assets', 'photos/2026')).toBe('assets/photos/2026');
  });
  it('returns base when sub is empty (preserves flat behavior)', () => {
    expect(joinFolder('assets', '')).toBe('assets');
  });
  it('returns sub when base is empty', () => {
    expect(joinFolder('', 'photos')).toBe('photos');
  });
  it('collapses repeated slashes between base and sub', () => {
    expect(joinFolder('assets/', '/photos/')).toBe('assets/photos');
  });
  it('drops the leading slash when base is just root', () => {
    // Pins existing behavior: '/' collapses to '', so we return sub unchanged.
    // Callers relying on absolute-from-root semantics should normalize upstream.
    expect(joinFolder('/', 'photos')).toBe('photos');
  });
});

// --- attachRelativePath / getRelativePath ---

describe('attachRelativePath / getRelativePath', () => {
  it('stashes and reads back a relative path', () => {
    const file = new File(['x'], 'image.png', { type: 'image/png' });
    attachRelativePath(file, 'folder/sub/image.png');
    expect(getRelativePath(file)).toBe('folder/sub/image.png');
  });
  it('returns empty when no path is attached', () => {
    const file = new File(['x'], 'image.png', { type: 'image/png' });
    expect(getRelativePath(file)).toBe('');
  });
  it('falls back to webkitRelativePath when no internal path is set', () => {
    const file = new File(['x'], 'image.png', { type: 'image/png' });
    Object.defineProperty(file, 'webkitRelativePath', {
      value: 'gallery/image.png',
      configurable: true,
    });
    expect(getRelativePath(file)).toBe('gallery/image.png');
  });
  it('ignores empty or null paths', () => {
    const file = new File(['x'], 'image.png', { type: 'image/png' });
    attachRelativePath(file, '');
    attachRelativePath(file, null);
    expect(getRelativePath(file)).toBe('');
  });
  it('does not enumerate the stashed path key', () => {
    const file = new File(['x'], 'image.png', { type: 'image/png' });
    attachRelativePath(file, 'folder/image.png');
    expect(Object.keys(file)).not.toContain('_sfxRelativePath');
  });
  it('is overridable on a second attach (configurable descriptor)', () => {
    const file = new File(['x'], 'image.png', { type: 'image/png' });
    attachRelativePath(file, 'a/image.png');
    attachRelativePath(file, 'b/image.png');
    expect(getRelativePath(file)).toBe('b/image.png');
  });
});

// --- extractFilesFromDataTransfer ---

describe('extractFilesFromDataTransfer', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('falls back to dataTransfer.files when entries API is unavailable', async () => {
    const file = new File(['x'], 'flat.png', { type: 'image/png' });
    const dt = { items: [], files: [file] } as unknown as DataTransfer;
    const result = await extractFilesFromDataTransfer(dt);
    expect(result.files).toEqual([file]);
    expect(result.hadDirectories).toBe(false);
  });

  it('walks a nested directory tree and attaches relative paths', async () => {
    const topFile = new File(['t'], 'top.png', { type: 'image/png' });
    const nestedFile = new File(['n'], 'nested.png', { type: 'image/png' });

    const subDir = makeDirEntry('sub', [makeFileEntry('nested.png', nestedFile)]);
    const rootDir = makeDirEntry('root', [
      makeFileEntry('top.png', topFile),
      subDir,
    ]);

    const dt = makeDataTransfer([rootDir]);
    const result = await extractFilesFromDataTransfer(dt);

    expect(result.hadDirectories).toBe(true);
    expect(result.files).toHaveLength(2);
    const paths = result.files.map(getRelativePath).sort();
    expect(paths).toEqual(['root/sub/nested.png', 'root/top.png']);
  });

  it('reports hadDirectories=false when only loose files are dropped', async () => {
    const a = new File(['a'], 'a.png', { type: 'image/png' });
    const b = new File(['b'], 'b.png', { type: 'image/png' });
    const dt = makeDataTransfer([makeFileEntry('a.png', a), makeFileEntry('b.png', b)]);
    const result = await extractFilesFromDataTransfer(dt);
    expect(result.hadDirectories).toBe(false);
    expect(result.files).toHaveLength(2);
  });

  it('reports hadDirectories=true even when the folder is empty', async () => {
    const emptyDir = makeDirEntry('empty', []);
    const dt = makeDataTransfer([emptyDir]);
    const result = await extractFilesFromDataTransfer(dt);
    expect(result.hadDirectories).toBe(true);
    expect(result.files).toEqual([]);
  });

  it('skips dot-prefixed directories (.git, .vscode, …)', async () => {
    const realFile = new File(['r'], 'real.png', { type: 'image/png' });
    const hiddenFile = new File(['h'], 'config', { type: 'application/octet-stream' });
    const gitDir = makeDirEntry('.git', [makeFileEntry('config', hiddenFile)]);
    const root = makeDirEntry('proj', [makeFileEntry('real.png', realFile), gitDir]);

    const dt = makeDataTransfer([root]);
    const result = await extractFilesFromDataTransfer(dt);

    const paths = result.files.map(getRelativePath);
    expect(paths).toEqual(['proj/real.png']);
  });

  it('skips known noise directories like node_modules', async () => {
    const realFile = new File(['r'], 'real.png', { type: 'image/png' });
    const lockFile = new File(['l'], 'package-lock.json');
    const nm = makeDirEntry('node_modules', [makeFileEntry('package-lock.json', lockFile)]);
    const root = makeDirEntry('proj', [makeFileEntry('real.png', realFile), nm]);

    const dt = makeDataTransfer([root]);
    const result = await extractFilesFromDataTransfer(dt);
    const paths = result.files.map(getRelativePath);
    expect(paths).toEqual(['proj/real.png']);
  });

  it('continues with partial results when a readEntries call errors', async () => {
    const okFile = new File(['o'], 'ok.png', { type: 'image/png' });
    const badDir = makeDirEntry('bad', [], { error: new Error('permission denied') });
    const root = makeDirEntry('proj', [makeFileEntry('ok.png', okFile), badDir]);

    const dt = makeDataTransfer([root]);
    const result = await extractFilesFromDataTransfer(dt);

    expect(result.files.map(getRelativePath)).toEqual(['proj/ok.png']);
    expect(warnSpy).toHaveBeenCalled();
  });

  it('continues when a file() call errors out for an individual entry', async () => {
    const okFile = new File(['o'], 'ok.png', { type: 'image/png' });
    const broken = makeFileEntry('broken.png', new File([''], 'broken.png'), {
      error: new Error('cant read'),
    });
    const root = makeDirEntry('proj', [makeFileEntry('ok.png', okFile), broken]);

    const dt = makeDataTransfer([root]);
    const result = await extractFilesFromDataTransfer(dt);
    expect(result.files.map(getRelativePath)).toEqual(['proj/ok.png']);
  });

  it('does not reject the returned promise on any traversal error', async () => {
    const a = makeDirEntry('a', [], { error: new Error('boom') });
    const b = makeFileEntry('b', new File([''], 'b'), { error: new Error('boom') });
    const dt = makeDataTransfer([a, b]);
    await expect(extractFilesFromDataTransfer(dt)).resolves.toBeDefined();
  });
});
