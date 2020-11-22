(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["sheetmusic"],
  {
    "3a63": function(t, e) {},
    e3f7: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("f8ce"),
        a = n("f6ff");
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function(t) {
            n.d(e, t, function() {
              return a[t];
            });
          })(s);
      var r = n("2877"),
        c = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, null, null);
      e["default"] = c.exports;
    },
    f6ff: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("3a63"),
        a = n.n(i);
      for (var s in i)
        ["default"].indexOf(s) < 0 &&
          (function(t) {
            n.d(e, t, function() {
              return i[t];
            });
          })(s);
      e["default"] = a.a;
    },
    f8ce: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return i;
      }),
        n.d(e, "b", function() {
          return a;
        });
      var i = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        a = [
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("html", { attrs: { lang: "en" } }, [
              n("head", [
                n("meta", {
                  attrs: {
                    "http-equiv": "Content-Type",
                    content: "text/html; charset=utf-8"
                  }
                }),
                n("title", [t._v("PitchPerfect")]),
                n("link", { attrs: { rel: "stylesheet", href: "style.css" } }),
                n("link", {
                  attrs: {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com"
                  }
                }),
                n("link", {
                  attrs: {
                    href:
                      "https://fonts.googleapis.com/css2?family=Doppio+One&display=swap",
                    rel: "stylesheet"
                  }
                }),
                n("link", {
                  attrs: {
                    href:
                      "https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap",
                    rel: "stylesheet"
                  }
                }),
                n("meta", {
                  attrs: {
                    content:
                      "user-scalable=no, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0",
                    name: "viewport"
                  }
                })
              ]),
              n("body", [
                n("div", { attrs: { id: "pin" } }, [
                  n("div", { attrs: { id: "pinicon" } }, [
                    n("img", {
                      staticStyle: { width: "30px" },
                      attrs: { src: "images/pin.png" }
                    })
                  ]),
                  n(
                    "p",
                    {
                      staticStyle: { color: "black", "margin-top": "0px" },
                      attrs: { onclick: "location.href = '/thread.html'" }
                    },
                    [t._v(" view thread ")]
                  )
                ]),
                n(
                  "div",
                  {
                    staticClass: "content_project",
                    staticStyle: { "padding-top": "0" },
                    attrs: { align: "center" }
                  },
                  [
                    n("div", { staticClass: "menubar" }, [
                      n("li", [
                        n(
                          "a",
                          {
                            staticStyle: { "text-decoration": "none" },
                            attrs: { href: "/annotate.html" }
                          },
                          [
                            n("img", {
                              attrs: {
                                src: "images/annotate.png",
                                title: "add annotations",
                                width: "100px"
                              }
                            })
                          ]
                        ),
                        n(
                          "a",
                          {
                            staticStyle: { "text-decoration": "none" },
                            attrs: { href: "/sheetmusic_announcements.html" }
                          },
                          [
                            n("img", {
                              attrs: {
                                src: "images/announcement.png",
                                title: "view announcements",
                                width: "100px"
                              }
                            })
                          ]
                        ),
                        n(
                          "a",
                          {
                            staticStyle: { "text-decoration": "none" },
                            attrs: { href: "/dictionary.html" }
                          },
                          [
                            n("img", {
                              attrs: {
                                src: "images/dictionary.png",
                                title: "open music dictionary",
                                width: "100px"
                              }
                            })
                          ]
                        ),
                        n(
                          "a",
                          {
                            staticStyle: { "text-decoration": "none" },
                            attrs: { href: "/view_logs.html" }
                          },
                          [
                            n("img", {
                              attrs: {
                                src: "images/home.png",
                                title: "view past annotation logs",
                                width: "100px"
                              }
                            })
                          ]
                        )
                      ])
                    ]),
                    n("img", {
                      staticStyle: { width: "480px", "margin-top": "10px" },
                      attrs: {
                        src: "images/music_sheet.jpg",
                        title: "music sheet"
                      }
                    }),
                    n("br"),
                    n("br"),
                    n(
                      "button",
                      {
                        staticClass: "mini_button",
                        staticStyle: {
                          height: "40px",
                          width: "100px",
                          "text-align": "center"
                        },
                        attrs: {
                          onclick: "location.href = '/project_main.html'"
                        }
                      },
                      [t._v(" Back ")]
                    )
                  ]
                )
              ])
            ]);
          }
        ];
    }
  }
]);
//# sourceMappingURL=sheetmusic.c57f8382.js.map
