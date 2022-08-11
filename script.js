var TicTacToeTitle = document.getElementById("title");
TicTacToeTitle.innerHTML = "Tic Tac Toe Game using TypeScript, HTML and CSS";
//game status
var gameState = ["", "", "", "", "", "", "", "", ""];
//player state
var playerCount = 0; // 0 to 8 - X can play 0 2 4 6 8 and O can play 1 3 5 7
var player = "";
//winning states
/*
FOR ROW
FOR COL
row -
o
    winStates[row][col]

*/
var winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
// player X[] --> x indices
// player O[] --> o indices
var posX = new Array();
var posO = new Array();
console.log("posX: " + posX);
console.log("posO: " + posO);
var turnPlayer = document.getElementById("turn");
turnPlayer.innerHTML = "X's turn";
//onclick function to play
function play(clicked_id) {
    if (playerCount <= 8) {
        if (playerCount % 2 == 0) {
            player = "X";
            turnPlayer.innerHTML = "O's turn";
            posX.push(parseInt(clicked_id));
        }
        else {
            player = "O";
            turnPlayer.innerHTML = "X's turn";
            posO.push(parseInt(clicked_id));
        }
        var posGrid = document.getElementById(clicked_id);
        posGrid.innerHTML = player;
        playerCount++;
        console.log("playerCount: " + playerCount);
        console.log("posX: " + posX);
        console.log("posO: " + posO);
        console.log("clicked_id type: " + typeof clicked_id);
        console.log("posO type: " + typeof posO);
        console.log("winStates type: " + typeof winStates);
        console.log("winStates element type: " + typeof winStates[0]);
    }
    //winning status
    checkWin(posX, "X");
    checkWin(posO, "O");
}
function checkWin(pos, player) {
    for (var combo in winStates) {
        console.log(winStates[combo]);
        var result = winStates[combo].every(function (val) { return pos.includes(val); });
        if (result == true) {
            console.log(player + " wins!");
            var res = document.getElementById("res");
            res.innerHTML = player + " wins!";
            playerCount = 8;
            var pg = document.getElementById("pg");
            pg.style.pointerEvents = "none";
            turnPlayer.innerHTML = "Game is over!";
        }
    }
}
