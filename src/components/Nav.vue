<template>
  <nav>
    <!-- 下面是导航栏，通往不同的页面 -->
    <router-link to="/money" class="item selected">
      <icon class="navIcon" iconName="money" />
      记账
    </router-link>

    <router-link to="/labels" class="item">
      <icon class="navIcon" iconName="label" />
      标签
    </router-link>

    <router-link to="/statistics" class="item">
      <icon class="navIcon" iconName="statistics" />
      统计
    </router-link>
  </nav>
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
nav {
  // position: relative;
  // border: 1px solid orange;
  display: flex;
  box-shadow: 0px 0px 10px rgba(134, 127, 127, 0.25);
  flex-direction: row;
  font-size: 16px;

  > .item {
    border: 1px solid rgb(86, 90, 86, 0.15);
    display: flex;
    // 上下排列
    flex-direction: column;
    width: 33.33333%;
    // 对容器里面的内容进行横向居中操作
    justify-content: center;
    // 对容器里面的内容进行竖向居中操作
    align-content: center;
    padding: 3px 0 0 0;
  }

  > .item.selected {
    color: red;
  }
}
</style>
