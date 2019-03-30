// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// object: stringifyObject,
// array: stringifyArray,
// function: undefined,
// symbol: undefined,
// undefined: undefined
// string: return string
// boolean: toString
// number: toString
// null: typeof object --> return 'null'

var stringifyJSON = function(obj) {
  if (typeof obj === 'object') {
  	if (obj === null) {
  		return 'null';
  	} else if (Array.isArray(obj)) {
  	  stringifyArray(obj);
  	} else {
  		// work on object
  	  return 'THIS SHOULD RETURN OBJECT';
  	}
  } else if (['boolean', 'number'].includes(typeof obj)) {
  	return obj.toString();
  } else if (typeof obj === 'string') {
  	return `${obj}`;
  } else if (['function', 'symbol', 'undefined'].includes(typeof obj)) {
  	return undefined;
  } 
};

var stringifyObject = function(obj) {
  
}

var stringifyArray = function(arr) {
  return arr.reduce(function(output, currentValue, currentIndex) {
  	if (currentIndex === 0) {
  		return output + stringifyJSON(currentValue);
  	} else {
  		return output + ',' + stringifyJSON(currentValue);
  	}
  }, '[') + ']';
}