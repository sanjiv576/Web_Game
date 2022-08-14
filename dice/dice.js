
var player1 = sessionStorage.getItem("player1", player1);
var player2 = sessionStorage.getItem("player2", player2);
var players = document.querySelectorAll(".player");

document.querySelectorAll(".player")[0].innerHTML = player1;
document.querySelectorAll(".player")[1].innerHTML = player2;


for(var i = 1; i <= players.length; i++){
    players[i-1].style.color = "white";
    
}

// roll the dice
function rollDice() {

    const player_1_dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const player_2_dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    const player_1_dice_img = document.getElementsByTagName("img")[0].src = "../dice/images/dice" + player_1_dice + ".png"
    const player_2_dice_img = document.getElementsByTagName("img")[1].src = "../dice/images/dice" + player_2_dice + ".png";

    var result = "";
    if (player_1_dice === player_2_dice) {
        result = "Draw !!!";
    }

    else if (player_1_dice < player_2_dice) {
        result = player2 + " wins 🚩!!";
    }

    else {
        result = "🚩 " + player1 + " wins!!"
    }

    document.querySelector("h1").innerHTML = result;

}
