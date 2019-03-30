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
  		// work on array
  		// return '[' + stringifyJSON()
  	} else {
  		// work on object
  	}
  } else if (['boolean', 'number', 'string'].includes(typeof obj)) {
  	return obj.toString();
  } else if (['function', 'symbol', 'undefined'].includes(typeof obj)) {
  	return undefined;
  } 
};

var stringifyObject = function(obj) {
  
}

var stringifyArray = function(arr) {

}