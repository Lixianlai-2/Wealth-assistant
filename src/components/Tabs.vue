<template>
  <ul class="tabs">
    <li
      v-for="item in dataSource"
      :key="item.value"
      @click="select(item)"
      :class="liClass(item)"
      class="thisIsOk"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

type DataSourceItem = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  //   required:true的作用就是必须传，不传就报错
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  select(item: DataSourceItem) {
    // 触发update:value事件，把item.value作为函数的参数，或者作为值传给父组件
    this.$emit("update:value", item.value);
  }

  liClass(item: DataSourceItem) {
    return {
      // 外部传入的classPrefix决定class名字
      [this.classPrefix + "-tab"]: this.classPrefix,
      // 决定是哪个li被选中
      selected: item.value === this.value,
    };
  }
}
</script>

<style lang="scss" scoped>
// .tabs {
//   background: #c4c4c4;
//   display: flex;
//   text-align: center;
//   font-size: 24px;
//   > li {
//     width: 50%;
//     height: 64px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     &.selected::after {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 100%;
//       height: 4px;
//       background: #333;
//     }
//   }
// }
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
</style>
