import React from 'react';

function Square(props) {
  return <td>
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%"/>
      <circle cx="50%" cy="50%" r="4" fill="white"/>
    </svg>
  </td>;
}

export default Square;
