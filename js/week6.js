   $(document).ready(function() {
        $(".div1").slideUp(1000).delay(1000).slideDown(1000);
          $.ajax({
            url: 'https://api.github.com/users/marcode777/repos',
            type: 'GET',
            success: function(repos){
               for(var i= 0; i< repos.length; i++){
                 $(".repolist").append();
               }
              


            }
          })
      });
      // don't forget that in JavaScript, classes are referred to with a " . " and ID's are referred to with a " # ""
   