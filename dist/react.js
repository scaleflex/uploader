import { forwardRef as Fe, useRef as l, useLayoutEffect as xe, useImperativeHandle as ye, useEffect as me, createElement as Me } from "react";
typeof customElements < "u" && import("./define.js");
const we = Fe(function({
  config: U,
  open: S,
  onFileAdded: k,
  onFileRemoved: q,
  onFileRejected: z,
  onUploadStarted: G,
  onUploadProgress: J,
  onUploadComplete: K,
  onUploadError: N,
  onUploadRetry: Q,
  onAllComplete: V,
  onFolderComplete: W,
  onTotalProgress: X,
  onOpen: Y,
  onClose: Z,
  onCancel: _,
  onBeforeUpload: $,
  onFilePreview: B,
  onFillMetadata: O,
  onCompleteAction: T,
  onFileLocate: A,
  onFileCopyCdn: C,
  className: Le,
  style: he
}, ge) {
  const d = l(null), o = l(k), f = l(q), v = l(z), p = l(G), E = l(J), x = l(K), m = l(N), L = l(Q), h = l(V), g = l(W), F = l(X), y = l(Y), M = l(Z), P = l(_), b = l($), w = l(B), D = l(O), j = l(T), H = l(A), I = l(C);
  return xe(() => {
    o.current = k, f.current = q, v.current = z, p.current = G, E.current = J, x.current = K, m.current = N, L.current = Q, h.current = V, g.current = W, F.current = X, y.current = Y, M.current = Z, P.current = _, b.current = $, w.current = B, D.current = O, j.current = T, H.current = A, I.current = C;
  }), ye(ge, () => ({
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
      var c;
      (c = d.current) == null || c.addFiles(e);
    },
    resumeUpload(e) {
      var c;
      (c = d.current) == null || c.resumeUpload(e);
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
      var c;
      return (c = d.current) == null ? void 0 : c.getFile(e);
    },
    updateFileMeta(e, c, u) {
      var i;
      (i = d.current) == null || i.updateFileMeta(e, c, u);
    },
    updateFilesMeta(e) {
      var c;
      (c = d.current) == null || c.updateFilesMeta(e);
    },
    updateFileProduct(e, c) {
      var u;
      (u = d.current) == null || u.updateFileProduct(e, c);
    },
    updateFilesProduct(e) {
      var c;
      (c = d.current) == null || c.updateFilesProduct(e);
    },
    getStatus() {
      var e;
      return ((e = d.current) == null ? void 0 : e.getStatus()) ?? "empty";
    },
    dismissPanel() {
      var e;
      (e = d.current) == null || e.dismissPanel();
    }
  })), xe(() => {
    const e = d.current;
    e && (e.config = U);
  }, [U]), me(() => {
    const e = d.current;
    e && (S === !0 ? e.open() : S === !1 && e.close());
  }, [S]), me(() => {
    const e = d.current;
    if (!e) return;
    const c = (t) => {
      var r;
      const { file: n } = t.detail;
      (r = o.current) == null || r.call(o, n);
    }, u = (t) => {
      var r;
      const { file: n } = t.detail;
      (r = f.current) == null || r.call(f, n);
    }, i = (t) => {
      var s;
      const { file: n, reason: r } = t.detail;
      (s = v.current) == null || s.call(v, n, r);
    }, R = (t) => {
      var r;
      const { files: n } = t.detail;
      (r = p.current) == null || r.call(p, n);
    }, ee = (t) => {
      var a;
      const { file: n, progress: r, speed: s } = t.detail;
      (a = E.current) == null || a.call(E, n, r, s);
    }, te = (t) => {
      var s;
      const { file: n, response: r } = t.detail;
      (s = x.current) == null || s.call(x, n, r);
    }, re = (t) => {
      var s;
      const { file: n, error: r } = t.detail;
      (s = m.current) == null || s.call(m, n, r);
    }, ne = (t) => {
      var s;
      const { successful: n, failed: r } = t.detail;
      (s = h.current) == null || s.call(h, n, r);
    }, se = (t) => {
      var a;
      const { folder: n, successful: r, failed: s } = t.detail;
      (a = g.current) == null || a.call(g, n, r, s);
    }, ce = (t) => {
      var s;
      const { file: n, attempt: r } = t.detail;
      (s = L.current) == null || s.call(L, n, r);
    }, le = (t) => {
      var a;
      const { percentage: n, speed: r, eta: s } = t.detail;
      (a = F.current) == null || a.call(F, n, r, s);
    }, de = () => {
      var t;
      (t = y.current) == null || t.call(y);
    }, ae = () => {
      var t;
      (t = M.current) == null || t.call(M);
    }, ue = () => {
      var t;
      (t = P.current) == null || t.call(P);
    }, ie = (t) => {
      var s;
      const { files: n } = t.detail;
      ((s = b.current) == null ? void 0 : s.call(b, n)) === !1 && t.preventDefault();
    }, oe = (t) => {
      var r;
      const { file: n } = t.detail;
      (r = w.current) == null || r.call(w, n);
    }, fe = (t) => {
      var r;
      const { files: n } = t.detail;
      (r = D.current) == null || r.call(D, n);
    }, ve = () => {
      var t;
      (t = j.current) == null || t.call(j);
    }, pe = (t) => {
      var a;
      const { file: n, url: r } = t.detail;
      ((a = H.current) == null ? void 0 : a.call(H, n, r)) === !1 && t.preventDefault();
    }, Ee = (t) => {
      var s;
      const { file: n, cdnUrl: r } = t.detail;
      (s = I.current) == null || s.call(I, n, r);
    };
    return e.addEventListener("sfx-file-added", c), e.addEventListener("sfx-file-removed", u), e.addEventListener("sfx-file-rejected", i), e.addEventListener("sfx-upload-started", R), e.addEventListener("sfx-upload-progress", ee), e.addEventListener("sfx-upload-complete", te), e.addEventListener("sfx-upload-error", re), e.addEventListener("sfx-upload-retry", ce), e.addEventListener("sfx-all-complete", ne), e.addEventListener("sfx-folder-complete", se), e.addEventListener("sfx-total-progress", le), e.addEventListener("sfx-open", de), e.addEventListener("sfx-close", ae), e.addEventListener("sfx-cancel", ue), e.addEventListener("sfx-before-upload", ie), e.addEventListener("sfx-file-preview", oe), e.addEventListener("sfx-fill-metadata", fe), e.addEventListener("sfx-complete-action", ve), e.addEventListener("sfx-file-locate", pe), e.addEventListener("sfx-file-copy-cdn", Ee), () => {
      e.removeEventListener("sfx-file-added", c), e.removeEventListener("sfx-file-removed", u), e.removeEventListener("sfx-file-rejected", i), e.removeEventListener("sfx-upload-started", R), e.removeEventListener("sfx-upload-progress", ee), e.removeEventListener("sfx-upload-complete", te), e.removeEventListener("sfx-upload-error", re), e.removeEventListener("sfx-upload-retry", ce), e.removeEventListener("sfx-all-complete", ne), e.removeEventListener("sfx-folder-complete", se), e.removeEventListener("sfx-total-progress", le), e.removeEventListener("sfx-open", de), e.removeEventListener("sfx-close", ae), e.removeEventListener("sfx-cancel", ue), e.removeEventListener("sfx-before-upload", ie), e.removeEventListener("sfx-file-preview", oe), e.removeEventListener("sfx-fill-metadata", fe), e.removeEventListener("sfx-complete-action", ve), e.removeEventListener("sfx-file-locate", pe), e.removeEventListener("sfx-file-copy-cdn", Ee);
    };
  }, []), Me("sfx-uploader", {
    ref: d,
    className: Le,
    style: he
  });
});
export {
  we as Uploader
};
