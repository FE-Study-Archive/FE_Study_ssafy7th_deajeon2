function Person(name, first, second){
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function(){
  return this.first + this.second;
}

function PersonPlus(name, first, second, third){
  Person.call(this, name, first, second);
  this.third = third;
}
// kim에 없는 프로퍼티를 PersonPlus의 prototype를 넘어 Person의 Prototype까지 가서 찾아보도록 추가한 코드
// PersonPlus.prototype.__proto__ = Person.prototype; // __proto__는 표준이 아님
// Object.create(Person.prototype); // Person.prototype 객체를 __proto__로 하는 새로운 객체를 만든단 뜻
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus; 
// 위의 코드를 추가안해주면 console.log("kim.constructor", kim.constructor);의 출력이 [Function: Person]으로 나옴
// 왜? 원래 PersonPlus의prototype은 PersonPlus를 가리키고 있었는데, 바꿔줬음
// 아래의 코드로 PersonPlus.prototype = Object.create(Person.prototype); !!이렇게!!
// 때문에 kim의 constructor는 PersonPlus가 나오도록 해야함!!

// 근데 이렇게 해결해도 밑의 avg코드를 PersonPlus.prototype...... 의 위로 보내면 대체돼서 지워지는 문제가 발생함
// 그렇기 때문에
// PersonPlus.prototype.__proto__ = Person.prototype;
// 이 위의 __proto__ 만 바꿔주는 코드를 사용한다~ 그러나 비표준이긴 함~~~

PersonPlus.prototype.avg = function(){
  return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);