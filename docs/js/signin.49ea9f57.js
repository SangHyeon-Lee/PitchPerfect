(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["signin"],
  {
    "4a33": function(e, t, a) {
      "use strict";
      a.r(t);
      var s = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("html", [
            a("body", [
              a(
                "div",
                {
                  staticClass: "content",
                  staticStyle: { "min-height": "700px" },
                  attrs: { align: "center" }
                },
                [
                  a("h1", [e._v("Sign In")]),
                  a(
                    "form",
                    {
                      on: {
                        submit: function(t) {
                          return t.preventDefault(), e.signin(t);
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
                        attrs: {
                          type: "text",
                          placeholder: "Nickname",
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
                      a("br"),
                      a(
                        "button",
                        {
                          staticClass: "button",
                          staticStyle: {
                            color: "white",
                            "background-color": "#F2C94C"
                          },
                          attrs: { id: "app", type: "submit" },
                          on: {
                            click: function(t) {
                              return t.stopPropagation(), e.signin(t);
                            }
                          }
                        },
                        [e._v(" Sign In ")]
                      ),
                      a("br"),
                      a(
                        "router-link",
                        {
                          staticClass: "backbutton",
                          attrs: { to: "/", tag: "button" }
                        },
                        [e._v("Back")]
                      ),
                      a("br")
                    ],
                    1
                  )
                ]
              )
            ])
          ]);
        },
        n = [],
        r = a("2591"),
        i =
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
      r["a"].initializeApp(i);
      var o = {
          data: function() {
            return { userData: { nickname: "", password: "" } };
          },
          methods: {
            signin: function() {
              var e = this,
                t = r["a"]
                  .firestore()
                  .collection("userinfo")
                  .doc(this.userData.nickname),
                a = this.userData.nickname,
                s = this.userData.password;
              t.get()
                .then(function(t) {
                  if (t.exists) {
                    var n = t.data()["password"];
                    console.log("password: ", n),
                      n == s
                        ? e.$router.push({
                            path: "/library",
                            query: { userId: a },
                            params: { userId: a }
                          })
                        : window.alert("invalid password");
                  } else window.alert("invalid username!");
                })
                .catch(function(e) {
                  console.log("Error getting document:", e);
                });
            }
          }
        },
        u = o,
        c = a("2877"),
        p = Object(c["a"])(u, s, n, !1, null, null, null);
      t["default"] = p.exports;
    }
  }
]);
//# sourceMappingURL=signin.49ea9f57.js.map
