<template>
  <div id="app">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>PitchPerfect</title>
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
      <tui-image-editor ref="tuiImageEditor"
                      :include-ui="useDefaultUI"
                      :options="options"
      >
      </tui-image-editor>
      <!--code for prettifying visual on phone-->
    </head>
    <router-view />
  </div>
</template>
<script>
import {ImageEditor} from '@toast-ui/vue-image-editor';

export default {
    components: {
        'tui-image-editor': ImageEditor
    },
    data() {
        return {
            useDefaultUI: true,
            options: {
                includeUI: {
                    loadImage: {
                        path: 'sampleImage.png',
                        name: 'SampleImage'
                    },
                    initMenu: 'filter'
                },
                cssMaxWidth: 700,
                cssMaxHeight: 500
            }
        };
    }
    // methods: {
    //     // onAddText(pos) {
    //     //     ...
    //     // },
    //     // onObjectMoved(props) {
    //     //     ...
    //     // }
    // }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.imageEditorApp {
    width: 1000px;
    height: 800px;
}
</style>
