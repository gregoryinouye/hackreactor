import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardValues: [
                      [null, null, null, null, null, null, null],
                      [null, null, null, null, null, null, null],
                      [null, null, null, null, null, null, null],
                      [null, null, null, null, null, null, null],
                      [null, null, null, null, null, null, null],
                      [null, null, null, null, null, null, null]
                    ],
      isRedNext: true
    };
  }

  dropToken(col) {
    const { boardValues, isRedNext } = this.state;
    let row = this.getEmptySquare(col);

    if (row === -1) {
      console.error('no available spaces in this column');
    } else {
      const postMoveBoard = boardValues.slice();
      postMoveBoard[row][col] = isRedNext ? 'red' : 'yellow';
      this.setState({ boardValues: postMoveBoard, isRedNext: !isRedNext });
      if (this.isWin(postMoveBoard, row, col)) {
        alert(`${isRedNext ? 'Red' : 'Yellow'} wins!`);
      }
    }
  }

  getEmptySquare(col) {
    const { boardValues } = this.state;
    for (let row = boardValues.length - 1; row >= 0; row--) {
      if (!boardValues[row][col]) { 
        return row;
      }
    }

    return -1;
  }

  handleClick = e => {
    e.preventDefault();
    const col = e.target.parentNode.parentNode.cellIndex;
    this.dropToken(col);
  }

  isWin(board, row, col) {
    let count = 0;
    let color = board[row][col];
    let modifierIndex = 0;
    const modifiers = [[1, 0], [-1, 0], [0, -1], [0, 1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

    let [rowModifier, colModifier] = modifiers[modifierIndex++];
    let currRow = row + rowModifier;
    let currCol = col + colModifier;

    while (count < 3 && modifierIndex < 8) {
      if (currRow < 0 || currRow >= board.length || currCol < 0 || currCol >= board[0].length || !(board[currRow][currCol] === color)) {
        [rowModifier, colModifier] = modifiers[modifierIndex++];
        currRow = row + rowModifier;
        currCol = col + colModifier;
        if (modifierIndex % 2 === 1) {
          count = 0;
        } 
      } else {
        count++;
        currRow += rowModifier;
        currCol += colModifier;
      }
    }

    return count === 3;
  }

  render() {
    const { boardValues, isRedNext } = this.state;

    return (
      <div className='app'>
        <h1>Connect Four</h1>
        <Board boardValues={boardValues} move={this.handleClick} />
        <p>{isRedNext ? 'Red' : 'Yellow'} to move</p>
      </div>
    );
  }
};

export default App;
