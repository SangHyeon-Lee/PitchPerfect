(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["thankyou"],
  {
    "2a03": function(t, e, a) {
      "use strict";
      a.r(e);
      var r = a("bc8c"),
        n = a("901c");
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function(t) {
            a.d(e, t, function() {
              return n[t];
            });
          })(i);
      var s = a("2877"),
        c = Object(s["a"])(n["default"], r["a"], r["b"], !1, null, null, null);
      e["default"] = c.exports;
    },
    "63ff": function(t, e) {},
    "901c": function(t, e, a) {
      "use strict";
      a.r(e);
      var r = a("63ff"),
        n = a.n(r);
      for (var i in r)
        ["default"].indexOf(i) < 0 &&
          (function(t) {
            a.d(e, t, function() {
              return r[t];
            });
          })(i);
      e["default"] = n.a;
    },
    bc8c: function(t, e, a) {
      "use strict";
      a.d(e, "a", function() {
        return r;
      }),
        a.d(e, "b", function() {
          return n;
        });
      var r = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        n = [
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("html", { attrs: { lang: "en" } }, [
              a("head", [
                a("meta", {
                  attrs: {
                    "http-equiv": "Content-Type",
                    content: "text/html; charset=utf-8"
                  }
                }),
                a("title", [t._v("PitchPerfect")]),
                a("link", { attrs: { rel: "stylesheet", href: "style.css" } }),
                a("link", {
                  attrs: {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com"
                  }
                }),
                a("link", {
                  attrs: {
                    href:
                      "https://fonts.googleapis.com/css2?family=Doppio+One&display=swap",
                    rel: "stylesheet"
                  }
                }),
                a("link", {
                  attrs: {
                    href:
                      "https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap",
                    rel: "stylesheet"
                  }
                }),
                a("meta", {
                  attrs: {
                    content:
                      "user-scalable=no, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0",
                    name: "viewport"
                  }
                })
              ]),
              a("body", [
                a(
                  "div",
                  {
                    staticClass: "content_project",
                    attrs: { "padding-top": "50px", align: "center" }
                  },
                  [
                    a("br"),
                    a("br"),
                    a("br"),
                    a("br"),
                    a("br"),
                    a("br"),
                    a("h2", [t._v("Thank you!")]),
                    a("h3", [t._v("Team FYEESH")]),
                    a("br"),
                    a("br"),
                    a(
                      "button",
                      {
                        staticClass: "button",
                        staticStyle: { height: "60px", width: "150px" },
                        attrs: { onclick: "location.href = '/library.html'" }
                      },
                      [t._v(" Home ")]
                    )
                  ]
                ),
                a("nav", { attrs: { id: "tabbar" } }, [
                  a("ul", { attrs: { id: "tab_wrap" } }, [
                    a("li", [
                      a("a", { attrs: { href: "/library.html" } }, [
                        a("img", {
                          attrs: { src: "images/home.png", width: "100px" }
                        })
                      ])
                    ]),
                    a("li", [
                      a("a", { attrs: { href: "/search.html" } }, [
                        a("img", {
                          attrs: { src: "images/search.png", width: "100px" }
                        })
                      ])
                    ]),
                    a("li", [
                      a("a", { attrs: { href: "/add.html" } }, [
                        a("img", {
                          attrs: { src: "images/add.png", width: "100px" }
                        })
                      ])
                    ]),
                    a("li", [
                      a("a", { attrs: { href: "/profile.html" } }, [
                        a("img", {
                          attrs: { src: "images/profile.png", width: "100px" }
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ]);
          }
        ];
    }
  }
]);
//# sourceMappingURL=thankyou.8de9e06a.js.map
