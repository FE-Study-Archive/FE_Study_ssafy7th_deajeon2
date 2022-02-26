var Links = {
  setColor: function (color){
  // var alist = document.querySelectorAll('a');
  // var i = 0;
  // while(i < alist.length){
  //   alist[i].style.color = color;
  //   i = i + 1;
    $('a').css('color', color);
  }
}

var Body = {
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function (color){
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    BodysetBackgroundColor('black');
    BodysetColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
  } else {
    BodysetBackgroundColor('white');
    BodysetColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}