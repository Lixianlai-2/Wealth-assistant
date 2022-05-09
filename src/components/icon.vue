<template>
  <div class="iconContainer">
    <svg class="iconStyle">
      <!-- 用v-bind之后，等号里面变成js表达式 -->
      <use :xlink:href="'#' + name" />
      <!-- 属性内部的插值已经被移除，无法再使用，只能用v-bind -->
      <!-- <use xlink:href="'#' + {{iconName}}" /> -->
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// 一次引入svg图标
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);

try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default Vue.extend({
  // 从父级组件引入设置的iconName
  props: ["name"],
});
</script>

<style lang="scss" scoped>
.iconStyle {
  width: 32px;
  height: 32px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
