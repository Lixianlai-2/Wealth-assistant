<template>
  <div>
    <!-- 下面用以测试数据绑定是否实现 -->
    {{ value }}
    <label class="labelRemark">
      <span class="RemarkText">{{ fieldName }}</span>
      <!-- v-model实现数据双向绑定 -->
      <input
        type="text"
        :value="value"
        @input="onValueChange($event.target.value)"
        :placeholder="holderName"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class remark extends Vue {
  name: "Remarker" | undefined;
  // value = "";
  @Prop({ default: "" }) readonly value!: string;

  // span的名字
  @Prop({ required: true }) fieldName!: string;
  // @Prop({ default: true }) fieldName!: string;

  // placeholder
  @Prop() holderName!: string;

  // 检测value值的变化，如果变化了，就触发update:value事件
  @Watch("value")
  onValueChange(value: string) {
    this.$emit("update:value", value);
  }
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
