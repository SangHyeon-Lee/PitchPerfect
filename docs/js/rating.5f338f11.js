(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["rating"],
  {
    f829: function(t, a, r) {
      "use strict";
      r.r(a);
      var s = function() {
          var t = this,
            a = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        i = [
          function() {
            var t = this,
              a = t.$createElement,
              r = t._self._c || a;
            return r("html", { attrs: { lang: "en" } }, [
              r("head", [
                r("meta", {
                  attrs: {
                    "http-equiv": "Content-Type",
                    content: "text/html; charset=utf-8"
                  }
                }),
                r("title", [t._v("PitchPerfect")]),
                r("link", { attrs: { rel: "stylesheet", href: "style.css" } }),
                r("link", {
                  attrs: {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com"
                  }
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
              ]),
              r("body", [
                r(
                  "div",
                  {
                    staticClass: "content_project",
                    attrs: { "padding-top": "5px", align: "center" }
                  },
                  [
                    r("h2", [t._v("Please rate us!")]),
                    r("div", { staticClass: "demo" }, [
                      r("div", { staticClass: "ratingControl" }, [
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-5",
                            name: "rating",
                            value: "5"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--5",
                            attrs: { for: "rating-5" }
                          },
                          [t._v("5")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-45",
                            name: "rating",
                            value: "4.5"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--45 ratingControl-stars--half",
                            attrs: { for: "rating-45" }
                          },
                          [t._v("45")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-4",
                            name: "rating",
                            value: "4"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--4",
                            attrs: { for: "rating-4" }
                          },
                          [t._v("4")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-35",
                            name: "rating",
                            value: "3.5"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--35 ratingControl-stars--half",
                            attrs: { for: "rating-35" }
                          },
                          [t._v("35")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-3",
                            name: "rating",
                            value: "3"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--3",
                            attrs: { for: "rating-3" }
                          },
                          [t._v("3")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-25",
                            name: "rating",
                            value: "2.5"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--25 ratingControl-stars--half",
                            attrs: { for: "rating-25" }
                          },
                          [t._v("25")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-2",
                            name: "rating",
                            value: "2"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--2",
                            attrs: { for: "rating-2" }
                          },
                          [t._v("2")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-15",
                            name: "rating",
                            value: "1.5"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--15 ratingControl-stars--half",
                            attrs: { for: "rating-15" }
                          },
                          [t._v("15")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-1",
                            name: "rating",
                            value: "1"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--1",
                            attrs: { for: "rating-1" }
                          },
                          [t._v("1")]
                        ),
                        r("input", {
                          attrs: {
                            type: "radio",
                            id: "rating-05",
                            name: "rating",
                            value: "0.5"
                          }
                        }),
                        r(
                          "label",
                          {
                            staticClass:
                              "ratingControl-stars ratingControl-stars--05 ratingControl-stars--half",
                            attrs: { for: "rating-05" }
                          },
                          [t._v("05")]
                        )
                      ])
                    ]),
                    r("form", { attrs: { action: "/action_page.php" } }, [
                      r(
                        "label",
                        {
                          staticStyle: {
                            "font-size": "200%",
                            "text-align": "left",
                            "line-height": "2"
                          },
                          attrs: { for: "review" }
                        },
                        [t._v("Any comments on our application?")]
                      ),
                      r("textarea", {
                        staticStyle: { "text-align": "left" },
                        attrs: {
                          id: "review",
                          name: "review",
                          rows: "3",
                          cols: "50"
                        }
                      }),
                      r("br"),
                      r("br"),
                      r(
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
                            onclick: "location.href = 'thankyou.html'"
                          }
                        },
                        [t._v(" Submit ")]
                      )
                    ]),
                    r(
                      "button",
                      {
                        staticClass: "button",
                        staticStyle: { height: "60px", width: "150px" },
                        attrs: { onclick: "location.href = '/thankyou.html'" }
                      },
                      [t._v(" I'll do later ")]
                    ),
                    r("br"),
                    r("br"),
                    r("br"),
                    r("br"),
                    r(
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
        n = r("2877"),
        e = {},
        l = Object(n["a"])(e, s, i, !1, null, null, null);
      a["default"] = l.exports;
    }
  }
]);
//# sourceMappingURL=rating.5f338f11.js.map
