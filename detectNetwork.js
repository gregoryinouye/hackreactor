// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var numLength = cardNumber.length;
  var numPrefix = cardNumber.slice(0, 2);
  if (numLength === 14 && (numPrefix === '38' || numPrefix === '39')) {
  	return 'Diner\'s Club';
  } else if (numLength === 15 && (numPrefix === '34' || numPrefix === '37')) {
  	return 'American Express';
  } else if ((numLength === 13 || numLength === 16 || numLength === 19) && (numPrefix[0] === '4')) {
  	return 'Visa';
  } else if ((numLength === 16) && (numPrefix === '51' || numPrefix === '52' || numPrefix === '53' || numPrefix === '54' || numPrefix === '55')) {
  	return 'MasterCard';
  } else {
  	return undefined;
  }
};


