const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");
let todo = [];

//將待辦事項渲染到畫面上
function renderTodo () {
  let str = "";
  todo.forEach((item,index) => {
    str += `<li class="mt-1">${item.content} <input type="button" class="btn btn-outline-danger btn-sm" id="delete" value="刪除" data-index="${index}"></li>`;
  });
  list.innerHTML = str;
};

//新增待辦事項
save.addEventListener('click',e => {
  if (txt.value === "") {
    alert("請輸入待辦事項！");
    return;
  } else {
    let obj = {};
    obj.content = txt.value;
    todo.push(obj);
    txt.value = "";
    renderTodo();
  }
});

//刪除待辦事項
list.addEventListener('click',e => {
  if (e.target.getAttribute("id") !== "delete") {
    return;
  } else {
    let index = e.target.getAttribute("data-index");
    todo.splice(index,1);
    alert("刪除成功！");
    renderTodo();
  };
});
