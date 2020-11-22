<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h1>{{ $route.query.projName }}</h1>
        <h2>{{ projInfo.song }}</h2>
        <router-link
          class="button"
          style="height:70px;width:400px"
          :to="{ path: '/project_summary', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >Summary Page</router-link
        >
        <router-link
          class="button"
          style="height:70px;width:400px"
          :to="{ path: '/sheetmusic', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >Sheet Music</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/sheetmusic.html'">Sheet Music</button> <br> -->
        <router-link
          class="button"
          style="height:70px;width:400px"
          :to="{ path: '/all_threads', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >View All Threads</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/announcements.html'">Announcements</button> <br> -->
        <router-link
          class="button"
          style="height:70px;width:195px"
          :to="{ path: '/waitlist', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >Wait List</router-link
        >
        <!-- <button style="height:70px;width:195px" class="button" onclick = "location.href = '/waitlist.html'">Wait List</button> -->
        <router-link
          class="button"
          style="height:70px;width:195px"
          :to="{ path: '/invite', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >Invite</router-link
        >
        <!-- <button style="height:70px;width:195px" class="button" onclick = "location.href = '/invite.html'">Invite</button> <br> -->
        <div class="box">
          <h3 style="color:black; text-align:left">Announcements</h3>
          <!-- <div class="members" align="left" id="members"></div> -->
          <p style="color:black; text-align:left">{{ projInfo.announcements }}</p>
        </div>
        <router-link
          class="button"
          style="height:70px;width:400px"
          :to="{ path: '/endcollaboration', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >End Collaboration</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/endcollaboration.html'">End Collaboration</button> -->
      </div>
      <br><br>

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
import {firestorage} from '@/firebase';
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
        ongoing: false,
        announcements: "",
      },
    };
  },
  created() {
    var projectName = this.$route.query.projName;
    console.log(projectName);
    project_collection.doc(projectName).get().then(doc => {
      if (doc.exists) {
        let pi = doc.data();
        this.projInfo = pi;
      } else {
        window.alert("ERROR: No such project exist!");
      }
    })
    .catch(function(error) {
      console.log("Error retrieving project info: ", error);
    });
  }
};
</script>