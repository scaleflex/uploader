import { forwardRef as ee, useRef as c, useLayoutEffect as T, useImperativeHandle as te, useEffect as A, createElement as re } from "react";
typeof customElements < "u" && import("./define.js");
const ce = ee(
  function({
    config: w,
    open: j,
    onFileAdded: H,
    onFileRemoved: I,
    onFileRejected: U,
    onUploadStarted: b,
    onUploadProgress: k,
    onUploadComplete: q,
    onUploadError: z,
    onUploadRetry: B,
    onAllComplete: D,
    onTotalProgress: G,
    onOpen: J,
    onClose: K,
    onCancel: M,
    className: P,
    style: C
  }, R) {
    const d = c(null), o = c(H), u = c(I), i = c(U), f = c(b), v = c(k), p = c(q), E = c(z), x = c(B), m = c(D), L = c(G), h = c(J), g = c(K), y = c(M);
    return T(() => {
      o.current = H, u.current = I, i.current = U, f.current = b, v.current = k, p.current = q, E.current = z, x.current = B, m.current = D, L.current = G, h.current = J, g.current = K, y.current = M;
    }), te(R, () => ({
      get element() {
        return d.current;
      },
      open() {
        var e;
        (e = d.current) == null || e.open();
      },
      close() {
        var e;
        (e = d.current) == null || e.close();
      },
      upload() {
        var e;
        (e = d.current) == null || e.upload();
      },
      addFiles(e) {
        var l;
        (l = d.current) == null || l.addFiles(e);
      },
      resumeUpload(e) {
        var l;
        (l = d.current) == null || l.resumeUpload(e);
      },
      cancelUpload() {
        var e;
        (e = d.current) == null || e.cancelUpload();
      }
    })), T(() => {
      const e = d.current;
      e && (e.config = w);
    }, [w]), A(() => {
      const e = d.current;
      e && (j === !0 ? e.open() : j === !1 && e.close());
    }, [j]), A(() => {
      const e = d.current;
      if (!e) return;
      const l = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = o.current) == null || r.call(o, n);
      }, N = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = u.current) == null || r.call(u, n);
      }, Q = (t) => {
        var s;
        const { file: n, reason: r } = t.detail;
        (s = i.current) == null || s.call(i, n, r);
      }, V = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = f.current) == null || r.call(f, n);
      }, W = (t) => {
        var a;
        const { file: n, progress: r, speed: s } = t.detail;
        (a = v.current) == null || a.call(v, n, r, s);
      }, X = (t) => {
        var s;
        const { file: n, response: r } = t.detail;
        (s = p.current) == null || s.call(p, n, r);
      }, Y = (t) => {
        var s;
        const { file: n, error: r } = t.detail;
        (s = E.current) == null || s.call(E, n, r);
      }, Z = (t) => {
        var s;
        const { successful: n, failed: r } = t.detail;
        (s = m.current) == null || s.call(m, n, r);
      }, _ = (t) => {
        var s;
        const { file: n, attempt: r } = t.detail;
        (s = x.current) == null || s.call(x, n, r);
      }, $ = (t) => {
        var a;
        const { percentage: n, speed: r, eta: s } = t.detail;
        (a = L.current) == null || a.call(L, n, r, s);
      }, F = () => {
        var t;
        (t = h.current) == null || t.call(h);
      }, O = () => {
        var t;
        (t = g.current) == null || t.call(g);
      }, S = () => {
        var t;
        (t = y.current) == null || t.call(y);
      };
      return e.addEventListener("sfx-file-added", l), e.addEventListener("sfx-file-removed", N), e.addEventListener("sfx-file-rejected", Q), e.addEventListener("sfx-upload-started", V), e.addEventListener("sfx-upload-progress", W), e.addEventListener("sfx-upload-complete", X), e.addEventListener("sfx-upload-error", Y), e.addEventListener("sfx-upload-retry", _), e.addEventListener("sfx-all-complete", Z), e.addEventListener("sfx-total-progress", $), e.addEventListener("sfx-open", F), e.addEventListener("sfx-close", O), e.addEventListener("sfx-cancel", S), () => {
        e.removeEventListener("sfx-file-added", l), e.removeEventListener("sfx-file-removed", N), e.removeEventListener("sfx-file-rejected", Q), e.removeEventListener("sfx-upload-started", V), e.removeEventListener("sfx-upload-progress", W), e.removeEventListener("sfx-upload-complete", X), e.removeEventListener("sfx-upload-error", Y), e.removeEventListener("sfx-upload-retry", _), e.removeEventListener("sfx-all-complete", Z), e.removeEventListener("sfx-total-progress", $), e.removeEventListener("sfx-open", F), e.removeEventListener("sfx-close", O), e.removeEventListener("sfx-cancel", S);
      };
    }, []), re("sfx-uploader", {
      ref: d,
      className: P,
      style: C
    });
  }
);
export {
  ce as Uploader
};
