(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["project_page"],
  {
    "0c50": function(t, e, r) {
      "use strict";
      r.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("html", { attrs: { lang: "en" } }, [
            t._m(0),
            r("body", [
              r(
                "div",
                {
                  staticClass: "content_project",
                  attrs: { "padding-top": "5px", align: "center" }
                },
                [
                  r("h2", [t._v("Invite")]),
                  r("br"),
                  t._m(1),
                  r("br"),
                  r("br"),
                  r("br"),
                  r("br"),
                  r(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: {
                        height: "40px",
                        width: "100px",
                        "text-align": "center"
                      },
                      attrs: { to: "/project_main", tag: "button" }
                    },
                    [t._v("Back")]
                  )
                ],
                1
              )
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
            return r(
              "div",
              {
                staticClass: "wrapper",
                staticStyle: { display: "inline-block" }
              },
              [
                r(
                  "p",
                  {
                    staticStyle: {
                      "line-height": "0.1",
                      "text-align": "left",
                      "font-size": "120%",
                      color: "black",
                      "font-weight": "bold",
                      "margin-left": "15px"
                    }
                  },
                  [t._v(" Copy this link: ")]
                ),
                r(
                  "p",
                  {
                    staticStyle: {
                      "line-height": "0.1",
                      float: "left",
                      color: "lightseagreen",
                      "margin-left": "15px",
                      display: "inline"
                    }
                  },
                  [r("u", [t._v("pitchperfect.invite.fyeesh")])]
                ),
                r(
                  "button",
                  {
                    staticClass: "copy_button",
                    staticStyle: { height: "25px", width: "70px" },
                    attrs: { onclick: "copy" }
                  },
                  [t._v(" copy ")]
                )
              ]
            );
          }
        ],
        s = r("2877"),
        n = {},
        o = Object(s["a"])(n, i, a, !1, null, null, null);
      e["default"] = o.exports;
    },
    "159b": function(t, e, r) {
      var i = r("da84"),
        a = r("fdbc"),
        s = r("17c2"),
        n = r("9112");
      for (var o in a) {
        var c = i[o],
          l = c && c.prototype;
        if (l && l.forEach !== s)
          try {
            n(l, "forEach", s);
          } catch (u) {
            l.forEach = s;
          }
      }
    },
    "17c2": function(t, e, r) {
      "use strict";
      var i = r("b727").forEach,
        a = r("a640"),
        s = r("ae40"),
        n = a("forEach"),
        o = s("forEach");
      t.exports =
        n && o
          ? [].forEach
          : function(t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            };
    },
    4160: function(t, e, r) {
      "use strict";
      var i = r("23e7"),
        a = r("17c2");
      i(
        { target: "Array", proto: !0, forced: [].forEach != a },
        { forEach: a }
      );
    },
    "65f0": function(t, e, r) {
      var i = r("861d"),
        a = r("e8b5"),
        s = r("b622"),
        n = s("species");
      t.exports = function(t, e) {
        var r;
        return (
          a(t) &&
            ((r = t.constructor),
            "function" != typeof r || (r !== Array && !a(r.prototype))
              ? i(r) && ((r = r[n]), null === r && (r = void 0))
              : (r = void 0)),
          new (void 0 === r ? Array : r)(0 === e ? 0 : e)
        );
      };
    },
    9756: function(t, e, r) {
      "use strict";
      r.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("html", [
            r("body", [
              r("div", { staticClass: "content", attrs: { align: "center" } }, [
                r("h1", [t._v("Projects")]),
                r(
                  "ul",
                  { staticClass: "projects" },
                  [
                    t._l(t.projs, function(e) {
                      return r(
                        "li",
                        { key: e.team, staticClass: "project_container" },
                        [
                          r("h2", { staticClass: "project_text" }, [
                            t._v(t._s(e.team))
                          ]),
                          r("h3", { staticClass: "project_text" }, [
                            t._v(t._s(e.song))
                          ]),
                          r("p", { staticClass: "project_text" }, [
                            t._v(t._s(e.parts))
                          ]),
                          r("a", { staticClass: "tag" }, [t._v(t._s(e.level))]),
                          r(
                            "button",
                            {
                              staticClass: "button",
                              staticStyle: { "background-color": "#F2C94C" },
                              on: {
                                click: function(r) {
                                  return r.stopPropagation(), t.view(e.team);
                                }
                              }
                            },
                            [t._v(" view ")]
                          )
                        ]
                      );
                    }),
                    0 === t.projs.length
                      ? r("span", [t._v(" <empty> ")])
                      : t._e()
                  ],
                  2
                )
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
                  t._m(0),
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
            return r("li", [
              r("img", { attrs: { src: "images/add.png", width: "100px" } })
            ]);
          }
        ],
        s = (r("4160"), r("159b"), r("2591")),
        n = s["a"].firestore().collection("projects"),
        o = {
          name: "projects",
          data: function() {
            return { projs: [] };
          },
          created: function() {
            var t = this;
            n.get().then(function(e) {
              e.forEach(function(e) {
                var r = e.data();
                (r.id = e.id), r.ongoing && t.projs.push(r);
              });
            });
          },
          methods: {
            view: function(t) {
              var e = this.$route.query.userId,
                r = t;
              this.$router.push({
                path: "/project_summary",
                query: { userId: e, projName: r },
                params: { userId: e, projName: r }
              });
            }
          }
        },
        c = o,
        l = r("2877"),
        u = Object(l["a"])(c, i, a, !1, null, null, null);
      e["default"] = u.exports;
    },
    a640: function(t, e, r) {
      "use strict";
      var i = r("d039");
      t.exports = function(t, e) {
        var r = [][t];
        return (
          !!r &&
          i(function() {
            r.call(
              null,
              e ||
                function() {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    ae40: function(t, e, r) {
      var i = r("83ab"),
        a = r("d039"),
        s = r("5135"),
        n = Object.defineProperty,
        o = {},
        c = function(t) {
          throw t;
        };
      t.exports = function(t, e) {
        if (s(o, t)) return o[t];
        e || (e = {});
        var r = [][t],
          l = !!s(e, "ACCESSORS") && e.ACCESSORS,
          u = s(e, 0) ? e[0] : c,
          p = s(e, 1) ? e[1] : void 0;
        return (o[t] =
          !!r &&
          !a(function() {
            if (l && !i) return !0;
            var t = { length: -1 };
            l ? n(t, 1, { enumerable: !0, get: c }) : (t[1] = 1),
              r.call(t, u, p);
          }));
      };
    },
    b727: function(t, e, r) {
      var i = r("0366"),
        a = r("44ad"),
        s = r("7b0b"),
        n = r("50c4"),
        o = r("65f0"),
        c = [].push,
        l = function(t) {
          var e = 1 == t,
            r = 2 == t,
            l = 3 == t,
            u = 4 == t,
            p = 6 == t,
            f = 5 == t || p;
          return function(h, d, v, m) {
            for (
              var g,
                y,
                b = s(h),
                _ = a(b),
                S = i(d, v, 3),
                w = n(_.length),
                x = 0,
                C = m || o,
                L = e ? C(h, w) : r ? C(h, 0) : void 0;
              w > x;
              x++
            )
              if ((f || x in _) && ((g = _[x]), (y = S(g, x, b)), t))
                if (e) L[x] = y;
                else if (y)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return g;
                    case 6:
                      return x;
                    case 2:
                      c.call(L, g);
                  }
                else if (u) return !1;
            return p ? -1 : l || u ? u : L;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6)
      };
    },
    e8b5: function(t, e, r) {
      var i = r("c6b6");
      t.exports =
        Array.isArray ||
        function(t) {
          return "Array" == i(t);
        };
    },
    fdbc: function(t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  }
]);
//# sourceMappingURL=project_page.6c676001.js.map
