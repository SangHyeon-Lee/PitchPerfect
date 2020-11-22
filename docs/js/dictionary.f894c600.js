(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["dictionary"],
  {
    "129f": function(t, e) {
      t.exports =
        Object.is ||
        function(t, e) {
          return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e;
        };
    },
    "14c3": function(t, e, n) {
      var r = n("c6b6"),
        i = n("9263");
      t.exports = function(t, e) {
        var n = t.exec;
        if ("function" === typeof n) {
          var a = n.call(t, e);
          if ("object" !== typeof a)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return a;
        }
        if ("RegExp" !== r(t))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e);
      };
    },
    3349: function(t, e, n) {
      "use strict";
      n.r(e);
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("html", [
            t._m(0),
            n("body", [
              n(
                "div",
                {
                  staticClass: "content_project",
                  attrs: { "padding-top": "5px", align: "center" }
                },
                [
                  n("h2", [t._v("Music Term Dictionary")]),
                  n("br"),
                  n(
                    "div",
                    {
                      staticClass: "wrapper",
                      staticStyle: {
                        width: "365px",
                        height: "60px",
                        display: "inline-block",
                        color: "black",
                        "text-align": "left"
                      }
                    },
                    [
                      n(
                        "form",
                        {
                          on: {
                            submit: function(e) {
                              return e.preventDefault(), t.find(e);
                            }
                          }
                        },
                        [
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.search,
                                expression: "search"
                              }
                            ],
                            staticStyle: { width: "250px" },
                            attrs: {
                              type: "text",
                              placeholder: "Search for music terms.."
                            },
                            domProps: { value: t.search },
                            on: {
                              input: function(e) {
                                e.target.composing ||
                                  (t.search = e.target.value);
                              }
                            }
                          }),
                          n(
                            "button",
                            {
                              staticClass: "redbutton",
                              attrs: { type: "submit" },
                              on: {
                                click: function(e) {
                                  return e.stopPropagation(), t.find(e);
                                }
                              }
                            },
                            [t._v(" Search ")]
                          )
                        ]
                      ),
                      n(
                        "div",
                        {
                          staticClass: "wrapper",
                          staticStyle: {
                            width: "365px",
                            display: "inline-block",
                            color: "black",
                            "text-align": "left"
                          }
                        },
                        [
                          n(
                            "ul",
                            t._l(t.found, function(e) {
                              return n("li", { key: e.term }, [
                                t._v(
                                  " " + t._s(e.term + ": " + e.meaning) + " "
                                )
                              ]);
                            }),
                            0
                          )
                        ]
                      )
                    ]
                  ),
                  n("br"),
                  n("br"),
                  n("br"),
                  n("br"),
                  n(
                    "router-link",
                    {
                      staticClass: "mini_button",
                      staticStyle: {
                        height: "40px",
                        width: "100px",
                        "text-align": "center"
                      },
                      attrs: { to: "/project_main", tag: "button" }
                    },
                    [t._v(" Back ")]
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
              n = t._self._c || e;
            return n("head", [
              n("meta", {
                attrs: {
                  "http-equiv": "Content-Type",
                  content: "text/html; charset=utf-8"
                }
              }),
              n("title", [t._v("PitchPerfect")]),
              n("link", {
                attrs: { rel: "preconnect", href: "https://fonts.gstatic.com" }
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
            ]);
          }
        ],
        a = (n("ac1f"), n("841c"), n("2591")),
        c = {
          data: function() {
            return { search: "", found: [] };
          },
          methods: {
            find: function() {
              var t = this,
                e = a["a"]
                  .firestore()
                  .collection("dictionary")
                  .doc(this.search);
              e.get()
                .then(function(e) {
                  e.exists
                    ? t.found.push(e.data())
                    : window.alert(
                        "given term does not exist in our dictionary :("
                      );
                })
                .catch(function(t) {
                  console.log("Error getting dictionary entry:", t);
                });
            }
          }
        },
        o = c,
        l = n("2877"),
        s = Object(l["a"])(o, r, i, !1, null, null, null);
      e["default"] = s.exports;
    },
    "841c": function(t, e, n) {
      "use strict";
      var r = n("d784"),
        i = n("825a"),
        a = n("1d80"),
        c = n("129f"),
        o = n("14c3");
      r("search", 1, function(t, e, n) {
        return [
          function(e) {
            var n = a(this),
              r = void 0 == e ? void 0 : e[t];
            return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
          },
          function(t) {
            var r = n(e, t, this);
            if (r.done) return r.value;
            var a = i(t),
              l = String(this),
              s = a.lastIndex;
            c(s, 0) || (a.lastIndex = 0);
            var u = o(a, l);
            return (
              c(a.lastIndex, s) || (a.lastIndex = s), null === u ? -1 : u.index
            );
          }
        ];
      });
    },
    9263: function(t, e, n) {
      "use strict";
      var r = n("ad6d"),
        i = n("9f7f"),
        a = RegExp.prototype.exec,
        c = String.prototype.replace,
        o = a,
        l = (function() {
          var t = /a/,
            e = /b*/g;
          return (
            a.call(t, "a"),
            a.call(e, "a"),
            0 !== t.lastIndex || 0 !== e.lastIndex
          );
        })(),
        s = i.UNSUPPORTED_Y || i.BROKEN_CARET,
        u = void 0 !== /()??/.exec("")[1],
        p = l || u || s;
      p &&
        (o = function(t) {
          var e,
            n,
            i,
            o,
            p = this,
            f = s && p.sticky,
            d = r.call(p),
            h = p.source,
            x = 0,
            g = t;
          return (
            f &&
              ((d = d.replace("y", "")),
              -1 === d.indexOf("g") && (d += "g"),
              (g = String(t).slice(p.lastIndex)),
              p.lastIndex > 0 &&
                (!p.multiline ||
                  (p.multiline && "\n" !== t[p.lastIndex - 1])) &&
                ((h = "(?: " + h + ")"), (g = " " + g), x++),
              (n = new RegExp("^(?:" + h + ")", d))),
            u && (n = new RegExp("^" + h + "$(?!\\s)", d)),
            l && (e = p.lastIndex),
            (i = a.call(f ? n : p, g)),
            f
              ? i
                ? ((i.input = i.input.slice(x)),
                  (i[0] = i[0].slice(x)),
                  (i.index = p.lastIndex),
                  (p.lastIndex += i[0].length))
                : (p.lastIndex = 0)
              : l && i && (p.lastIndex = p.global ? i.index + i[0].length : e),
            u &&
              i &&
              i.length > 1 &&
              c.call(i[0], n, function() {
                for (o = 1; o < arguments.length - 2; o++)
                  void 0 === arguments[o] && (i[o] = void 0);
              }),
            i
          );
        }),
        (t.exports = o);
    },
    "9f7f": function(t, e, n) {
      "use strict";
      var r = n("d039");
      function i(t, e) {
        return RegExp(t, e);
      }
      (e.UNSUPPORTED_Y = r(function() {
        var t = i("a", "y");
        return (t.lastIndex = 2), null != t.exec("abcd");
      })),
        (e.BROKEN_CARET = r(function() {
          var t = i("^r", "gy");
          return (t.lastIndex = 2), null != t.exec("str");
        }));
    },
    ac1f: function(t, e, n) {
      "use strict";
      var r = n("23e7"),
        i = n("9263");
      r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
    },
    ad6d: function(t, e, n) {
      "use strict";
      var r = n("825a");
      t.exports = function() {
        var t = r(this),
          e = "";
        return (
          t.global && (e += "g"),
          t.ignoreCase && (e += "i"),
          t.multiline && (e += "m"),
          t.dotAll && (e += "s"),
          t.unicode && (e += "u"),
          t.sticky && (e += "y"),
          e
        );
      };
    },
    d784: function(t, e, n) {
      "use strict";
      n("ac1f");
      var r = n("6eeb"),
        i = n("d039"),
        a = n("b622"),
        c = n("9263"),
        o = n("9112"),
        l = a("species"),
        s = !i(function() {
          var t = /./;
          return (
            (t.exec = function() {
              var t = [];
              return (t.groups = { a: "7" }), t;
            }),
            "7" !== "".replace(t, "$<a>")
          );
        }),
        u = (function() {
          return "$0" === "a".replace(/./, "$0");
        })(),
        p = a("replace"),
        f = (function() {
          return !!/./[p] && "" === /./[p]("a", "$0");
        })(),
        d = !i(function() {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function() {
            return e.apply(this, arguments);
          };
          var n = "ab".split(t);
          return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        });
      t.exports = function(t, e, n, p) {
        var h = a(t),
          x = !i(function() {
            var e = {};
            return (
              (e[h] = function() {
                return 7;
              }),
              7 != ""[t](e)
            );
          }),
          g =
            x &&
            !i(function() {
              var e = !1,
                n = /a/;
              return (
                "split" === t &&
                  ((n = {}),
                  (n.constructor = {}),
                  (n.constructor[l] = function() {
                    return n;
                  }),
                  (n.flags = ""),
                  (n[h] = /./[h])),
                (n.exec = function() {
                  return (e = !0), null;
                }),
                n[h](""),
                !e
              );
            });
        if (
          !x ||
          !g ||
          ("replace" === t && (!s || !u || f)) ||
          ("split" === t && !d)
        ) {
          var v = /./[h],
            m = n(
              h,
              ""[t],
              function(t, e, n, r, i) {
                return e.exec === c
                  ? x && !i
                    ? { done: !0, value: v.call(e, n, r) }
                    : { done: !0, value: t.call(n, e, r) }
                  : { done: !1 };
              },
              {
                REPLACE_KEEPS_$0: u,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
              }
            ),
            y = m[0],
            E = m[1];
          r(String.prototype, t, y),
            r(
              RegExp.prototype,
              h,
              2 == e
                ? function(t, e) {
                    return E.call(t, this, e);
                  }
                : function(t) {
                    return E.call(t, this);
                  }
            );
        }
        p && o(RegExp.prototype[h], "sham", !0);
      };
    }
  }
]);
//# sourceMappingURL=dictionary.f894c600.js.map
