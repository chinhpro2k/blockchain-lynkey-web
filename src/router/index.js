import Vue from "vue";
import VueRouter from "vue-router";
import IntroduceLynkey from "../components/IntroduceLynkey.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: IntroduceLynkey,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
