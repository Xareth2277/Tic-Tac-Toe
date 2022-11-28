// ==========================================================================
// Tic-Tac-Toe
// ==========================================================================

"use strict"


const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const main = document.querySelector('.main');
    const resetBtn = document.querySelector('.resetBtn');
    resetBtn.addEventListener("click", resetBoard);
    
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
        game.winCheck();
    };
    
    function resetBoard() {
        for (let i = 0; i < (board.length); i++) {
            board[i] = "";      //clears board array
        };
        main.innerHTML = "";
        game.init();
    };

    return { setupBoard, resetBoard, board };

})();

const Player = (name, playerTurn) => {
    return { name, playerTurn };
};

const game = (() => {
    
    let gameActive = true;
    const playerX = Player('X');
    const playerO = Player('O');
    
    function init() {
        gameActive = true;
        playerX.playerTurn = true;
        playerO.playerTurn = false;
        gameBoard.setupBoard();
        displayMessage();
    };
    
    function displayMessage() {
        const message = document.querySelector('.message');
        if (!gameActive && playerO.playerTurn) {
            message.textContent = "Player X won!";
        } else if (!gameActive && playerX.playerTurn) {
            message.textContent = "Player O won!";
        } else if (!playerX.playerTurn && !playerO.playerTurn) {
            message.textContent = "It's a draw!";
        } else if (playerX.playerTurn) {
            message.textContent = "Player X's turn";
        } else if (playerO.playerTurn) {
            message.textContent = "Player O's turn";
        };
    };

    function switchTurns() {
        if (game.playerX.playerTurn) {
            game.playerX.playerTurn = false;
            game.playerO.playerTurn = true;
        } else if (game.playerO.playerTurn) {
            game.playerX.playerTurn = true;
            game.playerO.playerTurn = false;
        };
        displayMessage();
    };
    
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function winCheck() {
        for (let i = 0; i < winConditions.length; i++) {
            const winCondition = winConditions[i];
            let a = gameBoard.board[winCondition[0]];
            let b = gameBoard.board[winCondition[1]];
            let c = gameBoard.board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            } else if (a === b && b === c) {
                gameActive = false;
                displayMessage();
                break;
            } else if (!gameBoard.board.includes("")) {
                playerX.playerTurn = false;
                playerO.playerTurn = false;
                displayMessage();
                break;
            };
        };
    };

    init();

    return { init, switchTurns, playerX, playerO, winCheck };

})();

