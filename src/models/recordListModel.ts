// 这个model是用来处理Money.vue中的numberPad的
import clone from "@/lip/clone";

let localStorageKeyName = "recordList";

const recordListModel = {
  data: [] as RecordType[],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordType[]; // 强制指定类型

    // 这里一定要返回它，因为我要将其赋值给其他变量
    return this.data;
  },
  save() {
    return window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.data)
    );
  },
  create(record: RecordType) {
    const record2: RecordType = clone(record);
    // const record2: RecordType = this.cloneRecordDeep(record);
    record2.CreateDate = new Date();
    this.data.push(record2);
    this.save();
  },
};

// 暴露模块
export { recordListModel };
