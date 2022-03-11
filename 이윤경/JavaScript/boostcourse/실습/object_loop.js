var memberArray = ['egoing', 'graphittie', 'leezche']

console.group('array loop'); // groupEnd까지의 안에 있는 콘솔로그를 보기 좋게 출력해준다
var i = 0;
// 반복문으로 배열 접근하기
while(i < memberArray.length){
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd('array loop');


var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche'
}

console.group('object loop');
for(var name in memberObject){
  console.log(name, memberObject[name]); 
  // memberObject.name으로는 못불러옴 . 뒤에는 변수가 오지 못한다. 객체의 속성의 이름이 와야함!!
}
console.groupEnd('object loop');