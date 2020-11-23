<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Threads</h2>
        <br />
        <div
          class="wrapper"
          style="
            display: inline-block;
            color: black;
            text-align: left;
            text-decoration: black;
          "
        >
        <p style="margin-left:30px">You can navigate to any thread page from here!</p>
          <ul>
            <li
              v-for="(thread, index) in threads"
              v-bind:key="thread.pinid"
              style="list-style: none"
            >
              <p @click.stop="view(index)"><b>view thread #{{ index }}</b></p>
            </li>
          </ul>
        </div>
        <br /><br /><br /><br />
        <button
          style="height: 40px; width: 100px; text-align: center"
          class="mini_button"
          v-on:click="retreat"
        >
          Back
        </button>
      </div>
    </body>
  </html>
</template>
<script>
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";

var projInfo = firebase.firestore().collection("projects");

export default {
  data() {
    return {
      threads: [],
    };
  },
  created() {
    var projName = this.$route.query.projName;
    projInfo
      .doc(projName)
      .get()
      .then((doc) => {
        this.threads = doc.data().threads;
      });
  },
  methods: {
    view(threadNum) {
      var userNickname = this.$route.query.userId;
      var projName = this.$route.query.projName;
      console.log("threadNum: ", threadNum);
      this.$router.push({
        path: "/thread",
        query: {
          userId: userNickname,
          projName: projName,
          threadNo: threadNum,
        },
        params: {
          userId: userNickname,
          projName: projName,
          threadNo: threadNum,
        },
      });
    },
    retreat() {
      this.$router.go(-1);
    },
  },
};
</script>
