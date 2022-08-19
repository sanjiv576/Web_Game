
var level = 1;
var pressedBtn = "";
var patternGenerate = "";
var playerPattern = "";
var pattern = [];
var audio;
var patternIndex = 0;
var gameOn = true;

$(document).ready(function () {


    $(document).keypress(function (event) {
        console.log(event.key);

        var count = 0;
        do {

            $("#level-title").text("Level " + level);

            // genearate pattern
            patternGenerate = Math.floor(Math.random() * 4) + 1;
            playSound(patternGenerate);
            // button pressed effect
            buttonEffects(pressedBtn);
            // store pattern
            pattern[patternIndex] = patternGenerate;

            console.log("Guess number " + patternGenerate);

            // buttons are clicked
            $(".btn").click(function () {

                pressedBtn = $(this).attr("id");
                console.log(pressedBtn + " button pressed");

                
                // button pressed effect
                buttonEffects(pressedBtn);

                for(var i = 0; i < pattern.length; i++){

                    if (pattern[i] == playerPattern) {

                        // check pattern and play sound
                        gameOn = playSound(pressedBtn);
    
                        // if correct 
                        count += 1;
                        patternIndex += 1;
                        level += 1;

                        // genearate pattern
                        patternGenerate = Math.floor(Math.random() * 4) + 1;
                        // store pattern
                        pattern[patternIndex] = patternGenerate;

                        pressedBtn = $(this).attr("id");
                    }
    
                    else {
                        gameOn = false;
                        // red bg
                        $("body").css("background-color", "red");
    
                        patternIndex = 0;
                        pattern = [];
                        level = 1;
                        return gameOn;
                    }
                }

                // if (pattern[count] == playerPattern) {

                //     // check pattern and play sound
                //     gameOn = playSound(pressedBtn);

                //     // if correct 
                //     count += 1;
                //     patternIndex += 1;
                //     level += 1;
                // }

                // else {
                //     gameOn = false;
                //     // red bg
                //     $("body").css("background-color", "red");

                //     patternIndex = 0;
                //     pattern = [];
                //     level = 1;
                //     return gameOn;
                // }

                // check pattern and play sound
                // gameOn = playSound(pressedBtn);


                // if correct 
                // count += 1;
                // patternIndex += 1;
                // level += 1;


            });
            // } while (pattern[count] == playerPattern[count]);
        } while (gameOn);

        // reset if failed
        // patternIndex = 0;
        // pattern = [];
        // level = 1;

        // red bg
        // $("body").css("background-color", "red");

        $("#level-title").text("Try again ");

    });
});

// pressed button effects
function buttonEffects(pressedBtn) {
    $("." + pressedBtn).addClass("pressed");

    setTimeout(function () {
        $("." + pressedBtn).removeClass("pressed");
    }, 150);
}


// check pattern that user enter and play sound

function playSound(pressedBtn) {


    switch (pressedBtn) {
        case "green":
            audio = new Audio("../simon/sounds/green.mp3");
            break;

        case "red":
            audio = new Audio("../simon/sounds/red.mp3");
            break;

        case "yellow":
            audio = new Audio("../simon/sounds/yellow.mp3");
            break;

        case "blue":
            audio = new Audio("../simon/sounds/blue.mp3");
            break;
        default:
            console.log("error");
            break;
    }

}