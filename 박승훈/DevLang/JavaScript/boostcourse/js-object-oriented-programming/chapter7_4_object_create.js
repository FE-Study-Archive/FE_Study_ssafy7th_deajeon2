var superObj = {superVal: 'super'}
// var subObj = {subVal: 'sub'}
// subObj.__proto__ = superObj;

// superObj를 부모로 하는 새로운 객체 subObj를 만들어라!
var subObj = Object.create(superObj);
subObj.subcal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);


//----------------------------------------------------------------

kim = {
  name: 'kim',
  first: 10, second: 20,
  sum:function(){return this.first+this.second}
}
// lee = {
//   name: 'lee',
//   first: 10, second: 10,
//   avg: function(){
//      return (this.first+this.second)/2
// }
// }
// lee.__proto__ = kim;

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
  return (this.first+this.second)/2
}

console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());
