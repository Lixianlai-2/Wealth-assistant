<template>
  <div>
    <layout>
      <Tabs
        class-prefix="budget"
        :dataSource="budgetList"
        :value.sync="budgetType"
      />
      <!-- <Tabs
        class-prefix="interval"
        :dataSource="intervalList"
        :value.sync="interval"
      /> -->

      <ol>
        <li v-for="(obj, index) in resultObjArr" :key="index">
          <!-- 这里的obj就是hashTableValue -->
          <h3 class="title">
            {{ beautify(obj.title) }} <span>￥{{ obj.total }}</span>
          </h3>
          <ol>
            <!-- 因为HashTableValue里面的items属性是RecordItem[]，所以可以对其进行遍历-->
            <li v-for="item in obj.items" :key="item.id" class="record">
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
import clone from "@/lip/clone";

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

  get resultObjArr() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter((record) => record.budget === this.budgetType)
      .sort(
        (a, b) => dayjs(b.CreateDate).valueOf() - dayjs(a.CreateDate).valueOf()
      );

    type FormatTypeArr = {
      title: string;
      total?: number;
      items: RecordItem[];
    }[];
    // 得到newList中第一个RecordItem的格式化日期的对象数组
    const formatDateObjArr: FormatTypeArr = [
      //没有定义total，这里是被允许的
      {
        title: dayjs(newList[0].CreateDate).format("YYYY-M-D"),
        items: [newList[0]],
      },
    ];

    // 注意是从第1位开始循环
    for (let i = 1; i < newList.length; i++) {
      const currentRecord = newList[i];
      const lastFormatObj = formatDateObjArr[formatDateObjArr.length - 1];
      // 如果最后一个对象中的title根现在的Record的时间，与currentRecord的时间相同，那么就把currentRecord放入这个lastFormatObj中
      if (
        dayjs(lastFormatObj.title).isSame(
          dayjs(currentRecord.CreateDate),
          "day"
        )
      ) {
        // 如果传入的数据是最新的天数的，那么就将其放入到最新的天数的对象中,  因为recordList是经过降序排列的，所以只有最新的天数全部都处理完了，才会增加新的对象
        lastFormatObj.items.push(currentRecord);
      } else {
        // formatDateObjArr的length，会随着添加新的内容而改变，而新添加的内容，恰恰就处于formatDateObjArr的最后一位
        formatDateObjArr.push({
          title: dayjs(currentRecord.CreateDate).format("YYYY-M-D"),
          items: [currentRecord],
        });
      }
    }

    formatDateObjArr.map((obj) => {
      obj.total = obj.items.reduce((sum, item) => sum + item.numberPad, 0);
    });

    return formatDateObjArr;
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
// ::v-deep .budget-tab {
//   // border: 3px solid red;
//   background: #c4c4c4;
//   &.selected {
//     background: #ffffff;
//     &::after {
//       display: none;
//     }
//   }
// }

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
  background: #ffffff;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
