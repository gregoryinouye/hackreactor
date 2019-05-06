// *** MODEL *** //

let currentMove = 'X';
let board = ['0,0', '0,1', '0,2', '1,0', '1,1', '1,2', '2,0', '2,1', '2,2'];



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

let parseBoxId = string => positionArray = string.split(',');

let addMove = function(boxId) {
  if (document.getElementById(boxId).innerHTML === '') {
    updateBox(boxId, getNextMove());
  }
};

// *** VIEW *** //

let resetBoard = function() {
  board.forEach(id => updateBox(id, ''));
};

let updateBox = function(boxId, value) {
  document.getElementById(boxId).innerHTML=value;
}