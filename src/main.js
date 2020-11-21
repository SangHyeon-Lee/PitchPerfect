import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "firebase/firestore";

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount("#app");
