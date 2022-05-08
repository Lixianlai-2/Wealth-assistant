let localStorageKeyName = "recordList";

const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem("recordList") || "[]");
  },
  save(value) {
    return window.localStorage.setItem(localStorageKeyName, value);
  },
};

console.log(typeof window.localStorage.getItem("recordList"));

export default model;
// 暴露模块

// export { model };
