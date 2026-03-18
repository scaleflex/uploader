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
  });
}

export { Store } from './store';
export { updateFile, addFile, removeFile } from './helpers';
export type { UploaderState, UploadFile, FileStatus, UploadResponse, QueueConfig, RetryConfig, UploadRestrictions } from './store.types';
