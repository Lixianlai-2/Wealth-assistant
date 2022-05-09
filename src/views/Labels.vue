<template>
  <div>
    <layout>
      {{ tags }}
      <ol class="tags">
        <li v-for="tag in tags" :key="tag">
          <span> {{ tag }}</span>
          <icon name="right" />
        </li>
      </ol>
      <div class="tagBtnContainer">
        <button @click="createTag" class="newTag">新增标签</button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
// import Nav from "@/components/Nav.vue";
import Vue from "vue";
import { modelTagRecord } from "@/models/tagRecordModel";
import { model } from "@/models/model";
// 从localStorage中获得数据，保存到其中的data中
// model.fetch();
console.log(modelTagRecord.data);

export default class Labels extends Vue {
  // createTag() {
  //   const name = window.prompt("输入", "默认内容");
  //   if (name) {
  //     // modelTagRecord.create(name);
  //     const message = modelTagRecord.create(name);
  //     if (message === "success") {
  //       alert("添加成功");
  //     } else {
  //       alert("标签不能重复哦");
  //     }
  //   }
  //   this.tags = modelTagRecord.data;
  // }

  // // 直接读取data的数据
  // tags = modelTagRecord.data;

  tags = modelTagRecord.data;

  createTag() {
    const name = window.prompt("请输出标签名");
    alert(name);
    if (name) {
      const message = modelTagRecord.create(name);
      if (message === "duplicate") {
        window.alert("标签名重复了");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background-color: white;

  > li {
    min-height: 44px;
    padding: 0 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    svg {
      border: 1px solid blue;
      color: red;
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
