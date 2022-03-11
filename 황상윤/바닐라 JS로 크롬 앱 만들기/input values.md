[toc]



# input values



- html 에서 login-form을 만들었다

```html
  <div id="login-form">
    <input type="text" placeholder="What is your name?">
    <button>Log In</button>
    <script src="app.js"></script>
  </div>
```



- app.js에서  login-form을 호출하는 방법이 여러가지 있다



1.

```javascript
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
```



2

```javascript
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
```



