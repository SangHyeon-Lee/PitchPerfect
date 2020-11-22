<template>
  <html>
    <body>
      <div class="content" align="center" style="min-height:700px">
        <h1>Sign In</h1>
        <form @submit.prevent="signin">
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
          <button
            id="app"
            type="submit"
            class="button"
            style="color:white; background-color:#F2C94C"
            @click.stop="signin"
          >
            Sign In
          </button>
          <br />
          <router-link class="backbutton" to="/" tag="button">Back</router-link>
          <br />
        </form>
      </div>
    </body>
  </html>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

// import router from '../router/index'

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
    signin() {
      var usersRef = firebase
        .firestore()
        .collection("userinfo")
        .doc(this.userData.nickname);
      var usernickname = this.userData.nickname;
      var putpassword = this.userData.password;
      usersRef
        .get()
        .then(doc => {
          if (doc.exists) {
            var password = doc.data()["password"];
            console.log("password: ", password);
            if (password == putpassword) {
              // self.$router.replace({location: '/library'});
              this.$router.push({
                path: "/library",
                query: { userId: usernickname },
                params: { userId: usernickname }
              });
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
