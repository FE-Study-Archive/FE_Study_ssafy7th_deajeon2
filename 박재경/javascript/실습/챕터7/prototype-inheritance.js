// 객체 생성
var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}

// 객체로 만들기 
// subObj의 원형이 무엇인가...
subObj.__proto__ = superObj  // prototype, __proto__ 헷갈리지 말기

console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);

// 상속 받은 후 수정 가능! 
// 단, 해당 객체만 수정하는 것이지.. 원본을 수정하는 것이 아니다!
subObj.superVal = 'sub';
console.log('subObj.superVal => ', subObj.superVal);
console.log('superObj.superVal => ', superObj.superVal);