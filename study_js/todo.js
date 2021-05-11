const toDoForm = document.querySelector(".js-toDoForm");
const ToDoInput = toDoForm.querySelector("input");
const ToDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.className = "toDoDeleteBtn";
  const span = document.createElement("span");
  span.innerText = text;
  span.className = "toDoContents font-style";
  li.appendChild(span);
  li.appendChild(delBtn);
  ToDoList.appendChild(li);
}

function toDohandleSubmit(event) {
  event.preventDefault();
  const currentToDoValue = ToDoInput.value;
  paintToDo(currentToDoValue);
  ToDoInput.value = "";
}

function loadToDo() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", toDohandleSubmit);
}

init();
