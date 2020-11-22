<template>
  <html>
    <body>
      <div id="app">
        <div class="content" align="center" style="min-height:700px">
          <br /><br /><br /><br /><br />
          <img src="../assets/images/logo.png" alt="Logo" width="350" />
          <h1>Welcome !</h1>
          <br /><br /><br /><br /><br /><br />
          <!-- <a class="largebutton" href="/signin.html">Sign in</a> -->
          <router-link class="largebutton" to="/signin" tag="button"
            >Sign in</router-link
          >
          <p>
            If you don't have an account,
            <router-link to="/signup">Sign up</router-link>
          </p>
          <br /><br /><br /><br /><br />
        </div>
      </div>
    </body>
  </html>
</template>
