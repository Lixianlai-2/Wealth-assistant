import Vue from "vue";
import Vuex from "vuex";
import clone from "@/lip/clone";
import createId from "@/lip/idCreator";
// import router from "@/router";

// 因为Vuex实际上是插件，所以需要use
// 相当于Vue.prototype.$store = store3 所以其他地方如果使用state.$store就相当于store3
Vue.use(Vuex);

const store3 = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined,
  } as RootState,

  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordItem[];
    },
    saveRecord(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      // const record2: RecordItem = state.cloneRecordDeep(record);
      // toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。
      record2.CreateDate = new Date().toISOString();
      state.recordList.push(record2);
      // 使用对象中的其他方法
      store3.commit("saveRecord");
    },

    // -----------------------------
    // store tags
    setCurrentTag(state, id: string) {
      // 将数据库中的id与路径id相同的对象内容赋值给currentTag。如果当前路径不存在于数据库，会将undefined传给state.currentTag
      state.currentTag = state.tagList.filter((t) => t.id === id)[0];
    },
    fetchTags(state) {
      // 注意要赋值给state.tagList
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      ); // 得到字符串，解析为string[]
      if (!state.tagList || state.tagList.length === 0) {
        store3.commit("createTags", "吃饭");
        store3.commit("createTags", "旅游");
        store3.commit("createTags", "衣服");
        store3.commit("createTags", "游戏");
      }
    },
    saveTags(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
    // tag store
    createTags(state, name: string) {
      if (!name) return;
      // 返回的内容形成一个新的数组,里面都是name字符串
      const namesArr = state.tagList.map((obj) => obj.name);
      // 如果用户输入的标签name在数据库中已经存在了
      if (namesArr.indexOf(name) >= 0) {
        alert("标签不能重复哦");
        return;
      }

      // 把number变成字符串数字
      const id = createId().toString();
      // 没有重复的就添加到data中
      state.tagList.push({ id: id, name: name });
      store3.commit("saveTags");
    },
    updateTags(state, { id, name }) {
      // 返回对象的id数据
      const idList = state.tagList.map((item) => item.id); //返回全是id的数组
      // 如果用户传入的id（也就是页面上edit/路径id)存在于数据库，执行下面的操作
      if (idList.indexOf(id) >= 0) {
        const namesArr = state.tagList.map((item) => item.name); //返回基于数据库的namesArr数组
        // 如果用户传入的name跟数据库的name一样
        if (namesArr.indexOf(name) >= 0) {
          // 只是提示
          alert("标签重复了");
        } else {
          // 找到路径id跟数据库中的id相同的那个对象，为其设置name时
          const tag = state.tagList.filter((item) => item.id === id)[0];
          // 改变同一个id的那个对象的name属性，也就是传入新的值，因为地址相同，所以相当于this.data中的响应数据也改变了
          tag.name = name;
          // 然后保存
          store3.commit("saveTags");
        }
      }
    },
    removeTags(state, id) {
      // 这里设置为-1是为了避免后面的splice起作用
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        // 判断参数id跟数据库中id是否相等，如果相等，让index等于i,也就是得到相同id位置的index
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      // 根据index删除那个数据对象
      state.tagList.splice(index, 1);
      // 保存数据
      store3.commit("saveTags");
      // router.back();
    },
  },
});

export default store3;
