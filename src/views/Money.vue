<template>
  <div>
    <!-- 使用全局组件layout -->
    <layout><h1>money.vue的内容</h1> </layout>
  </div>
</template>

<script lang="ts">
// import Nav from "@/components/Nav.vue";
import Vue from "vue";
import moneyImg from "@/assets/icons/money.svg";

console.log(moneyImg);

export default Vue.extend({
  // components: { Nav },
});
</script>

<style lang="scss" scoped>
.money-nav {
  // border: 10px solid pink;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  border: 1px solid red;
  // 让其占据剩余空间，这样nav部分就被挤到最下面了
  flex-grow: 1;
  overflow: auto;
}
</style>
