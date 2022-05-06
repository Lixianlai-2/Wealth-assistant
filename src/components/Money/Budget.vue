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
  @Prop(Number) propA: number | undefined;
  // @Prop告诉Vue propA 不是data，而是prop
  // Number告诉Vue propA在JavaScript运行时是Number
  // propA是属性名
  // number | undefined告诉TS propA编译时的类型

  // 注意数据这里变成了=赋值，而不是:
  type = "-";

  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown!");
    }
    this.type = type;
  }

  mounted() {
    // 这里编译错误，只在终端提示错误
    console.log(this.propA.xxx);

    // 不影响下面的运行
    console.log("李先来2");

    if (this.propA === undefined) {
      console.log("应该是数字哦");
    }
  }
}

// export default {
//   name: "Budget",
//   data() {
//     return {
//       // 一开始type就是-所以一开始阴影就在支出上
//       type: "-", // '-'表示支出，'+'表示收入
//     };
//   },
//   methods: {
//     selectType(type: string) {
//       if (type !== "-" && type !== "+") {
//         throw new Error("type is unknown!");
//       }
//       this.type = type;
//     },
//   },
//   props: [],
// };
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
