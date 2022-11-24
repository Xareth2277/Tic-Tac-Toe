// ==========================================================================
// Tic-Tac-Toe
// ==========================================================================

"use strict"

const testButton = document.querySelector('.testButton');

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    
    function setupBoard() {
        const main = document.querySelector('.main');

        for (let c = 0; c < (board.length); c++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', c);
            cell.addEventListener('click', setField);
            main.appendChild(cell).className = "cell";
        };
    };
    
    function setField(e) {
        if (e.target.textContent != "") {
            return      //check if field is occupied
        };
        const targetID = e.target.getAttribute('id');   
        if (game.playerOne.playerTurn) {
            board[targetID] = 'X';
            e.target.textContent = 'X';
        } else if (game.playerTwo.playerTurn) {
            board[targetID] = 'O';
            e.target.textContent = 'O';
        };
        game.switchTurns();
    };
    
    // function for restarting the game

    return { setupBoard };
    
})();

const Player = (name, playerTurn) => {
    playerTurn = false;
    return { name, playerTurn };
};

const game = (() => {
    
    // Init
    gameBoard.setupBoard();
    let playerOne;
    let playerTwo;
    askName();
    
    function askName() {
        const playerOneName = prompt("Player 1 name: ");
        const playerTwoName = prompt("Player 2 name: ");
        playerOne = Player(playerOneName);
        playerOne.playerTurn = true;    //player one starts the game
        playerTwo = Player(playerTwoName);
    };
    
    function switchTurns() {
        if (playerOne.playerTurn) {
            playerOne.playerTurn = false;
            playerTwo.playerTurn = true;
        } else if (playerTwo.playerTurn) {
            playerOne.playerTurn = true;
            playerTwo.playerTurn = false;
        };
    };
    
    // check for win or draw with message about the outcome

    return { switchTurns, playerOne, playerTwo };

})();

testButton.addEventListener("click", () => {
    game.switchTurns(game.playerOne, game.playerTwo);
});

