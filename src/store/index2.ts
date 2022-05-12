// import { recordListModel } from "@/models/recordListModel";
// import { TagListModel } from "@/models/tagListModel";
import recordStore from "./recordStore";
import tagStore from "./tagStore";

const store = {
  ...recordStore,
  ...tagStore,

  //   recordList: recordListModel.fetch(),
  //   createRecord: (record: RecordType) => recordListModel.create(record),

  //   // ----------------
  //   // tag store
  //   tagList: TagListModel.fetch(),
  //   createTag: (name: string) => {
  //     // 存储新增的数据，生成新的tag类型，为用户输入的result自动匹配了id，在this.data中形成了新的数组
  //     const message = TagListModel.create(name);
  //     if (message === "success") {
  //       console.log("添加成功");
  //     } else {
  //       alert("标签不能重复哦");
  //     }
  //   },
  //   removeTag: (id: string) => {
  //     return TagListModel.remove(id);
  //   },
  //   updateTag: (id: string, name: string) => {
  //     return TagListModel.update(id, name);
  //   },
};

export default store;
