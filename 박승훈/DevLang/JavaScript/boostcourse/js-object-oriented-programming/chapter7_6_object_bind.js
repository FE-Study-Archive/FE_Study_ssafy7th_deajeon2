var kim = {
  name: 'kim',
  first: 10, second: 20
}

var lee = {
  name: 'lee',
  first: 10, second: 10
}

// object inheritance
// lee.__proto__ = kim

// 어느 객체에 속하지 않고 외부에 있는 함수
function sum(prefix) {
	return prefix + (this.first + this.second);
}

// sum이라고 하는 객체를 실행한다는 의미( = sum(); )
console.log("sum.call(kim)", sum.call(kim, " => "));
console.log("sum.call(lee)", sum.call(lee, " : "));

// 내부적으로 this를 kim으로 하는 새로운 함수 생성
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());



