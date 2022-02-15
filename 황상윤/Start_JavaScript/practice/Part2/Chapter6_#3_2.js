var meberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');
var i = 0;
while(i < meberArray.length){
  console.log(i, meberArray[i]);
  i += 1;
}
console.groupEnd('array loop');
var memberObject = {
  manager:'egoing',
  developer:'graphittie',
  designer:'leezche'
}
console.group('object loop');
for(var name in memberObject){
  console.log(name, memberObject[name]);
}
console.groupEnd('object loop');