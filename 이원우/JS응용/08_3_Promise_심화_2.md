## *비동기 프로그래밍(3)

### 1) Promise + 지연평가

- take와 map은 기본적으로 Promise를 이용해 비동기로 처리해주는 로직이 내부에 필요하다.
- 그렇기에 map에서는 받은 함수를 Promise인지 판별해 then을 통해 값을 가져올 수 있게 해줘야하고, take 또한 마찬가지로 비동기 상황에서 연산의 순서를 보장하는 then을 재귀를 통해 해결할 수 있다.

```js
	 go(
      [1, 2, 3],
      L.map(a => Promise.resolve(a + 10)),
      take(2),
      log);
    go(
      [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
      L.map(a => a + 10),
      take(2),
      log);
    go(
      [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
      L.map(a => Promise.resolve(a + 10)),
      take(2),
      log);
    go(
      [1, 2, 3],
      map(a => Promise.resolve(a + 10)),
      log);
    go(
      [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
      map(a => a + 10),
      log);
    go(
      [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
      map(a => Promise.resolve(a + 10)),
      log);
```

- then으로만 재귀 없이 처리해준다면, go를 통한 연산 중간에 비동기 연산을 하면, 그 아래의 모든 연산이 then으로 비동기적으로 묶여버린다. 그렇기에 재귀를 통해 Promise 구문의 연산이 끝나면, **재귀를 통해 다음 구문이 Promise인지 즉시 판단**해줄 수 있다.



### 2) Kleisli Composition - L.filter, filter, nop, take

- 세이프 코딩을 하기위해선 Promise를 통해 비동기적으로 반환하는 값이 조건에 해당하지 않으면 reject를 넘겨 다음 `then`이 아닌 `catch`로 흘러간다는 보장이 있어야한다. 
- 그렇기에 아래의 코드를 보면, 1은 문제가 없지만 2는 filter에서 `a % 2`에서 걸리므로 reject를 반환하고 다음 L.map 등을 모두 지나쳐 `take`안에서 catch를 통해 미리 reject에 담아놓은 `nop` 이라는 표시를 받았다면 다음으로 넘어가 3에 대한 연산을 시작한다.

- 즉, 평가에 가까운 `take`  `log` 등의 연산에서 reject를 통해 빠져나온 연산을 받아 재귀를 통해 다음 연산으로 넘기도록 처리해줘야 정상적으로 작동한다.

```js
<script>
  go([1, 2, 3, 4, 5, 6],
    L.map(a => Promise.resolve(a * a)),
    // L.map(a => a * a),
    filter(a => Promise.resolve(a % 2)),
    // L.map(a => a * a),
    /*L.map(a => {
      log(a);
      return a * a;
    }),
    L.map(a => {
      log(a);
      return a * a;
    }),*/
    // take(4),
    /*log*/);
</script>

## reduce에서 nop 지원

<script>
  go([1, 2, 3, 4, 5],
    L.map(a => Promise.resolve(a * a)),
    L.filter(a => Promise.resolve(a % 2)),
    reduce(add)/*,
    log*/);
</script>

<script>
  go([1, 2, 3, 4, 5, 6, 7, 8],
    L.map(a => {
      log(a);
      return new Promise(resolve => setTimeout(() => resolve(a * a), 1000))
    }),
    L.filter(a => {
      log(a);
      return new Promise(resolve => setTimeout(() => resolve(a % 2), 1000))
    }),
    take(2),
    reduce(add),
    log);
</script>
```

