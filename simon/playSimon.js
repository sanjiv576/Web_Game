
var level = 1;
var pressedBtn = "";
var patternGenerate = "";
var playerPattern = [];
var pattern = [];
var audio;
// var patternIndex = 0;
var gameOn = false;

var showRules = false;
var buttonNames = ["green", "yellow", "blue", "red"];

$(document).ready(function () {

    $(document).keypress(function (event) {
        console.log(event.key);

        if (!gameOn) {

            nextLevel();
            gameOn = true;
        }

        // buttons are clicked
        $(".btn").click(function () {

            pressedBtn = $(this).attr("id");
            console.log(pressedBtn + " button pressed");

            playerPattern.push(pressedBtn);

            playSound(pressedBtn);
            buttonEffects(pressedBtn);

            checkPattern(playerPattern.length - 1);

        });
    });

    $("#rulesBtn").click(function(){

        var rules = "1. Let the sound play. 2. Follow the pattern from the begining.";

        $("#rules").slideToggle();
        $("#rules").text(rules);

        showRules = !showRules;
        if(showRules){
            $("#rulesBtn").text("Show rules");
        }
        else {
            $("#rulesBtn").text("Hide rules");
        }
        

        


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

    audio = new Audio("../simon/sounds/" + pressedBtn + ".mp3");
    audio.play();
}


function gameOver() {

    // patternIndex = 0;
    // correctIndx = 0;
    pattern = [];
    level = 1;
    gameOn = false;

    $("body").addClass("game-over");

    playSound("wrong");

    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game over. Press any key to start");

}


function nextLevel() {
    $("#level-title").text("Level " + level);

    playerPattern = [];
    // genearate pattern
    patternGenerate = Math.floor(Math.random() * 4) + 1;
    var btnName = buttonNames[patternGenerate - 1];
    playSound(btnName);

    // button pressed effect
    buttonEffects(btnName);

    // store pattern
    pattern.push(btnName);
    // pattern[patternIndex] = btnName;

    console.log("Guess number " + patternGenerate + " : " + btnName);
}


function checkPattern(currentLevel) {

    if (pattern[currentLevel] === playerPattern[currentLevel]) {
        if (playerPattern.length === pattern.length) {
            setTimeout(function () {
                // if correct 
                level += 1;

                nextLevel();
            }, 1000);
        }
    }

    else {
        gameOver();
    }
}


