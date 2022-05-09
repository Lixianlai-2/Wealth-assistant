<template>
  <div>
    <layout>slot而成的内容editLabel</layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { TagListModel } from "@/models/tagListModel";

@Component
export default class EditLabel extends Vue {
  created() {
    // 得到edit/路径id
    // 后面与从数据库中得到的内容对比跳转

    console.log("无论edit后面的数字是几，这里都可以运行");
    const id = this.$route.params.id;

    TagListModel.fetch();

    // tags是包含Tag类型的数组，而Tag是对象
    const tags = TagListModel.data;

    // 得到路径id与数据库id相等的那个对象（也就是Tag类型）
    const tag = tags.filter((tag) => tag.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      // 如果没有合适的就跳转到404页面
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped></style>
