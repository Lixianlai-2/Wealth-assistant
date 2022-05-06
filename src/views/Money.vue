<template>
  <div>
    <layout contentClass="growTags" class-prefix="layout">
      <Tags />
      <Remarker />
      <Budget :propA="1" />
      <numberPad />
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Money/Tags.vue";
import numberPad from "@/components/Money/numberPad.vue";
import Budget from "@/components/Money/Budget.vue";
import Remarker from "@/components/Money/Remarker.vue";

export default Vue.extend({
  name: "Money",
  components: { Tags, Remarker, Budget, numberPad },
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
