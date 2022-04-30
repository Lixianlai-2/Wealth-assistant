<template>
  <div class>
    <svg class="iconStyle">
      <!-- 用v-bind之后，等号里面变成js表达式 -->
      <use :xlink:href="'#' + iconName" />
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
  props: ["iconName"],
});
</script>

<style lang="scss" scoped>
.iconStyle {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
