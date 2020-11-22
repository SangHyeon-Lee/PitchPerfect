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
        <h1>Congratulations!</h1>
        <h3>Who was the best collaborator?</h3>
        <ul style="white-space: nowrap">
          <li style="list-style: none; display: inline; align-items: center">
            <input
              style="height:100px;width:100px"
              type="image"
              src="images/add.png"
            />
            <input
              style="height:100px;width:100px"
              type="image"
              src="images/add.png"
            />
            <input
              style="height:100px;width:100px"
              type="image"
              src="images/add.png"
            />
          </li>
        </ul>
        <p>
          Had trouble with teammates? <br />
          <a href="/report.html">report</a> a user
        </p>
        <br />
        <br />
        <button
          style="height:60px;width:150px"
          class="button"
          onclick="location.href = '/rating.html'"
        >
          Continue
        </button>
        <br /><br /><br /><br />
        <router-link
          class="button"
          style="height:40px;width:100px;text-align: center"
          to="/project_main"
          tag="button"
          >Back</router-link
        >
        <!-- <button style="height:40px;width:100px;text-align: center" class="mini_button" onclick = "location.href = '/project_main.html'">Back</button> -->
      </div>
    </body>
  </html>
</template>
