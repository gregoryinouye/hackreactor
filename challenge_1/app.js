// *** MODEL *** //

let currentMove = 'X';




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

let editBox = function(value, input) {
  // change box to specified value
  console.log(typeof input, ' input: ', input);
};

let addMove = function(boxId) {
  // check if box full - only call updateBox if empty
  updateBox(boxId, getNextMove());
}

// *** VIEW *** //

let resetBoard = function() {
  // clear all entries of table
  // iterate through boxes 0,0 to 2,2 and reset value to null
};

let updateBox = function(boxId, value) {
  document.getElementById(boxId).innerHTML=value;
}