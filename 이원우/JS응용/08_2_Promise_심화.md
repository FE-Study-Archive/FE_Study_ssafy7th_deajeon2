## *비동기 프로그래밍(2)

### 1) 모나드

- 모나드란?
  - 아래와 같은 함수의 합성을 안전하게 할 수 있도록하는 개념
  - Promise를 이용해 비동기 환경에서 함수를 안전하게 합성하도록 도와줌.

```js
//function1 . function2 합성 === function1(function2(x))

const g = a => a + 1;
const f = a => a * a;

f(g(1));
log(f(g())); //에러 발생 , 유저가 의도치않은 값을 할당할 때, 원치않는 결과를 일으키므로 안전한 함수가 아님

[1].map(g).map(f).forEach(r => log(r)) //실제 map까지의 결과가 존재하면 forEach를 통해 결과를 도출함
```

- 위의 코드를 보면 `log(f(g()));`는 원치 않는 결과에 대해 log를 통해 평가까지 이루어지므로 안전하지 않음.
- 하지만, map으로 함수를 합성하고, forEach로 결과를 평가하면, log로 의도치않은 평가를 일으키지 않게 catch 해줄 수 있다는 것이 특징이다.



### 2) Promise의 함수 합성

- 비동기 상황에서도 내가 원하는 연산 다음 시점에 함수를 적절히 합성하기위한 안전한 방법
- 사실 생각해보면, 자연스럽게 많은 사람들이 axios 요청과 이후에 일어날 일들을 정의하는 방식으로 사용하고 있었을 것이다. 하지만, 함수 합성에 대한 안전 장치의 개념으로 미리 알고 사용하는 것과 모르는 것은 다르다.

```js
const g = a => a + 1;
const f = a => a * a;

Promise.resolve(1).then(g).then(f).then(r => log(r)) //비동기 상황에서 Promise의 then을 활용한 함수 합성
Promise.resolve().then(g).then(f).then(r => log(r)) //NaN 출력 . 의도치 않은 값을 catch할 수 있음
```



### 3) Kleisli Composition

- Promise는 Kleisli Composition을 지원
- 오류가능성이 있는 함수 합성을 안전하게하는 규칙

- 외부의 세상(Entity)와 서로 의존 관계인 경우가 많다. 올바르지 않은 인자를 받을 경우 그리고, 올바른 인자를 받아도 함수의 상태에 따라서 전달할 수 없는 경우를 안전하게 해결하기 위한 방법

```js
//f(g(x)) = f(g(x)) => g함수의 변형 혹은 값이 없어지는 경우엔 식이 성립하지 않을 수 있음.
//f(g(x)) = g(x) => g에서 에러가 난 경우엔 g(x)와 f(g(x))의 결과가 같도록 합성하는 것이 Kleisli Composition

var users = [
    { id: 1, name: 'aa'},
    { id: 2, name: 'bb'},
    { id: 3, name: 'cc'},
];

const getUserById = id => 
	find(u => u.id == id, users);

const f = ({name}) => name;
const g = getUserById;
const fg = id => f(g(id));

fg(2); // g에서 find를 통해 유저를 찾고 f에서 유저 이름을 찾아냄


const r = fg(2); //결과 출력
users.pop()
users.pop() //두번의 pop이 일어날 시(회원 탈퇴 등)에 기존 fg(2)의 결과인 name = 'bb'의 객체가 사라짐.

const r2 = fg(2); //결과 없음 null


//#################################### Kleisli Composition


const getUserById = id => 
	find(u => u.id == id, users) || Promise.reject('존재하지 않아요.'); //Promise의 reject를 활용 안전장치를 만듬.

const f = ({name}) => name;
const g = getUserById;


const fg = id => Promise.resolve(id).then(g).then(f).catch(a => a)
//resolve에서 reject이면 then을 건너뛰고 catch에서 '존재하지 않아요'를 정리해 띄워준다.
//g(id)를 실행하면 Promise{ <rejected>: "존재하지 않아요"}가 뜨고 fg를 실행하면 해당 "존재하지 않아요"만 가져와 catch에서 출력한다.

users.pop()
users.pop()

fg(2).then(log); //존재하는 id가 아닌 2가 들어와있으므로 '존재하지 않아요' 실행
```

