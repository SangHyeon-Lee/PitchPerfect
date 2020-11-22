<template>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>PitchPerfect</title>
      <!-- font -->
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Doppio+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap"
        rel="stylesheet"
      />
      <!-- font -->
      <!--code for prettifying visual on phone-->
      <meta
        content="user-scalable=no, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        name="viewport"
      />
    </head>
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Music Term Dictionary</h2>
        <br />
        <div
          class="wrapper"
          style="
            width: 365px;
            height: 60px;
            display: inline-block;
            color: black;
            text-align: left;
          "
        >
          <form @submit.prevent="find">
            <input
              type="text"
              v-model="search"
              placeholder="Search for music terms.."
              style="width: 250px"
            />
            <button type="submit" class="redbutton" @click.stop="find">
              Search
            </button>
          </form>
          <div
            class="wrapper"
            style="
            width: 365px;
            display: inline-block;
            color: black;
            text-align: left;
          "
          >
            <ul>
              <li v-for="entry in found" :key="entry.term">
                {{ entry.term + ": " + entry.meaning }}
              </li>
            </ul>
          </div>
        </div>
        <br /><br /><br /><br />
        <router-link
          style="height: 40px; width: 100px; text-align: center"
          class="mini_button"
          to="/project_main"
          tag="button"
        >
          Back
        </router-link>
      </div>
    </body>
  </html>
</template>

<script>
import firebase from "firebase";

// var dict = firebase.firestore().collection("dictionary");
// var project = firebase.firestore().collection("projects").doc("fyeesh");

export default {
  // name: "Music Dictionary",
  data() {
    return {
      search: "",
      // dictionary: [],
      found: []
    };
  },
  // created() {
  //   dict.get().then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       let project_dict = doc.data();
  //       this.dictionary.push(project_dict);
  //     });
  //   });
  // },
  methods: {
    find() {
      var dict_search = firebase
        .firestore()
        .collection("dictionary")
        .doc(this.search);
      // var search_term = this.search;
      dict_search
        .get()
        .then(doc => {
          if (doc.exists) {
            // project.data()["terms"].push(doc.data());
            // display.push(doc.data())
            this.found.push(doc.data());
          } else {
            window.alert("given term does not exist in our dictionary :(");
          }
        })
        .catch(function(error) {
          console.log("Error getting dictionary entry:", error);
        });
    }
  }
};
</script>
