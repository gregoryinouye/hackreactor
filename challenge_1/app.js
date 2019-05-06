// *** MODEL *** //

let currentMove = 'X';
let board = ['0,0', '0,1', '0,2', '1,0', '1,1', '1,2', '2,0', '2,1', '2,2'];
let boardValues = new Array(9).fill('');
let isGameFinished = false;
let rowColDiagList = 

let checkGameStatus = () => {
  if (!isGameFinished) {
    
  }
};

let getBoardValues = () => {
  boardValues.forEach((curr, index) => {
    boardValues[index] = document.getElementById(board[index]).innerHTML;
  });
};

let updateBoardValue = (boxId, value) => {
  let index = board.indexOf(boxId);
  boardValues[index] = value;
};

let checkColumnWin = ([row, column]) {

}

let checkRowWin = ([row, column]) {

}

let checkDiagWin = ([row, column]) {
  
}

// *** CONTROLLER *** //

let getNextMove = function() {
  if (currentMove === 'X') {
    currentMove = 'O';
    return 'X';
  } else {
    currentMove = 'X';
    return 'O';
  }
};

// let parseBoxId = string => positionArray = string.split(',');

let addMove = function(boxId) {
  if (document.getElementById(boxId).innerHTML === '' && !isGameFinished) {
    let value = getNextMove();
    updateBox(boxId, value);
    updateBoardValue(boxId, value)
    checkGameStatus();
  }
};

// *** VIEW *** //

let resetBoard = function() {
  board.forEach(id => updateBox(id, ''))
  isGameFinished = false;
  boardValues = new Array(9).fill('');
};

let updateBox = function(boxId, value) {
  document.getElementById(boxId).innerHTML = value;
}