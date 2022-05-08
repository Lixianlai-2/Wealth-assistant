let localStorageKeyName = "recordList";

const model = {
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
};

console.log(typeof model.fetch());

export { model };
// 暴露模块

// export { model };
