import Vue from "vue";
import Vuex from "vuex";
import clone from "@/lip/clone";
import createId from "@/lip/idCreator";

// 因为Vuex实际上是插件，所以需要use
// 相当于Vue.prototype.$store = store3 所以其他地方如果使用state.$store就相当于store3
Vue.use(Vuex); //

const store3 = new Vuex.Store({
  state: {
    recordList: [] as RecordType[],
    tagList: [] as Tag[],
  },
  // mutations相当于methods，state相当于data
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordType[];

      // 这里一定要返回它，因为我要将其赋值给其他变量
      return state.recordList;
    },
    saveRecord(state) {
      return window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
    createRecord(state, record: RecordType) {
      const record2: RecordType = clone(record);
      // const record2: RecordType = state.cloneRecordDeep(record);
      record2.CreateDate = new Date();
      state.recordList.push(record2);
      // 使用对象中的其他方法
      store3.commit("saveRecord");
    },

    // -----------------------------
    // store tags
    fetchTags(state) {
      // 注意要赋值给state.tagList
      return (state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      )); // 得到字符串，解析为string[]
    },
    saveTags(state) {
      return window.localStorage.setItem(
        "tagList",
        JSON.stringify(state.tagList)
      );
    },
    // tag store
    createTags(state, name: string) {
      // 返回的内容形成一个新的数组,里面都是name字符串
      const names = state.tagList.map((obj) => obj.name);
      // 如果用户输入的标签name在数据库中已经存在了
      if (names.indexOf(name) >= 0) {
        alert("标签不能重复哦");
        return "duplicate";
      }

      // 把number变成字符串数字
      const id = createId().toString();
      // 没有重复的就添加到data中
      state.tagList.push({ id: id, name: name });
      store3.commit("saveTags");
      console.log("添加成功");
      return "success";
    },
  },
});
//   removeTags(state, id: string) {
//     // 这里设置为-1是为了避免后面的splice起作用
//     let index = -1;
//     for (let i = 0; i < this.tagList.length; i++) {
//       // 判断参数id跟数据库中id是否相等，如果相等，让index等于i,也就是得到相同id位置的index
//       if (state.tagList[i].id === id) {
//         index = i;
//         break;
//       }
//     }
//     // 根据index删除那个数据对象
//     state.tagList.splice(index, 1);
//     // 保存数据
//     store3.commit("saveTags");
//     return true;
//   },
//   updateTags(state, payload: { id: string; name: string }) {
//     // 返回对象的id数据
//     const idList = state.tagList.map((item) => item.id);
//     // 如果用户传入的id（也就是页面上edit/路径id)存在于数据库，执行下面的操作
//     if (idList.indexOf(payload.id) >= 0) {
//       const names = state.tagList.map((item) => item.name);
//       // 如果用户传入的name跟数据库的name一样
//       if (names.indexOf(payload.name) >= 0) {
//         return "duplicate";
//       } else {
//         // 参数id跟数据库中的id相同的那个对象
//         const tag = state.tagList.filter((item) => item.id === payload.id)[0];
//         // 改变同一个id的那个对象的name属性，也就是传入新的值，因为地址相同，所以相当于state.tagList中的响应数据也改变了
//         // tag.name = name;
//         // 这就在修改id了
//         // tag.id = name;
//         // 保存state.tagList中修改的数据，也就是将用户输入的input内容记录到数据库总
//         // state.saveTags();

//         return "success";
//       }
//     } else {
//       return "not found";
//     }
//   },
// },
// )

export default store3;
