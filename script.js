// ==========================================================================
// Tic-Tac-Toe
// ==========================================================================

"use strict"

const resetButton = document.querySelector('.resetButton');

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const main = document.querySelector('.main');
    
    function setupBoard() {

        for (let c = 0; c < (board.length); c++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', c);
            cell.addEventListener('click', setField);
            main.appendChild(cell).className = "cell";
        };
    };
    
    function setField(e) {
        if (e.target.textContent != "") {
            return;      //check if field is occupied
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
    
    function resetBoard() {
        for (let i = 0; i < (board.length); i++) {
            board[i] = "";      //clears board array
        };
        main.innerHTML = "";
        setupBoard();
    };

    return { setupBoard, resetBoard };
    
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
        //TODO: adding names with a field and defaults to p1 and p2
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
    
    //TODO: check for win or draw with message about the outcome

    return { switchTurns, playerOne, playerTwo };

})();


// Tests

// testButton.addEventListener("click", () => {
//     game.switchTurns(game.playerOne, game.playerTwo);
// });

resetButton.addEventListener("click", () => {
    gameBoard.resetBoard();
});

