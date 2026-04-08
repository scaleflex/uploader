import { LitElement as w, css as x, nothing as f, html as a, svg as g } from "lit";
import { property as c, state as h } from "lit/decorators.js";
import { w as Ve } from "./sfx-uploader-rPA1OVpr.js";
function Fe(o, e) {
  const t = (e == null ? void 0 : e.language) ?? "en", s = o.model ?? [], i = o.store ?? {}, n = s.find((u) => u.applies_to === "FILES");
  let r = (n == null ? void 0 : n.groups) ?? [];
  if (Array.isArray(e == null ? void 0 : e.fields)) {
    const u = new Set(e.fields);
    r = r.map((k) => ({
      ...k,
      fields: k.fields.filter((_) => u.has(_.ckey))
    })).filter((k) => k.fields.length > 0);
  }
  r = r.map((u) => ({
    ...u,
    fields: u.fields.filter((k) => !k.hide)
  })).filter((u) => u.fields.length > 0);
  const l = r.flatMap((u) => u.fields), d = new Map(l.map((u) => [u.key, u])), p = i.force_filling_metadata_on_upload === !0, b = i.regional_variants_groups ?? [];
  return {
    groups: r,
    fields: l,
    fieldsByKey: d,
    forceFillingOnUpload: p,
    regionalVariantsGroups: b,
    language: t
  };
}
const Me = "https://hub.scaleflex.com/api", H = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
async function Ot(o, e, t, s) {
  const i = H.get(t);
  if (i) return i;
  const n = R.get(t);
  if (n) return n;
  if (s != null && s.rawMetadata) {
    const l = Fe(s.rawMetadata, s);
    return H.set(t, l), l;
  }
  const r = Je(e, t, s);
  R.set(t, r);
  try {
    const l = await r;
    return H.set(t, l), l;
  } finally {
    R.delete(t);
  }
}
async function Je(o, e, t) {
  var p, b, u;
  const i = `${(t == null ? void 0 : t.hubApiBase) ?? Me}/project/${encodeURIComponent(e)}`, n = (t == null ? void 0 : t.hubHeaders) ?? o, r = await fetch(i, { headers: n });
  if (!r.ok)
    throw new Error(
      `Failed to fetch metadata schema (HTTP ${r.status})`
    );
  const l = await r.json(), d = ((b = (p = l.data) == null ? void 0 : p.project) == null ? void 0 : b.data) ?? ((u = l.project) == null ? void 0 : u.data);
  if (!(d != null && d.metadata))
    throw new Error("No metadata in project response");
  return Fe(d.metadata, t);
}
function Dt(o) {
  var e;
  o ? (H.delete(o), (e = R.get(o)) == null || e.catch(() => {
  }), R.delete(o)) : (H.clear(), R.clear());
}
function Te(o, e, t) {
  let s = e;
  switch (o.regional_variants_group_uuid && s != null && typeof s == "object" && !Array.isArray(s) && (s = s[t ?? "en"]), o.type) {
    case "geopoint":
      return He(s);
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
function Q(o, e, t, s) {
  var n;
  let i;
  switch (o.type) {
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
        const r = e instanceof Date ? e : new Date(e), l = r.getFullYear(), d = String(r.getMonth() + 1).padStart(2, "0"), p = String(r.getDate()).padStart(2, "0");
        i = `${l}-${d}-${p}`;
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
  if (o.regional_variants_group_uuid) {
    const r = s ?? "en";
    return { ...((n = t == null ? void 0 : t.meta) == null ? void 0 : n[o.key]) ?? {}, [r]: i };
  }
  return i;
}
function He(o) {
  if (typeof o == "string") {
    const e = /\(([^)]+)\)/.exec(o);
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
function Le(o, e, t) {
  var i;
  if ((((i = t == null ? void 0 : t.requiredFields) == null ? void 0 : i.includes(o.ckey)) || o.required === 1) && A(e))
    return `${o.title} is required`;
  if (A(e)) return null;
  switch (o.type) {
    case "numeric": {
      const n = Number(e);
      if (!Number.isFinite(n)) return "Must be a valid number";
      if (!Number.isInteger(n)) return "Must be an integer";
      if (n < -1999999999 || n > 1999999999)
        return "Value out of range (±1,999,999,999)";
      break;
    }
    case "decimal2": {
      const n = Number(e);
      if (!Number.isFinite(n)) return "Must be a valid number";
      if (!/^\-?\d*\.?\d{0,2}$/.test(String(e)))
        return "Maximum 2 decimal places";
      if (n < -999999999999e-2 || n > 999999999999e-2)
        return "Value out of range (±9,999,999,999.99)";
      break;
    }
    case "geopoint": {
      const n = e, r = n.latitude !== "" && n.latitude != null, l = n.longitude !== "" && n.longitude != null;
      if (r !== l)
        return "Both latitude and longitude are required";
      if (r && l) {
        const d = Number(n.latitude), p = Number(n.longitude);
        if (!Number.isFinite(d) || d < -90 || d > 90)
          return "Latitude must be between -90 and 90";
        if (!Number.isFinite(p) || p < -180 || p > 180)
          return "Longitude must be between -180 and 180";
      }
      break;
    }
    case "attachment-uri": {
      try {
        const n = new URL(e);
        if (!["http:", "https:"].includes(n.protocol))
          return "Only http and https URLs are allowed";
      } catch {
        return "Invalid URI";
      }
      break;
    }
  }
  if (o.validation && typeof e == "string")
    try {
      if (!new RegExp(o.validation).test(e))
        return "Value does not match expected format";
    } catch {
    }
  return null;
}
function A(o) {
  return o == null ? !0 : Array.isArray(o) || typeof o == "string" ? o.length === 0 : typeof o == "object" ? !Object.values(o).some(
    (e) => e != null && e !== ""
  ) : !o;
}
function Ue(o) {
  return !A(o);
}
function zt(o, e, t) {
  const s = /* @__PURE__ */ new Set(["idle", "queued", "rejected"]), i = [...o.values()].filter(
    (d) => s.has(d.status)
  );
  if (i.length === 0) return {};
  const n = new Set((t == null ? void 0 : t.requiredFields) ?? []), r = e.fields.filter(
    (d) => d.required === 1 || n.has(d.ckey)
  ), l = {};
  for (const d of r) {
    const p = i.filter(
      (b) => !Ue(b.meta[d.key])
    );
    p.length > 0 && (l[d.key] = p);
  }
  return l;
}
function Pt(o, e) {
  const t = { ...o };
  for (const s of Object.keys(e)) {
    const i = e[s];
    if (i == null || i === "") continue;
    const n = o[s];
    if (Array.isArray(i))
      if (Array.isArray(n)) {
        const r = new Set(n.map((d) => JSON.stringify(d))), l = [...n];
        for (const d of i) {
          const p = JSON.stringify(d);
          r.has(p) || (r.add(p), l.push(d));
        }
        t[s] = l;
      } else
        t[s] = i;
    else
      t[s] = i;
  }
  return t;
}
function qt(o, e) {
  let t = null, s = null, i = !1;
  return {
    search(n, r, l) {
      if (t && clearTimeout(t), s && s.abort(), i = !1, !r.trim()) {
        l([]);
        return;
      }
      t = setTimeout(async () => {
        var d;
        s = new AbortController();
        try {
          const p = `${o}/v5/metadata/autocomplete?q=${encodeURIComponent(r.trim())}&meta_key=_${encodeURIComponent(n)}&limit=20`, b = await fetch(p, { headers: e, signal: s.signal });
          if (i) return;
          if (!b.ok) {
            l([]);
            return;
          }
          const u = await b.json();
          if (i) return;
          const k = ((d = u.data) == null ? void 0 : d.tags) ?? u.tags ?? [];
          l(
            k.map((_) => ({
              sid: _.sid || void 0,
              value: _.tag || _.value || _.label || "",
              label: _.tag || _.label || _.value || ""
            }))
          );
        } catch {
          i || l([]);
        }
      }, 200);
    },
    cancel() {
      i = !0, t && clearTimeout(t), s && s.abort();
    }
  };
}
var Ye = Object.defineProperty, V = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && Ye(e, t, i), i;
};
const pe = class pe extends w {
  constructor() {
    super(...arguments), this.schema = null, this.meta = {}, this.config = null, this.disabled = !1, this._collapsed = /* @__PURE__ */ new Set();
  }
  _toggleGroup(e) {
    const t = new Set(this._collapsed);
    t.has(e) ? t.delete(e) : t.add(e), this._collapsed = t;
  }
  _renderGroup(e) {
    const t = !this._collapsed.has(e.uuid);
    return a`
      <div class="group">
        <button class="group-header"
          @click=${() => this._toggleGroup(e.uuid)}
          aria-expanded=${t}>
          <span>${e.name}</span>
          <svg class="chevron ${t ? "open" : ""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${t ? a`
              <div class="group-content">
                ${e.fields.map(
      (s) => a`
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
            ` : f}
      </div>
    `;
  }
  render() {
    return !this.schema || this.schema.groups.length === 0 ? a`<div class="empty">No metadata fields configured</div>` : a`
      ${this.schema.groups.map((e) => this._renderGroup(e))}
    `;
  }
};
pe.styles = x`
    :host { display: block; }

    .group {
      padding-bottom: 4px;
    }
    .group + .group {
      border-top: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 14px 0 8px;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 15px;
      font-weight: 600;
      color: var(--sfx-up-text, #1e293b);
      transition: color 0.12s ease;
    }
    .group-header:hover {
      color: var(--sfx-up-primary, #2563eb);
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
      padding: 0 0 4px;
    }

    .empty {
      padding: 24px 16px;
      text-align: center;
      font-size: 14px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }
  `;
let C = pe;
V([
  c({ attribute: !1 })
], C.prototype, "schema");
V([
  c({ attribute: !1 })
], C.prototype, "meta");
V([
  c({ attribute: !1 })
], C.prototype, "config");
V([
  c({ attribute: !1 })
], C.prototype, "autocomplete");
V([
  c({ type: Boolean })
], C.prototype, "disabled");
V([
  h()
], C.prototype, "_collapsed");
customElements.define("sfx-metadata-form", C);
const G = x`
  input, textarea, select {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    background: var(--sfx-up-bg, #fff);
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    box-sizing: border-box;
  }
  input:focus, textarea:focus, select:focus {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow: 0 0 0 3px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.15));
  }
  input:disabled, textarea:disabled, select:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`, ae = x`
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
  }
  .trigger:focus-visible {
    border-color: var(--sfx-up-primary, #2563eb);
    box-shadow: 0 0 0 3px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.15));
    outline: none;
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
`, Be = x`
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
x`
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
    padding: 12px 16px;
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
const Ge = x`
  :host { display: block; }

  .field-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 10px 0;
  }

  .field-label {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 120px;
    flex-shrink: 0;
  }
  .field-label-text {
    font-size: 14px;
    font-weight: 400;
    color: var(--sfx-up-text-muted, #94a3b8);
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
`;
var We = Object.defineProperty, M = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && We(e, t, i), i;
};
const ue = class ue extends w {
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
    const { key: t, value: s } = e.detail, i = Le(this.field, s, this.config ?? void 0);
    if (i) {
      this._error = i;
      return;
    }
    this._error = null;
    const n = Q(this.field, s, void 0, (r = this.config) == null ? void 0 : r.language);
    this._dispatching = !0, this.dispatchEvent(
      new CustomEvent("field-blur", {
        detail: { key: t, value: n },
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
        return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
      case "textarea":
        return a`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;
      case "select-one":
        return a`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-select-field>`;
      case "multi-select":
        return a`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-multi-select-field>`;
      case "tags":
        return a`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;
      case "boolean":
        return a`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;
      case "numeric":
      case "decimal2":
        return a`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;
      case "date":
        return a`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;
      case "geopoint":
        return a`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;
      default:
        return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
    }
  }
  render() {
    var s;
    const e = this.field;
    if (!e) return f;
    const t = Te(e, this.value, (s = this.config) == null ? void 0 : s.language);
    return a`
      <div class="field-row" aria-required=${this._isRequired ? "true" : "false"}>
        <div class="field-label" id="label-${e.key}">
          <span class="field-label-text">${e.title}</span>
          ${this._isRequired ? a`<span class="field-required" aria-hidden="true">*</span>` : f}
        </div>
        <div class="field-content">
          ${this._renderField(e, t)}
          ${this._error ? a`<div class="field-error" id="error-${e.key}" role="alert">${this._error}</div>` : f}
        </div>
      </div>
    `;
  }
};
ue.styles = [Ge];
let S = ue;
M([
  c({ attribute: !1 })
], S.prototype, "field");
M([
  c({ attribute: !1 })
], S.prototype, "value");
M([
  c({ attribute: !1 })
], S.prototype, "config");
M([
  c({ attribute: !1 })
], S.prototype, "autocomplete");
M([
  c({ type: Boolean })
], S.prototype, "disabled");
M([
  h()
], S.prototype, "_error");
customElements.define("sfx-metadata-field", S);
var Ze = Object.defineProperty, le = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && Ze(e, t, i), i;
};
class v extends w {
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
le([
  c({ attribute: !1 })
], v.prototype, "field");
le([
  c({ attribute: !1 })
], v.prototype, "value");
le([
  c({ type: Boolean })
], v.prototype, "disabled");
const fe = class fe extends v {
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
    return a`
      <input
        type="text"
        .value=${this.value ?? ""}
        placeholder=${((e = this.field) == null ? void 0 : e.placeholder) ?? ""}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `;
  }
};
fe.styles = [G];
let te = fe;
customElements.define("sfx-meta-text-field", te);
const he = class he extends v {
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
    var e;
    return a`
      <textarea
        .value=${this.value ?? ""}
        placeholder=${((e = this.field) == null ? void 0 : e.placeholder) ?? ""}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `;
  }
};
he.styles = [
  G,
  x`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `
];
let ie = he;
customElements.define("sfx-meta-textarea-field", ie);
var Qe = Object.defineProperty, de = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && Qe(e, t, i), i;
};
const xe = class xe extends v {
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
    var e;
    return a`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${() => !this._open && this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel ? a`<span>${this._selectedLabel}</span>` : a`<span class="placeholder">${((e = this.field) == null ? void 0 : e.placeholder) ?? "Select..."}</span>`}
      </button>

      ${this._open ? a`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search..."
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length ? this._filtered.map((t, s) => a`
                <div class="option ${t.value === this.value ? "selected" : ""} ${s === this._activeIndex ? "active" : ""}"
                  role="option" aria-selected=${t.value === this.value}
                  @mousedown=${(i) => {
      i.preventDefault(), this._onSelect(t);
    }}
                  @mouseenter=${() => {
      this._activeIndex = s;
    }}>
                  ${t.label}
                </div>`) : a`<div class="empty">No options</div>`}
        </div>
      ` : f}
    `;
  }
};
xe.styles = [ae];
let N = xe;
de([
  h()
], N.prototype, "_open");
de([
  h()
], N.prototype, "_search");
de([
  h()
], N.prototype, "_activeIndex");
customElements.define("sfx-meta-select-field", N);
var Xe = Object.defineProperty, ce = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && Xe(e, t, i), i;
};
const be = class be extends v {
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
    var t;
    const e = this._selected;
    return a`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${() => !this._open && this._openDropdown()} @keydown=${this._onKeydown}>
        ${e.length ? e.map((s) => a`
              <span class="chip">
                ${this._labelFor(s)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(s)}" @click=${(i) => {
      i.stopPropagation(), this._remove(s);
    }}>&times;</button>
              </span>`) : a`<span class="placeholder">${((t = this.field) == null ? void 0 : t.placeholder) ?? "Select..."}</span>`}
      </div>

      ${this._open ? a`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search..."
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length ? this._filtered.map((s, i) => a`
                <div class="option ${i === this._activeIndex ? "active" : ""}" role="option" aria-selected=${e.includes(s.value)}
                  @mousedown=${(n) => {
      n.preventDefault(), this._toggle(s);
    }}
                  @mouseenter=${() => {
      this._activeIndex = i;
    }}>
                  <span class="check ${e.includes(s.value) ? "checked" : ""}">
                    ${e.includes(s.value) ? "✓" : ""}
                  </span>
                  ${s.label}
                </div>`) : a`<div class="empty">No options</div>`}
        </div>
      ` : f}
    `;
  }
};
be.styles = [
  ae,
  Be,
  x`
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
    `
];
let K = be;
ce([
  h()
], K.prototype, "_open");
ce([
  h()
], K.prototype, "_search");
ce([
  h()
], K.prototype, "_activeIndex");
customElements.define("sfx-meta-multi-select-field", K);
function P(o, e) {
  var t, s;
  return ((t = o.label) == null ? void 0 : t.trim().toLowerCase()) === ((s = e.label) == null ? void 0 : s.trim().toLowerCase());
}
function je(o) {
  return o.trim().replace(/\s+/g, " ");
}
function et(o) {
  return je(o).replace(/\s/g, "-");
}
function Z(o) {
  return { label: je(o), value: et(o) };
}
var tt = Object.defineProperty, J = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && tt(e, t, i), i;
};
const ge = class ge extends v {
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
    var s, i, n;
    const t = e.target.value;
    if (this._query = t, this._dropdownOpen = !0, this._activeIndex = -1, !t.trim() || !((s = this.field) != null && s.ckey)) {
      this._results = [], this._loading = !1, (i = this.autocomplete) == null || i.cancel();
      return;
    }
    this._loading = !0, (n = this.autocomplete) == null || n.search(this.field.ckey, t, (r) => {
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
          this._activeIndex >= 0 && this._activeIndex < s.length ? this._addTag(s[this._activeIndex]) : this._activeIndex === s.length && this._canCreate ? this._addTag(Z(this._query)) : this._activeIndex === -1 && this._canCreate ? this._addTag(Z(this._query)) : this._activeIndex === -1 && s.length && this._addTag(s[0]);
          break;
        }
      }
  }
  get _suggestions() {
    var n;
    const e = this._query.toLowerCase().trim(), t = this._tags, s = (((n = this.field) == null ? void 0 : n.possible_values) ?? []).map((r) => ({ value: r.api_value || r.internal_unique_value, label: r.label })).filter((r) => !t.some((l) => P(l, r))).filter((r) => !e || r.label.toLowerCase().includes(e)), i = this._results.filter(
      (r) => !t.some((l) => P(l, r)) && !s.some((l) => P(l, r))
    );
    return [...s, ...i];
  }
  get _canCreate() {
    const e = this._query.trim();
    if (!e || this._loading) return !1;
    const t = Z(e);
    return !this._tags.some((s) => P(s, t)) && !this._suggestions.some((s) => P(s, t));
  }
  render() {
    var i, n;
    const e = this._tags, t = this._suggestions, s = t.length;
    return a`
      <div class="container" @click=${() => {
      var r;
      return (r = this.renderRoot.querySelector(".input")) == null ? void 0 : r.focus();
    }}>
        ${e.map((r) => a`
          <span class="chip">
            ${r.label}
            <button class="chip-x" aria-label="Remove ${r.label}" @click=${(l) => {
      l.stopPropagation(), this._removeTag(r);
    }}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((i = this.field) == null ? void 0 : i.title) ?? "Tags"}
          placeholder=${e.length ? "" : ((n = this.field) == null ? void 0 : n.placeholder) ?? "Add tags..."}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen && (this._query.trim() || t.length) ? a`
        <div class="dropdown" role="listbox">
          ${this._loading ? a`<div class="loading">Loading...</div>` : f}
          ${t.map((r, l) => a`
            <div class="option ${l === this._activeIndex ? "active" : ""}" role="option"
              @mousedown=${(d) => {
      d.preventDefault(), this._addTag(r);
    }}
              @mouseenter=${() => {
      this._activeIndex = l;
    }}>
              ${r.label}
            </div>`)}
          ${this._canCreate ? a`
            <div class="option create ${s === this._activeIndex ? "active" : ""}"
              @mousedown=${(r) => {
      r.preventDefault(), this._addTag(Z(this._query));
    }}
              @mouseenter=${() => {
      this._activeIndex = s;
    }}>
              Create '${this._query.trim()}'
            </div>` : f}
          ${!this._loading && !t.length && !this._canCreate ? a`<div class="empty">No results</div>` : f}
        </div>
      ` : f}
    `;
  }
};
ge.styles = [
  Be,
  x`
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
        box-shadow: 0 0 0 3px var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.15));
      }

      .input {
        flex: 1;
        min-width: 80px;
        border: none;
        outline: none;
        font-size: 14px;
        font-family: inherit;
        color: var(--sfx-up-text, #1e293b);
        background: transparent;
        padding: 2px 0;
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
let I = ge;
J([
  c({ attribute: !1 })
], I.prototype, "autocomplete");
J([
  h()
], I.prototype, "_query");
J([
  h()
], I.prototype, "_results");
J([
  h()
], I.prototype, "_loading");
J([
  h()
], I.prototype, "_dropdownOpen");
J([
  h()
], I.prototype, "_activeIndex");
customElements.define("sfx-meta-tags-field", I);
var it = Object.defineProperty, Re = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && it(e, t, i), i;
};
const q = [
  { label: "True", value: "true" },
  { label: "False", value: "false" },
  { label: "None", value: "null" }
], me = class me extends v {
  constructor() {
    super(...arguments), this._open = !1, this._activeIndex = -1, this._boundOutsideClick = this._onOutsideClick.bind(this);
  }
  get _currentLabel() {
    var t;
    const e = String(this.value ?? "null");
    return ((t = q.find((s) => s.value === e)) == null ? void 0 : t.label) ?? "";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousedown", this._boundOutsideClick);
  }
  _openDropdown() {
    this._open = !0;
    const e = String(this.value ?? "null");
    this._activeIndex = Math.max(q.findIndex((t) => t.value === e), 0), document.addEventListener("mousedown", this._boundOutsideClick), this.updateComplete.then(() => {
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
        e.preventDefault(), this._activeIndex = Math.min(this._activeIndex + 1, q.length - 1), this._scrollActive();
        break;
      case "ArrowUp":
        e.preventDefault(), this._activeIndex = Math.max(this._activeIndex - 1, 0), this._scrollActive();
        break;
      case "Home":
        e.preventDefault(), this._activeIndex = 0, this._scrollActive();
        break;
      case "End":
        e.preventDefault(), this._activeIndex = q.length - 1, this._scrollActive();
        break;
      case "Enter":
      case " ":
        this._activeIndex >= 0 && this._activeIndex < q.length && (e.preventDefault(), this._onSelect(q[this._activeIndex], !0));
        break;
    }
  }
  render() {
    const e = String(this.value ?? "null");
    return a`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${() => !this._open && this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel ? a`<span>${this._currentLabel}</span>` : a`<span class="placeholder">Select...</span>`}
      </button>

      ${this._open ? a`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${q.map((t, s) => a`
            <div class="option ${t.value === e ? "selected" : ""} ${s === this._activeIndex ? "active" : ""}"
              role="option" aria-selected=${t.value === e}
              @mousedown=${(i) => {
      i.preventDefault(), this._onSelect(t);
    }}
              @mouseenter=${() => {
      this._activeIndex = s;
    }}>
              ${t.label}
            </div>`)}
        </div>
      ` : f}
    `;
  }
};
me.styles = [ae];
let U = me;
Re([
  h()
], U.prototype, "_open");
Re([
  h()
], U.prototype, "_activeIndex");
customElements.define("sfx-meta-boolean-field", U);
const ve = class ve extends v {
  get _step() {
    var e;
    return ((e = this.field) == null ? void 0 : e.type) === "decimal2" ? "0.01" : "1";
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
    return a`
      <input
        type="number"
        step=${this._step}
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
ve.styles = [G];
let se = ve;
customElements.define("sfx-meta-number-field", se);
const _e = class _e extends v {
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
    return a`
      <input
        type="date"
        .value=${this._dateStr}
        ?disabled=${this.disabled}
        @change=${this._onChange}
        @keydown=${this._onKeydown}
      />
    `;
  }
};
_e.styles = [G];
let re = _e;
customElements.define("sfx-meta-date-field", re);
const ye = class ye extends v {
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
    return a`
      <div class="grid">
        <div>
          <label>Latitude</label>
          <input type="number" step="any" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${(t) => this._onInput("latitude", t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>Longitude</label>
          <input type="number" step="any" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${(t) => this._onInput("longitude", t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `;
  }
};
ye.styles = [
  G,
  x`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        color: var(--sfx-up-text-secondary, #64748b);
        margin-bottom: 4px;
      }
    `
];
let ne = ye;
customElements.define("sfx-meta-geo-point-field", ne);
var st = Object.defineProperty, X = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && st(e, t, i), i;
};
const we = class we extends w {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  render() {
    const e = this.field, t = this.value, s = this.disabled;
    switch (e.type) {
      case "text":
      case "attachment-uri":
        return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
      case "textarea":
        return a`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-textarea-field>`;
      case "select-one":
        return a`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-select-field>`;
      case "multi-select":
        return a`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-multi-select-field>`;
      case "tags":
        return a`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${s}></sfx-meta-tags-field>`;
      case "boolean":
        return a`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-boolean-field>`;
      case "numeric":
      case "decimal2":
        return a`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-number-field>`;
      case "date":
        return a`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-date-field>`;
      case "geopoint":
        return a`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-geo-point-field>`;
      default:
        return a`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${s}></sfx-meta-text-field>`;
    }
  }
};
we.styles = x`
    :host { display: block; }
  `;
let T = we;
X([
  c({ attribute: !1 })
], T.prototype, "field");
X([
  c({ attribute: !1 })
], T.prototype, "value");
X([
  c({ attribute: !1 })
], T.prototype, "autocomplete");
X([
  c({ type: Boolean })
], T.prototype, "disabled");
customElements.define("sfx-metadata-field-edit", T);
var rt = Object.defineProperty, Ne = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && rt(e, t, i), i;
};
const ke = class ke extends w {
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
        const n = Number(e);
        return Number.isFinite(n) ? n.toLocaleString(void 0, {
          maximumFractionDigits: t === "decimal2" ? 2 : 0
        }) : String(e);
      }
      case "select-one": {
        if (e == null || e === "") return "";
        const n = (i = this.field.possible_values) == null ? void 0 : i.find(
          (r) => r.internal_unique_value === e || r.api_value === e
        );
        return (n == null ? void 0 : n.label) ?? String(e);
      }
      case "multi-select":
        return !Array.isArray(e) || e.length === 0 ? "" : e.map((n) => {
          var l;
          const r = (l = this.field.possible_values) == null ? void 0 : l.find(
            (d) => d.internal_unique_value === n || d.api_value === n
          );
          return (r == null ? void 0 : r.label) ?? String(n);
        }).join(", ");
      case "tags":
        return !Array.isArray(e) || e.length === 0 ? "" : e.map((n) => n.label || n.value).join(", ");
      case "geopoint": {
        const n = e;
        return !n || n.latitude === "" || n.latitude == null || n.longitude === "" || n.longitude == null ? "" : `(${n.latitude}, ${n.longitude})`;
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
    return ((s = this.field) == null ? void 0 : s.type) === "attachment-uri" && !t ? a`
        <div class="value">
          <a class="link" href=${e} target="_blank" rel="noopener noreferrer"
            @click=${(i) => i.stopPropagation()}
          >${e}</a>
        </div>
      ` : a`
      <div class="value ${t ? "empty" : ""}">${t ? "—" : e}</div>
    `;
  }
};
ke.styles = x`
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
let Y = ke;
Ne([
  c({ attribute: !1 })
], Y.prototype, "field");
Ne([
  c({ attribute: !1 })
], Y.prototype, "value");
customElements.define("sfx-metadata-field-view", Y);
const Ae = { key: "SET", label: "Set" }, nt = { key: "ADD", label: "Add" }, ot = { key: "DELETE", label: "Delete" }, at = /* @__PURE__ */ new Set([
  "multi-select",
  "tags",
  "integer-list"
]);
function lt(o) {
  return at.has(o) ? [Ae, nt, ot] : [Ae];
}
function Ke(o, e, t, s) {
  switch (o) {
    case "SET":
      return t;
    case "ADD": {
      const i = Array.isArray(e) ? e : [], n = Array.isArray(t) ? t : [];
      if (n.length === 0) return i;
      if (s === "tags") {
        const d = new Set(i.map((b) => b)), p = [...i];
        for (const b of n) {
          const u = typeof b == "string" ? b : String(b);
          d.has(u) || (d.add(u), p.push(u));
        }
        return p;
      }
      const r = new Set(i.map((d) => JSON.stringify(d))), l = [...i];
      for (const d of n) {
        const p = JSON.stringify(d);
        r.has(p) || (r.add(p), l.push(d));
      }
      return l;
    }
    case "DELETE": {
      const i = Array.isArray(e) ? e : [], n = Array.isArray(t) ? t : [];
      if (n.length === 0) return i;
      if (s === "tags") {
        const l = new Set(
          n.map((d) => typeof d == "string" ? d : String(d))
        );
        return i.filter(
          (d) => !l.has(typeof d == "string" ? d : String(d))
        );
      }
      const r = new Set(
        n.map((l) => JSON.stringify(l))
      );
      return i.filter(
        (l) => !r.has(JSON.stringify(l))
      );
    }
    default:
      return t;
  }
}
const dt = x`
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
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
  }
  .fm-topbar-title {
    flex: 1;
    font-size: 15px;
    font-weight: 600;
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
    font-size: 12px;
    font-weight: 500;
    color: var(--sfx-up-text-muted, #94a3b8);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    flex-shrink: 0;
  }
  .fm-th-check { width: 20px; flex-shrink: 0; }
  .fm-th-thumb { width: 52px; flex-shrink: 0; }
  .fm-th-name {
    width: 180px;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fm-th-name:hover { color: var(--sfx-up-text-secondary, #64748b); }
  .fm-th-size { width: 70px; flex-shrink: 0; text-align: right; }
  .fm-th-field { flex: 1; min-width: 0; }

  .fm-sort-arrow {
    display: inline-block;
    font-size: 11px;
    line-height: 1;
  }

  /* ---- Table body (scrollable) ---- */
  .fm-table-body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
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

  /* ---- Checkbox ---- */
  .fm-checkbox {
    width: 16px;
    height: 16px;
    accent-color: var(--sfx-up-primary, #2563eb);
    cursor: pointer;
    margin: 0;
  }
`, ct = x`
  :host {
    display: block;
    width: 220px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 12px 0;
    font-family: var(--sfx-up-font, inherit);
  }

  .group-label {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
    padding: 12px 16px 6px;
    margin-top: 8px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--sfx-up-text-muted, #94a3b8);
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    text-align: left;
  }
  .group-label:first-child {
    margin-top: 0;
  }
  .group-label:hover {
    color: var(--sfx-up-text-secondary, #64748b);
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
    padding: 0 16px;
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
`, pt = x`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .op-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 24px;
    border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    flex-shrink: 0;
  }

  .op-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--sfx-up-text-muted, #94a3b8);
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Operation dropdown */
  .op-dropdown-wrap {
    position: relative;
    flex-shrink: 0;
  }
  .op-trigger {
    height: 34px;
    padding: 0 10px;
    border: 1px solid var(--sfx-up-border, #e2e8f0);
    border-radius: 6px;
    background: var(--sfx-up-bg, #fff);
    font-size: 14px;
    font-family: inherit;
    color: var(--sfx-up-text, #1e293b);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 80px;
  }
  .op-trigger:hover {
    border-color: var(--sfx-up-primary, #2563eb);
  }
  .op-arrow {
    margin-left: auto;
    font-size: 10px;
    color: var(--sfx-up-text-muted, #94a3b8);
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
    padding: 8px 10px;
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
    font-weight: 500;
  }

  /* Value input area */
  .op-value {
    flex: 1;
    min-width: 0;
  }

  /* Clear button */
  .btn-clear {
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 6px;
    background: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    flex-shrink: 0;
    transition: background 0.12s ease, color 0.12s ease;
  }
  .btn-clear:hover {
    background: var(--sfx-up-hover, #f1f5f9);
    color: var(--sfx-up-text-secondary, #64748b);
  }

  /* Apply button */
  .btn-apply {
    height: 34px;
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
`, ut = x`
  :host {
    display: block;
    font-family: var(--sfx-up-font, inherit);
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 24px;
    border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
    border-left: 3px solid transparent;
    transition: background 0.1s ease;
  }
  .row:hover {
    background: var(--sfx-up-hover, #f1f5f9);
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
  .row-thumb-placeholder {
    width: 52px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--sfx-up-border-light, #f1f5f9);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sfx-up-text-muted, #94a3b8);
    font-size: 11px;
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
    text-align: right;
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

  .row--changed {
    border-left-color: var(--sfx-up-success, #16a34a);
  }

  .fm-checkbox {
    width: 16px;
    height: 16px;
    accent-color: var(--sfx-up-primary, #2563eb);
    cursor: pointer;
    margin: 0;
  }
`, ft = x`
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
`, ht = x`
  :host {
    display: block;
  }
`;
var xt = Object.defineProperty, E = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && xt(e, t, i), i;
};
const $e = class $e extends w {
  constructor() {
    super(...arguments), this.files = [], this.config = null, this._activeFieldKey = "", this._staged = /* @__PURE__ */ new Map(), this._selected = /* @__PURE__ */ new Set(), this._sortAsc = !0, this._pendingOp = null, this._originalFiles = /* @__PURE__ */ new Map(), this._onKeyDown = (e) => {
      e.key !== "Escape" || e.composedPath().some(
        (i) => i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement
      ) || this._confirmDiscardPending() && this._emitClose();
    }, this._onPendingChange = (e) => {
      const { operation: t, value: s } = e.detail;
      A(s) ? this._pendingOp = null : this._pendingOp = { operation: t, value: s };
    }, this._onFieldSelect = (e) => {
      this._confirmDiscardPending() && (this._pendingOp = null, this._activeFieldKey = e.detail.fieldKey);
    }, this._onBulkApply = (e) => {
      var l;
      const t = this._activeField;
      if (!t) return;
      const { operation: s, value: i } = e.detail, n = (l = this.config) == null ? void 0 : l.language, r = [];
      for (const d of this._selected) {
        const p = this._staged.get(d), b = {
          meta: p ? Object.fromEntries(p) : {}
        }, u = Q(
          t,
          i,
          b,
          n
        ), k = p == null ? void 0 : p.get(t.key), _ = Ke(
          s,
          k,
          u,
          t.type
        );
        r.push([d, t.key, _]);
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
    }, this._onSave = () => {
      if (!this._confirmDiscardPending()) return;
      const e = [];
      for (const [t, s] of this._staged) {
        const i = this._originalFiles.get(t);
        if (!i) continue;
        const n = {};
        for (const [r, l] of s)
          JSON.stringify(l) !== JSON.stringify(i.meta[r]) && (n[r] = l);
        Object.keys(n).length > 0 && e.push({ fileId: t, meta: n });
      }
      this.dispatchEvent(
        new CustomEvent("metadata-save-batch", {
          detail: { changes: e },
          bubbles: !0,
          composed: !0
        })
      ), this._emitClose();
    }, this._onCancel = () => {
      this._confirmDiscardPending() && this._emitClose();
    }, this._onClose = () => {
      this._confirmDiscardPending() && this._emitClose();
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._initStaged(), document.addEventListener("keydown", this._onKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKeyDown);
  }
  _initStaged() {
    var i, n;
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
    for (const r of this.files) {
      const l = /* @__PURE__ */ new Map();
      if (r.meta)
        for (const [d, p] of Object.entries(r.meta))
          l.set(d, p);
      e.set(r.id, l), t.add(r.id), s.set(r.id, r);
    }
    this._staged = e, this._selected = t, this._originalFiles = s, ((n = (i = this.schema) == null ? void 0 : i.fields) == null ? void 0 : n.length) > 0 && (this._activeFieldKey = this.schema.fields[0].key);
  }
  // -----------------------------------------------------------------------
  // Immutability helpers
  // -----------------------------------------------------------------------
  _setStagedValue(e, t, s) {
    const i = new Map(this._staged), n = new Map(i.get(e) ?? /* @__PURE__ */ new Map());
    n.set(t, s), i.set(e, n), this._staged = i;
  }
  _setStagedBulk(e) {
    const t = new Map(this._staged);
    for (const [s, i, n] of e) {
      const r = new Map(t.get(s) ?? /* @__PURE__ */ new Map());
      r.set(i, n), t.set(s, r);
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
      for (const [n, r] of this._staged) {
        const l = r.get(i.key), d = (s = this._originalFiles.get(n)) == null ? void 0 : s.meta[i.key];
        if (l !== void 0 && !A(l) && JSON.stringify(l) !== JSON.stringify(d)) {
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
    return this._pendingOp != null && !A(this._pendingOp.value);
  }
  /** Returns true if the caller should proceed; false if the user chose to stay. */
  _confirmDiscardPending() {
    return this._hasPendingValue ? confirm("You have unapplied bulk changes. Discard them?") : !0;
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
    var n, r;
    if (!((r = (n = this.schema) == null ? void 0 : n.fields) != null && r.length))
      return a`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${(l) => l.stopPropagation()}>
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
    return a`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${(l) => l.stopPropagation()}>
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
              ${e ? a`
                    <sfx-bulk-meta-op-bar
                      .field=${e}
                      .autocomplete=${this.autocomplete}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  ` : f}

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
                <div class="fm-th-thumb">Thumb</div>
                <div class="fm-th-name" @click=${this._onSortToggle}>
                  Name
                  <span class="fm-sort-arrow">${this._sortAsc ? "↑" : "↓"}</span>
                </div>
                <div class="fm-th-size">Size</div>
                <div class="fm-th-field">${(e == null ? void 0 : e.title) ?? ""}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${e ? a`
                      <sfx-bulk-meta-table
                        .files=${t}
                        .field=${e}
                        .staged=${this._staged}
                        .selected=${this._selected}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        .pendingOp=${this._pendingOp}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                      ></sfx-bulk-meta-table>
                    ` : f}
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
        </div>
      </div>
    `;
  }
};
$e.styles = [dt];
let m = $e;
E([
  c({ attribute: !1 })
], m.prototype, "schema");
E([
  c({ attribute: !1 })
], m.prototype, "files");
E([
  c({ attribute: !1 })
], m.prototype, "config");
E([
  c({ attribute: !1 })
], m.prototype, "autocomplete");
E([
  h()
], m.prototype, "_activeFieldKey");
E([
  h()
], m.prototype, "_staged");
E([
  h()
], m.prototype, "_selected");
E([
  h()
], m.prototype, "_sortAsc");
E([
  h()
], m.prototype, "_pendingOp");
customElements.define("sfx-bulk-metadata-modal", m);
const Oe = {
  // T — plain text
  text: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<path d="M4 3h8M8 3v10"/>`}
  </svg>`,
  // Paragraph lines
  textarea: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${g`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="7" x2="13" y2="7"/><line x1="3" y1="10" x2="9" y2="10"/>`}
  </svg>`,
  // Dropdown chevron
  "select-one": a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<rect x="2" y="3" width="12" height="10" rx="2"/><polyline points="6 7 8 9.5 10 7"/>`}
  </svg>`,
  // Checkboxes
  "multi-select": a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<rect x="2" y="2" width="5" height="5" rx="1"/><polyline points="3 4.5 4.2 6 6 3"/><rect x="2" y="9" width="5" height="5" rx="1"/><line x1="9" y1="4.5" x2="14" y2="4.5"/><line x1="9" y1="11.5" x2="14" y2="11.5"/>`}
  </svg>`,
  // Toggle
  boolean: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="10.5" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,
  // Calendar
  date: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,
  // Hash #
  numeric: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${g`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,
  // Circle + decimal marks
  decimal2: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${g`<circle cx="5.5" cy="8" r="3"/><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none"/><line x1="10" y1="5" x2="13" y2="5"/><line x1="10" y1="8" x2="13" y2="8"/>`}
  </svg>`,
  // Map pin
  geopoint: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<path d="M8 1.5a4.5 4.5 0 0 1 4.5 4.5c0 3.5-4.5 8.5-4.5 8.5S3.5 9.5 3.5 6A4.5 4.5 0 0 1 8 1.5Z"/><circle cx="8" cy="6" r="1.5"/>`}
  </svg>`,
  // Numbered list
  "integer-list": a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${g`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,
  // Tag label
  tags: a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<path d="M1.5 2.5h5.6l7.4 5.5-5.5 5.5-7.5-5.4z"/><circle cx="5" cy="6" r="1" fill="currentColor" stroke="none"/>`}
  </svg>`,
  // Link chain
  "attachment-uri": a`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${g`<path d="M7 9l2-2"/><path d="M9.5 6.5l1.8-1.8a2.1 2.1 0 0 1 3 3L12.5 9.5"/><path d="M6.5 9.5L4.7 11.3a2.1 2.1 0 0 1-3-3L3.5 6.5"/>`}
  </svg>`
};
function bt(o) {
  return Oe[o] ?? Oe.text;
}
var gt = Object.defineProperty, W = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && gt(e, t, i), i;
};
const Ce = class Ce extends w {
  constructor() {
    super(...arguments), this.activeFieldKey = "", this.filledFields = /* @__PURE__ */ new Set(), this.config = null, this._collapsed = /* @__PURE__ */ new Set();
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
    return this.schema ? a`
      ${this.schema.groups.map((e) => {
      const t = !this._collapsed.has(e.uuid);
      return a`
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
        (s) => a`
                  <button
                    class="field-item ${this.activeFieldKey === s.key ? "active" : ""}"
                    @click=${() => this._onFieldClick(s.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${bt(s.type)}</span>
                    <span class="field-name">${s.title}</span>
                    ${this.filledFields.has(s.key) ? a`<span class="field-dot"></span>` : f}
                    ${this._isRequired(s) ? a`<span class="field-required" aria-hidden="true">*</span>` : f}
                  </button>
                `
      ) : f}
        `;
    })}
    ` : f;
  }
};
Ce.styles = [ct];
let O = Ce;
W([
  c({ attribute: !1 })
], O.prototype, "schema");
W([
  c({ attribute: !1 })
], O.prototype, "activeFieldKey");
W([
  c({ attribute: !1 })
], O.prototype, "filledFields");
W([
  c({ attribute: !1 })
], O.prototype, "config");
W([
  h()
], O.prototype, "_collapsed");
customElements.define("sfx-bulk-meta-sidebar", O);
var mt = Object.defineProperty, B = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && mt(e, t, i), i;
}, F;
const D = (F = class extends w {
  constructor() {
    super(...arguments), this.config = null, this.selectedCount = 0, this._operation = "SET", this._value = void 0, this._opDropdownOpen = !1, this._availableOps = [], this._onOpDropdownClose = (e) => {
      e.composedPath().includes(this) || (this._opDropdownOpen = !1);
    }, this._onFieldBlur = (e) => {
      e.stopPropagation(), this._value = e.detail.value, this._emitPendingChange();
    }, this._onFieldChange = (e) => {
      e.stopPropagation(), this._value = e.detail.value, this._emitPendingChange();
    }, this._onFieldEscape = (e) => {
      e.stopPropagation();
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
    return this._value ?? F._emptyValueForType((e = this.field) == null ? void 0 : e.type);
  }
  willUpdate(e) {
    e.has("field") && this.field && (this._availableOps = lt(this.field.type), this._operation = "SET", this._value = void 0, this._emitPendingChange());
  }
  _onOpSelect(e) {
    this._operation = e, this._opDropdownOpen = !1, this._emitPendingChange();
  }
  _onOpToggle() {
    this._opDropdownOpen = !this._opDropdownOpen;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this._onOpDropdownClose);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._onOpDropdownClose);
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
    this._isApplyDisabled || (this.dispatchEvent(
      new CustomEvent("bulk-apply", {
        detail: {
          operation: this._operation,
          value: this._value
        },
        bubbles: !0,
        composed: !0
      })
    ), this._value = void 0, this._emitPendingChange());
  }
  _onClear() {
    this._value = void 0, this._emitPendingChange();
  }
  get _isApplyDisabled() {
    return this.selectedCount === 0 ? !0 : this._operation === "DELETE" ? !1 : A(this._value);
  }
  render() {
    if (!this.field) return f;
    const e = this._availableOps.length > 1, t = this._availableOps.find((s) => s.key === this._operation);
    return a`
      <div class="op-bar">
        <span class="op-label">Operation:</span>

        ${e ? a`
              <div class="op-dropdown-wrap">
                <button class="op-trigger" @click=${this._onOpToggle}>
                  <span>${(t == null ? void 0 : t.label) ?? "Set"}</span>
                  <span class="op-arrow">\u25BE</span>
                </button>
                ${this._opDropdownOpen ? a`
                      <div class="op-menu">
                        ${this._availableOps.map(
      (s) => a`
                            <button
                              class="op-option ${s.key === this._operation ? "active" : ""}"
                              @click=${() => this._onOpSelect(s.key)}
                            >
                              ${s.label}
                            </button>
                          `
    )}
                      </div>
                    ` : f}
              </div>
            ` : a`<span class="op-label">${(t == null ? void 0 : t.label) ?? "Set"}</span>`}

        <div
          class="op-value"
          @field-blur=${this._onFieldBlur}
          @field-change=${this._onFieldChange}
          @field-escape=${this._onFieldEscape}
        >
          <sfx-metadata-field-edit
            .field=${this.field}
            .value=${this._effectiveValue}
            .autocomplete=${this.autocomplete}
          ></sfx-metadata-field-edit>
        </div>

        ${A(this._value) ? f : a`
              <button
                class="btn-clear"
                @click=${this._onClear}
                title="Clear"
                aria-label="Clear input"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            `}

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
}, F.styles = [pt], F);
B([
  c({ attribute: !1 })
], D.prototype, "field");
B([
  c({ attribute: !1 })
], D.prototype, "autocomplete");
B([
  c({ attribute: !1 })
], D.prototype, "config");
B([
  c({ type: Number })
], D.prototype, "selectedCount");
B([
  h()
], D.prototype, "_operation");
B([
  h()
], D.prototype, "_value");
B([
  h()
], D.prototype, "_opDropdownOpen");
let vt = D;
customElements.define("sfx-bulk-meta-op-bar", vt);
var _t = Object.defineProperty, j = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && _t(e, t, i), i;
};
const Se = class Se extends w {
  constructor() {
    super(...arguments), this.files = [], this.staged = /* @__PURE__ */ new Map(), this.selected = /* @__PURE__ */ new Set(), this.config = null, this.pendingOp = null;
  }
  _getEffectiveValue(e) {
    var t;
    return ((t = this.staged.get(e.id)) == null ? void 0 : t.get(this.field.key)) ?? e.meta[this.field.key];
  }
  render() {
    return a`
      ${this.files.map(
      (e) => a`
          <sfx-bulk-meta-row
            .file=${e}
            .field=${this.field}
            .value=${this._getEffectiveValue(e)}
            .selected=${this.selected.has(e.id)}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
            .pendingOp=${this.selected.has(e.id) ? this.pendingOp : null}
          ></sfx-bulk-meta-row>
        `
    )}
    `;
  }
};
Se.styles = [ht];
let $ = Se;
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
], $.prototype, "config");
j([
  c({ attribute: !1 })
], $.prototype, "autocomplete");
j([
  c({ attribute: !1 })
], $.prototype, "pendingOp");
customElements.define("sfx-bulk-meta-table", $);
const yt = /* @__PURE__ */ new Set(["multi-select", "tags", "integer-list"]);
function De(o, e, t) {
  return !e.regional_variants_group_uuid || o == null || typeof o != "object" || Array.isArray(o) ? o : o[t ?? "en"];
}
function ze(o) {
  return Array.isArray(o) ? o : [];
}
function Pe(o) {
  return !!(o == null || o === "" || Array.isArray(o) && o.length === 0);
}
function oe(o, e) {
  var s;
  const t = (s = o.possible_values) == null ? void 0 : s.find(
    (i) => i.internal_unique_value === e || i.api_value === e
  );
  return (t == null ? void 0 : t.label) ?? String(e);
}
function qe(o, e) {
  if (e == null || e === "") return "";
  switch (o.type) {
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
      return oe(o, String(e));
    case "geopoint": {
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
function wt(o, e) {
  const t = o.map((l) => typeof l == "string" ? l : String(l)), s = e.map((l) => typeof l == "string" ? l : String(l)), i = new Set(t), n = new Set(s), r = [];
  for (const l of s)
    r.push({ label: l, state: i.has(l) ? "kept" : "added" });
  for (const l of t)
    n.has(l) || r.push({ label: l, state: "removed" });
  return r;
}
function kt(o, e, t) {
  const s = new Set(o.map((r) => JSON.stringify(r))), i = new Set(e.map((r) => JSON.stringify(r))), n = [];
  for (const r of e) {
    const l = JSON.stringify(r), d = typeof r == "string" ? oe(t, r) : String(r);
    n.push({ label: d, state: s.has(l) ? "kept" : "added" });
  }
  for (const r of o) {
    const l = JSON.stringify(r);
    if (!i.has(l)) {
      const d = typeof r == "string" ? oe(t, r) : String(r);
      n.push({ label: d, state: "removed" });
    }
  }
  return n;
}
function $t(o, e, t, s) {
  const i = s == null ? void 0 : s.language, n = De(e, o, i), r = De(t, o, i);
  if (yt.has(o.type)) {
    const l = ze(n), d = ze(r);
    return o.type === "tags" ? { kind: "array", items: wt(l, d) } : { kind: "array", items: kt(l, d, o) };
  }
  return {
    kind: "scalar",
    oldDisplay: qe(o, n),
    newDisplay: qe(o, r),
    oldEmpty: Pe(n),
    newEmpty: Pe(r)
  };
}
var Ct = Object.defineProperty, ee = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && Ct(e, t, i), i;
};
const Ie = class Ie extends w {
  constructor() {
    super(...arguments), this.config = null;
  }
  _renderArrayDiff(e) {
    return a`
      <div class="diff-wrap" aria-label="Bulk operation preview">
        ${e.items.length === 0 ? a`<span class="diff-chip diff-chip--kept" style="opacity:0.5">\u2014</span>` : e.items.map(
      (t) => a`
                <span
                  class="diff-chip diff-chip--${t.state}"
                  aria-label="${t.state === "added" ? "Added" : t.state === "removed" ? "Removed" : "Kept"}: ${t.label}"
                >
                  ${t.state === "removed" ? a`<s>${t.label}</s>` : t.label}
                </span>
              `
    )}
      </div>
    `;
  }
  _renderScalarDiff(e) {
    const t = `Will change from ${e.oldEmpty ? "empty" : e.oldDisplay} to ${e.newEmpty ? "empty" : e.newDisplay}`;
    return a`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${t}</span>
        ${e.oldEmpty ? f : a`
              <span class="diff-old" aria-hidden="true"><s>${e.oldDisplay}</s></span>
              ${e.newEmpty ? f : a`<span class="diff-arrow" aria-hidden="true">\u2192</span>`}
            `}
        ${e.newEmpty ? f : a`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `;
  }
  render() {
    if (!this.field) return f;
    const e = $t(
      this.field,
      this.oldValue,
      this.newValue,
      this.config
    );
    return e.kind === "array" ? this._renderArrayDiff(e) : this._renderScalarDiff(e);
  }
};
Ie.styles = [ft];
let L = Ie;
ee([
  c({ attribute: !1 })
], L.prototype, "field");
ee([
  c({ attribute: !1 })
], L.prototype, "oldValue");
ee([
  c({ attribute: !1 })
], L.prototype, "newValue");
ee([
  c({ attribute: !1 })
], L.prototype, "config");
customElements.define("sfx-bulk-meta-diff-view", L);
var St = Object.defineProperty, z = (o, e, t, s) => {
  for (var i = void 0, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (i = r(e, t, i) || i);
  return i && St(e, t, i), i;
};
const Ee = class Ee extends w {
  constructor() {
    super(...arguments), this.selected = !1, this.config = null, this.pendingOp = null, this._error = null, this._onFieldBlur = (e) => {
      var r;
      e.stopPropagation();
      const { value: t } = e.detail, s = Le(this.field, t, this.config ?? void 0);
      if (s) {
        this._error = s;
        return;
      }
      this._error = null;
      const i = {
        meta: { ...this.file.meta, [this.field.key]: this.value }
      }, n = Q(
        this.field,
        t,
        i,
        (r = this.config) == null ? void 0 : r.language
      );
      JSON.stringify(n) !== JSON.stringify(this.value) && this.dispatchEvent(
        new CustomEvent("row-field-change", {
          detail: { fileId: this.file.id, value: n },
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
  _getExtension(e) {
    const t = e.lastIndexOf(".");
    return t > 0 ? e.slice(t + 1).toUpperCase() : "?";
  }
  /**
   * Compute what the value would become if the pending bulk operation were applied.
   * Returns null if there's no pending op or the preview equals the current value.
   */
  _computePreview() {
    var l;
    if (!this.pendingOp) return null;
    const { operation: e, value: t } = this.pendingOp, s = (l = this.config) == null ? void 0 : l.language, i = {
      meta: { ...this.file.meta, [this.field.key]: this.value }
    }, n = Q(
      this.field,
      t,
      i,
      s
    ), r = Ke(
      e,
      this.value,
      n,
      this.field.type
    );
    return JSON.stringify(r) === JSON.stringify(this.value) ? null : r;
  }
  render() {
    var i;
    const e = this.file, t = this._computePreview(), s = t !== null;
    return a`
      <div class="row ${s ? "row--changed" : ""}">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${e.previewUrl ? a`<img class="row-thumb" src=${e.previewUrl} alt="" />` : a`<div class="row-thumb-placeholder">${this._getExtension(e.name)}</div>`}

        <div class="row-name" title=${e.name}>${e.name}</div>
        <div class="row-size">${e.size ? Ve(e.size) : "—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
        >
          ${s ? a`
                <sfx-bulk-meta-diff-view
                  .field=${this.field}
                  .oldValue=${this.value}
                  .newValue=${t}
                  .config=${this.config}
                ></sfx-bulk-meta-diff-view>
              ` : a`
                <div class="row-field-edit">
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${Te(this.field, this.value, (i = this.config) == null ? void 0 : i.language)}
                    .autocomplete=${this.autocomplete}
                  ></sfx-metadata-field-edit>
                </div>
              `}
          ${this._error ? a`<div class="row-error" role="alert">${this._error}</div>` : f}
        </div>
      </div>
    `;
  }
};
Ee.styles = [ut];
let y = Ee;
z([
  c({ attribute: !1 })
], y.prototype, "file");
z([
  c({ attribute: !1 })
], y.prototype, "field");
z([
  c({ attribute: !1 })
], y.prototype, "value");
z([
  c({ type: Boolean })
], y.prototype, "selected");
z([
  c({ attribute: !1 })
], y.prototype, "config");
z([
  c({ attribute: !1 })
], y.prototype, "autocomplete");
z([
  c({ attribute: !1 })
], y.prototype, "pendingOp");
z([
  h()
], y.prototype, "_error");
customElements.define("sfx-bulk-meta-row", y);
export {
  m as SfxBulkMetadataModal,
  Dt as clearSchemaCache,
  qt as createTagsAutocomplete,
  Pt as deepMergeMeta,
  Ot as fetchMetadataSchema,
  zt as getFilesWithMissingRequired,
  Ue as isAssetHasMetadataValue,
  A as isEmpty,
  Te as mapValueFromBackend,
  Q as mapValueToBackend,
  Fe as parseMetadataSchema,
  Le as validateField
};
