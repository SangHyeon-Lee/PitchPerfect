import Vue from "vue";
import App from "./App.vue";
import { store, router } from "./router";
// import store from "./store";
import firebase from "firebase";
import "firebase/firestore";
import "./views/style.css";
import "./views/tui-color-picker.css";
import "./views/tui-image-editor.css";

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount("#app");
