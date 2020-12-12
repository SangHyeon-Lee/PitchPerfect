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
            v-for="index in ongoing_projects.length"
            class="project_container"
            v-bind:key="index"
          >
            <h2 class="project_text">{{ ongoing_projects[index - 1].team }}</h2>
            <h3 class="project_text">{{ ongoing_projects[index - 1].song }}</h3>
            <dl>
              <dt
                v-for="index2 in inst_name[index - 1].length"
                :key="index2"
                style="display: inline"
              >
                <!-- <div> -->
                <h5 style="color: black; display: inline">
                  {{
                    inst_name[index - 1][index2 - 1] +
                    " " +
                    left_num[index - 1][index2 - 1] +
                    "/" +
                    max_num[index - 1][index2 - 1]
                  }}
                </h5>
              </dt>
            </dl>
            <a class="tag">{{ ongoing_projects[index - 1].level }}</a>
            <button
              class="button"
              style="background-color: #f2c94c"
              @click.stop="view(ongoing_projects[index - 1].team)"
            >
              view
            </button>
          </li>
          <span v-if="ongoing_projects.length === 0"> &lt;empty&gt; </span>
        </ul>
        <!-- </dt> -->
        <!-- </dl> -->
        <router-link
          class="backbutton"
          style="width: 200px; padding: 10px"
          :to="{
            path: '/projects_page',
            query: { userId: $route.query.userId },
          }"
          tag="button"
          >Find projects</router-link
        >
        <br /><br />
        <h2>Previous Projects</h2>
        <ul class="projects">
          <li
            v-for="index in previous_projects.length"
            class="project_container"
            v-bind:key="index"
          >
            <h2 class="project_text">
              {{ previous_projects[index - 1].team }}
            </h2>
            <h3 class="project_text">
              {{ previous_projects[index - 1].song }}
            </h3>
            <dl style="margin-left: 10px">
              <dt
                v-for="index2 in pre_inst_name[index - 1].length"
                :key="index2"
                style="display: inline"
              >
                <!-- <div> -->
                <h5 style="color: black; display: inline">
                  {{
                    pre_inst_name[index - 1][index2 - 1] +
                    " " +
                    pre_left_num[index - 1][index2 - 1] +
                    "/" +
                    pre_max_num[index - 1][index2 - 1]
                  }}
                </h5>
              </dt>
            </dl>
            <a class="tag">{{ previous_projects[index - 1].level }}</a>
            <button
              class="button"
              style="background-color: #f2c94c"
              @click.stop="view(previous_projects[index - 1].team)"
            >
              view
            </button>
          </li>
          <span v-if="previous_projects.length === 0"> &lt;empty&gt; </span>
        </ul>
        <br /><br /><br /><br />
        <router-link
          class="backbutton"
          to="/"
          style="color: white; background-color: gray"
          tag="button"
        >
          logout
        </router-link>
        <a
          class="music_submit_button"
          style="width: 380px"
          href="https://forms.gle/ze7FtEjNaYY7zRmj9"
        >
          Complete the survey please🥰💗
        </a>
      </div>

      <br /><br />

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
          <li>
            <router-link
              :to="{
                path: '/teamFormation',
                query: { userId: $route.query.userId },
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
var userprojs = firebase.firestore().collection("userinfo");
var projects = firebase.firestore().collection("projects");

export default {
  data() {
    return {
      ongoing_projects: [],
      previous_projects: [],
      inst_name: [], // ex) [Violin, Viola, Cello]
      max_num: [], // ex) [4, 4, 2]
      left_num: [], // ex) [3, 3, 1] : current number of members
      pre_inst_name: [], // ex) [Violin, Viola, Cello]
      pre_max_num: [], // ex) [4, 4, 2]
      pre_left_num: [], // ex) [3, 3, 1] : current number of members
    };
  },
  created() {
    var userID = this.$route.query.userId;
    var userprojs_db = userprojs.doc(userID);
    userprojs_db
      .get()
      .then((doc) => {
        var my_projs = doc.data().projs;
        var my_projs_end = doc.data().projs_end;
        var i;
        for (i = 0; i < my_projs.length; i++) {
          var proj_entry = projects.doc(my_projs[i]);
          proj_entry.get().then((doc) => {
            var project_data = doc.data();

            var inst_name = [];
            var max_num = [];
            var left_num = [];

            var left_inst = project_data.left_inst;
            var max_inst = project_data.max_inst;
            var step;
            var curr = max_inst[0];
            var num = 1;

            // Count max_num and left_num
            for (step = 1; step < max_inst.length; step++) {
              if (curr == max_inst[step]) {
                num++;
              } else {
                inst_name.push(curr);
                max_num.push(num);
                curr = max_inst[step];
                num = 1;
              }
              if (step == max_inst.length - 1) {
                inst_name.push(curr);
                max_num.push(num);
              }
            }

            inst_name.forEach(function (inst) {
              var num2 = 0;
              for (step = 0; step < left_inst.length; step++) {
                if (inst == left_inst[step]) {
                  num2++;
                }
              }
              left_num.push(num2);
            });
            if (my_projs_end.includes(project_data.team)) {
              this.previous_projects.push(project_data);
              this.pre_inst_name.push(inst_name);
              this.pre_max_num.push(max_num);
              this.pre_left_num.push(left_num);
            } else {
              this.ongoing_projects.push(project_data);
              this.inst_name.push(inst_name);
              this.max_num.push(max_num);
              this.left_num.push(left_num);
            }
          });
        }

        

        console.log(this.ongoing_projects);
      })
      .catch(function (error) {
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
        params: { userId: userNickname, projName: teamName },
      });
    },
  },
};
</script>
