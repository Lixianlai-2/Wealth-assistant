<template>
  <div id="app">
    <!-- 不同路径下展示不同的内容 -->
    <router-view />

    <hr />
    <!-- 下面是导航栏，通往不同的页面 -->
    <router-link to="/money">记账</router-link>
    |
    <router-link to="/labels">标签</router-link>
    |
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@/assets/styles/test.scss";

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
