import React from 'react';

const Square = (props) => {
  const { value, move } = props;
  const color = value || 'white';

  return (
    <td className="square">
      <svg display="block" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" >
       <rect x="0" y="0" width="100%" height="100%" />
       <circle cx="50%" cy="50%" r="4" fill={color} onClick={move} />
     </svg>
    </td>
  );
};

export default Square;
