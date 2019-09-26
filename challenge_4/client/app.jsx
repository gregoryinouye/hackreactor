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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const col = e.target.parentNode.parentNode.cellIndex;
    const row = e.target.parentNode.parentNode.parentNode.rowIndex;
    console.log(col, row);
  }

  dropToken(col) {

  }

  render() {
    const { boardValues } = this.state;

    return (
      <Board boardValues={boardValues} move={this.handleClick} />
      );
  }
}

export default App;
