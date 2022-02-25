var superObj = {superVal:'super'}

// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj  

// 좀 더 정석적인 방법
var subObj= Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);

subObj.superVal = 'sub';
console.log('subObj.superVal => ', subObj.superVal);
console.log('superObj.superVal => ', superObj.superVal);