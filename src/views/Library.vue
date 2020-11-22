<template>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>PitchPerfect</title>
      <link rel="stylesheet" href="style.css" />
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
      <div class="content" align="center">
        <h1 id="user">{{ $route.query.userId }}'s Library</h1>
        <h2>Projects in progress</h2>

        <!-- <ul class="projects" id="prog_proj">
			<li v-for="project in projects" onclick="location.href = '/project_main.html'">
				<h2 class="project_text">{{ project.team }}</h2>
				<h3 class="project_text">{{ project.song }}</h2>
					<p class="project_text">{{ project.parts }}</p>
					<a class="tag">{{ project.level }}</a>
					<a class="button" style="background-color:#F2C94C"
						onclick="location.href = '/project_summary.html'">view</a>
			</li>
			<span v-if="projects.length === 0">
				&lt;empty&gt;
			</span>
		</ul> -->
        <router-link
          class="backbutton"
          style="width: 200px; padding: 10px"
          :to="{
            path: '/projects_page',
            query: { userId: $route.query.userId }
          }"
          tag="button"
          >Find projects</router-link
        >
        <h2>Previous Projects</h2>
        <!-- <ul>
          <li v-for="entry in userprojs" :key="userprojs.team">
            {{ entry.team + ": " + entry.song }}
          </li>
        </ul> -->
        <!-- <ul class="projects" id="prev_proj">
			<li v-for="project in projects" onclick="location.href = '/project_main.html'">
				<h2 class="project_text">{{ project.team }}</h2>
				<h3 class="project_text">{{ project.song }}</h2>
					<p class="project_text">{{ project.parts }}</p>
					<a class="tag">{{ project.level }}</a>
					<a class="button" style="background-color:#F2C94C"
						onclick="location.href = '/project_summary.html'">view</a>
			</li>
			<span v-if="projects.length === 0">
				&lt;empty&gt;
			</span>
		</ul> -->
      </div>

      <br /><br /><br /><br /><br />

      <nav id="tabbar">
        <ul id="tab_wrap">
          <li>
            <router-link
              :to="{ path: '/library', query: { userId: $route.query.userId } }"
              ><img src="images/home.png" width="100px"
            /></router-link>
          </li>
          <li>
            <router-link
              :to="{
                path: '/projects_page',
                query: { userId: $route.query.userId }
              }"
              ><img src="images/search.png" width="100px"
            /></router-link>
          </li>
          <li><img src="images/add.png" width="100px" /></li>
          <li>
            <router-link
              :to="{
                path: '/profile',
                query: {
                  userId: $route.query.userId,
                  profileId: $route.query.userId
                }
              }"
              ><img src="images/profile.png" width="100px"
            /></router-link>
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>
<script>
// var userprojsid_query = firebase.firestore().collection("userinfo");
// var projects_table = firebase.firestore().collection("projects");

// export default {
// name: "userprojectdata",
// data() {
//   return {
//     userprojs: [],
//   };
// },
// created() {
//   userprojsid_query.get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let projId = doc;
//       var projInfo_query = projects_table.where("team", "==", projId);
//       projInfo_query.get().then((info) => {
//         let projInfo = doc.data();
//         info.level;
//       });
//     });
//   });

//   userinfo_table.get().then((snapshot) => {
//     snapshot.for;
//   });

//   projects_table.get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let proj = doc.data();
//       proj.id = doc.id;

//       this.projs.push(proj);
//     });
//   });
// },
// };
</script>
