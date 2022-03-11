
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function handleLoginBtnClick() {
//   const username = loginInput.value;
//   // 아이디 유효성 검사
//   // loginInput.value 값이 비어 있으면 실행한다.
//   // if (username === "") {
//   //   alert("Please write your name");
//   // // username이 15보다 크면 실행
//   // } else if(username.length > 15) {
//   //   alert("Your name is too long.")
//   // }
//   console.log(username)
  
// }

// loginButton.addEventListener("click", handleLoginBtnClick)


const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // console.log(loginInput.value);
    // console.log(username);
    // greeting.innerText = "hello " + username;
    paintGreetings(savedUsername)
}




// const link = document.querySelector("a");

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }


// link.addEventListener("click", handleLinkClick)

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