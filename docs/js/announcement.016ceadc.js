(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["announcement"],{"1f06":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("html",{attrs:{lang:"en"}},[a("body",[a("div",{staticClass:"content_project",attrs:{"padding-top":"5px",align:"center"}},[a("h2",[e._v("Threads")]),a("br"),a("div",{staticClass:"wrapper",staticStyle:{display:"inline-block",color:"black","text-align":"left","text-decoration":"black"}},[a("p",{staticStyle:{"margin-left":"30px"}},[e._v("You can navigate to any thread page from here!")]),a("ul",e._l(e.threads,(function(t,r){return a("li",{key:t.pinid,staticStyle:{"list-style":"none"}},[a("p",{on:{click:function(t){return t.stopPropagation(),e.view(r)}}},[a("b",[e._v("view thread #"+e._s(r))])])])})),0)]),a("br"),a("br"),a("br"),a("br"),a("button",{staticClass:"mini_button",staticStyle:{height:"40px",width:"100px","text-align":"center"},on:{click:e.retreat}},[e._v(" Back ")])])])])},n=[],i=(a("dc59"),firebase.firestore().collection("projects")),o={data:function(){return{threads:[]}},created:function(){var e=this,t=this.$route.query.projName;i.doc(t).get().then((function(t){e.threads=t.data().threads}))},methods:{view:function(e){var t=this.$route.query.userId,a=this.$route.query.projName;console.log("threadNum: ",e),this.$router.push({path:"/thread",query:{userId:t,projName:a,threadNo:e},params:{userId:t,projName:a,threadNo:e}})},retreat:function(){this.$router.go(-1)}}},s=o,c=a("2877"),u=Object(c["a"])(s,r,n,!1,null,null,null);t["default"]=u.exports},dc59:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var r=a("cc84"),n="firebase",i="8.1.1";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(n,i,"app");a("2e66"),a("e71f");var o={apiKey:"AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",authDomain:"fyeesh.firebaseapp.com",databaseURL:"https://fyeesh.firebaseio.com",projectId:"fyeesh",storageBucket:"fyeesh.appspot.com",messagingSenderId:"167708075968",appId:"1:167708075968:web:7b487c33ee10ec616fca25",measurementId:"G-LGEWZSYSGG"};r["a"].initializeApp(o);var s=r["a"].firestore(),c=r["a"].storage()}}]);
//# sourceMappingURL=announcement.016ceadc.js.map