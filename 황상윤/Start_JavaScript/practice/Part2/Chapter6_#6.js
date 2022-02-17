var kim = {
  name:'kim',
  first:10,
  second:20,
  third:30,
  sum:function(){
    return this.first + this.second + this.third;
  }
}
var lee = {
  name:'kim',
  first:10,
  second:10,
  third:10,
  sum:function(){
    return this.first + this.second + this.third;
  }
}
console.log('kim.sum():', kim.sum());
console.log('lee.sum():', lee.sum());

var d1 = new Date('2022-02-18');
console.log('d1.getFullYear():', d1.getFullYear());
console.log('d1.getMonth():', d1.getMonth());

console.log('Date', Date);

function Person(name, first, second, third){
  this.name=name,
  this.first=first,
  this.second=second,
  this.third=third,
  this.sum = function(){
    return this.first + this.second + this.third;
  }
}
console.log('Person()', Person());
console.log('New Person()', new Person());

var lee = new Person('lee', 10, 10, 10);
console.log('lee.sum():', lee.sum());