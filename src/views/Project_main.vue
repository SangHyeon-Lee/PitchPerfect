<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h1>{{ $route.query.projName }}</h1>
        <h2>{{ projInfo.song }}</h2>
        <router-link
          class="button"
          style="height: 70px; width: 400px"
          :to="{
            path: '/project_summary_joined',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Summary Page</router-link
        >
        <router-link
          class="button"
          style="height: 70px; width: 400px"
          :to="{
            path: '/sheetmusic',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Sheet Music</router-link
        >

        <router-link
          class="button"
          style="height: 70px; width: 400px"
          :to="{
            path: '/all_threads',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >View All Threads</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/announcements.html'">Announcements</button> <br> -->
        <router-link
          class="button"
          style="height: 70px; width: 195px"
          :to="{
            path: '/waitlist',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Wait List</router-link
        >
        <!-- <button style="height:70px;width:195px" class="button" onclick = "location.href = '/waitlist.html'">Wait List</button> -->
        <router-link
          class="button"
          style="height: 70px; width: 195px"
          :to="{
            path: '/invite',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Invite</router-link
        >
        <!-- <button style="height:70px;width:195px" class="button" onclick = "location.href = '/invite.html'">Invite</button> <br> -->
        <div class="box">
          <h3 style="color: black; text-align: left">Announcements</h3>
          <!-- <div class="members" align="left" id="members"></div> -->
          <ul style="color: black">
            <li v-for="announcement in announcements" v-bind:key="announcement">
              <h4 style="color: black; text-align: left">
                {{ announcement }}
              </h4>
            </li>
            <span v-if="announcements.length === 0"> &lt;empty&gt; </span>
          </ul>
          <form @submit.prevent="add_announcement">
            <input
              type="text"
              placeholder="write new announcement here"
              v-model="new_announcement"
              required
            />
            <button
              id="app"
              type="submit"
              class="button"
              style="color: white; background-color: #f2c94c; width: auto"
            >
              Post Announcement
            </button>
          </form>
        </div>
        <!-- <router-link
          class="button"
          style="height:70px;width:400px"
          :to="{
            path: 
          }"
          tag="button"
          >asdf</router-link
        > -->
        <div v-if="ongoing">
          <a
            class="music_submit_button"
            v-on:click="show_instruction"
            style="width: 380px"
            href="https://cs473pitchperfect-my.sharepoint.com/:f:/g/personal/elianakim_cs473pitchperfect_onmicrosoft_com/EttkFl9TrLNKrSXENEIs-TgBcQAw8NVS0QK8124XMJEQwQ"
          >
            Submit Your Recordings
          </a>

          <router-link
            class="button"
            style="height: 70px; width: 400px"
            :to="{
              path: '/endcollaboration',
              query: {
                userId: $route.query.userId,
                projName: $route.query.projName,
              },
            }"
            tag="button"
            >End Collaboration</router-link
          >
        </div>
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/endcollaboration.html'">End Collaboration</button> -->
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
import { firestorage } from "@/firebase";
var project_collection = firebase.firestore().collection("projects");

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
        projs_end: [],
        ongoing: true,
        announcements: [],
      },
      ongoing: true,
      announcements: [],
      new_announcement: "",
    };
  },
  created() {
    var projectName = this.$route.query.projName;

    project_collection
      .doc(projectName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let pi = doc.data();
          this.projInfo = pi;
          if (this.projInfo.projs_end.includes(projectName)) {
            this.ongoing = false;
          } else {
            this.ongoing = true;
          }

          this.announcements = this.projInfo.announcements;
        } else {
          window.alert("ERROR: No such project exist!");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving project info: ", error);
      });
  },
  methods: {
    add_announcement() {
      var new_announcement = this.new_announcement;
      if (new_announcement == "") {
        window.alert("empty input!");
      } else {
        var projectName = this.$route.query.projName;
        this.announcements.push(new_announcement);
        project_collection.doc(projectName).update({
          announcements: firebase.firestore.FieldValue.arrayUnion(
            new_announcement
          ),
        });
      }
    },
    show_instruction() {
      window.alert(
        "For 'First Name', please fill your 'team name'. For 'Last Name', please write down your 'nickname'."
      );
    },
  },
};
</script>
