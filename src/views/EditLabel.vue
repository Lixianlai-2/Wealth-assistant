<template>
  <div>
    <layout>
      <div class="navBar">
        <icon class="leftIcon" name="left"></icon>
        <span class="title">编辑标签</span>
        <span class="rightIcon"></span>
      </div>
      <div class="Remarker-wrapper">
        <Remarker fieldName="标签名" holderName="请输入标签" />
      </div>

      <div class="button-wrapper">
        <Button @click.native="deleteTag">删除标签</Button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { TagListModel } from "@/models/tagListModel";
// import Remarker from "@/components/Money/Remarker.vue";
import Remarker from "../components/Money/Remarker.vue";
import Button from "../components/Money/Button.vue";

@Component({
  components: {
    Remarker,
    Button,
  },
})
export default class EditLabel extends Vue {
  deleteTag() {
    alert("delete 生效了");
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
  }
  .leftIcon {
    // border: 1px solid red;
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.Remarker-wrapper {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}

.delete-btn {
  border: 1px solid blue;
  color: red;
}
</style>
