(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["project_main"],
  {
    "6f63": function(t, e, a) {
      "use strict";
      a.r(e);
      var s = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("html", { attrs: { lang: "en" } }, [
            t._m(0),
            a("body", [
              a(
                "div",
                {
                  staticClass: "content_project",
                  attrs: { "padding-top": "5px", align: "center" }
                },
                [
                  a("h2", [t._v("Happy Birthday")]),
                  a(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: { height: "70px", width: "400px" },
                      attrs: { to: "/sheetmusic", tag: "button" }
                    },
                    [t._v("Sheet Music")]
                  ),
                  a(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: { height: "70px", width: "400px" },
                      attrs: { to: "/announcement", tag: "button" }
                    },
                    [t._v("Announcements")]
                  ),
                  a(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: { height: "70px", width: "195px" },
                      attrs: { to: "/waitlist", tag: "button" }
                    },
                    [t._v("Wait List")]
                  ),
                  a(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: { height: "70px", width: "195px" },
                      attrs: { to: "/invite", tag: "button" }
                    },
                    [t._v("Invite")]
                  ),
                  t._m(1),
                  a(
                    "router-link",
                    {
                      staticClass: "button",
                      staticStyle: { height: "70px", width: "400px" },
                      attrs: { to: "/invite", tag: "endcollaboration" }
                    },
                    [t._v("End Collaboration")]
                  )
                ],
                1
              ),
              t._m(2)
            ])
          ]);
        },
        i = [
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("head", [
              a("meta", {
                attrs: {
                  "http-equiv": "Content-Type",
                  content: "text/html; charset=utf-8"
                }
              }),
              a("title", [t._v("PitchPerfect")]),
              a("link", { attrs: { rel: "stylesheet", href: "style.css" } }),
              a("link", {
                attrs: { rel: "preconnect", href: "https://fonts.gstatic.com" }
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
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "box" }, [
              a("h3", { attrs: { align: "left", margin: "" } }, [
                t._v("Members")
              ]),
              a("div", {
                staticClass: "members",
                attrs: { align: "left", id: "members" }
              })
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("nav", { attrs: { id: "tabbar" } }, [
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
            ]);
          }
        ],
        r = {},
        n = r,
        l = a("2877"),
        c = Object(l["a"])(n, s, i, !1, null, null, null);
      e["default"] = c.exports;
    }
  }
]);
//# sourceMappingURL=project_main.9f5d8d84.js.map
