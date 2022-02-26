function Person(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function(){
  return this.first+this.second+this.third;
}


// 속성을 상속!
function PersonPlus(name, first, second, third, fourth){
  Person.call(this, name, first, second, third)
  this.fourth = fourth;
}

// 프로토 타입을 연결한다. 
PersonPlus.prototype.__proto__ = Person.prototype;
// PersonPlus.prototype = Object.create(Person.prototype);
// PersonPlus.prototype.consructor = PersonPlus;

PersonPlus.prototype.avg = function(){
  return (this.first+this.second+this.third+this.fourth)/2;
}

var kim = new PersonPlus('kim', 10, 20, 30, 40);
console.log("kim.sum()", kim.sum());   // 60
console.log("kim.avg()", kim.avg());   // 50