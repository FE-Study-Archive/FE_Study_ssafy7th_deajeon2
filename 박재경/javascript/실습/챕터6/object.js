// 조직의 멤버를 목록화

// 배열
var memberArray = ['jk', 'sh', 'yk'];
console.log('memberArray[2]', memberArray[2]);                           // memberArray[2] yk 


// 객체
var memberObject = {
  manager:'jk', 
  developer:'sh',
  designer:'yk'
}

// 객체 수정
memberObject.designer = 'sy';
console.log("memberObject.designer", memberObject.designer);          // memberObject.designer sy
console.log("memberObject.['designer']", memberObject['designer']);   // memberObject.['designer'] sy

// 객체 삭제
delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);  // after delete memberObject.manager undefined