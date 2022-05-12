// 这个model是用来处理Money.vue中的numberPad的

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
  // save(value: RecordType[]) {
  //   return window.localStorage.setItem(
  //     localStorageKeyName,
  //     JSON.stringify(value)
  //   );
  // },
  save() {
    return window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.data)
    );
  },
  cloneRecordDeep(value: RecordType | RecordType[]) {
    let deepCloneRecord: RecordType = JSON.parse(JSON.stringify(value));
    deepCloneRecord.CreateDate = new Date();
    return deepCloneRecord; //记得return
  },
  create(record: RecordType) {
    // const record2: RecordType = this.cloneRecordDeep(record);
    // record2.CreateDate = new Date();
    // // 直接得到fetch后的数据，直接读取this.data那么就是空数组
    // this.fetch().push(record2);
    const record2: RecordType = this.cloneRecordDeep(record);
    record2.CreateDate = new Date();
    this.data.push(record2);
    this.save();
  },
};

// 暴露模块
export { recordListModel };
