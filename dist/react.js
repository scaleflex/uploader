import { forwardRef as me, useRef as c, useLayoutEffect as ve, useImperativeHandle as he, useEffect as pe, createElement as ge } from "react";
typeof customElements < "u" && import("./define.js");
const Me = me(
  function({
    config: k,
    open: U,
    onFileAdded: q,
    onFileRemoved: z,
    onFileRejected: G,
    onUploadStarted: J,
    onUploadProgress: K,
    onUploadComplete: N,
    onUploadError: Q,
    onUploadRetry: V,
    onAllComplete: W,
    onTotalProgress: X,
    onOpen: Y,
    onClose: Z,
    onCancel: _,
    onBeforeUpload: $,
    onFilePreview: B,
    onFillMetadata: O,
    onCompleteAction: S,
    onFileLocate: T,
    onFileCopyCdn: A,
    className: Ee,
    style: xe
  }, Le) {
    const d = c(null), u = c(q), o = c(z), f = c(G), v = c(J), p = c(K), E = c(N), x = c(Q), L = c(V), m = c(W), h = c(X), g = c(Y), y = c(Z), F = c(_), M = c($), b = c(B), w = c(O), j = c(S), D = c(T), H = c(A);
    return ve(() => {
      u.current = q, o.current = z, f.current = G, v.current = J, p.current = K, E.current = N, x.current = Q, L.current = V, m.current = W, h.current = X, g.current = Y, y.current = Z, F.current = _, M.current = $, b.current = B, w.current = O, j.current = S, D.current = T, H.current = A;
    }), he(Le, () => ({
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
      updateFileMeta(e, l, I) {
        var a;
        (a = d.current) == null || a.updateFileMeta(e, l, I);
      },
      updateFilesMeta(e) {
        var l;
        (l = d.current) == null || l.updateFilesMeta(e);
      }
    })), ve(() => {
      const e = d.current;
      e && (e.config = k);
    }, [k]), pe(() => {
      const e = d.current;
      e && (U === !0 ? e.open() : U === !1 && e.close());
    }, [U]), pe(() => {
      const e = d.current;
      if (!e) return;
      const l = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = u.current) == null || r.call(u, n);
      }, I = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = o.current) == null || r.call(o, n);
      }, a = (t) => {
        var s;
        const { file: n, reason: r } = t.detail;
        (s = f.current) == null || s.call(f, n, r);
      }, P = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = v.current) == null || r.call(v, n);
      }, C = (t) => {
        var i;
        const { file: n, progress: r, speed: s } = t.detail;
        (i = p.current) == null || i.call(p, n, r, s);
      }, R = (t) => {
        var s;
        const { file: n, response: r } = t.detail;
        (s = E.current) == null || s.call(E, n, r);
      }, ee = (t) => {
        var s;
        const { file: n, error: r } = t.detail;
        (s = x.current) == null || s.call(x, n, r);
      }, te = (t) => {
        var s;
        const { successful: n, failed: r } = t.detail;
        (s = m.current) == null || s.call(m, n, r);
      }, re = (t) => {
        var s;
        const { file: n, attempt: r } = t.detail;
        (s = L.current) == null || s.call(L, n, r);
      }, ne = (t) => {
        var i;
        const { percentage: n, speed: r, eta: s } = t.detail;
        (i = h.current) == null || i.call(h, n, r, s);
      }, se = () => {
        var t;
        (t = g.current) == null || t.call(g);
      }, ce = () => {
        var t;
        (t = y.current) == null || t.call(y);
      }, le = () => {
        var t;
        (t = F.current) == null || t.call(F);
      }, de = (t) => {
        var s;
        const { files: n } = t.detail;
        ((s = M.current) == null ? void 0 : s.call(M, n)) === !1 && t.preventDefault();
      }, ae = (t) => {
        var r;
        const { file: n } = t.detail;
        (r = b.current) == null || r.call(b, n);
      }, ie = (t) => {
        var r;
        const { files: n } = t.detail;
        (r = w.current) == null || r.call(w, n);
      }, ue = () => {
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
      return e.addEventListener("sfx-file-added", l), e.addEventListener("sfx-file-removed", I), e.addEventListener("sfx-file-rejected", a), e.addEventListener("sfx-upload-started", P), e.addEventListener("sfx-upload-progress", C), e.addEventListener("sfx-upload-complete", R), e.addEventListener("sfx-upload-error", ee), e.addEventListener("sfx-upload-retry", re), e.addEventListener("sfx-all-complete", te), e.addEventListener("sfx-total-progress", ne), e.addEventListener("sfx-open", se), e.addEventListener("sfx-close", ce), e.addEventListener("sfx-cancel", le), e.addEventListener("sfx-before-upload", de), e.addEventListener("sfx-file-preview", ae), e.addEventListener("sfx-fill-metadata", ie), e.addEventListener("sfx-complete-action", ue), e.addEventListener("sfx-file-locate", oe), e.addEventListener("sfx-file-copy-cdn", fe), () => {
        e.removeEventListener("sfx-file-added", l), e.removeEventListener("sfx-file-removed", I), e.removeEventListener("sfx-file-rejected", a), e.removeEventListener("sfx-upload-started", P), e.removeEventListener("sfx-upload-progress", C), e.removeEventListener("sfx-upload-complete", R), e.removeEventListener("sfx-upload-error", ee), e.removeEventListener("sfx-upload-retry", re), e.removeEventListener("sfx-all-complete", te), e.removeEventListener("sfx-total-progress", ne), e.removeEventListener("sfx-open", se), e.removeEventListener("sfx-close", ce), e.removeEventListener("sfx-cancel", le), e.removeEventListener("sfx-before-upload", de), e.removeEventListener("sfx-file-preview", ae), e.removeEventListener("sfx-fill-metadata", ie), e.removeEventListener("sfx-complete-action", ue), e.removeEventListener("sfx-file-locate", oe), e.removeEventListener("sfx-file-copy-cdn", fe);
      };
    }, []), ge("sfx-uploader", {
      ref: d,
      className: Ee,
      style: xe
    });
  }
);
export {
  Me as Uploader
};
