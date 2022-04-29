<template>
  <div id="app">
    <!-- 不同路径下展示不同的内容 -->
    <router-view />
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
