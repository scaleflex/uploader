import type { RemoteFileInfo } from '../connectors/connector.types';

// --- File lifecycle states (spec §5.1) ---

export type FileStatus =
  | 'idle'
  | 'queued'
  | 'uploading'
  | 'paused'
  | 'complete'
  | 'error'
  | 'retrying'
  | 'failed'
  | 'rejected'
  | 'cancelled';

// --- Upload file representation ---

export interface UploadFile {
  id: string;
  status: FileStatus;

  // Source data — exactly one is set
  file: File | null;         // device / paste / webcam / screen
  remoteUrl: string | null;  // URL upload or cloud connector

  // Metadata
  name: string;
  size: number;              // bytes (0 for remote URLs until server reports)
  type: string;              // MIME
  previewUrl: string | null; // objectURL for local images
  duration: number | null;   // seconds (video/audio)

  // Progress
  progress: number;          // 0–100
  speed: number;             // bytes/sec
  bytesUploaded: number;
  error: string | null;
  retryCount: number;

  // Server response (populated on complete)
  response: UploadResponse | null;

  // Ordering
  addedAt: number;           // Date.now() at insertion — used for queue ordering

  // Per-file metadata for the upload request
  meta: Record<string, unknown>;
  tags: string[];

  // Companion connector metadata (set for files from cloud providers)
  remoteInfo: RemoteFileInfo | null;

  // tus resumable upload state
  isTus: boolean;
  tusUploadUrl: string | null;
}

export interface UploadResponse {
  status: 'success' | 'error';
  file: {
    uuid: string;
    name: string;
    extension: string;
    type: string;
    size: number;
    url: { public: string; cdn: string };
    meta: Record<string, unknown>;
    tags: string[];
    info: { img_w?: number; img_h?: number };
    created_at: string;
    modified_at: string;
  };
  msg?: string;
  hint?: string;
}

// --- Queue config (spec §5.4) ---

export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffFactor: number;
}

export interface QueueConfig {
  concurrency: number;
  autoProceed: boolean;
  retryConfig: RetryConfig;
}

// --- Restrictions (spec §5.5) ---

export interface UploadRestrictions {
  maxFileSize: number | null;
  maxTotalFilesSize: number | null;
  maxNumberOfFiles: number | null;
  minNumberOfFiles: number | null;
  allowedFileTypes: string[] | null;
  blockedFileTypes: string[] | null;
}

// --- Root state ---

export interface UploaderState {
  // File collection — Map for O(1) lookups, ordered by insertion
  files: Map<string, UploadFile>;

  // Queue
  queueConfig: QueueConfig;
  isPaused: boolean;

  // Restrictions
  restrictions: UploadRestrictions;

  // Target folder
  targetFolder: string;

  // Aggregate progress
  totalProgress: number;     // 0–100
  totalSpeed: number;        // bytes/sec
  totalBytesUploaded: number;
  totalBytes: number;

  // UI state
  isUploading: boolean;
}
