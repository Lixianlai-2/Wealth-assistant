<template>
  <div>
    <layout>
      <div class="moneyContainer">
        <div class="tags">
          <ul>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ul>
        </div>

        <div class="labelRemark">
          <span class>备注</span>
          <input type="text" value="在这里添加备注" />
        </div>

        <div class="budgetContainer">
          <ul>
            <li class="selected">支出</li>
            <li>收入</li>
          </ul>
        </div>

        <!-- 计算器部分 -->
        <div class="calculatorContainer">
          <div class="number">
            <input type="text" />
            <div class="buttons">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>+</button>
              <button>删除</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>-</button>
              <button>清空</button>
              <button></button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>×</button>
              <button>OK</button>
              <button>0</button>
              <button>.</button>
              <button>%</button>
              <button>÷</button>
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
// import Nav from "@/components/Nav.vue";
import Vue from "vue";

export default Vue.extend({
  // components: { Nav },
});
</script>

<style lang="scss" scoped></style>
