const toDoForm = document.querySelector(".js-toDoForm");
const ToDoInput = toDoForm.querySelector("input");
const ToDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.className = "toDoDeleteBtn";
  span.innerText = text;
  span.className = "toDoContents font-style";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  ToDoList.appendChild(li);
  const toDoobj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoobj);
  saveToDos();
}

function toDohandleSubmit(event) {
  event.preventDefault();
  const currentToDoValue = ToDoInput.value;
  paintToDo(currentToDoValue);
  ToDoInput.value = "";
}

function loadToDo() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", toDohandleSubmit);
}

init();
