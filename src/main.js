import Vue from "vue";
import App from "./App.vue";
import { store, router } from "./router";
// import store from "./store";
import firebase from "firebase";
import "firebase/firestore";
import "./views/style.css";

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount("#app");
