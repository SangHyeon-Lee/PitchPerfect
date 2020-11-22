<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1>Projects</h1>
        <ul class="projects">
          <li
            v-for="project in projs"
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
          <span v-if="projs.length === 0">
            &lt;empty&gt;
          </span>
        </ul>
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
                query: { userId: $route.query.userId },
              }"
              ><img src="../assets/images/search.png" width="100px"
            /></router-link>
          </li>
          <li><img src="../assets/images/add.png" width="100px" /></li>
          <li>
            <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId,
                },
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
import {firestore} from '@/firebase';

var projs_base = firebase.firestore().collection("projects");

export default {
  name: "projects",
  data() {
    return {
      projs: []
    };
  },
  created() {
    projs_base.get().then(snapshot => {
      snapshot.forEach(doc => {
        let proj = doc.data();
        proj.id = doc.id;
        // only display ongoing projects
        if (proj.ongoing) {
          this.projs.push(proj);
        }
      });
    });
  },
  methods: {
    view(team) {
      var userNickname = this.$route.query.userId;
      var teamName = team;
      this.$router.push({
        path: "/project_summary",
        query: { userId: userNickname, projName: teamName },
        params: { userId: userNickname, projName: teamName }
      });
    }
  }
};
</script>
