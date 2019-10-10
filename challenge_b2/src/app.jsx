import React from 'react';

import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board1: [[null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null]
            ],
      board2: [[null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null, null, null, null]
            ]
    };
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
};

export default App;
