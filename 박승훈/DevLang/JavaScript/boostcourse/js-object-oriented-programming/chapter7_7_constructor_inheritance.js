function Person(name, first, second){
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function(){
  return this.first + this.second;
}

function PersonPlus(name, first, second, third){
  Person.call(this, name, first, second);  // ⭐중요!! 부모 함수의 인자 상속
  this.third = third;
}

// Person의 프로토타입 객체의 sum()을 사용하게 하기 위해
// PersonPlus의 프로토타입 객체 내의 __proto__ 프로퍼티를
// Person의 프로토타입 객체로 설정
PersonPlus.prototype.__proto__ = Person.prototype;

// Person 함수의 프로토타입 객체를 __proto__로 연결하는 새로운 객체 생성
PersonPlus.prototype = Object.create(Person.prototype);
// PersonPlus의 프로토타입 객체의 생성자를 PersonPlus로 재지정
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
  return (this.first + this.second + this.third)/3
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
console.log('kim.constructor', kim.constructor);