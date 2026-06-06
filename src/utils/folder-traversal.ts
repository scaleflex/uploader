/**
 * Helpers for extracting a folder tree out of a DataTransfer (drag-drop) or a
 * `<input type="file" webkitdirectory>` change event, preserving each file's
 * relative path within the dropped/selected folder.
 *
 * The relative path is attached to the File via a non-enumerable
 * `_sfxRelativePath` property so existing code paths that operate on plain
 * `File[]` arrays keep working — only consumers that opt in read the path.
 *
 * Failure mode: traversal never rejects. Per-entry I/O errors (permission
 * denied, removed media, browser FS-API quirks) are caught and logged so
 * partial results can still flow through. The callers handle the empty-result
 * case via the `hadDirectories` hint.
 */

/** Symbol-ish key used to stash the relative path on a File without affecting JSON serialization. */
export const SFX_RELATIVE_PATH_KEY = '_sfxRelativePath';

/**
 * Hard cap on parallel directory reads. Webkit/Chromium happily run thousands
 * of concurrent `DirectoryReader.readEntries` calls, but a tight cap keeps
 * worst-case open-FD pressure predictable on huge trees (e.g. `node_modules`).
 */
const MAX_PARALLEL_WALKS = 8;

/**
 * Directory names that almost never contain user-intended assets. Skipped at
 * traversal time so dropping a project root doesn't spend seconds walking
 * `.git/objects/**`. Dot-prefixed names are covered by a separate rule below.
 */
const NOISE_DIR_NAMES = new Set<string>([
  'node_modules',
  '__MACOSX',
  '$RECYCLE.BIN',
  'System Volume Information',
]);

/** True for directory names we should never recurse into (hidden + denylist). */
function isNoiseDir(name: string): boolean {
  if (!name) return false;
  if (name.startsWith('.')) return true; // .git, .svn, .DS_Store-as-folder, .Trashes…
  return NOISE_DIR_NAMES.has(name);
}

/**
 * Attach a relative path (e.g. `"myFolder/sub/image.png"`) to a File object.
 * The path includes the filename so callers can derive both `relativeFolder`
 * (dirname) and `name` (basename) consistently. Falsy paths are ignored.
 *
 * The property is non-enumerable on both the happy path (defineProperty) and
 * the fallback (some test mocks reject defineProperty on File). This keeps
 * `Object.keys(file)` clean so JSON serializers don't pick it up.
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
    return;
  } catch {
    // Fall through to the manual descriptor below.
  }
  try {
    Object.defineProperty(file as object, SFX_RELATIVE_PATH_KEY, {
      value: relativePath,
      configurable: true,
      enumerable: false,
      writable: true,
    });
  } catch {
    // Final fallback: plain assignment. Enumerable, but better than dropping
    // the path entirely in environments that refuse defineProperty on File.
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

export interface ExtractedFiles {
  /** Files in the drop — each carries `_sfxRelativePath` when extracted from a folder. */
  files: File[];
  /**
   * True when at least one dropped DataTransferItem was a directory entry.
   * Callers use this to differentiate "user dropped a folder" (so an empty
   * result is worth a "folder is empty" hint) from "user dropped no files at
   * all" (where silence is fine).
   */
  hadDirectories: boolean;
}

/**
 * Walk a DataTransferItemList recursively using the webkitGetAsEntry API and
 * return a flat array of Files, each carrying a `_sfxRelativePath` that
 * encodes its position in the dropped tree.
 *
 * Falls back to `dataTransfer.files` when the entries API is unavailable
 * (older browsers, programmatic drops without items).
 *
 * The returned promise never rejects: per-entry I/O failures are caught and
 * logged so callers always get a partial result.
 */
export async function extractFilesFromDataTransfer(
  dataTransfer: DataTransfer,
): Promise<ExtractedFiles> {
  const items = dataTransfer.items;
  // Some browsers expose `items` but no `webkitGetAsEntry` — guard before use.
  const hasEntriesApi =
    items &&
    items.length > 0 &&
    typeof (items[0] as DataTransferItem & {
      webkitGetAsEntry?: () => unknown;
    }).webkitGetAsEntry === 'function';

  if (!hasEntriesApi) {
    return {
      files: Array.from(dataTransfer.files ?? []),
      hadDirectories: false,
    };
  }

  // webkitGetAsEntry MUST be called synchronously — the DataTransferItem
  // becomes invalid after the drop handler returns. Capture all entries up
  // front before doing any awaiting.
  const entries: FileSystemEntry[] = [];
  let hadDirectories = false;
  for (const item of Array.from(items)) {
    if (item.kind !== 'file') continue;
    const entry = (
      item as DataTransferItem & { webkitGetAsEntry?: () => FileSystemEntry | null }
    ).webkitGetAsEntry?.();
    if (!entry) continue;
    if (entry.isDirectory) hadDirectories = true;
    entries.push(entry);
  }

  // Edge case: items present but none yielded an entry (e.g. synthesized
  // paste-as-file items). Fall back to the flat file list.
  if (entries.length === 0) {
    return {
      files: Array.from(dataTransfer.files ?? []),
      hadDirectories: false,
    };
  }

  const out: File[] = [];
  await walkEntriesBounded(entries, '', out);
  return { files: out, hadDirectories };
}

/**
 * Walk a batch of sibling entries with bounded concurrency. The cap keeps the
 * number of in-flight DirectoryReaders predictable even on huge trees.
 */
async function walkEntriesBounded(
  entries: FileSystemEntry[],
  parentPath: string,
  out: File[],
): Promise<void> {
  // Process in fixed-size batches. Sequential batches; entries within a batch
  // run in parallel. Cheap, deterministic, no external dep.
  for (let i = 0; i < entries.length; i += MAX_PARALLEL_WALKS) {
    const slice = entries.slice(i, i + MAX_PARALLEL_WALKS);
    await Promise.all(slice.map((entry) => walkEntry(entry, parentPath, out)));
  }
}

async function walkEntry(
  entry: FileSystemEntry,
  parentPath: string,
  out: File[],
): Promise<void> {
  try {
    if (entry.isFile) {
      const file = await fileFromEntry(entry as FileSystemFileEntry);
      if (!file) return;
      const relativePath = parentPath ? `${parentPath}/${file.name}` : file.name;
      attachRelativePath(file, relativePath);
      out.push(file);
      return;
    }
    if (entry.isDirectory) {
      // Skip hidden / known-noise directories early so we don't pay the cost
      // of reading them (e.g. `.git/objects` on a project root drop).
      if (isNoiseDir(entry.name)) return;
      const dirPath = parentPath ? `${parentPath}/${entry.name}` : entry.name;
      const children = await readAllEntries(entry as FileSystemDirectoryEntry);
      await walkEntriesBounded(children, dirPath, out);
    }
  } catch (err) {
    // Per-entry failure (permission denied, media yanked, …) must not abort
    // the whole walk — log and continue with whatever else we can collect.
    console.warn('[sfx-uploader] folder traversal skipped an entry:', entry?.name ?? entry, err);
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
 * calling until it returns an empty array. Resolves with whatever was
 * collected so far when the reader errors out (partial success > nothing).
 */
function readAllEntries(dir: FileSystemDirectoryEntry): Promise<FileSystemEntry[]> {
  return new Promise((resolve) => {
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
        (err) => {
          console.warn('[sfx-uploader] directory read failed for', dir?.name, err);
          resolve(collected);
        },
      );
    };
    readBatch();
  });
}
