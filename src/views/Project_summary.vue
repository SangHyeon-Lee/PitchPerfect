<template>
  <html>
    <body>
      <div class="content" align="center">
        <img src="images/fyeesh.png" width="100" />
        <h1 style="color: black; margin: 0px">FYEESH</h1>
        <!-- <a class="button" style="background-color: #f2c94c; margin: 20px"
          >join</a
        > -->
        <router-link
          class="button"
          style="background-color: #f2c94c; margin: 20px"
          to="/project_main"
          tag="button"
          >join</router-link
        >
        <div class="project_container">
          <h2 style="margin-bottom: 0px; margin-top: 0px">Happy Birthday</h2>
          <p style="color: black; margin-top: 10px; margin-bottom: 10px">
            violin 2/3 cello 1/1 vocal 0/1
          </p>
          <a class="tag">beginner</a>
        </div>
        <h3 style="margin: 20px">
          Hello! We're team FYEESH. We're currently looking for one violinist
          and one vocal. We're all beginners, so we're accepting anyone who's
          eager to learn!
        </h3>
        <div class="members_container">
          <h2>Members</h2>
          <div class="member">
            <a name="member1" href="profile.html"
              ><img src="images/zombie.png" width="70px"/></a
            ><br />
            <label for="member1" style="color: black">Amumu</label>
          </div>
          <div class="member">
            <a name="member2" href="profile.html"
              ><img src="images/fish.png" width="70px"/></a
            ><br />
            <label for="member2" style="color: black">Tuna</label>
          </div>
          <div class="member">
            <a name="member3" href="profile.html"
              ><img src="images/bull.png" width="70px"/></a
            ><br />
            <label for="member3" style="color: black">Ornn</label>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
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
export default {};
</script>
