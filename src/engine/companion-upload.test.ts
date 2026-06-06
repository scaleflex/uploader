import { companionUploadFile, companionUploadUrl } from './companion-upload';
import { makeUploadFile } from '../test-utils';
import type { RemoteFileInfo } from '../connectors/connector.types';

vi.mock('../connectors/companion-client', () => ({
  fetchUrlMeta: vi.fn(),
  uploadFromUrl: vi.fn(),
  uploadRemoteFile: vi.fn(),
  getSocketHost: (url: string) =>
    url.replace(/^http/i, 'ws'),
}));

import {
  fetchUrlMeta,
  uploadFromUrl,
  uploadRemoteFile,
} from '../connectors/companion-client';

function makeRemoteInfo(overrides: Partial<RemoteFileInfo> = {}): RemoteFileInfo {
  return {
    companionUrl: 'https://eu-on-24001.connector.filerobot.com',
    provider: 'google-drive',
    token: 'tok',
    requestPath: 'drive-file-1',
    fileId: 'f-rem-1',
    name: 'drive.png',
    mimeType: 'image/png',
    size: 1234,
    thumbnail: null,
    ...overrides,
  };
}

class MockWebSocket {
  static instances: MockWebSocket[] = [];
  url: string;
  send = vi.fn();
  close = vi.fn();
  onmessage: ((ev: { data: string }) => void) | null = null;
  onerror: (() => void) | null = null;
  onclose: (() => void) | null = null;

  constructor(url: string) {
    this.url = url;
    MockWebSocket.instances.push(this);
  }

  emitClose() {
    this.onclose?.();
  }

  emitProgress(loaded: number, total: number) {
    this.onmessage?.({
      data: JSON.stringify({
        action: 'progress',
        payload: { bytesUploaded: loaded, bytesTotal: total },
      }),
    });
  }

  emitSuccess(responseBody: unknown) {
    this.onmessage?.({
      data: JSON.stringify({
        action: 'success',
        payload: { response: { responseText: JSON.stringify(responseBody) } },
      }),
    });
  }

  emitError(message: string) {
    this.onmessage?.({
      data: JSON.stringify({
        action: 'error',
        payload: { error: { message } },
      }),
    });
  }
}

