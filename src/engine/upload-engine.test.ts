import { UploadEngine } from './upload-engine';
import { Store } from '../store/store';
import { makeUploadFile, makeDefaultState } from '../test-utils';
import type { UploaderState, UploadResponse } from '../store/store.types';

// Mock the upload modules
vi.mock('./xhr-upload', () => ({
  xhrUploadFile: vi.fn(() => ({ abort: vi.fn() })),
}));

vi.mock('./companion-upload', () => ({
  companionUploadFile: vi.fn(() => ({ abort: vi.fn() })),
  companionUploadUrl: vi.fn(() => ({ abort: vi.fn() })),
}));

// Keep `shouldUseTus` real (it's pure logic) but stub `tusUploadFile`
// so tests can drive the tus-vs-xhr branch without spinning up tus-js-client.
vi.mock('./tus-upload', async () => {
  const actual = await vi.importActual<typeof import('./tus-upload')>('./tus-upload');
  return {
    ...actual,
    tusUploadFile: vi.fn(() => ({
      abort: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      isPaused: () => false,
    })),
  };
});

import { xhrUploadFile } from './xhr-upload';
import { companionUploadFile, companionUploadUrl } from './companion-upload';
import { tusUploadFile } from './tus-upload';
import type { UploadEngineConfig } from './upload-engine';

function createEngine(
  stateOverrides: Partial<UploaderState> = {},
  configOverrides: Partial<UploadEngineConfig> = {},
) {
  const store = new Store(makeDefaultState(stateOverrides));
  const config: UploadEngineConfig = {
    apiBase: 'https://api.filerobot.com/test',
    authHeaders: { 'X-Filerobot-Key': 'key' },
    ...configOverrides,
  };
  const engine = new UploadEngine(store, config);
  return { store, engine };
}

