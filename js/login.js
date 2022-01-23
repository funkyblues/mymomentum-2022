const loginForm = document.querySelector(".prompt .non-login");
const loginInput = document.querySelector(".prompt .non-login input");
const hiddenForm = document.querySelector(".prompt .hidden");
const greeting = document.querySelector(".greeting .center-col");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const SUBMITTED = "submitted";
const SHOW = "show";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(SUBMITTED);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Greetings, ${username}!`;
  hiddenForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(SHOW);
  hiddenForm.classList.add(SHOW);
}

if (savedUsername === null) {
  loginInput.classList.remove(SHOW);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.remove(SUBMITTED);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
