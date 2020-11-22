(function(e) {
  function n(n) {
    for (
      var r, i, c = n[0], u = n[1], s = n[2], l = 0, m = [];
      l < c.length;
      l++
    )
      (i = c[l]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && m.push(o[i][0]),
        (o[i] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    p && p(n);
    while (m.length) m.shift()();
    return a.push.apply(a, s || []), t();
  }
  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], r = !0, i = 1; i < t.length; i++) {
        var u = t[i];
        0 !== o[u] && (r = !1);
      }
      r && (a.splice(n--, 1), (e = c((c.s = t[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    a = [];
  function i(e) {
    return (
      c.p +
      "js/" +
      ({
        about: "about",
        announcement: "announcement",
        dictionary: "dictionary",
        endcollaboration: "endcollaboration",
        library: "library",
        profile: "profile",
        project_main: "project_main",
        project_page: "project_page",
        project_summary: "project_summary",
        rating: "rating",
        report: "report",
        sheetmusic: "sheetmusic",
        sheetmusic_announcements: "sheetmusic_announcements",
        signin: "signin",
        signup: "signup",
        thankyou: "thankyou",
        thread: "thread",
        view_logs: "view_logs",
        waitlist: "waitlist"
      }[e] || e) +
      "." +
      {
        about: "e57de9cb",
        announcement: "63722e3e",
        dictionary: "f894c600",
        endcollaboration: "1be7ceb8",
        library: "ca11a734",
        profile: "07ca63b1",
        project_main: "9f5d8d84",
        project_page: "6c676001",
        project_summary: "d4fd25b1",
        rating: "5f338f11",
        report: "2703c400",
        sheetmusic: "c57f8382",
        sheetmusic_announcements: "9aba402b",
        signin: "49ea9f57",
        signup: "4a6f6eb7",
        thankyou: "8de9e06a",
        thread: "272a6961",
        view_logs: "93cb5d01",
        waitlist: "6ea5affa"
      }[e] +
      ".js"
    );
  }
  function c(n) {
    if (r[n]) return r[n].exports;
    var t = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.e = function(e) {
    var n = [],
      t = o[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function(n, r) {
          t = o[e] = [n, r];
        });
        n.push((t[2] = r));
        var a,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = i(e));
        var s = new Error();
        a = function(n) {
          (u.onerror = u.onload = null), clearTimeout(l);
          var t = o[e];
          if (0 !== t) {
            if (t) {
              var r = n && ("load" === n.type ? "missing" : n.type),
                a = n && n.target && n.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = a),
                t[1](s);
            }
            o[e] = void 0;
          }
        };
        var l = setTimeout(function() {
          a({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = a), document.head.appendChild(u);
      }
    return Promise.all(n);
  }),
    (c.m = e),
    (c.c = r),
    (c.d = function(e, n, t) {
      c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (c.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, n) {
      if ((1 & n && (e = c(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (c.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            t,
            r,
            function(n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (c.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (c.p = "/PitchPerfect/"),
    (c.oe = function(e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = u.push.bind(u);
  (u.push = n), (u = u.slice());
  for (var l = 0; l < u.length; l++) n(u[l]);
  var p = s;
  a.push([0, "chunk-vendors"]), t();
})({
  0: function(e, n, t) {
    e.exports = t("56d7");
  },
  "034f": function(e, n, t) {
    "use strict";
    t("85ec");
  },
  "56d7": function(e, n, t) {
    "use strict";
    t.r(n);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var r = t("2b0e"),
      o = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", { attrs: { id: "app" } }, [t("router-view")], 1);
      },
      a = [],
      i = (t("034f"), t("2877")),
      c = {},
      u = Object(i["a"])(c, o, a, !1, null, null, null),
      s = u.exports,
      l = (t("d3b7"), t("8c4f")),
      p = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("html", [
          e._m(0),
          t("body", [
            t("div", { attrs: { id: "app" } }, [
              t(
                "div",
                {
                  staticClass: "content",
                  staticStyle: { "min-height": "700px" },
                  attrs: { align: "center" }
                },
                [
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("img", {
                    attrs: { src: "images/logo.png", alt: "Logo", width: "350" }
                  }),
                  t("h1", [e._v("Welcome !")]),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br"),
                  t(
                    "router-link",
                    {
                      staticClass: "largebutton",
                      attrs: { to: "/signin", tag: "button" }
                    },
                    [e._v("Sign in")]
                  ),
                  t(
                    "p",
                    [
                      e._v(" If you don't have an account, "),
                      t("router-link", { attrs: { to: "/signup" } }, [
                        e._v("Sign up")
                      ])
                    ],
                    1
                  ),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br"),
                  t("br")
                ],
                1
              )
            ])
          ])
        ]);
      },
      m = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("head", [
            t("meta", {
              attrs: {
                "http-equiv": "Content-Type",
                content: "text/html; charset=utf-8"
              }
            }),
            t("title", [e._v("PitchPerfect")]),
            t("base", { attrs: { href: "/" } }),
            t("link", {
              attrs: { rel: "stylesheet", type: "css/text", href: "style.css" }
            }),
            t("link", {
              attrs: { rel: "preconnect", href: "https://fonts.gstatic.com" }
            }),
            t("link", {
              attrs: {
                href:
                  "https://fonts.googleapis.com/css2?family=Doppio+One&display=swap",
                rel: "stylesheet"
              }
            }),
            t("link", {
              attrs: {
                href:
                  "https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap",
                rel: "stylesheet"
              }
            }),
            t("meta", {
              attrs: {
                content:
                  "user-scalable=no, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0",
                name: "viewport"
              }
            })
          ]);
        }
      ],
      h = {},
      f = Object(i["a"])(h, p, m, !1, null, null, null),
      d = f.exports,
      b = t("2f62");
    r["a"].use(b["a"]);
    var g = new b["a"].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {}
    });
    r["a"].use(l["a"]);
    var y = [
        { path: "/", name: "Main", component: d },
        {
          path: "/about",
          name: "About",
          component: function() {
            return t.e("about").then(t.bind(null, "f820"));
          }
        },
        {
          path: "/signin",
          name: "signin",
          component: function() {
            return t.e("signin").then(t.bind(null, "4a33"));
          }
        },
        {
          path: "/library",
          name: "library",
          component: function() {
            return t.e("library").then(t.bind(null, "55a5"));
          }
        },
        {
          path: "/dictionary",
          name: "dictionary",
          component: function() {
            return t.e("dictionary").then(t.bind(null, "3349"));
          }
        },
        {
          path: "/signup",
          name: "signup",
          component: function() {
            return t.e("signup").then(t.bind(null, "34c3"));
          }
        },
        {
          path: "/project_main",
          name: "project_main",
          component: function() {
            return t.e("project_main").then(t.bind(null, "6f63"));
          }
        },
        {
          path: "/project_summary",
          name: "project_summary",
          component: function() {
            return t.e("project_summary").then(t.bind(null, "1ab0"));
          }
        },
        {
          path: "/projects_page",
          name: "projects_page",
          component: function() {
            return t.e("project_page").then(t.bind(null, "9756"));
          }
        },
        {
          path: "/invite",
          name: "invite",
          component: function() {
            return t.e("project_page").then(t.bind(null, "0c50"));
          }
        },
        {
          path: "/profile",
          name: "profile",
          component: function() {
            return t.e("profile").then(t.bind(null, "c66d"));
          }
        },
        {
          path: "/rating",
          name: "rating",
          component: function() {
            return t.e("rating").then(t.bind(null, "f829"));
          }
        },
        {
          path: "/announcement",
          name: "announcement",
          component: function() {
            return t.e("announcement").then(t.bind(null, "ceb7"));
          }
        },
        {
          path: "/endcollaboration",
          name: "endcollaboration",
          component: function() {
            return t.e("endcollaboration").then(t.bind(null, "ed55"));
          }
        },
        {
          path: "/report",
          name: "report",
          component: function() {
            return t.e("report").then(t.bind(null, "762c"));
          }
        },
        {
          path: "/sheetmusic_announcements",
          name: "sheetmusic_announcements",
          component: function() {
            return t.e("sheetmusic_announcements").then(t.bind(null, "2fee"));
          }
        },
        {
          path: "/sheetmusic",
          name: "sheetmusic",
          component: function() {
            return t.e("sheetmusic").then(t.bind(null, "e3f7"));
          }
        },
        {
          path: "/thankyou",
          name: "thankyou",
          component: function() {
            return t.e("thankyou").then(t.bind(null, "2a03"));
          }
        },
        {
          path: "/thread",
          name: "thread",
          component: function() {
            return t.e("thread").then(t.bind(null, "b3be"));
          }
        },
        {
          path: "/view_logs",
          name: "view_logs",
          component: function() {
            return t.e("view_logs").then(t.bind(null, "2357"));
          }
        },
        {
          path: "/waitlist",
          name: "waitlist",
          component: function() {
            return t.e("waitlist").then(t.bind(null, "7c57"));
          }
        }
      ],
      v = new l["a"]({ mode: "history", base: "/PitchPerfect/", routes: y }),
      _ = t("2591");
    t("e71f"), t("9ae8");
    new r["a"]({
      router: v,
      store: g,
      firebase: _["a"],
      render: function(e) {
        return e(s);
      }
    }).$mount("#app");
  },
  "85ec": function(e, n, t) {},
  "9ae8": function(e, n, t) {}
});
//# sourceMappingURL=app.0ccb53b1.js.map
