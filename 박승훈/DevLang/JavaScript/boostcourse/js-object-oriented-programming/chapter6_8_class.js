// 기존 Prototype 방식
// Person 생성자의 정의
// function Person(name, first, second, third){
//   this.name = name,
//   this.first = first,
//   this.second = second,
//   this.third = third
// }

// // Prototype 함수의 정의
// Person.prototype.sum = function(){
//   return 'modified : '+(this.first + this.second + this.third);
// }

// var kim = new Person('kim', 30, 20, 10);
// var lee = new Person('lee', 10, 10, 10);
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());


// // Prototype 함수의 선택적 사용
// var kim = new Person('kim', 30, 20, 10);
// var lee = new Person('lee', 10, 10, 10);
// var park = new Person('park', 30, 30, 10);
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());
// console.log('park.sum()', park.sum());



// Class
class Person{
  constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum(){
    return 'class method > ' + this.name + " : "+ (this.first + this.second);
  }
}

var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 20, 30);
console.log(kim.sum());
console.log(lee.sum());