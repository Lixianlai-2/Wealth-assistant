<template>
  <div>
    {{ record }}
    <layout contentClass="growTags" class-prefix="layout">
      <Tags :dataSources.sync="tags" @update:value="updateTagFn" />
      <Remarker @update:value="updateRemarkFn" />
      <Budget :propA="1" @update:value="updateBudgetFn" />
      <numberPad @update:value="updateNumberPadFn" />
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import numberPad from "@/components/Money/numberPad.vue";
import Budget from "@/components/Money/Budget.vue";
import Remarker from "@/components/Money/Remarker.vue";
import { Component, Watch } from "vue-property-decorator";

// 声明了一个类型
type Record = {
  tags: string[];
  remark: string;
  budget: string;
  numberPad: number;
};

// @Component
@Component({ components: { Tags, Remarker, Budget, numberPad } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行", "玩游戏"];

  // record是一个数据，它的类型是Record
  record: Record = {
    tags: [],
    remark: "",
    budget: "-",
    numberPad: 0,
  };

  updateTagFn(value: string[]) {
    console.log(value);
    this.record.tags = value;
  }

  updateRemarkFn(value: string) {
    console.log(value);
    this.record.remark = value;
  }
  updateBudgetFn(value: string) {
    console.log(value);
    this.record.budget = value;
  }
  updateNumberPadFn(value: string) {
    console.log(value);
    this.record.numberPad = parseFloat(value); // 把传入的字符串变成数字
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
