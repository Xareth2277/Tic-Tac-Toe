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
        if (game.playerX.playerTurn) {
            board[targetID] = 'X';
            e.target.textContent = 'X';
        } else if (game.playerO.playerTurn) {
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
    return { name, playerTurn };
};

const game = (() => {
    
    // Init
    gameBoard.setupBoard();
    const playerX = Player('X', true);
    const playerO = Player('O', false);
    
    function switchTurns() {
        if (playerX.playerTurn) {
            playerX.playerTurn = false;
            playerO.playerTurn = true;
        } else if (playerO.playerTurn) {
            playerX.playerTurn = true;
            playerO.playerTurn = false;
        };
    };
    
    //TODO: check for win or draw with message about the outcome

    return { switchTurns, playerX, playerO };

})();


// Tests

// testButton.addEventListener("click", () => {
//     game.switchTurns(game.playerX, game.playerO);
// });

resetButton.addEventListener("click", () => {
    gameBoard.resetBoard();
});

