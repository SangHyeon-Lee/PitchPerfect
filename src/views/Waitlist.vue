<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Wait List</h2>
        <br />
        <!--            <div class="projects" id="prev_proj">-->
        <!--			<ul>-->
        <!--				<li v-for="project in projects">-->
        <!--					{{ project }}-->
        <!--				</li>-->
        <!--				<span v-if="projects.length === 0">-->
        <!--					&lt;empty&gt;-->
        <!--				</span>-->
        <!--			</ul>-->
        <!--		    </div>-->
        <div class="wrapper">
          <div class="container">
            <img
              src="../assets/images/home.png"
              class="iconDetails"
              title="double bass"
            />
            <h2>Yewon Kim</h2>
            <a href="/?"><img src="../assets/images/home.png" class="checkbox"/></a>
            <a href="/?"><img src="../assets/images/home.png" class="checkbox"/></a>
          </div>
        </div>
        <br /><br /><br /><br />
          <router-link
          class="mini_button"
          style="height:40px;width:100px;text-align: center"
          :to="{ path: '/project_main', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >Back</router-link
        >
      </div>
    </body>
  </html>
</template>
