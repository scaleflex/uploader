import { forwardRef as Le, useRef as c, useLayoutEffect as ve, useImperativeHandle as he, useEffect as pe, createElement as ge } from "react";
typeof customElements < "u" && import("./define.js");
const Me = Le(
  function({
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
    onTotalProgress: W,
    onOpen: X,
    onClose: Y,
    onCancel: Z,
    onBeforeUpload: _,
    onFilePreview: $,
    onFillMetadata: B,
    onCompleteAction: O,
    onFileLocate: P,
    onFileCopyCdn: T,
    className: Ee,
    style: xe
  }, me) {
    const l = c(null), u = c(k), o = c(q), f = c(z), v = c(G), p = c(J), E = c(K), x = c(N), m = c(Q), L = c(V), h = c(W), g = c(X), y = c(Y), F = c(Z), M = c(_), b = c($), w = c(B), j = c(O), D = c(P), H = c(T);
    return ve(() => {
      u.current = k, o.current = q, f.current = z, v.current = G, p.current = J, E.current = K, x.current = N, m.current = Q, L.current = V, h.current = W, g.current = X, y.current = Y, F.current = Z, M.current = _, b.current = $, w.current = B, j.current = O, D.current = P, H.current = T;
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
        var d;
        (d = l.current) == null || d.addFiles(e);
      },
      resumeUpload(e) {
        var d;
        (d = l.current) == null || d.resumeUpload(e);
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
        var d;
        return (d = l.current) == null ? void 0 : d.getFile(e);
      },
      updateFileMeta(e, d, I) {
        var a;
        (a = l.current) == null || a.updateFileMeta(e, d, I);
      },
      updateFilesMeta(e) {
        var d;
        (d = l.current) == null || d.updateFilesMeta(e);
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
      e && (e.config = U);
    }, [U]), pe(() => {
      const e = l.current;
      e && (S === !0 ? e.open() : S === !1 && e.close());
    }, [S]), pe(() => {
      const e = l.current;
      if (!e) return;
      const d = (t) => {
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
      }, A = (t) => {
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
        (s = L.current) == null || s.call(L, n, r);
      }, re = (t) => {
        var s;
        const { file: n, attempt: r } = t.detail;
        (s = m.current) == null || s.call(m, n, r);
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
      return e.addEventListener("sfx-file-added", d), e.addEventListener("sfx-file-removed", I), e.addEventListener("sfx-file-rejected", a), e.addEventListener("sfx-upload-started", A), e.addEventListener("sfx-upload-progress", C), e.addEventListener("sfx-upload-complete", R), e.addEventListener("sfx-upload-error", ee), e.addEventListener("sfx-upload-retry", re), e.addEventListener("sfx-all-complete", te), e.addEventListener("sfx-total-progress", ne), e.addEventListener("sfx-open", se), e.addEventListener("sfx-close", ce), e.addEventListener("sfx-cancel", le), e.addEventListener("sfx-before-upload", de), e.addEventListener("sfx-file-preview", ae), e.addEventListener("sfx-fill-metadata", ie), e.addEventListener("sfx-complete-action", ue), e.addEventListener("sfx-file-locate", oe), e.addEventListener("sfx-file-copy-cdn", fe), () => {
        e.removeEventListener("sfx-file-added", d), e.removeEventListener("sfx-file-removed", I), e.removeEventListener("sfx-file-rejected", a), e.removeEventListener("sfx-upload-started", A), e.removeEventListener("sfx-upload-progress", C), e.removeEventListener("sfx-upload-complete", R), e.removeEventListener("sfx-upload-error", ee), e.removeEventListener("sfx-upload-retry", re), e.removeEventListener("sfx-all-complete", te), e.removeEventListener("sfx-total-progress", ne), e.removeEventListener("sfx-open", se), e.removeEventListener("sfx-close", ce), e.removeEventListener("sfx-cancel", le), e.removeEventListener("sfx-before-upload", de), e.removeEventListener("sfx-file-preview", ae), e.removeEventListener("sfx-fill-metadata", ie), e.removeEventListener("sfx-complete-action", ue), e.removeEventListener("sfx-file-locate", oe), e.removeEventListener("sfx-file-copy-cdn", fe);
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
