<template>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>PitchPerfect</title>
      <base href="/" />
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
      <div id="app">
        <div class="content" align="center">
          <br /><br /><br /><br /><br />
          <img src="images/logo.png" alt="Logo" width="350" />
          <h1>Welcome !</h1>
          <br /><br /><br /><br /><br /><br />
          <!-- <a class="largebutton" href="/signin.html">Sign in</a> -->
          <router-link class="largebutton" to="/signin" tag="button">Sign in</router-link>
          <p>
            <router-link to="/signup">Sign up</router-link>
          </p>
          <br /><br /><br /><br /><br />
        </div>
      </div>
    </body>
  </html>
</template>





