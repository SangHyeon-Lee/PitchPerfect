<template>
  <html lang="en">
    <body ref="body">
      <div ref="0" class="pinicon">
        <Moveable
          ref="0"
          v-bind="threads[0]"
          @drag="handleDrag"
          @dragEnd="handleDragEnd"
        >
          <div id="0"></div>
          <img src="../assets/images/pin.png" style="width: 30px" />
          <p
            style="color: black; margin-top: 0px"
            @click.stop="view(threads[0].pinid)"
          >
            view #0
          </p>
        </Moveable>
      </div>
      <div ref="1" class="pinicon">
        <Moveable
          ref="1"
          v-bind="threads[1]"
          @drag="handleDrag"
          @dragEnd="handleDragEnd"
        >
          <div id="1"></div>
          <img src="../assets/images/pin.png" style="width: 30px" />
          <p
            style="color: black; margin-top: 0px"
            @click.stop="view(threads[1].pinid)"
          >
            view #1
          </p>
        </Moveable>
      </div>
      <div ref="2" class="pinicon">
        <Moveable
          ref="2"
          v-bind="threads[2]"
          @drag="handleDrag"
          @dragEnd="handleDragEnd"
        >
          <div id="2"></div>
          <img src="../assets/images/pin.png" style="width: 30px" />
          <p
            style="color: black; margin-top: 0px"
            @click.stop="view(threads[2].pinid)"
          >
            view #2
          </p>
        </Moveable>
      </div>
      <div ref="3" class="pinicon">
        <Moveable
          ref="3"
          v-bind="threads[3]"
          @drag="handleDrag"
          @dragEnd="handleDragEnd"
        >
          <div id="3"></div>
          <img src="../assets/images/pin.png" style="width: 30px" />
          <p
            style="color: black; margin-top: 0px"
            @click.stop="view(threads[3].pinid)"
          >
            view #3
          </p>
        </Moveable>
      </div>
      <div ref="4" class="pinicon">
        <Moveable
          ref="4"
          v-bind="threads[4]"
          @drag="handleDrag"
          @dragEnd="handleDragEnd"
        >
          <div id="4"></div>
          <img src="../assets/images/pin.png" style="width: 30px" />
          <p
            style="color: black; margin-top: 0px"
            @click.stop="view(threads[4].pinid)"
          >
            view #4
          </p>
        </Moveable>
      </div>
      <div class="content_project" align="center" style="padding-top: 5px">
        <p>
          <b>📌 Movable Pins!</b><br />
          Move your pin around by dragging on the pin image.<br />
          View the connected comment thread by clicking the "view" text.
        </p>
        <!--sheet music-->
        <img
          :src="projData.sheet_music_url"
          style="width: 480px; margin-top: 10px; margin-bottom: 20px"
          title="music sheet"
        />
        <!--menu bar-->
        <ul class="menubar" style="margin-bottom: 20px">
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
                src="../assets/images/pin_big.png"
                title="view all threads"
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
        <!--button-->
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
var threadInfo = firebase.firestore().collection("threads");

export default {
  components: {
    Moveable,
  },
  data() {
    return {
      projData: {
        sheet_music_url: "",
        threads: [],
      },
      // moveable: {
      //   id: "",
      //   draggable: true,
      //   throttleDrag: 0,
      //   clientX: 0,
      //   clientY: 0,
      // },
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
          ui.threads.forEach((threadID) => {
            // console.log("threadID", threadID);
            threadInfo
              .doc(threadID)
              .get()
              .then((doc) => {
                var d = doc.data();
                // console.log("pinid", d.pinid);
                this.threads.push({
                  pinid: d.pinid,
                  draggable: true,
                  throttleDrag: 0,
                  clientX: d.clientX,
                  clientY: d.clientY,
                });
                console.log("d.pinid: ", d);
                this.$refs[d.pinid].style.left = d.clientX + "px";
                this.$refs[d.pinid].style.top = d.clientY + "px";
              })
              .catch(function (error) {
                console.log("Error retrieving pin info: ", error);
              });
          });
        } else {
          window.alert("hing");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving user info: ", error);
      });

    // projInfo
    //   .doc(projName)
    //   .collection("threads")
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       var d = doc.data();
    //       this.threads.push({
    //         id: doc.id,
    //         draggable: true,
    //         throttleDrag: 0,
    //         clientX: d.clientX,
    //         clientY: d.clientY
    //       });
    //       console.log(this.threads);
    //     });
    //   });
  },
  // updated() {
  //   this.threads.forEach((pin) => {
  //     threadInfo
  //       .doc(this.$route.query.projName + pin.pinid)
  //       .get()
  //       .then((doc) => {
  //         let pin = doc.data();
  //         console.log(pin.pinid);
  //         console.log("initial positions: ", pin.clientX, pin.clientY);
  //         this.$refs[pin.pinid].style.left = pin.clientX + "px";
  //         this.$refs[pin.pinid].style.top = pin.clientY + "px";
  //       });
  //   });
  // var projName = this.$route.query.projName;
  // projInfo
  //   .doc(projName)
  //   .collection("threads")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       let pin = doc.data();
  //       pin.id = doc.id;
  //       console.log(pin.id);
  //       console.log("initial positions: ", pin.clientX, pin.clientY);
  //       this.$refs[pin.id].style.left = pin.clientX + "px";
  //       this.$refs[pin.id].style.top = pin.clientY + "px";
  //     });
  //   });
  // },
  methods: {
    handleDrag({ target, transform }) {
      target.style.transform = transform;
      // console.log(transform);
    },
    handleDragEnd({ target, isDrag, clientX, clientY }) {
      var projName = this.$route.query.projName;
      var pinID =
        this.$route.query.projName + target.childNodes[0].getAttribute("id");
      console.log("id of pin moved: ", pinID);
      threadInfo
        .doc(pinID)
        .update({
          // add minor adjustments for difference between clientX,clientY(moveable) and left,right(css)
          // subtract left value of body for relative positioning
          clientX: clientX - this.$refs["body"].getBoundingClientRect().left,
          clientY: clientY - this.$refs["body"].getBoundingClientRect().top,
        })
        .then(() => {
          console.log("Saving coordinates successful!");
        })
        .catch(function (error) {
          console.error("Error saving coordinates of pin: ", error);
        });
      console.log("clientX, clientY: ", clientX, clientY);
    },
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
  },
};
</script>
