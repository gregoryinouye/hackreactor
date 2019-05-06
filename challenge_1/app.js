// *** MODEL *** //

let nextMove = 'X';
let board = ['0,0', '0,1', '0,2', '1,0', '1,1', '1,2', '2,0', '2,1', '2,2'];
let boardValues = new Array(9).fill('');
let isGameFinished = false;
let gameWinner = null;

let checkGameStatus = (boxId, lastMove) => {
  if (!isGameFinished) {
    checkAllWins(boxId, lastMove);
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

let checkRowWin = ([row, column], lastMove) => {
  let currRow = [0, 1, 2].map(element => boardValues[Number(row) * 3 + Number(element)]);
  if (currRow.every(item => item === lastMove)) {
    gameWinner = lastMove;
    return isGameFinished = true;
  } else {
    return isGameFinished;
  }
}

let checkColumnWin = ([row, column], lastMove) => {
  let currCol = [0, 1, 2].map(element => boardValues[Number(element) * 3 + Number(column)]);
  if (currCol.every(item => item === lastMove)) {
    gameWinner = lastMove;
    return isGameFinished = true;
  } else {
    return isGameFinished;
  }
}

let checkDiagWin = ([row, column]) => {

  //check if row, column is on a diag
  // if yes, then check for winner
  // else return false
}

let checkAllWins = (boxId, lastMove) => {
  let locArr = parseBoxId(boxId);
  if (checkRowWin(locArr, lastMove) || checkColumnWin(locArr, lastMove) || checkDiagWin(locArr, lastMove)) {
    return gameWinner;
  } else if (boardValues.every(element => element !== ''))
    {
      // isGameFinished = true;
      alert('tie game');
  }
}

// *** CONTROLLER *** //

let getNextMove = function() {
  if (nextMove === 'X') {
    nextMove = 'O';
    return 'X';
  } else {
    nextMove = 'X';
    return 'O';
  }
};

let parseBoxId = string => string.split(',');

let addMove = function(boxId) {
  if (document.getElementById(boxId).innerHTML === '' && !isGameFinished) {
    let value = getNextMove();
    updateBox(boxId, value);
    updateBoardValue(boxId, value)
    checkGameStatus(boxId, value);
  }
};

// *** VIEW *** //

let resetBoard = function() {
  board.forEach(id => updateBox(id, ''))
  nextMove = 'X';
  isGameFinished = false;
  boardValues = new Array(9).fill('');
  gameWinner = null;
};

let updateBox = function(boxId, value) {
  document.getElementById(boxId).innerHTML = value;
}