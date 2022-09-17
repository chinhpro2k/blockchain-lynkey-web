import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/style/index.scss";
// import web from "./components/web.js";
import i18n from "./i18n";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import VuePrism from "vue-prism";
import VueParticles from "./vue-particles";
Vue.use(VueParticles, VuePrism);

import * as filters from "./filter";
import VueLazyload from "vue-lazyload";

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.use(ElementUI);
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Crystal_128_error.svg/1200px-Crystal_128_error.svg.png",
  loading:
    "https://www.bloghong.com/wp-content/uploads/2016/05/loading-blogger.jpg",
  attempt: 1,
  lazyComponent: true,
  listenEvents: ["scroll"],
});
Vue.config.productionTip = false;
new Vue({
  i18n,
  store,
  router,
  // web,
  render: (h) => h(App),
}).$mount("#app");
