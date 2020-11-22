<template>
  <html lang="en">
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
      <div class="content_project" padding-top="5px" align="center">
        <h2>Happy Birthday</h2>
        <router-link
          class="button"
          style="height:70px;width:400px"
          to="/sheetmusic"
          tag="button"
          >Sheet Music</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/sheetmusic.html'">Sheet Music</button> <br> -->
        <router-link
          class="button"
          style="height:70px;width:400px"
          to="/announcement"
          tag="button"
          >Announcements</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/announcements.html'">Announcements</button> <br> -->
        <router-link
          class="button"
          style="height:70px;width:195px"
          to="/waitlist"
          tag="button"
          >Wait List</router-link
        >
        <!-- <button style="height:70px;width:195px" class="button" onclick = "location.href = '/waitlist.html'">Wait List</button> -->
        <router-link
          class="button"
          style="height:70px;width:195px"
          to="/invite"
          tag="button"
          >Invite</router-link
        >
        <!-- <button style="height:70px;width:195px" class="button" onclick = "location.href = '/invite.html'">Invite</button> <br> -->
        <div class="box">
          <h3 align="left" margin>Members</h3>
          <div class="members" align="left" id="members"></div>
        </div>
        <router-link
          class="button"
          style="height:70px;width:400px"
          to="/invite"
          tag="endcollaboration"
          >End Collaboration</router-link
        >
        <!-- <button style="height:70px;width:400px" class="button" onclick = "location.href = '/endcollaboration.html'">End Collaboration</button> -->
      </div>

      <nav id="tabbar">
        <ul id="tab_wrap">
          <li>
            <a href="/library.html"
              ><img src="images/home.png" width="100px"
            /></a>
          </li>
          <li>
            <a href="/search.html"
              ><img src="images/search.png" width="100px"
            /></a>
          </li>
          <li>
            <a href="/add.html"><img src="images/add.png" width="100px"/></a>
          </li>
          <li>
            <a href="/profile.html"
              ><img src="images/profile.png" width="100px"
            /></a>
          </li>
        </ul>
      </nav>
    </body>
  </html>
</template>

<script>
export default {};
</script>
>
