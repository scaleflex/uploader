import { LitElement, html, css, nothing, render as litRender } from "lit";
import { initI18n, missingKeysHelper } from "./i18n";
import { property, state } from "lit/decorators.js";
import { cspStyle } from "./utils/csp-style";
import { createStore, Store } from "./store";
import { addFile, removeFile } from "./store/helpers";
import { StoreController } from "./controllers/store.controller";
import {
  UploadEngine,
  type UploadEngineConfig,
  type TusConfig,
} from "./engine";
import type { SfxDropZone } from "./components/drop-zone";
import type {
  UploaderState,
  UploadFile,
  UploadRestrictions,
  UploadResponse,
} from "./store/store.types";
import type { AuthConfig, AuthHeaders } from "./auth/auth.types";
import { resolveAuth, getApiBase, buildAuthHeaders } from "./auth/auth.service";
import { lastUploadStore } from "./store/last-upload-store";
import { PublicEvents, type PublicEventName } from "./events/public-events";
import {
  generateFileId,
  guessMimeType,
  isBrowserUnrenderableImage,
  formatFileSize,
  formatEta,
  generateVideoThumbnail,
  getFileCategory,
  getFileTypeIconUrl,
  getDefaultFileTypeIconUrl,
} from "./utils/file-utils";
import {
  validateFile,
  validateFileInfo,
  buildAcceptString,
} from "./utils/validate";
import type {
  ProviderId,
  ConnectorConfig,
  RemoteFileInfo,
} from "./connectors/connector.types";
import { getProviderSources } from "./connectors/provider-registry";
import { CORE_SOURCES, type SourceDef } from "./components/source-pills";
import type {
  MetadataConfig,
  MetadataSchema,
} from "./metadata/schema/schema.types";
import {
  firstMissingRequiredFieldKey,
  isFieldRequired,
} from "./metadata/schema/required-fields";
import type { SfxToast } from "./components/toast";

/** Providers that use search instead of OAuth file browsing. */
const SEARCH_PROVIDERS = new Set<ProviderId>(["unsplash"]);

// Import component classes so they can be registered
import "./components/drop-zone";
import "./components/import-divider";
import "./components/source-pills";
import "./components/file-list";
import "./components/file-item";
import "./components/success-card";
import "./components/last-upload-review";
import "./components/actions-bar";
import "./components/url-dialog";
import "./components/camera-dialog";
import "./components/screen-cast-dialog";
import "./components/toast";

// --- Config callbacks (spec §13.1) ---

export interface UploaderCallbacks {
  onFileAdded?: (file: UploadFile) => void;
  onFileRemoved?: (file: UploadFile) => void;
  onFileRejected?: (file: UploadFile, reason: string) => void;
  onUploadStarted?: (files: UploadFile[]) => void;
  onUploadProgress?: (
    file: UploadFile,
    progress: number,
    speed: number,
  ) => void;
  onUploadComplete?: (file: UploadFile, response: UploadResponse) => void;
  onUploadError?: (file: UploadFile, error: Error) => void;
  onUploadRetry?: (file: UploadFile, attempt: number) => void;
  onUploadPaused?: (file: UploadFile) => void;
  onUploadResumed?: (file: UploadFile) => void;
  onAllComplete?: (successful: UploadFile[], failed: UploadFile[]) => void;
  onTotalProgress?: (percentage: number, speed: number, eta: number) => void;
  onBeforeUpload?: (files: UploadFile[]) => boolean | void;
  onOpen?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
  onFilePreview?: (file: UploadFile) => void;
  onFillMetadata?: (files: UploadFile[]) => void;
  onCompleteAction?: () => void;
  onFileLocate?: (file: UploadFile) => void;
  onFileCopyCdn?: (file: UploadFile, cdnUrl: string) => void;
}

export interface InlineHeaderConfig {
  /** Small uppercase accent label (e.g. "Airbox"). */
  accent?: string;
  /** Main heading (e.g. "Q1 Marketing Assets"). */
  title?: string;
  /** Description text below the title. */
  description?: string;
}

/**
 * Context passed to {@link UploaderConfig.transformRemoteThumbnail} so the
 * host can decide how to rewrite a third-party thumbnail URL (e.g. proxy it
 * through Filerobot for CSP compliance, append a token, …).
 */
export interface RemoteThumbnailContext {
  /**
   * Where the URL came from:
   * - `'url-import'` — pasted into the "Import from URL" dialog.
   * - `'connector'` — listing/selection result from a Companion provider.
   * - `'cdn-complete'` — post-upload CDN URL from the Filerobot response,
   *   used to replace the file tile's preview after upload finishes. Fires
   *   when the project's `cdn` URL is on a custom CNAME (e.g. a branded
   *   domain) that isn't in the host CSP allowlist; rewrite it to a
   *   Filerobot/Cloudimage proxy URL so the preview renders.
   */
  source: 'url-import' | 'connector' | 'cdn-complete';
  /** Provider id when `source === 'connector'`. */
  providerId?: import('./connectors/connector.types').ProviderId;
}

export interface UploaderConfig {
  auth: AuthConfig;
  targetFolder?: string;
  mode?: "modal" | "inline";
  /** Header displayed above the uploader in inline mode. All fields are optional. */
  inlineHeader?: InlineHeaderConfig;
  /**
   * Controls the standard header bar.
   * - `'close'` — header with X close button (default for modal)
   * - `'back'`  — header with back arrow (wizard / step flows)
   * - `true`    — header visible, no button (default for inline without inlineHeader)
   * - `false`   — no header at all
   */
  header?: boolean | "close" | "back";
  restrictions?: Partial<UploadRestrictions>;
  concurrency?: number;
  autoProceed?: boolean;
  callbacks?: UploaderCallbacks;
  connectors?: ConnectorConfig;
  /** Show "Fill Metadata" button in the actions bar. */
  showFillMetadata?: boolean;
  /** Metadata editing configuration. When provided, enables the built-in metadata form. */
  metadataConfig?: MetadataConfig;
  /** Layout for the import-from sources section: horizontal pills (default) or cards grid. */
  sourcesLayout?: "pills" | "cards";
  /**
   * Override the URL opened by the "Locate" button in the last-upload review
   * screen. Receives the completed file and should return the URL the host
   * wants Locate to open (typically a dashboard / file-manager URL pointing
   * at the file's containing folder). Return `null` / `undefined` to fall
   * back to the file's own public URL (default behaviour).
   *
   * Example:
   * ```ts
   * getLocateUrl: (file) =>
   *   `https://app.scaleflex.com/projects/${PROJECT_ID}/files?id=${file.response?.file?.uuid}`
   * ```
   */
  getLocateUrl?: (file: UploadFile) => string | null | undefined;
  /**
   * Show the "Locate" button on completed file tiles in the review screen.
   * When clicked, fires the `sfx-file-locate` event and the `onFileLocate` callback.
   * Default: false (hidden).
   */
  showLocateButton?: boolean;
  /**
   * Show the "Copy CDN" button on completed file tiles in the review screen.
   * When clicked, copies the CDN URL to the clipboard and fires the
   * `sfx-file-copy-cdn` event and the `onFileCopyCdn` callback.
   * Default: false (hidden).
   */
  showCopyCdnButton?: boolean;
  /**
   * Enable the "last upload review" feature that persists the most recent
   * upload batch to `sessionStorage` so the user can review it after
   * closing and re-opening the uploader within the same browser tab.
   *
   * - `false` (default) — disabled; no data is written to sessionStorage.
   * - `true`  — enabled; the storage key is automatically scoped by the
   *   `auth.container` (and `auth.airboxPuid` when present), so different
   *   airboxes never collide.
   * - `string` — enabled with an explicit ID used as the storage key suffix.
   *   Use this when you have multiple uploaders targeting the **same** airbox
   *   but serving different purposes (e.g. `'product-photos'` vs `'avatars'`).
   *
   * Storage key format: `sfx-uploader:last-upload:{id}`
   *
   * @example
   * // Auto-scoped by container + airboxPuid
   * lastUploadReview: true
   *
   * @example
   * // Explicit ID for same-airbox disambiguation
   * lastUploadReview: 'product-photos'
   */
  lastUploadReview?: boolean | string;
  /** Whether closing the modal clears all files. Default: true. Set to false to preserve files across open/close. */
  clearOnClose?: boolean;
  /** Whether the "Done" action clears all files (inline mode resets, modal mode closes). Default: true. */
  clearOnComplete?: boolean;
  /**
   * Show the "Minimize & continue in background" button during uploads.
   * When clicked, the modal collapses to a floating progress pill in the corner
   * so the user can keep working while uploads finish.
   * Default: false (button hidden).
   */
  minimizeOnUpload?: boolean;
  /**
   * Automatically close the uploader when all uploads complete.
   * - `true`  — closes after a 1.5 s delay so the user briefly sees the success state.
   * - number — custom delay in milliseconds (e.g. `2000` for 2 s).
   * - `false` / omitted — disabled (default).
   *
   * Fires `onCompleteAction` + `onClose` callbacks and the corresponding public
   * events before closing, same as if the user clicked "Done".
   */
  closeOnComplete?: boolean | number;
  /**
   * Auto-remove rejected files after this delay in milliseconds.
   * Set to 0, false, or omit to disable auto-removal.
   */
  rejectedFileAutoRemoveDelay?: number | false;
  /**
   * Enable resumable uploads via the tus protocol for large files.
   * When set, files exceeding `sizeThreshold` (default 10 MB) are uploaded
   * using chunked, resumable tus uploads instead of a single XHR POST.
   * Set to `true` for defaults, or pass a TusConfig object for fine-grained control.
   */
  tusConfig?: TusConfig | boolean;
  /**
   * Force every uploaded file to be saved under this exact name in
   * `targetFolder`, overwriting any existing file with the same name.
   * Use for single-asset slots (watermark, default image, folder icon)
   * where the host always wants one file at a stable path.
   *
   * Translates to `&opt_force_name=<value>` on the upload request and
   * works across every source — local file, URL import, Google Drive,
   * Unsplash, etc. Setting this implicitly clamps
   * `restrictions.maxNumberOfFiles` to `1`, disables multi-select on
   * the file picker, and forces the XHR upload path regardless of file
   * size (tus is bypassed because Companion's tus relay does not
   * propagate `opt_force_name` reliably).
   *
   * Pass a function if the name needs to be derived per-session.
   *
   * @example
   * forceName: `project-${projectUuid}`
   */
  forceName?: string | (() => string);
  /**
   * Append arbitrary query parameters (typically Filerobot `opt_*` flags)
   * to every upload request. Called once per file just before its
   * request is sent and merged into the URL of whichever upload path
   * runs (XHR, URL, or Companion). Return `undefined` for no extras.
   * Returning a non-empty object also forces the XHR path — tus is
   * bypassed since its Companion relay does not propagate `opt_*` flags
   * reliably.
   *
   * If a key collides with one produced by `forceName`, the value
   * returned here wins.
   *
   * @example
   * getUploadParams: (file) => ({
   *   opt_force_name: deriveNameFor(file),
   *   opt_overwrite_meta: 'true',
   * })
   */
  getUploadParams?: (file: UploadFile) => Record<string, string> | undefined;
  /**
   * Rewrite thumbnail URLs before they are rendered as `<img src>`. Use this
   * when the host page enforces a Content-Security-Policy that disallows the
   * URL's origin (e.g. Hub allowing only `*.filerobot.com` and
   * `*.cloudimg.io`). The function receives the original URL and a
   * {@link RemoteThumbnailContext} describing where it came from, and should
   * return a CSP-allowed URL (typically a Filerobot/Cloudimage proxy).
   *
   * Applies to:
   *  - URL imports — pasted URL used as the pre-upload preview
   *    (`source: 'url-import'`).
   *  - Connector listing/selection thumbnails — Google Drive, Unsplash, etc.
   *    (`source: 'connector'`).
   *  - Post-upload preview swap — when the upload response's `cdn` URL is on
   *    a custom CNAME that isn't CSP-allowed (`source: 'cdn-complete'`). The
   *    engine already defaults to `permalink` (`api.filerobot.com/.../v4/get`
   *    — always on `*.filerobot.com`), then falls back to `cdn_permalink` and
   *    `cdn`. This branch usually only fires for hosts whose CSP is even
   *    tighter than that.
   *
   * @example
   * transformRemoteThumbnail: (url) =>
   *   `https://demo.cloudimg.io/v7/${encodeURIComponent(url)}?w=200`
   */
  transformRemoteThumbnail?: (url: string, ctx: RemoteThumbnailContext) => string;
  /**
   * BCP 47 locale tag for the UI language (e.g. `'fr'`, `'de'`, `'en-US'`).
   * Defaults to `navigator.language`. Translations are loaded lazily from the
   * Wordplex CDN; English defaults are shown for any untranslated keys.
   */
  locale?: string;
}

/** Default tus-related fields for new UploadFile objects. */
const TUS_DEFAULTS = { isTus: false, tusUploadUrl: null } as const;

type UploaderPhase = "empty" | "ready" | "uploading" | "complete";