beforeEach(() => {
  vi.clearAllMocks();
  MockWebSocket.instances = [];
  vi.stubGlobal('WebSocket', MockWebSocket);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

function freshOpts() {
  return {
    apiBase: 'https://api.filerobot.com/test',
    authHeaders: { 'X-Filerobot-Key': 'k' } as Record<string, string>,
    folder: '/uploads',
    companionUrl: 'https://eu-on-24001.connector.filerobot.com',
    onProgress: vi.fn(),
    onComplete: vi.fn(),
    onError: vi.fn(),
    onMeta: vi.fn(),
  };
}

describe('companionUploadUrl', () => {
  it('errors when remoteUrl is missing', () => {
    const opts = freshOpts();
    companionUploadUrl(makeUploadFile({ remoteUrl: null }), opts);
    expect(opts.onError).toHaveBeenCalledWith(
      expect.objectContaining({ message: expect.stringContaining('Remote URL') }),
    );
    expect(fetchUrlMeta).not.toHaveBeenCalled();
  });

  it('calls /url/meta then /url/get and connects WebSocket on success', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://example.com/x.png',
      name: 'x.png',
      type: 'image/png',
      size: 4242,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 'sock-1' });

    const opts = freshOpts();
    const file = makeUploadFile({
      id: 'f1',
      remoteUrl: 'https://example.com/x.png',
      name: 'x.png',
    });
    companionUploadUrl(file, opts);

    // Wait for both promises to flush
    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    expect(fetchUrlMeta).toHaveBeenCalledWith(
      'https://eu-on-24001.connector.filerobot.com',
      'https://example.com/x.png',
      expect.any(AbortSignal),
    );
    expect(opts.onMeta).toHaveBeenCalledWith({
      name: 'x.png',
      type: 'image/png',
      size: 4242,
    });
    expect(uploadFromUrl).toHaveBeenCalledWith(
      'https://eu-on-24001.connector.filerobot.com',
      'https://example.com/x.png',
      expect.objectContaining({
        fileId: 'f1',
        endpoint: 'https://api.filerobot.com/test/v4/files?folder=%2Fuploads',
        headers: { 'X-Filerobot-Key': 'k' },
        size: 4242,
        metadata: expect.objectContaining({
          name: 'x.png',
          type: 'image/png',
          'filerobot-folder': '/uploads',
        }),
      }),
      expect.any(AbortSignal),
    );
    expect(MockWebSocket.instances).toHaveLength(1);
    expect(MockWebSocket.instances[0].url).toBe(
      'wss://eu-on-24001.connector.filerobot.com/api/sock-1',
    );
  });

  it('forwards progress, success, and error WebSocket frames', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://x', name: 'x.png', type: 'image/png', size: 1000,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = freshOpts();
    companionUploadUrl(
      makeUploadFile({ remoteUrl: 'https://x', name: 'x.png' }),
      opts,
    );

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    const ws = MockWebSocket.instances[0];
    ws.emitProgress(250, 1000);
    expect(opts.onProgress).toHaveBeenCalledWith(250, 1000);

    const response = {
      status: 'success',
      file: { uuid: 'u1', name: 'x.png', url: { public: 'p', cdn: 'c' } },
    };
    ws.emitSuccess(response);
    expect(opts.onComplete).toHaveBeenCalledWith(response);
  });

  it('surfaces /url/meta failure via onError', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('meta boom'));

    const opts = freshOpts();
    companionUploadUrl(makeUploadFile({ remoteUrl: 'https://x' }), opts);

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    expect(opts.onError).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'meta boom' }),
    );
    expect(uploadFromUrl).not.toHaveBeenCalled();
  });

  it('abort prevents callbacks from firing after meta resolves', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://x', name: 'x.png', type: 'image/png', size: 100,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = freshOpts();
    const handle = companionUploadUrl(
      makeUploadFile({ remoteUrl: 'https://x' }),
      opts,
    );

    handle.abort();
    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    expect(opts.onMeta).not.toHaveBeenCalled();
    expect(MockWebSocket.instances).toHaveLength(0);
  });

  it('ignores onerror after a success frame has closed the socket', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://x', name: 'x.png', type: 'image/png', size: 1,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = freshOpts();
    companionUploadUrl(makeUploadFile({ remoteUrl: 'https://x' }), opts);

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    const ws = MockWebSocket.instances[0];
    ws.emitSuccess({
      status: 'success',
      file: { uuid: 'u1', name: 'x.png', url: { public: 'p', cdn: 'c' } },
    });
    // A delayed `error` event after a clean close used to double-fire onError
    ws.onerror?.();
    ws.emitClose();

    expect(opts.onComplete).toHaveBeenCalledTimes(1);
    expect(opts.onError).not.toHaveBeenCalled();
  });

  it('surfaces an unexpected socket close as an error', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://x', name: 'x.png', type: 'image/png', size: 1,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = freshOpts();
    companionUploadUrl(makeUploadFile({ remoteUrl: 'https://x' }), opts);

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    const ws = MockWebSocket.instances[0];
    ws.emitClose();

    expect(opts.onError).toHaveBeenCalledWith(
      expect.objectContaining({ message: expect.stringContaining('closed unexpectedly') }),
    );
  });

  it('abort cancels the in-flight fetch and skips uploadFromUrl', async () => {
    let metaAborted = false;
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockImplementation(
      (_url: string, _u: string, signal?: AbortSignal) =>
        new Promise((_, reject) => {
          signal?.addEventListener('abort', () => {
            metaAborted = true;
            reject(Object.assign(new Error('aborted'), { name: 'AbortError' }));
          });
        }),
    );

    const opts = freshOpts();
    const handle = companionUploadUrl(
      makeUploadFile({ remoteUrl: 'https://x' }),
      opts,
    );

    handle.abort();
    await new Promise((r) => setTimeout(r, 0));

    expect(metaAborted).toBe(true);
    expect(uploadFromUrl).not.toHaveBeenCalled();
    expect(opts.onError).not.toHaveBeenCalled();
  });

  it('appends extraParams to the Scaleflex endpoint URL', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://x', name: 'x.png', type: 'image/png', size: 1,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = { ...freshOpts(), extraParams: { opt_force_name: 'forced' } };
    companionUploadUrl(makeUploadFile({ remoteUrl: 'https://x' }), opts);

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    expect(uploadFromUrl).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        endpoint: 'https://api.filerobot.com/test/v4/files?folder=%2Fuploads&opt_force_name=forced',
      }),
      expect.any(AbortSignal),
    );
  });

  it('prefers Companion-resolved name/type over the URL-derived closure values', async () => {
    // Companion follows redirects + reads Content-Disposition/Content-Type, so its
    // resolved values are strictly more authoritative than the host's URL guess.
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://example.com/share/abc123',
      name: 'resolved.pdf',
      type: 'application/pdf',
      size: 999,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = freshOpts();
    companionUploadUrl(
      makeUploadFile({
        remoteUrl: 'https://example.com/share/abc123',
        name: 'abc123',           // host's URL-parsed guess (no extension)
        type: 'application/octet-stream',
      }),
      opts,
    );

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    expect(uploadFromUrl).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        metadata: expect.objectContaining({
          name: 'resolved.pdf',
          type: 'application/pdf',
          'filerobot-folder': '/uploads',
        }),
      }),
      expect.any(AbortSignal),
    );
  });

  it('falls back to closure name/type when /url/meta returns empty fields', async () => {
    (fetchUrlMeta as ReturnType<typeof vi.fn>).mockResolvedValue({
      url: 'https://example.com/x',
      name: '',
      type: '',
      size: 10,
    });
    (uploadFromUrl as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 't' });

    const opts = freshOpts();
    companionUploadUrl(
      makeUploadFile({ remoteUrl: 'https://example.com/x', name: 'fallback.png', type: 'image/png' }),
      opts,
    );

    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => setTimeout(r, 0));

    expect(uploadFromUrl).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        metadata: expect.objectContaining({
          name: 'fallback.png',
          type: 'image/png',
        }),
      }),
      expect.any(AbortSignal),
    );
  });
});

