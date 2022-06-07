## 1. map, filter, reduce

### 1) map

- 모든 값들을 함수의 리턴 값에 해당하는 값으로 대체해 반환

```js
const map = (f, iter) => { //함수와 이터러블을 받아 f함수에 이터러블을 변화시키는 역할을 위임함.
    let res = [];
    for (const p of iter) {
        res.push(f(p));
    }
    return res;
};

map(p => p.name, products); // 객체를 객체의 이름 리스트로 바꿔주는 map 함수

map(el => el.nodeName, document.querySelectorAll('*')); //이게 되네 ;;
//노드 리스트는 이터러블 프로토콜을 따르기 때문



let m = new Map();
m.set('a', 10)
m.set('b', 20);
log(map(([k, a]) => [k, a*2], m));
```

### 2) filter

- 이터러블에서 조건에 해당하는 값들만 모은 이터러블을 반환하는 함수

```js
 const filter = (f, iter) => {
     let res = [];
     for (const a of products) {
         if (f(a)) res.push(a)
     }
 }
 filter(p=>p.price < 20000, products); //리턴을 통해서 함수의 조건에 해당하는 배열 반환
```

### 3) reduce

- 값을 축약하는 함수
- 이터러블 값을 하나로 축약하는 역할
- 재귀적으로 동작함.

```js
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator](); //acc = acc === undefined ? iter[0] : acc; 옵셔널 할거면 이게 맞지 않을까..
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}
```

### 의문 해결

```js
console.log(reduce(add, [1, 2, 3]));
// 이런 경우엔 acc가 배열이되므로 위가 맞음!
```

