<template>
  <div>
    <label class="labelRemark">
      <span class="RemarkText">备注</span>
      <input type="text" placeholder="在这里输入备注" />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "Remarker",
};
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
