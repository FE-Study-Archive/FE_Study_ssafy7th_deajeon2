console.log('string');
console.log(123);

const a = 5;
const b = 2;
let myName = 'nico';

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello' + myName);

myName = 'nicolas';

console.log('your new name is' + myName);


const playerName = 'nico';
const playerPoint = 12123;
const playerHansome = false;
const playerFat = 'little bit';

const player = {
  name: 'nico',
  points: 10,
  fat: true,
};
player.fat = false;


console.log(player);
console.log(player.name);
console.log(player['name']);



function sayHello(nameOfPerson, age){
  console.log('hello may name is' + nameOfPerson + ' and I\'m' + age);
}

sayHello('nico', 10);
sayHello('dal', 23);
sayHello('lynn', 21);

function plus(a, b) {
  console.log(a+ b);
}


const player = {
  name: 'nico',
  sayHello: function (otherperson) {
    console.log('hello! ' + otherperson);
  },
};

console.log(player.name);
player.sayHello('lynn');


const age = prompt('How old are you')
console.log(age);

if (isNaN(age)) {
  console.log('숫자를 입력해 주세요');
} else {
  console.log('감사합니다.')
}