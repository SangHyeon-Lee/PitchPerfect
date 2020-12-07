<template>
  <body>
    <h2 style="color: white">🐟Image Editor🐟</h2>
    <tui-image-editor
      ref="tuiImageEditor"
      style="height: 1000px; width: 500px"
      :include-ui="useDefaultUI"
      :options="options"
      @mousedown="draw"
      @addText="onAddText"
      @objectMoved="onObjectMoved"
    >
      ></tui-image-editor
    >
    <!-- <div ref="tuiImageEditor" :include-ui="useDefaultUI" :options="options" style="width: 100%;height: 100%;"></div> -->
    <button class="backbutton" v-on:click="retreat">Back</button>
    <button
      class="button"
      style="background-color: #f2c94c"
      v-on:click="exportImage"
    >
      Save
    </button>
  </body>
</template>
<script>
import { ImageEditor } from "@toast-ui/vue-image-editor";
import sheetMusic from "../assets/images/music_sheet.jpg";
import { firestore } from "@/firebase";
var project_collection = firebase.firestore().collection("annotated");
var project_db = firebase.firestore().collection("projects");
var mySheetMusic = "";
export default {
  components: {
    "tui-image-editor": ImageEditor,
  },
  data() {
    return {
      useDefaultUI: true,
      options: {
        includeUI: {
          loadImage: {
            path: mySheetMusic,
            name: "sheetmusic",
          },
          initMenu: "draw",
          menu: ["draw", "shape", "icon", "text"],
          uiSize: {
            width: "700px",
            height: "650px",
          },
          menuBarPosition: "left",
        },
        // for tui-image-editor component's "options" prop
        usageStatistics: false,
        cssMaxWidth: 500,
      },
      projData: {
        sheet_music_url: "",
      },
    };
  },
  created() {
    // get sheet music from db
    var projName = this.$route.query.projName;
    console.log("fighting");
    project_db
      .doc(projName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let ui = doc.data();
          this.projData = ui;
          mySheetMusic = this.projData.sheet_music_url; //[this.projData.url.length - 1]
        } else {
          window.alert("hing");
        }
      })
      .catch(function (error) {
        console.log("Error retrieving user info: ", error);
      });
  },
  methods: {
    draw() {
      console.log("hihih");
    },
    onAddText(res) {
      /* eslint-disable no-console */
      console.group("addText");
      console.log("Client Position : ", res.clientPosition);
      console.log("Origin Position : ", res.originPosition);
      console.groupEnd();
      /* eslint-enable no-console */
    },
    onObjectMoved(res) {
      /* eslint-disable no-console */
      console.group("objectMoved");
      console.log("Left : ", res.left);
      console.log("Top : ", res.top);
      console.groupEnd();
      /* eslint-enable no-console */
    },
    exportImage() {
      var projectName = this.$route.query.projName;

      const save = this.$refs.tuiImageEditor.invoke("toDataURL");
      
      /* get timestamp */
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      const timestamp = dateTime;
      
      // memory hing sibal TT
      project_collection
        .doc(projectName)
        .update({
          // url: firebase.firestore.FieldValue.arrayUnion(save),
          timestamp: firebase.firestore.FieldValue.arrayUnion(timestamp),
        })
        .then(() => {
          window.alert("saved!");
        })
        .catch(function (error) {
          console.error("Error yee : ", error);
        });
      //projects db
      project_db
        .doc(projectName)
        .update({
          sheet_music_url: save,
        })
        .then(() => {
          window.alert("saved!");
        })
        .catch(function (error) {
          console.error("Error yee : ", error);
        });
      this.$router.go(-1);
    },
    retreat() {
      if (
        confirm(
          "Leaving the platform will not reflect your changes. Will you continue?"
        )
      ) {
        // Save it!
        this.$router.go(-1);
      }
    },
  },
};
</script>
<style scoped>
body {
  background-color: #1e1e1e;
  width: 700px;
  margin: auto;
  min-height: 100%;
  border-right: 1px solid #1e1e1e;
  border-bottom: 1px solid #1e1e1e;
  border-left: 1px solid #1e1e1e;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 300;
}
</style>