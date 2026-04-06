// Public event names (spec §13.1) — dispatched as CustomEvents on the host element
export const PublicEvents = {
  FILE_ADDED: 'sfx-file-added',
  FILE_REMOVED: 'sfx-file-removed',
  FILE_REJECTED: 'sfx-file-rejected',
  UPLOAD_STARTED: 'sfx-upload-started',
  UPLOAD_PROGRESS: 'sfx-upload-progress',
  UPLOAD_COMPLETE: 'sfx-upload-complete',
  UPLOAD_ERROR: 'sfx-upload-error',
  UPLOAD_RETRY: 'sfx-upload-retry',
  UPLOAD_PAUSED: 'sfx-upload-paused',
  UPLOAD_RESUMED: 'sfx-upload-resumed',
  ALL_COMPLETE: 'sfx-all-complete',
  TOTAL_PROGRESS: 'sfx-total-progress',
  BEFORE_UPLOAD: 'sfx-before-upload',
  OPEN: 'sfx-open',
  CLOSE: 'sfx-close',
  CANCEL: 'sfx-cancel',
  COMPLETE_ACTION: 'sfx-complete-action',
  FILE_PREVIEW: 'sfx-file-preview',
  FILL_METADATA: 'sfx-fill-metadata',
} as const;

export type PublicEventName = typeof PublicEvents[keyof typeof PublicEvents];
