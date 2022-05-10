<template>
  <div>
    <layout>
      <div class="navBar">
        <icon class="leftIcon" name="left"></icon>
        <span class="title">编辑标签</span>
        <span class="rightIcon"></span>
      </div>
      <div class="Remarker-wrapper">
        <Remarker
          class="remark"
          :value="tag.name"
          fieldName="标签名"
          holderName="请输入标签"
        />
      </div>

      <div class="button-wrapper">
        <!-- <Button>删除标签</Button> -->
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
  tag?: { id: string; name: string } = undefined;
  // tag: Tag = undefined;

  created() {
    // 得到edit/路径id
    // 后面与从数据库中得到的内容对比跳转
    console.log("无论edit后面的数字是几，这里都可以运行");
    const id = this.$route.params.id;
    TagListModel.fetch();
    // tags是包含Tag类型的数组，而Tag是对象
    const tags = TagListModel.data;
    // 得到路径id与数据库id相等的那个对象（也就是Tag类型）
    const tag = tags.filter((tag) => tag.id === id)[0];
    if (tag) {
      console.log(tag);
      this.tag = tag;
    } else {
      // 如果没有合适的就跳转到404页面
      this.$router.replace("/404");
    }
  }

  deleteTag() {
    alert("delete 生效了");
  }
}
// tag?: { id: string; name: string } = undefined;

//   created() {
//     const id = this.$route.params.id;
//     TagListModel.fetch();
//     const tags = TagListModel.data;
//     const tag = tags.filter((t) => t.id === id)[0];
//     if (tag) {
//       this.tag = tag;
//     } else {
//       this.$router.replace("/404");
//     }
//   }

// }
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
  // border: 1px solid red;
  margin-top: 8px;
}

.remark {
  // border: 10px solid blue;
  background: white;
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
