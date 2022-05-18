<template>
  <nav>
    <!-- 下面是导航栏，通往不同的页面 -->
    <router-link to="/money" class="item" active-class="selected">
      <icon name="money" />
      记账
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <icon name="label" />
      标签
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
// import ""
nav {
  // 文字对齐
  // text-align: center;

  // position: relative;
  // border: 1px solid orange;
  display: flex;
  box-shadow: 0px 0px 10px rgba(134, 127, 127, 0.25);
  flex-direction: row;
  font-size: 16px;

  > .item {
    border: 1px solid rgb(86, 90, 86, 0.15);
    color: rgba(128, 128, 128, 0.644);
    display: flex;
    // 上下排列
    flex-direction: column;
    width: 33.33333%;
    // 对里面的item们进行居中的操作
    align-items: center;
    padding: 3px 0 0 0;
  }

  .item.selected {
    color: black;
  }
}
</style>
