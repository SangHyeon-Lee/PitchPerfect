<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1>Projects</h1>
        <p style="font-size: 20px">
          List of all ongoing projects in PitchPerfect
        </p>
        <p>Note: Your ongoing projects are excluded</p>
        <ul class="projects">
          <li
            v-for="index in projs.length"
            class="project_container"
            v-bind:key="index"
          >
            <h2 class="project_text">{{ projs[index - 1].team }}</h2>
            <h3 class="project_text">{{ projs[index - 1].song }}</h3>
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
            <a class="tag">{{ projs[index - 1].level }}</a>
            <button
              class="button"
              style="background-color: #f2c94c"
              @click.stop="view(projs[index - 1].team)"
            >
              view
            </button>
          </li>
          <span v-if="projs.length === 0"> &lt;empty&gt; </span>
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
import { firestore } from "@/firebase";

var projs_base = firebase.firestore().collection("projects");

export default {
  name: "projects",
  data() {
    return {
      projs: [],
      inst_name: [], // ex) [Violin, Viola, Cello]
      max_num: [], // ex) [4, 4, 2]
      left_num: [], // ex) [3, 3, 1] : current number of members
    };
  },
  created() {
    var userNickname = this.$route.query.userId;
    projs_base.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        let proj = doc.data();
        proj.id = doc.id;
        console.log(proj);
        var inst_name = [];
        var max_num = [];
        var left_num = [];

        var left_inst = proj.left_inst;
        var max_inst = proj.max_inst;
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
        // only display ongoing projects
        if (proj.ongoing && !proj.members.includes(userNickname)) {
          if (max_num != left_num) {
            this.projs.push(proj);
            this.inst_name.push(inst_name);
            this.max_num.push(max_num);
            this.left_num.push(left_num);
          }
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
        params: { userId: userNickname, projName: teamName },
      });
    },
  },
};
</script>
