import{h as r,c as e,d as t}from"./doc-utils-XkOyWBCy.js";const s={render(){return`
      <div class="doc-content">
        <h1>Types</h1>
        <p class="doc-lead">All types are exported from the main entry point.</p>

        ${e("typescript",`import type {
  UploaderConfig,
  UploaderCallbacks,
  AuthConfig,
  SecurityTemplateAuth,
  SassKeyAuth,
  SessionAuth,
  UploadFile,
  FileStatus,
  UploadRestrictions,
  UploadResponse,
  ConnectorConfig,
  ProviderId,
  RemoteFileInfo,
} from '@scaleflex/uploader';`)}

        <h2>UploadFile</h2>
        <p>Represents a file in the upload queue:</p>
        ${e("typescript",`interface UploadFile {
  id: string;                    // Unique file ID
  name: string;                  // Display name
  size: number;                  // Size in bytes
  type: string;                  // MIME type
  status: FileStatus;            // See lifecycle below
  progress: number;              // 0–100
  speed: number;                 // Bytes per second
  bytesUploaded: number;         // Bytes transferred so far
  error: string | null;          // Error message if failed
  file: File | null;             // Original File object (local uploads)
  remoteUrl: string | null;      // Remote URL (URL imports, connectors)
  response: UploadResponse | null; // Server response on success
  previewUrl: string | null;     // Local preview URL (object URL)
  retryCount: number;            // Number of retry attempts
  addedAt: number;               // Timestamp when added
  meta: Record<string, unknown>; // Per-file metadata
  tags: string[];                // Per-file tags
  remoteInfo: RemoteFileInfo | null; // Connector metadata
}`)}

        <h2>UploadResponse</h2>
        <p>The response returned by the Scaleflex API after a successful upload:</p>
        ${e("typescript",`interface UploadResponse {
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
}`)}

        <h2>RemoteFileInfo</h2>
        <p>Metadata for files imported from cloud connectors via Companion:</p>
        ${e("typescript",`interface RemoteFileInfo {
  companionUrl: string;
  provider: ProviderId;
  token: string;
  requestPath: string;
  fileId: string;
  name: string;
  mimeType: string;
  size: number;
  thumbnail: string | null;
}`)}

        <h2>File lifecycle</h2>
        <p>Each file progresses through these statuses:</p>
        ${e("text",`idle → validating → queued → preparing → uploading → processing → complete
                                                     ↘ error → retrying → uploading
                                                     ↘ cancelled
         validating → rejected (restrictions failed)
                    → failed (max retries exceeded)`)}
        <ul>
          <li><strong>idle</strong> — initial state when file is created</li>
          <li><strong>validating</strong> — checking restrictions</li>
          <li><strong>queued</strong> — validated, waiting for an upload slot</li>
          <li><strong>preparing</strong> — preparing the upload request</li>
          <li><strong>uploading</strong> — transfer in progress</li>
          <li><strong>processing</strong> — server processing the file</li>
          <li><strong>complete</strong> — successfully uploaded</li>
          <li><strong>error</strong> — upload failed (may be retried)</li>
          <li><strong>retrying</strong> — retry in progress</li>
          <li><strong>failed</strong> — max retries exceeded</li>
          <li><strong>rejected</strong> — file rejected by restriction rules</li>
          <li><strong>cancelled</strong> — user or programmatic cancellation</li>
        </ul>

        ${t({href:"#/docs/theming",label:"Theming"})}
      </div>
    `},init(){r()}};export{s as default};
