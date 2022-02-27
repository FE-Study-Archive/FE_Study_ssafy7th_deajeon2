# 20220227 Vanilla_JS



### #2.10 Recap 2

```js
Calculator = {
  add: function(a, b){
    console.log(a + b);
  },
  minus: function (a, b){
    console.log(a - b);
  },
  devide: function(a, b){
    console.log(a / b);
  },
  powerof: function(a, b){
    console.log(a ** b);
  },
}

Calculator.add(3, 4);
Calculator.minus(3, 4);
Calculator.devide(3, 4);
Calculator.powerof(3, 4);
```



### #2.13 Conditionals



* 프롬프트 입력

```js
const age = prompt("How old are you?");
```



* Int형 변환
  * parseInt()

* NaN 체크
  * isNaN()



### #3.0 The Document Object



* JS에서 html 내용을 읽어올 수 있고, 변경할 수 있다.

* document = 현재 보고있는 웹페이지의 시작점



### #3.1 HYML in javascript



* Id값으로 element 가져오기

```python
document.getElementById("title")
```



### #3.2 Searching For Elements



* 쿼리를 통해 요소 가져오기 (첫번째 요소만 가져온다.)
* css 선택자를 이용해서 불러온다.

```JS
const title = document.querySelector(".hello h1");
```



* 퀴리를 통해 모든 요소 가져오기 (배열 형태로 반환)

```JS
const title = document.querySelectorAll(".hello h1");
```



### #3.3 Events



* 이벤트 발생시 실행할 함수

```js
const title = document.querySelector("#title h1");

function handleTitleClick(){
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
```





### CSS in JS



* 클래스 포함 여부
* 클래스 제거
* 클래스 추가

```js
function handleTitleClick(){
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass)
  } else {
    h1.classList.add(clickedClass);
  }
}
```

* class 추가/제거

```js
h1.classList.toggle("clicked");
```

