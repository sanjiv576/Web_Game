
// for homepage

var player1 = "", player2 = "";
function validateForm() {
    player1 = document.forms["playersName"][0].value;
    player2 = document.forms["playersName"][1].value;
    
    if (player1 === "" || player2 === "") {
        alert("Name must be provided.")
        return false;
    }
    
    // store first player's name
    sessionStorage.setItem("player1", player1);

    // store second player's name
    sessionStorage.setItem("player2", player2);
    
}
