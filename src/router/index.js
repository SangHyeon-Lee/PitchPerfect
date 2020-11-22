import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue")
  },
  {
    path: "/library",
    name: "library",
    component: () =>
      import(/* webpackChunkName: "library" */ "../views/Library.vue")
  },
  {
    path: "/dictionary",
    name: "dictionary",
    component: () =>
      import(/* webpackChunkName: "dictionary" */ "../views/Dictionary.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/project_main",
    name: "project_main",
    component: () =>
      import(/* webpackChunkName: "project_main" */ "../views/Project_main.vue")
  },
  {
    path: "/project_summary",
    name: "project_summary",
    component: () =>
      import(
        /* webpackChunkName: "project_summary" */ "../views/Project_summary.vue"
      )
  },
  {
    path: "/projects_page",
    name: "projects_page",
    component: () =>
      import(
        /* webpackChunkName: "project_page" */ "../views/Projects_page.vue"
      )
  },
  {
    path: "/invite",
    name: "invite",
    component: () =>
      import(/* webpackChunkName: "project_page" */ "../views/Invite.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue")
  },
  {
    path: "/rating",
    name: "rating",
    component: () =>
      import(/* webpackChunkName: "rating" */ "../views/Rating.vue")
  },
  {
    path: "/all_threads",
    name: "all_threads",
    component: () =>
      import(/* webpackChunkName: "announcement" */ "../views/All_threads.vue")
  },
  {
    path: "/endcollaboration",
    name: "endcollaboration",
    component: () =>
      import(
        /* webpackChunkName: "endcollaboration" */ "../views/Endcollaboration.vue"
      )
  },
  {
    path: "/report",
    name: "report",
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/Report.vue")
  },
  {
    path: "/sheetmusic",
    name: "sheetmusic",
    component: () =>
      import(/* webpackChunkName: "sheetmusic" */ "../views/Sheetmusic.vue")
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: () =>
      import(/* webpackChunkName: "thankyou" */ "../views/Thankyou.vue")
  },
  {
    path: "/thread",
    name: "thread",
    component: () =>
      import(/* webpackChunkName: "thread" */ "../views/Thread.vue")
  },
  {
    path: "/view_logs",
    name: "view_logs",
    component: () =>
      import(/* webpackChunkName: "view_logs" */ "../views/View_logs.vue")
  },
  {
    path: "/annotate",
    name: "annotate",
    component: () =>
      import(/* webpackChunkName: "annotate" */ "../views/Annotate.vue")
  },
  {
    path: "/waitlist",
    name: "waitlist",
    component: () =>
      import(/* webpackChunkName: "waitlist" */ "../views/Waitlist.vue")
  },
  {
    path: "/teamFormation",
    name: "teamFormation",
    component: () =>
      import(
        /* webpackChunkName: "teamFormation" */ "../views/teamFormation.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export { store, router };
