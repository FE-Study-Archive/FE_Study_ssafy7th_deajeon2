# 20220226 Vanilla_JS



### #1.4 Why JS

* 프론트에서 사용할 수 있는 유일한 프로그래밍 언어
* JS는 브라우저에 내장되어서 나온다.



### #1.5 Why JS 2

* three.js
  * 3d라이브러리

* React Native
  * ios에도 작동하도록 해줌
* ELECTRON
  * 데스크톱 앱개발 가능
* 백엔드
* 3d
  * JS 선택할것
* 실시간
* ml5.js
  * 머신러닝 모델 생성



### #1.6 Online IDE



## ch 2



### #2.0 Your First JS Project



* HTML은 JS와 css를 열기위한 도구
* 브라우저는 HTML을 연다.



### #2.2 Variables



* 콘솔 출력

```js
console.log("Hello");
```



* const (상수, 변경불가)

```js
const a = 5;
```



### #2.3 const and let



* let
  * 업데이트 가능한 변수
  * const는 변경 불가

* var
  * 원한다면 어디서든 업데이트 가능



### #2.4 Booleans



* Data type
  * Bool (파이썬의 True, False)
  * Undefined
  * Null (파이썬의 None)



### #2.5 Arrays



* Array에 요소 추가 (.append)

```js
daysOfWeek.push("sun");
```



### #2.6 Objects



* const는 자체를 변경하려고 할때 에러 발생, 내부 값 변경시엔 문제 X



```js
const player = {
  name : 'Jaehyun',
  points : 10,
  fat : true,
};
console.log(player);
player.fat = false;
console.log(player);
player.lastName = "Park";
console.log(player)
```



### #2.7 Functions Part 1



```js
function sayHello(nameofPerson, age){
  console.log("Hellomy name is " + nameofPerson + " and I'm " + age);
}

sayHello("Jaehyun", 28);
sayHello("Yunkyung", 27);
sayHello("Seunghoon", 26);
```



### #2.7 Functions Part 2



```js
const player = {
  name: "Jaehyun",
  sayHello: function(otherPersonName){
    console.log("hello! " + otherPersonName + " nice to meet you");
  },
};

console.log(player.name);
player.sayHello("Yunkyung");
player.sayHello("Seunghoon");
```

