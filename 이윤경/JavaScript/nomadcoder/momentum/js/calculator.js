const calculator = {
  add : function(a, b){
    console.log(a + b);
  },
  sub : function(a, b){
    console.log(a - b);
  },
  div : function(a, b){
    console.log(a / b);
  },
  mul : function(a, b){
    console.log(a * b);
  },
  pow : function(a, b){
    console.log(a ** b);
  }
}

calculator.add(1, 2);
calculator.sub(1, 2);
calculator.div(1, 2);
calculator.mul(1, 2);
calculator.pow(1, 2);