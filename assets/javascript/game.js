// Sets the random number to reach upon document ready //
$(document).ready(function(){
    var random = Math.floor(Math.random() * 101 + 19)

    // Sets text to the span area id in html of the random number generated //
    $("#randomNumber").text(random);

    // Sets random numbers for jewels which will be used with on click //
    var number1 = Math.floor(Math.random() * 11 + 1)
    var number2 = Math.floor(Math.random() * 11 + 1)
    var number3 = Math.floor(Math.random() * 11 + 1)
    var number4 = Math.floor(Math.random() * 11 + 1)


    // Declaring variable for the starting totals at 0 //
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    // Writes text into the span area of the following id's for wins and losses
    $("#wins").text(wins);
    $("#losses").text(losses);

    // Provides the reset function to restart the game after completion
    function reset(){
        random = Math.floor(Math.random() * 101 + 19);

        $("#randomNumber").text(random);

        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
        $("#playerTotal").text(playerTotal);
    }

    // Adds the function to alert the player when they win, updates win total and calls the reset function //
    function win(){
        alert("You Win!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    // Adds the function to alert the player when they lose, updates loss total and calls the reset function //
    function lose(){
        alert("You Lose...");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    $("#crystalOne").on("click", function(){
        playerTotal = playerTotal + number1;

        $("#playerTotal").text(playerTotal);

        if (playerTotal === random){
            win();
        }

        else if (playerTotal > random){
            lose();
        }
    })

    $("#crystalTwo").on("click", function(){
        playerTotal = playerTotal + number2;

        $("#playerTotal").text(playerTotal);

        if (playerTotal === random){
            win();
        }

        else if (playerTotal > random){
            lose();
        }
    })

    $("#crystalThree").on("click", function(){
        playerTotal = playerTotal + number3;
        
        $("#playerTotal").text(playerTotal);
        
            if (playerTotal === random){
                win();
            }
        
            else if (playerTotal > random){
                lose();
            }
        })
    $("#crystalFour").on("click", function(){
        playerTotal = playerTotal + number4;
            
        $("#playerTotal").text(playerTotal);
            
            if (playerTotal === random){
                win();
            }
            
            else if (playerTotal > random){
                lose();
            }
        });
    });















