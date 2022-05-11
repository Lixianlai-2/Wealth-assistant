// 这个model是用来处理Money.vue中的numberPad的
import clone from "@/lip/clone";

let localStorageKeyName = "recordList";

const recordListModel = {
  data: [] as RecordType[],
  fetch() {
    const x = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordType[]; // 强制指定类型

    return x;
  },
  save(value: RecordType[]) {
    return window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(value)
    );
  },
  cloneRecordDeep(value: RecordType | RecordType[]) {
    let deepCloneRecord: RecordType = JSON.parse(JSON.stringify(value));
    deepCloneRecord.CreateDate = new Date();
    return deepCloneRecord; //记得return
  },
  create(record: RecordType) {
    const record2: RecordType = clone(record);
    record2.CreateDate = new Date();
    // 直接得到fetch后的数据，直接读取this.data那么就是空数组
    this.fetch().push(record2);
  },
};

// 暴露模块
export { recordListModel };
