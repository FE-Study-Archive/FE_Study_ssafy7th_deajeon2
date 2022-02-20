
// Person도 함수로 만들어 봄
function Person(name, first, second, third){
  this.name=name,
  this.first=first,
  this.second=second,
  this.third=third
  // sum 함수는 동일한데, 객체를 만들때마다 새로 만들어 주고 있음..
  // 공통적으로 못쓸까?
  // this.sum=function(){
  //   return this.first+this.second+this.third;
  // }
}

Person.prototype.sum = function(){
  return 'prototype : ' + (this.first+this.second+this.third);
}

// 객체 양산 가능!
var jang = new Person('jang', 10, 20, 30)
jang.sum = function(){
  return 'this : ' + (this.first+this.second)
}
var song = new Person('song', 10, 10, 10)
console.log("jang.sum()", jang.sum());
console.log("song.sum()", song.sum());