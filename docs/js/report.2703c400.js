(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["report"],
  {
    "762c": function(t, e, a) {
      "use strict";
      a.r(e);
      var s = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        i = [
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
                    attrs: { "padding-top": "5px", align: "center" }
                  },
                  [
                    a("h2", [t._v("Report")]),
                    a("br"),
                    a("br"),
                    a("form", { attrs: { action: "/action_page.php" } }, [
                      a(
                        "label",
                        {
                          staticStyle: {
                            "font-size": "120%",
                            "text-align": "left",
                            "line-height": "2"
                          },
                          attrs: { for: "users" }
                        },
                        [t._v("Who do you want to report?")]
                      ),
                      a("select", { attrs: { name: "users", id: "users" } }, [
                        a("option", { attrs: { value: "volvo" } }, [
                          t._v("Volvo")
                        ]),
                        a("option", { attrs: { value: "saab" } }, [
                          t._v("Saab")
                        ]),
                        a("option", { attrs: { value: "opel" } }, [
                          t._v("Opel")
                        ]),
                        a("option", { attrs: { value: "audi" } }, [
                          t._v("Audi")
                        ])
                      ]),
                      a("br"),
                      a(
                        "label",
                        {
                          staticStyle: {
                            "font-size": "120%",
                            "text-align": "left",
                            "line-height": "2"
                          },
                          attrs: { for: "review" }
                        },
                        [t._v("Please provide specific reasons.")]
                      ),
                      a("textarea", {
                        staticStyle: { "text-align": "left" },
                        attrs: {
                          id: "review",
                          name: "review",
                          rows: "3",
                          cols: "50"
                        }
                      }),
                      a("br"),
                      a("br"),
                      a(
                        "button",
                        {
                          staticClass: "button",
                          staticStyle: {
                            "background-color": "gold",
                            height: "60px",
                            width: "150px"
                          },
                          attrs: {
                            type: "submit",
                            value: "Submit",
                            onclick: "location.href = '/thankyou.html'"
                          }
                        },
                        [t._v(" Submit ")]
                      )
                    ]),
                    a("br"),
                    a("br"),
                    a("br"),
                    a("br"),
                    a(
                      "button",
                      {
                        staticClass: "mini_button",
                        staticStyle: {
                          height: "40px",
                          width: "100px",
                          "text-align": "center"
                        },
                        attrs: {
                          onclick: "location.href = '/endcollaboration.html'"
                        }
                      },
                      [t._v(" Back ")]
                    )
                  ]
                )
              ])
            ]);
          }
        ],
        l = a("2877"),
        r = {},
        o = Object(l["a"])(r, s, i, !1, null, null, null);
      e["default"] = o.exports;
    }
  }
]);
//# sourceMappingURL=report.2703c400.js.map
