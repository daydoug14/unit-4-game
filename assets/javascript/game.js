        var targetNumber;
        var crystal1;
        var crystal2;
        var crystal3;
        var crystal4;
        var numberOptions;
      
      var counter = 0;
      var right = 0;
      var wrong = 0;

      function reset() {
        counter = 0;
        
        targetNumber = Math.ceil((Math.random() *101) + 19);
        crystal1 = Math.ceil(Math.random() * 13);
        crystal2 = Math.ceil(Math.random() * 13);
        crystal3 = Math.ceil(Math.random() * 13);
        crystal4 = Math.ceil(Math.random() * 13);

        console.log("crystal1: " + crystal1);
        console.log("crystal2: " + crystal2);
        console.log("crystal3: " + crystal3);
        console.log("crystal4: " + crystal4);

       
        numberOptions = [crystal1, crystal2, crystal3, crystal4];

        $("#number-to-guess").text(targetNumber);
      }

  var games = {

      
      start: function () {
        
        this.$right = document.getElementById('right');
        
        this.$wrong = document.getElementById('wrong');

        this.$counter = document.getElementById('counter');

        reset();

      var crystals = $("#crystals");

      
      for (var i = 0; i < numberOptions.length; i++) {

        
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        
        imageCrystal.attr("src", "assets/images/crystal" + i +".jpg");

        
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

       
        crystals.append(imageCrystal);
      }

      
      crystals.on("click", ".crystal-image", function() {

          

          var crystalValue = ($(this).attr("data-crystalvalue"));
          crystalValue = parseInt(crystalValue);
         
          counter += crystalValue;

          

          if (counter === targetNumber) {
            
            right ++;
            $("#right").html("<h3>" + right + "</h3>");
            console.log("win: " + right);
          
            alert("You win!");
            
            reset();
          }
          

          else if (counter >= targetNumber) {
            
            wrong++;
            
            $("#wrong").html("<h3>" + wrong + "</h3>");
            console.log("lose: " + wrong);
            alert("You lose!!");
          
            reset();
            
          }

          
          $("#counter").text(counter);
          

        });
      }
      
  };

  $(document).ready(function() {
  
      games.start();

  });

