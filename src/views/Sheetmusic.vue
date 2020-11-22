<template>
  <html lang="en">
    <body ref="body">
      <div ref="1" class="pinicon">
        <Moveable v-bind="moveable" @drag="handleDrag" @dragEnd="handleDragEnd">
          <img src="../assets/images/pin.png" style="width: 30px" />
          <router-link
            :to="{
              path: '/thread',
              query: {
                userId: $route.query.userId,
                projName: $route.query.projName,
              },
            }"
            ><p style="color: black; margin-top: 0px">
              view thread
            </p></router-link
          >
        </Moveable>
      </div>
      <div ref="2" class="pinicon">
        <Moveable v-bind="moveable" @drag="handleDrag" @dragEnd="handleDragEnd">
          <img src="../assets/images/pin.png" style="width: 30px" />
          <router-link
            :to="{
              path: '/thread',
              query: {
                userId: $route.query.userId,
                projName: $route.query.projName,
              },
            }"
            ><p style="color: black; margin-top: 0px">
              view thread
            </p></router-link
          >
        </Moveable>
      </div>
      <div class="content_project" align="center" style="padding-top: 0">
        <!--menu bar-->
        <ul class="menubar">
          <li>
            <router-link
              class="button"
              :to="{
                path: '/annotate',
                query: {
                  userId: $route.query.userId,
                  projName: $route.query.projName,
                },
              }"
              tag="button"
              ><img
                src="../assets/images/annotate.png"
                title="add annotations"
                width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              class="button"
              :to="{
                path: '/all_threads',
                query: {
                  userId: $route.query.userId,
                  projName: $route.query.projName,
                },
              }"
              tag="button"
              ><img
                src="../assets/images/announcement.png"
                title="view announcements"
                width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              class="button"
              :to="{
                path: '/dictionary',
                query: {
                  userId: $route.query.userId,
                  projName: $route.query.projName,
                },
              }"
              tag="button"
              ><img
                src="../assets/images/dictionary.png"
                title="open music dictionary"
                width="100px"
            /></router-link>
          </li>
        </ul>
        <!--sheet music-->
        <img
          :src="projData.sheet_music_url"
          style="width: 480px; margin-top: 10px"
          title="music sheet"
        />
        <!--button-->
        <br />
        <br />
        <router-link
          class="mini_button"
          style="height: 40px; width: 100px; text-align: center"
          :to="{
            path: '/project_main',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName,
            },
          }"
          tag="button"
          >Back</router-link
        >
      </div>
    </body>
  </html>
</template>


<script>
import { firestore } from "@/firebase";
import { firestorage } from "@/firebase";
import Moveable from "vue-moveable";

var projInfo = firebase.firestore().collection("projects");

export default {
  components: {
    Moveable,
  },
  data() {
    return {
      projData: {
        sheet_music_url: "",
      },
      moveable: {
        draggable: true,
        throttleDrag: 0,
        clientX: 0,
        clientY: 0,
      },
      threads: [],
    };
  },
  created() {
    // get sheet music from db
    var projName = this.$route.query.projName;
    projInfo
      .doc(projName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let ui = doc.data();
          this.projData = ui;
          console.log(this.projData.sheet_music_url);
        } else {
          window.alert("hing");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving user info: ", error);
      });
    projInfo.doc(projName).collection("threads").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        var d = doc.data();
        this.threads.push({
          id: doc.id,
          clientX: d.clientX,
          clientY: d.clientY,
        })
        console.log(this.threads);
      })
    });

  },
  updated() {
    // set up pins
    var projName = this.$route.query.projName;

    projInfo.doc(projName).collection("threads").
      get().then((snapshot) => {
        snapshot.forEach((doc) => {
          let pin = doc.data();
          pin.id = doc.id;
          console.log(pin.id);
          console.log("initial positions: ", pin.clientX, pin.clientY);
          this.$refs[pin.id].style.left = pin.clientX + "px";
          this.$refs[pin.id].style.top = pin.clientY + "px";
        });
      });
  },
  methods: {
    handleDrag({ target, transform }) {
      target.style.transform = transform;
      console.log(transform);
    },
    handleDragEnd({ target, isDrag, clientX, clientY}) {
      var projName = this.$route.query.projName;
      console.log("onDragEnd", clientX, clientY);
      console.log("pin number", this.$attrs['ref']);
      projInfo
        .doc(projName)
        .collection("threads")
        .doc("2")
        .set({
          clientX:
            clientX - 10 - this.$refs["body"].getBoundingClientRect().left,
          clientY: clientY - 9,
        })
        .then(() => {
          console.log("Saving coordinates successful!");
        })
        .catch(function (error) {
          console.error("Error saving coordinates of pin: ", error);
        });
    },
  },
};
</script>