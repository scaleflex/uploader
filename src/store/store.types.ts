import type { RemoteFileInfo } from '../connectors/connector.types';
import type { Product } from '../product/product.types';

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

  // True when the backend reported the identical content already exists in the
  // target directory (code `SAME_ASSET_EXISTS_SKIP_UPLOAD`) — treated as a
  // successful upload but surfaced with a neutral "already uploaded" note.
  alreadyExisted?: boolean;

  // Ordering
  addedAt: number;           // Date.now() at insertion — used for queue ordering

  // Per-file metadata for the upload request
  meta: Record<string, unknown>;
  tags: string[];

  // Per-file product fields (admin v5 parity). Sent on upload when the project
  // has `products_enabled`. Always present; empty object when nothing is set.
  product: Product;

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
    /**
     * Filerobot `/v4/files` returns `{ bytes, pretty }` on recent API versions
     * and a plain number on older endpoints / synthesized same-asset responses.
     */
    size: number | { bytes: number; pretty?: string };
    url: { public: string; cdn: string; cdn_permalink?: string; permalink?: string };
    meta: Record<string, unknown>;
    tags: string[];
    info: { img_w?: number; img_h?: number };
    created_at: string;
    modified_at: string;
  };
  msg?: string;
  hint?: string;

  // --- Backend status codes ---
  /** Machine-readable status code (e.g. `SAME_ASSET_EXISTS_SKIP_UPLOAD`). */
  code?: string;
  /** UUID of the pre-existing asset when the same content already exists. */
  existing_file_uuid?: string;
  /** Path of a similar (not necessarily identical) existing file, if any. */
  similar_file_path?: string;
  /** Backend context returned alongside status codes. */
  info?: {
    version?: number;
    uniq_id?: string;
    project_uuid?: string;
    company_uuid?: string;
  };
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

// --- i18n ---

export type TFunction = (
  key: string,
  defaultValueOrOptions?: string | Record<string, unknown>,
  options?: Record<string, unknown>,
) => string

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

  // i18n
  t: TFunction;
}
