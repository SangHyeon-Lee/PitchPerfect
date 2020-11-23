<template>
  <html>
    <body>
      <div class="content" align="center">
        <img :src="userData.image_url" width="120px" />
        <h2 id="user" style="color:black;">{{ userData.name }}</h2>
        <a
          v-if="userData.level == 'level1'"
          class="roundtag"
          style="background-color:#2D9CD8;"
          >{{ userData.instrument
          }}🐣</a>
        <a
          v-if="userData.level == 'level2'"
          class="roundtag"
          style="background-color:#2D9CD8;"
          >{{ userData.instrument
          }}🐥</a>
        <a
          v-if="userData.level == 'level3'"
          class="roundtag"
          style="background-color:#2D9CD8;"
          >{{ userData.instrument
          }}🐦</a>
        <br />
        <a class="roundtag" style="background-color:#27AE60;">{{
          userData.tag1
        }}</a>
        <a class="roundtag" style="background-color:#27AE60;">{{
          userData.tag2
        }}</a>
        <a class="roundtag" style="background-color:#27AE60;">{{
          userData.tag3
        }}</a>
        <h3>{{ userData.bio }}</h3>
        <h4 class="roundtag" style="background-color: #ffde3b"> 💖 {{userData.best_num}}</h4>
        <h2 style="text-align: left; margin-left: 40px">Previous Projects</h2>
        <ul class="projects">
          <li
            v-for="project in previous_projects"
            class="project_container"
            v-bind:key="project.team"
          >
            <h2 class="project_text">{{ project.team }}</h2>
            <h3 class="project_text">{{ project.song }}</h3>
            <p class="project_text">{{ project.parts }}</p>
            <a class="tag">{{ project.level }}</a>
            <button
              class="button"
              style="background-color:#F2C94C"
              @click.stop="view(project.team)"
            >
              view
            </button>
          </li>
          <span v-if="previous_projects.length === 0">
            &lt;empty&gt;
          </span>
        </ul>
        <br /><br /><br /><br /><br /><br />
      </div>
      <nav id="tabbar">
        <ul id="tab_wrap">
          <li>
            <router-link
              :to="{ path: '/library', query: { userId: $route.query.userId } }"
              ><img src="../assets/images/home.png" width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/projects_page',
                query: { userId: $route.query.userId }
              }"
              ><img src="../assets/images/search.png" width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/teamFormation',
                query: { userId: $route.query.userId }
              }"
              ><img src="../assets/images/add.png" width="100px"
            /></router-link>
          </li>
          <li>
            <img src="../assets/images/profile.png" width="100px" @click="myprofile"
            />
            <!-- <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId
                }
              }"
              ><img src="../assets/images/profile.png" width="100px"
            /></router-link> -->
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>

<script>
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";
var userInfo = firebase.firestore().collection("userinfo");
var projects = firebase.firestore().collection("projects");

export default {
  name: "profile",
  data() {
    return {
      userData: {
        age: "",
        bio: "",
        instrument: "",
        level: "",
        name: "",
        projs: [],
        tag1: "",
        tag2: "",
        tag3: "",
        image_url: "",
        report: [],
        best_num: 0
      },
      previous_projects: []
    };
  },
  created() {
    var userNickname = this.$route.query.profileId;
    userInfo
      .doc(userNickname)
      .get()
      .then(doc => {
        if (doc.exists) {
          let ui = doc.data();
          this.userData = ui;
          var my_projs = doc.data().projs;
          var i;
          for (i = 0; i < my_projs.length; i++) {
            var proj_entry = projects.doc(my_projs[i]);
            proj_entry.get().then(doc => {
              var project_data = doc.data();
              if (!project_data.ongoing) {
                this.previous_projects.push(project_data);
              }
            });
          }
        } else {
          window.alert("hing");
        }
      })
      .catch(function(error) {
        console.log("Error retrieving user info: ", error);
      });
  },
  methods: {
    view(team) {
      var userNickname = this.$route.query.userId;
      var teamName = team;
      this.$router.push({
        path: "/project_main",
        query: { userId: userNickname, projName: teamName },
        params: { userId: userNickname, projName: teamName }
      });
    },
    myprofile() {
      var userNickname = this.$route.query.userId;
      this.$router.push({
        query: { userId: userNickname, profileId: userNickname },
        params: { userId: userNickname, profileId: userNickname }
      });
      this.$router.go(0);
    }
  }
};
</script>
