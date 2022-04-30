<template>
  <div class="nav-self">
    <!-- 下面是导航栏，通往不同的页面 -->
    <router-link to="/money">
      <icon iconName="money" />
      记账
    </router-link>

    |
    <router-link to="/labels">
      <icon iconName="label" />
      标签
    </router-link>

    |
    <router-link to="/statistics">
      <icon iconName="statistics" />
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
// 单独引入svg图标
// import moneySvg from "@/assets/icons/money.svg";
// import labelSvg from "@/assets/icons/label.svg";
// import statisticsSvg from "@/assets/icons/statistics.svg";

// 一次引入svg图标
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);

try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

import Vue from "vue";

// 必须要在这里调用一下吗？需要
// console.log(moneySvg);
// console.log(labelSvg);
// console.log(statisticsSvg);

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.nav-self {
  border: 1px solid green;
}
</style>
