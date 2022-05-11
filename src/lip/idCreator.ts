// parseInt，将字符串数字变成number类型
let id: number = parseInt(window.localStorage.getItem("_idMax") || "0") || 0;
console.log(window.localStorage.getItem("_idMax"));

function createId() {
  id++;
  // 把当前得到的id增加后，存入本地仓库中
  window.localStorage.setItem("_idMax", id.toString());
  return id;
}

export default createId;
