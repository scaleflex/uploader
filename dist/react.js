import { forwardRef as fe, useRef as c, useLayoutEffect as de, useImperativeHandle as ve, useEffect as ae, createElement as pe } from "react";
typeof customElements < "u" && import("./define.js");
const Le = fe(
  function({
    config: I,
    open: H,
    onFileAdded: k,
    onFileRemoved: q,
    onFileRejected: z,
    onUploadStarted: G,
    onUploadProgress: J,
    onUploadComplete: K,
    onUploadError: N,
    onUploadRetry: Q,
    onAllComplete: U,
    onTotalProgress: V,
    onOpen: W,
    onClose: X,
    onCancel: Y,
    onBeforeUpload: Z,
    onFilePreview: _,
    onFillMetadata: $,
    onCompleteAction: B,
    className: ue,
    style: ie
  }, oe) {
    const d = c(null), i = c(k), o = c(q), f = c(z), v = c(G), p = c(J), E = c(K), x = c(N), L = c(Q), m = c(U), h = c(V), g = c(W), F = c(X), y = c(Y), M = c(Z), b = c(_), w = c($), j = c(B);
    return de(() => {
      i.current = k, o.current = q, f.current = z, v.current = G, p.current = J, E.current = K, x.current = N, L.current = Q, m.current = U, h.current = V, g.current = W, F.current = X, y.current = Y, M.current = Z, b.current = _, w.current = $, j.current = B;
    }), ve(oe, () => ({
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
      },
      getFiles() {
        var e;
        return ((e = d.current) == null ? void 0 : e.getFiles()) ?? [];
      },
      getFile(e) {
        var l;
        return (l = d.current) == null ? void 0 : l.getFile(e);
      },
      updateFileMeta(e, l, D) {
        var a;
        (a = d.current) == null || a.updateFileMeta(e, l, D);
      },
      updateFilesMeta(e) {
        var l;
        (l = d.current) == null || l.updateFilesMeta(e);
      }
    })), de(() => {
      const e = d.current;
      e && (e.config = I);
    }, [I]), ae(() => {
      const e = d.current;
      e && (H === !0 ? e.open() : H === !1 && e.close());
    }, [H]), ae(() => {
      const e = d.current;
      if (!e) return;
      const l = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = i.current) == null || r.call(i, n);
      }, D = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = o.current) == null || r.call(o, n);
      }, a = (t) => {
        var s;
        const { file: n, reason: r } = t.detail;
        (s = f.current) == null || s.call(f, n, r);
      }, O = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = v.current) == null || r.call(v, n);
      }, S = (t) => {
        var u;
        const { file: n, progress: r, speed: s } = t.detail;
        (u = p.current) == null || u.call(p, n, r, s);
      }, T = (t) => {
        var s;
        const { file: n, response: r } = t.detail;
        (s = E.current) == null || s.call(E, n, r);
      }, A = (t) => {
        var s;
        const { file: n, error: r } = t.detail;
        (s = x.current) == null || s.call(x, n, r);
      }, P = (t) => {
        var s;
        const { successful: n, failed: r } = t.detail;
        (s = m.current) == null || s.call(m, n, r);
      }, C = (t) => {
        var s;
        const { file: n, attempt: r } = t.detail;
        (s = L.current) == null || s.call(L, n, r);
      }, R = (t) => {
        var u;
        const { percentage: n, speed: r, eta: s } = t.detail;
        (u = h.current) == null || u.call(h, n, r, s);
      }, ee = () => {
        var t;
        (t = g.current) == null || t.call(g);
      }, te = () => {
        var t;
        (t = F.current) == null || t.call(F);
      }, re = () => {
        var t;
        (t = y.current) == null || t.call(y);
      }, ne = (t) => {
        var s;
        const { files: n } = t.detail;
        ((s = M.current) == null ? void 0 : s.call(M, n)) === !1 && t.preventDefault();
      }, se = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = b.current) == null || r.call(b, n);
      }, ce = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = w.current) == null || r.call(w, n);
      }, le = () => {
        var t;
        (t = j.current) == null || t.call(j);
      };
      return e.addEventListener("sfx-file-added", l), e.addEventListener("sfx-file-removed", D), e.addEventListener("sfx-file-rejected", a), e.addEventListener("sfx-upload-started", O), e.addEventListener("sfx-upload-progress", S), e.addEventListener("sfx-upload-complete", T), e.addEventListener("sfx-upload-error", A), e.addEventListener("sfx-upload-retry", C), e.addEventListener("sfx-all-complete", P), e.addEventListener("sfx-total-progress", R), e.addEventListener("sfx-open", ee), e.addEventListener("sfx-close", te), e.addEventListener("sfx-cancel", re), e.addEventListener("sfx-before-upload", ne), e.addEventListener("sfx-file-preview", se), e.addEventListener("sfx-fill-metadata", ce), e.addEventListener("sfx-complete-action", le), () => {
        e.removeEventListener("sfx-file-added", l), e.removeEventListener("sfx-file-removed", D), e.removeEventListener("sfx-file-rejected", a), e.removeEventListener("sfx-upload-started", O), e.removeEventListener("sfx-upload-progress", S), e.removeEventListener("sfx-upload-complete", T), e.removeEventListener("sfx-upload-error", A), e.removeEventListener("sfx-upload-retry", C), e.removeEventListener("sfx-all-complete", P), e.removeEventListener("sfx-total-progress", R), e.removeEventListener("sfx-open", ee), e.removeEventListener("sfx-close", te), e.removeEventListener("sfx-cancel", re), e.removeEventListener("sfx-before-upload", ne), e.removeEventListener("sfx-file-preview", se), e.removeEventListener("sfx-fill-metadata", ce), e.removeEventListener("sfx-complete-action", le);
      };
    }, []), pe("sfx-uploader", {
      ref: d,
      className: ue,
      style: ie
    });
  }
);
export {
  Le as Uploader
};
