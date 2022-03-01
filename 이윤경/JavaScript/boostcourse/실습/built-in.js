console.log("Math.PT", Math.PI);
console.log("Math.random()", Math.random()); // method
console.log("Math.floor(3.9)", Math.floor(3.9));

var MyMath = {
  PI:Math.PI,
  random:function(){
    return Math.random();
  },
  floor:function(val){
    return Math.floor(val);
  }
}
console.log("MyMath.PT", MyMath.PI);
console.log("MyMath.random()", MyMath.random()); // method
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

var MyMathPI = Math.PIp;
function MyMath_random(){
  return Math.random();
}
function MyMath_floor(val){
  return Math.floor(val);
}