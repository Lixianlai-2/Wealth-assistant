<template>
  <div>
    <layout>slot而成的内容editLabel</layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class labelEdit extends Vue {}
</script>

<style lang="scss" scoped></style>
