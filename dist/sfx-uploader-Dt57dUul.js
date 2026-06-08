import { noChange as Bt, html as f, LitElement as pe, css as ne, svg as Pe, render as Ue, nothing as $ } from "lit";
import { property as O, state as I, query as vi } from "lit/decorators.js";
import { repeat as Qt } from "lit/directives/repeat.js";
import { directive as Mo, Directive as Bo, PartType as No } from "lit/directive.js";
import { unsafeSVG as ye } from "lit/directives/unsafe-svg.js";
import { unsafeHTML as Ki } from "lit/directives/unsafe-html.js";
import { classMap as Ho } from "lit/directives/class-map.js";
const j = (r) => typeof r == "string", Ge = () => {
  let r, e;
  const t = new Promise((i, o) => {
    r = i, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}, Yi = (r) => r == null ? "" : String(r), qo = (r, e, t) => {
  r.forEach((i) => {
    e[i] && (t[i] = e[i]);
  });
}, Vo = /###/g, Wi = (r) => r && r.includes("###") ? r.replace(Vo, ".") : r, Gi = (r) => !r || j(r), tt = (r, e, t) => {
  const i = j(e) ? e.split(".") : e;
  let o = 0;
  for (; o < i.length - 1; ) {
    if (Gi(r)) return {};
    const s = Wi(i[o]);
    !r[s] && t && (r[s] = new t()), Object.prototype.hasOwnProperty.call(r, s) ? r = r[s] : r = {}, ++o;
  }
  return Gi(r) ? {} : {
    obj: r,
    k: Wi(i[o])
  };
}, Xi = (r, e, t) => {
  const {
    obj: i,
    k: o
  } = tt(r, e, Object);
  if (i !== void 0 || e.length === 1) {
    i[o] = t;
    return;
  }
  let s = e[e.length - 1], n = e.slice(0, e.length - 1), a = tt(r, n, Object);
  for (; a.obj === void 0 && n.length; )
    s = `${n[n.length - 1]}.${s}`, n = n.slice(0, n.length - 1), a = tt(r, n, Object), a != null && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${s}`] = t;
}, Ko = (r, e, t, i) => {
  const {
    obj: o,
    k: s
  } = tt(r, e, Object);
  o[s] = o[s] || [], o[s].push(t);
}, Pt = (r, e) => {
  const {
    obj: t,
    k: i
  } = tt(r, e);
  if (t && Object.prototype.hasOwnProperty.call(t, i))
    return t[i];
}, Yo = (r, e, t) => {
  const i = Pt(r, t);
  return i !== void 0 ? i : Pt(e, t);
}, Gr = (r, e, t) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in r ? j(r[i]) || r[i] instanceof String || j(e[i]) || e[i] instanceof String ? t && (r[i] = e[i]) : Gr(r[i], e[i], t) : r[i] = e[i]);
  return r;
}, me = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), Wo = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
}, Go = (r) => j(r) ? r.replace(/[&<>"'\/]/g, (e) => Wo[e]) : r;
class Xo {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const i = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i;
  }
}
const Jo = [" ", ",", "?", "!", ";"], Zo = new Xo(20), Qo = (r, e, t) => {
  e = e || "", t = t || "";
  const i = Jo.filter((n) => !e.includes(n) && !t.includes(n));
  if (i.length === 0) return !0;
  const o = Zo.getRegExp(`(${i.map((n) => n === "?" ? "\\?" : n).join("|")})`);
  let s = !o.test(r);
  if (!s) {
    const n = r.indexOf(t);
    n > 0 && !o.test(r.substring(0, n)) && (s = !0);
  }
  return s;
}, ei = (r, e, t = ".") => {
  if (!r) return;
  if (r[e])
    return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : void 0;
  const i = e.split(t);
  let o = r;
  for (let s = 0; s < i.length; ) {
    if (!o || typeof o != "object")
      return;
    let n, a = "";
    for (let l = s; l < i.length; ++l)
      if (l !== s && (a += t), a += i[l], n = o[a], n !== void 0) {
        if (["string", "number", "boolean"].includes(typeof n) && l < i.length - 1)
          continue;
        s += l - s + 1;
        break;
      }
    o = n;
  }
  return o;
}, rt = (r) => r == null ? void 0 : r.replace(/_/g, "-"), es = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, e) {
    var t, i;
    (i = (t = console == null ? void 0 : console[r]) == null ? void 0 : t.apply) == null || i.call(t, console, e);
  }
};
class Et {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || es, this.options = t, this.debug = t.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, i, o) {
    return o && !this.debug ? null : (e = e.map((s) => j(s) ? s.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : s), j(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Et(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Et(this.logger, e);
  }
}
var ge = new Et();
class It {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const o = this.observers[i].get(t) || 0;
      this.observers[i].set(t, o + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  once(e, t) {
    const i = (...o) => {
      t(...o), this.off(e, i);
    };
    return this.on(e, i), this;
  }
  emit(e, ...t) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([o, s]) => {
      for (let n = 0; n < s; n++)
        o(...t);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([o, s]) => {
      for (let n = 0; n < s; n++)
        o(e, ...t);
    });
  }
}
class Ji extends It {
  constructor(e, t = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.includes(e) || this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, i, o = {}) {
    var c, d;
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, n = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.includes(".") ? a = e.split(".") : (a = [e, t], i && (Array.isArray(i) ? a.push(...i) : j(i) && s ? a.push(...i.split(s)) : a.push(i)));
    const l = Pt(this.data, a);
    return !l && !t && !i && e.includes(".") && (e = a[0], t = a[1], i = a.slice(2).join(".")), l || !n || !j(i) ? l : ei((d = (c = this.data) == null ? void 0 : c[e]) == null ? void 0 : d[t], i, s);
  }
  addResource(e, t, i, o, s = {
    silent: !1
  }) {
    const n = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [e, t];
    i && (a = a.concat(n ? i.split(n) : i)), e.includes(".") && (a = e.split("."), o = t, t = a[1]), this.addNamespaces(t), Xi(this.data, a, o), s.silent || this.emit("added", e, t, i, o);
  }
  addResources(e, t, i, o = {
    silent: !1
  }) {
    for (const s in i)
      (j(i[s]) || Array.isArray(i[s])) && this.addResource(e, t, s, i[s], {
        silent: !0
      });
    o.silent || this.emit("added", e, t, i);
  }
  addResourceBundle(e, t, i, o, s, n = {
    silent: !1,
    skipCopy: !1
  }) {
    let a = [e, t];
    e.includes(".") && (a = e.split("."), o = i, i = t, t = a[1]), this.addNamespaces(t);
    let l = Pt(this.data, a) || {};
    n.skipCopy || (i = JSON.parse(JSON.stringify(i))), o ? Gr(l, i, s) : l = {
      ...l,
      ...i
    }, Xi(this.data, a, l), n.silent || this.emit("added", e, t, i);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((o) => t[o] && Object.keys(t[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Xr = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, i, o) {
    return r.forEach((s) => {
      var n;
      e = ((n = this.processors[s]) == null ? void 0 : n.process(e, t, i, o)) ?? e;
    }), e;
  }
};
const Jr = Symbol("i18next/PATH_KEY");
function ts() {
  const r = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (i, o) => {
    var s;
    return (s = t == null ? void 0 : t.revoke) == null || s.call(t), o === Jr ? r : (r.push(o), t = Proxy.revocable(i, e), t.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function Me(r, e) {
  const {
    [Jr]: t
  } = r(ts()), i = (e == null ? void 0 : e.keySeparator) ?? ".", o = (e == null ? void 0 : e.nsSeparator) ?? ":", s = (e == null ? void 0 : e.enableSelector) === "strict";
  if (t.length > 1 && o) {
    const n = e == null ? void 0 : e.ns, a = s ? Array.isArray(n) ? n : n ? [n] : null : Array.isArray(n) ? n : null;
    if (a && (s ? a : a.length > 1 ? a.slice(1) : []).includes(t[0]))
      return `${t[0]}${o}${t.slice(1).join(i)}`;
  }
  return t.join(i);
}
const Nt = (r) => !j(r) && typeof r != "boolean" && typeof r != "number";
class Ut extends It {
  constructor(e, t = {}) {
    super(), qo(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ge.create("translator"), this.checkedLoadedFor = {};
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, t = {
    interpolation: {}
  }) {
    const i = {
      ...t
    };
    if (e == null) return !1;
    const o = this.resolve(e, i);
    if ((o == null ? void 0 : o.res) === void 0) return !1;
    const s = Nt(o.res);
    return !(i.returnObjects === !1 && s);
  }
  extractFromKey(e, t) {
    let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const n = i && e.includes(i), a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Qo(e, i, o);
    if (n && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: j(s) ? [s] : s
        };
      const c = e.split(i);
      (i !== o || i === o && this.options.ns.includes(c[0])) && (s = c.shift()), e = c.join(o);
    }
    return {
      key: e,
      namespaces: j(s) ? [s] : s
    };
  }
  translate(e, t, i) {
    let o = typeof t == "object" ? {
      ...t
    } : t;
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), e == null) return "";
    typeof e == "function" && (e = Me(e, {
      ...this.options,
      ...o
    })), Array.isArray(e) || (e = [String(e)]), e = e.map((F) => typeof F == "function" ? Me(F, {
      ...this.options,
      ...o
    }) : String(F));
    const s = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, n = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: l
    } = this.extractFromKey(e[e.length - 1], o), c = l[l.length - 1];
    let d = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const p = o.lng || this.language, u = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((p == null ? void 0 : p.toLowerCase()) === "cimode")
      return u ? s ? {
        res: `${c}${d}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: p,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(o)
      } : `${c}${d}${a}` : s ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: p,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(o)
      } : a;
    const w = this.resolve(e, o);
    let m = w == null ? void 0 : w.res;
    const v = (w == null ? void 0 : w.usedKey) || a, C = (w == null ? void 0 : w.exactUsedKey) || a, L = ["[object Number]", "[object Function]", "[object RegExp]"], k = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject, _ = o.count !== void 0 && !j(o.count), b = Ut.hasDefaultValue(o), R = _ ? this.pluralResolver.getSuffix(p, o.count, o) : "", E = o.ordinal && _ ? this.pluralResolver.getSuffix(p, o.count, {
      ordinal: !1
    }) : "", A = _ && !o.ordinal && o.count === 0, z = A && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${R}`] || o[`defaultValue${E}`] || o.defaultValue;
    let T = m;
    y && !m && b && (T = z);
    const J = Nt(T), de = Object.prototype.toString.apply(T);
    if (y && T && J && !L.includes(de) && !(j(k) && Array.isArray(T))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const F = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, T, {
          ...o,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return s ? (w.res = F, w.usedParams = this.getUsedParamsDetails(o), w) : F;
      }
      if (n) {
        const F = Array.isArray(T), Y = F ? [] : {}, he = F ? C : v;
        for (const x in T)
          if (Object.prototype.hasOwnProperty.call(T, x)) {
            const h = `${he}${n}${x}`;
            b && !m ? Y[x] = this.translate(h, {
              ...o,
              defaultValue: Nt(z) ? z[x] : void 0,
              joinArrays: !1,
              ns: l
            }) : Y[x] = this.translate(h, {
              ...o,
              joinArrays: !1,
              ns: l
            }), Y[x] === h && (Y[x] = T[x]);
          }
        m = Y;
      }
    } else if (y && j(k) && Array.isArray(m))
      m = m.join(k), m && (m = this.extendTranslation(m, e, o, i));
    else {
      let F = !1, Y = !1;
      !this.isValidLookup(m) && b && (F = !0, m = z), this.isValidLookup(m) || (Y = !0, m = a);
      const x = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Y ? void 0 : m, h = b && z !== m && this.options.updateMissing;
      if (Y || F || h) {
        if (this.logger.log(h ? "updateKey" : "missingKey", p, c, _ && !h ? `${a}${this.pluralResolver.getSuffix(p, o.count, o)}` : a, h ? z : m), n) {
          const S = this.resolve(a, {
            ...o,
            keySeparator: !1
          });
          S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let g = [];
        const P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && P && P[0])
          for (let S = 0; S < P.length; S++)
            g.push(P[S]);
        else this.options.saveMissingTo === "all" ? g = this.languageUtils.toResolveHierarchy(o.lng || this.language) : g.push(o.lng || this.language);
        const U = (S, D, H) => {
          var Q;
          const q = b && H !== m ? H : x;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(S, c, D, q, h, o) : (Q = this.backendConnector) != null && Q.saveMissing && this.backendConnector.saveMissing(S, c, D, q, h, o), this.emit("missingKey", S, c, D, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && _ ? g.forEach((S) => {
          const D = this.pluralResolver.getSuffixes(S, o);
          A && o[`defaultValue${this.options.pluralSeparator}zero`] && !D.includes(`${this.options.pluralSeparator}zero`) && D.push(`${this.options.pluralSeparator}zero`), D.forEach((H) => {
            U([S], a + H, o[`defaultValue${H}`] || z);
          });
        }) : U(g, a, z));
      }
      m = this.extendTranslation(m, e, o, w, i), Y && m === a && this.options.appendNamespaceToMissingKey && (m = `${c}${d}${a}`), (Y || F) && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${d}${a}` : a, F ? m : void 0, o));
    }
    return s ? (w.res = m, w.usedParams = this.getUsedParamsDetails(o), w) : m;
  }
  extendTranslation(e, t, i, o, s) {
    var l, c;
    if ((l = this.i18nFormat) != null && l.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const d = j(e) && (((c = i == null ? void 0 : i.interpolation) == null ? void 0 : c.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let p;
      if (d) {
        const w = e.match(this.interpolator.nestingRegexp);
        p = w && w.length;
      }
      let u = i.replace && !j(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), e = this.interpolator.interpolate(e, u, i.lng || this.language || o.usedLng, i), d) {
        const w = e.match(this.interpolator.nestingRegexp), m = w && w.length;
        p < m && (i.nest = !1);
      }
      !i.lng && o && o.res && (i.lng = this.language || o.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, (...w) => (s == null ? void 0 : s[0]) === w[0] && !i.context ? (this.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${t[0]}`), null) : this.translate(...w, t), i)), i.interpolation && this.interpolator.reset();
    }
    const n = i.postProcess || this.options.postProcess, a = j(n) ? [n] : n;
    return e != null && (a != null && a.length) && i.applyPostProcessor !== !1 && (e = Xr.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e, t = {}) {
    let i, o, s, n, a;
    return j(e) && (e = [e]), Array.isArray(e) && (e = e.map((l) => typeof l == "function" ? Me(l, {
      ...this.options,
      ...t
    }) : l)), e.forEach((l) => {
      if (this.isValidLookup(i)) return;
      const c = this.extractFromKey(l, t), d = c.key;
      o = d;
      let p = c.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const u = t.count !== void 0 && !j(t.count), w = u && !t.ordinal && t.count === 0, m = t.context !== void 0 && (j(t.context) || typeof t.context == "number") && t.context !== "", v = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((C) => {
        var L, k;
        this.isValidLookup(i) || (a = C, !this.checkedLoadedFor[`${v[0]}-${C}`] && ((L = this.utils) != null && L.hasLoadedNamespace) && !((k = this.utils) != null && k.hasLoadedNamespace(a)) && (this.checkedLoadedFor[`${v[0]}-${C}`] = !0, this.logger.warn(`key "${o}" for languages "${v.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((y) => {
          var R;
          if (this.isValidLookup(i)) return;
          n = y;
          const _ = [d];
          if ((R = this.i18nFormat) != null && R.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, d, y, C, t);
          else {
            let E;
            u && (E = this.pluralResolver.getSuffix(y, t.count, t));
            const A = `${this.options.pluralSeparator}zero`, z = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (u && (t.ordinal && E.startsWith(z) && _.push(d + E.replace(z, this.options.pluralSeparator)), _.push(d + E), w && _.push(d + A)), m) {
              const T = `${d}${this.options.contextSeparator || "_"}${t.context}`;
              _.push(T), u && (t.ordinal && E.startsWith(z) && _.push(T + E.replace(z, this.options.pluralSeparator)), _.push(T + E), w && _.push(T + A));
            }
          }
          let b;
          for (; b = _.pop(); )
            this.isValidLookup(i) || (s = b, i = this.getResource(y, C, b, t));
        }));
      });
    }), {
      res: i,
      usedKey: o,
      exactUsedKey: s,
      usedLng: n,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, i, o = {}) {
    var s;
    return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(e, t, i, o) : this.resourceStore.getResource(e, t, i, o);
  }
  getUsedParamsDetails(e = {}) {
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && !j(e.replace);
    let o = i ? e.replace : e;
    if (i && typeof e.count < "u" && (o.count = e.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !i) {
      o = {
        ...o
      };
      for (const s of t)
        delete o[s];
    }
    return o;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i) && i.startsWith(t) && e[i] !== void 0)
        return !0;
    return !1;
  }
}
class Zi {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ge.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = rt(e), !e || !e.includes("-")) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = rt(e), !e || !e.includes("-")) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (j(e) && e.includes("-")) {
      let t;
      try {
        t = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(e);
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return e.forEach((i) => {
      if (t) return;
      const o = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (t = o);
    }), !t && this.options.supportedLngs && e.forEach((i) => {
      if (t) return;
      const o = this.getScriptPartFromCode(i);
      if (this.isSupportedCode(o)) return t = o;
      const s = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(s)) return t = s;
      t = this.options.supportedLngs.find((n) => n === s ? !0 : !n.includes("-") && !s.includes("-") ? !1 : !!(n.includes("-") && !s.includes("-") && n.slice(0, n.indexOf("-")) === s || n.startsWith(s) && s.length > 1));
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(t)), j(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let i = e[t];
    return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, t) {
    const i = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), o = [], s = (n) => {
      n && (this.isSupportedCode(n) ? o.push(n) : this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`));
    };
    return j(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : j(e) && s(this.formatLanguageCode(e)), i.forEach((n) => {
      o.includes(n) || s(this.formatLanguageCode(n));
    }), o;
  }
}
const Qi = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, er = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class is {
  constructor(e, t = {}) {
    this.languageUtils = e, this.options = t, this.logger = ge.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, t = {}) {
    const i = rt(e === "dev" ? "en" : e), o = t.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: i,
      type: o
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let n;
    try {
      n = new Intl.PluralRules(i, {
        type: o
      });
    } catch {
      if (typeof Intl > "u")
        return this.logger.error("No Intl support, please use an Intl polyfill!"), er;
      if (!e.match(/-|_/)) return er;
      const l = this.languageUtils.getLanguagePartFromCode(e);
      n = this.getRule(l, t);
    }
    return this.pluralRulesCache[s] = n, n;
  }
  needsPlural(e, t = {}) {
    let i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), (i == null ? void 0 : i.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, t, i = {}) {
    return this.getSuffixes(e, i).map((o) => `${t}${o}`);
  }
  getSuffixes(e, t = {}) {
    let i = this.getRule(e, t);
    return i || (i = this.getRule("dev", t)), i ? i.resolvedOptions().pluralCategories.sort((o, s) => Qi[o] - Qi[s]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(e, t, i = {}) {
    const o = this.getRule(e, i);
    return o ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
  }
}
const tr = (r, e, t, i = ".", o = !0) => {
  let s = Yo(r, e, t);
  return !s && o && j(t) && (s = ei(r, t, i), s === void 0 && (s = ei(e, t, i))), s;
}, Ht = (r) => r.replace(/\$/g, "$$$$");
class ir {
  constructor(e = {}) {
    var t;
    this.logger = ge.create("interpolator"), this.options = e, this.format = ((t = e == null ? void 0 : e.interpolation) == null ? void 0 : t.format) || ((i) => i), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: i,
      useRawValueToEscape: o,
      prefix: s,
      prefixEscaped: n,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: d,
      unescapePrefix: p,
      nestingPrefix: u,
      nestingPrefixEscaped: w,
      nestingSuffix: m,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: C,
      maxReplaces: L,
      alwaysFormat: k
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Go, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = s ? me(s) : n || "{{", this.suffix = a ? me(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = d ? "" : p ? me(p) : "-", this.unescapeSuffix = this.unescapePrefix ? "" : d ? me(d) : "", this.nestingPrefix = u ? me(u) : w || me("$t("), this.nestingSuffix = m ? me(m) : v || me(")"), this.nestingOptionsSeparator = C || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, i) => (t == null ? void 0 : t.source) === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, i, o) {
    var w;
    let s, n, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (m) => {
      if (!m.includes(this.formatSeparator)) {
        const k = tr(t, l, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, i, {
          ...o,
          ...t,
          interpolationkey: m
        }) : k;
      }
      const v = m.split(this.formatSeparator), C = v.shift().trim(), L = v.join(this.formatSeparator).trim();
      return this.format(tr(t, l, C, this.options.keySeparator, this.options.ignoreJSONStructure), L, i, {
        ...o,
        ...t,
        interpolationkey: C
      });
    };
    this.resetRegExp(), !this.escapeValue && typeof e == "string" && /\$t\([^)]*\{[^}]*\{\{/.test(e) && this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
    const d = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, p = ((w = o == null ? void 0 : o.interpolation) == null ? void 0 : w.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => Ht(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? Ht(this.escape(m)) : Ht(m)
    }].forEach((m) => {
      for (a = 0; s = m.regex.exec(e); ) {
        const v = s[1].trim();
        if (n = c(v), n === void 0)
          if (typeof d == "function") {
            const L = d(e, s, o);
            n = j(L) ? L : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, v))
            n = "";
          else if (p) {
            n = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`), n = "";
        else !j(n) && !this.useRawValueToEscape && (n = Yi(n));
        const C = m.safeValue(n);
        if (e = e.replace(s[0], C), p ? (m.regex.lastIndex += n.length, m.regex.lastIndex -= s[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, i = {}) {
    let o, s, n;
    const a = (l, c) => {
      const d = this.nestingOptionsSeparator;
      if (!l.includes(d)) return l;
      const p = l.split(new RegExp(`${me(d)}[ ]*{`));
      let u = `{${p[1]}`;
      l = p[0], u = this.interpolate(u, n);
      const w = u.match(/'/g), m = u.match(/"/g);
      (((w == null ? void 0 : w.length) ?? 0) % 2 === 0 && !m || ((m == null ? void 0 : m.length) ?? 0) % 2 !== 0) && (u = u.replace(/'/g, '"'));
      try {
        n = JSON.parse(u), c && (n = {
          ...c,
          ...n
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, v), `${l}${d}${u}`;
      }
      return n.defaultValue && n.defaultValue.includes(this.prefix) && delete n.defaultValue, l;
    };
    for (; o = this.nestingRegexp.exec(e); ) {
      let l = [];
      n = {
        ...i
      }, n = n.replace && !j(n.replace) ? n.replace : n, n.applyPostProcessor = !1, delete n.defaultValue;
      const c = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
      if (c !== -1 && (l = o[1].slice(c).split(this.formatSeparator).map((d) => d.trim()).filter(Boolean), o[1] = o[1].slice(0, c)), s = t(a.call(this, o[1].trim(), n), n), s && o[0] === e && !j(s)) return s;
      j(s) || (s = Yi(s)), s || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), s = ""), l.length && (s = l.reduce((d, p) => this.format(d, p, i.lng, {
        ...i,
        interpolationkey: o[1].trim()
      }), s.trim())), e = e.replace(o[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const rs = (r) => {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.includes("(")) {
    const i = r.split("(");
    e = i[0].toLowerCase().trim();
    const o = i[1].slice(0, -1);
    e === "currency" && !o.includes(":") ? t.currency || (t.currency = o.trim()) : e === "relativetime" && !o.includes(":") ? t.range || (t.range = o.trim()) : o.split(";").forEach((n) => {
      if (n) {
        const [a, ...l] = n.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), d = a.trim();
        t[d] || (t[d] = c), c === "false" && (t[d] = !1), c === "true" && (t[d] = !0), isNaN(c) || (t[d] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, rr = (r) => {
  const e = {};
  return (t, i, o) => {
    let s = o;
    o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (s = {
      ...s,
      [o.interpolationkey]: void 0
    });
    const n = i + JSON.stringify(s);
    let a = e[n];
    return a || (a = r(rt(i), o), e[n] = a), a(t);
  };
}, os = (r) => (e, t, i) => r(rt(t), i)(e);
class ss {
  constructor(e = {}) {
    this.logger = ge.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const i = t.cacheInBuiltFormats ? rr : os;
    this.formats = {
      number: i((o, s) => {
        const n = new Intl.NumberFormat(o, {
          ...s
        });
        return (a) => n.format(a);
      }),
      currency: i((o, s) => {
        const n = new Intl.NumberFormat(o, {
          ...s,
          style: "currency"
        });
        return (a) => n.format(a);
      }),
      datetime: i((o, s) => {
        const n = new Intl.DateTimeFormat(o, {
          ...s
        });
        return (a) => n.format(a);
      }),
      relativetime: i((o, s) => {
        const n = new Intl.RelativeTimeFormat(o, {
          ...s
        });
        return (a) => n.format(a, s.range || "day");
      }),
      list: i((o, s) => {
        const n = new Intl.ListFormat(o, {
          ...s
        });
        return (a) => n.format(a);
      })
    };
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = rr(t);
  }
  format(e, t, i, o = {}) {
    if (!t || e == null) return e;
    const s = t.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && !s[0].includes(")") && s.find((a) => a.includes(")"))) {
      const a = s.findIndex((l) => l.includes(")"));
      s[0] = [s[0], ...s.splice(1, a)].join(this.formatSeparator);
    }
    return s.reduce((a, l) => {
      var p;
      const {
        formatName: c,
        formatOptions: d
      } = rs(l);
      if (this.formats[c]) {
        let u = a;
        try {
          const w = ((p = o == null ? void 0 : o.formatParams) == null ? void 0 : p[o.interpolationkey]) || {}, m = w.locale || w.lng || o.locale || o.lng || i;
          u = this.formats[c](a, m, {
            ...d,
            ...o,
            ...w
          });
        } catch (w) {
          this.logger.warn(w);
        }
        return u;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, e);
  }
}
const ns = (r, e) => {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
};
class as extends It {
  constructor(e, t, i, o = {}) {
    var s, n;
    super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = o, this.logger = ge.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (n = (s = this.backend) == null ? void 0 : s.init) == null || n.call(s, i, o.backend, o);
  }
  queueLoad(e, t, i, o) {
    const s = {}, n = {}, a = {}, l = {};
    return e.forEach((c) => {
      let d = !0;
      t.forEach((p) => {
        const u = `${c}|${p}`;
        !i.reload && this.store.hasResourceBundle(c, p) ? this.state[u] = 2 : this.state[u] < 0 || (this.state[u] === 1 ? n[u] === void 0 && (n[u] = !0) : (this.state[u] = 1, d = !1, n[u] === void 0 && (n[u] = !0), s[u] === void 0 && (s[u] = !0), l[p] === void 0 && (l[p] = !0)));
      }), d || (a[c] = !0);
    }), (Object.keys(s).length || Object.keys(n).length) && this.queue.push({
      pending: n,
      pendingCount: Object.keys(n).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(n),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, t, i) {
    const o = e.split("|"), s = o[0], n = o[1];
    t && this.emit("failedLoading", s, n, t), !t && i && this.store.addResourceBundle(s, n, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2, t && i && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      Ko(l.loaded, [s], n), ns(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const d = l.loaded[c];
        d.length && d.forEach((p) => {
          a[c][p] === void 0 && (a[c][p] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, t, i, o = 0, s = this.retryTimeout, n) {
    if (!e.length) return n(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: i,
        tried: o,
        wait: s,
        callback: n
      });
      return;
    }
    this.readingCalls++;
    const a = (c, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (c && d && o < this.maxRetries) {
        setTimeout(() => {
          this.read(e, t, i, o + 1, s * 2, n);
        }, s);
        return;
      }
      n(c, d);
    }, l = this.backend[i].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, t);
        c && typeof c.then == "function" ? c.then((d) => a(null, d)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(e, t, a);
  }
  prepareLoading(e, t, i = {}, o) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    j(e) && (e = this.languageUtils.toResolveHierarchy(e)), j(t) && (t = [t]);
    const s = this.queueLoad(e, t, i, o);
    if (!s.toLoad.length)
      return s.pending.length || o(), null;
    s.toLoad.forEach((n) => {
      this.loadOne(n);
    });
  }
  load(e, t, i) {
    this.prepareLoading(e, t, {}, i);
  }
  reload(e, t, i) {
    this.prepareLoading(e, t, {
      reload: !0
    }, i);
  }
  loadOne(e, t = "") {
    const i = e.split("|"), o = i[0], s = i[1];
    this.read(o, s, "read", void 0, void 0, (n, a) => {
      n && this.logger.warn(`${t}loading namespace ${s} for language ${o} failed`, n), !n && a && this.logger.log(`${t}loaded namespace ${s} for language ${o}`, a), this.loaded(e, n, a);
    });
  }
  saveMissing(e, t, i, o, s, n = {}, a = () => {
  }) {
    var l, c, d, p, u;
    if ((c = (l = this.services) == null ? void 0 : l.utils) != null && c.hasLoadedNamespace && !((p = (d = this.services) == null ? void 0 : d.utils) != null && p.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if ((u = this.backend) != null && u.create) {
        const w = {
          ...n,
          isUpdate: s
        }, m = this.backend.create.bind(this.backend);
        if (m.length < 6)
          try {
            let v;
            m.length === 5 ? v = m(e, t, i, o, w) : v = m(e, t, i, o), v && typeof v.then == "function" ? v.then((C) => a(null, C)).catch(a) : a(null, v);
          } catch (v) {
            a(v);
          }
        else
          m(e, t, i, o, a, w);
      }
      !e || !e[0] || this.store.addResource(e[0], t, i, o);
    }
  }
}
const qt = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  enableSelector: !1,
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (r) => {
    let e = {};
    if (typeof r[1] == "object" && (e = r[1]), j(r[1]) && (e.defaultValue = r[1]), j(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
      const t = r[3] || r[2];
      Object.keys(t).forEach((i) => {
        e[i] = t[i];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), or = (r) => (j(r.ns) && (r.ns = [r.ns]), j(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), j(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && !r.supportedLngs.includes("cimode") && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r), xt = () => {
}, ls = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
};
class it extends It {
  constructor(e = {}, t) {
    if (super(), this.options = or(e), this.services = {}, this.logger = ge, this.modules = {
      external: []
    }, ls(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (j(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
    const i = qt();
    this.options = {
      ...i,
      ...this.options,
      ...or(e)
    }, this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = i.overloadTranslationOptionHandler);
    const o = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? ge.init(o(this.modules.logger), this.options) : ge.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = ss;
      const d = new Zi(this.options);
      this.store = new Ji(this.options.resources, this.options);
      const p = this.services;
      p.logger = ge, p.resourceStore = this.store, p.languageUtils = d, p.pluralResolver = new is(d, {
        prepend: this.options.pluralSeparator
      }), c && (p.formatter = o(c), p.formatter.init && p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new ir(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new as(o(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", (u, ...w) => {
        this.emit(u, ...w);
      }), this.modules.languageDetector && (p.languageDetector = o(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = o(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Ut(this.services, this.options), this.translator.on("*", (u, ...w) => {
        this.emit(u, ...w);
      }), this.modules.external.forEach((u) => {
        u.init && u.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = xt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...d) => this.store[c](...d);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...d) => (this.store[c](...d), this);
    });
    const a = Ge(), l = () => {
      const c = (d, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(p), t(d, p);
      };
      if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
  }
  loadResources(e, t = xt) {
    var s, n;
    let i = t;
    const o = j(e) ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const a = [], l = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((p) => {
          p !== "cimode" && (a.includes(p) || a.push(p));
        });
      };
      o ? l(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => l(d)), (n = (s = this.options.preload) == null ? void 0 : s.forEach) == null || n.call(s, (c) => l(c)), this.services.backendConnector.load(a, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(c);
      });
    } else
      i(null);
  }
  reloadResources(e, t, i) {
    const o = Ge();
    return typeof e == "function" && (i = e, e = void 0), typeof t == "function" && (i = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), i || (i = xt), this.services.backendConnector.reload(e, t, (s) => {
      o.resolve(), i(s);
    }), o;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Xr.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !["cimode", "dev"].includes(e)) {
      for (let t = 0; t < this.languages.length; t++) {
        const i = this.languages[t];
        if (!["cimode", "dev"].includes(i) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
      !this.resolvedLanguage && !this.languages.includes(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, t) {
    this.isLanguageChangingTo = e;
    const i = Ge();
    this.emit("languageChanging", e);
    const o = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, s = (a, l) => {
      l ? this.isLanguageChangingTo === e && (o(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, i.resolve((...c) => this.t(...c)), t && t(a, (...c) => this.t(...c));
    }, n = (a) => {
      var d, p;
      !e && !a && this.services.languageDetector && (a = []);
      const l = j(a) ? a : a && a[0], c = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(j(a) ? [a] : a);
      c && (this.language || o(c), this.translator.language || this.translator.changeLanguage(c), (p = (d = this.services.languageDetector) == null ? void 0 : d.cacheUserLanguage) == null || p.call(d, c)), this.loadResources(c, (u) => {
        s(u, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? n(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(n) : this.services.languageDetector.detect(n) : n(e), i;
  }
  getFixedT(e, t, i, o) {
    const s = o == null ? void 0 : o.scopeNs, n = (a, l, ...c) => {
      let d;
      typeof l != "object" ? d = this.options.overloadTranslationOptionHandler([a, l].concat(c)) : d = {
        ...l
      }, d.lng = d.lng || n.lng, d.lngs = d.lngs || n.lngs;
      const p = d.ns !== void 0 && d.ns !== null;
      d.ns = d.ns || n.ns, d.keyPrefix !== "" && (d.keyPrefix = d.keyPrefix || i || n.keyPrefix);
      const u = {
        ...this.options,
        ...d
      };
      Array.isArray(s) && !p && (u.ns = s), typeof d.keyPrefix == "function" && (d.keyPrefix = Me(d.keyPrefix, u));
      const w = this.options.keySeparator || ".";
      let m;
      return d.keyPrefix && Array.isArray(a) ? m = a.map((v) => (typeof v == "function" && (v = Me(v, u)), `${d.keyPrefix}${w}${v}`)) : (typeof a == "function" && (a = Me(a, u)), m = d.keyPrefix ? `${d.keyPrefix}${w}${a}` : a), this.t(m, d);
    };
    return j(e) ? n.lng = e : n.lngs = e, n.ns = t, n.keyPrefix = i, n;
  }
  t(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.translate(...e);
  }
  exists(...e) {
    var t;
    return (t = this.translator) == null ? void 0 : t.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, t = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = t.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const n = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, n);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || n(i, e) && (!o || n(s, e)));
  }
  loadNamespaces(e, t) {
    const i = Ge();
    return this.options.ns ? (j(e) && (e = [e]), e.forEach((o) => {
      this.options.ns.includes(o) || this.options.ns.push(o);
    }), this.loadResources((o) => {
      i.resolve(), t && t(o);
    }), i) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const i = Ge();
    j(e) && (e = [e]);
    const o = this.options.preload || [], s = e.filter((n) => !o.includes(n) && this.services.languageUtils.isSupportedCode(n));
    return s.length ? (this.options.preload = o.concat(s), this.loadResources((n) => {
      i.resolve(), t && t(n);
    }), i) : (t && t(), Promise.resolve());
  }
  dir(e) {
    var o, s;
    if (e || (e = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const n = new Intl.Locale(e);
      if (n && n.getTextInfo) {
        const a = n.getTextInfo();
        if (a && a.direction) return a.direction;
      }
    } catch {
    }
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = ((s = this.services) == null ? void 0 : s.languageUtils) || new Zi(qt());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(i.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, t) {
    const i = new it(e, t);
    return i.createInstance = it.createInstance, i;
  }
  cloneInstance(e = {}, t = xt) {
    const i = e.forkResourceStore;
    i && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, s = new it(o);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (s.logger = s.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      s[a] = this[a];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, i) {
      const a = Object.keys(this.store.data).reduce((l, c) => (l[c] = {
        ...this.store.data[c]
      }, l[c] = Object.keys(l[c]).reduce((d, p) => (d[p] = {
        ...l[c][p]
      }, d), l[c]), l), {});
      s.store = new Ji(a, o), s.services.resourceStore = s.store;
    }
    if (e.interpolation) {
      const l = {
        ...qt().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, c = {
        ...o,
        interpolation: l
      };
      s.services.interpolator = new ir(c);
    }
    return s.translator = new Ut(s.services, o), s.translator.on("*", (a, ...l) => {
      s.emit(a, ...l);
    }), s.init(o, t), s.translator.options = o, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ae = it.createInstance();
ae.createInstance;
ae.dir;
ae.init;
ae.loadResources;
ae.reloadResources;
ae.use;
ae.changeLanguage;
ae.getFixedT;
ae.t;
ae.exists;
ae.setDefaultNamespace;
ae.hasLoadedNamespace;
ae.loadNamespaces;
ae.loadLanguages;
const Zr = [
  "__proto__",
  "constructor",
  "prototype"
];
function Qr(r) {
  return !(typeof r != "string" || r.length === 0 || r.length > 128 || Zr.indexOf(r) > -1 || r.indexOf("..") > -1 || r.indexOf("\\") > -1 || /[?#%\s@]/.test(r) || /[\x00-\x1F\x7F]/.test(r));
}
function eo(r) {
  return !(!Qr(r) || r.indexOf("/") > -1);
}
function cs(r) {
  return Qr(r);
}
const ds = {
  lng: eo,
  ns: cs
};
function bt(r) {
  return typeof r != "string" ? r : r.replace(/[\r\n\x00-\x1F\x7F]/g, " ");
}
function ps(r) {
  if (typeof r != "string" || r.length === 0) return r;
  try {
    const e = new URL(r);
    return e.username || e.password ? (e.username = "", e.password = "", e.toString()) : r;
  } catch {
    return r.replace(/(\/\/)[^/@\s]+@/g, "$1");
  }
}
function to() {
  return typeof XMLHttpRequest == "function" || typeof XMLHttpRequest == "object";
}
function us(r) {
  return !!r && typeof r.then == "function";
}
function fs(r) {
  return us(r) ? r : Promise.resolve(r);
}
const hs = /\{\{(.+?)\}\}/g;
function sr(r, e) {
  let t = !1;
  const i = r.replace(hs, (o, s) => {
    const n = s.trim();
    if (Zr.indexOf(n) > -1) return o;
    const a = e[n];
    if (a == null) return o;
    const l = ds[n] || eo, c = String(a).split("+");
    for (const d of c) if (!l(d))
      return t = !0, o;
    return c.join("+");
  });
  return t ? null : i;
}
const Re = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : void 0;
let Rt;
typeof fetch == "function" ? Rt = fetch : Re && typeof Re.fetch == "function" && (Rt = Re.fetch);
const nr = to() && Re ? Re.XMLHttpRequest : void 0, gs = typeof ActiveXObject == "function" && Re ? Re.ActiveXObject : void 0, io = [
  "__proto__",
  "constructor",
  "prototype"
], ti = (r, e) => {
  if (e && typeof e == "object") {
    let t = "";
    for (const i of Object.keys(e))
      io.indexOf(i) > -1 || (t += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
    if (!t) return r;
    r = r + (r.indexOf("?") !== -1 ? "&" : "?") + t.slice(1);
  }
  return r;
}, ar = (r, e, t, i) => {
  const o = (s) => {
    if (!s.ok) return t(s.statusText || "Error", { status: s.status });
    s.text().then((n) => {
      t(null, {
        status: s.status,
        data: n
      });
    }).catch(t);
  };
  if (i) {
    const s = i(r, e);
    if (s instanceof Promise) {
      s.then(o).catch(t);
      return;
    }
  }
  typeof fetch == "function" ? fetch(r, e).then(o).catch(t) : Rt(r, e).then(o).catch(t);
}, ms = (r, e, t, i) => {
  r.queryStringParams && (e = ti(e, r.queryStringParams));
  const o = { ...typeof r.customHeaders == "function" ? r.customHeaders() : r.customHeaders };
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (o["User-Agent"] = `i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`), t && (o["Content-Type"] = "application/json");
  const s = typeof r.requestOptions == "function" ? r.requestOptions(t) : r.requestOptions, n = {
    method: t ? "POST" : "GET",
    body: t ? r.stringify(t) : void 0,
    headers: o,
    ...r._omitFetchOptions ? {} : s
  }, a = typeof r.alternateFetch == "function" && r.alternateFetch.length >= 1 ? r.alternateFetch : void 0;
  try {
    ar(e, n, i, a);
  } catch (l) {
    if (!s || Object.keys(s).length === 0 || !l.message || l.message.indexOf("not implemented") < 0) return i(l);
    try {
      Object.keys(s).forEach((c) => {
        delete n[c];
      }), ar(e, n, i, a), r._omitFetchOptions = !0;
    } catch (c) {
      i(c);
    }
  }
}, xs = (r, e, t, i) => {
  t && typeof t == "object" && (t = ti("", t).slice(1)), r.queryStringParams && (e = ti(e, r.queryStringParams));
  try {
    const o = nr ? new nr() : new gs("MSXML2.XMLHTTP.3.0");
    o.open(t ? "POST" : "GET", e, 1), r.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!r.withCredentials, t && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
    let s = r.customHeaders;
    if (s = typeof s == "function" ? s() : s, s) for (const n of Object.keys(s))
      io.indexOf(n) > -1 || o.setRequestHeader(n, s[n]);
    o.onreadystatechange = () => {
      o.readyState > 3 && i(o.status >= 400 ? o.statusText : null, {
        status: o.status,
        data: o.responseText
      });
    }, o.send(t);
  } catch (o) {
    console && console.log(o);
  }
}, bs = (r, e, t, i) => {
  if (typeof t == "function" && (i = t, t = void 0), i = i || (() => {
  }), Rt && e.indexOf("file:") !== 0) return ms(r, e, t, i);
  if (to() || typeof ActiveXObject == "function") return xs(r, e, t, i);
  i(/* @__PURE__ */ new Error("No fetch and no xhr implementation found!"));
}, vs = () => ({
  loadPath: "/locales/{{lng}}/{{ns}}.json",
  addPath: "/locales/add/{{lng}}/{{ns}}",
  parse: (r) => JSON.parse(r),
  stringify: JSON.stringify,
  parsePayload: (r, e, t) => ({ [e]: t || "" }),
  parseLoadPayload: (r, e) => {
  },
  request: bs,
  reloadInterval: typeof window < "u" ? !1 : 3600 * 1e3,
  customHeaders: {},
  queryStringParams: {},
  crossDomain: !1,
  withCredentials: !1,
  overrideMimeType: !1,
  requestOptions: {
    mode: "cors",
    credentials: "same-origin",
    cache: "default"
  }
});
var ro = class {
  constructor(r, e = {}, t = {}) {
    this.services = r, this.options = e, this.allOptions = t, this.type = "backend", this.init(r, e, t);
  }
  init(r, e = {}, t = {}) {
    if (this.services = r, this.options = {
      ...vs(),
      ...this.options || {},
      ...e
    }, this.allOptions = t, this.services && this.options.reloadInterval) {
      const i = setInterval(() => this.reload(), this.options.reloadInterval);
      typeof i == "object" && typeof i.unref == "function" && i.unref();
    }
  }
  readMulti(r, e, t) {
    this._readAny(r, r, e, e, t);
  }
  read(r, e, t) {
    this._readAny([r], r, [e], e, t);
  }
  _readAny(r, e, t, i, o) {
    let s = this.options.loadPath;
    typeof this.options.loadPath == "function" && (s = this.options.loadPath(r, t)), s = fs(s), s.then((n) => {
      if (!n) return o(null, {});
      const a = sr(n, {
        lng: r.join("+"),
        ns: t.join("+")
      });
      if (a == null) {
        const l = r.map(bt).join(", "), c = t.map(bt).join(", ");
        return o(/* @__PURE__ */ new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=[" + l + "] namespaces=[" + c + "]"), !1);
      }
      this.loadUrl(a, o, e, i);
    });
  }
  loadUrl(r, e, t, i) {
    const o = typeof t == "string" ? [t] : t, s = typeof i == "string" ? [i] : i, n = this.options.parseLoadPayload(o, s), a = bt(ps(r));
    this.options.request(this.options, r, n, (l, c) => {
      if (c && (c.status >= 500 && c.status < 600 || !c.status)) return e("failed loading " + a + "; status code: " + c.status, !0);
      if (c && c.status >= 400 && c.status < 500) return e("failed loading " + a + "; status code: " + c.status, !1);
      if (!c && l && l.message) {
        const u = l.message.toLowerCase();
        if ([
          "failed",
          "fetch",
          "network",
          "load"
        ].find((w) => u.indexOf(w) > -1)) return e("failed loading " + a + ": " + bt(l.message), !0);
      }
      if (l) return e(l, !1);
      let d, p;
      try {
        typeof c.data == "string" ? d = this.options.parse(c.data, t, i) : d = c.data;
      } catch {
        p = "failed parsing " + a + " to json";
      }
      if (p) return e(p, !1);
      e(null, d);
    });
  }
  create(r, e, t, i, o) {
    if (!this.options.addPath) return;
    typeof r == "string" && (r = [r]);
    const s = this.options.parsePayload(e, t, i);
    let n = 0;
    const a = [], l = [];
    r.forEach((c) => {
      let d = this.options.addPath;
      typeof this.options.addPath == "function" && (d = this.options.addPath(c, e));
      const p = sr(d, {
        lng: c,
        ns: e
      });
      if (p == null) {
        n += 1, o && n === r.length && o(a, l);
        return;
      }
      this.options.request(this.options, p, s, (u, w) => {
        n += 1, a.push(u), l.push(w), n === r.length && typeof o == "function" && o(a, l);
      });
    });
  }
  reload() {
    const { backendConnector: r, languageUtils: e, logger: t } = this.services, i = r.language;
    if (i && i.toLowerCase() === "cimode") return;
    const o = [], s = (n) => {
      e.toResolveHierarchy(n).forEach((a) => {
        o.indexOf(a) < 0 && o.push(a);
      });
    };
    s(i), this.allOptions.preload && this.allOptions.preload.forEach((n) => s(n)), o.forEach((n) => {
      this.allOptions.ns.forEach((a) => {
        r.read(n, a, "read", null, null, (l, c) => {
          l && t.warn(`loading namespace ${a} for language ${n} failed`, l), !l && c && t.log(`loaded namespace ${a} for language ${n}`, c), r.loaded(`${n}|${a}`, l, c);
        });
      });
    });
  }
};
ro.type = "backend";
const oo = "f7b2366e-fcb6-4f1a-8f23-8de48422989a", ys = "https://i18n-fastly.ultrafast.io", ws = "https://neo.wordplex.io", ii = "uploader";
let $e = null;
async function _s(r = "en") {
  return $e ? ($e.language !== r && await $e.changeLanguage(r), { i18n: $e, isNew: !1 }) : ($e = ae.createInstance(), await $e.use(ro).init({
    lng: r,
    fallbackLng: "en",
    ns: [ii],
    defaultNS: ii,
    saveMissing: !0,
    // enables missingKey event consumed by missingKeysHelper
    missingKeyNoValueFallbackToKey: !1,
    backend: {
      // Disable the http-backend's auto-POST of missing keys. Default addPath
      // is `/locales/add/{{lng}}/{{ns}}`, which would hit the host site for
      // every missing key — pure noise. We collect missing keys via the
      // i18next 'missingKey' event instead (see missing-keys-helper).
      addPath: "",
      // The grid has no namespace in Wordplex; the CDN response format is:
      // { lng: { __without_namespace: { key: value, ... } } }
      loadPath: `${ys}/api/export/grid/f2/${oo}?langs={{lng}}&separator=+&response_format=i18next_multi`,
      parse(e, t) {
        var s;
        const i = JSON.parse(e), o = Array.isArray(t) ? t[0] : t;
        return o && ((s = i[o]) != null && s.__without_namespace) ? i[o].__without_namespace : i;
      }
    }
  }), { i18n: $e, isNew: !0 });
}
const ks = "sfxUploaderTranslationsMissingKeysEnabled";
class Ss {
  constructor() {
    this.enabled = !1, this._missingKeys = {}, this._timer = null, this.debounceDelay = 2e3, this.enabled = typeof localStorage < "u" && localStorage.getItem(ks) === "true", this.enabled && console.log(
      "%c[uploader] TranslationMissingKeysHelper enabled",
      "font-weight:600;"
    ), this._missingKeys = new Proxy(this._missingKeys, {
      set: (e, t, i, o) => (this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => this._renderCurl(), this.debounceDelay), Reflect.set(e, t, i, o))
    });
  }
  handleMissingKey(e, t = "", i = ii) {
    if (!this.enabled) return;
    const o = `${i}:${e}`;
    this._missingKeys[o] = { value: t, ns: i };
  }
  _renderCurl() {
    console.group("[uploader] Missing translation keys"), console.log("%cMissing keys:", "font-weight:600;font-size:200%;"), console.table({ ...this._missingKeys }), console.log("%ccURL (check carefully data before send):", "font-weight:600;font-size:150%;"), console.log(`
curl '${ws}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${oo}","translations_requests":${JSON.stringify(
      Object.entries(this._missingKeys).map(([e, { value: t, ns: i }]) => ({
        key: i && e.startsWith(`${i}:`) ? e.slice(i.length + 1) : e,
        lang: "en",
        default: t
      }))
    ).replaceAll("'", "'\\''")}}'
    `), console.groupEnd();
  }
}
const $s = new Ss(), Vt = (r) => r.includes("-") ? r : r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
class Cs extends Bo {
  constructor(e) {
    if (super(e), this._appliedProps = /* @__PURE__ */ new Set(), e.type !== No.ELEMENT)
      throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>");
  }
  // Element directives must implement render(); all real work is in update().
  render(e) {
    return Bt;
  }
  update(e, [t]) {
    if (t === this._lastStyles) return Bt;
    this._lastStyles = t;
    const { style: i } = e.element, o = t ?? {};
    for (const s of this._appliedProps)
      (!(s in o) || o[s] == null || o[s] === "") && (i.removeProperty(Vt(s)), this._appliedProps.delete(s));
    for (const [s, n] of Object.entries(o))
      n != null && n !== "" ? (i.setProperty(Vt(s), n), this._appliedProps.add(s)) : this._appliedProps.has(s) && (i.removeProperty(Vt(s)), this._appliedProps.delete(s));
    return Bt;
  }
}
const Z = Mo(Cs);
function Ps(r, e) {
  var n, a, l;
  const t = (n = e == null ? void 0 : e.getLocateUrl) == null ? void 0 : n.call(e, r);
  if (t) return t;
  const i = (e == null ? void 0 : e.adminUrl) ?? (typeof window < "u" ? window.location.origin : void 0);
  if (!i) return null;
  const o = (l = (a = r.response) == null ? void 0 : a.file) == null ? void 0 : l.uuid;
  return o ? `${i.replace(/\/+$/, "")}/library?lf=${encodeURIComponent(btoa(o))}` : null;
}
class Es {
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
function G(r, e, t) {
  const i = r.getState().files, o = i.get(e);
  if (!o) return;
  const s = new Map(i);
  s.set(e, { ...o, ...t }), r.setState({ files: s });
}
function Le(r, e) {
  const t = new Map(r.getState().files);
  t.set(e.id, e), r.setState({ files: t });
}
function lr(r, e) {
  const t = r.getState().files;
  if (!t.has(e)) return;
  const i = new Map(t);
  i.delete(e), r.setState({ files: i });
}
function Us() {
  return new Es({
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
    isUploading: !1,
    t: (r, e, t) => {
      const i = (o, s) => o.replace(/\{\{(\w+)\}\}/g, (n, a) => String(s[a] ?? ""));
      if (typeof e == "string")
        return i(e, t ?? {});
      if (typeof e == "object" && e !== null) {
        const o = e, s = o.count;
        if (s !== void 0) {
          const n = String(
            (s === 1 ? o.defaultValue_one : o.defaultValue_other) ?? o.defaultValue ?? r
          );
          return i(n, o);
        }
        return i(String(o.defaultValue ?? r), o);
      }
      return r;
    }
  });
}
class Rs {
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
const Os = "SAME_ASSET_EXISTS_SKIP_UPLOAD", Fs = "ERROR_SHA1_CONFLICT";
function pt(r) {
  return (r == null ? void 0 : r.code) === Os || (r == null ? void 0 : r.code) === Fs;
}
function yi(r, e) {
  return {
    ...r,
    status: "success",
    file: r.file ?? {
      uuid: r.existing_file_uuid ?? "",
      name: e.name,
      extension: e.name.split(".").pop() ?? "",
      type: e.type,
      size: e.size,
      url: { public: "", cdn: "" },
      meta: {},
      tags: [],
      info: {},
      created_at: "",
      modified_at: ""
    }
  };
}
const so = /[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;
function vc(r) {
  return r == null || r === "" ? null : typeof r != "string" || so.test(r) ? "productRefInvalid" : null;
}
function yc(r) {
  if (r == null || r === "") return null;
  const e = typeof r == "number" ? r : Number(r);
  return !Number.isFinite(e) || !Number.isInteger(e) ? "productPositionInvalid" : null;
}
function wi(r) {
  return r ? r.ref != null && r.ref !== "" || r.position != null : !1;
}
function _i(r) {
  const e = {};
  return (r == null ? void 0 : r.ref) != null && r.ref !== "" && (e.ref = r.ref), (r == null ? void 0 : r.position) != null && (e.position = r.position), e;
}
function cr(r, e) {
  const t = { ...r ?? {} };
  for (const i of Object.keys(e)) {
    const o = e[i];
    o === void 0 ? delete t[i] : t[i] = o;
  }
  return t;
}
function Ts(r, e, t) {
  let o = `${r.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e)}`;
  if (t)
    for (const [s, n] of Object.entries(t))
      n != null && (o += `&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);
  return o;
}
function Ls(r, e) {
  const t = new XMLHttpRequest();
  let i = !1;
  const o = Ts(e.apiBase, e.folder, e.extraParams);
  t.open("POST", o);
  for (const [n, a] of Object.entries(e.authHeaders))
    t.setRequestHeader(n, a);
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
    t.status >= 200 && t.status < 300 && n.status === "success" ? e.onComplete(n) : pt(n) ? e.onComplete(yi(n, r)) : e.onError(new Error(n.hint || n.msg || `Upload failed (HTTP ${t.status})`));
  }), t.addEventListener("error", () => {
    i || e.onError(new Error("Network error — check your connection"));
  });
  const s = new FormData();
  if (r.file) {
    const n = {
      name: r.name,
      type: r.type
    };
    s.append("info[files[]]", JSON.stringify(n)), Object.keys(r.meta).length > 0 && s.append("meta[files[]]", JSON.stringify(r.meta)), r.tags.length > 0 && s.append("tags[files[]]", JSON.stringify(r.tags)), wi(r.product) && s.append(
      "product[files[]]",
      JSON.stringify(_i(r.product))
    ), s.append("files[]", r.file, r.name);
  }
  return t.send(s), {
    abort() {
      i = !0, t.abort();
    }
  };
}
function At(r) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "uppy-auth-token": r
  };
}
function Se(r) {
  return r.replace(/\/+$/, "");
}
const zs = {
  "google-drive": "drive",
  dropbox: "dropbox",
  onedrive: "onedrive",
  box: "box",
  instagram: "instagram",
  facebook: "facebook",
  unsplash: "unsplash"
};
function ut(r) {
  return zs[r] ?? r;
}
function wc(r, e) {
  const t = Se(r), i = btoa(JSON.stringify({ origin: window.location.origin })), o = ut(e);
  return `${t}/${o}/connect?state=${encodeURIComponent(i)}`;
}
async function Is(r, e, t, i = "", o) {
  const s = Se(r), n = i ? `/${i}` : "", a = ut(e), l = await fetch(`${s}/${a}/list${n}`, {
    method: "GET",
    headers: At(t),
    credentials: "same-origin",
    signal: o
  });
  if (l.status === 401)
    throw new ki();
  if (!l.ok) {
    const c = await l.json().catch(() => null);
    throw new Error((c == null ? void 0 : c.message) || `Companion list failed (HTTP ${l.status})`);
  }
  return l.json();
}
async function As(r, e, t, i) {
  const o = Se(r), s = await fetch(`${o}/${t}`, {
    method: "GET",
    headers: At(e),
    credentials: "same-origin",
    signal: i
  });
  if (s.status === 401)
    throw new ki();
  if (!s.ok) {
    const n = await s.json().catch(() => null);
    throw new Error((n == null ? void 0 : n.message) || `Companion list failed (HTTP ${s.status})`);
  }
  return s.json();
}
async function _c(r, e, t, i, o, s) {
  const n = [];
  async function a(l, c) {
    let d = null, p = !0;
    do {
      if (s != null && s.aborted) throw new DOMException("Aborted", "AbortError");
      const u = p ? await Is(r, e, t, l, s) : await As(r, t, d, s);
      p = !1, d = u.nextPagePath;
      for (const w of u.items) {
        if (s != null && s.aborted) throw new DOMException("Aborted", "AbortError");
        if (w.isFolder) {
          const m = c ? `${c}/${w.name}` : w.name;
          await a(w.requestPath, m);
        } else
          n.push({ ...w, relativeFolder: c });
      }
    } while (d);
  }
  return await a(i, o), n;
}
async function kc(r, e, t, i) {
  const o = Se(r), s = ut(e), n = i ? `q=${encodeURIComponent(t)}&${i}` : `q=${encodeURIComponent(t)}`, a = await fetch(`${o}/search/${s}/list?${n}`, {
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
async function Ds(r, e, t, i, o, s = !1) {
  const n = Se(r), a = ut(e), l = s ? `${n}/search/${a}/get/${i}` : `${n}/${a}/get/${i}`, c = s ? { Accept: "application/json", "Content-Type": "application/json" } : At(t), d = await fetch(l, {
    method: "POST",
    headers: c,
    credentials: "same-origin",
    body: JSON.stringify({
      ...o,
      httpMethod: o.httpMethod ?? "POST",
      useFormData: o.useFormData ?? !0,
      fieldname: o.fieldname ?? "files[]"
    })
  });
  if (d.status === 401)
    throw new ki();
  if (!d.ok) {
    const p = await d.json().catch(() => null);
    throw new Error((p == null ? void 0 : p.message) || `Companion upload failed (HTTP ${d.status})`);
  }
  return d.json();
}
async function js(r, e, t) {
  const i = Se(r), o = await fetch(`${i}/url/meta`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({ url: e }),
    signal: t
  });
  if (!o.ok) {
    const s = await o.json().catch(() => null);
    throw new Error((s == null ? void 0 : s.message) || `Could not fetch URL metadata (HTTP ${o.status})`);
  }
  return o.json();
}
async function Ms(r, e, t, i) {
  const o = Se(r), s = await fetch(`${o}/url/get`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({
      url: e,
      ...t,
      httpMethod: "POST",
      useFormData: !0,
      fieldname: "files[]"
    }),
    signal: i
  });
  if (!s.ok) {
    const n = await s.json().catch(() => null);
    throw new Error((n == null ? void 0 : n.message) || `Companion URL upload failed (HTTP ${s.status})`);
  }
  return s.json();
}
async function Sc(r, e, t) {
  const i = Se(r), o = ut(e), s = await fetch(`${i}/${o}/logout`, {
    method: "GET",
    headers: At(t),
    credentials: "same-origin"
  });
  return s.ok ? s.json() : { ok: !1, revoked: !1 };
}
function Bs(r) {
  var o;
  const t = ((o = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r)) == null ? void 0 : o[1]) ?? r;
  return `${/^https:\/\//i.test(r) ? "wss" : "ws"}://${t}`;
}
class ki extends Error {
  constructor() {
    super("Authentication expired"), this.name = "AuthExpiredError";
  }
}
function no(r, e, t) {
  let o = `${r.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e)}`;
  if (t)
    for (const [s, n] of Object.entries(t))
      n != null && (o += `&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);
  return o;
}
function ao(r, e) {
  const t = {
    name: r.name,
    type: r.type,
    "filerobot-folder": e
  };
  return r.meta && Object.keys(r.meta).length > 0 && (t.meta = JSON.stringify(r.meta)), r.tags && r.tags.length > 0 && (t.tags = JSON.stringify(r.tags)), wi(r.product) && (t.product = JSON.stringify(_i(r.product))), t;
}
function lo(r) {
  const t = `${Bs(r.companionUrl)}/api/${r.token}`;
  let i;
  try {
    i = new WebSocket(t);
  } catch {
    return r.onError(new Error("Failed to connect to upload progress channel")), null;
  }
  let o = !1;
  const s = () => {
    o = !0, i.onmessage = null, i.onerror = null, i.onclose = null;
  };
  return i.onmessage = (n) => {
    var a, l, c;
    if (!o)
      try {
        const d = JSON.parse(n.data);
        switch (d.action) {
          case "progress": {
            const p = d.payload, u = p.bytesUploaded ?? 0, w = p.bytesTotal ?? (r.expectedSize || 1);
            r.onProgress(u, w);
            break;
          }
          case "success": {
            const p = d.payload;
            if (s(), i.close(), (a = p.response) != null && a.responseText)
              try {
                const u = JSON.parse(p.response.responseText);
                if (u.status === "success") {
                  r.onComplete(u);
                  return;
                }
                if (pt(u)) {
                  r.onComplete(yi(u, r.uploadFile));
                  return;
                }
                r.onError(new Error(u.msg || "Upload failed"));
                return;
              } catch {
              }
            r.onError(new Error("Upload completed but no valid response received"));
            break;
          }
          case "error": {
            const p = d.payload;
            s(), i.close();
            let u = ((l = p.error) == null ? void 0 : l.message) || "Upload failed";
            if ((c = p.response) != null && c.responseText)
              try {
                const w = JSON.parse(p.response.responseText);
                u = w.hint || w.msg || w.message || u;
              } catch {
              }
            r.onError(new Error(u));
            break;
          }
        }
      } catch {
      }
  }, i.onerror = () => {
    o || (s(), r.onError(new Error("Upload progress connection failed")));
  }, i.onclose = () => {
    o || (s(), r.onError(new Error("Upload progress connection closed unexpectedly")));
  }, i;
}
function co(r) {
  if (r) {
    r.onmessage = null, r.onerror = null, r.onclose = null;
    try {
      r.send(JSON.stringify({ action: "cancel", payload: {} }));
    } catch {
    }
    r.close();
  }
}
function Ns(r, e) {
  const t = r.remoteInfo;
  if (!t)
    return e.onError(new Error("remoteInfo is required for companion upload")), { abort() {
    } };
  let i = !1, o = null;
  const s = no(e.apiBase, e.folder, e.extraParams), n = ao(r, e.folder), a = !t.token;
  return Ds(t.companionUrl, t.provider, t.token, t.requestPath, {
    fileId: t.fileId,
    endpoint: s,
    headers: e.authHeaders,
    size: t.size,
    metadata: n
  }, a).then((l) => {
    i || (o = lo({
      companionUrl: t.companionUrl,
      token: l.token,
      uploadFile: r,
      expectedSize: t.size,
      onProgress: (c, d) => {
        i || e.onProgress(c, d);
      },
      onComplete: (c) => {
        i || e.onComplete(c);
      },
      onError: (c) => {
        i || e.onError(c);
      }
    }));
  }).catch((l) => {
    i || e.onError(l instanceof Error ? l : new Error(String(l)));
  }), {
    abort() {
      i = !0, co(o), o = null;
    }
  };
}
function Hs(r, e) {
  const t = r.remoteUrl;
  if (!t)
    return e.onError(new Error("Remote URL is required for URL upload")), { abort() {
    } };
  let i = !1, o = null;
  const s = new AbortController(), n = no(e.apiBase, e.folder, e.extraParams);
  return js(e.companionUrl, t, s.signal).then((a) => {
    var c;
    if (i) return null;
    (c = e.onMeta) == null || c.call(e, { name: a.name, type: a.type, size: a.size });
    const l = ao(r, e.folder);
    return a.name && (l.name = a.name), a.type && (l.type = a.type), Ms(
      e.companionUrl,
      t,
      {
        fileId: r.id,
        endpoint: n,
        headers: e.authHeaders,
        size: a.size,
        metadata: l
      },
      s.signal
    ).then((d) => ({ result: d, size: a.size }));
  }).then((a) => {
    i || !a || (o = lo({
      companionUrl: e.companionUrl,
      token: a.result.token,
      uploadFile: r,
      expectedSize: a.size,
      onProgress: (l, c) => {
        i || e.onProgress(l, c);
      },
      onComplete: (l) => {
        i || e.onComplete(l);
      },
      onError: (l) => {
        i || e.onError(l);
      }
    }));
  }).catch((a) => {
    i || a && a.name === "AbortError" || e.onError(a instanceof Error ? a : new Error(String(a)));
  }), {
    abort() {
      i = !0, s.abort(), co(o), o = null;
    }
  };
}
function ri(r) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ri(r);
}
function qs(r, e, t) {
  return Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Vs(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ks(r, e, t) {
  return e = st(e), Ys(r, Si() ? Reflect.construct(e, t || [], st(r).constructor) : e.apply(r, t));
}
function Ys(r, e) {
  if (e && (ri(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ws(r);
}
function Ws(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Gs(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ot(r, e);
}
function oi(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return oi = function(i) {
    if (i === null || !Js(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(i)) return e.get(i);
      e.set(i, o);
    }
    function o() {
      return Xs(i, arguments, st(this).constructor);
    }
    return o.prototype = Object.create(i.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), ot(o, i);
  }, oi(r);
}
function Xs(r, e, t) {
  if (Si()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, e);
  var o = new (r.bind.apply(r, i))();
  return t && ot(o, t.prototype), o;
}
function Si() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Si = function() {
    return !!r;
  })();
}
function Js(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function ot(r, e) {
  return ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, ot(r, e);
}
function st(r) {
  return st = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, st(r);
}
var Je = /* @__PURE__ */ (function(r) {
  function e(t) {
    var i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    if (Vs(this, e), i = Ks(this, e, [t]), i.originalRequest = s, i.originalResponse = n, i.causingError = o, o != null && (t += ", caused by ".concat(o.toString())), s != null) {
      var a = s.getHeader("X-Request-ID") || "n/a", l = s.getMethod(), c = s.getURL(), d = n ? n.getStatus() : "n/a", p = n ? n.getBody() || "" : "n/a";
      t += ", originated from request (method: ".concat(l, ", url: ").concat(c, ", response code: ").concat(d, ", response text: ").concat(p, ", request id: ").concat(a, ")");
    }
    return i.message = t, i;
  }
  return Gs(e, r), qs(e);
})(/* @__PURE__ */ oi(Error));
function nt(r) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, nt(r);
}
function Zs(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Qs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, tn(i.key), i);
  }
}
function en(r, e, t) {
  return e && Qs(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function tn(r) {
  var e = rn(r, "string");
  return nt(e) == "symbol" ? e : e + "";
}
function rn(r, e) {
  if (nt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (nt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var on = /* @__PURE__ */ (function() {
  function r() {
    Zs(this, r);
  }
  return en(r, [{
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
    value: function(t, i) {
      return Promise.resolve(null);
    }
  }]);
})();
const po = "3.7.8", sn = po, Ye = typeof Buffer == "function", dr = typeof TextDecoder == "function" ? new TextDecoder() : void 0, pr = typeof TextEncoder == "function" ? new TextEncoder() : void 0, nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ze = Array.prototype.slice.call(nn), vt = ((r) => {
  let e = {};
  return r.forEach((t, i) => e[t] = i), e;
})(Ze), an = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, ie = String.fromCharCode.bind(String), ur = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (r) => new Uint8Array(Array.prototype.slice.call(r, 0)), uo = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), fo = (r) => r.replace(/[^A-Za-z0-9\+\/]/g, ""), ho = (r) => {
  let e, t, i, o, s = "";
  const n = r.length % 3;
  for (let a = 0; a < r.length; ) {
    if ((t = r.charCodeAt(a++)) > 255 || (i = r.charCodeAt(a++)) > 255 || (o = r.charCodeAt(a++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | i << 8 | o, s += Ze[e >> 18 & 63] + Ze[e >> 12 & 63] + Ze[e >> 6 & 63] + Ze[e & 63];
  }
  return n ? s.slice(0, n - 3) + "===".substring(n) : s;
}, $i = typeof btoa == "function" ? (r) => btoa(r) : Ye ? (r) => Buffer.from(r, "binary").toString("base64") : ho, si = Ye ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let i = 0, o = r.length; i < o; i += 4096)
    t.push(ie.apply(null, r.subarray(i, i + 4096)));
  return $i(t.join(""));
}, _t = (r, e = !1) => e ? uo(si(r)) : si(r), ln = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? ie(192 | e >>> 6) + ie(128 | e & 63) : ie(224 | e >>> 12 & 15) + ie(128 | e >>> 6 & 63) + ie(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return ie(240 | e >>> 18 & 7) + ie(128 | e >>> 12 & 63) + ie(128 | e >>> 6 & 63) + ie(128 | e & 63);
  }
}, cn = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, go = (r) => r.replace(cn, ln), fr = Ye ? (r) => Buffer.from(r, "utf8").toString("base64") : pr ? (r) => si(pr.encode(r)) : (r) => $i(go(r)), Be = (r, e = !1) => e ? uo(fr(r)) : fr(r), hr = (r) => Be(r, !0), dn = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, pn = (r) => {
  switch (r.length) {
    case 4:
      var e = (7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3), t = e - 65536;
      return ie((t >>> 10) + 55296) + ie((t & 1023) + 56320);
    case 3:
      return ie((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));
    default:
      return ie((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
  }
}, mo = (r) => r.replace(dn, pn), xo = (r) => {
  if (r = r.replace(/\s+/g, ""), !an.test(r))
    throw new TypeError("malformed base64.");
  r += "==".slice(2 - (r.length & 3));
  let e, t, i, o = [];
  for (let s = 0; s < r.length; )
    e = vt[r.charAt(s++)] << 18 | vt[r.charAt(s++)] << 12 | (t = vt[r.charAt(s++)]) << 6 | (i = vt[r.charAt(s++)]), t === 64 ? o.push(ie(e >> 16 & 255)) : i === 64 ? o.push(ie(e >> 16 & 255, e >> 8 & 255)) : o.push(ie(e >> 16 & 255, e >> 8 & 255, e & 255));
  return o.join("");
}, Ci = typeof atob == "function" ? (r) => atob(fo(r)) : Ye ? (r) => Buffer.from(r, "base64").toString("binary") : xo, bo = Ye ? (r) => ur(Buffer.from(r, "base64")) : (r) => ur(Ci(r).split("").map((e) => e.charCodeAt(0))), vo = (r) => bo(yo(r)), un = Ye ? (r) => Buffer.from(r, "base64").toString("utf8") : dr ? (r) => dr.decode(bo(r)) : (r) => mo(Ci(r)), yo = (r) => fo(r.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), ni = (r) => un(yo(r)), fn = (r) => {
  if (typeof r != "string")
    return !1;
  const e = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, wo = (r) => ({
  value: r,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), _o = function() {
  const r = (e, t) => Object.defineProperty(String.prototype, e, wo(t));
  r("fromBase64", function() {
    return ni(this);
  }), r("toBase64", function(e) {
    return Be(this, e);
  }), r("toBase64URI", function() {
    return Be(this, !0);
  }), r("toBase64URL", function() {
    return Be(this, !0);
  }), r("toUint8Array", function() {
    return vo(this);
  });
}, ko = function() {
  const r = (e, t) => Object.defineProperty(Uint8Array.prototype, e, wo(t));
  r("toBase64", function(e) {
    return _t(this, e);
  }), r("toBase64URI", function() {
    return _t(this, !0);
  }), r("toBase64URL", function() {
    return _t(this, !0);
  });
}, hn = () => {
  _o(), ko();
}, gn = {
  version: po,
  VERSION: sn,
  atob: Ci,
  atobPolyfill: xo,
  btoa: $i,
  btoaPolyfill: ho,
  fromBase64: ni,
  toBase64: Be,
  encode: Be,
  encodeURI: hr,
  encodeURL: hr,
  utob: go,
  btou: mo,
  decode: ni,
  isValid: fn,
  fromUint8Array: _t,
  toUint8Array: vo,
  extendString: _o,
  extendUint8Array: ko,
  extendBuiltins: hn
};
var gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Kt, mr;
function xn() {
  return mr || (mr = 1, Kt = function(e, t) {
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
  }), Kt;
}
var yt = {}, xr;
function bn() {
  if (xr) return yt;
  xr = 1;
  var r = Object.prototype.hasOwnProperty, e;
  function t(n) {
    try {
      return decodeURIComponent(n.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function i(n) {
    try {
      return encodeURIComponent(n);
    } catch {
      return null;
    }
  }
  function o(n) {
    for (var a = /([^=?#&]+)=?([^&]*)/g, l = {}, c; c = a.exec(n); ) {
      var d = t(c[1]), p = t(c[2]);
      d === null || p === null || d in l || (l[d] = p);
    }
    return l;
  }
  function s(n, a) {
    a = a || "";
    var l = [], c, d;
    typeof a != "string" && (a = "?");
    for (d in n)
      if (r.call(n, d)) {
        if (c = n[d], !c && (c === null || c === e || isNaN(c)) && (c = ""), d = i(d), c = i(c), d === null || c === null) continue;
        l.push(d + "=" + c);
      }
    return l.length ? a + l.join("&") : "";
  }
  return yt.stringify = s, yt.parse = o, yt;
}
var Yt, br;
function vn() {
  if (br) return Yt;
  br = 1;
  var r = xn(), e = bn(), t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, i = /[\n\r\t]/g, o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, s = /:\d+$/, n = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function l(k) {
    return (k || "").toString().replace(t, "");
  }
  var c = [
    ["#", "hash"],
    // Extract from the back.
    ["?", "query"],
    // Extract from the back.
    function(y, _) {
      return u(_.protocol) ? y.replace(/\\/g, "/") : y;
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
  ], d = { hash: 1, query: 1 };
  function p(k) {
    var y;
    typeof window < "u" ? y = window : typeof gr < "u" ? y = gr : typeof self < "u" ? y = self : y = {};
    var _ = y.location || {};
    k = k || _;
    var b = {}, R = typeof k, E;
    if (k.protocol === "blob:")
      b = new v(unescape(k.pathname), {});
    else if (R === "string") {
      b = new v(k, {});
      for (E in d) delete b[E];
    } else if (R === "object") {
      for (E in k)
        E in d || (b[E] = k[E]);
      b.slashes === void 0 && (b.slashes = o.test(k.href));
    }
    return b;
  }
  function u(k) {
    return k === "file:" || k === "ftp:" || k === "http:" || k === "https:" || k === "ws:" || k === "wss:";
  }
  function w(k, y) {
    k = l(k), k = k.replace(i, ""), y = y || {};
    var _ = n.exec(k), b = _[1] ? _[1].toLowerCase() : "", R = !!_[2], E = !!_[3], A = 0, z;
    return R ? E ? (z = _[2] + _[3] + _[4], A = _[2].length + _[3].length) : (z = _[2] + _[4], A = _[2].length) : E ? (z = _[3] + _[4], A = _[3].length) : z = _[4], b === "file:" ? A >= 2 && (z = z.slice(2)) : u(b) ? z = _[4] : b ? R && (z = z.slice(2)) : A >= 2 && u(y.protocol) && (z = _[4]), {
      protocol: b,
      slashes: R || u(b),
      slashesCount: A,
      rest: z
    };
  }
  function m(k, y) {
    if (k === "") return y;
    for (var _ = (y || "/").split("/").slice(0, -1).concat(k.split("/")), b = _.length, R = _[b - 1], E = !1, A = 0; b--; )
      _[b] === "." ? _.splice(b, 1) : _[b] === ".." ? (_.splice(b, 1), A++) : A && (b === 0 && (E = !0), _.splice(b, 1), A--);
    return E && _.unshift(""), (R === "." || R === "..") && _.push(""), _.join("/");
  }
  function v(k, y, _) {
    if (k = l(k), k = k.replace(i, ""), !(this instanceof v))
      return new v(k, y, _);
    var b, R, E, A, z, T, J = c.slice(), de = typeof y, F = this, Y = 0;
    for (de !== "object" && de !== "string" && (_ = y, y = null), _ && typeof _ != "function" && (_ = e.parse), y = p(y), R = w(k || "", y), b = !R.protocol && !R.slashes, F.slashes = R.slashes || b && y.slashes, F.protocol = R.protocol || y.protocol || "", k = R.rest, (R.protocol === "file:" && (R.slashesCount !== 2 || a.test(k)) || !R.slashes && (R.protocol || R.slashesCount < 2 || !u(F.protocol))) && (J[3] = [/(.*)/, "pathname"]); Y < J.length; Y++) {
      if (A = J[Y], typeof A == "function") {
        k = A(k, F);
        continue;
      }
      E = A[0], T = A[1], E !== E ? F[T] = k : typeof E == "string" ? (z = E === "@" ? k.lastIndexOf(E) : k.indexOf(E), ~z && (typeof A[2] == "number" ? (F[T] = k.slice(0, z), k = k.slice(z + A[2])) : (F[T] = k.slice(z), k = k.slice(0, z)))) : (z = E.exec(k)) && (F[T] = z[1], k = k.slice(0, z.index)), F[T] = F[T] || b && A[3] && y[T] || "", A[4] && (F[T] = F[T].toLowerCase());
    }
    _ && (F.query = _(F.query)), b && y.slashes && F.pathname.charAt(0) !== "/" && (F.pathname !== "" || y.pathname !== "") && (F.pathname = m(F.pathname, y.pathname)), F.pathname.charAt(0) !== "/" && u(F.protocol) && (F.pathname = "/" + F.pathname), r(F.port, F.protocol) || (F.host = F.hostname, F.port = ""), F.username = F.password = "", F.auth && (z = F.auth.indexOf(":"), ~z ? (F.username = F.auth.slice(0, z), F.username = encodeURIComponent(decodeURIComponent(F.username)), F.password = F.auth.slice(z + 1), F.password = encodeURIComponent(decodeURIComponent(F.password))) : F.username = encodeURIComponent(decodeURIComponent(F.auth)), F.auth = F.password ? F.username + ":" + F.password : F.username), F.origin = F.protocol !== "file:" && u(F.protocol) && F.host ? F.protocol + "//" + F.host : "null", F.href = F.toString();
  }
  function C(k, y, _) {
    var b = this;
    switch (k) {
      case "query":
        typeof y == "string" && y.length && (y = (_ || e.parse)(y)), b[k] = y;
        break;
      case "port":
        b[k] = y, r(y, b.protocol) ? y && (b.host = b.hostname + ":" + y) : (b.host = b.hostname, b[k] = "");
        break;
      case "hostname":
        b[k] = y, b.port && (y += ":" + b.port), b.host = y;
        break;
      case "host":
        b[k] = y, s.test(y) ? (y = y.split(":"), b.port = y.pop(), b.hostname = y.join(":")) : (b.hostname = y, b.port = "");
        break;
      case "protocol":
        b.protocol = y.toLowerCase(), b.slashes = !_;
        break;
      case "pathname":
      case "hash":
        if (y) {
          var R = k === "pathname" ? "/" : "#";
          b[k] = y.charAt(0) !== R ? R + y : y;
        } else
          b[k] = y;
        break;
      case "username":
      case "password":
        b[k] = encodeURIComponent(y);
        break;
      case "auth":
        var E = y.indexOf(":");
        ~E ? (b.username = y.slice(0, E), b.username = encodeURIComponent(decodeURIComponent(b.username)), b.password = y.slice(E + 1), b.password = encodeURIComponent(decodeURIComponent(b.password))) : b.username = encodeURIComponent(decodeURIComponent(y));
    }
    for (var A = 0; A < c.length; A++) {
      var z = c[A];
      z[4] && (b[z[1]] = b[z[1]].toLowerCase());
    }
    return b.auth = b.password ? b.username + ":" + b.password : b.username, b.origin = b.protocol !== "file:" && u(b.protocol) && b.host ? b.protocol + "//" + b.host : "null", b.href = b.toString(), b;
  }
  function L(k) {
    (!k || typeof k != "function") && (k = e.stringify);
    var y, _ = this, b = _.host, R = _.protocol;
    R && R.charAt(R.length - 1) !== ":" && (R += ":");
    var E = R + (_.protocol && _.slashes || u(_.protocol) ? "//" : "");
    return _.username ? (E += _.username, _.password && (E += ":" + _.password), E += "@") : _.password ? (E += ":" + _.password, E += "@") : _.protocol !== "file:" && u(_.protocol) && !b && _.pathname !== "/" && (E += "@"), (b[b.length - 1] === ":" || s.test(_.hostname) && !_.port) && (b += ":"), E += b + _.pathname, y = typeof _.query == "object" ? k(_.query) : _.query, y && (E += y.charAt(0) !== "?" ? "?" + y : y), _.hash && (E += _.hash), E;
  }
  return v.prototype = { set: C, toString: L }, v.extractProtocol = w, v.location = p, v.trimLeft = l, v.qs = e, Yt = v, Yt;
}
var yn = vn();
const wn = /* @__PURE__ */ mn(yn);
function _n() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    var e = Math.random() * 16 | 0, t = r === "x" ? e : e & 3 | 8;
    return t.toString(16);
  });
}
function ai() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  ai = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(x, h, g) {
    x[h] = g.value;
  }, s = typeof Symbol == "function" ? Symbol : {}, n = s.iterator || "@@iterator", a = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
  function c(x, h, g) {
    return Object.defineProperty(x, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }), x[h];
  }
  try {
    c({}, "");
  } catch {
    c = function(g, P, U) {
      return g[P] = U;
    };
  }
  function d(x, h, g, P) {
    var U = h && h.prototype instanceof L ? h : L, S = Object.create(U.prototype), D = new Y(P || []);
    return o(S, "_invoke", { value: T(x, g, D) }), S;
  }
  function p(x, h, g) {
    try {
      return { type: "normal", arg: x.call(h, g) };
    } catch (P) {
      return { type: "throw", arg: P };
    }
  }
  e.wrap = d;
  var u = "suspendedStart", w = "suspendedYield", m = "executing", v = "completed", C = {};
  function L() {
  }
  function k() {
  }
  function y() {
  }
  var _ = {};
  c(_, n, function() {
    return this;
  });
  var b = Object.getPrototypeOf, R = b && b(b(he([])));
  R && R !== t && i.call(R, n) && (_ = R);
  var E = y.prototype = L.prototype = Object.create(_);
  function A(x) {
    ["next", "throw", "return"].forEach(function(h) {
      c(x, h, function(g) {
        return this._invoke(h, g);
      });
    });
  }
  function z(x, h) {
    function g(U, S, D, H) {
      var q = p(x[U], x, S);
      if (q.type !== "throw") {
        var Q = q.arg, te = Q.value;
        return te && Oe(te) == "object" && i.call(te, "__await") ? h.resolve(te.__await).then(function(se) {
          g("next", se, D, H);
        }, function(se) {
          g("throw", se, D, H);
        }) : h.resolve(te).then(function(se) {
          Q.value = se, D(Q);
        }, function(se) {
          return g("throw", se, D, H);
        });
      }
      H(q.arg);
    }
    var P;
    o(this, "_invoke", { value: function(S, D) {
      function H() {
        return new h(function(q, Q) {
          g(S, D, q, Q);
        });
      }
      return P = P ? P.then(H, H) : H();
    } });
  }
  function T(x, h, g) {
    var P = u;
    return function(U, S) {
      if (P === m) throw Error("Generator is already running");
      if (P === v) {
        if (U === "throw") throw S;
        return { value: r, done: !0 };
      }
      for (g.method = U, g.arg = S; ; ) {
        var D = g.delegate;
        if (D) {
          var H = J(D, g);
          if (H) {
            if (H === C) continue;
            return H;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (P === u) throw P = v, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        P = m;
        var q = p(x, h, g);
        if (q.type === "normal") {
          if (P = g.done ? v : w, q.arg === C) continue;
          return { value: q.arg, done: g.done };
        }
        q.type === "throw" && (P = v, g.method = "throw", g.arg = q.arg);
      }
    };
  }
  function J(x, h) {
    var g = h.method, P = x.iterator[g];
    if (P === r) return h.delegate = null, g === "throw" && x.iterator.return && (h.method = "return", h.arg = r, J(x, h), h.method === "throw") || g !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + g + "' method")), C;
    var U = p(P, x.iterator, h.arg);
    if (U.type === "throw") return h.method = "throw", h.arg = U.arg, h.delegate = null, C;
    var S = U.arg;
    return S ? S.done ? (h[x.resultName] = S.value, h.next = x.nextLoc, h.method !== "return" && (h.method = "next", h.arg = r), h.delegate = null, C) : S : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, C);
  }
  function de(x) {
    var h = { tryLoc: x[0] };
    1 in x && (h.catchLoc = x[1]), 2 in x && (h.finallyLoc = x[2], h.afterLoc = x[3]), this.tryEntries.push(h);
  }
  function F(x) {
    var h = x.completion || {};
    h.type = "normal", delete h.arg, x.completion = h;
  }
  function Y(x) {
    this.tryEntries = [{ tryLoc: "root" }], x.forEach(de, this), this.reset(!0);
  }
  function he(x) {
    if (x || x === "") {
      var h = x[n];
      if (h) return h.call(x);
      if (typeof x.next == "function") return x;
      if (!isNaN(x.length)) {
        var g = -1, P = function U() {
          for (; ++g < x.length; ) if (i.call(x, g)) return U.value = x[g], U.done = !1, U;
          return U.value = r, U.done = !0, U;
        };
        return P.next = P;
      }
    }
    throw new TypeError(Oe(x) + " is not iterable");
  }
  return k.prototype = y, o(E, "constructor", { value: y, configurable: !0 }), o(y, "constructor", { value: k, configurable: !0 }), k.displayName = c(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(x) {
    var h = typeof x == "function" && x.constructor;
    return !!h && (h === k || (h.displayName || h.name) === "GeneratorFunction");
  }, e.mark = function(x) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(x, y) : (x.__proto__ = y, c(x, l, "GeneratorFunction")), x.prototype = Object.create(E), x;
  }, e.awrap = function(x) {
    return { __await: x };
  }, A(z.prototype), c(z.prototype, a, function() {
    return this;
  }), e.AsyncIterator = z, e.async = function(x, h, g, P, U) {
    U === void 0 && (U = Promise);
    var S = new z(d(x, h, g, P), U);
    return e.isGeneratorFunction(h) ? S : S.next().then(function(D) {
      return D.done ? D.value : S.next();
    });
  }, A(E), c(E, l, "Generator"), c(E, n, function() {
    return this;
  }), c(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(x) {
    var h = Object(x), g = [];
    for (var P in h) g.push(P);
    return g.reverse(), function U() {
      for (; g.length; ) {
        var S = g.pop();
        if (S in h) return U.value = S, U.done = !1, U;
      }
      return U.done = !0, U;
    };
  }, e.values = he, Y.prototype = { constructor: Y, reset: function(h) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(F), !h) for (var g in this) g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = r);
  }, stop: function() {
    this.done = !0;
    var h = this.tryEntries[0].completion;
    if (h.type === "throw") throw h.arg;
    return this.rval;
  }, dispatchException: function(h) {
    if (this.done) throw h;
    var g = this;
    function P(Q, te) {
      return D.type = "throw", D.arg = h, g.next = Q, te && (g.method = "next", g.arg = r), !!te;
    }
    for (var U = this.tryEntries.length - 1; U >= 0; --U) {
      var S = this.tryEntries[U], D = S.completion;
      if (S.tryLoc === "root") return P("end");
      if (S.tryLoc <= this.prev) {
        var H = i.call(S, "catchLoc"), q = i.call(S, "finallyLoc");
        if (H && q) {
          if (this.prev < S.catchLoc) return P(S.catchLoc, !0);
          if (this.prev < S.finallyLoc) return P(S.finallyLoc);
        } else if (H) {
          if (this.prev < S.catchLoc) return P(S.catchLoc, !0);
        } else {
          if (!q) throw Error("try statement without catch or finally");
          if (this.prev < S.finallyLoc) return P(S.finallyLoc);
        }
      }
    }
  }, abrupt: function(h, g) {
    for (var P = this.tryEntries.length - 1; P >= 0; --P) {
      var U = this.tryEntries[P];
      if (U.tryLoc <= this.prev && i.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
        var S = U;
        break;
      }
    }
    S && (h === "break" || h === "continue") && S.tryLoc <= g && g <= S.finallyLoc && (S = null);
    var D = S ? S.completion : {};
    return D.type = h, D.arg = g, S ? (this.method = "next", this.next = S.finallyLoc, C) : this.complete(D);
  }, complete: function(h, g) {
    if (h.type === "throw") throw h.arg;
    return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && g && (this.next = g), C;
  }, finish: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var P = this.tryEntries[g];
      if (P.finallyLoc === h) return this.complete(P.completion, P.afterLoc), F(P), C;
    }
  }, catch: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var P = this.tryEntries[g];
      if (P.tryLoc === h) {
        var U = P.completion;
        if (U.type === "throw") {
          var S = U.arg;
          F(P);
        }
        return S;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(h, g, P) {
    return this.delegate = { iterator: he(h), resultName: g, nextLoc: P }, this.method === "next" && (this.arg = r), C;
  } }, e;
}
function vr(r, e, t, i, o, s, n) {
  try {
    var a = r[s](n), l = a.value;
  } catch (c) {
    t(c);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, o);
}
function kn(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var s = r.apply(e, t);
      function n(l) {
        vr(s, i, o, n, a, "next", l);
      }
      function a(l) {
        vr(s, i, o, n, a, "throw", l);
      }
      n(void 0);
    });
  };
}
function So(r, e) {
  return Cn(r) || $n(r, e) || $o(r, e) || Sn();
}
function Sn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $n(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var i, o, s, n, a = [], l = !0, c = !1;
    try {
      if (s = (t = t.call(r)).next, e !== 0) for (; !(l = (i = s.call(t)).done) && (a.push(i.value), a.length !== e); l = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!l && t.return != null && (n = t.return(), Object(n) !== n)) return;
      } finally {
        if (c) throw o;
      }
    }
    return a;
  }
}
function Cn(r) {
  if (Array.isArray(r)) return r;
}
function Oe(r) {
  "@babel/helpers - typeof";
  return Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oe(r);
}
function Pn(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = $o(r)) || e) {
      t && (r = t);
      var i = 0, o = function() {
      };
      return { s: o, n: function() {
        return i >= r.length ? { done: !0 } : { done: !1, value: r[i++] };
      }, e: function(c) {
        throw c;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0, n = !1, a;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var c = t.next();
    return s = c.done, c;
  }, e: function(c) {
    n = !0, a = c;
  }, f: function() {
    try {
      !s && t.return != null && t.return();
    } finally {
      if (n) throw a;
    }
  } };
}
function $o(r, e) {
  if (r) {
    if (typeof r == "string") return yr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return yr(r, e);
  }
}
function yr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function wr(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ze(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wr(Object(t), !0).forEach(function(i) {
      En(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : wr(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function En(r, e, t) {
  return e = Co(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Un(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function _r(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Co(i.key), i);
  }
}
function Rn(r, e, t) {
  return e && _r(r.prototype, e), t && _r(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Co(r) {
  var e = On(r, "string");
  return Oe(e) == "symbol" ? e : e + "";
}
function On(r, e) {
  if (Oe(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Oe(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var kt = "tus-v1", St = "ietf-draft-03", Qe = "ietf-draft-05", Fn = {
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
  onShouldRetry: Po,
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
  protocol: kt
}, Ot = /* @__PURE__ */ (function() {
  function r(e, t) {
    Un(this, r), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null;
  }
  return Rn(r, [{
    key: "findPreviousUploads",
    value: function() {
      var t = this;
      return this.options.fingerprint(this.file, this.options).then(function(i) {
        return t._urlStorage.findUploadsByFingerprint(i);
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
      var t = this, i = this.file;
      if (!i) {
        this._emitError(new Error("tus: no file or stream to upload provided"));
        return;
      }
      if (![kt, St, Qe].includes(this.options.protocol)) {
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
        for (var s = 0, n = ["uploadUrl", "uploadSize", "uploadLengthDeferred"]; s < n.length; s++) {
          var a = n[s];
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
      this.options.fingerprint(i, this.options).then(function(l) {
        return t._fingerprint = l, t._source ? t._source : t.options.fileReader.openFile(i, t.options.chunkSize);
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
      var t, i = this, o = this._size, s = 0;
      this._parallelUploads = [];
      var n = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads, a = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : Ln(this._source.size, n);
      this._parallelUploadUrls && a.forEach(function(d, p) {
        d.uploadUrl = i._parallelUploadUrls[p] || null;
      }), this._parallelUploadUrls = new Array(a.length);
      var l = a.map(function(d, p) {
        var u = 0;
        return i._source.slice(d.start, d.end).then(function(w) {
          var m = w.value;
          return new Promise(function(v, C) {
            var L = ze(ze({}, i.options), {}, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: d.uploadUrl || null,
              // We take manually care of resuming for partial uploads, so they should
              // not be stored in the URL storage.
              storeFingerprintForResuming: !1,
              removeFingerprintOnSuccess: !1,
              // Reset the parallelUploads option to not cause recursion.
              parallelUploads: 1,
              // Reset this option as we are not doing a parallel upload.
              parallelUploadBoundaries: null,
              metadata: i.options.metadataForPartialUploads,
              // Add the header to indicate the this is a partial upload.
              headers: ze(ze({}, i.options.headers), {}, {
                "Upload-Concat": "partial"
              }),
              // Reject or resolve the promise if the upload errors or completes.
              onSuccess: v,
              onError: C,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function(_) {
                s = s - u + _, u = _, i._emitProgress(s, o);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function() {
                i._parallelUploadUrls[p] = k.url, i._parallelUploadUrls.filter(function(_) {
                  return !!_;
                }).length === a.length && i._saveUploadInUrlStorage();
              }
            }), k = new r(m, L);
            k.start(), i._parallelUploads.push(k);
          });
        });
      }), c;
      Promise.all(l).then(function() {
        c = i._openRequest("POST", i.options.endpoint), c.setHeader("Upload-Concat", "final;".concat(i._parallelUploadUrls.join(" ")));
        var d = kr(i.options.metadata);
        return d !== "" && c.setHeader("Upload-Metadata", d), i._sendRequest(c, null);
      }).then(function(d) {
        if (!De(d.getStatus(), 200)) {
          i._emitHttpError(c, d, "tus: unexpected response while creating upload");
          return;
        }
        var p = d.getHeader("Location");
        if (p == null) {
          i._emitHttpError(c, d, "tus: invalid or missing Location header");
          return;
        }
        i.url = Pr(i.options.endpoint, p), "Created upload at ".concat(i.url), i._emitSuccess(d);
      }).catch(function(d) {
        i._emitError(d);
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
      var i = this;
      if (this._parallelUploads != null) {
        var o = Pn(this._parallelUploads), s;
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var n = s.value;
            n.abort(t);
          }
        } catch (a) {
          o.e(a);
        } finally {
          o.f();
        }
      }
      return this._req !== null && this._req.abort(), this._aborted = !0, this._retryTimeout != null && (clearTimeout(this._retryTimeout), this._retryTimeout = null), !t || this.url == null ? Promise.resolve() : r.terminate(this.url, this.options).then(function() {
        return i._removeFromUrlStorage();
      });
    }
  }, {
    key: "_emitHttpError",
    value: function(t, i, o, s) {
      this._emitError(new Je(o, s, t, i));
    }
  }, {
    key: "_emitError",
    value: function(t) {
      var i = this;
      if (!this._aborted) {
        if (this.options.retryDelays != null) {
          var o = this._offset != null && this._offset > this._offsetBeforeRetry;
          if (o && (this._retryAttempt = 0), Cr(t, this._retryAttempt, this.options)) {
            var s = this.options.retryDelays[this._retryAttempt++];
            this._offsetBeforeRetry = this._offset, this._retryTimeout = setTimeout(function() {
              i.start();
            }, s);
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
    value: function(t, i) {
      typeof this.options.onProgress == "function" && this.options.onProgress(t, i);
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
    value: function(t, i, o) {
      typeof this.options.onChunkComplete == "function" && this.options.onChunkComplete(t, i, o);
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
      var i = this._openRequest("POST", this.options.endpoint);
      this.options.uploadLengthDeferred ? i.setHeader("Upload-Defer-Length", "1") : i.setHeader("Upload-Length", "".concat(this._size));
      var o = kr(this.options.metadata);
      o !== "" && i.setHeader("Upload-Metadata", o);
      var s;
      this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, s = this._addChunkToRequest(i)) : ((this.options.protocol === St || this.options.protocol === Qe) && i.setHeader("Upload-Complete", "?0"), s = this._sendRequest(i, null)), s.then(function(n) {
        if (!De(n.getStatus(), 200)) {
          t._emitHttpError(i, n, "tus: unexpected response while creating upload");
          return;
        }
        var a = n.getHeader("Location");
        if (a == null) {
          t._emitHttpError(i, n, "tus: invalid or missing Location header");
          return;
        }
        if (t.url = Pr(t.options.endpoint, a), "Created upload at ".concat(t.url), typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._size === 0) {
          t._emitSuccess(n), t._source.close();
          return;
        }
        t._saveUploadInUrlStorage().then(function() {
          t.options.uploadDataDuringCreation ? t._handleUploadResponse(i, n) : (t._offset = 0, t._performUpload());
        });
      }).catch(function(n) {
        t._emitHttpError(i, null, "tus: failed to create upload", n);
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
      var t = this, i = this._openRequest("HEAD", this.url), o = this._sendRequest(i, null);
      o.then(function(s) {
        var n = s.getStatus();
        if (!De(n, 200)) {
          if (n === 423) {
            t._emitHttpError(i, s, "tus: upload is currently locked; retry later");
            return;
          }
          if (De(n, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
            t._emitHttpError(i, s, "tus: unable to resume upload (new upload cannot be created without an endpoint)");
            return;
          }
          t.url = null, t._createUpload();
          return;
        }
        var a = Number.parseInt(s.getHeader("Upload-Offset"), 10);
        if (Number.isNaN(a)) {
          t._emitHttpError(i, s, "tus: invalid or missing offset value");
          return;
        }
        var l = Number.parseInt(s.getHeader("Upload-Length"), 10);
        if (Number.isNaN(l) && !t.options.uploadLengthDeferred && t.options.protocol === kt) {
          t._emitHttpError(i, s, "tus: invalid or missing length value");
          return;
        }
        typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._saveUploadInUrlStorage().then(function() {
          if (a === l) {
            t._emitProgress(l, l), t._emitSuccess(s);
            return;
          }
          t._offset = a, t._performUpload();
        });
      }).catch(function(s) {
        t._emitHttpError(i, null, "tus: failed to resume upload", s);
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
        var i;
        this.options.overridePatchMethod ? (i = this._openRequest("POST", this.url), i.setHeader("X-HTTP-Method-Override", "PATCH")) : i = this._openRequest("PATCH", this.url), i.setHeader("Upload-Offset", "".concat(this._offset));
        var o = this._addChunkToRequest(i);
        o.then(function(s) {
          if (!De(s.getStatus(), 200)) {
            t._emitHttpError(i, s, "tus: unexpected response while uploading chunk");
            return;
          }
          t._handleUploadResponse(i, s);
        }).catch(function(s) {
          t._aborted || t._emitHttpError(i, null, "tus: failed to upload chunk at offset ".concat(t._offset), s);
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
      var i = this, o = this._offset, s = this._offset + this.options.chunkSize;
      return t.setProgressHandler(function(n) {
        i._emitProgress(o + n, i._size);
      }), this.options.protocol === kt ? t.setHeader("Content-Type", "application/offset+octet-stream") : this.options.protocol === Qe && t.setHeader("Content-Type", "application/partial-upload"), (s === Number.POSITIVE_INFINITY || s > this._size) && !this.options.uploadLengthDeferred && (s = this._size), this._source.slice(o, s).then(function(n) {
        var a = n.value, l = n.done, c = a != null && a.size ? a.size : 0;
        i.options.uploadLengthDeferred && l && (i._size = i._offset + c, t.setHeader("Upload-Length", "".concat(i._size)));
        var d = i._offset + c;
        return !i.options.uploadLengthDeferred && l && d !== i._size ? Promise.reject(new Error("upload was configured with a size of ".concat(i._size, " bytes, but the source is done after ").concat(d, " bytes"))) : a === null ? i._sendRequest(t) : ((i.options.protocol === St || i.options.protocol === Qe) && t.setHeader("Upload-Complete", l ? "?1" : "?0"), i._emitProgress(i._offset, i._size), i._sendRequest(t, a));
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
    value: function(t, i) {
      var o = Number.parseInt(i.getHeader("Upload-Offset"), 10);
      if (Number.isNaN(o)) {
        this._emitHttpError(t, i, "tus: invalid or missing offset value");
        return;
      }
      if (this._emitProgress(o, this._size), this._emitChunkComplete(o - this._offset, o, this._size), this._offset = o, o === this._size) {
        this._emitSuccess(i), this._source.close();
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
    value: function(t, i) {
      var o = Sr(t, i, this.options);
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
      this._urlStorageKey && (this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i) {
        t._emitError(i);
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
      var i = {
        size: this._size,
        metadata: this.options.metadata,
        creationTime: (/* @__PURE__ */ new Date()).toString()
      };
      return this._parallelUploads ? i.parallelUploadUrls = this._parallelUploadUrls : i.uploadUrl = this.url, this._urlStorage.addUpload(this._fingerprint, i).then(function(o) {
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
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return $r(t, i, this.options);
    }
  }], [{
    key: "terminate",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = Sr("DELETE", t, i);
      return $r(o, null, i).then(function(s) {
        if (s.getStatus() !== 204)
          throw new Je("tus: unexpected response while terminating upload", null, o, s);
      }).catch(function(s) {
        if (s instanceof Je || (s = new Je("tus: failed to terminate upload", s, o, null)), !Cr(s, 0, i))
          throw s;
        var n = i.retryDelays[0], a = i.retryDelays.slice(1), l = ze(ze({}, i), {}, {
          retryDelays: a
        });
        return new Promise(function(c) {
          return setTimeout(c, n);
        }).then(function() {
          return r.terminate(t, l);
        });
      });
    }
  }]);
})();
function kr(r) {
  return Object.entries(r).map(function(e) {
    var t = So(e, 2), i = t[0], o = t[1];
    return "".concat(i, " ").concat(gn.encode(String(o)));
  }).join(",");
}
function De(r, e) {
  return r >= e && r < e + 100;
}
function Sr(r, e, t) {
  var i = t.httpStack.createRequest(r, e);
  t.protocol === St ? i.setHeader("Upload-Draft-Interop-Version", "5") : t.protocol === Qe ? i.setHeader("Upload-Draft-Interop-Version", "6") : i.setHeader("Tus-Resumable", "1.0.0");
  for (var o = t.headers || {}, s = 0, n = Object.entries(o); s < n.length; s++) {
    var a = So(n[s], 2), l = a[0], c = a[1];
    i.setHeader(l, c);
  }
  if (t.addRequestId) {
    var d = _n();
    i.setHeader("X-Request-ID", d);
  }
  return i;
}
function $r(r, e, t) {
  return li.apply(this, arguments);
}
function li() {
  return li = kn(/* @__PURE__ */ ai().mark(function r(e, t, i) {
    var o;
    return ai().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (typeof i.onBeforeRequest != "function") {
            n.next = 3;
            break;
          }
          return n.next = 3, i.onBeforeRequest(e);
        case 3:
          return n.next = 5, e.send(t);
        case 5:
          if (o = n.sent, typeof i.onAfterResponse != "function") {
            n.next = 9;
            break;
          }
          return n.next = 9, i.onAfterResponse(e, o);
        case 9:
          return n.abrupt("return", o);
        case 10:
        case "end":
          return n.stop();
      }
    }, r);
  })), li.apply(this, arguments);
}
function Tn() {
  var r = !0;
  return typeof navigator < "u" && navigator.onLine === !1 && (r = !1), r;
}
function Cr(r, e, t) {
  return t.retryDelays == null || e >= t.retryDelays.length || r.originalRequest == null ? !1 : t && typeof t.onShouldRetry == "function" ? t.onShouldRetry(r, e, t) : Po(r);
}
function Po(r) {
  var e = r.originalResponse ? r.originalResponse.getStatus() : 0;
  return (!De(e, 400) || e === 409 || e === 423) && Tn();
}
function Pr(r, e) {
  return new wn(e, r).toString();
}
function Ln(r, e) {
  for (var t = Math.floor(r / e), i = [], o = 0; o < e; o++)
    i.push({
      start: t * o,
      end: t * (o + 1)
    });
  return i[e - 1].end = r, i;
}
Ot.defaultOptions = Fn;
var Eo = function() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
};
function zn(r) {
  return new Promise(function(e, t) {
    var i = new XMLHttpRequest();
    i.responseType = "blob", i.onload = function() {
      var o = i.response;
      e(o);
    }, i.onerror = function(o) {
      t(o);
    }, i.open("GET", r), i.send();
  });
}
var In = function() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
};
function An(r) {
  return new Promise(function(e, t) {
    var i = new FileReader();
    i.onload = function() {
      var o = new Uint8Array(i.result);
      e({
        value: o
      });
    }, i.onerror = function(o) {
      t(o);
    }, i.readAsArrayBuffer(r);
  });
}
function at(r) {
  "@babel/helpers - typeof";
  return at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, at(r);
}
function Dn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Bn(i.key), i);
  }
}
function Mn(r, e, t) {
  return e && jn(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Bn(r) {
  var e = Nn(r, "string");
  return at(e) == "symbol" ? e : e + "";
}
function Nn(r, e) {
  if (at(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (at(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Er = /* @__PURE__ */ (function() {
  function r(e) {
    Dn(this, r), this._file = e, this.size = e.size;
  }
  return Mn(r, [{
    key: "slice",
    value: function(t, i) {
      if (In())
        return An(this._file.slice(t, i));
      var o = this._file.slice(t, i), s = i >= this.size;
      return Promise.resolve({
        value: o,
        done: s
      });
    }
  }, {
    key: "close",
    value: function() {
    }
  }]);
})();
function lt(r) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, lt(r);
}
function Hn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Kn(i.key), i);
  }
}
function Vn(r, e, t) {
  return e && qn(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Kn(r) {
  var e = Yn(r, "string");
  return lt(e) == "symbol" ? e : e + "";
}
function Yn(r, e) {
  if (lt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (lt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function Ur(r) {
  return r === void 0 ? 0 : r.size !== void 0 ? r.size : r.length;
}
function Wn(r, e) {
  if (r.concat)
    return r.concat(e);
  if (r instanceof Blob)
    return new Blob([r, e], {
      type: r.type
    });
  if (r.set) {
    var t = new r.constructor(r.length + e.length);
    return t.set(r), t.set(e, r.length), t;
  }
  throw new Error("Unknown data type");
}
var Gn = /* @__PURE__ */ (function() {
  function r(e) {
    Hn(this, r), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1;
  }
  return Vn(r, [{
    key: "slice",
    value: function(t, i) {
      return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, i);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function(t, i) {
      var o = this, s = i <= this._bufferOffset + Ur(this._buffer);
      if (this._done || s) {
        var n = this._getDataFromBuffer(t, i), a = n == null ? this._done : !1;
        return Promise.resolve({
          value: n,
          done: a
        });
      }
      return this._reader.read().then(function(l) {
        var c = l.value, d = l.done;
        return d ? o._done = !0 : o._buffer === void 0 ? o._buffer = c : o._buffer = Wn(o._buffer, c), o._readUntilEnoughDataOrDone(t, i);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function(t, i) {
      t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
      var o = Ur(this._buffer) === 0;
      return this._done && o ? null : this._buffer.slice(0, i - t);
    }
  }, {
    key: "close",
    value: function() {
      this._reader.cancel && this._reader.cancel();
    }
  }]);
})();
function Fe(r) {
  "@babel/helpers - typeof";
  return Fe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Fe(r);
}
function ci() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  ci = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(x, h, g) {
    x[h] = g.value;
  }, s = typeof Symbol == "function" ? Symbol : {}, n = s.iterator || "@@iterator", a = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
  function c(x, h, g) {
    return Object.defineProperty(x, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }), x[h];
  }
  try {
    c({}, "");
  } catch {
    c = function(g, P, U) {
      return g[P] = U;
    };
  }
  function d(x, h, g, P) {
    var U = h && h.prototype instanceof L ? h : L, S = Object.create(U.prototype), D = new Y(P || []);
    return o(S, "_invoke", { value: T(x, g, D) }), S;
  }
  function p(x, h, g) {
    try {
      return { type: "normal", arg: x.call(h, g) };
    } catch (P) {
      return { type: "throw", arg: P };
    }
  }
  e.wrap = d;
  var u = "suspendedStart", w = "suspendedYield", m = "executing", v = "completed", C = {};
  function L() {
  }
  function k() {
  }
  function y() {
  }
  var _ = {};
  c(_, n, function() {
    return this;
  });
  var b = Object.getPrototypeOf, R = b && b(b(he([])));
  R && R !== t && i.call(R, n) && (_ = R);
  var E = y.prototype = L.prototype = Object.create(_);
  function A(x) {
    ["next", "throw", "return"].forEach(function(h) {
      c(x, h, function(g) {
        return this._invoke(h, g);
      });
    });
  }
  function z(x, h) {
    function g(U, S, D, H) {
      var q = p(x[U], x, S);
      if (q.type !== "throw") {
        var Q = q.arg, te = Q.value;
        return te && Fe(te) == "object" && i.call(te, "__await") ? h.resolve(te.__await).then(function(se) {
          g("next", se, D, H);
        }, function(se) {
          g("throw", se, D, H);
        }) : h.resolve(te).then(function(se) {
          Q.value = se, D(Q);
        }, function(se) {
          return g("throw", se, D, H);
        });
      }
      H(q.arg);
    }
    var P;
    o(this, "_invoke", { value: function(S, D) {
      function H() {
        return new h(function(q, Q) {
          g(S, D, q, Q);
        });
      }
      return P = P ? P.then(H, H) : H();
    } });
  }
  function T(x, h, g) {
    var P = u;
    return function(U, S) {
      if (P === m) throw Error("Generator is already running");
      if (P === v) {
        if (U === "throw") throw S;
        return { value: r, done: !0 };
      }
      for (g.method = U, g.arg = S; ; ) {
        var D = g.delegate;
        if (D) {
          var H = J(D, g);
          if (H) {
            if (H === C) continue;
            return H;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (P === u) throw P = v, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        P = m;
        var q = p(x, h, g);
        if (q.type === "normal") {
          if (P = g.done ? v : w, q.arg === C) continue;
          return { value: q.arg, done: g.done };
        }
        q.type === "throw" && (P = v, g.method = "throw", g.arg = q.arg);
      }
    };
  }
  function J(x, h) {
    var g = h.method, P = x.iterator[g];
    if (P === r) return h.delegate = null, g === "throw" && x.iterator.return && (h.method = "return", h.arg = r, J(x, h), h.method === "throw") || g !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + g + "' method")), C;
    var U = p(P, x.iterator, h.arg);
    if (U.type === "throw") return h.method = "throw", h.arg = U.arg, h.delegate = null, C;
    var S = U.arg;
    return S ? S.done ? (h[x.resultName] = S.value, h.next = x.nextLoc, h.method !== "return" && (h.method = "next", h.arg = r), h.delegate = null, C) : S : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, C);
  }
  function de(x) {
    var h = { tryLoc: x[0] };
    1 in x && (h.catchLoc = x[1]), 2 in x && (h.finallyLoc = x[2], h.afterLoc = x[3]), this.tryEntries.push(h);
  }
  function F(x) {
    var h = x.completion || {};
    h.type = "normal", delete h.arg, x.completion = h;
  }
  function Y(x) {
    this.tryEntries = [{ tryLoc: "root" }], x.forEach(de, this), this.reset(!0);
  }
  function he(x) {
    if (x || x === "") {
      var h = x[n];
      if (h) return h.call(x);
      if (typeof x.next == "function") return x;
      if (!isNaN(x.length)) {
        var g = -1, P = function U() {
          for (; ++g < x.length; ) if (i.call(x, g)) return U.value = x[g], U.done = !1, U;
          return U.value = r, U.done = !0, U;
        };
        return P.next = P;
      }
    }
    throw new TypeError(Fe(x) + " is not iterable");
  }
  return k.prototype = y, o(E, "constructor", { value: y, configurable: !0 }), o(y, "constructor", { value: k, configurable: !0 }), k.displayName = c(y, l, "GeneratorFunction"), e.isGeneratorFunction = function(x) {
    var h = typeof x == "function" && x.constructor;
    return !!h && (h === k || (h.displayName || h.name) === "GeneratorFunction");
  }, e.mark = function(x) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(x, y) : (x.__proto__ = y, c(x, l, "GeneratorFunction")), x.prototype = Object.create(E), x;
  }, e.awrap = function(x) {
    return { __await: x };
  }, A(z.prototype), c(z.prototype, a, function() {
    return this;
  }), e.AsyncIterator = z, e.async = function(x, h, g, P, U) {
    U === void 0 && (U = Promise);
    var S = new z(d(x, h, g, P), U);
    return e.isGeneratorFunction(h) ? S : S.next().then(function(D) {
      return D.done ? D.value : S.next();
    });
  }, A(E), c(E, l, "Generator"), c(E, n, function() {
    return this;
  }), c(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(x) {
    var h = Object(x), g = [];
    for (var P in h) g.push(P);
    return g.reverse(), function U() {
      for (; g.length; ) {
        var S = g.pop();
        if (S in h) return U.value = S, U.done = !1, U;
      }
      return U.done = !0, U;
    };
  }, e.values = he, Y.prototype = { constructor: Y, reset: function(h) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(F), !h) for (var g in this) g.charAt(0) === "t" && i.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = r);
  }, stop: function() {
    this.done = !0;
    var h = this.tryEntries[0].completion;
    if (h.type === "throw") throw h.arg;
    return this.rval;
  }, dispatchException: function(h) {
    if (this.done) throw h;
    var g = this;
    function P(Q, te) {
      return D.type = "throw", D.arg = h, g.next = Q, te && (g.method = "next", g.arg = r), !!te;
    }
    for (var U = this.tryEntries.length - 1; U >= 0; --U) {
      var S = this.tryEntries[U], D = S.completion;
      if (S.tryLoc === "root") return P("end");
      if (S.tryLoc <= this.prev) {
        var H = i.call(S, "catchLoc"), q = i.call(S, "finallyLoc");
        if (H && q) {
          if (this.prev < S.catchLoc) return P(S.catchLoc, !0);
          if (this.prev < S.finallyLoc) return P(S.finallyLoc);
        } else if (H) {
          if (this.prev < S.catchLoc) return P(S.catchLoc, !0);
        } else {
          if (!q) throw Error("try statement without catch or finally");
          if (this.prev < S.finallyLoc) return P(S.finallyLoc);
        }
      }
    }
  }, abrupt: function(h, g) {
    for (var P = this.tryEntries.length - 1; P >= 0; --P) {
      var U = this.tryEntries[P];
      if (U.tryLoc <= this.prev && i.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
        var S = U;
        break;
      }
    }
    S && (h === "break" || h === "continue") && S.tryLoc <= g && g <= S.finallyLoc && (S = null);
    var D = S ? S.completion : {};
    return D.type = h, D.arg = g, S ? (this.method = "next", this.next = S.finallyLoc, C) : this.complete(D);
  }, complete: function(h, g) {
    if (h.type === "throw") throw h.arg;
    return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && g && (this.next = g), C;
  }, finish: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var P = this.tryEntries[g];
      if (P.finallyLoc === h) return this.complete(P.completion, P.afterLoc), F(P), C;
    }
  }, catch: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var P = this.tryEntries[g];
      if (P.tryLoc === h) {
        var U = P.completion;
        if (U.type === "throw") {
          var S = U.arg;
          F(P);
        }
        return S;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(h, g, P) {
    return this.delegate = { iterator: he(h), resultName: g, nextLoc: P }, this.method === "next" && (this.arg = r), C;
  } }, e;
}
function Rr(r, e, t, i, o, s, n) {
  try {
    var a = r[s](n), l = a.value;
  } catch (c) {
    t(c);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, o);
}
function Xn(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var s = r.apply(e, t);
      function n(l) {
        Rr(s, i, o, n, a, "next", l);
      }
      function a(l) {
        Rr(s, i, o, n, a, "throw", l);
      }
      n(void 0);
    });
  };
}
function Jn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, ea(i.key), i);
  }
}
function Qn(r, e, t) {
  return e && Zn(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ea(r) {
  var e = ta(r, "string");
  return Fe(e) == "symbol" ? e : e + "";
}
function ta(r, e) {
  if (Fe(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Fe(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var ia = /* @__PURE__ */ (function() {
  function r() {
    Jn(this, r);
  }
  return Qn(r, [{
    key: "openFile",
    value: (function() {
      var e = Xn(/* @__PURE__ */ ci().mark(function i(o, s) {
        var n;
        return ci().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!(Eo() && o && typeof o.uri < "u")) {
                l.next = 11;
                break;
              }
              return l.prev = 1, l.next = 4, zn(o.uri);
            case 4:
              return n = l.sent, l.abrupt("return", new Er(n));
            case 8:
              throw l.prev = 8, l.t0 = l.catch(1), new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));
            case 11:
              if (!(typeof o.slice == "function" && typeof o.size < "u")) {
                l.next = 13;
                break;
              }
              return l.abrupt("return", Promise.resolve(new Er(o)));
            case 13:
              if (typeof o.read != "function") {
                l.next = 18;
                break;
              }
              if (s = Number(s), Number.isFinite(s)) {
                l.next = 17;
                break;
              }
              return l.abrupt("return", Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));
            case 17:
              return l.abrupt("return", Promise.resolve(new Gn(o, s)));
            case 18:
              return l.abrupt("return", Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));
            case 19:
            case "end":
              return l.stop();
          }
        }, i, null, [[1, 8]]);
      }));
      function t(i, o) {
        return e.apply(this, arguments);
      }
      return t;
    })()
  }]);
})();
function ra(r, e) {
  return Eo() ? Promise.resolve(oa(r, e)) : Promise.resolve(["tus-br", r.name, r.type, r.size, r.lastModified, e.endpoint].join("-"));
}
function oa(r, e) {
  var t = r.exif ? sa(JSON.stringify(r.exif)) : "noexif";
  return ["tus-rn", r.name || "noname", r.size || "nosize", t, e.endpoint].join("/");
}
function sa(r) {
  var e = 0;
  if (r.length === 0)
    return e;
  for (var t = 0; t < r.length; t++) {
    var i = r.charCodeAt(t);
    e = (e << 5) - e + i, e &= e;
  }
  return e;
}
function ct(r) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ct(r);
}
function Pi(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function na(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, aa(i.key), i);
  }
}
function Ei(r, e, t) {
  return e && na(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function aa(r) {
  var e = la(r, "string");
  return ct(e) == "symbol" ? e : e + "";
}
function la(r, e) {
  if (ct(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (ct(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var ca = /* @__PURE__ */ (function() {
  function r() {
    Pi(this, r);
  }
  return Ei(r, [{
    key: "createRequest",
    value: function(t, i) {
      return new da(t, i);
    }
  }, {
    key: "getName",
    value: function() {
      return "XHRHttpStack";
    }
  }]);
})(), da = /* @__PURE__ */ (function() {
  function r(e, t) {
    Pi(this, r), this._xhr = new XMLHttpRequest(), this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {};
  }
  return Ei(r, [{
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
    value: function(t, i) {
      this._xhr.setRequestHeader(t, i), this._headers[t] = i;
    }
  }, {
    key: "getHeader",
    value: function(t) {
      return this._headers[t];
    }
  }, {
    key: "setProgressHandler",
    value: function(t) {
      "upload" in this._xhr && (this._xhr.upload.onprogress = function(i) {
        i.lengthComputable && t(i.loaded);
      });
    }
  }, {
    key: "send",
    value: function() {
      var t = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return new Promise(function(o, s) {
        t._xhr.onload = function() {
          o(new pa(t._xhr));
        }, t._xhr.onerror = function(n) {
          s(n);
        }, t._xhr.send(i);
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
})(), pa = /* @__PURE__ */ (function() {
  function r(e) {
    Pi(this, r), this._xhr = e;
  }
  return Ei(r, [{
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
function dt(r) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, dt(r);
}
function ua(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fa(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, ga(i.key), i);
  }
}
function ha(r, e, t) {
  return e && fa(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ga(r) {
  var e = ma(r, "string");
  return dt(e) == "symbol" ? e : e + "";
}
function ma(r, e) {
  if (dt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (dt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var di = !1;
try {
  di = "localStorage" in window;
  var Wt = "tusSupport", Or = localStorage.getItem(Wt);
  localStorage.setItem(Wt, Or), Or === null && localStorage.removeItem(Wt);
} catch (r) {
  if (r.code === r.SECURITY_ERR || r.code === r.QUOTA_EXCEEDED_ERR)
    di = !1;
  else
    throw r;
}
var xa = di, ba = /* @__PURE__ */ (function() {
  function r() {
    ua(this, r);
  }
  return ha(r, [{
    key: "findAllUploads",
    value: function() {
      var t = this._findEntries("tus::");
      return Promise.resolve(t);
    }
  }, {
    key: "findUploadsByFingerprint",
    value: function(t) {
      var i = this._findEntries("tus::".concat(t, "::"));
      return Promise.resolve(i);
    }
  }, {
    key: "removeUpload",
    value: function(t) {
      return localStorage.removeItem(t), Promise.resolve();
    }
  }, {
    key: "addUpload",
    value: function(t, i) {
      var o = Math.round(Math.random() * 1e12), s = "tus::".concat(t, "::").concat(o);
      return localStorage.setItem(s, JSON.stringify(i)), Promise.resolve(s);
    }
  }, {
    key: "_findEntries",
    value: function(t) {
      for (var i = [], o = 0; o < localStorage.length; o++) {
        var s = localStorage.key(o);
        if (s.indexOf(t) === 0)
          try {
            var n = JSON.parse(localStorage.getItem(s));
            n.urlStorageKey = s, i.push(n);
          } catch {
          }
      }
      return i;
    }
  }]);
})();
function Ne(r) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ne(r);
}
function va(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ya(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Ro(i.key), i);
  }
}
function wa(r, e, t) {
  return t && ya(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function _a(r, e, t) {
  return e = Ft(e), ka(r, Uo() ? Reflect.construct(e, t || [], Ft(r).constructor) : e.apply(r, t));
}
function ka(r, e) {
  if (e && (Ne(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Sa(r);
}
function Sa(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Uo() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Uo = function() {
    return !!r;
  })();
}
function Ft(r) {
  return Ft = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ft(r);
}
function $a(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && pi(r, e);
}
function pi(r, e) {
  return pi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, pi(r, e);
}
function Fr(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function je(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fr(Object(t), !0).forEach(function(i) {
      Ca(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Fr(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Ca(r, e, t) {
  return e = Ro(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Ro(r) {
  var e = Pa(r, "string");
  return Ne(e) == "symbol" ? e : e + "";
}
function Pa(r, e) {
  if (Ne(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Ne(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var Tr = je(je({}, Ot.defaultOptions), {}, {
  httpStack: new ca(),
  fileReader: new ia(),
  urlStorage: xa ? new ba() : new on(),
  fingerprint: ra
}), Ea = /* @__PURE__ */ (function(r) {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return va(this, e), i = je(je({}, Tr), i), _a(this, e, [t, i]);
  }
  return $a(e, r), wa(e, null, [{
    key: "terminate",
    value: function(i) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return o = je(je({}, Tr), o), Ot.terminate(i, o);
    }
  }]);
})(Ot);
const Ua = 10 * 1024 * 1024, Ra = 5 * 1024 * 1024, Oa = "https://eu-on-24001.connector.filerobot.com/files", Fa = "https://eu-on-24001.connector.filerobot.com/json";
function Ta(r, e) {
  if (!e || !r.file) return !1;
  const t = e.sizeThreshold ?? Ua;
  return r.size >= t;
}
function La(r, e) {
  const { tusConfig: t } = e, i = e.apiBase.replace(/\/+$/, ""), o = t.endpoint || Oa, s = t.jsonBase || Fa, n = t.chunkSize ?? Ra, a = t.resumable !== !1, l = t.parallelChunks ?? 1, c = t.retryDelays ?? [0, 1e3, 3e3, 5e3], d = i.split("/").pop() || "";
  let p = !1, u = !1, w = !1;
  const m = {
    name: r.name,
    type: r.type,
    "filerobot-folder": e.folder
  };
  wi(r.product) && (m.product = JSON.stringify(_i(r.product)));
  const v = async () => `tus-${r.id}-${o}`, C = new Ea(r.file, {
    endpoint: o,
    chunkSize: n,
    retryDelays: c,
    parallelUploads: l,
    storeFingerprintForResuming: a,
    removeFingerprintOnSuccess: !0,
    headers: {},
    metadata: m,
    fingerprint: v,
    // --- Dynamic auth headers (v5 pattern: onBeforeRequest) ---
    // Single source of auth headers for every tus request.
    // Uses getAuthHeaders() for latest SASS key, falls back to initial headers.
    onBeforeRequest(b) {
      const R = e.getAuthHeaders ? e.getAuthHeaders() : e.authHeaders;
      for (const [E, A] of Object.entries(R))
        b.setHeader(E, A);
      b.setHeader("X-Filerobot-Token", d);
    },
    // --- Store upload URL for cross-session resume (v5's onReceiveUploadUrl) ---
    // Only notify once to avoid redundant store updates (v5 checks uploadUrl !== existing).
    onUploadUrlAvailable() {
      C.url && e.onUploadUrlAvailable && !w && (w = !0, e.onUploadUrlAvailable(C.url));
    },
    onProgress(b, R) {
      !u && !p && e.onProgress(b, R);
    },
    onSuccess() {
      var E;
      if (u) return;
      y();
      const b = C.url || "", R = (E = b.match(/files\/([^/?]+)/)) == null ? void 0 : E[1];
      R ? Ia(s, R, r.size).then((A) => {
        u || e.onComplete(
          pt(A) ? yi(A, r) : A
        );
      }).catch((A) => {
        u || e.onError(A);
      }) : e.onComplete({
        status: "success",
        file: {
          uuid: "",
          name: r.name,
          extension: r.name.split(".").pop() || "",
          type: r.type,
          size: r.size,
          url: { public: b, cdn: b },
          meta: r.meta,
          tags: r.tags,
          info: {},
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          modified_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      });
    },
    onError(b) {
      u || (y(), za(b) ? e.onError(new Error(
        "Network error during upload — check your connection or firewall settings"
      )) : e.onError(b instanceof Error ? b : new Error(String(b))));
    },
    // --- 429 rate-limit and retry handling (matches v5's defaultOnShouldRetry) ---
    onShouldRetry(b, R, E) {
      var z;
      const A = (z = b.originalResponse) == null ? void 0 : z.getStatus();
      return A === 429 ? !0 : !(A && A > 400 && A < 500 && A !== 409);
    }
  });
  let L = null, k = null;
  typeof window < "u" && (L = () => {
    var b;
    !p && !u && (p = !0, C.abort(!1), (b = e.onPause) == null || b.call(e));
  }, k = () => {
    var b;
    p && !u && (p = !1, C.start(), (b = e.onResume) == null || b.call(e));
  }, window.addEventListener("offline", L), window.addEventListener("online", k));
  const y = () => {
    L && window.removeEventListener("offline", L), k && window.removeEventListener("online", k);
  }, _ = () => {
    try {
      C.start();
    } catch (b) {
      y(), e.onError(b instanceof Error ? b : new Error(String(b)));
    }
  };
  return a ? C.findPreviousUploads().then((b) => {
    b.length > 0 && !u && C.resumeFromPreviousUpload(b[0]), u || _();
  }) : _(), {
    abort() {
      u = !0, p = !1, y(), C.abort(!0);
    },
    pause() {
      !p && !u && (p = !0, C.abort(!1));
    },
    resume() {
      p && !u && (p = !1, C.start());
    },
    isPaused() {
      return p;
    }
  };
}
function za(r) {
  var e;
  if (r instanceof Je) {
    const t = (e = r.originalRequest) == null ? void 0 : e.getUnderlyingObject();
    return t && typeof t.readyState == "number" && typeof t.status == "number" ? t.readyState !== 0 && t.readyState !== 4 || t.status === 0 : r.originalResponse == null && r.causingError != null;
  }
  return !1;
}
async function Ia(r, e, t) {
  const i = `${r.replace(/\/+$/, "")}/${e}`, o = t > 1e8 ? 13e3 : 6e3, s = 3;
  for (let n = 0; n <= s; n++) {
    n > 0 && await new Promise((c) => setTimeout(c, o));
    const a = await fetch(i);
    if (a.status === 404 && n < s) continue;
    if (!a.ok)
      throw new Error(`Failed to fetch file record (HTTP ${a.status})`);
    const l = await a.json();
    if (pt(l)) return l;
    if (l.file)
      return { status: "success", file: l.file };
    if (l.status === "success") return l;
    if (!(n < s))
      throw new Error(l.msg || "File record not available after upload");
  }
  throw new Error("File record not available after upload");
}
const $t = "_sfxRelativePath", Lr = 8, Aa = /* @__PURE__ */ new Set([
  "node_modules",
  "__MACOSX",
  "$RECYCLE.BIN",
  "System Volume Information"
]);
function Da(r) {
  return r ? r.startsWith(".") ? !0 : Aa.has(r) : !1;
}
function Ui(r, e) {
  if (e) {
    try {
      Object.defineProperty(r, $t, {
        value: e,
        configurable: !0,
        enumerable: !1,
        writable: !1
      });
      return;
    } catch {
    }
    try {
      Object.defineProperty(r, $t, {
        value: e,
        configurable: !0,
        enumerable: !1,
        writable: !0
      });
    } catch {
      r[$t] = e;
    }
  }
}
function ja(r) {
  const e = r[$t];
  if (typeof e == "string" && e) return e;
  const t = r.webkitRelativePath;
  if (typeof t == "string" && t) return t;
  const i = r.relativePath;
  return typeof i == "string" ? i : "";
}
function Ma(r) {
  if (!r) return "";
  const e = r.replace(/^\/+/, "").replace(/\/+$/, ""), t = e.lastIndexOf("/");
  return t === -1 ? "" : e.slice(0, t);
}
function Ba(r, e) {
  const t = (r ?? "").replace(/\/+$/, ""), i = (e ?? "").replace(/^\/+/, "").replace(/\/+$/, "");
  return i ? t ? `${t}/${i}` : i : r ?? "";
}
async function Oo(r) {
  var n;
  const e = r.items;
  if (!(e && e.length > 0 && typeof e[0].webkitGetAsEntry == "function"))
    return {
      files: Array.from(r.files ?? []),
      hadDirectories: !1
    };
  const i = [];
  let o = !1;
  for (const a of Array.from(e)) {
    if (a.kind !== "file") continue;
    const l = (n = a.webkitGetAsEntry) == null ? void 0 : n.call(a);
    l && (l.isDirectory && (o = !0), i.push(l));
  }
  if (i.length === 0)
    return {
      files: Array.from(r.files ?? []),
      hadDirectories: !1
    };
  const s = [];
  return await Fo(i, "", s), { files: s, hadDirectories: o };
}
async function Fo(r, e, t) {
  for (let i = 0; i < r.length; i += Lr) {
    const o = r.slice(i, i + Lr);
    await Promise.all(o.map((s) => Na(s, e, t)));
  }
}
async function Na(r, e, t) {
  try {
    if (r.isFile) {
      const i = await Ha(r);
      if (!i) return;
      const o = e ? `${e}/${i.name}` : i.name;
      Ui(i, o), t.push(i);
      return;
    }
    if (r.isDirectory) {
      if (Da(r.name)) return;
      const i = e ? `${e}/${r.name}` : r.name, o = await qa(r);
      await Fo(o, i, t);
    }
  } catch (i) {
    console.warn("[sfx-uploader] folder traversal skipped an entry:", (r == null ? void 0 : r.name) ?? r, i);
  }
}
function Ha(r) {
  return new Promise((e) => {
    r.file(
      (t) => e(t),
      () => e(null)
    );
  });
}
function qa(r) {
  return new Promise((e) => {
    const t = r.createReader(), i = [], o = () => {
      t.readEntries(
        (s) => {
          if (s.length === 0) {
            e(i);
            return;
          }
          i.push(...s), o();
        },
        (s) => {
          console.warn("[sfx-uploader] directory read failed for", r == null ? void 0 : r.name, s), e(i);
        }
      );
    };
    o();
  });
}
class Va {
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
    for (const i of e.values())
      i.status === "idle" ? (G(this.store, i.id, { status: "queued" }), t = !0) : i.status === "queued" && (t = !0);
    t && (this.store.setState({ isUploading: !0 }), this.processQueue());
  }
  /**
   * Retry a single failed/errored file.
   */
  retryFile(e) {
    const t = this.store.getState().files.get(e);
    !t || t.status !== "error" && t.status !== "failed" || (G(this.store, e, {
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
      (t.status === "error" || t.status === "failed") && G(this.store, t.id, {
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
    t && "pause" in t && (t.pause(), this.activeUploads.delete(e), this.pausedUploads.set(e, t), G(this.store, e, { status: "paused" }), this.processQueue());
  }
  /**
   * Resume a single paused tus upload.
   * Re-queues through processQueue so it respects concurrency limits (v5 pattern).
   */
  resumeFile(e) {
    const t = this.pausedUploads.get(e);
    if (!t) return;
    const { concurrency: i } = this.store.getState().queueConfig;
    this.activeUploads.size < i ? (this.pausedUploads.delete(e), t.resume(), this.activeUploads.set(e, t), G(this.store, e, { status: "uploading" })) : G(this.store, e, { status: "queued" });
  }
  /**
   * Cancel a single file upload.
   */
  cancelFile(e) {
    const t = this.store.getState().files.get(e);
    !t || !ui(t.status) || (this.abortPausedUpload(e), this.abortUpload(e), G(this.store, e, { status: "cancelled" }));
  }
  /**
   * Cancel all active/queued uploads.
   */
  cancelAll() {
    const { files: e } = this.store.getState();
    for (const t of e.values())
      ui(t.status) && (this.abortPausedUpload(t.id), this.abortUpload(t.id), G(this.store, t.id, { status: "cancelled" }));
    this.store.setState({ isUploading: !1 });
  }
  /**
   * Recompute aggregate totals and re-check completion. Call after the host
   * mutates the file set outside the engine (e.g. removing a file mid-upload),
   * since neither cancel nor a store-level delete on its own triggers a
   * recalc — leaving totalProgress/isUploading stale against the new set.
   */
  recompute() {
    this.updateTotalProgress(), this.checkAllComplete();
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
    const { concurrency: t } = e.queueConfig, i = this.activeUploads.size, o = t - i;
    if (o <= 0) return;
    const n = [...e.files.values()].filter((a) => a.status === "queued").sort((a, l) => a.retryCount !== l.retryCount ? l.retryCount - a.retryCount : a.addedAt - l.addedAt).slice(0, o);
    for (const a of n) {
      const l = this.pausedUploads.get(a.id);
      l ? (this.pausedUploads.delete(a.id), l.resume(), this.activeUploads.set(a.id, l), G(this.store, a.id, { status: "uploading" })) : this.startUpload(a);
    }
  }
  startUpload(e) {
    var u, w;
    const t = (w = (u = this.config).resolveUploadParams) == null ? void 0 : w.call(u, e), i = !!t && Object.keys(t).length > 0, o = !i && !e.remoteInfo && !e.remoteUrl && Ta(e, this.config.tusConfig);
    G(this.store, e.id, { status: "uploading", error: null, isTus: o });
    let s = 0, n = Date.now(), a = 0;
    const l = Ba(
      this.store.getState().targetFolder,
      e.relativeFolder
    ), c = {
      apiBase: this.config.apiBase,
      authHeaders: this.config.authHeaders,
      folder: l,
      extraParams: i ? t : void 0,
      onComplete: (m) => this.handleComplete(e.id, m),
      onError: (m) => this.handleError(e.id, m)
    }, d = (m, v) => {
      const C = Date.now(), L = (C - n) / 1e3;
      if (L > 0) {
        const y = (m - s) / L;
        a = a === 0 ? y : 0.3 * y + 0.7 * a;
      }
      s = m, n = C;
      const k = v > 0 ? Math.min(m / v * 100, 100) : 0;
      G(this.store, e.id, { progress: k, bytesUploaded: m, speed: a }), this.updateTotalProgress();
    };
    let p;
    if (e.remoteInfo)
      p = Ns(e, { ...c, onProgress: d });
    else if (e.remoteUrl) {
      if (!this.config.companionUrl) {
        G(this.store, e.id, {
          status: "failed",
          error: "URL import requires connectors.companionUrl to be configured"
        }), this.checkAllComplete(), this.processQueue();
        return;
      }
      p = Hs(e, {
        ...c,
        onProgress: d,
        companionUrl: this.config.companionUrl,
        onMeta: (m) => {
          G(this.store, e.id, {
            size: m.size,
            // Trust Companion's resolved MIME over our extension guess
            type: m.type || e.type
          });
        }
      });
    } else if (o) {
      const m = La(e, {
        ...c,
        onProgress: d,
        tusConfig: this.config.tusConfig,
        // Supply a getter so tus picks up renewed SASS keys mid-upload
        getAuthHeaders: () => this.config.authHeaders,
        // Store the tus upload URL on file state for cross-session resume
        onUploadUrlAvailable: (v) => {
          G(this.store, e.id, { tusUploadUrl: v });
        },
        // Sync UI state when tus pauses/resumes internally (e.g. network offline/online)
        onPause: () => {
          this.activeUploads.delete(e.id), this.pausedUploads.set(e.id, m), G(this.store, e.id, { status: "paused" }), this.processQueue();
        },
        onResume: () => {
          this.pausedUploads.delete(e.id), this.activeUploads.set(e.id, m), G(this.store, e.id, { status: "uploading" });
        }
      });
      p = m;
    } else
      p = Ls(e, { ...c, onProgress: d });
    this.activeUploads.set(e.id, p);
  }
  handleComplete(e, t) {
    var d, p, u, w, m, v, C, L, k, y;
    this.activeUploads.delete(e);
    const i = this.store.getState().files.get(e), o = ((d = i == null ? void 0 : i.previewUrl) == null ? void 0 : d.startsWith("blob:")) ?? !1, s = ((u = (p = t.file) == null ? void 0 : p.url) == null ? void 0 : u.cdn) ?? ((m = (w = t.file) == null ? void 0 : w.url) == null ? void 0 : m.cdn_permalink) ?? ((C = (v = t.file) == null ? void 0 : v.url) == null ? void 0 : C.permalink) ?? null, n = s ? ((k = (L = this.config).transformPreviewUrl) == null ? void 0 : k.call(L, s)) ?? s : null, a = {
      status: "complete",
      progress: 100,
      response: t,
      alreadyExisted: pt(t)
    };
    i && n && i.type.startsWith("image/") && !o && (a.previewUrl = n);
    const l = (y = t.file) == null ? void 0 : y.size, c = typeof l == "number" ? l : l == null ? void 0 : l.bytes;
    typeof c == "number" && (a.size = c), G(this.store, e, a), this.updateTotalProgress(), this.checkAllComplete(), this.processQueue();
  }
  handleError(e, t) {
    this.activeUploads.delete(e);
    const i = this.store.getState().files.get(e);
    if (!i) return;
    const { retryConfig: o } = this.store.getState().queueConfig, s = i.retryCount + 1;
    if (s <= o.maxRetries) {
      const n = Math.min(
        o.baseDelay * Math.pow(o.backoffFactor, i.retryCount),
        o.maxDelay
      );
      G(this.store, e, {
        status: "retrying",
        error: t.message,
        retryCount: s
      });
      const a = setTimeout(() => {
        this.retryTimers.delete(e), G(this.store, e, { status: "queued" }), this.processQueue();
      }, n);
      this.retryTimers.set(e, a);
    } else
      G(this.store, e, {
        status: "failed",
        error: t.message
      }), this.checkAllComplete(), this.processQueue();
  }
  abortPausedUpload(e) {
    const t = this.pausedUploads.get(e);
    t && (t.abort(), this.pausedUploads.delete(e));
  }
  abortUpload(e) {
    var i;
    (i = this.activeUploads.get(e)) == null || i.abort(), this.activeUploads.delete(e);
    const t = this.retryTimers.get(e);
    t && (clearTimeout(t), this.retryTimers.delete(e));
  }
  updateTotalProgress() {
    const { files: e } = this.store.getState();
    let t = 0, i = 0, o = 0, s = 0, n = 0;
    for (const a of e.values())
      a.status === "rejected" || a.status === "cancelled" || (n++, t += a.size, i += a.status === "complete" ? a.size : Math.min(a.bytesUploaded, a.size), s += a.status === "complete" ? 100 : a.progress, a.status === "uploading" && (o += a.speed));
    this.store.setState({
      totalBytes: t,
      totalBytesUploaded: i,
      totalSpeed: o,
      totalProgress: n > 0 ? Math.min(s / n, 100) : 0
    });
  }
  checkAllComplete() {
    const { files: e } = this.store.getState();
    ![...e.values()].some(
      (i) => i.status === "queued" || i.status === "uploading" || i.status === "retrying" || i.status === "paused"
    ) && this.store.getState().isUploading && this.store.setState({ isUploading: !1 });
  }
}
function ui(r) {
  return r === "queued" || r === "uploading" || r === "retrying" || r === "paused";
}
function Ri(r) {
  return `https://api.filerobot.com/${r}`;
}
async function Ka(r, e) {
  const t = `${Ri(r)}/key/${encodeURIComponent(e)}`, i = new AbortController(), o = setTimeout(() => i.abort(), 3e4);
  try {
    const s = await fetch(t, { signal: i.signal });
    if (clearTimeout(o), !s.ok)
      throw new Error(`SASS key exchange failed (HTTP ${s.status})`);
    const n = await s.json();
    if (n.status === "error")
      throw new Error(`SASS key exchange failed: ${n.msg || "Unknown error"}`);
    return n.key;
  } catch (s) {
    throw clearTimeout(o), s instanceof DOMException && s.name === "AbortError" ? new Error("SASS key exchange timed out") : s;
  }
}
function fi(r, e) {
  const t = {};
  switch (r.mode) {
    case "security-template":
      if (!e)
        throw new Error(
          "[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key."
        );
      t["X-Filerobot-Key"] = e;
      break;
    case "sass-key":
      t["X-Filerobot-Key"] = r.sassKey;
      break;
  }
  return r.airboxPuid && (t["X-Filerobot-Airbox-Puid"] = r.airboxPuid), t;
}
async function Ya(r) {
  const e = Ri(r.container);
  if (r.mode === "security-template") {
    const t = await Ka(r.container, r.securityTemplateId);
    return { apiBase: e, headers: fi(r, t), sassKey: t };
  }
  return { apiBase: e, headers: fi(r) };
}
const Wa = "https://ai.scaleflex.com", zr = 300, Ga = 0.85, Xa = 3e4;
function Ir(r) {
  return r === "low" ? 0.6 : r === "high" ? 0.85 : 0.75;
}
async function Ja(r, e) {
  var o, s, n;
  if (r.file) return r.file;
  const t = r.previewUrl || ((n = (s = (o = r.response) == null ? void 0 : o.file) == null ? void 0 : s.url) == null ? void 0 : n.cdn) || r.remoteUrl || "";
  if (!t) throw new Error("No image source for similarity check");
  const i = await fetch(t, { signal: e });
  if (!i.ok) throw new Error(`Failed to load image (HTTP ${i.status})`);
  return i.blob();
}
function Za(r) {
  return `${(r || "image").replace(/\.[^./\\]*$/, "") || "image"}.jpg`;
}
async function Qa(r) {
  if (typeof createImageBitmap == "function")
    try {
      const e = await createImageBitmap(r);
      return {
        source: e,
        width: e.width,
        height: e.height,
        close: () => e.close()
      };
    } catch {
    }
  return new Promise((e, t) => {
    const i = new Image(), o = URL.createObjectURL(r);
    i.onload = () => {
      e({
        source: i,
        width: i.naturalWidth,
        height: i.naturalHeight,
        close: () => URL.revokeObjectURL(o)
      });
    }, i.onerror = () => {
      URL.revokeObjectURL(o), t(new Error("Image decode failed"));
    }, i.src = o;
  });
}
async function el(r) {
  const e = await Qa(r);
  try {
    const t = e.width > zr ? zr / e.width : 1, i = Math.max(1, Math.round(e.width * t)), o = Math.max(1, Math.round(e.height * t)), s = document.createElement("canvas");
    s.width = i, s.height = o;
    const n = s.getContext("2d");
    if (!n) throw new Error("Canvas 2D not supported");
    return n.drawImage(e.source, 0, 0, i, o), await new Promise((a, l) => {
      s.toBlob(
        (c) => c ? a(c) : l(new Error("Canvas toBlob failed")),
        "image/jpeg",
        Ga
      );
    });
  } finally {
    e.close();
  }
}
async function Ar(r, e) {
  var a, l;
  const t = new AbortController(), i = setTimeout(() => t.abort(), Xa), o = () => t.abort();
  (a = e.signal) == null || a.addEventListener("abort", o);
  const s = t.signal, n = () => {
    if (s.aborted) throw new DOMException("Aborted", "AbortError");
  };
  try {
    n();
    const c = await Ja(r, s);
    n();
    const d = await el(c);
    n();
    const u = `${(e.endpoint || Wa).replace(/\/+$/, "")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`, w = new FormData();
    w.append("file", d, Za(r.name));
    const m = await fetch(u, {
      method: "POST",
      headers: {
        "Filerobot-Token": e.container,
        "Filerobot-Key": e.sassKey
      },
      body: w,
      signal: s
    });
    if (!m.ok) throw new Error(`Similarity check failed (HTTP ${m.status})`);
    const v = await m.json();
    if (v.status === "error")
      throw new Error(`Similarity check failed: ${v.msg || "Unknown error"}`);
    return (v.similar_assets ?? []).map(([C, L, k]) => ({
      uuid: C,
      score: L,
      url: k
    }));
  } finally {
    clearTimeout(i), (l = e.signal) == null || l.removeEventListener("abort", o);
  }
}
const Tt = "sfx-uploader:last-upload:", To = 1;
function tl(r) {
  var s, n, a, l, c, d, p, u, w;
  const { file: e, previewUrl: t, ...i } = r;
  let o = null;
  return r.status === "complete" && (r.previewUrl && !r.previewUrl.startsWith("blob:") ? o = r.previewUrl : o = ((a = (n = (s = r.response) == null ? void 0 : s.file) == null ? void 0 : n.url) == null ? void 0 : a.permalink) ?? ((d = (c = (l = r.response) == null ? void 0 : l.file) == null ? void 0 : c.url) == null ? void 0 : d.cdn_permalink) ?? ((w = (u = (p = r.response) == null ? void 0 : p.file) == null ? void 0 : u.url) == null ? void 0 : w.cdn) ?? null), { ...i, previewUrl: o };
}
function il(r) {
  try {
    const e = sessionStorage.getItem(Tt + r);
    if (!e) return null;
    const t = JSON.parse(e);
    return (t == null ? void 0 : t.__schemaVersion) !== To ? null : t;
  } catch {
    return null;
  }
}
function rl(r, e) {
  try {
    sessionStorage.setItem(Tt + r, JSON.stringify(e));
  } catch {
  }
}
const Xe = {
  /** Overwrite the stored batch. Pass only complete + failed files. */
  save(r, e) {
    if (e.length === 0) {
      this.clear(r);
      return;
    }
    const t = {
      __schemaVersion: To,
      savedAt: Date.now(),
      files: e.map(tl)
    };
    rl(r, t);
  },
  /** Returns the stored files (rehydrated back to UploadFile shape) or null.
   *  The `file` blob and `remoteUrl` are not serializable — they are set to
   *  null on restore. Downstream code must null-check `file.file` before use. */
  load(r) {
    const e = il(r);
    return e ? e.files.map((t) => ({
      ...t,
      file: null,
      previewUrl: t.previewUrl ?? null
    })) : null;
  },
  /** Check whether a stored batch exists without deserializing it. */
  exists(r) {
    try {
      return sessionStorage.getItem(Tt + r) != null;
    } catch {
      return !1;
    }
  },
  /** Drop the stored batch entirely. */
  clear(r) {
    try {
      sessionStorage.removeItem(Tt + r);
    } catch {
    }
  }
}, M = {
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
  FOLDER_COMPLETE: "sfx-folder-complete",
  TOTAL_PROGRESS: "sfx-total-progress",
  BEFORE_UPLOAD: "sfx-before-upload",
  OPEN: "sfx-open",
  CLOSE: "sfx-close",
  CANCEL: "sfx-cancel",
  MINIMIZE: "sfx-minimize",
  RESTORE: "sfx-restore",
  PANEL_SHOWN: "sfx-panel-shown",
  COMPLETE_ACTION: "sfx-complete-action",
  FILE_PREVIEW: "sfx-file-preview",
  FILL_METADATA: "sfx-fill-metadata",
  METADATA_SCHEMA: "sfx-metadata-schema",
  FILE_LOCATE: "sfx-file-locate",
  FILE_COPY_CDN: "sfx-file-copy-cdn"
};
let ol = 0;
function Ie() {
  return `file-${Date.now()}-${++ol}`;
}
function Ce(r) {
  if (!Number.isFinite(r) || r <= 0) return "0 B";
  const e = ["B", "KB", "MB", "GB"], t = Math.min(Math.floor(Math.log(r) / Math.log(1024)), e.length - 1), i = r / Math.pow(1024, t);
  return `${t === 0 ? i : i.toFixed(1)} ${e[t]}`;
}
function Gt(r) {
  if (!isFinite(r) || r <= 0) return "0s";
  const e = Math.round(r);
  if (e < 60) return `${e}s`;
  const t = Math.floor(e / 60);
  if (t > 99) {
    const o = Math.floor(t / 60), s = t % 60;
    return s > 0 ? `${o}h ${s}m` : `${o}h`;
  }
  const i = e % 60;
  return i > 0 ? `${t}m ${i}s` : `${t}m`;
}
function ue(r) {
  var t;
  const e = ((t = r.name.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return r.type.startsWith("image/") ? "image" : r.type.startsWith("video/") || ["mp4", "mov", "avi", "webm", "mkv", "flv", "wmv"].includes(e) ? "vid" : r.type.startsWith("audio/") || ["mp3", "wav", "ogg", "flac", "aac", "m4a", "wma"].includes(e) ? "audio" : r.type === "application/pdf" || e === "pdf" ? "pdf" : ["xls", "xlsx", "csv", "tsv", "ods"].includes(e) ? "sheet" : ["doc", "docx", "txt", "rtf", "odt", "pages"].includes(e) ? "doc" : ["ppt", "pptx", "key", "odp"].includes(e) ? "slide" : ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "zst"].includes(e) ? "zip" : ["js", "ts", "jsx", "tsx", "py", "rb", "go", "rs", "java", "c", "cpp", "h", "cs", "php", "swift", "kt", "sh", "bash"].includes(e) ? "code" : ["html", "css", "scss", "xml", "svg", "json", "yaml", "yml", "toml", "md", "mdx", "ini", "env", "log"].includes(e) ? "markup" : ["ttf", "otf", "woff", "woff2", "eot"].includes(e) ? "font" : ["ai", "psd", "sketch", "fig", "xd", "indd", "eps"].includes(e) ? "design" : ["exe", "dmg", "app", "msi", "deb", "rpm", "apk", "ipa"].includes(e) ? "binary" : ["sql", "db", "sqlite", "mdb"].includes(e) ? "data" : "gen";
}
function sl(r) {
  const e = r.lastIndexOf(".");
  return e >= 0 ? r.slice(e + 1).toUpperCase() : "";
}
const nl = /* @__PURE__ */ new Set([".ds_store", "thumbs.db", "desktop.ini"]);
function Xt(r) {
  const e = (r.split(/[\\/]/).pop() ?? r).toLowerCase();
  return e.startsWith(".ds_store") ? !0 : nl.has(e);
}
const al = "https://scaleflex.cloudimg.io/v7/assets/file-types/v3/", Lo = {
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
function hi(r) {
  const e = r === "_default" ? "GENERIC" : r.toUpperCase();
  return `${al}${e}.svg?vh=${Lo[r]}`;
}
function zo(r) {
  const e = (r == null ? void 0 : r.toLowerCase().replaceAll(".", "")) || "";
  return e in Lo ? hi(e) : hi("_default");
}
function Io() {
  return hi("_default");
}
const ll = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  bmp: "image/bmp",
  ico: "image/x-icon",
  heic: "image/heic",
  heif: "image/heif",
  mp4: "video/mp4",
  mov: "video/quicktime",
  avi: "video/x-msvideo",
  webm: "video/webm",
  pdf: "application/pdf",
  zip: "application/zip",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
};
function Dr(r) {
  var t;
  const e = ((t = r.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return ll[e] || "";
}
function ve(r) {
  return r === "image/heic" || r === "image/heif";
}
function cl(r) {
  return new Promise((e) => {
    const t = document.createElement("video");
    t.preload = "metadata", t.muted = !0, t.playsInline = !0;
    const i = URL.createObjectURL(r);
    let o = !1;
    const s = () => {
      o || (o = !0, e(null)), t.removeAttribute("src"), t.load(), URL.revokeObjectURL(i);
    };
    t.addEventListener("seeked", () => {
      try {
        const n = document.createElement("canvas");
        n.width = t.videoWidth || 320, n.height = t.videoHeight || 240;
        const a = n.getContext("2d");
        if (a) {
          a.drawImage(t, 0, 0, n.width, n.height), n.toBlob((l) => {
            o || (o = !0, e(l ? URL.createObjectURL(l) : null), t.removeAttribute("src"), t.load(), URL.revokeObjectURL(i));
          }, "image/jpeg", 0.7);
          return;
        }
      } catch {
      }
      s();
    }, { once: !0 }), t.addEventListener("error", () => s(), { once: !0 }), setTimeout(() => s(), 5e3), t.src = i, t.addEventListener("loadeddata", () => {
      t.currentTime = 0.1;
    }, { once: !0 });
  });
}
function dl(r) {
  return typeof r == "string" && r.startsWith("Maximum ") && r.includes("files allowed");
}
function Jt(r, e, t) {
  var i, o;
  if (e.maxFileSize != null && r.size > 0 && r.size > e.maxFileSize)
    return `File exceeds ${(e.maxFileSize / 1048576).toFixed(1)} MB limit`;
  if (e.maxTotalFilesSize != null && r.size > 0) {
    let s = r.size;
    for (const n of t.values())
      n.status !== "rejected" && n.status !== "cancelled" && (s += n.size);
    if (s > e.maxTotalFilesSize)
      return "Total file size limit exceeded";
  }
  if (e.maxNumberOfFiles != null) {
    let s = 0;
    for (const n of t.values())
      n.status !== "rejected" && n.status !== "cancelled" && s++;
    if (s >= e.maxNumberOfFiles)
      return `Maximum ${e.maxNumberOfFiles} files allowed`;
  }
  if (e.allowedFileTypes != null) {
    const s = e.allowedFileTypes, n = "." + (((i = r.name.split(".").pop()) == null ? void 0 : i.toLowerCase()) ?? "");
    if (!s.some((l) => l.startsWith(".") ? n === l.toLowerCase() : l.endsWith("/*") ? r.type.startsWith(l.slice(0, -1)) : r.type === l)) return "File type not allowed";
  }
  if (e.blockedFileTypes != null) {
    const s = e.blockedFileTypes, n = "." + (((o = r.name.split(".").pop()) == null ? void 0 : o.toLowerCase()) ?? "");
    if (s.some((l) => l.startsWith(".") ? n === l.toLowerCase() : l.endsWith("/*") ? r.type.startsWith(l.slice(0, -1)) : r.type === l)) return "File type is blocked";
  }
  return null;
}
function jr(r) {
  return r.allowedFileTypes ? r.allowedFileTypes.join(",") : "";
}
const Mr = {
  "google-drive": {
    id: "google-drive",
    label: "Google Drive",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "transparent" },
    brandHtml: '<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'
  },
  dropbox: {
    id: "dropbox",
    label: "Dropbox",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "#0061ff" },
    brandHtml: '<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'
  },
  onedrive: {
    id: "onedrive",
    label: "OneDrive",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "#0078d4" },
    brandHtml: '<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'
  },
  box: {
    id: "box",
    label: "Box",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "#0e50a0", "font-size": "9px", "font-weight": "800", color: "#fff" },
    brandHtml: "box"
  },
  instagram: {
    id: "instagram",
    label: "Instagram",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
    brandHtml: '<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'
  },
  facebook: {
    id: "facebook",
    label: "Facebook",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "#1877f2" },
    brandHtml: '<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'
  },
  unsplash: {
    id: "unsplash",
    label: "Unsplash",
    fillIcon: !0,
    icon: "",
    brandStyle: { background: "#111" },
    brandHtml: '<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'
  }
};
function pl(r) {
  return r.filter((e) => e in Mr).map((e) => Mr[e]);
}
function Ee(r) {
  return r.brandStyle ? f`<span
    class=${Ho({ "brand-ico": !0, "brand-ico--transparent": r.brandStyle.background === "transparent" })}
    ${Z(r.brandStyle)}
  >${Ki(r.brandHtml)}</span>` : Ki(r.brandHtml);
}
var ul = Object.defineProperty, Ao = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && ul(e, t, o), o;
};
const fl = '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', hl = '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>', gl = '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>', ml = '<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>', et = [
  { id: "device", labelKey: "myDevice", label: "My Device", icon: fl, iconColor: "#2563eb" },
  { id: "url", labelKey: "urlLink", label: "URL link", icon: hl, iconColor: "#16a34a" },
  { id: "camera", labelKey: "camera", label: "Camera", icon: gl, iconColor: "#7c3aed" },
  { id: "screen-cast", labelKey: "screenCapture", label: "Screen capture", icon: ml, iconColor: "#ea580c" }
], zi = class zi extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.sources = et;
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
            ${e.brandHtml ? Ee(e) : Pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${ye(e.icon)}</svg>`}
            ${e.labelKey ? this.t(e.labelKey, e.label) : e.label}
          </button>
        `
    )}
    `;
  }
};
zi.styles = ne`
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
let Lt = zi;
Ao([
  O({ attribute: !1 })
], Lt.prototype, "t");
Ao([
  O({ type: Array })
], Lt.prototype, "sources");
function xl() {
  return {
    hidden: !1,
    required: !1,
    contributingDependencyUuids: []
  };
}
function bl(r, e) {
  let t = r.get(e);
  return t || (t = xl(), r.set(e, t)), t;
}
function vl(r, e) {
  if (r.length === 0 || e.length === 0) return [];
  const t = new Set(r);
  return e.filter((i) => t.has(i));
}
function yl(r, e) {
  r.contributingDependencyUuids.includes(e) || r.contributingDependencyUuids.push(e);
}
function wl(r, e, t) {
  const i = bl(r, t.targetCkey);
  switch (yl(i, e.uuid), t.type) {
    case "hide":
      i.hidden = !0;
      break;
    case "require":
      i.required = !0;
      break;
    case "allow_values": {
      const o = t.allowedValues ?? [];
      i.allowedValues = i.allowedValues === void 0 ? [...o] : vl(i.allowedValues, o);
      break;
    }
    case "set_values": {
      const o = t.setValues ?? [];
      if (o.length === 0) break;
      i.setValue === void 0 && (i.setValue = o.length === 1 ? o[0] : o);
      break;
    }
  }
}
function _l(r, e) {
  for (const t of e.actions)
    wl(r, e, t);
}
const kl = /* @__PURE__ */ new Set([
  "application/zip",
  "application/x-zip-compressed",
  "application/vnd.rar",
  "application/x-rar-compressed"
]);
function Sl(r) {
  const e = /* @__PURE__ */ new Set();
  if (!r) return e;
  const t = r.toLowerCase(), [i] = t.split("/");
  return i === "image" ? e.add("image") : i === "video" ? e.add("video") : i === "audio" ? e.add("audio") : i === "application" && e.add("document"), kl.has(t) && e.add("archive"), e;
}
function $l(r, e) {
  if (r.formatMimetypes.length === 0) return !0;
  const t = Sl(e);
  return r.formatMimetypes.some((i) => t.has(i));
}
function Zt(r) {
  return r == null ? !0 : Array.isArray(r) || typeof r == "string" ? r.length === 0 : !1;
}
function Br(r) {
  return typeof r == "boolean" ? r : r === "true" ? !0 : r === "false" ? !1 : null;
}
function wt(r) {
  return r == null ? [] : Array.isArray(r) ? r.map(String) : [String(r)];
}
function Nr(r, e) {
  if (r.length !== e.length) return !1;
  const t = new Set(r);
  for (const i of e) if (!t.has(i)) return !1;
  return !0;
}
function Hr(r, e) {
  if (r.length === 0 || e.length === 0) return !1;
  const t = new Set(r);
  for (const i of e) if (t.has(i)) return !0;
  return !1;
}
function Cl(r, e) {
  const t = e[r.triggerCkey], i = r.triggerValues;
  switch (r.triggerCondition) {
    case "is_true":
      return Br(t) === !0;
    case "is_false":
      return Br(t) === !1;
    case "is_empty":
      return Zt(t);
    case "is_not_empty":
      return !Zt(t);
    case "is_in":
      return Hr(wt(t), i);
    case "is_not_in":
      return Zt(t) ? !0 : !Hr(wt(t), i);
    case "is":
      return Nr(wt(t), i);
    case "is_not":
      return !Nr(wt(t), i);
    default:
      return !1;
  }
}
function Pl(r, e) {
  const t = /* @__PURE__ */ new Map();
  for (const i of e)
    i.active && $l(i, r.mime) && Cl(i, r.meta) && _l(t, i);
  return t;
}
function Ct(r, e, t) {
  const i = {}, o = /* @__PURE__ */ new Set();
  for (const a of e.fields)
    o.add(a.ckey), a.key in r.meta && (i[a.ckey] = r.meta[a.key]);
  const s = t.filter((a) => o.has(a.triggerCkey)), n = Pl({ mime: r.mime, meta: i }, s);
  for (const a of e.groups) {
    const l = a.ckey ? n.get(a.ckey) : void 0;
    if (l != null && l.hidden)
      for (const c of a.fields) {
        const d = n.get(c.ckey);
        if (d) {
          d.hidden = !0;
          for (const p of l.contributingDependencyUuids)
            d.contributingDependencyUuids.includes(p) || d.contributingDependencyUuids.push(p);
        } else
          n.set(c.ckey, {
            hidden: !0,
            required: !1,
            contributingDependencyUuids: [...l.contributingDependencyUuids]
          });
      }
  }
  return n;
}
function El(r, e) {
  const t = Array.isArray(e) ? e : [e];
  switch (r.type) {
    case "boolean": {
      const i = t[0];
      return i === "true" ? !0 : i === "false" ? !1 : null;
    }
    case "select-one":
      return t[0] ?? null;
    case "multi-select":
      return t.length > 0 ? t : null;
    default:
      return t.length === 1 ? t[0] : t;
  }
}
function Ul(r, e, t) {
  var i, o;
  return !!((i = t.get(r.ckey)) != null && i.hidden || e != null && e.ckey && ((o = t.get(e.ckey)) != null && o.hidden));
}
function Rl(r, e, t) {
  if (t.size === 0) return r;
  let i = null;
  for (const o of e.groups)
    for (const s of o.fields)
      Ul(s, o, t) && s.key in r && (i || (i = { ...r }), delete i[s.key]);
  return i ?? r;
}
const He = "product.ref", qe = "product.position", Ol = "__product__", Fl = /* @__PURE__ */ new Set([
  He,
  qe
]);
function Tl(r) {
  return Fl.has(r);
}
function Ll(r) {
  return r === He ? "ref" : r === qe ? "position" : null;
}
function zl(r) {
  return [
    {
      key: He,
      ckey: He,
      uuid: "product-ref",
      title: r("productRefLabel", "Product reference"),
      type: "text",
      placeholder: r("productRefPlaceholder", "e.g. SKU-12345"),
      required: 0,
      possible_values: [],
      regional_variants_group_uuid: null,
      permissions: []
    },
    {
      key: qe,
      ckey: qe,
      uuid: "product-position",
      title: r("productPositionLabel", "Position"),
      type: "numeric",
      placeholder: r("productPositionPlaceholder", "0"),
      required: 0,
      possible_values: [],
      regional_variants_group_uuid: null,
      permissions: []
    }
  ];
}
function Il(r) {
  return {
    uuid: Ol,
    // Not marked as `isRoot` — it slots in *after* the schema's root groups
    // (see `injectProductGroup`), so any subsequent non-root groups still
    // render below it.
    isRoot: !1,
    name: r("productFieldsLabel", "Product"),
    fields: zl(r)
  };
}
function Al(r, e) {
  const t = Il(e);
  let i = -1;
  for (let l = 0; l < r.groups.length; l++)
    r.groups[l].isRoot && (i = l);
  const o = i + 1, s = [
    ...r.groups.slice(0, o),
    t,
    ...r.groups.slice(o)
  ], n = s.flatMap((l) => l.fields), a = new Map(n.map((l) => [l.key, l]));
  return { ...r, groups: s, fields: n, fieldsByKey: a };
}
function $c(r, e, t) {
  var o;
  if ((((o = t == null ? void 0 : t.requiredFields) == null ? void 0 : o.includes(r.ckey)) || !!r.required) && zt(e))
    return `${r.title} is required`;
  if (zt(e)) return null;
  if (r.key === He)
    return typeof e != "string" || so.test(e) ? "Reference contains invalid characters" : null;
  if (r.key === qe) {
    const s = Number(e);
    return !Number.isFinite(s) || !Number.isInteger(s) ? "Position must be an integer" : null;
  }
  switch (r.type) {
    case "numeric": {
      const s = Number(e);
      if (!Number.isFinite(s)) return "Must be a valid number";
      if (!Number.isInteger(s)) return "Must be an integer";
      if (s < -1999999999 || s > 1999999999)
        return "Value out of range (±1,999,999,999)";
      break;
    }
    case "decimal2": {
      const s = Number(e);
      if (!Number.isFinite(s)) return "Must be a valid number";
      if (!/^\-?\d*\.?\d{0,2}$/.test(String(e)))
        return "Maximum 2 decimal places";
      if (s < -999999999999e-2 || s > 999999999999e-2)
        return "Value out of range (±9,999,999,999.99)";
      break;
    }
    case "geopoint": {
      const s = e, n = s.latitude !== "" && s.latitude != null, a = s.longitude !== "" && s.longitude != null;
      if (n !== a)
        return "Both latitude and longitude are required";
      if (n && a) {
        const l = Number(s.latitude), c = Number(s.longitude);
        if (!Number.isFinite(l) || l < -90 || l > 90)
          return "Latitude must be between -90 and 90";
        if (!Number.isFinite(c) || c < -180 || c > 180)
          return "Longitude must be between -180 and 180";
      }
      break;
    }
    case "attachment-uri": {
      try {
        const s = new URL(e);
        if (!["http:", "https:"].includes(s.protocol))
          return "Only http and https URLs are allowed";
      } catch {
        return "Invalid URI";
      }
      break;
    }
  }
  if (r.validation && typeof e == "string")
    try {
      if (!new RegExp(r.validation).test(e))
        return "Value does not match expected format";
    } catch {
    }
  return null;
}
function zt(r) {
  return r == null ? !0 : Array.isArray(r) || typeof r == "string" ? r.length === 0 : typeof r == "object" ? !Object.values(r).some(
    (e) => e != null && e !== ""
  ) : !r;
}
const gi = {
  LANGUAGES: "FTYPE_LANGUAGES"
};
function Cc(r, e) {
  if (!r.regional_variants_group_uuid) return;
  const t = e == null ? void 0 : e.regionalFilters;
  return t && r.regional_variants_group_uuid in t ? t[r.regional_variants_group_uuid] : e == null ? void 0 : e.language;
}
function Pc(r, e, t, i) {
  if (!r.regional_variants_group_uuid || !e) return;
  const o = e.find((a) => a.uuid === r.regional_variants_group_uuid);
  if (!o) return;
  const s = (t == null ? void 0 : t[o.uuid]) ?? i, n = o.variants.find((a) => a.api_value === s);
  if (n)
    return `${o.label}: ${n.label}`;
}
function Dl(r, e) {
  var i;
  const t = {};
  for (const o of r ?? []) {
    if (!((i = o.variants) != null && i.length)) continue;
    const s = o.type === gi.LANGUAGES ? jl(o.variants, e) : void 0;
    t[o.uuid] = s ?? o.variants[0].api_value;
  }
  return t;
}
function jl(r, e) {
  var n;
  if (!e) return;
  const t = e.toLowerCase(), i = t.split("-")[0];
  let o, s;
  for (const a of r) {
    const l = (n = a.api_value) == null ? void 0 : n.toLowerCase();
    if (l) {
      if (l === t) return a.api_value;
      !o && l === i && (o = a.api_value), !s && l.split("-")[0] === i && (s = a.api_value);
    }
  }
  return o ?? s;
}
const Do = /* @__PURE__ */ new Set([
  "asset-attachments",
  "attachments-assets",
  "integer-list"
]), Ml = /* @__PURE__ */ new Set([
  "face_matcher"
]);
function Ec(r) {
  return Do.has(r);
}
function Bl(r) {
  return Do.has(r.type) || Ml.has(r.ckey);
}
function Nl(r) {
  return r == null ? [] : Array.isArray(r) ? r.map(String) : [String(r)];
}
function Hl(r, e) {
  if (r.length !== e.length) return !1;
  const t = new Set(r);
  for (const i of e) if (!t.has(i)) return !1;
  return !0;
}
function ql(r, e) {
  const t = [];
  for (const [i, o] of e) {
    if (o.hidden) continue;
    const s = Nl(r[i]);
    if (s.length !== 0) {
      if (o.allowedValues !== void 0) {
        const n = new Set(o.allowedValues), a = s.filter((l) => !n.has(l));
        a.length > 0 && t.push({
          ckey: i,
          kind: "allow_values",
          conflictingValues: a,
          dependencyUuids: [...o.contributingDependencyUuids]
        });
      }
      if (o.setValue !== void 0) {
        const n = Array.isArray(o.setValue) ? o.setValue : [o.setValue];
        Hl(s, n) || t.push({
          ckey: i,
          kind: "set_values",
          conflictingValues: s,
          dependencyUuids: [...o.contributingDependencyUuids]
        });
      }
    }
  }
  return t;
}
const Vl = /* @__PURE__ */ new Set([
  "idle",
  "queued",
  "rejected"
]);
function Oi(r) {
  return !zt(r);
}
function mi(r, e) {
  var t;
  return Bl(r) ? !1 : (t = e == null ? void 0 : e.requiredFields) != null && t.includes(r.ckey) ? !0 : !!r.required;
}
function Dt(r) {
  return [...r.values()].filter((e) => Vl.has(e.status));
}
function Fi(r, e, t) {
  if (!e) return mi(r, t);
  const i = e.get(r.ckey);
  return i != null && i.hidden ? !1 : i != null && i.required ? !0 : mi(r, t);
}
function jt(r, e, t) {
  const i = /* @__PURE__ */ new Map();
  if (!t || t.length === 0) {
    for (const o of r) i.set(o.id, null);
    return i;
  }
  for (const o of r)
    i.set(
      o.id,
      Ct(
        { mime: o.type ?? "", meta: o.meta },
        e,
        t
      )
    );
  return i;
}
function Uc(r, e, t, i) {
  const o = Dt(r);
  if (o.length === 0) return {};
  const s = jt(o, e, i), n = {};
  for (const a of e.fields) {
    const l = o.filter((c) => {
      const d = s.get(c.id) ?? null;
      return Fi(a, d, t) ? !Oi(c.meta[a.key]) : !1;
    });
    l.length > 0 && (n[a.key] = l);
  }
  return n;
}
function Kl(r, e, t, i) {
  const o = Dt(r);
  if (o.length === 0) return null;
  const s = jt(o, e, i);
  for (const n of e.fields)
    if (o.some((l) => {
      const c = s.get(l.id) ?? null;
      return Fi(n, c, t) ? !Oi(l.meta[n.key]) : !1;
    })) return n.key;
  return null;
}
function Yl(r, e, t) {
  var o;
  const i = r.get(e.id);
  return i && i.has(t) ? i.get(t) : (o = e.meta) == null ? void 0 : o[t];
}
function Wl(r, e, t) {
  const i = e.get(r.id);
  if (!i || i.size === 0) return r;
  const o = { ...r.meta };
  for (const s of t.fields)
    i.has(s.key) && (o[s.key] = i.get(s.key));
  return { ...r, meta: o };
}
function Rc(r, e, t, i, o) {
  const s = /* @__PURE__ */ new Set(), n = Dt(e);
  if (n.length === 0) return s;
  const a = n.map(
    (c) => Wl(c, r, t)
  ), l = jt(a, t, o);
  for (const c of t.fields)
    n.some((p, u) => {
      const w = l.get(a[u].id) ?? null;
      return Fi(c, w, i) ? !Oi(
        Yl(r, p, c.key)
      ) : !1;
    }) && s.add(c.key);
  return s;
}
function Gl(r, e, t) {
  if (!t || t.length === 0) return null;
  const i = Dt(r);
  if (i.length === 0) return null;
  const o = jt(i, e, t), s = /* @__PURE__ */ new Map();
  for (const n of i) {
    const a = o.get(n.id);
    if (!a || a.size === 0) continue;
    const l = {};
    for (const d of e.fields)
      d.key in n.meta && (l[d.ckey] = n.meta[d.key]);
    const c = ql(l, a);
    c.length !== 0 && s.set(n.id, new Set(c.map((d) => d.ckey)));
  }
  if (s.size === 0) return null;
  for (const n of e.fields)
    for (const a of s.values())
      if (a.has(n.ckey)) return n.key;
  return null;
}
function Oc(r, e) {
  const t = { ...r };
  for (const i of Object.keys(e)) {
    const o = e[i];
    if (o == null || o === "") continue;
    const s = r[i];
    if (Array.isArray(o))
      if (Array.isArray(s)) {
        const n = new Set(s.map((l) => JSON.stringify(l))), a = [...s];
        for (const l of o) {
          const c = JSON.stringify(l);
          n.has(c) || (n.add(c), a.push(l));
        }
        t[i] = a;
      } else
        t[i] = o;
    else
      t[i] = o;
  }
  return t;
}
function jo(r) {
  let e = r;
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
var Xl = Object.defineProperty, le = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Xl(e, t, o), o;
};
const qr = 3, xi = new CSSStyleSheet();
xi.replaceSync(`
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
var we;
const oe = (we = class extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.compact = !1, this.externalDragOver = !1, this.accept = "", this.multi = !0, this.directory = !1, this.sources = [], this.sourcesLayout = "pills", this.mode = "modal", this._resizeObserver = null, this._dragOver = !1, this._moreOpen = !1, this._visiblePills = qr, this._dragCounter = 0, this._onDragEnter = (e) => {
      e.preventDefault(), this._dragCounter++, this._dragCounter === 1 && (this._dragOver = !0);
    }, this._onDragOver = (e) => {
      e.preventDefault();
    }, this._onDragLeave = (e) => {
      e.preventDefault(), this._dragCounter--, this._dragCounter <= 0 && (this._dragCounter = 0, this._dragOver = !1);
    }, this._onDrop = (e) => {
      e.preventDefault(), e.stopPropagation(), this._dragCounter = 0, this._dragOver = !1;
      const t = e.dataTransfer;
      t && Oo(t).then(({ files: i, hadDirectories: o }) => {
        i.length > 0 ? this._emitFiles(i, o) : o && this.dispatchEvent(
          new CustomEvent("folder-empty", { bubbles: !0, composed: !0 })
        );
      });
    }, this._onClick = (e) => {
      const t = this.shadowRoot.querySelector(".dz-content");
      if (t && this._rippleEl) {
        const i = t.getBoundingClientRect();
        this._rippleEl.style.left = `${e.clientX - i.left}px`, this._rippleEl.style.top = `${e.clientY - i.top}px`, this._rippleEl.classList.remove("go"), this._rippleEl.offsetWidth, this._rippleEl.classList.add("go");
      }
      this.browse();
    }, this._onKeyDown = (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this.browse());
    }, this._onFileChange = (e) => {
      const t = e.target, i = Array.from(t.files ?? []);
      for (const o of i) {
        const s = o.webkitRelativePath;
        s && Ui(o, s);
      }
      i.length > 0 && this._emitFiles(i), t.value = "";
    }, this._onPaste = (e) => {
      var o;
      if (!this.isConnected || this.offsetWidth === 0) return;
      const t = (o = e.clipboardData) == null ? void 0 : o.items;
      if (!t) return;
      const i = [];
      for (const s of t)
        if (s.kind === "file") {
          const n = s.getAsFile();
          n && i.push(n);
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
  /**
   * Programmatically open the file browser. Defaults to the file picker;
   * pass `'folder'` (only honored when `directory` is enabled) to open the
   * directory picker instead.
   */
  browse(e = "files") {
    var t, i;
    if (e === "folder" && this.directory && this.multi) {
      (t = this.folderInput) == null || t.click();
      return;
    }
    (i = this.fileInput) == null || i.click();
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
  _emitFiles(e, t = !1) {
    this.dispatchEvent(
      new CustomEvent("files-selected", {
        detail: { files: e, hadDirectories: t },
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
      this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-more-dropdown", ""), jo(this).appendChild(this._portalContainer), this._injectDropdownStyles()), Ue(
        f`<div class="sfx-more-dropdown open">
          ${e.map(
          (t) => f`
              <button
                class="sfx-more-item"
                @click=${(i) => this._onMoreItemClick(t, i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml ? Ee(t) : t.iconColor ? f`<svg
                        viewBox="0 0 24 24"
                        ${Z({ color: t.iconColor })}
                      >
                        ${ye(t.icon)}
                      </svg>` : Pe`<svg viewBox="0 0 24 24">${ye(
            t.icon
          )}</svg>`}
                </div>
                ${t.labelKey ? this.t(t.labelKey, t.label) : t.label}
              </button>
            `
        )}
        </div>`,
        this._portalContainer
      ), requestAnimationFrame(() => this._positionDropdown());
    } else this._portalContainer && (Ue($, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectDropdownStyles() {
    var t;
    const e = (t = this._portalContainer) == null ? void 0 : t.getRootNode();
    e && (e.adoptedStyleSheets.includes(xi) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, xi]));
  }
  /** Position the fixed dropdown, choosing above or below based on available space. */
  _positionDropdown() {
    var p, u;
    const e = (p = this.shadowRoot) == null ? void 0 : p.querySelector(
      ".more-wrap > button"
    ), t = (u = this._portalContainer) == null ? void 0 : u.querySelector(
      ".sfx-more-dropdown"
    );
    if (!e || !t) return;
    const i = e.getBoundingClientRect(), o = 8, s = t.scrollHeight, n = t.offsetWidth, a = i.top, l = window.innerHeight - i.bottom;
    a >= s + o || a > l ? t.style.top = `${i.top - s - o}px` : t.style.top = `${i.bottom + o}px`;
    let d = i.right - n;
    d = Math.max(8, Math.min(d, window.innerWidth - n - 8)), t.style.left = `${d}px`;
  }
  _onMoreItemClick(e, t) {
    t.stopPropagation(), this._moreOpen = !1, this._updateDropdownPortal(), this._onSourceIconClick(e);
  }
  _updateVisiblePills() {
    const e = window.innerWidth;
    this.sourcesLayout === "cards" ? e <= 480 ? this._visiblePills = 2 : e <= 768 ? this._visiblePills = 3 : this._visiblePills = 5 : e <= 768 ? this._visiblePills = 1 : this._visiblePills = qr;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("paste", this._onPaste), document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onDocKeyDown), window.addEventListener("scroll", this._onScrollOrResize, !0), window.addEventListener("resize", this._onScrollOrResize), this._updateVisiblePills(), typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver((e) => {
      var o;
      const i = (((o = e[0]) == null ? void 0 : o.contentRect.width) ?? this.getBoundingClientRect().width) >= we._WIDE_THRESHOLD_PX;
      i && !this.hasAttribute("data-wide") ? this.setAttribute("data-wide", "") : !i && this.hasAttribute("data-wide") && this.removeAttribute("data-wide");
    }), this._resizeObserver.observe(this));
  }
  updated(e) {
    super.updated(e), e.has("sourcesLayout") && this._updateVisiblePills(), e.has("t") && this._moreOpen && this._updateDropdownPortal();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("paste", this._onPaste), document.removeEventListener("click", this._onDocClick), document.removeEventListener("keydown", this._onDocKeyDown), window.removeEventListener("scroll", this._onScrollOrResize, !0), window.removeEventListener("resize", this._onScrollOrResize), this._resizeTimer && clearTimeout(this._resizeTimer), this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), this._portalContainer && (Ue($, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _renderPill(e) {
    return f`
      <button
        class="src-pill"
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? Ee(e) : f`<span
              class="pill-ico"
              ${Z(e.iconColor ? { color: e.iconColor } : null)}
            >
              ${Pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${ye(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey ? this.t(e.labelKey, e.label) : e.label}
      </button>
    `;
  }
  _renderCard(e) {
    return f`
      <button
        class="src-card"
        aria-label=${e.labelKey ? this.t(e.labelKey, e.label) : e.label}
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? f`<span class="card-ico">${Ee(e)}</span>` : f`<span
              class="card-ico"
              ${Z(e.iconColor ? { color: e.iconColor } : null)}
            >
              ${Pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${ye(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey ? this.t(e.labelKey, e.label) : e.label}</span>
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
          <span class="card-ico muted">
            <svg class="fill-icon" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2.5" />
              <circle cx="12" cy="12" r="2.5" />
              <circle cx="19" cy="12" r="2.5" />
            </svg>
          </span>
          <span class="card-label">${this.t("more", "More")}</span>
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
          ${this.t("more", "More")}
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
    ].filter(Boolean).join(" "), t = this.sources.slice(0, this._visiblePills), i = this.sources.slice(this._visiblePills);
    return f`
      <div
        class=${e}
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div
          class="dz-content"
          role="button"
          tabindex="0"
          aria-label=${this.t("dropFilesHere", "Drop files here or click to browse")}
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

          ${!this.compact && this.directory && this.multi ? f`<div class="title">
                ${this.t("dragDropClickTo", "Drag & Drop, click to")}
                <span>${this.t("browse", "browse")}</span>
                ${this.t("orUploadFolderPrefix", "or upload a ")}<button
                  type="button"
                  @click=${(o) => {
      o.stopPropagation(), this.browse("folder");
    }}
                >${this.t("uploadFolder", "folder")}</button>
              </div>` : f`<div class="title">${this.t("dragAndDrop", "Drag & Drop or click to")} <span>${this.t("browse", "browse")}</span></div>`}
          ${!this.compact && this.sources.length > 0 ? f`
                <div class="import-divider"><span>${this.t("orImportFrom", "or import from")}</span></div>
                ${this.sourcesLayout === "cards" ? f`
                      <div class="sources-cards">
                        ${t.map((o) => this._renderCard(o))}
                        ${i.length > 0 ? this._renderMoreCard() : $}
                      </div>
                    ` : f`
                      <div class="sources-grid">
                        ${t.map((o) => this._renderPill(o))}
                        ${i.length > 0 ? this._renderMoreDropdown() : $}
                      </div>
                    `}
              ` : $}
          ${this.compact && this.sources.length > 0 ? f`
                <div class="sources-row">
                  ${this.sources.map(
      (o) => f`
                      <button
                        class="src-ico"
                        ${Z(o.iconColor && !o.brandHtml ? { color: o.iconColor } : null)}
                        data-tip=${o.labelKey ? this.t(o.labelKey, o.label) : o.label}
                        aria-label=${o.labelKey ? this.t(o.labelKey, o.label) : o.label}
                        @click=${(s) => {
        s.stopPropagation(), this._onSourceIconClick(o);
      }}
                      >
                        ${o.brandHtml ? Ee(o) : Pe`<svg viewBox="0 0 24 24" class=${o.fillIcon ? "fill-icon" : ""}>${ye(o.icon)}</svg>`}
                      </button>
                    `
    )}
                </div>
              ` : $}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept || $}
          @change=${this._onFileChange}
        />
        ${this.directory && this.multi ? f`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />` : $}
      </div>
    `;
  }
}, we.styles = ne`
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: auto;
      transition: background 0.22s;
      flex: 1;
    }

    :host([mode="inline"]) .drop-zone {
      height: 100%;
    }

    /* Inner clickable content area — only this triggers file browse on click */
    .dz-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      padding: 50px 40px;
      border-radius: 12px;
      user-select: none;
      background: var(--sfx-up-bg, #fff);
      position: relative;
      outline: none;
      transition: background 0.22s;
    }

    .dz-content:hover {
      background: transparent;
    }

    /* Drag over state */
    .drop-zone.drag-over .dz-content {
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
      overflow: visible;
      border: 1.5px dashed var(--sfx-up-ring-color, #c4d5ef);
      border-radius: 12px;
      animation: compactIn 0.3s ease both;
    }

    .drop-zone.compact .dz-content {
      padding: 14px 16px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      background: none;
      border-radius: 0;
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
      overflow: visible;
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

    .dz-content:hover .core {
      transform: translateY(-2px);
      box-shadow: 0 5px 18px rgba(37, 99, 235, 0.22);
    }

    /* --- Text --- */
    .title {
      font-size: 20px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
      /* Match the icon's 24px bottom margin so the title has equal breathing
         room above (icon → title) and below (title → divider). */
      margin-bottom: 24px;
      transition:
        font-size 0.3s,
        margin 0.3s;
    }

    .title span {
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }

    /* "folder" link merged into the title — styled like the "browse" span. */
    .title button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
    }
    .title button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }

    .folder-pick {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      margin-bottom: 8px;
      transition: opacity 0.15s;
    }
    .folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
    }
    .compact .folder-pick {
      display: none;
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
      background: #fff;
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
      max-width: 760px;
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
      max-width: 140px;
    }

    .src-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 8px 16px;
      border-radius: 16px;
      border: 1.5px solid rgba(226, 232, 240, 0.6);
      background: #fff;
      cursor: pointer;
      transition: all 0.18s ease;
      flex: 1;
      min-width: 88px;
      max-width: 140px;
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

    .src-card .card-ico.muted {
      color: var(--sfx-up-text-muted, #94a3b8);
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
      font-size: 10px;
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
    .src-card .brand-ico--transparent {
      background: none !important;
      width: auto;
      height: auto;
    }

    .src-card .brand-ico--transparent svg {
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
      background: #fff;
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
  `, we._WIDE_THRESHOLD_PX = 1200, we);
le([
  O({ attribute: !1 })
], oe.prototype, "t");
le([
  O({ type: Boolean, reflect: !0 })
], oe.prototype, "compact");
le([
  O({ type: Boolean, attribute: "external-drag-over" })
], oe.prototype, "externalDragOver");
le([
  O({ type: String })
], oe.prototype, "accept");
le([
  O({ type: Boolean })
], oe.prototype, "multi");
le([
  O({ type: Boolean })
], oe.prototype, "directory");
le([
  O({ type: Array })
], oe.prototype, "sources");
le([
  O({ type: String, attribute: "sources-layout" })
], oe.prototype, "sourcesLayout");
le([
  O({ type: String, reflect: !0 })
], oe.prototype, "mode");
le([
  I()
], oe.prototype, "_dragOver");
le([
  I()
], oe.prototype, "_moreOpen");
le([
  I()
], oe.prototype, "_visiblePills");
le([
  vi(".ripple")
], oe.prototype, "_rippleEl");
le([
  vi("input[data-sfx-dz-files]")
], oe.prototype, "fileInput");
le([
  vi("input[data-sfx-dz-folder]")
], oe.prototype, "folderInput");
let Fc = oe;
const Ii = class Ii extends pe {
  render() {
    return f`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `;
  }
};
Ii.styles = ne`
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
let Vr = Ii;
var Jl = Object.defineProperty, W = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Jl(e, t, o), o;
};
const bi = new CSSStyleSheet();
bi.replaceSync(`
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
const Ai = class Ai extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.files = [], this.showDropTile = !1, this.sources = [], this.accept = "", this.multi = !0, this.directory = !1, this.mode = "upload", this.showLocateButton = !1, this.showCopyCdnButton = !1, this.showCheckSimilar = !1, this.selectMode = !1, this.selectedIds = /* @__PURE__ */ new Set(), this.allSelected = !1, this.selectionFull = !1, this.maxSelection = 0, this.previewOpen = !1, this.searchRunIds = [], this.searchActiveIds = /* @__PURE__ */ new Set(), this.searchResults = /* @__PURE__ */ new Map(), this._moreOpen = !1, this._dropTileMaxVisible = 3, this._portalContainer = null, this._outsideClickHandler = (e) => {
      var o;
      if ((o = this._portalContainer) != null && o.contains(e.target)) return;
      const t = this.renderRoot.querySelector(".drop-tile-more-wrap"), i = e.composedPath();
      t && i.includes(t) || (this._moreOpen = !1, this._closePortal(), document.removeEventListener("click", this._outsideClickHandler, !0));
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
    const e = this.renderRoot.querySelector(
      "input[data-sfx-fl-files]"
    );
    e == null || e.click();
  }
  _onDropTileFolderClick(e) {
    e.stopPropagation();
    const t = this.renderRoot.querySelector(
      "input[data-sfx-fl-folder]"
    );
    t == null || t.click();
  }
  _onFileInput(e) {
    const t = e.target, i = Array.from(t.files ?? []);
    for (const o of i) {
      const s = o.webkitRelativePath;
      s && Ui(o, s);
    }
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
  updated(e) {
    super.updated(e), e.has("t") && this._moreOpen && this._openPortal();
  }
  _toggleMore(e) {
    e.stopPropagation(), this._moreOpen = !this._moreOpen, this._moreOpen ? (this._openPortal(), this._addGlobalListeners()) : (this._closePortal(), this._removeGlobalListeners());
  }
  _openPortal() {
    const e = this.sources.slice(this._dropTileMaxVisible);
    this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-tile-dropdown", ""), jo(this).appendChild(this._portalContainer), this._injectTileDropdownStyles()), Ue(
      f`<div class="sfx-tile-dropdown">
        ${e.map((t) => f`
          <button
            class="sfx-tile-dropdown-item"
            @click=${(i) => this._onMoreSourceClick(i, t)}
          >
            <span class="sfx-tile-dropdown-ico" ${Z(t.iconColor && !t.brandHtml ? { color: t.iconColor } : null)}>
              ${t.brandHtml ? Ee(t) : Pe`<svg viewBox="0 0 24 24" class=${t.fillIcon ? "fill-icon" : ""}>${ye(t.icon)}</svg>`}
            </span>
            ${t.labelKey ? this.t(t.labelKey, t.label) : t.label}
          </button>
        `)}
      </div>`,
      this._portalContainer
    ), requestAnimationFrame(() => this._positionPortal());
  }
  _positionPortal() {
    var p;
    const e = this.renderRoot.querySelector(".drop-tile-more"), t = (p = this._portalContainer) == null ? void 0 : p.querySelector(".sfx-tile-dropdown");
    if (!e || !t) return;
    const i = e.getBoundingClientRect(), o = 6, s = t.scrollHeight, n = t.offsetWidth, a = i.top, l = window.innerHeight - i.bottom;
    a >= s + o || a > l ? t.style.top = `${i.top - s - o}px` : t.style.top = `${i.bottom + o}px`;
    let d = i.right - n;
    d = Math.max(8, Math.min(d, window.innerWidth - n - 8)), t.style.left = `${d}px`;
  }
  _closePortal() {
    this._portalContainer && (Ue($, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectTileDropdownStyles() {
    var t;
    const e = (t = this._portalContainer) == null ? void 0 : t.getRootNode();
    e && (e.adoptedStyleSheets.includes(bi) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, bi]));
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
    const e = this._dropTileMaxVisible, t = this.sources.slice(0, e), i = this.sources.slice(e);
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
          <div class="drop-tile-text">${this.t("dropOrClickTo", "Drop or click to")} <span>${this.t("browse", "browse")}</span></div>
          ${this.directory && this.multi ? f`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix", "or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder", "folder")}</button>
              </div>` : $}
          ${t.length > 0 ? f`
            <div class="drop-tile-sources">
              ${t.map((o) => f`
                <button
                  class="drop-tile-src"
                  ${Z(o.iconColor && !o.brandHtml ? { color: o.iconColor } : null)}
                  title=${o.labelKey ? this.t(o.labelKey, o.label) : o.label}
                  @click=${(s) => this._onSourceClick(s, o)}
                >
                  ${o.brandHtml ? Ee(o) : Pe`<svg viewBox="0 0 24 24" class=${o.fillIcon ? "fill-icon" : ""}>${ye(o.icon)}</svg>`}
                </button>
              `)}
              ${i.length > 0 ? f`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources", "More sources")} @click=${(o) => this._toggleMore(o)}>···</button>
                </div>
              ` : $}
            </div>
          ` : $}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept || $} @change=${this._onFileInput} />
        ${this.directory && this.multi ? f`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />` : $}
      </div>
    `;
  }
  _onSelectAll(e) {
    const t = e.target.checked;
    this.dispatchEvent(
      new CustomEvent("similar-select-all", {
        detail: { selected: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onSearchCancel() {
    this.dispatchEvent(
      new CustomEvent("check-similar-search-cancel", { bubbles: !0, composed: !0 })
    );
  }
  /** Per-tile similarity-search status (done is shown via the result badge,
   *  not a status here). */
  _statusFor(e) {
    return this.searchActiveIds.has(e) ? "searching" : this.searchRunIds.includes(e) && !this.searchResults.has(e) ? "queued" : "";
  }
  render() {
    const e = this.searchRunIds.length, t = this.searchRunIds.filter((s) => this.searchResults.has(s)).length, i = e ? Math.round(t / e * 100) : 0, o = e > 0 && t === e;
    return f`
      ${e > 1 && !this.previewOpen ? f`
            <div class="similar-banner search">
              ${o ? f`<span class="search-done-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>` : f`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b>${o ? this.t("similarCheckDone", "Similarity check complete") : this.t("checkingSimilar", "Checking for similar assets…")}</b>
                <span>${this.t("similarProgress", "{{done}} of {{total}} done", { done: t, total: e })}</span>
                <div class="search-bar"><div class="search-bar-fill" ${Z({ width: `${i}%` })}></div></div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${o ? this.t("done", "Done") : this.t("cancel", "Cancel")}
              </button>
            </div>
          ` : $}
      <div class="grid">
        ${this.showDropTile && this.mode !== "review" ? this._renderDropTile() : $}
        ${Qt(
      this.files,
      (s) => s.id,
      (s, n) => {
        var a;
        return f`<sfx-file-item .t=${this.t} .file=${s} .mode=${this.mode} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} .showCheckSimilar=${this.showCheckSimilar} .selectMode=${this.selectMode} .isSelected=${this.selectedIds.has(s.id)} .selectionActive=${this.selectedIds.size > 0} .selectionFull=${this.selectionFull} .previewOpen=${this.previewOpen} .similarStatus=${this._statusFor(s.id)} .similarCount=${((a = this.searchResults.get(s.id)) == null ? void 0 : a.length) ?? -1} .similarResults=${this.searchResults.get(s.id) ?? []} ${Z({ "--tile-index": String(n) })}></sfx-file-item>`;
      }
    )}
      </div>
    `;
  }
};
Ai.styles = ne`
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
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-up-grid-min, 224px), 1fr));
      gap: 12px;
      padding: 4px var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
    }

    /* Instruction / progress banner. Sticky to the top of the scrolling grid so
       it stays reachable (Select all / Check / Cancel / progress) when there are
       many assets and the list is long. Two-layer background so the banner
       stays fully opaque even when the host project sets --accent to a
       translucent colour: solid bg underneath, primary tint on top. z-index
       must clear in-tile overlays (max z-index inside a tile is 11). */
    .similar-banner {
      position: sticky;
      top: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 var(--sfx-grid-pad-r, 8px) 12px var(--sfx-grid-pad-l, 16px);
      padding: 8px 16px;
      border-radius: 10px;
      background-color: var(--sfx-up-bg, #fff);
      background-image: linear-gradient(
        var(--sfx-up-primary-bg, #eff6ff),
        var(--sfx-up-primary-bg, #eff6ff)
      );
      border: 1px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
    }

    .similar-banner-ico {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .similar-banner-ico svg { width: 16px; height: 16px; }

    .similar-banner-txt { flex: 1; min-width: 0; }
    .similar-banner-txt b {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #37414b;
    }
    .similar-banner-txt span {
      font-size: 12px;
      font-weight: 400;
      color: #5b6e82;
    }

    .similar-select-count {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      height: 24px;
      padding: 0 8px;
      border-radius: 999px;
      background: var(--sfx-up-surface, #eef2ff);
      color: var(--sfx-up-primary, #2563eb);
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
    }
    .similar-select-count.full {
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
    }

    .similar-select-all {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 500;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
    }

    .similar-select-all input {
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      margin: 0;
      border: none;
      border-radius: 6px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: inset 0 0 0 1.5px #ccd6de;
      cursor: pointer;
      position: relative;
      top: 1px;
      transition: background-color 0.15s ease, box-shadow 0.15s ease;
    }

    .similar-select-all input:checked {
      background: var(--sfx-up-primary, #2563eb);
      box-shadow: inset 0 0 0 1.5px var(--sfx-up-primary, #2563eb);
    }

    .similar-select-all input:checked::after {
      content: '';
      position: absolute;
      left: 7px;
      top: 3.5px;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* --- Similarity search progress banner --- */
    .search-ring {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2.5px solid var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.18));
      border-top-color: var(--sfx-up-primary, #2563eb);
      animation: simBannerSpin 0.7s linear infinite;
    }

    @keyframes simBannerSpin { to { transform: rotate(360deg); } }

    .search-done-ico {
      flex: 0 0 22px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--sfx-up-success, #16a34a);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .search-done-ico svg { width: 14px; height: 14px; }

    .search-bar {
      height: 6px;
      border-radius: 3px;
      background: var(--sfx-up-bg, #fff);
      overflow: hidden;
      margin-top: 7px;
    }
    .search-bar-fill {
      height: 100%;
      border-radius: 3px;
      background: var(--sfx-up-primary, #2563eb);
      transition: width 0.3s ease;
    }

    .search-cancel {
      flex: 0 0 auto;
      height: 32px;
      padding: 0 14px;
      border-radius: 6px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-secondary, #475569);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .search-cancel:hover { background: var(--sfx-up-border-light, #f1f5f9); }

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
        padding: 4px 12px 16px;
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
       container-type lets the inner rings/icon scale with tile width via cqi.
       Padding-block gives the rings breathing room so they never hug the
       top edge even when the cell is short. */
    .drop-tile-preview {
      flex: 1;
      min-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 14px 8px 6px;
      box-sizing: border-box;
      container-type: inline-size;
      container-name: drop-tile-preview;
    }

    /* Info area — natural height stays close to the file-card .info area.
       Bottom padding is trimmed so the preview has more room for the rings
       when the cell is short. */
    .drop-tile-info {
      padding: 8px 12px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      container-type: inline-size;
      container-name: drop-tile-info;
    }

    /* Rings scale with tile width (cqi) and shrink if the preview area is
       too short — that's why we drop flex-shrink and use max-height. */
    .drop-tile-rings {
      width: clamp(40px, 22cqi, 100px);
      height: clamp(40px, 22cqi, 100px);
      max-height: 100%;
      aspect-ratio: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
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

    .drop-tile-folder-pick {
      font-size: clamp(11px, 3cqi, 13px);
      color: var(--sfx-up-text-muted, #94a3b8);
      text-align: center;
      margin-top: 2px;
    }
    .drop-tile-folder-pick button {
      background: none;
      border: none;
      padding: 0;
      font: inherit;
      color: var(--sfx-up-primary, #2563eb);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color 0.15s;
    }
    .drop-tile-folder-pick button:hover {
      color: var(--sfx-up-primary-hover, #1d4ed8);
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
let K = Ai;
W([
  O({ attribute: !1 })
], K.prototype, "t");
W([
  O({ attribute: !1 })
], K.prototype, "files");
W([
  O({ type: Boolean })
], K.prototype, "showDropTile");
W([
  O({ attribute: !1 })
], K.prototype, "sources");
W([
  O({ type: String })
], K.prototype, "accept");
W([
  O({ type: Boolean })
], K.prototype, "multi");
W([
  O({ type: Boolean })
], K.prototype, "directory");
W([
  O({ type: String })
], K.prototype, "mode");
W([
  O({ type: Boolean })
], K.prototype, "showLocateButton");
W([
  O({ type: Boolean })
], K.prototype, "showCopyCdnButton");
W([
  O({ type: Boolean })
], K.prototype, "showCheckSimilar");
W([
  O({ type: Boolean })
], K.prototype, "selectMode");
W([
  O({ attribute: !1 })
], K.prototype, "selectedIds");
W([
  O({ type: Boolean })
], K.prototype, "allSelected");
W([
  O({ type: Boolean })
], K.prototype, "selectionFull");
W([
  O({ type: Number })
], K.prototype, "maxSelection");
W([
  O({ type: Boolean })
], K.prototype, "previewOpen");
W([
  O({ attribute: !1 })
], K.prototype, "searchRunIds");
W([
  O({ attribute: !1 })
], K.prototype, "searchActiveIds");
W([
  O({ attribute: !1 })
], K.prototype, "searchResults");
W([
  I()
], K.prototype, "_moreOpen");
W([
  I()
], K.prototype, "_dropTileMaxVisible");
var Zl = Object.defineProperty, ee = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Zl(e, t, o), o;
};
const Di = class Di extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.mode = "upload", this.showLocateButton = !1, this.showCopyCdnButton = !1, this.showCheckSimilar = !1, this.selectMode = !1, this.isSelected = !1, this.selectionActive = !1, this.selectionFull = !1, this.previewOpen = !1, this.similarStatus = "", this.similarCount = -1, this.similarResults = [], this.reviewPick = !1, this._dims = "", this._simPopover = !1, this._simPopLeft = 0, this._simPopTop = 0, this._simPopTimer = null, this._simHideTimer = null, this._copied = !1, this._copiedTimer = null, this._simPopoverShow = () => {
      if (this.previewOpen || !this.similarResults.length || (this._simCancelHide(), this._simPopover)) return;
      const e = this.getBoundingClientRect(), t = 240, i = 280;
      let o = e.right + 12;
      o + t > window.innerWidth - 8 && (o = e.left - t - 12), this._simPopLeft = Math.max(8, o), this._simPopTop = Math.max(8, Math.min(e.top, window.innerHeight - i - 8)), this._simPopTimer && clearTimeout(this._simPopTimer), this._simPopTimer = window.setTimeout(() => {
        this.style.zIndex = "50", this._simPopover = !0;
      }, 150);
    }, this._simCancelHide = () => {
      this._simHideTimer && (clearTimeout(this._simHideTimer), this._simHideTimer = null);
    }, this._simScheduleHide = () => {
      this._simPopTimer && (clearTimeout(this._simPopTimer), this._simPopTimer = null), this._simHideTimer && clearTimeout(this._simHideTimer), this._simHideTimer = window.setTimeout(() => this._simPopoverClose(), 180);
    }, this._simPopoverClose = () => {
      this._simPopTimer && (clearTimeout(this._simPopTimer), this._simPopTimer = null), this._simHideTimer && (clearTimeout(this._simHideTimer), this._simHideTimer = null), this._simPopover && (this._simPopover = !1), this.style.zIndex = "";
    };
  }
  updated(e) {
    var t, i, o, s, n;
    if (e.has("file")) {
      if (this._dims = "", (i = (t = this.file) == null ? void 0 : t.previewUrl) != null && i.startsWith("blob:")) {
        const a = this.file.previewUrl, l = new Image();
        l.onload = () => {
          var c;
          ((c = this.file) == null ? void 0 : c.previewUrl) === a && (this._dims = `${l.naturalWidth}×${l.naturalHeight}`);
        }, l.src = a;
      } else if ((n = (s = (o = this.file) == null ? void 0 : o.response) == null ? void 0 : s.file) != null && n.info) {
        const a = this.file.response.file.info;
        a.img_w && a.img_h && (this._dims = `${a.img_w}×${a.img_h}`);
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._simPopTimer != null && (clearTimeout(this._simPopTimer), this._simPopTimer = null), this._simHideTimer != null && (clearTimeout(this._simHideTimer), this._simHideTimer = null), this._copiedTimer != null && (clearTimeout(this._copiedTimer), this._copiedTimer = null);
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
  /** Per-tile "Check similar" — check this single image against the library. */
  _checkSimilarSingle(e) {
    e.stopPropagation(), this.file && this._emit("check-similar-single", { file: this.file });
  }
  /** Toggle this image's selection while in similar-image selection mode. */
  _toggleSimilar(e) {
    e.stopPropagation(), !(this.selectionFull && !this.isSelected) && this._emit("similar-toggle");
  }
  /** Select this image in the results-review modal's left list. */
  _reviewSelect() {
    this._emit("similar-results-select", { fileId: this.file.id });
  }
  /** Open the similar-results review panel for this image. */
  _openResults(e) {
    e.stopPropagation(), this._simPopoverClose(), this._emit("similar-open-results");
  }
  _locate(e) {
    e.stopPropagation(), this.file && this._emit("file-locate", { file: this.file });
  }
  async _copyCdn(e) {
    var i, o, s, n;
    e.stopPropagation();
    const t = (n = (s = (o = (i = this.file) == null ? void 0 : i.response) == null ? void 0 : o.file) == null ? void 0 : s.url) == null ? void 0 : n.cdn;
    if (t) {
      try {
        await navigator.clipboard.writeText(t);
      } catch {
        return;
      }
      this._emit("file-copy-cdn", { file: this.file, cdnUrl: t }), this._copied = !0, this._copiedTimer && clearTimeout(this._copiedTimer), this._copiedTimer = window.setTimeout(() => {
        this._copied = !1, this._copiedTimer = null;
      }, 1400);
    }
  }
  render() {
    var L, k;
    const e = this.file;
    if (!e) return $;
    const t = ue(e), i = e.status === "complete", o = e.status === "uploading", s = e.status === "paused", n = e.status === "error" || e.status === "failed", a = e.status === "rejected", l = this.mode === "review", c = sl(e.name), d = t === "image" && !ve(e.type), p = this.selectMode && d && !l, u = this.similarCount >= 0, w = p && !u && this.similarStatus === "", m = !l && !i && !o && !s && !n && e.status !== "rejected" && this.similarStatus !== "searching" && !this.reviewPick, v = m, C = [
      "tile",
      i ? "done" : "",
      o ? "uploading" : "",
      s ? "paused" : "",
      a ? "rejected" : "",
      l ? "review" : "",
      w ? "selectable" : "",
      w && this.isSelected ? "selected" : "",
      this.selectionActive && !d && !l ? "select-dimmed" : "",
      v ? "cs-overlay" : "",
      this.similarStatus === "queued" ? "sim-queued" : "",
      this.reviewPick ? "review-pick" : "",
      this.reviewPick && this.isSelected ? "selected" : ""
    ].filter(Boolean).join(" ");
    return f`
      <div
        class=${C}
        tabindex="0"
        @click=${this.reviewPick ? this._reviewSelect : w ? this._toggleSimilar : void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl ? f`<img class="preview-img" src=${e.previewUrl} alt="" />` : f`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${zo(c)}
                    alt="${c ? `${c} file` : "File"}"
                    @error=${(y) => {
      const _ = y.target, b = Io();
      !_.dataset.fallback && _.src !== b && (_.dataset.fallback = "1", _.src = b);
    }}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus === "searching" ? f`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching", "Searching…")}</div>
                </div>
              ` : $}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus && this.similarCount >= 0 ? this.similarCount > 0 ? f`
                  <span class="sim-result-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar", "{{count}} similar", { count: this.similarCount })}
                  </span>
                ` : f`<span class="sim-result-badge none">${this.t("noSimilar", "No similar")}</span>` : $}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${w ? f`
                <span
                  class="similar-cb ${this.isSelected ? "checked" : ""} ${this.selectionFull && !this.isSelected ? "disabled" : ""}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected ? "true" : "false"}
                  aria-disabled=${this.selectionFull && !this.isSelected ? "true" : "false"}
                  aria-label=${this.t("selectImage", "Select image")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              ` : $}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${m ? f`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details", "Details")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="cs-label">${this.t("details", "Details")}</span>
                  </button>
                  ${this.similarCount > 0 ? f`
                        <button class="check-similar-btn" @click=${this._openResults} @mouseenter=${this._simPopoverShow} @mouseleave=${this._simScheduleHide} aria-label=${this.t("viewSimilar", "View similar assets")}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          <span class="cs-label">${this.t("viewNSimilar", "View {{count}} similar", { count: this.similarCount })}</span>
                        </button>
                      ` : this.similarCount === 0 ? f`
                          <button class="check-similar-btn no-similar" @click=${this._openResults} aria-label=${this.t("noSimilarFound", "No similar assets found")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                              <circle cx="11" cy="11" r="7"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <span class="cs-label">${this.t("noSimilar", "No similar")}</span>
                          </button>
                        ` : this.showCheckSimilar && d ? f`
                            <button class="check-similar-btn" @click=${this._checkSimilarSingle} aria-label=${this.t("checkSimilar", "Check similar")}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <circle cx="11" cy="11" r="7"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              </svg>
                              <span class="cs-label">${this.t("checkSimilar", "Check similar")}</span>
                            </button>
                          ` : $}
                </div>
              ` : $}

          <!-- Review-mode hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Both buttons fade in on tile hover, only for completed
               files with a response.file. Each inner button has its own
               gate — Locate needs uuid, Copy CDN needs url.cdn — so an
               already-existed-but-missing-uuid edge case won't render a
               dead button. -->
          ${l && i && ((L = e.response) != null && L.file) && (this.showLocateButton || this.showCopyCdnButton) ? f`
                <div class="review-actions">
                  ${this.showLocateButton && e.response.file.uuid ? f`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate", "Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate", "Locate")}
                      </button>` : $}
                  ${this.showCopyCdnButton && ((k = e.response.file.url) != null && k.cdn) ? f`<button class="review-action primary ${this._copied ? "copied" : ""}" @click=${this._copyCdn} title=${this.t("copyCdn", "Copy CDN")} aria-label=${this.t("copyCdnLink", "Copy CDN link to clipboard")}>
                        ${this._copied ? f`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : f`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied ? this.t("copied", "Copied") : this.t("copyCdn", "Copy CDN")}
                      </button>` : $}
                </div>
              ` : $}

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
          ${i ? f`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>` : $}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l && n ? f`<div class="failed-badge" title=${e.error || this.t("uploadFailed", "Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>` : $}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l && (e.status === "uploading" || e.status === "paused") ? f`
                <div class="progress">
                  <div class="progress-fill" ${Z({ transform: `scaleX(${Math.min(e.progress, 100) / 100})` })}></div>
                </div>
              ` : $}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n || a) && e.error && !l ? f`<div class="error-badge" title=${e.error}>${e.error}</div>` : $}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i && e.alreadyExisted ? f`<div class="exists-badge" title=${this.t("alreadyUploaded", "Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded", "Already uploaded")}</span>
              </div>` : $}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n || a) && !(i && e.alreadyExisted) && e.duration != null && e.duration > 0 ? f`<div class="duration-badge">${this._formatDuration(e.duration)}</div>` : $}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l || this.reviewPick ? $ : f`
        <div class="actions">
          ${o && e.isTus ? f`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause", "Pause")} aria-label=${this.t("pauseUpload", "Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              ` : $}
          ${s ? f`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume", "Resume")} aria-label=${this.t("resumeUpload", "Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              ` : $}
          ${n ? f`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry", "Retry")} aria-label=${this.t("retryUpload", "Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              ` : $}
          <button class="act-btn del" @click=${this._remove} title=${this.t("remove", "Remove")} aria-label=${this.t("removeFile", "Remove file")}>
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
            aria-label=${this.t("fileName", "File name")}
            ?readonly=${l || this.reviewPick}
            @change=${l || this.reviewPick ? $ : this._rename} @click=${(y) => y.stopPropagation()} />
          <div class="meta">${c || ""}${e.size ? ` · ${Ce(e.size)}` : ""}${this._dims ? ` · ${this._dims}` : ""}</div>
        </div>
      </div>
      ${this._renderSimPopover()}
    `;
  }
  /** Hover preview popover (variant C: best match large + the rest stacked). */
  _renderSimPopover() {
    if (!this._simPopover || !this.similarResults.length) return $;
    const e = [...this.similarResults].sort((l, c) => c.score - l.score), t = e[0], i = e.length, o = e.slice(1), s = o.slice(0, 3), n = o.length - s.length, a = Math.round(t.score * 100);
    return f`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${Z({ left: `${this._simPopLeft}px`, top: `${this._simPopTop}px` })}
      >
        <div class="pop-hero">
          ${t.url ? f`<img src=${t.url} alt="" />` : $}
          <span class="pop-best ${t.score >= 0.85 ? "high" : ""}">${this.t("bestMatch", "{{pct}}% best match", { pct: a })}</span>
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar", "Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${o.length ? f`<div class="pop-thumbs">
                ${s.map((l) => f`<img src=${l.url} alt="" />`)}
                ${n > 0 ? f`<span class="pop-more">+${n}</span>` : $}
              </div>` : f`<span></span>`}
          <span class="pop-open">
            ${i === 1 ? this.t("open", "Open") : this.t("openAllN", "Open all {{count}}", { count: i })}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    `;
  }
  _formatDuration(e) {
    const t = Math.floor(e / 60), i = Math.floor(e % 60);
    return `${t}:${i.toString().padStart(2, "0")}`;
  }
};
Di.styles = ne`
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
      /* Query container so the hover actions can adapt to the TILE width (not
         the viewport). On .preview — never on .tile — because container-type
         makes the element a containing block for fixed-positioned descendants,
         which would break the .sim-popover (position: fixed) living on .tile. */
      container-type: inline-size;
      container-name: sfx-tile-media;
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
      padding-left: 5px;
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

    /* Reveal on hover or KEYBOARD focus only (:has(:focus-visible)) — a mouse
       click sets :focus but not :focus-visible, so actions don't linger/stick
       after clicking the tile. */
    .tile:hover .actions,
    .tile:focus-visible .actions,
    .tile:has(:focus-visible) .actions {
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
    /* Centered hover actions wrapper (Details + optional Check similar).
       Flex column with stretch so both buttons share one width. */
    .center-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: stretch;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 5;
    }

    .tile:hover .center-actions,
    .tile:focus-visible .center-actions,
    .tile:has(:focus-visible) .center-actions {
      opacity: 1;
    }

    @media (hover: none) {
      .center-actions { opacity: 1; }
    }

    .preview-btn,
    .check-similar-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      box-sizing: border-box;
      /* Fixed height so both buttons match regardless of border width. */
      height: 32px;
      padding: 0 16px;
      /* Fixed width so every button is identical across ALL tiles, regardless
         of how short the label is ("No similar" / "Details") — extra empty
         space is intentional, by design. Sized to fit the longest label
         ("View N similar"). max-width keeps it inside genuinely narrow tiles,
         where the container query below collapses it to an icon. */
      width: 160px;
      max-width: 100%;
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
    }

    .cs-label {
      /* Don't grow: keep the label at its natural width so the icon + text sit
         together as one group, centered in the button (rather than the icon
         pinned left with the text floating). Still shrinks + ellipsizes in
         narrow tiles. */
      flex: 0 1 auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* In narrow tiles the fixed 160px button can be wider than the media area.
       Let the button shrink to the container width minus a small inset so it
       doesn't reach the tile edges and the label can still ellipsize. */
    @container sfx-tile-media (max-width: 208px) {
      .preview-btn,
      .check-similar-btn {
        width: calc(100% - 24px);
        padding: 0 8px;
      }
    }

    /* Details — white, borderless (transparent border keeps the same box
       height as Check similar), blue text. On hover it stays white and scales
       up slightly (no blue fill, no darkening). Same look in both modes. */
    .preview-btn {
      border: 1px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
    }

    /* Hover feedback via shadow, NOT scale — scaling one button would make it
       wider than its sibling; both must stay the same width. */
    .preview-btn:hover {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
    }

    .preview-btn:hover svg {
      stroke: var(--sfx-up-primary, #2563eb);
    }

    /* Check similar — filled primary, visually distinct from Details */
    .check-similar-btn {
      border: 1.5px solid var(--sfx-up-primary, #2563eb);
      background: var(--sfx-up-primary, #2563eb);
      color: var(--sfx-up-bg, #fff);
      box-shadow: 0 2px 8px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    /* Hover feedback via a stronger glow, NOT scale, so width stays identical
       to the Details button. */
    .check-similar-btn:hover {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 4px 12px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.45));
    }

    /* "No similar found" — muted/neutral, NOT an action to re-run; clicking it
       just opens the panel's empty-state message. */
    .check-similar-btn.no-similar,
    .check-similar-btn.no-similar:hover {
      background: var(--sfx-up-bg, #fff);
      border-color: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text-muted, #94a3b8);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .preview-btn svg,
    .check-similar-btn svg {
      width: 13px;
      height: 13px;
    }

    /* Asset-picker style: on hover a dark semi-transparent overlay covers the
       preview, with the Details / Check similar buttons sitting on top. Only
       when the feature is enabled (cs-overlay) — normal mode is untouched. */
    .tile.cs-overlay .preview::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0);
      transition: background 0.15s ease;
      pointer-events: none;
      z-index: 2;
    }

    .tile.cs-overlay:hover .preview::after {
      background: rgba(0, 0, 0, 0.45);
    }

    /* --- Similar-image selection mode (asset-picker look) --- */
    .tile.selectable { cursor: pointer; }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed { opacity: 0.5; }

    /* Checkbox: hidden by default, revealed on tile hover/keyboard focus so the
       UI stays clean until the user is ready to pick. Always visible once
       checked — selected state must remain glanceable. */
    .similar-cb {
      position: absolute;
      top: 8px;
      left: 8px;
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      border-radius: 6px;
      border: 1.5px solid #cbd5e1;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;
      opacity: 0;
      transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    }

    .tile:hover .similar-cb,
    .tile:focus-visible .similar-cb,
    .tile:has(:focus-visible) .similar-cb,
    .similar-cb.checked {
      opacity: 1;
    }

    /* Touch devices have no hover — always reveal so picking remains possible. */
    @media (hover: none) {
      .similar-cb { opacity: 1; }
    }

    .similar-cb svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s ease; }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg { opacity: 1; }

    /* Selection cap reached: unselected checkboxes are muted on hover and not
       clickable. Stays hidden when not hovered like the rest. */
    .similar-cb.disabled { cursor: not-allowed; }
    .tile:hover .similar-cb.disabled,
    .tile:focus-visible .similar-cb.disabled,
    .tile:has(:focus-visible) .similar-cb.disabled {
      opacity: 0.4;
    }
    @media (hover: none) {
      .similar-cb.disabled { opacity: 0.4; }
    }

    /* --- Similarity search loading states --- */
    /* Queued (waiting its turn): just dimmed, no badge. */
    .tile.sim-queued { opacity: 0.55; transition: opacity 0.15s ease; }
    /* On hover a queued tile un-dims so its Details button is clearly visible. */
    .tile.sim-queued:hover { opacity: 1; }

    /* Searching: dark overlay + spinner over the preview. */
    .sim-search-overlay {
      position: absolute;
      inset: 0;
      z-index: 8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: rgba(15, 23, 42, 0.55);
      color: #fff;
    }
    .sim-search-overlay .sim-spinner {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      animation: spinRing 0.7s linear infinite;
    }
    .sim-search-overlay .sim-label {
      font-size: 11px;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    /* Checked: result badge "N similar" / "No similar" (top-left). Doubles as
       the "checked" indicator — no separate green check. */
    .sim-result-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 8;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      height: 24px;
      padding: 0 10px;
      border-radius: 999px;
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      box-shadow: 0 2px 6px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.22));
      pointer-events: none;
      transition: opacity 0.15s ease;
    }
    .sim-result-badge svg { width: 12px; height: 12px; }
    .sim-result-badge.none {
      background: var(--sfx-up-bg, #fff);
      color: var(--sfx-up-text-muted, #94a3b8);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      box-shadow: none;
    }
    /* Hide the resting badge whenever the centered Details / View-similar
       buttons show (hover OR keyboard focus) so they never overlap. */
    .tile:hover .sim-result-badge,
    .tile:focus-visible .sim-result-badge,
    .tile:has(:focus-visible) .sim-result-badge { opacity: 0; }

    /* Review-pick tile (results modal left list): plain selectable card. */
    .tile.review-pick { cursor: pointer; }
    .tile.review-pick:hover .sim-result-badge { opacity: 1; }
    .tile.review-pick .name-input { pointer-events: none; }

    /* --- Hover preview popover (best match) --- */
    .sim-popover {
      position: fixed;
      width: 240px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid var(--sfx-up-border, #e8edf5);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
      z-index: 10000;
      overflow: hidden;
      cursor: pointer;
      animation: simPopIn 0.12s ease;
    }
    @keyframes simPopIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
    .sim-popover .pop-hero { position: relative; aspect-ratio: 16 / 10; background: var(--sfx-up-surface, #eef); }
    .sim-popover .pop-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sim-popover .pop-best {
      position: absolute; top: 8px; left: 8px; font-size: 11px; font-weight: 700;
      padding: 3px 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-best.high { color: var(--sfx-up-success, #16a34a); }
    .sim-popover .pop-body { padding: 11px 13px 8px; }
    .sim-popover .pop-t { font-size: 12.5px; font-weight: 600; color: var(--sfx-up-text, #1e293b); }
    .sim-popover .pop-s { font-size: 11.5px; color: var(--sfx-up-text-muted, #94a3b8); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sim-popover .pop-foot { padding: 0 13px 12px; display: flex; align-items: center; justify-content: space-between; }
    .sim-popover .pop-thumbs { display: inline-flex; }
    .sim-popover .pop-thumbs img { width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; object-fit: cover; margin-left: -8px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }
    .sim-popover .pop-thumbs img:first-child { margin-left: 0; }
    .sim-popover .pop-more {
      width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; margin-left: -8px;
      background: var(--sfx-up-primary, #2563eb); color: #fff; font-size: 9.5px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-open { font-size: 11.5px; font-weight: 600; color: var(--sfx-up-primary, #2563eb); display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
    .sim-popover .pop-open svg { width: 12px; height: 12px; }

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

    /* --- "Already uploaded" note (neutral, not an error) --- */
    .exists-badge {
      position: absolute;
      bottom: 6px;
      left: 6px;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-text, #1e293b) 72%, transparent);
      border-radius: 6px;
      padding: 4px 8px;
      text-align: center;
      overflow: hidden;
    }

    .exists-badge svg {
      width: 12px;
      height: 12px;
      flex-shrink: 0;
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
let X = Di;
ee([
  O({ attribute: !1 })
], X.prototype, "t");
ee([
  O({ attribute: !1 })
], X.prototype, "file");
ee([
  O({ type: String })
], X.prototype, "mode");
ee([
  O({ type: Boolean })
], X.prototype, "showLocateButton");
ee([
  O({ type: Boolean })
], X.prototype, "showCopyCdnButton");
ee([
  O({ type: Boolean })
], X.prototype, "showCheckSimilar");
ee([
  O({ type: Boolean })
], X.prototype, "selectMode");
ee([
  O({ type: Boolean })
], X.prototype, "isSelected");
ee([
  O({ type: Boolean })
], X.prototype, "selectionActive");
ee([
  O({ type: Boolean })
], X.prototype, "selectionFull");
ee([
  O({ type: Boolean })
], X.prototype, "previewOpen");
ee([
  O({ type: String })
], X.prototype, "similarStatus");
ee([
  O({ type: Number })
], X.prototype, "similarCount");
ee([
  O({ attribute: !1 })
], X.prototype, "similarResults");
ee([
  O({ type: Boolean })
], X.prototype, "reviewPick");
ee([
  I()
], X.prototype, "_dims");
ee([
  I()
], X.prototype, "_simPopover");
ee([
  I()
], X.prototype, "_copied");
const ft = ne`
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
`, ht = ne`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;
var Ql = Object.defineProperty, xe = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Ql(e, t, o), o;
};
const Kr = 7, ec = 4, ji = class ji extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.fileCount = 0, this.totalSize = 0, this.thumbnails = [], this.primaryLabel = "Done", this.failedFiles = [], this.alreadyExistedCount = 0, this.showMinimize = !1, this._maxThumbs = Kr, this._updateMaxThumbs = () => {
      const e = window.innerWidth <= 768 ? ec : Kr;
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
  _minimize() {
    this.dispatchEvent(
      new CustomEvent("minimize-uploader", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    const e = this.thumbnails.slice(0, this._maxThumbs), t = this.thumbnails.length - this._maxThumbs, i = this.fileCount > 0, o = this.failedFiles.length > 0, s = o && !i, n = i && !o && this.alreadyExistedCount >= this.fileCount, a = this.fileCount - this.alreadyExistedCount;
    return f`
      ${this.showMinimize ? f`<button class="minimize-btn" title=${this.t("minimizeAndContinue", "Minimize & continue in background")} @click=${this._minimize}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>` : $}
      <button class="close-btn" title=${this.t("close", "Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s ? "error" : o ? "warning" : n ? "info" : ""}">
          ${s ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>` : o ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>` : n ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>` : f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>`}
        </div>
        <div class="title">${s ? this.t("uploadFailed", "Upload failed") : o ? this.t("partiallyUploaded", "Partially uploaded") : n ? this.t("alreadyInLibrary", { count: this.alreadyExistedCount, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" }) : this.t("uploadedSuccessfullyCount", { count: a, defaultValue_one: "{{count}} file uploaded successfully!", defaultValue_other: "{{count}} files uploaded successfully!" })}</div>
        <div class="subtitle">${s ? this.t("filesCouldNotBeUploaded", { count: this.failedFiles.length, defaultValue_one: "File could not be uploaded", defaultValue_other: "Files could not be uploaded" }) : o ? this.t("partialUploadSummary", "{{uploaded}} uploaded, {{failed}} failed", { uploaded: a, failed: this.failedFiles.length }) : n ? this.t("alreadyInLibrarySubtitle", { count: this.alreadyExistedCount, defaultValue_one: "It’s ready to use — nothing new to upload", defaultValue_other: "They’re ready to use — nothing new to upload" }) : this.t("allFilesReady", "All files are ready for use")}</div>

        ${e.length > 0 ? f`
              <div class="thumbs">
                ${e.map(
      (l) => f`<img class="thumb" src=${l} alt="" />`
    )}
                ${t > 0 ? f`<div class="thumb-more">+${t}</div>` : $}
              </div>
            ` : $}

        ${i && !n ? f`<div class="summary">${this.t("uploadedSize", "{{size}} uploaded", { size: Ce(this.totalSize) })}</div>` : $}

        ${this.alreadyExistedCount > 0 && !n ? f`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary", { count: this.alreadyExistedCount, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" })}</span>
            </div>` : $}

        ${o ? f`
            <div class="failed-list">
              ${this.failedFiles.map((l) => f`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${l.name}</div>
                    <div class="failed-reason">${l.error}</div>
                  </div>
                  <button class="failed-retry" title=${this.t("retry", "Retry")} @click=${() => this._retryFile(l.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          ` : $}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore", "Upload more")}</button>
          ${i || o ? f`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles", "Review files ({{count}})", { count: this.fileCount + this.failedFiles.length })}</button>` : $}
          ${o ? f`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll", "Retry all ({{count}})", { count: this.failedFiles.length })}</button>` : $}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
};
ji.styles = [ft, ht, ne`
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

    .icon.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
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

    /* --- Info banner (design-system "status-info" component) --- */
    .info-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
      width: 100%;
      max-width: 400px;
      min-height: 36px;
      padding: 8px 16px;
      border-radius: 8px;
      /* Inset shadow draws the 1px border WITHOUT adding to the box height,
         so the banner stays exactly 36px tall (8 + 20 line + 8) — matching the
         Figma inside-stroke. A real border would add 2px → 38px. */
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: -8px;
      margin-bottom: 22px;
    }

    .info-note svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
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

    .minimize-btn {
      position: absolute;
      top: 12px;
      right: 56px;
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

    .minimize-btn svg { width: 16px; height: 16px; }

    .minimize-btn:hover { background: var(--sfx-up-surface, #f8fafc); color: var(--sfx-up-text, #1e293b); }

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
let fe = ji;
xe([
  O({ attribute: !1 })
], fe.prototype, "t");
xe([
  O({ type: Number })
], fe.prototype, "fileCount");
xe([
  O({ type: Number })
], fe.prototype, "totalSize");
xe([
  O({ type: Array })
], fe.prototype, "thumbnails");
xe([
  O({ type: String })
], fe.prototype, "primaryLabel");
xe([
  O({ type: Array })
], fe.prototype, "failedFiles");
xe([
  O({ type: Number })
], fe.prototype, "alreadyExistedCount");
xe([
  O({ type: Boolean })
], fe.prototype, "showMinimize");
xe([
  I()
], fe.prototype, "_maxThumbs");
var tc = Object.defineProperty, gt = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && tc(e, t, o), o;
};
const Mi = class Mi extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.files = [], this.showLocateButton = !1, this.showCopyCdnButton = !1, this._filter = "all", this._setFilter = (e) => () => {
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
        <button class="back-btn" @click=${this._onBack} title=${this.t("back", "Back")}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          ${this.t("back", "Back")}
        </button>
        <span class="title">${this.t("lastUpload", "Last upload")} <span class="count">— ${this.t("fileCount", { count: t, defaultValue_one: "{{count}} file", defaultValue_other: "{{count}} files" })}</span></span>
        <div class="filters">
          <button class="chip ${this._filter === "all" ? "active" : ""}" @click=${this._setFilter("all")}>
            ${this.t("all", "All")} (${t})
          </button>
          <button class="chip ${this._filter === "success" ? "active" : ""}" @click=${this._setFilter("success")}>
            ✓ ${this.t("uploaded", "Uploaded")} (${this._successCount})
          </button>
          ${this._failedCount > 0 ? f`<button class="chip ${this._filter === "failed" ? "active" : ""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed", "Failed")} (${this._failedCount})
              </button>` : $}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload", "Clear last upload from this browser")}>${this.t("clear", "Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length === 0 ? f`<div class="empty">${this.t("noFilesMatchFilter", "No files match this filter.")}</div>` : f`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `;
  }
};
Mi.styles = ne`
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
let _e = Mi;
gt([
  O({ attribute: !1 })
], _e.prototype, "t");
gt([
  O({ attribute: !1 })
], _e.prototype, "files");
gt([
  O({ type: Boolean })
], _e.prototype, "showLocateButton");
gt([
  O({ type: Boolean })
], _e.prototype, "showCopyCdnButton");
gt([
  I()
], _e.prototype, "_filter");
customElements.define("sfx-last-upload-review", _e);
var ic = Object.defineProperty, ce = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && ic(e, t, o), o;
};
const Bi = class Bi extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.uploadState = "idle", this.fileCount = 0, this.totalSize = 0, this.failedCount = 0, this.showFillMetadata = !1, this.requireMetadataFirst = !1, this.completedCount = 0, this.uploadProgress = 0, this.showCheckSimilar = !1, this.selectMode = !1, this.selectedCount = 0, this.maxSelection = 0, this.allSelected = !1;
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
    if (this.requireMetadataFirst) {
      this.dispatchEvent(
        new CustomEvent("require-metadata", { bubbles: !0, composed: !0 })
      );
      return;
    }
    this.dispatchEvent(
      new CustomEvent("upload-start", { bubbles: !0, composed: !0 })
    );
  }
  _retryAll() {
    this.dispatchEvent(
      new CustomEvent("retry-all", { bubbles: !0, composed: !0 })
    );
  }
  _checkSimilarEnter() {
    this.dispatchEvent(
      new CustomEvent("check-similar-enter", { bubbles: !0, composed: !0 })
    );
  }
  _checkSimilarCancel() {
    this.dispatchEvent(
      new CustomEvent("check-similar-cancel", { bubbles: !0, composed: !0 })
    );
  }
  _checkSimilarRun() {
    this.dispatchEvent(
      new CustomEvent("check-similar-run", { bubbles: !0, composed: !0 })
    );
  }
  _similarSelectAll() {
    this.dispatchEvent(
      new CustomEvent("similar-select-all", {
        detail: { selected: !this.allSelected },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const e = this.uploadState === "uploading";
    return this.selectMode ? this._renderSelectToolbar() : f`
      ${e ? f`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label=${this.t("uploadProgress", "Upload progress")}
              >
                <div
                  class="progress-fill"
                  ${Z({ width: `${this.uploadProgress}%` })}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files", "files")}</span
              >
            </div>
          ` : $}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata && this.uploadState === "idle" ? f`
                <button
                  class=${this.requireMetadataFirst ? "btn-primary" : "btn-sec"}
                  @click=${this._fillMetadata}
                  aria-label=${this.t("fillMetadata", "Fill Metadata")}
                >
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
                  <span class="btn-label">${this.t("fillMetadata", "Fill Metadata")}</span>
                </button>
              ` : $}
          ${this.showCheckSimilar && this.uploadState === "idle" ? f`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t("checkSimilar", "Check similar")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span class="btn-label">${this.t("checkSimilar", "Check similar")}</span>
                </button>
              ` : $}
        </div>
        <div class="right">
          <button class="btn-ghost" @click=${this._clear} aria-label=${this.t("clear", "Clear")}>
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
            <span class="btn-label">${this.t("clear", "Clear")}</span>
          </button>
          <button class="btn-sec" @click=${this._addMore} aria-label=${this.t("addMore", "Add more")}>
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
            <span class="btn-label">${this.t("addMore", "Add more")}</span>
          </button>
          ${this.failedCount > 0 ? f`
                <button
                  class="btn-retry"
                  @click=${this._retryAll}
                  aria-label=${this.t("retryAll", "Retry all ({{count}})", { count: this.failedCount })}
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
                  <span class="btn-label">${this.t("retryAll", "Retry all ({{count}})", { count: this.failedCount })}</span>
                </button>
              ` : $}
          ${this._renderUploadButton()}
        </div>
      </div>
    `;
  }
  _renderSelectToolbar() {
    const e = this.selectedCount, t = this.maxSelection, i = t > 0 && e >= t;
    return f`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t("selectImagesToCheck", "Select images to check for similar assets")}</b>
            <span>${t > 0 ? this.t("selectImagesHintMax", "Pick up to {{max}}, then click Check", { max: t }) : this.t("selectImagesHint", "Pick one or more, then click Check")}</span>
          </div>
        </div>
        <div class="right">
          ${t > 0 ? f`<span
                class="count-pill ${i ? "full" : ""}"
                aria-label=${this.t("countSelected", "{{count}} of {{max}} selected", { count: e, max: t })}
              >${e}/${t}</span>` : $}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected ? this.t("deselectAll", "Deselect all") : this.t("selectAll", "Select all")}
          </button>
          <button class="btn-ghost" @click=${this._checkSimilarCancel} aria-label=${this.t("cancel", "Cancel")}>
            <span class="btn-label">${this.t("cancel", "Cancel")}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${e === 0}
            aria-label=${this.t("checkSimilar", "Check similar")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t("checkSimilar", "Check similar")}</span>
          </button>
        </div>
      </div>
    `;
  }
  _renderUploadButton() {
    const e = this.uploadState === "uploading", t = this.uploadState === "done", i = ["btn-primary", t ? "done-state" : ""].filter(Boolean).join(" "), o = e ? this.t("uploading", "Uploading") : t ? this.t("done", "Done") : this.t("upload", "Upload");
    return f`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e || this.fileCount === 0 && !t}
        aria-label=${o}
      >
        ${e ? f`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading", "Uploading")}…</span>` : t ? f`
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span class="btn-label">${this.t("done", "Done")}!</span>
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
              <span class="btn-label">${this.t("upload", "Upload")}</span>
            `}
      </button>
    `;
  }
};
Bi.styles = [
  ft,
  ht,
  ne`
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
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
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
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
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

      .select-count {
        font-size: 13px;
        font-weight: 500;
        color: var(--sfx-up-text-secondary, #475569);
      }

      /* --- Always-on similarity selection toolbar --- */
      .sim-ico {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: var(--sfx-up-primary-bg, #eff6ff);
        color: var(--sfx-up-primary, #2563eb);
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .sim-ico svg { width: 16px; height: 16px; }

      .sim-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
      .sim-text b {
        font-size: 13.5px;
        font-weight: 600;
        color: var(--sfx-up-text, #1e293b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .sim-text span {
        font-size: 12px;
        font-weight: 400;
        color: var(--sfx-up-text-muted, #64748b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .count-pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 28px;
        padding: 0 10px;
        border-radius: 999px;
        background: var(--sfx-up-surface, #eef2ff);
        color: var(--sfx-up-primary, #2563eb);
        font-size: 13px;
        font-weight: 700;
      }
      .count-pill.full {
        background: var(--sfx-up-primary, #2563eb);
        color: #fff;
      }

      .select-all {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--sfx-up-primary, #2563eb);
        padding: 0 6px;
        height: 28px;
        border-radius: 6px;
        transition: background 0.15s ease;
      }
      .select-all:hover { background: var(--sfx-up-primary-bg, #eff6ff); }

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
let re = Bi;
ce([
  O({ attribute: !1 })
], re.prototype, "t");
ce([
  O({ type: String })
], re.prototype, "uploadState");
ce([
  O({ type: Number })
], re.prototype, "fileCount");
ce([
  O({ type: Number })
], re.prototype, "totalSize");
ce([
  O({ type: Number })
], re.prototype, "failedCount");
ce([
  O({ type: Boolean })
], re.prototype, "showFillMetadata");
ce([
  O({ type: Boolean })
], re.prototype, "requireMetadataFirst");
ce([
  O({ type: Number })
], re.prototype, "completedCount");
ce([
  O({ type: Number })
], re.prototype, "uploadProgress");
ce([
  O({ type: Boolean })
], re.prototype, "showCheckSimilar");
ce([
  O({ type: Boolean })
], re.prototype, "selectMode");
ce([
  O({ type: Number })
], re.prototype, "selectedCount");
ce([
  O({ type: Number })
], re.prototype, "maxSelection");
ce([
  O({ type: Boolean })
], re.prototype, "allSelected");
const rc = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Ti(r, e) {
  return (t) => {
    if (t.key !== "Tab") return;
    const i = r();
    if (!i) return;
    const o = i.querySelector(e);
    if (!o) return;
    const s = Array.from(o.querySelectorAll(rc));
    if (s.length === 0) return;
    const n = s[0], a = s[s.length - 1], l = i.activeElement;
    t.shiftKey ? (l === n || !o.contains(l)) && (t.preventDefault(), a.focus()) : (l === a || !o.contains(l)) && (t.preventDefault(), n.focus());
  };
}
var oc = Object.defineProperty, Mt = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && oc(e, t, o), o;
};
const Ni = class Ni extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this._url = "", this._name = "", this._error = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._onUrlInput = (e) => {
      this._url = e.target.value, this._error = "", this._autoName();
    }, this._onNameInput = (e) => {
      this._name = e.target.value;
    }, this._focusTrap = Ti(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
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
          const o = (e = this.shadowRoot) == null ? void 0 : e.querySelector("#nameInput");
          o && (o.placeholder = i);
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
      this._error = this.t("pleaseEnterUrl", "Please enter a URL");
      return;
    }
    try {
      new URL(e);
    } catch {
      this._error = this.t("pleaseEnterValidUrl", "Please enter a valid URL");
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
            <div class="title">${this.t("importFromUrl", "Import from URL")}</div>
            <button class="close-btn" aria-label=${this.t("close", "Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            <div class="field">
              <label for="urlInput">${this.t("fileUrl", "File URL")}</label>
              <input
                id="urlInput"
                type="url"
                placeholder=${this.t("fileUrlPlaceholder", "https://example.com/file.pdf")}
                .value=${this._url}
                @input=${this._onUrlInput}
              />
            </div>
            <div class="field">
              <label for="nameInput">${this.t("fileName", "File name")} <span class="optional">(${this.t("optional", "optional")})</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t("fileNamePlaceholder", "document.pdf")}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error ? f`<div class="error">${this._error}</div>` : ""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel", "Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile", "Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
Ni.styles = [ft, ht, ne`
    :host {
      display: block;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
let Ve = Ni;
Mt([
  O({ attribute: !1 })
], Ve.prototype, "t");
Mt([
  I()
], Ve.prototype, "_url");
Mt([
  I()
], Ve.prototype, "_name");
Mt([
  I()
], Ve.prototype, "_error");
var sc = Object.defineProperty, mt = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && sc(e, t, o), o;
};
const Hi = class Hi extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this._stream = null, this._error = "", this._captured = null, this._previewUrl = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = Ti(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
      e.key === "Escape" && this._cancel(), this._focusTrap(e);
    }, this._capture = () => {
      var o, s;
      const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("video"), t = (s = this.shadowRoot) == null ? void 0 : s.querySelector("canvas");
      if (!e || !t) return;
      t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0), t.toBlob((n) => {
        n && (this._captured = n, this._previewUrl = URL.createObjectURL(n), this._stopStream());
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
      this._error = this.t("cameraAccessError", "Could not access camera. Please check your permissions.");
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
            <div class="title">${this.t("camera", "Camera")}</div>
            <button class="close-btn" aria-label=${this.t("close", "Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error ? f`<div class="error">${this._error}</div>` : this._captured ? f`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto", "Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake", "Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto", "Use photo")}</button>
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
Hi.styles = [ft, ht, ne`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
let Te = Hi;
mt([
  O({ attribute: !1 })
], Te.prototype, "t");
mt([
  I()
], Te.prototype, "_stream");
mt([
  I()
], Te.prototype, "_error");
mt([
  I()
], Te.prototype, "_captured");
mt([
  I()
], Te.prototype, "_previewUrl");
var nc = Object.defineProperty, We = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && nc(e, t, o), o;
};
const qi = class qi extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this._stream = null, this._recording = !1, this._error = "", this._recordedBlob = null, this._previewUrl = "", this._recorder = null, this._chunks = [], this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = Ti(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
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
        this._recorder = new MediaRecorder(this._stream, { mimeType: i }), this._recorder.ondataavailable = (o) => {
          o.data.size > 0 && this._chunks.push(o.data);
        }, this._recorder.onstop = () => {
          var s;
          const o = new Blob(this._chunks, { type: "video/webm" });
          this._recordedBlob = o, this._previewUrl = URL.createObjectURL(o), (s = this._stream) == null || s.getTracks().forEach((n) => n.stop()), this._stream = null;
        }, this._recorder.start();
      } catch {
        this._error = this.t("screenCaptureError", "Could not start screen capture. Please check your permissions.");
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
            <div class="title">${this.t("screenCast", "Screen cast")}</div>
            <button class="close-btn" aria-label=${this.t("close", "Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error ? f`<div class="error">${this._error}</div>` : this._recordedBlob ? f`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard", "Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording", "Use recording")}</button>
                    </div>
                  ` : this._recording ? f`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording", "Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording", "Stop recording")}</button>
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
                        <div class="start-text">${this.t("screenCastPrompt", "Share your screen to record a video that will be added to your uploads.")}</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel", "Cancel")}</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>${this.t("startRecording", "Start recording")}</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `;
  }
};
qi.styles = [ft, ht, ne`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
let ke = qi;
We([
  O({ attribute: !1 })
], ke.prototype, "t");
We([
  I()
], ke.prototype, "_stream");
We([
  I()
], ke.prototype, "_recording");
We([
  I()
], ke.prototype, "_error");
We([
  I()
], ke.prototype, "_recordedBlob");
We([
  I()
], ke.prototype, "_previewUrl");
var ac = Object.defineProperty, Li = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && ac(e, t, o), o;
};
const Vi = class Vi extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.duration = 6e3, this._toasts = [], this._nextId = 0;
  }
  show(e, t = "error") {
    const i = ++this._nextId;
    this._toasts = [...this._toasts, { id: i, message: e, type: t, leaving: !1 }], setTimeout(() => this._dismiss(i), this.duration);
  }
  _dismiss(e) {
    const t = this._toasts.findIndex((o) => o.id === e);
    if (t === -1) return;
    const i = [...this._toasts];
    i[t] = { ...i[t], leaving: !0 }, this._toasts = i, setTimeout(() => {
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
              <button class="toast-close" @click=${() => this._dismiss(e.id)} aria-label=${this.t("dismiss", "Dismiss")}>
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
Vi.styles = ne`
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
let Ke = Vi;
Li([
  O({ attribute: !1 })
], Ke.prototype, "t");
Li([
  O({ type: Number })
], Ke.prototype, "duration");
Li([
  I()
], Ke.prototype, "_toasts");
customElements.define("sfx-toast", Ke);
var lc = Object.defineProperty, N = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && lc(e, t, o), o;
};
const Yr = /* @__PURE__ */ new Set(["unsplash"]), be = 10, cc = 3, dc = [
  "auto",
  "mobile",
  "tablet",
  "desktop",
  "hq",
  "sample"
], pc = ["hls"], Ae = {
  isTus: !1,
  tusUploadUrl: null,
  relativeFolder: ""
}, Wr = /* @__PURE__ */ new Set([
  "complete",
  "failed",
  "error",
  "cancelled",
  "rejected"
]);
var V;
const B = (V = class extends pe {
  constructor() {
    super(), this.config = null, this._isOpen = !1, this._activeConnector = null, this._showUrlDialog = !1, this._showCameraDialog = !1, this._showScreenCastDialog = !1, this._similarSelectMode = !1, this._similarSelectedIds = /* @__PURE__ */ new Set(), this._similarRunIds = [], this._similarActiveIds = /* @__PURE__ */ new Set(), this._similarResults = /* @__PURE__ */ new Map(), this._previewPanelTab = "details", this._similarDismissTimer = null, this._similarAbort = null, this._previewFileId = null, this._previewDims = "—", this._fileInfoOpen = !0, this._splitPct = 58, this._showSettings = !1, this._setResize = !0, this._setMaxW = 2e3, this._setMaxH = 2e3, this._setTranscode = !1, this._setResolution = "auto", this._setResolutionOpen = !1, this._setProtocol = "hls", this._setResumable = !1, this._isResizing = !1, this._splitRafId = 0, this._previewDefaultApplied = !1, this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fsZoom = 1, this._fsPanX = 0, this._fsPanY = 0, this._fsDragging = !1, this._fsDragStartX = 0, this._fsDragStartY = 0, this._fsPanStartX = 0, this._fsPanStartY = 0, this._bodyDragOver = !1, this._isMinimized = !1, this._isPillExpanded = !1, this._metadataSchema = null, this._metadataDependencies = [], this._regionalFilters = {}, this._bulkMetadataOpen = !1, this._bulkMetadataInitialFieldKey = null, this._isReviewing = !1, this._reviewFiles = [], this._hasStoredReview = !1, this._metadataAutocomplete = null, this._taxonomyService = null, this._ultratagsService = null, this._onRegionalChange = (e) => {
      const { groupUuid: t, value: i } = e.detail;
      t && (this._regionalFilters = { ...this._regionalFilters, [t]: i });
    }, this._videoBlobUrls = /* @__PURE__ */ new Map(), this._lastEta = 0, this._engine = null, this._cachedSources = et, this._cachedSourcesConfig = void 0, this._rejectedTimers = /* @__PURE__ */ new Map(), this._closeOnCompleteTimer = null, this._apiBase = null, this._authHeaders = null, this._authResolveId = 0, this._prevStoreState = null, this._unsubStoreEvents = null, this._firedFolders = /* @__PURE__ */ new Set(), this._portalContainer = null, this._hostStyleObserver = null, this._onFileRename = (e) => {
      this._onPreviewRename(e.detail.fileId, e.detail.name);
    }, this._onPreviewMetadataBlur = (e) => {
      const t = this._previewFileId;
      if (!t) return;
      const { key: i, value: o } = e.detail;
      if (Tl(i)) {
        const a = Ll(i);
        if (!a) return;
        const l = o === "" || o == null, c = a === "position" ? { position: l ? void 0 : Number(o) } : { ref: l ? void 0 : String(o) };
        this.updateFileProduct(t, c);
        return;
      }
      const s = this._store.getState().files.get(t);
      if (!s) return;
      const n = new Map(this._store.getState().files);
      n.set(t, { ...s, meta: { ...s.meta, [i]: o } }), this._store.setState({ files: n }), this._applyDependencySetValuesPrefill(t);
    }, this._onPreviewTaxonomyEntry = (e) => {
      const t = this._previewFileId;
      t && this.updateFileTaxonode(t, e.detail.key, e.detail.entry);
    }, this._floatShownDispatched = !1, this._transformRemoteThumbnail = (e, t) => {
      var o;
      const i = (o = this.config) == null ? void 0 : o.transformRemoteThumbnail;
      if (!i) return e;
      try {
        return i(e, t) || e;
      } catch (s) {
        return console.warn("[sfx-uploader] transformRemoteThumbnail threw:", s), e;
      }
    }, this._connectorThumbnailTransform = (e) => {
      const t = this._activeConnector;
      return t ? this._transformRemoteThumbnail(e, {
        source: "connector",
        providerId: t
      }) : e;
    }, this._onFilesSelected = (e) => {
      const { files: t, hadDirectories: i } = e.detail;
      if (t.length === 0 && i) {
        this._showEmptyFolderToast();
        return;
      }
      this._processIncomingFiles(t);
    }, this._onFolderEmpty = () => {
      this._showEmptyFolderToast();
    }, this._onDropTileSourceClick = (e) => {
      e.stopPropagation(), this._handleSourceActivation(e.detail.source.id);
    }, this._onSourceClick = async (e) => {
      this._handleSourceActivation(e.detail.source);
    }, this._handleSourceActivation = async (e) => {
      var o, s;
      const t = this._mergedSources.find((n) => n.id === e);
      if (t != null && t.onActivate) {
        try {
          t.onActivate(this);
        } catch (n) {
          console.error(
            `[sfx-uploader] onActivate for custom source "${e}" threw:`,
            n
          );
        }
        return;
      }
      if (e === "device") {
        const n = this.shadowRoot.querySelector(
          "sfx-drop-zone"
        );
        n == null || n.browse();
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
      if ((((s = (o = this.config) == null ? void 0 : o.connectors) == null ? void 0 : s.providers) ?? []).includes(e)) {
        if (Yr.has(e)) {
          if (!customElements.get("sfx-search-provider-browser")) {
            const { SfxSearchProviderBrowser: a } = await import("./search-provider-browser-DuxbfF5Y.js");
            customElements.define(
              "sfx-search-provider-browser",
              a
            );
          }
        } else if (!customElements.get("sfx-provider-browser")) {
          const { SfxProviderBrowser: a } = await import("./provider-browser-D8O_Ql-a.js");
          customElements.define("sfx-provider-browser", a);
        }
        this._activeConnector = e;
      }
    }, this._onUrlSubmit = (e) => {
      var p, u, w;
      this._showUrlDialog = !1;
      const { url: t, name: i } = e.detail, o = (p = this.config) == null ? void 0 : p.callbacks, s = Dr(i), n = s.startsWith("image/");
      if (Xt(i)) return;
      const a = this._store.getState();
      if ([...a.files.values()].some(
        (m) => m.name === i && m.status !== "rejected" && m.status !== "cancelled"
      )) return;
      const c = Jt(
        { name: i, size: 0, type: s },
        a.restrictions,
        a.files
      );
      if (c) {
        const m = {
          id: Ie(),
          status: "rejected",
          file: null,
          remoteUrl: t,
          name: i,
          size: 0,
          type: s,
          previewUrl: null,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error: c,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          product: {},
          remoteInfo: null,
          ...Ae
        };
        Le(this._store, m), this._dispatchPublic(M.FILE_REJECTED, {
          file: m,
          reason: c
        }), (u = o == null ? void 0 : o.onFileRejected) == null || u.call(o, m, c);
        return;
      }
      const d = {
        id: Ie(),
        status: "idle",
        file: null,
        remoteUrl: t,
        name: i,
        size: 0,
        type: s,
        previewUrl: n ? this._transformRemoteThumbnail(t, { source: "url-import" }) : null,
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
        product: {},
        remoteInfo: null,
        ...Ae
      };
      Le(this._store, d), this._dispatchPublic(M.FILE_ADDED, { file: d }), (w = o == null ? void 0 : o.onFileAdded) == null || w.call(o, d), this._store.getState().queueConfig.autoProceed && this.upload();
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
      var i, o, s;
      const t = this._store.getState().files.get(e.detail.fileId);
      t && (this._previewFileId = t.id, this._showSettings = !1, this._previewPanelTab = "details", this._dispatchPublic(M.FILE_PREVIEW, { file: t }), (s = (o = (i = this.config) == null ? void 0 : i.callbacks) == null ? void 0 : o.onFilePreview) == null || s.call(o, t));
    }, this._onFillMetadata = () => {
      var t, i, o, s;
      const e = [...this._store.getState().files.values()].filter(
        (n) => V._MODIFIABLE_STATUSES.has(n.status)
      );
      (t = this.config) != null && t.metadataConfig && this._metadataSchema && (this._bulkMetadataInitialFieldKey = this._firstMissingRequiredFieldKey() ?? this._firstConflictedFieldKey(), this._bulkMetadataOpen = !0), this._dispatchPublic(M.FILL_METADATA, { files: e }), (s = (o = (i = this.config) == null ? void 0 : i.callbacks) == null ? void 0 : o.onFillMetadata) == null || s.call(o, e);
    }, this._onCheckSimilarEnter = () => {
      this._similarSelectedIds = /* @__PURE__ */ new Set(), this._similarSelectMode = !0;
    }, this._onCheckSimilarCancel = () => {
      this._similarSelectMode = !1, this._similarSelectedIds = /* @__PURE__ */ new Set();
    }, this._onSimilarToggle = (e) => {
      const t = e.detail.fileId, i = new Set(this._similarSelectedIds);
      if (i.has(t))
        i.delete(t);
      else {
        if (i.size >= be) return;
        i.add(t);
      }
      this._similarSelectedIds = i;
    }, this._onSimilarSelectAll = (e) => {
      this._similarSelectedIds = e.detail.selected ? new Set(
        this._similarUncheckedFiles().slice(0, be).map((t) => t.id)
      ) : /* @__PURE__ */ new Set();
    }, this._onCheckSimilarRun = () => {
      const e = this._similarImageFiles().filter(
        (t) => this._similarSelectedIds.has(t.id)
      );
      e.length && (this._runSimilarityCheck(e), this._similarSelectMode = !1, this._similarSelectedIds = /* @__PURE__ */ new Set());
    }, this._onCheckSimilarSingle = (e) => {
      const t = e.detail.file;
      t && this._checkSimilarSingleFile(t);
    }, this._onSimilarSearchCancel = () => {
      this._clearSimilarRun();
    }, this._onSimilarOpenResults = (e) => {
      this._previewFileId = e.detail.fileId, this._showSettings = !1, this._previewPanelTab = "similar";
    }, this._onRequireMetadata = () => {
      const e = this._storeCtrl.state.t;
      this._showToast(
        e("fillRequiredFieldsFirst", "Please fill required fields first."),
        "warning"
      ), this._onFillMetadata();
    }, this._onFileLocate = (e) => {
      this._locateFile(e.detail.file);
    }, this._onFileCopyCdn = (e) => {
      var o, s, n;
      const t = e.detail.file, i = e.detail.cdnUrl;
      !t || !i || (this._dispatchPublic(M.FILE_COPY_CDN, { file: t, cdnUrl: i }), (n = (s = (o = this.config) == null ? void 0 : o.callbacks) == null ? void 0 : s.onFileCopyCdn) == null || n.call(s, t, i));
    }, this._onBulkMetadataSaveBatch = (e) => {
      const { changes: t } = e.detail;
      if (!t.length) return;
      const i = new Map(this._store.getState().files);
      for (const { fileId: o, meta: s } of t) {
        const n = i.get(o);
        n && i.set(o, { ...n, meta: { ...n.meta, ...s } });
      }
      this._store.setState({ files: i });
    }, this._onBulkProductSaveBatch = (e) => {
      const { changes: t } = e.detail;
      t.length && this.updateFilesProduct(t);
    }, this._onBulkTaxonomySaveBatch = (e) => {
      const { changes: t } = e.detail;
      if (!t.length) return;
      const i = this._store.getState().files, o = new Map(i);
      for (const { fileId: s, taxonodes: n } of t) {
        const a = i.get(s);
        if (!a || !V._MODIFIABLE_STATUSES.has(a.status))
          continue;
        const l = { ...a.taxonodes ?? {} };
        for (const [c, d] of Object.entries(n))
          d == null ? delete l[c] : l[c] = d;
        o.set(s, { ...a, taxonodes: l });
      }
      this._store.setState({ files: o });
    }, this._onBulkMetadataClose = () => {
      this._bulkMetadataOpen = !1, this._bulkMetadataInitialFieldKey = null;
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
      var i, o, s;
      const e = (i = this.config) == null ? void 0 : i.callbacks;
      this._clearSimilarRun(), this._similarResults = /* @__PURE__ */ new Map(), this._previewPanelTab = "details", this._similarSelectMode = !1, this._similarSelectedIds = /* @__PURE__ */ new Set(), this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), (o = this._engine) == null || o.cancelAll();
      const t = [...this._store.getState().files.values()];
      for (const n of t)
        n.previewUrl && URL.revokeObjectURL(n.previewUrl), this._dispatchPublic(M.FILE_REMOVED, { file: n }), (s = e == null ? void 0 : e.onFileRemoved) == null || s.call(e, n);
      this._revokeVideoBlobUrls();
      for (const n of this._rejectedTimers.values()) clearTimeout(n);
      this._rejectedTimers.clear(), this._dimCache.clear(), this._previewFileId = null, this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._lastEta = 0, this._firedFolders.clear(), this._store.setState({
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
      const t = this.shadowRoot.querySelector("sfx-file-list"), i = (o = t == null ? void 0 : t.shadowRoot) == null ? void 0 : o.querySelector(
        'input[type="file"]'
      );
      i == null || i.click();
    }, this._onUploadStart = () => {
      var e;
      if (this._phase === "complete") {
        ((e = this.config) == null ? void 0 : e.clearOnComplete) !== !1 && this._onClearAll();
        return;
      }
      this._hasMetadataIssues || this.upload();
    }, this._onUploadMore = () => {
      this._onClearAll();
    }, this._onEnterReview = () => {
      const e = [...this._store.getState().files.values()].filter(
        (o) => o.status === "complete" || o.status === "failed" || o.status === "error"
      );
      if (e.length > 0) {
        this._reviewFiles = [...e].reverse(), this._isReviewing = !0;
        return;
      }
      const t = this._lastUploadId;
      if (t == null) return;
      const i = Xe.load(t);
      !i || i.length === 0 || (this._reviewFiles = [...i].reverse(), this._isReviewing = !0);
    }, this._onExitReview = () => {
      this._isReviewing = !1, this._reviewFiles = [];
    }, this._onClearReview = () => {
      const e = this._lastUploadId;
      e != null && Xe.clear(e), this._isReviewing = !1, this._reviewFiles = [], this._hasStoredReview = !1;
    }, this._onConnectorFilesSelected = (e) => {
      var o, s, n, a;
      const t = (o = this.config) == null ? void 0 : o.callbacks, i = ((s = this.config) == null ? void 0 : s.preserveFolderStructure) !== !1;
      for (const l of e.detail.files) {
        if (Xt(l.name)) continue;
        const c = i ? l.relativeFolder ?? "" : "", d = this._store.getState();
        if ([...d.files.values()].some(
          (v) => v.name === l.name && v.size === l.size && v.relativeFolder === c && v.status !== "rejected" && v.status !== "cancelled"
        )) continue;
        const u = l.thumbnail ? this._transformRemoteThumbnail(l.thumbnail, {
          source: "connector",
          providerId: l.provider
        }) : null, w = Jt(
          { name: l.name, size: l.size, type: l.mimeType },
          d.restrictions,
          d.files
        );
        if (w) {
          const v = {
            id: Ie(),
            status: "rejected",
            file: null,
            remoteUrl: null,
            name: l.name,
            size: l.size,
            type: l.mimeType,
            previewUrl: u,
            duration: null,
            progress: 0,
            speed: 0,
            bytesUploaded: 0,
            error: w,
            retryCount: 0,
            response: null,
            addedAt: Date.now(),
            meta: {},
            tags: [],
            product: {},
            remoteInfo: l,
            ...Ae,
            relativeFolder: c
          };
          Le(this._store, v), this._dispatchPublic(M.FILE_REJECTED, {
            file: v,
            reason: w
          }), (n = t == null ? void 0 : t.onFileRejected) == null || n.call(t, v, w);
          continue;
        }
        const m = {
          id: Ie(),
          status: "idle",
          file: null,
          remoteUrl: null,
          name: l.name,
          size: l.size,
          type: l.mimeType,
          previewUrl: u,
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
          product: {},
          remoteInfo: l,
          ...Ae,
          relativeFolder: c
        };
        Le(this._store, m), this._dispatchPublic(M.FILE_ADDED, { file: m }), (a = t == null ? void 0 : t.onFileAdded) == null || a.call(t, m);
      }
      this._activeConnector = null, this._store.getState().queueConfig.autoProceed && this.upload();
    }, this._onConnectorClose = () => {
      this._activeConnector = null;
    }, this._onConnectorBackdropClick = (e) => {
      e.target === e.currentTarget && (this._activeConnector = null);
    }, this._onPrimaryAction = () => {
      var t, i, o, s, n;
      this._dispatchPublic(M.COMPLETE_ACTION, {}), (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCompleteAction) == null || o.call(i), (((s = this.config) == null ? void 0 : s.mode) ?? "modal") === "modal" ? this.close() : ((n = this.config) == null ? void 0 : n.clearOnComplete) !== !1 && this._onClearAll();
    }, this._onInlineDismiss = () => {
      var e, t, i;
      (i = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onCancel) == null || i.call(t), this._dispatchPublic(M.CANCEL, {});
    }, this._onSuccessCardClose = () => {
      var e, t, i, o;
      ((e = this.config) == null ? void 0 : e.mode) === "inline" ? (this._dispatchPublic(M.COMPLETE_ACTION, {}), (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCompleteAction) == null || o.call(i), this._onClearAll()) : this._onModalDismiss();
    }, this._onModalDismiss = () => {
      var e, t, i, o;
      this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll()), (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCancel) == null || o.call(i), this._dispatchPublic(M.CANCEL, {}), this.close();
    }, this._onCancelUpload = () => {
      var e, t, i, o;
      (e = this._engine) == null || e.cancelAll(), (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCancel) == null || o.call(i), this._dispatchPublic(M.CANCEL, {}), this._onClearAll();
    }, this._onMinimize = () => {
      var e, t, i;
      this._isMinimized || (this._isMinimized = !0, this._isPillExpanded = !0, (i = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onMinimize) == null || i.call(t), this._dispatchFloatGeometryEvent(M.MINIMIZE), this.requestUpdate());
    }, this._onPillClick = () => {
      this._isPillExpanded = !this._isPillExpanded, this.requestUpdate();
    }, this._onPillExpand = () => {
      var e, t, i;
      this._isMinimized && (this._isMinimized = !1, this._isPillExpanded = !1, this._isOpen = !0, (i = (t = (e = this.config) == null ? void 0 : e.callbacks) == null ? void 0 : t.onRestore) == null || i.call(t), this._dispatchPublic(M.RESTORE, { mode: "modal" }), this.requestUpdate());
    }, this._onPillDismiss = () => {
      var e, t, i, o;
      this._isMinimized = !1, this._isPillExpanded = !1, this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll(), (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCancel) == null || o.call(i), this._dispatchPublic(M.CANCEL, {})), this.close();
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
      e.preventDefault(), this._bodyLeaveTimer && (clearTimeout(this._bodyLeaveTimer), this._bodyLeaveTimer = null), this._bodyDragOver = !1;
      const t = e.dataTransfer;
      t && Oo(t).then(({ files: i, hadDirectories: o }) => {
        if (i.length === 0) {
          o && this._showEmptyFolderToast();
          return;
        }
        this._onFilesSelected(
          new CustomEvent("files-selected", { detail: { files: i, hadDirectories: o } })
        );
      });
    }, this._onKeyDown = (e) => {
      var t, i;
      if (e.key === "Escape") {
        if (this._fullscreenPreviewUrl || this._fullscreenVideoFile) {
          this._onFsClose();
          return;
        }
        if (this._bulkMetadataOpen || this._isMinimized) return;
        const o = ((t = this.config) == null ? void 0 : t.mode) ?? "modal", s = ((i = this.config) == null ? void 0 : i.header) ?? (o === "modal" ? "close" : !0);
        (s === "close" || s === "back") && (o === "modal" && this._isOpen ? this._onModalDismiss() : o === "inline" && this._onInlineDismiss());
      }
    }, this._dimCache = /* @__PURE__ */ new Map(), this._onSplitPointerDown = (e) => {
      var i;
      e.preventDefault(), this._isResizing = !0;
      const t = (i = this.shadowRoot) == null ? void 0 : i.querySelector(
        ".preview-layout"
      );
      t == null || t.classList.add("resizing"), e.target.setPointerCapture(e.pointerId);
    }, this._onSplitPointerMove = (e) => {
      if (!this._isResizing || this._splitRafId) return;
      const t = e.clientX;
      this._splitRafId = requestAnimationFrame(() => {
        var n;
        this._splitRafId = 0;
        const i = (n = this.shadowRoot) == null ? void 0 : n.querySelector(
          ".preview-layout"
        );
        if (!i) return;
        const o = i.getBoundingClientRect(), s = (t - o.left) / o.width * 100;
        this._splitPct = Math.max(25, Math.min(75, s));
      });
    }, this._onSplitPointerUp = () => {
      var t;
      this._isResizing = !1, this._splitRafId && (cancelAnimationFrame(this._splitRafId), this._splitRafId = 0);
      const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(
        ".preview-layout"
      );
      e == null || e.classList.remove("resizing");
    }, this._onFsToggleZoom = (e) => {
      e == null || e.stopPropagation();
      const t = V._FS_ZOOM_LEVELS, i = t.indexOf(this._fsZoom), o = i === -1 ? 1 : (i + 1) % t.length;
      this._fsZoom = t[o], this._fsZoom === 1 && (this._fsPanX = 0, this._fsPanY = 0);
    }, this._onFsOverlayClick = (e) => {
      this._fsDragDidMove || this._onFsToggleZoom(e);
    }, this._fsDragDidMove = !1, this._onFsPanStart = (e) => {
      this._fsZoom <= 1 || (this._fsDragging = !0, this._fsDragDidMove = !1, this._fsDragStartX = e.clientX, this._fsDragStartY = e.clientY, this._fsPanStartX = this._fsPanX, this._fsPanStartY = this._fsPanY, e.preventDefault());
    }, this._onFsPanMove = (e) => {
      if (!this._fsDragging) return;
      const t = e.clientX - this._fsDragStartX, i = e.clientY - this._fsDragStartY;
      (Math.abs(t) > 3 || Math.abs(i) > 3) && (this._fsDragDidMove = !0), this._fsPanX = this._fsPanStartX + t, this._fsPanY = this._fsPanStartY + i, this.requestUpdate();
    }, this._onFsPanEnd = () => {
      this._fsDragging = !1, requestAnimationFrame(() => {
        this._fsDragDidMove = !1;
      });
    }, this._onFsTouchStart = (e) => {
      if (this._fsZoom <= 1 || e.touches.length !== 1) return;
      const t = e.touches[0];
      this._fsDragging = !0, this._fsDragDidMove = !1, this._fsDragStartX = t.clientX, this._fsDragStartY = t.clientY, this._fsPanStartX = this._fsPanX, this._fsPanStartY = this._fsPanY;
    }, this._onFsTouchMove = (e) => {
      if (!this._fsDragging || e.touches.length !== 1) return;
      const t = e.touches[0], i = t.clientX - this._fsDragStartX, o = t.clientY - this._fsDragStartY;
      (Math.abs(i) > 3 || Math.abs(o) > 3) && (this._fsDragDidMove = !0), this._fsPanX = this._fsPanStartX + i, this._fsPanY = this._fsPanStartY + o, this.requestUpdate(), e.preventDefault();
    }, this._onFsClose = (e) => {
      e == null || e.stopPropagation(), this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fsZoom = 1, this._fsPanX = 0, this._fsPanY = 0;
    }, this._store = Us(), this._storeCtrl = new Rs(this, this._store);
  }
  /** Resolved storage key suffix for the last-upload review feature, or
   *  `null` when the feature is disabled (`lastUploadReview` is falsy). */
  get _lastUploadId() {
    var i, o;
    const e = (i = this.config) == null ? void 0 : i.lastUploadReview;
    if (!e) return null;
    if (typeof e == "string") return e;
    const t = (o = this.config) == null ? void 0 : o.auth;
    return t ? t.airboxPuid ? `${t.container}:${t.airboxPuid}` : t.container : null;
  }
  /**
   * Default language for ultratags label fallback — first variant of the
   * regional-variants "LANGUAGES" group from the metadata schema, mirroring
   * admin's `selectMetadataRegionalVariantLanguagesGroup`. When no LANGUAGES
   * group is defined or the user hasn't set `config.language`, the field
   * component falls back to 'en'.
   */
  get _metadataDefaultLanguage() {
    var i, o;
    const e = (i = this._metadataSchema) == null ? void 0 : i.regionalVariantsGroups;
    if (!e) return;
    const t = e.find(
      (s) => s.type === gi.LANGUAGES
    );
    return ((o = t == null ? void 0 : t.variants.find(Boolean)) == null ? void 0 : o.api_value) || void 0;
  }
  /**
   * Effective per-group active variants: schema defaults merged with user
   * picks from `_regionalFilters`. The LANGUAGES-group default tries to match
   * the user's profile language (`metadataConfig.language`, falling back to
   * the UI `locale`) before the schema's first variant, so e.g. an FR profile
   * lands on the French variant instead of the schema's first language.
   * Built fresh on each access so newly-loaded schemas immediately seed defaults.
   */
  get _effectiveRegionalFilters() {
    var t, i, o, s;
    const e = ((i = (t = this.config) == null ? void 0 : t.metadataConfig) == null ? void 0 : i.language) ?? ((o = this.config) == null ? void 0 : o.locale) ?? void 0;
    return {
      ...Dl(
        (s = this._metadataSchema) == null ? void 0 : s.regionalVariantsGroups,
        e
      ),
      ...this._regionalFilters
    };
  }
  /**
   * Backward-compat single-language getter. Returns the active LANGUAGES-group
   * variant if any, falling back to `config.metadataConfig.language`.
   * Preserves call sites that still think in terms of a single "current
   * editing language" — new code should use `_effectiveRegionalFilters` instead.
   */
  get _activeLanguage() {
    var o, s, n;
    const t = (((o = this._metadataSchema) == null ? void 0 : o.regionalVariantsGroups) ?? []).find(
      (a) => a.type === gi.LANGUAGES
    ), i = this._effectiveRegionalFilters;
    return (t ? i[t.uuid] : void 0) ?? ((n = (s = this.config) == null ? void 0 : s.metadataConfig) == null ? void 0 : n.language);
  }
  /**
   * `metadataConfig` with `regionalFilters` populated from the active
   * per-group picks and `language` mirrored from the active LANGUAGES-group
   * variant (when any). Passed to `<sfx-metadata-form>` and
   * `<sfx-bulk-metadata-modal>`; field components resolve their own slot key
   * via `resolveFieldRegionalKey(field, config)`.
   */
  get _effectiveMetadataConfig() {
    var o;
    const e = (o = this.config) == null ? void 0 : o.metadataConfig;
    if (!e) return null;
    const t = {
      ...e.regionalFilters ?? {},
      ...this._effectiveRegionalFilters
    }, i = this._activeLanguage ?? e.language;
    return {
      ...e,
      regionalFilters: t,
      language: i
    };
  }
  // --- Public API ---
  /** Open the uploader (modal mode). */
  open() {
    var t, i, o, s, n, a, l, c, d;
    const e = this._isMinimized;
    if (this._isMinimized && (this._isMinimized = !1, this._isPillExpanded = !1), this._isOpen) {
      e && ((o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onRestore) == null || o.call(i), this._dispatchPublic(M.RESTORE, { mode: "modal" }), this.requestUpdate());
      return;
    }
    this._isOpen = !0, (a = (n = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : n.onOpen) == null || a.call(n), this._dispatchPublic(M.OPEN, {}), e && ((d = (c = (l = this.config) == null ? void 0 : l.callbacks) == null ? void 0 : c.onRestore) == null || d.call(c), this._dispatchPublic(M.RESTORE, { mode: "modal" })), this.requestUpdate();
  }
  /** Close the uploader (modal mode). Optionally clears all files (controlled by clearOnClose config). */
  close() {
    this._isOpen && (this._isOpen = !1, this._runCloseCleanup());
  }
  /** Current upload phase: 'empty' | 'ready' | 'uploading' | 'complete'.
   *  Use to decide whether it's safe to call dismissPanel() without cancelling uploads. */
  getStatus() {
    return this._phase;
  }
  /** Hide the panel in any state (modal, floating card, or minimized pill).
   *  If uploads are in progress they are cancelled and `sfx-cancel` fires before `sfx-close`.
   *  Check getStatus() first if you only want to dismiss after completion. */
  dismissPanel() {
    var e, t, i, o;
    this._phase === "uploading" && ((e = this._engine) == null || e.cancelAll(), (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onCancel) == null || o.call(i), this._dispatchPublic(M.CANCEL, {})), this._isMinimized = !1, this._isPillExpanded = !1, this._isOpen = !1, this._runCloseCleanup();
  }
  /** Shared cleanup for `close()` and `dismissPanel()` — clears the auto-close
   *  timer, honors `clearOnClose`, resets preview state, fires `sfx-close`. */
  _runCloseCleanup() {
    var e, t, i, o;
    this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), ((e = this.config) == null ? void 0 : e.clearOnClose) !== !1 && this._onClearAll(), this._previewFileId = null, this._bulkMetadataOpen = !1, this._bulkMetadataInitialFieldKey = null, (o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onClose) == null || o.call(i), this._dispatchPublic(M.CLOSE, {}), this.requestUpdate();
  }
  /** Start uploading all queued files. */
  upload() {
    var s, n, a, l, c, d, p, u, w, m;
    if (this._ensureEngine(), !this._engine) {
      console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");
      return;
    }
    const e = [...this._store.getState().files.values()].filter(
      (v) => v.status === "idle" || v.status === "queued"
    );
    if ((n = (s = this.config) == null ? void 0 : s.callbacks) != null && n.onBeforeUpload && this.config.callbacks.onBeforeUpload(e) === !1)
      return;
    const t = new CustomEvent(M.BEFORE_UPLOAD, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { files: e }
    });
    if (!this.dispatchEvent(t)) return;
    this._stripHiddenFieldsForUpload();
    const o = [...this._store.getState().files.values()].filter(
      (v) => v.status === "idle" || v.status === "queued"
    );
    this._dispatchPublic(M.UPLOAD_STARTED, { files: o }), (c = (l = (a = this.config) == null ? void 0 : a.callbacks) == null ? void 0 : l.onUploadStarted) == null || c.call(l, o), this._engine.uploadAll(), (d = this.config) != null && d.minimizeOnUpload && ((p = this.config) == null ? void 0 : p.mode) !== "inline" && !this._isMinimized && (this._isMinimized = !0, this._isPillExpanded = !0, (m = (w = (u = this.config) == null ? void 0 : u.callbacks) == null ? void 0 : w.onMinimize) == null || m.call(w), this._dispatchFloatGeometryEvent(M.MINIMIZE), this.requestUpdate());
  }
  /** Programmatically add files. */
  addFiles(e) {
    this._processIncomingFiles(e);
  }
  /** Resume a paused upload (spec §13.2). */
  resumeUpload(e) {
    var t;
    if (e && e.length > 0) {
      const i = this._store.getState().files, o = new Map(i);
      let s = !1;
      for (const n of e) {
        const a = i.get(n.id);
        a && (o.set(n.id, { ...a, ...n }), s = !0);
      }
      s && this._store.setState({ files: o });
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
  updateFileMeta(e, t, i) {
    const o = this._store.getState().files, s = o.get(e);
    if (!s || !V._MODIFIABLE_STATUSES.has(s.status))
      return;
    const n = new Map(o);
    n.set(e, {
      ...s,
      meta: t != null ? { ...s.meta, ...t } : s.meta,
      tags: i ?? s.tags
    }), this._store.setState({ files: n });
  }
  /** Batch-update metadata and/or tags for multiple files. */
  updateFilesMeta(e) {
    const t = this._store.getState().files, i = new Map(t);
    let o = !1;
    for (const { fileId: s, meta: n, tags: a } of e) {
      const l = t.get(s);
      !l || !V._MODIFIABLE_STATUSES.has(l.status) || (i.set(s, {
        ...l,
        meta: n != null ? { ...l.meta, ...n } : l.meta,
        tags: a ?? l.tags
      }), o = !0);
    }
    o && this._store.setState({ files: i });
  }
  /** Persist or clear the display-side taxonomy entry for one file/field. */
  updateFileTaxonode(e, t, i) {
    const o = this._store.getState().files, s = o.get(e);
    if (!s || !V._MODIFIABLE_STATUSES.has(s.status))
      return;
    const n = { ...s.taxonodes ?? {} };
    i == null ? delete n[t] : n[t] = i;
    const a = new Map(o);
    a.set(e, { ...s, taxonodes: n }), this._store.setState({ files: a });
  }
  /** Batch version of {@link updateFileTaxonode} — same entry for many files. */
  updateFilesTaxonode(e, t, i) {
    const o = this._store.getState().files, s = new Map(o);
    let n = !1;
    for (const a of e) {
      const l = o.get(a);
      if (!l || !V._MODIFIABLE_STATUSES.has(l.status))
        continue;
      const c = { ...l.taxonodes ?? {} };
      i == null ? delete c[t] : c[t] = i, s.set(a, { ...l, taxonodes: c }), n = !0;
    }
    n && this._store.setState({ files: s });
  }
  /**
   * Update product fields (ref + position) for a single file. The patch is
   * merged onto the existing `product` object. Passing `undefined` for a key
   * clears it. Only files in modifiable statuses are affected.
   */
  updateFileProduct(e, t) {
    const i = this._store.getState().files, o = i.get(e);
    if (!o || !V._MODIFIABLE_STATUSES.has(o.status))
      return;
    const s = new Map(i);
    s.set(e, {
      ...o,
      product: cr(o.product, t)
    }), this._store.setState({ files: s });
  }
  /** Batch-update product fields for multiple files. */
  updateFilesProduct(e) {
    const t = this._store.getState().files, i = new Map(t);
    let o = !1;
    for (const { fileId: s, product: n } of e) {
      const a = t.get(s);
      !a || !V._MODIFIABLE_STATUSES.has(a.status) || (i.set(s, {
        ...a,
        product: cr(a.product, n)
      }), o = !0);
    }
    o && this._store.setState({ files: i });
  }
  // --- Lifecycle ---
  willUpdate(e) {
    if (e.has("config") && this.config) {
      this._applyConfig(this.config);
      const t = this.config.uploadSettings;
      !(t !== !1 && (t == null || t.enabled !== !1)) && this._showSettings && (this._showSettings = !1);
    }
    if (e.has("_previewFileId") && this._previewFileId) {
      const t = this._previewFileId, i = this._store.getState().files.get(t);
      i ? this._getImageDimensions(i).then((o) => {
        this._previewFileId === t && (this._previewDims = o ? `${o.w} × ${o.h}` : "—");
      }) : this._previewDims = "—";
    }
    this._previewFileId ? this._previewDefaultApplied || (this._splitPct = 62.5, this._previewDefaultApplied = !0) : this._previewDefaultApplied && (this._previewDefaultApplied = !1);
  }
  updated(e) {
    this._updateFloatingPortal();
  }
  _injectFloatStyles() {
    if (document.querySelector("style[data-sfx-upload-float-styles]")) return;
    const e = document.createElement("style");
    e.setAttribute("data-sfx-upload-float-styles", ""), e.textContent = `
      [data-sfx-upload-float] .upload-float { position:fixed; bottom:calc(24px + var(--sfx-up-float-offset-y, 0px)); right:calc(24px + var(--sfx-up-float-offset-x, 0px)); z-index:10000; width:470px; border-radius:12px; background:#fff; box-shadow:0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.06); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; animation:sfxFloatIn .3s ease both; transition:bottom .25s ease, right .25s ease; }
      [data-sfx-upload-float] .float-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid #e8edf5; }
      [data-sfx-upload-float] .float-header-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-icon { width:28px; height:28px; border-radius:6px; background:#eff6ff; color:#2563eb; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-icon svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-icon.done { background:#f0fdf4; color:#22c55e; }
      [data-sfx-upload-float] .float-icon.warn { background:#fffbeb; color:#f59e0b; }
      [data-sfx-upload-float] .float-icon.error { background:#fef2f2; color:#ef4444; }
      [data-sfx-upload-float] .float-icon.info { background:var(--sfx-up-info-bg, rgba(0,144,228,0.08)); color:var(--sfx-up-info, #0090e4); }
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
      [data-sfx-upload-float] .float-item-done.info { background:var(--sfx-up-info-bg, rgba(0,144,228,0.08)); color:var(--sfx-up-info, #0090e4); }
      [data-sfx-upload-float] .float-item-done.info svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-info-note { display:flex; align-items:center; gap:8px; margin:0 14px 10px; padding:6px 10px; border-radius:8px; box-shadow:inset 0 0 0 1px var(--sfx-up-info-border, rgba(0,144,228,0.20)); background:var(--sfx-up-info-bg, rgba(0,144,228,0.04)); color:var(--sfx-up-info-text, #024a71); font-size:12px; line-height:16px; }
      [data-sfx-upload-float] .float-info-note svg { width:14px; height:14px; flex-shrink:0; color:var(--sfx-up-info, #0090e4); }
      [data-sfx-upload-float] .float-item-spinner { width:16px; height:16px; border:2px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-status { display:flex; flex-direction:row; align-items:center; gap:4px; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-wrap { position:relative; display:flex; align-items:center; flex-shrink:0; }
      [data-sfx-upload-float] .float-item-error-icon { width:16px; height:16px; color:#ef4444; flex-shrink:0; cursor:pointer; }
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
      [data-sfx-upload-float] .float-item-error-wrap:hover .float-item-tooltip { display:block; }
      [data-sfx-upload-float] .float-item-retry { width:24px; height:24px; border:none; background:none; color:#2563eb; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-retry svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-retry:hover { background:#f1f5f9; color:#1d4ed8; }
      [data-sfx-upload-float] .float-item-act { width:24px; height:24px; border:none; background:none; color:#64748b; cursor:pointer; padding:4px; flex-shrink:0; display:flex; align-items:center; justify-content:center; border-radius:4px; }
      [data-sfx-upload-float] .float-item-act svg { width:14px; height:14px; }
      [data-sfx-upload-float] .float-item-act:hover { background:#f1f5f9; color:#1e293b; }
      [data-sfx-upload-float] .float-item-act.del:hover { color:#ef4444; }
      [data-sfx-upload-float] .float-item-act.paused { color:#d97706; }
      [data-sfx-upload-float] .float-item-act.paused:hover { color:#d97706; background:#fef3c7; }
      [data-sfx-upload-float] .float-item-act.locate { color:#2563eb; }
      [data-sfx-upload-float] .float-item-act.locate:hover { color:#1d4ed8; background:#eff6ff; }
      [data-sfx-upload-float] .float-collapsed { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; width:470px; border-radius:12px; }
      [data-sfx-upload-float] .float-collapsed-left { display:flex; align-items:center; gap:8px; }
      [data-sfx-upload-float] .float-collapsed-spinner { width:18px; height:18px; border:2.5px solid #e8edf5; border-top-color:#2563eb; border-radius:50%; animation:sfxSpin .8s linear infinite; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon { width:18px; height:18px; flex-shrink:0; }
      [data-sfx-upload-float] .float-collapsed-icon svg { width:18px; height:18px; }
      [data-sfx-upload-float] .float-collapsed-icon.done { color:#22c55e; }
      [data-sfx-upload-float] .float-collapsed-icon.warn { color:#f59e0b; }
      [data-sfx-upload-float] .float-collapsed-icon.error { color:#ef4444; }
      [data-sfx-upload-float] .float-collapsed-icon.info { color:var(--sfx-up-info, #0090e4); }
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
    if (this._isMinimized && e.length > 0) {
      this._injectFloatStyles();
      const t = !this._portalContainer;
      this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-upload-float", ""), document.body.appendChild(this._portalContainer)), this._syncPortalOffsetVars(), Ue(this._renderFloatingPill(e), this._portalContainer), t && !this._floatShownDispatched && (this._floatShownDispatched = !0, requestAnimationFrame(() => {
        this._dispatchPublic(M.PANEL_SHOWN, this._measureFloatGeometry());
      }));
    } else this._portalContainer && (Ue($, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null, this._floatShownDispatched = !1);
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("keydown", this._onKeyDown), this._prevStoreState = this._store.getState(), this._unsubStoreEvents = this._store.subscribe(() => this._onStoreChange());
    const e = this._lastUploadId;
    this._hasStoredReview = e != null && Xe.exists(e), this._initI18n(typeof navigator < "u" ? navigator.language : void 0), typeof MutationObserver < "u" && (this._hostStyleObserver = new MutationObserver(() => this._syncPortalOffsetVars()), this._hostStyleObserver.observe(this, { attributes: !0, attributeFilter: ["style"] }));
  }
  async _initI18n(e) {
    try {
      const { i18n: t, isNew: i } = await _s(e || "en");
      i && t.on(
        "missingKey",
        (s, n, a, l, c, d) => {
          const p = a.match(/_(?:zero|one|two|few|many|other)$/), u = p && (d != null && d[`defaultValue${p[0]}`]) ? String(d[`defaultValue${p[0]}`]) : l;
          $s.handleMissingKey(a, u, n);
        }
      );
      const o = (s, n, a) => typeof n == "string" ? t.t(s, n, a ?? {}) : t.t(s, n ?? {});
      this._store.setState({ t: o });
    } catch {
    }
  }
  disconnectedCallback() {
    var e, t, i, o, s;
    super.disconnectedCallback(), document.removeEventListener("keydown", this._onKeyDown), (e = this._hostStyleObserver) == null || e.disconnect(), this._hostStyleObserver = null, (t = this._unsubStoreEvents) == null || t.call(this), this._unsubStoreEvents = null, this._prevStoreState = null, (i = this._portalContainer) == null || i.remove(), this._portalContainer = null, document.querySelector("[data-sfx-upload-float]") || (o = document.querySelector("style[data-sfx-upload-float-styles]")) == null || o.remove(), this._revokeVideoBlobUrls();
    for (const n of this._rejectedTimers.values()) clearTimeout(n);
    this._rejectedTimers.clear(), this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null), this._clearSimilarRun();
    for (const n of this._store.getState().files.values())
      n.previewUrl && URL.revokeObjectURL(n.previewUrl);
    (s = this._engine) == null || s.destroy(), this._engine = null;
  }
  // --- Config ---
  _applyConfig(e) {
    const t = {};
    if (e.locale && this._initI18n(e.locale), e.targetFolder && (t.targetFolder = e.targetFolder), (e.restrictions || e.forceName != null) && (t.restrictions = {
      ...this._store.getState().restrictions,
      ...e.restrictions
    }, e.forceName != null && (t.restrictions.maxNumberOfFiles = 1)), e.concurrency != null) {
      const s = this._store.getState().queueConfig;
      t.queueConfig = { ...s, concurrency: e.concurrency };
    }
    if (e.autoProceed != null) {
      const s = t.queueConfig ?? this._store.getState().queueConfig;
      t.queueConfig = { ...s, autoProceed: e.autoProceed };
    }
    Object.keys(t).length > 0 && this._store.setState(t);
    const i = e.uploadSettings;
    if (i && i.defaults) {
      const s = i.defaults;
      s.resize !== void 0 && (this._setResize = s.resize), s.maxWidth !== void 0 && (this._setMaxW = s.maxWidth), s.maxHeight !== void 0 && (this._setMaxH = s.maxHeight), s.transcode !== void 0 && (this._setTranscode = s.transcode), s.resolution !== void 0 && (this._setResolution = s.resolution), s.protocol !== void 0 && (this._setProtocol = s.protocol), s.resumable !== void 0 && (this._setResumable = s.resumable);
    }
    const o = this._lastUploadId;
    this._hasStoredReview = o != null && Xe.exists(o), this._resolveAuthAndEngine(e), (e.mode === "inline" || !e.mode) && (this._isOpen = !0);
  }
  async _resolveAuthAndEngine(e) {
    var o, s, n, a;
    const t = e.auth;
    if (t.mode === "sass-key") {
      this._apiBase = Ri(t.container), this._authHeaders = fi(t), this._ensureEngine(), (s = this._engine) == null || s.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig(),
        companionUrl: (o = e.connectors) == null ? void 0 : o.companionUrl,
        resolveUploadParams: this._buildUploadParamsResolver()
      }), this._preloadMetadataSchema(e);
      return;
    }
    const i = ++this._authResolveId;
    try {
      const l = await Ya(t);
      if (i !== this._authResolveId) return;
      this._apiBase = l.apiBase, this._authHeaders = l.headers, this._ensureEngine(), (a = this._engine) == null || a.updateConfig({
        apiBase: this._apiBase,
        authHeaders: this._authHeaders,
        tusConfig: this._normalizeTusConfig(),
        companionUrl: (n = e.connectors) == null ? void 0 : n.companionUrl,
        resolveUploadParams: this._buildUploadParamsResolver()
      }), this._preloadMetadataSchema(e);
    } catch (l) {
      if (i !== this._authResolveId) return;
      console.error("[sfx-uploader] Auth resolution failed:", l), this._showToast(this._formatAuthError(l));
    }
  }
  _formatAuthError(e) {
    var i, o;
    const t = e instanceof Error ? e.message : String(e);
    return (o = (i = this.config) == null ? void 0 : i.auth) != null && o.container ? t.includes("HTTP 404") ? `Authentication failed: container "${this.config.auth.container}" not found. Check your container name.` : t.includes("HTTP 401") || t.includes("HTTP 403") ? "Authentication failed: invalid security template ID. Check your credentials in the Auth panel." : t.includes("timed out") ? "Authentication failed: request timed out. Check your network connection." : t.includes("Failed to fetch") || t.includes("NetworkError") ? "Authentication failed: network error. Check your internet connection." : `Authentication failed: ${t}` : "Authentication failed: no container specified. Open the Auth panel and enter your credentials.";
  }
  _showToast(e, t = "error") {
    var o;
    const i = (o = this.shadowRoot) == null ? void 0 : o.querySelector(
      "sfx-toast"
    );
    i == null || i.show(e, t);
  }
  _normalizeTusConfig() {
    var a, l, c, d;
    const e = (a = this.config) == null ? void 0 : a.uploadSettings, t = !!e && e.showResumableSwitcher === !0, i = (l = this.config) == null ? void 0 : l.tusConfig;
    let o = i === !0 ? {} : i || void 0;
    if (t) {
      if (!this._setResumable) return;
      o || (o = {});
    }
    if (!o) return;
    const s = (d = (c = this.config) == null ? void 0 : c.connectors) == null ? void 0 : d.companionUrl;
    if (!s) return o;
    const n = s.replace(/\/+$/, "");
    return {
      ...o,
      endpoint: o.endpoint ?? `${n}/files`,
      jsonBase: o.jsonBase ?? `${n}/json`
    };
  }
  /**
   * Whether the file picker should allow multi-select. False when
   * `forceName` is set (single-asset slot) or when restrictions cap to 1.
   */
  get _remainingSlots() {
    const e = this._storeCtrl.state.restrictions.maxNumberOfFiles;
    if (e == null) return null;
    let t = 0;
    for (const i of this._storeCtrl.state.files.values())
      i.status !== "rejected" && i.status !== "cancelled" && t++;
    return Math.max(0, e - t);
  }
  get _allowMulti() {
    var t;
    if (((t = this.config) == null ? void 0 : t.forceName) != null) return !1;
    const e = this._remainingSlots;
    return e === null || e > 1;
  }
  /**
   * Whether the drop-zone / drop-tile should expose the "browse folder"
   * affordance and render a `webkitdirectory` input. True when:
   *   - the host hasn't disabled it via `preserveFolderStructure: false`, and
   *   - multi-select is allowed (single-asset slots can't accept a folder).
   */
  get _allowFolderUpload() {
    var e;
    return ((e = this.config) == null ? void 0 : e.preserveFolderStructure) === !1 ? !1 : this._allowMulti;
  }
  /**
   * Build the per-file upload-params resolver. Layers four sources, with
   * later sources winning on key collision:
   *   1. Upload settings panel (resize / transcode) — wired here.
   *   2. `forceName` → `opt_force_name`.
   *   3. Host-supplied `getUploadParams(file)` — always wins so hosts can
   *      override anything the panel chose.
   * Returns `undefined` when no source contributed any params for the file.
   */
  _buildUploadParamsResolver() {
    const e = this.config;
    if (!e) return;
    const { forceName: t, getUploadParams: i } = e;
    return (o) => {
      const s = {}, n = ue(o);
      if (this._setResize && (n === "image" || n === "pdf") && this._setMaxW > 0 && this._setMaxH > 0 && (s.resize = `${this._setMaxW},${this._setMaxH}`), this._setTranscode && n === "vid" && (s.postprocess = "transcode", s["video-resolution"] = this._setResolution, s.video_protocols = this._setProtocol), t != null) {
        const l = typeof t == "function" ? t() : t;
        l && (s.opt_force_name = l);
      }
      const a = i == null ? void 0 : i(o);
      return a && Object.assign(s, a), Object.keys(s).length > 0 ? s : void 0;
    };
  }
  _ensureEngine() {
    var e, t;
    !this._engine && this._apiBase && this._authHeaders && (this._engine = new Va(this._store, {
      apiBase: this._apiBase,
      authHeaders: this._authHeaders,
      tusConfig: this._normalizeTusConfig(),
      companionUrl: (t = (e = this.config) == null ? void 0 : e.connectors) == null ? void 0 : t.companionUrl,
      resolveUploadParams: this._buildUploadParamsResolver(),
      transformPreviewUrl: (i) => this._transformRemoteThumbnail(i, { source: "cdn-complete" })
    }), this._engine.start());
  }
  // --- Metadata schema preloading ---
  async _preloadMetadataSchema(e) {
    const t = e.metadataConfig;
    if (!(!t || !this._apiBase || !this._authHeaders))
      try {
        const {
          fetchMetadataSchema: i,
          fetchDependencies: o,
          createTagsAutocomplete: s,
          createTaxonomyService: n,
          createUltratagsService: a
        } = await import("./index-BJTjX6Sd.js"), [l, c] = await Promise.all([
          i(this._apiBase, this._authHeaders, t.projectUuid, t),
          o(t.projectUuid, this._authHeaders, {
            hubApiBase: t.hubApiBase,
            hubHeaders: t.hubHeaders
          }).catch((p) => (console.warn(
            "[sfx-uploader] Failed to load metadata dependencies:",
            p
          ), []))
        ]);
        this._metadataDependencies = c, this._metadataAutocomplete = s(
          this._apiBase,
          this._authHeaders
        ), this._taxonomyService = n(
          this._apiBase,
          this._authHeaders
        ), this._ultratagsService = a(
          this._apiBase,
          this._authHeaders
        ), this._metadataSchema = l.productsEnabled ? Al(l, this._storeCtrl.state.t) : l;
        const d = this._metadataSchema.fields.filter((p) => mi(p, t)).map((p) => p.key);
        this._dispatchPublic(M.METADATA_SCHEMA, {
          schema: this._metadataSchema,
          requiredFieldKeys: d
        }), this._applyDependencySetValuesPrefill();
      } catch (i) {
        console.error("[sfx-uploader] Failed to load metadata schema:", i), this._showToast("Failed to load metadata schema", "warning");
      }
  }
  /**
   * Patch `set_values` from firing dependencies onto empty fields. Idempotent
   * — only writes to empty fields.
   *
   * When `targetFileId` is supplied, only that file is re-evaluated (used by
   * the blur cascade — a blur on one file can't change what fires on a
   * different file). Without it, every modifiable file is scanned (used after
   * deps load or after a batch of new files arrives).
   */
  _applyDependencySetValuesPrefill(e) {
    if (!this._metadataSchema || this._metadataDependencies.length === 0)
      return;
    const t = this._metadataSchema, i = this._store.getState().files;
    let o = !1;
    const s = new Map(i), n = e ? (() => {
      const a = i.get(e);
      return a ? [a] : [];
    })() : i.values();
    for (const a of n) {
      if (!V._MODIFIABLE_STATUSES.has(a.status)) continue;
      const l = Ct(
        { mime: a.type ?? "", meta: a.meta },
        t,
        this._metadataDependencies
      );
      if (l.size === 0) continue;
      const c = {};
      for (const d of t.fields) {
        const p = l.get(d.ckey);
        (p == null ? void 0 : p.setValue) !== void 0 && (p.hidden || zt(a.meta[d.key]) && (c[d.key] = El(d, p.setValue)));
      }
      Object.keys(c).length !== 0 && (s.set(a.id, {
        ...a,
        meta: { ...a.meta, ...c }
      }), o = !0);
    }
    o && this._store.setState({ files: s });
  }
  /**
   * Strip values from fields hidden by a firing dependency on each queued file.
   * Called right before `upload()` hands off to the engine so the API payload
   * doesn't include data for fields the user couldn't even see.
   *
   * No-op when no deps or no schema. Only touches modifiable-status files —
   * fields on already-uploaded files are left alone.
   */
  _stripHiddenFieldsForUpload() {
    if (!this._metadataSchema || this._metadataDependencies.length === 0)
      return;
    const e = this._metadataSchema, t = this._store.getState().files;
    let i = !1;
    const o = new Map(t);
    for (const s of t.values()) {
      if (!V._MODIFIABLE_STATUSES.has(s.status)) continue;
      const n = Ct(
        { mime: s.type ?? "", meta: s.meta },
        e,
        this._metadataDependencies
      ), a = Rl(s.meta, e, n);
      a !== s.meta && (o.set(s.id, { ...s, meta: a }), i = !0);
    }
    i && this._store.setState({ files: o });
  }
  /** Handle file rename from the preview sidebar or thumbnail. */
  _onPreviewRename(e, t) {
    const i = t.trim();
    if (!i) return;
    const o = this._store.getState().files.get(e);
    if (!o || o.name === i) return;
    const s = new Map(this._store.getState().files);
    s.set(e, { ...o, name: i }), this._store.setState({ files: s });
  }
  /**
   * Build the meta-like dict the preview's `<sfx-metadata-form>` consumes,
   * merging product values under their synthetic keys so the same component
   * can render both metadata and product inputs.
   */
  _previewMeta(e) {
    var t;
    return (t = this._metadataSchema) != null && t.productsEnabled ? {
      ...e.meta,
      [He]: e.product.ref,
      [qe]: e.product.position
    } : e.meta;
  }
  /**
   * Per-file dependency resolution for the preview pane. Returns null when no
   * rules apply, so the form falls back to schema defaults.
   */
  _resolvedSchemaFor(e) {
    return !this._metadataSchema || this._metadataDependencies.length === 0 ? null : Ct(
      { mime: e.type ?? "", meta: e.meta },
      this._metadataSchema,
      this._metadataDependencies
    );
  }
  get _metadataEnforcing() {
    var t;
    const e = (t = this.config) == null ? void 0 : t.metadataConfig;
    return !e || !this._metadataSchema || e.enforceRequiredBeforeUpload === !1 ? !1 : e.enforceRequiredBeforeUpload === !0 || this._metadataSchema.forceFillingOnUpload || e.requiredFields && e.requiredFields.length > 0 ? !0 : this._metadataSchema.fields.some((i) => !!i.required);
  }
  _firstMissingRequiredFieldKey() {
    var e;
    return !this._metadataEnforcing || !this._metadataSchema ? null : Kl(
      this._store.getState().files,
      this._metadataSchema,
      (e = this.config) == null ? void 0 : e.metadataConfig,
      this._metadataDependencies
    );
  }
  get _hasUnfilledRequiredMetadata() {
    return this._firstMissingRequiredFieldKey() != null;
  }
  /**
   * Returns the field key of the first dep-conflict (allow_values / set_values
   * mismatch). The gate blocks uploads while such a value is unresolved, since
   * shipping it would store data the project's rules forbid.
   */
  _firstConflictedFieldKey() {
    return this._metadataSchema ? Gl(
      this._store.getState().files,
      this._metadataSchema,
      this._metadataDependencies
    ) : null;
  }
  get _hasMetadataConflicts() {
    return this._firstConflictedFieldKey() != null;
  }
  /**
   * Aggregate gate — true when either a required field is empty or a value
   * conflicts with a dep rule. Both ask the user to open the editor, so we
   * combine them behind one boolean and one initial-field for the button to
   * route to.
   */
  get _hasMetadataIssues() {
    return this._hasUnfilledRequiredMetadata || this._hasMetadataConflicts;
  }
  // --- Public event dispatching (spec §13.1) ---
  _dispatchPublic(e, t) {
    this.dispatchEvent(
      new CustomEvent(e, { bubbles: !0, composed: !0, detail: t })
    );
  }
  /** Read width/height of the rendered floating panel, and the current mode. */
  _measureFloatGeometry() {
    var o;
    const e = this._isPillExpanded ? "card" : "pill", t = (o = this._portalContainer) == null ? void 0 : o.querySelector(".upload-float");
    if (!t) return { width: 0, height: 0, mode: e };
    const i = t.getBoundingClientRect();
    return { width: i.width, height: i.height, mode: e };
  }
  /** Dispatch a panel-lifecycle event with geometry after the next paint. */
  _dispatchFloatGeometryEvent(e) {
    this.updateComplete.then(() => {
      requestAnimationFrame(() => {
        this._dispatchPublic(e, this._measureFloatGeometry());
      });
    });
  }
  /** Mirror `--sfx-up-float-offset-x/y` from the host onto the portal container.
   *  The portalled pill lives in `document.body` and doesn't inherit CSS variables
   *  set on `<sfx-uploader>`, so we copy them whenever they change. */
  _syncPortalOffsetVars() {
    if (!this._portalContainer) return;
    const e = getComputedStyle(this), t = e.getPropertyValue("--sfx-up-float-offset-x").trim(), i = e.getPropertyValue("--sfx-up-float-offset-y").trim();
    t ? this._portalContainer.style.setProperty("--sfx-up-float-offset-x", t) : this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"), i ? this._portalContainer.style.setProperty("--sfx-up-float-offset-y", i) : this._portalContainer.style.removeProperty("--sfx-up-float-offset-y");
  }
  /**
   * React to store changes and dispatch public events + callbacks
   * for file status transitions.
   */
  _onStoreChange() {
    var o, s, n, a, l, c, d, p, u, w;
    const e = this._store.getState(), t = this._prevStoreState;
    if (this._prevStoreState = e, !t) return;
    e.isUploading && !t.isUploading && (this._lastEta = 0, this._firedFolders.clear());
    const i = (o = this.config) == null ? void 0 : o.callbacks;
    for (const [m, v] of e.files) {
      const C = t.files.get(m);
      if (!C) {
        v.relativeFolder && this._firedFolders.delete(v.relativeFolder);
        continue;
      }
      if (C.status !== v.status)
        switch (v.status) {
          case "uploading":
            C.status === "paused" && (this._dispatchPublic(M.UPLOAD_RESUMED, { file: v }), (s = i == null ? void 0 : i.onUploadResumed) == null || s.call(i, v));
            break;
          case "complete":
            v.response && (this._dispatchPublic(M.UPLOAD_COMPLETE, {
              file: v,
              response: v.response
            }), (n = i == null ? void 0 : i.onUploadComplete) == null || n.call(i, v, v.response));
            break;
          case "error":
          case "failed": {
            const L = new Error(v.error ?? "Upload failed");
            this._dispatchPublic(M.UPLOAD_ERROR, {
              file: v,
              error: L
            }), (a = i == null ? void 0 : i.onUploadError) == null || a.call(i, v, L);
            break;
          }
          case "retrying":
            this._dispatchPublic(M.UPLOAD_RETRY, {
              file: v,
              attempt: v.retryCount
            }), (l = i == null ? void 0 : i.onUploadRetry) == null || l.call(i, v, v.retryCount);
            break;
          case "paused":
            this._dispatchPublic(M.UPLOAD_PAUSED, { file: v }), (c = i == null ? void 0 : i.onUploadPaused) == null || c.call(i, v);
            break;
        }
      v.status === "uploading" && C.progress !== v.progress && (this._dispatchPublic(M.UPLOAD_PROGRESS, {
        file: v,
        progress: v.progress,
        speed: v.speed
      }), (d = i == null ? void 0 : i.onUploadProgress) == null || d.call(i, v, v.progress, v.speed)), v.relativeFolder && C.status !== v.status && Wr.has(v.status) && !this._firedFolders.has(v.relativeFolder) && this._maybeDispatchFolderComplete(v.relativeFolder, e, i);
    }
    if (e.totalProgress !== t.totalProgress || e.totalSpeed !== t.totalSpeed) {
      const m = e.totalSpeed > 0 ? (e.totalBytes - e.totalBytesUploaded) / e.totalSpeed : e.isUploading ? this._lastEta : 0;
      e.totalSpeed > 0 && (this._lastEta = m), this._dispatchPublic(M.TOTAL_PROGRESS, {
        percentage: e.totalProgress,
        speed: e.totalSpeed,
        eta: m
      }), (p = i == null ? void 0 : i.onTotalProgress) == null || p.call(i, e.totalProgress, e.totalSpeed, m);
    }
    if (t.isUploading && !e.isUploading) {
      const m = [...e.files.values()];
      if (!m.some((C) => C.status === "cancelled")) {
        const C = m.filter((_) => _.status === "complete"), L = m.filter(
          (_) => _.status === "failed" || _.status === "error"
        );
        if (C.length === 0 && L.length === 0) return;
        const k = this._lastUploadId;
        if (k != null) {
          const _ = [...C, ...L];
          Xe.save(k, _), this._hasStoredReview = _.length > 0;
        }
        this._dispatchPublic(M.ALL_COMPLETE, { successful: C, failed: L }), (u = i == null ? void 0 : i.onAllComplete) == null || u.call(i, C, L);
        const y = (w = this.config) == null ? void 0 : w.closeOnComplete;
        if (y !== !1 && y != null) {
          const _ = typeof y == "number" ? y : 1500;
          this._closeOnCompleteTimer = setTimeout(() => {
            var b, R, E;
            this._closeOnCompleteTimer = null, this._phase === "complete" && (this._dispatchPublic(M.COMPLETE_ACTION, {}), (E = (R = (b = this.config) == null ? void 0 : b.callbacks) == null ? void 0 : R.onCompleteAction) == null || E.call(R), this.close());
          }, _);
        }
      }
    }
  }
  /**
   * Fire `sfx-folder-complete` for `folder` if every file in it has reached
   * a terminal status. No-op when the folder still has in-flight files, when
   * it has already been announced this batch, or when no file in it succeeded
   * or failed (purely cancelled/rejected — nothing meaningful to announce,
   * mirrors the `onAllComplete` guard).
   */
  _maybeDispatchFolderComplete(e, t, i) {
    var a;
    const o = [...t.files.values()].filter(
      (l) => l.relativeFolder === e
    );
    if (o.length === 0 || o.some((l) => !Wr.has(l.status))) return;
    const s = o.filter((l) => l.status === "complete"), n = o.filter(
      (l) => l.status === "failed" || l.status === "error"
    );
    s.length === 0 && n.length === 0 || (this._firedFolders.add(e), this._dispatchPublic(M.FOLDER_COMPLETE, {
      folder: e,
      successful: s,
      failed: n
    }), (a = i == null ? void 0 : i.onFolderComplete) == null || a.call(i, e, s, n));
  }
  get _mergedSources() {
    var p;
    const e = (p = this.config) == null ? void 0 : p.connectors;
    if (e === this._cachedSourcesConfig) return this._cachedSources;
    if (this._cachedSourcesConfig = e, !e)
      return this._cachedSources = et.filter((u) => u.id !== "url"), this._cachedSources;
    const t = e.providers.length > 0 ? pl(e.providers) : [], i = e.customSources ?? [], o = e.coreSources ? new Set(e.coreSources) : null, s = o ? et.filter((u) => o.has(u.id)) : et, n = e.companionUrl ? s : s.filter((u) => u.id !== "url"), a = n.filter(
      (u) => u.id === "device" || u.id === "url"
    ), l = n.filter(
      (u) => u.id !== "device" && u.id !== "url"
    ), c = /* @__PURE__ */ new Set(), d = [];
    for (const u of [
      ...a,
      ...t,
      ...l,
      ...i
    ])
      if (!c.has(u.id)) {
        if (V._RESERVED_IDS.has(u.id) && u.onActivate) {
          console.warn(
            `[sfx-uploader] Custom source id "${u.id}" conflicts with a built-in source and was skipped.`
          );
          continue;
        }
        c.add(u.id), d.push(u);
      }
    return this._cachedSources = d, this._cachedSources;
  }
  // --- Phase computation ---
  get _phase() {
    const e = this._storeCtrl.state, t = [...e.files.values()];
    if (t.length === 0) return "empty";
    if (e.isUploading) return "uploading";
    const i = /* @__PURE__ */ new Set(["complete", "rejected", "cancelled", "failed"]);
    return t.every((o) => i.has(o.status)) && t.some((o) => o.status === "complete" || o.status === "failed") ? "complete" : "ready";
  }
  // --- File handling ---
  _processIncomingFiles(e) {
    var n, a, l, c, d;
    const t = (n = this.config) == null ? void 0 : n.callbacks;
    this._isReviewing && (this._isReviewing = !1, this._reviewFiles = []);
    const i = ((a = this.config) == null ? void 0 : a.preserveFolderStructure) !== !1;
    let o = 0, s = !1;
    for (const p of e) {
      if (Xt(p.name)) continue;
      if (s) {
        o++;
        continue;
      }
      const u = i ? Ma(ja(p)) : "", w = this._store.getState();
      if ([...w.files.values()].some(
        (y) => y.name === p.name && y.size === p.size && y.relativeFolder === u && y.status !== "rejected" && y.status !== "cancelled"
      )) continue;
      const v = p.type || Dr(p.name), C = Jt(
        { name: p.name, size: p.size, type: v },
        w.restrictions,
        w.files
      );
      if (C) {
        if (dl(C)) {
          s = !0, o++;
          continue;
        }
        const y = v.startsWith("image/") && !ve(v) ? URL.createObjectURL(p) : null, _ = {
          id: Ie(),
          status: "rejected",
          file: p,
          remoteUrl: null,
          name: p.name,
          size: p.size,
          type: v,
          previewUrl: y,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error: C,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          product: {},
          remoteInfo: null,
          ...Ae,
          relativeFolder: u
        };
        Le(this._store, _), this._dispatchPublic(M.FILE_REJECTED, {
          file: _,
          reason: C
        }), (l = t == null ? void 0 : t.onFileRejected) == null || l.call(t, _, C);
        const b = (c = this.config) == null ? void 0 : c.rejectedFileAutoRemoveDelay, R = b === !1 || b === 0 || b === void 0 ? 0 : b;
        if (R > 0) {
          const E = _.id, A = setTimeout(() => {
            this._rejectedTimers.delete(E);
            const z = this._store.getState().files.get(E);
            z && z.status === "rejected" && lr(this._store, E);
          }, R);
          this._rejectedTimers.set(E, A);
        }
        continue;
      }
      let L = null;
      v.startsWith("image/") && !ve(v) && (L = URL.createObjectURL(p));
      const k = {
        id: Ie(),
        status: "idle",
        file: p,
        remoteUrl: null,
        name: p.name,
        size: p.size,
        type: v,
        previewUrl: L,
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
        product: {},
        remoteInfo: null,
        ...Ae,
        relativeFolder: u
      };
      if (Le(this._store, k), this._dispatchPublic(M.FILE_ADDED, { file: k }), (d = t == null ? void 0 : t.onFileAdded) == null || d.call(t, k), p.type.startsWith("video/")) {
        cl(p).then((_) => {
          if (!_) return;
          const b = this._store.getState(), R = b.files.get(k.id);
          if (R) {
            const E = new Map(b.files);
            E.set(k.id, { ...R, previewUrl: _ }), this._store.setState({ files: E });
          } else
            URL.revokeObjectURL(_);
        });
        const y = document.createElement("video");
        y.preload = "metadata", y.src = URL.createObjectURL(p), y.onerror = () => {
          URL.revokeObjectURL(y.src);
        }, y.onloadedmetadata = () => {
          const _ = y.duration;
          if (URL.revokeObjectURL(y.src), !isFinite(_)) return;
          const b = this._store.getState(), R = b.files.get(k.id);
          if (R) {
            const E = new Map(b.files);
            E.set(k.id, { ...R, duration: _ }), this._store.setState({ files: E });
          }
        };
      }
    }
    if (o > 0) {
      const p = this._storeCtrl.state.t, u = this._store.getState().restrictions.maxNumberOfFiles ?? 0;
      this._showToast(
        p("tooManyFilesSkipped", {
          count: o,
          max: u,
          defaultValue_one: "Skipped {{count}} file — limit is {{max}}",
          defaultValue_other: "Skipped {{count}} files — limit is {{max}}"
        }),
        "warning"
      );
    }
    this._applyDependencySetValuesPrefill(), this._store.getState().queueConfig.autoProceed && this.upload();
  }
  /** Surface the "dropped folder is empty" hint once per drop. */
  _showEmptyFolderToast() {
    const e = this._storeCtrl.state.t;
    this._showToast(
      e("emptyFolderDrop", "The dropped folder is empty — no files were added"),
      "info"
    );
  }
  _removeFile(e) {
    var s, n, a, l, c;
    const t = this._store.getState().files.get(e);
    if (!t) return;
    const i = { ...t };
    if ((this._fullscreenPreviewUrl && this._fullscreenPreviewUrl === t.previewUrl || this._fullscreenVideoFile && this._fullscreenVideoFile === t.file) && (this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null), t.previewUrl && URL.revokeObjectURL(t.previewUrl), t.file) {
      const d = this._videoBlobUrls.get(t.file);
      d && (URL.revokeObjectURL(d), this._videoBlobUrls.delete(t.file));
    }
    (t.status === "uploading" || t.status === "queued" || t.status === "retrying" || t.status === "paused") && ((s = this._engine) == null || s.cancelFile(e)), lr(this._store, e), (n = this._engine) == null || n.recompute(), this._dimCache.delete(e);
    const o = this._rejectedTimers.get(e);
    if (o && (clearTimeout(o), this._rejectedTimers.delete(e)), this._previewFileId === e) {
      const d = [...this._store.getState().files.values()];
      this._previewFileId = d.length > 0 ? d[0].id : null;
    }
    this._purgeSimilarState(e), this._dispatchPublic(M.FILE_REMOVED, { file: i }), (c = (l = (a = this.config) == null ? void 0 : a.callbacks) == null ? void 0 : l.onFileRemoved) == null || c.call(l, i);
  }
  // --- "Check similar assets" (FRA-10365) --------------------------------
  // The selection UX is fully wired here; the actual similarity request is
  // left to the engine integration — see _runSimilarityCheck below.
  /** Images eligible for the similarity check (renderable images only). */
  _similarImageFiles() {
    return [...this._store.getState().files.values()].filter(
      (e) => ue(e) === "image" && !ve(e.type)
    );
  }
  /** Eligible images not yet checked — the selectable pool. Already-checked
   *  images are "done", so selection/"Select all" skips them. */
  _similarUncheckedFiles() {
    return this._similarImageFiles().filter((e) => !this._similarResults.has(e.id));
  }
  /** Resolves auth credentials for the embedding endpoint. Returns `null` when
   *  auth hasn't been resolved yet (the caller logs + bails). */
  _similarityAuth() {
    var i, o, s;
    const e = (o = (i = this.config) == null ? void 0 : i.auth) == null ? void 0 : o.container, t = (s = this._authHeaders) == null ? void 0 : s["X-Filerobot-Key"];
    return !e || !t ? null : { container: e, sassKey: t };
  }
  /** Mark a file as no longer in flight. */
  _similarMarkInactive(e) {
    const t = new Set(this._similarActiveIds);
    t.delete(e), this._similarActiveIds = t;
  }
  /** Persist a per-file result (presence = checked → badge renders). */
  _similarSetResults(e, t) {
    const i = new Map(this._similarResults);
    i.set(e, t), this._similarResults = i;
  }
  /**
   * Single (per-tile) check: processes one image independently and
   * accumulatively — clicking several tiles spins them all, no click cancels
   * another, and there is no batch progress banner (that's only for the
   * select-all-and-Check batch).
   */
  _checkSimilarSingleFile(e) {
    var s, n, a, l;
    if (this._similarActiveIds.has(e.id) || this._similarRunIds.includes(e.id)) return;
    const t = this._similarityAuth();
    if (!t) {
      console.error("[sfx-uploader] Similarity check requires resolved auth.");
      return;
    }
    const i = Ir((n = (s = this.config) == null ? void 0 : s.similarityCheck) == null ? void 0 : n.confidence), o = (l = (a = this.config) == null ? void 0 : a.similarityCheck) == null ? void 0 : l.endpoint;
    this._similarActiveIds = new Set(this._similarActiveIds).add(e.id), Ar(e, { ...t, threshold: i, endpoint: o }).then((c) => {
      this._similarMarkInactive(e.id), this._similarSetResults(e.id, c);
    }).catch((c) => {
      console.error("[sfx-uploader] Similarity check failed for", e.name, c), this._similarMarkInactive(e.id), this._similarSetResults(e.id, []);
    });
  }
  /**
   * Runs the similarity check for the given images and drives the loading UI
   * (per-tile spinner + batch progress banner). Per-image requests run with a
   * concurrency cap of SIMILARITY_CONCURRENCY. Cancellation (via Cancel button
   * or _clearSimilarRun) aborts in-flight requests through an AbortController.
   */
  _runSimilarityCheck(e) {
    var u, w, m, v;
    if (this._clearSimilarRun(), !e.length) return;
    const t = this._similarityAuth();
    if (!t) {
      console.error("[sfx-uploader] Similarity check requires resolved auth.");
      return;
    }
    this._similarRunIds = e.map((C) => C.id);
    const i = Ir((w = (u = this.config) == null ? void 0 : u.similarityCheck) == null ? void 0 : w.confidence), o = (v = (m = this.config) == null ? void 0 : m.similarityCheck) == null ? void 0 : v.endpoint, s = new AbortController();
    this._similarAbort = s;
    const n = [...e];
    let a = 0, l = 0;
    const c = e.length, d = () => {
      if (!s.signal.aborted) {
        if (!this._previewFileId) {
          const C = e.find(
            (L) => {
              var k;
              return (((k = this._similarResults.get(L.id)) == null ? void 0 : k.length) ?? 0) > 0;
            }
          );
          C && (this._previewFileId = C.id, this._showSettings = !1, this._previewPanelTab = "similar");
        }
        this._similarDismissTimer = window.setTimeout(
          () => this._clearSimilarRun(),
          1500
        );
      }
    }, p = () => {
      if (!s.signal.aborted)
        for (; a < cc && n.length > 0; ) {
          const C = n.shift();
          a += 1, this._similarActiveIds = new Set(this._similarActiveIds).add(C.id), Ar(C, { ...t, threshold: i, endpoint: o, signal: s.signal }).then((L) => {
            s.signal.aborted || (this._similarMarkInactive(C.id), this._similarSetResults(C.id, L));
          }).catch((L) => {
            s.signal.aborted || (console.error("[sfx-uploader] Similarity check failed for", C.name, L), this._similarMarkInactive(C.id), this._similarSetResults(C.id, []));
          }).finally(() => {
            s.signal.aborted || (a -= 1, l += 1, l === c ? d() : p());
          });
        }
    };
    p();
  }
  /** Clears only the current run (timers, run/active ids, abort in-flight).
   *  Keeps the persistent checked set so finished images stay marked. Used by
   *  Cancel / Done. */
  _clearSimilarRun() {
    var e;
    (e = this._similarAbort) == null || e.abort(), this._similarAbort = null, this._similarDismissTimer != null && (clearTimeout(this._similarDismissTimer), this._similarDismissTimer = null), this._similarRunIds = [], this._similarActiveIds = /* @__PURE__ */ new Set();
  }
  /** Remove all similarity-check references to a file id (on file removal). */
  _purgeSimilarState(e) {
    if (this._similarRunIds.includes(e) && (this._similarRunIds = this._similarRunIds.filter((t) => t !== e)), this._similarActiveIds.has(e)) {
      const t = new Set(this._similarActiveIds);
      t.delete(e), this._similarActiveIds = t;
    }
    if (this._similarResults.has(e)) {
      const t = new Map(this._similarResults);
      t.delete(e), this._similarResults = t;
    }
    if (this._similarSelectedIds.has(e)) {
      const t = new Set(this._similarSelectedIds);
      t.delete(e), this._similarSelectedIds = t;
    }
  }
  /** Open a similar asset in a new window. */
  _openSimilarAsset(e) {
    e && window.open(e, "_blank", "noopener,noreferrer");
  }
  /** Display name for a similar asset: the filename extracted from its URL
   *  (decoded, query stripped), falling back to the uuid. */
  _simAssetName(e) {
    let t = "";
    if (e.url) {
      const i = e.url.split("?")[0].split("/").pop() || "";
      try {
        t = decodeURIComponent(i);
      } catch {
        t = i;
      }
    }
    return t || e.uuid;
  }
  /** Meta line for a similar asset card: just the file extension. The BE
   *  response only carries [uuid, score, url] — size/dimensions aren't known. */
  _simAssetMeta(e) {
    const t = this._simAssetName(e), i = t.lastIndexOf("."), o = i > 0 ? t.slice(i + 1).toUpperCase() : "";
    return o && o.length <= 5 ? o : "";
  }
  _locateFile(e) {
    var s, n, a;
    if (!e) return;
    const t = Ps(e, this.config ?? void 0), i = this.dispatchEvent(
      new CustomEvent(M.FILE_LOCATE, {
        bubbles: !0,
        composed: !0,
        cancelable: !0,
        detail: { file: e, url: t }
      })
    ), o = (a = (n = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : n.onFileLocate) == null ? void 0 : a.call(n, e, t);
    this._onMinimize(), !(!i || o === !1) && t && window.location.assign(t);
  }
  // --- Render ---
  render() {
    var o;
    const e = ((o = this.config) == null ? void 0 : o.mode) ?? "modal", t = [...this._storeCtrl.state.files.values()], i = this._storeCtrl.state.t;
    return e === "modal" ? f`
        ${this._isOpen && !this._isMinimized ? f`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            ` : $}
        ${this._renderFsOverlay()}
      ` : f`
      <div class="inline ${t.length === 0 ? "no-files" : ""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${i}></sfx-toast>
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
    if (!this._fullscreenPreviewUrl && !this._fullscreenVideoFile) return $;
    const e = this._storeCtrl.state.t, t = this._getFullscreenNavigableFiles(), i = t.findIndex((o) => o.id === this._previewFileId);
    return f`
      <div
        class="fs-overlay ${this._fsZoom > 1 ? "zoomed" : ""} ${this._fsDragging ? "panning" : ""}"
        @click=${this._onFsOverlayClick}
        @mousedown=${this._onFsPanStart}
        @mousemove=${this._onFsPanMove}
        @mouseup=${this._onFsPanEnd}
        @mouseleave=${this._onFsPanEnd}
        @touchstart=${this._onFsTouchStart}
        @touchmove=${this._onFsTouchMove}
        @touchend=${this._onFsPanEnd}
      >
        ${this._fullscreenVideoFile ? f`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${(o) => o.stopPropagation()}></video>` : f`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${Z(this._fsZoom > 1 ? { transform: `scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)` } : null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${(o) => o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom >= V._FS_ZOOM_LEVELS[V._FS_ZOOM_LEVELS.length - 1] ? e("resetZoom", "Reset zoom") : e("zoomIn", "Zoom in ({{zoom}}×)", { zoom: this._fsZoom })}>
          ${this._fsZoom >= V._FS_ZOOM_LEVELS[V._FS_ZOOM_LEVELS.length - 1] ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>` : f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${e("close", "Close")}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${i <= 0} @click=${(o) => {
      o.stopPropagation(), this._navigateFs(-1);
    }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${i >= t.length - 1} @click=${(o) => {
      o.stopPropagation(), this._navigateFs(1);
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
              ` : $}
          ${e.title ? f`<h2 class="inline-header-title">${e.title}</h2>` : $}
        </div>
        ${e.description ? f`<div class="inline-header-desc">${e.description}</div>` : $}
      </div>
    `;
  }
  _renderHeader() {
    var L, k, y, _, b, R;
    if (this._phase === "complete") return $;
    const e = this._storeCtrl.state.t, t = ((L = this.config) == null ? void 0 : L.mode) ?? "modal";
    if (this._phase === "uploading") {
      const z = [...this._storeCtrl.state.files.values()].filter((de) => de.status !== "rejected" && de.status !== "cancelled"), T = z.length, J = z.filter((de) => de.status === "complete").length;
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
                ${e("uploadingFiles", { count: T, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}
              </div>
              <div class="float-subtitle">
                ${e("nOfNComplete", "{{completed}} of {{total}} complete", { completed: J, total: T })}${this._lastEta > 0 ? ` · ${e("etaLeft", "~{{eta}} left", { eta: Gt(this._lastEta) })}` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    if (t === "inline" && ((k = this.config) != null && k.inlineHeader)) return $;
    const i = ((y = this.config) == null ? void 0 : y.header) ?? (t === "modal" ? "close" : !0);
    if (i === !1) return $;
    const o = t === "modal" ? this._onModalDismiss : this._onInlineDismiss, s = i === "back" ? f`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
            @click=${o}
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
          </button>` : $, n = (_ = this.config) == null ? void 0 : _.uploadSettings, a = n !== !1 && (n == null || n.enabled !== !1), l = n !== !1 && n != null && n.showResumableSwitcher === !0, c = [...this._storeCtrl.state.files.values()], d = c.some(
      (E) => ue(E) === "image" && !ve(E.type)
    ), p = c.some((E) => ue(E) === "pdf"), u = c.some((E) => ue(E) === "vid"), m = a && (d || p || u || l) ? f`<button
            class="header-btn header-btn-settings ${this._showSettings ? "on" : ""}"
            aria-label=${e("uploadSettings", "Upload settings")}
            title=${e("uploadSettings", "Upload settings")}
            @click=${() => {
      this._showSettings = !this._showSettings;
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
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </button>` : $, v = (R = (b = this._metadataSchema) == null ? void 0 : b.regionalVariantsGroups) != null && R.length ? f`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>` : $, C = i === "close" ? f`<button
            class="header-btn header-btn-close"
            aria-label="Close"
            @click=${o}
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
          </button>` : $;
    return f`
      <div class="header">
        ${s}
        ${i !== "back" ? f` <div class="header-icon">
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
            </div>` : $}
        <div class="header-title">${e("uploadFiles", "Upload Files")}</div>
        ${v}
        ${m}
        ${C}
      </div>
    `;
  }
  _getImageDimensions(e) {
    return e.previewUrl ? this._dimCache.has(e.id) ? Promise.resolve(this._dimCache.get(e.id)) : new Promise((t) => {
      const i = new Image();
      i.onload = () => {
        const o = { w: i.naturalWidth, h: i.naturalHeight };
        this._dimCache.set(e.id, o), t(o);
      }, i.onerror = () => {
        this._dimCache.set(e.id, null), t(null);
      }, i.src = e.previewUrl;
    }) : Promise.resolve(null);
  }
  _renderUploadOverlay(e) {
    var d;
    const t = this._storeCtrl.state, i = t.t, o = Math.round(t.totalProgress ?? 0), s = e.filter((p) => p.status !== "rejected" && p.status !== "cancelled"), n = s.length, a = s.filter((p) => p.status === "complete").length, l = s.filter((p) => ui(p.status)), c = [];
    return n > 1 && c.push(i("nOfNComplete", "{{completed}} of {{total}} complete", { completed: a, total: n })), this._lastEta > 0 && c.push(i("etaLeft", "~{{eta}} left", { eta: Gt(this._lastEta) })), f`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          ${i("uploadingFiles", { count: n, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}
        </div>
        ${c.length > 0 ? f`<div class="upload-overlay-subtitle">${c.join(" · ")}</div>` : $}
        ${n > 1 ? f`<div class="upload-overlay-bar">
              <div class="upload-overlay-bar-fill" ${Z({ width: `${o}%` })}></div>
            </div>` : $}
        ${l.length > 0 ? this._renderOverlayFiles(l, i) : $}
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${i("cancelUpload", "Cancel upload")}
          </button>
          ${(d = this.config) != null && d.minimizeOnUpload ? f`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${i("minimizeAndContinue", "Minimize & continue in background")}
              </button>` : $}
        </div>
      </div>
    `;
  }
  _renderOverlayFiles(e, t) {
    const i = [...e].reverse();
    return f`
      <div class="upload-overlay-files">
        ${Qt(i, (o) => o.id, (o) => {
      const s = o.status === "paused", n = o.status === "uploading", a = o.status === "queued", l = Math.round(o.progress ?? 0), c = s ? t("paused", "Paused") : a ? t("queued", "Queued") : `${l}%`;
      return f`
            <div class="upload-overlay-file">
              <div class="upload-overlay-file-info">
                <div class="upload-overlay-file-name" title=${o.name}>${o.name}</div>
                <div class="upload-overlay-file-meta">
                  <div class="upload-overlay-file-bar">
                    <div
                      class="upload-overlay-file-bar-fill ${s || a ? "muted" : ""}"
                      ${Z({ width: `${l}%` })}
                    ></div>
                  </div>
                  <div class="upload-overlay-file-pct">${c}</div>
                </div>
              </div>
              <div class="upload-overlay-file-actions">
                ${n && o.isTus ? f`
                      <button
                        class="upload-overlay-file-btn"
                        title=${t("pause", "Pause")}
                        aria-label=${t("pauseUpload", "Pause upload")}
                        @click=${() => {
        var d;
        return (d = this._engine) == null ? void 0 : d.pauseFile(o.id);
      }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    ` : $}
                ${s ? f`
                      <button
                        class="upload-overlay-file-btn paused"
                        title=${t("resume", "Resume")}
                        aria-label=${t("resumeUpload", "Resume upload")}
                        @click=${() => {
        var d;
        return (d = this._engine) == null ? void 0 : d.resumeFile(o.id);
      }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </button>
                    ` : $}
                <button
                  class="upload-overlay-file-btn del"
                  title=${t("remove", "Remove")}
                  aria-label=${t("removeFile", "Remove file")}
                  @click=${() => this._removeFile(o.id)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </button>
              </div>
            </div>
          `;
    })}
      </div>
    `;
  }
  _renderFloatingPill(e) {
    const t = this._storeCtrl.state, i = t.t, o = Math.round(t.totalProgress ?? 0), s = this._phase === "complete", n = e.filter((d) => d.status === "complete").length, a = e.filter((d) => d.status === "failed").length, l = e.filter(
      (d) => d.status === "complete" && d.alreadyExisted
    ).length, c = n > 0 && a === 0 && l >= n;
    return this._isPillExpanded === !1 ? f`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s ? a > 0 ? n > 0 ? f`<div class="float-collapsed-icon warn">
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
                    </div>` : c ? f`<div class="float-collapsed-icon info">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
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
              >${s ? a > 0 ? n > 0 ? i("partiallyUploaded", "Partially uploaded") : i("uploadFailed", "Upload failed") : c ? i("alreadyInLibrary", { count: l, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" }) : i("uploadComplete", "Upload complete") : i("uploadingFiles", { count: e.length, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}</span
            >
            ${s ? $ : f`<span class="float-collapsed-pct">${o}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            <button title=${i("openUploader", "Open uploader")} @click=${this._onPillExpand}>
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
            <button title=${i("expand", "Expand")} @click=${this._onPillClick}>
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
            <button title=${i("close", "Close")} @click=${this._onPillDismiss}>
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
              class="float-icon ${s ? a > 0 ? n > 0 ? "warn" : "error" : c ? "info" : "done" : ""}"
            >
              ${s ? a > 0 ? n > 0 ? f`<svg
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
                      </svg>` : c ? f`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
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
                ${s ? a > 0 ? n > 0 ? i("partiallyUploaded", "Partially uploaded") : i("uploadFailed", "Upload failed") : c ? i("alreadyInLibrary", { count: l, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" }) : i("uploadComplete", "Upload complete") : i("uploadingFiles", { count: e.length, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}
              </div>
              <div class="float-subtitle">
                ${s ? c ? i("alreadyInLibrarySubtitle", { count: l, defaultValue_one: "It’s ready to use — nothing new to upload", defaultValue_other: "They’re ready to use — nothing new to upload" }) : `${i("filesUploaded", { count: n, defaultValue_one: "{{count}} file uploaded", defaultValue_other: "{{count}} files uploaded" })}${a > 0 ? `, ${i("nFailed", "{{count}} failed", { count: a })}` : ""}` : `${i("nOfNComplete", "{{completed}} of {{total}} complete", { completed: n, total: e.length })}${this._lastEta > 0 ? ` · ${i("etaLeft", "~{{eta}} left", { eta: Gt(this._lastEta) })}` : ""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            <button title=${i("expand", "Expand")} @click=${this._onPillExpand}>
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
            <button title=${i("collapse", "Collapse")} @click=${this._onPillClick}>
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
            <button title=${i("close", "Close")} @click=${this._onPillDismiss}>
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
              class="float-progress-pct ${s ? a > 0 ? n > 0 ? "warn" : "error" : "done" : ""}"
              >${s ? "Done" : `${o}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${s ? a > 0 ? n > 0 ? "warn" : "error" : "done" : ""}"
              ${Z({ width: `${s ? 100 : o}%` })}
            ></div>
          </div>
        </div>
        ${s && l > 0 && !c ? f`<div class="float-info-note" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>${i("alreadyInLibrary", { count: l, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" })}</span>
            </div>` : $}
        <div class="float-items">
          ${Qt([...e].reverse(), (d) => d.id, (d) => {
      var u, w, m;
      const p = d.status === "failed" || d.status === "error";
      return f`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${Z(d.previewUrl ? { "background-image": `url(${d.previewUrl})`, "background-size": "cover", "background-position": "center" } : null)}
                >
                  ${d.previewUrl ? $ : f`<svg
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
                  <div class="float-item-name">${d.name}</div>
                  <div class="float-item-size">${Ce(d.size)}</div>
                </div>
                <div class="float-item-status">
                  ${d.status === "complete" ? f`${(u = this.config) != null && u.showLocateButton && ((m = (w = d.response) == null ? void 0 : w.file) != null && m.uuid) ? f`<button
                              class="float-item-act locate"
                              title=${i("locate", "Locate")}
                              aria-label=${i("locate", "Locate")}
                              @click=${() => this._locateFile(d)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <circle cx="12" cy="12" r="7" />
                              </svg>
                            </button>` : $}
                        ${d.alreadyExisted ? f`<div
                              class="float-item-done info"
                              title=${i("alreadyUploaded", "Already uploaded")}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                              </svg>
                            </div>` : f`<div class="float-item-done">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>`}` : p ? f` <div class="float-item-error-wrap">
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
                            >${d.error || "Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${() => {
        var v;
        this._ensureEngine(), (v = this._engine) == null || v.retryFile(d.id);
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
                        </button>` : d.status === "paused" ? f`
                        <button
                          class="float-item-act paused"
                          title=${i("resume", "Resume")}
                          aria-label=${i("resumeUpload", "Resume upload")}
                          @click=${() => {
        var v;
        return (v = this._engine) == null ? void 0 : v.resumeFile(d.id);
      }}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </button>
                        <button
                          class="float-item-act del"
                          title=${i("remove", "Remove")}
                          aria-label=${i("removeFile", "Remove file")}
                          @click=${() => this._removeFile(d.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>` : f`
                        <div class="float-item-spinner"></div>
                        ${d.status === "uploading" && d.isTus ? f`<button
                              class="float-item-act"
                              title=${i("pause", "Pause")}
                              aria-label=${i("pauseUpload", "Pause upload")}
                              @click=${() => {
        var v;
        return (v = this._engine) == null ? void 0 : v.pauseFile(d.id);
      }}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>` : $}
                        ${d.status === "uploading" || d.status === "queued" || d.status === "retrying" ? f`<button
                              class="float-item-act del"
                              title=${i("remove", "Remove")}
                              aria-label=${i("removeFile", "Remove file")}
                              @click=${() => this._removeFile(d.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>` : $}
                      `}
                </div>
              </div>
            `;
    })}
        </div>
      </div>
    `;
  }
  _renderPreviewLayout(e) {
    var v, C, L, k, y, _, b;
    if (e.length === 0) return $;
    const t = this._storeCtrl.state.t, i = [...e].reverse(), o = i.find((R) => R.id === this._previewFileId) ?? i[0], s = ((v = o.name.split(".").pop()) == null ? void 0 : v.toUpperCase()) || "";
    new Date(o.addedAt).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    ), this._store.getState().targetFolder;
    const n = i.reduce((R, E) => R + (E.size || 0), 0), a = !!((L = (C = this.config) == null ? void 0 : C.similarityCheck) != null && L.enabled), l = i.filter(
      (R) => ue(R) === "image" && !ve(R.type) && !this._similarResults.has(R.id)
    ).map((R) => R.id), c = Math.min(
      l.length,
      be
    ), d = c > 0 && this._similarSelectedIds.size >= c, p = this._similarSelectedIds.size >= be, u = this._similarResults.get(o.id), w = u !== void 0, m = w ? this._previewPanelTab : "details";
    return f`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Z({ flex: String(this._splitPct) })}>
          ${((k = this.config) == null ? void 0 : k.mode) === "inline" && ((y = this.config) != null && y.inlineHeader) ? this._renderInlineHeader(this.config.inlineHeader) : $}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length === 1 ? "asset" : "assets"} ·
              ${Ce(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${jr(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .showCheckSimilar=${a}
            .selectMode=${a}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${d}
            .selectionFull=${p}
            .maxSelection=${be}
            .previewOpen=${!0}
            .searchRunIds=${this._similarRunIds}
            .searchActiveIds=${this._similarActiveIds}
            .searchResults=${this._similarResults}
            .directory=${this._allowFolderUpload}
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
        <div class="preview-panel" ${Z({ flex: String(100 - this._splitPct) })}>
          ${this._showSettings ? this._renderSettingsPanel() : f`
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${() => {
      this._previewFileId = null;
    }}
              aria-label=${t("backToFileList", "Back to file list")}
              title=${t("back", "Back")}
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
            <span class="preview-header-name" title=${o.name}
              >${o.name}</span
            >
            <div class="preview-header-actions">
              ${o.previewUrl || o.type.startsWith("video/") && o.file ? f`
                    <button
                      @click=${() => {
      this._fullscreenPreviewUrl = o.previewUrl, this._fullscreenVideoFile = o.type.startsWith("video/") && o.file ? o.file : null, this._fsZoom = 1, requestAnimationFrame(() => this.requestUpdate());
    }}
                      title=${t("fullscreen", "Fullscreen")}
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
                  ` : $}
              <button
                @click=${() => {
      this._previewFileId = null;
    }}
                title=${t("close", "Close")}
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
          ${w ? f`
                <div class="preview-tabs" role="tablist">
                  <button
                    class="preview-tab ${m === "details" ? "active" : ""}"
                    role="tab"
                    aria-selected=${m === "details"}
                    @click=${() => {
      this._previewPanelTab = "details";
    }}
                  >
                    ${t("details", "Details")}
                  </button>
                  <button
                    class="preview-tab ${m === "similar" ? "active" : ""}"
                    role="tab"
                    aria-selected=${m === "similar"}
                    @click=${() => {
      this._previewPanelTab = "similar";
    }}
                  >
                    <span>${t("similarTab", "Similar")}</span>${u && u.length > 0 ? f`<span class="preview-tab-count">${u.length}</span>` : $}
                  </button>
                </div>
              ` : $}
          ${m === "similar" ? this._renderSimilarPanel(o, u ?? []) : f`
          ${o.type.startsWith("video/") && o.file ? f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(o.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${i.indexOf(o) === 0}
                    @click=${() => this._navigatePreview(i, -1)}
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
                    ?disabled=${i.indexOf(o) === i.length - 1}
                    @click=${() => this._navigatePreview(i, 1)}
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
              ` : o.previewUrl ? f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${o.previewUrl}
                      alt=${o.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${i.indexOf(o) === 0}
                    @click=${() => this._navigatePreview(i, -1)}
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
                    ?disabled=${i.indexOf(o) === i.length - 1}
                    @click=${() => this._navigatePreview(i, 1)}
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
                  <div class="preview-doc-wrap ${ue(o)}">
                    <img
                      class="preview-doc-type-img"
                      src=${zo(s)}
                      alt="${s ? `${s} file` : "File"}"
                      @error=${(R) => {
      const E = R.target, A = Io();
      !E.dataset.fallback && E.src !== A && (E.dataset.fallback = "1", E.src = A);
    }}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${i.indexOf(o) === 0}
                    @click=${() => this._navigatePreview(i, -1)}
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
                    ?disabled=${i.indexOf(o) === i.length - 1}
                    @click=${() => this._navigatePreview(i, 1)}
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
          ${this._metadataSchema && ((_ = this.config) != null && _.metadataConfig) ? f`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${s}${o.size ? ` · ${Ce(o.size)}` : ""}${this._previewDims !== "—" ? ` · ${this._previewDims}` : ""}
                </div>
              </div>` : $}
          ${this._metadataSchema && ((b = this.config) != null && b.metadataConfig) ? f`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                  @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${this._previewMeta(o)}
                    .config=${this._effectiveMetadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                    .taxonomyService=${this._taxonomyService}
                    .ultratags=${this._ultratagsService}
                    .defaultLanguage=${this._metadataDefaultLanguage}
                    .taxonodes=${o.taxonodes ?? null}
                    .resolvedSchema=${this._resolvedSchemaFor(o)}
                    .dependencies=${this._metadataDependencies}
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
                    <span>${t("fileInfo", "File info")}</span>
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
                      <div class="preview-file-info-key">${t("fileName", "File name")}</div>
                      <div class="preview-file-info-val">
                        ${o.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${t("type", "Type")}</div>
                      <div class="preview-file-info-val">${s}</div>
                    </div>
                    ${o.size ? f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("size", "Size")}</div>
                            <div class="preview-file-info-val">
                              ${Ce(o.size)}
                            </div>
                          </div>
                        ` : $}
                    ${this._previewDims !== "—" ? f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("dimensions", "Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        ` : $}
                  </div>
                </div>
              `}
              `}
          `}
        </div>
      </div>
    `;
  }
  /** "Similar" tab body of the preview side-panel: the similar-asset cards for
   *  the previewed image, plus a discard action. Empty state when none. */
  _renderSimilarPanel(e, t) {
    const i = this._storeCtrl.state.t;
    return t.length === 0 ? f`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound", "No similar assets found")}</b>
          <span>${i("noSimilarHint", "This image looks unique in your library.")}</span>
        </div>
      ` : f`
      <div class="psim-body">
        ${t.map((o) => {
      const s = Math.round(o.score * 100);
      return f`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score >= 0.85 ? "high" : ""}">${s}%</span>
                <button
                  class="psim-open"
                  @click=${() => this._openSimilarAsset(o.url)}
                  title=${i("openInNewWindow", "Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </button>
                ${o.url ? f`<img src=${o.url} alt="" />` : $}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(o)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(o)}</div>
              </div>
            </div>
          `;
    })}
      </div>
    `;
  }
  /** Global "Upload settings" view shown in the preview side-panel when the
   *  header gear is active. Captures image/video/resumable upload preferences
   *  and forwards them to the upload flow (image resize → `&resize=w,h`,
   *  transcode → `&postprocess=transcode&video-resolution=…&video_protocols=…`,
   *  resumable → toggles the tus path on/off). See mockups/FRA-10365-dev-handoff.md. */
  _renderSettingsPanel() {
    var p;
    const e = this._storeCtrl.state.t, t = [...this._storeCtrl.state.files.values()], i = t.some(
      (u) => ue(u) === "image" && !ve(u.type)
    ), o = t.some((u) => ue(u) === "pdf"), s = t.some((u) => ue(u) === "vid"), n = (p = this.config) == null ? void 0 : p.uploadSettings, a = !!n && n.showResumableSwitcher === !0, l = (u) => {
      switch (u) {
        case "auto":
          return e("resolutionAuto", "Auto");
        case "mobile":
          return e("resolutionMobile", "Mobile");
        case "tablet":
          return e("resolutionTablet", "Tablet");
        case "desktop":
          return e("resolutionDesktop", "Desktop");
        case "hq":
          return e("resolutionHq", "HQ");
        case "sample":
          return e("resolutionSample", "Sample");
      }
    }, c = (u) => {
      switch (u) {
        case "hls":
          return e("protocolHls", "HLS");
      }
    }, d = (u) => (w) => {
      const m = parseInt(w.target.value, 10);
      u(Number.isFinite(m) ? m : 0);
    };
    return f`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name"
          >${e("uploadSettings", "Upload settings")}</span
        >
        <div class="preview-header-actions">
          <button
            @click=${() => {
      this._showSettings = !1;
    }}
            title=${e("close", "Close")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="settings-body">
        ${i || o ? f`
              <!-- Image settings (only when the queue contains an image or PDF) -->
              <div class="sgroup-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
                ${e("imageSettings", "Image settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("resizeImages", "Resize Images")}</span>
                <span class="info-i" data-tip=${e("resizeImagesInfo", "Scale down large images to the maximum dimensions below before uploading.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResize ? "on" : ""}"
                  role="switch"
                  aria-checked=${this._setResize}
                  aria-label=${e("resizeImages", "Resize Images")}
                  @click=${() => {
      this._setResize = !this._setResize;
    }}
                ></button>
              </div>
              <div class="sfields ${this._setResize ? "" : "dep-off"}">
                <div class="sfield">
                  <label>${e("maxWidth", "Max Width")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxW)}
                      @input=${d((u) => this._setMaxW = u)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
                <div class="sfield">
                  <label>${e("maxHeight", "Max Height")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxH)}
                      @input=${d((u) => this._setMaxH = u)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            ` : $}

        ${s ? f`
              <!-- Video settings (only when the queue contains a video) -->
              <div class="sgroup-title sgroup-title-spaced">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                ${e("videoSettings", "Video settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("transcodeVideo", "Transcode video")}</span>
                <span class="info-i" data-tip=${e("transcodeVideoInfo", "Re-encode videos into adaptive streaming formats for smoother playback.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setTranscode ? "on" : ""}"
                  role="switch"
                  aria-checked=${this._setTranscode}
                  aria-label=${e("transcodeVideo", "Transcode video")}
                  @click=${() => {
      this._setTranscode = !this._setTranscode, this._setTranscode || (this._setResolutionOpen = !1);
    }}
                ></button>
              </div>
              <div
                class="sfield sfield-block ${this._setTranscode ? "" : "dep-off"} ${this._setResolutionOpen ? "open" : ""}"
              >
                <label>${e("resolution", "Resolution")}</label>
                <div
                  class="ssel"
                  @click=${() => {
      this._setResolutionOpen = !this._setResolutionOpen;
    }}
                >
                  <span>${l(this._setResolution)}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                ${this._setResolutionOpen && this._setTranscode ? f`
                      <div class="smenu">
                        ${dc.map(
      (u) => f`
                            <div
                              class="sopt ${u === this._setResolution ? "cur" : ""}"
                              @click=${() => {
        this._setResolution = u, this._setResolutionOpen = !1;
      }}
                            >
                              ${l(u)}
                              ${u === this._setResolution ? f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : $}
                            </div>
                          `
    )}
                      </div>
                    ` : $}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode ? "" : "dep-off"}">
                <label>${e("protocols", "Protocols")}</label>
                ${pc.map(
      (u) => f`
                    <div
                      class="sradio-row"
                      @click=${() => {
        this._setProtocol = u;
      }}
                    >
                      <span class="sradio ${this._setProtocol === u ? "on" : ""}"></span>
                      <span class="sradio-lbl">${c(u)}</span>
                    </div>
                  `
    )}
              </div>
            ` : $}

        ${a ? f`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${e("resumeUploads", "Resume uploads")}</span>
                <span class="info-i" data-tip=${e("resumeUploadsInfo", "Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="sbeta" data-tip=${e("betaInfo", "Beta functionality — you may experience performance issues in some cases")}>${e("beta", "Beta")}</span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable ? "on" : ""}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${e("resumeUploads", "Resume uploads")}
                  @click=${() => {
      var u;
      this._setResumable = !this._setResumable, (u = this._engine) == null || u.updateConfig({
        tusConfig: this._normalizeTusConfig()
      });
    }}
                ></button>
              </div>
            ` : $}
      </div>
    `;
  }
  _navigatePreview(e, t) {
    var s;
    const o = e.findIndex((n) => n.id === this._previewFileId) + t;
    if (o >= 0 && o < e.length) {
      const n = (s = this.shadowRoot) == null ? void 0 : s.querySelector(
        ".preview-image[controls]"
      );
      n && (n.pause(), n.removeAttribute("src"), n.load()), this._previewFileId = e[o].id;
    }
  }
  _renderBody() {
    var w, m, v, C, L, k, y, _, b, R, E, A, z;
    const e = this._storeCtrl.state, t = e.t, i = [...e.files.values()], o = i.filter(
      (T) => T.status === "idle" || T.status === "queued" || T.status === "error" || T.status === "failed"
    ), s = this._phase, n = jr(e.restrictions), a = i.length > 0, l = !!((m = (w = this.config) == null ? void 0 : w.similarityCheck) != null && m.enabled), c = i.filter(
      (T) => ue(T) === "image" && !ve(T.type) && !this._similarResults.has(T.id)
    ).map((T) => T.id), d = Math.min(
      c.length,
      be
    ), p = d > 0 && this._similarSelectedIds.size >= d, u = this._similarSelectedIds.size >= be;
    return f`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
        @source-click=${this._onSourceClick}
        @file-remove=${this._onFileRemove}
        @file-preview=${this._onFilePreview}
        @file-locate=${this._onFileLocate}
        @file-copy-cdn=${this._onFileCopyCdn}
        @file-retry=${this._onFileRetry}
        @file-pause=${this._onFilePause}
        @file-resume=${this._onFileResume}
        @file-rename=${this._onFileRename}
        @fill-metadata=${this._onFillMetadata}
        @require-metadata=${this._onRequireMetadata}
        @retry-all=${this._onRetryAll}
        @clear-all=${this._onClearAll}
        @add-more=${this._onAddMore}
        @check-similar-enter=${this._onCheckSimilarEnter}
        @check-similar-cancel=${this._onCheckSimilarCancel}
        @check-similar-run=${this._onCheckSimilarRun}
        @check-similar-single=${this._onCheckSimilarSingle}
        @similar-toggle=${this._onSimilarToggle}
        @similar-select-all=${this._onSimilarSelectAll}
        @check-similar-search-cancel=${this._onSimilarSearchCancel}
        @similar-open-results=${this._onSimilarOpenResults}
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
          class="body ${a ? "has-files" : ""} ${this._bodyDragOver ? "body-drag-over" : ""} ${this._previewFileId || this._showSettings ? "has-preview" : ""}"
          @dragenter=${a ? this._onBodyDragEnter : $}
          @dragover=${a ? this._onBodyDragOver : $}
          @dragleave=${a ? this._onBodyDragLeave : $}
          @drop=${a ? this._onBodyDrop : $}
        >
          ${((v = this.config) == null ? void 0 : v.mode) === "inline" && ((C = this.config) != null && C.inlineHeader) && !this._previewFileId && s !== "uploading" && s !== "complete" && !this._isReviewing ? this._renderInlineHeader(this.config.inlineHeader) : $}
          ${this._isReviewing ? f`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((L = this.config) == null ? void 0 : L.showLocateButton) ?? !1}
                  .showCopyCdnButton=${((k = this.config) == null ? void 0 : k.showCopyCdnButton) ?? !1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              ` : s === "complete" ? f`
                <sfx-success-card
                  .t=${t}
                  .primaryLabel=${t("done", "Done")}
                  .fileCount=${i.filter((T) => T.status === "complete").length}
                  .totalSize=${i.filter((T) => T.status === "complete" && !T.alreadyExisted).reduce((T, J) => T + (J.size || 0), 0)}
                  .thumbnails=${i.filter((T) => T.status === "complete" && T.previewUrl).reverse().map((T) => T.previewUrl)}
                  .failedFiles=${i.filter((T) => T.status === "failed").map((T) => ({
      id: T.id,
      name: T.name,
      error: T.error || "Upload failed"
    }))}
                  .alreadyExistedCount=${i.filter(
      (T) => T.status === "complete" && T.alreadyExisted
    ).length}
                  .showMinimize=${!!((y = this.config) != null && y.minimizeOnUpload) && ((_ = this.config) == null ? void 0 : _.mode) !== "inline"}
                  @close-uploader=${this._onSuccessCardClose}
                  @minimize-uploader=${this._onMinimize}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              ` : s === "uploading" ? this._renderUploadOverlay(i) : f`
                ${a ? $ : f`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((b = this.config) == null ? void 0 : b.sourcesLayout) ?? "pills"}
                        .mode=${((R = this.config) == null ? void 0 : R.mode) ?? "modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview ? f`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${t("viewLastUploadBatch", "View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${t("viewLastUpload", "View last upload")}
                          </button>` : $}`}
                ${a ? this._previewFileId || this._showSettings ? this._renderPreviewLayout(i) : f`
                        <div class="asset-count">
                          ${i.length}
                          ${i.length === 1 ? "file" : "files"} ·
                          ${Ce(
      i.reduce((T, J) => T + (J.size || 0), 0)
    )}
                        </div>
                        <sfx-file-list
                          .t=${t}
                          .files=${[...i].reverse()}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${n}
                          .multi=${this._allowMulti}
                          .showCheckSimilar=${l}
                          .selectMode=${l}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${p}
                          .selectionFull=${u}
                          .maxSelection=${be}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      ` : $}
              `}
        </div>

        ${a && s !== "complete" && s !== "uploading" ? f`
              <sfx-actions-bar
                .t=${t}
                .uploadState=${"idle"}
                .fileCount=${o.length}
                .totalSize=${o.reduce((T, J) => T + (J.size || 0), 0)}
                .failedCount=${i.filter(
      (T) => T.status === "failed" || T.status === "error"
    ).length}
                .completedCount=${i.filter((T) => T.status === "complete").length}
                .uploadProgress=${e.totalProgress ?? 0}
                .showFillMetadata=${!!(((E = this.config) == null ? void 0 : E.showFillMetadata) ?? ((A = this.config) == null ? void 0 : A.metadataConfig))}
                .requireMetadataFirst=${this._hasMetadataIssues}
                .showCheckSimilar=${!1}
                .selectMode=${l && this._similarSelectedIds.size > 0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${d}
                .allSelected=${p}
              ></sfx-actions-bar>
            ` : $}
        ${this._showUrlDialog ? f`<sfx-url-dialog .t=${t}></sfx-url-dialog>` : $}
        ${this._showCameraDialog ? f`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>` : $}
        ${this._showScreenCastDialog ? f`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>` : $}
        ${this._activeConnector && ((z = this.config) != null && z.connectors) ? f`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${Yr.has(this._activeConnector) ? f`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      ` : f`
                        <sfx-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            ` : $}
        ${this._bulkMetadataOpen && this._metadataSchema ? f`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(
      (T) => V._MODIFIABLE_STATUSES.has(T.status)
    )}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            ` : $}
      </div>
    `;
  }
  /** Files eligible for fullscreen prev/next: images with a previewUrl or
   *  playable videos. Returned newest-first so navigation matches the visual
   *  order of the file grid. Single source of truth — both the overlay's
   *  disabled-arrow state and the actual navigation step read from this. */
  _getFullscreenNavigableFiles() {
    return [...this._store.getState().files.values()].filter((e) => e.previewUrl || e.type.startsWith("video/") && e.file).reverse();
  }
  _navigateFs(e) {
    const t = this._getFullscreenNavigableFiles(), i = t.findIndex((s) => s.id === this._previewFileId);
    if (i === -1) return;
    const o = i + e;
    if (o >= 0 && o < t.length) {
      const s = t[o];
      this._fullscreenPreviewUrl = s.previewUrl, this._fullscreenVideoFile = s.type.startsWith("video/") && s.file ? s.file : null, this._previewFileId = s.id, this._fsZoom = 1, this._fsPanX = 0, this._fsPanY = 0;
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
}, V.styles = ne`
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
      --sfx-up-modal-max-width: 1100px;
      --sfx-up-bulk-modal-width: 980px;
      --sfx-up-bulk-modal-height: 82vh;
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
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 24px;
      overflow: hidden;
      animation: fadeIn 0.2s ease;
    }

    .modal-card {
      background: var(--sfx-up-bg, #fff);
      border-radius: 16px;
      box-shadow:
        0 28px 80px rgba(0, 0, 0, 0.2),
        0 4px 16px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: var(--sfx-up-modal-max-width, 1100px);
      height: var(--sfx-up-max-height, 88vh);
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
      /* Lift the header (and its overflowing children, e.g. the regional
         settings dropdown) above the body. The body is position:relative,
         so without this its subtree — including the "View last upload" pill
         — would paint on top of the dropdown regardless of the dropdown's
         own z-index. */
      position: relative;
      z-index: 2;
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
      /* Transparent by default — the filled background appears only on hover. */
      background: none;
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
      /* 8px gap from the settings gear to its left (when present). The button
         group is right-aligned by .header-title's flex:1, not by an auto
         margin — so this fixed margin only adds the gap, keeping the close
         button flush to the right padding edge. */
      margin-left: 8px;
    }

    /* Regional-settings sits to the left of the gear; same 8px gap rule. */
    .header-regional {
      margin-right: 8px;
    }

    /* Settings gear sits just left of the close button (title's flex:1 pushes
       the button group to the right). No right margin so that in inline mode —
       where there is no close button — the gear lines up with the right padding
       edge, matching the preview panel's close button below it. The gap to the
       close button (when present) comes from .header-btn-close's margin-left. */
    .header-btn-settings {
      margin-right: 0;
    }
    /* Active (settings open): only the icon turns brand-blue — no persistent
       background fill. The fill still appears on hover, like every other icon. */
    .header-btn-settings.on {
      background: none;
      color: var(--sfx-up-primary, #2563eb);
    }
    .header-btn-settings.on:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
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
      /* Establish a stacking context so descendants like the
         .last-upload-pill (z-index: 10) stay contained beneath the
         header (z-index: 2) instead of leaking into the modal-level
         stack and painting over the regional-settings dropdown. */
      position: relative;
      z-index: 0;
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
      top: 16px;
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

    /* --- Inline header --- */
    .inline-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: var(--sfx-inline-pad) var(--sfx-inline-pad) 16px;
    }

    /* Align drop-zone horizontally with inline-header content and
       ensure consistent 16px top spacing. */
    .inline sfx-drop-zone {
      padding: 24px;
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

    /* When the preview sidebar is open, let the layout use the full
       browser width so the panel sits flush against the right edge. */
    .inline .content:has(.has-preview) {
      max-width: none;
    }

    .inline.no-files .content {
      flex: 1;
      min-height: 0;
    }

    /* Inline: body fits within the remaining space after the header;
       padding: 0 in both states so the header never jumps;
       children use --sfx-inline-pad for horizontal spacing. */
    .inline .body {
      flex: 1;
      overflow: hidden;
      padding: 0;
      min-height: 0;
    }
    .inline .body.has-files {
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
    /* Modal grid view: bigger tiles (≈4 per row at the 1100px modal width) so
       the Details / Check similar buttons fit with their text labels instead of
       collapsing to icons (a tile must stay wider than the 208px icon cutoff in
       file-item.ts). Scoped to the non-preview modal grid only — inline mode and
       the preview split layout keep their own grid-min, and the file-list
       ≤768/≤440 column breakpoints override grid-template-columns entirely, so
       they're unaffected. */
    .modal-card .body > sfx-file-list {
      --sfx-up-grid-min: 220px;
    }

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
      /* Sit flush against the panel's left edge so the header's
         border-bottom continues from this line without a gap. */
      right: 0;
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
      /* Symmetric vertical padding so the row is evenly centered; right
         padding matches the main header's (24px) so the panel's close
         button lines up vertically with the header's close-all button. */
      padding: 12px 24px 12px 16px;
      flex-shrink: 0;
      box-sizing: border-box;
      min-height: 54px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }
    /* Settings panel only: right padding 16px so the close ✕ lines up with the
       toggles below it (settings-body padding is 16px). The file-preview header
       keeps 24px. */
    .preview-panel-header.settings-header {
      padding-right: 16px;
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
      /* 8px to match the header's gear↔close gap, so the second icon
         (fullscreen) lines up vertically with the header's gear. */
      gap: 8px;
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

    /* Mirror the main header's close-all button (.header-btn) so the panel's
       close button matches it exactly and aligns on the same vertical line. */
    .preview-panel-header button {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      /* Transparent by default — filled background appears only on hover. */
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
      background: var(--sfx-up-border, #e2e8f0);
      color: var(--sfx-up-text, #1e293b);
    }

    .preview-panel-header button svg {
      width: 16px;
      height: 16px;
    }

    /* --- Details / Similar tab switcher (preview side-panel) --- */
    .preview-tabs {
      display: flex;
      align-items: center;
      gap: 4px;
      /* Symmetric vertical padding so the row is evenly centered. */
      padding: 8px 16px;
      flex-shrink: 0;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
    }
    .preview-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 30px;
      padding: 0 12px;
      border: none;
      background: none;
      border-bottom: 2px solid transparent;
      color: var(--sfx-up-text-muted, #5b6e82);
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.15s, border-color 0.15s;
    }
    .preview-tab:hover {
      color: var(--sfx-up-text, #37414b);
    }
    .preview-tab.active {
      color: var(--sfx-up-primary, #2563eb);
      border-bottom-color: var(--sfx-up-primary, #2563eb);
    }
    .preview-tab-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* Equal width + height so single-digit counts render as a perfect
         circle. Padding stays out of the way; for ≥4-digit counts the
         min-width grows but the radius keeps the ends rounded. */
      box-sizing: border-box;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 999px;
      /* Filled chip: brand-blue background with white text. Stays the same
         on the active tab — only the underline and tab text colour change. */
      background: var(--sfx-up-primary, #2563eb);
      color: #fff;
      font-size: 10.5px;
      font-weight: 600;
      line-height: 1;
    }

    /* --- Similar-assets panel body --- */
    /* Always exactly 2 cards per row, regardless of how many similar there are
       or how wide the panel is dragged — consistent, never a lone ballooned
       card or a single column. minmax(0, 1fr) lets columns shrink cleanly. */
    .psim-body {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 4px 16px 16px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: max-content;
      gap: 12px;
      align-content: start;
    }
    /* Identical to .tile in file-item.ts. */
    .psim-card {
      border-radius: 10px;
      background: var(--sfx-up-bg, #fff);
      border: 1px solid #dde3ed;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: box-shadow 0.15s;
    }
    .psim-card:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
    }
    /* Identical to .preview in file-item.ts (checker bg + 16/10). */
    .psim-iw {
      position: relative;
      aspect-ratio: 16 / 10;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 10px 10px 0 0;
      background-color: var(--sfx-up-checker-bg, #fff);
      background-image:
        linear-gradient(45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(-45deg, var(--sfx-up-checker-tile, #f0f0f0) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%),
        linear-gradient(-45deg, transparent 75%, var(--sfx-up-checker-tile, #f0f0f0) 75%);
      background-size: 16px 16px;
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .psim-iw img {
      position: absolute;
      inset: 0;
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    .psim-score {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 2;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .psim-score.high {
      color: var(--sfx-up-success, #15803d);
    }
    .psim-open {
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 2;
      width: 26px;
      height: 26px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.95);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
      color: var(--sfx-up-primary, #2563eb);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      /* Revealed on card hover (keyboard focus also reveals it). */
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
    .psim-card:hover .psim-open,
    .psim-open:focus-visible {
      opacity: 1;
      transform: scale(1);
    }
    .psim-open svg {
      width: 13px;
      height: 13px;
    }
    /* Identical to .info in file-item.ts. */
    .psim-foot {
      padding: 8px 12px;
      min-width: 0;
      overflow: hidden;
    }
    .psim-foot-name {
      font-size: 12px;
      font-weight: 400;
      color: var(--sfx-up-text, #111827);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .psim-foot-meta {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #5b6e82);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }
    .psim-empty {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: var(--sfx-up-text-muted, #94a3b8);
      padding: 40px;
      text-align: center;
    }
    .psim-empty-ic {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--sfx-up-surface, #f8fafc);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .psim-empty-ic svg {
      width: 22px;
      height: 22px;
    }
    .psim-empty b {
      color: var(--sfx-up-text-secondary, #475569);
      font-size: 16px;
      font-weight: 500;
    }
    .psim-empty span {
      font-size: 14px;
    }

    /* --- Upload settings panel (global) --- */
    /* overflow:visible (not auto) so a first-row [data-tip] tooltip can extend
       above the row without being clipped — vertical scrolling, when the
       content is taller than the panel, is handled by the parent .preview-panel
       (which already scrolls). Horizontal overflow is bounded by the tooltip's
       own max-width (≤ row width), so nothing escapes the panel sideways. */
    .settings-body {
      flex: 1;
      min-height: 0;
      overflow: visible;
      padding: 8px 16px 16px 16px;
    }
    .sgroup-title {
      display: flex;
      align-items: center;
      gap: 8px;
      /* Design token: font-medium · 16/24, color main/foreground. */
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      margin: 12px 0 16px;
    }
    .sgroup-title-spaced {
      margin-top: 28px;
    }
    .sgroup-title svg {
      width: 20px;
      height: 20px;
      color: #8b9cae;
    }
    .srow {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      /* Positioning context for the [data-tip] tooltip so it centres inside the
         row (never wider than the row → never clipped by the panel edges). */
      position: relative;
    }
    .srow-spaced {
      margin-top: 24px;
    }
    .srow-lbl {
      font-size: 16px;
      color: var(--sfx-up-text, #1e293b);
    }
    .srow-spacer {
      flex: 1;
    }
    /* Info icon (circle-"i" SVG) — hover shows a styled tooltip (see [data-tip]
       below). Per design: 18.33×18.33, fill #8B9CAE. */
    .info-i {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18.33px;
      height: 18.33px;
      color: #8b9cae;
      cursor: help;
      flex-shrink: 0;
    }
    .info-i svg {
      width: 100%;
      height: 100%;
    }
    /* "Beta" badge next to the Resume uploads label — per design-system specs
       (corner-radius-15, status-success-15 border, emerald-100 bg, spacers
       05/2 padding). Token fallbacks are hardcoded since those CSS vars aren't
       defined in this project. */
    .sbeta {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 24px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid rgba(0, 167, 82, 0.15);
      background: #d0fae5;
      color: #00a752;
      /* Design token: font-normal · 14/20. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      cursor: help;
      flex-shrink: 0;
    }
    /* Styled hover tooltip for any [data-tip] in the settings panel (info "i"
       chips and the Beta pill). Matches the design-system tooltip: light
       "main/secondary" surface, dark "main/foreground" text, shadow-sm — a
       plain rounded rectangle (no arrow). Wraps long text. Replaces the native
       title so it shows instantly and reads the same everywhere there's an info
       icon. */
    .settings-body [data-tip]::after {
      content: attr(data-tip);
      position: absolute;
      bottom: calc(100% + 8px);
      /* Anchored to the row (not the icon) and centred within it, capped at the
         row width — so it can never overflow the panel's left/right edges and
         get clipped by the scroll container. */
      left: 0;
      right: 0;
      margin-inline: auto;
      width: max-content;
      max-width: min(100%, 320px);
      white-space: normal;
      text-align: left;
      line-height: 1.5;
      background: var(--sfx-up-surface, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      font-size: 11.5px;
      font-weight: 500;
      font-style: normal;
      padding: 9px 12px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.15s,
        visibility 0.15s;
      pointer-events: none;
      z-index: 60;
    }
    .settings-body [data-tip]:hover::after {
      opacity: 1;
      visibility: visible;
    }
    /* Switch toggle (matches the global brand primary). */
    .sw-toggle {
      width: 42px;
      height: 24px;
      border: none;
      padding: 0;
      border-radius: 999px;
      background: var(--sfx-up-border, #cbd5e1);
      position: relative;
      cursor: pointer;
      transition: background 0.15s;
      flex: 0 0 42px;
    }
    .sw-toggle::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: left 0.15s;
    }
    .sw-toggle.on {
      background: var(--sfx-up-primary, #2563eb);
    }
    .sw-toggle.on::after {
      left: 21px;
    }
    /* Dependent fields fade + disable when their parent toggle is off. */
    .dep-off {
      opacity: 0.45;
      pointer-events: none;
    }
    /* Input controls stay a fixed width, left-aligned (the toggles, by contrast,
       span the full width and pin to the right edge). */
    .sfields {
      display: flex;
      gap: 16px;
      margin: 4px 0;
      max-width: 520px;
    }
    .sfield {
      flex: 1;
      min-width: 0;
      position: relative;
    }
    .sfield-block {
      margin-bottom: 24px;
      max-width: 520px;
    }
    .sfield label {
      display: block;
      /* Design token: font-normal · 14/20, color main/secondary-foreground. */
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: var(--sfx-up-text-secondary, #475569);
      margin-bottom: 6px;
    }
    /* The Protocols label sits 16px above its radio list (matches the 16px gap
       between the radio rows); all other field labels use the 6px base above. */
    .sfield-radios label {
      margin-bottom: 16px;
    }
    .sinp {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      transition: border-color 0.12s;
    }
    .sinp:focus-within {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sinp input {
      border: none;
      background: none;
      outline: none;
      font: inherit;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      width: 100%;
      min-width: 0;
    }
    .sinp .sfx {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 600;
    }
    .ssel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border: 1.5px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      padding: 0 14px;
      font-size: 15px;
      color: var(--sfx-up-text, #1e293b);
      cursor: pointer;
      user-select: none;
      transition: border-color 0.12s;
    }
    .ssel svg {
      width: 16px;
      height: 16px;
      color: var(--sfx-up-text-muted, #94a3b8);
      transition: transform 0.15s;
    }
    .sfield.open .ssel {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sfield.open .ssel svg {
      transform: rotate(180deg);
    }
    .smenu {
      position: absolute;
      left: 0;
      right: 0;
      margin-top: 6px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      overflow: hidden;
      z-index: 10;
    }
    .sopt {
      padding: 10px 14px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--sfx-up-text, #1e293b);
    }
    .sopt:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
    }
    .sopt.cur {
      color: var(--sfx-up-primary, #2563eb);
      font-weight: 600;
    }
    .sopt svg {
      width: 15px;
      height: 15px;
    }
    .sradio-row {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .sradio {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1.5px solid var(--sfx-up-border, #cbd5e1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 20px;
      transition: border-color 0.12s;
    }
    .sradio.on {
      border-color: var(--sfx-up-primary, #2563eb);
    }
    .sradio.on::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--sfx-up-primary, #2563eb);
    }
    .sradio-lbl {
      font-size: 14px;
      color: var(--sfx-up-text, #1e293b);
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

    .upload-overlay-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .upload-overlay-cancel {
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

    .upload-overlay-cancel:hover {
      border-color: var(--sfx-up-error, #dc2626);
      color: var(--sfx-up-error, #dc2626);
    }

    /* --- Per-file controls inside the overlay --- */
    .upload-overlay-files {
      width: 100%;
      max-width: 520px;
      max-height: 240px;
      overflow-y: auto;
      margin: 0 0 16px;
      border: 1px solid var(--sfx-up-border, #e2e8f0);
      border-radius: 8px;
      background: var(--sfx-up-bg, #fff);
    }

    .upload-overlay-file {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border-bottom: 1px solid var(--sfx-up-border, #e2e8f0);
    }

    .upload-overlay-file:last-child {
      border-bottom: none;
    }

    .upload-overlay-file-info {
      flex: 1;
      min-width: 0;
    }

    .upload-overlay-file-name {
      font-size: 13px;
      font-weight: 500;
      color: var(--sfx-up-text, #1e293b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .upload-overlay-file-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .upload-overlay-file-bar {
      flex: 1;
      height: 3px;
      background: var(--sfx-up-border, #e2e8f0);
      border-radius: 2px;
      overflow: hidden;
    }

    .upload-overlay-file-bar-fill {
      height: 100%;
      background: var(--sfx-up-primary, #2563eb);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .upload-overlay-file-bar-fill.muted {
      background: var(--sfx-up-text-muted, #94a3b8);
    }

    .upload-overlay-file-pct {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      min-width: 32px;
      text-align: right;
    }

    .upload-overlay-file-actions {
      display: flex;
      gap: 4px;
      flex-shrink: 0;
    }

    .upload-overlay-file-btn {
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
      padding: 0;
      transition: background 0.15s, color 0.15s;
    }

    .upload-overlay-file-btn:hover {
      background: var(--sfx-up-hover, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }

    .upload-overlay-file-btn.del:hover {
      color: var(--sfx-up-error, #dc2626);
    }

    .upload-overlay-file-btn.paused {
      color: var(--sfx-up-warning, #d97706);
    }

    .upload-overlay-file-btn.paused:hover {
      color: var(--sfx-up-warning, #d97706);
    }

    .upload-overlay-file-btn svg {
      width: 14px;
      height: 14px;
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
      bottom: calc(24px + var(--sfx-up-float-offset-y, 0px));
      right: calc(24px + var(--sfx-up-float-offset-x, 0px));
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
      transition: bottom 0.25s ease, right 0.25s ease;
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

    .float-icon.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
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

    .float-item-done.info {
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.08));
      color: var(--sfx-up-info, #0090e4);
    }

    .float-item-done.info svg {
      width: 14px;
      height: 14px;
    }

    .float-info-note {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 14px 10px;
      padding: 6px 10px;
      border-radius: 8px;
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 12px;
      line-height: 16px;
    }

    .float-info-note svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
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
      max-width: 760px;
      height: 78vh;
      max-height: 720px;
      min-height: 420px;
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
        height: 96vh;
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
         looked tiny. Use a definite height so the inner image's
         max-height: 100% actually resolves; otherwise tall images
         (e.g. 52×984) render at intrinsic height and escape the
         panel. */
      .preview-img-wrap {
        width: min(420px, 60vw);
        height: min(280px, 55vh);
        max-width: 100%;
      }
    }
  `, V._FS_ZOOM_LEVELS = [1, 2, 3, 4], V._MODIFIABLE_STATUSES = /* @__PURE__ */ new Set([
  "idle",
  "queued",
  "rejected"
]), V._RESERVED_IDS = /* @__PURE__ */ new Set([
  "device",
  "camera",
  "url",
  "screen-cast"
]), V);
N([
  O({ attribute: !1 })
], B.prototype, "config");
N([
  I()
], B.prototype, "_isOpen");
N([
  I()
], B.prototype, "_activeConnector");
N([
  I()
], B.prototype, "_showUrlDialog");
N([
  I()
], B.prototype, "_showCameraDialog");
N([
  I()
], B.prototype, "_showScreenCastDialog");
N([
  I()
], B.prototype, "_similarSelectMode");
N([
  I()
], B.prototype, "_similarSelectedIds");
N([
  I()
], B.prototype, "_similarRunIds");
N([
  I()
], B.prototype, "_similarActiveIds");
N([
  I()
], B.prototype, "_similarResults");
N([
  I()
], B.prototype, "_previewPanelTab");
N([
  I()
], B.prototype, "_previewFileId");
N([
  I()
], B.prototype, "_previewDims");
N([
  I()
], B.prototype, "_fileInfoOpen");
N([
  I()
], B.prototype, "_splitPct");
N([
  I()
], B.prototype, "_showSettings");
N([
  I()
], B.prototype, "_setResize");
N([
  I()
], B.prototype, "_setMaxW");
N([
  I()
], B.prototype, "_setMaxH");
N([
  I()
], B.prototype, "_setTranscode");
N([
  I()
], B.prototype, "_setResolution");
N([
  I()
], B.prototype, "_setResolutionOpen");
N([
  I()
], B.prototype, "_setProtocol");
N([
  I()
], B.prototype, "_setResumable");
N([
  I()
], B.prototype, "_fullscreenPreviewUrl");
N([
  I()
], B.prototype, "_fullscreenVideoFile");
N([
  I()
], B.prototype, "_fsZoom");
N([
  I()
], B.prototype, "_bodyDragOver");
N([
  I()
], B.prototype, "_isMinimized");
N([
  I()
], B.prototype, "_isPillExpanded");
N([
  I()
], B.prototype, "_metadataSchema");
N([
  I()
], B.prototype, "_metadataDependencies");
N([
  I()
], B.prototype, "_regionalFilters");
N([
  I()
], B.prototype, "_bulkMetadataOpen");
N([
  I()
], B.prototype, "_bulkMetadataInitialFieldKey");
N([
  I()
], B.prototype, "_isReviewing");
N([
  I()
], B.prototype, "_reviewFiles");
N([
  I()
], B.prototype, "_hasStoredReview");
let Tc = B;
export {
  Oc as $,
  ki as A,
  Is as B,
  et as C,
  As as D,
  Ee as E,
  Z as F,
  Ct as G,
  ql as H,
  Ul as I,
  mi as J,
  $c as K,
  Cc as L,
  Bl as M,
  Pc as N,
  Ec as O,
  so as P,
  zt as Q,
  Tl as R,
  re as S,
  He as T,
  Va as U,
  qe as V,
  Rc as W,
  Ll as X,
  zo as Y,
  Io as Z,
  Ce as _,
  M as a,
  Uc as a0,
  Oi as a1,
  Fc as b,
  X as c,
  K as d,
  Vr as e,
  Lt as f,
  fe as g,
  Tc as h,
  Es as i,
  Ui as j,
  fi as k,
  Us as l,
  Ka as m,
  Ri as n,
  pl as o,
  ja as p,
  vc as q,
  Ya as r,
  Ve as s,
  Te as t,
  ke as u,
  yc as v,
  kc as w,
  wc as x,
  _c as y,
  Sc as z
};
