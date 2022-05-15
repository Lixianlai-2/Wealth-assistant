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
import Tabs from "../components/Tabs.vue";
import intervalList from "@/constants/interval";
import budgetList from "@/constants/budget";

@Component({
  components: {
    Tabs,
  },
})
export default class Statistics extends Vue {
  intervalList = intervalList;
  budgetList = budgetList;

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

::v-deep ul > li.interval-tab {
  // border: 1px solid blue;
  height: 40px;
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
