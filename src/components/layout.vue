<template>
  <div class="layout-nav">
    <!-- 增加一层，将其用flex-grow膨胀，让导航部分被挤到最下方 -->
    <div class="content" :class="contentClass">
      <!-- <slot> 元素作为组件模板之中的内容分发插槽。<slot> 元素自身将被替换 -->
      <slot />
      <!-- <slot></slot>  -->
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["contentClass"],
});
</script>

<style lang="scss" scoped>
.layout-nav {
  // border: 10px solid pink;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  // border: 1px solid red;
  // 让其占据剩余空间，这样nav部分就被挤到最下面了
  flex-grow: 1;
  overflow: auto;
}
</style>
