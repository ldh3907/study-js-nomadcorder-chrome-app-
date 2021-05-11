const form = document.querySelector(".js-form");
const inputText = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const Showing = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSumbit(event) {
  event.preventDefault();
  const currentValue = inputText.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(Showing);
  form.addEventListener("submit", handleSumbit);
}

function paintGreeting(text) {
  form.classList.remove(Showing);
  greeting.classList.add(Showing);
  greeting.innerText = `Hello ${text} !`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
