class Person{
  // 객체의 초기 설정을 만드는 함수
  constructor(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
  }
  sum(){
    return this.first+this.second;
  }
}

// 프로토타입을 사용할 수도 있긴하다. 
Person.prototype.ssum = function(){ 
  return this.first;
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function(){
  return this.first+this.second+this.third;
}

var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum()", kim.sum());     // kim.sum() 60
console.log("lee.sum()", lee.sum());     // lee.sum() 20
console.log("kim.ssum()", kim.ssum());   
