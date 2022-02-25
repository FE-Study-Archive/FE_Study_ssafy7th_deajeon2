var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
function sum() {
  return this.first+this.second;
}
// sum(); 이랑 똑같음.
// 그럼 왜 call을 붙여씀?
// 모든 함수는 call이라고 하는 메서드를 가지고 있다.
// 자스에서는 함수도 객체임
// sum이 call의 인자로 받은 kim의 멤버인 메서드가 됨..
sum.call(kim);

console.log("sum.call(kim)", sum.call(kim));
console.log("sum.call(lee)", sum.call(lee));

// 만약 sum에 파라미터가 있다면
function sum2(prefix) {
  return prefix + (this.first+this.second);
}
// call이라고 하는 함수는 첫번째 인자로 함수 내부의 this를 무엇으로 할 것인가가 오고,
// 두번째 인자부터는 우리가 호출하려고 하는 함수의 파라미터에 들어갈 인자값들이 들어간다.
console.log("sum2.call(kim)", sum2.call(kim, '=>'));
console.log("sum2.call(lee)", sum2.call(lee, ':'));
// sum2.call(kim) =>30
// sum2.call(lee) :20

var kimsum = sum2.bind(kim, '-> ');
console.log('kimsum()', kimsum());
// kimsum() -> 30
// sum에 영향을 주는 게 아닌, 저 조건을 단 함수가 새로 만들어진 것!
// call은 실핼할 때 함수의 this의 값을 바꿨다면
// bind는 내부의 this값을 영구적으로 지정한 새로운 함수를 만든 것!