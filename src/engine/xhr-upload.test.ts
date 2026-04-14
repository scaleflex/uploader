import { xhrUploadFile, xhrUploadUrl } from './xhr-upload';
import { makeUploadFile } from '../test-utils';

// Mock XMLHttpRequest as a proper constructor
class MockXHR {
  open = vi.fn();
  send = vi.fn();
  abort = vi.fn();
  setRequestHeader = vi.fn();
  timeout = 0;
  status = 200;
  responseText = '';
  upload = { addEventListener: vi.fn() };
  _listeners: Record<string, Function> = {};

  addEventListener(event: string, handler: Function) {
    this._listeners[event] = handler;
  }

  _triggerLoad(status: number, body: unknown) {
    this.status = status;
    this.responseText = JSON.stringify(body);
    this._listeners['load']?.();
  }

  _triggerError() {
    this._listeners['error']?.();
  }

  _triggerTimeout() {
    this._listeners['timeout']?.();
  }

  _triggerProgress(loaded: number, total: number) {
    const handler = this.upload.addEventListener.mock.calls.find(
      (c: any[]) => c[0] === 'progress',
    )?.[1];
    handler?.({ lengthComputable: true, loaded, total });
  }
}

let mockXhr: MockXHR;

beforeEach(() => {
  mockXhr = new MockXHR();
  // Use a proper function constructor so `new XMLHttpRequest()` works
  vi.stubGlobal('XMLHttpRequest', function (this: any) {
    return Object.assign(this, mockXhr);
  } as any);
  // Actually, easier: just replace the global with a function that returns mockXhr
  vi.stubGlobal('XMLHttpRequest', new Proxy(MockXHR, {
    construct() {
      return mockXhr;
    },
  }));
});

afterEach(() => {
  vi.restoreAllMocks();
});

function freshOpts() {
  return {
    apiBase: 'https://api.filerobot.com/test',
    authHeaders: { 'X-Filerobot-Key': 'key123' } as Record<string, string>,
    folder: '/uploads',
    onProgress: vi.fn(),
    onComplete: vi.fn(),
    onError: vi.fn(),
  };
}

describe('xhrUploadFile', () => {
  it('opens POST to correct URL', () => {
    const file = makeUploadFile({ file: new File(['data'], 'test.png', { type: 'image/png' }) });
    xhrUploadFile(file, freshOpts());

    expect(mockXhr.open).toHaveBeenCalledWith(
      'POST',
      'https://api.filerobot.com/test/v4/files?folder=%2Fuploads',
    );
  });

  it('sets auth headers', () => {
    xhrUploadFile(makeUploadFile(), freshOpts());
    expect(mockXhr.setRequestHeader).toHaveBeenCalledWith('X-Filerobot-Key', 'key123');
  });

  it('sends FormData', () => {
    xhrUploadFile(makeUploadFile(), freshOpts());
    expect(mockXhr.send).toHaveBeenCalledWith(expect.any(FormData));
  });

  it('sets 60s timeout', () => {
    xhrUploadFile(makeUploadFile(), freshOpts());
    expect(mockXhr.timeout).toBe(60000);
  });

  it('calls onComplete on successful response', () => {
    const opts = freshOpts();
    xhrUploadFile(makeUploadFile(), opts);

    const successResponse = { status: 'success', file: { uuid: '123', name: 'test.png', url: { public: 'u', cdn: 'c' } } };
    mockXhr._triggerLoad(200, successResponse);

    expect(opts.onComplete).toHaveBeenCalledWith(successResponse);
  });

  it('calls onError on HTTP error status', () => {
    const opts = freshOpts();
    xhrUploadFile(makeUploadFile(), opts);

    mockXhr._triggerLoad(500, { status: 'error', msg: 'Server error' });
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: 'Server error' }));
  });

  it('calls onError on invalid JSON', () => {
    const opts = freshOpts();
    xhrUploadFile(makeUploadFile(), opts);

    mockXhr.status = 200;
    mockXhr.responseText = 'not json';
    mockXhr._listeners['load']?.();

    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Invalid JSON') }));
  });

  it('calls onError on network error', () => {
    const opts = freshOpts();
    xhrUploadFile(makeUploadFile(), opts);

    mockXhr._triggerError();
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Network error') }));
  });

  it('calls onError on timeout', () => {
    const opts = freshOpts();
    xhrUploadFile(makeUploadFile(), opts);

    mockXhr._triggerTimeout();
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('timed out') }));
  });

  it('reports progress', () => {
    const opts = freshOpts();
    xhrUploadFile(makeUploadFile(), opts);

    mockXhr._triggerProgress(500, 1000);
    expect(opts.onProgress).toHaveBeenCalledWith(500, 1000);
  });

  it('abort stops triggering callbacks', () => {
    const opts = freshOpts();
    const handle = xhrUploadFile(makeUploadFile(), opts);

    handle.abort();
    mockXhr._triggerLoad(200, { status: 'success', file: {} });
    mockXhr._triggerError();

    expect(opts.onComplete).not.toHaveBeenCalled();
    // onError should not be called after abort (the load/error are ignored)
    expect(mockXhr.abort).toHaveBeenCalled();
  });

  it('sends meta and tags as separate FormData fields', () => {
    const file = makeUploadFile({
      file: new File(['data'], 'test.png', { type: 'image/png' }),
      meta: { author: 'test' },
      tags: ['photo', 'nature'],
    });
    const opts = freshOpts();
    xhrUploadFile(file, opts);

    const sentFormData = mockXhr.send.mock.calls[0][0] as FormData;
    const info = JSON.parse(sentFormData.get('info[files[]]') as string);
    expect(info.meta).toBeUndefined();
    expect(info.tags).toBeUndefined();

    const meta = JSON.parse(sentFormData.get('meta[files[]]') as string);
    expect(meta).toEqual({ author: 'test' });

    const tags = JSON.parse(sentFormData.get('tags[files[]]') as string);
    expect(tags).toEqual(['photo', 'nature']);
  });

  it('omits meta[files[]] and tags[files[]] when empty', () => {
    const file = makeUploadFile({
      file: new File(['data'], 'test.png', { type: 'image/png' }),
      meta: {},
      tags: [],
    });
    const opts = freshOpts();
    xhrUploadFile(file, opts);

    const sentFormData = mockXhr.send.mock.calls[0][0] as FormData;
    expect(sentFormData.get('meta[files[]]')).toBeNull();
    expect(sentFormData.get('tags[files[]]')).toBeNull();
  });
});

