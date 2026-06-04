import type { UploadFile, UploadResponse } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import {
  uploadRemoteFile,
  uploadFromUrl,
  fetchUrlMeta,
  getSocketHost,
} from '../connectors/companion-client';
import type { XhrUploadHandle } from './xhr-upload';
import { isSameAssetExists, buildSameAssetResponse } from './same-asset';

export interface CompanionUploadOptions {
  apiBase: string;
  authHeaders: AuthHeaders;
  folder: string;
  /** Extra query-string parameters appended to the Scaleflex endpoint URL Companion forwards to (e.g. `opt_force_name`). */
  extraParams?: Record<string, string>;
  onProgress: (bytesUploaded: number, bytesTotal: number) => void;
  onComplete: (response: UploadResponse) => void;
  onError: (error: Error) => void;
}

export interface CompanionUrlUploadOptions extends CompanionUploadOptions {
  /** Companion connector base URL (from `connectors.companionUrl`). */
  companionUrl: string;
  /** Called once `/url/meta` resolves so the store can update size/type before upload. */
  onMeta?: (meta: { name: string; type: string; size: number }) => void;
}

/** Build the Scaleflex `/v4/files` endpoint URL Companion forwards to. */
function buildEndpoint(
  apiBase: string,
  folder: string,
  extraParams?: Record<string, string>,
): string {
  const base = apiBase.replace(/\/+$/, '');
  let endpoint = `${base}/v4/files?folder=${encodeURIComponent(folder)}`;
  if (extraParams) {
    for (const [key, value] of Object.entries(extraParams)) {
      if (value == null) continue;
      endpoint += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  }
  return endpoint;
}

/** Metadata Companion forwards to Scaleflex on each upload. */
function buildMetadata(uploadFile: UploadFile, folder: string): Record<string, unknown> {
  // `filerobot-folder` is the form-field name FR reads on the Companion relay
  // path — the `?folder=` query string alone is not honored here.
  const metadata: Record<string, unknown> = {};
  if (uploadFile.meta && Object.keys(uploadFile.meta).length > 0) {
    Object.assign(metadata, uploadFile.meta);
  }
  if (uploadFile.tags && uploadFile.tags.length > 0) {
    metadata.tags = uploadFile.tags;
  }
  metadata['filerobot-folder'] = folder;
  return metadata;
}

interface SocketConsumerOpts {
  companionUrl: string;
  token: string;
  uploadFile: UploadFile;
  expectedSize: number;
  onProgress: (bytesUploaded: number, bytesTotal: number) => void;
  onComplete: (response: UploadResponse) => void;
  onError: (error: Error) => void;
}

/**
 * Consume Companion's async upload progress channel for a previously-issued
 * socket token. Returns the open socket so the caller can abort/cancel.
 *
 * Companion emits `progress`, `success`, and `error` actions over a single
 * WebSocket — payload shapes match across the `url` and OAuth provider
 * flows, so the consumer is shared.
 */
function consumeCompanionSocket(opts: SocketConsumerOpts): WebSocket | null {
  const wsHost = getSocketHost(opts.companionUrl);
  const wsUrl = `${wsHost}/api/${opts.token}`;

  let socket: WebSocket;
  try {
    socket = new WebSocket(wsUrl);
  } catch {
    opts.onError(new Error('Failed to connect to upload progress channel'));
    return null;
  }

  // `done` guards against a late `onerror` firing after we've already
  // delivered a terminal `success`/`error` frame and called `socket.close()`.
  // Browsers can still dispatch an `error` event during an abnormal close —
  // without this flag the consumer would call both `onComplete` and
  // `onError` for the same upload, causing the engine to schedule a retry
  // on a successfully-uploaded file.
  let done = false;
  const finish = () => {
    done = true;
    socket.onmessage = null;
    socket.onerror = null;
    socket.onclose = null;
  };

  socket.onmessage = (event) => {
    if (done) return;
    try {
      const msg = JSON.parse(event.data) as {
        action: string;
        payload: Record<string, unknown>;
      };

      switch (msg.action) {
        case 'progress': {
          const payload = msg.payload as { bytesUploaded?: number; bytesTotal?: number };
          const loaded = payload.bytesUploaded ?? 0;
          const total = payload.bytesTotal ?? (opts.expectedSize || 1);
          opts.onProgress(loaded, total);
          break;
        }

        case 'success': {
          const payload = msg.payload as {
            response?: { responseText?: string; status?: number };
          };
          finish();
          socket.close();

          if (payload.response?.responseText) {
            try {
              const body = JSON.parse(payload.response.responseText) as UploadResponse;
              if (body.status === 'success') {
                opts.onComplete(body);
                return;
              }
              if (isSameAssetExists(body)) {
                opts.onComplete(buildSameAssetResponse(body, opts.uploadFile));
                return;
              }
              opts.onError(new Error(body.msg || 'Upload failed'));
              return;
            } catch {
              // responseText wasn't valid JSON — fall through
            }
          }

          opts.onError(new Error('Upload completed but no valid response received'));
          break;
        }

        case 'error': {
          const payload = msg.payload as {
            error?: { message?: string };
            response?: { responseText?: string };
          };
          finish();
          socket.close();

          let errMsg = payload.error?.message || 'Upload failed';
          if (payload.response?.responseText) {
            try {
              const parsed = JSON.parse(payload.response.responseText);
              errMsg = parsed.hint || parsed.msg || parsed.message || errMsg;
            } catch {
              // ignore parse error
            }
          }

          opts.onError(new Error(errMsg));
          break;
        }
      }
    } catch {
      // Ignore malformed messages
    }
  };

  socket.onerror = () => {
    if (done) return;
    finish();
    opts.onError(new Error('Upload progress connection failed'));
  };

  // Companion can close the socket without an explicit `error` frame
  // (e.g. relay died mid-upload). Surface that as an error so the file
  // doesn't sit in `uploading` indefinitely.
  socket.onclose = () => {
    if (done) return;
    finish();
    opts.onError(new Error('Upload progress connection closed unexpectedly'));
  };

  return socket;
}

/** Send a cancel frame and close the socket. */
function abortCompanionSocket(socket: WebSocket | null): void {
  if (!socket) return;
  // Detach handlers before closing — otherwise our own `close()` would
  // trip the unexpected-close `onclose` handler in `consumeCompanionSocket`
  // and fire `opts.onError` after the caller already aborted.
  socket.onmessage = null;
  socket.onerror = null;
  socket.onclose = null;
  try {
    socket.send(JSON.stringify({ action: 'cancel', payload: {} }));
  } catch {
    // socket may already be closed
  }
  socket.close();
}

/**
 * Upload a file via the Companion proxy: Companion downloads from the
 * cloud provider and uploads to Scaleflex on our behalf.
 *
 * Flow:
 * 1. POST to Companion /{provider}/get/{requestPath} with Scaleflex endpoint info
 * 2. Companion returns immediately with { token } (async upload)
 * 3. Connect to WebSocket at wss://{companionHost}/api/{token}
 * 4. Receive 'progress', 'success', 'error' events via WebSocket
 */
export function companionUploadFile(
  uploadFile: UploadFile,
  opts: CompanionUploadOptions,
): XhrUploadHandle {
  const info = uploadFile.remoteInfo;
  if (!info) {
    opts.onError(new Error('remoteInfo is required for companion upload'));
    return { abort() {} };
  }

  let aborted = false;
  let socket: WebSocket | null = null;

  const endpoint = buildEndpoint(opts.apiBase, opts.folder, opts.extraParams);
  const metadata = buildMetadata(uploadFile, opts.folder);
  const isSearchProvider = !info.token;

  uploadRemoteFile(info.companionUrl, info.provider, info.token, info.requestPath, {
    fileId: info.fileId,
    endpoint,
    headers: opts.authHeaders,
    size: info.size,
    metadata,
  }, isSearchProvider)
    .then((result) => {
      if (aborted) return;
      socket = consumeCompanionSocket({
        companionUrl: info.companionUrl,
        token: result.token,
        uploadFile,
        expectedSize: info.size,
        onProgress: (loaded, total) => {
          if (!aborted) opts.onProgress(loaded, total);
        },
        onComplete: (response) => {
          if (!aborted) opts.onComplete(response);
        },
        onError: (err) => {
          if (!aborted) opts.onError(err);
        },
      });
    })
    .catch((err) => {
      if (!aborted) {
        opts.onError(err instanceof Error ? err : new Error(String(err)));
      }
    });

  return {
    abort() {
      aborted = true;
      abortCompanionSocket(socket);
      socket = null;
    },
  };
}

/**
 * Upload a remote URL via the Companion proxy. Matches the legacy Hub flow:
 * 1. POST to `{companionUrl}/url/meta` to resolve the file's size/name/type
 * 2. POST to `{companionUrl}/url/get` with the Scaleflex endpoint — Companion
 *    streams the URL into our `/v4/files` endpoint
 * 3. Open the same WebSocket progress channel as cloud-provider uploads
 */
export function companionUploadUrl(
  uploadFile: UploadFile,
  opts: CompanionUrlUploadOptions,
): XhrUploadHandle {
  const remoteUrl = uploadFile.remoteUrl;
  if (!remoteUrl) {
    opts.onError(new Error('Remote URL is required for URL upload'));
    return { abort() {} };
  }

  let aborted = false;
  let socket: WebSocket | null = null;
  // Single controller for both pre-WS fetches — `handle.abort()` cancels
  // the in-flight `/url/meta` or `/url/get` request so Companion isn't
  // told to start downloading a URL we no longer want.
  const fetchCtrl = new AbortController();

  const endpoint = buildEndpoint(opts.apiBase, opts.folder, opts.extraParams);

  fetchUrlMeta(opts.companionUrl, remoteUrl, fetchCtrl.signal)
    .then((meta) => {
      if (aborted) return null;
      opts.onMeta?.({ name: meta.name, type: meta.type, size: meta.size });
      return uploadFromUrl(
        opts.companionUrl,
        remoteUrl,
        {
          fileId: uploadFile.id,
          endpoint,
          headers: opts.authHeaders,
          size: meta.size,
          metadata: buildMetadata(uploadFile, opts.folder),
        },
        fetchCtrl.signal,
      ).then((result) => ({ result, size: meta.size }));
    })
    .then((res) => {
      if (aborted || !res) return;
      socket = consumeCompanionSocket({
        companionUrl: opts.companionUrl,
        token: res.result.token,
        uploadFile,
        expectedSize: res.size,
        onProgress: (loaded, total) => {
          if (!aborted) opts.onProgress(loaded, total);
        },
        onComplete: (response) => {
          if (!aborted) opts.onComplete(response);
        },
        onError: (err) => {
          if (!aborted) opts.onError(err);
        },
      });
    })
    .catch((err) => {
      if (aborted) return;
      // Aborted fetches reject with AbortError — already covered by `aborted`
      // above on the normal abort path. Be defensive in case the signal
      // aborts without the caller flipping `aborted`.
      if (err && (err as { name?: string }).name === 'AbortError') return;
      opts.onError(err instanceof Error ? err : new Error(String(err)));
    });

  return {
    abort() {
      aborted = true;
      fetchCtrl.abort();
      abortCompanionSocket(socket);
      socket = null;
    },
  };
}
