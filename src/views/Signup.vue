<template>
  <html>
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

          <br />
          <label for="files"> Upload Image </label>
          <input
            id="files"
            type="file"
            name="file"
            ref="uploadInput"
            accept="image/*"
            :multiple="false"
            hidden
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
          <br /><br />
          <button class="copy_button" @click="handle_toggle" type="button">
            How do I decide my proficiency level?
          </button>

          <!-- #2 : Modal Window -->
          <div v-show="is_show">
            <p>
              Level1: Just started learning the instrument
              <br />
              Level2: Learned instrument for at least 6 months
              <br />
              Level3: Learned instrument for at least 2 years
            </p>
          </div>

          <br /><br />
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
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";

export default {
  // name : 'signUp',

  template: "#modal-template",
  data() {
    return {
      userData: {
        nickname: "",
        age: "",
        password: "",
        password_check: "",

        bio: "",
        instrument: "",
        level: "",
        tag1: "",
        tag2: "",
        tag3: ""
      },
      image_url: "images/fyeesh.png",
      is_show: false
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
    handle_toggle: function() {
      this.is_show = !this.is_show; // #2, #3
    },
    login: function() {
      var userName = this.userData.nickname;
      var userPass = this.userData.password;
      var userAge = this.userData.age;
      var instrument = this.userData.instrument;
      var bio = this.userData.bio;
      var tag1 = this.userData.tag1;
      var tag2 = this.userData.tag2;
      var tag3 = this.userData.tag3;
      var userinfo = firebase.firestore().collection("userinfo");
      firestorage
        .ref(this.image_url)
        .getDownloadURL()
        .then(url => {
          userinfo
            .doc(userName)
            .set({
              name: userName,
              password: userPass,
              age: userAge,
              instrument: instrument,
              bio: bio,
              projs: [],
              image_url: url,
              level: this.userData.level,
              tag1: tag1,
              tag2: tag2,
              tag3: tag3,
              report: [],
              best_num: 0
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
      firestorage.ref("images/" + file.name).put(file);
      this.image_url = "images/" + file.name;

      console.log(this.image_url);
    },
    imageUpload(e) {
      console.log(this.$refs.uploadInput);
      var filelist = e.target.files || e.dataTransfer.files;
      Array.from(Array(filelist.length).keys()).map(x => {
        this.upload_file(filelist[x]);
      });
    }
    // popup_description() {
    // 	var popup = document.getElementById("description");
    // 	popup.classList.toggle("show");
    // }
  }
};
</script>
