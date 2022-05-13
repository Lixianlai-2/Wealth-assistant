import Vue from "vue";
import Vuex from "vuex";

// 因为Vuex实际上是插件，所以需要use
// 相当于Vue.prototype.$store = store3 所以其他地方如果使用this.$store就相当于store3
Vue.use(Vuex); //

const store3 = new Vuex.Store({
  state: {
    count: 0,
  },
  // mutations相当于methods，state相当于data
  mutations: {
    increment(state, n: number) {
      state.count += 1;
      n = 1;
      console.log(++n);
    },
  },
});

store3.commit("increment");
console.log(store3.state.count);

export default store3;
