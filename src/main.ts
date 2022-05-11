import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import { TagListModel } from "./models/tagListModel";

Vue.config.productionTip = false;

Vue.component("Nav", Nav);

window.tagList = TagListModel.fetch();

window.createTag = function (name: string) {
  // 存储新增的数据，生成新的tag类型，为用户输入的result自动匹配了id，在this.data中形成了新的数组
  const message = TagListModel.create(name);
  if (message === "success") {
    console.log("添加成功");
  } else {
    alert("标签不能重复哦");
  }
};

window.removeTag = (id: string) => {
  return TagListModel.remove(id);
};

window.updateTag = (id: string, name: string) => {
  return TagListModel.update(id, name);
};

new Vue({
  // router:router
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
