// 배열 정의
var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');

// 배열 출력 반복
var i = 0
while(i < memberArray.length){
  console.log(memberArray[i]);
  i++;
}
console.groupEnd('array loop');

// 객체 정의
var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche',
}

// 객체 출력 반복
console.group('object loop');
for(var name in memberObject){
  console.log(name, memberObject[name])
}
console.groupEnd('object loop');