const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginBtnClick(event) {
  event.preventDefault(); 
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault(); // 누르면 링크로 넘어가야하지만 모든 작업을 막음.
  alert("click");
  console.log(event);
}

loginForm.addEventListener("submit", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);
// 이게 실행되면
// handleLinkClick({all the information when the "link" is clicked})

