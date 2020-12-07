(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["thread"],{b3be:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("html",{attrs:{lang:"en"}},[r("body",[r("div",{staticClass:"content_project",attrs:{"padding-top":"5px",align:"center"}},[r("h2",[e._v("Thread #"+e._s(e.$route.query.threadNo))]),r("br"),r("div",{staticClass:"wrapper",staticStyle:{display:"inline-block",color:"black","text-align":"left"}},[r("ul",[e._l(e.comments,(function(t){return r("li",{key:t.pinid},[r("p",[r("b",[e._v(e._s(t.user))]),e._v(": "+e._s(t.comment)+" ")])])})),0===e.comments.length?r("span",[e._v(" <empty> ")]):e._e()],2),r("form",{on:{submit:function(t){return t.preventDefault(),e.submitcomment(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newcomment,expression:"newcomment"}],staticStyle:{"margin-left":"20px"},attrs:{type:"text",placeholder:"write your comment here",required:""},domProps:{value:e.newcomment},on:{input:function(t){t.target.composing||(e.newcomment=t.target.value)}}}),r("button",{staticClass:"button",staticStyle:{color:"white","background-color":"#f2c94c",width:"auto","margin-left":"100px"},attrs:{id:"app",type:"submit"}},[e._v(" Submit Comment ")])])]),r("br"),r("br"),r("br"),r("br"),r("button",{staticClass:"mini_button",staticStyle:{height:"40px",width:"100px","text-align":"center"},on:{click:e.retreat}},[e._v(" Back ")])])])])},n=[],s=(r("dc59"),firebase.firestore().collection("threads")),a={data:function(){return{comments:[],newcomment:"",origusers:[],origcomments:[]}},created:function(){var e=this,t=this.$route.query.projName,r=this.$route.query.threadNo,o=t+r;console.log("threadID:",o),s.doc(o).get().then((function(t){var r=t.data(),o=r.users,n=r.comments;r.comments_like;e.origusers=o,e.origcomments=n;for(var s=0;s<o.length;s++)e.comments.push({user:o[s],comment:n[s]})}))},methods:{retreat:function(){this.$router.go(-1)},submitcomment:function(){var e=this.$route.query.userId,t=this.$route.query.projName,r=this.$route.query.threadNo,o=t+r,n=this.origusers,a=this.origcomments;n.push(e),a.push(this.newcomment),console.log("threadID:",o),this.comments.push({user:e,comment:this.newcomment}),s.doc(o).update({users:n,comments:a}),console.log("comment submitted!")}}},i=a,c=r("2877"),m=Object(c["a"])(i,o,n,!1,null,null,null);t["default"]=m.exports},dc59:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var o=r("cc84"),n="firebase",s="8.1.1";
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
o["a"].registerVersion(n,s,"app");r("2e66"),r("e71f");var a={apiKey:"AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",authDomain:"fyeesh.firebaseapp.com",databaseURL:"https://fyeesh.firebaseio.com",projectId:"fyeesh",storageBucket:"fyeesh.appspot.com",messagingSenderId:"167708075968",appId:"1:167708075968:web:7b487c33ee10ec616fca25",measurementId:"G-LGEWZSYSGG"};o["a"].initializeApp(a);var i=o["a"].firestore(),c=o["a"].storage()}}]);
//# sourceMappingURL=thread.4de34861.js.map