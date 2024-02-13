(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
    return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
    i(r);
  new MutationObserver(r => {
    for (const n of r)
      if (n.type === "childList")
        for (const c of n.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
  }
  ).observe(document, {
    childList: !0,
    subtree: !0
  });
  function s(r) {
    const n = {};
    return r.integrity && (n.integrity = r.integrity),
      r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials" ? n.credentials = "include" : r.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
      n
  }
  function i(r) {
    if (r.ep)
      return;
    r.ep = !0;
    const n = s(r);
    fetch(r.href, n)
  }
}
)();
function H() { }
function wt(e, t) {
  for (const s in t)
    e[s] = t[s];
  return e
}
function Qe(e) {
  return e()
}
function Ne() {
  return Object.create(null)
}
function fe(e) {
  e.forEach(Qe)
}
function Ze(e) {
  return typeof e == "function"
}
function pe(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let he;
function ge(e, t) {
  return he || (he = document.createElement("a")),
    he.href = t,
    e === he.href
}
function yt(e) {
  return Object.keys(e).length === 0
}
function pt(e, ...t) {
  if (e == null)
    return H;
  const s = e.subscribe(...t);
  return s.unsubscribe ? () => s.unsubscribe() : s
}
function B(e, t, s) {
  e.$$.on_destroy.push(pt(t, s))
}
function bt(e, t, s) {
  return e.set(s),
    t
}
const ve = typeof window < "u";
let Fe = ve ? () => window.performance.now() : () => Date.now()
  , $e = ve ? e => requestAnimationFrame(e) : H;
const te = new Set;
function et(e) {
  te.forEach(t => {
    t.c(e) || (te.delete(t),
      t.f())
  }
  ),
    te.size !== 0 && $e(et)
}
function _t(e) {
  let t;
  return te.size === 0 && $e(et),
  {
    promise: new Promise(s => {
      te.add(t = {
        c: e,
        f: s
      })
    }
    ),
    abort() {
      te.delete(t)
    }
  }
}
function O(e, t) {
  e.appendChild(t)
}
function tt(e, t, s) {
  e.insertBefore(t, s || null)
}
function Re(e) {
  e.parentNode.removeChild(e)
}
function U(e) {
  return document.createElement(e)
}
function Gt(e) {
  return document.createTextNode(e)
}
function Ge() {
  return Gt(" ")
}
function N(e, t, s, i) {
  return e.addEventListener(t, s, i),
    () => e.removeEventListener(t, s, i)
}
function u(e, t, s) {
  s == null ? e.removeAttribute(t) : e.getAttribute(t) !== s && e.setAttribute(t, s)
}
function Tt(e) {
  return Array.from(e.childNodes)
}
function Z(e, t, s) {
  e.classList[s ? "add" : "remove"](t)
}
let ce;
function ae(e) {
  ce = e
}
function xt() {
  if (!ce)
    throw new Error("Function called outside component initialization");
  return ce
}
function kt(e) {
  xt().$$.on_mount.push(e)
}
const oe = []
  , xe = []
  , me = []
  , Ve = []
  , St = Promise.resolve();
let ke = !1;
function Lt() {
  ke || (ke = !0,
    St.then(st))
}
function Se(e) {
  me.push(e)
}
const Te = new Set;
let de = 0;
function st() {
  const e = ce;
  do {
    for (; de < oe.length;) {
      const t = oe[de];
      de++,
        ae(t),
        Rt(t.$$)
    }
    for (ae(null),
      oe.length = 0,
      de = 0; xe.length;)
      xe.pop()();
    for (let t = 0; t < me.length; t += 1) {
      const s = me[t];
      Te.has(s) || (Te.add(s),
        s())
    }
    me.length = 0
  } while (oe.length);
  for (; Ve.length;)
    Ve.pop()();
  ke = !1,
    Te.clear(),
    ae(e)
}
function Rt(e) {
  if (e.fragment !== null) {
    e.update(),
      fe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1],
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(Se)
  }
}
const we = new Set;
let Ct;
function Ce(e, t) {
  e && e.i && (we.delete(e),
    e.i(t))
}
function nt(e, t, s, i) {
  if (e && e.o) {
    if (we.has(e))
      return;
    we.add(e),
      Ct.c.push(() => {
        we.delete(e),
          i && (s && e.d(1),
            i())
      }
      ),
      e.o(t)
  } else
    i && i()
}
const Et = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Mt(e, t) {
  const s = {}
    , i = {}
    , r = {
      $$scope: 1
    };
  let n = e.length;
  for (; n--;) {
    const c = e[n]
      , h = t[n];
    if (h) {
      for (const f in c)
        f in h || (i[f] = 1);
      for (const f in h)
        r[f] || (s[f] = h[f],
          r[f] = 1);
      e[n] = h
    } else
      for (const f in c)
        r[f] = 1
  }
  for (const c in i)
    c in s || (s[c] = void 0);
  return s
}
function At(e) {
  return typeof e == "object" && e !== null ? e : {}
}
function rt(e) {
  e && e.c()
}
function Ee(e, t, s, i) {
  const { fragment: r, after_update: n } = e.$$;
  r && r.m(t, s),
    i || Se(() => {
      const c = e.$$.on_mount.map(Qe).filter(Ze);
      e.$$.on_destroy ? e.$$.on_destroy.push(...c) : fe(c),
        e.$$.on_mount = []
    }
    ),
    n.forEach(Se)
}
function Me(e, t) {
  const s = e.$$;
  s.fragment !== null && (fe(s.on_destroy),
    s.fragment && s.fragment.d(t),
    s.on_destroy = s.fragment = null,
    s.ctx = [])
}
function jt(e, t) {
  e.$$.dirty[0] === -1 && (oe.push(e),
    Lt(),
    e.$$.dirty.fill(0)),
    e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}
