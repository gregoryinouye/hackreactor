import React from 'react';

function Square({ value }) {
  return <td style={{padding: "0px"}}>
    <svg display="block" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%"/>
      <circle cx="50%" cy="50%" r="4" fill={value === 0 ? 'white' : value === 1 ? 'red' : 'yellow'}/>
    </svg>
  </td>;
}

export default Square;
