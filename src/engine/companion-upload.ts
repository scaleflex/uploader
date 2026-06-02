import type { UploadFile, UploadResponse } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import { uploadRemoteFile, getSocketHost } from '../connectors/companion-client';
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

  const base = opts.apiBase.replace(/\/+$/, '');
  let endpoint = `${base}/v4/files?folder=${encodeURIComponent(opts.folder)}`;
  if (opts.extraParams) {
    for (const [key, value] of Object.entries(opts.extraParams)) {
      if (value == null) continue;
      endpoint += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  }

  // Build metadata to pass through to Scaleflex (matches v5 behavior).
  // `filerobot-folder` is the form-field name FR reads on the Companion relay
  // path — the `?folder=` query string alone is not honored here.
  const metadata: Record<string, unknown> = {};
  if (uploadFile.meta && Object.keys(uploadFile.meta).length > 0) {
    Object.assign(metadata, uploadFile.meta);
  }
  if (uploadFile.tags && uploadFile.tags.length > 0) {
    metadata.tags = uploadFile.tags;
  }
  metadata['filerobot-folder'] = opts.folder;

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

      // Connect to Companion's WebSocket for real-time progress
      const wsHost = getSocketHost(info.companionUrl);
      const wsUrl = `${wsHost}/api/${result.token}`;

      try {
        socket = new WebSocket(wsUrl);
      } catch (err) {
        opts.onError(new Error('Failed to connect to upload progress channel'));
        return;
      }

      socket.onmessage = (event) => {
        if (aborted) return;

        try {
          const msg = JSON.parse(event.data) as {
            action: string;
            payload: Record<string, unknown>;
          };

          switch (msg.action) {
            case 'progress': {
              const payload = msg.payload as { bytesUploaded?: number; bytesTotal?: number };
              const loaded = payload.bytesUploaded ?? 0;
              const total = payload.bytesTotal ?? (info.size || 1);
              opts.onProgress(loaded, total);
              break;
            }

            case 'success': {
              const payload = msg.payload as {
                response?: { responseText?: string; status?: number };
              };
              socket?.close();

              // Parse the actual Scaleflex response from Companion's relay
              if (payload.response?.responseText) {
                try {
                  const body = JSON.parse(payload.response.responseText) as UploadResponse;
                  if (body.status === 'success') {
                    opts.onComplete(body);
                    return;
                  }
                  if (isSameAssetExists(body)) {
                    // Identical content already exists — treat as a successful
                    // upload of the pre-existing asset rather than an error.
                    opts.onComplete(buildSameAssetResponse(body, uploadFile));
                    return;
                  }
                  opts.onError(new Error(body.msg || 'Upload failed'));
                  return;
                } catch {
                  // responseText wasn't valid JSON — fall through
                }
              }

              // Fallback: if response doesn't contain valid upload data
              opts.onError(new Error('Upload completed but no valid response received'));
              break;
            }

            case 'error': {
              socket?.close();
              const payload = msg.payload as {
                error?: { message?: string };
                response?: { responseText?: string };
              };

              // Try to extract error from Companion's response
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
        if (!aborted) {
          opts.onError(new Error('Upload progress connection failed'));
        }
      };

      socket.onclose = () => {
        socket = null;
      };
    })
    .catch((err) => {
      if (!aborted) {
        opts.onError(err instanceof Error ? err : new Error(String(err)));
      }
    });

  return {
    abort() {
      aborted = true;
      if (socket) {
        // Tell Companion to cancel the upload
        try {
          socket.send(JSON.stringify({ action: 'cancel', payload: {} }));
        } catch {
          // socket may already be closed
        }
        socket.close();
        socket = null;
      }
    },
  };
}
