import React from 'react';
import Square from './Square.jsx';

function Board({ boardValues }) {
  return (
    <table style={{borderCollapse: "collapse"}}>
      <thead>
        <tr>
          <th>arrow</th>
          <th>arrow</th>
          <th>arrow</th>
          <th>arrow</th>
          <th>arrow</th>
          <th>arrow</th>
          <th>arrow</th>
        </tr>
      </thead>
      <tbody>
        {boardValues.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((square, squareIndex) => (<Square value={row[squareIndex]} key={rowIndex + squareIndex} />))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Board;
