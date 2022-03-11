const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginBtnClick(){
  console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);