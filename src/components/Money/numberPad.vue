<template>
  <div class="numberPad">
    <div class="output">{{ outputValue || "&nbsp;" }}</div>
    <div class="buttons">
      <!-- <div class="buttons" v-for="btn in buttons" :key="btn.textContent"> -->
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="deleteBtn">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clearBtn">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="OKBtn">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
// 注意要先引入Vue
import Vue from "vue";

// 引入并使用装饰器
import { Component } from "vue-property-decorator";
@Component
export default class Budget extends Vue {
  outputValue = "0"; // 使得默认输出为字符串0
  inputContent(event: PointerEvent) {
    const button = event.target as HTMLButtonElement;
    const userInput = button.textContent as string; // 强制指定类型为string

    // 计算位数到兆截止
    if (this.outputValue.length >= 14) return;

    if (this.outputValue === "0") {
      // 当输出框的值是0时
      // 再次输入0到9
      // 在下面的字符串中，找到了用户输入的0到9字符串，会返回一个索引位置，找不到就返回-1
      if ("0123456789".indexOf(userInput) >= 0) {
        this.outputValue = userInput;
      } else {
        this.outputValue += userInput;
      }

      // 当输出框中的值不是0时
    } else {
      // 如果输出框中已经有了点，并且用户输入的也是点，那么就return
      if (this.outputValue.indexOf(".") >= 0 && userInput === ".") {
        return;
      }
      this.outputValue += userInput;
    }
  }

  deleteBtn() {
    // 保留0到-1位，且-1位不保留
    let x = this.outputValue.slice(0, -1); // slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
    if (x.length === 0) {
      this.outputValue = "0";
    } else {
      this.outputValue = this.outputValue.slice(0, -1);
    }
  }

  clearBtn() {
    this.outputValue = "0";
  }

  OKBtn() {
    this.$emit("update:value", this.outputValue);
    this.$emit("submit", this.outputValue);
    this.outputValue = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.numberPad {
  // 让number部分和数字键盘部分变成上下部分
  display: flex;
  flex-direction: column;
  .output {
    // box-shadow: 0px 0px 10px rgba(134, 127, 127, 0.25);
    @extend %innerShadow;
    // border: 1px solid green;
    font-size: 36px;
    // 设置适合数字表达的字体
    font-family: Consolas, monospace;
    padding: 15px 15px;
    // 让行内元素相对父元素跑到右边去
    text-align: right;
    // height: 72px;
  }

  .buttons {
    @extend %clearFix;
    button {
      width: 25%;
      height: 64px;
      background: transparent;
      border: none;
      float: left;
      // 让button的黄色框消失
      // outline: none;
      // -webkit-tap-highlight-color: transparent;
      // 设定颜色
      $bg: #f2f2f2;
      // :nth-child(an+b) 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，
      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 2%);
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 3%);
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4 * 5%);
      }
      &:nth-child(12) {
        background: darken($bg, 4 * 6%);
      }
    }
    .ok {
      height: 128px;
      float: right;
    }
    .zero {
      width: 50%;
    }
  }
}
</style>
