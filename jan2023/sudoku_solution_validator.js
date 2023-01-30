// my solution for Sudoku Solution Validator : https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript (4kyu)

function validSolution(board) {
    //check rows and columns
    for (let j = 0; j < 9; j++) {
        for (let i = 1; i < 10; i++) {
            if (board[j].indexOf(i) === -1) {
                return false;
            }
        }
        const column = [];
        for (let k = 0; k < 9; k++) {
            column.push(board[k][j]);
        }
        for (let i = 1; i < 10; i++) {
            if (column.indexOf(i) === -1) {
                return false;
            }
        }
    }
    //check boxes
    for (let j = 0; j < 7; j += 3) {
        for (let k = 0; k < 7; k += 3) {
            const square = [];
            square.push(...board[j].slice(k, 3));
            square.push(...board[j + 1].slice(k, 3));
            square.push(...board[j + 2].slice(k, 3));
            for (let i = 1; i <= 9; i++) {
                if (square.length > 0 && square.indexOf(i) === -1) {
                    return false;
                }
            }
        }
    }

    return true;
}