describe('companionUploadFile', () => {
  it('errors when remoteInfo is missing', () => {
    const opts = freshOpts();
    companionUploadFile(makeUploadFile({ remoteInfo: null }), opts);
    expect(opts.onError).toHaveBeenCalledWith(
      expect.objectContaining({ message: expect.stringContaining('remoteInfo') }),
    );
    expect(uploadRemoteFile).not.toHaveBeenCalled();
  });

  it('forwards name, type, filerobot-folder, and JSON-stringified meta/tags/product', async () => {
    (uploadRemoteFile as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 'sock-1' });

    const opts = freshOpts();
    companionUploadFile(
      makeUploadFile({
        id: 'f-rem-1',
        remoteInfo: makeRemoteInfo({ size: 4242 }),
        name: 'photo.jpg',
        type: 'image/jpeg',
        meta: { alt: 'sunset', credit: 'me' },
        tags: ['nature', 'sunset'],
        product: { ref: 'sku-1', position: 0 },
      }),
      opts,
    );

    await new Promise((r) => setTimeout(r, 0));

    expect(uploadRemoteFile).toHaveBeenCalledWith(
      'https://eu-on-24001.connector.filerobot.com',
      'google-drive',
      'tok',
      'drive-file-1',
      expect.objectContaining({
        fileId: 'f-rem-1',
        endpoint: 'https://api.filerobot.com/test/v4/files?folder=%2Fuploads',
        headers: { 'X-Filerobot-Key': 'k' },
        size: 4242,
        metadata: {
          name: 'photo.jpg',
          type: 'image/jpeg',
          'filerobot-folder': '/uploads',
          meta: JSON.stringify({ alt: 'sunset', credit: 'me' }),
          tags: JSON.stringify(['nature', 'sunset']),
          product: JSON.stringify({ ref: 'sku-1', position: 0 }),
        },
      }),
      false,
    );
  });

  it('omits empty meta/tags/product from the Companion payload', async () => {
    (uploadRemoteFile as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 'sock-1' });

    const opts = freshOpts();
    companionUploadFile(
      makeUploadFile({
        remoteInfo: makeRemoteInfo(),
        name: 'photo.jpg',
        type: 'image/jpeg',
      }),
      opts,
    );

    await new Promise((r) => setTimeout(r, 0));

    const call = (uploadRemoteFile as ReturnType<typeof vi.fn>).mock.calls[0];
    const metadata = call[4].metadata as Record<string, unknown>;
    expect(metadata).toEqual({
      name: 'photo.jpg',
      type: 'image/jpeg',
      'filerobot-folder': '/uploads',
    });
  });

  it('routes search providers (no token) through /search/{pid}/get/', async () => {
    (uploadRemoteFile as ReturnType<typeof vi.fn>).mockResolvedValue({ token: 'sock-1' });

    const opts = freshOpts();
    companionUploadFile(
      makeUploadFile({
        remoteInfo: makeRemoteInfo({ provider: 'unsplash', token: '' }),
        name: 'mountain.jpg',
        type: 'image/jpeg',
      }),
      opts,
    );

    await new Promise((r) => setTimeout(r, 0));

    expect(uploadRemoteFile).toHaveBeenCalledWith(
      expect.any(String),
      'unsplash',
      '',
      expect.any(String),
      expect.objectContaining({
        metadata: expect.objectContaining({
          name: 'mountain.jpg',
          type: 'image/jpeg',
        }),
      }),
      true,
    );
  });
});
