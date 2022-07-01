## 2장 React 첫 걸음



## 2.1 엘리먼트 중첩

* ReactDOM.render()에는 하나의 React 엘리먼트만 인자로 전달할 수 있다.
  * Vue와 같이, 최상위에 대해 div로 묶어야 한다.

```react
var h1 = React.createElement('h1', null, 'Hello world!') // h1요소를 React 엘리먼트로 생성하여 변수에 담기
ReactDOM.render( // h1 요소를 ID가 content인 실제 DOM에 렌더링
    React.createElement('div', null, h1, h1), // 세번째 또는 그 이후의 매개변수가 문자열이 아니라면, 새로 생성하는 엘리먼트의 자식 엘리먼트
    document.getElementById('content')
)
```

* createElement()의 첫 번째 매개변수로 두 가지 자료형 입력 가능
  * 문자열로 작성한 일반적인 HTML 태그
    * h1, div, p
  * React 컴포넌트 클래스 객체
    * 대문자로 시작한다.



## 2.2 React 컴포넌트 클래스 생성



### 컴포넌트 클래스

> class NAME extends React.Class
>
> 필수사항: render

```react
let h1 = React.createElement('h1', null, 'Hello world!') // h1요소를 React 엘리먼트로 생성하여 변수에 담기
class HelloWorld extends React.Component { // React 컴포넌트 클래스 정의(이름은 대문자로 시작)
    render() { // 엘리먼트 하나를 반환하는 함수인 render() 메서드 생성
        return React.createElement('div', null, h1, h1)
    }
}
ReactDOM.render( // React 엘리먼트를 ID가 content인 실제 DOM에 넣어준다.
    React.createElement(HelloWorld, null), // 첫 번째 인자로 HelloWorld 클래스를 전달하여 엘리먼트를 생성한다. 이 때 HelloWorld 클래스는 문자열이 아닌 객체다.
    document.getElementById('content')
)
```

* createElement로 문자열이 아닌 객체로 전달하기.



#### 대문자를 사용하는 이유?

* JSX를 사용하기 위해서
  * h1같은 HTML 요소와 <HelloWorld/> 같은 사용자 정의 컴포넌트를 대소문자로 구분.
  * 3장에서 다룰 예정



#### 컴포넌트 클래스의 render() 메서드는 엘리먼트 하나만 반환한다.

* 마찬가지로 최상위는 div 태그로 묶을 것.



#### 컴포넌트 클래스를 이용하여 같은 컴포넌트 여러번 송출하기

```react
let h1 = React.createElement('h1', null, 'Hello world!') // h1요소를 React 엘리먼트로 생성하여 변수에 담기
class HelloWorld extends React.Component { // React 컴포넌트 클래스 정의(이름은 대문자로 시작)
    render() { // 엘리먼트 하나를 반환하는 함수인 render() 메서드 생성
        return React.createElement('div', null, h1, h1)
    }
}
ReactDOM.render( // React 엘리먼트를 ID가 content인 실제 DOM에 넣어준다.
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld),
        React.createElement(HelloWorld),
        React.createElement(HelloWorld)
    ), // 첫 번째 인자로 HelloWorld 클래스를 전달하여 엘리먼트를 생성한다. 이 때 HelloWorld 클래스는 문자열이 아닌 객체다.
    document.getElementById('content')
)
```



## 2.3 React 속성 사용하기

* 속성은 컴포넌트 내부에서 변경할 수 없는 값

* 부모 컴포넌트는 자식의 생성 시점에 속성을 할당.

  ```react
  <TAG_NAME PROPERTY_NAME=VALUE/>
  ```



#### React 속성의 용도

* 일반적인 HTML 요소의 속성
  * HTML 속성과 대조하여 일치하는것이 있으면 HTML 속성으로 사용
* this.props의 값
  *  PROPERTY_NAME이면 컴포넌트 클래스에서 this.props.PROPERTY_NAME으로 접근
  * 같은 클래스의 서로 다른 인스턴스에 다른 데이터를 넘겨줄 수 있다.

```react
let h1 = React.createElement('h1', null, 'Hello world!') // h1요소를 React 엘리먼트로 생성하여 변수에 담기
class HelloWorld extends React.Component { // React 컴포넌트 클래스 정의(이름은 대문자로 시작)
    render() { // 엘리먼트 하나를 반환하는 함수인 render() 메서드 생성
        return React.createElement(
            'h1',
            this.props, // HelloWorld 컴포넌트로 전달한 모든 속성을 createElement를 호출할 때 <h1> 엘리먼트로 전달한다.
            'Hello ' + this.props.frameworkName + ' world!!!'
        )
    }
}
ReactDOM.render( // React 엘리먼트를 ID가 content인 실제 DOM에 넣어준다.
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
            id: 'ember',
            frameworkName: 'Ember.js',
            title: 'A framework for creating ambitious web applications.'
        }),
        React.createElement(HelloWorld, {
            id: 'backbone',
            frameworkName: 'Backbone.js',
            title: 'Backbone.js gives structure to web applications...'
        }),
        React.createElement(HelloWorld, {
            id: 'angular',
            frameworkName: 'Angular.js',
            title: 'Superheroic JavaScript MVW Framework'
        })
    ), // 첫 번째 인자로 HelloWorld 클래스를 전달하여 엘리먼트를 생성한다. 이 때 HelloWorld 클래스는 문자열이 아닌 객체다.
    document.getElementById('content')
)
```

![image](https://user-images.githubusercontent.com/97648026/173400025-8e9aa5d9-08e6-45c5-a234-75fb7c1efbf6.png)