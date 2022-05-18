<template>
  <div id="app">
    <!-- 不同路径下展示不同的内容 -->
    <router-view />
  </div>
</template>

<script lang="ts">
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
@import "~@/assets/styles/reset.scss";
@import "~@/assets/styles/helper.scss";

#app {
  font-family: $font-hei;
  // text-align: center;
  color: #333;
  background-color: #f4f4f4;
  // 设置最大宽度并让其居中
  max-width: 500px;
  margin: 0 auto;
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
