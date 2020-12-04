<template>
  <html>
    <body>
      <div class="content" align="center">
        <img src="../assets/images/fyeesh.png" width="100" />
        <h1 style="color: black; margin: 0px">{{ $route.query.projName }}</h1>
        <!-- <a class="button" style="background-color: #f2c94c; margin: 20px"
          >join</a
        > -->
        <!-- <button
          id="app"
          type="submit"
          class="button"
          style="background-color: #f2c94c; margin: 20px"
          v-on:click="signin"
        >
        join_test
        </button> -->
        <router-link
          class="button"
          style="background-color: #f2c94c; margin: 20px"
          v-on:click.native="send"
          :to="{
            path: '/choose_inst',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName
            }
          }"
          tag="button"
          >join</router-link
        >
        <div class="project_container">
          <h2 style="margin-bottom: 0px; margin-top: 0px">
            {{ projInfo.song }}
          </h2>
          <p style="color: black; margin-top: 10px; margin-bottom: 10px">
            {{ projInfo.parts }}
          </p>
          <a class="tag">{{ projInfo.level }}</a>
        </div>
        <h3 style="margin: 20px">
          {{ projInfo.blurb }}
        </h3>
        <h2>Members</h2>
        <ul
          v-for="member in members_url"
          v-bind:key="member.index"
          class="members_container"
        >
          <li class="member">
            <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: member[0]
                }
              }"
              ><img :src="member[1]" width="70px" />
            </router-link>
            <label class="member_label" for="member" style="color: black" > 
              <pre class="pre">{{ member[0] }}</pre>
            </label>
          </li>
        </ul>
        <br />
        <button class="backbutton" v-on:click="toBack">Back</button>
        <br /><br />
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
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId
                }
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
        image_url: ""
      },
      members_url: []
    };
  },
  created() {
    var projectName = this.$route.query.projName;

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
                  this.members_url.push([
                    this.userinfo.name,
                    this.userinfo.image_url,
                    this.userinfo.best_num
                  ]);
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
    send() {

      var userID = this.$route.query.userId;
      var projName = this.$route.query.projName;
      project_collection
        .doc(projName)
        .update({
          members: firebase.firestore.FieldValue.arrayUnion(userID)
        })
        .catch(function(error) {
          console.error("Error yee : ", error);
        });
      userinfo_collection
        .doc(userID)
        .update({
          projs: firebase.firestore.FieldValue.arrayUnion(projName)
        })
        .catch(function(error) {
          console.error("Error yee : ", error);
        });
    },
    toBack() {
      this.$router.go(-1);
    }
  }
};
</script>
