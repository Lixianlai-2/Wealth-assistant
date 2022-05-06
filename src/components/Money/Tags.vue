<template>
  <div class="tags">
    <ul>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button @click="add">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Tags",
  methods: {
    add() {
      alert("works");
    },
  },
};
</script>

<style scoped lang="scss">
.tags {
  // border: 1px solid red;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
    // justify-content: center;
    // border: 1px solid blue;
    // display: flex;
  }
  > .new {
    // border: 1px solid blue;
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
