// import { recordListModel } from "@/models/recordListModel";
import clone from "@/lip/clone";

let localStorageKeyName = "recordList";
// let recordList = [] as RecordType[];

const recordStore = {
  recordList: [] as RecordType[],
  fetchRecord() {
    this.recordList = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordType[]; // 强制指定类型

    // 这里一定要返回它，因为我要将其赋值给其他变量
    return this.recordList;
  },
  saveRecord() {
    return window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.recordList)
    );
  },
  createRecord(record: RecordType) {
    const record2: RecordType = clone(record);
    // const record2: RecordType = this.cloneRecordDeep(record);
    record2.CreateDate = new Date();
    this.recordList.push(record2);
    this.saveRecord();
  },
};

// 这里需要自动fetch一下
recordStore.fetchRecord();

export default recordStore;
