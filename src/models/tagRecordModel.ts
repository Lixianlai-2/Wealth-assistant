let localStorageKeyName = "tagList";

type TagListModel = {
  data: string[]; // 包含字符串的数组
  fetch: () => string[];
  save: () => void;
  create: (name: string) => "success" | "duplicate";
};

const modelTagRecord: TagListModel = {
  data: [],

  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ); // 得到字符串，解析为string[]
    return this.data;
  },

  // 把data的内容保存到localStorage里面
  save() {
    return window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(this.data)
    );
  },

  create(name) {
    // 如果标签中有重复的
    if (this.data.indexOf(name) >= 0) {
      return "duplicate";
    } else {
      // 没有重复的就添加到data中
      this.data.push(name);
      this.save();
      return "success";
    }
  },
};

export { modelTagRecord };
// 暴露模块
