<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Invite</h2>
        <br />
        <div class="wrapper" style="display: inline-block">
          <p
            style="line-height: 0.1;text-align: left;font-size:120%;color: black;font-weight: bold;margin-left: 15px"
          >
            Copy this link:
          </p>
          <p
            style="line-height: 0.1;float:left;color: lightseagreen;margin-left: 15px;display: inline"
          >
            <u>pitchperfect.invite.fyeesh</u>
          </p>
          <button
            style="height:25px;width:70px"
            class="copy_button"
            onclick="copy"
          >
            copy
          </button>
        </div>
        <br /><br /><br /><br />
          <router-link
          class="mini_button"
          style="height:40px;width:100px;text-align: center"
          :to="{ path: '/project_main', query: { userId: $route.query.userId, projName: $route.query.projName } }"
          tag="button"
          >Back</router-link
        >
        <!-- <button style="height:40px;width:100px;text-align: center" class="mini_button" onclick = "location.href = '/project_main.html'">Back</button> -->
      </div>
    </body>
  </html>
</template>
