<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1>Register a team!</h1>

        <form @submit.prevent="check_password" class="modal-content">
          <input
            type="text"
            style="width: 230px"
            placeholder="Team Name (You cannot use &quot;/&quot;)"
            name="teamname"
            v-model="teamInfo.team"
            required
          />
          <a class="redbutton" @click="name_check">verify</a>
          <input
            type="text"
            placeholder="Music to play"
            name="song"
            v-model="teamInfo.song"
            required
          />
          <h3>Upload Music Sheet</h3>

          <div v-if="!this.uploaded">
            <label for="files"> Upload Sheet Music (click!)</label>
          </div>
          <div v-else>
            <label for="files"> Uploaded!</label>
          </div>
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
          <h3>Required Parts of Music</h3>
          <input
            type="text"
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
          <br /><br />
          <button class="backbutton" v-on:click="retreat">Back</button>
          <button type="submit" class="button">Register</button>
        </form>
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
      db_image_url: "",
      base64_url: "",
      uploaded: false,
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
    createbase64(file){
      const reader = new FileReader();
      reader.onload = (e) => {
        this.base64_url = e.target.result;
      }
      reader.readAsDataURL(file);
    },
    send_annotate() {
      console.log("hi");
      

      var userName = this.$route.query.userId;
      var teamName = this.teamInfo.team;
      var annotate = firebase.firestore().collection("annotated");
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      const timestamp = dateTime;
      
      

      console.log("gimottttti", this.base64_url, timestamp);
      annotate
        .doc(teamName)
        .set({
          timestamp: [timestamp],
          url: [this.base64_url],
        })
        .then(() => {
          this.$router.push({
            path: "/project_main",
            query: { userId: userName, projName: teamName },
          });
        })
        .catch(function (error) {
          console.error("Error yee : ", error);
        });
    },

    login() {
      var userName = this.$route.query.userId;
      var teamName = this.teamInfo.team;
      var song = this.teamInfo.song;
      var parts = this.teamInfo.parts;
      var blurb = this.teamInfo.blurb;
      var teamdb = firebase.firestore().collection("projects");
      var threadb = firebase.firestore().collection("threads");
      var userinfo_collection = firebase.firestore().collection("userinfo");
      var threads = [ teamName+"0", teamName+"1", teamName+"2"];
      /* get timestamp */

      firestorage
        .ref(this.image_url)
        .getDownloadURL()
        .then((url) => {
          this.db_image_url = url;
          console.log("dbddd: ", url);
          teamdb
            .doc(teamName)
            .set({
              team: teamName,
              song: song,
              parts: parts,
              level: this.teamInfo.level,
              blurb: blurb,
              sheet_music_url: this.base64_url,
              members: [userName],
              announcements: "",
              ongoing: true,
              threads: threads,
            })
            .then(() => {
              window.alert("You made new team!");
            })
            .catch(function (error) {
              console.error("Error yee : ", error);
            });
            
          for (var i = 0; i < 3; i++) {
            threadb.doc(teamName + i).set({
              clientX: 400,
              clientY: 120,
              users: [],
              comments: [],
              pinid: i,
            })
          }

          userinfo_collection
            .doc(userName)
            .update({
              projs: firebase.firestore.FieldValue.arrayUnion(teamName),
            })
            .then(() => {
              this.send_annotate();
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
      this.uploaded = true;
      // this.createbase64(file);
      console.log(this.image_url);
    },
    imageUpload(e) {
      console.log(this.$refs.uploadInput);
      var filelist = e.target.files || e.dataTransfer.files;
      
      Array.from(Array(filelist.length).keys()).map((x) => {
        this.createbase64(filelist[x]);
        this.upload_file(filelist[x]);
      });
    },
    retreat() {
      this.$router.go(-1);
    },
  },
};
</script>
