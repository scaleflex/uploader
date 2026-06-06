/**
 * Helpers for extracting a folder tree out of a DataTransfer (drag-drop) or a
 * `<input type="file" webkitdirectory>` change event, preserving each file's
 * relative path within the dropped/selected folder.
 *
 * The relative path is attached to the File via a non-enumerable
 * `_sfxRelativePath` property so existing code paths that operate on plain
 * `File[]` arrays keep working — only consumers that opt in read the path.
 */

/** Symbol-ish key used to stash the relative path on a File without affecting JSON serialization. */
export const SFX_RELATIVE_PATH_KEY = '_sfxRelativePath';

/**
 * Attach a relative path (e.g. `"myFolder/sub/image.png"`) to a File object.
 * The path includes the filename so callers can derive both `relativeFolder`
 * (dirname) and `name` (basename) consistently. Falsy paths are ignored.
 */
export function attachRelativePath(file: File, relativePath: string | undefined | null): void {
  if (!relativePath) return;
  try {
    Object.defineProperty(file, SFX_RELATIVE_PATH_KEY, {
      value: relativePath,
      configurable: true,
      enumerable: false,
      writable: false,
    });
  } catch {
    // Some File implementations (test mocks, sandboxed environments) may
    // reject defineProperty — fall back to a direct assignment.
    (file as unknown as Record<string, string>)[SFX_RELATIVE_PATH_KEY] = relativePath;
  }
}

/** Read the relative path off a File, falling back to the browser-native `webkitRelativePath`. */
export function getRelativePath(file: File): string {
  const stashed = (file as unknown as Record<string, unknown>)[SFX_RELATIVE_PATH_KEY];
  if (typeof stashed === 'string' && stashed) return stashed;
  const webkit = (file as File & { webkitRelativePath?: string }).webkitRelativePath;
  return typeof webkit === 'string' ? webkit : '';
}

/**
 * Extract the dirname portion of a relative path. E.g. `"a/b/c.png"` → `"a/b"`,
 * `"file.png"` → `""`. Leading/trailing slashes are stripped.
 */
export function relativeFolderFromPath(relativePath: string): string {
  if (!relativePath) return '';
  const trimmed = relativePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const idx = trimmed.lastIndexOf('/');
  return idx === -1 ? '' : trimmed.slice(0, idx);
}

/**
 * Join a base folder with a relative subfolder. Both sides are normalized to
 * collapse repeated/leading/trailing slashes. Returns the base when sub is
 * empty so the existing flat-upload behavior is preserved.
 */
export function joinFolder(base: string, sub: string): string {
  const cleanBase = (base ?? '').replace(/\/+$/, '');
  const cleanSub = (sub ?? '').replace(/^\/+/, '').replace(/\/+$/, '');
  if (!cleanSub) return base ?? '';
  if (!cleanBase) return cleanSub;
  return `${cleanBase}/${cleanSub}`;
}

/**
 * Walk a DataTransferItemList recursively using the webkitGetAsEntry API and
 * return a flat array of Files, each carrying a `_sfxRelativePath` that
 * encodes its position in the dropped tree.
 *
 * Falls back to `dataTransfer.files` when the entries API is unavailable
 * (older browsers, programmatic drops without items).
 */
export async function extractFilesFromDataTransfer(
  dataTransfer: DataTransfer,
): Promise<File[]> {
  const items = dataTransfer.items;
  // Some browsers expose `items` but no `webkitGetAsEntry` — guard before use.
  const hasEntriesApi =
    items &&
    items.length > 0 &&
    typeof (items[0] as DataTransferItem & {
      webkitGetAsEntry?: () => unknown;
    }).webkitGetAsEntry === 'function';

  if (!hasEntriesApi) {
    return Array.from(dataTransfer.files ?? []);
  }

  const entries: FileSystemEntry[] = [];
  for (const item of Array.from(items)) {
    if (item.kind !== 'file') continue;
    const entry = (
      item as DataTransferItem & { webkitGetAsEntry?: () => FileSystemEntry | null }
    ).webkitGetAsEntry?.();
    if (entry) entries.push(entry);
  }

  // Edge case: items present but none yielded an entry (e.g. paste-as-file
  // synthesized items). Fall back to the flat file list.
  if (entries.length === 0) {
    return Array.from(dataTransfer.files ?? []);
  }

  const out: File[] = [];
  await Promise.all(entries.map((entry) => walkEntry(entry, '', out)));
  return out;
}

async function walkEntry(
  entry: FileSystemEntry,
  parentPath: string,
  out: File[],
): Promise<void> {
  if (entry.isFile) {
    const file = await fileFromEntry(entry as FileSystemFileEntry);
    if (!file) return;
    const relativePath = parentPath ? `${parentPath}/${file.name}` : file.name;
    attachRelativePath(file, relativePath);
    out.push(file);
    return;
  }
  if (entry.isDirectory) {
    const dirPath = parentPath ? `${parentPath}/${entry.name}` : entry.name;
    const children = await readAllEntries(entry as FileSystemDirectoryEntry);
    await Promise.all(children.map((child) => walkEntry(child, dirPath, out)));
  }
}

function fileFromEntry(entry: FileSystemFileEntry): Promise<File | null> {
  return new Promise((resolve) => {
    entry.file(
      (file) => resolve(file),
      () => resolve(null),
    );
  });
}

/**
 * DirectoryReader.readEntries returns at most ~100 entries per call — keep
 * calling until it returns an empty array.
 */
function readAllEntries(dir: FileSystemDirectoryEntry): Promise<FileSystemEntry[]> {
  return new Promise((resolve, reject) => {
    const reader = dir.createReader();
    const collected: FileSystemEntry[] = [];
    const readBatch = () => {
      reader.readEntries(
        (batch) => {
          if (batch.length === 0) {
            resolve(collected);
            return;
          }
          collected.push(...batch);
          readBatch();
        },
        (err) => reject(err),
      );
    };
    readBatch();
  });
}
