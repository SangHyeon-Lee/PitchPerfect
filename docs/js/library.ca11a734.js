(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["library"],
  {
    "55a5": function(t, e, r) {
      "use strict";
      r.r(e);
      var s = r("9d7a"),
        a = r("7fe0");
      for (var i in a)
        ["default"].indexOf(i) < 0 &&
          (function(t) {
            r.d(e, t, function() {
              return a[t];
            });
          })(i);
      var n = r("2877"),
        u = Object(n["a"])(a["default"], s["a"], s["b"], !1, null, null, null);
      e["default"] = u.exports;
    },
    6523: function(t, e) {},
    "7fe0": function(t, e, r) {
      "use strict";
      r.r(e);
      var s = r("6523"),
        a = r.n(s);
      for (var i in s)
        ["default"].indexOf(i) < 0 &&
          (function(t) {
            r.d(e, t, function() {
              return s[t];
            });
          })(i);
      e["default"] = a.a;
    },
    "9d7a": function(t, e, r) {
      "use strict";
      r.d(e, "a", function() {
        return s;
      }),
        r.d(e, "b", function() {
          return a;
        });
      var s = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("html", [
            t._m(0),
            r("body", [
              r(
                "div",
                { staticClass: "content", attrs: { align: "center" } },
                [
                  r("h1", { attrs: { id: "user" } }, [
                    t._v(t._s(t.$route.query.userId) + "'s Library")
                  ]),
                  r("h2", [t._v("Projects in progress")]),
                  r(
                    "router-link",
                    {
                      staticClass: "backbutton",
                      staticStyle: { width: "200px", padding: "10px" },
                      attrs: {
                        to: {
                          path: "/projects_page",
                          query: { userId: t.$route.query.userId }
                        },
                        tag: "button"
                      }
                    },
                    [t._v("Find projects")]
                  ),
                  r("h2", [t._v("Previous Projects")])
                ],
                1
              ),
              r("br"),
              r("br"),
              r("br"),
              r("br"),
              r("br"),
              r("nav", { attrs: { id: "tabbar" } }, [
                r("ul", { attrs: { id: "tab_wrap" } }, [
                  r(
                    "li",
                    [
                      r(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              path: "/library",
                              query: { userId: t.$route.query.userId }
                            }
                          }
                        },
                        [
                          r("img", {
                            attrs: { src: "images/home.png", width: "100px" }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  r(
                    "li",
                    [
                      r(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              path: "/projects_page",
                              query: { userId: t.$route.query.userId }
                            }
                          }
                        },
                        [
                          r("img", {
                            attrs: { src: "images/search.png", width: "100px" }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  t._m(1),
                  r(
                    "li",
                    [
                      r(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              path: "/profile",
                              query: {
                                userId: t.$route.query.userId,
                                profileId: t.$route.query.userId
                              }
                            }
                          }
                        },
                        [
                          r("img", {
                            attrs: { src: "images/profile.png", width: "100px" }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ]);
        },
        a = [
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("head", [
              r("meta", {
                attrs: {
                  "http-equiv": "Content-Type",
                  content: "text/html; charset=utf-8"
                }
              }),
              r("title", [t._v("PitchPerfect")]),
              r("link", { attrs: { rel: "stylesheet", href: "style.css" } }),
              r("link", {
                attrs: { rel: "preconnect", href: "https://fonts.gstatic.com" }
              }),
              r("link", {
                attrs: {
                  href:
                    "https://fonts.googleapis.com/css2?family=Doppio+One&display=swap",
                  rel: "stylesheet"
                }
              }),
              r("link", {
                attrs: {
                  href:
                    "https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap",
                  rel: "stylesheet"
                }
              }),
              r("meta", {
                attrs: {
                  content:
                    "user-scalable=no, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0",
                  name: "viewport"
                }
              })
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("li", [
              r("img", { attrs: { src: "images/add.png", width: "100px" } })
            ]);
          }
        ];
    }
  }
]);
//# sourceMappingURL=library.ca11a734.js.map
