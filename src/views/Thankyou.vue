<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="50px" align="center">
        <br /><br /><br /><br /><br /><br />
        <h2>Thank you!</h2>
        <h3>Team FYEESH</h3>
        <br /><br />
        <form @submit.prevent="send">
          <router-link
            style="height: 60px; width: 150px"
            class="button"
            v-on:click.native="send"
            :to="{
              path: '/library',
              query: {
                userId: $route.query.userId,
                projName: $route.query.projName,
              },
            }"
            tag="button"
          >
            Home
          </router-link>
        </form>
      </div>

      <nav id="tabbar">
        <ul id="tab_wrap">
          <li>
            <a href="/library.html"
              ><img src="../assets/images/home.png" width="100px"
            /></a>
          </li>
          <li>
            <a href="/search.html"
              ><img src="../assets/images/search.png" width="100px"
            /></a>
          </li>
          <li>
            <a href="/add.html"
              ><img src="../assets/images/add.png" width="100px"
            /></a>
          </li>
          <li>
            <a href="/profile.html"
              ><img src="../assets/images/profile.png" width="100px"
            /></a>
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>

<script>
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";
var project_collection = firebase.firestore().collection("projects");
var userinfo_collection = firebase.firestore().collection("userinfo");

export default {
  data() {
    return {
      projInfo: {
        team: "",
        song: "",
        parts: "",
        level: "",
        blurb: "",
        members: [],
        ongoing: false,
      },
      userinfo: {
        name: "",
        image_url: "",
        best_num: 0,
      },
      members_url: [],
    };
  },
  created() {
    var projectName = this.$route.query.projName;
    console.log("hihihi");
    project_collection
      .doc(projectName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let pi = doc.data();
          this.projInfo = pi;
          var i;
          for (i = 0; i < this.projInfo.members.length; i++) {
            userinfo_collection
              .doc(this.projInfo.members[i])
              .get()
              .then((doc_user) => {
                if (doc_user.exists) {
                  let user = doc_user.data();
                  this.userinfo = user;
                  this.members_url.push([
                    this.userinfo.name,
                    this.userinfo.image_url,
                    this.userinfo.best_num,
                  ]);
                }
              });
          }
        } else {
          window.alert("ERROR: No such project exist!");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving project info: ", error);
      });
  },
  methods: {
    send() {
      console.log("byebyebye");
      var userID = this.$route.query.userId;
      var projName = this.$route.query.projName;
      project_collection
        .doc(projName)
        .update({
          ongoing: false,
        })
        .catch(function (error) {
          console.error("Error yee : ", error);
        });
    },
  },
};
</script>
