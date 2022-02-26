var memberArray = ['Jaehyun', 'Yunkyung', 'Seunghoon'];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager: 'Jaehyun',
  developer: 'Yunkyung',
  designer: 'Seunghoon'
}
memberObject.designer = 'Jaekyung';
console.log("memberObject.desinger", memberObject.designer);
console.log("memberObject['desinger']", memberObject['designer']);
delete memberObject.manager;
console.log('after delete memberObject.manager', memberOnject.manager);