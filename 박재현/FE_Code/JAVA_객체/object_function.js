var kim = {name: 'kim', first:10, second:20}
var lee = {name: 'lee', first:10, second:10}
// lee.__proto__ = kim
function sum(prefix){
  return prefix+(this.first+this.second);
}
// sum();
console.log("sum.call(kim)", sum.call(kim, '=> ')); // sum()의 this = kim이 된다.
console.log("lee.call(lee)", sum.call(lee, ': '));
var kimSum = sum.bind(kim, '-> '); // 함수 내부적으로 kim, prefix 값은 '-> '
console.log('kimSum()', kimSum());

// call은 참조할때 호출, bind는 새로운 함수를 생성할때