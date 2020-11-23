<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Thread #{{ $route.query.threadNo }}</h2>
        <br />
        <div
          class="wrapper"
          style="display: inline-block; color: black; text-align: left"
        >
          <ul>
            <li v-for="comment in comments" v-bind:key="comment.pinid">
              <p>
                <b>{{ comment.user }}</b
                >: {{ comment.comment }}
              </p>
            </li>
            <span v-if="comments.length === 0"> &lt;empty&gt; </span>
          </ul>
          <form @submit.prevent="submitcomment">
            <input
              type="text"
              placeholder="write your comment here"
              v-model="newcomment"
              required
              style="margin-left: 20px"
            />
            <button
              id="app"
              type="submit"
              class="button"
              style="
                color: white;
                background-color: #f2c94c;
                width: auto;
                margin-left: 100px;
              "
            >
              Submit Comment
            </button>
            <p style="margin-left:20px">Please press "back" and reenter this page to view newly submitted comment.</p>
          </form>
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

var threadInfo = firebase.firestore().collection("threads");

export default {
  data() {
    return {
      comments: [],
      newcomment: "",
      origusers: [],
      origcomments: [],
    };
  },
  created() {
    var projName = this.$route.query.projName;
    var threadNum = this.$route.query.threadNo;
    let threadID = projName + threadNum;
    console.log("threadID:", threadID);
    threadInfo
      .doc(threadID)
      .get()
      .then((doc) => {
        var d = doc.data();
        let users = d.users;
        let comments = d.comments;
        this.origusers = users;
        this.origcomments = comments;
        for (var i = 0; i < users.length; i++) {
          this.comments.push({
            user: users[i],
            comment: comments[i],
          });
        }
      });
  },
  methods: {
    retreat() {
      this.$router.go(-1);
    },
    submitcomment() {
      var userName = this.$route.query.userId;
      var projName = this.$route.query.projName;
      var threadNum = this.$route.query.threadNo;
      let threadID = projName + threadNum;
      var newusers = this.origusers;
      var newcomments = this.origcomments;
      newusers.push(userName);
      newcomments.push(this.newcomment);
      console.log("threadID:", threadID);
      threadInfo.doc(threadID).update({
        users: newusers,
        comments: newcomments,
      });
      console.log("comment submitted!");
    },
  },
};
</script>
