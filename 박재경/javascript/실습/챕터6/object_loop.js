// 배열
var memberArray = ['jk', 'sh', 'yk'];

console.group('array loop');
var i = 0;
while(i < memberArray.length){
  console.log(i, memberArray[i]);
  i = i + 1;
} 
console.groupEnd('array loop');

// 객체
var memberObject = {
  manager:'jk', 
  developer:'sh',
  designer:'yk'
}
console.group('object loop');
for(var name in memberObject ){
  console.log(name, memberObject[name]);
}
console.groupEnd('object loop');