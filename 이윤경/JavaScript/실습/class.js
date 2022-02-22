// class를 이용해서 객체 초기 상태 지정
class Person{
  // 객체를 생성할 때 반드시 실행되도록 약속된 함수
  constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
    console.log('constructor');
  }
  // // class 에서는 function 생략가능
  sum(){
    return 'prototype : ' + (this.first+this.second);
  }
}

var jang = new Person('kim', 10, 20);
jang.sum = function(){
  return 'this : ' + (this.first+this.second)
}
var song = new Person('song', 10, 10)
console.log("jang.sum()", jang.sum());
console.log("song.sum()", song.sum());