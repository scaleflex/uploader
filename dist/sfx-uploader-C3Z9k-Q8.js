import { LitElement as U, css as S, svg as R, html as l, render as T, nothing as c } from "lit";
import { property as b, state as g, query as je } from "lit/decorators.js";
import { unsafeSVG as O } from "lit/directives/unsafe-svg.js";
import { unsafeHTML as M } from "lit/directives/unsafe-html.js";
class Oe {
  constructor(e) {
    this.listeners = /* @__PURE__ */ new Set(), this._notifying = !1, this._pendingState = null, this.state = e;
  }
  getState() {
    return this.state;
  }
  setState(e) {
    if (this._notifying) {
      this._pendingState = { ...this._pendingState || {}, ...e };
      return;
    }
    const t = this.state;
    this.state = { ...t, ...e }, this._notifying = !0;
    try {
      this.listeners.forEach((i) => i(this.state, t));
    } finally {
      this._notifying = !1;
    }
    if (this._pendingState) {
      const i = this._pendingState;
      this._pendingState = null, this.setState(i);
    }
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  destroy() {
    this.listeners.clear();
  }
}
function P(a, e, t) {
  const i = a.getState().files, r = i.get(e);
  if (!r) return;
  const o = new Map(i);
  o.set(e, { ...r, ...t }), a.setState({ files: o });
}
function H(a, e) {
  const t = new Map(a.getState().files);
  t.set(e.id, e), a.setState({ files: t });
}
function Ce(a, e) {
  const t = a.getState().files;
  if (!t.has(e)) return;
  const i = new Map(t);
  i.delete(e), a.setState({ files: i });
}
function Re() {
  return new Oe({
    files: /* @__PURE__ */ new Map(),
    queueConfig: {
      concurrency: 3,
      autoProceed: !1,
      retryConfig: {
        maxRetries: 0,
        baseDelay: 1e3,
        maxDelay: 3e4,
        backoffFactor: 2
      }
    },
    isPaused: !1,
    restrictions: {
      maxFileSize: null,
      maxTotalFilesSize: null,
      maxNumberOfFiles: null,
      minNumberOfFiles: null,
      allowedFileTypes: null,
      blockedFileTypes: null
    },
    targetFolder: "/",
    totalProgress: 0,
    totalSpeed: 0,
    totalBytesUploaded: 0,
    totalBytes: 0,
    isUploading: !1
  });
}
class Me {
  constructor(e, t) {
    this.host = e, this.store = t, e.addController(this);
  }
  get state() {
    return this.store.getState();
  }
  setState(e) {
    this.store.setState(e);
  }
  hostConnected() {
    this.unsubscribe = this.store.subscribe(() => {
      this.host.requestUpdate();
    });
  }
  hostDisconnected() {
    var e;
    (e = this.unsubscribe) == null || e.call(this);
  }
}
function Te(a, e) {
  const t = new XMLHttpRequest();
  let i = !1;
  const o = `${e.apiBase.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e.folder)}`;
  t.open("POST", o);
  for (const [n, d] of Object.entries(e.authHeaders))
    t.setRequestHeader(n, d);
  t.upload.addEventListener("progress", (n) => {
    n.lengthComputable && !i && e.onProgress(n.loaded, n.total);
  }), t.addEventListener("load", () => {
    if (i) return;
    let n;
    try {
      n = JSON.parse(t.responseText);
    } catch {
      e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));
      return;
    }
    t.status >= 200 && t.status < 300 && n.status === "success" ? e.onComplete(n) : e.onError(new Error(n.hint || n.msg || `Upload failed (HTTP ${t.status})`));
  }), t.addEventListener("error", () => {
    i || e.onError(new Error("Network error — check your connection"));
  }), t.addEventListener("timeout", () => {
    i || e.onError(new Error("Upload timed out"));
  });
  const s = new FormData();
  if (a.file) {
    const n = {
      name: a.name,
      type: a.type
    };
    Object.keys(a.meta).length > 0 && (n.meta = a.meta), a.tags.length > 0 && (n.tags = a.tags), s.append("info[files[]]", JSON.stringify(n)), s.append("files[]", a.file, a.name);
  }
  return t.timeout = 6e4, t.send(s), {
    abort() {
      i = !0, t.abort();
    }
  };
}
function Be(a, e) {
  const t = new XMLHttpRequest();
  let i = !1;
  const o = `${e.apiBase.replace(/\/+$/, "")}/v4/files/upload_url`;
  t.open("POST", o);
  for (const [n, d] of Object.entries(e.authHeaders))
    t.setRequestHeader(n, d);
  if (t.setRequestHeader("Content-Type", "application/json"), t.addEventListener("load", () => {
    if (i) return;
    let n;
    try {
      n = JSON.parse(t.responseText);
    } catch {
      e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));
      return;
    }
    t.status >= 200 && t.status < 300 && n.status === "success" ? e.onComplete(n) : e.onError(new Error(n.hint || n.msg || `Upload failed (HTTP ${t.status})`));
  }), t.addEventListener("error", () => {
    i || e.onError(new Error("Network error — check your connection"));
  }), t.addEventListener("timeout", () => {
    i || e.onError(new Error("Upload timed out"));
  }), !a.remoteUrl)
    return e.onError(new Error("Remote URL is required for URL upload")), { abort() {
    } };
  const s = {
    files_urls: [{ url: a.remoteUrl, name: a.name }],
    dir: e.folder
  };
  return t.timeout = 6e4, t.send(JSON.stringify(s)), {
    abort() {
      i = !0, t.abort();
    }
  };
}
function re(a) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "uppy-auth-token": a
  };
}
function N(a) {
  return a.replace(/\/+$/, "");
}
const Le = {
  "google-drive": "drive",
  dropbox: "dropbox",
  onedrive: "onedrive",
  box: "box",
  instagram: "instagram",
  facebook: "facebook",
  unsplash: "unsplash"
};
function G(a) {
  return Le[a] ?? a;
}
function wt(a, e) {
  const t = N(a), i = btoa(JSON.stringify({ origin: window.location.origin })), r = G(e);
  return `${t}/${r}/connect?state=${encodeURIComponent(i)}`;
}
async function yt(a, e, t, i = "") {
  const r = N(a), o = i ? `/${i}` : "", s = G(e), n = await fetch(`${r}/${s}/list${o}`, {
    method: "GET",
    headers: re(t),
    credentials: "same-origin"
  });
  if (n.status === 401)
    throw new de();
  if (!n.ok) {
    const d = await n.json().catch(() => null);
    throw new Error((d == null ? void 0 : d.message) || `Companion list failed (HTTP ${n.status})`);
  }
  return n.json();
}
async function _t(a, e, t) {
  const i = N(a), r = await fetch(`${i}/${t}`, {
    method: "GET",
    headers: re(e),
    credentials: "same-origin"
  });
  if (r.status === 401)
    throw new de();
  if (!r.ok) {
    const o = await r.json().catch(() => null);
    throw new Error((o == null ? void 0 : o.message) || `Companion list failed (HTTP ${r.status})`);
  }
  return r.json();
}
async function kt(a, e, t, i) {
  const r = N(a), o = G(e), s = i ? `q=${encodeURIComponent(t)}&${i}` : `q=${encodeURIComponent(t)}`, n = await fetch(`${r}/search/${o}/list?${s}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  });
  if (!n.ok) {
    const d = await n.json().catch(() => null);
    throw new Error((d == null ? void 0 : d.message) || `Search failed (HTTP ${n.status})`);
  }
  return n.json();
}
async function Ae(a, e, t, i, r, o = !1) {
  const s = N(a), n = G(e), d = o ? `${s}/search/${n}/get/${i}` : `${s}/${n}/get/${i}`, p = o ? { Accept: "application/json", "Content-Type": "application/json" } : re(t), h = await fetch(d, {
    method: "POST",
    headers: p,
    credentials: "same-origin",
    body: JSON.stringify({
      ...r,
      httpMethod: r.httpMethod ?? "POST",
      useFormData: r.useFormData ?? !0,
      fieldname: r.fieldname ?? "files[]"
    })
  });
  if (h.status === 401)
    throw new de();
  if (!h.ok) {
    const u = await h.json().catch(() => null);
    throw new Error((u == null ? void 0 : u.message) || `Companion upload failed (HTTP ${h.status})`);
  }
  return h.json();
}
async function Ct(a, e, t) {
  const i = N(a), r = G(e), o = await fetch(`${i}/${r}/logout`, {
    method: "GET",
    headers: re(t),
    credentials: "same-origin"
  });
  return o.ok ? o.json() : { ok: !1, revoked: !1 };
}
function Ie(a) {
  var r;
  const t = ((r = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(a)) == null ? void 0 : r[1]) ?? a;
  return `${location.protocol === "https:" ? "wss" : "ws"}://${t}`;
}
class de extends Error {
  constructor() {
    super("Authentication expired"), this.name = "AuthExpiredError";
  }
}
function He(a, e) {
  const t = a.remoteInfo;
  if (!t)
    return e.onError(new Error("remoteInfo is required for companion upload")), { abort() {
    } };
  let i = !1, r = null;
  const s = `${e.apiBase.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e.folder)}`, n = {};
  a.meta && Object.keys(a.meta).length > 0 && Object.assign(n, a.meta), a.tags && a.tags.length > 0 && (n.tags = a.tags);
  const d = !t.token;
  return Ae(t.companionUrl, t.provider, t.token, t.requestPath, {
    fileId: t.fileId,
    endpoint: s,
    headers: e.authHeaders,
    size: t.size,
    metadata: Object.keys(n).length > 0 ? n : void 0
  }, d).then((p) => {
    if (i) return;
    const u = `${Ie(t.companionUrl)}/api/${p.token}`;
    try {
      r = new WebSocket(u);
    } catch {
      e.onError(new Error("Failed to connect to upload progress channel"));
      return;
    }
    r.onmessage = (x) => {
      var f, m, _;
      if (!i)
        try {
          const w = JSON.parse(x.data);
          switch (w.action) {
            case "progress": {
              const y = w.payload, C = y.bytesUploaded ?? 0, D = y.bytesTotal ?? (t.size || 1);
              e.onProgress(C, D);
              break;
            }
            case "success": {
              const y = w.payload;
              if (r == null || r.close(), (f = y.response) != null && f.responseText)
                try {
                  const C = JSON.parse(y.response.responseText);
                  if (C.status === "success") {
                    e.onComplete(C);
                    return;
                  }
                  e.onError(new Error(C.msg || "Upload failed"));
                  return;
                } catch {
                }
              e.onError(new Error("Upload completed but no valid response received"));
              break;
            }
            case "error": {
              r == null || r.close();
              const y = w.payload;
              let C = ((m = y.error) == null ? void 0 : m.message) || "Upload failed";
              if ((_ = y.response) != null && _.responseText)
                try {
                  const D = JSON.parse(y.response.responseText);
                  C = D.hint || D.msg || D.message || C;
                } catch {
                }
              e.onError(new Error(C));
              break;
            }
          }
        } catch {
        }
    }, r.onerror = () => {
      i || e.onError(new Error("Upload progress connection failed"));
    }, r.onclose = () => {
      r = null;
    };
  }).catch((p) => {
    i || e.onError(p instanceof Error ? p : new Error(String(p)));
  }), {
    abort() {
      if (i = !0, r) {
        try {
          r.send(JSON.stringify({ action: "cancel", payload: {} }));
        } catch {
        }
        r.close(), r = null;
      }
    }
  };
}
class qe {
  constructor(e, t) {
    this.activeUploads = /* @__PURE__ */ new Map(), this.retryTimers = /* @__PURE__ */ new Map(), this.unsubscribe = null, this.store = e, this.config = t;
  }
  /**
   * Start processing the queue. Subscribes to store changes to
   * automatically pick up newly queued files.
   */
  start() {
    this.unsubscribe || (this.unsubscribe = this.store.subscribe(() => this.processQueue()), this.processQueue());
  }
  /**
   * Upload all queued files. Transitions idle files → queued, then processes.
   */
  uploadAll() {
    const { files: e } = this.store.getState();
    let t = !1;
    for (const i of e.values())
      i.status === "idle" ? (P(this.store, i.id, { status: "queued" }), t = !0) : i.status === "queued" && (t = !0);
    t && (this.store.setState({ isUploading: !0 }), this.processQueue());
  }
  /**
   * Retry a single failed/errored file.
   */
  retryFile(e) {
    const t = this.store.getState().files.get(e);
    !t || t.status !== "error" && t.status !== "failed" || (P(this.store, e, {
      status: "queued",
      error: null,
      progress: 0,
      bytesUploaded: 0,
      speed: 0
    }), this.processQueue());
  }
  /**
   * Retry all failed/errored files.
   */
  retryAll() {
    const { files: e } = this.store.getState();
    for (const t of e.values())
      (t.status === "error" || t.status === "failed") && P(this.store, t.id, {
        status: "queued",
        error: null,
        progress: 0,
        bytesUploaded: 0,
        speed: 0
      });
    this.processQueue();
  }
  /**
   * Cancel a single file upload.
   */
  cancelFile(e) {
    const t = this.store.getState().files.get(e);
    !t || !$e(t.status) || (this.abortUpload(e), P(this.store, e, { status: "cancelled" }));
  }
  /**
   * Cancel all active/queued uploads.
   */
  cancelAll() {
    const { files: e } = this.store.getState();
    for (const t of e.values())
      $e(t.status) && (this.abortUpload(t.id), P(this.store, t.id, { status: "cancelled" }));
    this.store.setState({ isUploading: !1 });
  }
  /**
   * Update auth config (e.g. after SASS key renewal).
   */
  updateConfig(e) {
    Object.assign(this.config, e);
  }
  /**
   * Clean up: abort all uploads, clear timers, unsubscribe.
   */
  destroy() {
    var e;
    for (const t of this.activeUploads.keys())
      this.abortUpload(t);
    for (const t of this.retryTimers.values())
      clearTimeout(t);
    this.retryTimers.clear(), (e = this.unsubscribe) == null || e.call(this), this.unsubscribe = null;
  }
  // --- Private ---
  processQueue() {
    const e = this.store.getState();
    if (e.isPaused) return;
    const { concurrency: t } = e.queueConfig, i = this.activeUploads.size, r = t - i;
    if (r <= 0) return;
    const s = [...e.files.values()].filter((n) => n.status === "queued").sort((n, d) => n.retryCount !== d.retryCount ? d.retryCount - n.retryCount : n.addedAt - d.addedAt).slice(0, r);
    for (const n of s)
      this.startUpload(n);
  }
  startUpload(e) {
    P(this.store, e.id, { status: "uploading", error: null });
    let t = 0, i = Date.now(), r = 0;
    const o = {
      apiBase: this.config.apiBase,
      authHeaders: this.config.authHeaders,
      folder: this.store.getState().targetFolder,
      onComplete: (d) => this.handleComplete(e.id, d),
      onError: (d) => this.handleError(e.id, d)
    }, s = (d, p) => {
      const h = Date.now(), u = (h - i) / 1e3;
      if (u > 0) {
        const f = (d - t) / u;
        r = r === 0 ? f : 0.3 * f + 0.7 * r;
      }
      t = d, i = h;
      const x = p > 0 ? Math.min(d / p * 100, 100) : 0;
      P(this.store, e.id, { progress: x, bytesUploaded: d, speed: r }), this.updateTotalProgress();
    };
    let n;
    e.remoteInfo ? n = He(e, { ...o, onProgress: s }) : e.remoteUrl ? n = Be(e, o) : n = Te(e, { ...o, onProgress: s }), this.activeUploads.set(e.id, n);
  }
  handleComplete(e, t) {
    this.activeUploads.delete(e), P(this.store, e, {
      status: "complete",
      progress: 100,
      response: t
    }), this.updateTotalProgress(), this.checkAllComplete(), this.processQueue();
  }
  handleError(e, t) {
    this.activeUploads.delete(e);
    const i = this.store.getState().files.get(e);
    if (!i) return;
    const { retryConfig: r } = this.store.getState().queueConfig, o = i.retryCount + 1;
    if (o <= r.maxRetries) {
      const s = Math.min(
        r.baseDelay * Math.pow(r.backoffFactor, i.retryCount),
        r.maxDelay
      );
      P(this.store, e, {
        status: "retrying",
        error: t.message,
        retryCount: o
      });
      const n = setTimeout(() => {
        this.retryTimers.delete(e), P(this.store, e, { status: "queued" }), this.processQueue();
      }, s);
      this.retryTimers.set(e, n);
    } else
      P(this.store, e, {
        status: "failed",
        error: t.message
      }), this.checkAllComplete(), this.processQueue();
  }
  abortUpload(e) {
    var i;
    (i = this.activeUploads.get(e)) == null || i.abort(), this.activeUploads.delete(e);
    const t = this.retryTimers.get(e);
    t && (clearTimeout(t), this.retryTimers.delete(e));
  }
  updateTotalProgress() {
    const { files: e } = this.store.getState();
    let t = 0, i = 0, r = 0;
    for (const o of e.values())
      (o.status === "queued" || o.status === "uploading" || o.status === "retrying" || o.status === "complete" || o.status === "failed") && (t += o.size, i += o.status === "complete" ? o.size : o.bytesUploaded), o.status === "uploading" && (r += o.speed);
    this.store.setState({
      totalBytes: t,
      totalBytesUploaded: i,
      totalSpeed: r,
      totalProgress: t > 0 ? Math.min(i / t * 100, 100) : 0
    });
  }
  checkAllComplete() {
    const { files: e } = this.store.getState();
    ![...e.values()].some(
      (i) => i.status === "queued" || i.status === "uploading" || i.status === "retrying"
    ) && this.store.getState().isUploading && this.store.setState({ isUploading: !1 });
  }
}
function $e(a) {
  return a === "queued" || a === "uploading" || a === "retrying";
}
function pe(a) {
  return `https://api.filerobot.com/${a}`;
}
async function Ye(a, e) {
  const t = `${pe(a)}/key/${encodeURIComponent(e)}`, i = new AbortController(), r = setTimeout(() => i.abort(), 3e4);
  try {
    const o = await fetch(t, { signal: i.signal });
    if (clearTimeout(r), !o.ok)
      throw new Error(`SASS key exchange failed (HTTP ${o.status})`);
    const s = await o.json();
    if (s.status === "error")
      throw new Error(`SASS key exchange failed: ${s.msg || "Unknown error"}`);
    return s.key;
  } catch (o) {
    throw clearTimeout(r), o instanceof DOMException && o.name === "AbortError" ? new Error("SASS key exchange timed out") : o;
  }
}
function se(a, e) {
  const t = {};
  switch (a.mode) {
    case "security-template":
      if (!e)
        throw new Error(
          "[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key."
        );
      t["X-Filerobot-Key"] = e;
      break;
    case "sass-key":
      t["X-Filerobot-Key"] = a.sassKey;
      break;
  }
  return a.airboxPuid && (t["X-Filerobot-Airbox-Puid"] = a.airboxPuid), t;
}
async function Ve(a) {
  const e = pe(a.container);
  if (a.mode === "security-template") {
    const t = await Ye(a.container, a.securityTemplateId);
    return { apiBase: e, headers: se(a, t), sassKey: t };
  }
  return { apiBase: e, headers: se(a) };
}
const v = {
  FILE_ADDED: "sfx-file-added",
  FILE_REMOVED: "sfx-file-removed",
  FILE_REJECTED: "sfx-file-rejected",
  UPLOAD_STARTED: "sfx-upload-started",
  UPLOAD_PROGRESS: "sfx-upload-progress",
  UPLOAD_COMPLETE: "sfx-upload-complete",
  UPLOAD_ERROR: "sfx-upload-error",
  UPLOAD_RETRY: "sfx-upload-retry",
  ALL_COMPLETE: "sfx-all-complete",
  TOTAL_PROGRESS: "sfx-total-progress",
  BEFORE_UPLOAD: "sfx-before-upload",
  OPEN: "sfx-open",
  CLOSE: "sfx-close",
  CANCEL: "sfx-cancel",
  COMPLETE_ACTION: "sfx-complete-action",
  FILE_PREVIEW: "sfx-file-preview",
  FILL_METADATA: "sfx-fill-metadata"
};
let Ne = 0;
function q() {
  return `file-${Date.now()}-${++Ne}`;
}
function Y(a) {
  if (a <= 0) return "0 B";
  const e = ["B", "KB", "MB", "GB"], t = Math.min(Math.floor(Math.log(a) / Math.log(1024)), e.length - 1), i = a / Math.pow(1024, t);
  return `${t === 0 ? i : i.toFixed(1)} ${e[t]}`;
}
function oe(a) {
  if (!isFinite(a) || a <= 0) return "0s";
  const e = Math.round(a);
  if (e < 60) return `${e}s`;
  const t = Math.floor(e / 60), i = e % 60;
  return i > 0 ? `${t}m ${i}s` : `${t}m`;
}
function X(a) {
  var t;
  const e = ((t = a.name.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return a.type.startsWith("image/") ? "image" : a.type.startsWith("video/") || ["mp4", "mov", "avi", "webm", "mkv"].includes(e) ? "vid" : a.type === "application/pdf" || e === "pdf" ? "pdf" : ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "rtf", "odt"].includes(e) ? "doc" : ["zip", "rar", "7z", "tar", "gz", "bz2"].includes(e) ? "zip" : "gen";
}
function Xe(a) {
  const e = a.lastIndexOf(".");
  return e >= 0 ? a.slice(e + 1).toUpperCase() : "";
}
const We = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  bmp: "image/bmp",
  ico: "image/x-icon",
  mp4: "video/mp4",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  webm: "video/webm",
  pdf: "application/pdf",
  zip: "application/zip",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};
function Ke(a) {
  var t;
  const e = ((t = a.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return We[e] || "";
}
function Ge(a) {
  return new Promise((e) => {
    const t = document.createElement("video");
    t.preload = "metadata", t.muted = !0, t.playsInline = !0;
    const i = URL.createObjectURL(a);
    let r = !1;
    const o = () => {
      r || (r = !0, e(null)), t.removeAttribute("src"), t.load(), URL.revokeObjectURL(i);
    };
    t.addEventListener("seeked", () => {
      try {
        const s = document.createElement("canvas");
        s.width = t.videoWidth || 320, s.height = t.videoHeight || 240;
        const n = s.getContext("2d");
        if (n) {
          n.drawImage(t, 0, 0, s.width, s.height), s.toBlob((d) => {
            r || (r = !0, e(d ? URL.createObjectURL(d) : null), t.removeAttribute("src"), t.load(), URL.revokeObjectURL(i));
          }, "image/jpeg", 0.7);
          return;
        }
      } catch {
      }
      o();
    }, { once: !0 }), t.addEventListener("error", () => o(), { once: !0 }), setTimeout(() => o(), 5e3), t.src = i, t.addEventListener("loadeddata", () => {
      t.currentTime = 0.1;
    }, { once: !0 });
  });
}
function ae(a, e, t) {
  var i, r;
  if (e.maxFileSize != null && a.size > 0 && a.size > e.maxFileSize)
    return `File exceeds ${(e.maxFileSize / 1048576).toFixed(1)} MB limit`;
  if (e.maxTotalFilesSize != null && a.size > 0) {
    let o = a.size;
    for (const s of t.values())
      s.status !== "rejected" && s.status !== "cancelled" && (o += s.size);
    if (o > e.maxTotalFilesSize)
      return "Total file size limit exceeded";
  }
  if (e.maxNumberOfFiles != null) {
    let o = 0;
    for (const s of t.values())
      s.status !== "rejected" && s.status !== "cancelled" && o++;
    if (o >= e.maxNumberOfFiles)
      return `Maximum ${e.maxNumberOfFiles} files allowed`;
  }
  if (e.allowedFileTypes != null) {
    const o = e.allowedFileTypes, s = "." + (((i = a.name.split(".").pop()) == null ? void 0 : i.toLowerCase()) ?? "");
    if (!o.some((d) => d.startsWith(".") ? s === d.toLowerCase() : d.endsWith("/*") ? a.type.startsWith(d.slice(0, -1)) : a.type === d)) return "File type not allowed";
  }
  if (e.blockedFileTypes != null) {
    const o = e.blockedFileTypes, s = "." + (((r = a.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "");
    if (o.some((d) => d.startsWith(".") ? s === d.toLowerCase() : d.endsWith("/*") ? a.type.startsWith(d.slice(0, -1)) : a.type === d)) return "File type is blocked";
  }
  return null;
}
function Ze(a, e, t) {
  return ae(a, e, t);
}
function Se(a) {
  return a.allowedFileTypes ? a.allowedFileTypes.join(",") : "";
}
const Ee = {
  "google-drive": {
    id: "google-drive",
    label: "Google Drive",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'
  },
  dropbox: {
    id: "dropbox",
    label: "Dropbox",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'
  },
  onedrive: {
    id: "onedrive",
    label: "OneDrive",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'
  },
  box: {
    id: "box",
    label: "Box",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'
  },
  instagram: {
    id: "instagram",
    label: "Instagram",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'
  },
  facebook: {
    id: "facebook",
    label: "Facebook",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'
  },
  unsplash: {
    id: "unsplash",
    label: "Unsplash",
    fillIcon: !0,
    icon: "",
    brandHtml: '<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'
  }
};
function Je(a) {
  return a.filter((e) => e in Ee).map((e) => Ee[e]);
}
var Qe = Object.defineProperty, et = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && Qe(e, t, r), r;
};
const tt = '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', rt = '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>', it = '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>', ot = '<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>', W = [
  { id: "device", label: "My Device", icon: tt, iconColor: "#2563eb" },
  { id: "url", label: "URL link", icon: rt, iconColor: "#16a34a" },
  { id: "camera", label: "Camera", icon: it, iconColor: "#7c3aed" },
  { id: "screen-cast", label: "Screen capture", icon: ot, iconColor: "#ea580c" }
], he = class he extends U {
  constructor() {
    super(...arguments), this.sources = W;
  }
  _handleClick(e) {
    this.dispatchEvent(
      new CustomEvent("source-click", {
        detail: { source: e.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return l`
      ${this.sources.map(
      (e) => l`
          <button @click=${() => this._handleClick(e)}>
            ${e.brandHtml ? M(e.brandHtml) : R`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${O(e.icon)}</svg>`}
            ${e.label}
          </button>
        `
    )}
    `;
  }
};
he.styles = S`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 13px 24px;
      border-radius: 50px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.18s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    button:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    button:active {
      transform: translateY(0) scale(0.98);
    }

    :host > button > svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    :host > button > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }
  `;
let ne = he;
et([
  b({ type: Array })
], ne.prototype, "sources");
function Fe(a) {
  let e = a;
  for (; e; ) {
    if (e instanceof HTMLDialogElement && e.open)
      return e;
    e instanceof ShadowRoot ? e = e.host : e = e.parentNode;
  }
  return document.body;
}
var st = Object.defineProperty, j = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && st(e, t, r), r;
};
const ze = 3, ue = class ue extends U {
  constructor() {
    super(...arguments), this.compact = !1, this.externalDragOver = !1, this.accept = "", this.sources = [], this.sourcesLayout = "pills", this._dragOver = !1, this._moreOpen = !1, this._visiblePills = ze, this._dragCounter = 0, this._onDragEnter = (e) => {
      e.preventDefault(), this._dragCounter++, this._dragCounter === 1 && (this._dragOver = !0);
    }, this._onDragOver = (e) => {
      e.preventDefault();
    }, this._onDragLeave = (e) => {
      e.preventDefault(), this._dragCounter--, this._dragCounter <= 0 && (this._dragCounter = 0, this._dragOver = !1);
    }, this._onDrop = (e) => {
      var i;
      e.preventDefault(), e.stopPropagation(), this._dragCounter = 0, this._dragOver = !1;
      const t = Array.from(((i = e.dataTransfer) == null ? void 0 : i.files) ?? []);
      t.length > 0 && this._emitFiles(t);
    }, this._onClick = (e) => {
      const t = this.shadowRoot.querySelector(".drop-zone");
      if (t && this._rippleEl) {
        const i = t.getBoundingClientRect();
        this._rippleEl.style.left = `${e.clientX - i.left}px`, this._rippleEl.style.top = `${e.clientY - i.top}px`, this._rippleEl.classList.remove("go"), this._rippleEl.offsetWidth, this._rippleEl.classList.add("go");
      }
      this.browse();
    }, this._onKeyDown = (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.browse());
    }, this._onFileChange = (e) => {
      const t = e.target, i = Array.from(t.files ?? []);
      i.length > 0 && this._emitFiles(i), t.value = "";
    }, this._onPaste = (e) => {
      var r;
      if (!this.isConnected || this.offsetWidth === 0) return;
      const t = (r = e.clipboardData) == null ? void 0 : r.items;
      if (!t) return;
      const i = [];
      for (const o of t)
        if (o.kind === "file") {
          const s = o.getAsFile();
          s && i.push(s);
        }
      i.length > 0 && (e.preventDefault(), this._emitFiles(i));
    }, this._portalContainer = null, this._onDocClick = (e) => {
      var t;
      this._moreOpen && ((t = this._portalContainer) != null && t.contains(e.target) || (this._moreOpen = !1, this._updateDropdownPortal()));
    }, this._onDocKeyDown = (e) => {
      e.key === "Escape" && this._moreOpen && (this._moreOpen = !1, this._updateDropdownPortal());
    }, this._resizeTimer = null, this._onScrollOrResize = () => {
      this._moreOpen && this._positionDropdown(), this._resizeTimer && clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(() => this._updateVisiblePills(), 100);
    };
  }
  /** Programmatically open file browser. */
  browse() {
    var e;
    (e = this.fileInput) == null || e.click();
  }
  _onSourceIconClick(e) {
    this.dispatchEvent(
      new CustomEvent("source-click", {
        detail: { source: e.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _emitFiles(e) {
    this.dispatchEvent(
      new CustomEvent("files-selected", {
        detail: { files: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _toggleMore(e) {
    e.stopPropagation(), this._moreOpen = !this._moreOpen, this._updateDropdownPortal();
  }
  _updateDropdownPortal() {
    if (this._moreOpen) {
      const e = this.sources.slice(this._visiblePills);
      this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-more-dropdown", ""), this._injectDropdownStyles(), Fe(this).appendChild(this._portalContainer)), T(
        l`<div class="sfx-more-dropdown open">
          ${e.map(
          (t) => l`
              <button class="sfx-more-item" @click=${(i) => this._onMoreItemClick(t, i)}>
                <div class="sfx-more-item-ico">
                  ${t.brandHtml ? M(t.brandHtml) : t.iconColor ? l`<svg viewBox="0 0 24 24" style="color:${t.iconColor}">${O(t.icon)}</svg>` : R`<svg viewBox="0 0 24 24">${O(t.icon)}</svg>`}
                </div>
                ${t.label}
              </button>
            `
        )}
        </div>`,
        this._portalContainer
      ), requestAnimationFrame(() => this._positionDropdown());
    } else this._portalContainer && (T(c, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectDropdownStyles() {
    if (document.querySelector("style[data-sfx-more-dropdown-styles]")) return;
    const e = document.createElement("style");
    e.setAttribute("data-sfx-more-dropdown-styles", ""), e.textContent = `
      [data-sfx-more-dropdown] .sfx-more-dropdown { position:fixed; background:#fff; border-radius:12px; box-shadow:0 12px 40px rgba(0,0,0,0.14),0 2px 8px rgba(0,0,0,0.06); border:1px solid #e8edf5; padding:6px; min-width:210px; max-height:340px; overflow-y:auto; z-index:99999; opacity:0; visibility:hidden; pointer-events:none; transition:opacity .18s ease,visibility .18s ease,transform .18s ease; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
      [data-sfx-more-dropdown] .sfx-more-dropdown.open { opacity:1; visibility:visible; pointer-events:all; }
      [data-sfx-more-dropdown] .sfx-more-item { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:6px; border:none; background:none; width:100%; font-size:13px; font-weight:500; color:#1e293b; cursor:pointer; transition:background .15s; font-family:inherit; white-space:nowrap; }
      [data-sfx-more-dropdown] .sfx-more-item:hover { background:#f5f7fa; }
      [data-sfx-more-dropdown] .sfx-more-item-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-more-dropdown] .sfx-more-item-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; }
      [data-sfx-more-dropdown] .sfx-more-item .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-more-dropdown] .sfx-more-item .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
      [data-sfx-more-dropdown] .sfx-more-item .canva-ico { width:22px; height:22px; }
      [data-sfx-more-dropdown] .sfx-more-item .canva-ico svg { width:22px; height:22px; }
    `, document.head.appendChild(e);
  }
  /** Position the fixed dropdown, choosing above or below based on available space. */
  _positionDropdown() {
    var u, x;
    const e = (u = this.shadowRoot) == null ? void 0 : u.querySelector(".more-wrap > button"), t = (x = this._portalContainer) == null ? void 0 : x.querySelector(".sfx-more-dropdown");
    if (!e || !t) return;
    const i = e.getBoundingClientRect(), r = 8, o = t.scrollHeight, s = t.offsetWidth, n = i.top, d = window.innerHeight - i.bottom;
    n >= o + r || n > d ? t.style.top = `${i.top - o - r}px` : t.style.top = `${i.bottom + r}px`;
    let h = i.right - s;
    h = Math.max(8, Math.min(h, window.innerWidth - s - 8)), t.style.left = `${h}px`;
  }
  _onMoreItemClick(e, t) {
    t.stopPropagation(), this._moreOpen = !1, this._onSourceIconClick(e);
  }
  _updateVisiblePills() {
    const e = window.innerWidth;
    this.sourcesLayout === "cards" ? e <= 480 ? this._visiblePills = 2 : e <= 768 ? this._visiblePills = 3 : this._visiblePills = 5 : e <= 480 ? this._visiblePills = 1 : e <= 768 ? this._visiblePills = 2 : this._visiblePills = ze;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("paste", this._onPaste), document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onDocKeyDown), window.addEventListener("scroll", this._onScrollOrResize, !0), window.addEventListener("resize", this._onScrollOrResize), this._updateVisiblePills();
  }
  updated(e) {
    e.has("sourcesLayout") && this._updateVisiblePills();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("paste", this._onPaste), document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onDocKeyDown), window.removeEventListener("scroll", this._onScrollOrResize, !0), window.removeEventListener("resize", this._onScrollOrResize), this._resizeTimer && clearTimeout(this._resizeTimer), this._portalContainer && (T(c, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _renderPill(e) {
    return l`
      <button
        class="src-pill"
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? M(e.brandHtml) : l`<span class="pill-ico" style=${e.iconColor ? `color:${e.iconColor}` : ""}>
              ${R`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${O(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `;
  }
  _renderCard(e) {
    return l`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? l`<span class="card-ico">${M(e.brandHtml)}</span>` : l`<span class="card-ico" style=${e.iconColor ? `color:${e.iconColor}` : ""}>
              ${R`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${O(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `;
  }
  _renderMoreCard() {
    return l`
      <div class="more-wrap ${this._moreOpen ? "open" : ""}">
        <button class="src-card" @click=${(e) => this._toggleMore(e)}>
          <span class="card-ico" style="color: var(--sfx-up-text-muted, #94a3b8)">
            <svg viewBox="0 0 24 24" style="fill: currentColor; stroke: none">
              <circle cx="5" cy="12" r="2.5"/>
              <circle cx="12" cy="12" r="2.5"/>
              <circle cx="19" cy="12" r="2.5"/>
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
      </div>
    `;
  }
  _renderMoreDropdown() {
    return l`
      <div class="more-wrap ${this._moreOpen ? "open" : ""}">
        <button class="more-pill" @click=${(e) => this._toggleMore(e)}>
          More
          <svg class="more-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
    `;
  }
  render() {
    const e = [
      "drop-zone",
      this._dragOver || this.externalDragOver ? "drag-over" : "",
      this.compact ? "compact" : ""
    ].filter(Boolean).join(" "), t = this.sources.slice(0, this._visiblePills), i = this.sources.slice(this._visiblePills);
    return l`
      <div
        class=${e}
        role="button"
        tabindex="0"
        aria-label="Drop files here or click to browse"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <div class="dz-glow"></div>
        <div class="rings">
          <div class="ring"></div>
          <div class="ring"></div>
          <div class="core">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
            </svg>
          </div>
        </div>

        <div class="title">
          Drag & Drop or click to <span>browse</span>
        </div>
        ${this.compact ? c : l`<div class="subtitle">Drop files anywhere on this page</div>`}

        ${!this.compact && this.sources.length > 0 ? l`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout === "cards" ? l`
                    <div class="sources-cards">
                      ${t.map((r) => this._renderCard(r))}
                      ${i.length > 0 ? this._renderMoreCard() : c}
                    </div>
                  ` : l`
                    <div class="sources-grid">
                      ${t.map((r) => this._renderPill(r))}
                      ${i.length > 0 ? this._renderMoreDropdown() : c}
                    </div>
                  `}
            ` : c}

        ${this.compact && this.sources.length > 0 ? l`
              <div class="sources-row">
                ${this.sources.map(
      (r) => l`
                    <button
                      class="src-ico"
                      style=${r.iconColor && !r.brandHtml ? `color:${r.iconColor}` : ""}
                      data-tip=${r.label}
                      aria-label=${r.label}
                      @click=${(o) => {
        o.stopPropagation(), this._onSourceIconClick(r);
      }}
                    >
                      ${r.brandHtml ? M(r.brandHtml) : R`<svg viewBox="0 0 24 24" class=${r.fillIcon ? "fill-icon" : ""}>${O(r.icon)}</svg>`}
                    </button>
                  `
    )}
              </div>
            ` : c}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept || c}
          @change=${this._onFileChange}
        />
      </div>
    `;
  }
};
ue.styles = S`
    :host {
      display: flex;
      flex-shrink: 0;
      flex: 1;
      min-height: 0;
    }

    :host([compact]) {
      flex: 0 0 auto;
    }

    .drop-zone {
      border: none;
      border-radius: 12px;
      background: var(--sfx-up-bg, #fff);
      padding: 50px 40px 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: visible;
      transition: background 0.22s;
      user-select: none;
      flex: 1;
    }

    .drop-zone:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drag-over .ring {
      border-color: var(--sfx-up-primary, #2563eb);
      animation-duration: 3s;
    }

    .drag-over .ring:nth-child(2) {
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.4));
      animation-duration: 2s;
    }

    .drag-over .core {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      transform: scale(1.12);
      box-shadow: 0 8px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    /* Compact state when files exist */
    .drop-zone.compact {
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
      animation: compactIn 0.3s ease both;
    }

    @keyframes compactIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Radial glow --- */
    .dz-glow {
      position: absolute;
      width: 260px;
      height: 260px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: radial-gradient(circle at center, rgba(37, 99, 235, 0.04) 0%, rgba(37, 99, 235, 0.02) 40%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
    }

    .compact .dz-glow {
      display: none;
    }

    /* --- Rings --- */
    .rings {
      width: 120px;
      height: 120px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      flex-shrink: 0;
    }

    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: slowSpin 20s linear infinite;
      transition: border-color 0.3s;
    }

    .ring:nth-child(2) {
      inset: 13px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    .compact .rings {
      display: none;
    }

    /* --- Core icon --- */
    .core {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      transition: all 0.28s cubic-bezier(0.34, 1.4, 0.64, 1);
      box-shadow: 0 3px 12px rgba(37, 99, 235, 0.15);
    }

    .core svg {
      width: 26px;
      height: 26px;
    }

    .drop-zone:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      margin-bottom: 6px;
      transition: font-size 0.3s, margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: opacity 0.15s;
      margin-bottom: 24px;
    }

    .compact .title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .compact .subtitle {
      display: none;
    }

    /* --- "or Import From" divider --- */
    .import-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      max-width: 420px;
      margin-bottom: 20px;
    }

    .import-divider::before,
    .import-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border, #e2e8f0);
    }

    .import-divider span {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      letter-spacing: 0.3px;
    }

    .compact .import-divider {
      display: none;
    }

    /* --- Source pills grid (expanded mode) --- */
    .sources-grid {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      min-height: 92px;
    }

    .compact .sources-grid {
      display: none;
    }

    .src-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 18px;
      height: 38px;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-pill:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-1px);
    }

    .src-pill:active {
      transform: translateY(0) scale(0.98);
    }

    .src-pill .pill-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .src-pill .pill-ico svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-pill .pill-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .brand-ico svg {
      width: auto;
      height: auto;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .src-pill .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-pill .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source cards grid (expanded mode, cards layout) --- */
    .sources-cards {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      max-width: 700px;
    }

    .compact .sources-cards {
      display: none;
    }

    .sources-cards > .more-wrap {
      display: contents;
    }

    .sources-cards > .more-wrap > .src-card {
      /* restore flex item behaviour lost by display:contents on the wrapper */
      flex: 1;
      min-width: 88px;
      max-width: 130px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 12px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 130px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .src-card:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 4px 14px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      transform: translateY(-2px);
    }

    .src-card:active {
      transform: translateY(0) scale(0.97);
    }

    .src-card .card-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
    }

    .src-card .card-ico svg {
      width: 28px;
      height: 28px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-card .card-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-card .card-label {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .src-card .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 7px;
    }

    .src-card .brand-ico svg {
      width: 24px;
      height: 24px;
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* Google Drive has transparent background — show SVG at full card-ico size */
    .src-card .brand-ico[style*="transparent"] {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico[style*="transparent"] svg {
      width: 28px;
      height: 28px;
    }

    .src-card .canva-ico {
      width: 32px;
      height: 32px;
    }

    .src-card .canva-ico svg {
      width: 32px;
      height: 32px;
    }

    /* --- "More" pill + dropdown --- */
    .more-wrap {
      position: relative;
    }

    .more-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 50px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      transition: all 0.15s ease;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
      font-family: inherit;
    }

    .more-pill:hover,
    .more-wrap.open .more-pill {
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
      background: rgba(239, 246, 255, 0.85);
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .more-pill:hover {
      transform: translateY(-1px);
    }

    .more-pill svg {
      flex-shrink: 0;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
    }

    .more-chevron {
      width: 12px;
      height: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }

    .more-wrap.open .more-chevron {
      transform: rotate(180deg);
      color: currentColor;
    }

    /* Dropdown uses position:fixed to escape overflow:hidden ancestors */
    .more-dropdown {
      position: fixed;
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.18s ease, visibility 0.18s ease, transform 0.18s ease;
    }

    .more-dropdown.above {
      transform: translateY(-6px);
    }

    .more-dropdown.below {
      transform: translateY(6px);
    }

    .more-wrap.open .more-dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      transform: translateY(0);
    }

    .more-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 6px;
      border: none;
      background: none;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      transition: background 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }

    .more-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-item .more-item-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .more-item-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .more-item .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-item .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    /* --- Brand icon container (for provider logos) --- */
    .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }

    .src-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }

    .src-ico .brand-ico svg {
      width: 12px;
      height: 12px;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico .canva-ico,
    .more-item .canva-ico {
      width: 22px;
      height: 22px;
    }

    .src-ico .canva-ico svg,
    .more-item .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    /* --- Source icons row (compact mode) --- */
    .sources-row {
      display: none;
    }

    .compact .sources-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
      flex-shrink: 0;
      position: relative;
      z-index: 20;
    }

    .src-divider {
      width: 1px;
      height: 24px;
      background: var(--sfx-up-border, #e5e7eb);
      margin-right: 4px;
      flex-shrink: 0;
    }

    .src-ico {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-surface, #f8fafc);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      position: relative;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #6b7280);
      padding: 0;
      font-family: inherit;
    }

    .src-ico > svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .src-ico > svg.fill-icon {
      fill: currentColor;
      stroke: none;
      stroke-width: 0;
    }

    .src-ico:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      color: var(--sfx-up-primary, #2563eb);
    }

    .src-ico::after {
      content: attr(data-tip);
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text, #374151);
      font-size: 10px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-border, #e5e7eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      padding: 3px 8px;
      border-radius: 5px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.15s, visibility 0.15s;
      pointer-events: none;
      z-index: 50;
      font-family: inherit;
    }

    .src-ico:hover::after {
      opacity: 1;
      visibility: visible;
    }

    /* --- Ripple --- */
    .ripple {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      opacity: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) scale(0);
    }

    .ripple.go {
      animation: ripple 0.55s ease-out forwards;
    }

    /* --- Hidden input --- */
    input[type='file'] {
      display: none;
    }

    @keyframes slowSpin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ripple {
      from {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.18;
      }
      to {
        transform: translate(-50%, -50%) scale(12);
        opacity: 0;
      }
    }

    .drop-zone:focus-visible,
    .src-pill:focus-visible,
    .src-card:focus-visible,
    .more-pill:focus-visible,
    .src-ico:focus-visible,
    .more-item:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (max-width: 480px) {
      .drop-zone:not(.compact) {
        padding: 32px 20px;
      }
      .title { font-size: 16px; }
      .rings { width: 90px; height: 90px; }
      .core { width: 44px; height: 44px; }
      .core svg { width: 20px; height: 20px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .ring {
        animation: none;
      }
      .ripple.go {
        animation: none;
      }
      .drop-zone.compact {
        animation: none;
      }
    }
  `;
let z = ue;
j([
  b({ type: Boolean, reflect: !0 })
], z.prototype, "compact");
j([
  b({ type: Boolean, attribute: "external-drag-over" })
], z.prototype, "externalDragOver");
j([
  b({ type: String })
], z.prototype, "accept");
j([
  b({ type: Array })
], z.prototype, "sources");
j([
  b({ type: String, attribute: "sources-layout" })
], z.prototype, "sourcesLayout");
j([
  g()
], z.prototype, "_dragOver");
j([
  g()
], z.prototype, "_moreOpen");
j([
  g()
], z.prototype, "_visiblePills");
j([
  je(".ripple")
], z.prototype, "_rippleEl");
j([
  je('input[type="file"]')
], z.prototype, "fileInput");
const xe = class xe extends U {
  render() {
    return l`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `;
  }
};
xe.styles = S`
    :host {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px 0;
    }

    .line {
      flex: 1;
      height: 1px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .label {
      font-size: 11px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #cbd5e1);
      text-transform: uppercase;
      letter-spacing: 1px;
      white-space: nowrap;
    }
  `;
let Pe = xe;
var at = Object.defineProperty, Z = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && at(e, t, r), r;
};
const ge = class ge extends U {
  constructor() {
    super(...arguments), this.files = [], this.showDropTile = !1, this.sources = [], this.accept = "", this._moreOpen = !1, this._portalContainer = null, this._outsideClickHandler = (e) => {
      var r;
      if ((r = this._portalContainer) != null && r.contains(e.target)) return;
      const t = this.renderRoot.querySelector(".drop-tile-more-wrap"), i = e.composedPath();
      t && i.includes(t) || (this._moreOpen = !1, this._closePortal(), document.removeEventListener("click", this._outsideClickHandler, !0));
    }, this._onScrollOrResize = () => {
      this._moreOpen && this._positionPortal();
    }, this._onKeyDown = (e) => {
      e.key === "Escape" && this._moreOpen && (this._moreOpen = !1, this._closePortal(), this._removeGlobalListeners());
    };
  }
  _onDropTileClick() {
    const e = this.renderRoot.querySelector('input[type="file"]');
    e == null || e.click();
  }
  _onFileInput(e) {
    const t = e.target, i = Array.from(t.files ?? []);
    i.length > 0 && this.dispatchEvent(new CustomEvent("files-selected", { detail: { files: i }, bubbles: !0, composed: !0 })), t.value = "";
  }
  _onSourceClick(e, t) {
    if (e.stopPropagation(), t.id === "device") {
      const i = this.renderRoot.querySelector('input[type="file"]');
      i == null || i.click();
      return;
    }
    this.dispatchEvent(new CustomEvent("source-click", { detail: { source: t }, bubbles: !0, composed: !0 }));
  }
  _addGlobalListeners() {
    requestAnimationFrame(() => document.addEventListener("click", this._outsideClickHandler, !0)), document.addEventListener("keydown", this._onKeyDown), window.addEventListener("scroll", this._onScrollOrResize, !0), window.addEventListener("resize", this._onScrollOrResize);
  }
  _removeGlobalListeners() {
    document.removeEventListener("click", this._outsideClickHandler, !0), document.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("scroll", this._onScrollOrResize, !0), window.removeEventListener("resize", this._onScrollOrResize);
  }
  _toggleMore(e) {
    e.stopPropagation(), this._moreOpen = !this._moreOpen, this._moreOpen ? (this._openPortal(), this._addGlobalListeners()) : (this._closePortal(), this._removeGlobalListeners());
  }
  _openPortal() {
    const e = this.sources.slice(3);
    this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-tile-dropdown", ""), this._injectTileDropdownStyles(), Fe(this).appendChild(this._portalContainer)), T(
      l`<div class="sfx-tile-dropdown">
        ${e.map((t) => l`
          <button
            class="sfx-tile-dropdown-item"
            @click=${(i) => this._onMoreSourceClick(i, t)}
          >
            <span class="sfx-tile-dropdown-ico" style=${t.iconColor && !t.brandHtml ? `color:${t.iconColor}` : ""}>
              ${t.brandHtml ? M(t.brandHtml) : R`<svg viewBox="0 0 24 24" class=${t.fillIcon ? "fill-icon" : ""}>${O(t.icon)}</svg>`}
            </span>
            ${t.label}
          </button>
        `)}
      </div>`,
      this._portalContainer
    ), requestAnimationFrame(() => this._positionPortal());
  }
  _positionPortal() {
    var u;
    const e = this.renderRoot.querySelector(".drop-tile-more"), t = (u = this._portalContainer) == null ? void 0 : u.querySelector(".sfx-tile-dropdown");
    if (!e || !t) return;
    const i = e.getBoundingClientRect(), r = 6, o = t.scrollHeight, s = t.offsetWidth, n = i.top, d = window.innerHeight - i.bottom;
    n >= o + r || n > d ? t.style.top = `${i.top - o - r}px` : t.style.top = `${i.bottom + r}px`;
    let h = i.right - s;
    h = Math.max(8, Math.min(h, window.innerWidth - s - 8)), t.style.left = `${h}px`;
  }
  _closePortal() {
    this._portalContainer && (T(c, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectTileDropdownStyles() {
    if (document.querySelector("style[data-sfx-tile-dropdown-styles]")) return;
    const e = document.createElement("style");
    e.setAttribute("data-sfx-tile-dropdown-styles", ""), e.textContent = `
      [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-item { display:flex; align-items:center; gap:10px; width:100%; padding:8px 12px; border:none; background:none; border-radius:6px; cursor:pointer; font-size:13px; font-weight:500; color:#1e293b; white-space:nowrap; transition:background .15s; font-family:inherit; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-item:hover { background:#f5f7fa; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico { width:32px; height:32px; border-radius:8px; background:#f8fafc; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg { width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico svg.fill-icon { fill:currentColor; stroke:none; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico { width:20px; height:20px; border-radius:5px; display:flex; align-items:center; justify-content:center; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .brand-ico svg { fill:white; stroke:none; stroke-width:0; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico { width:22px; height:22px; }
      [data-sfx-tile-dropdown] .sfx-tile-dropdown-ico .canva-ico svg { width:22px; height:22px; }
      @keyframes sfxTileDropIn { from{opacity:0;transform:translateY(-4px)} to{opacity:1;transform:translateY(0)} }
    `, document.head.appendChild(e);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._moreOpen = !1, this._closePortal(), this._removeGlobalListeners();
  }
  _onMoreSourceClick(e, t) {
    this._moreOpen = !1, this._closePortal(), this._removeGlobalListeners(), this._onSourceClick(e, t);
  }
  _renderDropTile() {
    const t = this.sources.slice(0, 3), i = this.sources.slice(3);
    return l`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-rings">
          <div class="drop-tile-ring"></div>
          <div class="drop-tile-ring"></div>
          <div class="drop-tile-core">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
            </svg>
          </div>
        </div>
        <div class="drop-tile-text">Drop files or<br>click to <span>browse</span></div>
        ${t.length > 0 ? l`
          <div class="drop-tile-sources">
            ${t.map((r) => l`
              <button
                class="drop-tile-src"
                style=${r.iconColor && !r.brandHtml ? `color:${r.iconColor}` : ""}
                title=${r.label}
                @click=${(o) => this._onSourceClick(o, r)}
              >
                ${r.brandHtml ? M(r.brandHtml) : R`<svg viewBox="0 0 24 24" class=${r.fillIcon ? "fill-icon" : ""}>${O(r.icon)}</svg>`}
              </button>
            `)}
            ${i.length > 0 ? l`
              <div class="drop-tile-more-wrap">
                <button class="drop-tile-more" title="More sources" @click=${(r) => this._toggleMore(r)}>···</button>
              </div>
            ` : c}
          </div>
        ` : c}
        <input type="file" multiple accept=${this.accept || c} @change=${this._onFileInput} />
      </div>
    `;
  }
  render() {
    return l`
      <div class="grid">
        ${this.showDropTile ? this._renderDropTile() : c}
        ${this.files.map(
      (e, t) => l`<sfx-file-item .file=${e} style="--tile-index:${t}"></sfx-file-item>`
    )}
      </div>
    `;
  }
};
ge.styles = S`
    :host {
      display: block;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding-bottom: 8px;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
      scrollbar-gutter: stable;
    }

    :host::-webkit-scrollbar {
      width: var(--sfx-scrollbar-w, 12px);
    }

    :host::-webkit-scrollbar-track {
      background: transparent;
      margin: 8px 0;
    }

    :host::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      border-left: var(--sfx-scrollbar-inset-left, 3px) solid transparent;
      border-right: var(--sfx-scrollbar-inset-right, 3px) solid transparent;
      background-clip: padding-box;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, max(24%, 140px)), 1fr));
      gap: 12px;
      padding: 0 12px 16px 16px;
    }

    @media (max-width: 480px) {
      .grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 8px;
      }
    }

    /* --- Drop tile (first card in grid) --- */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      transition: all 0.18s ease;
      padding: 12px 10px;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .drop-tile-rings {
      width: clamp(40px, 6vw, 60px);
      height: clamp(40px, 6vw, 60px);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .drop-tile-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px dashed var(--sfx-up-ring-color, #c4d5ef);
      animation: tileSpin 20s linear infinite;
    }

    .drop-tile-ring:nth-child(2) {
      inset: 8px;
      border-color: var(--sfx-up-ring-color-light, #d8e5f5);
      border-style: dotted;
      animation-direction: reverse;
      animation-duration: 14s;
    }

    @keyframes tileSpin {
      to { transform: rotate(360deg); }
    }

    .drop-tile-core {
      width: clamp(24px, 4vw, 34px);
      height: clamp(24px, 4vw, 34px);
      border-radius: 50%;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.12);
      transition: all 0.2s ease;
    }

    .drop-tile:hover .drop-tile-core {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    .drop-tile-core svg {
      width: 16px;
      height: 16px;
    }

    .drop-tile-text {
      font-size: 11px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.3;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-sources {
      display: flex;
      gap: 3px;
      margin-top: 2px;
    }

    .drop-tile-src {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .drop-tile-src:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .drop-tile-src svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .drop-tile-src svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.15s ease;
      padding: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .drop-tile-more:hover {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }

    .more-dropdown {
      position: absolute;
      top: 36px;
      right: 0;
      background: #fff;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
      padding: 6px;
      z-index: 10;
      min-width: 180px;
      animation: dropIn 0.15s ease;
    }

    @keyframes dropIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .more-dropdown-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 8px 12px;
      border: none;
      background: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      transition: background 0.15s;
      font-family: inherit;
    }

    .more-dropdown-item:hover {
      background: var(--sfx-up-primary-bg, #f5f7fa);
    }

    .more-dropdown-ico {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .more-dropdown-ico svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .more-dropdown-ico svg.fill-icon {
      fill: currentColor;
      stroke: none;
    }

    .more-dropdown-ico .brand-ico {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .more-dropdown-ico .brand-ico svg {
      fill: white;
      stroke: none;
      stroke-width: 0;
    }

    .more-dropdown-ico .canva-ico {
      width: 22px;
      height: 22px;
    }

    .more-dropdown-ico .canva-ico svg {
      width: 22px;
      height: 22px;
    }

    input[type="file"] {
      display: none;
    }
  `;
let B = ge;
Z([
  b({ attribute: !1 })
], B.prototype, "files");
Z([
  b({ type: Boolean })
], B.prototype, "showDropTile");
Z([
  b({ attribute: !1 })
], B.prototype, "sources");
Z([
  b({ type: String })
], B.prototype, "accept");
Z([
  g()
], B.prototype, "_moreOpen");
var nt = Object.defineProperty, lt = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && nt(e, t, r), r;
};
const ve = class ve extends U {
  _remove() {
    this.dispatchEvent(
      new CustomEvent("file-remove", {
        detail: { fileId: this.file.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _retry() {
    this.dispatchEvent(
      new CustomEvent("file-retry", {
        detail: { fileId: this.file.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _preview(e) {
    e.stopPropagation(), this.dispatchEvent(
      new CustomEvent("file-preview", {
        detail: { fileId: this.file.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const e = this.file;
    if (!e) return c;
    const t = X(e), i = e.status === "complete", r = e.status === "uploading", o = e.status === "error" || e.status === "failed", s = e.status === "rejected", n = Xe(e.name), d = [
      "tile",
      i ? "done" : "",
      r ? "uploading" : "",
      s ? "rejected" : ""
    ].filter(Boolean).join(" ");
    return l`
      <div class=${d} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl ? l`<div class="preview-bg" style="background-image:url(${e.previewUrl})"></div>` : l`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <div class="type-icon-inner ${t}">
                    ${this._renderTypeIcon(t)}
                    ${n ? l`<div class="ext-label">${n}</div>` : c}
                  </div>
                </div>
              `}

          <!-- Preview button -->
          ${!i && !r && !o && e.status !== "rejected" ? l`
                <button class="preview-btn" @click=${this._preview} aria-label="Preview file">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Preview
                </button>
              ` : c}

          <!-- Spinner overlay -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
          </div>

          <!-- Done badge -->
          ${i ? l`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>` : c}

          <!-- Progress bar -->
          ${e.status === "uploading" ? l`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress, 100) / 100})"></div>
                </div>
              ` : c}

          <!-- Error / rejected badge -->
          ${(o || s) && e.error ? l`<div class="error-badge" title=${e.error}>${e.error}</div>` : c}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(o || s) && e.duration != null && e.duration > 0 ? l`<div class="duration-badge">${this._formatDuration(e.duration)}</div>` : c}
        </div>

        <!-- Action buttons -->
        <div class="actions">
          ${o ? l`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              ` : c}
          <button class="act-btn del" @click=${this._remove} title="Remove" aria-label="Remove file">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>

        <!-- Info bar -->
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
          <div class="meta">${n || ""}${e.size ? ` · ${Y(e.size)}` : ""}</div>
        </div>
      </div>
    `;
  }
  _formatDuration(e) {
    const t = Math.floor(e / 60), i = Math.floor(e % 60);
    return `${t}:${i.toString().padStart(2, "0")}`;
  }
  _renderTypeIcon(e) {
    switch (e) {
      case "pdf":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
      case "doc":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
      case "vid":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;
      case "zip":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;
      default:
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`;
    }
  }
};
ve.styles = S`
    :host {
      display: block;
    }

    .tile {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
      will-change: transform, opacity;
      transition: box-shadow 0.15s, transform 0.15s;
      cursor: default;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .tile:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }

    /* --- Preview area --- */
    .preview {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      flex-shrink: 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border-radius: 10px 10px 0 0;
    }

    .preview-bg {
      position: absolute;
      inset: 0;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      transition: transform 0.4s ease;
    }

    .tile:hover .preview-bg {
      transform: none;
    }

    .preview-bg.pdf { background: linear-gradient(135deg, var(--destructive-10, #fef2f2), var(--destructive-10, #fee2e2)); }
    .preview-bg.doc { background: linear-gradient(135deg, var(--sfx-up-primary-bg, #eff6ff), var(--sfx-up-primary-bg, #dbeafe)); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.zip { background: linear-gradient(135deg, var(--warning-10, #fffbeb), var(--warning-10, #fef3c7)); }
    .preview-bg.gen { background: linear-gradient(135deg, var(--sfx-up-border-light, #f8fafc), var(--sfx-up-border-light, #f1f5f9)); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-inner {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(0, 0, 0, 0.08));
    }

    .type-icon-inner svg {
      width: 22px;
      height: 22px;
    }

    .type-icon-inner.pdf { color: var(--sfx-up-error, #dc2626); }
    .type-icon-inner.doc { color: var(--sfx-up-primary, #1d4ed8); }
    .type-icon-inner.vid { color: #7c3aed; }
    .type-icon-inner.zip { color: var(--warning-foreground, #b45309); }
    .type-icon-inner.gen { color: var(--sfx-up-text-muted, #64748b); }

    .ext-label {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .duration-badge {
      position: absolute;
      bottom: 6px;
      right: 6px;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      line-height: 1.3;
      pointer-events: none;
      z-index: 2;
    }

    /* --- Info bar --- */
    .info {
      padding: 8px 12px;
      min-width: 0;
    }

    .name {
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #9ca3af);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* --- Action buttons --- */
    .actions {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 0.15s;
      z-index: 10;
    }

    .tile:hover .actions,
    .tile:focus-within .actions {
      opacity: 1;
    }

    /* Touch devices: always show actions since there is no hover */
    @media (hover: none) {
      .actions { opacity: 1; }
    }

    .act-btn {
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 4px var(--sfx-up-shadow, rgba(0, 0, 0, 0.15));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, transform 0.15s;
      color: var(--sfx-up-text-muted, #9ca3af);
      padding: 0;
    }

    .act-btn:hover {
      background: var(--sfx-up-border-light, #f3f4f6);
      transform: scale(1.08);
    }

    .act-btn.del:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--sfx-up-error, #dc2626);
    }

    .act-btn.retry:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
    }

    .act-btn svg {
      width: 11px;
      height: 11px;
    }

    /* --- Preview button --- */
    .preview-btn {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      padding: 6px 16px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      opacity: 0;
      transition: all 0.15s ease;
      color: var(--sfx-up-primary, #2563eb);
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      z-index: 5;
    }

    .tile:hover .preview-btn,
    .tile:focus-within .preview-btn {
      opacity: 1;
    }

    @media (hover: none) {
      .preview-btn { opacity: 1; }
    }

    .preview-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-bg, #fff);
    }

    .preview-btn svg {
      width: 13px;
      height: 13px;
    }

    /* --- Progress bar --- */
    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: rgba(0, 0, 0, 0.06);
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      transform-origin: left;
      transition: transform 0.32s ease;
    }

    /* --- Uploading spinner overlay --- */
    .spinner-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    .tile.uploading .spinner-overlay {
      opacity: 1;
    }

    .spin-ring {
      width: 28px;
      height: 28px;
      border: 2.5px solid rgba(255, 255, 255, 0.22);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Done badge --- */
    .done-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
    }

    .done-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Error / rejected state --- */
    .error-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 85%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tile.rejected {
      opacity: 0.6;
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626);
    }

    @keyframes tileIn {
      0% {
        opacity: 0;
        transform: scale(0.92) translateY(14px);
      }
      60% {
        opacity: 1;
      }
      80% {
        transform: scale(1.02) translateY(-2px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    .tile:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .act-btn:focus-visible,
    .preview-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .tile { animation: none; }
      .spin-ring { animation: none; }
    }
  `;
let le = ve;
lt([
  b({ attribute: !1 })
], le.prototype, "file");
const J = S`
  .btn,
  .btn-ghost,
  .btn-primary,
  .btn-sec,
  .btn-retry,
  .btn-upload,
  .btn-danger {
    height: 36px;
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .btn svg,
  .btn-ghost svg,
  .btn-primary svg,
  .btn-sec svg,
  .btn-retry svg,
  .btn-upload svg,
  .btn-danger svg {
    width: 14px;
    height: 14px;
  }

  .btn-ghost {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: 1.5px solid var(--sfx-up-border, #e2e8f0);
  }

  .btn-ghost:hover {
    background: var(--sfx-up-border-light, #f8faff);
    color: var(--sfx-up-text-secondary, #64748b);
    border-color: var(--sfx-up-border, #d1dff0);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: var(--primary-foreground, #fff);
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }

  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }

  .btn-primary:active {
    transform: translateY(0);
  }

  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`, Q = S`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;
var dt = Object.defineProperty, ee = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && dt(e, t, r), r;
};
const Ue = 7, be = class be extends U {
  constructor() {
    super(...arguments), this.fileCount = 0, this.totalSize = 0, this.thumbnails = [], this.primaryLabel = "Done", this.failedFiles = [];
  }
  _uploadMore() {
    this.dispatchEvent(
      new CustomEvent("upload-more", { bubbles: !0, composed: !0 })
    );
  }
  _primaryAction() {
    this.dispatchEvent(
      new CustomEvent("primary-action", { bubbles: !0, composed: !0 })
    );
  }
  _retryFile(e) {
    this.dispatchEvent(
      new CustomEvent("file-retry", { bubbles: !0, composed: !0, detail: { fileId: e } })
    );
  }
  _retryAll() {
    this.dispatchEvent(
      new CustomEvent("retry-all", { bubbles: !0, composed: !0 })
    );
  }
  _close() {
    this.dispatchEvent(
      new CustomEvent("close-uploader", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    const e = this.thumbnails.slice(0, Ue), t = this.thumbnails.length - Ue, i = this.fileCount > 0, r = this.failedFiles.length > 0, o = r && !i;
    return l`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${o ? "error" : r ? "warning" : ""}">
          ${o ? l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>` : r ? l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>` : l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${o ? "Upload failed" : r ? "Partially uploaded" : "Uploaded successfully!"}</div>
        <div class="subtitle">${o ? `${this.failedFiles.length === 1 ? "File" : "Files"} could not be uploaded` : r ? `${this.fileCount} ${this.fileCount === 1 ? "file" : "files"} uploaded, ${this.failedFiles.length} failed` : "All files are ready for use"}</div>

        ${e.length > 0 ? l`
              <div class="thumbs">
                ${e.map(
      (s) => l`<img class="thumb" src=${s} alt="" />`
    )}
                ${t > 0 ? l`<div class="thumb-more">+${t}</div>` : c}
              </div>
            ` : c}

        ${i ? l`<div class="summary">${this.fileCount} ${this.fileCount === 1 ? "file" : "files"} · ${Y(this.totalSize)} uploaded</div>` : c}

        ${r ? l`
            <div class="failed-list">
              ${this.failedFiles.map((s) => l`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${s.name}</div>
                    <div class="failed-reason">${s.error}</div>
                  </div>
                  <button class="failed-retry" title="Retry" @click=${() => this._retryFile(s.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          ` : c}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${r ? l`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>` : c}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
};
be.styles = [J, Q, S`
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
      position: relative;
      overflow-y: auto;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      animation: fadeUp 0.4s ease both;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #f0fdf4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: #22c55e;
      box-shadow: none;
      animation: popBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }

    .icon svg {
      width: 30px;
      height: 30px;
    }

    .icon.error {
      background: #fef2f2;
      color: #ef4444;
    }

    .icon.warning {
      background: #fffbeb;
      color: #f59e0b;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #0f172a);
      letter-spacing: -0.4px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.6;
      max-width: 320px;
      margin-bottom: 20px;
    }

    /* --- Thumbnail strip --- */
    .thumbs {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 14px;
    }

    .thumb {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid var(--sfx-up-border, #e8eaed);
    }

    .thumb-more {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      background: var(--sfx-up-surface, #f8fafc);
      border: 1px solid var(--sfx-up-border, #e8eaed);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Summary chip --- */
    .summary {
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-surface, #f8fafc);
      border-radius: 8px;
      padding: 6px 14px;
      margin-bottom: 22px;
    }

    .actions {
      display: flex;
      gap: 8px;
    }

    .actions .btn-primary {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      box-shadow: 0 2px 10px rgba(34, 197, 94, 0.28);
    }

    .actions .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, #16a34a, #15803d);
      box-shadow: 0 4px 16px rgba(34, 197, 94, 0.38);
    }

    /* --- Failed files list --- */
    .failed-list {
      width: 100%;
      max-width: 400px;
      max-height: 200px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: 1px solid var(--sfx-up-border, #e8eaed);
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.15) transparent;
    }

    .failed-list::-webkit-scrollbar {
      width: 6px;
    }

    .failed-list::-webkit-scrollbar-track {
      background: transparent;
      margin: 6px 0;
    }

    .failed-list::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 3px;
    }

    .failed-list::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.25);
    }

    .failed-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      text-align: left;
      border-bottom: 1px solid var(--sfx-up-border, #f1f5f9);
      margin-right: 8px;
    }

    .failed-item:last-child {
      border-bottom: none;
    }

    .failed-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: #ef4444;
      margin-top: 1px;
    }

    .failed-info {
      flex: 1;
      min-width: 0;
    }

    .failed-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .failed-reason {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      line-height: 1.4;
    }

    .failed-retry {
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
      margin-top: -2px;
    }

    .failed-retry svg { width: 14px; height: 14px; }

    .failed-retry:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-primary-hover, #1d4ed8); }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 28px;
      height: 28px;
      border: none;
      background: none;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      padding: 0;
    }

    .close-btn svg { width: 16px; height: 16px; }

    .close-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

    .btn-retry-all {
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: #fff;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    .btn-retry-all:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
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

    @keyframes popBounce {
      0% { transform: scale(0); opacity: 0; }
      55% { transform: scale(1.2); opacity: 1; }
      75% { transform: scale(0.94); }
      100% { transform: scale(1); }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 18px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];
let L = be;
ee([
  b({ type: Number })
], L.prototype, "fileCount");
ee([
  b({ type: Number })
], L.prototype, "totalSize");
ee([
  b({ type: Array })
], L.prototype, "thumbnails");
ee([
  b({ type: String })
], L.prototype, "primaryLabel");
ee([
  b({ type: Array })
], L.prototype, "failedFiles");
var pt = Object.defineProperty, I = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && pt(e, t, r), r;
};
const me = class me extends U {
  constructor() {
    super(...arguments), this.uploadState = "idle", this.fileCount = 0, this.totalSize = 0, this.failedCount = 0, this.showFillMetadata = !1, this.completedCount = 0, this.uploadProgress = 0;
  }
  _clear() {
    this.dispatchEvent(new CustomEvent("clear-all", { bubbles: !0, composed: !0 }));
  }
  _addMore() {
    this.dispatchEvent(new CustomEvent("add-more", { bubbles: !0, composed: !0 }));
  }
  _fillMetadata() {
    this.dispatchEvent(new CustomEvent("fill-metadata", { bubbles: !0, composed: !0 }));
  }
  _upload() {
    this.dispatchEvent(new CustomEvent("upload-start", { bubbles: !0, composed: !0 }));
  }
  _retryAll() {
    this.dispatchEvent(new CustomEvent("retry-all", { bubbles: !0, composed: !0 }));
  }
  render() {
    const e = this.uploadState === "uploading";
    return l`
      ${e ? l`
            <div class="progress-row">
              <div class="progress-track" role="progressbar" aria-valuenow=${Math.round(this.uploadProgress)} aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
                <div class="progress-fill" style="width:${this.uploadProgress}%"></div>
              </div>
              <span class="progress-label">${this.completedCount}/${this.fileCount} files</span>
            </div>
          ` : c}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata && this.uploadState === "idle" ? l`
                <button class="btn-sec" @click=${this._fillMetadata}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <line x1="10" y1="9" x2="8" y2="9"/>
                  </svg>
                  Fill Metadata
                </button>
              ` : c}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            Clear
          </button>
          <button class="btn-sec" @click=${this._addMore}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add more
          </button>
          ${this.failedCount > 0 ? l`
                <button class="btn-retry" @click=${this._retryAll}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  Retry all (${this.failedCount})
                </button>
              ` : c}
          ${this._renderUploadButton()}
        </div>
      </div>
    `;
  }
  _renderUploadButton() {
    const e = this.uploadState === "uploading", t = this.uploadState === "done", i = ["btn-primary", t ? "done-state" : ""].filter(Boolean).join(" ");
    return l`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e}
      >
        ${e ? l`<span class="btn-spin"></span> Uploading\u2026` : t ? l`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Done!
              ` : l`
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                </svg>
                Upload
              `}
      </button>
    `;
  }
};
me.styles = [J, Q, S`
    :host {
      display: flex;
      flex-direction: column;
      background: var(--sfx-up-bg, #ffffff);
      border-top: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      box-shadow: none;
      animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
    }

    @keyframes barSlideUp {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* --- Progress row --- */
    .progress-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 24px 0;
    }

    .progress-track {
      flex: 1;
      height: 4px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .progress-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      flex-shrink: 0;
    }

    /* --- Buttons row --- */
    .buttons-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 24px;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* --- Button overrides (base in shared-styles) --- */

    .btn-sec {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      border: 1.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
    }

    .btn-sec:hover {
      background: var(--sfx-up-primary-bg, #dbeafe);
    }

    .btn-retry {
      background: var(--destructive-10, #fef2f2);
      color: var(--sfx-up-error, #dc2626);
      border: 1.5px solid var(--sfx-up-error, rgba(220, 38, 38, 0.2));
    }

    .btn-retry:hover {
      background: var(--destructive-10, #fee2e2);
      color: var(--destructive-foreground, #b91c1c);
      border-color: var(--sfx-up-error, rgba(220, 38, 38, 0.35));
    }

    .btn-primary {
      min-width: 110px;
    }

    .btn-primary.done-state {
      background: var(--sfx-up-success, #16a34a);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(22, 163, 74, 0.28));
    }

    /* --- Spinner --- */
    .btn-spin {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spinRing 0.7s linear infinite;
    }

    /* --- Count --- */
    .count {
      font-size: 14px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    .count span {
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    @keyframes spinRing {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 480px) {
      .buttons-row {
        padding: 10px 12px;
        flex-wrap: wrap;
        gap: 8px;
      }
      button {
        height: 32px;
        font-size: 12px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host { animation: none; }
      .btn-spin { animation: none; }
    }
  `];
let F = me;
I([
  b({ type: String })
], F.prototype, "uploadState");
I([
  b({ type: Number })
], F.prototype, "fileCount");
I([
  b({ type: Number })
], F.prototype, "totalSize");
I([
  b({ type: Number })
], F.prototype, "failedCount");
I([
  b({ type: Boolean })
], F.prototype, "showFillMetadata");
I([
  b({ type: Number })
], F.prototype, "completedCount");
I([
  b({ type: Number })
], F.prototype, "uploadProgress");
const ct = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function ce(a, e) {
  return (t) => {
    if (t.key !== "Tab") return;
    const i = a();
    if (!i) return;
    const r = i.querySelector(e);
    if (!r) return;
    const o = Array.from(r.querySelectorAll(ct));
    if (o.length === 0) return;
    const s = o[0], n = o[o.length - 1], d = i.activeElement;
    t.shiftKey ? (d === s || !r.contains(d)) && (t.preventDefault(), n.focus()) : (d === n || !r.contains(d)) && (t.preventDefault(), s.focus());
  };
}
var ft = Object.defineProperty, fe = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && ft(e, t, r), r;
};
const we = class we extends U {
  constructor() {
    super(...arguments), this._url = "", this._name = "", this._error = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._onUrlInput = (e) => {
      this._url = e.target.value, this._error = "", this._autoName();
    }, this._onNameInput = (e) => {
      this._name = e.target.value;
    }, this._focusTrap = ce(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
      var t;
      e.key === "Escape" && this._cancel(), e.key === "Enter" && ((t = e.target) == null ? void 0 : t.tagName) === "INPUT" && this._submit(), this._focusTrap(e);
    };
  }
  _autoName() {
    var e;
    if (!this._name)
      try {
        const t = new URL(this._url).pathname.split("/"), i = t[t.length - 1];
        if (i) {
          const r = (e = this.shadowRoot) == null ? void 0 : e.querySelector("#nameInput");
          r && (r.placeholder = i);
        }
      } catch {
      }
  }
  _cancel() {
    this.dispatchEvent(new CustomEvent("url-cancel", { bubbles: !0, composed: !0 }));
  }
  _submit() {
    const e = this._url.trim();
    if (!e) {
      this._error = "Please enter a URL";
      return;
    }
    try {
      new URL(e);
    } catch {
      this._error = "Please enter a valid URL";
      return;
    }
    this._error = "";
    let t = this._name.trim();
    if (!t)
      try {
        const i = new URL(e).pathname.split("/");
        t = i[i.length - 1] || "imported-file";
      } catch {
        t = "imported-file";
      }
    this.dispatchEvent(
      new CustomEvent("url-submit", {
        detail: { url: e, name: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      var e, t;
      (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("#urlInput")) == null || t.focus();
    });
  }
  render() {
    return l`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div class="title">Import from URL</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">File URL</label>
              <input
                id="urlInput"
                type="url"
                placeholder="https://example.com/file.pdf"
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput">File name <span class="optional">(optional)</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder="document.pdf"
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error ? l`<div class="error">${this._error}</div>` : ""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
we.styles = [J, Q, S`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 480px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: translateY(18px) scale(0.97);
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1a1a1a);
      flex: 1;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      border: none;
      background: var(--sfx-up-border-light, #f0f0f0);
      color: var(--sfx-up-text-muted, #888);
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s, color 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e4e4e4);
      color: var(--sfx-up-text, #333);
    }

    .body {
      padding: 18px 20px 20px;
    }

    .field {
      margin-bottom: 14px;
    }

    label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      color: var(--sfx-up-text-muted, #aaa);
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }

    label .optional {
      color: var(--sfx-up-border, #ccc);
      font-weight: 400;
      text-transform: none;
      letter-spacing: 0;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #ebebeb);
      border-radius: 6px;
      padding: 0 14px;
      font-size: 14px;
      font-family: inherit;
      color: var(--sfx-up-text, #1a1a1a);
      background: var(--sfx-up-border-light, #fafafa);
      transition: border-color 0.15s, background 0.15s;
      outline: none;
      box-sizing: border-box;
    }

    input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    input::placeholder {
      color: var(--sfx-up-text-muted, #ccc);
      text-align: center;
    }

    .error {
      font-size: 12px;
      color: var(--sfx-up-error, #dc2626);
      margin-top: -6px;
      margin-bottom: 8px;
    }

    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 18px;
    }



    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(18px) scale(0.97); }
      to { transform: translateY(0) scale(1); }
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    input:focus-visible {
      outline: none;
    }

  `];
let K = we;
fe([
  g()
], K.prototype, "_url");
fe([
  g()
], K.prototype, "_name");
fe([
  g()
], K.prototype, "_error");
var ht = Object.defineProperty, ie = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && ht(e, t, r), r;
};
const ye = class ye extends U {
  constructor() {
    super(...arguments), this._stream = null, this._error = "", this._captured = null, this._previewUrl = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = ce(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
      e.key === "Escape" && this._cancel(), this._focusTrap(e);
    }, this._capture = () => {
      var r, o;
      const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector("video"), t = (o = this.shadowRoot) == null ? void 0 : o.querySelector("canvas");
      if (!e || !t) return;
      t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0), t.toBlob((s) => {
        s && (this._captured = s, this._previewUrl = URL.createObjectURL(s), this._stopStream());
      }, "image/jpeg", 0.92);
    }, this._retake = () => {
      this._previewUrl && URL.revokeObjectURL(this._previewUrl), this._captured = null, this._previewUrl = "", this._startCamera();
    }, this._usePhoto = () => {
      if (!this._captured) return;
      const e = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19), t = new File([this._captured], `camera-${e}.jpg`, { type: "image/jpeg" });
      this.dispatchEvent(new CustomEvent("camera-capture", { detail: { file: t }, bubbles: !0, composed: !0 }));
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._startCamera();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._stopStream(), this._previewUrl && URL.revokeObjectURL(this._previewUrl);
  }
  async _startCamera() {
    var e;
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({ video: !0, audio: !1 }), await this.updateComplete;
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("video");
      t && (t.srcObject = this._stream);
    } catch {
      this._error = "Could not access camera. Please check your permissions.";
    }
  }
  _stopStream() {
    var e;
    (e = this._stream) == null || e.getTracks().forEach((t) => t.stop()), this._stream = null;
  }
  _cancel() {
    this._stopStream(), this.dispatchEvent(new CustomEvent("camera-cancel", { bubbles: !0, composed: !0 }));
  }
  render() {
    return l`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">Camera</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error ? l`<div class="error">${this._error}</div>` : this._captured ? l`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  ` : l`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `;
  }
};
ye.styles = [J, Q, S`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 520px;
      height: 520px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; flex: 1; min-height: 0; justify-content: center; }

    video, canvas {
      width: 100%; flex: 1; min-height: 0; border-radius: 12px;
      background: #000; object-fit: cover;
    }

    canvas { display: none; }

    .preview-img {
      width: 100%; max-height: 320px; border-radius: 12px;
      object-fit: contain; background: #000;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-capture {
      width: 52px; height: 52px; border-radius: 50%; padding: 0;
      background: var(--sfx-up-error, #dc2626); border: 4px solid var(--sfx-up-bg, #fff);
      box-shadow: 0 0 0 2px var(--sfx-up-error, #dc2626), 0 4px 12px var(--sfx-up-shadow, rgba(220, 38, 38, 0.3));
      cursor: pointer; transition: all 0.15s;
    }
    .btn-capture:hover { background: var(--destructive-foreground, #b91c1c); transform: scale(1.05); }

    .close-btn:focus-visible,
    .btn-capture:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
  `];
let V = ye;
ie([
  g()
], V.prototype, "_stream");
ie([
  g()
], V.prototype, "_error");
ie([
  g()
], V.prototype, "_captured");
ie([
  g()
], V.prototype, "_previewUrl");
var ut = Object.defineProperty, te = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && ut(e, t, r), r;
};
const _e = class _e extends U {
  constructor() {
    super(...arguments), this._stream = null, this._recording = !1, this._error = "", this._recordedBlob = null, this._previewUrl = "", this._recorder = null, this._chunks = [], this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = ce(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
      e.key === "Escape" && this._cancel(), this._focusTrap(e);
    }, this._startRecording = async () => {
      var e;
      try {
        this._stream = await navigator.mediaDevices.getDisplayMedia({
          video: { width: 1280, height: 720, frameRate: 5 },
          audio: !0
        }), this._stream.getVideoTracks()[0].addEventListener("ended", () => {
          this._stopRecording();
        }), this._recording = !0, await this.updateComplete;
        const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("video");
        t && (t.srcObject = this._stream), this._chunks = [];
        const i = MediaRecorder.isTypeSupported("video/webm;codecs=vp9") ? "video/webm;codecs=vp9" : "video/webm";
        this._recorder = new MediaRecorder(this._stream, { mimeType: i }), this._recorder.ondataavailable = (r) => {
          r.data.size > 0 && this._chunks.push(r.data);
        }, this._recorder.onstop = () => {
          var o;
          const r = new Blob(this._chunks, { type: "video/webm" });
          this._recordedBlob = r, this._previewUrl = URL.createObjectURL(r), (o = this._stream) == null || o.getTracks().forEach((s) => s.stop()), this._stream = null;
        }, this._recorder.start();
      } catch {
        this._error = "Could not start screen capture. Please check your permissions.";
      }
    }, this._stopRecording = () => {
      var e;
      this._recording = !1, ((e = this._recorder) == null ? void 0 : e.state) === "recording" && this._recorder.stop(), this._recorder = null;
    }, this._useRecording = () => {
      if (!this._recordedBlob) return;
      const e = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19), t = new File([this._recordedBlob], `screencap-${e}.webm`, { type: "video/webm" });
      this.dispatchEvent(new CustomEvent("screencast-capture", { detail: { file: t }, bubbles: !0, composed: !0 }));
    }, this._discard = () => {
      this._previewUrl && URL.revokeObjectURL(this._previewUrl), this._recordedBlob = null, this._previewUrl = "";
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._stopAll(), this._previewUrl && URL.revokeObjectURL(this._previewUrl);
  }
  _stopAll() {
    var e, t;
    (e = this._recorder) == null || e.stop(), this._recorder = null, (t = this._stream) == null || t.getTracks().forEach((i) => i.stop()), this._stream = null;
  }
  _cancel() {
    this._stopAll(), this.dispatchEvent(new CustomEvent("screencast-cancel", { bubbles: !0, composed: !0 }));
  }
  render() {
    return l`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 21h10"/>
              </svg>
            </div>
            <div class="title">Screen cast</div>
            <button class="close-btn" aria-label="Close" @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error ? l`<div class="error">${this._error}</div>` : this._recordedBlob ? l`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  ` : this._recording ? l`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    ` : l`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 21h10"/>
                          </svg>
                        </div>
                        <div class="start-text">Share your screen to record a video that will be added to your uploads.</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>Start recording</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `;
  }
};
_e.styles = [J, Q, S`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%; max-width: 560px;
      overflow: hidden; display: flex; flex-direction: column;
      animation: slideUp 0.28s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
    }

    .head {
      display: flex; align-items: center; gap: 10px;
      padding: 18px 20px 0;
    }

    .head-icon {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--sfx-up-primary-bg, #f5f5f7);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: var(--sfx-up-primary, #2563eb);
    }

    .head-icon svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .title { font-size: 16px; font-weight: 700; color: var(--sfx-up-text, #1a1a1a); flex: 1; }

    .close-btn {
      width: 28px; height: 28px; border-radius: 8px; border: none;
      background: var(--sfx-up-border-light, #f0f0f0); color: var(--sfx-up-text-muted, #888); font-size: 14px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.15s, color 0.15s; flex-shrink: 0; line-height: 1;
    }
    .close-btn:hover { background: var(--sfx-up-border, #e4e4e4); color: var(--sfx-up-text, #333); }

    .body { padding: 18px 20px 20px; display: flex; flex-direction: column; align-items: center; gap: 16px; }

    video {
      width: 100%; max-height: 320px; border-radius: 12px;
      background: #000; object-fit: contain;
    }

    .error { font-size: 13px; color: var(--sfx-up-error, #dc2626); text-align: center; padding: 40px 20px; }

    .status {
      font-size: 13px; color: var(--sfx-up-text-secondary, #475569);
      display: flex; align-items: center; gap: 8px;
    }

    .rec-dot {
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--sfx-up-error, #dc2626); animation: pulse 1s ease-in-out infinite;
    }

    .actions { display: flex; gap: 8px; justify-content: center; width: 100%; }

    .btn-danger {
      background: var(--sfx-up-error, #dc2626); color: var(--primary-foreground, #fff);
      box-shadow: 0 2px 10px var(--sfx-up-shadow, rgba(220, 38, 38, 0.28));
    }
    .btn-danger:hover { background: var(--destructive-foreground, #b91c1c); }

    .start-view {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 30px 20px; text-align: center;
    }

    .start-icon {
      width: 56px; height: 56px; border-radius: 16px;
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      display: flex; align-items: center; justify-content: center;
    }

    .start-icon svg { width: 28px; height: 28px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }

    .start-text {
      font-size: 14px; color: var(--sfx-up-text-secondary, #475569); max-width: 300px;
    }

    .close-btn:focus-visible {
      outline: 2px solid var(--sfx-up-primary, #2563eb);
      outline-offset: 2px;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(18px) scale(0.97); } to { transform: translateY(0) scale(1); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  `];
let A = _e;
te([
  g()
], A.prototype, "_stream");
te([
  g()
], A.prototype, "_recording");
te([
  g()
], A.prototype, "_error");
te([
  g()
], A.prototype, "_recordedBlob");
te([
  g()
], A.prototype, "_previewUrl");
var xt = Object.defineProperty, $ = (a, e, t, i) => {
  for (var r = void 0, o = a.length - 1, s; o >= 0; o--)
    (s = a[o]) && (r = s(e, t, r) || r);
  return r && xt(e, t, r), r;
};
const De = /* @__PURE__ */ new Set(["unsplash"]);
var E;
const k = (E = class extends U {
  constructor() {
    super(), this.config = null, this._isOpen = !1, this._activeConnector = null, this._showUrlDialog = !1, this._showCameraDialog = !1, this._showScreenCastDialog = !1, this._previewFileId = null, this._previewDims = "—", this._splitPct = 68, this._isResizing = !1, this._splitRafId = 0, this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fullscreenZoomed = !1, this._fsPanX = 0, this._fsPanY = 0, this._fsDragging = !1, this._fsDragStartX = 0, this._fsDragStartY = 0, this._fsPanStartX = 0, this._fsPanStartY = 0, this._bodyDragOver = !1, this._isMinimized = !1, this._isPillExpanded = !1, this._bodyDragCounter = 0, this._videoBlobUrls = /* @__PURE__ */ new Map(), this._engine = null, this._cachedSources = W, this._cachedSourcesConfig = void 0, this._rejectedTimers = /* @__PURE__ */ new Map(), this._closeOnCompleteTimer = null, this._apiBase = null, this._authHeaders = null, this._authResolveId = 0, this._prevStoreState = null, this._unsubStoreEvents = null, this._portalContainer = null, this._onFilesSelected = (e) => {
      this._processIncomingFiles(e.detail.files);
    }, this._onDropTileSourceClick = (e) => {
      this._handleSourceActivation(e.detail.source.id);
    }, this._onSourceClick = async (e) => {
      this._handleSourceActivation(e.detail.source);
    }, this._handleSourceActivation = async (e) => {
      var r, o;
      const t = this._mergedSources.find((s) => s.id === e);
      if (t != null && t.onActivate) {
        try {
          t.onActivate(this);
        } catch (s) {
          console.error(`[sfx-uploader] onActivate for custom source "${e}" threw:`, s);
        }
        return;
      }
      if (e === "device") {
        const s = this.shadowRoot.querySelector("sfx-drop-zone");
        s == null || s.browse();
        return;
      }
      if (e === "url") {
        this._showUrlDialog = !0;
        return;
      }
      if (e === "camera") {
        this._showCameraDialog = !0;
        return;
      }
      if (e === "screen-cast") {
        this._showScreenCastDialog = !0;
        return;
      }
      if ((((o = (r = this.config) == null ? void 0 : r.connectors) == null ? void 0 : o.providers) ?? []).includes(e)) {
        if (De.has(e)) {
          if (!customElements.get("sfx-search-provider-browser")) {
            const { SfxSearchProviderBrowser: n } = await import("./search-provider-browser-Cn0v6Gcq.js");
            customElements.define("sfx-search-provider-browser", n);
          }
        } else if (!customElements.get("sfx-provider-browser")) {
          const { SfxProviderBrowser: n } = await import("./provider-browser-DcYDZQos.js");
          customElements.define("sfx-provider-browser", n);
        }
        this._activeConnector = e;
      }
    }, this._onUrlSubmit = (e) => {
      var h, u, x;
      this._showUrlDialog = !1;
      const { url: t, name: i } = e.detail, r = (h = this.config) == null ? void 0 : h.callbacks, o = Ke(i), s = o.startsWith("image/"), n = this._store.getState(), d = ae({ name: i, size: 0, type: o }, n.restrictions, n.files);
      if (d) {
        const f = {
          id: q(),
          status: "rejected",
          file: null,
          remoteUrl: t,
          name: i,
          size: 0,
          type: o,
          previewUrl: null,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error: d,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          remoteInfo: null
        };
        H(this._store, f), this._dispatchPublic(v.FILE_REJECTED, { file: f, reason: d }), (u = r == null ? void 0 : r.onFileRejected) == null || u.call(r, f, d);
        return;
      }
      const p = {
        id: q(),
        status: "idle",
        file: null,
        remoteUrl: t,
        name: i,
        size: 0,
        type: o,
        previewUrl: s ? t : null,
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
        remoteInfo: null
      };
      H(this._store, p), this._dispatchPublic(v.FILE_ADDED, { file: p }), (x = r == null ? void 0 : r.onFileAdded) == null || x.call(r, p), this._store.getState().queueConfig.autoProceed && this.upload();
    }, this._onUrlCancel = () => {
      this._showUrlDialog = !1;
    }, this._onCameraCapture = (e) => {
      this._showCameraDialog = !1, this._processIncomingFiles([e.detail.file]);
    }, this._onCameraCancel = () => {
      this._showCameraDialog = !1;
    }, this._onScreenCastCapture = (e) => {
      this._showScreenCastDialog = !1, this._processIncomingFiles([e.detail.file]);
    }, this._onScreenCastCancel = () => {
      this._showScreenCastDialog = !1;
    }, this._onFileRemove = (e) => {
      this._removeFile(e.detail.fileId);
    }, this._onFilePreview = (e) => {
      var i, r, o;
      const t = this._store.getState().files.get(e.detail.fileId);
      t && (this._previewFileId = t.id, this._dispatchPublic(v.FILE_PREVIEW, { file: t }), (o = (r = (i = this.config) == null ? void 0 : i.callbacks) == null ? void 0 : r.onFilePreview) == null || o.call(r, t));
    }, this._onFillMetadata = () => {
      var t, i, r;
      const e = [...this._store.getState().files.values()].filter(
        (o) => E._MODIFIABLE_STATUSES.has(o.status)
      );
      this._dispatchPublic(v.FILL_METADATA, { files: e }), (r = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onFillMetadata) == null || r.call(i, e);
    }, this._onFileRetry = (e) => {
      var t;
      this._ensureEngine(), (t = this._engine) == null || t.retryFile(e.detail.fileId);
    }, this._onRetryAll = () => {
      var e;
      this._ensureEngine(), (e = this._engine) == null || e.retryAll();
    }, this._onClearAll = () => {
      var i, r, o;
      const e = (i = this.config) == null ? void 0 : i.callbacks;
      this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), (r = this._engine) == null || r.cancelAll();
      const t = [...this._store.getState().files.values()];
      for (const s of t)
        s.previewUrl && URL.revokeObjectURL(s.previewUrl), this._dispatchPublic(v.FILE_REMOVED, { file: s }), (o = e == null ? void 0 : e.onFileRemoved) == null || o.call(e, s);
      this._revokeVideoBlobUrls();
      for (const s of this._rejectedTimers.values()) clearTimeout(s);
      this._rejectedTimers.clear(), this._dimCache.clear(), this._previewFileId = null, this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._store.setState({
        files: /* @__PURE__ */ new Map(),
        isUploading: !1,
        totalProgress: 0,
        totalSpeed: 0,
        totalBytesUploaded: 0,
        totalBytes: 0
      });
    }, this._onAddMore = () => {
      var r;
      const e = this.shadowRoot.querySelector("sfx-drop-zone");
      if (e) {
        e.browse();
        return;
      }
      const t = this.shadowRoot.querySelector("sfx-file-list"), i = (r = t == null ? void 0 : t.shadowRoot) == null ? void 0 : r.querySelector('input[type="file"]');
      i == null || i.click();
    }, this._onUploadStart = () => {
      var e;
      if (this._phase === "complete") {
        ((e = this.config) == null ? void 0 : e.clearOnComplete) !== !1 && this._onClearAll();
        return;
      }
      this.upload();
    }, this._onUploadMore = () => {
      this._onClearAll();
    }, this._onConnectorFilesSelected = (e) => {
      var i, r, o;
      const t = (i = this.config) == null ? void 0 : i.callbacks;
      for (const s of e.detail.files) {
        const n = this._store.getState(), d = ae(
          { name: s.name, size: s.size, type: s.mimeType },
          n.restrictions,
          n.files
        );
        if (d) {
          const h = {
            id: q(),
            status: "rejected",
            file: null,
            remoteUrl: null,
            name: s.name,
            size: s.size,
            type: s.mimeType,
            previewUrl: s.thumbnail,
            duration: null,
            progress: 0,
            speed: 0,
            bytesUploaded: 0,
            error: d,
            retryCount: 0,
            response: null,
            addedAt: Date.now(),
            meta: {},
            tags: [],
            remoteInfo: s
          };
          H(this._store, h), this._dispatchPublic(v.FILE_REJECTED, { file: h, reason: d }), (r = t == null ? void 0 : t.onFileRejected) == null || r.call(t, h, d);
          continue;
        }
        const p = {
          id: q(),
          status: "idle",
          file: null,
          remoteUrl: null,
          name: s.name,
          size: s.size,
          type: s.mimeType,
          previewUrl: s.thumbnail,
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
          remoteInfo: s
        };
        H(this._store, p), this._dispatchPublic(v.FILE_ADDED, { file: p }), (o = t == null ? void 0 : t.onFileAdded) == null || o.call(t, p);
      }
      this._activeConnector = null, this._store.getState().queueConfig.autoProceed && this.upload();
    }, this._onConnectorClose = () => {
      this._activeConnector = null;
    }, this._onConnectorBackdropClick = (e) => {
      e.target === e.currentTarget && (this._activeConnector = null);
    }, this._onPrimaryAction = () => {
      var e, t, i, r, o;
      this._dispatchPublic(v.COMPLETE_ACTION, {}), (i = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onCompleteAction) == null || i.call(t), ((r = this.config) == null ? void 0 : r.mode) === "modal" ? this.close() : ((o = this.config) == null ? void 0 : o.clearOnComplete) !== !1 && this._onClearAll();
    }, this._onInlineDismiss = () => {
      var e, t, i;
      (i = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onCancel) == null || i.call(t), this._dispatchPublic(v.CANCEL, {});
    }, this._onSuccessCardClose = () => {
      var e, t, i, r;
      ((e = this.config) == null ? void 0 : e.mode) === "inline" ? (this._dispatchPublic(v.COMPLETE_ACTION, {}), (r = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCompleteAction) == null || r.call(i), this._onClearAll()) : this._onModalDismiss();
    }, this._onModalDismiss = () => {
      var e, t, i, r;
      this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll()), (r = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCancel) == null || r.call(i), this._dispatchPublic(v.CANCEL, {}), this.close();
    }, this._onMinimize = () => {
      this._isMinimized = !0, this._isPillExpanded = !0, this.requestUpdate();
    }, this._onPillClick = () => {
      this._isPillExpanded = !this._isPillExpanded, this.requestUpdate();
    }, this._onPillExpand = () => {
      this._isMinimized = !1, this._isPillExpanded = !1, this._isOpen = !0, this.requestUpdate();
    }, this._onPillDismiss = () => {
      var e, t, i, r;
      this._isMinimized = !1, this._isPillExpanded = !1, this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll()), (r = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCancel) == null || r.call(i), this._dispatchPublic(v.CANCEL, {}), this.close();
    }, this._onModalBackdropClick = (e) => {
      e.target === e.currentTarget && this._onModalDismiss();
    }, this._onBodyDragEnter = (e) => {
      e.preventDefault(), this._bodyDragCounter++, this._bodyDragCounter === 1 && (this._bodyDragOver = !0);
    }, this._onBodyDragOver = (e) => {
      e.preventDefault();
    }, this._onBodyDragLeave = (e) => {
      e.preventDefault(), this._bodyDragCounter--, this._bodyDragCounter <= 0 && (this._bodyDragCounter = 0, this._bodyDragOver = !1);
    }, this._onBodyDrop = (e) => {
      var i;
      e.preventDefault(), this._bodyDragCounter = 0, this._bodyDragOver = !1;
      const t = Array.from(((i = e.dataTransfer) == null ? void 0 : i.files) ?? []);
      t.length > 0 && this._onFilesSelected(
        new CustomEvent("files-selected", { detail: { files: t } })
      );
    }, this._onKeyDown = (e) => {
      var t, i;
      if (e.key === "Escape") {
        if (this._fullscreenPreviewUrl || this._fullscreenVideoFile) {
          this._onFsClose();
          return;
        }
        this._isOpen && ((t = this.config) == null ? void 0 : t.mode) === "modal" && (((i = this.config) == null ? void 0 : i.headerButton) ?? "close") !== "none" && this._onModalDismiss();
      }
    }, this._dimCache = /* @__PURE__ */ new Map(), this._onSplitPointerDown = (e) => {
      var i;
      e.preventDefault(), this._isResizing = !0;
      const t = (i = this.shadowRoot) == null ? void 0 : i.querySelector(".preview-layout");
      t == null || t.classList.add("resizing"), e.target.setPointerCapture(e.pointerId);
    }, this._onSplitPointerMove = (e) => {
      if (!this._isResizing || this._splitRafId) return;
      const t = e.clientX;
      this._splitRafId = requestAnimationFrame(() => {
        var s;
        this._splitRafId = 0;
        const i = (s = this.shadowRoot) == null ? void 0 : s.querySelector(".preview-layout");
        if (!i) return;
        const r = i.getBoundingClientRect(), o = (t - r.left) / r.width * 100;
        this._splitPct = Math.max(25, Math.min(75, o));
      });
    }, this._onSplitPointerUp = () => {
      var t;
      this._isResizing = !1, this._splitRafId && (cancelAnimationFrame(this._splitRafId), this._splitRafId = 0);
      const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".preview-layout");
      e == null || e.classList.remove("resizing");
    }, this._onFsToggleZoom = (e) => {
      e == null || e.stopPropagation(), this._fullscreenZoomed = !this._fullscreenZoomed, this._fullscreenZoomed || (this._fsPanX = 0, this._fsPanY = 0);
    }, this._onFsOverlayClick = (e) => {
      this._fsDragDidMove || this._onFsToggleZoom(e);
    }, this._fsDragDidMove = !1, this._onFsPanStart = (e) => {
      this._fullscreenZoomed && (this._fsDragging = !0, this._fsDragDidMove = !1, this._fsDragStartX = e.clientX, this._fsDragStartY = e.clientY, this._fsPanStartX = this._fsPanX, this._fsPanStartY = this._fsPanY, e.preventDefault());
    }, this._onFsPanMove = (e) => {
      if (!this._fsDragging) return;
      const t = e.clientX - this._fsDragStartX, i = e.clientY - this._fsDragStartY;
      (Math.abs(t) > 3 || Math.abs(i) > 3) && (this._fsDragDidMove = !0), this._fsPanX = this._fsPanStartX + t, this._fsPanY = this._fsPanStartY + i, this.requestUpdate();
    }, this._onFsPanEnd = () => {
      this._fsDragging = !1, requestAnimationFrame(() => {
        this._fsDragDidMove = !1;
      });
    }, this._onFsTouchStart = (e) => {
      if (!this._fullscreenZoomed || e.touches.length !== 1) return;
      const t = e.touches[0];
      this._fsDragging = !0, this._fsDragDidMove = !1, this._fsDragStartX = t.clientX, this._fsDragStartY = t.clientY, this._fsPanStartX = this._fsPanX, this._fsPanStartY = this._fsPanY;
    }, this._onFsTouchMove = (e) => {
      if (!this._fsDragging || e.touches.length !== 1) return;
      const t = e.touches[0], i = t.clientX - this._fsDragStartX, r = t.clientY - this._fsDragStartY;
      (Math.abs(i) > 3 || Math.abs(r) > 3) && (this._fsDragDidMove = !0), this._fsPanX = this._fsPanStartX + i, this._fsPanY = this._fsPanStartY + r, this.requestUpdate(), e.preventDefault();
    }, this._onFsClose = (e) => {
      e == null || e.stopPropagation(), this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fullscreenZoomed = !1, this._fsPanX = 0, this._fsPanY = 0;
    }, this._store = Re(), this._storeCtrl = new Me(this, this._store);
  }
  // --- Public API ---
  /** Open the uploader (modal mode). */
  open() {
    var e, t, i;
    this._isMinimized && (this._isMinimized = !1, this._isPillExpanded = !1), !this._isOpen && (this._isOpen = !0, (i = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onOpen) == null || i.call(t), this._dispatchPublic(v.OPEN, {}), this.requestUpdate());
  }
  /** Close the uploader (modal mode). Optionally clears all files (controlled by clearOnClose config). */
  close() {
    var e, t, i, r;
    this._isOpen && (this._isOpen = !1, this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), ((e = this.config) == null ? void 0 : e.clearOnClose) !== !1 && this._onClearAll(), this._previewFileId = null, (r = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onClose) == null || r.call(i), this._dispatchPublic(v.CLOSE, {}), this.requestUpdate());
  }
  /** Start uploading all queued files. */
  upload() {
    var r, o, s, n, d, p, h;
    if (this._ensureEngine(), !this._engine) {
      console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");
      return;
    }
    const e = [...this._store.getState().files.values()].filter(
      (u) => u.status === "idle" || u.status === "queued"
    );
    if ((o = (r = this.config) == null ? void 0 : r.callbacks) != null && o.onBeforeUpload && this.config.callbacks.onBeforeUpload(e) === !1)
      return;
    const t = new CustomEvent(v.BEFORE_UPLOAD, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { files: e }
    });
    this.dispatchEvent(t) && (this._dispatchPublic(v.UPLOAD_STARTED, { files: e }), (d = (n = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : n.onUploadStarted) == null || d.call(n, e), this._engine.uploadAll(), (p = this.config) != null && p.minimizeOnUpload && ((h = this.config) == null ? void 0 : h.mode) !== "inline" && (this._isMinimized = !0, this._isPillExpanded = !0, this.requestUpdate()));
  }
  /** Programmatically add files. */
  addFiles(e) {
    this._processIncomingFiles(e);
  }
  /** Resume a paused upload (spec §13.2). */
  resumeUpload(e) {
    var t;
    if (e && e.length > 0) {
      const i = this._store.getState().files, r = new Map(i);
      let o = !1;
      for (const s of e) {
        const n = i.get(s.id);
        n && (r.set(s.id, { ...n, ...s }), o = !0);
      }
      o && this._store.setState({ files: r });
    }
    this._ensureEngine(), (t = this._engine) == null || t.uploadAll();
  }
  /** Cancel a paused upload (spec §13.2). */
  cancelUpload() {
    var e;
    (e = this._engine) == null || e.cancelAll();
  }
  /** Get a snapshot of all current files. */
  getFiles() {
    return [...this._store.getState().files.values()];
  }
  /** Get a single file by ID. */
  getFile(e) {
    return this._store.getState().files.get(e);
  }
  /** Update metadata and/or tags for a single file. */
  updateFileMeta(e, t, i) {
    const r = this._store.getState().files, o = r.get(e);
    if (!o || !E._MODIFIABLE_STATUSES.has(o.status)) return;
    const s = new Map(r);
    s.set(e, {
      ...o,
      meta: t != null ? { ...o.meta, ...t } : o.meta,
      tags: i ?? o.tags
    }), this._store.setState({ files: s });
  }
  /** Batch-update metadata and/or tags for multiple files. */
  updateFilesMeta(e) {
    const t = this._store.getState().files, i = new Map(t);
    let r = !1;
    for (const { fileId: o, meta: s, tags: n } of e) {
      const d = t.get(o);
      !d || !E._MODIFIABLE_STATUSES.has(d.status) || (i.set(o, {
        ...d,
        meta: s != null ? { ...d.meta, ...s } : d.meta,
        tags: n ?? d.tags
      }), r = !0);
    }
    r && this._store.setState({ files: i });
  }
  // --- Lifecycle ---
  updated(e) {
    if (e.has("config") && this.config && this._applyConfig(this.config), e.has("_previewFileId") && this._previewFileId) {
      const t = this._previewFileId, i = this._store.getState().files.get(t);
      i ? this._getImageDimensions(i).then((r) => {
        this._previewFileId === t && (this._previewDims = r ? `${r.w} × ${r.h}` : "—");
      }) : this._previewDims = "—";
    }
    this._updateFloatingPortal();
  }
  _injectFloatStyles() {
    if (document.querySelector("style[data-sfx-upload-float-styles]")) return;
    const e = document.createElement("style");
    e.setAttribute("data-sfx-upload-float-styles", ""), e.textContent = `
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
    `, document.head.appendChild(e);
  }
  _updateFloatingPortal() {
    const e = [...this._storeCtrl.state.files.values()];
    this._isMinimized && e.length > 0 ? (this._injectFloatStyles(), this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-upload-float", ""), document.body.appendChild(this._portalContainer)), T(this._renderFloatingPill(e), this._portalContainer)) : this._portalContainer && (T(c, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("keydown", this._onKeyDown), this._prevStoreState = this._store.getState(), this._unsubStoreEvents = this._store.subscribe(() => this._onStoreChange());
  }
  disconnectedCallback() {
    var e, t, i, r;
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKeyDown), (e = this._unsubStoreEvents) == null || e.call(this), this._unsubStoreEvents = null, this._prevStoreState = null, (t = this._portalContainer) == null || t.remove(), this._portalContainer = null, document.querySelector("[data-sfx-upload-float]") || (i = document.querySelector("style[data-sfx-upload-float-styles]")) == null || i.remove(), this._revokeVideoBlobUrls();
    for (const o of this._rejectedTimers.values()) clearTimeout(o);
    this._rejectedTimers.clear(), this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null);
    for (const o of this._store.getState().files.values())
      o.previewUrl && URL.revokeObjectURL(o.previewUrl);
    (r = this._engine) == null || r.destroy(), this._engine = null;
  }
  // --- Config ---
  _applyConfig(e) {
    const t = {};
    if (e.targetFolder && (t.targetFolder = e.targetFolder), e.restrictions && (t.restrictions = {
      ...this._store.getState().restrictions,
      ...e.restrictions
    }), e.concurrency != null) {
      const i = this._store.getState().queueConfig;
      t.queueConfig = { ...i, concurrency: e.concurrency };
    }
    if (e.autoProceed != null) {
      const i = t.queueConfig ?? this._store.getState().queueConfig;
      t.queueConfig = { ...i, autoProceed: e.autoProceed };
    }
    Object.keys(t).length > 0 && this._store.setState(t), this._resolveAuthAndEngine(e), (e.mode === "inline" || !e.mode) && (this._isOpen = !0);
  }
  async _resolveAuthAndEngine(e) {
    var r, o;
    const t = e.auth;
    if (t.mode === "sass-key") {
      this._apiBase = pe(t.container), this._authHeaders = se(t), this._ensureEngine(), (r = this._engine) == null || r.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders
      });
      return;
    }
    const i = ++this._authResolveId;
    try {
      const s = await Ve(t);
      if (i !== this._authResolveId) return;
      this._apiBase = s.apiBase, this._authHeaders = s.headers, this._ensureEngine(), (o = this._engine) == null || o.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders
      });
    } catch (s) {
      if (i !== this._authResolveId) return;
      console.error("[sfx-uploader] Auth resolution failed:", s);
    }
  }
  _ensureEngine() {
    !this._engine && this._apiBase && this._authHeaders && (this._engine = new qe(this._store, {
      apiBase: this._apiBase,
      authHeaders: this._authHeaders
    }), this._engine.start());
  }
  // --- Public event dispatching (spec §13.1) ---
  _dispatchPublic(e, t) {
    this.dispatchEvent(
      new CustomEvent(e, { bubbles: !0, composed: !0, detail: t })
    );
  }
  /**
   * React to store changes and dispatch public events + callbacks
   * for file status transitions.
   */
  _onStoreChange() {
    var r, o, s, n, d, p, h, u;
    const e = this._store.getState(), t = this._prevStoreState;
    if (this._prevStoreState = e, !t) return;
    const i = (r = this.config) == null ? void 0 : r.callbacks;
    for (const [x, f] of e.files) {
      const m = t.files.get(x);
      if (m) {
        if (m.status !== f.status)
          switch (f.status) {
            case "uploading":
              break;
            case "complete":
              f.response && (this._dispatchPublic(v.UPLOAD_COMPLETE, { file: f, response: f.response }), (o = i == null ? void 0 : i.onUploadComplete) == null || o.call(i, f, f.response));
              break;
            case "error":
            case "failed": {
              const _ = new Error(f.error ?? "Upload failed");
              this._dispatchPublic(v.UPLOAD_ERROR, { file: f, error: _ }), (s = i == null ? void 0 : i.onUploadError) == null || s.call(i, f, _);
              break;
            }
            case "retrying":
              this._dispatchPublic(v.UPLOAD_RETRY, { file: f, attempt: f.retryCount }), (n = i == null ? void 0 : i.onUploadRetry) == null || n.call(i, f, f.retryCount);
              break;
          }
        f.status === "uploading" && m.progress !== f.progress && (this._dispatchPublic(v.UPLOAD_PROGRESS, { file: f, progress: f.progress, speed: f.speed }), (d = i == null ? void 0 : i.onUploadProgress) == null || d.call(i, f, f.progress, f.speed));
      }
    }
    if (e.totalProgress !== t.totalProgress || e.totalSpeed !== t.totalSpeed) {
      const x = e.totalSpeed > 0 ? (e.totalBytes - e.totalBytesUploaded) / e.totalSpeed : 0;
      this._dispatchPublic(v.TOTAL_PROGRESS, {
        percentage: e.totalProgress,
        speed: e.totalSpeed,
        eta: x
      }), (p = i == null ? void 0 : i.onTotalProgress) == null || p.call(i, e.totalProgress, e.totalSpeed, x);
    }
    if (t.isUploading && !e.isUploading) {
      const x = [...e.files.values()];
      if (!x.some((m) => m.status === "cancelled")) {
        const m = x.filter((y) => y.status === "complete"), _ = x.filter((y) => y.status === "failed" || y.status === "error");
        this._dispatchPublic(v.ALL_COMPLETE, { successful: m, failed: _ }), (h = i == null ? void 0 : i.onAllComplete) == null || h.call(i, m, _);
        const w = (u = this.config) == null ? void 0 : u.closeOnComplete;
        if (w) {
          const y = typeof w == "number" ? w : 1500;
          this._closeOnCompleteTimer = setTimeout(() => {
            var C, D, ke;
            this._closeOnCompleteTimer = null, this._phase === "complete" && (this._dispatchPublic(v.COMPLETE_ACTION, {}), (ke = (D = (C = this.config) == null ? void 0 : C.callbacks) == null ? void 0 : D.onCompleteAction) == null || ke.call(D), this.close());
          }, y);
        }
      }
    }
  }
  get _mergedSources() {
    var d;
    const e = (d = this.config) == null ? void 0 : d.connectors;
    if (e === this._cachedSourcesConfig) return this._cachedSources;
    if (this._cachedSourcesConfig = e, !e)
      return this._cachedSources = W, this._cachedSources;
    const t = e.providers.length > 0 ? Je(e.providers) : [], i = e.customSources ?? [], r = W.filter((p) => p.id === "device" || p.id === "url"), o = W.filter((p) => p.id !== "device" && p.id !== "url"), s = /* @__PURE__ */ new Set(), n = [];
    for (const p of [...r, ...t, ...o, ...i])
      if (!s.has(p.id)) {
        if (E._RESERVED_IDS.has(p.id) && p.onActivate) {
          console.warn(`[sfx-uploader] Custom source id "${p.id}" conflicts with a built-in source and was skipped.`);
          continue;
        }
        s.add(p.id), n.push(p);
      }
    return this._cachedSources = n, this._cachedSources;
  }
  // --- Phase computation ---
  get _phase() {
    const e = this._storeCtrl.state, t = [...e.files.values()];
    if (t.length === 0) return "empty";
    if (e.isUploading) return "uploading";
    const i = /* @__PURE__ */ new Set(["complete", "rejected", "cancelled", "failed"]);
    return t.every((r) => i.has(r.status)) && t.some((r) => r.status === "complete" || r.status === "failed") ? "complete" : "ready";
  }
  // --- File handling ---
  _processIncomingFiles(e) {
    var i, r, o, s;
    const t = (i = this.config) == null ? void 0 : i.callbacks;
    for (const n of e) {
      const d = this._store.getState(), p = Ze(n, d.restrictions, d.files);
      if (p) {
        const x = n.type.startsWith("image/") ? URL.createObjectURL(n) : null, f = {
          id: q(),
          status: "rejected",
          file: n,
          remoteUrl: null,
          name: n.name,
          size: n.size,
          type: n.type,
          previewUrl: x,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error: p,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          remoteInfo: null
        };
        H(this._store, f), this._dispatchPublic(v.FILE_REJECTED, { file: f, reason: p }), (r = t == null ? void 0 : t.onFileRejected) == null || r.call(t, f, p);
        const m = (o = this.config) == null ? void 0 : o.rejectedFileAutoRemoveDelay, _ = m === !1 || m === 0 || m === void 0 ? 0 : m;
        if (_ > 0) {
          const w = f.id, y = setTimeout(() => {
            this._rejectedTimers.delete(w);
            const C = this._store.getState().files.get(w);
            C && C.status === "rejected" && Ce(this._store, w);
          }, _);
          this._rejectedTimers.set(w, y);
        }
        continue;
      }
      let h = null;
      n.type.startsWith("image/") && (h = URL.createObjectURL(n));
      const u = {
        id: q(),
        status: "idle",
        file: n,
        remoteUrl: null,
        name: n.name,
        size: n.size,
        type: n.type,
        previewUrl: h,
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
        remoteInfo: null
      };
      if (H(this._store, u), this._dispatchPublic(v.FILE_ADDED, { file: u }), (s = t == null ? void 0 : t.onFileAdded) == null || s.call(t, u), n.type.startsWith("video/")) {
        Ge(n).then((f) => {
          if (!f) return;
          const m = this._store.getState(), _ = m.files.get(u.id);
          if (_) {
            const w = new Map(m.files);
            w.set(u.id, { ..._, previewUrl: f }), this._store.setState({ files: w });
          } else
            URL.revokeObjectURL(f);
        });
        const x = document.createElement("video");
        x.preload = "metadata", x.src = URL.createObjectURL(n), x.onerror = () => {
          URL.revokeObjectURL(x.src);
        }, x.onloadedmetadata = () => {
          const f = x.duration;
          if (URL.revokeObjectURL(x.src), !isFinite(f)) return;
          const m = this._store.getState(), _ = m.files.get(u.id);
          if (_) {
            const w = new Map(m.files);
            w.set(u.id, { ..._, duration: f }), this._store.setState({ files: w });
          }
        };
      }
    }
    this._store.getState().queueConfig.autoProceed && this.upload();
  }
  _removeFile(e) {
    var o, s, n, d;
    const t = this._store.getState().files.get(e);
    if (!t) return;
    const i = { ...t };
    if ((this._fullscreenPreviewUrl && this._fullscreenPreviewUrl === t.previewUrl || this._fullscreenVideoFile && this._fullscreenVideoFile === t.file) && (this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null), t.previewUrl && URL.revokeObjectURL(t.previewUrl), t.file) {
      const p = this._videoBlobUrls.get(t.file);
      p && (URL.revokeObjectURL(p), this._videoBlobUrls.delete(t.file));
    }
    (t.status === "uploading" || t.status === "queued" || t.status === "retrying") && ((o = this._engine) == null || o.cancelFile(e)), Ce(this._store, e), this._dimCache.delete(e);
    const r = this._rejectedTimers.get(e);
    if (r && (clearTimeout(r), this._rejectedTimers.delete(e)), this._previewFileId === e) {
      const p = [...this._store.getState().files.values()];
      this._previewFileId = p.length > 0 ? p[0].id : null;
    }
    this._dispatchPublic(v.FILE_REMOVED, { file: i }), (d = (n = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : n.onFileRemoved) == null || d.call(n, i);
  }
  // --- Render ---
  render() {
    var t;
    const e = ((t = this.config) == null ? void 0 : t.mode) ?? "modal";
    return [...this._storeCtrl.state.files.values()], e === "modal" ? l`
        ${this._isOpen && !this._isMinimized ? l`
          <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
            <div class="modal-card">
              ${this._renderHeader()}
              ${this._renderBody()}
            </div>
          </div>
        ` : c}
      ` : l`
      <div class="inline">
        ${this._renderHeader()}
        ${this._renderBody()}
      </div>
    `;
  }
  _renderHeader() {
    var s, n;
    if (this._phase === "complete") return c;
    if (this._phase === "uploading") {
      const d = this._storeCtrl.state, p = [...d.files.values()], h = p.filter((x) => x.status === "complete").length, u = d.totalSpeed > 0 ? (d.totalBytes - d.totalBytesUploaded) / d.totalSpeed : 0;
      return l`
        <div class="header upload-header">
          <div class="float-header-left">
            <div class="float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>
            </div>
            <div>
              <div class="float-title">Uploading ${p.length} ${p.length === 1 ? "file" : "files"}</div>
              <div class="float-subtitle">${h} of ${p.length}${u > 0 ? ` · ~${oe(u)} left` : ""}</div>
            </div>
          </div>
        </div>
      `;
    }
    const e = ((s = this.config) == null ? void 0 : s.mode) ?? "modal", t = ((n = this.config) == null ? void 0 : n.headerButton) ?? (e === "modal" ? "close" : "none"), i = e === "modal" ? this._onModalDismiss : this._onInlineDismiss, r = t === "back" ? l`<button class="header-btn header-btn-back" aria-label="Back to Asset Picker" @click=${i}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>` : c, o = t === "close" ? l`<button class="header-btn header-btn-close" aria-label="Close" @click=${i}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>` : c;
    return l`
      <div class="header">
        ${r}
        ${t !== "back" ? l`
        <div class="header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
          </svg>
        </div>` : c}
        <div class="header-title">Upload Files</div>
        ${o}
      </div>
    `;
  }
  _getImageDimensions(e) {
    return e.previewUrl ? this._dimCache.has(e.id) ? Promise.resolve(this._dimCache.get(e.id)) : new Promise((t) => {
      const i = new Image();
      i.onload = () => {
        const r = { w: i.naturalWidth, h: i.naturalHeight };
        this._dimCache.set(e.id, r), t(r);
      }, i.onerror = () => {
        this._dimCache.set(e.id, null), t(null);
      }, i.src = e.previewUrl;
    }) : Promise.resolve(null);
  }
  _renderUploadOverlay(e) {
    var s;
    const t = this._storeCtrl.state, i = Math.round(t.totalProgress ?? 0), r = e.filter((n) => n.status === "complete").length, o = t.totalSpeed > 0 ? (t.totalBytes - t.totalBytesUploaded) / t.totalSpeed : 0;
    return l`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${i}%</div>
        <div class="upload-overlay-title">Uploading ${e.length} ${e.length === 1 ? "file" : "files"}</div>
        <div class="upload-overlay-subtitle">${r} of ${e.length} complete${o > 0 ? l` · ~${oe(o)} left` : c}</div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${i}%"></div>
        </div>
        ${(s = this.config) != null && s.minimizeOnUpload ? l`<button class="upload-overlay-minimize" @click=${this._onMinimize}>Minimize & continue in background</button>` : c}
      </div>
    `;
  }
  _renderFloatingPill(e) {
    const t = this._storeCtrl.state, i = Math.round(t.totalProgress ?? 0), r = this._phase === "complete", o = e.filter((d) => d.status === "complete").length, s = e.filter((d) => d.status === "failed").length, n = t.totalSpeed > 0 ? (t.totalBytes - t.totalBytesUploaded) / t.totalSpeed : 0;
    return this._isPillExpanded === !1 ? l`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${r ? s > 0 ? o > 0 ? l`<div class="float-collapsed-icon warn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>` : l`<div class="float-collapsed-icon error"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>` : l`<div class="float-collapsed-icon done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>` : l`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${r ? s > 0 ? o > 0 ? "Partially uploaded" : "Upload failed" : "Upload complete" : `Uploading ${e.length} ${e.length === 1 ? "file" : "files"}`}</span>
            ${r ? c : l`<span class="float-collapsed-pct">${i}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            <button title="Open uploader" @click=${this._onPillExpand}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
            </button>
            <button title="Expand" @click=${this._onPillClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
            <button title="Close" @click=${this._onPillDismiss}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      ` : l`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${r ? s > 0 ? o > 0 ? "warn" : "error" : "done" : ""}">
              ${r ? s > 0 ? o > 0 ? l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` : l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>` : l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>` : l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>`}
            </div>
            <div>
              <div class="float-title">${r ? s > 0 ? o > 0 ? "Partially uploaded" : "Upload failed" : "Upload complete" : `Uploading ${e.length} ${e.length === 1 ? "file" : "files"}`}</div>
              <div class="float-subtitle">${r ? `${o} ${o === 1 ? "file" : "files"} uploaded${s > 0 ? `, ${s} failed` : ""}` : `${o} of ${e.length}${n > 0 ? ` · ~${oe(n)} left` : ""}`}</div>
            </div>
          </div>
          <div class="float-actions">
            <button title="Expand" @click=${this._onPillExpand}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
            </button>
            <button title="Collapse" @click=${this._onPillClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <button title="Close" @click=${this._onPillDismiss}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">Overall progress</span>
            <span class="float-progress-pct ${r ? s > 0 ? o > 0 ? "warn" : "error" : "done" : ""}">${r ? "Done" : `${i}%`}</span>
          </div>
          <div class="float-bar"><div class="float-bar-fill ${r ? s > 0 ? o > 0 ? "warn" : "error" : "done" : ""}" style="width:${r ? 100 : i}%"></div></div>
        </div>
        <div class="float-items">
          ${e.map((d) => {
      const p = d.status === "failed" || d.status === "error";
      return l`
            <div class="float-item">
              <div class="float-item-thumb" style=${d.previewUrl ? `background-image:url(${d.previewUrl});background-size:cover;background-position:center` : ""}>
                ${d.previewUrl ? c : l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`}
              </div>
              <div class="float-item-info">
                <div class="float-item-name">${d.name}</div>
                <div class="float-item-size">${Y(d.size)}</div>
              </div>
              <div class="float-item-status">
                ${d.status === "complete" ? l`<div class="float-item-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg></div>` : p ? l`
                        <div class="float-item-error-wrap">
                          <svg class="float-item-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          <span class="float-item-tooltip">${d.error || "Upload failed"}</span>
                        </div>
                        <button class="float-item-retry" @click=${() => {
        var h;
        this._ensureEngine(), (h = this._engine) == null || h.retryFile(d.id);
      }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                        </button>` : l`<div class="float-item-spinner"></div>`}
              </div>
            </div>
          `;
    })}
        </div>
      </div>
    `;
  }
  _renderPreviewLayout(e) {
    var n;
    if (e.length === 0) return c;
    const t = e.find((d) => d.id === this._previewFileId) ?? e[0], i = ((n = t.name.split(".").pop()) == null ? void 0 : n.toUpperCase()) || "", r = new Date(t.addedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), o = this._store.getState().targetFolder, s = e.reduce((d, p) => d + (p.size || 0), 0);
    return l`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          <div class="file-grid-header">
            <span class="file-grid-header-text">${e.length} ${e.length === 1 ? "asset" : "assets"} · ${Y(s)}</span>
          </div>
          <sfx-file-list
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Se(this._storeCtrl.state.restrictions)}
            @source-click=${this._onDropTileSourceClick}
          ></sfx-file-list>
        </div>
        <div class="preview-divider"
          @pointerdown=${this._onSplitPointerDown}
          @pointermove=${this._onSplitPointerMove}
          @pointerup=${this._onSplitPointerUp}
          @lostpointercapture=${this._onSplitPointerUp}
        ></div>
        <div class="preview-panel" style="flex:${100 - this._splitPct}">
          <div class="preview-panel-header">
            <span class="preview-panel-filename" title=${t.name}>${t.name}</span>
            <div class="preview-header-actions">
              ${t.previewUrl || t.type.startsWith("video/") && t.file ? l`
                <button @click=${() => {
      this._fullscreenPreviewUrl = t.previewUrl, this._fullscreenVideoFile = t.type.startsWith("video/") && t.file ? t.file : null, this._fullscreenZoomed = !1;
    }} title="Fullscreen">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
              ` : c}
              <button @click=${() => {
      this._previewFileId = null;
    }} title="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          ${t.type.startsWith("video/") && t.file ? l`
                <div class="preview-img-wrap">
                  <video class="preview-image" src=${this._getVideoBlobUrl(t.file)} controls playsinline></video>
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t) === 0} @click=${() => this._navigatePreview(e, -1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t) === e.length - 1} @click=${() => this._navigatePreview(e, 1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              ` : t.previewUrl ? l`
                <div class="preview-img-wrap">
                  <img class="preview-image" src=${t.previewUrl} alt=${t.name} />
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t) === 0} @click=${() => this._navigatePreview(e, -1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t) === e.length - 1} @click=${() => this._navigatePreview(e, 1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              ` : l`
                <div class="preview-doc-wrap ${X(t)}">
                  <div class="preview-doc-icon ${X(t)}">
                    ${this._renderDocTypeIcon(X(t))}
                    <span class="preview-doc-ext ${X(t)}">${i}</span>
                  </div>
                  <button class="preview-nav prev" ?disabled=${e.indexOf(t) === 0} @click=${() => this._navigatePreview(e, -1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button class="preview-nav next" ?disabled=${e.indexOf(t) === e.length - 1} @click=${() => this._navigatePreview(e, 1)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                  </button>
                </div>
              `}
          <div class="preview-meta-list">
            <div class="preview-meta-row">
              <span class="preview-meta-label">Type</span>
              <span class="preview-meta-value">${i}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Size</span>
              <span class="preview-meta-value">${Y(t.size)}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Dimensions</span>
              <span class="preview-meta-value">${this._previewDims}</span>
            </div>
            <div class="preview-meta-row">
              <span class="preview-meta-label">Name</span>
              <span class="preview-meta-value truncate" title=${t.name}>${t.name}</span>
            </div>
            ${o ? l`
            <div class="preview-meta-row">
              <span class="preview-meta-label">Folder</span>
              <span class="preview-meta-value">${o}</span>
            </div>` : l`
            <div class="preview-meta-row">
              <span class="preview-meta-label">Added</span>
              <span class="preview-meta-value">${r}</span>
            </div>`}
          </div>
        </div>
      </div>
    `;
  }
  _renderDocTypeIcon(e) {
    switch (e) {
      case "pdf":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
      case "doc":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
      case "vid":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`;
      case "zip":
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></svg>`;
      default:
        return l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`;
    }
  }
  _navigatePreview(e, t) {
    var o;
    const r = e.findIndex((s) => s.id === this._previewFileId) + t;
    if (r >= 0 && r < e.length) {
      const s = (o = this.shadowRoot) == null ? void 0 : o.querySelector(".preview-image[controls]");
      s && (s.pause(), s.removeAttribute("src"), s.load()), this._previewFileId = e[r].id;
    }
  }
  _renderBody() {
    var s, n, d;
    const e = this._storeCtrl.state, t = [...e.files.values()], i = this._phase, r = Se(e.restrictions), o = t.length > 0;
    return l`
      <div class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-retry=${this._onFileRetry}
        @fill-metadata=${this._onFillMetadata}
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
          class="body ${o ? "has-files" : ""} ${this._bodyDragOver ? "body-drag-over" : ""}"
          @dragenter=${o ? this._onBodyDragEnter : c}
          @dragover=${o ? this._onBodyDragOver : c}
          @dragleave=${o ? this._onBodyDragLeave : c}
          @drop=${o ? this._onBodyDrop : c}
        >
          ${i === "complete" ? l`
                  <sfx-success-card
                    .fileCount=${t.filter((p) => p.status === "complete").length}
                    .totalSize=${t.filter((p) => p.status === "complete").reduce((p, h) => p + (h.size || 0), 0)}
                    .thumbnails=${t.filter((p) => p.status === "complete" && p.previewUrl).map((p) => p.previewUrl)}
                    .failedFiles=${t.filter((p) => p.status === "failed").map((p) => ({ id: p.id, name: p.name, error: p.error || "Upload failed" }))}
                    @close-uploader=${this._onSuccessCardClose}
                    @file-retry=${this._onFileRetry}
                    @retry-all=${this._onRetryAll}
                  ></sfx-success-card>
                ` : i === "uploading" ? this._renderUploadOverlay(t) : l`
                  ${o ? c : l`<sfx-drop-zone
                        .compact=${o}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${r}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((s = this.config) == null ? void 0 : s.sourcesLayout) ?? "pills"}
                      ></sfx-drop-zone>`}

                  ${o ? this._previewFileId ? this._renderPreviewLayout(t) : l`
                          <div class="asset-count">${t.length} ${t.length === 1 ? "file" : "files"} · ${Y(t.reduce((p, h) => p + (h.size || 0), 0))}</div>
                          <sfx-file-list
                            .files=${t}
                            .showDropTile=${!0}
                            .sources=${this._mergedSources}
                            .accept=${r}
                            @source-click=${this._onDropTileSourceClick}
                          ></sfx-file-list>
                        ` : c}
                `}
        </div>

        ${o && i !== "complete" && i !== "uploading" ? l`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((p, h) => p + (h.size || 0), 0)}
                .failedCount=${t.filter((p) => p.status === "failed" || p.status === "error").length}
                .completedCount=${t.filter((p) => p.status === "complete").length}
                .uploadProgress=${e.totalProgress ?? 0}
                .showFillMetadata=${!!((n = this.config) != null && n.showFillMetadata)}
              ></sfx-actions-bar>
            ` : c}

        ${this._showUrlDialog ? l`<sfx-url-dialog></sfx-url-dialog>` : c}
        ${this._showCameraDialog ? l`<sfx-camera-dialog></sfx-camera-dialog>` : c}
        ${this._showScreenCastDialog ? l`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>` : c}
        ${this._activeConnector && ((d = this.config) != null && d.connectors) ? l`
              <div class="connector-modal-backdrop" @click=${this._onConnectorBackdropClick}>
                <div class="connector-modal">
                  ${De.has(this._activeConnector) ? l`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      ` : l`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            ` : c}

        ${this._fullscreenPreviewUrl || this._fullscreenVideoFile ? l`
              <div
                class="fs-overlay ${this._fullscreenZoomed ? "zoomed" : ""} ${this._fsDragging ? "panning" : ""}"
                @click=${this._onFsOverlayClick}
                @mousedown=${this._onFsPanStart}
                @mousemove=${this._onFsPanMove}
                @mouseup=${this._onFsPanEnd}
                @mouseleave=${this._onFsPanEnd}
                @touchstart=${this._onFsTouchStart}
                @touchmove=${this._onFsTouchMove}
                @touchend=${this._onFsPanEnd}
              >
                <div class="fs-toolbar" @click=${(p) => p.stopPropagation()}>
                  <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed ? "Zoom out" : "Zoom in"}">
                    ${this._fullscreenZoomed ? l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>` : l`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
                  </button>
                  <button class="fs-btn" @click=${this._onFsClose} title="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                ${this._fullscreenVideoFile ? l`<video
                      class="fs-img"
                      src=${this._getVideoBlobUrl(this._fullscreenVideoFile)}
                      controls playsinline
                      draggable="false"
                      @click=${(p) => p.stopPropagation()}
                    ></video>` : l`<img
                      class="fs-img"
                      src=${this._fullscreenPreviewUrl}
                      alt=""
                      style=${this._fullscreenZoomed ? `transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)` : ""}
                      draggable="false"
                    />`}
                <button class="fs-nav prev" @click=${(p) => {
      p.stopPropagation(), this._navigateFs(-1);
    }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button class="fs-nav next" @click=${(p) => {
      p.stopPropagation(), this._navigateFs(1);
    }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
                </button>
              </div>
            ` : c}
      </div>
    `;
  }
  _navigateFs(e) {
    const t = [...this._store.getState().files.values()].filter(
      (o) => o.previewUrl || o.type.startsWith("video/") && o.file
    ), i = t.findIndex((o) => o.id === this._previewFileId);
    if (i === -1) return;
    const r = i + e;
    if (r >= 0 && r < t.length) {
      const o = t[r];
      this._fullscreenPreviewUrl = o.previewUrl, this._fullscreenVideoFile = o.type.startsWith("video/") && o.file ? o.file : null, this._previewFileId = o.id, this._fullscreenZoomed = !1, this._fsPanX = 0, this._fsPanY = 0;
    }
  }
  _getVideoBlobUrl(e) {
    let t = this._videoBlobUrls.get(e);
    return t || (t = URL.createObjectURL(e), this._videoBlobUrls.set(e, t)), t;
  }
  _revokeVideoBlobUrls() {
    for (const e of this._videoBlobUrls.values()) URL.revokeObjectURL(e);
    this._videoBlobUrls.clear();
  }
}, E.styles = S`
    :host {
      display: block;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
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
      --sfx-up-font: 'Inter', system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-checker-bg: #fff;
      --sfx-up-checker-tile: #f0f0f0;
    }

    /* --- Modal overlay --- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: var(--sfx-up-backdrop);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 912px;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
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
      transition: background 0.15s, color 0.15s;
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
      content: 'Back to Asset Picker';
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
      .header-btn { width: 28px; height: 28px; }
      .header-btn svg { width: 14px; height: 14px; }
    }
    @media (max-width: 480px) {
      .header-btn { width: 26px; height: 26px; }
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
      background: var(--sfx-up-bg, #fff);
    }

    .body.body-drag-over {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-radius: 8px;
      position: relative;
    }

    .body.body-drag-over::after {
      content: '';
      position: absolute;
      inset: 4px;
      border: 2px dashed var(--sfx-up-primary, #2563eb);
      border-radius: 8px;
      z-index: 100;
      pointer-events: none;
    }

    .body.has-files {
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
      gap: 0;
      padding: 0 0 0 8px;
      animation: bodyReveal 0.35s ease both;
    }

    .body.has-files:has(.preview-layout) {
      padding-right: 0;
    }

    @keyframes bodyReveal {
      from { opacity: 0.5; }
      to { opacity: 1; }
    }

    .body.has-files::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    .body sfx-drop-zone {
      position: relative;
      z-index: 1;
      overflow: visible;
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
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: var(--sfx-up-radius, 16px);
      background: var(--sfx-up-bg, #fff);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      min-height: var(--sfx-up-min-height, 660px);
      max-height: var(--sfx-up-max-height, 88vh);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
      transition: box-shadow 0.25s ease;
      animation: inlineIn 0.25s ease;
    }

    .inline:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03);
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
      --sfx-up-grid-min: max(30%, 140px);
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
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 4px;
      width: 1px;
      background: var(--sfx-up-border, #e8edf5);
    }

    .preview-divider::after {
      content: '';
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
      overflow: hidden;
      padding: 0;
    }

    .preview-panel::-webkit-scrollbar { width: 5px; }
    .preview-panel::-webkit-scrollbar-track { background: transparent; }
    .preview-panel::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }

    .preview-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 16px 24px 16px 16px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--sfx-up-border, #e8edf5);
    }

    .preview-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    .preview-panel-filename {
      font-size: 16px;
      font-weight: 400;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    .preview-panel-header button {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-muted, #9ca3af);
      transition: background 0.15s, color 0.15s;
      padding: 0;
      flex-shrink: 0;
    }

    .preview-panel-header button:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #374151);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    .file-info-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0 10px;
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      border-top: 1px solid var(--sfx-up-border, #e8edf5);
      margin-top: 4px;
      flex-shrink: 0;
    }

    .file-info-header svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #9ca3af);
    }

    .preview-doc-wrap {
      position: relative;
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-doc-wrap.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-doc-wrap.doc { background: linear-gradient(135deg, var(--sfx-up-primary-bg, #eff6ff), var(--sfx-up-primary-bg, #dbeafe)); }
    .preview-doc-wrap.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-doc-wrap.zip { background: linear-gradient(135deg, var(--warning-10, #fffbeb), var(--warning-10, #fef3c7)); }
    .preview-doc-wrap.gen { background: linear-gradient(135deg, var(--sfx-up-border-light, #f8fafc), var(--sfx-up-border-light, #f1f5f9)); }

    .preview-doc-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .preview-doc-icon svg {
      width: 48px;
      height: 48px;
      stroke-width: 1.5;
    }

    .preview-doc-icon.pdf svg { color: var(--sfx-up-error, #dc2626); }
    .preview-doc-icon.doc svg { color: var(--sfx-up-primary, #1d4ed8); }
    .preview-doc-icon.vid svg { color: #7c3aed; }
    .preview-doc-icon.zip svg { color: var(--warning-foreground, #b45309); }
    .preview-doc-icon.gen svg { color: var(--sfx-up-text-muted, #64748b); }

    .preview-doc-ext {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .preview-doc-ext.pdf { color: var(--sfx-up-error, #dc2626); }
    .preview-doc-ext.doc { color: var(--sfx-up-primary, #1d4ed8); }
    .preview-doc-ext.vid { color: #7c3aed; }
    .preview-doc-ext.zip { color: var(--warning-foreground, #b45309); }
    .preview-doc-ext.gen { color: var(--sfx-up-text-muted, #64748b); }

    .preview-img-wrap {
      position: relative;
      flex: 1;
      min-height: 0;
      background-color: var(--sfx-up-checker-bg);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }

    .preview-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      border: none;
    }

    .preview-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text, #1e293b);
      transition: all 0.15s;
      z-index: 2;
      padding: 0;
    }

    .preview-nav:hover {
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
      transform: translateY(-50%) scale(1.06);
    }

    .preview-nav:active {
      transform: translateY(-50%) scale(0.96);
    }

    .preview-nav svg {
      width: 18px;
      height: 18px;
    }

    .preview-nav.prev { left: 10px; }
    .preview-nav.next { right: 10px; }

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
      padding: 0 16px 12px;
    }

    .preview-meta-row {
      display: flex;
      align-items: baseline;
      padding: 12px 0;
    }

    .preview-meta-label {
      width: 110px;
      flex-shrink: 0;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .preview-meta-value {
      font-size: 14px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #1e293b));
      word-break: break-all;
      min-width: 0;
    }

    .preview-meta-value.truncate {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: normal;
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

    .upload-header .float-actions button svg { width: 16px; height: 16px; }

    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
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
      box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
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

    .float-icon svg { width: 14px; height: 14px; }

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

    .float-actions button svg { width: 14px; height: 14px; }

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

    .float-progress-pct.done { color: #22c55e; }
    .float-progress-pct.warn { color: #f59e0b; }
    .float-progress-pct.error { color: #ef4444; }

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

    .float-bar-fill.done { background: #22c55e; }
    .float-bar-fill.warn { background: #f59e0b; }
    .float-bar-fill.error { background: #ef4444; }

    .float-items {
      max-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(0,0,0,0.1) transparent;
    }

    .float-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 14px;
      border-bottom: 1px solid #f1f5f9;
      overflow: hidden;
    }

    .float-item:last-child { border-bottom: none; }

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

    .float-item-thumb svg { width: 16px; height: 16px; }

    .float-item-info { flex: 1; min-width: 0; overflow: hidden; }

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

    .float-item-done svg { width: 12px; height: 12px; }

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
      box-shadow: 0 2px 12px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08);
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

    .float-item-retry svg { width: 16px; height: 16px; }

    .float-item-retry:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-primary-hover, #1d4ed8); }

    @keyframes floatSlideIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* --- Connector modal overlay --- */
    .connector-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.18s ease both;
    }

    .connector-modal {
      background: var(--sfx-up-bg, #fff);
      border-radius: 12px;
      box-shadow: 0 28px 80px var(--sfx-up-shadow, rgba(0, 0, 0, 0.18)), 0 4px 16px oklch(0 0 0 / 0.06);
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
      from { opacity: 0; }
      to { opacity: 1; }
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
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* --- Fullscreen preview overlay --- */
    .fs-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
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
      z-index: 10001;
    }

    .fs-btn {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
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
      backdrop-filter: blur(8px);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10001;
      transition: background 0.15s;
      padding: 0;
    }

    .fs-nav:hover { background: rgba(255, 255, 255, 0.3); }
    .fs-nav:disabled { opacity: 0.3; cursor: default; }
    .fs-nav:disabled:hover { background: rgba(255, 255, 255, 0.15); }
    .fs-nav svg { width: 22px; height: 22px; }
    .fs-nav.prev { left: 20px; }
    .fs-nav.next { right: 20px; }

    .fs-filename {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
      font-weight: 500;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(8px);
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
      .modal-backdrop { animation: none; }
      .modal-card { animation: none; }
      .inline { animation: none; }
      .fs-overlay { animation: none; }
      .body.has-files { animation: none; }
    }

    /* --- Responsive: Tablet (≤ 768px) --- */
    @media (max-width: 768px) {
      .modal-backdrop { padding: 12px; }
      .modal-card { border-radius: 12px; max-height: 92vh; min-height: auto; }
      .header { padding: 12px 16px; }
      .header-icon { width: 28px; height: 28px; margin-right: 10px; }
      .header-icon svg { width: 14px; height: 14px; }
      .header-title { font-size: 14px; }
      .body { padding: 16px; }
      .body.has-files { padding: 0 0 12px 8px; }

      .preview-layout { flex-direction: column; }
      .preview-layout .file-grid-side {
        width: 100%;
        max-height: 140px;
        overflow-x: auto;
        overflow-y: hidden;
        flex-shrink: 0;
      }
      .preview-panel { padding: 0 0 16px; }

      .preview-topbar { padding: 8px 0; }

      .inline { border-radius: 12px; min-height: auto; }

      .connector-modal-backdrop { padding: 8px; }
      .connector-modal {
        max-width: 100%;
        height: 85vh;
        max-height: none;
        border-radius: 14px;
      }
    }

    /* --- Responsive: Mobile (≤ 480px) --- */
    @media (max-width: 480px) {
      .modal-backdrop { padding: 0; }
      .modal-card {
        border-radius: 0;
        max-height: 100vh;
        max-width: 100%;
        height: 100%;
      }
      .header { padding: 10px 14px; }
      .header-icon { width: 26px; height: 26px; margin-right: 8px; }
      .header-title { font-size: 14px; }
      .body { padding: 12px; }
      .body.has-files { padding: 0 0 8px 8px; }

      .preview-layout .file-grid-side { max-height: 100px; }
      .preview-panel { padding: 0 0 12px; }
      .preview-meta-row { padding: 6px 0; }
      .preview-meta-label { width: 90px; font-size: 12px; }
      .preview-meta-value { font-size: 12px; }

      .inline { max-height: 100vh; border-radius: 8px; box-shadow: none; }

      .connector-modal-backdrop { padding: 0; }
      .connector-modal {
        border-radius: 0;
        height: 100vh;
        min-height: auto;
      }
    }

    /* --- Responsive: Landscape / short viewports --- */
    @media (max-height: 700px) {
      .modal-card { min-height: auto; }
      .inline { min-height: auto; }
    }
  `, E._MODIFIABLE_STATUSES = /* @__PURE__ */ new Set([
  "idle",
  "queued",
  "rejected"
]), E._RESERVED_IDS = /* @__PURE__ */ new Set(["device", "camera", "url", "screen-cast"]), E);
$([
  b({ attribute: !1 })
], k.prototype, "config");
$([
  g()
], k.prototype, "_isOpen");
$([
  g()
], k.prototype, "_activeConnector");
$([
  g()
], k.prototype, "_showUrlDialog");
$([
  g()
], k.prototype, "_showCameraDialog");
$([
  g()
], k.prototype, "_showScreenCastDialog");
$([
  g()
], k.prototype, "_previewFileId");
$([
  g()
], k.prototype, "_previewDims");
$([
  g()
], k.prototype, "_splitPct");
$([
  g()
], k.prototype, "_fullscreenPreviewUrl");
$([
  g()
], k.prototype, "_fullscreenVideoFile");
$([
  g()
], k.prototype, "_fullscreenZoomed");
$([
  g()
], k.prototype, "_bodyDragOver");
$([
  g()
], k.prototype, "_isMinimized");
$([
  g()
], k.prototype, "_isPillExpanded");
let $t = k;
export {
  de as A,
  W as C,
  v as P,
  F as S,
  qe as U,
  z as a,
  le as b,
  B as c,
  Pe as d,
  ne as e,
  L as f,
  $t as g,
  Oe as h,
  se as i,
  Re as j,
  Ye as k,
  pe as l,
  Je as m,
  K as n,
  V as o,
  A as p,
  wt as q,
  Ve as r,
  kt as s,
  Ct as t,
  yt as u,
  _t as v
};
