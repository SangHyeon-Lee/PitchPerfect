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
        <img src="images/bull.png" width="100px" />
        <h1 id="user" style="color:black;">{{ username }}</h1>
        <a class="roundtag" style="background-color:#2D9CD8;"
          >{{ instrument }}<img src="images/bbiyak.png" width="20px"/></a
        ><br />
        <a class="roundtag" style="background-color:#27AE60;"
          >Easy violin pieces</a
        >
        <a class="roundtag" style="background-color:#27AE60;"
          >Song for children</a
        >
        <h3>{{ bio }}</h3>
        <h2 style="text-align: left; margin-left: 40px">Previous Projects</h2>

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
