import Vue from "vue";
import Vuex from "vuex";
import clone from "@/lip/clone";
let localStorageKeyName = "recordList";

// 因为Vuex实际上是插件，所以需要use
// 相当于Vue.prototype.$store = store3 所以其他地方如果使用state.$store就相当于store3
Vue.use(Vuex); //

const store3 = new Vuex.Store({
  state: {
    recordList: [] as RecordType[],
  },
  // mutations相当于methods，state相当于data
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem(localStorageKeyName) || "[]"
      ) as RecordType[];

      // 这里一定要返回它，因为我要将其赋值给其他变量
      return state.recordList;
    },
    saveRecord(state) {
      return window.localStorage.setItem(
        localStorageKeyName,
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
  },
});

export default store3;
