<template>
  <html>
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Music Term Dictionary</h2>
        <h4>Our dictionary is case-sensitive for now... :(</h4>
        <br />
        <div class="wrapper" style="color: black; text-align: left">
          <form @submit.prevent="find" style="width: 360px; padding: 0px">
            <input
              type="text"
              v-model="dic_info.search"
              placeholder="Search for music terms.."
              style="width: 250px"
            />
            <button type="submit" class="redbutton">Search</button>
          </form>
          <ul>
            <li v-for="entry in dic_info.found" :key="entry.term">
              <div v-if="entry.abb != null">
                {{ entry.term + "(" + entry.abb + ")" + ": " + entry.meaning }}
              </div>
              <div v-else>
                {{ entry.term + ": " + entry.meaning }}
              </div>
            </li>
          </ul>
        </div>
        <br /><br />
        <router-link
          class="button"
          style="height: 40px; width: 100px; text-align: center"
          :to="{
            path: '/sheetmusic',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName
            }
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
var dict = [];
export default {
  data() {
    return {
      dic_info: {
        search: "",
        found: []
      }
    };
  },
  methods: {
    find() {
      dict = [];
      var search = this.dic_info.search;
      var dict_search = firebase.firestore().collection("dictionary");
      dict_search
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(function(doc) {
            // console.log(doc.id, " => ", doc.data().term);
            var term = doc.data().term;
            var meaning = doc.data().meaning;
            var abb = doc.data().abb;

            if (
              term.includes(search) ||
              meaning.includes(search) ||
              (abb != null && abb.includes(search))
            ) {
              dict.push(doc.data());
            }
          });
          this.dic_info.found = dict;
          if (dict.length == 0){
            window.alert("This term does not exist in dictionary :(")
          }
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>
