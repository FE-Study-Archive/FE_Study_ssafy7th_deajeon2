var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  third: 30,
  sum: function(){
    return this.first + this.second + this.third;
  }
}

var lee = {
  name: 'lee',
  first: 10,
  second: 10,
  third: 10,
  sum: function(){
    return this.first + this.second + this.third;
  }
}

console.log(kim.sum());
console.log(lee.sum());


// constructor의 필요성
var d1 = new Date('2019-5-10');
console.log(d1.getFullYear());   // 2019
console.log(d1.getMonth());      // 4 : 월을 물으면 하나 빼서 나옴

console.log('Date', Date);


// constructor 함수 Person() 생성
function Person(){
  this.name = 'kim',
  this.first = 30,
  this.second = 20,
  this.third = 10,
  this.sum = function(){
    return this.first + this.second + this.third;
  }
}

var kim = new Person();
var lee = new Person();
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());



// constructor 함수 + parameter
function Person(name, first, second, third){
  this.name = name,
  this.first = first,
  this.second = second,
  this.third = third,
  this.sum = function(){
    return this.first + this.second + this.third;
  }
}

var kim = new Person('kim', 30, 20, 10);
var lee = new Person('lee', 10, 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());