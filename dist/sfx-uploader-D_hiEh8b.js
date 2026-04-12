import { LitElement as Z, css as G, svg as pe, html as f, render as ue, nothing as S } from "lit";
import { property as F, state as D, query as Cr } from "lit/decorators.js";
import { unsafeSVG as ne } from "lit/directives/unsafe-svg.js";
import { unsafeHTML as fe } from "lit/directives/unsafe-html.js";
class Qr {
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
      this.listeners.forEach((r) => r(this.state, t));
    } finally {
      this._notifying = !1;
    }
    if (this._pendingState) {
      const r = this._pendingState;
      this._pendingState = null, this.setState(r);
    }
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  destroy() {
    this.listeners.clear();
  }
}
function q(i, e, t) {
  const r = i.getState().files, o = r.get(e);
  if (!o) return;
  const n = new Map(r);
  n.set(e, { ...o, ...t }), i.setState({ files: n });
}
function me(i, e) {
  const t = new Map(i.getState().files);
  t.set(e.id, e), i.setState({ files: t });
}
function Wt(i, e) {
  const t = i.getState().files;
  if (!t.has(e)) return;
  const r = new Map(t);
  r.delete(e), i.setState({ files: r });
}
function ei() {
  return new Qr({
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
class ti {
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
function ri(i, e) {
  const t = new XMLHttpRequest();
  let r = !1;
  const n = `${e.apiBase.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e.folder)}`;
  t.open("POST", n);
  for (const [a, l] of Object.entries(e.authHeaders))
    t.setRequestHeader(a, l);
  t.upload.addEventListener("progress", (a) => {
    a.lengthComputable && !r && e.onProgress(a.loaded, a.total);
  }), t.addEventListener("load", () => {
    if (r) return;
    let a;
    try {
      a = JSON.parse(t.responseText);
    } catch {
      e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));
      return;
    }
    t.status >= 200 && t.status < 300 && a.status === "success" ? e.onComplete(a) : e.onError(new Error(a.hint || a.msg || `Upload failed (HTTP ${t.status})`));
  }), t.addEventListener("error", () => {
    r || e.onError(new Error("Network error — check your connection"));
  }), t.addEventListener("timeout", () => {
    r || e.onError(new Error("Upload timed out"));
  });
  const s = new FormData();
  if (i.file) {
    const a = {
      name: i.name,
      type: i.type
    };
    s.append("info[files[]]", JSON.stringify(a)), Object.keys(i.meta).length > 0 && s.append("meta[files[]]", JSON.stringify(i.meta)), i.tags.length > 0 && s.append("tags[files[]]", JSON.stringify(i.tags)), s.append("files[]", i.file, i.name);
  }
  return t.timeout = 6e4, t.send(s), {
    abort() {
      r = !0, t.abort();
    }
  };
}
function ii(i, e) {
  const t = new XMLHttpRequest();
  let r = !1;
  const n = `${e.apiBase.replace(/\/+$/, "")}/v4/files/upload_url`;
  t.open("POST", n);
  for (const [a, l] of Object.entries(e.authHeaders))
    t.setRequestHeader(a, l);
  if (t.setRequestHeader("Content-Type", "application/json"), t.addEventListener("load", () => {
    if (r) return;
    let a;
    try {
      a = JSON.parse(t.responseText);
    } catch {
      e.onError(new Error(`Invalid JSON response (HTTP ${t.status})`));
      return;
    }
    t.status >= 200 && t.status < 300 && a.status === "success" ? e.onComplete(a) : e.onError(new Error(a.hint || a.msg || `Upload failed (HTTP ${t.status})`));
  }), t.addEventListener("error", () => {
    r || e.onError(new Error("Network error — check your connection"));
  }), t.addEventListener("timeout", () => {
    r || e.onError(new Error("Upload timed out"));
  }), !i.remoteUrl)
    return e.onError(new Error("Remote URL is required for URL upload")), { abort() {
    } };
  const s = {
    files_urls: [{ url: i.remoteUrl, name: i.name }],
    dir: e.folder
  };
  return t.timeout = 6e4, t.send(JSON.stringify(s)), {
    abort() {
      r = !0, t.abort();
    }
  };
}
function ot(i) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "uppy-auth-token": i
  };
}
function Pe(i) {
  return i.replace(/\/+$/, "");
}
const oi = {
  "google-drive": "drive",
  dropbox: "dropbox",
  onedrive: "onedrive",
  box: "box",
  instagram: "instagram",
  facebook: "facebook",
  unsplash: "unsplash"
};
function Ye(i) {
  return oi[i] ?? i;
}
function In(i, e) {
  const t = Pe(i), r = btoa(JSON.stringify({ origin: window.location.origin })), o = Ye(e);
  return `${t}/${o}/connect?state=${encodeURIComponent(r)}`;
}
async function Bn(i, e, t, r = "") {
  const o = Pe(i), n = r ? `/${r}` : "", s = Ye(e), a = await fetch(`${o}/${s}/list${n}`, {
    method: "GET",
    headers: ot(t),
    credentials: "same-origin"
  });
  if (a.status === 401)
    throw new Ct();
  if (!a.ok) {
    const l = await a.json().catch(() => null);
    throw new Error((l == null ? void 0 : l.message) || `Companion list failed (HTTP ${a.status})`);
  }
  return a.json();
}
async function Mn(i, e, t) {
  const r = Pe(i), o = await fetch(`${r}/${t}`, {
    method: "GET",
    headers: ot(e),
    credentials: "same-origin"
  });
  if (o.status === 401)
    throw new Ct();
  if (!o.ok) {
    const n = await o.json().catch(() => null);
    throw new Error((n == null ? void 0 : n.message) || `Companion list failed (HTTP ${o.status})`);
  }
  return o.json();
}
async function Hn(i, e, t, r) {
  const o = Pe(i), n = Ye(e), s = r ? `q=${encodeURIComponent(t)}&${r}` : `q=${encodeURIComponent(t)}`, a = await fetch(`${o}/search/${n}/list?${s}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  });
  if (!a.ok) {
    const l = await a.json().catch(() => null);
    throw new Error((l == null ? void 0 : l.message) || `Search failed (HTTP ${a.status})`);
  }
  return a.json();
}
async function ni(i, e, t, r, o, n = !1) {
  const s = Pe(i), a = Ye(e), l = n ? `${s}/search/${a}/get/${r}` : `${s}/${a}/get/${r}`, p = n ? { Accept: "application/json", "Content-Type": "application/json" } : ot(t), h = await fetch(l, {
    method: "POST",
    headers: p,
    credentials: "same-origin",
    body: JSON.stringify({
      ...o,
      httpMethod: o.httpMethod ?? "POST",
      useFormData: o.useFormData ?? !0,
      fieldname: o.fieldname ?? "files[]"
    })
  });
  if (h.status === 401)
    throw new Ct();
  if (!h.ok) {
    const _ = await h.json().catch(() => null);
    throw new Error((_ == null ? void 0 : _.message) || `Companion upload failed (HTTP ${h.status})`);
  }
  return h.json();
}
async function qn(i, e, t) {
  const r = Pe(i), o = Ye(e), n = await fetch(`${r}/${o}/logout`, {
    method: "GET",
    headers: ot(t),
    credentials: "same-origin"
  });
  return n.ok ? n.json() : { ok: !1, revoked: !1 };
}
function si(i) {
  var o;
  const t = ((o = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(i)) == null ? void 0 : o[1]) ?? i;
  return `${location.protocol === "https:" ? "wss" : "ws"}://${t}`;
}
class Ct extends Error {
  constructor() {
    super("Authentication expired"), this.name = "AuthExpiredError";
  }
}
function ai(i, e) {
  const t = i.remoteInfo;
  if (!t)
    return e.onError(new Error("remoteInfo is required for companion upload")), { abort() {
    } };
  let r = !1, o = null;
  const s = `${e.apiBase.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e.folder)}`, a = {};
  i.meta && Object.keys(i.meta).length > 0 && Object.assign(a, i.meta), i.tags && i.tags.length > 0 && (a.tags = i.tags);
  const l = !t.token;
  return ni(t.companionUrl, t.provider, t.token, t.requestPath, {
    fileId: t.fileId,
    endpoint: s,
    headers: e.authHeaders,
    size: t.size,
    metadata: Object.keys(a).length > 0 ? a : void 0
  }, l).then((p) => {
    if (r) return;
    const _ = `${si(t.companionUrl)}/api/${p.token}`;
    try {
      o = new WebSocket(_);
    } catch {
      e.onError(new Error("Failed to connect to upload progress channel"));
      return;
    }
    o.onmessage = (E) => {
      var O, P, v;
      if (!r)
        try {
          const U = JSON.parse(E.data);
          switch (U.action) {
            case "progress": {
              const R = U.payload, x = R.bytesUploaded ?? 0, b = R.bytesTotal ?? (t.size || 1);
              e.onProgress(x, b);
              break;
            }
            case "success": {
              const R = U.payload;
              if (o == null || o.close(), (O = R.response) != null && O.responseText)
                try {
                  const x = JSON.parse(R.response.responseText);
                  if (x.status === "success") {
                    e.onComplete(x);
                    return;
                  }
                  e.onError(new Error(x.msg || "Upload failed"));
                  return;
                } catch {
                }
              e.onError(new Error("Upload completed but no valid response received"));
              break;
            }
            case "error": {
              o == null || o.close();
              const R = U.payload;
              let x = ((P = R.error) == null ? void 0 : P.message) || "Upload failed";
              if ((v = R.response) != null && v.responseText)
                try {
                  const b = JSON.parse(R.response.responseText);
                  x = b.hint || b.msg || b.message || x;
                } catch {
                }
              e.onError(new Error(x));
              break;
            }
          }
        } catch {
        }
    }, o.onerror = () => {
      r || e.onError(new Error("Upload progress connection failed"));
    }, o.onclose = () => {
      o = null;
    };
  }).catch((p) => {
    r || e.onError(p instanceof Error ? p : new Error(String(p)));
  }), {
    abort() {
      if (r = !0, o) {
        try {
          o.send(JSON.stringify({ action: "cancel", payload: {} }));
        } catch {
        }
        o.close(), o = null;
      }
    }
  };
}
function ct(i) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ct(i);
}
function li(i, e, t) {
  return Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function di(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ci(i, e, t) {
  return e = Le(e), pi(i, $t() ? Reflect.construct(e, t || [], Le(i).constructor) : e.apply(i, t));
}
function pi(i, e) {
  if (e && (ct(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fi(i);
}
function fi(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function ui(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), e && Fe(i, e);
}
function pt(i) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pt = function(r) {
    if (r === null || !gi(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(r)) return e.get(r);
      e.set(r, o);
    }
    function o() {
      return hi(r, arguments, Le(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), Fe(o, r);
  }, pt(i);
}
function hi(i, e, t) {
  if ($t()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, e);
  var o = new (i.bind.apply(i, r))();
  return t && Fe(o, t.prototype), o;
}
function $t() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($t = function() {
    return !!i;
  })();
}
function gi(i) {
  try {
    return Function.toString.call(i).indexOf("[native code]") !== -1;
  } catch {
    return typeof i == "function";
  }
}
function Fe(i, e) {
  return Fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Fe(i, e);
}
function Le(i) {
  return Le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Le(i);
}
var Re = /* @__PURE__ */ (function(i) {
  function e(t) {
    var r, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (di(this, e), r = ci(this, e, [t]), r.originalRequest = n, r.originalResponse = s, r.causingError = o, o != null && (t += ", caused by ".concat(o.toString())), n != null) {
      var a = n.getHeader("X-Request-ID") || "n/a", l = n.getMethod(), p = n.getURL(), h = s ? s.getStatus() : "n/a", _ = s ? s.getBody() || "" : "n/a";
      t += ", originated from request (method: ".concat(l, ", url: ").concat(p, ", response code: ").concat(h, ", response text: ").concat(_, ", request id: ").concat(a, ")");
    }
    return r.message = t, r;
  }
  return ui(e, i), li(e);
})(/* @__PURE__ */ pt(Error));
function Ae(i) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ae(i);
}
function vi(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xi(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, mi(r.key), r);
  }
}
function bi(i, e, t) {
  return e && xi(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function mi(i) {
  var e = yi(i, "string");
  return Ae(e) == "symbol" ? e : e + "";
}
function yi(i, e) {
  if (Ae(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (Ae(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var wi = /* @__PURE__ */ (function() {
  function i() {
    vi(this, i);
  }
  return bi(i, [{
    key: "listAllUploads",
    value: function() {
      return Promise.resolve([]);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      return Promise.resolve([]);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, r) {
      return Promise.resolve(null);
    }
  }]);
})();
const $r = "3.7.8", _i = $r, ze = typeof Buffer == "function", Gt = typeof TextDecoder == "function" ? new TextDecoder() : void 0, Xt = typeof TextEncoder == "function" ? new TextEncoder() : void 0, ki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Te = Array.prototype.slice.call(ki), Ke = ((i) => {
  let e = {};
  return i.forEach((t, r) => e[t] = r), e;
})(Te), Si = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, Y = String.fromCharCode.bind(String), Kt = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (i) => new Uint8Array(Array.prototype.slice.call(i, 0)), Ur = (i) => i.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), Er = (i) => i.replace(/[^A-Za-z0-9\+\/]/g, ""), Pr = (i) => {
  let e, t, r, o, n = "";
  const s = i.length % 3;
  for (let a = 0; a < i.length; ) {
    if ((t = i.charCodeAt(a++)) > 255 || (r = i.charCodeAt(a++)) > 255 || (o = i.charCodeAt(a++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | r << 8 | o, n += Te[e >> 18 & 63] + Te[e >> 12 & 63] + Te[e >> 6 & 63] + Te[e & 63];
  }
  return s ? n.slice(0, s - 3) + "===".substring(s) : n;
}, Ut = typeof btoa == "function" ? (i) => btoa(i) : ze ? (i) => Buffer.from(i, "binary").toString("base64") : Pr, ft = ze ? (i) => Buffer.from(i).toString("base64") : (i) => {
  let t = [];
  for (let r = 0, o = i.length; r < o; r += 4096)
    t.push(Y.apply(null, i.subarray(r, r + 4096)));
  return Ut(t.join(""));
}, Qe = (i, e = !1) => e ? Ur(ft(i)) : ft(i), Ci = (i) => {
  if (i.length < 2) {
    var e = i.charCodeAt(0);
    return e < 128 ? i : e < 2048 ? Y(192 | e >>> 6) + Y(128 | e & 63) : Y(224 | e >>> 12 & 15) + Y(128 | e >>> 6 & 63) + Y(128 | e & 63);
  } else {
    var e = 65536 + (i.charCodeAt(0) - 55296) * 1024 + (i.charCodeAt(1) - 56320);
    return Y(240 | e >>> 18 & 7) + Y(128 | e >>> 12 & 63) + Y(128 | e >>> 6 & 63) + Y(128 | e & 63);
  }
}, $i = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, zr = (i) => i.replace($i, Ci), Zt = ze ? (i) => Buffer.from(i, "utf8").toString("base64") : Xt ? (i) => ft(Xt.encode(i)) : (i) => Ut(zr(i)), Ce = (i, e = !1) => e ? Ur(Zt(i)) : Zt(i), Jt = (i) => Ce(i, !0), Ui = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, Ei = (i) => {
  switch (i.length) {
    case 4:
      var e = (7 & i.charCodeAt(0)) << 18 | (63 & i.charCodeAt(1)) << 12 | (63 & i.charCodeAt(2)) << 6 | 63 & i.charCodeAt(3), t = e - 65536;
      return Y((t >>> 10) + 55296) + Y((t & 1023) + 56320);
    case 3:
      return Y((15 & i.charCodeAt(0)) << 12 | (63 & i.charCodeAt(1)) << 6 | 63 & i.charCodeAt(2));
    default:
      return Y((31 & i.charCodeAt(0)) << 6 | 63 & i.charCodeAt(1));
  }
}, Or = (i) => i.replace(Ui, Ei), Rr = (i) => {
  if (i = i.replace(/\s+/g, ""), !Si.test(i))
    throw new TypeError("malformed base64.");
  i += "==".slice(2 - (i.length & 3));
  let e, t, r, o = [];
  for (let n = 0; n < i.length; )
    e = Ke[i.charAt(n++)] << 18 | Ke[i.charAt(n++)] << 12 | (t = Ke[i.charAt(n++)]) << 6 | (r = Ke[i.charAt(n++)]), t === 64 ? o.push(Y(e >> 16 & 255)) : r === 64 ? o.push(Y(e >> 16 & 255, e >> 8 & 255)) : o.push(Y(e >> 16 & 255, e >> 8 & 255, e & 255));
  return o.join("");
}, Et = typeof atob == "function" ? (i) => atob(Er(i)) : ze ? (i) => Buffer.from(i, "base64").toString("binary") : Rr, Tr = ze ? (i) => Kt(Buffer.from(i, "base64")) : (i) => Kt(Et(i).split("").map((e) => e.charCodeAt(0))), Dr = (i) => Tr(jr(i)), Pi = ze ? (i) => Buffer.from(i, "base64").toString("utf8") : Gt ? (i) => Gt.decode(Tr(i)) : (i) => Or(Et(i)), jr = (i) => Er(i.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), ut = (i) => Pi(jr(i)), zi = (i) => {
  if (typeof i != "string")
    return !1;
  const e = i.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, Fr = (i) => ({
  value: i,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), Lr = function() {
  const i = (e, t) => Object.defineProperty(String.prototype, e, Fr(t));
  i("fromBase64", function() {
    return ut(this);
  }), i("toBase64", function(e) {
    return Ce(this, e);
  }), i("toBase64URI", function() {
    return Ce(this, !0);
  }), i("toBase64URL", function() {
    return Ce(this, !0);
  }), i("toUint8Array", function() {
    return Dr(this);
  });
}, Ar = function() {
  const i = (e, t) => Object.defineProperty(Uint8Array.prototype, e, Fr(t));
  i("toBase64", function(e) {
    return Qe(this, e);
  }), i("toBase64URI", function() {
    return Qe(this, !0);
  }), i("toBase64URL", function() {
    return Qe(this, !0);
  });
}, Oi = () => {
  Lr(), Ar();
}, Ri = {
  version: $r,
  VERSION: _i,
  atob: Et,
  atobPolyfill: Rr,
  btoa: Ut,
  btoaPolyfill: Pr,
  fromBase64: ut,
  toBase64: Ce,
  encode: Ce,
  encodeURI: Jt,
  encodeURL: Jt,
  utob: zr,
  btou: Or,
  decode: ut,
  isValid: zi,
  fromUint8Array: Qe,
  toUint8Array: Dr,
  extendString: Lr,
  extendUint8Array: Ar,
  extendBuiltins: Oi
};
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ti(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var st, er;
function Di() {
  return er || (er = 1, st = function(e, t) {
    if (t = t.split(":")[0], e = +e, !e) return !1;
    switch (t) {
      case "http":
      case "ws":
        return e !== 80;
      case "https":
      case "wss":
        return e !== 443;
      case "ftp":
        return e !== 21;
      case "gopher":
        return e !== 70;
      case "file":
        return !1;
    }
    return e !== 0;
  }), st;
}
var Ze = {}, tr;
function ji() {
  if (tr) return Ze;
  tr = 1;
  var i = Object.prototype.hasOwnProperty, e;
  function t(s) {
    try {
      return decodeURIComponent(s.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function r(s) {
    try {
      return encodeURIComponent(s);
    } catch {
      return null;
    }
  }
  function o(s) {
    for (var a = /([^=?#&]+)=?([^&]*)/g, l = {}, p; p = a.exec(s); ) {
      var h = t(p[1]), _ = t(p[2]);
      h === null || _ === null || h in l || (l[h] = _);
    }
    return l;
  }
  function n(s, a) {
    a = a || "";
    var l = [], p, h;
    typeof a != "string" && (a = "?");
    for (h in s)
      if (i.call(s, h)) {
        if (p = s[h], !p && (p === null || p === e || isNaN(p)) && (p = ""), h = r(h), p = r(p), h === null || p === null) continue;
        l.push(h + "=" + p);
      }
    return l.length ? a + l.join("&") : "";
  }
  return Ze.stringify = n, Ze.parse = o, Ze;
}
var at, rr;
function Fi() {
  if (rr) return at;
  rr = 1;
  var i = Di(), e = ji(), t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, r = /[\n\r\t]/g, o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, n = /:\d+$/, s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function l(x) {
    return (x || "").toString().replace(t, "");
  }
  var p = [
    ["#", "hash"],
    // Extract from the back.
    ["?", "query"],
    // Extract from the back.
    function(b, g) {
      return E(g.protocol) ? b.replace(/\\/g, "/") : b;
    },
    ["/", "pathname"],
    // Extract from the back.
    ["@", "auth", 1],
    // Extract from the front.
    [NaN, "host", void 0, 1, 1],
    // Set left over value.
    [/:(\d*)$/, "port", void 0, 1],
    // RegExp the back.
    [NaN, "hostname", void 0, 1, 1]
    // Set left over.
  ], h = { hash: 1, query: 1 };
  function _(x) {
    var b;
    typeof window < "u" ? b = window : typeof Qt < "u" ? b = Qt : typeof self < "u" ? b = self : b = {};
    var g = b.location || {};
    x = x || g;
    var m = {}, z = typeof x, C;
    if (x.protocol === "blob:")
      m = new v(unescape(x.pathname), {});
    else if (z === "string") {
      m = new v(x, {});
      for (C in h) delete m[C];
    } else if (z === "object") {
      for (C in x)
        C in h || (m[C] = x[C]);
      m.slashes === void 0 && (m.slashes = o.test(x.href));
    }
    return m;
  }
  function E(x) {
    return x === "file:" || x === "ftp:" || x === "http:" || x === "https:" || x === "ws:" || x === "wss:";
  }
  function O(x, b) {
    x = l(x), x = x.replace(r, ""), b = b || {};
    var g = s.exec(x), m = g[1] ? g[1].toLowerCase() : "", z = !!g[2], C = !!g[3], L = 0, j;
    return z ? C ? (j = g[2] + g[3] + g[4], L = g[2].length + g[3].length) : (j = g[2] + g[4], L = g[2].length) : C ? (j = g[3] + g[4], L = g[3].length) : j = g[4], m === "file:" ? L >= 2 && (j = j.slice(2)) : E(m) ? j = g[4] : m ? z && (j = j.slice(2)) : L >= 2 && E(b.protocol) && (j = g[4]), {
      protocol: m,
      slashes: z || E(m),
      slashesCount: L,
      rest: j
    };
  }
  function P(x, b) {
    if (x === "") return b;
    for (var g = (b || "/").split("/").slice(0, -1).concat(x.split("/")), m = g.length, z = g[m - 1], C = !1, L = 0; m--; )
      g[m] === "." ? g.splice(m, 1) : g[m] === ".." ? (g.splice(m, 1), L++) : L && (m === 0 && (C = !0), g.splice(m, 1), L--);
    return C && g.unshift(""), (z === "." || z === "..") && g.push(""), g.join("/");
  }
  function v(x, b, g) {
    if (x = l(x), x = x.replace(r, ""), !(this instanceof v))
      return new v(x, b, g);
    var m, z, C, L, j, X, ie = p.slice(), be = typeof b, $ = this, Q = 0;
    for (be !== "object" && be !== "string" && (g = b, b = null), g && typeof g != "function" && (g = e.parse), b = _(b), z = O(x || "", b), m = !z.protocol && !z.slashes, $.slashes = z.slashes || m && b.slashes, $.protocol = z.protocol || b.protocol || "", x = z.rest, (z.protocol === "file:" && (z.slashesCount !== 2 || a.test(x)) || !z.slashes && (z.protocol || z.slashesCount < 2 || !E($.protocol))) && (ie[3] = [/(.*)/, "pathname"]); Q < ie.length; Q++) {
      if (L = ie[Q], typeof L == "function") {
        x = L(x, $);
        continue;
      }
      C = L[0], X = L[1], C !== C ? $[X] = x : typeof C == "string" ? (j = C === "@" ? x.lastIndexOf(C) : x.indexOf(C), ~j && (typeof L[2] == "number" ? ($[X] = x.slice(0, j), x = x.slice(j + L[2])) : ($[X] = x.slice(j), x = x.slice(0, j)))) : (j = C.exec(x)) && ($[X] = j[1], x = x.slice(0, j.index)), $[X] = $[X] || m && L[3] && b[X] || "", L[4] && ($[X] = $[X].toLowerCase());
    }
    g && ($.query = g($.query)), m && b.slashes && $.pathname.charAt(0) !== "/" && ($.pathname !== "" || b.pathname !== "") && ($.pathname = P($.pathname, b.pathname)), $.pathname.charAt(0) !== "/" && E($.protocol) && ($.pathname = "/" + $.pathname), i($.port, $.protocol) || ($.host = $.hostname, $.port = ""), $.username = $.password = "", $.auth && (j = $.auth.indexOf(":"), ~j ? ($.username = $.auth.slice(0, j), $.username = encodeURIComponent(decodeURIComponent($.username)), $.password = $.auth.slice(j + 1), $.password = encodeURIComponent(decodeURIComponent($.password))) : $.username = encodeURIComponent(decodeURIComponent($.auth)), $.auth = $.password ? $.username + ":" + $.password : $.username), $.origin = $.protocol !== "file:" && E($.protocol) && $.host ? $.protocol + "//" + $.host : "null", $.href = $.toString();
  }
  function U(x, b, g) {
    var m = this;
    switch (x) {
      case "query":
        typeof b == "string" && b.length && (b = (g || e.parse)(b)), m[x] = b;
        break;
      case "port":
        m[x] = b, i(b, m.protocol) ? b && (m.host = m.hostname + ":" + b) : (m.host = m.hostname, m[x] = "");
        break;
      case "hostname":
        m[x] = b, m.port && (b += ":" + m.port), m.host = b;
        break;
      case "host":
        m[x] = b, n.test(b) ? (b = b.split(":"), m.port = b.pop(), m.hostname = b.join(":")) : (m.hostname = b, m.port = "");
        break;
      case "protocol":
        m.protocol = b.toLowerCase(), m.slashes = !g;
        break;
      case "pathname":
      case "hash":
        if (b) {
          var z = x === "pathname" ? "/" : "#";
          m[x] = b.charAt(0) !== z ? z + b : b;
        } else
          m[x] = b;
        break;
      case "username":
      case "password":
        m[x] = encodeURIComponent(b);
        break;
      case "auth":
        var C = b.indexOf(":");
        ~C ? (m.username = b.slice(0, C), m.username = encodeURIComponent(decodeURIComponent(m.username)), m.password = b.slice(C + 1), m.password = encodeURIComponent(decodeURIComponent(m.password))) : m.username = encodeURIComponent(decodeURIComponent(b));
    }
    for (var L = 0; L < p.length; L++) {
      var j = p[L];
      j[4] && (m[j[1]] = m[j[1]].toLowerCase());
    }
    return m.auth = m.password ? m.username + ":" + m.password : m.username, m.origin = m.protocol !== "file:" && E(m.protocol) && m.host ? m.protocol + "//" + m.host : "null", m.href = m.toString(), m;
  }
  function R(x) {
    (!x || typeof x != "function") && (x = e.stringify);
    var b, g = this, m = g.host, z = g.protocol;
    z && z.charAt(z.length - 1) !== ":" && (z += ":");
    var C = z + (g.protocol && g.slashes || E(g.protocol) ? "//" : "");
    return g.username ? (C += g.username, g.password && (C += ":" + g.password), C += "@") : g.password ? (C += ":" + g.password, C += "@") : g.protocol !== "file:" && E(g.protocol) && !m && g.pathname !== "/" && (C += "@"), (m[m.length - 1] === ":" || n.test(g.hostname) && !g.port) && (m += ":"), C += m + g.pathname, b = typeof g.query == "object" ? x(g.query) : g.query, b && (C += b.charAt(0) !== "?" ? "?" + b : b), g.hash && (C += g.hash), C;
  }
  return v.prototype = { set: U, toString: R }, v.extractProtocol = O, v.location = _, v.trimLeft = l, v.qs = e, at = v, at;
}
var Li = Fi();
const Ai = /* @__PURE__ */ Ti(Li);
function Ii() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
    var e = Math.random() * 16 | 0, t = i === "x" ? e : e & 3 | 8;
    return t.toString(16);
  });
}
function ht() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  ht = function() {
    return e;
  };
  var i, e = {}, t = Object.prototype, r = t.hasOwnProperty, o = Object.defineProperty || function(u, d, c) {
    u[d] = c.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, s = n.iterator || "@@iterator", a = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function p(u, d, c) {
    return Object.defineProperty(u, d, { value: c, enumerable: !0, configurable: !0, writable: !0 }), u[d];
  }
  try {
    p({}, "");
  } catch {
    p = function(c, y, k) {
      return c[y] = k;
    };
  }
  function h(u, d, c, y) {
    var k = d && d.prototype instanceof R ? d : R, w = Object.create(k.prototype), T = new Q(y || []);
    return o(w, "_invoke", { value: X(u, c, T) }), w;
  }
  function _(u, d, c) {
    try {
      return { type: "normal", arg: u.call(d, c) };
    } catch (y) {
      return { type: "throw", arg: y };
    }
  }
  e.wrap = h;
  var E = "suspendedStart", O = "suspendedYield", P = "executing", v = "completed", U = {};
  function R() {
  }
  function x() {
  }
  function b() {
  }
  var g = {};
  p(g, s, function() {
    return this;
  });
  var m = Object.getPrototypeOf, z = m && m(m(de([])));
  z && z !== t && r.call(z, s) && (g = z);
  var C = b.prototype = R.prototype = Object.create(g);
  function L(u) {
    ["next", "throw", "return"].forEach(function(d) {
      p(u, d, function(c) {
        return this._invoke(d, c);
      });
    });
  }
  function j(u, d) {
    function c(k, w, T, A) {
      var I = _(u[k], u, w);
      if (I.type !== "throw") {
        var V = I.arg, N = V.value;
        return N && he(N) == "object" && r.call(N, "__await") ? d.resolve(N.__await).then(function(W) {
          c("next", W, T, A);
        }, function(W) {
          c("throw", W, T, A);
        }) : d.resolve(N).then(function(W) {
          V.value = W, T(V);
        }, function(W) {
          return c("throw", W, T, A);
        });
      }
      A(I.arg);
    }
    var y;
    o(this, "_invoke", { value: function(w, T) {
      function A() {
        return new d(function(I, V) {
          c(w, T, I, V);
        });
      }
      return y = y ? y.then(A, A) : A();
    } });
  }
  function X(u, d, c) {
    var y = E;
    return function(k, w) {
      if (y === P) throw Error("Generator is already running");
      if (y === v) {
        if (k === "throw") throw w;
        return { value: i, done: !0 };
      }
      for (c.method = k, c.arg = w; ; ) {
        var T = c.delegate;
        if (T) {
          var A = ie(T, c);
          if (A) {
            if (A === U) continue;
            return A;
          }
        }
        if (c.method === "next") c.sent = c._sent = c.arg;
        else if (c.method === "throw") {
          if (y === E) throw y = v, c.arg;
          c.dispatchException(c.arg);
        } else c.method === "return" && c.abrupt("return", c.arg);
        y = P;
        var I = _(u, d, c);
        if (I.type === "normal") {
          if (y = c.done ? v : O, I.arg === U) continue;
          return { value: I.arg, done: c.done };
        }
        I.type === "throw" && (y = v, c.method = "throw", c.arg = I.arg);
      }
    };
  }
  function ie(u, d) {
    var c = d.method, y = u.iterator[c];
    if (y === i) return d.delegate = null, c === "throw" && u.iterator.return && (d.method = "return", d.arg = i, ie(u, d), d.method === "throw") || c !== "return" && (d.method = "throw", d.arg = new TypeError("The iterator does not provide a '" + c + "' method")), U;
    var k = _(y, u.iterator, d.arg);
    if (k.type === "throw") return d.method = "throw", d.arg = k.arg, d.delegate = null, U;
    var w = k.arg;
    return w ? w.done ? (d[u.resultName] = w.value, d.next = u.nextLoc, d.method !== "return" && (d.method = "next", d.arg = i), d.delegate = null, U) : w : (d.method = "throw", d.arg = new TypeError("iterator result is not an object"), d.delegate = null, U);
  }
  function be(u) {
    var d = { tryLoc: u[0] };
    1 in u && (d.catchLoc = u[1]), 2 in u && (d.finallyLoc = u[2], d.afterLoc = u[3]), this.tryEntries.push(d);
  }
  function $(u) {
    var d = u.completion || {};
    d.type = "normal", delete d.arg, u.completion = d;
  }
  function Q(u) {
    this.tryEntries = [{ tryLoc: "root" }], u.forEach(be, this), this.reset(!0);
  }
  function de(u) {
    if (u || u === "") {
      var d = u[s];
      if (d) return d.call(u);
      if (typeof u.next == "function") return u;
      if (!isNaN(u.length)) {
        var c = -1, y = function k() {
          for (; ++c < u.length; ) if (r.call(u, c)) return k.value = u[c], k.done = !1, k;
          return k.value = i, k.done = !0, k;
        };
        return y.next = y;
      }
    }
    throw new TypeError(he(u) + " is not iterable");
  }
  return x.prototype = b, o(C, "constructor", { value: b, configurable: !0 }), o(b, "constructor", { value: x, configurable: !0 }), x.displayName = p(b, l, "GeneratorFunction"), e.isGeneratorFunction = function(u) {
    var d = typeof u == "function" && u.constructor;
    return !!d && (d === x || (d.displayName || d.name) === "GeneratorFunction");
  }, e.mark = function(u) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(u, b) : (u.__proto__ = b, p(u, l, "GeneratorFunction")), u.prototype = Object.create(C), u;
  }, e.awrap = function(u) {
    return { __await: u };
  }, L(j.prototype), p(j.prototype, a, function() {
    return this;
  }), e.AsyncIterator = j, e.async = function(u, d, c, y, k) {
    k === void 0 && (k = Promise);
    var w = new j(h(u, d, c, y), k);
    return e.isGeneratorFunction(d) ? w : w.next().then(function(T) {
      return T.done ? T.value : w.next();
    });
  }, L(C), p(C, l, "Generator"), p(C, s, function() {
    return this;
  }), p(C, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(u) {
    var d = Object(u), c = [];
    for (var y in d) c.push(y);
    return c.reverse(), function k() {
      for (; c.length; ) {
        var w = c.pop();
        if (w in d) return k.value = w, k.done = !1, k;
      }
      return k.done = !0, k;
    };
  }, e.values = de, Q.prototype = { constructor: Q, reset: function(d) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach($), !d) for (var c in this) c.charAt(0) === "t" && r.call(this, c) && !isNaN(+c.slice(1)) && (this[c] = i);
  }, stop: function() {
    this.done = !0;
    var d = this.tryEntries[0].completion;
    if (d.type === "throw") throw d.arg;
    return this.rval;
  }, dispatchException: function(d) {
    if (this.done) throw d;
    var c = this;
    function y(V, N) {
      return T.type = "throw", T.arg = d, c.next = V, N && (c.method = "next", c.arg = i), !!N;
    }
    for (var k = this.tryEntries.length - 1; k >= 0; --k) {
      var w = this.tryEntries[k], T = w.completion;
      if (w.tryLoc === "root") return y("end");
      if (w.tryLoc <= this.prev) {
        var A = r.call(w, "catchLoc"), I = r.call(w, "finallyLoc");
        if (A && I) {
          if (this.prev < w.catchLoc) return y(w.catchLoc, !0);
          if (this.prev < w.finallyLoc) return y(w.finallyLoc);
        } else if (A) {
          if (this.prev < w.catchLoc) return y(w.catchLoc, !0);
        } else {
          if (!I) throw Error("try statement without catch or finally");
          if (this.prev < w.finallyLoc) return y(w.finallyLoc);
        }
      }
    }
  }, abrupt: function(d, c) {
    for (var y = this.tryEntries.length - 1; y >= 0; --y) {
      var k = this.tryEntries[y];
      if (k.tryLoc <= this.prev && r.call(k, "finallyLoc") && this.prev < k.finallyLoc) {
        var w = k;
        break;
      }
    }
    w && (d === "break" || d === "continue") && w.tryLoc <= c && c <= w.finallyLoc && (w = null);
    var T = w ? w.completion : {};
    return T.type = d, T.arg = c, w ? (this.method = "next", this.next = w.finallyLoc, U) : this.complete(T);
  }, complete: function(d, c) {
    if (d.type === "throw") throw d.arg;
    return d.type === "break" || d.type === "continue" ? this.next = d.arg : d.type === "return" ? (this.rval = this.arg = d.arg, this.method = "return", this.next = "end") : d.type === "normal" && c && (this.next = c), U;
  }, finish: function(d) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var y = this.tryEntries[c];
      if (y.finallyLoc === d) return this.complete(y.completion, y.afterLoc), $(y), U;
    }
  }, catch: function(d) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var y = this.tryEntries[c];
      if (y.tryLoc === d) {
        var k = y.completion;
        if (k.type === "throw") {
          var w = k.arg;
          $(y);
        }
        return w;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(d, c, y) {
    return this.delegate = { iterator: de(d), resultName: c, nextLoc: y }, this.method === "next" && (this.arg = i), U;
  } }, e;
}
function ir(i, e, t, r, o, n, s) {
  try {
    var a = i[n](s), l = a.value;
  } catch (p) {
    t(p);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(r, o);
}
function Bi(i) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(r, o) {
      var n = i.apply(e, t);
      function s(l) {
        ir(n, r, o, s, a, "next", l);
      }
      function a(l) {
        ir(n, r, o, s, a, "throw", l);
      }
      s(void 0);
    });
  };
}
function Ir(i, e) {
  return qi(i) || Hi(i, e) || Br(i, e) || Mi();
}
function Mi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hi(i, e) {
  var t = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (t != null) {
    var r, o, n, s, a = [], l = !0, p = !1;
    try {
      if (n = (t = t.call(i)).next, e !== 0) for (; !(l = (r = n.call(t)).done) && (a.push(r.value), a.length !== e); l = !0) ;
    } catch (h) {
      p = !0, o = h;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (p) throw o;
      }
    }
    return a;
  }
}
function qi(i) {
  if (Array.isArray(i)) return i;
}
function he(i) {
  "@babel/helpers - typeof";
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, he(i);
}
function Ni(i, e) {
  var t = typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (!t) {
    if (Array.isArray(i) || (t = Br(i)) || e) {
      t && (i = t);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= i.length ? { done: !0 } : { done: !1, value: i[r++] };
      }, e: function(p) {
        throw p;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n = !0, s = !1, a;
  return { s: function() {
    t = t.call(i);
  }, n: function() {
    var p = t.next();
    return n = p.done, p;
  }, e: function(p) {
    s = !0, a = p;
  }, f: function() {
    try {
      !n && t.return != null && t.return();
    } finally {
      if (s) throw a;
    }
  } };
}
function Br(i, e) {
  if (i) {
    if (typeof i == "string") return or(i, e);
    var t = Object.prototype.toString.call(i).slice(8, -1);
    if (t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set") return Array.from(i);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return or(i, e);
  }
}
function or(i, e) {
  (e == null || e > i.length) && (e = i.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = i[t];
  return r;
}
function nr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ye(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? nr(Object(t), !0).forEach(function(r) {
      Yi(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : nr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function Yi(i, e, t) {
  return e = Mr(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function Vi(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sr(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, Mr(r.key), r);
  }
}
function Wi(i, e, t) {
  return e && sr(i.prototype, e), t && sr(i, t), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Mr(i) {
  var e = Gi(i, "string");
  return he(e) == "symbol" ? e : e + "";
}
function Gi(i, e) {
  if (he(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (he(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var et = "tus-v1", tt = "ietf-draft-03", De = "ietf-draft-05", Xi = {
  endpoint: null,
  uploadUrl: null,
  metadata: {},
  metadataForPartialUploads: {},
  fingerprint: null,
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  onUploadUrlAvailable: null,
  overridePatchMethod: !1,
  headers: {},
  addRequestId: !1,
  onBeforeRequest: null,
  onAfterResponse: null,
  onShouldRetry: Hr,
  chunkSize: Number.POSITIVE_INFINITY,
  retryDelays: [0, 1e3, 3e3, 5e3],
  parallelUploads: 1,
  parallelUploadBoundaries: null,
  storeFingerprintForResuming: !0,
  removeFingerprintOnSuccess: !1,
  uploadLengthDeferred: !1,
  uploadDataDuringCreation: !1,
  urlStorage: null,
  fileReader: null,
  httpStack: null,
  protocol: et
}, rt = /* @__PURE__ */ (function() {
  function i(e, t) {
    Vi(this, i), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null;
  }
  return Wi(i, [{
    key: "findPreviousUploads",
    value: function() {
      var t = this;
      return this.options.fingerprint(this.file, this.options).then(function(r) {
        return t._urlStorage.findUploadsByFingerprint(r);
      });
    }
  }, {
    key: "resumeFromPreviousUpload",
    value: function(t) {
      this.url = t.uploadUrl || null, this._parallelUploadUrls = t.parallelUploadUrls || null, this._urlStorageKey = t.urlStorageKey;
    }
  }, {
    key: "start",
    value: function() {
      var t = this, r = this.file;
      if (!r) {
        this._emitError(new Error("tus: no file or stream to upload provided"));
        return;
      }
      if (![et, tt, De].includes(this.options.protocol)) {
        this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));
        return;
      }
      if (!this.options.endpoint && !this.options.uploadUrl && !this.url) {
        this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
        return;
      }
      var o = this.options.retryDelays;
      if (o != null && Object.prototype.toString.call(o) !== "[object Array]") {
        this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
        return;
      }
      if (this.options.parallelUploads > 1)
        for (var n = 0, s = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; n < s.length; n++) {
          var a = s[n];
          if (this.options[a]) {
            this._emitError(new Error("tus: cannot use the ".concat(a, " option when parallelUploads is enabled")));
            return;
          }
        }
      if (this.options.parallelUploadBoundaries) {
        if (this.options.parallelUploads <= 1) {
          this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));
          return;
        }
        if (this.options.parallelUploads !== this.options.parallelUploadBoundaries.length) {
          this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));
          return;
        }
      }
      this.options.fingerprint(r, this.options).then(function(l) {
        return t._fingerprint = l, t._source ? t._source : t.options.fileReader.openFile(r, t.options.chunkSize);
      }).then(function(l) {
        if (t._source = l, t.options.uploadLengthDeferred)
          t._size = null;
        else if (t.options.uploadSize != null) {
          if (t._size = Number(t.options.uploadSize), Number.isNaN(t._size)) {
            t._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
            return;
          }
        } else if (t._size = t._source.size, t._size == null) {
          t._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));
          return;
        }
        t.options.parallelUploads > 1 || t._parallelUploadUrls != null ? t._startParallelUpload() : t._startSingleUpload();
      }).catch(function(l) {
        t._emitError(l);
      });
    }
    /**
     * Initiate the uploading procedure for a parallelized upload, where one file is split into
     * multiple request which are run in parallel.
     *
     * @api private
     */
  }, {
    key: "_startParallelUpload",
    value: function() {
      var t, r = this, o = this._size, n = 0;
      this._parallelUploads = [];
      var s = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads, a = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : Zi(this._source.size, s);
      this._parallelUploadUrls && a.forEach(function(h, _) {
        h.uploadUrl = r._parallelUploadUrls[_] || null;
      }), this._parallelUploadUrls = new Array(a.length);
      var l = a.map(function(h, _) {
        var E = 0;
        return r._source.slice(h.start, h.end).then(function(O) {
          var P = O.value;
          return new Promise(function(v, U) {
            var R = ye(ye({}, r.options), {}, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: h.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: !1,
              removeFingerprintOnSuccess: !1,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              // Reset this option as we are not doing a parallel upload.
              parallelUploadBoundaries: null,
              metadata: r.options.metadataForPartialUploads,
              // Add the header to indicate the this is a partial upload.
              headers: ye(ye({}, r.options.headers), {}, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: v,
              onError: U,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function(g) {
                n = n - E + g, E = g, r._emitProgress(n, o);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function() {
                r._parallelUploadUrls[_] = x.url, r._parallelUploadUrls.filter(function(g) {
                  return !!g;
                }).length === a.length && r._saveUploadInUrlStorage();
              }
            }), x = new i(P, R);
            x.start(), r._parallelUploads.push(x);
          });
        });
      }), p;
      Promise.all(l).then(function() {
        p = r._openRequest("POST", r.options.endpoint), p.setHeader("Upload-Concat", "final;".concat(r._parallelUploadUrls.join(" ")));
        var h = ar(r.options.metadata);
        return h !== "" && p.setHeader("Upload-Metadata", h), r._sendRequest(p, null);
      }).then(function(h) {
        if (!ke(h.getStatus(), 200)) {
          r._emitHttpError(p, h, "tus: unexpected response while creating upload");
          return;
        }
        var _ = h.getHeader("Location");
        if (_ == null) {
          r._emitHttpError(p, h, "tus: invalid or missing Location header");
          return;
        }
        r.url = pr(r.options.endpoint, _), "Created upload at ".concat(r.url), r._emitSuccess(h);
      }).catch(function(h) {
        r._emitError(h);
      });
    }
    /**
     * Initiate the uploading procedure for a non-parallel upload. Here the entire file is
     * uploaded in a sequential matter.
     *
     * @api private
     */
  }, {
    key: "_startSingleUpload",
    value: function() {
      if (this._aborted = !1, this.url != null) {
        "Resuming upload from previous URL: ".concat(this.url), this._resumeUpload();
        return;
      }
      if (this.options.uploadUrl != null) {
        "Resuming upload from provided URL: ".concat(this.options.uploadUrl), this.url = this.options.uploadUrl, this._resumeUpload();
        return;
      }
      this._createUpload();
    }
    /**
     * Abort any running request and stop the current upload. After abort is called, no event
     * handler will be invoked anymore. You can use the `start` method to resume the upload
     * again.
     * If `shouldTerminate` is true, the `terminate` function will be called to remove the
     * current upload from the server.
     *
     * @param {boolean} shouldTerminate True if the upload should be deleted from the server.
     * @return {Promise} The Promise will be resolved/rejected when the requests finish.
     */
  }, {
    key: "abort",
    value: function(t) {
      var r = this;
      if (this._parallelUploads != null) {
        var o = Ni(this._parallelUploads), n;
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var s = n.value;
            s.abort(t);
          }
        } catch (a) {
          o.e(a);
        } finally {
          o.f();
        }
      }
      return this._req !== null && this._req.abort(), this._aborted = !0, this._retryTimeout != null && (clearTimeout(this._retryTimeout), this._retryTimeout = null), !t || this.url == null ? Promise.resolve() : i.terminate(this.url, this.options).then(function() {
        return r._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function(t, r, o, n) {
      this._emitError(new Re(o, n, t, r));
    }
  }, {
    key: "_emitError",
    value: function(t) {
      var r = this;
      if (!this._aborted) {
        if (this.options.retryDelays != null) {
          var o = this._offset != null && this._offset > this._offsetBeforeRetry;
          if (o && (this._retryAttempt = 0), cr(t, this._retryAttempt, this.options)) {
            var n = this.options.retryDelays[this._retryAttempt++];
            this._offsetBeforeRetry = this._offset, this._retryTimeout = setTimeout(function() {
              r.start();
            }, n);
            return;
          }
        }
        if (typeof this.options.onError == "function")
          this.options.onError(t);
        else
          throw t;
      }
    }
    /**
     * Publishes notification if the upload has been successfully completed.
     *
     * @param {object} lastResponse Last HTTP response.
     * @api private
     */
  }, {
    key: "_emitSuccess",
    value: function(t) {
      this.options.removeFingerprintOnSuccess && this._removeFromUrlStorage(), typeof this.options.onSuccess == "function" && this.options.onSuccess({
        lastResponse: t
      });
    }
    /**
     * Publishes notification when data has been sent to the server. This
     * data may not have been accepted by the server yet.
     *
     * @param {number} bytesSent  Number of bytes sent to the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitProgress",
    value: function(t, r) {
      typeof this.options.onProgress == "function" && this.options.onProgress(t, r);
    }
    /**
     * Publishes notification when a chunk of data has been sent to the server
     * and accepted by the server.
     * @param {number} chunkSize  Size of the chunk that was accepted by the server.
     * @param {number} bytesAccepted Total number of bytes that have been
     *                                accepted by the server.
     * @param {number} bytesTotal Total number of bytes to be sent to the server.
     * @api private
     */
  }, {
    key: "_emitChunkComplete",
    value: function(t, r, o) {
      typeof this.options.onChunkComplete == "function" && this.options.onChunkComplete(t, r, o);
    }
    /**
     * Create a new upload using the creation extension by sending a POST
     * request to the endpoint. After successful creation the file will be
     * uploaded
     *
     * @api private
     */
  }, {
    key: "_createUpload",
    value: function() {
      var t = this;
      if (!this.options.endpoint) {
        this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
        return;
      }
      var r = this._openRequest("POST", this.options.endpoint);
      this.options.uploadLengthDeferred ? r.setHeader("Upload-Defer-Length", "1") : r.setHeader("Upload-Length", "".concat(this._size));
      var o = ar(this.options.metadata);
      o !== "" && r.setHeader("Upload-Metadata", o);
      var n;
      this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, n = this._addChunkToRequest(r)) : ((this.options.protocol === tt || this.options.protocol === De) && r.setHeader("Upload-Complete", "?0"), n = this._sendRequest(r, null)), n.then(function(s) {
        if (!ke(s.getStatus(), 200)) {
          t._emitHttpError(r, s, "tus: unexpected response while creating upload");
          return;
        }
        var a = s.getHeader("Location");
        if (a == null) {
          t._emitHttpError(r, s, "tus: invalid or missing Location header");
          return;
        }
        if (t.url = pr(t.options.endpoint, a), "Created upload at ".concat(t.url), typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._size === 0) {
          t._emitSuccess(s), t._source.close();
          return;
        }
        t._saveUploadInUrlStorage().then(function() {
          t.options.uploadDataDuringCreation ? t._handleUploadResponse(r, s) : (t._offset = 0, t._performUpload());
        });
      }).catch(function(s) {
        t._emitHttpError(r, null, "tus: failed to create upload", s);
      });
    }
    /*
     * Try to resume an existing upload. First a HEAD request will be sent
     * to retrieve the offset. If the request fails a new upload will be
     * created. In the case of a successful response the file will be uploaded.
     *
     * @api private
     */
  }, {
    key: "_resumeUpload",
    value: function() {
      var t = this, r = this._openRequest("HEAD", this.url), o = this._sendRequest(r, null);
      o.then(function(n) {
        var s = n.getStatus();
        if (!ke(s, 200)) {
          if (s === 423) {
            t._emitHttpError(r, n, "tus: upload is currently locked; retry later");
            return;
          }
          if (ke(s, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
            t._emitHttpError(r, n, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
            return;
          }
          t.url = null, t._createUpload();
          return;
        }
        var a = Number.parseInt(n.getHeader("Upload-Offset"), 10);
        if (Number.isNaN(a)) {
          t._emitHttpError(r, n, "tus: invalid or missing offset value");
          return;
        }
        var l = Number.parseInt(n.getHeader("Upload-Length"), 10);
        if (Number.isNaN(l) && !t.options.uploadLengthDeferred && t.options.protocol === et) {
          t._emitHttpError(r, n, "tus: invalid or missing length value");
          return;
        }
        typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._saveUploadInUrlStorage().then(function() {
          if (a === l) {
            t._emitProgress(l, l), t._emitSuccess(n);
            return;
          }
          t._offset = a, t._performUpload();
        });
      }).catch(function(n) {
        t._emitHttpError(r, null, "tus: failed to resume upload", n);
      });
    }
    /**
     * Start uploading the file using PATCH requests. The file will be divided
     * into chunks as specified in the chunkSize option. During the upload
     * the onProgress event handler may be invoked multiple times.
     *
     * @api private
     */
  }, {
    key: "_performUpload",
    value: function() {
      var t = this;
      if (!this._aborted) {
        var r;
        this.options.overridePatchMethod ? (r = this._openRequest("POST", this.url), r.setHeader("X-HTTP-Method-Override", "PATCH")) : r = this._openRequest("PATCH", this.url), r.setHeader("Upload-Offset", "".concat(this._offset));
        var o = this._addChunkToRequest(r);
        o.then(function(n) {
          if (!ke(n.getStatus(), 200)) {
            t._emitHttpError(r, n, "tus: unexpected response while uploading chunk");
            return;
          }
          t._handleUploadResponse(r, n);
        }).catch(function(n) {
          t._aborted || t._emitHttpError(r, null, "tus: failed to upload chunk at offset ".concat(t._offset), n);
        });
      }
    }
    /**
     * _addChunktoRequest reads a chunk from the source and sends it using the
     * supplied request object. It will not handle the response.
     *
     * @api private
     */
  }, {
    key: "_addChunkToRequest",
    value: function(t) {
      var r = this, o = this._offset, n = this._offset + this.options.chunkSize;
      return t.setProgressHandler(function(s) {
        r._emitProgress(o + s, r._size);
      }), this.options.protocol === et ? t.setHeader("Content-Type", "application/offset+octet-stream") : this.options.protocol === De && t.setHeader("Content-Type", "application/partial-upload"), (n === Number.POSITIVE_INFINITY || n > this._size) && !this.options.uploadLengthDeferred && (n = this._size), this._source.slice(o, n).then(function(s) {
        var a = s.value, l = s.done, p = a != null && a.size ? a.size : 0;
        r.options.uploadLengthDeferred && l && (r._size = r._offset + p, t.setHeader("Upload-Length", "".concat(r._size)));
        var h = r._offset + p;
        return !r.options.uploadLengthDeferred && l && h !== r._size ? Promise.reject(new Error("upload was configured with a size of ".concat(r._size, " bytes, but the source is done after ").concat(h, " bytes"))) : a === null ? r._sendRequest(t) : ((r.options.protocol === tt || r.options.protocol === De) && t.setHeader("Upload-Complete", l ? "?1" : "?0"), r._emitProgress(r._offset, r._size), r._sendRequest(t, a));
      });
    }
    /**
     * _handleUploadResponse is used by requests that haven been sent using _addChunkToRequest
     * and already have received a response.
     *
     * @api private
     */
  }, {
    key: "_handleUploadResponse",
    value: function(t, r) {
      var o = Number.parseInt(r.getHeader("Upload-Offset"), 10);
      if (Number.isNaN(o)) {
        this._emitHttpError(t, r, "tus: invalid or missing offset value");
        return;
      }
      if (this._emitProgress(o, this._size), this._emitChunkComplete(o - this._offset, o, this._size), this._offset = o, o === this._size) {
        this._emitSuccess(r), this._source.close();
        return;
      }
      this._performUpload();
    }
    /**
     * Create a new HTTP request object with the given method and URL.
     *
     * @api private
     */
  }, {
    key: "_openRequest",
    value: function(t, r) {
      var o = lr(t, r, this.options);
      return this._req = o, o;
    }
    /**
     * Remove the entry in the URL storage, if it has been saved before.
     *
     * @api private
     */
  }, {
    key: "_removeFromUrlStorage",
    value: function() {
      var t = this;
      this._urlStorageKey && (this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r) {
        t._emitError(r);
      }), this._urlStorageKey = null);
    }
    /**
     * Add the upload URL to the URL storage, if possible.
     *
     * @api private
     */
  }, {
    key: "_saveUploadInUrlStorage",
    value: function() {
      var t = this;
      if (!this.options.storeFingerprintForResuming || !this._fingerprint || this._urlStorageKey !== null)
        return Promise.resolve();
      var r = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: (/* @__PURE__ */ new Date()).toString()
      };
      return this._parallelUploads ? r.parallelUploadUrls = this._parallelUploadUrls : r.uploadUrl = this.url, this._urlStorage.addUpload(this._fingerprint, r).then(function(o) {
        t._urlStorageKey = o;
      });
    }
    /**
     * Send a request with the provided body.
     *
     * @api private
     */
  }, {
    key: "_sendRequest",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return dr(t, r, this.options);
    }
  }], [{
    key: "terminate",
    value: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = lr("DELETE", t, r);
      return dr(o, null, r).then(function(n) {
        if (n.getStatus() !== 204)
          throw new Re("tus: unexpected response while terminating upload", null, o, n);
      }).catch(function(n) {
        if (n instanceof Re || (n = new Re("tus: failed to terminate upload", n, o, null)), !cr(n, 0, r))
          throw n;
        var s = r.retryDelays[0], a = r.retryDelays.slice(1), l = ye(ye({}, r), {}, {
          retryDelays: a
        });
        return new Promise(function(p) {
          return setTimeout(p, s);
        }).then(function() {
          return i.terminate(t, l);
        });
      });
    }
  }]);
})();
function ar(i) {
  return Object.entries(i).map(function(e) {
    var t = Ir(e, 2), r = t[0], o = t[1];
    return "".concat(r, " ").concat(Ri.encode(String(o)));
  }).join(",");
}
function ke(i, e) {
  return i >= e && i < e + 100;
}
function lr(i, e, t) {
  var r = t.httpStack.createRequest(i, e);
  t.protocol === tt ? r.setHeader("Upload-Draft-Interop-Version", "5") : t.protocol === De ? r.setHeader("Upload-Draft-Interop-Version", "6") : r.setHeader("Tus-Resumable", "1.0.0");
  for (var o = t.headers || {}, n = 0, s = Object.entries(o); n < s.length; n++) {
    var a = Ir(s[n], 2), l = a[0], p = a[1];
    r.setHeader(l, p);
  }
  if (t.addRequestId) {
    var h = Ii();
    r.setHeader("X-Request-ID", h);
  }
  return r;
}
function dr(i, e, t) {
  return gt.apply(this, arguments);
}
function gt() {
  return gt = Bi(/* @__PURE__ */ ht().mark(function i(e, t, r) {
    var o;
    return ht().wrap(function(s) {
      for (; ; ) switch (s.prev = s.next) {
        case 0:
          if (typeof r.onBeforeRequest != "function") {
            s.next = 3;
            break;
          }
          return s.next = 3, r.onBeforeRequest(e);
        case 3:
          return s.next = 5, e.send(t);
        case 5:
          if (o = s.sent, typeof r.onAfterResponse != "function") {
            s.next = 9;
            break;
          }
          return s.next = 9, r.onAfterResponse(e, o);
        case 9:
          return s.abrupt("return", o);
        case 10:
        case "end":
          return s.stop();
      }
    }, i);
  })), gt.apply(this, arguments);
}
function Ki() {
  var i = !0;
  return typeof navigator < "u" && navigator.onLine === !1 && (i = !1), i;
}
function cr(i, e, t) {
  return t.retryDelays == null || e >= t.retryDelays.length || i.originalRequest == null ? !1 : t && typeof t.onShouldRetry == "function" ? t.onShouldRetry(i, e, t) : Hr(i);
}
function Hr(i) {
  var e = i.originalResponse ? i.originalResponse.getStatus() : 0;
  return (!ke(e, 400) || e === 409 || e === 423) && Ki();
}
function pr(i, e) {
  return new Ai(e, i).toString();
}
function Zi(i, e) {
  for (var t = Math.floor(i / e), r = [], o = 0; o < e; o++)
    r.push({
      start: t * o,
      end: t * (o + 1)
    });
  return r[e - 1].end = i, r;
}
rt.defaultOptions = Xi;
var qr = function() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
};
function Ji(i) {
  return new Promise(function(e, t) {
    var r = new XMLHttpRequest();
    r.responseType = "blob", r.onload = function() {
      var o = r.response;
      e(o);
    }, r.onerror = function(o) {
      t(o);
    }, r.open("GET", i), r.send();
  });
}
var Qi = function() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
};
function eo(i) {
  return new Promise(function(e, t) {
    var r = new FileReader();
    r.onload = function() {
      var o = new Uint8Array(r.result);
      e({
        value: o
      });
    }, r.onerror = function(o) {
      t(o);
    }, r.readAsArrayBuffer(i);
  });
}
function Ie(i) {
  "@babel/helpers - typeof";
  return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ie(i);
}
function to(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ro(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, oo(r.key), r);
  }
}
function io(i, e, t) {
  return e && ro(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function oo(i) {
  var e = no(i, "string");
  return Ie(e) == "symbol" ? e : e + "";
}
function no(i, e) {
  if (Ie(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (Ie(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var fr = /* @__PURE__ */ (function() {
  function i(e) {
    to(this, i), this._file = e, this.size = e.size;
  }
  return io(i, [{
    key: "slice",
    value: function(t, r) {
      if (Qi())
        return eo(this._file.slice(t, r));
      var o = this._file.slice(t, r), n = r >= this.size;
      return Promise.resolve({
        value: o,
        done: n
      });
    }
  }, {
    key: "close",
    value: function() {
    }
  }]);
})();
function Be(i) {
  "@babel/helpers - typeof";
  return Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Be(i);
}
function so(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ao(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, co(r.key), r);
  }
}
function lo(i, e, t) {
  return e && ao(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function co(i) {
  var e = po(i, "string");
  return Be(e) == "symbol" ? e : e + "";
}
function po(i, e) {
  if (Be(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (Be(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
function ur(i) {
  return i === void 0 ? 0 : i.size !== void 0 ? i.size : i.length;
}
function fo(i, e) {
  if (i.concat)
    return i.concat(e);
  if (i instanceof Blob)
    return new Blob([i, e], {
      type: i.type
    });
  if (i.set) {
    var t = new i.constructor(i.length + e.length);
    return t.set(i), t.set(e, i.length), t;
  }
  throw new Error("Unknown data type");
}
var uo = /* @__PURE__ */ (function() {
  function i(e) {
    so(this, i), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1;
  }
  return lo(i, [{
    key: "slice",
    value: function(t, r) {
      return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, r);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function(t, r) {
      var o = this, n = r <= this._bufferOffset + ur(this._buffer);
      if (this._done || n) {
        var s = this._getDataFromBuffer(t, r), a = s == null ? this._done : !1;
        return Promise.resolve({
          value: s,
          done: a
        });
      }
      return this._reader.read().then(function(l) {
        var p = l.value, h = l.done;
        return h ? o._done = !0 : o._buffer === void 0 ? o._buffer = p : o._buffer = fo(o._buffer, p), o._readUntilEnoughDataOrDone(t, r);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function(t, r) {
      t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
      var o = ur(this._buffer) === 0;
      return this._done && o ? null : this._buffer.slice(0, r - t);
    }
  }, {
    key: "close",
    value: function() {
      this._reader.cancel && this._reader.cancel();
    }
  }]);
})();
function ge(i) {
  "@babel/helpers - typeof";
  return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ge(i);
}
function vt() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  vt = function() {
    return e;
  };
  var i, e = {}, t = Object.prototype, r = t.hasOwnProperty, o = Object.defineProperty || function(u, d, c) {
    u[d] = c.value;
  }, n = typeof Symbol == "function" ? Symbol : {}, s = n.iterator || "@@iterator", a = n.asyncIterator || "@@asyncIterator", l = n.toStringTag || "@@toStringTag";
  function p(u, d, c) {
    return Object.defineProperty(u, d, { value: c, enumerable: !0, configurable: !0, writable: !0 }), u[d];
  }
  try {
    p({}, "");
  } catch {
    p = function(c, y, k) {
      return c[y] = k;
    };
  }
  function h(u, d, c, y) {
    var k = d && d.prototype instanceof R ? d : R, w = Object.create(k.prototype), T = new Q(y || []);
    return o(w, "_invoke", { value: X(u, c, T) }), w;
  }
  function _(u, d, c) {
    try {
      return { type: "normal", arg: u.call(d, c) };
    } catch (y) {
      return { type: "throw", arg: y };
    }
  }
  e.wrap = h;
  var E = "suspendedStart", O = "suspendedYield", P = "executing", v = "completed", U = {};
  function R() {
  }
  function x() {
  }
  function b() {
  }
  var g = {};
  p(g, s, function() {
    return this;
  });
  var m = Object.getPrototypeOf, z = m && m(m(de([])));
  z && z !== t && r.call(z, s) && (g = z);
  var C = b.prototype = R.prototype = Object.create(g);
  function L(u) {
    ["next", "throw", "return"].forEach(function(d) {
      p(u, d, function(c) {
        return this._invoke(d, c);
      });
    });
  }
  function j(u, d) {
    function c(k, w, T, A) {
      var I = _(u[k], u, w);
      if (I.type !== "throw") {
        var V = I.arg, N = V.value;
        return N && ge(N) == "object" && r.call(N, "__await") ? d.resolve(N.__await).then(function(W) {
          c("next", W, T, A);
        }, function(W) {
          c("throw", W, T, A);
        }) : d.resolve(N).then(function(W) {
          V.value = W, T(V);
        }, function(W) {
          return c("throw", W, T, A);
        });
      }
      A(I.arg);
    }
    var y;
    o(this, "_invoke", { value: function(w, T) {
      function A() {
        return new d(function(I, V) {
          c(w, T, I, V);
        });
      }
      return y = y ? y.then(A, A) : A();
    } });
  }
  function X(u, d, c) {
    var y = E;
    return function(k, w) {
      if (y === P) throw Error("Generator is already running");
      if (y === v) {
        if (k === "throw") throw w;
        return { value: i, done: !0 };
      }
      for (c.method = k, c.arg = w; ; ) {
        var T = c.delegate;
        if (T) {
          var A = ie(T, c);
          if (A) {
            if (A === U) continue;
            return A;
          }
        }
        if (c.method === "next") c.sent = c._sent = c.arg;
        else if (c.method === "throw") {
          if (y === E) throw y = v, c.arg;
          c.dispatchException(c.arg);
        } else c.method === "return" && c.abrupt("return", c.arg);
        y = P;
        var I = _(u, d, c);
        if (I.type === "normal") {
          if (y = c.done ? v : O, I.arg === U) continue;
          return { value: I.arg, done: c.done };
        }
        I.type === "throw" && (y = v, c.method = "throw", c.arg = I.arg);
      }
    };
  }
  function ie(u, d) {
    var c = d.method, y = u.iterator[c];
    if (y === i) return d.delegate = null, c === "throw" && u.iterator.return && (d.method = "return", d.arg = i, ie(u, d), d.method === "throw") || c !== "return" && (d.method = "throw", d.arg = new TypeError("The iterator does not provide a '" + c + "' method")), U;
    var k = _(y, u.iterator, d.arg);
    if (k.type === "throw") return d.method = "throw", d.arg = k.arg, d.delegate = null, U;
    var w = k.arg;
    return w ? w.done ? (d[u.resultName] = w.value, d.next = u.nextLoc, d.method !== "return" && (d.method = "next", d.arg = i), d.delegate = null, U) : w : (d.method = "throw", d.arg = new TypeError("iterator result is not an object"), d.delegate = null, U);
  }
  function be(u) {
    var d = { tryLoc: u[0] };
    1 in u && (d.catchLoc = u[1]), 2 in u && (d.finallyLoc = u[2], d.afterLoc = u[3]), this.tryEntries.push(d);
  }
  function $(u) {
    var d = u.completion || {};
    d.type = "normal", delete d.arg, u.completion = d;
  }
  function Q(u) {
    this.tryEntries = [{ tryLoc: "root" }], u.forEach(be, this), this.reset(!0);
  }
  function de(u) {
    if (u || u === "") {
      var d = u[s];
      if (d) return d.call(u);
      if (typeof u.next == "function") return u;
      if (!isNaN(u.length)) {
        var c = -1, y = function k() {
          for (; ++c < u.length; ) if (r.call(u, c)) return k.value = u[c], k.done = !1, k;
          return k.value = i, k.done = !0, k;
        };
        return y.next = y;
      }
    }
    throw new TypeError(ge(u) + " is not iterable");
  }
  return x.prototype = b, o(C, "constructor", { value: b, configurable: !0 }), o(b, "constructor", { value: x, configurable: !0 }), x.displayName = p(b, l, "GeneratorFunction"), e.isGeneratorFunction = function(u) {
    var d = typeof u == "function" && u.constructor;
    return !!d && (d === x || (d.displayName || d.name) === "GeneratorFunction");
  }, e.mark = function(u) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(u, b) : (u.__proto__ = b, p(u, l, "GeneratorFunction")), u.prototype = Object.create(C), u;
  }, e.awrap = function(u) {
    return { __await: u };
  }, L(j.prototype), p(j.prototype, a, function() {
    return this;
  }), e.AsyncIterator = j, e.async = function(u, d, c, y, k) {
    k === void 0 && (k = Promise);
    var w = new j(h(u, d, c, y), k);
    return e.isGeneratorFunction(d) ? w : w.next().then(function(T) {
      return T.done ? T.value : w.next();
    });
  }, L(C), p(C, l, "Generator"), p(C, s, function() {
    return this;
  }), p(C, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(u) {
    var d = Object(u), c = [];
    for (var y in d) c.push(y);
    return c.reverse(), function k() {
      for (; c.length; ) {
        var w = c.pop();
        if (w in d) return k.value = w, k.done = !1, k;
      }
      return k.done = !0, k;
    };
  }, e.values = de, Q.prototype = { constructor: Q, reset: function(d) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach($), !d) for (var c in this) c.charAt(0) === "t" && r.call(this, c) && !isNaN(+c.slice(1)) && (this[c] = i);
  }, stop: function() {
    this.done = !0;
    var d = this.tryEntries[0].completion;
    if (d.type === "throw") throw d.arg;
    return this.rval;
  }, dispatchException: function(d) {
    if (this.done) throw d;
    var c = this;
    function y(V, N) {
      return T.type = "throw", T.arg = d, c.next = V, N && (c.method = "next", c.arg = i), !!N;
    }
    for (var k = this.tryEntries.length - 1; k >= 0; --k) {
      var w = this.tryEntries[k], T = w.completion;
      if (w.tryLoc === "root") return y("end");
      if (w.tryLoc <= this.prev) {
        var A = r.call(w, "catchLoc"), I = r.call(w, "finallyLoc");
        if (A && I) {
          if (this.prev < w.catchLoc) return y(w.catchLoc, !0);
          if (this.prev < w.finallyLoc) return y(w.finallyLoc);
        } else if (A) {
          if (this.prev < w.catchLoc) return y(w.catchLoc, !0);
        } else {
          if (!I) throw Error("try statement without catch or finally");
          if (this.prev < w.finallyLoc) return y(w.finallyLoc);
        }
      }
    }
  }, abrupt: function(d, c) {
    for (var y = this.tryEntries.length - 1; y >= 0; --y) {
      var k = this.tryEntries[y];
      if (k.tryLoc <= this.prev && r.call(k, "finallyLoc") && this.prev < k.finallyLoc) {
        var w = k;
        break;
      }
    }
    w && (d === "break" || d === "continue") && w.tryLoc <= c && c <= w.finallyLoc && (w = null);
    var T = w ? w.completion : {};
    return T.type = d, T.arg = c, w ? (this.method = "next", this.next = w.finallyLoc, U) : this.complete(T);
  }, complete: function(d, c) {
    if (d.type === "throw") throw d.arg;
    return d.type === "break" || d.type === "continue" ? this.next = d.arg : d.type === "return" ? (this.rval = this.arg = d.arg, this.method = "return", this.next = "end") : d.type === "normal" && c && (this.next = c), U;
  }, finish: function(d) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var y = this.tryEntries[c];
      if (y.finallyLoc === d) return this.complete(y.completion, y.afterLoc), $(y), U;
    }
  }, catch: function(d) {
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var y = this.tryEntries[c];
      if (y.tryLoc === d) {
        var k = y.completion;
        if (k.type === "throw") {
          var w = k.arg;
          $(y);
        }
        return w;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(d, c, y) {
    return this.delegate = { iterator: de(d), resultName: c, nextLoc: y }, this.method === "next" && (this.arg = i), U;
  } }, e;
}
function hr(i, e, t, r, o, n, s) {
  try {
    var a = i[n](s), l = a.value;
  } catch (p) {
    t(p);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(r, o);
}
function ho(i) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(r, o) {
      var n = i.apply(e, t);
      function s(l) {
        hr(n, r, o, s, a, "next", l);
      }
      function a(l) {
        hr(n, r, o, s, a, "throw", l);
      }
      s(void 0);
    });
  };
}
function go(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vo(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, bo(r.key), r);
  }
}
function xo(i, e, t) {
  return e && vo(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function bo(i) {
  var e = mo(i, "string");
  return ge(e) == "symbol" ? e : e + "";
}
function mo(i, e) {
  if (ge(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (ge(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var yo = /* @__PURE__ */ (function() {
  function i() {
    go(this, i);
  }
  return xo(i, [{
    key: "openFile",
    value: (function() {
      var e = ho(/* @__PURE__ */ vt().mark(function r(o, n) {
        var s;
        return vt().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!(qr() && o && typeof o.uri < "u")) {
                l.next = 11;
                break;
              }
              return l.prev = 1, l.next = 4, Ji(o.uri);
            case 4:
              return s = l.sent, l.abrupt("return", new fr(s));
            case 8:
              throw l.prev = 8, l.t0 = l.catch(1), new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));
            case 11:
              if (!(typeof o.slice == "function" && typeof o.size < "u")) {
                l.next = 13;
                break;
              }
              return l.abrupt("return", Promise.resolve(new fr(o)));
            case 13:
              if (typeof o.read != "function") {
                l.next = 18;
                break;
              }
              if (n = Number(n), Number.isFinite(n)) {
                l.next = 17;
                break;
              }
              return l.abrupt("return", Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));
            case 17:
              return l.abrupt("return", Promise.resolve(new uo(o, n)));
            case 18:
              return l.abrupt("return", Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));
            case 19:
            case "end":
              return l.stop();
          }
        }, r, null, [[1, 8]]);
      }));
      function t(r, o) {
        return e.apply(this, arguments);
      }
      return t;
    })()
  }]);
})();
function wo(i, e) {
  return qr() ? Promise.resolve(_o(i, e)) : Promise.resolve(["tus-br", i.name, i.type, i.size, i.lastModified, e.endpoint].join("-"));
}
function _o(i, e) {
  var t = i.exif ? ko(JSON.stringify(i.exif)) : "noexif";
  return ["tus-rn", i.name || "noname", i.size || "nosize", t, e.endpoint].join("/");
}
function ko(i) {
  var e = 0;
  if (i.length === 0)
    return e;
  for (var t = 0; t < i.length; t++) {
    var r = i.charCodeAt(t);
    e = (e << 5) - e + r, e &= e;
  }
  return e;
}
function Me(i) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Me(i);
}
function Pt(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function So(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, Co(r.key), r);
  }
}
function zt(i, e, t) {
  return e && So(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Co(i) {
  var e = $o(i, "string");
  return Me(e) == "symbol" ? e : e + "";
}
function $o(i, e) {
  if (Me(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (Me(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var Uo = /* @__PURE__ */ (function() {
  function i() {
    Pt(this, i);
  }
  return zt(i, [{
    key: "createRequest",
    value: function(t, r) {
      return new Eo(t, r);
    }
  }, {
    key: "getName",
    value: function() {
      return "XHRHttpStack";
    }
  }]);
})(), Eo = /* @__PURE__ */ (function() {
  function i(e, t) {
    Pt(this, i), this._xhr = new XMLHttpRequest(), this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {};
  }
  return zt(i, [{
    key: "getMethod",
    value: function() {
      return this._method;
    }
  }, {
    key: "getURL",
    value: function() {
      return this._url;
    }
  }, {
    key: "setHeader",
    value: function(t, r) {
      this._xhr.setRequestHeader(t, r), this._headers[t] = r;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._headers[t];
    }
  }, {
    key: "setProgressHandler",
    value: function(t) {
      "upload" in this._xhr && (this._xhr.upload.onprogress = function(r) {
        r.lengthComputable && t(r.loaded);
      });
    }
  }, {
    key: "send",
    value: function() {
      var t = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return new Promise(function(o, n) {
        t._xhr.onload = function() {
          o(new Po(t._xhr));
        }, t._xhr.onerror = function(s) {
          n(s);
        }, t._xhr.send(r);
      });
    }
  }, {
    key: "abort",
    value: function() {
      return this._xhr.abort(), Promise.resolve();
    }
  }, {
    key: "getUnderlyingObject",
    value: function() {
      return this._xhr;
    }
  }]);
})(), Po = /* @__PURE__ */ (function() {
  function i(e) {
    Pt(this, i), this._xhr = e;
  }
  return zt(i, [{
    key: "getStatus",
    value: function() {
      return this._xhr.status;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._xhr.getResponseHeader(t);
    }
  }, {
    key: "getBody",
    value: function() {
      return this._xhr.responseText;
    }
  }, {
    key: "getUnderlyingObject",
    value: function() {
      return this._xhr;
    }
  }]);
})();
function He(i) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, He(i);
}
function zo(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Oo(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, To(r.key), r);
  }
}
function Ro(i, e, t) {
  return e && Oo(i.prototype, e), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function To(i) {
  var e = Do(i, "string");
  return He(e) == "symbol" ? e : e + "";
}
function Do(i, e) {
  if (He(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if (He(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(i);
}
var xt = !1;
try {
  xt = "localStorage" in window;
  var lt = "tusSupport", gr = localStorage.getItem(lt);
  localStorage.setItem(lt, gr), gr === null && localStorage.removeItem(lt);
} catch (i) {
  if (i.code === i.SECURITY_ERR || i.code === i.QUOTA_EXCEEDED_ERR)
    xt = !1;
  else
    throw i;
}
var jo = xt, Fo = /* @__PURE__ */ (function() {
  function i() {
    zo(this, i);
  }
  return Ro(i, [{
    key: "findAllUploads",
    value: function() {
      var t = this._findEntries("tus::");
      return Promise.resolve(t);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      var r = this._findEntries("tus::".concat(t, "::"));
      return Promise.resolve(r);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return localStorage.removeItem(t), Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, r) {
      var o = Math.round(Math.random() * 1e12), n = "tus::".concat(t, "::").concat(o);
      return localStorage.setItem(n, JSON.stringify(r)), Promise.resolve(n);
    }
  }, {
    key: "_findEntries",
    value: function(t) {
      for (var r = [], o = 0; o < localStorage.length; o++) {
        var n = localStorage.key(o);
        if (n.indexOf(t) === 0)
          try {
            var s = JSON.parse(localStorage.getItem(n));
            s.urlStorageKey = n, r.push(s);
          } catch {
          }
      }
      return r;
    }
  }]);
})();
function $e(i) {
  "@babel/helpers - typeof";
  return $e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $e(i);
}
function Lo(i, e) {
  if (!(i instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ao(i, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(i, Yr(r.key), r);
  }
}
function Io(i, e, t) {
  return t && Ao(i, t), Object.defineProperty(i, "prototype", { writable: !1 }), i;
}
function Bo(i, e, t) {
  return e = it(e), Mo(i, Nr() ? Reflect.construct(e, t || [], it(i).constructor) : e.apply(i, t));
}
function Mo(i, e) {
  if (e && ($e(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ho(i);
}
function Ho(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function Nr() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Nr = function() {
    return !!i;
  })();
}
function it(i) {
  return it = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, it(i);
}
function qo(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } }), Object.defineProperty(i, "prototype", { writable: !1 }), e && bt(i, e);
}
function bt(i, e) {
  return bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, bt(i, e);
}
function vr(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(i);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(i, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Se(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vr(Object(t), !0).forEach(function(r) {
      No(i, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : vr(Object(t)).forEach(function(r) {
      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return i;
}
function No(i, e, t) {
  return e = Yr(e), e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : i[e] = t, i;
}
function Yr(i) {
  var e = Yo(i, "string");
  return $e(e) == "symbol" ? e : e + "";
}
function Yo(i, e) {
  if ($e(i) != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(i, e);
    if ($e(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
var xr = Se(Se({}, rt.defaultOptions), {}, {
  httpStack: new Uo(),
  fileReader: new yo(),
  urlStorage: jo ? new Fo() : new wi(),
  fingerprint: wo
}), Vo = /* @__PURE__ */ (function(i) {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Lo(this, e), r = Se(Se({}, xr), r), Bo(this, e, [t, r]);
  }
  return qo(e, i), Io(e, null, [{
    key: "terminate",
    value: function(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return o = Se(Se({}, xr), o), rt.terminate(r, o);
    }
  }]);
})(rt);
const Wo = 10 * 1024 * 1024, Go = 5 * 1024 * 1024, Xo = "https://eu-on-24001.connector.filerobot.com/files", Ko = "https://eu-on-24001.connector.filerobot.com/json";
function Zo(i, e) {
  if (!e || !i.file) return !1;
  const t = e.sizeThreshold ?? Wo;
  return i.size >= t;
}
function Jo(i, e) {
  const { tusConfig: t } = e, r = e.apiBase.replace(/\/+$/, ""), o = t.endpoint || Xo, n = t.chunkSize ?? Go, s = t.resumable !== !1, a = t.parallelChunks ?? 1, l = t.retryDelays ?? [0, 1e3, 3e3, 5e3], p = r.split("/").pop() || "";
  let h = !1, _ = !1, E = !1;
  const O = {
    name: i.name,
    type: i.type,
    "filerobot-folder": e.folder
  }, P = async () => `tus-${i.id}-${o}`, v = new Vo(i.file, {
    endpoint: o,
    chunkSize: n,
    retryDelays: l,
    parallelUploads: a,
    storeFingerprintForResuming: s,
    removeFingerprintOnSuccess: !0,
    headers: {},
    metadata: O,
    fingerprint: P,
    // --- Dynamic auth headers (v5 pattern: onBeforeRequest) ---
    // Single source of auth headers for every tus request.
    // Uses getAuthHeaders() for latest SASS key, falls back to initial headers.
    onBeforeRequest(g) {
      const m = e.getAuthHeaders ? e.getAuthHeaders() : e.authHeaders;
      for (const [z, C] of Object.entries(m))
        g.setHeader(z, C);
      g.setHeader("X-Filerobot-Token", p);
    },
    // --- Store upload URL for cross-session resume (v5's onReceiveUploadUrl) ---
    // Only notify once to avoid redundant store updates (v5 checks uploadUrl !== existing).
    onUploadUrlAvailable() {
      v.url && e.onUploadUrlAvailable && !E && (E = !0, e.onUploadUrlAvailable(v.url));
    },
    onProgress(g, m) {
      !_ && !h && e.onProgress(g, m);
    },
    onSuccess() {
      var z;
      if (_) return;
      x();
      const g = v.url || "", m = (z = g.match(/files\/([^/?]+)/)) == null ? void 0 : z[1];
      m ? en(m, i.size).then((C) => {
        _ || e.onComplete(C);
      }).catch((C) => {
        _ || e.onError(C);
      }) : e.onComplete({
        status: "success",
        file: {
          uuid: "",
          name: i.name,
          extension: i.name.split(".").pop() || "",
          type: i.type,
          size: i.size,
          url: { public: g, cdn: g },
          meta: i.meta,
          tags: i.tags,
          info: {},
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          modified_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      });
    },
    onError(g) {
      _ || (x(), Qo(g) ? e.onError(new Error(
        "Network error during upload — check your connection or firewall settings"
      )) : e.onError(g instanceof Error ? g : new Error(String(g))));
    },
    // --- 429 rate-limit and retry handling (matches v5's defaultOnShouldRetry) ---
    onShouldRetry(g, m, z) {
      var L;
      const C = (L = g.originalResponse) == null ? void 0 : L.getStatus();
      return C === 429 ? !0 : !(C && C > 400 && C < 500 && C !== 409);
    }
  });
  let U = null, R = null;
  typeof window < "u" && (U = () => {
    var g;
    !h && !_ && (h = !0, v.abort(!1), (g = e.onPause) == null || g.call(e));
  }, R = () => {
    var g;
    h && !_ && (h = !1, v.start(), (g = e.onResume) == null || g.call(e));
  }, window.addEventListener("offline", U), window.addEventListener("online", R));
  const x = () => {
    U && window.removeEventListener("offline", U), R && window.removeEventListener("online", R);
  }, b = () => {
    try {
      v.start();
    } catch (g) {
      x(), e.onError(g instanceof Error ? g : new Error(String(g)));
    }
  };
  return s ? v.findPreviousUploads().then((g) => {
    g.length > 0 && !_ && v.resumeFromPreviousUpload(g[0]), _ || b();
  }) : b(), {
    abort() {
      _ = !0, h = !1, x(), v.abort(!0);
    },
    pause() {
      !h && !_ && (h = !0, v.abort(!1));
    },
    resume() {
      h && !_ && (h = !1, v.start());
    },
    isPaused() {
      return h;
    }
  };
}
function Qo(i) {
  var e;
  if (i instanceof Re) {
    const t = (e = i.originalRequest) == null ? void 0 : e.getUnderlyingObject();
    return t && typeof t.readyState == "number" && typeof t.status == "number" ? t.readyState !== 0 && t.readyState !== 4 || t.status === 0 : i.originalResponse == null && i.causingError != null;
  }
  return !1;
}
async function en(i, e) {
  const t = `${Ko}/${i}`, r = e > 1e8 ? 13e3 : 6e3, o = 3;
  for (let n = 0; n <= o; n++) {
    n > 0 && await new Promise((l) => setTimeout(l, r));
    const s = await fetch(t);
    if (s.status === 404 && n < o) continue;
    if (!s.ok)
      throw new Error(`Failed to fetch file record (HTTP ${s.status})`);
    const a = await s.json();
    if (a.file)
      return { status: "success", file: a.file };
    if (a.status === "success") return a;
    if (!(n < o))
      throw new Error(a.msg || "File record not available after upload");
  }
  throw new Error("File record not available after upload");
}
class tn {
  constructor(e, t) {
    this.activeUploads = /* @__PURE__ */ new Map(), this.pausedUploads = /* @__PURE__ */ new Map(), this.retryTimers = /* @__PURE__ */ new Map(), this.unsubscribe = null, this.store = e, this.config = t;
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
    for (const r of e.values())
      r.status === "idle" ? (q(this.store, r.id, { status: "queued" }), t = !0) : r.status === "queued" && (t = !0);
    t && (this.store.setState({ isUploading: !0 }), this.processQueue());
  }
  /**
   * Retry a single failed/errored file.
   */
  retryFile(e) {
    const t = this.store.getState().files.get(e);
    !t || t.status !== "error" && t.status !== "failed" || (q(this.store, e, {
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
      (t.status === "error" || t.status === "failed") && q(this.store, t.id, {
        status: "queued",
        error: null,
        progress: 0,
        bytesUploaded: 0,
        speed: 0
      });
    this.processQueue();
  }
  /**
   * Pause a single tus upload.
   * Removes from active slots so another queued file can start (v5 pattern).
   */
  pauseFile(e) {
    const t = this.activeUploads.get(e);
    t && "pause" in t && (t.pause(), this.activeUploads.delete(e), this.pausedUploads.set(e, t), q(this.store, e, { status: "paused" }), this.processQueue());
  }
  /**
   * Resume a single paused tus upload.
   * Re-queues through processQueue so it respects concurrency limits (v5 pattern).
   */
  resumeFile(e) {
    const t = this.pausedUploads.get(e);
    if (!t) return;
    const { concurrency: r } = this.store.getState().queueConfig;
    this.activeUploads.size < r ? (this.pausedUploads.delete(e), t.resume(), this.activeUploads.set(e, t), q(this.store, e, { status: "uploading" })) : q(this.store, e, { status: "queued" });
  }
  /**
   * Cancel a single file upload.
   */
  cancelFile(e) {
    const t = this.store.getState().files.get(e);
    !t || !br(t.status) || (this.abortPausedUpload(e), this.abortUpload(e), q(this.store, e, { status: "cancelled" }));
  }
  /**
   * Cancel all active/queued uploads.
   */
  cancelAll() {
    const { files: e } = this.store.getState();
    for (const t of e.values())
      br(t.status) && (this.abortPausedUpload(t.id), this.abortUpload(t.id), q(this.store, t.id, { status: "cancelled" }));
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
    for (const t of [...this.pausedUploads.keys()])
      this.abortPausedUpload(t);
    for (const t of this.retryTimers.values())
      clearTimeout(t);
    this.retryTimers.clear(), (e = this.unsubscribe) == null || e.call(this), this.unsubscribe = null;
  }
  // --- Private ---
  processQueue() {
    const e = this.store.getState();
    if (e.isPaused) return;
    const { concurrency: t } = e.queueConfig, r = this.activeUploads.size, o = t - r;
    if (o <= 0) return;
    const s = [...e.files.values()].filter((a) => a.status === "queued").sort((a, l) => a.retryCount !== l.retryCount ? l.retryCount - a.retryCount : a.addedAt - l.addedAt).slice(0, o);
    for (const a of s) {
      const l = this.pausedUploads.get(a.id);
      l ? (this.pausedUploads.delete(a.id), l.resume(), this.activeUploads.set(a.id, l), q(this.store, a.id, { status: "uploading" })) : this.startUpload(a);
    }
  }
  startUpload(e) {
    const t = !e.remoteInfo && !e.remoteUrl && Zo(e, this.config.tusConfig);
    q(this.store, e.id, { status: "uploading", error: null, isTus: t });
    let r = 0, o = Date.now(), n = 0;
    const s = {
      apiBase: this.config.apiBase,
      authHeaders: this.config.authHeaders,
      folder: this.store.getState().targetFolder,
      onComplete: (p) => this.handleComplete(e.id, p),
      onError: (p) => this.handleError(e.id, p)
    }, a = (p, h) => {
      const _ = Date.now(), E = (_ - o) / 1e3;
      if (E > 0) {
        const P = (p - r) / E;
        n = n === 0 ? P : 0.3 * P + 0.7 * n;
      }
      r = p, o = _;
      const O = h > 0 ? Math.min(p / h * 100, 100) : 0;
      q(this.store, e.id, { progress: O, bytesUploaded: p, speed: n }), this.updateTotalProgress();
    };
    let l;
    if (e.remoteInfo)
      l = ai(e, { ...s, onProgress: a });
    else if (e.remoteUrl)
      l = ii(e, s);
    else if (t) {
      const p = Jo(e, {
        ...s,
        onProgress: a,
        tusConfig: this.config.tusConfig,
        // Supply a getter so tus picks up renewed SASS keys mid-upload
        getAuthHeaders: () => this.config.authHeaders,
        // Store the tus upload URL on file state for cross-session resume
        onUploadUrlAvailable: (h) => {
          q(this.store, e.id, { tusUploadUrl: h });
        },
        // Sync UI state when tus pauses/resumes internally (e.g. network offline/online)
        onPause: () => {
          this.activeUploads.delete(e.id), this.pausedUploads.set(e.id, p), q(this.store, e.id, { status: "paused" }), this.processQueue();
        },
        onResume: () => {
          this.pausedUploads.delete(e.id), this.activeUploads.set(e.id, p), q(this.store, e.id, { status: "uploading" });
        }
      });
      l = p;
    } else
      l = ri(e, { ...s, onProgress: a });
    this.activeUploads.set(e.id, l);
  }
  handleComplete(e, t) {
    this.activeUploads.delete(e), q(this.store, e, {
      status: "complete",
      progress: 100,
      response: t
    }), this.updateTotalProgress(), this.checkAllComplete(), this.processQueue();
  }
  handleError(e, t) {
    this.activeUploads.delete(e);
    const r = this.store.getState().files.get(e);
    if (!r) return;
    const { retryConfig: o } = this.store.getState().queueConfig, n = r.retryCount + 1;
    if (n <= o.maxRetries) {
      const s = Math.min(
        o.baseDelay * Math.pow(o.backoffFactor, r.retryCount),
        o.maxDelay
      );
      q(this.store, e, {
        status: "retrying",
        error: t.message,
        retryCount: n
      });
      const a = setTimeout(() => {
        this.retryTimers.delete(e), q(this.store, e, { status: "queued" }), this.processQueue();
      }, s);
      this.retryTimers.set(e, a);
    } else
      q(this.store, e, {
        status: "failed",
        error: t.message
      }), this.checkAllComplete(), this.processQueue();
  }
  abortPausedUpload(e) {
    const t = this.pausedUploads.get(e);
    t && (t.abort(), this.pausedUploads.delete(e));
  }
  abortUpload(e) {
    var r;
    (r = this.activeUploads.get(e)) == null || r.abort(), this.activeUploads.delete(e);
    const t = this.retryTimers.get(e);
    t && (clearTimeout(t), this.retryTimers.delete(e));
  }
  updateTotalProgress() {
    const { files: e } = this.store.getState();
    let t = 0, r = 0, o = 0;
    for (const n of e.values())
      (n.status === "queued" || n.status === "uploading" || n.status === "paused" || n.status === "retrying" || n.status === "complete" || n.status === "failed") && (t += n.size, r += n.status === "complete" ? n.size : n.bytesUploaded), n.status === "uploading" && (o += n.speed);
    this.store.setState({
      totalBytes: t,
      totalBytesUploaded: r,
      totalSpeed: o,
      totalProgress: t > 0 ? Math.min(r / t * 100, 100) : 0
    });
  }
  checkAllComplete() {
    const { files: e } = this.store.getState();
    ![...e.values()].some(
      (r) => r.status === "queued" || r.status === "uploading" || r.status === "retrying" || r.status === "paused"
    ) && this.store.getState().isUploading && this.store.setState({ isUploading: !1 });
  }
}
function br(i) {
  return i === "queued" || i === "uploading" || i === "retrying" || i === "paused";
}
function Ot(i) {
  return `https://api.filerobot.com/${i}`;
}
async function rn(i, e) {
  const t = `${Ot(i)}/key/${encodeURIComponent(e)}`, r = new AbortController(), o = setTimeout(() => r.abort(), 3e4);
  try {
    const n = await fetch(t, { signal: r.signal });
    if (clearTimeout(o), !n.ok)
      throw new Error(`SASS key exchange failed (HTTP ${n.status})`);
    const s = await n.json();
    if (s.status === "error")
      throw new Error(`SASS key exchange failed: ${s.msg || "Unknown error"}`);
    return s.key;
  } catch (n) {
    throw clearTimeout(o), n instanceof DOMException && n.name === "AbortError" ? new Error("SASS key exchange timed out") : n;
  }
}
function mt(i, e) {
  const t = {};
  switch (i.mode) {
    case "security-template":
      if (!e)
        throw new Error(
          "[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key."
        );
      t["X-Filerobot-Key"] = e;
      break;
    case "sass-key":
      t["X-Filerobot-Key"] = i.sassKey;
      break;
  }
  return i.airboxPuid && (t["X-Filerobot-Airbox-Puid"] = i.airboxPuid), t;
}
async function on(i) {
  const e = Ot(i.container);
  if (i.mode === "security-template") {
    const t = await rn(i.container, i.securityTemplateId);
    return { apiBase: e, headers: mt(i, t), sassKey: t };
  }
  return { apiBase: e, headers: mt(i) };
}
const Rt = "sfx-uploader:last-upload", Vr = 1;
function nn(i) {
  var n, s, a;
  const { file: e, previewUrl: t, ...r } = i, o = i.status === "complete" && ((a = (s = (n = i.response) == null ? void 0 : n.file) == null ? void 0 : s.url) != null && a.cdn) ? i.response.file.url.cdn : null;
  return { ...r, previewUrl: o };
}
function sn() {
  try {
    const i = sessionStorage.getItem(Rt);
    if (!i) return null;
    const e = JSON.parse(i);
    return (e == null ? void 0 : e.__schemaVersion) !== Vr ? null : e;
  } catch {
    return null;
  }
}
function an(i) {
  try {
    sessionStorage.setItem(Rt, JSON.stringify(i));
  } catch {
  }
}
const Je = {
  /** Overwrite the stored batch. Pass only complete + failed files. */
  save(i) {
    if (i.length === 0) {
      this.clear();
      return;
    }
    const e = {
      __schemaVersion: Vr,
      savedAt: Date.now(),
      files: i.map(nn)
    };
    an(e);
  },
  /** Returns the stored files (rehydrated back to UploadFile shape) or null.
   *  The `file` blob and `remoteUrl` are not serializable — they are set to
   *  null on restore. Downstream code must null-check `file.file` before use. */
  load() {
    const i = sn();
    return i ? i.files.map((e) => ({
      ...e,
      file: null,
      previewUrl: e.previewUrl ?? null
    })) : null;
  },
  /** Drop the stored batch entirely. */
  clear() {
    try {
      sessionStorage.removeItem(Rt);
    } catch {
    }
  }
}, B = {
  FILE_ADDED: "sfx-file-added",
  FILE_REMOVED: "sfx-file-removed",
  FILE_REJECTED: "sfx-file-rejected",
  UPLOAD_STARTED: "sfx-upload-started",
  UPLOAD_PROGRESS: "sfx-upload-progress",
  UPLOAD_COMPLETE: "sfx-upload-complete",
  UPLOAD_ERROR: "sfx-upload-error",
  UPLOAD_RETRY: "sfx-upload-retry",
  UPLOAD_PAUSED: "sfx-upload-paused",
  UPLOAD_RESUMED: "sfx-upload-resumed",
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
let ln = 0;
function we() {
  return `file-${Date.now()}-${++ln}`;
}
function ce(i) {
  if (i <= 0) return "0 B";
  const e = ["B", "KB", "MB", "GB"], t = Math.min(Math.floor(Math.log(i) / Math.log(1024)), e.length - 1), r = i / Math.pow(1024, t);
  return `${t === 0 ? r : r.toFixed(1)} ${e[t]}`;
}
function dt(i) {
  if (!isFinite(i) || i <= 0) return "0s";
  const e = Math.round(i);
  if (e < 60) return `${e}s`;
  const t = Math.floor(e / 60), r = e % 60;
  return r > 0 ? `${t}m ${r}s` : `${t}m`;
}
function Wr(i) {
  var t;
  const e = ((t = i.name.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return i.type.startsWith("image/") ? "image" : i.type.startsWith("video/") || ["mp4", "mov", "avi", "webm", "mkv", "flv", "wmv"].includes(e) ? "vid" : i.type.startsWith("audio/") || ["mp3", "wav", "ogg", "flac", "aac", "m4a", "wma"].includes(e) ? "audio" : i.type === "application/pdf" || e === "pdf" ? "pdf" : ["xls", "xlsx", "csv", "tsv", "ods"].includes(e) ? "sheet" : ["doc", "docx", "txt", "rtf", "odt", "pages"].includes(e) ? "doc" : ["ppt", "pptx", "key", "odp"].includes(e) ? "slide" : ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "zst"].includes(e) ? "zip" : ["js", "ts", "jsx", "tsx", "py", "rb", "go", "rs", "java", "c", "cpp", "h", "cs", "php", "swift", "kt", "sh", "bash"].includes(e) ? "code" : ["html", "css", "scss", "xml", "svg", "json", "yaml", "yml", "toml", "md", "mdx", "ini", "env", "log"].includes(e) ? "markup" : ["ttf", "otf", "woff", "woff2", "eot"].includes(e) ? "font" : ["ai", "psd", "sketch", "fig", "xd", "indd", "eps"].includes(e) ? "design" : ["exe", "dmg", "app", "msi", "deb", "rpm", "apk", "ipa"].includes(e) ? "binary" : ["sql", "db", "sqlite", "mdb"].includes(e) ? "data" : "gen";
}
function dn(i) {
  const e = i.lastIndexOf(".");
  return e >= 0 ? i.slice(e + 1).toUpperCase() : "";
}
const cn = "https://scaleflex.cloudimg.io/v7/assets/file-types/v3/", Gr = {
  _default: "9a518a",
  // Images
  png: "96cd9a",
  jpg: "06e819",
  jpg2: "f0eb7f",
  jpeg: "6a65e9",
  gif: "c3c2c3",
  bmp: "d2243a",
  webp: "fedd74",
  svg: "a15e46",
  tiff: "1f30c3",
  tif: "b383c9",
  heic: "84adfe",
  avif: "536b30",
  ico: "79063d",
  psd: "be6140",
  psb: "678646",
  ai: "84b254",
  dwg: "971fb3",
  // Video
  mp4: "42f175",
  webm: "26a84a",
  avi: "d22ba8",
  mpeg: "ba93bb",
  ogv: "74d453",
  "3gp": "f0d388",
  "3g2": "04c652",
  swf: "3955e2",
  fla: "daf585",
  m3u8: "7d5e62",
  // Audio
  mp3: "66bbef",
  wav: "d7a7d5",
  aac: "07f3f9",
  oga: "a5c622",
  opus: "9548b1",
  weba: "4dcf70",
  mid: "3f0e29",
  midi: "9fedec",
  cda: "85b83b",
  // Documents
  pdf: "18c5f7",
  doc: "d1b47c",
  docx: "1eb6b0",
  txt: "307979",
  rtf: "978c5f",
  xls: "13b5f7",
  xlsx: "79d64a",
  ppt: "4ee29b",
  pptx: "8b1568",
  csv: "4add78",
  odt: "940781",
  ods: "9fbe9a",
  odp: "bf892d",
  dbf: "457bd4",
  vsd: "8a9ccb",
  abw: "313dc7",
  epub: "15263d",
  azw: "a018b1",
  ics: "909f63",
  ogx: "f694d2",
  // Archives
  zip: "84f98b",
  rar: "1d6423",
  "7z": "e007e5",
  tar: "603aed",
  gz: "de13f7",
  bz: "0374ff",
  bz2: "e14294",
  arc: "942fad",
  jar: "149796",
  mpkg: "dea655",
  // Fonts
  ttf: "d2e2c1",
  otf: "c904fd",
  woff: "4b8177",
  woff2: "b532d3",
  eot: "a54980",
  // Code / Scripts
  js: "524691",
  mjs: "d57921",
  ts: "9af3ae",
  css: "287863",
  html: "fa7a87",
  htm: "21323d",
  xhtml: "e6d6a9",
  xul: "6c9c71",
  json: "104c9e",
  jsonld: "f30c0f",
  xml: "7f7194",
  php: "503e36",
  sh: "3b820e",
  csh: "08c0cc",
  // Executables / Disk images
  exe: "ccca53",
  iso: "064b8f",
  bin: "1e9618"
};
function yt(i) {
  const e = i === "_default" ? "GENERIC" : i.toUpperCase();
  return `${cn}${e}.svg?vh=${Gr[i]}`;
}
function Xr(i) {
  const e = (i == null ? void 0 : i.toLowerCase().replaceAll(".", "")) || "";
  return e in Gr ? yt(e) : yt("_default");
}
function Kr() {
  return yt("_default");
}
const pn = {
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
function fn(i) {
  var t;
  const e = ((t = i.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return pn[e] || "";
}
function un(i) {
  return new Promise((e) => {
    const t = document.createElement("video");
    t.preload = "metadata", t.muted = !0, t.playsInline = !0;
    const r = URL.createObjectURL(i);
    let o = !1;
    const n = () => {
      o || (o = !0, e(null)), t.removeAttribute("src"), t.load(), URL.revokeObjectURL(r);
    };
    t.addEventListener("seeked", () => {
      try {
        const s = document.createElement("canvas");
        s.width = t.videoWidth || 320, s.height = t.videoHeight || 240;
        const a = s.getContext("2d");
        if (a) {
          a.drawImage(t, 0, 0, s.width, s.height), s.toBlob((l) => {
            o || (o = !0, e(l ? URL.createObjectURL(l) : null), t.removeAttribute("src"), t.load(), URL.revokeObjectURL(r));
          }, "image/jpeg", 0.7);
          return;
        }
      } catch {
      }
      n();
    }, { once: !0 }), t.addEventListener("error", () => n(), { once: !0 }), setTimeout(() => n(), 5e3), t.src = r, t.addEventListener("loadeddata", () => {
      t.currentTime = 0.1;
    }, { once: !0 });
  });
}
function wt(i, e, t) {
  var r, o;
  if (e.maxFileSize != null && i.size > 0 && i.size > e.maxFileSize)
    return `File exceeds ${(e.maxFileSize / 1048576).toFixed(1)} MB limit`;
  if (e.maxTotalFilesSize != null && i.size > 0) {
    let n = i.size;
    for (const s of t.values())
      s.status !== "rejected" && s.status !== "cancelled" && (n += s.size);
    if (n > e.maxTotalFilesSize)
      return "Total file size limit exceeded";
  }
  if (e.maxNumberOfFiles != null) {
    let n = 0;
    for (const s of t.values())
      s.status !== "rejected" && s.status !== "cancelled" && n++;
    if (n >= e.maxNumberOfFiles)
      return `Maximum ${e.maxNumberOfFiles} files allowed`;
  }
  if (e.allowedFileTypes != null) {
    const n = e.allowedFileTypes, s = "." + (((r = i.name.split(".").pop()) == null ? void 0 : r.toLowerCase()) ?? "");
    if (!n.some((l) => l.startsWith(".") ? s === l.toLowerCase() : l.endsWith("/*") ? i.type.startsWith(l.slice(0, -1)) : i.type === l)) return "File type not allowed";
  }
  if (e.blockedFileTypes != null) {
    const n = e.blockedFileTypes, s = "." + (((o = i.name.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "");
    if (n.some((l) => l.startsWith(".") ? s === l.toLowerCase() : l.endsWith("/*") ? i.type.startsWith(l.slice(0, -1)) : i.type === l)) return "File type is blocked";
  }
  return null;
}
function hn(i, e, t) {
  return wt(i, e, t);
}
function mr(i) {
  return i.allowedFileTypes ? i.allowedFileTypes.join(",") : "";
}
const yr = {
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
function gn(i) {
  return i.filter((e) => e in yr).map((e) => yr[e]);
}
var vn = Object.defineProperty, xn = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && vn(e, t, o), o;
};
const bn = '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', mn = '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>', yn = '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>', wn = '<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>', je = [
  { id: "device", label: "My Device", icon: bn, iconColor: "#2563eb" },
  { id: "url", label: "URL link", icon: mn, iconColor: "#16a34a" },
  { id: "camera", label: "Camera", icon: yn, iconColor: "#7c3aed" },
  { id: "screen-cast", label: "Screen capture", icon: wn, iconColor: "#ea580c" }
], Ft = class Ft extends Z {
  constructor() {
    super(...arguments), this.sources = je;
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
    return f`
      ${this.sources.map(
      (e) => f`
          <button @click=${() => this._handleClick(e)}>
            ${e.brandHtml ? fe(e.brandHtml) : pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${ne(e.icon)}</svg>`}
            ${e.label}
          </button>
        `
    )}
    `;
  }
};
Ft.styles = G`
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
let _t = Ft;
xn([
  F({ type: Array })
], _t.prototype, "sources");
function Zr(i) {
  let e = i;
  for (; e; ) {
    if (e instanceof ShadowRoot) {
      e = e.host;
      continue;
    }
    if (e instanceof HTMLDialogElement && e.open)
      return e;
    if (e instanceof Element && e.shadowRoot) {
      const t = e.shadowRoot.querySelector("dialog[open]");
      if (t instanceof HTMLDialogElement)
        return t;
    }
    e = e.parentNode;
  }
  return document.body;
}
var _n = Object.defineProperty, te = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && _n(e, t, o), o;
};
const wr = 3, kt = new CSSStyleSheet();
kt.replaceSync(`
  [data-sfx-more-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
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
`);
var se;
const J = (se = class extends Z {
  constructor() {
    super(...arguments), this.compact = !1, this.externalDragOver = !1, this.accept = "", this.sources = [], this.sourcesLayout = "pills", this.mode = "modal", this._resizeObserver = null, this._dragOver = !1, this._moreOpen = !1, this._visiblePills = wr, this._dragCounter = 0, this._onDragEnter = (e) => {
      e.preventDefault(), this._dragCounter++, this._dragCounter === 1 && (this._dragOver = !0);
    }, this._onDragOver = (e) => {
      e.preventDefault();
    }, this._onDragLeave = (e) => {
      e.preventDefault(), this._dragCounter--, this._dragCounter <= 0 && (this._dragCounter = 0, this._dragOver = !1);
    }, this._onDrop = (e) => {
      var r;
      e.preventDefault(), e.stopPropagation(), this._dragCounter = 0, this._dragOver = !1;
      const t = Array.from(((r = e.dataTransfer) == null ? void 0 : r.files) ?? []);
      t.length > 0 && this._emitFiles(t);
    }, this._onClick = (e) => {
      const t = this.shadowRoot.querySelector(".drop-zone");
      if (t && this._rippleEl) {
        const r = t.getBoundingClientRect();
        this._rippleEl.style.left = `${e.clientX - r.left}px`, this._rippleEl.style.top = `${e.clientY - r.top}px`, this._rippleEl.classList.remove("go"), this._rippleEl.offsetWidth, this._rippleEl.classList.add("go");
      }
      this.browse();
    }, this._onKeyDown = (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.browse());
    }, this._onFileChange = (e) => {
      const t = e.target, r = Array.from(t.files ?? []);
      r.length > 0 && this._emitFiles(r), t.value = "";
    }, this._onPaste = (e) => {
      var o;
      if (!this.isConnected || this.offsetWidth === 0) return;
      const t = (o = e.clipboardData) == null ? void 0 : o.items;
      if (!t) return;
      const r = [];
      for (const n of t)
        if (n.kind === "file") {
          const s = n.getAsFile();
          s && r.push(s);
        }
      r.length > 0 && (e.preventDefault(), this._emitFiles(r));
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
      this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-more-dropdown", ""), Zr(this).appendChild(this._portalContainer), this._injectDropdownStyles()), ue(
        f`<div class="sfx-more-dropdown open">
          ${e.map(
          (t) => f`
              <button
                class="sfx-more-item"
                @click=${(r) => this._onMoreItemClick(t, r)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml ? fe(t.brandHtml) : t.iconColor ? f`<svg
                        viewBox="0 0 24 24"
                        style="color:${t.iconColor}"
                      >
                        ${ne(t.icon)}
                      </svg>` : pe`<svg viewBox="0 0 24 24">${ne(
            t.icon
          )}</svg>`}
                </div>
                ${t.label}
              </button>
            `
        )}
        </div>`,
        this._portalContainer
      ), requestAnimationFrame(() => this._positionDropdown());
    } else this._portalContainer && (ue(S, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectDropdownStyles() {
    var t;
    const e = (t = this._portalContainer) == null ? void 0 : t.getRootNode();
    e && (e.adoptedStyleSheets.includes(kt) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, kt]));
  }
  /** Position the fixed dropdown, choosing above or below based on available space. */
  _positionDropdown() {
    var _, E;
    const e = (_ = this.shadowRoot) == null ? void 0 : _.querySelector(
      ".more-wrap > button"
    ), t = (E = this._portalContainer) == null ? void 0 : E.querySelector(
      ".sfx-more-dropdown"
    );
    if (!e || !t) return;
    const r = e.getBoundingClientRect(), o = 8, n = t.scrollHeight, s = t.offsetWidth, a = r.top, l = window.innerHeight - r.bottom;
    a >= n + o || a > l ? t.style.top = `${r.top - n - o}px` : t.style.top = `${r.bottom + o}px`;
    let h = r.right - s;
    h = Math.max(8, Math.min(h, window.innerWidth - s - 8)), t.style.left = `${h}px`;
  }
  _onMoreItemClick(e, t) {
    t.stopPropagation(), this._moreOpen = !1, this._updateDropdownPortal(), this._onSourceIconClick(e);
  }
  _updateVisiblePills() {
    const e = window.innerWidth;
    this.sourcesLayout === "cards" ? e <= 480 ? this._visiblePills = 2 : e <= 768 ? this._visiblePills = 3 : this._visiblePills = 5 : e <= 768 ? this._visiblePills = 1 : this._visiblePills = wr;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("paste", this._onPaste), document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onDocKeyDown), window.addEventListener("scroll", this._onScrollOrResize, !0), window.addEventListener("resize", this._onScrollOrResize), this._updateVisiblePills(), typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver((e) => {
      var o;
      const r = (((o = e[0]) == null ? void 0 : o.contentRect.width) ?? this.getBoundingClientRect().width) >= se._WIDE_THRESHOLD_PX;
      r && !this.hasAttribute("data-wide") ? this.setAttribute("data-wide", "") : !r && this.hasAttribute("data-wide") && this.removeAttribute("data-wide");
    }), this._resizeObserver.observe(this));
  }
  updated(e) {
    e.has("sourcesLayout") && this._updateVisiblePills();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("paste", this._onPaste), document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onDocKeyDown), window.removeEventListener("scroll", this._onScrollOrResize, !0), window.removeEventListener("resize", this._onScrollOrResize), this._resizeTimer && clearTimeout(this._resizeTimer), this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), this._portalContainer && (ue(S, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _renderPill(e) {
    return f`
      <button
        class="src-pill"
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? fe(e.brandHtml) : f`<span
              class="pill-ico"
              style=${e.iconColor ? `color:${e.iconColor}` : ""}
            >
              ${pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${ne(e.icon)}</svg>`}
            </span>`}
        ${e.label}
      </button>
    `;
  }
  _renderCard(e) {
    return f`
      <button
        class="src-card"
        aria-label=${e.label}
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? f`<span class="card-ico">${fe(e.brandHtml)}</span>` : f`<span
              class="card-ico"
              style=${e.iconColor ? `color:${e.iconColor}` : ""}
            >
              ${pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${ne(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.label}</span>
      </button>
    `;
  }
  _renderMoreCard() {
    return f`
      <div class="more-wrap ${this._moreOpen ? "open" : ""}">
        <button
          class="src-card"
          @click=${(e) => this._toggleMore(e)}
        >
          <span
            class="card-ico"
            style="color: var(--sfx-up-text-muted, #94a3b8)"
          >
            <svg viewBox="0 0 24 24" style="fill: currentColor; stroke: none">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">More</span>
        </button>
      </div>
    `;
  }
  _renderMoreDropdown() {
    return f`
      <div class="more-wrap ${this._moreOpen ? "open" : ""}">
        <button
          class="more-pill"
          @click=${(e) => this._toggleMore(e)}
        >
          More
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `;
  }
  render() {
    const e = [
      "drop-zone",
      this._dragOver || this.externalDragOver ? "drag-over" : "",
      this.compact ? "compact" : ""
    ].filter(Boolean).join(" "), t = this.sources.slice(0, this._visiblePills), r = this.sources.slice(this._visiblePills);
    return f`
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
        </div>

        <div class="title">Drag & Drop or click to <span>browse</span></div>
        ${this.compact ? S : f`<div class="subtitle">Drop files anywhere on this page</div>`}
        ${!this.compact && this.sources.length > 0 ? f`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout === "cards" ? f`
                    <div class="sources-cards">
                      ${t.map((o) => this._renderCard(o))}
                      ${r.length > 0 ? this._renderMoreCard() : S}
                    </div>
                  ` : f`
                    <div class="sources-grid">
                      ${t.map((o) => this._renderPill(o))}
                      ${r.length > 0 ? this._renderMoreDropdown() : S}
                    </div>
                  `}
            ` : S}
        ${this.compact && this.sources.length > 0 ? f`
              <div class="sources-row">
                ${this.sources.map(
      (o) => f`
                    <button
                      class="src-ico"
                      style=${o.iconColor && !o.brandHtml ? `color:${o.iconColor}` : ""}
                      data-tip=${o.label}
                      aria-label=${o.label}
                      @click=${(n) => {
        n.stopPropagation(), this._onSourceIconClick(o);
      }}
                    >
                      ${o.brandHtml ? fe(o.brandHtml) : pe`<svg viewBox="0 0 24 24" class=${o.fillIcon ? "fill-icon" : ""}>${ne(o.icon)}</svg>`}
                    </button>
                  `
    )}
              </div>
            ` : S}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept || S}
          @change=${this._onFileChange}
        />
      </div>
    `;
  }
}, se.styles = G`
    :host {
      display: flex;
      flex-shrink: 1;
      flex: 1;
      min-height: 0;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
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
      overflow: auto;
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

    /* Legacy radial glow element — kept hidden for back-compat.
       The real glow is now drawn as a pseudo-element of .rings so
       it is always centered on the cloud icon regardless of the
       drop-zone's size (previously .dz-glow was pinned to top: 20px
       which misaligned when the drop-zone stretched vertically). */
    .dz-glow {
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

    .drop-zone:not(.compact) .rings::before {
      content: "";
      position: absolute;
      width: 260px;
      height: 260px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(
        circle at center,
        rgba(37, 99, 235, 0.04) 0%,
        rgba(37, 99, 235, 0.02) 40%,
        transparent 70%
      );
      border-radius: 50%;
      pointer-events: none;
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
      transition:
        font-size 0.3s,
        margin 0.3s;
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
      content: "";
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
      box-shadow:
        0 12px 40px rgba(0, 0, 0, 0.14),
        0 2px 8px rgba(0, 0, 0, 0.06);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      padding: 6px;
      min-width: 210px;
      max-height: 340px;
      overflow-y: auto;
      z-index: 99999;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition:
        opacity 0.18s ease,
        visibility 0.18s ease,
        transform 0.18s ease;
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
      transition:
        opacity 0.15s,
        visibility 0.15s;
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
    input[type="file"] {
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
      .title {
        font-size: 16px;
      }
      .rings {
        width: 90px;
        height: 90px;
      }
      .core {
        width: 44px;
        height: 44px;
      }
      .core svg {
        width: 20px;
        height: 20px;
      }
    }

    /* Inline mode on a TRULY wide host (e.g. full-screen) — frame the empty
       drop-zone as a bounded bordered card so it doesn't float lost in a
       sea of whitespace. The data-wide attribute is set imperatively by a
       ResizeObserver in the component (see _onHostResize). Threshold is
       1200px of host width, which only the full-screen example reliably
       hits — embedded inline uploaders (Home demo, Sources Layout, plain
       inline) are all narrower and stay untouched. Modal mode is always
       excluded via the [mode="inline"] selector. */
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) {
      flex: 1 1 auto;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      align-self: center;
      margin-inline: auto;
      padding: 64px 48px;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 24px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .rings {
      width: 140px;
      height: 140px;
      margin-bottom: 28px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core {
      width: 68px;
      height: 68px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .core svg {
      width: 30px;
      height: 30px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .title {
      font-size: 22px;
      margin-bottom: 8px;
    }
    :host([mode="inline"][data-wide]) .drop-zone:not(.compact) .subtitle {
      font-size: 15px;
      margin-bottom: 28px;
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

    /* Mobile responsive — placed at the END of the stylesheet so these
       overrides win the cascade against the base .src-pill, .title,
       .drop-zone rules declared earlier above. */
    @media (max-width: 768px) {
      :host {
        max-width: 100vw;
      }
      .drop-zone:not(.compact) {
        padding: 32px 16px;
      }
      .import-divider {
        max-width: 100%;
        margin-bottom: 14px;
      }
      .sources-grid {
        max-width: 100%;
        min-height: 0;
      }
      .src-pill {
        padding: 9px 14px;
        font-size: 13px;
      }
      .title {
        font-size: 18px;
      }
    }

    /* Galaxy Z Fold / Samsung S8+ / iPhone SE — extra narrow. */
    @media (max-width: 400px) {
      .drop-zone:not(.compact) {
        padding: 24px 12px;
      }
      .sources-grid {
        gap: 6px;
      }
      .src-pill {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `, se._WIDE_THRESHOLD_PX = 1200, se);
te([
  F({ type: Boolean, reflect: !0 })
], J.prototype, "compact");
te([
  F({ type: Boolean, attribute: "external-drag-over" })
], J.prototype, "externalDragOver");
te([
  F({ type: String })
], J.prototype, "accept");
te([
  F({ type: Array })
], J.prototype, "sources");
te([
  F({ type: String, attribute: "sources-layout" })
], J.prototype, "sourcesLayout");
te([
  F({ type: String, reflect: !0 })
], J.prototype, "mode");
te([
  D()
], J.prototype, "_dragOver");
te([
  D()
], J.prototype, "_moreOpen");
te([
  D()
], J.prototype, "_visiblePills");
te([
  Cr(".ripple")
], J.prototype, "_rippleEl");
te([
  Cr('input[type="file"]')
], J.prototype, "fileInput");
let Nn = J;
const Lt = class Lt extends Z {
  render() {
    return f`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `;
  }
};
Lt.styles = G`
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
let _r = Lt;
var kn = Object.defineProperty, le = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && kn(e, t, o), o;
};
const St = new CSSStyleSheet();
St.replaceSync(`
  [data-sfx-tile-dropdown] { position:absolute; top:0; left:0; width:0; height:0; overflow:visible; pointer-events:none; }
  [data-sfx-tile-dropdown] .sfx-tile-dropdown { position:fixed; background:#fff; border:1px solid #e2e8f0; border-radius:10px; box-shadow:0 4px 20px rgba(0,0,0,0.12); padding:6px; z-index:99999; min-width:180px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxTileDropIn .15s ease; pointer-events:all; }
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
`);
const At = class At extends Z {
  constructor() {
    super(...arguments), this.files = [], this.showDropTile = !1, this.sources = [], this.accept = "", this.mode = "upload", this._moreOpen = !1, this._dropTileMaxVisible = 3, this._portalContainer = null, this._outsideClickHandler = (e) => {
      var o;
      if ((o = this._portalContainer) != null && o.contains(e.target)) return;
      const t = this.renderRoot.querySelector(".drop-tile-more-wrap"), r = e.composedPath();
      t && r.includes(t) || (this._moreOpen = !1, this._closePortal(), document.removeEventListener("click", this._outsideClickHandler, !0));
    }, this._onScrollOrResize = () => {
      this._moreOpen && this._positionPortal();
    }, this._onKeyDown = (e) => {
      e.key === "Escape" && this._moreOpen && (this._moreOpen = !1, this._closePortal(), this._removeGlobalListeners());
    }, this._updateDropTileMaxVisible = () => {
      const e = window.innerWidth <= 768 ? 1 : 3;
      e !== this._dropTileMaxVisible && (this._dropTileMaxVisible = e);
    };
  }
  _onDropTileClick() {
    const e = this.renderRoot.querySelector('input[type="file"]');
    e == null || e.click();
  }
  _onFileInput(e) {
    const t = e.target, r = Array.from(t.files ?? []);
    r.length > 0 && this.dispatchEvent(new CustomEvent("files-selected", { detail: { files: r }, bubbles: !0, composed: !0 })), t.value = "";
  }
  _onSourceClick(e, t) {
    if (e.stopPropagation(), t.id === "device") {
      const r = this.renderRoot.querySelector('input[type="file"]');
      r == null || r.click();
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
    const e = this.sources.slice(this._dropTileMaxVisible);
    this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-tile-dropdown", ""), Zr(this).appendChild(this._portalContainer), this._injectTileDropdownStyles()), ue(
      f`<div class="sfx-tile-dropdown">
        ${e.map((t) => f`
          <button
            class="sfx-tile-dropdown-item"
            @click=${(r) => this._onMoreSourceClick(r, t)}
          >
            <span class="sfx-tile-dropdown-ico" style=${t.iconColor && !t.brandHtml ? `color:${t.iconColor}` : ""}>
              ${t.brandHtml ? fe(t.brandHtml) : pe`<svg viewBox="0 0 24 24" class=${t.fillIcon ? "fill-icon" : ""}>${ne(t.icon)}</svg>`}
            </span>
            ${t.label}
          </button>
        `)}
      </div>`,
      this._portalContainer
    ), requestAnimationFrame(() => this._positionPortal());
  }
  _positionPortal() {
    var _;
    const e = this.renderRoot.querySelector(".drop-tile-more"), t = (_ = this._portalContainer) == null ? void 0 : _.querySelector(".sfx-tile-dropdown");
    if (!e || !t) return;
    const r = e.getBoundingClientRect(), o = 6, n = t.scrollHeight, s = t.offsetWidth, a = r.top, l = window.innerHeight - r.bottom;
    a >= n + o || a > l ? t.style.top = `${r.top - n - o}px` : t.style.top = `${r.bottom + o}px`;
    let h = r.right - s;
    h = Math.max(8, Math.min(h, window.innerWidth - s - 8)), t.style.left = `${h}px`;
  }
  _closePortal() {
    this._portalContainer && (ue(S, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectTileDropdownStyles() {
    var t;
    const e = (t = this._portalContainer) == null ? void 0 : t.getRootNode();
    e && (e.adoptedStyleSheets.includes(St) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, St]));
  }
  connectedCallback() {
    super.connectedCallback(), this._updateDropTileMaxVisible(), window.addEventListener("resize", this._updateDropTileMaxVisible);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._moreOpen = !1, this._closePortal(), this._removeGlobalListeners(), window.removeEventListener("resize", this._updateDropTileMaxVisible);
  }
  _onMoreSourceClick(e, t) {
    this._moreOpen = !1, this._closePortal(), this._removeGlobalListeners(), this._onSourceClick(e, t);
  }
  _renderDropTile() {
    const e = this._dropTileMaxVisible, t = this.sources.slice(0, e), r = this.sources.slice(e);
    return f`
      <div class="drop-tile" @click=${this._onDropTileClick}>
        <div class="drop-tile-preview">
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
        </div>
        <div class="drop-tile-info">
          <div class="drop-tile-text">Drop or click to <span>browse</span></div>
          ${t.length > 0 ? f`
            <div class="drop-tile-sources">
              ${t.map((o) => f`
                <button
                  class="drop-tile-src"
                  style=${o.iconColor && !o.brandHtml ? `color:${o.iconColor}` : ""}
                  title=${o.label}
                  @click=${(n) => this._onSourceClick(n, o)}
                >
                  ${o.brandHtml ? fe(o.brandHtml) : pe`<svg viewBox="0 0 24 24" class=${o.fillIcon ? "fill-icon" : ""}>${ne(o.icon)}</svg>`}
                </button>
              `)}
              ${r.length > 0 ? f`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title="More sources" @click=${(o) => this._toggleMore(o)}>···</button>
                </div>
              ` : S}
            </div>
          ` : S}
        </div>
        <input type="file" multiple accept=${this.accept || S} @change=${this._onFileInput} />
      </div>
    `;
  }
  render() {
    return f`
      <div class="grid">
        ${this.showDropTile && this.mode !== "review" ? this._renderDropTile() : S}
        ${this.files.map(
      (e, t) => f`<sfx-file-item .file=${e} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} style="--tile-index:${t}"></sfx-file-item>`
    )}
      </div>
    `;
  }
};
At.styles = G`
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
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 200px), 1fr));
      gap: 12px;
      padding: 0 var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    /* Mobile: 2 cols at <=768, 1 col at <=440. Use viewport @media not
       container queries — container queries fire on local file-list width
       which is narrow in desktop preview mode, breaking desktop layout. */
    @media (max-width: 768px) {
      :host {
        scrollbar-gutter: auto;
        padding-bottom: 0;
      }
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        padding: 0 12px 16px;
      }
    }

    @media (max-width: 440px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }

    /* --- Drop tile (first card in grid) — mirrors file-item structure
       so its natural height matches a file card at any column width */
    .drop-tile {
      border-radius: 10px;
      border: 1.5px dashed var(--sfx-up-border, #c4d5ef);
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: all 0.18s ease;
      position: relative;
      z-index: 1;
      min-height: 0;
      overflow: hidden;
    }

    .drop-tile:hover,
    :host([drag-active]) .drop-tile {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    /* Preview area — flex:1 absorbs remaining row height so drop-tile total
       always matches the file-card height (info bar handles its own size).
       container-type lets the inner rings/icon scale with tile width via cqi. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — wider bottom padding so the source pills don't hug the
       card edge. Natural height stays close to the file-card .info area. */
    .drop-tile-info {
      padding: 12px 12px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    .drop-tile-rings {
      width: clamp(48px, 24cqi, 100px);
      height: clamp(48px, 24cqi, 100px);
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
      width: clamp(32px, 14cqi, 52px);
      height: clamp(32px, 14cqi, 52px);
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
      width: clamp(16px, 7cqi, 26px);
      height: clamp(16px, 7cqi, 26px);
    }

    .drop-tile-text {
      font-size: clamp(12px, 3.5cqi, 15px);
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      text-align: center;
      line-height: 1.2;
    }

    .drop-tile-text span {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }

    .drop-tile-sources {
      display: flex;
      gap: clamp(3px, 1.2cqi, 8px);
      margin-top: 8px;
    }

    .drop-tile-src {
      width: 36px;
      height: 36px;
      border-radius: 8px;
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
      width: clamp(20px, 6cqi, 24px);
      height: clamp(20px, 6cqi, 24px);
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

    .drop-tile-src .brand-ico {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drop-tile-src .brand-ico svg {
      width: 20px;
      height: 20px;
      stroke: none;
      stroke-width: 0;
    }

    .drop-tile-more-wrap {
      position: relative;
    }

    .drop-tile-more {
      width: 36px;
      height: 36px;
      border-radius: 8px;
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

    /* Single full-width drop-tile (mobile, 1-col grid): base clamp() rules
       already size rings/core/svg smoothly (max caps are tight enough that
       the full-width tile doesn't balloon). We only bump the source buttons
       here so they're tappable on a large card. */
    @media (max-width: 440px) {
      .drop-tile-info {
        padding: 16px 12px 24px;
        gap: 6px;
      }
      .drop-tile-src,
      .drop-tile-more {
        width: 48px;
        height: 48px;
        border-radius: 10px;
      }
      .drop-tile-src svg {
        width: 22px;
        height: 22px;
      }
      .drop-tile-src .brand-ico {
        width: 32px;
        height: 32px;
      }
      .drop-tile-src .brand-ico svg {
        width: 24px;
        height: 24px;
      }
      .drop-tile-sources {
        gap: 10px;
        margin-top: 12px;
      }
    }
  `;
let re = At;
le([
  F({ attribute: !1 })
], re.prototype, "files");
le([
  F({ type: Boolean })
], re.prototype, "showDropTile");
le([
  F({ attribute: !1 })
], re.prototype, "sources");
le([
  F({ type: String })
], re.prototype, "accept");
le([
  F({ type: String })
], re.prototype, "mode");
le([
  F({ attribute: !1 })
], re.prototype, "getLocateUrl");
le([
  D()
], re.prototype, "_moreOpen");
le([
  D()
], re.prototype, "_dropTileMaxVisible");
var Sn = Object.defineProperty, Ve = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && Sn(e, t, o), o;
};
const It = class It extends Z {
  constructor() {
    super(...arguments), this.mode = "upload", this._dims = "", this._copied = !1, this._copiedTimer = null;
  }
  updated(e) {
    var t, r, o, n, s;
    if (e.has("file")) {
      if (this._dims = "", (r = (t = this.file) == null ? void 0 : t.previewUrl) != null && r.startsWith("blob:")) {
        const a = this.file.previewUrl, l = new Image();
        l.onload = () => {
          var p;
          ((p = this.file) == null ? void 0 : p.previewUrl) === a && (this._dims = `${l.naturalWidth}×${l.naturalHeight}`);
        }, l.src = a;
      } else if ((s = (n = (o = this.file) == null ? void 0 : o.response) == null ? void 0 : n.file) != null && s.info) {
        const a = this.file.response.file.info;
        a.img_w && a.img_h && (this._dims = `${a.img_w}×${a.img_h}`);
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._copiedTimer != null && (clearTimeout(this._copiedTimer), this._copiedTimer = null);
  }
  _emit(e, t) {
    this.dispatchEvent(
      new CustomEvent(e, {
        detail: { fileId: this.file.id, ...t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _remove() {
    this._emit("file-remove");
  }
  _retry() {
    this._emit("file-retry");
  }
  _pause() {
    this._emit("file-pause");
  }
  _resume() {
    this._emit("file-resume");
  }
  _rename(e) {
    const t = e.target.value.trim();
    t && this._emit("file-rename", { name: t });
  }
  _preview(e) {
    e.stopPropagation(), this._emit("file-preview");
  }
  _locate(e) {
    var o, n, s, a, l;
    if (e.stopPropagation(), !this.file) return;
    const r = ((o = this.getLocateUrl) == null ? void 0 : o.call(this, this.file)) || ((l = (a = (s = (n = this.file) == null ? void 0 : n.response) == null ? void 0 : s.file) == null ? void 0 : a.url) == null ? void 0 : l.public);
    r && window.open(r, "_blank", "noopener,noreferrer");
  }
  async _copyCdn(e) {
    var r, o, n, s;
    e.stopPropagation();
    const t = (s = (n = (o = (r = this.file) == null ? void 0 : r.response) == null ? void 0 : o.file) == null ? void 0 : n.url) == null ? void 0 : s.cdn;
    if (t) {
      try {
        await navigator.clipboard.writeText(t);
      } catch {
        return;
      }
      this._copied = !0, this._copiedTimer && clearTimeout(this._copiedTimer), this._copiedTimer = window.setTimeout(() => {
        this._copied = !1, this._copiedTimer = null;
      }, 1400);
    }
  }
  render() {
    var _, E;
    const e = this.file;
    if (!e) return S;
    const t = Wr(e), r = e.status === "complete", o = e.status === "uploading", n = e.status === "paused", s = e.status === "error" || e.status === "failed", a = e.status === "rejected", l = this.mode === "review", p = dn(e.name), h = [
      "tile",
      r ? "done" : "",
      o ? "uploading" : "",
      n ? "paused" : "",
      a ? "rejected" : "",
      l ? "review" : ""
    ].filter(Boolean).join(" ");
    return f`
      <div class=${h} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl ? f`<img class="preview-img" src=${e.previewUrl} alt="" />` : f`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Xr(p)}
                    alt="${p ? `${p} file` : "File"}"
                    @error=${(O) => {
      const P = O.target, v = Kr();
      !P.dataset.fallback && P.src !== v && (P.dataset.fallback = "1", P.src = v);
    }}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!l && !r && !o && !n && !s && e.status !== "rejected" ? f`
                <button class="preview-btn" @click=${this._preview} aria-label="Details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Details
                </button>
              ` : S}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${l && r && ((E = (_ = e.response) == null ? void 0 : _.file) != null && E.url) ? f`
                <div class="review-actions">
                  ${e.response.file.url.public ? f`<button class="review-action secondary" @click=${this._locate} title=${e.response.file.url.public} aria-label="Locate file in storage">
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        Locate
                      </button>` : S}
                  ${e.response.file.url.cdn ? f`<button class="review-action primary ${this._copied ? "copied" : ""}" @click=${this._copyCdn} title="Copy CDN link" aria-label="Copy CDN link to clipboard">
                        ${this._copied ? f`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : f`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied ? "Copied" : "Copy CDN"}
                      </button>` : S}
                </div>
              ` : S}

          <!-- Spinner overlay (uploading = spinner, paused = pause icon) -->
          <div class="spinner-overlay">
            <div class="spin-ring"></div>
            <div class="pause-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>

          <!-- Done badge -->
          ${r ? f`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>` : S}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l && s ? f`<div class="failed-badge" title=${e.error || "Upload failed"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>` : S}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l && (e.status === "uploading" || e.status === "paused") ? f`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(e.progress, 100) / 100})"></div>
                </div>
              ` : S}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(s || a) && e.error && !l ? f`<div class="error-badge" title=${e.error}>${e.error}</div>` : S}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(s || a) && e.duration != null && e.duration > 0 ? f`<div class="duration-badge">${this._formatDuration(e.duration)}</div>` : S}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${l ? S : f`
        <div class="actions">
          ${o && e.isTus ? f`
                <button class="act-btn pause" @click=${this._pause} title="Pause" aria-label="Pause upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              ` : S}
          ${n ? f`
                <button class="act-btn resume" @click=${this._resume} title="Resume" aria-label="Resume upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              ` : S}
          ${s ? f`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              ` : S}
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
        `}

        <!-- Info bar -->
        <div class="info">
          <input class="name-input" type="text" .value=${e.name} title=${e.name}
            aria-label="File name"
            ?readonly=${l}
            @change=${l ? S : this._rename} @click=${(O) => O.stopPropagation()} />
          <div class="meta">${p || ""}${e.size ? ` · ${ce(e.size)}` : ""}${this._dims ? ` · ${this._dims}` : ""}</div>
        </div>
      </div>
    `;
  }
  _formatDuration(e) {
    const t = Math.floor(e / 60), r = Math.floor(e % 60);
    return `${t}:${r.toString().padStart(2, "0")}`;
  }
};
It.styles = G`
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
      min-width: 0;
      overflow: hidden;
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
    }

    .preview-img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .preview-bg.pdf { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .preview-bg.doc { background: linear-gradient(135deg, #eff6ff, #dbeafe); }
    .preview-bg.vid { background: linear-gradient(135deg, #f5f3ff, #ede9fe); }
    .preview-bg.audio { background: linear-gradient(135deg, #fdf4ff, #fae8ff); }
    .preview-bg.sheet { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .preview-bg.slide { background: linear-gradient(135deg, #fff7ed, #ffedd5); }
    .preview-bg.zip { background: linear-gradient(135deg, #fffbeb, #fef3c7); }
    .preview-bg.code { background: linear-gradient(135deg, #f0f9ff, #e0f2fe); }
    .preview-bg.markup { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); }
    .preview-bg.font { background: linear-gradient(135deg, #faf5ff, #f3e8ff); }
    .preview-bg.design { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }
    .preview-bg.binary { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }
    .preview-bg.data { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }
    .preview-bg.gen { background: linear-gradient(135deg, #f8fafc, #f1f5f9); }

    /* --- File type icon --- */
    .type-icon {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    .type-icon-img {
      max-width: 72px;
      max-height: 72px;
      object-fit: contain;
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
      overflow: hidden;
    }

    .name-input {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin-bottom: 2px;
      min-width: 0;
      font-size: 12px;
      font-weight: 400;
      color: var(--foreground, var(--sfx-up-text, #111827));
      border: 1px solid transparent;
      border-radius: 3px;
      padding: 1px 4px;
      background: transparent;
      font-family: inherit;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: border-color 0.15s, background 0.15s;
    }
    .name-input:hover {
      border-color: var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
    }
    .name-input:focus {
      border-color: var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
    }

    .meta {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tile.done {
      box-shadow: 0 0 0 2px var(--sfx-up-primary, #2563eb);
    }

    /* In review mode every tile is complete — the per-tile blue ring would
       turn the whole grid into a wall of borders, so suppress it. The status
       badge in the corner already conveys "uploaded successfully". */
    .tile.review.done {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
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

    /* --- Review mode: failed badge (mirrors done-badge) --- */
    .failed-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--sfx-up-error, #dc2626);
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 10;
      color: #fff;
    }

    .failed-badge svg {
      width: 14px;
      height: 14px;
    }

    /* --- Review mode: stacked hover actions (Locate / Copy CDN) --- */
    .review-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 6;
      pointer-events: none;
    }

    .tile.review:hover .review-actions,
    .tile.review:focus-within .review-actions {
      opacity: 1;
      pointer-events: auto;
    }

    @media (hover: none) {
      .tile.review .review-actions {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .review-action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 10px;
      border: none;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      white-space: nowrap;
      cursor: pointer;
      transition: transform 0.18s cubic-bezier(0.34, 1.3, 0.64, 1),
                  box-shadow 0.18s ease,
                  background 0.15s ease;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18),
                  0 1px 2px rgba(15, 23, 42, 0.08);
    }

    .review-action:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.22),
                  0 1px 3px rgba(15, 23, 42, 0.1);
    }

    .review-action:active {
      transform: scale(1.02);
    }

    .review-action svg {
      width: 15px;
      height: 15px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Secondary — white card style (matches Preview in design system) */
    .review-action.secondary {
      background: rgba(255, 255, 255, 0.96);
      color: var(--sfx-up-text, #1e293b);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    /* Primary — solid blue (matches + Select in design system) */
    .review-action.primary {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .review-action.primary:hover {
      background: var(--sfx-up-primary-hover, #1d4ed8);
    }

    /* Brief green flash after a successful clipboard copy */
    .review-action.copied {
      background: #16a34a !important;
      color: #fff;
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

    /* --- Paused state --- */
    .tile.paused .spinner-overlay {
      opacity: 1;
      background: rgba(0, 0, 0, 0.35);
    }

    .tile.paused .spin-ring { display: none; }

    .pause-icon {
      width: 28px;
      height: 28px;
      display: none;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    .tile.paused .pause-icon { display: flex; }

    .act-btn.pause:hover {
      background: var(--warning-10, #fef3c7);
      color: var(--sfx-up-warning, #d97706);
    }

    .act-btn.resume:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
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
let ve = It;
Ve([
  F({ attribute: !1 })
], ve.prototype, "file");
Ve([
  F({ type: String })
], ve.prototype, "mode");
Ve([
  F({ attribute: !1 })
], ve.prototype, "getLocateUrl");
Ve([
  D()
], ve.prototype, "_dims");
Ve([
  D()
], ve.prototype, "_copied");
const We = G`
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
`, Ge = G`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;
var Cn = Object.defineProperty, Oe = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && Cn(e, t, o), o;
};
const kr = 7, $n = 4, Bt = class Bt extends Z {
  constructor() {
    super(...arguments), this.fileCount = 0, this.totalSize = 0, this.thumbnails = [], this.primaryLabel = "Done", this.failedFiles = [], this._maxThumbs = kr, this._updateMaxThumbs = () => {
      const e = window.innerWidth <= 768 ? $n : kr;
      e !== this._maxThumbs && (this._maxThumbs = e);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._updateMaxThumbs(), window.addEventListener("resize", this._updateMaxThumbs);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("resize", this._updateMaxThumbs);
  }
  _uploadMore() {
    this.dispatchEvent(
      new CustomEvent("upload-more", { bubbles: !0, composed: !0 })
    );
  }
  _reviewFiles() {
    this.dispatchEvent(
      new CustomEvent("review-files", { bubbles: !0, composed: !0 })
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
    const e = this.thumbnails.slice(0, this._maxThumbs), t = this.thumbnails.length - this._maxThumbs, r = this.fileCount > 0, o = this.failedFiles.length > 0, n = o && !r;
    return f`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${n ? "error" : o ? "warning" : ""}">
          ${n ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>` : o ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>` : f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${n ? "Upload failed" : o ? "Partially uploaded" : "Uploaded successfully!"}</div>
        <div class="subtitle">${n ? `${this.failedFiles.length === 1 ? "File" : "Files"} could not be uploaded` : o ? `${this.fileCount} ${this.fileCount === 1 ? "file" : "files"} uploaded, ${this.failedFiles.length} failed` : "All files are ready for use"}</div>

        ${e.length > 0 ? f`
              <div class="thumbs">
                ${e.map(
      (s) => f`<img class="thumb" src=${s} alt="" />`
    )}
                ${t > 0 ? f`<div class="thumb-more">+${t}</div>` : S}
              </div>
            ` : S}

        ${r ? f`<div class="summary">${this.fileCount} ${this.fileCount === 1 ? "file" : "files"} · ${ce(this.totalSize)} uploaded</div>` : S}

        ${o ? f`
            <div class="failed-list">
              ${this.failedFiles.map((s) => f`
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
          ` : S}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${r || o ? f`<button class="btn-ghost" @click=${this._reviewFiles}>Review files (${this.fileCount + this.failedFiles.length})</button>` : S}
          ${o ? f`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>` : S}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
};
Bt.styles = [We, Ge, G`
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

    @media (max-width: 768px) {
      :host {
        padding: 16px 12px;
        align-items: flex-start;
      }
      .card {
        width: 100%;
        max-width: 100%;
        padding-top: 8px;
      }
      .icon { width: 56px; height: 56px; margin-bottom: 14px; }
      .icon svg { width: 26px; height: 26px; }
      .title { font-size: 18px; }
      .subtitle { font-size: 13px; max-width: 100%; padding: 0 8px; }
      .thumb, .thumb-more { width: 48px; height: 48px; }
      .failed-list { max-width: 100%; }

      /* Stack action buttons two-up on mobile so labels don't wrap. */
      .actions {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        padding: 0 8px;
        box-sizing: border-box;
      }
      .actions > button {
        flex: 1 1 calc(50% - 8px);
        min-width: 0;
        white-space: nowrap;
      }
    }

    @media (max-width: 480px) {
      .icon { width: 48px; height: 48px; margin-bottom: 12px; }
      .icon svg { width: 24px; height: 24px; }
      .title { font-size: 17px; }
      .subtitle { max-width: 90vw; padding: 0 4px; }
      .thumb, .thumb-more { width: 44px; height: 44px; }
    }

    /* Galaxy Z Fold / S8+ — extra narrow: tighten thumb grid so 5+
       thumbs don't force horizontal overflow. */
    @media (max-width: 380px) {
      .thumbs { gap: 4px; }
      .thumb, .thumb-more { width: 40px; height: 40px; }
      .failed-list { max-width: calc(100vw - 24px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .card { animation: none; }
      .icon { animation: none; }
    }
  `];
let ae = Bt;
Oe([
  F({ type: Number })
], ae.prototype, "fileCount");
Oe([
  F({ type: Number })
], ae.prototype, "totalSize");
Oe([
  F({ type: Array })
], ae.prototype, "thumbnails");
Oe([
  F({ type: String })
], ae.prototype, "primaryLabel");
Oe([
  F({ type: Array })
], ae.prototype, "failedFiles");
Oe([
  D()
], ae.prototype, "_maxThumbs");
var Un = Object.defineProperty, Tt = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && Un(e, t, o), o;
};
const Mt = class Mt extends Z {
  constructor() {
    super(...arguments), this.files = [], this._filter = "all", this._setFilter = (e) => () => {
      this._filter = e;
    }, this._onBack = () => {
      this.dispatchEvent(new CustomEvent("back", { bubbles: !0, composed: !0 }));
    }, this._onClear = () => {
      this.dispatchEvent(new CustomEvent("clear-history", { bubbles: !0, composed: !0 }));
    };
  }
  get _filtered() {
    return this._filter === "success" ? this.files.filter((e) => e.status === "complete") : this._filter === "failed" ? this.files.filter((e) => e.status === "failed" || e.status === "error") : this.files;
  }
  get _successCount() {
    return this.files.filter((e) => e.status === "complete").length;
  }
  get _failedCount() {
    return this.files.filter((e) => e.status === "failed" || e.status === "error").length;
  }
  render() {
    const e = this._filtered, t = this.files.length;
    return f`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title="Back">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          Back
        </button>
        <span class="title">Last upload <span class="count">— ${t} ${t === 1 ? "file" : "files"}</span></span>
        <div class="filters">
          <button class="chip ${this._filter === "all" ? "active" : ""}" @click=${this._setFilter("all")}>
            All (${t})
          </button>
          <button class="chip ${this._filter === "success" ? "active" : ""}" @click=${this._setFilter("success")}>
            ✓ Uploaded (${this._successCount})
          </button>
          ${this._failedCount > 0 ? f`<button class="chip ${this._filter === "failed" ? "active" : ""}" @click=${this._setFilter("failed")}>
                ✗ Failed (${this._failedCount})
              </button>` : S}
          <button class="clear-btn" @click=${this._onClear} title="Clear last upload from this browser">Clear</button>
        </div>
      </div>

      <div class="body">
        ${e.length === 0 ? f`<div class="empty">No files match this filter.</div>` : f`<sfx-file-list .files=${e} mode="review" .getLocateUrl=${this.getLocateUrl}></sfx-file-list>`}
      </div>
    `;
  }
};
Mt.styles = G`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      overflow: hidden;
      position: relative;
    }

    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 24px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      flex-shrink: 0;
      flex-wrap: wrap;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
    }

    .back-btn:hover {
      background: var(--sfx-up-surface, #f8fafc);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn svg {
      width: 14px;
      height: 14px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #0f172a);
      margin-right: 8px;
    }

    .count {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 400;
    }

    .filters {
      display: flex;
      gap: 6px;
      margin-left: auto;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      background: transparent;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .chip:hover {
      background: var(--sfx-up-surface, #f8fafc);
    }

    .chip.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-primary, #2563eb);
    }

    .clear-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-error, #dc2626);
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--sfx-up-error, #dc2626) 30%, transparent);
      border-radius: 999px;
      cursor: pointer;
      font-family: inherit;
    }

    .clear-btn:hover {
      background: color-mix(in srgb, var(--sfx-up-error, #dc2626) 8%, transparent);
    }

    .back-btn:focus-visible,
    .chip:focus-visible,
    .clear-btn:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    .body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 16px 0 0;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 14px;
    }

    @media (max-width: 480px) {
      .topbar { padding: 12px 16px; }
    }
  `;
let Ue = Mt;
Tt([
  F({ attribute: !1 })
], Ue.prototype, "files");
Tt([
  F({ attribute: !1 })
], Ue.prototype, "getLocateUrl");
Tt([
  D()
], Ue.prototype, "_filter");
customElements.define("sfx-last-upload-review", Ue);
var En = Object.defineProperty, oe = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && En(e, t, o), o;
};
const Ht = class Ht extends Z {
  constructor() {
    super(...arguments), this.uploadState = "idle", this.fileCount = 0, this.totalSize = 0, this.failedCount = 0, this.showFillMetadata = !1, this.uploadDisabled = !1, this.uploadDisabledReason = "", this.completedCount = 0, this.uploadProgress = 0;
  }
  _clear() {
    this.dispatchEvent(
      new CustomEvent("clear-all", { bubbles: !0, composed: !0 })
    );
  }
  _addMore() {
    this.dispatchEvent(
      new CustomEvent("add-more", { bubbles: !0, composed: !0 })
    );
  }
  _fillMetadata() {
    this.dispatchEvent(
      new CustomEvent("fill-metadata", { bubbles: !0, composed: !0 })
    );
  }
  _upload() {
    this.dispatchEvent(
      new CustomEvent("upload-start", { bubbles: !0, composed: !0 })
    );
  }
  _retryAll() {
    this.dispatchEvent(
      new CustomEvent("retry-all", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    const e = this.uploadState === "uploading";
    return f`
      ${e ? f`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Upload progress"
              >
                <div
                  class="progress-fill"
                  style="width:${this.uploadProgress}%"
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} files</span
              >
            </div>
          ` : S}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata && this.uploadState === "idle" ? f`
                <button class="btn-sec" @click=${this._fillMetadata} aria-label="Fill Metadata">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">Fill Metadata</span>
                </button>
              ` : S}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label="Clear">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            <span class="btn-label">Clear</span>
          </button>
          <button class="btn-sec" @click=${this._addMore} aria-label="Add more">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">Add more</span>
          </button>
          ${this.failedCount > 0 ? f`
                <button
                  class="btn-retry"
                  @click=${this._retryAll}
                  aria-label="Retry all (${this.failedCount})"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                  >
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                  <span class="btn-label">Retry all (${this.failedCount})</span>
                </button>
              ` : S}
          ${this._renderUploadButton()}
        </div>
      </div>
    `;
  }
  _renderUploadButton() {
    const e = this.uploadState === "uploading", t = this.uploadState === "done", r = ["btn-primary", t ? "done-state" : ""].filter(Boolean).join(" "), o = e ? "Uploading" : t ? "Done" : "Upload";
    return f`
      <button
        class=${r}
        @click=${this._upload}
        ?disabled=${e || this.uploadDisabled}
        title=${this.uploadDisabled ? this.uploadDisabledReason : ""}
        aria-label=${o}
      >
        ${e ? f`<span class="btn-spin"></span
              ><span class="btn-label">Uploading…</span>` : t ? f`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="btn-label">Done!</span>
            ` : f`
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
              <span class="btn-label">Upload</span>
            `}
      </button>
    `;
  }
};
Ht.styles = [
  We,
  Ge,
  G`
      :host {
        display: flex;
        flex-direction: column;
        background: var(--sfx-up-bg, #ffffff);
        flex-shrink: 0;
        box-shadow: none;
        position: relative;
        animation: barSlideUp 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) both;
        container-type: inline-size;
        container-name: actions-bar;
      }

      /* Full-column-width divider above the actions bar.
       The bar sits inside .content which is capped at
       --sfx-up-content-max-width (1600px), so a plain :host border-top
       would leave visible gaps on ultra-wide viewports. Instead we
       draw the line as a pseudo-element on the first child and push
       it 100vw to each side — the outer .inline { overflow: hidden }
       clips it back to the column width. */
      :host > :first-child {
        position: relative;
      }

      :host > :first-child::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100vw;
        right: -100vw;
        height: 1px;
        background: var(--sfx-up-border, #e2e8f0);
        pointer-events: none;
        z-index: 1;
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
        to {
          transform: rotate(360deg);
        }
      }

      /* Collapse the right group to icon-only when the actions bar
         itself is narrow — not when the viewport is. @container beats
         @media here because inline uploaders can live inside a column
         narrower than the browser window. */
      @container actions-bar (max-width: 560px) {
        .buttons-row {
          padding: 10px 12px;
          gap: 6px;
        }
        .left,
        .right {
          gap: 6px;
        }
        button {
          height: 36px;
          font-size: 12px;
        }
        .right .btn-ghost,
        .right .btn-sec,
        .right .btn-retry,
        .right .btn-primary {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .right .btn-label {
          display: none;
        }
        .right svg {
          width: 16px;
          height: 16px;
        }
      }

      /* Very narrow: also collapse the left Fill Metadata pill. */
      @container actions-bar (max-width: 380px) {
        .left .btn-sec {
          padding: 0;
          width: 36px;
          min-width: 36px;
          gap: 0;
        }
        .left .btn-label {
          display: none;
        }
        .left svg {
          width: 16px;
          height: 16px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
        .btn-spin {
          animation: none;
        }
      }
    `
];
let ee = Ht;
oe([
  F({ type: String })
], ee.prototype, "uploadState");
oe([
  F({ type: Number })
], ee.prototype, "fileCount");
oe([
  F({ type: Number })
], ee.prototype, "totalSize");
oe([
  F({ type: Number })
], ee.prototype, "failedCount");
oe([
  F({ type: Boolean })
], ee.prototype, "showFillMetadata");
oe([
  F({ type: Boolean })
], ee.prototype, "uploadDisabled");
oe([
  F({ type: String })
], ee.prototype, "uploadDisabledReason");
oe([
  F({ type: Number })
], ee.prototype, "completedCount");
oe([
  F({ type: Number })
], ee.prototype, "uploadProgress");
const Pn = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Dt(i, e) {
  return (t) => {
    if (t.key !== "Tab") return;
    const r = i();
    if (!r) return;
    const o = r.querySelector(e);
    if (!o) return;
    const n = Array.from(o.querySelectorAll(Pn));
    if (n.length === 0) return;
    const s = n[0], a = n[n.length - 1], l = r.activeElement;
    t.shiftKey ? (l === s || !o.contains(l)) && (t.preventDefault(), a.focus()) : (l === a || !o.contains(l)) && (t.preventDefault(), s.focus());
  };
}
var zn = Object.defineProperty, jt = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && zn(e, t, o), o;
};
const qt = class qt extends Z {
  constructor() {
    super(...arguments), this._url = "", this._name = "", this._error = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._onUrlInput = (e) => {
      this._url = e.target.value, this._error = "", this._autoName();
    }, this._onNameInput = (e) => {
      this._name = e.target.value;
    }, this._focusTrap = Dt(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
      var t;
      e.key === "Escape" && this._cancel(), e.key === "Enter" && ((t = e.target) == null ? void 0 : t.tagName) === "INPUT" && this._submit(), this._focusTrap(e);
    };
  }
  _autoName() {
    var e;
    if (!this._name)
      try {
        const t = new URL(this._url).pathname.split("/"), r = t[t.length - 1];
        if (r) {
          const o = (e = this.shadowRoot) == null ? void 0 : e.querySelector("#nameInput");
          o && (o.placeholder = r);
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
        const r = new URL(e).pathname.split("/");
        t = r[r.length - 1] || "imported-file";
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
    return f`
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
            ${this._error ? f`<div class="error">${this._error}</div>` : ""}
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
qt.styles = [We, Ge, G`
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
let qe = qt;
jt([
  D()
], qe.prototype, "_url");
jt([
  D()
], qe.prototype, "_name");
jt([
  D()
], qe.prototype, "_error");
var On = Object.defineProperty, nt = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && On(e, t, o), o;
};
const Nt = class Nt extends Z {
  constructor() {
    super(...arguments), this._stream = null, this._error = "", this._captured = null, this._previewUrl = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = Dt(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
      e.key === "Escape" && this._cancel(), this._focusTrap(e);
    }, this._capture = () => {
      var o, n;
      const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("video"), t = (n = this.shadowRoot) == null ? void 0 : n.querySelector("canvas");
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
    return f`
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
            ${this._error ? f`<div class="error">${this._error}</div>` : this._captured ? f`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  ` : f`
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
Nt.styles = [We, Ge, G`
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
let Ee = Nt;
nt([
  D()
], Ee.prototype, "_stream");
nt([
  D()
], Ee.prototype, "_error");
nt([
  D()
], Ee.prototype, "_captured");
nt([
  D()
], Ee.prototype, "_previewUrl");
var Rn = Object.defineProperty, Xe = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && Rn(e, t, o), o;
};
const Yt = class Yt extends Z {
  constructor() {
    super(...arguments), this._stream = null, this._recording = !1, this._error = "", this._recordedBlob = null, this._previewUrl = "", this._recorder = null, this._chunks = [], this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = Dt(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
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
        const r = MediaRecorder.isTypeSupported("video/webm;codecs=vp9") ? "video/webm;codecs=vp9" : "video/webm";
        this._recorder = new MediaRecorder(this._stream, { mimeType: r }), this._recorder.ondataavailable = (o) => {
          o.data.size > 0 && this._chunks.push(o.data);
        }, this._recorder.onstop = () => {
          var n;
          const o = new Blob(this._chunks, { type: "video/webm" });
          this._recordedBlob = o, this._previewUrl = URL.createObjectURL(o), (n = this._stream) == null || n.getTracks().forEach((s) => s.stop()), this._stream = null;
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
    (e = this._recorder) == null || e.stop(), this._recorder = null, (t = this._stream) == null || t.getTracks().forEach((r) => r.stop()), this._stream = null;
  }
  _cancel() {
    this._stopAll(), this.dispatchEvent(new CustomEvent("screencast-cancel", { bubbles: !0, composed: !0 }));
  }
  render() {
    return f`
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
            ${this._error ? f`<div class="error">${this._error}</div>` : this._recordedBlob ? f`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  ` : this._recording ? f`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    ` : f`
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
Yt.styles = [We, Ge, G`
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
let xe = Yt;
Xe([
  D()
], xe.prototype, "_stream");
Xe([
  D()
], xe.prototype, "_recording");
Xe([
  D()
], xe.prototype, "_error");
Xe([
  D()
], xe.prototype, "_recordedBlob");
Xe([
  D()
], xe.prototype, "_previewUrl");
var Tn = Object.defineProperty, Jr = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && Tn(e, t, o), o;
};
const Vt = class Vt extends Z {
  constructor() {
    super(...arguments), this.duration = 6e3, this._toasts = [], this._nextId = 0;
  }
  show(e, t = "error") {
    const r = ++this._nextId;
    this._toasts = [...this._toasts, { id: r, message: e, type: t, leaving: !1 }], setTimeout(() => this._dismiss(r), this.duration);
  }
  _dismiss(e) {
    const t = this._toasts.findIndex((o) => o.id === e);
    if (t === -1) return;
    const r = [...this._toasts];
    r[t] = { ...r[t], leaving: !0 }, this._toasts = r, setTimeout(() => {
      this._toasts = this._toasts.filter((o) => o.id !== e);
    }, 200);
  }
  _iconForType(e) {
    return e === "error" ? f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>` : e === "warning" ? f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>` : f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`;
  }
  render() {
    return this._toasts.length === 0 ? f`` : f`
      <div class="toast-stack">
        ${this._toasts.map(
      (e) => f`
            <div class="toast toast--${e.type} ${e.leaving ? "leaving" : ""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button class="toast-close" @click=${() => this._dismiss(e.id)} aria-label="Dismiss">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `
    )}
      </div>
    `;
  }
};
Vt.styles = G`
    :host {
      display: block;
      position: absolute;
      bottom: 12px;
      right: 12px;
      z-index: 1050;
      pointer-events: none;
      font-family: var(--sfx-up-font, inherit);
    }

    .toast-stack {
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      align-items: flex-end;
    }

    .toast {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      max-width: 360px;
      padding: 10px 14px;
      border-radius: 8px;
      font-size: 13px;
      line-height: 1.4;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: toast-in 0.25s ease forwards;
      word-break: break-word;
    }
    .toast.leaving {
      animation: toast-out 0.2s ease forwards;
    }

    .toast--error {
      background: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }
    .toast--warning {
      background: #fffbeb;
      color: #92400e;
      border: 1px solid #fde68a;
    }
    .toast--info {
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }

    .toast-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      margin-top: 1px;
    }

    .toast-msg {
      flex: 1;
      min-width: 0;
    }

    .toast-close {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: inherit;
      opacity: 0.5;
      transition: opacity 0.12s;
    }
    .toast-close:hover {
      opacity: 1;
    }

    @keyframes toast-in {
      from { opacity: 0; transform: translateY(8px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes toast-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(8px) scale(0.96); }
    }
  `;
let Ne = Vt;
Jr([
  F({ type: Number })
], Ne.prototype, "duration");
Jr([
  D()
], Ne.prototype, "_toasts");
customElements.define("sfx-toast", Ne);
var Dn = Object.defineProperty, H = (i, e, t, r) => {
  for (var o = void 0, n = i.length - 1, s; n >= 0; n--)
    (s = i[n]) && (o = s(e, t, o) || o);
  return o && Dn(e, t, o), o;
};
const Sr = /* @__PURE__ */ new Set(["unsplash"]), _e = { isTus: !1, tusUploadUrl: null };
var K;
const M = (K = class extends Z {
  constructor() {
    super(), this.config = null, this._isOpen = !1, this._activeConnector = null, this._showUrlDialog = !1, this._showCameraDialog = !1, this._showScreenCastDialog = !1, this._previewFileId = null, this._previewDims = "—", this._fileInfoOpen = !0, this._splitPct = 58, this._isResizing = !1, this._splitRafId = 0, this._previewDefaultApplied = !1, this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fullscreenZoomed = !1, this._fsPanX = 0, this._fsPanY = 0, this._fsDragging = !1, this._fsDragStartX = 0, this._fsDragStartY = 0, this._fsPanStartX = 0, this._fsPanStartY = 0, this._bodyDragOver = !1, this._isMinimized = !1, this._isPillExpanded = !1, this._metadataSchema = null, this._bulkMetadataOpen = !1, this._isReviewing = !1, this._reviewFiles = [], this._hasStoredReview = !1, this._metadataAutocomplete = null, this._videoBlobUrls = /* @__PURE__ */ new Map(), this._engine = null, this._cachedSources = je, this._cachedSourcesConfig = void 0, this._rejectedTimers = /* @__PURE__ */ new Map(), this._closeOnCompleteTimer = null, this._apiBase = null, this._authHeaders = null, this._authResolveId = 0, this._prevStoreState = null, this._unsubStoreEvents = null, this._portalContainer = null, this._onFileRename = (e) => {
      this._onPreviewRename(e.detail.fileId, e.detail.name);
    }, this._onPreviewMetadataBlur = (e) => {
      const t = this._previewFileId;
      if (!t) return;
      const { key: r, value: o } = e.detail, n = this._store.getState().files.get(t);
      if (!n) return;
      const s = new Map(this._store.getState().files);
      s.set(t, { ...n, meta: { ...n.meta, [r]: o } }), this._store.setState({ files: s });
    }, this._onFilesSelected = (e) => {
      this._processIncomingFiles(e.detail.files);
    }, this._onDropTileSourceClick = (e) => {
      e.stopPropagation(), this._handleSourceActivation(e.detail.source.id);
    }, this._onSourceClick = async (e) => {
      this._handleSourceActivation(e.detail.source);
    }, this._handleSourceActivation = async (e) => {
      var o, n;
      const t = this._mergedSources.find((s) => s.id === e);
      if (t != null && t.onActivate) {
        try {
          t.onActivate(this);
        } catch (s) {
          console.error(
            `[sfx-uploader] onActivate for custom source "${e}" threw:`,
            s
          );
        }
        return;
      }
      if (e === "device") {
        const s = this.shadowRoot.querySelector(
          "sfx-drop-zone"
        );
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
      if ((((n = (o = this.config) == null ? void 0 : o.connectors) == null ? void 0 : n.providers) ?? []).includes(e)) {
        if (Sr.has(e)) {
          if (!customElements.get("sfx-search-provider-browser")) {
            const { SfxSearchProviderBrowser: a } = await import("./search-provider-browser-8oKVjic7.js");
            customElements.define(
              "sfx-search-provider-browser",
              a
            );
          }
        } else if (!customElements.get("sfx-provider-browser")) {
          const { SfxProviderBrowser: a } = await import("./provider-browser-_2e3p9cw.js");
          customElements.define("sfx-provider-browser", a);
        }
        this._activeConnector = e;
      }
    }, this._onUrlSubmit = (e) => {
      var _, E, O;
      this._showUrlDialog = !1;
      const { url: t, name: r } = e.detail, o = (_ = this.config) == null ? void 0 : _.callbacks, n = fn(r), s = n.startsWith("image/"), a = this._store.getState();
      if ([...a.files.values()].some(
        (P) => P.name === r && P.status !== "rejected" && P.status !== "cancelled"
      )) return;
      const p = wt(
        { name: r, size: 0, type: n },
        a.restrictions,
        a.files
      );
      if (p) {
        const P = {
          id: we(),
          status: "rejected",
          file: null,
          remoteUrl: t,
          name: r,
          size: 0,
          type: n,
          previewUrl: null,
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
          remoteInfo: null,
          ..._e
        };
        me(this._store, P), this._dispatchPublic(B.FILE_REJECTED, {
          file: P,
          reason: p
        }), (E = o == null ? void 0 : o.onFileRejected) == null || E.call(o, P, p);
        return;
      }
      const h = {
        id: we(),
        status: "idle",
        file: null,
        remoteUrl: t,
        name: r,
        size: 0,
        type: n,
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
        remoteInfo: null,
        ..._e
      };
      me(this._store, h), this._dispatchPublic(B.FILE_ADDED, { file: h }), (O = o == null ? void 0 : o.onFileAdded) == null || O.call(o, h), this._store.getState().queueConfig.autoProceed && this.upload();
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
      var r, o, n;
      const t = this._store.getState().files.get(e.detail.fileId);
      t && (this._previewFileId = t.id, this._dispatchPublic(B.FILE_PREVIEW, { file: t }), (n = (o = (r = this.config) == null ? void 0 : r.callbacks) == null ? void 0 : o.onFilePreview) == null || n.call(o, t));
    }, this._onFillMetadata = () => {
      var t, r, o, n;
      const e = [...this._store.getState().files.values()].filter(
        (s) => K._MODIFIABLE_STATUSES.has(s.status)
      );
      (t = this.config) != null && t.metadataConfig && this._metadataSchema && (this._bulkMetadataOpen = !0), this._dispatchPublic(B.FILL_METADATA, { files: e }), (n = (o = (r = this.config) == null ? void 0 : r.callbacks) == null ? void 0 : o.onFillMetadata) == null || n.call(o, e);
    }, this._onBulkMetadataSaveBatch = (e) => {
      const { changes: t } = e.detail;
      if (!t.length) return;
      const r = new Map(this._store.getState().files);
      for (const { fileId: o, meta: n } of t) {
        const s = r.get(o);
        s && r.set(o, { ...s, meta: { ...s.meta, ...n } });
      }
      this._store.setState({ files: r });
    }, this._onBulkMetadataClose = () => {
      this._bulkMetadataOpen = !1;
    }, this._onFileRetry = (e) => {
      var t;
      this._ensureEngine(), (t = this._engine) == null || t.retryFile(e.detail.fileId);
    }, this._onFilePause = (e) => {
      var t;
      (t = this._engine) == null || t.pauseFile(e.detail.fileId);
    }, this._onFileResume = (e) => {
      var t;
      (t = this._engine) == null || t.resumeFile(e.detail.fileId);
    }, this._onRetryAll = () => {
      var e;
      this._ensureEngine(), (e = this._engine) == null || e.retryAll();
    }, this._onClearAll = () => {
      var r, o, n;
      const e = (r = this.config) == null ? void 0 : r.callbacks;
      this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), (o = this._engine) == null || o.cancelAll();
      const t = [...this._store.getState().files.values()];
      for (const s of t)
        s.previewUrl && URL.revokeObjectURL(s.previewUrl), this._dispatchPublic(B.FILE_REMOVED, { file: s }), (n = e == null ? void 0 : e.onFileRemoved) == null || n.call(e, s);
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
      var o;
      const e = this.shadowRoot.querySelector(
        "sfx-drop-zone"
      );
      if (e) {
        e.browse();
        return;
      }
      const t = this.shadowRoot.querySelector("sfx-file-list"), r = (o = t == null ? void 0 : t.shadowRoot) == null ? void 0 : o.querySelector(
        'input[type="file"]'
      );
      r == null || r.click();
    }, this._onUploadStart = () => {
      var e;
      if (this._phase === "complete") {
        ((e = this.config) == null ? void 0 : e.clearOnComplete) !== !1 && this._onClearAll();
        return;
      }
      this._hasUnfilledRequiredMetadata || this.upload();
    }, this._onUploadMore = () => {
      this._onClearAll();
    }, this._onEnterReview = () => {
      const e = [...this._store.getState().files.values()].filter(
        (r) => r.status === "complete" || r.status === "failed" || r.status === "error"
      );
      if (e.length > 0) {
        this._reviewFiles = e, this._isReviewing = !0;
        return;
      }
      const t = Je.load();
      !t || t.length === 0 || (this._reviewFiles = t, this._isReviewing = !0);
    }, this._onExitReview = () => {
      this._isReviewing = !1, this._reviewFiles = [];
    }, this._onClearReview = () => {
      Je.clear(), this._isReviewing = !1, this._reviewFiles = [], this._hasStoredReview = !1;
    }, this._onConnectorFilesSelected = (e) => {
      var r, o, n;
      const t = (r = this.config) == null ? void 0 : r.callbacks;
      for (const s of e.detail.files) {
        const a = this._store.getState();
        if ([...a.files.values()].some(
          (_) => _.name === s.name && _.size === s.size && _.status !== "rejected" && _.status !== "cancelled"
        )) continue;
        const p = wt(
          { name: s.name, size: s.size, type: s.mimeType },
          a.restrictions,
          a.files
        );
        if (p) {
          const _ = {
            id: we(),
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
            error: p,
            retryCount: 0,
            response: null,
            addedAt: Date.now(),
            meta: {},
            tags: [],
            remoteInfo: s,
            ..._e
          };
          me(this._store, _), this._dispatchPublic(B.FILE_REJECTED, {
            file: _,
            reason: p
          }), (o = t == null ? void 0 : t.onFileRejected) == null || o.call(t, _, p);
          continue;
        }
        const h = {
          id: we(),
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
          remoteInfo: s,
          ..._e
        };
        me(this._store, h), this._dispatchPublic(B.FILE_ADDED, { file: h }), (n = t == null ? void 0 : t.onFileAdded) == null || n.call(t, h);
      }
      this._activeConnector = null, this._store.getState().queueConfig.autoProceed && this.upload();
    }, this._onConnectorClose = () => {
      this._activeConnector = null;
    }, this._onConnectorBackdropClick = (e) => {
      e.target === e.currentTarget && (this._activeConnector = null);
    }, this._onPrimaryAction = () => {
      var e, t, r, o, n;
      this._dispatchPublic(B.COMPLETE_ACTION, {}), (r = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onCompleteAction) == null || r.call(t), ((o = this.config) == null ? void 0 : o.mode) === "modal" ? this.close() : ((n = this.config) == null ? void 0 : n.clearOnComplete) !== !1 && this._onClearAll();
    }, this._onInlineDismiss = () => {
      var e, t, r;
      (r = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onCancel) == null || r.call(t), this._dispatchPublic(B.CANCEL, {});
    }, this._onSuccessCardClose = () => {
      var e, t, r, o;
      ((e = this.config) == null ? void 0 : e.mode) === "inline" ? (this._dispatchPublic(B.COMPLETE_ACTION, {}), (o = (r = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : r.onCompleteAction) == null || o.call(r), this._onClearAll()) : this._onModalDismiss();
    }, this._onModalDismiss = () => {
      var e, t, r, o;
      this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll()), (o = (r = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : r.onCancel) == null || o.call(r), this._dispatchPublic(B.CANCEL, {}), this.close();
    }, this._onMinimize = () => {
      this._isMinimized = !0, this._isPillExpanded = !0, this.requestUpdate();
    }, this._onPillClick = () => {
      this._isPillExpanded = !this._isPillExpanded, this.requestUpdate();
    }, this._onPillExpand = () => {
      this._isMinimized = !1, this._isPillExpanded = !1, this._isOpen = !0, this.requestUpdate();
    }, this._onPillDismiss = () => {
      var e, t, r, o;
      this._isMinimized = !1, this._isPillExpanded = !1, this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll()), (o = (r = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : r.onCancel) == null || o.call(r), this._dispatchPublic(B.CANCEL, {}), this.close();
    }, this._onModalBackdropClick = (e) => {
      e.target === e.currentTarget && this._onModalDismiss();
    }, this._bodyLeaveTimer = null, this._onBodyDragEnter = (e) => {
      e.preventDefault(), this._bodyLeaveTimer && (clearTimeout(this._bodyLeaveTimer), this._bodyLeaveTimer = null), this._bodyDragOver = !0;
    }, this._onBodyDragOver = (e) => {
      e.preventDefault(), this._bodyLeaveTimer && (clearTimeout(this._bodyLeaveTimer), this._bodyLeaveTimer = null), this._bodyDragOver = !0;
    }, this._onBodyDragLeave = (e) => {
      e.preventDefault(), this._bodyLeaveTimer && clearTimeout(this._bodyLeaveTimer), this._bodyLeaveTimer = setTimeout(() => {
        this._bodyDragOver = !1, this._bodyLeaveTimer = null;
      }, 80);
    }, this._onBodyDrop = (e) => {
      var r;
      e.preventDefault(), this._bodyLeaveTimer && (clearTimeout(this._bodyLeaveTimer), this._bodyLeaveTimer = null), this._bodyDragOver = !1;
      const t = Array.from(((r = e.dataTransfer) == null ? void 0 : r.files) ?? []);
      t.length > 0 && this._onFilesSelected(
        new CustomEvent("files-selected", { detail: { files: t } })
      );
    }, this._onKeyDown = (e) => {
      var t, r;
      if (e.key === "Escape") {
        if (this._fullscreenPreviewUrl || this._fullscreenVideoFile) {
          this._onFsClose();
          return;
        }
        const o = ((t = this.config) == null ? void 0 : t.mode) ?? "modal", n = ((r = this.config) == null ? void 0 : r.header) ?? (o === "modal" ? "close" : !0);
        (n === "close" || n === "back") && (o === "modal" && this._isOpen ? this._onModalDismiss() : o === "inline" && this._onInlineDismiss());
      }
    }, this._dimCache = /* @__PURE__ */ new Map(), this._onSplitPointerDown = (e) => {
      var r;
      e.preventDefault(), this._isResizing = !0;
      const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector(
        ".preview-layout"
      );
      t == null || t.classList.add("resizing"), e.target.setPointerCapture(e.pointerId);
    }, this._onSplitPointerMove = (e) => {
      if (!this._isResizing || this._splitRafId) return;
      const t = e.clientX;
      this._splitRafId = requestAnimationFrame(() => {
        var s;
        this._splitRafId = 0;
        const r = (s = this.shadowRoot) == null ? void 0 : s.querySelector(
          ".preview-layout"
        );
        if (!r) return;
        const o = r.getBoundingClientRect(), n = (t - o.left) / o.width * 100;
        this._splitPct = Math.max(25, Math.min(75, n));
      });
    }, this._onSplitPointerUp = () => {
      var t;
      this._isResizing = !1, this._splitRafId && (cancelAnimationFrame(this._splitRafId), this._splitRafId = 0);
      const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(
        ".preview-layout"
      );
      e == null || e.classList.remove("resizing");
    }, this._onFsToggleZoom = (e) => {
      e == null || e.stopPropagation(), this._fullscreenZoomed = !this._fullscreenZoomed, this._fullscreenZoomed || (this._fsPanX = 0, this._fsPanY = 0);
    }, this._onFsOverlayClick = (e) => {
      this._fsDragDidMove || this._onFsToggleZoom(e);
    }, this._fsDragDidMove = !1, this._onFsPanStart = (e) => {
      this._fullscreenZoomed && (this._fsDragging = !0, this._fsDragDidMove = !1, this._fsDragStartX = e.clientX, this._fsDragStartY = e.clientY, this._fsPanStartX = this._fsPanX, this._fsPanStartY = this._fsPanY, e.preventDefault());
    }, this._onFsPanMove = (e) => {
      if (!this._fsDragging) return;
      const t = e.clientX - this._fsDragStartX, r = e.clientY - this._fsDragStartY;
      (Math.abs(t) > 3 || Math.abs(r) > 3) && (this._fsDragDidMove = !0), this._fsPanX = this._fsPanStartX + t, this._fsPanY = this._fsPanStartY + r, this.requestUpdate();
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
      const t = e.touches[0], r = t.clientX - this._fsDragStartX, o = t.clientY - this._fsDragStartY;
      (Math.abs(r) > 3 || Math.abs(o) > 3) && (this._fsDragDidMove = !0), this._fsPanX = this._fsPanStartX + r, this._fsPanY = this._fsPanStartY + o, this.requestUpdate(), e.preventDefault();
    }, this._onFsClose = (e) => {
      e == null || e.stopPropagation(), this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fullscreenZoomed = !1, this._fsPanX = 0, this._fsPanY = 0;
    }, this._store = ei(), this._storeCtrl = new ti(this, this._store);
  }
  // --- Public API ---
  /** Open the uploader (modal mode). */
  open() {
    var e, t, r;
    this._isMinimized && (this._isMinimized = !1, this._isPillExpanded = !1), !this._isOpen && (this._isOpen = !0, (r = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onOpen) == null || r.call(t), this._dispatchPublic(B.OPEN, {}), this.requestUpdate());
  }
  /** Close the uploader (modal mode). Optionally clears all files (controlled by clearOnClose config). */
  close() {
    var e, t, r, o;
    this._isOpen && (this._isOpen = !1, this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), ((e = this.config) == null ? void 0 : e.clearOnClose) !== !1 && this._onClearAll(), this._previewFileId = null, (o = (r = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : r.onClose) == null || o.call(r), this._dispatchPublic(B.CLOSE, {}), this.requestUpdate());
  }
  /** Start uploading all queued files. */
  upload() {
    var o, n, s, a, l, p, h;
    if (this._ensureEngine(), !this._engine) {
      console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");
      return;
    }
    const e = [...this._store.getState().files.values()].filter(
      (_) => _.status === "idle" || _.status === "queued"
    );
    if ((n = (o = this.config) == null ? void 0 : o.callbacks) != null && n.onBeforeUpload && this.config.callbacks.onBeforeUpload(e) === !1)
      return;
    const t = new CustomEvent(B.BEFORE_UPLOAD, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { files: e }
    });
    this.dispatchEvent(t) && (this._dispatchPublic(B.UPLOAD_STARTED, { files: e }), (l = (a = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : a.onUploadStarted) == null || l.call(a, e), this._engine.uploadAll(), (p = this.config) != null && p.minimizeOnUpload && ((h = this.config) == null ? void 0 : h.mode) !== "inline" && (this._isMinimized = !0, this._isPillExpanded = !0, this.requestUpdate()));
  }
  /** Programmatically add files. */
  addFiles(e) {
    this._processIncomingFiles(e);
  }
  /** Resume a paused upload (spec §13.2). */
  resumeUpload(e) {
    var t;
    if (e && e.length > 0) {
      const r = this._store.getState().files, o = new Map(r);
      let n = !1;
      for (const s of e) {
        const a = r.get(s.id);
        a && (o.set(s.id, { ...a, ...s }), n = !0);
      }
      n && this._store.setState({ files: o });
    }
    this._ensureEngine(), (t = this._engine) == null || t.uploadAll();
  }
  /** Cancel a paused upload (spec §13.2). */
  cancelUpload() {
    var e;
    (e = this._engine) == null || e.cancelAll();
  }
  /** Pause a specific file's tus upload. Only works for files using resumable upload. */
  pauseFile(e) {
    var t;
    (t = this._engine) == null || t.pauseFile(e);
  }
  /** Resume a specific paused tus upload. */
  resumeFile(e) {
    var t;
    (t = this._engine) == null || t.resumeFile(e);
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
  updateFileMeta(e, t, r) {
    const o = this._store.getState().files, n = o.get(e);
    if (!n || !K._MODIFIABLE_STATUSES.has(n.status))
      return;
    const s = new Map(o);
    s.set(e, {
      ...n,
      meta: t != null ? { ...n.meta, ...t } : n.meta,
      tags: r ?? n.tags
    }), this._store.setState({ files: s });
  }
  /** Batch-update metadata and/or tags for multiple files. */
  updateFilesMeta(e) {
    const t = this._store.getState().files, r = new Map(t);
    let o = !1;
    for (const { fileId: n, meta: s, tags: a } of e) {
      const l = t.get(n);
      !l || !K._MODIFIABLE_STATUSES.has(l.status) || (r.set(n, {
        ...l,
        meta: s != null ? { ...l.meta, ...s } : l.meta,
        tags: a ?? l.tags
      }), o = !0);
    }
    o && this._store.setState({ files: r });
  }
  // --- Lifecycle ---
  updated(e) {
    if (e.has("config") && this.config && this._applyConfig(this.config), e.has("_previewFileId") && this._previewFileId) {
      const t = this._previewFileId, r = this._store.getState().files.get(t);
      r ? this._getImageDimensions(r).then((o) => {
        this._previewFileId === t && (this._previewDims = o ? `${o.w} × ${o.h}` : "—");
      }) : this._previewDims = "—";
    }
    this._applyDefaultPreviewWidth(), this._updateFloatingPortal();
  }
  /**
   * The preview panel opens at 3/8 (~37.5%) of the modal width by default,
   * giving the grid 5/8. On first appearance of the preview layout we set
   * _splitPct once; after that the user's own divider drag wins until the
   * preview layout is dismissed.
   */
  _applyDefaultPreviewWidth() {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector(".preview-layout");
    if (!e) {
      this._previewDefaultApplied = !1;
      return;
    }
    this._previewDefaultApplied || e.getBoundingClientRect().width <= 0 || (this._splitPct = 62.5, this._previewDefaultApplied = !0);
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
    this._isMinimized && e.length > 0 ? (this._injectFloatStyles(), this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-upload-float", ""), document.body.appendChild(this._portalContainer)), ue(this._renderFloatingPill(e), this._portalContainer)) : this._portalContainer && (ue(S, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("keydown", this._onKeyDown), this._prevStoreState = this._store.getState(), this._unsubStoreEvents = this._store.subscribe(() => this._onStoreChange()), this._hasStoredReview = Je.load() != null;
  }
  disconnectedCallback() {
    var e, t, r, o;
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKeyDown), (e = this._unsubStoreEvents) == null || e.call(this), this._unsubStoreEvents = null, this._prevStoreState = null, (t = this._portalContainer) == null || t.remove(), this._portalContainer = null, document.querySelector("[data-sfx-upload-float]") || (r = document.querySelector("style[data-sfx-upload-float-styles]")) == null || r.remove(), this._revokeVideoBlobUrls();
    for (const n of this._rejectedTimers.values()) clearTimeout(n);
    this._rejectedTimers.clear(), this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null);
    for (const n of this._store.getState().files.values())
      n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    (o = this._engine) == null || o.destroy(), this._engine = null;
  }
  // --- Config ---
  _applyConfig(e) {
    const t = {};
    if (e.targetFolder && (t.targetFolder = e.targetFolder), e.restrictions && (t.restrictions = {
      ...this._store.getState().restrictions,
      ...e.restrictions
    }), e.concurrency != null) {
      const r = this._store.getState().queueConfig;
      t.queueConfig = { ...r, concurrency: e.concurrency };
    }
    if (e.autoProceed != null) {
      const r = t.queueConfig ?? this._store.getState().queueConfig;
      t.queueConfig = { ...r, autoProceed: e.autoProceed };
    }
    Object.keys(t).length > 0 && this._store.setState(t), this._resolveAuthAndEngine(e), (e.mode === "inline" || !e.mode) && (this._isOpen = !0);
  }
  async _resolveAuthAndEngine(e) {
    var o, n;
    const t = e.auth;
    if (t.mode === "sass-key") {
      this._apiBase = Ot(t.container), this._authHeaders = mt(t), this._ensureEngine(), (o = this._engine) == null || o.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig()
      }), this._preloadMetadataSchema(e);
      return;
    }
    const r = ++this._authResolveId;
    try {
      const s = await on(t);
      if (r !== this._authResolveId) return;
      this._apiBase = s.apiBase, this._authHeaders = s.headers, this._ensureEngine(), (n = this._engine) == null || n.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig()
      }), this._preloadMetadataSchema(e);
    } catch (s) {
      if (r !== this._authResolveId) return;
      console.error("[sfx-uploader] Auth resolution failed:", s), this._showToast(this._formatAuthError(s));
    }
  }
  _formatAuthError(e) {
    var r, o;
    const t = e instanceof Error ? e.message : String(e);
    return (o = (r = this.config) == null ? void 0 : r.auth) != null && o.container ? t.includes("HTTP 404") ? `Authentication failed: container "${this.config.auth.container}" not found. Check your container name.` : t.includes("HTTP 401") || t.includes("HTTP 403") ? "Authentication failed: invalid security template ID. Check your credentials in the Auth panel." : t.includes("timed out") ? "Authentication failed: request timed out. Check your network connection." : t.includes("Failed to fetch") || t.includes("NetworkError") ? "Authentication failed: network error. Check your internet connection." : `Authentication failed: ${t}` : "Authentication failed: no container specified. Open the Auth panel and enter your credentials.";
  }
  _showToast(e, t = "error") {
    var o;
    const r = (o = this.shadowRoot) == null ? void 0 : o.querySelector(
      "sfx-toast"
    );
    r == null || r.show(e, t);
  }
  _normalizeTusConfig() {
    var t;
    const e = (t = this.config) == null ? void 0 : t.tusConfig;
    return e === !0 ? {} : e || void 0;
  }
  _ensureEngine() {
    !this._engine && this._apiBase && this._authHeaders && (this._engine = new tn(this._store, {
      apiBase: this._apiBase,
      authHeaders: this._authHeaders,
      tusConfig: this._normalizeTusConfig()
    }), this._engine.start());
  }
  // --- Metadata schema preloading ---
  async _preloadMetadataSchema(e) {
    const t = e.metadataConfig;
    if (!(!t || !this._apiBase || !this._authHeaders))
      try {
        const { fetchMetadataSchema: r, createTagsAutocomplete: o } = await import("./index-DMqa8AUM.js");
        this._metadataSchema = await r(
          this._apiBase,
          this._authHeaders,
          t.projectUuid,
          t
        ), this._metadataAutocomplete = o(
          this._apiBase,
          this._authHeaders
        );
      } catch (r) {
        console.error("[sfx-uploader] Failed to load metadata schema:", r), this._showToast("Failed to load metadata schema", "warning");
      }
  }
  /** Handle file rename from the preview sidebar or thumbnail. */
  _onPreviewRename(e, t) {
    const r = t.trim();
    if (!r) return;
    const o = this._store.getState().files.get(e);
    if (!o || o.name === r) return;
    const n = new Map(this._store.getState().files);
    n.set(e, { ...o, name: r }), this._store.setState({ files: n });
  }
  get _metadataEnforcing() {
    var t;
    const e = (t = this.config) == null ? void 0 : t.metadataConfig;
    return !e || !this._metadataSchema ? !1 : e.enforceRequiredBeforeUpload === !0 ? !0 : e.enforceRequiredBeforeUpload === "auto" ? this._metadataSchema.forceFillingOnUpload : !1;
  }
  get _hasUnfilledRequiredMetadata() {
    if (!this._metadataEnforcing || !this._metadataSchema) return !1;
    const e = this._metadataSchema.fields.filter((r) => {
      var n;
      const o = (n = this.config) == null ? void 0 : n.metadataConfig;
      return o != null && o.requiredFields ? o.requiredFields.includes(r.ckey) : r.required === 1;
    });
    if (e.length === 0) return !1;
    const t = [...this._store.getState().files.values()].filter(
      (r) => r.status === "idle" || r.status === "queued" || r.status === "rejected"
    );
    return e.some(
      (r) => t.some((o) => {
        const n = o.meta[r.key];
        return n == null ? !0 : Array.isArray(n) || typeof n == "string" ? n.length === 0 : !n;
      })
    );
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
    var o, n, s, a, l, p, h, _, E, O;
    const e = this._store.getState(), t = this._prevStoreState;
    if (this._prevStoreState = e, !t) return;
    const r = (o = this.config) == null ? void 0 : o.callbacks;
    for (const [P, v] of e.files) {
      const U = t.files.get(P);
      if (U) {
        if (U.status !== v.status)
          switch (v.status) {
            case "uploading":
              U.status === "paused" && (this._dispatchPublic(B.UPLOAD_RESUMED, { file: v }), (n = r == null ? void 0 : r.onUploadResumed) == null || n.call(r, v));
              break;
            case "complete":
              v.response && (this._dispatchPublic(B.UPLOAD_COMPLETE, {
                file: v,
                response: v.response
              }), (s = r == null ? void 0 : r.onUploadComplete) == null || s.call(r, v, v.response));
              break;
            case "error":
            case "failed": {
              const R = new Error(v.error ?? "Upload failed");
              this._dispatchPublic(B.UPLOAD_ERROR, {
                file: v,
                error: R
              }), (a = r == null ? void 0 : r.onUploadError) == null || a.call(r, v, R);
              break;
            }
            case "retrying":
              this._dispatchPublic(B.UPLOAD_RETRY, {
                file: v,
                attempt: v.retryCount
              }), (l = r == null ? void 0 : r.onUploadRetry) == null || l.call(r, v, v.retryCount);
              break;
            case "paused":
              this._dispatchPublic(B.UPLOAD_PAUSED, { file: v }), (p = r == null ? void 0 : r.onUploadPaused) == null || p.call(r, v);
              break;
          }
        v.status === "uploading" && U.progress !== v.progress && (this._dispatchPublic(B.UPLOAD_PROGRESS, {
          file: v,
          progress: v.progress,
          speed: v.speed
        }), (h = r == null ? void 0 : r.onUploadProgress) == null || h.call(r, v, v.progress, v.speed));
      }
    }
    if (e.totalProgress !== t.totalProgress || e.totalSpeed !== t.totalSpeed) {
      const P = e.totalSpeed > 0 ? (e.totalBytes - e.totalBytesUploaded) / e.totalSpeed : 0;
      this._dispatchPublic(B.TOTAL_PROGRESS, {
        percentage: e.totalProgress,
        speed: e.totalSpeed,
        eta: P
      }), (_ = r == null ? void 0 : r.onTotalProgress) == null || _.call(r, e.totalProgress, e.totalSpeed, P);
    }
    if (t.isUploading && !e.isUploading) {
      const P = [...e.files.values()];
      if (!P.some((U) => U.status === "cancelled")) {
        const U = P.filter((g) => g.status === "complete"), R = P.filter(
          (g) => g.status === "failed" || g.status === "error"
        ), x = [...U, ...R];
        x.length > 0 && (Je.save(x), this._hasStoredReview = !0), this._dispatchPublic(B.ALL_COMPLETE, { successful: U, failed: R }), (E = r == null ? void 0 : r.onAllComplete) == null || E.call(r, U, R);
        const b = (O = this.config) == null ? void 0 : O.closeOnComplete;
        if (b) {
          const g = typeof b == "number" ? b : 1500;
          this._closeOnCompleteTimer = setTimeout(() => {
            var m, z, C;
            this._closeOnCompleteTimer = null, this._phase === "complete" && (this._dispatchPublic(B.COMPLETE_ACTION, {}), (C = (z = (m = this.config) == null ? void 0 : m.callbacks) == null ? void 0 : z.onCompleteAction) == null || C.call(z), this.close());
          }, g);
        }
      }
    }
  }
  get _mergedSources() {
    var l;
    const e = (l = this.config) == null ? void 0 : l.connectors;
    if (e === this._cachedSourcesConfig) return this._cachedSources;
    if (this._cachedSourcesConfig = e, !e)
      return this._cachedSources = je, this._cachedSources;
    const t = e.providers.length > 0 ? gn(e.providers) : [], r = e.customSources ?? [], o = je.filter(
      (p) => p.id === "device" || p.id === "url"
    ), n = je.filter(
      (p) => p.id !== "device" && p.id !== "url"
    ), s = /* @__PURE__ */ new Set(), a = [];
    for (const p of [
      ...o,
      ...t,
      ...n,
      ...r
    ])
      if (!s.has(p.id)) {
        if (K._RESERVED_IDS.has(p.id) && p.onActivate) {
          console.warn(
            `[sfx-uploader] Custom source id "${p.id}" conflicts with a built-in source and was skipped.`
          );
          continue;
        }
        s.add(p.id), a.push(p);
      }
    return this._cachedSources = a, this._cachedSources;
  }
  // --- Phase computation ---
  get _phase() {
    const e = this._storeCtrl.state, t = [...e.files.values()];
    if (t.length === 0) return "empty";
    if (e.isUploading) return "uploading";
    const r = /* @__PURE__ */ new Set(["complete", "rejected", "cancelled", "failed"]);
    return t.every((o) => r.has(o.status)) && t.some((o) => o.status === "complete" || o.status === "failed") ? "complete" : "ready";
  }
  // --- File handling ---
  _processIncomingFiles(e) {
    var r, o, n, s;
    const t = (r = this.config) == null ? void 0 : r.callbacks;
    this._isReviewing && (this._isReviewing = !1, this._reviewFiles = []);
    for (const a of e) {
      const l = this._store.getState();
      if ([...l.files.values()].some(
        (O) => O.name === a.name && O.size === a.size && O.status !== "rejected" && O.status !== "cancelled"
      )) continue;
      const h = hn(a, l.restrictions, l.files);
      if (h) {
        const O = a.type.startsWith("image/") ? URL.createObjectURL(a) : null, P = {
          id: we(),
          status: "rejected",
          file: a,
          remoteUrl: null,
          name: a.name,
          size: a.size,
          type: a.type,
          previewUrl: O,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error: h,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          remoteInfo: null,
          ..._e
        };
        me(this._store, P), this._dispatchPublic(B.FILE_REJECTED, {
          file: P,
          reason: h
        }), (o = t == null ? void 0 : t.onFileRejected) == null || o.call(t, P, h);
        const v = (n = this.config) == null ? void 0 : n.rejectedFileAutoRemoveDelay, U = v === !1 || v === 0 || v === void 0 ? 0 : v;
        if (U > 0) {
          const R = P.id, x = setTimeout(() => {
            this._rejectedTimers.delete(R);
            const b = this._store.getState().files.get(R);
            b && b.status === "rejected" && Wt(this._store, R);
          }, U);
          this._rejectedTimers.set(R, x);
        }
        continue;
      }
      let _ = null;
      a.type.startsWith("image/") && (_ = URL.createObjectURL(a));
      const E = {
        id: we(),
        status: "idle",
        file: a,
        remoteUrl: null,
        name: a.name,
        size: a.size,
        type: a.type,
        previewUrl: _,
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
        ..._e
      };
      if (me(this._store, E), this._dispatchPublic(B.FILE_ADDED, { file: E }), (s = t == null ? void 0 : t.onFileAdded) == null || s.call(t, E), a.type.startsWith("video/")) {
        un(a).then((P) => {
          if (!P) return;
          const v = this._store.getState(), U = v.files.get(E.id);
          if (U) {
            const R = new Map(v.files);
            R.set(E.id, { ...U, previewUrl: P }), this._store.setState({ files: R });
          } else
            URL.revokeObjectURL(P);
        });
        const O = document.createElement("video");
        O.preload = "metadata", O.src = URL.createObjectURL(a), O.onerror = () => {
          URL.revokeObjectURL(O.src);
        }, O.onloadedmetadata = () => {
          const P = O.duration;
          if (URL.revokeObjectURL(O.src), !isFinite(P)) return;
          const v = this._store.getState(), U = v.files.get(E.id);
          if (U) {
            const R = new Map(v.files);
            R.set(E.id, { ...U, duration: P }), this._store.setState({ files: R });
          }
        };
      }
    }
    this._store.getState().queueConfig.autoProceed && this.upload();
  }
  _removeFile(e) {
    var n, s, a, l;
    const t = this._store.getState().files.get(e);
    if (!t) return;
    const r = { ...t };
    if ((this._fullscreenPreviewUrl && this._fullscreenPreviewUrl === t.previewUrl || this._fullscreenVideoFile && this._fullscreenVideoFile === t.file) && (this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null), t.previewUrl && URL.revokeObjectURL(t.previewUrl), t.file) {
      const p = this._videoBlobUrls.get(t.file);
      p && (URL.revokeObjectURL(p), this._videoBlobUrls.delete(t.file));
    }
    (t.status === "uploading" || t.status === "queued" || t.status === "retrying" || t.status === "paused") && ((n = this._engine) == null || n.cancelFile(e)), Wt(this._store, e), this._dimCache.delete(e);
    const o = this._rejectedTimers.get(e);
    if (o && (clearTimeout(o), this._rejectedTimers.delete(e)), this._previewFileId === e) {
      const p = [...this._store.getState().files.values()];
      this._previewFileId = p.length > 0 ? p[0].id : null;
    }
    this._dispatchPublic(B.FILE_REMOVED, { file: r }), (l = (a = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : a.onFileRemoved) == null || l.call(a, r);
  }
  // --- Render ---
  render() {
    var r;
    const e = ((r = this.config) == null ? void 0 : r.mode) ?? "modal", t = [...this._storeCtrl.state.files.values()];
    return e === "modal" ? f`
        ${this._isOpen && !this._isMinimized ? f`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast></sfx-toast>
                </div>
              </div>
            ` : S}
        ${this._renderFsOverlay()}
      ` : f`
      <div class="inline ${t.length === 0 ? "no-files" : ""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast></sfx-toast>
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
  _renderFsOverlay() {
    if (!this._fullscreenPreviewUrl && !this._fullscreenVideoFile) return S;
    const e = [...this._store.getState().files.values()].filter(
      (r) => r.previewUrl || r.type.startsWith("video/") && r.file
    ), t = e.findIndex((r) => r.id === this._previewFileId);
    return f`
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
        ${this._fullscreenVideoFile ? f`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${(r) => r.stopPropagation()}></video>` : f`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" style=${this._fullscreenZoomed ? `transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)` : ""} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${(r) => r.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed ? "Zoom out" : "Zoom in"}">
          ${this._fullscreenZoomed ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>` : f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${t <= 0} @click=${(r) => {
      r.stopPropagation(), this._navigateFs(-1);
    }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${t >= e.length - 1} @click=${(r) => {
      r.stopPropagation(), this._navigateFs(1);
    }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `;
  }
  _renderInlineHeader(e) {
    return f`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent ? f`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              ` : S}
          ${e.title ? f`<h2 class="inline-header-title">${e.title}</h2>` : S}
        </div>
        ${e.description ? f`<div class="inline-header-desc">${e.description}</div>` : S}
      </div>
    `;
  }
  _renderHeader() {
    var s, a, l;
    if (this._phase === "complete") return S;
    const e = ((s = this.config) == null ? void 0 : s.mode) ?? "modal";
    if (this._phase === "uploading") {
      const p = this._storeCtrl.state, h = [...p.files.values()], _ = h.filter((O) => O.status === "complete").length, E = p.totalSpeed > 0 ? (p.totalBytes - p.totalBytesUploaded) / p.totalSpeed : 0;
      return f`
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
                Uploading ${h.length}
                ${h.length === 1 ? "file" : "files"}
              </div>
              <div class="float-subtitle">
                ${_} of
                ${h.length}${E > 0 ? ` · ~${dt(E)} left` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    if (e === "inline" && ((a = this.config) != null && a.inlineHeader)) return S;
    const t = ((l = this.config) == null ? void 0 : l.header) ?? (e === "modal" ? "close" : !0);
    if (t === !1) return S;
    const r = e === "modal" ? this._onModalDismiss : this._onInlineDismiss, o = t === "back" ? f`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
            @click=${r}
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
          </button>` : S, n = t === "close" ? f`<button
            class="header-btn header-btn-close"
            aria-label="Close"
            @click=${r}
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
          </button>` : S;
    return f`
      <div class="header">
        ${o}
        ${t !== "back" ? f` <div class="header-icon">
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
            </div>` : S}
        <div class="header-title">Upload Files</div>
        ${n}
      </div>
    `;
  }
  _getImageDimensions(e) {
    return e.previewUrl ? this._dimCache.has(e.id) ? Promise.resolve(this._dimCache.get(e.id)) : new Promise((t) => {
      const r = new Image();
      r.onload = () => {
        const o = { w: r.naturalWidth, h: r.naturalHeight };
        this._dimCache.set(e.id, o), t(o);
      }, r.onerror = () => {
        this._dimCache.set(e.id, null), t(null);
      }, r.src = e.previewUrl;
    }) : Promise.resolve(null);
  }
  _renderUploadOverlay(e) {
    var s;
    const t = this._storeCtrl.state, r = Math.round(t.totalProgress ?? 0), o = e.filter((a) => a.status === "complete").length, n = t.totalSpeed > 0 ? (t.totalBytes - t.totalBytesUploaded) / t.totalSpeed : 0;
    return f`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${r}%</div>
        <div class="upload-overlay-title">
          Uploading ${e.length} ${e.length === 1 ? "file" : "files"}
        </div>
        <div class="upload-overlay-subtitle">
          ${o} of ${e.length}
          complete${n > 0 ? f` · ~${dt(n)} left` : S}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${r}%"></div>
        </div>
        ${(s = this.config) != null && s.minimizeOnUpload ? f`<button
              class="upload-overlay-minimize"
              @click=${this._onMinimize}
            >
              Minimize & continue in background
            </button>` : S}
      </div>
    `;
  }
  _renderFloatingPill(e) {
    const t = this._storeCtrl.state, r = Math.round(t.totalProgress ?? 0), o = this._phase === "complete", n = e.filter((l) => l.status === "complete").length, s = e.filter((l) => l.status === "failed").length, a = t.totalSpeed > 0 ? (t.totalBytes - t.totalBytesUploaded) / t.totalSpeed : 0;
    return this._isPillExpanded === !1 ? f`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o ? s > 0 ? n > 0 ? f`<div class="float-collapsed-icon warn">
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
                    </div>` : f`<div class="float-collapsed-icon error">
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
                    </div>` : f`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>` : f`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${o ? s > 0 ? n > 0 ? "Partially uploaded" : "Upload failed" : "Upload complete" : `Uploading ${e.length} ${e.length === 1 ? "file" : "files"}`}</span
            >
            ${o ? S : f`<span class="float-collapsed-pct">${r}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            <button title="Open uploader" @click=${this._onPillExpand}>
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
            <button title="Expand" @click=${this._onPillClick}>
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
            <button title="Close" @click=${this._onPillDismiss}>
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
      ` : f`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${o ? s > 0 ? n > 0 ? "warn" : "error" : "done" : ""}"
            >
              ${o ? s > 0 ? n > 0 ? f`<svg
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
                      </svg>` : f`<svg
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
                      </svg>` : f`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>` : f`<svg
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
                ${o ? s > 0 ? n > 0 ? "Partially uploaded" : "Upload failed" : "Upload complete" : `Uploading ${e.length} ${e.length === 1 ? "file" : "files"}`}
              </div>
              <div class="float-subtitle">
                ${o ? `${n} ${n === 1 ? "file" : "files"} uploaded${s > 0 ? `, ${s} failed` : ""}` : `${n} of ${e.length}${a > 0 ? ` · ~${dt(a)} left` : ""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            <button title="Expand" @click=${this._onPillExpand}>
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
            <button title="Collapse" @click=${this._onPillClick}>
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
            <button title="Close" @click=${this._onPillDismiss}>
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
              class="float-progress-pct ${o ? s > 0 ? n > 0 ? "warn" : "error" : "done" : ""}"
              >${o ? "Done" : `${r}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${o ? s > 0 ? n > 0 ? "warn" : "error" : "done" : ""}"
              style="width:${o ? 100 : r}%"
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${e.map((l) => {
      const p = l.status === "failed" || l.status === "error";
      return f`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  style=${l.previewUrl ? `background-image:url(${l.previewUrl});background-size:cover;background-position:center` : ""}
                >
                  ${l.previewUrl ? S : f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>`}
                </div>
                <div class="float-item-info">
                  <div class="float-item-name">${l.name}</div>
                  <div class="float-item-size">${ce(l.size)}</div>
                </div>
                <div class="float-item-status">
                  ${l.status === "complete" ? f`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>` : p ? f` <div class="float-item-error-wrap">
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
                            >${l.error || "Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${() => {
        var h;
        this._ensureEngine(), (h = this._engine) == null || h.retryFile(l.id);
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
                        </button>` : l.status === "paused" ? f`<svg
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
                      </svg>` : f`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `;
    })}
        </div>
      </div>
    `;
  }
  _renderPreviewLayout(e) {
    var n, s, a, l, p;
    if (e.length === 0) return S;
    const t = e.find((h) => h.id === this._previewFileId) ?? e[0], r = ((n = t.name.split(".").pop()) == null ? void 0 : n.toUpperCase()) || "";
    new Date(t.addedAt).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    ), this._store.getState().targetFolder;
    const o = e.reduce((h, _) => h + (_.size || 0), 0);
    return f`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          ${((s = this.config) == null ? void 0 : s.mode) === "inline" && ((a = this.config) != null && a.inlineHeader) ? this._renderInlineHeader(this.config.inlineHeader) : S}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${e.length} ${e.length === 1 ? "asset" : "assets"} ·
              ${ce(o)}</span
            >
          </div>
          <sfx-file-list
            .files=${e}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${mr(this._storeCtrl.state.restrictions)}
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
        <div class="preview-panel" style="flex:${100 - this._splitPct}">
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${() => {
      this._previewFileId = null;
    }}
              aria-label="Back to file list"
              title="Back"
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
            <span class="preview-header-name" title=${t.name}
              >${t.name}</span
            >
            <div class="preview-header-actions">
              ${t.previewUrl || t.type.startsWith("video/") && t.file ? f`
                    <button
                      @click=${() => {
      this._fullscreenPreviewUrl = t.previewUrl, this._fullscreenVideoFile = t.type.startsWith("video/") && t.file ? t.file : null, this._fullscreenZoomed = !1, requestAnimationFrame(() => this.requestUpdate());
    }}
                      title="Fullscreen"
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
                  ` : S}
              <button
                @click=${() => {
      this._previewFileId = null;
    }}
                title="Close"
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
          ${t.type.startsWith("video/") && t.file ? f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(t.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(t) === 0}
                    @click=${() => this._navigatePreview(e, -1)}
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
                    ?disabled=${e.indexOf(t) === e.length - 1}
                    @click=${() => this._navigatePreview(e, 1)}
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
              ` : t.previewUrl ? f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${t.previewUrl}
                      alt=${t.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(t) === 0}
                    @click=${() => this._navigatePreview(e, -1)}
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
                    ?disabled=${e.indexOf(t) === e.length - 1}
                    @click=${() => this._navigatePreview(e, 1)}
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
              ` : f`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${Wr(t)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Xr(r)}
                      alt="${r ? `${r} file` : "File"}"
                      @error=${(h) => {
      const _ = h.target, E = Kr();
      !_.dataset.fallback && _.src !== E && (_.dataset.fallback = "1", _.src = E);
    }}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${e.indexOf(t) === 0}
                    @click=${() => this._navigatePreview(e, -1)}
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
                    ?disabled=${e.indexOf(t) === e.length - 1}
                    @click=${() => this._navigatePreview(e, 1)}
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
          ${this._metadataSchema && ((l = this.config) != null && l.metadataConfig) ? f`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${r}${t.size ? ` · ${ce(t.size)}` : ""}${this._previewDims !== "—" ? ` · ${this._previewDims}` : ""}
                </div>
              </div>` : S}
          ${this._metadataSchema && ((p = this.config) != null && p.metadataConfig) ? f`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${t.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              ` : f`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen ? "open" : ""}"
                    @click=${() => {
      this._fileInfoOpen = !this._fileInfoOpen;
    }}
                  >
                    <span>File info</span>
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
                    class="preview-file-info-body ${this._fileInfoOpen ? "open" : ""}"
                  >
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">File name</div>
                      <div class="preview-file-info-val">
                        ${t.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">Type</div>
                      <div class="preview-file-info-val">${r}</div>
                    </div>
                    ${t.size ? f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Size</div>
                            <div class="preview-file-info-val">
                              ${ce(t.size)}
                            </div>
                          </div>
                        ` : S}
                    ${this._previewDims !== "—" ? f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Dimensions</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        ` : S}
                  </div>
                </div>
              `}
        </div>
      </div>
    `;
  }
  _navigatePreview(e, t) {
    var n;
    const o = e.findIndex((s) => s.id === this._previewFileId) + t;
    if (o >= 0 && o < e.length) {
      const s = (n = this.shadowRoot) == null ? void 0 : n.querySelector(
        ".preview-image[controls]"
      );
      s && (s.pause(), s.removeAttribute("src"), s.load()), this._previewFileId = e[o].id;
    }
  }
  _renderBody() {
    var s, a, l, p, h, _, E, O, P;
    const e = this._storeCtrl.state, t = [...e.files.values()], r = this._phase, o = mr(e.restrictions), n = t.length > 0;
    return f`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
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
          class="body ${n ? "has-files" : ""} ${this._bodyDragOver ? "body-drag-over" : ""} ${this._previewFileId ? "has-preview" : ""}"
          @dragenter=${n ? this._onBodyDragEnter : S}
          @dragover=${n ? this._onBodyDragOver : S}
          @dragleave=${n ? this._onBodyDragLeave : S}
          @drop=${n ? this._onBodyDrop : S}
        >
          ${((s = this.config) == null ? void 0 : s.mode) === "inline" && ((a = this.config) != null && a.inlineHeader) && !this._previewFileId && r !== "uploading" && r !== "complete" && !this._isReviewing ? this._renderInlineHeader(this.config.inlineHeader) : S}
          ${this._isReviewing ? f`
                <sfx-last-upload-review
                  .files=${this._reviewFiles}
                  .getLocateUrl=${(l = this.config) == null ? void 0 : l.getLocateUrl}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              ` : r === "complete" ? f`
                <sfx-success-card
                  .fileCount=${t.filter((v) => v.status === "complete").length}
                  .totalSize=${t.filter((v) => v.status === "complete").reduce((v, U) => v + (U.size || 0), 0)}
                  .thumbnails=${t.filter((v) => v.status === "complete" && v.previewUrl).map((v) => v.previewUrl)}
                  .failedFiles=${t.filter((v) => v.status === "failed").map((v) => ({
      id: v.id,
      name: v.name,
      error: v.error || "Upload failed"
    }))}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              ` : r === "uploading" ? this._renderUploadOverlay(t) : f`
                ${n ? S : f`<sfx-drop-zone
                        .compact=${n}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${o}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((p = this.config) == null ? void 0 : p.sourcesLayout) ?? "pills"}
                        .mode=${((h = this.config) == null ? void 0 : h.mode) ?? "modal"}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview ? f`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title="View last upload batch"
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            View last upload
                          </button>` : S}`}
                ${n ? this._previewFileId ? this._renderPreviewLayout(t) : f`
                        <div class="asset-count">
                          ${t.length}
                          ${t.length === 1 ? "file" : "files"} ·
                          ${ce(
      t.reduce((v, U) => v + (U.size || 0), 0)
    )}
                        </div>
                        <sfx-file-list
                          .files=${t}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${o}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      ` : S}
              `}
        </div>

        ${n && r !== "complete" && r !== "uploading" ? f`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${t.length}
                .totalSize=${t.reduce((v, U) => v + (U.size || 0), 0)}
                .failedCount=${t.filter(
      (v) => v.status === "failed" || v.status === "error"
    ).length}
                .completedCount=${t.filter((v) => v.status === "complete").length}
                .uploadProgress=${e.totalProgress ?? 0}
                .showFillMetadata=${!!(((_ = this.config) == null ? void 0 : _.showFillMetadata) ?? ((E = this.config) == null ? void 0 : E.metadataConfig))}
                .uploadDisabled=${this._hasUnfilledRequiredMetadata}
                .uploadDisabledReason=${this._hasUnfilledRequiredMetadata ? "Fill required metadata first" : ""}
              ></sfx-actions-bar>
            ` : S}
        ${this._showUrlDialog ? f`<sfx-url-dialog></sfx-url-dialog>` : S}
        ${this._showCameraDialog ? f`<sfx-camera-dialog></sfx-camera-dialog>` : S}
        ${this._showScreenCastDialog ? f`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>` : S}
        ${this._activeConnector && ((O = this.config) != null && O.connectors) ? f`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${Sr.has(this._activeConnector) ? f`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      ` : f`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            ` : S}
        ${this._bulkMetadataOpen && this._metadataSchema ? f`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(
      (v) => K._MODIFIABLE_STATUSES.has(v.status)
    )}
                .config=${((P = this.config) == null ? void 0 : P.metadataConfig) ?? null}
                .autocomplete=${this._metadataAutocomplete}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            ` : S}
      </div>
    `;
  }
  _navigateFs(e) {
    const t = [...this._store.getState().files.values()].filter(
      (n) => n.previewUrl || n.type.startsWith("video/") && n.file
    ), r = t.findIndex((n) => n.id === this._previewFileId);
    if (r === -1) return;
    const o = r + e;
    if (o >= 0 && o < t.length) {
      const n = t[o];
      this._fullscreenPreviewUrl = n.previewUrl, this._fullscreenVideoFile = n.type.startsWith("video/") && n.file ? n.file : null, this._previewFileId = n.id, this._fullscreenZoomed = !1, this._fsPanX = 0, this._fsPanY = 0;
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
}, K.styles = G`
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
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 1100px;
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
      bottom: 16px;
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

    /* Only scroll inline when showing drop-zone (no files) */
    .inline.no-files {
      overflow-y: auto;
      overflow-x: hidden;
    }

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* On the empty landing state the accent label should start flush
       with the top of the uploader region — no extra whitespace above. */
    .inline.no-files .inline-header {
      padding-top: 0;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 16px var(--sfx-inline-pad) 0;
    }

    /* In the empty landing state the negative margin collapses the
       16px top padding so the dashed card sits right under the
       inline-header description text. */
    .inline.no-files sfx-drop-zone {
      margin-top: -16px;
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

    .inline.no-files .content {
      flex: 1 0 auto;
    }

    /* Inline: let body grow beyond container so .inline can scroll */
    .inline .body {
      flex: 1 0 auto;
      overflow: visible;
    }

    /* Inline horizontal alignment — driven by --sfx-inline-pad */
    .inline .body.has-files {
      padding-left: 0;
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
        min-height: auto;
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
  `, K._MODIFIABLE_STATUSES = /* @__PURE__ */ new Set([
  "idle",
  "queued",
  "rejected"
]), K._RESERVED_IDS = /* @__PURE__ */ new Set([
  "device",
  "camera",
  "url",
  "screen-cast"
]), K);
H([
  F({ attribute: !1 })
], M.prototype, "config");
H([
  D()
], M.prototype, "_isOpen");
H([
  D()
], M.prototype, "_activeConnector");
H([
  D()
], M.prototype, "_showUrlDialog");
H([
  D()
], M.prototype, "_showCameraDialog");
H([
  D()
], M.prototype, "_showScreenCastDialog");
H([
  D()
], M.prototype, "_previewFileId");
H([
  D()
], M.prototype, "_previewDims");
H([
  D()
], M.prototype, "_fileInfoOpen");
H([
  D()
], M.prototype, "_splitPct");
H([
  D()
], M.prototype, "_fullscreenPreviewUrl");
H([
  D()
], M.prototype, "_fullscreenVideoFile");
H([
  D()
], M.prototype, "_fullscreenZoomed");
H([
  D()
], M.prototype, "_bodyDragOver");
H([
  D()
], M.prototype, "_isMinimized");
H([
  D()
], M.prototype, "_isPillExpanded");
H([
  D()
], M.prototype, "_metadataSchema");
H([
  D()
], M.prototype, "_bulkMetadataOpen");
H([
  D()
], M.prototype, "_isReviewing");
H([
  D()
], M.prototype, "_reviewFiles");
H([
  D()
], M.prototype, "_hasStoredReview");
let Yn = M;
export {
  Ct as A,
  je as C,
  B as P,
  ee as S,
  tn as U,
  Nn as a,
  ve as b,
  re as c,
  _r as d,
  _t as e,
  ae as f,
  Yn as g,
  Qr as h,
  mt as i,
  ei as j,
  rn as k,
  Ot as l,
  gn as m,
  qe as n,
  Ee as o,
  xe as p,
  In as q,
  on as r,
  Hn as s,
  qn as t,
  Bn as u,
  Mn as v,
  Xr as w,
  Kr as x,
  ce as y
};
