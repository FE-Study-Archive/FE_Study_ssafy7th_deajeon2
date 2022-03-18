# 20220315 



## #7.3





## #7.4

* JSON.stringify([1, 2, 3,4])
  * "[1,2,3,4]"
* JSON.parse("[1,2,3,4]")
  * (4) [1, 2, 3, 4]

* Array.forEach(function)
  * array의 item에 대해 매번 function을 실행함

* arrow function

  ```js
  parsedToDos.forEach((item) => console.log("this is the turn of", item))
  ```

  

## #7.5

* Array.filter(function)
  * 새 array를 생성, function의 true 항목은 포함, false 항목은 불포함