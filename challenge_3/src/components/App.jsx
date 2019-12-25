import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Bowling Score Calculator</h1>
        <br></br>
        <div className="game" style={{ display: "flex" }}>
          <div className="frame">
            <div>
              extra pins
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
