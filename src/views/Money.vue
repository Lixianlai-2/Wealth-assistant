<template>
  <div>
    <layout contentClass="growTags" class-prefix="layout">
      <Tags :dataSources="tags" />
      <Remarker />
      <Budget :propA="1" />
      <numberPad />
    </layout>
  </div>
</template>

<script>
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import numberPad from "@/components/Money/numberPad.vue";
import Budget from "@/components/Money/Budget.vue";
import Remarker from "@/components/Money/Remarker.vue";

export default Vue.extend({
  name: "Money",
  components: { Tags, Remarker, Budget, numberPad },
  data() {
    return {
      tags: ["衣", "食", "住", "行", "玩游戏"],
    };
  },
});
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
