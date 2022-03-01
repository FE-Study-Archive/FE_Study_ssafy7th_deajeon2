var memberArray = ['egoing', 'graphittie', 'leezhce']
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
//  'designer': 'leezhce' 
// ''를 붙여도 되고, 안붙여도 됨!
  designer: 'leezhce'
}
// 객체의 값을 수정 or 추가하는 법
memberObject.designer = 'leezche';

// 객체를 읽는 방법 2가지 . []
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

// 객체를 삭제하는 법
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);