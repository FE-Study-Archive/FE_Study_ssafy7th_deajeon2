# 20220311 Vanilla_JS



### #4.1

* 필수 항목 및 조건 추가하기

  ```html
  <input required maxlength="15" type="text" placeholder="What is your name?">
  ```

  

### #4.2

* 함수명 ()
  * 바로 실행
* 함수명만 적을시
  * 조건 만족시 실행



### #4.3

* 브라우져가 함수를 실행한다.



### #4.4

* 문자열에 변수 집어 넣기

```js
greeting.innerText = "Hello " + username;
greeting.innerText = `Hello ${username}`;
```

* 클래스 추가/제거하기

```js
loginForm.classList.add(HIDDEN_CLASSNAME);
greeting.classList.remove(HIDDEN_CLASSNAME);
```



### #4.5

* local에 저장하기

  ```js
  localStorage.setItem("username", username)
  ```

  

### #5.0

* setInterval(sayHello, 5000)
  * 함수를 지정된 시간마다 실행



### #5.1

* setTimeout(sayHello, 5000)
  * 함수를 지정된 시간 후 실행 (1번)

* new Date().getHours()
  * 현재 시각 가져오기



### #5.2

* 문자열 2자리 채우기
  * "1".padStart(2, "0")
  * "01"



### #6.0

* Math.round(n)
  * 반올림
* Math.ceil(n)
  * 올림
* Math.floor(n)
  * 버림



### #6.1

* html에 태그 및 속성 생성하기

  ```js
  const bgImage = document.createElement("img");
  
  bgImage.src = `img/${chosenImage}`;
  
  document.body.appendChild(bgImage);
  ```

  * append는 맨 앞에
  * prepend는 맨 뒤에



### #7.1

* li 태그 안에 span 태그 넣기

```js
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
span.innerText = newTodo;
toDoList.appendChild(li);
```



### #7.2

* 태그 지우기

  ```js
  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
  }
  ```

  
