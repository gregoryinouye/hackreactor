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
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
          <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
            <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
