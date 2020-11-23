# pitchperfect

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## General Guidelines
### Main JavaScript File:
src/main.js 
### Main Vuejs File: 
src/App.vue
### Routing: 
src/router/index.js 
### Location of Folder of Images Used: 
src/assets/images
### Firebase Configuration JavaScript File: 
src/firebase.js 
### Libraries used:
ToastUI Image Editor (https://ui.toast.com/tui-image-editor) was used for annotatable sheet music.  
Vue Moveable (https://github.com/probil/vue-moveable) was used for moveable pins.
### Project Description
Our prototype is published by using github pages. Under src directory, main.js loads App.vue, and App.vue renders our main page, which is Main.vue in views directory. All of our pages are in views directory, and index.js in router directory contains all of the routing information and paths for pages. For retrieving information from our database in Firebase, firebase.js is used as it contains the configuration information of our Cloud Firestore. <br />
Note that refreshing our page will yield 404 error. Please use only the buttons on our web pages to navigate to prevent this error.
