(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signin"],{"4a33":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("html",[a("body",[a("div",{staticClass:"content",staticStyle:{"min-height":"700px"},attrs:{align:"center"}},[a("h1",[e._v("Sign In")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.nickname,expression:"userData.nickname"}],attrs:{type:"text",placeholder:"Nickname",required:""},domProps:{value:e.userData.nickname},on:{input:function(t){t.target.composing||e.$set(e.userData,"nickname",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],attrs:{type:"password",placeholder:"Enter Password",required:""},domProps:{value:e.userData.password},on:{input:function(t){t.target.composing||e.$set(e.userData,"password",t.target.value)}}}),a("br"),a("button",{staticClass:"button",staticStyle:{color:"white","background-color":"#F2C94C"},attrs:{id:"app",type:"submit"},on:{click:function(t){return t.stopPropagation(),e.signin(t)}}},[e._v(" Sign In ")]),a("br"),a("router-link",{staticClass:"backbutton",attrs:{to:"/",tag:"button"}},[e._v("Back")]),a("br")],1)])])])},s=[],r=a("dc59"),i={data:function(){return{userData:{nickname:"",password:""}}},methods:{signin:function(){var e=this,t=r["b"].collection("userinfo").doc(this.userData.nickname),a=this.userData.nickname,n=this.userData.password;t.get().then((function(t){if(t.exists){var s=t.data()["password"];console.log("password: ",s),s==n?e.$router.push({path:"/library",query:{userId:a},params:{userId:a}}):window.alert("invalid password")}else window.alert("invalid username!")}))["catch"]((function(e){console.log("Error getting document:",e)}))}}},o=i,u=a("2877"),c=Object(u["a"])(o,n,s,!1,null,null,null);t["default"]=c.exports},dc59:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var n=a("cc84"),s="firebase",r="8.1.1";
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
n["a"].registerVersion(s,r,"app");a("2e66"),a("e71f");var i={apiKey:"AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",authDomain:"fyeesh.firebaseapp.com",databaseURL:"https://fyeesh.firebaseio.com",projectId:"fyeesh",storageBucket:"fyeesh.appspot.com",messagingSenderId:"167708075968",appId:"1:167708075968:web:7b487c33ee10ec616fca25",measurementId:"G-LGEWZSYSGG"};n["a"].initializeApp(i);var o=n["a"].firestore(),u=n["a"].storage()}}]);
//# sourceMappingURL=signin.16d8d49a.js.map