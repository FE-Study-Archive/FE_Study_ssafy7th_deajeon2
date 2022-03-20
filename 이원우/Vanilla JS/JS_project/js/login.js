const LoginForm = document.querySelector('#login-form');
const LoginInput = document.querySelector('#login-form input');
const LoginApproved = document.querySelector('#loginApproved');
const ButtonStyle = document.querySelector('#login-form button');

function loginSubmit(event) {
  event.preventDefault();
  LoginForm.classList.add('hidden');
  const loginID = LoginInput.value;
  localStorage.setItem('loginID', loginID); //loginID 문자열은 값의 id임.
  loginSucceed(loginID);
}


function loginSucceed(user) {
  LoginApproved.innerText = `반갑습니다 ${user}님`;
  LoginApproved.classList.remove('hidden');
}

const localLoginID = localStorage.getItem('loginID');
LoginApproved.classList.add("TextGreeting");

if (localLoginID === null) {
  LoginForm.classList.remove('hidden');
  LoginForm.addEventListener("submit", loginSubmit);
} else {
  LoginApproved.classList.remove('hidden');
  LoginApproved.innerText = `반갑습니다 ${localLoginID}님`;
}

ButtonStyle.addEventListener('')