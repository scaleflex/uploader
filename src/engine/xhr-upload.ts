import type { UploadFile, UploadResponse } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';
import { isSameAssetExists, fetchSameAssetResponse } from './same-asset';

export interface XhrUploadOptions {
  apiBase: string;          // e.g. "https://api.filerobot.com/mycontainer"
  authHeaders: AuthHeaders;
  folder: string;
  /** Extra query-string parameters to append to the upload URL (e.g. `opt_force_name`). */
  extraParams?: Record<string, string>;
  onProgress: (bytesUploaded: number, bytesTotal: number) => void;
  onComplete: (response: UploadResponse) => void;
  onError: (error: Error) => void;
}

/** Build the `/v4/files` URL with `folder` plus any extra `opt_*` params. */
function buildUploadUrl(
  apiBase: string,
  folder: string,
  extraParams?: Record<string, string>,
): string {
  const base = apiBase.replace(/\/+$/, '');
  let url = `${base}/v4/files?folder=${encodeURIComponent(folder)}`;
  if (extraParams) {
    for (const [key, value] of Object.entries(extraParams)) {
      if (value == null) continue;
      url += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
  }
  return url;
}

export interface XhrUploadHandle {
  abort: () => void;
}

/**
 * Upload a local File to Scaleflex /v4/files via XHR.
 * Returns a handle with an abort method.
 */
export function xhrUploadFile(
  uploadFile: UploadFile,
  opts: XhrUploadOptions,
): XhrUploadHandle {
  const xhr = new XMLHttpRequest();
  let aborted = false;

  const url = buildUploadUrl(opts.apiBase, opts.folder, opts.extraParams);

  xhr.open('POST', url);
  for (const [key, value] of Object.entries(opts.authHeaders)) {
    xhr.setRequestHeader(key, value);
  }

  // Progress
  xhr.upload.addEventListener('progress', (ev) => {
    if (ev.lengthComputable && !aborted) {
      opts.onProgress(ev.loaded, ev.total);
    }
  });

  // Success / error
  xhr.addEventListener('load', () => {
    if (aborted) return;

    let body: UploadResponse;
    try {
      body = JSON.parse(xhr.responseText);
    } catch {
      opts.onError(new Error(`Invalid JSON response (HTTP ${xhr.status})`));
      return;
    }

    if (xhr.status >= 200 && xhr.status < 300 && body.status === 'success') {
      opts.onComplete(body);
    } else if (isSameAssetExists(body)) {
      // Identical content already exists in the target directory — not a real
      // failure. Fetch the existing file record so consumers get a real URL.
      fetchSameAssetResponse(body, uploadFile, opts.apiBase, opts.authHeaders)
        .then((r) => { if (!aborted) opts.onComplete(r); });
    } else {
      opts.onError(new Error(body.hint || body.msg || `Upload failed (HTTP ${xhr.status})`));
    }
  });

  xhr.addEventListener('error', () => {
    if (!aborted) {
      opts.onError(new Error('Network error — check your connection'));
    }
  });

  xhr.addEventListener('timeout', () => {
    if (!aborted) {
      opts.onError(new Error('Upload timed out'));
    }
  });

  // Build FormData — matches Scaleflex multipart format:
  //   info[files[]] = JSON with {name, type}
  //   meta[files[]] = JSON with metadata values (optional)
  //   tags[files[]] = JSON with tags array (optional)
  //   files[]       = the actual file blob
  const formData = new FormData();

  if (uploadFile.file) {
    // Info part must come before the file part
    const info: Record<string, unknown> = {
      name: uploadFile.name,
      type: uploadFile.type,
    };
    formData.append('info[files[]]', JSON.stringify(info));
    if (Object.keys(uploadFile.meta).length > 0) {
      formData.append('meta[files[]]', JSON.stringify(uploadFile.meta));
    }
    if (uploadFile.tags.length > 0) {
      formData.append('tags[files[]]', JSON.stringify(uploadFile.tags));
    }
    formData.append('files[]', uploadFile.file, uploadFile.name);
  }

  xhr.timeout = 60_000;
  xhr.send(formData);

  return {
    abort() {
      aborted = true;
      xhr.abort();
    },
  };
}

/**
 * Upload a remote URL to Scaleflex /v4/files (with `?folder=` query string,
 * same endpoint as direct file upload — server distinguishes by Content-Type
 * and `files_urls` body shape).
 */
export function xhrUploadUrl(
  uploadFile: UploadFile,
  opts: Omit<XhrUploadOptions, 'onProgress'> & { onProgress?: never },
): XhrUploadHandle {
  if (!uploadFile.remoteUrl) {
    opts.onError(new Error('Remote URL is required for URL upload'));
    return { abort() {} };
  }

  const xhr = new XMLHttpRequest();
  let aborted = false;

  const url = buildUploadUrl(opts.apiBase, opts.folder, opts.extraParams);

  xhr.open('POST', url);
  for (const [key, value] of Object.entries(opts.authHeaders)) {
    xhr.setRequestHeader(key, value);
  }
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('load', () => {
    if (aborted) return;

    let body: UploadResponse;
    try {
      body = JSON.parse(xhr.responseText);
    } catch {
      opts.onError(new Error(`Invalid JSON response (HTTP ${xhr.status})`));
      return;
    }

    if (xhr.status >= 200 && xhr.status < 300 && body.status === 'success') {
      opts.onComplete(body);
    } else if (isSameAssetExists(body)) {
      // Identical content already exists in the target directory — not a real
      // failure. Fetch the existing file record so consumers get a real URL.
      fetchSameAssetResponse(body, uploadFile, opts.apiBase, opts.authHeaders)
        .then((r) => { if (!aborted) opts.onComplete(r); });
    } else {
      opts.onError(new Error(body.hint || body.msg || `Upload failed (HTTP ${xhr.status})`));
    }
  });

  xhr.addEventListener('error', () => {
    if (!aborted) {
      opts.onError(new Error('Network error — check your connection'));
    }
  });

  xhr.addEventListener('timeout', () => {
    if (!aborted) {
      opts.onError(new Error('Upload timed out'));
    }
  });

  const payload = {
    files_urls: [{ url: uploadFile.remoteUrl, name: uploadFile.name }],
  };

  xhr.timeout = 60_000;
  xhr.send(JSON.stringify(payload));

  return {
    abort() {
      aborted = true;
      xhr.abort();
    },
  };
}
