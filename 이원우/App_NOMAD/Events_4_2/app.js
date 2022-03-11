const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(tomato) {
  // console.log("hello", loginInput.value) //value값을 가져옴.
  tomato.preventDefault(); //이 함수는 submit하면 새로고침하는 등 모든 브라우저의 행위를 멈춤.
  const username = loginInput.value;
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long");
  // }
  // console.log(username);
  console.log(tomato);
}

// loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginBtnClick);

// onLoginBtnClick(argument)) ->>> 뭔가 얻어내는데 우린 ()라고 생각함.


// ****** 함수 안에서 일어나는게 사실 tomato같이 argument를 받아서 넘겨주는데 비었다고 간과할 수 있음.