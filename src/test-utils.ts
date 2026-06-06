import type { UploadFile, UploadRestrictions, UploaderState } from './store/store.types';

export function makeUploadFile(overrides: Partial<UploadFile> = {}): UploadFile {
  return {
    id: 'file-1',
    status: 'idle',
    file: new File(['hello'], 'test.png', { type: 'image/png' }),
    remoteUrl: null,
    name: 'test.png',
    size: 5,
    type: 'image/png',
    previewUrl: null,
    duration: null,
    progress: 0,
    speed: 0,
    bytesUploaded: 0,
    error: null,
    retryCount: 0,
    response: null,
    addedAt: Date.now(),
    meta: {},
    tags: [],
    product: {},
    remoteInfo: null,
    relativeFolder: '',
    isTus: false,
    tusUploadUrl: null,
    ...overrides,
  };
}

export function makeRestrictions(overrides: Partial<UploadRestrictions> = {}): UploadRestrictions {
  return {
    maxFileSize: null,
    maxTotalFilesSize: null,
    maxNumberOfFiles: null,
    minNumberOfFiles: null,
    allowedFileTypes: null,
    blockedFileTypes: null,
    ...overrides,
  };
}

export function makeDefaultState(overrides: Partial<UploaderState> = {}): UploaderState {
  return {
    files: new Map(),
    queueConfig: {
      concurrency: 3,
      autoProceed: false,
      retryConfig: {
        maxRetries: 3,
        baseDelay: 1000,
        maxDelay: 30000,
        backoffFactor: 2,
      },
    },
    isPaused: false,
    restrictions: makeRestrictions(),
    targetFolder: '/',
    totalProgress: 0,
    totalSpeed: 0,
    totalBytesUploaded: 0,
    totalBytes: 0,
    isUploading: false,
    t: (k, d) => (typeof d === 'string' ? d : k),
    ...overrides,
  };
}
