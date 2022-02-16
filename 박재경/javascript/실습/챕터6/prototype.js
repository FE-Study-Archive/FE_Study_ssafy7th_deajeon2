function Person(name,first,second,third) {
  this.name=name;
  this.first=first;
  this.second=second;
  this.third=third;
}

// Person 생성자 함수에 공통으로 사용될 함수 
Person.prototype.sum = function(){ 
  return this.first+this.second;
}

var kim = new Person('kim', 10, 20, 30);

//kim의 sum()메서드만 다르게 하고 싶다.
kim.sum = function(){
  return this.first+this.second+this.third;
}

var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum()", kim.sum());     // kim.sum() 60
console.log("lee.sum()", lee.sum());     // lee.sum() 20

