<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1>Sign In</h1>
        <form @submit.prevent="send">
          <input
            type="text"
            placeholder="Nickname"
            v-model="userData.nickname"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            v-model="userData.password"
            required
          />
          <br />
          <router-link
            class="button"
            style="color: white; background-color: #f2c94c"
            @click="signin"
            to = "/library"
            tag="button_signin"
            >Sign In</router-link
          >
          <br />
          <router-link class="backbutton" to="/" tag="button_back"
            >Back</router-link
          >
          <br />
        </form>
      </div>
    </body>
  </html>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD77qeEEgwUNEAj6XDaOLZGM8YJh29q2PA",
  authDomain: "fyeesh.firebaseapp.com",
  databaseURL: "https://fyeesh.firebaseio.com",
  projectId: "fyeesh",
  storageBucket: "fyeesh.appspot.com",
  messagingSenderId: "167708075968",
  appId: "1:167708075968:web:7b487c33ee10ec616fca25",
  measurementId: "G-LGEWZSYSGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  // name : 'signUp',
  data() {
    return {
      userData: {
        nickname: "",
        password: ""
      }
    };
  },
  methods: {
    sign() {
      var usersRef = firebase
        .firestore()
        .collection("userinfo")
        .doc(this.userData.nickname);
      usersRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            var password = doc.data()["password"];
            console.log("password: ", password);
            if (password == this.userData.password) {
              location.replace("http://naver.com");
            } else {
              window.alert("invalid password");
            }
          } else {
            window.alert("invalid username!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  }
};
</script>
