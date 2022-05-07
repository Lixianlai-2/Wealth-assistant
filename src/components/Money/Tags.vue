<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul>
      <li
        v-for="tag in dataSources"
        :key="tag"
        @click="select(tag)"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// selectedTags.indexOf(tag) >= 0
@Component
export default class tags extends Vue {
  // 外部传入的数据
  @Prop() dataSources: string[] | undefined;

  // 下面的类型是字符串空数组，让它等于空数组
  selectedTags: string[] = [];

  // 把对应的tag放到数组中
  select(tag: string) {
    const index = this.selectedTags.indexOf(tag); //返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

    // 如果数组中已经有了这个标签，那么就删除这个
    if (index >= 0) {
      this.selectedTags.splice(index, 1); // 从索引index开始，删除1位
    } else {
      // 如果数组中没有这个标签，那么就添加到selectedTags数组中
      this.selectedTags.push(tag);
    }
  }
}
</script>

<style scoped lang="scss">
.tags {
  // border: 1px solid red;
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
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
    $bg: #d9d9d9;
    li.selected {
      // 被选中时，颜色变暗
      background-color: darken($bg, 25%);
      // 字体变成白色
      color: aliceblue;
    }
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
