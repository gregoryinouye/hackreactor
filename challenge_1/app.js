// *** MODEL *** //

let nextMove = 'X';
let board = ['0,0', '0,1', '0,2', '1,0', '1,1', '1,2', '2,0', '2,1', '2,2'];
let boardValues = new Array(9).fill('');
let isGameFinished = false;
let gameWinner = null;
let gameHistory = {X: 0, O: 0, tie: 0};
let playerX = 'Player';
let playerO = 'Player';

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
    endGame(lastMove);
  }
};

let checkColumnWin = ([row, column], lastMove) => {
  let currCol = [0, 1, 2].map(element => boardValues[Number(element) * 3 + Number(column)]);
  if (currCol.every(item => item === lastMove)) {
    endGame(lastMove);
  }
};

let checkDiagWin = (boxId, lastMove) => {
  if ((['0,0', '1,1', '2,2'].includes(boxId) && [0, 4, 8].every(item => boardValues[item] === lastMove)) ||
  (['0,2', '1,1', '2,0'].includes(boxId) && [2, 4, 6].every(item => boardValues[item] === lastMove))) {
    endGame(lastMove);
  }
};

let endGame = winner => {
  gameWinner = winner;
  gameHistory[winner] += 1;
  updateScore();
  return isGameFinished = true;
}

let checkAllWins = (boxId, lastMove) => {
  let locArr = parseBoxId(boxId);
  if (checkRowWin(locArr, lastMove) || checkColumnWin(locArr, lastMove) || checkDiagWin(boxId, lastMove)) {
    endGame(lastMove);
  } else if (boardValues.every(element => element !== '')) {
    endGame('tie');
  }
};

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
  if (boxId && document.getElementById(boxId).innerHTML === '' && !isGameFinished) {
    let value = getNextMove();
    updateBox(boxId, value);
    updateBoardValue(boxId, value)
    checkGameStatus(boxId, value);
  }
};

// *** VIEW *** //

let resetBoard = () => {
  board.forEach(id => updateBox(id, ''))
  nextMove = gameWinner === 'O' ? 'X' : 'O';
  isGameFinished = false;
  boardValues = new Array(9).fill('');
  gameWinner = null;
  // does not clear gameHistory
};

let updateBox = (boxId, value) => {
  document.getElementById(boxId).innerHTML = value;
}

let addPlayerName = (letter, userInput) => {
  if (letter === 'X') {
    playerX = userInput || 'Player';
  }
  if (letter === 'O') {
    playerO = userInput || 'Player';
  }
  updateScore();
}

let updateScore = () => document.querySelector('.history')
  .innerHTML = `${playerX} X: ${gameHistory.X} vs ${playerO} O: ${gameHistory.O} || Tie: ${gameHistory.tie}`;