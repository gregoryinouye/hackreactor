import React from 'react';

import Frame from './Frame';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: [0,0,0,0,0,0,0,0,0,0]
    };
  }

  render() {
    const { scores } = this.state;

    return (
      <div>
        <h1>Bowling Score Calculator</h1>
        <br></br>
        <div className="game" style={{ display: "flex" }}>
          {scores.map((score, index) => <Frame score={score} key={index + ':' + score} />)}
        </div>
      </div>
    );
  }
}

export default App;
