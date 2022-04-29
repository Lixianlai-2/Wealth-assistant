<template>
  <div class="money-nav">
    <!-- 增加一层，将其用flex-grow膨胀，让导航部分被挤到最下方 -->
    <div class="content">more-money.vue</div>
    <Nav />
  </div>
</template>

<script lang="ts">
// import Nav from "@/components/Nav.vue";
import Vue from "vue";

export default Vue.extend({
  // components: { Nav },
});
</script>

<style lang="scss" scoped>
.money-nav {
  border: 10px solid pink;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  border: 3px solid red;
  // 让其占据剩余空间，这样nav部分就被挤到最下面了
  flex-grow: 1;
  overflow: auto;
}
</style>
