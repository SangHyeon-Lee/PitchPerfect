<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1>Register a team!</h1>

        <form @submit.prevent="check_password" class="modal-content">
          <input
            type="text"
            style="width: 230px"
            placeholder="Team Name"
            name="teamname"
            v-model="teamInfo.team"
            required
          />
          <a class="redbutton" @click="name_check">verify</a>
          <input
            type="text"
            style="width: 230px"
            placeholder="Song to play"
            name="song"
            v-model="teamInfo.song"
            required
          />
          <h3>Upload Music Sheet</h3>
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
          <!-- <input
                type="text"
                style="width: 230px"
                placeholder="sheet music url (should be an image)"
                name="sheet_music_url"
                v-model="teamInfo.sheet_music_url"
                required
            /> -->
          <br />
          <input
            type="text"
            style="width: 230px"
            placeholder="required parts ex. piano 0/1 vocal 1/2"
            name="parts"
            v-model="teamInfo.parts"
            required
          />

          <h3>Expected proficiency of teammates</h3>
          <input
            type="radio"
            v-model="teamInfo.level"
            name="proficiency"
            value="basic"
          />
          <label for="basic">Basic</label>
          <input
            type="radio"
            v-model="teamInfo.level"
            name="proficiency"
            value="intermediate"
          />
          <label for="intermediate">Intermediate</label>
          <input
            type="radio"
            v-model="teamInfo.level"
            name="proficiency"
            value="advanced"
          />
          <label for="advanced">Advanced</label>
          <input
            type="text"
            placeholder="Brief introduction of your team"
            name="introduction"
            v-model="teamInfo.blurb"
            required
          />
          <br />
          <button type="submit" @click.stop="check_password" class="button">
            Register
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
      teamInfo: {
        team: "",
        song: "",
        parts: "",
        level: "",
        blurb: "",
        ongoing: true,
      },
      image_url: "images/music_sheet.png",
      is_show: false,
    };
  },
  methods: {
    name_check: function () {
      var teamName = this.teamInfo.team;
      const teamRef = firebase.firestore().collection("projects").doc(teamName);
      teamRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          window.alert("Team name Already Exists!");
        } else {
          window.alert("Valid team name");
        }
      });
    },
    handle_toggle: function () {
      this.is_show = !this.is_show; // #2, #3
    },
    login: function () {
      var userName = this.$route.query.userId;
      var teamName = this.teamInfo.team;
      var song = this.teamInfo.song;
      var parts = this.teamInfo.parts;
      var blurb = this.teamInfo.blurb;
      var teamdb = firebase.firestore().collection("projects");
      var userinfo_collection = firebase.firestore().collection("userinfo");
      firestorage
        .ref(this.image_url)
        .getDownloadURL()
        .then((url) => {
          teamdb
            .doc(teamName)
            .set({
              team: teamName,
              song: song,
              parts: parts,
              level: this.teamInfo.level,
              blurb: blurb,
              sheet_music_url: url,
              members: [userName],
              announcements: "",
              ongoing: true,
            })
            .then(() => {
              window.alert("saved!");
              this.$router.push({
                path: "/project_main",
                query: { userId: userName, projName: teamName },
              });
            })
            .catch(function (error) {
              console.error("Error yee : ", error);
            });
        });

      console.log("submitted!");
    },
    check_password: function () {
      this.login();
    },
    upload_file(file) {
      firestorage.ref("images/" + file.name).put(file);
      this.image_url = "images/" + file.name;

      console.log(this.image_url);
    },
    imageUpload(e) {
      console.log(this.$refs.uploadInput);
      var filelist = e.target.files || e.dataTransfer.files;
      Array.from(Array(filelist.length).keys()).map((x) => {
        this.upload_file(filelist[x]);
      });
    },
    // popup_description() {
    // 	var popup = document.getElementById("description");
    // 	popup.classList.toggle("show");
    // }
  },
};
</script>