const mockResponse: UploadResponse = {
  status: 'success',
  file: {
    uuid: '123',
    name: 'test.png',
    extension: 'png',
    type: 'image/png',
    size: 100,
    url: { public: 'https://pub', cdn: 'https://cdn' },
    meta: {},
    tags: [],
    info: {},
    created_at: '2025-01-01',
    modified_at: '2025-01-01',
  },
};

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('UploadEngine', () => {
  describe('uploadAll', () => {
    it('transitions idle files to queued and starts uploading', () => {
      const file = makeUploadFile({ id: 'f1', status: 'idle' });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();
      engine.uploadAll();

      expect(store.getState().isUploading).toBe(true);
      expect(xhrUploadFile).toHaveBeenCalled();
    });

    it('does nothing when no idle or queued files', () => {
      const file = makeUploadFile({ id: 'f1', status: 'complete' });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();
      engine.uploadAll();

      expect(store.getState().isUploading).toBe(false);
      expect(xhrUploadFile).not.toHaveBeenCalled();
    });
  });

  describe('processQueue', () => {
    it('starts all queued files', () => {
      const files = new Map([
        ['f1', makeUploadFile({ id: 'f1', status: 'queued', addedAt: 1 })],
        ['f2', makeUploadFile({ id: 'f2', status: 'queued', addedAt: 2 })],
      ]);

      const { store, engine } = createEngine({ files });

      engine.start();

      // All queued files should eventually be started
      const statuses = [...store.getState().files.values()].map((f) => f.status);
      expect(statuses.every((s) => s === 'uploading')).toBe(true);
      expect(xhrUploadFile).toHaveBeenCalled();
    });

    it('does not process when paused', () => {
      const files = new Map([['f1', makeUploadFile({ id: 'f1', status: 'queued' })]]);
      const { engine } = createEngine({ files, isPaused: true });

      engine.start();
      expect(xhrUploadFile).not.toHaveBeenCalled();
    });
  });

  describe('startUpload routing', () => {
    it('uses companionUploadUrl for remote URL files when companionUrl is configured', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: null,
        remoteUrl: 'https://example.com/img.jpg',
      });
      const { engine } = createEngine(
        { files: new Map([['f1', file]]) },
        { companionUrl: 'https://companion.test' },
      );

      engine.start();
      expect(companionUploadUrl).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ companionUrl: 'https://companion.test' }),
      );
      expect(xhrUploadFile).not.toHaveBeenCalled();
    });

    it('fails the file terminally when remoteUrl is queued without companionUrl', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: null,
        remoteUrl: 'https://example.com/img.jpg',
      });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();
      expect(companionUploadUrl).not.toHaveBeenCalled();
      const updated = store.getState().files.get('f1')!;
      expect(updated.status).toBe('failed');
      expect(updated.error).toMatch(/companionUrl/);
    });

    it('uses companionUploadFile for remote info files', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: null,
        remoteInfo: {
          companionUrl: 'https://companion.test',
          provider: 'google-drive',
          token: 'tok',
          requestPath: '/path',
          fileId: 'gd-1',
          name: 'doc.pdf',
          mimeType: 'application/pdf',
          size: 1000,
          thumbnail: null,
        },
      });
      const { engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();
      expect(companionUploadFile).toHaveBeenCalled();
    });
  });

  describe('handleComplete', () => {
    it('marks file as complete and checks all complete', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      // Capture onComplete callback
      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_file: any, opts: any) => {
        // Simulate immediate completion
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      const updated = store.getState().files.get('f1')!;
      expect(updated.status).toBe('complete');
      expect(updated.progress).toBe(100);
      expect(updated.response).toEqual(mockResponse);
      expect(store.getState().isUploading).toBe(false);
    });

    it('backfills size from response.file.size on completion', () => {
      // Unsplash (and other search providers) return `size: 0` in their list
      // responses — without this backfill the success card renders `0 B`.
      const file = makeUploadFile({ id: 'f1', status: 'queued', size: 0 });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.size).toBe(mockResponse.file.size);
    });

    it('extracts size.bytes when the server returns the structured shape', () => {
      // Recent Filerobot v4 responses return `size: { bytes, pretty }` instead
      // of a plain number. Assigning the object straight through would render
      // as "0[object Object]" through the reduce and "NaN undefined" downstream.
      const file = makeUploadFile({ id: 'f1', status: 'queued', size: 0 });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      const structuredResponse: UploadResponse = {
        ...mockResponse,
        file: {
          ...mockResponse.file,
          size: { bytes: 184382, pretty: '180.06 KB' },
        },
      };

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(structuredResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.size).toBe(184382);
    });

    it('swaps a non-blob (URL/connector) preview to the CDN URL for image files', () => {
      // A remote http preview (third-party origin) must be replaced with a
      // CSP-safe server URL once the file is on Filerobot.
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        type: 'image/png',
        previewUrl: 'https://remote.example/orig.jpg',
      });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.previewUrl).toBe('https://cdn');
    });

    it('keeps the local blob preview for device-uploaded images', () => {
      // Local blob previews are CSP-safe and always render — they must NOT be
      // swapped to the just-uploaded CDN URL, which may serve a "missing origin
      // image" placeholder until processing/caching catches up.
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        type: 'image/png',
        previewUrl: 'blob:http://localhost/abc',
      });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.previewUrl).toBe('blob:http://localhost/abc');
    });

    it('prefers cdn for the preview swap of a remote preview', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        type: 'image/png',
        previewUrl: 'https://remote.example/orig.jpg',
      });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      const response: UploadResponse = {
        ...mockResponse,
        file: {
          ...mockResponse.file,
          url: {
            public: 'https://pub',
            cdn: 'https://branded.example.com/img.png',
            cdn_permalink: 'https://abc.filerobot.com/img.png',
            permalink: 'https://api.filerobot.com/abc/v4/get/uuid',
          },
        },
      };

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(response), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.previewUrl).toBe(
        'https://branded.example.com/img.png',
      );
    });

    it('falls back to cdn_permalink when cdn is absent', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        type: 'image/png',
        previewUrl: 'https://remote.example/orig.jpg',
      });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      const response: UploadResponse = {
        ...mockResponse,
        file: {
          ...mockResponse.file,
          url: {
            public: 'https://pub',
            cdn_permalink: 'https://abc.filerobot.com/img.png',
            permalink: 'https://api.filerobot.com/abc/v4/get/uuid',
          } as UploadResponse['file']['url'],
        },
      };

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(response), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.previewUrl).toBe(
        'https://abc.filerobot.com/img.png',
      );
    });

    it('applies transformPreviewUrl to the chosen preview URL', () => {
      const transform = vi.fn((u: string) => `https://proxy.test/?u=${encodeURIComponent(u)}`);
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        type: 'image/png',
        previewUrl: null,
      });
      const { store, engine } = createEngine(
        { files: new Map([['f1', file]]), isUploading: true },
        { transformPreviewUrl: transform },
      );

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(transform).toHaveBeenCalledWith('https://cdn');
      expect(store.getState().files.get('f1')!.previewUrl).toBe(
        'https://proxy.test/?u=https%3A%2F%2Fcdn',
      );
    });

    it('flags alreadyExisted and marks complete for a SAME_ASSET response', () => {
      // The transport normalizes the backend error into a success response
      // carrying the original `code` + `existing_file_uuid` (see same-asset.ts).
      const sameAssetResponse: UploadResponse = {
        ...mockResponse,
        code: 'SAME_ASSET_EXISTS_SKIP_UPLOAD',
        existing_file_uuid: 'e176a9d7-71c9-5de9-bc6a-98fadf350000',
        file: { ...mockResponse.file, uuid: 'e176a9d7-71c9-5de9-bc6a-98fadf350000' },
      };
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(sameAssetResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      const updated = store.getState().files.get('f1')!;
      expect(updated.status).toBe('complete');
      expect(updated.alreadyExisted).toBe(true);
      expect(updated.response?.file.uuid).toBe('e176a9d7-71c9-5de9-bc6a-98fadf350000');
    });

    it('does not flag alreadyExisted for an ordinary success', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      expect(store.getState().files.get('f1')!.alreadyExisted).toBe(false);
    });

    it('keeps previewUrl unchanged for non-image files', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        type: 'video/mp4',
        previewUrl: 'blob:http://localhost/poster',
      });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        isUploading: true,
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_f: any, opts: any) => {
        setTimeout(() => opts.onComplete(mockResponse), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.runAllTimers();

      const updated = store.getState().files.get('f1')!;
      expect(updated.previewUrl).toBe('blob:http://localhost/poster');
    });
  });

  describe('handleError with retry', () => {
    it('retries with exponential backoff', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued', retryCount: 0 });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        queueConfig: {
          concurrency: 3,
          autoProceed: false,
          retryConfig: { maxRetries: 3, baseDelay: 1000, maxDelay: 30000, backoffFactor: 2 },
        },
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_file: any, opts: any) => {
        setTimeout(() => opts.onError(new Error('Network fail')), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.advanceTimersByTime(1); // trigger the error

      const retrying = store.getState().files.get('f1')!;
      expect(retrying.status).toBe('retrying');
      expect(retrying.retryCount).toBe(1);
      expect(retrying.error).toBe('Network fail');
    });

    it('marks as failed after max retries', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued', retryCount: 3 });
      const { store, engine } = createEngine({
        files: new Map([['f1', file]]),
        queueConfig: {
          concurrency: 3,
          autoProceed: false,
          retryConfig: { maxRetries: 3, baseDelay: 1000, maxDelay: 30000, backoffFactor: 2 },
        },
      });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockImplementation((_file: any, opts: any) => {
        setTimeout(() => opts.onError(new Error('Final fail')), 0);
        return { abort: vi.fn() };
      });

      engine.start();
      vi.advanceTimersByTime(1);

      const failed = store.getState().files.get('f1')!;
      expect(failed.status).toBe('failed');
      expect(failed.error).toBe('Final fail');
    });
  });

  describe('cancelFile', () => {
    it('aborts and marks as cancelled', () => {
      const abortFn = vi.fn();
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      (xhrUploadFile as ReturnType<typeof vi.fn>).mockReturnValue({ abort: abortFn });

      engine.start();
      engine.cancelFile('f1');

      expect(abortFn).toHaveBeenCalled();
      expect(store.getState().files.get('f1')!.status).toBe('cancelled');
    });
  });

  describe('cancelAll', () => {
    it('cancels all active uploads and sets isUploading=false', () => {
      const files = new Map([
        ['f1', makeUploadFile({ id: 'f1', status: 'queued', addedAt: 1 })],
        ['f2', makeUploadFile({ id: 'f2', status: 'queued', addedAt: 2 })],
      ]);
      const { store, engine } = createEngine({ files, isUploading: true });

      engine.start();
      engine.cancelAll();

      expect(store.getState().isUploading).toBe(false);
      // All files should be cancelled
      for (const f of store.getState().files.values()) {
        expect(f.status).toBe('cancelled');
      }
    });
  });

  describe('retryFile', () => {
    it('re-queues a failed file', () => {
      const file = makeUploadFile({ id: 'f1', status: 'failed', error: 'old error', progress: 50 });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();
      engine.retryFile('f1');

      const updated = store.getState().files.get('f1')!;
      expect(updated.status).toBe('uploading'); // queued → immediately picked up
      expect(updated.error).toBeNull();
    });

    it('ignores non-failed files', () => {
      const file = makeUploadFile({ id: 'f1', status: 'uploading' });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.retryFile('f1');
      expect(store.getState().files.get('f1')!.status).toBe('uploading');
    });
  });

  describe('retryAll', () => {
    it('re-queues all failed/errored files', () => {
      const files = new Map([
        ['f1', makeUploadFile({ id: 'f1', status: 'failed' })],
        ['f2', makeUploadFile({ id: 'f2', status: 'error' })],
        ['f3', makeUploadFile({ id: 'f3', status: 'complete' })],
      ]);
      const { store, engine } = createEngine({ files });

      engine.start();
      engine.retryAll();

      expect(store.getState().files.get('f1')!.status).toBe('uploading');
      expect(store.getState().files.get('f2')!.status).toBe('uploading');
      expect(store.getState().files.get('f3')!.status).toBe('complete');
    });
  });

  describe('updateConfig', () => {
    it('patches the engine config', () => {
      const { engine } = createEngine();
      engine.updateConfig({ authHeaders: { 'X-Filerobot-Key': 'new-key' } });

      // Start an upload to verify the new headers are used
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine: engine2 } = createEngine({ files: new Map([['f1', file]]) });
      engine2.updateConfig({ authHeaders: { 'X-Filerobot-Key': 'updated' } });
      engine2.start();

      expect(xhrUploadFile).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          authHeaders: { 'X-Filerobot-Key': 'updated' },
        }),
      );
    });
  });

  describe('destroy', () => {
    it('aborts uploads, clears timers, and unsubscribes', () => {
      const abortFn = vi.fn();
      (xhrUploadFile as ReturnType<typeof vi.fn>).mockReturnValue({ abort: abortFn });

      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();
      expect(xhrUploadFile).toHaveBeenCalledTimes(1);

      engine.destroy();
      expect(abortFn).toHaveBeenCalled();

      // After destroy, store changes should not trigger processQueue
      vi.clearAllMocks();
      store.setState({ isPaused: false });
      expect(xhrUploadFile).not.toHaveBeenCalled();
    });
  });

  describe('start', () => {
    it('is idempotent', () => {
      const { engine } = createEngine();
      engine.start();
      engine.start(); // should not subscribe twice
      engine.destroy();
    });
  });

  describe('resolveUploadParams', () => {
    it('forwards extraParams to xhrUploadFile when resolver returns non-empty', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { engine } = createEngine(
        { files: new Map([['f1', file]]) },
        { resolveUploadParams: () => ({ opt_force_name: 'project-uuid' }) },
      );

      engine.start();

      expect(xhrUploadFile).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          extraParams: { opt_force_name: 'project-uuid' },
        }),
      );
    });

    it('forwards extraParams to companionUploadUrl for URL imports', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: null,
        remoteUrl: 'https://example.com/img.jpg',
      });
      const { engine } = createEngine(
        { files: new Map([['f1', file]]) },
        {
          companionUrl: 'https://companion.test',
          resolveUploadParams: () => ({ opt_force_name: 'fixed' }),
        },
      );

      engine.start();

      expect(companionUploadUrl).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          extraParams: { opt_force_name: 'fixed' },
        }),
      );
    });

    it('forwards extraParams to companionUploadFile for cloud connectors', () => {
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: null,
        remoteInfo: {
          companionUrl: 'https://companion.test',
          provider: 'google-drive',
          token: 'tok',
          requestPath: '/path',
          fileId: 'gd-1',
          name: 'doc.pdf',
          mimeType: 'application/pdf',
          size: 1000,
          thumbnail: null,
        },
      });
      const { engine } = createEngine(
        { files: new Map([['f1', file]]) },
        { resolveUploadParams: () => ({ opt_force_name: 'connector-asset' }) },
      );

      engine.start();

      expect(companionUploadFile).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          extraParams: { opt_force_name: 'connector-asset' },
        }),
      );
    });

    it('omits extraParams when no resolver is configured', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { engine } = createEngine({ files: new Map([['f1', file]]) });

      engine.start();

      expect(xhrUploadFile).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ extraParams: undefined }),
      );
    });

    it('omits extraParams when resolver returns empty object', () => {
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { engine } = createEngine(
        { files: new Map([['f1', file]]) },
        { resolveUploadParams: () => ({}) },
      );

      engine.start();

      expect(xhrUploadFile).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({ extraParams: undefined }),
      );
    });

    it('bypasses tus when resolver returns non-empty params, even for large files', () => {
      // 20 MB file — well above the default 10 MB tus threshold
      const largeFile = new File([new Uint8Array(20 * 1024 * 1024)], 'big.bin', {
        type: 'application/octet-stream',
      });
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: largeFile,
        size: largeFile.size,
        type: largeFile.type,
      });
      const { store, engine } = createEngine(
        { files: new Map([['f1', file]]) },
        {
          tusConfig: {}, // enable tus with default threshold
          resolveUploadParams: () => ({ opt_force_name: 'overwrite-me' }),
        },
      );

      engine.start();

      expect(tusUploadFile).not.toHaveBeenCalled();
      expect(xhrUploadFile).toHaveBeenCalled();
      expect(store.getState().files.get('f1')!.isTus).toBe(false);
    });

    it('still uses tus when no resolver is configured (control)', () => {
      const largeFile = new File([new Uint8Array(20 * 1024 * 1024)], 'big.bin', {
        type: 'application/octet-stream',
      });
      const file = makeUploadFile({
        id: 'f1',
        status: 'queued',
        file: largeFile,
        size: largeFile.size,
        type: largeFile.type,
      });
      const { engine } = createEngine(
        { files: new Map([['f1', file]]) },
        { tusConfig: {} },
      );

      engine.start();

      expect(tusUploadFile).toHaveBeenCalled();
      expect(xhrUploadFile).not.toHaveBeenCalled();
    });

    it('re-invokes resolver on each upload start (e.g. retries)', () => {
      const resolver = vi.fn(() => ({ opt_force_name: 'name-v1' }));
      const file = makeUploadFile({ id: 'f1', status: 'queued' });
      const { store, engine } = createEngine(
        { files: new Map([['f1', file]]) },
        { resolveUploadParams: resolver },
      );

      engine.start();
      expect(resolver).toHaveBeenCalledTimes(1);

      // Simulate a retry: mark failed, then retry
      store.setState({
        files: new Map([
          ['f1', { ...store.getState().files.get('f1')!, status: 'failed' }],
        ]),
      });
      engine.retryFile('f1');

      expect(resolver).toHaveBeenCalledTimes(2);
    });
  });
});
