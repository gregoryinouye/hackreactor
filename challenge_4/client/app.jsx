import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardValues: [[0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0],
                      ],
      playerTurn: 1,
    };
  }

  render() {
    const { boardValues } = this.state;

    return (
      <Board boardValues={boardValues} />
      );
  }
}

export default App;
