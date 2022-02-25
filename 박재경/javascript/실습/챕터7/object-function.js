var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}

function sum(prefix){
  return prefix+(this.first+this.second);
}

console.log("sum.call(kim)", sum.call(kim, '=>'));   // sum.call(kim) =>30
console.log("sum.call(lee)", sum.call(lee, ':'));   // sum.call(lee) :20

// 함수에서 내부적으로 사용하는 this를 아예 고정시킨다. 
// 새로운 함수가 만들어진 것! 기존의 sum()에는 영향을 미치지 않는다. 
var kimSum = sum.bind(kim, '->')
console.log('kimSum()', kimSum());                 // kimSum() ->30