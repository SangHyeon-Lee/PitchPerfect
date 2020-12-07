<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Please rate us!</h2>

        <div class="demo">
          <div class="ratingControl">
            <input type="radio" id="rating-5" name="rating" value="5" />
            <label
              class="ratingControl-stars ratingControl-stars--5"
              for="rating-5"
              >5</label
            >
            <input type="radio" id="rating-45" name="rating" value="4.5" />
            <label
              class="ratingControl-stars ratingControl-stars--45 ratingControl-stars--half"
              for="rating-45"
              >45</label
            >
            <input type="radio" id="rating-4" name="rating" value="4" />
            <label
              class="ratingControl-stars ratingControl-stars--4"
              for="rating-4"
              >4</label
            >
            <input type="radio" id="rating-35" name="rating" value="3.5" />
            <label
              class="ratingControl-stars ratingControl-stars--35 ratingControl-stars--half"
              for="rating-35"
              >35</label
            >
            <input type="radio" id="rating-3" name="rating" value="3" />
            <label
              class="ratingControl-stars ratingControl-stars--3"
              for="rating-3"
              >3</label
            >
            <input type="radio" id="rating-25" name="rating" value="2.5" />
            <label
              class="ratingControl-stars ratingControl-stars--25 ratingControl-stars--half"
              for="rating-25"
              >25</label
            >
            <input type="radio" id="rating-2" name="rating" value="2" />
            <label
              class="ratingControl-stars ratingControl-stars--2"
              for="rating-2"
              >2</label
            >
            <input type="radio" id="rating-15" name="rating" value="1.5" />
            <label
              class="ratingControl-stars ratingControl-stars--15 ratingControl-stars--half"
              for="rating-15"
              >15</label
            >
            <input type="radio" id="rating-1" name="rating" value="1" />
            <label
              class="ratingControl-stars ratingControl-stars--1"
              for="rating-1"
              >1</label
            >
            <input type="radio" id="rating-05" name="rating" value="0.5" />
            <label
              class="ratingControl-stars ratingControl-stars--05 ratingControl-stars--half"
              for="rating-05"
              >05</label
            >
          </div>
        </div>
          <a
            class="music_submit_button"
            style="width: 380px"
            href="https://forms.gle/ze7FtEjNaYY7zRmj9"
          >
            Complete the survey please🥰💗
          </a>
        <br> <br> <br> <br>
        <router-link
          style="height: 60px; width: 150px"
          class="button"
          :to="{
            path: '/thankyou',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName
            }
          }"
          tag="button"
          >Home
        </router-link>

        <br /><br />
        <router-link
          style="height: 40px; width: 100px; text-align: center"
          class="mini_button"
          :to="{
            path: '/endcollaboration',
            query: {
              userId: $route.query.userId,
              projName: $route.query.projName
            }
          }"
          tag="button"
          >Back
        </router-link>
      </div>
    </body>
  </html>
</template>
