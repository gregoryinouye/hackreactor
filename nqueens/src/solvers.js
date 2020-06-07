/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var findNextSquare = function(row, column) {
    column++;
    if (column === n) {
      column = 0;
      row++;
    }
    return [row, column];
  };

  var findNRooksHelper = function(currentBoard, rowI = 0, colI = 0, numRooks = 0) {
    currentBoard.togglePiece(rowI,colI);
    numRooks++;
    if (!currentBoard.hasAnyRooksConflicts()) {
      if (numRooks === n) {
        return currentBoard.rows();
      }
    } else {
      currentBoard.togglePiece(rowI,colI);
      numRooks--;
    }
    var newRowAndColumn = findNextSquare(rowI,colI);
    return currentBoard._isInBounds(...newRowAndColumn) ? findNRooksHelper(currentBoard, newRowAndColumn[0], newRowAndColumn[1], numRooks) : null;
  };

  var solution = findNRooksHelper(new Board({n: n}));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var findNextSquare = function(row, column) {
    column++;
    if (column === n) {
      column = 0;
      row++;
    }
    return [row, column];
  };

    // var solution = [];
  
  // var recursiveRooks = function(currentBoard, rowI = 0, colI = 0, numRooks = 0) {
  //   var newRowAndColumn = findNextSquare(rowI, colI);
  //   if (currentBoard._isInBounds(...newRowAndColumn)) {
  //     let newBoardPosition = JSON.parse(JSON.stringify(currentBoard.rows()));
  //     recursiveRooks(new Board(newBoardPosition), newRowAndColumn[0], newRowAndColumn[1], numRooks);
  //   }
  //   currentBoard.togglePiece(rowI, colI);
  //   if (!currentBoard.hasAnyRooksConflicts()) {
  //     if (numRooks + 1 === n) {
  //       debugger;
  //       solution.push(currentBoard.rows());
  //     } else if (currentBoard._isInBounds(...newRowAndColumn)) {
  //       let newBoardPosition = JSON.parse(JSON.stringify(currentBoard.rows()))
  //       recursiveRooks(new Board(newBoardPosition), newRowAndColumn[0], newRowAndColumn[1], numRooks + 1);
  //     } 
  //   }
  // };

  // recursiveRooks(new Board({n: n}));


//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   return solution;
// };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var findNextSquare = function(row, column) {
    column++;
    if (column === n) {
      column = 0;
      row++;
    }
    return [row, column];
  };

  var findNQueensHelper = function(currentBoard, rowI = 0, colI = 0, numQueens = 0) {
    currentBoard.togglePiece(rowI,colI);
    numQueens++;
    if (!currentBoard.hasAnyQueensConflicts()) {
      if (numQueens === n) {
        return currentBoard.rows();
      }
    } else {
      currentBoard.togglePiece(rowI,colI);
      numQueens--;
    }
    var newRowAndColumn = findNextSquare(rowI,colI);
    return currentBoard._isInBounds(...newRowAndColumn) ? findNQueensHelper(currentBoard, newRowAndColumn[0], newRowAndColumn[1], numQueens) : null;
  };

  var solution = findNQueensHelper(new Board({n: n}), 1, 1);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
