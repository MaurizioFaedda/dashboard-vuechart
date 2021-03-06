import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './icons'
import AxiosPlugin from "./plugins/AxiosPlugin.js";



Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.use(AxiosPlugin);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