function freshUrlOpts() {
  const { onProgress: _, ...opts } = freshOpts();
  return opts;
}

describe('xhrUploadUrl', () => {
  it('opens POST to /v4/files with folder query string', () => {
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), freshUrlOpts());

    expect(mockXhr.open).toHaveBeenCalledWith(
      'POST',
      'https://api.filerobot.com/test/v4/files?folder=%2Fuploads',
    );
  });

  it('sets Content-Type to application/json', () => {
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), freshUrlOpts());
    expect(mockXhr.setRequestHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
  });

  it('sends JSON payload with files_urls', () => {
    const file = makeUploadFile({ remoteUrl: 'https://example.com/img.jpg', name: 'img.jpg' });
    xhrUploadUrl(file, freshUrlOpts());

    const sent = JSON.parse(mockXhr.send.mock.calls[0][0]);
    expect(sent).toEqual({
      files_urls: [{ url: 'https://example.com/img.jpg', name: 'img.jpg' }],
    });
  });

  it('calls onError when remoteUrl is null', () => {
    const opts = freshUrlOpts();
    xhrUploadUrl(makeUploadFile({ remoteUrl: null }), opts);
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Remote URL') }));
    expect(mockXhr.open).not.toHaveBeenCalled();
  });

  it('calls onComplete on success', () => {
    const opts = freshUrlOpts();
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), opts);

    const response = { status: 'success', file: { uuid: '456' } };
    mockXhr._triggerLoad(200, response);
    expect(opts.onComplete).toHaveBeenCalledWith(response);
  });

  it('calls onError on HTTP error status', () => {
    const opts = freshUrlOpts();
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), opts);

    mockXhr._triggerLoad(500, { status: 'error', msg: 'Server error' });
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: 'Server error' }));
  });

  it('calls onError on invalid JSON', () => {
    const opts = freshUrlOpts();
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), opts);

    mockXhr.status = 200;
    mockXhr.responseText = 'not json';
    mockXhr._listeners['load']?.();

    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Invalid JSON') }));
  });

  it('calls onError on network error', () => {
    const opts = freshUrlOpts();
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), opts);

    mockXhr._triggerError();
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('Network error') }));
  });

  it('calls onError on timeout', () => {
    const opts = freshUrlOpts();
    xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), opts);

    mockXhr._triggerTimeout();
    expect(opts.onError).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('timed out') }));
  });

  it('abort stops triggering callbacks', () => {
    const opts = freshUrlOpts();
    const handle = xhrUploadUrl(makeUploadFile({ remoteUrl: 'https://example.com/img.jpg' }), opts);

    handle.abort();
    mockXhr._triggerLoad(200, { status: 'success', file: {} });
    mockXhr._triggerError();

    expect(opts.onComplete).not.toHaveBeenCalled();
    expect(mockXhr.abort).toHaveBeenCalled();
  });
});
