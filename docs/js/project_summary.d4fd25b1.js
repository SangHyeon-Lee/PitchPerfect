(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["project_summary"],
  {
    "1ab0": function(t, r, e) {
      "use strict";
      e.r(r);
      var a = function() {
          var t = this,
            r = t.$createElement,
            e = t._self._c || r;
          return e("html", [
            e("body", [
              e(
                "div",
                { staticClass: "content", attrs: { align: "center" } },
                [
                  e("img", {
                    attrs: { src: "images/fyeesh.png", width: "100" }
                  }),
                  e("h1", { staticStyle: { color: "black", margin: "0px" } }, [
                    t._v("FYEESH")
                  ]),
                  e(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: {
                        "background-color": "#f2c94c",
                        margin: "20px"
                      },
                      attrs: { to: "/project_main", tag: "button" }
                    },
                    [t._v("join")]
                  ),
                  t._m(0),
                  e("h3", { staticStyle: { margin: "20px" } }, [
                    t._v(
                      " Hello! We're team FYEESH. We're currently looking for one violinist and one vocal. We're all beginners, so we're accepting anyone who's eager to learn! "
                    )
                  ]),
                  t._m(1),
                  e("br"),
                  e("br"),
                  e("br"),
                  e("br"),
                  e("br"),
                  e("br"),
                  e("br"),
                  e("br")
                ],
                1
              ),
              e("nav", { attrs: { id: "tabbar" } }, [
                e("ul", { attrs: { id: "tab_wrap" } }, [
                  e(
                    "li",
                    [
                      e(
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
                          e("img", {
                            attrs: { src: "images/home.png", width: "100px" }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  e(
                    "li",
                    [
                      e(
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
                          e("img", {
                            attrs: { src: "images/search.png", width: "100px" }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  t._m(2),
                  e(
                    "li",
                    [
                      e(
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
                          e("img", {
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
        s = [
          function() {
            var t = this,
              r = t.$createElement,
              e = t._self._c || r;
            return e("div", { staticClass: "project_container" }, [
              e(
                "h2",
                {
                  staticStyle: { "margin-bottom": "0px", "margin-top": "0px" }
                },
                [t._v("Happy Birthday")]
              ),
              e(
                "p",
                {
                  staticStyle: {
                    color: "black",
                    "margin-top": "10px",
                    "margin-bottom": "10px"
                  }
                },
                [t._v(" violin 2/3 cello 1/1 vocal 0/1 ")]
              ),
              e("a", { staticClass: "tag" }, [t._v("beginner")])
            ]);
          },
          function() {
            var t = this,
              r = t.$createElement,
              e = t._self._c || r;
            return e("div", { staticClass: "members_container" }, [
              e("h2", [t._v("Members")]),
              e("div", { staticClass: "member" }, [
                e("a", { attrs: { name: "member1", href: "profile.html" } }, [
                  e("img", {
                    attrs: { src: "images/zombie.png", width: "70px" }
                  })
                ]),
                e("br"),
                e(
                  "label",
                  {
                    staticStyle: { color: "black" },
                    attrs: { for: "member1" }
                  },
                  [t._v("Amumu")]
                )
              ]),
              e("div", { staticClass: "member" }, [
                e("a", { attrs: { name: "member2", href: "profile.html" } }, [
                  e("img", { attrs: { src: "images/fish.png", width: "70px" } })
                ]),
                e("br"),
                e(
                  "label",
                  {
                    staticStyle: { color: "black" },
                    attrs: { for: "member2" }
                  },
                  [t._v("Tuna")]
                )
              ]),
              e("div", { staticClass: "member" }, [
                e("a", { attrs: { name: "member3", href: "profile.html" } }, [
                  e("img", { attrs: { src: "images/bull.png", width: "70px" } })
                ]),
                e("br"),
                e(
                  "label",
                  {
                    staticStyle: { color: "black" },
                    attrs: { for: "member3" }
                  },
                  [t._v("Ornn")]
                )
              ])
            ]);
          },
          function() {
            var t = this,
              r = t.$createElement,
              e = t._self._c || r;
            return e("li", [
              e("img", { attrs: { src: "images/add.png", width: "100px" } })
            ]);
          }
        ],
        i = {},
        l = i,
        n = e("2877"),
        o = Object(n["a"])(l, a, s, !1, null, null, null);
      r["default"] = o.exports;
    }
  }
]);
//# sourceMappingURL=project_summary.d4fd25b1.js.map
