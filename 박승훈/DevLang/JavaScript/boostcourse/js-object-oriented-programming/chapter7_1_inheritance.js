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

// 그냥 냅다 복제해버리기
// class PersonPlus{
//   constructor(name, first, second){
//     this.name = name;
//     this.first = first;
//     this.second = second;
//   }

//   sum(){
//     return this.name + " : "+ (this.first + this.second);
//   }

//   avg(){
//     return (this.first+this.second)/2;
//   }
// }

// 상속하기 : 부모 클래스와 관련된 건 없애버려도 됨
class PersonPlus extends Person{
  avg(){
    return (this.first+this.second)/2;
  }
}

var kim = new PersonPlus('kim', 10, 20);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());