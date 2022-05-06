<template>
  <div class="budgetContainer">
    <ul>
      <!-- 当type等于-时，才让class等于selected -->
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <!-- 当type等于-时，才让class等于selected -->
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
// 注意要先引入Vue
import Vue from "vue";

// 引入并使用装饰器
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Budget extends Vue {
  type = "-";

  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown!");
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.budgetContainer {
  ul {
    // border: 1px solid blue;
    display: flex;
    background: #c4c4c4;
    font-size: 24px;
    // 行内内容（例如文字）如何相对它的块父元素对齐
    // text-align: center;

    > li {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      width: 50%;
      align-items: center;
      height: 64px;
      position: relative;

      // 当前被选中的li
      &.selected::after {
        content: "";
        position: absolute;
        // background-color: grey;
        width: 100%;
        height: 4px;
        background: #333;
        // 跑到下边跟左边去
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>
