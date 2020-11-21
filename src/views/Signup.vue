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
      <!-- pop up -->
    </head>

    <body>
      <div class="content" align="center">
        <h1>Sign Up</h1>
        <form class="modal-content" action="/action_page.php">
          <input
            type="text"
            style="width:230px"
            placeholder="Nickname"
            name="nickname"
            id="nickname"
            required
          />
          <a class="redbutton" onclick="name_check()">verify</a>
          <input type="number" placeholder="Age" name="age" id="age" required />
          <textarea id="bio" name="bio" rows="3">
Bio (introduce yourself)</textarea
          >
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="password"
            required
          />
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="password_check"
            required
          />
          <br /><br />

          <label for="img">Select profile image:</label><br />
          <input type="file" id="img" name="img" accept="image/*" /><br />
          <input type="submit" />
          <br /><br />
          <h3>Instrument 1</h3>
          <input
            type="text"
            id="instrument"
            placeholder="What instrument do you play?"
            required
          />
          <p>Proficiency of Instrument 1</p>
          <input type="radio" id="level1" name="proficiency" value="level1" />
          <label for="level1">Level 1</label>
          <input type="radio" id="level2" name="proficiency" value="level2" />
          <label for="level2">Level 2</label>
          <input type="radio" id="level3" name="proficiency" value="level3" />
          <label for="level3">Level 3</label>

          <div class="popup" onclick="popup_description()">
            <br /><u>How do I decide my proficiency level?</u>
            <span class="popuptext" id="description">
              Mola mola! Mola mola! Mola mola! Mola mola! Mola mola!Mola mola!
              Mola mola!Mola mola!Mola mola! Mola mola!Mola mola! Mola
              mola!Help!Help!Help! Ewook Lolchess go? go
            </span>
          </div>

          <br />
          <button class="redbutton" style="width:300px">
            Click to add instruments
          </button>

          <br /><br />

          <h3>Tags that describe your musical preferences</h3>
          <input
            type="text"
            style="width:230px"
            placeholder="ex. prefers easy violin pieces"
            name="tag1"
            id="tag1"
            required
          />
          <input
            type="text"
            style="width:230px"
            placeholder="ex. prefers easy violin pieces"
            name="tag2"
            id="tag2"
            required
          />
          <input
            type="text"
            style="width:230px"
            placeholder="ex. prefers easy violin pieces"
            name="tag3"
            id="tag3"
            required
          />
          <button class="redbutton" style="width:300px">
            Click to add more tags
          </button>
          <br /><br /><br />
          <button
            class="button"
            onclick="check_password()"
            style="color:white; background-color:#F2C94C"
          >
            Submit
          </button>
        </form>

        <button class="backbutton" onclick="location.href = '/main.html'">
          Back
        </button>
      </div>
    </body>
  </html>
</template>

<script>

</script>
