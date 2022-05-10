<template>
  <div>
    <layout>
      <!-- {{ tags }} -->
      <div class="tags">
        <router-link
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
          class="tag"
        >
          <span> {{ tag.name }}</span>
          <icon class="icon" name="right"></icon>
        </router-link>
      </div>
      <div class="tagBtnContainer">
        <Button @click.native="createTag">新建标签</Button>
        <!--  <Button class="newTag" @click="createTag">新建标签</Button>-->
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
// import Nav from "@/components/Nav.vue";
import Vue from "vue";
import { TagListModel } from "@/models/tagListModel";
// import { TagListModel } from "@/models/tagListModel.vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Money/Button.vue";
// import icon from "@/components/icon.vue";

// 从localStorage中获得数据，保存到其中的data中
TagListModel.fetch();
@Component({
  components: { Button },
})
export default class Labels extends Vue {
  tags = TagListModel.data;
  createTag() {
    const name = window.prompt("输入", "默认内容");
    if (name) {
      // TagListModel.create(name);
      const message = TagListModel.create(name);
      if (message === "success") {
        console.log("添加成功");
      } else {
        alert("标签不能重复哦");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background-color: white;

  .tag {
    min-height: 44px;
    padding: 0 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    svg {
    }
  }
}

.tagBtnContainer {
  text-align: center;
  .newTag {
    font-size: 18px;
    background: #767676;
    padding: 15px;
    border-radius: 10px;
    margin-top: 40px;
    color: #e4e4e4;
    border: none;
  }
}
</style>
