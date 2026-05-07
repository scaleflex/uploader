import { LitElement as k, css as b, nothing as h, html as l, svg as y } from "lit";
import { property as c, state as x } from "lit/decorators.js";
import { y as He, z as Je, B as Ue } from "./sfx-uploader-jd8_cGGr.js";
function Le(n, e) {
  const t = (e == null ? void 0 : e.language) ?? "en", s = n.model ?? [], i = n.store ?? {}, o = s.find((u) => u.applies_to === "FILES");
  let r = (o == null ? void 0 : o.groups) ?? [];
  if (Array.isArray(e == null ? void 0 : e.fields)) {
    const u = new Set(e.fields);
    r = r.map((m) => ({
      ...m,
      fields: m.fields.filter((g) => u.has(g.ckey))
    })).filter((m) => m.fields.length > 0);
  }
  r = r.map((u) => ({
    ...u,
    fields: u.fields.filter((m) => !m.hide)
  })).filter((u) => u.fields.length > 0);
  const a = r.flatMap((u) => u.fields), d = new Map(a.map((u) => [u.key, u])), p = i.force_filling_metadata_on_upload === !0, f = i.regional_variants_groups ?? [];
  return {
    groups: r,
    fields: a,
    fieldsByKey: d,
    forceFillingOnUpload: p,
    regionalVariantsGroups: f,
    language: t
  };
}
const Ge = "https://hub.scaleflex.com/api", J = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map();
async function Tt(n, e, t, s) {
  const i = J.get(t);
  if (i) return i;
  const o = B.get(t);
  if (o) return o;
  if (s != null && s.rawMetadata) {
    const a = Le(s.rawMetadata, s);
    return J.set(t, a), a;
  }
  const r = We(e, t, s);
  B.set(t, r);
  try {
    const a = await r;
    return J.set(t, a), a;
  } finally {
    B.delete(t);
  }
}
async function We(n, e, t) {
  var p, f, u;
  const i = `${(t == null ? void 0 : t.hubApiBase) ?? Ge}/project/${encodeURIComponent(e)}`, o = (t == null ? void 0 : t.hubHeaders) ?? n, r = await fetch(i, { headers: o });
  if (!r.ok)
    throw new Error(
      `Failed to fetch metadata schema (HTTP ${r.status})`
    );
  const a = await r.json(), d = ((f = (p = a.data) == null ? void 0 : p.project) == null ? void 0 : f.data) ?? ((u = a.project) == null ? void 0 : u.data);
  if (!(d != null && d.metadata))
    throw new Error("No metadata in project response");
  return Le(d.metadata, t);
}
function Pt(n) {
  var e;
  n ? (J.delete(n), (e = B.get(n)) == null || e.catch(() => {
  }), B.delete(n)) : (J.clear(), B.clear());
}
function Re(n, e, t) {
  let s = e;
  switch (n.regional_variants_group_uuid && s != null && typeof s == "object" && !Array.isArray(s) && (s = s[t ?? "en"]), n.type) {
    case "geopoint":
      return Xe(s);
    case "boolean":
      return s === !0 ? "true" : s === !1 ? "false" : "null";
    case "date":
      return s ? new Date(s) : null;
    case "decimal2":
      return s != null ? String(s) : "";
    case "tags":
      return Array.isArray(s) ? s.map(
        (i) => typeof i == "string" ? { value: i, label: i } : i
      ) : [];
    case "multi-select":
      return s || [];
    default:
      return s ?? "";
  }
}
function ae(n, e, t, s) {
  var o;
  let i;
  switch (n.type) {
    case "geopoint": {
      const r = e;
      !r || r.latitude === "" || r.latitude == null || r.longitude === "" || r.longitude == null ? i = null : i = `(${r.latitude},${r.longitude})`;
      break;
    }
    case "boolean":
      e === "true" ? i = !0 : e === "false" ? i = !1 : i = null;
      break;
    case "date": {
      if (!e)
        i = null;
      else {
        const r = e instanceof Date ? e : new Date(e), a = r.getFullYear(), d = String(r.getMonth() + 1).padStart(2, "0"), p = String(r.getDate()).padStart(2, "0");
        i = `${a}-${d}-${p}`;
      }
      break;
    }
    case "tags":
      i = Array.isArray(e) ? e.map((r) => (r == null ? void 0 : r.label) ?? "") : [];
      break;
    case "select-one":
      i = e === "" ? null : e;
      break;
    case "numeric": {
      if (e === "" || e == null) {
        i = null;
        break;
      }
      const r = Number(e);
      i = Number.isFinite(r) ? Math.round(r) : null;
      break;
    }
    case "decimal2": {
      if (e === "" || e == null) {
        i = null;
        break;
      }
      const r = Number(e);
      i = Number.isFinite(r) ? r : null;
      break;
    }
    default:
      i = e;
  }
  if (n.regional_variants_group_uuid) {
    const r = s ?? "en";
    return { ...((o = t == null ? void 0 : t.meta) == null ? void 0 : o[n.key]) ?? {}, [r]: i };
  }
  return i;
}
function Xe(n) {
  if (typeof n == "string") {
    const e = /\(([^)]+)\)/.exec(n);
    if (e) {
      const t = e[1].split(",");
      if (t.length === 2)
        return {
          latitude: t[0].trim(),
          longitude: t[1].trim()
        };
    }
  }
  return { latitude: "", longitude: "" };
}
function je(n, e, t) {
  var i;
  if ((((i = t == null ? void 0 : t.requiredFields) == null ? void 0 : i.includes(n.ckey)) || n.required === 1) && E(e))
    return `${n.title} is required`;
  if (E(e)) return null;
  switch (n.type) {
    case "numeric": {
      const o = Number(e);
      if (!Number.isFinite(o)) return "Must be a valid number";
      if (!Number.isInteger(o)) return "Must be an integer";
      if (o < -1999999999 || o > 1999999999)
        return "Value out of range (±1,999,999,999)";
      break;
    }
    case "decimal2": {
      const o = Number(e);
      if (!Number.isFinite(o)) return "Must be a valid number";
      if (!/^\-?\d*\.?\d{0,2}$/.test(String(e)))
        return "Maximum 2 decimal places";
      if (o < -999999999999e-2 || o > 999999999999e-2)
        return "Value out of range (±9,999,999,999.99)";
      break;
    }
    case "geopoint": {
      const o = e, r = o.latitude !== "" && o.latitude != null, a = o.longitude !== "" && o.longitude != null;
      if (r !== a)
        return "Both latitude and longitude are required";
      if (r && a) {
        const d = Number(o.latitude), p = Number(o.longitude);
        if (!Number.isFinite(d) || d < -90 || d > 90)
          return "Latitude must be between -90 and 90";
        if (!Number.isFinite(p) || p < -180 || p > 180)
          return "Longitude must be between -180 and 180";
      }
      break;
    }
    case "attachment-uri": {
      try {
        const o = new URL(e);
        if (!["http:", "https:"].includes(o.protocol))
          return "Only http and https URLs are allowed";
      } catch {
        return "Invalid URI";
      }
      break;
    }
  }
  if (n.validation && typeof e == "string")
    try {
      if (!new RegExp(n.validation).test(e))
        return "Value does not match expected format";
    } catch {
    }
  return null;
}
function E(n) {
  return n == null ? !0 : Array.isArray(n) || typeof n == "string" ? n.length === 0 : typeof n == "object" ? !Object.values(n).some(
    (e) => e != null && e !== ""
  ) : !n;
}
function Qe(n) {
  return !E(n);
}
function Ft(n, e, t) {
  const s = /* @__PURE__ */ new Set(["idle", "queued", "rejected"]), i = [...n.values()].filter(
    (d) => s.has(d.status)
  );
  if (i.length === 0) return {};
  const o = new Set((t == null ? void 0 : t.requiredFields) ?? []), r = e.fields.filter(
    (d) => d.required === 1 || o.has(d.ckey)
  ), a = {};
  for (const d of r) {
    const p = i.filter(
      (f) => !Qe(f.meta[d.key])
    );
    p.length > 0 && (a[d.key] = p);
  }
  return a;
}
function qt(n, e) {
  const t = { ...n };
  for (const s of Object.keys(e)) {
    const i = e[s];
    if (i == null || i === "") continue;
    const o = n[s];
    if (Array.isArray(i))
      if (Array.isArray(o)) {
        const r = new Set(o.map((d) => JSON.stringify(d))), a = [...o];
        for (const d of i) {
          const p = JSON.stringify(d);
          r.has(p) || (r.add(p), a.push(d));
        }
        t[s] = a;
      } else
        t[s] = i;
    else
      t[s] = i;
  }
  return t;
}
function Lt(n, e) {
  let t = null, s = null, i = !1;
  return {
    search(o, r, a) {
      if (t && clearTimeout(t), s && s.abort(), i = !1, !r.trim()) {
        a([]);
        return;
      }
      t = setTimeout(async () => {
        var d;
        s = new AbortController();
        try {
          const p = `${n}/v5/metadata/autocomplete?q=${encodeURIComponent(r.trim())}&meta_key=_${encodeURIComponent(o)}&limit=20`, f = await fetch(p, { headers: e, signal: s.signal });
          if (i) return;
          if (!f.ok) {
            a([]);
            return;
          }
          const u = await f.json();
          if (i) return;
          const m = ((d = u.data) == null ? void 0 : d.tags) ?? u.tags ?? [];
          a(
            m.map((g) => ({
              sid: g.sid || void 0,
              value: g.tag || g.value || g.label || "",
              label: g.tag || g.label || g.value || ""
            }))
          );
        } catch {
          i || a([]);
        }
      }, 200);
    },
    cancel() {
      i = !0, t && clearTimeout(t), s && s.abort();
    }
  };
}
var Ze = Object.defineProperty, V = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && Ze(e, t, i), i;
};
const he = class he extends k {
  constructor() {
    super(...arguments), this.schema = null, this.meta = {}, this.config = null, this.disabled = !1, this._collapsed = /* @__PURE__ */ new Set();
  }
  _toggleGroup(e) {
    const t = new Set(this._collapsed);
    t.has(e) ? t.delete(e) : t.add(e), this._collapsed = t;
  }
  _renderGroup(e) {
    const t = !this._collapsed.has(e.uuid);
    return l`
      <div class="group">
        <button class="group-header"
          @click=${() => this._toggleGroup(e.uuid)}
          aria-expanded=${t}>
          <span>${e.name}</span>
          <svg class="chevron ${t ? "open" : ""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${t ? l`
              <div class="group-content">
                ${e.fields.map(
      (s) => l`
                    <sfx-metadata-field
                      .field=${s}
                      .value=${this.meta[s.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `
    )}
              </div>
            ` : h}
      </div>
    `;
  }
  render() {
    return !this.schema || this.schema.groups.length === 0 ? l`<div class="empty">No metadata fields configured</div>` : l`
      ${this.schema.groups.map((e) => this._renderGroup(e))}
    `;
  }
};
he.styles = b`
    :host { display: block; }


    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 48px;
      padding: 0 16px;
      box-sizing: border-box;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      transition: background-color 0.12s ease;
    }
    .group-header:hover {
      background: color-mix(in srgb, var(--sfx-up-surface, #f1f5f9) 50%, transparent);
    }
    .group-header:focus-visible {
      outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
      border-radius: 4px;
    }

    .chevron {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.18s ease;
    }
    .chevron.open {
      transform: rotate(180deg);
    }

    .group-content {
      padding: 0 16px 8px;
    }

    .empty {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
  `;
