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
        <h2>Report</h2>
        <br /><br />
        <form action="/action_page.php">
          <label
            for="users"
            style="font-size: 120%; text-align: left; line-height: 2"
            >Who do you want to report?</label
          >
          <select name="users" id="users">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <br />
          <label
            for="review"
            style="font-size: 120%; text-align: left; line-height: 2"
            >Please provide specific reasons.</label
          >
          <textarea
            id="review"
            name="review"
            rows="3"
            cols="50"
            style="text-align: left"
          >
          </textarea>
          <br /><br />
          <button
            type="submit"
            value="Submit"
            style="background-color:gold;height:60px;width:150px"
            class="button"
            onclick="location.href = '/thankyou.html'"
          >
            Submit
          </button>
        </form>
        <br /><br /><br /><br />
        <button
          style="height:40px;width:100px;text-align: center"
          class="mini_button"
          onclick="location.href = '/endcollaboration.html'"
        >
          Back
        </button>
      </div>
    </body>
  </html>
</template>
