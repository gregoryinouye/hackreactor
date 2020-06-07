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
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var numLength = cardNumber.length;
  var numPrefix = cardNumber.slice(0, 2);
  var numMedPrefix = cardNumber.slice(0,3);
  var numLongPrefix = cardNumber.slice(0, 4);
  var numSixPrefix = cardNumber.slice(0, 6);
  if (numLength === 14 && ['38', '39'].includes(numPrefix)) {
  	return 'Diner\'s Club';
  } else if (numLength === 15 && ['34', '37'].includes(numPrefix)) {
  	return 'American Express';
  } else if ([16, 18, 19].includes(numLength) && (['4903', '4905', '4911', '4936', '6333', '6759'].includes(numLongPrefix) || ['564182', '633110'].includes(cardNumber.slice(0,6)))) {
  	return 'Switch';
  } else if ([13, 16, 19].includes(numLength) && (numPrefix[0] === '4')) {
  	return 'Visa';
  } else if ((numLength === 16) && ['51', '52', '53', '54', '55'].includes(numPrefix)) {
  	return 'MasterCard';
  } else if ([16, 19].includes(numLength) && (numLongPrefix === '6011' || (numMedPrefix >= '644' && numMedPrefix <= '649') || numPrefix === '65')) {
  	return 'Discover';
  } else if ((numLength >= 12 && numLength <= 19) && ['5018', '5020', '5038', '6304'].includes(numLongPrefix)) {
  	return 'Maestro';
  } else if (([16, 17, 18, 19].includes(numLength)) && ((numSixPrefix >= 622126 && numSixPrefix <= 622925) || ['624', '625', '626'].includes(numMedPrefix) || (numLongPrefix >= 6282 && numLongPrefix <= 6288))){
  	return 'China UnionPay';
  } else {
  	return undefined;
  }
};


