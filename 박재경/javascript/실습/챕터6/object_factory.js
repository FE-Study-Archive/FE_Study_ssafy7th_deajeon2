// var kim = {
//   name:'kim',
//   first:10,
//   second:20,
//   third:30,
//   sum:function(){
//     return this.first+this.second+this.third;
//   }
// }


// var lee = {
//   name:'lee',
//   first:10,
//   second:10,
//   third:10,
//   sum:function(){
//     return this.first+this.second+this.third;
//   }
// }

// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());

// var d1 = new Date('2019-4-10');
// console.log('d1.getFullYear()', d1.getFullYear());
// console.log('d1.getMonth()', d1.getMonth());

// console.log('Date', Date);


function Person(name, first, second, third) {
  this.name=name,
  this.first=first,
  this.second=second,
  this.third=third,
  this.sum=function(){
    return this.first+this.second+this.third;
  }
}

console.log("Person()", Person());

// new라는 키워드는 이 함수는 객체를 생성하는 생성자가 된다.
// constructor function (생성자 함수) 
console.log("new Person()",new Person());

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
