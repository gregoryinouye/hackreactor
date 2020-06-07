import React from 'react';

const ballScoreStyle = { outline: "1px solid", width: "40%", height: "40%" };
const frameStyle = { display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" };

const Frame = (props) => {
  const { ball1, ball2 } = props;

  return (
    <div className="frame" style={frameStyle}>
      <div style={ballScoreStyle}></div>
      <div style={ballScoreStyle}></div>
      {ball1 + ball2}
    </div>
  );
}

export default Frame;
