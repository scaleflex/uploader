import { Store } from './store';
import { updateFile, addFile, removeFile } from './helpers';
import { makeUploadFile, makeDefaultState } from '../test-utils';

function createStoreWithFiles(...files: ReturnType<typeof makeUploadFile>[]) {
  const map = new Map(files.map((f) => [f.id, f]));
  return new Store(makeDefaultState({ files: map }));
}

describe('updateFile', () => {
  it('updates an existing file immutably', () => {
    const file = makeUploadFile({ id: 'f1', status: 'idle' });
    const store = createStoreWithFiles(file);
    const prevMap = store.getState().files;

    updateFile(store, 'f1', { status: 'uploading', progress: 50 });

    const nextMap = store.getState().files;
    expect(nextMap).not.toBe(prevMap); // new Map instance
    expect(nextMap.get('f1')!.status).toBe('uploading');
    expect(nextMap.get('f1')!.progress).toBe(50);
    // Original fields preserved
    expect(nextMap.get('f1')!.name).toBe('test.png');
  });

  it('no-ops for missing file ID', () => {
    const store = createStoreWithFiles(makeUploadFile({ id: 'f1' }));
    const listener = vi.fn();
    store.subscribe(listener);

    updateFile(store, 'nonexistent', { status: 'complete' });
    expect(listener).not.toHaveBeenCalled();
  });
});

describe('addFile', () => {
  it('adds a file to the map', () => {
    const store = new Store(makeDefaultState());
    const file = makeUploadFile({ id: 'new-file' });

    addFile(store, file);

    expect(store.getState().files.size).toBe(1);
    expect(store.getState().files.get('new-file')).toBe(file);
  });

  it('creates a new Map instance', () => {
    const store = new Store(makeDefaultState());
    const prevMap = store.getState().files;

    addFile(store, makeUploadFile({ id: 'f1' }));
    expect(store.getState().files).not.toBe(prevMap);
  });
});

describe('removeFile', () => {
  it('removes an existing file', () => {
    const store = createStoreWithFiles(
      makeUploadFile({ id: 'f1' }),
      makeUploadFile({ id: 'f2' }),
    );

    removeFile(store, 'f1');

    expect(store.getState().files.size).toBe(1);
    expect(store.getState().files.has('f1')).toBe(false);
    expect(store.getState().files.has('f2')).toBe(true);
  });

  it('no-ops for missing file ID', () => {
    const store = createStoreWithFiles(makeUploadFile({ id: 'f1' }));
    const listener = vi.fn();
    store.subscribe(listener);

    removeFile(store, 'nonexistent');
    expect(listener).not.toHaveBeenCalled();
  });

  it('creates a new Map instance', () => {
    const store = createStoreWithFiles(makeUploadFile({ id: 'f1' }));
    const prevMap = store.getState().files;

    removeFile(store, 'f1');
    expect(store.getState().files).not.toBe(prevMap);
  });
});
