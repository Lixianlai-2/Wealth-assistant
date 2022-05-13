import createId from "@/lip/idCreator";
let localStorageKeyName = "tagList";

const TagListModel: TagListType = {
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
    // 返回的内容形成一个新的数组,里面都是name字符串
    const names = this.data.map((obj) => obj.name);
    // 如果用户输入的标签name在数据库中已经存在了
    if (names.indexOf(name) >= 0) {
      return "duplicate";
    }

    // 把number变成字符串数字
    const id = createId().toString();

    // 没有重复的就添加到data中
    this.data.push({ id: id, name: name });
    this.save();
    return "success";
  },

  update(id, name) {
    // 返回对象的id数据
    const idList = this.data.map((item) => item.id);
    // 如果用户传入的id（也就是页面上edit/路径id)存在于数据库，执行下面的操作
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map((item) => item.name);
      // 如果用户传入的name跟数据库的name一样
      if (names.indexOf(name) >= 0) {
        return "duplicate";
      } else {
        // 参数id跟数据库中的id相同的那个对象
        const tag = this.data.filter((item) => item.id === id)[0];
        // 改变同一个id的那个对象的name属性，也就是传入新的值，因为地址相同，所以相当于this.data中的响应数据也改变了
        tag.name = name;
        // 这就在修改id了
        // tag.id = name;
        // 保存this.data中修改的数据，也就是将用户输入的input内容记录到数据库总
        this.save();

        return "success";
      }
    } else {
      return "not found";
    }
  },

  remove(id) {
    // 这里设置为-1是为了避免后面的splice起作用
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      // 判断参数id跟数据库中id是否相等，如果相等，让index等于i,也就是得到相同id位置的index
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    // 根据index删除那个数据对象
    this.data.splice(index, 1);
    // 保存数据
    this.save();
    return true;
  },
};

export default {
  // tag store
  tagList: TagListModel.fetch(),
  createTag: (name: string) => {
    // 存储新增的数据，生成新的tag类型，为用户输入的result自动匹配了id，在this.data中形成了新的数组
    const message = TagListModel.create(name);
    if (message === "success") {
      console.log("添加成功");
    } else {
      alert("标签不能重复哦");
    }
  },
  removeTag: (id: string) => {
    return TagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return TagListModel.update(id, name);
  },
};
