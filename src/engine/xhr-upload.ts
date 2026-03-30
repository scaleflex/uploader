import type { UploadFile, UploadResponse } from '../store/store.types';
import type { AuthHeaders } from '../auth/auth.types';

export interface XhrUploadOptions {
  apiBase: string;          // e.g. "https://api.filerobot.com/mycontainer"
  authHeaders: AuthHeaders;
  folder: string;
  onProgress: (bytesUploaded: number, bytesTotal: number) => void;
  onComplete: (response: UploadResponse) => void;
  onError: (error: Error) => void;
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

  const base = opts.apiBase.replace(/\/+$/, '');
  const url = `${base}/v4/files?folder=${encodeURIComponent(opts.folder)}`;

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
  //   info[files[]] = JSON with {name, type} (+ optional meta/tags)
  //   files[]       = the actual file blob
  const formData = new FormData();

  if (uploadFile.file) {
    // Info part must come before the file part
    const info: Record<string, unknown> = {
      name: uploadFile.name,
      type: uploadFile.type,
    };
    if (Object.keys(uploadFile.meta).length > 0) {
      info.meta = uploadFile.meta;
    }
    if (uploadFile.tags.length > 0) {
      info.tags = uploadFile.tags;
    }
    formData.append('info[files[]]', JSON.stringify(info));
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
 * Upload a remote URL to Scaleflex /v4/files/upload_url.
 */
export function xhrUploadUrl(
  uploadFile: UploadFile,
  opts: Omit<XhrUploadOptions, 'onProgress'> & { onProgress?: never },
): XhrUploadHandle {
  const xhr = new XMLHttpRequest();
  let aborted = false;

  const base = opts.apiBase.replace(/\/+$/, '');
  const url = `${base}/v4/files/upload_url`;

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

  if (!uploadFile.remoteUrl) {
    opts.onError(new Error('Remote URL is required for URL upload'));
    return { abort() {} };
  }

  const payload = {
    files_urls: [{ url: uploadFile.remoteUrl, name: uploadFile.name }],
    dir: opts.folder,
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
