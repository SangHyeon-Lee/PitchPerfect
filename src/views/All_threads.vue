<template>
  <html lang="en">
    <body>
      <div class="content_project" padding-top="5px" align="center">
        <h2>Threads</h2>
        <br />
        <div
          class="wrapper"
          style="display: inline-block; color: black; text-align: left; text-decoration: black"
        >
        </div>
        <br /><br /><br /><br />

        <button
          style="height:40px;width:100px;text-align: center"
          class="mini_button"
          v-on:click="retreat"
        >
          Back
        </button>
      </div>
    </body>
  </html>
</template>
<script>
export default {
  methods: {
  retreat() {
        this.$router.go(-1);
    },
  }
}
</script>