let A = he;
V([
  c({ attribute: !1 })
], A.prototype, "schema");
V([
  c({ attribute: !1 })
], A.prototype, "meta");
V([
  c({ attribute: !1 })
], A.prototype, "config");
V([
  c({ attribute: !1 })
], A.prototype, "autocomplete");
V([
  c({ type: Boolean })
], A.prototype, "disabled");
V([
  x()
], A.prototype, "_collapsed");
customElements.define("sfx-metadata-form", A);
const W = b`
  input, textarea, select {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input::placeholder, textarea::placeholder {
    font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
    font-size: 14px;
    color: var(--sfx-up-text-muted, #94a3b8);
    opacity: 1;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
  }
  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`, le = b`
  :host { display: block; position: relative; }

  .trigger {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .trigger-clear {
    all: unset;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
  }
  .trigger-clear:hover {
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-surface, #f1f5f9);
  }
  .trigger-chevron {
    margin-left: auto;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
    pointer-events: none;
  }
  .trigger-chevron svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .trigger-chevron.open {
    transform: rotate(180deg);
  }
  .trigger:focus-visible {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow:
      0 0 0 2px var(--sfx-up-bg, #fff),
      0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline: none;
  }
  .placeholder,
  .trigger-value {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .placeholder {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 10;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 200px;
    overflow-y: auto;
  }

  .search {
    width: 100%;
    height: 34px;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    font-size: 13px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: transparent;
    outline: none;
    box-sizing: border-box;
  }

  .option {
    padding: 8px 10px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
  }
  .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
  .option.selected {
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .empty {
    padding: 8px 10px;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }
`, Be = b`
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 12px;
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-size: 12px;
    color: var(--sfx-up-text, #1e293b);
    line-height: 1.4;
  }
  .chip-x {
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    color: var(--sfx-up-text-muted, #94a3b8);
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
  }
  .chip-x:hover { color: var(--sfx-up-error, #dc2626); }
`;
b`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
  }

  .panel-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }

  .panel-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: background 0.15s ease, color 0.15s ease;
    flex-shrink: 0;
  }
  .panel-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .panel-close:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  .progress-bar {
    flex-shrink: 0;
    padding: 8px 16px;
    border-bottom: 1px solid var(--sfx-up-border-light, #f8faff);
  }
  .progress-label {
    font-size: 12px;
    color: var(--sfx-up-text-secondary, #64748b);
    margin-bottom: 4px;
  }
  .progress-track {
    height: 3px;
    border-radius: 2px;
    background: var(--sfx-up-border-light, #f8faff);
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sfx-up-primary, #2563eb);
    transition: width 0.25s ease;
  }

  .panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0 24px;
  }

  .panel-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .panel-footer .spacer { flex: 1; }

  /* Shared button styles */
  .btn,
  .btn-ghost,
  .btn-primary {
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
  .btn-primary svg {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;
const et = b`
  :host { display: block; }

  .field-row {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 8px 0;
  }

  /* Textarea rows: label should top-align with the first line of text */
  .field-row--top {
    align-items: flex-start;
  }
  .field-row--top .field-label {
    padding-top: 6px;
  }

  .field-label {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 144px;
    flex-shrink: 0;
  }
  .field-label-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
  }
  .field-hint {
    width: 14px;
    height: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    cursor: help;
    flex-shrink: 0;
  }
  .field-hint svg {
    width: 12px;
    height: 12px;
  }

  .field-content {
    flex: 1;
    min-width: 0;
  }

  .field-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* Mobile: stack label above the input full-width. The fixed 144px
     label column gets crushed on narrow viewports. */
  @media (max-width: 768px) {
    .field-row,
    .field-row--top {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
      padding: 10px 0;
    }
    .field-row--top .field-label {
      padding-top: 0;
    }
    .field-label {
      width: auto;
    }
  }
