    var Body = {
      setColor:function (color){
        document.querySelector('body').style.color=color;
      },

      setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor=color;
      }

    }

    var Links = {
      setColor: function(color){
        var a_arr = document.querySelectorAll('a')
        var i = 0;
        while(i < a_arr.length){
          a_arr[i].style.color=color;
          i++;
        }
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
    }