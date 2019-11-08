import React from 'react';

import Square from './Square.jsx';

function Board({ boardValues, move }) {
  return (
    <table style={{borderCollapse: "collapse", width: "100%", maxWidth: "896px", backgroundColor: "black"}}>
      <tbody>
        {boardValues.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((square, squareIndex) => (<Square value={row[squareIndex]} key={rowIndex*10 + squareIndex} move={move} />))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Board;
