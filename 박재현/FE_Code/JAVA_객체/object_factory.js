function Person(name, first, second, third){
  this.name=name;
  this.first=first;
  this.second=second;
  this.third=third;
  this.sum= function(){
    return this.first+this.second+this.third;
  }
}
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10 ,10);
console.log("lee.sum()", lee.sum());
console.log("kim.sum()", kim.sum());

// var d1 = new Date('2022-02-12');
// console.log('d1.getFullYear()', d1.getFullYear());
// console.log('d1.getMonth()', d1.getMonth());

// console.log('Date', Date);


// console.log('Person()', Person());
// console.log('new Person()', new Person());