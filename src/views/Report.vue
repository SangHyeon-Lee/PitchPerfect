<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Report</h2>
        <br /><br />
        <form action="/action_page.php">
          <label
            for="users"
            style="font-size: 120%; text-align: left; line-height: 2"
            >Who do you want to report?</label
          >
          <br />
          <ul
            v-for="member in members_url"
            v-bind:key="member.index"
            class="members_container"
            style="white-space: nowrap"
          >
            <li style="list-style: none; display: inline; align-items: center">
              <img :src="member[1]" width="75px" />
              <br />
              <input
                type="radio"
                v-model="report_info.reportuser"
                name="reports"
                v-bind:value="members_url.indexOf(member)"
              />

              <label for="member" style="color: black">{{ member[0] }}</label>
            </li>
          </ul>
          <br />
          <label
            for="review"
            style="font-size: 120%; text-align: left; line-height: 2"
            >Please provide specific reasons.</label
          >
          <textarea
            id="review"
            name="review"
            rows="3"
            cols="50"
            style="text-align: left"
            v-model="report_info.report_content"
          >
          </textarea>
          <br /><br />
          <router-link
            v-on:click.native="report"
            class="button"
            style="background-color: gold; height: 60px; width: 150px"
            :to="{
              path: '/endcollaboration',
              query: {
                userId: $route.query.userId,
                projName: $route.query.projName
              }
            }"
            tag="button"
            >Submit
          </router-link>
        </form>
        <br /><br /><br /><br />
        <router-link
          class="button"
          style="height: 40px; width: 100px; text-align: center"
          :to="{
            path: '/endcollaboration',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName
            }
          }"
          tag="button"
          >Back
        </router-link>
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
        ongoing: false
      },
      userinfo: {
        name: "",
        image_url: "",
        report: []
      },
      members_url: [],
      report_info: {
        reportuser: 0,
        report_content: ""
      }
    };
  },
  created() {
    var projectName = this.$route.query.projName;
    var myName = this.$route.query.userId;
    project_collection
      .doc(projectName)
      .get()
      .then(doc => {
        if (doc.exists) {
          let pi = doc.data();
          this.projInfo = pi;
          var i;
          for (i = 0; i < this.projInfo.members.length; i++) {
            userinfo_collection
              .doc(this.projInfo.members[i])
              .get()
              .then(doc_user => {
                if (doc_user.exists) {
                  let user = doc_user.data();
                  this.userinfo = user;
                  if (myName != this.userinfo.name) {
                    this.members_url.push([
                      this.userinfo.name,
                      this.userinfo.image_url,
                      this.userinfo.report
                    ]);
                  }
                }
              });
          }
        } else {
          window.alert("ERROR: No such project exist!");
        }
      })
      .catch(function(error) {
        console.log("Error retrieving project info: ", error);
      });
  },
  methods: {
    report() {
      var index = this.report_info.reportuser;

      var userName = this.members_url[index][0];
      var report_content = this.report_info.report_content;
      var report_array = this.members_url[index][2];

      userinfo_collection
        .doc(userName)
        .update({
          report: firebase.firestore.FieldValue.arrayUnion(report_content)
        })
        .then(() => {
          window.alert("reported!");
        })
        .catch(function(error) {
          console.error("Error yee : ", error);
        });
    }
  }
};
</script>
