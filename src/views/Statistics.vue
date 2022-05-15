<template>
  <div>
    <layout>
      <Tabs
        class-prefix="budget"
        :dataSource="budgetList"
        :value.sync="budgetType"
      />
      <Tabs
        class-prefix="interval"
        :dataSource="intervalList"
        :value.sync="interval"
      />
      budget:{{ budgetType }}
      <br />
      interval:{{ interval }}
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Budget from "../components/Money/Budget.vue";
import Tabs from "../components/Tabs.vue";

@Component({
  components: {
    Budget,
    Tabs,
  },
})
export default class Statistics extends Vue {
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "weekend" },
    { text: "按月", value: "month" },
  ];
  budgetList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];

  budgetType = "-";
  interval = "day";
}
</script>

<style lang="scss" scoped>
::v-deep .budget-tab {
  // border: 3px solid red;
  background: #ffffff;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}

// ::v-deep .budget-tab.selected {
//   // border: 3px solid red;
//   background: #ffffff;
//   &.selected {
//     // border: 10px solid green;
//     background: #c4c4c4;
//     &::after {
//       display: none;
//     }
//   }
// }
</style>
