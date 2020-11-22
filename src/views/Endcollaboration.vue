<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h1>Congratulations!</h1>
        <h3>Who was the best collaborator?</h3>
        <ul
          v-for="member in members_url"
          v-bind:key="member.index"
          class="members_container"
          style="white-space: nowrap"
        >
          <li style="list-style: none; display: inline; align-items: center">
            <button
              type="button"
              id=""
              class="btn btnEvent"
              @click="best_member(member)"
            >
              <img :src="member[1]" width="75px" />
            </button>
            <br />
            <label for="member" style="color: black">{{ member[0] }}</label>
          </li>
        </ul>
        <p>
          Had trouble with teammates? <br />
          <router-link
            :to="{
              path: '/report',
              query: {
                userId: $route.query.userId,
                projName: $route.query.projName,
              },
            }"
            >report</router-link
          >
          a user
        </p>
        <br />
        <br />
        <router-link
          style="height: 60px; width: 150px"
          class="button"
          :to="{
            path: '/rating',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Continue
        </router-link>
        <br /><br /><br /><br />
        <router-link
          class="button"
          style="height: 40px; width: 100px; text-align: center"
          :to="{
            path: '/project_main',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Back</router-link
        >
        <!-- <button style="height:40px;width:100px;text-align: center" class="mini_button" onclick = "location.href = '/project_main.html'">Back</button> -->
      </div>
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
    var myName = this.$route.query.userId;
    console.log(projectName);
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
                  if (myName != this.userinfo.name) {
                    this.members_url.push([
                      this.userinfo.name,
                      this.userinfo.image_url,
                      this.userinfo.best_num,
                    ]);
                  }
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
    best_member(member) {
      var userName = member[0];
      var best_num = member[2];
      userinfo_collection
        .doc(userName)
        .update({
          best_num: best_num + 1,
        })
        .then(() => {
          window.alert("voted!");
        })
        .catch(function (error) {
          console.error("Error yee : ", error);
        });
    },
  },
};
</script>