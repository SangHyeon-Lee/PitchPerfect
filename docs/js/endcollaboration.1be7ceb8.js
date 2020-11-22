(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["endcollaboration"],
  {
    ed55: function(t, e, a) {
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
                  a("h1", [t._v("Congratulations!")]),
                  a("h3", [t._v("Who was the best collaborator?")]),
                  t._m(1),
                  t._m(2),
                  a("br"),
                  a("br"),
                  a(
                    "button",
                    {
                      staticClass: "button",
                      staticStyle: { height: "60px", width: "150px" },
                      attrs: { onclick: "location.href = '/rating.html'" }
                    },
                    [t._v(" Continue ")]
                  ),
                  a("br"),
                  a("br"),
                  a("br"),
                  a("br"),
                  a(
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
            return a("ul", { staticStyle: { "white-space": "nowrap" } }, [
              a(
                "li",
                {
                  staticStyle: {
                    "list-style": "none",
                    display: "inline",
                    "align-items": "center"
                  }
                },
                [
                  a("input", {
                    staticStyle: { height: "100px", width: "100px" },
                    attrs: { type: "image", src: "images/add.png" }
                  }),
                  a("input", {
                    staticStyle: { height: "100px", width: "100px" },
                    attrs: { type: "image", src: "images/add.png" }
                  }),
                  a("input", {
                    staticStyle: { height: "100px", width: "100px" },
                    attrs: { type: "image", src: "images/add.png" }
                  })
                ]
              )
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("p", [
              t._v(" Had trouble with teammates? "),
              a("br"),
              a("a", { attrs: { href: "/report.html" } }, [t._v("report")]),
              t._v(" a user ")
            ]);
          }
        ],
        n = a("2877"),
        r = {},
        l = Object(n["a"])(r, s, i, !1, null, null, null);
      e["default"] = l.exports;
    }
  }
]);
//# sourceMappingURL=endcollaboration.1be7ceb8.js.map
