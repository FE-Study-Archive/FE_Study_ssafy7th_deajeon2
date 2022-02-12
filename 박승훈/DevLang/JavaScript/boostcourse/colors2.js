    var Body = {
      setColor:function (color){
        // document.querySelector('body').style.color=color;
        $('body').css("color", color);
      },

      setBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css("backgroundColor", color)
      }

    }

    var Links = {
      setColor: function(color){
        // var a_arr = document.querySelectorAll('a')
        // var i = 0;
        // while(i < a_arr.length){
        //   a_arr[i].style.color=color;
        //   i++;
        // }
        $('a').css("color", color)
      }
    }

    function nightDayHandler(self){
      var target = document.querySelector('body')
      if(self.value === 'night'){
        Body.setColor('white')
        Body.setBackgroundColor('black')
        self.value = 'day';

        Links.setColor('powderblue')
      } else {
        Body.setColor('black')
        Body.setBackgroundColor('white')
        self.value = 'night';

        Links.setColor('blue');
      }

      // let's think
      h1.fontSizeUpper();
    }

    var h1 = {
      // let's think
      fontSizeUpper: function(){
        $('h1').css("font-size", "100px");
      }
    }

    