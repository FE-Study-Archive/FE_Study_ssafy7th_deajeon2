const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기
// string을 저장할 때 사용
// 중요한 정보를 담지 않은 경우
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
  event.preventDefault();                           // 1. 기본동작 실행 제거
  const username = loginInput.value;  
  loginForm.classList.add(HIDDEN_CLASSNAME);        // 2. loginForm .hidden 부여 -> 안 보이게

  // greeting.innerText = "Hello " + username;      
  greeting.innerText = `Hello ${username}!`         // 3. h1의 내용으로 Hello + username 부여
  greeting.classList.remove(HIDDEN_CLASSNAME);      // 4. greeting .hidden 제거 -> 보이게
}

function handleLinkClick(event){
  event.preventDefault();
  console.log(event);
  alert('click!');
}

loginForm.addEventListener("submit", onLoginSubmit)