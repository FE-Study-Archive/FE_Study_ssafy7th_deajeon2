
const loginInput = document.querySelector("#login-form input");

const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(savedUsername)
}


function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername)
}