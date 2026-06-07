import { noChange as It, html as u, LitElement as pe, css as ne, svg as Pe, render as Ue, nothing as $ } from "lit";
import { property as O, state as z, query as fi } from "lit/decorators.js";
import { repeat as Yt } from "lit/directives/repeat.js";
import { directive as Ro, Directive as Oo, PartType as Fo } from "lit/directive.js";
import { unsafeSVG as we } from "lit/directives/unsafe-svg.js";
import { unsafeHTML as Bi } from "lit/directives/unsafe-html.js";
import { classMap as To } from "lit/directives/class-map.js";
const D = (r) => typeof r == "string", Ge = () => {
  let r, e;
  const t = new Promise((i, o) => {
    r = i, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}, Ni = (r) => r == null ? "" : String(r), Lo = (r, e, t) => {
  r.forEach((i) => {
    e[i] && (t[i] = e[i]);
  });
}, zo = /###/g, Hi = (r) => r && r.includes("###") ? r.replace(zo, ".") : r, qi = (r) => !r || D(r), tt = (r, e, t) => {
  const i = D(e) ? e.split(".") : e;
  let o = 0;
  for (; o < i.length - 1; ) {
    if (qi(r)) return {};
    const s = Hi(i[o]);
    !r[s] && t && (r[s] = new t()), Object.prototype.hasOwnProperty.call(r, s) ? r = r[s] : r = {}, ++o;
  }
  return qi(r) ? {} : {
    obj: r,
    k: Hi(i[o])
  };
}, Vi = (r, e, t) => {
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
}, Io = (r, e, t, i) => {
  const {
    obj: o,
    k: s
  } = tt(r, e, Object);
  o[s] = o[s] || [], o[s].push(t);
}, $t = (r, e) => {
  const {
    obj: t,
    k: i
  } = tt(r, e);
  if (t && Object.prototype.hasOwnProperty.call(t, i))
    return t[i];
}, Ao = (r, e, t) => {
  const i = $t(r, t);
  return i !== void 0 ? i : $t(e, t);
}, jr = (r, e, t) => {
  for (const i in e)
    i !== "__proto__" && i !== "constructor" && (i in r ? D(r[i]) || r[i] instanceof String || D(e[i]) || e[i] instanceof String ? t && (r[i] = e[i]) : jr(r[i], e[i], t) : r[i] = e[i]);
  return r;
}, me = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), jo = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
}, Do = (r) => D(r) ? r.replace(/[&<>"'\/]/g, (e) => jo[e]) : r;
class Mo {
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
const Bo = [" ", ",", "?", "!", ";"], No = new Mo(20), Ho = (r, e, t) => {
  e = e || "", t = t || "";
  const i = Bo.filter((n) => !e.includes(n) && !t.includes(n));
  if (i.length === 0) return !0;
  const o = No.getRegExp(`(${i.map((n) => n === "?" ? "\\?" : n).join("|")})`);
  let s = !o.test(r);
  if (!s) {
    const n = r.indexOf(t);
    n > 0 && !o.test(r.substring(0, n)) && (s = !0);
  }
  return s;
}, Wt = (r, e, t = ".") => {
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
}, rt = (r) => r == null ? void 0 : r.replace(/_/g, "-"), qo = {
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
class Ct {
  constructor(e, t = {}) {
    this.init(e, t);
  }
  init(e, t = {}) {
    this.prefix = t.prefix || "i18next:", this.logger = e || qo, this.options = t, this.debug = t.debug;
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
    return o && !this.debug ? null : (e = e.map((s) => D(s) ? s.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : s), D(e[0]) && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Ct(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ct(this.logger, e);
  }
}
var ge = new Ct();
class Tt {
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
class Ki extends Tt {
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
    var d, c;
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, n = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.includes(".") ? a = e.split(".") : (a = [e, t], i && (Array.isArray(i) ? a.push(...i) : D(i) && s ? a.push(...i.split(s)) : a.push(i)));
    const l = $t(this.data, a);
    return !l && !t && !i && e.includes(".") && (e = a[0], t = a[1], i = a.slice(2).join(".")), l || !n || !D(i) ? l : Wt((c = (d = this.data) == null ? void 0 : d[e]) == null ? void 0 : c[t], i, s);
  }
  addResource(e, t, i, o, s = {
    silent: !1
  }) {
    const n = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [e, t];
    i && (a = a.concat(n ? i.split(n) : i)), e.includes(".") && (a = e.split("."), o = t, t = a[1]), this.addNamespaces(t), Vi(this.data, a, o), s.silent || this.emit("added", e, t, i, o);
  }
  addResources(e, t, i, o = {
    silent: !1
  }) {
    for (const s in i)
      (D(i[s]) || Array.isArray(i[s])) && this.addResource(e, t, s, i[s], {
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
    let l = $t(this.data, a) || {};
    n.skipCopy || (i = JSON.parse(JSON.stringify(i))), o ? jr(l, i, s) : l = {
      ...l,
      ...i
    }, Vi(this.data, a, l), n.silent || this.emit("added", e, t, i);
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
var Dr = {
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
const Mr = Symbol("i18next/PATH_KEY");
function Vo() {
  const r = [], e = /* @__PURE__ */ Object.create(null);
  let t;
  return e.get = (i, o) => {
    var s;
    return (s = t == null ? void 0 : t.revoke) == null || s.call(t), o === Mr ? r : (r.push(o), t = Proxy.revocable(i, e), t.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function Me(r, e) {
  const {
    [Mr]: t
  } = r(Vo()), i = (e == null ? void 0 : e.keySeparator) ?? ".", o = (e == null ? void 0 : e.nsSeparator) ?? ":", s = (e == null ? void 0 : e.enableSelector) === "strict";
  if (t.length > 1 && o) {
    const n = e == null ? void 0 : e.ns, a = s ? Array.isArray(n) ? n : n ? [n] : null : Array.isArray(n) ? n : null;
    if (a && (s ? a : a.length > 1 ? a.slice(1) : []).includes(t[0]))
      return `${t[0]}${o}${t.slice(1).join(i)}`;
  }
  return t.join(i);
}
const At = (r) => !D(r) && typeof r != "boolean" && typeof r != "number";
class Pt extends Tt {
  constructor(e, t = {}) {
    super(), Lo(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ge.create("translator"), this.checkedLoadedFor = {};
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
    const s = At(o.res);
    return !(i.returnObjects === !1 && s);
  }
  extractFromKey(e, t) {
    let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let s = t.ns || this.options.defaultNS || [];
    const n = i && e.includes(i), a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Ho(e, i, o);
    if (n && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: D(s) ? [s] : s
        };
      const d = e.split(i);
      (i !== o || i === o && this.options.ns.includes(d[0])) && (s = d.shift()), e = d.join(o);
    }
    return {
      key: e,
      namespaces: D(s) ? [s] : s
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
    } = this.extractFromKey(e[e.length - 1], o), d = l[l.length - 1];
    let c = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    c === void 0 && (c = ":");
    const p = o.lng || this.language, f = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((p == null ? void 0 : p.toLowerCase()) === "cimode")
      return f ? s ? {
        res: `${d}${c}${a}`,
        usedKey: a,
        exactUsedKey: a,
        usedLng: p,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(o)
      } : `${d}${c}${a}` : s ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: p,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(o)
      } : a;
    const k = this.resolve(e, o);
    let b = k == null ? void 0 : k.res;
    const y = (k == null ? void 0 : k.usedKey) || a, E = (k == null ? void 0 : k.exactUsedKey) || a, A = ["[object Number]", "[object Function]", "[object RegExp]"], _ = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, v = !this.i18nFormat || this.i18nFormat.handleAsObject, w = o.count !== void 0 && !D(o.count), x = Pt.hasDefaultValue(o), R = w ? this.pluralResolver.getSuffix(p, o.count, o) : "", P = o.ordinal && w ? this.pluralResolver.getSuffix(p, o.count, {
      ordinal: !1
    }) : "", I = w && !o.ordinal && o.count === 0, L = I && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${R}`] || o[`defaultValue${P}`] || o.defaultValue;
    let T = b;
    v && !b && x && (T = L);
    const J = At(T), ce = Object.prototype.toString.apply(T);
    if (v && T && J && !A.includes(ce) && !(D(_) && Array.isArray(T))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const F = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, T, {
          ...o,
          ns: l
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return s ? (k.res = F, k.usedParams = this.getUsedParamsDetails(o), k) : F;
      }
      if (n) {
        const F = Array.isArray(T), Y = F ? [] : {}, he = F ? E : y;
        for (const m in T)
          if (Object.prototype.hasOwnProperty.call(T, m)) {
            const h = `${he}${n}${m}`;
            x && !b ? Y[m] = this.translate(h, {
              ...o,
              defaultValue: At(L) ? L[m] : void 0,
              joinArrays: !1,
              ns: l
            }) : Y[m] = this.translate(h, {
              ...o,
              joinArrays: !1,
              ns: l
            }), Y[m] === h && (Y[m] = T[m]);
          }
        b = Y;
      }
    } else if (v && D(_) && Array.isArray(b))
      b = b.join(_), b && (b = this.extendTranslation(b, e, o, i));
    else {
      let F = !1, Y = !1;
      !this.isValidLookup(b) && x && (F = !0, b = L), this.isValidLookup(b) || (Y = !0, b = a);
      const m = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Y ? void 0 : b, h = x && L !== b && this.options.updateMissing;
      if (Y || F || h) {
        if (this.logger.log(h ? "updateKey" : "missingKey", p, d, w && !h ? `${a}${this.pluralResolver.getSuffix(p, o.count, o)}` : a, h ? L : b), n) {
          const S = this.resolve(a, {
            ...o,
            keySeparator: !1
          });
          S && S.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let g = [];
        const C = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && C && C[0])
          for (let S = 0; S < C.length; S++)
            g.push(C[S]);
        else this.options.saveMissingTo === "all" ? g = this.languageUtils.toResolveHierarchy(o.lng || this.language) : g.push(o.lng || this.language);
        const U = (S, j, H) => {
          var Q;
          const q = x && H !== b ? H : m;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(S, d, j, q, h, o) : (Q = this.backendConnector) != null && Q.saveMissing && this.backendConnector.saveMissing(S, d, j, q, h, o), this.emit("missingKey", S, d, j, b);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && w ? g.forEach((S) => {
          const j = this.pluralResolver.getSuffixes(S, o);
          I && o[`defaultValue${this.options.pluralSeparator}zero`] && !j.includes(`${this.options.pluralSeparator}zero`) && j.push(`${this.options.pluralSeparator}zero`), j.forEach((H) => {
            U([S], a + H, o[`defaultValue${H}`] || L);
          });
        }) : U(g, a, L));
      }
      b = this.extendTranslation(b, e, o, k, i), Y && b === a && this.options.appendNamespaceToMissingKey && (b = `${d}${c}${a}`), (Y || F) && this.options.parseMissingKeyHandler && (b = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}${c}${a}` : a, F ? b : void 0, o));
    }
    return s ? (k.res = b, k.usedParams = this.getUsedParamsDetails(o), k) : b;
  }
  extendTranslation(e, t, i, o, s) {
    var l, d;
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
      const c = D(e) && (((d = i == null ? void 0 : i.interpolation) == null ? void 0 : d.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let p;
      if (c) {
        const k = e.match(this.interpolator.nestingRegexp);
        p = k && k.length;
      }
      let f = i.replace && !D(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), e = this.interpolator.interpolate(e, f, i.lng || this.language || o.usedLng, i), c) {
        const k = e.match(this.interpolator.nestingRegexp), b = k && k.length;
        p < b && (i.nest = !1);
      }
      !i.lng && o && o.res && (i.lng = this.language || o.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, (...k) => (s == null ? void 0 : s[0]) === k[0] && !i.context ? (this.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${t[0]}`), null) : this.translate(...k, t), i)), i.interpolation && this.interpolator.reset();
    }
    const n = i.postProcess || this.options.postProcess, a = D(n) ? [n] : n;
    return e != null && (a != null && a.length) && i.applyPostProcessor !== !1 && (e = Dr.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), e;
  }
  resolve(e, t = {}) {
    let i, o, s, n, a;
    return D(e) && (e = [e]), Array.isArray(e) && (e = e.map((l) => typeof l == "function" ? Me(l, {
      ...this.options,
      ...t
    }) : l)), e.forEach((l) => {
      if (this.isValidLookup(i)) return;
      const d = this.extractFromKey(l, t), c = d.key;
      o = c;
      let p = d.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const f = t.count !== void 0 && !D(t.count), k = f && !t.ordinal && t.count === 0, b = t.context !== void 0 && (D(t.context) || typeof t.context == "number") && t.context !== "", y = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((E) => {
        var A, _;
        this.isValidLookup(i) || (a = E, !this.checkedLoadedFor[`${y[0]}-${E}`] && ((A = this.utils) != null && A.hasLoadedNamespace) && !((_ = this.utils) != null && _.hasLoadedNamespace(a)) && (this.checkedLoadedFor[`${y[0]}-${E}`] = !0, this.logger.warn(`key "${o}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((v) => {
          var R;
          if (this.isValidLookup(i)) return;
          n = v;
          const w = [c];
          if ((R = this.i18nFormat) != null && R.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, c, v, E, t);
          else {
            let P;
            f && (P = this.pluralResolver.getSuffix(v, t.count, t));
            const I = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (t.ordinal && P.startsWith(L) && w.push(c + P.replace(L, this.options.pluralSeparator)), w.push(c + P), k && w.push(c + I)), b) {
              const T = `${c}${this.options.contextSeparator || "_"}${t.context}`;
              w.push(T), f && (t.ordinal && P.startsWith(L) && w.push(T + P.replace(L, this.options.pluralSeparator)), w.push(T + P), k && w.push(T + I));
            }
          }
          let x;
          for (; x = w.pop(); )
            this.isValidLookup(i) || (s = x, i = this.getResource(v, E, x, t));
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
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = e.replace && !D(e.replace);
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
class Yi {
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
    if (D(e) && e.includes("-")) {
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
    if (typeof e == "function" && (e = e(t)), D(e) && (e = [e]), Array.isArray(e)) return e;
    if (!t) return e.default || [];
    let i = e[t];
    return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || [];
  }
  toResolveHierarchy(e, t) {
    const i = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), o = [], s = (n) => {
      n && (this.isSupportedCode(n) ? o.push(n) : this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`));
    };
    return D(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(e))) : D(e) && s(this.formatLanguageCode(e)), i.forEach((n) => {
      o.includes(n) || s(this.formatLanguageCode(n));
    }), o;
  }
}
const Wi = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Gi = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ko {
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Gi;
      if (!e.match(/-|_/)) return Gi;
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
    return i || (i = this.getRule("dev", t)), i ? i.resolvedOptions().pluralCategories.sort((o, s) => Wi[o] - Wi[s]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : [];
  }
  getSuffix(e, t, i = {}) {
    const o = this.getRule(e, i);
    return o ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, i));
  }
}
const Xi = (r, e, t, i = ".", o = !0) => {
  let s = Ao(r, e, t);
  return !s && o && D(t) && (s = Wt(r, t, i), s === void 0 && (s = Wt(e, t, i))), s;
}, jt = (r) => r.replace(/\$/g, "$$$$");
class Ji {
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
      formatSeparator: d,
      unescapeSuffix: c,
      unescapePrefix: p,
      nestingPrefix: f,
      nestingPrefixEscaped: k,
      nestingSuffix: b,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: E,
      maxReplaces: A,
      alwaysFormat: _
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Do, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = s ? me(s) : n || "{{", this.suffix = a ? me(a) : l || "}}", this.formatSeparator = d || ",", this.unescapePrefix = c ? "" : p ? me(p) : "-", this.unescapeSuffix = this.unescapePrefix ? "" : c ? me(c) : "", this.nestingPrefix = f ? me(f) : k || me("$t("), this.nestingSuffix = b ? me(b) : y || me(")"), this.nestingOptionsSeparator = E || ",", this.maxReplaces = A || 1e3, this.alwaysFormat = _ !== void 0 ? _ : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, i) => (t == null ? void 0 : t.source) === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, t, i, o) {
    var k;
    let s, n, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (b) => {
      if (!b.includes(this.formatSeparator)) {
        const _ = Xi(t, l, b, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(_, void 0, i, {
          ...o,
          ...t,
          interpolationkey: b
        }) : _;
      }
      const y = b.split(this.formatSeparator), E = y.shift().trim(), A = y.join(this.formatSeparator).trim();
      return this.format(Xi(t, l, E, this.options.keySeparator, this.options.ignoreJSONStructure), A, i, {
        ...o,
        ...t,
        interpolationkey: E
      });
    };
    this.resetRegExp(), !this.escapeValue && typeof e == "string" && /\$t\([^)]*\{[^}]*\{\{/.test(e) && this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
    const c = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler, p = ((k = o == null ? void 0 : o.interpolation) == null ? void 0 : k.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (b) => jt(b)
    }, {
      regex: this.regexp,
      safeValue: (b) => this.escapeValue ? jt(this.escape(b)) : jt(b)
    }].forEach((b) => {
      for (a = 0; s = b.regex.exec(e); ) {
        const y = s[1].trim();
        if (n = d(y), n === void 0)
          if (typeof c == "function") {
            const A = c(e, s, o);
            n = D(A) ? A : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, y))
            n = "";
          else if (p) {
            n = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${y} for interpolating ${e}`), n = "";
        else !D(n) && !this.useRawValueToEscape && (n = Ni(n));
        const E = b.safeValue(n);
        if (e = e.replace(s[0], E), p ? (b.regex.lastIndex += n.length, b.regex.lastIndex -= s[0].length) : b.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t, i = {}) {
    let o, s, n;
    const a = (l, d) => {
      const c = this.nestingOptionsSeparator;
      if (!l.includes(c)) return l;
      const p = l.split(new RegExp(`${me(c)}[ ]*{`));
      let f = `{${p[1]}`;
      l = p[0], f = this.interpolate(f, n);
      const k = f.match(/'/g), b = f.match(/"/g);
      (((k == null ? void 0 : k.length) ?? 0) % 2 === 0 && !b || ((b == null ? void 0 : b.length) ?? 0) % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        n = JSON.parse(f), d && (n = {
          ...d,
          ...n
        });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, y), `${l}${c}${f}`;
      }
      return n.defaultValue && n.defaultValue.includes(this.prefix) && delete n.defaultValue, l;
    };
    for (; o = this.nestingRegexp.exec(e); ) {
      let l = [];
      n = {
        ...i
      }, n = n.replace && !D(n.replace) ? n.replace : n, n.applyPostProcessor = !1, delete n.defaultValue;
      const d = /{.*}/.test(o[1]) ? o[1].lastIndexOf("}") + 1 : o[1].indexOf(this.formatSeparator);
      if (d !== -1 && (l = o[1].slice(d).split(this.formatSeparator).map((c) => c.trim()).filter(Boolean), o[1] = o[1].slice(0, d)), s = t(a.call(this, o[1].trim(), n), n), s && o[0] === e && !D(s)) return s;
      D(s) || (s = Ni(s)), s || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), s = ""), l.length && (s = l.reduce((c, p) => this.format(c, p, i.lng, {
        ...i,
        interpolationkey: o[1].trim()
      }), s.trim())), e = e.replace(o[0], s), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Yo = (r) => {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.includes("(")) {
    const i = r.split("(");
    e = i[0].toLowerCase().trim();
    const o = i[1].slice(0, -1);
    e === "currency" && !o.includes(":") ? t.currency || (t.currency = o.trim()) : e === "relativetime" && !o.includes(":") ? t.range || (t.range = o.trim()) : o.split(";").forEach((n) => {
      if (n) {
        const [a, ...l] = n.split(":"), d = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        t[c] || (t[c] = d), d === "false" && (t[c] = !1), d === "true" && (t[c] = !0), isNaN(d) || (t[c] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}, Zi = (r) => {
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
}, Wo = (r) => (e, t, i) => r(rt(t), i)(e);
class Go {
  constructor(e = {}) {
    this.logger = ge.create("formatter"), this.options = e, this.init(e);
  }
  init(e, t = {
    interpolation: {}
  }) {
    this.formatSeparator = t.interpolation.formatSeparator || ",";
    const i = t.cacheInBuiltFormats ? Zi : Wo;
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
    this.formats[e.toLowerCase().trim()] = Zi(t);
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
        formatName: d,
        formatOptions: c
      } = Yo(l);
      if (this.formats[d]) {
        let f = a;
        try {
          const k = ((p = o == null ? void 0 : o.formatParams) == null ? void 0 : p[o.interpolationkey]) || {}, b = k.locale || k.lng || o.locale || o.lng || i;
          f = this.formats[d](a, b, {
            ...c,
            ...o,
            ...k
          });
        } catch (k) {
          this.logger.warn(k);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return a;
    }, e);
  }
}
const Xo = (r, e) => {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
};
class Jo extends Tt {
  constructor(e, t, i, o = {}) {
    var s, n;
    super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = o, this.logger = ge.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (n = (s = this.backend) == null ? void 0 : s.init) == null || n.call(s, i, o.backend, o);
  }
  queueLoad(e, t, i, o) {
    const s = {}, n = {}, a = {}, l = {};
    return e.forEach((d) => {
      let c = !0;
      t.forEach((p) => {
        const f = `${d}|${p}`;
        !i.reload && this.store.hasResourceBundle(d, p) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? n[f] === void 0 && (n[f] = !0) : (this.state[f] = 1, c = !1, n[f] === void 0 && (n[f] = !0), s[f] === void 0 && (s[f] = !0), l[p] === void 0 && (l[p] = !0)));
      }), c || (a[d] = !0);
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
      Io(l.loaded, [s], n), Xo(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((d) => {
        a[d] || (a[d] = {});
        const c = l.loaded[d];
        c.length && c.forEach((p) => {
          a[d][p] === void 0 && (a[d][p] = !0);
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
    const a = (d, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (d && c && o < this.maxRetries) {
        setTimeout(() => {
          this.read(e, t, i, o + 1, s * 2, n);
        }, s);
        return;
      }
      n(d, c);
    }, l = this.backend[i].bind(this.backend);
    if (l.length === 2) {
      try {
        const d = l(e, t);
        d && typeof d.then == "function" ? d.then((c) => a(null, c)).catch(a) : a(null, d);
      } catch (d) {
        a(d);
      }
      return;
    }
    return l(e, t, a);
  }
  prepareLoading(e, t, i = {}, o) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    D(e) && (e = this.languageUtils.toResolveHierarchy(e)), D(t) && (t = [t]);
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
    var l, d, c, p, f;
    if ((d = (l = this.services) == null ? void 0 : l.utils) != null && d.hasLoadedNamespace && !((p = (c = this.services) == null ? void 0 : c.utils) != null && p.hasLoadedNamespace(t))) {
      this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if ((f = this.backend) != null && f.create) {
        const k = {
          ...n,
          isUpdate: s
        }, b = this.backend.create.bind(this.backend);
        if (b.length < 6)
          try {
            let y;
            b.length === 5 ? y = b(e, t, i, o, k) : y = b(e, t, i, o), y && typeof y.then == "function" ? y.then((E) => a(null, E)).catch(a) : a(null, y);
          } catch (y) {
            a(y);
          }
        else
          b(e, t, i, o, a, k);
      }
      !e || !e[0] || this.store.addResource(e[0], t, i, o);
    }
  }
}
const Dt = () => ({
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
    if (typeof r[1] == "object" && (e = r[1]), D(r[1]) && (e.defaultValue = r[1]), D(r[2]) && (e.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
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
}), Qi = (r) => (D(r.ns) && (r.ns = [r.ns]), D(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), D(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && !r.supportedLngs.includes("cimode") && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r), xt = () => {
}, Zo = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
};
class it extends Tt {
  constructor(e = {}, t) {
    if (super(), this.options = Qi(e), this.services = {}, this.logger = ge, this.modules = {
      external: []
    }, Zo(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init(e = {}, t) {
    this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (D(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
    const i = Dt();
    this.options = {
      ...i,
      ...this.options,
      ...Qi(e)
    }, this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = i.overloadTranslationOptionHandler);
    const o = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? ge.init(o(this.modules.logger), this.options) : ge.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = Go;
      const c = new Yi(this.options);
      this.store = new Ki(this.options.resources, this.options);
      const p = this.services;
      p.logger = ge, p.resourceStore = this.store, p.languageUtils = c, p.pluralResolver = new Ko(c, {
        prepend: this.options.pluralSeparator
      }), d && (p.formatter = o(d), p.formatter.init && p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new Ji(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new Jo(o(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", (f, ...k) => {
        this.emit(f, ...k);
      }), this.modules.languageDetector && (p.languageDetector = o(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = o(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Pt(this.services, this.options), this.translator.on("*", (f, ...k) => {
        this.emit(f, ...k);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, t || (t = xt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = (...c) => this.store[d](...c);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = (...c) => (this.store[d](...c), this);
    });
    const a = Ge(), l = () => {
      const d = (c, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(p), t(c, p);
      };
      if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), a;
  }
  loadResources(e, t = xt) {
    var s, n;
    let i = t;
    const o = D(e) ? e : this.language;
    if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const a = [], l = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((p) => {
          p !== "cimode" && (a.includes(p) || a.push(p));
        });
      };
      o ? l(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => l(c)), (n = (s = this.options.preload) == null ? void 0 : s.forEach) == null || n.call(s, (d) => l(d)), this.services.backendConnector.load(a, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(d);
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
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Dr.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
      l ? this.isLanguageChangingTo === e && (o(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, i.resolve((...d) => this.t(...d)), t && t(a, (...d) => this.t(...d));
    }, n = (a) => {
      var c, p;
      !e && !a && this.services.languageDetector && (a = []);
      const l = D(a) ? a : a && a[0], d = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(D(a) ? [a] : a);
      d && (this.language || o(d), this.translator.language || this.translator.changeLanguage(d), (p = (c = this.services.languageDetector) == null ? void 0 : c.cacheUserLanguage) == null || p.call(c, d)), this.loadResources(d, (f) => {
        s(f, d);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? n(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(n) : this.services.languageDetector.detect(n) : n(e), i;
  }
  getFixedT(e, t, i, o) {
    const s = o == null ? void 0 : o.scopeNs, n = (a, l, ...d) => {
      let c;
      typeof l != "object" ? c = this.options.overloadTranslationOptionHandler([a, l].concat(d)) : c = {
        ...l
      }, c.lng = c.lng || n.lng, c.lngs = c.lngs || n.lngs;
      const p = c.ns !== void 0 && c.ns !== null;
      c.ns = c.ns || n.ns, c.keyPrefix !== "" && (c.keyPrefix = c.keyPrefix || i || n.keyPrefix);
      const f = {
        ...this.options,
        ...c
      };
      Array.isArray(s) && !p && (f.ns = s), typeof c.keyPrefix == "function" && (c.keyPrefix = Me(c.keyPrefix, f));
      const k = this.options.keySeparator || ".";
      let b;
      return c.keyPrefix && Array.isArray(a) ? b = a.map((y) => (typeof y == "function" && (y = Me(y, f)), `${c.keyPrefix}${k}${y}`)) : (typeof a == "function" && (a = Me(a, f)), b = c.keyPrefix ? `${c.keyPrefix}${k}${a}` : a), this.t(b, c);
    };
    return D(e) ? n.lng = e : n.lngs = e, n.ns = t, n.keyPrefix = i, n;
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
      const d = this.services.backendConnector.state[`${a}|${l}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, n);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || n(i, e) && (!o || n(s, e)));
  }
  loadNamespaces(e, t) {
    const i = Ge();
    return this.options.ns ? (D(e) && (e = [e]), e.forEach((o) => {
      this.options.ns.includes(o) || this.options.ns.push(o);
    }), this.loadResources((o) => {
      i.resolve(), t && t(o);
    }), i) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const i = Ge();
    D(e) && (e = [e]);
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
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = ((s = this.services) == null ? void 0 : s.languageUtils) || new Yi(Dt());
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
      const a = Object.keys(this.store.data).reduce((l, d) => (l[d] = {
        ...this.store.data[d]
      }, l[d] = Object.keys(l[d]).reduce((c, p) => (c[p] = {
        ...l[d][p]
      }, c), l[d]), l), {});
      s.store = new Ki(a, o), s.services.resourceStore = s.store;
    }
    if (e.interpolation) {
      const l = {
        ...Dt().interpolation,
        ...this.options.interpolation,
        ...e.interpolation
      }, d = {
        ...o,
        interpolation: l
      };
      s.services.interpolator = new Ji(d);
    }
    return s.translator = new Pt(s.services, o), s.translator.on("*", (a, ...l) => {
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
const Br = [
  "__proto__",
  "constructor",
  "prototype"
];
function Nr(r) {
  return !(typeof r != "string" || r.length === 0 || r.length > 128 || Br.indexOf(r) > -1 || r.indexOf("..") > -1 || r.indexOf("\\") > -1 || /[?#%\s@]/.test(r) || /[\x00-\x1F\x7F]/.test(r));
}
function Hr(r) {
  return !(!Nr(r) || r.indexOf("/") > -1);
}
function Qo(r) {
  return Nr(r);
}
const es = {
  lng: Hr,
  ns: Qo
};
function bt(r) {
  return typeof r != "string" ? r : r.replace(/[\r\n\x00-\x1F\x7F]/g, " ");
}
function ts(r) {
  if (typeof r != "string" || r.length === 0) return r;
  try {
    const e = new URL(r);
    return e.username || e.password ? (e.username = "", e.password = "", e.toString()) : r;
  } catch {
    return r.replace(/(\/\/)[^/@\s]+@/g, "$1");
  }
}
function qr() {
  return typeof XMLHttpRequest == "function" || typeof XMLHttpRequest == "object";
}
function is(r) {
  return !!r && typeof r.then == "function";
}
function rs(r) {
  return is(r) ? r : Promise.resolve(r);
}
const os = /\{\{(.+?)\}\}/g;
function er(r, e) {
  let t = !1;
  const i = r.replace(os, (o, s) => {
    const n = s.trim();
    if (Br.indexOf(n) > -1) return o;
    const a = e[n];
    if (a == null) return o;
    const l = es[n] || Hr, d = String(a).split("+");
    for (const c of d) if (!l(c))
      return t = !0, o;
    return d.join("+");
  });
  return t ? null : i;
}
const Re = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof window < "u" ? window : void 0;
let Et;
typeof fetch == "function" ? Et = fetch : Re && typeof Re.fetch == "function" && (Et = Re.fetch);
const tr = qr() && Re ? Re.XMLHttpRequest : void 0, ss = typeof ActiveXObject == "function" && Re ? Re.ActiveXObject : void 0, Vr = [
  "__proto__",
  "constructor",
  "prototype"
], Gt = (r, e) => {
  if (e && typeof e == "object") {
    let t = "";
    for (const i of Object.keys(e))
      Vr.indexOf(i) > -1 || (t += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
    if (!t) return r;
    r = r + (r.indexOf("?") !== -1 ? "&" : "?") + t.slice(1);
  }
  return r;
}, ir = (r, e, t, i) => {
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
  typeof fetch == "function" ? fetch(r, e).then(o).catch(t) : Et(r, e).then(o).catch(t);
}, ns = (r, e, t, i) => {
  r.queryStringParams && (e = Gt(e, r.queryStringParams));
  const o = { ...typeof r.customHeaders == "function" ? r.customHeaders() : r.customHeaders };
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (o["User-Agent"] = `i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`), t && (o["Content-Type"] = "application/json");
  const s = typeof r.requestOptions == "function" ? r.requestOptions(t) : r.requestOptions, n = {
    method: t ? "POST" : "GET",
    body: t ? r.stringify(t) : void 0,
    headers: o,
    ...r._omitFetchOptions ? {} : s
  }, a = typeof r.alternateFetch == "function" && r.alternateFetch.length >= 1 ? r.alternateFetch : void 0;
  try {
    ir(e, n, i, a);
  } catch (l) {
    if (!s || Object.keys(s).length === 0 || !l.message || l.message.indexOf("not implemented") < 0) return i(l);
    try {
      Object.keys(s).forEach((d) => {
        delete n[d];
      }), ir(e, n, i, a), r._omitFetchOptions = !0;
    } catch (d) {
      i(d);
    }
  }
}, as = (r, e, t, i) => {
  t && typeof t == "object" && (t = Gt("", t).slice(1)), r.queryStringParams && (e = Gt(e, r.queryStringParams));
  try {
    const o = tr ? new tr() : new ss("MSXML2.XMLHTTP.3.0");
    o.open(t ? "POST" : "GET", e, 1), r.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!r.withCredentials, t && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
    let s = r.customHeaders;
    if (s = typeof s == "function" ? s() : s, s) for (const n of Object.keys(s))
      Vr.indexOf(n) > -1 || o.setRequestHeader(n, s[n]);
    o.onreadystatechange = () => {
      o.readyState > 3 && i(o.status >= 400 ? o.statusText : null, {
        status: o.status,
        data: o.responseText
      });
    }, o.send(t);
  } catch (o) {
    console && console.log(o);
  }
}, ls = (r, e, t, i) => {
  if (typeof t == "function" && (i = t, t = void 0), i = i || (() => {
  }), Et && e.indexOf("file:") !== 0) return ns(r, e, t, i);
  if (qr() || typeof ActiveXObject == "function") return as(r, e, t, i);
  i(/* @__PURE__ */ new Error("No fetch and no xhr implementation found!"));
}, ds = () => ({
  loadPath: "/locales/{{lng}}/{{ns}}.json",
  addPath: "/locales/add/{{lng}}/{{ns}}",
  parse: (r) => JSON.parse(r),
  stringify: JSON.stringify,
  parsePayload: (r, e, t) => ({ [e]: t || "" }),
  parseLoadPayload: (r, e) => {
  },
  request: ls,
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
var Kr = class {
  constructor(r, e = {}, t = {}) {
    this.services = r, this.options = e, this.allOptions = t, this.type = "backend", this.init(r, e, t);
  }
  init(r, e = {}, t = {}) {
    if (this.services = r, this.options = {
      ...ds(),
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
    typeof this.options.loadPath == "function" && (s = this.options.loadPath(r, t)), s = rs(s), s.then((n) => {
      if (!n) return o(null, {});
      const a = er(n, {
        lng: r.join("+"),
        ns: t.join("+")
      });
      if (a == null) {
        const l = r.map(bt).join(", "), d = t.map(bt).join(", ");
        return o(/* @__PURE__ */ new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=[" + l + "] namespaces=[" + d + "]"), !1);
      }
      this.loadUrl(a, o, e, i);
    });
  }
  loadUrl(r, e, t, i) {
    const o = typeof t == "string" ? [t] : t, s = typeof i == "string" ? [i] : i, n = this.options.parseLoadPayload(o, s), a = bt(ts(r));
    this.options.request(this.options, r, n, (l, d) => {
      if (d && (d.status >= 500 && d.status < 600 || !d.status)) return e("failed loading " + a + "; status code: " + d.status, !0);
      if (d && d.status >= 400 && d.status < 500) return e("failed loading " + a + "; status code: " + d.status, !1);
      if (!d && l && l.message) {
        const f = l.message.toLowerCase();
        if ([
          "failed",
          "fetch",
          "network",
          "load"
        ].find((k) => f.indexOf(k) > -1)) return e("failed loading " + a + ": " + bt(l.message), !0);
      }
      if (l) return e(l, !1);
      let c, p;
      try {
        typeof d.data == "string" ? c = this.options.parse(d.data, t, i) : c = d.data;
      } catch {
        p = "failed parsing " + a + " to json";
      }
      if (p) return e(p, !1);
      e(null, c);
    });
  }
  create(r, e, t, i, o) {
    if (!this.options.addPath) return;
    typeof r == "string" && (r = [r]);
    const s = this.options.parsePayload(e, t, i);
    let n = 0;
    const a = [], l = [];
    r.forEach((d) => {
      let c = this.options.addPath;
      typeof this.options.addPath == "function" && (c = this.options.addPath(d, e));
      const p = er(c, {
        lng: d,
        ns: e
      });
      if (p == null) {
        n += 1, o && n === r.length && o(a, l);
        return;
      }
      this.options.request(this.options, p, s, (f, k) => {
        n += 1, a.push(f), l.push(k), n === r.length && typeof o == "function" && o(a, l);
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
        r.read(n, a, "read", null, null, (l, d) => {
          l && t.warn(`loading namespace ${a} for language ${n} failed`, l), !l && d && t.log(`loaded namespace ${a} for language ${n}`, d), r.loaded(`${n}|${a}`, l, d);
        });
      });
    });
  }
};
Kr.type = "backend";
const Yr = "f7b2366e-fcb6-4f1a-8f23-8de48422989a", cs = "https://i18n-fastly.ultrafast.io", ps = "https://neo.wordplex.io", Xt = "uploader";
let Ce = null;
async function us(r = "en") {
  return Ce ? (Ce.language !== r && await Ce.changeLanguage(r), { i18n: Ce, isNew: !1 }) : (Ce = ae.createInstance(), await Ce.use(Kr).init({
    lng: r,
    fallbackLng: "en",
    ns: [Xt],
    defaultNS: Xt,
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
      loadPath: `${cs}/api/export/grid/f2/${Yr}?langs={{lng}}&separator=+&response_format=i18next_multi`,
      parse(e, t) {
        var s;
        const i = JSON.parse(e), o = Array.isArray(t) ? t[0] : t;
        return o && ((s = i[o]) != null && s.__without_namespace) ? i[o].__without_namespace : i;
      }
    }
  }), { i18n: Ce, isNew: !0 });
}
const fs = "sfxUploaderTranslationsMissingKeysEnabled";
class hs {
  constructor() {
    this.enabled = !1, this._missingKeys = {}, this._timer = null, this.debounceDelay = 2e3, this.enabled = typeof localStorage < "u" && localStorage.getItem(fs) === "true", this.enabled && console.log(
      "%c[uploader] TranslationMissingKeysHelper enabled",
      "font-weight:600;"
    ), this._missingKeys = new Proxy(this._missingKeys, {
      set: (e, t, i, o) => (this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => this._renderCurl(), this.debounceDelay), Reflect.set(e, t, i, o))
    });
  }
  handleMissingKey(e, t = "", i = Xt) {
    if (!this.enabled) return;
    const o = `${i}:${e}`;
    this._missingKeys[o] = { value: t, ns: i };
  }
  _renderCurl() {
    console.group("[uploader] Missing translation keys"), console.log("%cMissing keys:", "font-weight:600;font-size:200%;"), console.table({ ...this._missingKeys }), console.log("%ccURL (check carefully data before send):", "font-weight:600;font-size:150%;"), console.log(`
curl '${ps}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${Yr}","translations_requests":${JSON.stringify(
      Object.entries(this._missingKeys).map(([e, { value: t, ns: i }]) => ({
        key: i && e.startsWith(`${i}:`) ? e.slice(i.length + 1) : e,
        lang: "en",
        default: t
      }))
    ).replaceAll("'", "'\\''")}}'
    `), console.groupEnd();
  }
}
const gs = new hs(), Mt = (r) => r.includes("-") ? r : r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
class ms extends Oo {
  constructor(e) {
    if (super(e), this._appliedProps = /* @__PURE__ */ new Set(), e.type !== Fo.ELEMENT)
      throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>");
  }
  // Element directives must implement render(); all real work is in update().
  render(e) {
    return It;
  }
  update(e, [t]) {
    if (t === this._lastStyles) return It;
    this._lastStyles = t;
    const { style: i } = e.element, o = t ?? {};
    for (const s of this._appliedProps)
      (!(s in o) || o[s] == null || o[s] === "") && (i.removeProperty(Mt(s)), this._appliedProps.delete(s));
    for (const [s, n] of Object.entries(o))
      n != null && n !== "" ? (i.setProperty(Mt(s), n), this._appliedProps.add(s)) : this._appliedProps.has(s) && (i.removeProperty(Mt(s)), this._appliedProps.delete(s));
    return It;
  }
}
const Z = Ro(ms);
function xs(r, e) {
  var n, a, l;
  const t = (n = e == null ? void 0 : e.getLocateUrl) == null ? void 0 : n.call(e, r);
  if (t) return t;
  const i = (e == null ? void 0 : e.adminUrl) ?? (typeof window < "u" ? window.location.origin : void 0);
  if (!i) return null;
  const o = (l = (a = r.response) == null ? void 0 : a.file) == null ? void 0 : l.uuid;
  return o ? `${i.replace(/\/+$/, "")}/library?lf=${encodeURIComponent(btoa(o))}` : null;
}
class bs {
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
function rr(r, e) {
  const t = r.getState().files;
  if (!t.has(e)) return;
  const i = new Map(t);
  i.delete(e), r.setState({ files: i });
}
function vs() {
  return new bs({
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
class ys {
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
const ws = "SAME_ASSET_EXISTS_SKIP_UPLOAD", _s = "ERROR_SHA1_CONFLICT";
function pt(r) {
  return (r == null ? void 0 : r.code) === ws || (r == null ? void 0 : r.code) === _s;
}
function hi(r, e) {
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
const Wr = /[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;
function Il(r) {
  return r == null || r === "" ? null : typeof r != "string" || Wr.test(r) ? "productRefInvalid" : null;
}
function Al(r) {
  if (r == null || r === "") return null;
  const e = typeof r == "number" ? r : Number(r);
  return !Number.isFinite(e) || !Number.isInteger(e) ? "productPositionInvalid" : null;
}
function gi(r) {
  return r ? r.ref != null && r.ref !== "" || r.position != null : !1;
}
function mi(r) {
  const e = {};
  return (r == null ? void 0 : r.ref) != null && r.ref !== "" && (e.ref = r.ref), (r == null ? void 0 : r.position) != null && (e.position = r.position), e;
}
function or(r, e) {
  const t = { ...r ?? {} };
  for (const i of Object.keys(e)) {
    const o = e[i];
    o === void 0 ? delete t[i] : t[i] = o;
  }
  return t;
}
function ks(r, e, t) {
  let o = `${r.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e)}`;
  if (t)
    for (const [s, n] of Object.entries(t))
      n != null && (o += `&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);
  return o;
}
function Ss(r, e) {
  const t = new XMLHttpRequest();
  let i = !1;
  const o = ks(e.apiBase, e.folder, e.extraParams);
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
    t.status >= 200 && t.status < 300 && n.status === "success" ? e.onComplete(n) : pt(n) ? e.onComplete(hi(n, r)) : e.onError(new Error(n.hint || n.msg || `Upload failed (HTTP ${t.status})`));
  }), t.addEventListener("error", () => {
    i || e.onError(new Error("Network error — check your connection"));
  });
  const s = new FormData();
  if (r.file) {
    const n = {
      name: r.name,
      type: r.type
    };
    s.append("info[files[]]", JSON.stringify(n)), Object.keys(r.meta).length > 0 && s.append("meta[files[]]", JSON.stringify(r.meta)), r.tags.length > 0 && s.append("tags[files[]]", JSON.stringify(r.tags)), gi(r.product) && s.append(
      "product[files[]]",
      JSON.stringify(mi(r.product))
    ), s.append("files[]", r.file, r.name);
  }
  return t.send(s), {
    abort() {
      i = !0, t.abort();
    }
  };
}
function Lt(r) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "uppy-auth-token": r
  };
}
function $e(r) {
  return r.replace(/\/+$/, "");
}
const $s = {
  "google-drive": "drive",
  dropbox: "dropbox",
  onedrive: "onedrive",
  box: "box",
  instagram: "instagram",
  facebook: "facebook",
  unsplash: "unsplash"
};
function ut(r) {
  return $s[r] ?? r;
}
function jl(r, e) {
  const t = $e(r), i = btoa(JSON.stringify({ origin: window.location.origin })), o = ut(e);
  return `${t}/${o}/connect?state=${encodeURIComponent(i)}`;
}
async function Cs(r, e, t, i = "", o) {
  const s = $e(r), n = i ? `/${i}` : "", a = ut(e), l = await fetch(`${s}/${a}/list${n}`, {
    method: "GET",
    headers: Lt(t),
    credentials: "same-origin",
    signal: o
  });
  if (l.status === 401)
    throw new xi();
  if (!l.ok) {
    const d = await l.json().catch(() => null);
    throw new Error((d == null ? void 0 : d.message) || `Companion list failed (HTTP ${l.status})`);
  }
  return l.json();
}
async function Ps(r, e, t, i) {
  const o = $e(r), s = await fetch(`${o}/${t}`, {
    method: "GET",
    headers: Lt(e),
    credentials: "same-origin",
    signal: i
  });
  if (s.status === 401)
    throw new xi();
  if (!s.ok) {
    const n = await s.json().catch(() => null);
    throw new Error((n == null ? void 0 : n.message) || `Companion list failed (HTTP ${s.status})`);
  }
  return s.json();
}
async function Dl(r, e, t, i, o, s) {
  const n = [];
  async function a(l, d) {
    let c = null, p = !0;
    do {
      if (s != null && s.aborted) throw new DOMException("Aborted", "AbortError");
      const f = p ? await Cs(r, e, t, l, s) : await Ps(r, t, c, s);
      p = !1, c = f.nextPagePath;
      for (const k of f.items) {
        if (s != null && s.aborted) throw new DOMException("Aborted", "AbortError");
        if (k.isFolder) {
          const b = d ? `${d}/${k.name}` : k.name;
          await a(k.requestPath, b);
        } else
          n.push({ ...k, relativeFolder: d });
      }
    } while (c);
  }
  return await a(i, o), n;
}
async function Ml(r, e, t, i) {
  const o = $e(r), s = ut(e), n = i ? `q=${encodeURIComponent(t)}&${i}` : `q=${encodeURIComponent(t)}`, a = await fetch(`${o}/search/${s}/list?${n}`, {
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
async function Es(r, e, t, i, o, s = !1) {
  const n = $e(r), a = ut(e), l = s ? `${n}/search/${a}/get/${i}` : `${n}/${a}/get/${i}`, d = s ? { Accept: "application/json", "Content-Type": "application/json" } : Lt(t), c = await fetch(l, {
    method: "POST",
    headers: d,
    credentials: "same-origin",
    body: JSON.stringify({
      ...o,
      httpMethod: o.httpMethod ?? "POST",
      useFormData: o.useFormData ?? !0,
      fieldname: o.fieldname ?? "files[]"
    })
  });
  if (c.status === 401)
    throw new xi();
  if (!c.ok) {
    const p = await c.json().catch(() => null);
    throw new Error((p == null ? void 0 : p.message) || `Companion upload failed (HTTP ${c.status})`);
  }
  return c.json();
}
async function Us(r, e, t) {
  const i = $e(r), o = await fetch(`${i}/url/meta`, {
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
async function Rs(r, e, t, i) {
  const o = $e(r), s = await fetch(`${o}/url/get`, {
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
async function Bl(r, e, t) {
  const i = $e(r), o = ut(e), s = await fetch(`${i}/${o}/logout`, {
    method: "GET",
    headers: Lt(t),
    credentials: "same-origin"
  });
  return s.ok ? s.json() : { ok: !1, revoked: !1 };
}
function Os(r) {
  var o;
  const t = ((o = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(r)) == null ? void 0 : o[1]) ?? r;
  return `${/^https:\/\//i.test(r) ? "wss" : "ws"}://${t}`;
}
class xi extends Error {
  constructor() {
    super("Authentication expired"), this.name = "AuthExpiredError";
  }
}
function Gr(r, e, t) {
  let o = `${r.replace(/\/+$/, "")}/v4/files?folder=${encodeURIComponent(e)}`;
  if (t)
    for (const [s, n] of Object.entries(t))
      n != null && (o += `&${encodeURIComponent(s)}=${encodeURIComponent(n)}`);
  return o;
}
function Xr(r, e) {
  const t = {
    name: r.name,
    type: r.type,
    "filerobot-folder": e
  };
  return r.meta && Object.keys(r.meta).length > 0 && (t.meta = JSON.stringify(r.meta)), r.tags && r.tags.length > 0 && (t.tags = JSON.stringify(r.tags)), gi(r.product) && (t.product = JSON.stringify(mi(r.product))), t;
}
function Jr(r) {
  const t = `${Os(r.companionUrl)}/api/${r.token}`;
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
    var a, l, d;
    if (!o)
      try {
        const c = JSON.parse(n.data);
        switch (c.action) {
          case "progress": {
            const p = c.payload, f = p.bytesUploaded ?? 0, k = p.bytesTotal ?? (r.expectedSize || 1);
            r.onProgress(f, k);
            break;
          }
          case "success": {
            const p = c.payload;
            if (s(), i.close(), (a = p.response) != null && a.responseText)
              try {
                const f = JSON.parse(p.response.responseText);
                if (f.status === "success") {
                  r.onComplete(f);
                  return;
                }
                if (pt(f)) {
                  r.onComplete(hi(f, r.uploadFile));
                  return;
                }
                r.onError(new Error(f.msg || "Upload failed"));
                return;
              } catch {
              }
            r.onError(new Error("Upload completed but no valid response received"));
            break;
          }
          case "error": {
            const p = c.payload;
            s(), i.close();
            let f = ((l = p.error) == null ? void 0 : l.message) || "Upload failed";
            if ((d = p.response) != null && d.responseText)
              try {
                const k = JSON.parse(p.response.responseText);
                f = k.hint || k.msg || k.message || f;
              } catch {
              }
            r.onError(new Error(f));
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
function Zr(r) {
  if (r) {
    r.onmessage = null, r.onerror = null, r.onclose = null;
    try {
      r.send(JSON.stringify({ action: "cancel", payload: {} }));
    } catch {
    }
    r.close();
  }
}
function Fs(r, e) {
  const t = r.remoteInfo;
  if (!t)
    return e.onError(new Error("remoteInfo is required for companion upload")), { abort() {
    } };
  let i = !1, o = null;
  const s = Gr(e.apiBase, e.folder, e.extraParams), n = Xr(r, e.folder), a = !t.token;
  return Es(t.companionUrl, t.provider, t.token, t.requestPath, {
    fileId: t.fileId,
    endpoint: s,
    headers: e.authHeaders,
    size: t.size,
    metadata: n
  }, a).then((l) => {
    i || (o = Jr({
      companionUrl: t.companionUrl,
      token: l.token,
      uploadFile: r,
      expectedSize: t.size,
      onProgress: (d, c) => {
        i || e.onProgress(d, c);
      },
      onComplete: (d) => {
        i || e.onComplete(d);
      },
      onError: (d) => {
        i || e.onError(d);
      }
    }));
  }).catch((l) => {
    i || e.onError(l instanceof Error ? l : new Error(String(l)));
  }), {
    abort() {
      i = !0, Zr(o), o = null;
    }
  };
}
function Ts(r, e) {
  const t = r.remoteUrl;
  if (!t)
    return e.onError(new Error("Remote URL is required for URL upload")), { abort() {
    } };
  let i = !1, o = null;
  const s = new AbortController(), n = Gr(e.apiBase, e.folder, e.extraParams);
  return Us(e.companionUrl, t, s.signal).then((a) => {
    var d;
    if (i) return null;
    (d = e.onMeta) == null || d.call(e, { name: a.name, type: a.type, size: a.size });
    const l = Xr(r, e.folder);
    return a.name && (l.name = a.name), a.type && (l.type = a.type), Rs(
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
    ).then((c) => ({ result: c, size: a.size }));
  }).then((a) => {
    i || !a || (o = Jr({
      companionUrl: e.companionUrl,
      token: a.result.token,
      uploadFile: r,
      expectedSize: a.size,
      onProgress: (l, d) => {
        i || e.onProgress(l, d);
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
      i = !0, s.abort(), Zr(o), o = null;
    }
  };
}
function Jt(r) {
  "@babel/helpers - typeof";
  return Jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jt(r);
}
function Ls(r, e, t) {
  return Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function zs(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Is(r, e, t) {
  return e = st(e), As(r, bi() ? Reflect.construct(e, t || [], st(r).constructor) : e.apply(r, t));
}
function As(r, e) {
  if (e && (Jt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return js(r);
}
function js(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ds(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && ot(r, e);
}
function Zt(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Zt = function(i) {
    if (i === null || !Bs(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(i)) return e.get(i);
      e.set(i, o);
    }
    function o() {
      return Ms(i, arguments, st(this).constructor);
    }
    return o.prototype = Object.create(i.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), ot(o, i);
  }, Zt(r);
}
function Ms(r, e, t) {
  if (bi()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, e);
  var o = new (r.bind.apply(r, i))();
  return t && ot(o, t.prototype), o;
}
function bi() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bi = function() {
    return !!r;
  })();
}
function Bs(r) {
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
    if (zs(this, e), i = Is(this, e, [t]), i.originalRequest = s, i.originalResponse = n, i.causingError = o, o != null && (t += ", caused by ".concat(o.toString())), s != null) {
      var a = s.getHeader("X-Request-ID") || "n/a", l = s.getMethod(), d = s.getURL(), c = n ? n.getStatus() : "n/a", p = n ? n.getBody() || "" : "n/a";
      t += ", originated from request (method: ".concat(l, ", url: ").concat(d, ", response code: ").concat(c, ", response text: ").concat(p, ", request id: ").concat(a, ")");
    }
    return i.message = t, i;
  }
  return Ds(e, r), Ls(e);
})(/* @__PURE__ */ Zt(Error));
function nt(r) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, nt(r);
}
function Ns(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Hs(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Vs(i.key), i);
  }
}
function qs(r, e, t) {
  return e && Hs(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Vs(r) {
  var e = Ks(r, "string");
  return nt(e) == "symbol" ? e : e + "";
}
function Ks(r, e) {
  if (nt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (nt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Ys = /* @__PURE__ */ (function() {
  function r() {
    Ns(this, r);
  }
  return qs(r, [{
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
const Qr = "3.7.8", Ws = Qr, Ye = typeof Buffer == "function", sr = typeof TextDecoder == "function" ? new TextDecoder() : void 0, nr = typeof TextEncoder == "function" ? new TextEncoder() : void 0, Gs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ze = Array.prototype.slice.call(Gs), vt = ((r) => {
  let e = {};
  return r.forEach((t, i) => e[t] = i), e;
})(Ze), Xs = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, ie = String.fromCharCode.bind(String), ar = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (r) => new Uint8Array(Array.prototype.slice.call(r, 0)), eo = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), to = (r) => r.replace(/[^A-Za-z0-9\+\/]/g, ""), io = (r) => {
  let e, t, i, o, s = "";
  const n = r.length % 3;
  for (let a = 0; a < r.length; ) {
    if ((t = r.charCodeAt(a++)) > 255 || (i = r.charCodeAt(a++)) > 255 || (o = r.charCodeAt(a++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | i << 8 | o, s += Ze[e >> 18 & 63] + Ze[e >> 12 & 63] + Ze[e >> 6 & 63] + Ze[e & 63];
  }
  return n ? s.slice(0, n - 3) + "===".substring(n) : s;
}, vi = typeof btoa == "function" ? (r) => btoa(r) : Ye ? (r) => Buffer.from(r, "binary").toString("base64") : io, Qt = Ye ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let i = 0, o = r.length; i < o; i += 4096)
    t.push(ie.apply(null, r.subarray(i, i + 4096)));
  return vi(t.join(""));
}, wt = (r, e = !1) => e ? eo(Qt(r)) : Qt(r), Js = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? ie(192 | e >>> 6) + ie(128 | e & 63) : ie(224 | e >>> 12 & 15) + ie(128 | e >>> 6 & 63) + ie(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return ie(240 | e >>> 18 & 7) + ie(128 | e >>> 12 & 63) + ie(128 | e >>> 6 & 63) + ie(128 | e & 63);
  }
}, Zs = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, ro = (r) => r.replace(Zs, Js), lr = Ye ? (r) => Buffer.from(r, "utf8").toString("base64") : nr ? (r) => Qt(nr.encode(r)) : (r) => vi(ro(r)), Be = (r, e = !1) => e ? eo(lr(r)) : lr(r), dr = (r) => Be(r, !0), Qs = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, en = (r) => {
  switch (r.length) {
    case 4:
      var e = (7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3), t = e - 65536;
      return ie((t >>> 10) + 55296) + ie((t & 1023) + 56320);
    case 3:
      return ie((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));
    default:
      return ie((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
  }
}, oo = (r) => r.replace(Qs, en), so = (r) => {
  if (r = r.replace(/\s+/g, ""), !Xs.test(r))
    throw new TypeError("malformed base64.");
  r += "==".slice(2 - (r.length & 3));
  let e, t, i, o = [];
  for (let s = 0; s < r.length; )
    e = vt[r.charAt(s++)] << 18 | vt[r.charAt(s++)] << 12 | (t = vt[r.charAt(s++)]) << 6 | (i = vt[r.charAt(s++)]), t === 64 ? o.push(ie(e >> 16 & 255)) : i === 64 ? o.push(ie(e >> 16 & 255, e >> 8 & 255)) : o.push(ie(e >> 16 & 255, e >> 8 & 255, e & 255));
  return o.join("");
}, yi = typeof atob == "function" ? (r) => atob(to(r)) : Ye ? (r) => Buffer.from(r, "base64").toString("binary") : so, no = Ye ? (r) => ar(Buffer.from(r, "base64")) : (r) => ar(yi(r).split("").map((e) => e.charCodeAt(0))), ao = (r) => no(lo(r)), tn = Ye ? (r) => Buffer.from(r, "base64").toString("utf8") : sr ? (r) => sr.decode(no(r)) : (r) => oo(yi(r)), lo = (r) => to(r.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), ei = (r) => tn(lo(r)), rn = (r) => {
  if (typeof r != "string")
    return !1;
  const e = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, co = (r) => ({
  value: r,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), po = function() {
  const r = (e, t) => Object.defineProperty(String.prototype, e, co(t));
  r("fromBase64", function() {
    return ei(this);
  }), r("toBase64", function(e) {
    return Be(this, e);
  }), r("toBase64URI", function() {
    return Be(this, !0);
  }), r("toBase64URL", function() {
    return Be(this, !0);
  }), r("toUint8Array", function() {
    return ao(this);
  });
}, uo = function() {
  const r = (e, t) => Object.defineProperty(Uint8Array.prototype, e, co(t));
  r("toBase64", function(e) {
    return wt(this, e);
  }), r("toBase64URI", function() {
    return wt(this, !0);
  }), r("toBase64URL", function() {
    return wt(this, !0);
  });
}, on = () => {
  po(), uo();
}, sn = {
  version: Qr,
  VERSION: Ws,
  atob: yi,
  atobPolyfill: so,
  btoa: vi,
  btoaPolyfill: io,
  fromBase64: ei,
  toBase64: Be,
  encode: Be,
  encodeURI: dr,
  encodeURL: dr,
  utob: ro,
  btou: oo,
  decode: ei,
  isValid: rn,
  fromUint8Array: wt,
  toUint8Array: ao,
  extendString: po,
  extendUint8Array: uo,
  extendBuiltins: on
};
var cr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Bt, pr;
function an() {
  return pr || (pr = 1, Bt = function(e, t) {
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
  }), Bt;
}
var yt = {}, ur;
function ln() {
  if (ur) return yt;
  ur = 1;
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
    for (var a = /([^=?#&]+)=?([^&]*)/g, l = {}, d; d = a.exec(n); ) {
      var c = t(d[1]), p = t(d[2]);
      c === null || p === null || c in l || (l[c] = p);
    }
    return l;
  }
  function s(n, a) {
    a = a || "";
    var l = [], d, c;
    typeof a != "string" && (a = "?");
    for (c in n)
      if (r.call(n, c)) {
        if (d = n[c], !d && (d === null || d === e || isNaN(d)) && (d = ""), c = i(c), d = i(d), c === null || d === null) continue;
        l.push(c + "=" + d);
      }
    return l.length ? a + l.join("&") : "";
  }
  return yt.stringify = s, yt.parse = o, yt;
}
var Nt, fr;
function dn() {
  if (fr) return Nt;
  fr = 1;
  var r = an(), e = ln(), t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, i = /[\n\r\t]/g, o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, s = /:\d+$/, n = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, a = /^[a-zA-Z]:/;
  function l(_) {
    return (_ || "").toString().replace(t, "");
  }
  var d = [
    ["#", "hash"],
    // Extract from the back.
    ["?", "query"],
    // Extract from the back.
    function(v, w) {
      return f(w.protocol) ? v.replace(/\\/g, "/") : v;
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
  ], c = { hash: 1, query: 1 };
  function p(_) {
    var v;
    typeof window < "u" ? v = window : typeof cr < "u" ? v = cr : typeof self < "u" ? v = self : v = {};
    var w = v.location || {};
    _ = _ || w;
    var x = {}, R = typeof _, P;
    if (_.protocol === "blob:")
      x = new y(unescape(_.pathname), {});
    else if (R === "string") {
      x = new y(_, {});
      for (P in c) delete x[P];
    } else if (R === "object") {
      for (P in _)
        P in c || (x[P] = _[P]);
      x.slashes === void 0 && (x.slashes = o.test(_.href));
    }
    return x;
  }
  function f(_) {
    return _ === "file:" || _ === "ftp:" || _ === "http:" || _ === "https:" || _ === "ws:" || _ === "wss:";
  }
  function k(_, v) {
    _ = l(_), _ = _.replace(i, ""), v = v || {};
    var w = n.exec(_), x = w[1] ? w[1].toLowerCase() : "", R = !!w[2], P = !!w[3], I = 0, L;
    return R ? P ? (L = w[2] + w[3] + w[4], I = w[2].length + w[3].length) : (L = w[2] + w[4], I = w[2].length) : P ? (L = w[3] + w[4], I = w[3].length) : L = w[4], x === "file:" ? I >= 2 && (L = L.slice(2)) : f(x) ? L = w[4] : x ? R && (L = L.slice(2)) : I >= 2 && f(v.protocol) && (L = w[4]), {
      protocol: x,
      slashes: R || f(x),
      slashesCount: I,
      rest: L
    };
  }
  function b(_, v) {
    if (_ === "") return v;
    for (var w = (v || "/").split("/").slice(0, -1).concat(_.split("/")), x = w.length, R = w[x - 1], P = !1, I = 0; x--; )
      w[x] === "." ? w.splice(x, 1) : w[x] === ".." ? (w.splice(x, 1), I++) : I && (x === 0 && (P = !0), w.splice(x, 1), I--);
    return P && w.unshift(""), (R === "." || R === "..") && w.push(""), w.join("/");
  }
  function y(_, v, w) {
    if (_ = l(_), _ = _.replace(i, ""), !(this instanceof y))
      return new y(_, v, w);
    var x, R, P, I, L, T, J = d.slice(), ce = typeof v, F = this, Y = 0;
    for (ce !== "object" && ce !== "string" && (w = v, v = null), w && typeof w != "function" && (w = e.parse), v = p(v), R = k(_ || "", v), x = !R.protocol && !R.slashes, F.slashes = R.slashes || x && v.slashes, F.protocol = R.protocol || v.protocol || "", _ = R.rest, (R.protocol === "file:" && (R.slashesCount !== 2 || a.test(_)) || !R.slashes && (R.protocol || R.slashesCount < 2 || !f(F.protocol))) && (J[3] = [/(.*)/, "pathname"]); Y < J.length; Y++) {
      if (I = J[Y], typeof I == "function") {
        _ = I(_, F);
        continue;
      }
      P = I[0], T = I[1], P !== P ? F[T] = _ : typeof P == "string" ? (L = P === "@" ? _.lastIndexOf(P) : _.indexOf(P), ~L && (typeof I[2] == "number" ? (F[T] = _.slice(0, L), _ = _.slice(L + I[2])) : (F[T] = _.slice(L), _ = _.slice(0, L)))) : (L = P.exec(_)) && (F[T] = L[1], _ = _.slice(0, L.index)), F[T] = F[T] || x && I[3] && v[T] || "", I[4] && (F[T] = F[T].toLowerCase());
    }
    w && (F.query = w(F.query)), x && v.slashes && F.pathname.charAt(0) !== "/" && (F.pathname !== "" || v.pathname !== "") && (F.pathname = b(F.pathname, v.pathname)), F.pathname.charAt(0) !== "/" && f(F.protocol) && (F.pathname = "/" + F.pathname), r(F.port, F.protocol) || (F.host = F.hostname, F.port = ""), F.username = F.password = "", F.auth && (L = F.auth.indexOf(":"), ~L ? (F.username = F.auth.slice(0, L), F.username = encodeURIComponent(decodeURIComponent(F.username)), F.password = F.auth.slice(L + 1), F.password = encodeURIComponent(decodeURIComponent(F.password))) : F.username = encodeURIComponent(decodeURIComponent(F.auth)), F.auth = F.password ? F.username + ":" + F.password : F.username), F.origin = F.protocol !== "file:" && f(F.protocol) && F.host ? F.protocol + "//" + F.host : "null", F.href = F.toString();
  }
  function E(_, v, w) {
    var x = this;
    switch (_) {
      case "query":
        typeof v == "string" && v.length && (v = (w || e.parse)(v)), x[_] = v;
        break;
      case "port":
        x[_] = v, r(v, x.protocol) ? v && (x.host = x.hostname + ":" + v) : (x.host = x.hostname, x[_] = "");
        break;
      case "hostname":
        x[_] = v, x.port && (v += ":" + x.port), x.host = v;
        break;
      case "host":
        x[_] = v, s.test(v) ? (v = v.split(":"), x.port = v.pop(), x.hostname = v.join(":")) : (x.hostname = v, x.port = "");
        break;
      case "protocol":
        x.protocol = v.toLowerCase(), x.slashes = !w;
        break;
      case "pathname":
      case "hash":
        if (v) {
          var R = _ === "pathname" ? "/" : "#";
          x[_] = v.charAt(0) !== R ? R + v : v;
        } else
          x[_] = v;
        break;
      case "username":
      case "password":
        x[_] = encodeURIComponent(v);
        break;
      case "auth":
        var P = v.indexOf(":");
        ~P ? (x.username = v.slice(0, P), x.username = encodeURIComponent(decodeURIComponent(x.username)), x.password = v.slice(P + 1), x.password = encodeURIComponent(decodeURIComponent(x.password))) : x.username = encodeURIComponent(decodeURIComponent(v));
    }
    for (var I = 0; I < d.length; I++) {
      var L = d[I];
      L[4] && (x[L[1]] = x[L[1]].toLowerCase());
    }
    return x.auth = x.password ? x.username + ":" + x.password : x.username, x.origin = x.protocol !== "file:" && f(x.protocol) && x.host ? x.protocol + "//" + x.host : "null", x.href = x.toString(), x;
  }
  function A(_) {
    (!_ || typeof _ != "function") && (_ = e.stringify);
    var v, w = this, x = w.host, R = w.protocol;
    R && R.charAt(R.length - 1) !== ":" && (R += ":");
    var P = R + (w.protocol && w.slashes || f(w.protocol) ? "//" : "");
    return w.username ? (P += w.username, w.password && (P += ":" + w.password), P += "@") : w.password ? (P += ":" + w.password, P += "@") : w.protocol !== "file:" && f(w.protocol) && !x && w.pathname !== "/" && (P += "@"), (x[x.length - 1] === ":" || s.test(w.hostname) && !w.port) && (x += ":"), P += x + w.pathname, v = typeof w.query == "object" ? _(w.query) : w.query, v && (P += v.charAt(0) !== "?" ? "?" + v : v), w.hash && (P += w.hash), P;
  }
  return y.prototype = { set: E, toString: A }, y.extractProtocol = k, y.location = p, y.trimLeft = l, y.qs = e, Nt = y, Nt;
}
var cn = dn();
const pn = /* @__PURE__ */ nn(cn);
function un() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    var e = Math.random() * 16 | 0, t = r === "x" ? e : e & 3 | 8;
    return t.toString(16);
  });
}
function ti() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  ti = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(m, h, g) {
    m[h] = g.value;
  }, s = typeof Symbol == "function" ? Symbol : {}, n = s.iterator || "@@iterator", a = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
  function d(m, h, g) {
    return Object.defineProperty(m, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }), m[h];
  }
  try {
    d({}, "");
  } catch {
    d = function(g, C, U) {
      return g[C] = U;
    };
  }
  function c(m, h, g, C) {
    var U = h && h.prototype instanceof A ? h : A, S = Object.create(U.prototype), j = new Y(C || []);
    return o(S, "_invoke", { value: T(m, g, j) }), S;
  }
  function p(m, h, g) {
    try {
      return { type: "normal", arg: m.call(h, g) };
    } catch (C) {
      return { type: "throw", arg: C };
    }
  }
  e.wrap = c;
  var f = "suspendedStart", k = "suspendedYield", b = "executing", y = "completed", E = {};
  function A() {
  }
  function _() {
  }
  function v() {
  }
  var w = {};
  d(w, n, function() {
    return this;
  });
  var x = Object.getPrototypeOf, R = x && x(x(he([])));
  R && R !== t && i.call(R, n) && (w = R);
  var P = v.prototype = A.prototype = Object.create(w);
  function I(m) {
    ["next", "throw", "return"].forEach(function(h) {
      d(m, h, function(g) {
        return this._invoke(h, g);
      });
    });
  }
  function L(m, h) {
    function g(U, S, j, H) {
      var q = p(m[U], m, S);
      if (q.type !== "throw") {
        var Q = q.arg, te = Q.value;
        return te && Oe(te) == "object" && i.call(te, "__await") ? h.resolve(te.__await).then(function(se) {
          g("next", se, j, H);
        }, function(se) {
          g("throw", se, j, H);
        }) : h.resolve(te).then(function(se) {
          Q.value = se, j(Q);
        }, function(se) {
          return g("throw", se, j, H);
        });
      }
      H(q.arg);
    }
    var C;
    o(this, "_invoke", { value: function(S, j) {
      function H() {
        return new h(function(q, Q) {
          g(S, j, q, Q);
        });
      }
      return C = C ? C.then(H, H) : H();
    } });
  }
  function T(m, h, g) {
    var C = f;
    return function(U, S) {
      if (C === b) throw Error("Generator is already running");
      if (C === y) {
        if (U === "throw") throw S;
        return { value: r, done: !0 };
      }
      for (g.method = U, g.arg = S; ; ) {
        var j = g.delegate;
        if (j) {
          var H = J(j, g);
          if (H) {
            if (H === E) continue;
            return H;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (C === f) throw C = y, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        C = b;
        var q = p(m, h, g);
        if (q.type === "normal") {
          if (C = g.done ? y : k, q.arg === E) continue;
          return { value: q.arg, done: g.done };
        }
        q.type === "throw" && (C = y, g.method = "throw", g.arg = q.arg);
      }
    };
  }
  function J(m, h) {
    var g = h.method, C = m.iterator[g];
    if (C === r) return h.delegate = null, g === "throw" && m.iterator.return && (h.method = "return", h.arg = r, J(m, h), h.method === "throw") || g !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + g + "' method")), E;
    var U = p(C, m.iterator, h.arg);
    if (U.type === "throw") return h.method = "throw", h.arg = U.arg, h.delegate = null, E;
    var S = U.arg;
    return S ? S.done ? (h[m.resultName] = S.value, h.next = m.nextLoc, h.method !== "return" && (h.method = "next", h.arg = r), h.delegate = null, E) : S : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, E);
  }
  function ce(m) {
    var h = { tryLoc: m[0] };
    1 in m && (h.catchLoc = m[1]), 2 in m && (h.finallyLoc = m[2], h.afterLoc = m[3]), this.tryEntries.push(h);
  }
  function F(m) {
    var h = m.completion || {};
    h.type = "normal", delete h.arg, m.completion = h;
  }
  function Y(m) {
    this.tryEntries = [{ tryLoc: "root" }], m.forEach(ce, this), this.reset(!0);
  }
  function he(m) {
    if (m || m === "") {
      var h = m[n];
      if (h) return h.call(m);
      if (typeof m.next == "function") return m;
      if (!isNaN(m.length)) {
        var g = -1, C = function U() {
          for (; ++g < m.length; ) if (i.call(m, g)) return U.value = m[g], U.done = !1, U;
          return U.value = r, U.done = !0, U;
        };
        return C.next = C;
      }
    }
    throw new TypeError(Oe(m) + " is not iterable");
  }
  return _.prototype = v, o(P, "constructor", { value: v, configurable: !0 }), o(v, "constructor", { value: _, configurable: !0 }), _.displayName = d(v, l, "GeneratorFunction"), e.isGeneratorFunction = function(m) {
    var h = typeof m == "function" && m.constructor;
    return !!h && (h === _ || (h.displayName || h.name) === "GeneratorFunction");
  }, e.mark = function(m) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : (m.__proto__ = v, d(m, l, "GeneratorFunction")), m.prototype = Object.create(P), m;
  }, e.awrap = function(m) {
    return { __await: m };
  }, I(L.prototype), d(L.prototype, a, function() {
    return this;
  }), e.AsyncIterator = L, e.async = function(m, h, g, C, U) {
    U === void 0 && (U = Promise);
    var S = new L(c(m, h, g, C), U);
    return e.isGeneratorFunction(h) ? S : S.next().then(function(j) {
      return j.done ? j.value : S.next();
    });
  }, I(P), d(P, l, "Generator"), d(P, n, function() {
    return this;
  }), d(P, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(m) {
    var h = Object(m), g = [];
    for (var C in h) g.push(C);
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
    function C(Q, te) {
      return j.type = "throw", j.arg = h, g.next = Q, te && (g.method = "next", g.arg = r), !!te;
    }
    for (var U = this.tryEntries.length - 1; U >= 0; --U) {
      var S = this.tryEntries[U], j = S.completion;
      if (S.tryLoc === "root") return C("end");
      if (S.tryLoc <= this.prev) {
        var H = i.call(S, "catchLoc"), q = i.call(S, "finallyLoc");
        if (H && q) {
          if (this.prev < S.catchLoc) return C(S.catchLoc, !0);
          if (this.prev < S.finallyLoc) return C(S.finallyLoc);
        } else if (H) {
          if (this.prev < S.catchLoc) return C(S.catchLoc, !0);
        } else {
          if (!q) throw Error("try statement without catch or finally");
          if (this.prev < S.finallyLoc) return C(S.finallyLoc);
        }
      }
    }
  }, abrupt: function(h, g) {
    for (var C = this.tryEntries.length - 1; C >= 0; --C) {
      var U = this.tryEntries[C];
      if (U.tryLoc <= this.prev && i.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
        var S = U;
        break;
      }
    }
    S && (h === "break" || h === "continue") && S.tryLoc <= g && g <= S.finallyLoc && (S = null);
    var j = S ? S.completion : {};
    return j.type = h, j.arg = g, S ? (this.method = "next", this.next = S.finallyLoc, E) : this.complete(j);
  }, complete: function(h, g) {
    if (h.type === "throw") throw h.arg;
    return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && g && (this.next = g), E;
  }, finish: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var C = this.tryEntries[g];
      if (C.finallyLoc === h) return this.complete(C.completion, C.afterLoc), F(C), E;
    }
  }, catch: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var C = this.tryEntries[g];
      if (C.tryLoc === h) {
        var U = C.completion;
        if (U.type === "throw") {
          var S = U.arg;
          F(C);
        }
        return S;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(h, g, C) {
    return this.delegate = { iterator: he(h), resultName: g, nextLoc: C }, this.method === "next" && (this.arg = r), E;
  } }, e;
}
function hr(r, e, t, i, o, s, n) {
  try {
    var a = r[s](n), l = a.value;
  } catch (d) {
    t(d);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, o);
}
function fn(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var s = r.apply(e, t);
      function n(l) {
        hr(s, i, o, n, a, "next", l);
      }
      function a(l) {
        hr(s, i, o, n, a, "throw", l);
      }
      n(void 0);
    });
  };
}
function fo(r, e) {
  return mn(r) || gn(r, e) || ho(r, e) || hn();
}
function hn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gn(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var i, o, s, n, a = [], l = !0, d = !1;
    try {
      if (s = (t = t.call(r)).next, e !== 0) for (; !(l = (i = s.call(t)).done) && (a.push(i.value), a.length !== e); l = !0) ;
    } catch (c) {
      d = !0, o = c;
    } finally {
      try {
        if (!l && t.return != null && (n = t.return(), Object(n) !== n)) return;
      } finally {
        if (d) throw o;
      }
    }
    return a;
  }
}
function mn(r) {
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
function xn(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = ho(r)) || e) {
      t && (r = t);
      var i = 0, o = function() {
      };
      return { s: o, n: function() {
        return i >= r.length ? { done: !0 } : { done: !1, value: r[i++] };
      }, e: function(d) {
        throw d;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0, n = !1, a;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var d = t.next();
    return s = d.done, d;
  }, e: function(d) {
    n = !0, a = d;
  }, f: function() {
    try {
      !s && t.return != null && t.return();
    } finally {
      if (n) throw a;
    }
  } };
}
function ho(r, e) {
  if (r) {
    if (typeof r == "string") return gr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return gr(r, e);
  }
}
function gr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function mr(r, e) {
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
    e % 2 ? mr(Object(t), !0).forEach(function(i) {
      bn(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : mr(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function bn(r, e, t) {
  return e = go(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function vn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xr(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, go(i.key), i);
  }
}
function yn(r, e, t) {
  return e && xr(r.prototype, e), t && xr(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function go(r) {
  var e = wn(r, "string");
  return Oe(e) == "symbol" ? e : e + "";
}
function wn(r, e) {
  if (Oe(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Oe(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var _t = "tus-v1", kt = "ietf-draft-03", Qe = "ietf-draft-05", _n = {
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
  onShouldRetry: mo,
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
  protocol: _t
}, Ut = /* @__PURE__ */ (function() {
  function r(e, t) {
    vn(this, r), "resume" in t && console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."), this.options = t, this.options.chunkSize = Number(this.options.chunkSize), this._urlStorage = this.options.urlStorage, this.file = e, this.url = null, this._req = null, this._fingerprint = null, this._urlStorageKey = null, this._offset = null, this._aborted = !1, this._size = null, this._source = null, this._retryAttempt = 0, this._retryTimeout = null, this._offsetBeforeRetry = 0, this._parallelUploads = null, this._parallelUploadUrls = null;
  }
  return yn(r, [{
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
      if (![_t, kt, Qe].includes(this.options.protocol)) {
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
      var n = this._parallelUploadUrls != null ? this._parallelUploadUrls.length : this.options.parallelUploads, a = (t = this.options.parallelUploadBoundaries) !== null && t !== void 0 ? t : Sn(this._source.size, n);
      this._parallelUploadUrls && a.forEach(function(c, p) {
        c.uploadUrl = i._parallelUploadUrls[p] || null;
      }), this._parallelUploadUrls = new Array(a.length);
      var l = a.map(function(c, p) {
        var f = 0;
        return i._source.slice(c.start, c.end).then(function(k) {
          var b = k.value;
          return new Promise(function(y, E) {
            var A = ze(ze({}, i.options), {}, {
              // If available, the partial upload should be resumed from a previous URL.
              uploadUrl: c.uploadUrl || null,
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
              onSuccess: y,
              onError: E,
              // Based in the progress for this partial upload, calculate the progress
              // for the entire final upload.
              onProgress: function(w) {
                s = s - f + w, f = w, i._emitProgress(s, o);
              },
              // Wait until every partial upload has an upload URL, so we can add
              // them to the URL storage.
              onUploadUrlAvailable: function() {
                i._parallelUploadUrls[p] = _.url, i._parallelUploadUrls.filter(function(w) {
                  return !!w;
                }).length === a.length && i._saveUploadInUrlStorage();
              }
            }), _ = new r(b, A);
            _.start(), i._parallelUploads.push(_);
          });
        });
      }), d;
      Promise.all(l).then(function() {
        d = i._openRequest("POST", i.options.endpoint), d.setHeader("Upload-Concat", "final;".concat(i._parallelUploadUrls.join(" ")));
        var c = br(i.options.metadata);
        return c !== "" && d.setHeader("Upload-Metadata", c), i._sendRequest(d, null);
      }).then(function(c) {
        if (!je(c.getStatus(), 200)) {
          i._emitHttpError(d, c, "tus: unexpected response while creating upload");
          return;
        }
        var p = c.getHeader("Location");
        if (p == null) {
          i._emitHttpError(d, c, "tus: invalid or missing Location header");
          return;
        }
        i.url = _r(i.options.endpoint, p), "Created upload at ".concat(i.url), i._emitSuccess(c);
      }).catch(function(c) {
        i._emitError(c);
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
        var o = xn(this._parallelUploads), s;
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
          if (o && (this._retryAttempt = 0), wr(t, this._retryAttempt, this.options)) {
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
      var o = br(this.options.metadata);
      o !== "" && i.setHeader("Upload-Metadata", o);
      var s;
      this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred ? (this._offset = 0, s = this._addChunkToRequest(i)) : ((this.options.protocol === kt || this.options.protocol === Qe) && i.setHeader("Upload-Complete", "?0"), s = this._sendRequest(i, null)), s.then(function(n) {
        if (!je(n.getStatus(), 200)) {
          t._emitHttpError(i, n, "tus: unexpected response while creating upload");
          return;
        }
        var a = n.getHeader("Location");
        if (a == null) {
          t._emitHttpError(i, n, "tus: invalid or missing Location header");
          return;
        }
        if (t.url = _r(t.options.endpoint, a), "Created upload at ".concat(t.url), typeof t.options.onUploadUrlAvailable == "function" && t.options.onUploadUrlAvailable(), t._size === 0) {
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
        if (!je(n, 200)) {
          if (n === 423) {
            t._emitHttpError(i, s, "tus: upload is currently locked; retry later");
            return;
          }
          if (je(n, 400) && t._removeFromUrlStorage(), !t.options.endpoint) {
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
        if (Number.isNaN(l) && !t.options.uploadLengthDeferred && t.options.protocol === _t) {
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
          if (!je(s.getStatus(), 200)) {
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
      }), this.options.protocol === _t ? t.setHeader("Content-Type", "application/offset+octet-stream") : this.options.protocol === Qe && t.setHeader("Content-Type", "application/partial-upload"), (s === Number.POSITIVE_INFINITY || s > this._size) && !this.options.uploadLengthDeferred && (s = this._size), this._source.slice(o, s).then(function(n) {
        var a = n.value, l = n.done, d = a != null && a.size ? a.size : 0;
        i.options.uploadLengthDeferred && l && (i._size = i._offset + d, t.setHeader("Upload-Length", "".concat(i._size)));
        var c = i._offset + d;
        return !i.options.uploadLengthDeferred && l && c !== i._size ? Promise.reject(new Error("upload was configured with a size of ".concat(i._size, " bytes, but the source is done after ").concat(c, " bytes"))) : a === null ? i._sendRequest(t) : ((i.options.protocol === kt || i.options.protocol === Qe) && t.setHeader("Upload-Complete", l ? "?1" : "?0"), i._emitProgress(i._offset, i._size), i._sendRequest(t, a));
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
      var o = vr(t, i, this.options);
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
      return yr(t, i, this.options);
    }
  }], [{
    key: "terminate",
    value: function(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = vr("DELETE", t, i);
      return yr(o, null, i).then(function(s) {
        if (s.getStatus() !== 204)
          throw new Je("tus: unexpected response while terminating upload", null, o, s);
      }).catch(function(s) {
        if (s instanceof Je || (s = new Je("tus: failed to terminate upload", s, o, null)), !wr(s, 0, i))
          throw s;
        var n = i.retryDelays[0], a = i.retryDelays.slice(1), l = ze(ze({}, i), {}, {
          retryDelays: a
        });
        return new Promise(function(d) {
          return setTimeout(d, n);
        }).then(function() {
          return r.terminate(t, l);
        });
      });
    }
  }]);
})();
function br(r) {
  return Object.entries(r).map(function(e) {
    var t = fo(e, 2), i = t[0], o = t[1];
    return "".concat(i, " ").concat(sn.encode(String(o)));
  }).join(",");
}
function je(r, e) {
  return r >= e && r < e + 100;
}
function vr(r, e, t) {
  var i = t.httpStack.createRequest(r, e);
  t.protocol === kt ? i.setHeader("Upload-Draft-Interop-Version", "5") : t.protocol === Qe ? i.setHeader("Upload-Draft-Interop-Version", "6") : i.setHeader("Tus-Resumable", "1.0.0");
  for (var o = t.headers || {}, s = 0, n = Object.entries(o); s < n.length; s++) {
    var a = fo(n[s], 2), l = a[0], d = a[1];
    i.setHeader(l, d);
  }
  if (t.addRequestId) {
    var c = un();
    i.setHeader("X-Request-ID", c);
  }
  return i;
}
function yr(r, e, t) {
  return ii.apply(this, arguments);
}
function ii() {
  return ii = fn(/* @__PURE__ */ ti().mark(function r(e, t, i) {
    var o;
    return ti().wrap(function(n) {
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
  })), ii.apply(this, arguments);
}
function kn() {
  var r = !0;
  return typeof navigator < "u" && navigator.onLine === !1 && (r = !1), r;
}
function wr(r, e, t) {
  return t.retryDelays == null || e >= t.retryDelays.length || r.originalRequest == null ? !1 : t && typeof t.onShouldRetry == "function" ? t.onShouldRetry(r, e, t) : mo(r);
}
function mo(r) {
  var e = r.originalResponse ? r.originalResponse.getStatus() : 0;
  return (!je(e, 400) || e === 409 || e === 423) && kn();
}
function _r(r, e) {
  return new pn(e, r).toString();
}
function Sn(r, e) {
  for (var t = Math.floor(r / e), i = [], o = 0; o < e; o++)
    i.push({
      start: t * o,
      end: t * (o + 1)
    });
  return i[e - 1].end = r, i;
}
Ut.defaultOptions = _n;
var xo = function() {
  return typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
};
function $n(r) {
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
var Cn = function() {
  return typeof window < "u" && (typeof window.PhoneGap < "u" || typeof window.Cordova < "u" || typeof window.cordova < "u");
};
function Pn(r) {
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
function En(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Un(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, On(i.key), i);
  }
}
function Rn(r, e, t) {
  return e && Un(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function On(r) {
  var e = Fn(r, "string");
  return at(e) == "symbol" ? e : e + "";
}
function Fn(r, e) {
  if (at(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (at(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var kr = /* @__PURE__ */ (function() {
  function r(e) {
    En(this, r), this._file = e, this.size = e.size;
  }
  return Rn(r, [{
    key: "slice",
    value: function(t, i) {
      if (Cn())
        return Pn(this._file.slice(t, i));
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
function Tn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ln(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, In(i.key), i);
  }
}
function zn(r, e, t) {
  return e && Ln(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function In(r) {
  var e = An(r, "string");
  return lt(e) == "symbol" ? e : e + "";
}
function An(r, e) {
  if (lt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (lt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function Sr(r) {
  return r === void 0 ? 0 : r.size !== void 0 ? r.size : r.length;
}
function jn(r, e) {
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
var Dn = /* @__PURE__ */ (function() {
  function r(e) {
    Tn(this, r), this._buffer = void 0, this._bufferOffset = 0, this._reader = e, this._done = !1;
  }
  return zn(r, [{
    key: "slice",
    value: function(t, i) {
      return t < this._bufferOffset ? Promise.reject(new Error("Requested data is before the reader's current offset")) : this._readUntilEnoughDataOrDone(t, i);
    }
  }, {
    key: "_readUntilEnoughDataOrDone",
    value: function(t, i) {
      var o = this, s = i <= this._bufferOffset + Sr(this._buffer);
      if (this._done || s) {
        var n = this._getDataFromBuffer(t, i), a = n == null ? this._done : !1;
        return Promise.resolve({
          value: n,
          done: a
        });
      }
      return this._reader.read().then(function(l) {
        var d = l.value, c = l.done;
        return c ? o._done = !0 : o._buffer === void 0 ? o._buffer = d : o._buffer = jn(o._buffer, d), o._readUntilEnoughDataOrDone(t, i);
      });
    }
  }, {
    key: "_getDataFromBuffer",
    value: function(t, i) {
      t > this._bufferOffset && (this._buffer = this._buffer.slice(t - this._bufferOffset), this._bufferOffset = t);
      var o = Sr(this._buffer) === 0;
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
function ri() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  ri = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, i = t.hasOwnProperty, o = Object.defineProperty || function(m, h, g) {
    m[h] = g.value;
  }, s = typeof Symbol == "function" ? Symbol : {}, n = s.iterator || "@@iterator", a = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
  function d(m, h, g) {
    return Object.defineProperty(m, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }), m[h];
  }
  try {
    d({}, "");
  } catch {
    d = function(g, C, U) {
      return g[C] = U;
    };
  }
  function c(m, h, g, C) {
    var U = h && h.prototype instanceof A ? h : A, S = Object.create(U.prototype), j = new Y(C || []);
    return o(S, "_invoke", { value: T(m, g, j) }), S;
  }
  function p(m, h, g) {
    try {
      return { type: "normal", arg: m.call(h, g) };
    } catch (C) {
      return { type: "throw", arg: C };
    }
  }
  e.wrap = c;
  var f = "suspendedStart", k = "suspendedYield", b = "executing", y = "completed", E = {};
  function A() {
  }
  function _() {
  }
  function v() {
  }
  var w = {};
  d(w, n, function() {
    return this;
  });
  var x = Object.getPrototypeOf, R = x && x(x(he([])));
  R && R !== t && i.call(R, n) && (w = R);
  var P = v.prototype = A.prototype = Object.create(w);
  function I(m) {
    ["next", "throw", "return"].forEach(function(h) {
      d(m, h, function(g) {
        return this._invoke(h, g);
      });
    });
  }
  function L(m, h) {
    function g(U, S, j, H) {
      var q = p(m[U], m, S);
      if (q.type !== "throw") {
        var Q = q.arg, te = Q.value;
        return te && Fe(te) == "object" && i.call(te, "__await") ? h.resolve(te.__await).then(function(se) {
          g("next", se, j, H);
        }, function(se) {
          g("throw", se, j, H);
        }) : h.resolve(te).then(function(se) {
          Q.value = se, j(Q);
        }, function(se) {
          return g("throw", se, j, H);
        });
      }
      H(q.arg);
    }
    var C;
    o(this, "_invoke", { value: function(S, j) {
      function H() {
        return new h(function(q, Q) {
          g(S, j, q, Q);
        });
      }
      return C = C ? C.then(H, H) : H();
    } });
  }
  function T(m, h, g) {
    var C = f;
    return function(U, S) {
      if (C === b) throw Error("Generator is already running");
      if (C === y) {
        if (U === "throw") throw S;
        return { value: r, done: !0 };
      }
      for (g.method = U, g.arg = S; ; ) {
        var j = g.delegate;
        if (j) {
          var H = J(j, g);
          if (H) {
            if (H === E) continue;
            return H;
          }
        }
        if (g.method === "next") g.sent = g._sent = g.arg;
        else if (g.method === "throw") {
          if (C === f) throw C = y, g.arg;
          g.dispatchException(g.arg);
        } else g.method === "return" && g.abrupt("return", g.arg);
        C = b;
        var q = p(m, h, g);
        if (q.type === "normal") {
          if (C = g.done ? y : k, q.arg === E) continue;
          return { value: q.arg, done: g.done };
        }
        q.type === "throw" && (C = y, g.method = "throw", g.arg = q.arg);
      }
    };
  }
  function J(m, h) {
    var g = h.method, C = m.iterator[g];
    if (C === r) return h.delegate = null, g === "throw" && m.iterator.return && (h.method = "return", h.arg = r, J(m, h), h.method === "throw") || g !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + g + "' method")), E;
    var U = p(C, m.iterator, h.arg);
    if (U.type === "throw") return h.method = "throw", h.arg = U.arg, h.delegate = null, E;
    var S = U.arg;
    return S ? S.done ? (h[m.resultName] = S.value, h.next = m.nextLoc, h.method !== "return" && (h.method = "next", h.arg = r), h.delegate = null, E) : S : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, E);
  }
  function ce(m) {
    var h = { tryLoc: m[0] };
    1 in m && (h.catchLoc = m[1]), 2 in m && (h.finallyLoc = m[2], h.afterLoc = m[3]), this.tryEntries.push(h);
  }
  function F(m) {
    var h = m.completion || {};
    h.type = "normal", delete h.arg, m.completion = h;
  }
  function Y(m) {
    this.tryEntries = [{ tryLoc: "root" }], m.forEach(ce, this), this.reset(!0);
  }
  function he(m) {
    if (m || m === "") {
      var h = m[n];
      if (h) return h.call(m);
      if (typeof m.next == "function") return m;
      if (!isNaN(m.length)) {
        var g = -1, C = function U() {
          for (; ++g < m.length; ) if (i.call(m, g)) return U.value = m[g], U.done = !1, U;
          return U.value = r, U.done = !0, U;
        };
        return C.next = C;
      }
    }
    throw new TypeError(Fe(m) + " is not iterable");
  }
  return _.prototype = v, o(P, "constructor", { value: v, configurable: !0 }), o(v, "constructor", { value: _, configurable: !0 }), _.displayName = d(v, l, "GeneratorFunction"), e.isGeneratorFunction = function(m) {
    var h = typeof m == "function" && m.constructor;
    return !!h && (h === _ || (h.displayName || h.name) === "GeneratorFunction");
  }, e.mark = function(m) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(m, v) : (m.__proto__ = v, d(m, l, "GeneratorFunction")), m.prototype = Object.create(P), m;
  }, e.awrap = function(m) {
    return { __await: m };
  }, I(L.prototype), d(L.prototype, a, function() {
    return this;
  }), e.AsyncIterator = L, e.async = function(m, h, g, C, U) {
    U === void 0 && (U = Promise);
    var S = new L(c(m, h, g, C), U);
    return e.isGeneratorFunction(h) ? S : S.next().then(function(j) {
      return j.done ? j.value : S.next();
    });
  }, I(P), d(P, l, "Generator"), d(P, n, function() {
    return this;
  }), d(P, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(m) {
    var h = Object(m), g = [];
    for (var C in h) g.push(C);
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
    function C(Q, te) {
      return j.type = "throw", j.arg = h, g.next = Q, te && (g.method = "next", g.arg = r), !!te;
    }
    for (var U = this.tryEntries.length - 1; U >= 0; --U) {
      var S = this.tryEntries[U], j = S.completion;
      if (S.tryLoc === "root") return C("end");
      if (S.tryLoc <= this.prev) {
        var H = i.call(S, "catchLoc"), q = i.call(S, "finallyLoc");
        if (H && q) {
          if (this.prev < S.catchLoc) return C(S.catchLoc, !0);
          if (this.prev < S.finallyLoc) return C(S.finallyLoc);
        } else if (H) {
          if (this.prev < S.catchLoc) return C(S.catchLoc, !0);
        } else {
          if (!q) throw Error("try statement without catch or finally");
          if (this.prev < S.finallyLoc) return C(S.finallyLoc);
        }
      }
    }
  }, abrupt: function(h, g) {
    for (var C = this.tryEntries.length - 1; C >= 0; --C) {
      var U = this.tryEntries[C];
      if (U.tryLoc <= this.prev && i.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
        var S = U;
        break;
      }
    }
    S && (h === "break" || h === "continue") && S.tryLoc <= g && g <= S.finallyLoc && (S = null);
    var j = S ? S.completion : {};
    return j.type = h, j.arg = g, S ? (this.method = "next", this.next = S.finallyLoc, E) : this.complete(j);
  }, complete: function(h, g) {
    if (h.type === "throw") throw h.arg;
    return h.type === "break" || h.type === "continue" ? this.next = h.arg : h.type === "return" ? (this.rval = this.arg = h.arg, this.method = "return", this.next = "end") : h.type === "normal" && g && (this.next = g), E;
  }, finish: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var C = this.tryEntries[g];
      if (C.finallyLoc === h) return this.complete(C.completion, C.afterLoc), F(C), E;
    }
  }, catch: function(h) {
    for (var g = this.tryEntries.length - 1; g >= 0; --g) {
      var C = this.tryEntries[g];
      if (C.tryLoc === h) {
        var U = C.completion;
        if (U.type === "throw") {
          var S = U.arg;
          F(C);
        }
        return S;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function(h, g, C) {
    return this.delegate = { iterator: he(h), resultName: g, nextLoc: C }, this.method === "next" && (this.arg = r), E;
  } }, e;
}
function $r(r, e, t, i, o, s, n) {
  try {
    var a = r[s](n), l = a.value;
  } catch (d) {
    t(d);
    return;
  }
  a.done ? e(l) : Promise.resolve(l).then(i, o);
}
function Mn(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(i, o) {
      var s = r.apply(e, t);
      function n(l) {
        $r(s, i, o, n, a, "next", l);
      }
      function a(l) {
        $r(s, i, o, n, a, "throw", l);
      }
      n(void 0);
    });
  };
}
function Bn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Nn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, qn(i.key), i);
  }
}
function Hn(r, e, t) {
  return e && Nn(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function qn(r) {
  var e = Vn(r, "string");
  return Fe(e) == "symbol" ? e : e + "";
}
function Vn(r, e) {
  if (Fe(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Fe(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Kn = /* @__PURE__ */ (function() {
  function r() {
    Bn(this, r);
  }
  return Hn(r, [{
    key: "openFile",
    value: (function() {
      var e = Mn(/* @__PURE__ */ ri().mark(function i(o, s) {
        var n;
        return ri().wrap(function(l) {
          for (; ; ) switch (l.prev = l.next) {
            case 0:
              if (!(xo() && o && typeof o.uri < "u")) {
                l.next = 11;
                break;
              }
              return l.prev = 1, l.next = 4, $n(o.uri);
            case 4:
              return n = l.sent, l.abrupt("return", new kr(n));
            case 8:
              throw l.prev = 8, l.t0 = l.catch(1), new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(l.t0));
            case 11:
              if (!(typeof o.slice == "function" && typeof o.size < "u")) {
                l.next = 13;
                break;
              }
              return l.abrupt("return", Promise.resolve(new kr(o)));
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
              return l.abrupt("return", Promise.resolve(new Dn(o, s)));
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
function Yn(r, e) {
  return xo() ? Promise.resolve(Wn(r, e)) : Promise.resolve(["tus-br", r.name, r.type, r.size, r.lastModified, e.endpoint].join("-"));
}
function Wn(r, e) {
  var t = r.exif ? Gn(JSON.stringify(r.exif)) : "noexif";
  return ["tus-rn", r.name || "noname", r.size || "nosize", t, e.endpoint].join("/");
}
function Gn(r) {
  var e = 0;
  if (r.length === 0)
    return e;
  for (var t = 0; t < r.length; t++) {
    var i = r.charCodeAt(t);
    e = (e << 5) - e + i, e &= e;
  }
  return e;
}
function dt(r) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, dt(r);
}
function wi(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xn(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Jn(i.key), i);
  }
}
function _i(r, e, t) {
  return e && Xn(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Jn(r) {
  var e = Zn(r, "string");
  return dt(e) == "symbol" ? e : e + "";
}
function Zn(r, e) {
  if (dt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (dt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Qn = /* @__PURE__ */ (function() {
  function r() {
    wi(this, r);
  }
  return _i(r, [{
    key: "createRequest",
    value: function(t, i) {
      return new ea(t, i);
    }
  }, {
    key: "getName",
    value: function() {
      return "XHRHttpStack";
    }
  }]);
})(), ea = /* @__PURE__ */ (function() {
  function r(e, t) {
    wi(this, r), this._xhr = new XMLHttpRequest(), this._xhr.open(e, t, !0), this._method = e, this._url = t, this._headers = {};
  }
  return _i(r, [{
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
          o(new ta(t._xhr));
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
})(), ta = /* @__PURE__ */ (function() {
  function r(e) {
    wi(this, r), this._xhr = e;
  }
  return _i(r, [{
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
function ct(r) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ct(r);
}
function ia(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ra(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, sa(i.key), i);
  }
}
function oa(r, e, t) {
  return e && ra(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function sa(r) {
  var e = na(r, "string");
  return ct(e) == "symbol" ? e : e + "";
}
function na(r, e) {
  if (ct(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (ct(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var oi = !1;
try {
  oi = "localStorage" in window;
  var Ht = "tusSupport", Cr = localStorage.getItem(Ht);
  localStorage.setItem(Ht, Cr), Cr === null && localStorage.removeItem(Ht);
} catch (r) {
  if (r.code === r.SECURITY_ERR || r.code === r.QUOTA_EXCEEDED_ERR)
    oi = !1;
  else
    throw r;
}
var aa = oi, la = /* @__PURE__ */ (function() {
  function r() {
    ia(this, r);
  }
  return oa(r, [{
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
function da(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ca(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, vo(i.key), i);
  }
}
function pa(r, e, t) {
  return t && ca(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function ua(r, e, t) {
  return e = Rt(e), fa(r, bo() ? Reflect.construct(e, t || [], Rt(r).constructor) : e.apply(r, t));
}
function fa(r, e) {
  if (e && (Ne(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ha(r);
}
function ha(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function bo() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bo = function() {
    return !!r;
  })();
}
function Rt(r) {
  return Rt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Rt(r);
}
function ga(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && si(r, e);
}
function si(r, e) {
  return si = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, si(r, e);
}
function Pr(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(r, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function De(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pr(Object(t), !0).forEach(function(i) {
      ma(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Pr(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function ma(r, e, t) {
  return e = vo(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function vo(r) {
  var e = xa(r, "string");
  return Ne(e) == "symbol" ? e : e + "";
}
function xa(r, e) {
  if (Ne(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Ne(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
var Er = De(De({}, Ut.defaultOptions), {}, {
  httpStack: new Qn(),
  fileReader: new Kn(),
  urlStorage: aa ? new la() : new Ys(),
  fingerprint: Yn
}), ba = /* @__PURE__ */ (function(r) {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return da(this, e), i = De(De({}, Er), i), ua(this, e, [t, i]);
  }
  return ga(e, r), pa(e, null, [{
    key: "terminate",
    value: function(i) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return o = De(De({}, Er), o), Ut.terminate(i, o);
    }
  }]);
})(Ut);
const va = 10 * 1024 * 1024, ya = 5 * 1024 * 1024, wa = "https://eu-on-24001.connector.filerobot.com/files", _a = "https://eu-on-24001.connector.filerobot.com/json";
function ka(r, e) {
  if (!e || !r.file) return !1;
  const t = e.sizeThreshold ?? va;
  return r.size >= t;
}
function Sa(r, e) {
  const { tusConfig: t } = e, i = e.apiBase.replace(/\/+$/, ""), o = t.endpoint || wa, s = t.jsonBase || _a, n = t.chunkSize ?? ya, a = t.resumable !== !1, l = t.parallelChunks ?? 1, d = t.retryDelays ?? [0, 1e3, 3e3, 5e3], c = i.split("/").pop() || "";
  let p = !1, f = !1, k = !1;
  const b = {
    name: r.name,
    type: r.type,
    "filerobot-folder": e.folder
  };
  gi(r.product) && (b.product = JSON.stringify(mi(r.product)));
  const y = async () => `tus-${r.id}-${o}`, E = new ba(r.file, {
    endpoint: o,
    chunkSize: n,
    retryDelays: d,
    parallelUploads: l,
    storeFingerprintForResuming: a,
    removeFingerprintOnSuccess: !0,
    headers: {},
    metadata: b,
    fingerprint: y,
    // --- Dynamic auth headers (v5 pattern: onBeforeRequest) ---
    // Single source of auth headers for every tus request.
    // Uses getAuthHeaders() for latest SASS key, falls back to initial headers.
    onBeforeRequest(x) {
      const R = e.getAuthHeaders ? e.getAuthHeaders() : e.authHeaders;
      for (const [P, I] of Object.entries(R))
        x.setHeader(P, I);
      x.setHeader("X-Filerobot-Token", c);
    },
    // --- Store upload URL for cross-session resume (v5's onReceiveUploadUrl) ---
    // Only notify once to avoid redundant store updates (v5 checks uploadUrl !== existing).
    onUploadUrlAvailable() {
      E.url && e.onUploadUrlAvailable && !k && (k = !0, e.onUploadUrlAvailable(E.url));
    },
    onProgress(x, R) {
      !f && !p && e.onProgress(x, R);
    },
    onSuccess() {
      var P;
      if (f) return;
      v();
      const x = E.url || "", R = (P = x.match(/files\/([^/?]+)/)) == null ? void 0 : P[1];
      R ? Ca(s, R, r.size).then((I) => {
        f || e.onComplete(
          pt(I) ? hi(I, r) : I
        );
      }).catch((I) => {
        f || e.onError(I);
      }) : e.onComplete({
        status: "success",
        file: {
          uuid: "",
          name: r.name,
          extension: r.name.split(".").pop() || "",
          type: r.type,
          size: r.size,
          url: { public: x, cdn: x },
          meta: r.meta,
          tags: r.tags,
          info: {},
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          modified_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      });
    },
    onError(x) {
      f || (v(), $a(x) ? e.onError(new Error(
        "Network error during upload — check your connection or firewall settings"
      )) : e.onError(x instanceof Error ? x : new Error(String(x))));
    },
    // --- 429 rate-limit and retry handling (matches v5's defaultOnShouldRetry) ---
    onShouldRetry(x, R, P) {
      var L;
      const I = (L = x.originalResponse) == null ? void 0 : L.getStatus();
      return I === 429 ? !0 : !(I && I > 400 && I < 500 && I !== 409);
    }
  });
  let A = null, _ = null;
  typeof window < "u" && (A = () => {
    var x;
    !p && !f && (p = !0, E.abort(!1), (x = e.onPause) == null || x.call(e));
  }, _ = () => {
    var x;
    p && !f && (p = !1, E.start(), (x = e.onResume) == null || x.call(e));
  }, window.addEventListener("offline", A), window.addEventListener("online", _));
  const v = () => {
    A && window.removeEventListener("offline", A), _ && window.removeEventListener("online", _);
  }, w = () => {
    try {
      E.start();
    } catch (x) {
      v(), e.onError(x instanceof Error ? x : new Error(String(x)));
    }
  };
  return a ? E.findPreviousUploads().then((x) => {
    x.length > 0 && !f && E.resumeFromPreviousUpload(x[0]), f || w();
  }) : w(), {
    abort() {
      f = !0, p = !1, v(), E.abort(!0);
    },
    pause() {
      !p && !f && (p = !0, E.abort(!1));
    },
    resume() {
      p && !f && (p = !1, E.start());
    },
    isPaused() {
      return p;
    }
  };
}
function $a(r) {
  var e;
  if (r instanceof Je) {
    const t = (e = r.originalRequest) == null ? void 0 : e.getUnderlyingObject();
    return t && typeof t.readyState == "number" && typeof t.status == "number" ? t.readyState !== 0 && t.readyState !== 4 || t.status === 0 : r.originalResponse == null && r.causingError != null;
  }
  return !1;
}
async function Ca(r, e, t) {
  const i = `${r.replace(/\/+$/, "")}/${e}`, o = t > 1e8 ? 13e3 : 6e3, s = 3;
  for (let n = 0; n <= s; n++) {
    n > 0 && await new Promise((d) => setTimeout(d, o));
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
const St = "_sfxRelativePath", Ur = 8, Pa = /* @__PURE__ */ new Set([
  "node_modules",
  "__MACOSX",
  "$RECYCLE.BIN",
  "System Volume Information"
]);
function Ea(r) {
  return r ? r.startsWith(".") ? !0 : Pa.has(r) : !1;
}
function ki(r, e) {
  if (e) {
    try {
      Object.defineProperty(r, St, {
        value: e,
        configurable: !0,
        enumerable: !1,
        writable: !1
      });
      return;
    } catch {
    }
    try {
      Object.defineProperty(r, St, {
        value: e,
        configurable: !0,
        enumerable: !1,
        writable: !0
      });
    } catch {
      r[St] = e;
    }
  }
}
function Ua(r) {
  const e = r[St];
  if (typeof e == "string" && e) return e;
  const t = r.webkitRelativePath;
  if (typeof t == "string" && t) return t;
  const i = r.relativePath;
  return typeof i == "string" ? i : "";
}
function Ra(r) {
  if (!r) return "";
  const e = r.replace(/^\/+/, "").replace(/\/+$/, ""), t = e.lastIndexOf("/");
  return t === -1 ? "" : e.slice(0, t);
}
function Oa(r, e) {
  const t = (r ?? "").replace(/\/+$/, ""), i = (e ?? "").replace(/^\/+/, "").replace(/\/+$/, "");
  return i ? t ? `${t}/${i}` : i : r ?? "";
}
async function yo(r) {
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
  return await wo(i, "", s), { files: s, hadDirectories: o };
}
async function wo(r, e, t) {
  for (let i = 0; i < r.length; i += Ur) {
    const o = r.slice(i, i + Ur);
    await Promise.all(o.map((s) => Fa(s, e, t)));
  }
}
async function Fa(r, e, t) {
  try {
    if (r.isFile) {
      const i = await Ta(r);
      if (!i) return;
      const o = e ? `${e}/${i.name}` : i.name;
      ki(i, o), t.push(i);
      return;
    }
    if (r.isDirectory) {
      if (Ea(r.name)) return;
      const i = e ? `${e}/${r.name}` : r.name, o = await La(r);
      await wo(o, i, t);
    }
  } catch (i) {
    console.warn("[sfx-uploader] folder traversal skipped an entry:", (r == null ? void 0 : r.name) ?? r, i);
  }
}
function Ta(r) {
  return new Promise((e) => {
    r.file(
      (t) => e(t),
      () => e(null)
    );
  });
}
function La(r) {
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
class za {
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
    !t || !ni(t.status) || (this.abortPausedUpload(e), this.abortUpload(e), G(this.store, e, { status: "cancelled" }));
  }
  /**
   * Cancel all active/queued uploads.
   */
  cancelAll() {
    const { files: e } = this.store.getState();
    for (const t of e.values())
      ni(t.status) && (this.abortPausedUpload(t.id), this.abortUpload(t.id), G(this.store, t.id, { status: "cancelled" }));
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
    var f, k;
    const t = (k = (f = this.config).resolveUploadParams) == null ? void 0 : k.call(f, e), i = !!t && Object.keys(t).length > 0, o = !i && !e.remoteInfo && !e.remoteUrl && ka(e, this.config.tusConfig);
    G(this.store, e.id, { status: "uploading", error: null, isTus: o });
    let s = 0, n = Date.now(), a = 0;
    const l = Oa(
      this.store.getState().targetFolder,
      e.relativeFolder
    ), d = {
      apiBase: this.config.apiBase,
      authHeaders: this.config.authHeaders,
      folder: l,
      extraParams: i ? t : void 0,
      onComplete: (b) => this.handleComplete(e.id, b),
      onError: (b) => this.handleError(e.id, b)
    }, c = (b, y) => {
      const E = Date.now(), A = (E - n) / 1e3;
      if (A > 0) {
        const v = (b - s) / A;
        a = a === 0 ? v : 0.3 * v + 0.7 * a;
      }
      s = b, n = E;
      const _ = y > 0 ? Math.min(b / y * 100, 100) : 0;
      G(this.store, e.id, { progress: _, bytesUploaded: b, speed: a }), this.updateTotalProgress();
    };
    let p;
    if (e.remoteInfo)
      p = Fs(e, { ...d, onProgress: c });
    else if (e.remoteUrl) {
      if (!this.config.companionUrl) {
        G(this.store, e.id, {
          status: "failed",
          error: "URL import requires connectors.companionUrl to be configured"
        }), this.checkAllComplete(), this.processQueue();
        return;
      }
      p = Ts(e, {
        ...d,
        onProgress: c,
        companionUrl: this.config.companionUrl,
        onMeta: (b) => {
          G(this.store, e.id, {
            size: b.size,
            // Trust Companion's resolved MIME over our extension guess
            type: b.type || e.type
          });
        }
      });
    } else if (o) {
      const b = Sa(e, {
        ...d,
        onProgress: c,
        tusConfig: this.config.tusConfig,
        // Supply a getter so tus picks up renewed SASS keys mid-upload
        getAuthHeaders: () => this.config.authHeaders,
        // Store the tus upload URL on file state for cross-session resume
        onUploadUrlAvailable: (y) => {
          G(this.store, e.id, { tusUploadUrl: y });
        },
        // Sync UI state when tus pauses/resumes internally (e.g. network offline/online)
        onPause: () => {
          this.activeUploads.delete(e.id), this.pausedUploads.set(e.id, b), G(this.store, e.id, { status: "paused" }), this.processQueue();
        },
        onResume: () => {
          this.pausedUploads.delete(e.id), this.activeUploads.set(e.id, b), G(this.store, e.id, { status: "uploading" });
        }
      });
      p = b;
    } else
      p = Ss(e, { ...d, onProgress: c });
    this.activeUploads.set(e.id, p);
  }
  handleComplete(e, t) {
    var c, p, f, k, b, y, E, A, _, v;
    this.activeUploads.delete(e);
    const i = this.store.getState().files.get(e), o = ((c = i == null ? void 0 : i.previewUrl) == null ? void 0 : c.startsWith("blob:")) ?? !1, s = ((f = (p = t.file) == null ? void 0 : p.url) == null ? void 0 : f.cdn) ?? ((b = (k = t.file) == null ? void 0 : k.url) == null ? void 0 : b.cdn_permalink) ?? ((E = (y = t.file) == null ? void 0 : y.url) == null ? void 0 : E.permalink) ?? null, n = s ? ((_ = (A = this.config).transformPreviewUrl) == null ? void 0 : _.call(A, s)) ?? s : null, a = {
      status: "complete",
      progress: 100,
      response: t,
      alreadyExisted: pt(t)
    };
    i && n && i.type.startsWith("image/") && !o && (a.previewUrl = n);
    const l = (v = t.file) == null ? void 0 : v.size, d = typeof l == "number" ? l : l == null ? void 0 : l.bytes;
    typeof d == "number" && (a.size = d), G(this.store, e, a), this.updateTotalProgress(), this.checkAllComplete(), this.processQueue();
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
function ni(r) {
  return r === "queued" || r === "uploading" || r === "retrying" || r === "paused";
}
function Si(r) {
  return `https://api.filerobot.com/${r}`;
}
async function Ia(r, e) {
  const t = `${Si(r)}/key/${encodeURIComponent(e)}`, i = new AbortController(), o = setTimeout(() => i.abort(), 3e4);
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
function ai(r, e) {
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
async function Aa(r) {
  const e = Si(r.container);
  if (r.mode === "security-template") {
    const t = await Ia(r.container, r.securityTemplateId);
    return { apiBase: e, headers: ai(r, t), sassKey: t };
  }
  return { apiBase: e, headers: ai(r) };
}
const Ot = "sfx-uploader:last-upload:", _o = 1;
function ja(r) {
  var s, n, a, l, d, c, p, f, k;
  const { file: e, previewUrl: t, ...i } = r;
  let o = null;
  return r.status === "complete" && (r.previewUrl && !r.previewUrl.startsWith("blob:") ? o = r.previewUrl : o = ((a = (n = (s = r.response) == null ? void 0 : s.file) == null ? void 0 : n.url) == null ? void 0 : a.permalink) ?? ((c = (d = (l = r.response) == null ? void 0 : l.file) == null ? void 0 : d.url) == null ? void 0 : c.cdn_permalink) ?? ((k = (f = (p = r.response) == null ? void 0 : p.file) == null ? void 0 : f.url) == null ? void 0 : k.cdn) ?? null), { ...i, previewUrl: o };
}
function Da(r) {
  try {
    const e = sessionStorage.getItem(Ot + r);
    if (!e) return null;
    const t = JSON.parse(e);
    return (t == null ? void 0 : t.__schemaVersion) !== _o ? null : t;
  } catch {
    return null;
  }
}
function Ma(r, e) {
  try {
    sessionStorage.setItem(Ot + r, JSON.stringify(e));
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
      __schemaVersion: _o,
      savedAt: Date.now(),
      files: e.map(ja)
    };
    Ma(r, t);
  },
  /** Returns the stored files (rehydrated back to UploadFile shape) or null.
   *  The `file` blob and `remoteUrl` are not serializable — they are set to
   *  null on restore. Downstream code must null-check `file.file` before use. */
  load(r) {
    const e = Da(r);
    return e ? e.files.map((t) => ({
      ...t,
      file: null,
      previewUrl: t.previewUrl ?? null
    })) : null;
  },
  /** Check whether a stored batch exists without deserializing it. */
  exists(r) {
    try {
      return sessionStorage.getItem(Ot + r) != null;
    } catch {
      return !1;
    }
  },
  /** Drop the stored batch entirely. */
  clear(r) {
    try {
      sessionStorage.removeItem(Ot + r);
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
let Ba = 0;
function Ie() {
  return `file-${Date.now()}-${++Ba}`;
}
function ye(r) {
  if (!Number.isFinite(r) || r <= 0) return "0 B";
  const e = ["B", "KB", "MB", "GB"], t = Math.min(Math.floor(Math.log(r) / Math.log(1024)), e.length - 1), i = r / Math.pow(1024, t);
  return `${t === 0 ? i : i.toFixed(1)} ${e[t]}`;
}
function qt(r) {
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
function Na(r) {
  const e = r.lastIndexOf(".");
  return e >= 0 ? r.slice(e + 1).toUpperCase() : "";
}
const Ha = /* @__PURE__ */ new Set([".ds_store", "thumbs.db", "desktop.ini"]);
function Vt(r) {
  const e = (r.split(/[\\/]/).pop() ?? r).toLowerCase();
  return e.startsWith(".ds_store") ? !0 : Ha.has(e);
}
const qa = "https://scaleflex.cloudimg.io/v7/assets/file-types/v3/", ko = {
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
function li(r) {
  const e = r === "_default" ? "GENERIC" : r.toUpperCase();
  return `${qa}${e}.svg?vh=${ko[r]}`;
}
function So(r) {
  const e = (r == null ? void 0 : r.toLowerCase().replaceAll(".", "")) || "";
  return e in ko ? li(e) : li("_default");
}
function $o() {
  return li("_default");
}
const Va = {
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
function Rr(r) {
  var t;
  const e = ((t = r.split(".").pop()) == null ? void 0 : t.toLowerCase()) ?? "";
  return Va[e] || "";
}
function ve(r) {
  return r === "image/heic" || r === "image/heif";
}
function Ka(r) {
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
function Ya(r) {
  return typeof r == "string" && r.startsWith("Maximum ") && r.includes("files allowed");
}
function Kt(r, e, t) {
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
function Or(r) {
  return r.allowedFileTypes ? r.allowedFileTypes.join(",") : "";
}
const Fr = {
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
function Wa(r) {
  return r.filter((e) => e in Fr).map((e) => Fr[e]);
}
function Ee(r) {
  return r.brandStyle ? u`<span
    class=${To({ "brand-ico": !0, "brand-ico--transparent": r.brandStyle.background === "transparent" })}
    ${Z(r.brandStyle)}
  >${Bi(r.brandHtml)}</span>` : Bi(r.brandHtml);
}
var Ga = Object.defineProperty, Co = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Ga(e, t, o), o;
};
const Xa = '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', Ja = '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>', Za = '<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>', Qa = '<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>', et = [
  { id: "device", labelKey: "myDevice", label: "My Device", icon: Xa, iconColor: "#2563eb" },
  { id: "url", labelKey: "urlLink", label: "URL link", icon: Ja, iconColor: "#16a34a" },
  { id: "camera", labelKey: "camera", label: "Camera", icon: Za, iconColor: "#7c3aed" },
  { id: "screen-cast", labelKey: "screenCapture", label: "Screen capture", icon: Qa, iconColor: "#ea580c" }
], Ri = class Ri extends pe {
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
    return u`
      ${this.sources.map(
      (e) => u`
          <button @click=${() => this._handleClick(e)}>
            ${e.brandHtml ? Ee(e) : Pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${we(e.icon)}</svg>`}
            ${e.labelKey ? this.t(e.labelKey, e.label) : e.label}
          </button>
        `
    )}
    `;
  }
};
Ri.styles = ne`
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
let Ft = Ri;
Co([
  O({ attribute: !1 })
], Ft.prototype, "t");
Co([
  O({ type: Array })
], Ft.prototype, "sources");
const di = {
  LANGUAGES: "FTYPE_LANGUAGES"
};
function Nl(r, e) {
  if (!r.regional_variants_group_uuid) return;
  const t = e == null ? void 0 : e.regionalFilters;
  return t && r.regional_variants_group_uuid in t ? t[r.regional_variants_group_uuid] : e == null ? void 0 : e.language;
}
function Hl(r, e, t, i) {
  if (!r.regional_variants_group_uuid || !e) return;
  const o = e.find((a) => a.uuid === r.regional_variants_group_uuid);
  if (!o) return;
  const s = (t == null ? void 0 : t[o.uuid]) ?? i, n = o.variants.find((a) => a.api_value === s);
  if (n)
    return `${o.label}: ${n.label}`;
}
function el(r, e) {
  var i;
  const t = {};
  for (const o of r ?? []) {
    if (!((i = o.variants) != null && i.length)) continue;
    const s = o.type === di.LANGUAGES ? tl(o.variants, e) : void 0;
    t[o.uuid] = s ?? o.variants[0].api_value;
  }
  return t;
}
function tl(r, e) {
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
const Po = /* @__PURE__ */ new Set([
  "asset-attachments",
  "attachments-assets",
  "integer-list"
]), il = /* @__PURE__ */ new Set([
  "face_matcher"
]);
function ql(r) {
  return Po.has(r);
}
function rl(r) {
  return Po.has(r.type) || il.has(r.ckey);
}
const He = "product.ref", qe = "product.position", ol = "__product__", sl = /* @__PURE__ */ new Set([
  He,
  qe
]);
function nl(r) {
  return sl.has(r);
}
function al(r) {
  return r === He ? "ref" : r === qe ? "position" : null;
}
function ll(r) {
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
function dl(r) {
  return {
    uuid: ol,
    // Not marked as `isRoot` — it slots in *after* the schema's root groups
    // (see `injectProductGroup`), so any subsequent non-root groups still
    // render below it.
    isRoot: !1,
    name: r("productFieldsLabel", "Product"),
    fields: ll(r)
  };
}
function cl(r, e) {
  const t = dl(e);
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
function Vl(r, e, t) {
  var o;
  if ((((o = t == null ? void 0 : t.requiredFields) == null ? void 0 : o.includes(r.ckey)) || !!r.required) && ci(e))
    return `${r.title} is required`;
  if (ci(e)) return null;
  if (r.key === He)
    return typeof e != "string" || Wr.test(e) ? "Reference contains invalid characters" : null;
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
        const l = Number(s.latitude), d = Number(s.longitude);
        if (!Number.isFinite(l) || l < -90 || l > 90)
          return "Latitude must be between -90 and 90";
        if (!Number.isFinite(d) || d < -180 || d > 180)
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
function ci(r) {
  return r == null ? !0 : Array.isArray(r) || typeof r == "string" ? r.length === 0 : typeof r == "object" ? !Object.values(r).some(
    (e) => e != null && e !== ""
  ) : !r;
}
const pl = /* @__PURE__ */ new Set([
  "idle",
  "queued",
  "rejected"
]);
function $i(r) {
  return !ci(r);
}
function Eo(r, e) {
  var t;
  return rl(r) ? !1 : (t = e == null ? void 0 : e.requiredFields) != null && t.includes(r.ckey) ? !0 : !!r.required;
}
function Ci(r) {
  return [...r.values()].filter((e) => pl.has(e.status));
}
function Pi(r, e) {
  return r.fields.filter((t) => Eo(t, e));
}
function Kl(r, e, t) {
  const i = Ci(r);
  if (i.length === 0) return {};
  const o = {};
  for (const s of Pi(e, t)) {
    const n = i.filter(
      (a) => !$i(a.meta[s.key])
    );
    n.length > 0 && (o[s.key] = n);
  }
  return o;
}
function ul(r, e, t) {
  const i = Ci(r);
  if (i.length === 0) return null;
  for (const o of Pi(e, t))
    if (i.some(
      (n) => !$i(n.meta[o.key])
    )) return o.key;
  return null;
}
function fl(r, e, t) {
  var o;
  const i = r.get(e.id);
  return i && i.has(t) ? i.get(t) : (o = e.meta) == null ? void 0 : o[t];
}
function Yl(r, e, t, i) {
  const o = /* @__PURE__ */ new Set(), s = Ci(e);
  if (s.length === 0) return o;
  for (const n of Pi(t, i))
    s.some(
      (l) => !$i(fl(r, l, n.key))
    ) && o.add(n.key);
  return o;
}
function Wl(r, e) {
  const t = { ...r };
  for (const i of Object.keys(e)) {
    const o = e[i];
    if (o == null || o === "") continue;
    const s = r[i];
    if (Array.isArray(o))
      if (Array.isArray(s)) {
        const n = new Set(s.map((l) => JSON.stringify(l))), a = [...s];
        for (const l of o) {
          const d = JSON.stringify(l);
          n.has(d) || (n.add(d), a.push(l));
        }
        t[i] = a;
      } else
        t[i] = o;
    else
      t[i] = o;
  }
  return t;
}
function Uo(r) {
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
var hl = Object.defineProperty, le = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && hl(e, t, o), o;
};
const Tr = 3, pi = new CSSStyleSheet();
pi.replaceSync(`
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
var _e;
const oe = (_e = class extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.compact = !1, this.externalDragOver = !1, this.accept = "", this.multi = !0, this.directory = !1, this.sources = [], this.sourcesLayout = "pills", this.mode = "modal", this._resizeObserver = null, this._dragOver = !1, this._moreOpen = !1, this._visiblePills = Tr, this._dragCounter = 0, this._onDragEnter = (e) => {
      e.preventDefault(), this._dragCounter++, this._dragCounter === 1 && (this._dragOver = !0);
    }, this._onDragOver = (e) => {
      e.preventDefault();
    }, this._onDragLeave = (e) => {
      e.preventDefault(), this._dragCounter--, this._dragCounter <= 0 && (this._dragCounter = 0, this._dragOver = !1);
    }, this._onDrop = (e) => {
      e.preventDefault(), e.stopPropagation(), this._dragCounter = 0, this._dragOver = !1;
      const t = e.dataTransfer;
      t && yo(t).then(({ files: i, hadDirectories: o }) => {
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
        s && ki(o, s);
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
      this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-more-dropdown", ""), Uo(this).appendChild(this._portalContainer), this._injectDropdownStyles()), Ue(
        u`<div class="sfx-more-dropdown open">
          ${e.map(
          (t) => u`
              <button
                class="sfx-more-item"
                @click=${(i) => this._onMoreItemClick(t, i)}
              >
                <div class="sfx-more-item-ico">
                  ${t.brandHtml ? Ee(t) : t.iconColor ? u`<svg
                        viewBox="0 0 24 24"
                        ${Z({ color: t.iconColor })}
                      >
                        ${we(t.icon)}
                      </svg>` : Pe`<svg viewBox="0 0 24 24">${we(
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
    e && (e.adoptedStyleSheets.includes(pi) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, pi]));
  }
  /** Position the fixed dropdown, choosing above or below based on available space. */
  _positionDropdown() {
    var p, f;
    const e = (p = this.shadowRoot) == null ? void 0 : p.querySelector(
      ".more-wrap > button"
    ), t = (f = this._portalContainer) == null ? void 0 : f.querySelector(
      ".sfx-more-dropdown"
    );
    if (!e || !t) return;
    const i = e.getBoundingClientRect(), o = 8, s = t.scrollHeight, n = t.offsetWidth, a = i.top, l = window.innerHeight - i.bottom;
    a >= s + o || a > l ? t.style.top = `${i.top - s - o}px` : t.style.top = `${i.bottom + o}px`;
    let c = i.right - n;
    c = Math.max(8, Math.min(c, window.innerWidth - n - 8)), t.style.left = `${c}px`;
  }
  _onMoreItemClick(e, t) {
    t.stopPropagation(), this._moreOpen = !1, this._updateDropdownPortal(), this._onSourceIconClick(e);
  }
  _updateVisiblePills() {
    const e = window.innerWidth;
    this.sourcesLayout === "cards" ? e <= 480 ? this._visiblePills = 2 : e <= 768 ? this._visiblePills = 3 : this._visiblePills = 5 : e <= 768 ? this._visiblePills = 1 : this._visiblePills = Tr;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("paste", this._onPaste), document.addEventListener("click", this._onDocClick), document.addEventListener("keydown", this._onDocKeyDown), window.addEventListener("scroll", this._onScrollOrResize, !0), window.addEventListener("resize", this._onScrollOrResize), this._updateVisiblePills(), typeof ResizeObserver < "u" && (this._resizeObserver = new ResizeObserver((e) => {
      var o;
      const i = (((o = e[0]) == null ? void 0 : o.contentRect.width) ?? this.getBoundingClientRect().width) >= _e._WIDE_THRESHOLD_PX;
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
    return u`
      <button
        class="src-pill"
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? Ee(e) : u`<span
              class="pill-ico"
              ${Z(e.iconColor ? { color: e.iconColor } : null)}
            >
              ${Pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${we(e.icon)}</svg>`}
            </span>`}
        ${e.labelKey ? this.t(e.labelKey, e.label) : e.label}
      </button>
    `;
  }
  _renderCard(e) {
    return u`
      <button
        class="src-card"
        aria-label=${e.labelKey ? this.t(e.labelKey, e.label) : e.label}
        @click=${(t) => {
      t.stopPropagation(), this._onSourceIconClick(e);
    }}
      >
        ${e.brandHtml ? u`<span class="card-ico">${Ee(e)}</span>` : u`<span
              class="card-ico"
              ${Z(e.iconColor ? { color: e.iconColor } : null)}
            >
              ${Pe`<svg viewBox="0 0 24 24" class=${e.fillIcon ? "fill-icon" : ""}>${we(e.icon)}</svg>`}
            </span>`}
        <span class="card-label">${e.labelKey ? this.t(e.labelKey, e.label) : e.label}</span>
      </button>
    `;
  }
  _renderMoreCard() {
    return u`
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
    return u`
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
    return u`
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

          ${!this.compact && this.directory && this.multi ? u`<div class="title">
                ${this.t("dragDropClickTo", "Drag & Drop, click to")}
                <span>${this.t("browse", "browse")}</span>
                ${this.t("orUploadFolderPrefix", "or upload a ")}<button
                  type="button"
                  @click=${(o) => {
      o.stopPropagation(), this.browse("folder");
    }}
                >${this.t("uploadFolder", "folder")}</button>
              </div>` : u`<div class="title">${this.t("dragAndDrop", "Drag & Drop or click to")} <span>${this.t("browse", "browse")}</span></div>`}
          ${!this.compact && this.sources.length > 0 ? u`
                <div class="import-divider"><span>${this.t("orImportFrom", "or import from")}</span></div>
                ${this.sourcesLayout === "cards" ? u`
                      <div class="sources-cards">
                        ${t.map((o) => this._renderCard(o))}
                        ${i.length > 0 ? this._renderMoreCard() : $}
                      </div>
                    ` : u`
                      <div class="sources-grid">
                        ${t.map((o) => this._renderPill(o))}
                        ${i.length > 0 ? this._renderMoreDropdown() : $}
                      </div>
                    `}
              ` : $}
          ${this.compact && this.sources.length > 0 ? u`
                <div class="sources-row">
                  ${this.sources.map(
      (o) => u`
                      <button
                        class="src-ico"
                        ${Z(o.iconColor && !o.brandHtml ? { color: o.iconColor } : null)}
                        data-tip=${o.labelKey ? this.t(o.labelKey, o.label) : o.label}
                        aria-label=${o.labelKey ? this.t(o.labelKey, o.label) : o.label}
                        @click=${(s) => {
        s.stopPropagation(), this._onSourceIconClick(o);
      }}
                      >
                        ${o.brandHtml ? Ee(o) : Pe`<svg viewBox="0 0 24 24" class=${o.fillIcon ? "fill-icon" : ""}>${we(o.icon)}</svg>`}
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
        ${this.directory && this.multi ? u`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />` : $}
      </div>
    `;
  }
}, _e.styles = ne`
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
  `, _e._WIDE_THRESHOLD_PX = 1200, _e);
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
  z()
], oe.prototype, "_dragOver");
le([
  z()
], oe.prototype, "_moreOpen");
le([
  z()
], oe.prototype, "_visiblePills");
le([
  fi(".ripple")
], oe.prototype, "_rippleEl");
le([
  fi("input[data-sfx-dz-files]")
], oe.prototype, "fileInput");
le([
  fi("input[data-sfx-dz-folder]")
], oe.prototype, "folderInput");
let Gl = oe;
const Oi = class Oi extends pe {
  render() {
    return u`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `;
  }
};
Oi.styles = ne`
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
let Lr = Oi;
var gl = Object.defineProperty, W = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && gl(e, t, o), o;
};
const ui = new CSSStyleSheet();
ui.replaceSync(`
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
const Fi = class Fi extends pe {
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
      s && ki(o, s);
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
    this._portalContainer || (this._portalContainer = document.createElement("div"), this._portalContainer.setAttribute("data-sfx-tile-dropdown", ""), Uo(this).appendChild(this._portalContainer), this._injectTileDropdownStyles()), Ue(
      u`<div class="sfx-tile-dropdown">
        ${e.map((t) => u`
          <button
            class="sfx-tile-dropdown-item"
            @click=${(i) => this._onMoreSourceClick(i, t)}
          >
            <span class="sfx-tile-dropdown-ico" ${Z(t.iconColor && !t.brandHtml ? { color: t.iconColor } : null)}>
              ${t.brandHtml ? Ee(t) : Pe`<svg viewBox="0 0 24 24" class=${t.fillIcon ? "fill-icon" : ""}>${we(t.icon)}</svg>`}
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
    let c = i.right - n;
    c = Math.max(8, Math.min(c, window.innerWidth - n - 8)), t.style.left = `${c}px`;
  }
  _closePortal() {
    this._portalContainer && (Ue($, this._portalContainer), this._portalContainer.remove(), this._portalContainer = null);
  }
  _injectTileDropdownStyles() {
    var t;
    const e = (t = this._portalContainer) == null ? void 0 : t.getRootNode();
    e && (e.adoptedStyleSheets.includes(ui) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, ui]));
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
    return u`
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
          ${this.directory && this.multi ? u`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix", "or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder", "folder")}</button>
              </div>` : $}
          ${t.length > 0 ? u`
            <div class="drop-tile-sources">
              ${t.map((o) => u`
                <button
                  class="drop-tile-src"
                  ${Z(o.iconColor && !o.brandHtml ? { color: o.iconColor } : null)}
                  title=${o.labelKey ? this.t(o.labelKey, o.label) : o.label}
                  @click=${(s) => this._onSourceClick(s, o)}
                >
                  ${o.brandHtml ? Ee(o) : Pe`<svg viewBox="0 0 24 24" class=${o.fillIcon ? "fill-icon" : ""}>${we(o.icon)}</svg>`}
                </button>
              `)}
              ${i.length > 0 ? u`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources", "More sources")} @click=${(o) => this._toggleMore(o)}>···</button>
                </div>
              ` : $}
            </div>
          ` : $}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept || $} @change=${this._onFileInput} />
        ${this.directory && this.multi ? u`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />` : $}
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
    return u`
      ${e > 1 && !this.previewOpen ? u`
            <div class="similar-banner search">
              ${o ? u`<span class="search-done-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>` : u`<span class="search-ring"></span>`}
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
        ${Yt(
      this.files,
      (s) => s.id,
      (s, n) => {
        var a;
        return u`<sfx-file-item .t=${this.t} .file=${s} .mode=${this.mode} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} .showCheckSimilar=${this.showCheckSimilar} .selectMode=${this.selectMode} .isSelected=${this.selectedIds.has(s.id)} .selectionActive=${this.selectedIds.size > 0} .selectionFull=${this.selectionFull} .previewOpen=${this.previewOpen} .similarStatus=${this._statusFor(s.id)} .similarCount=${((a = this.searchResults.get(s.id)) == null ? void 0 : a.length) ?? -1} .similarResults=${this.searchResults.get(s.id) ?? []} ${Z({ "--tile-index": String(n) })}></sfx-file-item>`;
      }
    )}
      </div>
    `;
  }
};
Fi.styles = ne`
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
let K = Fi;
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
  z()
], K.prototype, "_moreOpen");
W([
  z()
], K.prototype, "_dropTileMaxVisible");
var ml = Object.defineProperty, ee = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && ml(e, t, o), o;
};
const Ti = class Ti extends pe {
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
          var d;
          ((d = this.file) == null ? void 0 : d.previewUrl) === a && (this._dims = `${l.naturalWidth}×${l.naturalHeight}`);
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
    var A, _;
    const e = this.file;
    if (!e) return $;
    const t = ue(e), i = e.status === "complete", o = e.status === "uploading", s = e.status === "paused", n = e.status === "error" || e.status === "failed", a = e.status === "rejected", l = this.mode === "review", d = Na(e.name), c = t === "image" && !ve(e.type), p = this.selectMode && c && !l, f = this.similarCount >= 0, k = p && !f && this.similarStatus === "", b = !l && !i && !o && !s && !n && e.status !== "rejected" && this.similarStatus !== "searching" && !this.reviewPick, y = b, E = [
      "tile",
      i ? "done" : "",
      o ? "uploading" : "",
      s ? "paused" : "",
      a ? "rejected" : "",
      l ? "review" : "",
      k ? "selectable" : "",
      k && this.isSelected ? "selected" : "",
      this.selectionActive && !c && !l ? "select-dimmed" : "",
      y ? "cs-overlay" : "",
      this.similarStatus === "queued" ? "sim-queued" : "",
      this.reviewPick ? "review-pick" : "",
      this.reviewPick && this.isSelected ? "selected" : ""
    ].filter(Boolean).join(" ");
    return u`
      <div
        class=${E}
        tabindex="0"
        @click=${this.reviewPick ? this._reviewSelect : k ? this._toggleSimilar : void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${e.previewUrl ? u`<img class="preview-img" src=${e.previewUrl} alt="" />` : u`
                <div class="preview-bg ${t}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${So(d)}
                    alt="${d ? `${d} file` : "File"}"
                    @error=${(v) => {
      const w = v.target, x = $o();
      !w.dataset.fallback && w.src !== x && (w.dataset.fallback = "1", w.src = x);
    }}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus === "searching" ? u`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching", "Searching…")}</div>
                </div>
              ` : $}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus && this.similarCount >= 0 ? this.similarCount > 0 ? u`
                  <span class="sim-result-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar", "{{count}} similar", { count: this.similarCount })}
                  </span>
                ` : u`<span class="sim-result-badge none">${this.t("noSimilar", "No similar")}</span>` : $}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${k ? u`
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
          ${b ? u`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details", "Details")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="cs-label">${this.t("details", "Details")}</span>
                  </button>
                  ${this.similarCount > 0 ? u`
                        <button class="check-similar-btn" @click=${this._openResults} @mouseenter=${this._simPopoverShow} @mouseleave=${this._simScheduleHide} aria-label=${this.t("viewSimilar", "View similar assets")}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          <span class="cs-label">${this.t("viewNSimilar", "View {{count}} similar", { count: this.similarCount })}</span>
                        </button>
                      ` : this.similarCount === 0 ? u`
                          <button class="check-similar-btn no-similar" @click=${this._openResults} aria-label=${this.t("noSimilarFound", "No similar assets found")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                              <circle cx="11" cy="11" r="7"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <span class="cs-label">${this.t("noSimilar", "No similar")}</span>
                          </button>
                        ` : this.showCheckSimilar && c ? u`
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
          ${l && i && ((A = e.response) != null && A.file) && (this.showLocateButton || this.showCopyCdnButton) ? u`
                <div class="review-actions">
                  ${this.showLocateButton && e.response.file.uuid ? u`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate", "Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate", "Locate")}
                      </button>` : $}
                  ${this.showCopyCdnButton && ((_ = e.response.file.url) != null && _.cdn) ? u`<button class="review-action primary ${this._copied ? "copied" : ""}" @click=${this._copyCdn} title=${this.t("copyCdn", "Copy CDN")} aria-label=${this.t("copyCdnLink", "Copy CDN link to clipboard")}>
                        ${this._copied ? u`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>` : u`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
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
          ${i ? u`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>` : $}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${l && n ? u`<div class="failed-badge" title=${e.error || this.t("uploadFailed", "Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>` : $}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!l && (e.status === "uploading" || e.status === "paused") ? u`
                <div class="progress">
                  <div class="progress-fill" ${Z({ transform: `scaleX(${Math.min(e.progress, 100) / 100})` })}></div>
                </div>
              ` : $}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(n || a) && e.error && !l ? u`<div class="error-badge" title=${e.error}>${e.error}</div>` : $}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${i && e.alreadyExisted ? u`<div class="exists-badge" title=${this.t("alreadyUploaded", "Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded", "Already uploaded")}</span>
              </div>` : $}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(n || a) && !(i && e.alreadyExisted) && e.duration != null && e.duration > 0 ? u`<div class="duration-badge">${this._formatDuration(e.duration)}</div>` : $}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${l || this.reviewPick ? $ : u`
        <div class="actions">
          ${o && e.isTus ? u`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause", "Pause")} aria-label=${this.t("pauseUpload", "Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              ` : $}
          ${s ? u`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume", "Resume")} aria-label=${this.t("resumeUpload", "Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              ` : $}
          ${n ? u`
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
            @change=${l || this.reviewPick ? $ : this._rename} @click=${(v) => v.stopPropagation()} />
          <div class="meta">${d || ""}${e.size ? ` · ${ye(e.size)}` : ""}${this._dims ? ` · ${this._dims}` : ""}</div>
        </div>
      </div>
      ${this._renderSimPopover()}
    `;
  }
  /** Hover preview popover (variant C: best match large + the rest stacked). */
  _renderSimPopover() {
    if (!this._simPopover || !this.similarResults.length) return $;
    const e = [...this.similarResults].sort((l, d) => d.score - l.score), t = e[0], i = e.length, o = e.slice(1), s = o.slice(0, 3), n = o.length - s.length, a = Math.round(t.score * 100);
    return u`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${Z({ left: `${this._simPopLeft}px`, top: `${this._simPopTop}px` })}
      >
        <div class="pop-hero">
          ${t.url ? u`<img src=${t.url} alt="" />` : $}
          <span class="pop-best ${t.score >= 0.9 ? "high" : ""}">${this.t("bestMatch", "{{pct}}% best match", { pct: a })}</span>
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar", "Closest similar asset")}</div>
          <div class="pop-s">${t.uuid}</div>
        </div>
        <div class="pop-foot">
          ${o.length ? u`<div class="pop-thumbs">
                ${s.map((l) => u`<img src=${l.url} alt="" />`)}
                ${n > 0 ? u`<span class="pop-more">+${n}</span>` : $}
              </div>` : u`<span></span>`}
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
Ti.styles = ne`
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
let X = Ti;
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
  z()
], X.prototype, "_dims");
ee([
  z()
], X.prototype, "_simPopover");
ee([
  z()
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
var xl = Object.defineProperty, xe = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && xl(e, t, o), o;
};
const zr = 7, bl = 4, Li = class Li extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this.fileCount = 0, this.totalSize = 0, this.thumbnails = [], this.primaryLabel = "Done", this.failedFiles = [], this.alreadyExistedCount = 0, this.showMinimize = !1, this._maxThumbs = zr, this._updateMaxThumbs = () => {
      const e = window.innerWidth <= 768 ? bl : zr;
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
    return u`
      ${this.showMinimize ? u`<button class="minimize-btn" title=${this.t("minimizeAndContinue", "Minimize & continue in background")} @click=${this._minimize}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>` : $}
      <button class="close-btn" title=${this.t("close", "Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s ? "error" : o ? "warning" : n ? "info" : ""}">
          ${s ? u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>` : o ? u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>` : n ? u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>` : u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>`}
        </div>
        <div class="title">${s ? this.t("uploadFailed", "Upload failed") : o ? this.t("partiallyUploaded", "Partially uploaded") : n ? this.t("alreadyInLibrary", { count: this.alreadyExistedCount, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" }) : this.t("uploadedSuccessfullyCount", { count: a, defaultValue_one: "{{count}} file uploaded successfully!", defaultValue_other: "{{count}} files uploaded successfully!" })}</div>
        <div class="subtitle">${s ? this.t("filesCouldNotBeUploaded", { count: this.failedFiles.length, defaultValue_one: "File could not be uploaded", defaultValue_other: "Files could not be uploaded" }) : o ? this.t("partialUploadSummary", "{{uploaded}} uploaded, {{failed}} failed", { uploaded: a, failed: this.failedFiles.length }) : n ? this.t("alreadyInLibrarySubtitle", { count: this.alreadyExistedCount, defaultValue_one: "It’s ready to use — nothing new to upload", defaultValue_other: "They’re ready to use — nothing new to upload" }) : this.t("allFilesReady", "All files are ready for use")}</div>

        ${e.length > 0 ? u`
              <div class="thumbs">
                ${e.map(
      (l) => u`<img class="thumb" src=${l} alt="" />`
    )}
                ${t > 0 ? u`<div class="thumb-more">+${t}</div>` : $}
              </div>
            ` : $}

        ${i && !n ? u`<div class="summary">${this.t("uploadedSize", "{{size}} uploaded", { size: ye(this.totalSize) })}</div>` : $}

        ${this.alreadyExistedCount > 0 && !n ? u`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary", { count: this.alreadyExistedCount, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" })}</span>
            </div>` : $}

        ${o ? u`
            <div class="failed-list">
              ${this.failedFiles.map((l) => u`
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
          ${i || o ? u`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles", "Review files ({{count}})", { count: this.fileCount + this.failedFiles.length })}</button>` : $}
          ${o ? u`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll", "Retry all ({{count}})", { count: this.failedFiles.length })}</button>` : $}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `;
  }
};
Li.styles = [ft, ht, ne`
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
let fe = Li;
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
  z()
], fe.prototype, "_maxThumbs");
var vl = Object.defineProperty, gt = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && vl(e, t, o), o;
};
const zi = class zi extends pe {
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
    return u`
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
          ${this._failedCount > 0 ? u`<button class="chip ${this._filter === "failed" ? "active" : ""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed", "Failed")} (${this._failedCount})
              </button>` : $}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload", "Clear last upload from this browser")}>${this.t("clear", "Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length === 0 ? u`<div class="empty">${this.t("noFilesMatchFilter", "No files match this filter.")}</div>` : u`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `;
  }
};
zi.styles = ne`
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
let ke = zi;
gt([
  O({ attribute: !1 })
], ke.prototype, "t");
gt([
  O({ attribute: !1 })
], ke.prototype, "files");
gt([
  O({ type: Boolean })
], ke.prototype, "showLocateButton");
gt([
  O({ type: Boolean })
], ke.prototype, "showCopyCdnButton");
gt([
  z()
], ke.prototype, "_filter");
customElements.define("sfx-last-upload-review", ke);
var yl = Object.defineProperty, de = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && yl(e, t, o), o;
};
const Ii = class Ii extends pe {
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
    return this.selectMode ? this._renderSelectToolbar() : u`
      ${e ? u`
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
          ${this.showFillMetadata && this.uploadState === "idle" ? u`
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
          ${this.showCheckSimilar && this.uploadState === "idle" ? u`
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
          ${this.failedCount > 0 ? u`
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
    return u`
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
          ${t > 0 ? u`<span
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
    return u`
      <button
        class=${i}
        @click=${this._upload}
        ?disabled=${e || this.fileCount === 0 && !t}
        aria-label=${o}
      >
        ${e ? u`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading", "Uploading")}…</span>` : t ? u`
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
            ` : u`
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
Ii.styles = [
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
let re = Ii;
de([
  O({ attribute: !1 })
], re.prototype, "t");
de([
  O({ type: String })
], re.prototype, "uploadState");
de([
  O({ type: Number })
], re.prototype, "fileCount");
de([
  O({ type: Number })
], re.prototype, "totalSize");
de([
  O({ type: Number })
], re.prototype, "failedCount");
de([
  O({ type: Boolean })
], re.prototype, "showFillMetadata");
de([
  O({ type: Boolean })
], re.prototype, "requireMetadataFirst");
de([
  O({ type: Number })
], re.prototype, "completedCount");
de([
  O({ type: Number })
], re.prototype, "uploadProgress");
de([
  O({ type: Boolean })
], re.prototype, "showCheckSimilar");
de([
  O({ type: Boolean })
], re.prototype, "selectMode");
de([
  O({ type: Number })
], re.prototype, "selectedCount");
de([
  O({ type: Number })
], re.prototype, "maxSelection");
de([
  O({ type: Boolean })
], re.prototype, "allSelected");
const wl = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function Ei(r, e) {
  return (t) => {
    if (t.key !== "Tab") return;
    const i = r();
    if (!i) return;
    const o = i.querySelector(e);
    if (!o) return;
    const s = Array.from(o.querySelectorAll(wl));
    if (s.length === 0) return;
    const n = s[0], a = s[s.length - 1], l = i.activeElement;
    t.shiftKey ? (l === n || !o.contains(l)) && (t.preventDefault(), a.focus()) : (l === a || !o.contains(l)) && (t.preventDefault(), n.focus());
  };
}
var _l = Object.defineProperty, zt = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && _l(e, t, o), o;
};
const Ai = class Ai extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this._url = "", this._name = "", this._error = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._onUrlInput = (e) => {
      this._url = e.target.value, this._error = "", this._autoName();
    }, this._onNameInput = (e) => {
      this._name = e.target.value;
    }, this._focusTrap = Ei(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
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
    return u`
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
            ${this._error ? u`<div class="error">${this._error}</div>` : ""}
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
Ai.styles = [ft, ht, ne`
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
let Ve = Ai;
zt([
  O({ attribute: !1 })
], Ve.prototype, "t");
zt([
  z()
], Ve.prototype, "_url");
zt([
  z()
], Ve.prototype, "_name");
zt([
  z()
], Ve.prototype, "_error");
var kl = Object.defineProperty, mt = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && kl(e, t, o), o;
};
const ji = class ji extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this._stream = null, this._error = "", this._captured = null, this._previewUrl = "", this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = Ei(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
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
    return u`
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
            ${this._error ? u`<div class="error">${this._error}</div>` : this._captured ? u`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto", "Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake", "Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto", "Use photo")}</button>
                    </div>
                  ` : u`
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
ji.styles = [ft, ht, ne`
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
let Te = ji;
mt([
  O({ attribute: !1 })
], Te.prototype, "t");
mt([
  z()
], Te.prototype, "_stream");
mt([
  z()
], Te.prototype, "_error");
mt([
  z()
], Te.prototype, "_captured");
mt([
  z()
], Te.prototype, "_previewUrl");
var Sl = Object.defineProperty, We = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Sl(e, t, o), o;
};
const Di = class Di extends pe {
  constructor() {
    super(...arguments), this.t = (e, t) => typeof t == "string" ? t : e, this._stream = null, this._recording = !1, this._error = "", this._recordedBlob = null, this._previewUrl = "", this._recorder = null, this._chunks = [], this._onBackdropClick = (e) => {
      e.target === e.currentTarget && this._cancel();
    }, this._focusTrap = Ei(() => this.shadowRoot, ".card"), this._onKeyDown = (e) => {
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
    return u`
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
            ${this._error ? u`<div class="error">${this._error}</div>` : this._recordedBlob ? u`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard", "Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording", "Use recording")}</button>
                    </div>
                  ` : this._recording ? u`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording", "Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording", "Stop recording")}</button>
                      </div>
                    ` : u`
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
Di.styles = [ft, ht, ne`
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
let Se = Di;
We([
  O({ attribute: !1 })
], Se.prototype, "t");
We([
  z()
], Se.prototype, "_stream");
We([
  z()
], Se.prototype, "_recording");
We([
  z()
], Se.prototype, "_error");
We([
  z()
], Se.prototype, "_recordedBlob");
We([
  z()
], Se.prototype, "_previewUrl");
var $l = Object.defineProperty, Ui = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && $l(e, t, o), o;
};
const Mi = class Mi extends pe {
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
    return e === "error" ? u`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>` : e === "warning" ? u`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>` : u`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`;
  }
  render() {
    return this._toasts.length === 0 ? u`` : u`
      <div class="toast-stack">
        ${this._toasts.map(
      (e) => u`
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
Mi.styles = ne`
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
let Ke = Mi;
Ui([
  O({ attribute: !1 })
], Ke.prototype, "t");
Ui([
  O({ type: Number })
], Ke.prototype, "duration");
Ui([
  z()
], Ke.prototype, "_toasts");
customElements.define("sfx-toast", Ke);
var Cl = Object.defineProperty, N = (r, e, t, i) => {
  for (var o = void 0, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = n(e, t, o) || o);
  return o && Cl(e, t, o), o;
};
const Ir = /* @__PURE__ */ new Set(["unsplash"]), be = 10, Pl = [
  "auto",
  "mobile",
  "tablet",
  "desktop",
  "hq",
  "sample"
], El = ["hls"], Ae = {
  isTus: !1,
  tusUploadUrl: null,
  relativeFolder: ""
}, Ar = /* @__PURE__ */ new Set([
  "complete",
  "failed",
  "error",
  "cancelled",
  "rejected"
]);
var V;
const B = (V = class extends pe {
  constructor() {
    super(), this.config = null, this._isOpen = !1, this._activeConnector = null, this._showUrlDialog = !1, this._showCameraDialog = !1, this._showScreenCastDialog = !1, this._similarSelectMode = !1, this._similarSelectedIds = /* @__PURE__ */ new Set(), this._similarRunIds = [], this._similarActiveIds = /* @__PURE__ */ new Set(), this._similarResults = /* @__PURE__ */ new Map(), this._previewPanelTab = "details", this._similarSimTimers = [], this._simMockCounter = 0, this._previewFileId = null, this._previewDims = "—", this._fileInfoOpen = !0, this._splitPct = 58, this._showSettings = !1, this._setResize = !0, this._setMaxW = 2e3, this._setMaxH = 2e3, this._setTranscode = !1, this._setResolution = "auto", this._setResolutionOpen = !1, this._setProtocol = "hls", this._setResumable = !1, this._isResizing = !1, this._splitRafId = 0, this._previewDefaultApplied = !1, this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null, this._fsZoom = 1, this._fsPanX = 0, this._fsPanY = 0, this._fsDragging = !1, this._fsDragStartX = 0, this._fsDragStartY = 0, this._fsPanStartX = 0, this._fsPanStartY = 0, this._bodyDragOver = !1, this._isMinimized = !1, this._isPillExpanded = !1, this._metadataSchema = null, this._regionalFilters = {}, this._bulkMetadataOpen = !1, this._bulkMetadataInitialFieldKey = null, this._isReviewing = !1, this._reviewFiles = [], this._hasStoredReview = !1, this._metadataAutocomplete = null, this._taxonomyService = null, this._ultratagsService = null, this._onRegionalChange = (e) => {
      const { groupUuid: t, value: i } = e.detail;
      t && (this._regionalFilters = { ...this._regionalFilters, [t]: i });
    }, this._videoBlobUrls = /* @__PURE__ */ new Map(), this._lastEta = 0, this._engine = null, this._cachedSources = et, this._cachedSourcesConfig = void 0, this._rejectedTimers = /* @__PURE__ */ new Map(), this._closeOnCompleteTimer = null, this._apiBase = null, this._authHeaders = null, this._authResolveId = 0, this._prevStoreState = null, this._unsubStoreEvents = null, this._firedFolders = /* @__PURE__ */ new Set(), this._portalContainer = null, this._hostStyleObserver = null, this._onFileRename = (e) => {
      this._onPreviewRename(e.detail.fileId, e.detail.name);
    }, this._onPreviewMetadataBlur = (e) => {
      const t = this._previewFileId;
      if (!t) return;
      const { key: i, value: o } = e.detail;
      if (nl(i)) {
        const a = al(i);
        if (!a) return;
        const l = o === "" || o == null, d = a === "position" ? { position: l ? void 0 : Number(o) } : { ref: l ? void 0 : String(o) };
        this.updateFileProduct(t, d);
        return;
      }
      const s = this._store.getState().files.get(t);
      if (!s) return;
      const n = new Map(this._store.getState().files);
      n.set(t, { ...s, meta: { ...s.meta, [i]: o } }), this._store.setState({ files: n });
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
        if (Ir.has(e)) {
          if (!customElements.get("sfx-search-provider-browser")) {
            const { SfxSearchProviderBrowser: a } = await import("./search-provider-browser-3LyHk47_.js");
            customElements.define(
              "sfx-search-provider-browser",
              a
            );
          }
        } else if (!customElements.get("sfx-provider-browser")) {
          const { SfxProviderBrowser: a } = await import("./provider-browser-C1i-CvpF.js");
          customElements.define("sfx-provider-browser", a);
        }
        this._activeConnector = e;
      }
    }, this._onUrlSubmit = (e) => {
      var p, f, k;
      this._showUrlDialog = !1;
      const { url: t, name: i } = e.detail, o = (p = this.config) == null ? void 0 : p.callbacks, s = Rr(i), n = s.startsWith("image/");
      if (Vt(i)) return;
      const a = this._store.getState();
      if ([...a.files.values()].some(
        (b) => b.name === i && b.status !== "rejected" && b.status !== "cancelled"
      )) return;
      const d = Kt(
        { name: i, size: 0, type: s },
        a.restrictions,
        a.files
      );
      if (d) {
        const b = {
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
          error: d,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          product: {},
          remoteInfo: null,
          ...Ae
        };
        Le(this._store, b), this._dispatchPublic(M.FILE_REJECTED, {
          file: b,
          reason: d
        }), (f = o == null ? void 0 : o.onFileRejected) == null || f.call(o, b, d);
        return;
      }
      const c = {
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
      Le(this._store, c), this._dispatchPublic(M.FILE_ADDED, { file: c }), (k = o == null ? void 0 : o.onFileAdded) == null || k.call(o, c), this._store.getState().queueConfig.autoProceed && this.upload();
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
      (t = this.config) != null && t.metadataConfig && this._metadataSchema && (this._bulkMetadataInitialFieldKey = this._firstMissingRequiredFieldKey(), this._bulkMetadataOpen = !0), this._dispatchPublic(M.FILL_METADATA, { files: e }), (s = (o = (i = this.config) == null ? void 0 : i.callbacks) == null ? void 0 : o.onFillMetadata) == null || s.call(o, e);
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
        for (const [d, c] of Object.entries(n))
          c == null ? delete l[d] : l[d] = c;
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
      this._hasUnfilledRequiredMetadata || this.upload();
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
        if (Vt(l.name)) continue;
        const d = i ? l.relativeFolder ?? "" : "", c = this._store.getState();
        if ([...c.files.values()].some(
          (y) => y.name === l.name && y.size === l.size && y.relativeFolder === d && y.status !== "rejected" && y.status !== "cancelled"
        )) continue;
        const f = l.thumbnail ? this._transformRemoteThumbnail(l.thumbnail, {
          source: "connector",
          providerId: l.provider
        }) : null, k = Kt(
          { name: l.name, size: l.size, type: l.mimeType },
          c.restrictions,
          c.files
        );
        if (k) {
          const y = {
            id: Ie(),
            status: "rejected",
            file: null,
            remoteUrl: null,
            name: l.name,
            size: l.size,
            type: l.mimeType,
            previewUrl: f,
            duration: null,
            progress: 0,
            speed: 0,
            bytesUploaded: 0,
            error: k,
            retryCount: 0,
            response: null,
            addedAt: Date.now(),
            meta: {},
            tags: [],
            product: {},
            remoteInfo: l,
            ...Ae,
            relativeFolder: d
          };
          Le(this._store, y), this._dispatchPublic(M.FILE_REJECTED, {
            file: y,
            reason: k
          }), (n = t == null ? void 0 : t.onFileRejected) == null || n.call(t, y, k);
          continue;
        }
        const b = {
          id: Ie(),
          status: "idle",
          file: null,
          remoteUrl: null,
          name: l.name,
          size: l.size,
          type: l.mimeType,
          previewUrl: f,
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
          relativeFolder: d
        };
        Le(this._store, b), this._dispatchPublic(M.FILE_ADDED, { file: b }), (a = t == null ? void 0 : t.onFileAdded) == null || a.call(t, b);
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
      t && yo(t).then(({ files: i, hadDirectories: o }) => {
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
    }, this._store = vs(), this._storeCtrl = new ys(this, this._store);
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
      (s) => s.type === di.LANGUAGES
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
      ...el(
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
      (a) => a.type === di.LANGUAGES
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
    var t, i, o, s, n, a, l, d, c;
    const e = this._isMinimized;
    if (this._isMinimized && (this._isMinimized = !1, this._isPillExpanded = !1), this._isOpen) {
      e && ((o = (i = (t = this.config) == null ? void 0 : t.callbacks) == null ? void 0 : i.onRestore) == null || o.call(i), this._dispatchPublic(M.RESTORE, { mode: "modal" }), this.requestUpdate());
      return;
    }
    this._isOpen = !0, (a = (n = (s = this.config) == null ? void 0 : s.callbacks) == null ? void 0 : n.onOpen) == null || a.call(n), this._dispatchPublic(M.OPEN, {}), e && ((c = (d = (l = this.config) == null ? void 0 : l.callbacks) == null ? void 0 : d.onRestore) == null || c.call(d), this._dispatchPublic(M.RESTORE, { mode: "modal" })), this.requestUpdate();
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
    var o, s, n, a, l, d, c, p, f, k;
    if (this._ensureEngine(), !this._engine) {
      console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");
      return;
    }
    const e = [...this._store.getState().files.values()].filter(
      (b) => b.status === "idle" || b.status === "queued"
    );
    if ((s = (o = this.config) == null ? void 0 : o.callbacks) != null && s.onBeforeUpload && this.config.callbacks.onBeforeUpload(e) === !1)
      return;
    const t = new CustomEvent(M.BEFORE_UPLOAD, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { files: e }
    });
    this.dispatchEvent(t) && (this._dispatchPublic(M.UPLOAD_STARTED, { files: e }), (l = (a = (n = this.config) == null ? void 0 : n.callbacks) == null ? void 0 : a.onUploadStarted) == null || l.call(a, e), this._engine.uploadAll(), (d = this.config) != null && d.minimizeOnUpload && ((c = this.config) == null ? void 0 : c.mode) !== "inline" && !this._isMinimized && (this._isMinimized = !0, this._isPillExpanded = !0, (k = (f = (p = this.config) == null ? void 0 : p.callbacks) == null ? void 0 : f.onMinimize) == null || k.call(f), this._dispatchFloatGeometryEvent(M.MINIMIZE), this.requestUpdate()));
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
      const d = { ...l.taxonodes ?? {} };
      i == null ? delete d[t] : d[t] = i, s.set(a, { ...l, taxonodes: d }), n = !0;
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
      product: or(o.product, t)
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
        product: or(a.product, n)
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
      const { i18n: t, isNew: i } = await us(e || "en");
      i && t.on(
        "missingKey",
        (s, n, a, l, d, c) => {
          const p = a.match(/_(?:zero|one|two|few|many|other)$/), f = p && (c != null && c[`defaultValue${p[0]}`]) ? String(c[`defaultValue${p[0]}`]) : l;
          gs.handleMissingKey(a, f, n);
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
    this._rejectedTimers.clear(), this._closeOnCompleteTimer && (clearTimeout(this._closeOnCompleteTimer), this._closeOnCompleteTimer = null);
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
      this._apiBase = Si(t.container), this._authHeaders = ai(t), this._ensureEngine(), (s = this._engine) == null || s.updateConfig({
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
      const l = await Aa(t);
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
    var a, l, d, c;
    const e = (a = this.config) == null ? void 0 : a.uploadSettings, t = !!e && e.showResumableSwitcher === !0, i = (l = this.config) == null ? void 0 : l.tusConfig;
    let o = i === !0 ? {} : i || void 0;
    if (t) {
      if (!this._setResumable) return;
      o || (o = {});
    }
    if (!o) return;
    const s = (c = (d = this.config) == null ? void 0 : d.connectors) == null ? void 0 : c.companionUrl;
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
    !this._engine && this._apiBase && this._authHeaders && (this._engine = new za(this._store, {
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
        const { fetchMetadataSchema: i, createTagsAutocomplete: o, createTaxonomyService: s, createUltratagsService: n } = await import("./index-D40ySCuf.js"), a = await i(
          this._apiBase,
          this._authHeaders,
          t.projectUuid,
          t
        );
        this._metadataAutocomplete = o(
          this._apiBase,
          this._authHeaders
        ), this._taxonomyService = s(
          this._apiBase,
          this._authHeaders
        ), this._ultratagsService = n(
          this._apiBase,
          this._authHeaders
        ), this._metadataSchema = a.productsEnabled ? cl(a, this._storeCtrl.state.t) : a;
        const l = this._metadataSchema.fields.filter((d) => Eo(d, t)).map((d) => d.key);
        this._dispatchPublic(M.METADATA_SCHEMA, {
          schema: this._metadataSchema,
          requiredFieldKeys: l
        });
      } catch (i) {
        console.error("[sfx-uploader] Failed to load metadata schema:", i), this._showToast("Failed to load metadata schema", "warning");
      }
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
  get _metadataEnforcing() {
    var t;
    const e = (t = this.config) == null ? void 0 : t.metadataConfig;
    return !e || !this._metadataSchema || e.enforceRequiredBeforeUpload === !1 ? !1 : e.enforceRequiredBeforeUpload === !0 || this._metadataSchema.forceFillingOnUpload || e.requiredFields && e.requiredFields.length > 0 ? !0 : this._metadataSchema.fields.some((i) => !!i.required);
  }
  _firstMissingRequiredFieldKey() {
    var e;
    return !this._metadataEnforcing || !this._metadataSchema ? null : ul(
      this._store.getState().files,
      this._metadataSchema,
      (e = this.config) == null ? void 0 : e.metadataConfig
    );
  }
  get _hasUnfilledRequiredMetadata() {
    return this._firstMissingRequiredFieldKey() != null;
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
    var o, s, n, a, l, d, c, p, f, k;
    const e = this._store.getState(), t = this._prevStoreState;
    if (this._prevStoreState = e, !t) return;
    e.isUploading && !t.isUploading && (this._lastEta = 0, this._firedFolders.clear());
    const i = (o = this.config) == null ? void 0 : o.callbacks;
    for (const [b, y] of e.files) {
      const E = t.files.get(b);
      if (!E) {
        y.relativeFolder && this._firedFolders.delete(y.relativeFolder);
        continue;
      }
      if (E.status !== y.status)
        switch (y.status) {
          case "uploading":
            E.status === "paused" && (this._dispatchPublic(M.UPLOAD_RESUMED, { file: y }), (s = i == null ? void 0 : i.onUploadResumed) == null || s.call(i, y));
            break;
          case "complete":
            y.response && (this._dispatchPublic(M.UPLOAD_COMPLETE, {
              file: y,
              response: y.response
            }), (n = i == null ? void 0 : i.onUploadComplete) == null || n.call(i, y, y.response));
            break;
          case "error":
          case "failed": {
            const A = new Error(y.error ?? "Upload failed");
            this._dispatchPublic(M.UPLOAD_ERROR, {
              file: y,
              error: A
            }), (a = i == null ? void 0 : i.onUploadError) == null || a.call(i, y, A);
            break;
          }
          case "retrying":
            this._dispatchPublic(M.UPLOAD_RETRY, {
              file: y,
              attempt: y.retryCount
            }), (l = i == null ? void 0 : i.onUploadRetry) == null || l.call(i, y, y.retryCount);
            break;
          case "paused":
            this._dispatchPublic(M.UPLOAD_PAUSED, { file: y }), (d = i == null ? void 0 : i.onUploadPaused) == null || d.call(i, y);
            break;
        }
      y.status === "uploading" && E.progress !== y.progress && (this._dispatchPublic(M.UPLOAD_PROGRESS, {
        file: y,
        progress: y.progress,
        speed: y.speed
      }), (c = i == null ? void 0 : i.onUploadProgress) == null || c.call(i, y, y.progress, y.speed)), y.relativeFolder && E.status !== y.status && Ar.has(y.status) && !this._firedFolders.has(y.relativeFolder) && this._maybeDispatchFolderComplete(y.relativeFolder, e, i);
    }
    if (e.totalProgress !== t.totalProgress || e.totalSpeed !== t.totalSpeed) {
      const b = e.totalSpeed > 0 ? (e.totalBytes - e.totalBytesUploaded) / e.totalSpeed : e.isUploading ? this._lastEta : 0;
      e.totalSpeed > 0 && (this._lastEta = b), this._dispatchPublic(M.TOTAL_PROGRESS, {
        percentage: e.totalProgress,
        speed: e.totalSpeed,
        eta: b
      }), (p = i == null ? void 0 : i.onTotalProgress) == null || p.call(i, e.totalProgress, e.totalSpeed, b);
    }
    if (t.isUploading && !e.isUploading) {
      const b = [...e.files.values()];
      if (!b.some((E) => E.status === "cancelled")) {
        const E = b.filter((w) => w.status === "complete"), A = b.filter(
          (w) => w.status === "failed" || w.status === "error"
        );
        if (E.length === 0 && A.length === 0) return;
        const _ = this._lastUploadId;
        if (_ != null) {
          const w = [...E, ...A];
          Xe.save(_, w), this._hasStoredReview = w.length > 0;
        }
        this._dispatchPublic(M.ALL_COMPLETE, { successful: E, failed: A }), (f = i == null ? void 0 : i.onAllComplete) == null || f.call(i, E, A);
        const v = (k = this.config) == null ? void 0 : k.closeOnComplete;
        if (v !== !1 && v != null) {
          const w = typeof v == "number" ? v : 1500;
          this._closeOnCompleteTimer = setTimeout(() => {
            var x, R, P;
            this._closeOnCompleteTimer = null, this._phase === "complete" && (this._dispatchPublic(M.COMPLETE_ACTION, {}), (P = (R = (x = this.config) == null ? void 0 : x.callbacks) == null ? void 0 : R.onCompleteAction) == null || P.call(R), this.close());
          }, w);
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
    if (o.length === 0 || o.some((l) => !Ar.has(l.status))) return;
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
      return this._cachedSources = et.filter((f) => f.id !== "url"), this._cachedSources;
    const t = e.providers.length > 0 ? Wa(e.providers) : [], i = e.customSources ?? [], o = e.coreSources ? new Set(e.coreSources) : null, s = o ? et.filter((f) => o.has(f.id)) : et, n = e.companionUrl ? s : s.filter((f) => f.id !== "url"), a = n.filter(
      (f) => f.id === "device" || f.id === "url"
    ), l = n.filter(
      (f) => f.id !== "device" && f.id !== "url"
    ), d = /* @__PURE__ */ new Set(), c = [];
    for (const f of [
      ...a,
      ...t,
      ...l,
      ...i
    ])
      if (!d.has(f.id)) {
        if (V._RESERVED_IDS.has(f.id) && f.onActivate) {
          console.warn(
            `[sfx-uploader] Custom source id "${f.id}" conflicts with a built-in source and was skipped.`
          );
          continue;
        }
        d.add(f.id), c.push(f);
      }
    return this._cachedSources = c, this._cachedSources;
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
    var n, a, l, d, c;
    const t = (n = this.config) == null ? void 0 : n.callbacks;
    this._isReviewing && (this._isReviewing = !1, this._reviewFiles = []);
    const i = ((a = this.config) == null ? void 0 : a.preserveFolderStructure) !== !1;
    let o = 0, s = !1;
    for (const p of e) {
      if (Vt(p.name)) continue;
      if (s) {
        o++;
        continue;
      }
      const f = i ? Ra(Ua(p)) : "", k = this._store.getState();
      if ([...k.files.values()].some(
        (v) => v.name === p.name && v.size === p.size && v.relativeFolder === f && v.status !== "rejected" && v.status !== "cancelled"
      )) continue;
      const y = p.type || Rr(p.name), E = Kt(
        { name: p.name, size: p.size, type: y },
        k.restrictions,
        k.files
      );
      if (E) {
        if (Ya(E)) {
          s = !0, o++;
          continue;
        }
        const v = y.startsWith("image/") && !ve(y) ? URL.createObjectURL(p) : null, w = {
          id: Ie(),
          status: "rejected",
          file: p,
          remoteUrl: null,
          name: p.name,
          size: p.size,
          type: y,
          previewUrl: v,
          duration: null,
          progress: 0,
          speed: 0,
          bytesUploaded: 0,
          error: E,
          retryCount: 0,
          response: null,
          addedAt: Date.now(),
          meta: {},
          tags: [],
          product: {},
          remoteInfo: null,
          ...Ae,
          relativeFolder: f
        };
        Le(this._store, w), this._dispatchPublic(M.FILE_REJECTED, {
          file: w,
          reason: E
        }), (l = t == null ? void 0 : t.onFileRejected) == null || l.call(t, w, E);
        const x = (d = this.config) == null ? void 0 : d.rejectedFileAutoRemoveDelay, R = x === !1 || x === 0 || x === void 0 ? 0 : x;
        if (R > 0) {
          const P = w.id, I = setTimeout(() => {
            this._rejectedTimers.delete(P);
            const L = this._store.getState().files.get(P);
            L && L.status === "rejected" && rr(this._store, P);
          }, R);
          this._rejectedTimers.set(P, I);
        }
        continue;
      }
      let A = null;
      y.startsWith("image/") && !ve(y) && (A = URL.createObjectURL(p));
      const _ = {
        id: Ie(),
        status: "idle",
        file: p,
        remoteUrl: null,
        name: p.name,
        size: p.size,
        type: y,
        previewUrl: A,
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
        relativeFolder: f
      };
      if (Le(this._store, _), this._dispatchPublic(M.FILE_ADDED, { file: _ }), (c = t == null ? void 0 : t.onFileAdded) == null || c.call(t, _), p.type.startsWith("video/")) {
        Ka(p).then((w) => {
          if (!w) return;
          const x = this._store.getState(), R = x.files.get(_.id);
          if (R) {
            const P = new Map(x.files);
            P.set(_.id, { ...R, previewUrl: w }), this._store.setState({ files: P });
          } else
            URL.revokeObjectURL(w);
        });
        const v = document.createElement("video");
        v.preload = "metadata", v.src = URL.createObjectURL(p), v.onerror = () => {
          URL.revokeObjectURL(v.src);
        }, v.onloadedmetadata = () => {
          const w = v.duration;
          if (URL.revokeObjectURL(v.src), !isFinite(w)) return;
          const x = this._store.getState(), R = x.files.get(_.id);
          if (R) {
            const P = new Map(x.files);
            P.set(_.id, { ...R, duration: w }), this._store.setState({ files: P });
          }
        };
      }
    }
    if (o > 0) {
      const p = this._storeCtrl.state.t, f = this._store.getState().restrictions.maxNumberOfFiles ?? 0;
      this._showToast(
        p("tooManyFilesSkipped", {
          count: o,
          max: f,
          defaultValue_one: "Skipped {{count}} file — limit is {{max}}",
          defaultValue_other: "Skipped {{count}} files — limit is {{max}}"
        }),
        "warning"
      );
    }
    this._store.getState().queueConfig.autoProceed && this.upload();
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
    var s, n, a, l, d;
    const t = this._store.getState().files.get(e);
    if (!t) return;
    const i = { ...t };
    if ((this._fullscreenPreviewUrl && this._fullscreenPreviewUrl === t.previewUrl || this._fullscreenVideoFile && this._fullscreenVideoFile === t.file) && (this._fullscreenPreviewUrl = null, this._fullscreenVideoFile = null), t.previewUrl && URL.revokeObjectURL(t.previewUrl), t.file) {
      const c = this._videoBlobUrls.get(t.file);
      c && (URL.revokeObjectURL(c), this._videoBlobUrls.delete(t.file));
    }
    (t.status === "uploading" || t.status === "queued" || t.status === "retrying" || t.status === "paused") && ((s = this._engine) == null || s.cancelFile(e)), rr(this._store, e), (n = this._engine) == null || n.recompute(), this._dimCache.delete(e);
    const o = this._rejectedTimers.get(e);
    if (o && (clearTimeout(o), this._rejectedTimers.delete(e)), this._previewFileId === e) {
      const c = [...this._store.getState().files.values()];
      this._previewFileId = c.length > 0 ? c[0].id : null;
    }
    this._purgeSimilarState(e), this._dispatchPublic(M.FILE_REMOVED, { file: i }), (d = (l = (a = this.config) == null ? void 0 : a.callbacks) == null ? void 0 : l.onFileRemoved) == null || d.call(l, i);
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
  /**
   * Single (per-tile) check: processes one image independently and
   * accumulatively — clicking several tiles spins them all, no click cancels
   * another, and there is no batch progress banner (that's only for the
   * select-all-and-Check batch).
   *
   * TODO(dev): replace the simulated timeout with the real per-image API call
   * (render w=300 → POST embedding). Multiple of these may run concurrently;
   * add a sensible concurrency limit if needed.
   */
  _checkSimilarSingleFile(e) {
    if (this._similarActiveIds.has(e.id)) return;
    this._similarActiveIds = new Set(this._similarActiveIds).add(e.id);
    const t = this._simMockCounter++, i = window.setTimeout(() => {
      const o = new Set(this._similarActiveIds);
      o.delete(e.id), this._similarActiveIds = o;
      const s = new Map(this._similarResults);
      s.set(e.id, this._mockSimilarAssets(e, t)), this._similarResults = s;
    }, 1100);
    this._similarSimTimers.push(i);
  }
  /**
   * Runs the similarity check for the given images and drives the loading UI
   * (per-tile spinner + batch progress banner).
   *
   * TODO(dev): replace the simulated per-image progression below with the real
   * request. For each image: render a w=300 version, POST it to the embedding
   * endpoint (https://ai.scaleflex.com/images/embedding/...) with the threshold
   * derived from `this.config?.similarityCheck?.confidence` (low 0.60 / mid 0.75
   * / high 0.90), collect the returned `similar_assets`, and mark the image done.
   * Then surface the results in a panel (Open in new window / Discard from
   * upload) — that screen is the next step. The loading UI, selection mode,
   * per-tile button and events are already wired; only the network call and the
   * results rendering remain.
   */
  _runSimilarityCheck(e) {
    if (this._clearSimilarRun(), !e.length) return;
    this._similarRunIds = e.map((o) => o.id);
    let t = 0;
    const i = () => {
      if (t >= e.length) {
        if (!this._previewFileId) {
          const l = e.find(
            (d) => {
              var c;
              return (((c = this._similarResults.get(d.id)) == null ? void 0 : c.length) ?? 0) > 0;
            }
          );
          l && (this._previewFileId = l.id, this._showSettings = !1, this._previewPanelTab = "similar");
        }
        const a = window.setTimeout(() => this._clearSimilarRun(), 1500);
        this._similarSimTimers.push(a);
        return;
      }
      const o = e[t], s = o.id;
      this._similarActiveIds = new Set(this._similarActiveIds).add(s);
      const n = window.setTimeout(() => {
        const a = new Set(this._similarActiveIds);
        a.delete(s), this._similarActiveIds = a;
        const l = new Map(this._similarResults);
        l.set(s, this._mockSimilarAssets(o, t)), this._similarResults = l, t += 1, i();
      }, 1100);
      this._similarSimTimers.push(n);
    };
    i();
  }
  /**
   * TODO(dev): remove. Generates fake similar_assets for the demo so the
   * results UI is visible. Replace with the real `similar_assets` from the
   * embedding endpoint response.
   */
  _mockSimilarAssets(e, t) {
    const i = [3, 1, 0, 12, 0, 24, 2][t % 7], o = e.name.lastIndexOf("."), s = o > 0 ? e.name.slice(0, o) : e.name, n = o > 0 ? e.name.slice(o + 1).toLowerCase() : "jpg";
    return Array.from({ length: i }, (a, l) => ({
      uuid: `${e.id}-sim-${l}`,
      score: Math.max(0.6, 0.99 - l * 0.04),
      // Demo reuses the source preview so a real image shows; the real BE
      // returns the similar asset's own CDN url (filename lives in that url).
      url: e.previewUrl || "",
      // TODO(dev): drop these — the BE response carries the asset's own url
      // (name is extracted from it) and, when available, size/dimensions.
      name: `${s}-match-${l + 1}.${n}`,
      size: e.size ? Math.round(e.size * (0.6 + l % 5 * 0.1)) : void 0,
      width: 1920,
      height: 1080
    }));
  }
  /** Clears only the current run (timers, run/active ids). Keeps the persistent
   *  checked set so finished images stay marked. Used by Cancel / Done. */
  _clearSimilarRun() {
    this._similarSimTimers.forEach((e) => clearTimeout(e)), this._similarSimTimers = [], this._similarRunIds = [], this._similarActiveIds = /* @__PURE__ */ new Set();
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
   *  (decoded, query stripped), falling back to an explicit name or the uuid. */
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
    return e.name || t || e.uuid;
  }
  /** Meta line for a similar asset card: format · size · resolution. Excludes the
   *  name itself — only a real file extension counts (avoids echoing the name). */
  _simAssetMeta(e) {
    const t = this._simAssetName(e), i = t.lastIndexOf("."), o = i > 0 ? t.slice(i + 1).toUpperCase() : "", s = [];
    return o && o.length <= 5 && s.push(o), e.size && s.push(ye(e.size)), e.width && e.height && s.push(`${e.width}×${e.height}`), s.join(" · ");
  }
  _locateFile(e) {
    var s, n, a;
    if (!e) return;
    const t = xs(e, this.config ?? void 0), i = this.dispatchEvent(
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
    return e === "modal" ? u`
        ${this._isOpen && !this._isMinimized ? u`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${i}></sfx-toast>
                </div>
              </div>
            ` : $}
        ${this._renderFsOverlay()}
      ` : u`
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
    return u`
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
        ${this._fullscreenVideoFile ? u`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${(o) => o.stopPropagation()}></video>` : u`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${Z(this._fsZoom > 1 ? { transform: `scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)` } : null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${(o) => o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom >= V._FS_ZOOM_LEVELS[V._FS_ZOOM_LEVELS.length - 1] ? e("resetZoom", "Reset zoom") : e("zoomIn", "Zoom in ({{zoom}}×)", { zoom: this._fsZoom })}>
          ${this._fsZoom >= V._FS_ZOOM_LEVELS[V._FS_ZOOM_LEVELS.length - 1] ? u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>` : u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
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
    return u`
      <div class="inline-header">
        <div class="inline-header-top">
          ${e.accent ? u`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${e.accent}</span>
                </div>
              ` : $}
          ${e.title ? u`<h2 class="inline-header-title">${e.title}</h2>` : $}
        </div>
        ${e.description ? u`<div class="inline-header-desc">${e.description}</div>` : $}
      </div>
    `;
  }
  _renderHeader() {
    var A, _, v, w, x, R;
    if (this._phase === "complete") return $;
    const e = this._storeCtrl.state.t, t = ((A = this.config) == null ? void 0 : A.mode) ?? "modal";
    if (this._phase === "uploading") {
      const L = [...this._storeCtrl.state.files.values()].filter((ce) => ce.status !== "rejected" && ce.status !== "cancelled"), T = L.length, J = L.filter((ce) => ce.status === "complete").length;
      return u`
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
                ${e("nOfNComplete", "{{completed}} of {{total}} complete", { completed: J, total: T })}${this._lastEta > 0 ? ` · ${e("etaLeft", "~{{eta}} left", { eta: qt(this._lastEta) })}` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    if (t === "inline" && ((_ = this.config) != null && _.inlineHeader)) return $;
    const i = ((v = this.config) == null ? void 0 : v.header) ?? (t === "modal" ? "close" : !0);
    if (i === !1) return $;
    const o = t === "modal" ? this._onModalDismiss : this._onInlineDismiss, s = i === "back" ? u`<button
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
          </button>` : $, n = (w = this.config) == null ? void 0 : w.uploadSettings, a = n !== !1 && (n == null || n.enabled !== !1), l = n !== !1 && n != null && n.showResumableSwitcher === !0, d = [...this._storeCtrl.state.files.values()], c = d.some(
      (P) => ue(P) === "image" && !ve(P.type)
    ), p = d.some((P) => ue(P) === "pdf"), f = d.some((P) => ue(P) === "vid"), b = a && (c || p || f || l) ? u`<button
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
          </button>` : $, y = (R = (x = this._metadataSchema) == null ? void 0 : x.regionalVariantsGroups) != null && R.length ? u`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>` : $, E = i === "close" ? u`<button
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
    return u`
      <div class="header">
        ${s}
        ${i !== "back" ? u` <div class="header-icon">
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
        ${y}
        ${b}
        ${E}
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
    var c;
    const t = this._storeCtrl.state, i = t.t, o = Math.round(t.totalProgress ?? 0), s = e.filter((p) => p.status !== "rejected" && p.status !== "cancelled"), n = s.length, a = s.filter((p) => p.status === "complete").length, l = s.filter((p) => ni(p.status)), d = [];
    return n > 1 && d.push(i("nOfNComplete", "{{completed}} of {{total}} complete", { completed: a, total: n })), this._lastEta > 0 && d.push(i("etaLeft", "~{{eta}} left", { eta: qt(this._lastEta) })), u`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          ${i("uploadingFiles", { count: n, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}
        </div>
        ${d.length > 0 ? u`<div class="upload-overlay-subtitle">${d.join(" · ")}</div>` : $}
        ${n > 1 ? u`<div class="upload-overlay-bar">
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
          ${(c = this.config) != null && c.minimizeOnUpload ? u`<button
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
    return u`
      <div class="upload-overlay-files">
        ${Yt(i, (o) => o.id, (o) => {
      const s = o.status === "paused", n = o.status === "uploading", a = o.status === "queued", l = Math.round(o.progress ?? 0), d = s ? t("paused", "Paused") : a ? t("queued", "Queued") : `${l}%`;
      return u`
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
                  <div class="upload-overlay-file-pct">${d}</div>
                </div>
              </div>
              <div class="upload-overlay-file-actions">
                ${n && o.isTus ? u`
                      <button
                        class="upload-overlay-file-btn"
                        title=${t("pause", "Pause")}
                        aria-label=${t("pauseUpload", "Pause upload")}
                        @click=${() => {
        var c;
        return (c = this._engine) == null ? void 0 : c.pauseFile(o.id);
      }}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      </button>
                    ` : $}
                ${s ? u`
                      <button
                        class="upload-overlay-file-btn paused"
                        title=${t("resume", "Resume")}
                        aria-label=${t("resumeUpload", "Resume upload")}
                        @click=${() => {
        var c;
        return (c = this._engine) == null ? void 0 : c.resumeFile(o.id);
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
    const t = this._storeCtrl.state, i = t.t, o = Math.round(t.totalProgress ?? 0), s = this._phase === "complete", n = e.filter((c) => c.status === "complete").length, a = e.filter((c) => c.status === "failed").length, l = e.filter(
      (c) => c.status === "complete" && c.alreadyExisted
    ).length, d = n > 0 && a === 0 && l >= n;
    return this._isPillExpanded === !1 ? u`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s ? a > 0 ? n > 0 ? u`<div class="float-collapsed-icon warn">
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
                    </div>` : u`<div class="float-collapsed-icon error">
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
                    </div>` : d ? u`<div class="float-collapsed-icon info">
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
                    </div>` : u`<div class="float-collapsed-icon done">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>` : u`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${s ? a > 0 ? n > 0 ? i("partiallyUploaded", "Partially uploaded") : i("uploadFailed", "Upload failed") : d ? i("alreadyInLibrary", { count: l, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" }) : i("uploadComplete", "Upload complete") : i("uploadingFiles", { count: e.length, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}</span
            >
            ${s ? $ : u`<span class="float-collapsed-pct">${o}%</span>`}
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
      ` : u`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${s ? a > 0 ? n > 0 ? "warn" : "error" : d ? "info" : "done" : ""}"
            >
              ${s ? a > 0 ? n > 0 ? u`<svg
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
                      </svg>` : u`<svg
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
                      </svg>` : d ? u`<svg
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
                      </svg>` : u`<svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>` : u`<svg
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
                ${s ? a > 0 ? n > 0 ? i("partiallyUploaded", "Partially uploaded") : i("uploadFailed", "Upload failed") : d ? i("alreadyInLibrary", { count: l, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" }) : i("uploadComplete", "Upload complete") : i("uploadingFiles", { count: e.length, defaultValue_one: "Uploading {{count}} file", defaultValue_other: "Uploading {{count}} files" })}
              </div>
              <div class="float-subtitle">
                ${s ? d ? i("alreadyInLibrarySubtitle", { count: l, defaultValue_one: "It’s ready to use — nothing new to upload", defaultValue_other: "They’re ready to use — nothing new to upload" }) : `${i("filesUploaded", { count: n, defaultValue_one: "{{count}} file uploaded", defaultValue_other: "{{count}} files uploaded" })}${a > 0 ? `, ${i("nFailed", "{{count}} failed", { count: a })}` : ""}` : `${i("nOfNComplete", "{{completed}} of {{total}} complete", { completed: n, total: e.length })}${this._lastEta > 0 ? ` · ${i("etaLeft", "~{{eta}} left", { eta: qt(this._lastEta) })}` : ""}`}
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
        ${s && l > 0 && !d ? u`<div class="float-info-note" role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>${i("alreadyInLibrary", { count: l, defaultValue_one: "{{count}} file was already in your library", defaultValue_other: "{{count}} files were already in your library" })}</span>
            </div>` : $}
        <div class="float-items">
          ${Yt([...e].reverse(), (c) => c.id, (c) => {
      var f, k, b;
      const p = c.status === "failed" || c.status === "error";
      return u`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${Z(c.previewUrl ? { "background-image": `url(${c.previewUrl})`, "background-size": "cover", "background-position": "center" } : null)}
                >
                  ${c.previewUrl ? $ : u`<svg
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
                  <div class="float-item-name">${c.name}</div>
                  <div class="float-item-size">${ye(c.size)}</div>
                </div>
                <div class="float-item-status">
                  ${c.status === "complete" ? u`${(f = this.config) != null && f.showLocateButton && ((b = (k = c.response) == null ? void 0 : k.file) != null && b.uuid) ? u`<button
                              class="float-item-act locate"
                              title=${i("locate", "Locate")}
                              aria-label=${i("locate", "Locate")}
                              @click=${() => this._locateFile(c)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <circle cx="12" cy="12" r="7" />
                              </svg>
                            </button>` : $}
                        ${c.alreadyExisted ? u`<div
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
                            </div>` : u`<div class="float-item-done">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>`}` : p ? u` <div class="float-item-error-wrap">
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
                            >${c.error || "Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${() => {
        var y;
        this._ensureEngine(), (y = this._engine) == null || y.retryFile(c.id);
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
                        </button>` : c.status === "paused" ? u`
                        <button
                          class="float-item-act paused"
                          title=${i("resume", "Resume")}
                          aria-label=${i("resumeUpload", "Resume upload")}
                          @click=${() => {
        var y;
        return (y = this._engine) == null ? void 0 : y.resumeFile(c.id);
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
                          @click=${() => this._removeFile(c.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>` : u`
                        <div class="float-item-spinner"></div>
                        ${c.status === "uploading" && c.isTus ? u`<button
                              class="float-item-act"
                              title=${i("pause", "Pause")}
                              aria-label=${i("pauseUpload", "Pause upload")}
                              @click=${() => {
        var y;
        return (y = this._engine) == null ? void 0 : y.pauseFile(c.id);
      }}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>` : $}
                        ${c.status === "uploading" || c.status === "queued" || c.status === "retrying" ? u`<button
                              class="float-item-act del"
                              title=${i("remove", "Remove")}
                              aria-label=${i("removeFile", "Remove file")}
                              @click=${() => this._removeFile(c.id)}
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
    var y, E, A, _, v, w, x;
    if (e.length === 0) return $;
    const t = this._storeCtrl.state.t, i = [...e].reverse(), o = i.find((R) => R.id === this._previewFileId) ?? i[0], s = ((y = o.name.split(".").pop()) == null ? void 0 : y.toUpperCase()) || "";
    new Date(o.addedAt).toLocaleDateString(
      "en-US",
      { month: "short", day: "numeric", year: "numeric" }
    ), this._store.getState().targetFolder;
    const n = i.reduce((R, P) => R + (P.size || 0), 0), a = !!((A = (E = this.config) == null ? void 0 : E.similarityCheck) != null && A.enabled), l = i.filter(
      (R) => ue(R) === "image" && !ve(R.type) && !this._similarResults.has(R.id)
    ).map((R) => R.id), d = Math.min(
      l.length,
      be
    ), c = d > 0 && this._similarSelectedIds.size >= d, p = this._similarSelectedIds.size >= be, f = this._similarResults.get(o.id), k = f !== void 0, b = k ? this._previewPanelTab : "details";
    return u`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Z({ flex: String(this._splitPct) })}>
          ${((_ = this.config) == null ? void 0 : _.mode) === "inline" && ((v = this.config) != null && v.inlineHeader) ? this._renderInlineHeader(this.config.inlineHeader) : $}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${i.length} ${i.length === 1 ? "asset" : "assets"} ·
              ${ye(n)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${i}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Or(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .showCheckSimilar=${a}
            .selectMode=${a}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${c}
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
          ${this._showSettings ? this._renderSettingsPanel() : u`
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
              ${o.previewUrl || o.type.startsWith("video/") && o.file ? u`
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
          ${k ? u`
                <div class="preview-tabs" role="tablist">
                  <button
                    class="preview-tab ${b === "details" ? "active" : ""}"
                    role="tab"
                    aria-selected=${b === "details"}
                    @click=${() => {
      this._previewPanelTab = "details";
    }}
                  >
                    ${t("details", "Details")}
                  </button>
                  <button
                    class="preview-tab ${b === "similar" ? "active" : ""}"
                    role="tab"
                    aria-selected=${b === "similar"}
                    @click=${() => {
      this._previewPanelTab = "similar";
    }}
                  >
                    <span>${t("similarTab", "Similar")}</span>${f && f.length > 0 ? u`<span class="preview-tab-count">${f.length}</span>` : $}
                  </button>
                </div>
              ` : $}
          ${b === "similar" ? this._renderSimilarPanel(o, f ?? []) : u`
          ${o.type.startsWith("video/") && o.file ? u`
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
              ` : o.previewUrl ? u`
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
              ` : u`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${ue(o)}">
                    <img
                      class="preview-doc-type-img"
                      src=${So(s)}
                      alt="${s ? `${s} file` : "File"}"
                      @error=${(R) => {
      const P = R.target, I = $o();
      !P.dataset.fallback && P.src !== I && (P.dataset.fallback = "1", P.src = I);
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
          ${this._metadataSchema && ((w = this.config) != null && w.metadataConfig) ? u`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${s}${o.size ? ` · ${ye(o.size)}` : ""}${this._previewDims !== "—" ? ` · ${this._previewDims}` : ""}
                </div>
              </div>` : $}
          ${this._metadataSchema && ((x = this.config) != null && x.metadataConfig) ? u`
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
                  ></sfx-metadata-form>
                </div>
              ` : u`
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
                    ${o.size ? u`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${t("size", "Size")}</div>
                            <div class="preview-file-info-val">
                              ${ye(o.size)}
                            </div>
                          </div>
                        ` : $}
                    ${this._previewDims !== "—" ? u`
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
    return t.length === 0 ? u`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound", "No similar assets found")}</b>
          <span>${i("noSimilarHint", "This image looks unique in your library.")}</span>
        </div>
      ` : u`
      <div class="psim-body">
        ${t.map((o) => {
      const s = Math.round(o.score * 100);
      return u`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score >= 0.9 ? "high" : ""}">${s}%</span>
                <button
                  class="psim-open"
                  @click=${() => this._openSimilarAsset(o.url)}
                  title=${i("openInNewWindow", "Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </button>
                ${o.url ? u`<img src=${o.url} alt="" />` : $}
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
      (f) => ue(f) === "image" && !ve(f.type)
    ), o = t.some((f) => ue(f) === "pdf"), s = t.some((f) => ue(f) === "vid"), n = (p = this.config) == null ? void 0 : p.uploadSettings, a = !!n && n.showResumableSwitcher === !0, l = (f) => {
      switch (f) {
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
    }, d = (f) => {
      switch (f) {
        case "hls":
          return e("protocolHls", "HLS");
      }
    }, c = (f) => (k) => {
      const b = parseInt(k.target.value, 10);
      f(Number.isFinite(b) ? b : 0);
    };
    return u`
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
        ${i || o ? u`
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
                      @input=${c((f) => this._setMaxW = f)}
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
                      @input=${c((f) => this._setMaxH = f)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            ` : $}

        ${s ? u`
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
                ${this._setResolutionOpen && this._setTranscode ? u`
                      <div class="smenu">
                        ${Pl.map(
      (f) => u`
                            <div
                              class="sopt ${f === this._setResolution ? "cur" : ""}"
                              @click=${() => {
        this._setResolution = f, this._setResolutionOpen = !1;
      }}
                            >
                              ${l(f)}
                              ${f === this._setResolution ? u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : $}
                            </div>
                          `
    )}
                      </div>
                    ` : $}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode ? "" : "dep-off"}">
                <label>${e("protocols", "Protocols")}</label>
                ${El.map(
      (f) => u`
                    <div
                      class="sradio-row"
                      @click=${() => {
        this._setProtocol = f;
      }}
                    >
                      <span class="sradio ${this._setProtocol === f ? "on" : ""}"></span>
                      <span class="sradio-lbl">${d(f)}</span>
                    </div>
                  `
    )}
              </div>
            ` : $}

        ${a ? u`
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
      var f;
      this._setResumable = !this._setResumable, (f = this._engine) == null || f.updateConfig({
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
    var k, b, y, E, A, _, v, w, x, R, P, I, L;
    const e = this._storeCtrl.state, t = e.t, i = [...e.files.values()], o = i.filter(
      (T) => T.status === "idle" || T.status === "queued" || T.status === "error" || T.status === "failed"
    ), s = this._phase, n = Or(e.restrictions), a = i.length > 0, l = !!((b = (k = this.config) == null ? void 0 : k.similarityCheck) != null && b.enabled), d = i.filter(
      (T) => ue(T) === "image" && !ve(T.type) && !this._similarResults.has(T.id)
    ).map((T) => T.id), c = Math.min(
      d.length,
      be
    ), p = c > 0 && this._similarSelectedIds.size >= c, f = this._similarSelectedIds.size >= be;
    return u`
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
          ${((y = this.config) == null ? void 0 : y.mode) === "inline" && ((E = this.config) != null && E.inlineHeader) && !this._previewFileId && s !== "uploading" && s !== "complete" && !this._isReviewing ? this._renderInlineHeader(this.config.inlineHeader) : $}
          ${this._isReviewing ? u`
                <sfx-last-upload-review
                  .t=${t}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((A = this.config) == null ? void 0 : A.showLocateButton) ?? !1}
                  .showCopyCdnButton=${((_ = this.config) == null ? void 0 : _.showCopyCdnButton) ?? !1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              ` : s === "complete" ? u`
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
                  .showMinimize=${!!((v = this.config) != null && v.minimizeOnUpload) && ((w = this.config) == null ? void 0 : w.mode) !== "inline"}
                  @close-uploader=${this._onSuccessCardClose}
                  @minimize-uploader=${this._onMinimize}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              ` : s === "uploading" ? this._renderUploadOverlay(i) : u`
                ${a ? $ : u`<sfx-drop-zone
                        .t=${t}
                        .compact=${a}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${n}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((x = this.config) == null ? void 0 : x.sourcesLayout) ?? "pills"}
                        .mode=${((R = this.config) == null ? void 0 : R.mode) ?? "modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview ? u`<button
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
                ${a ? this._previewFileId || this._showSettings ? this._renderPreviewLayout(i) : u`
                        <div class="asset-count">
                          ${i.length}
                          ${i.length === 1 ? "file" : "files"} ·
                          ${ye(
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
                          .selectionFull=${f}
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

        ${a && s !== "complete" && s !== "uploading" ? u`
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
                .showFillMetadata=${!!(((P = this.config) == null ? void 0 : P.showFillMetadata) ?? ((I = this.config) == null ? void 0 : I.metadataConfig))}
                .requireMetadataFirst=${this._hasUnfilledRequiredMetadata}
                .showCheckSimilar=${!1}
                .selectMode=${l && this._similarSelectedIds.size > 0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${c}
                .allSelected=${p}
              ></sfx-actions-bar>
            ` : $}
        ${this._showUrlDialog ? u`<sfx-url-dialog .t=${t}></sfx-url-dialog>` : $}
        ${this._showCameraDialog ? u`<sfx-camera-dialog .t=${t}></sfx-camera-dialog>` : $}
        ${this._showScreenCastDialog ? u`<sfx-screen-cast-dialog .t=${t}></sfx-screen-cast-dialog>` : $}
        ${this._activeConnector && ((L = this.config) != null && L.connectors) ? u`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${Ir.has(this._activeConnector) ? u`
                        <sfx-search-provider-browser
                          .t=${t}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      ` : u`
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
        ${this._bulkMetadataOpen && this._metadataSchema ? u`
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
  z()
], B.prototype, "_isOpen");
N([
  z()
], B.prototype, "_activeConnector");
N([
  z()
], B.prototype, "_showUrlDialog");
N([
  z()
], B.prototype, "_showCameraDialog");
N([
  z()
], B.prototype, "_showScreenCastDialog");
N([
  z()
], B.prototype, "_similarSelectMode");
N([
  z()
], B.prototype, "_similarSelectedIds");
N([
  z()
], B.prototype, "_similarRunIds");
N([
  z()
], B.prototype, "_similarActiveIds");
N([
  z()
], B.prototype, "_similarResults");
N([
  z()
], B.prototype, "_previewPanelTab");
N([
  z()
], B.prototype, "_previewFileId");
N([
  z()
], B.prototype, "_previewDims");
N([
  z()
], B.prototype, "_fileInfoOpen");
N([
  z()
], B.prototype, "_splitPct");
N([
  z()
], B.prototype, "_showSettings");
N([
  z()
], B.prototype, "_setResize");
N([
  z()
], B.prototype, "_setMaxW");
N([
  z()
], B.prototype, "_setMaxH");
N([
  z()
], B.prototype, "_setTranscode");
N([
  z()
], B.prototype, "_setResolution");
N([
  z()
], B.prototype, "_setResolutionOpen");
N([
  z()
], B.prototype, "_setProtocol");
N([
  z()
], B.prototype, "_setResumable");
N([
  z()
], B.prototype, "_fullscreenPreviewUrl");
N([
  z()
], B.prototype, "_fullscreenVideoFile");
N([
  z()
], B.prototype, "_fsZoom");
N([
  z()
], B.prototype, "_bodyDragOver");
N([
  z()
], B.prototype, "_isMinimized");
N([
  z()
], B.prototype, "_isPillExpanded");
N([
  z()
], B.prototype, "_metadataSchema");
N([
  z()
], B.prototype, "_regionalFilters");
N([
  z()
], B.prototype, "_bulkMetadataOpen");
N([
  z()
], B.prototype, "_bulkMetadataInitialFieldKey");
N([
  z()
], B.prototype, "_isReviewing");
N([
  z()
], B.prototype, "_reviewFiles");
N([
  z()
], B.prototype, "_hasStoredReview");
let Xl = B;
export {
  xi as A,
  Cs as B,
  et as C,
  Ps as D,
  Ee as E,
  Z as F,
  Eo as G,
  Vl as H,
  Nl as I,
  rl as J,
  Hl as K,
  ql as L,
  ci as M,
  nl as N,
  He as O,
  Wr as P,
  qe as Q,
  Yl as R,
  re as S,
  al as T,
  za as U,
  So as V,
  $o as W,
  ye as X,
  Wl as Y,
  Kl as Z,
  $i as _,
  M as a,
  Gl as b,
  X as c,
  K as d,
  Lr as e,
  Ft as f,
  fe as g,
  Xl as h,
  bs as i,
  ki as j,
  ai as k,
  vs as l,
  Ia as m,
  Si as n,
  Wa as o,
  Ua as p,
  Il as q,
  Aa as r,
  Ve as s,
  Te as t,
  Se as u,
  Al as v,
  Ml as w,
  jl as x,
  Dl as y,
  Bl as z
};
