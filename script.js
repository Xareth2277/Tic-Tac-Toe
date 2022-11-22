// ==========================================================================
// Tic-Tac-Toe
// ==========================================================================

const gameBoard = (() => {
    const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    
    function setupBoard(board) {
        const main = document.querySelector('.main');

        for (c = 1; c <= (board.length); c++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', c);
            // cell.addEventListener('click', );
            main.appendChild(cell).className = "cell";
        };
    };

    setupBoard(board);
    // return {board, setupBoard};

})();


// const Player = (name) => {
//     let name = name;
//     return {name};
// };

