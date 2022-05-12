<template>
  <div>
    <layout contentClass="growTags" class-prefix="layout">
      <!-- v-on的缩写就是@，用来绑定事件监听器 -->
      <Tags @update:value="updateTagFn" />
      <Remarker
        value="在这儿备注"
        fieldName="备注"
        @update:value="updateRemarkFn"
      />
      <Budget :propA="1" @update:value="updateBudgetFn" />
      <!-- 绑定submit事件，当点击numberPad的OK时，触发这里面的submit事件，执行saveRecords函数 -->
      <numberPad @update:value="updateNumberPadFn" @submit="saveRecords" />
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import numberPad from "@/components/Money/NumberPad.vue";
import Budget from "@/components/Money/Budget.vue";
import Remarker from "@/components/Money/Remarker.vue";
import { Component } from "vue-property-decorator";
import store from "@/store/index2";

// 注册组件
@Component({ components: { Tags, Remarker, Budget, numberPad } })
export default class Money extends Vue {
  // 让money部分的标签和Labels部分的标签都来自同一个地方，一个地方修改，另一个地方就都修改了！
  fetchedTags = store.tagList;

  // record是一个数据，它的类型是Record
  record: RecordType = {
    tags: [],
    remark: "",
    budget: "-",
    numberPad: 0,
    CreateDate: new Date(),
  };

  // 数组里面都是Record类型
  recordList = store.recordList;
  // recordList = recordListFetched;

  updateTagFn(value: string[]) {
    console.log("更新tag数据works");
    console.log(`money组件得到的新建标签所传来的 value:`, value);
    this.record.tags = value;
  }

  updateRemarkFn(value: string) {
    this.record.remark = value;
  }
  updateBudgetFn(value: string) {
    this.record.budget = value;
  }
  updateNumberPadFn(value: string) {
    this.record.numberPad = parseFloat(value); // 把传入的字符串变成数字
    let currentTime = new Date();
  }

  saveRecords() {
    store.createRecord(this.record);
    alert("点击OK生效了");
  }
}
</script>

<style>
.layout-content {
  display: flex;
  flex-direction: column;
}

.growTags {
  display: flex;
  flex-direction: column;
}
</style>
