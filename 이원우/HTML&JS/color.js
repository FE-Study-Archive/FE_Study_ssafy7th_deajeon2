function nightDayHandler(self){
  if(self.value === 'night') {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';

    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length) {
    //   alist[i].style.color = 'blue';
    //   i = i+1;
    // }
    $('a').css('color', color); // $ =>jquery로 다루겠다!


  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = 'white';
      i = i+1;
    }
  }
  }