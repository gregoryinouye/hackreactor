import React from 'react';

const Frame = (props) => {
  return (
    <div className="frame" style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", width: "50px", height: "50px", outline: "1px solid" }}>
      <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
      <div style={{ outline: "1px solid", width: "40%", height: "40%" }}></div>
    </div>
  );
}

export default Frame;
