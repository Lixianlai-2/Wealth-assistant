<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
  }

  .buttons {
    @extend %clearFix;
    button {
      width: 25%;
      height: 64px;
      background: transparent;
      border: none;
      //
      float: left;
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
