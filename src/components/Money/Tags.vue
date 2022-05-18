<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul>
      <li
        v-for="tag in tagList"
        :key="tag.id"
        @click="toggle(tag.name)"
        :class="{ selected: selectedTags.indexOf(tag.name) >= 0 }"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// import store from "@/store/index2";
import TagHelper from "@/mixins/tagHelper";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";

// selectedTags.indexOf(tag) >= 0
// console.log($store.state.tagList);

@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    },
  },
})
export default class tags extends mixins(TagHelper) {
  // tags = this.$store.state.tagList;

  // 下面的类型是字符串空数组，让它等于空数组
  selectedTags: string[] = [];
  // 一旦页面created，就执行读取最新本地仓库到tagList里面
  created() {
    this.$store.commit("fetchTags");
  }

  // 新增标签
  createTag() {
    // 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字
    // result = store.prompt(text, value);
    let result = window.prompt("新增标签");
    alert(result);
    if (!result) {
      return;
    } else {
      this.$store.commit("createTags", result);
    }
  }

  // 把对应的tag添加到selectedTags数组中，或从中删除，以实现selected：true或selected:false
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag); //返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

    // 如果数组中已经有了这个标签，那么就删除这个。也就是说，原来选中有颜色了，就取消颜色
    if (index >= 0) {
      this.selectedTags.splice(index, 1); // 从索引index开始，删除1位
    } else {
      // 如果数组中没有这个标签，那么就添加到selectedTags数组中。选中有颜色
      this.selectedTags.push(tag);
    }

    this.$emit("update:value", this.selectedTags);
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

  // 标签过多时，页面及时滚动
  overflow: auto;
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
