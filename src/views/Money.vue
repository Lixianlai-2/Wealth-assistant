<template>
  <div>
    <layout contentClass="growTags" class-prefix="layout">
      <!-- v-on的缩写就是@，用来绑定事件监听器 -->
      <Tags :dataSources.sync="tags" @update:value="updateTagFn" />
      <Remarker @update:value="updateRemarkFn" />
      <Budget :propA="1" @update:value="updateBudgetFn" />
      <!-- 绑定submit事件，当点击numberPad的OK时，触发这里面的submit事件，执行saveRecords函数 -->
      <numberPad @update:value="updateNumberPadFn" @submit="saveRecords" />
      {{ recordList }}
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import numberPad from "@/components/Money/NumberPad.vue";
import Budget from "@/components/Money/Budget.vue";
import Remarker from "@/components/Money/Remarker.vue";
import { Component, Watch } from "vue-property-decorator";
import { model } from "@/model";

// const model = require("@/model.ts");
console.log(model.fetch());

// 将从model抓取到的数据，赋值给recordList这个变量，这个变量也被定义为Record[]类型
let recordListFetched = model.fetch();
console.log(`recordListFetched的类型： `, typeof recordListFetched);

// 声明了一个类型
// type RecordType = {
//   tags: string[];
//   remark: string;
//   budget: string;
//   numberPad: number;
//   CreateDate: Date; // 类，即构造函数
// };

// 新增一个数据库，用作版本管理
// window.localStorage.setItem("versionControl", "001");

// @Component
@Component({ components: { Tags, Remarker, Budget, numberPad } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "玩游戏"];

  // record是一个数据，它的类型是Record
  record: RecordType = {
    tags: [],
    remark: "",
    budget: "-",
    numberPad: 0,
    CreateDate: new Date(),
  };

  // 数组里面都是Record类型
  recordList = recordListFetched;

  // 如果原来没有对应的localStorage，就会返回null，让其或为空数组，但因为在JSON.parse中，所以必须写上字符串空数组
  // recordList: Record[] = JSON.parse(localStorage.getItem("recordList") || "[]");

  updateTagFn(value: string[]) {
    console.log(value);
    this.record.tags = value;
  }

  updateRemarkFn(value: string) {
    console.log(value);
    this.record.remark = value;
  }
  updateBudgetFn(value: string) {
    // console.log(value);
    this.record.budget = value;
    console.log(localStorage.getItem("recordList"));
  }
  updateNumberPadFn(value: string) {
    console.log(value);
    this.record.numberPad = parseFloat(value); // 把传入的字符串变成数字
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
    // this.record.CreateDate = currentTime.toLocaleTimeString;
  }

  saveRecords() {
    this.recordList.push(model.cloneRecordDeep(this.record));
  }

  @Watch("recordList")
  onRecordChange(newRecordList: string) {
    // 存入localStorage,将this.recordList转化为字符串
    // localStorage.setItem("recordList", JSON.stringify(this.recordList));
    model.save(this.recordList);
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