`;
var tt = Object.defineProperty, M = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && tt(e, t, i), i;
};
const xe = class xe extends k {
  constructor() {
    super(...arguments), this.config = null, this.disabled = !1, this._error = null, this._dispatching = !1, this._handleChildBlur = (e) => {
      this._dispatching || (e.stopPropagation(), this._onFieldBlur(e));
    };
  }
  get _isRequired() {
    var e, t;
    return (t = (e = this.config) == null ? void 0 : e.requiredFields) != null && t.includes(this.field.ckey) ? !0 : this.field.required === 1;
  }
  _onFieldBlur(e) {
    var r;
    const { key: t, value: s } = e.detail, i = je(this.field, s, this.config ?? void 0);
    if (i) {
      this._error = i;
      return;
    }
    this._error = null;
    const o = ae(this.field, s, void 0, (r = this.config) == null ? void 0 : r.language);
    this._dispatching = !0, this.dispatchEvent(
      new CustomEvent("field-blur", {
        detail: { key: t, value: o },
        bubbles: !0,
        composed: !0
      })
    ), this._dispatching = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("field-blur", this._handleChildBlur);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("field-blur", this._handleChildBlur);
  }
  /** Render the correct field editor based on field.type. */
  _renderField(e, t) {
    const s = this.disabled;
    switch (e.type) {
      case "text":
      case "attachment-uri":
        return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
      case "textarea":
        return l`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;
      case "select-one":
        return l`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-select-field>`;
      case "multi-select":
        return l`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-multi-select-field>`;
      case "tags":
        return l`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;
      case "boolean":
        return l`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;
      case "numeric":
      case "decimal2":
        return l`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;
      case "date":
        return l`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;
      case "geopoint":
        return l`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;
      default:
        return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
    }
  }
  render() {
    var o;
    const e = this.field;
    if (!e) return h;
    const t = Re(e, this.value, (o = this.config) == null ? void 0 : o.language), i = e.type === "textarea" ? "field-row field-row--top" : "field-row";
    return l`
      <div class=${i} aria-required=${this._isRequired ? "true" : "false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired ? l`<span class="field-required" aria-hidden="true">*</span>` : h}
        </div>
        <div class="field-content">
          ${this._renderField(e, t)}
          ${this._error ? l`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>` : h}
        </div>
      </div>
    `;
  }
};
xe.styles = [et];
let I = xe;
M([
  c({ attribute: !1 })
], I.prototype, "field");
M([
  c({ attribute: !1 })
], I.prototype, "value");
M([
  c({ attribute: !1 })
], I.prototype, "config");
M([
  c({ attribute: !1 })
], I.prototype, "autocomplete");
M([
  c({ type: Boolean })
], I.prototype, "disabled");
M([
  x()
], I.prototype, "_error");
customElements.define("sfx-metadata-field", I);
var it = Object.defineProperty, de = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && it(e, t, i), i;
};
class _ extends k {
  constructor() {
    super(...arguments), this.value = "", this.disabled = !1;
  }
  /** Dispatch a metadata field event with consistent shape. */
  _emit(e, t) {
    this.dispatchEvent(
      new CustomEvent(e, {
        detail: { key: this.field.key, ...t !== void 0 ? { value: t } : {} },
        bubbles: !0,
        composed: !0
      })
    );
  }
}
de([
  c({ attribute: !1 })
], _.prototype, "field");
de([
  c({ attribute: !1 })
], _.prototype, "value");
de([
  c({ type: Boolean })
], _.prototype, "disabled");
const be = class be extends _ {
  _onInput(e) {
    this._emit("field-change", e.target.value);
  }
  _onBlur(e) {
    this._emit("field-blur", e.target.value);
  }
  _onKeydown(e) {
    e.key === "Escape" && this._emit("field-escape");
  }
  render() {
    var s, i;
    const e = ((s = this.field) == null ? void 0 : s.title) ?? "", t = e ? `Enter ${e.toLowerCase()}` : "";
    return l`
      <input
        type="text"
        .value=${this.value ?? ""}
        placeholder=${((i = this.field) == null ? void 0 : i.placeholder) || t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `;
  }
};
be.styles = [W];
let ee = be;
customElements.define("sfx-meta-text-field", ee);
const me = class me extends _ {
  firstUpdated() {
    const e = this.renderRoot.querySelector("textarea");
    e && this._autoResize(e);
  }
  _autoResize(e) {
    e.style.height = "auto", e.style.height = `${Math.max(80, e.scrollHeight)}px`;
  }
  _onInput(e) {
    const t = e.target;
    this._autoResize(t), this._emit("field-change", t.value);
  }
  _onBlur(e) {
    this._emit("field-blur", e.target.value);
  }
  _onKeydown(e) {
    e.key === "Escape" && this._emit("field-escape");
  }
  render() {
    var s, i;
    const e = ((s = this.field) == null ? void 0 : s.title) ?? "", t = e ? `Enter ${e.toLowerCase()}` : "";
    return l`
      <textarea
        .value=${this.value ?? ""}
        placeholder=${((i = this.field) == null ? void 0 : i.placeholder) || t}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `;
  }
};
me.styles = [
  W,
  b`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `
];
let te = me;
customElements.define("sfx-meta-textarea-field", te);
var st = Object.defineProperty, ce = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && st(e, t, i), i;
};
const ge = class ge extends _ {
  constructor() {
    super(...arguments), this._open = !1, this._search = "", this._activeIndex = -1, this._boundOutsideClick = this._onOutsideClick.bind(this);
  }
  get _options() {
    var e;
    return (((e = this.field) == null ? void 0 : e.possible_values) ?? []).map((t) => ({
      id: t.internal_unique_value,
      label: t.label,
      value: t.internal_unique_value
    }));
  }
  get _filtered() {
    const e = this._search.toLowerCase();
    return this._options.filter((t) => t.label.toLowerCase().includes(e)).sort((t, s) => t.label.localeCompare(s.label));
  }
  get _selectedLabel() {
    var e;
    return ((e = this._options.find((t) => t.value === this.value)) == null ? void 0 : e.label) ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousedown", this._boundOutsideClick);
  }
  _openDropdown() {
    this._open = !0, this._search = "";
    const t = this._filtered.findIndex((s) => s.value === this.value);
    this._activeIndex = t >= 0 ? t : 0, document.addEventListener("mousedown", this._boundOutsideClick), this.updateComplete.then(() => {
      var s;
      (s = this.renderRoot.querySelector(".search")) == null || s.focus(), this._scrollActive();
    });
  }
  _closeAndSubmit(e = !1) {
    this._open = !1, this._activeIndex = -1, document.removeEventListener("mousedown", this._boundOutsideClick), this._emit("field-blur", this.value), e && this.updateComplete.then(() => {
      var t;
      (t = this.renderRoot.querySelector(".trigger")) == null || t.focus();
    });
  }
  _onOutsideClick(e) {
    e.composedPath().includes(this) || this._closeAndSubmit();
  }
  _onSelect(e, t = !1) {
    this._emit("field-change", e.value), this.value = e.value, this._closeAndSubmit(t);
  }
  _clear(e) {
    e.stopPropagation(), this.value = null, this._emit("field-change", null), this._emit("field-blur", null);
  }
  _scrollActive() {
    this.updateComplete.then(() => {
      var e;
      (e = this.renderRoot.querySelector(".option.active")) == null || e.scrollIntoView({ block: "nearest" });
    });
  }
  _onSearchInput(e) {
    this._search = e.target.value, this._activeIndex = 0;
  }
  _onKeydown(e) {
    var s;
    if (e.key === "Escape") {
      this._open = !1, this._activeIndex = -1, document.removeEventListener("mousedown", this._boundOutsideClick), this._emit("field-escape"), (s = this.renderRoot.querySelector(".trigger")) == null || s.focus();
      return;
    }
    if (!this._open) {
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._openDropdown());
      return;
    }
    const t = this._filtered;
    if (t.length)
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), this._activeIndex = Math.min(this._activeIndex + 1, t.length - 1), this._scrollActive();
          break;
        case "ArrowUp":
          e.preventDefault(), this._activeIndex = Math.max(this._activeIndex - 1, 0), this._scrollActive();
          break;
        case "Home":
          e.preventDefault(), this._activeIndex = 0, this._scrollActive();
          break;
        case "End":
          e.preventDefault(), this._activeIndex = t.length - 1, this._scrollActive();
          break;
        case "Enter":
          this._activeIndex >= 0 && this._activeIndex < t.length && (e.preventDefault(), this._onSelect(t[this._activeIndex], !0));
          break;
      }
  }
  render() {
    var s, i;
    const e = ((s = this.field) == null ? void 0 : s.title) ?? "", t = e ? `Select ${e.toLowerCase()}` : "Select an option";
    return l`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${() => this._open ? this._closeAndSubmit(!0) : this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel ? l`<span class="trigger-value">${this._selectedLabel}</span>` : l`<span class="placeholder">${((i = this.field) == null ? void 0 : i.placeholder) || t}</span>`}
        ${this._selectedLabel && !this.disabled ? l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${(o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), this._clear(o));
    }}>&times;</span>
        ` : h}
        <span class="trigger-chevron ${this._open ? "open" : ""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open ? l`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length ? this._filtered.map((o, r) => l`
                <div class="option ${o.value === this.value ? "selected" : ""} ${r === this._activeIndex ? "active" : ""}"
                  role="option" aria-selected=${o.value === this.value}
                  @mousedown=${(a) => {
      a.preventDefault(), this._onSelect(o);
    }}
                  @mouseenter=${() => {
      this._activeIndex = r;
    }}>
                  ${o.label}
                </div>`) : l`<div class="empty">No options</div>`}
        </div>
      ` : h}
    `;
  }
};
ge.styles = [le];
let N = ge;
ce([
  x()
], N.prototype, "_open");
ce([
  x()
], N.prototype, "_search");
ce([
  x()
], N.prototype, "_activeIndex");
customElements.define("sfx-meta-select-field", N);
var rt = Object.defineProperty, pe = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && rt(e, t, i), i;
};
const ve = class ve extends _ {
  constructor() {
    super(...arguments), this._open = !1, this._search = "", this._activeIndex = -1, this._boundOutsideClick = this._onOutsideClick.bind(this);
  }
  get _selected() {
    return Array.isArray(this.value) ? this.value : [];
  }
  get _options() {
    var e;
    return (((e = this.field) == null ? void 0 : e.possible_values) ?? []).map((t) => ({
      id: t.internal_unique_value,
      label: t.label,
      value: t.internal_unique_value
    }));
  }
  get _filtered() {
    const e = this._search.toLowerCase();
    return this._options.filter((t) => t.label.toLowerCase().includes(e)).sort((t, s) => t.label.localeCompare(s.label));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousedown", this._boundOutsideClick);
  }
  _openDropdown() {
    this._open = !0, this._search = "", this._activeIndex = -1, document.addEventListener("mousedown", this._boundOutsideClick), this.updateComplete.then(() => {
      var e;
      (e = this.renderRoot.querySelector(".search")) == null || e.focus();
    });
  }
  _closeAndSubmit() {
    this._open = !1, this._activeIndex = -1, document.removeEventListener("mousedown", this._boundOutsideClick), this._emit("field-blur", this._selected);
  }
  _onOutsideClick(e) {
    e.composedPath().includes(this) || this._closeAndSubmit();
  }
  _toggle(e) {
    const t = this._selected, s = t.includes(e.value) ? t.filter((i) => i !== e.value) : [...t, e.value];
    this.value = s, this._emit("field-change", s);
  }
  _remove(e) {
    const t = this._selected.filter((s) => s !== e);
    this.value = t, this._emit("field-change", t);
  }
  _selectAll() {
    const e = this._options.map((t) => t.value);
    this.value = e, this._emit("field-change", e);
  }
  _clearAll() {
    this.value = [], this._emit("field-change", []);
  }
  _scrollActive() {
    this.updateComplete.then(() => {
      var e;
      (e = this.renderRoot.querySelector(".option.active")) == null || e.scrollIntoView({ block: "nearest" });
    });
  }
  _onSearchInput(e) {
    this._search = e.target.value, this._activeIndex = -1;
  }
  _onKeydown(e) {
    var s;
    if (e.key === "Escape") {
      this._open = !1, this._activeIndex = -1, document.removeEventListener("mousedown", this._boundOutsideClick), this._emit("field-escape"), (s = this.renderRoot.querySelector(".trigger")) == null || s.focus();
      return;
    }
    if (!this._open) {
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._openDropdown());
      return;
    }
    if (e.key === "Backspace" && !this._search && this._selected.length > 0) {
      this._remove(this._selected[this._selected.length - 1]);
      return;
    }
    const t = this._filtered;
    if (t.length)
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), this._activeIndex = Math.min(this._activeIndex + 1, t.length - 1), this._scrollActive();
          break;
        case "ArrowUp":
          e.preventDefault(), this._activeIndex = Math.max(this._activeIndex - 1, 0), this._scrollActive();
          break;
        case "Home":
          e.preventDefault(), this._activeIndex = 0, this._scrollActive();
          break;
        case "End":
          e.preventDefault(), this._activeIndex = t.length - 1, this._scrollActive();
          break;
        case "Enter":
          this._activeIndex >= 0 && this._activeIndex < t.length && (e.preventDefault(), this._toggle(t[this._activeIndex]));
          break;
        case " ":
          this._activeIndex >= 0 && this._activeIndex < t.length && !this._search && (e.preventDefault(), this._toggle(t[this._activeIndex]));
          break;
      }
  }
  _labelFor(e) {
    var t;
    return ((t = this._options.find((s) => s.value === e)) == null ? void 0 : t.label) ?? e;
  }
  render() {
    var i, o;
    const e = this._selected, t = ((i = this.field) == null ? void 0 : i.title) ?? "", s = t ? `Select ${t.toLowerCase()}` : "Select an option";
    return l`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${() => this._open ? this._closeAndSubmit() : this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length ? e.map((r) => l`
              <span class="chip">
                ${this._labelFor(r)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(r)}" @click=${(a) => {
      a.stopPropagation(), this._remove(r);
    }}>&times;</button>
              </span>`) : l`<span class="placeholder">${((o = this.field) == null ? void 0 : o.placeholder) || s}</span>`}
        <span class="trigger-chevron ${this._open ? "open" : ""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open ? l`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length ? this._filtered.map((r, a) => l`
                  <div class="option ${a === this._activeIndex ? "active" : ""}" role="option" aria-selected=${e.includes(r.value)}
                    @mousedown=${(d) => {
      d.preventDefault(), this._toggle(r);
    }}
                    @mouseenter=${() => {
      this._activeIndex = a;
    }}>
                    <span class="check ${e.includes(r.value) ? "checked" : ""}">
                      ${e.includes(r.value) ? "✓" : ""}
                    </span>
                    ${r.label}
                  </div>`) : l`<div class="empty">No options</div>`}
          </div>
          ${this._options.length > 0 ? l`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${(r) => {
      r.preventDefault(), this._selectAll();
    }}>Select all</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${(r) => {
      r.preventDefault(), this._clearAll();
    }}>Clear all</button>
            </div>
          ` : h}
        </div>
      ` : h}
    `;
  }
};
ve.styles = [
  le,
  Be,
  b`
      .trigger {
        min-height: 36px;
        height: auto;
        padding: 4px 8px;
        flex-wrap: wrap;
        gap: 4px;
      }
      .check {
        width: 16px;
        height: 16px;
        border: 1.5px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 11px;
      }
      .check.checked {
        background: var(--sfx-up-primary, #2563eb);
        border-color: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }
      .option { display: flex; align-items: center; gap: 8px; }
      .dropdown {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 340px;
      }
      .dropdown .search {
        flex-shrink: 0;
        min-height: 34px;
      }
      .options-list {
        flex: 1;
        overflow-y: auto;
      }
      .bulk-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
        flex-shrink: 0;
      }
      .bulk-btn {
        all: unset;
        font-size: 12px;
        font-weight: 500;
        color: var(--sfx-up-primary, #2563eb);
        cursor: pointer;
      }
      .bulk-btn:hover {
        text-decoration: underline;
      }
      .bulk-btn--muted {
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `
];
let K = ve;
pe([
  x()
], K.prototype, "_open");
pe([
  x()
], K.prototype, "_search");
pe([
  x()
], K.prototype, "_activeIndex");
customElements.define("sfx-meta-multi-select-field", K);
function P(n, e) {
  var t, s;
  return ((t = n.label) == null ? void 0 : t.trim().toLowerCase()) === ((s = e.label) == null ? void 0 : s.trim().toLowerCase());
}
function Ne(n) {
  return n.trim().replace(/\s+/g, " ");
}
function ot(n) {
  return Ne(n).replace(/\s/g, "-");
}
function X(n) {
  return { label: Ne(n), value: ot(n) };
}
var nt = Object.defineProperty, Y = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && nt(e, t, i), i;
};
const ye = class ye extends _ {
  constructor() {
    super(...arguments), this._query = "", this._results = [], this._loading = !1, this._dropdownOpen = !1, this._activeIndex = -1, this._blurTimeout = null;
  }
  get _tags() {
    return Array.isArray(this.value) ? this.value : [];
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this._blurTimeout && clearTimeout(this._blurTimeout), (e = this.autocomplete) == null || e.cancel();
  }
  _onInput(e) {
    var s, i, o;
    const t = e.target.value;
    if (this._query = t, this._dropdownOpen = !0, this._activeIndex = -1, !t.trim() || !((s = this.field) != null && s.ckey)) {
      this._results = [], this._loading = !1, (i = this.autocomplete) == null || i.cancel();
      return;
    }
    this._loading = !0, (o = this.autocomplete) == null || o.search(this.field.ckey, t, (r) => {
      this._results = r, this._loading = !1;
    });
  }
  _addTag(e) {
    if (this._tags.some((s) => P(s, e))) return;
    const t = [...this._tags, e];
    this.value = t, this._query = "", this._results = [], this._dropdownOpen = !1, this._activeIndex = -1, this._emit("field-change", t), this.updateComplete.then(() => {
      var s;
      (s = this.renderRoot.querySelector(".input")) == null || s.focus();
    });
  }
  _removeTag(e) {
    const t = this._tags.filter((s) => !P(s, e));
    this.value = t, this._emit("field-change", t);
  }
  _onBlur() {
    this._blurTimeout && clearTimeout(this._blurTimeout), this._blurTimeout = setTimeout(() => {
      this._blurTimeout = null, this.renderRoot.querySelector(".dropdown:hover") || (this._dropdownOpen = !1, this._activeIndex = -1, this._emit("field-blur", this._tags));
    }, 150);
  }
  _scrollActive() {
    this.updateComplete.then(() => {
      var e;
      (e = this.renderRoot.querySelector(".option.active")) == null || e.scrollIntoView({ block: "nearest" });
    });
  }
  /** Total navigable items: suggestions + optional "Create" item. */
  get _itemCount() {
    return this._suggestions.length + (this._canCreate ? 1 : 0);
  }
  _onKeydown(e) {
    if (e.key === "Escape") {
      this._dropdownOpen = !1, this._activeIndex = -1, this._emit("field-escape");
      return;
    }
    if (e.key === "Backspace" && !this._query && this._tags.length) {
      this._removeTag(this._tags[this._tags.length - 1]);
      return;
    }
    if (!this._dropdownOpen) return;
    const t = this._itemCount;
    if (this._activeIndex >= t && (this._activeIndex = Math.max(t - 1, -1)), !(t === 0 && e.key !== "Enter"))
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), this._activeIndex = Math.min(this._activeIndex + 1, t - 1), this._scrollActive();
          break;
        case "ArrowUp":
          e.preventDefault(), this._activeIndex = Math.max(this._activeIndex - 1, -1), this._scrollActive();
          break;
        case "Home":
          e.preventDefault(), this._activeIndex = 0, this._scrollActive();
          break;
        case "End":
          e.preventDefault(), this._activeIndex = t - 1, this._scrollActive();
          break;
        case "Enter": {
          e.preventDefault();
          const s = this._suggestions;
          this._activeIndex >= 0 && this._activeIndex < s.length ? this._addTag(s[this._activeIndex]) : this._activeIndex === s.length && this._canCreate ? this._addTag(X(this._query)) : this._activeIndex === -1 && this._canCreate ? this._addTag(X(this._query)) : this._activeIndex === -1 && s.length && this._addTag(s[0]);
          break;
        }
      }
  }
  get _suggestions() {
    var o;
    const e = this._query.toLowerCase().trim(), t = this._tags, s = (((o = this.field) == null ? void 0 : o.possible_values) ?? []).map((r) => ({ value: r.api_value || r.internal_unique_value, label: r.label })).filter((r) => !t.some((a) => P(a, r))).filter((r) => !e || r.label.toLowerCase().includes(e)), i = this._results.filter(
      (r) => !t.some((a) => P(a, r)) && !s.some((a) => P(a, r))
    );
    return [...s, ...i];
  }
  get _canCreate() {
    const e = this._query.trim();
    if (!e || this._loading) return !1;
    const t = X(e);
    return !this._tags.some((s) => P(s, t)) && !this._suggestions.some((s) => P(s, t));
  }
  render() {
    var i, o;
    const e = this._tags, t = this._suggestions, s = t.length;
    return l`
      <div class="container" @click=${() => {
      var r;
      return (r = this.renderRoot.querySelector(".input")) == null ? void 0 : r.focus();
    }}>
        ${e.map((r) => l`
          <span class="chip">
            ${r.label}
            <button class="chip-x" aria-label="Remove ${r.label}" @click=${(a) => {
      a.stopPropagation(), this._removeTag(r);
    }}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((i = this.field) == null ? void 0 : i.title) ?? "Tags"}
          placeholder=${e.length ? "" : ((o = this.field) == null ? void 0 : o.placeholder) || "Add tags"}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen && (this._query.trim() || t.length) ? l`
        <div class="dropdown" role="listbox">
          ${this._loading ? l`<div class="loading">Loading</div>` : h}
          ${t.map((r, a) => l`
            <div class="option ${a === this._activeIndex ? "active" : ""}" role="option"
              @mousedown=${(d) => {
      d.preventDefault(), this._addTag(r);
    }}
              @mouseenter=${() => {
      this._activeIndex = a;
    }}>
              ${r.label}
            </div>`)}
          ${this._canCreate ? l`
            <div class="option create ${s === this._activeIndex ? "active" : ""}"
              @mousedown=${(r) => {
      r.preventDefault(), this._addTag(X(this._query));
    }}
              @mouseenter=${() => {
      this._activeIndex = s;
    }}>
              Create '${this._query.trim()}'
            </div>` : h}
          ${!this._loading && !t.length && !this._canCreate ? l`<div class="empty">No results</div>` : h}
        </div>
      ` : h}
    `;
  }
};
ye.styles = [
  Be,
  b`
      :host { display: block; position: relative; }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px;
        min-height: 36px;
        padding: 4px 8px;
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 6px;
        background: var(--sfx-up-bg, #fff);
        box-sizing: border-box;
        cursor: text;
      }
      .container:focus-within {
        border-color: var(--sfx-up-primary, #2563eb);
        box-shadow:
          0 0 0 2px var(--sfx-up-bg, #fff),
          0 0 0 5px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
      }
      .input::placeholder {
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        opacity: 1;
      }

      .dropdown {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 10;
        background: var(--sfx-up-bg, #fff);
        border: 1px solid var(--sfx-up-border, #e2e8f0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
      }

      .option {
        padding: 8px 10px;
        font-size: 14px;
        cursor: pointer;
        color: var(--sfx-up-text, #1e293b);
      }
      .option:hover, .option.active { background: var(--sfx-up-hover, #f1f5f9); }
      .option.create {
        color: var(--sfx-up-primary, #2563eb);
        font-weight: 500;
      }

      .loading, .empty {
        padding: 8px 10px;
        font-size: 13px;
        color: var(--sfx-up-text-muted, #94a3b8);
      }
    `
];
let O = ye;
Y([
  c({ attribute: !1 })
], O.prototype, "autocomplete");
Y([
  x()
], O.prototype, "_query");
Y([
  x()
], O.prototype, "_results");
Y([
  x()
], O.prototype, "_loading");
Y([
  x()
], O.prototype, "_dropdownOpen");
Y([
  x()
], O.prototype, "_activeIndex");
customElements.define("sfx-meta-tags-field", O);
var at = Object.defineProperty, Ke = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && at(e, t, i), i;
};
const F = [
  { label: "True", value: "true" },
  { label: "False", value: "false" }
], _e = class _e extends _ {
  constructor() {
    super(...arguments), this._open = !1, this._activeIndex = -1, this._boundOutsideClick = this._onOutsideClick.bind(this);
  }
  get _currentLabel() {
    var t;
    if (this.value == null) return "";
    const e = String(this.value);
    return ((t = F.find((s) => s.value === e)) == null ? void 0 : t.label) ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousedown", this._boundOutsideClick);
  }
  _openDropdown() {
    this._open = !0;
    const e = this.value == null ? "" : String(this.value);
    this._activeIndex = Math.max(F.findIndex((t) => t.value === e), 0), document.addEventListener("mousedown", this._boundOutsideClick), this.updateComplete.then(() => {
      var t;
      (t = this.renderRoot.querySelector(".dropdown")) == null || t.focus();
    });
  }
  _closeAndSubmit(e = !1) {
    this._open = !1, this._activeIndex = -1, document.removeEventListener("mousedown", this._boundOutsideClick), this._emit("field-blur", this.value), e && this.updateComplete.then(() => {
      var t;
      (t = this.renderRoot.querySelector(".trigger")) == null || t.focus();
    });
  }
  _onOutsideClick(e) {
    e.composedPath().includes(this) || this._closeAndSubmit();
  }
  _onSelect(e, t = !1) {
    this.value = e.value, this._emit("field-change", e.value), this._closeAndSubmit(t);
  }
  _clear(e) {
    e.stopPropagation(), this.value = null, this._emit("field-change", null), this._emit("field-blur", null);
  }
  _scrollActive() {
    this.updateComplete.then(() => {
      var e;
      (e = this.renderRoot.querySelector(".option.active")) == null || e.scrollIntoView({ block: "nearest" });
    });
  }
  _onKeydown(e) {
    var t;
    if (e.key === "Escape") {
      this._open = !1, this._activeIndex = -1, document.removeEventListener("mousedown", this._boundOutsideClick), this._emit("field-escape"), (t = this.renderRoot.querySelector(".trigger")) == null || t.focus();
      return;
    }
    if (!this._open) {
      (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._openDropdown());
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), this._activeIndex = Math.min(this._activeIndex + 1, F.length - 1), this._scrollActive();
        break;
      case "ArrowUp":
        e.preventDefault(), this._activeIndex = Math.max(this._activeIndex - 1, 0), this._scrollActive();
        break;
      case "Home":
        e.preventDefault(), this._activeIndex = 0, this._scrollActive();
        break;
      case "End":
        e.preventDefault(), this._activeIndex = F.length - 1, this._scrollActive();
        break;
      case "Enter":
      case " ":
        this._activeIndex >= 0 && this._activeIndex < F.length && (e.preventDefault(), this._onSelect(F[this._activeIndex], !0));
        break;
    }
  }
  render() {
    var i, o;
    const e = this.value == null ? "" : String(this.value), t = ((i = this.field) == null ? void 0 : i.title) ?? "", s = t ? `Select ${t.toLowerCase()}` : "Select an option";
    return l`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${() => this._open ? this._closeAndSubmit(!0) : this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel ? l`<span class="trigger-value">${this._currentLabel}</span>` : l`<span class="placeholder">${((o = this.field) == null ? void 0 : o.placeholder) || s}</span>`}
        ${this._currentLabel && !this.disabled ? l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${(r) => {
      (r.key === "Enter" || r.key === " ") && (r.preventDefault(), this._clear(r));
    }}>&times;</span>
        ` : h}
        <span class="trigger-chevron ${this._open ? "open" : ""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open ? l`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${F.map((r, a) => l`
            <div class="option ${r.value === e ? "selected" : ""} ${a === this._activeIndex ? "active" : ""}"
              role="option" aria-selected=${r.value === e}
              @mousedown=${(d) => {
      d.preventDefault(), this._onSelect(r);
    }}
              @mouseenter=${() => {
      this._activeIndex = a;
    }}>
              ${r.label}
            </div>`)}
        </div>
      ` : h}
    `;
  }
};
_e.styles = [le];
let U = _e;
Ke([
  x()
], U.prototype, "_open");
Ke([
  x()
], U.prototype, "_activeIndex");
customElements.define("sfx-meta-boolean-field", U);
const we = class we extends _ {
  get _step() {
    var e;
    return ((e = this.field) == null ? void 0 : e.type) === "decimal2" ? "0.01" : "1";
  }
  get _inputMode() {
    var e;
    return ((e = this.field) == null ? void 0 : e.type) === "decimal2" ? "decimal" : "numeric";
  }
  _onInput(e) {
    this._emit("field-change", e.target.value);
  }
  _onBlur(e) {
    this._emit("field-blur", e.target.value);
  }
  _onKeydown(e) {
    e.key === "Escape" && this._emit("field-escape");
  }
  render() {
    var e;
    return l`
      <input
        type="number"
        step=${this._step}
        inputmode=${this._inputMode}
        .value=${String(this.value ?? "")}
        placeholder=${((e = this.field) == null ? void 0 : e.placeholder) ?? ""}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `;
  }
};
we.styles = [W];
let ie = we;
customElements.define("sfx-meta-number-field", ie);
const ke = class ke extends _ {
  /** Convert value to "YYYY-MM-DD" string for the native date input. */
  get _dateStr() {
    const e = this.value;
    return e ? e instanceof Date ? e.toISOString().split("T")[0] : String(e) : "";
  }
  _onChange(e) {
    const t = e.target.value;
    this._emit("field-change", t), this._emit("field-blur", t);
  }
  _onKeydown(e) {
    e.key === "Escape" && this._emit("field-escape");
  }
  render() {
    const e = this._dateStr, t = !e;
    return l`
      <div class="date-wrap">
        <input
          type="date"
          class=${t ? "is-empty" : ""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t ? l`<span class="date-placeholder">Pick a date</span>` : h}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `;
  }
};
ke.styles = [
  W,
  b`
      .date-wrap {
        position: relative;
        width: 100%;
      }

      .date-wrap input[type='date'] {
        padding-right: 32px;
        color: var(--sfx-up-text, #1e293b);
      }

      /* Hide native calendar indicator but keep it clickable across the field */
      .date-wrap input[type='date']::-webkit-calendar-picker-indicator {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      /* Empty state: hide the native dd/mm/yyyy text so the placeholder shows */
      .date-wrap input[type='date'].is-empty::-webkit-datetime-edit {
        opacity: 0;
      }

      .date-placeholder {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
        font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      }

      /* Firefox doesn't support ::-webkit-datetime-edit so it can't hide
         the native placeholder — hide the custom one to avoid overlap. */
      @supports (-moz-appearance: none) {
        .date-placeholder {
          display: none;
        }
      }

      .date-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        color: var(--sfx-up-text-muted, #94a3b8);
        pointer-events: none;
      }

      .date-icon svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    `
];
let se = ke;
customElements.define("sfx-meta-date-field", se);
const $e = class $e extends _ {
  get _geo() {
    const e = this.value;
    return { latitude: (e == null ? void 0 : e.latitude) ?? "", longitude: (e == null ? void 0 : e.longitude) ?? "" };
  }
  _onInput(e, t) {
    const s = t.target.value, i = { ...this._geo, [e]: s };
    this.value = i, this._emit("field-change", i);
  }
  _onBlur(e) {
    const t = e.relatedTarget;
    t && this.renderRoot.contains(t) || this._emit("field-blur", this._geo);
  }
  _onKeydown(e) {
    e.key === "Escape" && this._emit("field-escape");
  }
  render() {
    const e = this._geo;
    return l`
      <div class="grid">
        <div>
          <label>Latitude</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${(t) => this._onInput("latitude", t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>Longitude</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${(t) => this._onInput("longitude", t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `;
  }
};
$e.styles = [
  W,
  b`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 4px;
      }
    `
];
let re = $e;
customElements.define("sfx-meta-geo-point-field", re);
var lt = Object.defineProperty, Q = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && lt(e, t, i), i;
};
const Ce = class Ce extends k {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  render() {
    const e = this.field, t = this.value, s = this.disabled;
    switch (e.type) {
      case "text":
      case "attachment-uri":
        return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
      case "textarea":
        return l`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;
      case "select-one":
        return l`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-select-field>`;
      case "multi-select":
        return l`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-multi-select-field>`;
      case "tags":
        return l`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;
      case "boolean":
        return l`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;
      case "numeric":
      case "decimal2":
        return l`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;
      case "date":
        return l`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;
      case "geopoint":
        return l`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;
      default:
        return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
    }
  }
};
Ce.styles = b`
    :host { display: block; }
  `;
let q = Ce;
Q([
  c({ attribute: !1 })
], q.prototype, "field");
Q([
  c({ attribute: !1 })
], q.prototype, "value");
Q([
  c({ attribute: !1 })
], q.prototype, "autocomplete");
Q([
  c({ type: Boolean })
], q.prototype, "disabled");
customElements.define("sfx-metadata-field-edit", q);
var dt = Object.defineProperty, Ve = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && dt(e, t, i), i;
};
const Se = class Se extends k {
  _formatValue() {
    var s, i;
    const e = this.value, t = (s = this.field) == null ? void 0 : s.type;
    switch (t) {
      case "boolean":
        return e === "true" ? "True" : e === "false" ? "False" : "";
      case "date":
        return e ? e instanceof Date ? e.toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }) : typeof e == "string" && e.length > 0 ? e : "" : "";
      case "numeric":
      case "decimal2": {
        if (e == null || e === "") return "";
        const o = Number(e);
        return Number.isFinite(o) ? o.toLocaleString(void 0, {
          maximumFractionDigits: t === "decimal2" ? 2 : 0
        }) : String(e);
      }
      case "select-one": {
        if (e == null || e === "") return "";
        const o = (i = this.field.possible_values) == null ? void 0 : i.find(
          (r) => r.internal_unique_value === e || r.api_value === e
        );
        return (o == null ? void 0 : o.label) ?? String(e);
      }
      case "multi-select":
        return !Array.isArray(e) || e.length === 0 ? "" : e.map((o) => {
          var a;
          const r = (a = this.field.possible_values) == null ? void 0 : a.find(
            (d) => d.internal_unique_value === o || d.api_value === o
          );
          return (r == null ? void 0 : r.label) ?? String(o);
        }).join(", ");
      case "tags":
        return !Array.isArray(e) || e.length === 0 ? "" : e.map((o) => o.label || o.value).join(", ");
      case "geopoint": {
        const o = e;
        return !o || o.latitude === "" || o.latitude == null || o.longitude === "" || o.longitude == null ? "" : `(${o.latitude}, ${o.longitude})`;
      }
      case "attachment-uri":
        return !e || typeof e == "string" && e.length === 0 ? "" : String(e);
      case "text":
      case "textarea":
      default:
        return e == null || e === "" ? "" : String(e);
    }
  }
  render() {
    var s;
    const e = this._formatValue(), t = e === "";
    return ((s = this.field) == null ? void 0 : s.type) === "attachment-uri" && !t ? l`
        <div class="value">
          <a class="link" href=${e} target="_blank" rel="noopener noreferrer"
            @click=${(i) => i.stopPropagation()}
          >${e}</a>
        </div>
      ` : l`
      <div class="value ${t ? "empty" : ""}">${t ? "—" : e}</div>
    `;
  }
};
Se.styles = b`
    :host { display: block; }
    .value {
      min-height: 28px;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
      word-break: break-word;
      line-height: 1.4;
    }
    .empty {
      color: var(--sfx-up-text-muted, #94a3b8);
    }
    .link {
      color: var(--sfx-up-primary, #2563eb);
      text-decoration: none;
      max-width: 100%;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link:hover {
      text-decoration: underline;
    }
  `;
let G = Se;
Ve([
  c({ attribute: !1 })
], G.prototype, "field");
Ve([
  c({ attribute: !1 })
], G.prototype, "value");
customElements.define("sfx-metadata-field-view", G);
const ue = /* @__PURE__ */ new Set([
  "multi-select",
  "tags",
  "integer-list"
]), fe = /* @__PURE__ */ new Set([
  "text",
  "textarea",
  "attachment-uri"
]);
function ct(n) {
  return ue.has(n) ? [
    { key: "SET", label: "Set" },
    { key: "ADD", label: "Add to" },
    { key: "DELETE", label: "Remove from" }
  ] : fe.has(n) ? [
    { key: "SET", label: "Set" },
    { key: "ADD", label: "Append" },
    { key: "DELETE", label: "Remove" }
  ] : [
    { key: "SET", label: "Set" },
    { key: "DELETE", label: "Clear" }
  ];
}
function oe(n, e) {
  return n === "DELETE" ? ue.has(e) || fe.has(e) : !0;
}
function pt(n, e, t, s) {
  const i = ue.has(s), o = fe.has(s);
  switch (n) {
    case "SET":
      return t;
    case "ADD": {
      if (i) {
        const r = Array.isArray(e) ? e : [], a = Array.isArray(t) ? t : [];
        if (a.length === 0) return r;
        if (s === "tags") {
          const f = new Set(r.map((m) => m)), u = [...r];
          for (const m of a) {
            const g = typeof m == "string" ? m : String(m);
            f.has(g) || (f.add(g), u.push(g));
          }
          return u;
        }
        const d = new Set(r.map((f) => JSON.stringify(f))), p = [...r];
        for (const f of a) {
          const u = JSON.stringify(f);
          d.has(u) || (d.add(u), p.push(f));
        }
        return p;
      }
      if (o) {
        const r = typeof t == "string" ? t : "";
        if (!r) return e ?? "";
        const a = typeof e == "string" ? e : "";
        return a ? `${a} ${r}` : r;
      }
      return t;
    }
    case "DELETE": {
      if (i) {
        const r = Array.isArray(e) ? e : [], a = Array.isArray(t) ? t : [];
        if (a.length === 0) return r;
        if (s === "tags") {
          const p = new Set(
            a.map((f) => typeof f == "string" ? f : String(f))
          );
          return r.filter(
            (f) => !p.has(typeof f == "string" ? f : String(f))
          );
        }
        const d = new Set(
          a.map((p) => JSON.stringify(p))
        );
        return r.filter(
          (p) => !d.has(JSON.stringify(p))
        );
      }
      if (o) {
        const r = typeof t == "string" ? t : "";
        return r ? (typeof e == "string" ? e : "").replaceAll(r, "").replace(/\s{2,}/g, " ").trim() : "";
      }
      return s === "geopoint" ? { latitude: "", longitude: "" } : null;
    }
    default:
      return t;
  }
}
function Me(n, e, t, s, i) {
  const o = i ?? "en", r = !!n.regional_variants_group_uuid, a = {
    meta: { [n.key]: e }
  }, d = ae(n, t, a, i), p = (g) => r && g !== null && typeof g == "object" && !Array.isArray(g), f = p(e) ? e[o] : e, u = p(d) ? d[o] : d, m = pt(s, f, u, n.type);
  return r ? {
    ...p(e) ? e : {},
    [o]: m
  } : m;
}
const Ye = b`
  .fm-checkbox {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 3px;
    background: var(--sfx-up-bg, #fff);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.12s ease, border-color 0.12s ease;
    flex-shrink: 0;
  }
  .fm-checkbox:hover {
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked,
  .fm-checkbox:indeterminate {
    background: var(--sfx-up-primary, #2563eb);
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .fm-checkbox:checked::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:indeterminate::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #fff;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><line x1='5' y1='12' x2='19' y2='12'/></svg>") center / contain no-repeat;
  }
  .fm-checkbox:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`, ut = b`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
    color: var(--sfx-up-text, #1e293b);
  }

  .fm-overlay {
    position: fixed;
    inset: 0;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 24, 39, 0.45);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  /* ---- Confirm discard dialog ---- */
  .fm-confirm-overlay {
    position: absolute;
    inset: 0;
    background: rgba(17, 24, 39, 0.35);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    border-radius: 14px;
  }
  .fm-confirm {
    background: var(--sfx-up-bg, #fff);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding: 24px;
    max-width: 340px;
    width: 100%;
  }
  .fm-confirm-text {
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
    margin: 0 0 20px;
    line-height: 1.5;
  }
  .fm-confirm-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }

  .fm-modal {
    width: 980px;
    max-width: calc(100vw - 40px);
    height: 82vh;
    max-height: calc(100vh - 40px);
    background: var(--sfx-up-bg, #fff);
    border-radius: 14px;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Top bar ---- */
  .fm-topbar {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-topbar-title {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text, #1e293b);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fm-topbar-close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: background 0.15s ease, color 0.15s ease;
    flex-shrink: 0;
  }
  .fm-topbar-close:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }

  /* ---- Body ---- */
  .fm-body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .fm-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* ---- Table header ---- */
  .fm-table-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 24px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    border-left: 3px solid transparent;
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-secondary, #64748b);
    flex-shrink: 0;
  }
  .fm-th-check { width: 20px; flex-shrink: 0; }
  .fm-th-name {
    width: 244px; /* row-thumb (52) + row gap (12) + row-name (180) */
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover { color: var(--sfx-up-text-secondary, #64748b); }
  .fm-th-size { width: 70px; flex-shrink: 0; text-align: left; }
  .fm-th-field { flex: 1; min-width: 0; }

  .fm-sort-arrow {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin-left: 4px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  /* ---- Table body (scrollable) ---- */
  .fm-table-body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
  .fm-table-body::-webkit-scrollbar {
    width: 10px;
  }
  .fm-table-body::-webkit-scrollbar-track {
    background: transparent;
  }
  .fm-table-body::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  .fm-table-body::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  /* ---- Footer ---- */
  .fm-footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-top: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-footer .spacer { flex: 1; }

  /* ---- Shared buttons ---- */
  .btn-ghost,
  .btn-primary,
  .btn-back {
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
  .btn-ghost:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .btn-primary {
    background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
    color: #fff;
    box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
    position: relative;
    overflow: hidden;
  }
  .btn-primary:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--sfx-up-primary-hover, #1d4ed8), var(--sfx-up-primary, #2563eb));
    box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    transform: translateY(-1px);
  }
  .btn-primary:active { transform: translateY(0); }
  .btn-primary:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  .btn-back {
    background: none;
    color: var(--sfx-up-text-muted, #94a3b8);
    padding: 0 8px;
  }
  .btn-back:hover {
    color: var(--sfx-up-text-secondary, #64748b);
  }

  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }

  /* ---- Empty state ---- */
  .fm-empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 14px;
  }

  /* ---- Mobile / tablet responsive ----
     At <=768px the bulk modal goes fullscreen and restacks: sidebar
     on top as a horizontal scroll bar, table header is hidden (rows
     carry their own labels via stacked layout), footer buttons wrap. */
  @media (max-width: 768px) {
    .fm-overlay {
      padding: 0;
    }
    .fm-modal {
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
      border-radius: 0;
    }
    .fm-topbar {
      padding: 10px 14px;
    }
    .fm-body {
      flex-direction: column;
    }
    .fm-table-header {
      display: none;
    }
    .fm-th-name,
    .fm-th-size {
      width: auto;
    }
    .fm-footer {
      padding: 10px 12px;
      gap: 6px;
      flex-wrap: wrap;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 12px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    .fm-topbar-title {
      font-size: 13px;
    }
    .fm-footer {
      padding: 8px 10px;
    }
    .fm-footer .btn-ghost,
    .fm-footer .btn-primary,
    .fm-footer .btn-back {
      padding: 0 10px;
      font-size: 12px;
      height: 34px;
    }
  }

  ${Ye}
`, ft = b`
  :host {
    display: block;
    width: 260px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 12px 0;
    font-family: var(--sfx-up-font, inherit);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
  }
  :host::-webkit-scrollbar {
    width: 10px;
  }
  :host::-webkit-scrollbar-track {
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 5px;
  }
  :host::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.28);
    background-clip: padding-box;
  }

  .group-label {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px 6px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
    transition: background-color 0.12s ease, color 0.12s ease;
  }
  .group-label:first-child {
    margin-top: 0;
  }
  .group-label:hover {
    color: var(--sfx-up-text-secondary, #64748b);
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .group-label-text {
    flex: 1;
  }
  .group-chevron {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    transition: transform 0.18s ease;
  }
  .group-chevron.open {
    transform: rotate(180deg);
  }

  .field-item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 8px 12px 8px 32px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
    transition: background 0.12s ease;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    font-family: inherit;
  }
  .field-item:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .field-item.active {
    background: var(--sfx-up-primary-bg, #eff6ff);
    color: var(--sfx-up-primary, #2563eb);
    font-weight: 500;
  }

  .field-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    opacity: 0.55;
  }
  .field-icon svg {
    width: 16px;
    height: 16px;
  }
  .field-item.active .field-icon {
    opacity: 0.85;
  }

  .field-name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .field-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    flex-shrink: 0;
  }

  .field-required {
    color: var(--sfx-up-error, #dc2626);
    font-size: 13px;
    font-weight: 500;
    flex-shrink: 0;
  }

  /* ---- Mobile: sidebar becomes a horizontal scrollable tab bar on top,
     since the modal stacks vertically below 768px. Hide group labels and
     flatten all fields into one row. ---- */
  @media (max-width: 768px) {
    :host {
      width: 100%;
      max-height: 56px;
      min-height: 56px;
      border-right: none;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    :host::-webkit-scrollbar {
      height: 4px;
    }
    .group-label {
      display: none;
    }
    .field-item {
      height: 40px;
      padding: 8px 14px;
      width: auto;
      flex-shrink: 0;
      border-radius: 999px;
      margin: 0 4px;
      background: var(--sfx-up-border-light, #f1f5f9);
      font-size: 13px;
    }
    .field-item.active {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }
    .field-name {
      overflow: visible;
      text-overflow: unset;
    }
  }
`, ht = b`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .op-bar {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 24px;
    flex-shrink: 0;
  }

  /* Stacked field (label on top, control below) */
  .op-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }
  .op-field--operation {
    width: 200px;
    flex-shrink: 0;
  }
  .op-field--value {
    flex: 1;
    min-width: 0;
  }
  .op-field-label {
    font-size: 12px;
    font-weight: 400;
    color: var(--sfx-up-text-muted, #94a3b8);
    line-height: 1;
  }

  /* Operation dropdown */
  .op-dropdown-wrap {
    position: relative;
    width: 100%;
  }
  .op-trigger {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    background: var(--sfx-up-bg, #fff);
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    transition: border-color 0.12s ease, box-shadow 0.12s ease;
  }
  .op-trigger--static {
    cursor: default;
  }
  .op-trigger-label {
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .op-chevron {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--sfx-up-text-muted, #94a3b8);
    transition: transform 0.18s ease;
  }
  .op-trigger.open .op-chevron {
    transform: rotate(180deg);
  }
  .op-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    z-index: 20;
    background: var(--sfx-up-bg, #fff);
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .op-option {
    padding: 10px 12px;
    font-size: 14px;
    cursor: pointer;
    color: var(--sfx-up-text, #1e293b);
    font-family: inherit;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }
  .op-option:hover {
    background: var(--sfx-up-hover, #f1f5f9);
  }
  .op-option.active {
    color: var(--sfx-up-primary, #2563eb);
    background: var(--sfx-up-primary-bg, #eff6ff);
    font-weight: 500;
  }

  /* Value input area */
  .op-value {
    width: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .op-value > sfx-metadata-field-edit {
    flex: 1;
    min-width: 0;
  }


  /* Apply button — align with the TOP of the input column so it sits
     next to the control (not the bottom of multi-line textareas). The
     op-bar row uses align-items: flex-start, so this sits at the top. */
  .btn-apply {
    height: 36px;
    align-self: flex-start;
    margin-top: 18px; /* tuned to line up with input top edge */
    padding: 0 16px;
    border-radius: 6px;
    border: none;
    font-family: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    background: var(--sfx-up-primary, #2563eb);
    color: #fff;
    transition: all 0.15s ease;
    flex-shrink: 0;
  }
  .btn-apply:hover:not(:disabled) {
    background: var(--sfx-up-primary-hover, #1d4ed8);
  }
  .btn-apply:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* ---- Mobile: stack op-field rows vertically so the operation
     dropdown, value input, and Apply button each get full width. ---- */
  @media (max-width: 768px) {
    .op-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 12px 14px;
    }
    .op-field--operation {
      width: 100%;
    }
    .btn-apply {
      align-self: stretch;
      margin-top: 0;
      height: 38px;
      font-size: 14px;
    }
  }
`, xt = b`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 24px;
    border-left: 3px solid transparent;
  }

  .row-check { width: 20px; flex-shrink: 0; }

  .row-thumb {
    width: 52px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 6px;
    object-fit: cover;
    background: var(--sfx-up-border-light, #f1f5f9);
  }
  .row-thumb-fallback {
    object-fit: contain;
    padding: 2px;
    box-sizing: border-box;
  }

  .row-name {
    width: 180px;
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: var(--sfx-up-text, #1e293b);
  }

  .row-size {
    width: 70px;
    flex-shrink: 0;
    text-align: left;
    font-size: 13px;
    color: var(--sfx-up-text-muted, #94a3b8);
  }

  .row-field {
    flex: 1;
    min-width: 0;
    position: relative;
  }
  .row-field-edit {
    min-width: 0;
  }

  .row-error {
    font-size: 11px;
    color: var(--sfx-up-error, #dc2626);
    margin-top: 2px;
  }

  /* ---- Mobile: stack row contents vertically. Top row has
     checkbox + thumb + name, then size below name, and the field
     editor spans the full row width underneath. ---- */
  @media (max-width: 768px) {
    .row {
      flex-wrap: wrap;
      padding: 10px 14px;
      gap: 10px;
    }
    .row-name {
      flex: 1;
      width: auto;
      min-width: 0;
    }
    .row-size {
      width: auto;
      font-size: 12px;
    }
    .row-field {
      flex-basis: 100%;
      margin-left: 32px;
    }
  }

  @media (max-width: 440px) {
    .row {
      padding: 10px 12px;
    }
    .row-thumb {
      width: 44px;
      height: 32px;
    }
    .row-field {
      margin-left: 0;
    }
  }

  ${Ye}
`, bt = b`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .diff-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    min-height: 28px;
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* ---- Chips (array diff) ---- */
  .diff-chip {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 1.4;
  }
  .diff-chip--kept {
    background: var(--sfx-up-border-light, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }
  .diff-chip--added {
    background: #dcfce7;
    color: #166534;
    font-weight: 500;
  }
  .diff-chip--removed {
    background: #fee2e2;
    color: #991b1b;
  }
  .diff-chip--removed s {
    text-decoration: line-through;
  }

  /* ---- Scalar diff ---- */
  .diff-old {
    color: #991b1b;
  }
  .diff-old s {
    text-decoration: line-through;
    opacity: 0.7;
  }
  .diff-arrow {
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 13px;
    flex-shrink: 0;
  }
  .diff-new {
    color: #166534;
    font-weight: 500;
  }
  .diff-scalar-text {
    font-size: 14px;
  }

  /* ---- Accessibility ---- */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`, mt = b`
  :host {
    display: block;
  }
`;
var gt = Object.defineProperty, C = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && gt(e, t, i), i;
};
const Ee = class Ee extends k {
  constructor() {
    super(...arguments), this.files = [], this.config = null, this._activeFieldKey = "", this._staged = /* @__PURE__ */ new Map(), this._selected = /* @__PURE__ */ new Set(), this._sortAsc = !0, this._pendingOp = null, this._confirmVisible = !1, this._confirmResolve = null, this._originalFiles = /* @__PURE__ */ new Map(), this._onKeyDown = async (e) => {
      if (e.key !== "Escape") return;
      if (this._confirmVisible) {
        e.stopPropagation(), this._onConfirmCancel();
        return;
      }
      e.composedPath().some(
        (i) => i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement
      ) || await this._confirmDiscardPending() && this._emitClose();
    }, this._onConfirmOk = () => {
      var e;
      this._confirmVisible = !1, (e = this._confirmResolve) == null || e.call(this, !0), this._confirmResolve = null;
    }, this._onConfirmCancel = () => {
      var e;
      this._confirmVisible = !1, (e = this._confirmResolve) == null || e.call(this, !1), this._confirmResolve = null;
    }, this._onConfirmKeydown = (e) => {
      var a, d;
      if (e.key !== "Tab") return;
      const t = (a = this.shadowRoot) == null ? void 0 : a.querySelector(".fm-confirm");
      if (!t) return;
      const s = t.querySelectorAll("button");
      if (s.length === 0) return;
      const i = s[0], o = s[s.length - 1], r = (d = this.shadowRoot) == null ? void 0 : d.activeElement;
      e.shiftKey && r === i ? (e.preventDefault(), o.focus()) : !e.shiftKey && r === o && (e.preventDefault(), i.focus());
    }, this._onPendingChange = (e) => {
      const { operation: t, value: s } = e.detail, i = this._activeField;
      E(s) && (!i || oe(t, i.type)) ? this._pendingOp = null : this._pendingOp = { operation: t, value: s };
    }, this._onFieldSelect = async (e) => {
      await this._confirmDiscardPending() && (this._pendingOp = null, this._activeFieldKey = e.detail.fieldKey);
    }, this._onBulkApply = (e) => {
      var a, d, p;
      const t = this._activeField;
      if (!t) return;
      const { operation: s, value: i } = e.detail, o = (a = this.config) == null ? void 0 : a.language, r = [];
      for (const f of this._selected) {
        const u = this._staged.get(f), m = u != null && u.has(t.key) ? u.get(t.key) : ((p = (d = this._originalFiles.get(f)) == null ? void 0 : d.meta) == null ? void 0 : p[t.key]) ?? null, g = Me(
          t,
          m,
          i,
          s,
          o
        );
        r.push([f, t.key, g]);
      }
      this._setStagedBulk(r);
    }, this._onRowFieldChange = (e) => {
      const t = this._activeField;
      t && this._setStagedValue(e.detail.fileId, t.key, e.detail.value);
    }, this._onRowToggle = (e) => {
      const t = new Set(this._selected);
      t.has(e.detail.fileId) ? t.delete(e.detail.fileId) : t.add(e.detail.fileId), this._selected = t;
    }, this._onSelectAll = () => {
      this._selected.size === this.files.length ? this._selected = /* @__PURE__ */ new Set() : this._selected = new Set(this.files.map((e) => e.id));
    }, this._onSortToggle = () => {
      this._sortAsc = !this._sortAsc;
    }, this._onSave = async () => {
      if (!await this._confirmDiscardPending()) return;
      const e = [];
      for (const [t, s] of this._staged) {
        const i = this._originalFiles.get(t);
        if (!i) continue;
        const o = {};
        for (const [r, a] of s)
          JSON.stringify(a) !== JSON.stringify(i.meta[r]) && (o[r] = a);
        Object.keys(o).length > 0 && e.push({ fileId: t, meta: o });
      }
      this.dispatchEvent(
        new CustomEvent("metadata-save-batch", {
          detail: { changes: e },
          bubbles: !0,
          composed: !0
        })
      ), this._emitClose();
    }, this._onCancel = async () => {
      await this._confirmDiscardPending() && this._emitClose();
    }, this._onClose = async () => {
      await this._confirmDiscardPending() && this._emitClose();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._initStaged(), document.addEventListener("keydown", this._onKeyDown);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKeyDown), (e = this._confirmResolve) == null || e.call(this, !1), this._confirmResolve = null;
  }
  _initStaged() {
    var i, o;
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
    for (const r of this.files) {
      const a = /* @__PURE__ */ new Map();
      if (r.meta)
        for (const [d, p] of Object.entries(r.meta))
          a.set(d, p);
      e.set(r.id, a), t.add(r.id), s.set(r.id, r);
    }
    this._staged = e, this._selected = t, this._originalFiles = s, ((o = (i = this.schema) == null ? void 0 : i.fields) == null ? void 0 : o.length) > 0 && (this._activeFieldKey = this.schema.fields[0].key);
  }
  // -----------------------------------------------------------------------
  // Immutability helpers
  // -----------------------------------------------------------------------
  _setStagedValue(e, t, s) {
    const i = new Map(this._staged), o = new Map(i.get(e) ?? /* @__PURE__ */ new Map());
    o.set(t, s), i.set(e, o), this._staged = i;
  }
  _setStagedBulk(e) {
    const t = new Map(this._staged);
    for (const [s, i, o] of e) {
      const r = new Map(t.get(s) ?? /* @__PURE__ */ new Map());
      r.set(i, o), t.set(s, r);
    }
    this._staged = t;
  }
  // -----------------------------------------------------------------------
  // Active field + filled fields
  // -----------------------------------------------------------------------
  get _activeField() {
    var e, t;
    return (t = (e = this.schema) == null ? void 0 : e.fieldsByKey) == null ? void 0 : t.get(this._activeFieldKey);
  }
  /** Fields where ANY file has a non-empty staged value that differs from original. */
  get _filledFields() {
    var t, s;
    const e = /* @__PURE__ */ new Set();
    for (const i of ((t = this.schema) == null ? void 0 : t.fields) ?? [])
      for (const [o, r] of this._staged) {
        const a = r.get(i.key), d = (s = this._originalFiles.get(o)) == null ? void 0 : s.meta[i.key];
        if (a !== void 0 && !E(a) && JSON.stringify(a) !== JSON.stringify(d)) {
          e.add(i.key);
          break;
        }
      }
    return e;
  }
  // -----------------------------------------------------------------------
  // Event handlers
  // -----------------------------------------------------------------------
  get _hasPendingValue() {
    return this._pendingOp != null && !E(this._pendingOp.value);
  }
  /** Returns true if the caller should proceed; false if the user chose to stay. */
  _confirmDiscardPending() {
    return this._hasPendingValue ? new Promise((e) => {
      this._confirmResolve = e, this._confirmVisible = !0;
    }) : Promise.resolve(!0);
  }
  updated(e) {
    var t;
    (t = super.updated) == null || t.call(this, e), e.has("_confirmVisible") && this._confirmVisible && requestAnimationFrame(() => {
      var i;
      const s = (i = this.shadowRoot) == null ? void 0 : i.querySelector(".fm-confirm .btn-ghost");
      s == null || s.focus();
    });
  }
  _emitClose() {
    this.dispatchEvent(
      new CustomEvent("metadata-close", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  // -----------------------------------------------------------------------
  // Sorted files
  // -----------------------------------------------------------------------
  get _sortedFiles() {
    const e = [...this.files];
    return e.sort((t, s) => {
      const i = t.name.localeCompare(s.name) || t.id.localeCompare(s.id);
      return this._sortAsc ? i : -i;
    }), e;
  }
  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------
  render() {
    var o, r;
    if (!((r = (o = this.schema) == null ? void 0 : o.fields) != null && r.length))
      return l`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${(a) => a.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">Fill multiple assets</span>
              <button class="fm-topbar-close" @click=${this._onClose} title="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">No metadata fields configured</div>
          </div>
        </div>
      `;
    const e = this._activeField, t = this._sortedFiles, s = this._selected.size === this.files.length && this.files.length > 0, i = this._selected.size > 0 && !s;
    return l`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${(a) => a.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">Fill multiple assets</span>
            <button class="fm-topbar-close" @click=${this._onClose} title="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <!-- Body -->
          <div class="fm-body">
            <!-- Sidebar -->
            <sfx-bulk-meta-sidebar
              .schema=${this.schema}
              .activeFieldKey=${this._activeFieldKey}
              .filledFields=${this._filledFields}
              .config=${this.config}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              <!-- Op bar -->
              ${e ? l`
                    <sfx-bulk-meta-op-bar
                      .field=${e}
                      .autocomplete=${this.autocomplete}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  ` : h}

              <!-- Table header -->
              <div class="fm-table-header">
                <div class="fm-th-check">
                  <input
                    type="checkbox"
                    class="fm-checkbox"
                    .checked=${s}
                    .indeterminate=${i}
                    @change=${this._onSelectAll}
                  />
                </div>
                <div class="fm-th-name" @click=${this._onSortToggle}>
                  Name
                  <span class="fm-sort-arrow">${this._sortAsc ? "↑" : "↓"}</span>
                </div>
                <div class="fm-th-size">Size</div>
                <div class="fm-th-field">${(e == null ? void 0 : e.title) ?? ""}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${e ? l`
                      <sfx-bulk-meta-table
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                      ></sfx-bulk-meta-table>
                    ` : h}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 Back
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>Cancel</button>
            <button class="btn-primary" @click=${this._onSave}>Save</button>
          </div>

          ${this._confirmVisible ? l`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${(a) => a.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">You have unapplied bulk changes. Discard them?</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>Cancel</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>Discard</button>
                </div>
              </div>
            </div>
          ` : h}
        </div>
      </div>
    `;
  }
};
Ee.styles = [ut];
let v = Ee;
C([
  c({ attribute: !1 })
], v.prototype, "schema");
C([
  c({ attribute: !1 })
], v.prototype, "files");
C([
  c({ attribute: !1 })
], v.prototype, "config");
C([
  c({ attribute: !1 })
], v.prototype, "autocomplete");
C([
  x()
], v.prototype, "_activeFieldKey");
C([
  x()
], v.prototype, "_staged");
C([
  x()
], v.prototype, "_selected");
C([
  x()
], v.prototype, "_sortAsc");
C([
  x()
], v.prototype, "_pendingOp");
C([
  x()
], v.prototype, "_confirmVisible");
customElements.define("sfx-bulk-metadata-modal", v);
const ze = {
  // Short text — letter "A" + horizontal lines (UI-kit "case-sensitive" style)
  text: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,
  // Long text — three horizontal lines (paragraph)
  textarea: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${y`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,
  // List (single value) — radio button (circle with center dot)
  "select-one": l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,
  // List (multiple values) — single checkbox with check
  "multi-select": l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,
  // Boolean — toggle switch (off-state, knob on the left, outlined)
  boolean: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,
  // Date — calendar
  date: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,
  // Number (integer) — small "page" with "01" digits
  numeric: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,
  // Decimal — ".00 →"
  decimal2: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,
  // Geolocation — crosshair/target (Lucide crosshair-2)
  geopoint: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,
  // Numbered list — kept (numbered list pattern)
  "integer-list": l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${y`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,
  // Supertags — hash "#"
  tags: l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${y`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,
  // URI-type attachment — Lucide link icon (rescaled to 16×16 viewBox)
  "attachment-uri": l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${y`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`
};
function vt(n) {
  return ze[n] ?? ze.text;
}
var yt = Object.defineProperty, H = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && yt(e, t, i), i;
};
const Ae = class Ae extends k {
  constructor() {
    super(...arguments), this.activeFieldKey = "", this.filledFields = /* @__PURE__ */ new Set(), this.config = null, this._collapsed = /* @__PURE__ */ new Set(), this._isNarrow = !1, this._resizeTimer = null, this._onResize = () => {
      this._resizeTimer && clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(this._updateNarrow, 100);
    }, this._updateNarrow = () => {
      this._resizeTimer = null;
      const e = window.innerWidth <= 768;
      e !== this._isNarrow && (this._isNarrow = e);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._updateNarrow(), window.addEventListener("resize", this._onResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("resize", this._onResize), this._resizeTimer && (clearTimeout(this._resizeTimer), this._resizeTimer = null);
  }
  _isRequired(e) {
    var t, s;
    return (s = (t = this.config) == null ? void 0 : t.requiredFields) != null && s.includes(e.ckey) ? !0 : e.required === 1;
  }
  _toggleGroup(e) {
    const t = new Set(this._collapsed);
    t.has(e) ? t.delete(e) : t.add(e), this._collapsed = t;
  }
  _onFieldClick(e) {
    this.dispatchEvent(
      new CustomEvent("field-select", {
        detail: { fieldKey: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return this.schema ? l`
      ${this.schema.groups.map((e) => {
      const t = this._isNarrow || !this._collapsed.has(e.uuid);
      return l`
          <button
            class="group-label"
            @click=${() => this._toggleGroup(e.uuid)}
            aria-expanded=${t}
          >
            <span class="group-label-text">${e.name}</span>
            <svg class="group-chevron ${t ? "open" : ""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${t ? e.fields.map(
        (s) => l`
                  <button
                    class="field-item ${this.activeFieldKey === s.key ? "active" : ""}"
                    @click=${() => this._onFieldClick(s.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${vt(s.type)}</span>
                    <span class="field-name">${s.title}</span>
                    ${this.filledFields.has(s.key) ? l`<span class="field-dot"></span>` : h}
                    ${this._isRequired(s) ? l`<span class="field-required" aria-hidden="true">*</span>` : h}
                  </button>
                `
      ) : h}
        `;
    })}
    ` : h;
  }
};
Ae.styles = [ft];
let D = Ae;
H([
  c({ attribute: !1 })
], D.prototype, "schema");
H([
  c({ attribute: !1 })
], D.prototype, "activeFieldKey");
H([
  c({ attribute: !1 })
], D.prototype, "filledFields");
H([
  c({ attribute: !1 })
], D.prototype, "config");
H([
  x()
], D.prototype, "_collapsed");
H([
  x()
], D.prototype, "_isNarrow");
customElements.define("sfx-bulk-meta-sidebar", D);
var _t = Object.defineProperty, R = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && _t(e, t, i), i;
}, S;
const z = (S = class extends k {
  constructor() {
    super(...arguments), this.config = null, this.selectedCount = 0, this._operation = "SET", this._value = void 0, this._opDropdownOpen = !1, this._availableOps = [], this._onOpDropdownClose = (e) => {
      if (!this._opDropdownOpen) return;
      const t = this.renderRoot.querySelector(".op-dropdown-wrap");
      if (!t) return;
      e.composedPath().includes(t) || (this._opDropdownOpen = !1);
    }, this._onFieldBlur = (e) => {
      e.stopPropagation(), this._value = e.detail.value, this._emitPendingChange();
    }, this._onFieldChange = (e) => {
      e.stopPropagation(), this._value = e.detail.value, this._emitPendingChange();
    }, this._onFieldEscape = (e) => {
      e.stopPropagation();
    }, this._onValueKeydown = (e) => {
      var o;
      if (e.key !== "Enter") return;
      const t = (o = this.field) == null ? void 0 : o.type;
      if (!t || !S._ENTER_APPLY_TYPES.has(t)) return;
      const s = e.composedPath().find((r) => r instanceof HTMLElement);
      if ((s == null ? void 0 : s.tagName) === "TEXTAREA") return;
      e.preventDefault();
      const i = e.composedPath().find((r) => r instanceof HTMLInputElement);
      i && i.value !== void 0 && (this._value = i.value), this._onApply();
    };
  }
  static _emptyValueForType(e) {
    switch (e) {
      case "multi-select":
      case "tags":
      case "integer-list":
        return [];
      case "boolean":
        return "null";
      case "geopoint":
        return { latitude: "", longitude: "" };
      default:
        return "";
    }
  }
  get _effectiveValue() {
    var e;
    return this._value ?? S._emptyValueForType((e = this.field) == null ? void 0 : e.type);
  }
  willUpdate(e) {
    e.has("field") && this.field && (this._availableOps = ct(this.field.type), this._operation = "SET", this._value = void 0, this._emitPendingChange());
  }
  _onOpSelect(e) {
    this._operation = e, this._opDropdownOpen = !1, this._emitPendingChange();
  }
  _onOpToggle() {
    this._opDropdownOpen = !this._opDropdownOpen;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this._onOpDropdownClose, !0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._onOpDropdownClose, !0);
  }
  _emitPendingChange() {
    this.dispatchEvent(
      new CustomEvent("pending-change", {
        detail: { operation: this._operation, value: this._value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onApply() {
    var e;
    this._isApplyDisabled || (this.dispatchEvent(
      new CustomEvent("bulk-apply", {
        detail: {
          operation: this._operation,
          value: this._value
        },
        bubbles: !0,
        composed: !0
      })
    ), this._value = void 0, this._operation === "DELETE" && !oe(this._operation, (e = this.field) == null ? void 0 : e.type) && (this._operation = "SET"), this._emitPendingChange());
  }
  get _isApplyDisabled() {
    var e, t;
    if (this.selectedCount === 0) return !0;
    if (this._operation === "DELETE") {
      const s = /* @__PURE__ */ new Set(["multi-select", "tags", "integer-list"]), i = /* @__PURE__ */ new Set(["text", "textarea", "attachment-uri"]);
      return s.has((e = this.field) == null ? void 0 : e.type) ? E(this._value) : i.has((t = this.field) == null ? void 0 : t.type) ? E(this._value) : !1;
    }
    return E(this._value);
  }
  render() {
    if (!this.field) return h;
    const e = this._availableOps.length > 1, t = this._availableOps.find((s) => s.key === this._operation);
    return l`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">Operation</span>
          ${e ? l`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen ? "open" : ""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${(t == null ? void 0 : t.label) ?? "Set"}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  ${this._opDropdownOpen ? l`
                        <div class="op-menu">
                          ${this._availableOps.map(
      (s) => l`
                              <button
                                class="op-option ${s.key === this._operation ? "active" : ""}"
                                @click=${() => this._onOpSelect(s.key)}
                              >
                                ${s.label}
                              </button>
                            `
    )}
                        </div>
                      ` : h}
                </div>
              ` : l`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(t == null ? void 0 : t.label) ?? "Overwrite"}</span>
                </div>
              `}
        </div>

        ${oe(this._operation, this.field.type) ? l`
              <div class="op-field op-field--value">
                <span class="op-field-label">${this.field.title}</span>
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            ` : h}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `;
  }
}, S.styles = [ht], S._ENTER_APPLY_TYPES = /* @__PURE__ */ new Set([
  "text",
  "numeric",
  "decimal2",
  "date",
  "geopoint",
  "attachment-uri"
]), S);
R([
  c({ attribute: !1 })
], z.prototype, "field");
R([
  c({ attribute: !1 })
], z.prototype, "autocomplete");
R([
  c({ attribute: !1 })
], z.prototype, "config");
R([
  c({ type: Number })
], z.prototype, "selectedCount");
R([
  x()
], z.prototype, "_operation");
R([
  x()
], z.prototype, "_value");
R([
  x()
], z.prototype, "_opDropdownOpen");
let wt = z;
customElements.define("sfx-bulk-meta-op-bar", wt);
var kt = Object.defineProperty, j = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && kt(e, t, i), i;
};
const Ie = class Ie extends k {
  constructor() {
    super(...arguments), this.files = [], this.staged = /* @__PURE__ */ new Map(), this.selected = /* @__PURE__ */ new Set(), this.pendingOp = null, this.config = null;
  }
  _getEffectiveValue(e) {
    const t = this.staged.get(e.id);
    return t != null && t.has(this.field.key) ? t.get(this.field.key) : e.meta[this.field.key];
  }
  render() {
    return l`
      ${this.files.map(
      (e) => l`
          <sfx-bulk-meta-row
            .file=${e}
            .field=${this.field}
            .value=${this._getEffectiveValue(e)}
            .selected=${this.selected.has(e.id)}
            .pendingOp=${this.pendingOp}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
          ></sfx-bulk-meta-row>
        `
    )}
    `;
  }
};
Ie.styles = [mt];
let $ = Ie;
j([
  c({ attribute: !1 })
], $.prototype, "files");
j([
  c({ attribute: !1 })
], $.prototype, "field");
j([
  c({ attribute: !1 })
], $.prototype, "staged");
j([
  c({ attribute: !1 })
], $.prototype, "selected");
j([
  c({ attribute: !1 })
], $.prototype, "pendingOp");
j([
  c({ attribute: !1 })
], $.prototype, "config");
j([
  c({ attribute: !1 })
], $.prototype, "autocomplete");
customElements.define("sfx-bulk-meta-table", $);
var $t = Object.defineProperty, T = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && $t(e, t, i), i;
};
const Oe = class Oe extends k {
  constructor() {
    super(...arguments), this.selected = !1, this.pendingOp = null, this.config = null, this._error = null, this._onFieldBlur = (e) => {
      var r;
      e.stopPropagation();
      const { value: t } = e.detail, s = je(this.field, t, this.config ?? void 0);
      if (s) {
        this._error = s;
        return;
      }
      this._error = null;
      const i = {
        meta: { ...this.file.meta, [this.field.key]: this.value }
      }, o = ae(
        this.field,
        t,
        i,
        (r = this.config) == null ? void 0 : r.language
      );
      JSON.stringify(o) !== JSON.stringify(this.value) && this.dispatchEvent(
        new CustomEvent("row-field-change", {
          detail: { fileId: this.file.id, value: o },
          bubbles: !0,
          composed: !0
        })
      );
    };
  }
  willUpdate(e) {
    e.has("field") && (this._error = null);
  }
  _onCheckboxChange() {
    this.dispatchEvent(
      new CustomEvent("row-toggle", {
        detail: { fileId: this.file.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /** Compute what the value would become if the pending op were applied. */
  _computePreviewValue() {
    var t;
    const e = this.pendingOp;
    return !e || !this.field ? this.value : Me(
      this.field,
      this.value,
      e.value,
      e.operation,
      (t = this.config) == null ? void 0 : t.language
    );
  }
  _getExtension(e) {
    const t = e.lastIndexOf(".");
    return t > 0 ? e.slice(t + 1).toUpperCase() : "?";
  }
  render() {
    var t;
    const e = this.file;
    return l`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl ? l`<img class="row-thumb" src=${e.previewUrl} alt="" />` : l`<img class="row-thumb row-thumb-fallback"
              src=${He(this._getExtension(e.name))}
              alt="${this._getExtension(e.name)} file"
              @error=${(s) => {
      const i = s.target, o = Je();
      !i.dataset.fallback && i.src !== o && (i.dataset.fallback = "1", i.src = o);
    }}
            />`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size ? Ue(e.size) : "—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
        >
          ${this.pendingOp && this.selected ? l`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>` : l`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${Re(this.field, this.value, (t = this.config) == null ? void 0 : t.language)}
                  .autocomplete=${this.autocomplete}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error ? l`<div class="row-error" role="alert">${this._error}</div>` : h}`}
        </div>
      </div>
    `;
  }
};
Oe.styles = [xt];
let w = Oe;
T([
  c({ attribute: !1 })
], w.prototype, "file");
T([
  c({ attribute: !1 })
], w.prototype, "field");
T([
  c({ attribute: !1 })
], w.prototype, "value");
T([
  c({ type: Boolean })
], w.prototype, "selected");
T([
  c({ attribute: !1 })
], w.prototype, "pendingOp");
T([
  c({ attribute: !1 })
], w.prototype, "config");
T([
  c({ attribute: !1 })
], w.prototype, "autocomplete");
T([
  x()
], w.prototype, "_error");
customElements.define("sfx-bulk-meta-row", w);
const Ct = /* @__PURE__ */ new Set(["multi-select", "tags", "integer-list"]);
function Te(n, e, t) {
  return !e.regional_variants_group_uuid || n == null || typeof n != "object" || Array.isArray(n) ? n : n[t ?? "en"];
}
function Pe(n) {
  return Array.isArray(n) ? n : [];
}
function Fe(n) {
  return n == null || n === "" || Array.isArray(n) && n.length === 0 ? !0 : typeof n == "object" && !Array.isArray(n) ? !Object.values(n).some(
    (e) => e != null && e !== ""
  ) : !1;
}
function ne(n, e) {
  var s;
  const t = (s = n.possible_values) == null ? void 0 : s.find(
    (i) => i.internal_unique_value === e || i.api_value === e
  );
  return (t == null ? void 0 : t.label) ?? String(e);
}
function qe(n, e) {
  if (e == null || e === "") return "";
  switch (n.type) {
    case "boolean":
      return e === !0 ? "True" : e === !1 ? "False" : "None";
    case "date": {
      if (typeof e != "string" || e.length === 0) return "";
      try {
        return (/* @__PURE__ */ new Date(e + "T00:00")).toLocaleDateString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      } catch {
        return e;
      }
    }
    case "numeric": {
      const t = Number(e);
      return Number.isFinite(t) ? t.toLocaleString(void 0, { maximumFractionDigits: 0 }) : String(e);
    }
    case "decimal2": {
      const t = Number(e);
      return Number.isFinite(t) ? t.toLocaleString(void 0, { maximumFractionDigits: 2 }) : String(e);
    }
    case "select-one":
      return ne(n, String(e));
    case "geopoint": {
      if (typeof e == "object" && e !== null && !Array.isArray(e)) {
        const t = e;
        return !t.latitude && !t.longitude ? "" : `(${t.latitude ?? ""}, ${t.longitude ?? ""})`;
      }
      if (typeof e == "string") {
        const t = e.match(/^\((.+),(.+)\)$/);
        if (t) return `(${t[1].trim()}, ${t[2].trim()})`;
      }
      return String(e);
    }
    default:
      return String(e);
  }
}
function St(n, e) {
  const t = n.map((a) => typeof a == "string" ? a : String(a)), s = e.map((a) => typeof a == "string" ? a : String(a)), i = new Set(t), o = new Set(s), r = [];
  for (const a of s)
    r.push({ label: a, state: i.has(a) ? "kept" : "added" });
  for (const a of t)
    o.has(a) || r.push({ label: a, state: "removed" });
  return r;
}
function Et(n, e, t) {
  const s = new Set(n.map((r) => JSON.stringify(r))), i = new Set(e.map((r) => JSON.stringify(r))), o = [];
  for (const r of e) {
    const a = JSON.stringify(r), d = typeof r == "string" ? ne(t, r) : String(r);
    o.push({ label: d, state: s.has(a) ? "kept" : "added" });
  }
  for (const r of n) {
    const a = JSON.stringify(r);
    if (!i.has(a)) {
      const d = typeof r == "string" ? ne(t, r) : String(r);
      o.push({ label: d, state: "removed" });
    }
  }
  return o;
}
function At(n, e, t, s) {
  const i = s == null ? void 0 : s.language, o = Te(e, n, i), r = Te(t, n, i);
  if (Ct.has(n.type)) {
    const a = Pe(o), d = Pe(r);
    return n.type === "tags" ? { kind: "array", items: St(a, d) } : { kind: "array", items: Et(a, d, n) };
  }
  return {
    kind: "scalar",
    oldDisplay: qe(n, o),
    newDisplay: qe(n, r),
    oldEmpty: Fe(o),
    newEmpty: Fe(r)
  };
}
var It = Object.defineProperty, Z = (n, e, t, s) => {
  for (var i = void 0, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (i = r(e, t, i) || i);
  return i && It(e, t, i), i;
};
const De = class De extends k {
  constructor() {
    super(...arguments), this.config = null;
  }
  _renderArrayDiff(e) {
    return l`
      <div class="diff-wrap" aria-label="Bulk operation preview">
        ${e.items.length === 0 ? l`<span class="diff-chip diff-chip--kept" style="opacity:0.5">\u2014</span>` : e.items.map(
      (t) => l`
                <span
                  class="diff-chip diff-chip--${t.state}"
                  aria-label="${t.state === "added" ? "Added" : t.state === "removed" ? "Removed" : "Kept"}: ${t.label}"
                >
                  ${t.state === "removed" ? l`<s>${t.label}</s>` : t.label}
                </span>
              `
    )}
      </div>
    `;
  }
  _renderScalarDiff(e) {
    const t = `Will change from ${e.oldEmpty ? "empty" : e.oldDisplay} to ${e.newEmpty ? "empty" : e.newDisplay}`;
    return l`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${t}</span>
        ${e.newEmpty ? h : l`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `;
  }
  render() {
    if (!this.field) return h;
    const e = At(
      this.field,
      this.oldValue,
      this.newValue,
      this.config
    );
    return e.kind === "array" ? this._renderArrayDiff(e) : this._renderScalarDiff(e);
  }
};
De.styles = [bt];
let L = De;
Z([
  c({ attribute: !1 })
], L.prototype, "field");
Z([
  c({ attribute: !1 })
], L.prototype, "oldValue");
Z([
  c({ attribute: !1 })
], L.prototype, "newValue");
Z([
  c({ attribute: !1 })
], L.prototype, "config");
customElements.define("sfx-bulk-meta-diff-view", L);
export {
  v as SfxBulkMetadataModal,
  Pt as clearSchemaCache,
  Lt as createTagsAutocomplete,
  qt as deepMergeMeta,
  Tt as fetchMetadataSchema,
  Ft as getFilesWithMissingRequired,
  Qe as isAssetHasMetadataValue,
  E as isEmpty,
  Re as mapValueFromBackend,
  ae as mapValueToBackend,
  Le as parseMetadataSchema,
  je as validateField
};
