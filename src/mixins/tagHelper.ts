import Vue from "vue";
import Component from "vue-class-component";

@Component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt("请输入您要添加的标签");
    if (name) this.$store.commit("createTags", name);
  }
}

export default TagHelper;
