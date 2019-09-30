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

  render() {
    const { boardValues } = this.state;

    return (
      <Board boardValues={boardValues} move={this.handleClick} />
      );
  }
}

export default App;
