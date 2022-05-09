let localStorageKeyName = "tagList";

// Tag类型的的对象
type Tag = {
  id: string;
  name: string;
};

type TagList = {
  data: Tag[]; // 包含对象的数组
  fetch: () => Tag[];
  save: () => void;
  create: (name: string) => "success" | "duplicate";
};

const TagListModel: TagList = {
  data: [], //包含Tag类型对象的数组

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
    // 返回的内容形成一个新的数组
    const names = this.data.map((item) => item.name); // 包含string的数组
    // 如果标签中有重复的
    if (names.indexOf(name) >= 0) {
      return "duplicate";
    } else {
      // 没有重复的就添加到data中
      this.data.push({ id: name, name: name });
      this.save();
      return "success";
    }
  },
};

export { TagListModel };
// 暴露模块
