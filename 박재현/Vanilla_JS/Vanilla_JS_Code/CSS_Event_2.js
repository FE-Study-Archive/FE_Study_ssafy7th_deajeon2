const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(info){
  info.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(info){
  alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)