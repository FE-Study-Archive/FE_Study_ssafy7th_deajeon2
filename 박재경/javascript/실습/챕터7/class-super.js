class Person{
  constructor(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
  }

  sum(){
    return this.first+this.second+this.third;
  }
}

// 자식 클래스에 속성을 추가하고 싶다면...? 
class PersonPlus extends Person{   
  constructor(name, first, second, third, fourth){
    //  super():  부모 클래스의 생성자
    super(name, first, second, third)  
    this. fourth = fourth;
  }

  // supuer. : 부모 클래스를 호출!
  sum(){
    return super.sum()+this.fourth
  }

  avg(){
    return (this.first+this.second+this.third+this.fourth)/2 ;
  }
}



var kim = new PersonPlus('kim', 10, 20, 30, 40);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());