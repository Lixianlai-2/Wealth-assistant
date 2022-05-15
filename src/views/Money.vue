<template>
  <div>
    <layout contentClass="growTags" class-prefix="layout">
      <Tags @update:value="updateTagFn" />
      <Remarker
        value="在这儿备注"
        fieldName="备注"
        @update:value="updateRemarkFn"
      />
      <Tabs
        :dataSource="budgetList"
        classPrefix="money"
        :value.sync="record.budget"
        @update:value="updateBudgetFn"
      />
      <!-- <Budget :propA="1" @update:value="updateBudgetFn" /> -->
      <!-- 绑定submit事件，当点击numberPad的OK时，触发这里面的submit事件，执行saveRecords函数 -->
      <numberPad @update:value="updateNumberPadFn" @submit="saveRecords" />
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import numberPad from "@/components/Money/NumberPad.vue";
import Remarker from "@/components/Money/Remarker.vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import budgetList from "@/constants/budget";

// 注册组件
@Component({
  components: { Tags, Remarker, Budget, numberPad, Tabs },
  computed: {
    // 监听里面的内容，当数据改变时，重新渲染页面
    recordList() {
      return this.$store.state.recordList;
    },
    tagList() {
      return this.$store.state.tagList;
    },
  },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  // record是一个数据，它的类型是Record
  record: RecordType = {
    tags: [],
    remark: "",
    budget: "-",
    numberPad: 0,
    CreateDate: new Date(),
  };

  budgetList = budgetList;
  budgetType = "-";

  mounted() {
    this.$store.commit("fetchRecords");
  }

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
    // let currentTime = new Date();
  }

  saveRecords() {
    this.$store.commit("createRecord", this.record);
    alert("点击OK生效了");
    console.log(this.recordList);
  }
}
</script>

<style scoped>
::v-deep .money-tab {
  /* border: 1px solid red; */
}

.layout-content {
  display: flex;
  flex-direction: column;
}

.growTags {
  display: flex;
  flex-direction: column;
}
</style>
