var kim = {
  name:'kim',
  first:10,
  second:20,
  third:30,
  sum:function(){
    return this.first+this.second+this.third;
  }
}

var lee = {
  name:'lee',
  first:10,
  second:10,
  third:10,
  sum:function(){
    return this.first+this.second+this.third;
  }
}

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2019-04-10');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); // 0부터 카운팅해서 3출력

// Date는 함수다!!
console.log('Data', Date);

// Person도 함수로 만들어 봄
function Person(name, first, second, third){
  this.name=name,
  this.first=first,
  this.second=second,
  this.third=third,
  this.sum=function(){
    return this.first+this.second+this.third;
  }
}

console.log('Person()', Person()); // new 없으면 return이 없으니까 undefined..
// 앞에 new가 붙으면 일반적인 함수가 아니라 객체를 생성하는 생성자 함수가 됨.
// constructor(생성자)
console.log('new Person()', new Person());

// 객체 양산 가능!
var jang = new Person('jang', 10, 20, 30)
var song = new Person('song', 10, 10, 10)
console.log("jang.sum()", jang.sum());
console.log("song.sum()", song.sum());