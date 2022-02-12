// 배열 정의
var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log('memberArray[2]', memberArray[2]);

// 객체 정의
var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce',
}

// 객체 내부 데이터 업데이트
memberObject.designer = 'leezche';
console.log('memberObject.designer', memberObject.designer);
console.log('memberObject["designer"]', memberObject['designer']);


// 객체 내부 데이터 삭제
delete memberObject.manager;
console.log('after delete memberObject.manager', memberObject.manager)

// 결과 : after delete memberObject.manager undefined