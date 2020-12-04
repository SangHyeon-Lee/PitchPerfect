<template>
  <html>
    <body>
      <div class="content" align="center">
        <h1>Choose Your Instrument!</h1>

        <dl>
          <dt v-for="index in inst_name.length" :key="index">
            <!-- <div> -->
            {{
              inst_name[index - 1] +
              " " +
              left_num[index - 1] +
              "/" +
              max_num[index - 1]
            }}
            <button
              class="button"
              @click="send(index - 1)"
              
              
              >Join
            </button>
            <!-- </div> -->
          </dt>
        </dl>

        <button class="backbutton" v-on:click="retreat">Back</button>
      </div>
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
        left_inst: [],
        max_inst: [],
        ongoing: false,
        announcements: "",
      },
      inst_name: [], // ex) [Violin, Viola, Cello]
      max_num: [], // ex) [4, 4, 2]
      left_num: [], // ex) [3, 3, 1] : current number of members
      parts: []
    };
  },
  created() {
    var projectName = this.$route.query.projName;
    var inst_name = this.inst_name;
    var max_num = this.max_num;
    var left_num = this.left_num;
    var parts = this.parts;
    project_collection
      .doc(projectName)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let pi = doc.data();
          this.projInfo = pi;
          var left_inst = this.projInfo.left_inst;
          var max_inst = this.projInfo.max_inst;
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

        } else {
          window.alert("ERROR: No such project exist!");
        }
        console.log(parts);
      })
      .catch(function (error) {
        console.log("Error retrieving project info: ", error);
      });
  },
  methods: {
    send(index) {
      if (this.max_num[index] == this.left_num[index]) {
        window.alert("Sorry, you cannot choose this instrument, it is full :(");
      } else {
        var projectName = this.$route.query.projName;
        var newarray = this.projInfo.left_inst;
        newarray.push(this.inst_name[index]);
        project_collection
          .doc(projectName)
          .update({
            left_inst: newarray,
            parts: this.parts
          })
          .catch(function (error) {
            console.error("Error yee : ", error);
          });
        this.$router.push({
          path: "/project_main",
          query: {
            userId: this.$route.query.userId,
            projName: this.$route.query.projName,
          },
          params: {
            userId: this.$route.query.userId,
            projName: this.$route.query.projName,
          },
        });
      }
    },
    retreat() {
      this.$router.go(-1);
    },

  },

};
</script>
