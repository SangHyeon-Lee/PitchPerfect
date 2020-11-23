<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1 id="user">{{ $route.query.userId }}'s Library</h1>
        <h2>Projects in progress</h2>
        <!-- <dl> -->
        <!-- <dt v-for="entry in projects" :key="entry.name"> -->
        <!-- {{ entry.projs }} -->
        <ul class="projects">
          <li
            v-for="project in ongoing_projects"
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
          <span v-if="ongoing_projects.length === 0">
            &lt;empty&gt;
          </span>
        </ul>
        <!-- </dt> -->
        <!-- </dl> -->
        <router-link
          class="backbutton"
          style="width: 200px; padding: 10px"
          :to="{
            path: '/projects_page',
            query: { userId: $route.query.userId }
          }"
          tag="button"
          >Find projects</router-link
        >
        <br /><br />
        <h2>Previous Projects</h2>
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
        <br /><br /><br /><br />
        <router-link
          class="backbutton"
          to="/"
          style="color:white;background-color:gray"
          tag="button"
        >
          logout
        </router-link>
      </div>

      <br /><br /><br /><br />

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
            <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId
                }
              }"
              ><img src="../assets/images/profile.png" width="100px"
            /></router-link>
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>
<script>
var userprojs = firebase.firestore().collection("userinfo");
var projects = firebase.firestore().collection("projects");

export default {
  data() {
    return {
      ongoing_projects: [],
      previous_projects: []
    };
  },
  created() {
    var userID = this.$route.query.userId;
    var userprojs_db = userprojs.doc(userID);
    userprojs_db
      .get()
      .then(doc => {
        var my_projs = doc.data().projs;
        var i;
        for (i = 0; i < my_projs.length; i++) {
          var proj_entry = projects.doc(my_projs[i]);
          proj_entry.get().then(doc => {
            var project_data = doc.data();
            if (project_data.ongoing) {
              this.ongoing_projects.push(project_data);
            } else {
              this.previous_projects.push(project_data);
            }
          });
        }
      })
      .catch(function(error) {
        console.log("Error getting dictionary entry:", error);
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
    }
  }
  // methods: {
  //   find() {
  //     var userID = this.$route.query.userId;
  //     // window.alert("HI");
  //     var userprojs_db = userprojs.doc(userID);
  //     userprojs_db.get().then((doc) => {
  //       this.projects.push(doc.data());
  //     })
  //     .catch(function(error) {
  //         console.log("Error getting dictionary entry:", error);
  //     });
  //   }
  // }
};
</script>
