import { forwardRef as Le, useRef as d, useLayoutEffect as ve, useImperativeHandle as he, useEffect as pe, createElement as ge } from "react";
typeof customElements < "u" && import("./define.js");
const Me = Le(
  function({
    config: S,
    open: I,
    onFileAdded: U,
    onFileRemoved: k,
    onFileRejected: q,
    onUploadStarted: z,
    onUploadProgress: G,
    onUploadComplete: J,
    onUploadError: K,
    onUploadRetry: N,
    onAllComplete: Q,
    onTotalProgress: V,
    onOpen: W,
    onClose: X,
    onCancel: Y,
    onBeforeUpload: Z,
    onFilePreview: _,
    onFillMetadata: $,
    onCompleteAction: B,
    onFileLocate: O,
    onFileCopyCdn: T,
    className: Ee,
    style: xe
  }, me) {
    const l = d(null), o = d(U), f = d(k), v = d(q), p = d(z), E = d(G), x = d(J), m = d(K), L = d(N), h = d(Q), g = d(V), F = d(W), y = d(X), M = d(Y), P = d(Z), b = d(_), w = d($), j = d(B), D = d(O), H = d(T);
    return ve(() => {
      o.current = U, f.current = k, v.current = q, p.current = z, E.current = G, x.current = J, m.current = K, L.current = N, h.current = Q, g.current = V, F.current = W, y.current = X, M.current = Y, P.current = Z, b.current = _, w.current = $, j.current = B, D.current = O, H.current = T;
    }), he(me, () => ({
      get element() {
        return l.current;
      },
      open() {
        var e;
        (e = l.current) == null || e.open();
      },
      close() {
        var e;
        (e = l.current) == null || e.close();
      },
      upload() {
        var e;
        (e = l.current) == null || e.upload();
      },
      addFiles(e) {
        var c;
        (c = l.current) == null || c.addFiles(e);
      },
      resumeUpload(e) {
        var c;
        (c = l.current) == null || c.resumeUpload(e);
      },
      cancelUpload() {
        var e;
        (e = l.current) == null || e.cancelUpload();
      },
      getFiles() {
        var e;
        return ((e = l.current) == null ? void 0 : e.getFiles()) ?? [];
      },
      getFile(e) {
        var c;
        return (c = l.current) == null ? void 0 : c.getFile(e);
      },
      updateFileMeta(e, c, a) {
        var u;
        (u = l.current) == null || u.updateFileMeta(e, c, a);
      },
      updateFilesMeta(e) {
        var c;
        (c = l.current) == null || c.updateFilesMeta(e);
      },
      updateFileProduct(e, c) {
        var a;
        (a = l.current) == null || a.updateFileProduct(e, c);
      },
      updateFilesProduct(e) {
        var c;
        (c = l.current) == null || c.updateFilesProduct(e);
      },
      getStatus() {
        var e;
        return ((e = l.current) == null ? void 0 : e.getStatus()) ?? "empty";
      },
      dismissPanel() {
        var e;
        (e = l.current) == null || e.dismissPanel();
      }
    })), ve(() => {
      const e = l.current;
      e && (e.config = S);
    }, [S]), pe(() => {
      const e = l.current;
      e && (I === !0 ? e.open() : I === !1 && e.close());
    }, [I]), pe(() => {
      const e = l.current;
      if (!e) return;
      const c = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = o.current) == null || r.call(o, n);
      }, a = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = f.current) == null || r.call(f, n);
      }, u = (t) => {
        var s;
        const { file: n, reason: r } = t.detail;
        (s = v.current) == null || s.call(v, n, r);
      }, A = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = p.current) == null || r.call(p, n);
      }, C = (t) => {
        var i;
        const { file: n, progress: r, speed: s } = t.detail;
        (i = E.current) == null || i.call(E, n, r, s);
      }, R = (t) => {
        var s;
        const { file: n, response: r } = t.detail;
        (s = x.current) == null || s.call(x, n, r);
      }, ee = (t) => {
        var s;
        const { file: n, error: r } = t.detail;
        (s = m.current) == null || s.call(m, n, r);
      }, te = (t) => {
        var s;
        const { successful: n, failed: r } = t.detail;
        (s = h.current) == null || s.call(h, n, r);
      }, re = (t) => {
        var s;
        const { file: n, attempt: r } = t.detail;
        (s = L.current) == null || s.call(L, n, r);
      }, ne = (t) => {
        var i;
        const { percentage: n, speed: r, eta: s } = t.detail;
        (i = g.current) == null || i.call(g, n, r, s);
      }, se = () => {
        var t;
        (t = F.current) == null || t.call(F);
      }, ce = () => {
        var t;
        (t = y.current) == null || t.call(y);
      }, de = () => {
        var t;
        (t = M.current) == null || t.call(M);
      }, le = (t) => {
        var s;
        const { files: n } = t.detail;
        ((s = P.current) == null ? void 0 : s.call(P, n)) === !1 && t.preventDefault();
      }, ae = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = b.current) == null || r.call(b, n);
      }, ue = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = w.current) == null || r.call(w, n);
      }, ie = () => {
        var t;
        (t = j.current) == null || t.call(j);
      }, oe = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = D.current) == null || r.call(D, n);
      }, fe = (t) => {
        var s;
        const { file: n, cdnUrl: r } = t.detail;
        (s = H.current) == null || s.call(H, n, r);
      };
      return e.addEventListener("sfx-file-added", c), e.addEventListener("sfx-file-removed", a), e.addEventListener("sfx-file-rejected", u), e.addEventListener("sfx-upload-started", A), e.addEventListener("sfx-upload-progress", C), e.addEventListener("sfx-upload-complete", R), e.addEventListener("sfx-upload-error", ee), e.addEventListener("sfx-upload-retry", re), e.addEventListener("sfx-all-complete", te), e.addEventListener("sfx-total-progress", ne), e.addEventListener("sfx-open", se), e.addEventListener("sfx-close", ce), e.addEventListener("sfx-cancel", de), e.addEventListener("sfx-before-upload", le), e.addEventListener("sfx-file-preview", ae), e.addEventListener("sfx-fill-metadata", ue), e.addEventListener("sfx-complete-action", ie), e.addEventListener("sfx-file-locate", oe), e.addEventListener("sfx-file-copy-cdn", fe), () => {
        e.removeEventListener("sfx-file-added", c), e.removeEventListener("sfx-file-removed", a), e.removeEventListener("sfx-file-rejected", u), e.removeEventListener("sfx-upload-started", A), e.removeEventListener("sfx-upload-progress", C), e.removeEventListener("sfx-upload-complete", R), e.removeEventListener("sfx-upload-error", ee), e.removeEventListener("sfx-upload-retry", re), e.removeEventListener("sfx-all-complete", te), e.removeEventListener("sfx-total-progress", ne), e.removeEventListener("sfx-open", se), e.removeEventListener("sfx-close", ce), e.removeEventListener("sfx-cancel", de), e.removeEventListener("sfx-before-upload", le), e.removeEventListener("sfx-file-preview", ae), e.removeEventListener("sfx-fill-metadata", ue), e.removeEventListener("sfx-complete-action", ie), e.removeEventListener("sfx-file-locate", oe), e.removeEventListener("sfx-file-copy-cdn", fe);
      };
    }, []), ge("sfx-uploader", {
      ref: l,
      className: Ee,
      style: xe
    });
  }
);
export {
  Me as Uploader
};
