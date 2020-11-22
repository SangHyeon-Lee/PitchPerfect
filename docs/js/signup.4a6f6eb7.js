(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["signup"],
  {
    "1dde": function(e, t, a) {
      var r = a("d039"),
        n = a("b622"),
        s = a("2d00"),
        o = n("species");
      e.exports = function(e) {
        return (
          s >= 51 ||
          !r(function() {
            var t = [],
              a = (t.constructor = {});
            return (
              (a[o] = function() {
                return { foo: 1 };
              }),
              1 !== t[e](Boolean).foo
            );
          })
        );
      };
    },
    "34c3": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("html", [
            e._m(0),
            a("body", [
              a(
                "div",
                { staticClass: "content", attrs: { align: "center" } },
                [
                  a("h1", [e._v("Sign Up")]),
                  a(
                    "form",
                    {
                      staticClass: "modal-content",
                      on: {
                        submit: function(t) {
                          return t.preventDefault(), e.check_password(t);
                        }
                      }
                    },
                    [
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.nickname,
                            expression: "userData.nickname"
                          }
                        ],
                        staticStyle: { width: "230px" },
                        attrs: {
                          type: "text",
                          placeholder: "Nickname",
                          name: "nickname",
                          required: ""
                        },
                        domProps: { value: e.userData.nickname },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "nickname", t.target.value);
                          }
                        }
                      }),
                      a(
                        "a",
                        {
                          staticClass: "redbutton",
                          on: { click: e.name_check }
                        },
                        [e._v("verify")]
                      ),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.age,
                            expression: "userData.age"
                          }
                        ],
                        attrs: {
                          type: "number",
                          placeholder: "Age",
                          name: "age",
                          required: ""
                        },
                        domProps: { value: e.userData.age },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "age", t.target.value);
                          }
                        }
                      }),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.bio,
                            expression: "userData.bio"
                          }
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "Bio (introduce yourself)",
                          name: "bio",
                          required: ""
                        },
                        domProps: { value: e.userData.bio },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "bio", t.target.value);
                          }
                        }
                      }),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.password,
                            expression: "userData.password"
                          }
                        ],
                        attrs: {
                          type: "password",
                          placeholder: "Enter Password",
                          name: "psw",
                          required: ""
                        },
                        domProps: { value: e.userData.password },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "password", t.target.value);
                          }
                        }
                      }),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.password_check,
                            expression: "userData.password_check"
                          }
                        ],
                        attrs: {
                          type: "password",
                          placeholder: "Repeat Password",
                          name: "psw-repeat",
                          required: ""
                        },
                        domProps: { value: e.userData.password_check },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(
                                e.userData,
                                "password_check",
                                t.target.value
                              );
                          }
                        }
                      }),
                      a("br"),
                      a("br"),
                      a("h3", [e._v("Upload Profile Image")]),
                      e.upload
                        ? e._e()
                        : a("img", {
                            attrs: { src: "images/profile.png", width: "100px" }
                          }),
                      e.upload
                        ? a("img", {
                            attrs: { src: e.userData.image_url, width: "100px" }
                          })
                        : e._e(),
                      a("br"),
                      a("br"),
                      a("input", {
                        ref: "uploadInput",
                        attrs: {
                          id: "files",
                          type: "file",
                          name: "file",
                          accept: "image/*",
                          multiple: !1
                        },
                        on: {
                          change: function(t) {
                            return e.imageUpload(t);
                          }
                        }
                      }),
                      a("br"),
                      a("br"),
                      a("h3", [e._v("Instrument 1")]),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.instrument,
                            expression: "userData.instrument"
                          }
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "What instrument do you play?",
                          required: ""
                        },
                        domProps: { value: e.userData.instrument },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "instrument", t.target.value);
                          }
                        }
                      }),
                      a("p", [e._v("Proficiency of Instrument 1")]),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.level,
                            expression: "userData.level"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          name: "proficiency",
                          value: "level1"
                        },
                        domProps: { checked: e._q(e.userData.level, "level1") },
                        on: {
                          change: function(t) {
                            return e.$set(e.userData, "level", "level1");
                          }
                        }
                      }),
                      a("label", { attrs: { for: "level1" } }, [
                        e._v("Level 1")
                      ]),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.level,
                            expression: "userData.level"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          name: "proficiency",
                          value: "level2"
                        },
                        domProps: { checked: e._q(e.userData.level, "level2") },
                        on: {
                          change: function(t) {
                            return e.$set(e.userData, "level", "level2");
                          }
                        }
                      }),
                      a("label", { attrs: { for: "level2" } }, [
                        e._v("Level 2")
                      ]),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.level,
                            expression: "userData.level"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          name: "proficiency",
                          value: "level3"
                        },
                        domProps: { checked: e._q(e.userData.level, "level3") },
                        on: {
                          change: function(t) {
                            return e.$set(e.userData, "level", "level3");
                          }
                        }
                      }),
                      a("label", { attrs: { for: "level3" } }, [
                        e._v("Level 3")
                      ]),
                      a(
                        "div",
                        {
                          staticClass: "popup",
                          on: { click: e.popup_description }
                        },
                        [
                          a("br"),
                          a("u", [
                            e._v("How do I decide my proficiency level?")
                          ]),
                          a(
                            "span",
                            {
                              staticClass: "popuptext",
                              attrs: { id: "description" }
                            },
                            [
                              e._v(
                                " Mola mola! Mola mola! Mola mola! Mola mola! Mola mola!Mola mola! Mola mola!Mola mola!Mola mola! Mola mola!Mola mola! Mola mola!Help!Help!Help! SIBAL Ewook Lolchess go? go "
                              )
                            ]
                          )
                        ]
                      ),
                      a("br"),
                      a(
                        "button",
                        {
                          staticClass: "redbutton",
                          staticStyle: { width: "300px" }
                        },
                        [e._v(" Click to add instruments ")]
                      ),
                      a("br"),
                      a("br"),
                      a("h3", [
                        e._v("Tags that describe your musical preferences")
                      ]),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.tag1,
                            expression: "userData.tag1"
                          }
                        ],
                        staticStyle: { width: "230px" },
                        attrs: {
                          type: "text",
                          placeholder: "ex. prefers easy violin pieces",
                          name: "tag1",
                          required: ""
                        },
                        domProps: { value: e.userData.tag1 },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "tag1", t.target.value);
                          }
                        }
                      }),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.tag2,
                            expression: "userData.tag2"
                          }
                        ],
                        staticStyle: { width: "230px" },
                        attrs: {
                          type: "text",
                          placeholder: "ex. prefers easy violin pieces",
                          name: "tag2",
                          required: ""
                        },
                        domProps: { value: e.userData.tag2 },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "tag2", t.target.value);
                          }
                        }
                      }),
                      a("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.userData.tag3,
                            expression: "userData.tag3"
                          }
                        ],
                        staticStyle: { width: "230px" },
                        attrs: {
                          type: "text",
                          placeholder: "ex. prefers easy violin pieces",
                          name: "tag3",
                          required: ""
                        },
                        domProps: { value: e.userData.tag3 },
                        on: {
                          input: function(t) {
                            t.target.composing ||
                              e.$set(e.userData, "tag3", t.target.value);
                          }
                        }
                      }),
                      a(
                        "button",
                        {
                          staticClass: "redbutton",
                          staticStyle: { width: "300px" }
                        },
                        [e._v(" Click to add more tags ")]
                      ),
                      a("br"),
                      a("br"),
                      a("br"),
                      a(
                        "button",
                        {
                          staticClass: "button",
                          attrs: { type: "submit" },
                          on: {
                            click: function(t) {
                              return t.stopPropagation(), e.check_password(t);
                            }
                          }
                        },
                        [e._v(" Sign Up ")]
                      )
                    ]
                  ),
                  a(
                    "router-link",
                    {
                      staticClass: "backbutton",
                      attrs: { to: "/", tag: "button" }
                    },
                    [e._v(" Back ")]
                  )
                ],
                1
              )
            ])
          ]);
        },
        n = [
          function() {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("head", [
              a("meta", {
                attrs: {
                  "http-equiv": "Content-Type",
                  content: "text/html; charset=utf-8"
                }
              }),
              a("title", [e._v("PitchPerfect")]),
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
          }
        ],
        s =
          (a("a630"),
          a("d81d"),
          a("b0c0"),
          a("d3b7"),
          a("3ca3"),
          a("ddb0"),
          a("2591")),
        o =
          (a("e71f"),
          {
            apiKey: "AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",
            authDomain: "fyeesh.firebaseapp.com",
            databaseURL: "https://fyeesh.firebaseio.com",
            projectId: "fyeesh",
            storageBucket: "fyeesh.appspot.com",
            messagingSenderId: "167708075968",
            appId: "1:167708075968:web:7b487c33ee10ec616fca25",
            measurementId: "G-LGEWZSYSGG"
          });
      s["a"].initializeApp(o);
      var i = s["a"].storage(),
        l = {
          data: function() {
            return {
              userData: {
                nickname: "",
                age: "",
                password: "",
                password_check: "",
                bio: "",
                image_url: "",
                instrument: "",
                level: "",
                tag1: "",
                tag2: "",
                tag3: ""
              },
              upload: !1
            };
          },
          methods: {
            name_check: function() {
              var e = this.userData.nickname,
                t = s["a"]
                  .firestore()
                  .collection("userinfo")
                  .doc(e);
              t.get().then(function(e) {
                e.exists
                  ? window.alert("Username Already Exists!")
                  : window.alert("Valid Username");
              });
            },
            login: function() {
              var e = this,
                t = this.userData.nickname,
                a = this.userData.password,
                r = this.userData.age,
                n = this.userData.instrument,
                o = this.userData.bio;
              console.log(o);
              var i = this.userData.tag1,
                l = this.userData.tag2,
                u = this.userData.tag3,
                c = s["a"].firestore().collection("userinfo");
              c
                .doc(t)
                .set({
                  name: t,
                  password: a,
                  age: r,
                  instrument: n,
                  bio: o,
                  level: this.userData.level,
                  tag1: i,
                  tag2: l,
                  tag3: u
                })
                .then(function() {
                  window.alert("saved!"),
                    e.$router.push({
                      path: "/library",
                      query: { userId: t },
                      params: { username: a }
                    });
                })
                .catch(function(e) {
                  console.error("Error yee : ", e);
                }),
                console.log("submitted!");
            },
            check_password: function() {
              var e = this.userData.password,
                t = this.userData.password_check;
              e != t
                ? window.alert("Passwords are different!")
                : (console.log("good to go"), this.login());
            },
            upload_file: function(e) {
              i.ref("images/" + e.name)
                .put(e)
                .then(function(e) {
                  var t = this;
                  e.ref.getDownloadURL().then(function(e) {
                    (t.userData.image_url = e), (t.upload = !0);
                  });
                });
            },
            imageUpload: function(e) {
              var t = this;
              console.log(this.$refs.uploadInput);
              var a = e.target.files || e.dataTransfer.files;
              Array.from(Array(a.length).keys()).map(function(e) {
                t.upload_file(a[e]);
              });
            }
          }
        },
        u = l,
        c = a("2877"),
        p = Object(c["a"])(u, r, n, !1, null, null, null);
      t["default"] = p.exports;
    },
    "3ca3": function(e, t, a) {
      "use strict";
      var r = a("6547").charAt,
        n = a("69f3"),
        s = a("7dd0"),
        o = "String Iterator",
        i = n.set,
        l = n.getterFor(o);
      s(
        String,
        "String",
        function(e) {
          i(this, { type: o, string: String(e), index: 0 });
        },
        function() {
          var e,
            t = l(this),
            a = t.string,
            n = t.index;
          return n >= a.length
            ? { value: void 0, done: !0 }
            : ((e = r(a, n)), (t.index += e.length), { value: e, done: !1 });
        }
      );
    },
    "4df4": function(e, t, a) {
      "use strict";
      var r = a("0366"),
        n = a("7b0b"),
        s = a("9bdd"),
        o = a("e95a"),
        i = a("50c4"),
        l = a("8418"),
        u = a("35a1");
      e.exports = function(e) {
        var t,
          a,
          c,
          p,
          d,
          m,
          f = n(e),
          v = "function" == typeof this ? this : Array,
          g = arguments.length,
          h = g > 1 ? arguments[1] : void 0,
          y = void 0 !== h,
          b = u(f),
          w = 0;
        if (
          (y && (h = r(h, g > 2 ? arguments[2] : void 0, 2)),
          void 0 == b || (v == Array && o(b)))
        )
          for (t = i(f.length), a = new v(t); t > w; w++)
            (m = y ? h(f[w], w) : f[w]), l(a, w, m);
        else
          for (
            p = b.call(f), d = p.next, a = new v();
            !(c = d.call(p)).done;
            w++
          )
            (m = y ? s(p, h, [c.value, w], !0) : c.value), l(a, w, m);
        return (a.length = w), a;
      };
    },
    6547: function(e, t, a) {
      var r = a("a691"),
        n = a("1d80"),
        s = function(e) {
          return function(t, a) {
            var s,
              o,
              i = String(n(t)),
              l = r(a),
              u = i.length;
            return l < 0 || l >= u
              ? e
                ? ""
                : void 0
              : ((s = i.charCodeAt(l)),
                s < 55296 ||
                s > 56319 ||
                l + 1 === u ||
                (o = i.charCodeAt(l + 1)) < 56320 ||
                o > 57343
                  ? e
                    ? i.charAt(l)
                    : s
                  : e
                  ? i.slice(l, l + 2)
                  : o - 56320 + ((s - 55296) << 10) + 65536);
          };
        };
      e.exports = { codeAt: s(!1), charAt: s(!0) };
    },
    "65f0": function(e, t, a) {
      var r = a("861d"),
        n = a("e8b5"),
        s = a("b622"),
        o = s("species");
      e.exports = function(e, t) {
        var a;
        return (
          n(e) &&
            ((a = e.constructor),
            "function" != typeof a || (a !== Array && !n(a.prototype))
              ? r(a) && ((a = a[o]), null === a && (a = void 0))
              : (a = void 0)),
          new (void 0 === a ? Array : a)(0 === t ? 0 : t)
        );
      };
    },
    8418: function(e, t, a) {
      "use strict";
      var r = a("c04e"),
        n = a("9bf2"),
        s = a("5c6c");
      e.exports = function(e, t, a) {
        var o = r(t);
        o in e ? n.f(e, o, s(0, a)) : (e[o] = a);
      };
    },
    "9bdd": function(e, t, a) {
      var r = a("825a"),
        n = a("2a62");
      e.exports = function(e, t, a, s) {
        try {
          return s ? t(r(a)[0], a[1]) : t(a);
        } catch (o) {
          throw (n(e), o);
        }
      };
    },
    a630: function(e, t, a) {
      var r = a("23e7"),
        n = a("4df4"),
        s = a("1c7e"),
        o = !s(function(e) {
          Array.from(e);
        });
      r({ target: "Array", stat: !0, forced: o }, { from: n });
    },
    ae40: function(e, t, a) {
      var r = a("83ab"),
        n = a("d039"),
        s = a("5135"),
        o = Object.defineProperty,
        i = {},
        l = function(e) {
          throw e;
        };
      e.exports = function(e, t) {
        if (s(i, e)) return i[e];
        t || (t = {});
        var a = [][e],
          u = !!s(t, "ACCESSORS") && t.ACCESSORS,
          c = s(t, 0) ? t[0] : l,
          p = s(t, 1) ? t[1] : void 0;
        return (i[e] =
          !!a &&
          !n(function() {
            if (u && !r) return !0;
            var e = { length: -1 };
            u ? o(e, 1, { enumerable: !0, get: l }) : (e[1] = 1),
              a.call(e, c, p);
          }));
      };
    },
    b0c0: function(e, t, a) {
      var r = a("83ab"),
        n = a("9bf2").f,
        s = Function.prototype,
        o = s.toString,
        i = /^\s*function ([^ (]*)/,
        l = "name";
      r &&
        !(l in s) &&
        n(s, l, {
          configurable: !0,
          get: function() {
            try {
              return o.call(this).match(i)[1];
            } catch (e) {
              return "";
            }
          }
        });
    },
    b727: function(e, t, a) {
      var r = a("0366"),
        n = a("44ad"),
        s = a("7b0b"),
        o = a("50c4"),
        i = a("65f0"),
        l = [].push,
        u = function(e) {
          var t = 1 == e,
            a = 2 == e,
            u = 3 == e,
            c = 4 == e,
            p = 6 == e,
            d = 5 == e || p;
          return function(m, f, v, g) {
            for (
              var h,
                y,
                b = s(m),
                w = n(b),
                D = r(f, v, 3),
                x = o(w.length),
                S = 0,
                k = g || i,
                _ = t ? k(m, x) : a ? k(m, 0) : void 0;
              x > S;
              S++
            )
              if ((d || S in w) && ((h = w[S]), (y = D(h, S, b)), e))
                if (t) _[S] = y;
                else if (y)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return h;
                    case 6:
                      return S;
                    case 2:
                      l.call(_, h);
                  }
                else if (c) return !1;
            return p ? -1 : u || c ? c : _;
          };
        };
      e.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6)
      };
    },
    d81d: function(e, t, a) {
      "use strict";
      var r = a("23e7"),
        n = a("b727").map,
        s = a("1dde"),
        o = a("ae40"),
        i = s("map"),
        l = o("map");
      r(
        { target: "Array", proto: !0, forced: !i || !l },
        {
          map: function(e) {
            return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    },
    ddb0: function(e, t, a) {
      var r = a("da84"),
        n = a("fdbc"),
        s = a("e260"),
        o = a("9112"),
        i = a("b622"),
        l = i("iterator"),
        u = i("toStringTag"),
        c = s.values;
      for (var p in n) {
        var d = r[p],
          m = d && d.prototype;
        if (m) {
          if (m[l] !== c)
            try {
              o(m, l, c);
            } catch (v) {
              m[l] = c;
            }
          if ((m[u] || o(m, u, p), n[p]))
            for (var f in s)
              if (m[f] !== s[f])
                try {
                  o(m, f, s[f]);
                } catch (v) {
                  m[f] = s[f];
                }
        }
      }
    },
    e8b5: function(e, t, a) {
      var r = a("c6b6");
      e.exports =
        Array.isArray ||
        function(e) {
          return "Array" == r(e);
        };
    },
    fdbc: function(e, t) {
      e.exports = {
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
//# sourceMappingURL=signup.4a6f6eb7.js.map
