const age = prompt("How old are you?"); //사용안함.

console.log(typeof age)
console.log(parseInt(age))

if (isNaN(age)) {
  console.log('please write a number');
} else { 
  console.log('age');
}