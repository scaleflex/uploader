import type { Store } from './store';
import type { UploaderState, UploadFile } from './store.types';

/**
 * Immutably update a single file in the store's files Map.
 * Always creates a new Map so that Store change detection works correctly.
 */
export function updateFile(
  store: Store<UploaderState>,
  fileId: string,
  patch: Partial<UploadFile>,
): void {
  const prev = store.getState().files;
  const existing = prev.get(fileId);
  if (!existing) return;

  const next = new Map(prev);
  next.set(fileId, { ...existing, ...patch });
  store.setState({ files: next });
}

/**
 * Immutably add a file to the store's files Map.
 */
export function addFile(
  store: Store<UploaderState>,
  file: UploadFile,
): void {
  const next = new Map(store.getState().files);
  next.set(file.id, file);
  store.setState({ files: next });
}

/**
 * Immutably remove a file from the store's files Map.
 */
export function removeFile(
  store: Store<UploaderState>,
  fileId: string,
): void {
  const prev = store.getState().files;
  if (!prev.has(fileId)) return;

  const next = new Map(prev);
  next.delete(fileId);
  store.setState({ files: next });
}
