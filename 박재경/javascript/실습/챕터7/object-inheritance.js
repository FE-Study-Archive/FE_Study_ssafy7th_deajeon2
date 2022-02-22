var kim = {
  name:'kim',
  first:10, second:20,
  sum: function(){return this.first+this.second}
}

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
  return (this.second+this.first)/2;
}


// var lee = {
//   name:'lee',
//   first:10, second:10,
//   avg: function(){
//     return (this.second+this.first)/2;
//   }
// }

// lee.__proto__ = kim;

console.log('kim.sum():', kim.sum());
console.log('lee.sum():', lee.sum());
console.log('lee.avg():', lee.avg());
