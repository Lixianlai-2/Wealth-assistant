<template>
  <div>
    <!-- 触发click事件，前提是引入的那个地方本身就有事件 -->
    <!-- <button class="newTag" @click="$emit('click', $event)"> -->
    <button class="newTag">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  createTag() {}
}
</script>

<style lang="scss" scoped>
.newTag {
  font-size: 18px;
  background: #767676;
  padding: 15px;
  border-radius: 10px;
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.808);
  border: none;
}
</style>