function Ae(e, t, s, i, r, n, c, h = [-1]) {
  const f = ce;
  ae(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    props: n,
    update: H,
    not_equal: r,
    bound: Ne(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    callbacks: Ne(),
    dirty: h,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  c && c(a.root);
  let w = !1;
  if (a.ctx = s ? s(e, t.props || {}, (g, M, ...y) => {
    const L = y.length ? y[0] : M;
    return a.ctx && r(a.ctx[g], a.ctx[g] = L) && (!a.skip_bound && a.bound[g] && a.bound[g](L),
      w && jt(e, g)),
      M
  }
  ) : [],
    a.update(),
    w = !0,
    fe(a.before_update),
    a.fragment = i ? i(a.ctx) : !1,
    t.target) {
    if (t.hydrate) {
      const g = Tt(t.target);
      a.fragment && a.fragment.l(g),
        g.forEach(Re)
    } else
      a.fragment && a.fragment.c();
    t.intro && Ce(e.$$.fragment),
      Ee(e, t.target, t.anchor, t.customElement),
      st()
  }
  ae(f)
}
class je {
  $destroy() {
    Me(this, 1),
      this.$destroy = H
  }
  $on(t, s) {
    if (!Ze(s))
      return H;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(s),
      () => {
        const r = i.indexOf(s);
        r !== -1 && i.splice(r, 1)
      }
  }
  $set(t) {
    this.$$set && !yt(t) && (this.$$.skip_bound = !0,
      this.$$set(t),
      this.$$.skip_bound = !1)
  }
}
const Wt = ["swsh12pt5gg-GG35", "swsh12pt5gg-GG36", "swsh12pt5gg-GG37", "swsh12pt5gg-GG38", "swsh12pt5gg-GG39", "swsh12pt5gg-GG40", "swsh12pt5gg-GG41", "swsh12pt5gg-GG42", "swsh12pt5gg-GG43", "swsh12pt5gg-GG44", "swsh12pt5gg-GG45", "swsh12pt5gg-GG46", "swsh12pt5gg-GG47", "swsh12pt5gg-GG48", "swsh12pt5gg-GG49", "swsh12pt5gg-GG50", "swsh12pt5gg-GG51", "swsh12pt5gg-GG52", "swsh12pt5gg-GG53", "swsh12pt5gg-GG54", "swsh12pt5gg-GG55", "swsh12pt5gg-GG56", "swsh12-177", "swsh12-181", "swsh12-184", "swsh12-186", "swsh12tg-TG12", "swsh12tg-TG13", "swsh12tg-TG14", "swsh12tg-TG15", "swsh12tg-TG16", "swsh12tg-TG17", "swsh12tg-TG18", "swsh12tg-TG19", "swsh12tg-TG20", "swsh12tg-TG21", "swsh12tg-TG22", "swsh11-177", "swsh11-180", "swsh11-186", "swsh11tg-TG12", "swsh11tg-TG13", "swsh11tg-TG14", "swsh11tg-TG15", "swsh11tg-TG16", "swsh11tg-TG17", "swsh11tg-TG18", "swsh11tg-TG19", "swsh11tg-TG20", "swsh11tg-TG21", "swsh11tg-TG22", "pgo-72", "pgo-74", "swsh10-161", "swsh10-163", "swsh10-167", "swsh10-172", "swsh10-175", "swsh10-177", "swsh10tg-TG13", "swsh10tg-TG14", "swsh10tg-TG15", "swsh10tg-TG16", "swsh10tg-TG17", "swsh10tg-TG18", "swsh10tg-TG19", "swsh10tg-TG20", "swsh10tg-TG21", "swsh10tg-TG22", "swsh10tg-TG23", "swsh9-154", "swsh9-156", "swsh9-162", "swsh9-166", "swsh9tg-TG13", "swsh9tg-TG14", "swsh9tg-TG15", "swsh9tg-TG16", "swsh9tg-TG17", "swsh9tg-TG18", "swsh9tg-TG19", "swsh9tg-TG20", "swsh9tg-TG21", "swsh9tg-TG22", "swsh9tg-TG23", "swsh8-245", "swsh8-251", "swsh8-252", "swsh8-255", "swsh8-257", "swsh8-266", "swsh8-269", "swsh8-270", "swsh8-271", "swsh7-167", "swsh7-175", "swsh7-180", "swsh7-182", "swsh7-184", "swsh7-186", "swsh7-189", "swsh7-192", "swsh7-194", "swsh7-196", "swsh7-198", "swsh7-205", "swsh7-209", "swsh7-212", "swsh7-215", "swsh7-218", "swsh7-220", "swsh6-164", "swsh6-166", "swsh6-168", "swsh6-170", "swsh6-172", "swsh6-174", "swsh6-177", "swsh6-179", "swsh6-183", "swsh6-185", "swsh6-201", "swsh6-203", "swsh6-205", "swsh5-146", "swsh5-151", "swsh5-153", "swsh5-155", "swsh5-168", "swsh5-170", "swshp-SWSH179", "swshp-SWSH180", "swshp-SWSH181", "swshp-SWSH182", "swshp-SWSH183", "swshp-SWSH184", "swshp-SWSH204", "swshp-SWSH260", "swshp-SWSH261", "swshp-SWSH262"]
  , v = [];
function Ot(e, t) {
  return {
    subscribe: We(e, t).subscribe
  }
}
function We(e, t = H) {
  let s;
  const i = new Set;
  function r(h) {
    if (pe(e, h) && (e = h,
      s)) {
      const f = !v.length;
      for (const a of i)
        a[1](),
          v.push(a, e);
      if (f) {
        for (let a = 0; a < v.length; a += 2)
          v[a][0](v[a + 1]);
        v.length = 0
      }
    }
  }
  function n(h) {
    r(h(e))
  }
  function c(h, f = H) {
    const a = [h, f];
    return i.add(a),
      i.size === 1 && (s = t(r) || H),
      h(e),
      () => {
        i.delete(a),
          i.size === 0 && (s(),
            s = null)
      }
  }
  return {
    set: r,
    update: n,
    subscribe: c
  }
}
function Xe(e) {
  return Object.prototype.toString.call(e) === "[object Date]"
}
function Le(e, t, s, i) {
  if (typeof s == "number" || Xe(s)) {
    const r = i - s
      , n = (s - t) / (e.dt || 1 / 60)
      , c = e.opts.stiffness * r
      , h = e.opts.damping * n
      , f = (c - h) * e.inv_mass
      , a = (n + f) * e.dt;
    return Math.abs(a) < e.opts.precision && Math.abs(r) < e.opts.precision ? i : (e.settled = !1,
      Xe(s) ? new Date(s.getTime() + a) : s + a)
  } else {
    if (Array.isArray(s))
      return s.map((r, n) => Le(e, t[n], s[n], i[n]));
    if (typeof s == "object") {
      const r = {};
      for (const n in s)
        r[n] = Le(e, t[n], s[n], i[n]);
      return r
    } else
      throw new Error(`Cannot spring ${typeof s} values`)
  }
}
function $(e, t = {}) {
  const s = We(e)
    , { stiffness: i = .15, damping: r = .8, precision: n = .01 } = t;
  let c, h, f, a = e, w = e, g = 1, M = 0, y = !1;
  function L(T, x = {}) {
    w = T;
    const m = f = {};
    return e == null || x.hard || G.stiffness >= 1 && G.damping >= 1 ? (y = !0,
      c = Fe(),
      a = T,
      s.set(e = w),
      Promise.resolve()) : (x.soft && (M = 1 / ((x.soft === !0 ? .5 : +x.soft) * 60),
        g = 0),
        h || (c = Fe(),
          y = !1,
          h = _t(d => {
            if (y)
              return y = !1,
                h = null,
                !1;
            g = Math.min(g + M, 1);
            const I = {
              inv_mass: g,
              opts: G,
              settled: !0,
              dt: (d - c) * 60 / 1e3
            }
              , F = Le(I, a, e, w);
            return c = d,
              a = e,
              s.set(e = F),
              I.settled && (h = null),
              !I.settled
          }
          )),
        new Promise(d => {
          h.promise.then(() => {
            m === f && d()
          }
          )
        }
        ))
  }
  const G = {
    set: L,
    update: (T, x) => L(T(w, e), x),
    subscribe: s.subscribe,
    stiffness: i,
    damping: r,
    precision: n
  };
  return G
}
const Ye = We(void 0)
  , Oe = function (e) {
    return e ? {
      alpha: e.alpha,
      beta: e.beta,
      gamma: e.gamma
    } : {
      alpha: 0,
      beta: 0,
      gamma: 0
    }
  }
  , Ke = e => {
    const t = Oe(e);
    return {
      absolute: t,
      relative: {
        alpha: t.alpha - ye.alpha,
        beta: t.beta - ye.beta,
        gamma: t.gamma - ye.gamma
      }
    }
  }
  ;
let Je = !0
  , ye = Oe();
const Dt = Ot(Ke(), function (t) {
  const s = function (i) {
    Je && (Je = !1,
      ye = Oe(i));
    const r = Ke(i);
    t(r)
  };
  return window.addEventListener("deviceorientation", s, !0),
    function () {
      window.removeEventListener("deviceorientation", s, !0)
    }
})
  , D = (e, t = 3) => parseFloat(e.toFixed(t))
  , ie = (e, t = 0, s = 100) => Math.min(Math.max(e, t), s)
  , ee = (e, t, s, i, r) => D(i + (r - i) * (e - t) / (s - t));
const { window: Ht } = Et;
function It(e) {
  let t, s, i, r, n, c, h, f, a, w, g, M, y, L, G, T, x;
  return {
    c() {
      t = U("div"),
        s = U("div"),
        i = U("button"),
        r = U("div"),
        n = U("img"),
        h = Ge(),
        f = U("img"),
        w = Ge(),
        g = U("div"),
        M = Ge(),
        y = U("div"),
        ge(n.src, c = e[9] + "#only-dark") || u(n, "src", c),
        u(n, "alt", "card (dark)"),
        u(n, "loading", "lazy"),
        u(n, "width", "660"),
        u(n, "height", "921"),
        ge(f.src, a = e[9].replace(".png", ".light.png#only-light")) || u(f, "src", a),
        u(f, "alt", "card (light)"),
        u(f, "loading", "lazy"),
        u(f, "width", "660"),
        u(f, "height", "921"),
        u(g, "class", "card__shine"),
        u(y, "class", "card__glare"),
        u(r, "class", "card__front"),
        u(r, "style", L = e[25] + e[15]),
        u(i, "class", "card__rotator"),
        u(i, "tabindex", "0"),
        u(s, "class", "card__translater"),
        u(t, "class", G = "cards " + e[1] + " / interactive /"),
        u(t, "data-number", e[0]),
        u(t, "data-set", e[5]),
        u(t, "data-subtypes", e[2]),
        u(t, "data-supertype", e[3]),
        u(t, "data-rarity", e[4]),
        u(t, "data-trainer-gallery", e[8]),
        u(t, "style", e[16]),
        Z(t, "interacting", e[10]),
        Z(t, "loading", e[11]),
        Z(t, "masked", !!e[6])
    },
    m(m, d) {
      tt(m, t, d),
        O(t, s),
        O(s, i),
        O(i, r),
        O(r, n),
        O(r, h),
        O(r, f),
        O(r, w),
        O(r, g),
        O(r, M),
        O(r, y),
        e[41](t),
        T || (x = [N(Ht, "scroll", e[24]), N(n, "load", e[26]), N(f, "load", e[26]), N(i, "click", e[22]), N(i, "pointermove", e[20]), N(i, "mouseout", e[21]), N(i, "blur", e[23])],
          T = !0)
    },
    p(m, d) {
      d[0] & 512 && !ge(n.src, c = m[9] + "#only-dark") && u(n, "src", c),
        d[0] & 512 && !ge(f.src, a = m[9].replace(".png", ".light.png#only-light")) && u(f, "src", a),
        d[0] & 32768 && L !== (L = m[25] + m[15]) && u(r, "style", L),
        d[0] & 2 && G !== (G = "cards " + m[1] + " / interactive /") && u(t, "class", G),
        d[0] & 1 && u(t, "data-number", m[0]),
        d[0] & 32 && u(t, "data-set", m[5]),
        d[0] & 4 && u(t, "data-subtypes", m[2]),
        d[0] & 8 && u(t, "data-supertype", m[3]),
        d[0] & 16 && u(t, "data-rarity", m[4]),
        d[0] & 256 && u(t, "data-trainer-gallery", m[8]),
        d[0] & 65536 && u(t, "style", m[16]),
        d[0] & 1026 && Z(t, "interacting", m[10]),
        d[0] & 2050 && Z(t, "loading", m[11]),
        d[0] & 66 && Z(t, "masked", !!m[6])
    },
    i: H,
    o: H,
    d(m) {
      m && Re(t),
        e[41](null),
        T = !1,
        fe(x)
    }
  }
}
let Pt = "";
function Ut(e, t, s) {
  let i, r, n, c, h, f, a, w, g;
  B(e, Dt, o => s(33, r = o)),
    B(e, Ye, o => s(34, n = o));
  let { name: M = "" } = t
    , { number: y = "" } = t
    , { set: L = "" } = t
    , { types: G = "" } = t
    , { subtypes: T = "basic" } = t
    , { supertype: x = "pok\xE9mon" } = t
    , { rarity: m = "common" } = t
    , { pageURL: d = "" } = t
    , { img: I = "" } = t
    , { back: F = "/assets/cards/back.png" } = t
    , { foil: V = "" } = t
    , { mask: z = "" } = t
    , { showcase: X = !1 } = t;
  const Y = {
    x: Math.random(),
    y: Math.random()
  }
    , le = {
      x: Math.floor(Y.x * 734),
      y: Math.floor(Y.y * 1280)
    };
  let l = !1, ue = "", b, R, P = !1, _ = !0, K = !0, J = document.visibilityState === "visible";
  const q = {
    stiffness: .066,
    damping: .25
  }
    , be = {
      stiffness: .033,
      damping: .45
    };
  let k = $({
    x: 0,
    y: 0
  }, q);
  B(e, k, o => s(39, w = o));
  let C = $({
    x: 50,
    y: 50,
    o: 0
  }, q);
  B(e, C, o => s(40, g = o));
  let E = $({
    x: 50,
    y: 50
  }, q);
  B(e, E, o => s(37, f = o));
  let se = $({
    x: 0,
    y: 0
  }, be);
  B(e, se, o => s(38, a = o));
  let ne = $({
    x: 0,
    y: 0
  }, be);
  B(e, ne, o => s(35, c = o));
  let re = $(1, be);
  B(e, re, o => s(36, h = o));
  let _e, De, He, Ie = X;
  const Pe = () => {
    Ie && (clearTimeout(He),
      clearTimeout(De),
      clearInterval(_e),
      Ie = !1)
  }
    , it = o => {
      if (Pe(),
        !J || n && n !== b)
        return s(10, P = !1);
      s(10, P = !0),
        o.type === "touchmove" && (o.clientX = o.touches[0].clientX,
          o.clientY = o.touches[0].clientY);
      const p = o.target.getBoundingClientRect()
        , S = {
          x: o.clientX - p.left,
          y: o.clientY - p.top
        }
        , A = {
          x: ie(D(100 / p.width * S.x)),
          y: ie(D(100 / p.height * S.y))
        }
        , ze = {
          x: A.x - 50,
          y: A.y - 50
        };
      Be({
        x: ee(A.x, 0, 100, 37, 63),
        y: ee(A.y, 0, 100, 33, 67)
      }, {
        x: D(-(ze.x / 3.5)),
        y: D(ze.y / 2)
      }, {
        x: D(A.x),
        y: D(A.y),
        o: 1
      })
    }
    , Q = (o, j = 500) => {
      setTimeout(function () {
        s(10, P = !1),
          s(12, k.stiffness = .01, k),
          s(12, k.damping = .06, k),
          k.set({
            x: 0,
            y: 0
          }, {
            soft: 1
          }),
          s(13, C.stiffness = .01, C),
          s(13, C.damping = .06, C),
          C.set({
            x: 50,
            y: 50,
            o: 0
          }, {
            soft: 1
          }),
          s(14, E.stiffness = .01, E),
          s(14, E.damping = .06, E),
          E.set({
            x: 50,
            y: 50
          }, {
            soft: 1
          })
      }, j)
    }
    , ot = o => {
      d != "" && (window.location.href = d)
    }
    , at = o => {
      Q(),
        bt(Ye, n = void 0, n)
    }
    , ct = o => {
      clearTimeout(R),
        R = setTimeout(() => {
          n && n === b && Ue()
        }
          , 300)
    }
    , Ue = () => {
      const o = b.getBoundingClientRect()
        , j = document.documentElement
        , p = {
          x: D(j.clientWidth / 2 - o.x - o.width / 2),
          y: D(j.clientHeight / 2 - o.y - o.height / 2)
        };
      ne.set({
        x: p.x,
        y: p.y
      })
    }
    , ft = () => {
      const o = b.getBoundingClientRect();
      let j = 100
        , p = window.innerWidth / o.width * .9
        , S = window.innerHeight / o.height * .9
        , A = 1.75;
      Ue(),
        _ && (j = 1e3,
          se.set({
            x: 360,
            y: 0
          })),
        _ = !1,
        re.set(Math.min(p, S, A)),
        Q(null, j)
    }
    , lt = () => {
      re.set(1, {
        soft: !0
      }),
        ne.set({
          x: 0,
          y: 0
        }, {
          soft: !0
        }),
        se.set({
          x: 0,
          y: 0
        }, {
          soft: !0
        }),
        Q(null, 100)
    }
    , ut = () => {
      Q(null, 0),
        re.set(1, {
          hard: !0
        }),
        ne.set({
          x: 0,
          y: 0
        }, {
          hard: !0
        }),
        se.set({
          x: 0,
          y: 0
        }, {
          hard: !0
        }),
        k.set({
          x: 0,
          y: 0
        }, {
          hard: !0
        })
    }
    ;
  let qe = "";
  const ht = `
  --seedx: ${Y.x};
  --seedy: ${Y.y};
  --cosmosbg: ${le.x}px ${le.y}px;
`
    , gt = o => {
      const j = o.relative.gamma
        , p = o.relative.beta
        , S = {
          x: 16,
          y: 18
        }
        , A = {
          x: ie(j, -S.x, S.x),
          y: ie(p, -S.y, S.y)
        };
      Be({
        x: ee(A.x, -S.x, S.x, 37, 63),
        y: ee(A.y, -S.y, S.y, 33, 67)
      }, {
        x: D(A.x * -1),
        y: D(A.y)
      }, {
        x: ee(A.x, -S.x, S.x, 0, 100),
        y: ee(A.y, -S.y, S.y, 0, 100),
        o: 1
      })
    }
    , Be = (o, j, p) => {
      s(14, E.stiffness = q.stiffness, E),
        s(14, E.damping = q.damping, E),
        s(12, k.stiffness = q.stiffness, k),
        s(12, k.damping = q.damping, k),
        s(13, C.stiffness = q.stiffness, C),
        s(13, C.damping = q.damping, C),
        E.set(o),
        k.set(j),
        C.set(p)
    }
    ;
  document.addEventListener("visibilitychange", o => {
    J = document.visibilityState === "visible",
      Pe(),
      ut()
  }
  );
  const dt = o => {
    s(11, K = !1),
      (z || V) && s(15, qe = `
  --mask: url(${z});
  --foil: url(${V});
    `)
  }
    ;
  kt(() => {
    if (s(9, ue = Pt + I),
      X && J) {
      let p = 0;
      De = setTimeout(() => {
        if (s(10, P = !0),
          s(12, k.stiffness = .02, k),
          s(12, k.damping = .5, k),
          s(13, C.stiffness = .02, C),
          s(13, C.damping = .5, C),
          s(14, E.stiffness = .02, E),
          s(14, E.damping = .5, E),
          J)
          _e = setInterval(function () {
            p += .05,
              k.set({
                x: Math.sin(p) * 25,
                y: Math.cos(p) * 25
              }),
              C.set({
                x: 55 + Math.sin(p) * 55,
                y: 55 + Math.cos(p) * 55,
                o: .8
              }),
              E.set({
                x: 20 + Math.sin(p) * 20,
                y: 20 + Math.cos(p) * 20
              })
          }, 20),
            He = setTimeout(() => {
              clearInterval(_e),
                Q(null, 0)
            }
              , 4e3);
        else {
          s(10, P = !1);
          return
        }
      }
        , 2e3)
    }
  }
  );
  function mt(o) {
    xe[o ? "unshift" : "push"](() => {
      b = o,
        s(7, b)
    }
    )
  }
  return e.$$set = o => {
    "name" in o && s(27, M = o.name),
      "number" in o && s(0, y = o.number),
      "set" in o && s(5, L = o.set),
      "types" in o && s(1, G = o.types),
      "subtypes" in o && s(2, T = o.subtypes),
      "supertype" in o && s(3, x = o.supertype),
      "rarity" in o && s(4, m = o.rarity),
      "pageURL" in o && s(28, d = o.pageURL),
      "img" in o && s(29, I = o.img),
      "back" in o && s(30, F = o.back),
      "foil" in o && s(31, V = o.foil),
      "mask" in o && s(6, z = o.mask),
      "showcase" in o && s(32, X = o.showcase)
  }
    ,
    e.$$.update = () => {
      e.$$.dirty[0] & 128 | e.$$.dirty[1] & 8 && (n && n === b ? ft() : lt()),
        e.$$.dirty[1] & 1008 && s(16, i = `
  --pointer-x: ${g.x}%;
  --pointer-y: ${g.y}%;
  --pointer-from-center: ${ie(Math.sqrt((g.y - 50) * (g.y - 50) + (g.x - 50) * (g.x - 50)) / 50, 0, 1)};
  --pointer-from-top: ${g.y / 100};
  --pointer-from-left: ${g.x / 100};
  --card-opacity: ${g.o};
  --rotate-x: ${w.x + a.x}deg;
  --rotate-y: ${w.y + a.y}deg;
  --background-x: ${f.x}%;
  --background-y: ${f.y}%;
  --card-scale: ${h};
  --translate-x: ${c.x}px;
  --translate-y: ${c.y}px;
`),
        e.$$.dirty[0] & 31 && (s(4, m = m.toLowerCase()),
          s(3, x = x.toLowerCase()),
          s(0, y = y.toLowerCase()),
          s(8, l = y.startsWith("tg")),
          Array.isArray(G) && s(1, G = G.join(" ").toLowerCase()),
          Array.isArray(T) && s(2, T = T.join(" ").toLowerCase())),
        e.$$.dirty[0] & 128 | e.$$.dirty[1] & 12 && n && n === b && (s(10, P = !0),
          gt(r))
    }
    ,
    [y, G, T, x, m, L, z, b, l, ue, P, K, k, C, E, qe, i, se, ne, re, it, Q, ot, at, ct, ht, dt, M, d, I, F, V, X, r, n, c, h, f, a, w, g, mt]
}
class qt extends je {
  constructor(t) {
    super(),
      Ae(this, t, Ut, It, pe, {
        name: 27,
        number: 0,
        set: 5,
        types: 1,
        subtypes: 2,
        supertype: 3,
        rarity: 4,
        pageURL: 28,
        img: 29,
        back: 30,
        foil: 31,
        mask: 6,
        showcase: 32
      }, null, [-1, -1])
  }
}
function Bt(e) {
  let t, s;
  const i = [e[0]];
  let r = {};
  for (let n = 0; n < i.length; n += 1)
    r = wt(r, i[n]);
  return t = new qt({
    props: r
  }),
  {
    c() {
      rt(t.$$.fragment)
    },
    m(n, c) {
      Ee(t, n, c),
        s = !0
    },
    p(n, [c]) {
      const h = c & 1 ? Mt(i, [At(n[0])]) : {};
      t.$set(h)
    },
    i(n) {
      s || (Ce(t.$$.fragment, n),
        s = !0)
    },
    o(n) {
      nt(t.$$.fragment, n),
        s = !1
    },
    d(n) {
      Me(t, n)
    }
  }
}
function W(e) {
  return typeof e < "u" && e !== null
}
function zt(e, t, s) {
  let { id: i = void 0 } = t
    , { name: r = void 0 } = t
    , { number: n = void 0 } = t
    , { set: c = void 0 } = t
    , { types: h = void 0 } = t
    , { subtypes: f = void 0 } = t
    , { supertype: a = void 0 } = t
    , { rarity: w = void 0 } = t
    , { isReverse: g = !1 } = t
    , { pageURL: M = void 0 } = t
    , { img: y = void 0 } = t
    , { back: L = void 0 } = t
    , { foil: G = void 0 } = t
    , { mask: T = void 0 } = t
    , { showcase: x = !1 } = t;
  const m = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0
  }.VITE_CDN
    , d = W(n) && n.toLowerCase().startsWith("sv")
    , I = W(n) && !!n.match(/^[tg]g/i)
    , F = W(i) && Wt.includes(i) && !d && !I;
  g && (w = w + " Reverse Holo");
  function V() {
    return W(y) ? y : W(c) && W(n) ? `https://images.pokemontcg.io/${c.toLowerCase()}/${n}_hires.png` : ""
  }
  function z(l, ue = "masks") {
    let b = "holo"
      , R = "reverse"
      , P = "webp";
    if (W(l))
      return l === !1 ? "" : l;
    if (!W(w) || !W(f) || !W(a) || !W(c) || !W(n))
      return "";
    const _ = w.toLowerCase()
      , K = n.toString().toLowerCase().replace("swsh", "").padStart(3, "0")
      , J = c.toString().toLowerCase().replace("tg", "").replace("sv", "");
    return _ === "rare holo" && (R = "swholo"),
      _ === "rare holo cosmos" && (R = "cosmos"),
      _ === "radiant rare" && (b = "etched",
        R = "radiantholo"),
      _ === "rare holo v" && (b = "holo",
        R = "sunpillar"),
      (_ === "rare holo vmax" || _ === "rare ultra" || _ === "rare holo vstar") && (b = "etched",
        R = "sunpillar"),
      (_ === "amazing rare" || _ === "rare rainbow" || _ === "rare secret") && (b = "etched",
        R = "swsecret"),
      d && (b = "etched",
        R = "sunpillar",
        (_ === "rare shiny v" || _ === "rare holo v" && K.startsWith("sv")) && s(1, w = "Rare Shiny V"),
        (_ === "rare shiny vmax" || _ === "rare holo vmax" && K.startsWith("sv")) && (R = "swsecret",
          s(1, w = "Rare Shiny VMAX"))),
      I && (b = "holo",
        R = "rainbow",
        (_.includes("rare holo v") || _.includes("rare ultra")) && (b = "etched",
          R = "sunpillar"),
        _.includes("rare secret") && (b = "etched",
          R = "swsecret")),
      F && (b = "etched",
        f.includes("VMAX") ? (R = "swsecret",
          s(1, w = "Rare Rainbow Alt")) : R = "sunpillar"),
      `${m}/foils/${J}/${ue}/upscaled/${K}_foil_ ${b}_ ${R}_2x.${P}`
  }
  function X() {
    return z(G, "foils")
  }
  function Y() {
    return z(T, "masks")
  }
  const le = {
    img: V(),
    back: L,
    foil: X(),
    mask: Y(),
    name: r,
    number: n,
    set: c,
    types: h,
    subtypes: f,
    supertype: a,
    rarity: w,
    showcase: x,
    pageURL: M
  };
  return e.$$set = l => {
    "id" in l && s(2, i = l.id),
      "name" in l && s(3, r = l.name),
      "number" in l && s(4, n = l.number),
      "set" in l && s(5, c = l.set),
      "types" in l && s(6, h = l.types),
      "subtypes" in l && s(7, f = l.subtypes),
      "supertype" in l && s(8, a = l.supertype),
      "rarity" in l && s(1, w = l.rarity),
      "isReverse" in l && s(9, g = l.isReverse),
      "pageURL" in l && s(10, M = l.pageURL),
      "img" in l && s(11, y = l.img),
      "back" in l && s(12, L = l.back),
      "foil" in l && s(13, G = l.foil),
      "mask" in l && s(14, T = l.mask),
      "showcase" in l && s(15, x = l.showcase)
  }
    ,
    [le, w, i, r, n, c, h, f, a, g, M, y, L, G, T, x]
}
class Nt extends je {
  constructor(t) {
    super(),
      Ae(this, t, zt, Bt, pe, {
        id: 2,
        name: 3,
        number: 4,
        set: 5,
        types: 6,
        subtypes: 7,
        supertype: 8,
        rarity: 1,
        isReverse: 9,
        pageURL: 10,
        img: 11,
        back: 12,
        foil: 13,
        mask: 14,
        showcase: 15
      })
  }
}
function Ft(e) {
  let t, s, i, r;
  return i = new Nt({
    props: {
      id: "swsh12pt5-160",
      name: "Pikachu",
      types: "Lightning",
      supertype: "Pok\xE9mon",
      subtypes: "Basic",
      rarity: "Rare Secret",
      showcase: !0,
      pageURL: e[0],
      img: e[1]
    }
  }),
  {
    c() {
      t = U("main"),
        s = U("div"),
        rt(i.$$.fragment),
        u(s, "class", "showcase")
    },
    m(n, c) {
      tt(n, t, c),
        O(t, s),
        Ee(i, s, null),
        r = !0
    },
    p: H,
    i(n) {
      r || (Ce(i.$$.fragment, n),
        r = !0)
    },
    o(n) {
      nt(i.$$.fragment, n),
        r = !1
    },
    d(n) {
      n && Re(t),
        Me(i)
    }
  }
}
function Vt(e) {
  const t = [
    ["#", "https://cdn.jsdelivr.net/gh/caidalu/com@main/docs/assets/cards/cover_card.png"],
    // ["#", "/assets/cards/back.png"]
    // ["/cs/pl/riscv/", "/assets/cards/riscv.png"],
    // ["/cs/pl/rust/basic/", "/assets/cards/rust.png"],
    // ["/cs/pl/haskell/", "/assets/cards/haskell.png"],
    // ["/cs/system/", "/assets/cards/system.png"],
    // ["/cs/pl/asm/", "/assets/cards/asm.png"],
    // ["/cs/algorithm/ds/", "/assets/cards/ds.png"],
    // ["/cs/regex/", "/assets/cards/regex.png"],
    // ["/cs/unicode/", "/assets/cards/unicode.png"],
    // ["/cs/tools/", "/assets/cards/tools.png"],
    // ["/sec/vulns/log4j/", "/assets/cards/log4j.png"],
    // ["/web/svg/", "/assets/cards/svg.png"],
    // ["/ctf/misc/qrcode/", "/assets/cards/qrcode.png"],
    // ["/ctf/blockchain/eth/", "/assets/cards/eth.png"],
    // ["/ctf/misc/escapes/pysandbox/", "/assets/cards/pyjail.png"],
    // ["/writeups/", "/assets/cards/writeups.png"],
    // ["#", "/assets/cards/donate.png"]
  ]
    , s = t.length
    , i = Math.floor(Math.random() * s)
    , r = t[i][0]
    , n = t[i][1];
  return [r, n]
}
class Xt extends je {
  constructor(t) {
    super(),
      Ae(this, t, Vt, Ft, pe, {})
  }
}
new Xt({
  target: document.getElementById("app")
});
