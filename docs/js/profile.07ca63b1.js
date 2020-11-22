(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["profile"],
  {
    c66d: function(t, e, r) {
      "use strict";
      r.r(e);
      var s = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("html", [
            t._m(0),
            r("body", [
              r("div", { staticClass: "content", attrs: { align: "center" } }, [
                r("img", { attrs: { src: "images/bull.png", width: "100px" } }),
                r(
                  "h1",
                  { staticStyle: { color: "black" }, attrs: { id: "user" } },
                  [t._v(t._s(t.username))]
                ),
                r(
                  "a",
                  {
                    staticClass: "roundtag",
                    staticStyle: { "background-color": "#2D9CD8" }
                  },
                  [
                    t._v(t._s(t.instrument)),
                    r("img", {
                      attrs: { src: "images/bbiyak.png", width: "20px" }
                    })
                  ]
                ),
                r("br"),
                r(
                  "a",
                  {
                    staticClass: "roundtag",
                    staticStyle: { "background-color": "#27AE60" }
                  },
                  [t._v("Easy violin pieces")]
                ),
                r(
                  "a",
                  {
                    staticClass: "roundtag",
                    staticStyle: { "background-color": "#27AE60" }
                  },
                  [t._v("Song for children")]
                ),
                r("h3", [t._v(t._s(t.bio))]),
                r(
                  "h2",
                  {
                    staticStyle: { "text-align": "left", "margin-left": "40px" }
                  },
                  [t._v("Previous Projects")]
                ),
                r("br"),
                r("br"),
                r("br"),
                r("br"),
                r("br"),
                r("br"),
                r("br"),
                r("br")
              ]),
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
        ],
        i = r("2877"),
        l = {},
        n = Object(i["a"])(l, s, a, !1, null, null, null);
      e["default"] = n.exports;
    }
  }
]);
//# sourceMappingURL=profile.07ca63b1.js.map
