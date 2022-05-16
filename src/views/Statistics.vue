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

      <ol>
        <li v-for="(objValue, name) in result" :key="name">
          <!-- 这里的objValue就是hashTableValue -->
          <h3 class="title">{{ beautify(objValue.title) }}</h3>
          <ol>
            <!-- 因为HashTableValue里面的items属性是RecordType[]，所以可以对其进行遍历-->
            <li v-for="item in objValue.items" :key="item.id" class="record">
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.remark }}</span>
              <span>￥{{ item.numberPad }}</span>
            </li>
          </ol>
        </li>
      </ol>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "../components/Tabs.vue";
import intervalList from "@/constants/interval";
import budgetList from "@/constants/budget";
import dayjs from "dayjs";

@Component({
  components: {
    Tabs,
  },
})
export default class Statistics extends Vue {
  beautify(time: string) {
    const day = dayjs(time);
    const now = dayjs();

    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else {
      return day.format("YYYY年M月D日");
    }
  }

  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }

  get recordList() {
    // 直接得到对应的recordList，里面都是RecordType对象
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    // 类型为RecordItem[]
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordType[] };

    // 一个空对象的类型如下
    const hashTable: { [key: string]: HashTableValue } = {};

    for (let i = 0; i < recordList.length; i++) {
      // 每个RecordType里面是有CreateDate这个部分的
      // 分隔开日期和时间
      const [date, time] = recordList[i].CreateDate!.split("T");

      hashTable[date] = hashTable[date] || { title: date, items: [] };

      hashTable[date].items.push(recordList[i]);
    }

    return hashTable;
  }

  beforeCreate() {
    this.$store.commit("fetchRecords");
  }

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

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