export class SfxUploader extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: inherit;
      font-family: var(
        --sfx-up-font,
        "Inter",
        system-ui,
        -apple-system,
        sans-serif
      );
      color: var(--sfx-up-text, #1e293b);
      /* Bridge to Scaleflex design system with standalone fallbacks */
      --sfx-up-primary: var(--primary, #2563eb);
      --sfx-up-primary-hover: var(--primary-hover, #1d4ed8);
      --sfx-up-primary-mid: var(--primary-mid, #3b82f6);
      --sfx-up-primary-bg: var(--accent, #eff6ff);
      --sfx-up-primary-glow: rgba(37, 99, 235, 0.18);
      --sfx-up-success: var(--success, #16a34a);
      --sfx-up-error: var(--destructive, #dc2626);
      --sfx-up-text: var(--foreground, #1e293b);
      --sfx-up-text-secondary: var(--secondary-foreground, #475569);
      --sfx-up-text-muted: var(--muted-foreground, #94a3b8);
      --sfx-up-border: var(--border, #e8edf5);
      --sfx-up-border-light: var(--muted, #f1f5f9);
      --sfx-up-bg: var(--background, #ffffff);
      --sfx-up-radius: 16px;
      --sfx-up-font: "Inter", system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
      /* Fullscreen overlay z-index stack — single source of truth so
         mobile overrides don't drift out of sync with base values. */
      --sfx-fs-z: 10000;
      --sfx-fs-controls-z: 10001;
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      overflow: hidden;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 1100px;
      height: var(--sfx-up-max-height, 88vh);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      animation: modalIn 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
    }

    /* --- Header --- */
    .header {
      display: flex;
      align-items: center;
      padding: 16px 24px;
      background: var(--sfx-up-bg, #fff);
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }

    .header-icon-done {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .header-icon svg {
      width: 16px;
      height: 16px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      flex: 1;
    }

    .header-btn {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        background 0.15s,
        color 0.15s;
      flex-shrink: 0;
    }

    .header-btn svg {
      width: 16px;
      height: 16px;
    }

    .header-btn:hover {
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .header-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .header-btn-back {
      margin-right: 12px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      width: 32px;
      height: 32px;
      position: relative;
    }

    .header-btn-back:hover {
      background: #dbeafe;
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .header-btn-back::after {
      content: "Back to Asset Picker";
      position: absolute;
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: var(--sfx-up-text, #1e293b);
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
      padding: 6px 12px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      z-index: 10;
    }

    .header-btn-back:hover::after {
      opacity: 1;
    }

    .header-btn-close {
      margin-left: auto;
    }

    /* --- Responsive header buttons --- */
    @media (max-width: 768px) {
      .header-btn {
        width: 28px;
        height: 28px;
      }
      .header-btn svg {
        width: 14px;
        height: 14px;
      }
    }
    @media (max-width: 480px) {
      .header-btn {
        width: 26px;
        height: 26px;
      }
    }

    /* --- Content wrapper (holds body + actions bar) --- */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    /* --- Body --- */
    .body {
      flex: 1;
      overflow: hidden;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      gap: 4px;
      min-height: 0;
      min-width: 0;
      background: var(--sfx-up-bg, #fff);
      position: relative;
    }

    .file-grid-side {
      min-width: 0;
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-radius: 8px;
      position: relative;
    }

    .body.body-drag-over::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    /* In preview mode, keep body blue but mask the preview side white */
    .body.body-drag-over.has-preview::after {
      display: none;
    }

    .body.body-drag-over .file-grid-side {
      position: relative;
    }

    .body.body-drag-over .file-grid-side::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    .body.body-drag-over .file-grid-header {
      background: transparent;
    }

    .body.body-drag-over .preview-divider,
    .body.body-drag-over .preview-panel {
      background: var(--sfx-up-bg, #fff);
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      padding: 0 0 0 8px;
      animation: bodyReveal 0.35s ease both;
    }

    .body.has-files.has-preview {
      padding-right: 0;
    }

    @keyframes bodyReveal {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
    }

    /* "View last upload" pill — shown on the drop-zone screen when
       sessionStorage contains a previous batch */
    .last-upload-pill {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
    .last-upload-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }
    .last-upload-pill:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .last-upload-pill svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .asset-count {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    /* --- Inline mode --- */
    .inline {
      --sfx-inline-pad: 24px;
      border: none;
      border-radius: 0;
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      height: 100%;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: none;
      animation: inlineIn 0.25s ease;
    }

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 24px;
    }
    .inline-header-top {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .inline-header-accent {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .inline-header-accent .accent-line {
      width: 32px;
      height: 3px;
      border-radius: 2px;
      background: var(--sfx-up-primary);
    }
    .inline-header-accent span {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: var(--sfx-up-primary);
    }
    .inline-header-title {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: var(--sfx-up-text, #111827);
      letter-spacing: -0.4px;
      max-width: 770px;
    }
    .inline-header-desc {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #6b7280);
      line-height: 1.5;
      max-width: 770px;
    }

    .inline .content {
      max-width: var(--sfx-up-content-max-width, 1600px);
      align-self: center;
      width: 100%;
    }

    /* When the preview sidebar is open, let the layout use the full
       browser width so the panel sits flush against the right edge. */
    .inline .content:has(.has-preview) {
      max-width: none;
    }

    .inline.no-files .content {
      flex: 1;
      min-height: 0;
    }

    /* Inline: body fits within the remaining space after the header;
       padding: 0 in both states so the header never jumps;
       children use --sfx-inline-pad for horizontal spacing. */
    .inline .body {
      flex: 1;
      overflow: hidden;
      padding: 0;
      min-height: 0;
    }
    .inline .body.has-files {
      flex: 1;
      overflow: hidden;
    }
    .inline .asset-count {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .file-grid-header {
      padding: 16px var(--sfx-inline-pad);
    }
    .inline .body > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
      --sfx-grid-pad-r: var(--sfx-inline-pad);
    }
    .inline .file-grid-side > sfx-file-list {
      --sfx-grid-pad-l: var(--sfx-inline-pad);
    }

    /* --- Preview split layout --- */
    .preview-layout {
      display: flex;
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    .preview-layout .file-grid-side {
      flex: 68;
      min-width: 0;
      min-height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      --sfx-up-grid-min: 170px;
    }

    .preview-layout .file-grid-side::after {
      display: none;
    }

    .preview-layout sfx-file-list {
      padding-right: 6px;
      --sfx-scrollbar-w: 14px;
      --sfx-scrollbar-inset-left: 2px;
      --sfx-scrollbar-inset-right: 6px;
    }

    /* NOTE: scrollbar border-radius is hardcoded to 6px in sfx-file-list */

    .file-grid-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 16px;
      min-height: 61px;
      box-sizing: border-box;
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 2;
      background: var(--sfx-up-bg, #fff);
    }

    .file-grid-header-text {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #64748b);
    }

    .preview-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 0;
    }

    .preview-divider {
      width: 9px;
      flex-shrink: 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-divider::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 4px;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: "";
      width: 3px;
      height: 28px;
      border-radius: 2px;
      background: var(--sfx-up-border, #d0d7e2);
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 1;
    }

    .preview-divider:hover::after,
    .preview-layout.resizing .preview-divider::after {
      opacity: 1;
    }

    .preview-layout.resizing {
      cursor: col-resize;
      user-select: none;
      -webkit-user-select: none;
    }

    .preview-layout.resizing * {
      pointer-events: none;
    }

    .preview-layout.resizing .preview-divider {
      pointer-events: auto;
    }

    .preview-panel {
      flex: 32;
      min-width: 0;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
    }

    .preview-panel::-webkit-scrollbar {
      width: 12px;
    }
    .preview-panel::-webkit-scrollbar-track {
      background: transparent;
    }
    .preview-panel::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
      background-clip: padding-box;
      border: 3px solid transparent;
      border-radius: 6px;
    }
    .preview-panel::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
      background-clip: padding-box;
    }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 24px 16px 12px;
      flex-shrink: 0;
      box-sizing: border-box;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    /* Mobile back-arrow — hidden by default, shown at <=768px to give
       a clear "return to file list" affordance on small screens.
       Use !important because .preview-panel-header button below has
       higher specificity and would otherwise force display: flex. */
    .preview-panel-header button.preview-back-btn {
      display: none;
    }
    @media (max-width: 768px) {
      .preview-panel-header button.preview-back-btn {
        display: inline-flex;
      }
    }

    .preview-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .preview-header-name {
      flex: 1;
      min-width: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      font-family: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .preview-panel-header button {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition:
        background 0.15s,
        color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f3f4f6);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    .preview-doc-wrap {
      position: relative;
      height: 332px;
      width: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-doc-wrap.pdf {
      background: linear-gradient(135deg, #fef2f2, #fee2e2);
    }
    .preview-doc-wrap.doc {
      background: linear-gradient(135deg, #eff6ff, #dbeafe);
    }
    .preview-doc-wrap.vid {
      background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    }
    .preview-doc-wrap.audio {
      background: linear-gradient(135deg, #fdf4ff, #fae8ff);
    }
    .preview-doc-wrap.sheet {
      background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    }
    .preview-doc-wrap.slide {
      background: linear-gradient(135deg, #fff7ed, #ffedd5);
    }
    .preview-doc-wrap.zip {
      background: linear-gradient(135deg, #fffbeb, #fef3c7);
    }
    .preview-doc-wrap.code {
      background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    .preview-doc-wrap.markup {
      background: linear-gradient(135deg, #f0fdfa, #ccfbf1);
    }
    .preview-doc-wrap.font {
      background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    }
    .preview-doc-wrap.design {
      background: linear-gradient(135deg, #fdf2f8, #fce7f3);
    }
    .preview-doc-wrap.binary {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }
    .preview-doc-wrap.data {
      background: linear-gradient(135deg, #ecfdf5, #d1fae5);
    }
    .preview-doc-wrap.gen {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    }

    .preview-doc-type-img {
      max-width: 120px;
      max-height: 120px;
      object-fit: contain;
    }

    .preview-img-wrap {
      position: relative;
      width: 420px;
      height: 332px;
      max-width: 100%;
      flex-shrink: 0;
      align-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--sfx-up-checker-bg);
      background-image: linear-gradient(
          45deg,
          var(--sfx-up-checker-tile) 25%,
          transparent 25%
        ),
        linear-gradient(-45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile) 75%);
      background-size: 16px 16px;
      background-position:
        0 0,
        0 8px,
        8px -8px,
        -8px 0;
    }

    .preview-image {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border: none;
    }

    .preview-media-area {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: #fff;
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.08),
        0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
      color: var(--sfx-up-text, #374151);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 20px;
      height: 20px;
    }

    .preview-nav.prev {
      left: 10px;
    }
    .preview-nav.next {
      right: 10px;
    }

    .preview-nav:disabled {
      opacity: 0.35;
      cursor: default;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-nav:disabled:hover {
      transform: translateY(-50%);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .preview-meta-list {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      padding: 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .preview-metadata {
      padding: 0 0 16px;
    }

    .preview-file-info {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- File info table (no-metadata fallback) --- */
    .preview-file-info-panel {
      padding: 0 16px;
    }

    .preview-file-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
    }

    .preview-file-info-header svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.2s ease;
    }

    .preview-file-info-header.open svg {
      transform: rotate(180deg);
    }

    .preview-file-info-body {
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.25s ease;
    }

    .preview-file-info-body.open {
      max-height: 300px;
    }

    .preview-file-info-row {
      display: flex;
      align-items: baseline;
      padding: 10px 0;
    }

    .preview-file-info-key {
      width: 110px;
      flex-shrink: 0;
      font-size: 13px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-file-info-val {
      flex: 1;
      min-width: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* --- Upload overlay (in-modal) --- */
    .upload-overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      gap: 8px;
      padding: 32px 24px;
      position: relative;
      animation: fadeUp 0.3s ease both;
    }

    .upload-overlay-spinner {
      width: 48px;
      height: 48px;
      border: 3px solid var(--sfx-up-border, #e2e8f0);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-bottom: 8px;
    }

    .upload-overlay-percent {
      font-size: 40px;
      font-weight: 700;
      color: var(--sfx-up-primary, #2563eb);
      line-height: 1;
    }

    .upload-overlay-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-subtitle {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
    }

    .upload-overlay-bar {
      width: 240px;
      height: 6px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 16px;
    }

    .upload-overlay-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    .upload-overlay-minimize {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-minimize:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .upload-overlay-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .upload-overlay-cancel {
      padding: 8px 20px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .upload-overlay-cancel:hover {
      border-color: var(--sfx-up-error, #dc2626);
      color: var(--sfx-up-error, #dc2626);
    }

    .upload-header {
      justify-content: space-between;
    }

    .upload-header .float-actions button {
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .upload-header .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .upload-header .float-actions button svg {
      width: 16px;
      height: 16px;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Floating upload card (Variant 3 style) --- */
    .upload-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      width: 470px;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.12),
        0 2px 8px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      font-family: inherit;
      animation: floatSlideIn 0.3s ease both;
    }

    .float-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-header-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .float-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-icon svg {
      width: 14px;
      height: 14px;
    }

    .float-icon.done {
      background: #f0fdf4;
      color: #22c55e;
    }

    .float-icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .float-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
    }

    .float-subtitle {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-actions {
      display: flex;
      gap: 4px;
    }

    .float-actions button {
      width: 26px;
      height: 26px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: background 0.15s;
      padding: 0;
    }

    .float-actions button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .float-actions button svg {
      width: 14px;
      height: 14px;
    }

    .float-progress {
      padding: 10px 14px;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .float-progress-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .float-progress-label {
      font-size: 12px;
      color: var(--sfx-up-text-secondary, #475569);
    }

    .float-progress-pct {
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-primary, #2563eb);
    }

    .float-progress-pct.done {
      color: #22c55e;
    }
    .float-progress-pct.warn {
      color: #f59e0b;
    }
    .float-progress-pct.error {
      color: #ef4444;
    }

    .float-bar {
      height: 4px;
      background: var(--sfx-up-border, #e8edf5);
      border-radius: 2px;
      overflow: hidden;
    }

    .float-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .float-bar-fill.done {
      background: #22c55e;
    }
    .float-bar-fill.warn {
      background: #f59e0b;
    }
    .float-bar-fill.error {
      background: #ef4444;
    }

    .float-items {
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
    }

    .float-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px;
      border-bottom: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .float-item:last-child {
      border-bottom: none;
    }

    .float-item-thumb {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      flex-shrink: 0;
    }

    .float-item-thumb svg {
      width: 16px;
      height: 16px;
    }

    .float-item-info {
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }

    .float-item-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .float-item-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .float-item-done {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #f0fdf4;
      color: #22c55e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .float-item-done svg {
      width: 12px;
      height: 12px;
    }

    .float-item-spinner {
      width: 16px;
      height: 16px;
      border: 2px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    .float-item-error-wrap {
      position: relative;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .float-item-error-icon {
      width: 16px;
      height: 16px;
      color: #ef4444;
      flex-shrink: 0;
      cursor: pointer;
    }

    .float-item-tooltip {
      display: none;
      position: absolute;
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      color: #1e293b;
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 10;
      box-shadow:
        0 2px 12px rgba(0, 0, 0, 0.12),
        0 1px 4px rgba(0, 0, 0, 0.08);
    }

    .float-item-error-wrap:hover .float-item-tooltip {
      display: block;
    }

    .float-item-status {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .float-item-retry {
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      padding: 4px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
    }

    .float-item-retry svg {
      width: 16px;
      height: 16px;
    }

    .float-item-retry:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    @keyframes floatSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow:
        0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)),
        0 4px 16px oklch(0 0 0 / 0.06);
      width: 100%;
      max-width: 520px;
      height: 75vh;
      max-height: 640px;
      min-height: 400px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: modalIn 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes modalIn {
      from {
        opacity: 0;
        transform: scale(0.92) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes inlineIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: var(--sfx-fs-z);
      background: rgba(0, 0, 0, 0.92);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.2s ease;
      cursor: zoom-in;
    }

    .fs-overlay.zoomed {
      cursor: grab;
      overflow: hidden;
    }

    .fs-overlay.zoomed.panning {
      cursor: grabbing;
    }

    .fs-overlay.zoomed .fs-img {
      max-width: none;
      max-height: none;
      width: auto;
      height: auto;
    }

    .fs-img {
      max-width: 92vw;
      max-height: 88vh;
      object-fit: contain;
      border-radius: 4px;
      user-select: none;
      -webkit-user-drag: none;
      transition: transform 0.25s ease;
    }

    .fs-overlay.panning .fs-img {
      transition: none;
    }

    .fs-toolbar {
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      gap: 8px;
      z-index: var(--sfx-fs-controls-z);
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s;
    }

    .fs-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .fs-btn svg {
      width: 20px;
      height: 20px;
    }

    .fs-nav {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--sfx-fs-controls-z);
      transition: background 0.15s;
      padding: 0;
    }

    .fs-nav:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    .fs-nav:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .fs-nav:disabled:hover {
      background: rgba(255, 255, 255, 0.15);
    }
    .fs-nav svg {
      width: 22px;
      height: 22px;
    }
    .fs-nav.prev {
      left: 20px;
    }
    .fs-nav.next {
      right: 20px;
    }

    .fs-filename {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.4);
      padding: 6px 16px;
      border-radius: 8px;
      white-space: nowrap;
      z-index: 10001;
    }

    .preview-nav:focus-visible,
    .fs-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .modal-backdrop {
        animation: none;
      }
      .modal-card {
        animation: none;
      }
      .inline {
        animation: none;
      }
      .fs-overlay {
        animation: none;
      }
      .body.has-files {
        animation: none;
      }
    }

    /* --- Responsive: Tablet & Mobile (≤ 768px) ---
       Take modal-card OUT of backdrop's flex centering and pin it
       directly to viewport. This bypasses any min-width:auto issues
       in the flex layout that were leaving content overflowing. */
    @media (max-width: 768px) {
      .modal-backdrop {
        padding: 0;
        display: block;
      }
      .modal-card {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-width: 0;
        min-height: 0;
        border-radius: 0;
        overflow: hidden;
      }
      .inline {
        max-width: 100%;
        min-width: 0;
      }
      .connector-modal-backdrop {
        padding: 0;
        display: block;
      }
      .connector-modal {
        position: fixed;
        inset: 0;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        max-height: 100vh;
        min-height: 0;
        border-radius: 0;
      }
      .header {
        padding: 12px 16px;
      }
      .header-icon {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
      .header-icon svg {
        width: 14px;
        height: 14px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 16px;
      }
      .body.has-files {
        padding: 0 0 12px;
      }
      .body > sfx-file-list,
      .file-grid-side > sfx-file-list {
        --sfx-grid-pad-l: 12px;
        --sfx-grid-pad-r: 12px;
      }

      /* Mobile preview = fullscreen takeover. When a file is selected
         the file grid + divider get hidden and preview-panel fills the
         whole modal. Tapping close (X) in preview-header returns to
         the grid. */
      .preview-layout {
        flex-direction: column;
      }
      .preview-layout .file-grid-side,
      .preview-layout .preview-divider {
        display: none !important;
      }
      .preview-layout .preview-panel {
        flex: 1 1 100% !important;
        width: 100%;
        max-width: 100%;
        min-width: 0;
        padding: 0;
      }

      .preview-topbar {
        padding: 8px 0;
      }

      .inline {
        --sfx-inline-pad: 16px;
        min-height: auto;
      }

      /* Bump fullscreen z-index stack on mobile: modal-card is now
         position:fixed which creates a new stacking context, so the
         overlay + controls must sit above it. */
      :host {
        --sfx-fs-z: 100000;
        --sfx-fs-controls-z: 100001;
      }

      /* Force fs-overlay to viewport-fill on mobile. Without these the
         shadow-DOM stacking + sibling modal-card was clipping it. */
      .fs-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
      }
      .fs-img {
        max-width: 92vw;
        max-height: 80vh;
      }
      /* Brighter, larger, tappable nav arrows + close toolbar on mobile.
         Default styling is too subtle (12% white) and gets lost over the
         dark overlay. */
      .fs-toolbar {
        top: 16px;
      }
      .fs-btn {
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-btn svg {
        width: 22px;
        height: 22px;
      }
      .fs-nav {
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.4);
      }
      .fs-nav:disabled {
        opacity: 0.18;
        pointer-events: none;
      }
      .fs-nav svg {
        width: 24px;
        height: 24px;
      }
      .fs-nav.prev {
        left: 12px;
      }
      .fs-nav.next {
        right: 12px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) — tighter spacing on top of
       the fullscreen rules already applied at ≤768. */
    @media (max-width: 480px) {
      .header {
        padding: 10px 14px;
      }
      .header-icon {
        width: 26px;
        height: 26px;
        margin-right: 8px;
      }
      .header-title {
        font-size: 14px;
      }
      .body {
        padding: 12px;
      }
      .body.has-files {
        padding: 0 0 8px;
      }

      .inline {
        --sfx-inline-pad: 12px;
        box-shadow: none;
      }
      .inline-header-title {
        font-size: 18px;
      }
    }

    /* --- Responsive: Landscape / short viewports (Nest Hub 1024×600,
       iPad mini landscape, laptops with address bar visible etc) ---
       Modal min-height 660 exceeds viewport; drop the min and expand the
       max so content gets every pixel available. Trim header/body padding
       so the available space is actually usable. */
    @media (max-height: 700px) {
      .modal-card {
        height: 96vh;
        max-height: 96vh;
      }
      .inline {
        min-height: auto;
      }
      .header {
        padding: 10px 20px;
      }
      .body {
        padding: 16px 20px;
      }
      /* Let the preview image scale down instead of forcing a
         340×240 crop — on a 1920×600 kiosk that hardcoded size
         looked tiny; relying on max-width/max-height lets the wrap
         fill whatever vertical space the layout gives it. */
      .preview-img-wrap {
        width: auto;
        height: auto;
        max-width: min(420px, 60vw);
        max-height: min(280px, 55vh);
      }
    }
  `;

  @property({ attribute: false }) config: UploaderConfig | null = null;

  @state() private _isOpen = false;
  @state() private _activeConnector: ProviderId | null = null;
  @state() private _showUrlDialog = false;
  @state() private _showCameraDialog = false;
  @state() private _showScreenCastDialog = false;
  @state() private _previewFileId: string | null = null;
  @state() private _previewDims: string = "—";
  @state() private _fileInfoOpen: boolean = true;
  @state() private _splitPct = 58; // file-grid-side percentage
  private _isResizing = false;
  private _splitRafId = 0;
  /** Has the default split (3/8 panel) been applied for the current preview session? */
  private _previewDefaultApplied = false;
  @state() private _fullscreenPreviewUrl: string | null = null;
  @state() private _fullscreenVideoFile: File | null = null;
  @state() private _fsZoom = 1;
  private static readonly _FS_ZOOM_LEVELS = [1, 2, 3, 4] as const;
  private _fsPanX = 0;
  private _fsPanY = 0;
  private _fsDragging = false;
  private _fsDragStartX = 0;
  private _fsDragStartY = 0;
  private _fsPanStartX = 0;
  private _fsPanStartY = 0;
  @state() private _bodyDragOver = false;
  @state() private _isMinimized = false;
  @state() private _isPillExpanded = false;
  @state() private _metadataSchema: MetadataSchema | null = null;
  @state() private _bulkMetadataOpen = false;
  /** When non-null, the bulk modal opens with this field active. */
  @state() private _bulkMetadataInitialFieldKey: string | null = null;
  /** True when the user has clicked "Review files" on the success-card or
   *  the "View last upload" pill on the drop-zone screen. Renders the
   *  read-only last-upload-review screen instead of the normal phase view. */
  @state() private _isReviewing = false;
  /** Files loaded from sessionStorage for the review screen. */
  @state() private _reviewFiles: UploadFile[] = [];
  /** Resolved storage key suffix for the last-upload review feature, or
   *  `null` when the feature is disabled (`lastUploadReview` is falsy). */
  private get _lastUploadId(): string | null {
    const opt = this.config?.lastUploadReview;
    if (!opt) return null;
    if (typeof opt === 'string') return opt;
    // Auto-derive from auth config
    const auth = this.config?.auth;
    if (!auth) return null;
    return auth.airboxPuid
      ? `${auth.container}:${auth.airboxPuid}`
      : auth.container;
  }

  /** Whether sessionStorage has a stored last-upload batch. Checked on
   *  connectedCallback and updated when batches are saved/cleared. */
  @state() private _hasStoredReview = false;
  private _metadataAutocomplete: any = null;
  private _videoBlobUrls = new Map<File, string>();

  /** Persisted ETA — holds the last computed value so the display doesn't flicker when speed momentarily drops to 0. */
  private _lastEta = 0;

  private _store!: Store<UploaderState>;
  private _storeCtrl!: StoreController;
  private _engine: UploadEngine | null = null;
  private _cachedSources: SourceDef[] = CORE_SOURCES;
  private _cachedSourcesConfig: ConnectorConfig | undefined = undefined;

  // Timers for auto-removing rejected files (cleared on disconnect)
  private _rejectedTimers = new Map<string, ReturnType<typeof setTimeout>>();

  // Timer for closeOnComplete auto-close
  private _closeOnCompleteTimer: ReturnType<typeof setTimeout> | null = null;

  // Resolved auth state
  private _apiBase: string | null = null;
  private _authHeaders: AuthHeaders | null = null;
  private _authResolveId = 0; // monotonic counter to discard stale exchanges
  private _prevStoreState: UploaderState | null = null;
  private _unsubStoreEvents: (() => void) | null = null;

  constructor() {
    super();
    this._store = createStore();
    this._storeCtrl = new StoreController(this, this._store);
  }

  // --- Public API ---

  /** Open the uploader (modal mode). */
  open() {
    if (this._isMinimized) {
      this._isMinimized = false;
      this._isPillExpanded = false;
    }
    if (this._isOpen) return;
    this._isOpen = true;
    this.config?.callbacks?.onOpen?.();
    this._dispatchPublic(PublicEvents.OPEN, {});
    this.requestUpdate();
  }

  /** Close the uploader (modal mode). Optionally clears all files (controlled by clearOnClose config). */
  close() {
    if (!this._isOpen) return;
    this._isOpen = false;
    // Cancel any pending closeOnComplete timer so it doesn't fire after manual close
    if (this._closeOnCompleteTimer) {
      clearTimeout(this._closeOnCompleteTimer);
      this._closeOnCompleteTimer = null;
    }
    if (this.config?.clearOnClose !== false) {
      this._onClearAll();
    }
    this._previewFileId = null;
    this.config?.callbacks?.onClose?.();
    this._dispatchPublic(PublicEvents.CLOSE, {});
    this.requestUpdate();
  }

  /** Start uploading all queued files. */
  upload() {
    this._ensureEngine();
    if (!this._engine) {
      console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");
      return;
    }

    const files = [...this._store.getState().files.values()].filter(
      (f) => f.status === "idle" || f.status === "queued",
    );

    // Fire onBeforeUpload callback — returning false cancels
    if (this.config?.callbacks?.onBeforeUpload) {
      const result = this.config.callbacks.onBeforeUpload(files);
      if (result === false) return;
    }

    // Fire cancelable sfx-before-upload event
    const beforeEvent = new CustomEvent(PublicEvents.BEFORE_UPLOAD, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { files },
    });
    const allowed = this.dispatchEvent(beforeEvent);
    if (!allowed) return; // preventDefault() was called

    this._dispatchPublic(PublicEvents.UPLOAD_STARTED, { files });
    this.config?.callbacks?.onUploadStarted?.(files);

    this._engine.uploadAll();

    if (this.config?.minimizeOnUpload && this.config?.mode !== "inline") {
      this._isMinimized = true;
      this._isPillExpanded = true;
      this.requestUpdate();
    }
  }

  /** Programmatically add files. */
  addFiles(files: File[]) {
    this._processIncomingFiles(files);
  }

  /** Resume a paused upload (spec §13.2). */
  resumeUpload(files?: UploadFile[]) {
    // If enriched files provided, batch-update them in the store
    if (files && files.length > 0) {
      const current = this._store.getState().files;
      const next = new Map(current);
      let changed = false;
      for (const f of files) {
        const existing = current.get(f.id);
        if (existing) {
          next.set(f.id, { ...existing, ...f });
          changed = true;
        }
      }
      if (changed) this._store.setState({ files: next });
    }
    this._ensureEngine();
    this._engine?.uploadAll();
  }

  /** Cancel a paused upload (spec §13.2). */
  cancelUpload() {
    this._engine?.cancelAll();
  }

  /** Pause a specific file's tus upload. Only works for files using resumable upload. */
  pauseFile(fileId: string) {
    this._engine?.pauseFile(fileId);
  }

  /** Resume a specific paused tus upload. */
  resumeFile(fileId: string) {
    this._engine?.resumeFile(fileId);
  }

  /** Get a snapshot of all current files. */
  getFiles(): UploadFile[] {
    return [...this._store.getState().files.values()];
  }

  /** Get a single file by ID. */
  getFile(fileId: string): UploadFile | undefined {
    return this._store.getState().files.get(fileId);
  }

  /** Statuses where meta/tags can still be modified before upload. */
  private static readonly _MODIFIABLE_STATUSES = new Set([
    "idle",
    "queued",
    "rejected",
  ]);

  /** Update metadata and/or tags for a single file. */
  updateFileMeta(
    fileId: string,
    meta?: Record<string, unknown>,
    tags?: string[],
  ): void {
    const current = this._store.getState().files;
    const existing = current.get(fileId);
    if (!existing || !SfxUploader._MODIFIABLE_STATUSES.has(existing.status))
      return;

    const next = new Map(current);
    next.set(fileId, {
      ...existing,
      meta: meta != null ? { ...existing.meta, ...meta } : existing.meta,
      tags: tags != null ? tags : existing.tags,
    });
    this._store.setState({ files: next });
  }

  /** Batch-update metadata and/or tags for multiple files. */
  updateFilesMeta(
    updates: Array<{
      fileId: string;
      meta?: Record<string, unknown>;
      tags?: string[];
    }>,
  ): void {
    const current = this._store.getState().files;
    const next = new Map(current);
    let changed = false;

    for (const { fileId, meta, tags } of updates) {
      const existing = current.get(fileId);
      if (!existing || !SfxUploader._MODIFIABLE_STATUSES.has(existing.status))
        continue;
      next.set(fileId, {
        ...existing,
        meta: meta != null ? { ...existing.meta, ...meta } : existing.meta,
        tags: tags != null ? tags : existing.tags,
      });
      changed = true;
    }

    if (changed) this._store.setState({ files: next });
  }

  // --- Lifecycle ---

  updated(changed: Map<string, unknown>) {
    if (changed.has("config") && this.config) {
      this._applyConfig(this.config);
    }

    // Resolve image dimensions when preview file changes
    if (changed.has("_previewFileId") && this._previewFileId) {
      const targetId = this._previewFileId;
      const file = this._store.getState().files.get(targetId);
      if (file) {
        this._getImageDimensions(file).then((dims) => {
          if (this._previewFileId !== targetId) return; // stale
          this._previewDims = dims ? `${dims.w} × ${dims.h}` : "—";
        });
      } else {
        this._previewDims = "—";
      }
    }
    this._applyDefaultPreviewWidth();
    // Render floating card portal in document.body
    this._updateFloatingPortal();
  }

  /**
   * The preview panel opens at 3/8 (~37.5%) of the modal width by default,
   * giving the grid 5/8. On first appearance of the preview layout we set
   * _splitPct once; after that the user's own divider drag wins until the
   * preview layout is dismissed.
   */
  private _applyDefaultPreviewWidth() {
    const layout =
      this.shadowRoot?.querySelector<HTMLElement>(".preview-layout");
    if (!layout) {
      this._previewDefaultApplied = false;
      return;
    }
    if (this._previewDefaultApplied) return;
    const width = layout.getBoundingClientRect().width;
    if (width <= 0) return;
    // Preview panel takes 3/8 (~37.5%) of the modal by default → grid gets 5/8.
    this._splitPct = 62.5;
    this._previewDefaultApplied = true;
  }

  private _injectFloatStyles() {
    if (document.querySelector("style[data-sfx-upload-float-styles]")) return;
    const style = document.createElement("style");
    style.setAttribute("data-sfx-upload-float-styles", "");
    style.textContent = `
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:24px; right:24px; z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-title { font-size:13px; font-weight:600; color:#1e293b; }
      [data-sfx-upload-float] .float-subtitle { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-actions button:hover { background:#f8fafc; color:#374151; }
      [data-sfx-upload-float] .float-actions button svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-progress { padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-progress-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
      [data-sfx-upload-float] .float-progress-label { font-size:12px; color:#475569; }
      [data-sfx-upload-float] .float-progress-pct { font-size:12px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-progress-pct.done { color:#22c55e; }
      [data-sfx-upload-float] .float-progress-pct.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-progress-pct.error { color:#ef4444; }
      [data-sfx-upload-float] .float-bar { height:4px; background:#e8edf5; border-radius:2px; overflow:hidden; }
      [data-sfx-upload-float] .float-bar-fill { height:100%; background:#2563eb; border-radius:2px; transition:width .3s ease; }
      [data-sfx-upload-float] .float-bar-fill.done { background:#22c55e; }
      [data-sfx-upload-float] .float-bar-fill.warn { background:#f59e0b; }
      [data-sfx-upload-float] .float-bar-fill.error { background:#ef4444; }
      [data-sfx-upload-float] .float-items { max-height:200px; overflow-y:auto; }
      [data-sfx-upload-float] .float-item { display:flex; align-items:center; gap:10px; padding:8px 14px; border-bottom:1px solid #f1f5f9; overflow:hidden; }
      [data-sfx-upload-float] .float-item:last-child { border-bottom:none; }
      [data-sfx-upload-float] .float-item-thumb { width:32px; height:32px; border-radius:6px; background:#f8fafc; display:flex; align-items:center; justify-content:center; color:#94a3b8; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-thumb svg { width:16px; height:16px; }
      [data-sfx-upload-float] .float-item-info { flex:1; min-width:0; overflow:hidden; }
      [data-sfx-upload-float] .float-item-name { font-size:12px; font-weight:500; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
      [data-sfx-upload-float] .float-item-size { font-size:11px; color:#94a3b8; }
      [data-sfx-upload-float] .float-item-done { width:18px; height:18px; border-radius:50%; background:#f0fdf4; color:#22c55e; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-done svg { width:12px; height:12px; }
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }
      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }
      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }
      [data-sfx-upload-float] .float-collapsed-icon.done { color:#22c55e; }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:#ef4444; }
      [data-sfx-upload-float] .float-collapsed-text { font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; }
      [data-sfx-upload-float] .float-collapsed-pct { font-size:13px; font-weight:600; color:#2563eb; }
      [data-sfx-upload-float] .float-collapsed-actions { display:flex; gap:4px; }
      [data-sfx-upload-float] .float-collapsed-actions button { width:26px; height:26px; border:none; background:none; cursor:pointer; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#94a3b8; transition:background .15s; padding:0; }
      [data-sfx-upload-float] .float-collapsed-actions button:hover { background:#f1f5f9; color:#374151; }
      [data-sfx-upload-float] .float-collapsed-actions button svg { width:14px; height:14px; }
      @keyframes sfxFloatIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes sfxSpin { to{transform:rotate(360deg)} }
    `;
    document.head.appendChild(style);
  }

  private _updateFloatingPortal() {
    const files = [...this._storeCtrl.state.files.values()];
    if (this._isMinimized && files.length > 0) {
      this._injectFloatStyles();
      if (!this._portalContainer) {
        this._portalContainer = document.createElement("div");
        this._portalContainer.setAttribute("data-sfx-upload-float", "");
        document.body.appendChild(this._portalContainer);
      }
      litRender(this._renderFloatingPill(files), this._portalContainer);
    } else if (this._portalContainer) {
      litRender(nothing, this._portalContainer);
      this._portalContainer.remove();
      this._portalContainer = null;
    }
  }

  private _portalContainer: HTMLDivElement | null = null;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this._onKeyDown);
    // Seed previous state so the first store change is not silently skipped
    this._prevStoreState = this._store.getState();
    // Subscribe to store changes for public event dispatching
    this._unsubStoreEvents = this._store.subscribe(() => this._onStoreChange());
    // Check if a previous upload batch exists in sessionStorage
    const id = this._lastUploadId;
    this._hasStoredReview = id != null && lastUploadStore.exists(id);
    // Initialise i18n (fire-and-forget — failure is non-fatal)
    void this._initI18n(typeof navigator !== 'undefined' ? navigator.language : undefined);
  }

  private async _initI18n(locale?: string) {
    try {
      const { i18n, isNew } = await initI18n(locale || 'en');
      if (isNew) {
        i18n.on(
          'missingKey',
          (
            _lngs: readonly string[],
            ns: string,
            key: string,
            fallback: string,
            _updateMissing: boolean,
            options: Record<string, unknown>,
          ) => {
            const pluralMatch = key.match(/_(?:zero|one|two|few|many|other)$/);
            const correctDefault =
              pluralMatch && options?.[`defaultValue${pluralMatch[0]}`]
                ? String(options[`defaultValue${pluralMatch[0]}`])
                : fallback;
            missingKeysHelper.handleMissingKey(key, correctDefault, ns);
          },
        );
      }
      const tFn: UploaderState['t'] = (key, defaultValueOrOptions?, options?) => {
        if (typeof defaultValueOrOptions === 'string') {
          return i18n.t(key, defaultValueOrOptions, options ?? {}) as string;
        }
        return i18n.t(key, defaultValueOrOptions ?? {}) as string;
      };
      this._store.setState({ t: tFn });
    } catch {
      // i18n failure is non-fatal — store keeps the pass-through t
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this._onKeyDown);
    this._unsubStoreEvents?.();
    this._unsubStoreEvents = null;
    this._prevStoreState = null;
    // Remove portal container
    this._portalContainer?.remove();
    this._portalContainer = null;
    // Remove injected float styles if no other portal containers remain
    if (!document.querySelector("[data-sfx-upload-float]")) {
      document.querySelector("style[data-sfx-upload-float-styles]")?.remove();
    }
    // Revoke cached video blob URLs
    this._revokeVideoBlobUrls();
    // Clear rejected file auto-removal timers
    for (const timer of this._rejectedTimers.values()) clearTimeout(timer);
    this._rejectedTimers.clear();
    // Clear closeOnComplete timer
    if (this._closeOnCompleteTimer) {
      clearTimeout(this._closeOnCompleteTimer);
      this._closeOnCompleteTimer = null;
    }
    // Revoke all preview blob URLs to prevent memory leaks
    for (const file of this._store.getState().files.values()) {
      if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
    }
    this._engine?.destroy();
    this._engine = null;
  }

  // --- Config ---

  private _applyConfig(cfg: UploaderConfig) {
    // Update store with config values
    const updates: Partial<UploaderState> = {};

    if (cfg.locale) void this._initI18n(cfg.locale);
    if (cfg.targetFolder) updates.targetFolder = cfg.targetFolder;
    if (cfg.restrictions || cfg.forceName != null) {
      updates.restrictions = {
        ...this._store.getState().restrictions,
        ...cfg.restrictions,
      };
      // forceName implies a single-asset slot — clamp to one file regardless
      // of any user-supplied maxNumberOfFiles.
      if (cfg.forceName != null) {
        updates.restrictions.maxNumberOfFiles = 1;
      }
    }
    if (cfg.concurrency != null) {
      const qc = this._store.getState().queueConfig;
      updates.queueConfig = { ...qc, concurrency: cfg.concurrency };
    }
    if (cfg.autoProceed != null) {
      const qc = updates.queueConfig ?? this._store.getState().queueConfig;
      updates.queueConfig = { ...qc, autoProceed: cfg.autoProceed };
    }

    if (Object.keys(updates).length > 0) {
      this._store.setState(updates);
    }

    // Re-evaluate stored review availability (connectedCallback may have
    // run before config was set, so _lastUploadId was null at that point).
    const reviewId = this._lastUploadId;
    this._hasStoredReview = reviewId != null && lastUploadStore.exists(reviewId);

    // Resolve auth and create/update engine
    this._resolveAuthAndEngine(cfg);

    // Auto-open for inline mode
    if (cfg.mode === "inline" || !cfg.mode) {
      this._isOpen = true;
    }
  }

  private async _resolveAuthAndEngine(cfg: UploaderConfig) {
    const auth = cfg.auth;

    // For sass-key mode, resolve synchronously
    if (auth.mode === "sass-key") {
      this._apiBase = getApiBase(auth.container);
      this._authHeaders = buildAuthHeaders(auth);
      this._ensureEngine();
      this._engine?.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig(),
        resolveUploadParams: this._buildUploadParamsResolver(),
      });
      this._preloadMetadataSchema(cfg);
      return;
    }

    // For security-template mode, perform async SASS key exchange.
    // Use a monotonic ID to discard results from stale exchanges.
    const resolveId = ++this._authResolveId;
    try {
      const resolved = await resolveAuth(auth);
      if (resolveId !== this._authResolveId) return; // config changed while awaiting
      this._apiBase = resolved.apiBase;
      this._authHeaders = resolved.headers;
      this._ensureEngine();
      this._engine?.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig(),
        resolveUploadParams: this._buildUploadParamsResolver(),
      });
      this._preloadMetadataSchema(cfg);
    } catch (err) {
      if (resolveId !== this._authResolveId) return;
      console.error("[sfx-uploader] Auth resolution failed:", err);
      this._showToast(this._formatAuthError(err));
    }
  }

  private _formatAuthError(err: unknown): string {
    const msg = err instanceof Error ? err.message : String(err);

    if (!this.config?.auth?.container) {
      return "Authentication failed: no container specified. Open the Auth panel and enter your credentials.";
    }
    if (msg.includes("HTTP 404")) {
      return `Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`;
    }
    if (msg.includes("HTTP 401") || msg.includes("HTTP 403")) {
      return "Authentication failed: invalid security template ID. Check your credentials in the Auth panel.";
    }
    if (msg.includes("timed out")) {
      return "Authentication failed: request timed out. Check your network connection.";
    }
    if (msg.includes("Failed to fetch") || msg.includes("NetworkError")) {
      return "Authentication failed: network error. Check your internet connection.";
    }
    return `Authentication failed: ${msg}`;
  }

  private _showToast(
    message: string,
    type: "error" | "warning" | "info" = "error",
  ) {
    const toast = this.shadowRoot?.querySelector(
      "sfx-toast",
    ) as SfxToast | null;
    toast?.show(message, type);
  }

  private _normalizeTusConfig(): TusConfig | undefined {
    const raw = this.config?.tusConfig;
    return raw === true ? {} : raw || undefined;
  }

  /**
   * Whether the file picker should allow multi-select. False when
   * `forceName` is set (single-asset slot) or when restrictions cap to 1.
   */
  private get _remainingSlots(): number | null {
    const max = this._storeCtrl.state.restrictions.maxNumberOfFiles;
    if (max == null) return null;
    let activeCount = 0;
    for (const f of this._storeCtrl.state.files.values()) {
      if (f.status !== 'rejected' && f.status !== 'cancelled') activeCount++;
    }
    return Math.max(0, max - activeCount);
  }

  private get _allowMulti(): boolean {
    if (this.config?.forceName != null) return false;
    const remaining = this._remainingSlots;
    return remaining === null || remaining > 1;
  }

  /**
   * Build the per-file upload-params resolver from `forceName` and
   * `getUploadParams`. Host-supplied `getUploadParams` keys win on collision.
   * Returns `undefined` when neither is configured.
   */
  private _buildUploadParamsResolver():
    | ((file: UploadFile) => Record<string, string> | undefined)
    | undefined {
    const cfg = this.config;
    if (!cfg) return undefined;
    const { forceName, getUploadParams } = cfg;
    if (forceName == null && !getUploadParams) return undefined;

    return (file: UploadFile) => {
      const params: Record<string, string> = {};
      if (forceName != null) {
        const name = typeof forceName === "function" ? forceName() : forceName;
        if (name) params.opt_force_name = name;
      }
      const extra = getUploadParams?.(file);
      if (extra) Object.assign(params, extra);
      return Object.keys(params).length > 0 ? params : undefined;
    };
  }

  private _ensureEngine() {
    if (!this._engine && this._apiBase && this._authHeaders) {
      this._engine = new UploadEngine(this._store, {
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig(),
        resolveUploadParams: this._buildUploadParamsResolver(),
        transformPreviewUrl: (url) =>
          this._transformRemoteThumbnail(url, { source: 'cdn-complete' }),
      });
      this._engine.start();
    }
  }

  // --- Metadata schema preloading ---

  private async _preloadMetadataSchema(cfg: UploaderConfig) {
    const mc = cfg.metadataConfig;
    if (!mc || !this._apiBase || !this._authHeaders) return;

    try {
      const { fetchMetadataSchema, createTagsAutocomplete } = await import(
        "./metadata"
      );
      this._metadataSchema = await fetchMetadataSchema(
        this._apiBase,
        this._authHeaders,
        mc.projectUuid,
        mc,
      );
      this._metadataAutocomplete = createTagsAutocomplete(
        this._apiBase,
        this._authHeaders,
      );
      const requiredFieldKeys = this._metadataSchema.fields
        .filter((f) => isFieldRequired(f, mc))
        .map((f) => f.key);
      this._dispatchPublic(PublicEvents.METADATA_SCHEMA, {
        schema: this._metadataSchema,
        requiredFieldKeys,
      });
    } catch (err) {
      console.error("[sfx-uploader] Failed to load metadata schema:", err);
      this._showToast("Failed to load metadata schema", "warning");
    }
  }

  private _onFileRename = (
    e: CustomEvent<{ fileId: string; name: string }>,
  ) => {
    this._onPreviewRename(e.detail.fileId, e.detail.name);
  };

  /** Handle file rename from the preview sidebar or thumbnail. */
  private _onPreviewRename(fileId: string, newName: string) {
    const trimmed = newName.trim();
    if (!trimmed) return;
    const existing = this._store.getState().files.get(fileId);
    if (!existing || existing.name === trimmed) return;
    const next = new Map(this._store.getState().files);
    next.set(fileId, { ...existing, name: trimmed });
    this._store.setState({ files: next });
  }

  /** Handle field-blur from inline metadata form in the preview sidebar. */
  private _onPreviewMetadataBlur = (
    e: CustomEvent<{ key: string; value: unknown }>,
  ) => {
    const fileId = this._previewFileId;
    if (!fileId) return;
    const { key, value } = e.detail;
    const existing = this._store.getState().files.get(fileId);
    if (!existing) return;
    const next = new Map(this._store.getState().files);
    next.set(fileId, { ...existing, meta: { ...existing.meta, [key]: value } });
    this._store.setState({ files: next });
  };

  private get _metadataEnforcing(): boolean {
    const mc = this.config?.metadataConfig;
    if (!mc || !this._metadataSchema) return false;
    if (mc.enforceRequiredBeforeUpload === false) return false;
    if (mc.enforceRequiredBeforeUpload === true) return true;
    // 'auto' (the default) — see MetadataConfig.enforceRequiredBeforeUpload JSDoc.
    if (this._metadataSchema.forceFillingOnUpload) return true;
    if (mc.requiredFields && mc.requiredFields.length > 0) return true;
    return this._metadataSchema.fields.some((f) => Boolean(f.required));
  }

  private _firstMissingRequiredFieldKey(): string | null {
    if (!this._metadataEnforcing || !this._metadataSchema) return null;
    return firstMissingRequiredFieldKey(
      this._store.getState().files,
      this._metadataSchema,
      this.config?.metadataConfig,
    );
  }

  private get _hasUnfilledRequiredMetadata(): boolean {
    return this._firstMissingRequiredFieldKey() != null;
  }

  // --- Public event dispatching (spec §13.1) ---

  private _dispatchPublic(
    eventName: PublicEventName,
    detail: Record<string, unknown>,
  ) {
    this.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, composed: true, detail }),
    );
  }

  /**
   * Run the host-supplied {@link UploaderConfig.transformRemoteThumbnail}
   * over a third-party thumbnail URL, falling back to the original URL when
   * no transform is configured or the transform throws.
   */
  private _transformRemoteThumbnail = (
    url: string,
    ctx: RemoteThumbnailContext,
  ): string => {
    const fn = this.config?.transformRemoteThumbnail;
    if (!fn) return url;
    try {
      return fn(url, ctx) || url;
    } catch (err) {
      console.warn("[sfx-uploader] transformRemoteThumbnail threw:", err);
      return url;
    }
  };

  /**
   * Stable bound transform passed to the connector browser components, so
   * inline-arrow churn in the template doesn't force the children to re-render
   * on every parent update.
   */
  private _connectorThumbnailTransform = (url: string): string => {
    const providerId = this._activeConnector;
    if (!providerId) return url;
    return this._transformRemoteThumbnail(url, {
      source: "connector",
      providerId,
    });
  };

  /**
   * React to store changes and dispatch public events + callbacks
   * for file status transitions.
   */
  private _onStoreChange() {
    const curr = this._store.getState();
    const prev = this._prevStoreState;
    this._prevStoreState = curr;

    if (!prev) return;

    // Reset persisted ETA when a new upload batch starts
    if (curr.isUploading && !prev.isUploading) this._lastEta = 0;

    const callbacks = this.config?.callbacks;

    // Detect per-file status transitions
    for (const [id, file] of curr.files) {
      const prevFile = prev.files.get(id);

      if (!prevFile) continue; // newly added files are handled in _processIncomingFiles

      if (prevFile.status !== file.status) {
        switch (file.status) {
          case "uploading":
            // Detect resume: paused → uploading
            if (prevFile.status === "paused") {
              this._dispatchPublic(PublicEvents.UPLOAD_RESUMED, { file });
              callbacks?.onUploadResumed?.(file);
            }
            break;
          case "complete":
            if (file.response) {
              this._dispatchPublic(PublicEvents.UPLOAD_COMPLETE, {
                file,
                response: file.response,
              });
              callbacks?.onUploadComplete?.(file, file.response);
            }
            break;
          case "error":
          case "failed": {
            const err = new Error(file.error ?? "Upload failed");
            this._dispatchPublic(PublicEvents.UPLOAD_ERROR, {
              file,
              error: err,
            });
            callbacks?.onUploadError?.(file, err);
            // Per-file failure toasts intentionally suppressed — the failed
            // tile in the file-list already shows a red badge with the
            // error text, and the success-card aggregates the failures.
            break;
          }
          case "retrying":
            this._dispatchPublic(PublicEvents.UPLOAD_RETRY, {
              file,
              attempt: file.retryCount,
            });
            callbacks?.onUploadRetry?.(file, file.retryCount);
            break;
          case "paused":
            this._dispatchPublic(PublicEvents.UPLOAD_PAUSED, { file });
            callbacks?.onUploadPaused?.(file);
            break;
        }
      }

      // Progress change
      if (file.status === "uploading" && prevFile.progress !== file.progress) {
        this._dispatchPublic(PublicEvents.UPLOAD_PROGRESS, {
          file,
          progress: file.progress,
          speed: file.speed,
        });
        callbacks?.onUploadProgress?.(file, file.progress, file.speed);
      }
    }

    // Total progress
    if (
      curr.totalProgress !== prev.totalProgress ||
      curr.totalSpeed !== prev.totalSpeed
    ) {
      const eta =
        curr.totalSpeed > 0
          ? (curr.totalBytes - curr.totalBytesUploaded) / curr.totalSpeed
          : curr.isUploading ? this._lastEta : 0;
      if (curr.totalSpeed > 0) this._lastEta = eta;
      this._dispatchPublic(PublicEvents.TOTAL_PROGRESS, {
        percentage: curr.totalProgress,
        speed: curr.totalSpeed,
        eta,
      });
      callbacks?.onTotalProgress?.(curr.totalProgress, curr.totalSpeed, eta);
    }

    // All complete detection — only fire when uploads finished naturally, not on cancel
    if (prev.isUploading && !curr.isUploading) {
      const allFiles = [...curr.files.values()];
      const hasCancelled = allFiles.some((f) => f.status === "cancelled");
      if (!hasCancelled) {
        const successful = allFiles.filter((f) => f.status === "complete");
        const failed = allFiles.filter(
          (f) => f.status === "failed" || f.status === "error",
        );

        // Persist this batch to sessionStorage so the success-card "Review
        // files" button can later re-load it (e.g. after closing and
        // re-opening the uploader within the same session). Overwrites any
        // previous batch — or clears stale data when empty.
        const reviewId = this._lastUploadId;
        if (reviewId != null) {
          const reviewable = [...successful, ...failed];
          lastUploadStore.save(reviewId, reviewable);
          this._hasStoredReview = reviewable.length > 0;
        }

        this._dispatchPublic(PublicEvents.ALL_COMPLETE, { successful, failed });
        callbacks?.onAllComplete?.(successful, failed);

        // Auto-close after a brief delay so the user sees the success state
        const closeOpt = this.config?.closeOnComplete;
        if (closeOpt) {
          const delay = typeof closeOpt === "number" ? closeOpt : 1500;
          this._closeOnCompleteTimer = setTimeout(() => {
            this._closeOnCompleteTimer = null;
            // Guard: only act if still in the complete phase (user may have clicked "Upload more")
            if (this._phase !== "complete") return;
            // Fire the same callbacks/events as the "Done" button
            this._dispatchPublic(PublicEvents.COMPLETE_ACTION, {});
            this.config?.callbacks?.onCompleteAction?.();
            this.close();
          }, delay);
        }
      }
    }
  }

  // --- Connector sources ---

  /** Reserved source IDs that cannot be overridden by custom sources. */
  private static readonly _RESERVED_IDS = new Set([
    "device",
    "camera",
    "url",
    "screen-cast",
  ]);

  private get _mergedSources(): SourceDef[] {
    const connectors = this.config?.connectors;
    // Return cached result if connectors config hasn't changed (same reference)
    if (connectors === this._cachedSourcesConfig) return this._cachedSources;
    this._cachedSourcesConfig = connectors;

    if (!connectors) {
      this._cachedSources = CORE_SOURCES;
      return this._cachedSources;
    }

    const providerSources =
      connectors.providers.length > 0
        ? getProviderSources(connectors.providers)
        : [];
    const custom = connectors.customSources ?? [];

    // Allowlist of built-in sources (defaults to all when omitted).
    const coreAllow = connectors.coreSources
      ? new Set<string>(connectors.coreSources)
      : null;
    const coreSources = coreAllow
      ? CORE_SOURCES.filter((s) => coreAllow.has(s.id))
      : CORE_SOURCES;

    // Order: device, url → providers → remaining core (camera, screen-cast) → custom
    const priorityCore = coreSources.filter(
      (s) => s.id === "device" || s.id === "url",
    );
    const remainingCore = coreSources.filter(
      (s) => s.id !== "device" && s.id !== "url",
    );

    const seen = new Set<string>();
    const merged: SourceDef[] = [];
    for (const s of [
      ...priorityCore,
      ...providerSources,
      ...remainingCore,
      ...custom,
    ]) {
      if (seen.has(s.id)) continue;
      if (SfxUploader._RESERVED_IDS.has(s.id) && s.onActivate) {
        console.warn(
          `[sfx-uploader] Custom source id "${s.id}" conflicts with a built-in source and was skipped.`,
        );
        continue;
      }
      seen.add(s.id);
      merged.push(s);
    }

    this._cachedSources = merged;
    return this._cachedSources;
  }

  // --- Phase computation ---

  private get _phase(): UploaderPhase {
    const s = this._storeCtrl.state;
    const files = [...s.files.values()];
    if (files.length === 0) return "empty";
    if (s.isUploading) return "uploading";
    // Complete when all uploadable files finished (ignoring rejected/cancelled)
    const terminal = new Set(["complete", "rejected", "cancelled", "failed"]);
    if (
      files.every((f) => terminal.has(f.status)) &&
      files.some((f) => f.status === "complete" || f.status === "failed")
    ) {
      return "complete";
    }
    return "ready";
  }

  // --- File handling ---

  private _processIncomingFiles(rawFiles: File[]) {
    const callbacks = this.config?.callbacks;

    // New files coming in — leave the read-only review screen if it's open.
    if (this._isReviewing) {
      this._isReviewing = false;
      this._reviewFiles = [];
    }

    for (const file of rawFiles) {
      // Re-read state each iteration so maxNumberOfFiles validation sees previously added files
      const s = this._store.getState();

      // Skip duplicate files (same name + size already in queue)
      const isDuplicate = [...s.files.values()].some(
        (f) =>
          f.name === file.name &&
          f.size === file.size &&
          f.status !== "rejected" &&
          f.status !== "cancelled",
      );
      if (isDuplicate) continue;

      // Browsers may report an empty MIME type for formats they don't
      // recognise (e.g. HEIC/HEIF). Fall back to a guessed type so that
      // allowedFileTypes patterns like 'image/*' match correctly.
      const effectiveType = file.type || guessMimeType(file.name);

      const error = validateFileInfo(
        { name: file.name, size: file.size, type: effectiveType },
        s.restrictions,
        s.files,
      );
      if (error) {
        // Create a rejected file entry so the user sees the error
        const rejectedPreview =
          effectiveType.startsWith("image/") && !isBrowserUnrenderableImage(effectiveType)
            ? URL.createObjectURL(file)
            : null;
        const uploadFile: UploadFile = {
          id: generateFileId(),
          status: "rejected",
          file,
          remoteUrl: null,
          name: file.name,
          size: file.size,
          type: effectiveType,
          previewUrl: rejectedPreview,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          remoteInfo: null,
          ...TUS_DEFAULTS,
        };
        addFile(this._store, uploadFile);
        this._dispatchPublic(PublicEvents.FILE_REJECTED, {
          file: uploadFile,
          reason: error,
        });
        callbacks?.onFileRejected?.(uploadFile, error);
        // Auto-remove rejected file after configurable delay
        const delay = this.config?.rejectedFileAutoRemoveDelay;
        const autoRemoveMs =
          delay === false || delay === 0 || delay === undefined ? 0 : delay;
        if (autoRemoveMs > 0) {
          const rejId = uploadFile.id;
          const timer = setTimeout(() => {
            this._rejectedTimers.delete(rejId);
            const f = this._store.getState().files.get(rejId);
            if (f && f.status === "rejected") {
              removeFile(this._store, rejId);
            }
          }, autoRemoveMs);
          this._rejectedTimers.set(rejId, timer);
        }
        continue;
      }

      // Create preview for images; video thumbnails are generated async below.
      // Exclude HEIC/HEIF — browsers can't decode them for inline display.
      let previewUrl: string | null = null;
      if (effectiveType.startsWith("image/") && !isBrowserUnrenderableImage(effectiveType)) {
        previewUrl = URL.createObjectURL(file);
      }

      const uploadFile: UploadFile = {
        id: generateFileId(),
        status: "idle",
        file,
        remoteUrl: null,
        name: file.name,
        size: file.size,
        type: effectiveType,
        previewUrl,
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
        remoteInfo: null,
        ...TUS_DEFAULTS,
      };

      addFile(this._store, uploadFile);
      this._dispatchPublic(PublicEvents.FILE_ADDED, { file: uploadFile });
      callbacks?.onFileAdded?.(uploadFile);

      // Generate video thumbnail and extract duration asynchronously
      if (file.type.startsWith("video/")) {
        generateVideoThumbnail(file).then((thumbUrl) => {
          if (!thumbUrl) return;
          const state = this._store.getState();
          const current = state.files.get(uploadFile.id);
          if (current) {
            const next = new Map(state.files);
            next.set(uploadFile.id, { ...current, previewUrl: thumbUrl });
            this._store.setState({ files: next });
          } else {
            URL.revokeObjectURL(thumbUrl);
          }
        });
        // Extract duration
        const vid = document.createElement("video");
        vid.preload = "metadata";
        vid.src = URL.createObjectURL(file);
        vid.onerror = () => {
          URL.revokeObjectURL(vid.src);
        };
        vid.onloadedmetadata = () => {
          const duration = vid.duration;
          URL.revokeObjectURL(vid.src);
          if (!isFinite(duration)) return;
          const state = this._store.getState();
          const current = state.files.get(uploadFile.id);
          if (current) {
            const next = new Map(state.files);
            next.set(uploadFile.id, { ...current, duration });
            this._store.setState({ files: next });
          }
        };
      }
    }

    // Auto-proceed if configured
    if (this._store.getState().queueConfig.autoProceed) {
      this.upload();
    }
  }

  // --- Event handlers ---

  private _onFilesSelected = (e: CustomEvent<{ files: File[] }>) => {
    this._processIncomingFiles(e.detail.files);
  };

  private _onDropTileSourceClick = (e: CustomEvent<{ source: SourceDef }>) => {
    e.stopPropagation();
    this._handleSourceActivation(e.detail.source.id);
  };

  private _onSourceClick = async (e: CustomEvent<{ source: string }>) => {
    this._handleSourceActivation(e.detail.source);
  };

  private _handleSourceActivation = async (source: string) => {
    // Check for custom source with onActivate callback
    const sourceDef = this._mergedSources.find((s) => s.id === source);
    if (sourceDef?.onActivate) {
      try {
        sourceDef.onActivate(this);
      } catch (err) {
        console.error(
          `[sfx-uploader] onActivate for custom source "${source}" threw:`,
          err,
        );
      }
      return;
    }

    if (source === "device") {
      const dropZone = this.shadowRoot!.querySelector(
        "sfx-drop-zone",
      ) as SfxDropZone | null;
      dropZone?.browse();
      return;
    }

    if (source === "url") {
      this._showUrlDialog = true;
      return;
    }

    if (source === "camera") {
      this._showCameraDialog = true;
      return;
    }

    if (source === "screen-cast") {
      this._showScreenCastDialog = true;
      return;
    }

    // Check if this is a connector source
    const providers = this.config?.connectors?.providers ?? [];
    if (providers.includes(source as ProviderId)) {
      // Lazy-load the appropriate browser component
      const isSearch = SEARCH_PROVIDERS.has(source as ProviderId);
      if (isSearch) {
        if (!customElements.get("sfx-search-provider-browser")) {
          const { SfxSearchProviderBrowser } = await import(
            "./components/search-provider-browser"
          );
          customElements.define(
            "sfx-search-provider-browser",
            SfxSearchProviderBrowser,
          );
        }
      } else {
        if (!customElements.get("sfx-provider-browser")) {
          const { SfxProviderBrowser } = await import(
            "./components/provider-browser"
          );
          customElements.define("sfx-provider-browser", SfxProviderBrowser);
        }
      }
      this._activeConnector = source as ProviderId;
    }
  };

  private _onUrlSubmit = (e: CustomEvent<{ url: string; name: string }>) => {
    this._showUrlDialog = false;
    const { url, name } = e.detail;
    const callbacks = this.config?.callbacks;

    const type = guessMimeType(name);
    const isImage = type.startsWith("image/");

    // Validate against restrictions (size=0 for URL imports, so size checks are skipped)
    const s = this._store.getState();

    // Skip duplicate URLs (same name already in queue)
    const isDuplicate = [...s.files.values()].some(
      (f) =>
        f.name === name && f.status !== "rejected" && f.status !== "cancelled",
    );
    if (isDuplicate) return;

    const error = validateFileInfo(
      { name, size: 0, type },
      s.restrictions,
      s.files,
    );
    if (error) {
      const rejFile: UploadFile = {
        id: generateFileId(),
        status: "rejected",
        file: null,
        remoteUrl: url,
        name,
        size: 0,
        type,
        previewUrl: null,
        duration: null,
        progress: 0,
        speed: 0,
        bytesUploaded: 0,
        error,
        retryCount: 0,
        response: null,
        addedAt: Date.now(),
        meta: {},
        tags: [],
        remoteInfo: null,
        ...TUS_DEFAULTS,
      };
      addFile(this._store, rejFile);
      this._dispatchPublic(PublicEvents.FILE_REJECTED, {
        file: rejFile,
        reason: error,
      });
      callbacks?.onFileRejected?.(rejFile, error);
      return;
    }

    const uploadFile: UploadFile = {
      id: generateFileId(),
      status: "idle",
      file: null,
      remoteUrl: url,
      name,
      size: 0,
      type,
      previewUrl: isImage
        ? this._transformRemoteThumbnail(url, { source: "url-import" })
        : null,
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
      remoteInfo: null,
      ...TUS_DEFAULTS,
    };

    addFile(this._store, uploadFile);
    this._dispatchPublic(PublicEvents.FILE_ADDED, { file: uploadFile });
    callbacks?.onFileAdded?.(uploadFile);

    if (this._store.getState().queueConfig.autoProceed) {
      this.upload();
    }
  };

  private _onUrlCancel = () => {
    this._showUrlDialog = false;
  };

  private _onCameraCapture = (e: CustomEvent<{ file: File }>) => {
    this._showCameraDialog = false;
    this._processIncomingFiles([e.detail.file]);
  };

  private _onCameraCancel = () => {
    this._showCameraDialog = false;
  };

  private _onScreenCastCapture = (e: CustomEvent<{ file: File }>) => {
    this._showScreenCastDialog = false;
    this._processIncomingFiles([e.detail.file]);
  };

  private _onScreenCastCancel = () => {
    this._showScreenCastDialog = false;
  };

  private _removeFile(fileId: string) {
    const file = this._store.getState().files.get(fileId);
    if (!file) return;
    // Snapshot file for the event before mutating state
    const snapshot = { ...file };
    // Reset fullscreen if this file was being viewed (before revoking URLs)
    if (
      (this._fullscreenPreviewUrl &&
        this._fullscreenPreviewUrl === file.previewUrl) ||
      (this._fullscreenVideoFile && this._fullscreenVideoFile === file.file)
    ) {
      this._fullscreenPreviewUrl = null;
      this._fullscreenVideoFile = null;
    }
    // Revoke objectURL to free memory
    if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
    // Revoke cached video blob URL
    if (file.file) {
      const blobUrl = this._videoBlobUrls.get(file.file);
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
        this._videoBlobUrls.delete(file.file);
      }
    }
    // Cancel if active (including retrying/paused, which has a pending retry timer or tus handle)
    if (
      file.status === "uploading" ||
      file.status === "queued" ||
      file.status === "retrying" ||
      file.status === "paused"
    ) {
      this._engine?.cancelFile(fileId);
    }
    removeFile(this._store, fileId);
    // Clear dimension cache
    this._dimCache.delete(fileId);
    // Clear rejected timer if pending
    const rejTimer = this._rejectedTimers.get(fileId);
    if (rejTimer) {
      clearTimeout(rejTimer);
      this._rejectedTimers.delete(fileId);
    }
    // Reset preview to next file if this file was being previewed
    if (this._previewFileId === fileId) {
      const remaining = [...this._store.getState().files.values()];
      this._previewFileId = remaining.length > 0 ? remaining[0].id : null;
    }
    this._dispatchPublic(PublicEvents.FILE_REMOVED, { file: snapshot });
    this.config?.callbacks?.onFileRemoved?.(snapshot);
  }

  private _onFileRemove = (e: CustomEvent<{ fileId: string }>) => {
    this._removeFile(e.detail.fileId);
  };

  private _onFilePreview = (e: CustomEvent<{ fileId: string }>) => {
    const file = this._store.getState().files.get(e.detail.fileId);
    if (!file) return;
    this._previewFileId = file.id;
    this._dispatchPublic(PublicEvents.FILE_PREVIEW, { file });
    this.config?.callbacks?.onFilePreview?.(file);
  };

  private _onFillMetadata = () => {
    const files = [...this._store.getState().files.values()].filter((f) =>
      SfxUploader._MODIFIABLE_STATUSES.has(f.status),
    );
    if (this.config?.metadataConfig && this._metadataSchema) {
      // Land on the first missing required field when there is one, so the
      // user is taken straight to what's blocking them.
      this._bulkMetadataInitialFieldKey = this._firstMissingRequiredFieldKey();
      this._bulkMetadataOpen = true;
    }
    this._dispatchPublic(PublicEvents.FILL_METADATA, { files });
    this.config?.callbacks?.onFillMetadata?.(files);
  };

  private _onFileLocate = (e: CustomEvent<{ fileId: string; file: UploadFile }>) => {
    const file = e.detail.file;
    if (!file) return;
    this._dispatchPublic(PublicEvents.FILE_LOCATE, { file });
    this.config?.callbacks?.onFileLocate?.(file);
  };

  private _onFileCopyCdn = (e: CustomEvent<{ fileId: string; file: UploadFile; cdnUrl: string }>) => {
    const file = e.detail.file;
    const cdnUrl = e.detail.cdnUrl;
    if (!file || !cdnUrl) return;
    this._dispatchPublic(PublicEvents.FILE_COPY_CDN, { file, cdnUrl });
    this.config?.callbacks?.onFileCopyCdn?.(file, cdnUrl);
  };

  private _onBulkMetadataSaveBatch = (
    e: CustomEvent<{
      changes: Array<{ fileId: string; meta: Record<string, unknown> }>;
    }>,
  ) => {
    const { changes } = e.detail;
    if (!changes.length) return;
    const next = new Map(this._store.getState().files);
    for (const { fileId, meta } of changes) {
      const existing = next.get(fileId);
      if (!existing) continue;
      next.set(fileId, { ...existing, meta: { ...existing.meta, ...meta } });
    }
    this._store.setState({ files: next });
  };

  private _onBulkMetadataClose = () => {
    this._bulkMetadataOpen = false;
    this._bulkMetadataInitialFieldKey = null;
  };

  private _onFileRetry = (e: CustomEvent<{ fileId: string }>) => {
    this._ensureEngine();
    this._engine?.retryFile(e.detail.fileId);
  };

  private _onFilePause = (e: CustomEvent<{ fileId: string }>) => {
    this._engine?.pauseFile(e.detail.fileId);
  };

  private _onFileResume = (e: CustomEvent<{ fileId: string }>) => {
    this._engine?.resumeFile(e.detail.fileId);
  };

  private _onRetryAll = () => {
    this._ensureEngine();
    this._engine?.retryAll();
  };

  private _onClearAll = () => {
    const callbacks = this.config?.callbacks;

    // Clear closeOnComplete timer so a stale auto-close doesn't fire after reset
    if (this._closeOnCompleteTimer) {
      clearTimeout(this._closeOnCompleteTimer);
      this._closeOnCompleteTimer = null;
    }
    // Cancel all active uploads first so XHRs are aborted before removal events
    this._engine?.cancelAll();
    // Snapshot files, revoke preview URLs, and dispatch removal events
    const allFiles = [...this._store.getState().files.values()];
    for (const file of allFiles) {
      if (file.previewUrl) URL.revokeObjectURL(file.previewUrl);
      this._dispatchPublic(PublicEvents.FILE_REMOVED, { file });
      callbacks?.onFileRemoved?.(file);
    }
    // Revoke all cached video blob URLs
    this._revokeVideoBlobUrls();
    // Clear rejected file auto-removal timers
    for (const timer of this._rejectedTimers.values()) clearTimeout(timer);
    this._rejectedTimers.clear();
    // Clear dimension cache
    this._dimCache.clear();
    // Reset preview/fullscreen state
    this._previewFileId = null;
    this._fullscreenPreviewUrl = null;
    this._fullscreenVideoFile = null;
    this._lastEta = 0;
    this._store.setState({
      files: new Map(),
      isUploading: false,
      totalProgress: 0,
      totalSpeed: 0,
      totalBytesUploaded: 0,
      totalBytes: 0,
    });
  };

  private _onAddMore = () => {
    const dropZone = this.shadowRoot!.querySelector(
      "sfx-drop-zone",
    ) as SfxDropZone | null;
    if (dropZone) {
      dropZone.browse();
      return;
    }
    // Fallback: use file-list's hidden input when drop-zone is not rendered
    const fileList = this.shadowRoot!.querySelector("sfx-file-list");
    const input = fileList?.shadowRoot?.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement | null;
    input?.click();
  };

  private _onUploadStart = () => {
    if (this._phase === "complete") {
      if (this.config?.clearOnComplete !== false) {
        this._onClearAll();
      }
      return;
    }
    if (this._hasUnfilledRequiredMetadata) return; // blocked by metadata enforcement
    this.upload();
  };

  private _onUploadMore = () => {
    this._onClearAll();
  };

  // --- Last-upload review mode ---

  /** Enter review mode. Prefers live files from the store (they still have
   *  objectURL previewUrls for both successful AND failed files); falls
   *  back to sessionStorage when no live files are present (e.g. the user
   *  re-opened the uploader after closing). */
  private _onEnterReview = () => {
    const liveFiles = [...this._store.getState().files.values()].filter(
      (f) =>
        f.status === "complete" ||
        f.status === "failed" ||
        f.status === "error",
    );
    if (liveFiles.length > 0) {
      this._reviewFiles = liveFiles;
      this._isReviewing = true;
      return;
    }
    const id = this._lastUploadId;
    if (id == null) return;
    const stored = lastUploadStore.load(id);
    if (!stored || stored.length === 0) return;
    this._reviewFiles = stored;
    this._isReviewing = true;
  };

  private _onExitReview = () => {
    this._isReviewing = false;
    this._reviewFiles = [];
  };

  private _onClearReview = () => {
    const id = this._lastUploadId;
    if (id != null) lastUploadStore.clear(id);
    this._isReviewing = false;
    this._reviewFiles = [];
    this._hasStoredReview = false;
  };

  private _onConnectorFilesSelected = (
    e: CustomEvent<{ files: RemoteFileInfo[] }>,
  ) => {
    const callbacks = this.config?.callbacks;
    for (const info of e.detail.files) {
      // Re-read state each iteration so maxNumberOfFiles sees previously added files
      const s = this._store.getState();

      // Skip duplicate files (same name + size already in queue)
      const isDuplicate = [...s.files.values()].some(
        (f) =>
          f.name === info.name &&
          f.size === info.size &&
          f.status !== "rejected" &&
          f.status !== "cancelled",
      );
      if (isDuplicate) continue;

      const previewUrl = info.thumbnail
        ? this._transformRemoteThumbnail(info.thumbnail, {
            source: "connector",
            providerId: info.provider,
          })
        : null;

      const error = validateFileInfo(
        { name: info.name, size: info.size, type: info.mimeType },
        s.restrictions,
        s.files,
      );
      if (error) {
        const rejFile: UploadFile = {
          id: generateFileId(),
          status: "rejected",
          file: null,
          remoteUrl: null,
          name: info.name,
          size: info.size,
          type: info.mimeType,
          previewUrl,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          remoteInfo: info,
          ...TUS_DEFAULTS,
        };
        addFile(this._store, rejFile);
        this._dispatchPublic(PublicEvents.FILE_REJECTED, {
          file: rejFile,
          reason: error,
        });
        callbacks?.onFileRejected?.(rejFile, error);
        continue;
      }

      const uploadFile: UploadFile = {
        id: generateFileId(),
        status: "idle",
        file: null,
        remoteUrl: null,
        name: info.name,
        size: info.size,
        type: info.mimeType,
        previewUrl,
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
        remoteInfo: info,
        ...TUS_DEFAULTS,
      };
      addFile(this._store, uploadFile);
      this._dispatchPublic(PublicEvents.FILE_ADDED, { file: uploadFile });
      callbacks?.onFileAdded?.(uploadFile);
    }
    this._activeConnector = null;

    // Auto-proceed if configured
    if (this._store.getState().queueConfig.autoProceed) {
      this.upload();
    }
  };

  private _onConnectorClose = () => {
    this._activeConnector = null;
  };

  private _onConnectorBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      this._activeConnector = null;
    }
  };

  private _onPrimaryAction = () => {
    // Dispatch public event so consumers can handle "Done"/"View in DAM"/etc.
    this._dispatchPublic(PublicEvents.COMPLETE_ACTION, {});
    this.config?.callbacks?.onCompleteAction?.();
    // In modal mode, close the uploader; otherwise optionally reset to initial state
    if (this.config?.mode === "modal") {
      this.close();
    } else if (this.config?.clearOnComplete !== false) {
      this._onClearAll();
    }
  };

  /** Dismiss handler for inline mode X button */
  private _onInlineDismiss = () => {
    this.config?.callbacks?.onCancel?.();
    this._dispatchPublic(PublicEvents.CANCEL, {});
  };

  /** Close button on the success card — route to the right dismiss based on mode */
  private _onSuccessCardClose = () => {
    if (this.config?.mode === "inline") {
      // In inline mode, behave like "Done": clear files and reset
      this._dispatchPublic(PublicEvents.COMPLETE_ACTION, {});
      this.config?.callbacks?.onCompleteAction?.();
      this._onClearAll();
    } else {
      this._onModalDismiss();
    }
  };

  /** Shared dismiss handler for X button, backdrop click, Escape */
  private _onModalDismiss = () => {
    // Cancel active uploads when closing
    if (this._phase === "uploading") {
      this._engine?.cancelAll();
    }
    this.config?.callbacks?.onCancel?.();
    this._dispatchPublic(PublicEvents.CANCEL, {});
    this.close();
  };

  private _onCancelUpload = () => {
    this._engine?.cancelAll();
    this.config?.callbacks?.onCancel?.();
    this._dispatchPublic(PublicEvents.CANCEL, {});
    this._onClearAll();
  };

  private _onMinimize = () => {
    this._isMinimized = true;
    this._isPillExpanded = true;
    this.requestUpdate();
  };

  private _onPillClick = () => {
    this._isPillExpanded = !this._isPillExpanded;
    this.requestUpdate();
  };

  private _onPillExpand = () => {
    this._isMinimized = false;
    this._isPillExpanded = false;
    this._isOpen = true;
    this.requestUpdate();
  };

  private _onPillDismiss = () => {
    this._isMinimized = false;
    this._isPillExpanded = false;
    if (this._phase === "uploading") {
      this._engine?.cancelAll();
    }
    this.config?.callbacks?.onCancel?.();
    this._dispatchPublic(PublicEvents.CANCEL, {});
    this.close();
  };

  private _onModalBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      this._onModalDismiss();
    }
  };

  // --- Body-level drag & drop (full-area drop target) ---

  private _bodyLeaveTimer: ReturnType<typeof setTimeout> | null = null;

  private _onBodyDragEnter = (e: DragEvent) => {
    e.preventDefault();
    if (this._bodyLeaveTimer) {
      clearTimeout(this._bodyLeaveTimer);
      this._bodyLeaveTimer = null;
    }
    this._bodyDragOver = true;
  };

  private _onBodyDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (this._bodyLeaveTimer) {
      clearTimeout(this._bodyLeaveTimer);
      this._bodyLeaveTimer = null;
    }
    this._bodyDragOver = true;
  };

  private _onBodyDragLeave = (e: DragEvent) => {
    e.preventDefault();
    if (this._bodyLeaveTimer) clearTimeout(this._bodyLeaveTimer);
    this._bodyLeaveTimer = setTimeout(() => {
      this._bodyDragOver = false;
      this._bodyLeaveTimer = null;
    }, 80);
  };

  private _onBodyDrop = (e: DragEvent) => {
    e.preventDefault();
    if (this._bodyLeaveTimer) {
      clearTimeout(this._bodyLeaveTimer);
      this._bodyLeaveTimer = null;
    }
    this._bodyDragOver = false;

    const files = Array.from(e.dataTransfer?.files ?? []);
    if (files.length > 0) {
      this._onFilesSelected(
        new CustomEvent("files-selected", { detail: { files } }),
      );
    }
  };

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (this._fullscreenPreviewUrl || this._fullscreenVideoFile) {
        this._onFsClose();
        return;
      }
      const mode = this.config?.mode ?? "modal";
      const header = this.config?.header ?? (mode === "modal" ? "close" : true);
      if (header === "close" || header === "back") {
        if (mode === "modal" && this._isOpen) this._onModalDismiss();
        else if (mode === "inline") this._onInlineDismiss();
      }
    }
  };

  // --- Render ---

  render() {
    const mode = this.config?.mode ?? "modal";
    const files = [...this._storeCtrl.state.files.values()];
    const t = this._storeCtrl.state.t;

    if (mode === "modal") {
      return html`
        ${this._isOpen && !this._isMinimized
          ? html`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${t}></sfx-toast>
                </div>
              </div>
            `
          : nothing}
        ${this._renderFsOverlay()}
      `;
    }

    // Inline mode
    return html`
      <div class="inline ${files.length === 0 ? "no-files" : ""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${t}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `;
  }

  /** Fullscreen image/video overlay. Rendered at the top level (sibling
      of modal-backdrop) so it never inherits a containing block from the
      modal-card on mobile, where modal-card is position:fixed itself and
      its overflow:hidden was clipping the overlay. The toolbar + nav
      buttons are rendered as SIBLINGS of the overlay (not children) so
      their position:fixed always resolves to the viewport, even if some
      ancestor of fs-overlay establishes a containing block on first paint. */
  private _renderFsOverlay() {
    if (!this._fullscreenPreviewUrl && !this._fullscreenVideoFile) return nothing;
    const t = this._storeCtrl.state.t;
    const fsFiles = [...this._store.getState().files.values()].filter(
      (f) => f.previewUrl || (f.type.startsWith("video/") && f.file),
    );
    const fsIdx = fsFiles.findIndex((f) => f.id === this._previewFileId);
    return html`
      <div
        class="fs-overlay ${this._fsZoom > 1 ? "zoomed" : ""} ${this._fsDragging ? "panning" : ""}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile
          ? html`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${(e: Event) => e.stopPropagation()}></video>`
          : html`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${cspStyle(this._fsZoom > 1 ? { transform: `scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)` } : null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${(e: Event) => e.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom >= SfxUploader._FS_ZOOM_LEVELS[SfxUploader._FS_ZOOM_LEVELS.length - 1] ? t('resetZoom', 'Reset zoom') : t('zoomIn', 'Zoom in ({{zoom}}×)', { zoom: this._fsZoom })}>
          ${this._fsZoom >= SfxUploader._FS_ZOOM_LEVELS[SfxUploader._FS_ZOOM_LEVELS.length - 1]
            ? html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`
            : html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${t('close', 'Close')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${fsIdx <= 0} @click=${(e: Event) => { e.stopPropagation(); this._navigateFs(-1); }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${fsIdx >= fsFiles.length - 1} @click=${(e: Event) => { e.stopPropagation(); this._navigateFs(1); }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `;
  }

  private _renderInlineHeader(ih: InlineHeaderConfig) {
    return html`
      <div class="inline-header">
        <div class="inline-header-top">
          ${ih.accent
            ? html`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${ih.accent}</span>
                </div>
              `
            : nothing}
          ${ih.title
            ? html`<h2 class="inline-header-title">${ih.title}</h2>`
            : nothing}
        </div>
        ${ih.description
          ? html`<div class="inline-header-desc">${ih.description}</div>`
          : nothing}
      </div>
    `;
  }

  private _renderHeader() {
    if (this._phase === "complete") return nothing;
    const t = this._storeCtrl.state.t;
    const mode = this.config?.mode ?? "modal";
    if (this._phase === "uploading") {
      const s = this._storeCtrl.state;
      const files = [...s.files.values()];
      const activeFiles = files.filter((f) => f.status !== "rejected" && f.status !== "cancelled");
      const total = activeFiles.length;
      const completed = activeFiles.filter((f) => f.status === "complete").length;
      return html`
        <div class="header upload-header">
          <div class="float-header-left">
            <div class="float-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>
            <div>
              <div class="float-title">
                ${t('uploadingFiles', { count: total, defaultValue_one: 'Uploading {{count}} file', defaultValue_other: 'Uploading {{count}} files' })}
              </div>
              <div class="float-subtitle">
                ${t('nOfNComplete', '{{completed}} of {{total}} complete', { completed, total })}${this._lastEta > 0 ? ` · ${t('etaLeft', '~{{eta}} left', { eta: formatEta(this._lastEta) })}` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    // Inline + branded header: rendered inside _renderBody(), skip standard header here
    if (mode === "inline" && this.config?.inlineHeader) return nothing;
    const header = this.config?.header ?? (mode === "modal" ? "close" : true);
    if (header === false) return nothing;
    const dismiss =
      mode === "modal" ? this._onModalDismiss : this._onInlineDismiss;

    const backBtn =
      header === "back"
        ? html`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
            @click=${dismiss}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>`
        : nothing;

    const closeBtn =
      header === "close"
        ? html`<button
            class="header-btn header-btn-close"
            aria-label="Close"
            @click=${dismiss}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>`
        : nothing;

    return html`
      <div class="header">
        ${backBtn}
        ${header !== "back"
          ? html` <div class="header-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
              </svg>
            </div>`
          : nothing}
        <div class="header-title">${t('uploadFiles', 'Upload Files')}</div>
        ${closeBtn}
      </div>
    `;
  }

  private _dimCache = new Map<string, { w: number; h: number } | null>();

  private _getImageDimensions(
    file: UploadFile,
  ): Promise<{ w: number; h: number } | null> {
    if (!file.previewUrl) return Promise.resolve(null);
    if (this._dimCache.has(file.id))
      return Promise.resolve(this._dimCache.get(file.id)!);
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const dims = { w: img.naturalWidth, h: img.naturalHeight };
        this._dimCache.set(file.id, dims);
        resolve(dims);
      };
      img.onerror = () => {
        this._dimCache.set(file.id, null);
        resolve(null);
      };
      img.src = file.previewUrl!;
    });
  }

  private _renderUploadOverlay(files: UploadFile[]) {
    const s = this._storeCtrl.state;
    const t = s.t;
    const pct = Math.round(s.totalProgress ?? 0);
    // Exclude rejected/cancelled files — they are not part of the active upload
    const activeFiles = files.filter((f) => f.status !== "rejected" && f.status !== "cancelled");
    const total = activeFiles.length;
    const completed = activeFiles.filter((f) => f.status === "complete").length;

    return html`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${pct}%</div>
        <div class="upload-overlay-title">
          ${t('uploadingFiles', { count: total, defaultValue_one: 'Uploading {{count}} file', defaultValue_other: 'Uploading {{count}} files' })}
        </div>
        <div class="upload-overlay-subtitle">
          ${t('nOfNComplete', '{{completed}} of {{total}} complete', { completed, total })}${this._lastEta > 0 ? html` · ${t('etaLeft', '~{{eta}} left', { eta: formatEta(this._lastEta) })}` : nothing}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" ${cspStyle({ width: `${pct}%` })}></div>
        </div>
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${t('cancelUpload', 'Cancel upload')}
          </button>
          ${this.config?.minimizeOnUpload
            ? html`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${t('minimizeAndContinue', 'Minimize & continue in background')}
              </button>`
            : nothing}
        </div>
      </div>
    `;
  }

  private _renderFloatingPill(files: UploadFile[]) {
    const s = this._storeCtrl.state;
    const t = s.t;
    const pct = Math.round(s.totalProgress ?? 0);
    const isDone = this._phase === "complete";
    const completed = files.filter((f) => f.status === "complete").length;
    const failed = files.filter((f) => f.status === "failed").length;

    // Collapsed pill — compact white bar
    if (this._isPillExpanded === false) {
      return html`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${isDone
              ? failed > 0
                ? completed > 0
                  ? html`<div class="float-collapsed-icon warn">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>`
                  : html`<div class="float-collapsed-icon error">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>`
                : html`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>`
              : html`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${isDone
                ? failed > 0
                  ? completed > 0
                    ? t('partiallyUploaded', 'Partially uploaded')
                    : t('uploadFailed', 'Upload failed')
                  : t('uploadComplete', 'Upload complete')
                : t('uploadingFiles', { count: files.length, defaultValue_one: 'Uploading {{count}} file', defaultValue_other: 'Uploading {{count}} files' })}</span
            >
            ${!isDone
              ? html`<span class="float-collapsed-pct">${pct}%</span>`
              : nothing}
          </div>
          <div class="float-collapsed-actions">
            <button title=${t('openUploader', 'Open uploader')} @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${t('expand', 'Expand')} @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button title=${t('close', 'Close')} @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      `;
    }

    // Expanded card
    return html`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${isDone
                ? failed > 0
                  ? completed > 0
                    ? "warn"
                    : "error"
                  : "done"
                : ""}"
            >
              ${isDone
                ? failed > 0
                  ? completed > 0
                    ? html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>`
                    : html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>`
                  : html`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>`
                : html`<svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                  </svg>`}
            </div>
            <div>
              <div class="float-title">
                ${isDone
                  ? failed > 0
                    ? completed > 0
                      ? t('partiallyUploaded', 'Partially uploaded')
                      : t('uploadFailed', 'Upload failed')
                    : t('uploadComplete', 'Upload complete')
                  : t('uploadingFiles', { count: files.length, defaultValue_one: 'Uploading {{count}} file', defaultValue_other: 'Uploading {{count}} files' })}
              </div>
              <div class="float-subtitle">
                ${isDone
                  ? `${t('filesUploaded', { count: completed, defaultValue_one: '{{count}} file uploaded', defaultValue_other: '{{count}} files uploaded' })}${failed > 0 ? `, ${t('nFailed', '{{count}} failed', { count: failed })}` : ""}`
                  : `${t('nOfNComplete', '{{completed}} of {{total}} complete', { completed, total: files.length })}${this._lastEta > 0 ? ` · ${t('etaLeft', '~{{eta}} left', { eta: formatEta(this._lastEta) })}` : ""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            <button title=${t('expand', 'Expand')} @click=${this._onPillExpand}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${t('collapse', 'Collapse')} @click=${this._onPillClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button title=${t('close', 'Close')} @click=${this._onPillDismiss}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">Overall progress</span>
            <span
              class="float-progress-pct ${isDone
                ? failed > 0
                  ? completed > 0
                    ? "warn"
                    : "error"
                  : "done"
                : ""}"
              >${isDone ? "Done" : `${pct}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${isDone
                ? failed > 0
                  ? completed > 0
                    ? "warn"
                    : "error"
                  : "done"
                : ""}"
              ${cspStyle({ width: `${isDone ? 100 : pct}%` })}
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${files.map((f) => {
            const isFailed = f.status === "failed" || f.status === "error";
            return html`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${cspStyle(f.previewUrl ? { 'background-image': `url(${f.previewUrl})`, 'background-size': 'cover', 'background-position': 'center' } : null)}
                >
                  ${!f.previewUrl
                    ? html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>`
                    : nothing}
                </div>
                <div class="float-item-info">
                  <div class="float-item-name">${f.name}</div>
                  <div class="float-item-size">${formatFileSize(f.size)}</div>
                </div>
                <div class="float-item-status">
                  ${f.status === "complete"
                    ? html`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>`
                    : isFailed
                    ? html` <div class="float-item-error-wrap">
                          <svg
                            class="float-item-error-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span class="float-item-tooltip"
                            >${f.error || "Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${() => {
                            this._ensureEngine();
                            this._engine?.retryFile(f.id);
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M21 2v6h-6" />
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                            <path d="M3 22v-6h6" />
                            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                          </svg>
                        </button>`
                    : f.status === "paused"
                    ? html`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d97706"
                        stroke-width="2"
                        width="16"
                        height="16"
                      >
                        <rect
                          x="6"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                        <rect
                          x="14"
                          y="4"
                          width="4"
                          height="16"
                          rx="1"
                          fill="#d97706"
                        />
                      </svg>`
                    : html`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  private _onSplitPointerDown = (e: PointerEvent) => {
    e.preventDefault();
    this._isResizing = true;
    const layout = this.shadowRoot?.querySelector(
      ".preview-layout",
    ) as HTMLElement;
    layout?.classList.add("resizing");
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  private _onSplitPointerMove = (e: PointerEvent) => {
    if (!this._isResizing) return;
    if (this._splitRafId) return;
    const clientX = e.clientX;
    this._splitRafId = requestAnimationFrame(() => {
      this._splitRafId = 0;
      const layout = this.shadowRoot?.querySelector(
        ".preview-layout",
      ) as HTMLElement;
      if (!layout) return;
      const rect = layout.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      this._splitPct = Math.max(25, Math.min(75, pct));
    });
  };

  private _onSplitPointerUp = () => {
    this._isResizing = false;
    if (this._splitRafId) {
      cancelAnimationFrame(this._splitRafId);
      this._splitRafId = 0;
    }
    const layout = this.shadowRoot?.querySelector(
      ".preview-layout",
    ) as HTMLElement;
    layout?.classList.remove("resizing");
  };

  private _renderPreviewLayout(files: UploadFile[]) {
    if (files.length === 0) return nothing;
    const t = this._storeCtrl.state.t;
    const previewFile =
      files.find((f) => f.id === this._previewFileId) ?? files[0];
    const ext = previewFile.name.split(".").pop()?.toUpperCase() || "";
    const addedDate = new Date(previewFile.addedAt).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" },
    );

    const targetFolder = this._store.getState().targetFolder;
    const totalSize = files.reduce((sum, f) => sum + (f.size || 0), 0);
    return html`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${cspStyle({ flex: String(this._splitPct) })}>
          ${this.config?.mode === "inline" && this.config?.inlineHeader
            ? this._renderInlineHeader(this.config.inlineHeader)
            : nothing}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${files.length} ${files.length === 1 ? "asset" : "assets"} ·
              ${formatFileSize(totalSize)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${files}
            .showDropTile=${true}
            .sources=${this._mergedSources}
            .accept=${buildAcceptString(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            ?drag-active=${this._bodyDragOver}
            @source-click=${this._onDropTileSourceClick}
          ></sfx-file-list>
        </div>
        <div
          class="preview-divider"
          @pointerdown=${this._onSplitPointerDown}
          @pointermove=${this._onSplitPointerMove}
          @pointerup=${this._onSplitPointerUp}
          @lostpointercapture=${this._onSplitPointerUp}
        ></div>
        <div class="preview-panel" ${cspStyle({ flex: String(100 - this._splitPct) })}>
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${() => {
                this._previewFileId = null;
              }}
              aria-label=${t('backToFileList', 'Back to file list')}
              title=${t('back', 'Back')}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <span class="preview-header-name" title=${previewFile.name}
              >${previewFile.name}</span
            >
            <div class="preview-header-actions">
              ${previewFile.previewUrl ||
              (previewFile.type.startsWith("video/") && previewFile.file)
                ? html`
                    <button
                      @click=${() => {
                        this._fullscreenPreviewUrl = previewFile.previewUrl;
                        this._fullscreenVideoFile =
                          previewFile.type.startsWith("video/") &&
                          previewFile.file
                            ? previewFile.file
                            : null;
                        this._fsZoom = 1;
                        // Force a second paint — on mobile WebKit the
                        // first paint of the fs-overlay sometimes skips
                        // the fixed-positioned toolbar/nav buttons until
                        // the user interacts. requestAnimationFrame +
                        // requestUpdate fixes it.
                        requestAnimationFrame(() => this.requestUpdate());
                      }}
                      title=${t('fullscreen', 'Fullscreen')}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  `
                : nothing}
              <button
                @click=${() => {
                  this._previewFileId = null;
                }}
                title=${t('close', 'Close')}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          ${previewFile.type.startsWith("video/") && previewFile.file
            ? html`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(previewFile.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${files.indexOf(previewFile) === 0}
                    @click=${() => this._navigatePreview(files, -1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${files.indexOf(previewFile) === files.length - 1}
                    @click=${() => this._navigatePreview(files, 1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `
            : previewFile.previewUrl
            ? html`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${previewFile.previewUrl}
                      alt=${previewFile.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${files.indexOf(previewFile) === 0}
                    @click=${() => this._navigatePreview(files, -1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${files.indexOf(previewFile) === files.length - 1}
                    @click=${() => this._navigatePreview(files, 1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `
            : html`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${getFileCategory(previewFile)}">
                    <img
                      class="preview-doc-type-img"
                      src=${getFileTypeIconUrl(ext)}
                      alt="${ext ? `${ext} file` : "File"}"
                      @error=${(e: Event) => {
                        const img = e.target as HTMLImageElement;
                        const fallback = getDefaultFileTypeIconUrl();
                        if (!img.dataset.fallback && img.src !== fallback) {
                          img.dataset.fallback = "1";
                          img.src = fallback;
                        }
                      }}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${files.indexOf(previewFile) === 0}
                    @click=${() => this._navigatePreview(files, -1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    class="preview-nav next"
                    ?disabled=${files.indexOf(previewFile) === files.length - 1}
                    @click=${() => this._navigatePreview(files, 1)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              `}
          ${this._metadataSchema && this.config?.metadataConfig
            ? html`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${ext}${previewFile.size
                    ? ` \u00B7 ${formatFileSize(previewFile.size)}`
                    : ""}${this._previewDims !== "\u2014"
                    ? ` \u00B7 ${this._previewDims}`
                    : ""}
                </div>
              </div>`
            : nothing}
          ${this._metadataSchema && this.config?.metadataConfig
            ? html`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${previewFile.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `
            : html`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen
                      ? "open"
                      : ""}"
                    @click=${() => {
                      this._fileInfoOpen = !this._fileInfoOpen;
                    }}
                  >
                    <span>${t('fileInfo', 'File info')}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div
                    class="preview-file-info-body ${this._fileInfoOpen
                      ? "open"
                      : ""}"
                  >
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${t('fileName', 'File name')}</div>
                      <div class="preview-file-info-val">
                        ${previewFile.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${t('type', 'Type')}</div>
                      <div class="preview-file-info-val">${ext}</div>
                    </div>
                    ${previewFile.size
                      ? html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t('size', 'Size')}</div>
                            <div class="preview-file-info-val">
                              ${formatFileSize(previewFile.size)}
                            </div>
                          </div>
                        `
                      : nothing}
                    ${this._previewDims !== "\u2014"
                      ? html`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t('dimensions', 'Dimensions')}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `
                      : nothing}
                  </div>
                </div>
              `}
        </div>
      </div>
    `;
  }

  private _navigatePreview(files: UploadFile[], direction: -1 | 1) {
    const idx = files.findIndex((f) => f.id === this._previewFileId);
    const next = idx + direction;
    if (next >= 0 && next < files.length) {
      // Pause any playing video before switching
      const video = this.shadowRoot?.querySelector(
        ".preview-image[controls]",
      ) as HTMLVideoElement | null;
      if (video) {
        video.pause();
        video.removeAttribute("src");
        video.load();
      }
      this._previewFileId = files[next].id;
    }
  }

  private _renderBody() {
    const s = this._storeCtrl.state;
    const t = s.t;
    const files = [...s.files.values()];
    const uploadableFiles = files.filter(
      (f) => f.status === "idle" || f.status === "queued" || f.status === "error" || f.status === "failed",
    );
    const phase = this._phase;
    const accept = buildAcceptString(s.restrictions);
    const hasFiles = files.length > 0;

    return html`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-locate=${this._onFileLocate}
        @file-copy-cdn=${this._onFileCopyCdn}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
        @fill-metadata=${this._onFillMetadata}
        @require-metadata=${this._onFillMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @upload-start=${this._onUploadStart}
        @upload-more=${this._onUploadMore}
        @primary-action=${this._onPrimaryAction}
        @connector-files-selected=${this._onConnectorFilesSelected}
        @connector-close=${this._onConnectorClose}
        @url-submit=${this._onUrlSubmit}
        @url-cancel=${this._onUrlCancel}
        @camera-capture=${this._onCameraCapture}
        @camera-cancel=${this._onCameraCancel}
        @screencast-capture=${this._onScreenCastCapture}
        @screencast-cancel=${this._onScreenCastCancel}
      >
        <div
          class="body ${hasFiles ? "has-files" : ""} ${this._bodyDragOver
            ? "body-drag-over"
            : ""} ${this._previewFileId ? "has-preview" : ""}"
          @dragenter=${hasFiles ? this._onBodyDragEnter : nothing}
          @dragover=${hasFiles ? this._onBodyDragOver : nothing}
          @dragleave=${hasFiles ? this._onBodyDragLeave : nothing}
          @drop=${hasFiles ? this._onBodyDrop : nothing}
        >
          ${this.config?.mode === "inline" &&
          this.config?.inlineHeader &&
          !this._previewFileId &&
          phase !== "uploading" &&
          phase !== "complete" &&
          !this._isReviewing
            ? this._renderInlineHeader(this.config.inlineHeader)
            : nothing}
          ${this._isReviewing
            ? html`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .getLocateUrl=${this.config?.getLocateUrl}
                  .showLocateButton=${this.config?.showLocateButton ?? false}
                  .showCopyCdnButton=${this.config?.showCopyCdnButton ?? false}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `
            : phase === "complete"
            ? html`
                <sfx-success-card
                  .t=${t}
                  .primaryLabel=${t('done', 'Done')}
                  .fileCount=${files.filter((f) => f.status === "complete")
                    .length}
                  .totalSize=${files
                    .filter((f) => f.status === "complete" && !f.alreadyExisted)
                    .reduce((sum, f) => sum + (f.size || 0), 0)}
                  .thumbnails=${files
                    .filter((f) => f.status === "complete" && f.previewUrl)
                    .map((f) => f.previewUrl!)}
                  .failedFiles=${files
                    .filter((f) => f.status === "failed")
                    .map((f) => ({
                      id: f.id,
                      name: f.name,
                      error: f.error || "Upload failed",
                    }))}
                  .alreadyExistedCount=${files.filter(
                    (f) => f.status === "complete" && f.alreadyExisted,
                  ).length}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `
            : phase === "uploading"
            ? this._renderUploadOverlay(files)
            : html`
                ${hasFiles
                  ? nothing
                  : html`<sfx-drop-zone
                        .t=${t}
                        .compact=${hasFiles}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${accept}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${this.config?.sourcesLayout ?? "pills"}
                        .mode=${this.config?.mode ?? "modal"}
                        .multi=${this._allowMulti}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview
                        ? html`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t('viewLastUploadBatch', 'View last upload batch')}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t('viewLastUpload', 'View last upload')}
                          </button>`
                        : nothing}`}
                ${hasFiles
                  ? this._previewFileId
                    ? this._renderPreviewLayout(files)
                    : html`
                        <div class="asset-count">
                          ${files.length}
                          ${files.length === 1 ? "file" : "files"} ·
                          ${formatFileSize(
                            files.reduce((sum, f) => sum + (f.size || 0), 0),
                          )}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${files}
                          .showDropTile=${true}
                          .sources=${this._mergedSources}
                          .accept=${accept}
                          .multi=${this._allowMulti}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `
                  : nothing}
              `}
        </div>

        ${hasFiles && phase !== "complete" && phase !== "uploading"
          ? html`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${"idle" as const}
                .fileCount=${uploadableFiles.length}
                .totalSize=${uploadableFiles.reduce((sum, f) => sum + (f.size || 0), 0)}
                .failedCount=${files.filter(
                  (f) => f.status === "failed" || f.status === "error",
                ).length}
                .completedCount=${files.filter((f) => f.status === "complete")
                  .length}
                .uploadProgress=${s.totalProgress ?? 0}
                .showFillMetadata=${!!(
                  this.config?.showFillMetadata ?? this.config?.metadataConfig
                )}
                .requireMetadataFirst=${this._hasUnfilledRequiredMetadata}
              ></sfx-actions-bar>
            `
          : nothing}
        ${this._showUrlDialog
          ? html`<sfx-url-dialog .t=${t}></sfx-url-dialog>`
          : nothing}
        ${this._showCameraDialog
          ? html`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>`
          : nothing}
        ${this._showScreenCastDialog
          ? html`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>`
          : nothing}
        ${this._activeConnector && this.config?.connectors
          ? html`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${SEARCH_PROVIDERS.has(this._activeConnector)
                    ? html`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this
                            ._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      `
                    : html`
                        <sfx-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this
                            ._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `
          : nothing}
        ${this._bulkMetadataOpen && this._metadataSchema
          ? html`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(
                  (f) => SfxUploader._MODIFIABLE_STATUSES.has(f.status),
                )}
                .config=${this.config?.metadataConfig ?? null}
                .autocomplete=${this._metadataAutocomplete}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `
          : nothing}
      </div>
    `;
  }

  private _onFsToggleZoom = (e?: Event) => {
    e?.stopPropagation();
    const levels = SfxUploader._FS_ZOOM_LEVELS;
    const i = levels.indexOf(this._fsZoom as (typeof levels)[number]);
    const next = i === -1 ? 1 : (i + 1) % levels.length;
    this._fsZoom = levels[next];
    if (this._fsZoom === 1) {
      this._fsPanX = 0;
      this._fsPanY = 0;
    }
  };

  private _onFsOverlayClick = (e: MouseEvent) => {
    // Don't toggle zoom if user was panning
    if (this._fsDragDidMove) return;
    this._onFsToggleZoom(e);
  };

  // --- Pan (mouse) ---
  private _fsDragDidMove = false;

  private _onFsPanStart = (e: MouseEvent) => {
    if (this._fsZoom <= 1) return;
    this._fsDragging = true;
    this._fsDragDidMove = false;
    this._fsDragStartX = e.clientX;
    this._fsDragStartY = e.clientY;
    this._fsPanStartX = this._fsPanX;
    this._fsPanStartY = this._fsPanY;
    e.preventDefault();
  };

  private _onFsPanMove = (e: MouseEvent) => {
    if (!this._fsDragging) return;
    const dx = e.clientX - this._fsDragStartX;
    const dy = e.clientY - this._fsDragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) this._fsDragDidMove = true;
    this._fsPanX = this._fsPanStartX + dx;
    this._fsPanY = this._fsPanStartY + dy;
    this.requestUpdate();
  };

  private _onFsPanEnd = () => {
    this._fsDragging = false;
    // Reset _fsDragDidMove after a tick so the click event (which fires after mouseup) can still read it
    requestAnimationFrame(() => {
      this._fsDragDidMove = false;
    });
  };

  // --- Pan (touch) ---
  private _onFsTouchStart = (e: TouchEvent) => {
    if (this._fsZoom <= 1 || e.touches.length !== 1) return;
    const t = e.touches[0];
    this._fsDragging = true;
    this._fsDragDidMove = false;
    this._fsDragStartX = t.clientX;
    this._fsDragStartY = t.clientY;
    this._fsPanStartX = this._fsPanX;
    this._fsPanStartY = this._fsPanY;
  };

  private _onFsTouchMove = (e: TouchEvent) => {
    if (!this._fsDragging || e.touches.length !== 1) return;
    const t = e.touches[0];
    const dx = t.clientX - this._fsDragStartX;
    const dy = t.clientY - this._fsDragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) this._fsDragDidMove = true;
    this._fsPanX = this._fsPanStartX + dx;
    this._fsPanY = this._fsPanStartY + dy;
    this.requestUpdate();
    e.preventDefault();
  };

  private _navigateFs(direction: -1 | 1) {
    const files = [...this._store.getState().files.values()].filter(
      (f) => f.previewUrl || (f.type.startsWith("video/") && f.file),
    );
    const idx = files.findIndex((f) => f.id === this._previewFileId);
    if (idx === -1) return;
    const next = idx + direction;
    if (next >= 0 && next < files.length) {
      const nextFile = files[next];
      this._fullscreenPreviewUrl = nextFile.previewUrl;
      this._fullscreenVideoFile =
        nextFile.type.startsWith("video/") && nextFile.file
          ? nextFile.file
          : null;
      this._previewFileId = nextFile.id;
      this._fsZoom = 1;
      this._fsPanX = 0;
      this._fsPanY = 0;
    }
  }

  private _onFsClose = (e?: Event) => {
    e?.stopPropagation();
    this._fullscreenPreviewUrl = null;
    this._fullscreenVideoFile = null;
    this._fsZoom = 1;
    this._fsPanX = 0;
    this._fsPanY = 0;
  };

  private _getVideoBlobUrl(file: File): string {
    let url = this._videoBlobUrls.get(file);
    if (!url) {
      url = URL.createObjectURL(file);
      this._videoBlobUrls.set(file, url);
    }
    return url;
  }

  private _revokeVideoBlobUrls() {
    for (const url of this._videoBlobUrls.values()) URL.revokeObjectURL(url);
    this._videoBlobUrls.clear();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sfx-uploader": SfxUploader;
  }
}
