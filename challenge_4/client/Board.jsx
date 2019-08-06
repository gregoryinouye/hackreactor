import React from 'react';
import Square from './Square.jsx';

function Board(props) {
  return (
    <table>
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
        <tr>
          <Square /><Square /><Square /><Square /><Square /><Square /><Square />
        </tr>
        <tr>
          <Square /><Square /><Square /><Square /><Square /><Square /><Square />
        </tr>
        <tr>
          <Square /><Square /><Square /><Square /><Square /><Square /><Square />
        </tr>
        <tr>
          <Square /><Square /><Square /><Square /><Square /><Square /><Square />
        </tr>
        <tr>
          <Square /><Square /><Square /><Square /><Square /><Square /><Square />
        </tr>
        <tr>
          <Square /><Square /><Square /><Square /><Square /><Square /><Square />
        </tr>
      </tbody>
    </table>
  );
}

export default Board;
