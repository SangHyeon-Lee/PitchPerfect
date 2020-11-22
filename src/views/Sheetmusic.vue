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
      <div id="pin">
        <div id="pinicon"><img src="images/pin.png" style="width:30px" /></div>
        <p
          style="color:black; margin-top:0px"
          onclick="location.href = '/thread.html'"
        >
          view thread
        </p>
      </div>
      <div class="content_project" align="center" style="padding-top: 0">
        <!--menu bar-->
        <div class="menubar">
          <li>
            <a href="/annotate.html" style="text-decoration: none"
              ><img
                src="images/annotate.png"
                title="add annotations"
                width="100px"
            /></a>

            <a
              href="/sheetmusic_announcements.html"
              style="text-decoration: none"
              ><img
                src="images/announcement.png"
                title="view announcements"
                width="100px"
            /></a>

            <a href="/dictionary.html" style="text-decoration: none"
              ><img
                src="images/dictionary.png"
                title="open music dictionary"
                width="100px"
            /></a>

            <a href="/view_logs.html" style="text-decoration: none"
              ><img
                src="images/home.png"
                title="view past annotation logs"
                width="100px"
            /></a>
          </li>
        </div>
        <!--sheet music-->
        <img
          src="images/music_sheet.jpg"
          style="width:480px;margin-top:10px"
          title="music sheet"
        />
        <!--button-->
        <br />
        <br />
        <button
          style="height:40px;width:100px;text-align: center"
          class="mini_button"
          onclick="location.href = '/project_main.html'"
        >
          Back
        </button>
      </div>
    </body>
  </html>
</template>

<script>
// //Make the PIN element draggagle:
// dragElement(document.getElementById("pin"));

// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt.id + "header")) {
//         /* if present, the header is where you move the DIV from:*/
//         document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//         /* otherwise, move the DIV from anywhere inside the DIV:*/
//         elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }

//     function closeDragElement() {
//         /* stop moving when mouse button is released:*/
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }
</script>
