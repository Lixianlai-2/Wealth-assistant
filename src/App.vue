<template>
  <div id="app">
    <!-- 不同路径下展示不同的内容 -->
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import layout from "@/components/layout.vue";
import icon from "@/components/icon.vue";

// 全局注册组件layout
Vue.component("layout", layout);

// 全局注册icon组件
Vue.component("icon", icon);

export default {};
</script>

<style lang="scss">
@import "~@/assets/styles/test.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: $red;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
