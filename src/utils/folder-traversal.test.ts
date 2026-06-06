import { describe, it, expect } from 'vitest';
import {
  attachRelativePath,
  getRelativePath,
  relativeFolderFromPath,
  joinFolder,
  extractFilesFromDataTransfer,
} from './folder-traversal';

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
  it('handles root path base', () => {
    expect(joinFolder('/', 'photos')).toBe('photos');
  });
});

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
});

describe('extractFilesFromDataTransfer', () => {
  it('falls back to dataTransfer.files when entries API is unavailable', async () => {
    const file = new File(['x'], 'flat.png', { type: 'image/png' });
    const dt = {
      items: [],
      files: [file],
    } as unknown as DataTransfer;
    const result = await extractFilesFromDataTransfer(dt);
    expect(result).toEqual([file]);
  });

  it('walks a nested directory tree and attaches relative paths', async () => {
    // Build a synthetic FileSystemEntry tree:
    //   root/
    //     top.png
    //     sub/
    //       nested.png
    const topFile = new File(['t'], 'top.png', { type: 'image/png' });
    const nestedFile = new File(['n'], 'nested.png', { type: 'image/png' });

    const makeFileEntry = (
      name: string,
      file: File,
    ): FileSystemFileEntry => ({
      isFile: true,
      isDirectory: false,
      name,
      fullPath: `/${name}`,
      filesystem: {} as FileSystem,
      file: (cb: (f: File) => void) => cb(file),
      // unused by walker but part of the type
      getMetadata: () => {},
      moveTo: () => {},
      copyTo: () => {},
      toURL: () => '',
      remove: () => {},
      getParent: () => {},
    } as unknown as FileSystemFileEntry);

    const makeDirEntry = (
      name: string,
      children: FileSystemEntry[],
    ): FileSystemDirectoryEntry => {
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
          ) => {
            if (read) {
              cb([]);
            } else {
              read = true;
              cb(children);
            }
          },
        }),
      } as unknown as FileSystemDirectoryEntry;
    };

    const subDir = makeDirEntry('sub', [makeFileEntry('nested.png', nestedFile)]);
    const rootDir = makeDirEntry('root', [
      makeFileEntry('top.png', topFile),
      subDir,
    ]);

    const dt = {
      items: [
        {
          kind: 'file',
          webkitGetAsEntry: () => rootDir,
        },
      ],
      files: [],
    } as unknown as DataTransfer;

    const result = await extractFilesFromDataTransfer(dt);
    expect(result).toHaveLength(2);
    const paths = result.map(getRelativePath).sort();
    expect(paths).toEqual(['root/sub/nested.png', 'root/top.png']);
  });
});
