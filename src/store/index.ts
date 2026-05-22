import { Store } from './store';
import type { UploaderState } from './store.types';

export function createStore(): Store<UploaderState> {
  return new Store<UploaderState>({
    files: new Map(),

    queueConfig: {
      concurrency: 3,
      autoProceed: false,
      retryConfig: {
        maxRetries: 0,
        baseDelay: 1000,
        maxDelay: 30_000,
        backoffFactor: 2,
      },
    },
    isPaused: false,

    restrictions: {
      maxFileSize: null,
      maxTotalFilesSize: null,
      maxNumberOfFiles: null,
      minNumberOfFiles: null,
      allowedFileTypes: null,
      blockedFileTypes: null,
    },

    targetFolder: '/',

    totalProgress: 0,
    totalSpeed: 0,
    totalBytesUploaded: 0,
    totalBytes: 0,

    isUploading: false,

    t: (_key, defaultValueOrOptions?, options?) => {
      const interpolate = (str: string, opts: Record<string, unknown>) =>
        str.replace(/\{\{(\w+)\}\}/g, (_, k) => String(opts[k] ?? ''));
      if (typeof defaultValueOrOptions === 'string') {
        return interpolate(defaultValueOrOptions, options ?? {});
      }
      if (typeof defaultValueOrOptions === 'object' && defaultValueOrOptions !== null) {
        const opts = defaultValueOrOptions;
        const count = opts.count as number | undefined;
        if (count !== undefined) {
          const val = String(
            (count === 1 ? opts.defaultValue_one : opts.defaultValue_other) ??
              opts.defaultValue ??
              _key,
          );
          return interpolate(val, opts);
        }
        return interpolate(String(opts.defaultValue ?? _key), opts);
      }
      return _key;
    },
  });
}

export { Store } from './store';
export { updateFile, addFile, removeFile } from './helpers';
export type { UploaderState, UploadFile, FileStatus, UploadResponse, QueueConfig, RetryConfig, UploadRestrictions } from './store.types';
