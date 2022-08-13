

const drum_set = document.querySelectorAll(".drum").length;
var audio;

// 1. detect button press from mouse
for (var i = 0; i < drum_set; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // get each button
        var beat = this.innerHTML;

        // this.style.color = "white";


        buttonAnimation(beat);
        playSound(beat);
        // this.style.color = "red";


    });
}

// 3. detect key stroke from keyboard
document.addEventListener('keypress', function(event){
    buttonAnimation(event.key);
    playSound(event.key);
})


// 2. play the sound as button or key is pressed
function playSound(key){

    if(key === 'w'){

        audio = new Audio("../drum/sounds/tom-1.mp3");
    }

    else if(key === 'a'){
        audio = new Audio("../drum/sounds/tom-2.mp3");
    }

    else if(key === 's'){
        audio = new Audio('../drum/sounds/tom-3.mp3');
    }

    else if(key === "d"){
        audio = new Audio("../drum/sounds/tom-4.mp3");
    }

    else if(key === "j"){
        audio = new Audio("../drum/sounds/snare.mp3");
    }

    else if(key === "k"){
        audio = new Audio("../drum/sounds/crash.mp3");
    }

    else if(key === "l"){
        audio = new Audio("../drum/sounds/kick-bass.mp3");
    }
    audio.play();
}


// 4. animate the button

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add("pressed");

    // set time for animation
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);
}



