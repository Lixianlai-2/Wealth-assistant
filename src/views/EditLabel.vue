<template>
  <div>
    <layout>
      <div class="navBar">
        <icon class="leftIcon" name="left" @click.native="goBack"></icon>
        <span class="title">编辑标签</span>
        <span class="rightIcon"></span>
      </div>
      <div class="Remarker-wrapper">
        <Remarker
          class="remark"
          :value="currentTag.name"
          fieldName="标签名"
          holderName="请输入标签"
          @update:value="updateTag"
        />
      </div>

      <div class="button-wrapper">
        <!-- <Button>删除标签</Button> -->
        <Button @click.native="remove">删除标签</Button>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

// import Remarker from "@/components/Money/Remarker.vue";
import Remarker from "../components/Money/Remarker.vue";
import Button from "../components/Money/Button.vue";
// import this.$store from "@/this.$store/index2";

@Component({
  components: {
    Remarker,
    Button,
  },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
  }

  // 声明周期钩子，可以调用函数
  created() {
    // 得到当前页面的路径id
    const id = this.$route.params.id;
    // 每次加载页面都重新获取最新的数据，重新渲染页面
    this.$store.commit("fetchTags");
    // 将数据库中的id与路径id相同的对象内容赋值给currentTag(可能不存在，会赋值为null)
    this.$store.commit("setCurrentTag", id);

    // 如果currentTag不存在，那么就代表
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }

  updateTag(name: string) {
    if (this.currentTag) {
      // 判断当前路径id是否存在于数据库id中，如果存在就判断标签名是否重复并更改对应数据库内容，如果不存在就返回404页面
      this.$store.commit("updateTags", {
        id: this.currentTag.id,
        name,
      });
    }
  }

  remove() {
    alert("成功删除标签！");
    if (this.currentTag) {
      this.$store.commit("removeTags", this.currentTag.id);
    }
    this.goBack();
  }

  goBack() {
    this.$router.back();
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
