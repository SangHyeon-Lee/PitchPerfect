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
import { firestore } from "@/firebase";

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
      var usersRef = firestore
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
