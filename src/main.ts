import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
// import { TagListModel } from "./models/tagListModel";
// import { recordListModel } from "./models/recordListModel";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);

new Vue({
  // router:router
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
