<template>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>PitchPerfect</title>
      <link rel="stylesheet" href="style.css" />
      <!-- font -->
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Doppio+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap"
        rel="stylesheet"
      />
      <!-- font -->
      <!--code for prettifying visual on phone-->
      <meta
        content="user-scalable=no, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        name="viewport"
      />
      <!-- pop up -->
    </head>

    <body>
      <div class="content" align="center">
        <h1>Sign Up</h1>

        <form @submit.prevent="check_password" class="modal-content">
          <input
            type="text"
            style="width: 230px"
            placeholder="Nickname"
            name="nickname"
            v-model="userData.nickname"
            required
          />
          <a class="redbutton" @click="name_check">verify</a>
          <input
            type="number"
            placeholder="Age"
            name="age"
            v-model="userData.age"
            required
          />
          <input
            type="text"
            placeholder="Bio (introduce yourself)"
            name="bio"
            v-model="userData.bio"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            v-model="userData.password"
            required
          />

          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            v-model="userData.password_check"
            required
          />
          <br /><br />
          <h3>Upload Profile Image</h3>

          <img v-if="!upload" src="images/profile.png" width="100px" />
          <img v-if="upload" :src="userData.image_url" width="100px" />
          <br /><br />
          <input
            id="files"
            type="file"
            name="file"
            ref="uploadInput"
            accept="image/*"
            :multiple="false"
            @change="imageUpload($event)"
          />

          <br /><br />
          <h3>Instrument 1</h3>
          <input
            type="text"
            v-model="userData.instrument"
            placeholder="What instrument do you play?"
            required
          />
          <p>Proficiency of Instrument 1</p>
          <input
            type="radio"
            v-model="userData.level"
            name="proficiency"
            value="level1"
          />
          <label for="level1">Level 1</label>
          <input
            type="radio"
            v-model="userData.level"
            name="proficiency"
            value="level2"
          />
          <label for="level2">Level 2</label>
          <input
            type="radio"
            v-model="userData.level"
            name="proficiency"
            value="level3"
          />
          <label for="level3">Level 3</label>

          <div class="popup" @click="popup_description">
            <br /><u>How do I decide my proficiency level?</u>
            <span class="popuptext" id="description">
              Mola mola! Mola mola! Mola mola! Mola mola! Mola mola!Mola mola!
              Mola mola!Mola mola!Mola mola! Mola mola!Mola mola! Mola
              mola!Help!Help!Help! SIBAL Ewook Lolchess go? go
            </span>
          </div>

          <br />
          <button class="redbutton" style="width: 300px">
            Click to add instruments
          </button>

          <br /><br />

          <h3>Tags that describe your musical preferences</h3>
          <input
            type="text"
            style="width: 230px"
            placeholder="ex. prefers easy violin pieces"
            name="tag1"
            v-model="userData.tag1"
            required
          />
          <input
            type="text"
            style="width: 230px"
            placeholder="ex. prefers easy violin pieces"
            name="tag2"
            v-model="userData.tag2"
            required
          />
          <input
            type="text"
            style="width: 230px"
            placeholder="ex. prefers easy violin pieces"
            name="tag3"
            v-model="userData.tag3"
            required
          />
          <button class="redbutton" style="width: 300px">
            Click to add more tags
          </button>
          <br /><br /><br />

          <button type="submit" @click.stop="check_password" class="button">
            Sign Up
          </button>
        </form>

        <router-link class="backbutton" to="/" tag="button"> Back </router-link>
      </div>
    </body>
  </html>
</template>

<script>
import firebase from "firebase";
// import router from "../router/index";
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
var firestorage = firebase.storage();

export default {
  // name : 'signUp',
  data() {
    return {
      userData: {
        nickname: "",
        age: "",
        password: "",
        password_check: "",
        bio: "",
        image_url: "",
        instrument: "",
        level: "",
        tag1: "",
        tag2: "",
        tag3: ""
      },
      upload: false
    };
  },
  methods: {
    name_check: function() {
      var userName = this.userData.nickname;
      const usersRef = firebase
        .firestore()
        .collection("userinfo")
        .doc(userName);
      usersRef.get().then(docSnapshot => {
        if (docSnapshot.exists) {
          window.alert("Username Already Exists!");
        } else {
          window.alert("Valid Username");
        }
      });
    },
    login: function() {
      var userName = this.userData.nickname;
      var userPass = this.userData.password;
      var userAge = this.userData.age;
      var instrument = this.userData.instrument;
      var bio = this.userData.bio;
      console.log(bio);
      var tag1 = this.userData.tag1;
      var tag2 = this.userData.tag2;
      var tag3 = this.userData.tag3;

      var userinfo = firebase.firestore().collection("userinfo");
      userinfo
        .doc(userName)
        .set({
          name: userName,
          password: userPass,
          age: userAge,
          instrument: instrument,
          bio: bio,
          level: this.userData.level,
          tag1: tag1,
          tag2: tag2,
          tag3: tag3
        })
        .then(() => {
          window.alert("saved!");
          this.$router.push({
            path: "/library",
            query: { userId: userName },
            params: { username: userPass }
          });
        })
        .catch(function(error) {
          console.error("Error yee : ", error);
        });
      console.log("submitted!");
    },
    check_password: function() {
      var password = this.userData.password;
      var password_check = this.userData.password_check;
      if (password != password_check) {
        window.alert("Passwords are different!");
      } else {
        console.log("good to go");
        this.login();
      }
    },
    upload_file(file) {
      firestorage
        .ref("images/" + file.name)
        .put(file)
        .then(function(snapshot) {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            this.userData.image_url = downloadURL;
            this.upload = true;
          });
        });
    },
    imageUpload(e) {
      console.log(this.$refs.uploadInput);
      var filelist = e.target.files || e.dataTransfer.files;
      Array.from(Array(filelist.length).keys()).map(x => {
        this.upload_file(filelist[x]);
      });
    }
  }
};

// // function popup_description() {
// //   var popup = document.getElementById("description");
// //   popup.classList.toggle("show");
// // }
</script>
