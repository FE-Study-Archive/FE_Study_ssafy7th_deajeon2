# 3장 JSX



## JSX란

* XML과 문법이 유사하여 개발자 경험 개선
* 팀의 생산성 향상
* 문법 오류와 코드량 감소



#### JSX

```jsx
<div>
  <HelloWorld/>
  <br/>
  <a href="#">Great JS Resources</a>
</div>
```



#### JS

```js
React.createElement(
  "div",
  null,
  React.createElement(HelloWorld, null),
  React.createElement("br", null),
  React.createElement(
    "a",
    { href: "#"},
    "Great JS Resources"
  )
)
```



