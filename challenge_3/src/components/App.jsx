import React, { useState } from 'react';

import Frame from './Frame';

const App = (props) => {
  const initialScore = Array.from({ length: 10 }, () => ({ ball1: null, ball2: null }));
  const [ scores, setScore ] = useState(initialScore);

  return (
    <div>
      <h1>Bowling Score Calculator</h1>
      <br></br>
      <div className="game" style={{ display: "flex" }}>
        {scores.map(({ ball1, ball2 }, index) => <Frame ball1={ball1} ball2={ball2} key={index + ':' + ball1 + ':' + ball2} />)}
      </div>
    </div>
  );
}

export default App;
