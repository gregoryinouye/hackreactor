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

  render() {
    const { boardValues } = this.state;

    return (
      <Board boardValues={boardValues} />
      );
  }
}

export default App;
