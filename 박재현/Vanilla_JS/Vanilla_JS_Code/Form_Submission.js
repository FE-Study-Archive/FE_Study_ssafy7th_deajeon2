const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginBtnClick(){
  const username = loginInput.value;
  if (username ==="") {
    alert("Please write your name");
  } else if(username.length > 15) {
    alert("Your name is too long.")
  }
}

loginButton.addEventListener("click", onLoginBtnClick);