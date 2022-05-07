<template>
  <div>
    <!-- 下面用以测试数据绑定是否实现 -->
    {{ value }}
    <label class="labelRemark">
      <span class="RemarkText">备注</span>
      <!-- v-model实现数据双向绑定 -->
      <input type="text" placeholder="在这里输入备注" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// 因为只是引入其中的一个Component，所以才需要加上括号
import { Component } from "vue-property-decorator";

@Component
export default class remark extends Vue {
  name: "Remarker" | undefined;
  value = "";
}
</script>

<style lang="scss" scoped>
.labelRemark {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  span {
    // border: 1px solid blue;
    padding-right: 16px;
    // padding: 10px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
    // color: #f4f4f4fa;
  }
  // 点击输入框时，原本自带的颜色消失
  input:focus {
    outline: none;
  }
}
</style>
